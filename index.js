// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).tools=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,e,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,c=parseInt(e,10),!isFinite(c)){if(!n(e))throw new Error("invalid integer. Value: "+e);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(e=(-c).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=c.toString(t),c||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,y=String.prototype.replace,s=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function A(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=y.call(e,w,"$1e"),e=y.call(e,b,"e"),e=y.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=y.call(e,s,"e+0$1"),e=y.call(e,d,"e-0$1"),r.alternate&&(e=y.call(e,v,"$1."),e=y.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function j(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var I=String.fromCharCode,E=isNaN,U=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function F(r){var t,n,e,i,a,u,l,p,y;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,p=0;p<r.length;p++)if(f(e=r[p]))u+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,y=0;y<n.length;y++)switch(i=n.charAt(y)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=c(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):I(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=A(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=j(e.arg,e.width,e.padRight)),u+=e.arg||"",l+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,n,e,o;for(n=[],o=0,e=S.exec(r);e;)(t=r.slice(o,S.lastIndex-e[0].length)).length&&n.push(t),n.push(x(e)),o=S.lastIndex,e=S.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function k(r){return"string"==typeof r}function O(r){var t,n,e;if(!k(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=T(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return F.apply(null,n)}var C,V=Object.prototype,P=V.toString,$=V.__defineGetter__,N=V.__defineSetter__,B=V.__lookupGetter__,M=V.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(B.call(r,t)||M.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,n.get),a&&N&&N.call(r,t,n.set),r};var R=C;function L(r,t,n){R(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof z?z.toStringTag:"";var q=Z()?function(r){var t,n,e,o,i;if(null==r)return W.call(r);n=r[Y],i=Y,t=null!=(o=r)&&X.call(o,i);try{r[Y]=void 0}catch(t){return W.call(r)}return e=W.call(r),t?r[Y]=n:delete r[Y],e}:function(r){return W.call(r)};var D=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function H(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!D(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}var J=Math.floor;function K(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&(t=r.length,J(t)===t)&&r.length>=0&&r.length<=4294967295;var t}function Q(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function rr(){return/^\s*function\s*([^(]*)/i}var tr=/^\s*function\s*([^(]*)/i;function nr(r){return null!==r&&"object"==typeof r}function er(r){var t,n,e,o;if(("Object"===(n=q(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=tr.exec(e.toString()))return t[1]}return nr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Q(rr,"REGEXP",tr),Q(nr,"isObjectLikeArray",H(nr));var or=/./;function ir(r){return"boolean"==typeof r}var ar=Boolean,cr=Boolean.prototype.toString;var fr=Z();function ur(r){return"object"==typeof r&&(r instanceof ar||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function lr(r){return ir(r)||ur(r)}function pr(){return new Function("return this;")()}Q(lr,"isPrimitive",ir),Q(lr,"isObject",ur);var yr="object"==typeof self?self:null,sr="object"==typeof window?window:null,dr="object"==typeof global?global:null,vr="object"==typeof globalThis?globalThis:null;var gr=function(r){if(arguments.length){if(!ir(r))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return pr()}if(vr)return vr;if(yr)return yr;if(sr)return sr;if(dr)return dr;throw new Error("unexpected error. Unable to resolve global object.")}(),hr=gr.document&&gr.document.childNodes,br=Int8Array;var wr="function"==typeof or||"object"==typeof br||"function"==typeof hr?function(r){return er(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?er(r).toLowerCase():t};function Ar(r){return"function"===wr(r)}function mr(){}var jr="foo"===mr.name;var Ir,Er=Object,Ur=Object.getPrototypeOf;Ir=Ar(Object.getPrototypeOf)?Ur:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=Ir;function Fr(r){return null==r?null:(r=Er(r),_r(r))}var Sr="function"==typeof Float64Array;var xr="function"==typeof Float64Array?Float64Array:null;function Tr(){var r,t,n;if("function"!=typeof xr)return!1;try{t=new xr([1,3.14,-3.14,NaN]),n=t,r=(Sr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var kr="function"==typeof Float64Array?Float64Array:void 0;var Or=Tr()?kr:function(){throw new Error("not implemented")},Cr="function"==typeof Int8Array;var Vr="function"==typeof Int8Array?Int8Array:null;var Pr="function"==typeof Int8Array?Int8Array:void 0;var $r=function(){var r,t,n;if("function"!=typeof Vr)return!1;try{t=new Vr([1,3.14,-3.14,128]),n=t,r=(Cr&&n instanceof Int8Array||"[object Int8Array]"===q(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Nr="function"==typeof Uint8Array;var Br="function"==typeof Uint8Array?Uint8Array:null;var Mr="function"==typeof Uint8Array?Uint8Array:void 0;var Rr=function(){var r,t,n;if("function"!=typeof Br)return!1;try{t=new Br(t=[1,3.14,-3.14,256,257]),n=t,r=(Nr&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Mr:function(){throw new Error("not implemented")},Lr="function"==typeof Uint8ClampedArray;var Gr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Zr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Wr=function(){var r,t,n;if("function"!=typeof Gr)return!1;try{t=new Gr([-1,0,1,3.14,4.99,255,256]),n=t,r=(Lr&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===q(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")},Xr="function"==typeof Int16Array;var zr="function"==typeof Int16Array?Int16Array:null;var Yr="function"==typeof Int16Array?Int16Array:void 0;var qr=function(){var r,t,n;if("function"!=typeof zr)return!1;try{t=new zr([1,3.14,-3.14,32768]),n=t,r=(Xr&&n instanceof Int16Array||"[object Int16Array]"===q(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")},Dr="function"==typeof Uint16Array;var Hr="function"==typeof Uint16Array?Uint16Array:null;var Jr="function"==typeof Uint16Array?Uint16Array:void 0;var Kr=function(){var r,t,n;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Dr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},Qr="function"==typeof Int32Array;var rt="function"==typeof Int32Array?Int32Array:null;var tt="function"==typeof Int32Array?Int32Array:void 0;var nt=function(){var r,t,n;if("function"!=typeof rt)return!1;try{t=new rt([1,3.14,-3.14,2147483648]),n=t,r=(Qr&&n instanceof Int32Array||"[object Int32Array]"===q(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?tt:function(){throw new Error("not implemented")},et="function"==typeof Uint32Array;var ot="function"==typeof Uint32Array?Uint32Array:null;var it="function"==typeof Uint32Array?Uint32Array:void 0;var at=function(){var r,t,n;if("function"!=typeof ot)return!1;try{t=new ot(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(et&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?it:function(){throw new Error("not implemented")},ct="function"==typeof Float32Array;var ft=Number.POSITIVE_INFINITY,ut="function"==typeof Float32Array?Float32Array:null;var lt="function"==typeof Float32Array?Float32Array:void 0;var pt=[Or,function(){var r,t,n;if("function"!=typeof ut)return!1;try{t=new ut([1,3.14,-3.14,5e40]),n=t,r=(ct&&n instanceof Float32Array||"[object Float32Array]"===q(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===ft}catch(t){r=!1}return r}()?lt:function(){throw new Error("not implemented")},nt,at,qr,Kr,$r,Rr,Wr],yt=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],st=Tr()?Fr(Or):dt;function dt(){}st="TypedArray"===function(r){if(!1===Ar(r))throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return jr?r.name:tr.exec(r.toString())[1]}(st)?st:dt;var vt={};return L(vt,"arrayfcn",H),L(vt,"arraylikefcn",(function(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!K(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}})),L(vt,"typedarrayfcn",(function(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof st)return!0;for(n=0;n<pt.length;n++)if(r instanceof pt[n])return!0;for(;r;){for(t=er(r),n=0;n<yt.length;n++)if(yt[n]===t)return!0;r=Fr(r)}return!1}(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}})),vt}));
//# sourceMappingURL=index.js.map
