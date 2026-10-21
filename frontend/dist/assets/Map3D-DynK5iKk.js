import{r as hn,m as be,w as ki,q as oo,f as Jf,u as Qf,h as jf,j as ed,k as ac,t as Wn,s as td,l as nd,y as id,A as rd,z as sd,e as od,o as Hh,b as ad,a as ld,C as cd,c as ud,i as lc,n as hd,d as fd,g as dd}from"./index-DKWIntbu.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="186",pd=0,jc=1,md=2,Wo=1,gd=2,Ss=3,Ki=0,Tn=1,yn=2,Ei=0,Or=1,fl=2,eu=3,tu=4,_d=5,Dr=100,xd=101,vd=102,Sd=103,Md=104,yd=200,bd=201,Ed=202,wd=203,Gh=204,kh=205,Ad=206,Td=207,Rd=208,Cd=209,Pd=210,Ld=211,Dd=212,Id=213,Nd=214,dl=0,pl=1,ml=2,Ls=3,gl=4,_l=5,xl=6,vl=7,Vh=0,Ud=1,Od=2,ci=0,Wh=1,Xh=2,Yh=3,qh=4,Zh=5,$h=6,uc=7,Kh=300,Ji=301,Hr=302,Xo=303,Sa=304,la=306,Sl=1e3,jn=1001,Ml=1002,un=1003,Fd=1004,ao=1005,qt=1006,Ma=1007,Bi=1008,Pn=1009,Jh=1010,Qh=1011,Ds=1012,hc=1013,hi=1014,Ln=1015,Dn=1016,fc=1017,dc=1018,Is=1020,jh=35902,ef=35899,tf=1021,nf=1022,ei=1023,Ai=1026,Zi=1027,pc=1028,mc=1029,Qi=1030,gc=1031,_c=1033,Yo=33776,qo=33777,Zo=33778,$o=33779,yl=35840,bl=35841,El=35842,wl=35843,Al=36196,Tl=37492,Rl=37496,Cl=37488,Pl=37489,jo=37490,Ll=37491,Dl=37808,Il=37809,Nl=37810,Ul=37811,Ol=37812,Fl=37813,Bl=37814,zl=37815,Hl=37816,Gl=37817,kl=37818,Vl=37819,Wl=37820,Xl=37821,Yl=36492,ql=36494,Zl=36495,$l=36283,Kl=36284,ea=36285,Jl=36286,Bd=3200,Ql=0,zd=1,Fi="",on="srgb",Ns="srgb-linear",ta="linear",Ct="srgb",ya=7680,Hd=519,Gd=512,kd=513,Vd=514,xc=515,Wd=516,Xd=517,vc=518,Yd=519,rf=35044,$i=35048,nu="300 es",li=2e3,Us=2001;function qd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){const i=Os("canvas");return i.style.display="block",i}const iu={};function na(...i){const e="THREE."+i.shift();console.log(e,...i)}function sf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=sf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=sf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fr(...i){const e=i.join(" ");e in iu||(iu[e]=!0,ke(...i))}function $d(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Kd={[dl]:pl,[ml]:xl,[gl]:vl,[Ls]:_l,[pl]:dl,[xl]:ml,[vl]:gl,[_l]:Ls};class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const bs=Math.PI/180,Fs=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Sc(i,e){return(i%e+e)%e}function Jd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Qd(i,e,t){return i!==e?(t-i)/(e-i):0}function Es(i,e,t){return(1-t)*i+t*e}function jd(i,e,t,n){return Es(i,e,1-Math.exp(-t*n))}function ep(i,e=1){return e-Math.abs(Sc(i,e*2)-e)}function tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function np(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ip(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rp(i,e){return i+Math.random()*(e-i)}function sp(i){return i*(.5-Math.random())}function op(i){i!==void 0&&(ru=i);let e=ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(i){return i*bs}function lp(i){return i*Fs}function cp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*u,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const su={DEG2RAD:bs,RAD2DEG:Fs,generateUUID:ui,clamp:at,euclideanModulo:Sc,mapLinear:Jd,inverseLerp:Qd,lerp:Es,damp:jd,pingpong:ep,smoothstep:tp,smootherstep:np,randInt:ip,randFloat:rp,randFloatSpread:sp,seededRandom:op,degToRad:ap,radToDeg:lp,isPowerOfTwo:cp,ceilPowerOfTwo:up,floorPowerOfTwo:hp,setQuaternionFromProperEuler:fp,normalize:Pt,denormalize:Qn},Ic=class Ic{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ic.prototype.isVector2=!0;let pe=Ic;class zn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[o+0],p=s[o+1],_=s[o+2],S=s[o+3];if(f!==S||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+f*S;m<0&&(h=-h,p=-p,_=-_,S=-S,m=-m);let d=1-a;if(m<.9995){const M=Math.acos(m),A=Math.sin(M);d=Math.sin(d*M)/A,a=Math.sin(a*M)/A,l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+S*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+S*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nc=class Nc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nc.prototype.isVector3=!0;let N=Nc;const ba=new N,ou=new zn,Uc=class Uc{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],S=r[0],m=r[3],d=r[6],M=r[1],A=r[4],x=r[7],y=r[2],b=r[5],R=r[8];return s[0]=o*S+a*M+l*y,s[3]=o*m+a*A+l*b,s[6]=o*d+a*x+l*R,s[1]=c*S+u*M+f*y,s[4]=c*m+u*A+f*b,s[7]=c*d+u*x+f*R,s[2]=h*S+p*M+_*y,s[5]=h*m+p*A+_*b,s[8]=h*d+p*x+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+n*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-u*n)*S,e[2]=(a*n-r*o)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return Fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return Fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uc.prototype.isMatrix3=!0;let Qe=Uc;const Ea=new Qe,au=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dp(){const i={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ct&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(r.r=Br(r.r),r.g=Br(r.g),r.b=Br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?ta:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ns]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:au,fromXYZ:lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:au,fromXYZ:lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const gt=dp();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ur;class pp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ur===void 0&&(ur=Os("canvas")),ur.width=e.width,ur.height=e.height;const r=ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ur}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mp=0;class Mc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wa(r[o].image)):s.push(wa(r[o]))}else s=wa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let gp=0;const Aa=new N;class jt extends tr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=jn,r=jn,s=qt,o=Bi,a=ei,l=Pn,c=jt.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ui(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sl:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sl:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Kh;jt.DEFAULT_ANISOTROPY=1;const Oc=class Oc{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(p+1)/2,y=(d+1)/2,b=(u+h)/4,R=(f+S)/4,g=(_+m)/4;return A>x&&A>y?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=b/n,s=R/n):x>y?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=b/r,s=g/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=R/s,r=g/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oc.prototype.isVector4=!0;let Gt=Oc;class _p extends tr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new jt(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Mc(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends _p{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class of extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xp extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const aa=class aa{constructor(e,t,n,r,s,o,a,l,c,u,f,h,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,p,_,S,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,p,_,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,S=c*f;t[0]=h+S*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,S=c*f;t[0]=h-S*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,S=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,S=a*c;t[0]=l*u,t[4]=S-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,Sp)}lookAt(e,t,n){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Pi.crossVectors(n,Rn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Pi.crossVectors(n,Rn)),Pi.normalize(),lo.crossVectors(Rn,Pi),r[0]=Pi.x,r[4]=lo.x,r[8]=Rn.x,r[1]=Pi.y,r[5]=lo.y,r[9]=Rn.y,r[2]=Pi.z,r[6]=lo.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],S=n[6],m=n[10],d=n[14],M=n[3],A=n[7],x=n[11],y=n[15],b=r[0],R=r[4],g=r[8],E=r[12],T=r[1],L=r[5],I=r[9],U=r[13],P=r[2],z=r[6],G=r[10],$=r[14],oe=r[3],Z=r[7],ee=r[11],re=r[15];return s[0]=o*b+a*T+l*P+c*oe,s[4]=o*R+a*L+l*z+c*Z,s[8]=o*g+a*I+l*G+c*ee,s[12]=o*E+a*U+l*$+c*re,s[1]=u*b+f*T+h*P+p*oe,s[5]=u*R+f*L+h*z+p*Z,s[9]=u*g+f*I+h*G+p*ee,s[13]=u*E+f*U+h*$+p*re,s[2]=_*b+S*T+m*P+d*oe,s[6]=_*R+S*L+m*z+d*Z,s[10]=_*g+S*I+m*G+d*ee,s[14]=_*E+S*U+m*$+d*re,s[3]=M*b+A*T+x*P+y*oe,s[7]=M*R+A*L+x*z+y*Z,s[11]=M*g+A*I+x*G+y*ee,s[15]=M*E+A*U+x*$+y*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],S=e[7],m=e[11],d=e[15],M=l*p-c*h,A=a*p-c*f,x=a*h-l*f,y=o*p-c*u,b=o*h-l*u,R=o*f-a*u;return t*(S*M-m*A+d*x)-n*(_*M-m*y+d*b)+r*(_*A-S*y+d*R)-s*(_*x-S*b+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],S=e[13],m=e[14],d=e[15],M=t*a-n*o,A=t*l-r*o,x=t*c-s*o,y=n*l-r*a,b=n*c-s*a,R=r*c-s*l,g=u*S-f*_,E=u*m-h*_,T=u*d-p*_,L=f*m-h*S,I=f*d-p*S,U=h*d-p*m,P=M*U-A*I+x*L+y*T-b*E+R*g;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=(a*U-l*I+c*L)*z,e[1]=(r*I-n*U-s*L)*z,e[2]=(S*R-m*b+d*y)*z,e[3]=(h*b-f*R-p*y)*z,e[4]=(l*T-o*U-c*E)*z,e[5]=(t*U-r*T+s*E)*z,e[6]=(m*x-_*R-d*A)*z,e[7]=(u*R-h*x+p*A)*z,e[8]=(o*I-a*T+c*g)*z,e[9]=(n*T-t*I-s*g)*z,e[10]=(_*b-S*x+d*M)*z,e[11]=(f*x-u*b-p*M)*z,e[12]=(a*E-o*L-l*g)*z,e[13]=(t*L-n*E+r*g)*z,e[14]=(S*A-_*y-m*M)*z,e[15]=(u*y-f*A+h*M)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,S=o*u,m=o*f,d=a*f,M=l*c,A=l*u,x=l*f,y=n.x,b=n.y,R=n.z;return r[0]=(1-(S+d))*y,r[1]=(p+x)*y,r[2]=(_-A)*y,r[3]=0,r[4]=(p-x)*b,r[5]=(1-(h+d))*b,r[6]=(m+M)*b,r[7]=0,r[8]=(_+A)*R,r[9]=(m-M)*R,r[10]=(1-(h+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=hr.set(r[0],r[1],r[2]).length();const a=hr.set(r[4],r[5],r[6]).length(),l=hr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);const c=1/o,u=1/a,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=li,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let _,S;if(l)_=s/(o-s),S=o*s/(o-s);else if(a===li)_=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Us)_=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=li,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r);let _,S;if(l)_=1/(o-s),S=o/(o-s);else if(a===li)_=-2/(o-s),S=-(o+s)/(o-s);else if(a===Us)_=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};aa.prototype.isMatrix4=!0;let lt=aa;const hr=new N,Xn=new lt,vp=new N(0,0,0),Sp=new N(1,1,1),Pi=new N,lo=new N,Rn=new N,cu=new lt,uu=new zn;class Ti{constructor(e=0,t=0,n=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mp=0;const hu=new N,fr=new zn,mi=new lt,co=new N,ss=new N,yp=new N,bp=new zn,fu=new N(1,0,0),du=new N(0,1,0),pu=new N(0,0,1),mu={type:"added"},Ep={type:"removed"},dr={type:"childadded",child:null},Ta={type:"childremoved",child:null};class an extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new N,t=new Ti,n=new zn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Qe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?co.copy(e):co.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ss,co,this.up):mi.lookAt(co,ss,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(mi),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),dr.child=e,this.dispatchEvent(dr),dr.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ep),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new N(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jn extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=Sc(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ca(o,s,e+1/3),this.g=Ca(o,s,e),this.b=Ca(o,s,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return gt.workingToColorSpace(dn.copy(this),e),Math.round(at(dn.r*255,0,255))*65536+Math.round(at(dn.g*255,0,255))*256+Math.round(at(dn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(dn.copy(this),t);const n=dn.r,r=dn.g,s=dn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=on){gt.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,r=dn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(uo);const n=Es(Li.h,uo.h,t),r=Es(Li.s,uo.s,t),s=Es(Li.l,uo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new He;He.NAMES=af;class Ap extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new N,gi=new N,Pa=new N,_i=new N,pr=new N,mr=new N,gu=new N,La=new N,Da=new N,Ia=new N,Na=new Gt,Ua=new Gt,Oa=new Gt;class Bn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yn.subVectors(r,t),gi.subVectors(n,t),Pa.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(gi),l=Yn.dot(Pa),c=gi.dot(gi),u=gi.dot(Pa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Na.setScalar(0),Ua.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Oa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Na,s.x),o.addScaledVector(Ua,s.y),o.addScaledVector(Oa,s.z),o}static isFrontFacing(e,t,n,r){return Yn.subVectors(n,t),gi.subVectors(e,t),Yn.cross(gi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Yn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;pr.subVectors(r,n),mr.subVectors(s,n),La.subVectors(e,n);const l=pr.dot(La),c=mr.dot(La);if(l<=0&&c<=0)return t.copy(n);Da.subVectors(e,r);const u=pr.dot(Da),f=mr.dot(Da);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(pr,o);Ia.subVectors(e,s);const p=pr.dot(Ia),_=mr.dot(Ia);if(_>=0&&p<=_)return t.copy(s);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(mr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return gu.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(gu,a);const d=1/(m+S+h);return o=S*d,a=h*d,t.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),fo.subVectors(this.max,os),gr.subVectors(e.a,os),_r.subVectors(e.b,os),xr.subVectors(e.c,os),Di.subVectors(_r,gr),Ii.subVectors(xr,_r),Vi.subVectors(gr,xr);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-Vi.z,Vi.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,Vi.z,0,-Vi.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-Vi.y,Vi.x,0];return!Fa(t,gr,_r,xr,fo)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,gr,_r,xr,fo))?!1:(po.crossVectors(Di,Ii),t=[po.x,po.y,po.z],Fa(t,gr,_r,xr,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new N,new N,new N,new N,new N,new N,new N,new N],qn=new N,ho=new nr,gr=new N,_r=new N,xr=new N,Di=new N,Ii=new N,Vi=new N,os=new N,fo=new N,po=new N,Wi=new N;function Fa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Wi.fromArray(i,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bi=Tp();function Tp(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Rp(i){Math.abs(i)>65504&&ke("DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),bi.floatView[0]=i;const e=bi.uint32View[0],t=e>>23&511;return bi.baseTable[t]+((e&8388607)>>bi.shiftTable[t])}function Cp(i){const e=i>>10;return bi.uint32View[0]=bi.mantissaTable[bi.offsetTable[e]+(i&1023)]+bi.exponentTable[e],bi.floatView[0]}class mo{static toHalfFloat(e){return Rp(e)}static fromHalfFloat(e){return Cp(e)}}const Kt=new N,go=new pe;let Pp=0;class Be extends tr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rf,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class lf extends Be{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cf extends Be{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Be{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Lp=new nr,as=new N,Ba=new N;class Vr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(as,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Ba)),this.expandByPoint(as.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Dp=0;const On=new lt,za=new an,vr=new N,Cn=new nr,ls=new nr,sn=new N;class At extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?cf:lf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Cn.min,ls.min),Cn.expandByPoint(sn),sn.addVectors(Cn.max,ls.max),Cn.expandByPoint(sn)):(Cn.expandByPoint(ls.min),Cn.expandByPoint(ls.max))}Cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),sn.add(vr)),r=Math.max(r,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new N,l[g]=new N;const c=new N,u=new N,f=new N,h=new pe,p=new pe,_=new pe,S=new N,m=new N;function d(g,E,T){c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,T),h.fromBufferAttribute(s,g),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[g].add(S),a[E].add(S),a[T].add(S),l[g].add(m),l[E].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let g=0,E=M.length;g<E;++g){const T=M[g],L=T.start,I=T.count;for(let U=L,P=L+I;U<P;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const A=new N,x=new N,y=new N,b=new N;function R(g){y.fromBufferAttribute(r,g),b.copy(y);const E=a[g];A.copy(E),A.sub(y.multiplyScalar(y.dot(E))).normalize(),x.crossVectors(b,E);const L=x.dot(l[g])<0?-1:1;o.setXYZW(g,A.x,A.y,A.z,L)}for(let g=0,E=M.length;g<E;++g){const T=M[g],L=T.start,I=T.count;for(let U=L,P=L+I;U<P;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Be(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Be(h,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ip{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Sn=new N;class ia{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Be(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ia(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ha=new N,Np=new N,Up=new Qe;class Oi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ha.subVectors(n,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Ha),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Up.getNormalMatrix(e),r=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Op=0;class ir extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Or,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=kh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Oi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ko extends ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Sr;const cs=new N,Mr=new N,yr=new N,br=new pe,us=new pe,uf=new lt,_o=new N,hs=new N,xo=new N,_u=new pe,Ga=new pe,xu=new pe;class ka extends an{constructor(e=new Ko){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ip(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new ia(n,3,0,!1)),Sr.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),uf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-yr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;vo(_o.set(-.5,-.5,0),yr,o,Mr,r,s),vo(hs.set(.5,-.5,0),yr,o,Mr,r,s),vo(xo.set(.5,.5,0),yr,o,Mr,r,s),_u.set(0,0),Ga.set(1,0),xu.set(1,1);let a=e.ray.intersectTriangle(_o,hs,xo,!1,cs);if(a===null&&(vo(hs.set(-.5,.5,0),yr,o,Mr,r,s),Ga.set(0,1),a=e.ray.intersectTriangle(_o,xo,hs,!1,cs),a===null))return;const l=e.ray.origin.distanceTo(cs);l<e.near||l>e.far||t.push({distance:l,point:cs.clone(),uv:Bn.getInterpolation(cs,_o,hs,xo,_u,Ga,xu,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vo(i,e,t,n,r,s){br.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(us.x=s*br.x-r*br.y,us.y=r*br.x+s*br.y):us.copy(br),i.copy(e),i.x+=us.x,i.y+=us.y,i.applyMatrix4(uf)}const vi=new N,Va=new N,So=new N,Mo=new N;class bc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Va.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),Mo.copy(this.origin).sub(Va);const s=e.distanceTo(t)*.5,o=-this.direction.dot(So),a=Mo.dot(this.direction),l=-Mo.dot(So),c=Mo.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Va).addScaledVector(So,h),p}intersectSphere(e,t){if(e.radius<0)return null;vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),r=vi.dot(vi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,p=e.z-o.z,_=t.x-o.x,S=t.y-o.y,m=t.z-o.z,d=n.x-o.x,M=n.y-o.y,A=n.z-o.z,x=Math.abs(l),y=Math.abs(c),b=Math.abs(u);let R,g,E,T,L,I,U,P,z,G,$,oe;if(x>=y&&x>=b?(E=l,I=f,z=_,oe=d,l>=0?(R=c,g=u,T=h,L=p,U=S,P=m,G=M,$=A):(R=u,g=c,T=p,L=h,U=m,P=S,G=A,$=M)):y>=b?(E=c,I=h,z=S,oe=M,c>=0?(R=u,g=l,T=p,L=f,U=m,P=_,G=A,$=d):(R=l,g=u,T=f,L=p,U=_,P=m,G=d,$=A)):(E=u,I=p,z=m,oe=A,u>=0?(R=l,g=c,T=f,L=h,U=_,P=S,G=d,$=M):(R=c,g=l,T=h,L=f,U=S,P=_,G=M,$=d)),E===0)return null;const Z=R/E,ee=g/E,re=1/E,Ae=T-Z*I,me=L-ee*I,rt=U-Z*z,qe=P-ee*z,Ze=G-Z*oe,Q=$-ee*oe,ie=Ze*qe-Q*rt,Ee=Ae*Q-me*Ze,Ge=rt*me-qe*Ae;if(r){if(ie<0||Ee<0||Ge<0)return null}else if((ie<0||Ee<0||Ge<0)&&(ie>0||Ee>0||Ge>0))return null;const Me=ie+Ee+Ge;if(Me===0)return null;const We=re*(ie*I+Ee*z+Ge*oe);return(Me>0?We<0:We>0)?null:this.at(We/Me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zr extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vu=new lt,Xi=new bc,yo=new Vr,Su=new N,bo=new N,Eo=new N,wo=new N,Wa=new N,Ao=new N,Mu=new N,To=new N;class mn extends an{constructor(e=new At,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Wa.fromBufferAttribute(f,e),o?Ao.addScaledVector(Wa,u):Ao.addScaledVector(Wa.sub(t),u))}t.add(Ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(yo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(yo,Su)===null||Xi.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(vu.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(vu),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=o[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,y=A;x<y;x+=3){const b=a.getX(x),R=a.getX(x+1),g=a.getX(x+2);r=Ro(this,d,e,n,c,u,f,b,R,g),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const M=a.getX(m),A=a.getX(m+1),x=a.getX(m+2);r=Ro(this,o,e,n,c,u,f,M,A,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=o[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,y=A;x<y;x+=3){const b=x,R=x+1,g=x+2;r=Ro(this,d,e,n,c,u,f,b,R,g),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const M=m,A=m+1,x=m+2;r=Ro(this,o,e,n,c,u,f,M,A,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fp(i,e,t,n,r,s,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:i}}function Ro(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,bo),i.getVertexPosition(l,Eo),i.getVertexPosition(c,wo);const u=Fp(i,e,t,n,bo,Eo,wo,Mu);if(u){const f=new N;Bn.getBarycoord(Mu,bo,Eo,wo,f),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,f,new pe)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,f,new pe)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Bn.getNormal(bo,Eo,wo,h.normal),u.face=h,u.barycoord=f}return u}class ra extends jt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=un,u=un,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji extends Be{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Er=new lt,yu=new lt,Co=[],bu=new nr,Bp=new lt,fs=new mn,ds=new Vr;class Vs extends mn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Bp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),bu.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),ds.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),e.ray.intersectsSphere(ds)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Er),yu.multiplyMatrices(n,Er),fs.matrixWorld=yu,fs.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){const l=Co[o];l.instanceId=s,l.object=this,t.push(l)}Co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ra(new Float32Array(r*this.count),r,this.count,pc,Ln));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yi=new Vr,zp=new pe(.5,.5),Po=new N;class Ec{constructor(e=new Oi,t=new Oi,n=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],_=s[8],S=s[9],m=s[10],d=s[11],M=s[12],A=s[13],x=s[14],y=s[15];if(r[0].setComponents(c-o,p-u,d-_,y-M).normalize(),r[1].setComponents(c+o,p+u,d+_,y+M).normalize(),r[2].setComponents(c+a,p+f,d+S,y+A).normalize(),r[3].setComponents(c-a,p-f,d-S,y-A).normalize(),n)r[4].setComponents(l,h,m,x).normalize(),r[5].setComponents(c-l,p-h,d-m,y-x).normalize();else if(r[4].setComponents(c-l,p-h,d-m,y-x).normalize(),t===li)r[5].setComponents(c+l,p+h,d+m,y+x).normalize();else if(t===Us)r[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=zp.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hf extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sa=new N,oa=new N,Eu=new lt,ps=new bc,Lo=new Vr,Xa=new N,wu=new N;class Hp extends an{constructor(e=new At,t=new hf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)sa.fromBufferAttribute(t,r-1),oa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=sa.distanceTo(oa);e.setAttribute("lineDistance",new Lt(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;Eu.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Eu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let S=p,m=_-1;S<m;S+=c){const d=u.getX(S),M=u.getX(S+1),A=Do(this,e,ps,l,d,M,S);A&&t.push(A)}if(this.isLineLoop){const S=u.getX(_-1),m=u.getX(p),d=Do(this,e,ps,l,S,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let S=p,m=_-1;S<m;S+=c){const d=Do(this,e,ps,l,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){const S=Do(this,e,ps,l,_-1,p,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Do(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(sa.fromBufferAttribute(a,r),oa.fromBufferAttribute(a,s),t.distanceSqToSegment(sa,oa,Xa,wu)>n)return;Xa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Xa);if(!(c<e.near||c>e.far))return{distance:c,point:wu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Au=new N,Tu=new N;class Gp extends Hp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Au.fromBufferAttribute(t,r),Tu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Au.distanceTo(Tu);e.setAttribute("lineDistance",new Lt(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ff extends jt{constructor(e=[],t=Ji,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ca extends jt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bs extends jt{constructor(e,t,n=hi,r,s,o,a=un,l=un,c,u=Ai,f=1){if(u!==Ai&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class kp extends Bs{constructor(e,t=hi,n=Ji,r,s,o=un,a=un,l,c=Ai){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class df extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class it extends At{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function _(S,m,d,M,A,x,y,b,R,g,E){const T=x/R,L=y/g,I=x/2,U=y/2,P=b/2,z=R+1,G=g+1;let $=0,oe=0;const Z=new N;for(let ee=0;ee<G;ee++){const re=ee*L-U;for(let Ae=0;Ae<z;Ae++){const me=Ae*T-I;Z[S]=me*M,Z[m]=re*A,Z[d]=P,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[m]=0,Z[d]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Ae/R),f.push(1-ee/g),$+=1}}for(let ee=0;ee<g;ee++)for(let re=0;re<R;re++){const Ae=h+re+z*ee,me=h+re+z*(ee+1),rt=h+(re+1)+z*(ee+1),qe=h+(re+1)+z*ee;l.push(Ae,me,qe),l.push(me,rt,qe),oe+=6}a.addGroup(p,oe,E),p+=oe,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wc extends At{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,p=2*f+h,_=n*2+s,S=r+1,m=new N,d=new N;for(let M=0;M<=_;M++){let A=0,x=0,y=0,b=0;if(M<=n){const E=M/n,T=E*Math.PI/2;x=-u-e*Math.cos(T),y=e*Math.sin(T),b=-e*Math.cos(T),A=E*f}else if(M<=n+s){const E=(M-n)/s;x=-u+E*t,y=e,b=0,A=f+E*h}else{const E=(M-n-s)/n,T=E*Math.PI/2;x=u+e*Math.sin(T),y=e*Math.cos(T),b=e*Math.sin(T),A=f+h+E*f}const R=Math.max(0,Math.min(1,A/p));let g=0;M===0?g=.5/r:M===_&&(g=-.5/r);for(let E=0;E<=r;E++){const T=E/r,L=T*Math.PI*2,I=Math.sin(L),U=Math.cos(L);d.x=-y*U,d.y=x,d.z=y*I,a.push(d.x,d.y,d.z),m.set(-y*U,b,y*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+g,R)}if(M>0){const E=(M-1)*S;for(let T=0;T<r;T++){const L=E+T,I=E+T+1,U=M*S+T,P=M*S+T+1;o.push(L,I,U),o.push(I,P,U)}}}this.setIndex(o),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Qt extends At{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let _=0;const S=[],m=n/2;let d=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(p,2));function M(){const x=new N,y=new N;let b=0;const R=(t-e)/n;for(let g=0;g<=s;g++){const E=[],T=g/s,L=T*(t-e)+e;for(let I=0;I<=r;I++){const U=I/r,P=U*l+a,z=Math.sin(P),G=Math.cos(P);y.x=L*z,y.y=-T*n+m,y.z=L*G,f.push(y.x,y.y,y.z),x.set(z,R,G).normalize(),h.push(x.x,x.y,x.z),p.push(U,1-T),E.push(_++)}S.push(E)}for(let g=0;g<r;g++)for(let E=0;E<s;E++){const T=S[E][g],L=S[E+1][g],I=S[E+1][g+1],U=S[E][g+1];(e>0||E!==0)&&(u.push(T,L,U),b+=3),(t>0||E!==s-1)&&(u.push(L,I,U),b+=3)}c.addGroup(d,b,0),d+=b}function A(x){const y=_,b=new pe,R=new N;let g=0;const E=x===!0?e:t,T=x===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*T,0),h.push(0,T,0),p.push(.5,.5),_++;const L=_;for(let I=0;I<=r;I++){const P=I/r*l+a,z=Math.cos(P),G=Math.sin(P);R.x=E*G,R.y=m*T,R.z=E*z,f.push(R.x,R.y,R.z),h.push(0,T,0),b.x=z*.5+.5,b.y=G*.5*T+.5,p.push(b.x,b.y),_++}for(let I=0;I<r;I++){const U=y+I,P=L+I;x===!0?u.push(P,P+1,U):u.push(P+1,P,U),g+=3}c.addGroup(d,g,x===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ws extends Qt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ws(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends At{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(s.slice(),3)),this.setAttribute("uv",new Lt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const A=new N,x=new N,y=new N;for(let b=0;b<t.length;b+=3)p(t[b+0],A),p(t[b+1],x),p(t[b+2],y),l(A,x,y,M)}function l(M,A,x,y){const b=y+1,R=[];for(let g=0;g<=b;g++){R[g]=[];const E=M.clone().lerp(x,g/b),T=A.clone().lerp(x,g/b),L=b-g;for(let I=0;I<=L;I++)I===0&&g===b?R[g][I]=E:R[g][I]=E.clone().lerp(T,I/L)}for(let g=0;g<b;g++)for(let E=0;E<2*(b-g)-1;E++){const T=Math.floor(E/2);E%2===0?(h(R[g][T+1]),h(R[g+1][T]),h(R[g][T])):(h(R[g][T+1]),h(R[g+1][T+1]),h(R[g+1][T]))}}function c(M){const A=new N;for(let x=0;x<s.length;x+=3)A.x=s[x+0],A.y=s[x+1],A.z=s[x+2],A.normalize().multiplyScalar(M),s[x+0]=A.x,s[x+1]=A.y,s[x+2]=A.z}function u(){const M=new N;for(let A=0;A<s.length;A+=3){M.x=s[A+0],M.y=s[A+1],M.z=s[A+2];const x=m(M)/2/Math.PI+.5,y=d(M)/Math.PI+.5;o.push(x,1-y)}_(),f()}function f(){for(let M=0;M<o.length;M+=6){const A=o[M+0],x=o[M+2],y=o[M+4],b=Math.max(A,x,y),R=Math.min(A,x,y);b>.9&&R<.1&&(A<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),y<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function p(M,A){const x=M*3;A.x=e[x+0],A.y=e[x+1],A.z=e[x+2]}function _(){const M=new N,A=new N,x=new N,y=new N,b=new pe,R=new pe,g=new pe;for(let E=0,T=0;E<s.length;E+=9,T+=6){M.set(s[E+0],s[E+1],s[E+2]),A.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),b.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),g.set(o[T+4],o[T+5]),y.copy(M).add(A).add(x).divideScalar(3);const L=m(y);S(b,T+0,M,L),S(R,T+2,A,L),S(g,T+4,x,L)}}function S(M,A,x,y){y<0&&M.x===1&&(o[A]=M.x-1),x.x===0&&x.z===0&&(o[A]=y/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.vertices,e.indices,e.radius,e.detail)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new pe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,r=[],s=[],o=[],a=new N,l=new lt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(at(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(at(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tc extends di{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vp extends Tc{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ru=new N,Cu=new N,Ya=new Rc,qa=new Rc,Za=new Rc;class Wp extends di{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Cu.subVectors(r[0],r[1]).add(r[0]),c=Cu);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ru.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ru),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Ya.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,S,m),qa.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,S,m),Za.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),qa.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Za.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Ya.calc(l),qa.calc(l),Za.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Xp(i,e){const t=1-i;return t*t*e}function Yp(i,e){return 2*(1-i)*i*e}function qp(i,e){return i*i*e}function ws(i,e,t,n){return Xp(i,e)+Yp(i,t)+qp(i,n)}function Zp(i,e){const t=1-i;return t*t*t*e}function $p(i,e){const t=1-i;return 3*t*t*i*e}function Kp(i,e){return 3*(1-i)*i*i*e}function Jp(i,e){return i*i*i*e}function As(i,e,t,n,r){return Zp(i,e)+$p(i,t)+Kp(i,n)+Jp(i,r)}class pf extends di{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(As(e,r.x,s.x,o.x,a.x),As(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qp extends di{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(As(e,r.x,s.x,o.x,a.x),As(e,r.y,s.y,o.y,a.y),As(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mf extends di{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jp extends di{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gf extends di{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ws(e,r.x,s.x,o.x),ws(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class em extends di{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ws(e,r.x,s.x,o.x),ws(e,r.y,s.y,o.y),ws(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _f extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Pu(a,l.x,c.x,u.x,f.x),Pu(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var Lu=Object.freeze({__proto__:null,ArcCurve:Vp,CatmullRomCurve3:Wp,CubicBezierCurve:pf,CubicBezierCurve3:Qp,EllipseCurve:Tc,LineCurve:mf,LineCurve3:jp,QuadraticBezierCurve:gf,QuadraticBezierCurve3:em,SplineCurve:_f});class tm extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Lu[r.type]().fromJSON(r))}return this}}class jl extends tm{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new mf(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new gf(this.currentPoint.clone(),new pe(e,t),new pe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new pf(this.currentPoint.clone(),new pe(e,t),new pe(n,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _f(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Tc(e,t,n,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xf extends jl{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new jl().fromJSON(r))}return this}}function nm(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=vf(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=am(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let u=a,f=l;for(let h=t;h<r;h+=t){const p=i[h],_=i[h+1];p<a&&(a=p),_<l&&(l=_),p>u&&(u=p),_>f&&(f=_)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return zs(s,o,t,a,l,c,0),o}function vf(i,e,t,n,r){let s;if(r===xm(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Du(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Du(o/n|0,i[o],i[o+1],s);return s&&Gr(s,s.next)&&(Gs(s),s=s.next),s}function er(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||kt(t.prev,t,t.next)===0)){if(Gs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zs(i,e,t,n,r,s,o){if(!i)return;!o&&s&&fm(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?rm(i,n,r,s):im(i)){e.push(l.i,i.i,c.i),Gs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sm(er(i),e),zs(i,e,t,n,r,s,2)):o===2&&om(i,e,t,n,r,s):zs(er(i),e,t,n,r,s,1);break}}}function im(i){const e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=p&&Ms(r,a,s,l,o,c,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function rm(i,e,t,n){const r=i.prev,s=i,o=i.next;if(kt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=Math.min(a,l,c),_=Math.min(u,f,h),S=Math.max(a,l,c),m=Math.max(u,f,h),d=ec(p,_,e,t,n),M=ec(S,m,e,t,n);let A=i.prevZ,x=i.nextZ;for(;A&&A.z>=d&&x&&x.z<=M;){if(A.x>=p&&A.x<=S&&A.y>=_&&A.y<=m&&A!==r&&A!==o&&Ms(a,u,l,f,c,h,A.x,A.y)&&kt(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=p&&x.x<=S&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Ms(a,u,l,f,c,h,x.x,x.y)&&kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=d;){if(A.x>=p&&A.x<=S&&A.y>=_&&A.y<=m&&A!==r&&A!==o&&Ms(a,u,l,f,c,h,A.x,A.y)&&kt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=S&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Ms(a,u,l,f,c,h,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sm(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Gr(n,r)&&Mf(n,t,t.next,r)&&Hs(n,r)&&Hs(r,n)&&(e.push(n.i,t.i,r.i),Gs(t),Gs(t.next),t=i=r),t=t.next}while(t!==i);return er(t)}function om(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mm(o,a)){let l=yf(o,a);o=er(o,o.next),l=er(l,l.next),zs(o,e,t,n,r,s,0),zs(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function am(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=vf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(pm(c))}r.sort(lm);for(let s=0;s<r.length;s++)t=cm(r[s],t);return t}function lm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function cm(i,e){const t=um(i,e);if(!t)return e;const n=yf(t,i);return er(n,n.next),er(t,t.next)}function um(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(Gr(i,t))return t;do{if(Gr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Sf(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const f=Math.abs(r-t.y)/(n-t.x);Hs(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&hm(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function hm(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function fm(i,e,t,n){let r=i;do r.z===0&&(r.z=ec(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,dm(r)}function dm(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function ec(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Sf(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Ms(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Sf(i,e,t,n,r,s,o,a)}function mm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gm(i,e)&&(Hs(i,e)&&Hs(e,i)&&_m(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||Gr(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function Mf(i,e,t,n){const r=No(kt(i,e,t)),s=No(kt(i,e,n)),o=No(kt(t,n,i)),a=No(kt(t,n,e));return!!(r!==s&&o!==a||r===0&&Io(i,t,e)||s===0&&Io(i,n,e)||o===0&&Io(t,i,n)||a===0&&Io(t,e,n))}function Io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function No(i){return i>0?1:i<0?-1:0}function gm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Hs(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function _m(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yf(i,e){const t=tc(i.i,i.x,i.y),n=tc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Du(i,e,t,n){const r=tc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xm(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class vm{static triangulate(e,t,n=2){return nm(e,t,n)}}class Ts{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ts.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Iu(e),Nu(n,e);let o=e.length;t.forEach(Iu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Nu(n,t[l]);const a=vm.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Iu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ua extends Ac{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ua(e.radius,e.detail)}}class Wr extends At{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],S=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let A=0;A<c;A++){const x=A*f-s;_.push(x,-M,0),S.push(0,0,1),m.push(A/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const A=M+c*d,x=M+c*(d+1),y=M+1+c*(d+1),b=M+1+c*d;p.push(A,x,b),p.push(x,y,b)}this.setIndex(p),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(S,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cc extends At{constructor(e=new xf([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(s,3)),this.setAttribute("uv",new Lt(o,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let p=h.shape;const _=h.holes;Ts.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=_.length;m<d;m++){const M=_[m];Ts.isClockWise(M)===!0&&(_[m]=M.reverse())}const S=Ts.triangulateShape(p,_);for(let m=0,d=_.length;m<d;m++){const M=_[m];p=p.concat(M)}for(let m=0,d=p.length;m<d;m++){const M=p[m];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let m=0,d=S.length;m<d;m++){const M=S[m],A=M[0]+f,x=M[1]+f,y=M[2]+f;n.push(A,x,y),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Sm(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Cc(n,e.curveSegments)}}function Sm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class ha extends At{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new N,h=new N,p=[],_=[],S=[],m=[];for(let d=0;d<=n;d++){const M=[],A=d/n,x=o+A*a,y=e*Math.cos(x),b=Math.sqrt(e*e-y*y);let R=0;d===0&&o===0?R=.5/t:d===n&&l===Math.PI&&(R=-.5/t);for(let g=0;g<=t;g++){const E=g/t,T=r+E*s;f.x=-b*Math.cos(T),f.y=y,f.z=b*Math.sin(T),_.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(E+R,1-A),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const A=u[d][M+1],x=u[d][M],y=u[d+1][M],b=u[d+1][M+1];(d!==0||o>0)&&p.push(A,x,b),(d!==n-1||l<Math.PI)&&p.push(x,y,b)}this.setIndex(p),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(S,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function kr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Uu(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Uu(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Mn(i){const e={};for(let t=0;t<i.length;t++){const n=kr(i[t]);for(const r in n)e[r]=n[r]}return e}function Uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const ym={clone:kr,merge:Mn};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(r.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new N().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wm extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xs extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Am extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tm extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ou(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ou(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ou(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Rm{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Cm=new Rm;class Ys{constructor(e){this.manager=e!==void 0?e:Cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class Pm extends Error{constructor(e,t){super(e),this.response=t}}class Lm extends Ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Rs.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:r});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Si[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let S=0;const m=new ReadableStream({start(d){M();function M(){f.read().then(({done:A,value:x})=>{if(A)d.close();else{S+=x.byteLength;const y=new ProgressEvent("progress",{lengthComputable:_,loaded:S,total:p});for(let b=0,R=u.length;b<R;b++){const g=u[b];g.onProgress&&g.onProgress(y)}d.enqueue(x),M()}},A=>{d.error(A)})}}});return new Response(m)}else throw new Pm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Rs.add(`file:${e}`,c);const u=Si[e];delete Si[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const wr=new WeakMap;class Dm extends Ys{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=wr.get(o);f===void 0&&(f=[],wr.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=Os("img");function l(){u(),t&&t(this);const f=wr.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}wr.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Rs.remove(`image:${e}`);const h=wr.get(this)||[];for(let p=0;p<h.length;p++){const _=h[p];_.onError&&_.onError(f)}wr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Rs.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Im extends Ys{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new ra,a=new Lm(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){r!==void 0?r(u):mt(u);return}s._applyTexData(o,c),t&&t(o,c)},n,r),o}createDataTexture(e){const t=new ra;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:jn,e.wrapT=t.wrapT!==void 0?t.wrapT:jn,e.magFilter=t.magFilter!==void 0?t.magFilter:qt,e.minFilter=t.minFilter!==void 0?t.minFilter:qt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Bi),t.mipmapCount===1&&(e.minFilter=qt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Nm extends Ys{constructor(e){super(e)}load(e,t,n,r){const s=new jt,o=new Dm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ef extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const $a=new lt,Fu=new N,Bu=new N;class Um{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fu),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($a,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Us||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uo=new N,Oo=new zn,ri=new N;class wf extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Oo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Oo,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Uo,Oo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Oo,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new N,zu=new pe,Hu=new pe;class Fn extends wf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,zu,Hu),t.subVectors(Hu,zu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Pc extends wf{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Om extends Um{constructor(){super(new Pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fm extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Om}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Bm extends Ef{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ar=-90,Tr=1;class zm extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(Ar,Tr,e,t);r.layers=this.layers,this.add(r);const s=new Fn(Ar,Tr,e,t);s.layers=this.layers,this.add(s);const o=new Fn(Ar,Tr,e,t);o.layers=this.layers,this.add(o);const a=new Fn(Ar,Tr,e,t);a.layers=this.layers,this.add(a);const l=new Fn(Ar,Tr,e,t);l.layers=this.layers,this.add(l);const c=new Fn(Ar,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Hm extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gu=new lt;class Gm{constructor(e,t,n=0,r=1/0){this.ray=new bc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gu),this}intersectObject(e,t=!0,n=[]){return nc(e,this,n,t),n.sort(ku),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)nc(e[r],this,n,t);return n.sort(ku),n}}function ku(i,e){return i.distance-e.distance}function nc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)nc(s[o],e,t,!0)}}const Fc=class Fc{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Fc.prototype.isMatrix2=!0;let Vu=Fc;function Wu(i,e,t,n){const r=km(n);switch(t){case tf:return i*e;case pc:return i*e/r.components*r.byteLength;case mc:return i*e/r.components*r.byteLength;case Qi:return i*e*2/r.components*r.byteLength;case gc:return i*e*2/r.components*r.byteLength;case nf:return i*e*3/r.components*r.byteLength;case ei:return i*e*4/r.components*r.byteLength;case _c:return i*e*4/r.components*r.byteLength;case Yo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:case wl:return Math.max(i,16)*Math.max(e,8)/4;case yl:case El:return Math.max(i,8)*Math.max(e,8)/2;case Al:case Tl:case Cl:case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rl:case jo:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yl:case ql:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $l:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ea:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function km(i){switch(i){case Pn:case Jh:return{byteLength:1,components:1};case Ds:case Qh:case Dn:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case hi:case hc:case Ln:return{byteLength:4,components:1};case jh:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Af(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vm(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i0=`#ifdef USE_IRIDESCENCE
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
#endif`,r0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,m0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,O0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Cg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zg=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Jg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,a_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c_=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,d_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,m_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,__=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:Zm,alphatest_pars_fragment:$m,aomap_fragment:Km,aomap_pars_fragment:Jm,batching_pars_vertex:Qm,batching_vertex:jm,begin_vertex:e0,beginnormal_vertex:t0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:r0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:l0,color_fragment:c0,color_pars_fragment:u0,color_pars_vertex:h0,color_vertex:f0,common:d0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:_0,emissivemap_fragment:x0,emissivemap_pars_fragment:v0,colorspace_fragment:S0,colorspace_pars_fragment:M0,envmap_fragment:y0,envmap_common_pars_fragment:b0,envmap_pars_fragment:E0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:O0,envmap_vertex:A0,fog_vertex:T0,fog_pars_vertex:R0,fog_fragment:C0,fog_pars_fragment:P0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:D0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:N0,lights_pars_begin:U0,lights_toon_fragment:F0,lights_toon_pars_fragment:B0,lights_phong_fragment:z0,lights_phong_pars_fragment:H0,lights_physical_fragment:G0,lights_physical_pars_fragment:k0,lights_fragment_begin:V0,lights_fragment_maps:W0,lights_fragment_end:X0,lightprobes_pars_fragment:Y0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:K0,map_fragment:J0,map_pars_fragment:Q0,map_particle_fragment:j0,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:rg,morphnormal_vertex:sg,morphtarget_pars_vertex:og,morphtarget_vertex:ag,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:ug,normal_pars_vertex:hg,normal_vertex:fg,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:_g,opaque_fragment:xg,packing:vg,premultiplied_alpha_fragment:Sg,project_vertex:Mg,dithering_fragment:yg,dithering_pars_fragment:bg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Tg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Cg,skinbase_vertex:Pg,skinning_pars_vertex:Lg,skinning_vertex:Dg,skinnormal_vertex:Ig,specularmap_fragment:Ng,specularmap_pars_fragment:Ug,tonemapping_fragment:Og,tonemapping_pars_fragment:Fg,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:Hg,uv_pars_vertex:Gg,uv_vertex:kg,worldpos_vertex:Vg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:Yg,backgroundCube_frag:qg,cube_vert:Zg,cube_frag:$g,depth_vert:Kg,depth_frag:Jg,distance_vert:Qg,distance_frag:jg,equirect_vert:e_,equirect_frag:t_,linedashed_vert:n_,linedashed_frag:i_,meshbasic_vert:r_,meshbasic_frag:s_,meshlambert_vert:o_,meshlambert_frag:a_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:u_,meshnormal_frag:h_,meshphong_vert:f_,meshphong_frag:d_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:__,points_vert:x_,points_frag:v_,shadow_vert:S_,shadow_frag:M_,sprite_vert:y_,sprite_frag:b_},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ai={basic:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Mn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Mn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Mn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Mn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Mn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Mn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Mn([Se.common,Se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Mn([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ai.physical={uniforms:Mn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Fo={r:0,b:0,g:0},E_=new lt,Tf=new Qe;Tf.set(-1,0,0,0,1,0,0,0,1);function w_(i,e,t,n,r,s){const o=new He(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const x=M.backgroundBlurriness>0;A=e.get(A,x)}return A}function _(M){let A=!1;const x=p(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),A=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,A){const x=p(A);x&&(x.isCubeTexture||x.mapping===la)?(c===void 0&&(c=new mn(new it(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:kr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tf),c.material.toneMapped=gt.getTransfer(x.colorSpace)!==Ct,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new mn(new Wr(2,2),new fi({name:"BackgroundMaterial",uniforms:kr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=gt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(Fo,bf(i)),t.buffers.color.setClear(Fo.r,Fo.g,Fo.b,A,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:_,addToRenderList:S,dispose:d}}function A_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(L,I,U,P,z){let G=!1;const $=f(L,P,U,I);s!==$&&(s=$,c(s.object)),G=p(L,P,U,z),G&&_(L,P,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(L,I,U,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,I,U,P){const z=P.wireframe===!0;let G=n[I.id];G===void 0&&(G={},n[I.id]=G);const $=L.isInstancedMesh===!0?L.id:0;let oe=G[$];oe===void 0&&(oe={},G[$]=oe);let Z=oe[U.id];Z===void 0&&(Z={},oe[U.id]=Z);let ee=Z[z];return ee===void 0&&(ee=h(l()),Z[z]=ee),ee}function h(L){const I=[],U=[],P=[];for(let z=0;z<t;z++)I[z]=0,U[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:P,object:L,attributes:{},index:null}}function p(L,I,U,P){const z=s.attributes,G=I.attributes;let $=0;const oe=U.getAttributes();for(const Z in oe)if(oe[Z].location>=0){const re=z[Z];let Ae=G[Z];if(Ae===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),re===void 0||re.attribute!==Ae||Ae&&re.data!==Ae.data)return!0;$++}return s.attributesNum!==$||s.index!==P}function _(L,I,U,P){const z={},G=I.attributes;let $=0;const oe=U.getAttributes();for(const Z in oe)if(oe[Z].location>=0){let re=G[Z];re===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const Ae={};Ae.attribute=re,re&&re.data&&(Ae.data=re.data),z[Z]=Ae,$++}s.attributes=z,s.attributesNum=$,s.index=P}function S(){const L=s.newAttributes;for(let I=0,U=L.length;I<U;I++)L[I]=0}function m(L){d(L,0)}function d(L,I){const U=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;U[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),z[L]!==I&&(i.vertexAttribDivisor(L,I),z[L]=I)}function M(){const L=s.newAttributes,I=s.enabledAttributes;for(let U=0,P=I.length;U<P;U++)I[U]!==L[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function A(L,I,U,P,z,G,$){$===!0?i.vertexAttribIPointer(L,I,U,z,G):i.vertexAttribPointer(L,I,U,P,z,G)}function x(L,I,U,P){S();const z=P.attributes,G=U.getAttributes(),$=I.defaultAttributeValues;for(const oe in G){const Z=G[oe];if(Z.location>=0){let ee=z[oe];if(ee===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const re=ee.normalized,Ae=ee.itemSize,me=e.get(ee);if(me===void 0)continue;const rt=me.buffer,qe=me.type,Ze=me.bytesPerElement,Q=qe===i.INT||qe===i.UNSIGNED_INT||ee.gpuType===hc;if(ee.isInterleavedBufferAttribute){const ie=ee.data,Ee=ie.stride,Ge=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let Me=0;Me<Z.locationSize;Me++)d(Z.location+Me,ie.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Me=0;Me<Z.locationSize;Me++)m(Z.location+Me);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Me=0;Me<Z.locationSize;Me++)A(Z.location+Me,Ae/Z.locationSize,qe,re,Ee*Ze,(Ge+Ae/Z.locationSize*Me)*Ze,Q)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<Z.locationSize;ie++)d(Z.location+ie,ee.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<Z.locationSize;ie++)m(Z.location+ie);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ie=0;ie<Z.locationSize;ie++)A(Z.location+ie,Ae/Z.locationSize,qe,re,Ae*Ze,Ae/Z.locationSize*ie*Ze,Q)}}else if($!==void 0){const re=$[oe];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Z.location,re);break;case 3:i.vertexAttrib3fv(Z.location,re);break;case 4:i.vertexAttrib4fv(Z.location,re);break;default:i.vertexAttrib1fv(Z.location,re)}}}}M()}function y(){E();for(const L in n){const I=n[L];for(const U in I){const P=I[U];for(const z in P){const G=P[z];for(const $ in G)u(G[$].object),delete G[$];delete P[z]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const I=n[L.id];for(const U in I){const P=I[U];for(const z in P){const G=P[z];for(const $ in G)u(G[$].object),delete G[$];delete P[z]}}delete n[L.id]}function R(L){for(const I in n){const U=n[I];for(const P in U){const z=U[P];if(z[L.id]===void 0)continue;const G=z[L.id];for(const $ in G)u(G[$].object),delete G[$];delete z[L.id]}}}function g(L){for(const I in n){const U=n[I],P=L.isInstancedMesh===!0?L.id:0,z=U[P];if(z!==void 0){for(const G in z){const $=z[G];for(const oe in $)u($[oe].object),delete $[oe];delete z[G]}delete U[P],Object.keys(U).length===0&&delete n[I]}}}function E(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:T,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function T_(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function R_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ei&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const g=R===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pn&&R!==Ln&&!g&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:x,maxSamples:y,samples:b}}function C_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Oi,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,A=M*4;let x=d.clippingState||null;l.value=x,x=u(_,h,A,p);for(let y=0;y!==A;++y)x[y]=t[y];d.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const d=p+S*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,x=p;A!==S;++A,x+=4)o.copy(f[A]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Ir=4,P_=6,L_=20,D_=256,ms=new Pc,Xu=new He;let Ka=null,Ja=0,Qa=0,ja=!1;const I_=new N,qi=new N;class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=I_}=s;Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Ja,Qa),this._renderer.xr.enabled=ja,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Dn,format:ei,colorSpace:Ns,depthBuffer:!1},r=qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N_(s)),this._blurMaterial=O_(s,e,t),this._ggxMaterial=U_(s,e,t)}return r}_compileMaterial(e){const t=new mn(new At,e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,r,s){const l=new Fn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Xu),f.toneMapping=ci,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new it,new zr({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(Xu),d=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const y=this._cubeSize;Rr(r,x*y,A>2?y:0,y,y),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ji||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-Ir?n-_+Ir:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Rr(s,m,d,3*S,2*S),r.setRenderTarget(s),r.render(a,ms),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Rr(e,m,d,3*S,2*S),r.setRenderTarget(e),r.render(a,ms)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-Ir?r-this._lodMax+Ir:0),h=4*(this._cubeSize-u);Rr(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,ms)}}function N_(i){const e=[],t=[];let n=i;const r=i-Ir+1+P_;for(let s=0;s<r;s++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,_=new Float32Array(p*h*f),S=new Float32Array(p*h*f);for(let d=0;d<f;d++){const M=d%3*2/3-1,A=d>2?0:-1,x=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];_.set(x,p*h*d);for(let y=0;y<h;y++){const b=u[y*2]*2-1,R=u[y*2+1]*2-1;d===0?qi.set(1,R,b):d===1?qi.set(-b,1,-R):d===2?qi.set(-b,R,1):d===3?qi.set(-1,R,-b):d===4?qi.set(-b,-1,R):qi.set(b,R,-1),qi.toArray(S,(d*h+y)*p)}}const m=new At;m.setAttribute("position",new Be(_,p)),m.setAttribute("outputDirection",new Be(S,p)),t.push(new mn(m,null)),n>Ir&&n--}return{lodMeshes:t,sizeLods:e}}function qu(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function U_(i,e,t){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function O_(i,e,t){return new fi({name:"SphericalGaussianBlur",defines:{SAMPLES:L_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Zu(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function $u(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rf extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ff(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new it(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Ei});s.uniforms.tEquirect.value=t;const o=new mn(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=qt),new zm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function F_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Xo||p===Sa)if(e.has(h)){const _=e.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new Rf(_.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,_=p===Xo||p===Sa,S=p===Ji||p===Hr;if(_||S){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Yu(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return _&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Yu(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Xo?h.mapping=Ji:p===Sa&&(h.mapping=Hr),h}function l(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function B_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Fr("WebGLRenderer: "+n+" extension not supported."),r}}}function z_(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const M=p.array;S=p.version;for(let A=0,x=M.length;A<x;A+=3){const y=M[A+0],b=M[A+1],R=M[A+2];h.push(y,b,b,R,R,y)}}else{const M=_.array;S=_.version;for(let A=0,x=M.length/3-1;A<x;A+=3){const y=A+0,b=A+1,R=A+2;h.push(y,b,b,R,R,y)}}const m=new(_.count>=65535?cf:lf)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function H_(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*o),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,f*o,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];t.update(S,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function G_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function k_(i,e,t){const n=new WeakMap,r=new Gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let A=0;p===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let x=a.attributes.position.count*A,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const b=new Float32Array(x*y*4*f),R=new of(b,x,y,f);R.type=Ln,R.needsUpdate=!0;const g=A*4;for(let T=0;T<f;T++){const L=m[T],I=d[T],U=M[T],P=x*y*4*T;for(let z=0;z<L.count;z++){const G=z*g;p===!0&&(r.fromBufferAttribute(L,z),b[P+G+0]=r.x,b[P+G+1]=r.y,b[P+G+2]=r.z,b[P+G+3]=0),_===!0&&(r.fromBufferAttribute(I,z),b[P+G+4]=r.x,b[P+G+5]=r.y,b[P+G+6]=r.z,b[P+G+7]=0),S===!0&&(r.fromBufferAttribute(U,z),b[P+G+8]=r.x,b[P+G+9]=r.y,b[P+G+10]=r.z,b[P+G+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new pe(x,y)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function V_(i,e,t,n,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const W_={[Wh]:"LINEAR_TONE_MAPPING",[Xh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[uc]:"NEUTRAL_TONE_MAPPING",[Zh]:"CUSTOM_TONE_MAPPING"};function X_(i,e,t,n,r,s){const o=new ti(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new At;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const u=new wm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new mn(c,u),h=new Pc(-1,1,1,-1,0,1);let p=null,_=null,S=!1,m,d=null,M=[],A=!1;this.setSize=function(x,y){o.setSize(x,y),a!==null&&a.setSize(x,y),l!==null&&l.setSize(x,y);for(let b=0;b<M.length;b++){const R=M[b];R.setSize&&R.setSize(x,y)}},this.setEffects=function(x){M=x,A=M.length>0&&M[0].isRenderPass===!0;const y=o.width,b=o.height;M.length>0&&a===null&&(a=new ti(y,b,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new ti(y,b,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const g=M[R];g.setSize&&g.setSize(y,b)}},this.begin=function(x,y){if(S||x.toneMapping===ci&&M.length===0)return!1;if(d=y,y!==null){const b=y.width,R=y.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return A===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ci,!0},this.hasRenderPass=function(){return A},this.end=function(x,y){x.toneMapping=m,S=!0;let b=o,R=a;for(let g=0;g<M.length;g++){const E=M[g];E.enabled!==!1&&(E.render(x,R,b,y),E.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(p!==x.outputColorSpace||_!==x.toneMapping){p=x.outputColorSpace,_=x.toneMapping,u.defines={},gt.getTransfer(p)===Ct&&(u.defines.SRGB_TRANSFER="");const g=W_[_];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(d),x.render(f,h),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Cf=new jt,ic=new Bs(1,1),Pf=new of,Lf=new xp,Df=new ff,Ku=[],Ju=[],Qu=new Float32Array(16),ju=new Float32Array(9),eh=new Float32Array(4);function Xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ku[r];if(s===void 0&&(s=new Float32Array(r),Ku[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function da(i,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Y_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function K_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),tn(t,n)}}function J_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ju.set(n),i.uniformMatrix3fv(this.addr,!1,ju),tn(t,n)}}function Q_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Qu.set(n),i.uniformMatrix4fv(this.addr,!1,Qu),tn(t,n)}}function j_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function ax(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ic.compareFunction=t.isReversedDepthBuffer()?vc:xc,s=ic):s=Cf,t.setTexture2D(e||s,r)}function lx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Lf,r)}function cx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Df,r)}function ux(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pf,r)}function hx(i){switch(i){case 5126:return Y_;case 35664:return q_;case 35665:return Z_;case 35666:return $_;case 35674:return K_;case 35675:return J_;case 35676:return Q_;case 5124:case 35670:return j_;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return rx;case 36295:return sx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return ux}}function fx(i,e){i.uniform1fv(this.addr,e)}function dx(i,e){const t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function px(i,e){const t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function mx(i,e){const t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function gx(i,e){const t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _x(i,e){const t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xx(i,e){const t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vx(i,e){i.uniform1iv(this.addr,e)}function Sx(i,e){i.uniform2iv(this.addr,e)}function Mx(i,e){i.uniform3iv(this.addr,e)}function yx(i,e){i.uniform4iv(this.addr,e)}function bx(i,e){i.uniform1uiv(this.addr,e)}function Ex(i,e){i.uniform2uiv(this.addr,e)}function wx(i,e){i.uniform3uiv(this.addr,e)}function Ax(i,e){i.uniform4uiv(this.addr,e)}function Tx(i,e,t){const n=this.cache,r=e.length,s=da(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=ic:o=Cf;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Rx(i,e,t){const n=this.cache,r=e.length,s=da(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Lf,s[o])}function Cx(i,e,t){const n=this.cache,r=e.length,s=da(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Df,s[o])}function Px(i,e,t){const n=this.cache,r=e.length,s=da(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pf,s[o])}function Lx(i){switch(i){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return Sx;case 35668:case 35672:return Mx;case 35669:case 35673:return yx;case 5125:return bx;case 36294:return Ex;case 36295:return wx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hx(t.type)}}class Ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function th(i,e){i.seq.push(e),i.map[e.id]=e}function Ux(i,e,t){const n=i.name,r=n.length;for(el.lastIndex=0;;){const s=el.exec(n),o=el.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){th(t,c===void 0?new Dx(a,i,e):new Ix(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Nx(a),th(t,f)),t=f}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Ux(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function nh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ox=37297;let Fx=0;function Bx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ih=new Qe;function zx(i){gt._getMatrix(ih,gt.workingColorSpace,i);const e=`mat3( ${ih.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Bx(i.getShaderSource(e),a)}else return s}function Hx(i,e){const t=zx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Gx={[Wh]:"Linear",[Xh]:"Reinhard",[Yh]:"Cineon",[qh]:"ACESFilmic",[$h]:"AgX",[uc]:"Neutral",[Zh]:"Custom"};function kx(i,e){const t=Gx[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bo=new N;function Vx(){gt.getLuminanceCoefficients(Bo);const i=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function Xx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ys(i){return i!==""}function sh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(qx,$x)}const Zx=new Map;function $x(i,e){let t=nt[e];if(t===void 0){const n=Zx.get(e);if(n!==void 0)t=nt[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rc(t)}const Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(Kx,Jx)}function Jx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Qx={[Wo]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function jx(i){return Qx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ev={[Ji]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function tv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ev[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const nv={[Hr]:"ENVMAP_MODE_REFRACTION"};function iv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rv={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Od]:"ENVMAP_BLENDING_ADD"};function sv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rv[i.combine]||"ENVMAP_BLENDING_NONE"}function ov(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function av(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jx(t),c=tv(t),u=iv(t),f=sv(t),h=ov(t),p=Wx(t),_=Xx(s),S=r.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ys).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ys).join(`
`),d.length>0&&(d+=`
`)):(m=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),d=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?nt.tonemapping_pars_fragment:"",t.toneMapping!==ci?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Hx("linearToOutputTexel",t.outputColorSpace),Vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),o=rc(o),o=sh(o,t),o=oh(o,t),a=rc(a),a=sh(a,t),a=oh(a,t),o=ah(o),a=ah(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=M+m+o,x=M+d+a,y=nh(r,r.VERTEX_SHADER,A),b=nh(r,r.FRAGMENT_SHADER,x);r.attachShader(S,y),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(L){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(S)||"",U=r.getShaderInfoLog(y)||"",P=r.getShaderInfoLog(b)||"",z=I.trim(),G=U.trim(),$=P.trim();let oe=!0,Z=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,y,b);else{const ee=rh(r,y,"vertex"),re=rh(r,b,"fragment");mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+ee+`
`+re)}else z!==""?ke("WebGLProgram: Program Info Log:",z):(G===""||$==="")&&(Z=!1);Z&&(L.diagnostics={runnable:oe,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(y),r.deleteShader(b),g=new Jo(r,S),E=Yx(r,S)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(S,Ox)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=b,this}let lv=0;class cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uv(e),t.set(e,n)),n}}class uv{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}}function hv(i){return i===Qi||i===jo||i===ea}function fv(i,e,t,n,r,s){const o=new yc,a=new cv,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,E,T,L,I,U){const P=L.fog,z=I.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,oe=e.get(g.envMap||G,$),Z=oe&&oe.mapping===la?oe.image.height:null,ee=p[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&ke("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ae=re!==void 0?re.length:0;let me=0;z.morphAttributes.position!==void 0&&(me=1),z.morphAttributes.normal!==void 0&&(me=2),z.morphAttributes.color!==void 0&&(me=3);let rt,qe,Ze,Q;if(ee){const Tt=ai[ee];rt=Tt.vertexShader,qe=Tt.fragmentShader}else{rt=g.vertexShader,qe=g.fragmentShader;const Tt=a.getVertexShaderStage(g),xt=a.getFragmentShaderStage(g);a.update(g,Tt,xt),Ze=Tt.id,Q=xt.id}const ie=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ge=I.isInstancedMesh===!0,Me=I.isBatchedMesh===!0,We=!!g.map,yt=!!g.matcap,Xe=!!oe,he=!!g.aoMap,_t=!!g.lightMap,je=!!g.bumpMap&&g.wireframe===!1,bt=!!g.normalMap,It=!!g.displacementMap,Zt=!!g.emissiveMap,Et=!!g.metalnessMap,vt=!!g.roughnessMap,B=g.anisotropy>0,Yt=g.clearcoat>0,dt=g.dispersion>0,C=g.retroreflectivity>0,v=g.iridescence>0,H=g.sheen>0,X=g.transmission>0,K=B&&!!g.anisotropyMap,le=Yt&&!!g.clearcoatMap,ue=Yt&&!!g.clearcoatNormalMap,J=Yt&&!!g.clearcoatRoughnessMap,te=v&&!!g.iridescenceMap,fe=v&&!!g.iridescenceThicknessMap,Te=H&&!!g.sheenColorMap,ne=H&&!!g.sheenRoughnessMap,W=!!g.specularMap,De=!!g.specularColorMap,ze=!!g.specularIntensityMap,Ye=X&&!!g.transmissionMap,F=X&&!!g.thicknessMap,de=!!g.gradientMap,j=!!g.alphaMap,ce=g.alphaTest>0,ve=!!g.alphaHash,se=!!g.extensions;let Ue=ci;g.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const we={shaderID:ee,shaderType:g.type,shaderName:g.name,vertexShader:rt,fragmentShader:qe,defines:g.defines,customVertexShaderID:Ze,customFragmentShaderID:Q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Me,batchingColor:Me&&I._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&I.instanceColor!==null,instancingMorph:Ge&&I.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:We,matcap:yt,envMap:Xe,envMapMode:Xe&&oe.mapping,envMapCubeUVHeight:Z,aoMap:he,lightMap:_t,bumpMap:je,normalMap:bt,displacementMap:It,emissiveMap:Zt,normalMapObjectSpace:bt&&g.normalMapType===zd,normalMapTangentSpace:bt&&g.normalMapType===Ql,packedNormalMap:bt&&g.normalMapType===Ql&&hv(g.normalMap.format),metalnessMap:Et,roughnessMap:vt,anisotropy:B,anisotropyMap:K,clearcoat:Yt,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:J,dispersion:dt,retroreflection:C,iridescence:v,iridescenceMap:te,iridescenceThicknessMap:fe,sheen:H,sheenColorMap:Te,sheenRoughnessMap:ne,specularMap:W,specularColorMap:De,specularIntensityMap:ze,transmission:X,transmissionMap:Ye,thicknessMap:F,gradientMap:de,opaque:g.transparent===!1&&g.blending===Or&&g.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:ve,combine:g.combine,mapUv:We&&_(g.map.channel),aoMapUv:he&&_(g.aoMap.channel),lightMapUv:_t&&_(g.lightMap.channel),bumpMapUv:je&&_(g.bumpMap.channel),normalMapUv:bt&&_(g.normalMap.channel),displacementMapUv:It&&_(g.displacementMap.channel),emissiveMapUv:Zt&&_(g.emissiveMap.channel),metalnessMapUv:Et&&_(g.metalnessMap.channel),roughnessMapUv:vt&&_(g.roughnessMap.channel),anisotropyMapUv:K&&_(g.anisotropyMap.channel),clearcoatMapUv:le&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ne&&_(g.sheenRoughnessMap.channel),specularMapUv:W&&_(g.specularMap.channel),specularColorMapUv:De&&_(g.specularColorMap.channel),specularIntensityMapUv:ze&&_(g.specularIntensityMap.channel),transmissionMapUv:Ye&&_(g.transmissionMap.channel),thicknessMapUv:F&&_(g.thicknessMap.channel),alphaMapUv:j&&_(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(bt||B),vertexNormals:!!z.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(We||j),fog:!!P,useFog:g.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&bt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:We&&g.map.isVideoTexture===!0&&gt.getTransfer(g.map.colorSpace)===Ct,decodeVideoTextureEmissive:Zt&&g.emissiveMap.isVideoTexture===!0&&gt.getTransfer(g.emissiveMap.colorSpace)===Ct,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===yn,flipSided:g.side===Tn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:se&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&g.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const T in g.defines)E.push(T),E.push(g.defines[T]);return g.isRawShaderMaterial===!1&&(d(E,g),M(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function d(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function M(g,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function A(g){const E=p[g.type];let T;if(E){const L=ai[E];T=ym.clone(L.uniforms)}else T=g.uniforms;return T}function x(g,E){let T=u.get(E);return T!==void 0?++T.usedTimes:(T=new av(i,E,g,r),c.push(T),u.set(E,T)),T}function y(g){if(--g.usedTimes===0){const E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function b(g){a.remove(g)}function R(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:x,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:R}}function dv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function pv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ch(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,_,S,m,d){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:_,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},i[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=_,M.materialVariant=o(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function l(h,p,_,S,m,d,M){M.reversedDepth===!0&&(m=-m);const A=a(h,p,_,S,m,d);_.transmission>0?n.push(A):_.transparent===!0?r.push(A):t.push(A)}function c(h,p,_,S,m,d){const M=a(h,p,_,S,m,d);_.transmission>0?n.unshift(M):_.transparent===!0?r.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||pv),n.length>1&&n.sort(p||ch),r.length>1&&r.sort(p||ch)}function f(){for(let h=e,p=i.length;h<p;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function mv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new uh,i.set(n,[o])):r>=s.length?(o=new uh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function gv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new He};break;case"SpotLight":t={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function _v(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xv=0;function vv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sv(i){const e=new gv,t=_v(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new lt,o=new lt;function a(c){let u=0,f=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,_=0,S=0,m=0,d=0,M=0,A=0,x=0,y=0,b=0,R=0,g=0,E=0,T=0;c.sort(vv);for(let I=0,U=c.length;I<U;I++){const P=c[I],z=P.color,G=P.intensity,$=P.distance;let oe=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Qi?oe=P.shadow.map.texture:oe=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*G,f+=z.g*G,h+=z.b*G;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],G);T++}else if(P.isSunLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,re=t.get(P);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[_]=re,n.sunShadowMap[_]=oe;const Ae=ee.getViewportCount();for(let me=0;me<Ae;me++)n.sunShadowMatrix[S+me]=ee.getMatrix(me),n.sunShadowCascade[S+me]=ee._cascadeData[me];S+=Ae,_++}n.sun[p]=Z,p++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,re=t.get(P);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=P.shadow.matrix,y++}n.directional[m]=Z,m++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(z).multiplyScalar(G),Z.distance=$,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[M]=Z;const ee=P.shadow;if(P.map&&(n.spotLightMap[g]=P.map,g++,ee.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[M]=ee.matrix,P.castShadow){const re=t.get(P);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.spotShadow[M]=re,n.spotShadowMap[M]=oe,R++}M++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(z).multiplyScalar(G),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=Z,A++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const ee=P.shadow,re=t.get(P);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,re.shadowCameraNear=ee.camera.near,re.shadowCameraFar=ee.camera.far,n.pointShadow[d]=re,n.pointShadowMap[d]=oe,n.pointShadowMatrix[d]=P.shadow.matrix,b++}n.point[d]=Z,d++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(G),Z.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[x]=Z,x++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==d||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==x||L.numSunShadows!==_||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==R||L.numSpotMaps!==g||L.numLightProbes!==T)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=d,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+g-E,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,L.sunLength=p,L.directionalLength=m,L.pointLength=d,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=x,L.numSunShadows=_,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=R,L.numSpotMaps=g,L.numLightProbes=T,n.version=xv++)}function l(c,u){let f=0,h=0,p=0,_=0,S=0,m=0;const d=u.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){const x=c[M];if(x.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(d),f++}else if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),h++}else if(x.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),_++}else if(x.isRectAreaLight){const y=n.rectArea[S];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),S++}else if(x.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:n}}function hh(i){const e=new Sv(i),t=[],n=[],r=[];function s(h){f.camera=h,t.length=0,n.length=0,r.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Mv(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hh(i),e.set(r,[a])):s>=o.length?(a=new hh(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ev=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],wv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],fh=new lt,gs=new N,tl=new N;function Av(i,e,t){let n=new Ec;const r=new pe,s=new pe,o=new Gt,a=new Am,l=new Tm,c={},u=t.maxTextureSize,f={[Ki]:Tn,[Tn]:Ki,[yn]:yn},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:yv,fragmentShader:bv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new At;_.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new mn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let d=this.type;this.render=function(b,R,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===gd&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wo);const E=i.getRenderTarget(),T=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ei),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=d!==this.type;U&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=b.length;P<z;P++){const G=b[P],$=G.shadow;if($===void 0){ke("WebGLShadowMap:",G,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const oe=$.getFrameExtents();r.multiply(oe),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,$.mapSize.y=s.y));const Z=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||U===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ss){if(G.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ti(r.x,r.y,{format:Qi,type:Dn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),$.map.texture.name=G.name+".shadowMap",$.map.depthTexture=new Bs(r.x,r.y,Ln),$.map.depthTexture.name=G.name+".shadowMapDepth",$.map.depthTexture.format=Ai,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un}else G.isPointLight?($.map=new Rf(r.x),$.map.depthTexture=new kp(r.x,hi)):($.map=new ti(r.x,r.y),$.map.depthTexture=new Bs(r.x,r.y,hi)),$.map.depthTexture.name=G.name+".shadowMap",$.map.depthTexture.format=Ai,this.type===Wo?($.map.depthTexture.compareFunction=Z?vc:xc,$.map.depthTexture.minFilter=qt,$.map.depthTexture.magFilter=qt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const ee=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();G.isPointLight!==!0&&$.updateMatrices(G,g);for(let re=0;re<ee;re++){const Ae=$.getCamera(re);if(G.isPointLight){const me=$.camera,rt=$.matrix,qe=G.distance||me.far;qe!==me.far&&(me.far=qe,me.updateProjectionMatrix()),gs.setFromMatrixPosition(G.matrixWorld),me.position.copy(gs),tl.copy(me.position),tl.add(Ev[re]),me.up.copy(wv[re]),me.lookAt(tl),me.updateMatrixWorld(),rt.makeTranslation(-gs.x,-gs.y,-gs.z),fh.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),$._frustum.setFromProjectionMatrix(fh,me.coordinateSystem,me.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,re),i.clear();else{re===0&&(i.setRenderTarget($.map),i.clear());const me=$.getViewport(re);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),I.viewport(o)}n=$.getFrustum(re),x(R,g,Ae,G,this.type)}$.isPointLightShadow!==!0&&this.type===Ss&&M($,g),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,L)};function M(b,R){const g=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new ti(r.x,r.y,{format:Qi,type:Dn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,g,h,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,g,p,S,null)}function A(b,R,g,E){let T=null;const L=g.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)T=L;else if(T=g.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=T.uuid,U=R.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let z=P[U];z===void 0&&(z=T.clone(),P[U]=z,R.addEventListener("dispose",y)),T=z}if(T.visible=R.visible,T.wireframe=R.wireframe,E===Ss?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,g.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const I=i.properties.get(T);I.light=g}return T}function x(b,R,g,E,T){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Ss)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,b.matrixWorld);const U=e.update(b),P=b.material;if(Array.isArray(P)){const z=U.groups;for(let G=0,$=z.length;G<$;G++){const oe=z[G],Z=P[oe.materialIndex];if(Z&&Z.visible){const ee=A(b,Z,E,T);b.onBeforeShadow(i,b,R,g,U,ee,oe),i.renderBufferDirect(g,null,U,ee,b,oe),b.onAfterShadow(i,b,R,g,U,ee,oe)}}}else if(P.visible){const z=A(b,P,E,T);b.onBeforeShadow(i,b,R,g,U,z,null),i.renderBufferDirect(g,null,U,z,b,null),b.onAfterShadow(i,b,R,g,U,z,null)}}const I=b.children;for(let U=0,P=I.length;U<P;U++)x(I[U],R,g,E,T)}function y(b){b.target.removeEventListener("dispose",y);for(const g in c){const E=c[g],T=b.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function Tv(i,e){function t(){let F=!1;const de=new Gt;let j=null;const ce=new Gt(0,0,0,0);return{setMask:function(ve){j!==ve&&!F&&(i.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){F=ve},setClear:function(ve,se,Ue,we,Tt){Tt===!0&&(ve*=we,se*=we,Ue*=we),de.set(ve,se,Ue,we),ce.equals(de)===!1&&(i.clearColor(ve,se,Ue,we),ce.copy(de))},reset:function(){F=!1,j=null,ce.set(-1,0,0,0)}}}function n(){let F=!1,de=!1,j=null,ce=null,ve=null;return{setReversed:function(se){if(de!==se){const Ue=e.get("EXT_clip_control");se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),de=se;const we=ve;ve=null,this.setClear(we)}},getReversed:function(){return de},setTest:function(se){se?ie(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(se){j!==se&&!F&&(i.depthMask(se),j=se)},setFunc:function(se){if(de&&(se=Kd[se]),ce!==se){switch(se){case dl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=se}},setLocked:function(se){F=se},setClear:function(se){ve!==se&&(ve=se,de&&(se=1-se),i.clearDepth(se))},reset:function(){F=!1,j=null,ce=null,ve=null,de=!1}}}function r(){let F=!1,de=null,j=null,ce=null,ve=null,se=null,Ue=null,we=null,Tt=null;return{setTest:function(xt){F||(xt?ie(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(xt){de!==xt&&!F&&(i.stencilMask(xt),de=xt)},setFunc:function(xt,bn,In){(j!==xt||ce!==bn||ve!==In)&&(i.stencilFunc(xt,bn,In),j=xt,ce=bn,ve=In)},setOp:function(xt,bn,In){(se!==xt||Ue!==bn||we!==In)&&(i.stencilOp(xt,bn,In),se=xt,Ue=bn,we=In)},setLocked:function(xt){F=xt},setClear:function(xt){Tt!==xt&&(i.clearStencil(xt),Tt=xt)},reset:function(){F=!1,de=null,j=null,ce=null,ve=null,se=null,Ue=null,we=null,Tt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,_=[],S=null,m=!1,d=null,M=null,A=null,x=null,y=null,b=null,R=null,g=new He(0,0,0),E=0,T=!1,L=null,I=null,U=null,P=null,z=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,oe=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=oe>=2);let ee=null,re={};const Ae=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),rt=new Gt().fromArray(Ae),qe=new Gt().fromArray(me);function Ze(F,de,j,ce){const ve=new Uint8Array(4),se=i.createTexture();i.bindTexture(F,se),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<j;Ue++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(de+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return se}const Q={};Q[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Ls),je(!1),bt(jc),ie(i.CULL_FACE),he(Ei);function ie(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Ee(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Ge(F,de){return h[F]!==de?(i.bindFramebuffer(F,de),h[F]=de,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Me(F,de){let j=_,ce=!1;if(F){j=p.get(de),j===void 0&&(j=[],p.set(de,j));const ve=F.textures;if(j.length!==ve.length||j[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ue=ve.length;se<Ue;se++)j[se]=i.COLOR_ATTACHMENT0+se;j.length=ve.length,ce=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ce=!0);ce&&i.drawBuffers(j)}function We(F){return S!==F?(i.useProgram(F),S=F,!0):!1}const yt={[Dr]:i.FUNC_ADD,[xd]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};yt[Sd]=i.MIN,yt[Md]=i.MAX;const Xe={[yd]:i.ZERO,[bd]:i.ONE,[Ed]:i.SRC_COLOR,[Gh]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[kh]:i.ONE_MINUS_SRC_ALPHA,[Cd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function he(F,de,j,ce,ve,se,Ue,we,Tt,xt){if(F===Ei){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(ie(i.BLEND),m=!0),F!==_d){if(F!==d||xt!==T){if((M!==Dr||y!==Dr)&&(i.blendEquation(i.FUNC_ADD),M=Dr,y=Dr),xt)switch(F){case Or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",F);break}else switch(F){case Or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case eu:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",F);break}A=null,x=null,b=null,R=null,g.set(0,0,0),E=0,d=F,T=xt}return}ve=ve||de,se=se||j,Ue=Ue||ce,(de!==M||ve!==y)&&(i.blendEquationSeparate(yt[de],yt[ve]),M=de,y=ve),(j!==A||ce!==x||se!==b||Ue!==R)&&(i.blendFuncSeparate(Xe[j],Xe[ce],Xe[se],Xe[Ue]),A=j,x=ce,b=se,R=Ue),(we.equals(g)===!1||Tt!==E)&&(i.blendColor(we.r,we.g,we.b,Tt),g.copy(we),E=Tt),d=F,T=!1}function _t(F,de){F.side===yn?Ee(i.CULL_FACE):ie(i.CULL_FACE);let j=F.side===Tn;de&&(j=!j),je(j),F.blending===Or&&F.transparent===!1?he(Ei):he(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ce=F.stencilWrite;a.setTest(ce),ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(F){L!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),L=F)}function bt(F){F!==pd?(ie(i.CULL_FACE),F!==I&&(F===jc?i.cullFace(i.BACK):F===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),I=F}function It(F){F!==U&&($&&i.lineWidth(F),U=F)}function Zt(F,de,j){F?(ie(i.POLYGON_OFFSET_FILL),(P!==de||z!==j)&&(P=de,z=j,o.getReversed()&&(de=-de),i.polygonOffset(de,j))):Ee(i.POLYGON_OFFSET_FILL)}function Et(F){F?ie(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function vt(F){F===void 0&&(F=i.TEXTURE0+G-1),ee!==F&&(i.activeTexture(F),ee=F)}function B(F,de,j){j===void 0&&(ee===null?j=i.TEXTURE0+G-1:j=ee);let ce=re[j];ce===void 0&&(ce={type:void 0,texture:void 0},re[j]=ce),(ce.type!==F||ce.texture!==de)&&(ee!==j&&(i.activeTexture(j),ee=j),i.bindTexture(F,de||Q[F]),ce.type=F,ce.texture=de)}function Yt(){const F=re[ee];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function H(){try{i.texSubImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function le(){try{i.texStorage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function ue(){try{i.texStorage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function te(){try{i.texImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function fe(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function Te(F,de){f[F]!==de&&(i.pixelStorei(F,de),f[F]=de)}function ne(F){rt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),rt.copy(F))}function W(F){qe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),qe.copy(F))}function De(F,de){let j=c.get(de);j===void 0&&(j=new WeakMap,c.set(de,j));let ce=j.get(F);ce===void 0&&(ce=i.getUniformBlockIndex(de,F.name),j.set(F,ce))}function ze(F,de){const ce=c.get(de).get(F);l.get(de)!==ce&&(i.uniformBlockBinding(de,ce,F.__bindingPointIndex),l.set(de,ce))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ee=null,re={},h={},p=new WeakMap,_=[],S=null,m=!1,d=null,M=null,A=null,x=null,y=null,b=null,R=null,g=new He(0,0,0),E=0,T=!1,L=null,I=null,U=null,P=null,z=null,rt.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Ee,bindFramebuffer:Ge,drawBuffers:Me,useProgram:We,setBlending:he,setMaterial:_t,setFlipSided:je,setCullFace:bt,setLineWidth:It,setPolygonOffset:Zt,setScissorTest:Et,activeTexture:vt,bindTexture:B,unbindTexture:Yt,compressedTexImage2D:dt,compressedTexImage3D:C,texImage2D:J,texImage3D:te,pixelStorei:Te,getParameter:fe,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:le,texStorage3D:ue,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:ne,viewport:W,reset:Ye}}function Rv(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,v){return _?new OffscreenCanvas(C,v):Os("canvas")}function m(C,v,H){let X=1;const K=dt(C);if((K.width>H||K.height>H)&&(X=H/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const le=Math.floor(X*K.width),ue=Math.floor(X*K.height);h===void 0&&(h=S(le,ue));const J=v?S(le,ue):h;return J.width=le,J.height=ue,J.getContext("2d").drawImage(C,0,0,le,ue),ke("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+ue+")."),J}else return"data"in C&&ke("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function d(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,v,H,X,K,le=!1){if(C!==null){if(i[C]!==void 0)return i[C];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue;X&&(ue=e.get("EXT_texture_norm16"),ue||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8),H===i.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),H===i.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),v===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8),H===i.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),H===i.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),H===i.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){const te=le?ta:gt.getTransfer(K);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=te===Ct?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),H===i.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(C,v){let H;return C?v===null||v===hi||v===Is?H=i.DEPTH24_STENCIL8:v===Ln?H=i.DEPTH32F_STENCIL8:v===Ds&&(H=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hi||v===Is?H=i.DEPTH_COMPONENT24:v===Ln?H=i.DEPTH_COMPONENT32F:v===Ds&&(H=i.DEPTH_COMPONENT16),H}function b(C,v){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function R(C){const v=C.target;v.removeEventListener("dispose",R),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function g(C){const v=C.target;v.removeEventListener("dispose",g),L(v)}function E(C){const v=n.get(C);if(v.__webglInit===void 0)return;const H=C.source,X=p.get(H);if(X){const K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(C),Object.keys(X).length===0&&p.delete(H)}n.remove(C)}function T(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const H=C.source,X=p.get(H);delete X[v.__cacheKey],o.memory.textures--}function L(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[X][K]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=C.textures;for(let X=0,K=H.length;X<K;X++){const le=n.get(H[X]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(H[X])}n.remove(C)}let I=0;function U(){I=0}function P(){return I}function z(C){I=C}function G(){const C=I;return C>=r.maxTextures&&ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function $(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function oe(C,v){const H=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const X=C.image;if(X===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(H,C,v);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function Z(C,v){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Ee(H,C,v);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function ee(C,v){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Ee(H,C,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function re(C,v){const H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Ge(H,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const Ae={[Sl]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Ml]:i.MIRRORED_REPEAT},me={[un]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},rt={[Gd]:i.NEVER,[Yd]:i.ALWAYS,[kd]:i.LESS,[xc]:i.LEQUAL,[Vd]:i.EQUAL,[vc]:i.GEQUAL,[Wd]:i.GREATER,[Xd]:i.NOTEQUAL};function qe(C,v){if(v.type===Ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===Ma||v.magFilter===ao||v.magFilter===Bi||v.minFilter===qt||v.minFilter===Ma||v.minFilter===ao||v.minFilter===Bi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ae[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ae[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ae[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,me[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,rt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==ao&&v.minFilter!==Bi||v.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",R));const X=v.source;let K=p.get(X);K===void 0&&(K={},p.set(X,K));const le=$(v);if(le!==C.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[le].usedTimes++;const ue=K[C.__cacheKey];ue!==void 0&&(K[C.__cacheKey].usedTimes--,ue.usedTimes===0&&T(v)),C.__cacheKey=le,C.__webglTexture=K[le].texture}return H}function Q(C,v,H){return Math.floor(Math.floor(C/H)/v)}function ie(C,v,H,X){const le=C.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,X,v.data);else{le.sort((Te,ne)=>Te.start-ne.start);let ue=0;for(let Te=1;Te<le.length;Te++){const ne=le[ue],W=le[Te],De=ne.start+ne.count,ze=Q(W.start,v.width,4),Ye=Q(ne.start,v.width,4);W.start<=De+1&&ze===Ye&&Q(W.start+W.count-1,v.width,4)===ze?ne.count=Math.max(ne.count,W.start+W.count-ne.start):(++ue,le[ue]=W)}le.length=ue+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Te=0,ne=le.length;Te<ne;Te++){const W=le[Te],De=Math.floor(W.start/4),ze=Math.ceil(W.count/4),Ye=De%v.width,F=Math.floor(De/v.width),de=ze,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ye,F,de,j,H,X,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function Ee(C,v,H){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const K=Ze(C,v),le=v.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+H);const ue=n.get(le);if(le.version!==ue.__version||K===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=gt.getPrimaries(gt.workingColorSpace),ce=v.colorSpace===Fi?null:gt.getPrimaries(v.colorSpace),ve=v.colorSpace===Fi||j===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let te=m(v.image,!1,r.maxTextureSize);te=Yt(v,te);const fe=s.convert(v.format,v.colorSpace),Te=s.convert(v.type);let ne=x(v.internalFormat,fe,Te,v.normalized,v.colorSpace,v.isVideoTexture);qe(X,v);let W;const De=v.mipmaps,ze=v.isVideoTexture!==!0,Ye=ue.__version===void 0||K===!0,F=le.dataReady,de=b(v,te);if(v.isDepthTexture)ne=y(v.format===Zi,v.type),Ye&&(ze?t.texStorage2D(i.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,fe,Te,null));else if(v.isDataTexture)if(De.length>0){ze&&Ye&&t.texStorage2D(i.TEXTURE_2D,de,ne,De[0].width,De[0].height);for(let j=0,ce=De.length;j<ce;j++)W=De[j],ze?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,W.width,W.height,fe,Te,W.data):t.texImage2D(i.TEXTURE_2D,j,ne,W.width,W.height,0,fe,Te,W.data);v.generateMipmaps=!1}else ze?(Ye&&t.texStorage2D(i.TEXTURE_2D,de,ne,te.width,te.height),F&&ie(v,te,fe,Te)):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,fe,Te,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ne,De[0].width,De[0].height,te.depth);for(let j=0,ce=De.length;j<ce;j++)if(W=De[j],v.format!==ei)if(fe!==null)if(ze){if(F)if(v.layerUpdates.size>0){const ve=Wu(W.width,W.height,v.format,v.type);for(const se of v.layerUpdates){const Ue=W.data.subarray(se*ve/W.data.BYTES_PER_ELEMENT,(se+1)*ve/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,se,W.width,W.height,1,fe,Ue)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,W.width,W.height,te.depth,fe,W.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ne,W.width,W.height,te.depth,0,W.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,W.width,W.height,te.depth,fe,Te,W.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ne,W.width,W.height,te.depth,0,fe,Te,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ze&&Ye&&t.texStorage2D(i.TEXTURE_2D,de,ne,De[0].width,De[0].height);for(let j=0,ce=De.length;j<ce;j++)W=De[j],v.format!==ei?fe!==null?ze?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,W.width,W.height,fe,W.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ne,W.width,W.height,0,W.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,W.width,W.height,fe,Te,W.data):t.texImage2D(i.TEXTURE_2D,j,ne,W.width,W.height,0,fe,Te,W.data)}else if(v.isDataArrayTexture)if(ze){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ne,te.width,te.height,te.depth),F)if(v.layerUpdates.size>0){const j=Wu(te.width,te.height,v.format,v.type);for(const ce of v.layerUpdates){const ve=te.data.subarray(ce*j/te.data.BYTES_PER_ELEMENT,(ce+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,te.width,te.height,1,fe,Te,ve)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Te,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,fe,Te,te.data);else if(v.isData3DTexture)ze?(Ye&&t.texStorage3D(i.TEXTURE_3D,de,ne,te.width,te.height,te.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Te,te.data)):t.texImage3D(i.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,fe,Te,te.data);else if(v.isFramebufferTexture){if(Ye)if(ze)t.texStorage2D(i.TEXTURE_2D,de,ne,te.width,te.height);else{let j=te.width,ce=te.height;for(let ve=0;ve<de;ve++)t.texImage2D(i.TEXTURE_2D,ve,ne,j,ce,0,fe,Te,null),j>>=1,ce>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),te.parentNode!==j){j.appendChild(te),f.add(v),j.onpaint=ce=>{const ve=ce.changedElements;for(const se of f)ve.includes(se.image)&&(se.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const ve=i.RGBA,se=i.RGBA,Ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,se,Ue,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(ze&&Ye){const j=dt(De[0]);t.texStorage2D(i.TEXTURE_2D,de,ne,j.width,j.height)}for(let j=0,ce=De.length;j<ce;j++)W=De[j],ze?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,fe,Te,W):t.texImage2D(i.TEXTURE_2D,j,ne,fe,Te,W);v.generateMipmaps=!1}else if(ze){if(Ye){const j=dt(te);t.texStorage2D(i.TEXTURE_2D,de,ne,j.width,j.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Te,te)}else t.texImage2D(i.TEXTURE_2D,0,ne,fe,Te,te);d(v)&&M(X),ue.__version=le.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ge(C,v,H){if(v.image.length!==6)return;const X=Ze(C,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const le=n.get(K);if(K.version!==le.__version||X===!0){t.activeTexture(i.TEXTURE0+H);const ue=gt.getPrimaries(gt.workingColorSpace),J=v.colorSpace===Fi?null:gt.getPrimaries(v.colorSpace),te=v.colorSpace===Fi||ue===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const fe=v.isCompressedTexture||v.image[0].isCompressedTexture,Te=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!fe&&!Te?ne[se]=m(v.image[se],!0,r.maxCubemapSize):ne[se]=Te?v.image[se].image:v.image[se],ne[se]=Yt(v,ne[se]);const W=ne[0],De=s.convert(v.format,v.colorSpace),ze=s.convert(v.type),Ye=x(v.internalFormat,De,ze,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,de=le.__version===void 0||X===!0,j=K.dataReady;let ce=b(v,W);qe(i.TEXTURE_CUBE_MAP,v);let ve;if(fe){F&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ye,W.width,W.height);for(let se=0;se<6;se++){ve=ne[se].mipmaps;for(let Ue=0;Ue<ve.length;Ue++){const we=ve[Ue];v.format!==ei?De!==null?F?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,we.width,we.height,De,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,Ye,we.width,we.height,0,we.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,we.width,we.height,De,ze,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,Ye,we.width,we.height,0,De,ze,we.data)}}}else{if(ve=v.mipmaps,F&&de){ve.length>0&&ce++;const se=dt(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ye,se.width,se.height)}for(let se=0;se<6;se++)if(Te){F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,De,ze,ne[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ye,ne[se].width,ne[se].height,0,De,ze,ne[se].data);for(let Ue=0;Ue<ve.length;Ue++){const Tt=ve[Ue].image[se].image;F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,Tt.width,Tt.height,De,ze,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,Ye,Tt.width,Tt.height,0,De,ze,Tt.data)}}else{F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,ze,ne[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ye,De,ze,ne[se]);for(let Ue=0;Ue<ve.length;Ue++){const we=ve[Ue];F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,De,ze,we.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,Ye,De,ze,we.image[se])}}}d(v)&&M(i.TEXTURE_CUBE_MAP),le.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Me(C,v,H,X,K,le){const ue=s.convert(H.format,H.colorSpace),J=s.convert(H.type),te=x(H.internalFormat,ue,J,H.normalized,H.colorSpace),fe=n.get(v),Te=n.get(H);if(Te.__renderTarget=v,!fe.__hasExternalTextures){const ne=Math.max(1,v.width>>le),W=Math.max(1,v.height>>le);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,le,te,ne,W,v.depth,0,ue,J,null):t.texImage2D(K,le,te,ne,W,0,ue,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Te.__webglTexture,0,Et(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Te.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(C,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,le=y(v.stencilBuffer,K),ue=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et(v),le,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,C)}else{const X=v.textures;for(let K=0;K<X.length;K++){const le=X[K],ue=s.convert(le.format,le.colorSpace),J=s.convert(le.type),te=x(le.internalFormat,ue,J,le.normalized,le.colorSpace);vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et(v),te,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et(v),te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,v,H){const X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),qe(i.TEXTURE_CUBE_MAP,v.depthTexture);const fe=s.convert(v.depthTexture.format),Te=s.convert(v.depthTexture.type);let ne;v.depthTexture.format===Ai?ne=i.DEPTH_COMPONENT24:v.depthTexture.format===Zi&&(ne=i.DEPTH24_STENCIL8);for(let W=0;W<6;W++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ne,v.width,v.height,0,fe,Te,null)}}else oe(v.depthTexture,0);const le=K.__webglTexture,ue=Et(v),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,te=v.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ai)vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,le,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,le,0);else if(v.depthTexture.format===Zi)vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,le,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(C){const v=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)yt(v.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?yt(v.__webglFramebuffer[0],C,0):yt(v.__webglFramebuffer,C,0)}else if(H){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),We(v.__webglDepthbuffer[X],C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),We(v.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(C,v,H){const X=n.get(C);v!==void 0&&Me(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Xe(C)}function _t(C){const v=C.texture,H=n.get(C),X=n.get(v);C.addEventListener("dispose",g);const K=C.textures,le=C.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,o.memory.textures++),le){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let te=0;te<v.mipmaps.length;te++)H.__webglFramebuffer[J][te]=i.createFramebuffer()}else H.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)H.__webglFramebuffer[J]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ue)for(let J=0,te=K.length;J<te;J++){const fe=n.get(K[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&vt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const te=K[J];H.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const fe=s.convert(te.format,te.colorSpace),Te=s.convert(te.type),ne=x(te.internalFormat,fe,Te,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),W=Et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,ne,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,H.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),We(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qe(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Me(H.__webglFramebuffer[J][te],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else Me(H.__webglFramebuffer[J],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let J=0,te=K.length;J<te;J++){const fe=K[J],Te=n.get(fe);let ne=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,Te.__webglTexture),qe(ne,fe),Me(H.__webglFramebuffer,C,fe,i.COLOR_ATTACHMENT0+J,ne,0),d(fe)&&M(ne)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),qe(J,v),v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Me(H.__webglFramebuffer[te],C,v,i.COLOR_ATTACHMENT0,J,te);else Me(H.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,J,0);d(v)&&M(J),t.unbindTexture()}C.depthBuffer&&Xe(C)}function je(C){const v=C.textures;for(let H=0,X=v.length;H<X;H++){const K=v[H];if(d(K)){const le=A(C),ue=n.get(K).__webglTexture;t.bindTexture(le,ue),M(le),t.unbindTexture()}}}const bt=[],It=[];function Zt(C){if(C.samples>0){if(vt(C)===!1){const v=C.textures,H=C.width,X=C.height;let K=i.COLOR_BUFFER_BIT;const le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(C),J=v.length>1;if(J)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Te=n.get(v[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,H,X,0,0,H,X,K,i.NEAREST),l===!0&&(bt.length=0,It.length=0,bt.push(i.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(bt.push(le),It.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Te=n.get(v[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Et(C){return Math.min(r.maxSamples,C.samples)}function vt(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function B(C){const v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Yt(C,v){const H=C.colorSpace,X=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ns&&H!==Fi&&(gt.getTransfer(H)===Ct?(X!==ei||K!==Pn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",H)),v}function dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.getTextureUnits=P,this.setTextureUnits=z,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=he,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cv(i,e){function t(n,r=Fi){let s;const o=gt.getTransfer(r);if(n===Pn)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===hc)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===nf)return i.RGB;if(n===ei)return i.RGBA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===pc)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===Qi)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===Yo||n===qo||n===Zo||n===$o)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===bl||n===El||n===wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Tl||n===Rl||n===Cl||n===Pl||n===jo||n===Ll)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Al||n===Tl)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cl)return s.COMPRESSED_R11_EAC;if(n===Pl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===jo)return s.COMPRESSED_RG11_EAC;if(n===Ll)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Il||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===zl||n===Hl||n===Gl||n===kl||n===Vl||n===Wl||n===Xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===ql||n===Zl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Yl)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Kl||n===ea||n===Jl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$l)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new df(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:Pv,fragmentShader:Lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iv extends tr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Dv,d={},M=t.getContextAttributes();let A=null,x=null;const y=[],b=[],R=new pe;let g=null,E=null;const T=new Fn;T.viewport=new Gt;const L=new Fn;L.viewport=new Gt;const I=[T,L],U=new Hm;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=y[Q];return ie===void 0&&(ie=new Ra,y[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=y[Q];return ie===void 0&&(ie=new Ra,y[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=y[Q];return ie===void 0&&(ie=new Ra,y[Q]=ie),ie.getHandSpace()};function G(Q){const ie=b.indexOf(Q.inputSource);if(ie===-1)return;const Ee=y[ie];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||o),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<y.length;Q++){const ie=b[Q];ie!==null&&(b[Q]=null,y[Q].disconnect(ie))}P=null,z=null,m.reset();for(const Q in d)delete d[Q];if(e.setRenderTarget(A),p=null,h=null,f=null,r=null,x=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),E!==null){const Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",$),r.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ge=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?Zi:Ai,Ge=M.stencil?Is:hi);const We={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ti(h.textureWidth,h.textureHeight,{format:ei,type:Pn,depthTexture:new Bs(h.textureWidth,h.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ti(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(Q){for(let ie=0;ie<Q.removed.length;ie++){const Ee=Q.removed[ie],Ge=b.indexOf(Ee);Ge>=0&&(b[Ge]=null,y[Ge].disconnect(Ee))}for(let ie=0;ie<Q.added.length;ie++){const Ee=Q.added[ie];let Ge=b.indexOf(Ee);if(Ge===-1){for(let We=0;We<y.length;We++)if(We>=b.length){b.push(Ee),Ge=We;break}else if(b[We]===null){b[We]=Ee,Ge=We;break}if(Ge===-1)break}const Me=y[Ge];Me&&Me.connect(Ee)}}const Z=new N,ee=new N;function re(Q,ie,Ee){Z.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(Ee.matrixWorld);const Ge=Z.distanceTo(ee),Me=ie.projectionMatrix.elements,We=Ee.projectionMatrix.elements,yt=Me[14]/(Me[10]-1),Xe=Me[14]/(Me[10]+1),he=(Me[9]+1)/Me[5],_t=(Me[9]-1)/Me[5],je=(Me[8]-1)/Me[0],bt=(We[8]+1)/We[0],It=yt*je,Zt=yt*bt,Et=Ge/(-je+bt),vt=Et*-je;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(vt),Q.translateZ(Et),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const B=yt+Et,Yt=Xe+Et,dt=It-vt,C=Zt+(Ge-vt),v=he*Xe/Yt*B,H=_t*Xe/Yt*B;Q.projectionMatrix.makePerspective(dt,C,v,H,B,Yt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ae(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ie=Q.near,Ee=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),U.near=L.near=T.near=ie,U.far=L.far=T.far=Ee,(P!==U.near||z!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,z=U.far),U.layers.mask=Q.layers.mask|6,T.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Ge=Q.parent,Me=U.cameras;Ae(U,Ge);for(let We=0;We<Me.length;We++)Ae(Me[We],Ge);Me.length===2?re(U,T,L):U.projectionMatrix.copy(T.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),me(Q,U,Ge)};function me(Q,ie,Ee){Ee===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Fs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Q){return d[Q]};let rt=null;function qe(Q,ie){if(u=ie.getViewerPose(c||o),_=ie,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ge=!1;Ee.length!==U.cameras.length&&(U.cameras.length=0,Ge=!0);for(let Xe=0;Xe<Ee.length;Xe++){const he=Ee[Xe];let _t=null;if(p!==null)_t=p.getViewport(he);else{const bt=f.getViewSubImage(h,he);_t=bt.viewport,Xe===0&&(e.setRenderTargetTextures(x,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(x))}let je=I[Xe];je===void 0&&(je=new Fn,je.layers.enable(Xe),je.viewport=new Gt,I[Xe]=je),je.matrix.fromArray(he.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(he.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(_t.x,_t.y,_t.width,_t.height),Xe===0&&(U.matrix.copy(je.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ge===!0&&U.cameras.push(je)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const Xe=f.getDepthInformation(Ee[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(Me&&Me.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let Xe=0;Xe<Ee.length;Xe++){const he=Ee[Xe].camera;if(he){let _t=d[he];_t||(_t=new df,d[he]=_t);const je=f.getCameraImage(he);_t.sourceTexture=je}}}}for(let Ee=0;Ee<y.length;Ee++){const Ge=b[Ee],Me=y[Ee];Ge!==null&&Me!==void 0&&Me.update(Ge,ie,c||o)}rt&&rt(Q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ze=new Af;Ze.setAnimationLoop(qe),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}}const Nv=new lt,If=new Qe;If.set(-1,0,0,0,1,0,0,0,1);function Uv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,bf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,A,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),A=M.envMap,x=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(If),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ov(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const b=y.program;n.uniformBlockBinding(x,b)}function c(x,y){let b=r[x.id];b===void 0&&(m(x),b=u(x),r[x.id]=b,x.addEventListener("dispose",M));const R=y.program;n.updateUBOMapping(x,R);const g=e.render.frame;s[x.id]!==g&&(h(x),s[x.id]=g)}function u(x){const y=f();x.__bindingPointIndex=y;const b=i.createBuffer(),R=x.__size,g=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let g=0,E=b.length;g<E;g++){const T=b[g];if(Array.isArray(T))for(let L=0,I=T.length;L<I;L++)p(T[L],g,L,R);else p(T,g,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,b,R){if(S(x,y,b,R)===!0){const g=x.__offset,E=x.value;if(Array.isArray(E)){let T=0;for(let L=0;L<E.length;L++){const I=E[L],U=d(I);_(I,x.__data,T),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(T+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,x.__data)}}function _(x,y,b){typeof x=="number"||typeof x=="boolean"?y[0]=x:x.isMatrix3?(y[0]=x.elements[0],y[1]=x.elements[1],y[2]=x.elements[2],y[3]=0,y[4]=x.elements[3],y[5]=x.elements[4],y[6]=x.elements[5],y[7]=0,y[8]=x.elements[6],y[9]=x.elements[7],y[10]=x.elements[8],y[11]=0):ArrayBuffer.isView(x)?y.set(new x.constructor(x.buffer,x.byteOffset,y.length)):x.toArray(y,b)}function S(x,y,b,R){const g=x.value,E=y+"_"+b;if(R[E]===void 0)return typeof g=="number"||typeof g=="boolean"?R[E]=g:ArrayBuffer.isView(g)?R[E]=g.slice():R[E]=g.clone(),!0;{const T=R[E];if(typeof g=="number"||typeof g=="boolean"){if(T!==g)return R[E]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(T.equals(g)===!1)return T.copy(g),!0}}return!1}function m(x){const y=x.uniforms;let b=0;const R=16;for(let E=0,T=y.length;E<T;E++){const L=Array.isArray(y[E])?y[E]:[y[E]];for(let I=0,U=L.length;I<U;I++){const P=L[I],z=Array.isArray(P.value)?P.value:[P.value];for(let G=0,$=z.length;G<$;G++){const oe=z[G],Z=d(oe),ee=b%R,re=ee%Z.boundary,Ae=ee+re;b+=re,Ae!==0&&R-Ae<Z.storage&&(b+=R-Ae),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=Z.storage}}}const g=b%R;return g>0&&(b+=R-g),x.__size=b,x.__cache={},this}function d(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",x),y}function M(x){const y=x.target;y.removeEventListener("dispose",M);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function A(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:A}}const Fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Bv(){return si===null&&(si=new ra(Fv,16,16,Qi,Dn),si.name="DFG_LUT",si.minFilter=qt,si.magFilter=qt,si.wrapS=jn,si.wrapT=jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}class zv{constructor(e={}){const{canvas:t=Zd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const S=p,m=new Set([_c,gc,mc]),d=new Set([Pn,hi,Ds,Is,fc,dc]),M=new Uint32Array(4),A=new Int32Array(4),x=new N;let y=null,b=null;const R=[],g=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1,I=null,U=null,P=null,z=null;this._outputColorSpace=on;let G=0,$=0,oe=null,Z=-1,ee=null;const re=new Gt,Ae=new Gt;let me=null;const rt=new He(0);let qe=0,Ze=t.width,Q=t.height,ie=1,Ee=null,Ge=null;const Me=new Gt(0,0,Ze,Q),We=new Gt(0,0,Ze,Q);let yt=!1;const Xe=new Ec;let he=!1,_t=!1;const je=new lt,bt=new N,It=new Gt,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function vt(){return oe===null?ie:1}let B=n;function Yt(w,O){return t.getContext(w,O)}let dt,C,v,H,X,K,le,ue,J,te,fe,Te,ne,W,De,ze,Ye,F,de,j,ce,ve,se;try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",bn,!1),B===null){const O="webgl2";if(B=Yt(O,w),B===null)throw Yt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(w){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),mt("WebGLRenderer: "+w.message),w}function Ue(){dt=new B_(B),dt.init(),ce=new Cv(B,dt),C=new R_(B,dt,e,ce),v=new Tv(B,dt),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),U=B.createFramebuffer(),P=B.createFramebuffer(),z=B.createFramebuffer(),H=new G_(B),X=new dv,K=new Rv(B,dt,v,X,C,ce,H),le=new F_(T),ue=new Vm(B),ve=new A_(B,ue),J=new z_(B,ue,H,ve),te=new V_(B,J,ue,ve,H),F=new k_(B,C,K),De=new C_(X),fe=new fv(T,le,dt,C,ve,De),Te=new Uv(T,X),ne=new mv,W=new Mv(dt),Ye=new w_(T,le,v,te,_,l),ze=new Av(T,te,C),se=new Ov(B,H,C,v),de=new T_(B,dt,H),j=new H_(B,dt,H),H.programs=fe.programs,T.capabilities=C,T.extensions=dt,T.properties=X,T.renderLists=ne,T.shadowMap=ze,T.state=v,T.info=H}S!==Pn&&(E=new X_(S,t.width,t.height,a,r,s));const we=new Iv(T,B);this.xr=we,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(Ze,Q,!1))},this.getSize=function(w){return w.set(Ze,Q)},this.setSize=function(w,O,Y=!0){if(we.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=w,Q=O,t.width=Math.floor(w*ie),t.height=Math.floor(O*ie),Y===!0&&(t.style.width=w+"px",t.style.height=O+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Ze*ie,Q*ie).floor()},this.setDrawingBufferSize=function(w,O,Y){Ze=w,Q=O,ie=Y,t.width=Math.floor(w*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(S===Pn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(re)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,O,Y,k){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,O,Y,k),v.viewport(re.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(We)},this.setScissor=function(w,O,Y,k){w.isVector4?We.set(w.x,w.y,w.z,w.w):We.set(w,O,Y,k),v.scissor(Ae.copy(We).multiplyScalar(ie).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){v.setScissorTest(yt=w)},this.setOpaqueSort=function(w){Ee=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,Y=!0){let k=0;if(w){let V=!1;if(oe!==null){const ge=oe.texture.format;V=m.has(ge)}if(V){const ge=oe.texture.type,Ce=d.has(ge),_e=Ye.getClearColor(),Le=Ye.getClearAlpha(),Fe=_e.r,Ke=_e.g,Je=_e.b;Ce?(M[0]=Fe,M[1]=Ke,M[2]=Je,M[3]=Le,B.clearBufferuiv(B.COLOR,0,M)):(A[0]=Fe,A[1]=Ke,A[2]=Je,A[3]=Le,B.clearBufferiv(B.COLOR,0,A))}else k|=B.COLOR_BUFFER_BIT}O&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),Ye.dispose(),ne.dispose(),W.dispose(),X.dispose(),le.dispose(),te.dispose(),ve.dispose(),se.dispose(),fe.dispose(),we.dispose(),we.removeEventListener("sessionstart",qr),we.removeEventListener("sessionend",Zr),pi.stop()};function Tt(w){w.preventDefault(),na("WebGLRenderer: Context Lost."),L=!0}function xt(){na("WebGLRenderer: Context Restored."),L=!1;const w=H.autoReset,O=ze.enabled,Y=ze.autoUpdate,k=ze.needsUpdate,V=ze.type;Ue(),H.autoReset=w,ze.enabled=O,ze.autoUpdate=Y,ze.needsUpdate=k,ze.type=V}function bn(w){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function In(w){const O=w.target;O.removeEventListener("dispose",In),Hn(O)}function Hn(w){Zs(w),X.remove(w)}function Zs(w){const O=X.get(w).programs;O!==void 0&&(O.forEach(function(Y){fe.releaseProgram(Y)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,k,V,ge){O===null&&(O=Zt);const Ce=V.isMesh&&V.matrixWorld.determinantAffine()<0,_e=Qr(w,O,Y,k,V);v.setMaterial(k,Ce);let Le=Y.index,Fe=1;if(k.wireframe===!0){if(Le=J.getWireframeAttribute(Y),Le===void 0)return;Fe=2}const Ke=Y.drawRange,Je=Y.attributes.position;let xe=Ke.start*Fe,ct=(Ke.start+Ke.count)*Fe;ge!==null&&(xe=Math.max(xe,ge.start*Fe),ct=Math.min(ct,(ge.start+ge.count)*Fe)),Le!==null?(xe=Math.max(xe,0),ct=Math.min(ct,Le.count)):Je!=null&&(xe=Math.max(xe,0),ct=Math.min(ct,Je.count));const Bt=ct-xe;if(Bt<0||Bt===1/0)return;ve.setup(V,k,_e,Y,Le);let Rt,St=de;if(Le!==null&&(Rt=ue.get(Le),St=j,St.setIndex(Rt)),V.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*vt()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(V.isLine){let Jt=k.linewidth;Jt===void 0&&(Jt=1),v.setLineWidth(Jt*vt()),V.isLineSegments?St.setMode(B.LINES):V.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else V.isPoints?St.setMode(B.POINTS):V.isSprite&&St.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))St.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Jt=V._multiDrawStarts,ye=V._multiDrawCounts,nn=V._multiDrawCount,et=Le?ue.get(Le).bytesPerElement:1,gn=X.get(k).currentProgram.getUniforms();for(let _n=0;_n<nn;_n++)gn.setValue(B,"_gl_DrawID",_n),St.render(Jt[_n]/et,ye[_n])}else if(V.isInstancedMesh)St.renderInstances(xe,Bt,V.count);else if(Y.isInstancedBufferGeometry){const Jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ye=Math.min(Y.instanceCount,Jt);St.renderInstances(xe,Bt,ye)}else St.render(xe,Bt)};function rr(w,O,Y,k){I!==null&&w.isNodeMaterial&&I.setObject(k,w),he===!0&&De.setState(w,Y,!1),w.transparent===!0&&w.side===yn&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,Ri(w,O,k),w.side=Ki,w.needsUpdate=!0,Ri(w,O,k),w.side=yn):Ri(w,O,k)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),I!==null&&I.renderStart(w,O,Y),b=W.get(Y),b.init(O),g.push(b),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),w!==Y&&w.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),_t=this.localClippingEnabled,he=De.init(this.clippingPlanes,_t),he===!0&&De.setGlobalState(this.clippingPlanes,O),I!==null&&ze.render(b.state.shadowsArray,Y,O);const k=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){const _e=ge[Ce];rr(_e,Y,O,V),k.add(_e)}else rr(ge,Y,O,V),k.add(ge)}),b=g.pop(),I!==null&&I.renderEnd(),k},this.compileAsync=function(w,O,Y=null){const k=this.compile(w,O,Y);return new Promise(V=>{function ge(){if(k.forEach(function(Ce){const Le=X.get(Ce).currentProgram;(Le===void 0||Le.isReady())&&k.delete(Ce)}),k.size===0){V(w);return}setTimeout(ge,10)}dt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Yr=null;function pa(w){Yr&&Yr(w)}function qr(){pi.stop()}function Zr(){pi.start()}const pi=new Af;pi.setAnimationLoop(pa),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){Yr=w,we.setAnimationLoop(w),w===null?pi.stop():pi.start()},we.addEventListener("sessionstart",qr),we.addEventListener("sessionend",Zr),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(w,O);const Y=we.enabled===!0&&we.isPresenting===!0,k=E!==null&&(oe===null||Y)&&E.begin(T,oe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(O),O=we.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,O,oe),b=W.get(w,g.length),b.init(O),b.state.textureUnits=K.getTextureUnits(),g.push(b),je.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Xe.setFromProjectionMatrix(je,li,O.reversedDepth),_t=this.localClippingEnabled,he=De.init(this.clippingPlanes,_t),y=ne.get(w,R.length),y.init(),R.push(y),we.enabled===!0&&we.isPresenting===!0){const Ce=T.xr.getDepthSensingMesh();Ce!==null&&$r(Ce,O,-1/0,T.sortObjects)}$r(w,O,0,T.sortObjects),y.finish(),I!==null&&I.updateLights(b.state.lightsArray),T.sortObjects===!0&&y.sort(Ee,Ge),Et=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Et&&Ye.addToRenderList(y,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&De.beginShadows();const V=b.state.shadowsArray;if(ze.render(V,w,O),he===!0&&De.endShadows(),(k&&E.hasRenderPass())===!1){const Ce=y.opaque,_e=y.transmissive;if(b.setupLights(),O.isArrayCamera){const Le=O.cameras;if(_e.length>0)for(let Fe=0,Ke=Le.length;Fe<Ke;Fe++){const Je=Le[Fe];Jr(Ce,_e,w,Je)}Et&&Ye.render(w);for(let Fe=0,Ke=Le.length;Fe<Ke;Fe++){const Je=Le[Fe];Kr(y,w,Je,Je.viewport)}}else _e.length>0&&Jr(Ce,_e,w,O),Et&&Ye.render(w),Kr(y,w,O)}oe!==null&&$===0&&(K.updateMultisampleRenderTarget(oe),K.updateRenderTargetMipmap(oe)),k&&E.end(T),w.isScene===!0&&w.onAfterRender(T,w,O),ve.resetDefaultState(),Z=-1,ee=null,g.pop(),g.length>0?(b=g[g.length-1],K.setTextureUnits(b.state.textureUnits),he===!0&&De.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,I!==null&&I.renderEnd()};function $r(w,O,Y,k){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Xe)){k&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(je);const Ce=te.update(w),_e=w.material;_e.visible&&y.push(w,Ce,_e,Y,It.z,null,O)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Xe))){const Ce=te.update(w),_e=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),It.copy(Ce.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(je)),Array.isArray(_e)){const Le=Ce.groups;for(let Fe=0,Ke=Le.length;Fe<Ke;Fe++){const Je=Le[Fe],xe=_e[Je.materialIndex];xe&&xe.visible&&y.push(w,Ce,xe,Y,It.z,Je,O)}}else _e.visible&&y.push(w,Ce,_e,Y,It.z,null,O)}}const ge=w.children;for(let Ce=0,_e=ge.length;Ce<_e;Ce++)$r(ge[Ce],O,Y,k)}function Kr(w,O,Y,k){const{opaque:V,transmissive:ge,transparent:Ce}=w;b.setupLightsView(Y),he===!0&&De.setGlobalState(T.clippingPlanes,Y),k&&v.viewport(re.copy(k)),V.length>0&&zi(V,O,Y),ge.length>0&&zi(ge,O,Y),Ce.length>0&&zi(Ce,O,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Jr(w,O,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){const xe=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new ti(1,1,{generateMipmaps:!0,type:xe?Dn:Pn,minFilter:Bi,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const ge=b.state.transmissionRenderTarget[k.id],Ce=k.viewport||re;ge.setSize(Ce.z*T.transmissionResolutionScale,Ce.w*T.transmissionResolutionScale);const _e=T.getRenderTarget(),Le=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(ge),T.getClearColor(rt),qe=T.getClearAlpha(),qe<1&&T.setClearColor(16777215,.5),T.clear(),Et&&Ye.render(Y);const Ke=T.toneMapping;T.toneMapping=ci;const Je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),he===!0&&De.setGlobalState(T.clippingPlanes,k),zi(w,Y,k),K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge),dt.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let ct=0,Bt=O.length;ct<Bt;ct++){const Rt=O[ct],{object:St,geometry:Jt,material:ye,group:nn}=Rt;if(ye.side===yn&&St.layers.test(k.layers)){const et=ye.side;ye.side=Tn,ye.needsUpdate=!0,$s(St,Y,k,Jt,ye,nn),ye.side=et,ye.needsUpdate=!0,xe=!0}}xe===!0&&(K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge))}T.setRenderTarget(_e,Le,Fe),T.setClearColor(rt,qe),Je!==void 0&&(k.viewport=Je),T.toneMapping=Ke}function zi(w,O,Y){const k=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ge=w.length;V<ge;V++){const Ce=w[V],{object:_e,geometry:Le,group:Fe}=Ce;let Ke=Ce.material;Ke.allowOverride===!0&&k!==null&&(Ke=k),_e.layers.test(Y.layers)&&$s(_e,O,Y,Le,Ke,Fe)}}function $s(w,O,Y,k,V,ge){I!==null&&V.isNodeMaterial&&I.setObject(w,V),w.onBeforeRender(T,O,Y,k,V,ge),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(T,O,Y,k,w,ge),V.transparent===!0&&V.side===yn&&V.forceSinglePass===!1?(V.side=Tn,V.needsUpdate=!0,T.renderBufferDirect(Y,O,k,V,w,ge),V.side=Ki,V.needsUpdate=!0,T.renderBufferDirect(Y,O,k,V,w,ge),V.side=yn):T.renderBufferDirect(Y,O,k,V,w,ge),w.onAfterRender(T,O,Y,k,V,ge)}function Ri(w,O,Y){O.isScene!==!0&&(O=Zt);const k=X.get(w),V=b.state.lights,ge=b.state.shadowsArray,Ce=V.state.version,_e=fe.getParameters(w,V.state,ge,O,Y,b.state.lightProbeGridArray),Le=fe.getProgramCacheKey(_e);let Fe=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;const Ke=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=le.get(w.envMap||k.environment,Ke),k.envMapRotation=k.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",In),Fe=new Map,k.programs=Fe);let Je=Fe.get(Le);if(Je!==void 0){if(k.currentProgram===Je&&k.lightsStateVersion===Ce)return Ks(w,_e),Je}else _e.uniforms=fe.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,Y,_e),w.onBeforeCompile(_e,T),Je=fe.acquireProgram(_e,Le),Fe.set(Le,Je),k.uniforms=_e.uniforms;const xe=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(xe.clippingPlanes=De.uniform),Ks(w,_e),k.needsLights=Nn(w),k.lightsStateVersion=Ce,k.needsLights&&(xe.ambientLightColor.value=V.state.ambient,xe.lightProbe.value=V.state.probe,xe.sunLights.value=V.state.sun,xe.sunLightShadows.value=V.state.sunShadow,xe.directionalLights.value=V.state.directional,xe.directionalLightShadows.value=V.state.directionalShadow,xe.spotLights.value=V.state.spot,xe.spotLightShadows.value=V.state.spotShadow,xe.rectAreaLights.value=V.state.rectArea,xe.ltc_1.value=V.state.rectAreaLTC1,xe.ltc_2.value=V.state.rectAreaLTC2,xe.pointLights.value=V.state.point,xe.pointLightShadows.value=V.state.pointShadow,xe.hemisphereLights.value=V.state.hemi,xe.sunShadowMatrix.value=V.state.sunShadowMatrix,xe.sunShadowCascade.value=V.state.sunShadowCascade,xe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,xe.spotLightMatrix.value=V.state.spotLightMatrix,xe.spotLightMap.value=V.state.spotLightMap,xe.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=Je,k.uniformsList=null,Je}function sr(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Jo.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Ks(w,O){const Y=X.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function ni(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let Y=0,k=w.length;Y<k;Y++){const V=w[Y];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function Qr(w,O,Y,k,V){O.isScene!==!0&&(O=Zt),K.resetTextureUnits();const ge=O.fog,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,_e=oe===null?T.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:gt.workingColorSpace,Le=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Fe=le.get(k.envMap||Ce,Le),Ke=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xe=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Bt=!!Y.morphAttributes.color;let Rt=ci;k.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Rt=T.toneMapping);const St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Jt=St!==void 0?St.length:0,ye=X.get(k),nn=b.state.lights;if(he===!0&&(_t===!0||w!==ee)){const Re=w===ee&&k.id===Z;De.setState(k,w,Re)}let et=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==nn.state.version||ye.outputColorSpace!==_e||V.isBatchedMesh&&ye.batching===!1||!V.isBatchedMesh&&ye.batching===!0||V.isBatchedMesh&&ye.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ye.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ye.instancing===!1||!V.isInstancedMesh&&ye.instancing===!0||V.isSkinnedMesh&&ye.skinning===!1||!V.isSkinnedMesh&&ye.skinning===!0||V.isInstancedMesh&&ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ye.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ye.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ye.instancingMorph===!1&&V.morphTexture!==null||ye.envMap!==Fe||k.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==De.numPlanes||ye.numIntersection!==De.numIntersection)||ye.vertexAlphas!==Ke||ye.vertexTangents!==Je||ye.morphTargets!==xe||ye.morphNormals!==ct||ye.morphColors!==Bt||ye.toneMapping!==Rt||ye.morphTargetsCount!==Jt||!!ye.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ye.__version=k.version);let gn=ye.currentProgram;et===!0&&(gn=Ri(k,O,V),I&&k.isNodeMaterial&&I.onUpdateProgram(k,gn,ye));let _n=!1,ii=!1,Ci=!1;const q=gn.getUniforms(),Pe=ye.uniforms;if(v.useProgram(gn.program)&&(_n=!0,ii=!0,Ci=!0),k.id!==Z&&(Z=k.id,ii=!0),ye.needsLights){const Re=ni(b.state.lightProbeGridArray,V);ye.lightProbeGrid!==Re&&(ye.lightProbeGrid=Re,ii=!0)}if(_n||ee!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),q.setValue(B,"projectionMatrix",w.projectionMatrix),q.setValue(B,"viewMatrix",w.matrixWorldInverse);const Ne=q.map.cameraPosition;Ne!==void 0&&Ne.setValue(B,bt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&q.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&q.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,ii=!0,Ci=!0)}if(ye.needsLights&&(nn.state.sunShadowMap.length>0&&q.setValue(B,"sunShadowMap",nn.state.sunShadowMap,K),nn.state.directionalShadowMap.length>0&&q.setValue(B,"directionalShadowMap",nn.state.directionalShadowMap,K),nn.state.spotShadowMap.length>0&&q.setValue(B,"spotShadowMap",nn.state.spotShadowMap,K),nn.state.pointShadowMap.length>0&&q.setValue(B,"pointShadowMap",nn.state.pointShadowMap,K)),V.isSkinnedMesh){q.setOptional(B,V,"bindMatrix"),q.setOptional(B,V,"bindMatrixInverse");const Re=V.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),q.setValue(B,"boneTexture",Re.boneTexture,K))}V.isBatchedMesh&&(q.setOptional(B,V,"batchingTexture"),q.setValue(B,"batchingTexture",V._matricesTexture,K),q.setOptional(B,V,"batchingIdTexture"),q.setValue(B,"batchingIdTexture",V._indirectTexture,K),q.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&q.setValue(B,"batchingColorTexture",V._colorsTexture,K));const Ie=Y.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&F.update(V,Y,gn),(ii||ye.receiveShadow!==V.receiveShadow)&&(ye.receiveShadow=V.receiveShadow,q.setValue(B,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(Pe.envMapIntensity.value=O.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=Bv()),ii){if(q.setValue(B,"toneMappingExposure",T.toneMappingExposure),ye.needsLights&&Vt(Pe,Ci),ge&&k.fog===!0&&Te.refreshFogUniforms(Pe,ge),Te.refreshMaterialUniforms(Pe,k,ie,Q,b.state.transmissionRenderTarget[w.id]),ye.needsLights&&ye.lightProbeGrid){const Re=ye.lightProbeGrid;Pe.probesSH.value=Re.texture,Pe.probesMin.value.copy(Re.boundingBox.min),Pe.probesMax.value.copy(Re.boundingBox.max),Pe.probesResolution.value.copy(Re.resolution)}Jo.upload(B,sr(ye),Pe,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Jo.upload(B,sr(ye),Pe,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&q.setValue(B,"center",V.center),q.setValue(B,"modelViewMatrix",V.modelViewMatrix),q.setValue(B,"normalMatrix",V.normalMatrix),q.setValue(B,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const Re=k.uniformsGroups;for(let Ne=0,Nt=Re.length;Ne<Nt;Ne++){const ut=Re[Ne];se.update(ut,gn),se.bind(ut,gn)}}return gn}function Vt(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(w,O,Y){const k=X.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=O,X.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const Y=X.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,Y=0){oe=w,G=O,$=Y;let k=null,V=!1,ge=!1;if(w){const _e=X.get(w);if(_e.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(B.FRAMEBUFFER,_e.__webglFramebuffer),re.copy(w.viewport),Ae.copy(w.scissor),me=w.scissorTest,v.viewport(re),v.scissor(Ae),v.setScissorTest(me),Z=-1;return}else if(_e.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(_e.__hasExternalTextures)K.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ke=w.depthTexture;if(_e.__boundDepthTexture!==Ke){if(Ke!==null&&X.has(Ke)&&(w.width!==Ke.image.width||w.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ge=!0);const Fe=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?k=Fe[O][Y]:k=Fe[O],V=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?k=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[Y]:k=Fe,re.copy(w.viewport),Ae.copy(w.scissor),me=w.scissorTest}else re.copy(Me).multiplyScalar(ie).floor(),Ae.copy(We).multiplyScalar(ie).floor(),me=yt;if(Y!==0&&(k=U),v.bindFramebuffer(B.FRAMEBUFFER,k)&&v.drawBuffers(w,k),v.viewport(re),v.scissor(Ae),v.setScissorTest(me),V){const _e=X.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,Y)}else if(ge){const _e=O;for(let Le=0;Le<w.textures.length;Le++){const Fe=X.get(w.textures[Le]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,Y,_e)}}else if(w!==null&&Y!==0){const _e=X.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_e.__webglTexture,Y)}Z=-1};function jr(w){const O=X.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=C.textureFormatReadable(w.format),O.__typeReadable=C.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,Y,k,V,ge,Ce,_e=0){if(!(w&&w.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){v.bindFramebuffer(B.FRAMEBUFFER,Le);try{const Fe=w.textures[_e],Ke=Fe.format,Je=Fe.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e);const xe=jr(Fe);if(xe.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-k&&Y>=0&&Y<=w.height-V&&B.readPixels(O,Y,k,V,ce.convert(Ke),ce.convert(Je),ge)}finally{const Fe=oe!==null?X.get(oe).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,k,V,ge,Ce,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(O>=0&&O<=w.width-k&&Y>=0&&Y<=w.height-V){v.bindFramebuffer(B.FRAMEBUFFER,Le);const Fe=w.textures[_e],Ke=Fe.format,Je=Fe.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e);const xe=jr(Fe);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.bufferData(B.PIXEL_PACK_BUFFER,ge.byteLength,B.STREAM_READ),B.readPixels(O,Y,k,V,ce.convert(Ke),ce.convert(Je),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Bt=oe!==null?X.get(oe).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,Bt);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $d(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ge),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ct),B.deleteSync(Rt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,Y=0){const k=Math.pow(2,-Y),V=Math.floor(w.image.width*k),ge=Math.floor(w.image.height*k),Ce=O!==null?O.x:0,_e=O!==null?O.y:0;K.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Ce,_e,V,ge),v.unbindTexture()},this.copyTextureToTexture=function(w,O,Y=null,k=null,V=0,ge=0){let Ce,_e,Le,Fe,Ke,Je,xe,ct,Bt;const Rt=w.isCompressedTexture?w.mipmaps[ge]:w.image;if(Y!==null)Ce=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,Ke=Y.min.y,Je=Y.isBox3?Y.min.z:0;else{const Pe=Math.pow(2,-V);Ce=Math.floor(Rt.width*Pe),_e=Math.floor(Rt.height*Pe),w.isDataArrayTexture?Le=Rt.depth:w.isData3DTexture?Le=Math.floor(Rt.depth*Pe):Le=1,Fe=0,Ke=0,Je=0}k!==null?(xe=k.x,ct=k.y,Bt=k.z):(xe=0,ct=0,Bt=0);const St=ce.convert(O.format),Jt=ce.convert(O.type);let ye;O.isData3DTexture?(K.setTexture3D(O,0),ye=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),ye=B.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),ye=B.TEXTURE_2D),v.activeTexture(B.TEXTURE0),v.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const nn=v.getParameter(B.UNPACK_ROW_LENGTH),et=v.getParameter(B.UNPACK_IMAGE_HEIGHT),gn=v.getParameter(B.UNPACK_SKIP_PIXELS),_n=v.getParameter(B.UNPACK_SKIP_ROWS),ii=v.getParameter(B.UNPACK_SKIP_IMAGES);v.pixelStorei(B.UNPACK_ROW_LENGTH,Rt.width),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt.height),v.pixelStorei(B.UNPACK_SKIP_PIXELS,Fe),v.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),v.pixelStorei(B.UNPACK_SKIP_IMAGES,Je);const Ci=w.isDataArrayTexture||w.isData3DTexture,q=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Pe=X.get(w),Ie=X.get(O),Re=X.get(Pe.__renderTarget),Ne=X.get(Ie.__renderTarget);v.bindFramebuffer(B.READ_FRAMEBUFFER,Re.__webglFramebuffer),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Nt=0;Nt<Le;Nt++)Ci&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(w).__webglTexture,V,Je+Nt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(O).__webglTexture,ge,Bt+Nt)),B.blitFramebuffer(Fe,Ke,Ce,_e,xe,ct,Ce,_e,B.DEPTH_BUFFER_BIT,B.NEAREST);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||X.has(w)){const Pe=X.get(w),Ie=X.get(O);v.bindFramebuffer(B.READ_FRAMEBUFFER,P),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let Re=0;Re<Le;Re++)Ci?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.__webglTexture,V,Je+Re):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,V),q?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.__webglTexture,ge,Bt+Re):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ie.__webglTexture,ge),V!==0?B.blitFramebuffer(Fe,Ke,Ce,_e,xe,ct,Ce,_e,B.COLOR_BUFFER_BIT,B.NEAREST):q?B.copyTexSubImage3D(ye,ge,xe,ct,Bt+Re,Fe,Ke,Ce,_e):B.copyTexSubImage2D(ye,ge,xe,ct,Fe,Ke,Ce,_e);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else q?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(ye,ge,xe,ct,Bt,Ce,_e,Le,St,Jt,Rt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(ye,ge,xe,ct,Bt,Ce,_e,Le,St,Rt.data):B.texSubImage3D(ye,ge,xe,ct,Bt,Ce,_e,Le,St,Jt,Rt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ge,xe,ct,Ce,_e,St,Jt,Rt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ge,xe,ct,Rt.width,Rt.height,St,Rt.data):B.texSubImage2D(B.TEXTURE_2D,ge,xe,ct,Ce,_e,St,Jt,Rt);v.pixelStorei(B.UNPACK_ROW_LENGTH,nn),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,et),v.pixelStorei(B.UNPACK_SKIP_PIXELS,gn),v.pixelStorei(B.UNPACK_SKIP_ROWS,_n),v.pixelStorei(B.UNPACK_SKIP_IMAGES,ii),ge===0&&O.generateMipmaps&&B.generateMipmap(ye),v.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){G=0,$=0,oe=null,v.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}function Ft(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new At;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const f=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in s){const f=dh(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let S=0;S<o[u].length;++S)p.push(o[u][S][h]);const _=dh(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function dh(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Be(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let h=0,p=u.count;h<p;h++)for(let _=0;_<t;_++){const S=u.getComponent(h,_);a.setComponent(h+f,_,S)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}class Hv extends Im{constructor(e){super(e),this.type=Dn}parse(e){const o=function(g,E){switch(g){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(E||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(E||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(E||""))}},u=`
`,f=function(g,E,T){E=E||1024;let I=g.pos,U=-1,P=0,z="",G=String.fromCharCode.apply(null,new Uint16Array(g.subarray(I,I+128)));for(;0>(U=G.indexOf(u))&&P<E&&I<g.byteLength;)z+=G,P+=G.length,I+=128,G=String.fromCharCode.apply(null,new Uint16Array(g.subarray(I,I+128)));return-1<U?(g.pos+=P+U+1,z+G.slice(0,U)):!1},h=function(g){const E=/^#\?(\S+)/,T=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,G;for((g.pos>=g.byteLength||!(z=f(g)))&&o(1,"no header found"),(G=z.match(E))||o(3,"bad initial token"),P.valid|=1,P.programtype=G[1],P.string+=z+`
`;z=f(g),z!==!1;){if(P.string+=z+`
`,z.charAt(0)==="#"){P.comments+=z+`
`;continue}if((G=z.match(T))&&(P.gamma=parseFloat(G[1])),(G=z.match(L))&&(P.exposure=parseFloat(G[1])),(G=z.match(I))&&(P.valid|=2,P.format=G[1]),(G=z.match(U))&&(P.valid|=4,P.height=parseInt(G[1],10),P.width=parseInt(G[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},p=function(g,E,T){const L=E;if(L<8||L>32767||g[0]!==2||g[1]!==2||g[2]&128)return new Uint8Array(g);L!==(g[2]<<8|g[3])&&o(3,"wrong scanline width");const I=new Uint8Array(4*E*T);I.length||o(4,"unable to allocate buffer space");let U=0,P=0;const z=4*L,G=new Uint8Array(4),$=new Uint8Array(z);let oe=T;for(;oe>0&&P<g.byteLength;){P+4>g.byteLength&&o(1),G[0]=g[P++],G[1]=g[P++],G[2]=g[P++],G[3]=g[P++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=L)&&o(3,"bad rgbe scanline format");let Z=0,ee;for(;Z<z&&P<g.byteLength;){ee=g[P++];const Ae=ee>128;if(Ae&&(ee-=128),(ee===0||Z+ee>z)&&o(3,"bad scanline data"),Ae){const me=g[P++];for(let rt=0;rt<ee;rt++)$[Z++]=me}else $.set(g.subarray(P,P+ee),Z),Z+=ee,P+=ee}const re=L;for(let Ae=0;Ae<re;Ae++){let me=0;I[U]=$[Ae+me],me+=L,I[U+1]=$[Ae+me],me+=L,I[U+2]=$[Ae+me],me+=L,I[U+3]=$[Ae+me],U+=4}oe--}return I},_=function(g,E,T,L){const I=g[E+3],U=Math.pow(2,I-128)/255;T[L+0]=g[E+0]*U,T[L+1]=g[E+1]*U,T[L+2]=g[E+2]*U,T[L+3]=1},S=function(g,E,T,L){const I=g[E+3],U=Math.pow(2,I-128)/255;T[L+0]=mo.toHalfFloat(Math.min(g[E+0]*U,65504)),T[L+1]=mo.toHalfFloat(Math.min(g[E+1]*U,65504)),T[L+2]=mo.toHalfFloat(Math.min(g[E+2]*U,65504)),T[L+3]=mo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const d=h(m),M=d.width,A=d.height,x=p(m.subarray(m.pos),M,A);let y,b,R;switch(this.type){case Ln:R=x.length/4;const g=new Float32Array(R*4);for(let T=0;T<R;T++)_(x,T*4,g,T*4);y=g,b=Ln;break;case Dn:R=x.length/4;const E=new Uint16Array(R*4);for(let T=0;T<R;T++)S(x,T*4,E,T*4);y=E,b=Dn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:A,data:y,header:d.string,gamma:d.gamma,exposure:d.exposure,type:b,colorSpace:Ns,minFilter:qt,magFilter:qt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}const Gv=[[/LOACH/,"heliLight"],[/UH60|UH1|MI8|MI17|CH146|CH178|SA330|MRH90|Z8[GJ]|Z9A|HELI/,"heli"],[/RHIB|BOAT/,"boat"],[/MINSK|QUADBIKE|LYNXATV|GATOR/,"bike"],[/TECHNICAL/,"jeep"],[/2A6|M1A[12]|FV4034|M60T|T62|T64|T72|T90|ZTZ99/,"mbt"],[/M1128|SPRUT|ZTD05/,"tankDestroyer"],[/BFV|M7A3|BMD|BMP|FV510|FV107|ZBD0[45]|MTLBM_6MB/,"ifvTracked"],[/LAV25|LAV2_COYOTE|LAV6|ASLAV|BTR82A|BTR4|ZBL08|WZ551A|WZ551B(?!_QLZ)|PARS3(_DESERT)?_C$/,"ifvWheeled"],[/AAVP7|ACV-?15|BTR-?D|BTR-ZD|BTRMDM|FV432|M113|M1064|MTLB|ZSD(05|89)/,"apcTracked"],[/BTR80|M1126|M1117|LAV_RWS|PMV|TAPV|ZSL10|WZ551B_QLZ|PARS3_/,"apcWheeled"],[/MATV|M1151(?!_TECHNICAL)|TIGR|COBRA|KOZAK|LPPV|CSK131|BRDM/,"mrap"],[/(UTIL|URAL|KAMAZ|KRAZ|CTM131).*LOGI/,"logiTruck"],[/UTIL|URAL|KAMAZ|KRAZ|CTM131/,"truck"],[/CPV|SAFIR|LUVW|PICKUP|JEEP/,"jeep"]];function kv(i){const e=(i??"").toUpperCase();for(const[t,n]of Gv)if(t.test(e))return n;return"other"}function Vv(i){if(i.isFob)return"radio";const e=(i.classShort??"").toUpperCase();return/FOBRADIO|RADIO/.test(e)?"radio":/HAB/.test(e)?"hab":/HELICOPTER_REPAIR|HELIPAD/.test(e)?"helipad":/REPAIR/.test(e)?"repair":/MORTAR/.test(e)?"mortar":/MINE|IED/.test(e)?"mine":/AMMOBAG/.test(e)?"ammoBag":/CONSTRUCT/.test(e)?"construction":/AMMO|CRATE/.test(e)?"ammoCrate":/(^|_)(TOW|KORNET|SPG9?|DSHK|KORD|M2|HMG|GMG|MK19|AGS(-?17)?|ZU23)(_|$)|TRIPOD|EMPLACE/.test(e)?"emplacement":/SANDBAGWALL|DESERTSANDBAG|SANDBAG_WALL/.test(e)?"sandbagWall":/SANDBAG/.test(e)?"sandbags":/HESCO/.test(e)?"hesco":/RAZORWIRE|RAZOR_WIRE|CONCERTINA/.test(e)?"razorwire":/BUNKER/.test(e)?"bunker":/C4|COMPB|EXPLOSIVE|SATCHEL/.test(e)?"explosive":/LADDER/.test(e)?"ladder":"other"}const Wv={url:"/img/maps/albasrah/",corner0:[-2e3,-2e3],corner1:[2e3,2e3],heightScale:.087813952,zOffset:2,heightScale3D:.043029724,zOffset3D:2},Xv={url:"/img/maps/anvil/",corner0:[-2040,-2040],corner1:[1020,1020],heightScale:.226426712,zOffset:-71.5835,heightScale3D:.226426712,zOffset3D:-71.5835},Yv={url:"/img/maps/blackcoast/",corner0:[-2299,-2127],corner1:[2299,2472],heightScale:.358381824,zOffset:-31.0188,heightScale3D:.358284579,zOffset3D:-.9868},qv={url:"/img/maps/chora/",corner0:[-2464,-2664],corner1:[1600,1400],heightScale:.982942589,zOffset:-793.5477,heightScale3D:.982942589,zOffset3D:-793.5477},Zv={url:"/img/maps/fallujah/",corner0:[-1315,-1545],corner1:[1690,1460],heightScale:.14797459,zOffset:-48.43,heightScale3D:.065334541,zOffset3D:-48.43},$v={url:"/img/maps/foolsroad/",corner0:[-1326,-1326],corner1:[448,448],heightScale:.20168671,zOffset:-61.5903,heightScale3D:.205997796,zOffset3D:-63.789},Kv={url:"/img/maps/goosebay/",corner0:[-2016,-2016],corner1:[2015,2015],heightScale:.274412178,zOffset:-245,heightScale3D:.227111487,zOffset3D:-245},Jv={url:"/img/maps/gorodok/",corner0:[-2032,-2032],corner1:[2032,2032],heightScale:.173697718,zOffset:-62.8744,heightScale3D:.126346801,zOffset3D:-62.8744},Qv={url:"/img/maps/harju/",corner0:[-2016,-2016],corner1:[2016,2016],heightScale:.229927482,zOffset:-21.1422,heightScale3D:.124975537,zOffset3D:-.2},jv={url:"/img/maps/jensen/",corner0:[-2004,-2004],corner1:[2004,2004],heightScale:.185722727,zOffset:-15.5078,heightScale3D:.089362846,zOffset3D:-15.5078},eS={url:"/img/maps/kamdesh/",corner0:[-2016,-2016],corner1:[2016,2016],heightScale:.387570609,zOffset:31.6808,heightScale3D:.387570609,zOffset3D:31.6808},tS={url:"/img/maps/kohat/",corner0:[-2300,-2300],corner1:[2317,2317],heightScale:.750167993,zOffset:9.4085,heightScale3D:.750167993,zOffset3D:9.4085},nS={url:"/img/maps/kokan/",corner0:[-1076,-1076],corner1:[1420,1420],heightScale:.174065564,zOffset:-255,heightScale3D:.162908726,zOffset3D:-249.31},iS={url:"/img/maps/lashkar/",corner0:[-2167,-2167],corner1:[2167,2167],heightScale:.321048558,zOffset:1.9652,heightScale3D:.298333727,zOffset3D:1.9652},rS={url:"/img/maps/logar/",corner0:[-881,-1132],corner1:[880,629],heightScale:.248098348,zOffset:4.1729,heightScale3D:.248098348,zOffset3D:4.1729},sS={url:"/img/maps/manicouagan/",corner0:[-2016,-2016],corner1:[2015,2015],heightScale:.403959641,zOffset:38,heightScale3D:.403959641,zOffset3D:38},oS={url:"/img/maps/mestia/",corner0:[-1200,-1100],corner1:[1200,1300],heightScale:.493831859,zOffset:-153.9385,heightScale3D:.493831859,zOffset3D:-153.9385},aS={url:"/img/maps/mutaha/",corner0:[-935,-1140],corner1:[1820,1615],heightScale:.112586966,zOffset:-8.7821,heightScale3D:.060502473,zOffset3D:-7.043},lS={url:"/img/maps/narva/",corner0:[-1390,-1402],corner1:[1410,1398],heightScale:.205154741,zOffset:-17.9298,heightScale3D:.123498984,zOffset3D:-17.9298},cS={url:"/img/maps/pacific/",corner0:[-2016,-2016],corner1:[2016,2016],heightScale:.317704444,zOffset:-79.18,heightScale3D:.118174655,zOffset3D:3.9},uS={url:"/img/maps/sanxian/",corner0:[-2300,-2050],corner1:[2300,2550],heightScale:.233953671,zOffset:0,heightScale3D:.11211708,zOffset3D:0},hS={url:"/img/maps/skorpo/",corner0:[-3611,-3293],corner1:[3238,3576],heightScale:2.086916336,zOffset:-360.7172,heightScale3D:1.955089913,zOffset3D:-293.4857},fS={url:"/img/maps/sumari/",corner0:[-640,-447],corner1:[660,853],heightScale:.267739565,zOffset:-138.0639,heightScale3D:.267739745,zOffset3D:-138.064},dS={url:"/img/maps/tallil/",corner0:[-2340,-2340],corner1:[2340,2340],heightScale:.152035884,zOffset:-83.457,heightScale3D:.148738475,zOffset3D:-81.7753},pS={url:"/img/maps/yehorivka/",corner0:[-3302,-3302],corner1:[3048,3048],heightScale:.485970247,zOffset:-65.4916,heightScale3D:.485970247,zOffset3D:-65.4916},mS={url:"/img/maps/MODS/SPM/hrodna/",corner0:[-2016,-2016],corner1:[2016,2016],heightScale:.485617783,zOffset:null,heightScale3D:null,zOffset3D:null},gS={url:"/img/maps/MODS/SPM/chornivsk/",corner0:[-1649,-1547],corner1:[1535,1637],heightScale:.124958144,zOffset:null,heightScale3D:null,zOffset3D:null},_S={url:"/img/maps/MODS/SD/albasrah_legacy/",corner0:[-1520,-1520],corner1:[1520,1520],heightScale:.084748958,zOffset:-15.7523,heightScale3D:.043778399,zOffset3D:-10.81},xS={url:"/img/maps/MODS/GC/bespin/",corner0:[-2031.92,-2031.92],corner1:[2031.92,2031.92],heightScale:4.947832833,zOffset:null,heightScale3D:null,zOffset3D:null},vS={url:"/img/maps/MODS/GC/coruscant/",corner0:[-2e3,-2e3],corner1:[2e3,2e3],heightScale:12.178692268,zOffset:null,heightScale3D:null,zOffset3D:null},SS={url:"/img/maps/MODS/GC/corvette/",corner0:[-166.2,-78.11],corner1:[-6.65,81.44],heightScale:.015758521,zOffset:null,heightScale3D:null,zOffset3D:null},MS={url:"/img/maps/MODS/GC/felucia/",corner0:[-789.93,-3999.91],corner1:[1876.7,-1333.21],heightScale:.667760064,zOffset:null,heightScale3D:null,zOffset3D:null},yS={url:"/img/maps/MODS/GC/galban/",corner0:[-1784.99,-1784.97],corner1:[1784.97,1784.91],heightScale:4.036845955,zOffset:null,heightScale3D:null,zOffset3D:null},bS={url:"/img/maps/MODS/GC/geonosis/",corner0:[-2015.67,-2015.67],corner1:[2015.7,2015.7],heightScale:7.295198568,zOffset:null,heightScale3D:null,zOffset3D:null},ES={url:"/img/maps/MODS/GC/kashyyyk/",corner0:[-2106.43,-2814.39],corner1:[1893.56,1185.59],heightScale:.368167,zOffset:null,heightScale3D:null,zOffset3D:null},wS={url:"/img/maps/MODS/GC/kavado/",corner0:[-1072.36,-2098.28],corner1:[2052.09,1026.17],heightScale:1.536714457,zOffset:null,heightScale3D:null,zOffset3D:null},AS={url:"/img/maps/MODS/GC/mallidon/",corner0:[-2400,-2400],corner1:[-400,-400],heightScale:.754785829,zOffset:null,heightScale3D:null,zOffset3D:null},TS={url:"/img/maps/MODS/GC/miniosis/",corner0:[-1020,-1020],corner1:[1020,1020],heightScale:.891445085,zOffset:null,heightScale3D:null,zOffset3D:null},RS={url:"/img/maps/MODS/GC/morak/",corner0:[-3250,-3250],corner1:[3250,3250],heightScale:2.244150079,zOffset:null,heightScale3D:null,zOffset3D:null},CS={url:"/img/maps/MODS/GC/moraklegacy/",corner0:[-2102.47,-2301.85],corner1:[2102.47,2301.85],heightScale:1.821209448,zOffset:null,heightScale3D:null,zOffset3D:null},PS={url:"/img/maps/MODS/GC/mygeeto/",corner0:[-2e3,-2e3],corner1:[2e3,2e3],heightScale:7.458831189,zOffset:null,heightScale3D:null,zOffset3D:null},LS={url:"/img/maps/MODS/GC/nabooplains/",corner0:[-1967.98,-1967.98],corner1:[1968.98,1968.98],heightScale:.355040546,zOffset:null,heightScale3D:null,zOffset3D:null},DS={url:"/img/maps/MODS/GC/ortoplutonia/",corner0:[-1999.95,-1999.95],corner1:[2000.05,2000.05],heightScale:1.211747024,zOffset:null,heightScale3D:null,zOffset3D:null},IS={url:"/img/maps/MODS/GC/rhenvar/",corner0:[-4079.85,-4079.85],corner1:[4053.6,4053.6],heightScale:1.200851022,zOffset:null,heightScale3D:null,zOffset3D:null},NS={url:"/img/maps/MODS/GC/ryloth/",corner0:[-620,-620],corner1:[620,620],heightScale:null,zOffset:null,heightScale3D:null,zOffset3D:null},US={url:"/img/maps/MODS/GC/sesid/",corner0:[-1880,-1880],corner1:[1880,1880],heightScale:.819146736,zOffset:null,heightScale3D:null,zOffset3D:null},OS={url:"/img/maps/MODS/GC/sesidequator/",corner0:[-2400,-2400],corner1:[2400,2400],heightScale:1.794266345,zOffset:null,heightScale3D:null,zOffset3D:null},FS={url:"/img/maps/MODS/GC/sullust/",corner0:[-1078.77,-1078.77],corner1:[1079.56,1079.56],heightScale:7.976126518,zOffset:null,heightScale3D:null,zOffset3D:null},BS={url:"/img/maps/MODS/GC/tatooine/",corner0:[-1966.2,-1865.35],corner1:[1579.8,1680.65],heightScale:1.187478002,zOffset:null,heightScale3D:null,zOffset3D:null},zS={url:"/img/maps/MODS/GC/umbara/",corner0:[-800,-800],corner1:[800,800],heightScale:.210430224,zOffset:null,heightScale3D:null,zOffset3D:null},HS={url:"/img/maps/MODS/GC/venator/",corner0:[-400.3,-399.6],corner1:[399.7,400.4],heightScale:.545954917,zOffset:null,heightScale3D:null,zOffset3D:null},GS={url:"/img/maps/MODS/GC/venator2/",corner0:[-855.4,-462],corner1:[644.6,1038],heightScale:.545954917,zOffset:null,heightScale3D:null,zOffset3D:null},kS={url:"/img/maps/MODS/GC/yavin4/",corner0:[-1260.02,-1260.02],corner1:[1260.02,1260.02],heightScale:.721582271,zOffset:null,heightScale3D:null,zOffset3D:null},VS={AlBasrah:Wv,Anvil:Xv,BlackCoast:Yv,Chora:qv,Fallujah:Zv,FoolsRoad:$v,GooseBay:Kv,Gorodok:Jv,Harju:Qv,Jensen:jv,Kamdesh:eS,Kohat:tS,Kokan:nS,Lashkar:iS,Logar:rS,Manicouagan:sS,Mestia:oS,Mutaha:aS,Narva:lS,Pacific:cS,Sanxian:uS,Skorpo:hS,Sumari:fS,Tallil:dS,Yehorivka:pS,Hrodna_Border:mS,Chornivsk:gS,AlBasrah_legacy:_S,Bespin:xS,Coruscant:vS,Corvette:SS,Felucia:MS,Galban:yS,Geonosis:bS,Kashyyyk:ES,Kavado:wS,Mallidon:AS,Miniosis:TS,Morak:RS,MorakLegacy:CS,Mygeeto:PS,NabooPlains:LS,Ortoplutonia:DS,Rhenvar:IS,Ryloth:NS,Sesid:US,SesidEquator:OS,Sullust:FS,Tatooine:BS,Umbara:zS,VenatorAssault:HS,VenatorAssault2:GS,Yavin4:kS},WS=""+new URL("sky-By2iMAz-.hdr",import.meta.url).href,XS=.15;function YS(i,e){return(e.bytesPerIndex||4)===2?new Uint16Array(i,e.byteOffset,e.byteLength/2):new Uint32Array(i,e.byteOffset,e.byteLength/4)}async function qS(i){const e=await fetch(`${i}3d/props.json`);if(!e.ok||!(e.headers.get("content-type")||"").includes("json"))return[];let t;try{t=await e.json()}catch{return[]}const n=await fetch(`${i}3d/props.bin`).then(o=>o.arrayBuffer()),r=new Map;for(const o of t.parts){const{positions:a,indices:l}=o.layout,c=new Float32Array(n,a.byteOffset,a.byteLength/4),u=YS(n,l),f=new At;f.setAttribute("position",new Be(c.slice(),3)),f.setIndex(new Be(u.slice(),1));const h=new He(o.color),p=new Float32Array(c.length);for(let S=0;S<p.length;S+=3)p[S]=h.r,p[S+1]=h.g,p[S+2]=h.b;f.setAttribute("color",new Be(p,3)),f.computeBoundingBox();const _=o.label.split("_")[0];r.has(_)||r.set(_,[]),r.get(_).push(f)}const s=[];for(const[o,a]of r){const l=[];let c=0;for(const h of a){const p=h.index.count;l.push({box:h.boundingBox,start:c,count:p}),c+=p}const u=new Xs({vertexColors:!0,roughness:1,metalness:0,envMapIntensity:XS,flatShading:!0,side:yn}),f=new mn(Ft(a,!1),u);f.name=o,f.userData.parts=l,s.push(f)}return s}const Nf=.15,ZS=[/^LombardyPoplar/i],$S=[/^SM_Norwayspruce/i],KS=[/^SM_Siberian/i,/^SM_Beech_03$/i],JS=[/^SM_NA_Barn_Beams$/i,/^Half_Ass_Factory_Main$/i,/^Half_Ass_Factory_Connector$/i,/^SM_EastAsia_VillageHouse_4mFill_01a$/i],QS=[/^StaticMesh_bigwarehouse2$/i];function ph(i){return ZS.some(e=>e.test(i))}function mh(i){return $S.some(e=>e.test(i))}function gh(i){return KS.some(e=>e.test(i))}function _h(i){return JS.some(e=>e.test(i))}function xh(i){return QS.some(e=>e.test(i))}function jS(){const e=new Qt(.08,.1467,1.6,6).toNonIndexed();e.translate(0,1.6/2,0);const t=new He(6047024);e.setAttribute("color",new Be(new Float32Array(e.attributes.position.count*3).map((a,l)=>l%3===0?t.r:l%3===1?t.g:t.b),3));const n=.825,r=new ua(n,0).toNonIndexed();r.translate(0,1.6+n*.6,0),r.setAttribute("color",new Be(new Float32Array(r.attributes.position.count*3).fill(1),3));const s=Ft([e,r],!1);s.computeBoundingBox();const o=s.boundingBox.max.y-s.boundingBox.min.y;return{trunk:e,canopy:r,height:o}}function eM(){const e=new Qt(.1,.16,1,6).toNonIndexed();e.translate(0,1/2,0);const t=new He(6047024);e.setAttribute("color",new Be(new Float32Array(e.attributes.position.count*3).map((c,u)=>u%3===0?t.r:u%3===1?t.g:t.b),3));const n=.45,r=2.3,s=new wc(n,r,4,8).toNonIndexed();s.translate(0,1+r/2+n,0);const o=new He(4156212);s.setAttribute("color",new Be(new Float32Array(s.attributes.position.count*3).map((c,u)=>u%3===0?o.r:u%3===1?o.g:o.b),3));const a=Ft([e,s],!1);a.computeBoundingBox();const l=a.boundingBox.max.y-a.boundingBox.min.y;return{geometry:a,height:l}}function tM(){const e=new Qt(.1,.16,.9,6).toNonIndexed();e.translate(0,.9/2,0);const t=new He(6047024);e.setAttribute("color",new Be(new Float32Array(e.attributes.position.count*3).map((c,u)=>u%3===0?t.r:u%3===1?t.g:t.b),3));const n=.8,r=2.2,s=new Ws(n,r,8).toNonIndexed();s.translate(0,.9+r/2,0);const o=new He(3103796);s.setAttribute("color",new Be(new Float32Array(s.attributes.position.count*3).map((c,u)=>u%3===0?o.r:u%3===1?o.g:o.b),3));const a=Ft([e,s],!1);a.computeBoundingBox();const l=a.boundingBox.max.y-a.boundingBox.min.y;return{geometry:a,height:l}}function nM(){const e=new Qt(.09,.15,1.8,6).toNonIndexed();e.translate(0,1.8/2,0);const t=new He(6047024);e.setAttribute("color",new Be(new Float32Array(e.attributes.position.count*3).map((c,u)=>u%3===0?t.r:u%3===1?t.g:t.b),3));const n=.55,r=1.1,s=new Ws(n,r,8).toNonIndexed();s.translate(0,1.8+r/2,0);const o=new He(3824703);s.setAttribute("color",new Be(new Float32Array(s.attributes.position.count*3).map((c,u)=>u%3===0?o.r:u%3===1?o.g:o.b),3));const a=Ft([e,s],!1);a.computeBoundingBox();const l=a.boundingBox.max.y-a.boundingBox.min.y;return{geometry:a,height:l}}function iM(){const i=new He(5928264);function e(r,s,o,a){const l=new ua(r,0).toNonIndexed();return l.scale(1,.65,1),l.translate(s,o,a),l.setAttribute("color",new Be(new Float32Array(l.attributes.position.count*3).map((c,u)=>u%3===0?i.r:u%3===1?i.g:i.b),3)),l}const t=Ft([e(.7,0,.45,0),e(.45,.15,.75,-.1)],!1);t.computeBoundingBox();const n=t.boundingBox.max.y-t.boundingBox.min.y;return{geometry:t,height:n}}const rM=9080724,sM=[[/^SM_ME_UrbRes_Bld_Med_09$/i,5591365],[/^SM_ME_UrbRes_Bld_Med_12$/i,6520965],[/^SM_Factory_Chimney_01/i,11566952],[/SM_ShippingContainer.*White/i,13224388],[/SM_ShippingContainer.*Green/i,4152378],[/SM_ShippingContainer.*Red/i,9057064],[/SM_ShippingContainer.*Yellow/i,13214247],[/SM_ShippingContainer.*Blue/i,3101296],[/olive/i,5921850],[/_tan_/i,11577500],[/wood/i,7031343],[/pinelog/i,7031343],[/SM_Apartment_Block_8story_Base02/i,9142386],[/SM_Apartment_Block_4story02v1/i,8486777],[/^(SM_)?ME_|^SM_IRQ_|^afg_|UrbCnt|Market_Buildings|Market_Shops|^shopfront_|^policestation|^SM_Construction_Site/i,11049596],[/^SM_EastAsia_Offices_01a/i,10246972]];function Zn(i){for(const[e,t]of sM)if(e.test(i))return t;return rM}function oM(){const i=new it(1,1,1).toNonIndexed();return i.translate(.5,.5,.5),i.setAttribute("color",new Be(new Float32Array(i.attributes.position.count*3).fill(1),3)),i}function Xt(i,e,t,n){const r=i.attributes.position.count,s=new Float32Array(r*3);for(let o=0;o<r;o++)s[o*3]=e,s[o*3+1]=t,s[o*3+2]=n;i.setAttribute("color",new Be(s,3))}function Uf(i,e){function t(l,c,u,f){return[l,c,u,l,u,f]}const n=i.reduce((l,c)=>l+c[0],0)/i.length,r=i.reduce((l,c)=>l+c[1],0)/i.length,s=[];for(let l=0;l<i.length;l++){const[c,u]=i[l],[f,h]=i[(l+1)%i.length];s.push(...t([c,0,u],[f,0,h],[f,e,h],[c,e,u])),s.push([n,0,r],[f,0,h],[c,0,u]),s.push([n,e,r],[c,e,u],[f,e,h])}const o=new Float32Array(s.length*3);s.forEach((l,c)=>{o[c*3]=l[0],o[c*3+1]=l[1],o[c*3+2]=l[2]});const a=new At;return a.setAttribute("position",new Be(o,3)),a}function vh(i){const e=i.attributes.position;for(let t=0;t<e.count;t++){const n=e.getX(t),r=e.getZ(t);e.setX(t,r),e.setZ(t,1-n)}return e.needsUpdate=!0,i}const zo=.9184,aM=.3744,lM=.1526,cM=.0936,uM=.375;function hM(){const i=cM,e=uM,t=[[i,0],[1-i,0],[1-i,e],[1,e],[1,1-e],[1-i,1-e],[1-i,1],[i,1],[i,1-e],[0,1-e],[0,e],[i,e]],n=Uf(t,zo);Xt(n,1,1,1);const r=1-zo,s=new it(aM,r,lM).toNonIndexed();s.deleteAttribute("normal"),s.deleteAttribute("uv"),s.translate(.5,zo+r/2,.5),Xt(s,1,1,1);const o=.0429,a=.1005,l=.0023;function c(x){const y=new it(l,a,o*2).toNonIndexed();y.deleteAttribute("normal"),y.deleteAttribute("uv");const b=x?1+l/2:-l/2;return y.translate(b,a/2,.5),Xt(y,.25,.2,.15),y}const u=c(!1),f=c(!0),h=8,p=zo/h,_=.0191,S=.0457,m=.066,d=[e*.15,e*.5,e*.85,1-e*.85,1-e*.5,1-e*.15];function M(x,y,b){const R=new it(l,S,_*2).toNonIndexed();return R.deleteAttribute("normal"),R.deleteAttribute("uv"),R.translate(x,b,y),Xt(R,.25,.3,.35),R}const A=[];for(let x=0;x<h;x++){const y=(x+.5)*p;x>0&&(A.push(M(-l/2,.5-m,y)),A.push(M(-l/2,.5+m,y)),A.push(M(1+l/2,.5-m,y)),A.push(M(1+l/2,.5+m,y)));for(const b of d)A.push(M(i-l/2,b,y)),A.push(M(1-i+l/2,b,y))}return Ft([n,s,u,f,...A],!1)}const fM=.1127,dM=.1796;function pM(){const i=fM,e=dM,t=[[i,0],[1-i,0],[1-i,e],[1,e],[1,1-e],[1-i,1-e],[1-i,1],[i,1],[i,1-e],[0,1-e],[0,e],[i,e]],n=Uf(t,1);Xt(n,1,1,1);const r=.0337,s=.1937,o=.0022;function a(y){const b=new it(o,s,r*2).toNonIndexed();b.deleteAttribute("normal"),b.deleteAttribute("uv");const R=y?1+o/2:-o/2;return b.translate(R,s/2,.5),Xt(b,.25,.2,.15),b}const l=a(!1),c=a(!0),u=4,f=1/u,h=.015,p=.0881,_=[.2513,.3946,.6054,.7487],S=[e*.3,e*.7,1-e*.7,1-e*.3];function m(y,b,R){const g=new it(o,p,h*2).toNonIndexed();return g.deleteAttribute("normal"),g.deleteAttribute("uv"),g.translate(y,R,b),Xt(g,.25,.3,.35),g}const d=[];for(let y=0;y<u;y++){const b=(y+.5)*f;if(y>0)for(const R of _)d.push(m(-o/2,R,b)),d.push(m(1+o/2,R,b));for(const R of S)d.push(m(i-o/2,R,b)),d.push(m(1-i+o/2,R,b))}const M=.0225,A=.0015;function x(y,b){const R=new it(M*2,p,A).toNonIndexed();R.deleteAttribute("normal"),R.deleteAttribute("uv");const g=y===0?-A/2:1+A/2;return R.translate(.5,b,g),Xt(R,.25,.3,.35),R}for(let y=0;y<u;y++){const b=(y+.5)*f;d.push(x(0,b),x(1,b))}return Ft([n,l,c,...d],!1)}function mM(){const i=new Qt(.5,.5,1,20).toNonIndexed();return i.translate(.5,.5,.5),i.setAttribute("color",new Be(new Float32Array(i.attributes.position.count*3).fill(1),3)),i}const Ho=.1727,Sh=.3;function gM(){const i=new it(1,Ho,1).toNonIndexed();i.translate(.5,Ho/2,.5);const e=1-Ho,t=new Qt(Sh,Sh,e,20).toNonIndexed();t.translate(.5,Ho+e/2,.5);const n=Ft([i,t],!1);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3)),n}function _M(){const i=new Qt(.5,.5,1,16).toNonIndexed();return i.rotateX(Math.PI/2),i.translate(.5,.5,.5),i.setAttribute("color",new Be(new Float32Array(i.attributes.position.count*3).fill(1),3)),i}function xM(){const i=.16666666666666666,e=i*Math.sqrt(3),t=[[i,i],[3*i,i],[5*i,i],[2*i,i+e],[4*i,i+e]],n=new He(7031343),r=t.map(([l,c])=>{const u=new Qt(i,i,1,10).toNonIndexed();return u.rotateX(Math.PI/2),u.translate(l,c,.5),u.setAttribute("color",new Be(new Float32Array(u.attributes.position.count*3).map((f,h)=>h%3===0?n.r:h%3===1?n.g:n.b),3)),u}),s=Ft(r,!1);s.computeBoundingBox();const{min:o,max:a}=s.boundingBox;return s.translate(-o.x,-o.y,-o.z),s.scale(1/(a.x-o.x),1/(a.y-o.y),1/(a.z-o.z)),s}function vM(){const t=.6930000000000001,n=[0,0,0],r=[1,0,0],s=[0,0,1],o=[1,0,1],a=[.307,1,0],l=[t,1,0],c=[.307,1,1],u=[t,1,1];function f(A,x,y,b){return[A,x,y,A,y,b]}const h=[...f(n,r,o,s),...f(a,l,u,c),...f(n,r,l,a),...f(s,o,u,c),...f(n,a,c,s),...f(r,l,u,o)],p=new Float32Array(h.length*3);h.forEach((A,x)=>{p[x*3]=A[0],p[x*3+1]=A[1],p[x*3+2]=A[2]});const _=new At;_.setAttribute("position",new Be(p,3)),Xt(_,1,1,1);const S=.8,m=.1752,d=.005,M=new it(m*2,S,d).toNonIndexed();return M.deleteAttribute("normal"),M.deleteAttribute("uv"),M.translate(.5,S/2,1),Xt(M,.15,.15,.15),Ft([_,M],!1)}const Mh=.07,SM=.6;function MM(){const e=[];for(let d=0;d<=16;d++){const M=d/16*Math.PI;e.push([.5-.5*Math.cos(M),.5*Math.sin(M)])}function t(d,M,A,x){return[d,M,A,d,A,x]}const n=[];for(let d=0;d<16;d++){const[M,A]=e[d],[x,y]=e[d+1];n.push(...t([M,A,0],[x,y,0],[x,y,1],[M,A,1]))}const r=[.5,0,0];for(let d=0;d<16;d++){const[M,A]=e[d],[x,y]=e[d+1];n.push(r,[x,y,0],[M,A,0])}const s=.5-Mh,o=.5+Mh,a=.5*SM,l=new xf(e.map(([d,M])=>new pe(d,M))),c=new jl([new pe(s,0),new pe(o,0),new pe(o,a),new pe(s,a)]);l.holes.push(c);const u=new Cc(l),f=u.attributes.position,h=u.index;for(let d=0;d<h.count;d+=3){const M=[];for(let A=0;A<3;A++){const x=h.getX(d+A);M.push([f.getX(x),f.getY(x),1])}n.push(...M)}const p=new Float32Array(n.length*3);n.forEach((d,M)=>{p[M*3]=d[0],p[M*3+1]=d[1],p[M*3+2]=d[2]});const _=new At;_.setAttribute("position",new Be(p,3)),_.computeBoundingBox();const{min:S,max:m}=_.boundingBox;return _.translate(-S.x,-S.y,-S.z),_.scale(1/(m.x-S.x),1/(m.y-S.y),1/(m.z-S.z)),_.setAttribute("color",new Be(new Float32Array(_.attributes.position.count*3).fill(1),3)),_}const yM=8014394,bM=[[/^SM_Norwayhouse_(2b|6a|5a)$/i,6447730],[/^SM_Norwayhouse_3c$/i,9079434],[/yellow/i,11246190],[/red/i,11370100],[/blue/i,5464421],[/green/i,7374451],[/brick/i,10246972],[/white/i,14210248],[/gr[ae]y/i,9079434],[/wooden|wood/i,7031343],[/SM_Industrial_02/i,9079434]];function Mi(i){for(const[e,t]of bM)if(e.test(i))return t;return yM}const EM=4881471,wM=7363642,AM=/fall/i,TM=11189378,RM=/snowy/i;function CM(i){return RM.test(i)?TM:AM.test(i)?wM:EM}const PM=11577500,LM=[[/SM_Industrial_02/i,10246972],[/^SM_Industrial_Small_Addon_01$/i,12564649],[/^SM_Norwayhouse_2b$/i,9473873],[/^SM_Norwayhouse_(6a|5a)$/i,6369587],[/^SM_Norwayhouse_3c$/i,2046309],[/^(industrial_office1(_plain)?|CAF_industrial_office1)$/i,6515043]];function $n(i){for(const[e,t]of LM)if(e.test(i))return t;return PM}function ks(i=!1){const t=new it(1,.62,1).toNonIndexed();t.translate(.5,.62/2,.5),t.deleteAttribute("normal"),t.deleteAttribute("uv"),t.setAttribute("color",new Be(new Float32Array(t.attributes.position.count*3).fill(1),3));const n=i?[[0,.62,0],[0,.62,1],[0,1,.5],[1,.62,0],[1,.62,1],[1,1,.5]]:[[0,.62,0],[1,.62,0],[.5,1,0],[0,.62,1],[1,.62,1],[.5,1,1]],r=[n[0],n[1],n[2],n[3],n[5],n[4],n[0],n[2],n[5],n[0],n[5],n[3],n[1],n[4],n[5],n[1],n[5],n[2]],s=new Float32Array(r.length*3);r.forEach((a,l)=>{s[l*3]=a[0],s[l*3+1]=a[1],s[l*3+2]=a[2]});const o=new At;return o.setAttribute("position",new Be(s,3)),o.setAttribute("color",new Be(new Float32Array(o.attributes.position.count*3).fill(1),3)),{walls:t,roof:o}}function DM(){const{walls:i,roof:e}=ks(),t=.62,n=2,r=t/n,s=r*.7,o=r*.3,a=.022,l=.018,c=.005,u=Array.from({length:10},(S,m)=>.05+(m+.5)*.09),f=new Set([2,7]);function h(S,m,d,M){const A=d*r,x=M?s:o,y=M?a:l,b=new it(c,x,y*2).toNonIndexed();b.deleteAttribute("normal"),b.deleteAttribute("uv");let R;M?R=x/2:d===0?R=s+x/2:R=A+r/2;const g=S?1+c/2:-c/2;return b.translate(g,R,m),M?Xt(b,.25,.2,.15):Xt(b,.25,.3,.35),b}const p=[];return u.forEach((S,m)=>{for(let d=0;d<n;d++)p.push(h(!0,S,d,d===0&&f.has(m))),p.push(h(!1,S,d,!1))}),{walls:Ft([i,...p],!1),roof:e}}function IM(){const{walls:i,roof:e}=ks(),t=.62,n=4,r=t/n,s=r*.7,o=r*.5,a=.022,l=.018,c=.005,u=Array.from({length:10},(S,m)=>.05+(m+.5)*.09),f=new Set([2,7]);function h(S,m,d,M){const A=M?s:o,x=M?a:l,y=new it(c,A,x*2).toNonIndexed();y.deleteAttribute("normal"),y.deleteAttribute("uv");const b=S?1+c/2:-c/2;return y.translate(b,d,m),M?Xt(y,.25,.2,.15):Xt(y,.25,.3,.35),y}const p=[];return u.forEach((S,m)=>{if(f.has(m))p.push(h(!0,S,s/2,!0)),p.push(h(!0,S,2*r,!1)),p.push(h(!0,S,3*r,!1)),p.push(h(!1,S,2*r,!1)),p.push(h(!1,S,3*r,!1));else for(let M=1;M<n;M++){const A=M*r+r/2;p.push(h(!0,S,A,!1)),p.push(h(!1,S,A,!1))}}),{walls:Ft([i,...p],!1),roof:e}}function NM(){const{walls:i,roof:e}=ks(),t=.62,n=3,r=1.2/16.43,s=1.2/18.5/2,o=2.8/16.43,a=1.47/18.5/2,l=.005,c=Array.from({length:5},(A,x)=>.05+(x+.5)*.18),u=2,f=.02,h=o+f,_=(t-f-h)/n,S=Array.from({length:n},(A,x)=>h+(x+.5)*_);function m(A,x,y,b){const R=b?o:r,g=b?a:s,E=new it(l,R,g*2).toNonIndexed();E.deleteAttribute("normal"),E.deleteAttribute("uv");const T=A?1+l/2:-l/2;return E.translate(T,y,x),b?Xt(E,.25,.2,.15):Xt(E,.25,.3,.35),E}const d=[];return c.forEach((A,x)=>{if(x===u)d.push(m(!0,A,o/2,!0)),d.push(m(!0,A,(S[0]+S[1])/2,!1)),d.push(m(!0,A,(S[1]+S[2])/2,!1));else for(let y=0;y<n;y++)d.push(m(!0,A,S[y],!1)),d.push(m(!1,A,S[y],!1))}),{walls:Ft([i,...d],!1),roof:e}}const UM=4214105,OM=4207398;function FM(){const i=new it(1,1,1).toNonIndexed();i.translate(.5,.5,.5),i.deleteAttribute("normal"),i.deleteAttribute("uv"),Xt(i,1,1,1);const e=2,t=1/e,n=2.2/11.6,s=1.6/31.93*2,o=[2.5/11.6,1.8/11.6],a=.005,l=7,c=(1-l*s)/(l+1),u=Array.from({length:l},(U,P)=>c*(P+1)+s*(P+.5));function f(U,P){const z=P*t+o[P]+n/2,G=new it(a,n,s).toNonIndexed();return G.deleteAttribute("normal"),G.deleteAttribute("uv"),G.translate(-a/2,z,U),Xt(G,1,1,1),G}const h=2,p=3.8/11.6;function _(U){const P=new it(a,p,s).toNonIndexed();return P.deleteAttribute("normal"),P.deleteAttribute("uv"),P.translate(-a/2,p/2,U),Xt(P,1,1,1),P}const S=1.8/13.04,m=3.2/11.6;function d(U){const P=new it(S,m,a).toNonIndexed();P.deleteAttribute("normal"),P.deleteAttribute("uv");const z=t+m/2,G=U?1+a/2:-a/2;return P.translate(.5,z,G),Xt(P,1,1,1),P}const M=[];for(let U=0;U<e;U++)u.forEach((P,z)=>{U===0&&z===h||M.push(f(P,U))});const A=Ft([_(u[h]),d(!0),d(!1)],!1),x=4,y=1/11.6,b=2/31.93,R=1/11.6,g=b*2,E=(1-x*g)/(x+1),T=Array.from({length:x},(U,P)=>E*(P+1)+g*(P+.5)),L=1-R-y/2;function I(U){const P=new it(a,y,g).toNonIndexed();return P.deleteAttribute("normal"),P.deleteAttribute("uv"),P.translate(1+a/2,L,U),Xt(P,1,1,1),P}for(const U of T)M.push(I(U));return{walls:i,windows:Ft(M,!1),door:A}}const BM=9079434;function Of(){function n(R,g,E,T){return[R,g,E,R,E,T]}const r=new it(1,.62,1).toNonIndexed();r.translate(.5,.62/2,.5),r.deleteAttribute("normal"),r.deleteAttribute("uv");function s(R){const g=[R,.62,0],E=[R,.62,1],T=[R,.62+.15,1];return[g,E,T]}const o=n([0,.62,1],[1,.62,1],[1,.62+.15,1],[0,.62+.15,1]),a=new Float32Array([...s(0),...s(1),...o].flat()),l=new At;l.setAttribute("position",new Be(a,3));const c=Ft([r,l],!1);c.setAttribute("color",new Be(new Float32Array(c.attributes.position.count*3).fill(1),3));const u=.62,f=.62+.15,h=[0,u,0],p=[1,u,0],_=[0,f,1],S=[1,f,1],m=[0,u+.05,0],d=[1,u+.05,0],M=[0,f+.05,1],A=[1,f+.05,1],x=[...n(m,d,A,M),...n(h,_,S,p),...n(h,p,d,m),...n(_,M,A,S),...n(h,m,M,_),...n(p,S,A,d)],y=new Float32Array(x.length*3);x.forEach((R,g)=>{y[g*3]=R[0],y[g*3+1]=R[1],y[g*3+2]=R[2]});const b=new At;return b.setAttribute("position",new Be(y,3)),b.setAttribute("color",new Be(new Float32Array(b.attributes.position.count*3).fill(1),3)),{walls:c,roof:b}}const zM=9414293,HM=10523263,GM=4207398;function kM(){const{walls:i,roof:e}=Of();vh(i),vh(e);const t=.005,n=.593,r=.549,s=new it(t,n,r).toNonIndexed();return s.deleteAttribute("normal"),s.deleteAttribute("uv"),s.translate(1+t/2,n/2,.5),Xt(s,1,1,1),{walls:i,roof:e,door:s}}function VM(){const e=new it(1,.62,.5).toNonIndexed();e.translate(.5,.62/2,.75);const t=new it(.5,.62,.5).toNonIndexed();t.translate(.25,.62/2,.25);const n=Ft([e,t],!1),r=new He(9080724);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).map((s,o)=>o%3===0?r.r:o%3===1?r.g:r.b),3)),n}function WM(){const e=new it(1,.62,.5).toNonIndexed();e.translate(.5,.62/2,.25);const t=new it(.5,.62,.5).toNonIndexed();t.translate(.75,.62/2,.75);const n=Ft([e,t],!1);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3)),n}function XM(){const e=new it(1,.62,.5).toNonIndexed();e.translate(.5,.62/2,.75);const t=new it(.5,.62,.5).toNonIndexed();t.translate(.75,.62/2,.25);const n=Ft([e,t],!1);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3)),n}function YM(){const t=new it(1,.62,.5).toNonIndexed();t.translate(.5,.62/2,.75);const n=new it(.5,.62,.5).toNonIndexed();n.translate(.75,.62/2,.25);const r=Ft([t,n],!1);r.deleteAttribute("normal"),r.deleteAttribute("uv"),r.setAttribute("color",new Be(new Float32Array(r.attributes.position.count*3).fill(1),3));function s(c,u,f,h,p){if(p){const m=(f+h)/2,d=[[c,.62,f],[c,.62,h],[c,1,m],[u,.62,f],[u,.62,h],[u,1,m]];return[d[0],d[1],d[2],d[3],d[5],d[4],d[0],d[2],d[5],d[0],d[5],d[3],d[1],d[4],d[5],d[1],d[5],d[2]]}const _=(c+u)/2,S=[[c,.62,f],[u,.62,f],[_,1,f],[c,.62,h],[u,.62,h],[_,1,h]];return[S[0],S[1],S[2],S[3],S[5],S[4],S[0],S[2],S[5],S[0],S[5],S[3],S[1],S[4],S[5],S[1],S[5],S[2]]}const o=[...s(0,1,.5,1,!0),...s(.5,1,0,.5,!1)],a=new Float32Array(o.length*3);o.forEach((c,u)=>{a[u*3]=c[0],a[u*3+1]=c[1],a[u*3+2]=c[2]});const l=new At;return l.setAttribute("position",new Be(a,3)),l.setAttribute("color",new Be(new Float32Array(l.attributes.position.count*3).fill(1),3)),{walls:r,roof:l}}function qM(){const t=new it(1,.62,.5).toNonIndexed();t.translate(.5,.62/2,.25);const n=new it(.5,.62,.5).toNonIndexed();n.translate(.75,.62/2,.75);const r=Ft([t,n],!1);r.deleteAttribute("normal"),r.deleteAttribute("uv"),r.setAttribute("color",new Be(new Float32Array(r.attributes.position.count*3).fill(1),3));function s(c,u,f,h,p){if(p){const m=(f+h)/2,d=[[c,.62,f],[c,.62,h],[c,1,m],[u,.62,f],[u,.62,h],[u,1,m]];return[d[0],d[1],d[2],d[3],d[5],d[4],d[0],d[2],d[5],d[0],d[5],d[3],d[1],d[4],d[5],d[1],d[5],d[2]]}const _=(c+u)/2,S=[[c,.62,f],[u,.62,f],[_,1,f],[c,.62,h],[u,.62,h],[_,1,h]];return[S[0],S[1],S[2],S[3],S[5],S[4],S[0],S[2],S[5],S[0],S[5],S[3],S[1],S[4],S[5],S[1],S[5],S[2]]}const o=[...s(0,1,0,.5,!0),...s(.5,1,.5,1,!1)],a=new Float32Array(o.length*3);o.forEach((c,u)=>{a[u*3]=c[0],a[u*3+1]=c[1],a[u*3+2]=c[2]});const l=new At;return l.setAttribute("position",new Be(a,3)),l.setAttribute("color",new Be(new Float32Array(l.attributes.position.count*3).fill(1),3)),{walls:r,roof:l}}function yh(i=!1){const n=new it(1,.62,1).toNonIndexed();n.translate(.5,.62/2,.5),n.deleteAttribute("normal"),n.deleteAttribute("uv"),n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3));function r(c,u){const f=(c+u)/2,h=[[0,.62,c],[0,.62,u],[0,1,f],[1,.62,c],[1,.62,u],[1,1,f]];return[h[0],h[1],h[2],h[3],h[5],h[4],h[0],h[2],h[5],h[0],h[5],h[3],h[1],h[4],h[5],h[1],h[5],h[2]]}function s(c,u){const f=(c+u)/2,h=[[c,.62,0],[u,.62,0],[f,1,0],[c,.62,1],[u,.62,1],[f,1,1]];return[h[0],h[1],h[2],h[3],h[5],h[4],h[0],h[2],h[5],h[0],h[5],h[3],h[1],h[4],h[5],h[1],h[5],h[2]]}const o=i?[...s(0,.5),...s(.5,1)]:[...r(0,.5),...r(.5,1)],a=new Float32Array(o.length*3);o.forEach((c,u)=>{a[u*3]=c[0],a[u*3+1]=c[1],a[u*3+2]=c[2]});const l=new At;return l.setAttribute("position",new Be(a,3)),l.setAttribute("color",new Be(new Float32Array(l.attributes.position.count*3).fill(1),3)),{walls:n,roof:l}}function ZM(){const e=new it(1,.62,.3333333333333333).toNonIndexed();e.translate(.5,.62/2,1/6);const t=new it(1/3,.62,2/3).toNonIndexed();t.translate(.5,.62/2,2/3);const n=Ft([e,t],!1);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3)),n}function Cr(i,e,t,n,r,s){const o=i.reduce((m,d)=>m+d.instanceCount,0);if(o===0)return null;const a=new Xs({vertexColors:!0,roughness:1,metalness:0,envMapIntensity:Nf,flatShading:!0,side:yn}),l=new Vs(t,a,o),c=new lt,u=new He,f=new lt;let h=0;const p=new N,_=new zn,S=new N;for(const m of i){const{positions:d,matrices:M}=m.layout,A=new Float32Array(e,d.byteOffset,d.byteLength/4),x=new Float32Array(e,M.byteOffset,M.byteLength/4);let y=m.heightOverride;if(y===void 0){let E=1/0,T=-1/0;for(let L=1;L<A.length;L+=3)A[L]<E&&(E=A[L]),A[L]>T&&(T=A[L]);y=T-E}y=Math.max(y,.5);const b=y/n;f.makeScale(b,b,b);const R=m.label.replace(/_0$/,""),g=s?s(R):null;for(let E=0;E<m.instanceCount;E++)p.set(x[E*10],x[E*10+1],x[E*10+2]),_.set(x[E*10+3],x[E*10+4],x[E*10+5],x[E*10+6]),S.set(x[E*10+7],x[E*10+8],x[E*10+9]),c.compose(p,_,S).multiply(f),l.setMatrixAt(h,c),g!==null&&l.setColorAt(h,u.setHex(g)),h++}return l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.name=r,l}function ot(i,e,t,n,r){const s=i.reduce((d,M)=>d+M.instanceCount,0);if(s===0)return null;const o=new Xs({vertexColors:!0,roughness:1,metalness:0,envMapIntensity:Nf,flatShading:!0,side:yn}),a=new Vs(t,o,s),l=new lt,c=new He,u=new lt,f=new lt,h=new lt,p=new N,_=new zn,S=new N;let m=0;for(const d of i){const{matrices:M}=d.layout,A=new Float32Array(e,M.byteOffset,M.byteLength/4),[x,y,b]=d.bboxMin,[R,g,E]=d.bboxMax;f.makeScale(Math.max(R-x,.01),Math.max(g-y,.01),Math.max(E-b,.01)),h.makeTranslation(x,y,b),u.multiplyMatrices(h,f);const T=d.label.replace(/_0$/,""),L=r?r(T):null;for(let I=0;I<d.instanceCount;I++)p.set(A[I*10],A[I*10+1],A[I*10+2]),_.set(A[I*10+3],A[I*10+4],A[I*10+5],A[I*10+6]),S.set(A[I*10+7],A[I*10+8],A[I*10+9]),l.compose(p,_,S).multiply(u),a.setMatrixAt(m,l),L!==null&&a.setColorAt(m,c.setHex(L)),m++}return a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.name=n,a}async function $M(i){const e={vegetation:[],structures:[]},t=await fetch(`${i}3d/trees.json`);if(!t.ok||!(t.headers.get("content-type")||"").includes("json"))return e;let n;try{n=await t.json()}catch{return e}const r=await fetch(`${i}3d/trees.bin`).then(W=>W.arrayBuffer()),s=new Set(["box","house","monoslopehouse","monoslopehousedoor","toppedbox","notchedapartment","facadehouse","fourstoryapartment","threestorysmallapartment","industrialoffice","lshape","lshapehouse","lshapehouse2","tshape","doublegable","cylinder","chimney","log","lshapebox","lshapebox2","logpile","bunker","tubehangar"]),o=n.species.filter(W=>W.label.endsWith("_0")||s.has(W.kind)),a=o.filter(W=>W.kind==="bush"),l=o.filter(W=>W.kind==="box"),c=o.filter(W=>W.kind==="house"),u=c.filter(W=>!_h(W.label.replace(/_0$/,""))),f=c.filter(W=>_h(W.label.replace(/_0$/,""))),h=o.filter(W=>W.kind==="monoslopehouse"),p=o.filter(W=>W.kind==="monoslopehousedoor"),_=o.filter(W=>W.kind==="toppedbox"),S=o.filter(W=>W.kind==="notchedapartment"),m=o.filter(W=>W.kind==="facadehouse"),d=o.filter(W=>W.kind==="fourstoryapartment"),M=o.filter(W=>W.kind==="threestorysmallapartment"),A=o.filter(W=>W.kind==="industrialoffice"),x=o.filter(W=>W.kind==="lshape"),y=o.filter(W=>W.kind==="lshapehouse"),b=o.filter(W=>W.kind==="lshapehouse2"),R=o.filter(W=>W.kind==="tshape"),g=o.filter(W=>W.kind==="doublegable"),E=g.filter(W=>!xh(W.label.replace(/_0$/,""))),T=g.filter(W=>xh(W.label.replace(/_0$/,""))),L=o.filter(W=>W.kind==="cylinder"),I=o.filter(W=>W.kind==="chimney"),U=o.filter(W=>W.kind==="log"),P=o.filter(W=>W.kind==="lshapebox"),z=o.filter(W=>W.kind==="lshapebox2"),G=o.filter(W=>W.kind==="logpile"),$=o.filter(W=>W.kind==="bunker"),oe=o.filter(W=>W.kind==="tubehangar"),Z=o.filter(W=>W.kind!=="bush"&&!s.has(W.kind)),ee=Z.filter(W=>ph(W.label.replace(/_0$/,""))),re=Z.filter(W=>mh(W.label.replace(/_0$/,""))),Ae=Z.filter(W=>gh(W.label.replace(/_0$/,""))),me=Z.filter(W=>!ph(W.label.replace(/_0$/,""))&&!mh(W.label.replace(/_0$/,""))&&!gh(W.label.replace(/_0$/,""))),rt=jS(),qe=eM(),Ze=tM(),Q=nM(),ie=iM(),Ee=oM(),Ge=ks(),Me=ks(!0),We=Of(),yt=kM(),Xe=hM(),he=pM(),_t=DM(),je=IM(),bt=NM(),It=FM(),Zt=VM(),Et=YM(),vt=qM(),B=ZM(),Yt=yh(),dt=yh(!0),C=mM(),v=gM(),H=_M(),X=WM(),K=XM(),le=xM(),ue=vM(),J=MM(),te=[],fe=[],Te=W=>{W&&te.push(W)},ne=W=>{W&&fe.push(W)};return Te(Cr(me,r,rt.trunk,rt.height,"trees_round_trunk")),Te(Cr(me,r,rt.canopy,rt.height,"trees_round_canopy",CM)),Te(Cr(ee,r,qe.geometry,qe.height,"trees_columnar")),Te(Cr(re,r,Ze.geometry,Ze.height,"trees_conical")),Te(Cr(Ae,r,Q.geometry,Q.height,"trees_pine")),Te(Cr(a,r,ie.geometry,ie.height,"bushes_generic")),ne(ot(l,r,Ee,"box_props_generic",Zn)),ne(ot(u,r,Ge.walls,"house_props_walls",$n)),ne(ot(u,r,Ge.roof,"house_props_roof",Mi)),ne(ot(f,r,Me.walls,"house_props_walls_ridgex",$n)),ne(ot(f,r,Me.roof,"house_props_roof_ridgex",Mi)),ne(ot(h,r,We.walls,"monoslopehouse_props_walls",$n)),ne(ot(h,r,We.roof,"monoslopehouse_props_roof",()=>BM)),ne(ot(p,r,yt.walls,"monoslopehousedoor_props_walls",()=>HM)),ne(ot(p,r,yt.roof,"monoslopehousedoor_props_roof",()=>zM)),ne(ot(p,r,yt.door,"monoslopehousedoor_props_door",()=>GM)),ne(ot(_,r,Xe,"toppedbox_props_generic",Zn)),ne(ot(S,r,he,"notchedapartment_props_generic",Zn)),ne(ot(m,r,_t.walls,"facadehouse_props_walls",$n)),ne(ot(m,r,_t.roof,"facadehouse_props_roof",Mi)),ne(ot(d,r,je.walls,"fourstoryapartment_props_walls",$n)),ne(ot(d,r,je.roof,"fourstoryapartment_props_roof",Mi)),ne(ot(M,r,bt.walls,"threestorysmallapartment_props_walls",$n)),ne(ot(M,r,bt.roof,"threestorysmallapartment_props_roof",Mi)),ne(ot(A,r,It.walls,"industrialoffice_props_walls",$n)),ne(ot(A,r,It.windows,"industrialoffice_props_windows",()=>UM)),ne(ot(A,r,It.door,"industrialoffice_props_door",()=>OM)),ne(ot(x,r,Zt,"lshape_props_generic")),ne(ot(y,r,Et.walls,"lshapehouse_props_walls",$n)),ne(ot(y,r,Et.roof,"lshapehouse_props_roof",Mi)),ne(ot(b,r,vt.walls,"lshapehouse2_props_walls",$n)),ne(ot(b,r,vt.roof,"lshapehouse2_props_roof",Mi)),ne(ot(R,r,B,"tshape_props_generic",Zn)),ne(ot(E,r,Yt.walls,"doublegable_props_walls",$n)),ne(ot(E,r,Yt.roof,"doublegable_props_roof",Mi)),ne(ot(T,r,dt.walls,"doublegable_props_walls_ridgez",$n)),ne(ot(T,r,dt.roof,"doublegable_props_roof_ridgez",Mi)),ne(ot(L,r,C,"cylinder_props_generic",Zn)),ne(ot(I,r,v,"chimney_props_generic",Zn)),ne(ot(U,r,H,"log_props_generic",Zn)),ne(ot(P,r,X,"lshapebox_props_generic",Zn)),ne(ot(z,r,K,"lshapebox2_props_generic",Zn)),ne(ot(G,r,le,"logpile_props_generic")),ne(ot($,r,ue,"bunker_props_generic",Zn)),ne(ot(oe,r,J,"tubehangar_props_generic",Zn)),{vegetation:te,structures:fe}}const Ff=new URLSearchParams(location.search).get("assets")==="local"?"/__squadcalc":"https://squadcalc.app/api",Wt=512,KM=100,JM=new URLSearchParams(location.search).has("bench"),nl=Number(new URLSearchParams(location.search).get("frame"))||600,Go=128,il=256,rl=256,Bf=Number(new URLSearchParams(location.search).get("z3d"))||0,bh={KeyW:"f",KeyZ:"f",KeyS:"b",KeyA:"l",KeyQ:"l",KeyD:"r",KeyC:"u",PageUp:"u",KeyX:"d",PageDown:"d"},zf="sqr.map3d.helpClosed",QM=()=>{try{return localStorage.getItem(zf)==="1"}catch{return!1}},jM=[["basemap","Satellite"],["topomap","Topographic"],["terrainmap","Terrain"]];async function Hf(i,e){const t=new Nm,n=await t.loadAsync(`${i}${e}.webp`).catch(r=>{if(e==="basemap")throw r;return t.loadAsync(`${i}basemap.webp`)});return n.colorSpace=on,n.anisotropy=8,n}async function ey(i,e){const t=Ff+i.url;let n=await fetch(t+"3d/landscape.png");const r=n.ok;if(n.ok||(n=await fetch(t+"heightmap.png")),!n.ok)throw new Error(`no heightmap for ${i.url}`);const s=await createImageBitmap(await n.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),a=new OffscreenCanvas(Wt,Wt).getContext("2d",{willReadFrequently:!0});a.imageSmoothingEnabled=!1,a.drawImage(s,0,0,Wt,Wt);const l=a.getImageData(0,0,Wt,Wt).data,c=(r?i.heightScale3D:null)??i.heightScale??1,u=(r?i.zOffset3D:null)??i.zOffset??0,f=Math.abs(i.corner1[0]-i.corner0[0]),h=new Wr(f,f,Wt-1,Wt-1);h.rotateX(-Math.PI/2);const p=h.attributes.position,_=new Float32Array(Wt*Wt);for(let d=0;d<Wt*Wt;d++)_[d]=(255+l[d*4]-l[d*4+2])*c+u+Bf,p.setY(d,_[d]);h.computeVertexNormals();const S=await Hf(t,e);return{mesh:new mn(h,new Xs({map:S,roughness:.9,metalness:0})),c0:i.corner0,size:f,heights:_,base:t}}function Kn(i,e,t){return[e/100-i.c0[0]-i.size/2,t/100-i.c0[1]-i.size/2]}function ty(i,e,t){return[(e+i.size/2+i.c0[0])*100,(t+i.size/2+i.c0[1])*100]}function pn(i,e,t){const n=Math.round((e+i.size/2)/i.size*(Wt-1)),r=Math.round((t+i.size/2)/i.size*(Wt-1)),s=Math.max(0,Math.min(Wt-1,n)),o=Math.max(0,Math.min(Wt-1,r));return i.heights[o*Wt+s]}function Eh(i,e){const t=new N;for(let n=0;n<2e4;n+=Math.max(1,n*.005))if(e.at(n,t),t.y<=pn(i,t.x,t.z))return t;return null}function yi(i,e){const t=i.attributes.position.count;return i.setAttribute("color",new Be(new Float32Array(t*3).fill(e),3)),i}function pt(i,e,t,n,r,s=0,o=1){return yi(new it(i,e,t).translate(n,r,s),o)}function Ui(i,e,t,n,r,s=0,o=1,a=12){return yi(new Qt(i,e,t,a).translate(n,r,s),o)}function ny(i,e,t,n,r=.55){return yi(new Qt(i,i,e,8).rotateZ(-Math.PI/2).translate(t+e/2,n,0),r)}const sc=-.85,Cs=.55,Qo=1.7,iy="./icons/roles/T_role_rifleman.png",ry=()=>Ft([Ui(Cs,Cs,Qo,0,sc+Qo/2,0,1,20),pt(.3,.35,.3,Cs,sc+Qo*.7,0,.3)]),sy={mbt:[8.5,2.4,3.6],tankDestroyer:[7.2,2.4,2.9],ifvTracked:[6.8,2.4,3.2],ifvWheeled:[7,2.4,2.9],apcTracked:[5.4,2.1,2.8],apcWheeled:[7,2.4,2.8],mrap:[5.2,2.1,2.4],jeep:[4.8,1.6,2.1],bike:[2,1,1],truck:[7.6,2.8,2.5],logiTruck:[7.6,2.8,2.5],heli:[9,1.6,9],heliLight:[6,1.3,6],boat:[6.5,1,2.6],other:[5,2,2.6]},sl=new zn().setFromEuler(new Ti(-Math.PI/2,-Math.PI/2,0,"YXZ")),oy=new Wr(1,1),ol=160,wh=new Map;function Ah(i){const e=wh.get(i);if(e)return e;const t=lc(i);if(!t.complete||!t.naturalWidth)return null;const n=new jt(t);return n.colorSpace=on,n.anisotropy=8,n.needsUpdate=!0,wh.set(i,n),n}const Th={radio:()=>[pt(1.3,.9,.9,0,.45,0,.35),pt(.9,.5,.7,0,1.15,0,.55),Ui(.07,.09,5,-.3,2.9,0,.3,8),pt(.05,.05,1.2,-.3,3.6,0,.3),pt(.05,.05,.9,-.3,4.6,0,.3),yi(new ha(.28,12,8).translate(-.3,5.55,0),1.6)],hab:()=>[pt(5.5,2,5.5,0,1,0,.7),yi(new Ws(4.3,1.7,4).rotateY(Math.PI/4).translate(0,2.85,0),1),pt(.1,1.5,1.4,2.76,.75,0,.15)],rally:()=>[pt(.75,.4,.45,.45,.2,.2,.55),Ui(.03,.03,1.9,0,.95,0,.35,6),yi(new Qt(.7,.7,.03,3).rotateX(Math.PI/2).rotateZ(Math.PI/2).translate(.35,1.5,0),1.2)],ammoCrate:()=>[pt(1.6,.75,1,0,.38,0,.7),pt(1.65,.12,1.05,0,.81,0,1),pt(.12,.76,1.02,0,.38,0,1.2)],ammoBag:()=>[pt(.55,.3,.35,0,.15,0,.8)],construction:()=>[pt(1.5,.7,1.5,0,.35,0,.7),pt(1.6,.18,1.6,0,.8,0,1.25)],repair:()=>[pt(2,.9,1.3,0,.45,0,.75),pt(.2,1.9,.2,-.7,1.85,0,.35),pt(1.8,.2,.2,.1,2.8,0,.35),Ui(.2,.2,.12,-.4,.96,.3,1.2)],mortar:()=>[Ui(.45,.45,.08,0,.04,0,.4),yi(new Qt(.06,.07,1.3,8).rotateZ(-.7).translate(.4,.55,0),.35),...[-1,1].map(i=>yi(new Qt(.025,.025,.85,5).rotateX(i*.35).translate(.65,.4,i*.15),.35)),pt(.4,.25,.3,-.5,.13,.4,1)],mine:()=>[Ui(.25,.3,.1,0,.05,0,.6,14),Ui(.06,.06,.04,0,.12,0,1.2,8)],emplacement:()=>[Ui(1.3,1.4,.6,0,.3,0,.65,10),pt(.3,.7,.3,0,.95,0,.35),pt(.9,.3,.3,.1,1.4,0,.5),ny(.05,1.2,.5,1.4)],sandbags:()=>[pt(1.4,.35,.55,0,.18,0,.6),pt(1.1,.3,.5,0,.5,0,.66)],sandbagWall:()=>[pt(3,.45,.7,0,.23,0,.6),pt(2.8,.4,.6,0,.65,0,.66),pt(2.6,.35,.55,0,1.02,0,.6)],hesco:()=>[pt(2,1.4,1,0,.7,0,.6),pt(2.04,.08,1.04,0,1.38,0,.35)],razorwire:()=>[yi(new Qt(.4,.4,3,10,1,!0).rotateZ(Math.PI/2).translate(0,.4,0),.3)],bunker:()=>[pt(3,1.5,3,0,.75,0,.6),pt(3.3,.25,3.3,0,1.62,0,.7),pt(.1,.25,1.6,1.51,1.1,0,.15)],explosive:()=>[pt(.3,.12,.2,0,.06,0,.45),pt(.08,.05,.08,.05,.14,0,1.3)],ladder:()=>[pt(.06,2.6,.06,0,1.3,-.22,.4),pt(.06,2.6,.06,0,1.3,.22,.4),...[.4,.9,1.4,1.9,2.4].map(i=>pt(.05,.05,.44,0,i,0,.4))],other:()=>[pt(1,1,1,0,.5,0,.8)]};function _s(i,e){const t=new Vs(i,new Xs({roughness:.7,vertexColors:!!i.attributes.color}),e);return t.instanceColor=new ji(new Float32Array(e*3),3),t.instanceMatrix.setUsage($i),t.frustumCulled=!1,t.count=0,t}const ay=15,ly=45,Pr=10,Nr=16,Gf=.3,qs=(i,e)=>i*73856093^e*19349663;function Lc(i,e){i.alphaToCoverage=!0,i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aFade;
varying float vFade;`).replace("#include <begin_vertex>",e?`#include <begin_vertex>
        vec3 instW = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vFade = min(aFade, mix(${Gf.toFixed(2)}, 1.0,
          smoothstep(${ay.toFixed(1)}, ${ly.toFixed(1)},
                     distance(instW, cameraPosition))));`:`#include <begin_vertex>
vFade = aFade;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vFade;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vFade;`)},i.customProgramCacheKey=()=>e?"fade-cam":"fade",i.needsUpdate=!0}function cy(i){const e=i.count,t=new Float32Array(e).fill(1),n=new ji(t,1);n.setUsage($i),i.geometry=i.geometry.clone(),i.geometry.setAttribute("aFade",n),Lc(i.material,!0),i.updateMatrixWorld(!0);const r=new Float32Array(e*2),s=new Map,o=new lt,a=new N;for(let l=0;l<e;l++){i.getMatrixAt(l,o),a.setFromMatrixPosition(o).applyMatrix4(i.matrixWorld),r[l*2]=a.x,r[l*2+1]=a.z;const c=qs(Math.floor(a.x/Nr),Math.floor(a.z/Nr));(s.get(c)??s.set(c,[]).get(c)).push(l)}return{fade:t,attr:n,xz:r,grid:s,touched:[]}}function uy(i,e){if(!e.length)return;e.sort((r,s)=>r-s),i.clearUpdateRanges();let t=e[0],n=t;for(const r of e)r-n>16&&(i.addUpdateRange(t,n-t+1),t=r),n=r;i.addUpdateRange(t,n-t+1),i.needsUpdate=!0}const oc=1<<20;function hy(i){const e=new Map;return i.forEach((t,n)=>{for(const[r,s]of t.grid){const o=e.get(r)??e.set(r,[]).get(r);for(const a of s)o.push(n*oc+a)}}),e}function fy(i,e,t){const n=new Map;for(const r of i)if(r.touched.length){n.set(r,r.touched.slice());for(const s of r.touched)r.fade[s]=1;r.touched.length=0}for(let r=0;r<t.length;r+=3){const s=t[r],o=t[r+2],a=Math.floor((s-Pr)/Nr),l=Math.floor((s+Pr)/Nr),c=Math.floor((o-Pr)/Nr),u=Math.floor((o+Pr)/Nr);for(let f=a;f<=l;f++)for(let h=c;h<=u;h++)for(const p of e.get(qs(f,h))??[]){const _=i[Math.floor(p/oc)],S=p%oc,m=Math.hypot(_.xz[S*2]-s,_.xz[S*2+1]-o);if(m>=Pr)continue;const d=Math.max(Gf,Math.min(1,(m/Pr-.6)/.4));d<_.fade[S]&&(_.fade[S]===1&&_.touched.push(S),_.fade[S]=d)}}for(const r of i){const s=n.get(r);(s||r.touched.length)&&uy(r.attr,(s??[]).concat(r.touched))}}const dy="./icons/mark/rallypoint.png",ko=2.5,Rh=new Map;function py(i,e,t,n,r){const s=lc(e);if(!s.complete||!s.naturalWidth)return!1;const o=128;i.width=o,i.height=r?Math.round(o*1.42):o;const a=i.getContext("2d");if(dd(a,o/2,o/2,o*.84,t,s,n),r){a.font="bold 40px system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle";const l=Math.max(a.measureText(r).width+22,50),c=46,u=o*.93;a.fillStyle="#13171f",a.strokeStyle=t,a.lineWidth=5,a.beginPath(),a.roundRect(o/2-l/2,u,l,c,9),a.fill(),a.stroke(),a.fillStyle="#fff",a.fillText(r,o/2,u+c/2+1)}return!0}function Ch(i,e,t,n){const r=`${i}|${e}|${t}|${n??""}`,s=Rh.get(r);if(s)return s;const o=document.createElement("canvas");if(!py(o,i,e,t,n))return null;const a=new ca(o);return a.colorSpace=on,Rh.set(r,a),a}const my="./icons/scoreboard/deaths.png",Ph=3e4,Lh=1800,Ps=i=>i.eosId??(i.playerId!=null?`pid:${i.playerId}`:`name:${i.name??"?"}`),kf=i=>Date.parse(i.timestamp)||0,Vf=i=>!!i.position&&(!i.stale||ac(i));function gy(i,e){(e[0]!==i.first||e.length<i.upto)&&(i.first=e[0]??null,i.upto=0,i.deaths=[],i.blasts=new Map);for(let t=Math.max(1,i.upto);t<e.length;t++){const n=e[t-1],r=e[t],s=kf(r),o=new Map((r.players??[]).map(a=>[Ps(a),a.soldier]));for(const a of n.players??[]){const l=a.soldier;if(!(l!=null&&l.position)||!ac(l))continue;const c=o.get(Ps(a));c&&Vf(c)||i.deaths.push({t:s,player:a,...l.position})}for(const a of r.vehicles??[])(a.health??1)<=0&&a.position&&!i.blasts.has(a.id)&&i.blasts.set(a.id,{t:s,...a.position})}i.upto=e.length}let xs=null;function _y(){if(xs)return xs;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");e.lineCap="round";for(const[t,n]of[[14,"rgba(0,0,0,0.6)"],[8,"#ffffff"]])e.strokeStyle=n,e.lineWidth=t,e.beginPath(),e.moveTo(14,14),e.lineTo(50,50),e.moveTo(50,14),e.lineTo(14,50),e.stroke();return xs=new ca(i),xs.colorSpace=on,xs}let al=null;function xy(){if(al)return al;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(70,68,66,0.9)"),t.addColorStop(1,"rgba(70,68,66,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),al=new ca(i)}const Wf=.25,Ur=32,vy=.5,Sy=2.5,My=2;function yy(i){i.updateMatrixWorld(!0);const e=[];let t,n,r=null;if(i.isInstancedMesh){const a=i;a.geometry=a.geometry.clone(),a.geometry.computeBoundingBox();const l=new lt;for(let c=0;c<a.count;c++)a.getMatrixAt(c,l),e.push(a.geometry.boundingBox.clone().applyMatrix4(l.premultiply(a.matrixWorld)));t=new Float32Array(a.count).fill(1),n=new ji(t,1)}else{const a=i.userData.parts,l=i.geometry.index;if(!a||!l)return null;r=new Uint32Array(a.length*2),a.forEach((c,u)=>{let f=1/0,h=-1;for(let p=c.start;p<c.start+c.count;p++){const _=l.getX(p);_<f&&(f=_),_>h&&(h=_)}r[u*2]=f,r[u*2+1]=h-f+1,e.push(c.box.clone().applyMatrix4(i.matrixWorld))}),t=new Float32Array(i.geometry.attributes.position.count).fill(1),n=new Be(t,1)}n.setUsage($i),i.geometry.setAttribute("aFade",n),Lc(i.material,!1);const s=new Float32Array(e.length*6),o=new Map;return e.forEach((a,l)=>{if(s.set([a.min.x,a.min.y,a.min.z,a.max.x,a.max.y,a.max.z],l*6),!(a.max.y-a.min.y<Sy||Math.min(a.max.x-a.min.x,a.max.z-a.min.z)<My))for(let c=Math.floor(a.min.x/Ur);c<=Math.floor(a.max.x/Ur);c++)for(let u=Math.floor(a.min.z/Ur);u<=Math.floor(a.max.z/Ur);u++){const f=qs(c,u);(o.get(f)??o.set(f,[]).get(f)).push(l)}}),{fade:t,attr:n,boxes:s,ranges:r,grid:o,touched:[]}}function Dh(i,e,t){if(!i.ranges){i.fade[e]=t;return}const n=i.ranges[e*2],r=i.ranges[e*2+1];i.fade.fill(t,n,n+r),i.attr.addUpdateRange(n,r)}function by(i,e){const t=i.touched;i.touched=[];const n=new Set;for(let r=0;r<e.length;r+=3){const s=e[r],o=e[r+1],a=e[r+2];for(const l of i.grid.get(qs(Math.floor(s/Ur),Math.floor(a/Ur)))??[]){const c=l*6,u=vy;s>i.boxes[c]-u&&o>i.boxes[c+1]-u&&a>i.boxes[c+2]-u&&s<i.boxes[c+3]+u&&o<i.boxes[c+4]+u&&a<i.boxes[c+5]+u&&n.add(l)}}if(!(!t.length&&!n.size)){i.attr.clearUpdateRanges();for(const r of t)n.has(r)||Dh(i,r,1);for(const r of n)Dh(i,r,Wf),i.touched.push(r);i.ranges||i.attr.clearUpdateRanges(),i.attr.needsUpdate=!0}}function oi({keys:i,label:e}){return be.jsxs("div",{className:"m3d-row",children:[be.jsx("span",{className:"m3d-keys",children:i}),be.jsx("span",{children:e})]})}function vs({button:i}){return be.jsxs("svg",{className:"m3d-mouse",viewBox:"0 0 14 20","aria-label":i?`${i} mouse button`:"mouse",children:[be.jsx("rect",{x:"1",y:"1",width:"12",height:"18",rx:"6"}),be.jsx("path",{d:"M7 1v7M1 8h12"}),i==="left"&&be.jsx("path",{className:"lit",d:"M7 1.5A5.5 5.5 0 0 0 1.5 7V8H7Z"}),i==="wheel"&&be.jsx("rect",{className:"lit",x:"5.8",y:"3",width:"2.4",height:"4.2",rx:"1.2"})]})}const Ih=500;function Ey(i){const e=new lt,t=new N,n=new He,r=new Map;for(let s=0;s<i.count;s++){i.getMatrixAt(s,e),t.setFromMatrixPosition(e);const o=qs(Math.floor(t.x/Ih),Math.floor(t.z/Ih));(r.get(o)??r.set(o,[]).get(o)).push(s)}return[...r.values()].map(s=>{const o=new Vs(i.geometry,i.material,s.length);return o.name=i.name,o.position.copy(i.position),o.quaternion.copy(i.quaternion),o.scale.copy(i.scale),s.forEach((a,l)=>{i.getMatrixAt(a,e),o.setMatrixAt(l,e),i.instanceColor&&(i.getColorAt(a,n),o.setColorAt(l,n))}),o.computeBoundingSphere(),o})}const wy=i=>/bush/i.test(i)?450:/trunk/i.test(i)?1500:1/0,Xf=22;function Ay(i,e){const t=i.x+e.dx,n=i.y+e.dy,r=[];if(e.type==="sphere"){for(let c=0;c<48;c++){const u=c/48*Math.PI*2;r.push([t+Math.cos(u)*e.radius,n+Math.sin(u)*e.radius])}return r}const s=[];if(e.type==="box")s.push([-e.extX,-e.extY],[e.extX,-e.extY],[e.extX,e.extY],[-e.extX,e.extY]);else{const c=Math.max(0,e.length-e.radius);for(let u=0;u<=16;u++){const f=u/16*Math.PI;s.push([Math.cos(f)*e.radius,c+Math.sin(f)*e.radius])}for(let u=0;u<=16;u++){const f=Math.PI+u/16*Math.PI;s.push([Math.cos(f)*e.radius,-c+Math.sin(f)*e.radius])}}const o=(e.rot||0)*Math.PI/180,a=Math.cos(o),l=Math.sin(o);for(const[c,u]of s)r.push([t+a*c-l*u,n+l*c+a*u]);return r}function Ty(i,e){const t=e.length,n=[],r=[],s=[];for(const[a,l]of e){const[c,u]=Kn(i,a,l),f=pn(i,c,u);n.push(c,f-1,u,c,f+Xf,u),r.push(1,1,1,.6,1,1,1,0)}for(let a=0;a<t;a++){const l=a*2,c=(a+1)%t*2;s.push(l,c,l+1,c,c+1,l+1)}const o=new At;return o.setAttribute("position",new Lt(n,3)),o.setAttribute("color",new Lt(r,4)),o.setIndex(s),o}const Nh=new Map;function ll(i,e){const t=`${i}|${e}`,n=Nh.get(t);if(n)return n;const r=document.createElement("canvas"),s=r.getContext("2d"),o="bold 30px system-ui, sans-serif";s.font=o,r.width=Math.ceil(s.measureText(i).width)+32,r.height=48,s.font=o,s.textAlign="center",s.textBaseline="middle",s.fillStyle="rgba(15,17,22,0.85)",s.strokeStyle=e,s.lineWidth=4,s.beginPath(),s.roundRect(2,2,r.width-4,r.height-4,10),s.fill(),s.stroke(),s.fillStyle="#fff",s.fillText(i,r.width/2,r.height/2+1);const a=new ca(r);return a.colorSpace=on,Nh.set(t,a),a}const Ry=.8;function Yf(i,e,t){const n=(e+i.size/2)/i.size*(Wt-1),r=(t+i.size/2)/i.size*(Wt-1),s=Math.max(0,Math.min(Wt-2,Math.floor(n))),o=Math.max(0,Math.min(Wt-2,Math.floor(r))),a=Math.max(0,Math.min(1,n-s)),l=Math.max(0,Math.min(1,r-o)),c=(u,f)=>i.heights[u*Wt+f];return(c(o,s)*(1-a)+c(o,s+1)*a)*(1-l)+(c(o+1,s)*(1-a)+c(o+1,s+1)*a)*l}function Dc(i,e){const t=[],n=[];e((s,o,a,l,c,u,f,h)=>{const p=t.length/3;for(const[_,S]of[[s,o],[a,l],[c,u],[f,h]])t.push(_,Yf(i,_,S)+Ry,S);n.push(p,p+1,p+2,p+1,p+3,p+2)});const r=new At;return r.setAttribute("position",new Lt(t,3)),r.setIndex(n),r}function cl(i,e,t,n,r,s=!1){const o=Math.max(48,Math.min(720,Math.ceil(2*Math.PI*r/5)));return Dc(i,a=>{for(let l=0;l<o;l++){if(s&&l%4>=2)continue;const c=l/o*Math.PI*2,u=(l+1)/o*Math.PI*2;a(e+Math.cos(c)*n,t+Math.sin(c)*n,e+Math.cos(u)*n,t+Math.sin(u)*n,e+Math.cos(c)*r,t+Math.sin(c)*r,e+Math.cos(u)*r,t+Math.sin(u)*r)}})}function Uh(i,e,t,n){return Dc(i,r=>{for(let a=0;a<8;a++)for(let l=0;l<72;l++){const c=a/8*n,u=(a+1)/8*n,f=l/72*Math.PI*2,h=(l+1)/72*Math.PI*2;r(e+Math.cos(f)*c,t+Math.sin(f)*c,e+Math.cos(h)*c,t+Math.sin(h)*c,e+Math.cos(f)*u,t+Math.sin(f)*u,e+Math.cos(h)*u,t+Math.sin(h)*u)}})}function Cy(i,e,t,n,r,s,o){const a=Math.hypot(n-e,r-t)||1,l=(n-e)/a,c=(r-t)/a,u=-c,f=l,h=o?Math.min(a*.35,s*4):0,p=a-h,_=S=>S<=p?s/2:s*1.4*(1-(S-p)/Math.max(1e-6,h));return Dc(i,S=>{for(let d=0;d<a;d+=4){const M=Math.min(a,d+4);if(!o&&Math.floor(d/8)%2)continue;const A=d<p&&M>p?s/2:_(d),x=_(M),y=e+l*d,b=t+c*d,R=e+l*M,g=t+c*M;if(S(y-u*A,b-f*A,R-u*x,g-f*x,y+u*A,b+f*A,R+u*x,g+f*x),o&&d<p&&M>p){const E=e+l*p,T=t+c*p,L=s*1.4;S(E-u*L,T-f*L,R-u*x,g-f*x,E+u*L,T+f*L,R+u*x,g+f*x)}}})}const Oh=new Map;function Lr(i,e){const t=`${i}|${e}`;let n=Oh.get(t);return n||(n=new zr({color:i,transparent:!0,opacity:e,depthWrite:!1,side:yn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Oh.set(t,n)),n}const Fh=new Map;function Py(i,e){const t=Hh(i),n=t?null:hd(i),r=`${t??n}|${e}`,s=Fh.get(r);if(s)return s;let o;if(t==="diamond"||t==="point"){const l=document.createElement("canvas"),c=l.getContext("2d");l.width=l.height=64,c.fillStyle=e,c.strokeStyle="rgba(0,0,0,0.8)",c.lineWidth=5,c.beginPath(),t==="diamond"?(c.moveTo(32,6),c.lineTo(58,32),c.lineTo(32,58),c.lineTo(6,32),c.closePath()):c.arc(32,32,14,0,Math.PI*2),c.fill(),c.stroke(),o=l}else{if(!n)return null;const l=lc(n);if(!l.complete||!l.naturalWidth)return null;o=fd(l,e)??l}const a=new jt(o);return a.colorSpace=on,a.needsUpdate=!0,Fh.set(r,a),a}const ul="sqr.map3d.texture",Bh="sqr.map3d.fps",zh="sqr.map3d.flySens",Vo=(i,e)=>{try{return localStorage.getItem(i)??e}catch{return e}},hl=(i,e)=>{try{localStorage.setItem(i,e)}catch{}};function Iy({onHover:i,onLeave:e,onClick:t}){const n=hn.useRef(null),r=hn.useRef(null),s=hn.useRef({onHover:i,onLeave:e,onClick:t});s.current={onHover:i,onLeave:e,onClick:t};const[o,a]=hn.useState(()=>!QM()),[l,c]=hn.useState(!1),[u,f]=hn.useState(()=>Vo(ul,"basemap")),[h,p]=hn.useState(()=>Vo(Bh,"0")==="1"),_=hn.useRef(null),S=hn.useRef(null),m=hn.useRef(h);m.current=h;const[d,M]=hn.useState(()=>Number(Vo(zh,"1.5"))||1.5),A=hn.useRef(d);A.current=d;const x=y=>{a(y);try{localStorage.setItem(zf,y?"0":"1")}catch{}};return hn.useEffect(()=>{const y=n.current,b=new zv({antialias:!0});b.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));const R=b.domElement;R.style.cssText="width:100%;height:100%;display:block;touch-action:none;cursor:grab",y.prepend(R);const g=new Ap;b.toneMapping=uc,b.toneMappingExposure=.85,g.background=new He("#a9c4dc"),g.environmentIntensity=.5,g.add(new Bm("#ffffff",.5));const E=new Fm("#ffffff",1.6);E.position.setFromSphericalCoords(1,su.degToRad(55),su.degToRad(130)),g.add(E),new Hv().load(WS,q=>{q.mapping=Xo,g.background=q,g.environment=q,xe=!0});const T=new Fn(55,1,.5,3e4);T.rotation.order="YXZ";let L=0,I=-Math.PI/4;const U={token:_s(ry(),Go)};g.add(U.token);const P=new Map,z=_s(new Qt(Cs,Cs,.3,20).translate(0,.15,0),Go);g.add(z);let G=[];const $=new Jn;g.add($);const oe=new Map,Z=new ha(1,16,12),ee={first:null,upto:0,deaths:[],blasts:new Map},re={box:_s(new it(1,1,1).translate(0,.5,0),il),round:_s(new Qt(.5,.5,1,32).translate(0,.5,0),il)};g.add(re.box,re.round);const Ae=new Jn;g.add(Ae);const me=new Map,rt=new He(1,1,1),qe=(q,Pe,Ie,Re,Ne=rt,Nt=0)=>{if(!Pe){xe=!0;return}let ut=me.get(q);if(!ut){const Ot=new Vs(oy,new zr({map:Pe,transparent:!0,alphaTest:.1,side:yn,depthWrite:!1,depthTest:!Nt,toneMapped:!1}),ol);Ot.instanceMatrix.setUsage($i),Ot.count=0,Ot.instanceColor=new ji(new Float32Array(ol*3).fill(1),3),Ot.renderOrder=Nt||(q.startsWith("t|")?1:0),Ae.add(Ot),ut={mesh:Ot,hits:[]},me.set(q,ut)}ut.hits.length>=ol||(ut.mesh.setMatrixAt(ut.hits.length,Ie),ut.mesh.setColorAt(ut.hits.length,Ne),ut.hits.push(Re))},Ze={};for(const q of Object.keys(Th))Ze[q]=_s(Ft(Th[q]()),rl),g.add(Ze[q]);const Q=new Map,ie=new Float32Array(rl).fill(1),Ee=new ji(ie,1);Ee.setUsage($i),Ze.hab.geometry.setAttribute("aFade",Ee),Lc(Ze.hab.material,!1);const Ge=new Map,Me=new Jn;g.add(Me);let We=[];const yt=new Map;let Xe=null,he=null,_t=Vo(ul,"basemap");_.current={setTexture(q){if(q===_t)return;_t=q;const Pe=he;Pe&&Hf(Pe.base,q).then(Ie=>{var Ne;if(he!==Pe||_t!==q){Ie.dispose();return}const Re=Pe.mesh.material;(Ne=Re.map)==null||Ne.dispose(),Re.map=Ie,Re.needsUpdate=!0,xe=!0}).catch(Ie=>F(String(Ie)))}};let je=0,bt=0,It=0,Zt=[],Et=[];const vt=new Map,B=new Jn;g.add(B);const Yt=()=>{for(const q of vt.values())q.mesh.geometry.dispose(),B.remove(q.mesh);vt.clear()},dt=64,C=new Float32Array(dt*6),v=new Float32Array(dt*6),H=new At;H.setAttribute("position",new Be(C,3).setUsage($i)),H.setAttribute("color",new Be(v,3).setUsage($i));const X=new Gp(H,new hf({vertexColors:!0,transparent:!0,opacity:.85,toneMapped:!1}));X.frustumCulled=!1,g.add(X);let K=45,le="",ue=null;const J=new Map,te=new Jn;g.add(te);const fe=()=>{for(const q of J.values())q.group.traverse(Pe=>{var Ie;return(Ie=Pe.geometry)==null?void 0:Ie.dispose()}),q.mat.dispose(),q.label.material.dispose(),te.remove(q.group);J.clear()};let Te=[],ne=new Map,W=[];const De=[],ze=()=>{he&&(T.position.set(0,he.size*.4,he.size*.45),L=0,I=-Math.PI/4)};let Ye=null;const F=q=>{r.current&&(r.current.textContent=q)},de=q=>{if(!q||q===Ye)return;Ye=q;const Pe=VS[q];if(!Pe){F(`No SquadCalc 3D data for ${q}`);return}F(`Loading ${q} terrain…`),je=performance.now(),ey(Pe,_t).then(Ie=>{if(Ye!==q)return;he&&g.remove(he.mesh),Te=[],ne=new Map,W=[],Et=[],fe(),Yt(),he=Ie,bt=performance.now()-je,g.add(Ie.mesh),xe=!0,ze(),F("Loading buildings & trees…");const Re=new Jn;Re.position.set(-Pe.corner0[0]-Ie.size/2,Bf,-Pe.corner0[1]-Ie.size/2),Ie.mesh.add(Re);const Ne=Ff+Pe.url;return Promise.all([qS(Ne),$M(Ne)]).then(([Nt,ut])=>{const Ot=ut.vegetation.flatMap(Ut=>Ut.isInstancedMesh?Ey(Ut):[]);Re.add(...Nt,...ut.structures,...Ot),Re.updateMatrixWorld(!0),xe=!0,Te=Ot.map(cy),ne=hy(Te),Et=Ot.map(Ut=>({mesh:Ut,center:Ut.boundingSphere.center.clone().applyMatrix4(Ut.matrixWorld),radius:Ut.boundingSphere.radius,max:wy(Ut.name)})).filter(Ut=>Ut.max<1/0),W=[...Nt,...ut.structures].filter(Ut=>Ut.isMesh).map(yy).filter(Ut=>Ut!==null),It=performance.now()-je,Zt=Ot,F("")})}).catch(Ie=>F(String(Ie)))},j=new Gm,ce=new pe,ve=(q,Pe)=>{var kn,Un,En;if(!he||!Xe)return null;ce.set(q/R.clientWidth*2-1,-(Pe/R.clientHeight)*2+1),j.setFromCamera(ce,T);let Ie=null,Re=1/0;for(const zt of j.intersectObjects(Me.children,!1)){if(zt.object.material.opacity<.3)continue;const wn=zt.object.position.clone().project(T),Vn=Math.hypot(wn.x-ce.x,wn.y-ce.y)-zt.object.renderOrder*1e-6;Vn<Re&&(Re=Vn,Ie=zt.object)}if(Ie)return{d2:0,hit:Ie.userData.hit};const Ne=j.intersectObjects(Ae.children,!1).filter(zt=>zt.instanceId!=null).sort((zt,wn)=>wn.object.renderOrder-zt.object.renderOrder||zt.distance-wn.distance)[0];if(Ne){for(const zt of me.values())if(zt.mesh===Ne.object&&zt.hits[Ne.instanceId])return{d2:0,hit:zt.hits[Ne.instanceId]}}const ut=j.intersectObjects([...Object.values(U),z,...Object.values(re),...Object.values(Ze)],!1).find(zt=>zt.instanceId!=null);if(ut){const zt=(kn=P.get(ut.object))==null?void 0:kn[ut.instanceId];if(zt)return{d2:0,hit:{type:"player",e:zt}};if(ut.object===z)return{d2:0,hit:{type:"player",e:G[ut.instanceId]}};const wn=(Un=Q.get(ut.object))==null?void 0:Un[ut.instanceId];if(wn)return{d2:0,hit:wn};const Vn=(En=yt.get(ut.object))==null?void 0:En[ut.instanceId];if(Vn)return{d2:0,hit:{type:"vehicle",e:Vn}}}const Ot=Eh(he,j.ray);if(!Ot)return null;const[Ut,$t]=ty(he,Ot.x,Ot.z),Gn=2*Math.tan(T.fov*Math.PI/360)*T.position.distanceTo(Ot)/Math.max(1,R.clientHeight);return jf(Xe,Ut,$t,Math.max(300,12*Gn*100))},se=new Set;let Ue=null;const we=()=>document.pointerLockElement===R,Tt=()=>[R.clientWidth/2,R.clientHeight/2],xt=()=>{we()||Promise.resolve(R.requestPointerLock()).catch(()=>{})},bn=q=>{const Pe=we()?A.current/1e3:.003;L-=q.movementX*Pe,I=Math.max(-1.55,Math.min(1.2,I-q.movementY*Pe))},In=q=>{we()||(Ue={x:q.offsetX,y:q.offsetY,moved:0},R.setPointerCapture(q.pointerId),R.style.cursor="grabbing")};let Hn=null,Zs="";const rr=(q,Pe,Ie)=>{const Re=q==null?void 0:q.hit.e,Ne=q?`${q.hit.type}:${(Re==null?void 0:Re.id)??(Re==null?void 0:Re.eosId)??(Re==null?void 0:Re.name)}|${Pe}|${Ie}|${Math.floor(performance.now()/500)}`:"none";if(Ne===Zs)return;Zs=Ne;const Nt=(q==null?void 0:q.hit.type)==="rally"?q.hit.e.id:null;Nt!==ue&&(ue=Nt,xe=!0),s.current.onHover(q,Pe,Ie)},Yr=q=>{if(we()){bn(q);const[Pe,Ie]=Tt();Hn={x:Pe,y:Ie};return}if(Ue){Ue.moved+=Math.abs(q.movementX)+Math.abs(q.movementY),bn(q),Hn=null,rr(null,0,0);return}Hn={x:q.offsetX,y:q.offsetY}},pa=q=>{if(q.button===0)if(we()){const[Pe,Ie]=Tt();s.current.onClick(ve(Pe,Ie))}else Ue&&Ue.moved<5&&s.current.onClick(ve(q.offsetX,q.offsetY));Ue=null,R.style.cursor="grab"},qr=()=>{c(we()),we()||rr(null,0,0)},Zr=()=>{const q=ki.getState();q.followKey&&q.setFollowKey(null),q.followVehicleId&&q.setFollowVehicleId(null)},pi=q=>{if(q.preventDefault(),!he)return;if(le){K=Math.max(6,Math.min(2e3,K*(q.deltaY>0?1.2:1/1.2))),xe=!0;return}we()?ce.set(0,0):ce.set(q.offsetX/R.clientWidth*2-1,-(q.offsetY/R.clientHeight)*2+1),j.setFromCamera(ce,T);const Pe=Eh(he,j.ray),Ie=Pe?T.position.distanceTo(Pe):500,Re=Math.sign(q.deltaY)*-Math.max(2,Ie*.2);Re>0&&Ie-Re<3||T.position.addScaledVector(j.ray.direction,Re)},$r=q=>q.target instanceof HTMLElement&&q.target.closest("input,textarea,[contenteditable]"),Kr=q=>{if(!(q.ctrlKey||q.metaKey||q.altKey||$r(q))){if(q.code==="KeyF"){Zr(),ze();return}if(q.code==="Enter"){xt();return}(bh[q.code]||q.code.startsWith("Shift"))&&se.add(q.code)}},Jr=q=>{se.delete(q.code)},zi=()=>se.clear(),$s=q=>q.preventDefault();R.addEventListener("pointerdown",In),R.addEventListener("dblclick",xt),R.addEventListener("pointermove",Yr),R.addEventListener("pointerup",pa),R.addEventListener("pointerleave",()=>s.current.onLeave()),R.addEventListener("wheel",pi,{passive:!1}),R.addEventListener("contextmenu",$s),window.addEventListener("keydown",Kr),window.addEventListener("keyup",Jr),window.addEventListener("blur",zi),window.addEventListener("map3d-fit",ze),document.addEventListener("pointerlockchange",qr);const Ri=new N,sr=new N,Ks=q=>{if(T.rotation.set(I,L,0),!he)return;const Pe=pn(he,T.position.x,T.position.z),Ie=new Set([...se].map(Re=>bh[Re]));if(Ie.size&&le&&Zr(),Ie.size){const Re=se.has("ShiftLeft")||se.has("ShiftRight")?3:1,Ne=Math.max(15,Math.min(800,T.position.y-Pe))*Re*q;Ri.set(-Math.sin(L),0,-Math.cos(L)),sr.set(Math.cos(L),0,-Math.sin(L)),Ie.has("f")&&T.position.addScaledVector(Ri,Ne),Ie.has("b")&&T.position.addScaledVector(Ri,-Ne),Ie.has("r")&&T.position.addScaledVector(sr,Ne),Ie.has("l")&&T.position.addScaledVector(sr,-Ne),Ie.has("u")&&(T.position.y+=Ne),Ie.has("d")&&(T.position.y-=Ne)}T.position.y=Math.max(T.position.y,pn(he,T.position.x,T.position.z)+2)},ni=new lt,Qr=new zn,Vt=new N,Nn=new N,jr=new N(0,1,0),w=new He,O=(q,Pe,Ie,Re,Ne,Nt,ut,Ot,Ut,$t,Gn)=>{const[kn,Un]=Kn(Ie,Re,Ne);Vt.set(kn,Nt!=null?Nt/100:pn(Ie,kn,Un),Un),Qr.setFromAxisAngle(jr,-((ut??0)*Math.PI)/180);const En=Math.max(1,T.position.distanceTo(Vt)/Ut);return Gn?Nn.set(Gn[0]*En,Gn[1]*En,Gn[2]*En):Nn.setScalar(En),q.setMatrixAt(Pe,ni.compose(Vt,Qr,Nn)),q.setColorAt(Pe,$t??w.set(Wn(Ot))),En},Y=new zn,k=new zn,V=new N,ge=new He("#15171c"),Ce=new He("#8a8f98"),_e=new He("#2b2623"),Le=new He,Fe={current:0};let Ke=0,Je=performance.now(),xe=!0,ct={cam:"",clock:-1,snap:null,team:null,layers:null,ui:""},Bt=0,Rt=performance.now(),St=!1,Jt=0;const ye={};let nn=0;const et=q=>{if(!St)return;const Pe=performance.now();q!=="start"&&(ye[q]=(ye[q]??0)+Pe-nn),nn=Pe},gn=()=>{Ke=requestAnimationFrame(gn),St||_n(performance.now())},_n=q=>{var kn,Un,En,zt,wn,Vn,es,ts,wt,rn,Hi,or,ar;if(q-Je<1e3/KM-1)return;const Pe=Math.min(.1,(q-Je)/1e3);if(Je=q,q-Rt>=500){const ln=Math.round(Bt*1e3/(q-Rt));S.current&&(S.current.textContent=m.current?ln?`${ln} fps`:"idle":""),Bt=0,Rt=q}const Ie=y.clientWidth,Re=y.clientHeight;(R.width!==Math.floor(Ie*b.getPixelRatio())||R.height!==Math.floor(Re*b.getPixelRatio()))&&(b.setSize(Ie,Re,!1),T.aspect=Ie/Math.max(1,Re),T.updateProjectionMatrix());const Ne=ki.getState();de((En=(Un=(kn=Ne.curSnap)==null?void 0:kn.gameState)==null?void 0:Un.layer)==null?void 0:En.mapId),Ks(Pe),Hn&&(rr(ve(Hn.x,Hn.y),Hn.x,Hn.y),Hn=null);const Nt=`${T.position.toArray()}|${L}|${I}|${Ie}x${Re}`,ut=Ne.mode==="replay"&&oo.valid?oo.ms:-1,Ot=`${Ne.followKey}|${Ne.followVehicleId}|${(zt=Ne.selectedInfo)==null?void 0:zt.kind}:${(wn=Ne.selectedInfo)==null?void 0:wn.id}`;if(!xe&&Ne.mode==="replay"&&Nt===ct.cam&&ut===ct.clock&&Ne.curSnap===ct.snap&&Ne.teamView===ct.team&&Ne.layers===ct.layers&&Ot===ct.ui)return;xe=!1,ct={cam:Nt,clock:ut,snap:Ne.curSnap,team:Ne.teamView,layers:Ne.layers,ui:Ot};const Ut=Ne.curSnap?Jf(Ne,Fe)??Ne.curSnap:null,$t=Ut?Qf(Ut,Ne.teamView):null;if(he&&$t){et("start");const ln=Ne.layers,cn=ln.players?$t.players??[]:[],xn=ln.vehicles?$t.vehicles??[]:[],Js=ln.deployables?$t.deployables??[]:[],Bc=ln.rallies?$t.rallyPoints??[]:[],zc=ln.markers?$t.markers??[]:[];Xe={...$t,projectiles:[],players:cn,vehicles:xn,deployables:Js,rallyPoints:Bc,markers:zc};const Qs=Ne.followKey,js=Ne.followVehicleId,ma=Qs?"p"+Qs:js?"v"+js:"";ma&&ma!==le&&I>-.25&&(I=-.5),le=ma;const Gi=Qs?($t.players??[]).find(D=>Ps(D)===Qs):void 0,eo=js?($t.vehicles??[]).find(D=>D.id===js):void 0,ns=((Vn=Gi==null?void 0:Gi.soldier)==null?void 0:Vn.position)??(eo==null?void 0:eo.position);if(ns){const[D,ae]=Kn(he,ns.x,ns.y),Oe=(ns.z!=null?ns.z/100:pn(he,D,ae))+(eo?2.5:1.2);T.position.set(D+Math.sin(L)*Math.cos(I)*K,Oe-Math.sin(I)*K,ae+Math.cos(L)*Math.cos(I)*K),T.position.y=Math.max(T.position.y,pn(he,T.position.x,T.position.z)+2),T.rotation.set(I,L,0)}const to=Gi&&Gi.squadId!=null?{team:Gi.teamId,squad:Gi.squadId}:null,qf=D=>!to||D.teamId===to.team&&D.squadId===to.squad,Hc=new He(.42,.42,.42),Gc=Ne.mode==="replay",Zf=Gc?Ne.replay.frames:Ne.snapBuffer.map(D=>D.snap),no=Gc&&oo.valid?oo.ms:kf($t);gy(ee,Zf);const kc=D=>{const ae=ee.blasts.get(D.id);return ae?no>=ae.t:(D.health??1)<=0};We=[],G=[];for(const D of Object.values(U))P.set(D,[]);for(const D of me.values())D.hits.length=0;for(const D of cn){const ae=D.soldier;if(!(ae!=null&&ae.position)||!Vf(ae)||ae.attached||ed(ae))continue;if(ac(ae)){if(G.length>=Go)continue;const ft=O(z,G.length,he,ae.position.x,ae.position.y,ae.position.z!=null?ae.position.z-70:null,ae.yaw,D.teamId,120,Le.set(Wn(D.teamId)).lerp(ge,.7));Vt.y+=.32*ft,qe("x",_y(),ni.compose(Vt,sl,Nn.set(1.1*ft,1.1*ft,1)),{type:"player",e:D}),G.push(D);continue}const Oe=U.token,st=P.get(Oe);if(st.length>=Go)continue;const Ve=qf(D),tt=Wn(D.teamId),ht=O(Oe,st.length,he,ae.position.x,ae.position.y,ae.position.z,ae.yaw,D.teamId,120,Ve?void 0:Le.set(tt).lerp(ge,.6)),$e=td(D)??iy;Vt.y+=(sc+Qo+.8)*ht;const Dt={type:"player",e:D};if(qe(`r|${$e}|${tt}`,Ch($e,tt,!1,null),ni.compose(Vt,T.quaternion,Nn.setScalar((to&&Ve?1.8:1.5)*ht)),Dt,Ve?rt:Hc),D.squadId!=null&&(ln.slNumbers&&nd(D)||ln.squadNumbers)){const ft=ll(String(D.squadId),tt),Mt=ft.image;Vt.y-=1.25*ht,qe(`n|${D.squadId}|${tt}`,ft,ni.compose(Vt,T.quaternion,Nn.set(.6*ht*Mt.width/Mt.height,.6*ht,1)),Dt,Ve?rt:Hc)}st.push(D),We.push(D)}for(const[D,ae]of P)D.count=ae.length;z.count=G.length;for(const D of Object.values(re))yt.set(D,[]);const Vc=new Map;if(ln.squadNumbers)for(const D of $t.players??[])D.eosId&&D.squadId!=null&&Vc.set(D.eosId,D.squadId);for(const D of xn){if(!D.position)continue;const ae=kv(D.classShort),Oe=ae==="heli"||ae==="heliLight",st=kc(D),Ve=Oe?re.round:re.box,tt=yt.get(Ve);if(tt.length>=il)continue;const ht=sy[ae],$e=O(Ve,tt.length,he,D.position.x,D.position.y,D.position.z,D.yaw,D.team,300,st?_e:void 0,ht);tt.push(D);const Dt=id(D);if(Dt){Vt.y+=ht[1]*$e+.05;const Mt=ht[0]*(Oe?.95:1.15)*$e;qe(`v|${Dt}`,Ah(Dt),ni.compose(Vt,Y.multiplyQuaternions(Qr,sl),Nn.set(Mt,Mt,1)),{type:"vehicle",e:D});const vn=rd(D);if(vn){const Ht=(D.yaw??0)+(((ts=(es=D.turrets)==null?void 0:es[0])==null?void 0:ts.yaw)??0);k.setFromAxisAngle(jr,-(Ht*Math.PI)/180),Vt.y+=.05*$e,qe(`t|${vn}`,Ah(vn),ni.compose(Vt,Y.multiplyQuaternions(k,sl),Nn.set(Mt,Mt,1)),{type:"vehicle",e:D})}}const ft=ln.squadNumbers?sd(D,Vc):null;if(ft!=null){const Mt=Wn(D.team),vn=ll(String(ft),Mt),Ht=vn.image,An=2.4*$e;Vt.y+=2.5*$e,qe(`n|${ft}|${Mt}`,vn,ni.compose(Vt,T.quaternion,Nn.set(An*Ht.width/Ht.height,An,1)),{type:"vehicle",e:D})}}et("players+vehicles"),De.length=0;const Wc=(D,ae)=>{const[Oe,st]=Kn(he,D.x,D.y);De.push(Oe,(D.z!=null?D.z/100:pn(he,Oe,st))+ae,st)};for(const D of[...We,...G])Wc(D.soldier.position,0);for(const D of yt.values())for(const ae of D)Wc(ae.position,1);const Xc=new Set,io=2*Math.tan(T.fov*Math.PI/360)/Math.max(1,R.clientHeight),ro=(D,ae,Oe,st,Ve,tt,ht,$e,Dt={})=>{if(!ae&&!("texture"in Dt)||!Oe)return;const ft="texture"in Dt?Dt.texture??null:Ch(ae,st,Ve,tt);if(!ft){xe=!0;return}const[Mt,vn]=Kn(he,Oe.x,Oe.y);if(Dt.opacity==null){const rs=ft.image;Vt.set(Mt,(Oe.z!=null?Oe.z/100:pn(he,Mt,vn))+ko,vn);const xa=ht*io*T.position.distanceTo(Vt),va=xa*rs.height/rs.width;V.set(0,1,0).applyQuaternion(T.quaternion),Vt.addScaledVector(V,-(va-Math.min(va,xa))/2),qe(`b|${ft.uuid}`,ft,ni.compose(Vt,T.quaternion,Nn.set(xa,va,1)),$e,rt,10+ht),$e.type!=="marker"&&De.push(Mt,Vt.y-ko+.3,vn);return}let Ht=Ge.get(D);if(Ht||(Ht=new ka(new Ko({sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1})),Ge.set(D,Ht),Me.add(Ht)),Ht.material.map!==ft){Ht.material.map=ft,Ht.material.needsUpdate=!0;const rs=ft.image;Ht.center.set(.5,1-Math.min(1,rs.width/2/rs.height))}const An=ft.image;Ht.scale.set(ht*io,ht*io*An.height/An.width,1);const[ga,_a]=Kn(he,Oe.x,Oe.y);Ht.position.set(ga,(Oe.z!=null?Oe.z/100:pn(he,ga,_a))+ko,_a),Ht.userData.hit=$e,Ht.material.opacity=Dt.opacity??1,Ht.renderOrder=10+ht,Xc.add(D),De.push(ga,Ht.position.y-ko+.3,_a)};for(const D of Object.values(Ze))Q.set(D,[]);const Yc=(D,ae,Oe,st,Ve,tt)=>{if(!ae)return;const ht=Ze[D],$e=Q.get(ht);$e.length>=rl||(O(ht,$e.length,he,ae.x,ae.y,ae.z,Oe,st,220,tt),$e.push(Ve))},qc=new Set,lr=(D,ae,Oe,st)=>{let Ve=vt.get(D);Ve&&Ve.sig!==ae&&(Ve.mesh.geometry.dispose(),B.remove(Ve.mesh),vt.delete(D),Ve=void 0),Ve||(Ve={mesh:new mn(Oe(),st),sig:ae},Ve.mesh.renderOrder=2,B.add(Ve.mesh),vt.set(D,Ve)),Ve.mesh.material=st,qc.add(D)},cr=D=>Kn(he,D.x,D.y),so=D=>`${Math.round(D.x)},${Math.round(D.y)}`;for(const D of Js){if(D.isFob&&D.position){const[Ve,tt]=cr(D.position),ht=Wn(D.team),$e=so(D.position);lr(`fob-fill:${D.id}`,$e,()=>Uh(he,Ve,tt,150),Lr(ht,.1)),lr(`fob-ring:${D.id}`,$e,()=>cl(he,Ve,tt,148.5,151.5),Lr(ht,.55)),lr(`fob-inf:${D.id}`,$e,()=>cl(he,Ve,tt,398,402,!0),Lr(ht,.8))}const ae=!D.isFob&&(D.classShort??"").toUpperCase().includes("HAB"),Oe={type:"deployable",e:D},st=Vv(D);ro("d"+D.id,od(D),D.position,Wn(D.team),!!(D.isFob||ae),null,D.isFob?30:ae?28:22,Oe),st!=="helipad"&&Yc(st,D.position,D.yaw,D.team,Oe)}const $f=((wt=Ne.selectedInfo)==null?void 0:wt.kind)==="rally"?Ne.selectedInfo.id:null;for(const D of Bc){const ae={type:"rally",e:D};if(D.position&&(D.sieged||D.id===ue||D.id===$f)){const[Oe,st]=cr(D.position),Ve=so(D.position),tt=D.sieged?"#ff3b3b":Wn(D.squadTeamId??D.team);lr(`rally-fill:${D.id}`,Ve,()=>Uh(he,Oe,st,30),Lr(tt,.14)),lr(`rally-ring:${D.id}`,Ve,()=>cl(he,Oe,st,29.6,30.4,!0),Lr(tt,.9))}ro("r"+D.id,dy,D.position,D.spawningEnabled?Wn(D.squadTeamId??D.team):"#5a5a5a",!1,D.squadId!=null?String(D.squadId):"?",26,ae),Yc("rally",D.position,null,D.squadTeamId??D.team,ae,D.spawningEnabled?void 0:Ce)}et("deployables+rallies");let is=0;for(const D of zc){if(!D.position)continue;const ae=Wn(D.team),Oe=Hh(D),st={type:"marker",e:D},Ve=Oe==="arrow"||Oe==="frontline"?ad(D):null;if(Ve){const ht=/enemydirector/i.test(D.type??"")?Wn(D.team===1?2:D.team===2?1:0):ae,[$e,Dt]=cr(D.position),[ft,Mt]=cr(Ve);lr(`mk:${D.id}`,`${so(D.position)}>${so(Ve)}|${Oe}`,()=>Cy(he,$e,Dt,ft,Mt,Oe==="arrow"?4:3,Oe==="arrow"),Lr(ht,.85));continue}ro("m"+D.id,null,D.position,ae,!1,null,24,st,{texture:Py(D,ae)});const tt=is<dt?ld(D,cn):null;if(tt){const ht=tt.soldier.position,[$e,Dt]=cr(ht),[ft,Mt]=cr(D.position),vn=ht.z!=null?ht.z/100+1:pn(he,$e,Dt)+1,Ht=Yf(he,ft,Mt)+1;C.set([$e,vn,Dt,ft,Ht,Mt],is*6);const An=Le.set(ae);v.set([An.r,An.g,An.b,An.r,An.g,An.b],is*6),is++}}H.setDrawRange(0,is*2),H.attributes.position.needsUpdate=!0,H.attributes.color.needsUpdate=!0;for(const[D,ae]of vt)qc.has(D)||(ae.mesh.geometry.dispose(),B.remove(ae.mesh),vt.delete(D));for(const D of ln.players?ee.deaths:[]){const ae=no-D.t;ae<0||ae>Ph||ro(`g${Ps(D.player)}@${D.t}`,my,D,"#4a505a",!1,null,18,{type:"player",e:D.player},{opacity:1-ae/Ph})}et("markers+graves");const Zc=new Set,$c=(D,ae)=>{let Oe=oe.get(D);return Oe||(Oe=ae(),oe.set(D,Oe),$.add(Oe)),Zc.add(D),Oe};for(const[D,ae]of ln.vehicles?[...ee.blasts]:[]){const Oe=no-ae.t;if(Oe<0||Oe>Lh)continue;const st=Oe/Lh,[Ve,tt]=Kn(he,ae.x,ae.y),ht=ae.z!=null?ae.z/100:pn(he,Ve,tt);for(const[$e,Dt,ft]of[[0,"#ff6a10",7],[1,"#fff1b0",3.5]]){const Mt=$c("b"+$e+D,()=>new mn(Z,new zr({color:Dt,transparent:!0,depthWrite:!1,blending:$e?fl:Or})));Mt.position.set(Ve,ht+1.5+st*4,tt),Mt.scale.setScalar(1+ft*Math.pow(st,.3)),Mt.material.opacity=Math.pow(1-st,$e?2:1.3)*.95}}const Kf=no/1e3;for(const D of xn){if(!kc(D)||!D.position)continue;const[ae,Oe]=Kn(he,D.position.x,D.position.y),st=D.position.z!=null?D.position.z/100:pn(he,ae,Oe);for(let Ve=0;Ve<6;Ve++){const tt=(Kf*2+Ve*3)%18,ht=$c(`s${Ve}${D.id}`,()=>new ka(new Ko({map:xy(),transparent:!0,depthWrite:!1})));ht.position.set(ae+Math.sin(tt*.4+Ve)*.8+tt*.25,st+2+tt,Oe),ht.scale.setScalar(3+tt*.45),ht.material.opacity=.7*(1-tt/18)}}for(const[D,ae]of oe)Zc.has(D)||($.remove(ae),ae.material.dispose(),oe.delete(D));for(const[D,ae]of Ge)Xc.has(D)||(Me.remove(ae),ae.material.dispose(),Ge.delete(D));et("fx");for(const D of Et)D.mesh.visible=T.position.distanceTo(D.center)-D.radius<D.max;const Kc=new Set,Jc=(D,ae,Oe,st,Ve,tt)=>{const ht=`${Math.round(ae.x)},${Math.round(ae.y)}|${JSON.stringify(Oe)}`;let $e=J.get(D);if($e&&$e.sig!==ht&&($e.group.traverse(Dt=>{var ft;return(ft=Dt.geometry)==null?void 0:ft.dispose()}),te.remove($e.group),J.delete(D),$e=void 0),!$e){const Dt=new zr({vertexColors:!0,transparent:!0,side:yn,depthWrite:!1,toneMapped:!1}),ft=new Jn;for(const An of Oe)ft.add(new mn(Ty(he,Ay(ae,An)),Dt));const Mt=new ka(new Ko({sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1}));Mt.center.set(.5,0),Mt.renderOrder=5;const[vn,Ht]=Kn(he,ae.x,ae.y);Mt.position.set(vn,pn(he,vn,Ht)+Xf+3,Ht),ft.add(Mt),te.add(ft),$e={group:ft,label:Mt,mat:Dt,sig:ht},J.set(D,$e)}if($e.mat.color.set(st),$e.mat.opacity=Ve,tt){const Dt=ll(tt,st);$e.label.material.map!==Dt&&($e.label.material.map=Dt,$e.label.material.needsUpdate=!0);const ft=Dt.image,Mt=22*io;$e.label.scale.set(Mt*ft.width/ft.height,Mt,1)}$e.label.visible=!!tt,Kc.add(D)},Qc=cd($t.captureZones??[]);for(const D of Qc){const ae=D.staticPosition??D.position;if(!ae)continue;const Oe=(D.capturingTeam??0)>0&&D.capturingTeam!==D.owningTeam,st=Wn(Oe?D.capturingTeam:D.owningTeam),Ve=D.capturePercent!=null&&D.capturePercent>0&&D.capturePercent<1?` ${Math.round(D.capturePercent*100)}%`:"";Jc("z"+D.id,ae,(rn=D.geometry)!=null&&rn.length?D.geometry:[{type:"sphere",dx:0,dy:0,radius:7500}],st,D.isLocked?.35:Oe?1:.75,ud(D)+Ve)}if(!Qc.length)for(const D of((or=(Hi=$t.gameState)==null?void 0:Hi.lane)==null?void 0:or.staticObjectives)??[])!D.position||!((ar=D.geometry)!=null&&ar.length)||Jc("o"+(D.name??""),D.position,D.geometry,"#c9d3e0",.6,D.staticName??D.name??"");for(const[D,ae]of J)Kc.has(D)||(ae.group.traverse(Oe=>{var st;return(st=Oe.geometry)==null?void 0:st.dispose()}),ae.mat.dispose(),ae.label.material.dispose(),te.remove(ae.group),J.delete(D));et("cull+caps"),fy(Te,ne,De),et("treeFade");for(const D of W)by(D,De);et("buildingFade"),Q.get(Ze.hab).forEach((D,ae)=>{const Oe=D.e.position,st=[...We,...G].some(Ve=>{const tt=Ve.soldier.position;return Math.hypot(tt.x-Oe.x,tt.y-Oe.y)<330&&(tt.z==null||Oe.z==null||Math.abs(tt.z-Oe.z)<400)});ie[ae]=st?Wf:1}),Ee.needsUpdate=!0;for(const D of Object.values(Ze))D.count=Q.get(D).length;for(const D of me.values())D.mesh.count=D.hits.length,D.mesh.visible=D.hits.length>0,D.hits.length&&D.mesh.computeBoundingSphere(),D.mesh.instanceMatrix.needsUpdate=!0,D.mesh.instanceColor.needsUpdate=!0;for(const D of[...Object.values(U),z,...Object.values(re),...Object.values(Ze)])yt.has(D)&&(D.count=yt.get(D).length),D.instanceMatrix.needsUpdate=!0,D.instanceColor.needsUpdate=!0}et("rest");const Gn=performance.now();b.render(g,T),Jt=performance.now()-Gn,Bt++};Ke=requestAnimationFrame(gn);const ii=async()=>{var es,ts;const q=wt=>new Promise(rn=>setTimeout(rn,wt)),Pe=()=>new Promise(wt=>requestAnimationFrame(wt));for(;ki.getState().replay.frames.length<=nl+120||!It||!he;)await q(250);const Ie=ki.getState();Ie.stepReplayFrame(nl-Ie.replay.currentIdx),await q(500),St=!0;const Re=b.getContext(),Ne=async(wt,rn=90)=>{const Hi=[],or=[],ar=[];for(const cn of Object.keys(ye))delete ye[cn];for(let cn=0;cn<10+rn;cn++){await Pe(),xe=!0,Je=0;const xn=performance.now();_n(xn);const Js=performance.now();Re.finish(),cn>=10&&(Hi.push(performance.now()-xn),or.push(Js-xn),ar.push(Jt))}xe=!0,Je=0,_n(performance.now()),Ot[wt]=R.toDataURL("image/jpeg",.85),Hi.sort((cn,xn)=>cn-xn),or.sort((cn,xn)=>cn-xn),ar.sort((cn,xn)=>cn-xn);const ln=b.info.render;return{name:wt,medianMs:+Hi[rn>>1].toFixed(2),p95Ms:+Hi[Math.floor(rn*.95)].toFixed(2),cpuMs:+or[rn>>1].toFixed(2),renderMs:+ar[rn>>1].toFixed(2),sections:Object.fromEntries(Object.entries(ye).map(([cn,xn])=>[cn,+(xn/(10+rn)).toFixed(2)])),drawCalls:ln.calls,triangles:ln.triangles}},Nt=he,ut=[],Ot={};ze(),ut.push(await Ne("overview"));const Ut=We.map(wt=>Kn(Nt,wt.soldier.position.x,wt.soldier.position.y)),$t=Ut.reduce((wt,rn)=>wt+rn[0],0)/Math.max(1,Ut.length),Gn=Ut.reduce((wt,rn)=>wt+rn[1],0)/Math.max(1,Ut.length),kn=()=>{T.position.set($t,pn(Nt,$t,Gn)+60,Gn+60),L=0,I=-Math.PI/4};kn(),ut.push(await Ne("units-60m"));const Un=Zt.reduce((wt,rn)=>!wt||rn.count>wt.count?rn:wt,null);if(Un){const wt=Un.boundingSphere.center.clone().applyMatrix4(Un.matrixWorld);T.position.set(wt.x,pn(Nt,wt.x,wt.z)+4,wt.z),L=0,I=-.1,ut.push(await Ne("forest-ground"))}kn(),window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",code:"Space"})),ut.push(await Ne("playing-1x",120)),window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",code:"Space"}));const En=We.find(wt=>wt.squadId!=null);if(En){ki.getState().setFollowKey(Ps(En));for(let wt=0;wt<3;wt++)await Pe(),xe=!0,Je=0,_n(performance.now());Ot.follow=R.toDataURL("image/jpeg",.85),ki.getState().setFollowKey(null)}St=!1;const zt=Re.getExtension("WEBGL_debug_renderer_info"),wn=performance.memory,Vn={recording:Ie.replay.id,frame:nl,map:Ci(),gpu:zt?Re.getParameter(zt.UNMASKED_RENDERER_WEBGL):"unknown",viewport:`${R.width}x${R.height}`,loadMs:{terrain:Math.round(bt),propsAndTrees:Math.round(It)},scene:{geometries:b.info.memory.geometries,textures:b.info.memory.textures,programs:((es=b.info.programs)==null?void 0:es.length)??0,treeTiles:Zt.length,badgeSprites:Ge.size,groundOverlays:vt.size,iconLayers:me.size,markers:((ts=Xe==null?void 0:Xe.markers)==null?void 0:ts.length)??0,jsHeapMB:wn?Math.round(wn.usedJSHeapSize/1048576):null},shots:ut,images:Ot};Object.assign(window,{__benchResult:Vn}),console.log("[bench3d]",JSON.stringify(Vn))},Ci=()=>{var q,Pe,Ie;return((Ie=(Pe=(q=ki.getState().curSnap)==null?void 0:q.gameState)==null?void 0:Pe.layer)==null?void 0:Ie.mapId)??null};return JM&&ii(),()=>{cancelAnimationFrame(Ke),window.removeEventListener("keydown",Kr),window.removeEventListener("keyup",Jr),window.removeEventListener("blur",zi),window.removeEventListener("map3d-fit",ze),document.removeEventListener("pointerlockchange",qr),we()&&document.exitPointerLock(),b.dispose(),R.remove()}},[]),hn.useEffect(()=>{var y;(y=_.current)==null||y.setTexture(u),hl(ul,u)},[u]),hn.useEffect(()=>{hl(Bh,h?"1":"0"),!h&&S.current&&(S.current.textContent="")},[h]),hn.useEffect(()=>hl(zh,String(d)),[d]),be.jsxs("div",{ref:n,style:{position:"absolute",inset:0},children:[be.jsx("div",{className:"m3d-overlay",children:be.jsx("div",{ref:r,className:"m3d-chip m3d-status"})}),be.jsx("div",{className:"m3d-dock",children:be.jsxs("div",{className:"m3d-help"+(o?"":" m3d-collapsed"),role:"note","aria-label":"3D camera controls",children:[be.jsxs("header",{onClick:()=>x(!o),title:o?"Hide the controls":"Show the controls",children:[be.jsx("span",{children:l?"Fly mode":"3D controls"}),be.jsx("span",{ref:S,className:"m3d-fps","aria-live":"off"}),be.jsx("svg",{className:"m3d-caret"+(o?" open":""),viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",children:be.jsx("path",{d:"M7 10l5 5 5-5",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),o&&be.jsxs(be.Fragment,{children:[l?be.jsxs(be.Fragment,{children:[be.jsx(oi,{keys:be.jsx(vs,{}),label:"look around"}),be.jsx(oi,{keys:be.jsx(vs,{button:"left"}),label:"select at crosshair"}),be.jsx(oi,{keys:be.jsx("kbd",{children:"Esc"}),label:"leave fly mode"})]}):be.jsxs(be.Fragment,{children:[be.jsx(oi,{keys:be.jsxs(be.Fragment,{children:[be.jsx(vs,{button:"left"}),be.jsx("em",{children:"drag"})]}),label:"look around"}),be.jsx(oi,{keys:be.jsxs(be.Fragment,{children:[be.jsx(vs,{button:"left"}),be.jsx("em",{children:"×2"}),be.jsx("em",{children:"or"}),be.jsx("kbd",{children:"Enter"})]}),label:"fly mode"})]}),be.jsx(oi,{keys:be.jsxs(be.Fragment,{children:[be.jsx("kbd",{children:"W"}),be.jsx("kbd",{children:"A"}),be.jsx("kbd",{children:"S"}),be.jsx("kbd",{children:"D"})]}),label:"move"}),be.jsx(oi,{keys:be.jsxs(be.Fragment,{children:[be.jsx("kbd",{children:"C"}),be.jsx("kbd",{children:"X"})]}),label:"up / down"}),be.jsx(oi,{keys:be.jsx("kbd",{children:"Shift"}),label:"faster"}),be.jsx(oi,{keys:be.jsx(vs,{button:"wheel"}),label:l?"zoom to crosshair":"zoom to cursor"}),be.jsx(oi,{keys:be.jsx("kbd",{children:"F"}),label:"overview"}),be.jsxs("div",{className:"m3d-settings",children:[be.jsxs("label",{children:[be.jsx("span",{children:"Map"}),be.jsx("select",{value:u,onChange:y=>f(y.target.value),children:jM.map(([y,b])=>be.jsx("option",{value:y,children:b},y))})]}),be.jsxs("label",{title:"Mouse sensitivity in fly mode",children:[be.jsx("span",{children:"Fly look"}),be.jsx("input",{type:"range",min:.3,max:4,step:.1,value:d,onChange:y=>M(Number(y.target.value))})]}),be.jsxs("label",{children:[be.jsx("input",{type:"checkbox",checked:h,onChange:y=>p(y.target.checked)}),be.jsx("span",{children:"FPS counter"})]})]})]})]})}),l&&be.jsx("div",{className:"m3d-crosshair","aria-hidden":"true"})]})}export{Iy as Map3D,jM as TEXTURES};
