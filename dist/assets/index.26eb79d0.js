function pb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function gb(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var C={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts=Symbol.for("react.element"),mb=Symbol.for("react.portal"),vb=Symbol.for("react.fragment"),yb=Symbol.for("react.strict_mode"),wb=Symbol.for("react.profiler"),bb=Symbol.for("react.provider"),Sb=Symbol.for("react.context"),xb=Symbol.for("react.forward_ref"),_b=Symbol.for("react.suspense"),Eb=Symbol.for("react.memo"),kb=Symbol.for("react.lazy"),Mp=Symbol.iterator;function Tb(e){return e===null||typeof e!="object"?null:(e=Mp&&e[Mp]||e["@@iterator"],typeof e=="function"?e:null)}var Sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xv=Object.assign,_v={};function Yi(e,t,n){this.props=e,this.context=t,this.refs=_v,this.updater=n||Sv}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ev(){}Ev.prototype=Yi.prototype;function Kd(e,t,n){this.props=e,this.context=t,this.refs=_v,this.updater=n||Sv}var Yd=Kd.prototype=new Ev;Yd.constructor=Kd;xv(Yd,Yi.prototype);Yd.isPureReactComponent=!0;var Dp=Array.isArray,kv=Object.prototype.hasOwnProperty,Xd={current:null},Tv={key:!0,ref:!0,__self:!0,__source:!0};function Cv(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)kv.call(t,r)&&!Tv.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ts,type:e,key:o,ref:s,props:i,_owner:Xd.current}}function Cb(e,t){return{$$typeof:Ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ts}function Ib(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zp=/\/+/g;function Ru(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ib(""+e.key):t.toString(36)}function wa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ts:case mb:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ru(s,0):r,Dp(i)?(n="",e!=null&&(n=e.replace(zp,"$&/")+"/"),wa(i,t,n,"",function(u){return u})):i!=null&&(Qd(i)&&(i=Cb(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(zp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Dp(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ru(o,a);s+=wa(o,t,n,l,i)}else if(l=Tb(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ru(o,a++),s+=wa(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Hs(e,t,n){if(e==null)return e;var r=[],i=0;return wa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ob(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},ba={transition:null},Pb={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:ba,ReactCurrentOwner:Xd};re.Children={map:Hs,forEach:function(e,t,n){Hs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hs(e,function(){t++}),t},toArray:function(e){return Hs(e,function(t){return t})||[]},only:function(e){if(!Qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Yi;re.Fragment=vb;re.Profiler=wb;re.PureComponent=Kd;re.StrictMode=yb;re.Suspense=_b;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pb;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xv({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Xd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)kv.call(t,l)&&!Tv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ts,type:e.type,key:i,ref:o,props:r,_owner:s}};re.createContext=function(e){return e={$$typeof:Sb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bb,_context:e},e.Consumer=e};re.createElement=Cv;re.createFactory=function(e){var t=Cv.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:xb,render:e}};re.isValidElement=Qd;re.lazy=function(e){return{$$typeof:kb,_payload:{_status:-1,_result:e},_init:Ob}};re.memo=function(e,t){return{$$typeof:Eb,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=ba.transition;ba.transition={};try{e()}finally{ba.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return lt.current.useCallback(e,t)};re.useContext=function(e){return lt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};re.useEffect=function(e,t){return lt.current.useEffect(e,t)};re.useId=function(){return lt.current.useId()};re.useImperativeHandle=function(e,t,n){return lt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return lt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return lt.current.useReducer(e,t,n)};re.useRef=function(e){return lt.current.useRef(e)};re.useState=function(e){return lt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return lt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return lt.current.useTransition()};re.version="18.2.0";(function(e){e.exports=re})(C);const Ne=hb(C.exports);var Cc={},Jd={exports:{}},Ct={},Iv={exports:{}},Ov={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,$){var q=L.length;L.push($);e:for(;0<q;){var Z=q-1>>>1,j=L[Z];if(0<i(j,$))L[Z]=$,L[q]=j,q=Z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var $=L[0],q=L.pop();if(q!==$){L[0]=q;e:for(var Z=0,j=L.length,H=j>>>1;Z<H;){var B=2*(Z+1)-1,Y=L[B],I=B+1,ee=L[I];if(0>i(Y,q))I<j&&0>i(ee,Y)?(L[Z]=ee,L[I]=q,Z=I):(L[Z]=Y,L[B]=q,Z=B);else if(I<j&&0>i(ee,q))L[Z]=ee,L[I]=q,Z=I;else break e}}return $}function i(L,$){var q=L.sortIndex-$.sortIndex;return q!==0?q:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,v=!1,y=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=L)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function S(L){if(b=!1,m(L),!y)if(n(l)!==null)y=!0,G(k);else{var $=n(u);$!==null&&X(S,$.startTime-L)}}function k(L,$){y=!1,b&&(b=!1,p(x),x=-1),v=!0;var q=h;try{for(m($),d=n(l);d!==null&&(!(d.expirationTime>$)||L&&!R());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var j=Z(d.expirationTime<=$);$=e.unstable_now(),typeof j=="function"?d.callback=j:d===n(l)&&r(l),m($)}else r(l);d=n(l)}if(d!==null)var H=!0;else{var B=n(u);B!==null&&X(S,B.startTime-$),H=!1}return H}finally{d=null,h=q,v=!1}}var T=!1,_=null,x=-1,N=5,O=-1;function R(){return!(e.unstable_now()-O<N)}function z(){if(_!==null){var L=e.unstable_now();O=L;var $=!0;try{$=_(!0,L)}finally{$?K():(T=!1,_=null)}}else T=!1}var K;if(typeof g=="function")K=function(){g(z)};else if(typeof MessageChannel<"u"){var E=new MessageChannel,A=E.port2;E.port1.onmessage=z,K=function(){A.postMessage(null)}}else K=function(){w(z,0)};function G(L){_=L,T||(T=!0,K())}function X(L,$){x=w(function(){L(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,G(k))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var q=h;h=$;try{return L()}finally{h=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=h;h=L;try{return $()}finally{h=q}},e.unstable_scheduleCallback=function(L,$,q){var Z=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Z+q:Z):q=Z,L){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=q+j,L={id:c++,callback:$,priorityLevel:L,startTime:q,expirationTime:j,sortIndex:-1},q>Z?(L.sortIndex=q,t(u,L),n(l)===null&&L===n(u)&&(b?(p(x),x=-1):b=!0,X(S,q-Z))):(L.sortIndex=j,t(l,L),y||v||(y=!0,G(k))),L},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(L){var $=h;return function(){var q=h;h=$;try{return L.apply(this,arguments)}finally{h=q}}}})(Ov);(function(e){e.exports=Ov})(Iv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=C.exports,Tt=Iv.exports;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rv=new Set,Xo={};function ei(e,t){Di(e,t),Di(e+"Capture",t)}function Di(e,t){for(Xo[e]=t,e=0;e<t.length;e++)Rv.add(t[e])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=Object.prototype.hasOwnProperty,Rb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Fp={};function Ab(e){return Ic.call(Fp,e)?!0:Ic.call(jp,e)?!1:Rb.test(e)?Fp[e]=!0:(jp[e]=!0,!1)}function Lb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nb(e,t,n,r){if(t===null||typeof t>"u"||Lb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zd=/[\-:]([a-z])/g;function ef(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zd,ef);Xe[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zd,ef);Xe[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zd,ef);Xe[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function tf(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nb(t,n,i,r)&&(n=null),r||i===null?Ab(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ln=Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Av=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),Rc=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Nv=Symbol.for("react.offscreen"),Up=Symbol.iterator;function lo(e){return e===null||typeof e!="object"?null:(e=Up&&e[Up]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Au;function Po(e){if(Au===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Au=t&&t[1]||""}return`
`+Au+e}var Lu=!1;function Nu(e,t){if(!e||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Po(e):""}function $b(e){switch(e.tag){case 5:return Po(e.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return e=Nu(e.type,!1),e;case 11:return e=Nu(e.type.render,!1),e;case 1:return e=Nu(e.type,!0),e;default:return""}}function Ac(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case Oc:return"Profiler";case nf:return"StrictMode";case Pc:return"Suspense";case Rc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lv:return(e.displayName||"Context")+".Consumer";case Av:return(e._context.displayName||"Context")+".Provider";case rf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case of:return t=e.displayName||null,t!==null?t:Ac(e.type)||"Memo";case Un:t=e._payload,e=e._init;try{return Ac(e(t))}catch{}}return null}function Mb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ac(t);case 8:return t===nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $v(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Db(e){var t=$v(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ws(e){e._valueTracker||(e._valueTracker=Db(e))}function Mv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$v(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lc(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Bp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dv(e,t){t=t.checked,t!=null&&tf(e,"checked",t,!1)}function Nc(e,t){Dv(e,t);var n=dr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$c(e,t.type,n):t.hasOwnProperty("defaultValue")&&$c(e,t.type,dr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $c(e,t,n){(t!=="number"||za(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ro=Array.isArray;function Ii(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ro(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dr(n)}}function zv(e,t){var n=dr(t.value),r=dr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gs,Fv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zb=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(e){zb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mo[t]=Mo[e]})});function Uv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mo.hasOwnProperty(e)&&Mo[e]?(""+t).trim():t+"px"}function Bv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jb=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(e,t){if(t){if(jb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function jc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uc=null,Oi=null,Pi=null;function Gp(e){if(e=Os(e)){if(typeof Uc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ol(t),Uc(e.stateNode,e.type,t))}}function Hv(e){Oi?Pi?Pi.push(e):Pi=[e]:Oi=e}function Vv(){if(Oi){var e=Oi,t=Pi;if(Pi=Oi=null,Gp(e),t)for(e=0;e<t.length;e++)Gp(t[e])}}function Wv(e,t){return e(t)}function Gv(){}var $u=!1;function qv(e,t,n){if($u)return e(t,n);$u=!0;try{return Wv(e,t,n)}finally{$u=!1,(Oi!==null||Pi!==null)&&(Gv(),Vv())}}function Jo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Bc=!1;if(Cn)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Bc=!1}function Fb(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Do=!1,ja=null,Fa=!1,Hc=null,Ub={onError:function(e){Do=!0,ja=e}};function Bb(e,t,n,r,i,o,s,a,l){Do=!1,ja=null,Fb.apply(Ub,arguments)}function Hb(e,t,n,r,i,o,s,a,l){if(Bb.apply(this,arguments),Do){if(Do){var u=ja;Do=!1,ja=null}else throw Error(M(198));Fa||(Fa=!0,Hc=u)}}function ti(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qp(e){if(ti(e)!==e)throw Error(M(188))}function Vb(e){var t=e.alternate;if(!t){if(t=ti(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qp(i),e;if(o===r)return qp(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Yv(e){return e=Vb(e),e!==null?Xv(e):null}function Xv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xv(e);if(t!==null)return t;e=e.sibling}return null}var Qv=Tt.unstable_scheduleCallback,Kp=Tt.unstable_cancelCallback,Wb=Tt.unstable_shouldYield,Gb=Tt.unstable_requestPaint,Te=Tt.unstable_now,qb=Tt.unstable_getCurrentPriorityLevel,af=Tt.unstable_ImmediatePriority,Jv=Tt.unstable_UserBlockingPriority,Ua=Tt.unstable_NormalPriority,Kb=Tt.unstable_LowPriority,Zv=Tt.unstable_IdlePriority,kl=null,hn=null;function Yb(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Jb,Xb=Math.log,Qb=Math.LN2;function Jb(e){return e>>>=0,e===0?32:31-(Xb(e)/Qb|0)|0}var qs=64,Ks=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ao(a):(o&=s,o!==0&&(r=Ao(o)))}else s=n&~i,s!==0?r=Ao(s):o!==0&&(r=Ao(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xt(t),i=1<<n,r|=e[n],t&=~i;return r}function Zb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Xt(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=Zb(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Vc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function e0(){var e=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),e}function Mu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=n}function tS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function t0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var n0,uf,r0,i0,o0,Wc=!1,Ys=[],Qn=null,Jn=null,Zn=null,Zo=new Map,es=new Map,Hn=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(e,t){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":Zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(t.pointerId)}}function co(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Os(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rS(e,t,n,r,i){switch(t){case"focusin":return Qn=co(Qn,e,t,n,r,i),!0;case"dragenter":return Jn=co(Jn,e,t,n,r,i),!0;case"mouseover":return Zn=co(Zn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Zo.set(o,co(Zo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,es.set(o,co(es.get(o)||null,e,t,n,r,i)),!0}return!1}function s0(e){var t=Cr(e.target);if(t!==null){var n=ti(t);if(n!==null){if(t=n.tag,t===13){if(t=Kv(n),t!==null){e.blockedOn=t,o0(e.priority,function(){r0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fc=r,n.target.dispatchEvent(r),Fc=null}else return t=Os(n),t!==null&&uf(t),e.blockedOn=n,!1;t.shift()}return!0}function Xp(e,t,n){Sa(e)&&n.delete(t)}function iS(){Wc=!1,Qn!==null&&Sa(Qn)&&(Qn=null),Jn!==null&&Sa(Jn)&&(Jn=null),Zn!==null&&Sa(Zn)&&(Zn=null),Zo.forEach(Xp),es.forEach(Xp)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,iS)))}function ts(e){function t(i){return fo(i,e)}if(0<Ys.length){fo(Ys[0],e);for(var n=1;n<Ys.length;n++){var r=Ys[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qn!==null&&fo(Qn,e),Jn!==null&&fo(Jn,e),Zn!==null&&fo(Zn,e),Zo.forEach(t),es.forEach(t),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&Hn.shift()}var Ri=Ln.ReactCurrentBatchConfig,Ha=!0;function oS(e,t,n,r){var i=ue,o=Ri.transition;Ri.transition=null;try{ue=1,cf(e,t,n,r)}finally{ue=i,Ri.transition=o}}function sS(e,t,n,r){var i=ue,o=Ri.transition;Ri.transition=null;try{ue=4,cf(e,t,n,r)}finally{ue=i,Ri.transition=o}}function cf(e,t,n,r){if(Ha){var i=Gc(e,t,n,r);if(i===null)Gu(e,t,r,Va,n),Yp(e,r);else if(rS(i,e,t,n,r))r.stopPropagation();else if(Yp(e,r),t&4&&-1<nS.indexOf(e)){for(;i!==null;){var o=Os(i);if(o!==null&&n0(o),o=Gc(e,t,n,r),o===null&&Gu(e,t,r,Va,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Gu(e,t,r,null,n)}}var Va=null;function Gc(e,t,n,r){if(Va=null,e=sf(r),e=Cr(e),e!==null)if(t=ti(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Va=e,null}function a0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qb()){case af:return 1;case Jv:return 4;case Ua:case Kb:return 16;case Zv:return 536870912;default:return 16}default:return 16}}var Wn=null,df=null,xa=null;function l0(){if(xa)return xa;var e,t=df,n=t.length,r,i="value"in Wn?Wn.value:Wn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return xa=i.slice(e,1<r?1-r:void 0)}function _a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xs(){return!0}function Qp(){return!1}function It(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xs:Qp,this.isPropagationStopped=Qp,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),t}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ff=It(Xi),Is=xe({},Xi,{view:0,detail:0}),aS=It(Is),Du,zu,po,Tl=xe({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(Du=e.screenX-po.screenX,zu=e.screenY-po.screenY):zu=Du=0,po=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:zu}}),Jp=It(Tl),lS=xe({},Tl,{dataTransfer:0}),uS=It(lS),cS=xe({},Is,{relatedTarget:0}),ju=It(cS),dS=xe({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=It(dS),pS=xe({},Xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hS=It(pS),gS=xe({},Xi,{data:0}),Zp=It(gS),mS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yS[e])?!!t[e]:!1}function pf(){return wS}var bS=xe({},Is,{key:function(e){if(e.key){var t=mS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),SS=It(bS),xS=xe({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=It(xS),_S=xe({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),ES=It(_S),kS=xe({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=It(kS),CS=xe({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IS=It(CS),OS=[9,13,27,32],hf=Cn&&"CompositionEvent"in window,zo=null;Cn&&"documentMode"in document&&(zo=document.documentMode);var PS=Cn&&"TextEvent"in window&&!zo,u0=Cn&&(!hf||zo&&8<zo&&11>=zo),th=String.fromCharCode(32),nh=!1;function c0(e,t){switch(e){case"keyup":return OS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gi=!1;function RS(e,t){switch(e){case"compositionend":return d0(t);case"keypress":return t.which!==32?null:(nh=!0,th);case"textInput":return e=t.data,e===th&&nh?null:e;default:return null}}function AS(e,t){if(gi)return e==="compositionend"||!hf&&c0(e,t)?(e=l0(),xa=df=Wn=null,gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return u0&&t.locale!=="ko"?null:t.data;default:return null}}var LS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!LS[e.type]:t==="textarea"}function f0(e,t,n,r){Hv(r),t=Wa(t,"onChange"),0<t.length&&(n=new ff("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jo=null,ns=null;function NS(e){_0(e,0)}function Cl(e){var t=yi(e);if(Mv(t))return e}function $S(e,t){if(e==="change")return t}var p0=!1;if(Cn){var Fu;if(Cn){var Uu="oninput"in document;if(!Uu){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),Uu=typeof ih.oninput=="function"}Fu=Uu}else Fu=!1;p0=Fu&&(!document.documentMode||9<document.documentMode)}function oh(){jo&&(jo.detachEvent("onpropertychange",h0),ns=jo=null)}function h0(e){if(e.propertyName==="value"&&Cl(ns)){var t=[];f0(t,ns,e,sf(e)),qv(NS,t)}}function MS(e,t,n){e==="focusin"?(oh(),jo=t,ns=n,jo.attachEvent("onpropertychange",h0)):e==="focusout"&&oh()}function DS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(ns)}function zS(e,t){if(e==="click")return Cl(t)}function jS(e,t){if(e==="input"||e==="change")return Cl(t)}function FS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zt=typeof Object.is=="function"?Object.is:FS;function rs(e,t){if(Zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ic.call(t,i)||!Zt(e[i],t[i]))return!1}return!0}function sh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ah(e,t){var n=sh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sh(n)}}function g0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?g0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function m0(){for(var e=window,t=za();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=za(e.document)}return t}function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function US(e){var t=m0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&g0(n.ownerDocument.documentElement,n)){if(r!==null&&gf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ah(n,o);var s=ah(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var BS=Cn&&"documentMode"in document&&11>=document.documentMode,mi=null,qc=null,Fo=null,Kc=!1;function lh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kc||mi==null||mi!==za(r)||(r=mi,"selectionStart"in r&&gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&rs(Fo,r)||(Fo=r,r=Wa(qc,"onSelect"),0<r.length&&(t=new ff("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mi)))}function Qs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},Bu={},v0={};Cn&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Il(e){if(Bu[e])return Bu[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in v0)return Bu[e]=t[n];return e}var y0=Il("animationend"),w0=Il("animationiteration"),b0=Il("animationstart"),S0=Il("transitionend"),x0=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(e,t){x0.set(e,t),ei(t,[e])}for(var Hu=0;Hu<uh.length;Hu++){var Vu=uh[Hu],HS=Vu.toLowerCase(),VS=Vu[0].toUpperCase()+Vu.slice(1);wr(HS,"on"+VS)}wr(y0,"onAnimationEnd");wr(w0,"onAnimationIteration");wr(b0,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(S0,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function ch(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hb(r,t,void 0,e),e.currentTarget=null}function _0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ch(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ch(i,a,u),o=l}}}if(Fa)throw e=Hc,Fa=!1,Hc=null,e}function ge(e,t){var n=t[Zc];n===void 0&&(n=t[Zc]=new Set);var r=e+"__bubble";n.has(r)||(E0(t,e,2,!1),n.add(r))}function Wu(e,t,n){var r=0;t&&(r|=4),E0(n,e,r,t)}var Js="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[Js]){e[Js]=!0,Rv.forEach(function(n){n!=="selectionchange"&&(WS.has(n)||Wu(n,!1,e),Wu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Js]||(t[Js]=!0,Wu("selectionchange",!1,t))}}function E0(e,t,n,r){switch(a0(t)){case 1:var i=oS;break;case 4:i=sS;break;default:i=cf}n=i.bind(null,t,n,e),i=void 0,!Bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Gu(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Cr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}qv(function(){var u=o,c=sf(n),d=[];e:{var h=x0.get(e);if(h!==void 0){var v=ff,y=e;switch(e){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":v=SS;break;case"focusin":y="focus",v=ju;break;case"focusout":y="blur",v=ju;break;case"beforeblur":case"afterblur":v=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=uS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ES;break;case y0:case w0:case b0:v=fS;break;case S0:v=TS;break;case"scroll":v=aS;break;case"wheel":v=IS;break;case"copy":case"cut":case"paste":v=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=eh}var b=(t&4)!==0,w=!b&&e==="scroll",p=b?h!==null?h+"Capture":null:h;b=[];for(var g=u,m;g!==null;){m=g;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=Jo(g,p),S!=null&&b.push(os(g,S,m)))),w)break;g=g.return}0<b.length&&(h=new v(h,y,null,n,c),d.push({event:h,listeners:b}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Fc&&(y=n.relatedTarget||n.fromElement)&&(Cr(y)||y[In]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Cr(y):null,y!==null&&(w=ti(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(b=Jp,S="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=eh,S="onPointerLeave",p="onPointerEnter",g="pointer"),w=v==null?h:yi(v),m=y==null?h:yi(y),h=new b(S,g+"leave",v,n,c),h.target=w,h.relatedTarget=m,S=null,Cr(c)===u&&(b=new b(p,g+"enter",y,n,c),b.target=m,b.relatedTarget=w,S=b),w=S,v&&y)t:{for(b=v,p=y,g=0,m=b;m;m=si(m))g++;for(m=0,S=p;S;S=si(S))m++;for(;0<g-m;)b=si(b),g--;for(;0<m-g;)p=si(p),m--;for(;g--;){if(b===p||p!==null&&b===p.alternate)break t;b=si(b),p=si(p)}b=null}else b=null;v!==null&&dh(d,h,v,b,!1),y!==null&&w!==null&&dh(d,w,y,b,!0)}}e:{if(h=u?yi(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var k=$S;else if(rh(h))if(p0)k=jS;else{k=DS;var T=MS}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=zS);if(k&&(k=k(e,u))){f0(d,k,n,c);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&$c(h,"number",h.value)}switch(T=u?yi(u):window,e){case"focusin":(rh(T)||T.contentEditable==="true")&&(mi=T,qc=u,Fo=null);break;case"focusout":Fo=qc=mi=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,lh(d,n,c);break;case"selectionchange":if(BS)break;case"keydown":case"keyup":lh(d,n,c)}var _;if(hf)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else gi?c0(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(u0&&n.locale!=="ko"&&(gi||x!=="onCompositionStart"?x==="onCompositionEnd"&&gi&&(_=l0()):(Wn=c,df="value"in Wn?Wn.value:Wn.textContent,gi=!0)),T=Wa(u,x),0<T.length&&(x=new Zp(x,e,null,n,c),d.push({event:x,listeners:T}),_?x.data=_:(_=d0(n),_!==null&&(x.data=_)))),(_=PS?RS(e,n):AS(e,n))&&(u=Wa(u,"onBeforeInput"),0<u.length&&(c=new Zp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}_0(d,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Jo(e,n),o!=null&&r.unshift(os(e,o,i)),o=Jo(e,t),o!=null&&r.push(os(e,o,i))),e=e.return}return r}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Jo(n,o),l!=null&&s.unshift(os(n,l,a))):i||(l=Jo(n,o),l!=null&&s.push(os(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var GS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function fh(e){return(typeof e=="string"?e:""+e).replace(GS,`
`).replace(qS,"")}function Zs(e,t,n){if(t=fh(t),fh(e)!==t&&n)throw Error(M(425))}function Ga(){}var Yc=null,Xc=null;function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(e){return ph.resolve(null).then(e).catch(XS)}:Jc;function XS(e){setTimeout(function(){throw e})}function qu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ts(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ts(t)}function er(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),an="__reactFiber$"+Qi,ss="__reactProps$"+Qi,In="__reactContainer$"+Qi,Zc="__reactEvents$"+Qi,QS="__reactListeners$"+Qi,JS="__reactHandles$"+Qi;function Cr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[In]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hh(e);e!==null;){if(n=e[an])return n;e=hh(e)}return t}e=n,n=e.parentNode}return null}function Os(e){return e=e[an]||e[In],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ol(e){return e[ss]||null}var ed=[],wi=-1;function br(e){return{current:e}}function me(e){0>wi||(e.current=ed[wi],ed[wi]=null,wi--)}function pe(e,t){wi++,ed[wi]=e.current,e.current=t}var fr={},it=br(fr),gt=br(!1),jr=fr;function zi(e,t){var n=e.type.contextTypes;if(!n)return fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mt(e){return e=e.childContextTypes,e!=null}function qa(){me(gt),me(it)}function gh(e,t,n){if(it.current!==fr)throw Error(M(168));pe(it,t),pe(gt,n)}function k0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Mb(e)||"Unknown",i));return xe({},n,r)}function Ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,jr=it.current,pe(it,e),pe(gt,gt.current),!0}function mh(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=k0(e,t,jr),r.__reactInternalMemoizedMergedChildContext=e,me(gt),me(it),pe(it,e)):me(gt),pe(gt,n)}var wn=null,Pl=!1,Ku=!1;function T0(e){wn===null?wn=[e]:wn.push(e)}function ZS(e){Pl=!0,T0(e)}function Sr(){if(!Ku&&wn!==null){Ku=!0;var e=0,t=ue;try{var n=wn;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wn=null,Pl=!1}catch(i){throw wn!==null&&(wn=wn.slice(e+1)),Qv(af,Sr),i}finally{ue=t,Ku=!1}}return null}var bi=[],Si=0,Ya=null,Xa=0,Rt=[],At=0,Fr=null,bn=1,Sn="";function Er(e,t){bi[Si++]=Xa,bi[Si++]=Ya,Ya=e,Xa=t}function C0(e,t,n){Rt[At++]=bn,Rt[At++]=Sn,Rt[At++]=Fr,Fr=e;var r=bn;e=Sn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var o=32-Xt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,bn=1<<32-Xt(t)+i|n<<i|r,Sn=o+e}else bn=1<<o|n<<i|r,Sn=e}function mf(e){e.return!==null&&(Er(e,1),C0(e,1,0))}function vf(e){for(;e===Ya;)Ya=bi[--Si],bi[Si]=null,Xa=bi[--Si],bi[Si]=null;for(;e===Fr;)Fr=Rt[--At],Rt[At]=null,Sn=Rt[--At],Rt[At]=null,bn=Rt[--At],Rt[At]=null}var kt=null,_t=null,ve=!1,Kt=null;function I0(e,t){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,_t=er(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fr!==null?{id:bn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,_t=null,!0):!1;default:return!1}}function td(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nd(e){if(ve){var t=_t;if(t){var n=t;if(!vh(e,t)){if(td(e))throw Error(M(418));t=er(n.nextSibling);var r=kt;t&&vh(e,t)?I0(r,n):(e.flags=e.flags&-4097|2,ve=!1,kt=e)}}else{if(td(e))throw Error(M(418));e.flags=e.flags&-4097|2,ve=!1,kt=e}}}function yh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function ea(e){if(e!==kt)return!1;if(!ve)return yh(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qc(e.type,e.memoizedProps)),t&&(t=_t)){if(td(e))throw O0(),Error(M(418));for(;t;)I0(e,t),t=er(t.nextSibling)}if(yh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=er(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=kt?er(e.stateNode.nextSibling):null;return!0}function O0(){for(var e=_t;e;)e=er(e.nextSibling)}function ji(){_t=kt=null,ve=!1}function yf(e){Kt===null?Kt=[e]:Kt.push(e)}var ex=Ln.ReactCurrentBatchConfig;function Gt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Qa=br(null),Ja=null,xi=null,wf=null;function bf(){wf=xi=Ja=null}function Sf(e){var t=Qa.current;me(Qa),e._currentValue=t}function rd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ai(e,t){Ja=e,wf=xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ht=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(wf!==e)if(e={context:e,memoizedValue:t,next:null},xi===null){if(Ja===null)throw Error(M(308));xi=e,Ja.dependencies={lanes:0,firstContext:e}}else xi=xi.next=e;return t}var Ir=null;function xf(e){Ir===null?Ir=[e]:Ir.push(e)}function P0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xf(t)):(n.next=i.next,i.next=n),t.interleaved=n,On(e,r)}function On(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bn=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,On(e,n)}return i=r.interleaved,i===null?(t.next=t,xf(r)):(t.next=i.next,i.next=t),r.interleaved=t,On(e,n)}function Ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lf(e,n)}}function wh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Za(e,t,n,r){var i=e.updateQueue;Bn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,v=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,b=a;switch(h=t,v=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=xe({},d,h);break e;case 2:Bn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Br|=s,e.lanes=s,e.memoizedState=d}}function bh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var A0=new Pv.Component().refs;function id(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rl={isMounted:function(e){return(e=e._reactInternals)?ti(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=at(),i=rr(e),o=En(r,i);o.payload=t,n!=null&&(o.callback=n),t=tr(e,o,i),t!==null&&(Qt(t,e,i,r),Ea(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=at(),i=rr(e),o=En(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tr(e,o,i),t!==null&&(Qt(t,e,i,r),Ea(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),r=rr(e),i=En(n,r);i.tag=2,t!=null&&(i.callback=t),t=tr(e,i,r),t!==null&&(Qt(t,e,r,n),Ea(t,e,r))}};function Sh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!rs(n,r)||!rs(i,o):!0}function L0(e,t,n){var r=!1,i=fr,o=t.contextType;return typeof o=="object"&&o!==null?o=Mt(o):(i=mt(t)?jr:it.current,r=t.contextTypes,o=(r=r!=null)?zi(e,i):fr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function xh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rl.enqueueReplaceState(t,t.state,null)}function od(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=A0,_f(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Mt(o):(o=mt(t)?jr:it.current,i.context=zi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(id(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rl.enqueueReplaceState(i,i.state,null),Za(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ho(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===A0&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function ta(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _h(e){var t=e._init;return t(e._payload)}function N0(e){function t(p,g){if(e){var m=p.deletions;m===null?(p.deletions=[g],p.flags|=16):m.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=ir(p,g),p.index=0,p.sibling=null,p}function o(p,g,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<g?(p.flags|=2,g):m):(p.flags|=2,g)):(p.flags|=1048576,g)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,g,m,S){return g===null||g.tag!==6?(g=tc(m,p.mode,S),g.return=p,g):(g=i(g,m),g.return=p,g)}function l(p,g,m,S){var k=m.type;return k===hi?c(p,g,m.props.children,S,m.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Un&&_h(k)===g.type)?(S=i(g,m.props),S.ref=ho(p,g,m),S.return=p,S):(S=Pa(m.type,m.key,m.props,null,p.mode,S),S.ref=ho(p,g,m),S.return=p,S)}function u(p,g,m,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=nc(m,p.mode,S),g.return=p,g):(g=i(g,m.children||[]),g.return=p,g)}function c(p,g,m,S,k){return g===null||g.tag!==7?(g=Lr(m,p.mode,S,k),g.return=p,g):(g=i(g,m),g.return=p,g)}function d(p,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=tc(""+g,p.mode,m),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vs:return m=Pa(g.type,g.key,g.props,null,p.mode,m),m.ref=ho(p,null,g),m.return=p,m;case pi:return g=nc(g,p.mode,m),g.return=p,g;case Un:var S=g._init;return d(p,S(g._payload),m)}if(Ro(g)||lo(g))return g=Lr(g,p.mode,m,null),g.return=p,g;ta(p,g)}return null}function h(p,g,m,S){var k=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,g,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vs:return m.key===k?l(p,g,m,S):null;case pi:return m.key===k?u(p,g,m,S):null;case Un:return k=m._init,h(p,g,k(m._payload),S)}if(Ro(m)||lo(m))return k!==null?null:c(p,g,m,S,null);ta(p,m)}return null}function v(p,g,m,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,a(g,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vs:return p=p.get(S.key===null?m:S.key)||null,l(g,p,S,k);case pi:return p=p.get(S.key===null?m:S.key)||null,u(g,p,S,k);case Un:var T=S._init;return v(p,g,m,T(S._payload),k)}if(Ro(S)||lo(S))return p=p.get(m)||null,c(g,p,S,k,null);ta(g,S)}return null}function y(p,g,m,S){for(var k=null,T=null,_=g,x=g=0,N=null;_!==null&&x<m.length;x++){_.index>x?(N=_,_=null):N=_.sibling;var O=h(p,_,m[x],S);if(O===null){_===null&&(_=N);break}e&&_&&O.alternate===null&&t(p,_),g=o(O,g,x),T===null?k=O:T.sibling=O,T=O,_=N}if(x===m.length)return n(p,_),ve&&Er(p,x),k;if(_===null){for(;x<m.length;x++)_=d(p,m[x],S),_!==null&&(g=o(_,g,x),T===null?k=_:T.sibling=_,T=_);return ve&&Er(p,x),k}for(_=r(p,_);x<m.length;x++)N=v(_,p,x,m[x],S),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?x:N.key),g=o(N,g,x),T===null?k=N:T.sibling=N,T=N);return e&&_.forEach(function(R){return t(p,R)}),ve&&Er(p,x),k}function b(p,g,m,S){var k=lo(m);if(typeof k!="function")throw Error(M(150));if(m=k.call(m),m==null)throw Error(M(151));for(var T=k=null,_=g,x=g=0,N=null,O=m.next();_!==null&&!O.done;x++,O=m.next()){_.index>x?(N=_,_=null):N=_.sibling;var R=h(p,_,O.value,S);if(R===null){_===null&&(_=N);break}e&&_&&R.alternate===null&&t(p,_),g=o(R,g,x),T===null?k=R:T.sibling=R,T=R,_=N}if(O.done)return n(p,_),ve&&Er(p,x),k;if(_===null){for(;!O.done;x++,O=m.next())O=d(p,O.value,S),O!==null&&(g=o(O,g,x),T===null?k=O:T.sibling=O,T=O);return ve&&Er(p,x),k}for(_=r(p,_);!O.done;x++,O=m.next())O=v(_,p,x,O.value,S),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?x:O.key),g=o(O,g,x),T===null?k=O:T.sibling=O,T=O);return e&&_.forEach(function(z){return t(p,z)}),ve&&Er(p,x),k}function w(p,g,m,S){if(typeof m=="object"&&m!==null&&m.type===hi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Vs:e:{for(var k=m.key,T=g;T!==null;){if(T.key===k){if(k=m.type,k===hi){if(T.tag===7){n(p,T.sibling),g=i(T,m.props.children),g.return=p,p=g;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Un&&_h(k)===T.type){n(p,T.sibling),g=i(T,m.props),g.ref=ho(p,T,m),g.return=p,p=g;break e}n(p,T);break}else t(p,T);T=T.sibling}m.type===hi?(g=Lr(m.props.children,p.mode,S,m.key),g.return=p,p=g):(S=Pa(m.type,m.key,m.props,null,p.mode,S),S.ref=ho(p,g,m),S.return=p,p=S)}return s(p);case pi:e:{for(T=m.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){n(p,g.sibling),g=i(g,m.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=nc(m,p.mode,S),g.return=p,p=g}return s(p);case Un:return T=m._init,w(p,g,T(m._payload),S)}if(Ro(m))return y(p,g,m,S);if(lo(m))return b(p,g,m,S);ta(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,m),g.return=p,p=g):(n(p,g),g=tc(m,p.mode,S),g.return=p,p=g),s(p)):n(p,g)}return w}var Fi=N0(!0),$0=N0(!1),Ps={},gn=br(Ps),as=br(Ps),ls=br(Ps);function Or(e){if(e===Ps)throw Error(M(174));return e}function Ef(e,t){switch(pe(ls,t),pe(as,e),pe(gn,Ps),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dc(t,e)}me(gn),pe(gn,t)}function Ui(){me(gn),me(as),me(ls)}function M0(e){Or(ls.current);var t=Or(gn.current),n=Dc(t,e.type);t!==n&&(pe(as,e),pe(gn,n))}function kf(e){as.current===e&&(me(gn),me(as))}var be=br(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yu=[];function Tf(){for(var e=0;e<Yu.length;e++)Yu[e]._workInProgressVersionPrimary=null;Yu.length=0}var ka=Ln.ReactCurrentDispatcher,Xu=Ln.ReactCurrentBatchConfig,Ur=0,Se=null,Re=null,Me=null,tl=!1,Uo=!1,us=0,tx=0;function Ze(){throw Error(M(321))}function Cf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zt(e[n],t[n]))return!1;return!0}function If(e,t,n,r,i,o){if(Ur=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?ox:sx,e=n(r,i),Uo){o=0;do{if(Uo=!1,us=0,25<=o)throw Error(M(301));o+=1,Me=Re=null,t.updateQueue=null,ka.current=ax,e=n(r,i)}while(Uo)}if(ka.current=nl,t=Re!==null&&Re.next!==null,Ur=0,Me=Re=Se=null,tl=!1,t)throw Error(M(300));return e}function Of(){var e=us!==0;return us=0,e}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Se.memoizedState=Me=e:Me=Me.next=e,Me}function Dt(){if(Re===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Me===null?Se.memoizedState:Me.next;if(t!==null)Me=t,Re=e;else{if(e===null)throw Error(M(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Me===null?Se.memoizedState=Me=e:Me=Me.next=e}return Me}function cs(e,t){return typeof t=="function"?t(e):t}function Qu(e){var t=Dt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Se.lanes|=c,Br|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Zt(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,Br|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ju(e){var t=Dt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Zt(o,t.memoizedState)||(ht=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function D0(){}function z0(e,t){var n=Se,r=Dt(),i=t(),o=!Zt(r.memoizedState,i);if(o&&(r.memoizedState=i,ht=!0),r=r.queue,Pf(U0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,ds(9,F0.bind(null,n,r,i,t),void 0,null),De===null)throw Error(M(349));(Ur&30)!==0||j0(n,t,i)}return i}function j0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function F0(e,t,n,r){t.value=n,t.getSnapshot=r,B0(t)&&H0(e)}function U0(e,t,n){return n(function(){B0(t)&&H0(e)})}function B0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zt(e,n)}catch{return!0}}function H0(e){var t=On(e,1);t!==null&&Qt(t,e,1,-1)}function Eh(e){var t=sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t.queue=e,e=e.dispatch=ix.bind(null,Se,e),[t.memoizedState,e]}function ds(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function V0(){return Dt().memoizedState}function Ta(e,t,n,r){var i=sn();Se.flags|=e,i.memoizedState=ds(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var i=Dt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var s=Re.memoizedState;if(o=s.destroy,r!==null&&Cf(r,s.deps)){i.memoizedState=ds(t,n,o,r);return}}Se.flags|=e,i.memoizedState=ds(1|t,n,o,r)}function kh(e,t){return Ta(8390656,8,e,t)}function Pf(e,t){return Al(2048,8,e,t)}function W0(e,t){return Al(4,2,e,t)}function G0(e,t){return Al(4,4,e,t)}function q0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function K0(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,q0.bind(null,t,e),n)}function Rf(){}function Y0(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function X0(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Q0(e,t,n){return(Ur&21)===0?(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n):(Zt(n,t)||(n=e0(),Se.lanes|=n,Br|=n,e.baseState=!0),t)}function nx(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Xu.transition;Xu.transition={};try{e(!1),t()}finally{ue=n,Xu.transition=r}}function J0(){return Dt().memoizedState}function rx(e,t,n){var r=rr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(e))ey(t,n);else if(n=P0(e,t,n,r),n!==null){var i=at();Qt(n,e,r,i),ty(n,t,r)}}function ix(e,t,n){var r=rr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(e))ey(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Zt(a,s)){var l=t.interleaved;l===null?(i.next=i,xf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=P0(e,t,i,r),n!==null&&(i=at(),Qt(n,e,r,i),ty(n,t,r))}}function Z0(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function ey(e,t){Uo=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ty(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lf(e,n)}}var nl={readContext:Mt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},ox={readContext:Mt,useCallback:function(e,t){return sn().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:kh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,q0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rx.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=sn();return e={current:e},t.memoizedState=e},useState:Eh,useDebugValue:Rf,useDeferredValue:function(e){return sn().memoizedState=e},useTransition:function(){var e=Eh(!1),t=e[0];return e=nx.bind(null,e[1]),sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=sn();if(ve){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),De===null)throw Error(M(349));(Ur&30)!==0||j0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,kh(U0.bind(null,r,o,e),[e]),r.flags|=2048,ds(9,F0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=sn(),t=De.identifierPrefix;if(ve){var n=Sn,r=bn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=us++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sx={readContext:Mt,useCallback:Y0,useContext:Mt,useEffect:Pf,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:G0,useMemo:X0,useReducer:Qu,useRef:V0,useState:function(){return Qu(cs)},useDebugValue:Rf,useDeferredValue:function(e){var t=Dt();return Q0(t,Re.memoizedState,e)},useTransition:function(){var e=Qu(cs)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:D0,useSyncExternalStore:z0,useId:J0,unstable_isNewReconciler:!1},ax={readContext:Mt,useCallback:Y0,useContext:Mt,useEffect:Pf,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:G0,useMemo:X0,useReducer:Ju,useRef:V0,useState:function(){return Ju(cs)},useDebugValue:Rf,useDeferredValue:function(e){var t=Dt();return Re===null?t.memoizedState=e:Q0(t,Re.memoizedState,e)},useTransition:function(){var e=Ju(cs)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:D0,useSyncExternalStore:z0,useId:J0,unstable_isNewReconciler:!1};function Bi(e,t){try{var n="",r=t;do n+=$b(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zu(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function sd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lx=typeof WeakMap=="function"?WeakMap:Map;function ny(e,t,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,md=r),sd(e,t)},n}function ry(e,t,n){n=En(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sd(e,t),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Th(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xx.bind(null,e,t,n),t.then(e,e))}function Ch(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ih(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=En(-1,1),t.tag=2,tr(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ux=Ln.ReactCurrentOwner,ht=!1;function st(e,t,n,r){t.child=e===null?$0(t,null,n,r):Fi(t,e.child,n,r)}function Oh(e,t,n,r,i){n=n.render;var o=t.ref;return Ai(t,i),r=If(e,t,n,r,o,i),n=Of(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pn(e,t,i)):(ve&&n&&mf(t),t.flags|=1,st(e,t,r,i),t.child)}function Ph(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!jf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,iy(e,t,o,r,i)):(e=Pa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:rs,n(s,r)&&e.ref===t.ref)return Pn(e,t,i)}return t.flags|=1,e=ir(o,r),e.ref=t.ref,e.return=t,t.child=e}function iy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(rs(o,r)&&e.ref===t.ref)if(ht=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ht=!0);else return t.lanes=e.lanes,Pn(e,t,i)}return ad(e,t,n,r,i)}function oy(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ei,bt),bt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(Ei,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,pe(Ei,bt),bt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,pe(Ei,bt),bt|=r;return st(e,t,i,n),t.child}function sy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ad(e,t,n,r,i){var o=mt(n)?jr:it.current;return o=zi(t,o),Ai(t,i),n=If(e,t,n,r,o,i),r=Of(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pn(e,t,i)):(ve&&r&&mf(t),t.flags|=1,st(e,t,n,i),t.child)}function Rh(e,t,n,r,i){if(mt(n)){var o=!0;Ka(t)}else o=!1;if(Ai(t,i),t.stateNode===null)Ca(e,t),L0(t,n,r),od(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=mt(n)?jr:it.current,u=zi(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&xh(t,s,r,u),Bn=!1;var h=t.memoizedState;s.state=h,Za(t,r,s,i),l=t.memoizedState,a!==r||h!==l||gt.current||Bn?(typeof c=="function"&&(id(t,n,c,r),l=t.memoizedState),(a=Bn||Sh(t,n,a,r,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,R0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Gt(t.type,a),s.props=u,d=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=mt(n)?jr:it.current,l=zi(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&xh(t,s,r,l),Bn=!1,h=t.memoizedState,s.state=h,Za(t,r,s,i);var y=t.memoizedState;a!==d||h!==y||gt.current||Bn?(typeof v=="function"&&(id(t,n,v,r),y=t.memoizedState),(u=Bn||Sh(t,n,u,r,h,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ld(e,t,n,r,o,i)}function ld(e,t,n,r,i,o){sy(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&mh(t,n,!1),Pn(e,t,o);r=t.stateNode,ux.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Fi(t,e.child,null,o),t.child=Fi(t,null,a,o)):st(e,t,a,o),t.memoizedState=r.state,i&&mh(t,n,!0),t.child}function ay(e){var t=e.stateNode;t.pendingContext?gh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gh(e,t.context,!1),Ef(e,t.containerInfo)}function Ah(e,t,n,r,i){return ji(),yf(i),t.flags|=256,st(e,t,n,r),t.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function cd(e){return{baseLanes:e,cachePool:null,transitions:null}}function ly(e,t,n){var r=t.pendingProps,i=be.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(be,i&1),e===null)return nd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$l(s,r,0,null),e=Lr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cd(n),t.memoizedState=ud,e):Af(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cx(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ir(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ir(a,o):(o=Lr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?cd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ud,r}return o=e.child,e=o.sibling,r=ir(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Af(e,t){return t=$l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function na(e,t,n,r){return r!==null&&yf(r),Fi(t,e.child,null,n),e=Af(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cx(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Zu(Error(M(422))),na(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=$l({mode:"visible",children:r.children},i,0,null),o=Lr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Fi(t,e.child,null,s),t.child.memoizedState=cd(s),t.memoizedState=ud,o);if((t.mode&1)===0)return na(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(M(419)),r=Zu(o,r,void 0),na(e,t,s,r)}if(a=(s&e.childLanes)!==0,ht||a){if(r=De,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,On(e,i),Qt(r,e,i,-1))}return zf(),r=Zu(Error(M(421))),na(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_x.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_t=er(i.nextSibling),kt=t,ve=!0,Kt=null,e!==null&&(Rt[At++]=bn,Rt[At++]=Sn,Rt[At++]=Fr,bn=e.id,Sn=e.overflow,Fr=t),t=Af(t,r.children),t.flags|=4096,t)}function Lh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rd(e.return,t,n)}function ec(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function uy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(st(e,t,r.children,n),r=be.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lh(e,n,t);else if(e.tag===19)Lh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(be,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ec(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&el(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ec(t,!0,n,null,o);break;case"together":ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ca(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=ir(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ir(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dx(e,t,n){switch(t.tag){case 3:ay(t),ji();break;case 5:M0(t);break;case 1:mt(t.type)&&Ka(t);break;case 4:Ef(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;pe(Qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(be,be.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ly(e,t,n):(pe(be,be.current&1),e=Pn(e,t,n),e!==null?e.sibling:null);pe(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return uy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,oy(e,t,n)}return Pn(e,t,n)}var cy,dd,dy,fy;cy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};dy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Or(gn.current);var o=null;switch(n){case"input":i=Lc(e,i),r=Lc(e,r),o=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),o=[];break;case"textarea":i=Mc(e,i),r=Mc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ga)}zc(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};fy=function(e,t,n,r){n!==r&&(t.flags|=4)};function go(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fx(e,t,n){var r=t.pendingProps;switch(vf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return mt(t.type)&&qa(),et(t),null;case 3:return r=t.stateNode,Ui(),me(gt),me(it),Tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Kt!==null&&(wd(Kt),Kt=null))),dd(e,t),et(t),null;case 5:kf(t);var i=Or(ls.current);if(n=t.type,e!==null&&t.stateNode!=null)dy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return et(t),null}if(e=Or(gn.current),ea(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[an]=t,r[ss]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Lo.length;i++)ge(Lo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Bp(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Vp(r,o),ge("invalid",r)}zc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Zs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Zs(r.textContent,a,e),i=["children",""+a]):Xo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ws(r),Hp(r,o,!0);break;case"textarea":Ws(r),Wp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ga)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[an]=t,e[ss]=r,cy(e,t,!1,!1),t.stateNode=e;e:{switch(s=jc(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lo.length;i++)ge(Lo[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Bp(e,r),i=Lc(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Vp(e,r),i=Mc(e,r),ge("invalid",e);break;default:i=r}zc(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Bv(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fv(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(e,l):typeof l=="number"&&Qo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ge("scroll",e):l!=null&&tf(e,o,l,s))}switch(n){case"input":Ws(e),Hp(e,r,!1);break;case"textarea":Ws(e),Wp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ii(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)fy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Or(ls.current),Or(gn.current),ea(t)){if(r=t.stateNode,n=t.memoizedProps,r[an]=t,(o=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:Zs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=t,t.stateNode=r}return et(t),null;case 13:if(me(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&_t!==null&&(t.mode&1)!==0&&(t.flags&128)===0)O0(),ji(),t.flags|=98560,o=!1;else if(o=ea(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[an]=t}else ji(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else Kt!==null&&(wd(Kt),Kt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(be.current&1)!==0?Le===0&&(Le=3):zf())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Ui(),dd(e,t),e===null&&is(t.stateNode.containerInfo),et(t),null;case 10:return Sf(t.type._context),et(t),null;case 17:return mt(t.type)&&qa(),et(t),null;case 19:if(me(be),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)go(o,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=el(e),s!==null){for(t.flags|=128,go(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(be,be.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Hi&&(t.flags|=128,r=!0,go(o,!1),t.lanes=4194304)}else{if(!r)if(e=el(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return et(t),null}else 2*Te()-o.renderingStartTime>Hi&&n!==1073741824&&(t.flags|=128,r=!0,go(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=be.current,pe(be,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Df(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(bt&1073741824)!==0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function px(e,t){switch(vf(t),t.tag){case 1:return mt(t.type)&&qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(),me(gt),me(it),Tf(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return kf(t),null;case 13:if(me(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(be),null;case 4:return Ui(),null;case 10:return Sf(t.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var ra=!1,nt=!1,hx=typeof WeakSet=="function"?WeakSet:Set,W=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function fd(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Nh=!1;function gx(e,t){if(Yc=Ha,e=m0(),gf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xc={focusedElem:e,selectionRange:n},Ha=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,w=y.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:Gt(t.type,b),w);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(S){_e(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return y=Nh,Nh=!1,y}function Bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fd(t,n,o)}i=i.next}while(i!==r)}}function Ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function py(e){var t=e.alternate;t!==null&&(e.alternate=null,py(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[ss],delete t[Zc],delete t[QS],delete t[JS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hy(e){return e.tag===5||e.tag===3||e.tag===4}function $h(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ga));else if(r!==4&&(e=e.child,e!==null))for(hd(e,t,n),e=e.sibling;e!==null;)hd(e,t,n),e=e.sibling}function gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gd(e,t,n),e=e.sibling;e!==null;)gd(e,t,n),e=e.sibling}var We=null,qt=!1;function zn(e,t,n){for(n=n.child;n!==null;)gy(e,t,n),n=n.sibling}function gy(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:nt||_i(n,t);case 6:var r=We,i=qt;We=null,zn(e,t,n),We=r,qt=i,We!==null&&(qt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(qt?(e=We,n=n.stateNode,e.nodeType===8?qu(e.parentNode,n):e.nodeType===1&&qu(e,n),ts(e)):qu(We,n.stateNode));break;case 4:r=We,i=qt,We=n.stateNode.containerInfo,qt=!0,zn(e,t,n),We=r,qt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&fd(n,t,s),i=i.next}while(i!==r)}zn(e,t,n);break;case 1:if(!nt&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,t,a)}zn(e,t,n);break;case 21:zn(e,t,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,zn(e,t,n),nt=r):zn(e,t,n);break;default:zn(e,t,n)}}function Mh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hx),t.forEach(function(r){var i=Ex.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,qt=!1;break e;case 3:We=a.stateNode.containerInfo,qt=!0;break e;case 4:We=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(We===null)throw Error(M(160));gy(o,s,i),We=null,qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)my(t,e),t=t.sibling}function my(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),rn(e),r&4){try{Bo(3,e,e.return),Ll(3,e)}catch(b){_e(e,e.return,b)}try{Bo(5,e,e.return)}catch(b){_e(e,e.return,b)}}break;case 1:Ht(t,e),rn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(Ht(t,e),rn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{Qo(i,"")}catch(b){_e(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Dv(i,o),jc(a,s);var u=jc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Bv(i,d):c==="dangerouslySetInnerHTML"?Fv(i,d):c==="children"?Qo(i,d):tf(i,c,d,u)}switch(a){case"input":Nc(i,o);break;case"textarea":zv(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Ii(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ii(i,!!o.multiple,o.defaultValue,!0):Ii(i,!!o.multiple,o.multiple?[]:"",!1))}i[ss]=o}catch(b){_e(e,e.return,b)}}break;case 6:if(Ht(t,e),rn(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){_e(e,e.return,b)}}break;case 3:if(Ht(t,e),rn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ts(t.containerInfo)}catch(b){_e(e,e.return,b)}break;case 4:Ht(t,e),rn(e);break;case 13:Ht(t,e),rn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($f=Te())),r&4&&Mh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(u=nt)||c,Ht(t,e),nt=u):Ht(t,e),rn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(W=e,c=e.child;c!==null;){for(d=W=c;W!==null;){switch(h=W,v=h.child,h.tag){case 0:case 11:case 14:case 15:Bo(4,h,h.return);break;case 1:_i(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){_e(r,n,b)}}break;case 5:_i(h,h.return);break;case 22:if(h.memoizedState!==null){zh(d);continue}}v!==null?(v.return=h,W=v):zh(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Uv("display",s))}catch(b){_e(e,e.return,b)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){_e(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ht(t,e),rn(e),r&4&&Mh(e);break;case 21:break;default:Ht(t,e),rn(e)}}function rn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hy(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qo(i,""),r.flags&=-33);var o=$h(e);gd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=$h(e);hd(e,a,s);break;default:throw Error(M(161))}}catch(l){_e(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mx(e,t,n){W=e,vy(e)}function vy(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ra;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nt;a=ra;var u=nt;if(ra=s,(nt=l)&&!u)for(W=i;W!==null;)s=W,l=s.child,s.tag===22&&s.memoizedState!==null?jh(i):l!==null?(l.return=s,W=l):jh(i);for(;o!==null;)W=o,vy(o),o=o.sibling;W=i,ra=a,nt=u}Dh(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,W=o):Dh(e)}}function Dh(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||Ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ts(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}nt||t.flags&512&&pd(t)}catch(h){_e(t,t.return,h)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function zh(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function jh(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ll(4,t)}catch(l){_e(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){_e(t,i,l)}}var o=t.return;try{pd(t)}catch(l){_e(t,o,l)}break;case 5:var s=t.return;try{pd(t)}catch(l){_e(t,s,l)}}}catch(l){_e(t,t.return,l)}if(t===e){W=null;break}var a=t.sibling;if(a!==null){a.return=t.return,W=a;break}W=t.return}}var vx=Math.ceil,rl=Ln.ReactCurrentDispatcher,Lf=Ln.ReactCurrentOwner,$t=Ln.ReactCurrentBatchConfig,se=0,De=null,Ie=null,qe=0,bt=0,Ei=br(0),Le=0,fs=null,Br=0,Nl=0,Nf=0,Ho=null,pt=null,$f=0,Hi=1/0,yn=null,il=!1,md=null,nr=null,ia=!1,Gn=null,ol=0,Vo=0,vd=null,Ia=-1,Oa=0;function at(){return(se&6)!==0?Te():Ia!==-1?Ia:Ia=Te()}function rr(e){return(e.mode&1)===0?1:(se&2)!==0&&qe!==0?qe&-qe:ex.transition!==null?(Oa===0&&(Oa=e0()),Oa):(e=ue,e!==0||(e=window.event,e=e===void 0?16:a0(e.type)),e)}function Qt(e,t,n,r){if(50<Vo)throw Vo=0,vd=null,Error(M(185));Cs(e,n,r),((se&2)===0||e!==De)&&(e===De&&((se&2)===0&&(Nl|=n),Le===4&&Vn(e,qe)),vt(e,r),n===1&&se===0&&(t.mode&1)===0&&(Hi=Te()+500,Pl&&Sr()))}function vt(e,t){var n=e.callbackNode;eS(e,t);var r=Ba(e,e===De?qe:0);if(r===0)n!==null&&Kp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Kp(n),t===1)e.tag===0?ZS(Fh.bind(null,e)):T0(Fh.bind(null,e)),YS(function(){(se&6)===0&&Sr()}),n=null;else{switch(t0(r)){case 1:n=af;break;case 4:n=Jv;break;case 16:n=Ua;break;case 536870912:n=Zv;break;default:n=Ua}n=ky(n,yy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yy(e,t){if(Ia=-1,Oa=0,(se&6)!==0)throw Error(M(327));var n=e.callbackNode;if(Li()&&e.callbackNode!==n)return null;var r=Ba(e,e===De?qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=sl(e,r);else{t=r;var i=se;se|=2;var o=by();(De!==e||qe!==t)&&(yn=null,Hi=Te()+500,Ar(e,t));do try{bx();break}catch(a){wy(e,a)}while(1);bf(),rl.current=o,se=i,Ie!==null?t=0:(De=null,qe=0,t=Le)}if(t!==0){if(t===2&&(i=Vc(e),i!==0&&(r=i,t=yd(e,i))),t===1)throw n=fs,Ar(e,0),Vn(e,r),vt(e,Te()),n;if(t===6)Vn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!yx(i)&&(t=sl(e,r),t===2&&(o=Vc(e),o!==0&&(r=o,t=yd(e,o))),t===1))throw n=fs,Ar(e,0),Vn(e,r),vt(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:kr(e,pt,yn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(t=$f+500-Te(),10<t)){if(Ba(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jc(kr.bind(null,e,pt,yn),t);break}kr(e,pt,yn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Xt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vx(r/1960))-r,10<r){e.timeoutHandle=Jc(kr.bind(null,e,pt,yn),r);break}kr(e,pt,yn);break;case 5:kr(e,pt,yn);break;default:throw Error(M(329))}}}return vt(e,Te()),e.callbackNode===n?yy.bind(null,e):null}function yd(e,t){var n=Ho;return e.current.memoizedState.isDehydrated&&(Ar(e,t).flags|=256),e=sl(e,t),e!==2&&(t=pt,pt=n,t!==null&&wd(t)),e}function wd(e){pt===null?pt=e:pt.push.apply(pt,e)}function yx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~Nf,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xt(t),r=1<<n;e[n]=-1,t&=~r}}function Fh(e){if((se&6)!==0)throw Error(M(327));Li();var t=Ba(e,0);if((t&1)===0)return vt(e,Te()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Vc(e);r!==0&&(t=r,n=yd(e,r))}if(n===1)throw n=fs,Ar(e,0),Vn(e,t),vt(e,Te()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kr(e,pt,yn),vt(e,Te()),null}function Mf(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Hi=Te()+500,Pl&&Sr())}}function Hr(e){Gn!==null&&Gn.tag===0&&(se&6)===0&&Li();var t=se;se|=1;var n=$t.transition,r=ue;try{if($t.transition=null,ue=1,e)return e()}finally{ue=r,$t.transition=n,se=t,(se&6)===0&&Sr()}}function Df(){bt=Ei.current,me(Ei)}function Ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,KS(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(vf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:Ui(),me(gt),me(it),Tf();break;case 5:kf(r);break;case 4:Ui();break;case 13:me(be);break;case 19:me(be);break;case 10:Sf(r.type._context);break;case 22:case 23:Df()}n=n.return}if(De=e,Ie=e=ir(e.current,null),qe=bt=t,Le=0,fs=null,Nf=Nl=Br=0,pt=Ho=null,Ir!==null){for(t=0;t<Ir.length;t++)if(n=Ir[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ir=null}return e}function wy(e,t){do{var n=Ie;try{if(bf(),ka.current=nl,tl){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if(Ur=0,Me=Re=Se=null,Uo=!1,us=0,Lf.current=null,n===null||n.return===null){Le=1,fs=t,Ie=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Ch(s);if(v!==null){v.flags&=-257,Ih(v,s,a,o,t),v.mode&1&&Th(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(l),t.updateQueue=b}else y.add(l);break e}else{if((t&1)===0){Th(o,u,t),zf();break e}l=Error(M(426))}}else if(ve&&a.mode&1){var w=Ch(s);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Ih(w,s,a,o,t),yf(Bi(l,a));break e}}o=l=Bi(l,a),Le!==4&&(Le=2),Ho===null?Ho=[o]:Ho.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ny(o,l,t);wh(o,p);break e;case 1:a=l;var g=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nr===null||!nr.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=ry(o,a,t);wh(o,S);break e}}o=o.return}while(o!==null)}xy(n)}catch(k){t=k,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function by(){var e=rl.current;return rl.current=nl,e===null?nl:e}function zf(){(Le===0||Le===3||Le===2)&&(Le=4),De===null||(Br&268435455)===0&&(Nl&268435455)===0||Vn(De,qe)}function sl(e,t){var n=se;se|=2;var r=by();(De!==e||qe!==t)&&(yn=null,Ar(e,t));do try{wx();break}catch(i){wy(e,i)}while(1);if(bf(),se=n,rl.current=r,Ie!==null)throw Error(M(261));return De=null,qe=0,Le}function wx(){for(;Ie!==null;)Sy(Ie)}function bx(){for(;Ie!==null&&!Wb();)Sy(Ie)}function Sy(e){var t=Ey(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?xy(e):Ie=t,Lf.current=null}function xy(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=fx(n,t,bt),n!==null){Ie=n;return}}else{if(n=px(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Le===0&&(Le=5)}function kr(e,t,n){var r=ue,i=$t.transition;try{$t.transition=null,ue=1,Sx(e,t,n,r)}finally{$t.transition=i,ue=r}return null}function Sx(e,t,n,r){do Li();while(Gn!==null);if((se&6)!==0)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(tS(e,o),e===De&&(Ie=De=null,qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ia||(ia=!0,ky(Ua,function(){return Li(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=$t.transition,$t.transition=null;var s=ue;ue=1;var a=se;se|=4,Lf.current=null,gx(e,n),my(n,e),US(Xc),Ha=!!Yc,Xc=Yc=null,e.current=n,mx(n),Gb(),se=a,ue=s,$t.transition=o}else e.current=n;if(ia&&(ia=!1,Gn=e,ol=i),o=e.pendingLanes,o===0&&(nr=null),Yb(n.stateNode),vt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(il)throw il=!1,e=md,md=null,e;return(ol&1)!==0&&e.tag!==0&&Li(),o=e.pendingLanes,(o&1)!==0?e===vd?Vo++:(Vo=0,vd=e):Vo=0,Sr(),null}function Li(){if(Gn!==null){var e=t0(ol),t=$t.transition,n=ue;try{if($t.transition=null,ue=16>e?16:e,Gn===null)var r=!1;else{if(e=Gn,Gn=null,ol=0,(se&6)!==0)throw Error(M(331));var i=se;for(se|=4,W=e.current;W!==null;){var o=W,s=o.child;if((W.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(W=u;W!==null;){var c=W;switch(c.tag){case 0:case 11:case 15:Bo(8,c,o)}var d=c.child;if(d!==null)d.return=c,W=d;else for(;W!==null;){c=W;var h=c.sibling,v=c.return;if(py(c),c===u){W=null;break}if(h!==null){h.return=v,W=h;break}W=v}}}var y=o.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}W=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Bo(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,W=p;break e}W=o.return}}var g=e.current;for(W=g;W!==null;){s=W;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,W=m;else e:for(s=g;W!==null;){if(a=W,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(k){_e(a,a.return,k)}if(a===s){W=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,W=S;break e}W=a.return}}if(se=i,Sr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{ue=n,$t.transition=t}}return!1}function Uh(e,t,n){t=Bi(n,t),t=ny(e,t,1),e=tr(e,t,1),t=at(),e!==null&&(Cs(e,1,t),vt(e,t))}function _e(e,t,n){if(e.tag===3)Uh(e,e,n);else for(;t!==null;){if(t.tag===3){Uh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){e=Bi(n,e),e=ry(t,e,1),t=tr(t,e,1),e=at(),t!==null&&(Cs(t,1,e),vt(t,e));break}}t=t.return}}function xx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Te()-$f?Ar(e,0):Nf|=n),vt(e,t)}function _y(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ks,Ks<<=1,(Ks&130023424)===0&&(Ks=4194304)));var n=at();e=On(e,t),e!==null&&(Cs(e,t,n),vt(e,n))}function _x(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_y(e,n)}function Ex(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),_y(e,n)}var Ey;Ey=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)ht=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ht=!1,dx(e,t,n);ht=(e.flags&131072)!==0}else ht=!1,ve&&(t.flags&1048576)!==0&&C0(t,Xa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ca(e,t),e=t.pendingProps;var i=zi(t,it.current);Ai(t,n),i=If(null,t,r,e,i,n);var o=Of();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(o=!0,Ka(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_f(t),i.updater=Rl,t.stateNode=i,i._reactInternals=t,od(t,r,e,n),t=ld(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&mf(t),st(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ca(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Tx(r),e=Gt(r,e),i){case 0:t=ad(null,t,r,e,n);break e;case 1:t=Rh(null,t,r,e,n);break e;case 11:t=Oh(null,t,r,e,n);break e;case 14:t=Ph(null,t,r,Gt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),ad(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Rh(e,t,r,i,n);case 3:e:{if(ay(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,R0(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Bi(Error(M(423)),t),t=Ah(e,t,r,n,i);break e}else if(r!==i){i=Bi(Error(M(424)),t),t=Ah(e,t,r,n,i);break e}else for(_t=er(t.stateNode.containerInfo.firstChild),kt=t,ve=!0,Kt=null,n=$0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){t=Pn(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return M0(t),e===null&&nd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Qc(r,i)?s=null:o!==null&&Qc(r,o)&&(t.flags|=32),sy(e,t),st(e,t,s,n),t.child;case 6:return e===null&&nd(t),null;case 13:return ly(e,t,n);case 4:return Ef(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fi(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Oh(e,t,r,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,pe(Qa,r._currentValue),r._currentValue=s,o!==null)if(Zt(o.value,s)){if(o.children===i.children&&!gt.current){t=Pn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=En(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rd(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),rd(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ai(t,n),i=Mt(i),r=r(i),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,i=Gt(r,t.pendingProps),i=Gt(r.type,i),Ph(e,t,r,i,n);case 15:return iy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Ca(e,t),t.tag=1,mt(r)?(e=!0,Ka(t)):e=!1,Ai(t,n),L0(t,r,i),od(t,r,i,n),ld(null,t,r,!0,e,n);case 19:return uy(e,t,n);case 22:return oy(e,t,n)}throw Error(M(156,t.tag))};function ky(e,t){return Qv(e,t)}function kx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,r){return new kx(e,t,n,r)}function jf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tx(e){if(typeof e=="function")return jf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rf)return 11;if(e===of)return 14}return 2}function ir(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pa(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")jf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case hi:return Lr(n.children,i,o,t);case nf:s=8,i|=8;break;case Oc:return e=Lt(12,n,t,i|2),e.elementType=Oc,e.lanes=o,e;case Pc:return e=Lt(13,n,t,i),e.elementType=Pc,e.lanes=o,e;case Rc:return e=Lt(19,n,t,i),e.elementType=Rc,e.lanes=o,e;case Nv:return $l(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Av:s=10;break e;case Lv:s=9;break e;case rf:s=11;break e;case of:s=14;break e;case Un:s=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=Lt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Lr(e,t,n,r){return e=Lt(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=Lt(22,e,r,t),e.elementType=Nv,e.lanes=n,e.stateNode={isHidden:!1},e}function tc(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function nc(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mu(0),this.expirationTimes=Mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ff(e,t,n,r,i,o,s,a,l){return e=new Cx(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Lt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(o),e}function Ix(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ty(e){if(!e)return fr;e=e._reactInternals;e:{if(ti(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(mt(n))return k0(e,n,t)}return t}function Cy(e,t,n,r,i,o,s,a,l){return e=Ff(n,r,!0,e,i,o,s,a,l),e.context=Ty(null),n=e.current,r=at(),i=rr(n),o=En(r,i),o.callback=t!=null?t:null,tr(n,o,i),e.current.lanes=i,Cs(e,i,r),vt(e,r),e}function Ml(e,t,n,r){var i=t.current,o=at(),s=rr(i);return n=Ty(n),t.context===null?t.context=n:t.pendingContext=n,t=En(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tr(i,t,s),e!==null&&(Qt(e,i,s,o),Ea(e,i,s)),s}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uf(e,t){Bh(e,t),(e=e.alternate)&&Bh(e,t)}function Ox(){return null}var Iy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bf(e){this._internalRoot=e}Dl.prototype.render=Bf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ml(e,t,null,null)};Dl.prototype.unmount=Bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hr(function(){Ml(null,e,null,null)}),t[In]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=i0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&s0(e)}};function Hf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function Px(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=al(s);o.call(u)}}var s=Cy(t,r,e,0,null,!1,!1,"",Hh);return e._reactRootContainer=s,e[In]=s.current,is(e.nodeType===8?e.parentNode:e),Hr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=al(l);a.call(u)}}var l=Ff(e,0,!1,null,null,!1,!1,"",Hh);return e._reactRootContainer=l,e[In]=l.current,is(e.nodeType===8?e.parentNode:e),Hr(function(){Ml(t,l,n,r)}),l}function jl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=al(s);a.call(l)}}Ml(t,s,e,i)}else s=Px(n,t,e,i,r);return al(s)}n0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ao(t.pendingLanes);n!==0&&(lf(t,n|1),vt(t,Te()),(se&6)===0&&(Hi=Te()+500,Sr()))}break;case 13:Hr(function(){var r=On(e,1);if(r!==null){var i=at();Qt(r,e,1,i)}}),Uf(e,1)}};uf=function(e){if(e.tag===13){var t=On(e,134217728);if(t!==null){var n=at();Qt(t,e,134217728,n)}Uf(e,134217728)}};r0=function(e){if(e.tag===13){var t=rr(e),n=On(e,t);if(n!==null){var r=at();Qt(n,e,t,r)}Uf(e,t)}};i0=function(){return ue};o0=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};Uc=function(e,t,n){switch(t){case"input":if(Nc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ol(r);if(!i)throw Error(M(90));Mv(r),Nc(r,i)}}}break;case"textarea":zv(e,n);break;case"select":t=n.value,t!=null&&Ii(e,!!n.multiple,t,!1)}};Wv=Mf;Gv=Hr;var Rx={usingClientEntryPoint:!1,Events:[Os,yi,Ol,Hv,Vv,Mf]},mo={findFiberByHostInstance:Cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ax={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yv(e),e===null?null:e.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||Ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{kl=oa.inject(Ax),hn=oa}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(t))throw Error(M(200));return Ix(e,t,null,n)};Ct.createRoot=function(e,t){if(!Hf(e))throw Error(M(299));var n=!1,r="",i=Iy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ff(e,1,!1,null,null,n,!1,r,i),e[In]=t.current,is(e.nodeType===8?e.parentNode:e),new Bf(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Yv(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return Hr(e)};Ct.hydrate=function(e,t,n){if(!zl(t))throw Error(M(200));return jl(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!Hf(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Iy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Cy(t,null,e,1,n!=null?n:null,i,!1,o,s),e[In]=t.current,is(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Dl(t)};Ct.render=function(e,t,n){if(!zl(t))throw Error(M(200));return jl(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!zl(e))throw Error(M(40));return e._reactRootContainer?(Hr(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[In]=null})}),!0):!1};Ct.unstable_batchedUpdates=Mf;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return jl(e,t,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ct})(Jd);var Vh=Jd.exports;Cc.createRoot=Vh.createRoot,Cc.hydrateRoot=Vh.hydrateRoot;function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(this,arguments)}var Pr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pr||(Pr={}));var Wh=function(e){return e},Gh="beforeunload",Lx="popstate";function Nx(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var _=r.location,x=_.pathname,N=_.search,O=_.hash,R=i.state||{};return[R.idx,Wh({pathname:x,search:N,hash:O,state:R.usr||null,key:R.key||"default"})]}var s=null;function a(){if(s)v.call(s),s=null;else{var _=Pr.Pop,x=o(),N=x[0],O=x[1];if(v.length){if(N!=null){var R=c-N;R&&(s={action:_,location:O,retry:function(){k(R*-1)}},k(R))}}else g(_)}}r.addEventListener(Lx,a);var l=Pr.Pop,u=o(),c=u[0],d=u[1],h=Kh(),v=Kh();c==null&&(c=0,i.replaceState(ll({},i.state,{idx:c}),""));function y(_){return typeof _=="string"?_:Mx(_)}function b(_,x){return x===void 0&&(x=null),Wh(ll({pathname:d.pathname,hash:"",search:""},typeof _=="string"?Ji(_):_,{state:x,key:$x()}))}function w(_,x){return[{usr:_.state,key:_.key,idx:x},y(_)]}function p(_,x,N){return!v.length||(v.call({action:_,location:x,retry:N}),!1)}function g(_){l=_;var x=o();c=x[0],d=x[1],h.call({action:l,location:d})}function m(_,x){var N=Pr.Push,O=b(_,x);function R(){m(_,x)}if(p(N,O,R)){var z=w(O,c+1),K=z[0],E=z[1];try{i.pushState(K,"",E)}catch{r.location.assign(E)}g(N)}}function S(_,x){var N=Pr.Replace,O=b(_,x);function R(){S(_,x)}if(p(N,O,R)){var z=w(O,c),K=z[0],E=z[1];i.replaceState(K,"",E),g(N)}}function k(_){i.go(_)}var T={get action(){return l},get location(){return d},createHref:y,push:m,replace:S,go:k,back:function(){k(-1)},forward:function(){k(1)},listen:function(x){return h.push(x)},block:function(x){var N=v.push(x);return v.length===1&&r.addEventListener(Gh,qh),function(){N(),v.length||r.removeEventListener(Gh,qh)}}};return T}function qh(e){e.preventDefault(),e.returnValue=""}function Kh(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function $x(){return Math.random().toString(36).substr(2,8)}function Mx(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,s=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Ji(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Oy=C.exports.createContext(null),Vf=C.exports.createContext(null),Wf=C.exports.createContext({outlet:null,matches:[]});function Rn(e,t){if(!e)throw new Error(t)}function Dx(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ji(t):t,i=Ry(r.pathname||"/",n);if(i==null)return null;let o=Py(e);zx(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=qx(o[a],i);return s}function Py(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||Rn(!1),s.relativePath=s.relativePath.slice(r.length));let a=Nr([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&Rn(!1),Py(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:Wx(a,i.index),routesMeta:l})}),t}function zx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jx=/^:\w+$/,Fx=3,Ux=2,Bx=1,Hx=10,Vx=-2,Yh=e=>e==="*";function Wx(e,t){let n=e.split("/"),r=n.length;return n.some(Yh)&&(r+=Vx),t&&(r+=Ux),n.filter(i=>!Yh(i)).reduce((i,o)=>i+(jx.test(o)?Fx:o===""?Bx:Hx),r)}function Gx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Kx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:Nr([i,c.pathname]),pathnameBase:Ay(Nr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Nr([i,c.pathnameBase]))}return o}function Kx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Yx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=Xx(a[d]||""),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Yx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function Xx(e,t){try{return decodeURIComponent(e)}catch{return e}}function Qx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ji(e):e;return{pathname:n?n.startsWith("/")?n:Jx(n,t):t,search:e2(r),hash:t2(i)}}function Jx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zx(e,t,n){let r=typeof e=="string"?Ji(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}o=a>=0?t[a]:"/"}let s=Qx(r,o);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function Ry(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const Nr=e=>e.join("/").replace(/\/\/+/g,"/"),Ay=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),e2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,t2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fl(){return C.exports.useContext(Vf)!=null}function Gf(){return Fl()||Rn(!1),C.exports.useContext(Vf).location}function Rs(){Fl()||Rn(!1);let{basename:e,navigator:t}=C.exports.useContext(Oy),{matches:n}=C.exports.useContext(Wf),{pathname:r}=Gf(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=C.exports.useRef(!1);return C.exports.useEffect(()=>{o.current=!0}),C.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Zx(a,JSON.parse(i),r);e!=="/"&&(u.pathname=Nr([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state)},[e,t,i,r])}function n2(e,t){Fl()||Rn(!1);let{matches:n}=C.exports.useContext(Wf),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let s=Gf(),a;if(t){var l;let h=typeof t=="string"?Ji(t):t;o==="/"||((l=h.pathname)==null?void 0:l.startsWith(o))||Rn(!1),a=h}else a=s;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",d=Dx(e,{pathname:c});return r2(d&&d.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:Nr([o,h.pathname]),pathnameBase:h.pathnameBase==="/"?o:Nr([o,h.pathnameBase])})),n)}function r2(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>C.exports.createElement(Wf.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function fi(e){Rn(!1)}function i2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pr.Pop,navigator:o,static:s=!1}=e;Fl()&&Rn(!1);let a=Ay(t),l=C.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Ji(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:v="default"}=r,y=C.exports.useMemo(()=>{let b=Ry(u,a);return b==null?null:{pathname:b,search:c,hash:d,state:h,key:v}},[a,u,c,d,h,v]);return y==null?null:C.exports.createElement(Oy.Provider,{value:l},C.exports.createElement(Vf.Provider,{children:n,value:{location:y,navigationType:i}}))}function o2(e){let{children:t,location:n}=e;return n2(bd(t),n)}function bd(e){let t=[];return C.exports.Children.forEach(e,n=>{if(!C.exports.isValidElement(n))return;if(n.type===C.exports.Fragment){t.push.apply(t,bd(n.props.children));return}n.type!==fi&&Rn(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=bd(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function s2(e){let{basename:t,children:n,window:r}=e,i=C.exports.useRef();i.current==null&&(i.current=Nx({window:r}));let o=i.current,[s,a]=C.exports.useState({action:o.action,location:o.location});return C.exports.useLayoutEffect(()=>o.listen(a),[o]),C.exports.createElement(i2,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var qf={exports:{}},ce={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=Symbol.for("react.element"),Yf=Symbol.for("react.portal"),Ul=Symbol.for("react.fragment"),Bl=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),Vl=Symbol.for("react.provider"),Wl=Symbol.for("react.context"),a2=Symbol.for("react.server_context"),Gl=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),Xl=Symbol.for("react.lazy"),l2=Symbol.for("react.offscreen"),Ly;Ly=Symbol.for("react.module.reference");function jt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kf:switch(e=e.type,e){case Ul:case Hl:case Bl:case ql:case Kl:return e;default:switch(e=e&&e.$$typeof,e){case a2:case Wl:case Gl:case Xl:case Yl:case Vl:return e;default:return t}}case Yf:return t}}}ce.ContextConsumer=Wl;ce.ContextProvider=Vl;ce.Element=Kf;ce.ForwardRef=Gl;ce.Fragment=Ul;ce.Lazy=Xl;ce.Memo=Yl;ce.Portal=Yf;ce.Profiler=Hl;ce.StrictMode=Bl;ce.Suspense=ql;ce.SuspenseList=Kl;ce.isAsyncMode=function(){return!1};ce.isConcurrentMode=function(){return!1};ce.isContextConsumer=function(e){return jt(e)===Wl};ce.isContextProvider=function(e){return jt(e)===Vl};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kf};ce.isForwardRef=function(e){return jt(e)===Gl};ce.isFragment=function(e){return jt(e)===Ul};ce.isLazy=function(e){return jt(e)===Xl};ce.isMemo=function(e){return jt(e)===Yl};ce.isPortal=function(e){return jt(e)===Yf};ce.isProfiler=function(e){return jt(e)===Hl};ce.isStrictMode=function(e){return jt(e)===Bl};ce.isSuspense=function(e){return jt(e)===ql};ce.isSuspenseList=function(e){return jt(e)===Kl};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ul||e===Hl||e===Bl||e===ql||e===Kl||e===l2||typeof e=="object"&&e!==null&&(e.$$typeof===Xl||e.$$typeof===Yl||e.$$typeof===Vl||e.$$typeof===Wl||e.$$typeof===Gl||e.$$typeof===Ly||e.getModuleId!==void 0)};ce.typeOf=jt;(function(e){e.exports=ce})(qf);function u2(e){function t(j,H,B,Y,I){for(var ee=0,U=0,he=0,ie=0,ne,Q,Ce=0,Be=0,ae,Je=ae=ne=0,le=0,He=0,so=0,Ve=0,Bs=B.length,ao=Bs-1,Bt,J="",ke="",Ou="",Pu="",Dn;le<Bs;){if(Q=B.charCodeAt(le),le===ao&&U+ie+he+ee!==0&&(U!==0&&(Q=U===47?10:47),ie=he=ee=0,Bs++,ao++),U+ie+he+ee===0){if(le===ao&&(0<He&&(J=J.replace(h,"")),0<J.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:J+=B.charAt(le)}Q=59}switch(Q){case 123:for(J=J.trim(),ne=J.charCodeAt(0),ae=1,Ve=++le;le<Bs;){switch(Q=B.charCodeAt(le)){case 123:ae++;break;case 125:ae--;break;case 47:switch(Q=B.charCodeAt(le+1)){case 42:case 47:e:{for(Je=le+1;Je<ao;++Je)switch(B.charCodeAt(Je)){case 47:if(Q===42&&B.charCodeAt(Je-1)===42&&le+2!==Je){le=Je+1;break e}break;case 10:if(Q===47){le=Je+1;break e}}le=Je}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;le++<ao&&B.charCodeAt(le)!==Q;);}if(ae===0)break;le++}switch(ae=B.substring(Ve,le),ne===0&&(ne=(J=J.replace(d,"").trim()).charCodeAt(0)),ne){case 64:switch(0<He&&(J=J.replace(h,"")),Q=J.charCodeAt(1),Q){case 100:case 109:case 115:case 45:He=H;break;default:He=G}if(ae=t(H,He,ae,Q,I+1),Ve=ae.length,0<L&&(He=n(G,J,so),Dn=a(3,ae,He,H,K,z,Ve,Q,I,Y),J=He.join(""),Dn!==void 0&&(Ve=(ae=Dn.trim()).length)===0&&(Q=0,ae="")),0<Ve)switch(Q){case 115:J=J.replace(T,s);case 100:case 109:case 45:ae=J+"{"+ae+"}";break;case 107:J=J.replace(g,"$1 $2"),ae=J+"{"+ae+"}",ae=A===1||A===2&&o("@"+ae,3)?"@-webkit-"+ae+"@"+ae:"@"+ae;break;default:ae=J+ae,Y===112&&(ae=(ke+=ae,""))}else ae="";break;default:ae=t(H,n(H,J,so),ae,Y,I+1)}Ou+=ae,ae=so=He=Je=ne=0,J="",Q=B.charCodeAt(++le);break;case 125:case 59:if(J=(0<He?J.replace(h,""):J).trim(),1<(Ve=J.length))switch(Je===0&&(ne=J.charCodeAt(0),ne===45||96<ne&&123>ne)&&(Ve=(J=J.replace(" ",":")).length),0<L&&(Dn=a(1,J,H,j,K,z,ke.length,Y,I,Y))!==void 0&&(Ve=(J=Dn.trim()).length)===0&&(J="\0\0"),ne=J.charCodeAt(0),Q=J.charCodeAt(1),ne){case 0:break;case 64:if(Q===105||Q===99){Pu+=J+B.charAt(le);break}default:J.charCodeAt(Ve-1)!==58&&(ke+=i(J,ne,Q,J.charCodeAt(2)))}so=He=Je=ne=0,J="",Q=B.charCodeAt(++le)}}switch(Q){case 13:case 10:U===47?U=0:1+ne===0&&Y!==107&&0<J.length&&(He=1,J+="\0"),0<L*q&&a(0,J,H,j,K,z,ke.length,Y,I,Y),z=1,K++;break;case 59:case 125:if(U+ie+he+ee===0){z++;break}default:switch(z++,Bt=B.charAt(le),Q){case 9:case 32:if(ie+ee+U===0)switch(Ce){case 44:case 58:case 9:case 32:Bt="";break;default:Q!==32&&(Bt=" ")}break;case 0:Bt="\\0";break;case 12:Bt="\\f";break;case 11:Bt="\\v";break;case 38:ie+U+ee===0&&(He=so=1,Bt="\f"+Bt);break;case 108:if(ie+U+ee+E===0&&0<Je)switch(le-Je){case 2:Ce===112&&B.charCodeAt(le-3)===58&&(E=Ce);case 8:Be===111&&(E=Be)}break;case 58:ie+U+ee===0&&(Je=le);break;case 44:U+he+ie+ee===0&&(He=1,Bt+="\r");break;case 34:case 39:U===0&&(ie=ie===Q?0:ie===0?Q:ie);break;case 91:ie+U+he===0&&ee++;break;case 93:ie+U+he===0&&ee--;break;case 41:ie+U+ee===0&&he--;break;case 40:if(ie+U+ee===0){if(ne===0)switch(2*Ce+3*Be){case 533:break;default:ne=1}he++}break;case 64:U+he+ie+ee+Je+ae===0&&(ae=1);break;case 42:case 47:if(!(0<ie+ee+he))switch(U){case 0:switch(2*Q+3*B.charCodeAt(le+1)){case 235:U=47;break;case 220:Ve=le,U=42}break;case 42:Q===47&&Ce===42&&Ve+2!==le&&(B.charCodeAt(Ve+2)===33&&(ke+=B.substring(Ve,le+1)),Bt="",U=0)}}U===0&&(J+=Bt)}Be=Ce,Ce=Q,le++}if(Ve=ke.length,0<Ve){if(He=H,0<L&&(Dn=a(2,ke,He,j,K,z,Ve,Y,I,Y),Dn!==void 0&&(ke=Dn).length===0))return Pu+ke+Ou;if(ke=He.join(",")+"{"+ke+"}",A*E!==0){switch(A!==2||o(ke,2)||(E=0),E){case 111:ke=ke.replace(S,":-moz-$1")+ke;break;case 112:ke=ke.replace(m,"::-webkit-input-$1")+ke.replace(m,"::-moz-$1")+ke.replace(m,":-ms-input-$1")+ke}E=0}}return Pu+ke+Ou}function n(j,H,B){var Y=H.trim().split(w);H=Y;var I=Y.length,ee=j.length;switch(ee){case 0:case 1:var U=0;for(j=ee===0?"":j[0]+" ";U<I;++U)H[U]=r(j,H[U],B).trim();break;default:var he=U=0;for(H=[];U<I;++U)for(var ie=0;ie<ee;++ie)H[he++]=r(j[ie]+" ",Y[U],B).trim()}return H}function r(j,H,B){var Y=H.charCodeAt(0);switch(33>Y&&(Y=(H=H.trim()).charCodeAt(0)),Y){case 38:return H.replace(p,"$1"+j.trim());case 58:return j.trim()+H.replace(p,"$1"+j.trim());default:if(0<1*B&&0<H.indexOf("\f"))return H.replace(p,(j.charCodeAt(0)===58?"":"$1")+j.trim())}return j+H}function i(j,H,B,Y){var I=j+";",ee=2*H+3*B+4*Y;if(ee===944){j=I.indexOf(":",9)+1;var U=I.substring(j,I.length-1).trim();return U=I.substring(0,j).trim()+U+";",A===1||A===2&&o(U,1)?"-webkit-"+U+U:U}if(A===0||A===2&&!o(I,1))return I;switch(ee){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(R,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return U=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+U+"-webkit-"+I+"-ms-flex-pack"+U+I;case 1005:return y.test(I)?I.replace(v,":-webkit-")+I.replace(v,":-moz-")+I:I;case 1e3:switch(U=I.substring(13).trim(),H=U.indexOf("-")+1,U.charCodeAt(0)+U.charCodeAt(H)){case 226:U=I.replace(k,"tb");break;case 232:U=I.replace(k,"tb-rl");break;case 220:U=I.replace(k,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+U+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(H=(I=j).length-10,U=(I.charCodeAt(H)===33?I.substring(0,H):I).substring(j.indexOf(":",7)+1).trim(),ee=U.charCodeAt(0)+(U.charCodeAt(7)|0)){case 203:if(111>U.charCodeAt(8))break;case 115:I=I.replace(U,"-webkit-"+U)+";"+I;break;case 207:case 102:I=I.replace(U,"-webkit-"+(102<ee?"inline-":"")+"box")+";"+I.replace(U,"-webkit-"+U)+";"+I.replace(U,"-ms-"+U+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return U=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+U+"-ms-flex-"+U+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(x,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(x,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(O.test(j)===!0)return(U=j.substring(j.indexOf(":")+1)).charCodeAt(0)===115?i(j.replace("stretch","fill-available"),H,B,Y).replace(":fill-available",":stretch"):I.replace(U,"-webkit-"+U)+I.replace(U,"-moz-"+U.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,B+Y===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+I}return I}function o(j,H){var B=j.indexOf(H===1?":":"{"),Y=j.substring(0,H!==3?B:10);return B=j.substring(B+1,j.length-1),$(H!==2?Y:Y.replace(N,"$1"),B,H)}function s(j,H){var B=i(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return B!==H+";"?B.replace(_," or ($1)").substring(4):"("+H+")"}function a(j,H,B,Y,I,ee,U,he,ie,ne){for(var Q=0,Ce=H,Be;Q<L;++Q)switch(Be=X[Q].call(c,j,Ce,B,Y,I,ee,U,he,ie,ne)){case void 0:case!1:case!0:case null:break;default:Ce=Be}if(Ce!==H)return Ce}function l(j){switch(j){case void 0:case null:L=X.length=0;break;default:if(typeof j=="function")X[L++]=j;else if(typeof j=="object")for(var H=0,B=j.length;H<B;++H)l(j[H]);else q=!!j|0}return l}function u(j){return j=j.prefix,j!==void 0&&($=null,j?typeof j!="function"?A=1:(A=2,$=j):A=0),u}function c(j,H){var B=j;if(33>B.charCodeAt(0)&&(B=B.trim()),Z=B,B=[Z],0<L){var Y=a(-1,H,B,B,K,z,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(H=Y)}var I=t(G,B,H,0,0);return 0<L&&(Y=a(-2,I,B,B,K,z,I.length,0,0,0),Y!==void 0&&(I=Y)),Z="",E=0,z=K=1,I}var d=/^\0+/g,h=/[\0\r\f]/g,v=/: */g,y=/zoo|gra/,b=/([,: ])(transform)/g,w=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,S=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,x=/-self|flex-/g,N=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,R=/([^-])(image-set\()/,z=1,K=1,E=0,A=1,G=[],X=[],L=0,$=null,q=0,Z="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var c2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function d2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var f2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Xh=d2(function(e){return f2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ny={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Xf=je?Symbol.for("react.element"):60103,Qf=je?Symbol.for("react.portal"):60106,Ql=je?Symbol.for("react.fragment"):60107,Jl=je?Symbol.for("react.strict_mode"):60108,Zl=je?Symbol.for("react.profiler"):60114,eu=je?Symbol.for("react.provider"):60109,tu=je?Symbol.for("react.context"):60110,Jf=je?Symbol.for("react.async_mode"):60111,nu=je?Symbol.for("react.concurrent_mode"):60111,ru=je?Symbol.for("react.forward_ref"):60112,iu=je?Symbol.for("react.suspense"):60113,p2=je?Symbol.for("react.suspense_list"):60120,ou=je?Symbol.for("react.memo"):60115,su=je?Symbol.for("react.lazy"):60116,h2=je?Symbol.for("react.block"):60121,g2=je?Symbol.for("react.fundamental"):60117,m2=je?Symbol.for("react.responder"):60118,v2=je?Symbol.for("react.scope"):60119;function Ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xf:switch(e=e.type,e){case Jf:case nu:case Ql:case Zl:case Jl:case iu:return e;default:switch(e=e&&e.$$typeof,e){case tu:case ru:case su:case ou:case eu:return e;default:return t}}case Qf:return t}}}function $y(e){return Ot(e)===nu}de.AsyncMode=Jf;de.ConcurrentMode=nu;de.ContextConsumer=tu;de.ContextProvider=eu;de.Element=Xf;de.ForwardRef=ru;de.Fragment=Ql;de.Lazy=su;de.Memo=ou;de.Portal=Qf;de.Profiler=Zl;de.StrictMode=Jl;de.Suspense=iu;de.isAsyncMode=function(e){return $y(e)||Ot(e)===Jf};de.isConcurrentMode=$y;de.isContextConsumer=function(e){return Ot(e)===tu};de.isContextProvider=function(e){return Ot(e)===eu};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xf};de.isForwardRef=function(e){return Ot(e)===ru};de.isFragment=function(e){return Ot(e)===Ql};de.isLazy=function(e){return Ot(e)===su};de.isMemo=function(e){return Ot(e)===ou};de.isPortal=function(e){return Ot(e)===Qf};de.isProfiler=function(e){return Ot(e)===Zl};de.isStrictMode=function(e){return Ot(e)===Jl};de.isSuspense=function(e){return Ot(e)===iu};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ql||e===nu||e===Zl||e===Jl||e===iu||e===p2||typeof e=="object"&&e!==null&&(e.$$typeof===su||e.$$typeof===ou||e.$$typeof===eu||e.$$typeof===tu||e.$$typeof===ru||e.$$typeof===g2||e.$$typeof===m2||e.$$typeof===v2||e.$$typeof===h2)};de.typeOf=Ot;(function(e){e.exports=de})(Ny);var Zf=Ny.exports,y2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},b2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},My={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ep={};ep[Zf.ForwardRef]=b2;ep[Zf.Memo]=My;function Qh(e){return Zf.isMemo(e)?My:ep[e.$$typeof]||y2}var S2=Object.defineProperty,x2=Object.getOwnPropertyNames,Jh=Object.getOwnPropertySymbols,_2=Object.getOwnPropertyDescriptor,E2=Object.getPrototypeOf,Zh=Object.prototype;function Dy(e,t,n){if(typeof t!="string"){if(Zh){var r=E2(t);r&&r!==Zh&&Dy(e,r,n)}var i=x2(t);Jh&&(i=i.concat(Jh(t)));for(var o=Qh(e),s=Qh(t),a=0;a<i.length;++a){var l=i[a];if(!w2[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=_2(t,l);try{S2(e,l,u)}catch{}}}}return e}var k2=Dy;function Yt(){return(Yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var eg=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Sd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!qf.exports.typeOf(e)},ul=Object.freeze([]),or=Object.freeze({});function Vi(e){return typeof e=="function"}function tg(e){return e.displayName||e.name||"Component"}function tp(e){return e&&typeof e.styledComponentId=="string"}var Wi=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",np=typeof window<"u"&&"HTMLElement"in window,T2=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),C2={};function Vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var I2=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Vr(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Ra=new Map,cl=new Map,Wo=1,sa=function(e){if(Ra.has(e))return Ra.get(e);for(;cl.has(Wo);)Wo++;var t=Wo++;return Ra.set(e,t),cl.set(t,e),t},O2=function(e){return cl.get(e)},P2=function(e,t){t>=Wo&&(Wo=t+1),Ra.set(e,t),cl.set(t,e)},R2="style["+Wi+'][data-styled-version="5.3.5"]',A2=new RegExp("^"+Wi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L2=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},N2=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(A2);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(P2(u,l),L2(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},$2=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},zy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Wi))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Wi,"active"),r.setAttribute("data-styled-version","5.3.5");var s=$2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},M2=function(){function e(n){var r=this.element=zy(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}Vr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),D2=function(){function e(n){var r=this.element=zy(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),z2=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ng=np,j2={isServer:!np,useCSSOMInjection:!T2},dl=function(){function e(n,r,i){n===void 0&&(n=or),r===void 0&&(r={}),this.options=Yt({},j2,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&np&&ng&&(ng=!1,function(o){for(var s=document.querySelectorAll(R2),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Wi)!=="active"&&(N2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return sa(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Yt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new z2(s):o?new M2(s):new D2(s),new I2(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(sa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(sa(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(sa(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=O2(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var c=Wi+".g"+s+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),F2=/(a)(d)/gi,rg=function(e){return String.fromCharCode(e+(e>25?39:97))};function xd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rg(t%52)+n;return(rg(t%52)+n).replace(F2,"$1-$2")}var ki=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jy=function(e){return ki(5381,e)};function Fy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vi(n)&&!tp(n))return!1}return!0}var U2=jy("5.3.5"),B2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Fy(t),this.componentId=n,this.baseHash=ki(U2,n),this.baseStyle=r,dl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=Wr(this.rules,t,n,r).join(""),a=xd(ki(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=ki(this.baseHash,r.hash),d="",h=0;h<u;h++){var v=this.rules[h];if(typeof v=="string")d+=v;else if(v){var y=Wr(v,t,n,r),b=Array.isArray(y)?y.join(""):y;c=ki(c,b+h),d+=b}}if(d){var w=xd(c>>>0);if(!n.hasNameForId(i,w)){var p=r(d,"."+w,void 0,i);n.insertRules(i,w,p)}o.push(w)}}return o.join(" ")},e}(),H2=/^\s*\/\/.*$/gm,V2=[":","[",".","#"];function W2(e){var t,n,r,i,o=e===void 0?or:e,s=o.options,a=s===void 0?or:s,l=o.plugins,u=l===void 0?ul:l,c=new u2(a),d=[],h=function(b){function w(p){if(p)try{b(p+"}")}catch{}}return function(p,g,m,S,k,T,_,x,N,O){switch(p){case 1:if(N===0&&g.charCodeAt(0)===64)return b(g+";"),"";break;case 2:if(x===0)return g+"/*|*/";break;case 3:switch(x){case 102:case 112:return b(m[0]+g),"";default:return g+(O===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(w)}}}(function(b){d.push(b)}),v=function(b,w,p){return w===0&&V2.indexOf(p[n.length])!==-1||p.match(i)?b:"."+t};function y(b,w,p,g){g===void 0&&(g="&");var m=b.replace(H2,""),S=w&&p?p+" "+w+" { "+m+" }":m;return t=g,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!w?"":w,S)}return c.use([].concat(u,[function(b,w,p){b===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,v))},h,function(b){if(b===-2){var w=d;return d=[],w}}])),y.hash=u.length?u.reduce(function(b,w){return w.name||Vr(15),ki(b,w.name)},5381).toString():"",y}var Uy=Ne.createContext();Uy.Consumer;var By=Ne.createContext(),G2=(By.Consumer,new dl),_d=W2();function Hy(){return C.exports.useContext(Uy)||G2}function Vy(){return C.exports.useContext(By)||_d}var Wy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=_d);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Vr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=_d),this.name+t.hash},e}(),q2=/([A-Z])/,K2=/([A-Z])/g,Y2=/^ms-/,X2=function(e){return"-"+e.toLowerCase()};function ig(e){return q2.test(e)?e.replace(K2,X2).replace(Y2,"-ms-"):e}var og=function(e){return e==null||e===!1||e===""};function Wr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=Wr(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(og(e))return"";if(tp(e))return"."+e.styledComponentId;if(Vi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Wr(l,t,n,r)}var u;return e instanceof Wy?n?(e.inject(n,r),e.getName(r)):e:Sd(e)?function c(d,h){var v,y,b=[];for(var w in d)d.hasOwnProperty(w)&&!og(d[w])&&(Array.isArray(d[w])&&d[w].isCss||Vi(d[w])?b.push(ig(w)+":",d[w],";"):Sd(d[w])?b.push.apply(b,c(d[w],w)):b.push(ig(w)+": "+(v=w,(y=d[w])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||v in c2?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(b,["}"]):b}(e):e.toString()}var sg=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Vi(e)||Sd(e)?sg(Wr(eg(ul,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:sg(Wr(eg(e,n)))}var Gy=function(e,t,n){return n===void 0&&(n=or),e.theme!==n.theme&&e.theme||t||n.theme},Q2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J2=/(^-|-$)/g;function rc(e){return e.replace(Q2,"-").replace(J2,"")}var rp=function(e){return xd(jy(e)>>>0)};function aa(e){return typeof e=="string"&&!0}var Ed=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Z2=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function e_(e,t,n){var r=e[n];Ed(t)&&Ed(r)?qy(r,t):e[n]=t}function qy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Ed(s))for(var a in s)Z2(a)&&e_(e,s[a],a)}return e}var ps=Ne.createContext();ps.Consumer;function t_(e){var t=C.exports.useContext(ps),n=C.exports.useMemo(function(){return function(r,i){if(!r)return Vr(14);if(Vi(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Vr(8):i?Yt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Ne.createElement(ps.Provider,{value:n},e.children):null}var ic={};function Ky(e,t,n){var r=tp(e),i=!aa(e),o=t.attrs,s=o===void 0?ul:o,a=t.componentId,l=a===void 0?function(g,m){var S=typeof g!="string"?"sc":rc(g);ic[S]=(ic[S]||0)+1;var k=S+"-"+rp("5.3.5"+S+ic[S]);return m?m+"-"+k:k}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(g){return aa(g)?"styled."+g:"Styled("+tg(g)+")"}(e):u,d=t.displayName&&t.componentId?rc(t.displayName)+"-"+t.componentId:t.componentId||l,h=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(g,m,S){return e.shouldForwardProp(g,m,S)&&t.shouldForwardProp(g,m,S)}:e.shouldForwardProp);var y,b=new B2(n,d,r?e.componentStyle:void 0),w=b.isStatic&&s.length===0,p=function(g,m){return function(S,k,T,_){var x=S.attrs,N=S.componentStyle,O=S.defaultProps,R=S.foldedComponentIds,z=S.shouldForwardProp,K=S.styledComponentId,E=S.target,A=function(Y,I,ee){Y===void 0&&(Y=or);var U=Yt({},I,{theme:Y}),he={};return ee.forEach(function(ie){var ne,Q,Ce,Be=ie;for(ne in Vi(Be)&&(Be=Be(U)),Be)U[ne]=he[ne]=ne==="className"?(Q=he[ne],Ce=Be[ne],Q&&Ce?Q+" "+Ce:Q||Ce):Be[ne]}),[U,he]}(Gy(k,C.exports.useContext(ps),O)||or,k,x),G=A[0],X=A[1],L=function(Y,I,ee,U){var he=Hy(),ie=Vy(),ne=I?Y.generateAndInjectStyles(or,he,ie):Y.generateAndInjectStyles(ee,he,ie);return ne}(N,_,G),$=T,q=X.$as||k.$as||X.as||k.as||E,Z=aa(q),j=X!==k?Yt({},k,{},X):k,H={};for(var B in j)B[0]!=="$"&&B!=="as"&&(B==="forwardedAs"?H.as=j[B]:(z?z(B,Xh,q):!Z||Xh(B))&&(H[B]=j[B]));return k.style&&X.style!==k.style&&(H.style=Yt({},k.style,{},X.style)),H.className=Array.prototype.concat(R,K,L!==K?L:null,k.className,X.className).filter(Boolean).join(" "),H.ref=$,C.exports.createElement(q,H)}(y,g,m,w)};return p.displayName=c,(y=Ne.forwardRef(p)).attrs=h,y.componentStyle=b,y.displayName=c,y.shouldForwardProp=v,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ul,y.styledComponentId=d,y.target=r?e.target:e,y.withComponent=function(g){var m=t.componentId,S=function(T,_){if(T==null)return{};var x,N,O={},R=Object.keys(T);for(N=0;N<R.length;N++)x=R[N],_.indexOf(x)>=0||(O[x]=T[x]);return O}(t,["componentId"]),k=m&&m+"-"+(aa(g)?g:rc(tg(g)));return Ky(g,Yt({},S,{attrs:h,componentId:k}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?qy({},e.defaultProps,g):g}}),y.toString=function(){return"."+y.styledComponentId},i&&k2(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var kd=function(e){return function t(n,r,i){if(i===void 0&&(i=or),!qf.exports.isValidElementType(r))return Vr(1,String(r));var o=function(){return n(r,i,Ee.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Yt({},i,{},s))},o.attrs=function(s){return t(n,r,Yt({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(Ky,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){kd[e]=kd(e)});var n_=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Fy(n),dl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(Wr(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&dl.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function r_(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ee.apply(void 0,[e].concat(n)),o="sc-global-"+rp(JSON.stringify(i)),s=new n_(i,o);function a(u){var c=Hy(),d=Vy(),h=C.exports.useContext(ps),v=C.exports.useRef(c.allocateGSInstance(o)).current;return c.server&&l(v,u,c,h,d),C.exports.useLayoutEffect(function(){if(!c.server)return l(v,u,c,h,d),function(){return s.removeStyles(v,c)}},[v,u,c,h,d]),null}function l(u,c,d,h,v){if(s.isStatic)s.renderStyles(u,C2,d,v);else{var y=Yt({},c,{theme:Gy(c,h,a.defaultProps)});s.renderStyles(u,y,d,v)}}return Ne.memo(a)}function As(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ee.apply(void 0,[e].concat(n)).join(""),o=rp(i);return new Wy(o,i)}const F=kd;const ni=Ee`
    padding: 0 15px;

    @media (min-width: 768px) {
        max-width: 750px;
        margin: auto;
    }

    @media (min-width: 1024px) {
        max-width: 980px;
    }

    
    @media (min-width: 1200px) {
        max-width: 1200px; 
    }

    @media (min-width: 1400px) {
            max-width: 1350px;
    }
`,i_=Ee`
    padding-bottom: 5px;

    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
        border: 3px solid white;
        border-radius: 20px;

        &:hover {
            background: hsl(0, 0%, 80%);
        }
    }
    &:hover::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 90%);
    }
`,o_=r_`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        font-family: "Sora", sans-serif;
        overscroll-behavior: contain;

        @media (min-width: 768px) {
            font-size: 17px;
        }

        @media (min-width: 1400px) {
            font-size: 18px;
        }
    }

    a { text-decoration: none; }

    li { list-style: none; }

    button { 
        background: none;
        font: inherit;
        border: none;
        cursor: pointer;
     }

     img, button, a { display: block; }

    span { display: inline-block; }

    input {
        display: block;
        width: 100%;
        font: inherit;
    }

    input::placeholder { font: inherit; }

   
    body { background: hsl(0, 100%, 100%); }



    
/**scrollbar style**/

body::-webkit-scrollbar { width: 15px; }

body::-webkit-scrollbar-track {
  background: var(--white);
  border-left: 1px solid hsl(0, 0%, 93%);
}

body::-webkit-scrollbar-thumb {
  background: hsl(0, 0%, 80%);
  border: 3px solid hsl(0, 100%, 100%);
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover { background: hsl(0, 0%, 70%); }

`,s_={spanishGray:"hsl(0, 0%, 60%)",sandyBrown:"hsl(29, 90%, 65%)",oceanGreen:"hsl(152, 51%, 52%)",sonicSilver:"hsl(0, 0%, 47%)",cultured:"hsl(0, 0%, 83%)",white:"hsl(0, 100%, 100%)",onyx:"hsl(0, 0%, 27%)",eerieBlack:"hsl(0, 0%, 10%)",primary:"#a435f0",primaryDark:"#8710d8",primaryLight:"#c47df5",font5xs:" 0.625rem",font4xs:"0.688rem",font3xs:"0.75rem",font2xs:"0.813rem",fontxs:"0.875rem",fontsm:"0.938rem",fontmd:"1rem",fontlg:"1.125rem",fontxl:"1.25rem",font2xl:"1.375rem",font3xl:"1.563rem",font4xl:" 1.875rem",headerCtaHeight:"3rem",headerMainHeight:"6rem",borderRadiusMd:"10px",borderRadiusSm:"5px",transitionTiming:"0.2s ease"};function sr(e){return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function tn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ft(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ag(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ut(e,t,n){return t&&ag(e.prototype,t),n&&ag(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var a_=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230);/g,l_={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xA9","&#169;":"\xA9","&reg;":"\xAE","&#174;":"\xAE","&hellip;":"\u2026","&#8230;":"\u2026"},u_=function(t){return l_[t]},c_=function(t){return t.replace(a_,u_)};function lg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ug(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lg(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Td={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:c_},Yy,d_=C.exports.createContext();function f_(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Td=ug(ug({},Td),e)}function p_(){return Td}var h_=function(){function e(){Ft(this,e),this.usedNamespaces={}}return Ut(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function g_(e){Yy=e}function m_(){return Yy}var v_={type:"3rdParty",init:function(t){f_(t.options.react),g_(t)}};function y_(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var cg={};function Cd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&cg[t[0]]||(typeof t[0]=="string"&&(cg[t[0]]=new Date),y_.apply(void 0,t))}function dg(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function w_(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var s=function(l,u){var c=t.services.backendConnector.state["".concat(l,"|").concat(u)];return c===-1||c===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!i||s(o,e)))}function b_(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Cd("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(o,s){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!s(o.isLanguageChangingTo,e))return!1}}):w_(e,t,n)}function Xy(e){if(Array.isArray(e))return e}function S_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function fg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qy(e,t){if(!!e){if(typeof e=="string")return fg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fg(e,t)}}function Jy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x_(e,t){return Xy(e)||S_(e,t)||Qy(e,t)||Jy()}function pg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function oc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pg(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var __=function(t,n){var r=C.exports.useRef();return C.exports.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function nn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=C.exports.useContext(d_)||{},i=r.i18n,o=r.defaultNS,s=n||i||m_();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new h_),!s){Cd("You will need to pass in an i18next instance by using initReactI18next");var a=function(N){return Array.isArray(N)?N[N.length-1]:N},l=[a,{},!1];return l.t=a,l.i18n={},l.ready=!1,l}s.options.react&&s.options.react.wait!==void 0&&Cd("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var u=oc(oc(oc({},p_()),s.options.react),t),c=u.useSuspense,d=u.keyPrefix,h=e||o||s.options&&s.options.defaultNS;h=typeof h=="string"?[h]:h||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(h);var v=(s.isInitialized||s.initializedStoreOnce)&&h.every(function(x){return b_(x,s,u)});function y(){return s.getFixedT(null,u.nsMode==="fallback"?h:h[0],d)}var b=C.exports.useState(y),w=x_(b,2),p=w[0],g=w[1],m=h.join(),S=__(m),k=C.exports.useRef(!0);C.exports.useEffect(function(){var x=u.bindI18n,N=u.bindI18nStore;k.current=!0,!v&&!c&&dg(s,h,function(){k.current&&g(y)}),v&&S&&S!==m&&k.current&&g(y);function O(){k.current&&g(y)}return x&&s&&s.on(x,O),N&&s&&s.store.on(N,O),function(){k.current=!1,x&&s&&x.split(" ").forEach(function(R){return s.off(R,O)}),N&&s&&N.split(" ").forEach(function(R){return s.store.off(R,O)})}},[s,m]);var T=C.exports.useRef(!0);C.exports.useEffect(function(){k.current&&!T.current&&g(y),T.current=!1},[s,d]);var _=[p,s,v];if(_.t=p,_.i18n=s,_.ready=v,v||!v&&!c)return _;throw new Promise(function(x){dg(s,h,function(){x()})})}function Zy(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Zy(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function qn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Zy(e))&&(r&&(r+=" "),r+=t);return r}var au={exports:{}},lu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_=C.exports,k_=Symbol.for("react.element"),T_=Symbol.for("react.fragment"),C_=Object.prototype.hasOwnProperty,I_=E_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O_={key:!0,ref:!0,__self:!0,__source:!0};function e1(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)C_.call(t,r)&&!O_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:k_,type:e,key:o,ref:s,props:i,_owner:I_.current}}lu.Fragment=T_;lu.jsx=e1;lu.jsxs=e1;(function(e){e.exports=lu})(au);const rt=au.exports.Fragment,f=au.exports.jsx,P=au.exports.jsxs;function Ls(e){return typeof e=="number"&&!isNaN(e)}function vo(e){return typeof e=="boolean"}function Gr(e){return typeof e=="string"}function yt(e){return typeof e=="function"}function Aa(e){return Gr(e)||yt(e)?e:null}function La(e){return e!=null}function P_(e,t){return e===!1||Ls(e)&&e>0?e:t}function sc(e){return C.exports.isValidElement(e)||Gr(e)||yt(e)||Ls(e)}const t1={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Nn={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function R_(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function A_(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:l,position:u,preventExitTransition:c,done:d,nodeRef:h,isIn:v}=a;const y=r?t+"--"+u:t,b=r?n+"--"+u:n,w=C.exports.useRef(0);return C.exports.useLayoutEffect(()=>{const p=h.current,g=y.split(" "),m=k=>{k.target===h.current&&(p.dispatchEvent(new Event("d")),p.removeEventListener("animationend",m),p.removeEventListener("animationcancel",m),w.current===0&&k.type!=="animationcancel"&&p.classList.remove(...g))};(()=>{p.classList.add(...g),p.addEventListener("animationend",m),p.addEventListener("animationcancel",m)})()},[]),C.exports.useEffect(()=>{const p=h.current,g=()=>{p.removeEventListener("animationend",g),i?R_(p,d,o):d()};v||(c?g():(()=>{w.current=1,p.className+=" "+b,p.addEventListener("animationend",g)})())},[v]),f(rt,{children:l})}}function hg(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const Nt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},uu=e=>{let{theme:t,type:n,...r}=e;return f("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")",...r})};function L_(e){return f(uu,{...e,children:f("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})}function N_(e){return f(uu,{...e,children:f("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})}function $_(e){return f(uu,{...e,children:f("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})}function M_(e){return f(uu,{...e,children:f("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})}function D_(){return f("div",{className:"Toastify__spinner"})}const Id={info:N_,warning:L_,success:$_,error:M_,spinner:D_},z_=e=>e in Id;function j_(e){let{theme:t,type:n,isLoading:r,icon:i}=e,o=null;const s={theme:t,type:n};return i===!1||(yt(i)?o=i(s):C.exports.isValidElement(i)?o=C.exports.cloneElement(i,s):Gr(i)||Ls(i)?o=i:r?o=Id.spinner():z_(n)&&(o=Id[n](s))),o}function F_(e){const[,t]=C.exports.useReducer(b=>b+1,0),[n,r]=C.exports.useState([]),i=C.exports.useRef(null),o=C.exports.useRef(new Map).current,s=b=>n.indexOf(b)!==-1,a=C.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:b=>o.get(b)}).current;C.exports.useEffect(()=>(a.containerId=e.containerId,Nt.cancelEmit(3).on(0,h).on(1,b=>i.current&&u(b)).on(5,l).emit(2,a),()=>{o.clear(),Nt.emit(3,a)}),[]),C.exports.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length});function l(b){let{containerId:w}=b;const{limit:p}=a.props;p&&(!w||a.containerId===w)&&(a.count-=a.queue.length,a.queue=[])}function u(b){r(w=>La(b)?w.filter(p=>p!==b):[])}function c(){const{toastContent:b,toastProps:w,staleId:p}=a.queue.shift();v(b,w,p)}function d(b){return!i.current||a.props.enableMultiContainer&&b.containerId!==a.props.containerId||o.has(b.toastId)&&b.updateId==null}function h(b,w){let{delay:p,staleId:g,...m}=w;if(!sc(b)||d(m))return;const{toastId:S,updateId:k,data:T}=m,{props:_}=a,x=()=>u(S),N=k==null;N&&a.count++;const O={toastId:S,updateId:k,data:T,containerId:m.containerId,isLoading:m.isLoading,theme:m.theme||_.theme,icon:m.icon!=null?m.icon:_.icon,isIn:!1,key:m.key||a.toastKey++,type:m.type,closeToast:x,closeButton:m.closeButton,rtl:_.rtl,position:m.position||_.position,transition:m.transition||_.transition,className:Aa(m.className||_.toastClassName),bodyClassName:Aa(m.bodyClassName||_.bodyClassName),style:m.style||_.toastStyle,bodyStyle:m.bodyStyle||_.bodyStyle,onClick:m.onClick||_.onClick,pauseOnHover:vo(m.pauseOnHover)?m.pauseOnHover:_.pauseOnHover,pauseOnFocusLoss:vo(m.pauseOnFocusLoss)?m.pauseOnFocusLoss:_.pauseOnFocusLoss,draggable:vo(m.draggable)?m.draggable:_.draggable,draggablePercent:m.draggablePercent||_.draggablePercent,draggableDirection:m.draggableDirection||_.draggableDirection,closeOnClick:vo(m.closeOnClick)?m.closeOnClick:_.closeOnClick,progressClassName:Aa(m.progressClassName||_.progressClassName),progressStyle:m.progressStyle||_.progressStyle,autoClose:m.isLoading?!1:P_(m.autoClose,_.autoClose),hideProgressBar:vo(m.hideProgressBar)?m.hideProgressBar:_.hideProgressBar,progress:m.progress,role:m.role||_.role,deleteToast(){const z=hg(o.get(S),"removed");o.delete(S),Nt.emit(4,z);const K=a.queue.length;if(a.count=La(S)?a.count-1:a.count-a.displayedToast,a.count<0&&(a.count=0),K>0){const E=La(S)?1:a.props.limit;if(K===1||E===1)a.displayedToast++,c();else{const A=E>K?K:E;a.displayedToast=A;for(let G=0;G<A;G++)c()}}else t()}};O.iconOut=j_(O),yt(m.onOpen)&&(O.onOpen=m.onOpen),yt(m.onClose)&&(O.onClose=m.onClose),O.closeButton=_.closeButton,m.closeButton===!1||sc(m.closeButton)?O.closeButton=m.closeButton:m.closeButton===!0&&(O.closeButton=sc(_.closeButton)?_.closeButton:!0);let R=b;C.exports.isValidElement(b)&&!Gr(b.type)?R=C.exports.cloneElement(b,{closeToast:x,toastProps:O,data:T}):yt(b)&&(R=b({closeToast:x,toastProps:O,data:T})),_.limit&&_.limit>0&&a.count>_.limit&&N?a.queue.push({toastContent:R,toastProps:O,staleId:g}):Ls(p)?setTimeout(()=>{v(R,O,g)},p):v(R,O,g)}function v(b,w,p){const{toastId:g}=w;p&&o.delete(p);const m={content:b,props:w};o.set(g,m),r(S=>[...S,g].filter(k=>k!==p)),Nt.emit(4,hg(m,m.props.updateId==null?"added":"updated"))}function y(b){const w=new Map,p=Array.from(o.values());return e.newestOnTop&&p.reverse(),p.forEach(g=>{const{position:m}=g.props;w.has(m)||w.set(m,[]),w.get(m).push(g)}),Array.from(w,g=>b(g[0],g[1]))}return{getToastToRender:y,containerRef:i,isToastActive:s}}function gg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function mg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function U_(e){const[t,n]=C.exports.useState(!1),[r,i]=C.exports.useState(!1),o=C.exports.useRef(null),s=C.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=C.exports.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:h}=e;C.exports.useEffect(()=>{a.current=e}),C.exports.useEffect(()=>(o.current&&o.current.addEventListener("d",b,{once:!0}),yt(e.onOpen)&&e.onOpen(C.exports.isValidElement(e.children)&&e.children.props),()=>{const x=a.current;yt(x.onClose)&&x.onClose(C.exports.isValidElement(x.children)&&x.children.props)}),[]),C.exports.useEffect(()=>(e.pauseOnFocusLoss&&p(),()=>{e.pauseOnFocusLoss&&g()}),[e.pauseOnFocusLoss]);function v(x){if(e.draggable){m();const N=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=N.getBoundingClientRect(),N.style.transition="",s.x=gg(x.nativeEvent),s.y=mg(x.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=N.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=N.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent/100))}}function y(){if(s.boundingRect){const{top:x,bottom:N,left:O,right:R}=s.boundingRect;e.pauseOnHover&&s.x>=O&&s.x<=R&&s.y>=x&&s.y<=N?w():b()}}function b(){n(!0)}function w(){n(!1)}function p(){document.hasFocus()||w(),window.addEventListener("focus",b),window.addEventListener("blur",w)}function g(){window.removeEventListener("focus",b),window.removeEventListener("blur",w)}function m(){s.didMove=!1,document.addEventListener("mousemove",k),document.addEventListener("mouseup",T),document.addEventListener("touchmove",k),document.addEventListener("touchend",T)}function S(){document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",T)}function k(x){const N=o.current;s.canDrag&&N&&(s.didMove=!0,t&&w(),s.x=gg(x),s.y=mg(x),e.draggableDirection==="x"?s.delta=s.x-s.start:s.delta=s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),N.style.transform="translate"+e.draggableDirection+"("+s.delta+"px)",N.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function T(){S();const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){i(!0),e.closeToast();return}x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform="translate"+e.draggableDirection+"(0)",x.style.opacity="1"}}const _={onMouseDown:v,onTouchStart:v,onMouseUp:y,onTouchEnd:y};return l&&u&&(_.onMouseEnter=w,_.onMouseLeave=b),h&&(_.onClick=x=>{d&&d(x),s.canCloseOnClick&&c()}),{playToast:b,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:_}}function n1(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return f("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r,children:f("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:f("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}function r1(e){let{delay:t,isRunning:n,closeToast:r,type:i,hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:h}=e;const v={...a,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:o?0:1};l&&(v.transform="scaleX("+u+")");const y=qn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+h,"Toastify__progress-bar--"+i,{["Toastify__progress-bar--rtl"]:c}),b=yt(s)?s({rtl:c,type:i,defaultClassName:y}):qn(y,s),w={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}};return f("div",{role:"progressbar","aria-hidden":o?"true":"false","aria-label":"notification timer",className:b,style:v,...w})}r1.defaultProps={type:Nn.DEFAULT,hide:!1};const B_=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=U_(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:h,position:v,className:y,style:b,bodyClassName:w,bodyStyle:p,progressClassName:g,progressStyle:m,updateId:S,role:k,progress:T,rtl:_,toastId:x,deleteToast:N,isIn:O,isLoading:R,iconOut:z,theme:K}=e,E=qn("Toastify__toast","Toastify__toast-theme--"+K,"Toastify__toast--"+u,{["Toastify__toast--rtl"]:_}),A=yt(y)?y({rtl:_,position:v,type:u,defaultClassName:E}):qn(E,y),G=!!T,X={closeToast:d,type:u,theme:K};let L=null;return o===!1||(yt(o)?L=o(X):Ne.isValidElement(o)?L=Ne.cloneElement(o,X):L=n1(X)),f(h,{isIn:O,done:N,position:v,preventExitTransition:n,nodeRef:r,children:P("div",{id:x,onClick:l,className:A,...i,style:b,ref:r,children:[P("div",{...O&&{role:k},className:yt(w)?w({type:u}):qn("Toastify__toast-body",w),style:p,children:[z!=null&&f("div",{className:qn("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!R}),children:z}),f("div",{children:s})]}),L,(a||G)&&f(r1,{...S&&!G?{key:"pb-"+S}:{},rtl:_,theme:K,delay:a,isRunning:t,isIn:O,closeToast:d,hide:c,type:u,style:m,className:g,controlledProgress:G,progress:T})]})})},H_=A_({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),ip=C.exports.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=F_(e),{className:o,style:s,rtl:a,containerId:l}=e;function u(c){const d=qn("Toastify__toast-container","Toastify__toast-container--"+c,{["Toastify__toast-container--rtl"]:a});return yt(o)?o({position:c,rtl:a,defaultClassName:d}):qn(d,Aa(o))}return C.exports.useEffect(()=>{t&&(t.current=r.current)},[]),f("div",{ref:r,className:"Toastify",id:l,children:n((c,d)=>{const h=d.length?{...s}:{...s,pointerEvents:"none"};return f("div",{className:u(c),style:h,children:d.map((v,y)=>{let{content:b,props:w}=v;return C.exports.createElement(B_,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":y+1,"--len":d.length},key:"toast-"+w.key},b)})},"container-"+c)})})});ip.displayName="ToastContainer";ip.defaultProps={position:t1.TOP_RIGHT,transition:H_,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:n1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let $r=new Map,Od,hs=[];function V_(e,t){let{containerId:n}=t;const r=$r.get(n||Od);return r?r.getToast(e):null}function i1(){return Math.random().toString(36).substring(2,9)}function W_(e){return e&&(Gr(e.toastId)||Ls(e.toastId))?e.toastId:i1()}function Ns(e,t){return $r.size>0?Nt.emit(0,e,t):hs.push({content:e,options:t}),t.toastId}function cu(e,t){return{...t,type:t&&t.type||e,toastId:W_(t)}}function du(e){return(t,n)=>Ns(t,cu(e,n))}function te(e,t){return Ns(e,cu(Nn.DEFAULT,t))}te.loading=(e,t)=>Ns(e,cu(Nn.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function G_(e,t,n){let{pending:r,error:i,success:o}=t,s;r&&(s=Gr(r)?te.loading(r,n):te.loading(r.render,{...n,...r}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(c,d,h)=>{if(d==null){te.dismiss(s);return}const v={type:c,...a,...n,data:h},y=Gr(d)?{render:d}:d;return s?te.update(s,{...v,...y}):te(y.render,{...v,...y}),h},u=yt(e)?e():e;return u.then(c=>l("success",o,c)).catch(c=>l("error",i,c)),u}te.promise=G_;te.success=du(Nn.SUCCESS);te.info=du(Nn.INFO);te.error=du(Nn.ERROR);te.warning=du(Nn.WARNING);te.warn=te.warning;te.dark=(e,t)=>Ns(e,cu(Nn.DEFAULT,{theme:"dark",...t}));te.dismiss=e=>{$r.size>0?Nt.emit(1,e):hs=hs.filter(t=>La(e)&&t.options.toastId!==e)};te.clearWaitingQueue=function(e){return e===void 0&&(e={}),Nt.emit(5,e)};te.isActive=e=>{let t=!1;return $r.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t};te.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=V_(e,t);if(n){const{props:r,content:i}=n,o={...r,...t,toastId:t.toastId||e,updateId:i1()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,Ns(s,o)}},0)};te.done=e=>{te.update(e,{progress:1})};te.onChange=e=>(Nt.on(4,e),()=>{Nt.off(4,e)});te.POSITION=t1;te.TYPE=Nn;Nt.on(2,e=>{Od=e.containerId||e,$r.set(Od,e),hs.forEach(t=>{Nt.emit(0,t.content,t.options)}),hs=[]}).on(3,e=>{$r.delete(e.containerId||e),$r.size===0&&Nt.off(0).off(1).off(5)});const q_=F.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: hsla(0, 0%, 0%, 0.5);
    opacity: 0;
    pointer-events: none;
    z-index: 15;
    transition: 0.5s ease;
    

    ${e=>e.active&&Ee`
        opacity: 1;
        pointer-events: all;
  `}
`,$s=C.exports.createContext(),K_=({children:e})=>{const[t,n]=C.exports.useState(!1),[r,i]=C.exports.useState(!1),[o,s]=C.exports.useState(null),a=C.exports.useCallback(()=>{n(!t)},[t]),l=C.exports.useCallback(h=>{i(!r),s(o===h?null:h)},[r,o]),u=()=>{n(!1)},c=()=>{i(!1)},d=C.exports.useMemo(()=>({isMenuOpen:t,toggleMenu:a,closeMenu:u,isAccordionOpen:r,toggleAccordion:l,closeAccordion:c,accordionClick:o}),[t,a,r,l,o]);return f($s.Provider,{value:d,children:e})},Y_=()=>{const{isMenuOpen:e,closeMenu:t}=C.exports.useContext($s);return f(q_,{active:e,onClick:t})};var o1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vg=Ne.createContext&&Ne.createContext(o1),ar=globalThis&&globalThis.__assign||function(){return ar=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ar.apply(this,arguments)},X_=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function s1(e){return e&&e.map(function(t,n){return Ne.createElement(t.tag,ar({key:n},t.attr),s1(t.child))})}function ye(e){return function(t){return f(Q_,{...ar({attr:ar({},e.attr)},t),children:s1(e.child)})}}function Q_(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=X_(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),P("svg",{...ar({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:ar(ar({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[o&&f("title",{children:o}),e.children]})};return vg!==void 0?f(vg.Consumer,{children:function(n){return t(n)}}):t(o1)}function J_(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}function Z_(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"}},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"}}]})(e)}const eE=F.div`
    padding: 6px 10px; 
    background: ${e=>e.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:  ${e=>e.theme.fontxl};
    font-weight: 600;
    color: ${e=>e.theme.white};
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 30;
    display: none;
    cursor: pointer;
    transition: all .3s ease-out 0s;
    border-radius: ${e=>e.theme.borderRadiusMd};

    @media (min-width: 1024px) {
        display: block;
    }

    &:hover {
    box-shadow: 0 1rem 3rem rgba(35, 38, 45, 0.15);
    transform: translate3d(0, -5px, 0);
    background-color: ${e=>e.theme.primaryDark};
    }
`,tE=()=>{const[e,t]=C.exports.useState(!1);return C.exports.useEffect(()=>{window.addEventListener("scroll",()=>{window.pageYOffset>200?t(!0):t(!1)})},[]),f(rt,{children:e&&f(eE,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:f(J_,{})})})};var gs=function(){return gs=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},gs.apply(this,arguments)};function nE(e){var t={exports:{}};return e(t,t.exports),t.exports}/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/nE(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)&&o.length){var a=n.apply(null,o);a&&r.push(a)}else if(s==="object")for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()});function Pd(e){return C.exports.createElement("svg",gs({width:"1em",height:"1em",viewBox:"0 0 512 336",xmlns:"http://www.w3.org/2000/svg"},e),C.exports.createElement("g",{fill:"none"},C.exports.createElement("path",{d:"M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",fill:"#FF4B55"}),C.exports.createElement("path",{d:"M85.007 52.732l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.469-21.64 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.8c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.711-3.268 6.8 0zm96.592 6.218l6.035 8.23 9.739-3.046c1.261-.394 2.298 1.044 1.526 2.115l-5.962 8.281 5.906 8.321c.765 1.077-.282 2.508-1.54 2.105l-9.719-3.111-6.089 8.189c-.788 1.06-2.473.506-2.478-.814l-.045-10.205-9.67-3.261c-1.251-.423-1.246-2.195.009-2.609l9.69-3.196.114-10.204c.014-1.319 1.703-1.86 2.484-.795zm-36.742-24.53l10.145 1.102 4.328-9.241c.561-1.196 2.321-.991 2.591.302l2.086 9.988 10.126 1.26c1.311.163 1.66 1.901.513 2.558l-8.855 5.07 1.931 10.02c.25 1.298-1.295 2.166-2.274 1.279l-7.559-6.855-8.932 4.932c-1.156.639-2.461-.563-1.919-1.768l4.183-9.308-7.452-6.972c-.964-.898-.225-2.509 1.088-2.367zm16.038 98.893l-6.035 8.23-9.739-3.046c-1.261-.394-2.298 1.044-1.526 2.115l5.962 8.281-5.906 8.321c-.765 1.077.282 2.508 1.54 2.105l9.719-3.111 6.089 8.189c.788 1.06 2.473.506 2.478-.814l.045-10.205 9.67-3.261c1.252-.423 1.246-2.195-.009-2.609l-9.69-3.196-.114-10.204c-.016-1.318-1.703-1.861-2.484-.795zm36.74-23.051l-10.145 1.102-4.328-9.241c-.561-1.196-2.321-.991-2.591.302l-2.087 9.988-10.126 1.26c-1.311.163-1.66 1.901-.513 2.558l8.855 5.07-1.931 10.02c-.25 1.298 1.295 2.166 2.274 1.279l7.559-6.855 8.932 4.932c1.156.639 2.461-.563 1.919-1.768l-4.183-9.308 7.452-6.972c.967-.898.228-2.509-1.087-2.367z",fill:"#FFE15A"})))}function Rd(e){return C.exports.createElement("svg",gs({width:"1em",height:"1em",viewBox:"0 0 512 336",xmlns:"http://www.w3.org/2000/svg"},e),C.exports.createElement("g",{fill:"none"},C.exports.createElement("path",{d:"M503.172 335.725H8.828A8.829 8.829 0 010 326.897V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",fill:"#41479B"}),C.exports.createElement("path",{d:"M512 9.104a8.829 8.829 0 00-8.828-8.828h-39.495l-163.54 107.147V.276h-88.276v107.147L48.322.276H8.828A8.829 8.829 0 000 9.104v22.831l140.309 91.927H0v88.276h140.309L0 304.066v22.831a8.829 8.829 0 008.828 8.828h39.495l163.54-107.147v107.147h88.276V228.578l163.54 107.147h39.495a8.829 8.829 0 008.828-8.828v-22.831l-140.309-91.927H512v-88.276H371.691L512 31.935V9.104z",fill:"#F5F5F5"}),C.exports.createElement("g",{fill:"#FF4B55"},C.exports.createElement("path",{d:"M512 141.518H282.483V.276h-52.966v141.242H0v52.965h229.517v141.242h52.966V194.483H512z"}),C.exports.createElement("path",{d:"M178.948 212.138L.25 328.135c.625 4.263 4.14 7.59 8.577 7.59h12.159l190.39-123.587-32.428.001v-.001zm167.44 0H313.96l190.113 123.404c4.431-.472 7.928-4.09 7.928-8.646v-7.258l-165.613-107.5zM0 18.849l161.779 105.014h32.428L5.143 1.137C2.123 2.54 0 5.555 0 9.104v9.745zm332.566 105.014L511.693 7.586c-.744-4.122-4.184-7.309-8.521-7.309h-12.647L300.138 123.863h32.428z"}))))}function Ad(e){return C.exports.createElement("svg",gs({width:"1em",height:"1em",viewBox:"0 0 512 336",xmlns:"http://www.w3.org/2000/svg"},e),C.exports.createElement("g",{fill:"none"},C.exports.createElement("path",{d:"M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",fill:"#FF4B55"}),C.exports.createElement("g",{fill:"#F5F5F5"},C.exports.createElement("path",{d:"M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168zm72.569-83.737c0-29.028 21.3-53.091 49.113-57.542 1.51-.242 1.578-2.319.088-2.663a60.413 60.413 0 00-21.793-1c-29.998 4.086-53.186 30.046-53.61 60.318-.483 34.566 27.383 62.712 61.785 62.712 4.683 0 9.23-.547 13.606-1.554 1.489-.342 1.414-2.424-.094-2.666-27.802-4.448-49.095-28.464-49.095-57.605z"}),C.exports.createElement("path",{d:"M122.14 99.795l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0zm40.827 0l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.773-1.014-2.112 0zM142.738 36.79l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0zm-32.552 24.138l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.773-1.014-2.112 0zm64.828 0l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0z"}))))}function rE(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var iE=`.ReactFlagsSelect-module_flagsSelect__2pfa2 {
  position: relative;
  vertical-align: inherit;
  padding-bottom: 5px;
  text-align: left; }

.ReactFlagsSelect-module_flagsSelectInline__cUnnz {
  display: inline-block; }

.ReactFlagsSelect-module_selectBtn__19wW7 {
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  font-family: inherit;
  color: #4d4d4d;
  border: thin solid rgba(77, 77, 77, 0.3);
  border-radius: 4px;
  background: transparent; }
  .ReactFlagsSelect-module_selectBtn__19wW7:after, .ReactFlagsSelect-module_selectBtn__19wW7[aria-expanded="true"]:after {
    content: " ";
    width: 0;
    height: 0;
    display: inline-block;
    margin-left: 5px; }
  .ReactFlagsSelect-module_selectBtn__19wW7:after {
    border-top: 5px solid #4d4d4d;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 0; }
  .ReactFlagsSelect-module_selectBtn__19wW7[aria-expanded="true"]:after {
    border-top: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #4d4d4d; }

.ReactFlagsSelect-module_disabledBtn__3A4GF {
  background: #eaeaea;
  cursor: default; }

.ReactFlagsSelect-module_label__27pw9, .ReactFlagsSelect-module_secondaryLabel__37t1D {
  font-size: 1em;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis; }

.ReactFlagsSelect-module_secondaryLabel__37t1D {
  color: #707070;
  padding-left: 5px; }

.ReactFlagsSelect-module_selectValue__152eS,
.ReactFlagsSelect-module_selectOption__3pcgW {
  cursor: pointer;
  padding: 0 8px;
  margin: 4px 0;
  white-space: nowrap; }

.ReactFlagsSelect-module_selectValue__152eS {
  pointer-events: none;
  display: flex;
  align-items: center; }

.ReactFlagsSelect-module_selectOption__3pcgW {
  padding: 2px 18px; }
  .ReactFlagsSelect-module_selectOption__3pcgW:hover, .ReactFlagsSelect-module_selectOption__3pcgW:focus {
    outline: none;
    background: #eaeaea; }

.ReactFlagsSelect-module_selectFlag__2q5gC {
  display: inline-flex;
  font-size: 1.2em; }

.ReactFlagsSelect-module_selectOptionValue__vS99- {
  display: flex;
  align-items: center; }

.ReactFlagsSelect-module_selectOptionWithlabel__2GpmM {
  padding: 4px 10px; }

.ReactFlagsSelect-module_selectOptions__3LNBJ {
  position: absolute;
  z-index: 999999;
  border: 1px solid #bdbbbb;
  border-radius: 3px;
  background: #ffffff;
  margin-top: 8px;
  padding: 8px 0;
  max-height: 180px;
  overflow: auto; }

.ReactFlagsSelect-module_selectOptionsWithSearch__1W03w {
  padding: 0 0 8px 0; }

.ReactFlagsSelect-module_fullWidthOptions__1XeR6 {
  right: 0;
  left: 0; }

.ReactFlagsSelect-module_alignOptionsToRight__3Qvq2 {
  right: 0; }

.ReactFlagsSelect-module_filterBox__3m8EU {
  position: sticky;
  top: 0;
  width: 100%;
  padding-top: 8px;
  background: #ffffff; }
  .ReactFlagsSelect-module_filterBox__3m8EU input {
    width: calc(100% - 20px);
    margin: 0 10px;
    padding: 8px;
    box-sizing: border-box; }
    .ReactFlagsSelect-module_filterBox__3m8EU input:focus {
      outline: none; }
`;rE(iE);function Na(e){return ye({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"}}]})(e)}function oE(e){return ye({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function sE(e){return ye({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"}}]})(e)}const op="/assets/Facebook.f87a1353.svg",sp="/assets/Twitter.01261070.svg",ap="/assets/Instagram.63a08b21.svg",lp="/assets/Pinterest.076dff25.svg",up="/assets/Youtube.5b3c053c.svg",aE=F.div`
   display: none;
   background:  ${e=>e.theme.eerieBlack};
   height: 3rem;

    @media (min-width: 480px) {
        display: block;
        padding: 10px 0;
        border-bottom: 1px solid ${e=>e.theme.cultured};
    }
`,lE=F.div`
    ${ni}

     @media (min-width: 570px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`,uE=F.ul`

       @media (min-width: 480px) {
            display: none;
       }

       @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        gap: 5px;
       }

       li {
        border-radius: ${e=>e.theme.borderRadiusSm};
        transition: ${e=>e.theme.transitionTiming};

        
        &:nth-child(1) {
            background: #1877f2; 
            
            &:hover {
                background: #0d6fed; 
            }
        }
        &:nth-child(2) {
            background: #55acee;

            &:hover {
                background: #47a5ed;  
            }
        }

        &:nth-child(3) {
            background: #cb2027; 

            &:hover {
                background: #be1e24;  
            }
        }

        &:nth-child(4) {
            background: linear-gradient(29.61deg, #f38334 0%, #da2e7d 50.39%, #6b54c6 100%);

            &:hover {
                background: linear-gradient(29.61deg, #e6670e 0%, #b52064 50.39%, #513aad 100%);

            }
        }

        &:nth-child(5) {
            background: #b00;

            &:hover {
                background: #ac0000;
            }
        }
       }
`,yo=F.a`
    cursor: pointer;


    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        border-radius: ${e=>e.theme.borderRadiusSm};
        color: ${e=>e.theme.eerieBlack};
        transition: ${e=>e.theme.transitionTiming};

       
    }

    img {
        width: 100%;
        height: auto;
        max-width: 15px;

        &:hover {
                transform: scale(1.2);
            }
    }
`,cE=F.div`
    @media (min-width: 480px) {
        color: ${e=>e.theme.white};
        font-size: ${e=>e.theme.font3xs};
        text-transform: uppercase;

        b {
            font-weight: 600;
        }
    }
`,dE=F.div`
    cursor: pointer;
    position: relative;
    padding: 1px;
    
    @media (min-width: 480px) {
        display: none;
    }

    @media (min-width: 570px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    p {
        font-size:  ${e=>e.theme.font3xl};
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(2) {
            color: ${e=>e.theme.white};
            font-size:  ${e=>e.theme.fontsm};
        }
    }

    div {
        display: none;
        position: absolute;
        right: 3px;
        top: 27px;
        margin-top: 3%;
        font-size:  ${e=>e.theme.fontxl};
        background: ${e=>e.theme.primaryLight};
        min-width: 55px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 11;
        padding: 0.5rem 0.8rem;
        cursor: auto;
        
        border-radius: ${e=>e.theme.borderRadiusMd};
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        border: 1px solid  ${e=>e.theme.cultured};
        transition: ${e=>e.theme.transitionTiming};

        button {
            cursor: pointer;

            &:hover {
                transform: scale(0.8, 0.9);
            }
        }
    }

    &:hover div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 6px;
    }
`,fE=()=>{const[e,t]=C.exports.useState(`${window.location.search.substring(window.location.search.length-2)}`),{t:n}=nn(),r=i=>{t(i);const o="https://wizcart.netlify.app/";window.location.replace(o+"?lng="+i)};return f(aE,{children:P(lE,{children:[P(uE,{children:[f("li",{children:f(yo,{children:f("img",{src:op,alt:"facebook",title:"facebook"})})}),f("li",{children:f(yo,{children:f("img",{src:sp,alt:"twitter",title:"twitter"})})}),f("li",{children:f(yo,{children:f("img",{src:lp,alt:"pinterest",title:"pinterest"})})}),f("li",{children:f(yo,{children:f("img",{src:ap,alt:"instagram",title:"instagram"})})}),f("li",{children:f(yo,{children:f("img",{src:up,alt:"youtube",title:"youtube"})})})]}),f(cE,{children:P("p",{children:[f("b",{children:n("Free Shipping")})," \xA0",n("This Week's Order Over-$55")]})}),P(dE,{children:[f("p",{children:e==="ms"?f(Ad,{}):e==="zh"?f(Pd,{}):f(Rd,{})}),f("p",{children:f(Na,{})}),P("div",{children:[f("button",{onClick:()=>r("ms"),title:n("Malay"),children:f(Ad,{})}),f("button",{onClick:()=>r("zh"),title:n("Chinese"),children:f(Pd,{})}),f("button",{onClick:()=>r("en"),title:n("English"),children:f(Rd,{})})]})]})]})})},ri="/assets/logo-black.1febdfa1.png";function a1(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"defs",attr:{},child:[{tag:"clipPath",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M124-288l388-672 388 672H124z",clipRule:"evenodd"}}]}]},{tag:"path",attr:{d:"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}},{tag:"path",attr:{d:"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"}}]})(e)}function l1(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]})(e)}function pE(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function hE(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]})(e)}function u1(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(e)}function gE(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}}]})(e)}function mE(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(e)}function yg(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]})(e)}function c1(e){return ye({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function vE(e){return ye({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}}]})(e)}function yE(e){return ye({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"}}]})(e)}function wg(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}}]})(e)}function bg(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function fu(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}}]})(e)}function la(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(e)}function ua(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19 13H5v-2h14v2z"}}]})(e)}function wE(e){return ye({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"}}]})(e)}var d1={exports:{}},f1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=C.exports;function bE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var SE=typeof Object.is=="function"?Object.is:bE,xE=Gi.useState,_E=Gi.useEffect,EE=Gi.useLayoutEffect,kE=Gi.useDebugValue;function TE(e,t){var n=t(),r=xE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return EE(function(){i.value=n,i.getSnapshot=t,ac(i)&&o({inst:i})},[e,n,t]),_E(function(){return ac(i)&&o({inst:i}),e(function(){ac(i)&&o({inst:i})})},[e]),kE(n),n}function ac(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!SE(e,n)}catch{return!0}}function CE(e,t){return t()}var IE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?CE:TE;f1.useSyncExternalStore=Gi.useSyncExternalStore!==void 0?Gi.useSyncExternalStore:IE;(function(e){e.exports=f1})(d1);var p1={exports:{}},h1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu=C.exports,OE=d1.exports;function PE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var RE=typeof Object.is=="function"?Object.is:PE,AE=OE.useSyncExternalStore,LE=pu.useRef,NE=pu.useEffect,$E=pu.useMemo,ME=pu.useDebugValue;h1.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=LE(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=$E(function(){function l(v){if(!u){if(u=!0,c=v,v=r(v),i!==void 0&&s.hasValue){var y=s.value;if(i(y,v))return d=y}return d=v}if(y=d,RE(c,v))return y;var b=r(v);return i!==void 0&&i(y,b)?y:(c=v,d=b)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=AE(e,o[0],o[1]);return NE(function(){s.hasValue=!0,s.value=a},[a]),ME(a),a};(function(e){e.exports=h1})(p1);function DE(e){e()}let g1=DE;const zE=e=>g1=e,jE=()=>g1,pr=Ne.createContext(null);function m1(){return C.exports.useContext(pr)}const FE=()=>{throw new Error("uSES not initialized!")};let v1=FE;const UE=e=>{v1=e},BE=(e,t)=>e===t;function HE(e=pr){const t=e===pr?m1:()=>C.exports.useContext(e);return function(r,i=BE){const{store:o,subscription:s,getServerState:a}=t(),l=v1(s.addNestedSub,o.getState,a||o.getState,r,i);return C.exports.useDebugValue(l),l}}const qr=HE();function VE(){const e=jE();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Sg={notify(){},get:()=>[]};function WE(e,t){let n,r=Sg;function i(d){return l(),r.subscribe(d)}function o(){r.notify()}function s(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=VE())}function u(){n&&(n(),n=void 0,r.clear(),r=Sg)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const GE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qE=GE?C.exports.useLayoutEffect:C.exports.useEffect;function KE({store:e,context:t,children:n,serverState:r}){const i=C.exports.useMemo(()=>{const a=WE(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),o=C.exports.useMemo(()=>e.getState(),[e]);return qE(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,o]),f((t||pr).Provider,{value:i,children:n})}function y1(e=pr){const t=e===pr?m1:()=>C.exports.useContext(e);return function(){const{store:r}=t();return r}}const YE=y1();function XE(e=pr){const t=e===pr?YE:y1(e);return function(){return t().dispatch}}const Zi=XE();UE(p1.exports.useSyncExternalStoreWithSelector);zE(Jd.exports.unstable_batchedUpdates);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},QE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},b1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(h=64)),r.push(n[c],n[d],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(w1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):QE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},JE=function(e){const t=w1(e);return b1.encodeByteArray(t,!0)},S1=function(e){return JE(e).replace(/\./g,"")},ZE=function(e){try{return b1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function fl(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!ek(n)||(e[n]=fl(e[n],t[n]));return e}function ek(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function x1(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rk(){return typeof self=="object"&&self.self===self}function _1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E1(){const e=Oe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function pl(){return typeof indexedDB=="object"}function ik(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="FirebaseError";class wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ok,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?sk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new wt(i,a,r)}}function sk(e,t){return e.replace(ak,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ak=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function lk(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ld(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(_g(o)&&_g(s)){if(!Ld(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _g(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ti(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function No(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function k1(e,t){const n=new uk(e,t);return n.subscribe.bind(n)}class uk{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ck(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=lc),i.error===void 0&&(i.error=lc),i.complete===void 0&&(i.complete=lc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ck(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function lc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return e&&e._delegate?e._delegate:e}class hr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new tk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pk(t))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Tr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tr){return this.instances.has(t)}getOptions(t=Tr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fk(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Tr){return this.component?this.component.multipleInstances?t:Tr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fk(e){return e===Tr?void 0:e}function pk(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new dk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=[];var fe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(fe||(fe={}));const T1={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},gk=fe.INFO,mk={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},vk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=mk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fp{constructor(t){this.name=t,this._logLevel=gk,this._logHandler=vk,this._userLogHandler=null,dp.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in fe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?T1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...t),this._logHandler(this,fe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...t),this._logHandler(this,fe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...t),this._logHandler(this,fe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...t),this._logHandler(this,fe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...t),this._logHandler(this,fe.ERROR,...t)}}function yk(e){dp.forEach(t=>{t.setLogLevel(e)})}function wk(e,t){for(const n of dp){let r=null;t&&t.level&&(r=T1[t.level]),e===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r!=null?r:i.logLevel)&&e({level:fe[o].toLowerCase(),message:a,args:s,type:i.name})}}}const bk=(e,t)=>t.some(n=>e instanceof n);let Eg,kg;function Sk(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xk(){return kg||(kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C1=new WeakMap,Nd=new WeakMap,I1=new WeakMap,uc=new WeakMap,pp=new WeakMap;function _k(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(lr(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&C1.set(n,e)}).catch(()=>{}),pp.set(t,e),t}function Ek(e){if(Nd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Nd.set(e,t)}let $d={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Nd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||I1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kk(e){$d=e($d)}function Tk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(cc(this),t,...n);return I1.set(r,t.sort?t.sort():[t]),lr(r)}:xk().includes(e)?function(...t){return e.apply(cc(this),t),lr(C1.get(this))}:function(...t){return lr(e.apply(cc(this),t))}}function Ck(e){return typeof e=="function"?Tk(e):(e instanceof IDBTransaction&&Ek(e),bk(e,Sk())?new Proxy(e,$d):e)}function lr(e){if(e instanceof IDBRequest)return _k(e);if(uc.has(e))return uc.get(e);const t=Ck(e);return t!==e&&(uc.set(e,t),pp.set(t,e)),t}const cc=e=>pp.get(e);function Ik(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=lr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(lr(s.result),l.oldVersion,l.newVersion,lr(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ok=["get","getKey","getAll","getAllKeys","count"],Pk=["put","add","delete","clear"],dc=new Map;function Tg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(dc.get(t))return dc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ok.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return dc.set(t,o),o}kk(e=>({...e,get:(t,n,r)=>Tg(t,n)||e.get(t,n,r),has:(t,n)=>!!Tg(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ak(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ak(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Md="@firebase/app",Cg="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new fp("@firebase/app"),Lk="@firebase/app-compat",Nk="@firebase/analytics-compat",$k="@firebase/analytics",Mk="@firebase/app-check-compat",Dk="@firebase/app-check",zk="@firebase/auth",jk="@firebase/auth-compat",Fk="@firebase/database",Uk="@firebase/database-compat",Bk="@firebase/functions",Hk="@firebase/functions-compat",Vk="@firebase/installations",Wk="@firebase/installations-compat",Gk="@firebase/messaging",qk="@firebase/messaging-compat",Kk="@firebase/performance",Yk="@firebase/performance-compat",Xk="@firebase/remote-config",Qk="@firebase/remote-config-compat",Jk="@firebase/storage",Zk="@firebase/storage-compat",eT="@firebase/firestore",tT="@firebase/firestore-compat",nT="firebase",rT="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]",iT={[Md]:"fire-core",[Lk]:"fire-core-compat",[$k]:"fire-analytics",[Nk]:"fire-analytics-compat",[Dk]:"fire-app-check",[Mk]:"fire-app-check-compat",[zk]:"fire-auth",[jk]:"fire-auth-compat",[Fk]:"fire-rtdb",[Uk]:"fire-rtdb-compat",[Bk]:"fire-fn",[Hk]:"fire-fn-compat",[Vk]:"fire-iid",[Wk]:"fire-iid-compat",[Gk]:"fire-fcm",[qk]:"fire-fcm-compat",[Kk]:"fire-perf",[Yk]:"fire-perf-compat",[Xk]:"fire-rc",[Qk]:"fire-rc-compat",[Jk]:"fire-gcs",[Zk]:"fire-gcs-compat",[eT]:"fire-fst",[tT]:"fire-fst-compat","fire-js":"fire-js",[nT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,ms=new Map;function hl(e,t){try{e.container.addComponent(t)}catch(n){Kr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function O1(e,t){e.container.addOrOverwriteComponent(t)}function Xr(e){const t=e.name;if(ms.has(t))return Kr.debug(`There were multiple attempts to register component ${t}.`),!1;ms.set(t,e);for(const n of gr.values())hl(n,e);return!0}function P1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function oT(e,t,n=Yr){P1(e,t).clearInstance(n)}function sT(){ms.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mr=new ii("app","Firebase",aT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=rT;function R1(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw mr.create("bad-app-name",{appName:String(r)});const i=gr.get(r);if(i){if(Ld(e,i.options)&&Ld(n,i.config))return i;throw mr.create("duplicate-app",{appName:r})}const o=new hk(r);for(const a of ms.values())o.addComponent(a);const s=new lT(e,n,o);return gr.set(r,s),s}function uT(e=Yr){const t=gr.get(e);if(!t)throw mr.create("no-app",{appName:e});return t}function cT(){return Array.from(gr.values())}async function A1(e){const t=e.name;gr.has(t)&&(gr.delete(t),await Promise.all(e.container.getProviders().map(n=>n.delete())),e.isDeleted=!0)}function ur(e,t,n){var r;let i=(r=iT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Kr.warn(a.join(" "));return}Xr(new hr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function L1(e,t){if(e!==null&&typeof e!="function")throw mr.create("invalid-log-argument");wk(e,t)}function N1(e){yk(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="firebase-heartbeat-database",fT=1,vs="firebase-heartbeat-store";let fc=null;function $1(){return fc||(fc=Ik(dT,fT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vs)}}}).catch(e=>{throw mr.create("idb-open",{originalErrorMessage:e.message})})),fc}async function pT(e){var t;try{return(await $1()).transaction(vs).objectStore(vs).get(M1(e))}catch(n){if(n instanceof wt)Kr.warn(n.message);else{const r=mr.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Kr.warn(r.message)}}}async function Ig(e,t){var n;try{const i=(await $1()).transaction(vs,"readwrite");return await i.objectStore(vs).put(t,M1(e)),i.done}catch(r){if(r instanceof wt)Kr.warn(r.message);else{const i=mr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Kr.warn(i.message)}}}function M1(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=1024,gT=30*24*60*60*1e3;class mT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Og();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=gT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Og(),{heartbeatsToSend:n,unsentEntries:r}=vT(this._heartbeatsCache.heartbeats),i=S1(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Og(){return new Date().toISOString().substring(0,10)}function vT(e,t=hT){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Pg(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pl()?ik().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ig(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ig(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Pg(e){return S1(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(e){Xr(new hr("platform-logger",t=>new Rk(t),"PRIVATE")),Xr(new hr("heartbeat",t=>new mT(t),"PRIVATE")),ur(Md,Cg,e),ur(Md,Cg,"esm2017"),ur("fire-js","")}wT("");const bT=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:to,_DEFAULT_ENTRY_NAME:Yr,_addComponent:hl,_addOrOverwriteComponent:O1,_apps:gr,_clearComponents:sT,_components:ms,_getProvider:P1,_registerComponent:Xr,_removeServiceInstance:oT,deleteApp:A1,getApp:uT,getApps:cT,initializeApp:R1,onLog:L1,registerVersion:ur,setLogLevel:N1,FirebaseError:wt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(t,n){this._delegate=t,this.firebase=n,hl(t,new hr("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),A1(this._delegate)))}_getService(t,n=Yr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(t,n=Yr){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){hl(this._delegate,t)}_addOrOverwriteComponent(t){O1(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Rg=new ii("app-compat","Firebase",xT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:ur,setLogLevel:N1,onLog:L1,apps:null,SDK_VERSION:to,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:bT}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete t[u]}function i(u){if(u=u||Yr,!xg(t,u))throw Rg.create("no-app",{appName:u});return t[u]}i.App=e;function o(u,c={}){const d=R1(u,c);if(xg(t,d.name))return t[d.name];const h=new e(d,n);return t[d.name]=h,h}function s(){return Object.keys(t).map(u=>t[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Xr(u)&&u.type==="PUBLIC"){const h=(v=i())=>{if(typeof v[d]!="function")throw Rg.create("invalid-app-argument",{appName:c});return v[d]()};u.serviceProps!==void 0&&fl(h,u.serviceProps),n[d]=h,e.prototype[d]=function(...v){return this._getService.bind(this,c).apply(this,u.multipleInstances?v:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(){const e=_T(ST);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:D1,extendNamespace:t,createSubscribe:k1,ErrorFactory:ii,deepExtend:fl});function t(n){fl(e,n)}return e}const ET=D1();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new fp("@firebase/app-compat"),kT="@firebase/app-compat",TT="0.1.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(e){ur(kT,TT,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(rk()&&self.firebase!==void 0){Ag.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Ag.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const xr=ET;CT();var IT="firebase",OT="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr.registerVersion(IT,OT,"app-compat");const PT=F.div`
    padding: 20px 0;
    border-bottom: 1px solid  ${e=>e.theme.cultured};
    height: 6rem;

    @media (min-width: 480px) {
        padding: 20px 0;
    }
`,RT=F.div`
    ${ni}

    @media (min-width: 570px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 768px) {
        gap: 80px;
    }


`,AT=F.a`
     margin-bottom: 20px;
    

     img {
        display: inline;
        margin: auto;
        width: 100%;
        height: auto;
        max-width: 70px;
        transition:  ${e=>e.theme.transitionTiming};
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
     }

     @media (min-width: 570px) {
        margin-bottom: 0;
     }
`,LT=F.div`
    position: relative;

    ${e=>e.focus&&Ee`
    z-index: 20;
  `}

  

    @media (min-width: 768px) {
        flex-grow: 1;
    }
`,NT=F.input`
    font-size: ${e=>e.theme.fontxs};
    color:  ${e=>e.theme.onyx};
    padding: 10px 15px;
    padding-right: 50px;
    border: 1px solid ${e=>e.theme.cultured};
    border-radius: ${e=>e.theme.borderRadiusMd};

    &:focus {
        border: 1px solid ${e=>e.theme.eerieBlack};
        outline: none;
    }

    &::-webkit-search-cancel-button { 
        display: none;
     }
`,$T=F.button`
        position: absolute;
        top: 50%;
        right: 1.5px;
        background: transparent;
        transform: translateY(-50%);
        color:  ${e=>e.theme.onyx};
        font-size: 18px;
        padding: 8px 15px;
        border-radius: ${e=>e.theme.borderRadiusMd};
        transition: color ${e=>e.theme.transitionTiming};

        &:hover {
            color: ${e=>e.theme.primary};
        }

        ${e=>e.focus&&Ee`
            background: ${t=>t.theme.primary};
            color: ${t=>t.theme.eerieBlack};

            &:hover {
                color: ${t=>t.theme.eerieBlack};
            }
        `}
`,MT=F.button`
        position: absolute;
        top: 55%;
        right: 55px;
        background: transparent;
        transform: translateY(-50%);
        color:  ${e=>e.theme.eerieBlack};
        font-size: 20px;
        padding: 8px 5px;
        visibility: hidden;
        transition: color ${e=>e.theme.transitionTiming};

        ${e=>e.focus&&Ee`
            visibility: visible;
            color: ${t=>t.theme.eerieBlack};
        `}
`,DT=F.div`
     display: none;

     @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
     }
`,pc=F.button`
    @media (min-width: 1024px) {
       position: relative;
        font-size: 30px;
        color:  ${e=>e.theme.eerieBlack};
        padding: 5px;
        transition:  ${e=>e.theme.transitionTiming};

        &:nth-child(2) {
            font-size: 28px;
            padding-top: 0px;
        }
       

            &:hover {
                transform: scale(1.1);
            }
        }
`,Lg=F.span`
     position: absolute;
    top: -2px;
    right: -3px;
    background:  ${e=>e.theme.primary};
    color:  ${e=>e.theme.white};
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    padding: 2px 4px;
    border-radius: 20px;
`,zT=F.button`
 @media (min-width: 1024px) {
    position: relative;
    margin-top: -6px;
    font-size: 32px;
    color:  ${e=>e.theme.eerieBlack};
    padding: 5px;
    transition:  ${e=>e.theme.transitionTiming};

    & > div.avatarContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3px;

            p.avatar {
            background: ${e=>e.theme.white};
            border: 2px solid ${e=>e.theme.eerieBlack};
            color: ${e=>e.theme.primaryDark};
            font-size: ${e=>e.theme.fontsm};
            font-weight: 600;
            width: 33px;
            height: 33px;
            border-radius: 50%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            }
            p.avatar-icon {
                font-size: ${e=>e.theme.fontxs};
                color: ${e=>e.theme.eerieBlack};
                transition: ${e=>e.theme.transitionTiming};
            }
    }

    & > div.profile-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        width: 230px;
        background: ${e=>e.theme.primaryDark};
        padding: 20px;
        border-radius: ${e=>e.theme.borderRadiusMd};
        border: 1px solid ${e=>e.theme.cultured};
        box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
        transform: translateY(50px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:  ${e=>e.theme.transitionTiming};
        z-index: 25;
        display: block;

        ${e=>e.closeDropdown&&Ee`
          display: none;
        `}




        div {
                p {
                color: ${e=>e.theme.white};
                font-size:  ${e=>e.theme.fontxs};
                font-weight: 600;
                padding-bottom: 10px;
                border-bottom: 1px solid ${e=>e.theme.cultured};
                }
                ul {
                    margin-bottom: 25px;
                    li {
                    list-style-type:square;
                    color:  ${e=>e.theme.white};
                    font-size:   ${e=>e.theme.font2xs};
                    transition:   ${e=>e.theme.transitionTiming};
                    padding: 5px;
                    text-align: left;

                }
                }
        }

            div {
                p.icon-activity {
                        display: flex;
                        gap: 5px;
                        padding: 5px 20px 20px;
                        border-bottom: 1px solid ${e=>e.theme.cultured};
                        margin-bottom: 10px;

                        span {
                            color:  ${e=>e.theme.white};
                            text-transform: capitalize;
                            transition:   ${e=>e.theme.transitionTiming};
                            display:block;
                            font-weight: 500;
                            font-size:   ${e=>e.theme.fontxs};

                            &.icon {
                                font-size:   ${e=>e.theme.fontsm};
                            }
                        
                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                    }
               
            }
        }


    &:hover > div.profile-dropdown{
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: all;

    }

    &:hover p.avatar-icon {
            transform: rotate(180deg);
        }
}

`,jT=F.button`
    display: none;


    @media (max-width: 1023px) {
        display: block;
        position: relative;
        font-size: 32px;
        color:  ${e=>e.theme.eerieBlack};
        padding: 5px;
        z-index: 10;
        transition:  ${e=>e.theme.transitionTiming};

        & > div.avatarContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3px;

            p.avatar {
            background: ${e=>e.theme.white};
            border: 3px solid ${e=>e.theme.primary};
            color: ${e=>e.theme.eerieBlack};
            font-size: ${e=>e.theme.fontlg};
            font-weight: 600;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            }
            p.avatar-icon {
                font-size: ${e=>e.theme.fontsm};
            }

        }

        & > div.profile-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            width: 200px;
            background: ${e=>e.theme.primaryDark};
            padding: 20px;
            border-radius: ${e=>e.theme.borderRadiusMd};
            border: 1px solid ${e=>e.theme.cultured};
            box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            transform: translateY(50px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition:  ${e=>e.theme.transitionTiming};
            display: block;

            ${e=>e.closeDropdown&&Ee`
              display: none;
            `}
            


            div {
                    p {
                    color: ${e=>e.theme.white};
                    font-size:  ${e=>e.theme.fontxs};
                    font-weight: 600;
                    padding-bottom: 10px;
                    border-bottom: 1px solid ${e=>e.theme.cultured};
                    }
                    ul {
                        margin-bottom: 25px;
                        li {
                        list-style-type:square;
                        color:  ${e=>e.theme.white};
                        font-size:   ${e=>e.theme.font2xs};
                        transition:   ${e=>e.theme.transitionTiming};
                        padding: 5px;
                        text-align: left;

                    }
                    }
            }

                div {
                    p.icon-activity {
                        display: flex;
                        gap: 5px;
                        padding: 5px 20px 20px;
                        border-bottom: 1px solid ${e=>e.theme.cultured};
                        margin-bottom: 10px;

                        span {
                        color:  ${e=>e.theme.white};
                        text-transform: capitalize;
                        transition:   ${e=>e.theme.transitionTiming};
                        display:block;
                        font-weight: 500;
                        font-size:   ${e=>e.theme.font2xs};
                        cursor: pointer;

                            &.icon {
                                font-size:   ${e=>e.theme.fontsm};
                            }
                    
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
        }
    }
    

    &:hover > div.profile-dropdown{
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    z-index: 999;
    }

    @media (max-width: 570px) {
        bottom: 110px;
        left: 85%;
    }

    &:hover {
                transform: scale(1.1);
    }
`,FT=()=>{const{toggleMenu:e,isMenuOpen:t,closeMenu:n}=C.exports.useContext($s),[r,i]=C.exports.useState(!1),{t:o}=nn(),s=Rs(),a=Zi(),{userInfo:l}=qr(h=>({...h.userLogin})),u=()=>{e(),document.querySelector(".mobile-nav-bar").style.display="none"},c=()=>{i(!0)},d=()=>{xr.auth().signOut(),a({type:"USER_LOGOUT",payload:null}),s("./login")};return f(PT,{children:P(RT,{children:[f(AT,{children:f("img",{onClick:()=>s("/"),src:ri,alt:"WizCart's logo",title:"WizCart"})}),P(LT,{focus:t,children:[f(NT,{type:"search",name:"search",className:"search-field",placeholder:`${o("Search for a product name")}...`,onFocus:u}),f(MT,{focus:t,onClick:n,children:f(wE,{title:o("Close")})}),f($T,{focus:t,children:f(mE,{title:o("Search")})})]}),P(jT,{closeDropdown:r,children:[l?P("div",{className:"avatarContainer",children:[f("p",{className:"avatar",onClick:()=>i(!1),children:l.displayName?l.displayName.split(" ").map(h=>h[0]).join().replace(",",""):l.email.substring(0,2)}),f("p",{className:"avatar-icon",children:f(Na,{})})]}):P("div",{className:"avatarContainer",children:[f(sE,{title:o("Profile"),onClick:()=>i(!1)}),f("p",{className:"avatar-icon",children:f(Na,{})})]}),P("div",{className:"profile-dropdown",children:[f("div",{children:l?f("p",{children:l.displayName?l.displayName:l.email.split("@")[0]}):P(rt,{children:[P("p",{children:[o("Sign in or create an account"),":"]}),P("ul",{children:[f("li",{children:o("For faster checkout")}),f("li",{children:o("To access order history")})]})]})}),f("div",{children:l?P("p",{className:"icon-activity",children:[f("span",{className:"icon",children:f(bg,{})}),f("span",{onClick:()=>{d(),c()},children:o("Logout")})]}):P(rt,{children:[P("p",{className:"icon-activity",children:[f("span",{className:"icon",children:f(wg,{})}),f("span",{onClick:()=>{s(`/${encodeURI(o("login"))}`),c()},children:o("Sign in")})]}),P("p",{className:"icon-activity",children:[f("span",{className:"icon",children:f(yg,{})}),f("span",{onClick:()=>{s(`/${encodeURI(o("register"))}`),c()},children:o("Register")})]})]})})]})]}),P(DT,{children:[P(zT,{closeDropdown:r,onMouseEnter:()=>i(!1),children:[l?P("div",{className:"avatarContainer",children:[f("p",{className:"avatar-icon",children:f(Na,{})}),f("p",{className:"avatar",onClick:()=>i(!1),children:l.displayName?l.displayName.split(" ").map(h=>h[0]).join().replace(",",""):l.email.substring(0,2)})]}):f(vE,{title:o("Profile")}),P("div",{className:"profile-dropdown",children:[f("div",{children:l?f("p",{children:l.displayName?l.displayName:l.email.split("@")[0]}):P(rt,{children:[P("p",{children:[o("Sign in or create an account"),":"]}),P("ul",{children:[f("li",{children:o("For faster checkout")}),f("li",{children:o("To access order history")})]})]})}),f("div",{children:l?P("p",{className:"icon-activity",children:[f("span",{className:"icon",children:f(bg,{})}),f("span",{onClick:()=>{d(),c()},children:o("Logout")})]}):P(rt,{children:[P("p",{className:"icon-activity",children:[f("span",{className:"icon",children:f(wg,{})}),f("span",{onClick:()=>{s(`/${encodeURI(o("login"))}`),c()},children:o("Sign in")})]}),P("p",{className:"icon-activity",children:[f("span",{className:"icon",children:f(yg,{})}),f("span",{onClick:()=>{s(`/${encodeURI(o("register"))}`),c()},children:o("Register")})]})]})})]})]}),f(pc,{children:f(yE,{title:o("Shop")})}),P(pc,{children:[f(u1,{title:o("Wishlist")}),f(Lg,{children:"0"})]}),P(pc,{children:[f(c1,{title:o("Shopping Cart")}),f(Lg,{children:"0"})]})]})]})})},UT=F.div`
    background: ${e=>e.theme.white};
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
    z-index: 5;

    button {
        position: relative;
        font-size: 26px;
        color: ${e=>e.theme.eerieBlack};
        padding: 10px;


        span {
            background: ${e=>e.theme.primary};
            color: ${e=>e.theme.white};
            position: absolute;
            top: 0;
            right: 0;
            font-size: 12px;
            font-weight: 500;
            line-height: 1;
            padding: 2px 4px;
            border-radius: 20px;
        }
    }

    @media (min-width: 480px) {
        border-top-left-radius: ${e=>e.theme.borderRadiusMd};
        border-top-right-radius: ${e=>e.theme.borderRadiusMd};
    }

    @media (min-width: 1024px) {
        display: none;
    }

`;function BT(e){return ye({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{stroke:"#000",strokeWidth:"2",d:"M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"}}]})(e)}const HT=()=>{const{toggleMenu:e}=C.exports.useContext($s);return P(UT,{children:[f("button",{onClick:e,children:f(gE,{title:"Menu"})}),P("button",{children:[f(c1,{title:"Shopping Cart"}),f("span",{children:"0"})]}),f("button",{children:f(BT,{title:"Home"})}),P("button",{children:[f(u1,{title:"Wishlist"}),f("span",{children:"0"})]}),f("button",{onClick:e,children:f(Z_,{title:"Category"})})]})},VT=F.nav`
    ${i_};

    background: ${e=>e.theme.white};
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    max-width: 320px;
    height: 100vh;
    padding: 20px;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
    overflow-y: scroll;
    overscroll-behavior: contain;
    visibility: hidden;
    transition: 0.5s ease;
    z-index: 20;

    ${e=>e.active&&Ee`
         left: 0;
        visibility: visible;
  `}
`,WT=F.div`
    padding-bottom: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${e=>e.theme.cultured};

    h2 {
        color:  ${e=>e.theme.primary};
        font-size:  ${e=>e.theme.fontlg};
        font-weight: 600;
    }

    button {
        color: ${e=>e.theme.eerieBlack};
        font-size: ${e=>e.theme.fontlg};
    }
`,GT=F.ul`
     margin-bottom: 30px;
`,ai=F.li`
    border-bottom: 1px solid  ${e=>e.theme.cultured};
`,wo=F.p`
    color: ${e=>e.theme.eerieBlack};
    font-size:  ${e=>e.theme.fontsm};
    font-weight: 500;
    padding: 12px 0;
`,bo=F.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    div {
        font-size:  ${e=>e.theme.fontxl};

        svg {
            fill: ${e=>e.theme.eerieBlack};
    }

    }
    
`,So=F.ul`
    margin-left: 10px;
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: 0.6s ease-in-out;

    ${e=>e.toggle&&Ee`
        max-height: 148px;
        visibility: visible;
  `}
`,Pe=F.li`
    a {
        padding: 6px 0;
        font-size: ${e=>e.theme.fontsm};
        color:  ${e=>e.theme.onyx};
        font-weight: 300;

        &:hover {
            color: ${e=>e.theme.primary};
        }
    }
`,qT=F.div`

    ul {
        margin-bottom: 20px;

        li {
            border-bottom: none;

            p.menu-title {
                font-size: ${e=>e.theme.fontsm};
                font-weight: 500;
                color: ${e=>e.theme.eerieBlack};
                padding: 12px 0;
            }


            /*submenucategorylist*/
            ul {
                border: 1px solid  ${e=>e.theme.cultured};
                border-radius: ${e=>e.theme.borderRadiusMd};
                padding: 0 15px;
                margin-left: 0;
                box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.05);
               
                /*submenucategory*/
                li {
                    font-size:  ${e=>e.theme.font3xl};
                    padding: 5px 0;

                    &:not(:last-child) { 
                    border-bottom: 1px solid ${e=>e.theme.cultured};
                 }
                }
            }
        }
    }
`,KT=F.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    top: 60px;

   li {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:  ${e=>e.theme.borderRadiusMd};


        &:nth-child(1) {
            background: #1877f2; 
            
            &:hover {
                background: #0d6fed; 
            }
        }
        &:nth-child(2) {
            background: #55acee;

            &:hover {
                background: #47a5ed;  
            }
        }

        &:nth-child(3) {
            background: #cb2027; 

            &:hover {
                background: #be1e24;  
            }
        }

        &:nth-child(4) {
            background: linear-gradient(29.61deg, #f38334 0%, #da2e7d 50.39%, #6b54c6 100%);

            &:hover {
                background: linear-gradient(29.61deg, #e6670e 0%, #b52064 50.39%, #513aad 100%);

            }
        }

        &:nth-child(5) {
            background: #b00;

            &:hover {
                background: #ac0000;
            }
        }

        

        a {
        font-size: 20px;
        padding: 8px;


        img {
            width: 100%;
            height: auto;
            max-height: 20px;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
   }
`,YT=()=>{const{isMenuOpen:e,closeMenu:t,toggleAccordion:n,isAccordionOpen:r,accordionClick:i}=C.exports.useContext($s),{t:o}=nn(),s=a=>{const l="https://wizcart.netlify.app/";window.location.replace(l+"?lng="+a)};return P(VT,{active:e,className:"mobile-nav-bar",children:[P(WT,{children:[f("h2",{children:o("Menu")}),f("button",{onClick:t,children:f(oE,{title:o("Close")})})]}),P(GT,{children:[f(ai,{children:f(wo,{children:o("Home")})}),P(ai,{children:[P(bo,{onClick:()=>n(1),children:[f(wo,{children:"Marks & Spencer"}),f("div",{children:r&&i===1?f(ua,{className:"remove-icon",title:o("close")}):f(la,{className:"add-icon",title:o("open")})})]}),f(So,{toggle:r,children:i===1&&P(rt,{children:[f(Pe,{children:f("a",{href:"#",children:o("Women's")})}),f(Pe,{children:f("a",{href:"#",children:o("Men's")})}),f(Pe,{children:f("a",{href:"#",children:o("Kids'")})}),f(Pe,{children:f("a",{href:"#",children:o("Beauty")})})]})})]}),P(ai,{children:[P(bo,{onClick:()=>n(2),children:[f(wo,{children:"Harry Potter's"}),f("div",{children:r&&i===2?f(ua,{className:"remove-icon",title:o("close")}):f(la,{className:"add-icon",title:o("open")})})]}),f(So,{toggle:r,children:i===2&&P(rt,{children:[f(Pe,{children:f("a",{href:"#",children:o("Wands")})}),f(Pe,{children:f("a",{href:"#",children:o("Trunks")})}),f(Pe,{children:f("a",{href:"#",children:o("Clothing")})}),f(Pe,{children:P("a",{href:"#",children:[o("Sweets")," & ",o("Treats")]})})]})})]}),P(ai,{children:[P(bo,{onClick:()=>n(3),children:[f(wo,{children:"James Smith & Sons"}),f("div",{children:r&&i===3?f(ua,{className:"remove-icon",title:o("close")}):f(la,{className:"add-icon",title:o("open")})})]}),f(So,{toggle:r,children:i===3&&P(rt,{children:[f(Pe,{children:f("a",{href:"#",children:o("Folding Umbrellas")})}),f(Pe,{children:f("a",{href:"#",children:o("Sun Umbrellas")})}),f(Pe,{children:f("a",{href:"#",children:o("Walking Sticks")})}),f(Pe,{children:f("a",{href:"#",children:o("Seat Sticks")})})]})})]}),P(ai,{children:[P(bo,{onClick:()=>n(4),children:[f(wo,{children:"Twinings"}),f("div",{children:r&&i===4?f(ua,{className:"remove-icon",title:o("close")}):f(la,{className:"add-icon",title:o("open")})})]}),f(So,{toggle:r,children:i===4&&P(rt,{children:[f(Pe,{children:f("a",{href:"#",children:o("Tea")})}),f(Pe,{children:f("a",{href:"#",children:o("Wellbeing Drinks")})}),f(Pe,{children:f("a",{href:"#",children:o("Teaware")})}),f(Pe,{children:f("a",{href:"#",children:o("Treats")})})]})})]})]}),P(qT,{children:[f("ul",{children:P(ai,{children:[P(bo,{onClick:()=>n(5),children:[f("p",{className:"menu-title",children:o("Language")}),r&&i===5?f(pE,{}):f(hE,{})]}),f(So,{toggle:r,children:i===5&&P(rt,{children:[f(Pe,{children:f("button",{onClick:()=>s("ms"),title:o("Malay"),children:f(Ad,{})})}),f(Pe,{children:f("button",{onClick:()=>s("zh"),title:o("Chinese"),children:f(Pd,{})})}),f(Pe,{children:f("button",{onClick:()=>s("en"),title:o("English"),children:f(Rd,{})})})]})})]})}),P(KT,{children:[f("li",{children:f("a",{href:"#",children:f("img",{src:op,alt:"facebook",title:"facebook"})})}),f("li",{children:f("a",{href:"#",children:f("img",{src:sp,alt:"twitter",title:"twitter"})})}),f("li",{children:f("a",{href:"#",className:"social-link",children:f("img",{src:lp,alt:"pinterest",title:"pinterest"})})}),f("li",{children:f("a",{href:"#",className:"social-link",children:f("img",{src:ap,alt:"instagram",title:"instagram"})})}),f("li",{children:f("a",{href:"#",children:f("img",{src:up,alt:"youtube",title:"youtube"})})})]})]})]})},XT=F.header``,QT=()=>P(XT,{children:[f(fE,{}),f(FT,{}),f(HT,{}),f(YT,{})]});function Ng(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function hp(e={},t={}){Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Ng(t[n])&&Ng(e[n])&&Object.keys(t[n]).length>0&&hp(e[n],t[n])})}const z1={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ke(){const e=typeof document<"u"?document:{};return hp(e,z1),e}const JT={document:z1,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Fe(){const e=typeof window<"u"?window:{};return hp(e,JT),e}function ZT(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(n){t.__proto__=n}})}class Kn extends Array{constructor(t){typeof t=="number"?super(t):(super(...t||[]),ZT(this))}}function Ms(e=[]){const t=[];return e.forEach(n=>{Array.isArray(n)?t.push(...Ms(n)):t.push(n)}),t}function j1(e,t){return Array.prototype.filter.call(e,t)}function eC(e){const t=[];for(let n=0;n<e.length;n+=1)t.indexOf(e[n])===-1&&t.push(e[n]);return t}function tC(e,t){if(typeof e!="string")return[e];const n=[],r=t.querySelectorAll(e);for(let i=0;i<r.length;i+=1)n.push(r[i]);return n}function V(e,t){const n=Fe(),r=Ke();let i=[];if(!t&&e instanceof Kn)return e;if(!e)return new Kn(i);if(typeof e=="string"){const o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){let s="div";o.indexOf("<li")===0&&(s="ul"),o.indexOf("<tr")===0&&(s="tbody"),(o.indexOf("<td")===0||o.indexOf("<th")===0)&&(s="tr"),o.indexOf("<tbody")===0&&(s="table"),o.indexOf("<option")===0&&(s="select");const a=r.createElement(s);a.innerHTML=o;for(let l=0;l<a.childNodes.length;l+=1)i.push(a.childNodes[l])}else i=tC(e.trim(),t||r)}else if(e.nodeType||e===n||e===r)i.push(e);else if(Array.isArray(e)){if(e instanceof Kn)return e;i=e}return new Kn(eC(i))}V.fn=Kn.prototype;function nC(...e){const t=Ms(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.add(...t)}),this}function rC(...e){const t=Ms(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.remove(...t)}),this}function iC(...e){const t=Ms(e.map(n=>n.split(" ")));this.forEach(n=>{t.forEach(r=>{n.classList.toggle(r)})})}function oC(...e){const t=Ms(e.map(n=>n.split(" ")));return j1(this,n=>t.filter(r=>n.classList.contains(r)).length>0).length>0}function sC(e,t){if(arguments.length===1&&typeof e=="string")return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(e,t);else for(const r in e)this[n][r]=e[r],this[n].setAttribute(r,e[r]);return this}function aC(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function lC(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function uC(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration=typeof e!="string"?`${e}ms`:e;return this}function cC(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);function o(u){const c=u.target;if(!c)return;const d=u.target.dom7EventData||[];if(d.indexOf(u)<0&&d.unshift(u),V(c).is(n))r.apply(c,d);else{const h=V(c).parents();for(let v=0;v<h.length;v+=1)V(h[v]).is(n)&&r.apply(h[v],d)}}function s(u){const c=u&&u.target?u.target.dom7EventData||[]:[];c.indexOf(u)<0&&c.unshift(u),r.apply(this,c)}const a=t.split(" ");let l;for(let u=0;u<this.length;u+=1){const c=this[u];if(n)for(l=0;l<a.length;l+=1){const d=a[l];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[d]||(c.dom7LiveListeners[d]=[]),c.dom7LiveListeners[d].push({listener:r,proxyListener:o}),c.addEventListener(d,o,i)}else for(l=0;l<a.length;l+=1){const d=a[l];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[d]||(c.dom7Listeners[d]=[]),c.dom7Listeners[d].push({listener:r,proxyListener:s}),c.addEventListener(d,s,i)}}return this}function dC(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);const o=t.split(" ");for(let s=0;s<o.length;s+=1){const a=o[s];for(let l=0;l<this.length;l+=1){const u=this[l];let c;if(!n&&u.dom7Listeners?c=u.dom7Listeners[a]:n&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[a]),c&&c.length)for(let d=c.length-1;d>=0;d-=1){const h=c[d];r&&h.listener===r||r&&h.listener&&h.listener.dom7proxy&&h.listener.dom7proxy===r?(u.removeEventListener(a,h.proxyListener,i),c.splice(d,1)):r||(u.removeEventListener(a,h.proxyListener,i),c.splice(d,1))}}}return this}function fC(...e){const t=Fe(),n=e[0].split(" "),r=e[1];for(let i=0;i<n.length;i+=1){const o=n[i];for(let s=0;s<this.length;s+=1){const a=this[s];if(t.CustomEvent){const l=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0});a.dom7EventData=e.filter((u,c)=>c>0),a.dispatchEvent(l),a.dom7EventData=[],delete a.dom7EventData}}}return this}function pC(e){const t=this;function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))}return e&&t.on("transitionend",n),this}function hC(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function gC(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function mC(){if(this.length>0){const e=Fe(),t=Ke(),n=this[0],r=n.getBoundingClientRect(),i=t.body,o=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,a=n===e?e.scrollY:n.scrollTop,l=n===e?e.scrollX:n.scrollLeft;return{top:r.top+a-o,left:r.left+l-s}}return null}function vC(){const e=Fe();return this[0]?e.getComputedStyle(this[0],null):{}}function yC(e,t){const n=Fe();let r;if(arguments.length===1)if(typeof e=="string"){if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(r=0;r<this.length;r+=1)for(const i in e)this[r].style[i]=e[i];return this}if(arguments.length===2&&typeof e=="string"){for(r=0;r<this.length;r+=1)this[r].style[e]=t;return this}return this}function wC(e){return e?(this.forEach((t,n)=>{e.apply(t,[t,n])}),this):this}function bC(e){const t=j1(this,e);return V(t)}function SC(e){if(typeof e>"u")return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function xC(e){if(typeof e>"u")return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function _C(e){const t=Fe(),n=Ke(),r=this[0];let i,o;if(!r||typeof e>"u")return!1;if(typeof e=="string"){if(r.matches)return r.matches(e);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(r.msMatchesSelector)return r.msMatchesSelector(e);for(i=V(e),o=0;o<i.length;o+=1)if(i[o]===r)return!0;return!1}if(e===n)return r===n;if(e===t)return r===t;if(e.nodeType||e instanceof Kn){for(i=e.nodeType?[e]:e,o=0;o<i.length;o+=1)if(i[o]===r)return!0;return!1}return!1}function EC(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function kC(e){if(typeof e>"u")return this;const t=this.length;if(e>t-1)return V([]);if(e<0){const n=t+e;return n<0?V([]):V([this[n]])}return V([this[e]])}function TC(...e){let t;const n=Ke();for(let r=0;r<e.length;r+=1){t=e[r];for(let i=0;i<this.length;i+=1)if(typeof t=="string"){const o=n.createElement("div");for(o.innerHTML=t;o.firstChild;)this[i].appendChild(o.firstChild)}else if(t instanceof Kn)for(let o=0;o<t.length;o+=1)this[i].appendChild(t[o]);else this[i].appendChild(t)}return this}function CC(e){const t=Ke();let n,r;for(n=0;n<this.length;n+=1)if(typeof e=="string"){const i=t.createElement("div");for(i.innerHTML=e,r=i.childNodes.length-1;r>=0;r-=1)this[n].insertBefore(i.childNodes[r],this[n].childNodes[0])}else if(e instanceof Kn)for(r=0;r<e.length;r+=1)this[n].insertBefore(e[r],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function IC(e){return this.length>0?e?this[0].nextElementSibling&&V(this[0].nextElementSibling).is(e)?V([this[0].nextElementSibling]):V([]):this[0].nextElementSibling?V([this[0].nextElementSibling]):V([]):V([])}function OC(e){const t=[];let n=this[0];if(!n)return V([]);for(;n.nextElementSibling;){const r=n.nextElementSibling;e?V(r).is(e)&&t.push(r):t.push(r),n=r}return V(t)}function PC(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&V(t.previousElementSibling).is(e)?V([t.previousElementSibling]):V([]):t.previousElementSibling?V([t.previousElementSibling]):V([])}return V([])}function RC(e){const t=[];let n=this[0];if(!n)return V([]);for(;n.previousElementSibling;){const r=n.previousElementSibling;e?V(r).is(e)&&t.push(r):t.push(r),n=r}return V(t)}function AC(e){const t=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(e?V(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return V(t)}function LC(e){const t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)e?V(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return V(t)}function NC(e){let t=this;return typeof e>"u"?V([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function $C(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(e);for(let i=0;i<r.length;i+=1)t.push(r[i])}return V(t)}function MC(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].children;for(let i=0;i<r.length;i+=1)(!e||V(r[i]).is(e))&&t.push(r[i])}return V(t)}function DC(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}const $g={addClass:nC,removeClass:rC,hasClass:oC,toggleClass:iC,attr:sC,removeAttr:aC,transform:lC,transition:uC,on:cC,off:dC,trigger:fC,transitionEnd:pC,outerWidth:hC,outerHeight:gC,styles:vC,offset:mC,css:yC,each:wC,html:SC,text:xC,is:_C,index:EC,eq:kC,append:TC,prepend:CC,next:IC,nextAll:OC,prev:PC,prevAll:RC,parent:AC,parents:LC,closest:NC,find:$C,children:MC,filter:bC,remove:DC};Object.keys($g).forEach(e=>{Object.defineProperty(V.fn,e,{value:$g[e],writable:!0})});function zC(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function gl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function ys(){return Date.now()}function jC(e){const t=Fe();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function FC(e,t){t===void 0&&(t="x");const n=Fe();let r,i,o;const s=jC(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function ca(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function UC(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function St(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!UC(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const a=i[o],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(ca(e[a])&&ca(r[a])?r[a].__swiper__?e[a]=r[a]:St(e[a],r[a]):!ca(e[a])&&ca(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:St(e[a],r[a])):e[a]=r[a])}}}return e}function da(e,t,n){e.style.setProperty(t,n)}function F1(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Fe(),o=-t.translate;let s=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",c=(h,v)=>u==="next"&&h>=v||u==="prev"&&h<=v,d=()=>{a=new Date().getTime(),s===null&&(s=a);const h=Math.max(Math.min((a-s)/l,1),0),v=.5-Math.cos(h*Math.PI)/2;let y=o+v*(n-o);if(c(y,n)&&(y=n),t.wrapperEl.scrollTo({[r]:y}),c(y,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:y})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(d)};d()}let hc;function BC(){const e=Fe(),t=Ke();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let r=!1;try{const i=Object.defineProperty({},"passive",{get(){r=!0}});e.addEventListener("testPassiveListener",null,i)}catch{}return r}(),gestures:function(){return"ongesturestart"in e}()}}function U1(){return hc||(hc=BC()),hc}let gc;function HC(e){let{userAgent:t}=e===void 0?{}:e;const n=U1(),r=Fe(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let c=o.match(/(iPad).*OS\s([\d_]+)/);const d=o.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let y=i==="MacIntel";const b=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&y&&n.touch&&b.indexOf(`${a}x${l}`)>=0&&(c=o.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),y=!1),u&&!v&&(s.os="android",s.android=!0),(c||h||d)&&(s.os="ios",s.ios=!0),s}function VC(e){return e===void 0&&(e={}),gc||(gc=HC(e)),gc}let mc;function WC(){const e=Fe();function t(){const n=e.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function GC(){return mc||(mc=WC()),mc}function qC(e){let{swiper:t,on:n,emit:r}=e;const i=Fe();let o=null,s=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(d=>{s=i.requestAnimationFrame(()=>{const{width:h,height:v}=t;let y=h,b=v;d.forEach(w=>{let{contentBoxSize:p,contentRect:g,target:m}=w;m&&m!==t.el||(y=g?g.width:(p[0]||p).inlineSize,b=g?g.height:(p[0]||p).blockSize)}),(y!==h||b!==v)&&a()})}),o.observe(t.el))},u=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},c=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}function KC(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=Fe(),a=function(c,d){d===void 0&&(d={});const h=s.MutationObserver||s.WebkitMutationObserver,v=new h(y=>{if(y.length===1){i("observerUpdate",y[0]);return}const b=function(){i("observerUpdate",y[0])};s.requestAnimationFrame?s.requestAnimationFrame(b):s.setTimeout(b,0)});v.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),o.push(v)},l=()=>{if(!!t.params.observer){if(t.params.observeParents){const c=t.$el.parents();for(let d=0;d<c.length;d+=1)a(c[d])}a(t.$el[0],{childList:t.params.observeSlideChildren}),a(t.$wrapperEl[0],{attributes:!1})}},u=()=>{o.forEach(c=>{c.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}const YC={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function XC(){const e=this;let t,n;const r=e.$el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r[0].clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r[0].clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10),n=n-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function QC(){const e=this;function t(O){return e.isHorizontal()?O:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[O]}function n(O,R){return parseFloat(O.getPropertyValue(t(R))||0)}const r=e.params,{$wrapperEl:i,size:o,rtlTranslate:s,wrongRTL:a}=e,l=e.virtual&&r.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),d=l?e.virtual.slides.length:c.length;let h=[];const v=[],y=[];let b=r.slidesOffsetBefore;typeof b=="function"&&(b=r.slidesOffsetBefore.call(e));let w=r.slidesOffsetAfter;typeof w=="function"&&(w=r.slidesOffsetAfter.call(e));const p=e.snapGrid.length,g=e.slidesGrid.length;let m=r.spaceBetween,S=-b,k=0,T=0;if(typeof o>"u")return;typeof m=="string"&&m.indexOf("%")>=0&&(m=parseFloat(m.replace("%",""))/100*o),e.virtualSize=-m,s?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(da(e.wrapperEl,"--swiper-centered-offset-before",""),da(e.wrapperEl,"--swiper-centered-offset-after",""));const _=r.grid&&r.grid.rows>1&&e.grid;_&&e.grid.initSlides(d);let x;const N=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(O=>typeof r.breakpoints[O].slidesPerView<"u").length>0;for(let O=0;O<d;O+=1){x=0;const R=c.eq(O);if(_&&e.grid.updateSlide(O,R,d,t),R.css("display")!=="none"){if(r.slidesPerView==="auto"){N&&(c[O].style[t("width")]="");const z=getComputedStyle(R[0]),K=R[0].style.transform,E=R[0].style.webkitTransform;if(K&&(R[0].style.transform="none"),E&&(R[0].style.webkitTransform="none"),r.roundLengths)x=e.isHorizontal()?R.outerWidth(!0):R.outerHeight(!0);else{const A=n(z,"width"),G=n(z,"padding-left"),X=n(z,"padding-right"),L=n(z,"margin-left"),$=n(z,"margin-right"),q=z.getPropertyValue("box-sizing");if(q&&q==="border-box")x=A+L+$;else{const{clientWidth:Z,offsetWidth:j}=R[0];x=A+G+X+L+$+(j-Z)}}K&&(R[0].style.transform=K),E&&(R[0].style.webkitTransform=E),r.roundLengths&&(x=Math.floor(x))}else x=(o-(r.slidesPerView-1)*m)/r.slidesPerView,r.roundLengths&&(x=Math.floor(x)),c[O]&&(c[O].style[t("width")]=`${x}px`);c[O]&&(c[O].swiperSlideSize=x),y.push(x),r.centeredSlides?(S=S+x/2+k/2+m,k===0&&O!==0&&(S=S-o/2-m),O===0&&(S=S-o/2-m),Math.abs(S)<1/1e3&&(S=0),r.roundLengths&&(S=Math.floor(S)),T%r.slidesPerGroup===0&&h.push(S),v.push(S)):(r.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&h.push(S),v.push(S),S=S+x+m),e.virtualSize+=x+m,k=x,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+w,s&&a&&(r.effect==="slide"||r.effect==="coverflow")&&i.css({width:`${e.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+r.spaceBetween}px`}),_&&e.grid.updateWrapperSize(x,h,t),!r.centeredSlides){const O=[];for(let R=0;R<h.length;R+=1){let z=h[R];r.roundLengths&&(z=Math.floor(z)),h[R]<=e.virtualSize-o&&O.push(z)}h=O,Math.floor(e.virtualSize-o)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-o)}if(h.length===0&&(h=[0]),r.spaceBetween!==0){const O=e.isHorizontal()&&s?"marginLeft":t("marginRight");c.filter((R,z)=>r.cssMode?z!==c.length-1:!0).css({[O]:`${m}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let O=0;y.forEach(z=>{O+=z+(r.spaceBetween?r.spaceBetween:0)}),O-=r.spaceBetween;const R=O-o;h=h.map(z=>z<0?-b:z>R?R+w:z)}if(r.centerInsufficientSlides){let O=0;if(y.forEach(R=>{O+=R+(r.spaceBetween?r.spaceBetween:0)}),O-=r.spaceBetween,O<o){const R=(o-O)/2;h.forEach((z,K)=>{h[K]=z-R}),v.forEach((z,K)=>{v[K]=z+R})}}if(Object.assign(e,{slides:c,snapGrid:h,slidesGrid:v,slidesSizesGrid:y}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){da(e.wrapperEl,"--swiper-centered-offset-before",`${-h[0]}px`),da(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const O=-e.snapGrid[0],R=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(z=>z+O),e.slidesGrid=e.slidesGrid.map(z=>z+R)}if(d!==u&&e.emit("slidesLengthChange"),h.length!==p&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==g&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!l&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const O=`${r.containerModifierClass}backface-hidden`,R=e.$el.hasClass(O);d<=r.maxBackfaceHiddenSlides?R||e.$el.addClass(O):R&&e.$el.removeClass(O)}}function JC(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=a=>r?t.slides.filter(l=>parseInt(l.getAttribute("data-swiper-slide-index"),10)===a)[0]:t.slides.eq(a)[0];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||V([])).each(a=>{n.push(a)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const a=t.activeIndex+o;if(a>t.slides.length&&!r)break;n.push(s(a))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const a=n[o].offsetHeight;i=a>i?a:i}(i||i===0)&&t.$wrapperEl.css("height",`${i}px`)}function ZC(){const e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}function eI(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let a=0;a<r.length;a+=1){const l=r[a];let u=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const c=(s+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+n.spaceBetween),d=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+n.spaceBetween),h=-(s-u),v=h+t.slidesSizesGrid[a];(h>=0&&h<t.size-1||v>1&&v<=t.size||h<=0&&v>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(a),r.eq(a).addClass(n.slideVisibleClass)),l.progress=i?-c:c,l.originalProgress=i?-d:d}t.visibleSlides=V(t.visibleSlides)}function tI(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s}=t;const a=o,l=s;r===0?(i=0,o=!0,s=!0):(i=(e-t.minTranslate())/r,o=i<=0,s=i>=1),Object.assign(t,{progress:i,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!a&&t.emit("reachBeginning toEdge"),s&&!l&&t.emit("reachEnd toEdge"),(a&&!o||l&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}function nI(){const e=this,{slides:t,params:n,$wrapperEl:r,activeIndex:i,realIndex:o}=e,s=e.virtual&&n.virtual.enabled;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);let a;s?a=e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`):a=t.eq(i),a.addClass(n.slideActiveClass),n.loop&&(a.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));let l=a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&l.length===0&&(l=t.eq(0),l.addClass(n.slideNextClass));let u=a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&u.length===0&&(u=t.eq(-1),u.addClass(n.slidePrevClass)),n.loop&&(l.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),u.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()}function rI(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:r,snapGrid:i,params:o,activeIndex:s,realIndex:a,snapIndex:l}=t;let u=e,c;if(typeof u>"u"){for(let h=0;h<r.length;h+=1)typeof r[h+1]<"u"?n>=r[h]&&n<r[h+1]-(r[h+1]-r[h])/2?u=h:n>=r[h]&&n<r[h+1]&&(u=h+1):n>=r[h]&&(u=h);o.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0)}if(i.indexOf(n)>=0)c=i.indexOf(n);else{const h=Math.min(o.slidesPerGroupSkip,u);c=h+Math.floor((u-h)/o.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),u===s){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}const d=parseInt(t.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(t,{snapIndex:c,realIndex:d,previousIndex:s,activeIndex:u}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function iI(e){const t=this,n=t.params,r=V(e).closest(`.${n.slideClass}`)[0];let i=!1,o;if(r){for(let s=0;s<t.slides.length;s+=1)if(t.slides[s]===r){i=!0,o=s;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(V(r).attr("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const oI={updateSize:XC,updateSlides:QC,updateAutoHeight:JC,updateSlidesOffset:ZC,updateSlidesProgress:eI,updateProgress:tI,updateSlidesClasses:nI,updateActiveIndex:rI,updateClickedSlide:iI};function sI(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,$wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=FC(o[0],e);return r&&(s=-s),s||0}function aI(e,t){const n=this,{rtlTranslate:r,params:i,$wrapperEl:o,wrapperEl:s,progress:a}=n;let l=0,u=0;const c=0;n.isHorizontal()?l=r?-e:e:u=e,i.roundLengths&&(l=Math.floor(l),u=Math.floor(u)),i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-u:i.virtualTranslate||o.transform(`translate3d(${l}px, ${u}px, ${c}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:u;let d;const h=n.maxTranslate()-n.minTranslate();h===0?d=0:d=(e-n.minTranslate())/h,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function lI(){return-this.snapGrid[0]}function uI(){return-this.snapGrid[this.snapGrid.length-1]}function cI(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:a}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const l=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,o.updateProgress(c),s.cssMode){const d=o.isHorizontal();if(t===0)a[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return F1({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(h){!o||o.destroyed||h.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}const dI={getTranslate:sI,setTranslate:aI,minTranslate:lI,maxTranslate:uI,translateTo:cI};function fI(e,t){const n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)}function B1(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let a=r;if(a||(o>s?a="next":o<s?a="prev":a="reset"),t.emit(`transition${i}`),n&&o!==s){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function pI(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),B1({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function hI(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),B1({swiper:n,runCallbacks:e,direction:t,step:"End"}))}const gI={setTransition:fI,transitionStart:pI,transitionEnd:hI};function mI(e,t,n,r,i){if(e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e!="number"&&typeof e!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if(typeof e=="string"){const m=parseInt(e,10);if(!isFinite(m))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=m}const o=this;let s=e;s<0&&(s=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:h,wrapperEl:v,enabled:y}=o;if(o.animating&&a.preventInteractionOnTransition||!y&&!r&&!i)return!1;const b=Math.min(o.params.slidesPerGroupSkip,s);let w=b+Math.floor((s-b)/o.params.slidesPerGroup);w>=l.length&&(w=l.length-1),(d||a.initialSlide||0)===(c||0)&&n&&o.emit("beforeSlideChangeStart");const p=-l[w];if(o.updateProgress(p),a.normalizeSlideIndex)for(let m=0;m<u.length;m+=1){const S=-Math.floor(p*100),k=Math.floor(u[m]*100),T=Math.floor(u[m+1]*100);typeof u[m+1]<"u"?S>=k&&S<T-(T-k)/2?s=m:S>=k&&S<T&&(s=m+1):S>=k&&(s=m)}if(o.initialized&&s!==d&&(!o.allowSlideNext&&p<o.translate&&p<o.minTranslate()||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==s))return!1;let g;if(s>d?g="next":s<d?g="prev":g="reset",h&&-p===o.translate||!h&&p===o.translate)return o.updateActiveIndex(s),a.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),a.effect!=="slide"&&o.setTranslate(p),g!=="reset"&&(o.transitionStart(n,g),o.transitionEnd(n,g)),!1;if(a.cssMode){const m=o.isHorizontal(),S=h?p:-p;if(t===0){const k=o.virtual&&o.params.virtual.enabled;k&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),v[m?"scrollLeft":"scrollTop"]=S,k&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._swiperImmediateVirtual=!1})}else{if(!o.support.smoothScroll)return F1({swiper:o,targetPosition:S,side:m?"left":"top"}),!0;v.scrollTo({[m?"left":"top"]:S,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,g),t===0?o.transitionEnd(n,g):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(S){!o||o.destroyed||S.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,g))}),o.$wrapperEl[0].addEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd)),!0}function vI(e,t,n,r){if(e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"){const s=parseInt(e,10);if(!isFinite(s))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=s}const i=this;let o=e;return i.params.loop&&(o+=i.loopedSlides),i.slideTo(o,t,n,r)}function yI(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{animating:i,enabled:o,params:s}=r;if(!o)return r;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a;if(s.loop){if(i&&s.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function wI(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,animating:o,snapGrid:s,slidesGrid:a,rtlTranslate:l,enabled:u}=r;if(!u)return r;if(i.loop){if(o&&i.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}const c=l?r.translate:-r.translate;function d(w){return w<0?-Math.floor(Math.abs(w)):Math.floor(w)}const h=d(c),v=s.map(w=>d(w));let y=s[v.indexOf(h)-1];if(typeof y>"u"&&i.cssMode){let w;s.forEach((p,g)=>{h>=p&&(w=g)}),typeof w<"u"&&(y=s[w>0?w-1:w])}let b=0;if(typeof y<"u"&&(b=a.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const w=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(w,e,t,n)}return r.slideTo(b,e,t,n)}function bI(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function SI(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),a=s+Math.floor((o-s)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],c=i.snapGrid[a+1];l-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],c=i.snapGrid[a];l-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function xI(){const e=this,{params:t,$wrapperEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;if(t.loop){if(e.animating)return;o=parseInt(V(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),gl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),gl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}const _I={slideTo:mI,slideToLoop:vI,slideNext:yI,slidePrev:wI,slideReset:bI,slideToClosest:SI,slideToClickedSlide:xI};function EI(){const e=this,t=Ke(),{params:n,$wrapperEl:r}=e,i=r.children().length>0?V(r.children()[0].parentNode):r;i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let o=i.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){const l=n.slidesPerGroup-o.length%n.slidesPerGroup;if(l!==n.slidesPerGroup){for(let u=0;u<l;u+=1){const c=V(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);i.append(c)}o=i.children(`.${n.slideClass}`)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=o.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>o.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=o.length);const s=[],a=[];o.each((l,u)=>{V(l).attr("data-swiper-slide-index",u)});for(let l=0;l<e.loopedSlides;l+=1){const u=l-Math.floor(l/o.length)*o.length;a.push(o.eq(u)[0]),s.unshift(o.eq(o.length-u-1)[0])}for(let l=0;l<a.length;l+=1)i.append(V(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let l=s.length-1;l>=0;l-=1)i.prepend(V(s[l].cloneNode(!0)).addClass(n.slideDuplicateClass))}function kI(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:n,loopedSlides:r,allowSlidePrev:i,allowSlideNext:o,snapGrid:s,rtlTranslate:a}=e;let l;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-s[t]-e.getTranslate();t<r?(l=n.length-r*3+t,l+=r,e.slideTo(l,0,!1,!0)&&c!==0&&e.setTranslate((a?-e.translate:e.translate)-c)):t>=n.length-r&&(l=-n.length+t+r,l+=r,e.slideTo(l,0,!1,!0)&&c!==0&&e.setTranslate((a?-e.translate:e.translate)-c)),e.allowSlidePrev=i,e.allowSlideNext=o,e.emit("loopFix")}function TI(){const e=this,{$wrapperEl:t,params:n,slides:r}=e;t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),r.removeAttr("data-swiper-slide-index")}const CI={loopCreate:EI,loopFix:kI,loopDestroy:TI};function II(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}function OI(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const PI={setGrabCursor:II,unsetGrabCursor:OI};function RI(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Ke()||r===Fe())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function AI(e){const t=this,n=Ke(),r=Fe(),i=t.touchEventsData,{params:o,touches:s,enabled:a}=t;if(!a||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let u=V(l.target);if(o.touchEventsTarget==="wrapper"&&!u.closest(t.wrapperEl).length||(i.isTouchEvent=l.type==="touchstart",!i.isTouchEvent&&"which"in l&&l.which===3)||!i.isTouchEvent&&"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;!!o.noSwipingClass&&o.noSwipingClass!==""&&l.target&&l.target.shadowRoot&&e.path&&e.path[0]&&(u=V(e.path[0]));const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,h=!!(l.target&&l.target.shadowRoot);if(o.noSwiping&&(h?RI(d,u[0]):u.closest(d)[0])){t.allowClick=!0;return}if(o.swipeHandler&&!u.closest(o.swipeHandler)[0])return;s.currentX=l.type==="touchstart"?l.targetTouches[0].pageX:l.pageX,s.currentY=l.type==="touchstart"?l.targetTouches[0].pageY:l.pageY;const v=s.currentX,y=s.currentY,b=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,w=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(b&&(v<=w||v>=r.innerWidth-w))if(b==="prevent")e.preventDefault();else return;if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=v,s.startY=y,i.touchStartTime=ys(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1),l.type!=="touchstart"){let p=!0;u.is(i.focusableElements)&&(p=!1,u[0].nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&V(n.activeElement).is(i.focusableElements)&&n.activeElement!==u[0]&&n.activeElement.blur();const g=p&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||g)&&!u[0].isContentEditable&&l.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function LI(e){const t=Ke(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:a}=n;if(!a)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}if(r.isTouchEvent&&l.type!=="touchmove")return;const u=l.type==="touchmove"&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),c=l.type==="touchmove"?u.pageX:l.pageX,d=l.type==="touchmove"?u.pageY:l.pageY;if(l.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){V(l.target).is(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=ys());return}if(r.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate())return}if(r.isTouchEvent&&t.activeElement&&l.target===t.activeElement&&V(l.target).is(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;o.currentX=c,o.currentY=d;const h=o.currentX-o.startX,v=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(h**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let p;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:h*h+v*v>=25&&(p=Math.atan2(Math.abs(v),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?p>i.touchAngle:90-p>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation(),r.isMoved||(i.loop&&!i.cssMode&&n.loopFix(),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)),n.emit("sliderMove",l),r.isMoved=!0;let y=n.isHorizontal()?h:v;o.diff=y,y*=i.touchRatio,s&&(y=-y),n.swipeDirection=y>0?"prev":"next",r.currentTranslate=y+r.startTranslate;let b=!0,w=i.resistanceRatio;if(i.touchReleaseOnEdges&&(w=0),y>0&&r.currentTranslate>n.minTranslate()?(b=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**w)):y<0&&r.currentTranslate<n.maxTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**w)),b&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function NI(e){const t=this,n=t.touchEventsData,{params:r,touches:i,rtlTranslate:o,slidesGrid:s,enabled:a}=t;if(!a)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",l),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}r.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=ys(),c=u-n.touchStartTime;if(t.allowClick){const g=l.path||l.composedPath&&l.composedPath();t.updateClickedSlide(g&&g[0]||l.target),t.emit("tap click",l),c<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",l)}if(n.lastClickTime=ys(),gl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||i.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let d;if(r.followFinger?d=o?t.translate:-t.translate:d=-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:d});return}let h=0,v=t.slidesSizesGrid[0];for(let g=0;g<s.length;g+=g<r.slidesPerGroupSkip?1:r.slidesPerGroup){const m=g<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof s[g+m]<"u"?d>=s[g]&&d<s[g+m]&&(h=g,v=s[g+m]-s[g]):d>=s[g]&&(h=g,v=s[s.length-1]-s[s.length-2])}let y=null,b=null;r.rewind&&(t.isBeginning?b=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const w=(d-s[h])/v,p=h<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(c>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(w>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?y:h+p):t.slideTo(h)),t.swipeDirection==="prev"&&(w>1-r.longSwipesRatio?t.slideTo(h+p):b!==null&&w<0&&Math.abs(w)>r.longSwipesRatio?t.slideTo(b):t.slideTo(h))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(l.target===t.navigation.nextEl||l.target===t.navigation.prevEl)?l.target===t.navigation.nextEl?t.slideTo(h+p):t.slideTo(h):(t.swipeDirection==="next"&&t.slideTo(y!==null?y:h+p),t.swipeDirection==="prev"&&t.slideTo(b!==null?b:h))}}function Mg(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function $I(e){const t=this;!t.enabled||t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function MI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let Dg=!1;function DI(){}const H1=(e,t)=>{const n=Ke(),{params:r,touchEvents:i,el:o,wrapperEl:s,device:a,support:l}=e,u=!!r.nested,c=t==="on"?"addEventListener":"removeEventListener",d=t;if(!l.touch)o[c](i.start,e.onTouchStart,!1),n[c](i.move,e.onTouchMove,u),n[c](i.end,e.onTouchEnd,!1);else{const h=i.start==="touchstart"&&l.passiveListener&&r.passiveListeners?{passive:!0,capture:!1}:!1;o[c](i.start,e.onTouchStart,h),o[c](i.move,e.onTouchMove,l.passiveListener?{passive:!1,capture:u}:u),o[c](i.end,e.onTouchEnd,h),i.cancel&&o[c](i.cancel,e.onTouchEnd,h)}(r.preventClicks||r.preventClicksPropagation)&&o[c]("click",e.onClick,!0),r.cssMode&&s[c]("scroll",e.onScroll),r.updateOnWindowResize?e[d](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Mg,!0):e[d]("observerUpdate",Mg,!0)};function zI(){const e=this,t=Ke(),{params:n,support:r}=e;e.onTouchStart=AI.bind(e),e.onTouchMove=LI.bind(e),e.onTouchEnd=NI.bind(e),n.cssMode&&(e.onScroll=MI.bind(e)),e.onClick=$I.bind(e),r.touch&&!Dg&&(t.addEventListener("touchstart",DI),Dg=!0),H1(e,"on")}function jI(){H1(this,"off")}const FI={attachEvents:zI,detachEvents:jI},zg=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function UI(){const e=this,{activeIndex:t,initialized:n,loopedSlides:r=0,params:i,$el:o}=e,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const u=(a in s?s[a]:void 0)||e.originalParams,c=zg(e,i),d=zg(e,u),h=i.enabled;c&&!d?(o.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(o.addClass(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&o.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(w=>{const p=i[w]&&i[w].enabled,g=u[w]&&u[w].enabled;p&&!g&&e[w].disable(),!p&&g&&e[w].enable()});const v=u.direction&&u.direction!==i.direction,y=i.loop&&(u.slidesPerView!==i.slidesPerView||v);v&&n&&e.changeDirection(),St(e.params,u);const b=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!b?e.disable():!h&&b&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",u),y&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-r+e.loopedSlides,0,!1)),e.emit("breakpoint",u)}function BI(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Fe(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:o*l,point:a}}return{value:a,point:a}});s.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<s.length;a+=1){const{point:l,value:u}=s[a];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}const HI={setBreakpoint:UI,getBreakpoint:BI};function VI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function WI(){const e=this,{classNames:t,params:n,rtl:r,$el:i,device:o,support:s}=e,a=VI(["initialized",n.direction,{"pointer-events":!s.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.addClass([...t].join(" ")),e.emitContainerClasses()}function GI(){const e=this,{$el:t,classNames:n}=e;t.removeClass(n.join(" ")),e.emitContainerClasses()}const qI={addClasses:WI,removeClasses:GI};function KI(e,t,n,r,i,o){const s=Fe();let a;function l(){o&&o()}!V(e).parent("picture")[0]&&(!e.complete||!i)&&t?(a=new s.Image,a.onload=l,a.onerror=l,r&&(a.sizes=r),n&&(a.srcset=n),t&&(a.src=t)):l()}function YI(){const e=this;e.imagesToLoad=e.$el.find("img");function t(){typeof e>"u"||e===null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}for(let n=0;n<e.imagesToLoad.length;n+=1){const r=e.imagesToLoad[n];e.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),!0,t)}}const XI={loadImage:KI,preloadImages:YI};function QI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const JI={checkOverflow:QI},jg={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function ZI(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){St(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in o)){St(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),St(t,r)}}const vc={eventsEmitter:YC,update:oI,translate:dI,transition:gI,slide:_I,loop:CI,grabCursor:PI,events:FI,breakpoints:HI,checkOverflow:JI,classes:qI,images:XI},yc={};class tt{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];if(i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=St({},n),t&&!n.el&&(n.el=t),n.el&&V(n.el).length>1){const u=[];return V(n.el).each(c=>{const d=St({},n,{el:c});u.push(new tt(d))}),u}const s=this;s.__swiper__=!0,s.support=U1(),s.device=VC({userAgent:n.userAgent}),s.browser=GC(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const a={};s.modules.forEach(u=>{u({swiper:s,extendParams:ZI(n,a),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const l=St({},jg,a);return s.params=St({},l,yc,n),s.originalParams=St({},s.params),s.passedParams=St({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(u=>{s.on(u,s.params.on[u])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),s.$=V,Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:V(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEvents:function(){const c=["touchstart","touchmove","touchend","touchcancel"],d=["pointerdown","pointermove","pointerup"];return s.touchEventsTouch={start:c[0],move:c[1],end:c[2],cancel:c[3]},s.touchEventsDesktop={start:d[0],move:d[1],end:d[2]},s.support.touch||!s.params.simulateTouch?s.touchEventsTouch:s.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:ys(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;!t.enabled||(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.each(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:a,size:l,activeIndex:u}=r;let c=1;if(i.centeredSlides){let d=o[u].swiperSlideSize,h;for(let v=u+1;v<o.length;v+=1)o[v]&&!h&&(d+=o[v].swiperSlideSize,c+=1,d>l&&(h=!0));for(let v=u-1;v>=0;v-=1)o[v]&&!h&&(d+=o[v].swiperSlideSize,c+=1,d>l&&(h=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?s[d]+a[d]-s[u]<l:s[d]-s[u]<l)&&(c+=1);else for(let d=u-1;d>=0;d-=1)s[u]-s[d]<l&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let o;t.params.freeMode&&t.params.freeMode.enabled?(i(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?o=t.slideTo(t.slides.length-1,0,!1,!0):o=t.slideTo(t.activeIndex,0,!1,!0),o||i()),r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.$el.removeClass(`${r.params.containerModifierClass}${i}`).addClass(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.each(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.$el.addClass(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.$el.removeClass(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;const r=V(t||n.params.el);if(t=r[0],!t)return!1;t.swiper=n;const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){const a=V(t.shadowRoot.querySelector(i()));return a.children=l=>r.children(l),a}return r.children?r.children(i()):V(r).children(i())})();if(s.length===0&&n.params.createElements){const l=Ke().createElement("div");s=V(l),l.className=n.params.wrapperClass,r.append(l),r.children(`.${n.params.slideClass}`).each(u=>{s.append(u)})}return Object.assign(n,{$el:r,el:t,$wrapperEl:s,wrapperEl:s[0],mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl"),wrongRTL:s.css("display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.params.loop&&n.loopCreate(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.preloadImages&&n.preloadImages(),n.params.loop?n.slideTo(n.params.initialSlide+n.loopedSlides,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.attachEvents(),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,$el:o,$wrapperEl:s,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o.removeAttr("style"),s.removeAttr("style"),a&&a.length&&a.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.$el[0].swiper=null,zC(r)),r.destroyed=!0),null}static extendDefaults(t){St(yc,t)}static get extendedDefaults(){return yc}static get defaults(){return jg}static installModule(t){tt.prototype.__modules__||(tt.prototype.__modules__=[]);const n=tt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>tt.installModule(n)),tt):(tt.installModule(t),tt)}}Object.keys(vc).forEach(e=>{Object.keys(vc[e]).forEach(t=>{tt.prototype[t]=vc[e][t]})});tt.use([qC,KC]);function V1(e,t,n,r){const i=Ke();return e.params.createElements&&Object.keys(r).forEach(o=>{if(!n[o]&&n.auto===!0){let s=e.$el.children(`.${r[o]}`)[0];s||(s=i.createElement("div"),s.className=r[o],e.$el.append(s)),n[o]=s,t[o]=s}}),n}function eO(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function o(y){let b;return y&&(b=V(y),t.params.uniqueNavElements&&typeof y=="string"&&b.length>1&&t.$el.find(y).length===1&&(b=t.$el.find(y))),b}function s(y,b){const w=t.params.navigation;y&&y.length>0&&(y[b?"addClass":"removeClass"](w.disabledClass),y[0]&&y[0].tagName==="BUTTON"&&(y[0].disabled=b),t.params.watchOverflow&&t.enabled&&y[t.isLocked?"addClass":"removeClass"](w.lockClass))}function a(){if(t.params.loop)return;const{$nextEl:y,$prevEl:b}=t.navigation;s(b,t.isBeginning&&!t.params.rewind),s(y,t.isEnd&&!t.params.rewind)}function l(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function c(){const y=t.params.navigation;if(t.params.navigation=V1(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;const b=o(y.nextEl),w=o(y.prevEl);b&&b.length>0&&b.on("click",u),w&&w.length>0&&w.on("click",l),Object.assign(t.navigation,{$nextEl:b,nextEl:b&&b[0],$prevEl:w,prevEl:w&&w[0]}),t.enabled||(b&&b.addClass(y.lockClass),w&&w.addClass(y.lockClass))}function d(){const{$nextEl:y,$prevEl:b}=t.navigation;y&&y.length&&(y.off("click",u),y.removeClass(t.params.navigation.disabledClass)),b&&b.length&&(b.off("click",l),b.removeClass(t.params.navigation.disabledClass))}r("init",()=>{t.params.navigation.enabled===!1?v():(c(),a())}),r("toEdge fromEdge lock unlock",()=>{a()}),r("destroy",()=>{d()}),r("enable disable",()=>{const{$nextEl:y,$prevEl:b}=t.navigation;y&&y[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),b&&b[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)}),r("click",(y,b)=>{const{$nextEl:w,$prevEl:p}=t.navigation,g=b.target;if(t.params.navigation.hideOnClick&&!V(g).is(p)&&!V(g).is(w)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===g||t.pagination.el.contains(g)))return;let m;w?m=w.hasClass(t.params.navigation.hiddenClass):p&&(m=p.hasClass(t.params.navigation.hiddenClass)),i(m===!0?"navigationShow":"navigationHide"),w&&w.toggleClass(t.params.navigation.hiddenClass),p&&p.toggleClass(t.params.navigation.hiddenClass)}});const h=()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),c(),a()},v=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),d()};Object.assign(t.navigation,{enable:h,disable:v,update:a,init:c,destroy:d})}function li(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function tO(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:w=>w,formatFractionTotal:w=>w,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let s,a=0;function l(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0}function u(w,p){const{bulletActiveClass:g}=t.params.pagination;w[p]().addClass(`${g}-${p}`)[p]().addClass(`${g}-${p}-${p}`)}function c(){const w=t.rtl,p=t.params.pagination;if(l())return;const g=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,m=t.pagination.$el;let S;const k=t.params.loop?Math.ceil((g-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(S=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),S>g-1-t.loopedSlides*2&&(S-=g-t.loopedSlides*2),S>k-1&&(S-=k),S<0&&t.params.paginationType!=="bullets"&&(S=k+S)):typeof t.snapIndex<"u"?S=t.snapIndex:S=t.activeIndex||0,p.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const T=t.pagination.bullets;let _,x,N;if(p.dynamicBullets&&(s=T.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),m.css(t.isHorizontal()?"width":"height",`${s*(p.dynamicMainBullets+4)}px`),p.dynamicMainBullets>1&&t.previousIndex!==void 0&&(a+=S-(t.previousIndex-t.loopedSlides||0),a>p.dynamicMainBullets-1?a=p.dynamicMainBullets-1:a<0&&(a=0)),_=Math.max(S-a,0),x=_+(Math.min(T.length,p.dynamicMainBullets)-1),N=(x+_)/2),T.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(O=>`${p.bulletActiveClass}${O}`).join(" ")),m.length>1)T.each(O=>{const R=V(O),z=R.index();z===S&&R.addClass(p.bulletActiveClass),p.dynamicBullets&&(z>=_&&z<=x&&R.addClass(`${p.bulletActiveClass}-main`),z===_&&u(R,"prev"),z===x&&u(R,"next"))});else{const O=T.eq(S),R=O.index();if(O.addClass(p.bulletActiveClass),p.dynamicBullets){const z=T.eq(_),K=T.eq(x);for(let E=_;E<=x;E+=1)T.eq(E).addClass(`${p.bulletActiveClass}-main`);if(t.params.loop)if(R>=T.length){for(let E=p.dynamicMainBullets;E>=0;E-=1)T.eq(T.length-E).addClass(`${p.bulletActiveClass}-main`);T.eq(T.length-p.dynamicMainBullets-1).addClass(`${p.bulletActiveClass}-prev`)}else u(z,"prev"),u(K,"next");else u(z,"prev"),u(K,"next")}}if(p.dynamicBullets){const O=Math.min(T.length,p.dynamicMainBullets+4),R=(s*O-s)/2-N*s,z=w?"right":"left";T.css(t.isHorizontal()?z:"top",`${R}px`)}}if(p.type==="fraction"&&(m.find(li(p.currentClass)).text(p.formatFractionCurrent(S+1)),m.find(li(p.totalClass)).text(p.formatFractionTotal(k))),p.type==="progressbar"){let T;p.progressbarOpposite?T=t.isHorizontal()?"vertical":"horizontal":T=t.isHorizontal()?"horizontal":"vertical";const _=(S+1)/k;let x=1,N=1;T==="horizontal"?x=_:N=_,m.find(li(p.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${x}) scaleY(${N})`).transition(t.params.speed)}p.type==="custom"&&p.renderCustom?(m.html(p.renderCustom(t,S+1,k)),i("paginationRender",m[0])):i("paginationUpdate",m[0]),t.params.watchOverflow&&t.enabled&&m[t.isLocked?"addClass":"removeClass"](p.lockClass)}function d(){const w=t.params.pagination;if(l())return;const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,g=t.pagination.$el;let m="";if(w.type==="bullets"){let S=t.params.loop?Math.ceil((p-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&S>p&&(S=p);for(let k=0;k<S;k+=1)w.renderBullet?m+=w.renderBullet.call(t,k,w.bulletClass):m+=`<${w.bulletElement} class="${w.bulletClass}"></${w.bulletElement}>`;g.html(m),t.pagination.bullets=g.find(li(w.bulletClass))}w.type==="fraction"&&(w.renderFraction?m=w.renderFraction.call(t,w.currentClass,w.totalClass):m=`<span class="${w.currentClass}"></span> / <span class="${w.totalClass}"></span>`,g.html(m)),w.type==="progressbar"&&(w.renderProgressbar?m=w.renderProgressbar.call(t,w.progressbarFillClass):m=`<span class="${w.progressbarFillClass}"></span>`,g.html(m)),w.type!=="custom"&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=V1(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const w=t.params.pagination;if(!w.el)return;let p=V(w.el);p.length!==0&&(t.params.uniqueNavElements&&typeof w.el=="string"&&p.length>1&&(p=t.$el.find(w.el),p.length>1&&(p=p.filter(g=>V(g).parents(".swiper")[0]===t.el))),w.type==="bullets"&&w.clickable&&p.addClass(w.clickableClass),p.addClass(w.modifierClass+w.type),p.addClass(t.isHorizontal()?w.horizontalClass:w.verticalClass),w.type==="bullets"&&w.dynamicBullets&&(p.addClass(`${w.modifierClass}${w.type}-dynamic`),a=0,w.dynamicMainBullets<1&&(w.dynamicMainBullets=1)),w.type==="progressbar"&&w.progressbarOpposite&&p.addClass(w.progressbarOppositeClass),w.clickable&&p.on("click",li(w.bulletClass),function(m){m.preventDefault();let S=V(this).index()*t.params.slidesPerGroup;t.params.loop&&(S+=t.loopedSlides),t.slideTo(S)}),Object.assign(t.pagination,{$el:p,el:p[0]}),t.enabled||p.addClass(w.lockClass))}function v(){const w=t.params.pagination;if(l())return;const p=t.pagination.$el;p.removeClass(w.hiddenClass),p.removeClass(w.modifierClass+w.type),p.removeClass(t.isHorizontal()?w.horizontalClass:w.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(w.bulletActiveClass),w.clickable&&p.off("click",li(w.bulletClass))}r("init",()=>{t.params.pagination.enabled===!1?b():(h(),d(),c())}),r("activeIndexChange",()=>{(t.params.loop||typeof t.snapIndex>"u")&&c()}),r("snapIndexChange",()=>{t.params.loop||c()}),r("slidesLengthChange",()=>{t.params.loop&&(d(),c())}),r("snapGridLengthChange",()=>{t.params.loop||(d(),c())}),r("destroy",()=>{v()}),r("enable disable",()=>{const{$el:w}=t.pagination;w&&w[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}),r("lock unlock",()=>{c()}),r("click",(w,p)=>{const g=p.target,{$el:m}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&m&&m.length>0&&!V(g).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&g===t.navigation.nextEl||t.navigation.prevEl&&g===t.navigation.prevEl))return;const S=m.hasClass(t.params.pagination.hiddenClass);i(S===!0?"paginationShow":"paginationHide"),m.toggleClass(t.params.pagination.hiddenClass)}});const y=()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),d(),c()},b=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),v()};Object.assign(t.pagination,{enable:y,disable:b,render:d,update:c,init:h,destroy:v})}function Fg(e){let{swiper:t,extendParams:n,on:r,emit:i}=e,o;t.autoplay={running:!1,paused:!1},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){if(!t.size){t.autoplay.running=!1,t.autoplay.paused=!1;return}const w=t.slides.eq(t.activeIndex);let p=t.params.autoplay.delay;w.attr("data-swiper-autoplay")&&(p=w.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(o),o=gl(()=>{let g;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),g=t.slidePrev(t.params.speed,!0,!0),i("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?l():(g=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),i("autoplay")):(g=t.slidePrev(t.params.speed,!0,!0),i("autoplay")):t.params.loop?(t.loopFix(),g=t.slideNext(t.params.speed,!0,!0),i("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?l():(g=t.slideTo(0,t.params.speed,!0,!0),i("autoplay")):(g=t.slideNext(t.params.speed,!0,!0),i("autoplay")),(t.params.cssMode&&t.autoplay.running||g===!1)&&s()},p)}function a(){return typeof o<"u"||t.autoplay.running?!1:(t.autoplay.running=!0,i("autoplayStart"),s(),!0)}function l(){return!t.autoplay.running||typeof o>"u"?!1:(o&&(clearTimeout(o),o=void 0),t.autoplay.running=!1,i("autoplayStop"),!0)}function u(w){!t.autoplay.running||t.autoplay.paused||(o&&clearTimeout(o),t.autoplay.paused=!0,w===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(p=>{t.$wrapperEl[0].addEventListener(p,d)}))}function c(){const w=Ke();w.visibilityState==="hidden"&&t.autoplay.running&&u(),w.visibilityState==="visible"&&t.autoplay.paused&&(s(),t.autoplay.paused=!1)}function d(w){!t||t.destroyed||!t.$wrapperEl||w.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(p=>{t.$wrapperEl[0].removeEventListener(p,d)}),t.autoplay.paused=!1,t.autoplay.running?s():l())}function h(){t.params.autoplay.disableOnInteraction?l():(i("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(w=>{t.$wrapperEl[0].removeEventListener(w,d)})}function v(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,i("autoplayResume"),s())}function y(){t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",h),t.$el.on("mouseleave",v))}function b(){t.$el.off("mouseenter",h),t.$el.off("mouseleave",v)}r("init",()=>{t.params.autoplay.enabled&&(a(),Ke().addEventListener("visibilitychange",c),y())}),r("beforeTransitionStart",(w,p,g)=>{t.autoplay.running&&(g||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(p):l())}),r("sliderFirstMove",()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?l():u())}),r("touchEnd",()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&s()}),r("destroy",()=>{b(),t.autoplay.running&&l(),Ke().removeEventListener("visibilitychange",c)}),Object.assign(t.autoplay,{pause:u,run:s,start:a,stop:l})}function Qr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Yn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Qr(t[r])&&Qr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Yn(e[r],t[r]):e[r]=t[r]})}function W1(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function G1(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function q1(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function K1(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}const Y1=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function nO(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Yn(n,tt.defaults),Yn(n,tt.extendedDefaults),n._emitClasses=!0,n.init=!1;const o={},s=Y1.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(s.indexOf(l)>=0?Qr(e[l])?(n[l]={},i[l]={},Yn(n[l],e[l]),Yn(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function rO(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:a}=e;W1(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),G1(t)&&o&&(a.params.pagination.el=o,a.originalParams.pagination.el=o),q1(t)&&s&&(a.params.scrollbar.el=s,a.originalParams.scrollbar.el=s),a.init(n)}function X1(e,t){let n=t.slidesPerView;if(t.breakpoints){const i=tt.prototype.getBreakpoint(t.breakpoints),o=i in t.breakpoints?t.breakpoints[i]:void 0;o&&o.slidesPerView&&(n=o.slidesPerView)}let r=Math.ceil(parseFloat(t.loopedSlides||n,10));return r+=t.loopAdditionalSlides,r>e.length&&t.loopedSlidesLimit&&(r=e.length),r}function iO(e,t,n){const r=t.map((l,u)=>Ne.cloneElement(l,{swiper:e,"data-swiper-slide-index":u}));function i(l,u,c){return Ne.cloneElement(l,{key:`${l.key}-duplicate-${u}-${c}`,className:`${l.props.className||""} ${n.slideDuplicateClass}`})}if(n.loopFillGroupWithBlank){const l=n.slidesPerGroup-r.length%n.slidesPerGroup;if(l!==n.slidesPerGroup)for(let u=0;u<l;u+=1){const c=f("div",{className:`${n.slideClass} ${n.slideBlankClass}`});r.push(c)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=r.length);const o=X1(r,n),s=[],a=[];for(let l=0;l<o;l+=1){const u=l-Math.floor(l/r.length)*r.length;a.push(i(r[u],l,"append")),s.unshift(i(r[r.length-u-1],l,"prepend"))}return e&&(e.loopedSlides=o),[...s,...r,...a]}function oO(e,t,n,r,i){const o=[];if(!t)return o;const s=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&s("children"),r.length!==n.length&&s("children")}return Y1.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Qr(e[l])&&Qr(t[l])){const u=Object.keys(e[l]),c=Object.keys(t[l]);u.length!==c.length?s(l):(u.forEach(d=>{e[l][d]!==t[l][d]&&s(l)}),c.forEach(d=>{e[l][d]!==t[l][d]&&s(l)}))}else e[l]!==t[l]&&s(l)}),o}function Q1(e){const t=[];return Ne.Children.toArray(e).forEach(n=>{n.type&&n.type.displayName==="SwiperSlide"?t.push(n):n.props&&n.props.children&&Q1(n.props.children).forEach(r=>t.push(r))}),t}function sO(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ne.Children.toArray(e).forEach(r=>{if(r.type&&r.type.displayName==="SwiperSlide")t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Q1(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function aO(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:a,paginationEl:l}=e;const u=i.filter(T=>T!=="children"&&T!=="direction"),{params:c,pagination:d,navigation:h,scrollbar:v,virtual:y,thumbs:b}=t;let w,p,g,m,S;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(w=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(p=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(g=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(c.navigation||c.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(S=!0);const k=T=>{!t[T]||(t[T].destroy(),T==="navigation"?(c[T].prevEl=void 0,c[T].nextEl=void 0,t[T].prevEl=void 0,t[T].nextEl=void 0):(c[T].el=void 0,t[T].el=void 0))};u.forEach(T=>{if(Qr(c[T])&&Qr(r[T]))Yn(c[T],r[T]);else{const _=r[T];(_===!0||_===!1)&&(T==="navigation"||T==="pagination"||T==="scrollbar")?_===!1&&k(T):c[T]=r[T]}}),u.includes("controller")&&!p&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),i.includes("children")&&n&&y&&c.virtual.enabled?(y.slides=n,y.update(!0)):i.includes("children")&&t.lazy&&t.params.lazy.enabled&&t.lazy.load(),w&&b.init()&&b.update(!0),p&&(t.controller.control=c.controller.control),g&&(l&&(c.pagination.el=l),d.init(),d.render(),d.update()),m&&(a&&(c.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),S&&(o&&(c.navigation.nextEl=o),s&&(c.navigation.prevEl=s),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),t.update()}function lO(e,t,n){if(!n)return null;const r=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return t.filter((i,o)=>o>=n.from&&o<=n.to).map(i=>Ne.cloneElement(i,{swiper:e,style:r}))}const uO=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Go(e,t){return typeof window>"u"?C.exports.useEffect(e,t):C.exports.useLayoutEffect(e,t)}const cO=C.exports.createContext(null),dO=C.exports.createContext(null),J1=C.exports.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...a}=e===void 0?{}:e,l=!1;const[u,c]=C.exports.useState("swiper"),[d,h]=C.exports.useState(null),[v,y]=C.exports.useState(!1),b=C.exports.useRef(!1),w=C.exports.useRef(null),p=C.exports.useRef(null),g=C.exports.useRef(null),m=C.exports.useRef(null),S=C.exports.useRef(null),k=C.exports.useRef(null),T=C.exports.useRef(null),_=C.exports.useRef(null),{params:x,passedParams:N,rest:O,events:R}=nO(a),{slides:z,slots:K}=sO(o),E=()=>{y(!v)};Object.assign(x.on,{_containerClasses($,q){c(q)}});const A=()=>{if(Object.assign(x.on,R),l=!0,p.current=new tt(x),p.current.loopCreate=()=>{},p.current.loopDestroy=()=>{},x.loop&&(p.current.loopedSlides=X1(z,x)),p.current.virtual&&p.current.params.virtual.enabled){p.current.virtual.slides=z;const $={cache:!1,slides:z,renderExternal:h,renderExternalUpdate:!1};Yn(p.current.params.virtual,$),Yn(p.current.originalParams.virtual,$)}};w.current||A(),p.current&&p.current.on("_beforeBreakpoint",E);const G=()=>{l||!R||!p.current||Object.keys(R).forEach($=>{p.current.on($,R[$])})},X=()=>{!R||!p.current||Object.keys(R).forEach($=>{p.current.off($,R[$])})};C.exports.useEffect(()=>()=>{p.current&&p.current.off("_beforeBreakpoint",E)}),C.exports.useEffect(()=>{!b.current&&p.current&&(p.current.emitSlidesClasses(),b.current=!0)}),Go(()=>{if(t&&(t.current=w.current),!!w.current)return p.current.destroyed&&A(),rO({el:w.current,nextEl:S.current,prevEl:k.current,paginationEl:T.current,scrollbarEl:_.current,swiper:p.current},x),s&&s(p.current),()=>{p.current&&!p.current.destroyed&&p.current.destroy(!0,!1)}},[]),Go(()=>{G();const $=oO(N,g.current,z,m.current,q=>q.key);return g.current=N,m.current=z,$.length&&p.current&&!p.current.destroyed&&aO({swiper:p.current,slides:z,passedParams:N,changedParams:$,nextEl:S.current,prevEl:k.current,scrollbarEl:_.current,paginationEl:T.current}),()=>{X()}}),Go(()=>{uO(p.current)},[d]);function L(){return x.virtual?lO(p.current,z,d):!x.loop||p.current&&p.current.destroyed?z.map($=>Ne.cloneElement($,{swiper:p.current})):iO(p.current,z,x)}return f(r,{ref:w,className:K1(`${u}${n?` ${n}`:""}`),...O,children:P(dO.Provider,{value:p.current,children:[K["container-start"],P(i,{className:"swiper-wrapper",children:[K["wrapper-start"],L(),K["wrapper-end"]]}),W1(x)&&P(rt,{children:[f("div",{ref:k,className:"swiper-button-prev"}),f("div",{ref:S,className:"swiper-button-next"})]}),q1(x)&&f("div",{ref:_,className:"swiper-scrollbar"}),G1(x)&&f("div",{ref:T,className:"swiper-pagination"}),K["container-end"]]})})});J1.displayName="Swiper";const Z1=C.exports.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,virtualIndex:a,...l}=e===void 0?{}:e;const u=C.exports.useRef(null),[c,d]=C.exports.useState("swiper-slide");function h(b,w,p){w===u.current&&d(p)}Go(()=>{if(t&&(t.current=u.current),!(!u.current||!o)){if(o.destroyed){c!=="swiper-slide"&&d("swiper-slide");return}return o.on("_slideClass",h),()=>{!o||o.off("_slideClass",h)}}}),Go(()=>{o&&u.current&&!o.destroyed&&d(o.getSlideClasses(u.current))},[o]);const v={isActive:c.indexOf("swiper-slide-active")>=0||c.indexOf("swiper-slide-duplicate-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isDuplicate:c.indexOf("swiper-slide-duplicate")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0||c.indexOf("swiper-slide-duplicate-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0||c.indexOf("swiper-slide-duplicate-next")>=0},y=()=>typeof r=="function"?r(v):r;return f(n,{ref:u,className:K1(`${c}${i?` ${i}`:""}`),"data-swiper-slide-index":a,...l,children:f(cO.Provider,{value:v,children:s?f("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0,children:y()}):y()})})});Z1.displayName="SwiperSlide";const fO=F.section`
    margin: 60px 0 30px;

    @media (min-width: 1024px) {
        margin-top: 0;
    }
`,pO=F.div`
     ${ni}
`,hO=F.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: ${e=>e.theme.borderRadiusMd};
    /*overflow: auto hidden;
    scroll-snap-type: inline mandatory;
    overscroll-behavior-inline: contain;*/

    .swiper-button-prev, .swiper-button-next {
        color:  ${e=>e.theme.primary};
        display: none;

        @media (min-width: 570px) {
            display: block;
        }
    }

    .swiper-pagination-clickable .swiper-pagination-bullet {
        background: ${e=>e.theme.primary};
    }
    
    .swiper-pagination-horizontal {

        @media (max-width: 570px) {
            position: relative;
            top: 5px;
        }
    }

    .swiper-pagination-progressbar-fill {
        background:  ${e=>e.theme.primary};
    }
`,gO=F.div`
    position: relative;
    min-width: 100%;
    max-height: 450px;
    aspect-ratio: 1 / 1;
    border-radius:  ${e=>e.theme.borderRadiusMd};
    overflow: hidden;
    /*scroll-snap-align: start;*/
    

    @media (min-width: 480px) {
        aspect-ratio: 5 / 3;
    }

    @media (min-width: 570px) {
        aspect-ratio: 4 / 2;
    }
    @media (min-width: 768px) {
        aspect-ratio: auto;
        height: 350px;
    }
    @media (min-width: 1024px) {
        height: 380px;
    }
    @media (min-width: 1200px) {
        img {
            object-position: top;
        }
    }
    @media (min-width: 1400px) {
        height: 450px;
    }




    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: right;
    }

    div {
        background: hsla(0, 0%, 100%, 0.8);
        position: absolute;
        bottom: 25px;
        left: 25px;
        right: 25px;
        padding: 20px 25px;
        border-radius: ${e=>e.theme.borderRadiusMd};

        @media (min-width: 480px) {
            top: 50%;
            right: auto;
            bottom: auto;
            transform: translateY(-50%);
            max-width: 320px;
        }

        @media (min-width: 570px) {
            background: none;
        }
        @media (min-width: 768px) {
            max-width: 380px; 
        }
        @media (min-width: 1024px) {
            left: 75px;
            max-width: 400px;
        }
        @media (min-width: 1400px) {
            left: 110px;
            max-width: 460px;
        }


        p {
            color: ${e=>e.theme.primary};
            font-size: ${e=>e.theme.fontxs};
            font-weight: 500;
            text-transform: capitalize;
            letter-spacing: 2px;
            margin-bottom: 10px;

            @media (min-width: 480px) {
                font-size:  ${e=>e.theme.fontmd};
            }

            @media (min-width: 768px) {
                font-size:  ${e=>e.theme.fontxl};
            }
        }

        h2 {
            color: ${e=>e.theme.eerieBlack};
            font-size: ${e=>e.theme.font3xl};
            text-transform: uppercase;
            line-height: 1;
            margin-bottom: 10px;
        }

        span {
            display: none;

            @media (min-width: 480px) {
                display: block;
                color: ${e=>e.theme.onyx};
                font-size: ${e=>e.theme.fontxs};
                font-weight: 500;
                margin-bottom: 10px;

                b {
                    font-size: ${e=>e.theme.font2xl};
                }
            }

             @media (min-width: 768px) {
                font-size:  ${e=>e.theme.fontlg};

                b {
                 font-size:  ${e=>e.theme.font4xl};
                }
            }
        }

        button {
            background: ${e=>e.theme.primary};
            color: ${e=>e.theme.white};
            width: max-content;
            font-size: ${e=>e.theme.font5xs};
            font-weight: 600;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: ${e=>e.theme.borderRadiusSm};
            transition: ${e=>e.theme.transitionTiming};

            &:hover {
                transform: scale(1.1);
                background: ${e=>e.theme.primaryDark};
            }

            @media (min-width: 480px) {
                padding: 12px 24px;
            }
            @media (min-width: 768px) {
                font-size:  ${e=>e.theme.font3xs};
            }
        }
    }
`,mO="/assets/fashion-girl1.fee35b57.jpg",vO="/assets/fashion-girl2.757da9ed.jpg",yO="/assets/fashion-girl3.2e6ecca5.jpg",wO=[{id:1,img:mO,subTitle:"Trending item",title:"Women's latest fashion sale",pricing:"20",pricingFloat:"00",cta:"Shop now"},{id:2,img:vO,subTitle:"Trending accessories",title:"Modern sunglasses",pricing:"17",pricingFloat:"00",cta:"Shop now"},{id:3,img:yO,subTitle:"Sale offer",title:"New fashion winter sale",pricing:"26",pricingFloat:"99",cta:"Shop now"}],bO=()=>(tt.use([Fg]),f(fO,{children:f(pO,{children:f(hO,{children:f(J1,{autoplay:{delay:8e3,disableOnInteraction:!1},pagination:{type:window.innerWidth>570?"progressbar":"bullets",clickable:!0},scrollbar:{draggable:!0},navigation:!0,spaceBetween:20,slidesPerView:1,loop:!0,speed:5e3,modules:[tO,eO,Fg],className:"mySwiper",style:{zIndex:"-1"},children:wO.map(({id:e,img:t,subTitle:n,title:r,pricing:i,pricingFloat:o,cta:s})=>f(Z1,{children:P(gO,{children:[f("img",{src:t,alt:"banner-image"}),P("div",{children:[f("p",{children:n}),f("h2",{children:r}),P("span",{children:["starting at $ ",f("b",{children:i}),".",o]}),f("button",{children:s})]})]})},e))})})})})),SO=F.div`
    display: none;
   

    @media (min-width: 1024px) {
        display: block;
    }
`,xO=F.div`
   ${ni}
`,_O=F.ul`
    @media (min-width: 1024px) {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    @media (min-width: 1200px) {
        gap: 45px;
    }
`,xo=F.li`
    
    @media (min-width: 1024px) {
        &:not(:nth-child(2)) {
        position: relative;
        }
      

        &>a {
            position: relative;
            color: ${e=>e.theme.onyx};
            font-size:  ${e=>e.theme.fontxs};
            font-weight: 600;
            text-transform: uppercase;
            padding: 15px 0;
            transition:  ${e=>e.theme.transitionTiming};

            &:hover, &.home {
                color: ${e=>e.theme.primaryDark};

                &::after {
                    transform: scaleX(1);
                }
            }

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background:  ${e=>e.theme.primaryDark};
                transform: scaleX(0);
                transform-origin: left;
                transition:  ${e=>e.theme.transitionTiming};
            }
        }

        & > div {
            position: absolute;
            top: 100%;
            left: 0;
            background: ${e=>e.theme.primaryDark};
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            padding: 30px;
            border: 1px solid ${e=>e.theme.cultured};
            box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            border-radius: ${e=>e.theme.borderRadiusMd};
            transform: translateY(50px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: ${e=>e.theme.transitionTiming};
            z-index: 5;
        }

        & > ul.dropdown-list {
            position: absolute;
            top: 100%;
            left: 0;
            width: 235px;
            background: ${e=>e.theme.primaryDark};
            padding: 20px 0;
            border-radius: ${e=>e.theme.borderRadiusMd};
            border: 1px solid ${e=>e.theme.cultured};
            box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            transform: translateY(50px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition:  ${e=>e.theme.transitionTiming};
            z-index: 5;

            img {
                width: 100%;
                height: auto;
                max-width: 193px;
                margin: 0 20px auto;
                border-radius:  ${e=>e.theme.borderRadiusSm};
            }
        }

        &:hover > div,
        &:hover > ul.dropdown-list {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }
    }
    
`,fa=F.ul``,pa=F.li`

    @media (min-width: 1024px) {
        a {
        color: ${e=>e.theme.white};
        font-size:  ${e=>e.theme.fontxs};
        font-weight: 600;
        padding-bottom: 10px;
        border-bottom: 1px solid ${e=>e.theme.cultured};
        margin-bottom: 10px;
        }
    }

`,we=F.li`

    @media (min-width: 1024px) {
        a {
        color:  ${e=>e.theme.white};
        font-size:   ${e=>e.theme.fontxs};
        text-transform: capitalize;
        transition:   ${e=>e.theme.transitionTiming};

        &:hover {
            color: ${e=>e.theme.eerieBlack};
        }
  }

    &:not(:last-child) a { 
         padding: 4px 0;
        }

     &:last-child { 
        margin-top: 20px; 
    }

    img {
        width: 100%;
        height: auto;
        border-radius: ${e=>e.theme.borderRadiusSm};
    }
    }
`,Pt=F.li`
    @media (min-width: 1024px) {
        a {
            color:  ${e=>e.theme.white};
            font-size:   ${e=>e.theme.fontxs};
            text-transform: capitalize;
            transition:   ${e=>e.theme.transitionTiming};
            padding: 4px 20px;

            &:hover {
                color: ${e=>e.theme.eerieBlack};
            }
        }
    }
`,EO="/assets/fashion-girl.b1142896.jpg",kO="/assets/hair-girl.13f2affe.jpg",TO="/assets/men-fashion.7f753b30.jpg",CO="/assets/kids1.898e5908.png",IO="/assets/harry-potter2.887409e2.jpg",OO="/assets/umbrella-girl.cab25a86.jpg",PO="/assets/twinning.89b8ad31.jpg",RO=()=>{const{t:e}=nn();return f(SO,{children:f(xO,{children:P(_O,{children:[f(xo,{children:f("a",{href:"#",className:"home",children:e("Home")})}),P(xo,{children:[f("a",{href:"#",children:"Marks & Spencer"}),P("div",{children:[P(fa,{children:[f(pa,{children:f("a",{href:"#",children:e("Women's")})}),f(we,{children:f("a",{href:"#",children:e("Clothing")})}),f(we,{children:f("a",{href:"#",children:e("Lingerie")})}),f(we,{children:f("a",{href:"#",children:e("Footwear")})}),f(we,{children:f("a",{href:"#",children:e("Accessories")})}),f(we,{children:f("a",{href:"#",children:f("img",{src:EO,alt:"women's fashion",width:"250",height:"119"})})})]}),P(fa,{children:[f(pa,{children:f("a",{href:"#",children:e("Men's")})}),f(we,{children:f("a",{href:"#",children:e("Clothing")})}),f(we,{children:P("a",{href:"#",children:[e("Suits")," & ",e("Formal")," "]})}),f(we,{children:f("a",{href:"#",children:e("Footwear")})}),f(we,{children:f("a",{href:"#",children:e("Accessories")})}),f(we,{children:f("a",{href:"#",children:f("img",{src:TO,alt:"men's fashion",width:"250",height:"119"})})})]}),P(fa,{children:[f(pa,{children:f("a",{href:"#",children:e("Kids'")})}),f(we,{children:f("a",{href:"#",children:e("Baby")})}),f(we,{children:f("a",{href:"#",children:e("Boys")})}),f(we,{children:f("a",{href:"#",children:e("Girls")})}),f(we,{children:f("a",{href:"#",children:e("School Uniform")})}),f(we,{children:f("a",{href:"#",children:f("img",{src:CO,alt:"kid's fashion",width:"250",height:"119"})})})]}),P(fa,{children:[f(pa,{children:f("a",{href:"#",children:e("Beauty")})}),f(we,{children:f("a",{href:"#",children:e("Skincare")})}),f(we,{children:f("a",{href:"#",children:e("Haircare")})}),f(we,{children:f("a",{href:"#",children:e("Make-up")})}),f(we,{children:f("a",{href:"#",children:e("Fragrance")})}),f(we,{children:f("a",{href:"#",children:f("img",{src:kO,alt:"beauty collection",width:"250",height:"119"})})})]})]})]}),P(xo,{children:[f("a",{href:"#",children:"Harry Potter's"}),P("ul",{className:"dropdown-list",children:[f(Pt,{children:f("a",{href:"#",children:e("Wands")})}),f(Pt,{children:f("a",{href:"#",children:e("Trunks")})}),f(Pt,{children:f("a",{href:"#",children:e("Clothing")})}),f(Pt,{children:P("a",{href:"#",children:[e("Sweets")," & ",e("Treats")," "]})}),f(we,{children:f("a",{href:"#",children:f("img",{src:IO,alt:"women's fashion",width:"250",height:"119"})})})]})]}),P(xo,{children:[f("a",{href:"#",children:"James Smith & Sons"}),P("ul",{className:"dropdown-list",children:[f(Pt,{children:f("a",{href:"#",children:e("Folding Umbrellas")})}),f(Pt,{children:f("a",{href:"#",children:e("Sun Umbrellas")})}),f(Pt,{children:f("a",{href:"#",children:e("Walking Sticks")})}),f(Pt,{children:f("a",{href:"#",children:e("Seat Sticks")})}),f(we,{children:f("a",{href:"#",children:f("img",{src:OO,alt:"women's fashion",width:"250",height:"119"})})})]})]}),P(xo,{children:[f("a",{href:"#",children:"Twinings"}),P("ul",{className:"dropdown-list",children:[f(Pt,{children:f("a",{href:"#",children:e("Tea")})}),f(Pt,{children:f("a",{href:"#",children:e("Wellbeing Drinks")})}),f(Pt,{children:f("a",{href:"#",children:e("Teaware")})}),f(Pt,{children:f("a",{href:"#",children:e("Treats")})}),f(we,{children:f("a",{href:"#",children:f("img",{src:PO,alt:"women's fashion",width:"250",height:"119"})})})]})]})]})})})},AO=()=>P(rt,{children:[f(RO,{}),f(bO,{})]}),Ug=As`
  0% {
      -webkit-transform: scale(0.7, 0.7);
              transform: scale(0.7, 0.7);
      opacity: 0.9;
    }
    100% {
      -webkit-transform: scale(1, 1);
              transform: scale(1, 1);
      opacity: 1;
    }
`,LO=F.section`
    background: #bba9dd;
    position: fixed;
    z-index: 999999999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img.shopper {
        filter: drop-shadow(2px 4px 7px #565656);

    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 70px;
        left: 100px;
        background: ${e=>e.theme.cultured};
        border-radius: 50%;
        width: 120px;
        height: 120px;
        -webkit-animation: ${Ug} 3s alternate infinite ease-in;
        animation:  ${Ug} 3s alternate infinite ease-in;

        @media (max-width: 570px) {
            top: 40px;
            left: 40px;
            width: 100px;
            height: 100px;
            }
        


        img {
            width: 100%;
            height: auto;
            max-width: 50px;

            @media (min-width: 570px) {
                max-width: 70px;
            }
        }

        h2 {
            font-size: ${e=>e.theme.fontmd};
        }
    }
`,NO="/assets/shopperLg.87e789bf.png",$O="/assets/shopperMd.7bfda202.png",MO=()=>{const[e,t]=C.exports.useState(!0);return C.exports.useEffect(()=>{setTimeout(()=>{t(!1)},5e3)},[]),f(rt,{children:e&&P(LO,{children:[window.innerWidth>570?f("img",{src:NO,alt:"shopper-welcome-screen",className:"shopper"}):f("img",{src:$O,alt:"shopper-welcome-screen",className:"shopper"}),P("div",{children:[f("img",{src:ri,alt:"brand-logo"}),f("h2",{children:"WizCart"})]})]})})},ew="/assets/google.b8bbf658.svg";function tw(e){return ye({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M254.28 17.313c-81.048 0-146.624 65.484-146.624 146.406V236h49.594v-69.094c0-53.658 43.47-97.187 97.03-97.187 53.563 0 97.032 44.744 97.032 97.186V236h49.594v-72.28c0-78.856-65.717-146.407-146.625-146.407zM85.157 254.688c-14.61 22.827-22.844 49.148-22.844 76.78 0 88.358 84.97 161.5 191.97 161.5 106.998 0 191.968-73.142 191.968-161.5 0-27.635-8.26-53.95-22.875-76.78H85.155zM254 278.625c22.34 0 40.875 17.94 40.875 40.28 0 16.756-10.6 31.23-25.125 37.376l32.72 98.126h-96.376l32.125-98.125c-14.526-6.145-24.532-20.62-24.532-37.374 0-22.338 17.972-40.28 40.312-40.28z"}}]})(e)}function gp(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}const _o={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ui={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function nw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zO=DO,jO=nw,rw=new ii("auth","Firebase",nw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new fp("@firebase/auth");function $a(e,...t){Bg.logLevel<=fe.ERROR&&Bg.error(`Auth (${to}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,...t){throw mp(e,...t)}function Ye(e,...t){return mp(e,...t)}function iw(e,t,n){const r=Object.assign(Object.assign({},jO()),{[t]:n});return new ii("auth","Firebase",r).create(t,{appName:e.name})}function no(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Qe(e,"argument-error"),iw(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mp(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return rw.create(e,...t)}function D(e,t,...n){if(!e)throw mp(t,...n)}function fn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $a(t),new Error(t)}function en(e,t){e||fn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Map;function Et(e){en(e instanceof Function,"Expected a class definition");let t=Hg.get(e);return t?(en(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Hg.set(e,t),t)}function FO(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Et);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function vp(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vp()||_1()||"connection"in navigator)?navigator.onLine:!0}function BO(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,n){this.shortDelay=t,this.longDelay=n,en(n>t,"Short delay should be less than long delay!"),this.isMobile=nk()||cp()}get(){return UO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(e,t){en(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new Ds(3e4,6e4);function $e(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ue(e,t,n,r,i={}){return sw(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=eo(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ow.fetch()(aw(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function sw(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},HO),t);try{const i=new WO(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw $o(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw $o(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw $o(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iw(e,c,u);Qe(e,c)}}catch(i){if(i instanceof wt)throw i;Qe(e,"network-request-failed")}}async function $n(e,t,n,r,i={}){const o=await Ue(e,t,n,r,i);return"mfaPendingCredential"in o&&Qe(e,"multi-factor-auth-required",{_serverResponse:o}),o}function aw(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?yp(e.config,i):`${e.config.apiScheme}://${i}`}class WO{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),VO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(e,t){return Ue(e,"POST","/v1/accounts:delete",t)}async function qO(e,t){return Ue(e,"POST","/v1/accounts:update",t)}async function KO(e,t){return Ue(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function YO(e,t=!1){const n=oe(e),r=await n.getIdToken(t),i=hu(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:qo(wc(i.auth_time)),issuedAtTime:qo(wc(i.iat)),expirationTime:qo(wc(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function wc(e){return Number(e)*1e3}function hu(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const o=ZE(r);return o?JSON.parse(o):($a("Failed to decode base64 JWT payload"),null)}catch(o){return $a("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function XO(e){const t=hu(e);return D(t,"internal-error"),D(typeof t.exp<"u","internal-error"),D(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof wt&&QO(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function QO({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qo(this.lastLoginAt),this.creationTime=qo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await An(e,KO(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?tP(o.providerUserInfo):[],a=eP(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new lw(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function ZO(e){const t=oe(e);await bs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function eP(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function tP(e){return e.map(t=>{var{providerId:n}=t,r=gp(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(e,t){const n=await sw(e,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=aw(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ow.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){D(t.idToken,"internal-error"),D(typeof t.idToken<"u","internal-error"),D(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):XO(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return D(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await nP(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ss;return r&&(D(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(D(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e,t){D(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Mr{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=gp(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lw(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await An(this,this.stsTokenManager.getToken(this.auth,t));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return YO(this,t)}reload(){return ZO(this)}_assign(t){this!==t&&(D(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Mr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await An(this,GO(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:S,isAnonymous:k,providerData:T,stsTokenManager:_}=n;D(m&&_,t,"internal-error");const x=Ss.fromJSON(this.name,_);D(typeof m=="string",t,"internal-error"),jn(d,t.name),jn(h,t.name),D(typeof S=="boolean",t,"internal-error"),D(typeof k=="boolean",t,"internal-error"),jn(v,t.name),jn(y,t.name),jn(b,t.name),jn(w,t.name),jn(p,t.name),jn(g,t.name);const N=new Mr({uid:m,auth:t,email:h,emailVerified:S,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:v,tenantId:b,stsTokenManager:x,createdAt:p,lastLoginAt:g});return T&&Array.isArray(T)&&(N.providerData=T.map(O=>Object.assign({},O))),w&&(N._redirectEventId=w),N}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ss;i.updateFromServerResponse(n);const o=new Mr({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await bs(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}uw.type="NONE";const qi=uw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e,t,n){return`firebase:${e}:${t}:${n}`}class Ni{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Dr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Dr("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ni(Et(qi),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Et(qi);const s=Dr(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=Mr._fromJSON(t,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Ni(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Ni(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fw(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cw(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pw(t))return"Blackberry";if(hw(t))return"Webos";if(wp(t))return"Safari";if((t.includes("chrome/")||dw(t))&&!t.includes("edge/"))return"Chrome";if(zs(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cw(e=Oe()){return/firefox\//i.test(e)}function wp(e=Oe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dw(e=Oe()){return/crios\//i.test(e)}function fw(e=Oe()){return/iemobile/i.test(e)}function zs(e=Oe()){return/android/i.test(e)}function pw(e=Oe()){return/blackberry/i.test(e)}function hw(e=Oe()){return/webos/i.test(e)}function ro(e=Oe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function rP(e=Oe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function iP(e=Oe()){var t;return ro(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function oP(){return E1()&&document.documentMode===10}function gw(e=Oe()){return ro(e)||zs(e)||hw(e)||pw(e)||/windows phone/i.test(e)||fw(e)}function sP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(e,t=[]){let n;switch(e){case"Browser":n=Wg(Oe());break;case"Worker":n=`${Wg(Oe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${to}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new aP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await bs(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=BO()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?oe(t):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&D(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ii("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Et(t)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return D(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=mw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ze(e){return oe(e)}class Gg{constructor(t){this.auth=t,this.observer=null,this.addObserver=k1(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function uP(e,t,n){const r=ze(e);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=vw(t),{host:s,port:a}=cP(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dP()}function vw(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function cP(e){const t=vw(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:qg(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:qg(s)}}}function qg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function dP(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(t){return fn("not implemented")}_linkToIdToken(t,n){return fn("not implemented")}_getReauthenticationResolver(t){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(e,t){return Ue(e,"POST","/v1/accounts:resetPassword",$e(e,t))}async function ww(e,t){return Ue(e,"POST","/v1/accounts:update",t)}async function fP(e,t){return Ue(e,"POST","/v1/accounts:update",$e(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(e,t){return $n(e,"POST","/v1/accounts:signInWithPassword",$e(e,t))}async function gu(e,t){return Ue(e,"POST","/v1/accounts:sendOobCode",$e(e,t))}async function hP(e,t){return gu(e,t)}async function gP(e,t){return gu(e,t)}async function mP(e,t){return gu(e,t)}async function vP(e,t){return gu(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(e,t){return $n(e,"POST","/v1/accounts:signInWithEmailLink",$e(e,t))}async function wP(e,t){return $n(e,"POST","/v1/accounts:signInWithEmailLink",$e(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends io{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new xs(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new xs(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return pP(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yP(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return ww(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wP(t,{idToken:n,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t){return $n(e,"POST","/v1/accounts:signInWithIdp",$e(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="http://localhost";class mn extends io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=gp(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new mn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return kn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,kn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kn(t,n)}buildRequest(){const t={requestUri:bP,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=eo(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(e,t){return Ue(e,"POST","/v1/accounts:sendVerificationCode",$e(e,t))}async function xP(e,t){return $n(e,"POST","/v1/accounts:signInWithPhoneNumber",$e(e,t))}async function _P(e,t){const n=await $n(e,"POST","/v1/accounts:signInWithPhoneNumber",$e(e,t));if(n.temporaryProof)throw $o(e,"account-exists-with-different-credential",n);return n}const EP={USER_NOT_FOUND:"user-not-found"};async function kP(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return $n(e,"POST","/v1/accounts:signInWithPhoneNumber",$e(e,n),EP)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends io{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new zr({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new zr({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return xP(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return _P(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return kP(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=t;return!r&&!n&&!i&&!o?null:new zr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CP(e){const t=Ti(No(e)).link,n=t?Ti(No(t)).deep_link_id:null,r=Ti(No(e)).deep_link_id;return(r?Ti(No(r)).link:null)||r||n||t||e}class mu{constructor(t){var n,r,i,o,s,a;const l=Ti(No(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=TP((i=l.mode)!==null&&i!==void 0?i:null);D(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=CP(t);try{return new mu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.providerId=_r.PROVIDER_ID}static credential(t,n){return xs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=mu.parseLink(n);return D(r,"argument-error"),xs._fromEmailAndCode(t,r.code,r.tenantId)}}_r.PROVIDER_ID="password";_r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends Mn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class $i extends oo{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return D("providerId"in n&&"signInMethod"in n,"argument-error"),mn._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return D(t.idToken||t.accessToken,"argument-error"),mn._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return $i.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return $i.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=t;if(!r&&!i&&!n&&!o||!a)return null;try{return new $i(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends oo{constructor(){super("facebook.com")}static credential(t){return mn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ln.credential(t.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return mn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends oo{constructor(){super("github.com")}static credential(t){return mn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cn.credential(t.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="http://localhost";class Ki extends io{constructor(t,n){super(t,t),this.pendingToken=n}_getIdTokenResponse(t){const n=this.buildRequest();return kn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,kn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kn(t,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new Ki(r,o)}static _create(t,n){return new Ki(t,n)}buildRequest(){return{requestUri:IP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="saml.";class ml extends Mn{constructor(t){D(t.startsWith(OP),"argument-error"),super(t)}static credentialFromResult(t){return ml.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return ml.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const n=Ki.fromJSON(t);return D(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:n,providerId:r}=t;if(!n||!r)return null;try{return Ki._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends oo{constructor(){super("twitter.com")}static credential(t,n){return mn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(e,t){return $n(e,"POST","/v1/accounts:signUp",$e(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Mr._fromIdTokenResponse(t,r,i),s=Kg(r);return new zt({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Kg(r);return new zt({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Kg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(e){var t;const n=ze(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new zt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await bw(n,{returnSecureToken:!0}),i=await zt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends wt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vl(t,n,r,i)}}function Sw(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(e,o,t,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(e){return new Set(e.map(({providerId:t})=>t).filter(t=>!!t))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(e,t){const n=oe(e);await vu(!0,n,t);const{providerUserInfo:r}=await qO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=xw(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function bp(e,t,n=!1){const r=await An(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return zt._forOperation(e,"link",r)}async function vu(e,t,n){await bs(t);const r=xw(t.providerData),i=e===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===e,t.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const s=await An(e,Sw(i,o,t,e),n);D(s.idToken,i,"internal-error");const a=hu(s.idToken);D(a,i,"internal-error");const{sub:l}=a;return D(e.uid===l,i,"user-mismatch"),zt._forOperation(e,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Qe(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(e,t,n=!1){const r="signIn",i=await Sw(e,r,t),o=await zt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function yu(e,t){return Ew(ze(e),t)}async function kw(e,t){const n=oe(e);return await vu(!1,n,t.providerId),bp(n,t)}async function Tw(e,t){return _w(oe(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(e,t){return $n(e,"POST","/v1/accounts:signInWithCustomToken",$e(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(e,t){const n=ze(e),r=await AP(n,{token:t,returnSecureToken:!0}),i=await zt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,n){this.factorId=t,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(t,n){return"phoneInfo"in n?Sp._fromServerResponse(t,n):Qe(t,"internal-error")}}class Sp extends wu{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,n){return new Sp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(e,t,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(e,t,n){const r=oe(e),i={requestType:"PASSWORD_RESET",email:t};n&&bu(r,i,n),await gP(r,i)}async function $P(e,t,n){await yw(oe(e),{oobCode:t,newPassword:n})}async function MP(e,t){await fP(oe(e),{oobCode:t})}async function Cw(e,t){const n=oe(e),r=await yw(n,{oobCode:t}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=wu._fromServerResponse(ze(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function DP(e,t){const{data:n}=await Cw(oe(e),t);return n.email}async function zP(e,t,n){const r=ze(e),i=await bw(r,{returnSecureToken:!0,email:t,password:n}),o=await zt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function jP(e,t,n){return yu(oe(e),_r.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(e,t,n){const r=oe(e),i={requestType:"EMAIL_SIGNIN",email:t};D(n.handleCodeInApp,r,"argument-error"),n&&bu(r,i,n),await mP(r,i)}function UP(e,t){const n=mu.parseLink(t);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function BP(e,t,n){const r=oe(e),i=_r.credentialWithLink(t,n||ws());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),yu(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(e,t){return Ue(e,"POST","/v1/accounts:createAuthUri",$e(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(e,t){const n=vp()?ws():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:i}=await HP(oe(e),r);return i||[]}async function WP(e,t){const n=oe(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&bu(n.auth,i,t);const{email:o}=await hP(n.auth,i);o!==e.email&&await e.reload()}async function GP(e,t,n){const r=oe(e),i=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};n&&bu(r.auth,o,n);const{email:s}=await vP(r.auth,o);s!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(e,t){return Ue(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=oe(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await An(r,qP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function YP(e,t){return Iw(oe(e),t,null)}function XP(e,t){return Iw(oe(e),null,t)}async function Iw(e,t,n){const{auth:r}=e,o={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await An(e,ww(r,o));await e._updateTokensIfNecessary(s,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||e.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(e==null?void 0:e.idToken)){const s=(n=(t=hu(e.idToken))===null||t===void 0?void 0:t.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new Mi(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new JP(o,i);case"github.com":return new ZP(o,i);case"google.com":return new e3(o,i);case"twitter.com":return new t3(o,i,e.screenName||null);case"custom":case"anonymous":return new Mi(o,null);default:return new Mi(o,r,i)}}class Mi{constructor(t,n,r={}){this.isNewUser=t,this.providerId=n,this.profile=r}}class Ow extends Mi{constructor(t,n,r,i){super(t,n,r),this.username=i}}class JP extends Mi{constructor(t,n){super(t,"facebook.com",n)}}class ZP extends Ow{constructor(t,n){super(t,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class e3 extends Mi{constructor(t,n){super(t,"google.com",n)}}class t3 extends Ow{constructor(t,n,r){super(t,"twitter.com",n,r)}}function n3(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:QP(n)}class Rr{constructor(t,n){this.type=t,this.credential=n}static _fromIdtoken(t){return new Rr("enroll",t)}static _fromMfaPendingCredential(t){return new Rr("signin",t)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(t){var n,r;if(t!=null&&t.multiFactorSession){if(!((n=t.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Rr._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(!((r=t.multiFactorSession)===null||r===void 0)&&r.idToken)return Rr._fromIdtoken(t.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t,n,r){this.session=t,this.hints=n,this.signInResolver=r}static _fromError(t,n){const r=ze(t),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>wu._fromServerResponse(r,a));D(i.mfaPendingCredential,r,"internal-error");const s=Rr._fromMfaPendingCredential(i.mfaPendingCredential);return new xp(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await zt._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return D(n.user,r,"internal-error"),zt._forOperation(n.user,n.operationType,u);default:Qe(r,"internal-error")}})}async resolveSignIn(t){const n=t;return this.signInResolver(n)}}function r3(e,t){var n;const r=oe(e),i=t;return D(t.customData.operationType,r,"argument-error"),D((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),xp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(e,t){return Ue(e,"POST","/v2/accounts/mfaEnrollment:start",$e(e,t))}function o3(e,t){return Ue(e,"POST","/v2/accounts/mfaEnrollment:finalize",$e(e,t))}function s3(e,t){return Ue(e,"POST","/v2/accounts/mfaEnrollment:withdraw",$e(e,t))}class _p{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>wu._fromServerResponse(t.auth,r)))})}static _fromUser(t){return new _p(t)}async getSession(){return Rr._fromIdtoken(await this.user.getIdToken())}async enroll(t,n){const r=t,i=await this.getSession(),o=await An(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(t){var n;const r=typeof t=="string"?t:t.uid,i=await this.user.getIdToken(),o=await An(this.user,s3(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==r),await this.user._updateTokensIfNecessary(o);try{await this.user.reload()}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw s}}}const bc=new WeakMap;function a3(e){const t=oe(e);return bc.has(t)||bc.set(t,_p._fromUser(t)),bc.get(t)}const yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(){const e=Oe();return wp(e)||ro(e)}const u3=1e3,c3=10;class Rw extends Pw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=l3()&&sP(),this.fallbackToPolling=gw(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);oP()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,c3):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},u3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Rw.type="LOCAL";const Ep=Rw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw extends Pw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Aw.type="SESSION";const Jr=Aw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d3(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Su(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await d3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f3{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=js("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function p3(e){Ae().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function h3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g3(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function m3(){return kp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="firebaseLocalStorageDb",v3=1,wl="firebaseLocalStorage",Nw="fbase_key";class Fs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xu(e,t){return e.transaction([wl],t?"readwrite":"readonly").objectStore(wl)}function y3(){const e=indexedDB.deleteDatabase(Lw);return new Fs(e).toPromise()}function Dd(){const e=indexedDB.open(Lw,v3);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(wl,{keyPath:Nw})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(wl)?t(r):(r.close(),await y3(),t(await Dd()))})})}async function Yg(e,t,n){const r=xu(e,!0).put({[Nw]:t,value:n});return new Fs(r).toPromise()}async function w3(e,t){const n=xu(e,!1).get(t),r=await new Fs(n).toPromise();return r===void 0?null:r.value}function Xg(e,t){const n=xu(e,!0).delete(t);return new Fs(n).toPromise()}const b3=800,S3=3;class $w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>S3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(m3()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await h3(),!this.activeServiceWorker)return;this.sender=new f3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||g3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Dd();return await Yg(t,yl,"1"),await Xg(t,yl),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>w3(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=xu(i,!1).getAll();return new Fs(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$w.type="LOCAL";const _s=$w;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x3(e,t){return Ue(e,"POST","/v2/accounts/mfaSignIn:start",$e(e,t))}function _3(e,t){return Ue(e,"POST","/v2/accounts/mfaSignIn:finalize",$e(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E3(e){return(await Ue(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k3(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Mw(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Ye("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",k3().appendChild(r)})}function Dw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3=500,C3=6e4,ha=1e12;class I3{constructor(t){this.auth=t,this.counter=ha,this._widgets=new Map}render(t,n){const r=this.counter;return this._widgets.set(r,new O3(t,this.auth.name,n||{})),this.counter++,r}reset(t){var n;const r=t||ha;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(t){var n;const r=t||ha;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(t){var n;const r=t||ha;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class O3{constructor(t,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof t=="string"?document.getElementById(t):t;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=P3(50);const{callback:t,"expired-callback":n}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},C3)},T3))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function P3(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=Dw("rcb"),R3=new Ds(3e4,6e4),A3="https://www.google.com/recaptcha/api.js?";class L3{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Ae().grecaptcha)===null||t===void 0)&&t.render)}load(t,n=""){return D(N3(n),t,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ae().grecaptcha):new Promise((r,i)=>{const o=Ae().setTimeout(()=>{i(Ye(t,"network-request-failed"))},R3.get());Ae()[Sc]=()=>{Ae().clearTimeout(o),delete Ae()[Sc];const a=Ae().grecaptcha;if(!a){i(Ye(t,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const s=`${A3}?${eo({onload:Sc,render:"explicit",hl:n})}`;Mw(s).catch(()=>{clearTimeout(o),i(Ye(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var n;return!!(!((n=Ae().grecaptcha)===null||n===void 0)&&n.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function N3(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class $3{async load(t){return new I3(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="recaptcha",M3={theme:"light",type:"image"};class D3{constructor(t,n=Object.assign({},M3),r){this.parameters=n,this.type=zw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ze(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new $3:new L3,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(t);return r||new Promise(i=>{const o=s=>{!s||(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof t=="function")t(n);else if(typeof t=="string"){const r=Ae()[t];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const n=document.createElement("div");t.appendChild(n),t=n}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){D(vp()&&!kp(),this.auth,"internal-error"),await z3(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await E3(this.auth);D(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function z3(){let e=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,n){this.verificationId=t,this.onConfirmation=n}confirm(t){const n=zr._fromVerification(this.verificationId,t);return this.onConfirmation(n)}}async function j3(e,t,n){const r=ze(e),i=await _u(r,t,oe(n));return new Tp(i,o=>yu(r,o))}async function F3(e,t,n){const r=oe(e);await vu(!1,r,"phone");const i=await _u(r.auth,t,oe(n));return new Tp(i,o=>kw(r,o))}async function U3(e,t,n){const r=oe(e),i=await _u(r.auth,t,oe(n));return new Tp(i,o=>Tw(r,o))}async function _u(e,t,n){var r;const i=await n.verify();try{D(typeof i=="string",e,"argument-error"),D(n.type===zw,e,"argument-error");let o;if(typeof t=="string"?o={phoneNumber:t}:o=t,"session"in o){const s=o.session;if("phoneNumber"in o)return D(s.type==="enroll",e,"internal-error"),(await i3(e,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(s.type==="signin",e,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return D(a,e,"missing-multi-factor-info"),(await x3(e,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await SP(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function B3(e,t){await bp(oe(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.providerId=Jt.PROVIDER_ID,this.auth=ze(t)}verifyPhoneNumber(t,n){return _u(this.auth,t,oe(n))}static credential(t,n){return zr._fromVerification(t,n)}static credentialFromResult(t){const n=t;return Jt.credentialFromTaggedObject(n)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:n,temporaryProof:r}=t;return n&&r?zr._fromTokenResponse(n,r):null}}Jt.PROVIDER_ID="phone";Jt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,t){return t?Et(t):(D(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends io{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return kn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return kn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function H3(e){return Ew(e.auth,new Cp(e),e.bypassAuthState)}function V3(e){const{auth:t,user:n}=e;return D(n,t,"internal-error"),_w(n,new Cp(e),e.bypassAuthState)}async function W3(e){const{auth:t,user:n}=e;return D(n,t,"internal-error"),bp(n,new Cp(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return H3;case"linkViaPopup":case"linkViaRedirect":return W3;case"reauthViaPopup":case"reauthViaRedirect":return V3;default:Qe(this.auth,"internal-error")}}resolve(t){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G3=new Ds(2e3,1e4);async function q3(e,t,n){const r=ze(e);no(e,t,Mn);const i=oi(r,n);return new xn(r,"signInViaPopup",t,i).executeNotNull()}async function K3(e,t,n){const r=oe(e);no(r.auth,t,Mn);const i=oi(r.auth,n);return new xn(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}async function Y3(e,t,n){const r=oe(e);no(r.auth,t,Mn);const i=oi(r.auth,n);return new xn(r.auth,"linkViaPopup",t,i,r).executeNotNull()}class xn extends jw{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return D(t,this.auth,"internal-error"),t}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const t=js();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,G3.get())};t()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3="pendingRedirect",Ko=new Map;class Q3 extends jw{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ko.get(this.auth._key());if(!t){try{const r=await J3(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ko.set(this.auth._key(),t)}return this.bypassAuthState||Ko.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J3(e,t){const n=Uw(t),r=Fw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Ip(e,t){return Fw(e)._set(Uw(t),"true")}function Z3(){Ko.clear()}function Op(e,t){Ko.set(e._key(),t)}function Fw(e){return Et(e._redirectPersistence)}function Uw(e){return Dr(X3,e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(e,t,n){return tR(e,t,n)}async function tR(e,t,n){const r=ze(e);no(e,t,Mn);const i=oi(r,n);return await Ip(i,r),i._openRedirect(r,t,"signInViaRedirect")}function nR(e,t,n){return rR(e,t,n)}async function rR(e,t,n){const r=oe(e);no(r.auth,t,Mn);const i=oi(r.auth,n);await Ip(i,r.auth);const o=await Bw(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",o)}function iR(e,t,n){return oR(e,t,n)}async function oR(e,t,n){const r=oe(e);no(r.auth,t,Mn);const i=oi(r.auth,n);await vu(!1,r,t.providerId),await Ip(i,r.auth);const o=await Bw(r);return i._openRedirect(r.auth,t,"linkViaRedirect",o)}async function sR(e,t){return await ze(e)._initializationPromise,Eu(e,t,!1)}async function Eu(e,t,n=!1){const r=ze(e),i=oi(r,t),s=await new Q3(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function Bw(e){const t=js(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=10*60*1e3;class Hw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Vw(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=aR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(t))}saveEventToCache(t){this.cachedEventUids.add(Qg(t)),this.lastProcessedEventTime=Date.now()}}function Qg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Vw({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lR(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vw(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(e,t={}){return Ue(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cR=/^https?/;async function dR(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ww(e);for(const n of t)try{if(fR(n))return}catch{}Qe(e,"unauthorized-domain")}function fR(e){const t=ws(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!cR.test(n))return!1;if(uR.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new Ds(3e4,6e4);function Jg(){const e=Ae().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function hR(e){return new Promise((t,n)=>{var r,i,o;function s(){Jg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(Ye(e,"network-request-failed"))},timeout:pR.get()})}if(!((i=(r=Ae().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ae().gapi)===null||o===void 0)&&o.load)s();else{const a=Dw("iframefcb");return Ae()[a]=()=>{gapi.load?s():n(Ye(e,"network-request-failed"))},Mw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ma=null,t})}let Ma=null;function gR(e){return Ma=Ma||hR(e),Ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new Ds(5e3,15e3),vR="__/auth/iframe",yR="emulator/auth/iframe",wR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SR(e){const t=e.config;D(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?yp(t,yR):`https://${e.config.authDomain}/${vR}`,r={apiKey:t.apiKey,appName:e.name,v:to},i=bR.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${eo(r).slice(1)}`}async function xR(e){const t=await gR(e),n=Ae().gapi;return D(n,e,"internal-error"),t.open({where:document.body,url:SR(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ye(e,"network-request-failed"),a=Ae().setTimeout(()=>{o(s)},mR.get());function l(){Ae().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ER=500,kR=600,TR="_blank",CR="http://localhost";class Zg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IR(e,t,n,r=ER,i=kR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_R),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Oe().toLowerCase();n&&(a=dw(u)?TR:n),cw(u)&&(t=t||CR,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,y])=>`${h}${v}=${y},`,"");if(iP(u)&&a!=="_self")return OR(t||"",a),new Zg(null);const d=window.open(t||"",a,c);D(d,e,"popup-blocked");try{d.focus()}catch{}return new Zg(d)}function OR(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="__/auth/handler",RR="emulator/auth/handler";function zd(e,t,n,r,i,o){D(e.config.authDomain,e,"auth-domain-config-required"),D(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:to,eventId:i};if(t instanceof Mn){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",lk(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof oo){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${AR(e)}?${eo(a).slice(1)}`}function AR({config:e}){return e.emulator?yp(e,RR):`https://${e.authDomain}/${PR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="webStorageSupport";class LR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jr,this._completeRedirectFn=Eu,this._overrideRedirectResult=Op}async _openPopup(t,n,r,i){var o;en((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=zd(t,n,r,ws(),i);return IR(t,s,js())}async _openRedirect(t,n,r,i){return await this._originValidation(t),p3(zd(t,n,r,ws(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(en(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await xR(t),r=new Hw(t);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xc,{type:xc},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[xc];s!==void 0&&n(!!s),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return gw()||wp()||ro()}}const NR=LR;class $R{constructor(t){this.factorId=t}_process(t,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(t,n.credential,r);case"signin":return this._finalizeSignIn(t,n.credential);default:return fn("unexpected MultiFactorSessionType")}}}class Pp extends $R{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Pp(t)}_finalizeEnroll(t,n,r){return o3(t,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,n){return _3(t,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Gw{constructor(){}static assertion(t){return Pp._fromCredential(t)}}Gw.FACTOR_ID="phone";var em="@firebase/auth",tm="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zR(e){Xr(new hr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{D(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),D(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mw(e)},c=new lP(a,l,u);return FO(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Xr(new hr("auth-internal",t=>{const n=ze(t.getProvider("auth").getImmediate());return(r=>new MR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(em,tm,DR(e)),ur(em,tm,"esm2017")}zR("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=2e3;async function FR(e,t,n){var r;const{BuildInfo:i}=Zr();en(t.sessionId,"AuthEvent did not contain a session ID");const o=await WR(t.sessionId),s={};return ro()?s.ibi=i.packageName:zs()?s.apn=i.packageName:Qe(e,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,zd(e,n,t.type,void 0,(r=t.eventId)!==null&&r!==void 0?r:void 0,s)}async function UR(e){const{BuildInfo:t}=Zr(),n={};ro()?n.iosBundleId=t.packageName:zs()?n.androidPackageName=t.packageName:Qe(e,"operation-not-supported-in-this-environment"),await Ww(e,n)}function BR(e){const{cordova:t}=Zr();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,rP()?"_blank":"_system","location=yes"),n(i)})})}async function HR(e,t,n){const{cordova:r}=Zr();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var d;o();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(Ye(e,"redirect-cancelled-by-user"))},jR))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}t.addPassiveListener(l),document.addEventListener("resume",u,!1),zs()&&document.addEventListener("visibilitychange",c,!1),i=()=>{t.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function VR(e){var t,n,r,i,o,s,a,l,u,c;const d=Zr();D(typeof((t=d==null?void 0:d.universalLinks)===null||t===void 0?void 0:t.subscribe)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((o=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((l=(a=(s=d==null?void 0:d.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function WR(e){const t=GR(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function GR(e){if(en(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=20;class KR extends Hw{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function YR(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:JR(),postBody:null,tenantId:e.tenantId,error:Ye(e,"no-auth-event")}}function XR(e,t){return jd()._set(Fd(e),t)}async function nm(e){const t=await jd()._get(Fd(e));return t&&await jd()._remove(Fd(e)),t}function QR(e,t){var n,r;const i=e4(t);if(i.includes("/__/auth/callback")){const o=Da(i),s=o.firebaseError?ZR(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ye(a):null;return l?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function JR(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<qR;n++){const r=Math.floor(Math.random()*t.length);e.push(t.charAt(r))}return e.join("")}function jd(){return Et(Ep)}function Fd(e){return Dr("authEvent",e.config.apiKey,e.name)}function ZR(e){try{return JSON.parse(e)}catch{return null}}function e4(e){const t=Da(e),n=t.link?decodeURIComponent(t.link):void 0,r=Da(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return Da(i).link||i||r||n||e}function Da(e){if(!(e!=null&&e.includes("?")))return{};const[t,...n]=e.split("?");return Ti(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=500;class n4{constructor(){this._redirectPersistence=Jr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Eu,this._overrideRedirectResult=Op}async _initialize(t){const n=t._key();let r=this.eventManagers.get(n);return r||(r=new KR(t),this.eventManagers.set(n,r),this.attachCallbackListeners(t,r)),r}_openPopup(t){Qe(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,n,r,i){VR(t);const o=await this._initialize(t);await o.initialized(),o.resetRedirect(),Z3(),await this._originValidation(t);const s=YR(t,r,i);await XR(t,s);const a=await FR(t,s,n),l=await BR(a);return HR(t,o,l)}_isIframeWebStorageSupported(t,n){throw new Error("Method not implemented.")}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UR(t)),this.originValidationPromises[n]}attachCallbackListeners(t,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Zr(),s=setTimeout(async()=>{await nm(t),n.onEvent(rm())},t4),a=async c=>{clearTimeout(s);const d=await nm(t);let h=null;d&&(c==null?void 0:c.url)&&(h=QR(d,c.url)),n.onEvent(h||rm())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Zr().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const r4=n4;function rm(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ye("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(e,t){ze(e)._logFramework(t)}var o4="@firebase/auth-compat",s4="0.2.19";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=1e3;function Yo(){var e;return((e=self==null?void 0:self.location)===null||e===void 0?void 0:e.protocol)||null}function l4(){return Yo()==="http:"||Yo()==="https:"}function qw(e=Oe()){return!!((Yo()==="file:"||Yo()==="ionic:"||Yo()==="capacitor:")&&e.toLowerCase().match(/iphone|ipad|ipod|android/))}function u4(){return cp()||x1()}function c4(){return E1()&&(document==null?void 0:document.documentMode)===11}function d4(e=Oe()){return/Edge\/\d+/.test(e)}function f4(e=Oe()){return c4()||d4(e)}function Kw(){try{const e=self.localStorage,t=js();if(e)return e.setItem(t,"1"),e.removeItem(t),f4()?pl():!0}catch{return Rp()&&pl()}return!1}function Rp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function _c(){return(l4()||_1()||qw())&&!u4()&&Kw()&&!Rp()}function Yw(){return qw()&&typeof document<"u"}async function p4(){return Yw()?new Promise(e=>{const t=setTimeout(()=>{e(!1)},a4);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})}):!1}function h4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={LOCAL:"local",NONE:"none",SESSION:"session"},Eo=D,Xw="persistence";function g4(e,t){if(Eo(Object.values(xt).includes(t),e,"invalid-persistence-type"),cp()){Eo(t!==xt.SESSION,e,"unsupported-persistence-type");return}if(x1()){Eo(t===xt.NONE,e,"unsupported-persistence-type");return}if(Rp()){Eo(t===xt.NONE||t===xt.LOCAL&&pl(),e,"unsupported-persistence-type");return}Eo(t===xt.NONE||Kw(),e,"unsupported-persistence-type")}async function Ud(e){await e._initializationPromise;const t=Qw(),n=Dr(Xw,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function m4(e,t){const n=Qw();if(!n)return[];const r=Dr(Xw,e,t);switch(n.getItem(r)){case xt.NONE:return[qi];case xt.LOCAL:return[_s,Jr];case xt.SESSION:return[Jr];default:return[]}}function Qw(){var e;try{return((e=h4())===null||e===void 0?void 0:e.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=D;class Xn{constructor(){this.browserResolver=Et(NR),this.cordovaResolver=Et(r4),this.underlyingResolver=null,this._redirectPersistence=Jr,this._completeRedirectFn=Eu,this._overrideRedirectResult=Op}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,n,r,i)}async _openRedirect(t,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,n,r,i)}_isIframeWebStorageSupported(t,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,n)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return Yw()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return v4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await p4();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(e){return e.unwrap()}function y4(e){return e.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(e){return Zw(e)}function b4(e,t){var n,r;const i=(n=t.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=t)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const o=t;o.resolver=new S4(e,r3(e,t))}else if(i){const o=Zw(t),s=t;o&&(s.credential=o,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function Zw(e){const{_tokenResponse:t}=e instanceof wt?e.customData:e;if(!t)return null;if(!(e instanceof wt)&&"temporaryProof"in t&&"phoneNumber"in t)return Jt.credentialFromResult(e);const n=t.providerId;if(!n||n===_o.PASSWORD)return null;let r;switch(n){case _o.GOOGLE:r=un;break;case _o.FACEBOOK:r=ln;break;case _o.GITHUB:r=cn;break;case _o.TWITTER:r=dn;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=t;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?Ki._create(n,a):mn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new $i(n).credential({idToken:i,accessToken:o,rawNonce:l})}return e instanceof wt?r.credentialFromError(e):r.credentialFromResult(e)}function ft(e,t){return t.catch(n=>{throw n instanceof wt&&b4(e,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:w4(n),additionalUserInfo:n3(n),user:_n.getOrCreate(i)}})}async function Bd(e,t){const n=await t;return{verificationId:n.verificationId,confirm:r=>ft(e,n.confirm(r))}}class S4{constructor(t,n){this.resolver=n,this.auth=y4(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return ft(Jw(this.auth),this.resolver.resolveSignIn(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t){this._delegate=t,this.multiFactor=a3(t)}static getOrCreate(t){return _n.USER_MAP.has(t)||_n.USER_MAP.set(t,new _n(t)),_n.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return ft(this.auth,kw(this._delegate,t))}async linkWithPhoneNumber(t,n){return Bd(this.auth,F3(this._delegate,t,n))}async linkWithPopup(t){return ft(this.auth,Y3(this._delegate,t,Xn))}async linkWithRedirect(t){return await Ud(ze(this.auth)),iR(this._delegate,t,Xn)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return ft(this.auth,Tw(this._delegate,t))}reauthenticateWithPhoneNumber(t,n){return Bd(this.auth,U3(this._delegate,t,n))}reauthenticateWithPopup(t){return ft(this.auth,K3(this._delegate,t,Xn))}async reauthenticateWithRedirect(t){return await Ud(ze(this.auth)),nR(this._delegate,t,Xn)}sendEmailVerification(t){return WP(this._delegate,t)}async unlink(t){return await RP(this._delegate,t),this}updateEmail(t){return YP(this._delegate,t)}updatePassword(t){return XP(this._delegate,t)}updatePhoneNumber(t){return B3(this._delegate,t)}updateProfile(t){return KP(this._delegate,t)}verifyBeforeUpdateEmail(t,n){return GP(this._delegate,t,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_n.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=D;class Hd{constructor(t,n){if(this.app=t,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=t.options;ko(r,"invalid-api-key",{appName:t.name}),ko(r,"invalid-api-key",{appName:t.name});const i=typeof window<"u"?Xn:void 0;this._delegate=n.initialize({options:{persistence:x4(r,t.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(zO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_n.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,n){uP(this._delegate,t,n)}applyActionCode(t){return MP(this._delegate,t)}checkActionCode(t){return Cw(this._delegate,t)}confirmPasswordReset(t,n){return $P(this._delegate,t,n)}async createUserWithEmailAndPassword(t,n){return ft(this._delegate,zP(this._delegate,t,n))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return VP(this._delegate,t)}isSignInWithEmailLink(t){return UP(this._delegate,t)}async getRedirectResult(){ko(_c(),this._delegate,"operation-not-supported-in-this-environment");const t=await sR(this._delegate,Xn);return t?ft(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){i4(this._delegate,t)}onAuthStateChanged(t,n,r){const{next:i,error:o,complete:s}=im(t,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(t,n,r){const{next:i,error:o,complete:s}=im(t,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(t,n){return FP(this._delegate,t,n)}sendPasswordResetEmail(t,n){return NP(this._delegate,t,n||void 0)}async setPersistence(t){g4(this._delegate,t);let n;switch(t){case xt.SESSION:n=Jr;break;case xt.LOCAL:n=await Et(_s)._isAvailable()?_s:Ep;break;case xt.NONE:n=qi;break;default:return Qe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return ft(this._delegate,PP(this._delegate))}signInWithCredential(t){return ft(this._delegate,yu(this._delegate,t))}signInWithCustomToken(t){return ft(this._delegate,LP(this._delegate,t))}signInWithEmailAndPassword(t,n){return ft(this._delegate,jP(this._delegate,t,n))}signInWithEmailLink(t,n){return ft(this._delegate,BP(this._delegate,t,n))}signInWithPhoneNumber(t,n){return Bd(this._delegate,j3(this._delegate,t,n))}async signInWithPopup(t){return ko(_c(),this._delegate,"operation-not-supported-in-this-environment"),ft(this._delegate,q3(this._delegate,t,Xn))}async signInWithRedirect(t){return ko(_c(),this._delegate,"operation-not-supported-in-this-environment"),await Ud(this._delegate),eR(this._delegate,t,Xn)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return DP(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Hd.Persistence=xt;function im(e,t,n){let r=e;typeof e!="function"&&({next:r,error:t,complete:n}=e);const i=r;return{next:s=>i(s&&_n.getOrCreate(s)),error:t,complete:n}}function x4(e,t){const n=m4(e,t);if(typeof self<"u"&&!n.includes(_s)&&n.push(_s),typeof window<"u")for(const r of[Ep,Jr])n.includes(r)||n.push(r);return n.includes(qi)||n.push(qi),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.providerId="phone",this._delegate=new Jt(Jw(xr.auth()))}static credential(t,n){return Jt.credential(t,n)}verifyPhoneNumber(t,n){return this._delegate.verifyPhoneNumber(t,n)}unwrap(){return this._delegate}}Ap.PHONE_SIGN_IN_METHOD=Jt.PHONE_SIGN_IN_METHOD;Ap.PROVIDER_ID=Jt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=D;class E4{constructor(t,n,r=xr.app()){var i;_4((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new D3(t,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4="auth-compat";function T4(e){e.INTERNAL.registerComponent(new hr(k4,t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("auth");return new Hd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ui.EMAIL_SIGNIN,PASSWORD_RESET:ui.PASSWORD_RESET,RECOVER_EMAIL:ui.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ui.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ui.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ui.VERIFY_EMAIL}},EmailAuthProvider:_r,FacebookAuthProvider:ln,GithubAuthProvider:cn,GoogleAuthProvider:un,OAuthProvider:$i,SAMLAuthProvider:ml,PhoneAuthProvider:Ap,PhoneMultiFactorGenerator:Gw,RecaptchaVerifier:E4,TwitterAuthProvider:dn,Auth:Hd,AuthCredential:io,Error:wt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o4,s4)}T4(xr);const C4={apiKey:"AIzaSyDDMsOwTqVq2VoGRyDvvLEbZZvFZP9UuLE",authDomain:"ecommerce-b7c65.firebaseapp.com",projectId:"ecommerce-b7c65",storageBucket:"ecommerce-b7c65.appspot.com",messagingSenderId:"45436486623",appId:"1:45436486623:web:348d4c7d1cade34fa57a6a"};xr.initializeApp(C4);const Tn=xr.auth(),eb=new xr.auth.GoogleAuthProvider;var I4=function(e){return{display:e?"flex":"none"}},om="#4fa94d",O4={"aria-busy":!0,role:"status"},sm=globalThis&&globalThis.__assign||function(){return sm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sm.apply(this,arguments)},am=globalThis&&globalThis.__assign||function(){return am=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},am.apply(this,arguments)},lm=globalThis&&globalThis.__assign||function(){return lm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lm.apply(this,arguments)},um=globalThis&&globalThis.__assign||function(){return um=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},um.apply(this,arguments)},cm=globalThis&&globalThis.__assign||function(){return cm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cm.apply(this,arguments)},dm=globalThis&&globalThis.__assign||function(){return dm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},dm.apply(this,arguments)},fm=globalThis&&globalThis.__assign||function(){return fm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fm.apply(this,arguments)},tb=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Wt=242.776657104492,P4=1.6,R4=As(pm||(pm=tb([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),Wt*.14,Wt,Wt*.11,Wt*.35,Wt,Wt*.35,Wt*.01,Wt,Wt*.99);F.path(hm||(hm=tb([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),Wt*.01,Wt,R4,P4);var pm,hm,gm=globalThis&&globalThis.__assign||function(){return gm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gm.apply(this,arguments)},mm=globalThis&&globalThis.__assign||function(){return mm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mm.apply(this,arguments)},Ci=globalThis&&globalThis.__assign||function(){return Ci=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ci.apply(this,arguments)},Ec=20,A4=function(e){return["M"+e+" 0c0-9.94-8.06",e,e,e].join("-")},L4=function(e,t,n){var r=Math.max(e,t),i=-n-r/2+1,o=n*2+r;return[i,i,o,o].join(" ")},ku=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,i=r===void 0?80:r,o=e.color,s=o===void 0?om:o,a=e.secondaryColor,l=a===void 0?om:a,u=e.ariaLabel,c=u===void 0?"oval-loading":u,d=e.wrapperStyle,h=e.wrapperClass,v=e.visible,y=v===void 0?!0:v,b=e.strokeWidth,w=b===void 0?2:b,p=e.strokeWidthSecondary;return f("div",{...Ci({style:Ci(Ci(Ci({},I4(y)),d),{padding:3}),className:h,"data-testid":"oval-loading","aria-label":c},O4),children:f("svg",{width:i,height:n,viewBox:L4(Number(w),Number(p||w),Ec),xmlns:"http://www.w3.org/2000/svg",stroke:s,"data-testid":"oval-svg",children:f("g",{fill:"none",fillRule:"evenodd",children:P("g",{transform:"translate(1 1)",strokeWidth:Number(p||w),"data-testid":"oval-secondary-group",children:[f("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:Ec,stroke:l,strokeWidth:w}),f("path",{d:A4(Ec),children:f("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})})},vm=globalThis&&globalThis.__assign||function(){return vm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},vm.apply(this,arguments)},ym=globalThis&&globalThis.__assign||function(){return ym=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ym.apply(this,arguments)},wm=globalThis&&globalThis.__assign||function(){return wm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wm.apply(this,arguments)},bm=globalThis&&globalThis.__assign||function(){return bm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},bm.apply(this,arguments)},N4=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var i=t.split("."),o=i.length,s=r[i[0]],a=1;s!=null&&a<o;)s=s[i[a]],a+=1;if(typeof s<"u")return s}return n}},Lp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Sm=globalThis&&globalThis.__assign||function(){return Sm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Sm.apply(this,arguments)},$4=As(xm||(xm=Lp([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));F.svg(_m||(_m=Lp([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),$4,N4("speed","0.75"));F.polyline(Em||(Em=Lp([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var xm,_m,Em,km=globalThis&&globalThis.__assign||function(){return km=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},km.apply(this,arguments)},Tm=globalThis&&globalThis.__assign||function(){return Tm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tm.apply(this,arguments)},Cm=globalThis&&globalThis.__assign||function(){return Cm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cm.apply(this,arguments)},Np=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Im=globalThis&&globalThis.__assign||function(){return Im=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Im.apply(this,arguments)},M4=As(Om||(Om=Np([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));F.polygon(Pm||(Pm=Np([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),M4);F.svg(Rm||(Rm=Np([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Om,Pm,Rm,Am=globalThis&&globalThis.__assign||function(){return Am=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Am.apply(this,arguments)},Lm=globalThis&&globalThis.__assign||function(){return Lm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lm.apply(this,arguments)},Nm=globalThis&&globalThis.__assign||function(){return Nm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Nm.apply(this,arguments)},$m=globalThis&&globalThis.__assign||function(){return $m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},$m.apply(this,arguments)},Mm=globalThis&&globalThis.__assign||function(){return Mm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Mm.apply(this,arguments)},Dm=globalThis&&globalThis.__assign||function(){return Dm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Dm.apply(this,arguments)},zm=globalThis&&globalThis.__assign||function(){return zm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zm.apply(this,arguments)},jm=globalThis&&globalThis.__assign||function(){return jm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},jm.apply(this,arguments)},Fm=globalThis&&globalThis.__assign||function(){return Fm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Fm.apply(this,arguments)},Um=globalThis&&globalThis.__assign||function(){return Um=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Um.apply(this,arguments)},Bm=globalThis&&globalThis.__assign||function(){return Bm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Bm.apply(this,arguments)},Hm=globalThis&&globalThis.__assign||function(){return Hm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Hm.apply(this,arguments)},Vm=globalThis&&globalThis.__assign||function(){return Vm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Vm.apply(this,arguments)};const D4=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`,z4=F.section`
    background: #fbfbfb;
    border-radius: ${e=>e.theme.borderRadiusMd};
    border: 1px solid ${e=>e.theme.cultured};
    height: auto;
    width: 90%;
    margin: 25% auto;
    padding: 22px;

    @media (min-width: 540px) {
        margin: 5% auto;
        width: 100%;
        max-width: 350px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        max-width: 370px;
    }


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    img {
        width: 100%;
        height: auto;
        max-width: 60px;
    }

`,j4=F.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;

    div {
        position: relative;
        width: 85%;

        @media (max-width: 300px) {
            width: 100%;
            }


        input {
            font-size: ${e=>e.theme.font2xs};
            color:  ${e=>e.theme.onyx};
            padding: 10px 10px 10px 40px;
            border: 1px solid ${e=>e.theme.cultured};
            border-radius: ${e=>e.theme.borderRadiusMd};

            &:focus {
                border: 1px solid ${e=>e.theme.cultured};
                outline: none;
            }

            &::-webkit-search-cancel-button { 
                display: none;
            }

            &[type="submit"] {
                cursor: pointer;
                background: ${e=>e.theme.primary};
                color: ${e=>e.theme.white};
                font-weight: 600;
                margin-top: 10px;
                padding: 10px;
                text-transform: capitalize;

                ${e=>e.fadeText&&Ee`
                       color: rgba(255, 255, 255, 0.8);
                `}
               

                &:hover {
                    background: ${e=>e.theme.primaryDark};
                }
            }
        }


        span {
            position: absolute;
            top: 50%;
            left: 1.5px;
            background: transparent;
            transform: translateY(-50%);
            color:  ${e=>e.theme.primaryDark};
            font-size: 18px;
            padding: 8px 15px;

            &.spinner {
                top: 60%;

                @media (max-width: 350px) {
                        display: none;
                        }
        }

        }

        p.password {
            position: absolute;
            top: 50%;
            right: 1.5px;
            transform: translateY(-50%);
            color:  ${e=>e.theme.onyx};
            font-size: ${e=>e.theme.font3xs};
            padding: 8px 15px;
            cursor: pointer;
        }

        &:nth-child(2) {
            text-align: center;
            position: relative;
            font-size: ${e=>e.theme.fontsm};
            text-transform: uppercase;

            &::after {
                position: absolute;
                top: 8px;
                content: '';
                right: 80px;
                width: 30px;
                height: 1px;
                background: ${e=>e.theme.eerieBlack};
            }

            &::before {
                position: absolute;
                top: 8px;
                left: 80px;
                content: '';
                width: 30px;
                height: 1px;
                background: ${e=>e.theme.eerieBlack};
            }


            @media (max-width: 370px) {
                &::after {
                    right: 65px;
                }
                &::before {
                    left: 65px;
                }
            }

            @media (max-width: 300px) {
                &::after,
                &::before  {
                    display: none;
                }
            }

        }

        &.google {
            z-index: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;


            .g-button{
            border: 1px solid rgb(66, 133, 244);
            background: rgb(66, 133, 244);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            box-shadow: 0 2px 6px #2a2a2a3d;
            border-radius: ${e=>e.theme.borderRadiusMd};
            cursor: pointer;

                &:hover {
                    background: rgb(66, 133, 225);
                }
            }

            .g-logo{
            width: 30px;
            height: 30px;
            padding: 5px;
            background: ${e=>e.theme.white};
            justify-self: flex-start;
            margin-right: 15px;
            border-bottom-left-radius:  ${e=>e.theme.borderRadiusMd};
            border-top-left-radius:  ${e=>e.theme.borderRadiusMd};
            }

            .g-text{
            font-size: ${e=>e.theme.font3xs};
            padding: 5px;
            color: ${e=>e.theme.white};
            text-align: center;
            }
        }
    }

`,Wm=F.div`
    display: inline;
    font-weight: 500;
    width: 100%;
    font-size:  ${e=>e.theme.font3xs};


    ${e=>e.right&&Ee`
        text-align: left;
  `}


  
  ${e=>e.central&&Ee`
         text-align: center;
  `}


    p {
        color:  ${e=>e.theme.primaryDark};
        cursor: pointer;
        display: inline;

        &:hover {
            color:  ${e=>e.theme.onyx};
        }
    }
`,F4=()=>{const{t:e}=nn(),[t,n]=C.exports.useState(""),[r,i]=C.exports.useState(""),{loading:o,visible:s,showPassword:a,userInfo:l}=qr(y=>y.userLogin),u=Rs(),c=Zi();C.exports.useEffect(()=>{l&&l.token&&u("/")},[l]);const d=()=>{c({type:"TOGGLE_PASSWORD"})};return f(D4,{children:P(z4,{children:[f("img",{src:ri,alt:"brand-logo"}),P(j4,{onSubmit:async y=>{if(y.preventDefault(),c({type:"USER_LOGIN_REQUEST"}),!t||!r){te.error(e("Email and password is required")),setTimeout(()=>c({type:"USER_LOGIN_FAIL"}),6e3);return}if(r.length<6){te.error(e("Password must be at least 6 characters long")),setTimeout(()=>c({type:"USER_LOGIN_FAIL"}),6e3);return}try{const b=await Tn.signInWithEmailAndPassword(t,r),{user:w}=b,p=await w.getIdTokenResult();c({type:"USER_LOGIN_DETAILS",payload:{email:w.email,displayName:w.displayName,token:p.token}}),u("/")}catch(b){console.log(b),te.error(e("User is not registered")),setTimeout(()=>c({type:"USER_LOGIN_FAIL"}),6e3)}n(""),i("")},fadeText:o,children:[f("div",{className:"google",onClick:async()=>{Tn.signInWithPopup(eb).then(async y=>{const{user:b}=y,w=await b.getIdTokenResult();c({type:"USER_LOGIN_DETAILS",payload:{email:b.email,displayName:b.displayName,token:w.token}}),u("/")}).catch(y=>{console.log(y),te.error(y.message)})},children:P("div",{className:"g-button",children:[f("img",{className:"g-logo",src:ew,alt:"Google Logo"}),f("p",{className:"g-text",children:e("Sign in with Google")})]})}),f("div",{children:e("or")}),P("div",{children:[f("span",{children:f(fu,{title:e("Email")})}),f("input",{type:"email",name:"email",id:"email",value:t,onChange:y=>n(y.target.value),placeholder:`${e("Email")}...`})]}),P("div",{children:[f("span",{children:f(tw,{title:e("Password")})}),f("input",{type:a?"text":"password",name:"password",id:"password",value:r,onChange:y=>i(y.target.value),placeholder:`${e("Password")}...`,onFocus:()=>c({type:"SET_VISIBLE"})}),s&&f("p",{className:"password",onClick:d,children:a?f(l1,{}):f(a1,{})})]}),f(Wm,{right:!0,children:f("p",{onClick:()=>u("/forgot/password"),children:e("Forgot your password?")})}),P("div",{children:[f("input",{type:"submit",name:"Login",value:e("login"),id:"submit"}),o&&f("span",{className:"spinner",children:f(ku,{height:25,width:25,color:"hsl(0, 0%, 83%)",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:7,strokeWidthSecondary:7})})]}),P(Wm,{central:!0,children:[e("Don't have an account?")," \xA0 ",f("p",{onClick:()=>u(`/${encodeURI(e("register"))}`),children:e("Sign Up")})]})]}),f("div",{})]})})},U4=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`,B4=F.section`
    background: #fbfbfb;
    border-radius: ${e=>e.theme.borderRadiusMd};
    border: 1px solid ${e=>e.theme.cultured};
    height: auto;
    width: 90%;
    margin: 25% auto;
    padding: 22px;

    @media (min-width: 540px) {
        margin: 5% auto;
        width: 100%;
        max-width: 350px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        max-width: 370px;
    }


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    img {
        width: 100%;
        height: auto;
        max-width: 60px;
    }

`,H4=F.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;

    div {
        position: relative;
        width: 85%;

        @media (max-width: 300px) {
            width: 100%;
            }


        input {
            font-size: ${e=>e.theme.font2xs};
            color:  ${e=>e.theme.onyx};
            padding: 10px 10px 10px 40px;
            border: 1px solid ${e=>e.theme.cultured};
            border-radius: ${e=>e.theme.borderRadiusMd};

            &:focus {
                border: 1px solid ${e=>e.theme.cultured};
                outline: none;
            }

            &::-webkit-search-cancel-button { 
                display: none;
            }

            &[type="submit"] {
                cursor: pointer;
                background: ${e=>e.theme.primary};
                color: ${e=>e.theme.white};
                font-weight: 600;
                margin-top: 10px;
                padding: 10px;
                text-transform: capitalize;

                ${e=>e.fadeText&&Ee`
                       color: rgba(255, 255, 255, 0.8);
                `}
               

                &:hover {
                    background: ${e=>e.theme.primaryDark};
                }
            }
        }


        span {
            position: absolute;
            top: 50%;
            left: 1.5px;
            background: transparent;
            transform: translateY(-50%);
            color:  ${e=>e.theme.primaryDark};
            font-size: 18px;
            padding: 8px 15px;

            &.spinner {
                top: 60%;

                @media (max-width: 350px) {
                        display: none;
                        }
            }
        }
       

        &:nth-child(2) {
            text-align: center;
            position: relative;
            font-size: ${e=>e.theme.fontsm};
            text-transform: uppercase;
            margin: 20px auto;

            &::after {
                position: absolute;
                top: 8px;
                content: '';
                right: 80px;
                width: 30px;
                height: 1px;
                background: ${e=>e.theme.eerieBlack};
            }

            &::before {
                position: absolute;
                top: 8px;
                left: 80px;
                content: '';
                width: 30px;
                height: 1px;
                background: ${e=>e.theme.eerieBlack};
            }


            @media (max-width: 370px) {
                &::after {
                    right: 65px;
                }
                &::before {
                    left: 65px;
                }
            }

            @media (max-width: 300px) {
                &::after,
                &::before  {
                    display: none;
                }
            }

        }

        &.google {
            z-index: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;


            .g-button{
                border: 1px solid rgb(66, 133, 244);
                background: rgb(66, 133, 244);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                box-shadow: 0 2px 6px #2a2a2a3d;
                border-radius: ${e=>e.theme.borderRadiusMd};
                cursor: pointer;

                &:hover {
                    background: rgb(66, 133, 225);
                }
            }

            .g-logo{
            width: 30px;
            height: 30px;
            padding: 5px;
            background: ${e=>e.theme.white};
            justify-self: flex-start;
            margin-right: 15px;
            border-bottom-left-radius:  ${e=>e.theme.borderRadiusMd};
            border-top-left-radius:  ${e=>e.theme.borderRadiusMd};
            }

            .g-text{
            font-size: ${e=>e.theme.font3xs};
            padding: 5px;
            color: ${e=>e.theme.white};
            text-align: center;
            }
        }

    }

`,V4=F.div`
    display: inline;
    font-weight: 500;
    width: 100%;
    font-size:  ${e=>e.theme.font3xs};


    ${e=>e.right&&Ee`
        text-align: left;
  `}


  
  ${e=>e.central&&Ee`
         text-align: center;
  `}


    p {
        color:  ${e=>e.theme.primaryDark};
        cursor: pointer;
        display: inline;

        &:hover {
            color:  ${e=>e.theme.onyx};
        }
    }
`,W4=()=>{const[e,t]=C.exports.useState(""),{t:n}=nn(),r=Rs(),i=Zi(),{loading:o}=qr(u=>u.userRegister),{userInfo:s}=qr(u=>({...u.userLogin}));return C.exports.useEffect(()=>{s&&s.token&&r("/")},[s]),f(U4,{children:P(B4,{children:[f("img",{src:ri,alt:"brand-logo"}),P(H4,{onSubmit:async u=>{if(u.preventDefault(),i({type:"USER_REGISTER_REQUEST"}),!e){te.error(n("Email is required!")),setTimeout(()=>i({type:"USER_REGISTER_FAIL"}),6e3);return}const d={url:"https://wizcart.netlify.app/register/complete",handleCodeInApp:!0};await Tn.sendSignInLinkToEmail(e,d),te.success(`${n(`Email is sent to ${e}. Click to complete registration`)}`),setTimeout(()=>i({type:"USER_REGISTER_SUCCESS"}),6e3),window.localStorage.setItem("emailForRegistration",e),t("")},fadeText:o,children:[f("div",{className:"google",onClick:async()=>{const c={url:"https://wizcart.netlify.app/register/complete",handleCodeInApp:!0};Tn.signInWithPopup(eb).then(async d=>{const{user:h}=d,v=await h.email;await Tn.sendSignInLinkToEmail(v,c),te.success(`${n(`Email is sent to ${v}. Click to complete registration`)}`),setTimeout(()=>i({type:"USER_REGISTER_SUCCESS"}),6e3),window.localStorage.setItem("emailForRegistration",v)}).catch(d=>{console.log(d),te.error(d.message)})},children:P("div",{className:"g-button",children:[f("img",{className:"g-logo",src:ew,alt:"Google Logo"}),f("p",{className:"g-text",children:n("Sign up with Google")})]})}),f("div",{children:n("or")}),P("div",{children:[f("span",{children:f(fu,{title:n("Email")})}),f("input",{type:"email",name:"email",id:"email",value:e,onChange:u=>t(u.target.value),placeholder:`${n("Email")}...`,autoFocus:!0})]}),P("div",{children:[f("input",{type:"submit",name:"register",value:n("register"),id:"submit"}),o&&f("span",{className:"spinner",children:f(ku,{height:25,width:25,color:"hsl(0, 0%, 83%)",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:7,strokeWidthSecondary:7})})]}),P(V4,{central:!0,children:[n("Already have an account?")," \xA0 ",f("p",{onClick:()=>r(`/${encodeURI(n("login"))}`),children:n("login")})]})]}),f("div",{})]})})},G4=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`,q4=F.section`
    background: #fbfbfb;
    border-radius: ${e=>e.theme.borderRadiusMd};
    border: 1px solid ${e=>e.theme.cultured};
    height: auto;
    width: 90%;
    margin: 25% auto;
    padding: 22px;

    @media (min-width: 540px) {
        margin: 5% auto;
        width: 100%;
        max-width: 350px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        max-width: 370px;
    }


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    img {
        width: 100%;
        height: auto;
        max-width: 60px;
    }

`,K4=F.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;

    div {
        position: relative;
        width: 85%;

        @media (max-width: 300px) {
            width: 100%;
            }


        input {
            font-size: ${e=>e.theme.font2xs};
            color:  ${e=>e.theme.onyx};
            padding: 10px 10px 10px 40px;
            border: 1px solid ${e=>e.theme.cultured};
            border-radius: ${e=>e.theme.borderRadiusMd};

            &:focus {
                border: 1px solid ${e=>e.theme.cultured};
                outline: none;
            }

            &::-webkit-search-cancel-button { 
                display: none;
            }

            &[type="submit"] {
                cursor: pointer;
                background: ${e=>e.theme.primary};
                color: ${e=>e.theme.white};
                font-weight: 600;
                margin-top: 10px;
                padding: 10px;
                text-transform: capitalize;

                ${e=>e.fadeText&&Ee`
                       color: rgba(255, 255, 255, 0.8);
                `}
               

                &:hover {
                    background: ${e=>e.theme.primaryDark};
                }
            }
        }


        span {
            position: absolute;
            top: 50%;
            left: 1.5px;
            background: transparent;
            transform: translateY(-50%);
            color:  ${e=>e.theme.primaryDark};
            font-size: 18px;
            padding: 8px 15px;

            &.spinner {
                top: 60%;

                @media (max-width: 350px) {
                        display: none;
                        }
            }
        }

        p.password {
            position: absolute;
            top: 50%;
            right: 1.5px;
            transform: translateY(-50%);
            color:  ${e=>e.theme.onyx};
            font-size: ${e=>e.theme.font3xs};
            padding: 8px 15px;
            cursor: pointer;
        }

    }

`,Y4=()=>{const[e,t]=C.exports.useState(""),[n,r]=C.exports.useState(""),i=Zi(),{loading:o,visible:s,showPassword:a}=qr(h=>h.userRegisterComplete),l=Rs(),{t:u}=nn(),c=()=>{i({type:"TOGGLE_PASSWORD"})};return C.exports.useEffect(()=>{t(window.localStorage.getItem("emailForRegistration"))},[]),f(G4,{children:P(q4,{children:[f("img",{src:ri,alt:"brand-logo"}),P(K4,{onSubmit:async h=>{if(h.preventDefault(),i({type:"USER_REGISTER_COMPLETE_REQUEST"}),!e||!n){te.error(u("Email and password is required")),setTimeout(()=>i({type:"USER_REGISTER_COMPLETE_FAIL"}),6e3);return}if(n.length<6){te.error(u("Password must be at least 6 characters long")),setTimeout(()=>i({type:"USER_REGISTER_COMPLETE_FAIL"}),6e3);return}try{if((await Tn.signInWithEmailLink(e,window.location.href)).user.emailVerified){window.localStorage.removeItem("emailForRegistration");let y=Tn.currentUser;await y.updatePassword(n);const b=await y.getIdTokenResult();console.log("user",y,"token",b),setTimeout(()=>i({type:"USER_REGISTER_COMPLETE_SUCCESS"}),6e3),l("/"),i({type:"USER_REGISTER_COMPLETE_FAIL"})}}catch(v){console.log(v),te.error(v.message),setTimeout(()=>i({type:"USER_REGISTER_COMPLETE_FAIL"}),6e3)}t(""),r("")},fadeText:o,children:[P("div",{children:[f("span",{children:f(fu,{title:u("Email")})}),f("input",{type:"email",name:"email",id:"email",value:e,placeholder:`${u("Email")}...`,disabled:!0})]}),P("div",{children:[f("span",{children:f(tw,{title:u("Password")})}),f("input",{type:a?"text":"password",name:"password",id:"password",value:n,placeholder:`${u("Password")}...`,onChange:h=>r(h.target.value),onFocus:()=>i({type:"SET_VISIBLE"}),autoFocus:!0}),s&&f("p",{className:"password",onClick:c,children:a?f(l1,{}):f(a1,{})})]}),P("div",{children:[f("input",{type:"submit",name:"completeRegistration",value:u("complete registration"),id:"submit"}),o&&f("span",{className:"spinner",children:f(ku,{height:25,width:25,color:"hsl(0, 0%, 83%)",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:7,strokeWidthSecondary:7})})]})]}),f("div",{})]})})},X4=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,Q4=F.section`
    background: #fbfbfb;
    border-radius: ${e=>e.theme.borderRadiusMd};
    border: 1px solid ${e=>e.theme.cultured};
    height: auto;
    width: 90%;
    margin: 25% auto;
    padding: 22px;

    @media (min-width: 540px) {
        margin: 5% auto;
        width: 100%;
        max-width: 350px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        max-width: 370px;
    }


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    img {
        width: 100%;
        height: auto;
        max-width: 60px;
    }

`,J4=F.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;

    div {
        position: relative;
        width: 85%;

        @media (max-width: 300px) {
            width: 100%;
            }


        input {
            font-size: ${e=>e.theme.font2xs};
            color:  ${e=>e.theme.onyx};
            padding: 10px 10px 10px 40px;
            border: 1px solid ${e=>e.theme.cultured};
            border-radius: ${e=>e.theme.borderRadiusMd};

            &:focus {
                border: 1px solid ${e=>e.theme.cultured};
                outline: none;
            }

            &::-webkit-search-cancel-button { 
                display: none;
            }

            &[type="submit"] {
                cursor: pointer;
                background: ${e=>e.theme.primary};
                color: ${e=>e.theme.white};
                font-weight: 600;
                margin-top: 10px;
                padding: 10px;
                text-transform: capitalize;

                ${e=>e.fadeText&&Ee`
                       color: rgba(255, 255, 255, 0.8);
                `}
               

                &:hover {
                    background: ${e=>e.theme.primaryDark};
                }
            }
        }


        span {
            position: absolute;
            top: 50%;
            left: 1.5px;
            background: transparent;
            transform: translateY(-50%);
            color:  ${e=>e.theme.primaryDark};
            font-size: 18px;
            padding: 8px 15px;

            &.spinner {
                top: 60%;

                @media (max-width: 350px) {
                        display: none;
                        }
            }
        }
       
    }

`,Z4=()=>{const[e,t]=C.exports.useState(""),n=Zi(),r=Rs(),{t:i}=nn(),{loading:o}=qr(l=>l.userPasswordReset),{userInfo:s}=qr(l=>({...l.userLogin}));return C.exports.useEffect(()=>{s&&s.token&&r("/")},[s]),f(X4,{children:P(Q4,{children:[f("img",{src:ri,alt:"brand-logo"}),P(J4,{onSubmit:async l=>{if(l.preventDefault(),n({type:"USER_PASSWORD_RESET_REQUEST"}),!e){te.error(i("Email is required!")),setTimeout(()=>n({type:"USER_PASSWORD_RESET_FAIL"}),6e3);return}const c={url:"https://wizcart.netlify.app/login",handleCodeInApp:!0};await Tn.sendPasswordResetEmail(e,c).then(()=>{t(""),te.success("Check your email for password reset link"),setTimeout(()=>n({type:"USER_PASSWORD_RESET_SUCCESS"}),6e3)}).catch(d=>{te.error(d.message),setTimeout(()=>n({type:"USER_PASSWORD_RESET_FAIL"}),6e3)})},fadeText:o,children:[P("div",{children:[f("span",{children:f(fu,{title:i("Email")})}),f("input",{type:"email",name:"email",id:"email",value:e,onChange:l=>t(l.target.value),placeholder:`${i("Email")}...`,autoFocus:!0})]}),P("div",{children:[f("input",{type:"submit",name:"submit",value:i("submit"),id:"submit"}),o&&f("span",{className:"spinner",children:f(ku,{height:25,width:25,color:"hsl(0, 0%, 83%)",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:7,strokeWidthSecondary:7})})]})]}),f("div",{})]})})},e8="/assets/icon-logo.9dacd16a.png",t8="/assets/subgirl.83349ea8.jpg",n8=F.section`
    height: 20rem;
    position: relative;

    @media (min-width: 768px) {
        height: 16rem;
 }
    

  
    background: ${e=>`rgba(${e.theme.primaryLight}, 0.9)`};

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    overflow: hidden;
`,r8=F.div`
    width: 100%;
    ${ni}
`,i8=F.div`
width: 100%;
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;


 
 @media (min-width: 768px) {
    top: 50%;
 }

 @media (min-width: 1024px) {
    top: 70%;
 }



@media (max-width: 480px) {
      
       height: 160px;
    }




    img {
        width: 100%;
        object-fit: cover;
        object-position: right;
    }
`,o8=F.h1`
     font-size: ${e=>e.theme.font3xl};
     color: ${e=>e.theme.white};
     z-index: 10;
     text-transform: capitalize;
     margin-bottom: 30px;
`,s8=F.div`
position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 90%;


    @media (min-width: 570px) {
        width: 60%;
    }
 
 @media (min-width: 768px) {
    width: 50%;
 }

 @media (min-width: 1024px) {
    width: 40%;
 }


 input {
    padding: 12px 15px;
    padding-right: 50px;
    border: 2px solid ${e=>e.theme.cultured};
    color: ${e=>e.theme.cultured};
    border-radius: ${e=>e.theme.borderRadiusMd};
    font-size: ${e=>e.theme.font2xs};
    background: transparent;
    outline: none;

    &::placeholder {
        font-size: ${e=>e.theme.font2xs};
        color: ${e=>e.theme.cultured};
    }
 }

 button {
        position: absolute;
        top: 50%;
        right: 5px;
        background: ${e=>e.theme.primary};
        transform: translateY(-50%);
        color:  ${e=>e.theme.white};
        font-size: ${e=>e.theme.fontsm};
        padding: 7px 15px;
        border-radius: ${e=>e.theme.borderRadiusMd};
        transition: color ${e=>e.theme.transitionTiming};

        &:hover {
            background: ${e=>e.theme.primaryDark};
        }
    }
`,a8=()=>{const{t:e}=nn(),t=Gf();return f(rt,{children:t.pathname==="/"&&f(n8,{children:P(r8,{children:[f(i8,{children:f("img",{src:t8,alt:"Weirdos"})}),P(o8,{children:[e("Subscribe")," ",f("br",{}),e("for news and offers")]}),P(s8,{children:[f("input",{type:"email",placeholder:e("Enter your email")}),f("button",{children:e("Submit")})]})]})})})},l8="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU8AAAAeCAMAAACbtmwmAAACqVBMVEUAAADr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+v////4+Pju7u78+/v9/f319fXs7Oz6/v/6+vnp5+T//v3rGyz7sjD4+/z+/PsBhMXsHS/qEiX7/P3s8vbX6/X27/Tx9fj59vLr6unr6efm8PXpAhLqDx/h6/IBf8MBQqCXutby+v2iwdzWtMv6riX6qh3S4++50eMBd776ri3qCRrN2ubq2eT88d1tn8nMpL/0for6tDb1+Pr48/W/1eb6x8xCg7uSQHWBIV96Eld0DU/7ukVmBDzrGSb6phQVX6CqapP50YxsB0TsLDfs9/vw8PD89uj83+Esdbb3qrH94bDtO0T75uj77dJVksZek774tbsXXawgbqgXVpoANpnsIzHzZiv5+fHd5Oyn1OuuyuL72tngx9mLs9N0pcvHnLhDd6pZfqb8znvwZG6JMGn+9vjE4fHv5OyYzObHzdkljMiPqsX5wcEUf8EAcLtNhLUmZbACVakubKf2oKWfVIY5V3/ycXzuRlPoAAf//Pj+7/D40dTbvtKftMr86sh8o8drkrqRo7lai7nBjLEMTqb63KUqXZf7yHERMWTxUSvlzt5qttxQptSlvdOArc44eLhAaZn0kJfuU19ZAyrpBg233O2NyeV7sdexwtMIi81mmca1eqH1iZKYSnyAQmlzHE3u7u3Z3eaBvt9Em894mbodc7e1hqYJQI1LVoL8wF70FiXxTBT6oAT75LwsPGkHEUj5nyZiqtXRq8asq7+Ii6pzgZ76z5xacJQGS5QZUYtuVoD4pH/1eDP2BgwGYruGYIRgQXAYJFW2JkT95/xqxPXs49O7sMLCqHj1f1zbJzv3iC7UzLoAJH6RMFbDii7dhgcL1tC5AAAAE3RSTlMAzDMO8eIexASMXVeW2n5xBuobNBzJgQAACoNJREFUaN7tmQdTG0cYhtN7X3IX30X2nVFNIiRUwBJIIIRAFAkQCAVJ9F5N78VU03vH9GowYBz3Erf0Zqf3+kuyJ1wmMznJSuyEmeQd7rS3zMueHrZ83+599z356P13rkefuO+G/jf+ufHJN3DECb3+jK2dv2N84t8wvuSE/pbxURw4I3TXY7aWnDc+f99N40vOGv9+iy7OCH34LxoRaHwYBU7ptRdsLUEj4ty3e/nBG8aHXgFO6dVbRidf9XaLLs7x3EVjdChodJrnI/9dngzAcEEACe8AXvCRvIc847Vabfx2EYtJ6EuI2ak8cWATQpWxbd0RTxznm1gI4LkQGsAWAoQBCBK/VzyTS+MyMjLi2upg+dK43t/fX1+SsBN5QprslaqqHA4AOIFh3dYWax3Eegc8ESAvqgXShsAkaWBQ2gAbDBQHovg94RlfGq5QCAQChVu4Oq/Ec59NEZ5R6I7jiQDOVM0BqJrpFQCsixlMpiA8bjMAwx2PdwY/bcA0NpA7NmtoEM8Q+R+ezQfkPeCJ5rUrBOG7KYUrmJment57KHnvuzjeucN4IiCnxsvdpvojX7ddVzDDmcxwwXJcN+aYJwqKkhINsqRmTsNZMSps7k9dRxm0PNFvvgnAbCWNBgCMqubLYAmKsM8zflHBdLXhhPdDmT/aYMLLf9/FKPIf4+nDdcwTB4cPeO3d1pEjY19euEC9M5RbhhZzyJMEKsNZMdswBHgDZ+WzH/YbkuzwBD99d/VqFA5MiSlS2ZwlEMiDUkZSpCzqU8W2x3NBIHDd7Wr7YR66lpl51Z/CSQGN8LzEsMuTxfrjooXeLtrl6bERuVHIxf2GK9GbNceOcivP9KAeZ3xQWp5ghcLp7m7jOb/18ZcXXHeH73aFWo6LxxzxRMDqz8188dkZVVJD2npac9DZIgzQ88T53/3m7QuqRkYqckWN/JyUkdOnU8QskDiSbpHZ4WmO6xAI4MCBr6YQHMrMPHQNTqBwzHt77/GEI94OT967ra29xG24tcVDayzbL2rXlGx6ntzIUKMxbMnv7bBjPeAWz0ju0aXC/SHGt2l5kpLpT+v3etV7QaRHTm9tfbzFvKBws81Ugg41RjjgiaOBQ3KWtJ8vtlhyc1Qc0+oqbm/+xL5u/TUWqNKHJKvpiab19Dk+T8YG8tNNTSmBKD3PFte4jOj23W5QrnFvUrpaUrInglqRvD31CQx6nrVfFJ+7Mlg9uJZdnQ2qlTNjp4Y+6s3ulWtmPqo9zqPn6afTRXoUHvQoNIb4cH0muYA7WRng58M9Gua3P0TnQcsTrLhPH66pOTwFkbq3bn3++edfXl9UMzvcoDpgB3UYz7N4JE5IAGZix/hCxWTZjz8rPm0d5VhEUiwxfV2SKEqZ5cBKVVOiZUTKoudZ2p63maxVt7WXLlrrPvnk++8/iY2JLSk5Pz5+PjZWH0vPEy2eWHvvi8HB+YkPJmqFE++dKlLWftQ7M/BRLyyxUHqeG8bQYR8ujgyHBVduHAvxmTxoPDocHFl5kOIZSssTB6unK7CTVdjKVM7hA+/uf+fjd/dvWrva1C2lLdr25WQMd8QTRzAMi+kbLTmv9/eG/eV8FmaPJ39OtCYdaeTAzwKiIkiU3pgLKhobOQUilYSWJ3extCserVvQdsW3WPPi4/PyvorR74ui/n2xCaP7Ru30zw8mJi4PygeLJ95rLT53ubJ2bH6+VznTP1ZbPMC2tx55hBp1IcGFoNB4dKNsKRL2y7Azw8YyHwc8EWK6xkTkmLATb1VIOJwcTjavelFbt1luNmut3XGbGOGIJ4FlJYyWjJdE2TSuPx9jlycoaEoMEqkITqMoH0M5+Y3pc4RUFMRfhRctT3PpJgq6urRmc53ZnFee/FVdi+94VKwvuNQ3mmC3fyq/ODeoPH75g+IrvYMTVwaFY8UzSv78qVPztWOnCHs8y/2CdTqjzsMvJCREV1Y5GWrcCPDTBTvi2Sk5eZLDgSSrTlTxgSSn4tvq4215i+rktq726C612hFPkpWVEDt6qc83K8sFh8rKinGQb+amfNqUkgvkIyOBGHxcFTUGrjc1NaaILDJanuUt6uTkFmt3d3JystZal2z+JPP9hL6+voSS830xo1G+9OtR78Q7LuD45dbWVmH1lcts+fyaBgjni4sHeovWWPbjpcpJv7KwyDMhoaHGSNCj0/WAQsc8Ecn0iQoZqOKAlSmhCfn2nXfP8Mnytu6W9q6Flq72BTs8b3QK3wTfLJzACAIAF42GwDAHPCssTaJENjghmuOLg956y5KukjY2nZ6zNKXIUdr5UxsXDiOlaCjXjOjMa9cOZXpT+SYMmvT6iPEsep58JQ8A4nh19XHsvSvvsNjZGgBY2UqlkJ3Nsxt/9gz3+BRCnsOhZcGhIT4+oToPYOufRvvzJ3H48FRVDpw8KzgrJ2d8qquzu9VarbltWW02qxe76dcjUpibL5YViHEGYMGwCSAyPgNlAIgZwUkGIOl48hPTRWJMkpgeJFGJoNY5sCjjyyzpBRJankjpsoC5LQGTipd+3ONJCcZLERGjJD3P20Env/UD9u1Hh/F8YZjxmC4sdLJwaWsYzp8ex5b8wPBS2WTwUmHPsTD6eInBOel1ZO/eA+41NTV7Uz/77OPPfrieER2dwRTERS+rCXqeQJzWPCRPTQK8bBYAQh67SKUBgA002YDEAZtB0vBEhdJAHgAyqQzl5ebnB5qAXCoE2xX08bw22g1mGTYxMw7B7rlnW/57Lur7GHeSH+HZbGfyo8nI4ODggzB2L4usPBMc+fbB4P3AA67vG2U9PgeP7qfliWAnYKAE5eUFw/pzW+d+UVygQmfXcEEHtbzT88xP65fLUgtk60WzxGxaktiQJi5ITQqcSytg91sMBTySLn+3hSkodWcRBHVn3aym54lYw93CXSlluDIVb16FIG04vS/qL2Xdi3wTCeByuQEoQODNhRuAc7mkrRzARVAuF6HPN1mm6Xr3m/nmgXNlP1xwpRJO1wxFh9rsQtjpnwZLkjxodqg5KLUgTcxTGlSaomZp6lBuakHzQEMqB9zV/SXEGt3hJqDGu1tH+/v6iAhqtHtGXNQnkDtsP4Rheqvea5uol/vJuOsC264DjOgXAiBNep4wWZcrU1UNhiRx/of5Qo4hiT3Wz04NkqaqDNJZw13mCVh5bdEKmGQootXxnb4l/vsioPyjYhg7br+OIamqgdmRV339gROmvFLmMpUaKdrrcAK3xzO3qBnue4oDG4rEGlXaEK/fIG3IR+XNaSpOQ644SMi42/vJ5XnWhc0Fa3w5LHf6xr4f9X5sTOdO3E9GWOycqenpqSohQWIB3QttpaXqOi5G2N1Pxl3YQrgK8VBhoJChUSoRnpLP5uHwUcNg83hsF/zun3eQ5eXlN4c3o7Ozk7FTzztIlgQKY9jyHTwgIMAFwxyddyDUFwQIDqMkFxKgOAlIBvwDsBIHCAnw//Z5HEKSyO0UEiPu5vnm0zhwRrfactbI2PXYv2h0igqd0bGg8dnXGcAJvfTUjaacNKIvPf5vGp2i8peNr1PGx3e9eOfa9dSN7um88bn/ivGxB+5ct2j+b/xz4++ctBBcFcDacQAAAABJRU5ErkJggg==",u8=F.footer`
    background:  ${e=>e.theme.eerieBlack};
    padding: 0 0 30px;
    position:relative;

    @media (max-width: 570px) {
        padding-top: 30px;
    }
`,c8=F.div`
    border-bottom: 1px solid  ${e=>e.theme.onyx};
    padding-bottom: 30px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        padding-top: 50px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 50px;
    }
`,d8=F.div`
    ${ni}

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        row-gap: 50px;
        column-gap: 20px;
    }
`,ci=F.ul`
    &:not(:last-child) { 
        margin-bottom: 20px;
     }

     &:last-child { 
        visibility: hidden;   
        }


     @media (min-width: 768px) {
        min-width: calc(33.33% - 15px);
        width: calc(33.33% - 15px);
        flex-grow: 1;

        &:not(:last-child) { 
            margin-bottom: 0; 
        }

        &:last-child { 
            visibility: hidden;
        }
     }

     @media (min-width: 1024px) {
        min-width: calc(20% - 16px);
        width: calc(20% - 16px);

        &:nth-child(5),
        &:last-child { 
            display: none;
        }
     }

     img {
        width: 100%;
        height: auto;
        max-width: 70px;
        cursor: pointer;
        transition: ${e=>e.theme.transitionTiming};

        &:hover {
            transform: scale(1.2);
        }
     }
`,dt=F.li`
     padding: 5px 0;

     ${e=>e.flex&&Ee`
            display: flex;
            align-items: flex-start;
            gap: 10px;
    `}


     h2 {
        position: relative;
        color:  ${e=>e.theme.white};
        font-size:  ${e=>e.theme.fontxs};
        text-transform: uppercase;
        margin-bottom: 15px;
        padding-bottom: 5px;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background:  ${e=>e.theme.primary};
            width: 60px;
            height: 1px;

            @media (min-width: 768px) {
                height: 2px;
            }
        }
     }

     h2.brand {
        &::before {
            background: none;
        }
     }


     a {
        width: max-content;
        color:${e=>e.theme.sonicSilver};
        font-size:  ${e=>e.theme.font3xs};
        text-transform: capitalize;
        transition: ${e=>e.theme.transitionTiming};
        padding-bottom: 5px;

        &:hover {
            color:  ${e=>e.theme.primaryLight};
        }
     }
`,f8=F.ul`
      
        display: flex;
        align-items: flex-start;
        gap: 5px;
        flex-direction: column;

        @media (max-width: 850px) {
            flex-direction: row;
            gap: 7px;
    }
       

       li {
        border-radius: ${e=>e.theme.borderRadiusSm};
        transition: ${e=>e.theme.transitionTiming};

        
        &:nth-child(1) {
            background: #1877f2; 
            
            &:hover {
                background: #0d6fed; 
            }
        }
        &:nth-child(2) {
            background: #55acee;

            &:hover {
                background: #47a5ed;  
            }
        }

        &:nth-child(3) {
            background: #cb2027; 

            &:hover {
                background: #be1e24;  
            }
        }

        &:nth-child(4) {
            background: linear-gradient(29.61deg, #f38334 0%, #da2e7d 50.39%, #6b54c6 100%);

            &:hover {
                background: linear-gradient(29.61deg, #e6670e 0%, #b52064 50.39%, #513aad 100%);

            }
        }

        &:nth-child(5) {
            background: #b00;

            &:hover {
                background: #ac0000;
            }
        }
       }
`,To=F.a`
    cursor: pointer;


        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        border-radius: ${e=>e.theme.borderRadiusSm};
        color: ${e=>e.theme.eerieBlack};
        transition: ${e=>e.theme.transitionTiming};

       

    img {
        width: 100%;
        height: auto;
        max-width: 15px;

        &:hover {
                transform: scale(1.2);
            }
    }
`,p8=F.div`
    margin-bottom: 50px;
    text-align: center;

    @media (min-width: 1024px) {
        margin-bottom: 0;
    }
`,h8=F.div`
    ${ni}
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color:${e=>e.theme.sonicSilver};
        font-size:  ${e=>e.theme.font3xs};
        font-weight: 500;
        text-transform: capitalize;
        letter-spacing: 1.2px;

        a {
            display: inline;
            color: inherit;
        }
    }

    @media (max-width: 570px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`,g8=()=>{const{t:e}=nn();return P(u8,{children:[f(a8,{}),f(c8,{children:P(d8,{children:[P(ci,{children:[f("img",{src:e8,alt:"logo"}),f(dt,{children:f("h2",{className:"brand",children:"WizCart"})})]}),P(ci,{children:[f(dt,{children:f("h2",{children:e("About")})}),f(dt,{children:f("a",{href:"#",children:e("About")})})]}),P(ci,{children:[f(dt,{children:f("h2",{children:e("Customer Service")})}),f(dt,{children:f("a",{href:"#",children:e("Contact Us")})}),f(dt,{children:f("a",{href:"#",children:"FAQs"})})]}),P(ci,{children:[f(dt,{children:f("h2",{children:e("Legal")})}),f(dt,{children:f("a",{href:"#",children:e("Terms of Service")})}),f(dt,{children:f("a",{href:"#",children:e("Terms of Purchase")})}),f(dt,{children:f("a",{href:"#",children:e("Privacy Policy")})}),f(dt,{children:f("a",{href:"#",children:e("Refund Policy")})}),f(dt,{children:f("a",{href:"#",children:e("Cookie Policy")})})]}),P(ci,{children:[f(dt,{children:f("h2",{children:e("Follow Us")})}),f("li",{children:P(f8,{children:[f("li",{children:f(To,{children:f("img",{src:op,alt:"facebook",title:"facebook"})})}),f("li",{children:f(To,{children:f("img",{src:sp,alt:"twitter",title:"twitter"})})}),f("li",{children:f(To,{children:f("img",{src:lp,alt:"pinterest",title:"pinterest"})})}),f("li",{children:f(To,{children:f("img",{src:ap,alt:"instagram",title:"instagram"})})}),f("li",{children:f(To,{children:f("img",{src:up,alt:"youtube",title:"youtube"})})})]})})]}),f(ci,{children:f(dt,{children:f("h2",{children:"Future"})})})]})}),f(p8,{children:P(h8,{children:[f("img",{src:l8,alt:"payment method",className:"payment-img"}),P("p",{children:["\xA9 ",new Date().getFullYear()," ",f("a",{href:"#",children:"WizCart"}),". ",e("All Rights Reserved"),"."]})]})})]})};function m8(){const{t:e}=nn(),t=Zi();return C.exports.useEffect(()=>{const n=Tn.onAuthStateChanged(async r=>{if(r){let i=await r.getIdTokenResult();t({type:"USER_LOGIN_DETAILS",payload:{email:r.email,displayName:r.displayName,token:i.token}})}});return()=>n()},[t]),P(K_,{children:[f(o_,{}),P(t_,{theme:s_,children:[f(Y_,{}),f(MO,{}),f(tE,{}),f(QT,{}),f(ip,{}),P(o2,{children:[f(fi,{path:"/",element:f(AO,{})}),f(fi,{path:`${encodeURI(e("login"))}`,element:f(F4,{})}),f(fi,{path:`${encodeURI(e("register"))}`,element:f(W4,{})}),f(fi,{path:`${encodeURI(e("register/complete"))}`,element:f(Y4,{})}),f(fi,{path:`${encodeURI(e("forgot/password"))}`,element:f(Z4,{})})]}),f(g8,{})]})]})}const v8=F.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    background-color: ${e=>e.theme.white};
    overflow: hidden;
`,y8=F.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`,Gm=As`
  0% {
      -webkit-transform: scale(0.7, 0.7);
              transform: scale(0.7, 0.7);
      opacity: 0.9;
    }
    100% {
      -webkit-transform: scale(1, 1);
              transform: scale(1, 1);
      opacity: 1;
    }
`,w8=F.div`
    width: 100px;
    height: 100px;
    display: inline-block;
    padding: 0px;

    img {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: auto;
        max-width: 90px;
        -webkit-animation: ${Gm} 2s alternate infinite ease-in;
        animation:  ${Gm} 2s alternate infinite ease-in;
    }
`,b8=()=>{const[e,t]=C.exports.useState(!0);return C.exports.useEffect(()=>{const n=setTimeout(()=>{t(!1)},2e3);return()=>{clearTimeout(n)}},[e]),f(rt,{children:e?f(v8,{children:f(y8,{children:f(w8,{children:f("img",{src:ri,alt:"logo"})})})}):""})};function cr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vd(e,t){return Vd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Vd(e,t)}function Tu(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vd(e,t)}function Us(e,t){if(t&&(sr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cr(e)}function vn(e){return vn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},vn(e)}function S8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function x8(e){return Xy(e)||S8(e)||Qy(e)||Jy()}function qm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Km(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qm(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var _8={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},E8=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ft(this,e),this.init(t,n)}return Ut(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||_8,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,o){return o&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,Km(Km({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}}]),e}(),pn=new E8,vr=function(){function e(){Ft(this,e),this.observers={}}return Ut(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(o){i.observers[o]=i.observers[o]||[],i.observers[o].push(r)}),this}},{key:"off",value:function(n,r){if(!!this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(this.observers[n]){var s=[].concat(this.observers[n]);s.forEach(function(l){l.apply(void 0,i)})}if(this.observers["*"]){var a=[].concat(this.observers["*"]);a.forEach(function(l){l.apply(l,[n].concat(i))})}}}]),e}();function Co(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function Ym(e){return e==null?"":""+e}function k8(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function $p(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function i(){return!e||typeof e=="string"}for(var o=typeof t!="string"?[].concat(t):t.split(".");o.length>1;){if(i())return{};var s=r(o.shift());!e[s]&&n&&(e[s]=new n),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function Xm(e,t,n){var r=$p(e,t,Object),i=r.obj,o=r.k;i[o]=n}function T8(e,t,n,r){var i=$p(e,t,Object),o=i.obj,s=i.k;o[s]=o[s]||[],r&&(o[s]=o[s].concat(n)),r||o[s].push(n)}function bl(e,t){var n=$p(e,t),r=n.obj,i=n.k;if(!!r)return r[i]}function Qm(e,t,n){var r=bl(e,n);return r!==void 0?r:bl(t,n)}function nb(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):nb(e[r],t[r],n):e[r]=t[r]);return e}function di(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var C8={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function I8(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return C8[t]}):e}var Cu=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,O8=[" ",",","?","!",";"];function P8(e,t,n){t=t||"",n=n||"";var r=O8.filter(function(a){return t.indexOf(a)<0&&n.indexOf(a)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(a){return a==="?"?"\\?":a}).join("|"),")")),o=!i.test(e);if(!o){var s=e.indexOf(n);s>0&&!i.test(e.substring(0,s))&&(o=!0)}return o}function Jm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ga(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jm(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R8(e){var t=A8();return function(){var r=vn(e),i;if(t){var o=vn(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Us(this,i)}}function A8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rb(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!!e){if(e[t])return e[t];for(var r=t.split(n),i=e,o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){for(var s=2,a=r.slice(o,o+s).join(n),l=i[a];l===void 0&&r.length>o+s;)s++,a=r.slice(o,o+s).join(n),l=i[a];if(l===void 0)return;if(l===null)return null;if(t.endsWith(a)){if(typeof l=="string")return l;if(a&&typeof l[a]=="string")return l[a]}var u=r.slice(o+s).join(n);return u?rb(l,u,n):void 0}i=i[r[o]]}return i}}var L8=function(e){Tu(n,e);var t=R8(n);function n(r){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Ft(this,n),i=t.call(this),Cu&&vr.call(cr(i)),i.data=r||{},i.options=o,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return Ut(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var o=this.options.ns.indexOf(i);o>-1&&this.options.ns.splice(o,1)}},{key:"getResource",value:function(i,o,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,u=a.ignoreJSONStructure!==void 0?a.ignoreJSONStructure:this.options.ignoreJSONStructure,c=[i,o];s&&typeof s!="string"&&(c=c.concat(s)),s&&typeof s=="string"&&(c=c.concat(l?s.split(l):s)),i.indexOf(".")>-1&&(c=i.split("."));var d=bl(this.data,c);return d||!u||typeof s!="string"?d:rb(this.data&&this.data[i]&&this.data[i][o],s,l)}},{key:"addResource",value:function(i,o,s,a){var l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},u=this.options.keySeparator;u===void 0&&(u=".");var c=[i,o];s&&(c=c.concat(u?s.split(u):s)),i.indexOf(".")>-1&&(c=i.split("."),a=o,o=c[1]),this.addNamespaces(o),Xm(this.data,c,a),l.silent||this.emit("added",i,o,s,a)}},{key:"addResources",value:function(i,o,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var l in s)(typeof s[l]=="string"||Object.prototype.toString.apply(s[l])==="[object Array]")&&this.addResource(i,o,l,s[l],{silent:!0});a.silent||this.emit("added",i,o,s)}},{key:"addResourceBundle",value:function(i,o,s,a,l){var u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},c=[i,o];i.indexOf(".")>-1&&(c=i.split("."),a=s,s=o,o=c[1]),this.addNamespaces(o);var d=bl(this.data,c)||{};a?nb(d,s,l):d=ga(ga({},d),s),Xm(this.data,c,d),u.silent||this.emit("added",i,o,s)}},{key:"removeResourceBundle",value:function(i,o){this.hasResourceBundle(i,o)&&delete this.data[i][o],this.removeNamespaces(o),this.emit("removed",i,o)}},{key:"hasResourceBundle",value:function(i,o){return this.getResource(i,o)!==void 0}},{key:"getResourceBundle",value:function(i,o){return o||(o=this.options.defaultNS),this.options.compatibilityAPI==="v1"?ga(ga({},{}),this.getResource(i,o)):this.getResource(i,o)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var o=this.getDataByLanguage(i),s=o&&Object.keys(o)||[];return!!s.find(function(a){return o[a]&&Object.keys(o[a]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(vr),ib={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,o){var s=this;return t.forEach(function(a){s.processors[a]&&(n=s.processors[a].process(n,r,i,o))}),n}};function Zm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zm(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N8(e){var t=$8();return function(){var r=vn(e),i;if(t){var o=vn(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Us(this,i)}}function $8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ev={},tv=function(e){Tu(n,e);var t=N8(n);function n(r){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ft(this,n),i=t.call(this),Cu&&vr.call(cr(i)),k8(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,cr(i)),i.options=o,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=pn.create("translator"),i}return Ut(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var s=this.resolve(i,o);return s&&s.res!==void 0}},{key:"extractFromKey",value:function(i,o){var s=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");var a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,l=o.ns||this.options.defaultNS||[],u=s&&i.indexOf(s)>-1,c=!this.options.userDefinedKeySeparator&&!o.keySeparator&&!this.options.userDefinedNsSeparator&&!o.nsSeparator&&!P8(i,s,a);if(u&&!c){var d=i.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:i,namespaces:l};var h=i.split(s);(s!==a||s===a&&this.options.ns.indexOf(h[0])>-1)&&(l=h.shift()),i=h.join(a)}return typeof l=="string"&&(l=[l]),{key:i,namespaces:l}}},{key:"translate",value:function(i,o,s){var a=this;if(sr(o)!=="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),o||(o={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var l=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,u=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,c=this.extractFromKey(i[i.length-1],o),d=c.key,h=c.namespaces,v=h[h.length-1],y=o.lng||this.language,b=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y&&y.toLowerCase()==="cimode"){if(b){var w=o.nsSeparator||this.options.nsSeparator;return l?(p.res="".concat(v).concat(w).concat(d),p):"".concat(v).concat(w).concat(d)}return l?(p.res=d,p):d}var p=this.resolve(i,o),g=p&&p.res,m=p&&p.usedKey||d,S=p&&p.exactUsedKey||d,k=Object.prototype.toString.apply(g),T=["[object Number]","[object Function]","[object RegExp]"],_=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,x=!this.i18nFormat||this.i18nFormat.handleAsObject,N=typeof g!="string"&&typeof g!="boolean"&&typeof g!="number";if(x&&g&&N&&T.indexOf(k)<0&&!(typeof _=="string"&&k==="[object Array]")){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var O=this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,g,ot(ot({},o),{},{ns:h})):"key '".concat(d," (").concat(this.language,")' returned an object instead of string.");return l?(p.res=O,p):O}if(u){var R=k==="[object Array]",z=R?[]:{},K=R?S:m;for(var E in g)if(Object.prototype.hasOwnProperty.call(g,E)){var A="".concat(K).concat(u).concat(E);z[E]=this.translate(A,ot(ot({},o),{joinArrays:!1,ns:h})),z[E]===A&&(z[E]=g[E])}g=z}}else if(x&&typeof _=="string"&&k==="[object Array]")g=g.join(_),g&&(g=this.extendTranslation(g,i,o,s));else{var G=!1,X=!1,L=o.count!==void 0&&typeof o.count!="string",$=n.hasDefaultValue(o),q=L?this.pluralResolver.getSuffix(y,o.count,o):"",Z=o["defaultValue".concat(q)]||o.defaultValue;!this.isValidLookup(g)&&$&&(G=!0,g=Z),this.isValidLookup(g)||(X=!0,g=d);var j=o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,H=j&&X?void 0:g,B=$&&Z!==g&&this.options.updateMissing;if(X||G||B){if(this.logger.log(B?"updateKey":"missingKey",y,v,d,B?Z:g),u){var Y=this.resolve(d,ot(ot({},o),{},{keySeparator:!1}));Y&&Y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var I=[],ee=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ee&&ee[0])for(var U=0;U<ee.length;U++)I.push(ee[U]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(o.lng||this.language):I.push(o.lng||this.language);var he=function(ne,Q,Ce){var Be=$&&Ce!==g?Ce:H;a.options.missingKeyHandler?a.options.missingKeyHandler(ne,v,Q,Be,B,o):a.backendConnector&&a.backendConnector.saveMissing&&a.backendConnector.saveMissing(ne,v,Q,Be,B,o),a.emit("missingKey",ne,v,Q,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&L?I.forEach(function(ie){a.pluralResolver.getSuffixes(ie,o).forEach(function(ne){he([ie],d+ne,o["defaultValue".concat(ne)]||Z)})}):he(I,d,Z))}g=this.extendTranslation(g,i,o,p,s),X&&g===d&&this.options.appendNamespaceToMissingKey&&(g="".concat(v,":").concat(d)),(X||G)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(v,":").concat(d):d,G?g:void 0):g=this.options.parseMissingKeyHandler(g))}return l?(p.res=g,p):g}},{key:"extendTranslation",value:function(i,o,s,a,l){var u=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,ot(ot({},this.options.interpolation.defaultVariables),s),a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init(ot(ot({},s),{interpolation:ot(ot({},this.options.interpolation),s.interpolation)}));var c=typeof i=="string"&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),d;if(c){var h=i.match(this.interpolator.nestingRegexp);d=h&&h.length}var v=s.replace&&typeof s.replace!="string"?s.replace:s;if(this.options.interpolation.defaultVariables&&(v=ot(ot({},this.options.interpolation.defaultVariables),v)),i=this.interpolator.interpolate(i,v,s.lng||this.language,s),c){var y=i.match(this.interpolator.nestingRegexp),b=y&&y.length;d<b&&(s.nest=!1)}s.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var g=arguments.length,m=new Array(g),S=0;S<g;S++)m[S]=arguments[S];return l&&l[0]===m[0]&&!s.context?(u.logger.warn("It seems you are nesting recursively key: ".concat(m[0]," in key: ").concat(o[0])),null):u.translate.apply(u,m.concat([o]))},s)),s.interpolation&&this.interpolator.reset()}var w=s.postProcess||this.options.postProcess,p=typeof w=="string"?[w]:w;return i!=null&&p&&p.length&&s.applyPostProcessor!==!1&&(i=ib.handle(p,i,o,this.options&&this.options.postProcessPassResolved?ot({i18nResolved:a},s):s,this)),i}},{key:"resolve",value:function(i){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,l,u,c,d;return typeof i=="string"&&(i=[i]),i.forEach(function(h){if(!o.isValidLookup(a)){var v=o.extractFromKey(h,s),y=v.key;l=y;var b=v.namespaces;o.options.fallbackNS&&(b=b.concat(o.options.fallbackNS));var w=s.count!==void 0&&typeof s.count!="string",p=w&&!s.ordinal&&s.count===0&&o.pluralResolver.shouldUseIntlApi(),g=s.context!==void 0&&(typeof s.context=="string"||typeof s.context=="number")&&s.context!=="",m=s.lngs?s.lngs:o.languageUtils.toResolveHierarchy(s.lng||o.language,s.fallbackLng);b.forEach(function(S){o.isValidLookup(a)||(d=S,!ev["".concat(m[0],"-").concat(S)]&&o.utils&&o.utils.hasLoadedNamespace&&!o.utils.hasLoadedNamespace(d)&&(ev["".concat(m[0],"-").concat(S)]=!0,o.logger.warn('key "'.concat(l,'" for languages "').concat(m.join(", "),`" won't get resolved as namespace "`).concat(d,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(function(k){if(!o.isValidLookup(a)){c=k;var T=[y];if(o.i18nFormat&&o.i18nFormat.addLookupKeys)o.i18nFormat.addLookupKeys(T,y,k,S,s);else{var _;w&&(_=o.pluralResolver.getSuffix(k,s.count,s));var x="".concat(o.options.pluralSeparator,"zero");if(w&&(T.push(y+_),p&&T.push(y+x)),g){var N="".concat(y).concat(o.options.contextSeparator).concat(s.context);T.push(N),w&&(T.push(N+_),p&&T.push(N+x))}}for(var O;O=T.pop();)o.isValidLookup(a)||(u=O,a=o.getResource(k,S,O,s))}}))})}}),{res:a,usedKey:l,exactUsedKey:u,usedLng:c,usedNS:d}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,o,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,o,s,a):this.resourceStore.getResource(i,o,s,a)}}],[{key:"hasDefaultValue",value:function(i){var o="defaultValue";for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)&&o===s.substring(0,o.length)&&i[s]!==void 0)return!0;return!1}}]),n}(vr);function kc(e){return e.charAt(0).toUpperCase()+e.slice(1)}var M8=function(){function e(t){Ft(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=pn.create("languageUtils")}return Ut(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(o){return o.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=kc(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=kc(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=kc(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(o){if(!i){var s=r.formatLanguageCode(o);(!r.options.supportedLngs||r.isSupportedCode(s))&&(i=s)}}),!i&&this.options.supportedLngs&&n.forEach(function(o){if(!i){var s=r.getLanguagePartFromCode(o);if(r.isSupportedCode(s))return i=s;i=r.options.supportedLngs.find(function(a){if(a.indexOf(s)===0)return a})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,o=this.getFallbackCodes(r||this.options.fallbackLng||[],n),s=[],a=function(u){!u||(i.isSupportedCode(u)?s.push(u):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(u)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(n))):typeof n=="string"&&a(this.formatLanguageCode(n)),o.forEach(function(l){s.indexOf(l)<0&&a(i.formatLanguageCode(l))}),s}}]),e}(),D8=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],z8={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},j8=["v1","v2","v3"],nv={zero:0,one:1,two:2,few:3,many:4,other:5};function F8(){var e={};return D8.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:z8[t.fc]}})}),e}var U8=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ft(this,e),this.languageUtils=t,this.options=n,this.logger=pn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=F8()}return Ut(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(o){return"".concat(r).concat(o)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(n,i);return o?this.shouldUseIntlApi()?o.resolvedOptions().pluralCategories.sort(function(s,a){return nv[s]-nv[a]}).map(function(s){return"".concat(r.options.prepend).concat(s)}):o.numbers.map(function(s){return r.getSuffix(n,s,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=this.getRule(n,i);return o?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(o.select(r)):this.getSuffixRetroCompatible(o,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,o=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),s=n.numbers[o];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));var a=function(){return i.options.prepend&&s.toString()?i.options.prepend+s.toString():s.toString()};return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?"_plural_".concat(s.toString()):a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?a():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}},{key:"shouldUseIntlApi",value:function(){return!j8.includes(this.options.compatibilityJSON)}}]),e}();function rv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rv(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var B8=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ft(this,e),this.logger=pn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Ut(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:I8,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?di(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?di(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?di(r.nestingPrefix):r.nestingPrefixEscaped||di("$t("),this.nestingSuffix=r.nestingSuffix?di(r.nestingSuffix):r.nestingSuffixEscaped||di(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,o){var s=this,a,l,u,c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function d(w){return w.replace(/\$/g,"$$$$")}var h=function(p){if(p.indexOf(s.formatSeparator)<0){var g=Qm(r,c,p);return s.alwaysFormat?s.format(g,void 0,i,Vt(Vt(Vt({},o),r),{},{interpolationkey:p})):g}var m=p.split(s.formatSeparator),S=m.shift().trim(),k=m.join(s.formatSeparator).trim();return s.format(Qm(r,c,S),k,i,Vt(Vt(Vt({},o),r),{},{interpolationkey:S}))};this.resetRegExp();var v=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,y=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,b=[{regex:this.regexpUnescape,safeValue:function(p){return d(p)}},{regex:this.regexp,safeValue:function(p){return s.escapeValue?d(s.escape(p)):d(p)}}];return b.forEach(function(w){for(u=0;a=w.regex.exec(n);){var p=a[1].trim();if(l=h(p),l===void 0)if(typeof v=="function"){var g=v(n,a,o);l=typeof g=="string"?g:""}else if(o&&o.hasOwnProperty(p))l="";else if(y){l=a[0];continue}else s.logger.warn("missed to pass in variable ".concat(p," for interpolating ").concat(n)),l="";else typeof l!="string"&&!s.useRawValueToEscape&&(l=Ym(l));var m=w.safeValue(l);if(n=n.replace(a[0],m),y?(w.regex.lastIndex+=l.length,w.regex.lastIndex-=a[0].length):w.regex.lastIndex=0,u++,u>=s.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,a,l=Vt({},o);l.applyPostProcessor=!1,delete l.defaultValue;function u(v,y){var b=this.nestingOptionsSeparator;if(v.indexOf(b)<0)return v;var w=v.split(new RegExp("".concat(b,"[ ]*{"))),p="{".concat(w[1]);v=w[0],p=this.interpolate(p,l),p=p.replace(/'/g,'"');try{l=JSON.parse(p),y&&(l=Vt(Vt({},y),l))}catch(g){return this.logger.warn("failed parsing options string in nesting for key ".concat(v),g),"".concat(v).concat(b).concat(p)}return delete l.defaultValue,v}for(;s=this.nestingRegexp.exec(n);){var c=[],d=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){var h=s[1].split(this.formatSeparator).map(function(v){return v.trim()});s[1]=h.shift(),c=h,d=!0}if(a=r(u.call(this,s[1].trim(),l),l),a&&s[0]===n&&typeof a!="string")return a;typeof a!="string"&&(a=Ym(a)),a||(this.logger.warn("missed to resolve ".concat(s[1]," for nesting ").concat(n)),a=""),d&&(a=c.reduce(function(v,y){return i.format(v,y,o.lng,Vt(Vt({},o),{},{interpolationkey:s[1].trim()}))},a.trim())),n=n.replace(s[0],a),this.regexp.lastIndex=0}return n}}]),e}();function iv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iv(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H8(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var o=i.split(";");o.forEach(function(s){if(!!s){var a=s.split(":"),l=x8(a),u=l[0],c=l.slice(1),d=c.join(":").trim().replace(/^'+|'+$/g,"");n[u.trim()]||(n[u.trim()]=d),d==="false"&&(n[u.trim()]=!1),d==="true"&&(n[u.trim()]=!0),isNaN(d)||(n[u.trim()]=parseInt(d,10))}})}}return{formatName:t,formatOptions:n}}var V8=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ft(this,e),this.logger=pn.create("formatter"),this.options=t,this.formats={number:function(r,i,o){return new Intl.NumberFormat(i,o).format(r)},currency:function(r,i,o){return new Intl.NumberFormat(i,Fn(Fn({},o),{},{style:"currency"})).format(r)},datetime:function(r,i,o){return new Intl.DateTimeFormat(i,Fn({},o)).format(r)},relativetime:function(r,i,o){return new Intl.RelativeTimeFormat(i,Fn({},o)).format(r,o.range||"day")},list:function(r,i,o){return new Intl.ListFormat(i,Fn({},o)).format(r)}},this.init(t)}return Ut(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"format",value:function(n,r,i,o){var s=this,a=r.split(this.formatSeparator),l=a.reduce(function(u,c){var d=H8(c),h=d.formatName,v=d.formatOptions;if(s.formats[h]){var y=u;try{var b=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},w=b.locale||b.lng||o.locale||o.lng||i;y=s.formats[h](u,w,Fn(Fn(Fn({},v),o),b))}catch(p){s.logger.warn(p)}return y}else s.logger.warn("there was no format function for ".concat(h));return u},n);return l}}]),e}();function ov(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ov(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ov(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function W8(e){var t=G8();return function(){var r=vn(e),i;if(t){var o=vn(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Us(this,i)}}function G8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function q8(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var K8=function(e){Tu(n,e);var t=W8(n);function n(r,i,o){var s,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return Ft(this,n),s=t.call(this),Cu&&vr.call(cr(s)),s.backend=r,s.store=i,s.services=o,s.languageUtils=o.languageUtils,s.options=a,s.logger=pn.create("backendConnector"),s.waitingReads=[],s.maxParallelReads=a.maxParallelReads||10,s.readingCalls=0,s.maxRetries=a.maxRetries>=0?a.maxRetries:5,s.retryTimeout=a.retryTimeout>=1?a.retryTimeout:350,s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(o,a.backend,a),s}return Ut(n,[{key:"queueLoad",value:function(i,o,s,a){var l=this,u={},c={},d={},h={};return i.forEach(function(v){var y=!0;o.forEach(function(b){var w="".concat(v,"|").concat(b);!s.reload&&l.store.hasResourceBundle(v,b)?l.state[w]=2:l.state[w]<0||(l.state[w]===1?c[w]===void 0&&(c[w]=!0):(l.state[w]=1,y=!1,c[w]===void 0&&(c[w]=!0),u[w]===void 0&&(u[w]=!0),h[b]===void 0&&(h[b]=!0)))}),y||(d[v]=!0)}),(Object.keys(u).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(u),pending:Object.keys(c),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(h)}}},{key:"loaded",value:function(i,o,s){var a=i.split("|"),l=a[0],u=a[1];o&&this.emit("failedLoading",l,u,o),s&&this.store.addResourceBundle(l,u,s),this.state[i]=o?-1:2;var c={};this.queue.forEach(function(d){T8(d.loaded,[l],u),q8(d,i),o&&d.errors.push(o),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(function(h){c[h]||(c[h]={});var v=d.loaded[h];v.length&&v.forEach(function(y){c[h][y]===void 0&&(c[h][y]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",c),this.queue=this.queue.filter(function(d){return!d.done})}},{key:"read",value:function(i,o,s){var a=this,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,u=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!i.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:o,fcName:s,tried:l,wait:u,callback:c});return}return this.readingCalls++,this.backend[s](i,o,function(d,h){if(a.readingCalls--,a.waitingReads.length>0){var v=a.waitingReads.shift();a.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(d&&h&&l<a.maxRetries){setTimeout(function(){a.read.call(a,i,o,s,l+1,u*2,c)},u);return}c(d,h)})}},{key:"prepareLoading",value:function(i,o){var s=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof o=="string"&&(o=[o]);var u=this.queueLoad(i,o,a,l);if(!u.toLoad.length)return u.pending.length||l(),null;u.toLoad.forEach(function(c){s.loadOne(c)})}},{key:"load",value:function(i,o,s){this.prepareLoading(i,o,{},s)}},{key:"reload",value:function(i,o,s){this.prepareLoading(i,o,{reload:!0},s)}},{key:"loadOne",value:function(i){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=i.split("|"),l=a[0],u=a[1];this.read(l,u,"read",void 0,void 0,function(c,d){c&&o.logger.warn("".concat(s,"loading namespace ").concat(u," for language ").concat(l," failed"),c),!c&&d&&o.logger.log("".concat(s,"loaded namespace ").concat(u," for language ").concat(l),d),o.loaded(i,c,d)})}},{key:"saveMissing",value:function(i,o,s,a,l){var u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(o)){this.logger.warn('did not save key "'.concat(s,'" as the namespace "').concat(o,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}s==null||s===""||(this.backend&&this.backend.create&&this.backend.create(i,o,s,a,null,sv(sv({},u),{},{isUpdate:l})),!(!i||!i[0])&&this.store.addResource(i[0],o,s,a))}}]),n}(vr);function Y8(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(sr(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),sr(t[2])==="object"||sr(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function av(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function on(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lv(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function X8(e){var t=Q8();return function(){var r=vn(e),i;if(t){var o=vn(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Us(this,i)}}function Q8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ma(){}function J8(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var Sl=function(e){Tu(n,e);var t=X8(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(Ft(this,n),r=t.call(this),Cu&&vr.call(cr(r)),r.options=av(i),r.services={},r.logger=pn,r.modules={external:[]},J8(cr(r)),o&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,o),Us(r,cr(r));setTimeout(function(){r.init(i,o)},0)}return r}return Ut(n,[{key:"init",value:function(){var i=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;typeof o=="function"&&(s=o,o={}),!o.defaultNS&&o.defaultNS!==!1&&o.ns&&(typeof o.ns=="string"?o.defaultNS=o.ns:o.ns.indexOf("translation")<0&&(o.defaultNS=o.ns[0]));var a=Y8();this.options=on(on(on({},a),this.options),av(o)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=on(on({},a.interpolation),this.options.interpolation)),o.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=o.keySeparator),o.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=o.nsSeparator);function l(p){return p?typeof p=="function"?new p:p:null}if(!this.options.isClone){this.modules.logger?pn.init(l(this.modules.logger),this.options):pn.init(null,this.options);var u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=V8);var c=new M8(this.options);this.store=new L8(this.options.resources,this.options);var d=this.services;d.logger=pn,d.resourceStore=this.store,d.languageUtils=c,d.pluralResolver=new U8(c,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(d.formatter=l(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new B8(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new K8(l(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var g=arguments.length,m=new Array(g>1?g-1:0),S=1;S<g;S++)m[S-1]=arguments[S];i.emit.apply(i,[p].concat(m))}),this.modules.languageDetector&&(d.languageDetector=l(this.modules.languageDetector),d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=l(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new tv(this.services,this.options),this.translator.on("*",function(p){for(var g=arguments.length,m=new Array(g>1?g-1:0),S=1;S<g;S++)m[S-1]=arguments[S];i.emit.apply(i,[p].concat(m))}),this.modules.external.forEach(function(p){p.init&&p.init(i)})}if(this.format=this.options.interpolation.format,s||(s=ma),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var v=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];v.forEach(function(p){i[p]=function(){var g;return(g=i.store)[p].apply(g,arguments)}});var y=["addResource","addResources","addResourceBundle","removeResourceBundle"];y.forEach(function(p){i[p]=function(){var g;return(g=i.store)[p].apply(g,arguments),i}});var b=Co(),w=function(){var g=function(S,k){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),b.resolve(k),s(S,k)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return g(null,i.t.bind(i));i.changeLanguage(i.options.lng,g)};return this.options.resources||!this.options.initImmediate?w():setTimeout(w,0),b}},{key:"loadResources",value:function(i){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ma,a=s,l=typeof i=="string"?i:this.language;if(typeof i=="function"&&(a=i),!this.options.resources||this.options.partialBundledLanguages){if(l&&l.toLowerCase()==="cimode")return a();var u=[],c=function(v){if(!!v){var y=o.services.languageUtils.toResolveHierarchy(v);y.forEach(function(b){u.indexOf(b)<0&&u.push(b)})}};if(l)c(l);else{var d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.forEach(function(h){return c(h)})}this.options.preload&&this.options.preload.forEach(function(h){return c(h)}),this.services.backendConnector.load(u,this.options.ns,function(h){!h&&!o.resolvedLanguage&&o.language&&o.setResolvedLanguage(o.language),a(h)})}else a(null)}},{key:"reloadResources",value:function(i,o,s){var a=Co();return i||(i=this.languages),o||(o=this.options.ns),s||(s=ma),this.services.backendConnector.reload(i,o,function(l){a.resolve(),s(l)}),a}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&ib.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var o=0;o<this.languages.length;o++){var s=this.languages[o];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}},{key:"changeLanguage",value:function(i,o){var s=this;this.isLanguageChangingTo=i;var a=Co();this.emit("languageChanging",i);var l=function(h){s.language=h,s.languages=s.services.languageUtils.toResolveHierarchy(h),s.resolvedLanguage=void 0,s.setResolvedLanguage(h)},u=function(h,v){v?(l(v),s.translator.changeLanguage(v),s.isLanguageChangingTo=void 0,s.emit("languageChanged",v),s.logger.log("languageChanged",v)):s.isLanguageChangingTo=void 0,a.resolve(function(){return s.t.apply(s,arguments)}),o&&o(h,function(){return s.t.apply(s,arguments)})},c=function(h){!i&&!h&&s.services.languageDetector&&(h=[]);var v=typeof h=="string"?h:s.services.languageUtils.getBestMatchFromCodes(h);v&&(s.language||l(v),s.translator.language||s.translator.changeLanguage(v),s.services.languageDetector&&s.services.languageDetector.cacheUserLanguage(v)),s.loadResources(v,function(y){u(y,v)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?c(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(c):c(i),a}},{key:"getFixedT",value:function(i,o,s){var a=this,l=function u(c,d){var h;if(sr(d)!=="object"){for(var v=arguments.length,y=new Array(v>2?v-2:0),b=2;b<v;b++)y[b-2]=arguments[b];h=a.options.overloadTranslationOptionHandler([c,d].concat(y))}else h=on({},d);h.lng=h.lng||u.lng,h.lngs=h.lngs||u.lngs,h.ns=h.ns||u.ns,h.keyPrefix=h.keyPrefix||s||u.keyPrefix;var w=a.options.keySeparator||".",p=h.keyPrefix?"".concat(h.keyPrefix).concat(w).concat(c):c;return a.t(p,h)};return typeof i=="string"?l.lng=i:l.lngs=i,l.ns=o,l.keyPrefix=s,l}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var a=this.resolvedLanguage||this.languages[0],l=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var c=function(v,y){var b=o.services.backendConnector.state["".concat(v,"|").concat(y)];return b===-1||b===2};if(s.precheck){var d=s.precheck(this,c);if(d!==void 0)return d}return!!(this.hasResourceBundle(a,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(a,i)&&(!l||c(u,i)))}},{key:"loadNamespaces",value:function(i,o){var s=this,a=Co();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(l){s.options.ns.indexOf(l)<0&&s.options.ns.push(l)}),this.loadResources(function(l){a.resolve(),o&&o(l)}),a):(o&&o(),Promise.resolve())}},{key:"loadLanguages",value:function(i,o){var s=Co();typeof i=="string"&&(i=[i]);var a=this.options.preload||[],l=i.filter(function(u){return a.indexOf(u)<0});return l.length?(this.options.preload=a.concat(l),this.loadResources(function(u){s.resolve(),o&&o(u)}),s):(o&&o(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var o=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"];return o.indexOf(this.services.languageUtils.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ma,a=on(on(on({},this.options),o),{isClone:!0}),l=new n(a),u=["store","services","language"];return u.forEach(function(c){l[c]=i[c]}),l.services=on({},this.services),l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l.translator=new tv(l.services,l.options),l.translator.on("*",function(c){for(var d=arguments.length,h=new Array(d>1?d-1:0),v=1;v<d;v++)h[v-1]=arguments[v];l.emit.apply(l,[c].concat(h))}),l.init(a,s),l.translator.options=l.options,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(vr);tn(Sl,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Sl(e,t)});var ct=Sl.createInstance();ct.createInstance=Sl.createInstance;ct.createInstance;ct.init;ct.loadResources;ct.reloadResources;ct.use;ct.changeLanguage;ct.getFixedT;ct.t;ct.exists;ct.setDefaultNamespace;ct.hasLoadedNamespace;ct.loadNamespaces;ct.loadLanguages;function Wd(e){return Wd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wd(e)}var ob=[],Z8=ob.forEach,e5=ob.slice;function Gd(e){return Z8.call(e5.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}function sb(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Wd(XMLHttpRequest))==="object"}function t5(e){return!!e&&typeof e.then=="function"}function n5(e){return t5(e)?e:Promise.resolve(e)}function r5(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var xl={exports:{}},va={exports:{}},uv;function i5(){return uv||(uv=1,function(e,t){var n=typeof self<"u"?self:ya,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(s){var a={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(E){return E&&DataView.prototype.isPrototypeOf(E)}if(a.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(E){return E&&u.indexOf(Object.prototype.toString.call(E))>-1};function d(E){if(typeof E!="string"&&(E=String(E)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(E))throw new TypeError("Invalid character in header field name");return E.toLowerCase()}function h(E){return typeof E!="string"&&(E=String(E)),E}function v(E){var A={next:function(){var G=E.shift();return{done:G===void 0,value:G}}};return a.iterable&&(A[Symbol.iterator]=function(){return A}),A}function y(E){this.map={},E instanceof y?E.forEach(function(A,G){this.append(G,A)},this):Array.isArray(E)?E.forEach(function(A){this.append(A[0],A[1])},this):E&&Object.getOwnPropertyNames(E).forEach(function(A){this.append(A,E[A])},this)}y.prototype.append=function(E,A){E=d(E),A=h(A);var G=this.map[E];this.map[E]=G?G+", "+A:A},y.prototype.delete=function(E){delete this.map[d(E)]},y.prototype.get=function(E){return E=d(E),this.has(E)?this.map[E]:null},y.prototype.has=function(E){return this.map.hasOwnProperty(d(E))},y.prototype.set=function(E,A){this.map[d(E)]=h(A)},y.prototype.forEach=function(E,A){for(var G in this.map)this.map.hasOwnProperty(G)&&E.call(A,this.map[G],G,this)},y.prototype.keys=function(){var E=[];return this.forEach(function(A,G){E.push(G)}),v(E)},y.prototype.values=function(){var E=[];return this.forEach(function(A){E.push(A)}),v(E)},y.prototype.entries=function(){var E=[];return this.forEach(function(A,G){E.push([G,A])}),v(E)},a.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);function b(E){if(E.bodyUsed)return Promise.reject(new TypeError("Already read"));E.bodyUsed=!0}function w(E){return new Promise(function(A,G){E.onload=function(){A(E.result)},E.onerror=function(){G(E.error)}})}function p(E){var A=new FileReader,G=w(A);return A.readAsArrayBuffer(E),G}function g(E){var A=new FileReader,G=w(A);return A.readAsText(E),G}function m(E){for(var A=new Uint8Array(E),G=new Array(A.length),X=0;X<A.length;X++)G[X]=String.fromCharCode(A[X]);return G.join("")}function S(E){if(E.slice)return E.slice(0);var A=new Uint8Array(E.byteLength);return A.set(new Uint8Array(E)),A.buffer}function k(){return this.bodyUsed=!1,this._initBody=function(E){this._bodyInit=E,E?typeof E=="string"?this._bodyText=E:a.blob&&Blob.prototype.isPrototypeOf(E)?this._bodyBlob=E:a.formData&&FormData.prototype.isPrototypeOf(E)?this._bodyFormData=E:a.searchParams&&URLSearchParams.prototype.isPrototypeOf(E)?this._bodyText=E.toString():a.arrayBuffer&&a.blob&&l(E)?(this._bodyArrayBuffer=S(E.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(E)||c(E))?this._bodyArrayBuffer=S(E):this._bodyText=E=Object.prototype.toString.call(E):this._bodyText="",this.headers.get("content-type")||(typeof E=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):a.searchParams&&URLSearchParams.prototype.isPrototypeOf(E)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a.blob&&(this.blob=function(){var E=b(this);if(E)return E;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?b(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var E=b(this);if(E)return E;if(this._bodyBlob)return g(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(m(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a.formData&&(this.formData=function(){return this.text().then(N)}),this.json=function(){return this.text().then(JSON.parse)},this}var T=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(E){var A=E.toUpperCase();return T.indexOf(A)>-1?A:E}function x(E,A){A=A||{};var G=A.body;if(E instanceof x){if(E.bodyUsed)throw new TypeError("Already read");this.url=E.url,this.credentials=E.credentials,A.headers||(this.headers=new y(E.headers)),this.method=E.method,this.mode=E.mode,this.signal=E.signal,!G&&E._bodyInit!=null&&(G=E._bodyInit,E.bodyUsed=!0)}else this.url=String(E);if(this.credentials=A.credentials||this.credentials||"same-origin",(A.headers||!this.headers)&&(this.headers=new y(A.headers)),this.method=_(A.method||this.method||"GET"),this.mode=A.mode||this.mode||null,this.signal=A.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&G)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(G)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})};function N(E){var A=new FormData;return E.trim().split("&").forEach(function(G){if(G){var X=G.split("="),L=X.shift().replace(/\+/g," "),$=X.join("=").replace(/\+/g," ");A.append(decodeURIComponent(L),decodeURIComponent($))}}),A}function O(E){var A=new y,G=E.replace(/\r?\n[\t ]+/g," ");return G.split(/\r?\n/).forEach(function(X){var L=X.split(":"),$=L.shift().trim();if($){var q=L.join(":").trim();A.append($,q)}}),A}k.call(x.prototype);function R(E,A){A||(A={}),this.type="default",this.status=A.status===void 0?200:A.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in A?A.statusText:"OK",this.headers=new y(A.headers),this.url=A.url||"",this._initBody(E)}k.call(R.prototype),R.prototype.clone=function(){return new R(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},R.error=function(){var E=new R(null,{status:0,statusText:""});return E.type="error",E};var z=[301,302,303,307,308];R.redirect=function(E,A){if(z.indexOf(A)===-1)throw new RangeError("Invalid status code");return new R(null,{status:A,headers:{location:E}})},s.DOMException=o.DOMException;try{new s.DOMException}catch{s.DOMException=function(A,G){this.message=A,this.name=G;var X=Error(A);this.stack=X.stack},s.DOMException.prototype=Object.create(Error.prototype),s.DOMException.prototype.constructor=s.DOMException}function K(E,A){return new Promise(function(G,X){var L=new x(E,A);if(L.signal&&L.signal.aborted)return X(new s.DOMException("Aborted","AbortError"));var $=new XMLHttpRequest;function q(){$.abort()}$.onload=function(){var Z={status:$.status,statusText:$.statusText,headers:O($.getAllResponseHeaders()||"")};Z.url="responseURL"in $?$.responseURL:Z.headers.get("X-Request-URL");var j="response"in $?$.response:$.responseText;G(new R(j,Z))},$.onerror=function(){X(new TypeError("Network request failed"))},$.ontimeout=function(){X(new TypeError("Network request failed"))},$.onabort=function(){X(new s.DOMException("Aborted","AbortError"))},$.open(L.method,L.url,!0),L.credentials==="include"?$.withCredentials=!0:L.credentials==="omit"&&($.withCredentials=!1),"responseType"in $&&a.blob&&($.responseType="blob"),L.headers.forEach(function(Z,j){$.setRequestHeader(j,Z)}),L.signal&&(L.signal.addEventListener("abort",q),$.onreadystatechange=function(){$.readyState===4&&L.signal.removeEventListener("abort",q)}),$.send(typeof L._bodyInit>"u"?null:L._bodyInit)})}return K.polyfill=!0,o.fetch||(o.fetch=K,o.Headers=y,o.Request=x,o.Response=R),s.Headers=y,s.Request=x,s.Response=R,s.fetch=K,Object.defineProperty(s,"__esModule",{value:!0}),s})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(va,va.exports)),va.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof ya<"u"&&ya.fetch?n=ya.fetch:typeof window<"u"&&window.fetch&&(n=window.fetch)),typeof r5<"u"&&(typeof window>"u"||typeof window.document>"u")){var r=n||i5();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(xl,xl.exports);const ab=xl.exports,cv=pb({__proto__:null,default:ab},[xl.exports]);function _l(e){return _l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_l(e)}var yr;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?yr=global.fetch:typeof window<"u"&&window.fetch&&(yr=window.fetch));var Es;sb()&&(typeof global<"u"&&global.XMLHttpRequest?Es=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Es=window.XMLHttpRequest));var El;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?El=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(El=window.ActiveXObject));!yr&&cv&&!Es&&!El&&(yr=ab||cv);typeof yr!="function"&&(yr=void 0);var qd=function(t,n){if(n&&_l(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},o5=function(t,n,r,i){t.queryStringParams&&(n=qd(n,t.queryStringParams));var o=Gd({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);r&&(o["Content-Type"]="application/json"),yr(n,Gd({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:o},typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions)).then(function(s){if(!s.ok)return i(s.statusText||"Error",{status:s.status});s.text().then(function(a){i(null,{status:s.status,data:a})}).catch(i)}).catch(i)},s5=function(t,n,r,i){r&&_l(r)==="object"&&(r=qd("",r).slice(1)),t.queryStringParams&&(n=qd(n,t.queryStringParams));try{var o;Es?o=new Es:o=new El("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",n,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var s=t.customHeaders;if(s=typeof s=="function"?s():s,s)for(var a in s)o.setRequestHeader(a,s[a]);o.onreadystatechange=function(){o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(l){console&&console.log(l)}},a5=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},yr)return o5(t,n,r,i);if(sb()||typeof ActiveXObject=="function")return s5(t,n,r,i)};function l5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u5(e,t,n){return t&&dv(e.prototype,t),n&&dv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d5=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return c5({},r,i||"")},request:a5,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},lb=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};l5(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return u5(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=Gd(i,this.options||{},d5()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,o,s){var a=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=n5(l),l.then(function(u){if(!u)return s(null,{});var c=a.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});a.loadUrl(c,s,r,o)})}},{key:"loadUrl",value:function(n,r,i,o){var s=this;this.options.request(this.options,n,void 0,function(a,l){if(l&&(l.status>=500&&l.status<600||!l.status))return r("failed loading "+n+"; status code: "+l.status,!0);if(l&&l.status>=400&&l.status<500)return r("failed loading "+n+"; status code: "+l.status,!1);if(!l&&a&&a.message&&a.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+a.message,!0);if(a)return r(a,!1);var u,c;try{typeof l.data=="string"?u=s.options.parse(l.data,i,o):u=l.data}catch{c="failed parsing "+n+" to json"}if(c)return r(c,!1);r(null,u)})}},{key:"create",value:function(n,r,i,o,s){var a=this;if(!!this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,o),u=0,c=[],d=[];n.forEach(function(h){var v=a.options.addPath;typeof a.options.addPath=="function"&&(v=a.options.addPath(h,r));var y=a.services.interpolator.interpolate(v,{lng:h,ns:r});a.options.request(a.options,y,l,function(b,w){u+=1,c.push(b),d.push(w),u===n.length&&s&&s(c,d)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,o=r.languageUtils,s=r.logger,a=i.language;if(!(a&&a.toLowerCase()==="cimode")){var l=[],u=function(d){var h=o.toResolveHierarchy(d);h.forEach(function(v){l.indexOf(v)<0&&l.push(v)})};u(a),this.allOptions.preload&&this.allOptions.preload.forEach(function(c){return u(c)}),l.forEach(function(c){n.allOptions.ns.forEach(function(d){i.read(c,d,"read",null,null,function(h,v){h&&s.warn("loading namespace ".concat(d," for language ").concat(c," failed"),h),!h&&v&&s.log("loaded namespace ".concat(d," for language ").concat(c),v),i.loaded("".concat(c,"|").concat(d),h,v)})})})}}}]),e}();lb.type="backend";var ub=[],f5=ub.forEach,p5=ub.slice;function h5(e){return f5.call(p5.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}var fv=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,g5=function(t,n,r){var i=r||{};i.path=i.path||"/";var o=encodeURIComponent(n),s="".concat(t,"=").concat(o);if(i.maxAge>0){var a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");s+="; Max-Age=".concat(Math.floor(a))}if(i.domain){if(!fv.test(i.domain))throw new TypeError("option domain is invalid");s+="; Domain=".concat(i.domain)}if(i.path){if(!fv.test(i.path))throw new TypeError("option path is invalid");s+="; Path=".concat(i.path)}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+="; Expires=".concat(i.expires.toUTCString())}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.sameSite){var l=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(l){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s},pv={create:function(t,n,r,i){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};r&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+r*60*1e3)),i&&(o.domain=i),document.cookie=g5(t,encodeURIComponent(n),o)},read:function(t){for(var n="".concat(t,"="),r=document.cookie.split(";"),i=0;i<r.length;i++){for(var o=r[i];o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(n)===0)return o.substring(n.length,o.length)}return null},remove:function(t){this.create(t,"",-1)}},m5={name:"cookie",lookup:function(t){var n;if(t.lookupCookie&&typeof document<"u"){var r=pv.read(t.lookupCookie);r&&(n=r)}return n},cacheUserLanguage:function(t,n){n.lookupCookie&&typeof document<"u"&&pv.create(n.lookupCookie,t,n.cookieMinutes,n.cookieDomain,n.cookieOptions)}},v5={name:"querystring",lookup:function(t){var n;if(typeof window<"u"){var r=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));for(var i=r.substring(1),o=i.split("&"),s=0;s<o.length;s++){var a=o[s].indexOf("=");if(a>0){var l=o[s].substring(0,a);l===t.lookupQuerystring&&(n=o[s].substring(a+1))}}}return n}},Io=null,hv=function(){if(Io!==null)return Io;try{Io=window!=="undefined"&&window.localStorage!==null;var t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{Io=!1}return Io},y5={name:"localStorage",lookup:function(t){var n;if(t.lookupLocalStorage&&hv()){var r=window.localStorage.getItem(t.lookupLocalStorage);r&&(n=r)}return n},cacheUserLanguage:function(t,n){n.lookupLocalStorage&&hv()&&window.localStorage.setItem(n.lookupLocalStorage,t)}},Oo=null,gv=function(){if(Oo!==null)return Oo;try{Oo=window!=="undefined"&&window.sessionStorage!==null;var t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{Oo=!1}return Oo},w5={name:"sessionStorage",lookup:function(t){var n;if(t.lookupSessionStorage&&gv()){var r=window.sessionStorage.getItem(t.lookupSessionStorage);r&&(n=r)}return n},cacheUserLanguage:function(t,n){n.lookupSessionStorage&&gv()&&window.sessionStorage.setItem(n.lookupSessionStorage,t)}},b5={name:"navigator",lookup:function(t){var n=[];if(typeof navigator<"u"){if(navigator.languages)for(var r=0;r<navigator.languages.length;r++)n.push(navigator.languages[r]);navigator.userLanguage&&n.push(navigator.userLanguage),navigator.language&&n.push(navigator.language)}return n.length>0?n:void 0}},S5={name:"htmlTag",lookup:function(t){var n,r=t.htmlTag||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(n=r.getAttribute("lang")),n}},x5={name:"path",lookup:function(t){var n;if(typeof window<"u"){var r=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(r instanceof Array)if(typeof t.lookupFromPathIndex=="number"){if(typeof r[t.lookupFromPathIndex]!="string")return;n=r[t.lookupFromPathIndex].replace("/","")}else n=r[0].replace("/","")}return n}},_5={name:"subdomain",lookup:function(t){var n=typeof t.lookupFromSubdomainIndex=="number"?t.lookupFromSubdomainIndex+1:1,r=typeof window<"u"&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(!!r)return r[n]}};function E5(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}}var cb=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ft(this,e),this.type="languageDetector",this.detectors={},this.init(t,n)}return Ut(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=h5(r,this.options||{},E5()),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(m5),this.addDetector(v5),this.addDetector(y5),this.addDetector(w5),this.addDetector(b5),this.addDetector(S5),this.addDetector(x5),this.addDetector(_5)}},{key:"addDetector",value:function(n){this.detectors[n.name]=n}},{key:"detect",value:function(n){var r=this;n||(n=this.options.order);var i=[];return n.forEach(function(o){if(r.detectors[o]){var s=r.detectors[o].lookup(r.options);s&&typeof s=="string"&&(s=[s]),s&&(i=i.concat(s))}}),this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}},{key:"cacheUserLanguage",value:function(n,r){var i=this;r||(r=this.options.caches),r&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(n)>-1||r.forEach(function(o){i.detectors[o]&&i.detectors[o].cacheUserLanguage(n,i.options)}))}}]),e}();cb.type="languageDetector";const k5="ncNAfaCUM7t97_6x6TF47w",T5=`https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${k5}`,C5=document.documentElement.lang;ct.use(lb).use(cb).use(v_).init({lng:C5,fallbackLng:"en",ns:["default"],defaultNS:"default",supportedLngs:["en","zh","ms"],backend:{loadPath:T5}});function mv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mv(Object(n),!0).forEach(function(r){tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ge(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var yv=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Tc=function(){return Math.random().toString(36).substring(7).split("").join(".")},ks={INIT:"@@redux/INIT"+Tc(),REPLACE:"@@redux/REPLACE"+Tc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Tc()}};function I5(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Iu(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ge(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ge(1));return n(Iu)(e,t)}if(typeof e!="function")throw new Error(Ge(2));var i=e,o=t,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function c(){if(l)throw new Error(Ge(3));return o}function d(b){if(typeof b!="function")throw new Error(Ge(4));if(l)throw new Error(Ge(5));var w=!0;return u(),a.push(b),function(){if(!!w){if(l)throw new Error(Ge(6));w=!1,u();var g=a.indexOf(b);a.splice(g,1),s=null}}}function h(b){if(!I5(b))throw new Error(Ge(7));if(typeof b.type>"u")throw new Error(Ge(8));if(l)throw new Error(Ge(9));try{l=!0,o=i(o,b)}finally{l=!1}for(var w=s=a,p=0;p<w.length;p++){var g=w[p];g()}return b}function v(b){if(typeof b!="function")throw new Error(Ge(10));i=b,h({type:ks.REPLACE})}function y(){var b,w=d;return b={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(Ge(11));function m(){g.next&&g.next(c())}m();var S=w(m);return{unsubscribe:S}}},b[yv]=function(){return this},b}return h({type:ks.INIT}),r={dispatch:h,subscribe:d,getState:c,replaceReducer:v},r[yv]=y,r}var O5=Iu;function P5(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:ks.INIT});if(typeof r>"u")throw new Error(Ge(12));if(typeof n(void 0,{type:ks.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ge(13))})}function db(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{P5(n)}catch(a){s=a}return function(l,u){if(l===void 0&&(l={}),s)throw s;for(var c=!1,d={},h=0;h<o.length;h++){var v=o[h],y=n[v],b=l[v],w=y(b,u);if(typeof w>"u")throw u&&u.type,new Error(Ge(14));d[v]=w,c=c||w!==b}return c=c||o.length!==Object.keys(l).length,c?d:l}}function wv(e,t){return function(){return t(e.apply(this,arguments))}}function R5(e,t){if(typeof e=="function")return wv(e,t);if(typeof e!="object"||e===null)throw new Error(Ge(16));var n={};for(var r in e){var i=e[r];typeof i=="function"&&(n[r]=wv(i,t))}return n}function fb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function A5(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Ge(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=fb.apply(void 0,a)(i.dispatch),vv(vv({},i),{},{dispatch:o})}}}const L5=Object.freeze(Object.defineProperty({__proto__:null,__DO_NOT_USE__ActionTypes:ks,applyMiddleware:A5,bindActionCreators:R5,combineReducers:db,compose:fb,createStore:Iu,legacy_createStore:O5},Symbol.toStringTag,{value:"Module"})),N5=gb(L5);var bv=N5.compose,$5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?bv:bv.apply(null,arguments)};const M5=(e={loading:!1,visible:!1,showPassword:!1,userInfo:null},t)=>{switch(t.type){case"USER_LOGIN_DETAILS":return{userInfo:t.payload};case"USER_LOGOUT":return{userInfo:t.payload};case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1};case"USER_LOGIN_FAIL":return{loading:!1};case"TOGGLE_PASSWORD":return{visible:!0,showPassword:!e.showPassword};case"SET_VISIBLE":return{visible:!0};default:return e}},D5=(e={loading:!1},t)=>{switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1};case"USER_REGISTER_FAIL":return{loading:!1};default:return e}},z5=(e={loading:!1,visible:!1,showPassword:!1},t)=>{switch(t.type){case"USER_REGISTER_COMPLETE_REQUEST":return{loading:!0};case"USER_REGISTER_COMPLETE_SUCCESS":return{loading:!1};case"USER_REGISTER_COMPLETE_FAIL":return{loading:!1};case"TOGGLE_PASSWORD":return{visible:!0,showPassword:!e.showPassword};case"SET_VISIBLE":return{visible:!0};default:return e}},j5=(e={loading:!1},t)=>{switch(t.type){case"USER_PASSWORD_RESET_REQUEST":return{loading:!0};case"USER_PASSWORD_RESET_SUCCESS":return{loading:!1};case"USER_PASSWORD_RESET_FAIL":return{loading:!1};default:return e}},F5=db({userLogin:M5,userRegister:D5,userRegisterComplete:z5,userPasswordReset:j5}),U5=Iu(F5,$5());Cc.createRoot(document.getElementById("root")).render(f(Ne.StrictMode,{children:f(KE,{store:U5,children:f(s2,{children:f(C.exports.Suspense,{fallback:f(b8,{}),children:f(m8,{})})})})}));
