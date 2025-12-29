import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'nexus-weather-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface WeatherCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity: string; // Made required since the card needs a sensor
  show_rain_prob?: boolean;
  show_rain_amt?: boolean;
  show_wind?: boolean;
  show_wind_gust?: boolean;
  show_wind_bearing?: boolean;
  show_uv_index?: boolean;
  show_humidity?: boolean;
  show_cloud_cover?: boolean;
  show_feels_like?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}
