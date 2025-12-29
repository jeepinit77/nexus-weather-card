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
          .includeDomains=${['weather', 'sensor']}
          .configValue=${'entity'}
          @value-changed=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>

        <div class="toggles">
          <ha-formfield .label=${"Show Wind Speed"}>
            <ha-switch
              .checked=${this._config.show_wind !== false}
              .configValue=${'show_wind'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Wind Gust"}>
            <ha-switch
              .checked=${this._config.show_wind_gust !== false}
              .configValue=${'show_wind_gust'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Wind Direction"}>
            <ha-switch
              .checked=${this._config.show_wind_bearing !== false}
              .configValue=${'show_wind_bearing'}
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

          <ha-formfield .label=${"Show Rain Amount"}>
            <ha-switch
              .checked=${this._config.show_rain_amt !== false}
              .configValue=${'show_rain_amt'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Feels Like"}>
            <ha-switch
              .checked=${this._config.show_feels_like !== false}
              .configValue=${'show_feels_like'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Humidity"}>
            <ha-switch
              .checked=${this._config.show_humidity !== false}
              .configValue=${'show_humidity'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Cloud Cover"}>
            <ha-switch
              .checked=${this._config.show_cloud_cover !== false}
              .configValue=${'show_cloud_cover'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show UV Index"}>
            <ha-switch
              .checked=${this._config.show_uv_index !== false}
              .configValue=${'show_uv_index'}
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
    if (!target?.configValue) return;
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
      .toggles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin-top: 15px;
      }
    `;
  }
}
