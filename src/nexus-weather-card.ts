import { LitElement, html, css, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCard, LovelaceCardConfig } from 'custom-card-helpers';
import './editor';

interface Config extends LovelaceCardConfig {
  entity: string;
  show_rain_prob?: boolean;
  show_rain_amt?: boolean;
  show_wind?: boolean;
  show_wind_gust?: boolean;
  show_wind_bearing?: boolean;
  show_uv_index?: boolean;
  show_humidity?: boolean;
  show_cloud_cover?: boolean;
  show_feels_like?: boolean;
}

interface ForecastDay {
  datetime: string;
  condition: string;
  temperature: number;
  templow: number;
  precipitation_probability?: number;
  precipitation?: number;
  wind_speed?: number;
  wind_gust_speed?: number;
  wind_bearing?: number;
  uv_index?: number;
  humidity?: number;
  cloud_coverage?: number;
  apparent_temperature?: number;
  daytime?: boolean;
}

@customElement('nexus-weather-card')
export class NexusWeatherCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: Config;

  public getCardSize(): number {
    return 3;
  }

  public setConfig(config: Config): void {
    if (!config.entity) throw new Error("Please define a weather sensor entity");
    this.config = config;
  }

  private getDayName(dateStr: string, index: number): string {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
  }

  private getLocalIconFile(cond: string, dayObj: ForecastDay): string {
    const c = (cond || "").toLowerCase();
    const isDay = dayObj?.daytime ?? true;

    if (["sunny", "clear"].includes(c)) return isDay ? "clear-day.svg" : "clear-night.svg";
    if (c.includes("partly")) return isDay ? "partly-cloudy-day.svg" : "partly-cloudy-night.svg";
    if (["pouring", "rainy", "rain"].includes(c)) return "rain.svg";
    if (c === "drizzle") return "drizzle.svg";
    if (["lightning", "thunderstorm"].includes(c)) return "thunderstorm.svg";
    if (["snowy", "snow"].includes(c)) return "snow.svg";
    if (["fog", "hazy", "mist"].includes(c)) return "fog.svg";
    if (c === "windy") return "wind.svg";
    return "cloudy.svg";
  }

  private bearingToCardinal(bearing?: number): string {
    if (bearing === undefined || isNaN(bearing)) return "";
    const dirs = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    const idx = Math.floor(((bearing % 360) / 22.5) + 0.5) % 16;
    return `${dirs[idx]} ${Math.round(bearing)}°`;
  }

  protected render(): TemplateResult {
    const sensor = this.hass.states[this.config.entity];
    if (!sensor || !sensor.attributes.forecast) return html`<ha-card>Sensor not found...</ha-card>`;

    const forecast = sensor.attributes.forecast.slice(0, 7);
    const tempUnit = this.hass.config?.unit_system?.temperature ?? '\u00b0';

    return html`
      <ha-card>
        <div class="grid-container">
          ${forecast.map((day: ForecastDay, i: number) => html`
            <div class="column ${i < 6 ? 'divider' : ''}">
              <div class="day-label">${this.getDayName(day.datetime, i)}</div>
              
              <div class="icon-wrapper">
                <img src="/local/weather-icons/${this.getLocalIconFile(day.condition, day)}" alt=${day.condition} />
              </div>

              <div class="temp-row">
                <span class="temp-high">${Math.round(day.temperature)}${tempUnit}</span>
                <span class="temp-low">${Math.round(day.templow)}${tempUnit}</span>
              </div>

              ${this.config.show_rain_prob && day.precipitation_probability !== undefined
                ? html`<div class="detail rain">${day.precipitation_probability}%</div>`
                : ''}
              ${this.config.show_rain_amt && day.precipitation !== undefined
                ? html`<div class="detail rain-amt">${day.precipitation} in</div>`
                : ''}
              ${this.config.show_wind
                ? html`<div class="detail wind">${Math.round(day.wind_speed ?? 0)} mph</div>`
                : ''}
              ${this.config.show_wind_gust
                ? html`<div class="detail wind">${Math.round(day.wind_gust_speed ?? 0)} mph gusts</div>`
                : ''}
              ${this.config.show_wind_bearing
                ? html`<div class="detail wind-dir">${this.bearingToCardinal(day.wind_bearing)}</div>`
                : ''}
              ${this.config.show_feels_like && day.apparent_temperature !== undefined
                ? html`<div class="detail feels">Feels ${Math.round(day.apparent_temperature)}${tempUnit}</div>`
                : ''}
              ${this.config.show_humidity && day.humidity !== undefined
                ? html`<div class="detail humidity">${day.humidity}% humidity</div>`
                : ''}
              ${this.config.show_cloud_cover && day.cloud_coverage !== undefined
                ? html`<div class="detail clouds">${day.cloud_coverage}% clouds</div>`
                : ''}
              ${this.config.show_uv_index && day.uv_index !== undefined
                ? html`<div class="detail uv">UV ${day.uv_index}</div>`
                : ''}
            </div>
          `)}
        </div>
      </ha-card>
    `;
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement("nexus-weather-card-editor");
  }

  public static getStubConfig(): LovelaceCardConfig {
    return {
      type: "custom:nexus-weather-card",
      entity: "sensor.nexus_7_day_forecast",
      show_rain_prob: true
    };
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-card {
        padding: 12px 16px 16px;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
      }
      .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        text-align: center;
        padding: 4px 0;
      }
      .divider {
        border-right: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      }
      .day-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--secondary-text-color);
      }
      .icon-wrapper {
        width: 64px;
        height: 64px;
        display: grid;
        place-items: center;
      }
      .icon-wrapper img {
        width: 56px;
        height: 56px;
        object-fit: contain;
      }
      .temp-row {
        display: flex;
        gap: 6px;
        align-items: baseline;
        justify-content: center;
      }
      .temp-high { 
        font-size: clamp(18px, 3vw, 24px); 
        font-weight: 700; 
        color: var(--primary-text-color);
        letter-spacing: -0.02em;
        line-height: 1.05;
      }
      .temp-low { 
        font-size: clamp(16px, 2.5vw, 20px); 
        font-weight: 600; 
        color: rgba(232, 236, 240, 0.62);
        letter-spacing: -0.02em;
        line-height: 1.05;
      }
      .rain {
        font-size: 13px;
        font-weight: 700;
        color: rgba(165, 195, 215, 0.82);
      }
      .rain-amt {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .wind {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .wind-dir {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .feels,
      .humidity,
      .clouds,
      .uv {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .detail {
        line-height: 1.2;
      }
    `;
  }
}
