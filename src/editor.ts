import { LitElement, html, TemplateResult, CSSResultGroup, css } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { WeatherCardConfig } from './types';

@customElement('nexus-weather-card-editor')
export class NexusWeatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: WeatherCardConfig;

  public setConfig(config: WeatherCardConfig): void {
    const defaults: WeatherCardConfig = {
      entity: '',
      show_wind: true,
      show_rain_prob: true,
      show_rain_amt: false,
      show_wind_gust: false,
      show_wind_bearing: false,
      show_feels_like: false,
      show_humidity: false,
      show_cloud_cover: false,
      show_uv_index: false,
      ...config,
    };
    this._config = defaults;
  }

  protected render(): TemplateResult {
    if (!this._config) return html``;

    const entityPicker = this.hass
      ? html`
          <ha-entity-picker
            .label="${this.hass.localize('ui.panel.lovelace.editor.card.generic.entity')} (Required)"
            .hass=${this.hass}
            .value=${this._config.entity}
            .includeDomains=${['weather', 'sensor']}
            .configValue=${'entity'}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        `
      : html`
          <paper-input
            label="Entity (Required)"
            .value=${this._config.entity}
            .configValue=${'entity'}
            @value-changed=${this._valueChanged}
          ></paper-input>
        `;

    return html`
      <div class="card-config">
        ${entityPicker}

        <div class="actions">
          <mwc-button dense @click=${() => this._setAll(true)}>Select all</mwc-button>
          <mwc-button dense @click=${() => this._setAll(false)}>Deselect all</mwc-button>
        </div>

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
              .checked=${this._config.show_wind_gust === true}
              .configValue=${'show_wind_gust'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Wind Direction"}>
            <ha-switch
              .checked=${this._config.show_wind_bearing === true}
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
              .checked=${this._config.show_rain_amt === true}
              .configValue=${'show_rain_amt'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Feels Like"}>
            <ha-switch
              .checked=${this._config.show_feels_like === true}
              .configValue=${'show_feels_like'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Humidity"}>
            <ha-switch
              .checked=${this._config.show_humidity === true}
              .configValue=${'show_humidity'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Cloud Cover"}>
            <ha-switch
              .checked=${this._config.show_cloud_cover === true}
              .configValue=${'show_cloud_cover'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show UV Index"}>
            <ha-switch
              .checked=${this._config.show_uv_index === true}
              .configValue=${'show_uv_index'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `;
  }

  private _valueChanged(ev): void {
    if (!this._config) return;
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

  private _setAll(value: boolean): void {
    if (!this._config) return;
    const updated = {
      ...this._config,
      show_wind: value,
      show_wind_gust: value,
      show_wind_bearing: value,
      show_rain_prob: value,
      show_rain_amt: value,
      show_feels_like: value,
      show_humidity: value,
      show_cloud_cover: value,
      show_uv_index: value,
    };
    this._config = updated;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: updated },
      bubbles: true,
      composed: true,
    }));
  }

  static get styles(): CSSResultGroup {
    return css`
      .actions {
        display: flex;
        gap: 8px;
        margin: 12px 0 4px;
      }
      .toggles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin-top: 15px;
      }
    `;
  }
}
