import { LitElement, html, TemplateResult, CSSResultGroup, css } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { WeatherCardConfig } from './types';

@customElement('nexus-weather-card-editor')
export class NexusWeatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: WeatherCardConfig;

  public setConfig(config: WeatherCardConfig): void {
    this._config = config;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;

    return html`
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize('ui.panel.lovelace.editor.card.generic.entity')} (Required)"
          .hass=${this.hass}
          .value=${this._config.entity}
          .configValue=${'entity'}
          @value-changed=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>
        
        <div class="side-by-side">
          <ha-formfield .label=${"Show Wind Speed"}>
            <ha-switch
              .checked=${this._config.show_wind !== false}
              .configValue=${'show_wind'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Rain Probability"}>
            <ha-switch
              .checked=${this._config.show_rain_prob !== false}
              .configValue=${'show_rain_prob'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `;
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) return;
    const target = ev.target;
    const value = target.checked !== undefined ? target.checked : ev.detail.value;

    this._config = { ...this._config, [target.configValue]: value };
    const event = new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  static get styles(): CSSResultGroup {
    return css`
      .side-by-side { display: flex; gap: 20px; margin-top: 15px; }
    `;
  }
}