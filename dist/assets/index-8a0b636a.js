(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="148",qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kl=0,ba=1,Jl=2,$o=1,Ql=2,Bi=3,gn=0,Rt=1,Zi=2,hr=3,mn=0,hi=1,Vs=2,Sa=3,wa=4,$l=5,ci=100,ec=101,tc=102,Ta=103,Ea=104,nc=200,ic=201,rc=202,sc=203,el=204,tl=205,ac=206,oc=207,lc=208,cc=209,uc=210,fc=0,hc=1,dc=2,Ws=3,pc=4,mc=5,gc=6,_c=7,nl=0,vc=1,xc=2,on=0,yc=1,Mc=2,bc=3,Sc=4,wc=5,il=300,pi=301,mi=302,Hs=303,Xs=304,Gr=306,qs=1e3,Xt=1001,js=1002,xt=1003,Aa=1004,ss=1005,St=1006,Tc=1007,Hi=1008,Rn=1009,Ec=1010,Ac=1011,rl=1012,Cc=1013,An=1014,Cn=1015,Xi=1016,Lc=1017,Dc=1018,di=1020,Pc=1021,Rc=1022,qt=1023,Uc=1024,Ic=1025,Ln=1026,gi=1027,Fc=1028,Oc=1029,Nc=1030,kc=1031,zc=1033,as=33776,os=33777,ls=33778,cs=33779,Ca=35840,La=35841,Da=35842,Pa=35843,Bc=36196,Ra=37492,Ua=37496,Ia=37808,Fa=37809,Oa=37810,Na=37811,ka=37812,za=37813,Ba=37814,Ga=37815,Va=37816,Wa=37817,Ha=37818,Xa=37819,qa=37820,ja=37821,Ya=36492,Un=3e3,$e=3001,Gc=3200,sl=3201,Vc=0,Wc=1,Jt="srgb",qi="srgb-linear",us=7680,Hc=519,Za=35044,Ka="300 es",Ys=1035;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fs=Math.PI/180,Ja=180/Math.PI;function Ki(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mt[l&255]+mt[l>>8&255]+mt[l>>16&255]+mt[l>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]).toLowerCase()}function wt(l,e,t){return Math.max(e,Math.min(t,l))}function Xc(l,e){return(l%e+e)%e}function hs(l,e,t){return(1-t)*l+t*e}function Qa(l){return(l&l-1)===0&&l!==0}function Zs(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function dr(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Lt(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*r-a*i+e.x,this.y=n*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,r,i,n,a,s,o,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=n,u[5]=o,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,n=this.elements,a=r[0],s=r[3],o=r[6],c=r[1],u=r[4],f=r[7],h=r[2],p=r[5],g=r[8],m=i[0],d=i[3],v=i[6],x=i[1],b=i[4],S=i[7],y=i[2],A=i[5],P=i[8];return n[0]=a*m+s*x+o*y,n[3]=a*d+s*b+o*A,n[6]=a*v+s*S+o*P,n[1]=c*m+u*x+f*y,n[4]=c*d+u*b+f*A,n[7]=c*v+u*S+f*P,n[2]=h*m+p*x+g*y,n[5]=h*d+p*b+g*A,n[8]=h*v+p*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],o=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-r*n*u+r*s*o+i*n*c-i*a*o}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],o=e[6],c=e[7],u=e[8],f=u*a-s*c,h=s*o-u*n,p=c*n-a*o,g=t*f+r*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(i*c-u*r)*m,e[2]=(s*r-i*a)*m,e[3]=h*m,e[4]=(u*t-i*o)*m,e[5]=(i*n-s*t)*m,e[6]=p*m,e[7]=(r*o-c*t)*m,e[8]=(a*t-r*n)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,n,a,s){const o=Math.cos(n),c=Math.sin(n);return this.set(r*o,r*c,-r*(o*a+c*s)+a+e,-i*c,i*o,-i*(-c*a+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Tt;function al(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function ji(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Dn(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Nr(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const ps={[Jt]:{[qi]:Dn},[qi]:{[Jt]:Nr}},_t={legacyMode:!0,get workingColorSpace(){return qi},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.legacyMode||e===t||!e||!t)return l;if(ps[e]&&ps[e][t]!==void 0){const r=ps[e][t];return l.r=r(l.r),l.g=r(l.g),l.b=r(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Vt={h:0,s:0,l:0},pr={h:0,s:0,l:0};function ms(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}function mr(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}class Qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=r,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=_t.workingColorSpace){if(e=Xc(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,a=2*r-n;this.r=ms(a,n,e+1/3),this.g=ms(a,n,e),this.b=ms(a,n,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Jt){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,_t.toWorkingColorSpace(this,t),r(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,_t.toWorkingColorSpace(this,t),r(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const o=parseFloat(n[1])/360,c=parseFloat(n[2])/100,u=parseFloat(n[3])/100;return r(n[4]),this.setHSL(o,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],a=n.length;if(a===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,_t.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,_t.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Jt){const r=ol[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return _t.fromWorkingColorSpace(mr(this,rt),e),wt(rt.r*255,0,255)<<16^wt(rt.g*255,0,255)<<8^wt(rt.b*255,0,255)<<0}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(mr(this,rt),t);const r=rt.r,i=rt.g,n=rt.b,a=Math.max(r,i,n),s=Math.min(r,i,n);let o,c;const u=(s+a)/2;if(s===a)o=0,c=0;else{const f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case r:o=(i-n)/f+(i<n?6:0);break;case i:o=(n-r)/f+2;break;case n:o=(r-i)/f+4;break}o/=6}return e.h=o,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(mr(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=Jt){return _t.fromWorkingColorSpace(mr(this,rt),e),e!==Jt?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,r){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=r,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(pr);const r=hs(Vt.h,pr.h,t),i=hs(Vt.s,pr.s,t),n=hs(Vt.l,pr.l,t);return this.setHSL(r,i,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Qe.NAMES=ol;let Yn;class ll{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=ji("canvas")),Yn.width=e.width,Yn.height=e.height;const r=Yn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ji("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),n=i.data;for(let a=0;a<n.length;a++)n[a]=Dn(n[a]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Dn(t[r]/255)*255):t[r]=Dn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class cl{constructor(e=null){this.isSource=!0,this.uuid=Ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?n.push(gs(i[a].image)):n.push(gs(i[a]))}else n=gs(i);r.url=n}return t||(e.images[this.uuid]=r),r}}function gs(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?ll.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qc=0;class yt extends Nn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,r=Xt,i=Xt,n=St,a=Hi,s=qt,o=Rn,c=yt.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Ki(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=i,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=o,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=il;yt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,r=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i+a[12]*n,this.y=a[1]*t+a[5]*r+a[9]*i+a[13]*n,this.z=a[2]*t+a[6]*r+a[10]*i+a[14]*n,this.w=a[3]*t+a[7]*r+a[11]*i+a[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,n;const o=e.elements,c=o[0],u=o[4],f=o[8],h=o[1],p=o[5],g=o[9],m=o[2],d=o[6],v=o[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(p+1)/2,y=(v+1)/2,A=(u+h)/4,P=(f+m)/4,_=(g+d)/4;return b>S&&b>y?b<.01?(r=0,i=.707106781,n=.707106781):(r=Math.sqrt(b),i=A/r,n=P/r):S>y?S<.01?(r=.707106781,i=0,n=.707106781):(i=Math.sqrt(S),r=A/i,n=_/i):y<.01?(r=.707106781,i=.707106781,n=0):(n=Math.sqrt(y),r=P/n,i=_/n),this.set(r,i,n,t),this}let x=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(f-m)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class In extends Nn{constructor(e=1,t=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:St,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ul extends yt{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jc extends yt{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,n,a,s){let o=r[i+0],c=r[i+1],u=r[i+2],f=r[i+3];const h=n[a+0],p=n[a+1],g=n[a+2],m=n[a+3];if(s===0){e[t+0]=o,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f!==m||o!==h||c!==p||u!==g){let d=1-s;const v=o*h+c*p+u*g+f*m,x=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const y=Math.sqrt(b),A=Math.atan2(y,v*x);d=Math.sin(d*A)/y,s=Math.sin(s*A)/y}const S=s*x;if(o=o*d+h*S,c=c*d+p*S,u=u*d+g*S,f=f*d+m*S,d===1-s){const y=1/Math.sqrt(o*o+c*c+u*u+f*f);o*=y,c*=y,u*=y,f*=y}}e[t]=o,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,i,n,a){const s=r[i],o=r[i+1],c=r[i+2],u=r[i+3],f=n[a],h=n[a+1],p=n[a+2],g=n[a+3];return e[t]=s*g+u*f+o*p-c*h,e[t+1]=o*g+u*h+c*f-s*p,e[t+2]=c*g+u*p+s*h-o*f,e[t+3]=u*g-s*f-o*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,i=e._y,n=e._z,a=e._order,s=Math.cos,o=Math.sin,c=s(r/2),u=s(i/2),f=s(n/2),h=o(r/2),p=o(i/2),g=o(n/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],n=t[8],a=t[1],s=t[5],o=t[9],c=t[2],u=t[6],f=t[10],h=r+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-o)*p,this._y=(n-c)*p,this._z=(a-i)*p}else if(r>s&&r>f){const p=2*Math.sqrt(1+r-s-f);this._w=(u-o)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(n+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-r-f);this._w=(n-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(o+u)/p}else{const p=2*Math.sqrt(1+f-r-s);this._w=(a-i)/p,this._x=(n+c)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,n=e._z,a=e._w,s=t._x,o=t._y,c=t._z,u=t._w;return this._x=r*u+a*s+i*c-n*o,this._y=i*u+a*o+n*s-r*c,this._z=n*u+a*c+r*o-i*s,this._w=a*u-r*s-i*o-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,n=this._z,a=this._w;let s=a*e._w+r*e._x+i*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=i,this._z=n,this;const o=1-s*s;if(o<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*r+t*this._x,this._y=p*i+t*this._y,this._z=p*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(o),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=r*f+this._x*h,this._y=i*f+this._y*h,this._z=n*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(n),r*Math.cos(n),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($a.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($a.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*i,this.y=n[1]*t+n[4]*r+n[7]*i,this.z=n[2]*t+n[5]*r+n[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,n=e.elements,a=1/(n[3]*t+n[7]*r+n[11]*i+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*i+n[12])*a,this.y=(n[1]*t+n[5]*r+n[9]*i+n[13])*a,this.z=(n[2]*t+n[6]*r+n[10]*i+n[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,n=e.x,a=e.y,s=e.z,o=e.w,c=o*t+a*i-s*r,u=o*r+s*t-n*i,f=o*i+n*r-a*t,h=-n*t-a*r-s*i;return this.x=c*o+h*-n+u*-s-f*-a,this.y=u*o+h*-a+f*-n-c*-s,this.z=f*o+h*-s+c*-a-u*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*i,this.y=n[1]*t+n[5]*r+n[9]*i,this.z=n[2]*t+n[6]*r+n[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,n=e.z,a=t.x,s=t.y,o=t.z;return this.x=i*o-n*s,this.y=n*a-r*o,this.z=r*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _s.copy(this).projectOnVector(e),this.sub(_s)}reflect(e){return this.sub(_s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _s=new Q,$a=new Fn;class vi{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,i=1/0,n=-1/0,a=-1/0,s=-1/0;for(let o=0,c=e.length;o<c;o+=3){const u=e[o],f=e[o+1],h=e[o+2];u<t&&(t=u),f<r&&(r=f),h<i&&(i=h),u>n&&(n=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(t,r,i),this.max.set(n,a,s),this}setFromBufferAttribute(e){let t=1/0,r=1/0,i=1/0,n=-1/0,a=-1/0,s=-1/0;for(let o=0,c=e.count;o<c;o++){const u=e.getX(o),f=e.getY(o),h=e.getZ(o);u<t&&(t=u),f<r&&(r=f),h<i&&(i=h),u>n&&(n=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(t,r,i),this.max.set(n,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(t&&r.attributes!=null&&r.attributes.position!==void 0){const n=r.attributes.position;for(let a=0,s=n.count;a<s;a++)yn.fromBufferAttribute(n,a).applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else r.boundingBox===null&&r.computeBoundingBox(),vs.copy(r.boundingBox),vs.applyMatrix4(e.matrixWorld),this.union(vs);const i=e.children;for(let n=0,a=i.length;n<a;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),gr.subVectors(this.max,Ri),Zn.subVectors(e.a,Ri),Kn.subVectors(e.b,Ri),Jn.subVectors(e.c,Ri),fn.subVectors(Kn,Zn),hn.subVectors(Jn,Kn),Mn.subVectors(Zn,Jn);let t=[0,-fn.z,fn.y,0,-hn.z,hn.y,0,-Mn.z,Mn.y,fn.z,0,-fn.x,hn.z,0,-hn.x,Mn.z,0,-Mn.x,-fn.y,fn.x,0,-hn.y,hn.x,0,-Mn.y,Mn.x,0];return!xs(t,Zn,Kn,Jn,gr)||(t=[1,0,0,0,1,0,0,0,1],!xs(t,Zn,Kn,Jn,gr))?!1:(_r.crossVectors(fn,hn),t=[_r.x,_r.y,_r.z],xs(t,Zn,Kn,Jn,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yn=new Q,vs=new vi,Zn=new Q,Kn=new Q,Jn=new Q,fn=new Q,hn=new Q,Mn=new Q,Ri=new Q,gr=new Q,_r=new Q,bn=new Q;function xs(l,e,t,r,i){for(let n=0,a=l.length-3;n<=a;n+=3){bn.fromArray(l,n);const s=i.x*Math.abs(bn.x)+i.y*Math.abs(bn.y)+i.z*Math.abs(bn.z),o=e.dot(bn),c=t.dot(bn),u=r.dot(bn);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>s)return!1}return!0}const Yc=new vi,Ui=new Q,ys=new Q;class Ji{constructor(e=new Q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Yc.setFromPoints(e).getCenter(r);let i=0;for(let n=0,a=e.length;n<a;n++)i=Math.max(i,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Ui,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(ys)),this.expandByPoint(Ui.copy(e.center).sub(ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new Q,Ms=new Q,vr=new Q,dn=new Q,bs=new Q,xr=new Q,Ss=new Q;class fl{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.direction).multiplyScalar(t).add(this.origin),tn.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){Ms.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Ms);const n=e.distanceTo(t)*.5,a=-this.direction.dot(vr),s=dn.dot(this.direction),o=-dn.dot(vr),c=dn.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*o-s,h=a*s-o,g=n*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,p=f*(f+a*h+2*s)+h*(a*f+h+2*o)+c}else h=n,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*o)+c;else h=-n,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*o)+c;else h<=-g?(f=Math.max(0,-(-a*n+s)),h=f>0?-n:Math.min(Math.max(-n,-o),n),p=-f*f+h*(h+2*o)+c):h<=g?(f=0,h=Math.min(Math.max(-n,-o),n),p=h*(h+2*o)+c):(f=Math.max(0,-(a*n+s)),h=f>0?n:Math.min(Math.max(-n,-o),n),p=-f*f+h*(h+2*o)+c);else h=a>0?-n:n,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*o)+c;return r&&r.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(vr).multiplyScalar(h).add(Ms),p}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const r=tn.dot(this.direction),i=tn.dot(tn)-r*r,n=e.radius*e.radius;if(i>n)return null;const a=Math.sqrt(n-i),s=r-a,o=r+a;return s<0&&o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,n,a,s,o;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(n=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),r>a||n>i||((n>r||isNaN(r))&&(r=n),(a<i||isNaN(i))&&(i=a),f>=0?(s=(e.min.z-h.z)*f,o=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,o=(e.min.z-h.z)*f),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,r,i,n){bs.subVectors(t,e),xr.subVectors(r,e),Ss.crossVectors(bs,xr);let a=this.direction.dot(Ss),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;dn.subVectors(this.origin,e);const o=s*this.direction.dot(xr.crossVectors(dn,xr));if(o<0)return null;const c=s*this.direction.dot(bs.cross(dn));if(c<0||o+c>a)return null;const u=-s*dn.dot(Ss);return u<0?null:this.at(u/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,r,i,n,a,s,o,c,u,f,h,p,g,m,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=i,v[1]=n,v[5]=a,v[9]=s,v[13]=o,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=p,v[7]=g,v[11]=m,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/Qn.setFromMatrixColumn(e,0).length(),n=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,n=e.z,a=Math.cos(r),s=Math.sin(r),o=Math.cos(i),c=Math.sin(i),u=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){const h=a*u,p=a*f,g=s*u,m=s*f;t[0]=o*u,t[4]=-o*f,t[8]=c,t[1]=p+g*c,t[5]=h-m*c,t[9]=-s*o,t[2]=m-h*c,t[6]=g+p*c,t[10]=a*o}else if(e.order==="YXZ"){const h=o*u,p=o*f,g=c*u,m=c*f;t[0]=h+m*s,t[4]=g*s-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-s,t[2]=p*s-g,t[6]=m+h*s,t[10]=a*o}else if(e.order==="ZXY"){const h=o*u,p=o*f,g=c*u,m=c*f;t[0]=h-m*s,t[4]=-a*f,t[8]=g+p*s,t[1]=p+g*s,t[5]=a*u,t[9]=m-h*s,t[2]=-a*c,t[6]=s,t[10]=a*o}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=s*u,m=s*f;t[0]=o*u,t[4]=g*c-p,t[8]=h*c+m,t[1]=o*f,t[5]=m*c+h,t[9]=p*c-g,t[2]=-c,t[6]=s*o,t[10]=a*o}else if(e.order==="YZX"){const h=a*o,p=a*c,g=s*o,m=s*c;t[0]=o*u,t[4]=m-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=a*o,p=a*c,g=s*o,m=s*c;t[0]=o*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=s*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zc,e,Kc)}lookAt(e,t,r){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),pn.crossVectors(r,Dt),pn.lengthSq()===0&&(Math.abs(r.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),pn.crossVectors(r,Dt)),pn.normalize(),yr.crossVectors(Dt,pn),i[0]=pn.x,i[4]=yr.x,i[8]=Dt.x,i[1]=pn.y,i[5]=yr.y,i[9]=Dt.y,i[2]=pn.z,i[6]=yr.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,n=this.elements,a=r[0],s=r[4],o=r[8],c=r[12],u=r[1],f=r[5],h=r[9],p=r[13],g=r[2],m=r[6],d=r[10],v=r[14],x=r[3],b=r[7],S=r[11],y=r[15],A=i[0],P=i[4],_=i[8],L=i[12],F=i[1],K=i[5],O=i[9],R=i[13],D=i[2],z=i[6],Y=i[10],ie=i[14],Z=i[3],G=i[7],j=i[11],T=i[15];return n[0]=a*A+s*F+o*D+c*Z,n[4]=a*P+s*K+o*z+c*G,n[8]=a*_+s*O+o*Y+c*j,n[12]=a*L+s*R+o*ie+c*T,n[1]=u*A+f*F+h*D+p*Z,n[5]=u*P+f*K+h*z+p*G,n[9]=u*_+f*O+h*Y+p*j,n[13]=u*L+f*R+h*ie+p*T,n[2]=g*A+m*F+d*D+v*Z,n[6]=g*P+m*K+d*z+v*G,n[10]=g*_+m*O+d*Y+v*j,n[14]=g*L+m*R+d*ie+v*T,n[3]=x*A+b*F+S*D+y*Z,n[7]=x*P+b*K+S*z+y*G,n[11]=x*_+b*O+S*Y+y*j,n[15]=x*L+b*R+S*ie+y*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],n=e[12],a=e[1],s=e[5],o=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],v=e[15];return g*(+n*o*f-i*c*f-n*s*h+r*c*h+i*s*p-r*o*p)+m*(+t*o*p-t*c*h+n*a*h-i*a*p+i*c*u-n*o*u)+d*(+t*c*f-t*s*p-n*a*f+r*a*p+n*s*u-r*c*u)+v*(-i*s*u-t*o*f+t*s*h+i*a*f-r*a*h+r*o*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],o=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],v=e[15],x=f*d*c-m*h*c+m*o*p-s*d*p-f*o*v+s*h*v,b=g*h*c-u*d*c-g*o*p+a*d*p+u*o*v-a*h*v,S=u*m*c-g*f*c+g*s*p-a*m*p-u*s*v+a*f*v,y=g*f*o-u*m*o-g*s*h+a*m*h+u*s*d-a*f*d,A=t*x+r*b+i*S+n*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=x*P,e[1]=(m*h*n-f*d*n-m*i*p+r*d*p+f*i*v-r*h*v)*P,e[2]=(s*d*n-m*o*n+m*i*c-r*d*c-s*i*v+r*o*v)*P,e[3]=(f*o*n-s*h*n-f*i*c+r*h*c+s*i*p-r*o*p)*P,e[4]=b*P,e[5]=(u*d*n-g*h*n+g*i*p-t*d*p-u*i*v+t*h*v)*P,e[6]=(g*o*n-a*d*n-g*i*c+t*d*c+a*i*v-t*o*v)*P,e[7]=(a*h*n-u*o*n+u*i*c-t*h*c-a*i*p+t*o*p)*P,e[8]=S*P,e[9]=(g*f*n-u*m*n-g*r*p+t*m*p+u*r*v-t*f*v)*P,e[10]=(a*m*n-g*s*n+g*r*c-t*m*c-a*r*v+t*s*v)*P,e[11]=(u*s*n-a*f*n-u*r*c+t*f*c+a*r*p-t*s*p)*P,e[12]=y*P,e[13]=(u*m*i-g*f*i+g*r*h-t*m*h-u*r*d+t*f*d)*P,e[14]=(g*s*i-a*m*i-g*r*o+t*m*o+a*r*d-t*s*d)*P,e[15]=(a*f*i-u*s*i+u*r*o-t*f*o-a*r*h+t*s*h)*P,this}scale(e){const t=this.elements,r=e.x,i=e.y,n=e.z;return t[0]*=r,t[4]*=i,t[8]*=n,t[1]*=r,t[5]*=i,t[9]*=n,t[2]*=r,t[6]*=i,t[10]*=n,t[3]*=r,t[7]*=i,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),n=1-r,a=e.x,s=e.y,o=e.z,c=n*a,u=n*s;return this.set(c*a+r,c*s-i*o,c*o+i*s,0,c*s+i*o,u*s+r,u*o-i*a,0,c*o-i*s,u*o+i*a,n*o*o+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,n,a){return this.set(1,r,n,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,n=t._x,a=t._y,s=t._z,o=t._w,c=n+n,u=a+a,f=s+s,h=n*c,p=n*u,g=n*f,m=a*u,d=a*f,v=s*f,x=o*c,b=o*u,S=o*f,y=r.x,A=r.y,P=r.z;return i[0]=(1-(m+v))*y,i[1]=(p+S)*y,i[2]=(g-b)*y,i[3]=0,i[4]=(p-S)*A,i[5]=(1-(h+v))*A,i[6]=(d+x)*A,i[7]=0,i[8]=(g+b)*P,i[9]=(d-x)*P,i[10]=(1-(h+m))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let n=Qn.set(i[0],i[1],i[2]).length();const a=Qn.set(i[4],i[5],i[6]).length(),s=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(n=-n),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const c=1/n,u=1/a,f=1/s;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=f,Wt.elements[9]*=f,Wt.elements[10]*=f,t.setFromRotationMatrix(Wt),r.x=n,r.y=a,r.z=s,this}makePerspective(e,t,r,i,n,a){const s=this.elements,o=2*n/(t-e),c=2*n/(r-i),u=(t+e)/(t-e),f=(r+i)/(r-i),h=-(a+n)/(a-n),p=-2*a*n/(a-n);return s[0]=o,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,r,i,n,a){const s=this.elements,o=1/(t-e),c=1/(r-i),u=1/(a-n),f=(t+e)*o,h=(r+i)*c,p=(a+n)*u;return s[0]=2*o,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Qn=new Q,Wt=new at,Zc=new Q(0,0,0),Kc=new Q(1,1,1),pn=new Q,yr=new Q,Dt=new Q,eo=new at,to=new Fn;class Qi{constructor(e=0,t=0,r=0,i=Qi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,n=i[0],a=i[4],s=i[8],o=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,n));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return to.setFromEuler(this),this.setFromQuaternion(to,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Qi.DefaultOrder="XYZ";Qi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jc=0;const no=new Q,$n=new Fn,nn=new at,Mr=new Q,Ii=new Q,Qc=new Q,$c=new Fn,io=new Q(1,0,0),ro=new Q(0,1,0),so=new Q(0,0,1),eu={type:"added"},ao={type:"removed"};class Et extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DefaultUp.clone();const e=new Q,t=new Qi,r=new Fn,i=new Q(1,1,1);function n(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Tt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DefaultMatrixWorldAutoUpdate,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(io,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(so,e)}translateOnAxis(e,t){return no.copy(e).applyQuaternion(this.quaternion),this.position.add(no.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(io,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(so,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Mr.copy(e):Mr.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ii,Mr,this.up):nn.lookAt(Mr,Ii,this.up),this.quaternion.setFromRotationMatrix(nn),i&&(nn.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(nn),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ao)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ao)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(r=r.concat(a))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,Qc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,$c,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++){const n=t[r];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let n=0,a=i.length;n<a;n++){const s=i[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function n(s,o){return s[o.uuid]===void 0&&(s[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const o=s.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const f=o[c];n(e.shapes,f)}else n(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let o=0,c=this.material.length;o<c;o++)s.push(n(e.materials,this.material[o]));i.material=s}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const o=this.animations[s];i.animations.push(n(e.animations,o))}}if(t){const s=a(e.geometries),o=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);s.length>0&&(r.geometries=s),o.length>0&&(r.materials=o),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=i,r;function a(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Et.DefaultUp=new Q(0,1,0);Et.DefaultMatrixAutoUpdate=!0;Et.DefaultMatrixWorldAutoUpdate=!0;const Ht=new Q,rn=new Q,ws=new Q,sn=new Q,ei=new Q,ti=new Q,oo=new Q,Ts=new Q,Es=new Q,As=new Q;class an{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),Ht.subVectors(e,t),i.cross(Ht);const n=i.lengthSq();return n>0?i.multiplyScalar(1/Math.sqrt(n)):i.set(0,0,0)}static getBarycoord(e,t,r,i,n){Ht.subVectors(i,t),rn.subVectors(r,t),ws.subVectors(e,t);const a=Ht.dot(Ht),s=Ht.dot(rn),o=Ht.dot(ws),c=rn.dot(rn),u=rn.dot(ws),f=a*c-s*s;if(f===0)return n.set(-2,-1,-1);const h=1/f,p=(c*o-s*u)*h,g=(a*u-s*o)*h;return n.set(1-p-g,g,p)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,sn),sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,r,i,n,a,s,o){return this.getBarycoord(e,t,r,i,sn),o.set(0,0),o.addScaledVector(n,sn.x),o.addScaledVector(a,sn.y),o.addScaledVector(s,sn.z),o}static isFrontFacing(e,t,r,i){return Ht.subVectors(r,t),rn.subVectors(e,t),Ht.cross(rn).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ht.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,n){return an.getUV(e,this.a,this.b,this.c,t,r,i,n)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,n=this.c;let a,s;ei.subVectors(i,r),ti.subVectors(n,r),Ts.subVectors(e,r);const o=ei.dot(Ts),c=ti.dot(Ts);if(o<=0&&c<=0)return t.copy(r);Es.subVectors(e,i);const u=ei.dot(Es),f=ti.dot(Es);if(u>=0&&f<=u)return t.copy(i);const h=o*f-u*c;if(h<=0&&o>=0&&u<=0)return a=o/(o-u),t.copy(r).addScaledVector(ei,a);As.subVectors(e,n);const p=ei.dot(As),g=ti.dot(As);if(g>=0&&p<=g)return t.copy(n);const m=p*c-o*g;if(m<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(r).addScaledVector(ti,s);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return oo.subVectors(n,i),s=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(oo,s);const v=1/(d+m+h);return a=m*v,s=h*v,t.copy(r).addScaledVector(ei,a).addScaledVector(ti,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let tu=0;class $i extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=hi,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(r.blending=this.blending),this.side!==gn&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(n){const a=[];for(const s in n){const o=n[s];delete o.metadata,a.push(o)}return a}if(t){const n=i(e.textures),a=i(e.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let n=0;n!==i;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vr extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new Q,br=new Be;class Ut{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Za,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),i=Lt(i,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class dl extends Ut{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class pl extends Ut{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jt extends Ut{constructor(e,t,r){super(new Float32Array(e),t,r)}}let nu=0;const Ft=new at,Cs=new Et,ni=new Q,Pt=new vi,Fi=new vi,ft=new Q;class kt extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?pl:dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Tt().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,r){return Ft.makeTranslation(e,t,r),this.applyMatrix4(Ft),this}scale(e,t,r){return Ft.makeScale(e,t,r),this.applyMatrix4(Ft),this}lookAt(e){return Cs.lookAt(e),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const n=e[r];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const n=t[r];Pt.setFromBufferAttribute(n),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];Fi.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(Pt.min,Fi.min),Pt.expandByPoint(ft),ft.addVectors(Pt.max,Fi.max),Pt.expandByPoint(ft)):(Pt.expandByPoint(Fi.min),Pt.expandByPoint(Fi.max))}Pt.getCenter(r);let i=0;for(let n=0,a=e.count;n<a;n++)ft.fromBufferAttribute(e,n),i=Math.max(i,r.distanceToSquared(ft));if(t)for(let n=0,a=t.length;n<a;n++){const s=t[n],o=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ft.fromBufferAttribute(s,c),o&&(ni.fromBufferAttribute(e,c),ft.add(ni)),i=Math.max(i,r.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=t.position.array,n=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*s),4));const o=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<s;F++)c[F]=new Q,u[F]=new Q;const f=new Q,h=new Q,p=new Q,g=new Be,m=new Be,d=new Be,v=new Q,x=new Q;function b(F,K,O){f.fromArray(i,F*3),h.fromArray(i,K*3),p.fromArray(i,O*3),g.fromArray(a,F*2),m.fromArray(a,K*2),d.fromArray(a,O*2),h.sub(f),p.sub(f),m.sub(g),d.sub(g);const R=1/(m.x*d.y-d.x*m.y);isFinite(R)&&(v.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(R),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(R),c[F].add(v),c[K].add(v),c[O].add(v),u[F].add(x),u[K].add(x),u[O].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:r.length}]);for(let F=0,K=S.length;F<K;++F){const O=S[F],R=O.start,D=O.count;for(let z=R,Y=R+D;z<Y;z+=3)b(r[z+0],r[z+1],r[z+2])}const y=new Q,A=new Q,P=new Q,_=new Q;function L(F){P.fromArray(n,F*3),_.copy(P);const K=c[F];y.copy(K),y.sub(P.multiplyScalar(P.dot(K))).normalize(),A.crossVectors(_,K);const R=A.dot(u[F])<0?-1:1;o[F*4]=y.x,o[F*4+1]=y.y,o[F*4+2]=y.z,o[F*4+3]=R}for(let F=0,K=S.length;F<K;++F){const O=S[F],R=O.start,D=O.count;for(let z=R,Y=R+D;z<Y;z+=3)L(r[z+0]),L(r[z+1]),L(r[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const i=new Q,n=new Q,a=new Q,s=new Q,o=new Q,c=new Q,u=new Q,f=new Q;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,g),n.fromBufferAttribute(t,m),a.fromBufferAttribute(t,d),u.subVectors(a,n),f.subVectors(i,n),u.cross(f),s.fromBufferAttribute(r,g),o.fromBufferAttribute(r,m),c.fromBufferAttribute(r,d),s.add(u),o.add(u),c.add(u),r.setXYZ(g,s.x,s.y,s.z),r.setXYZ(m,o.x,o.y,o.z),r.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,n),f.subVectors(i,n),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(s,o){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(o.length*u);let p=0,g=0;for(let m=0,d=o.length;m<d;m++){s.isInterleavedBufferAttribute?p=o[m]*s.data.stride+s.offset:p=o[m]*u;for(let v=0;v<u;v++)h[g++]=c[p++]}return new Ut(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,r=this.index.array,i=this.attributes;for(const s in i){const o=i[s],c=e(o,r);t.setAttribute(s,c)}const n=this.morphAttributes;for(const s in n){const o=[],c=n[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,r);o.push(p)}t.morphAttributes[s]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,o=a.length;s<o;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const o in r){const c=r[o];e.data.attributes[o]=c.toJSON(e.data)}const i={};let n=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[o]=u,n=!0)}n&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const n=e.morphAttributes;for(const c in n){const u=[],f=n[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new at,ii=new fl,Ls=new Ji,Oi=new Q,Ni=new Q,ki=new Q,Ds=new Q,Sr=new Q,wr=new Be,Tr=new Be,Er=new Be,Ps=new Q,Ar=new Q;class Nt extends Et{constructor(e=new kt,t=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,n=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(n&&s){Sr.set(0,0,0);for(let o=0,c=n.length;o<c;o++){const u=s[o],f=n[o];u!==0&&(Ds.fromBufferAttribute(f,e),a?Sr.addScaledVector(Ds,u):Sr.addScaledVector(Ds.sub(t),u))}t.add(Sr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const r=this.geometry,i=this.material,n=this.matrixWorld;if(i===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Ls.copy(r.boundingSphere),Ls.applyMatrix4(n),e.ray.intersectsSphere(Ls)===!1)||(lo.copy(n).invert(),ii.copy(e.ray).applyMatrix4(lo),r.boundingBox!==null&&ii.intersectsBox(r.boundingBox)===!1))return;let a;const s=r.index,o=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv2,f=r.groups,h=r.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,g=f.length;p<g;p++){const m=f[p],d=i[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(s.count,Math.min(m.start+m.count,h.start+h.count));for(let b=v,S=x;b<S;b+=3){const y=s.getX(b),A=s.getX(b+1),P=s.getX(b+2);a=Cr(this,d,e,ii,c,u,y,A,P),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const p=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let m=p,d=g;m<d;m+=3){const v=s.getX(m),x=s.getX(m+1),b=s.getX(m+2);a=Cr(this,i,e,ii,c,u,v,x,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(o!==void 0)if(Array.isArray(i))for(let p=0,g=f.length;p<g;p++){const m=f[p],d=i[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=v,S=x;b<S;b+=3){const y=b,A=b+1,P=b+2;a=Cr(this,d,e,ii,c,u,y,A,P),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=p,d=g;m<d;m+=3){const v=m,x=m+1,b=m+2;a=Cr(this,i,e,ii,c,u,v,x,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function iu(l,e,t,r,i,n,a,s){let o;if(e.side===Rt?o=r.intersectTriangle(a,n,i,!0,s):o=r.intersectTriangle(i,n,a,e.side===gn,s),o===null)return null;Ar.copy(s),Ar.applyMatrix4(l.matrixWorld);const c=t.ray.origin.distanceTo(Ar);return c<t.near||c>t.far?null:{distance:c,point:Ar.clone(),object:l}}function Cr(l,e,t,r,i,n,a,s,o){l.getVertexPosition(a,Oi),l.getVertexPosition(s,Ni),l.getVertexPosition(o,ki);const c=iu(l,e,t,r,Oi,Ni,ki,Ps);if(c){i&&(wr.fromBufferAttribute(i,a),Tr.fromBufferAttribute(i,s),Er.fromBufferAttribute(i,o),c.uv=an.getUV(Ps,Oi,Ni,ki,wr,Tr,Er,new Be)),n&&(wr.fromBufferAttribute(n,a),Tr.fromBufferAttribute(n,s),Er.fromBufferAttribute(n,o),c.uv2=an.getUV(Ps,Oi,Ni,ki,wr,Tr,Er,new Be));const u={a,b:s,c:o,normal:new Q,materialIndex:0};an.getNormal(Oi,Ni,ki,u.normal),c.face=u}return c}class er extends kt{constructor(e=1,t=1,r=1,i=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:n,depthSegments:a};const s=this;i=Math.floor(i),n=Math.floor(n),a=Math.floor(a);const o=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,r,t,e,a,n,0),g("z","y","x",1,-1,r,t,-e,a,n,1),g("x","z","y",1,1,e,r,t,i,a,2),g("x","z","y",1,-1,e,r,-t,i,a,3),g("x","y","z",1,-1,e,t,r,i,n,4),g("x","y","z",-1,-1,e,t,-r,i,n,5),this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function g(m,d,v,x,b,S,y,A,P,_,L){const F=S/P,K=y/_,O=S/2,R=y/2,D=A/2,z=P+1,Y=_+1;let ie=0,Z=0;const G=new Q;for(let j=0;j<Y;j++){const T=j*K-R;for(let U=0;U<z;U++){const V=U*F-O;G[m]=V*x,G[d]=T*b,G[v]=D,c.push(G.x,G.y,G.z),G[m]=0,G[d]=0,G[v]=A>0?1:-1,u.push(G.x,G.y,G.z),f.push(U/P),f.push(1-j/_),ie+=1}}for(let j=0;j<_;j++)for(let T=0;T<P;T++){const U=h+T+z*j,V=h+T+z*(j+1),X=h+(T+1)+z*(j+1),H=h+(T+1)+z*j;o.push(U,V,H),o.push(V,X,H),Z+=6}s.addGroup(p,Z,L),p+=Z,h+=ie}}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(l){const e={};for(const t in l){e[t]={};for(const r in l[t]){const i=l[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function vt(l){const e={};for(let t=0;t<l.length;t++){const r=_i(l[t]);for(const i in r)e[i]=r[i]}return e}function ru(l){const e=[];for(let t=0;t<l.length;t++)e.push(l[t].clone());return e}function ml(l){return l.getRenderTarget()===null&&l.outputEncoding===$e?Jt:qi}const gl={clone:_i,merge:vt};var su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class _l extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends _l{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fs*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,n=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;n+=a.offsetX*i/o,t-=a.offsetY*r/c,i*=a.width/o,r*=a.height/c}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ri=-90,si=1;class ou extends Et{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r;const i=new Ot(ri,si,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const n=new Ot(ri,si,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const a=new Ot(ri,si,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Ot(ri,si,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const o=new Ot(ri,si,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const c=new Ot(ri,si,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[i,n,a,s,o,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=on,e.xr.enabled=!1;const p=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,i),e.setRenderTarget(r,1),e.render(t,n),e.setRenderTarget(r,2),e.render(t,a),e.setRenderTarget(r,3),e.render(t,s),e.setRenderTarget(r,4),e.render(t,o),r.texture.generateMipmaps=p,e.setRenderTarget(r,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,r.texture.needsPMREMUpdate=!0}}class vl extends yt{constructor(e,t,r,i,n,a,s,o,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,r,i,n,a,s,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lu extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new vl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new er(5,5,5),n=new On({name:"CubemapFromEquirect",uniforms:_i(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rt,blending:mn});n.uniforms.tEquirect.value=t;const a=new Nt(i,n),s=t.minFilter;return t.minFilter===Hi&&(t.minFilter=St),new ou(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,i){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,i);e.setRenderTarget(n)}}const Rs=new Q,cu=new Q,uu=new Tt;class wn{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Rs.subVectors(r,t).cross(cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(Rs),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(r).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||uu.getNormalMatrix(e),i=this.coplanarPoint(Rs).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Ji,Lr=new Q;class xl{constructor(e=new wn,t=new wn,r=new wn,i=new wn,n=new wn,a=new wn){this.planes=[e,t,r,i,n,a]}set(e,t,r,i,n,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(n),s[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,i=r[0],n=r[1],a=r[2],s=r[3],o=r[4],c=r[5],u=r[6],f=r[7],h=r[8],p=r[9],g=r[10],m=r[11],d=r[12],v=r[13],x=r[14],b=r[15];return t[0].setComponents(s-i,f-o,m-h,b-d).normalize(),t[1].setComponents(s+i,f+o,m+h,b+d).normalize(),t[2].setComponents(s+n,f+c,m+p,b+v).normalize(),t[3].setComponents(s-n,f-c,m-p,b-v).normalize(),t[4].setComponents(s-a,f-u,m-g,b-x).normalize(),t[5].setComponents(s+a,f+u,m+g,b+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yl(){let l=null,e=!1,t=null,r=null;function i(n,a){t(n,a),r=l.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=l.requestAnimationFrame(i),e=!0)},stop:function(){l.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){l=n}}}function fu(l,e){const t=e.isWebGL2,r=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=l.createBuffer();l.bindBuffer(u,p),l.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function n(c,u,f){const h=u.array,p=u.updateRange;l.bindBuffer(f,c),p.count===-1?l.bufferSubData(f,0,h):(t?l.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):l.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(l.deleteBuffer(u.buffer),r.delete(c))}function o(c,u){if(c.isGLBufferAttribute){const h=r.get(c);(!h||h.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);f===void 0?r.set(c,i(c,u)):f.version<c.version&&(n(f.buffer,c,u),f.version=c.version)}return{get:a,remove:s,update:o}}class xi extends kt{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const n=e/2,a=t/2,s=Math.floor(r),o=Math.floor(i),c=s+1,u=o+1,f=e/s,h=t/o,p=[],g=[],m=[],d=[];for(let v=0;v<u;v++){const x=v*h-a;for(let b=0;b<c;b++){const S=b*f-n;g.push(S,-x,0),m.push(0,0,1),d.push(b/s),d.push(1-v/o)}}for(let v=0;v<o;v++)for(let x=0;x<s;x++){const b=x+c*v,S=x+c*(v+1),y=x+1+c*(v+1),A=x+1+c*v;p.push(b,S,A),p.push(S,y,A)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(m,3)),this.setAttribute("uv",new jt(d,2))}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vu="vec3 transformed = vec3( position );",xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",zu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ku=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Af=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,jf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,th=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ih=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,rh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,sh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ah=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,oh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ch=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,uh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ph=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_h=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Th=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ah=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ch=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ph=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ih=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Oh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:hu,alphamap_pars_fragment:du,alphatest_fragment:pu,alphatest_pars_fragment:mu,aomap_fragment:gu,aomap_pars_fragment:_u,begin_vertex:vu,beginnormal_vertex:xu,bsdfs:yu,iridescence_fragment:Mu,bumpmap_pars_fragment:bu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Eu,color_fragment:Au,color_pars_fragment:Cu,color_pars_vertex:Lu,color_vertex:Du,common:Pu,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Iu,displacementmap_vertex:Fu,emissivemap_fragment:Ou,emissivemap_pars_fragment:Nu,encodings_fragment:ku,encodings_pars_fragment:zu,envmap_fragment:Bu,envmap_common_pars_fragment:Gu,envmap_pars_fragment:Vu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:tf,envmap_vertex:Hu,fog_vertex:Xu,fog_pars_vertex:qu,fog_fragment:ju,fog_pars_fragment:Yu,gradientmap_pars_fragment:Zu,lightmap_fragment:Ku,lightmap_pars_fragment:Ju,lights_lambert_fragment:Qu,lights_lambert_pars_fragment:$u,lights_pars_begin:ef,lights_toon_fragment:nf,lights_toon_pars_fragment:rf,lights_phong_fragment:sf,lights_phong_pars_fragment:af,lights_physical_fragment:of,lights_physical_pars_fragment:lf,lights_fragment_begin:cf,lights_fragment_maps:uf,lights_fragment_end:ff,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:gf,map_pars_fragment:_f,map_particle_fragment:vf,map_particle_pars_fragment:xf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:Mf,morphcolor_vertex:bf,morphnormal_vertex:Sf,morphtarget_pars_vertex:wf,morphtarget_vertex:Tf,normal_fragment_begin:Ef,normal_fragment_maps:Af,normal_pars_fragment:Cf,normal_pars_vertex:Lf,normal_vertex:Df,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Uf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Ff,output_fragment:Of,packing:Nf,premultiplied_alpha_fragment:kf,project_vertex:zf,dithering_fragment:Bf,dithering_pars_fragment:Gf,roughnessmap_fragment:Vf,roughnessmap_pars_fragment:Wf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Xf,shadowmap_vertex:qf,shadowmask_pars_fragment:jf,skinbase_vertex:Yf,skinning_pars_vertex:Zf,skinning_vertex:Kf,skinnormal_vertex:Jf,specularmap_fragment:Qf,specularmap_pars_fragment:$f,tonemapping_fragment:eh,tonemapping_pars_fragment:th,transmission_fragment:nh,transmission_pars_fragment:ih,uv_pars_fragment:rh,uv_pars_vertex:sh,uv_vertex:ah,uv2_pars_fragment:oh,uv2_pars_vertex:lh,uv2_vertex:ch,worldpos_vertex:uh,background_vert:fh,background_frag:hh,backgroundCube_vert:dh,backgroundCube_frag:ph,cube_vert:mh,cube_frag:gh,depth_vert:_h,depth_frag:vh,distanceRGBA_vert:xh,distanceRGBA_frag:yh,equirect_vert:Mh,equirect_frag:bh,linedashed_vert:Sh,linedashed_frag:wh,meshbasic_vert:Th,meshbasic_frag:Eh,meshlambert_vert:Ah,meshlambert_frag:Ch,meshmatcap_vert:Lh,meshmatcap_frag:Dh,meshnormal_vert:Ph,meshnormal_frag:Rh,meshphong_vert:Uh,meshphong_frag:Ih,meshphysical_vert:Fh,meshphysical_frag:Oh,meshtoon_vert:Nh,meshtoon_frag:kh,points_vert:zh,points_frag:Bh,shadow_vert:Gh,shadow_frag:Vh,sprite_vert:Wh,sprite_frag:Hh},Se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tt},uv2Transform:{value:new Tt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}}},Qt={basic:{uniforms:vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:vt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:vt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:vt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:vt([Se.points,Se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:vt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:vt([Se.common,Se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:vt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:vt([Se.sprite,Se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:vt([Se.common,Se.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:vt([Se.lights,Se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Qt.physical={uniforms:vt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Dr={r:0,b:0,g:0};function Xh(l,e,t,r,i,n,a){const s=new Qe(0);let o=n===!0?0:1,c,u,f=null,h=0,p=null;function g(d,v){let x=!1,b=v.isScene===!0?v.background:null;b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b));const S=l.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(b=null),b===null?m(s,o):b&&b.isColor&&(m(b,1),x=!0),(l.autoClear||x)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Gr)?(u===void 0&&(u=new Nt(new er(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:_i(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=b.encoding!==$e,(f!==b||h!==b.version||p!==l.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,p=l.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Nt(new xi(2,2),new On({name:"BackgroundMaterial",uniforms:_i(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=b.encoding!==$e,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||p!==l.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,p=l.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,v){d.getRGB(Dr,ml(l)),r.buffers.color.setClear(Dr.r,Dr.g,Dr.b,v,a)}return{getClearColor:function(){return s},setClearColor:function(d,v=1){s.set(d),o=v,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,m(s,o)},render:g}}function qh(l,e,t,r){const i=l.getParameter(34921),n=r.isWebGL2?null:e.get("OES_vertex_array_object"),a=r.isWebGL2||n!==null,s={},o=d(null);let c=o,u=!1;function f(D,z,Y,ie,Z){let G=!1;if(a){const j=m(ie,Y,z);c!==j&&(c=j,p(c.object)),G=v(D,ie,Y,Z),G&&x(D,ie,Y,Z)}else{const j=z.wireframe===!0;(c.geometry!==ie.id||c.program!==Y.id||c.wireframe!==j)&&(c.geometry=ie.id,c.program=Y.id,c.wireframe=j,G=!0)}Z!==null&&t.update(Z,34963),(G||u)&&(u=!1,_(D,z,Y,ie),Z!==null&&l.bindBuffer(34963,t.get(Z).buffer))}function h(){return r.isWebGL2?l.createVertexArray():n.createVertexArrayOES()}function p(D){return r.isWebGL2?l.bindVertexArray(D):n.bindVertexArrayOES(D)}function g(D){return r.isWebGL2?l.deleteVertexArray(D):n.deleteVertexArrayOES(D)}function m(D,z,Y){const ie=Y.wireframe===!0;let Z=s[D.id];Z===void 0&&(Z={},s[D.id]=Z);let G=Z[z.id];G===void 0&&(G={},Z[z.id]=G);let j=G[ie];return j===void 0&&(j=d(h()),G[ie]=j),j}function d(D){const z=[],Y=[],ie=[];for(let Z=0;Z<i;Z++)z[Z]=0,Y[Z]=0,ie[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:ie,object:D,attributes:{},index:null}}function v(D,z,Y,ie){const Z=c.attributes,G=z.attributes;let j=0;const T=Y.getAttributes();for(const U in T)if(T[U].location>=0){const X=Z[U];let H=G[U];if(H===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),X===void 0||X.attribute!==H||H&&X.data!==H.data)return!0;j++}return c.attributesNum!==j||c.index!==ie}function x(D,z,Y,ie){const Z={},G=z.attributes;let j=0;const T=Y.getAttributes();for(const U in T)if(T[U].location>=0){let X=G[U];X===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(X=D.instanceColor));const H={};H.attribute=X,X&&X.data&&(H.data=X.data),Z[U]=H,j++}c.attributes=Z,c.attributesNum=j,c.index=ie}function b(){const D=c.newAttributes;for(let z=0,Y=D.length;z<Y;z++)D[z]=0}function S(D){y(D,0)}function y(D,z){const Y=c.newAttributes,ie=c.enabledAttributes,Z=c.attributeDivisors;Y[D]=1,ie[D]===0&&(l.enableVertexAttribArray(D),ie[D]=1),Z[D]!==z&&((r.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),Z[D]=z)}function A(){const D=c.newAttributes,z=c.enabledAttributes;for(let Y=0,ie=z.length;Y<ie;Y++)z[Y]!==D[Y]&&(l.disableVertexAttribArray(Y),z[Y]=0)}function P(D,z,Y,ie,Z,G){r.isWebGL2===!0&&(Y===5124||Y===5125)?l.vertexAttribIPointer(D,z,Y,Z,G):l.vertexAttribPointer(D,z,Y,ie,Z,G)}function _(D,z,Y,ie){if(r.isWebGL2===!1&&(D.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const Z=ie.attributes,G=Y.getAttributes(),j=z.defaultAttributeValues;for(const T in G){const U=G[T];if(U.location>=0){let V=Z[T];if(V===void 0&&(T==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),T==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const X=V.normalized,H=V.itemSize,N=t.get(V);if(N===void 0)continue;const ne=N.buffer,J=N.type,le=N.bytesPerElement;if(V.isInterleavedBufferAttribute){const ae=V.data,ge=ae.stride,re=V.offset;if(ae.isInstancedInterleavedBuffer){for(let ye=0;ye<U.locationSize;ye++)y(U.location+ye,ae.meshPerAttribute);D.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<U.locationSize;ye++)S(U.location+ye);l.bindBuffer(34962,ne);for(let ye=0;ye<U.locationSize;ye++)P(U.location+ye,H/U.locationSize,J,X,ge*le,(re+H/U.locationSize*ye)*le)}else{if(V.isInstancedBufferAttribute){for(let ae=0;ae<U.locationSize;ae++)y(U.location+ae,V.meshPerAttribute);D.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ae=0;ae<U.locationSize;ae++)S(U.location+ae);l.bindBuffer(34962,ne);for(let ae=0;ae<U.locationSize;ae++)P(U.location+ae,H/U.locationSize,J,X,H*le,H/U.locationSize*ae*le)}}else if(j!==void 0){const X=j[T];if(X!==void 0)switch(X.length){case 2:l.vertexAttrib2fv(U.location,X);break;case 3:l.vertexAttrib3fv(U.location,X);break;case 4:l.vertexAttrib4fv(U.location,X);break;default:l.vertexAttrib1fv(U.location,X)}}}}A()}function L(){O();for(const D in s){const z=s[D];for(const Y in z){const ie=z[Y];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete z[Y]}delete s[D]}}function F(D){if(s[D.id]===void 0)return;const z=s[D.id];for(const Y in z){const ie=z[Y];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete z[Y]}delete s[D.id]}function K(D){for(const z in s){const Y=s[z];if(Y[D.id]===void 0)continue;const ie=Y[D.id];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete Y[D.id]}}function O(){R(),u=!0,c!==o&&(c=o,p(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:O,resetDefaultState:R,dispose:L,releaseStatesOfGeometry:F,releaseStatesOfProgram:K,initAttributes:b,enableAttribute:S,disableUnusedAttributes:A}}function jh(l,e,t,r){const i=r.isWebGL2;let n;function a(c){n=c}function s(c,u){l.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){if(f===0)return;let h,p;if(i)h=l,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](n,c,u,f),t.update(u,n,f)}this.setMode=a,this.render=s,this.renderInstances=o}function Yh(l,e,t){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=l.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(P){if(P==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const o=n(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=l.getParameter(34930),h=l.getParameter(35660),p=l.getParameter(3379),g=l.getParameter(34076),m=l.getParameter(34921),d=l.getParameter(36347),v=l.getParameter(36348),x=l.getParameter(36349),b=h>0,S=a||e.has("OES_texture_float"),y=b&&S,A=a?l.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:A}}function Zh(l){const e=this;let t=null,r=0,i=!1,n=!1;const a=new wn,s=new Tt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||r!==0||i;return i=h,t=u(f,p,0),r=f.length,g},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,v=l.get(f);if(!i||g===null||g.length===0||n&&!d)n?u(null):c();else{const x=n?0:r,b=x*4;let S=v.clippingState||null;o.value=S,S=u(g,h,b,p);for(let y=0;y!==b;++y)S[y]=t[y];v.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,p,g){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=o.value,g!==!0||d===null){const v=p+m*4,x=h.matrixWorldInverse;s.getNormalMatrix(x),(d===null||d.length<v)&&(d=new Float32Array(v));for(let b=0,S=p;b!==m;++b,S+=4)a.copy(f[b]).applyMatrix4(x,s),a.normal.toArray(d,S),d[S+3]=a.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Kh(l){let e=new WeakMap;function t(a,s){return s===Hs?a.mapping=pi:s===Xs&&(a.mapping=mi),a}function r(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Hs||s===Xs)if(e.has(a)){const o=e.get(a).texture;return t(o,a.mapping)}else{const o=a.image;if(o&&o.height>0){const c=new lu(o.height/2);return c.fromEquirectangularTexture(l,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const o=e.get(s);o!==void 0&&(e.delete(s),o.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}class Jh extends _l{constructor(e=-1,t=1,r=1,i=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let n=r-e,a=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ui=4,co=[.125,.215,.35,.446,.526,.582],En=20,Us=new Jh,uo=new Qe;let Is=null;const Tn=(1+Math.sqrt(5))/2,oi=1/Tn,fo=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Tn,oi),new Q(0,Tn,-oi),new Q(oi,0,Tn),new Q(-oi,0,Tn),new Q(Tn,oi,0),new Q(-Tn,oi,0)];class ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Is=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,r,i,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Is),e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:St,minFilter:St,generateMipmaps:!1,type:Xi,format:qt,encoding:Un,depthBuffer:!1},i=po(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(e,t,r);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qh(n)),this._blurMaterial=$h(n,e,t)}return i}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,r,i){const s=new Ot(90,1,t,r),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(uo),u.toneMapping=on,u.autoClear=!1;const p=new Vr({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new Nt(new er,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(uo),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(s.up.set(0,o[v],0),s.lookAt(c[v],0,0)):x===1?(s.up.set(0,0,o[v]),s.lookAt(0,c[v],0)):(s.up.set(0,o[v],0),s.lookAt(0,0,c[v]));const b=this._cubeSize;Pr(i,x*b,v>2?b:0,b,b),u.setRenderTarget(i),m&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const n=i?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const o=this._cubeSize;Pr(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(a,Us)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const n=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=fo[(i-1)%fo.length];this._blur(e,i-1,i,n,a)}t.autoClear=r}_blur(e,t,r,i,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,i,"latitudinal",n),this._halfBlur(a,e,r,r,i,"longitudinal",n)}_halfBlur(e,t,r,i,n,a,s){const o=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Nt(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[r]-1,g=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*En-1),m=n/g,d=isFinite(n)?1+Math.floor(u*m):En;d>En&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${En}`);const v=[];let x=0;for(let P=0;P<En;++P){const _=P/m,L=Math.exp(-_*_/2);v.push(L),P===0?x+=L:P<d&&(x+=2*L)}for(let P=0;P<v.length;P++)v[P]=v[P]/x;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-r;const S=this._sizeLods[i],y=3*S*(i>b-ui?i-b+ui:0),A=4*(this._cubeSize-S);Pr(t,y,A,3*S,2*S),o.setRenderTarget(t),o.render(f,Us)}}function Qh(l){const e=[],t=[],r=[];let i=l;const n=l-ui+1+co.length;for(let a=0;a<n;a++){const s=Math.pow(2,i);t.push(s);let o=1/s;a>l-ui?o=co[a-l+ui-1]:a===0&&(o=0),r.push(o);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,d=2,v=1,x=new Float32Array(m*g*p),b=new Float32Array(d*g*p),S=new Float32Array(v*g*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,_=A>2?0:-1,L=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];x.set(L,m*g*A),b.set(h,d*g*A);const F=[A,A,A,A,A,A];S.set(F,v*g*A)}const y=new kt;y.setAttribute("position",new Ut(x,m)),y.setAttribute("uv",new Ut(b,d)),y.setAttribute("faceIndex",new Ut(S,v)),e.push(y),i>ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function po(l,e,t){const r=new In(l,e,t);return r.texture.mapping=Gr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pr(l,e,t,r,i){l.viewport.set(e,t,r,i),l.scissor.set(e,t,r,i)}function $h(l,e,t){const r=new Float32Array(En),i=new Q(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function mo(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function go(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ed(l){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const o=s.mapping,c=o===Hs||o===Xs,u=o===pi||o===mi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new ho(l)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new ho(l));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",n),h.texture}else return null}}}return s}function i(s){let o=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&o++;return o===c}function n(s){const o=s.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function td(l){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function nd(l,e,t,r){const i={},n=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const p=n.get(h);p&&(e.remove(p),n.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function o(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let d=0,v=m.length;d<v;d++)e.update(m[d],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let b=0,S=x.length;b<S;b+=3){const y=x[b+0],A=x[b+1],P=x[b+2];h.push(y,A,A,P,P,y)}}else{const x=g.array;m=g.version;for(let b=0,S=x.length/3-1;b<S;b+=3){const y=b+0,A=b+1,P=b+2;h.push(y,A,A,P,P,y)}}const d=new(al(h)?pl:dl)(h,1);d.version=m;const v=n.get(f);v&&e.remove(v),n.set(f,d)}function u(f){const h=n.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return n.get(f)}return{get:s,update:o,getWireframeAttribute:u}}function id(l,e,t,r){const i=r.isWebGL2;let n;function a(h){n=h}let s,o;function c(h){s=h.type,o=h.bytesPerElement}function u(h,p){l.drawElements(n,p,s,h*o),t.update(p,n,1)}function f(h,p,g){if(g===0)return;let m,d;if(i)m=l,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](n,p,s,h*o,g),t.update(p,n,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function rd(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(n/3);break;case 1:t.lines+=s*(n/2);break;case 3:t.lines+=s*(n-1);break;case 2:t.lines+=s*n;break;case 0:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function sd(l,e){return l[0]-e[0]}function ad(l,e){return Math.abs(e[1])-Math.abs(l[1])}function od(l,e,t){const r={},i=new Float32Array(8),n=new WeakMap,a=new st,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function o(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let v=n.get(u);if(v===void 0||v.count!==d){let Y=function(){D.dispose(),n.delete(u),u.removeEventListener("dispose",Y)};var g=Y;v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let F=0;S===!0&&(F=1),y===!0&&(F=2),A===!0&&(F=3);let K=u.attributes.position.count*F,O=1;K>e.maxTextureSize&&(O=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const R=new Float32Array(K*O*4*d),D=new ul(R,K,O,d);D.type=Cn,D.needsUpdate=!0;const z=F*4;for(let ie=0;ie<d;ie++){const Z=P[ie],G=_[ie],j=L[ie],T=K*O*4*ie;for(let U=0;U<Z.count;U++){const V=U*z;S===!0&&(a.fromBufferAttribute(Z,U),R[T+V+0]=a.x,R[T+V+1]=a.y,R[T+V+2]=a.z,R[T+V+3]=0),y===!0&&(a.fromBufferAttribute(G,U),R[T+V+4]=a.x,R[T+V+5]=a.y,R[T+V+6]=a.z,R[T+V+7]=0),A===!0&&(a.fromBufferAttribute(j,U),R[T+V+8]=a.x,R[T+V+9]=a.y,R[T+V+10]=a.z,R[T+V+11]=j.itemSize===4?a.w:1)}}v={count:d,texture:D,size:new Be(K,O)},n.set(u,v),u.addEventListener("dispose",Y)}let x=0;for(let S=0;S<p.length;S++)x+=p[S];const b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(l,"morphTargetBaseInfluence",b),h.getUniforms().setValue(l,"morphTargetInfluences",p),h.getUniforms().setValue(l,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let d=r[u.id];if(d===void 0||d.length!==m){d=[];for(let y=0;y<m;y++)d[y]=[y,0];r[u.id]=d}for(let y=0;y<m;y++){const A=d[y];A[0]=y,A[1]=p[y]}d.sort(ad);for(let y=0;y<8;y++)y<m&&d[y][1]?(s[y][0]=d[y][0],s[y][1]=d[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(sd);const v=u.morphAttributes.position,x=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const A=s[y],P=A[0],_=A[1];P!==Number.MAX_SAFE_INTEGER&&_?(v&&u.getAttribute("morphTarget"+y)!==v[P]&&u.setAttribute("morphTarget"+y,v[P]),x&&u.getAttribute("morphNormal"+y)!==x[P]&&u.setAttribute("morphNormal"+y,x[P]),i[y]=_,b+=_):(v&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),x&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const S=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(l,"morphTargetBaseInfluence",S),h.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:o}}function ld(l,e,t,r){let i=new WeakMap;function n(o){const c=r.render.frame,u=o.geometry,f=e.get(o,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",s)===!1&&o.addEventListener("dispose",s),t.update(o.instanceMatrix,34962),o.instanceColor!==null&&t.update(o.instanceColor,34962)),f}function a(){i=new WeakMap}function s(o){const c=o.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:a}}const Ml=new yt,bl=new ul,Sl=new jc,wl=new vl,_o=[],vo=[],xo=new Float32Array(16),yo=new Float32Array(9),Mo=new Float32Array(4);function yi(l,e,t){const r=l[0];if(r<=0||r>0)return l;const i=e*t;let n=_o[i];if(n===void 0&&(n=new Float32Array(i),_o[i]=n),e!==0){r.toArray(n,0);for(let a=1,s=0;a!==e;++a)s+=t,l[a].toArray(n,s)}return n}function ot(l,e){if(l.length!==e.length)return!1;for(let t=0,r=l.length;t<r;t++)if(l[t]!==e[t])return!1;return!0}function lt(l,e){for(let t=0,r=e.length;t<r;t++)l[t]=e[t]}function Wr(l,e){let t=vo[e];t===void 0&&(t=new Int32Array(e),vo[e]=t);for(let r=0;r!==e;++r)t[r]=l.allocateTextureUnit();return t}function cd(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function ud(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;l.uniform2fv(this.addr,e),lt(t,e)}}function fd(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;l.uniform3fv(this.addr,e),lt(t,e)}}function hd(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;l.uniform4fv(this.addr,e),lt(t,e)}}function dd(l,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;Mo.set(r),l.uniformMatrix2fv(this.addr,!1,Mo),lt(t,r)}}function pd(l,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;yo.set(r),l.uniformMatrix3fv(this.addr,!1,yo),lt(t,r)}}function md(l,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;xo.set(r),l.uniformMatrix4fv(this.addr,!1,xo),lt(t,r)}}function gd(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function _d(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;l.uniform2iv(this.addr,e),lt(t,e)}}function vd(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;l.uniform3iv(this.addr,e),lt(t,e)}}function xd(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;l.uniform4iv(this.addr,e),lt(t,e)}}function yd(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function Md(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;l.uniform2uiv(this.addr,e),lt(t,e)}}function bd(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;l.uniform3uiv(this.addr,e),lt(t,e)}}function Sd(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;l.uniform4uiv(this.addr,e),lt(t,e)}}function wd(l,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(l.uniform1i(this.addr,i),r[0]=i),t.setTexture2D(e||Ml,i)}function Td(l,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(l.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||Sl,i)}function Ed(l,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(l.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||wl,i)}function Ad(l,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(l.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||bl,i)}function Cd(l){switch(l){case 5126:return cd;case 35664:return ud;case 35665:return fd;case 35666:return hd;case 35674:return dd;case 35675:return pd;case 35676:return md;case 5124:case 35670:return gd;case 35667:case 35671:return _d;case 35668:case 35672:return vd;case 35669:case 35673:return xd;case 5125:return yd;case 36294:return Md;case 36295:return bd;case 36296:return Sd;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return Ad}}function Ld(l,e){l.uniform1fv(this.addr,e)}function Dd(l,e){const t=yi(e,this.size,2);l.uniform2fv(this.addr,t)}function Pd(l,e){const t=yi(e,this.size,3);l.uniform3fv(this.addr,t)}function Rd(l,e){const t=yi(e,this.size,4);l.uniform4fv(this.addr,t)}function Ud(l,e){const t=yi(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function Id(l,e){const t=yi(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function Fd(l,e){const t=yi(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function Od(l,e){l.uniform1iv(this.addr,e)}function Nd(l,e){l.uniform2iv(this.addr,e)}function kd(l,e){l.uniform3iv(this.addr,e)}function zd(l,e){l.uniform4iv(this.addr,e)}function Bd(l,e){l.uniform1uiv(this.addr,e)}function Gd(l,e){l.uniform2uiv(this.addr,e)}function Vd(l,e){l.uniform3uiv(this.addr,e)}function Wd(l,e){l.uniform4uiv(this.addr,e)}function Hd(l,e,t){const r=this.cache,i=e.length,n=Wr(t,i);ot(r,n)||(l.uniform1iv(this.addr,n),lt(r,n));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ml,n[a])}function Xd(l,e,t){const r=this.cache,i=e.length,n=Wr(t,i);ot(r,n)||(l.uniform1iv(this.addr,n),lt(r,n));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sl,n[a])}function qd(l,e,t){const r=this.cache,i=e.length,n=Wr(t,i);ot(r,n)||(l.uniform1iv(this.addr,n),lt(r,n));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wl,n[a])}function jd(l,e,t){const r=this.cache,i=e.length,n=Wr(t,i);ot(r,n)||(l.uniform1iv(this.addr,n),lt(r,n));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bl,n[a])}function Yd(l){switch(l){case 5126:return Ld;case 35664:return Dd;case 35665:return Pd;case 35666:return Rd;case 35674:return Ud;case 35675:return Id;case 35676:return Fd;case 5124:case 35670:return Od;case 35667:case 35671:return Nd;case 35668:case 35672:return kd;case 35669:case 35673:return zd;case 5125:return Bd;case 36294:return Gd;case 36295:return Vd;case 36296:return Wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Hd;case 35679:case 36299:case 36307:return Xd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return jd}}class Zd{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Cd(t.type)}}class Kd{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=Yd(t.type)}}class Jd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let n=0,a=i.length;n!==a;++n){const s=i[n];s.setValue(e,t[s.id],r)}}}const Fs=/(\w+)(\])?(\[|\.)?/g;function bo(l,e){l.seq.push(e),l.map[e.id]=e}function Qd(l,e,t){const r=l.name,i=r.length;for(Fs.lastIndex=0;;){const n=Fs.exec(r),a=Fs.lastIndex;let s=n[1];const o=n[2]==="]",c=n[3];if(o&&(s=s|0),c===void 0||c==="["&&a+2===i){bo(t,c===void 0?new Zd(s,l,e):new Kd(s,l,e));break}else{let f=t.map[s];f===void 0&&(f=new Jd(s),bo(t,f)),t=f}}}class kr{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,35718);for(let i=0;i<r;++i){const n=e.getActiveUniform(t,i),a=e.getUniformLocation(t,n.name);Qd(n,a,this)}}setValue(e,t,r,i){const n=this.map[t];n!==void 0&&n.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let n=0,a=t.length;n!==a;++n){const s=t[n],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,n=e.length;i!==n;++i){const a=e[i];a.id in t&&r.push(a)}return r}}function So(l,e,t){const r=l.createShader(e);return l.shaderSource(r,t),l.compileShader(r),r}let $d=0;function ep(l,e){const t=l.split(`
`),r=[],i=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=i;a<n;a++){const s=a+1;r.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return r.join(`
`)}function tp(l){switch(l){case Un:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function wo(l,e,t){const r=l.getShaderParameter(e,35713),i=l.getShaderInfoLog(e).trim();if(r&&i==="")return"";const n=/ERROR: 0:(\d+)/.exec(i);if(n){const a=parseInt(n[1]);return t.toUpperCase()+`

`+i+`

`+ep(l.getShaderSource(e),a)}else return i}function np(l,e){const t=tp(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ip(l,e){let t;switch(e){case yc:t="Linear";break;case Mc:t="Reinhard";break;case bc:t="OptimizedCineon";break;case Sc:t="ACESFilmic";break;case wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rp(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gi).join(`
`)}function sp(l){const e=[];for(const t in l){const r=l[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ap(l,e){const t={},r=l.getProgramParameter(e,35721);for(let i=0;i<r;i++){const n=l.getActiveAttrib(e,i),a=n.name;let s=1;n.type===35674&&(s=2),n.type===35675&&(s=3),n.type===35676&&(s=4),t[a]={type:n.type,location:l.getAttribLocation(e,a),locationSize:s}}return t}function Gi(l){return l!==""}function To(l,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eo(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const op=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ks(l){return l.replace(op,lp)}function lp(l,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ks(t)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(l){return l.replace(cp,up)}function up(l,e,t,r){let i="";for(let n=parseInt(e);n<parseInt(t);n++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function Co(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fp(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function hp(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dp(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function pp(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case nl:e="ENVMAP_BLENDING_MULTIPLY";break;case vc:e="ENVMAP_BLENDING_MIX";break;case xc:e="ENVMAP_BLENDING_ADD";break}return e}function mp(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function gp(l,e,t,r){const i=l.getContext(),n=t.defines;let a=t.vertexShader,s=t.fragmentShader;const o=fp(t),c=hp(t),u=dp(t),f=pp(t),h=mp(t),p=t.isWebGL2?"":rp(t),g=sp(n),m=i.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Gi).join(`
`),d.length>0&&(d+=`
`),v=[p,g].filter(Gi).join(`
`),v.length>0&&(v+=`
`)):(d=[Co(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),v=[p,Co(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?ze.tonemapping_pars_fragment:"",t.toneMapping!==on?ip("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,np("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Ks(a),a=To(a,t),a=Eo(a,t),s=Ks(s),s=To(s,t),s=Eo(s,t),a=Ao(a),s=Ao(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=x+d+a,S=x+v+s,y=So(i,35633,b),A=So(i,35632,S);if(i.attachShader(m,y),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),l.debug.checkShaderErrors){const L=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(y).trim(),K=i.getShaderInfoLog(A).trim();let O=!0,R=!0;if(i.getProgramParameter(m,35714)===!1){O=!1;const D=wo(i,y,"vertex"),z=wo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+D+`
`+z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||K==="")&&(R=!1);R&&(this.diagnostics={runnable:O,programLog:L,vertexShader:{log:F,prefix:d},fragmentShader:{log:K,prefix:v}})}i.deleteShader(y),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new kr(i,m)),P};let _;return this.getAttributes=function(){return _===void 0&&(_=ap(i,m)),_},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=$d++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=A,this}let _p=0;class vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new xp(e),t.set(e,r)),r}}class xp{constructor(e){this.id=_p++,this.code=e,this.usedTimes=0}}function yp(l,e,t,r,i,n,a){const s=new hl,o=new vp,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,L,F,K,O){const R=K.fog,D=O.geometry,z=_.isMeshStandardMaterial?K.environment:null,Y=(_.isMeshStandardMaterial?t:e).get(_.envMap||z),ie=Y&&Y.mapping===Gr?Y.image.height:null,Z=g[_.type];_.precision!==null&&(p=i.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const G=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=G!==void 0?G.length:0;let T=0;D.morphAttributes.position!==void 0&&(T=1),D.morphAttributes.normal!==void 0&&(T=2),D.morphAttributes.color!==void 0&&(T=3);let U,V,X,H;if(Z){const ge=Qt[Z];U=ge.vertexShader,V=ge.fragmentShader}else U=_.vertexShader,V=_.fragmentShader,o.update(_),X=o.getVertexShaderID(_),H=o.getFragmentShaderID(_);const N=l.getRenderTarget(),ne=_.alphaTest>0,J=_.clearcoat>0,le=_.iridescence>0;return{isWebGL2:u,shaderID:Z,shaderName:_.type,vertexShader:U,fragmentShader:V,defines:_.defines,customVertexShaderID:X,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:h,outputEncoding:N===null?l.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:Un,map:!!_.map,matcap:!!_.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:ie,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Wc,tangentSpaceNormalMap:_.normalMapType===Vc,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===$e,clearcoat:J,clearcoatMap:J&&!!_.clearcoatMap,clearcoatRoughnessMap:J&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!_.clearcoatNormalMap,iridescence:le,iridescenceMap:le&&!!_.iridescenceMap,iridescenceThicknessMap:le&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===hi,alphaMap:!!_.alphaMap,alphaTest:ne,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!D.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!R,useFog:_.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:T,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:l.shadowMap.enabled&&F.length>0,shadowMapType:l.shadowMap.type,toneMapping:_.toneMapped?l.toneMapping:on,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zi,flipSided:_.side===Rt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const L=[];if(_.shaderID?L.push(_.shaderID):(L.push(_.customVertexShaderID),L.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)L.push(F),L.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(v(L,_),x(L,_),L.push(l.outputEncoding)),L.push(_.customProgramCacheKey),L.join()}function v(_,L){_.push(L.precision),_.push(L.outputEncoding),_.push(L.envMapMode),_.push(L.envMapCubeUVHeight),_.push(L.combine),_.push(L.vertexUvs),_.push(L.fogExp2),_.push(L.sizeAttenuation),_.push(L.morphTargetsCount),_.push(L.morphAttributeCount),_.push(L.numDirLights),_.push(L.numPointLights),_.push(L.numSpotLights),_.push(L.numSpotLightMaps),_.push(L.numHemiLights),_.push(L.numRectAreaLights),_.push(L.numDirLightShadows),_.push(L.numPointLightShadows),_.push(L.numSpotLightShadows),_.push(L.numSpotLightShadowsWithMaps),_.push(L.shadowMapType),_.push(L.toneMapping),_.push(L.numClippingPlanes),_.push(L.numClipIntersection),_.push(L.depthPacking)}function x(_,L){s.disableAll(),L.isWebGL2&&s.enable(0),L.supportsVertexTextures&&s.enable(1),L.instancing&&s.enable(2),L.instancingColor&&s.enable(3),L.map&&s.enable(4),L.matcap&&s.enable(5),L.envMap&&s.enable(6),L.lightMap&&s.enable(7),L.aoMap&&s.enable(8),L.emissiveMap&&s.enable(9),L.bumpMap&&s.enable(10),L.normalMap&&s.enable(11),L.objectSpaceNormalMap&&s.enable(12),L.tangentSpaceNormalMap&&s.enable(13),L.clearcoat&&s.enable(14),L.clearcoatMap&&s.enable(15),L.clearcoatRoughnessMap&&s.enable(16),L.clearcoatNormalMap&&s.enable(17),L.iridescence&&s.enable(18),L.iridescenceMap&&s.enable(19),L.iridescenceThicknessMap&&s.enable(20),L.displacementMap&&s.enable(21),L.specularMap&&s.enable(22),L.roughnessMap&&s.enable(23),L.metalnessMap&&s.enable(24),L.gradientMap&&s.enable(25),L.alphaMap&&s.enable(26),L.alphaTest&&s.enable(27),L.vertexColors&&s.enable(28),L.vertexAlphas&&s.enable(29),L.vertexUvs&&s.enable(30),L.vertexTangents&&s.enable(31),L.uvsVertexOnly&&s.enable(32),_.push(s.mask),s.disableAll(),L.fog&&s.enable(0),L.useFog&&s.enable(1),L.flatShading&&s.enable(2),L.logarithmicDepthBuffer&&s.enable(3),L.skinning&&s.enable(4),L.morphTargets&&s.enable(5),L.morphNormals&&s.enable(6),L.morphColors&&s.enable(7),L.premultipliedAlpha&&s.enable(8),L.shadowMapEnabled&&s.enable(9),L.physicallyCorrectLights&&s.enable(10),L.doubleSided&&s.enable(11),L.flipSided&&s.enable(12),L.useDepthPacking&&s.enable(13),L.dithering&&s.enable(14),L.specularIntensityMap&&s.enable(15),L.specularColorMap&&s.enable(16),L.transmission&&s.enable(17),L.transmissionMap&&s.enable(18),L.thicknessMap&&s.enable(19),L.sheen&&s.enable(20),L.sheenColorMap&&s.enable(21),L.sheenRoughnessMap&&s.enable(22),L.decodeVideoTexture&&s.enable(23),L.opaque&&s.enable(24),_.push(s.mask)}function b(_){const L=g[_.type];let F;if(L){const K=Qt[L];F=gl.clone(K.uniforms)}else F=_.uniforms;return F}function S(_,L){let F;for(let K=0,O=c.length;K<O;K++){const R=c[K];if(R.cacheKey===L){F=R,++F.usedTimes;break}}return F===void 0&&(F=new gp(l,L,_,n),c.push(F)),F}function y(_){if(--_.usedTimes===0){const L=c.indexOf(_);c[L]=c[c.length-1],c.pop(),_.destroy()}}function A(_){o.remove(_)}function P(){o.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:S,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:P}}function Mp(){let l=new WeakMap;function e(n){let a=l.get(n);return a===void 0&&(a={},l.set(n,a)),a}function t(n){l.delete(n)}function r(n,a,s){l.get(n)[a]=s}function i(){l=new WeakMap}return{get:e,remove:t,update:r,dispose:i}}function bp(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function Lo(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function Do(){const l=[];let e=0;const t=[],r=[],i=[];function n(){e=0,t.length=0,r.length=0,i.length=0}function a(f,h,p,g,m,d){let v=l[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:d},l[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=p,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=m,v.group=d),e++,v}function s(f,h,p,g,m,d){const v=a(f,h,p,g,m,d);p.transmission>0?r.push(v):p.transparent===!0?i.push(v):t.push(v)}function o(f,h,p,g,m,d){const v=a(f,h,p,g,m,d);p.transmission>0?r.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||bp),r.length>1&&r.sort(h||Lo),i.length>1&&i.sort(h||Lo)}function u(){for(let f=e,h=l.length;f<h;f++){const p=l[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:i,init:n,push:s,unshift:o,finish:u,sort:c}}function Sp(){let l=new WeakMap;function e(r,i){const n=l.get(r);let a;return n===void 0?(a=new Do,l.set(r,[a])):i>=n.length?(a=new Do,n.push(a)):a=n[i],a}function t(){l=new WeakMap}return{get:e,dispose:t}}function wp(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Qe};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return l[e.id]=t,t}}}function Tp(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let Ep=0;function Ap(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function Cp(l,e){const t=new wp,r=Tp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new Q);const n=new Q,a=new at,s=new at;function o(u,f){let h=0,p=0,g=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let m=0,d=0,v=0,x=0,b=0,S=0,y=0,A=0,P=0,_=0;u.sort(Ap);const L=f!==!0?Math.PI:1;for(let K=0,O=u.length;K<O;K++){const R=u[K],D=R.color,z=R.intensity,Y=R.distance,ie=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*z*L,p+=D.g*z*L,g+=D.b*z*L;else if(R.isLightProbe)for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(R.sh.coefficients[Z],z);else if(R.isDirectionalLight){const Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity*L),R.castShadow){const G=R.shadow,j=r.get(R);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=R.shadow.matrix,S++}i.directional[m]=Z,m++}else if(R.isSpotLight){const Z=t.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(D).multiplyScalar(z*L),Z.distance=Y,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,i.spot[v]=Z;const G=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,G.updateMatrices(R),R.castShadow&&_++),i.spotLightMatrix[v]=G.matrix,R.castShadow){const j=r.get(R);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=ie,A++}v++}else if(R.isRectAreaLight){const Z=t.get(R);Z.color.copy(D).multiplyScalar(z),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=Z,x++}else if(R.isPointLight){const Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity*L),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const G=R.shadow,j=r.get(R);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,i.pointShadow[d]=j,i.pointShadowMap[d]=ie,i.pointShadowMatrix[d]=R.shadow.matrix,y++}i.point[d]=Z,d++}else if(R.isHemisphereLight){const Z=t.get(R);Z.skyColor.copy(R.color).multiplyScalar(z*L),Z.groundColor.copy(R.groundColor).multiplyScalar(z*L),i.hemi[b]=Z,b++}}x>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==m||F.pointLength!==d||F.spotLength!==v||F.rectAreaLength!==x||F.hemiLength!==b||F.numDirectionalShadows!==S||F.numPointShadows!==y||F.numSpotShadows!==A||F.numSpotMaps!==P)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=x,i.point.length=d,i.hemi.length=b,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+P-_,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=_,F.directionalLength=m,F.pointLength=d,F.spotLength=v,F.rectAreaLength=x,F.hemiLength=b,F.numDirectionalShadows=S,F.numPointShadows=y,F.numSpotShadows=A,F.numSpotMaps=P,i.version=Ep++)}function c(u,f){let h=0,p=0,g=0,m=0,d=0;const v=f.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const S=u[x];if(S.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(v),h++}else if(S.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),s.identity(),a.copy(S.matrixWorld),a.premultiply(v),s.extractRotation(a),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),m++}else if(S.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),p++}else if(S.isHemisphereLight){const y=i.hemi[d];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(v),d++}}}return{setup:o,setupView:c,state:i}}function Po(l,e){const t=new Cp(l,e),r=[],i=[];function n(){r.length=0,i.length=0}function a(f){r.push(f)}function s(f){i.push(f)}function o(f){t.setup(r,f)}function c(f){t.setupView(r,f)}return{init:n,state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function Lp(l,e){let t=new WeakMap;function r(n,a=0){const s=t.get(n);let o;return s===void 0?(o=new Po(l,e),t.set(n,[o])):a>=s.length?(o=new Po(l,e),s.push(o)):o=s[a],o}function i(){t=new WeakMap}return{get:r,dispose:i}}class Tl extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class El extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rp(l,e,t){let r=new xl;const i=new Be,n=new Be,a=new st,s=new Tl({depthPacking:sl}),o=new El,c={},u=t.maxTextureSize,f={0:Rt,1:gn,2:Zi},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Dp,fragmentShader:Pp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Nt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o,this.render=function(S,y,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const P=l.getRenderTarget(),_=l.getActiveCubeFace(),L=l.getActiveMipmapLevel(),F=l.state;F.setBlending(mn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let K=0,O=S.length;K<O;K++){const R=S[K],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const z=D.getFrameExtents();if(i.multiply(z),n.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(n.x=Math.floor(u/z.x),i.x=n.x*z.x,D.mapSize.x=n.x),i.y>u&&(n.y=Math.floor(u/z.y),i.y=n.y*z.y,D.mapSize.y=n.y)),D.map===null){const ie=this.type!==Bi?{minFilter:xt,magFilter:xt}:{};D.map=new In(i.x,i.y,ie),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}l.setRenderTarget(D.map),l.clear();const Y=D.getViewportCount();for(let ie=0;ie<Y;ie++){const Z=D.getViewport(ie);a.set(n.x*Z.x,n.y*Z.y,n.x*Z.z,n.y*Z.w),F.viewport(a),D.updateMatrices(R,ie),r=D.getFrustum(),b(y,A,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===Bi&&v(D,A),D.needsUpdate=!1}d.needsUpdate=!1,l.setRenderTarget(P,_,L)};function v(S,y){const A=e.update(m);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new In(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,l.setRenderTarget(S.mapPass),l.clear(),l.renderBufferDirect(y,null,A,h,m,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,l.setRenderTarget(S.map),l.clear(),l.renderBufferDirect(y,null,A,p,m,null)}function x(S,y,A,P,_,L){let F=null;const K=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(K!==void 0)F=K;else if(F=A.isPointLight===!0?o:s,l.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const O=F.uuid,R=y.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let z=D[R];z===void 0&&(z=F.clone(),D[R]=z),F=z}return F.visible=y.visible,F.wireframe=y.wireframe,L===Bi?F.side=y.shadowSide!==null?y.shadowSide:y.side:F.side=y.shadowSide!==null?y.shadowSide:f[y.side],F.alphaMap=y.alphaMap,F.alphaTest=y.alphaTest,F.map=y.map,F.clipShadows=y.clipShadows,F.clippingPlanes=y.clippingPlanes,F.clipIntersection=y.clipIntersection,F.displacementMap=y.displacementMap,F.displacementScale=y.displacementScale,F.displacementBias=y.displacementBias,F.wireframeLinewidth=y.wireframeLinewidth,F.linewidth=y.linewidth,A.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(A.matrixWorld),F.nearDistance=P,F.farDistance=_),F}function b(S,y,A,P,_){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===Bi)&&(!S.frustumCulled||r.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const K=e.update(S),O=S.material;if(Array.isArray(O)){const R=K.groups;for(let D=0,z=R.length;D<z;D++){const Y=R[D],ie=O[Y.materialIndex];if(ie&&ie.visible){const Z=x(S,ie,P,A.near,A.far,_);l.renderBufferDirect(A,null,K,Z,S,Y)}}}else if(O.visible){const R=x(S,O,P,A.near,A.far,_);l.renderBufferDirect(A,null,K,R,S,null)}}const F=S.children;for(let K=0,O=F.length;K<O;K++)b(F[K],y,A,P,_)}}function Up(l,e,t){const r=t.isWebGL2;function i(){let I=!1;const ee=new st;let he=null;const we=new st(0,0,0,0);return{setMask:function(Le){he!==Le&&!I&&(l.colorMask(Le,Le,Le,Le),he=Le)},setLocked:function(Le){I=Le},setClear:function(Le,Ge,qe,Ye,Ze){Ze===!0&&(Le*=Ye,Ge*=Ye,qe*=Ye),ee.set(Le,Ge,qe,Ye),we.equals(ee)===!1&&(l.clearColor(Le,Ge,qe,Ye),we.copy(ee))},reset:function(){I=!1,he=null,we.set(-1,0,0,0)}}}function n(){let I=!1,ee=null,he=null,we=null;return{setTest:function(Le){Le?ne(2929):J(2929)},setMask:function(Le){ee!==Le&&!I&&(l.depthMask(Le),ee=Le)},setFunc:function(Le){if(he!==Le){switch(Le){case fc:l.depthFunc(512);break;case hc:l.depthFunc(519);break;case dc:l.depthFunc(513);break;case Ws:l.depthFunc(515);break;case pc:l.depthFunc(514);break;case mc:l.depthFunc(518);break;case gc:l.depthFunc(516);break;case _c:l.depthFunc(517);break;default:l.depthFunc(515)}he=Le}},setLocked:function(Le){I=Le},setClear:function(Le){we!==Le&&(l.clearDepth(Le),we=Le)},reset:function(){I=!1,ee=null,he=null,we=null}}}function a(){let I=!1,ee=null,he=null,we=null,Le=null,Ge=null,qe=null,Ye=null,Ze=null;return{setTest:function(Ke){I||(Ke?ne(2960):J(2960))},setMask:function(Ke){ee!==Ke&&!I&&(l.stencilMask(Ke),ee=Ke)},setFunc:function(Ke,je,Xe){(he!==Ke||we!==je||Le!==Xe)&&(l.stencilFunc(Ke,je,Xe),he=Ke,we=je,Le=Xe)},setOp:function(Ke,je,Xe){(Ge!==Ke||qe!==je||Ye!==Xe)&&(l.stencilOp(Ke,je,Xe),Ge=Ke,qe=je,Ye=Xe)},setLocked:function(Ke){I=Ke},setClear:function(Ke){Ze!==Ke&&(l.clearStencil(Ke),Ze=Ke)},reset:function(){I=!1,ee=null,he=null,we=null,Le=null,Ge=null,qe=null,Ye=null,Ze=null}}}const s=new i,o=new n,c=new a,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,v=!1,x=null,b=null,S=null,y=null,A=null,P=null,_=null,L=!1,F=null,K=null,O=null,R=null,D=null;const z=l.getParameter(35661);let Y=!1,ie=0;const Z=l.getParameter(7938);Z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=ie>=1):Z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=ie>=2);let G=null,j={};const T=l.getParameter(3088),U=l.getParameter(2978),V=new st().fromArray(T),X=new st().fromArray(U);function H(I,ee,he){const we=new Uint8Array(4),Le=l.createTexture();l.bindTexture(I,Le),l.texParameteri(I,10241,9728),l.texParameteri(I,10240,9728);for(let Ge=0;Ge<he;Ge++)l.texImage2D(ee+Ge,0,6408,1,1,0,6408,5121,we);return Le}const N={};N[3553]=H(3553,3553,1),N[34067]=H(34067,34069,6),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ne(2929),o.setFunc(Ws),Ce(!1),Fe(ba),ne(2884),Re(mn);function ne(I){h[I]!==!0&&(l.enable(I),h[I]=!0)}function J(I){h[I]!==!1&&(l.disable(I),h[I]=!1)}function le(I,ee){return p[I]!==ee?(l.bindFramebuffer(I,ee),p[I]=ee,r&&(I===36009&&(p[36160]=ee),I===36160&&(p[36009]=ee)),!0):!1}function ae(I,ee){let he=m,we=!1;if(I)if(he=g.get(ee),he===void 0&&(he=[],g.set(ee,he)),I.isWebGLMultipleRenderTargets){const Le=I.texture;if(he.length!==Le.length||he[0]!==36064){for(let Ge=0,qe=Le.length;Ge<qe;Ge++)he[Ge]=36064+Ge;he.length=Le.length,we=!0}}else he[0]!==36064&&(he[0]=36064,we=!0);else he[0]!==1029&&(he[0]=1029,we=!0);we&&(t.isWebGL2?l.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function ge(I){return d!==I?(l.useProgram(I),d=I,!0):!1}const re={[ci]:32774,[ec]:32778,[tc]:32779};if(r)re[Ta]=32775,re[Ea]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(re[Ta]=I.MIN_EXT,re[Ea]=I.MAX_EXT)}const ye={[nc]:0,[ic]:1,[rc]:768,[el]:770,[uc]:776,[lc]:774,[ac]:772,[sc]:769,[tl]:771,[cc]:775,[oc]:773};function Re(I,ee,he,we,Le,Ge,qe,Ye){if(I===mn){v===!0&&(J(3042),v=!1);return}if(v===!1&&(ne(3042),v=!0),I!==$l){if(I!==x||Ye!==L){if((b!==ci||A!==ci)&&(l.blendEquation(32774),b=ci,A=ci),Ye)switch(I){case hi:l.blendFuncSeparate(1,771,1,771);break;case Vs:l.blendFunc(1,1);break;case Sa:l.blendFuncSeparate(0,769,0,1);break;case wa:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hi:l.blendFuncSeparate(770,771,1,771);break;case Vs:l.blendFunc(770,1);break;case Sa:l.blendFuncSeparate(0,769,0,1);break;case wa:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,y=null,P=null,_=null,x=I,L=Ye}return}Le=Le||ee,Ge=Ge||he,qe=qe||we,(ee!==b||Le!==A)&&(l.blendEquationSeparate(re[ee],re[Le]),b=ee,A=Le),(he!==S||we!==y||Ge!==P||qe!==_)&&(l.blendFuncSeparate(ye[he],ye[we],ye[Ge],ye[qe]),S=he,y=we,P=Ge,_=qe),x=I,L=!1}function Ae(I,ee){I.side===Zi?J(2884):ne(2884);let he=I.side===Rt;ee&&(he=!he),Ce(he),I.blending===hi&&I.transparent===!1?Re(mn):Re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const we=I.stencilWrite;c.setTest(we),we&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(32926):J(32926)}function Ce(I){F!==I&&(I?l.frontFace(2304):l.frontFace(2305),F=I)}function Fe(I){I!==Kl?(ne(2884),I!==K&&(I===ba?l.cullFace(1029):I===Jl?l.cullFace(1028):l.cullFace(1032))):J(2884),K=I}function pe(I){I!==O&&(Y&&l.lineWidth(I),O=I)}function Me(I,ee,he){I?(ne(32823),(R!==ee||D!==he)&&(l.polygonOffset(ee,he),R=ee,D=he)):J(32823)}function Te(I){I?ne(3089):J(3089)}function oe(I){I===void 0&&(I=33984+z-1),G!==I&&(l.activeTexture(I),G=I)}function w(I,ee,he){he===void 0&&(G===null?he=33984+z-1:he=G);let we=j[he];we===void 0&&(we={type:void 0,texture:void 0},j[he]=we),(we.type!==I||we.texture!==ee)&&(G!==he&&(l.activeTexture(he),G=he),l.bindTexture(I,ee||N[I]),we.type=I,we.texture=ee)}function M(){const I=j[G];I!==void 0&&I.type!==void 0&&(l.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function B(){try{l.compressedTexImage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{l.compressedTexImage3D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{l.texSubImage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{l.texSubImage3D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{l.texStorage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{l.texStorage3D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{l.texImage2D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{l.texImage3D.apply(l,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){V.equals(I)===!1&&(l.scissor(I.x,I.y,I.z,I.w),V.copy(I))}function ue(I){X.equals(I)===!1&&(l.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Ee(I,ee){let he=f.get(ee);he===void 0&&(he=new WeakMap,f.set(ee,he));let we=he.get(I);we===void 0&&(we=l.getUniformBlockIndex(ee,I.name),he.set(I,we))}function Pe(I,ee){const we=f.get(ee).get(I);u.get(ee)!==we&&(l.uniformBlockBinding(ee,we,I.__bindingPointIndex),u.set(ee,we))}function Ie(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),r===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),h={},G=null,j={},p={},g=new WeakMap,m=[],d=null,v=!1,x=null,b=null,S=null,y=null,A=null,P=null,_=null,L=!1,F=null,K=null,O=null,R=null,D=null,V.set(0,0,l.canvas.width,l.canvas.height),X.set(0,0,l.canvas.width,l.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:ne,disable:J,bindFramebuffer:le,drawBuffers:ae,useProgram:ge,setBlending:Re,setMaterial:Ae,setFlipSided:Ce,setCullFace:Fe,setLineWidth:pe,setPolygonOffset:Me,setScissorTest:Te,activeTexture:oe,bindTexture:w,unbindTexture:M,compressedTexImage2D:B,compressedTexImage3D:$,texImage2D:ce,texImage3D:_e,updateUBOMapping:Ee,uniformBlockBinding:Pe,texStorage2D:k,texStorage3D:xe,texSubImage2D:fe,texSubImage3D:de,compressedTexSubImage2D:ve,compressedTexSubImage3D:C,scissor:me,viewport:ue,reset:Ie}}function Ip(l,e,t,r,i,n,a){const s=i.isWebGL2,o=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,M){return v?new OffscreenCanvas(w,M):ji("canvas")}function b(w,M,B,$){let fe=1;if((w.width>$||w.height>$)&&(fe=$/Math.max(w.width,w.height)),fe<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const de=M?Zs:Math.floor,ve=de(fe*w.width),C=de(fe*w.height);m===void 0&&(m=x(ve,C));const k=B?x(ve,C):m;return k.width=ve,k.height=C,k.getContext("2d").drawImage(w,0,0,ve,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ve+"x"+C+")."),k}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return Qa(w.width)&&Qa(w.height)}function y(w){return s?!1:w.wrapS!==Xt||w.wrapT!==Xt||w.minFilter!==xt&&w.minFilter!==St}function A(w,M){return w.generateMipmaps&&M&&w.minFilter!==xt&&w.minFilter!==St}function P(w){l.generateMipmap(w)}function _(w,M,B,$,fe=!1){if(s===!1)return M;if(w!==null){if(l[w]!==void 0)return l[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de=M;return M===6403&&(B===5126&&(de=33326),B===5131&&(de=33325),B===5121&&(de=33321)),M===33319&&(B===5126&&(de=33328),B===5131&&(de=33327),B===5121&&(de=33323)),M===6408&&(B===5126&&(de=34836),B===5131&&(de=34842),B===5121&&(de=$===$e&&fe===!1?35907:32856),B===32819&&(de=32854),B===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function L(w,M,B){return A(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==xt&&w.minFilter!==St?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function F(w){return w===xt||w===Aa||w===ss?9728:9729}function K(w){const M=w.target;M.removeEventListener("dispose",K),R(M),M.isVideoTexture&&g.delete(M)}function O(w){const M=w.target;M.removeEventListener("dispose",O),z(M)}function R(w){const M=r.get(w);if(M.__webglInit===void 0)return;const B=w.source,$=d.get(B);if($){const fe=$[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&D(w),Object.keys($).length===0&&d.delete(B)}r.remove(w)}function D(w){const M=r.get(w);l.deleteTexture(M.__webglTexture);const B=w.source,$=d.get(B);delete $[M.__cacheKey],a.memory.textures--}function z(w){const M=w.texture,B=r.get(w),$=r.get(M);if($.__webglTexture!==void 0&&(l.deleteTexture($.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)l.deleteFramebuffer(B.__webglFramebuffer[fe]),B.__webglDepthbuffer&&l.deleteRenderbuffer(B.__webglDepthbuffer[fe]);else{if(l.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&l.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&l.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let fe=0;fe<B.__webglColorRenderbuffer.length;fe++)B.__webglColorRenderbuffer[fe]&&l.deleteRenderbuffer(B.__webglColorRenderbuffer[fe]);B.__webglDepthRenderbuffer&&l.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let fe=0,de=M.length;fe<de;fe++){const ve=r.get(M[fe]);ve.__webglTexture&&(l.deleteTexture(ve.__webglTexture),a.memory.textures--),r.remove(M[fe])}r.remove(M),r.remove(w)}let Y=0;function ie(){Y=0}function Z(){const w=Y;return w>=o&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+o),Y+=1,w}function G(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function j(w,M){const B=r.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,w,M);return}}t.bindTexture(3553,B.__webglTexture,33984+M)}function T(w,M){const B=r.get(w);if(w.version>0&&B.__version!==w.version){J(B,w,M);return}t.bindTexture(35866,B.__webglTexture,33984+M)}function U(w,M){const B=r.get(w);if(w.version>0&&B.__version!==w.version){J(B,w,M);return}t.bindTexture(32879,B.__webglTexture,33984+M)}function V(w,M){const B=r.get(w);if(w.version>0&&B.__version!==w.version){le(B,w,M);return}t.bindTexture(34067,B.__webglTexture,33984+M)}const X={[qs]:10497,[Xt]:33071,[js]:33648},H={[xt]:9728,[Aa]:9984,[ss]:9986,[St]:9729,[Tc]:9985,[Hi]:9987};function N(w,M,B){if(B?(l.texParameteri(w,10242,X[M.wrapS]),l.texParameteri(w,10243,X[M.wrapT]),(w===32879||w===35866)&&l.texParameteri(w,32882,X[M.wrapR]),l.texParameteri(w,10240,H[M.magFilter]),l.texParameteri(w,10241,H[M.minFilter])):(l.texParameteri(w,10242,33071),l.texParameteri(w,10243,33071),(w===32879||w===35866)&&l.texParameteri(w,32882,33071),(M.wrapS!==Xt||M.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(w,10240,F(M.magFilter)),l.texParameteri(w,10241,F(M.minFilter)),M.minFilter!==xt&&M.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===xt||M.minFilter!==ss&&M.minFilter!==Hi||M.type===Cn&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===Xi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||r.get(M).__currentAnisotropy)&&(l.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy)}}function ne(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",K));const $=M.source;let fe=d.get($);fe===void 0&&(fe={},d.set($,fe));const de=G(M);if(de!==w.__cacheKey){fe[de]===void 0&&(fe[de]={texture:l.createTexture(),usedTimes:0},a.memory.textures++,B=!0),fe[de].usedTimes++;const ve=fe[w.__cacheKey];ve!==void 0&&(fe[w.__cacheKey].usedTimes--,ve.usedTimes===0&&D(M)),w.__cacheKey=de,w.__webglTexture=fe[de].texture}return B}function J(w,M,B){let $=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=35866),M.isData3DTexture&&($=32879);const fe=ne(w,M),de=M.source;t.bindTexture($,w.__webglTexture,33984+B);const ve=r.get(de);if(de.version!==ve.__version||fe===!0){t.activeTexture(33984+B),l.pixelStorei(37440,M.flipY),l.pixelStorei(37441,M.premultiplyAlpha),l.pixelStorei(3317,M.unpackAlignment),l.pixelStorei(37443,0);const C=y(M)&&S(M.image)===!1;let k=b(M.image,C,!1,u);k=oe(M,k);const xe=S(k)||s,ce=n.convert(M.format,M.encoding);let _e=n.convert(M.type),me=_(M.internalFormat,ce,_e,M.encoding,M.isVideoTexture);N($,M,xe);let ue;const Ee=M.mipmaps,Pe=s&&M.isVideoTexture!==!0,Ie=ve.__version===void 0||fe===!0,I=L(M,k,xe);if(M.isDepthTexture)me=6402,s?M.type===Cn?me=36012:M.type===An?me=33190:M.type===di?me=35056:me=33189:M.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ln&&me===6402&&M.type!==rl&&M.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=An,_e=n.convert(M.type)),M.format===gi&&me===6402&&(me=34041,M.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=di,_e=n.convert(M.type))),Ie&&(Pe?t.texStorage2D(3553,1,me,k.width,k.height):t.texImage2D(3553,0,me,k.width,k.height,0,ce,_e,null));else if(M.isDataTexture)if(Ee.length>0&&xe){Pe&&Ie&&t.texStorage2D(3553,I,me,Ee[0].width,Ee[0].height);for(let ee=0,he=Ee.length;ee<he;ee++)ue=Ee[ee],Pe?t.texSubImage2D(3553,ee,0,0,ue.width,ue.height,ce,_e,ue.data):t.texImage2D(3553,ee,me,ue.width,ue.height,0,ce,_e,ue.data);M.generateMipmaps=!1}else Pe?(Ie&&t.texStorage2D(3553,I,me,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,ce,_e,k.data)):t.texImage2D(3553,0,me,k.width,k.height,0,ce,_e,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&Ie&&t.texStorage3D(35866,I,me,Ee[0].width,Ee[0].height,k.depth);for(let ee=0,he=Ee.length;ee<he;ee++)ue=Ee[ee],M.format!==qt?ce!==null?Pe?t.compressedTexSubImage3D(35866,ee,0,0,0,ue.width,ue.height,k.depth,ce,ue.data,0,0):t.compressedTexImage3D(35866,ee,me,ue.width,ue.height,k.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,ee,0,0,0,ue.width,ue.height,k.depth,ce,_e,ue.data):t.texImage3D(35866,ee,me,ue.width,ue.height,k.depth,0,ce,_e,ue.data)}else{Pe&&Ie&&t.texStorage2D(3553,I,me,Ee[0].width,Ee[0].height);for(let ee=0,he=Ee.length;ee<he;ee++)ue=Ee[ee],M.format!==qt?ce!==null?Pe?t.compressedTexSubImage2D(3553,ee,0,0,ue.width,ue.height,ce,ue.data):t.compressedTexImage2D(3553,ee,me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,ee,0,0,ue.width,ue.height,ce,_e,ue.data):t.texImage2D(3553,ee,me,ue.width,ue.height,0,ce,_e,ue.data)}else if(M.isDataArrayTexture)Pe?(Ie&&t.texStorage3D(35866,I,me,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,ce,_e,k.data)):t.texImage3D(35866,0,me,k.width,k.height,k.depth,0,ce,_e,k.data);else if(M.isData3DTexture)Pe?(Ie&&t.texStorage3D(32879,I,me,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,ce,_e,k.data)):t.texImage3D(32879,0,me,k.width,k.height,k.depth,0,ce,_e,k.data);else if(M.isFramebufferTexture){if(Ie)if(Pe)t.texStorage2D(3553,I,me,k.width,k.height);else{let ee=k.width,he=k.height;for(let we=0;we<I;we++)t.texImage2D(3553,we,me,ee,he,0,ce,_e,null),ee>>=1,he>>=1}}else if(Ee.length>0&&xe){Pe&&Ie&&t.texStorage2D(3553,I,me,Ee[0].width,Ee[0].height);for(let ee=0,he=Ee.length;ee<he;ee++)ue=Ee[ee],Pe?t.texSubImage2D(3553,ee,0,0,ce,_e,ue):t.texImage2D(3553,ee,me,ce,_e,ue);M.generateMipmaps=!1}else Pe?(Ie&&t.texStorage2D(3553,I,me,k.width,k.height),t.texSubImage2D(3553,0,0,0,ce,_e,k)):t.texImage2D(3553,0,me,ce,_e,k);A(M,xe)&&P($),ve.__version=de.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function le(w,M,B){if(M.image.length!==6)return;const $=ne(w,M),fe=M.source;t.bindTexture(34067,w.__webglTexture,33984+B);const de=r.get(fe);if(fe.version!==de.__version||$===!0){t.activeTexture(33984+B),l.pixelStorei(37440,M.flipY),l.pixelStorei(37441,M.premultiplyAlpha),l.pixelStorei(3317,M.unpackAlignment),l.pixelStorei(37443,0);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,k=[];for(let ee=0;ee<6;ee++)!ve&&!C?k[ee]=b(M.image[ee],!1,!0,c):k[ee]=C?M.image[ee].image:M.image[ee],k[ee]=oe(M,k[ee]);const xe=k[0],ce=S(xe)||s,_e=n.convert(M.format,M.encoding),me=n.convert(M.type),ue=_(M.internalFormat,_e,me,M.encoding),Ee=s&&M.isVideoTexture!==!0,Pe=de.__version===void 0||$===!0;let Ie=L(M,xe,ce);N(34067,M,ce);let I;if(ve){Ee&&Pe&&t.texStorage2D(34067,Ie,ue,xe.width,xe.height);for(let ee=0;ee<6;ee++){I=k[ee].mipmaps;for(let he=0;he<I.length;he++){const we=I[he];M.format!==qt?_e!==null?Ee?t.compressedTexSubImage2D(34069+ee,he,0,0,we.width,we.height,_e,we.data):t.compressedTexImage2D(34069+ee,he,ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(34069+ee,he,0,0,we.width,we.height,_e,me,we.data):t.texImage2D(34069+ee,he,ue,we.width,we.height,0,_e,me,we.data)}}}else{I=M.mipmaps,Ee&&Pe&&(I.length>0&&Ie++,t.texStorage2D(34067,Ie,ue,k[0].width,k[0].height));for(let ee=0;ee<6;ee++)if(C){Ee?t.texSubImage2D(34069+ee,0,0,0,k[ee].width,k[ee].height,_e,me,k[ee].data):t.texImage2D(34069+ee,0,ue,k[ee].width,k[ee].height,0,_e,me,k[ee].data);for(let he=0;he<I.length;he++){const Le=I[he].image[ee].image;Ee?t.texSubImage2D(34069+ee,he+1,0,0,Le.width,Le.height,_e,me,Le.data):t.texImage2D(34069+ee,he+1,ue,Le.width,Le.height,0,_e,me,Le.data)}}else{Ee?t.texSubImage2D(34069+ee,0,0,0,_e,me,k[ee]):t.texImage2D(34069+ee,0,ue,_e,me,k[ee]);for(let he=0;he<I.length;he++){const we=I[he];Ee?t.texSubImage2D(34069+ee,he+1,0,0,_e,me,we.image[ee]):t.texImage2D(34069+ee,he+1,ue,_e,me,we.image[ee])}}}A(M,ce)&&P(34067),de.__version=fe.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ae(w,M,B,$,fe){const de=n.convert(B.format,B.encoding),ve=n.convert(B.type),C=_(B.internalFormat,de,ve,B.encoding);r.get(M).__hasExternalTextures||(fe===32879||fe===35866?t.texImage3D(fe,0,C,M.width,M.height,M.depth,0,de,ve,null):t.texImage2D(fe,0,C,M.width,M.height,0,de,ve,null)),t.bindFramebuffer(36160,w),Me(M)?h.framebufferTexture2DMultisampleEXT(36160,$,fe,r.get(B).__webglTexture,0,pe(M)):(fe===3553||fe>=34069&&fe<=34074)&&l.framebufferTexture2D(36160,$,fe,r.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function ge(w,M,B){if(l.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let $=33189;if(B||Me(M)){const fe=M.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Cn?$=36012:fe.type===An&&($=33190));const de=pe(M);Me(M)?h.renderbufferStorageMultisampleEXT(36161,de,$,M.width,M.height):l.renderbufferStorageMultisample(36161,de,$,M.width,M.height)}else l.renderbufferStorage(36161,$,M.width,M.height);l.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const $=pe(M);B&&Me(M)===!1?l.renderbufferStorageMultisample(36161,$,35056,M.width,M.height):Me(M)?h.renderbufferStorageMultisampleEXT(36161,$,35056,M.width,M.height):l.renderbufferStorage(36161,34041,M.width,M.height),l.framebufferRenderbuffer(36160,33306,36161,w)}else{const $=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let fe=0;fe<$.length;fe++){const de=$[fe],ve=n.convert(de.format,de.encoding),C=n.convert(de.type),k=_(de.internalFormat,ve,C,de.encoding),xe=pe(M);B&&Me(M)===!1?l.renderbufferStorageMultisample(36161,xe,k,M.width,M.height):Me(M)?h.renderbufferStorageMultisampleEXT(36161,xe,k,M.width,M.height):l.renderbufferStorage(36161,k,M.width,M.height)}}l.bindRenderbuffer(36161,null)}function re(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const $=r.get(M.depthTexture).__webglTexture,fe=pe(M);if(M.depthTexture.format===Ln)Me(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,fe):l.framebufferTexture2D(36160,36096,3553,$,0);else if(M.depthTexture.format===gi)Me(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,fe):l.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function ye(w){const M=r.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");re(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=l.createRenderbuffer(),ge(M.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=l.createRenderbuffer(),ge(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Re(w,M,B){const $=r.get(w);M!==void 0&&ae($.__webglFramebuffer,w,w.texture,36064,3553),B!==void 0&&ye(w)}function Ae(w){const M=w.texture,B=r.get(w),$=r.get(M);w.addEventListener("dispose",O),w.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=l.createTexture()),$.__version=M.version,a.memory.textures++);const fe=w.isWebGLCubeRenderTarget===!0,de=w.isWebGLMultipleRenderTargets===!0,ve=S(w)||s;if(fe){B.__webglFramebuffer=[];for(let C=0;C<6;C++)B.__webglFramebuffer[C]=l.createFramebuffer()}else{if(B.__webglFramebuffer=l.createFramebuffer(),de)if(i.drawBuffers){const C=w.texture;for(let k=0,xe=C.length;k<xe;k++){const ce=r.get(C[k]);ce.__webglTexture===void 0&&(ce.__webglTexture=l.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&w.samples>0&&Me(w)===!1){const C=de?M:[M];B.__webglMultisampledFramebuffer=l.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let k=0;k<C.length;k++){const xe=C[k];B.__webglColorRenderbuffer[k]=l.createRenderbuffer(),l.bindRenderbuffer(36161,B.__webglColorRenderbuffer[k]);const ce=n.convert(xe.format,xe.encoding),_e=n.convert(xe.type),me=_(xe.internalFormat,ce,_e,xe.encoding,w.isXRRenderTarget===!0),ue=pe(w);l.renderbufferStorageMultisample(36161,ue,me,w.width,w.height),l.framebufferRenderbuffer(36160,36064+k,36161,B.__webglColorRenderbuffer[k])}l.bindRenderbuffer(36161,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=l.createRenderbuffer(),ge(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(fe){t.bindTexture(34067,$.__webglTexture),N(34067,M,ve);for(let C=0;C<6;C++)ae(B.__webglFramebuffer[C],w,M,36064,34069+C);A(M,ve)&&P(34067),t.unbindTexture()}else if(de){const C=w.texture;for(let k=0,xe=C.length;k<xe;k++){const ce=C[k],_e=r.get(ce);t.bindTexture(3553,_e.__webglTexture),N(3553,ce,ve),ae(B.__webglFramebuffer,w,ce,36064+k,3553),A(ce,ve)&&P(3553)}t.unbindTexture()}else{let C=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(s?C=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,$.__webglTexture),N(C,M,ve),ae(B.__webglFramebuffer,w,M,36064,C),A(M,ve)&&P(C),t.unbindTexture()}w.depthBuffer&&ye(w)}function Ce(w){const M=S(w)||s,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0,fe=B.length;$<fe;$++){const de=B[$];if(A(de,M)){const ve=w.isWebGLCubeRenderTarget?34067:3553,C=r.get(de).__webglTexture;t.bindTexture(ve,C),P(ve),t.unbindTexture()}}}function Fe(w){if(s&&w.samples>0&&Me(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,$=w.height;let fe=16384;const de=[],ve=w.stencilBuffer?33306:36096,C=r.get(w),k=w.isWebGLMultipleRenderTargets===!0;if(k)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),l.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){de.push(36064+xe),w.depthBuffer&&de.push(ve);const ce=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ce===!1&&(w.depthBuffer&&(fe|=256),w.stencilBuffer&&(fe|=1024)),k&&l.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[xe]),ce===!0&&(l.invalidateFramebuffer(36008,[ve]),l.invalidateFramebuffer(36009,[ve])),k){const _e=r.get(M[xe]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,_e,0)}l.blitFramebuffer(0,0,B,$,0,0,B,$,fe,9728),p&&l.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+xe,36161,C.__webglColorRenderbuffer[xe]);const ce=r.get(M[xe]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),l.framebufferTexture2D(36009,36064+xe,3553,ce,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function pe(w){return Math.min(f,w.samples)}function Me(w){const M=r.get(w);return s&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(w){const M=a.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function oe(w,M){const B=w.encoding,$=w.format,fe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ys||B!==Un&&(B===$e?s===!1?e.has("EXT_sRGB")===!0&&$===qt?(w.format=Ys,w.minFilter=St,w.generateMipmaps=!1):M=ll.sRGBToLinear(M):($!==qt||fe!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=Z,this.resetTextureUnits=ie,this.setTexture2D=j,this.setTexture2DArray=T,this.setTexture3D=U,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Me}function Fp(l,e,t){const r=t.isWebGL2;function i(n,a=null){let s;if(n===Rn)return 5121;if(n===Lc)return 32819;if(n===Dc)return 32820;if(n===Ec)return 5120;if(n===Ac)return 5122;if(n===rl)return 5123;if(n===Cc)return 5124;if(n===An)return 5125;if(n===Cn)return 5126;if(n===Xi)return r?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===Pc)return 6406;if(n===qt)return 6408;if(n===Uc)return 6409;if(n===Ic)return 6410;if(n===Ln)return 6402;if(n===gi)return 34041;if(n===Rc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===Ys)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===Fc)return 6403;if(n===Oc)return 36244;if(n===Nc)return 33319;if(n===kc)return 33320;if(n===zc)return 36249;if(n===as||n===os||n===ls||n===cs)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===as)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===as)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===La||n===Da||n===Pa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Ra||n===Ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ra)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Fa||n===Oa||n===Na||n===ka||n===za||n===Ba||n===Ga||n===Va||n===Wa||n===Ha||n===Xa||n===qa||n===ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ia)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ya)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return n===di?r?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):l[n]!==void 0?l[n]:null}return{convert:i}}class Op extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Np={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,n=null,a=null;const s=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,r),v=this._getHandJoint(c,m);d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&n!==null&&(i=n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Rr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class kp extends yt{constructor(e,t,r,i,n,a,s,o,c,u){if(u=u!==void 0?u:Ln,u!==Ln&&u!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ln&&(r=An),r===void 0&&u===gi&&(r=di),super(null,i,n,a,s,o,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:xt,this.minFilter=o!==void 0?o:xt,this.flipY=!1,this.generateMipmaps=!1}}class zp extends Nn{constructor(e,t){super();const r=this;let i=null,n=1,a=null,s="local-floor",o=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const v=[],x=[],b=new Set,S=new Map,y=new Ot;y.layers.enable(1),y.viewport=new st;const A=new Ot;A.layers.enable(2),A.viewport=new st;const P=[y,A],_=new Op;_.layers.enable(1),_.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let U=v[T];return U===void 0&&(U=new Os,v[T]=U),U.getTargetRaySpace()},this.getControllerGrip=function(T){let U=v[T];return U===void 0&&(U=new Os,v[T]=U),U.getGripSpace()},this.getHand=function(T){let U=v[T];return U===void 0&&(U=new Os,v[T]=U),U.getHandSpace()};function K(T){const U=x.indexOf(T.inputSource);if(U===-1)return;const V=v[U];V!==void 0&&V.dispatchEvent({type:T.type,data:T.inputSource})}function O(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",R);for(let T=0;T<v.length;T++){const U=x[T];U!==null&&(x[T]=null,v[T].disconnect(U))}L=null,F=null,e.setRenderTarget(m),h=null,f=null,u=null,i=null,d=null,j.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){n=T,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){s=T,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(T){o=T},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(T){if(i=T,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",O),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:h}),d=new In(h.framebufferWidth,h.framebufferHeight,{format:qt,type:Rn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,V=null,X=null;g.depth&&(X=g.stencil?35056:33190,U=g.stencil?gi:Ln,V=g.stencil?di:An);const H={colorFormat:32856,depthFormat:X,scaleFactor:n};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(H),i.updateRenderState({layers:[f]}),d=new In(f.textureWidth,f.textureHeight,{format:qt,type:Rn,depthTexture:new kp(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const N=e.properties.get(d);N.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),o=null,a=await i.requestReferenceSpace(s),j.setContext(i),j.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function R(T){for(let U=0;U<T.removed.length;U++){const V=T.removed[U],X=x.indexOf(V);X>=0&&(x[X]=null,v[X].disconnect(V))}for(let U=0;U<T.added.length;U++){const V=T.added[U];let X=x.indexOf(V);if(X===-1){for(let N=0;N<v.length;N++)if(N>=x.length){x.push(V),X=N;break}else if(x[N]===null){x[N]=V,X=N;break}if(X===-1)break}const H=v[X];H&&H.connect(V)}}const D=new Q,z=new Q;function Y(T,U,V){D.setFromMatrixPosition(U.matrixWorld),z.setFromMatrixPosition(V.matrixWorld);const X=D.distanceTo(z),H=U.projectionMatrix.elements,N=V.projectionMatrix.elements,ne=H[14]/(H[10]-1),J=H[14]/(H[10]+1),le=(H[9]+1)/H[5],ae=(H[9]-1)/H[5],ge=(H[8]-1)/H[0],re=(N[8]+1)/N[0],ye=ne*ge,Re=ne*re,Ae=X/(-ge+re),Ce=Ae*-ge;U.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Ce),T.translateZ(Ae),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const Fe=ne+Ae,pe=J+Ae,Me=ye-Ce,Te=Re+(X-Ce),oe=le*J/pe*Fe,w=ae*J/pe*Fe;T.projectionMatrix.makePerspective(Me,Te,oe,w,Fe,pe)}function ie(T,U){U===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(U.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(i===null)return;_.near=A.near=y.near=T.near,_.far=A.far=y.far=T.far,(L!==_.near||F!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),L=_.near,F=_.far);const U=T.parent,V=_.cameras;ie(_,U);for(let H=0;H<V.length;H++)ie(V[H],U);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),T.matrix.copy(_.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale);const X=T.children;for(let H=0,N=X.length;H<N;H++)X[H].updateMatrixWorld(!0);V.length===2?Y(_,y,A):_.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(T){f!==null&&(f.fixedFoveation=T),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=T)},this.getPlanes=function(){return b};let Z=null;function G(T,U){if(c=U.getViewerPose(o||a),p=U,c!==null){const V=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let X=!1;V.length!==_.cameras.length&&(_.cameras.length=0,X=!0);for(let H=0;H<V.length;H++){const N=V[H];let ne=null;if(h!==null)ne=h.getViewport(N);else{const le=u.getViewSubImage(f,N);ne=le.viewport,H===0&&(e.setRenderTargetTextures(d,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(d))}let J=P[H];J===void 0&&(J=new Ot,J.layers.enable(H),J.viewport=new st,P[H]=J),J.matrix.fromArray(N.transform.matrix),J.projectionMatrix.fromArray(N.projectionMatrix),J.viewport.set(ne.x,ne.y,ne.width,ne.height),H===0&&_.matrix.copy(J.matrix),X===!0&&_.cameras.push(J)}}for(let V=0;V<v.length;V++){const X=x[V],H=v[V];X!==null&&H!==void 0&&H.update(X,U,o||a)}if(Z&&Z(T,U),U.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:U.detectedPlanes});let V=null;for(const X of b)U.detectedPlanes.has(X)||(V===null&&(V=[]),V.push(X));if(V!==null)for(const X of V)b.delete(X),S.delete(X),r.dispatchEvent({type:"planeremoved",data:X});for(const X of U.detectedPlanes)if(!b.has(X))b.add(X),S.set(X,U.lastChangedTime),r.dispatchEvent({type:"planeadded",data:X});else{const H=S.get(X);X.lastChangedTime>H&&(S.set(X,X.lastChangedTime),r.dispatchEvent({type:"planechanged",data:X}))}}p=null}const j=new yl;j.setAnimationLoop(G),this.setAnimationLoop=function(T){Z=T},this.dispose=function(){}}}function Bp(l,e){function t(m,d){d.color.getRGB(m.fogColor.value,ml(l)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),u(m,d)):d.isMeshPhongMaterial?(i(m,d),c(m,d)):d.isMeshStandardMaterial?(i(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,b)):d.isMeshMatcapMaterial?(i(m,d),p(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),g(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(n(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?s(m,d,v,x):d.isSpriteMaterial?o(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Rt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Rt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const S=l.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function n(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function s(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Rt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:r}}function Gp(l,e,t,r){let i={},n={},a=[];const s=t.isWebGL2?l.getParameter(35375):0;function o(x,b){const S=b.program;r.uniformBlockBinding(x,S)}function c(x,b){let S=i[x.id];S===void 0&&(g(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",d));const y=b.program;r.updateUBOMapping(x,y);const A=e.render.frame;n[x.id]!==A&&(h(x),n[x.id]=A)}function u(x){const b=f();x.__bindingPointIndex=b;const S=l.createBuffer(),y=x.__size,A=x.usage;return l.bindBuffer(35345,S),l.bufferData(35345,y,A),l.bindBuffer(35345,null),l.bindBufferBase(35345,b,S),S}function f(){for(let x=0;x<s;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=i[x.id],S=x.uniforms,y=x.__cache;l.bindBuffer(35345,b);for(let A=0,P=S.length;A<P;A++){const _=S[A];if(p(_,A,y)===!0){const L=_.__offset,F=Array.isArray(_.value)?_.value:[_.value];let K=0;for(let O=0;O<F.length;O++){const R=F[O],D=m(R);typeof R=="number"?(_.__data[0]=R,l.bufferSubData(35345,L+K,_.__data)):R.isMatrix3?(_.__data[0]=R.elements[0],_.__data[1]=R.elements[1],_.__data[2]=R.elements[2],_.__data[3]=R.elements[0],_.__data[4]=R.elements[3],_.__data[5]=R.elements[4],_.__data[6]=R.elements[5],_.__data[7]=R.elements[0],_.__data[8]=R.elements[6],_.__data[9]=R.elements[7],_.__data[10]=R.elements[8],_.__data[11]=R.elements[0]):(R.toArray(_.__data,K),K+=D.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(35345,L,_.__data)}}l.bindBuffer(35345,null)}function p(x,b,S){const y=x.value;if(S[b]===void 0){if(typeof y=="number")S[b]=y;else{const A=Array.isArray(y)?y:[y],P=[];for(let _=0;_<A.length;_++)P.push(A[_].clone());S[b]=P}return!0}else if(typeof y=="number"){if(S[b]!==y)return S[b]=y,!0}else{const A=Array.isArray(S[b])?S[b]:[S[b]],P=Array.isArray(y)?y:[y];for(let _=0;_<A.length;_++){const L=A[_];if(L.equals(P[_])===!1)return L.copy(P[_]),!0}}return!1}function g(x){const b=x.uniforms;let S=0;const y=16;let A=0;for(let P=0,_=b.length;P<_;P++){const L=b[P],F={boundary:0,storage:0},K=Array.isArray(L.value)?L.value:[L.value];for(let O=0,R=K.length;O<R;O++){const D=K[O],z=m(D);F.boundary+=z.boundary,F.storage+=z.storage}if(L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,P>0){A=S%y;const O=y-A;A!==0&&O-F.boundary<0&&(S+=y-A,L.__offset=S)}S+=F.storage}return A=S%y,A>0&&(S+=y-A),x.__size=S,x.__cache={},this}function m(x){const b={boundary:0,storage:0};return typeof x=="number"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function d(x){const b=x.target;b.removeEventListener("dispose",d);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),l.deleteBuffer(i[b.id]),delete i[b.id],delete n[b.id]}function v(){for(const x in i)l.deleteBuffer(i[x]);a=[],i={},n={}}return{bind:o,update:c,dispose:v}}function Vp(){const l=ji("canvas");return l.style.display="block",l}function Al(l={}){this.isWebGLRenderer=!0;const e=l.canvas!==void 0?l.canvas:Vp(),t=l.context!==void 0?l.context:null,r=l.depth!==void 0?l.depth:!0,i=l.stencil!==void 0?l.stencil:!0,n=l.antialias!==void 0?l.antialias:!1,a=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,s=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,o=l.powerPreference!==void 0?l.powerPreference:"default",c=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=l.alpha!==void 0?l.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Un,this.physicallyCorrectLights=!1,this.toneMapping=on,this.toneMappingExposure=1;const m=this;let d=!1,v=0,x=0,b=null,S=-1,y=null;const A=new st,P=new st;let _=null,L=e.width,F=e.height,K=1,O=null,R=null;const D=new st(0,0,L,F),z=new st(0,0,L,F);let Y=!1;const ie=new xl;let Z=!1,G=!1,j=null;const T=new at,U=new Be,V=new Q,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function H(){return b===null?K:1}let N=t;function ne(E,q){for(let te=0;te<E.length;te++){const W=E[te],se=e.getContext(W,q);if(se!==null)return se}return null}try{const E={alpha:!0,depth:r,stencil:i,antialias:n,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:o,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),N===null){const q=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&q.shift(),N=ne(q,E),N===null)throw ne(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,le,ae,ge,re,ye,Re,Ae,Ce,Fe,pe,Me,Te,oe,w,M,B,$,fe,de,ve,C,k,xe;function ce(){J=new td(N),le=new Yh(N,J,l),J.init(le),C=new Fp(N,J,le),ae=new Up(N,J,le),ge=new rd,re=new Mp,ye=new Ip(N,J,ae,re,le,C,ge),Re=new Kh(m),Ae=new ed(m),Ce=new fu(N,le),k=new qh(N,J,Ce,le),Fe=new nd(N,Ce,ge,k),pe=new ld(N,Fe,Ce,ge),fe=new od(N,le,ye),M=new Zh(re),Me=new yp(m,Re,Ae,J,le,k,M),Te=new Bp(m,re),oe=new Sp,w=new Lp(J,le),$=new Xh(m,Re,Ae,ae,pe,u,a),B=new Rp(m,pe,le),xe=new Gp(N,ge,le,ae),de=new jh(N,J,ge,le),ve=new id(N,J,ge,le),ge.programs=Me.programs,m.capabilities=le,m.extensions=J,m.properties=re,m.renderLists=oe,m.shadowMap=B,m.state=ae,m.info=ge}ce();const _e=new zp(m,N);this.xr=_e,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(L,F,!1))},this.getSize=function(E){return E.set(L,F)},this.setSize=function(E,q,te){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,F=q,e.width=Math.floor(E*K),e.height=Math.floor(q*K),te!==!1&&(e.style.width=E+"px",e.style.height=q+"px"),this.setViewport(0,0,E,q)},this.getDrawingBufferSize=function(E){return E.set(L*K,F*K).floor()},this.setDrawingBufferSize=function(E,q,te){L=E,F=q,K=te,e.width=Math.floor(E*te),e.height=Math.floor(q*te),this.setViewport(0,0,E,q)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(D)},this.setViewport=function(E,q,te,W){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,q,te,W),ae.viewport(A.copy(D).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(z)},this.setScissor=function(E,q,te,W){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,q,te,W),ae.scissor(P.copy(z).multiplyScalar(K).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){ae.setScissorTest(Y=E)},this.setOpaqueSort=function(E){O=E},this.setTransparentSort=function(E){R=E},this.getClearColor=function(E){return E.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(E=!0,q=!0,te=!0){let W=0;E&&(W|=16384),q&&(W|=256),te&&(W|=1024),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),oe.dispose(),w.dispose(),re.dispose(),Re.dispose(),Ae.dispose(),pe.dispose(),k.dispose(),xe.dispose(),Me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",we),_e.removeEventListener("sessionend",Le),j&&(j.dispose(),j=null),Ge.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=ge.autoReset,q=B.enabled,te=B.autoUpdate,W=B.needsUpdate,se=B.type;ce(),ge.autoReset=E,B.enabled=q,B.autoUpdate=te,B.needsUpdate=W,B.type=se}function Ee(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pe(E){const q=E.target;q.removeEventListener("dispose",Pe),Ie(q)}function Ie(E){I(E),re.remove(E)}function I(E){const q=re.get(E).programs;q!==void 0&&(q.forEach(function(te){Me.releaseProgram(te)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,q,te,W,se,De){q===null&&(q=X);const Ue=se.isMesh&&se.matrixWorld.determinant()<0,Oe=gt(E,q,te,W,se);ae.setMaterial(W,Ue);let Ne=te.index,We=1;W.wireframe===!0&&(Ne=Fe.getWireframeAttribute(te),We=2);const Ve=te.drawRange,He=te.attributes.position;let et=Ve.start*We,ct=(Ve.start+Ve.count)*We;De!==null&&(et=Math.max(et,De.start*We),ct=Math.min(ct,(De.start+De.count)*We)),Ne!==null?(et=Math.max(et,0),ct=Math.min(ct,Ne.count)):He!=null&&(et=Math.max(et,0),ct=Math.min(ct,He.count));const At=ct-et;if(At<0||At===1/0)return;k.setup(se,W,Oe,te,Ne);let zt,be=de;if(Ne!==null&&(zt=Ce.get(Ne),be=ve,be.setIndex(zt)),se.isMesh)W.wireframe===!0?(ae.setLineWidth(W.wireframeLinewidth*H()),be.setMode(1)):be.setMode(4);else if(se.isLine){let ke=W.linewidth;ke===void 0&&(ke=1),ae.setLineWidth(ke*H()),se.isLineSegments?be.setMode(1):se.isLineLoop?be.setMode(2):be.setMode(3)}else se.isPoints?be.setMode(0):se.isSprite&&be.setMode(4);if(se.isInstancedMesh)be.renderInstances(et,At,se.count);else if(te.isInstancedBufferGeometry){const ke=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Mi=Math.min(te.instanceCount,ke);be.renderInstances(et,At,Mi)}else be.render(et,At)},this.compile=function(E,q){function te(W,se,De){W.transparent===!0&&W.side===hr?(W.side=Rt,W.needsUpdate=!0,Xe(W,se,De),W.side=gn,W.needsUpdate=!0,Xe(W,se,De),W.side=hr):Xe(W,se,De)}h=w.get(E),h.init(),g.push(h),E.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights(m.physicallyCorrectLights),E.traverse(function(W){const se=W.material;if(se)if(Array.isArray(se))for(let De=0;De<se.length;De++){const Ue=se[De];te(Ue,E,W)}else te(se,E,W)}),g.pop(),h=null};let ee=null;function he(E){ee&&ee(E)}function we(){Ge.stop()}function Le(){Ge.start()}const Ge=new yl;Ge.setAnimationLoop(he),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(E){ee=E,_e.setAnimationLoop(E),E===null?Ge.stop():Ge.start()},_e.addEventListener("sessionstart",we),_e.addEventListener("sessionend",Le),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(q),q=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,q,b),h=w.get(E,g.length),h.init(),g.push(h),T.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ie.setFromProjectionMatrix(T),G=this.localClippingEnabled,Z=M.init(this.clippingPlanes,G,q),f=oe.get(E,p.length),f.init(),p.push(f),qe(E,q,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(O,R),Z===!0&&M.beginShadows();const te=h.state.shadowsArray;if(B.render(te,E,q),Z===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,E),h.setupLights(m.physicallyCorrectLights),q.isArrayCamera){const W=q.cameras;for(let se=0,De=W.length;se<De;se++){const Ue=W[se];Ye(f,E,Ue,Ue.viewport)}}else Ye(f,E,q);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(m,E,q),k.resetDefaultState(),S=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function qe(E,q,te,W){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){W&&V.setFromMatrixPosition(E.matrixWorld).applyMatrix4(T);const Ue=pe.update(E),Oe=E.material;Oe.visible&&f.push(E,Ue,Oe,te,V.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ge.render.frame&&(E.skeleton.update(),E.skeleton.frame=ge.render.frame),!E.frustumCulled||ie.intersectsObject(E))){W&&V.setFromMatrixPosition(E.matrixWorld).applyMatrix4(T);const Ue=pe.update(E),Oe=E.material;if(Array.isArray(Oe)){const Ne=Ue.groups;for(let We=0,Ve=Ne.length;We<Ve;We++){const He=Ne[We],et=Oe[He.materialIndex];et&&et.visible&&f.push(E,Ue,et,te,V.z,He)}}else Oe.visible&&f.push(E,Ue,Oe,te,V.z,null)}}const De=E.children;for(let Ue=0,Oe=De.length;Ue<Oe;Ue++)qe(De[Ue],q,te,W)}function Ye(E,q,te,W){const se=E.opaque,De=E.transmissive,Ue=E.transparent;h.setupLightsView(te),De.length>0&&Ze(se,q,te),W&&ae.viewport(A.copy(W)),se.length>0&&Ke(se,q,te),De.length>0&&Ke(De,q,te),Ue.length>0&&Ke(Ue,q,te),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ze(E,q,te){const W=le.isWebGL2;j===null&&(j=new In(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Xi:Rn,minFilter:Hi,samples:W&&n===!0?4:0})),m.getDrawingBufferSize(U),W?j.setSize(U.x,U.y):j.setSize(Zs(U.x),Zs(U.y));const se=m.getRenderTarget();m.setRenderTarget(j),m.clear();const De=m.toneMapping;m.toneMapping=on,Ke(E,q,te),m.toneMapping=De,ye.updateMultisampleRenderTarget(j),ye.updateRenderTargetMipmap(j),m.setRenderTarget(se)}function Ke(E,q,te){const W=q.isScene===!0?q.overrideMaterial:null;for(let se=0,De=E.length;se<De;se++){const Ue=E[se],Oe=Ue.object,Ne=Ue.geometry,We=W===null?Ue.material:W,Ve=Ue.group;Oe.layers.test(te.layers)&&je(Oe,q,te,Ne,We,Ve)}}function je(E,q,te,W,se,De){E.onBeforeRender(m,q,te,W,se,De),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),se.onBeforeRender(m,q,te,W,E,De),se.transparent===!0&&se.side===hr?(se.side=Rt,se.needsUpdate=!0,m.renderBufferDirect(te,q,W,se,E,De),se.side=gn,se.needsUpdate=!0,m.renderBufferDirect(te,q,W,se,E,De),se.side=hr):m.renderBufferDirect(te,q,W,se,E,De),E.onAfterRender(m,q,te,W,se,De)}function Xe(E,q,te){q.isScene!==!0&&(q=X);const W=re.get(E),se=h.state.lights,De=h.state.shadowsArray,Ue=se.state.version,Oe=Me.getParameters(E,se.state,De,q,te),Ne=Me.getProgramCacheKey(Oe);let We=W.programs;W.environment=E.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(E.isMeshStandardMaterial?Ae:Re).get(E.envMap||W.environment),We===void 0&&(E.addEventListener("dispose",Pe),We=new Map,W.programs=We);let Ve=We.get(Ne);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Ue)return Mt(E,Oe),Ve}else Oe.uniforms=Me.getUniforms(E),E.onBuild(te,Oe,m),E.onBeforeCompile(Oe,m),Ve=Me.acquireProgram(Oe,Ne),We.set(Ne,Ve),W.uniforms=Oe.uniforms;const He=W.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=M.uniform),Mt(E,Oe),W.needsLights=it(E),W.lightsStateVersion=Ue,W.needsLights&&(He.ambientLightColor.value=se.state.ambient,He.lightProbe.value=se.state.probe,He.directionalLights.value=se.state.directional,He.directionalLightShadows.value=se.state.directionalShadow,He.spotLights.value=se.state.spot,He.spotLightShadows.value=se.state.spotShadow,He.rectAreaLights.value=se.state.rectArea,He.ltc_1.value=se.state.rectAreaLTC1,He.ltc_2.value=se.state.rectAreaLTC2,He.pointLights.value=se.state.point,He.pointLightShadows.value=se.state.pointShadow,He.hemisphereLights.value=se.state.hemi,He.directionalShadowMap.value=se.state.directionalShadowMap,He.directionalShadowMatrix.value=se.state.directionalShadowMatrix,He.spotShadowMap.value=se.state.spotShadowMap,He.spotLightMatrix.value=se.state.spotLightMatrix,He.spotLightMap.value=se.state.spotLightMap,He.pointShadowMap.value=se.state.pointShadowMap,He.pointShadowMatrix.value=se.state.pointShadowMatrix);const et=Ve.getUniforms(),ct=kr.seqWithValue(et.seq,He);return W.currentProgram=Ve,W.uniformsList=ct,Ve}function Mt(E,q){const te=re.get(E);te.outputEncoding=q.outputEncoding,te.instancing=q.instancing,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function gt(E,q,te,W,se){q.isScene!==!0&&(q=X),ye.resetTextureUnits();const De=q.fog,Ue=W.isMeshStandardMaterial?q.environment:null,Oe=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Un,Ne=(W.isMeshStandardMaterial?Ae:Re).get(W.envMap||Ue),We=W.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ve=!!W.normalMap&&!!te.attributes.tangent,He=!!te.morphAttributes.position,et=!!te.morphAttributes.normal,ct=!!te.morphAttributes.color,At=W.toneMapped?m.toneMapping:on,zt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,be=zt!==void 0?zt.length:0,ke=re.get(W),Mi=h.state.lights;if(Z===!0&&(G===!0||E!==y)){const ht=E===y&&W.id===S;M.setState(W,E,ht)}let tt=!1;W.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Mi.state.version||ke.outputEncoding!==Oe||se.isInstancedMesh&&ke.instancing===!1||!se.isInstancedMesh&&ke.instancing===!0||se.isSkinnedMesh&&ke.skinning===!1||!se.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ne||W.fog===!0&&ke.fog!==De||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==M.numPlanes||ke.numIntersection!==M.numIntersection)||ke.vertexAlphas!==We||ke.vertexTangents!==Ve||ke.morphTargets!==He||ke.morphNormals!==et||ke.morphColors!==ct||ke.toneMapping!==At||le.isWebGL2===!0&&ke.morphTargetsCount!==be)&&(tt=!0):(tt=!0,ke.__version=W.version);let Zt=ke.currentProgram;tt===!0&&(Zt=Xe(W,q,se));let kn=!1,Kt=!1,ln=!1;const ut=Zt.getUniforms(),It=ke.uniforms;if(ae.useProgram(Zt.program)&&(kn=!0,Kt=!0,ln=!0),W.id!==S&&(S=W.id,Kt=!0),kn||y!==E){if(ut.setValue(N,"projectionMatrix",E.projectionMatrix),le.logarithmicDepthBuffer&&ut.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,Kt=!0,ln=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const ht=ut.map.cameraPosition;ht!==void 0&&ht.setValue(N,V.setFromMatrixPosition(E.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||se.isSkinnedMesh)&&ut.setValue(N,"viewMatrix",E.matrixWorldInverse)}if(se.isSkinnedMesh){ut.setOptional(N,se,"bindMatrix"),ut.setOptional(N,se,"bindMatrixInverse");const ht=se.skeleton;ht&&(le.floatVertexTextures?(ht.boneTexture===null&&ht.computeBoneTexture(),ut.setValue(N,"boneTexture",ht.boneTexture,ye),ut.setValue(N,"boneTextureSize",ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zn=te.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0&&le.isWebGL2===!0)&&fe.update(se,te,W,Zt),(Kt||ke.receiveShadow!==se.receiveShadow)&&(ke.receiveShadow=se.receiveShadow,ut.setValue(N,"receiveShadow",se.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(It.envMap.value=Ne,It.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Kt&&(ut.setValue(N,"toneMappingExposure",m.toneMappingExposure),ke.needsLights&&Je(It,ln),De&&W.fog===!0&&Te.refreshFogUniforms(It,De),Te.refreshMaterialUniforms(It,W,K,F,j),kr.upload(N,ke.uniformsList,It,ye)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(kr.upload(N,ke.uniformsList,It,ye),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(N,"center",se.center),ut.setValue(N,"modelViewMatrix",se.modelViewMatrix),ut.setValue(N,"normalMatrix",se.normalMatrix),ut.setValue(N,"modelMatrix",se.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ht=W.uniformsGroups;for(let Bn=0,xn=ht.length;Bn<xn;Bn++)if(le.isWebGL2){const Gn=ht[Bn];xe.update(Gn,Zt),xe.bind(Gn,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function Je(E,q){E.ambientLightColor.needsUpdate=q,E.lightProbe.needsUpdate=q,E.directionalLights.needsUpdate=q,E.directionalLightShadows.needsUpdate=q,E.pointLights.needsUpdate=q,E.pointLightShadows.needsUpdate=q,E.spotLights.needsUpdate=q,E.spotLightShadows.needsUpdate=q,E.rectAreaLights.needsUpdate=q,E.hemisphereLights.needsUpdate=q}function it(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,q,te){re.get(E.texture).__webglTexture=q,re.get(E.depthTexture).__webglTexture=te;const W=re.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=te===void 0,W.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,q){const te=re.get(E);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(E,q=0,te=0){b=E,v=q,x=te;let W=!0,se=null,De=!1,Ue=!1;if(E){const Ne=re.get(E);Ne.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),W=!1):Ne.__webglFramebuffer===void 0?ye.setupRenderTarget(E):Ne.__hasExternalTextures&&ye.rebindTextures(E,re.get(E.texture).__webglTexture,re.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ue=!0);const Ve=re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(se=Ve[q],De=!0):le.isWebGL2&&E.samples>0&&ye.useMultisampledRTT(E)===!1?se=re.get(E).__webglMultisampledFramebuffer:se=Ve,A.copy(E.viewport),P.copy(E.scissor),_=E.scissorTest}else A.copy(D).multiplyScalar(K).floor(),P.copy(z).multiplyScalar(K).floor(),_=Y;if(ae.bindFramebuffer(36160,se)&&le.drawBuffers&&W&&ae.drawBuffers(E,se),ae.viewport(A),ae.scissor(P),ae.setScissorTest(_),De){const Ne=re.get(E.texture);N.framebufferTexture2D(36160,36064,34069+q,Ne.__webglTexture,te)}else if(Ue){const Ne=re.get(E.texture),We=q||0;N.framebufferTextureLayer(36160,36064,Ne.__webglTexture,te||0,We)}S=-1},this.readRenderTargetPixels=function(E,q,te,W,se,De,Ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){ae.bindFramebuffer(36160,Oe);try{const Ne=E.texture,We=Ne.format,Ve=Ne.type;if(We!==qt&&C.convert(We)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ve===Xi&&(J.has("EXT_color_buffer_half_float")||le.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ve!==Rn&&C.convert(Ve)!==N.getParameter(35738)&&!(Ve===Cn&&(le.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=E.width-W&&te>=0&&te<=E.height-se&&N.readPixels(q,te,W,se,C.convert(We),C.convert(Ve),De)}finally{const Ne=b!==null?re.get(b).__webglFramebuffer:null;ae.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(E,q,te=0){const W=Math.pow(2,-te),se=Math.floor(q.image.width*W),De=Math.floor(q.image.height*W);ye.setTexture2D(q,0),N.copyTexSubImage2D(3553,te,0,0,E.x,E.y,se,De),ae.unbindTexture()},this.copyTextureToTexture=function(E,q,te,W=0){const se=q.image.width,De=q.image.height,Ue=C.convert(te.format),Oe=C.convert(te.type);ye.setTexture2D(te,0),N.pixelStorei(37440,te.flipY),N.pixelStorei(37441,te.premultiplyAlpha),N.pixelStorei(3317,te.unpackAlignment),q.isDataTexture?N.texSubImage2D(3553,W,E.x,E.y,se,De,Ue,Oe,q.image.data):q.isCompressedTexture?N.compressedTexSubImage2D(3553,W,E.x,E.y,q.mipmaps[0].width,q.mipmaps[0].height,Ue,q.mipmaps[0].data):N.texSubImage2D(3553,W,E.x,E.y,Ue,Oe,q.image),W===0&&te.generateMipmaps&&N.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(E,q,te,W,se=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=E.max.x-E.min.x+1,Ue=E.max.y-E.min.y+1,Oe=E.max.z-E.min.z+1,Ne=C.convert(W.format),We=C.convert(W.type);let Ve;if(W.isData3DTexture)ye.setTexture3D(W,0),Ve=32879;else if(W.isDataArrayTexture)ye.setTexture2DArray(W,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,W.flipY),N.pixelStorei(37441,W.premultiplyAlpha),N.pixelStorei(3317,W.unpackAlignment);const He=N.getParameter(3314),et=N.getParameter(32878),ct=N.getParameter(3316),At=N.getParameter(3315),zt=N.getParameter(32877),be=te.isCompressedTexture?te.mipmaps[0]:te.image;N.pixelStorei(3314,be.width),N.pixelStorei(32878,be.height),N.pixelStorei(3316,E.min.x),N.pixelStorei(3315,E.min.y),N.pixelStorei(32877,E.min.z),te.isDataTexture||te.isData3DTexture?N.texSubImage3D(Ve,se,q.x,q.y,q.z,De,Ue,Oe,Ne,We,be.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ve,se,q.x,q.y,q.z,De,Ue,Oe,Ne,be.data)):N.texSubImage3D(Ve,se,q.x,q.y,q.z,De,Ue,Oe,Ne,We,be),N.pixelStorei(3314,He),N.pixelStorei(32878,et),N.pixelStorei(3316,ct),N.pixelStorei(3315,At),N.pixelStorei(32877,zt),se===0&&W.generateMipmaps&&N.generateMipmap(Ve),ae.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ye.setTextureCube(E,0):E.isData3DTexture?ye.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ye.setTexture2DArray(E,0):ye.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){v=0,x=0,b=null,ae.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Wp extends Al{}Wp.prototype.isWebGL1Renderer=!0;class Hp extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Xp extends Ut{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Cl extends $i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ro=new at,Js=new fl,Ur=new Ji,Ir=new Q;class qp extends Et{constructor(e=new kt,t=new Cl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,n=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ur.copy(r.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=n,e.ray.intersectsSphere(Ur)===!1)return;Ro.copy(i).invert(),Js.copy(e.ray).applyMatrix4(Ro);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,c=r.index,f=r.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,m=p;g<m;g++){const d=c.getX(g);Ir.fromBufferAttribute(f,d),Uo(Ir,d,o,i,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,m=p;g<m;g++)Ir.fromBufferAttribute(f,g),Uo(Ir,g,o,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Uo(l,e,t,r,i,n,a){const s=Js.distanceSqToPoint(l);if(s<t){const o=new Q;Js.closestPointToPoint(l,o),o.applyMatrix4(r);const c=i.ray.origin.distanceTo(o);if(c<i.near||c>i.far)return;n.push({distance:c,distanceToRay:Math.sqrt(s),point:o,index:e,face:null,object:a})}}class sa extends kt{constructor(e=1,t=32,r=16,i=0,n=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:n,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const o=Math.min(a+s,Math.PI);let c=0;const u=[],f=new Q,h=new Q,p=[],g=[],m=[],d=[];for(let v=0;v<=r;v++){const x=[],b=v/r;let S=0;v==0&&a==0?S=.5/t:v==r&&o==Math.PI&&(S=-.5/t);for(let y=0;y<=t;y++){const A=y/t;f.x=-e*Math.cos(i+A*n)*Math.sin(a+b*s),f.y=e*Math.cos(a+b*s),f.z=e*Math.sin(i+A*n)*Math.sin(a+b*s),g.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),d.push(A+S,1-b),x.push(c++)}u.push(x)}for(let v=0;v<r;v++)for(let x=0;x<t;x++){const b=u[v][x+1],S=u[v][x],y=u[v+1][x],A=u[v+1][x+1];(v!==0||a>0)&&p.push(b,S,A),(v!==r-1||o<Math.PI)&&p.push(S,y,A)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(m,3)),this.setAttribute("uv",new jt(d,2))}static fromJSON(e){return new sa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Io={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class jp{constructor(e,t,r){const i=this;let n=!1,a=0,s=0,o;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){s++,n===!1&&i.onStart!==void 0&&i.onStart(u,a,s),n=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(n=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Yp=new jp;class Ll{constructor(e){this.manager=e!==void 0?e:Yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(i,n){r.load(e,i,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Zp extends Ll{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=Io.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const s=ji("img");function o(){u(),Io.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(f){u(),i&&i(f),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){s.removeEventListener("load",o,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),n.manager.itemStart(e),s.src=e,s}}class Kp extends Ll{constructor(e){super(e)}load(e,t,r,i){const n=new yt,a=new Zp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){n.image=s,n.needsUpdate=!0,t!==void 0&&t(n)},r,i),n}}class Jp extends kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Qp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fo(){return(typeof performance>"u"?Date:performance).now()}class Oo{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);const No={type:"change"},Ns={type:"start"},ko={type:"end"};class $p extends Nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qn.ROTATE,MIDDLE:qn.DOLLY,RIGHT:qn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",oe),this._domElementKeyEvents=C},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(No),r.update(),n=i.NONE},this.update=function(){const C=new Q,k=new Fn().setFromUnitVectors(e.up,new Q(0,1,0)),xe=k.clone().invert(),ce=new Q,_e=new Fn,me=2*Math.PI;return function(){const Ee=r.object.position;C.copy(Ee).sub(r.target),C.applyQuaternion(k),s.setFromVector3(C),r.autoRotate&&n===i.NONE&&L(P()),r.enableDamping?(s.theta+=o.theta*r.dampingFactor,s.phi+=o.phi*r.dampingFactor):(s.theta+=o.theta,s.phi+=o.phi);let Pe=r.minAzimuthAngle,Ie=r.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ie)&&(Pe<-Math.PI?Pe+=me:Pe>Math.PI&&(Pe-=me),Ie<-Math.PI?Ie+=me:Ie>Math.PI&&(Ie-=me),Pe<=Ie?s.theta=Math.max(Pe,Math.min(Ie,s.theta)):s.theta=s.theta>(Pe+Ie)/2?Math.max(Pe,s.theta):Math.min(Ie,s.theta)),s.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(r.minDistance,Math.min(r.maxDistance,s.radius)),r.enableDamping===!0?r.target.addScaledVector(u,r.dampingFactor):r.target.add(u),C.setFromSpherical(s),C.applyQuaternion(xe),Ee.copy(r.target).add(C),r.object.lookAt(r.target),r.enableDamping===!0?(o.theta*=1-r.dampingFactor,o.phi*=1-r.dampingFactor,u.multiplyScalar(1-r.dampingFactor)):(o.set(0,0,0),u.set(0,0,0)),c=1,f||ce.distanceToSquared(r.object.position)>a||8*(1-_e.dot(r.object.quaternion))>a?(r.dispatchEvent(No),ce.copy(r.object.position),_e.copy(r.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",B),r.domElement.removeEventListener("pointerdown",Re),r.domElement.removeEventListener("pointercancel",Fe),r.domElement.removeEventListener("wheel",Te),r.domElement.removeEventListener("pointermove",Ae),r.domElement.removeEventListener("pointerup",Ce),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",oe)};const r=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let n=i.NONE;const a=1e-6,s=new Oo,o=new Oo;let c=1;const u=new Q;let f=!1;const h=new Be,p=new Be,g=new Be,m=new Be,d=new Be,v=new Be,x=new Be,b=new Be,S=new Be,y=[],A={};function P(){return 2*Math.PI/60/60*r.autoRotateSpeed}function _(){return Math.pow(.95,r.zoomSpeed)}function L(C){o.theta-=C}function F(C){o.phi-=C}const K=function(){const C=new Q;return function(xe,ce){C.setFromMatrixColumn(ce,0),C.multiplyScalar(-xe),u.add(C)}}(),O=function(){const C=new Q;return function(xe,ce){r.screenSpacePanning===!0?C.setFromMatrixColumn(ce,1):(C.setFromMatrixColumn(ce,0),C.crossVectors(r.object.up,C)),C.multiplyScalar(xe),u.add(C)}}(),R=function(){const C=new Q;return function(xe,ce){const _e=r.domElement;if(r.object.isPerspectiveCamera){const me=r.object.position;C.copy(me).sub(r.target);let ue=C.length();ue*=Math.tan(r.object.fov/2*Math.PI/180),K(2*xe*ue/_e.clientHeight,r.object.matrix),O(2*ce*ue/_e.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(K(xe*(r.object.right-r.object.left)/r.object.zoom/_e.clientWidth,r.object.matrix),O(ce*(r.object.top-r.object.bottom)/r.object.zoom/_e.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function D(C){r.object.isPerspectiveCamera?c/=C:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom*C)),r.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function z(C){r.object.isPerspectiveCamera?c*=C:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/C)),r.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Y(C){h.set(C.clientX,C.clientY)}function ie(C){x.set(C.clientX,C.clientY)}function Z(C){m.set(C.clientX,C.clientY)}function G(C){p.set(C.clientX,C.clientY),g.subVectors(p,h).multiplyScalar(r.rotateSpeed);const k=r.domElement;L(2*Math.PI*g.x/k.clientHeight),F(2*Math.PI*g.y/k.clientHeight),h.copy(p),r.update()}function j(C){b.set(C.clientX,C.clientY),S.subVectors(b,x),S.y>0?D(_()):S.y<0&&z(_()),x.copy(b),r.update()}function T(C){d.set(C.clientX,C.clientY),v.subVectors(d,m).multiplyScalar(r.panSpeed),R(v.x,v.y),m.copy(d),r.update()}function U(C){C.deltaY<0?z(_()):C.deltaY>0&&D(_()),r.update()}function V(C){let k=!1;switch(C.code){case r.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):R(0,r.keyPanSpeed),k=!0;break;case r.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):R(0,-r.keyPanSpeed),k=!0;break;case r.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):R(r.keyPanSpeed,0),k=!0;break;case r.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):R(-r.keyPanSpeed,0),k=!0;break}k&&(C.preventDefault(),r.update())}function X(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),k=.5*(y[0].pageY+y[1].pageY);h.set(C,k)}}function H(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),k=.5*(y[0].pageY+y[1].pageY);m.set(C,k)}}function N(){const C=y[0].pageX-y[1].pageX,k=y[0].pageY-y[1].pageY,xe=Math.sqrt(C*C+k*k);x.set(0,xe)}function ne(){r.enableZoom&&N(),r.enablePan&&H()}function J(){r.enableZoom&&N(),r.enableRotate&&X()}function le(C){if(y.length==1)p.set(C.pageX,C.pageY);else{const xe=ve(C),ce=.5*(C.pageX+xe.x),_e=.5*(C.pageY+xe.y);p.set(ce,_e)}g.subVectors(p,h).multiplyScalar(r.rotateSpeed);const k=r.domElement;L(2*Math.PI*g.x/k.clientHeight),F(2*Math.PI*g.y/k.clientHeight),h.copy(p)}function ae(C){if(y.length===1)d.set(C.pageX,C.pageY);else{const k=ve(C),xe=.5*(C.pageX+k.x),ce=.5*(C.pageY+k.y);d.set(xe,ce)}v.subVectors(d,m).multiplyScalar(r.panSpeed),R(v.x,v.y),m.copy(d)}function ge(C){const k=ve(C),xe=C.pageX-k.x,ce=C.pageY-k.y,_e=Math.sqrt(xe*xe+ce*ce);b.set(0,_e),S.set(0,Math.pow(b.y/x.y,r.zoomSpeed)),D(S.y),x.copy(b)}function re(C){r.enableZoom&&ge(C),r.enablePan&&ae(C)}function ye(C){r.enableZoom&&ge(C),r.enableRotate&&le(C)}function Re(C){r.enabled!==!1&&(y.length===0&&(r.domElement.setPointerCapture(C.pointerId),r.domElement.addEventListener("pointermove",Ae),r.domElement.addEventListener("pointerup",Ce)),$(C),C.pointerType==="touch"?w(C):pe(C))}function Ae(C){r.enabled!==!1&&(C.pointerType==="touch"?M(C):Me(C))}function Ce(C){fe(C),y.length===0&&(r.domElement.releasePointerCapture(C.pointerId),r.domElement.removeEventListener("pointermove",Ae),r.domElement.removeEventListener("pointerup",Ce)),r.dispatchEvent(ko),n=i.NONE}function Fe(C){fe(C)}function pe(C){let k;switch(C.button){case 0:k=r.mouseButtons.LEFT;break;case 1:k=r.mouseButtons.MIDDLE;break;case 2:k=r.mouseButtons.RIGHT;break;default:k=-1}switch(k){case qn.DOLLY:if(r.enableZoom===!1)return;ie(C),n=i.DOLLY;break;case qn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(r.enablePan===!1)return;Z(C),n=i.PAN}else{if(r.enableRotate===!1)return;Y(C),n=i.ROTATE}break;case qn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(r.enableRotate===!1)return;Y(C),n=i.ROTATE}else{if(r.enablePan===!1)return;Z(C),n=i.PAN}break;default:n=i.NONE}n!==i.NONE&&r.dispatchEvent(Ns)}function Me(C){switch(n){case i.ROTATE:if(r.enableRotate===!1)return;G(C);break;case i.DOLLY:if(r.enableZoom===!1)return;j(C);break;case i.PAN:if(r.enablePan===!1)return;T(C);break}}function Te(C){r.enabled===!1||r.enableZoom===!1||n!==i.NONE||(C.preventDefault(),r.dispatchEvent(Ns),U(C),r.dispatchEvent(ko))}function oe(C){r.enabled===!1||r.enablePan===!1||V(C)}function w(C){switch(de(C),y.length){case 1:switch(r.touches.ONE){case jn.ROTATE:if(r.enableRotate===!1)return;X(),n=i.TOUCH_ROTATE;break;case jn.PAN:if(r.enablePan===!1)return;H(),n=i.TOUCH_PAN;break;default:n=i.NONE}break;case 2:switch(r.touches.TWO){case jn.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ne(),n=i.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;J(),n=i.TOUCH_DOLLY_ROTATE;break;default:n=i.NONE}break;default:n=i.NONE}n!==i.NONE&&r.dispatchEvent(Ns)}function M(C){switch(de(C),n){case i.TOUCH_ROTATE:if(r.enableRotate===!1)return;le(C),r.update();break;case i.TOUCH_PAN:if(r.enablePan===!1)return;ae(C),r.update();break;case i.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;re(C),r.update();break;case i.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ye(C),r.update();break;default:n=i.NONE}}function B(C){r.enabled!==!1&&C.preventDefault()}function $(C){y.push(C)}function fe(C){delete A[C.pointerId];for(let k=0;k<y.length;k++)if(y[k].pointerId==C.pointerId){y.splice(k,1);return}}function de(C){let k=A[C.pointerId];k===void 0&&(k=new Be,A[C.pointerId]=k),k.set(C.pageX,C.pageY)}function ve(C){const k=C.pointerId===y[0].pointerId?y[1]:y[0];return A[k.pointerId]}r.domElement.addEventListener("contextmenu",B),r.domElement.addEventListener("pointerdown",Re),r.domElement.addEventListener("pointercancel",Fe),r.domElement.addEventListener("wheel",Te,{passive:!1}),this.update()}}function em(){var l=Object.create(null);function e(i,n){var a=i.id,s=i.name,o=i.dependencies;o===void 0&&(o=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!l[a])try{o=o.map(function(h){return h&&h.isWorkerModule&&(e(h,function(p){if(p instanceof Error)throw p}),h=l[h.id].value),h}),c=r("<"+s+">.init",c),u&&(u=r("<"+s+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,o):console.error("worker module init function failed to rehydrate"),l[a]={id:a,value:f,getTransferables:u},n(f)}catch(h){h&&h.noLog||console.error(h),n(h)}}function t(i,n){var a,s=i.id,o=i.args;(!l[s]||typeof l[s].value!="function")&&n(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var c=(a=l[s]).value.apply(a,o);c&&typeof c.then=="function"?c.then(u,function(f){return n(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){n(f)}function u(f){try{var h=l[s].getTransferables&&l[s].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),n(f,h)}catch(p){console.error(p),n(p)}}}function r(i,n){var a=void 0;self.troikaDefine=function(o){return a=o};var s=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+n+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(o){console.error(o)}return URL.revokeObjectURL(s),delete self.troikaDefine,a}self.addEventListener("message",function(i){var n=i.data,a=n.messageId,s=n.action,o=n.data;try{s==="registerModule"&&e(o,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),s==="callModule"&&t(o,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function tm(l){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=l.dependencies,r=l.init;t=Array.isArray(t)?t.map(function(n){return n&&n._getInitResult?n._getInitResult():n}):[];var i=Promise.all(t).then(function(n){return r.apply(null,n)});return e._getInitResult=function(){return i},i},e}var Dl=function(){var l=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),l=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Dl=function(){return l},l},nm=0,im=0,ks=!1,Vi=Object.create(null),Wi=Object.create(null),Qs=Object.create(null);function tr(l){if((!l||typeof l.init!="function")&&!ks)throw new Error("requires `options.init` function");var e=l.dependencies,t=l.init,r=l.getTransferables,i=l.workerId;if(!Dl())return tm(l);i==null&&(i="#default");var n="workerModule"+ ++nm,a=l.name||n,s=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(ks=!0,c=tr({workerId:i,name:"<"+a+"> function dependency: "+c.name,init:`function(){return (
`+zr(c)+`
)}`}),ks=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function o(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!s){s=zo(i,"registerModule",o.workerModuleData);var f=function(){s=null,Wi[i].delete(f)};(Wi[i]||(Wi[i]=new Set)).add(f)}return s.then(function(h){var p=h.isCallable;if(p)return zo(i,"callModule",{id:n,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return o.workerModuleData={isWorkerModule:!0,id:n,name:a,dependencies:e,init:zr(t),getTransferables:r&&zr(r)},o}function rm(l){Wi[l]&&Wi[l].forEach(function(e){e()}),Vi[l]&&(Vi[l].terminate(),delete Vi[l])}function zr(l){var e=l.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function sm(l){var e=Vi[l];if(!e){var t=zr(em);e=Vi[l]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+l.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var i=r.data,n=i.messageId,a=Qs[n];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Qs[n],a(i)}}return e}function zo(l,e,t){return new Promise(function(r,i){var n=++im;Qs[n]=function(a){a.success?r(a.result):i(new Error("Error in worker "+e+" call: "+a.error))},sm(l).postMessage({messageId:n,action:e,data:t})})}function Pl(){var l=function(e){function t(G,j,T,U,V,X,H,N){var ne=1-H;N.x=ne*ne*G+2*ne*H*T+H*H*V,N.y=ne*ne*j+2*ne*H*U+H*H*X}function r(G,j,T,U,V,X,H,N,ne,J){var le=1-ne;J.x=le*le*le*G+3*le*le*ne*T+3*le*ne*ne*V+ne*ne*ne*H,J.y=le*le*le*j+3*le*le*ne*U+3*le*ne*ne*X+ne*ne*ne*N}function i(G,j){for(var T=/([MLQCZ])([^MLQCZ]*)/g,U,V,X,H,N;U=T.exec(G);){var ne=U[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(J){return parseFloat(J)});switch(U[1]){case"M":H=V=ne[0],N=X=ne[1];break;case"L":(ne[0]!==H||ne[1]!==N)&&j("L",H,N,H=ne[0],N=ne[1]);break;case"Q":{j("Q",H,N,H=ne[2],N=ne[3],ne[0],ne[1]);break}case"C":{j("C",H,N,H=ne[4],N=ne[5],ne[0],ne[1],ne[2],ne[3]);break}case"Z":(H!==V||N!==X)&&j("L",H,N,V,X);break}}}function n(G,j,T){T===void 0&&(T=16);var U={x:0,y:0};i(G,function(V,X,H,N,ne,J,le,ae,ge){switch(V){case"L":j(X,H,N,ne);break;case"Q":{for(var re=X,ye=H,Re=1;Re<T;Re++)t(X,H,J,le,N,ne,Re/(T-1),U),j(re,ye,U.x,U.y),re=U.x,ye=U.y;break}case"C":{for(var Ae=X,Ce=H,Fe=1;Fe<T;Fe++)r(X,H,J,le,ae,ge,N,ne,Fe/(T-1),U),j(Ae,Ce,U.x,U.y),Ae=U.x,Ce=U.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",s="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",o=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(G,j){var T=G.getContext?G.getContext("webgl",c):G,U=o.get(T);if(!U){let Ae=function(oe){var w=X[oe];if(!w&&(w=X[oe]=T.getExtension(oe),!w))throw new Error(oe+" not supported");return w},Ce=function(oe,w){var M=T.createShader(w);return T.shaderSource(M,oe),T.compileShader(M),M},Fe=function(oe,w,M,B){if(!H[oe]){var $={},fe={},de=T.createProgram();T.attachShader(de,Ce(w,T.VERTEX_SHADER)),T.attachShader(de,Ce(M,T.FRAGMENT_SHADER)),T.linkProgram(de),H[oe]={program:de,transaction:function(C){T.useProgram(de),C({setUniform:function(xe,ce){for(var _e=[],me=arguments.length-2;me-- >0;)_e[me]=arguments[me+2];var ue=fe[ce]||(fe[ce]=T.getUniformLocation(de,ce));T["uniform"+xe].apply(T,[ue].concat(_e))},setAttribute:function(xe,ce,_e,me,ue){var Ee=$[xe];Ee||(Ee=$[xe]={buf:T.createBuffer(),loc:T.getAttribLocation(de,xe),data:null}),T.bindBuffer(T.ARRAY_BUFFER,Ee.buf),T.vertexAttribPointer(Ee.loc,ce,T.FLOAT,!1,0,0),T.enableVertexAttribArray(Ee.loc),V?T.vertexAttribDivisor(Ee.loc,me):Ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ee.loc,me),ue!==Ee.data&&(T.bufferData(T.ARRAY_BUFFER,ue,_e),Ee.data=ue)}})}}}H[oe].transaction(B)},pe=function(oe,w){ne++;try{T.activeTexture(T.TEXTURE0+ne);var M=N[oe];M||(M=N[oe]=T.createTexture(),T.bindTexture(T.TEXTURE_2D,M),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MIN_FILTER,T.NEAREST),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MAG_FILTER,T.NEAREST)),T.bindTexture(T.TEXTURE_2D,M),w(M,ne)}finally{ne--}},Me=function(oe,w,M){var B=T.createFramebuffer();J.push(B),T.bindFramebuffer(T.FRAMEBUFFER,B),T.activeTexture(T.TEXTURE0+w),T.bindTexture(T.TEXTURE_2D,oe),T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,oe,0);try{M(B)}finally{T.deleteFramebuffer(B),T.bindFramebuffer(T.FRAMEBUFFER,J[--J.length-1]||null)}},Te=function(){X={},H={},N={},ne=-1,J.length=0};var le=Ae,ae=Ce,ge=Fe,re=pe,ye=Me,Re=Te,V=typeof WebGL2RenderingContext<"u"&&T instanceof WebGL2RenderingContext,X={},H={},N={},ne=-1,J=[];T.canvas.addEventListener("webglcontextlost",function(oe){Te(),oe.preventDefault()},!1),o.set(T,U={gl:T,isWebGL2:V,getExtension:Ae,withProgram:Fe,withTexture:pe,withTextureFramebuffer:Me,handleContextLoss:Te})}j(U)}function f(G,j,T,U,V,X,H,N){H===void 0&&(H=15),N===void 0&&(N=null),u(G,function(ne){var J=ne.gl,le=ne.withProgram,ae=ne.withTexture;ae("copy",function(ge,re){J.texImage2D(J.TEXTURE_2D,0,J.RGBA,V,X,0,J.RGBA,J.UNSIGNED_BYTE,j),le("copy",a,s,function(ye){var Re=ye.setUniform,Ae=ye.setAttribute;Ae("aUV",2,J.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Re("1i","image",re),J.bindFramebuffer(J.FRAMEBUFFER,N||null),J.disable(J.BLEND),J.colorMask(H&8,H&4,H&2,H&1),J.viewport(T,U,V,X),J.scissor(T,U,V,X),J.drawArrays(J.TRIANGLES,0,3)})})})}function h(G,j,T){var U=G.width,V=G.height;u(G,function(X){var H=X.gl,N=new Uint8Array(U*V*4);H.readPixels(0,0,U,V,H.RGBA,H.UNSIGNED_BYTE,N),G.width=j,G.height=T,f(H,N,0,0,U,V)})}var p=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(G,j,T,U,V,X){X===void 0&&(X=1);var H=new Uint8Array(G*j),N=U[2]-U[0],ne=U[3]-U[1],J=[];n(T,function(Ae,Ce,Fe,pe){J.push({x1:Ae,y1:Ce,x2:Fe,y2:pe,minX:Math.min(Ae,Fe),minY:Math.min(Ce,pe),maxX:Math.max(Ae,Fe),maxY:Math.max(Ce,pe)})}),J.sort(function(Ae,Ce){return Ae.maxX-Ce.maxX});for(var le=0;le<G;le++)for(var ae=0;ae<j;ae++){var ge=ye(U[0]+N*(le+.5)/G,U[1]+ne*(ae+.5)/j),re=Math.pow(1-Math.abs(ge)/V,X)/2;ge<0&&(re=1-re),re=Math.max(0,Math.min(255,Math.round(re*255))),H[ae*G+le]=re}return H;function ye(Ae,Ce){for(var Fe=1/0,pe=1/0,Me=J.length;Me--;){var Te=J[Me];if(Te.maxX+pe<=Ae)break;if(Ae+pe>Te.minX&&Ce-pe<Te.maxY&&Ce+pe>Te.minY){var oe=v(Ae,Ce,Te.x1,Te.y1,Te.x2,Te.y2);oe<Fe&&(Fe=oe,pe=Math.sqrt(Fe))}}return Re(Ae,Ce)&&(pe=-pe),pe}function Re(Ae,Ce){for(var Fe=0,pe=J.length;pe--;){var Me=J[pe];if(Me.maxX<=Ae)break;var Te=Me.y1>Ce!=Me.y2>Ce&&Ae<(Me.x2-Me.x1)*(Ce-Me.y1)/(Me.y2-Me.y1)+Me.x1;Te&&(Fe+=Me.y1<Me.y2?1:-1)}return Fe!==0}}function m(G,j,T,U,V,X,H,N,ne,J){X===void 0&&(X=1),N===void 0&&(N=0),ne===void 0&&(ne=0),J===void 0&&(J=0),d(G,j,T,U,V,X,H,null,N,ne,J)}function d(G,j,T,U,V,X,H,N,ne,J,le){X===void 0&&(X=1),ne===void 0&&(ne=0),J===void 0&&(J=0),le===void 0&&(le=0);for(var ae=g(G,j,T,U,V,X),ge=new Uint8Array(ae.length*4),re=0;re<ae.length;re++)ge[re*4+le]=ae[re];f(H,ge,ne,J,G,j,1<<3-le,N)}function v(G,j,T,U,V,X){var H=V-T,N=X-U,ne=H*H+N*N,J=ne?Math.max(0,Math.min(1,((G-T)*H+(j-U)*N)/ne)):0,le=G-(T+J*H),ae=j-(U+J*N);return le*le+ae*ae}var x=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:m,generateIntoFramebuffer:d}),b="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",S="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",y="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",A=new Float32Array([0,0,2,0,0,2]),P=null,_=!1,L={},F=new WeakMap;function K(G){if(!_&&!z(G))throw new Error("WebGL generation not supported")}function O(G,j,T,U,V,X,H){if(X===void 0&&(X=1),H===void 0&&(H=null),!H&&(H=P,!H)){var N=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!N)throw new Error("OffscreenCanvas or DOM canvas not supported");H=P=N.getContext("webgl",{depth:!1})}K(H);var ne=new Uint8Array(G*j*4);u(H,function(ge){var re=ge.gl,ye=ge.withTexture,Re=ge.withTextureFramebuffer;ye("readable",function(Ae,Ce){re.texImage2D(re.TEXTURE_2D,0,re.RGBA,G,j,0,re.RGBA,re.UNSIGNED_BYTE,null),Re(Ae,Ce,function(Fe){D(G,j,T,U,V,X,re,Fe,0,0,0),re.readPixels(0,0,G,j,re.RGBA,re.UNSIGNED_BYTE,ne)})})});for(var J=new Uint8Array(G*j),le=0,ae=0;le<ne.length;le+=4)J[ae++]=ne[le];return J}function R(G,j,T,U,V,X,H,N,ne,J){X===void 0&&(X=1),N===void 0&&(N=0),ne===void 0&&(ne=0),J===void 0&&(J=0),D(G,j,T,U,V,X,H,null,N,ne,J)}function D(G,j,T,U,V,X,H,N,ne,J,le){X===void 0&&(X=1),ne===void 0&&(ne=0),J===void 0&&(J=0),le===void 0&&(le=0),K(H);var ae=[];n(T,function(ge,re,ye,Re){ae.push(ge,re,ye,Re)}),ae=new Float32Array(ae),u(H,function(ge){var re=ge.gl,ye=ge.isWebGL2,Re=ge.getExtension,Ae=ge.withProgram,Ce=ge.withTexture,Fe=ge.withTextureFramebuffer,pe=ge.handleContextLoss;if(Ce("rawDistances",function(Me,Te){(G!==Me._lastWidth||j!==Me._lastHeight)&&re.texImage2D(re.TEXTURE_2D,0,re.RGBA,Me._lastWidth=G,Me._lastHeight=j,0,re.RGBA,re.UNSIGNED_BYTE,null),Ae("main",b,S,function(oe){var w=oe.setAttribute,M=oe.setUniform,B=!ye&&Re("ANGLE_instanced_arrays"),$=!ye&&Re("EXT_blend_minmax");w("aUV",2,re.STATIC_DRAW,0,A),w("aLineSegment",4,re.DYNAMIC_DRAW,1,ae),M.apply(void 0,["4f","uGlyphBounds"].concat(U)),M("1f","uMaxDistance",V),M("1f","uExponent",X),Fe(Me,Te,function(fe){re.enable(re.BLEND),re.colorMask(!0,!0,!0,!0),re.viewport(0,0,G,j),re.scissor(0,0,G,j),re.blendFunc(re.ONE,re.ONE),re.blendEquationSeparate(re.FUNC_ADD,ye?re.MAX:$.MAX_EXT),re.clear(re.COLOR_BUFFER_BIT),ye?re.drawArraysInstanced(re.TRIANGLES,0,3,ae.length/4):B.drawArraysInstancedANGLE(re.TRIANGLES,0,3,ae.length/4)})}),Ae("post",a,y,function(oe){oe.setAttribute("aUV",2,re.STATIC_DRAW,0,A),oe.setUniform("1i","tex",Te),re.bindFramebuffer(re.FRAMEBUFFER,N),re.disable(re.BLEND),re.colorMask(le===0,le===1,le===2,le===3),re.viewport(ne,J,G,j),re.scissor(ne,J,G,j),re.drawArrays(re.TRIANGLES,0,3)})}),re.isContextLost())throw pe(),new Error("webgl context lost")})}function z(G){var j=!G||G===P?L:G.canvas||G,T=F.get(j);if(T===void 0){_=!0;var U=null;try{var V=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],X=O(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,G);T=X&&V.length===X.length&&X.every(function(H,N){return H===V[N]}),T||(U="bad trial run results",console.info(V,X))}catch(H){T=!1,U=H.message}U&&console.warn("WebGL SDF generation not supported:",U),_=!1,F.set(j,T)}return T}var Y=Object.freeze({__proto__:null,generate:O,generateIntoCanvas:R,generateIntoFramebuffer:D,isSupported:z});function ie(G,j,T,U,V,X){V===void 0&&(V=Math.max(U[2]-U[0],U[3]-U[1])/2),X===void 0&&(X=1);try{return O.apply(Y,arguments)}catch(H){return console.info("WebGL SDF generation failed, falling back to JS",H),g.apply(x,arguments)}}function Z(G,j,T,U,V,X,H,N,ne,J){V===void 0&&(V=Math.max(U[2]-U[0],U[3]-U[1])/2),X===void 0&&(X=1),N===void 0&&(N=0),ne===void 0&&(ne=0),J===void 0&&(J=0);try{return R.apply(Y,arguments)}catch(le){return console.info("WebGL SDF generation failed, falling back to JS",le),m.apply(x,arguments)}}return e.forEachPathCommand=i,e.generate=ie,e.generateIntoCanvas=Z,e.javascript=x,e.pathToLineSegments=n,e.webgl=Y,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return l}function am(){var l=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},i={};r.L=1,i[1]="L",Object.keys(t).forEach(function(pe,Me){r[pe]=1<<Me+1,i[r[pe]]=pe}),Object.freeze(r);var n=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,s=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,o=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|n|r.PDI|o,u=null;function f(){if(!u){u=new Map;var pe=function(Te){if(t.hasOwnProperty(Te)){var oe=0;t[Te].split(",").forEach(function(w){var M=w.split("+"),B=M[0],$=M[1];B=parseInt(B,36),$=$?parseInt($,36):0,u.set(oe+=B,r[Te]);for(var fe=0;fe<$;fe++)u.set(++oe,r[Te])})}};for(var Me in t)pe(Me)}}function h(pe){return f(),u.get(pe.codePointAt(0))||r.L}function p(pe){return i[h(pe)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function m(pe,Me){var Te=36,oe=0,w=new Map,M=Me&&new Map,B;return pe.split(",").forEach(function $(fe){if(fe.indexOf("+")!==-1)for(var de=+fe;de--;)$(B);else{B=fe;var ve=fe.split(">"),C=ve[0],k=ve[1];C=String.fromCodePoint(oe+=parseInt(C,Te)),k=String.fromCodePoint(oe+=parseInt(k,Te)),w.set(C,k),Me&&M.set(k,C)}}),{map:w,reverseMap:M}}var d,v,x;function b(){if(!d){var pe=m(g.pairs,!0),Me=pe.map,Te=pe.reverseMap;d=Me,v=Te,x=m(g.canonical,!1).map}}function S(pe){return b(),d.get(pe)||null}function y(pe){return b(),v.get(pe)||null}function A(pe){return b(),x.get(pe)||null}var P=r.L,_=r.R,L=r.EN,F=r.ES,K=r.ET,O=r.AN,R=r.CS,D=r.B,z=r.S,Y=r.ON,ie=r.BN,Z=r.NSM,G=r.AL,j=r.LRO,T=r.RLO,U=r.LRE,V=r.RLE,X=r.PDF,H=r.LRI,N=r.RLI,ne=r.FSI,J=r.PDI;function le(pe,Me){for(var Te=125,oe=new Uint32Array(pe.length),w=0;w<pe.length;w++)oe[w]=h(pe[w]);var M=new Map;function B(pt,Gt){var bt=oe[pt];oe[pt]=Gt,M.set(bt,M.get(bt)-1),bt&s&&M.set(s,M.get(s)-1),M.set(Gt,(M.get(Gt)||0)+1),Gt&s&&M.set(s,(M.get(s)||0)+1)}for(var $=new Uint8Array(pe.length),fe=new Map,de=[],ve=null,C=0;C<pe.length;C++)ve||de.push(ve={start:C,end:pe.length-1,level:Me==="rtl"?1:Me==="ltr"?0:ya(C,!1)}),oe[C]&D&&(ve.end=C,ve=null);for(var k=V|U|T|j|n|J|X|D,xe=function(pt){return pt+(pt&1?1:2)},ce=function(pt){return pt+(pt&1?2:1)},_e=0;_e<de.length;_e++){ve=de[_e];var me=[{_level:ve.level,_override:0,_isolate:0}],ue=void 0,Ee=0,Pe=0,Ie=0;M.clear();for(var I=ve.start;I<=ve.end;I++){var ee=oe[I];if(ue=me[me.length-1],M.set(ee,(M.get(ee)||0)+1),ee&s&&M.set(s,(M.get(s)||0)+1),ee&k)if(ee&(V|U)){$[I]=ue._level;var he=(ee===V?ce:xe)(ue._level);he<=Te&&!Ee&&!Pe?me.push({_level:he,_override:0,_isolate:0}):Ee||Pe++}else if(ee&(T|j)){$[I]=ue._level;var we=(ee===T?ce:xe)(ue._level);we<=Te&&!Ee&&!Pe?me.push({_level:we,_override:ee&T?_:P,_isolate:0}):Ee||Pe++}else if(ee&n){ee&ne&&(ee=ya(I+1,!0)===1?N:H),$[I]=ue._level,ue._override&&B(I,ue._override);var Le=(ee===N?ce:xe)(ue._level);Le<=Te&&Ee===0&&Pe===0?(Ie++,me.push({_level:Le,_override:0,_isolate:1,_isolInitIndex:I})):Ee++}else if(ee&J){if(Ee>0)Ee--;else if(Ie>0){for(Pe=0;!me[me.length-1]._isolate;)me.pop();var Ge=me[me.length-1]._isolInitIndex;Ge!=null&&(fe.set(Ge,I),fe.set(I,Ge)),me.pop(),Ie--}ue=me[me.length-1],$[I]=ue._level,ue._override&&B(I,ue._override)}else ee&X?(Ee===0&&(Pe>0?Pe--:!ue._isolate&&me.length>1&&(me.pop(),ue=me[me.length-1])),$[I]=ue._level):ee&D&&($[I]=ve.level);else $[I]=ue._level,ue._override&&ee!==ie&&B(I,ue._override)}for(var qe=[],Ye=null,Ze=ve.start;Ze<=ve.end;Ze++){var Ke=oe[Ze];if(!(Ke&o)){var je=$[Ze],Xe=Ke&n,Mt=Ke===J;Ye&&je===Ye._level?(Ye._end=Ze,Ye._endsWithIsolInit=Xe):qe.push(Ye={_start:Ze,_end:Ze,_level:je,_startsWithPDI:Mt,_endsWithIsolInit:Xe})}}for(var gt=[],Je=0;Je<qe.length;Je++){var it=qe[Je];if(!it._startsWithPDI||it._startsWithPDI&&!fe.has(it._start)){for(var E=[Ye=it],q=void 0;Ye&&Ye._endsWithIsolInit&&(q=fe.get(Ye._end))!=null;)for(var te=Je+1;te<qe.length;te++)if(qe[te]._start===q){E.push(Ye=qe[te]);break}for(var W=[],se=0;se<E.length;se++)for(var De=E[se],Ue=De._start;Ue<=De._end;Ue++)W.push(Ue);for(var Oe=$[W[0]],Ne=ve.level,We=W[0]-1;We>=0;We--)if(!(oe[We]&o)){Ne=$[We];break}var Ve=W[W.length-1],He=$[Ve],et=ve.level;if(!(oe[Ve]&n)){for(var ct=Ve+1;ct<=ve.end;ct++)if(!(oe[ct]&o)){et=$[ct];break}}gt.push({_seqIndices:W,_sosType:Math.max(Ne,Oe)%2?_:P,_eosType:Math.max(et,He)%2?_:P})}}for(var At=0;At<gt.length;At++){var zt=gt[At],be=zt._seqIndices,ke=zt._sosType,Mi=zt._eosType;if(M.get(Z))for(var tt=0;tt<be.length;tt++){var Zt=be[tt];if(oe[Zt]&Z){for(var kn=ke,Kt=tt-1;Kt>=0;Kt--)if(!(oe[be[Kt]]&o)){kn=oe[be[Kt]];break}B(Zt,kn&(n|J)?Y:kn)}}if(M.get(L))for(var ln=0;ln<be.length;ln++){var ut=be[ln];if(oe[ut]&L)for(var It=ln-1;It>=-1;It--){var zn=It===-1?ke:oe[be[It]];if(zn&a){zn===G&&B(ut,O);break}}}if(M.get(G))for(var ht=0;ht<be.length;ht++){var Bn=be[ht];oe[Bn]&G&&B(Bn,_)}if(M.get(F)||M.get(R))for(var xn=1;xn<be.length-1;xn++){var Gn=be[xn];if(oe[Gn]&(F|R)){for(var Vn=0,jr=0,Yr=xn-1;Yr>=0&&(Vn=oe[be[Yr]],!!(Vn&o));Yr--);for(var Zr=xn+1;Zr<be.length&&(jr=oe[be[Zr]],!!(jr&o));Zr++);Vn===jr&&(oe[Gn]===F?Vn===L:Vn&(L|O))&&B(Gn,Vn)}}if(M.get(L))for(var bi=0;bi<be.length;bi++){var jl=be[bi];if(oe[jl]&L){for(var nr=bi-1;nr>=0&&oe[be[nr]]&(K|o);nr--)B(be[nr],L);for(var ir=bi+1;ir<be.length&&oe[be[ir]]&(K|o);ir++)B(be[ir],L)}}if(M.get(K)||M.get(F)||M.get(R))for(var Si=0;Si<be.length;Si++){var ca=be[Si];if(oe[ca]&(K|F|R)){B(ca,Y);for(var rr=Si-1;rr>=0&&oe[be[rr]]&o;rr--)B(be[rr],Y);for(var sr=Si+1;sr<be.length&&oe[be[sr]]&o;sr++)B(be[sr],Y)}}if(M.get(L))for(var Kr=0,ua=ke;Kr<be.length;Kr++){var fa=be[Kr],Jr=oe[fa];Jr&L?ua===P&&B(fa,P):Jr&a&&(ua=Jr)}if(M.get(s)){var wi=_|L|O,ha=wi|P,ar=[];{for(var Wn=[],Hn=0;Hn<be.length;Hn++)if(oe[be[Hn]]&s){var Ti=pe[be[Hn]],da=void 0;if(S(Ti)!==null)if(Wn.length<63)Wn.push({char:Ti,seqIndex:Hn});else break;else if((da=y(Ti))!==null)for(var Ei=Wn.length-1;Ei>=0;Ei--){var Qr=Wn[Ei].char;if(Qr===da||Qr===y(A(Ti))||S(A(Qr))===Ti){ar.push([Wn[Ei].seqIndex,Hn]),Wn.length=Ei;break}}}ar.sort(function(pt,Gt){return pt[0]-Gt[0]})}for(var $r=0;$r<ar.length;$r++){for(var pa=ar[$r],Ai=pa[0],or=pa[1],ma=!1,Bt=0,es=Ai+1;es<or;es++){var ts=be[es];if(oe[ts]&ha){ma=!0;var ga=oe[ts]&wi?_:P;if(ga===Xn(ts)){Bt=ga;break}}}if(ma&&!Bt){Bt=ke;for(var ns=Ai-1;ns>=0;ns--){var lr=be[ns];if(oe[lr]&ha){var _a=oe[lr]&wi?_:P;_a!==Xn(lr)?Bt=_a:Bt=Xn(lr);break}}}if(Bt){if(oe[be[Ai]]=oe[be[or]]=Bt,Bt!==Xn(be[Ai])){for(var Ci=Ai+1;Ci<be.length;Ci++)if(!(oe[be[Ci]]&o)){h(pe[be[Ci]])&Z&&(oe[be[Ci]]=Bt);break}}if(Bt!==Xn(be[or])){for(var Li=or+1;Li<be.length;Li++)if(!(oe[be[Li]]&o)){h(pe[be[Li]])&Z&&(oe[be[Li]]=Bt);break}}}}for(var cn=0;cn<be.length;cn++)if(oe[be[cn]]&s){for(var va=cn,is=cn,rs=ke,Di=cn-1;Di>=0;Di--)if(oe[be[Di]]&o)va=Di;else{rs=oe[be[Di]]&wi?_:P;break}for(var xa=Mi,Pi=cn+1;Pi<be.length;Pi++)if(oe[be[Pi]]&(s|o))is=Pi;else{xa=oe[be[Pi]]&wi?_:P;break}for(var cr=va;cr<=is;cr++)oe[be[cr]]=rs===xa?rs:Xn(be[cr]);cn=is}}}for(var Ct=ve.start;Ct<=ve.end;Ct++){var Yl=$[Ct],ur=oe[Ct];if(Yl&1?ur&(P|L|O)&&$[Ct]++:ur&_?$[Ct]++:ur&(O|L)&&($[Ct]+=2),ur&o&&($[Ct]=Ct===0?ve.level:$[Ct-1]),Ct===ve.end||h(pe[Ct])&(z|D))for(var fr=Ct;fr>=0&&h(pe[fr])&c;fr--)$[fr]=ve.level}}return{levels:$,paragraphs:de};function ya(pt,Gt){for(var bt=pt;bt<pe.length;bt++){var un=oe[bt];if(un&(_|G))return 1;if(un&(D|P)||Gt&&un===J)return 0;if(un&n){var Ma=Zl(bt);bt=Ma===-1?pe.length:Ma}}return 0}function Zl(pt){for(var Gt=1,bt=pt+1;bt<pe.length;bt++){var un=oe[bt];if(un&D)break;if(un&J){if(--Gt===0)return bt}else un&n&&Gt++}return-1}function Xn(pt){return $[pt]&1?_:P}}var ae="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ge;function re(){if(!ge){var pe=m(ae,!0),Me=pe.map,Te=pe.reverseMap;Te.forEach(function(oe,w){Me.set(w,oe)}),ge=Me}}function ye(pe){return re(),ge.get(pe)||null}function Re(pe,Me,Te,oe){var w=pe.length;Te=Math.max(0,Te==null?0:+Te),oe=Math.min(w-1,oe==null?w-1:+oe);for(var M=new Map,B=Te;B<=oe;B++)if(Me[B]&1){var $=ye(pe[B]);$!==null&&M.set(B,$)}return M}function Ae(pe,Me,Te,oe){var w=pe.length;Te=Math.max(0,Te==null?0:+Te),oe=Math.min(w-1,oe==null?w-1:+oe);var M=[];return Me.paragraphs.forEach(function(B){var $=Math.max(Te,B.start),fe=Math.min(oe,B.end);if($<fe){for(var de=Me.levels.slice($,fe+1),ve=fe;ve>=$&&h(pe[ve])&c;ve--)de[ve]=B.level;for(var C=B.level,k=1/0,xe=0;xe<de.length;xe++){var ce=de[xe];ce>C&&(C=ce),ce<k&&(k=ce|1)}for(var _e=C;_e>=k;_e--)for(var me=0;me<de.length;me++)if(de[me]>=_e){for(var ue=me;me+1<de.length&&de[me+1]>=_e;)me++;me>ue&&M.push([ue+Te,me+Te])}}}),M}function Ce(pe,Me,Te,oe){var w=Fe(pe,Me,Te,oe),M=[].concat(pe);return w.forEach(function(B,$){M[$]=(Me.levels[B]&1?ye(pe[B]):null)||pe[B]}),M.join("")}function Fe(pe,Me,Te,oe){for(var w=Ae(pe,Me,Te,oe),M=[],B=0;B<pe.length;B++)M[B]=B;return w.forEach(function($){for(var fe=$[0],de=$[1],ve=M.slice(fe,de+1),C=ve.length;C--;)M[de-C]=ve[C]}),M}return e.closingToOpeningBracket=y,e.getBidiCharType=h,e.getBidiCharTypeName=p,e.getCanonicalBracket=A,e.getEmbeddingLevels=le,e.getMirroredCharacter=ye,e.getMirroredCharactersMap=Re,e.getReorderSegments=Ae,e.getReorderedIndices=Fe,e.getReorderedString=Ce,e.openingToClosingBracket=S,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return l}const Rl=/\bvoid\s+main\s*\(\s*\)\s*{/g;function $s(l){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,i){let n=ze[i];return n?$s(n):r}return l.replace(e,t)}const dt=[];for(let l=0;l<256;l++)dt[l]=(l<16?"0":"")+l.toString(16);function om(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dt[l&255]+dt[l>>8&255]+dt[l>>16&255]+dt[l>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]).toUpperCase()}const Sn=Object.assign||function(){let l=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let i in r)r.hasOwnProperty(i)&&(l[i]=r[i])}return l},lm=Date.now(),Bo=new WeakMap,Go=new Map;let cm=1e10;function ea(l,e){const t=dm(e);let r=Bo.get(l);if(r||Bo.set(l,r=Object.create(null)),r[t])return new r[t];const i=`_onBeforeCompile${t}`,n=function(c){l.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Go[u];if(!f){const h=um(c,e,t);f=Go[u]=h}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,Sn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-lm}}),this[i]&&this[i](c)},a=function(){return s(e.chained?l:l.clone())},s=function(c){const u=Object.create(c,o);return Object.defineProperty(u,"baseMaterial",{value:l}),Object.defineProperty(u,"id",{value:cm++}),u.uuid=om(),u.uniforms=Sn({},c.uniforms,e.uniforms),u.defines=Sn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Sn({},c.extensions,e.extensions),u._listeners=void 0,u},o={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return l.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return n},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return l.copy.call(this,c),!l.isShaderMaterial&&!l.isDerivedMaterial&&(Sn(this.extensions,c.extensions),Sn(this.defines,c.defines),Sn(this.uniforms,gl.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new l.constructor;return s(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=ea(l.isDerivedMaterial?l.getDepthMaterial():new Tl({depthPacking:sl}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=ea(l.isDerivedMaterial?l.getDistanceMaterial():new El,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),l.dispose.call(this)}}};return r[t]=a,new a}function um({vertexShader:l,fragmentShader:e},t,r){let{vertexDefs:i,vertexMainIntro:n,vertexMainOutro:a,vertexTransform:s,fragmentDefs:o,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:h,timeUniform:p}=t;if(i=i||"",n=n||"",a=a||"",o=o||"",c=c||"",u=u||"",(s||h)&&(l=$s(l)),(f||h)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=$s(e)),h){let g=h({vertexShader:l,fragmentShader:e});l=g.vertexShader,e=g.fragmentShader}if(f){let g=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(g.push(m),"")),u=`${f}
${g.join(`
`)}
${u}`}if(p){const g=`
uniform float ${p};
`;i=g+i,o=g+o}return s&&(l=`vec3 troika_position_${r};
vec3 troika_normal_${r};
vec2 troika_uv_${r};
${l}
`,i=`${i}
void troikaVertexTransform${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${s}
}
`,n=`
troika_position_${r} = vec3(position);
troika_normal_${r} = vec3(normal);
troika_uv_${r} = vec2(uv);
troikaVertexTransform${r}(troika_position_${r}, troika_normal_${r}, troika_uv_${r});
${n}
`,l=l.replace(/\b(position|normal|uv)\b/g,(g,m,d,v)=>/\battribute\s+vec[23]\s+$/.test(v.substr(0,d))?m:`troika_${m}_${r}`)),l=Vo(l,r,i,n,a),e=Vo(e,r,o,c,u),{vertexShader:l,fragmentShader:e}}function Vo(l,e,t,r,i){return(r||i||t)&&(l=l.replace(Rl,`
${t}
void troikaOrigMain${e}() {`),l+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${i}
}`),l}function fm(l,e){return l==="uniforms"?void 0:typeof e=="function"?e.toString():e}let hm=0;const Wo=new Map;function dm(l){const e=JSON.stringify(l,fm);let t=Wo.get(e);return t==null&&Wo.set(e,t=++hm),t}function pm(l,e,t){const{defaultFontURL:r}=t,i=Object.create(null),n=1/0,a=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,s="[^\\S\\u00A0]",o=new RegExp(`${s}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function c(x,b){function S(){const y=A=>{console.error(`Failure loading font ${x}${x===r?"":"; trying fallback"}`,A),x!==r&&(x=r,S())};try{const A=new XMLHttpRequest;A.open("get",x,!0),A.responseType="arraybuffer",A.onload=function(){if(A.status>=400)y(new Error(A.statusText));else if(A.status>0)try{const P=l(A.response);b(P)}catch(P){y(P)}},A.onerror=y,A.send()}catch(A){y(A)}}S()}function u(x,b){x||(x=r);let S=i[x];S?S.pending?S.pending.push(b):b(S):(i[x]={pending:[b]},c(x,y=>{let A=i[x].pending;i[x]=y,A.forEach(P=>P(y))}))}function f({text:x="",font:b=r,sdfGlyphSize:S=64,fontSize:y=1,letterSpacing:A=0,lineHeight:P="normal",maxWidth:_=n,direction:L,textAlign:F="left",textIndent:K=0,whiteSpace:O="normal",overflowWrap:R="normal",anchorX:D=0,anchorY:z=0,includeCaretPositions:Y=!1,chunkedBoundsSize:ie=8192,colorRanges:Z=null},G,j=!1){const T=m(),U={fontLoad:0,typesetting:0};x.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),x=x.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,A=+A,_=+_,P=P||"normal",K=+K,u(b,V=>{const X=isFinite(_);let H=null,N=null,ne=null,J=null,le=null,ae=null,ge=null,re=0,ye=0,Re=O!=="nowrap";const{ascender:Ae,descender:Ce,unitsPerEm:Fe,lineGap:pe,capHeight:Me,xHeight:Te}=V;U.fontLoad=m()-T;const oe=m(),w=y/Fe;P==="normal"&&(P=(Ae-Ce+pe)/Fe),P=P*y;const M=(P-(Ae-Ce)*w)/2,B=-(Ae*w+M),$=Math.min(P,(Ae-Ce)*w),fe=(Ae+Ce)/2*w-$/2;let de=K,ve=new d;const C=[ve];V.forEachGlyph(x,y,A,(ce,_e,me)=>{const ue=x.charAt(me),Ee=ce.advanceWidth*w,Pe=ve.count;let Ie;if("isEmpty"in ce||(ce.isWhitespace=!!ue&&new RegExp(s).test(ue),ce.canBreakAfter=!!ue&&o.test(ue),ce.isEmpty=ce.xMin===ce.xMax||ce.yMin===ce.yMax||a.test(ue)),!ce.isWhitespace&&!ce.isEmpty&&ye++,Re&&X&&!ce.isWhitespace&&_e+Ee+de>_&&Pe){if(ve.glyphAt(Pe-1).glyphObj.canBreakAfter)Ie=new d,de=-_e;else for(let ee=Pe;ee--;)if(ee===0&&R==="break-word"){Ie=new d,de=-_e;break}else if(ve.glyphAt(ee).glyphObj.canBreakAfter){Ie=ve.splitAt(ee+1);const he=Ie.glyphAt(0).x;de-=he;for(let we=Ie.count;we--;)Ie.glyphAt(we).x-=he;break}Ie&&(ve.isSoftWrapped=!0,ve=Ie,C.push(ve),re=_)}let I=ve.glyphAt(ve.count);I.glyphObj=ce,I.x=_e+de,I.width=Ee,I.charIndex=me,ue===`
`&&(ve=new d,C.push(ve),de=-(_e+Ee+A*y)+K)}),C.forEach(ce=>{for(let _e=ce.count;_e--;){let{glyphObj:me,x:ue,width:Ee}=ce.glyphAt(_e);if(!me.isWhitespace){ce.width=ue+Ee,ce.width>re&&(re=ce.width);return}}});let k=0,xe=0;if(D&&(typeof D=="number"?k=-D:typeof D=="string"&&(k=-re*(D==="left"?0:D==="center"?.5:D==="right"?1:p(D)))),z){if(typeof z=="number")xe=-z;else if(typeof z=="string"){let ce=C.length*P;xe=z==="top"?0:z==="top-baseline"?-B:z==="top-cap"?-B-Me*w:z==="top-ex"?-B-Te*w:z==="middle"?ce/2:z==="bottom"?ce:z==="bottom-baseline"?ce-M+Ce*w:p(z)*ce}}if(!j){const ce=e.getEmbeddingLevels(x,L);H=new Uint16Array(ye),N=new Float32Array(ye*2),ne={},ae=[n,n,-n,-n],ge=[];let _e=B;Y&&(le=new Float32Array(x.length*3)),Z&&(J=new Uint8Array(ye*3));let me=0,ue=-1,Ee=-1,Pe,Ie;if(C.forEach((I,ee)=>{let{count:he,width:we}=I;if(he>0){let Le=0;for(let je=he;je--&&I.glyphAt(je).glyphObj.isWhitespace;)Le++;let Ge=0,qe=0;if(F==="center")Ge=(re-we)/2;else if(F==="right")Ge=re-we;else if(F==="justify"&&I.isSoftWrapped){let je=0;for(let Xe=he-Le;Xe--;)I.glyphAt(Xe).glyphObj.isWhitespace&&je++;qe=(re-we)/je}if(qe||Ge){let je=0;for(let Xe=0;Xe<he;Xe++){let Mt=I.glyphAt(Xe);const gt=Mt.glyphObj;Mt.x+=Ge+je,qe!==0&&gt.isWhitespace&&Xe<he-Le&&(je+=qe,Mt.width+=qe)}}const Ye=e.getReorderSegments(x,ce,I.glyphAt(0).charIndex,I.glyphAt(I.count-1).charIndex);for(let je=0;je<Ye.length;je++){const[Xe,Mt]=Ye[je];let gt=1/0,Je=-1/0;for(let it=0;it<he;it++)if(I.glyphAt(it).charIndex>=Xe){let E=it,q=it;for(;q<he;q++){let te=I.glyphAt(q);if(te.charIndex>Mt)break;q<he-Le&&(gt=Math.min(gt,te.x),Je=Math.max(Je,te.x+te.width))}for(let te=E;te<q;te++){const W=I.glyphAt(te);W.x=Je-(W.x+W.width-gt)}break}}let Ze;const Ke=je=>Ze=je;for(let je=0;je<he;je++){let Xe=I.glyphAt(je);Ze=Xe.glyphObj;const Mt=Ze.index,gt=ce.levels[Xe.charIndex]&1;if(gt){const Je=e.getMirroredCharacter(x[Xe.charIndex]);Je&&V.forEachGlyph(Je,0,0,Ke)}if(Y){const{charIndex:Je}=Xe,it=Xe.x+k,E=Xe.x+Xe.width+k;le[Je*3]=gt?E:it,le[Je*3+1]=gt?it:E,le[Je*3+2]=_e+fe+xe;const q=Je-ue;q>1&&g(le,ue,q),ue=Je}if(Z){const{charIndex:Je}=Xe;for(;Je>Ee;)Ee++,Z.hasOwnProperty(Ee)&&(Ie=Z[Ee])}if(!Ze.isWhitespace&&!Ze.isEmpty){const Je=me++;ne[Mt]||(ne[Mt]={path:Ze.path,pathBounds:[Ze.xMin,Ze.yMin,Ze.xMax,Ze.yMax]});const it=Xe.x+k,E=_e+xe;N[Je*2]=it,N[Je*2+1]=E;const q=it+Ze.xMin*w,te=E+Ze.yMin*w,W=it+Ze.xMax*w,se=E+Ze.yMax*w;q<ae[0]&&(ae[0]=q),te<ae[1]&&(ae[1]=te),W>ae[2]&&(ae[2]=W),se>ae[3]&&(ae[3]=se),Je%ie===0&&(Pe={start:Je,end:Je,rect:[n,n,-n,-n]},ge.push(Pe)),Pe.end++;const De=Pe.rect;if(q<De[0]&&(De[0]=q),te<De[1]&&(De[1]=te),W>De[2]&&(De[2]=W),se>De[3]&&(De[3]=se),H[Je]=Mt,Z){const Ue=Je*3;J[Ue]=Ie>>16&255,J[Ue+1]=Ie>>8&255,J[Ue+2]=Ie&255}}}}_e-=P}),le){const I=x.length-ue;I>1&&g(le,ue,I)}}U.typesetting=m()-oe,G({glyphIds:H,glyphPositions:N,glyphData:ne,caretPositions:le,caretHeight:$,glyphColors:J,chunkedBounds:ge,fontSize:y,unitsPerEm:Fe,ascender:Ae*w,descender:Ce*w,capHeight:Me*w,xHeight:Te*w,lineHeight:P,topBaseline:B,blockBounds:[k,xe-C.length*P,k+re,xe],visibleBounds:ae,timings:U})})}function h(x,b){f(x,S=>{const[y,A,P,_]=S.blockBounds;b({width:P-y,height:_-A})},{metricsOnly:!0})}function p(x){let b=x.match(/^([\d.]+)%$/),S=b?parseFloat(b[1]):NaN;return isNaN(S)?0:S/100}function g(x,b,S){const y=x[b*3],A=x[b*3+1],P=x[b*3+2],_=(A-y)/S;for(let L=0;L<S;L++){const F=(b+L)*3;x[F]=y+_*L,x[F+1]=y+_*(L+1),x[F+2]=P}}function m(){return(self.performance||Date).now()}function d(){this.data=[]}const v=["glyphObj","x","width","charIndex"];return d.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/v.length)},glyphAt(x){let b=d.flyweight;return b.data=this.data,b.index=x,b},splitAt(x){let b=new d;return b.data=this.data.splice(x*v.length),b}},d.flyweight=v.reduce((x,b,S,y)=>(Object.defineProperty(x,b,{get(){return this.data[this.index*v.length+S]},set(A){this.data[this.index*v.length+S]=A}}),x),{data:null,index:0}),{typeset:f,measure:h,loadFont:u}}const Pn=()=>(self.performance||Date).now(),Hr=Pl();let Ho;function mm(l,e,t,r,i,n,a,s,o,c,u=!0){return u?_m(l,e,t,r,i,n,a,s,o,c).then(null,f=>(Ho||(console.warn("WebGL SDF generation failed, falling back to JS",f),Ho=!0),qo(l,e,t,r,i,n,a,s,o,c))):qo(l,e,t,r,i,n,a,s,o,c)}const Br=[],gm=5;let ta=0;function Ul(){const l=Pn();for(;Br.length&&Pn()-l<gm;)Br.shift()();ta=Br.length?setTimeout(Ul,0):0}const _m=(...l)=>new Promise((e,t)=>{Br.push(()=>{const r=Pn();try{Hr.webgl.generateIntoCanvas(...l),e({timing:Pn()-r})}catch(i){t(i)}}),ta||(ta=setTimeout(Ul,0))}),vm=4,xm=2e3,Xo={};let ym=0;function qo(l,e,t,r,i,n,a,s,o,c){const u="TroikaTextSDFGenerator_JS_"+ym++%vm;let f=Xo[u];return f||(f=Xo[u]={workerModule:tr({name:u,workerId:u,dependencies:[Pl,Pn],init(h,p){const g=h().javascript.generate;return function(...m){const d=p();return{textureData:g(...m),timing:p()-d}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(l,e,t,r,i,n).then(({textureData:h,timing:p})=>{const g=Pn(),m=new Uint8Array(h.length*4);for(let d=0;d<h.length;d++)m[d*4+c]=h[d];return Hr.webglUtils.renderImageData(a,m,s,o,l,e,1<<3-c),p+=Pn()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{rm(u)},xm)),{timing:p}})}function Mm(l){l._warm||(Hr.webgl.isSupported(l),l._warm=!0)}const bm=Hr.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Sm(){return typeof window>"u"&&(self.window=self),function(l){var e={parse:function(i){var n=e._bin,a=new Uint8Array(i);if(n.readASCII(a,0,4)=="ttcf"){var s=4;n.readUshort(a,s),s+=2,n.readUshort(a,s),s+=2;var o=n.readUint(a,s);s+=4;for(var c=[],u=0;u<o;u++){var f=n.readUint(a,s);s+=4,c.push(e._readFont(a,f))}return c}return[e._readFont(a,0)]},_readFont:function(i,n){var a=e._bin,s=n;a.readFixed(i,n),n+=4;var o=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:i,_offset:s},f={},h=0;h<o;h++){var p=a.readASCII(i,n,4);n+=4,a.readUint(i,n),n+=4;var g=a.readUint(i,n);n+=4;var m=a.readUint(i,n);n+=4,f[p]={offset:g,length:m}}for(h=0;h<c.length;h++){var d=c[h];f[d]&&(u[d.trim()]=e[d.trim()].parse(i,f[d].offset,f[d].length,u))}return u},_tabOffset:function(i,n,a){for(var s=e._bin,o=s.readUshort(i,a+4),c=a+12,u=0;u<o;u++){var f=s.readASCII(i,c,4);c+=4,s.readUint(i,c),c+=4;var h=s.readUint(i,c);if(c+=4,s.readUint(i,c),c+=4,f==n)return h}return 0}};e._bin={readFixed:function(i,n){return(i[n]<<8|i[n+1])+(i[n+2]<<8|i[n+3])/65540},readF2dot14:function(i,n){return e._bin.readShort(i,n)/16384},readInt:function(i,n){return e._bin._view(i).getInt32(n)},readInt8:function(i,n){return e._bin._view(i).getInt8(n)},readShort:function(i,n){return e._bin._view(i).getInt16(n)},readUshort:function(i,n){return e._bin._view(i).getUint16(n)},readUshorts:function(i,n,a){for(var s=[],o=0;o<a;o++)s.push(e._bin.readUshort(i,n+2*o));return s},readUint:function(i,n){return e._bin._view(i).getUint32(n)},readUint64:function(i,n){return 4294967296*e._bin.readUint(i,n)+e._bin.readUint(i,n+4)},readASCII:function(i,n,a){for(var s="",o=0;o<a;o++)s+=String.fromCharCode(i[n+o]);return s},readUnicode:function(i,n,a){for(var s="",o=0;o<a;o++){var c=i[n++]<<8|i[n++];s+=String.fromCharCode(c)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,n,a){var s=e._bin._tdec;return s&&n==0&&a==i.length?s.decode(i):e._bin.readASCII(i,n,a)},readBytes:function(i,n,a){for(var s=[],o=0;o<a;o++)s.push(i[n+o]);return s},readASCIIArray:function(i,n,a){for(var s=[],o=0;o<a;o++)s.push(String.fromCharCode(i[n+o]));return s},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,n,a,s,o){var c=e._bin,u={},f=n;c.readFixed(i,n),n+=4;var h=c.readUshort(i,n);n+=2;var p=c.readUshort(i,n);n+=2;var g=c.readUshort(i,n);return n+=2,u.scriptList=e._lctf.readScriptList(i,f+h),u.featureList=e._lctf.readFeatureList(i,f+p),u.lookupList=e._lctf.readLookupList(i,f+g,o),u},e._lctf.readLookupList=function(i,n,a){var s=e._bin,o=n,c=[],u=s.readUshort(i,n);n+=2;for(var f=0;f<u;f++){var h=s.readUshort(i,n);n+=2;var p=e._lctf.readLookupTable(i,o+h,a);c.push(p)}return c},e._lctf.readLookupTable=function(i,n,a){var s=e._bin,o=n,c={tabs:[]};c.ltype=s.readUshort(i,n),n+=2,c.flag=s.readUshort(i,n),n+=2;var u=s.readUshort(i,n);n+=2;for(var f=c.ltype,h=0;h<u;h++){var p=s.readUshort(i,n);n+=2;var g=a(i,f,o+p,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(i){for(var n=0,a=0;a<32;a++)i>>>a&1&&n++;return n},e._lctf.readClassDef=function(i,n){var a=e._bin,s=[],o=a.readUshort(i,n);if(n+=2,o==1){var c=a.readUshort(i,n);n+=2;var u=a.readUshort(i,n);n+=2;for(var f=0;f<u;f++)s.push(c+f),s.push(c+f),s.push(a.readUshort(i,n)),n+=2}if(o==2){var h=a.readUshort(i,n);for(n+=2,f=0;f<h;f++)s.push(a.readUshort(i,n)),n+=2,s.push(a.readUshort(i,n)),n+=2,s.push(a.readUshort(i,n)),n+=2}return s},e._lctf.getInterval=function(i,n){for(var a=0;a<i.length;a+=3){var s=i[a],o=i[a+1];if(i[a+2],s<=n&&n<=o)return a}return-1},e._lctf.readCoverage=function(i,n){var a=e._bin,s={};s.fmt=a.readUshort(i,n),n+=2;var o=a.readUshort(i,n);return n+=2,s.fmt==1&&(s.tab=a.readUshorts(i,n,o)),s.fmt==2&&(s.tab=a.readUshorts(i,n,3*o)),s},e._lctf.coverageIndex=function(i,n){var a=i.tab;if(i.fmt==1)return a.indexOf(n);if(i.fmt==2){var s=e._lctf.getInterval(a,n);if(s!=-1)return a[s+2]+(n-a[s])}return-1},e._lctf.readFeatureList=function(i,n){var a=e._bin,s=n,o=[],c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var f=a.readASCII(i,n,4);n+=4;var h=a.readUshort(i,n);n+=2;var p=e._lctf.readFeatureTable(i,s+h);p.tag=f.trim(),o.push(p)}return o},e._lctf.readFeatureTable=function(i,n){var a=e._bin,s=n,o={},c=a.readUshort(i,n);n+=2,c>0&&(o.featureParams=s+c);var u=a.readUshort(i,n);n+=2,o.tab=[];for(var f=0;f<u;f++)o.tab.push(a.readUshort(i,n+2*f));return o},e._lctf.readScriptList=function(i,n){var a=e._bin,s=n,o={},c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var f=a.readASCII(i,n,4);n+=4;var h=a.readUshort(i,n);n+=2,o[f.trim()]=e._lctf.readScriptTable(i,s+h)}return o},e._lctf.readScriptTable=function(i,n){var a=e._bin,s=n,o={},c=a.readUshort(i,n);n+=2,o.default=e._lctf.readLangSysTable(i,s+c);var u=a.readUshort(i,n);n+=2;for(var f=0;f<u;f++){var h=a.readASCII(i,n,4);n+=4;var p=a.readUshort(i,n);n+=2,o[h.trim()]=e._lctf.readLangSysTable(i,s+p)}return o},e._lctf.readLangSysTable=function(i,n){var a=e._bin,s={};a.readUshort(i,n),n+=2,s.reqFeature=a.readUshort(i,n),n+=2;var o=a.readUshort(i,n);return n+=2,s.features=a.readUshorts(i,n,o),s},e.CFF={},e.CFF.parse=function(i,n,a){var s=e._bin;(i=new Uint8Array(i.buffer,n,a))[n=0],i[++n],i[++n],i[++n],n++;var o=[];n=e.CFF.readIndex(i,n,o);for(var c=[],u=0;u<o.length-1;u++)c.push(s.readASCII(i,n+o[u],o[u+1]-o[u]));n+=o[o.length-1];var f=[];n=e.CFF.readIndex(i,n,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(i,n+f[u],n+f[u+1]));n+=f[f.length-1];var p=h[0],g=[];n=e.CFF.readIndex(i,n,g);var m=[];for(u=0;u<g.length-1;u++)m.push(s.readASCII(i,n+g[u],g[u+1]-g[u]));if(n+=g[g.length-1],e.CFF.readSubrs(i,n,p),p.CharStrings){n=p.CharStrings,g=[],n=e.CFF.readIndex(i,n,g);var d=[];for(u=0;u<g.length-1;u++)d.push(s.readBytes(i,n+g[u],g[u+1]-g[u]));p.CharStrings=d}if(p.ROS){n=p.FDArray;var v=[];for(n=e.CFF.readIndex(i,n,v),p.FDArray=[],u=0;u<v.length-1;u++){var x=e.CFF.readDict(i,n+v[u],n+v[u+1]);e.CFF._readFDict(i,x,m),p.FDArray.push(x)}n+=v[v.length-1],n=p.FDSelect,p.FDSelect=[];var b=i[n];if(n++,b!=3)throw b;var S=s.readUshort(i,n);for(n+=2,u=0;u<S+1;u++)p.FDSelect.push(s.readUshort(i,n),i[n+2]),n+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(i,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(i,p.charset,p.CharStrings.length)),e.CFF._readFDict(i,p,m),p},e.CFF._readFDict=function(i,n,a){var s;for(var o in n.Private&&(s=n.Private[1],n.Private=e.CFF.readDict(i,s,s+n.Private[0]),n.Private.Subrs&&e.CFF.readSubrs(i,s+n.Private.Subrs,n.Private)),n)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(o)!=-1&&(n[o]=a[n[o]-426+35])},e.CFF.readSubrs=function(i,n,a){var s=e._bin,o=[];n=e.CFF.readIndex(i,n,o);var c,u=o.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var f=0;f<o.length-1;f++)a.Subrs.push(s.readBytes(i,n+o[f],o[f+1]-o[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,n){for(var a=0;a<i.charset.length;a++)if(i.charset[a]==n)return a;return-1},e.CFF.glyphBySE=function(i,n){return n<0||n>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[n])},e.CFF.readEncoding=function(i,n,a){e._bin;var s=[".notdef"],o=i[n];if(n++,o!=0)throw"error: unknown encoding format: "+o;var c=i[n];n++;for(var u=0;u<c;u++)s.push(i[n+u]);return s},e.CFF.readCharset=function(i,n,a){var s=e._bin,o=[".notdef"],c=i[n];if(n++,c==0)for(var u=0;u<a;u++){var f=s.readUshort(i,n);n+=2,o.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;o.length<a;){f=s.readUshort(i,n),n+=2;var h=0;for(c==1?(h=i[n],n++):(h=s.readUshort(i,n),n+=2),u=0;u<=h;u++)o.push(f),f++}}return o},e.CFF.readIndex=function(i,n,a){var s=e._bin,o=s.readUshort(i,n)+1,c=i[n+=2];if(n++,c==1)for(var u=0;u<o;u++)a.push(i[n+u]);else if(c==2)for(u=0;u<o;u++)a.push(s.readUshort(i,n+2*u));else if(c==3)for(u=0;u<o;u++)a.push(16777215&s.readUint(i,n+3*u-1));else if(o!=1)throw"unsupported offset size: "+c+", count: "+o;return(n+=o*c)-1},e.CFF.getCharString=function(i,n,a){var s=e._bin,o=i[n],c=i[n+1];i[n+2],i[n+3],i[n+4];var u=1,f=null,h=null;o<=20&&(f=o,u=1),o==12&&(f=100*o+c,u=2),21<=o&&o<=27&&(f=o,u=1),o==28&&(h=s.readShort(i,n+1),u=3),29<=o&&o<=31&&(f=o,u=1),32<=o&&o<=246&&(h=o-139,u=1),247<=o&&o<=250&&(h=256*(o-247)+c+108,u=2),251<=o&&o<=254&&(h=256*-(o-251)-c-108,u=2),o==255&&(h=s.readInt(i,n+1)/65535,u=5),a.val=h??"o"+f,a.size=u},e.CFF.readCharString=function(i,n,a){for(var s=n+a,o=e._bin,c=[];n<s;){var u=i[n],f=i[n+1];i[n+2],i[n+3],i[n+4];var h=1,p=null,g=null;u<=20&&(p=u,h=1),u==12&&(p=100*u+f,h=2),u!=19&&u!=20||(p=u,h=2),21<=u&&u<=27&&(p=u,h=1),u==28&&(g=o.readShort(i,n+1),h=3),29<=u&&u<=31&&(p=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=o.readInt(i,n+1)/65535,h=5),c.push(g??"o"+p),n+=h}return c},e.CFF.readDict=function(i,n,a){for(var s=e._bin,o={},c=[];n<a;){var u=i[n],f=i[n+1];i[n+2],i[n+3],i[n+4];var h=1,p=null,g=null;if(u==28&&(g=s.readShort(i,n+1),h=3),u==29&&(g=s.readInt(i,n+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=s.readInt(i,n+1)/65535,h=5,"unknown number";if(u==30){var m=[];for(h=1;;){var d=i[n+h];h++;var v=d>>4,x=15&d;if(v!=15&&m.push(v),x!=15&&m.push(x),x==15)break}for(var b="",S=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],y=0;y<m.length;y++)b+=S[m[y]];g=parseFloat(b)}u<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),p!=null?(o[p]=c.length==1?c[0]:c,c=[]):c.push(g),n+=h}return o},e.cmap={},e.cmap.parse=function(i,n,a){i=new Uint8Array(i.buffer,n,a),n=0;var s=e._bin,o={};s.readUshort(i,n),n+=2;var c=s.readUshort(i,n);n+=2;var u=[];o.tables=[];for(var f=0;f<c;f++){var h=s.readUshort(i,n);n+=2;var p=s.readUshort(i,n);n+=2;var g=s.readUint(i,n);n+=4;var m="p"+h+"e"+p,d=u.indexOf(g);if(d==-1){var v;d=o.tables.length,u.push(g);var x=s.readUshort(i,g);x==0?v=e.cmap.parse0(i,g):x==4?v=e.cmap.parse4(i,g):x==6?v=e.cmap.parse6(i,g):x==12?v=e.cmap.parse12(i,g):console.debug("unknown format: "+x,h,p,g),o.tables.push(v)}if(o[m]!=null)throw"multiple tables for one platform+encoding";o[m]=d}return o},e.cmap.parse0=function(i,n){var a=e._bin,s={};s.format=a.readUshort(i,n),n+=2;var o=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2,s.map=[];for(var c=0;c<o-6;c++)s.map.push(i[n+c]);return s},e.cmap.parse4=function(i,n){var a=e._bin,s=n,o={};o.format=a.readUshort(i,n),n+=2;var c=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2;var u=a.readUshort(i,n);n+=2;var f=u/2;o.searchRange=a.readUshort(i,n),n+=2,o.entrySelector=a.readUshort(i,n),n+=2,o.rangeShift=a.readUshort(i,n),n+=2,o.endCount=a.readUshorts(i,n,f),n+=2*f,n+=2,o.startCount=a.readUshorts(i,n,f),n+=2*f,o.idDelta=[];for(var h=0;h<f;h++)o.idDelta.push(a.readShort(i,n)),n+=2;for(o.idRangeOffset=a.readUshorts(i,n,f),n+=2*f,o.glyphIdArray=[];n<s+c;)o.glyphIdArray.push(a.readUshort(i,n)),n+=2;return o},e.cmap.parse6=function(i,n){var a=e._bin,s={};s.format=a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,s.firstCode=a.readUshort(i,n),n+=2;var o=a.readUshort(i,n);n+=2,s.glyphIdArray=[];for(var c=0;c<o;c++)s.glyphIdArray.push(a.readUshort(i,n)),n+=2;return s},e.cmap.parse12=function(i,n){var a=e._bin,s={};s.format=a.readUshort(i,n),n+=2,n+=2,a.readUint(i,n),n+=4,a.readUint(i,n),n+=4;var o=a.readUint(i,n);n+=4,s.groups=[];for(var c=0;c<o;c++){var u=n+12*c,f=a.readUint(i,u+0),h=a.readUint(i,u+4),p=a.readUint(i,u+8);s.groups.push([f,h,p])}return s},e.glyf={},e.glyf.parse=function(i,n,a,s){for(var o=[],c=0;c<s.maxp.numGlyphs;c++)o.push(null);return o},e.glyf._parseGlyf=function(i,n){var a=e._bin,s=i._data,o=e._tabOffset(s,"glyf",i._offset)+i.loca[n];if(i.loca[n]==i.loca[n+1])return null;var c={};if(c.noc=a.readShort(s,o),o+=2,c.xMin=a.readShort(s,o),o+=2,c.yMin=a.readShort(s,o),o+=2,c.xMax=a.readShort(s,o),o+=2,c.yMax=a.readShort(s,o),o+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(s,o)),o+=2;var f=a.readUshort(s,o);if(o+=2,s.length-o<f)return null;c.instructions=a.readBytes(s,o,f),o+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var p=s[o];if(o++,c.flags.push(p),(8&p)!=0){var g=s[o];o++;for(var m=0;m<g;m++)c.flags.push(p),u++}}for(c.xs=[],u=0;u<h;u++){var d=(2&c.flags[u])!=0,v=(16&c.flags[u])!=0;d?(c.xs.push(v?s[o]:-s[o]),o++):v?c.xs.push(0):(c.xs.push(a.readShort(s,o)),o+=2)}for(c.ys=[],u=0;u<h;u++)d=(4&c.flags[u])!=0,v=(32&c.flags[u])!=0,d?(c.ys.push(v?s[o]:-s[o]),o++):v?c.ys.push(0):(c.ys.push(a.readShort(s,o)),o+=2);var x=0,b=0;for(u=0;u<h;u++)x+=c.xs[u],b+=c.ys[u],c.xs[u]=x,c.ys[u]=b}else{var S;c.parts=[];do{S=a.readUshort(s,o),o+=2;var y={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(y),y.glyphIndex=a.readUshort(s,o),o+=2,1&S){var A=a.readShort(s,o);o+=2;var P=a.readShort(s,o);o+=2}else A=a.readInt8(s,o),o++,P=a.readInt8(s,o),o++;2&S?(y.m.tx=A,y.m.ty=P):(y.p1=A,y.p2=P),8&S?(y.m.a=y.m.d=a.readF2dot14(s,o),o+=2):64&S?(y.m.a=a.readF2dot14(s,o),o+=2,y.m.d=a.readF2dot14(s,o),o+=2):128&S&&(y.m.a=a.readF2dot14(s,o),o+=2,y.m.b=a.readF2dot14(s,o),o+=2,y.m.c=a.readF2dot14(s,o),o+=2,y.m.d=a.readF2dot14(s,o),o+=2)}while(32&S);if(256&S){var _=a.readUshort(s,o);for(o+=2,c.instr=[],u=0;u<_;u++)c.instr.push(s[o]),o++}}return c},e.GPOS={},e.GPOS.parse=function(i,n,a,s){return e._lctf.parse(i,n,a,s,e.GPOS.subt)},e.GPOS.subt=function(i,n,a,s){var o=e._bin,c=a,u={};if(u.fmt=o.readUshort(i,a),a+=2,n==1||n==2||n==3||n==7||n==8&&u.fmt<=2){var f=o.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,f+c)}if(n==1&&u.fmt==1){var h=o.readUshort(i,a);a+=2;var p=e._lctf.numOfOnes(h);h!=0&&(u.pos=e.GPOS.readValueRecord(i,a,h))}else if(n==2&&u.fmt>=1&&u.fmt<=2){h=o.readUshort(i,a),a+=2;var g=o.readUshort(i,a);a+=2,p=e._lctf.numOfOnes(h);var m=e._lctf.numOfOnes(g);if(u.fmt==1){u.pairsets=[];var d=o.readUshort(i,a);a+=2;for(var v=0;v<d;v++){var x=c+o.readUshort(i,a);a+=2;var b=o.readUshort(i,x);x+=2;for(var S=[],y=0;y<b;y++){var A=o.readUshort(i,x);x+=2,h!=0&&(O=e.GPOS.readValueRecord(i,x,h),x+=2*p),g!=0&&(R=e.GPOS.readValueRecord(i,x,g),x+=2*m),S.push({gid2:A,val1:O,val2:R})}u.pairsets.push(S)}}if(u.fmt==2){var P=o.readUshort(i,a);a+=2;var _=o.readUshort(i,a);a+=2;var L=o.readUshort(i,a);a+=2;var F=o.readUshort(i,a);for(a+=2,u.classDef1=e._lctf.readClassDef(i,c+P),u.classDef2=e._lctf.readClassDef(i,c+_),u.matrix=[],v=0;v<L;v++){var K=[];for(y=0;y<F;y++){var O=null,R=null;h!=0&&(O=e.GPOS.readValueRecord(i,a,h),a+=2*p),g!=0&&(R=e.GPOS.readValueRecord(i,a,g),a+=2*m),K.push({val1:O,val2:R})}u.matrix.push(K)}}}else{if(n==9&&u.fmt==1){var D=o.readUshort(i,a);a+=2;var z=o.readUint(i,a);if(a+=4,s.ltype==9)s.ltype=D;else if(s.ltype!=D)throw"invalid extension substitution";return e.GPOS.subt(i,s.ltype,c+z)}console.debug("unsupported GPOS table LookupType",n,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,n,a){var s=e._bin,o=[];return o.push(1&a?s.readShort(i,n):0),n+=1&a?2:0,o.push(2&a?s.readShort(i,n):0),n+=2&a?2:0,o.push(4&a?s.readShort(i,n):0),n+=4&a?2:0,o.push(8&a?s.readShort(i,n):0),n+=8&a?2:0,o},e.GSUB={},e.GSUB.parse=function(i,n,a,s){return e._lctf.parse(i,n,a,s,e.GSUB.subt)},e.GSUB.subt=function(i,n,a,s){var o=e._bin,c=a,u={};if(u.fmt=o.readUshort(i,a),a+=2,n!=1&&n!=4&&n!=5&&n!=6)return null;if(n==1||n==4||n==5&&u.fmt<=2||n==6&&u.fmt<=2){var f=o.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,c+f)}if(n==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=o.readShort(i,a),a+=2;else if(u.fmt==2){var h=o.readUshort(i,a);a+=2,u.newg=o.readUshorts(i,a,h),a+=2*u.newg.length}}else if(n==4){u.vals=[],h=o.readUshort(i,a),a+=2;for(var p=0;p<h;p++){var g=o.readUshort(i,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+g))}}else if(n==5&&u.fmt==2){if(u.fmt==2){var m=o.readUshort(i,a);a+=2,u.cDef=e._lctf.readClassDef(i,c+m),u.scset=[];var d=o.readUshort(i,a);for(a+=2,p=0;p<d;p++){var v=o.readUshort(i,a);a+=2,u.scset.push(v==0?null:e.GSUB.readSubClassSet(i,c+v))}}}else if(n==6&&u.fmt==3){if(u.fmt==3){for(p=0;p<3;p++){h=o.readUshort(i,a),a+=2;for(var x=[],b=0;b<h;b++)x.push(e._lctf.readCoverage(i,c+o.readUshort(i,a+2*b)));a+=2*h,p==0&&(u.backCvg=x),p==1&&(u.inptCvg=x),p==2&&(u.ahedCvg=x)}h=o.readUshort(i,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,a,h)}}else{if(n==7&&u.fmt==1){var S=o.readUshort(i,a);a+=2;var y=o.readUint(i,a);if(a+=4,s.ltype==9)s.ltype=S;else if(s.ltype!=S)throw"invalid extension substitution";return e.GSUB.subt(i,s.ltype,c+y)}console.debug("unsupported GSUB table LookupType",n,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,n){var a=e._bin.readUshort,s=n,o=[],c=a(i,n);n+=2;for(var u=0;u<c;u++){var f=a(i,n);n+=2,o.push(e.GSUB.readSubClassRule(i,s+f))}return o},e.GSUB.readSubClassRule=function(i,n){var a=e._bin.readUshort,s={},o=a(i,n),c=a(i,n+=2);n+=2,s.input=[];for(var u=0;u<o-1;u++)s.input.push(a(i,n)),n+=2;return s.substLookupRecords=e.GSUB.readSubstLookupRecords(i,n,c),s},e.GSUB.readSubstLookupRecords=function(i,n,a){for(var s=e._bin.readUshort,o=[],c=0;c<a;c++)o.push(s(i,n),s(i,n+2)),n+=4;return o},e.GSUB.readChainSubClassSet=function(i,n){var a=e._bin,s=n,o=[],c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var f=a.readUshort(i,n);n+=2,o.push(e.GSUB.readChainSubClassRule(i,s+f))}return o},e.GSUB.readChainSubClassRule=function(i,n){for(var a=e._bin,s={},o=["backtrack","input","lookahead"],c=0;c<o.length;c++){var u=a.readUshort(i,n);n+=2,c==1&&u--,s[o[c]]=a.readUshorts(i,n,u),n+=2*s[o[c]].length}return u=a.readUshort(i,n),n+=2,s.subst=a.readUshorts(i,n,2*u),n+=2*s.subst.length,s},e.GSUB.readLigatureSet=function(i,n){var a=e._bin,s=n,o=[],c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var f=a.readUshort(i,n);n+=2,o.push(e.GSUB.readLigature(i,s+f))}return o},e.GSUB.readLigature=function(i,n){var a=e._bin,s={chain:[]};s.nglyph=a.readUshort(i,n),n+=2;var o=a.readUshort(i,n);n+=2;for(var c=0;c<o-1;c++)s.chain.push(a.readUshort(i,n)),n+=2;return s},e.head={},e.head.parse=function(i,n,a){var s=e._bin,o={};return s.readFixed(i,n),n+=4,o.fontRevision=s.readFixed(i,n),n+=4,s.readUint(i,n),n+=4,s.readUint(i,n),n+=4,o.flags=s.readUshort(i,n),n+=2,o.unitsPerEm=s.readUshort(i,n),n+=2,o.created=s.readUint64(i,n),n+=8,o.modified=s.readUint64(i,n),n+=8,o.xMin=s.readShort(i,n),n+=2,o.yMin=s.readShort(i,n),n+=2,o.xMax=s.readShort(i,n),n+=2,o.yMax=s.readShort(i,n),n+=2,o.macStyle=s.readUshort(i,n),n+=2,o.lowestRecPPEM=s.readUshort(i,n),n+=2,o.fontDirectionHint=s.readShort(i,n),n+=2,o.indexToLocFormat=s.readShort(i,n),n+=2,o.glyphDataFormat=s.readShort(i,n),n+=2,o},e.hhea={},e.hhea.parse=function(i,n,a){var s=e._bin,o={};return s.readFixed(i,n),n+=4,o.ascender=s.readShort(i,n),n+=2,o.descender=s.readShort(i,n),n+=2,o.lineGap=s.readShort(i,n),n+=2,o.advanceWidthMax=s.readUshort(i,n),n+=2,o.minLeftSideBearing=s.readShort(i,n),n+=2,o.minRightSideBearing=s.readShort(i,n),n+=2,o.xMaxExtent=s.readShort(i,n),n+=2,o.caretSlopeRise=s.readShort(i,n),n+=2,o.caretSlopeRun=s.readShort(i,n),n+=2,o.caretOffset=s.readShort(i,n),n+=2,n+=8,o.metricDataFormat=s.readShort(i,n),n+=2,o.numberOfHMetrics=s.readUshort(i,n),n+=2,o},e.hmtx={},e.hmtx.parse=function(i,n,a,s){for(var o=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<s.maxp.numGlyphs;h++)h<s.hhea.numberOfHMetrics&&(u=o.readUshort(i,n),n+=2,f=o.readShort(i,n),n+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(i,n,a,s){var o=e._bin,c=o.readUshort(i,n);if(n+=2,c==1)return e.kern.parseV1(i,n-2,a,s);var u=o.readUshort(i,n);n+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){n+=2,a=o.readUshort(i,n),n+=2;var p=o.readUshort(i,n);n+=2;var g=p>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;n=e.kern.readFormat0(i,n,f)}return f},e.kern.parseV1=function(i,n,a,s){var o=e._bin;o.readFixed(i,n),n+=4;var c=o.readUint(i,n);n+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){o.readUint(i,n),n+=4;var h=o.readUshort(i,n);n+=2,o.readUshort(i,n),n+=2;var p=h>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;n=e.kern.readFormat0(i,n,u)}return u},e.kern.readFormat0=function(i,n,a){var s=e._bin,o=-1,c=s.readUshort(i,n);n+=2,s.readUshort(i,n),n+=2,s.readUshort(i,n),n+=2,s.readUshort(i,n),n+=2;for(var u=0;u<c;u++){var f=s.readUshort(i,n);n+=2;var h=s.readUshort(i,n);n+=2;var p=s.readShort(i,n);n+=2,f!=o&&(a.glyph1.push(f),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(h),g.vals.push(p),o=f}return n},e.loca={},e.loca.parse=function(i,n,a,s){var o=e._bin,c=[],u=s.head.indexToLocFormat,f=s.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(o.readUshort(i,n+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(o.readUint(i,n+(h<<2)));return c},e.maxp={},e.maxp.parse=function(i,n,a){var s=e._bin,o={},c=s.readUint(i,n);return n+=4,o.numGlyphs=s.readUshort(i,n),n+=2,c==65536&&(o.maxPoints=s.readUshort(i,n),n+=2,o.maxContours=s.readUshort(i,n),n+=2,o.maxCompositePoints=s.readUshort(i,n),n+=2,o.maxCompositeContours=s.readUshort(i,n),n+=2,o.maxZones=s.readUshort(i,n),n+=2,o.maxTwilightPoints=s.readUshort(i,n),n+=2,o.maxStorage=s.readUshort(i,n),n+=2,o.maxFunctionDefs=s.readUshort(i,n),n+=2,o.maxInstructionDefs=s.readUshort(i,n),n+=2,o.maxStackElements=s.readUshort(i,n),n+=2,o.maxSizeOfInstructions=s.readUshort(i,n),n+=2,o.maxComponentElements=s.readUshort(i,n),n+=2,o.maxComponentDepth=s.readUshort(i,n),n+=2),o},e.name={},e.name.parse=function(i,n,a){var s=e._bin,o={};s.readUshort(i,n),n+=2;var c=s.readUshort(i,n);n+=2,s.readUshort(i,n);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=n+=2,p=0;p<c;p++){var g=s.readUshort(i,n);n+=2;var m=s.readUshort(i,n);n+=2;var d=s.readUshort(i,n);n+=2;var v=s.readUshort(i,n);n+=2;var x=s.readUshort(i,n);n+=2;var b=s.readUshort(i,n);n+=2;var S,y=f[v],A=h+12*c+b;if(g==0)S=s.readUnicode(i,A,x/2);else if(g==3&&m==0)S=s.readUnicode(i,A,x/2);else if(m==0)S=s.readASCII(i,A,x);else if(m==1)S=s.readUnicode(i,A,x/2);else if(m==3)S=s.readUnicode(i,A,x/2);else{if(g!=1)throw"unknown encoding "+m+", platformID: "+g;S=s.readASCII(i,A,x),console.debug("reading unknown MAC encoding "+m+" as ASCII")}var P="p"+g+","+d.toString(16);o[P]==null&&(o[P]={}),o[P][y!==void 0?y:v]=S,o[P]._lang=d}for(var _ in o)if(o[_].postScriptName!=null&&o[_]._lang==1033)return o[_];for(var _ in o)if(o[_].postScriptName!=null&&o[_]._lang==0)return o[_];for(var _ in o)if(o[_].postScriptName!=null&&o[_]._lang==3084)return o[_];for(var _ in o)if(o[_].postScriptName!=null)return o[_];for(var _ in o){u=_;break}return console.debug("returning name table with languageID "+o[u]._lang),o[u]},e["OS/2"]={},e["OS/2"].parse=function(i,n,a){var s=e._bin.readUshort(i,n);n+=2;var o={};if(s==0)e["OS/2"].version0(i,n,o);else if(s==1)e["OS/2"].version1(i,n,o);else if(s==2||s==3||s==4)e["OS/2"].version2(i,n,o);else{if(s!=5)throw"unknown OS/2 table version: "+s;e["OS/2"].version5(i,n,o)}return o},e["OS/2"].version0=function(i,n,a){var s=e._bin;return a.xAvgCharWidth=s.readShort(i,n),n+=2,a.usWeightClass=s.readUshort(i,n),n+=2,a.usWidthClass=s.readUshort(i,n),n+=2,a.fsType=s.readUshort(i,n),n+=2,a.ySubscriptXSize=s.readShort(i,n),n+=2,a.ySubscriptYSize=s.readShort(i,n),n+=2,a.ySubscriptXOffset=s.readShort(i,n),n+=2,a.ySubscriptYOffset=s.readShort(i,n),n+=2,a.ySuperscriptXSize=s.readShort(i,n),n+=2,a.ySuperscriptYSize=s.readShort(i,n),n+=2,a.ySuperscriptXOffset=s.readShort(i,n),n+=2,a.ySuperscriptYOffset=s.readShort(i,n),n+=2,a.yStrikeoutSize=s.readShort(i,n),n+=2,a.yStrikeoutPosition=s.readShort(i,n),n+=2,a.sFamilyClass=s.readShort(i,n),n+=2,a.panose=s.readBytes(i,n,10),n+=10,a.ulUnicodeRange1=s.readUint(i,n),n+=4,a.ulUnicodeRange2=s.readUint(i,n),n+=4,a.ulUnicodeRange3=s.readUint(i,n),n+=4,a.ulUnicodeRange4=s.readUint(i,n),n+=4,a.achVendID=[s.readInt8(i,n),s.readInt8(i,n+1),s.readInt8(i,n+2),s.readInt8(i,n+3)],n+=4,a.fsSelection=s.readUshort(i,n),n+=2,a.usFirstCharIndex=s.readUshort(i,n),n+=2,a.usLastCharIndex=s.readUshort(i,n),n+=2,a.sTypoAscender=s.readShort(i,n),n+=2,a.sTypoDescender=s.readShort(i,n),n+=2,a.sTypoLineGap=s.readShort(i,n),n+=2,a.usWinAscent=s.readUshort(i,n),n+=2,a.usWinDescent=s.readUshort(i,n),n+=2},e["OS/2"].version1=function(i,n,a){var s=e._bin;return n=e["OS/2"].version0(i,n,a),a.ulCodePageRange1=s.readUint(i,n),n+=4,a.ulCodePageRange2=s.readUint(i,n),n+=4},e["OS/2"].version2=function(i,n,a){var s=e._bin;return n=e["OS/2"].version1(i,n,a),a.sxHeight=s.readShort(i,n),n+=2,a.sCapHeight=s.readShort(i,n),n+=2,a.usDefault=s.readUshort(i,n),n+=2,a.usBreak=s.readUshort(i,n),n+=2,a.usMaxContext=s.readUshort(i,n),n+=2},e["OS/2"].version5=function(i,n,a){var s=e._bin;return n=e["OS/2"].version2(i,n,a),a.usLowerOpticalPointSize=s.readUshort(i,n),n+=2,a.usUpperOpticalPointSize=s.readUshort(i,n),n+=2},e.post={},e.post.parse=function(i,n,a){var s=e._bin,o={};return o.version=s.readFixed(i,n),n+=4,o.italicAngle=s.readFixed(i,n),n+=4,o.underlinePosition=s.readShort(i,n),n+=2,o.underlineThickness=s.readShort(i,n),n+=2,o},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,n){var a=i.cmap,s=-1;if(a.p0e4!=null?s=a.p0e4:a.p3e1!=null?s=a.p3e1:a.p1e0!=null?s=a.p1e0:a.p0e3!=null&&(s=a.p0e3),s==-1)throw"no familiar platform and encoding!";var o=a.tables[s];if(o.format==0)return n>=o.map.length?0:o.map[n];if(o.format==4){for(var c=-1,u=0;u<o.endCount.length;u++)if(n<=o.endCount[u]){c=u;break}return c==-1||o.startCount[c]>n?0:65535&(o.idRangeOffset[c]!=0?o.glyphIdArray[n-o.startCount[c]+(o.idRangeOffset[c]>>1)-(o.idRangeOffset.length-c)]:n+o.idDelta[c])}if(o.format==12){if(n>o.groups[o.groups.length-1][1])return 0;for(u=0;u<o.groups.length;u++){var f=o.groups[u];if(f[0]<=n&&n<=f[1])return f[2]+(n-f[0])}return 0}throw"unknown cmap table format "+o.format},e.U.glyphToPath=function(i,n){var a={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[n]){var s=i.SVG.entries[n];return s==null?a:(typeof s=="string"&&(s=e.SVG.toPath(s),i.SVG.entries[n]=s),s)}if(i.CFF){var o={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=n;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(i.CFF.CharStrings[n],o,c,u,a)}else i.glyf&&e.U._drawGlyf(n,i,a);return a},e.U._drawGlyf=function(i,n,a){var s=n.glyf[i];s==null&&(s=n.glyf[i]=e.glyf._parseGlyf(n,i)),s!=null&&(s.noc>-1?e.U._simpleGlyph(s,a):e.U._compoGlyph(s,n,a))},e.U._simpleGlyph=function(i,n){for(var a=0;a<i.noc;a++){for(var s=a==0?0:i.endPts[a-1]+1,o=i.endPts[a],c=s;c<=o;c++){var u=c==s?o:c-1,f=c==o?s:c+1,h=1&i.flags[c],p=1&i.flags[u],g=1&i.flags[f],m=i.xs[c],d=i.ys[c];if(c==s)if(h){if(!p){e.U.P.moveTo(n,m,d);continue}e.U.P.moveTo(n,i.xs[u],i.ys[u])}else p?e.U.P.moveTo(n,i.xs[u],i.ys[u]):e.U.P.moveTo(n,(i.xs[u]+m)/2,(i.ys[u]+d)/2);h?p&&e.U.P.lineTo(n,m,d):g?e.U.P.qcurveTo(n,m,d,i.xs[f],i.ys[f]):e.U.P.qcurveTo(n,m,d,(m+i.xs[f])/2,(d+i.ys[f])/2)}e.U.P.closePath(n)}},e.U._compoGlyph=function(i,n,a){for(var s=0;s<i.parts.length;s++){var o={cmds:[],crds:[]},c=i.parts[s];e.U._drawGlyf(c.glyphIndex,n,o);for(var u=c.m,f=0;f<o.crds.length;f+=2){var h=o.crds[f],p=o.crds[f+1];a.crds.push(h*u.a+p*u.b+u.tx),a.crds.push(h*u.c+p*u.d+u.ty)}for(f=0;f<o.cmds.length;f++)a.cmds.push(o.cmds[f])}},e.U._getGlyphClass=function(i,n){var a=e._lctf.getInterval(n,i);return a==-1?0:n[a+2]},e.U.getPairAdjustment=function(i,n,a){var s=!1;if(i.GPOS)for(var o=i.GPOS,c=o.lookupList,u=o.featureList,f=[],h=0;h<u.length;h++){var p=u[h];if(p.tag=="kern"){s=!0;for(var g=0;g<p.tab.length;g++)if(!f[p.tab[g]]){f[p.tab[g]]=!0;for(var m=c[p.tab[g]],d=0;d<m.tabs.length;d++)if(m.tabs[d]!=null){var v,x=m.tabs[d];if((!x.coverage||(v=e._lctf.coverageIndex(x.coverage,n))!=-1)&&m.ltype!=1){if(m.ltype==2){var b=null;if(x.fmt==1){var S=x.pairsets[v];for(h=0;h<S.length;h++)S[h].gid2==a&&(b=S[h])}else if(x.fmt==2){var y=e.U._getGlyphClass(n,x.classDef1),A=e.U._getGlyphClass(a,x.classDef2);b=x.matrix[y][A]}if(b){var P=0;return b.val1&&b.val1[2]&&(P+=b.val1[2]),b.val2&&b.val2[0]&&(P+=b.val2[0]),P}}}}}}}if(i.kern&&!s){var _=i.kern.glyph1.indexOf(n);if(_!=-1){var L=i.kern.rval[_].glyph2.indexOf(a);if(L!=-1)return i.kern.rval[_].vals[L]}}return 0},e.U._applySubs=function(i,n,a,s){for(var o=i.length-n-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,f=a.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,i[n]))!=-1){if(a.ltype==1)i[n],f.fmt==1?i[n]=i[n]+f.delta:i[n]=f.newg[u];else if(a.ltype==4)for(var h=f.vals[u],p=0;p<h.length;p++){var g=h[p],m=g.chain.length;if(!(m>o)){for(var d=!0,v=0,x=0;x<m;x++){for(;i[n+v+(1+x)]==-1;)v++;g.chain[x]!=i[n+v+(1+x)]&&(d=!1)}if(d){for(i[n]=g.nglyph,x=0;x<m+v;x++)i[n+x+1]=-1;break}}}else if(a.ltype==5&&f.fmt==2)for(var b=e._lctf.getInterval(f.cDef,i[n]),S=f.cDef[b+2],y=f.scset[S],A=0;A<y.length;A++){var P=y[A],_=P.input;if(!(_.length>o)){for(d=!0,x=0;x<_.length;x++){var L=e._lctf.getInterval(f.cDef,i[n+1+x]);if(b==-1&&f.cDef[L+2]!=_[x]){d=!1;break}}if(d){var F=P.substLookupRecords;for(p=0;p<F.length;p+=2)F[p],F[p+1]}}}else if(a.ltype==6&&f.fmt==3){if(!e.U._glsCovered(i,f.backCvg,n-f.backCvg.length)||!e.U._glsCovered(i,f.inptCvg,n)||!e.U._glsCovered(i,f.ahedCvg,n+f.inptCvg.length))continue;var K=f.lookupRec;for(A=0;A<K.length;A+=2){b=K[A];var O=s[K[A+1]];e.U._applySubs(i,n+b,O,s)}}}}},e.U._glsCovered=function(i,n,a){for(var s=0;s<n.length;s++)if(e._lctf.coverageIndex(n[s],i[a+s])==-1)return!1;return!0},e.U.glyphsToPath=function(i,n,a){for(var s={cmds:[],crds:[]},o=0,c=0;c<n.length;c++){var u=n[c];if(u!=-1){for(var f=c<n.length-1&&n[c+1]!=-1?n[c+1]:0,h=e.U.glyphToPath(i,u),p=0;p<h.crds.length;p+=2)s.crds.push(h.crds[p]+o),s.crds.push(h.crds[p+1]);for(a&&s.cmds.push(a),p=0;p<h.cmds.length;p++)s.cmds.push(h.cmds[p]);a&&s.cmds.push("X"),o+=i.hmtx.aWidth[u],c<n.length-1&&(o+=e.U.getPairAdjustment(i,u,f))}}return s},e.U.P={},e.U.P.moveTo=function(i,n,a){i.cmds.push("M"),i.crds.push(n,a)},e.U.P.lineTo=function(i,n,a){i.cmds.push("L"),i.crds.push(n,a)},e.U.P.curveTo=function(i,n,a,s,o,c,u){i.cmds.push("C"),i.crds.push(n,a,s,o,c,u)},e.U.P.qcurveTo=function(i,n,a,s,o){i.cmds.push("Q"),i.crds.push(n,a,s,o)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,n,a,s,o){for(var c=n.stack,u=n.nStems,f=n.haveWidth,h=n.width,p=n.open,g=0,m=n.x,d=n.y,v=0,x=0,b=0,S=0,y=0,A=0,P=0,_=0,L=0,F=0,K={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,K);var O=K.val;if(g+=K.size,O=="o1"||O=="o18")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(O=="o3"||O=="o23")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(O=="o4")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),p&&e.U.P.closePath(o),d+=c.pop(),e.U.P.moveTo(o,m,d),p=!0;else if(O=="o5")for(;c.length>0;)m+=c.shift(),d+=c.shift(),e.U.P.lineTo(o,m,d);else if(O=="o6"||O=="o7")for(var R=c.length,D=O=="o6",z=0;z<R;z++){var Y=c.shift();D?m+=Y:d+=Y,D=!D,e.U.P.lineTo(o,m,d)}else if(O=="o8"||O=="o24"){R=c.length;for(var ie=0;ie+6<=R;)v=m+c.shift(),x=d+c.shift(),b=v+c.shift(),S=x+c.shift(),m=b+c.shift(),d=S+c.shift(),e.U.P.curveTo(o,v,x,b,S,m,d),ie+=6;O=="o24"&&(m+=c.shift(),d+=c.shift(),e.U.P.lineTo(o,m,d))}else{if(O=="o11")break;if(O=="o1234"||O=="o1235"||O=="o1236"||O=="o1237")O=="o1234"&&(x=d,b=(v=m+c.shift())+c.shift(),F=S=x+c.shift(),A=S,_=d,m=(P=(y=(L=b+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(o,v,x,b,S,L,F),e.U.P.curveTo(o,y,A,P,_,m,d)),O=="o1235"&&(v=m+c.shift(),x=d+c.shift(),b=v+c.shift(),S=x+c.shift(),L=b+c.shift(),F=S+c.shift(),y=L+c.shift(),A=F+c.shift(),P=y+c.shift(),_=A+c.shift(),m=P+c.shift(),d=_+c.shift(),c.shift(),e.U.P.curveTo(o,v,x,b,S,L,F),e.U.P.curveTo(o,y,A,P,_,m,d)),O=="o1236"&&(v=m+c.shift(),x=d+c.shift(),b=v+c.shift(),F=S=x+c.shift(),A=S,P=(y=(L=b+c.shift())+c.shift())+c.shift(),_=A+c.shift(),m=P+c.shift(),e.U.P.curveTo(o,v,x,b,S,L,F),e.U.P.curveTo(o,y,A,P,_,m,d)),O=="o1237"&&(v=m+c.shift(),x=d+c.shift(),b=v+c.shift(),S=x+c.shift(),L=b+c.shift(),F=S+c.shift(),y=L+c.shift(),A=F+c.shift(),P=y+c.shift(),_=A+c.shift(),Math.abs(P-m)>Math.abs(_-d)?m=P+c.shift():d=_+c.shift(),e.U.P.curveTo(o,v,x,b,S,L,F),e.U.P.curveTo(o,y,A,P,_,m,d));else if(O=="o14"){if(c.length>0&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),c.length==4){var Z=c.shift(),G=c.shift(),j=c.shift(),T=c.shift(),U=e.CFF.glyphBySE(a,j),V=e.CFF.glyphBySE(a,T);e.U._drawCFF(a.CharStrings[U],n,a,s,o),n.x=Z,n.y=G,e.U._drawCFF(a.CharStrings[V],n,a,s,o)}p&&(e.U.P.closePath(o),p=!1)}else if(O=="o19"||O=="o20")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(O=="o21")c.length>2&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),d+=c.pop(),m+=c.pop(),p&&e.U.P.closePath(o),e.U.P.moveTo(o,m,d),p=!0;else if(O=="o22")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),m+=c.pop(),p&&e.U.P.closePath(o),e.U.P.moveTo(o,m,d),p=!0;else if(O=="o25"){for(;c.length>6;)m+=c.shift(),d+=c.shift(),e.U.P.lineTo(o,m,d);v=m+c.shift(),x=d+c.shift(),b=v+c.shift(),S=x+c.shift(),m=b+c.shift(),d=S+c.shift(),e.U.P.curveTo(o,v,x,b,S,m,d)}else if(O=="o26")for(c.length%2&&(m+=c.shift());c.length>0;)v=m,x=d+c.shift(),m=b=v+c.shift(),d=(S=x+c.shift())+c.shift(),e.U.P.curveTo(o,v,x,b,S,m,d);else if(O=="o27")for(c.length%2&&(d+=c.shift());c.length>0;)x=d,b=(v=m+c.shift())+c.shift(),S=x+c.shift(),m=b+c.shift(),d=S,e.U.P.curveTo(o,v,x,b,S,m,d);else if(O=="o10"||O=="o29"){var X=O=="o10"?s:a;if(c.length==0)console.debug("error: empty stack");else{var H=c.pop(),N=X.Subrs[H+X.Bias];n.x=m,n.y=d,n.nStems=u,n.haveWidth=f,n.width=h,n.open=p,e.U._drawCFF(N,n,a,s,o),m=n.x,d=n.y,u=n.nStems,f=n.haveWidth,h=n.width,p=n.open}}else if(O=="o30"||O=="o31"){var ne=c.length,J=(ie=0,O=="o31");for(ie+=ne-(R=-3&ne);ie<R;)J?(x=d,b=(v=m+c.shift())+c.shift(),d=(S=x+c.shift())+c.shift(),R-ie==5?(m=b+c.shift(),ie++):m=b,J=!1):(v=m,x=d+c.shift(),b=v+c.shift(),S=x+c.shift(),m=b+c.shift(),R-ie==5?(d=S+c.shift(),ie++):d=S,J=!0),e.U.P.curveTo(o,v,x,b,S,m,d),ie+=4}else{if((O+"").charAt(0)=="o")throw console.debug("Unknown operation: "+O,i),O;c.push(O)}}}n.x=m,n.y=d,n.nStems=u,n.haveWidth=f,n.width=h,n.open=p};var t=e,r={Typr:t};return l.Typr=t,l.default=r,Object.defineProperty(l,"__esModule",{value:!0}),l}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function wm(){return function(l){var e=Uint8Array,t=Uint16Array,r=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),n=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(O,R){for(var D=new t(31),z=0;z<31;++z)D[z]=R+=1<<O[z-1];var Y=new r(D[30]);for(z=1;z<30;++z)for(var ie=D[z];ie<D[z+1];++ie)Y[ie]=ie-D[z]<<5|z;return[D,Y]},o=s(i,2),c=o[0],u=o[1];c[28]=258,u[258]=28;for(var f=s(n,0)[0],h=new t(32768),p=0;p<32768;++p){var g=(43690&p)>>>1|(21845&p)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[p]=((65280&g)>>>8|(255&g)<<8)>>>1}var m=function(O,R,D){for(var z=O.length,Y=0,ie=new t(R);Y<z;++Y)++ie[O[Y]-1];var Z,G=new t(R);for(Y=0;Y<R;++Y)G[Y]=G[Y-1]+ie[Y-1]<<1;if(D){Z=new t(1<<R);var j=15-R;for(Y=0;Y<z;++Y)if(O[Y])for(var T=Y<<4|O[Y],U=R-O[Y],V=G[O[Y]-1]++<<U,X=V|(1<<U)-1;V<=X;++V)Z[h[V]>>>j]=T}else for(Z=new t(z),Y=0;Y<z;++Y)O[Y]&&(Z[Y]=h[G[O[Y]-1]++]>>>15-O[Y]);return Z},d=new e(288);for(p=0;p<144;++p)d[p]=8;for(p=144;p<256;++p)d[p]=9;for(p=256;p<280;++p)d[p]=7;for(p=280;p<288;++p)d[p]=8;var v=new e(32);for(p=0;p<32;++p)v[p]=5;var x=m(d,9,1),b=m(v,5,1),S=function(O){for(var R=O[0],D=1;D<O.length;++D)O[D]>R&&(R=O[D]);return R},y=function(O,R,D){var z=R/8|0;return(O[z]|O[z+1]<<8)>>(7&R)&D},A=function(O,R){var D=R/8|0;return(O[D]|O[D+1]<<8|O[D+2]<<16)>>(7&R)},P=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_=function(O,R,D){var z=new Error(R||P[O]);if(z.code=O,Error.captureStackTrace&&Error.captureStackTrace(z,_),!D)throw z;return z},L=function(O,R,D){var z=O.length;if(!z||D&&!D.l&&z<5)return R||new e(0);var Y=!R||D,ie=!D||D.i;D||(D={}),R||(R=new e(3*z));var Z,G=function(ue){var Ee=R.length;if(ue>Ee){var Pe=new e(Math.max(2*Ee,ue));Pe.set(R),R=Pe}},j=D.f||0,T=D.p||0,U=D.b||0,V=D.l,X=D.d,H=D.m,N=D.n,ne=8*z;do{if(!V){D.f=j=y(O,T,1);var J=y(O,T+1,3);if(T+=3,!J){var le=O[(Te=((Z=T)/8|0)+(7&Z&&1)+4)-4]|O[Te-3]<<8,ae=Te+le;if(ae>z){ie&&_(0);break}Y&&G(U+le),R.set(O.subarray(Te,ae),U),D.b=U+=le,D.p=T=8*ae;continue}if(J==1)V=x,X=b,H=9,N=5;else if(J==2){var ge=y(O,T,31)+257,re=y(O,T+10,15)+4,ye=ge+y(O,T+5,31)+1;T+=14;for(var Re=new e(ye),Ae=new e(19),Ce=0;Ce<re;++Ce)Ae[a[Ce]]=y(O,T+3*Ce,7);T+=3*re;var Fe=S(Ae),pe=(1<<Fe)-1,Me=m(Ae,Fe,1);for(Ce=0;Ce<ye;){var Te,oe=Me[y(O,T,pe)];if(T+=15&oe,(Te=oe>>>4)<16)Re[Ce++]=Te;else{var w=0,M=0;for(Te==16?(M=3+y(O,T,3),T+=2,w=Re[Ce-1]):Te==17?(M=3+y(O,T,7),T+=3):Te==18&&(M=11+y(O,T,127),T+=7);M--;)Re[Ce++]=w}}var B=Re.subarray(0,ge),$=Re.subarray(ge);H=S(B),N=S($),V=m(B,H,1),X=m($,N,1)}else _(1);if(T>ne){ie&&_(0);break}}Y&&G(U+131072);for(var fe=(1<<H)-1,de=(1<<N)-1,ve=T;;ve=T){var C=(w=V[A(O,T)&fe])>>>4;if((T+=15&w)>ne){ie&&_(0);break}if(w||_(2),C<256)R[U++]=C;else{if(C==256){ve=T,V=null;break}var k=C-254;if(C>264){var xe=i[Ce=C-257];k=y(O,T,(1<<xe)-1)+c[Ce],T+=xe}var ce=X[A(O,T)&de],_e=ce>>>4;if(ce||_(3),T+=15&ce,$=f[_e],_e>3&&(xe=n[_e],$+=A(O,T)&(1<<xe)-1,T+=xe),T>ne){ie&&_(0);break}Y&&G(U+131072);for(var me=U+k;U<me;U+=4)R[U]=R[U-$],R[U+1]=R[U+1-$],R[U+2]=R[U+2-$],R[U+3]=R[U+3-$];U=me}}D.l=V,D.p=ve,D.b=U,V&&(j=1,D.m=H,D.d=X,D.n=N)}while(!j);return U==R.length?R:function(ue,Ee,Pe){(Ee==null||Ee<0)&&(Ee=0),(Pe==null||Pe>ue.length)&&(Pe=ue.length);var Ie=new(ue instanceof t?t:ue instanceof r?r:e)(Pe-Ee);return Ie.set(ue.subarray(Ee,Pe)),Ie}(R,0,U)},F=new e(0),K=typeof TextDecoder<"u"&&new TextDecoder;try{K.decode(F,{stream:!0})}catch{}return l.convert_streams=function(O){var R=new DataView(O),D=0;function z(){var ge=R.getUint16(D);return D+=2,ge}function Y(){var ge=R.getUint32(D);return D+=4,ge}function ie(ge){le.setUint16(ae,ge),ae+=2}function Z(ge){le.setUint32(ae,ge),ae+=4}for(var G={signature:Y(),flavor:Y(),length:Y(),numTables:z(),reserved:z(),totalSfntSize:Y(),majorVersion:z(),minorVersion:z(),metaOffset:Y(),metaLength:Y(),metaOrigLength:Y(),privOffset:Y(),privLength:Y()},j=0;Math.pow(2,j)<=G.numTables;)j++;j--;for(var T=16*Math.pow(2,j),U=16*G.numTables-T,V=12,X=[],H=0;H<G.numTables;H++)X.push({tag:Y(),offset:Y(),compLength:Y(),origLength:Y(),origChecksum:Y()}),V+=16;var N,ne=new Uint8Array(12+16*X.length+X.reduce(function(ge,re){return ge+re.origLength+4},0)),J=ne.buffer,le=new DataView(J),ae=0;return Z(G.flavor),ie(G.numTables),ie(T),ie(j),ie(U),X.forEach(function(ge){Z(ge.tag),Z(ge.origChecksum),Z(V),Z(ge.origLength),ge.outOffset=V,(V+=ge.origLength)%4!=0&&(V+=4-V%4)}),X.forEach(function(ge){var re,ye=O.slice(ge.offset,ge.offset+ge.compLength);if(ge.compLength!=ge.origLength){var Re=new Uint8Array(ge.origLength);re=new Uint8Array(ye,2),L(re,Re)}else Re=new Uint8Array(ye);ne.set(Re,ge.outOffset);var Ae=0;(V=ge.outOffset+ge.origLength)%4!=0&&(Ae=4-V%4),ne.set(new Uint8Array(Ae).buffer,ge.outOffset+ge.origLength),N=V+Ae}),J.slice(0,N)},Object.defineProperty(l,"__esModule",{value:!0}),l}({}).convert_streams}function Tm(l,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,n=2,a=4,s=8,o=16,c=32;let u;function f(y){if(!u){const A={R:n,L:i,D:a,C:o,U:c,T:s};u=new Map;for(let P in r){let _=0;r[P].split(",").forEach(L=>{let[F,K]=L.split("+");F=parseInt(F,36),K=K?parseInt(K,36):0,u.set(_+=F,A[P]);for(let O=K;O--;)u.set(++_,A[P])})}}return u.get(y)||c}const h=1,p=2,g=3,m=4,d=[null,"isol","init","fina","medi"];function v(y){const A=new Uint8Array(y.length);let P=c,_=h,L=-1;for(let F=0;F<y.length;F++){const K=y.codePointAt(F);let O=f(K)|0,R=h;O&s||(P&(i|a|o)?O&(n|a|o)?(R=g,(_===h||_===g)&&A[L]++):O&(i|c)&&(_===p||_===m)&&A[L]--:P&(n|c)&&(_===p||_===m)&&A[L]--,_=A[F]=R,P=O,L=F,K>65535&&F++)}return A}function x(y,A){const P=[];for(let L=0;L<A.length;L++){const F=A.codePointAt(L);F>65535&&L++,P.push(l.U.codeToGlyph(y,F))}const _=y.GSUB;if(_){const{lookupList:L,featureList:F}=_;let K;const O=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,R=[];F.forEach(D=>{if(O.test(D.tag))for(let z=0;z<D.tab.length;z++){if(R[D.tab[z]])continue;R[D.tab[z]]=!0;const Y=L[D.tab[z]],ie=/^(isol|init|fina|medi)$/.test(D.tag);ie&&!K&&(K=v(A));for(let Z=0;Z<P.length;Z++)(!K||!ie||d[K[Z]]===D.tag)&&l.U._applySubs(P,Z,Y,L)}})}return P}function b(...y){for(let A=0;A<y.length;A++)if(typeof y[A]=="number")return y[A]}function S(y){const A=Object.create(null),P=y["OS/2"],_=y.hhea,L=y.head.unitsPerEm,F=b(P&&P.sTypoAscender,_&&_.ascender,L),K={unitsPerEm:L,ascender:F,descender:b(P&&P.sTypoDescender,_&&_.descender,0),capHeight:b(P&&P.sCapHeight,F),xHeight:b(P&&P.sxHeight,F),lineGap:b(P&&P.sTypoLineGap,_&&_.lineGap),forEachGlyph(O,R,D,z){let Y=0;const ie=1/K.unitsPerEm*R,Z=x(y,O);let G=0,j=-1;return Z.forEach((T,U)=>{if(T!==-1){let V=A[T];if(!V){const{cmds:X,crds:H}=l.U.glyphToPath(y,T);let N="",ne=0;for(let re=0,ye=X.length;re<ye;re++){const Re=t[X[re]];N+=X[re];for(let Ae=1;Ae<=Re;Ae++)N+=(Ae>1?",":"")+H[ne++]}let J,le,ae,ge;if(H.length){J=le=1/0,ae=ge=-1/0;for(let re=0,ye=H.length;re<ye;re+=2){let Re=H[re],Ae=H[re+1];Re<J&&(J=Re),Ae<le&&(le=Ae),Re>ae&&(ae=Re),Ae>ge&&(ge=Ae)}}else J=ae=le=ge=0;V=A[T]={index:T,advanceWidth:y.hmtx.aWidth[T],xMin:J,yMin:le,xMax:ae,yMax:ge,path:N,pathCommandCount:X.length}}j!==-1&&(Y+=l.U.getPairAdjustment(y,j,T)*ie),z.call(null,V,Y,G),V.advanceWidth&&(Y+=V.advanceWidth*ie),D&&(Y+=D*R),j=T}G+=O.codePointAt(G)>65535?2:1}),Y}};return K}return function(A){const P=new Uint8Array(A,0,4),_=l._bin.readASCII(P,0,4);if(_==="wOFF")A=e(A);else if(_==="wOF2")throw new Error("woff2 fonts not supported");return S(l.parse(A)[0])}}const Em=tr({name:"Typr Font Parser",dependencies:[Sm,wm,Tm],init(l,e,t){const r=l(),i=e();return t(r,i)}}),fi={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Am=new Qe;function li(){return(self.performance||Date).now()}const jo=Object.create(null);function Cm(l,e){l=Dm({},l);const t=li();if(l.font=Pm(l.font||fi.defaultFontURL),l.text=""+l.text,l.sdfGlyphSize=l.sdfGlyphSize||fi.sdfGlyphSize,l.colorRanges!=null){let f={};for(let h in l.colorRanges)if(l.colorRanges.hasOwnProperty(h)){let p=l.colorRanges[h];typeof p!="number"&&(p=Am.set(p).getHex()),f[h]=p}l.colorRanges=f}Object.freeze(l);const{textureWidth:r,sdfExponent:i}=fi,{sdfGlyphSize:n}=l,a=r/n*4;let s=jo[n];if(!s){const f=document.createElement("canvas");f.width=r,f.height=n*256/a,s=jo[n]={glyphCount:0,sdfGlyphSize:n,sdfCanvas:f,sdfTexture:new yt(f,void 0,void 0,void 0,St,St),contextLost:!1,glyphsByFont:new Map},s.sdfTexture.generateMipmaps=!1,Lm(s)}const{sdfTexture:o,sdfCanvas:c}=s;let u=s.glyphsByFont.get(l.font);u||s.glyphsByFont.set(l.font,u=new Map),Um(l).then(f=>{const{glyphIds:h,glyphPositions:p,fontSize:g,unitsPerEm:m,timings:d}=f,v=[],x=new Float32Array(h.length*4),b=g/m;let S=0,y=0;const A=li();h.forEach((K,O)=>{let R=u.get(K);if(!R){const{path:ie,pathBounds:Z}=f.glyphData[K],G=Math.max(Z[2]-Z[0],Z[3]-Z[1])/n*(fi.sdfMargin*n+.5),j=s.glyphCount++,T=[Z[0]-G,Z[1]-G,Z[2]+G,Z[3]+G];u.set(K,R={path:ie,atlasIndex:j,sdfViewBox:T}),v.push(R)}const{sdfViewBox:D}=R,z=p[y++],Y=p[y++];x[S++]=z+D[0]*b,x[S++]=Y+D[1]*b,x[S++]=z+D[2]*b,x[S++]=Y+D[3]*b,h[O]=R.atlasIndex}),d.quads=(d.quads||0)+(li()-A);const P=li();d.sdf={};const _=c.height,L=Math.ceil(s.glyphCount/a),F=Math.pow(2,Math.ceil(Math.log2(L*n)));F>_&&(console.info(`Increasing SDF texture size ${_}->${F}`),bm(c,r,F),o.dispose()),Promise.all(v.map(K=>Il(K,s,l.gpuAccelerateSDF).then(({timing:O})=>{d.sdf[K.atlasIndex]=O}))).then(()=>{v.length&&!s.contextLost&&(Fl(s),o.needsUpdate=!0),d.sdfTotal=li()-P,d.total=li()-t,e(Object.freeze({parameters:l,sdfTexture:o,sdfGlyphSize:n,sdfExponent:i,glyphBounds:x,glyphAtlasIndices:h,glyphColors:f.glyphColors,caretPositions:f.caretPositions,caretHeight:f.caretHeight,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{s.contextLost||Mm(c)})}function Il({path:l,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:i,contextLost:n},a){if(n)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:o}=fi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(s/r)*r,h=Math.floor(u/(s/r))*r,p=e%4;return mm(r,r,l,t,c,o,i,f,h,p,a)}function Lm(l){const e=l.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),l.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),l.contextLost=!1;const r=[];l.glyphsByFont.forEach(i=>{i.forEach(n=>{r.push(Il(n,l,!0))})}),Promise.all(r).then(()=>{Fl(l),l.sdfTexture.needsUpdate=!0})})}function Dm(l,e){for(let t in e)e.hasOwnProperty(t)&&(l[t]=e[t]);return l}let Fr;function Pm(l){return Fr||(Fr=typeof document>"u"?{}:document.createElement("a")),Fr.href=l,Fr.href}function Fl(l){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=l,{width:r,height:i}=e,n=l.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*i*4)&&(a=new Uint8Array(r*i*4),t.image={width:r,height:i,data:a},t.flipY=!1,t.isDataTexture=!0),n.readPixels(0,0,r,i,n.RGBA,n.UNSIGNED_BYTE,a)}}const Rm=tr({name:"Typesetter",dependencies:[fi,Em,pm,am],init(l,e,t,r){const{defaultFontURL:i}=l;return t(e,r(),{defaultFontURL:i})}}),Um=tr({name:"Typesetter",dependencies:[Rm],init(l){return function(e){return new Promise(t=>{l.typeset(e,t)})}},getTransferables(l){const e=[l.glyphPositions.buffer,l.glyphIds.buffer];return l.caretPositions&&e.push(l.caretPositions.buffer),l.glyphColors&&e.push(l.glyphColors.buffer),e}}),Yo={};function Im(l){let e=Yo[l];if(!e){const t=new xi(1,1,l,l),r=t.clone(),i=t.attributes,n=r.attributes,a=new kt,s=i.uv.count;for(let o=0;o<s;o++)n.position.array[o*3]*=-1,n.normal.array[o*3+2]*=-1;["position","normal","uv"].forEach(o=>{a.setAttribute(o,new jt([...i[o].array,...n[o].array],i[o].itemSize))}),a.setIndex([...t.index.array,...r.index.array.map(o=>o+s)]),a.translate(.5,.5,0),e=Yo[l]=a}return e}const Fm="aTroikaGlyphBounds",Zo="aTroikaGlyphIndex",Om="aTroikaGlyphColor";class Nm extends Jp{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Ji,this.boundingBox=new vi}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Rt?t/2:0,e===Zi?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Im(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,i,n){zs(this,Fm,e,4),zs(this,Zo,t,1),zs(this,Om,n,3),this._blockBounds=r,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:i,floor:n,min:a,max:s,sin:o,cos:c}=Math,u=i/2,f=i*2,h=Math.abs(t),p=e[0]/h,g=e[2]/h,m=n((p+u)/f)!==n((g+u)/f)?-h:a(o(p)*h,o(g)*h),d=n((p-u)/f)!==n((g-u)/f)?h:s(o(p)*h,o(g)*h),v=n((p+i)/f)!==n((g+i)/f)?h*2:s(h-c(p)*h,h-c(g)*h);r.min.set(m,e[1],t<0?-v:0),r.max.set(d,e[3],t<0?0:v)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Zo).count,r=this._chunkedBounds;if(r)for(let i=r.length;i--;){t=r[i].end;let n=r[i].rect;if(n[1]<e.w&&n[3]>e.y&&n[0]<e.z&&n[2]>e.x)break}this.instanceCount=t}}function zs(l,e,t,r){const i=l.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(l.setAttribute(e,new Xp(t,r)),delete l._maxInstanceCount,l.dispose()):i&&l.deleteAttribute(e)}const km=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,zm=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Bm=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Gm=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Vm(l){const e=ea(l,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Be},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new st(0,0,0,0)},uTroikaClipRect:{value:new st(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Be},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Tt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:km,vertexTransform:zm,fragmentDefs:Bm,fragmentColorTransform:Gm,customRewriter({vertexShader:t,fragmentShader:r}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(r)&&(r=r.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Rl,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const aa=new Vr({color:16777215,side:Zi,transparent:!0}),Ko=8421504,Jo=new at,Or=new Q,Bs=new Q,zi=[],Wm=new Q,Gs="+x+y";function Qo(l){return Array.isArray(l)?l[0]:l}let Ol=()=>{const l=new Nt(new xi(1,1),aa);return Ol=()=>l,l},Nl=()=>{const l=new Nt(new xi(1,1,32,1),aa);return Nl=()=>l,l};const Hm={type:"syncstart"},Xm={type:"synccomplete"},kl=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],qm=kl.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class zl extends Nt{constructor(){const e=new Nm;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Ko,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Gs,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Hm),Cm({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(i=>i&&i())})),this.dispatchEvent(Xm),e&&e()})))}onBeforeRender(e,t,r,i,n,a){this.sync(),n.isTroikaTextMaterial&&this._prepareForRender(n),n._hadOwnSide=n.hasOwnProperty("side"),this.geometry.setSide(n._actualSide=n.side),n.side=gn}onAfterRender(e,t,r,i,n,a){n._hadOwnSide?n.side=n._actualSide:delete n.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=aa.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Vm(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Qo(this.material).getDepthMaterial()}get customDistanceMaterial(){return Qo(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:s,blockBounds:o}=i;r.uTroikaSDFTexture.value=s,r.uTroikaSDFTextureSize.value.set(s.image.width,s.image.height),r.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,r.uTroikaSDFExponent.value=i.sdfExponent,r.uTroikaTotalBounds.value.fromArray(o),r.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,f=0,h,p,g,m=0,d=0;if(t){let{outlineWidth:x,outlineOffsetX:b,outlineOffsetY:S,outlineBlur:y,outlineOpacity:A}=this;c=this._parsePercent(x)||0,u=Math.max(0,this._parsePercent(y)||0),h=A,m=this._parsePercent(b)||0,d=this._parsePercent(S)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Ko),p=this.strokeOpacity,p==null&&(p=1)),h=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(m,d),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=p,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let v=this.clipRect;if(v&&Array.isArray(v)&&v.length===4)r.uTroikaClipRect.value.fromArray(v);else{const x=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(o[0]-x,o[1]-x,o[2]+x,o[3]+x)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const n=t?this.outlineColor||0:this.color;if(n==null)delete e.color;else{const s=e.hasOwnProperty("color")?e.color:e.color=new Qe;(n!==s._input||typeof n=="object")&&s.set(s._input=n)}let a=this.orientation||Gs;if(a!==e._orientation){let s=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let o=a!==Gs&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(o){let[,c,u,f,h]=o;Or.set(0,0,0)[u]=c==="-"?1:-1,Bs.set(0,0,0)[h]=f==="-"?-1:1,Jo.lookAt(Wm,Or.cross(Bs),Bs),s.setFromMatrix4(Jo)}else s.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Be){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Be){return Or.copy(e),this.localPositionToTextCoords(this.worldToLocal(Or),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:i}=this;if(r){const n=r.blockBounds,a=i?Nl():Ol(),s=a.geometry,{position:o,uv:c}=s.attributes;for(let u=0;u<c.count;u++){let f=n[0]+c.getX(u)*(n[2]-n[0]);const h=n[1]+c.getY(u)*(n[3]-n[1]);let p=0;i&&(p=i-Math.cos(f/i)*i,f=Math.sin(f/i)*i),o.setXYZ(u,f,h,p)}s.boundingSphere=this.geometry.boundingSphere,s.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,zi.length=0,a.raycast(e,zi);for(let u=0;u<zi.length;u++)zi[u].object=this,t.push(zi[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,qm.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}kl.forEach(l=>{const e="_private_"+l;Object.defineProperty(zl.prototype,l,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});async function jm(){return(await(await fetch("particles/particle_list.json")).json()).files}async function Ym(l){for(const e of l){const r=await(await fetch(e)).text();sessionStorage.setItem(e,r)}}jm().then(Ym);function Zm(l){const e=[];for(let t=0;t<sessionStorage.length;t++){const r=sessionStorage.key(t),i=sessionStorage.getItem(r);i.includes(l)&&e.push({file:r,content:i})}return e}const Km=document.getElementById("searchBar");Km.addEventListener("input",l=>{const e=l.target.value,t=Zm(e);console.log(t)});const Bl=document.querySelector("canvas.webgl"),Gl=new Kp,Jm=Gl.load("mrks.jpeg");Gl.load("star.png");const Xr=new Vr;Xr.map=Jm;Xr.color=new Qe(16777215);Xr.shiniess=100;const na=new Nt(new sa(.5,23,42),Xr),oa=new kt(1,1,1),la=4223,Vl=new Float32Array(la*3),Wl=new Float32Array(la*3);for(let l=0;l<la*3;l++)Vl[l]=(Math.random()-.5)*23,Wl[l]=Math.random();oa.setAttribute("position",new Ut(Vl,3));oa.setAttribute("color",new Ut(Wl,3));const vn=new Cl;vn.size=.001;vn.sizeAttenuation=!0;vn.color=new Qe("#ffffff");vn.transparent=!0;vn.alphaTest=.001;vn.depthWrite=!1;vn.blending=Vs;const Hl=new qp(oa,vn),qr=new Hp;qr.add(na,Hl);const $t={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{$t.width=window.innerWidth,$t.height=window.innerHeight,_n.aspect=$t.width/$t.height,_n.updateProjectionMatrix(),Yi.setSize($t.width,$t.height),Yi.setPixelRatio(Math.min(window.devicePixelRatio,2))});const _n=new Ot(75,$t.width/$t.height,.1,100);_n.position.x=1;_n.position.y=1;_n.position.z=5;qr.add(_n);const Xl=new $p(_n,Bl);Xl.enableDamping=!0;const Yi=new Al({canvas:Bl});Yi.setSize($t.width,$t.height);Yi.setPixelRatio(Math.min(window.devicePixelRatio,2));const Qm=new Qp,ql=()=>{const l=Qm.getElapsedTime();na.rotation.y=.23*l,na.rotation.x=.42*l,Hl.rotation.y=.02*l,Xl.update(),Yi.render(qr,_n),window.requestAnimationFrame(ql)};ql();const Yt=new zl;qr.add(Yt);Yt.text="Hello world!";Yt.anchorX="center";Yt.anchorY="middle";Yt.anchorZ="center";Yt.fontSize=.42;Yt.position.z=-23;Yt.position.y=1;Yt.position.x=1;Yt.color=16772864;Yt.sync();
//# sourceMappingURL=index-8a0b636a.js.map
