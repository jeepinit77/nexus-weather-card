# Nexus Weather Card

A compact 7-day forecast card for Home Assistant. Works with weather or sensor entities that expose a `forecast` attribute and lets you toggle which details to show (rain, wind, humidity, clouds, UV, feels like, etc.). The editor includes select-all/deselect-all controls.

## Installation

1) Build the card or grab the bundled file:
   - `npm install`
   - `npm run build` (outputs `dist/nexus-weather-card.js`)
2) Add the resource to Lovelace and place the built file in `/config/www/`:
   ```yaml
   resources:
     - url: /local/nexus-weather-card.js
       type: module
   ```

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
- Entity picker is required.
- “Select all” / “Deselect all” toggles every weather detail at once.
- Individual switches mirror the options above.

## Google Weather setup (example)

You need an API/feed that returns a Google-style multi-day forecast JSON. Set that up first, then expose it to Home Assistant and the card. The card itself only reads the `forecast` attribute; it does not call any APIs directly.

### REST sensor + template weather

`configuration.yaml` example:
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

Point the card at `weather.nexus_7_day_forecast`. Forecast objects should include keys such as `condition`, `datetime`, `temperature`, `templow`, `precipitation_probability`, `precipitation`, `wind_speed`, `wind_gust_speed`, `wind_bearing`, `apparent_temperature`, `humidity`, `cloud_coverage`, `uv_index` so every toggleable detail can render. Adjust the template mapping if your feed uses different keys.

### Optional automation: keep helper sensors updated

If you keep helper entities (input_numbers) for today/tomorrow highs/lows/PoP, this automation refreshes them hourly using your Google weather entity:
```yaml
alias: Update Today & Tomorrow High/Low/PoP (Google Weather) - Hourly
triggers:
  - platform: time_pattern
    minutes: "0"
  - platform: homeassistant
    event: start
actions:
  - action: weather.get_forecasts
    target:
      entity_id: weather.google_weather_home
    data:
      type: daily
    response_variable: fc
  - variables:
      days: "{{ fc['weather.google_weather_home'].forecast }}"
      today: "{{ days[0] if days|count > 0 else none }}"
      tomorrow: "{{ days[1] if days|count > 1 else none }}"
  - choose:
      - conditions: "{{ today is not none }}"
        sequence:
          - action: input_number.set_value
            target: { entity_id: input_number.today_high_google }
            data: { value: "{{ today.temperature }}" }
          - action: input_number.set_value
            target: { entity_id: input_number.today_low_google }
            data: { value: "{{ today.templow }}" }
          - action: input_number.set_value
            target: { entity_id: input_number.today_pop_google }
            data: { value: "{{ (today.precipitation_probability | default(0)) | round(0) }}" }
  - choose:
      - conditions: "{{ tomorrow is not none }}"
        sequence:
          - action: input_number.set_value
            target: { entity_id: input_number.tomorrow_high_google }
            data: { value: "{{ tomorrow.temperature }}" }
          - action: input_number.set_value
            target: { entity_id: input_number.tomorrow_low_google }
            data: { value: "{{ tomorrow.templow }}" }
          - action: input_number.set_value
            target: { entity_id: input_number.tomorrow_pop_google }
            data: { value: "{{ (tomorrow.precipitation_probability | default(0)) | round(0) }}" }
mode: single
```
Swap in your own weather entity ID and helper entity IDs if they differ.

## Notes
- Icons load from `/local/weather-icons/`. Place your icon files there or update the path in `src/nexus-weather-card.ts`.
- Temperature units follow Home Assistant’s `unit_system`.
