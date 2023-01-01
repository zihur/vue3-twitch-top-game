var $s=Object.defineProperty;var za=Object.getOwnPropertySymbols;var Rs=Object.prototype.hasOwnProperty,Fs=Object.prototype.propertyIsEnumerable;var Ua=(t,e,n)=>e in t?$s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,or=(t,e)=>{for(var n in e||(e={}))Rs.call(e,n)&&Ua(t,n,e[n]);if(za)for(var n of za(e))Fs.call(e,n)&&Ua(t,n,e[n]);return t};const Ds=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Ds();function Gr(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const zs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Us=Gr(zs);function Yi(t){return!!t||t===""}function Vr(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=nt(r)?Ys(r):Vr(r);if(a)for(const i in a)e[i]=a[i]}return e}else{if(nt(t))return t;if(tt(t))return t}}const Hs=/;(?![^(]*\))/g,Bs=/:(.+)/;function Ys(t){const e={};return t.split(Hs).forEach(n=>{if(n){const r=n.split(Bs);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rn(t){let e="";if(nt(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Rn(t[n]);r&&(e+=r+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qt=t=>nt(t)?t:t==null?"":$(t)||tt(t)&&(t.toString===Vi||!F(t.toString))?JSON.stringify(t,Wi,2):String(t),Wi=(t,e)=>e&&e.__v_isRef?Wi(t,e.value):Se(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ki(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!$(e)&&!qi(e)?String(e):e,W={},Ee=[],kt=()=>{},Ws=()=>!1,Ks=/^on[^a-z]/,Fn=t=>Ks.test(t),qr=t=>t.startsWith("onUpdate:"),st=Object.assign,Xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gs=Object.prototype.hasOwnProperty,z=(t,e)=>Gs.call(t,e),$=Array.isArray,Se=t=>Dn(t)==="[object Map]",Ki=t=>Dn(t)==="[object Set]",F=t=>typeof t=="function",nt=t=>typeof t=="string",Jr=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",Gi=t=>tt(t)&&F(t.then)&&F(t.catch),Vi=Object.prototype.toString,Dn=t=>Vi.call(t),Vs=t=>Dn(t).slice(8,-1),qi=t=>Dn(t)==="[object Object]",Qr=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pn=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qs=/-(\w)/g,Mt=zn(t=>t.replace(qs,(e,n)=>n?n.toUpperCase():"")),Xs=/\B([A-Z])/g,Le=zn(t=>t.replace(Xs,"-$1").toLowerCase()),Un=zn(t=>t.charAt(0).toUpperCase()+t.slice(1)),sr=zn(t=>t?`on${Un(t)}`:""),Qe=(t,e)=>!Object.is(t,e),lr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},kn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ha;const Qs=()=>Ha||(Ha=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let It;class Zs{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&It&&(this.parent=It,this.index=(It.scopes||(It.scopes=[])).push(this)-1)}run(e){if(this.active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function tl(t,e=It){e&&e.active&&e.effects.push(t)}const Zr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xi=t=>(t.w&Zt)>0,Ji=t=>(t.n&Zt)>0,el=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Zt},nl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Xi(a)&&!Ji(a)?a.delete(t):e[n++]=a,a.w&=~Zt,a.n&=~Zt}e.length=n}},gr=new WeakMap;let Be=0,Zt=1;const vr=30;let _t;const se=Symbol(""),br=Symbol("");class ta{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tl(this,r)}run(){if(!this.active)return this.fn();let e=_t,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_t,_t=this,Xt=!0,Zt=1<<++Be,Be<=vr?el(this):Ba(this),this.fn()}finally{Be<=vr&&nl(this),Zt=1<<--Be,_t=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_t===this?this.deferStop=!0:this.active&&(Ba(this),this.onStop&&this.onStop(),this.active=!1)}}function Ba(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const Qi=[];function Me(){Qi.push(Xt),Xt=!1}function je(){const t=Qi.pop();Xt=t===void 0?!0:t}function gt(t,e,n){if(Xt&&_t){let r=gr.get(t);r||gr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Zr()),Zi(a)}}function Zi(t,e){let n=!1;Be<=vr?Ji(t)||(t.n|=Zt,n=!Xi(t)):n=!t.has(_t),n&&(t.add(_t),_t.deps.push(t))}function Ft(t,e,n,r,a,i){const o=gr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&$(t))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),e){case"add":$(t)?Qr(n)&&s.push(o.get("length")):(s.push(o.get(se)),Se(t)&&s.push(o.get(br)));break;case"delete":$(t)||(s.push(o.get(se)),Se(t)&&s.push(o.get(br)));break;case"set":Se(t)&&s.push(o.get(se));break}if(s.length===1)s[0]&&yr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);yr(Zr(l))}}function yr(t,e){for(const n of $(t)?t:[...t])(n!==_t||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const rl=Gr("__proto__,__v_isRef,__isVue"),to=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Jr)),al=ea(),il=ea(!1,!0),ol=ea(!0),Ya=sl();function sl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Me();const r=H(this)[e].apply(this,n);return je(),r}}),t}function ea(t=!1,e=!1){return function(r,a,i){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return e;if(a==="__v_raw"&&i===(t?e?kl:io:e?ao:ro).get(r))return r;const o=$(r);if(!t&&o&&z(Ya,a))return Reflect.get(Ya,a,i);const s=Reflect.get(r,a,i);return(Jr(a)?to.has(a):rl(a))||(t||gt(r,"get",a),e)?s:at(s)?!o||!Qr(a)?s.value:s:tt(s)?t?oo(s):Bn(s):s}}const ll=eo(),fl=eo(!0);function eo(t=!1){return function(n,r,a,i){let o=n[r];if(Ze(o)&&at(o)&&!at(a))return!1;if(!t&&!Ze(a)&&(so(a)||(a=H(a),o=H(o)),!$(n)&&at(o)&&!at(a)))return o.value=a,!0;const s=$(n)&&Qr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Qe(a,o)&&Ft(n,"set",r,a):Ft(n,"add",r,a)),l}}function cl(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ft(t,"delete",e,void 0),r}function ul(t,e){const n=Reflect.has(t,e);return(!Jr(e)||!to.has(e))&&gt(t,"has",e),n}function dl(t){return gt(t,"iterate",$(t)?"length":se),Reflect.ownKeys(t)}const no={get:al,set:ll,deleteProperty:cl,has:ul,ownKeys:dl},ml={get:ol,set(t,e){return!0},deleteProperty(t,e){return!0}},hl=st({},no,{get:il,set:fl}),na=t=>t,Hn=t=>Reflect.getPrototypeOf(t);function fn(t,e,n=!1,r=!1){t=t.__v_raw;const a=H(t),i=H(e);e!==i&&!n&&gt(a,"get",e),!n&&gt(a,"get",i);const{has:o}=Hn(a),s=r?na:n?ia:tn;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function cn(t,e=!1){const n=this.__v_raw,r=H(n),a=H(t);return t!==a&&!e&&gt(r,"has",t),!e&&gt(r,"has",a),t===a?n.has(t):n.has(t)||n.has(a)}function un(t,e=!1){return t=t.__v_raw,!e&&gt(H(t),"iterate",se),Reflect.get(t,"size",t)}function Wa(t){t=H(t);const e=H(this);return Hn(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function Ka(t,e){e=H(e);const n=H(this),{has:r,get:a}=Hn(n);let i=r.call(n,t);i||(t=H(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Qe(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function Ga(t){const e=H(this),{has:n,get:r}=Hn(e);let a=n.call(e,t);a||(t=H(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Ft(e,"delete",t,void 0),i}function Va(){const t=H(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function dn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=e?na:t?ia:tn;return!t&&gt(s,"iterate",se),o.forEach((u,c)=>r.call(a,l(u),l(c),i))}}function mn(t,e,n){return function(...r){const a=this.__v_raw,i=H(a),o=Se(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=a[t](...r),c=n?na:e?ia:tn;return!e&&gt(i,"iterate",l?br:se),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:this}}function pl(){const t={get(i){return fn(this,i)},get size(){return un(this)},has:cn,add:Wa,set:Ka,delete:Ga,clear:Va,forEach:dn(!1,!1)},e={get(i){return fn(this,i,!1,!0)},get size(){return un(this)},has:cn,add:Wa,set:Ka,delete:Ga,clear:Va,forEach:dn(!1,!0)},n={get(i){return fn(this,i,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:dn(!0,!1)},r={get(i){return fn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=mn(i,!1,!1),n[i]=mn(i,!0,!1),e[i]=mn(i,!1,!0),r[i]=mn(i,!0,!0)}),[t,n,e,r]}const[gl,vl,bl,yl]=pl();function ra(t,e){const n=e?t?yl:bl:t?vl:gl;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const _l={get:ra(!1,!1)},wl={get:ra(!1,!0)},xl={get:ra(!0,!1)},ro=new WeakMap,ao=new WeakMap,io=new WeakMap,kl=new WeakMap;function Cl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(t){return t.__v_skip||!Object.isExtensible(t)?0:Cl(Vs(t))}function Bn(t){return Ze(t)?t:aa(t,!1,no,_l,ro)}function Ol(t){return aa(t,!1,hl,wl,ao)}function oo(t){return aa(t,!0,ml,xl,io)}function aa(t,e,n,r,a){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Al(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function Ie(t){return Ze(t)?Ie(t.__v_raw):!!(t&&t.__v_isReactive)}function Ze(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function lo(t){return Ie(t)||Ze(t)}function H(t){const e=t&&t.__v_raw;return e?H(e):t}function fo(t){return kn(t,"__v_skip",!0),t}const tn=t=>tt(t)?Bn(t):t,ia=t=>tt(t)?oo(t):t;function co(t){Xt&&_t&&(t=H(t),Zi(t.dep||(t.dep=Zr())))}function uo(t,e){t=H(t),t.dep&&yr(t.dep)}function at(t){return!!(t&&t.__v_isRef===!0)}function Pt(t){return El(t,!1)}function El(t,e){return at(t)?t:new Sl(t,e)}class Sl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:H(e),this._value=n?e:tn(e)}get value(){return co(this),this._value}set value(e){e=this.__v_isShallow?e:H(e),Qe(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:tn(e),uo(this))}}function _r(t){return at(t)?t.value:t}const Il={get:(t,e,n)=>_r(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return at(a)&&!at(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function mo(t){return Ie(t)?t:new Proxy(t,Il)}class Tl{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ta(e,()=>{this._dirty||(this._dirty=!0,uo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=H(this);return co(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Cn(t,e,n=!1){let r,a;const i=F(t);return i?(r=t,a=kt):(r=t.get,a=t.set),new Tl(r,a,i||!a,n)}function Jt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Yn(i,e,n)}return a}function Ct(t,e,n,r){if(F(t)){const i=Jt(t,e,n,r);return i&&Gi(i)&&i.catch(o=>{Yn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Ct(t[i],e,n,r));return a}function Yn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,s]);return}}Pl(t,n,a,r)}function Pl(t,e,n,r=!0){console.error(t)}let An=!1,wr=!1;const pt=[];let Rt=0;const Ke=[];let Ye=null,xe=0;const Ge=[];let Gt=null,ke=0;const ho=Promise.resolve();let oa=null,xr=null;function Nl(t){const e=oa||ho;return t?e.then(this?t.bind(this):t):e}function Ll(t){let e=Rt+1,n=pt.length;for(;e<n;){const r=e+n>>>1;en(pt[r])<t?e=r+1:n=r}return e}function po(t){(!pt.length||!pt.includes(t,An&&t.allowRecurse?Rt+1:Rt))&&t!==xr&&(t.id==null?pt.push(t):pt.splice(Ll(t.id),0,t),go())}function go(){!An&&!wr&&(wr=!0,oa=ho.then(yo))}function Ml(t){const e=pt.indexOf(t);e>Rt&&pt.splice(e,1)}function vo(t,e,n,r){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),go()}function jl(t){vo(t,Ye,Ke,xe)}function $l(t){vo(t,Gt,Ge,ke)}function sa(t,e=null){if(Ke.length){for(xr=e,Ye=[...new Set(Ke)],Ke.length=0,xe=0;xe<Ye.length;xe++)Ye[xe]();Ye=null,xe=0,xr=null,sa(t,e)}}function bo(t){if(Ge.length){const e=[...new Set(Ge)];if(Ge.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,r)=>en(n)-en(r)),ke=0;ke<Gt.length;ke++)Gt[ke]();Gt=null,ke=0}}const en=t=>t.id==null?1/0:t.id;function yo(t){wr=!1,An=!0,sa(t),pt.sort((n,r)=>en(n)-en(r));const e=kt;try{for(Rt=0;Rt<pt.length;Rt++){const n=pt[Rt];n&&n.active!==!1&&Jt(n,null,14)}}finally{Rt=0,pt.length=0,bo(),An=!1,oa=null,(pt.length||Ke.length||Ge.length)&&yo(t)}}function Rl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||W;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||W;p?a=n.map(g=>g.trim()):d&&(a=n.map(Js))}let s,l=r[s=sr(e)]||r[s=sr(Mt(e))];!l&&i&&(l=r[s=sr(Le(e))]),l&&Ct(l,t,6,a);const u=r[s+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Ct(u,t,6,a)}}function _o(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!F(t)){const l=u=>{const c=_o(u,e,!0);c&&(s=!0,st(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(r.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):st(o,i),r.set(t,o),o)}function Wn(t,e){return!t||!Fn(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Le(e))||z(t,e))}let Nt=null,Kn=null;function On(t){const e=Nt;return Nt=t,Kn=t&&t.type.__scopeId||null,e}function wo(t){Kn=t}function xo(){Kn=null}function Fl(t,e=Nt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&ai(-1);const i=On(e),o=t(...a);return On(i),r._d&&ai(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:c,renderCache:d,data:p,setupState:g,ctx:N,inheritAttrs:R}=t;let O,_;const E=On(t);try{if(n.shapeFlag&4){const D=a||r;O=Tt(c.call(D,D,d,i,g,p,N)),_=l}else{const D=e;O=Tt(D.length>1?D(i,{attrs:l,slots:s,emit:u}):D(i,null)),_=e.props?l:Dl(l)}}catch(D){Ve.length=0,Yn(D,t,1),O=Q(de)}let j=O;if(_&&R!==!1){const D=Object.keys(_),{shapeFlag:Y}=j;D.length&&Y&7&&(o&&D.some(qr)&&(_=zl(_,o)),j=nn(j,_))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),O=j,On(E),O}const Dl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fn(n))&&((e||(e={}))[n]=t[n]);return e},zl=(t,e)=>{const n={};for(const r in t)(!qr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ul(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qa(r,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!Wn(u,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?qa(r,o,u):!0:!!o;return!1}function qa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Wn(n,i))return!0}return!1}function Hl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Bl=t=>t.__isSuspense;function Yl(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):$l(t)}function Wl(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function gn(t,e,n=!1){const r=rt||Nt;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&F(e)?e.call(r.proxy):e}}const Xa={};function le(t,e,n){return ko(t,e,n)}function ko(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=rt;let l,u=!1,c=!1;if(at(t)?(l=()=>t.value,u=so(t)):Ie(t)?(l=()=>t,r=!0):$(t)?(c=!0,u=t.some(Ie),l=()=>t.map(_=>{if(at(_))return _.value;if(Ie(_))return Ce(_);if(F(_))return Jt(_,s,2)})):F(t)?e?l=()=>Jt(t,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Ct(t,s,3,[p])}:l=kt,e&&r){const _=l;l=()=>Ce(_())}let d,p=_=>{d=O.onStop=()=>{Jt(_,s,4)}};if(rn)return p=kt,e?n&&Ct(e,s,3,[l(),c?[]:void 0,p]):l(),kt;let g=c?[]:Xa;const N=()=>{if(!!O.active)if(e){const _=O.run();(r||u||(c?_.some((E,j)=>Qe(E,g[j])):Qe(_,g)))&&(d&&d(),Ct(e,s,3,[_,g===Xa?void 0:g,p]),g=_)}else O.run()};N.allowRecurse=!!e;let R;a==="sync"?R=N:a==="post"?R=()=>ut(N,s&&s.suspense):R=()=>{!s||s.isMounted?jl(N):N()};const O=new ta(l,R);return e?n?N():g=O.run():a==="post"?ut(O.run.bind(O),s&&s.suspense):O.run(),()=>{O.stop(),s&&s.scope&&Xr(s.scope.effects,O)}}function Kl(t,e,n){const r=this.proxy,a=nt(t)?t.includes(".")?Co(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=rt;Ne(this);const s=ko(a,i.bind(r),n);return o?Ne(o):ue(),s}function Co(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ce(t,e){if(!tt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),at(t))Ce(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Ce(t[n],e);else if(Ki(t)||Se(t))t.forEach(n=>{Ce(n,e)});else if(qi(t))for(const n in t)Ce(t[n],e);return t}function la(t){return F(t)?{setup:t,name:t.name}:t}const kr=t=>!!t.type.__asyncLoader,Ao=t=>t.type.__isKeepAlive;function Gl(t,e){Oo(t,"a",e)}function Vl(t,e){Oo(t,"da",e)}function Oo(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Gn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)Ao(a.parent.vnode)&&ql(r,e,n,a),a=a.parent}}function ql(t,e,n,r){const a=Gn(e,t,r,!0);fa(()=>{Xr(r[e],a)},n)}function Gn(t,e,n=rt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Me(),Ne(n);const s=Ct(e,n,t,o);return ue(),je(),s});return r?a.unshift(i):a.push(i),i}}const Ht=t=>(e,n=rt)=>(!rn||t==="sp")&&Gn(t,e,n),Xl=Ht("bm"),Vn=Ht("m"),Jl=Ht("bu"),Ql=Ht("u"),Zl=Ht("bum"),fa=Ht("um"),tf=Ht("sp"),ef=Ht("rtg"),nf=Ht("rtc");function rf(t,e=rt){Gn("ec",t,e)}let Cr=!0;function af(t){const e=So(t),n=t.proxy,r=t.ctx;Cr=!1,e.beforeCreate&&Ja(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:N,activated:R,deactivated:O,beforeDestroy:_,beforeUnmount:E,destroyed:j,unmounted:D,render:Y,renderTracked:it,renderTriggered:mt,errorCaptured:Ot,serverPrefetch:lt,expose:Fe,inheritAttrs:ge,components:De,directives:sn,filters:Ma}=e;if(u&&of(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const J in o){const G=o[J];F(G)&&(r[J]=G.bind(n))}if(a){const J=a.call(n,n);tt(J)&&(t.data=Bn(J))}if(Cr=!0,i)for(const J in i){const G=i[J],jt=F(G)?G.bind(n,n):F(G.get)?G.get.bind(n,n):kt,rr=!F(G)&&F(G.set)?G.set.bind(n):kt,ze=bt({get:jt,set:rr});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>ze.value,set:ve=>ze.value=ve})}if(s)for(const J in s)Eo(s[J],r,n,J);if(l){const J=F(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Wl(G,J[G])})}c&&Ja(c,t,"c");function ft(J,G){$(G)?G.forEach(jt=>J(jt.bind(n))):G&&J(G.bind(n))}if(ft(Xl,d),ft(Vn,p),ft(Jl,g),ft(Ql,N),ft(Gl,R),ft(Vl,O),ft(rf,Ot),ft(nf,it),ft(ef,mt),ft(Zl,E),ft(fa,D),ft(tf,lt),$(Fe))if(Fe.length){const J=t.exposed||(t.exposed={});Fe.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:jt=>n[G]=jt})})}else t.exposed||(t.exposed={});Y&&t.render===kt&&(t.render=Y),ge!=null&&(t.inheritAttrs=ge),De&&(t.components=De),sn&&(t.directives=sn)}function of(t,e,n=kt,r=!1){$(t)&&(t=Ar(t));for(const a in t){const i=t[a];let o;tt(i)?"default"in i?o=gn(i.from||a,i.default,!0):o=gn(i.from||a):o=gn(i),at(o)&&r?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[a]=o}}function Ja(t,e,n){Ct($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Eo(t,e,n,r){const a=r.includes(".")?Co(n,r):()=>n[r];if(nt(t)){const i=e[t];F(i)&&le(a,i)}else if(F(t))le(a,t.bind(n));else if(tt(t))if($(t))t.forEach(i=>Eo(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&le(a,i,t)}}function So(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(u=>En(l,u,o,!0)),En(l,e,o)),i.set(e,l),l}function En(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&En(t,i,n,!0),a&&a.forEach(o=>En(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=sf[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const sf={data:Qa,props:ae,emits:ae,methods:ae,computed:ae,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:ae,directives:ae,watch:ff,provide:Qa,inject:lf};function Qa(t,e){return e?t?function(){return st(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function lf(t,e){return ae(Ar(t),Ar(e))}function Ar(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function ae(t,e){return t?st(st(Object.create(null),t),e):e}function ff(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function cf(t,e,n,r=!1){const a={},i={};kn(i,qn,1),t.propsDefaults=Object.create(null),Io(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Ol(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function uf(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=H(a),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Wn(t.emitsOptions,p))continue;const g=e[p];if(l)if(z(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const N=Mt(p);a[N]=Or(l,s,N,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Io(t,e,a,i)&&(u=!0);let c;for(const d in s)(!e||!z(e,d)&&((c=Le(d))===d||!z(e,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Or(l,s,d,void 0,t,!0)):delete a[d]);if(i!==s)for(const d in i)(!e||!z(e,d)&&!0)&&(delete i[d],u=!0)}u&&Ft(t,"set","$attrs")}function Io(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(pn(l))continue;const u=e[l];let c;a&&z(a,c=Mt(l))?!i||!i.includes(c)?n[c]=u:(s||(s={}))[c]=u:Wn(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=H(n),u=s||W;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Or(a,l,d,u[d],t,!z(u,d))}}return o}function Or(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&F(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Ne(a),r=u[n]=l.call(null,e),ue())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Le(n))&&(r=!0))}return r}function To(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!F(t)){const c=d=>{l=!0;const[p,g]=To(d,e,!0);st(o,p),g&&s.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return r.set(t,Ee),Ee;if($(i))for(let c=0;c<i.length;c++){const d=Mt(i[c]);Za(d)&&(o[d]=W)}else if(i)for(const c in i){const d=Mt(c);if(Za(d)){const p=i[c],g=o[d]=$(p)||F(p)?{type:p}:p;if(g){const N=ni(Boolean,g.type),R=ni(String,g.type);g[0]=N>-1,g[1]=R<0||N<R,(N>-1||z(g,"default"))&&s.push(d)}}}const u=[o,s];return r.set(t,u),u}function Za(t){return t[0]!=="$"}function ti(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ei(t,e){return ti(t)===ti(e)}function ni(t,e){return $(e)?e.findIndex(n=>ei(n,t)):F(e)&&ei(e,t)?0:-1}const Po=t=>t[0]==="_"||t==="$stable",ca=t=>$(t)?t.map(Tt):[Tt(t)],df=(t,e,n)=>{const r=Fl((...a)=>ca(e(...a)),n);return r._c=!1,r},No=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Po(a))continue;const i=t[a];if(F(i))e[a]=df(a,i,r);else if(i!=null){const o=ca(i);e[a]=()=>o}}},Lo=(t,e)=>{const n=ca(e);t.slots.default=()=>n},mf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=H(e),kn(e,"_",n)):No(e,t.slots={})}else t.slots={},e&&Lo(t,e);kn(t.slots,qn,1)},hf=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=W;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(st(a,e),!n&&s===1&&delete a._):(i=!e.$stable,No(e,a)),o=e}else e&&(Lo(t,e),o={default:1});if(i)for(const s in a)!Po(s)&&!(s in o)&&delete a[s]};function ne(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Me(),Ct(l,n,8,[t.el,s,t,e]),je())}}function Mo(){return{app:null,config:{isNativeTag:Ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pf=0;function gf(t,e){return function(r,a=null){F(r)||(r=Object.assign({},r)),a!=null&&!tt(a)&&(a=null);const i=Mo(),o=new Set;let s=!1;const l=i.app={_uid:pf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ff,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(l,...c)):F(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,d){if(!s){const p=Q(r,a);return p.appContext=i,c&&e?e(p,u):t(p,u,d),s=!0,l._container=u,u.__vue_app__=l,ma(p.component)||p.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l}};return l}}function Er(t,e,n,r,a=!1){if($(t)){t.forEach((p,g)=>Er(p,e&&($(e)?e[g]:e),n,r,a));return}if(kr(r)&&!a)return;const i=r.shapeFlag&4?ma(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,u=e&&e.r,c=s.refs===W?s.refs={}:s.refs,d=s.setupState;if(u!=null&&u!==l&&(nt(u)?(c[u]=null,z(d,u)&&(d[u]=null)):at(u)&&(u.value=null)),F(l))Jt(l,s,12,[o,c]);else{const p=nt(l),g=at(l);if(p||g){const N=()=>{if(t.f){const R=p?c[l]:l.value;a?$(R)&&Xr(R,i):$(R)?R.includes(i)||R.push(i):p?(c[l]=[i],z(d,l)&&(d[l]=c[l])):(l.value=[i],t.k&&(c[t.k]=l.value))}else p?(c[l]=o,z(d,l)&&(d[l]=o)):at(l)&&(l.value=o,t.k&&(c[t.k]=o))};o?(N.id=-1,ut(N,n)):N()}}}const ut=Yl;function vf(t){return bf(t)}function bf(t,e){const n=Qs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=kt,cloneNode:N,insertStaticContent:R}=t,O=(f,m,h,b=null,v=null,x=null,C=!1,w=null,k=!!m.dynamicChildren)=>{if(f===m)return;f&&!He(f,m)&&(b=ln(f),Yt(f,v,x,!0),f=null),m.patchFlag===-2&&(k=!1,m.dynamicChildren=null);const{type:y,ref:I,shapeFlag:S}=m;switch(y){case ua:_(f,m,h,b);break;case de:E(f,m,h,b);break;case vn:f==null&&j(m,h,b,C);break;case Z:sn(f,m,h,b,v,x,C,w,k);break;default:S&1?it(f,m,h,b,v,x,C,w,k):S&6?Ma(f,m,h,b,v,x,C,w,k):(S&64||S&128)&&y.process(f,m,h,b,v,x,C,w,k,be)}I!=null&&v&&Er(I,f&&f.ref,x,m||f,!m)},_=(f,m,h,b)=>{if(f==null)r(m.el=s(m.children),h,b);else{const v=m.el=f.el;m.children!==f.children&&u(v,m.children)}},E=(f,m,h,b)=>{f==null?r(m.el=l(m.children||""),h,b):m.el=f.el},j=(f,m,h,b)=>{[f.el,f.anchor]=R(f.children,m,h,b,f.el,f.anchor)},D=({el:f,anchor:m},h,b)=>{let v;for(;f&&f!==m;)v=p(f),r(f,h,b),f=v;r(m,h,b)},Y=({el:f,anchor:m})=>{let h;for(;f&&f!==m;)h=p(f),a(f),f=h;a(m)},it=(f,m,h,b,v,x,C,w,k)=>{C=C||m.type==="svg",f==null?mt(m,h,b,v,x,C,w,k):Fe(f,m,v,x,C,w,k)},mt=(f,m,h,b,v,x,C,w)=>{let k,y;const{type:I,props:S,shapeFlag:T,transition:M,patchFlag:U,dirs:X}=f;if(f.el&&N!==void 0&&U===-1)k=f.el=N(f.el);else{if(k=f.el=o(f.type,x,S&&S.is,S),T&8?c(k,f.children):T&16&&lt(f.children,k,null,b,v,x&&I!=="foreignObject",C,w),X&&ne(f,null,b,"created"),S){for(const V in S)V!=="value"&&!pn(V)&&i(k,V,null,S[V],x,f.children,b,v,$t);"value"in S&&i(k,"value",null,S.value),(y=S.onVnodeBeforeMount)&&St(y,b,f)}Ot(k,f,f.scopeId,C,b)}X&&ne(f,null,b,"beforeMount");const B=(!v||v&&!v.pendingBranch)&&M&&!M.persisted;B&&M.beforeEnter(k),r(k,m,h),((y=S&&S.onVnodeMounted)||B||X)&&ut(()=>{y&&St(y,b,f),B&&M.enter(k),X&&ne(f,null,b,"mounted")},v)},Ot=(f,m,h,b,v)=>{if(h&&g(f,h),b)for(let x=0;x<b.length;x++)g(f,b[x]);if(v){let x=v.subTree;if(m===x){const C=v.vnode;Ot(f,C,C.scopeId,C.slotScopeIds,v.parent)}}},lt=(f,m,h,b,v,x,C,w,k=0)=>{for(let y=k;y<f.length;y++){const I=f[y]=w?Vt(f[y]):Tt(f[y]);O(null,I,m,h,b,v,x,C,w)}},Fe=(f,m,h,b,v,x,C)=>{const w=m.el=f.el;let{patchFlag:k,dynamicChildren:y,dirs:I}=m;k|=f.patchFlag&16;const S=f.props||W,T=m.props||W;let M;h&&re(h,!1),(M=T.onVnodeBeforeUpdate)&&St(M,h,m,f),I&&ne(m,f,h,"beforeUpdate"),h&&re(h,!0);const U=v&&m.type!=="foreignObject";if(y?ge(f.dynamicChildren,y,w,h,b,U,x):C||jt(f,m,w,null,h,b,U,x,!1),k>0){if(k&16)De(w,m,S,T,h,b,v);else if(k&2&&S.class!==T.class&&i(w,"class",null,T.class,v),k&4&&i(w,"style",S.style,T.style,v),k&8){const X=m.dynamicProps;for(let B=0;B<X.length;B++){const V=X[B],yt=S[V],ye=T[V];(ye!==yt||V==="value")&&i(w,V,yt,ye,v,f.children,h,b,$t)}}k&1&&f.children!==m.children&&c(w,m.children)}else!C&&y==null&&De(w,m,S,T,h,b,v);((M=T.onVnodeUpdated)||I)&&ut(()=>{M&&St(M,h,m,f),I&&ne(m,f,h,"updated")},b)},ge=(f,m,h,b,v,x,C)=>{for(let w=0;w<m.length;w++){const k=f[w],y=m[w],I=k.el&&(k.type===Z||!He(k,y)||k.shapeFlag&70)?d(k.el):h;O(k,y,I,null,b,v,x,C,!0)}},De=(f,m,h,b,v,x,C)=>{if(h!==b){for(const w in b){if(pn(w))continue;const k=b[w],y=h[w];k!==y&&w!=="value"&&i(f,w,y,k,C,m.children,v,x,$t)}if(h!==W)for(const w in h)!pn(w)&&!(w in b)&&i(f,w,h[w],null,C,m.children,v,x,$t);"value"in b&&i(f,"value",h.value,b.value)}},sn=(f,m,h,b,v,x,C,w,k)=>{const y=m.el=f?f.el:s(""),I=m.anchor=f?f.anchor:s("");let{patchFlag:S,dynamicChildren:T,slotScopeIds:M}=m;M&&(w=w?w.concat(M):M),f==null?(r(y,h,b),r(I,h,b),lt(m.children,h,I,v,x,C,w,k)):S>0&&S&64&&T&&f.dynamicChildren?(ge(f.dynamicChildren,T,h,v,x,C,w),(m.key!=null||v&&m===v.subTree)&&jo(f,m,!0)):jt(f,m,h,I,v,x,C,w,k)},Ma=(f,m,h,b,v,x,C,w,k)=>{m.slotScopeIds=w,f==null?m.shapeFlag&512?v.ctx.activate(m,h,b,C,k):nr(m,h,b,v,x,C,k):ft(f,m,k)},nr=(f,m,h,b,v,x,C)=>{const w=f.component=Pf(f,b,v);if(Ao(f)&&(w.ctx.renderer=be),Nf(w),w.asyncDep){if(v&&v.registerDep(w,J),!f.el){const k=w.subTree=Q(de);E(null,k,m,h)}return}J(w,f,m,h,v,x,C)},ft=(f,m,h)=>{const b=m.component=f.component;if(Ul(f,m,h))if(b.asyncDep&&!b.asyncResolved){G(b,m,h);return}else b.next=m,Ml(b.update),b.update();else m.component=f.component,m.el=f.el,b.vnode=m},J=(f,m,h,b,v,x,C)=>{const w=()=>{if(f.isMounted){let{next:I,bu:S,u:T,parent:M,vnode:U}=f,X=I,B;re(f,!1),I?(I.el=U.el,G(f,I,C)):I=U,S&&lr(S),(B=I.props&&I.props.onVnodeBeforeUpdate)&&St(B,M,I,U),re(f,!0);const V=fr(f),yt=f.subTree;f.subTree=V,O(yt,V,d(yt.el),ln(yt),f,v,x),I.el=V.el,X===null&&Hl(f,V.el),T&&ut(T,v),(B=I.props&&I.props.onVnodeUpdated)&&ut(()=>St(B,M,I,U),v)}else{let I;const{el:S,props:T}=m,{bm:M,m:U,parent:X}=f,B=kr(m);if(re(f,!1),M&&lr(M),!B&&(I=T&&T.onVnodeBeforeMount)&&St(I,X,m),re(f,!0),S&&ir){const V=()=>{f.subTree=fr(f),ir(S,f.subTree,f,v,null)};B?m.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=fr(f);O(null,V,h,b,f,v,x),m.el=V.el}if(U&&ut(U,v),!B&&(I=T&&T.onVnodeMounted)){const V=m;ut(()=>St(I,X,V),v)}m.shapeFlag&256&&f.a&&ut(f.a,v),f.isMounted=!0,m=h=b=null}},k=f.effect=new ta(w,()=>po(f.update),f.scope),y=f.update=k.run.bind(k);y.id=f.uid,re(f,!0),y()},G=(f,m,h)=>{m.component=f;const b=f.vnode.props;f.vnode=m,f.next=null,uf(f,m.props,b,h),hf(f,m.children,h),Me(),sa(void 0,f.update),je()},jt=(f,m,h,b,v,x,C,w,k=!1)=>{const y=f&&f.children,I=f?f.shapeFlag:0,S=m.children,{patchFlag:T,shapeFlag:M}=m;if(T>0){if(T&128){ze(y,S,h,b,v,x,C,w,k);return}else if(T&256){rr(y,S,h,b,v,x,C,w,k);return}}M&8?(I&16&&$t(y,v,x),S!==y&&c(h,S)):I&16?M&16?ze(y,S,h,b,v,x,C,w,k):$t(y,v,x,!0):(I&8&&c(h,""),M&16&&lt(S,h,b,v,x,C,w,k))},rr=(f,m,h,b,v,x,C,w,k)=>{f=f||Ee,m=m||Ee;const y=f.length,I=m.length,S=Math.min(y,I);let T;for(T=0;T<S;T++){const M=m[T]=k?Vt(m[T]):Tt(m[T]);O(f[T],M,h,null,v,x,C,w,k)}y>I?$t(f,v,x,!0,!1,S):lt(m,h,b,v,x,C,w,k,S)},ze=(f,m,h,b,v,x,C,w,k)=>{let y=0;const I=m.length;let S=f.length-1,T=I-1;for(;y<=S&&y<=T;){const M=f[y],U=m[y]=k?Vt(m[y]):Tt(m[y]);if(He(M,U))O(M,U,h,null,v,x,C,w,k);else break;y++}for(;y<=S&&y<=T;){const M=f[S],U=m[T]=k?Vt(m[T]):Tt(m[T]);if(He(M,U))O(M,U,h,null,v,x,C,w,k);else break;S--,T--}if(y>S){if(y<=T){const M=T+1,U=M<I?m[M].el:b;for(;y<=T;)O(null,m[y]=k?Vt(m[y]):Tt(m[y]),h,U,v,x,C,w,k),y++}}else if(y>T)for(;y<=S;)Yt(f[y],v,x,!0),y++;else{const M=y,U=y,X=new Map;for(y=U;y<=T;y++){const ht=m[y]=k?Vt(m[y]):Tt(m[y]);ht.key!=null&&X.set(ht.key,y)}let B,V=0;const yt=T-U+1;let ye=!1,Ra=0;const Ue=new Array(yt);for(y=0;y<yt;y++)Ue[y]=0;for(y=M;y<=S;y++){const ht=f[y];if(V>=yt){Yt(ht,v,x,!0);continue}let Et;if(ht.key!=null)Et=X.get(ht.key);else for(B=U;B<=T;B++)if(Ue[B-U]===0&&He(ht,m[B])){Et=B;break}Et===void 0?Yt(ht,v,x,!0):(Ue[Et-U]=y+1,Et>=Ra?Ra=Et:ye=!0,O(ht,m[Et],h,null,v,x,C,w,k),V++)}const Fa=ye?yf(Ue):Ee;for(B=Fa.length-1,y=yt-1;y>=0;y--){const ht=U+y,Et=m[ht],Da=ht+1<I?m[ht+1].el:b;Ue[y]===0?O(null,Et,h,Da,v,x,C,w,k):ye&&(B<0||y!==Fa[B]?ve(Et,h,Da,2):B--)}}},ve=(f,m,h,b,v=null)=>{const{el:x,type:C,transition:w,children:k,shapeFlag:y}=f;if(y&6){ve(f.component.subTree,m,h,b);return}if(y&128){f.suspense.move(m,h,b);return}if(y&64){C.move(f,m,h,be);return}if(C===Z){r(x,m,h);for(let S=0;S<k.length;S++)ve(k[S],m,h,b);r(f.anchor,m,h);return}if(C===vn){D(f,m,h);return}if(b!==2&&y&1&&w)if(b===0)w.beforeEnter(x),r(x,m,h),ut(()=>w.enter(x),v);else{const{leave:S,delayLeave:T,afterLeave:M}=w,U=()=>r(x,m,h),X=()=>{S(x,()=>{U(),M&&M()})};T?T(x,U,X):X()}else r(x,m,h)},Yt=(f,m,h,b=!1,v=!1)=>{const{type:x,props:C,ref:w,children:k,dynamicChildren:y,shapeFlag:I,patchFlag:S,dirs:T}=f;if(w!=null&&Er(w,null,h,f,!0),I&256){m.ctx.deactivate(f);return}const M=I&1&&T,U=!kr(f);let X;if(U&&(X=C&&C.onVnodeBeforeUnmount)&&St(X,m,f),I&6)js(f.component,h,b);else{if(I&128){f.suspense.unmount(h,b);return}M&&ne(f,null,m,"beforeUnmount"),I&64?f.type.remove(f,m,h,v,be,b):y&&(x!==Z||S>0&&S&64)?$t(y,m,h,!1,!0):(x===Z&&S&384||!v&&I&16)&&$t(k,m,h),b&&ja(f)}(U&&(X=C&&C.onVnodeUnmounted)||M)&&ut(()=>{X&&St(X,m,f),M&&ne(f,null,m,"unmounted")},h)},ja=f=>{const{type:m,el:h,anchor:b,transition:v}=f;if(m===Z){Ms(h,b);return}if(m===vn){Y(f);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:w}=v,k=()=>C(h,x);w?w(f.el,x,k):k()}else x()},Ms=(f,m)=>{let h;for(;f!==m;)h=p(f),a(f),f=h;a(m)},js=(f,m,h)=>{const{bum:b,scope:v,update:x,subTree:C,um:w}=f;b&&lr(b),v.stop(),x&&(x.active=!1,Yt(C,f,m,h)),w&&ut(w,m),ut(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},$t=(f,m,h,b=!1,v=!1,x=0)=>{for(let C=x;C<f.length;C++)Yt(f[C],m,h,b,v)},ln=f=>f.shapeFlag&6?ln(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),$a=(f,m,h)=>{f==null?m._vnode&&Yt(m._vnode,null,null,!0):O(m._vnode||null,f,m,null,null,null,h),bo(),m._vnode=f},be={p:O,um:Yt,m:ve,r:ja,mt:nr,mc:lt,pc:jt,pbc:ge,n:ln,o:t};let ar,ir;return e&&([ar,ir]=e(be)),{render:$a,hydrate:ar,createApp:gf($a,ar)}}function re({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jo(t,e,n=!1){const r=t.children,a=e.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Vt(a[i]),s.el=o.el),n||jo(o,s))}}function yf(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(a=n[n.length-1],t[a]<u){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<u?i=s+1:o=s;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const _f=t=>t.__isTeleport,$o="components";function Ro(t,e){return xf($o,t,!0,e)||t}const wf=Symbol();function xf(t,e,n=!0,r=!1){const a=Nt||rt;if(a){const i=a.type;if(t===$o){const s=$f(i);if(s&&(s===e||s===Mt(e)||s===Un(Mt(e))))return i}const o=ri(a[t]||i[t],e)||ri(a.appContext[t],e);return!o&&r?i:o}}function ri(t,e){return t&&(t[e]||t[Mt(e)]||t[Un(Mt(e))])}const Z=Symbol(void 0),ua=Symbol(void 0),de=Symbol(void 0),vn=Symbol(void 0),Ve=[];let fe=null;function K(t=!1){Ve.push(fe=t?null:[])}function kf(){Ve.pop(),fe=Ve[Ve.length-1]||null}let Sn=1;function ai(t){Sn+=t}function Fo(t){return t.dynamicChildren=Sn>0?fe||Ee:null,kf(),Sn>0&&fe&&fe.push(t),t}function et(t,e,n,r,a,i){return Fo(L(t,e,n,r,a,i,!0))}function Qt(t,e,n,r,a){return Fo(Q(t,e,n,r,a,!0))}function Sr(t){return t?t.__v_isVNode===!0:!1}function He(t,e){return t.type===e.type&&t.key===e.key}const qn="__vInternal",Do=({key:t})=>t!=null?t:null,bn=({ref:t,ref_key:e,ref_for:n})=>t!=null?nt(t)||at(t)||F(t)?{i:Nt,r:t,k:e,f:!!n}:t:null;function L(t,e=null,n=null,r=0,a=null,i=t===Z?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Do(e),ref:e&&bn(e),scopeId:Kn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(da(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Sn>0&&!o&&fe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&fe.push(l),l}const Q=Cf;function Cf(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===wf)&&(t=de),Sr(t)){const s=nn(t,e,!0);return n&&da(s,n),s}if(Rf(t)&&(t=t.__vccOpts),e){e=Af(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=Rn(s)),tt(l)&&(lo(l)&&!$(l)&&(l=st({},l)),e.style=Vr(l))}const o=nt(t)?1:Bl(t)?128:_f(t)?64:tt(t)?4:F(t)?2:0;return L(t,e,n,r,a,o,i,!0)}function Af(t){return t?lo(t)||qn in t?st({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?Ef(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Do(s),ref:e&&e.ref?n&&a?$(a)?a.concat(bn(e)):[a,bn(e)]:bn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Z?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor}}function Pe(t=" ",e=0){return Q(ua,null,t,e)}function Of(t,e){const n=Q(vn,null,t);return n.staticCount=e,n}function yn(t="",e=!1){return e?(K(),Qt(de,null,t)):Q(de,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Q(de):$(t)?Q(Z,null,t.slice()):typeof t=="object"?Vt(t):Q(ua,null,String(t))}function Vt(t){return t.el===null||t.memo?t:nn(t)}function da(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),da(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(qn in e)?e._ctx=Nt:a===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[Pe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ef(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Rn([e.class,r.class]));else if(a==="style")e.style=Vr([e.style,r.style]);else if(Fn(a)){const i=e[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function St(t,e,n,r=null){Ct(t,e,7,[n,r])}function ce(t,e,n,r){let a;const i=n&&n[r];if($(t)||nt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(tt(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=e(t[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ir=t=>t?zo(t)?ma(t)||t.proxy:Ir(t.parent):null,In=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ir(t.parent),$root:t=>Ir(t.root),$emit:t=>t.emit,$options:t=>So(t),$forceUpdate:t=>()=>po(t.update),$nextTick:t=>Nl.bind(t.proxy),$watch:t=>Kl.bind(t)}),Sf={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(r!==W&&z(r,e))return o[e]=1,r[e];if(a!==W&&z(a,e))return o[e]=2,a[e];if((u=t.propsOptions[0])&&z(u,e))return o[e]=3,i[e];if(n!==W&&z(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const c=In[e];let d,p;if(c)return e==="$attrs"&&gt(t,"get",e),c(t);if((d=s.__cssModules)&&(d=d[e]))return d;if(n!==W&&z(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return a!==W&&z(a,e)?(a[e]=n,!0):r!==W&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==W&&z(t,o)||e!==W&&z(e,o)||(s=i[0])&&z(s,o)||z(r,o)||z(In,o)||z(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},If=Mo();let Tf=0;function Pf(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||If,i={uid:Tf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:To(r,a),emitsOptions:_o(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rl.bind(null,i),t.ce&&t.ce(i),i}let rt=null;const Ne=t=>{rt=t,t.scope.on()},ue=()=>{rt&&rt.scope.off(),rt=null};function zo(t){return t.vnode.shapeFlag&4}let rn=!1;function Nf(t,e=!1){rn=e;const{props:n,children:r}=t.vnode,a=zo(t);cf(t,n,a,e),mf(t,r);const i=a?Lf(t,e):void 0;return rn=!1,i}function Lf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fo(new Proxy(t.ctx,Sf));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?jf(t):null;Ne(t),Me();const i=Jt(r,t,0,[t.props,a]);if(je(),ue(),Gi(i)){if(i.then(ue,ue),e)return i.then(o=>{ii(t,o,e)}).catch(o=>{Yn(o,t,0)});t.asyncDep=i}else ii(t,i,e)}else Uo(t,e)}function ii(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=mo(e)),Uo(t,n)}let oi;function Uo(t,e,n){const r=t.type;if(!t.render){if(!e&&oi&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,u=st(st({isCustomElement:i,delimiters:s},o),l);r.render=oi(a,u)}}t.render=r.render||kt}Ne(t),Me(),af(t),je(),ue()}function Mf(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function jf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Mf(t))},slots:t.slots,emit:t.emit,expose:e}}function ma(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mo(fo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in In)return In[n](t)}}))}function $f(t){return F(t)&&t.displayName||t.name}function Rf(t){return F(t)&&"__vccOpts"in t}const bt=(t,e)=>Cn(t,e,rn);function Ho(t,e,n){const r=arguments.length;return r===2?tt(e)&&!$(e)?Sr(e)?Q(t,null,[e]):Q(t,e):Q(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),Q(t,e,n))}const Ff="3.2.33",Df="http://www.w3.org/2000/svg",ie=typeof document!="undefined"?document:null,si=ie&&ie.createElement("template"),zf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?ie.createElementNS(Df,t):ie.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>ie.createTextNode(t),createComment:t=>ie.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ie.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{si.innerHTML=r?`<svg>${t}</svg>`:t;const s=si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Uf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Hf(t,e,n){const r=t.style,a=nt(n);if(n&&!a){for(const i in n)Tr(r,i,n[i]);if(e&&!nt(e))for(const i in e)n[i]==null&&Tr(r,i,"")}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const li=/\s*!important$/;function Tr(t,e,n){if($(n))n.forEach(r=>Tr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bf(t,e);li.test(n)?t.setProperty(Le(r),n.replace(li,""),"important"):t[r]=n}}const fi=["Webkit","Moz","ms"],cr={};function Bf(t,e){const n=cr[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return cr[e]=r;r=Un(r);for(let a=0;a<fi.length;a++){const i=fi[a]+r;if(i in t)return cr[e]=i}return e}const ci="http://www.w3.org/1999/xlink";function Yf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ci,e.slice(6,e.length)):t.setAttributeNS(ci,e,n);else{const i=Us(e);n==null||i&&!Yi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Wf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let s=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Yi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}const[Bo,Kf]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Pr=0;const Gf=Promise.resolve(),Vf=()=>{Pr=0},qf=()=>Pr||(Gf.then(Vf),Pr=Bo());function Xf(t,e,n,r){t.addEventListener(e,n,r)}function Jf(t,e,n,r){t.removeEventListener(e,n,r)}function Qf(t,e,n,r,a=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Zf(e);if(r){const u=i[e]=tc(r,a);Xf(t,s,u,l)}else o&&(Jf(t,s,o,l),i[e]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function Zf(t){let e;if(ui.test(t)){e={};let n;for(;n=t.match(ui);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Le(t.slice(2)),e]}function tc(t,e){const n=r=>{const a=r.timeStamp||Bo();(Kf||a>=n.attached-1)&&Ct(ec(r,n.value),e,5,[r])};return n.value=t,n.attached=qf(),n}function ec(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const di=/^on[a-z]/,nc=(t,e,n,r,a=!1,i,o,s,l)=>{e==="class"?Uf(t,r,a):e==="style"?Hf(t,n,r):Fn(e)?qr(e)||Qf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rc(t,e,r,a))?Wf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yf(t,e,r,a))};function rc(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&di.test(e)&&F(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||di.test(e)&&nt(n)?!1:e in t}const ac=["ctrl","shift","alt","meta"],ic={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ac.some(n=>t[`${n}Key`]&&!e.includes(n))},oc=(t,e)=>(n,...r)=>{for(let a=0;a<e.length;a++){const i=ic[e[a]];if(i&&i(n,e))return}return t(n,...r)},sc=st({patchProp:nc},zf);let mi;function lc(){return mi||(mi=vf(sc))}const fc=(...t)=>{const e=lc().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=cc(r);if(!a)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function cc(t){return nt(t)?document.querySelector(t):t}function uc(){return Yo().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Yo(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const dc=typeof Proxy=="function",mc="devtools-plugin:setup",hc="plugin:settings:set";let _e,Nr;function pc(){var t;return _e!==void 0||(typeof window!="undefined"&&window.performance?(_e=!0,Nr=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(_e=!0,Nr=global.perf_hooks.performance):_e=!1),_e}function gc(){return pc()?Nr.now():Date.now()}class vc{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const s=e.settings[o];r[o]=s.defaultValue}const a=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(a),s=JSON.parse(o);Object.assign(i,s)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(a,JSON.stringify(o))}catch{}i=o},now(){return gc()}},n&&n.on(hc,(o,s)=>{o===this.plugin.id&&this.fallbacks.setSettings(s)}),this.proxiedOn=new Proxy({},{get:(o,s)=>this.target?this.target.on[s]:(...l)=>{this.onQueue.push({method:s,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,s)=>this.target?this.target[s]:s==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(s)?(...l)=>(this.targetQueue.push({method:s,args:l,resolve:()=>{}}),this.fallbacks[s](...l)):(...l)=>new Promise(u=>{this.targetQueue.push({method:s,args:l,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function bc(t,e){const n=t,r=Yo(),a=uc(),i=dc&&n.enableEarlyProxy;if(a&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))a.emit(mc,t,e);else{const o=i?new vc(n,a):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Wo="store";function ha(t){return t===void 0&&(t=null),gn(t!==null?t:Wo)}function $e(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function yc(t){return t!==null&&typeof t=="object"}function _c(t){return t&&typeof t.then=="function"}function wc(t,e){return function(){return t(e)}}function Ko(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Go(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Xn(t,n,[],t._modules.root,!0),pa(t,n,e)}function pa(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,i={};$e(a,function(o,s){i[s]=wc(o,t),Object.defineProperty(t.getters,s,{get:function(){return i[s]()},enumerable:!0})}),t._state=Bn({data:e}),t.strict&&Oc(t),r&&n&&t._withCommit(function(){r.data=null})}function Xn(t,e,n,r,a){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!a){var s=ga(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){s[l]=r.state})}var u=r.context=xc(t,o,n);r.forEachMutation(function(c,d){var p=o+d;kc(t,p,c,u)}),r.forEachAction(function(c,d){var p=c.root?d:o+d,g=c.handler||c;Cc(t,p,g,u)}),r.forEachGetter(function(c,d){var p=o+d;Ac(t,p,c,u)}),r.forEachChild(function(c,d){Xn(t,e,n.concat(d),c,a)})}function xc(t,e,n){var r=e==="",a={dispatch:r?t.dispatch:function(i,o,s){var l=Tn(i,o,s),u=l.payload,c=l.options,d=l.type;return(!c||!c.root)&&(d=e+d),t.dispatch(d,u)},commit:r?t.commit:function(i,o,s){var l=Tn(i,o,s),u=l.payload,c=l.options,d=l.type;(!c||!c.root)&&(d=e+d),t.commit(d,u,c)}};return Object.defineProperties(a,{getters:{get:r?function(){return t.getters}:function(){return Vo(t,e)}},state:{get:function(){return ga(t.state,n)}}}),a}function Vo(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(a){if(a.slice(0,r)===e){var i=a.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[a]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function kc(t,e,n,r){var a=t._mutations[e]||(t._mutations[e]=[]);a.push(function(o){n.call(t,r.state,o)})}function Cc(t,e,n,r){var a=t._actions[e]||(t._actions[e]=[]);a.push(function(o){var s=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return _c(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):s})}function Ac(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Oc(t){le(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function ga(t,e){return e.reduce(function(n,r){return n[r]},t)}function Tn(t,e,n){return yc(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Ec="vuex bindings",hi="vuex:mutations",ur="vuex:actions",we="vuex",Sc=0;function Ic(t,e){bc({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Ec]},function(n){n.addTimelineLayer({id:hi,label:"Vuex Mutations",color:pi}),n.addTimelineLayer({id:ur,label:"Vuex Actions",color:pi}),n.addInspector({id:we,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===we)if(r.filter){var a=[];Qo(a,e._modules.root,r.filter,""),r.rootNodes=a}else r.rootNodes=[Jo(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===we){var a=r.nodeId;Vo(e,a),r.state=Nc(Mc(e._modules,a),a==="root"?e.getters:e._makeLocalGettersCache,a)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===we){var a=r.nodeId,i=r.path;a!=="root"&&(i=a.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,a){var i={};r.payload&&(i.payload=r.payload),i.state=a,n.notifyComponentUpdate(),n.sendInspectorTree(we),n.sendInspectorState(we),n.addTimelineEvent({layerId:hi,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,a){var i={};r.payload&&(i.payload=r.payload),r._id=Sc++,r._time=Date.now(),i.state=a,n.addTimelineEvent({layerId:ur,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,a){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=a,n.addTimelineEvent({layerId:ur,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var pi=8702998,Tc=6710886,Pc=16777215,qo={label:"namespaced",textColor:Pc,backgroundColor:Tc};function Xo(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Jo(t,e){return{id:e||"root",label:Xo(e),tags:t.namespaced?[qo]:[],children:Object.keys(t._children).map(function(n){return Jo(t._children[n],e+n+"/")})}}function Qo(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[qo]:[]}),Object.keys(e._children).forEach(function(a){Qo(t,e._children[a],n,r+a+"/")})}function Nc(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),a={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=Lc(e);a.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Xo(o):o,editable:!1,value:Lr(function(){return i[o]})}})}return a}function Lc(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var a=e,i=r.pop();r.forEach(function(o){a[o]||(a[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),a=a[o]._custom.value}),a[i]=Lr(function(){return t[n]})}else e[n]=Lr(function(){return t[n]})}),e}function Mc(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,a,i){var o=r[a];if(!o)throw new Error('Missing module "'+a+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Lr(t){try{return t()}catch(e){return e}}var At=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Zo={namespaced:{configurable:!0}};Zo.namespaced.get=function(){return!!this._rawModule.namespaced};At.prototype.addChild=function(e,n){this._children[e]=n};At.prototype.removeChild=function(e){delete this._children[e]};At.prototype.getChild=function(e){return this._children[e]};At.prototype.hasChild=function(e){return e in this._children};At.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};At.prototype.forEachChild=function(e){$e(this._children,e)};At.prototype.forEachGetter=function(e){this._rawModule.getters&&$e(this._rawModule.getters,e)};At.prototype.forEachAction=function(e){this._rawModule.actions&&$e(this._rawModule.actions,e)};At.prototype.forEachMutation=function(e){this._rawModule.mutations&&$e(this._rawModule.mutations,e)};Object.defineProperties(At.prototype,Zo);var pe=function(e){this.register([],e,!1)};pe.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};pe.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,a){return n=n.getChild(a),r+(n.namespaced?a+"/":"")},"")};pe.prototype.update=function(e){ts([],this.root,e)};pe.prototype.register=function(e,n,r){var a=this;r===void 0&&(r=!0);var i=new At(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&$e(n.modules,function(s,l){a.register(e.concat(l),s,r)})};pe.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],a=n.getChild(r);!a||!a.runtime||n.removeChild(r)};pe.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function ts(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;ts(t.concat(r),e.getChild(r),n.modules[r])}}function jc(t){return new dt(t)}var dt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var a=e.strict;a===void 0&&(a=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new pe(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,s=this,l=s.dispatch,u=s.commit;this.dispatch=function(p,g){return l.call(o,p,g)},this.commit=function(p,g,N){return u.call(o,p,g,N)},this.strict=a;var c=this._modules.root.state;Xn(this,c,[],this._modules.root),pa(this,c),r.forEach(function(d){return d(n)})},va={state:{configurable:!0}};dt.prototype.install=function(e,n){e.provide(n||Wo,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Ic(e,this)};va.state.get=function(){return this._state.data};va.state.set=function(t){};dt.prototype.commit=function(e,n,r){var a=this,i=Tn(e,n,r),o=i.type,s=i.payload,l={type:o,payload:s},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(d){d(s)})}),this._subscribers.slice().forEach(function(c){return c(l,a.state)}))};dt.prototype.dispatch=function(e,n){var r=this,a=Tn(e,n),i=a.type,o=a.payload,s={type:i,payload:o},l=this._actions[i];if(!!l){try{this._actionSubscribers.slice().filter(function(c){return c.before}).forEach(function(c){return c.before(s,r.state)})}catch{}var u=l.length>1?Promise.all(l.map(function(c){return c(o)})):l[0](o);return new Promise(function(c,d){u.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(s,r.state)})}catch{}c(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(s,r.state,p)})}catch{}d(p)})})}};dt.prototype.subscribe=function(e,n){return Ko(e,this._subscribers,n)};dt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Ko(r,this._actionSubscribers,n)};dt.prototype.watch=function(e,n,r){var a=this;return le(function(){return e(a.state,a.getters)},n,Object.assign({},r))};dt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};dt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Xn(this,this.state,e,this._modules.get(e),r.preserveState),pa(this,this.state)};dt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=ga(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Go(this)};dt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};dt.prototype.hotUpdate=function(e){this._modules.update(e),Go(this,!0)};dt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(dt.prototype,va);const gi=(t,e=1e3)=>{let n=t,r=!0,a=null;return function(){if(r){n.apply(this,arguments),r=!1;return}a||(a=setTimeout(()=>{clearTimeout(a),a=null,n.apply(this,arguments)},e))}},es=t=>{let e=[];return t.forEach((n,r)=>{n||e.push(r)}),e.forEach(n=>{t.delete(n)}),t},$c=t=>{let e=t.length;for(;e>1;){let n=Math.floor(Math.random()*e--);[t[e],t[n]]=[t[n],t[e]]}return t};var ba=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n};const Rc={},ya=t=>(wo("data-v-ce9c2e62"),t=t(),xo(),t),Fc={class:"loading"},Dc=ya(()=>L("div",{class:"loading-circle"},null,-1)),zc=ya(()=>L("div",{class:"loading-circle"},null,-1)),Uc=ya(()=>L("div",{class:"loading-circle"},null,-1)),Hc=[Dc,zc,Uc];function Bc(t,e){return K(),et("div",Fc,Hc)}var ns=ba(Rc,[["render",Bc],["__scopeId","data-v-ce9c2e62"]]);const Yc={class:"card--wrapper"},Wc=["href"],Kc=["src"],Gc={class:"card__header"},Vc={class:"card__avatar"},qc=["href"],Xc=["src"],Jc={class:"card__info"},Qc=["href"],Zc=["title"],tu=["href"],eu=["title"],nu={props:{gameId:String},setup(t){const e=t,n=Pt([]),r=Pt(!0);let a="";const i={Authorization:"Bearer 1v66w9q14030rugda8f2k9lk6kbj5a","Client-Id":"u2i5e5oy5cwidtrgmt44nf110ty1vd"},o=async(u=24)=>{let c=[],d=[];const p=new URLSearchParams({first:u,after:a,game_id:e.gameId});r.value=!0,es(p);const g=await fetch("https://api.twitch.tv/helix/streams?"+p,{headers:or({},i)});if(g.status<200||g.status>=300){r.value=!1;return}const N=await g.json();c=N.data,a=N.pagination.cursor,c.forEach(O=>{O.thumbnail_url=O.thumbnail_url.replace("{width}","800"),O.thumbnail_url=O.thumbnail_url.replace("{height}","450"),d.push(["id",O.user_id])});const R=await s(d);return c=c.map(O=>(n.value.find(E=>E.id===O.id)||(O.user||(O.user=R.find(E=>O.user_id===E.id)),n.value.push(O)),O)),r.value=!1,c},s=async u=>{const c=new URLSearchParams(u);return(await(await fetch("https://api.twitch.tv/helix/users?"+c,{headers:or({},i)})).json()).data},l=async()=>{const u=window.scrollY,c=window.innerHeight,d=document.body.scrollHeight;u+c>=d&&(r.value=!0,await o(12),r.value=!1)};return le(()=>e.gameId,(u,c)=>{n.value.splice(0),a="",o()}),Vn(async()=>{o(),window.addEventListener("scroll",gi(l))}),fa(()=>{window.removeEventListener("scroll",gi(l))}),(u,c)=>(K(),et(Z,null,[L("div",Yc,[(K(!0),et(Z,null,ce(n.value,d=>(K(),et("div",{class:"card",key:d.id},[L("a",{href:"https://www.twitch.tv/"+d.user_login,target:"_blank"},[L("img",{src:d.thumbnail_url,alt:"",class:"card__figure"},null,8,Kc)],8,Wc),L("div",Gc,[L("div",Vc,[L("a",{href:"https://www.twitch.tv/"+d.user_login+"/about",target:"_blank"},[L("img",{src:d.user.profile_image_url,alt:""},null,8,Xc)],8,qc)]),L("div",Jc,[L("a",{href:"https://www.twitch.tv/"+d.user_login,target:"_blank"},[L("h3",{class:"card__title",title:d.title},qt(d.title),9,Zc)],8,Qc),L("a",{href:"https://www.twitch.tv/"+d.user_login+"/about",target:"_blank"},[L("p",{class:"card__auther",title:d.user.display_name},qt(d.user.display_name),9,eu)],8,tu)])])]))),128))]),r.value?(K(),Qt(ns,{key:0})):yn("",!0)],64))}};const ru=t=>(wo("data-v-330847cc"),t=t(),xo(),t),au=Of('<input id="hamburger__toggle" type="checkbox" data-v-330847cc><label for="hamburger__toggle" data-v-330847cc><div class="hamburger" data-v-330847cc><div class="hamburger__line" data-v-330847cc></div><div class="hamburger__line" data-v-330847cc></div><div class="hamburger__line" data-v-330847cc></div></div></label>',2),iu={class:"navbar__list"},ou=["onClick"],su=ru(()=>L("div",{class:"header-text"},[Pe(" Top 3 popular games on Twitch "),L("mark",null,"NOW")],-1)),lu={setup(t){const e=ha(),n=Pt([]),r=Pt(null),a=l=>({navbar__item:!0,"navbar__item--active":l===Cn(()=>e.state.chosenGame.id).value}),i=()=>location.reload(),o=async()=>{const u=await(await fetch("https://api.twitch.tv/helix/games/top?first=3",{headers:{Authorization:"Bearer 1v66w9q14030rugda8f2k9lk6kbj5a","Client-Id":"u2i5e5oy5cwidtrgmt44nf110ty1vd"}})).json();n.value=u.data},s=l=>{e.dispatch("setChosenGame",{gameId:l.id,gameTitle:l.name})};return Vn(async()=>{await o()}),(l,u)=>(K(),et("nav",{ref_key:"nav",ref:r},[L("div",{class:"logo",onClick:i},"Twitch Live Games"),au,L("ul",iu,[(K(!0),et(Z,null,ce(n.value,c=>(K(),et("li",{key:c.id,onClick:d=>s(c),class:Rn(a(c.id))},qt(c.name),11,ou))),128))]),su],512))}};var fu=ba(lu,[["__scopeId","data-v-330847cc"]]);const cu={props:{game:Object},setup(t){return(e,n)=>{const r=Ro("font-awesome-icon");return K(),et("div",null,[(K(!0),et(Z,null,ce(t.game.starCount,a=>(K(),Qt(r,{icon:"fa-solid fa-star"}))),256)),(K(!0),et(Z,null,ce(t.game.starHalfCount,a=>(K(),Qt(r,{icon:"fa-regular fa-star-half-stroke"}))),256)),(K(!0),et(Z,null,ce(t.game.starEmptyCount,a=>(K(),Qt(r,{icon:"fa-regular fa-star"}))),256))])}}};const uu=["src"],du={class:"game-card__info"},mu=["title"],hu={class:"game-tag"},pu={class:"game-tag__item"},gu={class:"game-tag__item"},vu={class:"game-tag__item"},bu={props:{game:Object},setup(t){const e=t,n=ha(),r=Pt(["\u624B\u6A5F\u904A\u6232","\u5361\u724C\u8207\u684C\u904A","\u5C04\u64CA","\u5192\u96AA\u904A\u6232","FPS","\u52D5\u4F5C","RPG","\u8857\u6A5F","\u904B\u52D5","\u7BC0\u594F\u8207\u97F3\u6A02\u904A\u6232","\u624B\u6A5F\u904A\u6232","\u6D3E\u5C0D"]),a=o=>Math.floor(Math.random()*o.length),i=o=>{n.dispatch("setChosenGame",{gameId:o.id,gameTitle:o.name})};return(o,s)=>(K(),et("div",{class:"game-card",onClick:s[0]||(s[0]=l=>i(e.game))},[L("img",{src:t.game.box_art_url,alt:"",class:"game-card__img"},null,8,uu),L("div",du,[L("div",{class:"game-card__title",title:t.game.name},qt(t.game.name),9,mu),Q(cu,{class:"game-card__rate",game:t.game},null,8,["game"])]),L("div",hu,[L("div",pu,qt(r.value[a(r.value)]),1),L("div",gu,qt(r.value[a(r.value)]),1),L("div",vu,qt(r.value[a(r.value)]),1)])]))}};var vi=ba(bu,[["__scopeId","data-v-986ba48e"]]);const yu=L("input",{type:"checkbox",name:"",id:"aside-switch"},null,-1),_u={class:"aside__container"},wu={class:"search--wrapper"},xu=L("h3",null,"Find Other Games",-1),ku=["value"],Cu={type:"submit"},Au={key:0,class:"search__result"},Ou=L("h3",null,"Search Result",-1),Eu={key:1},Su=Pe(" Sorry! Can't find result."),Iu=L("br",null,null,-1),Tu=Pe(" Try other keywords. "),Pu=[Su,Iu,Tu],Nu=L("hr",null,null,-1),Lu=L("h3",null,"Recommend Games",-1),Mu={for:"aside-switch",class:"aside__switch"},ju={setup(t){const e=Pt([]),n=Pt([]),r=Pt(""),a=Pt(!1),i=Pt(!1),o=async()=>{const p=(await(await fetch("https://api.twitch.tv/helix/games/top",{headers:{Authorization:"Bearer 1v66w9q14030rugda8f2k9lk6kbj5a","Client-Id":"u2i5e5oy5cwidtrgmt44nf110ty1vd"}})).json()).data.slice(3);$c(p);for(let g=0;g<5;g++)e.value.push(p[g]);e.value.forEach(g=>{g.box_art_url=g.box_art_url.replace("{width}","188"),g.box_art_url=g.box_art_url.replace("{height}","250");const N=Math.random()*60+41,R=Math.floor(N/20),O=N%20>=10?1:0;g.starCount=R,g.starHalfCount=O,g.starEmptyCount=5-R-O})},s=async(c="")=>{const d=new URLSearchParams({name:c});return es(d),await(await fetch("https://api.twitch.tv/helix/games?"+d,{headers:{Authorization:"Bearer 1v66w9q14030rugda8f2k9lk6kbj5a","Client-Id":"u2i5e5oy5cwidtrgmt44nf110ty1vd"}})).json()},l=c=>{r.value=c.target.value},u=async()=>{if(!r.value)return;i.value=!0;const c=await s(r.value);n.value=c.data,n.value.forEach(d=>{d.box_art_url=d.box_art_url.replace("{width}","188"),d.box_art_url=d.box_art_url.replace("{height}","250")}),a.value=!0,i.value=!1,r.value=""};return Vn(async()=>{await o()}),(c,d)=>{const p=Ro("font-awesome-icon");return K(),et(Z,null,[yu,L("aside",null,[L("div",_u,[L("div",wu,[xu,L("form",{class:"search",onSubmit:d[1]||(d[1]=oc(g=>u(),["prevent"]))},[L("input",{type:"search",value:r.value,onInput:d[0]||(d[0]=g=>l(g))},null,40,ku),L("button",Cu,[Q(p,{icon:"fa-solid fa-magnifying-glass"})])],32),n.value.length!==0?(K(),et("div",Au,[Ou,(K(!0),et(Z,null,ce(n.value,g=>(K(),Qt(vi,{game:g},null,8,["game"]))),256))])):yn("",!0),n.value.length===0&&a.value?(K(),et("p",Eu,Pu)):yn("",!0),i.value?(K(),Qt(ns,{key:2})):yn("",!0)]),Nu,L("div",null,[Lu,(K(!0),et(Z,null,ce(e.value,g=>(K(),Qt(vi,{game:g,key:g.id},null,8,["game"]))),128))])])]),L("label",Mu,[Q(p,{icon:"fa-solid fa-chevron-right",transform:"right-4",beat:""})])],64)}}};const $u={class:"stream-list"},Ru=L("div",{class:"description"}," Top popular live streams sorted by current viewers ",-1),Fu=L("footer",null,[L("p",{class:"footer"},[Pe(" This page is created by "),L("a",{href:"#"},"me"),Pe(" - "),L("a",{href:"#"},"View on Github")])],-1),Du={setup(t){const e=ha(),n=Cn(()=>e.state.chosenGame.id),r=Cn(()=>e.state.chosenGame.title);return(a,i)=>(K(),et(Z,null,[Q(fu),L("main",null,[Q(ju),L("div",$u,[L("h1",null,qt(_r(r)),1),Ru,Q(nu,{"game-id":_r(n)},null,8,["game-id"])])]),Fu],64))}};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function bi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bi(Object(n),!0).forEach(function(r){Hu(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Pn(t){return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pn(t)}function zu(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Uu(t,e,n){return e&&yi(t.prototype,e),n&&yi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Hu(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _a(t,e){return Yu(t)||Ku(t,e)||rs(t,e)||Vu()}function Jn(t){return Bu(t)||Wu(t)||rs(t)||Gu()}function Bu(t){if(Array.isArray(t))return Mr(t)}function Yu(t){if(Array.isArray(t))return t}function Wu(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ku(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function rs(t,e){if(!!t){if(typeof t=="string")return Mr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(t,e)}}function Mr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Gu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _i=function(){},wa={},as={},is=null,os={mark:_i,measure:_i};try{typeof window!="undefined"&&(wa=window),typeof document!="undefined"&&(as=document),typeof MutationObserver!="undefined"&&(is=MutationObserver),typeof performance!="undefined"&&(os=performance)}catch{}var qu=wa.navigator||{},wi=qu.userAgent,xi=wi===void 0?"":wi,te=wa,q=as,ki=is,hn=os;te.document;var Bt=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",ss=~xi.indexOf("MSIE")||~xi.indexOf("Trident/"),Dt="___FONT_AWESOME___",jr=16,ls="fa",fs="svg-inline--fa",me="data-fa-i2svg",$r="data-fa-pseudo-element",Xu="data-fa-pseudo-element-pending",xa="data-prefix",ka="data-icon",Ci="fontawesome-i2svg",Ju="async",Qu=["HTML","HEAD","STYLE","SCRIPT"],cs=function(){try{return!0}catch{return!1}}(),Ca={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Nn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},us={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Zu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},td=/fa[srltdbk\-\ ]/,ds="fa-layers-text",ed=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,nd={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},ms=[1,2,3,4,5,6,7,8,9,10],rd=ms.concat([11,12,13,14,15,16,17,18,19,20]),ad=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},id=[].concat(Jn(Object.keys(Nn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(ms.map(function(t){return"".concat(t,"x")})).concat(rd.map(function(t){return"w-".concat(t)})),hs=te.FontAwesomeConfig||{};function od(t){var e=q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sd(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(q&&typeof q.querySelector=="function"){var ld=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ld.forEach(function(t){var e=_a(t,2),n=e[0],r=e[1],a=sd(od(n));a!=null&&(hs[r]=a)})}var fd={familyPrefix:ls,styleDefault:"solid",replacementClass:fs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},qe=A(A({},fd),hs);qe.autoReplaceSvg||(qe.observeMutations=!1);var P={};Object.keys(qe).forEach(function(t){Object.defineProperty(P,t,{enumerable:!0,set:function(n){qe[t]=n,_n.forEach(function(r){return r(P)})},get:function(){return qe[t]}})});te.FontAwesomeConfig=P;var _n=[];function cd(t){return _n.push(t),function(){_n.splice(_n.indexOf(t),1)}}var Kt=jr,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ud(t){if(!(!t||!Bt)){var e=q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(e,r),t}}var dd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var t=12,e="";t-- >0;)e+=dd[Math.random()*62|0];return e}function Re(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Aa(t){return t.classList?Re(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ps(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function md(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ps(t[n]),'" ')},"").trim()}function Qn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oa(t){return t.size!==Lt.size||t.x!==Lt.x||t.y!==Lt.y||t.rotate!==Lt.rotate||t.flipX||t.flipY}function hd(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function pd(t){var e=t.transform,n=t.width,r=n===void 0?jr:n,a=t.height,i=a===void 0?jr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&ss?l+="translate(".concat(e.x/Kt-r/2,"em, ").concat(e.y/Kt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Kt,"em), calc(-50% + ").concat(e.y/Kt,"em)) "):l+="translate(".concat(e.x/Kt,"em, ").concat(e.y/Kt,"em) "),l+="scale(".concat(e.size/Kt*(e.flipX?-1:1),", ").concat(e.size/Kt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var gd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function gs(){var t=ls,e=fs,n=P.familyPrefix,r=P.replacementClass,a=gd;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ai=!1;function dr(){P.autoAddCss&&!Ai&&(ud(gs()),Ai=!0)}var vd={mixout:function(){return{dom:{css:gs,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},zt=te||{};zt[Dt]||(zt[Dt]={});zt[Dt].styles||(zt[Dt].styles={});zt[Dt].hooks||(zt[Dt].hooks={});zt[Dt].shims||(zt[Dt].shims=[]);var xt=zt[Dt],vs=[],bd=function t(){q.removeEventListener("DOMContentLoaded",t),Ln=1,vs.map(function(e){return e()})},Ln=!1;Bt&&(Ln=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Ln||q.addEventListener("DOMContentLoaded",bd));function yd(t){!Bt||(Ln?setTimeout(t,0):vs.push(t))}function on(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?ps(t):"<".concat(e," ").concat(md(r),">").concat(i.map(on).join(""),"</").concat(e,">")}function Oi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _d=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},mr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?_d(n,a):n,l,u,c;for(r===void 0?(l=1,c=e[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,e[u],u,e);return c};function wd(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Rr(t){var e=wd(t);return e.length===1?e[0].toString(16):null}function xd(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ei(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Fr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ei(e);typeof xt.hooks.addPack=="function"&&!a?xt.hooks.addPack(t,Ei(e)):xt.styles[t]=A(A({},xt.styles[t]||{}),i),t==="fas"&&Fr("fa",e)}var Xe=xt.styles,kd=xt.shims,Cd=Object.values(us),Ea=null,bs={},ys={},_s={},ws={},xs={},Ad=Object.keys(Ca);function Od(t){return~id.indexOf(t)}function Ed(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Od(a)?a:null}var ks=function(){var e=function(i){return mr(Xe,function(o,s,l){return o[l]=mr(s,i,{}),o},{})};bs=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ys=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),xs=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Xe||P.autoFetchSvg,r=mr(kd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});_s=r.names,ws=r.unicodes,Ea=Zn(P.styleDefault)};cd(function(t){Ea=Zn(t.styleDefault)});ks();function Sa(t,e){return(bs[t]||{})[e]}function Sd(t,e){return(ys[t]||{})[e]}function Ae(t,e){return(xs[t]||{})[e]}function Cs(t){return _s[t]||{prefix:null,iconName:null}}function Id(t){var e=ws[t],n=Sa("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return Ea}var Ia=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(t){var e=Ca[t],n=Nn[t]||Nn[e],r=t in xt.styles?t:null;return n||r||null}function tr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,a=null,i=t.reduce(function(o,s){var l=Ed(P.familyPrefix,s);if(Xe[s]?(s=Cd.includes(s)?Zu[s]:s,a=s,o.prefix=s):Ad.indexOf(s)>-1?(a=s,o.prefix=Zn(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Cs(o.iconName):{},c=Ae(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Xe.far&&Xe.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},Ia());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ee()||"fas"),i}var Td=function(){function t(){zu(this,t),this.definitions={}}return Uu(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Fr(s,o[s]);var l=us[s];l&&Fr(l,o[s]),ks()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),t}(),Si=[],Oe={},Te={},Pd=Object.keys(Te);function Nd(t,e){var n=e.mixoutsTo;return Si=t,Oe={},Object.keys(Te).forEach(function(r){Pd.indexOf(r)===-1&&delete Te[r]}),Si.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Pn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Oe[o]||(Oe[o]=[]),Oe[o].push(i[o])})}r.provides&&r.provides(Te)}),n}function Dr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Oe[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function he(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Oe[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ut(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Te[t]?Te[t].apply(null,e):void 0}function zr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ee();if(!!e)return e=Ae(n,e)||e,Oi(As.definitions,n,e)||Oi(xt.styles,n,e)}var As=new Td,Ld=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,he("noAuto")},Md={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(he("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,yd(function(){$d({autoReplaceSvgRoot:n}),he("watch",e)})}},jd={icon:function(e){if(e===null)return null;if(Pn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ae(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Zn(e[0]);return{prefix:r,iconName:Ae(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(P.familyPrefix,"-"))>-1||e.match(td))){var a=tr(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||ee(),iconName:Ae(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=ee();return{prefix:i,iconName:Ae(i,e)||e}}}},vt={noAuto:Ld,config:P,dom:Md,parse:jd,library:As,findIconDefinition:zr,toHtml:on},$d=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(xt.styles).length>0||P.autoFetchSvg)&&Bt&&P.autoReplaceSvg&&vt.dom.i2svg({node:r})};function er(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return on(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Bt){var r=q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Rd(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Qn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Fd(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function Ta(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,p=t.watchable,g=p===void 0?!1:p,N=r.found?r:n,R=N.width,O=N.height,_=a==="fak",E=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(lt){return d.classes.indexOf(lt)===-1}).filter(function(lt){return lt!==""||!!lt}).concat(d.classes).join(" "),j={children:[],attributes:A(A({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(O)})},D=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(R/O*16*.0625,"em")}:{};g&&(j.attributes[me]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(c||an())},children:[l]}),delete j.attributes.title);var Y=A(A({},j),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},D),d.styles)}),it=r.found&&n.found?Ut("generateAbstractMask",Y)||{children:[],attributes:{}}:Ut("generateAbstractIcon",Y)||{children:[],attributes:{}},mt=it.children,Ot=it.attributes;return Y.children=mt,Y.attributes=Ot,s?Fd(Y):Rd(Y)}function Ii(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[me]="");var c=A({},o.styles);Oa(a)&&(c.transform=pd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Qn(c);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Dd(t){var e=t.content,n=t.title,r=t.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hr=xt.styles;function Ur(t){var e=t[0],n=t[1],r=t.slice(4),a=_a(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var zd={found:!1,width:512,height:512};function Ud(t,e){!cs&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Hr(t,e){var n=e;return e==="fa"&&P.styleDefault!==null&&(e=ee()),new Promise(function(r,a){if(Ut("missingIconAbstract"),n==="fa"){var i=Cs(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&hr[e]&&hr[e][t]){var o=hr[e][t];return r(Ur(o))}Ud(t,e),r(A(A({},zd),{},{icon:P.showMissingIcons&&t?Ut("missingIconAbstract")||{}:{}}))})}var Ti=function(){},Br=P.measurePerformance&&hn&&hn.mark&&hn.measure?hn:{mark:Ti,measure:Ti},We='FA "6.1.1"',Hd=function(e){return Br.mark("".concat(We," ").concat(e," begins")),function(){return Os(e)}},Os=function(e){Br.mark("".concat(We," ").concat(e," ends")),Br.measure("".concat(We," ").concat(e),"".concat(We," ").concat(e," begins"),"".concat(We," ").concat(e," ends"))},Pa={begin:Hd,end:Os},wn=function(){};function Pi(t){var e=t.getAttribute?t.getAttribute(me):null;return typeof e=="string"}function Bd(t){var e=t.getAttribute?t.getAttribute(xa):null,n=t.getAttribute?t.getAttribute(ka):null;return e&&n}function Yd(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function Wd(){if(P.autoReplaceSvg===!0)return xn.replace;var t=xn[P.autoReplaceSvg];return t||xn.replace}function Kd(t){return q.createElementNS("http://www.w3.org/2000/svg",t)}function Gd(t){return q.createElement(t)}function Es(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Kd:Gd:n;if(typeof t=="string")return q.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Es(o,{ceFn:r}))}),a}function Vd(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var xn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Es(a),n)}),n.getAttribute(me)===null&&P.keepOriginalSource){var r=q.createComment(Vd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Aa(n).indexOf(P.replacementClass))return xn.replace(e);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(me,""),n.innerHTML=o}};function Ni(t){t()}function Ss(t,e){var n=typeof e=="function"?e:wn;if(t.length===0)n();else{var r=Ni;P.mutateApproach===Ju&&(r=te.requestAnimationFrame||Ni),r(function(){var a=Wd(),i=Pa.begin("mutate");t.map(a),i(),n()})}}var Na=!1;function Is(){Na=!0}function Yr(){Na=!1}var Mn=null;function Li(t){if(!!ki&&!!P.observeMutations){var e=t.treeCallback,n=e===void 0?wn:e,r=t.nodeCallback,a=r===void 0?wn:r,i=t.pseudoElementsCallback,o=i===void 0?wn:i,s=t.observeMutationsRoot,l=s===void 0?q:s;Mn=new ki(function(u){if(!Na){var c=ee();Re(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Pi(d.addedNodes[0])&&(P.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&P.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Pi(d.target)&&~ad.indexOf(d.attributeName))if(d.attributeName==="class"&&Bd(d.target)){var p=tr(Aa(d.target)),g=p.prefix,N=p.iconName;d.target.setAttribute(xa,g||c),N&&d.target.setAttribute(ka,N)}else Yd(d.target)&&a(d.target)})}}),Bt&&Mn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qd(){!Mn||Mn.disconnect()}function Xd(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Jd(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=tr(Aa(t));return a.prefix||(a.prefix=ee()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Sd(a.prefix,t.innerText)||Sa(a.prefix,Rr(t.innerText))),a}function Qd(t){var e=Re(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||an()):(e["aria-hidden"]="true",e.focusable="false")),e}function Zd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Jd(t),r=n.iconName,a=n.prefix,i=n.rest,o=Qd(t),s=Dr("parseNodeAttributes",{},t),l=e.styleParser?Xd(t):[];return A({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var tm=xt.styles;function Ts(t){var e=P.autoReplaceSvg==="nest"?Mi(t,{styleParser:!1}):Mi(t);return~e.extra.classes.indexOf(ds)?Ut("generateLayersText",t,e):Ut("generateSvgReplacementMutation",t,e)}function ji(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var n=q.documentElement.classList,r=function(d){return n.add("".concat(Ci,"-").concat(d))},a=function(d){return n.remove("".concat(Ci,"-").concat(d))},i=P.autoFetchSvg?Object.keys(Ca):Object.keys(tm),o=[".".concat(ds,":not([").concat(me,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(me,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Re(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Pa.begin("onTree"),u=s.reduce(function(c,d){try{var p=Ts(d);p&&c.push(p)}catch(g){cs||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){Ss(p,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(p){l(),d(p)})})}function em(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ts(t).then(function(n){n&&Ss([n],e)})}function nm(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:zr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:zr(a||{})),t(r,A(A({},n),{},{mask:a}))}}var rm=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Lt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,p=d===void 0?null:d,g=n.titleId,N=g===void 0?null:g,R=n.classes,O=R===void 0?[]:R,_=n.attributes,E=_===void 0?{}:_,j=n.styles,D=j===void 0?{}:j;if(!!e){var Y=e.prefix,it=e.iconName,mt=e.icon;return er(A({type:"icon"},e),function(){return he("beforeDOMElementCreation",{iconDefinition:e,params:n}),P.autoA11y&&(p?E["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(N||an()):(E["aria-hidden"]="true",E.focusable="false")),Ta({icons:{main:Ur(mt),mask:l?Ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:it,transform:A(A({},Lt),a),symbol:o,title:p,maskId:c,titleId:N,extra:{attributes:E,styles:D,classes:O}})})}},am={mixout:function(){return{icon:nm(rm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ji,n.nodeCallback=em,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return ji(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,N){Promise.all([Hr(a,s),c.iconName?Hr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var O=_a(R,2),_=O[0],E=O[1];g([n,Ta({icons:{main:_,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(N)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(a.style=l);var u;return Oa(o)&&(u=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},im={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return er({type:"layer"},function(){he("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(Jn(i)).join(" ")},children:o}]})}}}},om={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return er({type:"counter",content:n},function(){return he("beforeDOMElementCreation",{content:n,params:r}),Dd({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(Jn(s))}})})}}}},sm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Lt:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return er({type:"text",content:n},function(){return he("beforeDOMElementCreation",{content:n,params:r}),Ii({content:n,transform:A(A({},Lt),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(P.familyPrefix,"-layers-text")].concat(Jn(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ss){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ii({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},lm=new RegExp('"',"ug"),$i=[1105920,1112319];function fm(t){var e=t.replace(lm,""),n=xd(e,0),r=n>=$i[0]&&n<=$i[1],a=e.length===2?e[0]===e[1]:!1;return{value:Rr(a?e[0]:e),isSecondary:r||a}}function Ri(t,e){var n="".concat(Xu).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Re(t.children),o=i.filter(function(it){return it.getAttribute($r)===e})[0],s=te.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(ed),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Nn[l[2].toLowerCase()]:nd[u],g=fm(d),N=g.value,R=g.isSecondary,O=l[0].startsWith("FontAwesome"),_=Sa(p,N),E=_;if(O){var j=Id(N);j.iconName&&j.prefix&&(_=j.iconName,p=j.prefix)}if(_&&!R&&(!o||o.getAttribute(xa)!==p||o.getAttribute(ka)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var D=Zd(),Y=D.extra;Y.attributes[$r]=e,Hr(_,p).then(function(it){var mt=Ta(A(A({},D),{},{icons:{main:it,mask:Ia()},prefix:p,iconName:E,extra:Y,watchable:!0})),Ot=q.createElement("svg");e==="::before"?t.insertBefore(Ot,t.firstChild):t.appendChild(Ot),Ot.outerHTML=mt.map(function(lt){return on(lt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function cm(t){return Promise.all([Ri(t,"::before"),Ri(t,"::after")])}function um(t){return t.parentNode!==document.head&&!~Qu.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($r)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fi(t){if(!!Bt)return new Promise(function(e,n){var r=Re(t.querySelectorAll("*")).filter(um).map(cm),a=Pa.begin("searchPseudoElements");Is(),Promise.all(r).then(function(){a(),Yr(),e()}).catch(function(){a(),Yr(),n()})})}var dm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;P.searchPseudoElements&&Fi(a)}}},Di=!1,mm={mixout:function(){return{dom:{unwatch:function(){Is(),Di=!0}}}},hooks:function(){return{bootstrap:function(){Li(Dr("mutationObserverCallbacks",{}))},noAuto:function(){qd()},watch:function(n){var r=n.observeMutationsRoot;Di?Yr():Li(Dr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},zi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hm={mixout:function(){return{parse:{transform:function(n){return zi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=zi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:A({},g.outer),children:[{tag:"g",attributes:A({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),g.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Ui(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pm(t){return t.tag==="g"?t.children:[t]}var gm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?tr(a.split(" ").map(function(o){return o.trim()})):Ia();return i.prefix||(i.prefix=ee()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,d=o.width,p=o.icon,g=hd({transform:l,containerWidth:d,iconWidth:u}),N={tag:"rect",attributes:A(A({},pr),{},{fill:"white"})},R=c.children?{children:c.children.map(Ui)}:{},O={tag:"g",attributes:A({},g.inner),children:[Ui(A({tag:c.tag,attributes:A(A({},c.attributes),g.path)},R))]},_={tag:"g",attributes:A({},g.outer),children:[O]},E="mask-".concat(s||an()),j="clip-".concat(s||an()),D={tag:"mask",attributes:A(A({},pr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,_]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:pm(p)},D]};return r.push(Y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(E,")")},pr)}),{children:r,attributes:a}}}},vm={provides:function(e){var n=!1;te.matchMedia&&(n=te.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},bm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ym=[vd,am,im,om,sm,dm,mm,hm,gm,vm,bm];Nd(ym,{mixoutsTo:vt});vt.noAuto;var Ps=vt.config,_m=vt.library;vt.dom;var jn=vt.parse;vt.findIconDefinition;vt.toHtml;var wm=vt.icon;vt.layer;var xm=vt.text;vt.counter;function Hi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function wt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hi(Object(n),!0).forEach(function(r){ct(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $n(t){return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$n(t)}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function km(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Cm(t,e){if(t==null)return{};var n=km(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Wr(t){return Am(t)||Om(t)||Em(t)||Sm()}function Am(t){if(Array.isArray(t))return Kr(t)}function Om(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Em(t,e){if(!!t){if(typeof t=="string")return Kr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kr(t,e)}}function Kr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Sm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Im=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ns={exports:{}};(function(t){(function(e){var n=function(_,E,j){if(!u(E)||d(E)||p(E)||g(E)||l(E))return E;var D,Y=0,it=0;if(c(E))for(D=[],it=E.length;Y<it;Y++)D.push(n(_,E[Y],j));else{D={};for(var mt in E)Object.prototype.hasOwnProperty.call(E,mt)&&(D[_(mt,j)]=n(_,E[mt],j))}return D},r=function(_,E){E=E||{};var j=E.separator||"_",D=E.split||/(?=[A-Z])/;return _.split(D).join(j)},a=function(_){return N(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(E,j){return j?j.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var E=a(_);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(_,E){return r(_,E).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},u=function(_){return _===Object(_)},c=function(_){return s.call(_)=="[object Array]"},d=function(_){return s.call(_)=="[object Date]"},p=function(_){return s.call(_)=="[object RegExp]"},g=function(_){return s.call(_)=="[object Boolean]"},N=function(_){return _=_-0,_===_},R=function(_,E){var j=E&&"process"in E?E.process:E;return typeof j!="function"?_:function(D,Y){return j(D,_,Y)}},O={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,E){return n(R(a,E),_)},decamelizeKeys:function(_,E){return n(R(o,E),_,E)},pascalizeKeys:function(_,E){return n(R(i,E),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(Im)})(Ns);var Tm=Ns.exports,Pm=["class","style"];function Nm(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Tm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Lm(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function La(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return La(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.class=Lm(c);break;case"style":l.style=Nm(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Cm(n,Pm);return Ho(t.tag,wt(wt(wt({},e),{},{class:a.class,style:wt(wt({},a.style),o)},a.attrs),s),r)}var Ls=!1;try{Ls=!0}catch{}function Mm(){if(!Ls&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Je(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ct({},t,e):{}}function jm(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ct(e,"fa-".concat(t.size),t.size!==null),ct(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ct(e,"fa-pull-".concat(t.pull),t.pull!==null),ct(e,"fa-swap-opacity",t.swapOpacity),ct(e,"fa-bounce",t.bounce),ct(e,"fa-shake",t.shake),ct(e,"fa-beat",t.beat),ct(e,"fa-fade",t.fade),ct(e,"fa-beat-fade",t.beatFade),ct(e,"fa-flash",t.flash),ct(e,"fa-spin-pulse",t.spinPulse),ct(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Bi(t){if(t&&$n(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jn.icon)return jn.icon(t);if(t===null)return null;if($n(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var $m=la({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=bt(function(){return Bi(e.icon)}),i=bt(function(){return Je("classes",jm(e))}),o=bt(function(){return Je("transform",typeof e.transform=="string"?jn.transform(e.transform):e.transform)}),s=bt(function(){return Je("mask",Bi(e.mask))}),l=bt(function(){return wm(a.value,wt(wt(wt(wt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});le(l,function(c){if(!c)return Mm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=bt(function(){return l.value?La(l.value.abstract[0],{},r):null});return function(){return u.value}}});la({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,a=Ps.familyPrefix,i=bt(function(){return["".concat(a,"-layers")].concat(Wr(e.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ho("div",{class:i.value},r.default?r.default():[])}}});la({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,a=Ps.familyPrefix,i=bt(function(){return Je("classes",[].concat(Wr(e.counter?["".concat(a,"-layers-counter")]:[]),Wr(e.position?["".concat(a,"-layers-").concat(e.position)]:[])))}),o=bt(function(){return Je("transform",typeof e.transform=="string"?jn.transform(e.transform):e.transform)}),s=bt(function(){var u=xm(e.value.toString(),wt(wt({},o.value),i.value)),c=u.abstract;return e.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=bt(function(){return La(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Rm={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"]},Fm={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"]},Dm={prefix:"fas",iconName:"star",icon:[576,512,[61446,11088],"f005","M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var zm={prefix:"far",iconName:"star",icon:[576,512,[61446,11088],"f005","M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"]},Um={prefix:"far",iconName:"star-half-stroke",icon:[576,512,["star-half-alt"],"f5c0","M378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8zM287.1 384.7C291.9 384.7 295.7 385.6 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.1 79.09L287.1 384.7z"]};_m.add(Dm,zm,Um,Fm,Rm);const Hm=jc({state(){return{chosenGame:{id:"",title:"Twitch Live Games"}}},mutations:{SET_CHOSEN_GAME(t,e){t.chosenGame.id=e.gameId,t.chosenGame.title=e.gameTitle}},actions:{setChosenGame({commit:t},e){t("SET_CHOSEN_GAME",e)}}});fc(Du).component("font-awesome-icon",$m).use(Hm).mount("#app");
