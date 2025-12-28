import { LitElement, html, css, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCard, LovelaceCardConfig } from 'custom-card-helpers';

interface Config extends LovelaceCardConfig {
  entity: string;
  show_rain_prob?: boolean;
  show_rain_amt?: boolean;
  show_wind?: boolean;
}
interface ForecastDay {
  datetime: string;
  condition: string;
  temperature: number;
  templow: number;
  precipitation_probability?: number;
  precipitation?: number;
  wind_speed?: number;
  daytime?: boolean;
}

@customElement('nexus-weather-card')
export class NexusWeatherCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: Config;

  public getCardSize(): number {
    return 3; // This tells Home Assistant the card is roughly 3 rows tall
  }

  public setConfig(config: Config): void {
    if (!config.entity) throw new Error("Please define a weather sensor entity");
    this.config = config;
  }

  // Helper for Day Names
  private getDayName(dateStr: string, index: number): string {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
  }

  // Your original Icon Logic
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

  protected render(): TemplateResult {
    const sensor = this.hass.states[this.config.entity];
    if (!sensor || !sensor.attributes.forecast) return html`<ha-card>Sensor not found...</ha-card>`;

    const forecast = sensor.attributes.forecast.slice(0, 7);

    return html`
      <ha-card>
        <div class="grid-container">
          ${forecast.map((day: ForecastDay, i: number) => html`
            <div class="column ${i < 6 ? 'divider' : ''}">
              <div class="day-label">${this.getDayName(day.datetime, i)}</div>
              
              <div class="icon-wrapper">
                <img src="/local/weather-icons/${this.getLocalIconFile(day.condition, day)}" />
              </div>

              <div class="temp-high">${Math.round(day.temperature)}°</div>
              <div class="temp-low">${Math.round(day.templow)}°</div>

              ${this.config.show_rain_prob ? html`<div class="detail rain">${day.precipitation_probability}%</div>` : ''}
              ${this.config.show_rain_amt ? html`<div class="detail rain-amt">${day.precipitation} in</div>` : ''}
              ${this.config.show_wind ? html`<div class="detail wind">${Math.round(day.wind_speed ?? 0)} mph</div>` : ''}
              </div>
          `)}
        </div>
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-card {
        border-radius: 22px;
        overflow: hidden;
        background: var(--ha-card-background, rgba(255,255,255,0.05));
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        width: 100%;
      }
      .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
      }
      .divider { border-right: 1px solid rgba(255,255,255,0.1); }
      .day-label { padding: 10px 0; font-weight: 800; font-size: 0.9em; }
      .icon-wrapper img { width: 40px; height: 40px; }
      .temp-high { font-size: 1.5em; font-weight: 600; color: #fff; }
      .temp-low { font-size: 1.5em; font-weight: 600; color: rgba(255,255,255,0.6); }
      .detail { font-size: 0.8em; font-weight: 700; margin-top: 4px; }
      .rain { color: #a5c3d7; }
      .wind { color: #e8ecf0; opacity: 0.8; }
    `;
  }
}