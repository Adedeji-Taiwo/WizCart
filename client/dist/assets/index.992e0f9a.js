function jb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Fb(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var P={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=Symbol.for("react.element"),Ub=Symbol.for("react.portal"),Bb=Symbol.for("react.fragment"),Vb=Symbol.for("react.strict_mode"),Hb=Symbol.for("react.profiler"),Wb=Symbol.for("react.provider"),Gb=Symbol.for("react.context"),qb=Symbol.for("react.forward_ref"),Kb=Symbol.for("react.suspense"),Yb=Symbol.for("react.memo"),Xb=Symbol.for("react.lazy"),ah=Symbol.iterator;function Qb(e){return e===null||typeof e!="object"?null:(e=ah&&e[ah]||e["@@iterator"],typeof e=="function"?e:null)}var Gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qv=Object.assign,Kv={};function _o(e,t,n){this.props=e,this.context=t,this.refs=Kv,this.updater=n||Gv}_o.prototype.isReactComponent={};_o.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yv(){}Yv.prototype=_o.prototype;function wf(e,t,n){this.props=e,this.context=t,this.refs=Kv,this.updater=n||Gv}var bf=wf.prototype=new Yv;bf.constructor=wf;qv(bf,_o.prototype);bf.isPureReactComponent=!0;var lh=Array.isArray,Xv=Object.prototype.hasOwnProperty,Sf={current:null},Qv={key:!0,ref:!0,__self:!0,__source:!0};function Jv(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xv.call(t,r)&&!Qv.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qs,type:e,key:o,ref:s,props:i,_owner:Sf.current}}function Jb(e,t){return{$$typeof:Qs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qs}function Zb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uh=/\/+/g;function tc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zb(""+e.key):t.toString(36)}function Ha(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qs:case Ub:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+tc(s,0):r,lh(i)?(n="",e!=null&&(n=e.replace(uh,"$&/")+"/"),Ha(i,t,n,"",function(u){return u})):i!=null&&(xf(i)&&(i=Jb(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(uh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",lh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+tc(o,a);s+=Ha(o,t,n,l,i)}else if(l=Qb(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+tc(o,a++),s+=Ha(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ha(e,t,n){if(e==null)return e;var r=[],i=0;return Ha(e,r,"","",function(o){return t.call(n,o,i++)}),r}function eS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Tt={current:null},Wa={transition:null},tS={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Sf};he.Children={map:ha,forEach:function(e,t,n){ha(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ha(e,function(){t++}),t},toArray:function(e){return ha(e,function(t){return t})||[]},only:function(e){if(!xf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=_o;he.Fragment=Bb;he.Profiler=Hb;he.PureComponent=wf;he.StrictMode=Vb;he.Suspense=Kb;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qv({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Sf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xv.call(t,l)&&!Qv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qs,type:e.type,key:i,ref:o,props:r,_owner:s}};he.createContext=function(e){return e={$$typeof:Gb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wb,_context:e},e.Consumer=e};he.createElement=Jv;he.createFactory=function(e){var t=Jv.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:qb,render:e}};he.isValidElement=xf;he.lazy=function(e){return{$$typeof:Xb,_payload:{_status:-1,_result:e},_init:eS}};he.memo=function(e,t){return{$$typeof:Yb,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Wa.transition;Wa.transition={};try{e()}finally{Wa.transition=t}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(e,t){return Tt.current.useCallback(e,t)};he.useContext=function(e){return Tt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return Tt.current.useDeferredValue(e)};he.useEffect=function(e,t){return Tt.current.useEffect(e,t)};he.useId=function(){return Tt.current.useId()};he.useImperativeHandle=function(e,t,n){return Tt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return Tt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return Tt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return Tt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return Tt.current.useReducer(e,t,n)};he.useRef=function(e){return Tt.current.useRef(e)};he.useState=function(e){return Tt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return Tt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return Tt.current.useTransition()};he.version="18.2.0";(function(e){e.exports=he})(P);const Ze=zb(P.exports);var Qc={},Xl={exports:{}},Gt={},Zv={exports:{}},e0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,D){var Q=R.length;R.push(D);e:for(;0<Q;){var se=Q-1>>>1,B=R[se];if(0<i(B,D))R[se]=D,R[Q]=B,Q=se;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],Q=R.pop();if(Q!==D){R[0]=Q;e:for(var se=0,B=R.length,Y=B>>>1;se<Y;){var U=2*(se+1)-1,te=R[U],O=U+1,ue=R[O];if(0>i(te,Q))O<B&&0>i(ue,te)?(R[se]=ue,R[O]=Q,se=O):(R[se]=te,R[U]=Q,se=U);else if(O<B&&0>i(ue,Q))R[se]=ue,R[O]=Q,se=O;else break e}}return D}function i(R,D){var Q=R.sortIndex-D.sortIndex;return Q!==0?Q:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,v=!1,y=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function S(R){if(b=!1,g(R),!y)if(n(l)!==null)y=!0,X(k);else{var D=n(u);D!==null&&ne(S,D.startTime-R)}}function k(R,D){y=!1,b&&(b=!1,p(x),x=-1),v=!0;var Q=f;try{for(g(D),d=n(l);d!==null&&(!(d.expirationTime>D)||R&&!L());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var B=se(d.expirationTime<=D);D=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&r(l),g(D)}else r(l);d=n(l)}if(d!==null)var Y=!0;else{var U=n(u);U!==null&&ne(S,U.startTime-D),Y=!1}return Y}finally{d=null,f=Q,v=!1}}var _=!1,E=null,x=-1,$=5,I=-1;function L(){return!(e.unstable_now()-I<$)}function j(){if(E!==null){var R=e.unstable_now();I=R;var D=!0;try{D=E(!0,R)}finally{D?J():(_=!1,E=null)}}else _=!1}var J;if(typeof m=="function")J=function(){m(j)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,A=T.port2;T.port1.onmessage=j,J=function(){A.postMessage(null)}}else J=function(){w(j,0)};function X(R){E=R,_||(_=!0,J())}function ne(R,D){x=w(function(){R(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,X(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var Q=f;f=D;try{return R()}finally{f=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Q=f;f=R;try{return D()}finally{f=Q}},e.unstable_scheduleCallback=function(R,D,Q){var se=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?se+Q:se):Q=se,R){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=Q+B,R={id:c++,callback:D,priorityLevel:R,startTime:Q,expirationTime:B,sortIndex:-1},Q>se?(R.sortIndex=Q,t(u,R),n(l)===null&&R===n(u)&&(b?(p(x),x=-1):b=!0,ne(S,Q-se))):(R.sortIndex=B,t(l,R),y||v||(y=!0,X(k))),R},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(R){var D=f;return function(){var Q=f;f=D;try{return R.apply(this,arguments)}finally{f=Q}}}})(e0);(function(e){e.exports=e0})(Zv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=P.exports,Wt=Zv.exports;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n0=new Set,Ss={};function ki(e,t){co(e,t),co(e+"Capture",t)}function co(e,t){for(Ss[e]=t,e=0;e<t.length;e++)n0.add(t[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,nS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ch={},dh={};function rS(e){return Jc.call(dh,e)?!0:Jc.call(ch,e)?!1:nS.test(e)?dh[e]=!0:(ch[e]=!0,!1)}function iS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oS(e,t,n,r){if(t===null||typeof t>"u"||iS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ct(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ht[e]=new Ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ht[t]=new Ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ht[e]=new Ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ht[e]=new Ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ht[e]=new Ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ht[e]=new Ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ht[e]=new Ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ht[e]=new Ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ht[e]=new Ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function Ef(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_f,Ef);ht[t]=new Ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_f,Ef);ht[t]=new Ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_f,Ef);ht[t]=new Ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ht[e]=new Ct(e,1,!1,e.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ht[e]=new Ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function kf(e,t,n,r){var i=ht.hasOwnProperty(t)?ht[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(oS(t,n,i,r)&&(n=null),r||i===null?rS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),r0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),o0=Symbol.for("react.offscreen"),fh=Symbol.iterator;function Ao(e){return e===null||typeof e!="object"?null:(e=fh&&e[fh]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,nc;function ts(e){if(nc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nc=t&&t[1]||""}return`
`+nc+e}var rc=!1;function ic(e,t){if(!e||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ts(e):""}function sS(e){switch(e.tag){case 5:return ts(e.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return e=ic(e.type,!1),e;case 11:return e=ic(e.type.render,!1),e;case 1:return e=ic(e.type,!0),e;default:return""}}function nd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ui:return"Fragment";case Fi:return"Portal";case Zc:return"Profiler";case Tf:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case i0:return(e.displayName||"Context")+".Consumer";case r0:return(e._context.displayName||"Context")+".Provider";case Cf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Of:return t=e.displayName||null,t!==null?t:nd(e.type)||"Memo";case ur:t=e._payload,e=e._init;try{return nd(e(t))}catch{}}return null}function aS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(t);case 8:return t===Tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function s0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lS(e){var t=s0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ga(e){e._valueTracker||(e._valueTracker=lS(e))}function a0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=s0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rd(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ph(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function l0(e,t){t=t.checked,t!=null&&kf(e,"checked",t,!1)}function id(e,t){l0(e,t);var n=Nr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?od(e,t.type,n):t.hasOwnProperty("defaultValue")&&od(e,t.type,Nr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function od(e,t,n){(t!=="number"||ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ns=Array.isArray;function to(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(ns(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nr(n)}}function u0(e,t){var n=Nr(t.value),r=Nr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function c0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?c0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var va,d0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=va.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var as={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uS=["Webkit","ms","Moz","O"];Object.keys(as).forEach(function(e){uS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),as[t]=as[e]})});function f0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||as.hasOwnProperty(e)&&as[e]?(""+t).trim():t+"px"}function p0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=f0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cS=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(e,t){if(t){if(cS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function ud(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function If(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dd=null,no=null,ro=null;function vh(e){if(e=ea(e)){if(typeof dd!="function")throw Error(V(280));var t=e.stateNode;t&&(t=tu(t),dd(e.stateNode,e.type,t))}}function h0(e){no?ro?ro.push(e):ro=[e]:no=e}function m0(){if(no){var e=no,t=ro;if(ro=no=null,vh(e),t)for(e=0;e<t.length;e++)vh(t[e])}}function g0(e,t){return e(t)}function v0(){}var oc=!1;function y0(e,t,n){if(oc)return e(t,n);oc=!0;try{return g0(e,t,n)}finally{oc=!1,(no!==null||ro!==null)&&(v0(),m0())}}function _s(e,t){var n=e.stateNode;if(n===null)return null;var r=tu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var fd=!1;if(Yn)try{var $o={};Object.defineProperty($o,"passive",{get:function(){fd=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{fd=!1}function dS(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ls=!1,cl=null,dl=!1,pd=null,fS={onError:function(e){ls=!0,cl=e}};function pS(e,t,n,r,i,o,s,a,l){ls=!1,cl=null,dS.apply(fS,arguments)}function hS(e,t,n,r,i,o,s,a,l){if(pS.apply(this,arguments),ls){if(ls){var u=cl;ls=!1,cl=null}else throw Error(V(198));dl||(dl=!0,pd=u)}}function Ti(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function w0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yh(e){if(Ti(e)!==e)throw Error(V(188))}function mS(e){var t=e.alternate;if(!t){if(t=Ti(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yh(i),e;if(o===r)return yh(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function b0(e){return e=mS(e),e!==null?S0(e):null}function S0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=S0(e);if(t!==null)return t;e=e.sibling}return null}var x0=Wt.unstable_scheduleCallback,wh=Wt.unstable_cancelCallback,gS=Wt.unstable_shouldYield,vS=Wt.unstable_requestPaint,Be=Wt.unstable_now,yS=Wt.unstable_getCurrentPriorityLevel,Pf=Wt.unstable_ImmediatePriority,_0=Wt.unstable_UserBlockingPriority,fl=Wt.unstable_NormalPriority,wS=Wt.unstable_LowPriority,E0=Wt.unstable_IdlePriority,Ql=null,$n=null;function bS(e){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Ql,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:_S,SS=Math.log,xS=Math.LN2;function _S(e){return e>>>=0,e===0?32:31-(SS(e)/xS|0)|0}var ya=64,wa=4194304;function rs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=rs(a):(o&=s,o!==0&&(r=rs(o)))}else s=n&~i,s!==0?r=rs(s):o!==0&&(r=rs(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gn(t),i=1<<n,r|=e[n],t&=~i;return r}function ES(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-gn(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=ES(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function hd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function k0(){var e=ya;return ya<<=1,(ya&4194240)===0&&(ya=64),e}function sc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Js(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gn(t),e[t]=n}function TS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Rf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var we=0;function T0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var C0,Lf,O0,I0,P0,md=!1,ba=[],wr=null,br=null,Sr=null,Es=new Map,ks=new Map,dr=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(e,t){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(t.pointerId)}}function Mo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ea(t),t!==null&&Lf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function OS(e,t,n,r,i){switch(t){case"focusin":return wr=Mo(wr,e,t,n,r,i),!0;case"dragenter":return br=Mo(br,e,t,n,r,i),!0;case"mouseover":return Sr=Mo(Sr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Es.set(o,Mo(Es.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ks.set(o,Mo(ks.get(o)||null,e,t,n,r,i)),!0}return!1}function R0(e){var t=Jr(e.target);if(t!==null){var n=Ti(t);if(n!==null){if(t=n.tag,t===13){if(t=w0(n),t!==null){e.blockedOn=t,P0(e.priority,function(){O0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cd=r,n.target.dispatchEvent(r),cd=null}else return t=ea(n),t!==null&&Lf(t),e.blockedOn=n,!1;t.shift()}return!0}function Sh(e,t,n){Ga(e)&&n.delete(t)}function IS(){md=!1,wr!==null&&Ga(wr)&&(wr=null),br!==null&&Ga(br)&&(br=null),Sr!==null&&Ga(Sr)&&(Sr=null),Es.forEach(Sh),ks.forEach(Sh)}function Do(e,t){e.blockedOn===t&&(e.blockedOn=null,md||(md=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,IS)))}function Ts(e){function t(i){return Do(i,e)}if(0<ba.length){Do(ba[0],e);for(var n=1;n<ba.length;n++){var r=ba[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wr!==null&&Do(wr,e),br!==null&&Do(br,e),Sr!==null&&Do(Sr,e),Es.forEach(t),ks.forEach(t),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)R0(n),n.blockedOn===null&&dr.shift()}var io=tr.ReactCurrentBatchConfig,hl=!0;function PS(e,t,n,r){var i=we,o=io.transition;io.transition=null;try{we=1,Nf(e,t,n,r)}finally{we=i,io.transition=o}}function RS(e,t,n,r){var i=we,o=io.transition;io.transition=null;try{we=4,Nf(e,t,n,r)}finally{we=i,io.transition=o}}function Nf(e,t,n,r){if(hl){var i=gd(e,t,n,r);if(i===null)gc(e,t,r,ml,n),bh(e,r);else if(OS(i,e,t,n,r))r.stopPropagation();else if(bh(e,r),t&4&&-1<CS.indexOf(e)){for(;i!==null;){var o=ea(i);if(o!==null&&C0(o),o=gd(e,t,n,r),o===null&&gc(e,t,r,ml,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else gc(e,t,r,null,n)}}var ml=null;function gd(e,t,n,r){if(ml=null,e=If(r),e=Jr(e),e!==null)if(t=Ti(e),t===null)e=null;else if(n=t.tag,n===13){if(e=w0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ml=e,null}function L0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yS()){case Pf:return 1;case _0:return 4;case fl:case wS:return 16;case E0:return 536870912;default:return 16}default:return 16}}var pr=null,Af=null,qa=null;function N0(){if(qa)return qa;var e,t=Af,n=t.length,r,i="value"in pr?pr.value:pr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return qa=i.slice(e,1<r?1-r:void 0)}function Ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function xh(){return!1}function qt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sa:xh,this.isPropagationStopped=xh,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=qt(Eo),Zs=je({},Eo,{view:0,detail:0}),LS=qt(Zs),ac,lc,jo,Jl=je({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jo&&(jo&&e.type==="mousemove"?(ac=e.screenX-jo.screenX,lc=e.screenY-jo.screenY):lc=ac=0,jo=e),ac)},movementY:function(e){return"movementY"in e?e.movementY:lc}}),_h=qt(Jl),NS=je({},Jl,{dataTransfer:0}),AS=qt(NS),$S=je({},Zs,{relatedTarget:0}),uc=qt($S),MS=je({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),DS=qt(MS),jS=je({},Eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zS=qt(jS),FS=je({},Eo,{data:0}),Eh=qt(FS),US={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=VS[e])?!!t[e]:!1}function Mf(){return HS}var WS=je({},Zs,{key:function(e){if(e.key){var t=US[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?BS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(e){return e.type==="keypress"?Ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GS=qt(WS),qS=je({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=qt(qS),KS=je({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),YS=qt(KS),XS=je({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),QS=qt(XS),JS=je({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ZS=qt(JS),ex=[9,13,27,32],Df=Yn&&"CompositionEvent"in window,us=null;Yn&&"documentMode"in document&&(us=document.documentMode);var tx=Yn&&"TextEvent"in window&&!us,A0=Yn&&(!Df||us&&8<us&&11>=us),Th=String.fromCharCode(32),Ch=!1;function $0(e,t){switch(e){case"keyup":return ex.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bi=!1;function nx(e,t){switch(e){case"compositionend":return M0(t);case"keypress":return t.which!==32?null:(Ch=!0,Th);case"textInput":return e=t.data,e===Th&&Ch?null:e;default:return null}}function rx(e,t){if(Bi)return e==="compositionend"||!Df&&$0(e,t)?(e=N0(),qa=Af=pr=null,Bi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return A0&&t.locale!=="ko"?null:t.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ix[e.type]:t==="textarea"}function D0(e,t,n,r){h0(r),t=gl(t,"onChange"),0<t.length&&(n=new $f("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cs=null,Cs=null;function ox(e){K0(e,0)}function Zl(e){var t=Wi(e);if(a0(t))return e}function sx(e,t){if(e==="change")return t}var j0=!1;if(Yn){var cc;if(Yn){var dc="oninput"in document;if(!dc){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),dc=typeof Ih.oninput=="function"}cc=dc}else cc=!1;j0=cc&&(!document.documentMode||9<document.documentMode)}function Ph(){cs&&(cs.detachEvent("onpropertychange",z0),Cs=cs=null)}function z0(e){if(e.propertyName==="value"&&Zl(Cs)){var t=[];D0(t,Cs,e,If(e)),y0(ox,t)}}function ax(e,t,n){e==="focusin"?(Ph(),cs=t,Cs=n,cs.attachEvent("onpropertychange",z0)):e==="focusout"&&Ph()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(Cs)}function ux(e,t){if(e==="click")return Zl(t)}function cx(e,t){if(e==="input"||e==="change")return Zl(t)}function dx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:dx;function Os(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jc.call(t,i)||!wn(e[i],t[i]))return!1}return!0}function Rh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lh(e,t){var n=Rh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rh(n)}}function F0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?F0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function U0(){for(var e=window,t=ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ul(e.document)}return t}function jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fx(e){var t=U0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&F0(n.ownerDocument.documentElement,n)){if(r!==null&&jf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Lh(n,o);var s=Lh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var px=Yn&&"documentMode"in document&&11>=document.documentMode,Vi=null,vd=null,ds=null,yd=!1;function Nh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yd||Vi==null||Vi!==ul(r)||(r=Vi,"selectionStart"in r&&jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ds&&Os(ds,r)||(ds=r,r=gl(vd,"onSelect"),0<r.length&&(t=new $f("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vi)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hi={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},fc={},B0={};Yn&&(B0=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function eu(e){if(fc[e])return fc[e];if(!Hi[e])return e;var t=Hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in B0)return fc[e]=t[n];return e}var V0=eu("animationend"),H0=eu("animationiteration"),W0=eu("animationstart"),G0=eu("transitionend"),q0=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(e,t){q0.set(e,t),ki(t,[e])}for(var pc=0;pc<Ah.length;pc++){var hc=Ah[pc],hx=hc.toLowerCase(),mx=hc[0].toUpperCase()+hc.slice(1);Ur(hx,"on"+mx)}Ur(V0,"onAnimationEnd");Ur(H0,"onAnimationIteration");Ur(W0,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(G0,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function $h(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hS(r,t,void 0,e),e.currentTarget=null}function K0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;$h(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;$h(i,a,u),o=l}}}if(dl)throw e=pd,dl=!1,pd=null,e}function Ce(e,t){var n=t[_d];n===void 0&&(n=t[_d]=new Set);var r=e+"__bubble";n.has(r)||(Y0(t,e,2,!1),n.add(r))}function mc(e,t,n){var r=0;t&&(r|=4),Y0(n,e,r,t)}var _a="_reactListening"+Math.random().toString(36).slice(2);function Is(e){if(!e[_a]){e[_a]=!0,n0.forEach(function(n){n!=="selectionchange"&&(gx.has(n)||mc(n,!1,e),mc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_a]||(t[_a]=!0,mc("selectionchange",!1,t))}}function Y0(e,t,n,r){switch(L0(t)){case 1:var i=PS;break;case 4:i=RS;break;default:i=Nf}n=i.bind(null,t,n,e),i=void 0,!fd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gc(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}y0(function(){var u=o,c=If(n),d=[];e:{var f=q0.get(e);if(f!==void 0){var v=$f,y=e;switch(e){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":v=GS;break;case"focusin":y="focus",v=uc;break;case"focusout":y="blur",v=uc;break;case"beforeblur":case"afterblur":v=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=AS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=YS;break;case V0:case H0:case W0:v=DS;break;case G0:v=QS;break;case"scroll":v=LS;break;case"wheel":v=ZS;break;case"copy":case"cut":case"paste":v=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=kh}var b=(t&4)!==0,w=!b&&e==="scroll",p=b?f!==null?f+"Capture":null:f;b=[];for(var m=u,g;m!==null;){g=m;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,p!==null&&(S=_s(m,p),S!=null&&b.push(Ps(m,S,g)))),w)break;m=m.return}0<b.length&&(f=new v(f,y,null,n,c),d.push({event:f,listeners:b}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==cd&&(y=n.relatedTarget||n.fromElement)&&(Jr(y)||y[Xn]))break e;if((v||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Jr(y):null,y!==null&&(w=Ti(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(b=_h,S="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=kh,S="onPointerLeave",p="onPointerEnter",m="pointer"),w=v==null?f:Wi(v),g=y==null?f:Wi(y),f=new b(S,m+"leave",v,n,c),f.target=w,f.relatedTarget=g,S=null,Jr(c)===u&&(b=new b(p,m+"enter",y,n,c),b.target=g,b.relatedTarget=w,S=b),w=S,v&&y)t:{for(b=v,p=y,m=0,g=b;g;g=Ni(g))m++;for(g=0,S=p;S;S=Ni(S))g++;for(;0<m-g;)b=Ni(b),m--;for(;0<g-m;)p=Ni(p),g--;for(;m--;){if(b===p||p!==null&&b===p.alternate)break t;b=Ni(b),p=Ni(p)}b=null}else b=null;v!==null&&Mh(d,f,v,b,!1),y!==null&&w!==null&&Mh(d,w,y,b,!0)}}e:{if(f=u?Wi(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var k=sx;else if(Oh(f))if(j0)k=cx;else{k=lx;var _=ax}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=ux);if(k&&(k=k(e,u))){D0(d,k,n,c);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&od(f,"number",f.value)}switch(_=u?Wi(u):window,e){case"focusin":(Oh(_)||_.contentEditable==="true")&&(Vi=_,vd=u,ds=null);break;case"focusout":ds=vd=Vi=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,Nh(d,n,c);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Nh(d,n,c)}var E;if(Df)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bi?$0(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(A0&&n.locale!=="ko"&&(Bi||x!=="onCompositionStart"?x==="onCompositionEnd"&&Bi&&(E=N0()):(pr=c,Af="value"in pr?pr.value:pr.textContent,Bi=!0)),_=gl(u,x),0<_.length&&(x=new Eh(x,e,null,n,c),d.push({event:x,listeners:_}),E?x.data=E:(E=M0(n),E!==null&&(x.data=E)))),(E=tx?nx(e,n):rx(e,n))&&(u=gl(u,"onBeforeInput"),0<u.length&&(c=new Eh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}K0(d,t)})}function Ps(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_s(e,n),o!=null&&r.unshift(Ps(e,o,i)),o=_s(e,t),o!=null&&r.push(Ps(e,o,i))),e=e.return}return r}function Ni(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=_s(n,o),l!=null&&s.unshift(Ps(n,l,a))):i||(l=_s(n,o),l!=null&&s.push(Ps(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var vx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function Dh(e){return(typeof e=="string"?e:""+e).replace(vx,`
`).replace(yx,"")}function Ea(e,t,n){if(t=Dh(t),Dh(e)!==t&&n)throw Error(V(425))}function vl(){}var wd=null,bd=null;function Sd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xd=typeof setTimeout=="function"?setTimeout:void 0,wx=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(e){return jh.resolve(null).then(e).catch(Sx)}:xd;function Sx(e){setTimeout(function(){throw e})}function vc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ts(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ts(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ko=Math.random().toString(36).slice(2),On="__reactFiber$"+ko,Rs="__reactProps$"+ko,Xn="__reactContainer$"+ko,_d="__reactEvents$"+ko,xx="__reactListeners$"+ko,_x="__reactHandles$"+ko;function Jr(e){var t=e[On];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[On]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zh(e);e!==null;){if(n=e[On])return n;e=zh(e)}return t}e=n,n=e.parentNode}return null}function ea(e){return e=e[On]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function tu(e){return e[Rs]||null}var Ed=[],Gi=-1;function Br(e){return{current:e}}function Oe(e){0>Gi||(e.current=Ed[Gi],Ed[Gi]=null,Gi--)}function ke(e,t){Gi++,Ed[Gi]=e.current,e.current=t}var Ar={},xt=Br(Ar),Nt=Br(!1),ci=Ar;function fo(e,t){var n=e.type.contextTypes;if(!n)return Ar;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function At(e){return e=e.childContextTypes,e!=null}function yl(){Oe(Nt),Oe(xt)}function Fh(e,t,n){if(xt.current!==Ar)throw Error(V(168));ke(xt,t),ke(Nt,n)}function X0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,aS(e)||"Unknown",i));return je({},n,r)}function wl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ar,ci=xt.current,ke(xt,e),ke(Nt,Nt.current),!0}function Uh(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=X0(e,t,ci),r.__reactInternalMemoizedMergedChildContext=e,Oe(Nt),Oe(xt),ke(xt,e)):Oe(Nt),ke(Nt,n)}var Un=null,nu=!1,yc=!1;function Q0(e){Un===null?Un=[e]:Un.push(e)}function Ex(e){nu=!0,Q0(e)}function Vr(){if(!yc&&Un!==null){yc=!0;var e=0,t=we;try{var n=Un;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Un=null,nu=!1}catch(i){throw Un!==null&&(Un=Un.slice(e+1)),x0(Pf,Vr),i}finally{we=t,yc=!1}}return null}var qi=[],Ki=0,bl=null,Sl=0,Qt=[],Jt=0,di=null,Bn=1,Vn="";function Yr(e,t){qi[Ki++]=Sl,qi[Ki++]=bl,bl=e,Sl=t}function J0(e,t,n){Qt[Jt++]=Bn,Qt[Jt++]=Vn,Qt[Jt++]=di,di=e;var r=Bn;e=Vn;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var o=32-gn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Bn=1<<32-gn(t)+i|n<<i|r,Vn=o+e}else Bn=1<<o|n<<i|r,Vn=e}function zf(e){e.return!==null&&(Yr(e,1),J0(e,1,0))}function Ff(e){for(;e===bl;)bl=qi[--Ki],qi[Ki]=null,Sl=qi[--Ki],qi[Ki]=null;for(;e===di;)di=Qt[--Jt],Qt[Jt]=null,Vn=Qt[--Jt],Qt[Jt]=null,Bn=Qt[--Jt],Qt[Jt]=null}var Ht=null,Bt=null,Ie=!1,hn=null;function Z0(e,t){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Bt=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=di!==null?{id:Bn,overflow:Vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ht=e,Bt=null,!0):!1;default:return!1}}function kd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Td(e){if(Ie){var t=Bt;if(t){var n=t;if(!Bh(e,t)){if(kd(e))throw Error(V(418));t=xr(n.nextSibling);var r=Ht;t&&Bh(e,t)?Z0(r,n):(e.flags=e.flags&-4097|2,Ie=!1,Ht=e)}}else{if(kd(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ie=!1,Ht=e}}}function Vh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function ka(e){if(e!==Ht)return!1;if(!Ie)return Vh(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sd(e.type,e.memoizedProps)),t&&(t=Bt)){if(kd(e))throw ey(),Error(V(418));for(;t;)Z0(e,t),t=xr(t.nextSibling)}if(Vh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Ht?xr(e.stateNode.nextSibling):null;return!0}function ey(){for(var e=Bt;e;)e=xr(e.nextSibling)}function po(){Bt=Ht=null,Ie=!1}function Uf(e){hn===null?hn=[e]:hn.push(e)}var kx=tr.ReactCurrentBatchConfig;function fn(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var xl=Br(null),_l=null,Yi=null,Bf=null;function Vf(){Bf=Yi=_l=null}function Hf(e){var t=xl.current;Oe(xl),e._currentValue=t}function Cd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oo(e,t){_l=e,Bf=Yi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Lt=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(Bf!==e)if(e={context:e,memoizedValue:t,next:null},Yi===null){if(_l===null)throw Error(V(308));Yi=e,_l.dependencies={lanes:0,firstContext:e}}else Yi=Yi.next=e;return t}var Zr=null;function Wf(e){Zr===null?Zr=[e]:Zr.push(e)}function ty(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function Gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ny(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ve&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qn(e,n)}return i=r.interleaved,i===null?(t.next=t,Wf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qn(e,n)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rf(e,n)}}function Hh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function El(e,t,n,r){var i=e.updateQueue;cr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,v=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,b=a;switch(f=t,v=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){d=y.call(v,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,f=typeof y=="function"?y.call(v,d,f):y,f==null)break e;d=je({},d,f);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pi|=s,e.lanes=s,e.memoizedState=d}}function Wh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var ry=new t0.Component().refs;function Od(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ru={isMounted:function(e){return(e=e._reactInternals)?Ti(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kt(),i=kr(e),o=Gn(r,i);o.payload=t,n!=null&&(o.callback=n),t=_r(e,o,i),t!==null&&(vn(t,e,i,r),Ya(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kt(),i=kr(e),o=Gn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_r(e,o,i),t!==null&&(vn(t,e,i,r),Ya(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),r=kr(e),i=Gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=_r(e,i,r),t!==null&&(vn(t,e,r,n),Ya(t,e,r))}};function Gh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Os(n,r)||!Os(i,o):!0}function iy(e,t,n){var r=!1,i=Ar,o=t.contextType;return typeof o=="object"&&o!==null?o=nn(o):(i=At(t)?ci:xt.current,r=t.contextTypes,o=(r=r!=null)?fo(e,i):Ar),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ru,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ru.enqueueReplaceState(t,t.state,null)}function Id(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ry,Gf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nn(o):(o=At(t)?ci:xt.current,i.context=fo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Od(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ru.enqueueReplaceState(i,i.state,null),El(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===ry&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Ta(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kh(e){var t=e._init;return t(e._payload)}function oy(e){function t(p,m){if(e){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Tr(p,m),p.index=0,p.sibling=null,p}function o(p,m,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,g,S){return m===null||m.tag!==6?(m=kc(g,p.mode,S),m.return=p,m):(m=i(m,g),m.return=p,m)}function l(p,m,g,S){var k=g.type;return k===Ui?c(p,m,g.props.children,S,g.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ur&&Kh(k)===m.type)?(S=i(m,g.props),S.ref=zo(p,m,g),S.return=p,S):(S=tl(g.type,g.key,g.props,null,p.mode,S),S.ref=zo(p,m,g),S.return=p,S)}function u(p,m,g,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Tc(g,p.mode,S),m.return=p,m):(m=i(m,g.children||[]),m.return=p,m)}function c(p,m,g,S,k){return m===null||m.tag!==7?(m=ii(g,p.mode,S,k),m.return=p,m):(m=i(m,g),m.return=p,m)}function d(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=kc(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ma:return g=tl(m.type,m.key,m.props,null,p.mode,g),g.ref=zo(p,null,m),g.return=p,g;case Fi:return m=Tc(m,p.mode,g),m.return=p,m;case ur:var S=m._init;return d(p,S(m._payload),g)}if(ns(m)||Ao(m))return m=ii(m,p.mode,g,null),m.return=p,m;Ta(p,m)}return null}function f(p,m,g,S){var k=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ma:return g.key===k?l(p,m,g,S):null;case Fi:return g.key===k?u(p,m,g,S):null;case ur:return k=g._init,f(p,m,k(g._payload),S)}if(ns(g)||Ao(g))return k!==null?null:c(p,m,g,S,null);Ta(p,g)}return null}function v(p,m,g,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(g)||null,a(m,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ma:return p=p.get(S.key===null?g:S.key)||null,l(m,p,S,k);case Fi:return p=p.get(S.key===null?g:S.key)||null,u(m,p,S,k);case ur:var _=S._init;return v(p,m,g,_(S._payload),k)}if(ns(S)||Ao(S))return p=p.get(g)||null,c(m,p,S,k,null);Ta(m,S)}return null}function y(p,m,g,S){for(var k=null,_=null,E=m,x=m=0,$=null;E!==null&&x<g.length;x++){E.index>x?($=E,E=null):$=E.sibling;var I=f(p,E,g[x],S);if(I===null){E===null&&(E=$);break}e&&E&&I.alternate===null&&t(p,E),m=o(I,m,x),_===null?k=I:_.sibling=I,_=I,E=$}if(x===g.length)return n(p,E),Ie&&Yr(p,x),k;if(E===null){for(;x<g.length;x++)E=d(p,g[x],S),E!==null&&(m=o(E,m,x),_===null?k=E:_.sibling=E,_=E);return Ie&&Yr(p,x),k}for(E=r(p,E);x<g.length;x++)$=v(E,p,x,g[x],S),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?x:$.key),m=o($,m,x),_===null?k=$:_.sibling=$,_=$);return e&&E.forEach(function(L){return t(p,L)}),Ie&&Yr(p,x),k}function b(p,m,g,S){var k=Ao(g);if(typeof k!="function")throw Error(V(150));if(g=k.call(g),g==null)throw Error(V(151));for(var _=k=null,E=m,x=m=0,$=null,I=g.next();E!==null&&!I.done;x++,I=g.next()){E.index>x?($=E,E=null):$=E.sibling;var L=f(p,E,I.value,S);if(L===null){E===null&&(E=$);break}e&&E&&L.alternate===null&&t(p,E),m=o(L,m,x),_===null?k=L:_.sibling=L,_=L,E=$}if(I.done)return n(p,E),Ie&&Yr(p,x),k;if(E===null){for(;!I.done;x++,I=g.next())I=d(p,I.value,S),I!==null&&(m=o(I,m,x),_===null?k=I:_.sibling=I,_=I);return Ie&&Yr(p,x),k}for(E=r(p,E);!I.done;x++,I=g.next())I=v(E,p,x,I.value,S),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?x:I.key),m=o(I,m,x),_===null?k=I:_.sibling=I,_=I);return e&&E.forEach(function(j){return t(p,j)}),Ie&&Yr(p,x),k}function w(p,m,g,S){if(typeof g=="object"&&g!==null&&g.type===Ui&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ma:e:{for(var k=g.key,_=m;_!==null;){if(_.key===k){if(k=g.type,k===Ui){if(_.tag===7){n(p,_.sibling),m=i(_,g.props.children),m.return=p,p=m;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ur&&Kh(k)===_.type){n(p,_.sibling),m=i(_,g.props),m.ref=zo(p,_,g),m.return=p,p=m;break e}n(p,_);break}else t(p,_);_=_.sibling}g.type===Ui?(m=ii(g.props.children,p.mode,S,g.key),m.return=p,p=m):(S=tl(g.type,g.key,g.props,null,p.mode,S),S.ref=zo(p,m,g),S.return=p,p=S)}return s(p);case Fi:e:{for(_=g.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(p,m.sibling),m=i(m,g.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Tc(g,p.mode,S),m.return=p,p=m}return s(p);case ur:return _=g._init,w(p,m,_(g._payload),S)}if(ns(g))return y(p,m,g,S);if(Ao(g))return b(p,m,g,S);Ta(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,g),m.return=p,p=m):(n(p,m),m=kc(g,p.mode,S),m.return=p,p=m),s(p)):n(p,m)}return w}var ho=oy(!0),sy=oy(!1),ta={},Mn=Br(ta),Ls=Br(ta),Ns=Br(ta);function ei(e){if(e===ta)throw Error(V(174));return e}function qf(e,t){switch(ke(Ns,t),ke(Ls,e),ke(Mn,ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ad(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ad(t,e)}Oe(Mn),ke(Mn,t)}function mo(){Oe(Mn),Oe(Ls),Oe(Ns)}function ay(e){ei(Ns.current);var t=ei(Mn.current),n=ad(t,e.type);t!==n&&(ke(Ls,e),ke(Mn,n))}function Kf(e){Ls.current===e&&(Oe(Mn),Oe(Ls))}var Me=Br(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wc=[];function Yf(){for(var e=0;e<wc.length;e++)wc[e]._workInProgressVersionPrimary=null;wc.length=0}var Xa=tr.ReactCurrentDispatcher,bc=tr.ReactCurrentBatchConfig,fi=0,De=null,Xe=null,nt=null,Tl=!1,fs=!1,As=0,Tx=0;function vt(){throw Error(V(321))}function Xf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wn(e[n],t[n]))return!1;return!0}function Qf(e,t,n,r,i,o){if(fi=o,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?Px:Rx,e=n(r,i),fs){o=0;do{if(fs=!1,As=0,25<=o)throw Error(V(301));o+=1,nt=Xe=null,t.updateQueue=null,Xa.current=Lx,e=n(r,i)}while(fs)}if(Xa.current=Cl,t=Xe!==null&&Xe.next!==null,fi=0,nt=Xe=De=null,Tl=!1,t)throw Error(V(300));return e}function Jf(){var e=As!==0;return As=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?De.memoizedState=nt=e:nt=nt.next=e,nt}function rn(){if(Xe===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=nt===null?De.memoizedState:nt.next;if(t!==null)nt=t,Xe=e;else{if(e===null)throw Error(V(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},nt===null?De.memoizedState=nt=e:nt=nt.next=e}return nt}function $s(e,t){return typeof t=="function"?t(e):t}function Sc(e){var t=rn(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((fi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,De.lanes|=c,pi|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,wn(r,t.memoizedState)||(Lt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,De.lanes|=o,pi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xc(e){var t=rn(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);wn(o,t.memoizedState)||(Lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ly(){}function uy(e,t){var n=De,r=rn(),i=t(),o=!wn(r.memoizedState,i);if(o&&(r.memoizedState=i,Lt=!0),r=r.queue,Zf(fy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Ms(9,dy.bind(null,n,r,i,t),void 0,null),rt===null)throw Error(V(349));(fi&30)!==0||cy(n,t,i)}return i}function cy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dy(e,t,n,r){t.value=n,t.getSnapshot=r,py(t)&&hy(e)}function fy(e,t,n){return n(function(){py(t)&&hy(e)})}function py(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wn(e,n)}catch{return!0}}function hy(e){var t=Qn(e,1);t!==null&&vn(t,e,1,-1)}function Yh(e){var t=Cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:e},t.queue=e,e=e.dispatch=Ix.bind(null,De,e),[t.memoizedState,e]}function Ms(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function my(){return rn().memoizedState}function Qa(e,t,n,r){var i=Cn();De.flags|=e,i.memoizedState=Ms(1|t,n,void 0,r===void 0?null:r)}function iu(e,t,n,r){var i=rn();r=r===void 0?null:r;var o=void 0;if(Xe!==null){var s=Xe.memoizedState;if(o=s.destroy,r!==null&&Xf(r,s.deps)){i.memoizedState=Ms(t,n,o,r);return}}De.flags|=e,i.memoizedState=Ms(1|t,n,o,r)}function Xh(e,t){return Qa(8390656,8,e,t)}function Zf(e,t){return iu(2048,8,e,t)}function gy(e,t){return iu(4,2,e,t)}function vy(e,t){return iu(4,4,e,t)}function yy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wy(e,t,n){return n=n!=null?n.concat([e]):null,iu(4,4,yy.bind(null,t,e),n)}function ep(){}function by(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sy(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xy(e,t,n){return(fi&21)===0?(e.baseState&&(e.baseState=!1,Lt=!0),e.memoizedState=n):(wn(n,t)||(n=k0(),De.lanes|=n,pi|=n,e.baseState=!0),t)}function Cx(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=bc.transition;bc.transition={};try{e(!1),t()}finally{we=n,bc.transition=r}}function _y(){return rn().memoizedState}function Ox(e,t,n){var r=kr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ey(e))ky(t,n);else if(n=ty(e,t,n,r),n!==null){var i=kt();vn(n,e,r,i),Ty(n,t,r)}}function Ix(e,t,n){var r=kr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ey(e))ky(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,s)){var l=t.interleaved;l===null?(i.next=i,Wf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ty(e,t,i,r),n!==null&&(i=kt(),vn(n,e,r,i),Ty(n,t,r))}}function Ey(e){var t=e.alternate;return e===De||t!==null&&t===De}function ky(e,t){fs=Tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ty(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rf(e,n)}}var Cl={readContext:nn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Px={readContext:nn,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:Xh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4194308,4,yy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qa(4,2,e,t)},useMemo:function(e,t){var n=Cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ox.bind(null,De,e),[r.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:Yh,useDebugValue:ep,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=Yh(!1),t=e[0];return e=Cx.bind(null,e[1]),Cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=De,i=Cn();if(Ie){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),rt===null)throw Error(V(349));(fi&30)!==0||cy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xh(fy.bind(null,r,o,e),[e]),r.flags|=2048,Ms(9,dy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Cn(),t=rt.identifierPrefix;if(Ie){var n=Vn,r=Bn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=As++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rx={readContext:nn,useCallback:by,useContext:nn,useEffect:Zf,useImperativeHandle:wy,useInsertionEffect:gy,useLayoutEffect:vy,useMemo:Sy,useReducer:Sc,useRef:my,useState:function(){return Sc($s)},useDebugValue:ep,useDeferredValue:function(e){var t=rn();return xy(t,Xe.memoizedState,e)},useTransition:function(){var e=Sc($s)[0],t=rn().memoizedState;return[e,t]},useMutableSource:ly,useSyncExternalStore:uy,useId:_y,unstable_isNewReconciler:!1},Lx={readContext:nn,useCallback:by,useContext:nn,useEffect:Zf,useImperativeHandle:wy,useInsertionEffect:gy,useLayoutEffect:vy,useMemo:Sy,useReducer:xc,useRef:my,useState:function(){return xc($s)},useDebugValue:ep,useDeferredValue:function(e){var t=rn();return Xe===null?t.memoizedState=e:xy(t,Xe.memoizedState,e)},useTransition:function(){var e=xc($s)[0],t=rn().memoizedState;return[e,t]},useMutableSource:ly,useSyncExternalStore:uy,useId:_y,unstable_isNewReconciler:!1};function go(e,t){try{var n="",r=t;do n+=sS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _c(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Pd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nx=typeof WeakMap=="function"?WeakMap:Map;function Cy(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Il||(Il=!0,Fd=r),Pd(e,t)},n}function Oy(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pd(e,t),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Qh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=qx.bind(null,e,t,n),t.then(e,e))}function Jh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zh(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,_r(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ax=tr.ReactCurrentOwner,Lt=!1;function Et(e,t,n,r){t.child=e===null?sy(t,null,n,r):ho(t,e.child,n,r)}function em(e,t,n,r,i){n=n.render;var o=t.ref;return oo(t,i),r=Qf(e,t,n,r,o,i),n=Jf(),e!==null&&!Lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jn(e,t,i)):(Ie&&n&&zf(t),t.flags|=1,Et(e,t,r,i),t.child)}function tm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!lp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Iy(e,t,o,r,i)):(e=tl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Os,n(s,r)&&e.ref===t.ref)return Jn(e,t,i)}return t.flags|=1,e=Tr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Iy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Os(o,r)&&e.ref===t.ref)if(Lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Lt=!0);else return t.lanes=e.lanes,Jn(e,t,i)}return Rd(e,t,n,r,i)}function Py(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Qi,zt),zt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Qi,zt),zt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ke(Qi,zt),zt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ke(Qi,zt),zt|=r;return Et(e,t,i,n),t.child}function Ry(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rd(e,t,n,r,i){var o=At(n)?ci:xt.current;return o=fo(t,o),oo(t,i),n=Qf(e,t,n,r,o,i),r=Jf(),e!==null&&!Lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jn(e,t,i)):(Ie&&r&&zf(t),t.flags|=1,Et(e,t,n,i),t.child)}function nm(e,t,n,r,i){if(At(n)){var o=!0;wl(t)}else o=!1;if(oo(t,i),t.stateNode===null)Ja(e,t),iy(t,n,r),Id(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=At(n)?ci:xt.current,u=fo(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qh(t,s,r,u),cr=!1;var f=t.memoizedState;s.state=f,El(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Nt.current||cr?(typeof c=="function"&&(Od(t,n,c,r),l=t.memoizedState),(a=cr||Gh(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ny(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:fn(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=nn(l):(l=At(n)?ci:xt.current,l=fo(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&qh(t,s,r,l),cr=!1,f=t.memoizedState,s.state=f,El(t,r,s,i);var y=t.memoizedState;a!==d||f!==y||Nt.current||cr?(typeof v=="function"&&(Od(t,n,v,r),y=t.memoizedState),(u=cr||Gh(t,n,u,r,f,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ld(e,t,n,r,o,i)}function Ld(e,t,n,r,i,o){Ry(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Uh(t,n,!1),Jn(e,t,o);r=t.stateNode,Ax.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ho(t,e.child,null,o),t.child=ho(t,null,a,o)):Et(e,t,a,o),t.memoizedState=r.state,i&&Uh(t,n,!0),t.child}function Ly(e){var t=e.stateNode;t.pendingContext?Fh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fh(e,t.context,!1),qf(e,t.containerInfo)}function rm(e,t,n,r,i){return po(),Uf(i),t.flags|=256,Et(e,t,n,r),t.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Ad(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ny(e,t,n){var r=t.pendingProps,i=Me.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Me,i&1),e===null)return Td(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=au(s,r,0,null),e=ii(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ad(n),t.memoizedState=Nd,e):tp(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $x(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tr(a,o):(o=ii(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ad(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Nd,r}return o=e.child,e=o.sibling,r=Tr(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tp(e,t){return t=au({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,n,r){return r!==null&&Uf(r),ho(t,e.child,null,n),e=tp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $x(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=_c(Error(V(422))),Ca(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=au({mode:"visible",children:r.children},i,0,null),o=ii(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&ho(t,e.child,null,s),t.child.memoizedState=Ad(s),t.memoizedState=Nd,o);if((t.mode&1)===0)return Ca(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(V(419)),r=_c(o,r,void 0),Ca(e,t,s,r)}if(a=(s&e.childLanes)!==0,Lt||a){if(r=rt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qn(e,i),vn(r,e,i,-1))}return ap(),r=_c(Error(V(421))),Ca(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Bt=xr(i.nextSibling),Ht=t,Ie=!0,hn=null,e!==null&&(Qt[Jt++]=Bn,Qt[Jt++]=Vn,Qt[Jt++]=di,Bn=e.id,Vn=e.overflow,di=t),t=tp(t,r.children),t.flags|=4096,t)}function im(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cd(e.return,t,n)}function Ec(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ay(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Et(e,t,r.children,n),r=Me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&im(e,n,t);else if(e.tag===19)im(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Me,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&kl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,o);break;case"together":Ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ja(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pi|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mx(e,t,n){switch(t.tag){case 3:Ly(t),po();break;case 5:ay(t);break;case 1:At(t.type)&&wl(t);break;case 4:qf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ke(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Me,Me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ny(e,t,n):(ke(Me,Me.current&1),e=Jn(e,t,n),e!==null?e.sibling:null);ke(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ay(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,Py(e,t,n)}return Jn(e,t,n)}var $y,$d,My,Dy;$y=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};My=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ei(Mn.current);var o=null;switch(n){case"input":i=rd(e,i),r=rd(e,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=sd(e,i),r=sd(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vl)}ld(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ss.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Dy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fo(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function yt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dx(e,t,n){var r=t.pendingProps;switch(Ff(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(t),null;case 1:return At(t.type)&&yl(),yt(t),null;case 3:return r=t.stateNode,mo(),Oe(Nt),Oe(xt),Yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hn!==null&&(Vd(hn),hn=null))),$d(e,t),yt(t),null;case 5:Kf(t);var i=ei(Ns.current);if(n=t.type,e!==null&&t.stateNode!=null)My(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return yt(t),null}if(e=ei(Mn.current),ka(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[On]=t,r[Rs]=o,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<is.length;i++)Ce(is[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":ph(r,o),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ce("invalid",r);break;case"textarea":mh(r,o),Ce("invalid",r)}ld(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,a,e),i=["children",""+a]):Ss.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ce("scroll",r)}switch(n){case"input":ga(r),hh(r,o,!0);break;case"textarea":ga(r),gh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=c0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[On]=t,e[Rs]=r,$y(e,t,!1,!1),t.stateNode=e;e:{switch(s=ud(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),i=r;break;case"iframe":case"object":case"embed":Ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<is.length;i++)Ce(is[i],e);i=r;break;case"source":Ce("error",e),i=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=r;break;case"details":Ce("toggle",e),i=r;break;case"input":ph(e,r),i=rd(e,r),Ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":mh(e,r),i=sd(e,r),Ce("invalid",e);break;default:i=r}ld(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?p0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&d0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xs(e,l):typeof l=="number"&&xs(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ss.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ce("scroll",e):l!=null&&kf(e,o,l,s))}switch(n){case"input":ga(e),hh(e,r,!1);break;case"textarea":ga(e),gh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?to(e,!!r.multiple,o,!1):r.defaultValue!=null&&to(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return yt(t),null;case 6:if(e&&t.stateNode!=null)Dy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=ei(Ns.current),ei(Mn.current),ka(t)){if(r=t.stateNode,n=t.memoizedProps,r[On]=t,(o=r.nodeValue!==n)&&(e=Ht,e!==null))switch(e.tag){case 3:Ea(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=t,t.stateNode=r}return yt(t),null;case 13:if(Oe(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&Bt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ey(),po(),t.flags|=98560,o=!1;else if(o=ka(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[On]=t}else po(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;yt(t),o=!1}else hn!==null&&(Vd(hn),hn=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Me.current&1)!==0?Je===0&&(Je=3):ap())),t.updateQueue!==null&&(t.flags|=4),yt(t),null);case 4:return mo(),$d(e,t),e===null&&Is(t.stateNode.containerInfo),yt(t),null;case 10:return Hf(t.type._context),yt(t),null;case 17:return At(t.type)&&yl(),yt(t),null;case 19:if(Oe(Me),o=t.memoizedState,o===null)return yt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Fo(o,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=kl(e),s!==null){for(t.flags|=128,Fo(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Me,Me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Be()>vo&&(t.flags|=128,r=!0,Fo(o,!1),t.lanes=4194304)}else{if(!r)if(e=kl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ie)return yt(t),null}else 2*Be()-o.renderingStartTime>vo&&n!==1073741824&&(t.flags|=128,r=!0,Fo(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Be(),t.sibling=null,n=Me.current,ke(Me,r?n&1|2:n&1),t):(yt(t),null);case 22:case 23:return sp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(zt&1073741824)!==0&&(yt(t),t.subtreeFlags&6&&(t.flags|=8192)):yt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function jx(e,t){switch(Ff(t),t.tag){case 1:return At(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mo(),Oe(Nt),Oe(xt),Yf(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Kf(t),null;case 13:if(Oe(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));po()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Me),null;case 4:return mo(),null;case 10:return Hf(t.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var Oa=!1,bt=!1,zx=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Xi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Md(e,t,n){try{n()}catch(r){ze(e,t,r)}}var om=!1;function Fx(e,t){if(wd=hl,e=U0(),jf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bd={focusedElem:e,selectionRange:n},hl=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,w=y.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:fn(t.type,b),w);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){ze(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return y=om,om=!1,y}function ps(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Md(t,n,o)}i=i.next}while(i!==r)}}function ou(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jy(e){var t=e.alternate;t!==null&&(e.alternate=null,jy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[On],delete t[Rs],delete t[_d],delete t[xx],delete t[_x])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zy(e){return e.tag===5||e.tag===3||e.tag===4}function sm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vl));else if(r!==4&&(e=e.child,e!==null))for(jd(e,t,n),e=e.sibling;e!==null;)jd(e,t,n),e=e.sibling}function zd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zd(e,t,n),e=e.sibling;e!==null;)zd(e,t,n),e=e.sibling}var ut=null,pn=!1;function sr(e,t,n){for(n=n.child;n!==null;)Fy(e,t,n),n=n.sibling}function Fy(e,t,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:bt||Xi(n,t);case 6:var r=ut,i=pn;ut=null,sr(e,t,n),ut=r,pn=i,ut!==null&&(pn?(e=ut,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(pn?(e=ut,n=n.stateNode,e.nodeType===8?vc(e.parentNode,n):e.nodeType===1&&vc(e,n),Ts(e)):vc(ut,n.stateNode));break;case 4:r=ut,i=pn,ut=n.stateNode.containerInfo,pn=!0,sr(e,t,n),ut=r,pn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Md(n,t,s),i=i.next}while(i!==r)}sr(e,t,n);break;case 1:if(!bt&&(Xi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,t,a)}sr(e,t,n);break;case 21:sr(e,t,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,sr(e,t,n),bt=r):sr(e,t,n);break;default:sr(e,t,n)}}function am(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zx),t.forEach(function(r){var i=Yx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,pn=!1;break e;case 3:ut=a.stateNode.containerInfo,pn=!0;break e;case 4:ut=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(ut===null)throw Error(V(160));Fy(o,s,i),ut=null,pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ze(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uy(t,e),t=t.sibling}function Uy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(t,e),kn(e),r&4){try{ps(3,e,e.return),ou(3,e)}catch(b){ze(e,e.return,b)}try{ps(5,e,e.return)}catch(b){ze(e,e.return,b)}}break;case 1:un(t,e),kn(e),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(un(t,e),kn(e),r&512&&n!==null&&Xi(n,n.return),e.flags&32){var i=e.stateNode;try{xs(i,"")}catch(b){ze(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&l0(i,o),ud(a,s);var u=ud(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?p0(i,d):c==="dangerouslySetInnerHTML"?d0(i,d):c==="children"?xs(i,d):kf(i,c,d,u)}switch(a){case"input":id(i,o);break;case"textarea":u0(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?to(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?to(i,!!o.multiple,o.defaultValue,!0):to(i,!!o.multiple,o.multiple?[]:"",!1))}i[Rs]=o}catch(b){ze(e,e.return,b)}}break;case 6:if(un(t,e),kn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){ze(e,e.return,b)}}break;case 3:if(un(t,e),kn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ts(t.containerInfo)}catch(b){ze(e,e.return,b)}break;case 4:un(t,e),kn(e);break;case 13:un(t,e),kn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ip=Be())),r&4&&am(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(bt=(u=bt)||c,un(t,e),bt=u):un(t,e),kn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(ee=e,c=e.child;c!==null;){for(d=ee=c;ee!==null;){switch(f=ee,v=f.child,f.tag){case 0:case 11:case 14:case 15:ps(4,f,f.return);break;case 1:Xi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){ze(r,n,b)}}break;case 5:Xi(f,f.return);break;case 22:if(f.memoizedState!==null){um(d);continue}}v!==null?(v.return=f,ee=v):um(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=f0("display",s))}catch(b){ze(e,e.return,b)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){ze(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:un(t,e),kn(e),r&4&&am(e);break;case 21:break;default:un(t,e),kn(e)}}function kn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zy(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xs(i,""),r.flags&=-33);var o=sm(e);zd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=sm(e);jd(e,a,s);break;default:throw Error(V(161))}}catch(l){ze(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ux(e,t,n){ee=e,By(e)}function By(e,t,n){for(var r=(e.mode&1)!==0;ee!==null;){var i=ee,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Oa;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||bt;a=Oa;var u=bt;if(Oa=s,(bt=l)&&!u)for(ee=i;ee!==null;)s=ee,l=s.child,s.tag===22&&s.memoizedState!==null?cm(i):l!==null?(l.return=s,ee=l):cm(i);for(;o!==null;)ee=o,By(o),o=o.sibling;ee=i,Oa=a,bt=u}lm(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,ee=o):lm(e)}}function lm(e){for(;ee!==null;){var t=ee;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:bt||ou(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:fn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ts(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}bt||t.flags&512&&Dd(t)}catch(f){ze(t,t.return,f)}}if(t===e){ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,ee=n;break}ee=t.return}}function um(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ee=n;break}ee=t.return}}function cm(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ou(4,t)}catch(l){ze(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ze(t,i,l)}}var o=t.return;try{Dd(t)}catch(l){ze(t,o,l)}break;case 5:var s=t.return;try{Dd(t)}catch(l){ze(t,s,l)}}}catch(l){ze(t,t.return,l)}if(t===e){ee=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ee=a;break}ee=t.return}}var Bx=Math.ceil,Ol=tr.ReactCurrentDispatcher,np=tr.ReactCurrentOwner,tn=tr.ReactCurrentBatchConfig,ve=0,rt=null,We=null,dt=0,zt=0,Qi=Br(0),Je=0,Ds=null,pi=0,su=0,rp=0,hs=null,Rt=null,ip=0,vo=1/0,Fn=null,Il=!1,Fd=null,Er=null,Ia=!1,hr=null,Pl=0,ms=0,Ud=null,Za=-1,el=0;function kt(){return(ve&6)!==0?Be():Za!==-1?Za:Za=Be()}function kr(e){return(e.mode&1)===0?1:(ve&2)!==0&&dt!==0?dt&-dt:kx.transition!==null?(el===0&&(el=k0()),el):(e=we,e!==0||(e=window.event,e=e===void 0?16:L0(e.type)),e)}function vn(e,t,n,r){if(50<ms)throw ms=0,Ud=null,Error(V(185));Js(e,n,r),((ve&2)===0||e!==rt)&&(e===rt&&((ve&2)===0&&(su|=n),Je===4&&fr(e,dt)),$t(e,r),n===1&&ve===0&&(t.mode&1)===0&&(vo=Be()+500,nu&&Vr()))}function $t(e,t){var n=e.callbackNode;kS(e,t);var r=pl(e,e===rt?dt:0);if(r===0)n!==null&&wh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wh(n),t===1)e.tag===0?Ex(dm.bind(null,e)):Q0(dm.bind(null,e)),bx(function(){(ve&6)===0&&Vr()}),n=null;else{switch(T0(r)){case 1:n=Pf;break;case 4:n=_0;break;case 16:n=fl;break;case 536870912:n=E0;break;default:n=fl}n=Xy(n,Vy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vy(e,t){if(Za=-1,el=0,(ve&6)!==0)throw Error(V(327));var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var r=pl(e,e===rt?dt:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Rl(e,r);else{t=r;var i=ve;ve|=2;var o=Wy();(rt!==e||dt!==t)&&(Fn=null,vo=Be()+500,ri(e,t));do try{Wx();break}catch(a){Hy(e,a)}while(1);Vf(),Ol.current=o,ve=i,We!==null?t=0:(rt=null,dt=0,t=Je)}if(t!==0){if(t===2&&(i=hd(e),i!==0&&(r=i,t=Bd(e,i))),t===1)throw n=Ds,ri(e,0),fr(e,r),$t(e,Be()),n;if(t===6)fr(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Vx(i)&&(t=Rl(e,r),t===2&&(o=hd(e),o!==0&&(r=o,t=Bd(e,o))),t===1))throw n=Ds,ri(e,0),fr(e,r),$t(e,Be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Xr(e,Rt,Fn);break;case 3:if(fr(e,r),(r&130023424)===r&&(t=ip+500-Be(),10<t)){if(pl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){kt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xd(Xr.bind(null,e,Rt,Fn),t);break}Xr(e,Rt,Fn);break;case 4:if(fr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-gn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bx(r/1960))-r,10<r){e.timeoutHandle=xd(Xr.bind(null,e,Rt,Fn),r);break}Xr(e,Rt,Fn);break;case 5:Xr(e,Rt,Fn);break;default:throw Error(V(329))}}}return $t(e,Be()),e.callbackNode===n?Vy.bind(null,e):null}function Bd(e,t){var n=hs;return e.current.memoizedState.isDehydrated&&(ri(e,t).flags|=256),e=Rl(e,t),e!==2&&(t=Rt,Rt=n,t!==null&&Vd(t)),e}function Vd(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function Vx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fr(e,t){for(t&=~rp,t&=~su,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gn(t),r=1<<n;e[n]=-1,t&=~r}}function dm(e){if((ve&6)!==0)throw Error(V(327));so();var t=pl(e,0);if((t&1)===0)return $t(e,Be()),null;var n=Rl(e,t);if(e.tag!==0&&n===2){var r=hd(e);r!==0&&(t=r,n=Bd(e,r))}if(n===1)throw n=Ds,ri(e,0),fr(e,t),$t(e,Be()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xr(e,Rt,Fn),$t(e,Be()),null}function op(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(vo=Be()+500,nu&&Vr())}}function hi(e){hr!==null&&hr.tag===0&&(ve&6)===0&&so();var t=ve;ve|=1;var n=tn.transition,r=we;try{if(tn.transition=null,we=1,e)return e()}finally{we=r,tn.transition=n,ve=t,(ve&6)===0&&Vr()}}function sp(){zt=Qi.current,Oe(Qi)}function ri(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wx(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:mo(),Oe(Nt),Oe(xt),Yf();break;case 5:Kf(r);break;case 4:mo();break;case 13:Oe(Me);break;case 19:Oe(Me);break;case 10:Hf(r.type._context);break;case 22:case 23:sp()}n=n.return}if(rt=e,We=e=Tr(e.current,null),dt=zt=t,Je=0,Ds=null,rp=su=pi=0,Rt=hs=null,Zr!==null){for(t=0;t<Zr.length;t++)if(n=Zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Zr=null}return e}function Hy(e,t){do{var n=We;try{if(Vf(),Xa.current=Cl,Tl){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tl=!1}if(fi=0,nt=Xe=De=null,fs=!1,As=0,np.current=null,n===null||n.return===null){Je=1,Ds=t,We=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Jh(s);if(v!==null){v.flags&=-257,Zh(v,s,a,o,t),v.mode&1&&Qh(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(l),t.updateQueue=b}else y.add(l);break e}else{if((t&1)===0){Qh(o,u,t),ap();break e}l=Error(V(426))}}else if(Ie&&a.mode&1){var w=Jh(s);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Zh(w,s,a,o,t),Uf(go(l,a));break e}}o=l=go(l,a),Je!==4&&(Je=2),hs===null?hs=[o]:hs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Cy(o,l,t);Hh(o,p);break e;case 1:a=l;var m=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Er===null||!Er.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Oy(o,a,t);Hh(o,S);break e}}o=o.return}while(o!==null)}qy(n)}catch(k){t=k,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function Wy(){var e=Ol.current;return Ol.current=Cl,e===null?Cl:e}function ap(){(Je===0||Je===3||Je===2)&&(Je=4),rt===null||(pi&268435455)===0&&(su&268435455)===0||fr(rt,dt)}function Rl(e,t){var n=ve;ve|=2;var r=Wy();(rt!==e||dt!==t)&&(Fn=null,ri(e,t));do try{Hx();break}catch(i){Hy(e,i)}while(1);if(Vf(),ve=n,Ol.current=r,We!==null)throw Error(V(261));return rt=null,dt=0,Je}function Hx(){for(;We!==null;)Gy(We)}function Wx(){for(;We!==null&&!gS();)Gy(We)}function Gy(e){var t=Yy(e.alternate,e,zt);e.memoizedProps=e.pendingProps,t===null?qy(e):We=t,np.current=null}function qy(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Dx(n,t,zt),n!==null){We=n;return}}else{if(n=jx(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Je===0&&(Je=5)}function Xr(e,t,n){var r=we,i=tn.transition;try{tn.transition=null,we=1,Gx(e,t,n,r)}finally{tn.transition=i,we=r}return null}function Gx(e,t,n,r){do so();while(hr!==null);if((ve&6)!==0)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(TS(e,o),e===rt&&(We=rt=null,dt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ia||(Ia=!0,Xy(fl,function(){return so(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=tn.transition,tn.transition=null;var s=we;we=1;var a=ve;ve|=4,np.current=null,Fx(e,n),Uy(n,e),fx(bd),hl=!!wd,bd=wd=null,e.current=n,Ux(n),vS(),ve=a,we=s,tn.transition=o}else e.current=n;if(Ia&&(Ia=!1,hr=e,Pl=i),o=e.pendingLanes,o===0&&(Er=null),bS(n.stateNode),$t(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Il)throw Il=!1,e=Fd,Fd=null,e;return(Pl&1)!==0&&e.tag!==0&&so(),o=e.pendingLanes,(o&1)!==0?e===Ud?ms++:(ms=0,Ud=e):ms=0,Vr(),null}function so(){if(hr!==null){var e=T0(Pl),t=tn.transition,n=we;try{if(tn.transition=null,we=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,Pl=0,(ve&6)!==0)throw Error(V(331));var i=ve;for(ve|=4,ee=e.current;ee!==null;){var o=ee,s=o.child;if((ee.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ee=u;ee!==null;){var c=ee;switch(c.tag){case 0:case 11:case 15:ps(8,c,o)}var d=c.child;if(d!==null)d.return=c,ee=d;else for(;ee!==null;){c=ee;var f=c.sibling,v=c.return;if(jy(c),c===u){ee=null;break}if(f!==null){f.return=v,ee=f;break}ee=v}}}var y=o.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}ee=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,ee=s;else e:for(;ee!==null;){if(o=ee,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:ps(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,ee=p;break e}ee=o.return}}var m=e.current;for(ee=m;ee!==null;){s=ee;var g=s.child;if((s.subtreeFlags&2064)!==0&&g!==null)g.return=s,ee=g;else e:for(s=m;ee!==null;){if(a=ee,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(k){ze(a,a.return,k)}if(a===s){ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ee=S;break e}ee=a.return}}if(ve=i,Vr(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Ql,e)}catch{}r=!0}return r}finally{we=n,tn.transition=t}}return!1}function fm(e,t,n){t=go(n,t),t=Cy(e,t,1),e=_r(e,t,1),t=kt(),e!==null&&(Js(e,1,t),$t(e,t))}function ze(e,t,n){if(e.tag===3)fm(e,e,n);else for(;t!==null;){if(t.tag===3){fm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){e=go(n,e),e=Oy(t,e,1),t=_r(t,e,1),e=kt(),t!==null&&(Js(t,1,e),$t(t,e));break}}t=t.return}}function qx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=kt(),e.pingedLanes|=e.suspendedLanes&n,rt===e&&(dt&n)===n&&(Je===4||Je===3&&(dt&130023424)===dt&&500>Be()-ip?ri(e,0):rp|=n),$t(e,t)}function Ky(e,t){t===0&&((e.mode&1)===0?t=1:(t=wa,wa<<=1,(wa&130023424)===0&&(wa=4194304)));var n=kt();e=Qn(e,t),e!==null&&(Js(e,t,n),$t(e,n))}function Kx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ky(e,n)}function Yx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Ky(e,n)}var Yy;Yy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)Lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Lt=!1,Mx(e,t,n);Lt=(e.flags&131072)!==0}else Lt=!1,Ie&&(t.flags&1048576)!==0&&J0(t,Sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ja(e,t),e=t.pendingProps;var i=fo(t,xt.current);oo(t,n),i=Qf(null,t,r,e,i,n);var o=Jf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(r)?(o=!0,wl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gf(t),i.updater=ru,t.stateNode=i,i._reactInternals=t,Id(t,r,e,n),t=Ld(null,t,r,!0,o,n)):(t.tag=0,Ie&&o&&zf(t),Et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ja(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qx(r),e=fn(r,e),i){case 0:t=Rd(null,t,r,e,n);break e;case 1:t=nm(null,t,r,e,n);break e;case 11:t=em(null,t,r,e,n);break e;case 14:t=tm(null,t,r,fn(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),Rd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),nm(e,t,r,i,n);case 3:e:{if(Ly(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ny(e,t),El(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=go(Error(V(423)),t),t=rm(e,t,r,n,i);break e}else if(r!==i){i=go(Error(V(424)),t),t=rm(e,t,r,n,i);break e}else for(Bt=xr(t.stateNode.containerInfo.firstChild),Ht=t,Ie=!0,hn=null,n=sy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===i){t=Jn(e,t,n);break e}Et(e,t,r,n)}t=t.child}return t;case 5:return ay(t),e===null&&Td(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Sd(r,i)?s=null:o!==null&&Sd(r,o)&&(t.flags|=32),Ry(e,t),Et(e,t,s,n),t.child;case 6:return e===null&&Td(t),null;case 13:return Ny(e,t,n);case 4:return qf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ho(t,null,r,n):Et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),em(e,t,r,i,n);case 7:return Et(e,t,t.pendingProps,n),t.child;case 8:return Et(e,t,t.pendingProps.children,n),t.child;case 12:return Et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ke(xl,r._currentValue),r._currentValue=s,o!==null)if(wn(o.value,s)){if(o.children===i.children&&!Nt.current){t=Jn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Gn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cd(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(V(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Cd(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,oo(t,n),i=nn(i),r=r(i),t.flags|=1,Et(e,t,r,n),t.child;case 14:return r=t.type,i=fn(r,t.pendingProps),i=fn(r.type,i),tm(e,t,r,i,n);case 15:return Iy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),Ja(e,t),t.tag=1,At(r)?(e=!0,wl(t)):e=!1,oo(t,n),iy(t,r,i),Id(t,r,i,n),Ld(null,t,r,!0,e,n);case 19:return Ay(e,t,n);case 22:return Py(e,t,n)}throw Error(V(156,t.tag))};function Xy(e,t){return x0(e,t)}function Xx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,n,r){return new Xx(e,t,n,r)}function lp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qx(e){if(typeof e=="function")return lp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cf)return 11;if(e===Of)return 14}return 2}function Tr(e,t){var n=e.alternate;return n===null?(n=Zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function tl(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")lp(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ui:return ii(n.children,i,o,t);case Tf:s=8,i|=8;break;case Zc:return e=Zt(12,n,t,i|2),e.elementType=Zc,e.lanes=o,e;case ed:return e=Zt(13,n,t,i),e.elementType=ed,e.lanes=o,e;case td:return e=Zt(19,n,t,i),e.elementType=td,e.lanes=o,e;case o0:return au(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case r0:s=10;break e;case i0:s=9;break e;case Cf:s=11;break e;case Of:s=14;break e;case ur:s=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Zt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ii(e,t,n,r){return e=Zt(7,e,r,t),e.lanes=n,e}function au(e,t,n,r){return e=Zt(22,e,r,t),e.elementType=o0,e.lanes=n,e.stateNode={isHidden:!1},e}function kc(e,t,n){return e=Zt(6,e,null,t),e.lanes=n,e}function Tc(e,t,n){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function up(e,t,n,r,i,o,s,a,l){return e=new Jx(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Zt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(o),e}function Zx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qy(e){if(!e)return Ar;e=e._reactInternals;e:{if(Ti(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(At(n))return X0(e,n,t)}return t}function Jy(e,t,n,r,i,o,s,a,l){return e=up(n,r,!0,e,i,o,s,a,l),e.context=Qy(null),n=e.current,r=kt(),i=kr(n),o=Gn(r,i),o.callback=t!=null?t:null,_r(n,o,i),e.current.lanes=i,Js(e,i,r),$t(e,r),e}function lu(e,t,n,r){var i=t.current,o=kt(),s=kr(i);return n=Qy(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_r(i,t,s),e!==null&&(vn(e,i,s,o),Ya(e,i,s)),s}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cp(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function e_(){return null}var Zy=typeof reportError=="function"?reportError:function(e){console.error(e)};function dp(e){this._internalRoot=e}uu.prototype.render=dp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));lu(e,t,null,null)};uu.prototype.unmount=dp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hi(function(){lu(null,e,null,null)}),t[Xn]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=I0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dr.length&&t!==0&&t<dr[n].priority;n++);dr.splice(n,0,e),n===0&&R0(e)}};function fp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hm(){}function t_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ll(s);o.call(u)}}var s=Jy(t,r,e,0,null,!1,!1,"",hm);return e._reactRootContainer=s,e[Xn]=s.current,Is(e.nodeType===8?e.parentNode:e),hi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ll(l);a.call(u)}}var l=up(e,0,!1,null,null,!1,!1,"",hm);return e._reactRootContainer=l,e[Xn]=l.current,Is(e.nodeType===8?e.parentNode:e),hi(function(){lu(t,l,n,r)}),l}function du(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ll(s);a.call(l)}}lu(t,s,e,i)}else s=t_(n,t,e,i,r);return Ll(s)}C0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rs(t.pendingLanes);n!==0&&(Rf(t,n|1),$t(t,Be()),(ve&6)===0&&(vo=Be()+500,Vr()))}break;case 13:hi(function(){var r=Qn(e,1);if(r!==null){var i=kt();vn(r,e,1,i)}}),cp(e,1)}};Lf=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=kt();vn(t,e,134217728,n)}cp(e,134217728)}};O0=function(e){if(e.tag===13){var t=kr(e),n=Qn(e,t);if(n!==null){var r=kt();vn(n,e,t,r)}cp(e,t)}};I0=function(){return we};P0=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};dd=function(e,t,n){switch(t){case"input":if(id(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=tu(r);if(!i)throw Error(V(90));a0(r),id(r,i)}}}break;case"textarea":u0(e,n);break;case"select":t=n.value,t!=null&&to(e,!!n.multiple,t,!1)}};g0=op;v0=hi;var n_={usingClientEntryPoint:!1,Events:[ea,Wi,tu,h0,m0,op]},Uo={findFiberByHostInstance:Jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},r_={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=b0(e),e===null?null:e.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||e_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Ql=Pa.inject(r_),$n=Pa}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_;Gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(t))throw Error(V(200));return Zx(e,t,null,n)};Gt.createRoot=function(e,t){if(!fp(e))throw Error(V(299));var n=!1,r="",i=Zy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=up(e,1,!1,null,null,n,!1,r,i),e[Xn]=t.current,Is(e.nodeType===8?e.parentNode:e),new dp(t)};Gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=b0(t),e=e===null?null:e.stateNode,e};Gt.flushSync=function(e){return hi(e)};Gt.hydrate=function(e,t,n){if(!cu(t))throw Error(V(200));return du(null,e,t,!0,n)};Gt.hydrateRoot=function(e,t,n){if(!fp(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Zy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jy(t,null,e,1,n!=null?n:null,i,!1,o,s),e[Xn]=t.current,Is(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uu(t)};Gt.render=function(e,t,n){if(!cu(t))throw Error(V(200));return du(null,e,t,!1,n)};Gt.unmountComponentAtNode=function(e){if(!cu(e))throw Error(V(40));return e._reactRootContainer?(hi(function(){du(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};Gt.unstable_batchedUpdates=op;Gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return du(e,t,n,!1,r)};Gt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Gt})(Xl);var mm=Xl.exports;Qc.createRoot=mm.createRoot,Qc.hydrateRoot=mm.hydrateRoot;function Nl(){return Nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nl.apply(this,arguments)}var ti;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ti||(ti={}));var gm=function(e){return e},vm="beforeunload",i_="popstate";function o_(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var E=r.location,x=E.pathname,$=E.search,I=E.hash,L=i.state||{};return[L.idx,gm({pathname:x,search:$,hash:I,state:L.usr||null,key:L.key||"default"})]}var s=null;function a(){if(s)v.call(s),s=null;else{var E=ti.Pop,x=o(),$=x[0],I=x[1];if(v.length){if($!=null){var L=c-$;L&&(s={action:E,location:I,retry:function(){k(L*-1)}},k(L))}}else m(E)}}r.addEventListener(i_,a);var l=ti.Pop,u=o(),c=u[0],d=u[1],f=wm(),v=wm();c==null&&(c=0,i.replaceState(Nl({},i.state,{idx:c}),""));function y(E){return typeof E=="string"?E:a_(E)}function b(E,x){return x===void 0&&(x=null),gm(Nl({pathname:d.pathname,hash:"",search:""},typeof E=="string"?To(E):E,{state:x,key:s_()}))}function w(E,x){return[{usr:E.state,key:E.key,idx:x},y(E)]}function p(E,x,$){return!v.length||(v.call({action:E,location:x,retry:$}),!1)}function m(E){l=E;var x=o();c=x[0],d=x[1],f.call({action:l,location:d})}function g(E,x){var $=ti.Push,I=b(E,x);function L(){g(E,x)}if(p($,I,L)){var j=w(I,c+1),J=j[0],T=j[1];try{i.pushState(J,"",T)}catch{r.location.assign(T)}m($)}}function S(E,x){var $=ti.Replace,I=b(E,x);function L(){S(E,x)}if(p($,I,L)){var j=w(I,c),J=j[0],T=j[1];i.replaceState(J,"",T),m($)}}function k(E){i.go(E)}var _={get action(){return l},get location(){return d},createHref:y,push:g,replace:S,go:k,back:function(){k(-1)},forward:function(){k(1)},listen:function(x){return f.push(x)},block:function(x){var $=v.push(x);return v.length===1&&r.addEventListener(vm,ym),function(){$(),v.length||r.removeEventListener(vm,ym)}}};return _}function ym(e){e.preventDefault(),e.returnValue=""}function wm(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function s_(){return Math.random().toString(36).substr(2,8)}function a_(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,s=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function To(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const e1=P.exports.createContext(null),pp=P.exports.createContext(null),hp=P.exports.createContext({outlet:null,matches:[]});function Zn(e,t){if(!e)throw new Error(t)}function l_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?To(t):t,i=n1(r.pathname||"/",n);if(i==null)return null;let o=t1(e);u_(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=y_(o[a],i);return s}function t1(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||Zn(!1),s.relativePath=s.relativePath.slice(r.length));let a=oi([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&Zn(!1),t1(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:g_(a,i.index),routesMeta:l})}),t}function u_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c_=/^:\w+$/,d_=3,f_=2,p_=1,h_=10,m_=-2,bm=e=>e==="*";function g_(e,t){let n=e.split("/"),r=n.length;return n.some(bm)&&(r+=m_),t&&(r+=f_),n.filter(i=>!bm(i)).reduce((i,o)=>i+(c_.test(o)?d_:o===""?p_:h_),r)}function v_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function y_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=w_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:oi([i,c.pathname]),pathnameBase:r1(oi([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=oi([i,c.pathnameBase]))}return o}function w_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";s=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=S_(a[d]||""),u},{}),pathname:o,pathnameBase:s,pattern:e}}function b_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function S_(e,t){try{return decodeURIComponent(e)}catch{return e}}function x_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?To(e):e;return{pathname:n?n.startsWith("/")?n:__(n,t):t,search:k_(r),hash:T_(i)}}function __(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function E_(e,t,n){let r=typeof e=="string"?To(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}o=a>=0?t[a]:"/"}let s=x_(r,o);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function n1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const oi=e=>e.join("/").replace(/\/\/+/g,"/"),r1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),k_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fu(){return P.exports.useContext(pp)!=null}function mp(){return fu()||Zn(!1),P.exports.useContext(pp).location}function na(){fu()||Zn(!1);let{basename:e,navigator:t}=P.exports.useContext(e1),{matches:n}=P.exports.useContext(hp),{pathname:r}=mp(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=P.exports.useRef(!1);return P.exports.useEffect(()=>{o.current=!0}),P.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=E_(a,JSON.parse(i),r);e!=="/"&&(u.pathname=oi([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state)},[e,t,i,r])}function C_(e,t){fu()||Zn(!1);let{matches:n}=P.exports.useContext(hp),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let s=mp(),a;if(t){var l;let f=typeof t=="string"?To(t):t;o==="/"||((l=f.pathname)==null?void 0:l.startsWith(o))||Zn(!1),a=f}else a=s;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",d=l_(e,{pathname:c});return O_(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:oi([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:oi([o,f.pathnameBase])})),n)}function O_(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>P.exports.createElement(hp.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function zi(e){Zn(!1)}function I_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ti.Pop,navigator:o,static:s=!1}=e;fu()&&Zn(!1);let a=r1(t),l=P.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=To(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:v="default"}=r,y=P.exports.useMemo(()=>{let b=n1(u,a);return b==null?null:{pathname:b,search:c,hash:d,state:f,key:v}},[a,u,c,d,f,v]);return y==null?null:P.exports.createElement(e1.Provider,{value:l},P.exports.createElement(pp.Provider,{children:n,value:{location:y,navigationType:i}}))}function P_(e){let{children:t,location:n}=e;return C_(Hd(t),n)}function Hd(e){let t=[];return P.exports.Children.forEach(e,n=>{if(!P.exports.isValidElement(n))return;if(n.type===P.exports.Fragment){t.push.apply(t,Hd(n.props.children));return}n.type!==zi&&Zn(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Hd(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R_(e){let{basename:t,children:n,window:r}=e,i=P.exports.useRef();i.current==null&&(i.current=o_({window:r}));let o=i.current,[s,a]=P.exports.useState({action:o.action,location:o.location});return P.exports.useLayoutEffect(()=>o.listen(a),[o]),P.exports.createElement(I_,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var gp={exports:{}},be={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=Symbol.for("react.element"),yp=Symbol.for("react.portal"),pu=Symbol.for("react.fragment"),hu=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),vu=Symbol.for("react.context"),L_=Symbol.for("react.server_context"),yu=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),Su=Symbol.for("react.memo"),xu=Symbol.for("react.lazy"),N_=Symbol.for("react.offscreen"),i1;i1=Symbol.for("react.module.reference");function sn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vp:switch(e=e.type,e){case pu:case mu:case hu:case wu:case bu:return e;default:switch(e=e&&e.$$typeof,e){case L_:case vu:case yu:case xu:case Su:case gu:return e;default:return t}}case yp:return t}}}be.ContextConsumer=vu;be.ContextProvider=gu;be.Element=vp;be.ForwardRef=yu;be.Fragment=pu;be.Lazy=xu;be.Memo=Su;be.Portal=yp;be.Profiler=mu;be.StrictMode=hu;be.Suspense=wu;be.SuspenseList=bu;be.isAsyncMode=function(){return!1};be.isConcurrentMode=function(){return!1};be.isContextConsumer=function(e){return sn(e)===vu};be.isContextProvider=function(e){return sn(e)===gu};be.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vp};be.isForwardRef=function(e){return sn(e)===yu};be.isFragment=function(e){return sn(e)===pu};be.isLazy=function(e){return sn(e)===xu};be.isMemo=function(e){return sn(e)===Su};be.isPortal=function(e){return sn(e)===yp};be.isProfiler=function(e){return sn(e)===mu};be.isStrictMode=function(e){return sn(e)===hu};be.isSuspense=function(e){return sn(e)===wu};be.isSuspenseList=function(e){return sn(e)===bu};be.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pu||e===mu||e===hu||e===wu||e===bu||e===N_||typeof e=="object"&&e!==null&&(e.$$typeof===xu||e.$$typeof===Su||e.$$typeof===gu||e.$$typeof===vu||e.$$typeof===yu||e.$$typeof===i1||e.getModuleId!==void 0)};be.typeOf=sn;(function(e){e.exports=be})(gp);function A_(e){function t(B,Y,U,te,O){for(var ue=0,G=0,ye=0,oe=0,le,ae,Re=0,Ue=0,pe,qe=pe=le=0,ge=0,Ke=0,or=0,Ve=0,Ri=U.length,zn=Ri-1,jt,ce="",Le="",Gr="",qr="",_n;ge<Ri;){if(ae=U.charCodeAt(ge),ge===zn&&G+oe+ye+ue!==0&&(G!==0&&(ae=G===47?10:47),oe=ye=ue=0,Ri++,zn++),G+oe+ye+ue===0){if(ge===zn&&(0<Ke&&(ce=ce.replace(f,"")),0<ce.trim().length)){switch(ae){case 32:case 9:case 59:case 13:case 10:break;default:ce+=U.charAt(ge)}ae=59}switch(ae){case 123:for(ce=ce.trim(),le=ce.charCodeAt(0),pe=1,Ve=++ge;ge<Ri;){switch(ae=U.charCodeAt(ge)){case 123:pe++;break;case 125:pe--;break;case 47:switch(ae=U.charCodeAt(ge+1)){case 42:case 47:e:{for(qe=ge+1;qe<zn;++qe)switch(U.charCodeAt(qe)){case 47:if(ae===42&&U.charCodeAt(qe-1)===42&&ge+2!==qe){ge=qe+1;break e}break;case 10:if(ae===47){ge=qe+1;break e}}ge=qe}}break;case 91:ae++;case 40:ae++;case 34:case 39:for(;ge++<zn&&U.charCodeAt(ge)!==ae;);}if(pe===0)break;ge++}switch(pe=U.substring(Ve,ge),le===0&&(le=(ce=ce.replace(d,"").trim()).charCodeAt(0)),le){case 64:switch(0<Ke&&(ce=ce.replace(f,"")),ae=ce.charCodeAt(1),ae){case 100:case 109:case 115:case 45:Ke=Y;break;default:Ke=X}if(pe=t(Y,Ke,pe,ae,O+1),Ve=pe.length,0<R&&(Ke=n(X,ce,or),_n=a(3,pe,Ke,Y,J,j,Ve,ae,O,te),ce=Ke.join(""),_n!==void 0&&(Ve=(pe=_n.trim()).length)===0&&(ae=0,pe="")),0<Ve)switch(ae){case 115:ce=ce.replace(_,s);case 100:case 109:case 45:pe=ce+"{"+pe+"}";break;case 107:ce=ce.replace(m,"$1 $2"),pe=ce+"{"+pe+"}",pe=A===1||A===2&&o("@"+pe,3)?"@-webkit-"+pe+"@"+pe:"@"+pe;break;default:pe=ce+pe,te===112&&(pe=(Le+=pe,""))}else pe="";break;default:pe=t(Y,n(Y,ce,or),pe,te,O+1)}Gr+=pe,pe=or=Ke=qe=le=0,ce="",ae=U.charCodeAt(++ge);break;case 125:case 59:if(ce=(0<Ke?ce.replace(f,""):ce).trim(),1<(Ve=ce.length))switch(qe===0&&(le=ce.charCodeAt(0),le===45||96<le&&123>le)&&(Ve=(ce=ce.replace(" ",":")).length),0<R&&(_n=a(1,ce,Y,B,J,j,Le.length,te,O,te))!==void 0&&(Ve=(ce=_n.trim()).length)===0&&(ce="\0\0"),le=ce.charCodeAt(0),ae=ce.charCodeAt(1),le){case 0:break;case 64:if(ae===105||ae===99){qr+=ce+U.charAt(ge);break}default:ce.charCodeAt(Ve-1)!==58&&(Le+=i(ce,le,ae,ce.charCodeAt(2)))}or=Ke=qe=le=0,ce="",ae=U.charCodeAt(++ge)}}switch(ae){case 13:case 10:G===47?G=0:1+le===0&&te!==107&&0<ce.length&&(Ke=1,ce+="\0"),0<R*Q&&a(0,ce,Y,B,J,j,Le.length,te,O,te),j=1,J++;break;case 59:case 125:if(G+oe+ye+ue===0){j++;break}default:switch(j++,jt=U.charAt(ge),ae){case 9:case 32:if(oe+ue+G===0)switch(Re){case 44:case 58:case 9:case 32:jt="";break;default:ae!==32&&(jt=" ")}break;case 0:jt="\\0";break;case 12:jt="\\f";break;case 11:jt="\\v";break;case 38:oe+G+ue===0&&(Ke=or=1,jt="\f"+jt);break;case 108:if(oe+G+ue+T===0&&0<qe)switch(ge-qe){case 2:Re===112&&U.charCodeAt(ge-3)===58&&(T=Re);case 8:Ue===111&&(T=Ue)}break;case 58:oe+G+ue===0&&(qe=ge);break;case 44:G+ye+oe+ue===0&&(Ke=1,jt+="\r");break;case 34:case 39:G===0&&(oe=oe===ae?0:oe===0?ae:oe);break;case 91:oe+G+ye===0&&ue++;break;case 93:oe+G+ye===0&&ue--;break;case 41:oe+G+ue===0&&ye--;break;case 40:if(oe+G+ue===0){if(le===0)switch(2*Re+3*Ue){case 533:break;default:le=1}ye++}break;case 64:G+ye+oe+ue+qe+pe===0&&(pe=1);break;case 42:case 47:if(!(0<oe+ue+ye))switch(G){case 0:switch(2*ae+3*U.charCodeAt(ge+1)){case 235:G=47;break;case 220:Ve=ge,G=42}break;case 42:ae===47&&Re===42&&Ve+2!==ge&&(U.charCodeAt(Ve+2)===33&&(Le+=U.substring(Ve,ge+1)),jt="",G=0)}}G===0&&(ce+=jt)}Ue=Re,Re=ae,ge++}if(Ve=Le.length,0<Ve){if(Ke=Y,0<R&&(_n=a(2,Le,Ke,B,J,j,Ve,te,O,te),_n!==void 0&&(Le=_n).length===0))return qr+Le+Gr;if(Le=Ke.join(",")+"{"+Le+"}",A*T!==0){switch(A!==2||o(Le,2)||(T=0),T){case 111:Le=Le.replace(S,":-moz-$1")+Le;break;case 112:Le=Le.replace(g,"::-webkit-input-$1")+Le.replace(g,"::-moz-$1")+Le.replace(g,":-ms-input-$1")+Le}T=0}}return qr+Le+Gr}function n(B,Y,U){var te=Y.trim().split(w);Y=te;var O=te.length,ue=B.length;switch(ue){case 0:case 1:var G=0;for(B=ue===0?"":B[0]+" ";G<O;++G)Y[G]=r(B,Y[G],U).trim();break;default:var ye=G=0;for(Y=[];G<O;++G)for(var oe=0;oe<ue;++oe)Y[ye++]=r(B[oe]+" ",te[G],U).trim()}return Y}function r(B,Y,U){var te=Y.charCodeAt(0);switch(33>te&&(te=(Y=Y.trim()).charCodeAt(0)),te){case 38:return Y.replace(p,"$1"+B.trim());case 58:return B.trim()+Y.replace(p,"$1"+B.trim());default:if(0<1*U&&0<Y.indexOf("\f"))return Y.replace(p,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+Y}function i(B,Y,U,te){var O=B+";",ue=2*Y+3*U+4*te;if(ue===944){B=O.indexOf(":",9)+1;var G=O.substring(B,O.length-1).trim();return G=O.substring(0,B).trim()+G+";",A===1||A===2&&o(G,1)?"-webkit-"+G+G:G}if(A===0||A===2&&!o(O,1))return O;switch(ue){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(L,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return G=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+G+"-webkit-"+O+"-ms-flex-pack"+G+O;case 1005:return y.test(O)?O.replace(v,":-webkit-")+O.replace(v,":-moz-")+O:O;case 1e3:switch(G=O.substring(13).trim(),Y=G.indexOf("-")+1,G.charCodeAt(0)+G.charCodeAt(Y)){case 226:G=O.replace(k,"tb");break;case 232:G=O.replace(k,"tb-rl");break;case 220:G=O.replace(k,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+G+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(Y=(O=B).length-10,G=(O.charCodeAt(Y)===33?O.substring(0,Y):O).substring(B.indexOf(":",7)+1).trim(),ue=G.charCodeAt(0)+(G.charCodeAt(7)|0)){case 203:if(111>G.charCodeAt(8))break;case 115:O=O.replace(G,"-webkit-"+G)+";"+O;break;case 207:case 102:O=O.replace(G,"-webkit-"+(102<ue?"inline-":"")+"box")+";"+O.replace(G,"-webkit-"+G)+";"+O.replace(G,"-ms-"+G+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return G=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+G+"-ms-flex-"+G+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(x,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(x,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(I.test(B)===!0)return(G=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?i(B.replace("stretch","fill-available"),Y,U,te).replace(":fill-available",":stretch"):O.replace(G,"-webkit-"+G)+O.replace(G,"-moz-"+G.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,U+te===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+O}return O}function o(B,Y){var U=B.indexOf(Y===1?":":"{"),te=B.substring(0,Y!==3?U:10);return U=B.substring(U+1,B.length-1),D(Y!==2?te:te.replace($,"$1"),U,Y)}function s(B,Y){var U=i(Y,Y.charCodeAt(0),Y.charCodeAt(1),Y.charCodeAt(2));return U!==Y+";"?U.replace(E," or ($1)").substring(4):"("+Y+")"}function a(B,Y,U,te,O,ue,G,ye,oe,le){for(var ae=0,Re=Y,Ue;ae<R;++ae)switch(Ue=ne[ae].call(c,B,Re,U,te,O,ue,G,ye,oe,le)){case void 0:case!1:case!0:case null:break;default:Re=Ue}if(Re!==Y)return Re}function l(B){switch(B){case void 0:case null:R=ne.length=0;break;default:if(typeof B=="function")ne[R++]=B;else if(typeof B=="object")for(var Y=0,U=B.length;Y<U;++Y)l(B[Y]);else Q=!!B|0}return l}function u(B){return B=B.prefix,B!==void 0&&(D=null,B?typeof B!="function"?A=1:(A=2,D=B):A=0),u}function c(B,Y){var U=B;if(33>U.charCodeAt(0)&&(U=U.trim()),se=U,U=[se],0<R){var te=a(-1,Y,U,U,J,j,0,0,0,0);te!==void 0&&typeof te=="string"&&(Y=te)}var O=t(X,U,Y,0,0);return 0<R&&(te=a(-2,O,U,U,J,j,O.length,0,0,0),te!==void 0&&(O=te)),se="",T=0,j=J=1,O}var d=/^\0+/g,f=/[\0\r\f]/g,v=/: */g,y=/zoo|gra/,b=/([,: ])(transform)/g,w=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,S=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,x=/-self|flex-/g,$=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,j=1,J=1,T=0,A=1,X=[],ne=[],R=0,D=null,Q=0,se="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var $_={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function M_(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var D_=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Sm=M_(function(e){return D_.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),o1={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot=typeof Symbol=="function"&&Symbol.for,wp=ot?Symbol.for("react.element"):60103,bp=ot?Symbol.for("react.portal"):60106,_u=ot?Symbol.for("react.fragment"):60107,Eu=ot?Symbol.for("react.strict_mode"):60108,ku=ot?Symbol.for("react.profiler"):60114,Tu=ot?Symbol.for("react.provider"):60109,Cu=ot?Symbol.for("react.context"):60110,Sp=ot?Symbol.for("react.async_mode"):60111,Ou=ot?Symbol.for("react.concurrent_mode"):60111,Iu=ot?Symbol.for("react.forward_ref"):60112,Pu=ot?Symbol.for("react.suspense"):60113,j_=ot?Symbol.for("react.suspense_list"):60120,Ru=ot?Symbol.for("react.memo"):60115,Lu=ot?Symbol.for("react.lazy"):60116,z_=ot?Symbol.for("react.block"):60121,F_=ot?Symbol.for("react.fundamental"):60117,U_=ot?Symbol.for("react.responder"):60118,B_=ot?Symbol.for("react.scope"):60119;function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wp:switch(e=e.type,e){case Sp:case Ou:case _u:case ku:case Eu:case Pu:return e;default:switch(e=e&&e.$$typeof,e){case Cu:case Iu:case Lu:case Ru:case Tu:return e;default:return t}}case bp:return t}}}function s1(e){return Kt(e)===Ou}Se.AsyncMode=Sp;Se.ConcurrentMode=Ou;Se.ContextConsumer=Cu;Se.ContextProvider=Tu;Se.Element=wp;Se.ForwardRef=Iu;Se.Fragment=_u;Se.Lazy=Lu;Se.Memo=Ru;Se.Portal=bp;Se.Profiler=ku;Se.StrictMode=Eu;Se.Suspense=Pu;Se.isAsyncMode=function(e){return s1(e)||Kt(e)===Sp};Se.isConcurrentMode=s1;Se.isContextConsumer=function(e){return Kt(e)===Cu};Se.isContextProvider=function(e){return Kt(e)===Tu};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wp};Se.isForwardRef=function(e){return Kt(e)===Iu};Se.isFragment=function(e){return Kt(e)===_u};Se.isLazy=function(e){return Kt(e)===Lu};Se.isMemo=function(e){return Kt(e)===Ru};Se.isPortal=function(e){return Kt(e)===bp};Se.isProfiler=function(e){return Kt(e)===ku};Se.isStrictMode=function(e){return Kt(e)===Eu};Se.isSuspense=function(e){return Kt(e)===Pu};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_u||e===Ou||e===ku||e===Eu||e===Pu||e===j_||typeof e=="object"&&e!==null&&(e.$$typeof===Lu||e.$$typeof===Ru||e.$$typeof===Tu||e.$$typeof===Cu||e.$$typeof===Iu||e.$$typeof===F_||e.$$typeof===U_||e.$$typeof===B_||e.$$typeof===z_)};Se.typeOf=Kt;(function(e){e.exports=Se})(o1);var xp=o1.exports,V_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W_={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_p={};_p[xp.ForwardRef]=W_;_p[xp.Memo]=a1;function xm(e){return xp.isMemo(e)?a1:_p[e.$$typeof]||V_}var G_=Object.defineProperty,q_=Object.getOwnPropertyNames,_m=Object.getOwnPropertySymbols,K_=Object.getOwnPropertyDescriptor,Y_=Object.getPrototypeOf,Em=Object.prototype;function l1(e,t,n){if(typeof t!="string"){if(Em){var r=Y_(t);r&&r!==Em&&l1(e,r,n)}var i=q_(t);_m&&(i=i.concat(_m(t)));for(var o=xm(e),s=xm(t),a=0;a<i.length;++a){var l=i[a];if(!H_[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=K_(t,l);try{G_(e,l,u)}catch{}}}}return e}var X_=l1;function mn(){return(mn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var km=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Wd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!gp.exports.typeOf(e)},Al=Object.freeze([]),Cr=Object.freeze({});function yo(e){return typeof e=="function"}function Tm(e){return e.displayName||e.name||"Component"}function Ep(e){return e&&typeof e.styledComponentId=="string"}var wo=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",kp=typeof window<"u"&&"HTMLElement"in window,Q_=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),J_={};function mi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Z_=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&mi(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),nl=new Map,$l=new Map,gs=1,Ra=function(e){if(nl.has(e))return nl.get(e);for(;$l.has(gs);)gs++;var t=gs++;return nl.set(e,t),$l.set(t,e),t},e2=function(e){return $l.get(e)},t2=function(e,t){t>=gs&&(gs=t+1),nl.set(e,t),$l.set(t,e)},n2="style["+wo+'][data-styled-version="5.3.5"]',r2=new RegExp("^"+wo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),i2=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},o2=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(r2);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(t2(u,l),i2(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},s2=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},u1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(wo))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(wo,"active"),r.setAttribute("data-styled-version","5.3.5");var s=s2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},a2=function(){function e(n){var r=this.element=u1(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}mi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),l2=function(){function e(n){var r=this.element=u1(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),u2=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Cm=kp,c2={isServer:!kp,useCSSOMInjection:!Q_},Ml=function(){function e(n,r,i){n===void 0&&(n=Cr),r===void 0&&(r={}),this.options=mn({},c2,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&kp&&Cm&&(Cm=!1,function(o){for(var s=document.querySelectorAll(n2),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(wo)!=="active"&&(o2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ra(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(mn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new u2(s):o?new a2(s):new l2(s),new Z_(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ra(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ra(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ra(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=e2(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var c=wo+".g"+s+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),d2=/(a)(d)/gi,Om=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Om(t%52)+n;return(Om(t%52)+n).replace(d2,"$1-$2")}var Ji=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},c1=function(e){return Ji(5381,e)};function d1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yo(n)&&!Ep(n))return!1}return!0}var f2=c1("5.3.5"),p2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&d1(t),this.componentId=n,this.baseHash=Ji(f2,n),this.baseStyle=r,Ml.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=gi(this.rules,t,n,r).join(""),a=Gd(Ji(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ji(this.baseHash,r.hash),d="",f=0;f<u;f++){var v=this.rules[f];if(typeof v=="string")d+=v;else if(v){var y=gi(v,t,n,r),b=Array.isArray(y)?y.join(""):y;c=Ji(c,b+f),d+=b}}if(d){var w=Gd(c>>>0);if(!n.hasNameForId(i,w)){var p=r(d,"."+w,void 0,i);n.insertRules(i,w,p)}o.push(w)}}return o.join(" ")},e}(),h2=/^\s*\/\/.*$/gm,m2=[":","[",".","#"];function g2(e){var t,n,r,i,o=e===void 0?Cr:e,s=o.options,a=s===void 0?Cr:s,l=o.plugins,u=l===void 0?Al:l,c=new A_(a),d=[],f=function(b){function w(p){if(p)try{b(p+"}")}catch{}}return function(p,m,g,S,k,_,E,x,$,I){switch(p){case 1:if($===0&&m.charCodeAt(0)===64)return b(m+";"),"";break;case 2:if(x===0)return m+"/*|*/";break;case 3:switch(x){case 102:case 112:return b(g[0]+m),"";default:return m+(I===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(w)}}}(function(b){d.push(b)}),v=function(b,w,p){return w===0&&m2.indexOf(p[n.length])!==-1||p.match(i)?b:"."+t};function y(b,w,p,m){m===void 0&&(m="&");var g=b.replace(h2,""),S=w&&p?p+" "+w+" { "+g+" }":g;return t=m,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!w?"":w,S)}return c.use([].concat(u,[function(b,w,p){b===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,v))},f,function(b){if(b===-2){var w=d;return d=[],w}}])),y.hash=u.length?u.reduce(function(b,w){return w.name||mi(15),Ji(b,w.name)},5381).toString():"",y}var f1=Ze.createContext();f1.Consumer;var p1=Ze.createContext(),v2=(p1.Consumer,new Ml),qd=g2();function h1(){return P.exports.useContext(f1)||v2}function m1(){return P.exports.useContext(p1)||qd}var g1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=qd);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return mi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=qd),this.name+t.hash},e}(),y2=/([A-Z])/,w2=/([A-Z])/g,b2=/^ms-/,S2=function(e){return"-"+e.toLowerCase()};function Im(e){return y2.test(e)?e.replace(w2,S2).replace(b2,"-ms-"):e}var Pm=function(e){return e==null||e===!1||e===""};function gi(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=gi(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Pm(e))return"";if(Ep(e))return"."+e.styledComponentId;if(yo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return gi(l,t,n,r)}var u;return e instanceof g1?n?(e.inject(n,r),e.getName(r)):e:Wd(e)?function c(d,f){var v,y,b=[];for(var w in d)d.hasOwnProperty(w)&&!Pm(d[w])&&(Array.isArray(d[w])&&d[w].isCss||yo(d[w])?b.push(Im(w)+":",d[w],";"):Wd(d[w])?b.push.apply(b,c(d[w],w)):b.push(Im(w)+": "+(v=w,(y=d[w])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||v in $_?String(y).trim():y+"px")+";"));return f?[f+" {"].concat(b,["}"]):b}(e):e.toString()}var Rm=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return yo(e)||Wd(e)?Rm(gi(km(Al,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Rm(gi(km(e,n)))}var v1=function(e,t,n){return n===void 0&&(n=Cr),e.theme!==n.theme&&e.theme||t||n.theme},x2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_2=/(^-|-$)/g;function Cc(e){return e.replace(x2,"-").replace(_2,"")}var Tp=function(e){return Gd(c1(e)>>>0)};function La(e){return typeof e=="string"&&!0}var Kd=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},E2=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function k2(e,t,n){var r=e[n];Kd(t)&&Kd(r)?y1(r,t):e[n]=t}function y1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Kd(s))for(var a in s)E2(a)&&k2(e,s[a],a)}return e}var js=Ze.createContext();js.Consumer;function T2(e){var t=P.exports.useContext(js),n=P.exports.useMemo(function(){return function(r,i){if(!r)return mi(14);if(yo(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?mi(8):i?mn({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Ze.createElement(js.Provider,{value:n},e.children):null}var Oc={};function w1(e,t,n){var r=Ep(e),i=!La(e),o=t.attrs,s=o===void 0?Al:o,a=t.componentId,l=a===void 0?function(m,g){var S=typeof m!="string"?"sc":Cc(m);Oc[S]=(Oc[S]||0)+1;var k=S+"-"+Tp("5.3.5"+S+Oc[S]);return g?g+"-"+k:k}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(m){return La(m)?"styled."+m:"Styled("+Tm(m)+")"}(e):u,d=t.displayName&&t.componentId?Cc(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(m,g,S){return e.shouldForwardProp(m,g,S)&&t.shouldForwardProp(m,g,S)}:e.shouldForwardProp);var y,b=new p2(n,d,r?e.componentStyle:void 0),w=b.isStatic&&s.length===0,p=function(m,g){return function(S,k,_,E){var x=S.attrs,$=S.componentStyle,I=S.defaultProps,L=S.foldedComponentIds,j=S.shouldForwardProp,J=S.styledComponentId,T=S.target,A=function(te,O,ue){te===void 0&&(te=Cr);var G=mn({},O,{theme:te}),ye={};return ue.forEach(function(oe){var le,ae,Re,Ue=oe;for(le in yo(Ue)&&(Ue=Ue(G)),Ue)G[le]=ye[le]=le==="className"?(ae=ye[le],Re=Ue[le],ae&&Re?ae+" "+Re:ae||Re):Ue[le]}),[G,ye]}(v1(k,P.exports.useContext(js),I)||Cr,k,x),X=A[0],ne=A[1],R=function(te,O,ue,G){var ye=h1(),oe=m1(),le=O?te.generateAndInjectStyles(Cr,ye,oe):te.generateAndInjectStyles(ue,ye,oe);return le}($,E,X),D=_,Q=ne.$as||k.$as||ne.as||k.as||T,se=La(Q),B=ne!==k?mn({},k,{},ne):k,Y={};for(var U in B)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?Y.as=B[U]:(j?j(U,Sm,Q):!se||Sm(U))&&(Y[U]=B[U]));return k.style&&ne.style!==k.style&&(Y.style=mn({},k.style,{},ne.style)),Y.className=Array.prototype.concat(L,J,R!==J?R:null,k.className,ne.className).filter(Boolean).join(" "),Y.ref=D,P.exports.createElement(Q,Y)}(y,m,g,w)};return p.displayName=c,(y=Ze.forwardRef(p)).attrs=f,y.componentStyle=b,y.displayName=c,y.shouldForwardProp=v,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Al,y.styledComponentId=d,y.target=r?e.target:e,y.withComponent=function(m){var g=t.componentId,S=function(_,E){if(_==null)return{};var x,$,I={},L=Object.keys(_);for($=0;$<L.length;$++)x=L[$],E.indexOf(x)>=0||(I[x]=_[x]);return I}(t,["componentId"]),k=g&&g+"-"+(La(m)?m:Cc(Tm(m)));return w1(m,mn({},S,{attrs:f,componentId:k}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?y1({},e.defaultProps,m):m}}),y.toString=function(){return"."+y.styledComponentId},i&&X_(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Yd=function(e){return function t(n,r,i){if(i===void 0&&(i=Cr),!gp.exports.isValidElementType(r))return mi(1,String(r));var o=function(){return n(r,i,Fe.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,mn({},i,{},s))},o.attrs=function(s){return t(n,r,mn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(w1,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Yd[e]=Yd(e)});var C2=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=d1(n),Ml.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(gi(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Ml.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function O2(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Fe.apply(void 0,[e].concat(n)),o="sc-global-"+Tp(JSON.stringify(i)),s=new C2(i,o);function a(u){var c=h1(),d=m1(),f=P.exports.useContext(js),v=P.exports.useRef(c.allocateGSInstance(o)).current;return c.server&&l(v,u,c,f,d),P.exports.useLayoutEffect(function(){if(!c.server)return l(v,u,c,f,d),function(){return s.removeStyles(v,c)}},[v,u,c,f,d]),null}function l(u,c,d,f,v){if(s.isStatic)s.renderStyles(u,J_,d,v);else{var y=mn({},c,{theme:v1(c,f,a.defaultProps)});s.renderStyles(u,y,d,v)}}return Ze.memo(a)}function ra(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Fe.apply(void 0,[e].concat(n)).join(""),o=Tp(i);return new g1(o,i)}const K=Yd;const Ci=Fe`
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
`,I2=Fe`
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
`,P2=O2`
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

`,R2={spanishGray:"hsl(0, 0%, 60%)",sandyBrown:"hsl(29, 90%, 65%)",oceanGreen:"hsl(152, 51%, 52%)",sonicSilver:"hsl(0, 0%, 47%)",cultured:"hsl(0, 0%, 83%)",white:"hsl(0, 100%, 100%)",onyx:"hsl(0, 0%, 27%)",eerieBlack:"hsl(0, 0%, 10%)",primary:"#a435f0",primaryDark:"#8710d8",primaryLight:"#c47df5",font5xs:" 0.625rem",font4xs:"0.688rem",font3xs:"0.75rem",font2xs:"0.813rem",fontxs:"0.875rem",fontsm:"0.938rem",fontmd:"1rem",fontlg:"1.125rem",fontxl:"1.25rem",font2xl:"1.375rem",font3xl:"1.563rem",font4xl:" 1.875rem",headerCtaHeight:"3rem",headerMainHeight:"6rem",borderRadiusMd:"10px",borderRadiusSm:"5px",transitionTiming:"0.2s ease"};function Or(e){return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Or(e)}function Sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function an(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ln(e,t,n){return t&&Lm(e.prototype,t),n&&Lm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var L2=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230);/g,N2={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xA9","&#169;":"\xA9","&reg;":"\xAE","&#174;":"\xAE","&hellip;":"\u2026","&#8230;":"\u2026"},A2=function(t){return N2[t]},$2=function(t){return t.replace(L2,A2)};function Nm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Am(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nm(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Xd={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:$2},b1,M2=P.exports.createContext();function D2(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Xd=Am(Am({},Xd),e)}function j2(){return Xd}var z2=function(){function e(){an(this,e),this.usedNamespaces={}}return ln(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function F2(e){b1=e}function U2(){return b1}var B2={type:"3rdParty",init:function(t){D2(t.options.react),F2(t)}};function V2(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var $m={};function Qd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&$m[t[0]]||(typeof t[0]=="string"&&($m[t[0]]=new Date),V2.apply(void 0,t))}function Mm(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function H2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var s=function(l,u){var c=t.services.backendConnector.state["".concat(l,"|").concat(u)];return c===-1||c===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!i||s(o,e)))}function W2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Qd("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(o,s){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!s(o.isLanguageChangingTo,e))return!1}}):H2(e,t,n)}function S1(e){if(Array.isArray(e))return e}function G2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function Dm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x1(e,t){if(!!e){if(typeof e=="string")return Dm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dm(e,t)}}function _1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q2(e,t){return S1(e)||G2(e,t)||x1(e,t)||_1()}function jm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ic(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jm(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var K2=function(t,n){var r=P.exports.useRef();return P.exports.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=P.exports.useContext(M2)||{},i=r.i18n,o=r.defaultNS,s=n||i||U2();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new z2),!s){Qd("You will need to pass in an i18next instance by using initReactI18next");var a=function($){return Array.isArray($)?$[$.length-1]:$},l=[a,{},!1];return l.t=a,l.i18n={},l.ready=!1,l}s.options.react&&s.options.react.wait!==void 0&&Qd("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var u=Ic(Ic(Ic({},j2()),s.options.react),t),c=u.useSuspense,d=u.keyPrefix,f=e||o||s.options&&s.options.defaultNS;f=typeof f=="string"?[f]:f||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(f);var v=(s.isInitialized||s.initializedStoreOnce)&&f.every(function(x){return W2(x,s,u)});function y(){return s.getFixedT(null,u.nsMode==="fallback"?f:f[0],d)}var b=P.exports.useState(y),w=q2(b,2),p=w[0],m=w[1],g=f.join(),S=K2(g),k=P.exports.useRef(!0);P.exports.useEffect(function(){var x=u.bindI18n,$=u.bindI18nStore;k.current=!0,!v&&!c&&Mm(s,f,function(){k.current&&m(y)}),v&&S&&S!==g&&k.current&&m(y);function I(){k.current&&m(y)}return x&&s&&s.on(x,I),$&&s&&s.store.on($,I),function(){k.current=!1,x&&s&&x.split(" ").forEach(function(L){return s.off(L,I)}),$&&s&&$.split(" ").forEach(function(L){return s.store.off(L,I)})}},[s,g]);var _=P.exports.useRef(!0);P.exports.useEffect(function(){k.current&&!_.current&&m(y),_.current=!1},[s,d]);var E=[p,s,v];if(E.t=p,E.i18n=s,E.ready=v,v||!v&&!c)return E;throw new Promise(function(x){Mm(s,f,function(){x()})})}function E1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=E1(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function mr(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=E1(e))&&(r&&(r+=" "),r+=t);return r}var Nu={exports:{}},Au={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y2=P.exports,X2=Symbol.for("react.element"),Q2=Symbol.for("react.fragment"),J2=Object.prototype.hasOwnProperty,Z2=Y2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eE={key:!0,ref:!0,__self:!0,__source:!0};function k1(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)J2.call(t,r)&&!eE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:X2,type:e,key:o,ref:s,props:i,_owner:Z2.current}}Au.Fragment=Q2;Au.jsx=k1;Au.jsxs=k1;(function(e){e.exports=Au})(Nu);const St=Nu.exports.Fragment,h=Nu.exports.jsx,N=Nu.exports.jsxs;function ia(e){return typeof e=="number"&&!isNaN(e)}function Bo(e){return typeof e=="boolean"}function vi(e){return typeof e=="string"}function Mt(e){return typeof e=="function"}function rl(e){return vi(e)||Mt(e)?e:null}function il(e){return e!=null}function tE(e,t){return e===!1||ia(e)&&e>0?e:t}function Pc(e){return P.exports.isValidElement(e)||vi(e)||Mt(e)||ia(e)}const T1={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},nr={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function nE(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function rE(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:l,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:v}=a;const y=r?t+"--"+u:t,b=r?n+"--"+u:n,w=P.exports.useRef(0);return P.exports.useLayoutEffect(()=>{const p=f.current,m=y.split(" "),g=k=>{k.target===f.current&&(p.dispatchEvent(new Event("d")),p.removeEventListener("animationend",g),p.removeEventListener("animationcancel",g),w.current===0&&k.type!=="animationcancel"&&p.classList.remove(...m))};(()=>{p.classList.add(...m),p.addEventListener("animationend",g),p.addEventListener("animationcancel",g)})()},[]),P.exports.useEffect(()=>{const p=f.current,m=()=>{p.removeEventListener("animationend",m),i?nE(p,d,o):d()};v||(c?m():(()=>{w.current=1,p.className+=" "+b,p.addEventListener("animationend",m)})())},[v]),h(St,{children:l})}}function zm(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const en={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},$u=e=>{let{theme:t,type:n,...r}=e;return h("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")",...r})};function iE(e){return h($u,{...e,children:h("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})}function oE(e){return h($u,{...e,children:h("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})}function sE(e){return h($u,{...e,children:h("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})}function aE(e){return h($u,{...e,children:h("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})}function lE(){return h("div",{className:"Toastify__spinner"})}const Jd={info:oE,warning:iE,success:sE,error:aE,spinner:lE},uE=e=>e in Jd;function cE(e){let{theme:t,type:n,isLoading:r,icon:i}=e,o=null;const s={theme:t,type:n};return i===!1||(Mt(i)?o=i(s):P.exports.isValidElement(i)?o=P.exports.cloneElement(i,s):vi(i)||ia(i)?o=i:r?o=Jd.spinner():uE(n)&&(o=Jd[n](s))),o}function dE(e){const[,t]=P.exports.useReducer(b=>b+1,0),[n,r]=P.exports.useState([]),i=P.exports.useRef(null),o=P.exports.useRef(new Map).current,s=b=>n.indexOf(b)!==-1,a=P.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:b=>o.get(b)}).current;P.exports.useEffect(()=>(a.containerId=e.containerId,en.cancelEmit(3).on(0,f).on(1,b=>i.current&&u(b)).on(5,l).emit(2,a),()=>{o.clear(),en.emit(3,a)}),[]),P.exports.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length});function l(b){let{containerId:w}=b;const{limit:p}=a.props;p&&(!w||a.containerId===w)&&(a.count-=a.queue.length,a.queue=[])}function u(b){r(w=>il(b)?w.filter(p=>p!==b):[])}function c(){const{toastContent:b,toastProps:w,staleId:p}=a.queue.shift();v(b,w,p)}function d(b){return!i.current||a.props.enableMultiContainer&&b.containerId!==a.props.containerId||o.has(b.toastId)&&b.updateId==null}function f(b,w){let{delay:p,staleId:m,...g}=w;if(!Pc(b)||d(g))return;const{toastId:S,updateId:k,data:_}=g,{props:E}=a,x=()=>u(S),$=k==null;$&&a.count++;const I={toastId:S,updateId:k,data:_,containerId:g.containerId,isLoading:g.isLoading,theme:g.theme||E.theme,icon:g.icon!=null?g.icon:E.icon,isIn:!1,key:g.key||a.toastKey++,type:g.type,closeToast:x,closeButton:g.closeButton,rtl:E.rtl,position:g.position||E.position,transition:g.transition||E.transition,className:rl(g.className||E.toastClassName),bodyClassName:rl(g.bodyClassName||E.bodyClassName),style:g.style||E.toastStyle,bodyStyle:g.bodyStyle||E.bodyStyle,onClick:g.onClick||E.onClick,pauseOnHover:Bo(g.pauseOnHover)?g.pauseOnHover:E.pauseOnHover,pauseOnFocusLoss:Bo(g.pauseOnFocusLoss)?g.pauseOnFocusLoss:E.pauseOnFocusLoss,draggable:Bo(g.draggable)?g.draggable:E.draggable,draggablePercent:g.draggablePercent||E.draggablePercent,draggableDirection:g.draggableDirection||E.draggableDirection,closeOnClick:Bo(g.closeOnClick)?g.closeOnClick:E.closeOnClick,progressClassName:rl(g.progressClassName||E.progressClassName),progressStyle:g.progressStyle||E.progressStyle,autoClose:g.isLoading?!1:tE(g.autoClose,E.autoClose),hideProgressBar:Bo(g.hideProgressBar)?g.hideProgressBar:E.hideProgressBar,progress:g.progress,role:g.role||E.role,deleteToast(){const j=zm(o.get(S),"removed");o.delete(S),en.emit(4,j);const J=a.queue.length;if(a.count=il(S)?a.count-1:a.count-a.displayedToast,a.count<0&&(a.count=0),J>0){const T=il(S)?1:a.props.limit;if(J===1||T===1)a.displayedToast++,c();else{const A=T>J?J:T;a.displayedToast=A;for(let X=0;X<A;X++)c()}}else t()}};I.iconOut=cE(I),Mt(g.onOpen)&&(I.onOpen=g.onOpen),Mt(g.onClose)&&(I.onClose=g.onClose),I.closeButton=E.closeButton,g.closeButton===!1||Pc(g.closeButton)?I.closeButton=g.closeButton:g.closeButton===!0&&(I.closeButton=Pc(E.closeButton)?E.closeButton:!0);let L=b;P.exports.isValidElement(b)&&!vi(b.type)?L=P.exports.cloneElement(b,{closeToast:x,toastProps:I,data:_}):Mt(b)&&(L=b({closeToast:x,toastProps:I,data:_})),E.limit&&E.limit>0&&a.count>E.limit&&$?a.queue.push({toastContent:L,toastProps:I,staleId:m}):ia(p)?setTimeout(()=>{v(L,I,m)},p):v(L,I,m)}function v(b,w,p){const{toastId:m}=w;p&&o.delete(p);const g={content:b,props:w};o.set(m,g),r(S=>[...S,m].filter(k=>k!==p)),en.emit(4,zm(g,g.props.updateId==null?"added":"updated"))}function y(b){const w=new Map,p=Array.from(o.values());return e.newestOnTop&&p.reverse(),p.forEach(m=>{const{position:g}=m.props;w.has(g)||w.set(g,[]),w.get(g).push(m)}),Array.from(w,m=>b(m[0],m[1]))}return{getToastToRender:y,containerRef:i,isToastActive:s}}function Fm(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Um(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function fE(e){const[t,n]=P.exports.useState(!1),[r,i]=P.exports.useState(!1),o=P.exports.useRef(null),s=P.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=P.exports.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=e;P.exports.useEffect(()=>{a.current=e}),P.exports.useEffect(()=>(o.current&&o.current.addEventListener("d",b,{once:!0}),Mt(e.onOpen)&&e.onOpen(P.exports.isValidElement(e.children)&&e.children.props),()=>{const x=a.current;Mt(x.onClose)&&x.onClose(P.exports.isValidElement(x.children)&&x.children.props)}),[]),P.exports.useEffect(()=>(e.pauseOnFocusLoss&&p(),()=>{e.pauseOnFocusLoss&&m()}),[e.pauseOnFocusLoss]);function v(x){if(e.draggable){g();const $=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=$.getBoundingClientRect(),$.style.transition="",s.x=Fm(x.nativeEvent),s.y=Um(x.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=$.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=$.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent/100))}}function y(){if(s.boundingRect){const{top:x,bottom:$,left:I,right:L}=s.boundingRect;e.pauseOnHover&&s.x>=I&&s.x<=L&&s.y>=x&&s.y<=$?w():b()}}function b(){n(!0)}function w(){n(!1)}function p(){document.hasFocus()||w(),window.addEventListener("focus",b),window.addEventListener("blur",w)}function m(){window.removeEventListener("focus",b),window.removeEventListener("blur",w)}function g(){s.didMove=!1,document.addEventListener("mousemove",k),document.addEventListener("mouseup",_),document.addEventListener("touchmove",k),document.addEventListener("touchend",_)}function S(){document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",_)}function k(x){const $=o.current;s.canDrag&&$&&(s.didMove=!0,t&&w(),s.x=Fm(x),s.y=Um(x),e.draggableDirection==="x"?s.delta=s.x-s.start:s.delta=s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),$.style.transform="translate"+e.draggableDirection+"("+s.delta+"px)",$.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function _(){S();const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){i(!0),e.closeToast();return}x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform="translate"+e.draggableDirection+"(0)",x.style.opacity="1"}}const E={onMouseDown:v,onTouchStart:v,onMouseUp:y,onTouchEnd:y};return l&&u&&(E.onMouseEnter=w,E.onMouseLeave=b),f&&(E.onClick=x=>{d&&d(x),s.canCloseOnClick&&c()}),{playToast:b,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:E}}function C1(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return h("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r,children:h("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:h("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}function O1(e){let{delay:t,isRunning:n,closeToast:r,type:i,hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:f}=e;const v={...a,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:o?0:1};l&&(v.transform="scaleX("+u+")");const y=mr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+f,"Toastify__progress-bar--"+i,{["Toastify__progress-bar--rtl"]:c}),b=Mt(s)?s({rtl:c,type:i,defaultClassName:y}):mr(y,s),w={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}};return h("div",{role:"progressbar","aria-hidden":o?"true":"false","aria-label":"notification timer",className:b,style:v,...w})}O1.defaultProps={type:nr.DEFAULT,hide:!1};const pE=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=fE(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:f,position:v,className:y,style:b,bodyClassName:w,bodyStyle:p,progressClassName:m,progressStyle:g,updateId:S,role:k,progress:_,rtl:E,toastId:x,deleteToast:$,isIn:I,isLoading:L,iconOut:j,theme:J}=e,T=mr("Toastify__toast","Toastify__toast-theme--"+J,"Toastify__toast--"+u,{["Toastify__toast--rtl"]:E}),A=Mt(y)?y({rtl:E,position:v,type:u,defaultClassName:T}):mr(T,y),X=!!_,ne={closeToast:d,type:u,theme:J};let R=null;return o===!1||(Mt(o)?R=o(ne):Ze.isValidElement(o)?R=Ze.cloneElement(o,ne):R=C1(ne)),h(f,{isIn:I,done:$,position:v,preventExitTransition:n,nodeRef:r,children:N("div",{id:x,onClick:l,className:A,...i,style:b,ref:r,children:[N("div",{...I&&{role:k},className:Mt(w)?w({type:u}):mr("Toastify__toast-body",w),style:p,children:[j!=null&&h("div",{className:mr("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!L}),children:j}),h("div",{children:s})]}),R,(a||X)&&h(O1,{...S&&!X?{key:"pb-"+S}:{},rtl:E,theme:J,delay:a,isRunning:t,isIn:I,closeToast:d,hide:c,type:u,style:g,className:m,controlledProgress:X,progress:_})]})})},hE=rE({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),Cp=P.exports.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=dE(e),{className:o,style:s,rtl:a,containerId:l}=e;function u(c){const d=mr("Toastify__toast-container","Toastify__toast-container--"+c,{["Toastify__toast-container--rtl"]:a});return Mt(o)?o({position:c,rtl:a,defaultClassName:d}):mr(d,rl(o))}return P.exports.useEffect(()=>{t&&(t.current=r.current)},[]),h("div",{ref:r,className:"Toastify",id:l,children:n((c,d)=>{const f=d.length?{...s}:{...s,pointerEvents:"none"};return h("div",{className:u(c),style:f,children:d.map((v,y)=>{let{content:b,props:w}=v;return P.exports.createElement(pE,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":y+1,"--len":d.length},key:"toast-"+w.key},b)})},"container-"+c)})})});Cp.displayName="ToastContainer";Cp.defaultProps={position:T1.TOP_RIGHT,transition:hE,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:C1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let si=new Map,Zd,zs=[];function mE(e,t){let{containerId:n}=t;const r=si.get(n||Zd);return r?r.getToast(e):null}function I1(){return Math.random().toString(36).substring(2,9)}function gE(e){return e&&(vi(e.toastId)||ia(e.toastId))?e.toastId:I1()}function oa(e,t){return si.size>0?en.emit(0,e,t):zs.push({content:e,options:t}),t.toastId}function Mu(e,t){return{...t,type:t&&t.type||e,toastId:gE(t)}}function Du(e){return(t,n)=>oa(t,Mu(e,n))}function fe(e,t){return oa(e,Mu(nr.DEFAULT,t))}fe.loading=(e,t)=>oa(e,Mu(nr.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function vE(e,t,n){let{pending:r,error:i,success:o}=t,s;r&&(s=vi(r)?fe.loading(r,n):fe.loading(r.render,{...n,...r}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(c,d,f)=>{if(d==null){fe.dismiss(s);return}const v={type:c,...a,...n,data:f},y=vi(d)?{render:d}:d;return s?fe.update(s,{...v,...y}):fe(y.render,{...v,...y}),f},u=Mt(e)?e():e;return u.then(c=>l("success",o,c)).catch(c=>l("error",i,c)),u}fe.promise=vE;fe.success=Du(nr.SUCCESS);fe.info=Du(nr.INFO);fe.error=Du(nr.ERROR);fe.warning=Du(nr.WARNING);fe.warn=fe.warning;fe.dark=(e,t)=>oa(e,Mu(nr.DEFAULT,{theme:"dark",...t}));fe.dismiss=e=>{si.size>0?en.emit(1,e):zs=zs.filter(t=>il(e)&&t.options.toastId!==e)};fe.clearWaitingQueue=function(e){return e===void 0&&(e={}),en.emit(5,e)};fe.isActive=e=>{let t=!1;return si.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t};fe.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=mE(e,t);if(n){const{props:r,content:i}=n,o={...r,...t,toastId:t.toastId||e,updateId:I1()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,oa(s,o)}},0)};fe.done=e=>{fe.update(e,{progress:1})};fe.onChange=e=>(en.on(4,e),()=>{en.off(4,e)});fe.POSITION=T1;fe.TYPE=nr;en.on(2,e=>{Zd=e.containerId||e,si.set(Zd,e),zs.forEach(t=>{en.emit(0,t.content,t.options)}),zs=[]}).on(3,e=>{si.delete(e.containerId||e),si.size===0&&en.off(0).off(1).off(5)});const yE=K.div`
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
    

    ${e=>e.active&&Fe`
        opacity: 1;
        pointer-events: all;
  `}
`,sa=P.exports.createContext(),wE=({children:e})=>{const[t,n]=P.exports.useState(!1),[r,i]=P.exports.useState(!1),[o,s]=P.exports.useState(null),a=P.exports.useCallback(()=>{n(!t)},[t]),l=P.exports.useCallback(f=>{i(!r),s(o===f?null:f)},[r,o]),u=()=>{n(!1)},c=()=>{i(!1)},d=P.exports.useMemo(()=>({isMenuOpen:t,toggleMenu:a,closeMenu:u,isAccordionOpen:r,toggleAccordion:l,closeAccordion:c,accordionClick:o}),[t,a,r,l,o]);return h(sa.Provider,{value:d,children:e})},bE=()=>{const{isMenuOpen:e,closeMenu:t}=P.exports.useContext(sa);return h(yE,{active:e,onClick:t})};var P1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bm=Ze.createContext&&Ze.createContext(P1),Ir=globalThis&&globalThis.__assign||function(){return Ir=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ir.apply(this,arguments)},SE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function R1(e){return e&&e.map(function(t,n){return Ze.createElement(t.tag,Ir({key:n},t.attr),R1(t.child))})}function Pe(e){return function(t){return h(xE,{...Ir({attr:Ir({},e.attr)},t),children:R1(e.child)})}}function xE(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=SE(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),N("svg",{...Ir({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ir(Ir({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[o&&h("title",{children:o}),e.children]})};return Bm!==void 0?h(Bm.Consumer,{children:function(n){return t(n)}}):t(P1)}function _E(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}function EE(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"}},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"}}]})(e)}const kE=K.div`
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
`,TE=()=>{const[e,t]=P.exports.useState(!1);return P.exports.useEffect(()=>{window.addEventListener("scroll",()=>{window.pageYOffset>200?t(!0):t(!1)})},[]),h(St,{children:e&&h(kE,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:h(_E,{})})})};var Fs=function(){return Fs=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Fs.apply(this,arguments)};function CE(e){var t={exports:{}};return e(t,t.exports),t.exports}/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/CE(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)&&o.length){var a=n.apply(null,o);a&&r.push(a)}else if(s==="object")for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()});function ef(e){return P.exports.createElement("svg",Fs({width:"1em",height:"1em",viewBox:"0 0 512 336",xmlns:"http://www.w3.org/2000/svg"},e),P.exports.createElement("g",{fill:"none"},P.exports.createElement("path",{d:"M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",fill:"#FF4B55"}),P.exports.createElement("path",{d:"M85.007 52.732l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.469-21.64 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.8c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.711-3.268 6.8 0zm96.592 6.218l6.035 8.23 9.739-3.046c1.261-.394 2.298 1.044 1.526 2.115l-5.962 8.281 5.906 8.321c.765 1.077-.282 2.508-1.54 2.105l-9.719-3.111-6.089 8.189c-.788 1.06-2.473.506-2.478-.814l-.045-10.205-9.67-3.261c-1.251-.423-1.246-2.195.009-2.609l9.69-3.196.114-10.204c.014-1.319 1.703-1.86 2.484-.795zm-36.742-24.53l10.145 1.102 4.328-9.241c.561-1.196 2.321-.991 2.591.302l2.086 9.988 10.126 1.26c1.311.163 1.66 1.901.513 2.558l-8.855 5.07 1.931 10.02c.25 1.298-1.295 2.166-2.274 1.279l-7.559-6.855-8.932 4.932c-1.156.639-2.461-.563-1.919-1.768l4.183-9.308-7.452-6.972c-.964-.898-.225-2.509 1.088-2.367zm16.038 98.893l-6.035 8.23-9.739-3.046c-1.261-.394-2.298 1.044-1.526 2.115l5.962 8.281-5.906 8.321c-.765 1.077.282 2.508 1.54 2.105l9.719-3.111 6.089 8.189c.788 1.06 2.473.506 2.478-.814l.045-10.205 9.67-3.261c1.252-.423 1.246-2.195-.009-2.609l-9.69-3.196-.114-10.204c-.016-1.318-1.703-1.861-2.484-.795zm36.74-23.051l-10.145 1.102-4.328-9.241c-.561-1.196-2.321-.991-2.591.302l-2.087 9.988-10.126 1.26c-1.311.163-1.66 1.901-.513 2.558l8.855 5.07-1.931 10.02c-.25 1.298 1.295 2.166 2.274 1.279l7.559-6.855 8.932 4.932c1.156.639 2.461-.563 1.919-1.768l-4.183-9.308 7.452-6.972c.967-.898.228-2.509-1.087-2.367z",fill:"#FFE15A"})))}function tf(e){return P.exports.createElement("svg",Fs({width:"1em",height:"1em",viewBox:"0 0 512 336",xmlns:"http://www.w3.org/2000/svg"},e),P.exports.createElement("g",{fill:"none"},P.exports.createElement("path",{d:"M503.172 335.725H8.828A8.829 8.829 0 010 326.897V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",fill:"#41479B"}),P.exports.createElement("path",{d:"M512 9.104a8.829 8.829 0 00-8.828-8.828h-39.495l-163.54 107.147V.276h-88.276v107.147L48.322.276H8.828A8.829 8.829 0 000 9.104v22.831l140.309 91.927H0v88.276h140.309L0 304.066v22.831a8.829 8.829 0 008.828 8.828h39.495l163.54-107.147v107.147h88.276V228.578l163.54 107.147h39.495a8.829 8.829 0 008.828-8.828v-22.831l-140.309-91.927H512v-88.276H371.691L512 31.935V9.104z",fill:"#F5F5F5"}),P.exports.createElement("g",{fill:"#FF4B55"},P.exports.createElement("path",{d:"M512 141.518H282.483V.276h-52.966v141.242H0v52.965h229.517v141.242h52.966V194.483H512z"}),P.exports.createElement("path",{d:"M178.948 212.138L.25 328.135c.625 4.263 4.14 7.59 8.577 7.59h12.159l190.39-123.587-32.428.001v-.001zm167.44 0H313.96l190.113 123.404c4.431-.472 7.928-4.09 7.928-8.646v-7.258l-165.613-107.5zM0 18.849l161.779 105.014h32.428L5.143 1.137C2.123 2.54 0 5.555 0 9.104v9.745zm332.566 105.014L511.693 7.586c-.744-4.122-4.184-7.309-8.521-7.309h-12.647L300.138 123.863h32.428z"}))))}function nf(e){return P.exports.createElement("svg",Fs({width:"1em",height:"1em",viewBox:"0 0 512 336",xmlns:"http://www.w3.org/2000/svg"},e),P.exports.createElement("g",{fill:"none"},P.exports.createElement("path",{d:"M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",fill:"#FF4B55"}),P.exports.createElement("g",{fill:"#F5F5F5"},P.exports.createElement("path",{d:"M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168zm72.569-83.737c0-29.028 21.3-53.091 49.113-57.542 1.51-.242 1.578-2.319.088-2.663a60.413 60.413 0 00-21.793-1c-29.998 4.086-53.186 30.046-53.61 60.318-.483 34.566 27.383 62.712 61.785 62.712 4.683 0 9.23-.547 13.606-1.554 1.489-.342 1.414-2.424-.094-2.666-27.802-4.448-49.095-28.464-49.095-57.605z"}),P.exports.createElement("path",{d:"M122.14 99.795l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0zm40.827 0l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.773-1.014-2.112 0zM142.738 36.79l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0zm-32.552 24.138l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.773-1.014-2.112 0zm64.828 0l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0z"}))))}function OE(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var IE=`.ReactFlagsSelect-module_flagsSelect__2pfa2 {
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
`;OE(IE);function ol(e){return Pe({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"}}]})(e)}function PE(e){return Pe({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function RE(e){return Pe({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"}}]})(e)}const Op="/assets/Facebook.f87a1353.svg",Ip="/assets/Twitter.01261070.svg",Pp="/assets/Instagram.63a08b21.svg",Rp="/assets/Pinterest.076dff25.svg",Lp="/assets/Youtube.5b3c053c.svg",LE=K.div`
   display: none;
   background:  ${e=>e.theme.eerieBlack};
   height: 3rem;

    @media (min-width: 480px) {
        display: block;
        padding: 10px 0;
        border-bottom: 1px solid ${e=>e.theme.cultured};
    }
`,NE=K.div`
    ${Ci}

     @media (min-width: 570px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`,AE=K.ul`

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
`,Vo=K.a`
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
`,$E=K.div`
    @media (min-width: 480px) {
        color: ${e=>e.theme.white};
        font-size: ${e=>e.theme.font3xs};
        text-transform: uppercase;

        b {
            font-weight: 600;
        }
    }
`,ME=K.div`
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
`,DE=()=>{const[e,t]=P.exports.useState(`${window.location.search.substring(window.location.search.length-2)}`),{t:n}=xn(),r=i=>{t(i);const o="https://wizcart.netlify.app/";window.location.replace(o+"?lng="+i)};return h(LE,{children:N(NE,{children:[N(AE,{children:[h("li",{children:h(Vo,{children:h("img",{src:Op,alt:"facebook",title:"facebook"})})}),h("li",{children:h(Vo,{children:h("img",{src:Ip,alt:"twitter",title:"twitter"})})}),h("li",{children:h(Vo,{children:h("img",{src:Rp,alt:"pinterest",title:"pinterest"})})}),h("li",{children:h(Vo,{children:h("img",{src:Pp,alt:"instagram",title:"instagram"})})}),h("li",{children:h(Vo,{children:h("img",{src:Lp,alt:"youtube",title:"youtube"})})})]}),h($E,{children:N("p",{children:[h("b",{children:n("Free Shipping")})," \xA0",n("This Week's Order Over-$55")]})}),N(ME,{children:[h("p",{children:e==="ms"?h(nf,{}):e==="zh"?h(ef,{}):h(tf,{})}),h("p",{children:h(ol,{})}),N("div",{children:[h("button",{onClick:()=>r("ms"),title:n("Malay"),children:h(nf,{})}),h("button",{onClick:()=>r("zh"),title:n("Chinese"),children:h(ef,{})}),h("button",{onClick:()=>r("en"),title:n("English"),children:h(tf,{})})]})]})]})})},Oi="/assets/logo-black.1febdfa1.png";function L1(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"defs",attr:{},child:[{tag:"clipPath",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M124-288l388-672 388 672H124z",clipRule:"evenodd"}}]}]},{tag:"path",attr:{d:"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}},{tag:"path",attr:{d:"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"}}]})(e)}function N1(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]})(e)}function jE(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function zE(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]})(e)}function A1(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(e)}function FE(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}}]})(e)}function UE(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(e)}function Vm(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]})(e)}function $1(e){return Pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function BE(e){return Pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}}]})(e)}function VE(e){return Pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"}}]})(e)}function Hm(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}}]})(e)}function Wm(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function ju(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}}]})(e)}function Na(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(e)}function Aa(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19 13H5v-2h14v2z"}}]})(e)}function HE(e){return Pe({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"}}]})(e)}var M1={exports:{}},D1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=P.exports;function WE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var GE=typeof Object.is=="function"?Object.is:WE,qE=bo.useState,KE=bo.useEffect,YE=bo.useLayoutEffect,XE=bo.useDebugValue;function QE(e,t){var n=t(),r=qE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return YE(function(){i.value=n,i.getSnapshot=t,Rc(i)&&o({inst:i})},[e,n,t]),KE(function(){return Rc(i)&&o({inst:i}),e(function(){Rc(i)&&o({inst:i})})},[e]),XE(n),n}function Rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!GE(e,n)}catch{return!0}}function JE(e,t){return t()}var ZE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?JE:QE;D1.useSyncExternalStore=bo.useSyncExternalStore!==void 0?bo.useSyncExternalStore:ZE;(function(e){e.exports=D1})(M1);var j1={exports:{}},z1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu=P.exports,ek=M1.exports;function tk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nk=typeof Object.is=="function"?Object.is:tk,rk=ek.useSyncExternalStore,ik=zu.useRef,ok=zu.useEffect,sk=zu.useMemo,ak=zu.useDebugValue;z1.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=ik(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=sk(function(){function l(v){if(!u){if(u=!0,c=v,v=r(v),i!==void 0&&s.hasValue){var y=s.value;if(i(y,v))return d=y}return d=v}if(y=d,nk(c,v))return y;var b=r(v);return i!==void 0&&i(y,b)?y:(c=v,d=b)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=rk(e,o[0],o[1]);return ok(function(){s.hasValue=!0,s.value=a},[a]),ak(a),a};(function(e){e.exports=z1})(j1);function lk(e){e()}let F1=lk;const uk=e=>F1=e,ck=()=>F1,$r=Ze.createContext(null);function U1(){return P.exports.useContext($r)}const dk=()=>{throw new Error("uSES not initialized!")};let B1=dk;const fk=e=>{B1=e},pk=(e,t)=>e===t;function hk(e=$r){const t=e===$r?U1:()=>P.exports.useContext(e);return function(r,i=pk){const{store:o,subscription:s,getServerState:a}=t(),l=B1(s.addNestedSub,o.getState,a||o.getState,r,i);return P.exports.useDebugValue(l),l}}const yi=hk();function mk(){const e=ck();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Gm={notify(){},get:()=>[]};function gk(e,t){let n,r=Gm;function i(d){return l(),r.subscribe(d)}function o(){r.notify()}function s(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=mk())}function u(){n&&(n(),n=void 0,r.clear(),r=Gm)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const vk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yk=vk?P.exports.useLayoutEffect:P.exports.useEffect;function wk({store:e,context:t,children:n,serverState:r}){const i=P.exports.useMemo(()=>{const a=gk(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),o=P.exports.useMemo(()=>e.getState(),[e]);return yk(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,o]),h((t||$r).Provider,{value:i,children:n})}function V1(e=$r){const t=e===$r?U1:()=>P.exports.useContext(e);return function(){const{store:r}=t();return r}}const bk=V1();function Sk(e=$r){const t=e===$r?bk:V1(e);return function(){return t().dispatch}}const Co=Sk();fk(j1.exports.useSyncExternalStoreWithSelector);uk(Xl.exports.unstable_batchedUpdates);/**
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
 */const H1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},xk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},W1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(f=64)),r.push(n[c],n[d],n[f],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(H1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw Error();const f=o<<2|a>>4;if(r.push(f),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},_k=function(e){const t=H1(e);return W1.encodeByteArray(t,!0)},G1=function(e){return _k(e).replace(/\./g,"")},Ek=function(e){try{return W1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Dl(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!kk(n)||(e[n]=Dl(e[n],t[n]));return e}function kk(e){return e!=="__proto__"}/**
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
 */class Tk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ck(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function q1(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ok(){return typeof self=="object"&&self.self===self}function K1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Y1(){const e=Ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function jl(){return typeof indexedDB=="object"}function Ik(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const Pk="FirebaseError";class Dt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Pk,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Rk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Dt(i,a,r)}}function Rk(e,t){return e.replace(Lk,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Lk=/\{\$([^}]+)}/g;/**
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
 */function qm(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Nk(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function rf(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Km(o)&&Km(s)){if(!rf(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Km(e){return e!==null&&typeof e=="object"}/**
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
 */function Oo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Zi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function os(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function X1(e,t){const n=new Ak(e,t);return n.subscribe.bind(n)}class Ak{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$k(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $k(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Lc(){}/**
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
 */function me(e){return e&&e._delegate?e._delegate:e}class Mr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class Mk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Tk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jk(t))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Qr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qr){return this.instances.has(t)}getOptions(t=Qr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dk(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qr){return this.component?this.component.multipleInstances?t:Qr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dk(e){return e===Qr?void 0:e}function jk(e){return e.instantiationMode==="EAGER"}/**
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
 */class zk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Mk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ap=[];var _e;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_e||(_e={}));const Q1={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},Fk=_e.INFO,Uk={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Bk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Uk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $p{constructor(t){this.name=t,this._logLevel=Fk,this._logHandler=Bk,this._userLogHandler=null,Ap.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _e))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Q1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...t),this._logHandler(this,_e.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...t),this._logHandler(this,_e.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...t),this._logHandler(this,_e.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...t),this._logHandler(this,_e.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...t),this._logHandler(this,_e.ERROR,...t)}}function Vk(e){Ap.forEach(t=>{t.setLogLevel(e)})}function Hk(e,t){for(const n of Ap){let r=null;t&&t.level&&(r=Q1[t.level]),e===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r!=null?r:i.logLevel)&&e({level:_e[o].toLowerCase(),message:a,args:s,type:i.name})}}}const Wk=(e,t)=>t.some(n=>e instanceof n);let Ym,Xm;function Gk(){return Ym||(Ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qk(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J1=new WeakMap,of=new WeakMap,Z1=new WeakMap,Nc=new WeakMap,Mp=new WeakMap;function Kk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Pr(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&J1.set(n,e)}).catch(()=>{}),Mp.set(t,e),t}function Yk(e){if(of.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});of.set(e,t)}let sf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return of.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Z1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xk(e){sf=e(sf)}function Qk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ac(this),t,...n);return Z1.set(r,t.sort?t.sort():[t]),Pr(r)}:qk().includes(e)?function(...t){return e.apply(Ac(this),t),Pr(J1.get(this))}:function(...t){return Pr(e.apply(Ac(this),t))}}function Jk(e){return typeof e=="function"?Qk(e):(e instanceof IDBTransaction&&Yk(e),Wk(e,Gk())?new Proxy(e,sf):e)}function Pr(e){if(e instanceof IDBRequest)return Kk(e);if(Nc.has(e))return Nc.get(e);const t=Jk(e);return t!==e&&(Nc.set(e,t),Mp.set(t,e)),t}const Ac=e=>Mp.get(e);function Zk(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Pr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Pr(s.result),l.oldVersion,l.newVersion,Pr(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const eT=["get","getKey","getAll","getAllKeys","count"],tT=["put","add","delete","clear"],$c=new Map;function Qm(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($c.get(t))return $c.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=tT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eT.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $c.set(t,o),o}Xk(e=>({...e,get:(t,n,r)=>Qm(t,n)||e.get(t,n,r),has:(t,n)=>!!Qm(t,n)||e.has(t,n)}));/**
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
 */class nT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const af="@firebase/app",Jm="0.7.32";/**
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
 */const wi=new $p("@firebase/app"),iT="@firebase/app-compat",oT="@firebase/analytics-compat",sT="@firebase/analytics",aT="@firebase/app-check-compat",lT="@firebase/app-check",uT="@firebase/auth",cT="@firebase/auth-compat",dT="@firebase/database",fT="@firebase/database-compat",pT="@firebase/functions",hT="@firebase/functions-compat",mT="@firebase/installations",gT="@firebase/installations-compat",vT="@firebase/messaging",yT="@firebase/messaging-compat",wT="@firebase/performance",bT="@firebase/performance-compat",ST="@firebase/remote-config",xT="@firebase/remote-config-compat",_T="@firebase/storage",ET="@firebase/storage-compat",kT="@firebase/firestore",TT="@firebase/firestore-compat",CT="firebase",OT="9.9.4";/**
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
 */const bi="[DEFAULT]",IT={[af]:"fire-core",[iT]:"fire-core-compat",[sT]:"fire-analytics",[oT]:"fire-analytics-compat",[lT]:"fire-app-check",[aT]:"fire-app-check-compat",[uT]:"fire-auth",[cT]:"fire-auth-compat",[dT]:"fire-rtdb",[fT]:"fire-rtdb-compat",[pT]:"fire-fn",[hT]:"fire-fn-compat",[mT]:"fire-iid",[gT]:"fire-iid-compat",[vT]:"fire-fcm",[yT]:"fire-fcm-compat",[wT]:"fire-perf",[bT]:"fire-perf-compat",[ST]:"fire-rc",[xT]:"fire-rc-compat",[_T]:"fire-gcs",[ET]:"fire-gcs-compat",[kT]:"fire-fst",[TT]:"fire-fst-compat","fire-js":"fire-js",[CT]:"fire-js-all"};/**
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
 */const Dr=new Map,Us=new Map;function zl(e,t){try{e.container.addComponent(t)}catch(n){wi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ew(e,t){e.container.addOrOverwriteComponent(t)}function Si(e){const t=e.name;if(Us.has(t))return wi.debug(`There were multiple attempts to register component ${t}.`),!1;Us.set(t,e);for(const n of Dr.values())zl(n,e);return!0}function tw(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function PT(e,t,n=bi){tw(e,t).clearInstance(n)}function RT(){Us.clear()}/**
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
 */const LT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jr=new Ii("app","Firebase",LT);/**
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
 */class NT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Io=OT;function nw(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:bi,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw jr.create("bad-app-name",{appName:String(r)});const i=Dr.get(r);if(i){if(rf(e,i.options)&&rf(n,i.config))return i;throw jr.create("duplicate-app",{appName:r})}const o=new zk(r);for(const a of Us.values())o.addComponent(a);const s=new NT(e,n,o);return Dr.set(r,s),s}function AT(e=bi){const t=Dr.get(e);if(!t)throw jr.create("no-app",{appName:e});return t}function $T(){return Array.from(Dr.values())}async function rw(e){const t=e.name;Dr.has(t)&&(Dr.delete(t),await Promise.all(e.container.getProviders().map(n=>n.delete())),e.isDeleted=!0)}function Rr(e,t,n){var r;let i=(r=IT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),wi.warn(a.join(" "));return}Si(new Mr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function iw(e,t){if(e!==null&&typeof e!="function")throw jr.create("invalid-log-argument");Hk(e,t)}function ow(e){Vk(e)}/**
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
 */const MT="firebase-heartbeat-database",DT=1,Bs="firebase-heartbeat-store";let Mc=null;function sw(){return Mc||(Mc=Zk(MT,DT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bs)}}}).catch(e=>{throw jr.create("idb-open",{originalErrorMessage:e.message})})),Mc}async function jT(e){var t;try{return(await sw()).transaction(Bs).objectStore(Bs).get(aw(e))}catch(n){if(n instanceof Dt)wi.warn(n.message);else{const r=jr.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});wi.warn(r.message)}}}async function Zm(e,t){var n;try{const i=(await sw()).transaction(Bs,"readwrite");return await i.objectStore(Bs).put(t,aw(e)),i.done}catch(r){if(r instanceof Dt)wi.warn(r.message);else{const i=jr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});wi.warn(i.message)}}}function aw(e){return`${e.name}!${e.options.appId}`}/**
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
 */const zT=1024,FT=30*24*60*60*1e3;class UT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=eg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=FT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eg(),{heartbeatsToSend:n,unsentEntries:r}=BT(this._heartbeatsCache.heartbeats),i=G1(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function eg(){return new Date().toISOString().substring(0,10)}function BT(e,t=zT){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),tg(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?Ik().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function tg(e){return G1(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function HT(e){Si(new Mr("platform-logger",t=>new nT(t),"PRIVATE")),Si(new Mr("heartbeat",t=>new UT(t),"PRIVATE")),Rr(af,Jm,e),Rr(af,Jm,"esm2017"),Rr("fire-js","")}HT("");const WT=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Io,_DEFAULT_ENTRY_NAME:bi,_addComponent:zl,_addOrOverwriteComponent:ew,_apps:Dr,_clearComponents:RT,_components:Us,_getProvider:tw,_registerComponent:Si,_removeServiceInstance:PT,deleteApp:rw,getApp:AT,getApps:$T,initializeApp:nw,onLog:iw,registerVersion:Rr,setLogLevel:ow,FirebaseError:Dt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class GT{constructor(t,n){this._delegate=t,this.firebase=n,zl(t,new Mr("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),rw(this._delegate)))}_getService(t,n=bi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(t,n=bi){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){zl(this._delegate,t)}_addOrOverwriteComponent(t){ew(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const qT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},ng=new Ii("app-compat","Firebase",qT);/**
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
 */function KT(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Rr,setLogLevel:ow,onLog:iw,apps:null,SDK_VERSION:Io,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:WT}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete t[u]}function i(u){if(u=u||bi,!qm(t,u))throw ng.create("no-app",{appName:u});return t[u]}i.App=e;function o(u,c={}){const d=nw(u,c);if(qm(t,d.name))return t[d.name];const f=new e(d,n);return t[d.name]=f,f}function s(){return Object.keys(t).map(u=>t[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Si(u)&&u.type==="PUBLIC"){const f=(v=i())=>{if(typeof v[d]!="function")throw ng.create("invalid-app-argument",{appName:c});return v[d]()};u.serviceProps!==void 0&&Dl(f,u.serviceProps),n[d]=f,e.prototype[d]=function(...v){return this._getService.bind(this,c).apply(this,u.multipleInstances?v:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function lw(){const e=KT(GT);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:lw,extendNamespace:t,createSubscribe:X1,ErrorFactory:Ii,deepExtend:Dl});function t(n){Dl(e,n)}return e}const YT=lw();/**
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
 */const rg=new $p("@firebase/app-compat"),XT="@firebase/app-compat",QT="0.1.33";/**
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
 */function JT(e){Rr(XT,QT,e)}/**
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
 */if(Ok()&&self.firebase!==void 0){rg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&rg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Hr=YT;JT();var ZT="firebase",eC="9.9.4";/**
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
 */Hr.registerVersion(ZT,eC,"app-compat");const tC=K.div`
    padding: 20px 0;
    border-bottom: 1px solid  ${e=>e.theme.cultured};
    height: 6rem;

    @media (min-width: 480px) {
        padding: 20px 0;
    }
`,nC=K.div`
    ${Ci}

    @media (min-width: 570px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 768px) {
        gap: 80px;
    }


`,rC=K.a`
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
`,iC=K.div`
    position: relative;

    ${e=>e.focus&&Fe`
    z-index: 20;
  `}

  

    @media (min-width: 768px) {
        flex-grow: 1;
    }
`,oC=K.input`
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
`,sC=K.button`
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

        ${e=>e.focus&&Fe`
            background: ${t=>t.theme.primary};
            color: ${t=>t.theme.eerieBlack};

            &:hover {
                color: ${t=>t.theme.eerieBlack};
            }
        `}
`,aC=K.button`
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

        ${e=>e.focus&&Fe`
            visibility: visible;
            color: ${t=>t.theme.eerieBlack};
        `}
`,lC=K.div`
     display: none;

     @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
     }
`,Dc=K.button`
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
`,ig=K.span`
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
`,uC=K.button`
 @media (min-width: 1024px) {
    position: relative;
    margin-top: -6px;
    font-size: 32px;
    color:  ${e=>e.theme.eerieBlack};
    padding: 5px;
    transition:  ${e=>e.theme.transitionTiming};

    .user-icon {
        margin-top: 6px;
    }

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

        ${e=>e.closeDropdown&&Fe`
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

`,cC=K.button`
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

            ${e=>e.closeDropdown&&Fe`
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
        left: 81%;
    }

    &:hover {
                transform: scale(1.1);
    }
`,dC=()=>{const{toggleMenu:e,isMenuOpen:t,closeMenu:n}=P.exports.useContext(sa),[r,i]=P.exports.useState(!1),{t:o}=xn(),s=na(),a=Co(),{userInfo:l}=yi(f=>({...f.userLogin})),u=()=>{e(),document.querySelector(".mobile-nav-bar").style.display="none"},c=()=>{i(!0)},d=()=>{Hr.auth().signOut(),a({type:"USER_LOGOUT",payload:null}),s("./login")};return h(tC,{children:N(nC,{children:[h(rC,{children:h("img",{onClick:()=>s("/"),src:Oi,alt:"WizCart's logo",title:"WizCart"})}),N(iC,{focus:t,children:[h(oC,{type:"search",name:"search",className:"search-field",placeholder:`${o("Search for a product name")}...`,onFocus:u}),h(aC,{focus:t,onClick:n,children:h(HE,{title:o("Close")})}),h(sC,{focus:t,children:h(UE,{title:o("Search")})})]}),N(cC,{closeDropdown:r,children:[l?N("div",{className:"avatarContainer ",children:[h("p",{className:"avatar",onClick:()=>i(!1),children:l.displayName?l.displayName.split(" ").map(f=>f[0]).join().replace(",",""):l.email.substring(0,2)}),h("p",{className:"avatar-icon",children:h(ol,{})})]}):N("div",{className:"avatarContainer",children:[h(RE,{title:o("Profile"),onClick:()=>i(!1)}),h("p",{className:"avatar-icon",children:h(ol,{})})]}),N("div",{className:"profile-dropdown",children:[h("div",{children:l?h("p",{children:l.displayName?l.displayName:l.email.split("@")[0]}):N(St,{children:[N("p",{children:[o("Sign in or create an account"),":"]}),N("ul",{children:[h("li",{children:o("For faster checkout")}),h("li",{children:o("To access order history")})]})]})}),h("div",{children:l?N("p",{className:"icon-activity",children:[h("span",{className:"icon",children:h(Wm,{})}),h("span",{onClick:()=>{d(),c()},children:o("Logout")})]}):N(St,{children:[N("p",{className:"icon-activity",children:[h("span",{className:"icon",children:h(Hm,{})}),h("span",{onClick:()=>{s(`/${encodeURI(o("login"))}`),c()},children:o("Sign in")})]}),N("p",{className:"icon-activity",children:[h("span",{className:"icon",children:h(Vm,{})}),h("span",{onClick:()=>{s(`/${encodeURI(o("register"))}`),c()},children:o("Register")})]})]})})]})]}),N(lC,{children:[N(uC,{closeDropdown:r,onMouseEnter:()=>i(!1),children:[l?N("div",{className:"avatarContainer",children:[h("p",{className:"avatar-icon",children:h(ol,{})}),h("p",{className:"avatar",onClick:()=>i(!1),children:l.displayName?l.displayName.split(" ").map(f=>f[0]).join().replace(",",""):l.email.substring(0,2)})]}):h(BE,{title:o("Profile"),className:"user-icon"}),N("div",{className:"profile-dropdown",children:[h("div",{children:l?h("p",{children:l.displayName?l.displayName:l.email.split("@")[0]}):N(St,{children:[N("p",{children:[o("Sign in or create an account"),":"]}),N("ul",{children:[h("li",{children:o("For faster checkout")}),h("li",{children:o("To access order history")})]})]})}),h("div",{children:l?N("p",{className:"icon-activity",children:[h("span",{className:"icon",children:h(Wm,{})}),h("span",{onClick:()=>{d(),c()},children:o("Logout")})]}):N(St,{children:[N("p",{className:"icon-activity",children:[h("span",{className:"icon",children:h(Hm,{})}),h("span",{onClick:()=>{s(`/${encodeURI(o("login"))}`),c()},children:o("Sign in")})]}),N("p",{className:"icon-activity",children:[h("span",{className:"icon",children:h(Vm,{})}),h("span",{onClick:()=>{s(`/${encodeURI(o("register"))}`),c()},children:o("Register")})]})]})})]})]}),h(Dc,{children:h(VE,{title:o("Shop")})}),N(Dc,{children:[h(A1,{title:o("Wishlist")}),h(ig,{children:"0"})]}),N(Dc,{children:[h($1,{title:o("Shopping Cart")}),h(ig,{children:"0"})]})]})]})})},fC=K.div`
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

`;function pC(e){return Pe({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{stroke:"#000",strokeWidth:"2",d:"M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"}}]})(e)}const hC=()=>{const{toggleMenu:e}=P.exports.useContext(sa);return N(fC,{children:[h("button",{onClick:e,children:h(FE,{title:"Menu"})}),N("button",{children:[h($1,{title:"Shopping Cart"}),h("span",{children:"0"})]}),h("button",{children:h(pC,{title:"Home"})}),N("button",{children:[h(A1,{title:"Wishlist"}),h("span",{children:"0"})]}),h("button",{onClick:e,children:h(EE,{title:"Category"})})]})},mC=K.nav`
    ${I2};

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

    ${e=>e.active&&Fe`
         left: 0;
        visibility: visible;
  `}
`,gC=K.div`
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
`,vC=K.ul`
     margin-bottom: 30px;
`,Ai=K.li`
    border-bottom: 1px solid  ${e=>e.theme.cultured};
`,Ho=K.p`
    color: ${e=>e.theme.eerieBlack};
    font-size:  ${e=>e.theme.fontsm};
    font-weight: 500;
    padding: 12px 0;
`,Wo=K.button`
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
    
`,Go=K.ul`
    margin-left: 10px;
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: 0.6s ease-in-out;

    ${e=>e.toggle&&Fe`
        max-height: 148px;
        visibility: visible;
  `}
`,Ye=K.li`
    a {
        padding: 6px 0;
        font-size: ${e=>e.theme.fontsm};
        color:  ${e=>e.theme.onyx};
        font-weight: 300;

        &:hover {
            color: ${e=>e.theme.primary};
        }
    }
`,yC=K.div`

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
`,wC=K.ul`
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
`,bC=()=>{const{isMenuOpen:e,closeMenu:t,toggleAccordion:n,isAccordionOpen:r,accordionClick:i}=P.exports.useContext(sa),{t:o}=xn(),s=a=>{const l="https://wizcart.netlify.app/";window.location.replace(l+"?lng="+a)};return N(mC,{active:e,className:"mobile-nav-bar",children:[N(gC,{children:[h("h2",{children:o("Menu")}),h("button",{onClick:t,children:h(PE,{title:o("Close")})})]}),N(vC,{children:[h(Ai,{children:h(Ho,{children:o("Home")})}),N(Ai,{children:[N(Wo,{onClick:()=>n(1),children:[h(Ho,{children:"Marks & Spencer"}),h("div",{children:r&&i===1?h(Aa,{className:"remove-icon",title:o("close")}):h(Na,{className:"add-icon",title:o("open")})})]}),h(Go,{toggle:r,children:i===1&&N(St,{children:[h(Ye,{children:h("a",{href:"#",children:o("Women's")})}),h(Ye,{children:h("a",{href:"#",children:o("Men's")})}),h(Ye,{children:h("a",{href:"#",children:o("Kids'")})}),h(Ye,{children:h("a",{href:"#",children:o("Beauty")})})]})})]}),N(Ai,{children:[N(Wo,{onClick:()=>n(2),children:[h(Ho,{children:"Harry Potter's"}),h("div",{children:r&&i===2?h(Aa,{className:"remove-icon",title:o("close")}):h(Na,{className:"add-icon",title:o("open")})})]}),h(Go,{toggle:r,children:i===2&&N(St,{children:[h(Ye,{children:h("a",{href:"#",children:o("Wands")})}),h(Ye,{children:h("a",{href:"#",children:o("Trunks")})}),h(Ye,{children:h("a",{href:"#",children:o("Clothing")})}),h(Ye,{children:N("a",{href:"#",children:[o("Sweets")," & ",o("Treats")]})})]})})]}),N(Ai,{children:[N(Wo,{onClick:()=>n(3),children:[h(Ho,{children:"James Smith & Sons"}),h("div",{children:r&&i===3?h(Aa,{className:"remove-icon",title:o("close")}):h(Na,{className:"add-icon",title:o("open")})})]}),h(Go,{toggle:r,children:i===3&&N(St,{children:[h(Ye,{children:h("a",{href:"#",children:o("Folding Umbrellas")})}),h(Ye,{children:h("a",{href:"#",children:o("Sun Umbrellas")})}),h(Ye,{children:h("a",{href:"#",children:o("Walking Sticks")})}),h(Ye,{children:h("a",{href:"#",children:o("Seat Sticks")})})]})})]}),N(Ai,{children:[N(Wo,{onClick:()=>n(4),children:[h(Ho,{children:"Twinings"}),h("div",{children:r&&i===4?h(Aa,{className:"remove-icon",title:o("close")}):h(Na,{className:"add-icon",title:o("open")})})]}),h(Go,{toggle:r,children:i===4&&N(St,{children:[h(Ye,{children:h("a",{href:"#",children:o("Tea")})}),h(Ye,{children:h("a",{href:"#",children:o("Wellbeing Drinks")})}),h(Ye,{children:h("a",{href:"#",children:o("Teaware")})}),h(Ye,{children:h("a",{href:"#",children:o("Treats")})})]})})]})]}),N(yC,{children:[h("ul",{children:N(Ai,{children:[N(Wo,{onClick:()=>n(5),children:[h("p",{className:"menu-title",children:o("Language")}),r&&i===5?h(jE,{}):h(zE,{})]}),h(Go,{toggle:r,children:i===5&&N(St,{children:[h(Ye,{children:h("button",{onClick:()=>s("ms"),title:o("Malay"),children:h(nf,{})})}),h(Ye,{children:h("button",{onClick:()=>s("zh"),title:o("Chinese"),children:h(ef,{})})}),h(Ye,{children:h("button",{onClick:()=>s("en"),title:o("English"),children:h(tf,{})})})]})})]})}),N(wC,{children:[h("li",{children:h("a",{href:"#",children:h("img",{src:Op,alt:"facebook",title:"facebook"})})}),h("li",{children:h("a",{href:"#",children:h("img",{src:Ip,alt:"twitter",title:"twitter"})})}),h("li",{children:h("a",{href:"#",className:"social-link",children:h("img",{src:Rp,alt:"pinterest",title:"pinterest"})})}),h("li",{children:h("a",{href:"#",className:"social-link",children:h("img",{src:Pp,alt:"instagram",title:"instagram"})})}),h("li",{children:h("a",{href:"#",children:h("img",{src:Lp,alt:"youtube",title:"youtube"})})})]})]})]})},SC=K.header``,xC=()=>N(SC,{children:[h(DE,{}),h(dC,{}),h(hC,{}),h(bC,{})]});function og(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Dp(e={},t={}){Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:og(t[n])&&og(e[n])&&Object.keys(t[n]).length>0&&Dp(e[n],t[n])})}const uw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ft(){const e=typeof document<"u"?document:{};return Dp(e,uw),e}const _C={document:uw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function st(){const e=typeof window<"u"?window:{};return Dp(e,_C),e}function EC(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(n){t.__proto__=n}})}class gr extends Array{constructor(t){typeof t=="number"?super(t):(super(...t||[]),EC(this))}}function aa(e=[]){const t=[];return e.forEach(n=>{Array.isArray(n)?t.push(...aa(n)):t.push(n)}),t}function cw(e,t){return Array.prototype.filter.call(e,t)}function kC(e){const t=[];for(let n=0;n<e.length;n+=1)t.indexOf(e[n])===-1&&t.push(e[n]);return t}function TC(e,t){if(typeof e!="string")return[e];const n=[],r=t.querySelectorAll(e);for(let i=0;i<r.length;i+=1)n.push(r[i]);return n}function Z(e,t){const n=st(),r=ft();let i=[];if(!t&&e instanceof gr)return e;if(!e)return new gr(i);if(typeof e=="string"){const o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){let s="div";o.indexOf("<li")===0&&(s="ul"),o.indexOf("<tr")===0&&(s="tbody"),(o.indexOf("<td")===0||o.indexOf("<th")===0)&&(s="tr"),o.indexOf("<tbody")===0&&(s="table"),o.indexOf("<option")===0&&(s="select");const a=r.createElement(s);a.innerHTML=o;for(let l=0;l<a.childNodes.length;l+=1)i.push(a.childNodes[l])}else i=TC(e.trim(),t||r)}else if(e.nodeType||e===n||e===r)i.push(e);else if(Array.isArray(e)){if(e instanceof gr)return e;i=e}return new gr(kC(i))}Z.fn=gr.prototype;function CC(...e){const t=aa(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.add(...t)}),this}function OC(...e){const t=aa(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.remove(...t)}),this}function IC(...e){const t=aa(e.map(n=>n.split(" ")));this.forEach(n=>{t.forEach(r=>{n.classList.toggle(r)})})}function PC(...e){const t=aa(e.map(n=>n.split(" ")));return cw(this,n=>t.filter(r=>n.classList.contains(r)).length>0).length>0}function RC(e,t){if(arguments.length===1&&typeof e=="string")return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(e,t);else for(const r in e)this[n][r]=e[r],this[n].setAttribute(r,e[r]);return this}function LC(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function NC(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function AC(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration=typeof e!="string"?`${e}ms`:e;return this}function $C(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);function o(u){const c=u.target;if(!c)return;const d=u.target.dom7EventData||[];if(d.indexOf(u)<0&&d.unshift(u),Z(c).is(n))r.apply(c,d);else{const f=Z(c).parents();for(let v=0;v<f.length;v+=1)Z(f[v]).is(n)&&r.apply(f[v],d)}}function s(u){const c=u&&u.target?u.target.dom7EventData||[]:[];c.indexOf(u)<0&&c.unshift(u),r.apply(this,c)}const a=t.split(" ");let l;for(let u=0;u<this.length;u+=1){const c=this[u];if(n)for(l=0;l<a.length;l+=1){const d=a[l];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[d]||(c.dom7LiveListeners[d]=[]),c.dom7LiveListeners[d].push({listener:r,proxyListener:o}),c.addEventListener(d,o,i)}else for(l=0;l<a.length;l+=1){const d=a[l];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[d]||(c.dom7Listeners[d]=[]),c.dom7Listeners[d].push({listener:r,proxyListener:s}),c.addEventListener(d,s,i)}}return this}function MC(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);const o=t.split(" ");for(let s=0;s<o.length;s+=1){const a=o[s];for(let l=0;l<this.length;l+=1){const u=this[l];let c;if(!n&&u.dom7Listeners?c=u.dom7Listeners[a]:n&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[a]),c&&c.length)for(let d=c.length-1;d>=0;d-=1){const f=c[d];r&&f.listener===r||r&&f.listener&&f.listener.dom7proxy&&f.listener.dom7proxy===r?(u.removeEventListener(a,f.proxyListener,i),c.splice(d,1)):r||(u.removeEventListener(a,f.proxyListener,i),c.splice(d,1))}}}return this}function DC(...e){const t=st(),n=e[0].split(" "),r=e[1];for(let i=0;i<n.length;i+=1){const o=n[i];for(let s=0;s<this.length;s+=1){const a=this[s];if(t.CustomEvent){const l=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0});a.dom7EventData=e.filter((u,c)=>c>0),a.dispatchEvent(l),a.dom7EventData=[],delete a.dom7EventData}}}return this}function jC(e){const t=this;function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))}return e&&t.on("transitionend",n),this}function zC(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function FC(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function UC(){if(this.length>0){const e=st(),t=ft(),n=this[0],r=n.getBoundingClientRect(),i=t.body,o=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,a=n===e?e.scrollY:n.scrollTop,l=n===e?e.scrollX:n.scrollLeft;return{top:r.top+a-o,left:r.left+l-s}}return null}function BC(){const e=st();return this[0]?e.getComputedStyle(this[0],null):{}}function VC(e,t){const n=st();let r;if(arguments.length===1)if(typeof e=="string"){if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(r=0;r<this.length;r+=1)for(const i in e)this[r].style[i]=e[i];return this}if(arguments.length===2&&typeof e=="string"){for(r=0;r<this.length;r+=1)this[r].style[e]=t;return this}return this}function HC(e){return e?(this.forEach((t,n)=>{e.apply(t,[t,n])}),this):this}function WC(e){const t=cw(this,e);return Z(t)}function GC(e){if(typeof e>"u")return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function qC(e){if(typeof e>"u")return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function KC(e){const t=st(),n=ft(),r=this[0];let i,o;if(!r||typeof e>"u")return!1;if(typeof e=="string"){if(r.matches)return r.matches(e);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(r.msMatchesSelector)return r.msMatchesSelector(e);for(i=Z(e),o=0;o<i.length;o+=1)if(i[o]===r)return!0;return!1}if(e===n)return r===n;if(e===t)return r===t;if(e.nodeType||e instanceof gr){for(i=e.nodeType?[e]:e,o=0;o<i.length;o+=1)if(i[o]===r)return!0;return!1}return!1}function YC(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function XC(e){if(typeof e>"u")return this;const t=this.length;if(e>t-1)return Z([]);if(e<0){const n=t+e;return n<0?Z([]):Z([this[n]])}return Z([this[e]])}function QC(...e){let t;const n=ft();for(let r=0;r<e.length;r+=1){t=e[r];for(let i=0;i<this.length;i+=1)if(typeof t=="string"){const o=n.createElement("div");for(o.innerHTML=t;o.firstChild;)this[i].appendChild(o.firstChild)}else if(t instanceof gr)for(let o=0;o<t.length;o+=1)this[i].appendChild(t[o]);else this[i].appendChild(t)}return this}function JC(e){const t=ft();let n,r;for(n=0;n<this.length;n+=1)if(typeof e=="string"){const i=t.createElement("div");for(i.innerHTML=e,r=i.childNodes.length-1;r>=0;r-=1)this[n].insertBefore(i.childNodes[r],this[n].childNodes[0])}else if(e instanceof gr)for(r=0;r<e.length;r+=1)this[n].insertBefore(e[r],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function ZC(e){return this.length>0?e?this[0].nextElementSibling&&Z(this[0].nextElementSibling).is(e)?Z([this[0].nextElementSibling]):Z([]):this[0].nextElementSibling?Z([this[0].nextElementSibling]):Z([]):Z([])}function eO(e){const t=[];let n=this[0];if(!n)return Z([]);for(;n.nextElementSibling;){const r=n.nextElementSibling;e?Z(r).is(e)&&t.push(r):t.push(r),n=r}return Z(t)}function tO(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&Z(t.previousElementSibling).is(e)?Z([t.previousElementSibling]):Z([]):t.previousElementSibling?Z([t.previousElementSibling]):Z([])}return Z([])}function nO(e){const t=[];let n=this[0];if(!n)return Z([]);for(;n.previousElementSibling;){const r=n.previousElementSibling;e?Z(r).is(e)&&t.push(r):t.push(r),n=r}return Z(t)}function rO(e){const t=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(e?Z(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return Z(t)}function iO(e){const t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)e?Z(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return Z(t)}function oO(e){let t=this;return typeof e>"u"?Z([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function sO(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(e);for(let i=0;i<r.length;i+=1)t.push(r[i])}return Z(t)}function aO(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].children;for(let i=0;i<r.length;i+=1)(!e||Z(r[i]).is(e))&&t.push(r[i])}return Z(t)}function lO(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}const sg={addClass:CC,removeClass:OC,hasClass:PC,toggleClass:IC,attr:RC,removeAttr:LC,transform:NC,transition:AC,on:$C,off:MC,trigger:DC,transitionEnd:jC,outerWidth:zC,outerHeight:FC,styles:BC,offset:UC,css:VC,each:HC,html:GC,text:qC,is:KC,index:YC,eq:XC,append:QC,prepend:JC,next:ZC,nextAll:eO,prev:tO,prevAll:nO,parent:rO,parents:iO,closest:oO,find:sO,children:aO,filter:WC,remove:lO};Object.keys(sg).forEach(e=>{Object.defineProperty(Z.fn,e,{value:sg[e],writable:!0})});function uO(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Fl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Vs(){return Date.now()}function cO(e){const t=st();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function dO(e,t){t===void 0&&(t="x");const n=st();let r,i,o;const s=cO(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function $a(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function fO(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ft(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!fO(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const a=i[o],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&($a(e[a])&&$a(r[a])?r[a].__swiper__?e[a]=r[a]:Ft(e[a],r[a]):!$a(e[a])&&$a(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:Ft(e[a],r[a])):e[a]=r[a])}}}return e}function Ma(e,t,n){e.style.setProperty(t,n)}function dw(e){let{swiper:t,targetPosition:n,side:r}=e;const i=st(),o=-t.translate;let s=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",c=(f,v)=>u==="next"&&f>=v||u==="prev"&&f<=v,d=()=>{a=new Date().getTime(),s===null&&(s=a);const f=Math.max(Math.min((a-s)/l,1),0),v=.5-Math.cos(f*Math.PI)/2;let y=o+v*(n-o);if(c(y,n)&&(y=n),t.wrapperEl.scrollTo({[r]:y}),c(y,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:y})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(d)};d()}let jc;function pO(){const e=st(),t=ft();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let r=!1;try{const i=Object.defineProperty({},"passive",{get(){r=!0}});e.addEventListener("testPassiveListener",null,i)}catch{}return r}(),gestures:function(){return"ongesturestart"in e}()}}function fw(){return jc||(jc=pO()),jc}let zc;function hO(e){let{userAgent:t}=e===void 0?{}:e;const n=fw(),r=st(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let c=o.match(/(iPad).*OS\s([\d_]+)/);const d=o.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let y=i==="MacIntel";const b=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&y&&n.touch&&b.indexOf(`${a}x${l}`)>=0&&(c=o.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),y=!1),u&&!v&&(s.os="android",s.android=!0),(c||f||d)&&(s.os="ios",s.ios=!0),s}function mO(e){return e===void 0&&(e={}),zc||(zc=hO(e)),zc}let Fc;function gO(){const e=st();function t(){const n=e.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function vO(){return Fc||(Fc=gO()),Fc}function yO(e){let{swiper:t,on:n,emit:r}=e;const i=st();let o=null,s=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(d=>{s=i.requestAnimationFrame(()=>{const{width:f,height:v}=t;let y=f,b=v;d.forEach(w=>{let{contentBoxSize:p,contentRect:m,target:g}=w;g&&g!==t.el||(y=m?m.width:(p[0]||p).inlineSize,b=m?m.height:(p[0]||p).blockSize)}),(y!==f||b!==v)&&a()})}),o.observe(t.el))},u=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},c=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}function wO(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=st(),a=function(c,d){d===void 0&&(d={});const f=s.MutationObserver||s.WebkitMutationObserver,v=new f(y=>{if(y.length===1){i("observerUpdate",y[0]);return}const b=function(){i("observerUpdate",y[0])};s.requestAnimationFrame?s.requestAnimationFrame(b):s.setTimeout(b,0)});v.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),o.push(v)},l=()=>{if(!!t.params.observer){if(t.params.observeParents){const c=t.$el.parents();for(let d=0;d<c.length;d+=1)a(c[d])}a(t.$el[0],{childList:t.params.observeSlideChildren}),a(t.$wrapperEl[0],{attributes:!1})}},u=()=>{o.forEach(c=>{c.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}const bO={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function SO(){const e=this;let t,n;const r=e.$el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r[0].clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r[0].clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10),n=n-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function xO(){const e=this;function t(I){return e.isHorizontal()?I:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[I]}function n(I,L){return parseFloat(I.getPropertyValue(t(L))||0)}const r=e.params,{$wrapperEl:i,size:o,rtlTranslate:s,wrongRTL:a}=e,l=e.virtual&&r.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),d=l?e.virtual.slides.length:c.length;let f=[];const v=[],y=[];let b=r.slidesOffsetBefore;typeof b=="function"&&(b=r.slidesOffsetBefore.call(e));let w=r.slidesOffsetAfter;typeof w=="function"&&(w=r.slidesOffsetAfter.call(e));const p=e.snapGrid.length,m=e.slidesGrid.length;let g=r.spaceBetween,S=-b,k=0,_=0;if(typeof o>"u")return;typeof g=="string"&&g.indexOf("%")>=0&&(g=parseFloat(g.replace("%",""))/100*o),e.virtualSize=-g,s?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(Ma(e.wrapperEl,"--swiper-centered-offset-before",""),Ma(e.wrapperEl,"--swiper-centered-offset-after",""));const E=r.grid&&r.grid.rows>1&&e.grid;E&&e.grid.initSlides(d);let x;const $=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(I=>typeof r.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<d;I+=1){x=0;const L=c.eq(I);if(E&&e.grid.updateSlide(I,L,d,t),L.css("display")!=="none"){if(r.slidesPerView==="auto"){$&&(c[I].style[t("width")]="");const j=getComputedStyle(L[0]),J=L[0].style.transform,T=L[0].style.webkitTransform;if(J&&(L[0].style.transform="none"),T&&(L[0].style.webkitTransform="none"),r.roundLengths)x=e.isHorizontal()?L.outerWidth(!0):L.outerHeight(!0);else{const A=n(j,"width"),X=n(j,"padding-left"),ne=n(j,"padding-right"),R=n(j,"margin-left"),D=n(j,"margin-right"),Q=j.getPropertyValue("box-sizing");if(Q&&Q==="border-box")x=A+R+D;else{const{clientWidth:se,offsetWidth:B}=L[0];x=A+X+ne+R+D+(B-se)}}J&&(L[0].style.transform=J),T&&(L[0].style.webkitTransform=T),r.roundLengths&&(x=Math.floor(x))}else x=(o-(r.slidesPerView-1)*g)/r.slidesPerView,r.roundLengths&&(x=Math.floor(x)),c[I]&&(c[I].style[t("width")]=`${x}px`);c[I]&&(c[I].swiperSlideSize=x),y.push(x),r.centeredSlides?(S=S+x/2+k/2+g,k===0&&I!==0&&(S=S-o/2-g),I===0&&(S=S-o/2-g),Math.abs(S)<1/1e3&&(S=0),r.roundLengths&&(S=Math.floor(S)),_%r.slidesPerGroup===0&&f.push(S),v.push(S)):(r.roundLengths&&(S=Math.floor(S)),(_-Math.min(e.params.slidesPerGroupSkip,_))%e.params.slidesPerGroup===0&&f.push(S),v.push(S),S=S+x+g),e.virtualSize+=x+g,k=x,_+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+w,s&&a&&(r.effect==="slide"||r.effect==="coverflow")&&i.css({width:`${e.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+r.spaceBetween}px`}),E&&e.grid.updateWrapperSize(x,f,t),!r.centeredSlides){const I=[];for(let L=0;L<f.length;L+=1){let j=f[L];r.roundLengths&&(j=Math.floor(j)),f[L]<=e.virtualSize-o&&I.push(j)}f=I,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(f.length===0&&(f=[0]),r.spaceBetween!==0){const I=e.isHorizontal()&&s?"marginLeft":t("marginRight");c.filter((L,j)=>r.cssMode?j!==c.length-1:!0).css({[I]:`${g}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let I=0;y.forEach(j=>{I+=j+(r.spaceBetween?r.spaceBetween:0)}),I-=r.spaceBetween;const L=I-o;f=f.map(j=>j<0?-b:j>L?L+w:j)}if(r.centerInsufficientSlides){let I=0;if(y.forEach(L=>{I+=L+(r.spaceBetween?r.spaceBetween:0)}),I-=r.spaceBetween,I<o){const L=(o-I)/2;f.forEach((j,J)=>{f[J]=j-L}),v.forEach((j,J)=>{v[J]=j+L})}}if(Object.assign(e,{slides:c,snapGrid:f,slidesGrid:v,slidesSizesGrid:y}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Ma(e.wrapperEl,"--swiper-centered-offset-before",`${-f[0]}px`),Ma(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const I=-e.snapGrid[0],L=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(j=>j+I),e.slidesGrid=e.slidesGrid.map(j=>j+L)}if(d!==u&&e.emit("slidesLengthChange"),f.length!==p&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==m&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!l&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const I=`${r.containerModifierClass}backface-hidden`,L=e.$el.hasClass(I);d<=r.maxBackfaceHiddenSlides?L||e.$el.addClass(I):L&&e.$el.removeClass(I)}}function _O(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=a=>r?t.slides.filter(l=>parseInt(l.getAttribute("data-swiper-slide-index"),10)===a)[0]:t.slides.eq(a)[0];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||Z([])).each(a=>{n.push(a)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const a=t.activeIndex+o;if(a>t.slides.length&&!r)break;n.push(s(a))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const a=n[o].offsetHeight;i=a>i?a:i}(i||i===0)&&t.$wrapperEl.css("height",`${i}px`)}function EO(){const e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}function kO(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let a=0;a<r.length;a+=1){const l=r[a];let u=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const c=(s+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+n.spaceBetween),d=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+n.spaceBetween),f=-(s-u),v=f+t.slidesSizesGrid[a];(f>=0&&f<t.size-1||v>1&&v<=t.size||f<=0&&v>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(a),r.eq(a).addClass(n.slideVisibleClass)),l.progress=i?-c:c,l.originalProgress=i?-d:d}t.visibleSlides=Z(t.visibleSlides)}function TO(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s}=t;const a=o,l=s;r===0?(i=0,o=!0,s=!0):(i=(e-t.minTranslate())/r,o=i<=0,s=i>=1),Object.assign(t,{progress:i,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!a&&t.emit("reachBeginning toEdge"),s&&!l&&t.emit("reachEnd toEdge"),(a&&!o||l&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}function CO(){const e=this,{slides:t,params:n,$wrapperEl:r,activeIndex:i,realIndex:o}=e,s=e.virtual&&n.virtual.enabled;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);let a;s?a=e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`):a=t.eq(i),a.addClass(n.slideActiveClass),n.loop&&(a.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));let l=a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&l.length===0&&(l=t.eq(0),l.addClass(n.slideNextClass));let u=a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&u.length===0&&(u=t.eq(-1),u.addClass(n.slidePrevClass)),n.loop&&(l.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),u.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()}function OO(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:r,snapGrid:i,params:o,activeIndex:s,realIndex:a,snapIndex:l}=t;let u=e,c;if(typeof u>"u"){for(let f=0;f<r.length;f+=1)typeof r[f+1]<"u"?n>=r[f]&&n<r[f+1]-(r[f+1]-r[f])/2?u=f:n>=r[f]&&n<r[f+1]&&(u=f+1):n>=r[f]&&(u=f);o.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0)}if(i.indexOf(n)>=0)c=i.indexOf(n);else{const f=Math.min(o.slidesPerGroupSkip,u);c=f+Math.floor((u-f)/o.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),u===s){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}const d=parseInt(t.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(t,{snapIndex:c,realIndex:d,previousIndex:s,activeIndex:u}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function IO(e){const t=this,n=t.params,r=Z(e).closest(`.${n.slideClass}`)[0];let i=!1,o;if(r){for(let s=0;s<t.slides.length;s+=1)if(t.slides[s]===r){i=!0,o=s;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(Z(r).attr("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const PO={updateSize:SO,updateSlides:xO,updateAutoHeight:_O,updateSlidesOffset:EO,updateSlidesProgress:kO,updateProgress:TO,updateSlidesClasses:CO,updateActiveIndex:OO,updateClickedSlide:IO};function RO(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,$wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=dO(o[0],e);return r&&(s=-s),s||0}function LO(e,t){const n=this,{rtlTranslate:r,params:i,$wrapperEl:o,wrapperEl:s,progress:a}=n;let l=0,u=0;const c=0;n.isHorizontal()?l=r?-e:e:u=e,i.roundLengths&&(l=Math.floor(l),u=Math.floor(u)),i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-u:i.virtualTranslate||o.transform(`translate3d(${l}px, ${u}px, ${c}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:u;let d;const f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(e-n.minTranslate())/f,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function NO(){return-this.snapGrid[0]}function AO(){return-this.snapGrid[this.snapGrid.length-1]}function $O(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:a}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const l=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,o.updateProgress(c),s.cssMode){const d=o.isHorizontal();if(t===0)a[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return dw({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(f){!o||o.destroyed||f.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}const MO={getTranslate:RO,setTranslate:LO,minTranslate:NO,maxTranslate:AO,translateTo:$O};function DO(e,t){const n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)}function pw(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let a=r;if(a||(o>s?a="next":o<s?a="prev":a="reset"),t.emit(`transition${i}`),n&&o!==s){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function jO(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),pw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function zO(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),pw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}const FO={setTransition:DO,transitionStart:jO,transitionEnd:zO};function UO(e,t,n,r,i){if(e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e!="number"&&typeof e!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if(typeof e=="string"){const g=parseInt(e,10);if(!isFinite(g))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=g}const o=this;let s=e;s<0&&(s=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:f,wrapperEl:v,enabled:y}=o;if(o.animating&&a.preventInteractionOnTransition||!y&&!r&&!i)return!1;const b=Math.min(o.params.slidesPerGroupSkip,s);let w=b+Math.floor((s-b)/o.params.slidesPerGroup);w>=l.length&&(w=l.length-1),(d||a.initialSlide||0)===(c||0)&&n&&o.emit("beforeSlideChangeStart");const p=-l[w];if(o.updateProgress(p),a.normalizeSlideIndex)for(let g=0;g<u.length;g+=1){const S=-Math.floor(p*100),k=Math.floor(u[g]*100),_=Math.floor(u[g+1]*100);typeof u[g+1]<"u"?S>=k&&S<_-(_-k)/2?s=g:S>=k&&S<_&&(s=g+1):S>=k&&(s=g)}if(o.initialized&&s!==d&&(!o.allowSlideNext&&p<o.translate&&p<o.minTranslate()||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==s))return!1;let m;if(s>d?m="next":s<d?m="prev":m="reset",f&&-p===o.translate||!f&&p===o.translate)return o.updateActiveIndex(s),a.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),a.effect!=="slide"&&o.setTranslate(p),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(a.cssMode){const g=o.isHorizontal(),S=f?p:-p;if(t===0){const k=o.virtual&&o.params.virtual.enabled;k&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),v[g?"scrollLeft":"scrollTop"]=S,k&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._swiperImmediateVirtual=!1})}else{if(!o.support.smoothScroll)return dw({swiper:o,targetPosition:S,side:g?"left":"top"}),!0;v.scrollTo({[g?"left":"top"]:S,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(S){!o||o.destroyed||S.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.$wrapperEl[0].addEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd)),!0}function BO(e,t,n,r){if(e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"){const s=parseInt(e,10);if(!isFinite(s))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=s}const i=this;let o=e;return i.params.loop&&(o+=i.loopedSlides),i.slideTo(o,t,n,r)}function VO(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{animating:i,enabled:o,params:s}=r;if(!o)return r;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a;if(s.loop){if(i&&s.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function HO(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,animating:o,snapGrid:s,slidesGrid:a,rtlTranslate:l,enabled:u}=r;if(!u)return r;if(i.loop){if(o&&i.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}const c=l?r.translate:-r.translate;function d(w){return w<0?-Math.floor(Math.abs(w)):Math.floor(w)}const f=d(c),v=s.map(w=>d(w));let y=s[v.indexOf(f)-1];if(typeof y>"u"&&i.cssMode){let w;s.forEach((p,m)=>{f>=p&&(w=m)}),typeof w<"u"&&(y=s[w>0?w-1:w])}let b=0;if(typeof y<"u"&&(b=a.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const w=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(w,e,t,n)}return r.slideTo(b,e,t,n)}function WO(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function GO(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),a=s+Math.floor((o-s)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],c=i.snapGrid[a+1];l-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],c=i.snapGrid[a];l-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function qO(){const e=this,{params:t,$wrapperEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;if(t.loop){if(e.animating)return;o=parseInt(Z(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Fl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Fl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}const KO={slideTo:UO,slideToLoop:BO,slideNext:VO,slidePrev:HO,slideReset:WO,slideToClosest:GO,slideToClickedSlide:qO};function YO(){const e=this,t=ft(),{params:n,$wrapperEl:r}=e,i=r.children().length>0?Z(r.children()[0].parentNode):r;i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let o=i.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){const l=n.slidesPerGroup-o.length%n.slidesPerGroup;if(l!==n.slidesPerGroup){for(let u=0;u<l;u+=1){const c=Z(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);i.append(c)}o=i.children(`.${n.slideClass}`)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=o.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>o.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=o.length);const s=[],a=[];o.each((l,u)=>{Z(l).attr("data-swiper-slide-index",u)});for(let l=0;l<e.loopedSlides;l+=1){const u=l-Math.floor(l/o.length)*o.length;a.push(o.eq(u)[0]),s.unshift(o.eq(o.length-u-1)[0])}for(let l=0;l<a.length;l+=1)i.append(Z(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let l=s.length-1;l>=0;l-=1)i.prepend(Z(s[l].cloneNode(!0)).addClass(n.slideDuplicateClass))}function XO(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:n,loopedSlides:r,allowSlidePrev:i,allowSlideNext:o,snapGrid:s,rtlTranslate:a}=e;let l;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-s[t]-e.getTranslate();t<r?(l=n.length-r*3+t,l+=r,e.slideTo(l,0,!1,!0)&&c!==0&&e.setTranslate((a?-e.translate:e.translate)-c)):t>=n.length-r&&(l=-n.length+t+r,l+=r,e.slideTo(l,0,!1,!0)&&c!==0&&e.setTranslate((a?-e.translate:e.translate)-c)),e.allowSlidePrev=i,e.allowSlideNext=o,e.emit("loopFix")}function QO(){const e=this,{$wrapperEl:t,params:n,slides:r}=e;t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),r.removeAttr("data-swiper-slide-index")}const JO={loopCreate:YO,loopFix:XO,loopDestroy:QO};function ZO(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}function eI(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const tI={setGrabCursor:ZO,unsetGrabCursor:eI};function nI(e,t){t===void 0&&(t=this);function n(r){if(!r||r===ft()||r===st())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function rI(e){const t=this,n=ft(),r=st(),i=t.touchEventsData,{params:o,touches:s,enabled:a}=t;if(!a||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let u=Z(l.target);if(o.touchEventsTarget==="wrapper"&&!u.closest(t.wrapperEl).length||(i.isTouchEvent=l.type==="touchstart",!i.isTouchEvent&&"which"in l&&l.which===3)||!i.isTouchEvent&&"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;!!o.noSwipingClass&&o.noSwipingClass!==""&&l.target&&l.target.shadowRoot&&e.path&&e.path[0]&&(u=Z(e.path[0]));const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,f=!!(l.target&&l.target.shadowRoot);if(o.noSwiping&&(f?nI(d,u[0]):u.closest(d)[0])){t.allowClick=!0;return}if(o.swipeHandler&&!u.closest(o.swipeHandler)[0])return;s.currentX=l.type==="touchstart"?l.targetTouches[0].pageX:l.pageX,s.currentY=l.type==="touchstart"?l.targetTouches[0].pageY:l.pageY;const v=s.currentX,y=s.currentY,b=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,w=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(b&&(v<=w||v>=r.innerWidth-w))if(b==="prevent")e.preventDefault();else return;if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=v,s.startY=y,i.touchStartTime=Vs(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1),l.type!=="touchstart"){let p=!0;u.is(i.focusableElements)&&(p=!1,u[0].nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&Z(n.activeElement).is(i.focusableElements)&&n.activeElement!==u[0]&&n.activeElement.blur();const m=p&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||m)&&!u[0].isContentEditable&&l.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function iI(e){const t=ft(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:a}=n;if(!a)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}if(r.isTouchEvent&&l.type!=="touchmove")return;const u=l.type==="touchmove"&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),c=l.type==="touchmove"?u.pageX:l.pageX,d=l.type==="touchmove"?u.pageY:l.pageY;if(l.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){Z(l.target).is(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Vs());return}if(r.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate())return}if(r.isTouchEvent&&t.activeElement&&l.target===t.activeElement&&Z(l.target).is(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;o.currentX=c,o.currentY=d;const f=o.currentX-o.startX,v=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(f**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let p;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:f*f+v*v>=25&&(p=Math.atan2(Math.abs(v),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?p>i.touchAngle:90-p>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation(),r.isMoved||(i.loop&&!i.cssMode&&n.loopFix(),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)),n.emit("sliderMove",l),r.isMoved=!0;let y=n.isHorizontal()?f:v;o.diff=y,y*=i.touchRatio,s&&(y=-y),n.swipeDirection=y>0?"prev":"next",r.currentTranslate=y+r.startTranslate;let b=!0,w=i.resistanceRatio;if(i.touchReleaseOnEdges&&(w=0),y>0&&r.currentTranslate>n.minTranslate()?(b=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**w)):y<0&&r.currentTranslate<n.maxTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**w)),b&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function oI(e){const t=this,n=t.touchEventsData,{params:r,touches:i,rtlTranslate:o,slidesGrid:s,enabled:a}=t;if(!a)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",l),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}r.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Vs(),c=u-n.touchStartTime;if(t.allowClick){const m=l.path||l.composedPath&&l.composedPath();t.updateClickedSlide(m&&m[0]||l.target),t.emit("tap click",l),c<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",l)}if(n.lastClickTime=Vs(),Fl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||i.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let d;if(r.followFinger?d=o?t.translate:-t.translate:d=-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:d});return}let f=0,v=t.slidesSizesGrid[0];for(let m=0;m<s.length;m+=m<r.slidesPerGroupSkip?1:r.slidesPerGroup){const g=m<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof s[m+g]<"u"?d>=s[m]&&d<s[m+g]&&(f=m,v=s[m+g]-s[m]):d>=s[m]&&(f=m,v=s[s.length-1]-s[s.length-2])}let y=null,b=null;r.rewind&&(t.isBeginning?b=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const w=(d-s[f])/v,p=f<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(c>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(w>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?y:f+p):t.slideTo(f)),t.swipeDirection==="prev"&&(w>1-r.longSwipesRatio?t.slideTo(f+p):b!==null&&w<0&&Math.abs(w)>r.longSwipesRatio?t.slideTo(b):t.slideTo(f))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(l.target===t.navigation.nextEl||l.target===t.navigation.prevEl)?l.target===t.navigation.nextEl?t.slideTo(f+p):t.slideTo(f):(t.swipeDirection==="next"&&t.slideTo(y!==null?y:f+p),t.swipeDirection==="prev"&&t.slideTo(b!==null?b:f))}}function ag(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function sI(e){const t=this;!t.enabled||t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function aI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let lg=!1;function lI(){}const hw=(e,t)=>{const n=ft(),{params:r,touchEvents:i,el:o,wrapperEl:s,device:a,support:l}=e,u=!!r.nested,c=t==="on"?"addEventListener":"removeEventListener",d=t;if(!l.touch)o[c](i.start,e.onTouchStart,!1),n[c](i.move,e.onTouchMove,u),n[c](i.end,e.onTouchEnd,!1);else{const f=i.start==="touchstart"&&l.passiveListener&&r.passiveListeners?{passive:!0,capture:!1}:!1;o[c](i.start,e.onTouchStart,f),o[c](i.move,e.onTouchMove,l.passiveListener?{passive:!1,capture:u}:u),o[c](i.end,e.onTouchEnd,f),i.cancel&&o[c](i.cancel,e.onTouchEnd,f)}(r.preventClicks||r.preventClicksPropagation)&&o[c]("click",e.onClick,!0),r.cssMode&&s[c]("scroll",e.onScroll),r.updateOnWindowResize?e[d](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",ag,!0):e[d]("observerUpdate",ag,!0)};function uI(){const e=this,t=ft(),{params:n,support:r}=e;e.onTouchStart=rI.bind(e),e.onTouchMove=iI.bind(e),e.onTouchEnd=oI.bind(e),n.cssMode&&(e.onScroll=aI.bind(e)),e.onClick=sI.bind(e),r.touch&&!lg&&(t.addEventListener("touchstart",lI),lg=!0),hw(e,"on")}function cI(){hw(this,"off")}const dI={attachEvents:uI,detachEvents:cI},ug=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function fI(){const e=this,{activeIndex:t,initialized:n,loopedSlides:r=0,params:i,$el:o}=e,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const u=(a in s?s[a]:void 0)||e.originalParams,c=ug(e,i),d=ug(e,u),f=i.enabled;c&&!d?(o.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(o.addClass(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&o.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(w=>{const p=i[w]&&i[w].enabled,m=u[w]&&u[w].enabled;p&&!m&&e[w].disable(),!p&&m&&e[w].enable()});const v=u.direction&&u.direction!==i.direction,y=i.loop&&(u.slidesPerView!==i.slidesPerView||v);v&&n&&e.changeDirection(),Ft(e.params,u);const b=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),f&&!b?e.disable():!f&&b&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",u),y&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-r+e.loopedSlides,0,!1)),e.emit("breakpoint",u)}function pI(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=st(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:o*l,point:a}}return{value:a,point:a}});s.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<s.length;a+=1){const{point:l,value:u}=s[a];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}const hI={setBreakpoint:fI,getBreakpoint:pI};function mI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function gI(){const e=this,{classNames:t,params:n,rtl:r,$el:i,device:o,support:s}=e,a=mI(["initialized",n.direction,{"pointer-events":!s.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.addClass([...t].join(" ")),e.emitContainerClasses()}function vI(){const e=this,{$el:t,classNames:n}=e;t.removeClass(n.join(" ")),e.emitContainerClasses()}const yI={addClasses:gI,removeClasses:vI};function wI(e,t,n,r,i,o){const s=st();let a;function l(){o&&o()}!Z(e).parent("picture")[0]&&(!e.complete||!i)&&t?(a=new s.Image,a.onload=l,a.onerror=l,r&&(a.sizes=r),n&&(a.srcset=n),t&&(a.src=t)):l()}function bI(){const e=this;e.imagesToLoad=e.$el.find("img");function t(){typeof e>"u"||e===null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}for(let n=0;n<e.imagesToLoad.length;n+=1){const r=e.imagesToLoad[n];e.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),!0,t)}}const SI={loadImage:wI,preloadImages:bI};function xI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const _I={checkOverflow:xI},cg={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function EI(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ft(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in o)){Ft(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ft(t,r)}}const Uc={eventsEmitter:bO,update:PO,translate:MO,transition:FO,slide:KO,loop:JO,grabCursor:tI,events:dI,breakpoints:hI,checkOverflow:_I,classes:yI,images:SI},Bc={};class wt{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];if(i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Ft({},n),t&&!n.el&&(n.el=t),n.el&&Z(n.el).length>1){const u=[];return Z(n.el).each(c=>{const d=Ft({},n,{el:c});u.push(new wt(d))}),u}const s=this;s.__swiper__=!0,s.support=fw(),s.device=mO({userAgent:n.userAgent}),s.browser=vO(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const a={};s.modules.forEach(u=>{u({swiper:s,extendParams:EI(n,a),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const l=Ft({},cg,a);return s.params=Ft({},l,Bc,n),s.originalParams=Ft({},s.params),s.passedParams=Ft({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(u=>{s.on(u,s.params.on[u])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),s.$=Z,Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:Z(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEvents:function(){const c=["touchstart","touchmove","touchend","touchcancel"],d=["pointerdown","pointermove","pointerup"];return s.touchEventsTouch={start:c[0],move:c[1],end:c[2],cancel:c[3]},s.touchEventsDesktop={start:d[0],move:d[1],end:d[2]},s.support.touch||!s.params.simulateTouch?s.touchEventsTouch:s.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:Vs(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;!t.enabled||(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.each(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:a,size:l,activeIndex:u}=r;let c=1;if(i.centeredSlides){let d=o[u].swiperSlideSize,f;for(let v=u+1;v<o.length;v+=1)o[v]&&!f&&(d+=o[v].swiperSlideSize,c+=1,d>l&&(f=!0));for(let v=u-1;v>=0;v-=1)o[v]&&!f&&(d+=o[v].swiperSlideSize,c+=1,d>l&&(f=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?s[d]+a[d]-s[u]<l:s[d]-s[u]<l)&&(c+=1);else for(let d=u-1;d>=0;d-=1)s[u]-s[d]<l&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let o;t.params.freeMode&&t.params.freeMode.enabled?(i(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?o=t.slideTo(t.slides.length-1,0,!1,!0):o=t.slideTo(t.activeIndex,0,!1,!0),o||i()),r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.$el.removeClass(`${r.params.containerModifierClass}${i}`).addClass(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.each(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.$el.addClass(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.$el.removeClass(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;const r=Z(t||n.params.el);if(t=r[0],!t)return!1;t.swiper=n;const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){const a=Z(t.shadowRoot.querySelector(i()));return a.children=l=>r.children(l),a}return r.children?r.children(i()):Z(r).children(i())})();if(s.length===0&&n.params.createElements){const l=ft().createElement("div");s=Z(l),l.className=n.params.wrapperClass,r.append(l),r.children(`.${n.params.slideClass}`).each(u=>{s.append(u)})}return Object.assign(n,{$el:r,el:t,$wrapperEl:s,wrapperEl:s[0],mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl"),wrongRTL:s.css("display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.params.loop&&n.loopCreate(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.preloadImages&&n.preloadImages(),n.params.loop?n.slideTo(n.params.initialSlide+n.loopedSlides,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.attachEvents(),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,$el:o,$wrapperEl:s,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o.removeAttr("style"),s.removeAttr("style"),a&&a.length&&a.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.$el[0].swiper=null,uO(r)),r.destroyed=!0),null}static extendDefaults(t){Ft(Bc,t)}static get extendedDefaults(){return Bc}static get defaults(){return cg}static installModule(t){wt.prototype.__modules__||(wt.prototype.__modules__=[]);const n=wt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>wt.installModule(n)),wt):(wt.installModule(t),wt)}}Object.keys(Uc).forEach(e=>{Object.keys(Uc[e]).forEach(t=>{wt.prototype[t]=Uc[e][t]})});wt.use([yO,wO]);function mw(e,t,n,r){const i=ft();return e.params.createElements&&Object.keys(r).forEach(o=>{if(!n[o]&&n.auto===!0){let s=e.$el.children(`.${r[o]}`)[0];s||(s=i.createElement("div"),s.className=r[o],e.$el.append(s)),n[o]=s,t[o]=s}}),n}function kI(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function o(y){let b;return y&&(b=Z(y),t.params.uniqueNavElements&&typeof y=="string"&&b.length>1&&t.$el.find(y).length===1&&(b=t.$el.find(y))),b}function s(y,b){const w=t.params.navigation;y&&y.length>0&&(y[b?"addClass":"removeClass"](w.disabledClass),y[0]&&y[0].tagName==="BUTTON"&&(y[0].disabled=b),t.params.watchOverflow&&t.enabled&&y[t.isLocked?"addClass":"removeClass"](w.lockClass))}function a(){if(t.params.loop)return;const{$nextEl:y,$prevEl:b}=t.navigation;s(b,t.isBeginning&&!t.params.rewind),s(y,t.isEnd&&!t.params.rewind)}function l(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function c(){const y=t.params.navigation;if(t.params.navigation=mw(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;const b=o(y.nextEl),w=o(y.prevEl);b&&b.length>0&&b.on("click",u),w&&w.length>0&&w.on("click",l),Object.assign(t.navigation,{$nextEl:b,nextEl:b&&b[0],$prevEl:w,prevEl:w&&w[0]}),t.enabled||(b&&b.addClass(y.lockClass),w&&w.addClass(y.lockClass))}function d(){const{$nextEl:y,$prevEl:b}=t.navigation;y&&y.length&&(y.off("click",u),y.removeClass(t.params.navigation.disabledClass)),b&&b.length&&(b.off("click",l),b.removeClass(t.params.navigation.disabledClass))}r("init",()=>{t.params.navigation.enabled===!1?v():(c(),a())}),r("toEdge fromEdge lock unlock",()=>{a()}),r("destroy",()=>{d()}),r("enable disable",()=>{const{$nextEl:y,$prevEl:b}=t.navigation;y&&y[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),b&&b[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)}),r("click",(y,b)=>{const{$nextEl:w,$prevEl:p}=t.navigation,m=b.target;if(t.params.navigation.hideOnClick&&!Z(m).is(p)&&!Z(m).is(w)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===m||t.pagination.el.contains(m)))return;let g;w?g=w.hasClass(t.params.navigation.hiddenClass):p&&(g=p.hasClass(t.params.navigation.hiddenClass)),i(g===!0?"navigationShow":"navigationHide"),w&&w.toggleClass(t.params.navigation.hiddenClass),p&&p.toggleClass(t.params.navigation.hiddenClass)}});const f=()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),c(),a()},v=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),d()};Object.assign(t.navigation,{enable:f,disable:v,update:a,init:c,destroy:d})}function $i(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function TI(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:w=>w,formatFractionTotal:w=>w,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let s,a=0;function l(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0}function u(w,p){const{bulletActiveClass:m}=t.params.pagination;w[p]().addClass(`${m}-${p}`)[p]().addClass(`${m}-${p}-${p}`)}function c(){const w=t.rtl,p=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,g=t.pagination.$el;let S;const k=t.params.loop?Math.ceil((m-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(S=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),S>m-1-t.loopedSlides*2&&(S-=m-t.loopedSlides*2),S>k-1&&(S-=k),S<0&&t.params.paginationType!=="bullets"&&(S=k+S)):typeof t.snapIndex<"u"?S=t.snapIndex:S=t.activeIndex||0,p.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const _=t.pagination.bullets;let E,x,$;if(p.dynamicBullets&&(s=_.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),g.css(t.isHorizontal()?"width":"height",`${s*(p.dynamicMainBullets+4)}px`),p.dynamicMainBullets>1&&t.previousIndex!==void 0&&(a+=S-(t.previousIndex-t.loopedSlides||0),a>p.dynamicMainBullets-1?a=p.dynamicMainBullets-1:a<0&&(a=0)),E=Math.max(S-a,0),x=E+(Math.min(_.length,p.dynamicMainBullets)-1),$=(x+E)/2),_.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${p.bulletActiveClass}${I}`).join(" ")),g.length>1)_.each(I=>{const L=Z(I),j=L.index();j===S&&L.addClass(p.bulletActiveClass),p.dynamicBullets&&(j>=E&&j<=x&&L.addClass(`${p.bulletActiveClass}-main`),j===E&&u(L,"prev"),j===x&&u(L,"next"))});else{const I=_.eq(S),L=I.index();if(I.addClass(p.bulletActiveClass),p.dynamicBullets){const j=_.eq(E),J=_.eq(x);for(let T=E;T<=x;T+=1)_.eq(T).addClass(`${p.bulletActiveClass}-main`);if(t.params.loop)if(L>=_.length){for(let T=p.dynamicMainBullets;T>=0;T-=1)_.eq(_.length-T).addClass(`${p.bulletActiveClass}-main`);_.eq(_.length-p.dynamicMainBullets-1).addClass(`${p.bulletActiveClass}-prev`)}else u(j,"prev"),u(J,"next");else u(j,"prev"),u(J,"next")}}if(p.dynamicBullets){const I=Math.min(_.length,p.dynamicMainBullets+4),L=(s*I-s)/2-$*s,j=w?"right":"left";_.css(t.isHorizontal()?j:"top",`${L}px`)}}if(p.type==="fraction"&&(g.find($i(p.currentClass)).text(p.formatFractionCurrent(S+1)),g.find($i(p.totalClass)).text(p.formatFractionTotal(k))),p.type==="progressbar"){let _;p.progressbarOpposite?_=t.isHorizontal()?"vertical":"horizontal":_=t.isHorizontal()?"horizontal":"vertical";const E=(S+1)/k;let x=1,$=1;_==="horizontal"?x=E:$=E,g.find($i(p.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${x}) scaleY(${$})`).transition(t.params.speed)}p.type==="custom"&&p.renderCustom?(g.html(p.renderCustom(t,S+1,k)),i("paginationRender",g[0])):i("paginationUpdate",g[0]),t.params.watchOverflow&&t.enabled&&g[t.isLocked?"addClass":"removeClass"](p.lockClass)}function d(){const w=t.params.pagination;if(l())return;const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,m=t.pagination.$el;let g="";if(w.type==="bullets"){let S=t.params.loop?Math.ceil((p-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&S>p&&(S=p);for(let k=0;k<S;k+=1)w.renderBullet?g+=w.renderBullet.call(t,k,w.bulletClass):g+=`<${w.bulletElement} class="${w.bulletClass}"></${w.bulletElement}>`;m.html(g),t.pagination.bullets=m.find($i(w.bulletClass))}w.type==="fraction"&&(w.renderFraction?g=w.renderFraction.call(t,w.currentClass,w.totalClass):g=`<span class="${w.currentClass}"></span> / <span class="${w.totalClass}"></span>`,m.html(g)),w.type==="progressbar"&&(w.renderProgressbar?g=w.renderProgressbar.call(t,w.progressbarFillClass):g=`<span class="${w.progressbarFillClass}"></span>`,m.html(g)),w.type!=="custom"&&i("paginationRender",t.pagination.$el[0])}function f(){t.params.pagination=mw(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const w=t.params.pagination;if(!w.el)return;let p=Z(w.el);p.length!==0&&(t.params.uniqueNavElements&&typeof w.el=="string"&&p.length>1&&(p=t.$el.find(w.el),p.length>1&&(p=p.filter(m=>Z(m).parents(".swiper")[0]===t.el))),w.type==="bullets"&&w.clickable&&p.addClass(w.clickableClass),p.addClass(w.modifierClass+w.type),p.addClass(t.isHorizontal()?w.horizontalClass:w.verticalClass),w.type==="bullets"&&w.dynamicBullets&&(p.addClass(`${w.modifierClass}${w.type}-dynamic`),a=0,w.dynamicMainBullets<1&&(w.dynamicMainBullets=1)),w.type==="progressbar"&&w.progressbarOpposite&&p.addClass(w.progressbarOppositeClass),w.clickable&&p.on("click",$i(w.bulletClass),function(g){g.preventDefault();let S=Z(this).index()*t.params.slidesPerGroup;t.params.loop&&(S+=t.loopedSlides),t.slideTo(S)}),Object.assign(t.pagination,{$el:p,el:p[0]}),t.enabled||p.addClass(w.lockClass))}function v(){const w=t.params.pagination;if(l())return;const p=t.pagination.$el;p.removeClass(w.hiddenClass),p.removeClass(w.modifierClass+w.type),p.removeClass(t.isHorizontal()?w.horizontalClass:w.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(w.bulletActiveClass),w.clickable&&p.off("click",$i(w.bulletClass))}r("init",()=>{t.params.pagination.enabled===!1?b():(f(),d(),c())}),r("activeIndexChange",()=>{(t.params.loop||typeof t.snapIndex>"u")&&c()}),r("snapIndexChange",()=>{t.params.loop||c()}),r("slidesLengthChange",()=>{t.params.loop&&(d(),c())}),r("snapGridLengthChange",()=>{t.params.loop||(d(),c())}),r("destroy",()=>{v()}),r("enable disable",()=>{const{$el:w}=t.pagination;w&&w[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}),r("lock unlock",()=>{c()}),r("click",(w,p)=>{const m=p.target,{$el:g}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&g&&g.length>0&&!Z(m).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&m===t.navigation.nextEl||t.navigation.prevEl&&m===t.navigation.prevEl))return;const S=g.hasClass(t.params.pagination.hiddenClass);i(S===!0?"paginationShow":"paginationHide"),g.toggleClass(t.params.pagination.hiddenClass)}});const y=()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),f(),d(),c()},b=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),v()};Object.assign(t.pagination,{enable:y,disable:b,render:d,update:c,init:f,destroy:v})}function dg(e){let{swiper:t,extendParams:n,on:r,emit:i}=e,o;t.autoplay={running:!1,paused:!1},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){if(!t.size){t.autoplay.running=!1,t.autoplay.paused=!1;return}const w=t.slides.eq(t.activeIndex);let p=t.params.autoplay.delay;w.attr("data-swiper-autoplay")&&(p=w.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(o),o=Fl(()=>{let m;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),m=t.slidePrev(t.params.speed,!0,!0),i("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?l():(m=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),i("autoplay")):(m=t.slidePrev(t.params.speed,!0,!0),i("autoplay")):t.params.loop?(t.loopFix(),m=t.slideNext(t.params.speed,!0,!0),i("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?l():(m=t.slideTo(0,t.params.speed,!0,!0),i("autoplay")):(m=t.slideNext(t.params.speed,!0,!0),i("autoplay")),(t.params.cssMode&&t.autoplay.running||m===!1)&&s()},p)}function a(){return typeof o<"u"||t.autoplay.running?!1:(t.autoplay.running=!0,i("autoplayStart"),s(),!0)}function l(){return!t.autoplay.running||typeof o>"u"?!1:(o&&(clearTimeout(o),o=void 0),t.autoplay.running=!1,i("autoplayStop"),!0)}function u(w){!t.autoplay.running||t.autoplay.paused||(o&&clearTimeout(o),t.autoplay.paused=!0,w===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(p=>{t.$wrapperEl[0].addEventListener(p,d)}))}function c(){const w=ft();w.visibilityState==="hidden"&&t.autoplay.running&&u(),w.visibilityState==="visible"&&t.autoplay.paused&&(s(),t.autoplay.paused=!1)}function d(w){!t||t.destroyed||!t.$wrapperEl||w.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(p=>{t.$wrapperEl[0].removeEventListener(p,d)}),t.autoplay.paused=!1,t.autoplay.running?s():l())}function f(){t.params.autoplay.disableOnInteraction?l():(i("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(w=>{t.$wrapperEl[0].removeEventListener(w,d)})}function v(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,i("autoplayResume"),s())}function y(){t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",f),t.$el.on("mouseleave",v))}function b(){t.$el.off("mouseenter",f),t.$el.off("mouseleave",v)}r("init",()=>{t.params.autoplay.enabled&&(a(),ft().addEventListener("visibilitychange",c),y())}),r("beforeTransitionStart",(w,p,m)=>{t.autoplay.running&&(m||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(p):l())}),r("sliderFirstMove",()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?l():u())}),r("touchEnd",()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&s()}),r("destroy",()=>{b(),t.autoplay.running&&l(),ft().removeEventListener("visibilitychange",c)}),Object.assign(t.autoplay,{pause:u,run:s,start:a,stop:l})}function xi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function vr(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:xi(t[r])&&xi(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:vr(e[r],t[r]):e[r]=t[r]})}function gw(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function vw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function yw(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function ww(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}const bw=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function CI(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};vr(n,wt.defaults),vr(n,wt.extendedDefaults),n._emitClasses=!0,n.init=!1;const o={},s=bw.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(s.indexOf(l)>=0?xi(e[l])?(n[l]={},i[l]={},vr(n[l],e[l]),vr(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function OI(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:a}=e;gw(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),vw(t)&&o&&(a.params.pagination.el=o,a.originalParams.pagination.el=o),yw(t)&&s&&(a.params.scrollbar.el=s,a.originalParams.scrollbar.el=s),a.init(n)}function Sw(e,t){let n=t.slidesPerView;if(t.breakpoints){const i=wt.prototype.getBreakpoint(t.breakpoints),o=i in t.breakpoints?t.breakpoints[i]:void 0;o&&o.slidesPerView&&(n=o.slidesPerView)}let r=Math.ceil(parseFloat(t.loopedSlides||n,10));return r+=t.loopAdditionalSlides,r>e.length&&t.loopedSlidesLimit&&(r=e.length),r}function II(e,t,n){const r=t.map((l,u)=>Ze.cloneElement(l,{swiper:e,"data-swiper-slide-index":u}));function i(l,u,c){return Ze.cloneElement(l,{key:`${l.key}-duplicate-${u}-${c}`,className:`${l.props.className||""} ${n.slideDuplicateClass}`})}if(n.loopFillGroupWithBlank){const l=n.slidesPerGroup-r.length%n.slidesPerGroup;if(l!==n.slidesPerGroup)for(let u=0;u<l;u+=1){const c=h("div",{className:`${n.slideClass} ${n.slideBlankClass}`});r.push(c)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=r.length);const o=Sw(r,n),s=[],a=[];for(let l=0;l<o;l+=1){const u=l-Math.floor(l/r.length)*r.length;a.push(i(r[u],l,"append")),s.unshift(i(r[r.length-u-1],l,"prepend"))}return e&&(e.loopedSlides=o),[...s,...r,...a]}function PI(e,t,n,r,i){const o=[];if(!t)return o;const s=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&s("children"),r.length!==n.length&&s("children")}return bw.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(xi(e[l])&&xi(t[l])){const u=Object.keys(e[l]),c=Object.keys(t[l]);u.length!==c.length?s(l):(u.forEach(d=>{e[l][d]!==t[l][d]&&s(l)}),c.forEach(d=>{e[l][d]!==t[l][d]&&s(l)}))}else e[l]!==t[l]&&s(l)}),o}function xw(e){const t=[];return Ze.Children.toArray(e).forEach(n=>{n.type&&n.type.displayName==="SwiperSlide"?t.push(n):n.props&&n.props.children&&xw(n.props.children).forEach(r=>t.push(r))}),t}function RI(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ze.Children.toArray(e).forEach(r=>{if(r.type&&r.type.displayName==="SwiperSlide")t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=xw(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function LI(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:a,paginationEl:l}=e;const u=i.filter(_=>_!=="children"&&_!=="direction"),{params:c,pagination:d,navigation:f,scrollbar:v,virtual:y,thumbs:b}=t;let w,p,m,g,S;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(w=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(p=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(m=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&v&&!v.el&&(g=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(c.navigation||c.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(S=!0);const k=_=>{!t[_]||(t[_].destroy(),_==="navigation"?(c[_].prevEl=void 0,c[_].nextEl=void 0,t[_].prevEl=void 0,t[_].nextEl=void 0):(c[_].el=void 0,t[_].el=void 0))};u.forEach(_=>{if(xi(c[_])&&xi(r[_]))vr(c[_],r[_]);else{const E=r[_];(E===!0||E===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?E===!1&&k(_):c[_]=r[_]}}),u.includes("controller")&&!p&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),i.includes("children")&&n&&y&&c.virtual.enabled?(y.slides=n,y.update(!0)):i.includes("children")&&t.lazy&&t.params.lazy.enabled&&t.lazy.load(),w&&b.init()&&b.update(!0),p&&(t.controller.control=c.controller.control),m&&(l&&(c.pagination.el=l),d.init(),d.render(),d.update()),g&&(a&&(c.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),S&&(o&&(c.navigation.nextEl=o),s&&(c.navigation.prevEl=s),f.init(),f.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),t.update()}function NI(e,t,n){if(!n)return null;const r=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return t.filter((i,o)=>o>=n.from&&o<=n.to).map(i=>Ze.cloneElement(i,{swiper:e,style:r}))}const AI=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function vs(e,t){return typeof window>"u"?P.exports.useEffect(e,t):P.exports.useLayoutEffect(e,t)}const $I=P.exports.createContext(null),MI=P.exports.createContext(null),_w=P.exports.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...a}=e===void 0?{}:e,l=!1;const[u,c]=P.exports.useState("swiper"),[d,f]=P.exports.useState(null),[v,y]=P.exports.useState(!1),b=P.exports.useRef(!1),w=P.exports.useRef(null),p=P.exports.useRef(null),m=P.exports.useRef(null),g=P.exports.useRef(null),S=P.exports.useRef(null),k=P.exports.useRef(null),_=P.exports.useRef(null),E=P.exports.useRef(null),{params:x,passedParams:$,rest:I,events:L}=CI(a),{slides:j,slots:J}=RI(o),T=()=>{y(!v)};Object.assign(x.on,{_containerClasses(D,Q){c(Q)}});const A=()=>{if(Object.assign(x.on,L),l=!0,p.current=new wt(x),p.current.loopCreate=()=>{},p.current.loopDestroy=()=>{},x.loop&&(p.current.loopedSlides=Sw(j,x)),p.current.virtual&&p.current.params.virtual.enabled){p.current.virtual.slides=j;const D={cache:!1,slides:j,renderExternal:f,renderExternalUpdate:!1};vr(p.current.params.virtual,D),vr(p.current.originalParams.virtual,D)}};w.current||A(),p.current&&p.current.on("_beforeBreakpoint",T);const X=()=>{l||!L||!p.current||Object.keys(L).forEach(D=>{p.current.on(D,L[D])})},ne=()=>{!L||!p.current||Object.keys(L).forEach(D=>{p.current.off(D,L[D])})};P.exports.useEffect(()=>()=>{p.current&&p.current.off("_beforeBreakpoint",T)}),P.exports.useEffect(()=>{!b.current&&p.current&&(p.current.emitSlidesClasses(),b.current=!0)}),vs(()=>{if(t&&(t.current=w.current),!!w.current)return p.current.destroyed&&A(),OI({el:w.current,nextEl:S.current,prevEl:k.current,paginationEl:_.current,scrollbarEl:E.current,swiper:p.current},x),s&&s(p.current),()=>{p.current&&!p.current.destroyed&&p.current.destroy(!0,!1)}},[]),vs(()=>{X();const D=PI($,m.current,j,g.current,Q=>Q.key);return m.current=$,g.current=j,D.length&&p.current&&!p.current.destroyed&&LI({swiper:p.current,slides:j,passedParams:$,changedParams:D,nextEl:S.current,prevEl:k.current,scrollbarEl:E.current,paginationEl:_.current}),()=>{ne()}}),vs(()=>{AI(p.current)},[d]);function R(){return x.virtual?NI(p.current,j,d):!x.loop||p.current&&p.current.destroyed?j.map(D=>Ze.cloneElement(D,{swiper:p.current})):II(p.current,j,x)}return h(r,{ref:w,className:ww(`${u}${n?` ${n}`:""}`),...I,children:N(MI.Provider,{value:p.current,children:[J["container-start"],N(i,{className:"swiper-wrapper",children:[J["wrapper-start"],R(),J["wrapper-end"]]}),gw(x)&&N(St,{children:[h("div",{ref:k,className:"swiper-button-prev"}),h("div",{ref:S,className:"swiper-button-next"})]}),yw(x)&&h("div",{ref:E,className:"swiper-scrollbar"}),vw(x)&&h("div",{ref:_,className:"swiper-pagination"}),J["container-end"]]})})});_w.displayName="Swiper";const Ew=P.exports.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,virtualIndex:a,...l}=e===void 0?{}:e;const u=P.exports.useRef(null),[c,d]=P.exports.useState("swiper-slide");function f(b,w,p){w===u.current&&d(p)}vs(()=>{if(t&&(t.current=u.current),!(!u.current||!o)){if(o.destroyed){c!=="swiper-slide"&&d("swiper-slide");return}return o.on("_slideClass",f),()=>{!o||o.off("_slideClass",f)}}}),vs(()=>{o&&u.current&&!o.destroyed&&d(o.getSlideClasses(u.current))},[o]);const v={isActive:c.indexOf("swiper-slide-active")>=0||c.indexOf("swiper-slide-duplicate-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isDuplicate:c.indexOf("swiper-slide-duplicate")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0||c.indexOf("swiper-slide-duplicate-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0||c.indexOf("swiper-slide-duplicate-next")>=0},y=()=>typeof r=="function"?r(v):r;return h(n,{ref:u,className:ww(`${c}${i?` ${i}`:""}`),"data-swiper-slide-index":a,...l,children:h($I.Provider,{value:v,children:s?h("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0,children:y()}):y()})})});Ew.displayName="SwiperSlide";const DI=K.section`
    margin: 60px 0 30px;

    @media (min-width: 1024px) {
        margin-top: 0;
    }
`,jI=K.div`
     ${Ci}
`,zI=K.div`
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
`,FI=K.div`
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
`,UI="/assets/fashion-girl1.fee35b57.jpg",BI="/assets/fashion-girl2.757da9ed.jpg",VI="/assets/fashion-girl3.2e6ecca5.jpg",HI=[{id:1,img:UI,subTitle:"Trending item",title:"Women's latest fashion sale",pricing:"20",pricingFloat:"00",cta:"Shop now"},{id:2,img:BI,subTitle:"Trending accessories",title:"Modern sunglasses",pricing:"17",pricingFloat:"00",cta:"Shop now"},{id:3,img:VI,subTitle:"Sale offer",title:"New fashion winter sale",pricing:"26",pricingFloat:"99",cta:"Shop now"}],WI=()=>(wt.use([dg]),h(DI,{children:h(jI,{children:h(zI,{children:h(_w,{autoplay:{delay:8e3,disableOnInteraction:!1},pagination:{type:window.innerWidth>570?"progressbar":"bullets",clickable:!0},scrollbar:{draggable:!0},navigation:!0,spaceBetween:20,slidesPerView:1,loop:!0,speed:5e3,modules:[TI,kI,dg],className:"mySwiper",style:{zIndex:"-1"},children:HI.map(({id:e,img:t,subTitle:n,title:r,pricing:i,pricingFloat:o,cta:s})=>h(Ew,{children:N(FI,{children:[h("img",{src:t,alt:"banner-image"}),N("div",{children:[h("p",{children:n}),h("h2",{children:r}),N("span",{children:["starting at $ ",h("b",{children:i}),".",o]}),h("button",{children:s})]})]})},e))})})})}));var Xt={exports:{}};(()=>{var e={296:(i,o,s)=>{var a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,v=typeof self=="object"&&self&&self.Object===Object&&self,y=f||v||Function("return this")(),b=Object.prototype.toString,w=Math.max,p=Math.min,m=function(){return y.Date.now()};function g(k){var _=typeof k;return!!k&&(_=="object"||_=="function")}function S(k){if(typeof k=="number")return k;if(function(x){return typeof x=="symbol"||function($){return!!$&&typeof $=="object"}(x)&&b.call(x)=="[object Symbol]"}(k))return NaN;if(g(k)){var _=typeof k.valueOf=="function"?k.valueOf():k;k=g(_)?_+"":_}if(typeof k!="string")return k===0?k:+k;k=k.replace(a,"");var E=u.test(k);return E||c.test(k)?d(k.slice(2),E?2:8):l.test(k)?NaN:+k}i.exports=function(k,_,E){var x,$,I,L,j,J,T=0,A=!1,X=!1,ne=!0;if(typeof k!="function")throw new TypeError("Expected a function");function R(U){var te=x,O=$;return x=$=void 0,T=U,L=k.apply(O,te)}function D(U){return T=U,j=setTimeout(se,_),A?R(U):L}function Q(U){var te=U-J;return J===void 0||te>=_||te<0||X&&U-T>=I}function se(){var U=m();if(Q(U))return B(U);j=setTimeout(se,function(te){var O=_-(te-J);return X?p(O,I-(te-T)):O}(U))}function B(U){return j=void 0,ne&&x?R(U):(x=$=void 0,L)}function Y(){var U=m(),te=Q(U);if(x=arguments,$=this,J=U,te){if(j===void 0)return D(J);if(X)return j=setTimeout(se,_),R(J)}return j===void 0&&(j=setTimeout(se,_)),L}return _=S(_)||0,g(E)&&(A=!!E.leading,I=(X="maxWait"in E)?w(S(E.maxWait)||0,_):I,ne="trailing"in E?!!E.trailing:ne),Y.cancel=function(){j!==void 0&&clearTimeout(j),T=0,x=J=$=j=void 0},Y.flush=function(){return j===void 0?L:B(m())},Y}},96:(i,o,s)=>{var a="Expected a function",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,v=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,y=typeof self=="object"&&self&&self.Object===Object&&self,b=v||y||Function("return this")(),w=Object.prototype.toString,p=Math.max,m=Math.min,g=function(){return b.Date.now()};function S(_){var E=typeof _;return!!_&&(E=="object"||E=="function")}function k(_){if(typeof _=="number")return _;if(function($){return typeof $=="symbol"||function(I){return!!I&&typeof I=="object"}($)&&w.call($)=="[object Symbol]"}(_))return NaN;if(S(_)){var E=typeof _.valueOf=="function"?_.valueOf():_;_=S(E)?E+"":E}if(typeof _!="string")return _===0?_:+_;_=_.replace(l,"");var x=c.test(_);return x||d.test(_)?f(_.slice(2),x?2:8):u.test(_)?NaN:+_}i.exports=function(_,E,x){var $=!0,I=!0;if(typeof _!="function")throw new TypeError(a);return S(x)&&($="leading"in x?!!x.leading:$,I="trailing"in x?!!x.trailing:I),function(L,j,J){var T,A,X,ne,R,D,Q=0,se=!1,B=!1,Y=!0;if(typeof L!="function")throw new TypeError(a);function U(oe){var le=T,ae=A;return T=A=void 0,Q=oe,ne=L.apply(ae,le)}function te(oe){return Q=oe,R=setTimeout(ue,j),se?U(oe):ne}function O(oe){var le=oe-D;return D===void 0||le>=j||le<0||B&&oe-Q>=X}function ue(){var oe=g();if(O(oe))return G(oe);R=setTimeout(ue,function(le){var ae=j-(le-D);return B?m(ae,X-(le-Q)):ae}(oe))}function G(oe){return R=void 0,Y&&T?U(oe):(T=A=void 0,ne)}function ye(){var oe=g(),le=O(oe);if(T=arguments,A=this,D=oe,le){if(R===void 0)return te(D);if(B)return R=setTimeout(ue,j),U(D)}return R===void 0&&(R=setTimeout(ue,j)),ne}return j=k(j)||0,S(J)&&(se=!!J.leading,X=(B="maxWait"in J)?p(k(J.maxWait)||0,j):X,Y="trailing"in J?!!J.trailing:Y),ye.cancel=function(){R!==void 0&&clearTimeout(R),Q=0,T=D=A=R=void 0},ye.flush=function(){return R===void 0?ne:G(g())},ye}(_,E,{leading:$,maxWait:E,trailing:I})}},703:(i,o,s)=>{var a=s(414);function l(){}function u(){}u.resetWarningCache=l,i.exports=function(){function c(v,y,b,w,p,m){if(m!==a){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}function d(){return c}c.isRequired=c;var f={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:u,resetWarningCache:l};return f.PropTypes=f,f}},697:(i,o,s)=>{i.exports=s(703)()},414:i=>{i.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(i){var o=t[i];if(o!==void 0)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.n=i=>{var o=i&&i.__esModule?()=>i.default:()=>i;return n.d(o,{a:o}),o},n.d=(i,o)=>{for(var s in o)n.o(o,s)&&!n.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:o[s]})},n.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),n.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o),n.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};(()=>{n.r(r),n.d(r,{LazyLoadComponent:()=>qe,LazyLoadImage:()=>_n,trackWindowScroll:()=>se});const i=P.exports;var o=n.n(i),s=n(697);const a=Xl.exports;var l=n.n(a);function u(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function c(z){return(c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C})(z)}function d(z,C){var q=Object.keys(z);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(z);C&&(W=W.filter(function(tt){return Object.getOwnPropertyDescriptor(z,tt).enumerable})),q.push.apply(q,W)}return q}function f(z,C,q){return C in z?Object.defineProperty(z,C,{value:q,enumerable:!0,configurable:!0,writable:!0}):z[C]=q,z}function v(z,C){for(var q=0;q<C.length;q++){var W=C[q];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(z,W.key,W)}}function y(z,C){return(y=Object.setPrototypeOf||function(q,W){return q.__proto__=W,q})(z,C)}function b(z,C){if(C&&(c(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(q){if(q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return q}(z)}function w(z){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(C){return C.__proto__||Object.getPrototypeOf(C)})(z)}var p=function(z){z.forEach(function(C){C.isIntersecting&&C.target.onVisible()})},m={},g=function(z){(function(M,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(F&&F.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),F&&y(M,F)})(Ee,z);var C,q,W,tt,En=(W=Ee,tt=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,F=w(W);if(tt){var re=w(this).constructor;M=Reflect.construct(F,arguments,re)}else M=F.apply(this,arguments);return b(this,M)});function Ee(M){var F;if(function(ie,de){if(!(ie instanceof de))throw new TypeError("Cannot call a class as a function")}(this,Ee),(F=En.call(this,M)).supportsObserver=!M.scrollPosition&&M.useIntersectionObserver&&u(),F.supportsObserver){var re=M.threshold;F.observer=function(ie){return m[ie]=m[ie]||new IntersectionObserver(p,{rootMargin:ie+"px"}),m[ie]}(re)}return F}return C=Ee,(q=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,F=this.placeholder.getBoundingClientRect(),re=l().findDOMNode(this.placeholder).style,ie={left:parseInt(re.getPropertyValue("margin-left"),10)||0,top:parseInt(re.getPropertyValue("margin-top"),10)||0};return{bottom:M.y+F.bottom+ie.top,left:M.x+F.left+ie.left,right:M.x+F.right+ie.left,top:M.y+F.top+ie.top}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var M=this.props,F=M.scrollPosition,re=M.threshold,ie=this.getPlaceholderBoundingBox(F),de=F.y+window.innerHeight,xe=F.x,Ne=F.x+window.innerWidth,Ae=F.y;return Boolean(Ae-re<=ie.bottom&&de+re>=ie.top&&xe-re<=ie.right&&Ne+re>=ie.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var M=this,F=this.props,re=F.className,ie=F.height,de=F.placeholder,xe=F.style,Ne=F.width;if(de&&typeof de.type!="function")return o().cloneElement(de,{ref:function(Te){return M.placeholder=Te}});var Ae=function(Te){for(var lt=1;lt<arguments.length;lt++){var He=arguments[lt]!=null?arguments[lt]:{};lt%2?d(Object(He),!0).forEach(function(gt){f(Te,gt,He[gt])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Te,Object.getOwnPropertyDescriptors(He)):d(Object(He)).forEach(function(gt){Object.defineProperty(Te,gt,Object.getOwnPropertyDescriptor(He,gt))})}return Te}({display:"inline-block"},xe);return Ne!==void 0&&(Ae.width=Ne),ie!==void 0&&(Ae.height=ie),o().createElement("span",{className:re,ref:function(Te){return M.placeholder=Te},style:Ae},de)}}])&&v(C.prototype,q),Ee}(o().Component);g.propTypes={onVisible:s.PropTypes.func.isRequired,className:s.PropTypes.string,height:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string]),placeholder:s.PropTypes.element,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,scrollPosition:s.PropTypes.shape({x:s.PropTypes.number.isRequired,y:s.PropTypes.number.isRequired}),width:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string])},g.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const S=g;var k=n(296),_=n.n(k),E=n(96),x=n.n(E),$=function(z){var C=getComputedStyle(z,null);return C.getPropertyValue("overflow")+C.getPropertyValue("overflow-y")+C.getPropertyValue("overflow-x")};const I=function(z){if(!(z instanceof HTMLElement))return window;for(var C=z;C&&C instanceof HTMLElement;){if(/(scroll|auto)/.test($(C)))return C;C=C.parentNode}return window};function L(z){return(L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C})(z)}var j=["delayMethod","delayTime"];function J(){return(J=Object.assign||function(z){for(var C=1;C<arguments.length;C++){var q=arguments[C];for(var W in q)Object.prototype.hasOwnProperty.call(q,W)&&(z[W]=q[W])}return z}).apply(this,arguments)}function T(z,C){for(var q=0;q<C.length;q++){var W=C[q];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(z,W.key,W)}}function A(z,C){return(A=Object.setPrototypeOf||function(q,W){return q.__proto__=W,q})(z,C)}function X(z,C){if(C&&(L(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ne(z)}function ne(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function R(z){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(C){return C.__proto__||Object.getPrototypeOf(C)})(z)}var D=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},Q=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const se=function(z){var C=function(q){(function(re,ie){if(typeof ie!="function"&&ie!==null)throw new TypeError("Super expression must either be null or a function");re.prototype=Object.create(ie&&ie.prototype,{constructor:{value:re,writable:!0,configurable:!0}}),ie&&A(re,ie)})(F,q);var W,tt,En,Ee,M=(En=F,Ee=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var re,ie=R(En);if(Ee){var de=R(this).constructor;re=Reflect.construct(ie,arguments,de)}else re=ie.apply(this,arguments);return X(this,re)});function F(re){var ie;if(function(xe,Ne){if(!(xe instanceof Ne))throw new TypeError("Cannot call a class as a function")}(this,F),(ie=M.call(this,re)).useIntersectionObserver=re.useIntersectionObserver&&u(),ie.useIntersectionObserver)return X(ie);var de=ie.onChangeScroll.bind(ne(ie));return re.delayMethod==="debounce"?ie.delayedScroll=_()(de,re.delayTime):re.delayMethod==="throttle"&&(ie.delayedScroll=x()(de,re.delayTime)),ie.state={scrollPosition:{x:D(),y:Q()}},ie.baseComponentRef=o().createRef(),ie}return W=F,(tt=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||I(l().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=I(l().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:D(),y:Q()}})}},{key:"render",value:function(){var re=this.props,ie=(re.delayMethod,re.delayTime,function(xe,Ne){if(xe==null)return{};var Ae,Te,lt=function(gt,Li){if(gt==null)return{};var Kr,pa,oh={},sh=Object.keys(gt);for(pa=0;pa<sh.length;pa++)Kr=sh[pa],Li.indexOf(Kr)>=0||(oh[Kr]=gt[Kr]);return oh}(xe,Ne);if(Object.getOwnPropertySymbols){var He=Object.getOwnPropertySymbols(xe);for(Te=0;Te<He.length;Te++)Ae=He[Te],Ne.indexOf(Ae)>=0||Object.prototype.propertyIsEnumerable.call(xe,Ae)&&(lt[Ae]=xe[Ae])}return lt}(re,j)),de=this.useIntersectionObserver?null:this.state.scrollPosition;return o().createElement(z,J({forwardRef:this.baseComponentRef,scrollPosition:de},ie))}}])&&T(W.prototype,tt),F}(o().Component);return C.propTypes={delayMethod:s.PropTypes.oneOf(["debounce","throttle"]),delayTime:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool},C.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},C};function B(z){return(B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C})(z)}function Y(z,C){for(var q=0;q<C.length;q++){var W=C[q];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(z,W.key,W)}}function U(z,C){return(U=Object.setPrototypeOf||function(q,W){return q.__proto__=W,q})(z,C)}function te(z,C){if(C&&(B(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(q){if(q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return q}(z)}function O(z){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(C){return C.__proto__||Object.getPrototypeOf(C)})(z)}var ue=function(z){(function(M,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(F&&F.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),F&&U(M,F)})(Ee,z);var C,q,W,tt,En=(W=Ee,tt=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,F=O(W);if(tt){var re=O(this).constructor;M=Reflect.construct(F,arguments,re)}else M=F.apply(this,arguments);return te(this,M)});function Ee(M){return function(F,re){if(!(F instanceof re))throw new TypeError("Cannot call a class as a function")}(this,Ee),En.call(this,M)}return C=Ee,(q=[{key:"render",value:function(){return o().createElement(S,this.props)}}])&&Y(C.prototype,q),Ee}(o().Component);const G=se(ue);function ye(z){return(ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C})(z)}function oe(z,C){for(var q=0;q<C.length;q++){var W=C[q];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(z,W.key,W)}}function le(z,C){return(le=Object.setPrototypeOf||function(q,W){return q.__proto__=W,q})(z,C)}function ae(z,C){if(C&&(ye(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Re(z)}function Re(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function Ue(z){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(C){return C.__proto__||Object.getPrototypeOf(C)})(z)}var pe=function(z){(function(M,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(F&&F.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),F&&le(M,F)})(Ee,z);var C,q,W,tt,En=(W=Ee,tt=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,F=Ue(W);if(tt){var re=Ue(this).constructor;M=Reflect.construct(F,arguments,re)}else M=F.apply(this,arguments);return ae(this,M)});function Ee(M){var F;(function(Ne,Ae){if(!(Ne instanceof Ae))throw new TypeError("Cannot call a class as a function")})(this,Ee),F=En.call(this,M);var re=M.afterLoad,ie=M.beforeLoad,de=M.scrollPosition,xe=M.visibleByDefault;return F.state={visible:xe},xe&&(ie(),re()),F.onVisible=F.onVisible.bind(Re(F)),F.isScrollTracked=Boolean(de&&Number.isFinite(de.x)&&de.x>=0&&Number.isFinite(de.y)&&de.y>=0),F}return C=Ee,(q=[{key:"componentDidUpdate",value:function(M,F){F.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var M=this.props,F=M.className,re=M.delayMethod,ie=M.delayTime,de=M.height,xe=M.placeholder,Ne=M.scrollPosition,Ae=M.style,Te=M.threshold,lt=M.useIntersectionObserver,He=M.width;return this.isScrollTracked||lt&&u()?o().createElement(S,{className:F,height:de,onVisible:this.onVisible,placeholder:xe,scrollPosition:Ne,style:Ae,threshold:Te,useIntersectionObserver:lt,width:He}):o().createElement(G,{className:F,delayMethod:re,delayTime:ie,height:de,onVisible:this.onVisible,placeholder:xe,style:Ae,threshold:Te,width:He})}}])&&oe(C.prototype,q),Ee}(o().Component);pe.propTypes={afterLoad:s.PropTypes.func,beforeLoad:s.PropTypes.func,useIntersectionObserver:s.PropTypes.bool,visibleByDefault:s.PropTypes.bool},pe.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const qe=pe;function ge(z){return(ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C})(z)}var Ke=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function or(z,C){var q=Object.keys(z);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(z);C&&(W=W.filter(function(tt){return Object.getOwnPropertyDescriptor(z,tt).enumerable})),q.push.apply(q,W)}return q}function Ve(z){for(var C=1;C<arguments.length;C++){var q=arguments[C]!=null?arguments[C]:{};C%2?or(Object(q),!0).forEach(function(W){Ri(z,W,q[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(q)):or(Object(q)).forEach(function(W){Object.defineProperty(z,W,Object.getOwnPropertyDescriptor(q,W))})}return z}function Ri(z,C,q){return C in z?Object.defineProperty(z,C,{value:q,enumerable:!0,configurable:!0,writable:!0}):z[C]=q,z}function zn(){return(zn=Object.assign||function(z){for(var C=1;C<arguments.length;C++){var q=arguments[C];for(var W in q)Object.prototype.hasOwnProperty.call(q,W)&&(z[W]=q[W])}return z}).apply(this,arguments)}function jt(z,C){for(var q=0;q<C.length;q++){var W=C[q];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(z,W.key,W)}}function ce(z,C){return(ce=Object.setPrototypeOf||function(q,W){return q.__proto__=W,q})(z,C)}function Le(z,C){if(C&&(ge(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(q){if(q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return q}(z)}function Gr(z){return(Gr=Object.setPrototypeOf?Object.getPrototypeOf:function(C){return C.__proto__||Object.getPrototypeOf(C)})(z)}var qr=function(z){(function(M,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(F&&F.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),F&&ce(M,F)})(Ee,z);var C,q,W,tt,En=(W=Ee,tt=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,F=Gr(W);if(tt){var re=Gr(this).constructor;M=Reflect.construct(F,arguments,re)}else M=F.apply(this,arguments);return Le(this,M)});function Ee(M){var F;return function(re,ie){if(!(re instanceof ie))throw new TypeError("Cannot call a class as a function")}(this,Ee),(F=En.call(this,M)).state={loaded:!1},F}return C=Ee,(q=[{key:"onImageLoad",value:function(){var M=this;return this.state.loaded?null:function(){M.props.afterLoad(),M.setState({loaded:!0})}}},{key:"getImg",value:function(){var M=this.props,F=(M.afterLoad,M.beforeLoad,M.delayMethod,M.delayTime,M.effect,M.placeholder,M.placeholderSrc,M.scrollPosition,M.threshold,M.useIntersectionObserver,M.visibleByDefault,M.wrapperClassName,M.wrapperProps,function(re,ie){if(re==null)return{};var de,xe,Ne=function(Te,lt){if(Te==null)return{};var He,gt,Li={},Kr=Object.keys(Te);for(gt=0;gt<Kr.length;gt++)He=Kr[gt],lt.indexOf(He)>=0||(Li[He]=Te[He]);return Li}(re,ie);if(Object.getOwnPropertySymbols){var Ae=Object.getOwnPropertySymbols(re);for(xe=0;xe<Ae.length;xe++)de=Ae[xe],ie.indexOf(de)>=0||Object.prototype.propertyIsEnumerable.call(re,de)&&(Ne[de]=re[de])}return Ne}(M,Ke));return o().createElement("img",zn({onLoad:this.onImageLoad()},F))}},{key:"getLazyLoadImage",value:function(){var M=this.props,F=M.beforeLoad,re=M.className,ie=M.delayMethod,de=M.delayTime,xe=M.height,Ne=M.placeholder,Ae=M.scrollPosition,Te=M.style,lt=M.threshold,He=M.useIntersectionObserver,gt=M.visibleByDefault,Li=M.width;return o().createElement(qe,{beforeLoad:F,className:re,delayMethod:ie,delayTime:de,height:xe,placeholder:Ne,scrollPosition:Ae,style:Te,threshold:lt,useIntersectionObserver:He,visibleByDefault:gt,width:Li},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(M){var F=this.props,re=F.effect,ie=F.height,de=F.placeholderSrc,xe=F.width,Ne=F.wrapperClassName,Ae=F.wrapperProps,Te=this.state.loaded,lt=Te?" lazy-load-image-loaded":"",He=Te||!de?{}:{backgroundImage:"url(".concat(de,")"),backgroundSize:"100% 100%"};return o().createElement("span",zn({className:Ne+" lazy-load-image-background "+re+lt,style:Ve(Ve({},He),{},{color:"transparent",display:"inline-block",height:ie,width:xe})},Ae),M)}},{key:"render",value:function(){var M=this.props,F=M.effect,re=M.placeholderSrc,ie=M.visibleByDefault,de=M.wrapperClassName,xe=M.wrapperProps,Ne=this.getLazyLoadImage();return(F||re)&&!ie||de||xe?this.getWrappedLazyLoadImage(Ne):Ne}}])&&jt(C.prototype,q),Ee}(o().Component);qr.propTypes={afterLoad:s.PropTypes.func,beforeLoad:s.PropTypes.func,delayMethod:s.PropTypes.string,delayTime:s.PropTypes.number,effect:s.PropTypes.string,placeholderSrc:s.PropTypes.string,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,visibleByDefault:s.PropTypes.bool,wrapperClassName:s.PropTypes.string,wrapperProps:s.PropTypes.object},qr.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const _n=qr})(),Xt.exports=r})();const GI=K.div`
    display: none;
   

    @media (min-width: 1024px) {
        display: block;
    }
`,qI=K.div`
   ${Ci}
`,KI=K.ul`
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
`,qo=K.li`
    
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
    
`,Da=K.ul``,ja=K.li`

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

`,$e=K.li`

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
`,Yt=K.li`
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
`,YI="/assets/fashion-girl.b1142896.jpg",XI="/assets/hair-girl.13f2affe.jpg",QI="/assets/men-fashion.7f753b30.jpg",JI="/assets/kids1.898e5908.png",ZI="/assets/harry-potter2.887409e2.jpg",eP="/assets/umbrella-girl.cab25a86.jpg",tP="/assets/twinning.89b8ad31.jpg",nP=()=>{const{t:e}=xn();return h(GI,{children:h(qI,{children:N(KI,{children:[h(qo,{children:h("a",{href:"#",className:"home",children:e("Home")})}),N(qo,{children:[h("a",{href:"#",children:"Marks & Spencer"}),N("div",{children:[N(Da,{children:[h(ja,{children:h("a",{href:"#",children:e("Women's")})}),h($e,{children:h("a",{href:"#",children:e("Clothing")})}),h($e,{children:h("a",{href:"#",children:e("Lingerie")})}),h($e,{children:h("a",{href:"#",children:e("Footwear")})}),h($e,{children:h("a",{href:"#",children:e("Accessories")})}),h($e,{children:h("a",{href:"#",children:h(Xt.exports.LazyLoadImage,{src:YI,effect:"blur",alt:"women's fashion"})})})]}),N(Da,{children:[h(ja,{children:h("a",{href:"#",children:e("Men's")})}),h($e,{children:h("a",{href:"#",children:e("Clothing")})}),h($e,{children:N("a",{href:"#",children:[e("Suits")," & ",e("Formal")," "]})}),h($e,{children:h("a",{href:"#",children:e("Footwear")})}),h($e,{children:h("a",{href:"#",children:e("Accessories")})}),h($e,{children:h("a",{href:"#",children:h(Xt.exports.LazyLoadImage,{src:QI,effect:"blur",alt:"men's fashion"})})})]}),N(Da,{children:[h(ja,{children:h("a",{href:"#",children:e("Kids'")})}),h($e,{children:h("a",{href:"#",children:e("Baby")})}),h($e,{children:h("a",{href:"#",children:e("Boys")})}),h($e,{children:h("a",{href:"#",children:e("Girls")})}),h($e,{children:h("a",{href:"#",children:e("School Uniform")})}),h($e,{children:h("a",{href:"#",children:h(Xt.exports.LazyLoadImage,{src:JI,effect:"blur",alt:"kid's fashion"})})})]}),N(Da,{children:[h(ja,{children:h("a",{href:"#",children:e("Beauty")})}),h($e,{children:h("a",{href:"#",children:e("Skincare")})}),h($e,{children:h("a",{href:"#",children:e("Haircare")})}),h($e,{children:h("a",{href:"#",children:e("Make-up")})}),h($e,{children:h("a",{href:"#",children:e("Fragrance")})}),h($e,{children:h("a",{href:"#",children:h(Xt.exports.LazyLoadImage,{src:XI,effect:"blur",alt:"beauty collection"})})})]})]})]}),N(qo,{children:[h("a",{href:"#",children:"Harry Potter's"}),N("ul",{className:"dropdown-list",children:[h(Yt,{children:h("a",{href:"#",children:e("Wands")})}),h(Yt,{children:h("a",{href:"#",children:e("Trunks")})}),h(Yt,{children:h("a",{href:"#",children:e("Clothing")})}),h(Yt,{children:N("a",{href:"#",children:[e("Sweets")," & ",e("Treats")," "]})}),h($e,{children:h("a",{href:"#",children:h(Xt.exports.LazyLoadImage,{src:ZI,width:250,height:119,effect:"blur",alt:"women's fashion"})})})]})]}),N(qo,{children:[h("a",{href:"#",children:"James Smith & Sons"}),N("ul",{className:"dropdown-list",children:[h(Yt,{children:h("a",{href:"#",children:e("Folding Umbrellas")})}),h(Yt,{children:h("a",{href:"#",children:e("Sun Umbrellas")})}),h(Yt,{children:h("a",{href:"#",children:e("Walking Sticks")})}),h(Yt,{children:h("a",{href:"#",children:e("Seat Sticks")})}),h($e,{children:h("a",{href:"#",children:h(Xt.exports.LazyLoadImage,{src:eP,width:250,height:119,effect:"blur",alt:"women's fashion"})})})]})]}),N(qo,{children:[h("a",{href:"#",children:"Twinings"}),N("ul",{className:"dropdown-list",children:[h(Yt,{children:h("a",{href:"#",children:e("Tea")})}),h(Yt,{children:h("a",{href:"#",children:e("Wellbeing Drinks")})}),h(Yt,{children:h("a",{href:"#",children:e("Teaware")})}),h(Yt,{children:h("a",{href:"#",children:e("Treats")})}),h($e,{children:h("a",{href:"#",children:h(Xt.exports.LazyLoadImage,{src:tP,width:250,height:119,effect:"blur",alt:"teaware"})})})]})]})]})})})},rP=()=>N(St,{children:[h(nP,{}),h(WI,{})]}),fg=ra`
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
`,iP=K.section`
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
        -webkit-animation: ${fg} 3s alternate infinite ease-in;
        animation:  ${fg} 3s alternate infinite ease-in;

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
`,oP="/assets/shopperLg.87e789bf.png",sP="/assets/shopperMd.7bfda202.png",aP=()=>{const[e,t]=P.exports.useState(!0);return P.exports.useEffect(()=>{setTimeout(()=>{t(!1)},5e3)},[]),h(St,{children:e&&N(iP,{children:[window.innerWidth>570?h(Xt.exports.LazyLoadImage,{src:oP,effect:"blur",alt:"shopper-welcome-screen"}):h(Xt.exports.LazyLoadImage,{src:sP,effect:"blur",alt:"shopper-welcome-screen"}),N("div",{children:[h("img",{src:Oi,alt:"brand-logo"}),h("h2",{children:"WizCart"})]})]})})},kw="/assets/google.b8bbf658.svg";function Tw(e){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M254.28 17.313c-81.048 0-146.624 65.484-146.624 146.406V236h49.594v-69.094c0-53.658 43.47-97.187 97.03-97.187 53.563 0 97.032 44.744 97.032 97.186V236h49.594v-72.28c0-78.856-65.717-146.407-146.625-146.407zM85.157 254.688c-14.61 22.827-22.844 49.148-22.844 76.78 0 88.358 84.97 161.5 191.97 161.5 106.998 0 191.968-73.142 191.968-161.5 0-27.635-8.26-53.95-22.875-76.78H85.155zM254 278.625c22.34 0 40.875 17.94 40.875 40.28 0 16.756-10.6 31.23-25.125 37.376l32.72 98.126h-96.376l32.125-98.125c-14.526-6.145-24.532-20.62-24.532-37.374 0-22.338 17.972-40.28 40.312-40.28z"}}]})(e)}function jp(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}const Ko={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Mi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function lP(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Cw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uP=lP,cP=Cw,Ow=new Ii("auth","Firebase",Cw());/**
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
 */const pg=new $p("@firebase/auth");function sl(e,...t){pg.logLevel<=_e.ERROR&&pg.error(`Auth (${Io}): ${e}`,...t)}/**
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
 */function mt(e,...t){throw zp(e,...t)}function pt(e,...t){return zp(e,...t)}function Iw(e,t,n){const r=Object.assign(Object.assign({},cP()),{[t]:n});return new Ii("auth","Firebase",r).create(t,{appName:e.name})}function Po(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&mt(e,"argument-error"),Iw(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ow.create(e,...t)}function H(e,t,...n){if(!e)throw zp(t,...n)}function Nn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw sl(t),new Error(t)}function bn(e,t){e||Nn(t)}/**
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
 */const hg=new Map;function Vt(e){bn(e instanceof Function,"Expected a class definition");let t=hg.get(e);return t?(bn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hg.set(e,t),t)}function dP(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Hs(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Fp(){return mg()==="http:"||mg()==="https:"}function mg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function fP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fp()||K1()||"connection"in navigator)?navigator.onLine:!0}function pP(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class la{constructor(t,n){this.shortDelay=t,this.longDelay=n,bn(n>t,"Short delay should be less than long delay!"),this.isMobile=Ck()||Np()}get(){return fP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Up(e,t){bn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Pw{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const mP=new la(3e4,6e4);function et(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function at(e,t,n,r,i={}){return Rw(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Oo(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Pw.fetch()(Lw(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Rw(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},hP),t);try{const i=new gP(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ss(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ss(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw ss(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Iw(e,c,u);mt(e,c)}}catch(i){if(i instanceof Dt)throw i;mt(e,"network-request-failed")}}async function rr(e,t,n,r,i={}){const o=await at(e,t,n,r,i);return"mfaPendingCredential"in o&&mt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Lw(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Up(e.config,i):`${e.config.apiScheme}://${i}`}class gP{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),mP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ss(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function vP(e,t){return at(e,"POST","/v1/accounts:delete",t)}async function yP(e,t){return at(e,"POST","/v1/accounts:update",t)}async function wP(e,t){return at(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ys(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function bP(e,t=!1){const n=me(e),r=await n.getIdToken(t),i=Fu(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ys(Vc(i.auth_time)),issuedAtTime:ys(Vc(i.iat)),expirationTime:ys(Vc(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Vc(e){return Number(e)*1e3}function Fu(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ek(r);return o?JSON.parse(o):(sl("Failed to decode base64 JWT payload"),null)}catch(o){return sl("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function SP(e){const t=Fu(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function er(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Dt&&xP(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function xP({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class _P{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nw{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ws(e){var t;const n=e.auth,r=await e.getIdToken(),i=await er(e,wP(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?TP(o.providerUserInfo):[],a=kP(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Nw(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function EP(e){const t=me(e);await Ws(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function kP(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function TP(e){return e.map(t=>{var{providerId:n}=t,r=jp(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CP(e,t){const n=await Rw(e,{},async()=>{const r=Oo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Lw(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pw.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):SP(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return H(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await CP(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Gs;return r&&(H(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(H(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function ar(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ai{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=jp(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _P(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Nw(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await er(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return bP(this,t)}reload(){return EP(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ai(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await er(this,vP(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:S,isAnonymous:k,providerData:_,stsTokenManager:E}=n;H(g&&E,t,"internal-error");const x=Gs.fromJSON(this.name,E);H(typeof g=="string",t,"internal-error"),ar(d,t.name),ar(f,t.name),H(typeof S=="boolean",t,"internal-error"),H(typeof k=="boolean",t,"internal-error"),ar(v,t.name),ar(y,t.name),ar(b,t.name),ar(w,t.name),ar(p,t.name),ar(m,t.name);const $=new ai({uid:g,auth:t,email:f,emailVerified:S,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:v,tenantId:b,stsTokenManager:x,createdAt:p,lastLoginAt:m});return _&&Array.isArray(_)&&($.providerData=_.map(I=>Object.assign({},I))),w&&($._redirectEventId=w),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new Gs;i.updateFromServerResponse(n);const o=new ai({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ws(o),o}}/**
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
 */class Aw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Aw.type="NONE";const So=Aw;/**
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
 */function li(e,t,n){return`firebase:${e}:${t}:${n}`}class ao{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=li(this.userKey,i.apiKey,o),this.fullPersistenceKey=li("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ai._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ao(Vt(So),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Vt(So);const s=li(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=ai._fromJSON(t,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new ao(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new ao(o,t,r))}}/**
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
 */function gg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dw(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($w(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jw(t))return"Blackberry";if(zw(t))return"Webos";if(Bp(t))return"Safari";if((t.includes("chrome/")||Mw(t))&&!t.includes("edge/"))return"Chrome";if(ua(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $w(e=Ge()){return/firefox\//i.test(e)}function Bp(e=Ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mw(e=Ge()){return/crios\//i.test(e)}function Dw(e=Ge()){return/iemobile/i.test(e)}function ua(e=Ge()){return/android/i.test(e)}function jw(e=Ge()){return/blackberry/i.test(e)}function zw(e=Ge()){return/webos/i.test(e)}function Ro(e=Ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function OP(e=Ge()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function IP(e=Ge()){var t;return Ro(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function PP(){return Y1()&&document.documentMode===10}function Fw(e=Ge()){return Ro(e)||ua(e)||zw(e)||jw(e)||/windows phone/i.test(e)||Dw(e)}function RP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Uw(e,t=[]){let n;switch(e){case"Browser":n=gg(Ge());break;case"Worker":n=`${gg(Ge())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Io}/${r}`}/**
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
 */class LP{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class NP{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vg(this),this.idTokenSubscription=new vg(this),this.beforeStateQueue=new LP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ow,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ao.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Ws(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=pP()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?me(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ii("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Vt(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return H(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Uw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function it(e){return me(e)}class vg{constructor(t){this.auth=t,this.observer=null,this.addObserver=X1(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function AP(e,t,n){const r=it(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Bw(t),{host:s,port:a}=$P(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MP()}function Bw(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $P(e){const t=Bw(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:yg(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:yg(s)}}}function yg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function MP(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Lo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(t){return Nn("not implemented")}_linkToIdToken(t,n){return Nn("not implemented")}_getReauthenticationResolver(t){return Nn("not implemented")}}/**
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
 */async function Vw(e,t){return at(e,"POST","/v1/accounts:resetPassword",et(e,t))}async function Hw(e,t){return at(e,"POST","/v1/accounts:update",t)}async function DP(e,t){return at(e,"POST","/v1/accounts:update",et(e,t))}/**
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
 */async function jP(e,t){return rr(e,"POST","/v1/accounts:signInWithPassword",et(e,t))}async function Uu(e,t){return at(e,"POST","/v1/accounts:sendOobCode",et(e,t))}async function zP(e,t){return Uu(e,t)}async function FP(e,t){return Uu(e,t)}async function UP(e,t){return Uu(e,t)}async function BP(e,t){return Uu(e,t)}/**
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
 */async function VP(e,t){return rr(e,"POST","/v1/accounts:signInWithEmailLink",et(e,t))}async function HP(e,t){return rr(e,"POST","/v1/accounts:signInWithEmailLink",et(e,t))}/**
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
 */class qs extends Lo{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new qs(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new qs(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return jP(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VP(t,{email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Hw(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HP(t,{idToken:n,email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function qn(e,t){return rr(e,"POST","/v1/accounts:signInWithIdp",et(e,t))}/**
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
 */const WP="http://localhost";class Dn extends Lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Dn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return qn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,qn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,qn(t,n)}buildRequest(){const t={requestUri:WP,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Oo(n)}return t}}/**
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
 */async function GP(e,t){return at(e,"POST","/v1/accounts:sendVerificationCode",et(e,t))}async function qP(e,t){return rr(e,"POST","/v1/accounts:signInWithPhoneNumber",et(e,t))}async function KP(e,t){const n=await rr(e,"POST","/v1/accounts:signInWithPhoneNumber",et(e,t));if(n.temporaryProof)throw ss(e,"account-exists-with-different-credential",n);return n}const YP={USER_NOT_FOUND:"user-not-found"};async function XP(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return rr(e,"POST","/v1/accounts:signInWithPhoneNumber",et(e,n),YP)}/**
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
 */class ui extends Lo{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new ui({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new ui({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return qP(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return KP(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return XP(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=t;return!r&&!n&&!i&&!o?null:new ui({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
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
 */function QP(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JP(e){const t=Zi(os(e)).link,n=t?Zi(os(t)).deep_link_id:null,r=Zi(os(e)).deep_link_id;return(r?Zi(os(r)).link:null)||r||n||t||e}class Bu{constructor(t){var n,r,i,o,s,a;const l=Zi(os(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=QP((i=l.mode)!==null&&i!==void 0?i:null);H(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=JP(t);try{return new Bu(n)}catch{return null}}}/**
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
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(t,n){return qs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Bu.parseLink(n);return H(r,"argument-error"),qs._fromEmailAndCode(t,r.code,r.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ir{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class No extends ir{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class lo extends No{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return H("providerId"in n&&"signInMethod"in n,"argument-error"),Dn._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return H(t.idToken||t.accessToken,"argument-error"),Dn._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return lo.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return lo.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=t;if(!r&&!i&&!n&&!o||!a)return null;try{return new lo(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class In extends No{constructor(){super("facebook.com")}static credential(t){return Dn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return In.credential(t.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Dn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pn.credentialFromTaggedObject(t)}static credentialFromError(t){return Pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class Rn extends No{constructor(){super("github.com")}static credential(t){return Dn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rn.credential(t.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
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
 */const ZP="http://localhost";class xo extends Lo{constructor(t,n){super(t,t),this.pendingToken=n}_getIdTokenResponse(t){const n=this.buildRequest();return qn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,qn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,qn(t,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new xo(r,o)}static _create(t,n){return new xo(t,n)}buildRequest(){return{requestUri:ZP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const e3="saml.";class Ul extends ir{constructor(t){H(t.startsWith(e3),"argument-error"),super(t)}static credentialFromResult(t){return Ul.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return Ul.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const n=xo.fromJSON(t);return H(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:n,providerId:r}=t;if(!n||!r)return null;try{return xo._create(r,n)}catch{return null}}}/**
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
 */class Ln extends No{constructor(){super("twitter.com")}static credential(t,n){return Dn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ln.credentialFromTaggedObject(t)}static credentialFromError(t){return Ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
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
 */async function Ww(e,t){return rr(e,"POST","/v1/accounts:signUp",et(e,t))}/**
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
 */class on{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ai._fromIdTokenResponse(t,r,i),s=wg(r);return new on({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=wg(r);return new on({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function wg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function t3(e){var t;const n=it(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new on({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ww(n,{returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Bl extends Dt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bl.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Bl(t,n,r,i)}}function Gw(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Bl._fromErrorAndOperation(e,o,t,r):o})}/**
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
 */function qw(e){return new Set(e.map(({providerId:t})=>t).filter(t=>!!t))}/**
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
 */async function n3(e,t){const n=me(e);await Vu(!0,n,t);const{providerUserInfo:r}=await yP(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=qw(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Vp(e,t,n=!1){const r=await er(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return on._forOperation(e,"link",r)}async function Vu(e,t,n){await Ws(t);const r=qw(t.providerData),i=e===!1?"provider-already-linked":"no-such-provider";H(r.has(n)===e,t.auth,i)}/**
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
 */async function Kw(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const s=await er(e,Gw(i,o,t,e),n);H(s.idToken,i,"internal-error");const a=Fu(s.idToken);H(a,i,"internal-error");const{sub:l}=a;return H(e.uid===l,i,"user-mismatch"),on._forOperation(e,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&mt(i,"user-mismatch"),s}}/**
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
 */async function Yw(e,t,n=!1){const r="signIn",i=await Gw(e,r,t),o=await on._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Hu(e,t){return Yw(it(e),t)}async function Xw(e,t){const n=me(e);return await Vu(!1,n,t.providerId),Vp(n,t)}async function Qw(e,t){return Kw(me(e),t)}/**
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
 */async function r3(e,t){return rr(e,"POST","/v1/accounts:signInWithCustomToken",et(e,t))}/**
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
 */async function i3(e,t){const n=it(e),r=await r3(n,{token:t,returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Wu{constructor(t,n){this.factorId=t,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(t,n){return"phoneInfo"in n?Hp._fromServerResponse(t,n):mt(t,"internal-error")}}class Hp extends Wu{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,n){return new Hp(n)}}/**
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
 */function Gu(e,t,n){var r;H(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
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
 */async function o3(e,t,n){const r=me(e),i={requestType:"PASSWORD_RESET",email:t};n&&Gu(r,i,n),await FP(r,i)}async function s3(e,t,n){await Vw(me(e),{oobCode:t,newPassword:n})}async function a3(e,t){await DP(me(e),{oobCode:t})}async function Jw(e,t){const n=me(e),r=await Vw(n,{oobCode:t}),i=r.requestType;switch(H(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":H(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":H(r.mfaInfo,n,"internal-error");default:H(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Wu._fromServerResponse(it(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function l3(e,t){const{data:n}=await Jw(me(e),t);return n.email}async function u3(e,t,n){const r=it(e),i=await Ww(r,{returnSecureToken:!0,email:t,password:n}),o=await on._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function c3(e,t,n){return Hu(me(e),Wr.credential(t,n))}/**
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
 */async function d3(e,t,n){const r=me(e),i={requestType:"EMAIL_SIGNIN",email:t};H(n.handleCodeInApp,r,"argument-error"),n&&Gu(r,i,n),await UP(r,i)}function f3(e,t){const n=Bu.parseLink(t);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function p3(e,t,n){const r=me(e),i=Wr.credentialWithLink(t,n||Hs());return H(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Hu(r,i)}/**
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
 */async function h3(e,t){return at(e,"POST","/v1/accounts:createAuthUri",et(e,t))}/**
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
 */async function m3(e,t){const n=Fp()?Hs():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:i}=await h3(me(e),r);return i||[]}async function g3(e,t){const n=me(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&Gu(n.auth,i,t);const{email:o}=await zP(n.auth,i);o!==e.email&&await e.reload()}async function v3(e,t,n){const r=me(e),i=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};n&&Gu(r.auth,o,n);const{email:s}=await BP(r.auth,o);s!==e.email&&await e.reload()}/**
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
 */async function y3(e,t){return at(e,"POST","/v1/accounts:update",t)}/**
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
 */async function w3(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=me(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await er(r,y3(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function b3(e,t){return Zw(me(e),t,null)}function S3(e,t){return Zw(me(e),null,t)}async function Zw(e,t,n){const{auth:r}=e,o={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await er(e,Hw(r,o));await e._updateTokensIfNecessary(s,!0)}/**
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
 */function x3(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||e.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(e==null?void 0:e.idToken)){const s=(n=(t=Fu(e.idToken))===null||t===void 0?void 0:t.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new uo(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new _3(o,i);case"github.com":return new E3(o,i);case"google.com":return new k3(o,i);case"twitter.com":return new T3(o,i,e.screenName||null);case"custom":case"anonymous":return new uo(o,null);default:return new uo(o,r,i)}}class uo{constructor(t,n,r={}){this.isNewUser=t,this.providerId=n,this.profile=r}}class eb extends uo{constructor(t,n,r,i){super(t,n,r),this.username=i}}class _3 extends uo{constructor(t,n){super(t,"facebook.com",n)}}class E3 extends eb{constructor(t,n){super(t,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class k3 extends uo{constructor(t,n){super(t,"google.com",n)}}class T3 extends eb{constructor(t,n,r){super(t,"twitter.com",n,r)}}function C3(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:x3(n)}class ni{constructor(t,n){this.type=t,this.credential=n}static _fromIdtoken(t){return new ni("enroll",t)}static _fromMfaPendingCredential(t){return new ni("signin",t)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(t){var n,r;if(t!=null&&t.multiFactorSession){if(!((n=t.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ni._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(!((r=t.multiFactorSession)===null||r===void 0)&&r.idToken)return ni._fromIdtoken(t.multiFactorSession.idToken)}return null}}/**
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
 */class Wp{constructor(t,n,r){this.session=t,this.hints=n,this.signInResolver=r}static _fromError(t,n){const r=it(t),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>Wu._fromServerResponse(r,a));H(i.mfaPendingCredential,r,"internal-error");const s=ni._fromMfaPendingCredential(i.mfaPendingCredential);return new Wp(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await on._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return H(n.user,r,"internal-error"),on._forOperation(n.user,n.operationType,u);default:mt(r,"internal-error")}})}async resolveSignIn(t){const n=t;return this.signInResolver(n)}}function O3(e,t){var n;const r=me(e),i=t;return H(t.customData.operationType,r,"argument-error"),H((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Wp._fromError(r,i)}/**
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
 */function I3(e,t){return at(e,"POST","/v2/accounts/mfaEnrollment:start",et(e,t))}function P3(e,t){return at(e,"POST","/v2/accounts/mfaEnrollment:finalize",et(e,t))}function R3(e,t){return at(e,"POST","/v2/accounts/mfaEnrollment:withdraw",et(e,t))}class Gp{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Wu._fromServerResponse(t.auth,r)))})}static _fromUser(t){return new Gp(t)}async getSession(){return ni._fromIdtoken(await this.user.getIdToken())}async enroll(t,n){const r=t,i=await this.getSession(),o=await er(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(t){var n;const r=typeof t=="string"?t:t.uid,i=await this.user.getIdToken(),o=await er(this.user,R3(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==r),await this.user._updateTokensIfNecessary(o);try{await this.user.reload()}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw s}}}const Hc=new WeakMap;function L3(e){const t=me(e);return Hc.has(t)||Hc.set(t,Gp._fromUser(t)),Hc.get(t)}const Vl="__sak";/**
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
 */class tb{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vl,"1"),this.storage.removeItem(Vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function N3(){const e=Ge();return Bp(e)||Ro(e)}const A3=1e3,$3=10;class nb extends tb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=N3()&&RP(),this.fallbackToPolling=Fw(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);PP()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,$3):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},A3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}nb.type="LOCAL";const qp=nb;/**
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
 */class rb extends tb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}rb.type="SESSION";const _i=rb;/**
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
 */function M3(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new qu(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await M3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qu.receivers=[];/**
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
 */function ca(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class D3{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=ca("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Qe(){return window}function j3(e){Qe().location.href=e}/**
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
 */function Kp(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function z3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F3(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function U3(){return Kp()?self:null}/**
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
 */const ib="firebaseLocalStorageDb",B3=1,Hl="firebaseLocalStorage",ob="fbase_key";class da{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ku(e,t){return e.transaction([Hl],t?"readwrite":"readonly").objectStore(Hl)}function V3(){const e=indexedDB.deleteDatabase(ib);return new da(e).toPromise()}function lf(){const e=indexedDB.open(ib,B3);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Hl,{keyPath:ob})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Hl)?t(r):(r.close(),await V3(),t(await lf()))})})}async function bg(e,t,n){const r=Ku(e,!0).put({[ob]:t,value:n});return new da(r).toPromise()}async function H3(e,t){const n=Ku(e,!1).get(t),r=await new da(n).toPromise();return r===void 0?null:r.value}function Sg(e,t){const n=Ku(e,!0).delete(t);return new da(n).toPromise()}const W3=800,G3=3;class sb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lf(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>G3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qu._getInstance(U3()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await z3(),!this.activeServiceWorker)return;this.sender=new D3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||F3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await lf();return await bg(t,Vl,"1"),await Sg(t,Vl),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>H3(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ku(i,!1).getAll();return new da(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sb.type="LOCAL";const Ks=sb;/**
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
 */function q3(e,t){return at(e,"POST","/v2/accounts/mfaSignIn:start",et(e,t))}function K3(e,t){return at(e,"POST","/v2/accounts/mfaSignIn:finalize",et(e,t))}/**
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
 */async function Y3(e){return(await at(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function X3(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function ab(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=pt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",X3().appendChild(r)})}function lb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Q3=500,J3=6e4,za=1e12;class Z3{constructor(t){this.auth=t,this.counter=za,this._widgets=new Map}render(t,n){const r=this.counter;return this._widgets.set(r,new eR(t,this.auth.name,n||{})),this.counter++,r}reset(t){var n;const r=t||za;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(t){var n;const r=t||za;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(t){var n;const r=t||za;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class eR{constructor(t,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof t=="string"?document.getElementById(t):t;H(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=tR(50);const{callback:t,"expired-callback":n}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},J3)},Q3))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function tR(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}/**
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
 */const Wc=lb("rcb"),nR=new la(3e4,6e4),rR="https://www.google.com/recaptcha/api.js?";class iR{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Qe().grecaptcha)===null||t===void 0)&&t.render)}load(t,n=""){return H(oR(n),t,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Qe().grecaptcha):new Promise((r,i)=>{const o=Qe().setTimeout(()=>{i(pt(t,"network-request-failed"))},nR.get());Qe()[Wc]=()=>{Qe().clearTimeout(o),delete Qe()[Wc];const a=Qe().grecaptcha;if(!a){i(pt(t,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const s=`${rR}?${Oo({onload:Wc,render:"explicit",hl:n})}`;ab(s).catch(()=>{clearTimeout(o),i(pt(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var n;return!!(!((n=Qe().grecaptcha)===null||n===void 0)&&n.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function oR(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class sR{async load(t){return new Z3(t)}clearedOneInstance(){}}/**
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
 */const ub="recaptcha",aR={theme:"light",type:"image"};class lR{constructor(t,n=Object.assign({},aR),r){this.parameters=n,this.type=ub,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=it(r),this.isInvisible=this.parameters.size==="invisible",H(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;H(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sR:new iR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(t);return r||new Promise(i=>{const o=s=>{!s||(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){H(!this.parameters.sitekey,this.auth,"argument-error"),H(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),H(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof t=="function")t(n);else if(typeof t=="string"){const r=Qe()[t];typeof r=="function"&&r(n)}}}assertNotDestroyed(){H(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const n=document.createElement("div");t.appendChild(n),t=n}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){H(Fp()&&!Kp(),this.auth,"internal-error"),await uR(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await Y3(this.auth);H(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return H(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function uR(){let e=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}/**
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
 */class Yp{constructor(t,n){this.verificationId=t,this.onConfirmation=n}confirm(t){const n=ui._fromVerification(this.verificationId,t);return this.onConfirmation(n)}}async function cR(e,t,n){const r=it(e),i=await Yu(r,t,me(n));return new Yp(i,o=>Hu(r,o))}async function dR(e,t,n){const r=me(e);await Vu(!1,r,"phone");const i=await Yu(r.auth,t,me(n));return new Yp(i,o=>Xw(r,o))}async function fR(e,t,n){const r=me(e),i=await Yu(r.auth,t,me(n));return new Yp(i,o=>Qw(r,o))}async function Yu(e,t,n){var r;const i=await n.verify();try{H(typeof i=="string",e,"argument-error"),H(n.type===ub,e,"argument-error");let o;if(typeof t=="string"?o={phoneNumber:t}:o=t,"session"in o){const s=o.session;if("phoneNumber"in o)return H(s.type==="enroll",e,"internal-error"),(await I3(e,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{H(s.type==="signin",e,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return H(a,e,"missing-multi-factor-info"),(await q3(e,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await GP(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function pR(e,t){await Vp(me(e),t)}/**
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
 */class yn{constructor(t){this.providerId=yn.PROVIDER_ID,this.auth=it(t)}verifyPhoneNumber(t,n){return Yu(this.auth,t,me(n))}static credential(t,n){return ui._fromVerification(t,n)}static credentialFromResult(t){const n=t;return yn.credentialFromTaggedObject(n)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:n,temporaryProof:r}=t;return n&&r?ui._fromTokenResponse(n,r):null}}yn.PROVIDER_ID="phone";yn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Pi(e,t){return t?Vt(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Xp extends Lo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return qn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return qn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return qn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function hR(e){return Yw(e.auth,new Xp(e),e.bypassAuthState)}function mR(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),Kw(n,new Xp(e),e.bypassAuthState)}async function gR(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),Vp(n,new Xp(e),e.bypassAuthState)}/**
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
 */class cb{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hR;case"linkViaPopup":case"linkViaRedirect":return gR;case"reauthViaPopup":case"reauthViaRedirect":return mR;default:mt(this.auth,"internal-error")}}resolve(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vR=new la(2e3,1e4);async function yR(e,t,n){const r=it(e);Po(e,t,ir);const i=Pi(r,n);return new Hn(r,"signInViaPopup",t,i).executeNotNull()}async function wR(e,t,n){const r=me(e);Po(r.auth,t,ir);const i=Pi(r.auth,n);return new Hn(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}async function bR(e,t,n){const r=me(e);Po(r.auth,t,ir);const i=Pi(r.auth,n);return new Hn(r.auth,"linkViaPopup",t,i,r).executeNotNull()}class Hn extends cb{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const t=ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,vR.get())};t()}}Hn.currentPopupAction=null;/**
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
 */const SR="pendingRedirect",ws=new Map;class xR extends cb{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ws.get(this.auth._key());if(!t){try{const r=await _R(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ws.set(this.auth._key(),t)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _R(e,t){const n=fb(t),r=db(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qp(e,t){return db(e)._set(fb(t),"true")}function ER(){ws.clear()}function Jp(e,t){ws.set(e._key(),t)}function db(e){return Vt(e._redirectPersistence)}function fb(e){return li(SR,e.config.apiKey,e.name)}/**
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
 */function kR(e,t,n){return TR(e,t,n)}async function TR(e,t,n){const r=it(e);Po(e,t,ir);const i=Pi(r,n);return await Qp(i,r),i._openRedirect(r,t,"signInViaRedirect")}function CR(e,t,n){return OR(e,t,n)}async function OR(e,t,n){const r=me(e);Po(r.auth,t,ir);const i=Pi(r.auth,n);await Qp(i,r.auth);const o=await pb(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",o)}function IR(e,t,n){return PR(e,t,n)}async function PR(e,t,n){const r=me(e);Po(r.auth,t,ir);const i=Pi(r.auth,n);await Vu(!1,r,t.providerId),await Qp(i,r.auth);const o=await pb(r);return i._openRedirect(r.auth,t,"linkViaRedirect",o)}async function RR(e,t){return await it(e)._initializationPromise,Xu(e,t,!1)}async function Xu(e,t,n=!1){const r=it(e),i=Pi(r,t),s=await new xR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function pb(e){const t=ca(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}/**
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
 */const LR=10*60*1e3;class hb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!NR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!mb(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=LR&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(t))}saveEventToCache(t){this.cachedEventUids.add(xg(t)),this.lastProcessedEventTime=Date.now()}}function xg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function mb({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function NR(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mb(e);default:return!1}}/**
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
 */async function gb(e,t={}){return at(e,"GET","/v1/projects",t)}/**
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
 */const AR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$R=/^https?/;async function MR(e){if(e.config.emulator)return;const{authorizedDomains:t}=await gb(e);for(const n of t)try{if(DR(n))return}catch{}mt(e,"unauthorized-domain")}function DR(e){const t=Hs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!$R.test(n))return!1;if(AR.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jR=new la(3e4,6e4);function _g(){const e=Qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function zR(e){return new Promise((t,n)=>{var r,i,o;function s(){_g(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_g(),n(pt(e,"network-request-failed"))},timeout:jR.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Qe().gapi)===null||o===void 0)&&o.load)s();else{const a=lb("iframefcb");return Qe()[a]=()=>{gapi.load?s():n(pt(e,"network-request-failed"))},ab(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw al=null,t})}let al=null;function FR(e){return al=al||zR(e),al}/**
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
 */const UR=new la(5e3,15e3),BR="__/auth/iframe",VR="emulator/auth/iframe",HR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Up(t,VR):`https://${e.config.authDomain}/${BR}`,r={apiKey:t.apiKey,appName:e.name,v:Io},i=WR.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Oo(r).slice(1)}`}async function qR(e){const t=await FR(e),n=Qe().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:GR(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=pt(e,"network-request-failed"),a=Qe().setTimeout(()=>{o(s)},UR.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const KR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,XR=600,QR="_blank",JR="http://localhost";class Eg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZR(e,t,n,r=YR,i=XR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},KR),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ge().toLowerCase();n&&(a=Mw(u)?QR:n),$w(u)&&(t=t||JR,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[v,y])=>`${f}${v}=${y},`,"");if(IP(u)&&a!=="_self")return e4(t||"",a),new Eg(null);const d=window.open(t||"",a,c);H(d,e,"popup-blocked");try{d.focus()}catch{}return new Eg(d)}function e4(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const t4="__/auth/handler",n4="emulator/auth/handler";function uf(e,t,n,r,i,o){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Io,eventId:i};if(t instanceof ir){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Nk(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof No){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${r4(e)}?${Oo(a).slice(1)}`}function r4({config:e}){return e.emulator?Up(e,n4):`https://${e.authDomain}/${t4}`}/**
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
 */const Gc="webStorageSupport";class i4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_i,this._completeRedirectFn=Xu,this._overrideRedirectResult=Jp}async _openPopup(t,n,r,i){var o;bn((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=uf(t,n,r,Hs(),i);return ZR(t,s,ca())}async _openRedirect(t,n,r,i){return await this._originValidation(t),j3(uf(t,n,r,Hs(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(bn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await qR(t),r=new hb(t);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Gc,{type:Gc},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Gc];s!==void 0&&n(!!s),mt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fw()||Bp()||Ro()}}const o4=i4;class s4{constructor(t){this.factorId=t}_process(t,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(t,n.credential,r);case"signin":return this._finalizeSignIn(t,n.credential);default:return Nn("unexpected MultiFactorSessionType")}}}class Zp extends s4{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Zp(t)}_finalizeEnroll(t,n,r){return P3(t,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,n){return K3(t,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class vb{constructor(){}static assertion(t){return Zp._fromCredential(t)}}vb.FACTOR_ID="phone";var kg="@firebase/auth",Tg="0.20.6";/**
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
 */class a4{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function l4(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function u4(e){Si(new Mr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{H(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),H(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uw(e)},c=new NP(a,l,u);return dP(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Si(new Mr("auth-internal",t=>{const n=it(t.getProvider("auth").getImmediate());return(r=>new a4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rr(kg,Tg,l4(e)),Rr(kg,Tg,"esm2017")}u4("Browser");/**
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
 */function Ei(){return window}/**
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
 */const c4=2e3;async function d4(e,t,n){var r;const{BuildInfo:i}=Ei();bn(t.sessionId,"AuthEvent did not contain a session ID");const o=await g4(t.sessionId),s={};return Ro()?s.ibi=i.packageName:ua()?s.apn=i.packageName:mt(e,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,uf(e,n,t.type,void 0,(r=t.eventId)!==null&&r!==void 0?r:void 0,s)}async function f4(e){const{BuildInfo:t}=Ei(),n={};Ro()?n.iosBundleId=t.packageName:ua()?n.androidPackageName=t.packageName:mt(e,"operation-not-supported-in-this-environment"),await gb(e,n)}function p4(e){const{cordova:t}=Ei();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,OP()?"_blank":"_system","location=yes"),n(i)})})}async function h4(e,t,n){const{cordova:r}=Ei();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var d;o();const f=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof f=="function"&&f(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(pt(e,"redirect-cancelled-by-user"))},c4))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}t.addPassiveListener(l),document.addEventListener("resume",u,!1),ua()&&document.addEventListener("visibilitychange",c,!1),i=()=>{t.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function m4(e){var t,n,r,i,o,s,a,l,u,c;const d=Ei();H(typeof((t=d==null?void 0:d.universalLinks)===null||t===void 0?void 0:t.subscribe)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),H(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),H(typeof((o=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),H(typeof((l=(a=(s=d==null?void 0:d.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),H(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function g4(e){const t=v4(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function v4(e){if(bn(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}/**
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
 */const y4=20;class w4 extends hb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function b4(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:_4(),postBody:null,tenantId:e.tenantId,error:pt(e,"no-auth-event")}}function S4(e,t){return cf()._set(df(e),t)}async function Cg(e){const t=await cf()._get(df(e));return t&&await cf()._remove(df(e)),t}function x4(e,t){var n,r;const i=k4(t);if(i.includes("/__/auth/callback")){const o=ll(i),s=o.firebaseError?E4(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?pt(a):null;return l?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function _4(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<y4;n++){const r=Math.floor(Math.random()*t.length);e.push(t.charAt(r))}return e.join("")}function cf(){return Vt(qp)}function df(e){return li("authEvent",e.config.apiKey,e.name)}function E4(e){try{return JSON.parse(e)}catch{return null}}function k4(e){const t=ll(e),n=t.link?decodeURIComponent(t.link):void 0,r=ll(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return ll(i).link||i||r||n||e}function ll(e){if(!(e!=null&&e.includes("?")))return{};const[t,...n]=e.split("?");return Zi(n.join("?"))}/**
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
 */const T4=500;class C4{constructor(){this._redirectPersistence=_i,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Xu,this._overrideRedirectResult=Jp}async _initialize(t){const n=t._key();let r=this.eventManagers.get(n);return r||(r=new w4(t),this.eventManagers.set(n,r),this.attachCallbackListeners(t,r)),r}_openPopup(t){mt(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,n,r,i){m4(t);const o=await this._initialize(t);await o.initialized(),o.resetRedirect(),ER(),await this._originValidation(t);const s=b4(t,r,i);await S4(t,s);const a=await d4(t,s,n),l=await p4(a);return h4(t,o,l)}_isIframeWebStorageSupported(t,n){throw new Error("Method not implemented.")}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=f4(t)),this.originValidationPromises[n]}attachCallbackListeners(t,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Ei(),s=setTimeout(async()=>{await Cg(t),n.onEvent(Og())},T4),a=async c=>{clearTimeout(s);const d=await Cg(t);let f=null;d&&(c==null?void 0:c.url)&&(f=x4(d,c.url)),n.onEvent(f||Og())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Ei().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const O4=C4;function Og(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:pt("no-auth-event")}}/**
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
 */function I4(e,t){it(e)._logFramework(t)}var P4="@firebase/auth-compat",R4="0.2.19";/**
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
 */const L4=1e3;function bs(){var e;return((e=self==null?void 0:self.location)===null||e===void 0?void 0:e.protocol)||null}function N4(){return bs()==="http:"||bs()==="https:"}function yb(e=Ge()){return!!((bs()==="file:"||bs()==="ionic:"||bs()==="capacitor:")&&e.toLowerCase().match(/iphone|ipad|ipod|android/))}function A4(){return Np()||q1()}function $4(){return Y1()&&(document==null?void 0:document.documentMode)===11}function M4(e=Ge()){return/Edge\/\d+/.test(e)}function D4(e=Ge()){return $4()||M4(e)}function wb(){try{const e=self.localStorage,t=ca();if(e)return e.setItem(t,"1"),e.removeItem(t),D4()?jl():!0}catch{return eh()&&jl()}return!1}function eh(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function qc(){return(N4()||K1()||yb())&&!A4()&&wb()&&!eh()}function bb(){return yb()&&typeof document<"u"}async function j4(){return bb()?new Promise(e=>{const t=setTimeout(()=>{e(!1)},L4);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})}):!1}function z4(){return typeof window<"u"?window:null}/**
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
 */const Ut={LOCAL:"local",NONE:"none",SESSION:"session"},Yo=H,Sb="persistence";function F4(e,t){if(Yo(Object.values(Ut).includes(t),e,"invalid-persistence-type"),Np()){Yo(t!==Ut.SESSION,e,"unsupported-persistence-type");return}if(q1()){Yo(t===Ut.NONE,e,"unsupported-persistence-type");return}if(eh()){Yo(t===Ut.NONE||t===Ut.LOCAL&&jl(),e,"unsupported-persistence-type");return}Yo(t===Ut.NONE||wb(),e,"unsupported-persistence-type")}async function ff(e){await e._initializationPromise;const t=xb(),n=li(Sb,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function U4(e,t){const n=xb();if(!n)return[];const r=li(Sb,e,t);switch(n.getItem(r)){case Ut.NONE:return[So];case Ut.LOCAL:return[Ks,_i];case Ut.SESSION:return[_i];default:return[]}}function xb(){var e;try{return((e=z4())===null||e===void 0?void 0:e.sessionStorage)||null}catch{return null}}/**
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
 */const B4=H;class yr{constructor(){this.browserResolver=Vt(o4),this.cordovaResolver=Vt(O4),this.underlyingResolver=null,this._redirectPersistence=_i,this._completeRedirectFn=Xu,this._overrideRedirectResult=Jp}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,n,r,i)}async _openRedirect(t,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,n,r,i)}_isIframeWebStorageSupported(t,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,n)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return bb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return B4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await j4();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}/**
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
 */function _b(e){return e.unwrap()}function V4(e){return e.wrapped()}/**
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
 */function H4(e){return Eb(e)}function W4(e,t){var n,r;const i=(n=t.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=t)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const o=t;o.resolver=new G4(e,O3(e,t))}else if(i){const o=Eb(t),s=t;o&&(s.credential=o,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function Eb(e){const{_tokenResponse:t}=e instanceof Dt?e.customData:e;if(!t)return null;if(!(e instanceof Dt)&&"temporaryProof"in t&&"phoneNumber"in t)return yn.credentialFromResult(e);const n=t.providerId;if(!n||n===Ko.PASSWORD)return null;let r;switch(n){case Ko.GOOGLE:r=Pn;break;case Ko.FACEBOOK:r=In;break;case Ko.GITHUB:r=Rn;break;case Ko.TWITTER:r=Ln;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=t;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?xo._create(n,a):Dn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new lo(n).credential({idToken:i,accessToken:o,rawNonce:l})}return e instanceof Dt?r.credentialFromError(e):r.credentialFromResult(e)}function Pt(e,t){return t.catch(n=>{throw n instanceof Dt&&W4(e,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:H4(n),additionalUserInfo:C3(n),user:Wn.getOrCreate(i)}})}async function pf(e,t){const n=await t;return{verificationId:n.verificationId,confirm:r=>Pt(e,n.confirm(r))}}class G4{constructor(t,n){this.resolver=n,this.auth=V4(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return Pt(_b(this.auth),this.resolver.resolveSignIn(t))}}/**
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
 */class Wn{constructor(t){this._delegate=t,this.multiFactor=L3(t)}static getOrCreate(t){return Wn.USER_MAP.has(t)||Wn.USER_MAP.set(t,new Wn(t)),Wn.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return Pt(this.auth,Xw(this._delegate,t))}async linkWithPhoneNumber(t,n){return pf(this.auth,dR(this._delegate,t,n))}async linkWithPopup(t){return Pt(this.auth,bR(this._delegate,t,yr))}async linkWithRedirect(t){return await ff(it(this.auth)),IR(this._delegate,t,yr)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return Pt(this.auth,Qw(this._delegate,t))}reauthenticateWithPhoneNumber(t,n){return pf(this.auth,fR(this._delegate,t,n))}reauthenticateWithPopup(t){return Pt(this.auth,wR(this._delegate,t,yr))}async reauthenticateWithRedirect(t){return await ff(it(this.auth)),CR(this._delegate,t,yr)}sendEmailVerification(t){return g3(this._delegate,t)}async unlink(t){return await n3(this._delegate,t),this}updateEmail(t){return b3(this._delegate,t)}updatePassword(t){return S3(this._delegate,t)}updatePhoneNumber(t){return pR(this._delegate,t)}updateProfile(t){return w3(this._delegate,t)}verifyBeforeUpdateEmail(t,n){return v3(this._delegate,t,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Wn.USER_MAP=new WeakMap;/**
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
 */const Xo=H;class hf{constructor(t,n){if(this.app=t,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=t.options;Xo(r,"invalid-api-key",{appName:t.name}),Xo(r,"invalid-api-key",{appName:t.name});const i=typeof window<"u"?yr:void 0;this._delegate=n.initialize({options:{persistence:q4(r,t.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(uP),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Wn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,n){AP(this._delegate,t,n)}applyActionCode(t){return a3(this._delegate,t)}checkActionCode(t){return Jw(this._delegate,t)}confirmPasswordReset(t,n){return s3(this._delegate,t,n)}async createUserWithEmailAndPassword(t,n){return Pt(this._delegate,u3(this._delegate,t,n))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return m3(this._delegate,t)}isSignInWithEmailLink(t){return f3(this._delegate,t)}async getRedirectResult(){Xo(qc(),this._delegate,"operation-not-supported-in-this-environment");const t=await RR(this._delegate,yr);return t?Pt(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){I4(this._delegate,t)}onAuthStateChanged(t,n,r){const{next:i,error:o,complete:s}=Ig(t,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(t,n,r){const{next:i,error:o,complete:s}=Ig(t,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(t,n){return d3(this._delegate,t,n)}sendPasswordResetEmail(t,n){return o3(this._delegate,t,n||void 0)}async setPersistence(t){F4(this._delegate,t);let n;switch(t){case Ut.SESSION:n=_i;break;case Ut.LOCAL:n=await Vt(Ks)._isAvailable()?Ks:qp;break;case Ut.NONE:n=So;break;default:return mt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return Pt(this._delegate,t3(this._delegate))}signInWithCredential(t){return Pt(this._delegate,Hu(this._delegate,t))}signInWithCustomToken(t){return Pt(this._delegate,i3(this._delegate,t))}signInWithEmailAndPassword(t,n){return Pt(this._delegate,c3(this._delegate,t,n))}signInWithEmailLink(t,n){return Pt(this._delegate,p3(this._delegate,t,n))}signInWithPhoneNumber(t,n){return pf(this._delegate,cR(this._delegate,t,n))}async signInWithPopup(t){return Xo(qc(),this._delegate,"operation-not-supported-in-this-environment"),Pt(this._delegate,yR(this._delegate,t,yr))}async signInWithRedirect(t){return Xo(qc(),this._delegate,"operation-not-supported-in-this-environment"),await ff(this._delegate),kR(this._delegate,t,yr)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return l3(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}hf.Persistence=Ut;function Ig(e,t,n){let r=e;typeof e!="function"&&({next:r,error:t,complete:n}=e);const i=r;return{next:s=>i(s&&Wn.getOrCreate(s)),error:t,complete:n}}function q4(e,t){const n=U4(e,t);if(typeof self<"u"&&!n.includes(Ks)&&n.push(Ks),typeof window<"u")for(const r of[qp,_i])n.includes(r)||n.push(r);return n.includes(So)||n.push(So),n}/**
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
 */class th{constructor(){this.providerId="phone",this._delegate=new yn(_b(Hr.auth()))}static credential(t,n){return yn.credential(t,n)}verifyPhoneNumber(t,n){return this._delegate.verifyPhoneNumber(t,n)}unwrap(){return this._delegate}}th.PHONE_SIGN_IN_METHOD=yn.PHONE_SIGN_IN_METHOD;th.PROVIDER_ID=yn.PROVIDER_ID;/**
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
 */const K4=H;class Y4{constructor(t,n,r=Hr.app()){var i;K4((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new lR(t,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const X4="auth-compat";function Q4(e){e.INTERNAL.registerComponent(new Mr(X4,t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("auth");return new hf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Mi.EMAIL_SIGNIN,PASSWORD_RESET:Mi.PASSWORD_RESET,RECOVER_EMAIL:Mi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Mi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Mi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Mi.VERIFY_EMAIL}},EmailAuthProvider:Wr,FacebookAuthProvider:In,GithubAuthProvider:Rn,GoogleAuthProvider:Pn,OAuthProvider:lo,SAMLAuthProvider:Ul,PhoneAuthProvider:th,PhoneMultiFactorGenerator:vb,RecaptchaVerifier:Y4,TwitterAuthProvider:Ln,Auth:hf,AuthCredential:Lo,Error:Dt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(P4,R4)}Q4(Hr);const J4={apiKey:"AIzaSyDDMsOwTqVq2VoGRyDvvLEbZZvFZP9UuLE",authDomain:"ecommerce-b7c65.firebaseapp.com",projectId:"ecommerce-b7c65",storageBucket:"ecommerce-b7c65.appspot.com",messagingSenderId:"45436486623",appId:"1:45436486623:web:348d4c7d1cade34fa57a6a"};Hr.initializeApp(J4);const Kn=Hr.auth(),kb=new Hr.auth.GoogleAuthProvider;var Z4=function(e){return{display:e?"flex":"none"}},Pg="#4fa94d",e8={"aria-busy":!0,role:"status"},Rg=globalThis&&globalThis.__assign||function(){return Rg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Rg.apply(this,arguments)},Lg=globalThis&&globalThis.__assign||function(){return Lg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lg.apply(this,arguments)},Ng=globalThis&&globalThis.__assign||function(){return Ng=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ng.apply(this,arguments)},Ag=globalThis&&globalThis.__assign||function(){return Ag=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ag.apply(this,arguments)},$g=globalThis&&globalThis.__assign||function(){return $g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},$g.apply(this,arguments)},Mg=globalThis&&globalThis.__assign||function(){return Mg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Mg.apply(this,arguments)},Dg=globalThis&&globalThis.__assign||function(){return Dg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Dg.apply(this,arguments)},Tb=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},dn=242.776657104492,t8=1.6,n8=ra(jg||(jg=Tb([`
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
`])),dn*.14,dn,dn*.11,dn*.35,dn,dn*.35,dn*.01,dn,dn*.99);K.path(zg||(zg=Tb([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),dn*.01,dn,n8,t8);var jg,zg,Fg=globalThis&&globalThis.__assign||function(){return Fg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Fg.apply(this,arguments)},Ug=globalThis&&globalThis.__assign||function(){return Ug=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ug.apply(this,arguments)},eo=globalThis&&globalThis.__assign||function(){return eo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},eo.apply(this,arguments)},Kc=20,r8=function(e){return["M"+e+" 0c0-9.94-8.06",e,e,e].join("-")},i8=function(e,t,n){var r=Math.max(e,t),i=-n-r/2+1,o=n*2+r;return[i,i,o,o].join(" ")},Qu=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,i=r===void 0?80:r,o=e.color,s=o===void 0?Pg:o,a=e.secondaryColor,l=a===void 0?Pg:a,u=e.ariaLabel,c=u===void 0?"oval-loading":u,d=e.wrapperStyle,f=e.wrapperClass,v=e.visible,y=v===void 0?!0:v,b=e.strokeWidth,w=b===void 0?2:b,p=e.strokeWidthSecondary;return h("div",{...eo({style:eo(eo(eo({},Z4(y)),d),{padding:3}),className:f,"data-testid":"oval-loading","aria-label":c},e8),children:h("svg",{width:i,height:n,viewBox:i8(Number(w),Number(p||w),Kc),xmlns:"http://www.w3.org/2000/svg",stroke:s,"data-testid":"oval-svg",children:h("g",{fill:"none",fillRule:"evenodd",children:N("g",{transform:"translate(1 1)",strokeWidth:Number(p||w),"data-testid":"oval-secondary-group",children:[h("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:Kc,stroke:l,strokeWidth:w}),h("path",{d:r8(Kc),children:h("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})})},Bg=globalThis&&globalThis.__assign||function(){return Bg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Bg.apply(this,arguments)},Vg=globalThis&&globalThis.__assign||function(){return Vg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Vg.apply(this,arguments)},Hg=globalThis&&globalThis.__assign||function(){return Hg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Hg.apply(this,arguments)},Wg=globalThis&&globalThis.__assign||function(){return Wg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wg.apply(this,arguments)},o8=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var i=t.split("."),o=i.length,s=r[i[0]],a=1;s!=null&&a<o;)s=s[i[a]],a+=1;if(typeof s<"u")return s}return n}},nh=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Gg=globalThis&&globalThis.__assign||function(){return Gg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gg.apply(this,arguments)},s8=ra(qg||(qg=nh([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));K.svg(Kg||(Kg=nh([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),s8,o8("speed","0.75"));K.polyline(Yg||(Yg=nh([`
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
`])),function(e){return e.width});var qg,Kg,Yg,Xg=globalThis&&globalThis.__assign||function(){return Xg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xg.apply(this,arguments)},Qg=globalThis&&globalThis.__assign||function(){return Qg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qg.apply(this,arguments)},Jg=globalThis&&globalThis.__assign||function(){return Jg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jg.apply(this,arguments)},rh=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Zg=globalThis&&globalThis.__assign||function(){return Zg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zg.apply(this,arguments)},a8=ra(ev||(ev=rh([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));K.polygon(tv||(tv=rh([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),a8);K.svg(nv||(nv=rh([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var ev,tv,nv,rv=globalThis&&globalThis.__assign||function(){return rv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rv.apply(this,arguments)},iv=globalThis&&globalThis.__assign||function(){return iv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},iv.apply(this,arguments)},ov=globalThis&&globalThis.__assign||function(){return ov=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ov.apply(this,arguments)},sv=globalThis&&globalThis.__assign||function(){return sv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sv.apply(this,arguments)},av=globalThis&&globalThis.__assign||function(){return av=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},av.apply(this,arguments)},lv=globalThis&&globalThis.__assign||function(){return lv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lv.apply(this,arguments)},uv=globalThis&&globalThis.__assign||function(){return uv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},uv.apply(this,arguments)},cv=globalThis&&globalThis.__assign||function(){return cv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cv.apply(this,arguments)},dv=globalThis&&globalThis.__assign||function(){return dv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},dv.apply(this,arguments)},fv=globalThis&&globalThis.__assign||function(){return fv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fv.apply(this,arguments)},pv=globalThis&&globalThis.__assign||function(){return pv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pv.apply(this,arguments)},hv=globalThis&&globalThis.__assign||function(){return hv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hv.apply(this,arguments)},mv=globalThis&&globalThis.__assign||function(){return mv=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mv.apply(this,arguments)};const l8=K.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`,u8=K.section`
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

`,c8=K.form`
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

                ${e=>e.fadeText&&Fe`
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

`,gv=K.div`
    display: inline;
    font-weight: 500;
    width: 100%;
    font-size:  ${e=>e.theme.font3xs};


    ${e=>e.right&&Fe`
        text-align: left;
  `}


  
  ${e=>e.central&&Fe`
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
`,d8=()=>{const{t:e}=xn(),[t,n]=P.exports.useState(""),[r,i]=P.exports.useState(""),{loading:o,visible:s,showPassword:a,userInfo:l}=yi(y=>y.userLogin),u=na(),c=Co();P.exports.useEffect(()=>{l&&l.token&&u("/")},[l]);const d=()=>{c({type:"TOGGLE_PASSWORD"})};return h(l8,{children:N(u8,{children:[h("img",{src:Oi,alt:"brand-logo"}),N(c8,{onSubmit:async y=>{if(y.preventDefault(),c({type:"USER_LOGIN_REQUEST"}),!t||!r){fe.error(e("Email and password is required")),setTimeout(()=>c({type:"USER_LOGIN_FAIL"}),6e3);return}if(r.length<6){fe.error(e("Password must be at least 6 characters long")),setTimeout(()=>c({type:"USER_LOGIN_FAIL"}),6e3);return}try{const b=await Kn.signInWithEmailAndPassword(t,r),{user:w}=b,p=await w.getIdTokenResult();c({type:"USER_LOGIN_DETAILS",payload:{email:w.email,displayName:w.displayName,token:p.token}}),u("/")}catch(b){console.log(b),fe.error(e("User is not registered")),setTimeout(()=>c({type:"USER_LOGIN_FAIL"}),6e3)}n(""),i("")},fadeText:o,children:[h("div",{className:"google",onClick:async()=>{Kn.signInWithPopup(kb).then(async y=>{const{user:b}=y,w=await b.getIdTokenResult();c({type:"USER_LOGIN_DETAILS",payload:{email:b.email,displayName:b.displayName,token:w.token}}),u("/")}).catch(y=>{console.log(y),fe.error(y.message)})},children:N("div",{className:"g-button",children:[h("img",{className:"g-logo",src:kw,alt:"Google Logo"}),h("p",{className:"g-text",children:e("Sign in with Google")})]})}),h("div",{children:e("or")}),N("div",{children:[h("span",{children:h(ju,{title:e("Email")})}),h("input",{type:"email",name:"email",id:"email",value:t,onChange:y=>n(y.target.value),placeholder:`${e("Email")}...`})]}),N("div",{children:[h("span",{children:h(Tw,{title:e("Password")})}),h("input",{type:a?"text":"password",name:"password",id:"password",value:r,onChange:y=>i(y.target.value),placeholder:`${e("Password")}...`,onFocus:()=>c({type:"SET_VISIBLE"})}),s&&h("p",{className:"password",onClick:d,children:a?h(N1,{}):h(L1,{})})]}),h(gv,{right:!0,children:h("p",{onClick:()=>u("/forgot/password"),children:e("Forgot your password?")})}),N("div",{children:[h("input",{type:"submit",name:"Login",value:e("login"),id:"submit"}),o&&h("span",{className:"spinner",children:h(Qu,{height:25,width:25,color:"hsl(0, 0%, 83%)",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:7,strokeWidthSecondary:7})})]}),N(gv,{central:!0,children:[e("Don't have an account?")," \xA0 ",h("p",{onClick:()=>u(`/${encodeURI(e("register"))}`),children:e("Sign Up")})]})]}),h("div",{})]})})},f8=K.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`,p8=K.section`
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

`,h8=K.form`
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

                ${e=>e.fadeText&&Fe`
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

`,m8=K.div`
    display: inline;
    font-weight: 500;
    width: 100%;
    font-size:  ${e=>e.theme.font3xs};


    ${e=>e.right&&Fe`
        text-align: left;
  `}


  
  ${e=>e.central&&Fe`
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
`,g8=()=>{const[e,t]=P.exports.useState(""),{t:n}=xn(),r=na(),i=Co(),{loading:o}=yi(u=>u.userRegister),{userInfo:s}=yi(u=>({...u.userLogin}));return P.exports.useEffect(()=>{s&&s.token&&r("/")},[s]),h(f8,{children:N(p8,{children:[h("img",{src:Oi,alt:"brand-logo"}),N(h8,{onSubmit:async u=>{if(u.preventDefault(),i({type:"USER_REGISTER_REQUEST"}),!e){fe.error(n("Email is required!")),setTimeout(()=>i({type:"USER_REGISTER_FAIL"}),6e3);return}const d={url:"https://wizcart.netlify.app/register/complete",handleCodeInApp:!0};await Kn.sendSignInLinkToEmail(e,d),fe.success(`${n(`Email is sent to ${e}. Click to complete registration`)}`),setTimeout(()=>i({type:"USER_REGISTER_SUCCESS"}),6e3),window.localStorage.setItem("emailForRegistration",e),t("")},fadeText:o,children:[h("div",{className:"google",onClick:async()=>{const c={url:"https://wizcart.netlify.app/register/complete",handleCodeInApp:!0};Kn.signInWithPopup(kb).then(async d=>{const{user:f}=d,v=await f.email;await Kn.sendSignInLinkToEmail(v,c),fe.success(`${n(`Email is sent to ${v}. Click to complete registration`)}`),setTimeout(()=>i({type:"USER_REGISTER_SUCCESS"}),6e3),window.localStorage.setItem("emailForRegistration",v)}).catch(d=>{console.log(d),fe.error(d.message)})},children:N("div",{className:"g-button",children:[h("img",{className:"g-logo",src:kw,alt:"Google Logo"}),h("p",{className:"g-text",children:n("Sign up with Google")})]})}),h("div",{children:n("or")}),N("div",{children:[h("span",{children:h(ju,{title:n("Email")})}),h("input",{type:"email",name:"email",id:"email",value:e,onChange:u=>t(u.target.value),placeholder:`${n("Email")}...`,autoFocus:!0})]}),N("div",{children:[h("input",{type:"submit",name:"register",value:n("register"),id:"submit"}),o&&h("span",{className:"spinner",children:h(Qu,{height:25,width:25,color:"hsl(0, 0%, 83%)",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:7,strokeWidthSecondary:7})})]}),N(m8,{central:!0,children:[n("Already have an account?")," \xA0 ",h("p",{onClick:()=>r(`/${encodeURI(n("login"))}`),children:n("login")})]})]}),h("div",{})]})})},v8=K.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`,y8=K.section`
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

`,w8=K.form`
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

                ${e=>e.fadeText&&Fe`
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

`,b8=()=>{const[e,t]=P.exports.useState(""),[n,r]=P.exports.useState(""),i=Co(),{loading:o,visible:s,showPassword:a}=yi(f=>f.userRegisterComplete),l=na(),{t:u}=xn(),c=()=>{i({type:"TOGGLE_PASSWORD"})};return P.exports.useEffect(()=>{t(window.localStorage.getItem("emailForRegistration"))},[]),h(v8,{children:N(y8,{children:[h("img",{src:Oi,alt:"brand-logo"}),N(w8,{onSubmit:async f=>{if(f.preventDefault(),i({type:"USER_REGISTER_COMPLETE_REQUEST"}),!e||!n){fe.error(u("Email and password is required")),setTimeout(()=>i({type:"USER_REGISTER_COMPLETE_FAIL"}),6e3);return}if(n.length<6){fe.error(u("Password must be at least 6 characters long")),setTimeout(()=>i({type:"USER_REGISTER_COMPLETE_FAIL"}),6e3);return}try{if((await Kn.signInWithEmailLink(e,window.location.href)).user.emailVerified){window.localStorage.removeItem("emailForRegistration");let y=Kn.currentUser;await y.updatePassword(n);const b=await y.getIdTokenResult();console.log("user",y,"token",b),setTimeout(()=>i({type:"USER_REGISTER_COMPLETE_SUCCESS"}),6e3),l("/"),i({type:"USER_REGISTER_COMPLETE_FAIL"})}}catch(v){console.log(v),fe.error(v.message),setTimeout(()=>i({type:"USER_REGISTER_COMPLETE_FAIL"}),6e3)}t(""),r("")},fadeText:o,children:[N("div",{children:[h("span",{children:h(ju,{title:u("Email")})}),h("input",{type:"email",name:"email",id:"email",value:e,placeholder:`${u("Email")}...`,disabled:!0})]}),N("div",{children:[h("span",{children:h(Tw,{title:u("Password")})}),h("input",{type:a?"text":"password",name:"password",id:"password",value:n,placeholder:`${u("Password")}...`,onChange:f=>r(f.target.value),onFocus:()=>i({type:"SET_VISIBLE"}),autoFocus:!0}),s&&h("p",{className:"password",onClick:c,children:a?h(N1,{}):h(L1,{})})]}),N("div",{children:[h("input",{type:"submit",name:"completeRegistration",value:u("complete registration"),id:"submit"}),o&&h("span",{className:"spinner",children:h(Qu,{height:25,width:25,color:"hsl(0, 0%, 83%)",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:7,strokeWidthSecondary:7})})]})]}),h("div",{})]})})},S8=K.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,x8=K.section`
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

`,_8=K.form`
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

                ${e=>e.fadeText&&Fe`
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

`,E8=()=>{const[e,t]=P.exports.useState(""),n=Co(),r=na(),{t:i}=xn(),{loading:o}=yi(l=>l.userPasswordReset),{userInfo:s}=yi(l=>({...l.userLogin}));return P.exports.useEffect(()=>{s&&s.token&&r("/")},[s]),h(S8,{children:N(x8,{children:[h("img",{src:Oi,alt:"brand-logo"}),N(_8,{onSubmit:async l=>{if(l.preventDefault(),n({type:"USER_PASSWORD_RESET_REQUEST"}),!e){fe.error(i("Email is required!")),setTimeout(()=>n({type:"USER_PASSWORD_RESET_FAIL"}),6e3);return}const c={url:"https://wizcart.netlify.app/login",handleCodeInApp:!0};await Kn.sendPasswordResetEmail(e,c).then(()=>{t(""),fe.success("Check your email for password reset link"),setTimeout(()=>n({type:"USER_PASSWORD_RESET_SUCCESS"}),6e3)}).catch(d=>{fe.error(d.message),setTimeout(()=>n({type:"USER_PASSWORD_RESET_FAIL"}),6e3)})},fadeText:o,children:[N("div",{children:[h("span",{children:h(ju,{title:i("Email")})}),h("input",{type:"email",name:"email",id:"email",value:e,onChange:l=>t(l.target.value),placeholder:`${i("Email")}...`,autoFocus:!0})]}),N("div",{children:[h("input",{type:"submit",name:"submit",value:i("submit"),id:"submit"}),o&&h("span",{className:"spinner",children:h(Qu,{height:25,width:25,color:"hsl(0, 0%, 83%)",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:7,strokeWidthSecondary:7})})]})]}),h("div",{})]})})},k8="/assets/icon-logo.9dacd16a.png",T8="/assets/subgirl.83349ea8.jpg",C8=K.section`
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
`,O8=K.div`
    width: 100%;
    ${Ci}
`,I8=K.div`
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




   span  {
    width: 100%;
    img {
        width: 100%;
        object-fit: cover;
        object-position: right;
    }
   }
`,P8=K.h1`
     font-size: ${e=>e.theme.font3xl};
     color: ${e=>e.theme.white};
     z-index: 10;
     text-transform: capitalize;
     margin-bottom: 30px;
`,R8=K.div`
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
`,L8=()=>{const{t:e}=xn(),t=mp();return h(St,{children:t.pathname==="/"&&h(C8,{children:N(O8,{children:[h(I8,{children:h(Xt.exports.LazyLoadImage,{src:T8,effect:"blur",alt:"lady smile"})}),N(P8,{children:[e("Subscribe")," ",h("br",{}),e("for news and offers")]}),N(R8,{children:[h("input",{type:"email",placeholder:e("Enter your email")}),h("button",{children:e("Submit")})]})]})})})},N8="/assets/visa.6b092193.svg",A8="/assets/mastercard.404755b0.svg",$8="/assets/maestro.993fa5b5.svg",M8="/assets/google-pay.90b90717.svg",D8=K.footer`
    background:  ${e=>e.theme.eerieBlack};
    padding: 0 0 30px;
    position:relative;
`,j8=K.div`
    border-bottom: 1px solid  ${e=>e.theme.onyx};
    padding-bottom: 30px;
    margin-bottom: 30px;

    @media (max-width: 570px) {
        padding-top: 30px;
    }

    @media (min-width: 768px) {
        padding-top: 50px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 50px;
    }
`,z8=K.div`
    ${Ci}

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        row-gap: 50px;
        column-gap: 20px;
    }
`,Di=K.ul`
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
`,It=K.li`
     padding: 5px 0;

     ${e=>e.flex&&Fe`
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
`,F8=K.ul`
      
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
`,Qo=K.a`
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
`,U8=K.div`
    margin-bottom: 50px;
    text-align: center;

    @media (min-width: 1024px) {
        margin-bottom: 0;
    }
`,B8=K.div`
    ${Ci}
    display: flex;
    justify-content: space-between;
    align-items: center;

    p.payments {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        span {
        background: ${e=>e.theme.white};
        border-radius: ${e=>e.theme.borderRadiusSm};
        padding: 4px;
        }

        img {
            width: 100%;
            height: auto;
            max-width: 30px;
        }
    }

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
`,V8=[{id:1,img:N8},{id:2,img:A8},{id:3,img:M8},{id:5,img:$8}],H8=()=>{const{t:e}=xn();return N(D8,{children:[h(L8,{}),h(j8,{children:N(z8,{children:[N(Di,{children:[h("img",{src:k8,alt:"logo"}),h(It,{children:h("h2",{className:"brand",children:"WizCart"})})]}),N(Di,{children:[h(It,{children:h("h2",{children:e("About")})}),h(It,{children:h("a",{href:"#",children:e("About")})})]}),N(Di,{children:[h(It,{children:h("h2",{children:e("Customer Service")})}),h(It,{children:h("a",{href:"#",children:e("Contact Us")})}),h(It,{children:h("a",{href:"#",children:"FAQs"})})]}),N(Di,{children:[h(It,{children:h("h2",{children:e("Legal")})}),h(It,{children:h("a",{href:"#",children:e("Terms of Service")})}),h(It,{children:h("a",{href:"#",children:e("Terms of Purchase")})}),h(It,{children:h("a",{href:"#",children:e("Privacy Policy")})}),h(It,{children:h("a",{href:"#",children:e("Refund Policy")})}),h(It,{children:h("a",{href:"#",children:e("Cookie Policy")})})]}),N(Di,{children:[h(It,{children:h("h2",{children:e("Follow Us")})}),h("li",{children:N(F8,{children:[h("li",{children:h(Qo,{children:h("img",{src:Op,alt:"facebook",title:"facebook"})})}),h("li",{children:h(Qo,{children:h("img",{src:Ip,alt:"twitter",title:"twitter"})})}),h("li",{children:h(Qo,{children:h("img",{src:Rp,alt:"pinterest",title:"pinterest"})})}),h("li",{children:h(Qo,{children:h("img",{src:Pp,alt:"instagram",title:"instagram"})})}),h("li",{children:h(Qo,{children:h("img",{src:Lp,alt:"youtube",title:"youtube"})})})]})})]}),h(Di,{children:h(It,{children:h("h2",{children:"Future"})})})]})}),h(U8,{children:N(B8,{children:[h("p",{className:"payments",children:V8.map(({id:t,img:n})=>h("span",{children:h("img",{src:n,alt:"payment method"})},t))}),N("p",{children:["\xA9 ",new Date().getFullYear()," ",h("a",{href:"#",children:"WizCart"}),". ",e("All Rights Reserved"),"."]})]})})]})};function W8(){const{t:e}=xn(),t=Co();return P.exports.useEffect(()=>{const n=Kn.onAuthStateChanged(async r=>{if(r){let i=await r.getIdTokenResult();t({type:"USER_LOGIN_DETAILS",payload:{email:r.email,displayName:r.displayName,token:i.token}})}});return()=>n()},[t]),N(wE,{children:[h(P2,{}),N(T2,{theme:R2,children:[h(bE,{}),h(aP,{}),h(TE,{}),h(xC,{}),h(Cp,{}),N(P_,{children:[h(zi,{path:"/",element:h(rP,{})}),h(zi,{path:`${encodeURI(e("login"))}`,element:h(d8,{})}),h(zi,{path:`${encodeURI(e("register"))}`,element:h(g8,{})}),h(zi,{path:`${encodeURI(e("register/complete"))}`,element:h(b8,{})}),h(zi,{path:`${encodeURI(e("forgot/password"))}`,element:h(E8,{})})]}),h(H8,{})]})]})}const G8=K.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    background-color: ${e=>e.theme.white};
    overflow: hidden;
`,q8=K.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`,vv=ra`
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
`,K8=K.div`
    width: 100px;
    height: 100px;
    display: inline-block;
    padding: 0px;

   span {
    width: 100%;
    
    img {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: auto;
        max-width: 90px;
        -webkit-animation: ${vv} 2s alternate infinite ease-in;
        animation:  ${vv} 2s alternate infinite ease-in;
    }
   }
`,Y8=()=>{const[e,t]=P.exports.useState(!0);return P.exports.useEffect(()=>{const n=setTimeout(()=>{t(!1)},2e3);return()=>{clearTimeout(n)}},[e]),h(St,{children:e?h(G8,{children:h(q8,{children:h(K8,{children:h(Xt.exports.LazyLoadImage,{src:Oi,effect:"blur",alt:"logo"})})})}):""})};function Lr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mf(e,t){return mf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},mf(e,t)}function Ju(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mf(e,t)}function fa(e,t){if(t&&(Or(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Lr(e)}function jn(e){return jn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},jn(e)}function X8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Q8(e){return S1(e)||X8(e)||x1(e)||_1()}function yv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yv(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var J8={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},Z8=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};an(this,e),this.init(t,n)}return ln(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||J8,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,o){return o&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,wv(wv({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}}]),e}(),An=new Z8,zr=function(){function e(){an(this,e),this.observers={}}return ln(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(o){i.observers[o]=i.observers[o]||[],i.observers[o].push(r)}),this}},{key:"off",value:function(n,r){if(!!this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(this.observers[n]){var s=[].concat(this.observers[n]);s.forEach(function(l){l.apply(void 0,i)})}if(this.observers["*"]){var a=[].concat(this.observers["*"]);a.forEach(function(l){l.apply(l,[n].concat(i))})}}}]),e}();function Jo(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function bv(e){return e==null?"":""+e}function e5(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function ih(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function i(){return!e||typeof e=="string"}for(var o=typeof t!="string"?[].concat(t):t.split(".");o.length>1;){if(i())return{};var s=r(o.shift());!e[s]&&n&&(e[s]=new n),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function Sv(e,t,n){var r=ih(e,t,Object),i=r.obj,o=r.k;i[o]=n}function t5(e,t,n,r){var i=ih(e,t,Object),o=i.obj,s=i.k;o[s]=o[s]||[],r&&(o[s]=o[s].concat(n)),r||o[s].push(n)}function Wl(e,t){var n=ih(e,t),r=n.obj,i=n.k;if(!!r)return r[i]}function xv(e,t,n){var r=Wl(e,n);return r!==void 0?r:Wl(t,n)}function Cb(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Cb(e[r],t[r],n):e[r]=t[r]);return e}function ji(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var n5={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function r5(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return n5[t]}):e}var Zu=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,i5=[" ",",","?","!",";"];function o5(e,t,n){t=t||"",n=n||"";var r=i5.filter(function(a){return t.indexOf(a)<0&&n.indexOf(a)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(a){return a==="?"?"\\?":a}).join("|"),")")),o=!i.test(e);if(!o){var s=e.indexOf(n);s>0&&!i.test(e.substring(0,s))&&(o=!0)}return o}function _v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_v(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s5(e){var t=a5();return function(){var r=jn(e),i;if(t){var o=jn(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return fa(this,i)}}function a5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ob(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!!e){if(e[t])return e[t];for(var r=t.split(n),i=e,o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){for(var s=2,a=r.slice(o,o+s).join(n),l=i[a];l===void 0&&r.length>o+s;)s++,a=r.slice(o,o+s).join(n),l=i[a];if(l===void 0)return;if(l===null)return null;if(t.endsWith(a)){if(typeof l=="string")return l;if(a&&typeof l[a]=="string")return l[a]}var u=r.slice(o+s).join(n);return u?Ob(l,u,n):void 0}i=i[r[o]]}return i}}var l5=function(e){Ju(n,e);var t=s5(n);function n(r){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return an(this,n),i=t.call(this),Zu&&zr.call(Lr(i)),i.data=r||{},i.options=o,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return ln(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var o=this.options.ns.indexOf(i);o>-1&&this.options.ns.splice(o,1)}},{key:"getResource",value:function(i,o,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,u=a.ignoreJSONStructure!==void 0?a.ignoreJSONStructure:this.options.ignoreJSONStructure,c=[i,o];s&&typeof s!="string"&&(c=c.concat(s)),s&&typeof s=="string"&&(c=c.concat(l?s.split(l):s)),i.indexOf(".")>-1&&(c=i.split("."));var d=Wl(this.data,c);return d||!u||typeof s!="string"?d:Ob(this.data&&this.data[i]&&this.data[i][o],s,l)}},{key:"addResource",value:function(i,o,s,a){var l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},u=this.options.keySeparator;u===void 0&&(u=".");var c=[i,o];s&&(c=c.concat(u?s.split(u):s)),i.indexOf(".")>-1&&(c=i.split("."),a=o,o=c[1]),this.addNamespaces(o),Sv(this.data,c,a),l.silent||this.emit("added",i,o,s,a)}},{key:"addResources",value:function(i,o,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var l in s)(typeof s[l]=="string"||Object.prototype.toString.apply(s[l])==="[object Array]")&&this.addResource(i,o,l,s[l],{silent:!0});a.silent||this.emit("added",i,o,s)}},{key:"addResourceBundle",value:function(i,o,s,a,l){var u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},c=[i,o];i.indexOf(".")>-1&&(c=i.split("."),a=s,s=o,o=c[1]),this.addNamespaces(o);var d=Wl(this.data,c)||{};a?Cb(d,s,l):d=Fa(Fa({},d),s),Sv(this.data,c,d),u.silent||this.emit("added",i,o,s)}},{key:"removeResourceBundle",value:function(i,o){this.hasResourceBundle(i,o)&&delete this.data[i][o],this.removeNamespaces(o),this.emit("removed",i,o)}},{key:"hasResourceBundle",value:function(i,o){return this.getResource(i,o)!==void 0}},{key:"getResourceBundle",value:function(i,o){return o||(o=this.options.defaultNS),this.options.compatibilityAPI==="v1"?Fa(Fa({},{}),this.getResource(i,o)):this.getResource(i,o)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var o=this.getDataByLanguage(i),s=o&&Object.keys(o)||[];return!!s.find(function(a){return o[a]&&Object.keys(o[a]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(zr),Ib={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,o){var s=this;return t.forEach(function(a){s.processors[a]&&(n=s.processors[a].process(n,r,i,o))}),n}};function Ev(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ev(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ev(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function u5(e){var t=c5();return function(){var r=jn(e),i;if(t){var o=jn(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return fa(this,i)}}function c5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var kv={},Tv=function(e){Ju(n,e);var t=u5(n);function n(r){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return an(this,n),i=t.call(this),Zu&&zr.call(Lr(i)),e5(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Lr(i)),i.options=o,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=An.create("translator"),i}return ln(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var s=this.resolve(i,o);return s&&s.res!==void 0}},{key:"extractFromKey",value:function(i,o){var s=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");var a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,l=o.ns||this.options.defaultNS||[],u=s&&i.indexOf(s)>-1,c=!this.options.userDefinedKeySeparator&&!o.keySeparator&&!this.options.userDefinedNsSeparator&&!o.nsSeparator&&!o5(i,s,a);if(u&&!c){var d=i.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:i,namespaces:l};var f=i.split(s);(s!==a||s===a&&this.options.ns.indexOf(f[0])>-1)&&(l=f.shift()),i=f.join(a)}return typeof l=="string"&&(l=[l]),{key:i,namespaces:l}}},{key:"translate",value:function(i,o,s){var a=this;if(Or(o)!=="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),o||(o={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var l=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,u=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,c=this.extractFromKey(i[i.length-1],o),d=c.key,f=c.namespaces,v=f[f.length-1],y=o.lng||this.language,b=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y&&y.toLowerCase()==="cimode"){if(b){var w=o.nsSeparator||this.options.nsSeparator;return l?(p.res="".concat(v).concat(w).concat(d),p):"".concat(v).concat(w).concat(d)}return l?(p.res=d,p):d}var p=this.resolve(i,o),m=p&&p.res,g=p&&p.usedKey||d,S=p&&p.exactUsedKey||d,k=Object.prototype.toString.apply(m),_=["[object Number]","[object Function]","[object RegExp]"],E=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,x=!this.i18nFormat||this.i18nFormat.handleAsObject,$=typeof m!="string"&&typeof m!="boolean"&&typeof m!="number";if(x&&m&&$&&_.indexOf(k)<0&&!(typeof E=="string"&&k==="[object Array]")){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var I=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,m,_t(_t({},o),{},{ns:f})):"key '".concat(d," (").concat(this.language,")' returned an object instead of string.");return l?(p.res=I,p):I}if(u){var L=k==="[object Array]",j=L?[]:{},J=L?S:g;for(var T in m)if(Object.prototype.hasOwnProperty.call(m,T)){var A="".concat(J).concat(u).concat(T);j[T]=this.translate(A,_t(_t({},o),{joinArrays:!1,ns:f})),j[T]===A&&(j[T]=m[T])}m=j}}else if(x&&typeof E=="string"&&k==="[object Array]")m=m.join(E),m&&(m=this.extendTranslation(m,i,o,s));else{var X=!1,ne=!1,R=o.count!==void 0&&typeof o.count!="string",D=n.hasDefaultValue(o),Q=R?this.pluralResolver.getSuffix(y,o.count,o):"",se=o["defaultValue".concat(Q)]||o.defaultValue;!this.isValidLookup(m)&&D&&(X=!0,m=se),this.isValidLookup(m)||(ne=!0,m=d);var B=o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,Y=B&&ne?void 0:m,U=D&&se!==m&&this.options.updateMissing;if(ne||X||U){if(this.logger.log(U?"updateKey":"missingKey",y,v,d,U?se:m),u){var te=this.resolve(d,_t(_t({},o),{},{keySeparator:!1}));te&&te.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var O=[],ue=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ue&&ue[0])for(var G=0;G<ue.length;G++)O.push(ue[G]);else this.options.saveMissingTo==="all"?O=this.languageUtils.toResolveHierarchy(o.lng||this.language):O.push(o.lng||this.language);var ye=function(le,ae,Re){var Ue=D&&Re!==m?Re:Y;a.options.missingKeyHandler?a.options.missingKeyHandler(le,v,ae,Ue,U,o):a.backendConnector&&a.backendConnector.saveMissing&&a.backendConnector.saveMissing(le,v,ae,Ue,U,o),a.emit("missingKey",le,v,ae,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?O.forEach(function(oe){a.pluralResolver.getSuffixes(oe,o).forEach(function(le){ye([oe],d+le,o["defaultValue".concat(le)]||se)})}):ye(O,d,se))}m=this.extendTranslation(m,i,o,p,s),ne&&m===d&&this.options.appendNamespaceToMissingKey&&(m="".concat(v,":").concat(d)),(ne||X)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(v,":").concat(d):d,X?m:void 0):m=this.options.parseMissingKeyHandler(m))}return l?(p.res=m,p):m}},{key:"extendTranslation",value:function(i,o,s,a,l){var u=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,_t(_t({},this.options.interpolation.defaultVariables),s),a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init(_t(_t({},s),{interpolation:_t(_t({},this.options.interpolation),s.interpolation)}));var c=typeof i=="string"&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),d;if(c){var f=i.match(this.interpolator.nestingRegexp);d=f&&f.length}var v=s.replace&&typeof s.replace!="string"?s.replace:s;if(this.options.interpolation.defaultVariables&&(v=_t(_t({},this.options.interpolation.defaultVariables),v)),i=this.interpolator.interpolate(i,v,s.lng||this.language,s),c){var y=i.match(this.interpolator.nestingRegexp),b=y&&y.length;d<b&&(s.nest=!1)}s.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var m=arguments.length,g=new Array(m),S=0;S<m;S++)g[S]=arguments[S];return l&&l[0]===g[0]&&!s.context?(u.logger.warn("It seems you are nesting recursively key: ".concat(g[0]," in key: ").concat(o[0])),null):u.translate.apply(u,g.concat([o]))},s)),s.interpolation&&this.interpolator.reset()}var w=s.postProcess||this.options.postProcess,p=typeof w=="string"?[w]:w;return i!=null&&p&&p.length&&s.applyPostProcessor!==!1&&(i=Ib.handle(p,i,o,this.options&&this.options.postProcessPassResolved?_t({i18nResolved:a},s):s,this)),i}},{key:"resolve",value:function(i){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,l,u,c,d;return typeof i=="string"&&(i=[i]),i.forEach(function(f){if(!o.isValidLookup(a)){var v=o.extractFromKey(f,s),y=v.key;l=y;var b=v.namespaces;o.options.fallbackNS&&(b=b.concat(o.options.fallbackNS));var w=s.count!==void 0&&typeof s.count!="string",p=w&&!s.ordinal&&s.count===0&&o.pluralResolver.shouldUseIntlApi(),m=s.context!==void 0&&(typeof s.context=="string"||typeof s.context=="number")&&s.context!=="",g=s.lngs?s.lngs:o.languageUtils.toResolveHierarchy(s.lng||o.language,s.fallbackLng);b.forEach(function(S){o.isValidLookup(a)||(d=S,!kv["".concat(g[0],"-").concat(S)]&&o.utils&&o.utils.hasLoadedNamespace&&!o.utils.hasLoadedNamespace(d)&&(kv["".concat(g[0],"-").concat(S)]=!0,o.logger.warn('key "'.concat(l,'" for languages "').concat(g.join(", "),`" won't get resolved as namespace "`).concat(d,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(function(k){if(!o.isValidLookup(a)){c=k;var _=[y];if(o.i18nFormat&&o.i18nFormat.addLookupKeys)o.i18nFormat.addLookupKeys(_,y,k,S,s);else{var E;w&&(E=o.pluralResolver.getSuffix(k,s.count,s));var x="".concat(o.options.pluralSeparator,"zero");if(w&&(_.push(y+E),p&&_.push(y+x)),m){var $="".concat(y).concat(o.options.contextSeparator).concat(s.context);_.push($),w&&(_.push($+E),p&&_.push($+x))}}for(var I;I=_.pop();)o.isValidLookup(a)||(u=I,a=o.getResource(k,S,I,s))}}))})}}),{res:a,usedKey:l,exactUsedKey:u,usedLng:c,usedNS:d}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,o,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,o,s,a):this.resourceStore.getResource(i,o,s,a)}}],[{key:"hasDefaultValue",value:function(i){var o="defaultValue";for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)&&o===s.substring(0,o.length)&&i[s]!==void 0)return!0;return!1}}]),n}(zr);function Yc(e){return e.charAt(0).toUpperCase()+e.slice(1)}var d5=function(){function e(t){an(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=An.create("languageUtils")}return ln(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(o){return o.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Yc(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Yc(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Yc(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(o){if(!i){var s=r.formatLanguageCode(o);(!r.options.supportedLngs||r.isSupportedCode(s))&&(i=s)}}),!i&&this.options.supportedLngs&&n.forEach(function(o){if(!i){var s=r.getLanguagePartFromCode(o);if(r.isSupportedCode(s))return i=s;i=r.options.supportedLngs.find(function(a){if(a.indexOf(s)===0)return a})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,o=this.getFallbackCodes(r||this.options.fallbackLng||[],n),s=[],a=function(u){!u||(i.isSupportedCode(u)?s.push(u):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(u)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(n))):typeof n=="string"&&a(this.formatLanguageCode(n)),o.forEach(function(l){s.indexOf(l)<0&&a(i.formatLanguageCode(l))}),s}}]),e}(),f5=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],p5={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},h5=["v1","v2","v3"],Cv={zero:0,one:1,two:2,few:3,many:4,other:5};function m5(){var e={};return f5.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:p5[t.fc]}})}),e}var g5=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};an(this,e),this.languageUtils=t,this.options=n,this.logger=An.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=m5()}return ln(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(o){return"".concat(r).concat(o)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(n,i);return o?this.shouldUseIntlApi()?o.resolvedOptions().pluralCategories.sort(function(s,a){return Cv[s]-Cv[a]}).map(function(s){return"".concat(r.options.prepend).concat(s)}):o.numbers.map(function(s){return r.getSuffix(n,s,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=this.getRule(n,i);return o?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(o.select(r)):this.getSuffixRetroCompatible(o,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,o=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),s=n.numbers[o];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));var a=function(){return i.options.prepend&&s.toString()?i.options.prepend+s.toString():s.toString()};return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?"_plural_".concat(s.toString()):a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?a():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}},{key:"shouldUseIntlApi",value:function(){return!h5.includes(this.options.compatibilityJSON)}}]),e}();function Ov(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ov(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ov(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var v5=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};an(this,e),this.logger=An.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return ln(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:r5,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?ji(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?ji(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?ji(r.nestingPrefix):r.nestingPrefixEscaped||ji("$t("),this.nestingSuffix=r.nestingSuffix?ji(r.nestingSuffix):r.nestingSuffixEscaped||ji(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,o){var s=this,a,l,u,c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function d(w){return w.replace(/\$/g,"$$$$")}var f=function(p){if(p.indexOf(s.formatSeparator)<0){var m=xv(r,c,p);return s.alwaysFormat?s.format(m,void 0,i,cn(cn(cn({},o),r),{},{interpolationkey:p})):m}var g=p.split(s.formatSeparator),S=g.shift().trim(),k=g.join(s.formatSeparator).trim();return s.format(xv(r,c,S),k,i,cn(cn(cn({},o),r),{},{interpolationkey:S}))};this.resetRegExp();var v=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,y=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,b=[{regex:this.regexpUnescape,safeValue:function(p){return d(p)}},{regex:this.regexp,safeValue:function(p){return s.escapeValue?d(s.escape(p)):d(p)}}];return b.forEach(function(w){for(u=0;a=w.regex.exec(n);){var p=a[1].trim();if(l=f(p),l===void 0)if(typeof v=="function"){var m=v(n,a,o);l=typeof m=="string"?m:""}else if(o&&o.hasOwnProperty(p))l="";else if(y){l=a[0];continue}else s.logger.warn("missed to pass in variable ".concat(p," for interpolating ").concat(n)),l="";else typeof l!="string"&&!s.useRawValueToEscape&&(l=bv(l));var g=w.safeValue(l);if(n=n.replace(a[0],g),y?(w.regex.lastIndex+=l.length,w.regex.lastIndex-=a[0].length):w.regex.lastIndex=0,u++,u>=s.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,a,l=cn({},o);l.applyPostProcessor=!1,delete l.defaultValue;function u(v,y){var b=this.nestingOptionsSeparator;if(v.indexOf(b)<0)return v;var w=v.split(new RegExp("".concat(b,"[ ]*{"))),p="{".concat(w[1]);v=w[0],p=this.interpolate(p,l),p=p.replace(/'/g,'"');try{l=JSON.parse(p),y&&(l=cn(cn({},y),l))}catch(m){return this.logger.warn("failed parsing options string in nesting for key ".concat(v),m),"".concat(v).concat(b).concat(p)}return delete l.defaultValue,v}for(;s=this.nestingRegexp.exec(n);){var c=[],d=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){var f=s[1].split(this.formatSeparator).map(function(v){return v.trim()});s[1]=f.shift(),c=f,d=!0}if(a=r(u.call(this,s[1].trim(),l),l),a&&s[0]===n&&typeof a!="string")return a;typeof a!="string"&&(a=bv(a)),a||(this.logger.warn("missed to resolve ".concat(s[1]," for nesting ").concat(n)),a=""),d&&(a=c.reduce(function(v,y){return i.format(v,y,o.lng,cn(cn({},o),{},{interpolationkey:s[1].trim()}))},a.trim())),n=n.replace(s[0],a),this.regexp.lastIndex=0}return n}}]),e}();function Iv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function lr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Iv(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Iv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function y5(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var o=i.split(";");o.forEach(function(s){if(!!s){var a=s.split(":"),l=Q8(a),u=l[0],c=l.slice(1),d=c.join(":").trim().replace(/^'+|'+$/g,"");n[u.trim()]||(n[u.trim()]=d),d==="false"&&(n[u.trim()]=!1),d==="true"&&(n[u.trim()]=!0),isNaN(d)||(n[u.trim()]=parseInt(d,10))}})}}return{formatName:t,formatOptions:n}}var w5=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};an(this,e),this.logger=An.create("formatter"),this.options=t,this.formats={number:function(r,i,o){return new Intl.NumberFormat(i,o).format(r)},currency:function(r,i,o){return new Intl.NumberFormat(i,lr(lr({},o),{},{style:"currency"})).format(r)},datetime:function(r,i,o){return new Intl.DateTimeFormat(i,lr({},o)).format(r)},relativetime:function(r,i,o){return new Intl.RelativeTimeFormat(i,lr({},o)).format(r,o.range||"day")},list:function(r,i,o){return new Intl.ListFormat(i,lr({},o)).format(r)}},this.init(t)}return ln(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"format",value:function(n,r,i,o){var s=this,a=r.split(this.formatSeparator),l=a.reduce(function(u,c){var d=y5(c),f=d.formatName,v=d.formatOptions;if(s.formats[f]){var y=u;try{var b=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},w=b.locale||b.lng||o.locale||o.lng||i;y=s.formats[f](u,w,lr(lr(lr({},v),o),b))}catch(p){s.logger.warn(p)}return y}else s.logger.warn("there was no format function for ".concat(f));return u},n);return l}}]),e}();function Pv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pv(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function b5(e){var t=S5();return function(){var r=jn(e),i;if(t){var o=jn(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return fa(this,i)}}function S5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x5(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var _5=function(e){Ju(n,e);var t=b5(n);function n(r,i,o){var s,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return an(this,n),s=t.call(this),Zu&&zr.call(Lr(s)),s.backend=r,s.store=i,s.services=o,s.languageUtils=o.languageUtils,s.options=a,s.logger=An.create("backendConnector"),s.waitingReads=[],s.maxParallelReads=a.maxParallelReads||10,s.readingCalls=0,s.maxRetries=a.maxRetries>=0?a.maxRetries:5,s.retryTimeout=a.retryTimeout>=1?a.retryTimeout:350,s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(o,a.backend,a),s}return ln(n,[{key:"queueLoad",value:function(i,o,s,a){var l=this,u={},c={},d={},f={};return i.forEach(function(v){var y=!0;o.forEach(function(b){var w="".concat(v,"|").concat(b);!s.reload&&l.store.hasResourceBundle(v,b)?l.state[w]=2:l.state[w]<0||(l.state[w]===1?c[w]===void 0&&(c[w]=!0):(l.state[w]=1,y=!1,c[w]===void 0&&(c[w]=!0),u[w]===void 0&&(u[w]=!0),f[b]===void 0&&(f[b]=!0)))}),y||(d[v]=!0)}),(Object.keys(u).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(u),pending:Object.keys(c),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(f)}}},{key:"loaded",value:function(i,o,s){var a=i.split("|"),l=a[0],u=a[1];o&&this.emit("failedLoading",l,u,o),s&&this.store.addResourceBundle(l,u,s),this.state[i]=o?-1:2;var c={};this.queue.forEach(function(d){t5(d.loaded,[l],u),x5(d,i),o&&d.errors.push(o),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(function(f){c[f]||(c[f]={});var v=d.loaded[f];v.length&&v.forEach(function(y){c[f][y]===void 0&&(c[f][y]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",c),this.queue=this.queue.filter(function(d){return!d.done})}},{key:"read",value:function(i,o,s){var a=this,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,u=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!i.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:o,fcName:s,tried:l,wait:u,callback:c});return}return this.readingCalls++,this.backend[s](i,o,function(d,f){if(a.readingCalls--,a.waitingReads.length>0){var v=a.waitingReads.shift();a.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(d&&f&&l<a.maxRetries){setTimeout(function(){a.read.call(a,i,o,s,l+1,u*2,c)},u);return}c(d,f)})}},{key:"prepareLoading",value:function(i,o){var s=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof o=="string"&&(o=[o]);var u=this.queueLoad(i,o,a,l);if(!u.toLoad.length)return u.pending.length||l(),null;u.toLoad.forEach(function(c){s.loadOne(c)})}},{key:"load",value:function(i,o,s){this.prepareLoading(i,o,{},s)}},{key:"reload",value:function(i,o,s){this.prepareLoading(i,o,{reload:!0},s)}},{key:"loadOne",value:function(i){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=i.split("|"),l=a[0],u=a[1];this.read(l,u,"read",void 0,void 0,function(c,d){c&&o.logger.warn("".concat(s,"loading namespace ").concat(u," for language ").concat(l," failed"),c),!c&&d&&o.logger.log("".concat(s,"loaded namespace ").concat(u," for language ").concat(l),d),o.loaded(i,c,d)})}},{key:"saveMissing",value:function(i,o,s,a,l){var u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(o)){this.logger.warn('did not save key "'.concat(s,'" as the namespace "').concat(o,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}s==null||s===""||(this.backend&&this.backend.create&&this.backend.create(i,o,s,a,null,Rv(Rv({},u),{},{isUpdate:l})),!(!i||!i[0])&&this.store.addResource(i[0],o,s,a))}}]),n}(zr);function E5(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(Or(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),Or(t[2])==="object"||Or(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Lv(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Nv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nv(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function k5(e){var t=T5();return function(){var r=jn(e),i;if(t){var o=jn(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return fa(this,i)}}function T5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ua(){}function C5(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var Gl=function(e){Ju(n,e);var t=k5(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(an(this,n),r=t.call(this),Zu&&zr.call(Lr(r)),r.options=Lv(i),r.services={},r.logger=An,r.modules={external:[]},C5(Lr(r)),o&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,o),fa(r,Lr(r));setTimeout(function(){r.init(i,o)},0)}return r}return ln(n,[{key:"init",value:function(){var i=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;typeof o=="function"&&(s=o,o={}),!o.defaultNS&&o.defaultNS!==!1&&o.ns&&(typeof o.ns=="string"?o.defaultNS=o.ns:o.ns.indexOf("translation")<0&&(o.defaultNS=o.ns[0]));var a=E5();this.options=Tn(Tn(Tn({},a),this.options),Lv(o)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=Tn(Tn({},a.interpolation),this.options.interpolation)),o.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=o.keySeparator),o.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=o.nsSeparator);function l(p){return p?typeof p=="function"?new p:p:null}if(!this.options.isClone){this.modules.logger?An.init(l(this.modules.logger),this.options):An.init(null,this.options);var u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=w5);var c=new d5(this.options);this.store=new l5(this.options.resources,this.options);var d=this.services;d.logger=An,d.resourceStore=this.store,d.languageUtils=c,d.pluralResolver=new g5(c,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(d.formatter=l(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new v5(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new _5(l(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var m=arguments.length,g=new Array(m>1?m-1:0),S=1;S<m;S++)g[S-1]=arguments[S];i.emit.apply(i,[p].concat(g))}),this.modules.languageDetector&&(d.languageDetector=l(this.modules.languageDetector),d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=l(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Tv(this.services,this.options),this.translator.on("*",function(p){for(var m=arguments.length,g=new Array(m>1?m-1:0),S=1;S<m;S++)g[S-1]=arguments[S];i.emit.apply(i,[p].concat(g))}),this.modules.external.forEach(function(p){p.init&&p.init(i)})}if(this.format=this.options.interpolation.format,s||(s=Ua),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var v=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];v.forEach(function(p){i[p]=function(){var m;return(m=i.store)[p].apply(m,arguments)}});var y=["addResource","addResources","addResourceBundle","removeResourceBundle"];y.forEach(function(p){i[p]=function(){var m;return(m=i.store)[p].apply(m,arguments),i}});var b=Jo(),w=function(){var m=function(S,k){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),b.resolve(k),s(S,k)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return m(null,i.t.bind(i));i.changeLanguage(i.options.lng,m)};return this.options.resources||!this.options.initImmediate?w():setTimeout(w,0),b}},{key:"loadResources",value:function(i){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ua,a=s,l=typeof i=="string"?i:this.language;if(typeof i=="function"&&(a=i),!this.options.resources||this.options.partialBundledLanguages){if(l&&l.toLowerCase()==="cimode")return a();var u=[],c=function(v){if(!!v){var y=o.services.languageUtils.toResolveHierarchy(v);y.forEach(function(b){u.indexOf(b)<0&&u.push(b)})}};if(l)c(l);else{var d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.forEach(function(f){return c(f)})}this.options.preload&&this.options.preload.forEach(function(f){return c(f)}),this.services.backendConnector.load(u,this.options.ns,function(f){!f&&!o.resolvedLanguage&&o.language&&o.setResolvedLanguage(o.language),a(f)})}else a(null)}},{key:"reloadResources",value:function(i,o,s){var a=Jo();return i||(i=this.languages),o||(o=this.options.ns),s||(s=Ua),this.services.backendConnector.reload(i,o,function(l){a.resolve(),s(l)}),a}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&Ib.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var o=0;o<this.languages.length;o++){var s=this.languages[o];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}},{key:"changeLanguage",value:function(i,o){var s=this;this.isLanguageChangingTo=i;var a=Jo();this.emit("languageChanging",i);var l=function(f){s.language=f,s.languages=s.services.languageUtils.toResolveHierarchy(f),s.resolvedLanguage=void 0,s.setResolvedLanguage(f)},u=function(f,v){v?(l(v),s.translator.changeLanguage(v),s.isLanguageChangingTo=void 0,s.emit("languageChanged",v),s.logger.log("languageChanged",v)):s.isLanguageChangingTo=void 0,a.resolve(function(){return s.t.apply(s,arguments)}),o&&o(f,function(){return s.t.apply(s,arguments)})},c=function(f){!i&&!f&&s.services.languageDetector&&(f=[]);var v=typeof f=="string"?f:s.services.languageUtils.getBestMatchFromCodes(f);v&&(s.language||l(v),s.translator.language||s.translator.changeLanguage(v),s.services.languageDetector&&s.services.languageDetector.cacheUserLanguage(v)),s.loadResources(v,function(y){u(y,v)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?c(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(c):c(i),a}},{key:"getFixedT",value:function(i,o,s){var a=this,l=function u(c,d){var f;if(Or(d)!=="object"){for(var v=arguments.length,y=new Array(v>2?v-2:0),b=2;b<v;b++)y[b-2]=arguments[b];f=a.options.overloadTranslationOptionHandler([c,d].concat(y))}else f=Tn({},d);f.lng=f.lng||u.lng,f.lngs=f.lngs||u.lngs,f.ns=f.ns||u.ns,f.keyPrefix=f.keyPrefix||s||u.keyPrefix;var w=a.options.keySeparator||".",p=f.keyPrefix?"".concat(f.keyPrefix).concat(w).concat(c):c;return a.t(p,f)};return typeof i=="string"?l.lng=i:l.lngs=i,l.ns=o,l.keyPrefix=s,l}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var a=this.resolvedLanguage||this.languages[0],l=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var c=function(v,y){var b=o.services.backendConnector.state["".concat(v,"|").concat(y)];return b===-1||b===2};if(s.precheck){var d=s.precheck(this,c);if(d!==void 0)return d}return!!(this.hasResourceBundle(a,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(a,i)&&(!l||c(u,i)))}},{key:"loadNamespaces",value:function(i,o){var s=this,a=Jo();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(l){s.options.ns.indexOf(l)<0&&s.options.ns.push(l)}),this.loadResources(function(l){a.resolve(),o&&o(l)}),a):(o&&o(),Promise.resolve())}},{key:"loadLanguages",value:function(i,o){var s=Jo();typeof i=="string"&&(i=[i]);var a=this.options.preload||[],l=i.filter(function(u){return a.indexOf(u)<0});return l.length?(this.options.preload=a.concat(l),this.loadResources(function(u){s.resolve(),o&&o(u)}),s):(o&&o(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var o=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"];return o.indexOf(this.services.languageUtils.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ua,a=Tn(Tn(Tn({},this.options),o),{isClone:!0}),l=new n(a),u=["store","services","language"];return u.forEach(function(c){l[c]=i[c]}),l.services=Tn({},this.services),l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l.translator=new Tv(l.services,l.options),l.translator.on("*",function(c){for(var d=arguments.length,f=new Array(d>1?d-1:0),v=1;v<d;v++)f[v-1]=arguments[v];l.emit.apply(l,[c].concat(f))}),l.init(a,s),l.translator.options=l.options,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(zr);Sn(Gl,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Gl(e,t)});var Ot=Gl.createInstance();Ot.createInstance=Gl.createInstance;Ot.createInstance;Ot.init;Ot.loadResources;Ot.reloadResources;Ot.use;Ot.changeLanguage;Ot.getFixedT;Ot.t;Ot.exists;Ot.setDefaultNamespace;Ot.hasLoadedNamespace;Ot.loadNamespaces;Ot.loadLanguages;function gf(e){return gf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gf(e)}var Pb=[],O5=Pb.forEach,I5=Pb.slice;function vf(e){return O5.call(I5.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}function Rb(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":gf(XMLHttpRequest))==="object"}function P5(e){return!!e&&typeof e.then=="function"}function R5(e){return P5(e)?e:Promise.resolve(e)}function L5(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ql={exports:{}},Ba={exports:{}},Av;function N5(){return Av||(Av=1,function(e,t){var n=typeof self<"u"?self:Va,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(s){var a={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(T){return T&&DataView.prototype.isPrototypeOf(T)}if(a.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(T){return T&&u.indexOf(Object.prototype.toString.call(T))>-1};function d(T){if(typeof T!="string"&&(T=String(T)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(T))throw new TypeError("Invalid character in header field name");return T.toLowerCase()}function f(T){return typeof T!="string"&&(T=String(T)),T}function v(T){var A={next:function(){var X=T.shift();return{done:X===void 0,value:X}}};return a.iterable&&(A[Symbol.iterator]=function(){return A}),A}function y(T){this.map={},T instanceof y?T.forEach(function(A,X){this.append(X,A)},this):Array.isArray(T)?T.forEach(function(A){this.append(A[0],A[1])},this):T&&Object.getOwnPropertyNames(T).forEach(function(A){this.append(A,T[A])},this)}y.prototype.append=function(T,A){T=d(T),A=f(A);var X=this.map[T];this.map[T]=X?X+", "+A:A},y.prototype.delete=function(T){delete this.map[d(T)]},y.prototype.get=function(T){return T=d(T),this.has(T)?this.map[T]:null},y.prototype.has=function(T){return this.map.hasOwnProperty(d(T))},y.prototype.set=function(T,A){this.map[d(T)]=f(A)},y.prototype.forEach=function(T,A){for(var X in this.map)this.map.hasOwnProperty(X)&&T.call(A,this.map[X],X,this)},y.prototype.keys=function(){var T=[];return this.forEach(function(A,X){T.push(X)}),v(T)},y.prototype.values=function(){var T=[];return this.forEach(function(A){T.push(A)}),v(T)},y.prototype.entries=function(){var T=[];return this.forEach(function(A,X){T.push([X,A])}),v(T)},a.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);function b(T){if(T.bodyUsed)return Promise.reject(new TypeError("Already read"));T.bodyUsed=!0}function w(T){return new Promise(function(A,X){T.onload=function(){A(T.result)},T.onerror=function(){X(T.error)}})}function p(T){var A=new FileReader,X=w(A);return A.readAsArrayBuffer(T),X}function m(T){var A=new FileReader,X=w(A);return A.readAsText(T),X}function g(T){for(var A=new Uint8Array(T),X=new Array(A.length),ne=0;ne<A.length;ne++)X[ne]=String.fromCharCode(A[ne]);return X.join("")}function S(T){if(T.slice)return T.slice(0);var A=new Uint8Array(T.byteLength);return A.set(new Uint8Array(T)),A.buffer}function k(){return this.bodyUsed=!1,this._initBody=function(T){this._bodyInit=T,T?typeof T=="string"?this._bodyText=T:a.blob&&Blob.prototype.isPrototypeOf(T)?this._bodyBlob=T:a.formData&&FormData.prototype.isPrototypeOf(T)?this._bodyFormData=T:a.searchParams&&URLSearchParams.prototype.isPrototypeOf(T)?this._bodyText=T.toString():a.arrayBuffer&&a.blob&&l(T)?(this._bodyArrayBuffer=S(T.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(T)||c(T))?this._bodyArrayBuffer=S(T):this._bodyText=T=Object.prototype.toString.call(T):this._bodyText="",this.headers.get("content-type")||(typeof T=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):a.searchParams&&URLSearchParams.prototype.isPrototypeOf(T)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a.blob&&(this.blob=function(){var T=b(this);if(T)return T;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?b(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var T=b(this);if(T)return T;if(this._bodyBlob)return m(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(g(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a.formData&&(this.formData=function(){return this.text().then($)}),this.json=function(){return this.text().then(JSON.parse)},this}var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function E(T){var A=T.toUpperCase();return _.indexOf(A)>-1?A:T}function x(T,A){A=A||{};var X=A.body;if(T instanceof x){if(T.bodyUsed)throw new TypeError("Already read");this.url=T.url,this.credentials=T.credentials,A.headers||(this.headers=new y(T.headers)),this.method=T.method,this.mode=T.mode,this.signal=T.signal,!X&&T._bodyInit!=null&&(X=T._bodyInit,T.bodyUsed=!0)}else this.url=String(T);if(this.credentials=A.credentials||this.credentials||"same-origin",(A.headers||!this.headers)&&(this.headers=new y(A.headers)),this.method=E(A.method||this.method||"GET"),this.mode=A.mode||this.mode||null,this.signal=A.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&X)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(X)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})};function $(T){var A=new FormData;return T.trim().split("&").forEach(function(X){if(X){var ne=X.split("="),R=ne.shift().replace(/\+/g," "),D=ne.join("=").replace(/\+/g," ");A.append(decodeURIComponent(R),decodeURIComponent(D))}}),A}function I(T){var A=new y,X=T.replace(/\r?\n[\t ]+/g," ");return X.split(/\r?\n/).forEach(function(ne){var R=ne.split(":"),D=R.shift().trim();if(D){var Q=R.join(":").trim();A.append(D,Q)}}),A}k.call(x.prototype);function L(T,A){A||(A={}),this.type="default",this.status=A.status===void 0?200:A.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in A?A.statusText:"OK",this.headers=new y(A.headers),this.url=A.url||"",this._initBody(T)}k.call(L.prototype),L.prototype.clone=function(){return new L(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},L.error=function(){var T=new L(null,{status:0,statusText:""});return T.type="error",T};var j=[301,302,303,307,308];L.redirect=function(T,A){if(j.indexOf(A)===-1)throw new RangeError("Invalid status code");return new L(null,{status:A,headers:{location:T}})},s.DOMException=o.DOMException;try{new s.DOMException}catch{s.DOMException=function(A,X){this.message=A,this.name=X;var ne=Error(A);this.stack=ne.stack},s.DOMException.prototype=Object.create(Error.prototype),s.DOMException.prototype.constructor=s.DOMException}function J(T,A){return new Promise(function(X,ne){var R=new x(T,A);if(R.signal&&R.signal.aborted)return ne(new s.DOMException("Aborted","AbortError"));var D=new XMLHttpRequest;function Q(){D.abort()}D.onload=function(){var se={status:D.status,statusText:D.statusText,headers:I(D.getAllResponseHeaders()||"")};se.url="responseURL"in D?D.responseURL:se.headers.get("X-Request-URL");var B="response"in D?D.response:D.responseText;X(new L(B,se))},D.onerror=function(){ne(new TypeError("Network request failed"))},D.ontimeout=function(){ne(new TypeError("Network request failed"))},D.onabort=function(){ne(new s.DOMException("Aborted","AbortError"))},D.open(R.method,R.url,!0),R.credentials==="include"?D.withCredentials=!0:R.credentials==="omit"&&(D.withCredentials=!1),"responseType"in D&&a.blob&&(D.responseType="blob"),R.headers.forEach(function(se,B){D.setRequestHeader(B,se)}),R.signal&&(R.signal.addEventListener("abort",Q),D.onreadystatechange=function(){D.readyState===4&&R.signal.removeEventListener("abort",Q)}),D.send(typeof R._bodyInit>"u"?null:R._bodyInit)})}return J.polyfill=!0,o.fetch||(o.fetch=J,o.Headers=y,o.Request=x,o.Response=L),s.Headers=y,s.Request=x,s.Response=L,s.fetch=J,Object.defineProperty(s,"__esModule",{value:!0}),s})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(Ba,Ba.exports)),Ba.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof Va<"u"&&Va.fetch?n=Va.fetch:typeof window<"u"&&window.fetch&&(n=window.fetch)),typeof L5<"u"&&(typeof window>"u"||typeof window.document>"u")){var r=n||N5();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(ql,ql.exports);const Lb=ql.exports,$v=jb({__proto__:null,default:Lb},[ql.exports]);function Kl(e){return Kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kl(e)}var Fr;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?Fr=global.fetch:typeof window<"u"&&window.fetch&&(Fr=window.fetch));var Ys;Rb()&&(typeof global<"u"&&global.XMLHttpRequest?Ys=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Ys=window.XMLHttpRequest));var Yl;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Yl=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Yl=window.ActiveXObject));!Fr&&$v&&!Ys&&!Yl&&(Fr=Lb||$v);typeof Fr!="function"&&(Fr=void 0);var yf=function(t,n){if(n&&Kl(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},A5=function(t,n,r,i){t.queryStringParams&&(n=yf(n,t.queryStringParams));var o=vf({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);r&&(o["Content-Type"]="application/json"),Fr(n,vf({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:o},typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions)).then(function(s){if(!s.ok)return i(s.statusText||"Error",{status:s.status});s.text().then(function(a){i(null,{status:s.status,data:a})}).catch(i)}).catch(i)},$5=function(t,n,r,i){r&&Kl(r)==="object"&&(r=yf("",r).slice(1)),t.queryStringParams&&(n=yf(n,t.queryStringParams));try{var o;Ys?o=new Ys:o=new Yl("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",n,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var s=t.customHeaders;if(s=typeof s=="function"?s():s,s)for(var a in s)o.setRequestHeader(a,s[a]);o.onreadystatechange=function(){o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(l){console&&console.log(l)}},M5=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},Fr)return A5(t,n,r,i);if(Rb()||typeof ActiveXObject=="function")return $5(t,n,r,i)};function D5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j5(e,t,n){return t&&Mv(e.prototype,t),n&&Mv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function z5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F5=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return z5({},r,i||"")},request:M5,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Nb=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};D5(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return j5(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=vf(i,this.options||{},F5()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,o,s){var a=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=R5(l),l.then(function(u){if(!u)return s(null,{});var c=a.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});a.loadUrl(c,s,r,o)})}},{key:"loadUrl",value:function(n,r,i,o){var s=this;this.options.request(this.options,n,void 0,function(a,l){if(l&&(l.status>=500&&l.status<600||!l.status))return r("failed loading "+n+"; status code: "+l.status,!0);if(l&&l.status>=400&&l.status<500)return r("failed loading "+n+"; status code: "+l.status,!1);if(!l&&a&&a.message&&a.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+a.message,!0);if(a)return r(a,!1);var u,c;try{typeof l.data=="string"?u=s.options.parse(l.data,i,o):u=l.data}catch{c="failed parsing "+n+" to json"}if(c)return r(c,!1);r(null,u)})}},{key:"create",value:function(n,r,i,o,s){var a=this;if(!!this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,o),u=0,c=[],d=[];n.forEach(function(f){var v=a.options.addPath;typeof a.options.addPath=="function"&&(v=a.options.addPath(f,r));var y=a.services.interpolator.interpolate(v,{lng:f,ns:r});a.options.request(a.options,y,l,function(b,w){u+=1,c.push(b),d.push(w),u===n.length&&s&&s(c,d)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,o=r.languageUtils,s=r.logger,a=i.language;if(!(a&&a.toLowerCase()==="cimode")){var l=[],u=function(d){var f=o.toResolveHierarchy(d);f.forEach(function(v){l.indexOf(v)<0&&l.push(v)})};u(a),this.allOptions.preload&&this.allOptions.preload.forEach(function(c){return u(c)}),l.forEach(function(c){n.allOptions.ns.forEach(function(d){i.read(c,d,"read",null,null,function(f,v){f&&s.warn("loading namespace ".concat(d," for language ").concat(c," failed"),f),!f&&v&&s.log("loaded namespace ".concat(d," for language ").concat(c),v),i.loaded("".concat(c,"|").concat(d),f,v)})})})}}}]),e}();Nb.type="backend";var Ab=[],U5=Ab.forEach,B5=Ab.slice;function V5(e){return U5.call(B5.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}var Dv=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,H5=function(t,n,r){var i=r||{};i.path=i.path||"/";var o=encodeURIComponent(n),s="".concat(t,"=").concat(o);if(i.maxAge>0){var a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");s+="; Max-Age=".concat(Math.floor(a))}if(i.domain){if(!Dv.test(i.domain))throw new TypeError("option domain is invalid");s+="; Domain=".concat(i.domain)}if(i.path){if(!Dv.test(i.path))throw new TypeError("option path is invalid");s+="; Path=".concat(i.path)}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+="; Expires=".concat(i.expires.toUTCString())}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.sameSite){var l=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(l){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s},jv={create:function(t,n,r,i){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};r&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+r*60*1e3)),i&&(o.domain=i),document.cookie=H5(t,encodeURIComponent(n),o)},read:function(t){for(var n="".concat(t,"="),r=document.cookie.split(";"),i=0;i<r.length;i++){for(var o=r[i];o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(n)===0)return o.substring(n.length,o.length)}return null},remove:function(t){this.create(t,"",-1)}},W5={name:"cookie",lookup:function(t){var n;if(t.lookupCookie&&typeof document<"u"){var r=jv.read(t.lookupCookie);r&&(n=r)}return n},cacheUserLanguage:function(t,n){n.lookupCookie&&typeof document<"u"&&jv.create(n.lookupCookie,t,n.cookieMinutes,n.cookieDomain,n.cookieOptions)}},G5={name:"querystring",lookup:function(t){var n;if(typeof window<"u"){var r=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));for(var i=r.substring(1),o=i.split("&"),s=0;s<o.length;s++){var a=o[s].indexOf("=");if(a>0){var l=o[s].substring(0,a);l===t.lookupQuerystring&&(n=o[s].substring(a+1))}}}return n}},Zo=null,zv=function(){if(Zo!==null)return Zo;try{Zo=window!=="undefined"&&window.localStorage!==null;var t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{Zo=!1}return Zo},q5={name:"localStorage",lookup:function(t){var n;if(t.lookupLocalStorage&&zv()){var r=window.localStorage.getItem(t.lookupLocalStorage);r&&(n=r)}return n},cacheUserLanguage:function(t,n){n.lookupLocalStorage&&zv()&&window.localStorage.setItem(n.lookupLocalStorage,t)}},es=null,Fv=function(){if(es!==null)return es;try{es=window!=="undefined"&&window.sessionStorage!==null;var t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{es=!1}return es},K5={name:"sessionStorage",lookup:function(t){var n;if(t.lookupSessionStorage&&Fv()){var r=window.sessionStorage.getItem(t.lookupSessionStorage);r&&(n=r)}return n},cacheUserLanguage:function(t,n){n.lookupSessionStorage&&Fv()&&window.sessionStorage.setItem(n.lookupSessionStorage,t)}},Y5={name:"navigator",lookup:function(t){var n=[];if(typeof navigator<"u"){if(navigator.languages)for(var r=0;r<navigator.languages.length;r++)n.push(navigator.languages[r]);navigator.userLanguage&&n.push(navigator.userLanguage),navigator.language&&n.push(navigator.language)}return n.length>0?n:void 0}},X5={name:"htmlTag",lookup:function(t){var n,r=t.htmlTag||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(n=r.getAttribute("lang")),n}},Q5={name:"path",lookup:function(t){var n;if(typeof window<"u"){var r=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(r instanceof Array)if(typeof t.lookupFromPathIndex=="number"){if(typeof r[t.lookupFromPathIndex]!="string")return;n=r[t.lookupFromPathIndex].replace("/","")}else n=r[0].replace("/","")}return n}},J5={name:"subdomain",lookup:function(t){var n=typeof t.lookupFromSubdomainIndex=="number"?t.lookupFromSubdomainIndex+1:1,r=typeof window<"u"&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(!!r)return r[n]}};function Z5(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}}var $b=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};an(this,e),this.type="languageDetector",this.detectors={},this.init(t,n)}return ln(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=V5(r,this.options||{},Z5()),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(W5),this.addDetector(G5),this.addDetector(q5),this.addDetector(K5),this.addDetector(Y5),this.addDetector(X5),this.addDetector(Q5),this.addDetector(J5)}},{key:"addDetector",value:function(n){this.detectors[n.name]=n}},{key:"detect",value:function(n){var r=this;n||(n=this.options.order);var i=[];return n.forEach(function(o){if(r.detectors[o]){var s=r.detectors[o].lookup(r.options);s&&typeof s=="string"&&(s=[s]),s&&(i=i.concat(s))}}),this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}},{key:"cacheUserLanguage",value:function(n,r){var i=this;r||(r=this.options.caches),r&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(n)>-1||r.forEach(function(o){i.detectors[o]&&i.detectors[o].cacheUserLanguage(n,i.options)}))}}]),e}();$b.type="languageDetector";const eL="ncNAfaCUM7t97_6x6TF47w",tL=`https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${eL}`,nL=document.documentElement.lang;Ot.use(Nb).use($b).use(B2).init({lng:nL,fallbackLng:"en",ns:["default"],defaultNS:"default",supportedLngs:["en","zh","ms"],backend:{loadPath:tL}});function Uv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uv(Object(n),!0).forEach(function(r){Sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ct(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Vv=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Xc=function(){return Math.random().toString(36).substring(7).split("").join(".")},Xs={INIT:"@@redux/INIT"+Xc(),REPLACE:"@@redux/REPLACE"+Xc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Xc()}};function rL(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ec(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ct(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ct(1));return n(ec)(e,t)}if(typeof e!="function")throw new Error(ct(2));var i=e,o=t,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function c(){if(l)throw new Error(ct(3));return o}function d(b){if(typeof b!="function")throw new Error(ct(4));if(l)throw new Error(ct(5));var w=!0;return u(),a.push(b),function(){if(!!w){if(l)throw new Error(ct(6));w=!1,u();var m=a.indexOf(b);a.splice(m,1),s=null}}}function f(b){if(!rL(b))throw new Error(ct(7));if(typeof b.type>"u")throw new Error(ct(8));if(l)throw new Error(ct(9));try{l=!0,o=i(o,b)}finally{l=!1}for(var w=s=a,p=0;p<w.length;p++){var m=w[p];m()}return b}function v(b){if(typeof b!="function")throw new Error(ct(10));i=b,f({type:Xs.REPLACE})}function y(){var b,w=d;return b={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(ct(11));function g(){m.next&&m.next(c())}g();var S=w(g);return{unsubscribe:S}}},b[Vv]=function(){return this},b}return f({type:Xs.INIT}),r={dispatch:f,subscribe:d,getState:c,replaceReducer:v},r[Vv]=y,r}var iL=ec;function oL(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Xs.INIT});if(typeof r>"u")throw new Error(ct(12));if(typeof n(void 0,{type:Xs.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ct(13))})}function Mb(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{oL(n)}catch(a){s=a}return function(l,u){if(l===void 0&&(l={}),s)throw s;for(var c=!1,d={},f=0;f<o.length;f++){var v=o[f],y=n[v],b=l[v],w=y(b,u);if(typeof w>"u")throw u&&u.type,new Error(ct(14));d[v]=w,c=c||w!==b}return c=c||o.length!==Object.keys(l).length,c?d:l}}function Hv(e,t){return function(){return t(e.apply(this,arguments))}}function sL(e,t){if(typeof e=="function")return Hv(e,t);if(typeof e!="object"||e===null)throw new Error(ct(16));var n={};for(var r in e){var i=e[r];typeof i=="function"&&(n[r]=Hv(i,t))}return n}function Db(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function aL(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(ct(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=Db.apply(void 0,a)(i.dispatch),Bv(Bv({},i),{},{dispatch:o})}}}const lL=Object.freeze(Object.defineProperty({__proto__:null,__DO_NOT_USE__ActionTypes:Xs,applyMiddleware:aL,bindActionCreators:sL,combineReducers:Mb,compose:Db,createStore:ec,legacy_createStore:iL},Symbol.toStringTag,{value:"Module"})),uL=Fb(lL);var Wv=uL.compose,cL=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Wv:Wv.apply(null,arguments)};const dL=(e={loading:!1,visible:!1,showPassword:!1,userInfo:null},t)=>{switch(t.type){case"USER_LOGIN_DETAILS":return{userInfo:t.payload};case"USER_LOGOUT":return{userInfo:t.payload};case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1};case"USER_LOGIN_FAIL":return{loading:!1};case"TOGGLE_PASSWORD":return{visible:!0,showPassword:!e.showPassword};case"SET_VISIBLE":return{visible:!0};default:return e}},fL=(e={loading:!1},t)=>{switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1};case"USER_REGISTER_FAIL":return{loading:!1};default:return e}},pL=(e={loading:!1,visible:!1,showPassword:!1},t)=>{switch(t.type){case"USER_REGISTER_COMPLETE_REQUEST":return{loading:!0};case"USER_REGISTER_COMPLETE_SUCCESS":return{loading:!1};case"USER_REGISTER_COMPLETE_FAIL":return{loading:!1};case"TOGGLE_PASSWORD":return{visible:!0,showPassword:!e.showPassword};case"SET_VISIBLE":return{visible:!0};default:return e}},hL=(e={loading:!1},t)=>{switch(t.type){case"USER_PASSWORD_RESET_REQUEST":return{loading:!0};case"USER_PASSWORD_RESET_SUCCESS":return{loading:!1};case"USER_PASSWORD_RESET_FAIL":return{loading:!1};default:return e}},mL=Mb({userLogin:dL,userRegister:fL,userRegisterComplete:pL,userPasswordReset:hL}),gL=ec(mL,cL());Qc.createRoot(document.getElementById("root")).render(h(Ze.StrictMode,{children:h(wk,{store:gL,children:h(R_,{children:h(P.exports.Suspense,{fallback:h(Y8,{}),children:h(W8,{})})})})}));
