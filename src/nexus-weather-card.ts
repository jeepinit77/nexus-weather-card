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
  // This tells Home Assistant which editor to open when you click 'Edit'
// The return type must be HTMLElement or a specific custom element
  public static getConfigElement(): HTMLElement {
    return document.createElement("nexus-weather-card-editor");
  }

  // The return type should match your Config interface
  public static getStubConfig(): LovelaceCardConfig {
    return {
      type: "custom:nexus-weather-card",
      entity: "sensor.nexus_7_day_forecast",
      show_rain_prob: true
    };
  }

static get styles(): CSSResultGroup {
    return css`
      .temp-high { 
        font-size: clamp(34px, 6.6cqw, 72px); 
        font-weight: 650; 
        color: rgba(232, 236, 240, 0.92); 
        letter-spacing: -0.15cqw;
        line-height: 0.98;
      }
      .temp-low { 
        font-size: clamp(34px, 6.6cqw, 72px); 
        font-weight: 650; 
        color: rgba(232, 236, 240, 0.62); 
        letter-spacing: -0.15cqw;
        line-height: 0.98;
      }
      .rain {
        font-size: clamp(16px, 3.0cqw, 34px);
        font-weight: 750;
        color: rgba(165, 195, 215, 0.82);
      }
    `;
  }
}