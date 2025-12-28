"use strict";(()=>{var p=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var g=(o=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(o,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):o)(function(o){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+o+'" is not supported')});var c=(o,e,r,i)=>{for(var t=i>1?void 0:i?m(e,r):e,d=o.length-1,l;d>=0;d--)(l=o[d])&&(t=(i?l(e,r,t):l(t))||t);return i&&t&&p(e,r,t),t};var n=g("lit"),s=g("lit/decorators.js");var a=class extends n.LitElement{getCardSize(){return 3}setConfig(e){if(!e.entity)throw new Error("Please define a weather sensor entity");this.config=e}getDayName(e,r){return r===0?"Today":r===1?"Tomorrow":new Date(e).toLocaleDateString("en-US",{weekday:"short",day:"numeric"})}getLocalIconFile(e,r){let i=(e||"").toLowerCase(),t=r?.daytime??!0;return["sunny","clear"].includes(i)?t?"clear-day.svg":"clear-night.svg":i.includes("partly")?t?"partly-cloudy-day.svg":"partly-cloudy-night.svg":["pouring","rainy","rain"].includes(i)?"rain.svg":i==="drizzle"?"drizzle.svg":["lightning","thunderstorm"].includes(i)?"thunderstorm.svg":["snowy","snow"].includes(i)?"snow.svg":["fog","hazy","mist"].includes(i)?"fog.svg":i==="windy"?"wind.svg":"cloudy.svg"}render(){let e=this.hass.states[this.config.entity];if(!e||!e.attributes.forecast)return n.html`<ha-card>Sensor not found...</ha-card>`;let r=e.attributes.forecast.slice(0,7);return n.html`
      <ha-card>
        <div class="grid-container">
          ${r.map((i,t)=>n.html`
            <div class="column ${t<6?"divider":""}">
              <div class="day-label">${this.getDayName(i.datetime,t)}</div>
              
              <div class="icon-wrapper">
                <img src="/local/weather-icons/${this.getLocalIconFile(i.condition,i)}" />
              </div>

              <div class="temp-high">${Math.round(i.temperature)}°</div>
              <div class="temp-low">${Math.round(i.templow)}°</div>

              ${this.config.show_rain_prob?n.html`<div class="detail rain">${i.precipitation_probability}%</div>`:""}
              ${this.config.show_rain_amt?n.html`<div class="detail rain-amt">${i.precipitation} in</div>`:""}
              ${this.config.show_wind?n.html`<div class="detail wind">${Math.round(i.wind_speed??0)} mph</div>`:""}
              </div>
          `)}
        </div>
      </ha-card>
    `}static get styles(){return n.css`
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
    `}};c([(0,s.property)({attribute:!1})],a.prototype,"hass",2),c([(0,s.state)()],a.prototype,"config",2),a=c([(0,s.customElement)("nexus-weather-card")],a);})();
