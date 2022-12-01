// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).tools=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,y,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,p="set"in n,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r};var c=t;function y(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return l&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var b="function"==typeof Symbol?Symbol.toStringTag:"";var d=p()?function(r){var t,n,e,o,i;if(null==r)return v.call(r);n=r[b],i=b,t=null!=(o=r)&&A.call(o,i);try{r[b]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[b]=n:delete r[b],e}:function(r){return v.call(r)};var s=Array.isArray?Array.isArray:function(r){return"[object Array]"===d(r)};function m(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!s(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}var w=Math.floor;function h(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&(t=r.length,w(t)===t)&&r.length>=0&&r.length<=4294967295;var t}function j(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function g(){return/^\s*function\s*([^(]*)/i}var _=/^\s*function\s*([^(]*)/i;function U(r){return null!==r&&"object"==typeof r}function I(r){var t,n,e,o;if(("Object"===(n=d(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=_.exec(e.toString()))return t[1]}return U(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}j(g,"REGEXP",_),j(U,"isObjectLikeArray",m(U));var E=/./;function F(r){return"boolean"==typeof r}var O=Boolean.prototype.toString;var S=p();function T(r){return"object"==typeof r&&(r instanceof Boolean||(S?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===d(r)))}function C(r){return F(r)||T(r)}function P(){return new Function("return this;")()}j(C,"isPrimitive",F),j(C,"isObject",T);var V="object"==typeof self?self:null,B="object"==typeof window?window:null,x="object"==typeof global?global:null;var M=function(r){if(arguments.length){if(!F(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(V)return V;if(B)return B;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),N=M.document&&M.document.childNodes,k=Int8Array;var G="function"==typeof E||"object"==typeof k||"function"==typeof N?function(r){return I(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?I(r).toLowerCase():t};function L(r){return"function"===G(r)}function R(){}var X="foo"===R.name;var Y,q=Object.getPrototypeOf;Y=L(Object.getPrototypeOf)?q:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===d(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var z=Y;function D(r){return null==r?null:(r=Object(r),z(r))}var H="function"==typeof Float64Array;var J="function"==typeof Float64Array?Float64Array:null;function K(){var r,t,n;if("function"!=typeof J)return!1;try{t=new J([1,3.14,-3.14,NaN]),n=t,r=(H&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var Q="function"==typeof Float64Array?Float64Array:void 0;var W=K()?Q:function(){throw new Error("not implemented")},Z="function"==typeof Int8Array;var $="function"==typeof Int8Array?Int8Array:null;var rr="function"==typeof Int8Array?Int8Array:void 0;var tr=function(){var r,t,n;if("function"!=typeof $)return!1;try{t=new $([1,3.14,-3.14,128]),n=t,r=(Z&&n instanceof Int8Array||"[object Int8Array]"===d(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")},nr="function"==typeof Uint8Array;var er="function"==typeof Uint8Array?Uint8Array:null;var or="function"==typeof Uint8Array?Uint8Array:void 0;var ir=function(){var r,t,n;if("function"!=typeof er)return!1;try{t=new er(t=[1,3.14,-3.14,256,257]),n=t,r=(nr&&n instanceof Uint8Array||"[object Uint8Array]"===d(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")},ar="function"==typeof Uint8ClampedArray;var ur="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var fr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var cr=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur([-1,0,1,3.14,4.99,255,256]),n=t,r=(ar&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===d(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")},yr="function"==typeof Int16Array;var lr="function"==typeof Int16Array?Int16Array:null;var pr="function"==typeof Int16Array?Int16Array:void 0;var vr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,32768]),n=t,r=(yr&&n instanceof Int16Array||"[object Int16Array]"===d(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")},Ar="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var dr="function"==typeof Uint16Array?Uint16Array:void 0;var sr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===d(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")},mr="function"==typeof Int32Array;var wr="function"==typeof Int32Array?Int32Array:null;var hr="function"==typeof Int32Array?Int32Array:void 0;var jr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr([1,3.14,-3.14,2147483648]),n=t,r=(mr&&n instanceof Int32Array||"[object Int32Array]"===d(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")},gr="function"==typeof Uint32Array;var _r="function"==typeof Uint32Array?Uint32Array:null;var Ur="function"==typeof Uint32Array?Uint32Array:void 0;var Ir=function(){var r,t,n;if("function"!=typeof _r)return!1;try{t=new _r(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(gr&&n instanceof Uint32Array||"[object Uint32Array]"===d(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")},Er="function"==typeof Float32Array;var Fr=Number.POSITIVE_INFINITY,Or="function"==typeof Float32Array?Float32Array:null;var Sr="function"==typeof Float32Array?Float32Array:void 0;var Tr=[W,function(){var r,t,n;if("function"!=typeof Or)return!1;try{t=new Or([1,3.14,-3.14,5e40]),n=t,r=(Er&&n instanceof Float32Array||"[object Float32Array]"===d(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Fr}catch(t){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},jr,Ir,vr,sr,tr,ir,cr],Cr=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Pr=K()?D(W):Vr;function Vr(){}Pr="TypedArray"===function(r){if(!1===L(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return X?r.name:_.exec(r.toString())[1]}(Pr)?Pr:Vr;var Br={};return y(Br,"arrayfcn",m),y(Br,"arraylikefcn",(function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!h(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}})),y(Br,"typedarrayfcn",(function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof Pr)return!0;for(n=0;n<Tr.length;n++)if(r instanceof Tr[n])return!0;for(;r;){for(t=I(r),n=0;n<Cr.length;n++)if(Cr[n]===t)return!0;r=D(r)}return!1}(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}})),Br}));
//# sourceMappingURL=index.js.map
