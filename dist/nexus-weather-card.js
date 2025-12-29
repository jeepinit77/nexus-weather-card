"use strict";(()=>{var Ft=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var g=(o,t,e,i)=>{for(var s=i>1?void 0:i?Kt(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ft(t,e,s),s};var D=window,q=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),yt=new WeakMap,V=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(q&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&yt.set(e,t))}return t}toString(){return this.cssText}},bt=o=>new V(typeof o=="string"?o:o+"",void 0,wt);var X=(o,t)=>{q?o.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((e=>{let i=document.createElement("style"),s=D.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}))},I=q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return bt(e)})(o):o;var Y,B=window,St=B.trustedTypes,Gt=St?St.emptyScript:"",Et=B.reactiveElementPolyfillSupport,et={toAttribute(o,t){switch(t){case Boolean:o=o?Gt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},At=(o,t)=>t!==o&&(t==t||o==o),tt={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:At},it="finalized",y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach(((e,i)=>{let s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||tt}static finalize(){if(this.hasOwnProperty(it))return!1;this[it]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(I(s))}else t!==void 0&&e.push(I(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach((e=>e(this)))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return X(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach((e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach((e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=tt){var s;let r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){let n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:et).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){let n=s.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:et;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||At)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((s,r)=>this[r]=s)),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach((s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)})),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach((i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach(((e,i)=>this._$EO(i,this[i],e))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y[it]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},Et?.({ReactiveElement:y}),((Y=B.reactiveElementVersions)!==null&&Y!==void 0?Y:B.reactiveElementVersions=[]).push("1.6.3");var st,W=window,A=W.trustedTypes,Ct=A?A.createPolicy("lit-html",{createHTML:o=>o}):void 0,rt="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,Tt="?"+$,Jt=`<${Tt}>`,S=document,O=()=>S.createComment(""),T=o=>o===null||typeof o!="object"&&typeof o!="function",Nt=Array.isArray,Zt=o=>Nt(o)||typeof o?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,Pt=/>/g,w=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,kt=/"/g,Mt=/^(?:script|style|textarea|title)$/i,Ht=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=Ht(1),le=Ht(2),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Rt=new WeakMap,b=S.createTreeWalker(S,129,null,!1);function Lt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ct!==void 0?Ct.createHTML(t):t}var Qt=(o,t)=>{let e=o.length-1,i=[],s,r=t===2?"<svg>":"",n=R;for(let h=0;h<e;h++){let a=o[h],l,c,d=-1,f=0;for(;f<a.length&&(n.lastIndex=f,c=n.exec(a),c!==null);)f=n.lastIndex,n===R?c[1]==="!--"?n=xt:c[1]!==void 0?n=Pt:c[2]!==void 0?(Mt.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=w):c[3]!==void 0&&(n=w):n===w?c[0]===">"?(n=s??R,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,l=c[1],n=c[3]===void 0?w:c[3]==='"'?kt:Ut):n===kt||n===Ut?n=w:n===xt||n===Pt?n=R:(n=w,s=void 0);let v=n===w&&o[h+1].startsWith("/>")?" ":"";r+=n===R?a+Jt:d>=0?(i.push(l),a.slice(0,d)+rt+a.slice(d)+$+v):a+$+(d===-2?(i.push(void 0),h):v)}return[Lt(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]},N=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,h=t.length-1,a=this.parts,[l,c]=Qt(t,e);if(this.el=o.createElement(l,i),b.currentNode=this.el.content,e===2){let d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(s=b.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){let d=[];for(let f of s.getAttributeNames())if(f.endsWith(rt)||f.startsWith($)){let v=c[n++];if(d.push(f),v!==void 0){let Wt=s.getAttribute(v.toLowerCase()+rt).split($),j=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:j[2],strings:Wt,ctor:j[1]==="."?at:j[1]==="?"?lt:j[1]==="@"?ht:x})}else a.push({type:6,index:r})}for(let f of d)s.removeAttribute(f)}if(Mt.test(s.tagName)){let d=s.textContent.split($),f=d.length-1;if(f>0){s.textContent=A?A.emptyScript:"";for(let v=0;v<f;v++)s.append(d[v],O()),b.nextNode(),a.push({type:2,index:++r});s.append(d[f],O())}}}else if(s.nodeType===8)if(s.data===Tt)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)a.push({type:7,index:r}),d+=$.length-1}r++}}static createElement(t,e){let i=S.createElement("template");return i.innerHTML=t,i}};function C(o,t,e=o,i){var s,r,n,h;if(t===E)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl,l=T(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((r=a?._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=C(o,a._$AS(o,t.values),a,i)),t}var nt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,r=((e=t?.creationScope)!==null&&e!==void 0?e:S).importNode(i,!0);b.currentNode=r;let n=b.nextNode(),h=0,a=0,l=s[0];for(;l!==void 0;){if(h===l.index){let c;l.type===2?c=new M(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new ct(n,this,t)),this._$AV.push(c),l=s[++a]}h!==l?.index&&(n=b.nextNode(),h++)}return b.currentNode=S,r}v(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},M=class o{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s?.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),T(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(Lt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{let n=new nt(r,this),h=n.u(this.options);n.v(i),this.$(h),this._$AH=n}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new N(t)),e}T(t){Nt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new o(this.k(O()),this.k(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},x=class{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(r===void 0)t=C(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{let h=t,a,l;for(t=r[0],a=0;a<r.length-1;a++)l=C(this,h[i+a],e,a),l===E&&(l=this._$AH[a]),n||(n=!T(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+r[a+1]),this._$AH[a]=l}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends x{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},Xt=A?A.emptyScript:"",lt=class extends x{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Xt):this.element.removeAttribute(this.name)}},ht=class extends x{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=C(this,t,e,0))!==null&&i!==void 0?i:u)===E)return;let s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},ct=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var Ot=W.litHtmlPolyfillSupport;Ot?.(N,M),((st=W.litHtmlVersions)!==null&&st!==void 0?st:W.litHtmlVersions=[]).push("2.8.0");var zt=(o,t,e)=>{var i,s;let r=(i=e?.renderBefore)!==null&&i!==void 0?i:t,n=r._$litPart$;if(n===void 0){let h=(s=e?.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new M(t.insertBefore(O(),h),h,void 0,e??{})}return n._$AI(o),n};var F=window,K=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),jt=new WeakMap,H=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=jt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&jt.set(e,t))}return t}toString(){return this.cssText}},Dt=o=>new H(typeof o=="string"?o:o+"",void 0,dt),L=(o,...t)=>{let e=o.length===1?o[0]:t.reduce(((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1]),o[0]);return new H(e,o,dt)},ut=(o,t)=>{K?o.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((e=>{let i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}))},G=K?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Dt(e)})(o):o;var pt,J=window,Vt=J.trustedTypes,Yt=Vt?Vt.emptyScript:"",qt=J.reactiveElementPolyfillSupport,vt={toAttribute(o,t){switch(t){case Boolean:o=o?Yt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},It=(o,t)=>t!==o&&(t==t||o==o),ft={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:It},_t="finalized",m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach(((e,i)=>{let s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=ft){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ft}static finalize(){if(this.hasOwnProperty(_t))return!1;this[_t]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(G(s))}else t!==void 0&&e.push(G(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach((e=>e(this)))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ut(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach((e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach((e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ft){var s;let r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){let n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:vt).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){let n=s.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:vt;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||It)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((s,r)=>this[r]=s)),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach((s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)})),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach((i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach(((e,i)=>this._$EO(i,this[i],e))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};m[_t]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},qt?.({ReactiveElement:m}),((pt=J.reactiveElementVersions)!==null&&pt!==void 0?pt:J.reactiveElementVersions=[]).push("1.6.3");var mt,gt;var _=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}};_.finalized=!0,_._$litElement$=!0,(mt=globalThis.litElementHydrateSupport)===null||mt===void 0||mt.call(globalThis,{LitElement:_});var Bt=globalThis.litElementPolyfillSupport;Bt?.({LitElement:_});((gt=globalThis.litElementVersions)!==null&&gt!==void 0?gt:globalThis.litElementVersions=[]).push("3.3.3");var Z=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{let{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(n){customElements.define(e,n)}}})(o,t);var te=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},ee=(o,t,e)=>{t.constructor.createProperty(e,o)};function P(o){return(t,e)=>e!==void 0?ee(o,t,e):te(o,t)}function Q(o){return P({...o,state:!0})}var $t,je=(($t=window.HTMLSlotElement)===null||$t===void 0?void 0:$t.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));var U=class extends _{setConfig(t){let e={entity:"",show_wind:!0,show_rain_prob:!0,show_rain_amt:!1,show_wind_gust:!1,show_wind_bearing:!1,show_feels_like:!1,show_humidity:!1,show_cloud_cover:!1,show_uv_index:!1,...t};this._config=e}render(){if(!this._config)return p``;let t=this.hass?p`
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (Required)"
            .hass=${this.hass}
            .value=${this._config.entity}
            .includeDomains=${["weather","sensor"]}
            .configValue=${"entity"}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        `:p`
          <paper-input
            label="Entity (Required)"
            .value=${this._config.entity}
            .configValue=${"entity"}
            @value-changed=${this._valueChanged}
          ></paper-input>
        `;return p`
      <div class="card-config">
        ${t}

        <div class="actions">
          <mwc-button dense @click=${()=>this._setAll(!0)}>Select all</mwc-button>
          <mwc-button dense @click=${()=>this._setAll(!1)}>Deselect all</mwc-button>
        </div>

        <div class="toggles">
          <ha-formfield .label=${"Show Wind Speed"}>
            <ha-switch
              .checked=${this._config.show_wind!==!1}
              .configValue=${"show_wind"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Wind Gust"}>
            <ha-switch
              .checked=${this._config.show_wind_gust===!0}
              .configValue=${"show_wind_gust"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Wind Direction"}>
            <ha-switch
              .checked=${this._config.show_wind_bearing===!0}
              .configValue=${"show_wind_bearing"}
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
              .checked=${this._config.show_rain_amt===!0}
              .configValue=${"show_rain_amt"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Feels Like"}>
            <ha-switch
              .checked=${this._config.show_feels_like===!0}
              .configValue=${"show_feels_like"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Humidity"}>
            <ha-switch
              .checked=${this._config.show_humidity===!0}
              .configValue=${"show_humidity"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Cloud Cover"}>
            <ha-switch
              .checked=${this._config.show_cloud_cover===!0}
              .configValue=${"show_cloud_cover"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show UV Index"}>
            <ha-switch
              .checked=${this._config.show_uv_index===!0}
              .configValue=${"show_uv_index"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}_valueChanged(t){if(!this._config)return;let e=t.target;if(!e?.configValue)return;let i=e.checked!==void 0?e.checked:t.detail.value;this._config={...this._config,[e.configValue]:i};let s=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(s)}_setAll(t){if(!this._config)return;let e={...this._config,show_wind:t,show_wind_gust:t,show_wind_bearing:t,show_rain_prob:t,show_rain_amt:t,show_feels_like:t,show_humidity:t,show_cloud_cover:t,show_uv_index:t};this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}static get styles(){return L`
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
    `}};g([P({attribute:!1})],U.prototype,"hass",2),g([Q()],U.prototype,"_config",2),U=g([Z("nexus-weather-card-editor")],U);var k=class extends _{getCardSize(){return 3}setConfig(t){if(!t.entity)throw new Error("Please define a weather sensor entity");this.config={show_wind:!0,show_rain_prob:!0,show_rain_amt:!1,show_wind_gust:!1,show_wind_bearing:!1,show_uv_index:!1,show_humidity:!1,show_cloud_cover:!1,show_feels_like:!1,...t}}getDayName(t,e){return e===0?"Today":e===1?"Tomorrow":new Date(t).toLocaleDateString("en-US",{weekday:"short",day:"numeric"})}getLocalIconFile(t,e){let i=(t||"").toLowerCase(),s=e?.daytime??!0;return["sunny","clear"].includes(i)?s?"clear-day.svg":"clear-night.svg":i.includes("partly")?s?"partly-cloudy-day.svg":"partly-cloudy-night.svg":["pouring","rainy","rain"].includes(i)?"rain.svg":i==="drizzle"?"drizzle.svg":["lightning","thunderstorm"].includes(i)?"thunderstorm.svg":["snowy","snow"].includes(i)?"snow.svg":["fog","hazy","mist"].includes(i)?"fog.svg":i==="windy"?"wind.svg":"cloudy.svg"}bearingToCardinal(t){if(t===void 0||isNaN(t))return"";let e=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],i=Math.floor(t%360/22.5+.5)%16;return`${e[i]} ${Math.round(t)}\xB0`}render(){let t=this.hass.states[this.config.entity];if(!t||!t.attributes.forecast)return p`<ha-card>Sensor not found...</ha-card>`;let e=t.attributes.forecast.slice(0,7),i=this.hass.config?.unit_system?.temperature??"\xB0";return p`
      <ha-card>
        <div class="grid-container">
          ${e.map((s,r)=>p`
            <div class="column ${r<6?"divider":""}">
              <div class="day-label">${this.getDayName(s.datetime,r)}</div>
              
              <div class="icon-wrapper">
                <img src="/local/weather-icons/${this.getLocalIconFile(s.condition,s)}" alt=${s.condition} />
              </div>

              <div class="temp-row">
                <span class="temp-high">${Math.round(s.temperature)}${i}</span>
                <span class="temp-low">${Math.round(s.templow)}${i}</span>
              </div>

              ${this.config.show_rain_prob&&s.precipitation_probability!==void 0?p`<div class="detail rain">${s.precipitation_probability}%</div>`:""}
              ${this.config.show_rain_amt&&s.precipitation!==void 0?p`<div class="detail rain-amt">${s.precipitation} in</div>`:""}
              ${this.config.show_wind?p`<div class="detail wind">${Math.round(s.wind_speed??0)} mph</div>`:""}
              ${this.config.show_wind_gust?p`<div class="detail wind">${Math.round(s.wind_gust_speed??0)} mph gusts</div>`:""}
              ${this.config.show_wind_bearing?p`<div class="detail wind-dir">${this.bearingToCardinal(s.wind_bearing)}</div>`:""}
              ${this.config.show_feels_like&&s.apparent_temperature!==void 0?p`<div class="detail feels">Feels ${Math.round(s.apparent_temperature)}${i}</div>`:""}
              ${this.config.show_humidity&&s.humidity!==void 0?p`<div class="detail humidity">${s.humidity}% humidity</div>`:""}
              ${this.config.show_cloud_cover&&s.cloud_coverage!==void 0?p`<div class="detail clouds">${s.cloud_coverage}% clouds</div>`:""}
              ${this.config.show_uv_index&&s.uv_index!==void 0?p`<div class="detail uv">UV ${s.uv_index}</div>`:""}
            </div>
          `)}
        </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("nexus-weather-card-editor")}static getStubConfig(){return{type:"custom:nexus-weather-card",entity:"sensor.nexus_7_day_forecast",show_rain_prob:!0}}static get styles(){return L`
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
    `}};g([P({attribute:!1})],k.prototype,"hass",2),g([Q()],k.prototype,"config",2),k=g([Z("nexus-weather-card")],k);})();
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
