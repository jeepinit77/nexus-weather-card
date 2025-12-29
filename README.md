# Nexus Weather Card

A compact 7-day forecast card for Home Assistant. Supports weather or sensor entities with a `forecast` attribute and lets you toggle which details to show (rain, wind, humidity, clouds, UV, feels like, etc.). Includes select-all/deselect-all controls in the editor.

## Installation

1) Build the card or grab the bundled file:
   - `npm install`
   - `npm run build` (outputs `dist/nexus-weather-card.js`)
2) Add the resource to Lovelace:
   ```yaml
   resources:
     - url: /local/nexus-weather-card.js
       type: module
   ```
   (Copy `dist/nexus-weather-card.js` to your `/config/www/` directory.)

## Usage

YAML example:
```yaml
type: custom:nexus-weather-card
entity: weather.nexus_7_day_forecast
show_rain_prob: true
show_wind: true
show_rain_amt: false
show_wind_gust: false
show_wind_bearing: false
show_feels_like: false
show_humidity: false
show_cloud_cover: false
show_uv_index: false
```

Options (defaults match the card’s current display):
- `entity` (required): weather or sensor entity with `attributes.forecast`.
- `show_wind` (default: true)
- `show_rain_prob` (default: true)
- `show_rain_amt` (default: false)
- `show_wind_gust` (default: false)
- `show_wind_bearing` (default: false)
- `show_feels_like` (default: false)
- `show_humidity` (default: false)
- `show_cloud_cover` (default: false)
- `show_uv_index` (default: false)

### Editor
- The entity picker is required.
- Use “Select all” / “Deselect all” to toggle every weather detail at once.
- Individual switches mirror the options above.

## Google Weather sensor (example setup)

If you have (or build) a Google-based forecast endpoint that returns JSON like the sample you shared, you can expose it to the card via a REST sensor plus a Template Weather entity.

Example `configuration.yaml`:
```yaml
sensor:
  - platform: rest
    name: google_weather_raw
    resource: https://YOUR_ENDPOINT/returns/google/forecast  # replace with your endpoint
    json_attributes:
      - forecast
      - temperature
      - apparent_temperature
      - humidity
    value_template: "{{ value_json.condition }}"
    scan_interval: 900

weather:
  - platform: template
    name: Nexus 7 Day Forecast
    condition_template: "{{ states('sensor.google_weather_raw') }}"
    temperature_template: "{{ state_attr('sensor.google_weather_raw', 'temperature') }}"
    humidity_template: "{{ state_attr('sensor.google_weather_raw', 'humidity') }}"
    forecast_template: "{{ state_attr('sensor.google_weather_raw', 'forecast') }}"
```

Then point the card at `weather.nexus_7_day_forecast`. The forecast objects should include keys like `condition`, `datetime`, `temperature`, `templow`, `precipitation_probability`, `precipitation`, `wind_speed`, `wind_gust_speed`, `wind_bearing`, `apparent_temperature`, `humidity`, `cloud_coverage`, `uv_index` so the card can render every toggleable detail. If your endpoint returns a different shape, adjust the `template` mapping accordingly.

## Notes
- Icons load from `/local/weather-icons/…`. Ensure your icon files live there or adjust the path in `src/nexus-weather-card.ts`.
- Temperature units follow Home Assistant’s `unit_system`.
