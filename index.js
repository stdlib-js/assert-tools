// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).tools=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var y=function(r,t,n){var e,y,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),l="get"in n,p="set"in n,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r},l=e,p=y,v=n()?l:p,d=v;var A=function(r,t,n){d(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})},s=A;var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var m=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,h=w;var j=function(r){return h.call(r)},g=Object.prototype.hasOwnProperty;var _=function(r,t){return null!=r&&g.call(r,t)},U="function"==typeof Symbol?Symbol.toStringTag:"",I=_,E=U,O=w;var F=j,P=function(r){var t,n,e;if(null==r)return O.call(r);n=r[E],t=I(r,E);try{r[E]=void 0}catch(t){return O.call(r)}return e=O.call(r),t?r[E]=n:delete r[E],e},S=m()?P:F,T=S;var C=Array.isArray?Array.isArray:function(r){return"[object Array]"===T(r)};var V=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!C(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}},x=Math.floor;var B=function(r){return x(r)===r};var M=function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&B(r.length)&&r.length>=0&&r.length<=4294967295};var N=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!M(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}},k=v;var G=function(r,t,n){k(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},L=G;var R=function(){return/^\s*function\s*([^(]*)/i},X=R;L(X,"REGEXP",R());var z=X;var D=function(r){return null!==r&&"object"==typeof r};L(D,"isObjectLikeArray",V(D));var Y=D;var q=S,H=z.REGEXP,J=function(r){return Y(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var K=function(r){var t,n,e;if(("Object"===(n=q(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=H.exec(e.toString()))return t[1]}return J(r)?"Buffer":n},Q=K,W=/./;var Z=function(r){return"boolean"==typeof r},$=Boolean.prototype.toString;var rr=S,tr=function(r){try{return $.call(r),!0}catch(r){return!1}},nr=m();var er=function(r){return"object"==typeof r&&(r instanceof Boolean||(nr?tr(r):"[object Boolean]"===rr(r)))},or=Z,ir=er;var ur=L,ar=function(r){return or(r)||ir(r)},fr=er;ur(ar,"isPrimitive",Z),ur(ar,"isObject",fr);var cr=ar;var yr=function(){return new Function("return this;")()},lr="object"==typeof self?self:null,pr="object"==typeof window?window:null,vr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},dr="object"==typeof vr?vr:null;module.exports=dr;var Ar=cr.isPrimitive,sr=yr,br=lr,mr=pr,wr=r(Object.freeze({__proto__:null}));var hr=function(r){if(arguments.length){if(!Ar(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return sr()}if(br)return br;if(mr)return mr;if(wr)return wr;throw new Error("unexpected error. Unable to resolve global object.")},jr=hr(),gr=jr.document&&jr.document.childNodes,_r=Int8Array,Ur=W,Ir=gr,Er=_r;var Or=Q;var Fr=Q;var Pr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?Or(r).toLowerCase():t},Sr=function(r){return Fr(r).toLowerCase()},Tr=function(){return"function"==typeof Ur||"object"==typeof Er||"function"==typeof Ir}()?Sr:Pr;var Cr=function(r){return"function"===Tr(r)};var Vr=function(){};var xr=Cr,Br=z.REGEXP,Mr=function(){return"foo"===Vr.name}();var Nr=function(r){if(!1===xr(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Mr?r.name:Br.exec(r.toString())[1]},kr=Object.getPrototypeOf;var Gr=function(r){return r.__proto__},Lr=S,Rr=Gr;var Xr=function(r){var t=Rr(r);return t||null===t?t:"[object Function]"===Lr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},zr=kr,Dr=Xr,Yr=Cr(Object.getPrototypeOf)?zr:Dr;var qr=function(r){return null==r?null:(r=Object(r),Yr(r))},Hr=S,Jr="function"==typeof Float64Array;var Kr="function"==typeof Float64Array?Float64Array:null,Qr=function(r){return Jr&&r instanceof Float64Array||"[object Float64Array]"===Hr(r)},Wr=Kr;var Zr=function(){var r,t;if("function"!=typeof Wr)return!1;try{t=new Wr([1,3.14,-3.14,NaN]),r=Qr(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var $r="function"==typeof Float64Array?Float64Array:void 0,rt=function(){throw new Error("not implemented")},tt=Zr()?$r:rt,nt=S,et="function"==typeof Int8Array;var ot="function"==typeof Int8Array?Int8Array:null,it=function(r){return et&&r instanceof Int8Array||"[object Int8Array]"===nt(r)},ut=ot;var at="function"==typeof Int8Array?Int8Array:void 0,ft=function(){throw new Error("not implemented")},ct=function(){var r,t;if("function"!=typeof ut)return!1;try{t=new ut([1,3.14,-3.14,128]),r=it(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?at:ft,yt=S,lt="function"==typeof Uint8Array;var pt="function"==typeof Uint8Array?Uint8Array:null,vt=function(r){return lt&&r instanceof Uint8Array||"[object Uint8Array]"===yt(r)},dt=pt;var At="function"==typeof Uint8Array?Uint8Array:void 0,st=function(){throw new Error("not implemented")},bt=function(){var r,t;if("function"!=typeof dt)return!1;try{t=new dt(t=[1,3.14,-3.14,256,257]),r=vt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?At:st,mt=S,wt="function"==typeof Uint8ClampedArray;var ht="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,jt=function(r){return wt&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===mt(r)},gt=ht;var _t="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Ut=function(){throw new Error("not implemented")},It=function(){var r,t;if("function"!=typeof gt)return!1;try{t=new gt([-1,0,1,3.14,4.99,255,256]),r=jt(t)&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?_t:Ut,Et=S,Ot="function"==typeof Int16Array;var Ft="function"==typeof Int16Array?Int16Array:null,Pt=function(r){return Ot&&r instanceof Int16Array||"[object Int16Array]"===Et(r)},St=Ft;var Tt="function"==typeof Int16Array?Int16Array:void 0,Ct=function(){throw new Error("not implemented")},Vt=function(){var r,t;if("function"!=typeof St)return!1;try{t=new St([1,3.14,-3.14,32768]),r=Pt(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Tt:Ct,xt=S,Bt="function"==typeof Uint16Array;var Mt="function"==typeof Uint16Array?Uint16Array:null,Nt=function(r){return Bt&&r instanceof Uint16Array||"[object Uint16Array]"===xt(r)},kt=Mt;var Gt="function"==typeof Uint16Array?Uint16Array:void 0,Lt=function(){throw new Error("not implemented")},Rt=function(){var r,t;if("function"!=typeof kt)return!1;try{t=new kt(t=[1,3.14,-3.14,65536,65537]),r=Nt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gt:Lt,Xt=S,zt="function"==typeof Int32Array;var Dt="function"==typeof Int32Array?Int32Array:null,Yt=function(r){return zt&&r instanceof Int32Array||"[object Int32Array]"===Xt(r)},qt=Dt;var Ht="function"==typeof Int32Array?Int32Array:void 0,Jt=function(){throw new Error("not implemented")},Kt=function(){var r,t;if("function"!=typeof qt)return!1;try{t=new qt([1,3.14,-3.14,2147483648]),r=Yt(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?Ht:Jt,Qt=S,Wt="function"==typeof Uint32Array;var Zt="function"==typeof Uint32Array?Uint32Array:null,$t=function(r){return Wt&&r instanceof Uint32Array||"[object Uint32Array]"===Qt(r)},rn=Zt;var tn="function"==typeof Uint32Array?Uint32Array:void 0,nn=function(){throw new Error("not implemented")},en=function(){var r,t;if("function"!=typeof rn)return!1;try{t=new rn(t=[1,3.14,-3.14,4294967296,4294967297]),r=$t(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?tn:nn,on=S,un="function"==typeof Float32Array;var an=function(r){return un&&r instanceof Float32Array||"[object Float32Array]"===on(r)},fn=Number.POSITIVE_INFINITY,cn="function"==typeof Float32Array?Float32Array:null,yn=an,ln=fn,pn=cn;var vn,dn="function"==typeof Float32Array?Float32Array:void 0,An=function(){throw new Error("not implemented")};vn=function(){var r,t;if("function"!=typeof pn)return!1;try{t=new pn([1,3.14,-3.14,5e40]),r=yn(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===ln}catch(t){r=!1}return r}()?dn:An;var sn=Q,bn=Nr,mn=qr,wn=tt,hn=[tt,vn,Kt,en,Vt,Rt,ct,bt,It],jn=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],gn=Zr()?mn(wn):_n;function _n(){}gn="TypedArray"===bn(gn)?gn:_n;var Un=function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof gn)return!0;for(n=0;n<hn.length;n++)if(r instanceof hn[n])return!0;for(;r;){for(t=sn(r),n=0;n<jn.length;n++)if(jn[n]===t)return!0;r=mn(r)}return!1};var In=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!Un(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}},En={};return s(En,"arrayfcn",V),s(En,"arraylikefcn",N),s(En,"typedarrayfcn",In),En}));
//# sourceMappingURL=index.js.map
