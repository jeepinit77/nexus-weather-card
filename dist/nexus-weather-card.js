"use strict";(()=>{var Ft=Object.defineProperty;var Gt=Object.getOwnPropertyDescriptor;var _=(r,t,e,i)=>{for(var s=i>1?void 0:i?Gt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ft(t,e,s),s};var D=window,V=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),yt=new WeakMap,q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(V&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&yt.set(e,t))}return t}toString(){return this.cssText}},bt=r=>new q(typeof r=="string"?r:r+"",void 0,St);var X=(r,t)=>{V?r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((e=>{let i=document.createElement("style"),s=D.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}))},I=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return bt(e)})(r):r;var Y,B=window,Et=B.trustedTypes,Jt=Et?Et.emptyScript:"",At=B.reactiveElementPolyfillSupport,et={toAttribute(r,t){switch(t){case Boolean:r=r?Jt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},wt=(r,t)=>t!==r&&(t==t||r==r),tt={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:wt},it="finalized",y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach(((e,i)=>{let s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||tt}static finalize(){if(this.hasOwnProperty(it))return!1;this[it]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(I(s))}else t!==void 0&&e.push(I(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach((e=>e(this)))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return X(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach((e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach((e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=tt){var s;let o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){let n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:et).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){let n=s.getPropertyOptions(o),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:et;this._$El=o,this[o]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||wt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((s,o)=>this[o]=s)),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach((s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)})),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach((i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach(((e,i)=>this._$EO(i,this[i],e))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y[it]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},At?.({ReactiveElement:y}),((Y=B.reactiveElementVersions)!==null&&Y!==void 0?Y:B.reactiveElementVersions=[]).push("1.6.3");var st,K=window,w=K.trustedTypes,Ct=w?w.createPolicy("lit-html",{createHTML:r=>r}):void 0,ot="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,Tt="?"+$,Wt=`<${Tt}>`,E=document,k=()=>E.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",Ht=Array.isArray,Zt=r=>Ht(r)||typeof r?.[Symbol.iterator]=="function",rt=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,Pt=/>/g,S=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Rt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Mt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=Mt(1),ae=Mt(2),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ot=new WeakMap,b=E.createTreeWalker(E,129,null,!1);function zt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ct!==void 0?Ct.createHTML(t):t}var Qt=(r,t)=>{let e=r.length-1,i=[],s,o=t===2?"<svg>":"",n=O;for(let h=0;h<e;h++){let l=r[h],a,c,d=-1,u=0;for(;u<l.length&&(n.lastIndex=u,c=n.exec(l),c!==null);)u=n.lastIndex,n===O?c[1]==="!--"?n=xt:c[1]!==void 0?n=Pt:c[2]!==void 0?(Lt.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=S):c[3]!==void 0&&(n=S):n===S?c[0]===">"?(n=s??O,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=c[3]===void 0?S:c[3]==='"'?Rt:Ut):n===Rt||n===Ut?n=S:n===xt||n===Pt?n=O:(n=S,s=void 0);let v=n===S&&r[h+1].startsWith("/>")?" ":"";o+=n===O?l+Wt:d>=0?(i.push(a),l.slice(0,d)+ot+l.slice(d)+$+v):l+$+(d===-2?(i.push(void 0),h):v)}return[zt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]},H=class r{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0,h=t.length-1,l=this.parts,[a,c]=Qt(t,e);if(this.el=r.createElement(a,i),b.currentNode=this.el.content,e===2){let d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=b.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){let d=[];for(let u of s.getAttributeNames())if(u.endsWith(ot)||u.startsWith($)){let v=c[n++];if(d.push(u),v!==void 0){let Kt=s.getAttribute(v.toLowerCase()+ot).split($),j=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:j[2],strings:Kt,ctor:j[1]==="."?lt:j[1]==="?"?at:j[1]==="@"?ht:x})}else l.push({type:6,index:o})}for(let u of d)s.removeAttribute(u)}if(Lt.test(s.tagName)){let d=s.textContent.split($),u=d.length-1;if(u>0){s.textContent=w?w.emptyScript:"";for(let v=0;v<u;v++)s.append(d[v],k()),b.nextNode(),l.push({type:2,index:++o});s.append(d[u],k())}}}else if(s.nodeType===8)if(s.data===Tt)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)l.push({type:7,index:o}),d+=$.length-1}o++}}static createElement(t,e){let i=E.createElement("template");return i.innerHTML=t,i}};function C(r,t,e=r,i){var s,o,n,h;if(t===A)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl,a=T(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=C(r,l._$AS(r,t.values),l,i)),t}var nt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:E).importNode(i,!0);b.currentNode=o;let n=b.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new L(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new ct(n,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(n=b.nextNode(),h++)}return b.currentNode=E,o}v(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},L=class r{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),T(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(zt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{let n=new nt(o,this),h=n.u(this.options);n.v(i),this.$(h),this._$AH=n}}_$AC(t){let e=Ot.get(t.strings);return e===void 0&&Ot.set(t.strings,e=new H(t)),e}T(t){Ht(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new r(this.k(k()),this.k(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},x=class{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let o=this.strings,n=!1;if(o===void 0)t=C(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{let h=t,l,a;for(t=o[0],l=0;l<o.length-1;l++)a=C(this,h[i+l],e,l),a===A&&(a=this._$AH[l]),n||(n=!T(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},lt=class extends x{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Xt=w?w.emptyScript:"",at=class extends x{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Xt):this.element.removeAttribute(this.name)}},ht=class extends x{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=C(this,t,e,0))!==null&&i!==void 0?i:p)===A)return;let s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},ct=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var kt=K.litHtmlPolyfillSupport;kt?.(H,L),((st=K.litHtmlVersions)!==null&&st!==void 0?st:K.litHtmlVersions=[]).push("2.8.0");var Nt=(r,t,e)=>{var i,s;let o=(i=e?.renderBefore)!==null&&i!==void 0?i:t,n=o._$litPart$;if(n===void 0){let h=(s=e?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new L(t.insertBefore(k(),h),h,void 0,e??{})}return n._$AI(r),n};var F=window,G=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),jt=new WeakMap,M=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(G&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=jt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&jt.set(e,t))}return t}toString(){return this.cssText}},Dt=r=>new M(typeof r=="string"?r:r+"",void 0,dt),z=(r,...t)=>{let e=r.length===1?r[0]:t.reduce(((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1]),r[0]);return new M(e,r,dt)},pt=(r,t)=>{G?r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((e=>{let i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}))},J=G?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Dt(e)})(r):r;var ut,W=window,qt=W.trustedTypes,Yt=qt?qt.emptyScript:"",Vt=W.reactiveElementPolyfillSupport,ft={toAttribute(r,t){switch(t){case Boolean:r=r?Yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},It=(r,t)=>t!==r&&(t==t||r==r),vt={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:It},mt="finalized",g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach(((e,i)=>{let s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||vt}static finalize(){if(this.hasOwnProperty(mt))return!1;this[mt]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach((e=>e(this)))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return pt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach((e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach((e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=vt){var s;let o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){let n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:ft).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){let n=s.getPropertyOptions(o),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:ft;this._$El=o,this[o]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||It)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((s,o)=>this[o]=s)),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach((s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)})),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach((i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach(((e,i)=>this._$EO(i,this[i],e))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};g[mt]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},Vt?.({ReactiveElement:g}),((ut=W.reactiveElementVersions)!==null&&ut!==void 0?ut:W.reactiveElementVersions=[]).push("1.6.3");var gt,_t;var m=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}};m.finalized=!0,m._$litElement$=!0,(gt=globalThis.litElementHydrateSupport)===null||gt===void 0||gt.call(globalThis,{LitElement:m});var Bt=globalThis.litElementPolyfillSupport;Bt?.({LitElement:m});((_t=globalThis.litElementVersions)!==null&&_t!==void 0?_t:globalThis.litElementVersions=[]).push("3.3.3");var Z=r=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(r,t):((e,i)=>{let{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(n){customElements.define(e,n)}}})(r,t);var te=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}},ee=(r,t,e)=>{t.constructor.createProperty(e,r)};function P(r){return(t,e)=>e!==void 0?ee(r,t,e):te(r,t)}function Q(r){return P({...r,state:!0})}var $t,je=(($t=window.HTMLSlotElement)===null||$t===void 0?void 0:$t.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));var U=class extends m{setConfig(t){this._config=t}render(){return!this.hass||!this._config?f``:f`
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (Required)"
          .hass=${this.hass}
          .value=${this._config.entity}
          .includeDomains=${["weather","sensor"]}
          .configValue=${"entity"}
          @value-changed=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>

        <div class="toggles">
          <ha-formfield .label=${"Show Wind Speed"}>
            <ha-switch
              .checked=${this._config.show_wind!==!1}
              .configValue=${"show_wind"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Rain Probability"}>
            <ha-switch
              .checked=${this._config.show_rain_prob!==!1}
              .configValue=${"show_rain_prob"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Rain Amount"}>
            <ha-switch
              .checked=${this._config.show_rain_amt!==!1}
              .configValue=${"show_rain_amt"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}_valueChanged(t){if(!this._config||!this.hass)return;let e=t.target;if(!e?.configValue)return;let i=e.checked!==void 0?e.checked:t.detail.value;this._config={...this._config,[e.configValue]:i};let s=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(s)}static get styles(){return z`
      .toggles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin-top: 15px;
      }
    `}};_([P({attribute:!1})],U.prototype,"hass",2),_([Q()],U.prototype,"_config",2),U=_([Z("nexus-weather-card-editor")],U);var R=class extends m{getCardSize(){return 3}setConfig(t){if(!t.entity)throw new Error("Please define a weather sensor entity");this.config=t}getDayName(t,e){return e===0?"Today":e===1?"Tomorrow":new Date(t).toLocaleDateString("en-US",{weekday:"short",day:"numeric"})}getLocalIconFile(t,e){let i=(t||"").toLowerCase(),s=e?.daytime??!0;return["sunny","clear"].includes(i)?s?"clear-day.svg":"clear-night.svg":i.includes("partly")?s?"partly-cloudy-day.svg":"partly-cloudy-night.svg":["pouring","rainy","rain"].includes(i)?"rain.svg":i==="drizzle"?"drizzle.svg":["lightning","thunderstorm"].includes(i)?"thunderstorm.svg":["snowy","snow"].includes(i)?"snow.svg":["fog","hazy","mist"].includes(i)?"fog.svg":i==="windy"?"wind.svg":"cloudy.svg"}render(){let t=this.hass.states[this.config.entity];if(!t||!t.attributes.forecast)return f`<ha-card>Sensor not found...</ha-card>`;let e=t.attributes.forecast.slice(0,7),i=this.hass.config?.unit_system?.temperature??"\xB0";return f`
      <ha-card>
        <div class="grid-container">
          ${e.map((s,o)=>f`
            <div class="column ${o<6?"divider":""}">
              <div class="day-label">${this.getDayName(s.datetime,o)}</div>
              
              <div class="icon-wrapper">
                <img src="/local/weather-icons/${this.getLocalIconFile(s.condition,s)}" alt=${s.condition} />
              </div>

              <div class="temp-row">
                <span class="temp-high">${Math.round(s.temperature)}${i}</span>
                <span class="temp-low">${Math.round(s.templow)}${i}</span>
              </div>

              ${this.config.show_rain_prob&&s.precipitation_probability!==void 0?f`<div class="detail rain">${s.precipitation_probability}%</div>`:""}
              ${this.config.show_rain_amt&&s.precipitation!==void 0?f`<div class="detail rain-amt">${s.precipitation} in</div>`:""}
              ${this.config.show_wind?f`<div class="detail wind">${Math.round(s.wind_speed??0)} mph</div>`:""}
            </div>
          `)}
        </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("nexus-weather-card-editor")}static getStubConfig(){return{type:"custom:nexus-weather-card",entity:"sensor.nexus_7_day_forecast",show_rain_prob:!0}}static get styles(){return z`
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
      .detail {
        line-height: 1.2;
      }
    `}};_([P({attribute:!1})],R.prototype,"hass",2),_([Q()],R.prototype,"config",2),R=_([Z("nexus-weather-card")],R);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
@lit/reactive-element/reactive-element.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
