import{r as Rn,m as Ce,w as Fi,q as eo,f as qf,u as Zf,h as $f,j as Kf,k as ic,t as Vn,s as Jf,l as Qf,y as jf,A as ed,z as td,e as nd,o as Oh,b as id,a as rd,C as sd,c as od,i as rc,n as ad,d as ld,g as cd}from"./index-CNvqcSvf.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sc="186",ud=0,$c=1,hd=2,Fo=1,fd=2,ds=3,Xi=0,An=1,vn=2,Mi=0,Nr=1,ll=2,Kc=3,Jc=4,dd=5,Pr=100,pd=101,md=102,gd=103,_d=104,xd=200,vd=201,Sd=202,Md=203,Fh=204,Bh=205,yd=206,bd=207,Ed=208,wd=209,Ad=210,Td=211,Rd=212,Cd=213,Pd=214,cl=0,ul=1,hl=2,Es=3,fl=4,dl=5,pl=6,ml=7,zh=0,Ld=1,Dd=2,ai=0,Hh=1,Gh=2,kh=3,Vh=4,Wh=5,Xh=6,oc=7,Yh=300,Yi=301,Br=302,Bo=303,ga=304,ta=306,gl=1e3,Qn=1001,_l=1002,un=1003,Id=1004,to=1005,Kt=1006,_a=1007,Ni=1008,Ln=1009,qh=1010,Zh=1011,ws=1012,ac=1013,ci=1014,Dn=1015,In=1016,lc=1017,cc=1018,As=1020,$h=35902,Kh=35899,Jh=1021,Qh=1022,jn=1023,bi=1026,Vi=1027,uc=1028,hc=1029,qi=1030,fc=1031,dc=1033,zo=33776,Ho=33777,Go=33778,ko=33779,xl=35840,vl=35841,Sl=35842,Ml=35843,yl=36196,bl=37492,El=37496,wl=37488,Al=37489,Yo=37490,Tl=37491,Rl=37808,Cl=37809,Pl=37810,Ll=37811,Dl=37812,Il=37813,Nl=37814,Ul=37815,Ol=37816,Fl=37817,Bl=37818,zl=37819,Hl=37820,Gl=37821,kl=36492,Vl=36494,Wl=36495,Xl=36283,Yl=36284,qo=36285,ql=36286,Nd=3200,Zl=0,Ud=1,Ii="",on="srgb",Ts="srgb-linear",Zo="linear",Rt="srgb",xa=7680,Od=519,Fd=512,Bd=513,zd=514,pc=515,Hd=516,Gd=517,mc=518,kd=519,jh=35044,Wi=35048,Qc="300 es",oi=2e3,Rs=2001;function Vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){const i=Cs("canvas");return i.style.display="block",i}const jc={};function $o(...i){const e="THREE."+i.shift();console.log(e,...i)}function ef(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=ef(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function gt(...i){i=ef(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ur(...i){const e=i.join(" ");e in jc||(jc[e]=!0,Ve(...i))}function Xd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Yd={[cl]:ul,[hl]:pl,[fl]:ml,[Es]:dl,[ul]:cl,[pl]:hl,[ml]:fl,[dl]:Es};class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const gs=Math.PI/180,Ps=180/Math.PI;function li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function gc(i,e){return(i%e+e)%e}function qd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Zd(i,e,t){return i!==e?(t-i)/(e-i):0}function _s(i,e,t){return(1-t)*i+t*e}function $d(i,e,t,n){return _s(i,e,1-Math.exp(-t*n))}function Kd(i,e=1){return e-Math.abs(gc(i,e*2)-e)}function Jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ep(i,e){return i+Math.random()*(e-i)}function tp(i){return i*(.5-Math.random())}function np(i){i!==void 0&&(eu=i);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(i){return i*gs}function rp(i){return i*Ps}function sp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function op(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ap(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lp(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*u,a*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tu={DEG2RAD:gs,RAD2DEG:Ps,generateUUID:li,clamp:at,euclideanModulo:gc,mapLinear:qd,inverseLerp:Zd,lerp:_s,damp:$d,pingpong:Kd,smoothstep:Jd,smootherstep:Qd,randInt:jd,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:rp,isPowerOfTwo:sp,ceilPowerOfTwo:op,floorPowerOfTwo:ap,setQuaternionFromProperEuler:lp,normalize:Ct,denormalize:Jn},Cc=class Cc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cc.prototype.isVector2=!0;let _e=Cc;class zn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[o+0],p=s[o+1],_=s[o+2],S=s[o+3];if(f!==S||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+f*S;m<0&&(h=-h,p=-p,_=-_,S=-S,m=-m);let d=1-a;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w,l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+S*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+S*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pc=class Pc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pc.prototype.isVector3=!0;let N=Pc;const va=new N,nu=new zn,Lc=class Lc{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],S=r[0],m=r[3],d=r[6],M=r[1],w=r[4],x=r[7],y=r[2],A=r[5],T=r[8];return s[0]=o*S+a*M+l*y,s[3]=o*m+a*w+l*A,s[6]=o*d+a*x+l*T,s[1]=c*S+u*M+f*y,s[4]=c*m+u*w+f*A,s[7]=c*d+u*x+f*T,s[2]=h*S+p*M+_*y,s[5]=h*m+p*w+_*A,s[8]=h*d+p*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+n*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-u*n)*S,e[2]=(a*n-r*o)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lc.prototype.isMatrix3=!0;let Ze=Lc;const Sa=new Ze,iu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){const i={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Rt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(r.r=Or(r.r),r.g=Or(r.g),r.b=Or(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?Zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ts]:{primaries:e,whitePoint:n,transfer:Zo,toXYZ:iu,fromXYZ:ru,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:iu,fromXYZ:ru,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const _t=cp();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let lr;class up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lr===void 0&&(lr=Cs("canvas")),lr.width=e.width,lr.height=e.height;const r=lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=lr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class _c{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ma(r[o].image)):s.push(Ma(r[o]))}else s=Ma(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?up.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let fp=0;const ya=new N;class en extends Ki{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=Qn,r=Qn,s=Kt,o=Ni,a=jn,l=Ln,c=en.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=li(),this.name="",this.source=new _c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gl:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gl:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Yh;en.DEFAULT_ANISOTROPY=1;const Dc=class Dc{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(p+1)/2,y=(d+1)/2,A=(u+h)/4,T=(f+S)/4,g=(_+m)/4;return w>x&&w>y?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=A/n,s=T/n):x>y?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=g/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=T/s,r=g/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dc.prototype.isVector4=!0;let Wt=Dc;class dp extends Ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new en(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _c(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends dp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tf extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ea=class ea{constructor(e,t,n,r,s,o,a,l,c,u,f,h,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,p,_,S,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,p,_,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ea().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,S=c*f;t[0]=h+S*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,S=c*f;t[0]=h-S*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,S=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,S=a*c;t[0]=l*u,t[4]=S-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,gp)}lookAt(e,t,n){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ai.crossVectors(n,Cn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ai.crossVectors(n,Cn)),Ai.normalize(),no.crossVectors(Cn,Ai),r[0]=Ai.x,r[4]=no.x,r[8]=Cn.x,r[1]=Ai.y,r[5]=no.y,r[9]=Cn.y,r[2]=Ai.z,r[6]=no.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],S=n[6],m=n[10],d=n[14],M=n[3],w=n[7],x=n[11],y=n[15],A=r[0],T=r[4],g=r[8],b=r[12],R=r[1],D=r[5],I=r[9],U=r[13],P=r[2],z=r[6],G=r[10],Z=r[14],se=r[3],q=r[7],Q=r[11],re=r[15];return s[0]=o*A+a*R+l*P+c*se,s[4]=o*T+a*D+l*z+c*q,s[8]=o*g+a*I+l*G+c*Q,s[12]=o*b+a*U+l*Z+c*re,s[1]=u*A+f*R+h*P+p*se,s[5]=u*T+f*D+h*z+p*q,s[9]=u*g+f*I+h*G+p*Q,s[13]=u*b+f*U+h*Z+p*re,s[2]=_*A+S*R+m*P+d*se,s[6]=_*T+S*D+m*z+d*q,s[10]=_*g+S*I+m*G+d*Q,s[14]=_*b+S*U+m*Z+d*re,s[3]=M*A+w*R+x*P+y*se,s[7]=M*T+w*D+x*z+y*q,s[11]=M*g+w*I+x*G+y*Q,s[15]=M*b+w*U+x*Z+y*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],S=e[7],m=e[11],d=e[15],M=l*p-c*h,w=a*p-c*f,x=a*h-l*f,y=o*p-c*u,A=o*h-l*u,T=o*f-a*u;return t*(S*M-m*w+d*x)-n*(_*M-m*y+d*A)+r*(_*w-S*y+d*T)-s*(_*x-S*A+m*T)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],S=e[13],m=e[14],d=e[15],M=t*a-n*o,w=t*l-r*o,x=t*c-s*o,y=n*l-r*a,A=n*c-s*a,T=r*c-s*l,g=u*S-f*_,b=u*m-h*_,R=u*d-p*_,D=f*m-h*S,I=f*d-p*S,U=h*d-p*m,P=M*U-w*I+x*D+y*R-A*b+T*g;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=(a*U-l*I+c*D)*z,e[1]=(r*I-n*U-s*D)*z,e[2]=(S*T-m*A+d*y)*z,e[3]=(h*A-f*T-p*y)*z,e[4]=(l*R-o*U-c*b)*z,e[5]=(t*U-r*R+s*b)*z,e[6]=(m*x-_*T-d*w)*z,e[7]=(u*T-h*x+p*w)*z,e[8]=(o*I-a*R+c*g)*z,e[9]=(n*R-t*I-s*g)*z,e[10]=(_*A-S*x+d*M)*z,e[11]=(f*x-u*A-p*M)*z,e[12]=(a*b-o*D-l*g)*z,e[13]=(t*D-n*b+r*g)*z,e[14]=(S*w-_*y-m*M)*z,e[15]=(u*y-f*w+h*M)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,S=o*u,m=o*f,d=a*f,M=l*c,w=l*u,x=l*f,y=n.x,A=n.y,T=n.z;return r[0]=(1-(S+d))*y,r[1]=(p+x)*y,r[2]=(_-w)*y,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+d))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(_+w)*T,r[9]=(m-M)*T,r[10]=(1-(h+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=cr.set(r[0],r[1],r[2]).length();const a=cr.set(r[4],r[5],r[6]).length(),l=cr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Wn.copy(this);const c=1/o,u=1/a,f=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=oi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let _,S;if(l)_=s/(o-s),S=o*s/(o-s);else if(a===oi)_=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Rs)_=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=oi,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r);let _,S;if(l)_=1/(o-s),S=o/(o-s);else if(a===oi)_=-2/(o-s),S=-(o+s)/(o-s);else if(a===Rs)_=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ea.prototype.isMatrix4=!0;let lt=ea;const cr=new N,Wn=new lt,mp=new N(0,0,0),gp=new N(1,1,1),Ai=new N,no=new N,Cn=new N,su=new lt,ou=new zn;class Ei{constructor(e=0,t=0,n=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _p=0;const au=new N,ur=new zn,fi=new lt,io=new N,Qr=new N,xp=new N,vp=new zn,lu=new N(1,0,0),cu=new N(0,1,0),uu=new N(0,0,1),hu={type:"added"},Sp={type:"removed"},hr={type:"childadded",child:null},ba={type:"childremoved",child:null};class an extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new N,t=new Ei,n=new zn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ze}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Qr,io,this.up):fi.lookAt(io,Qr,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(fi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hu),hr.child=e,this.dispatchEvent(hr),hr.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hu),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new N(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kn extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ro={h:0,s:0,l:0};function wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=gc(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=wa(o,s,e+1/3),this.g=wa(o,s,e),this.b=wa(o,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return _t.workingToColorSpace(fn.copy(this),e),Math.round(at(fn.r*255,0,255))*65536+Math.round(at(fn.g*255,0,255))*256+Math.round(at(fn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(fn.copy(this),t);const n=fn.r,r=fn.g,s=fn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=on){_t.workingToColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,r=fn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(ro);const n=_s(Ti.h,ro.h,t),r=_s(Ti.s,ro.s,t),s=_s(Ti.l,ro.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ze;ze.NAMES=nf;class yp extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xn=new N,di=new N,Aa=new N,pi=new N,fr=new N,dr=new N,fu=new N,Ta=new N,Ra=new N,Ca=new N,Pa=new Wt,La=new Wt,Da=new Wt;class Bn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),di.subVectors(n,t),Aa.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(di),l=Xn.dot(Aa),c=di.dot(di),u=di.dot(Aa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Pa.setScalar(0),La.setScalar(0),Da.setScalar(0),Pa.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pa,s.x),o.addScaledVector(La,s.y),o.addScaledVector(Da,s.z),o}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),di.subVectors(e,t),Xn.cross(di).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Xn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;fr.subVectors(r,n),dr.subVectors(s,n),Ta.subVectors(e,n);const l=fr.dot(Ta),c=dr.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,r);const u=fr.dot(Ra),f=dr.dot(Ra);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fr,o);Ca.subVectors(e,s);const p=fr.dot(Ca),_=dr.dot(Ca);if(_>=0&&p<=_)return t.copy(s);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(dr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return fu.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(fu,a);const d=1/(m+S+h);return o=S*d,a=h*d,t.copy(n).addScaledVector(fr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ji{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),oo.subVectors(this.max,jr),pr.subVectors(e.a,jr),mr.subVectors(e.b,jr),gr.subVectors(e.c,jr),Ri.subVectors(mr,pr),Ci.subVectors(gr,mr),Bi.subVectors(pr,gr);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Bi.z,Bi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Bi.z,0,-Bi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Bi.y,Bi.x,0];return!Ia(t,pr,mr,gr,oo)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,pr,mr,gr,oo))?!1:(ao.crossVectors(Ri,Ci),t=[ao.x,ao.y,ao.z],Ia(t,pr,mr,gr,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new N,new N,new N,new N,new N,new N,new N,new N],Yn=new N,so=new Ji,pr=new N,mr=new N,gr=new N,Ri=new N,Ci=new N,Bi=new N,jr=new N,oo=new N,ao=new N,zi=new N;function Ia(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zi.fromArray(i,s);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Si=bp();function bp(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Ep(i){Math.abs(i)>65504&&Ve("DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),Si.floatView[0]=i;const e=Si.uint32View[0],t=e>>23&511;return Si.baseTable[t]+((e&8388607)>>Si.shiftTable[t])}function wp(i){const e=i>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[e]+(i&1023)]+Si.exponentTable[e],Si.floatView[0]}class lo{static toHalfFloat(e){return Ep(e)}static fromHalfFloat(e){return wp(e)}}const Qt=new N,co=new _e;let Ap=0;class Be extends Ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class rf extends Be{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sf extends Be{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends Be{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Tp=new Ji,es=new N,Na=new N;class Gr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(es,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Na)),this.expandByPoint(es.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rp=0;const On=new lt,Ua=new an,_r=new N,Pn=new Ji,ts=new Ji,sn=new N;class Tt extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?sf:rf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Pn.min,ts.min),Pn.expandByPoint(sn),sn.addVectors(Pn.max,ts.max),Pn.expandByPoint(sn)):(Pn.expandByPoint(ts.min),Pn.expandByPoint(ts.max))}Pn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),sn.add(_r)),r=Math.max(r,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new N,l[g]=new N;const c=new N,u=new N,f=new N,h=new _e,p=new _e,_=new _e,S=new N,m=new N;function d(g,b,R){c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),h.fromBufferAttribute(s,g),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,R),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[g].add(S),a[b].add(S),a[R].add(S),l[g].add(m),l[b].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let g=0,b=M.length;g<b;++g){const R=M[g],D=R.start,I=R.count;for(let U=D,P=D+I;U<P;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const w=new N,x=new N,y=new N,A=new N;function T(g){y.fromBufferAttribute(r,g),A.copy(y);const b=a[g];w.copy(b),w.sub(y.multiplyScalar(y.dot(b))).normalize(),x.crossVectors(A,b);const D=x.dot(l[g])<0?-1:1;o.setXYZW(g,w.x,w.y,w.z,D)}for(let g=0,b=M.length;g<b;++g){const R=M[g],D=R.start,I=R.count;for(let U=D,P=D+I;U<P;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Be(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Be(h,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const _n=new N;class Ko{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){$o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Be(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ko(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Oa=new N,Pp=new N,Lp=new Ze;class Di{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Oa.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Oa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lp.getNormalMatrix(e),r=this.coplanarPoint(Oa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Dp=0;class Qi extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Nr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Bh,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Di().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vo extends Qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xr;const ns=new N,vr=new N,Sr=new N,Mr=new _e,is=new _e,of=new lt,uo=new N,rs=new N,ho=new N,du=new _e,Fa=new _e,pu=new _e;class Ba extends an{constructor(e=new Vo){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cp(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Ko(n,3,0,!1)),xr.setAttribute("uv",new Ko(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-Sr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;fo(uo.set(-.5,-.5,0),Sr,o,vr,r,s),fo(rs.set(.5,-.5,0),Sr,o,vr,r,s),fo(ho.set(.5,.5,0),Sr,o,vr,r,s),du.set(0,0),Fa.set(1,0),pu.set(1,1);let a=e.ray.intersectTriangle(uo,rs,ho,!1,ns);if(a===null&&(fo(rs.set(-.5,.5,0),Sr,o,vr,r,s),Fa.set(0,1),a=e.ray.intersectTriangle(uo,ho,rs,!1,ns),a===null))return;const l=e.ray.origin.distanceTo(ns);l<e.near||l>e.far||t.push({distance:l,point:ns.clone(),uv:Bn.getInterpolation(ns,uo,rs,ho,du,Fa,pu,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fo(i,e,t,n,r,s){Mr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(is.x=s*Mr.x-r*Mr.y,is.y=r*Mr.x+s*Mr.y):is.copy(Mr),i.copy(e),i.x+=is.x,i.y+=is.y,i.applyMatrix4(of)}const gi=new N,za=new N,po=new N,mo=new N;class vc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){za.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(za);const s=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=mo.dot(this.direction),l=-mo.dot(po),c=mo.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(za).addScaledVector(po,h),p}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),r=gi.dot(gi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,p=e.z-o.z,_=t.x-o.x,S=t.y-o.y,m=t.z-o.z,d=n.x-o.x,M=n.y-o.y,w=n.z-o.z,x=Math.abs(l),y=Math.abs(c),A=Math.abs(u);let T,g,b,R,D,I,U,P,z,G,Z,se;if(x>=y&&x>=A?(b=l,I=f,z=_,se=d,l>=0?(T=c,g=u,R=h,D=p,U=S,P=m,G=M,Z=w):(T=u,g=c,R=p,D=h,U=m,P=S,G=w,Z=M)):y>=A?(b=c,I=h,z=S,se=M,c>=0?(T=u,g=l,R=p,D=f,U=m,P=_,G=w,Z=d):(T=l,g=u,R=f,D=p,U=_,P=m,G=d,Z=w)):(b=u,I=p,z=m,se=w,u>=0?(T=l,g=c,R=f,D=h,U=_,P=S,G=d,Z=M):(T=c,g=l,R=h,D=f,U=S,P=_,G=M,Z=d)),b===0)return null;const q=T/b,Q=g/b,re=1/b,ye=R-q*I,pe=D-Q*I,je=U-q*z,et=P-Q*z,ct=G-q*se,K=Z-Q*se,ie=ct*et-K*je,be=ye*K-pe*ct,He=je*pe-et*ye;if(r){if(ie<0||be<0||He<0)return null}else if((ie<0||be<0||He<0)&&(ie>0||be>0||He>0))return null;const Se=ie+be+He;if(Se===0)return null;const ce=re*(ie*I+be*z+He*se);return(Se>0?ce<0:ce>0)?null:this.at(ce/Se,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fr extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mu=new lt,Hi=new vc,go=new Gr,gu=new N,_o=new N,xo=new N,vo=new N,Ha=new N,So=new N,_u=new N,Mo=new N;class pn extends an{constructor(e=new Tt,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ha.fromBufferAttribute(f,e),o?So.addScaledVector(Ha,u):So.addScaledVector(Ha.sub(t),u))}t.add(So)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(go.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(go,gu)===null||Hi.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(mu),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,y=w;x<y;x+=3){const A=a.getX(x),T=a.getX(x+1),g=a.getX(x+2);r=yo(this,d,e,n,c,u,f,A,T,g),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const M=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);r=yo(this,o,e,n,c,u,f,M,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,y=w;x<y;x+=3){const A=x,T=x+1,g=x+2;r=yo(this,d,e,n,c,u,f,A,T,g),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const M=m,w=m+1,x=m+2;r=yo(this,o,e,n,c,u,f,M,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ip(i,e,t,n,r,s,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:i}}function yo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,_o),i.getVertexPosition(l,xo),i.getVertexPosition(c,vo);const u=Ip(i,e,t,n,_o,xo,vo,_u);if(u){const f=new N;Bn.getBarycoord(_u,_o,xo,vo,f),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,f,new _e)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,f,new _e)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Bn.getNormal(_o,xo,vo,h.normal),u.face=h,u.barycoord=f}return u}class Jo extends en{constructor(e=null,t=1,n=1,r,s,o,a,l,c=un,u=un,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi extends Be{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yr=new lt,xu=new lt,bo=[],vu=new Ji,Np=new lt,ss=new pn,os=new Gr;class Os extends pn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),vu.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(vu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),os.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),e.ray.intersectsSphere(os)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,yr),xu.multiplyMatrices(n,yr),ss.matrixWorld=xu,ss.raycast(e,bo);for(let o=0,a=bo.length;o<a;o++){const l=bo[o];l.instanceId=s,l.object=this,t.push(l)}bo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jo(new Float32Array(r*this.count),r,this.count,uc,Dn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gi=new Gr,Up=new _e(.5,.5),Eo=new N;class Sc{constructor(e=new Di,t=new Di,n=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],_=s[8],S=s[9],m=s[10],d=s[11],M=s[12],w=s[13],x=s[14],y=s[15];if(r[0].setComponents(c-o,p-u,d-_,y-M).normalize(),r[1].setComponents(c+o,p+u,d+_,y+M).normalize(),r[2].setComponents(c+a,p+f,d+S,y+w).normalize(),r[3].setComponents(c-a,p-f,d-S,y-w).normalize(),n)r[4].setComponents(l,h,m,x).normalize(),r[5].setComponents(c-l,p-h,d-m,y-x).normalize();else if(r[4].setComponents(c-l,p-h,d-m,y-x).normalize(),t===oi)r[5].setComponents(c+l,p+h,d+m,y+x).normalize();else if(t===Rs)r[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=Up.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Eo.x=r.normal.x>0?e.max.x:e.min.x,Eo.y=r.normal.y>0?e.max.y:e.min.y,Eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class af extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qo=new N,jo=new N,Su=new lt,as=new vc,wo=new Gr,Ga=new N,Mu=new N;class Op extends an{constructor(e=new Tt,t=new af){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Qo.fromBufferAttribute(t,r-1),jo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Qo.distanceTo(jo);e.setAttribute("lineDistance",new Pt(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Su.copy(r).invert(),as.copy(e.ray).applyMatrix4(Su);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let S=p,m=_-1;S<m;S+=c){const d=u.getX(S),M=u.getX(S+1),w=Ao(this,e,as,l,d,M,S);w&&t.push(w)}if(this.isLineLoop){const S=u.getX(_-1),m=u.getX(p),d=Ao(this,e,as,l,S,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let S=p,m=_-1;S<m;S+=c){const d=Ao(this,e,as,l,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){const S=Ao(this,e,as,l,_-1,p,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ao(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Qo.fromBufferAttribute(a,r),jo.fromBufferAttribute(a,s),t.distanceSqToSegment(Qo,jo,Ga,Mu)>n)return;Ga.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ga);if(!(c<e.near||c>e.far))return{distance:c,point:Mu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const yu=new N,bu=new N;class Fp extends Op{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yu.fromBufferAttribute(t,r),bu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yu.distanceTo(bu);e.setAttribute("lineDistance",new Pt(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lf extends en{constructor(e=[],t=Yi,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class na extends en{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends en{constructor(e,t,n=ci,r,s,o,a=un,l=un,c,u=bi,f=1){if(u!==bi&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Bp extends Ls{constructor(e,t=ci,n=Yi,r,s,o=un,a=un,l,c=bi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cf extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class it extends Tt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function _(S,m,d,M,w,x,y,A,T,g,b){const R=x/T,D=y/g,I=x/2,U=y/2,P=A/2,z=T+1,G=g+1;let Z=0,se=0;const q=new N;for(let Q=0;Q<G;Q++){const re=Q*D-U;for(let ye=0;ye<z;ye++){const pe=ye*R-I;q[S]=pe*M,q[m]=re*w,q[d]=P,c.push(q.x,q.y,q.z),q[S]=0,q[m]=0,q[d]=A>0?1:-1,u.push(q.x,q.y,q.z),f.push(ye/T),f.push(1-Q/g),Z+=1}}for(let Q=0;Q<g;Q++)for(let re=0;re<T;re++){const ye=h+re+z*Q,pe=h+re+z*(Q+1),je=h+(re+1)+z*(Q+1),et=h+(re+1)+z*Q;l.push(ye,pe,et),l.push(pe,je,et),se+=6}a.addGroup(p,se,b),p+=se,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mc extends Tt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,p=2*f+h,_=n*2+s,S=r+1,m=new N,d=new N;for(let M=0;M<=_;M++){let w=0,x=0,y=0,A=0;if(M<=n){const b=M/n,R=b*Math.PI/2;x=-u-e*Math.cos(R),y=e*Math.sin(R),A=-e*Math.cos(R),w=b*f}else if(M<=n+s){const b=(M-n)/s;x=-u+b*t,y=e,A=0,w=f+b*h}else{const b=(M-n-s)/n,R=b*Math.PI/2;x=u+e*Math.sin(R),y=e*Math.cos(R),A=e*Math.sin(R),w=f+h+b*f}const T=Math.max(0,Math.min(1,w/p));let g=0;M===0?g=.5/r:M===_&&(g=-.5/r);for(let b=0;b<=r;b++){const R=b/r,D=R*Math.PI*2,I=Math.sin(D),U=Math.cos(D);d.x=-y*U,d.y=x,d.z=y*I,a.push(d.x,d.y,d.z),m.set(-y*U,A,y*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+g,T)}if(M>0){const b=(M-1)*S;for(let R=0;R<r;R++){const D=b+R,I=b+R+1,U=M*S+R,P=M*S+R+1;o.push(D,I,U),o.push(I,P,U)}}}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class jt extends Tt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let _=0;const S=[],m=n/2;let d=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function M(){const x=new N,y=new N;let A=0;const T=(t-e)/n;for(let g=0;g<=s;g++){const b=[],R=g/s,D=R*(t-e)+e;for(let I=0;I<=r;I++){const U=I/r,P=U*l+a,z=Math.sin(P),G=Math.cos(P);y.x=D*z,y.y=-R*n+m,y.z=D*G,f.push(y.x,y.y,y.z),x.set(z,T,G).normalize(),h.push(x.x,x.y,x.z),p.push(U,1-R),b.push(_++)}S.push(b)}for(let g=0;g<r;g++)for(let b=0;b<s;b++){const R=S[b][g],D=S[b+1][g],I=S[b+1][g+1],U=S[b][g+1];(e>0||b!==0)&&(u.push(R,D,U),A+=3),(t>0||b!==s-1)&&(u.push(D,I,U),A+=3)}c.addGroup(d,A,0),d+=A}function w(x){const y=_,A=new _e,T=new N;let g=0;const b=x===!0?e:t,R=x===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),_++;const D=_;for(let I=0;I<=r;I++){const P=I/r*l+a,z=Math.cos(P),G=Math.sin(P);T.x=b*G,T.y=m*R,T.z=b*z,f.push(T.x,T.y,T.z),h.push(0,R,0),A.x=z*.5+.5,A.y=G*.5*R+.5,p.push(A.x,A.y),_++}for(let I=0;I<r;I++){const U=y+I,P=D+I;x===!0?u.push(P,P+1,U):u.push(P+1,P,U),g+=3}c.addGroup(d,g,x===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fs extends jt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Fs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yc extends Tt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new N,x=new N,y=new N;for(let A=0;A<t.length;A+=3)p(t[A+0],w),p(t[A+1],x),p(t[A+2],y),l(w,x,y,M)}function l(M,w,x,y){const A=y+1,T=[];for(let g=0;g<=A;g++){T[g]=[];const b=M.clone().lerp(x,g/A),R=w.clone().lerp(x,g/A),D=A-g;for(let I=0;I<=D;I++)I===0&&g===A?T[g][I]=b:T[g][I]=b.clone().lerp(R,I/D)}for(let g=0;g<A;g++)for(let b=0;b<2*(A-g)-1;b++){const R=Math.floor(b/2);b%2===0?(h(T[g][R+1]),h(T[g+1][R]),h(T[g][R])):(h(T[g][R+1]),h(T[g+1][R+1]),h(T[g+1][R]))}}function c(M){const w=new N;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(M),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function u(){const M=new N;for(let w=0;w<s.length;w+=3){M.x=s[w+0],M.y=s[w+1],M.z=s[w+2];const x=m(M)/2/Math.PI+.5,y=d(M)/Math.PI+.5;o.push(x,1-y)}_(),f()}function f(){for(let M=0;M<o.length;M+=6){const w=o[M+0],x=o[M+2],y=o[M+4],A=Math.max(w,x,y),T=Math.min(w,x,y);A>.9&&T<.1&&(w<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),y<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function p(M,w){const x=M*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function _(){const M=new N,w=new N,x=new N,y=new N,A=new _e,T=new _e,g=new _e;for(let b=0,R=0;b<s.length;b+=9,R+=6){M.set(s[b+0],s[b+1],s[b+2]),w.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),A.set(o[R+0],o[R+1]),T.set(o[R+2],o[R+3]),g.set(o[R+4],o[R+5]),y.copy(M).add(w).add(x).divideScalar(3);const D=m(y);S(A,R+0,M,D),S(T,R+2,w,D),S(g,R+4,x,D)}}function S(M,w,x,y){y<0&&M.x===1&&(o[w]=M.x-1),x.x===0&&x.z===0&&(o[w]=y/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.vertices,e.indices,e.radius,e.detail)}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new _e:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,r=[],s=[],o=[],a=new N,l=new lt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(at(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(at(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bc extends hi{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zp extends bc{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ec(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Eu=new N,wu=new N,ka=new Ec,Va=new Ec,Wa=new Ec;class Hp extends hi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(wu.subVectors(r[0],r[1]).add(r[0]),c=wu);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Eu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Eu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),ka.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,S,m),Va.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,S,m),Wa.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Va.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Wa.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(ka.calc(l),Va.calc(l),Wa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Au(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Gp(i,e){const t=1-i;return t*t*e}function kp(i,e){return 2*(1-i)*i*e}function Vp(i,e){return i*i*e}function xs(i,e,t,n){return Gp(i,e)+kp(i,t)+Vp(i,n)}function Wp(i,e){const t=1-i;return t*t*t*e}function Xp(i,e){const t=1-i;return 3*t*t*i*e}function Yp(i,e){return 3*(1-i)*i*i*e}function qp(i,e){return i*i*i*e}function vs(i,e,t,n,r){return Wp(i,e)+Xp(i,t)+Yp(i,n)+qp(i,r)}class uf extends hi{constructor(e=new _e,t=new _e,n=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(vs(e,r.x,s.x,o.x,a.x),vs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zp extends hi{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(vs(e,r.x,s.x,o.x,a.x),vs(e,r.y,s.y,o.y,a.y),vs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hf extends hi{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $p extends hi{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ff extends hi{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(xs(e,r.x,s.x,o.x),xs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kp extends hi{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(xs(e,r.x,s.x,o.x),xs(e,r.y,s.y,o.y),xs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class df extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Au(a,l.x,c.x,u.x,f.x),Au(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var Tu=Object.freeze({__proto__:null,ArcCurve:zp,CatmullRomCurve3:Hp,CubicBezierCurve:uf,CubicBezierCurve3:Zp,EllipseCurve:bc,LineCurve:hf,LineCurve3:$p,QuadraticBezierCurve:ff,QuadraticBezierCurve3:Kp,SplineCurve:df});class Jp extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Tu[r.type]().fromJSON(r))}return this}}class $l extends Jp{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hf(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ff(this.currentPoint.clone(),new _e(e,t),new _e(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new uf(this.currentPoint.clone(),new _e(e,t),new _e(n,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new df(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new bc(e,t,n,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pf extends $l{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new $l().fromJSON(r))}return this}}function Qp(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=mf(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=im(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let u=a,f=l;for(let h=t;h<r;h+=t){const p=i[h],_=i[h+1];p<a&&(a=p),_<l&&(l=_),p>u&&(u=p),_>f&&(f=_)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Ds(s,o,t,a,l,c,0),o}function mf(i,e,t,n,r){let s;if(r===pm(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Ru(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Ru(o/n|0,i[o],i[o+1],s);return s&&zr(s,s.next)&&(Ns(s),s=s.next),s}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zr(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Ns(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ds(i,e,t,n,r,s,o){if(!i)return;!o&&s&&lm(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?em(i,n,r,s):jp(i)){e.push(l.i,i.i,c.i),Ns(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tm($i(i),e),Ds(i,e,t,n,r,s,2)):o===2&&nm(i,e,t,n,r,s):Ds($i(i),e,t,n,r,s,1);break}}}function jp(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=p&&ps(r,a,s,l,o,c,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function em(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Xt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=Math.min(a,l,c),_=Math.min(u,f,h),S=Math.max(a,l,c),m=Math.max(u,f,h),d=Kl(p,_,e,t,n),M=Kl(S,m,e,t,n);let w=i.prevZ,x=i.nextZ;for(;w&&w.z>=d&&x&&x.z<=M;){if(w.x>=p&&w.x<=S&&w.y>=_&&w.y<=m&&w!==r&&w!==o&&ps(a,u,l,f,c,h,w.x,w.y)&&Xt(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=p&&x.x<=S&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&ps(a,u,l,f,c,h,x.x,x.y)&&Xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=d;){if(w.x>=p&&w.x<=S&&w.y>=_&&w.y<=m&&w!==r&&w!==o&&ps(a,u,l,f,c,h,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=S&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&ps(a,u,l,f,c,h,x.x,x.y)&&Xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tm(i,e){let t=i;do{const n=t.prev,r=t.next.next;!zr(n,r)&&_f(n,t,t.next,r)&&Is(n,r)&&Is(r,n)&&(e.push(n.i,t.i,r.i),Ns(t),Ns(t.next),t=i=r),t=t.next}while(t!==i);return $i(t)}function nm(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hm(o,a)){let l=xf(o,a);o=$i(o,o.next),l=$i(l,l.next),Ds(o,e,t,n,r,s,0),Ds(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function im(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=mf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(um(c))}r.sort(rm);for(let s=0;s<r.length;s++)t=sm(r[s],t);return t}function rm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function sm(i,e){const t=om(i,e);if(!t)return e;const n=xf(t,i);return $i(n,n.next),$i(t,t.next)}function om(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(zr(i,t))return t;do{if(zr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&gf(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const f=Math.abs(r-t.y)/(n-t.x);Is(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&am(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function am(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function lm(i,e,t,n){let r=i;do r.z===0&&(r.z=Kl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,cm(r)}function cm(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Kl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function um(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gf(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function ps(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&gf(i,e,t,n,r,s,o,a)}function hm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!fm(i,e)&&(Is(i,e)&&Is(e,i)&&dm(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||zr(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zr(i,e){return i.x===e.x&&i.y===e.y}function _f(i,e,t,n){const r=Ro(Xt(i,e,t)),s=Ro(Xt(i,e,n)),o=Ro(Xt(t,n,i)),a=Ro(Xt(t,n,e));return!!(r!==s&&o!==a||r===0&&To(i,t,e)||s===0&&To(i,n,e)||o===0&&To(t,i,n)||a===0&&To(t,e,n))}function To(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ro(i){return i>0?1:i<0?-1:0}function fm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_f(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Is(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function dm(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function xf(i,e){const t=Jl(i.i,i.x,i.y),n=Jl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ru(i,e,t,n){const r=Jl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pm(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class mm{static triangulate(e,t,n=2){return Qp(e,t,n)}}class Ss{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ss.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Cu(e),Pu(n,e);let o=e.length;t.forEach(Cu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Pu(n,t[l]);const a=mm.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Cu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ia extends yc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ia(e.radius,e.detail)}}class kr extends Tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],S=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let w=0;w<c;w++){const x=w*f-s;_.push(x,-M,0),S.push(0,0,1),m.push(w/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const w=M+c*d,x=M+c*(d+1),y=M+1+c*(d+1),A=M+1+c*d;p.push(w,x,A),p.push(x,y,A)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends Tt{constructor(e=new pf([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let p=h.shape;const _=h.holes;Ss.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=_.length;m<d;m++){const M=_[m];Ss.isClockWise(M)===!0&&(_[m]=M.reverse())}const S=Ss.triangulateShape(p,_);for(let m=0,d=_.length;m<d;m++){const M=_[m];p=p.concat(M)}for(let m=0,d=p.length;m<d;m++){const M=p[m];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let m=0,d=S.length;m<d;m++){const M=S[m],w=M[0]+f,x=M[1]+f,y=M[2]+f;n.push(w,x,y),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return gm(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new wc(n,e.curveSegments)}}function gm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class ra extends Tt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new N,h=new N,p=[],_=[],S=[],m=[];for(let d=0;d<=n;d++){const M=[],w=d/n,x=o+w*a,y=e*Math.cos(x),A=Math.sqrt(e*e-y*y);let T=0;d===0&&o===0?T=.5/t:d===n&&l===Math.PI&&(T=-.5/t);for(let g=0;g<=t;g++){const b=g/t,R=r+b*s;f.x=-A*Math.cos(R),f.y=y,f.z=A*Math.sin(R),_.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(b+T,1-w),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const w=u[d][M+1],x=u[d][M],y=u[d+1][M],A=u[d+1][M+1];(d!==0||o>0)&&p.push(w,x,A),(d!==n-1||l<Math.PI)&&p.push(x,y,A)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Hr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Lu(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Lu(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function xn(i){const e={};for(let t=0;t<i.length;t++){const n=Hr(i[t]);for(const r in n)e[r]=n[r]}return e}function Lu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _m(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const xm={clone:Hr,merge:xn};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=_m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(r.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(r.value);break;case"v3":this.uniforms[n].value=new N().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mm extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bs extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ym extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bm extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Du(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Du(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Du(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Em{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wm=new Em;class zs{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class Am extends Error{constructor(e,t){super(e),this.response=t}}class Tm extends zs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ms.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:r});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_i[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let S=0;const m=new ReadableStream({start(d){M();function M(){f.read().then(({done:w,value:x})=>{if(w)d.close();else{S+=x.byteLength;const y=new ProgressEvent("progress",{lengthComputable:_,loaded:S,total:p});for(let A=0,T=u.length;A<T;A++){const g=u[A];g.onProgress&&g.onProgress(y)}d.enqueue(x),M()}},w=>{d.error(w)})}}});return new Response(m)}else throw new Am(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Ms.add(`file:${e}`,c);const u=_i[e];delete _i[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=_i[e];if(u===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const br=new WeakMap;class Rm extends zs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ms.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=br.get(o);f===void 0&&(f=[],br.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=Cs("img");function l(){u(),t&&t(this);const f=br.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}br.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Ms.remove(`image:${e}`);const h=br.get(this)||[];for(let p=0;p<h.length;p++){const _=h[p];_.onError&&_.onError(f)}br.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ms.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Cm extends zs{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Jo,a=new Tm(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){r!==void 0?r(u):gt(u);return}s._applyTexData(o,c),t&&t(o,c)},n,r),o}createDataTexture(e){const t=new Jo;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Qn,e.wrapT=t.wrapT!==void 0?t.wrapT:Qn,e.magFilter=t.magFilter!==void 0?t.magFilter:Kt,e.minFilter=t.minFilter!==void 0?t.minFilter:Kt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ni),t.mipmapCount===1&&(e.minFilter=Kt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Pm extends zs{constructor(e){super(e)}load(e,t,n,r){const s=new en,o=new Rm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Sf extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Xa=new lt,Iu=new N,Nu=new N;class Lm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xa,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Rs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Co=new N,Po=new zn,ni=new N;class Mf extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Co,Po,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Co,Po,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new N,Uu=new _e,Ou=new _e;class Fn extends Mf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Ou),t.subVectors(Ou,Uu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ac extends Mf{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dm extends Lm{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends Sf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Dm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Nm extends Sf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Er=-90,wr=1;class Um extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(Er,wr,e,t);r.layers=this.layers,this.add(r);const s=new Fn(Er,wr,e,t);s.layers=this.layers,this.add(s);const o=new Fn(Er,wr,e,t);o.layers=this.layers,this.add(o);const a=new Fn(Er,wr,e,t);a.layers=this.layers,this.add(a);const l=new Fn(Er,wr,e,t);l.layers=this.layers,this.add(l);const c=new Fn(Er,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Om extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fu=new lt;class Fm{constructor(e,t,n=0,r=1/0){this.ray=new vc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(e,t=!0,n=[]){return Ql(e,this,n,t),n.sort(Bu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ql(e[r],this,n,t);return n.sort(Bu),n}}function Bu(i,e){return i.distance-e.distance}function Ql(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Ql(s[o],e,t,!0)}}const Ic=class Ic{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Ic.prototype.isMatrix2=!0;let zu=Ic;function Hu(i,e,t,n){const r=Bm(n);switch(t){case Jh:return i*e;case uc:return i*e/r.components*r.byteLength;case hc:return i*e/r.components*r.byteLength;case qi:return i*e*2/r.components*r.byteLength;case fc:return i*e*2/r.components*r.byteLength;case Qh:return i*e*3/r.components*r.byteLength;case jn:return i*e*4/r.components*r.byteLength;case dc:return i*e*4/r.components*r.byteLength;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:case Ml:return Math.max(i,16)*Math.max(e,8)/4;case xl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case yl:case bl:case wl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case El:case Yo:case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kl:case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xl:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qo:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bm(i){switch(i){case Ln:case qh:return{byteLength:1,components:1};case ws:case Zh:case In:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case ci:case ac:case Dn:return{byteLength:4,components:1};case $h:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yf(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zm(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
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
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
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
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jm=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h0=`vec3 transformedNormal = objectNormal;
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
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,D0=`#ifdef USE_ENVMAP
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
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
#endif`,B0=`uniform sampler2D dfgLUT;
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
}`,z0=`
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wg=`float getShadowMask() {
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
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Zg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#define LAMBERT
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
}`,i_=`#define LAMBERT
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
}`,r_=`#define MATCAP
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
}`,s_=`#define MATCAP
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
}`,o_=`#define NORMAL
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
}`,a_=`#define NORMAL
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
}`,l_=`#define PHONG
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
}`,c_=`#define PHONG
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
}`,u_=`#define STANDARD
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
}`,h_=`#define STANDARD
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
}`,f_=`#define TOON
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
}`,d_=`#define TOON
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
}`,p_=`uniform float size;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,__=`uniform vec3 color;
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
}`,x_=`uniform float rotation;
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
}`,v_=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Hm,alphahash_pars_fragment:Gm,alphamap_fragment:km,alphamap_pars_fragment:Vm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:Ym,aomap_pars_fragment:qm,batching_pars_vertex:Zm,batching_vertex:$m,begin_vertex:Km,beginnormal_vertex:Jm,bsdfs:Qm,iridescence_fragment:jm,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:r0,color_fragment:s0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:l0,common:c0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:h0,displacementmap_pars_vertex:f0,displacementmap_vertex:d0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:x0,envmap_common_pars_fragment:v0,envmap_pars_fragment:S0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:D0,envmap_vertex:y0,fog_vertex:b0,fog_pars_vertex:E0,fog_fragment:w0,fog_pars_fragment:A0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:R0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:L0,lights_toon_fragment:I0,lights_toon_pars_fragment:N0,lights_phong_fragment:U0,lights_phong_pars_fragment:O0,lights_physical_fragment:F0,lights_physical_pars_fragment:B0,lights_fragment_begin:z0,lights_fragment_maps:H0,lights_fragment_end:G0,lightprobes_pars_fragment:k0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:Y0,map_fragment:q0,map_pars_fragment:Z0,map_particle_fragment:$0,map_particle_pars_fragment:K0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:j0,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:rg,normal_fragment_maps:sg,normal_pars_fragment:og,normal_pars_vertex:ag,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:dg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:_g,dithering_fragment:xg,dithering_pars_fragment:vg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:bg,shadowmap_vertex:Eg,shadowmask_pars_fragment:wg,skinbase_vertex:Ag,skinning_pars_vertex:Tg,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Lg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ig,transmission_fragment:Ng,transmission_pars_fragment:Ug,uv_pars_fragment:Og,uv_pars_vertex:Fg,uv_vertex:Bg,worldpos_vertex:zg,background_vert:Hg,background_frag:Gg,backgroundCube_vert:kg,backgroundCube_frag:Vg,cube_vert:Wg,cube_frag:Xg,depth_vert:Yg,depth_frag:qg,distance_vert:Zg,distance_frag:$g,equirect_vert:Kg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:jg,meshbasic_vert:e_,meshbasic_frag:t_,meshlambert_vert:n_,meshlambert_frag:i_,meshmatcap_vert:r_,meshmatcap_frag:s_,meshnormal_vert:o_,meshnormal_frag:a_,meshphong_vert:l_,meshphong_frag:c_,meshphysical_vert:u_,meshphysical_frag:h_,meshtoon_vert:f_,meshtoon_frag:d_,points_vert:p_,points_frag:m_,shadow_vert:g_,shadow_frag:__,sprite_vert:x_,sprite_frag:v_},Me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},si={basic:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:xn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:xn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:xn([Me.points,Me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:xn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:xn([Me.common,Me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:xn([Me.sprite,Me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:xn([Me.common,Me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:xn([Me.lights,Me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};si.physical={uniforms:xn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Lo={r:0,b:0,g:0},S_=new lt,bf=new Ze;bf.set(-1,0,0,0,1,0,0,0,1);function M_(i,e,t,n,r,s){const o=new ze(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function p(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const x=M.backgroundBlurriness>0;w=e.get(w,x)}return w}function _(M){let w=!1;const x=p(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),w=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,w){const x=p(w);x&&(x.isCubeTexture||x.mapping===ta)?(c===void 0&&(c=new pn(new it(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Hr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bf),c.material.toneMapped=_t.getTransfer(x.colorSpace)!==Rt,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pn(new kr(2,2),new ui({name:"BackgroundMaterial",uniforms:Hr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=_t.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Lo,vf(i)),t.buffers.color.setClear(Lo.r,Lo.g,Lo.b,w,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:_,addToRenderList:S,dispose:d}}function y_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(D,I,U,P,z){let G=!1;const Z=f(D,P,U,I);s!==Z&&(s=Z,c(s.object)),G=p(D,P,U,z),G&&_(D,P,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(D,I,U,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,I,U,P){const z=P.wireframe===!0;let G=n[I.id];G===void 0&&(G={},n[I.id]=G);const Z=D.isInstancedMesh===!0?D.id:0;let se=G[Z];se===void 0&&(se={},G[Z]=se);let q=se[U.id];q===void 0&&(q={},se[U.id]=q);let Q=q[z];return Q===void 0&&(Q=h(l()),q[z]=Q),Q}function h(D){const I=[],U=[],P=[];for(let z=0;z<t;z++)I[z]=0,U[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:P,object:D,attributes:{},index:null}}function p(D,I,U,P){const z=s.attributes,G=I.attributes;let Z=0;const se=U.getAttributes();for(const q in se)if(se[q].location>=0){const re=z[q];let ye=G[q];if(ye===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),re===void 0||re.attribute!==ye||ye&&re.data!==ye.data)return!0;Z++}return s.attributesNum!==Z||s.index!==P}function _(D,I,U,P){const z={},G=I.attributes;let Z=0;const se=U.getAttributes();for(const q in se)if(se[q].location>=0){let re=G[q];re===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const ye={};ye.attribute=re,re&&re.data&&(ye.data=re.data),z[q]=ye,Z++}s.attributes=z,s.attributesNum=Z,s.index=P}function S(){const D=s.newAttributes;for(let I=0,U=D.length;I<U;I++)D[I]=0}function m(D){d(D,0)}function d(D,I){const U=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;U[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),z[D]!==I&&(i.vertexAttribDivisor(D,I),z[D]=I)}function M(){const D=s.newAttributes,I=s.enabledAttributes;for(let U=0,P=I.length;U<P;U++)I[U]!==D[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function w(D,I,U,P,z,G,Z){Z===!0?i.vertexAttribIPointer(D,I,U,z,G):i.vertexAttribPointer(D,I,U,P,z,G)}function x(D,I,U,P){S();const z=P.attributes,G=U.getAttributes(),Z=I.defaultAttributeValues;for(const se in G){const q=G[se];if(q.location>=0){let Q=z[se];if(Q===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const re=Q.normalized,ye=Q.itemSize,pe=e.get(Q);if(pe===void 0)continue;const je=pe.buffer,et=pe.type,ct=pe.bytesPerElement,K=et===i.INT||et===i.UNSIGNED_INT||Q.gpuType===ac;if(Q.isInterleavedBufferAttribute){const ie=Q.data,be=ie.stride,He=Q.offset;if(ie.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)d(q.location+Se,ie.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Se=0;Se<q.locationSize;Se++)w(q.location+Se,ye/q.locationSize,et,re,be*ct,(He+ye/q.locationSize*Se)*ct,K)}else{if(Q.isInstancedBufferAttribute){for(let ie=0;ie<q.locationSize;ie++)d(q.location+ie,Q.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ie=0;ie<q.locationSize;ie++)m(q.location+ie);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ie=0;ie<q.locationSize;ie++)w(q.location+ie,ye/q.locationSize,et,re,ye*ct,ye/q.locationSize*ie*ct,K)}}else if(Z!==void 0){const re=Z[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(q.location,re);break;case 3:i.vertexAttrib3fv(q.location,re);break;case 4:i.vertexAttrib4fv(q.location,re);break;default:i.vertexAttrib1fv(q.location,re)}}}}M()}function y(){b();for(const D in n){const I=n[D];for(const U in I){const P=I[U];for(const z in P){const G=P[z];for(const Z in G)u(G[Z].object),delete G[Z];delete P[z]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;const I=n[D.id];for(const U in I){const P=I[U];for(const z in P){const G=P[z];for(const Z in G)u(G[Z].object),delete G[Z];delete P[z]}}delete n[D.id]}function T(D){for(const I in n){const U=n[I];for(const P in U){const z=U[P];if(z[D.id]===void 0)continue;const G=z[D.id];for(const Z in G)u(G[Z].object),delete G[Z];delete z[D.id]}}}function g(D){for(const I in n){const U=n[I],P=D.isInstancedMesh===!0?D.id:0,z=U[P];if(z!==void 0){for(const G in z){const Z=z[G];for(const se in Z)u(Z[se].object),delete Z[se];delete z[G]}delete U[P],Object.keys(U).length===0&&delete n[I]}}}function b(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function b_(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function E_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const g=T===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ln&&T!==Dn&&!g&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,maxSamples:y,samples:A}}function w_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Di,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,w=M*4;let x=d.clippingState||null;l.value=x,x=u(_,h,w,p);for(let y=0;y!==w;++y)x[y]=t[y];d.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const d=p+S*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,x=p;w!==S;++w,x+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Lr=4,A_=6,T_=20,R_=256,ls=new Ac,Gu=new ze;let Ya=null,qa=0,Za=0,$a=!1;const C_=new N,ki=new N;class ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=C_}=s;Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,qa,Za),this._renderer.xr.enabled=$a,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:In,format:jn,colorSpace:Ts,depthBuffer:!1},r=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=P_(s)),this._blurMaterial=D_(s,e,t),this._ggxMaterial=L_(s,e,t)}return r}_compileMaterial(e){const t=new pn(new Tt,e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,n,r,s){const l=new Fn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Gu),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new it,new Fr({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(Gu),d=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const y=this._cubeSize;Ar(r,x*y,w>2?y:0,y,y),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Yi||e.mapping===Br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ar(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-Lr?n-_+Lr:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Ar(s,m,d,3*S,2*S),r.setRenderTarget(s),r.render(a,ls),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ar(e,m,d,3*S,2*S),r.setRenderTarget(e),r.render(a,ls)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-Lr?r-this._lodMax+Lr:0),h=4*(this._cubeSize-u);Ar(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,ls)}}function P_(i){const e=[],t=[];let n=i;const r=i-Lr+1+A_;for(let s=0;s<r;s++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,_=new Float32Array(p*h*f),S=new Float32Array(p*h*f);for(let d=0;d<f;d++){const M=d%3*2/3-1,w=d>2?0:-1,x=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];_.set(x,p*h*d);for(let y=0;y<h;y++){const A=u[y*2]*2-1,T=u[y*2+1]*2-1;d===0?ki.set(1,T,A):d===1?ki.set(-A,1,-T):d===2?ki.set(-A,T,1):d===3?ki.set(-1,T,-A):d===4?ki.set(-A,-1,T):ki.set(A,T,-1),ki.toArray(S,(d*h+y)*p)}}const m=new Tt;m.setAttribute("position",new Be(_,p)),m.setAttribute("outputDirection",new Be(S,p)),t.push(new pn(m,null)),n>Lr&&n--}return{lodMeshes:t,sizeLods:e}}function Vu(i,e,t){const n=new ei(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function L_(i,e,t){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function D_(i,e,t){return new ui({name:"SphericalGaussianBlur",defines:{SAMPLES:T_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Wu(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Xu(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function sa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ef extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new lf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new it(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:Hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Mi});s.uniforms.tEquirect.value=t;const o=new pn(r,s),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Kt),new Um(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function I_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Bo||p===ga)if(e.has(h)){const _=e.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new Ef(_.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,_=p===Bo||p===ga,S=p===Yi||p===Br;if(_||S){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new ku(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return _&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new ku(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Bo?h.mapping=Yi:p===ga&&(h.mapping=Br),h}function l(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function N_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ur("WebGLRenderer: "+n+" extension not supported."),r}}}function U_(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const M=p.array;S=p.version;for(let w=0,x=M.length;w<x;w+=3){const y=M[w+0],A=M[w+1],T=M[w+2];h.push(y,A,A,T,T,y)}}else{const M=_.array;S=_.version;for(let w=0,x=M.length/3-1;w<x;w+=3){const y=w+0,A=w+1,T=w+2;h.push(y,A,A,T,T,y)}}const m=new(_.count>=65535?sf:rf)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function O_(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*o),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,f*o,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];t.update(S,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function F_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function B_(i,e,t){const n=new WeakMap,r=new Wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;p===!0&&(w=1),_===!0&&(w=2),S===!0&&(w=3);let x=a.attributes.position.count*w,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*y*4*f),T=new tf(A,x,y,f);T.type=Dn,T.needsUpdate=!0;const g=w*4;for(let R=0;R<f;R++){const D=m[R],I=d[R],U=M[R],P=x*y*4*R;for(let z=0;z<D.count;z++){const G=z*g;p===!0&&(r.fromBufferAttribute(D,z),A[P+G+0]=r.x,A[P+G+1]=r.y,A[P+G+2]=r.z,A[P+G+3]=0),_===!0&&(r.fromBufferAttribute(I,z),A[P+G+4]=r.x,A[P+G+5]=r.y,A[P+G+6]=r.z,A[P+G+7]=0),S===!0&&(r.fromBufferAttribute(U,z),A[P+G+8]=r.x,A[P+G+9]=r.y,A[P+G+10]=r.z,A[P+G+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:T,size:new _e(x,y)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function z_(i,e,t,n,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const H_={[Hh]:"LINEAR_TONE_MAPPING",[Gh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[Vh]:"ACES_FILMIC_TONE_MAPPING",[Xh]:"AGX_TONE_MAPPING",[oc]:"NEUTRAL_TONE_MAPPING",[Wh]:"CUSTOM_TONE_MAPPING"};function G_(i,e,t,n,r,s){const o=new ei(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Tt;c.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const u=new Mm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pn(c,u),h=new Ac(-1,1,1,-1,0,1);let p=null,_=null,S=!1,m,d=null,M=[],w=!1;this.setSize=function(x,y){o.setSize(x,y),a!==null&&a.setSize(x,y),l!==null&&l.setSize(x,y);for(let A=0;A<M.length;A++){const T=M[A];T.setSize&&T.setSize(x,y)}},this.setEffects=function(x){M=x,w=M.length>0&&M[0].isRenderPass===!0;const y=o.width,A=o.height;M.length>0&&a===null&&(a=new ei(y,A,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new ei(y,A,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){const g=M[T];g.setSize&&g.setSize(y,A)}},this.begin=function(x,y){if(S||x.toneMapping===ai&&M.length===0)return!1;if(d=y,y!==null){const A=y.width,T=y.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return w===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ai,!0},this.hasRenderPass=function(){return w},this.end=function(x,y){x.toneMapping=m,S=!0;let A=o,T=a;for(let g=0;g<M.length;g++){const b=M[g];b.enabled!==!1&&(b.render(x,T,A,y),b.needsSwap!==!1&&(A=T,T=T===a?l:a))}if(p!==x.outputColorSpace||_!==x.toneMapping){p=x.outputColorSpace,_=x.toneMapping,u.defines={},_t.getTransfer(p)===Rt&&(u.defines.SRGB_TRANSFER="");const g=H_[_];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(d),x.render(f,h),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const wf=new en,jl=new Ls(1,1),Af=new tf,Tf=new pp,Rf=new lf,Yu=[],qu=[],Zu=new Float32Array(16),$u=new Float32Array(9),Ku=new Float32Array(4);function Vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Yu[r];if(s===void 0&&(s=new Float32Array(r),Yu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function W_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function X_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function Y_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),nn(t,n)}}function q_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),nn(t,n)}}function Z_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),nn(t,n)}}function $_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function j_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function ix(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(jl.compareFunction=t.isReversedDepthBuffer()?mc:pc,s=jl):s=wf,t.setTexture2D(e||s,r)}function rx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Tf,r)}function sx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rf,r)}function ox(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Af,r)}function ax(i){switch(i){case 5126:return k_;case 35664:return V_;case 35665:return W_;case 35666:return X_;case 35674:return Y_;case 35675:return q_;case 35676:return Z_;case 5124:case 35670:return $_;case 35667:case 35671:return K_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return j_;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return ox}}function lx(i,e){i.uniform1fv(this.addr,e)}function cx(i,e){const t=Vr(e,this.size,2);i.uniform2fv(this.addr,t)}function ux(i,e){const t=Vr(e,this.size,3);i.uniform3fv(this.addr,t)}function hx(i,e){const t=Vr(e,this.size,4);i.uniform4fv(this.addr,t)}function fx(i,e){const t=Vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dx(i,e){const t=Vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function px(i,e){const t=Vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mx(i,e){i.uniform1iv(this.addr,e)}function gx(i,e){i.uniform2iv(this.addr,e)}function _x(i,e){i.uniform3iv(this.addr,e)}function xx(i,e){i.uniform4iv(this.addr,e)}function vx(i,e){i.uniform1uiv(this.addr,e)}function Sx(i,e){i.uniform2uiv(this.addr,e)}function Mx(i,e){i.uniform3uiv(this.addr,e)}function yx(i,e){i.uniform4uiv(this.addr,e)}function bx(i,e,t){const n=this.cache,r=e.length,s=oa(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=jl:o=wf;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Ex(i,e,t){const n=this.cache,r=e.length,s=oa(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Tf,s[o])}function wx(i,e,t){const n=this.cache,r=e.length,s=oa(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rf,s[o])}function Ax(i,e,t){const n=this.cache,r=e.length,s=oa(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Af,s[o])}function Tx(i){switch(i){case 5126:return lx;case 35664:return cx;case 35665:return ux;case 35666:return hx;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return _x;case 35669:case 35673:return xx;case 5125:return vx;case 36294:return Sx;case 36295:return Mx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ax}}class Rx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}}class Cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tx(t.type)}}class Px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Ju(i,e){i.seq.push(e),i.map[e.id]=e}function Lx(i,e,t){const n=i.name,r=n.length;for(Ka.lastIndex=0;;){const s=Ka.exec(n),o=Ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ju(t,c===void 0?new Rx(a,i,e):new Cx(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Px(a),Ju(t,f)),t=f}}}class Wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Lx(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Qu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Dx=37297;let Ix=0;function Nx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ju=new Ze;function Ux(i){_t._getMatrix(ju,_t.workingColorSpace,i);const e=`mat3( ${ju.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Zo:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Nx(i.getShaderSource(e),a)}else return s}function Ox(i,e){const t=Ux(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Fx={[Hh]:"Linear",[Gh]:"Reinhard",[kh]:"Cineon",[Vh]:"ACESFilmic",[Xh]:"AgX",[oc]:"Neutral",[Wh]:"Custom"};function Bx(i,e){const t=Fx[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Do=new N;function zx(){_t.getLuminanceCoefficients(Do);const i=Do.x.toFixed(4),e=Do.y.toFixed(4),t=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Gx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ms(i){return i!==""}function th(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(Vx,Xx)}const Wx=new Map;function Xx(i,e){let t=nt[e];if(t===void 0){const n=Wx.get(e);if(n!==void 0)t=nt[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ec(t)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(Yx,qx)}function qx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Zx={[Fo]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function $x(i){return Zx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kx={[Yi]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function Jx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qx={[Br]:"ENVMAP_MODE_REFRACTION"};function jx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ev={[zh]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Dd]:"ENVMAP_BLENDING_ADD"};function tv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ev[i.combine]||"ENVMAP_BLENDING_NONE"}function nv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function iv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$x(t),c=Jx(t),u=jx(t),f=tv(t),h=nv(t),p=Hx(t),_=Gx(s),S=r.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ms).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ms).join(`
`),d.length>0&&(d+=`
`)):(m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),d=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?nt.tonemapping_pars_fragment:"",t.toneMapping!==ai?Bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ox("linearToOutputTexel",t.outputColorSpace),zx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=ec(o),o=th(o,t),o=nh(o,t),a=ec(a),a=th(a,t),a=nh(a,t),o=ih(o),a=ih(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=M+m+o,x=M+d+a,y=Qu(r,r.VERTEX_SHADER,w),A=Qu(r,r.FRAGMENT_SHADER,x);r.attachShader(S,y),r.attachShader(S,A),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(D){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(S)||"",U=r.getShaderInfoLog(y)||"",P=r.getShaderInfoLog(A)||"",z=I.trim(),G=U.trim(),Z=P.trim();let se=!0,q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,y,A);else{const Q=eh(r,y,"vertex"),re=eh(r,A,"fragment");gt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+Q+`
`+re)}else z!==""?Ve("WebGLProgram: Program Info Log:",z):(G===""||Z==="")&&(q=!1);q&&(D.diagnostics={runnable:se,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:d}})}r.deleteShader(y),r.deleteShader(A),g=new Wo(r,S),b=kx(r,S)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(S,Dx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ix++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=A,this}let rv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ov(e),t.set(e,n)),n}}class ov{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}}function av(i){return i===qi||i===Yo||i===qo}function lv(i,e,t,n,r,s){const o=new xc,a=new sv,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,b,R,D,I,U){const P=D.fog,z=I.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,se=e.get(g.envMap||G,Z),q=se&&se.mapping===ta?se.image.height:null,Q=p[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Ve("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ye=re!==void 0?re.length:0;let pe=0;z.morphAttributes.position!==void 0&&(pe=1),z.morphAttributes.normal!==void 0&&(pe=2),z.morphAttributes.color!==void 0&&(pe=3);let je,et,ct,K;if(Q){const It=si[Q];je=It.vertexShader,et=It.fragmentShader}else{je=g.vertexShader,et=g.fragmentShader;const It=a.getVertexShaderStage(g),tt=a.getFragmentShaderStage(g);a.update(g,It,tt),ct=It.id,K=tt.id}const ie=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),He=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,ce=!!g.map,Lt=!!g.matcap,$e=!!se,ut=!!g.aoMap,vt=!!g.lightMap,Ke=!!g.bumpMap&&g.wireframe===!1,yt=!!g.normalMap,bt=!!g.displacementMap,Yt=!!g.emissiveMap,Dt=!!g.metalnessMap,Ot=!!g.roughnessMap,B=g.anisotropy>0,qt=g.clearcoat>0,rt=g.dispersion>0,C=g.retroreflectivity>0,v=g.iridescence>0,H=g.sheen>0,X=g.transmission>0,$=B&&!!g.anisotropyMap,le=qt&&!!g.clearcoatMap,fe=qt&&!!g.clearcoatNormalMap,J=qt&&!!g.clearcoatRoughnessMap,te=v&&!!g.iridescenceMap,ue=v&&!!g.iridescenceThicknessMap,we=H&&!!g.sheenColorMap,ne=H&&!!g.sheenRoughnessMap,W=!!g.specularMap,De=!!g.specularColorMap,Ge=!!g.specularIntensityMap,We=X&&!!g.transmissionMap,O=X&&!!g.thicknessMap,de=!!g.gradientMap,j=!!g.alphaMap,he=g.alphaTest>0,me=!!g.alphaHash,oe=!!g.extensions;let Fe=ai;g.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const Ie={shaderID:Q,shaderType:g.type,shaderName:g.name,vertexShader:je,fragmentShader:et,defines:g.defines,customVertexShaderID:ct,customFragmentShaderID:K,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:He,instancingColor:He&&I.instanceColor!==null,instancingMorph:He&&I.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ce,matcap:Lt,envMap:$e,envMapMode:$e&&se.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:vt,bumpMap:Ke,normalMap:yt,displacementMap:bt,emissiveMap:Yt,normalMapObjectSpace:yt&&g.normalMapType===Ud,normalMapTangentSpace:yt&&g.normalMapType===Zl,packedNormalMap:yt&&g.normalMapType===Zl&&av(g.normalMap.format),metalnessMap:Dt,roughnessMap:Ot,anisotropy:B,anisotropyMap:$,clearcoat:qt,clearcoatMap:le,clearcoatNormalMap:fe,clearcoatRoughnessMap:J,dispersion:rt,retroreflection:C,iridescence:v,iridescenceMap:te,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:we,sheenRoughnessMap:ne,specularMap:W,specularColorMap:De,specularIntensityMap:Ge,transmission:X,transmissionMap:We,thicknessMap:O,gradientMap:de,opaque:g.transparent===!1&&g.blending===Nr&&g.alphaToCoverage===!1,alphaMap:j,alphaTest:he,alphaHash:me,combine:g.combine,mapUv:ce&&_(g.map.channel),aoMapUv:ut&&_(g.aoMap.channel),lightMapUv:vt&&_(g.lightMap.channel),bumpMapUv:Ke&&_(g.bumpMap.channel),normalMapUv:yt&&_(g.normalMap.channel),displacementMapUv:bt&&_(g.displacementMap.channel),emissiveMapUv:Yt&&_(g.emissiveMap.channel),metalnessMapUv:Dt&&_(g.metalnessMap.channel),roughnessMapUv:Ot&&_(g.roughnessMap.channel),anisotropyMapUv:$&&_(g.anisotropyMap.channel),clearcoatMapUv:le&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ne&&_(g.sheenRoughnessMap.channel),specularMapUv:W&&_(g.specularMap.channel),specularColorMapUv:De&&_(g.specularColorMap.channel),specularIntensityMapUv:Ge&&_(g.specularIntensityMap.channel),transmissionMapUv:We&&_(g.transmissionMap.channel),thicknessMapUv:O&&_(g.thicknessMap.channel),alphaMapUv:j&&_(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(yt||B),vertexNormals:!!z.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(ce||j),fog:!!P,useFog:g.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&yt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:pe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ce&&g.map.isVideoTexture===!0&&_t.getTransfer(g.map.colorSpace)===Rt,decodeVideoTextureEmissive:Yt&&g.emissiveMap.isVideoTexture===!0&&_t.getTransfer(g.emissiveMap.colorSpace)===Rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===vn,flipSided:g.side===An,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:oe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&g.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)b.push(R),b.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(d(b,g),M(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function M(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function w(g){const b=p[g.type];let R;if(b){const D=si[b];R=xm.clone(D.uniforms)}else R=g.uniforms;return R}function x(g,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new iv(i,b,g,r),c.push(R),u.set(b,R)),R}function y(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function T(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:T}}function cv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,_,S,m,d){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:_,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},i[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=_,M.materialVariant=o(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function l(h,p,_,S,m,d,M){M.reversedDepth===!0&&(m=-m);const w=a(h,p,_,S,m,d);_.transmission>0?n.push(w):_.transparent===!0?r.push(w):t.push(w)}function c(h,p,_,S,m,d){const M=a(h,p,_,S,m,d);_.transmission>0?n.unshift(M):_.transparent===!0?r.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||uv),n.length>1&&n.sort(p||sh),r.length>1&&r.sort(p||sh)}function f(){for(let h=e,p=i.length;h<p;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function hv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new oh,i.set(n,[o])):r>=s.length?(o=new oh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function dv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pv=0;function mv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gv(i){const e=new fv,t=dv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new lt,o=new lt;function a(c){let u=0,f=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,_=0,S=0,m=0,d=0,M=0,w=0,x=0,y=0,A=0,T=0,g=0,b=0,R=0;c.sort(mv);for(let I=0,U=c.length;I<U;I++){const P=c[I],z=P.color,G=P.intensity,Z=P.distance;let se=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===qi?se=P.shadow.map.texture:se=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*G,f+=z.g*G,h+=z.b*G;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],G);R++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,re=t.get(P);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=re,n.sunShadowMap[_]=se;const ye=Q.getViewportCount();for(let pe=0;pe<ye;pe++)n.sunShadowMatrix[S+pe]=Q.getMatrix(pe),n.sunShadowCascade[S+pe]=Q._cascadeData[pe];S+=ye,_++}n.sun[p]=q,p++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,re=t.get(P);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=P.shadow.matrix,y++}n.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(z).multiplyScalar(G),q.distance=Z,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;const Q=P.shadow;if(P.map&&(n.spotLightMap[g]=P.map,g++,Q.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[M]=Q.matrix,P.castShadow){const re=t.get(P);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,n.spotShadow[M]=re,n.spotShadowMap[M]=se,T++}M++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(z).multiplyScalar(G),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=q,w++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Q=P.shadow,re=t.get(P);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,re.shadowCameraNear=Q.camera.near,re.shadowCameraFar=Q.camera.far,n.pointShadow[d]=re,n.pointShadowMap[d]=se,n.pointShadowMatrix[d]=P.shadow.matrix,A++}n.point[d]=q,d++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(G),q.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[x]=q,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==M||D.rectAreaLength!==w||D.hemiLength!==x||D.numSunShadows!==_||D.numDirectionalShadows!==y||D.numPointShadows!==A||D.numSpotShadows!==T||D.numSpotMaps!==g||D.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=d,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+g-b,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,D.sunLength=p,D.directionalLength=m,D.pointLength=d,D.spotLength=M,D.rectAreaLength=w,D.hemiLength=x,D.numSunShadows=_,D.numDirectionalShadows=y,D.numPointShadows=A,D.numSpotShadows=T,D.numSpotMaps=g,D.numLightProbes=R,n.version=pv++)}function l(c,u){let f=0,h=0,p=0,_=0,S=0,m=0;const d=u.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const x=c[M];if(x.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(d),f++}else if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),h++}else if(x.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),_++}else if(x.isRectAreaLight){const y=n.rectArea[S];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),S++}else if(x.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:n}}function ah(i){const e=new gv(i),t=[],n=[],r=[];function s(h){f.camera=h,t.length=0,n.length=0,r.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _v(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ah(i),e.set(r,[a])):s>=o.length?(a=new ah(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
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
}`,Sv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Mv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],lh=new lt,cs=new N,Ja=new N;function yv(i,e,t){let n=new Sc;const r=new _e,s=new _e,o=new Wt,a=new ym,l=new bm,c={},u=t.maxTextureSize,f={[Xi]:An,[An]:Xi,[vn]:vn},h=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:xv,fragmentShader:vv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Tt;_.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new pn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let d=this.type;this.render=function(A,T,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===fd&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fo);const b=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Mi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=d!==this.type;U&&T.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=A.length;P<z;P++){const G=A[P],Z=G.shadow;if(Z===void 0){Ve("WebGLShadowMap:",G,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const se=Z.getFrameExtents();r.multiply(se),s.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,Z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,Z.mapSize.y=s.y));const q=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=q,Z.map===null||U===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ds){if(G.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new ei(r.x,r.y,{format:qi,type:In,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),Z.map.texture.name=G.name+".shadowMap",Z.map.depthTexture=new Ls(r.x,r.y,Dn),Z.map.depthTexture.name=G.name+".shadowMapDepth",Z.map.depthTexture.format=bi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=un,Z.map.depthTexture.magFilter=un}else G.isPointLight?(Z.map=new Ef(r.x),Z.map.depthTexture=new Bp(r.x,ci)):(Z.map=new ei(r.x,r.y),Z.map.depthTexture=new Ls(r.x,r.y,ci)),Z.map.depthTexture.name=G.name+".shadowMap",Z.map.depthTexture.format=bi,this.type===Fo?(Z.map.depthTexture.compareFunction=q?mc:pc,Z.map.depthTexture.minFilter=Kt,Z.map.depthTexture.magFilter=Kt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=un,Z.map.depthTexture.magFilter=un);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);const Q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();G.isPointLight!==!0&&Z.updateMatrices(G,g);for(let re=0;re<Q;re++){const ye=Z.getCamera(re);if(G.isPointLight){const pe=Z.camera,je=Z.matrix,et=G.distance||pe.far;et!==pe.far&&(pe.far=et,pe.updateProjectionMatrix()),cs.setFromMatrixPosition(G.matrixWorld),pe.position.copy(cs),Ja.copy(pe.position),Ja.add(Sv[re]),pe.up.copy(Mv[re]),pe.lookAt(Ja),pe.updateMatrixWorld(),je.makeTranslation(-cs.x,-cs.y,-cs.z),lh.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(lh,pe.coordinateSystem,pe.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,re),i.clear();else{re===0&&(i.setRenderTarget(Z.map),i.clear());const pe=Z.getViewport(re);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),I.viewport(o)}n=Z.getFrustum(re),x(T,g,ye,G,this.type)}Z.isPointLightShadow!==!0&&this.type===ds&&M(Z,g),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,R,D)};function M(A,T){const g=e.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new ei(r.x,r.y,{format:qi,type:In}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,g,h,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,g,p,S,null)}function w(A,T,g,b){let R=null;const D=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)R=D;else if(R=g.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=R.uuid,U=T.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let z=P[U];z===void 0&&(z=R.clone(),P[U]=z,T.addEventListener("dispose",y)),R=z}if(R.visible=T.visible,R.wireframe=T.wireframe,b===ds?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:f[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,g.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=i.properties.get(R);I.light=g}return R}function x(A,T,g,b,R){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===ds)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);const U=e.update(A),P=A.material;if(Array.isArray(P)){const z=U.groups;for(let G=0,Z=z.length;G<Z;G++){const se=z[G],q=P[se.materialIndex];if(q&&q.visible){const Q=w(A,q,b,R);A.onBeforeShadow(i,A,T,g,U,Q,se),i.renderBufferDirect(g,null,U,Q,A,se),A.onAfterShadow(i,A,T,g,U,Q,se)}}}else if(P.visible){const z=w(A,P,b,R);A.onBeforeShadow(i,A,T,g,U,z,null),i.renderBufferDirect(g,null,U,z,A,null),A.onAfterShadow(i,A,T,g,U,z,null)}}const I=A.children;for(let U=0,P=I.length;U<P;U++)x(I[U],T,g,b,R)}function y(A){A.target.removeEventListener("dispose",y);for(const g in c){const b=c[g],R=A.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function bv(i,e){function t(){let O=!1;const de=new Wt;let j=null;const he=new Wt(0,0,0,0);return{setMask:function(me){j!==me&&!O&&(i.colorMask(me,me,me,me),j=me)},setLocked:function(me){O=me},setClear:function(me,oe,Fe,Ie,It){It===!0&&(me*=Ie,oe*=Ie,Fe*=Ie),de.set(me,oe,Fe,Ie),he.equals(de)===!1&&(i.clearColor(me,oe,Fe,Ie),he.copy(de))},reset:function(){O=!1,j=null,he.set(-1,0,0,0)}}}function n(){let O=!1,de=!1,j=null,he=null,me=null;return{setReversed:function(oe){if(de!==oe){const Fe=e.get("EXT_clip_control");oe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),de=oe;const Ie=me;me=null,this.setClear(Ie)}},getReversed:function(){return de},setTest:function(oe){oe?ie(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(oe){j!==oe&&!O&&(i.depthMask(oe),j=oe)},setFunc:function(oe){if(de&&(oe=Yd[oe]),he!==oe){switch(oe){case cl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=oe}},setLocked:function(oe){O=oe},setClear:function(oe){me!==oe&&(me=oe,de&&(oe=1-oe),i.clearDepth(oe))},reset:function(){O=!1,j=null,he=null,me=null,de=!1}}}function r(){let O=!1,de=null,j=null,he=null,me=null,oe=null,Fe=null,Ie=null,It=null;return{setTest:function(tt){O||(tt?ie(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(tt){de!==tt&&!O&&(i.stencilMask(tt),de=tt)},setFunc:function(tt,Sn,Mn){(j!==tt||he!==Sn||me!==Mn)&&(i.stencilFunc(tt,Sn,Mn),j=tt,he=Sn,me=Mn)},setOp:function(tt,Sn,Mn){(oe!==tt||Fe!==Sn||Ie!==Mn)&&(i.stencilOp(tt,Sn,Mn),oe=tt,Fe=Sn,Ie=Mn)},setLocked:function(tt){O=tt},setClear:function(tt){It!==tt&&(i.clearStencil(tt),It=tt)},reset:function(){O=!1,de=null,j=null,he=null,me=null,oe=null,Fe=null,Ie=null,It=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,_=[],S=null,m=!1,d=null,M=null,w=null,x=null,y=null,A=null,T=null,g=new ze(0,0,0),b=0,R=!1,D=null,I=null,U=null,P=null,z=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,se=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=se>=2);let Q=null,re={};const ye=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),je=new Wt().fromArray(ye),et=new Wt().fromArray(pe);function ct(O,de,j,he){const me=new Uint8Array(4),oe=i.createTexture();i.bindTexture(O,oe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<j;Fe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(de+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return oe}const K={};K[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Es),Ke(!1),yt($c),ie(i.CULL_FACE),ut(Mi);function ie(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function be(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function He(O,de){return h[O]!==de?(i.bindFramebuffer(O,de),h[O]=de,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Se(O,de){let j=_,he=!1;if(O){j=p.get(de),j===void 0&&(j=[],p.set(de,j));const me=O.textures;if(j.length!==me.length||j[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Fe=me.length;oe<Fe;oe++)j[oe]=i.COLOR_ATTACHMENT0+oe;j.length=me.length,he=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,he=!0);he&&i.drawBuffers(j)}function ce(O){return S!==O?(i.useProgram(O),S=O,!0):!1}const Lt={[Pr]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};Lt[gd]=i.MIN,Lt[_d]=i.MAX;const $e={[xd]:i.ZERO,[vd]:i.ONE,[Sd]:i.SRC_COLOR,[Fh]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[yd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Bh]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(O,de,j,he,me,oe,Fe,Ie,It,tt){if(O===Mi){m===!0&&(be(i.BLEND),m=!1);return}if(m===!1&&(ie(i.BLEND),m=!0),O!==dd){if(O!==d||tt!==R){if((M!==Pr||y!==Pr)&&(i.blendEquation(i.FUNC_ADD),M=Pr,y=Pr),tt)switch(O){case Nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:gt("WebGLState: Invalid blending: ",O);break}else switch(O){case Nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kc:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",O);break}w=null,x=null,A=null,T=null,g.set(0,0,0),b=0,d=O,R=tt}return}me=me||de,oe=oe||j,Fe=Fe||he,(de!==M||me!==y)&&(i.blendEquationSeparate(Lt[de],Lt[me]),M=de,y=me),(j!==w||he!==x||oe!==A||Fe!==T)&&(i.blendFuncSeparate($e[j],$e[he],$e[oe],$e[Fe]),w=j,x=he,A=oe,T=Fe),(Ie.equals(g)===!1||It!==b)&&(i.blendColor(Ie.r,Ie.g,Ie.b,It),g.copy(Ie),b=It),d=O,R=!1}function vt(O,de){O.side===vn?be(i.CULL_FACE):ie(i.CULL_FACE);let j=O.side===An;de&&(j=!j),Ke(j),O.blending===Nr&&O.transparent===!1?ut(Mi):ut(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const he=O.stencilWrite;a.setTest(he),he&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function yt(O){O!==ud?(ie(i.CULL_FACE),O!==I&&(O===$c?i.cullFace(i.BACK):O===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),I=O}function bt(O){O!==U&&(Z&&i.lineWidth(O),U=O)}function Yt(O,de,j){O?(ie(i.POLYGON_OFFSET_FILL),(P!==de||z!==j)&&(P=de,z=j,o.getReversed()&&(de=-de),i.polygonOffset(de,j))):be(i.POLYGON_OFFSET_FILL)}function Dt(O){O?ie(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Ot(O){O===void 0&&(O=i.TEXTURE0+G-1),Q!==O&&(i.activeTexture(O),Q=O)}function B(O,de,j){j===void 0&&(Q===null?j=i.TEXTURE0+G-1:j=Q);let he=re[j];he===void 0&&(he={type:void 0,texture:void 0},re[j]=he),(he.type!==O||he.texture!==de)&&(Q!==j&&(i.activeTexture(j),Q=j),i.bindTexture(O,de||K[O]),he.type=O,he.texture=de)}function qt(){const O=re[Q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function v(){try{i.texSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function le(){try{i.texStorage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function fe(){try{i.texStorage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function te(){try{i.texImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function ue(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function we(O,de){f[O]!==de&&(i.pixelStorei(O,de),f[O]=de)}function ne(O){je.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),je.copy(O))}function W(O){et.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function De(O,de){let j=c.get(de);j===void 0&&(j=new WeakMap,c.set(de,j));let he=j.get(O);he===void 0&&(he=i.getUniformBlockIndex(de,O.name),j.set(O,he))}function Ge(O,de){const he=c.get(de).get(O);l.get(de)!==he&&(i.uniformBlockBinding(de,he,O.__bindingPointIndex),l.set(de,he))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,re={},h={},p=new WeakMap,_=[],S=null,m=!1,d=null,M=null,w=null,x=null,y=null,A=null,T=null,g=new ze(0,0,0),b=0,R=!1,D=null,I=null,U=null,P=null,z=null,je.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:be,bindFramebuffer:He,drawBuffers:Se,useProgram:ce,setBlending:ut,setMaterial:vt,setFlipSided:Ke,setCullFace:yt,setLineWidth:bt,setPolygonOffset:Yt,setScissorTest:Dt,activeTexture:Ot,bindTexture:B,unbindTexture:qt,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:J,texImage3D:te,pixelStorei:we,getParameter:ue,updateUBOMapping:De,uniformBlockBinding:Ge,texStorage2D:le,texStorage3D:fe,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:ne,viewport:W,reset:We}}function Ev(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,v){return _?new OffscreenCanvas(C,v):Cs("canvas")}function m(C,v,H){let X=1;const $=rt(C);if(($.width>H||$.height>H)&&(X=H/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const le=Math.floor(X*$.width),fe=Math.floor(X*$.height);h===void 0&&(h=S(le,fe));const J=v?S(le,fe):h;return J.width=le,J.height=fe,J.getContext("2d").drawImage(C,0,0,le,fe),Ve("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+le+"x"+fe+")."),J}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function d(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,v,H,X,$,le=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;X&&(fe=e.get("EXT_texture_norm16"),fe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8),H===i.UNSIGNED_SHORT&&fe&&(J=fe.R16_EXT),H===i.SHORT&&fe&&(J=fe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),v===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8),H===i.UNSIGNED_SHORT&&fe&&(J=fe.RG16_EXT),H===i.SHORT&&fe&&(J=fe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&fe&&(J=fe.RGB16_EXT),H===i.SHORT&&fe&&(J=fe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){const te=le?Zo:_t.getTransfer($);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=te===Rt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&fe&&(J=fe.RGBA16_EXT),H===i.SHORT&&fe&&(J=fe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(C,v){let H;return C?v===null||v===ci||v===As?H=i.DEPTH24_STENCIL8:v===Dn?H=i.DEPTH32F_STENCIL8:v===ws&&(H=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===As?H=i.DEPTH_COMPONENT24:v===Dn?H=i.DEPTH_COMPONENT32F:v===ws&&(H=i.DEPTH_COMPONENT16),H}function A(C,v){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function T(C){const v=C.target;v.removeEventListener("dispose",T),b(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function g(C){const v=C.target;v.removeEventListener("dispose",g),D(v)}function b(C){const v=n.get(C);if(v.__webglInit===void 0)return;const H=C.source,X=p.get(H);if(X){const $=X[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(X).length===0&&p.delete(H)}n.remove(C)}function R(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const H=C.source,X=p.get(H);delete X[v.__cacheKey],o.memory.textures--}function D(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let $=0;$<v.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[X][$]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=C.textures;for(let X=0,$=H.length;X<$;X++){const le=n.get(H[X]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(H[X])}n.remove(C)}let I=0;function U(){I=0}function P(){return I}function z(C){I=C}function G(){const C=I;return C>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function Z(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function se(C,v){const H=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const X=C.image;if(X===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{be(H,C,v);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function q(C,v){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){be(H,C,v);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function Q(C,v){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){be(H,C,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function re(C,v){const H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){He(H,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const ye={[gl]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[_l]:i.MIRRORED_REPEAT},pe={[un]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[to]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},je={[Fd]:i.NEVER,[kd]:i.ALWAYS,[Bd]:i.LESS,[pc]:i.LEQUAL,[zd]:i.EQUAL,[mc]:i.GEQUAL,[Hd]:i.GREATER,[Gd]:i.NOTEQUAL};function et(C,v){if(v.type===Dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Kt||v.magFilter===_a||v.magFilter===to||v.magFilter===Ni||v.minFilter===Kt||v.minFilter===_a||v.minFilter===to||v.minFilter===Ni)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ye[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ye[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ye[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pe[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,je[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==to&&v.minFilter!==Ni||v.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ct(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",T));const X=v.source;let $=p.get(X);$===void 0&&($={},p.set(X,$));const le=Z(v);if(le!==C.__cacheKey){$[le]===void 0&&($[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),$[le].usedTimes++;const fe=$[C.__cacheKey];fe!==void 0&&($[C.__cacheKey].usedTimes--,fe.usedTimes===0&&R(v)),C.__cacheKey=le,C.__webglTexture=$[le].texture}return H}function K(C,v,H){return Math.floor(Math.floor(C/H)/v)}function ie(C,v,H,X){const le=C.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,X,v.data);else{le.sort((we,ne)=>we.start-ne.start);let fe=0;for(let we=1;we<le.length;we++){const ne=le[fe],W=le[we],De=ne.start+ne.count,Ge=K(W.start,v.width,4),We=K(ne.start,v.width,4);W.start<=De+1&&Ge===We&&K(W.start+W.count-1,v.width,4)===Ge?ne.count=Math.max(ne.count,W.start+W.count-ne.start):(++fe,le[fe]=W)}le.length=fe+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let we=0,ne=le.length;we<ne;we++){const W=le[we],De=Math.floor(W.start/4),Ge=Math.ceil(W.count/4),We=De%v.width,O=Math.floor(De/v.width),de=Ge,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,We,O,de,j,H,X,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function be(C,v,H){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const $=ct(C,v),le=v.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+H);const fe=n.get(le);if(le.version!==fe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=_t.getPrimaries(_t.workingColorSpace),he=v.colorSpace===Ii?null:_t.getPrimaries(v.colorSpace),me=v.colorSpace===Ii||j===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let te=m(v.image,!1,r.maxTextureSize);te=qt(v,te);const ue=s.convert(v.format,v.colorSpace),we=s.convert(v.type);let ne=x(v.internalFormat,ue,we,v.normalized,v.colorSpace,v.isVideoTexture);et(X,v);let W;const De=v.mipmaps,Ge=v.isVideoTexture!==!0,We=fe.__version===void 0||$===!0,O=le.dataReady,de=A(v,te);if(v.isDepthTexture)ne=y(v.format===Vi,v.type),We&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,ue,we,null));else if(v.isDataTexture)if(De.length>0){Ge&&We&&t.texStorage2D(i.TEXTURE_2D,de,ne,De[0].width,De[0].height);for(let j=0,he=De.length;j<he;j++)W=De[j],Ge?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,W.width,W.height,ue,we,W.data):t.texImage2D(i.TEXTURE_2D,j,ne,W.width,W.height,0,ue,we,W.data);v.generateMipmaps=!1}else Ge?(We&&t.texStorage2D(i.TEXTURE_2D,de,ne,te.width,te.height),O&&ie(v,te,ue,we)):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,ue,we,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ge&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ne,De[0].width,De[0].height,te.depth);for(let j=0,he=De.length;j<he;j++)if(W=De[j],v.format!==jn)if(ue!==null)if(Ge){if(O)if(v.layerUpdates.size>0){const me=Hu(W.width,W.height,v.format,v.type);for(const oe of v.layerUpdates){const Fe=W.data.subarray(oe*me/W.data.BYTES_PER_ELEMENT,(oe+1)*me/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,oe,W.width,W.height,1,ue,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,W.width,W.height,te.depth,ue,W.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ne,W.width,W.height,te.depth,0,W.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,W.width,W.height,te.depth,ue,we,W.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ne,W.width,W.height,te.depth,0,ue,we,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ge&&We&&t.texStorage2D(i.TEXTURE_2D,de,ne,De[0].width,De[0].height);for(let j=0,he=De.length;j<he;j++)W=De[j],v.format!==jn?ue!==null?Ge?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,W.width,W.height,ue,W.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ne,W.width,W.height,0,W.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,W.width,W.height,ue,we,W.data):t.texImage2D(i.TEXTURE_2D,j,ne,W.width,W.height,0,ue,we,W.data)}else if(v.isDataArrayTexture)if(Ge){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ne,te.width,te.height,te.depth),O)if(v.layerUpdates.size>0){const j=Hu(te.width,te.height,v.format,v.type);for(const he of v.layerUpdates){const me=te.data.subarray(he*j/te.data.BYTES_PER_ELEMENT,(he+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,te.width,te.height,1,ue,we,me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,we,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,ue,we,te.data);else if(v.isData3DTexture)Ge?(We&&t.texStorage3D(i.TEXTURE_3D,de,ne,te.width,te.height,te.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,we,te.data)):t.texImage3D(i.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,ue,we,te.data);else if(v.isFramebufferTexture){if(We)if(Ge)t.texStorage2D(i.TEXTURE_2D,de,ne,te.width,te.height);else{let j=te.width,he=te.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,ne,j,he,0,ue,we,null),j>>=1,he>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),te.parentNode!==j){j.appendChild(te),f.add(v),j.onpaint=he=>{const me=he.changedElements;for(const oe of f)me.includes(oe.image)&&(oe.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const me=i.RGBA,oe=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,oe,Fe,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ge&&We){const j=rt(De[0]);t.texStorage2D(i.TEXTURE_2D,de,ne,j.width,j.height)}for(let j=0,he=De.length;j<he;j++)W=De[j],Ge?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue,we,W):t.texImage2D(i.TEXTURE_2D,j,ne,ue,we,W);v.generateMipmaps=!1}else if(Ge){if(We){const j=rt(te);t.texStorage2D(i.TEXTURE_2D,de,ne,j.width,j.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,we,te)}else t.texImage2D(i.TEXTURE_2D,0,ne,ue,we,te);d(v)&&M(X),fe.__version=le.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function He(C,v,H){if(v.image.length!==6)return;const X=ct(C,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const le=n.get($);if($.version!==le.__version||X===!0){t.activeTexture(i.TEXTURE0+H);const fe=_t.getPrimaries(_t.workingColorSpace),J=v.colorSpace===Ii?null:_t.getPrimaries(v.colorSpace),te=v.colorSpace===Ii||fe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=v.isCompressedTexture||v.image[0].isCompressedTexture,we=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let oe=0;oe<6;oe++)!ue&&!we?ne[oe]=m(v.image[oe],!0,r.maxCubemapSize):ne[oe]=we?v.image[oe].image:v.image[oe],ne[oe]=qt(v,ne[oe]);const W=ne[0],De=s.convert(v.format,v.colorSpace),Ge=s.convert(v.type),We=x(v.internalFormat,De,Ge,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,de=le.__version===void 0||X===!0,j=$.dataReady;let he=A(v,W);et(i.TEXTURE_CUBE_MAP,v);let me;if(ue){O&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,We,W.width,W.height);for(let oe=0;oe<6;oe++){me=ne[oe].mipmaps;for(let Fe=0;Fe<me.length;Fe++){const Ie=me[Fe];v.format!==jn?De!==null?O?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,We,Ie.width,Ie.height,0,Ie.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Ie.width,Ie.height,De,Ge,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,We,Ie.width,Ie.height,0,De,Ge,Ie.data)}}}else{if(me=v.mipmaps,O&&de){me.length>0&&he++;const oe=rt(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,We,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(we){O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ne[oe].width,ne[oe].height,De,Ge,ne[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,ne[oe].width,ne[oe].height,0,De,Ge,ne[oe].data);for(let Fe=0;Fe<me.length;Fe++){const It=me[Fe].image[oe].image;O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,It.width,It.height,De,Ge,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,We,It.width,It.height,0,De,Ge,It.data)}}else{O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,Ge,ne[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,De,Ge,ne[oe]);for(let Fe=0;Fe<me.length;Fe++){const Ie=me[Fe];O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,De,Ge,Ie.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,We,De,Ge,Ie.image[oe])}}}d(v)&&M(i.TEXTURE_CUBE_MAP),le.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Se(C,v,H,X,$,le){const fe=s.convert(H.format,H.colorSpace),J=s.convert(H.type),te=x(H.internalFormat,fe,J,H.normalized,H.colorSpace),ue=n.get(v),we=n.get(H);if(we.__renderTarget=v,!ue.__hasExternalTextures){const ne=Math.max(1,v.width>>le),W=Math.max(1,v.height>>le);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,le,te,ne,W,v.depth,0,fe,J,null):t.texImage2D($,le,te,ne,W,0,fe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,we.__webglTexture,0,Dt(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,we.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const X=v.depthTexture,$=X&&X.isDepthTexture?X.type:null,le=y(v.stencilBuffer,$),fe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(v),le,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,C)}else{const X=v.textures;for(let $=0;$<X.length;$++){const le=X[$],fe=s.convert(le.format,le.colorSpace),J=s.convert(le.type),te=x(le.internalFormat,fe,J,le.normalized,le.colorSpace);Ot(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(v),te,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(v),te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(C,v,H){const X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),et(i.TEXTURE_CUBE_MAP,v.depthTexture);const ue=s.convert(v.depthTexture.format),we=s.convert(v.depthTexture.type);let ne;v.depthTexture.format===bi?ne=i.DEPTH_COMPONENT24:v.depthTexture.format===Vi&&(ne=i.DEPTH24_STENCIL8);for(let W=0;W<6;W++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ne,v.width,v.height,0,ue,we,null)}}else se(v.depthTexture,0);const le=$.__webglTexture,fe=Dt(v),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,te=v.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===bi)Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,le,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,le,0);else if(v.depthTexture.format===Vi)Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,le,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(C){const v=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=X}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)Lt(v.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Lt(v.__webglFramebuffer[0],C,0):Lt(v.__webglFramebuffer,C,0)}else if(H){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),ce(v.__webglDepthbuffer[X],C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,le)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ce(v.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,v,H){const X=n.get(C);v!==void 0&&Se(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&$e(C)}function vt(C){const v=C.texture,H=n.get(C),X=n.get(v);C.addEventListener("dispose",g);const $=C.textures,le=C.isWebGLCubeRenderTarget===!0,fe=$.length>1;if(fe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,o.memory.textures++),le){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let te=0;te<v.mipmaps.length;te++)H.__webglFramebuffer[J][te]=i.createFramebuffer()}else H.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)H.__webglFramebuffer[J]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(fe)for(let J=0,te=$.length;J<te;J++){const ue=n.get($[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ot(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const te=$[J];H.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const ue=s.convert(te.format,te.colorSpace),we=s.convert(te.type),ne=x(te.internalFormat,ue,we,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),W=Dt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,ne,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,H.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),et(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Se(H.__webglFramebuffer[J][te],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else Se(H.__webglFramebuffer[J],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let J=0,te=$.length;J<te;J++){const ue=$[J],we=n.get(ue);let ne=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,we.__webglTexture),et(ne,ue),Se(H.__webglFramebuffer,C,ue,i.COLOR_ATTACHMENT0+J,ne,0),d(ue)&&M(ne)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),et(J,v),v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Se(H.__webglFramebuffer[te],C,v,i.COLOR_ATTACHMENT0,J,te);else Se(H.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,J,0);d(v)&&M(J),t.unbindTexture()}C.depthBuffer&&$e(C)}function Ke(C){const v=C.textures;for(let H=0,X=v.length;H<X;H++){const $=v[H];if(d($)){const le=w(C),fe=n.get($).__webglTexture;t.bindTexture(le,fe),M(le),t.unbindTexture()}}}const yt=[],bt=[];function Yt(C){if(C.samples>0){if(Ot(C)===!1){const v=C.textures,H=C.width,X=C.height;let $=i.COLOR_BUFFER_BIT;const le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(C),J=v.length>1;if(J)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ue]);const we=n.get(v[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,H,X,0,0,H,X,$,i.NEAREST),l===!0&&(yt.length=0,bt.length=0,yt.push(i.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(yt.push(le),bt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ue]);const we=n.get(v[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Dt(C){return Math.min(r.maxSamples,C.samples)}function Ot(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function B(C){const v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function qt(C,v){const H=C.colorSpace,X=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ts&&H!==Ii&&(_t.getTransfer(H)===Rt?(X!==jn||$!==Ln)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",H)),v}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.getTextureUnits=P,this.setTextureUnits=z,this.setTexture2D=se,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=re,this.rebindTextures=ut,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wv(i,e){function t(n,r=Ii){let s;const o=_t.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return i.BYTE;if(n===Zh)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Jh)return i.ALPHA;if(n===Qh)return i.RGB;if(n===jn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===hc)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===dc)return i.RGBA_INTEGER;if(n===zo||n===Ho||n===Go||n===ko)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===vl||n===Sl||n===Ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===bl||n===El||n===wl||n===Al||n===Yo||n===Tl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yl||n===bl)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===El)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return s.COMPRESSED_R11_EAC;if(n===Al)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Yo)return s.COMPRESSED_RG11_EAC;if(n===Tl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Ll||n===Dl||n===Il||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===zl||n===Hl||n===Gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kl||n===Vl||n===Wl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===kl)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===Yl||n===qo||n===ql)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
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

}`;class Rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ui({vertexShader:Av,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cv extends Ki{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Rv,d={},M=t.getContextAttributes();let w=null,x=null;const y=[],A=[],T=new _e;let g=null,b=null;const R=new Fn;R.viewport=new Wt;const D=new Fn;D.viewport=new Wt;const I=[R,D],U=new Om;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=y[K];return ie===void 0&&(ie=new Ea,y[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=y[K];return ie===void 0&&(ie=new Ea,y[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=y[K];return ie===void 0&&(ie=new Ea,y[K]=ie),ie.getHandSpace()};function G(K){const ie=A.indexOf(K.inputSource);if(ie===-1)return;const be=y[ie];be!==void 0&&(be.update(K.inputSource,K.frame,c||o),be.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",se);for(let K=0;K<y.length;K++){const ie=A[K];ie!==null&&(A[K]=null,y[K].disconnect(ie))}P=null,z=null,m.reset();for(const K in d)delete d[K];if(e.setRenderTarget(w),p=null,h=null,f=null,r=null,x=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(T.width,T.height,!1),b!==null){const K=b.camera;K.fov=b.fov,K.zoom=b.zoom,K.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",se),M.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=M.stencil?Vi:bi,He=M.stencil?As:ci);const ce={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ei(h.textureWidth,h.textureHeight,{format:jn,type:Ln,depthTexture:new Ls(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ei(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(K){for(let ie=0;ie<K.removed.length;ie++){const be=K.removed[ie],He=A.indexOf(be);He>=0&&(A[He]=null,y[He].disconnect(be))}for(let ie=0;ie<K.added.length;ie++){const be=K.added[ie];let He=A.indexOf(be);if(He===-1){for(let ce=0;ce<y.length;ce++)if(ce>=A.length){A.push(be),He=ce;break}else if(A[ce]===null){A[ce]=be,He=ce;break}if(He===-1)break}const Se=y[He];Se&&Se.connect(be)}}const q=new N,Q=new N;function re(K,ie,be){q.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(be.matrixWorld);const He=q.distanceTo(Q),Se=ie.projectionMatrix.elements,ce=be.projectionMatrix.elements,Lt=Se[14]/(Se[10]-1),$e=Se[14]/(Se[10]+1),ut=(Se[9]+1)/Se[5],vt=(Se[9]-1)/Se[5],Ke=(Se[8]-1)/Se[0],yt=(ce[8]+1)/ce[0],bt=Lt*Ke,Yt=Lt*yt,Dt=He/(-Ke+yt),Ot=Dt*-Ke;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ot),K.translateZ(Dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const B=Lt+Dt,qt=$e+Dt,rt=bt-Ot,C=Yt+(He-Ot),v=ut*$e/qt*B,H=vt*$e/qt*B;K.projectionMatrix.makePerspective(rt,C,v,H,B,qt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ye(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,be=K.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(be=m.depthFar)),U.near=D.near=R.near=ie,U.far=D.far=R.far=be,(P!==U.near||z!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,z=U.far),U.layers.mask=K.layers.mask|6,R.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;const He=K.parent,Se=U.cameras;ye(U,He);for(let ce=0;ce<Se.length;ce++)ye(Se[ce],He);Se.length===2?re(U,R,D):U.projectionMatrix.copy(R.projectionMatrix),b===null&&K.isPerspectiveCamera&&(b={camera:K,fov:K.fov,zoom:K.zoom}),pe(K,U,He)};function pe(K,ie,be){be===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return d[K]};let je=null;function et(K,ie){if(u=ie.getViewerPose(c||o),_=ie,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let He=!1;be.length!==U.cameras.length&&(U.cameras.length=0,He=!0);for(let $e=0;$e<be.length;$e++){const ut=be[$e];let vt=null;if(p!==null)vt=p.getViewport(ut);else{const yt=f.getViewSubImage(h,ut);vt=yt.viewport,$e===0&&(e.setRenderTargetTextures(x,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(x))}let Ke=I[$e];Ke===void 0&&(Ke=new Fn,Ke.layers.enable($e),Ke.viewport=new Wt,I[$e]=Ke),Ke.matrix.fromArray(ut.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ut.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(vt.x,vt.y,vt.width,vt.height),$e===0&&(U.matrix.copy(Ke.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),He===!0&&U.cameras.push(Ke)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const $e=f.getDepthInformation(be[0]);$e&&$e.isValid&&$e.texture&&m.init($e,r.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let $e=0;$e<be.length;$e++){const ut=be[$e].camera;if(ut){let vt=d[ut];vt||(vt=new cf,d[ut]=vt);const Ke=f.getCameraImage(ut);vt.sourceTexture=Ke}}}}for(let be=0;be<y.length;be++){const He=A[be],Se=y[be];He!==null&&Se!==void 0&&Se.update(He,ie,c||o)}je&&je(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const ct=new yf;ct.setAnimationLoop(et),this.setAnimationLoop=function(K){je=K},this.dispose=function(){}}}const Pv=new lt,Cf=new Ze;Cf.set(-1,0,0,0,1,0,0,0,1);function Lv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,vf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,w,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===An&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===An&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),w=M.envMap,x=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===An&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Dv(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const A=y.program;n.uniformBlockBinding(x,A)}function c(x,y){let A=r[x.id];A===void 0&&(m(x),A=u(x),r[x.id]=A,x.addEventListener("dispose",M));const T=y.program;n.updateUBOMapping(x,T);const g=e.render.frame;s[x.id]!==g&&(h(x),s[x.id]=g)}function u(x){const y=f();x.__bindingPointIndex=y;const A=i.createBuffer(),T=x.__size,g=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,T,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],A=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let g=0,b=A.length;g<b;g++){const R=A[g];if(Array.isArray(R))for(let D=0,I=R.length;D<I;D++)p(R[D],g,D,T);else p(R,g,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,A,T){if(S(x,y,A,T)===!0){const g=x.__offset,b=x.value;if(Array.isArray(b)){let R=0;for(let D=0;D<b.length;D++){const I=b[D],U=d(I);_(I,x.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,x.__data)}}function _(x,y,A){typeof x=="number"||typeof x=="boolean"?y[0]=x:x.isMatrix3?(y[0]=x.elements[0],y[1]=x.elements[1],y[2]=x.elements[2],y[3]=0,y[4]=x.elements[3],y[5]=x.elements[4],y[6]=x.elements[5],y[7]=0,y[8]=x.elements[6],y[9]=x.elements[7],y[10]=x.elements[8],y[11]=0):ArrayBuffer.isView(x)?y.set(new x.constructor(x.buffer,x.byteOffset,y.length)):x.toArray(y,A)}function S(x,y,A,T){const g=x.value,b=y+"_"+A;if(T[b]===void 0)return typeof g=="number"||typeof g=="boolean"?T[b]=g:ArrayBuffer.isView(g)?T[b]=g.slice():T[b]=g.clone(),!0;{const R=T[b];if(typeof g=="number"||typeof g=="boolean"){if(R!==g)return T[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(R.equals(g)===!1)return R.copy(g),!0}}return!1}function m(x){const y=x.uniforms;let A=0;const T=16;for(let b=0,R=y.length;b<R;b++){const D=Array.isArray(y[b])?y[b]:[y[b]];for(let I=0,U=D.length;I<U;I++){const P=D[I],z=Array.isArray(P.value)?P.value:[P.value];for(let G=0,Z=z.length;G<Z;G++){const se=z[G],q=d(se),Q=A%T,re=Q%q.boundary,ye=Q+re;A+=re,ye!==0&&T-ye<q.storage&&(A+=T-ye),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=q.storage}}}const g=A%T;return g>0&&(A+=T-g),x.__size=A,x.__cache={},this}function d(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),y}function M(x){const y=x.target;y.removeEventListener("dispose",M);const A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function w(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:w}}const Iv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function Nv(){return ii===null&&(ii=new Jo(Iv,16,16,qi,In),ii.name="DFG_LUT",ii.minFilter=Kt,ii.magFilter=Kt,ii.wrapS=Qn,ii.wrapT=Qn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class Uv{constructor(e={}){const{canvas:t=Wd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Ln}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const S=p,m=new Set([dc,fc,hc]),d=new Set([Ln,ci,ws,As,lc,cc]),M=new Uint32Array(4),w=new Int32Array(4),x=new N;let y=null,A=null;const T=[],g=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,I=null,U=null,P=null,z=null;this._outputColorSpace=on;let G=0,Z=0,se=null,q=-1,Q=null;const re=new Wt,ye=new Wt;let pe=null;const je=new ze(0);let et=0,ct=t.width,K=t.height,ie=1,be=null,He=null;const Se=new Wt(0,0,ct,K),ce=new Wt(0,0,ct,K);let Lt=!1;const $e=new Sc;let ut=!1,vt=!1;const Ke=new lt,yt=new N,bt=new Wt,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Ot(){return se===null?ie:1}let B=n;function qt(E,F){return t.getContext(E,F)}let rt,C,v,H,X,$,le,fe,J,te,ue,we,ne,W,De,Ge,We,O,de,j,he,me,oe;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),B===null){const F="webgl2";if(B=qt(F,E),B===null)throw qt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(E){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),gt("WebGLRenderer: "+E.message),E}function Fe(){rt=new N_(B),rt.init(),he=new wv(B,rt),C=new E_(B,rt,e,he),v=new bv(B,rt),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),U=B.createFramebuffer(),P=B.createFramebuffer(),z=B.createFramebuffer(),H=new F_(B),X=new cv,$=new Ev(B,rt,v,X,C,he,H),le=new I_(R),fe=new zm(B),me=new y_(B,fe),J=new U_(B,fe,H,me),te=new z_(B,J,fe,me,H),O=new B_(B,C,$),De=new w_(X),ue=new lv(R,le,rt,C,me,De),we=new Lv(R,X),ne=new hv,W=new _v(rt),We=new M_(R,le,v,te,_,l),Ge=new yv(R,te,C),oe=new Dv(B,H,C,v),de=new b_(B,rt,H),j=new O_(B,rt,H),H.programs=ue.programs,R.capabilities=C,R.extensions=rt,R.properties=X,R.renderLists=ne,R.shadowMap=Ge,R.state=v,R.info=H}S!==Ln&&(b=new G_(S,t.width,t.height,a,r,s));const Ie=new Cv(R,B);this.xr=Ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(ct,K,!1))},this.getSize=function(E){return E.set(ct,K)},this.setSize=function(E,F,Y=!0){if(Ie.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=E,K=F,t.width=Math.floor(E*ie),t.height=Math.floor(F*ie),Y===!0&&(t.style.width=E+"px",t.style.height=F+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ct*ie,K*ie).floor()},this.setDrawingBufferSize=function(E,F,Y){ct=E,K=F,ie=Y,t.width=Math.floor(E*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(S===Ln){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(re)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,F,Y,k){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,F,Y,k),v.viewport(re.copy(Se).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,F,Y,k){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,F,Y,k),v.scissor(ye.copy(ce).multiplyScalar(ie).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(E){v.setScissorTest(Lt=E)},this.setOpaqueSort=function(E){be=E},this.setTransparentSort=function(E){He=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Y=!0){let k=0;if(E){let V=!1;if(se!==null){const xe=se.texture.format;V=m.has(xe)}if(V){const xe=se.texture.type,Pe=d.has(xe),ge=We.getClearColor(),Re=We.getClearAlpha(),Ee=ge.r,Ye=ge.g,Je=ge.b;Pe?(M[0]=Ee,M[1]=Ye,M[2]=Je,M[3]=Re,B.clearBufferuiv(B.COLOR,0,M)):(w[0]=Ee,w[1]=Ye,w[2]=Je,w[3]=Re,B.clearBufferiv(B.COLOR,0,w))}else k|=B.COLOR_BUFFER_BIT}F&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),We.dispose(),ne.dispose(),W.dispose(),X.dispose(),le.dispose(),te.dispose(),me.dispose(),oe.dispose(),ue.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Gs),Ie.removeEventListener("sessionend",Xr),ti.stop()};function It(E){E.preventDefault(),$o("WebGLRenderer: Context Lost."),D=!0}function tt(){$o("WebGLRenderer: Context Restored."),D=!1;const E=H.autoReset,F=Ge.enabled,Y=Ge.autoUpdate,k=Ge.needsUpdate,V=Ge.type;Fe(),H.autoReset=E,Ge.enabled=F,Ge.autoUpdate=Y,Ge.needsUpdate=k,Ge.type=V}function Sn(E){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Mn(E){const F=E.target;F.removeEventListener("dispose",Mn),aa(F)}function aa(E){la(E),X.remove(E)}function la(E){const F=X.get(E).programs;F!==void 0&&(F.forEach(function(Y){ue.releaseProgram(Y)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Y,k,V,xe){F===null&&(F=Yt);const Pe=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=Ws(E,F,Y,k,V);v.setMaterial(k,Pe);let Re=Y.index,Ee=1;if(k.wireframe===!0){if(Re=J.getWireframeAttribute(Y),Re===void 0)return;Ee=2}const Ye=Y.drawRange,Je=Y.attributes.position;let Le=Ye.start*Ee,pt=(Ye.start+Ye.count)*Ee;xe!==null&&(Le=Math.max(Le,xe.start*Ee),pt=Math.min(pt,(xe.start+xe.count)*Ee)),Re!==null?(Le=Math.max(Le,0),pt=Math.min(pt,Re.count)):Je!=null&&(Le=Math.max(Le,0),pt=Math.min(pt,Je.count));const kt=pt-Le;if(kt<0||kt===1/0)return;me.setup(V,k,ge,Y,Re);let Et,wt=de;if(Re!==null&&(Et=fe.get(Re),wt=j,wt.setIndex(Et)),V.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*Ot()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if(V.isLine){let Ft=k.linewidth;Ft===void 0&&(Ft=1),v.setLineWidth(Ft*Ot()),V.isLineSegments?wt.setMode(B.LINES):V.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else V.isPoints?wt.setMode(B.POINTS):V.isSprite&&wt.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))wt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ft=V._multiDrawStarts,Te=V._multiDrawCounts,Jt=V._multiDrawCount,mt=Re?fe.get(Re).bytesPerElement:1,yn=X.get(k).currentProgram.getUniforms();for(let ee=0;ee<Jt;ee++)yn.setValue(B,"_gl_DrawID",ee),wt.render(Ft[ee]/mt,Te[ee])}else if(V.isInstancedMesh)wt.renderInstances(Le,kt,V.count);else if(Y.isInstancedBufferGeometry){const Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,Ft);wt.renderInstances(Le,kt,Te)}else wt.render(Le,kt)};function Wr(E,F,Y,k){I!==null&&E.isNodeMaterial&&I.setObject(k,E),ut===!0&&De.setState(E,Y,!1),E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=An,E.needsUpdate=!0,Tn(E,F,k),E.side=Xi,E.needsUpdate=!0,Tn(E,F,k),E.side=vn):Tn(E,F,k)}this.compile=function(E,F,Y=null){Y===null&&(Y=E),I!==null&&I.renderStart(E,F,Y),A=W.get(Y),A.init(F),g.push(A),Y.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),E!==Y&&E.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights(),I!==null&&I.updateLights(A.state.lightsArray),vt=this.localClippingEnabled,ut=De.init(this.clippingPlanes,vt),ut===!0&&De.setGlobalState(this.clippingPlanes,F),I!==null&&Ge.render(A.state.shadowsArray,Y,F);const k=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){const ge=xe[Pe];Wr(ge,Y,F,V),k.add(ge)}else Wr(xe,Y,F,V),k.add(xe)}),A=g.pop(),I!==null&&I.renderEnd(),k},this.compileAsync=function(E,F,Y=null){const k=this.compile(E,F,Y);return new Promise(V=>{function xe(){if(k.forEach(function(Pe){const Re=X.get(Pe).currentProgram;(Re===void 0||Re.isReady())&&k.delete(Pe)}),k.size===0){V(E);return}setTimeout(xe,10)}rt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ji=null;function ca(E){ji&&ji(E)}function Gs(){ti.stop()}function Xr(){ti.start()}const ti=new yf;ti.setAnimationLoop(ca),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(E){ji=E,Ie.setAnimationLoop(E),E===null?ti.stop():ti.start()},Ie.addEventListener("sessionstart",Gs),Ie.addEventListener("sessionend",Xr),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(E,F);const Y=Ie.enabled===!0&&Ie.isPresenting===!0,k=b!==null&&(se===null||Y)&&b.begin(R,se);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(F),F=Ie.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,F,se),A=W.get(E,g.length),A.init(F),A.state.textureUnits=$.getTextureUnits(),g.push(A),Ke.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$e.setFromProjectionMatrix(Ke,oi,F.reversedDepth),vt=this.localClippingEnabled,ut=De.init(this.clippingPlanes,vt),y=ne.get(E,T.length),y.init(),T.push(y),Ie.enabled===!0&&Ie.isPresenting===!0){const Pe=R.xr.getDepthSensingMesh();Pe!==null&&er(Pe,F,-1/0,R.sortObjects)}er(E,F,0,R.sortObjects),y.finish(),I!==null&&I.updateLights(A.state.lightsArray),R.sortObjects===!0&&y.sort(be,He),Dt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Dt&&We.addToRenderList(y,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&De.beginShadows();const V=A.state.shadowsArray;if(Ge.render(V,E,F),ut===!0&&De.endShadows(),(k&&b.hasRenderPass())===!1){const Pe=y.opaque,ge=y.transmissive;if(A.setupLights(),F.isArrayCamera){const Re=F.cameras;if(ge.length>0)for(let Ee=0,Ye=Re.length;Ee<Ye;Ee++){const Je=Re[Ee];tr(Pe,ge,E,Je)}Dt&&We.render(E);for(let Ee=0,Ye=Re.length;Ee<Ye;Ee++){const Je=Re[Ee];ks(y,E,Je,Je.viewport)}}else ge.length>0&&tr(Pe,ge,E,F),Dt&&We.render(E),ks(y,E,F)}se!==null&&Z===0&&($.updateMultisampleRenderTarget(se),$.updateRenderTargetMipmap(se)),k&&b.end(R),E.isScene===!0&&E.onAfterRender(R,E,F),me.resetDefaultState(),q=-1,Q=null,g.pop(),g.length>0?(A=g[g.length-1],$.setTextureUnits(A.state.textureUnits),ut===!0&&De.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?y=T[T.length-1]:y=null,I!==null&&I.renderEnd()};function er(E,F,Y,k){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum($e)){k&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ke);const Pe=te.update(E),ge=E.material;ge.visible&&y.push(E,Pe,ge,Y,bt.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum($e))){const Pe=te.update(E),ge=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),bt.copy(Pe.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(Ke)),Array.isArray(ge)){const Re=Pe.groups;for(let Ee=0,Ye=Re.length;Ee<Ye;Ee++){const Je=Re[Ee],Le=ge[Je.materialIndex];Le&&Le.visible&&y.push(E,Pe,Le,Y,bt.z,Je,F)}}else ge.visible&&y.push(E,Pe,ge,Y,bt.z,null,F)}}const xe=E.children;for(let Pe=0,ge=xe.length;Pe<ge;Pe++)er(xe[Pe],F,Y,k)}function ks(E,F,Y,k){const{opaque:V,transmissive:xe,transparent:Pe}=E;A.setupLightsView(Y),ut===!0&&De.setGlobalState(R.clippingPlanes,Y),k&&v.viewport(re.copy(k)),V.length>0&&wi(V,F,Y),xe.length>0&&wi(xe,F,Y),Pe.length>0&&wi(Pe,F,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function tr(E,F,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const Le=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new ei(1,1,{generateMipmaps:!0,type:Le?In:Ln,minFilter:Ni,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const xe=A.state.transmissionRenderTarget[k.id],Pe=k.viewport||re;xe.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);const ge=R.getRenderTarget(),Re=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(je),et=R.getClearAlpha(),et<1&&R.setClearColor(16777215,.5),R.clear(),Dt&&We.render(Y);const Ye=R.toneMapping;R.toneMapping=ai;const Je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),ut===!0&&De.setGlobalState(R.clippingPlanes,k),wi(E,Y,k),$.updateMultisampleRenderTarget(xe),$.updateRenderTargetMipmap(xe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let pt=0,kt=F.length;pt<kt;pt++){const Et=F[pt],{object:wt,geometry:Ft,material:Te,group:Jt}=Et;if(Te.side===vn&&wt.layers.test(k.layers)){const mt=Te.side;Te.side=An,Te.needsUpdate=!0,Vs(wt,Y,k,Ft,Te,Jt),Te.side=mt,Te.needsUpdate=!0,Le=!0}}Le===!0&&($.updateMultisampleRenderTarget(xe),$.updateRenderTargetMipmap(xe))}R.setRenderTarget(ge,Re,Ee),R.setClearColor(je,et),Je!==void 0&&(k.viewport=Je),R.toneMapping=Ye}function wi(E,F,Y){const k=F.isScene===!0?F.overrideMaterial:null;for(let V=0,xe=E.length;V<xe;V++){const Pe=E[V],{object:ge,geometry:Re,group:Ee}=Pe;let Ye=Pe.material;Ye.allowOverride===!0&&k!==null&&(Ye=k),ge.layers.test(Y.layers)&&Vs(ge,F,Y,Re,Ye,Ee)}}function Vs(E,F,Y,k,V,xe){I!==null&&V.isNodeMaterial&&I.setObject(E,V),E.onBeforeRender(R,F,Y,k,V,xe),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(R,F,Y,k,E,xe),V.transparent===!0&&V.side===vn&&V.forceSinglePass===!1?(V.side=An,V.needsUpdate=!0,R.renderBufferDirect(Y,F,k,V,E,xe),V.side=Xi,V.needsUpdate=!0,R.renderBufferDirect(Y,F,k,V,E,xe),V.side=vn):R.renderBufferDirect(Y,F,k,V,E,xe),E.onAfterRender(R,F,Y,k,V,xe)}function Tn(E,F,Y){F.isScene!==!0&&(F=Yt);const k=X.get(E),V=A.state.lights,xe=A.state.shadowsArray,Pe=V.state.version,ge=ue.getParameters(E,V.state,xe,F,Y,A.state.lightProbeGridArray),Re=ue.getProgramCacheKey(ge);let Ee=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const Ye=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=le.get(E.envMap||k.environment,Ye),k.envMapRotation=k.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ee===void 0&&(E.addEventListener("dispose",Mn),Ee=new Map,k.programs=Ee);let Je=Ee.get(Re);if(Je!==void 0){if(k.currentProgram===Je&&k.lightsStateVersion===Pe)return Gt(E,ge),Je}else ge.uniforms=ue.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,Y,ge),E.onBeforeCompile(ge,R),Je=ue.acquireProgram(ge,Re),Ee.set(Re,Je),k.uniforms=ge.uniforms;const Le=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=De.uniform),Gt(E,ge),k.needsLights=ir(E),k.lightsStateVersion=Pe,k.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.sunLights.value=V.state.sun,Le.sunLightShadows.value=V.state.sunShadow,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.sunShadowMatrix.value=V.state.sunShadowMatrix,Le.sunShadowCascade.value=V.state.sunShadowCascade,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=A.state.lightProbeGridArray.length>0,k.currentProgram=Je,k.uniformsList=null,Je}function nr(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Wo.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Gt(E,F){const Y=X.get(E);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Nn(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let Y=0,k=E.length;Y<k;Y++){const V=E[Y];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function Ws(E,F,Y,k,V){F.isScene!==!0&&(F=Yt),$.resetTextureUnits();const xe=F.fog,Pe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,ge=se===null?R.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:_t.workingColorSpace,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ee=le.get(k.envMap||Pe,Re),Ye=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!Y.morphAttributes.position,pt=!!Y.morphAttributes.normal,kt=!!Y.morphAttributes.color;let Et=ai;k.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Et=R.toneMapping);const wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ft=wt!==void 0?wt.length:0,Te=X.get(k),Jt=A.state.lights;if(ut===!0&&(vt===!0||E!==Q)){const Oe=E===Q&&k.id===q;De.setState(k,E,Oe)}let mt=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Jt.state.version||Te.outputColorSpace!==ge||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==Ee||k.fog===!0&&Te.fog!==xe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==De.numPlanes||Te.numIntersection!==De.numIntersection)||Te.vertexAlphas!==Ye||Te.vertexTangents!==Je||Te.morphTargets!==Le||Te.morphNormals!==pt||Te.morphColors!==kt||Te.toneMapping!==Et||Te.morphTargetsCount!==Ft||!!Te.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Te.__version=k.version);let yn=Te.currentProgram;mt===!0&&(yn=Tn(k,F,V),I&&k.isNodeMaterial&&I.onUpdateProgram(k,yn,Te));let ee=!1,ke=!1,Ne=!1;const Ae=yn.getUniforms(),ve=Te.uniforms;if(v.useProgram(yn.program)&&(ee=!0,ke=!0,Ne=!0),k.id!==q&&(q=k.id,ke=!0),Te.needsLights){const Oe=Nn(A.state.lightProbeGridArray,V);Te.lightProbeGrid!==Oe&&(Te.lightProbeGrid=Oe,ke=!0)}if(ee||Q!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ae.setValue(B,"projectionMatrix",E.projectionMatrix),Ae.setValue(B,"viewMatrix",E.matrixWorldInverse);const xt=Ae.map.cameraPosition;xt!==void 0&&xt.setValue(B,yt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&Ae.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ae.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,ke=!0,Ne=!0)}if(Te.needsLights&&(Jt.state.sunShadowMap.length>0&&Ae.setValue(B,"sunShadowMap",Jt.state.sunShadowMap,$),Jt.state.directionalShadowMap.length>0&&Ae.setValue(B,"directionalShadowMap",Jt.state.directionalShadowMap,$),Jt.state.spotShadowMap.length>0&&Ae.setValue(B,"spotShadowMap",Jt.state.spotShadowMap,$),Jt.state.pointShadowMap.length>0&&Ae.setValue(B,"pointShadowMap",Jt.state.pointShadowMap,$)),V.isSkinnedMesh){Ae.setOptional(B,V,"bindMatrix"),Ae.setOptional(B,V,"bindMatrixInverse");const Oe=V.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ae.setValue(B,"boneTexture",Oe.boneTexture,$))}V.isBatchedMesh&&(Ae.setOptional(B,V,"batchingTexture"),Ae.setValue(B,"batchingTexture",V._matricesTexture,$),Ae.setOptional(B,V,"batchingIdTexture"),Ae.setValue(B,"batchingIdTexture",V._indirectTexture,$),Ae.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Ae.setValue(B,"batchingColorTexture",V._colorsTexture,$));const Nt=Y.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&O.update(V,Y,yn),(ke||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,Ae.setValue(B,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(ve.envMapIntensity.value=F.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=Nv()),ke){if(Ae.setValue(B,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&ua(ve,Ne),xe&&k.fog===!0&&we.refreshFogUniforms(ve,xe),we.refreshMaterialUniforms(ve,k,ie,K,A.state.transmissionRenderTarget[E.id]),Te.needsLights&&Te.lightProbeGrid){const Oe=Te.lightProbeGrid;ve.probesSH.value=Oe.texture,ve.probesMin.value.copy(Oe.boundingBox.min),ve.probesMax.value.copy(Oe.boundingBox.max),ve.probesResolution.value.copy(Oe.resolution)}Wo.upload(B,nr(Te),ve,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Wo.upload(B,nr(Te),ve,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ae.setValue(B,"center",V.center),Ae.setValue(B,"modelViewMatrix",V.modelViewMatrix),Ae.setValue(B,"normalMatrix",V.normalMatrix),Ae.setValue(B,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const Oe=k.uniformsGroups;for(let xt=0,St=Oe.length;xt<St;xt++){const Vt=Oe[xt];oe.update(Vt,yn),oe.bind(Vt,yn)}}return yn}function ua(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function ir(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(E,F,Y){const k=X.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=F,X.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const Y=X.get(E);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Y=0){se=E,G=F,Z=Y;let k=null,V=!1,xe=!1;if(E){const ge=X.get(E);if(ge.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(B.FRAMEBUFFER,ge.__webglFramebuffer),re.copy(E.viewport),ye.copy(E.scissor),pe=E.scissorTest,v.viewport(re),v.scissor(ye),v.setScissorTest(pe),q=-1;return}else if(ge.__webglFramebuffer===void 0)$.setupRenderTarget(E);else if(ge.__hasExternalTextures)$.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ye=E.depthTexture;if(ge.__boundDepthTexture!==Ye){if(Ye!==null&&X.has(Ye)&&(E.width!==Ye.image.width||E.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);const Ee=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ee[F])?k=Ee[F][Y]:k=Ee[F],V=!0):E.samples>0&&$.useMultisampledRTT(E)===!1?k=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[Y]:k=Ee,re.copy(E.viewport),ye.copy(E.scissor),pe=E.scissorTest}else re.copy(Se).multiplyScalar(ie).floor(),ye.copy(ce).multiplyScalar(ie).floor(),pe=Lt;if(Y!==0&&(k=U),v.bindFramebuffer(B.FRAMEBUFFER,k)&&v.drawBuffers(E,k),v.viewport(re),v.scissor(ye),v.setScissorTest(pe),V){const ge=X.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,Y)}else if(xe){const ge=F;for(let Re=0;Re<E.textures.length;Re++){const Ee=X.get(E.textures[Re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Re,Ee.__webglTexture,Y,ge)}}else if(E!==null&&Y!==0){const ge=X.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ge.__webglTexture,Y)}q=-1};function Yr(E){const F=X.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=C.textureFormatReadable(E.format),F.__typeReadable=C.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Y,k,V,xe,Pe,ge=0){if(!(E&&E.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe]),Re){v.bindFramebuffer(B.FRAMEBUFFER,Re);try{const Ee=E.textures[ge],Ye=Ee.format,Je=Ee.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge);const Le=Yr(Ee);if(Le.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-k&&Y>=0&&Y<=E.height-V&&B.readPixels(F,Y,k,V,he.convert(Ye),he.convert(Je),xe)}finally{const Ee=se!==null?X.get(se).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,F,Y,k,V,xe,Pe,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe]),Re)if(F>=0&&F<=E.width-k&&Y>=0&&Y<=E.height-V){v.bindFramebuffer(B.FRAMEBUFFER,Re);const Ee=E.textures[ge],Ye=Ee.format,Je=Ee.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge);const Le=Yr(Ee);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.bufferData(B.PIXEL_PACK_BUFFER,xe.byteLength,B.STREAM_READ),B.readPixels(F,Y,k,V,he.convert(Ye),he.convert(Je),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const kt=se!==null?X.get(se).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,kt);const Et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xd(B,Et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(pt),B.deleteSync(Et),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Y=0){const k=Math.pow(2,-Y),V=Math.floor(E.image.width*k),xe=Math.floor(E.image.height*k),Pe=F!==null?F.x:0,ge=F!==null?F.y:0;$.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Pe,ge,V,xe),v.unbindTexture()},this.copyTextureToTexture=function(E,F,Y=null,k=null,V=0,xe=0){let Pe,ge,Re,Ee,Ye,Je,Le,pt,kt;const Et=E.isCompressedTexture?E.mipmaps[xe]:E.image;if(Y!==null)Pe=Y.max.x-Y.min.x,ge=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Ee=Y.min.x,Ye=Y.min.y,Je=Y.isBox3?Y.min.z:0;else{const ve=Math.pow(2,-V);Pe=Math.floor(Et.width*ve),ge=Math.floor(Et.height*ve),E.isDataArrayTexture?Re=Et.depth:E.isData3DTexture?Re=Math.floor(Et.depth*ve):Re=1,Ee=0,Ye=0,Je=0}k!==null?(Le=k.x,pt=k.y,kt=k.z):(Le=0,pt=0,kt=0);const wt=he.convert(F.format),Ft=he.convert(F.type);let Te;F.isData3DTexture?($.setTexture3D(F,0),Te=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),Te=B.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),Te=B.TEXTURE_2D),v.activeTexture(B.TEXTURE0),v.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Jt=v.getParameter(B.UNPACK_ROW_LENGTH),mt=v.getParameter(B.UNPACK_IMAGE_HEIGHT),yn=v.getParameter(B.UNPACK_SKIP_PIXELS),ee=v.getParameter(B.UNPACK_SKIP_ROWS),ke=v.getParameter(B.UNPACK_SKIP_IMAGES);v.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),v.pixelStorei(B.UNPACK_SKIP_PIXELS,Ee),v.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),v.pixelStorei(B.UNPACK_SKIP_IMAGES,Je);const Ne=E.isDataArrayTexture||E.isData3DTexture,Ae=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const ve=X.get(E),Nt=X.get(F),Oe=X.get(ve.__renderTarget),xt=X.get(Nt.__renderTarget);v.bindFramebuffer(B.READ_FRAMEBUFFER,Oe.__webglFramebuffer),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let St=0;St<Re;St++)Ne&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(E).__webglTexture,V,Je+St),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(F).__webglTexture,xe,kt+St)),B.blitFramebuffer(Ee,Ye,Pe,ge,Le,pt,Pe,ge,B.DEPTH_BUFFER_BIT,B.NEAREST);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||X.has(E)){const ve=X.get(E),Nt=X.get(F);v.bindFramebuffer(B.READ_FRAMEBUFFER,P),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let Oe=0;Oe<Re;Oe++)Ne?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ve.__webglTexture,V,Je+Oe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ve.__webglTexture,V),Ae?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.__webglTexture,xe,kt+Oe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nt.__webglTexture,xe),V!==0?B.blitFramebuffer(Ee,Ye,Pe,ge,Le,pt,Pe,ge,B.COLOR_BUFFER_BIT,B.NEAREST):Ae?B.copyTexSubImage3D(Te,xe,Le,pt,kt+Oe,Ee,Ye,Pe,ge):B.copyTexSubImage2D(Te,xe,Le,pt,Ee,Ye,Pe,ge);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ae?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Te,xe,Le,pt,kt,Pe,ge,Re,wt,Ft,Et.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Te,xe,Le,pt,kt,Pe,ge,Re,wt,Et.data):B.texSubImage3D(Te,xe,Le,pt,kt,Pe,ge,Re,wt,Ft,Et):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xe,Le,pt,Pe,ge,wt,Ft,Et.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xe,Le,pt,Et.width,Et.height,wt,Et.data):B.texSubImage2D(B.TEXTURE_2D,xe,Le,pt,Pe,ge,wt,Ft,Et);v.pixelStorei(B.UNPACK_ROW_LENGTH,Jt),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt),v.pixelStorei(B.UNPACK_SKIP_PIXELS,yn),v.pixelStorei(B.UNPACK_SKIP_ROWS,ee),v.pixelStorei(B.UNPACK_SKIP_IMAGES,ke),xe===0&&F.generateMipmaps&&B.generateMipmap(Te),v.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&$.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$.setTextureCube(E,0):E.isData3DTexture?$.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$.setTexture2DArray(E,0):$.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){G=0,Z=0,se=null,v.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}function Bt(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Tt;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const f=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in s){const f=ch(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let S=0;S<o[u].length;++S)p.push(o[u][S][h]);const _=ch(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function ch(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Be(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let h=0,p=u.count;h<p;h++)for(let _=0;_<t;_++){const S=u.getComponent(h,_);a.setComponent(h+f,_,S)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}class Ov extends Cm{constructor(e){super(e),this.type=In}parse(e){const o=function(g,b){switch(g){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(b||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(b||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(b||""))}},u=`
`,f=function(g,b,R){b=b||1024;let I=g.pos,U=-1,P=0,z="",G=String.fromCharCode.apply(null,new Uint16Array(g.subarray(I,I+128)));for(;0>(U=G.indexOf(u))&&P<b&&I<g.byteLength;)z+=G,P+=G.length,I+=128,G=String.fromCharCode.apply(null,new Uint16Array(g.subarray(I,I+128)));return-1<U?(g.pos+=P+U+1,z+G.slice(0,U)):!1},h=function(g){const b=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,G;for((g.pos>=g.byteLength||!(z=f(g)))&&o(1,"no header found"),(G=z.match(b))||o(3,"bad initial token"),P.valid|=1,P.programtype=G[1],P.string+=z+`
`;z=f(g),z!==!1;){if(P.string+=z+`
`,z.charAt(0)==="#"){P.comments+=z+`
`;continue}if((G=z.match(R))&&(P.gamma=parseFloat(G[1])),(G=z.match(D))&&(P.exposure=parseFloat(G[1])),(G=z.match(I))&&(P.valid|=2,P.format=G[1]),(G=z.match(U))&&(P.valid|=4,P.height=parseInt(G[1],10),P.width=parseInt(G[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},p=function(g,b,R){const D=b;if(D<8||D>32767||g[0]!==2||g[1]!==2||g[2]&128)return new Uint8Array(g);D!==(g[2]<<8|g[3])&&o(3,"wrong scanline width");const I=new Uint8Array(4*b*R);I.length||o(4,"unable to allocate buffer space");let U=0,P=0;const z=4*D,G=new Uint8Array(4),Z=new Uint8Array(z);let se=R;for(;se>0&&P<g.byteLength;){P+4>g.byteLength&&o(1),G[0]=g[P++],G[1]=g[P++],G[2]=g[P++],G[3]=g[P++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=D)&&o(3,"bad rgbe scanline format");let q=0,Q;for(;q<z&&P<g.byteLength;){Q=g[P++];const ye=Q>128;if(ye&&(Q-=128),(Q===0||q+Q>z)&&o(3,"bad scanline data"),ye){const pe=g[P++];for(let je=0;je<Q;je++)Z[q++]=pe}else Z.set(g.subarray(P,P+Q),q),q+=Q,P+=Q}const re=D;for(let ye=0;ye<re;ye++){let pe=0;I[U]=Z[ye+pe],pe+=D,I[U+1]=Z[ye+pe],pe+=D,I[U+2]=Z[ye+pe],pe+=D,I[U+3]=Z[ye+pe],U+=4}se--}return I},_=function(g,b,R,D){const I=g[b+3],U=Math.pow(2,I-128)/255;R[D+0]=g[b+0]*U,R[D+1]=g[b+1]*U,R[D+2]=g[b+2]*U,R[D+3]=1},S=function(g,b,R,D){const I=g[b+3],U=Math.pow(2,I-128)/255;R[D+0]=lo.toHalfFloat(Math.min(g[b+0]*U,65504)),R[D+1]=lo.toHalfFloat(Math.min(g[b+1]*U,65504)),R[D+2]=lo.toHalfFloat(Math.min(g[b+2]*U,65504)),R[D+3]=lo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const d=h(m),M=d.width,w=d.height,x=p(m.subarray(m.pos),M,w);let y,A,T;switch(this.type){case Dn:T=x.length/4;const g=new Float32Array(T*4);for(let R=0;R<T;R++)_(x,R*4,g,R*4);y=g,A=Dn;break;case In:T=x.length/4;const b=new Uint16Array(T*4);for(let R=0;R<T;R++)S(x,R*4,b,R*4);y=b,A=In;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:w,data:y,header:d.string,gamma:d.gamma,exposure:d.exposure,type:A,colorSpace:Ts,minFilter:Kt,magFilter:Kt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}const Fv=[[/LOACH/,"heliLight"],[/UH60|UH1|MI8|MI17|CH146|CH178|SA330|MRH90|Z8[GJ]|Z9A|HELI/,"heli"],[/RHIB|BOAT/,"boat"],[/MINSK|QUADBIKE|LYNXATV|GATOR/,"bike"],[/TECHNICAL/,"jeep"],[/2A6|M1A[12]|FV4034|M60T|T62|T64|T72|T90|ZTZ99/,"mbt"],[/M1128|SPRUT|ZTD05/,"tankDestroyer"],[/BFV|M7A3|BMD|BMP|FV510|FV107|ZBD0[45]|MTLBM_6MB/,"ifvTracked"],[/LAV25|LAV2_COYOTE|LAV6|ASLAV|BTR82A|BTR4|ZBL08|WZ551A|WZ551B(?!_QLZ)|PARS3(_DESERT)?_C$/,"ifvWheeled"],[/AAVP7|ACV-?15|BTR-?D|BTR-ZD|BTRMDM|FV432|M113|M1064|MTLB|ZSD(05|89)/,"apcTracked"],[/BTR80|M1126|M1117|LAV_RWS|PMV|TAPV|ZSL10|WZ551B_QLZ|PARS3_/,"apcWheeled"],[/MATV|M1151(?!_TECHNICAL)|TIGR|COBRA|KOZAK|LPPV|CSK131|BRDM/,"mrap"],[/(UTIL|URAL|KAMAZ|KRAZ|CTM131).*LOGI/,"logiTruck"],[/UTIL|URAL|KAMAZ|KRAZ|CTM131/,"truck"],[/CPV|SAFIR|LUVW|PICKUP|JEEP/,"jeep"]];function Bv(i){const e=(i??"").toUpperCase();for(const[t,n]of Fv)if(t.test(e))return n;return"other"}function zv(i){if(i.isFob)return"radio";const e=(i.classShort??"").toUpperCase();return/FOBRADIO|RADIO/.test(e)?"radio":/HAB/.test(e)?"hab":/HELICOPTER_REPAIR|HELIPAD/.test(e)?"helipad":/REPAIR/.test(e)?"repair":/MORTAR/.test(e)?"mortar":/MINE|IED/.test(e)?"mine":/AMMOBAG/.test(e)?"ammoBag":/CONSTRUCT/.test(e)?"construction":/AMMO|CRATE/.test(e)?"ammoCrate":/(^|_)(TOW|KORNET|SPG9?|DSHK|KORD|M2|HMG|GMG|MK19|AGS(-?17)?|ZU23)(_|$)|TRIPOD|EMPLACE/.test(e)?"emplacement":/SANDBAGWALL|DESERTSANDBAG|SANDBAG_WALL/.test(e)?"sandbagWall":/SANDBAG/.test(e)?"sandbags":/HESCO/.test(e)?"hesco":/RAZORWIRE|RAZOR_WIRE|CONCERTINA/.test(e)?"razorwire":/BUNKER/.test(e)?"bunker":/C4|COMPB|EXPLOSIVE|SATCHEL/.test(e)?"explosive":/LADDER/.test(e)?"ladder":"other"}const Hv={url:"/img/maps/albasrah/",corner0:[-2e3,-2e3],corner1:[2e3,2e3],heightScale:.087813952,zOffset:2,heightScale3D:.043029724,zOffset3D:2},Gv={url:"/img/maps/anvil/",corner0:[-2040,-2040],corner1:[1020,1020],heightScale:.226426712,zOffset:-71.5835,heightScale3D:.226426712,zOffset3D:-71.5835},kv={url:"/img/maps/blackcoast/",corner0:[-2299,-2127],corner1:[2299,2472],heightScale:.358381824,zOffset:-31.0188,heightScale3D:.358284579,zOffset3D:-.9868},Vv={url:"/img/maps/chora/",corner0:[-2464,-2664],corner1:[1600,1400],heightScale:.982942589,zOffset:-793.5477,heightScale3D:.982942589,zOffset3D:-793.5477},Wv={url:"/img/maps/fallujah/",corner0:[-1315,-1545],corner1:[1690,1460],heightScale:.14797459,zOffset:-48.43,heightScale3D:.065334541,zOffset3D:-48.43},Xv={url:"/img/maps/foolsroad/",corner0:[-1326,-1326],corner1:[448,448],heightScale:.20168671,zOffset:-61.5903,heightScale3D:.205997796,zOffset3D:-63.789},Yv={url:"/img/maps/goosebay/",corner0:[-2016,-2016],corner1:[2015,2015],heightScale:.274412178,zOffset:-245,heightScale3D:.227111487,zOffset3D:-245},qv={url:"/img/maps/gorodok/",corner0:[-2032,-2032],corner1:[2032,2032],heightScale:.173697718,zOffset:-62.8744,heightScale3D:.126346801,zOffset3D:-62.8744},Zv={url:"/img/maps/harju/",corner0:[-2016,-2016],corner1:[2016,2016],heightScale:.229927482,zOffset:-21.1422,heightScale3D:.124975537,zOffset3D:-.2},$v={url:"/img/maps/jensen/",corner0:[-2004,-2004],corner1:[2004,2004],heightScale:.185722727,zOffset:-15.5078,heightScale3D:.089362846,zOffset3D:-15.5078},Kv={url:"/img/maps/kamdesh/",corner0:[-2016,-2016],corner1:[2016,2016],heightScale:.387570609,zOffset:31.6808,heightScale3D:.387570609,zOffset3D:31.6808},Jv={url:"/img/maps/kohat/",corner0:[-2300,-2300],corner1:[2317,2317],heightScale:.750167993,zOffset:9.4085,heightScale3D:.750167993,zOffset3D:9.4085},Qv={url:"/img/maps/kokan/",corner0:[-1076,-1076],corner1:[1420,1420],heightScale:.174065564,zOffset:-255,heightScale3D:.162908726,zOffset3D:-249.31},jv={url:"/img/maps/lashkar/",corner0:[-2167,-2167],corner1:[2167,2167],heightScale:.321048558,zOffset:1.9652,heightScale3D:.298333727,zOffset3D:1.9652},eS={url:"/img/maps/logar/",corner0:[-881,-1132],corner1:[880,629],heightScale:.248098348,zOffset:4.1729,heightScale3D:.248098348,zOffset3D:4.1729},tS={url:"/img/maps/manicouagan/",corner0:[-2016,-2016],corner1:[2015,2015],heightScale:.403959641,zOffset:38,heightScale3D:.403959641,zOffset3D:38},nS={url:"/img/maps/mestia/",corner0:[-1200,-1100],corner1:[1200,1300],heightScale:.493831859,zOffset:-153.9385,heightScale3D:.493831859,zOffset3D:-153.9385},iS={url:"/img/maps/mutaha/",corner0:[-935,-1140],corner1:[1820,1615],heightScale:.112586966,zOffset:-8.7821,heightScale3D:.060502473,zOffset3D:-7.043},rS={url:"/img/maps/narva/",corner0:[-1390,-1402],corner1:[1410,1398],heightScale:.205154741,zOffset:-17.9298,heightScale3D:.123498984,zOffset3D:-17.9298},sS={url:"/img/maps/pacific/",corner0:[-2016,-2016],corner1:[2016,2016],heightScale:.317704444,zOffset:-79.18,heightScale3D:.118174655,zOffset3D:3.9},oS={url:"/img/maps/sanxian/",corner0:[-2300,-2050],corner1:[2300,2550],heightScale:.233953671,zOffset:0,heightScale3D:.11211708,zOffset3D:0},aS={url:"/img/maps/skorpo/",corner0:[-3611,-3293],corner1:[3238,3576],heightScale:2.086916336,zOffset:-360.7172,heightScale3D:1.955089913,zOffset3D:-293.4857},lS={url:"/img/maps/sumari/",corner0:[-640,-447],corner1:[660,853],heightScale:.267739565,zOffset:-138.0639,heightScale3D:.267739745,zOffset3D:-138.064},cS={url:"/img/maps/tallil/",corner0:[-2340,-2340],corner1:[2340,2340],heightScale:.152035884,zOffset:-83.457,heightScale3D:.148738475,zOffset3D:-81.7753},uS={url:"/img/maps/yehorivka/",corner0:[-3302,-3302],corner1:[3048,3048],heightScale:.485970247,zOffset:-65.4916,heightScale3D:.485970247,zOffset3D:-65.4916},hS={url:"/img/maps/MODS/SPM/hrodna/",corner0:[-2016,-2016],corner1:[2016,2016],heightScale:.485617783,zOffset:null,heightScale3D:null,zOffset3D:null},fS={url:"/img/maps/MODS/SPM/chornivsk/",corner0:[-1649,-1547],corner1:[1535,1637],heightScale:.124958144,zOffset:null,heightScale3D:null,zOffset3D:null},dS={url:"/img/maps/MODS/SD/albasrah_legacy/",corner0:[-1520,-1520],corner1:[1520,1520],heightScale:.084748958,zOffset:-15.7523,heightScale3D:.043778399,zOffset3D:-10.81},pS={url:"/img/maps/MODS/GC/bespin/",corner0:[-2031.92,-2031.92],corner1:[2031.92,2031.92],heightScale:4.947832833,zOffset:null,heightScale3D:null,zOffset3D:null},mS={url:"/img/maps/MODS/GC/coruscant/",corner0:[-2e3,-2e3],corner1:[2e3,2e3],heightScale:12.178692268,zOffset:null,heightScale3D:null,zOffset3D:null},gS={url:"/img/maps/MODS/GC/corvette/",corner0:[-166.2,-78.11],corner1:[-6.65,81.44],heightScale:.015758521,zOffset:null,heightScale3D:null,zOffset3D:null},_S={url:"/img/maps/MODS/GC/felucia/",corner0:[-789.93,-3999.91],corner1:[1876.7,-1333.21],heightScale:.667760064,zOffset:null,heightScale3D:null,zOffset3D:null},xS={url:"/img/maps/MODS/GC/galban/",corner0:[-1784.99,-1784.97],corner1:[1784.97,1784.91],heightScale:4.036845955,zOffset:null,heightScale3D:null,zOffset3D:null},vS={url:"/img/maps/MODS/GC/geonosis/",corner0:[-2015.67,-2015.67],corner1:[2015.7,2015.7],heightScale:7.295198568,zOffset:null,heightScale3D:null,zOffset3D:null},SS={url:"/img/maps/MODS/GC/kashyyyk/",corner0:[-2106.43,-2814.39],corner1:[1893.56,1185.59],heightScale:.368167,zOffset:null,heightScale3D:null,zOffset3D:null},MS={url:"/img/maps/MODS/GC/kavado/",corner0:[-1072.36,-2098.28],corner1:[2052.09,1026.17],heightScale:1.536714457,zOffset:null,heightScale3D:null,zOffset3D:null},yS={url:"/img/maps/MODS/GC/mallidon/",corner0:[-2400,-2400],corner1:[-400,-400],heightScale:.754785829,zOffset:null,heightScale3D:null,zOffset3D:null},bS={url:"/img/maps/MODS/GC/miniosis/",corner0:[-1020,-1020],corner1:[1020,1020],heightScale:.891445085,zOffset:null,heightScale3D:null,zOffset3D:null},ES={url:"/img/maps/MODS/GC/morak/",corner0:[-3250,-3250],corner1:[3250,3250],heightScale:2.244150079,zOffset:null,heightScale3D:null,zOffset3D:null},wS={url:"/img/maps/MODS/GC/moraklegacy/",corner0:[-2102.47,-2301.85],corner1:[2102.47,2301.85],heightScale:1.821209448,zOffset:null,heightScale3D:null,zOffset3D:null},AS={url:"/img/maps/MODS/GC/mygeeto/",corner0:[-2e3,-2e3],corner1:[2e3,2e3],heightScale:7.458831189,zOffset:null,heightScale3D:null,zOffset3D:null},TS={url:"/img/maps/MODS/GC/nabooplains/",corner0:[-1967.98,-1967.98],corner1:[1968.98,1968.98],heightScale:.355040546,zOffset:null,heightScale3D:null,zOffset3D:null},RS={url:"/img/maps/MODS/GC/ortoplutonia/",corner0:[-1999.95,-1999.95],corner1:[2000.05,2000.05],heightScale:1.211747024,zOffset:null,heightScale3D:null,zOffset3D:null},CS={url:"/img/maps/MODS/GC/rhenvar/",corner0:[-4079.85,-4079.85],corner1:[4053.6,4053.6],heightScale:1.200851022,zOffset:null,heightScale3D:null,zOffset3D:null},PS={url:"/img/maps/MODS/GC/ryloth/",corner0:[-620,-620],corner1:[620,620],heightScale:null,zOffset:null,heightScale3D:null,zOffset3D:null},LS={url:"/img/maps/MODS/GC/sesid/",corner0:[-1880,-1880],corner1:[1880,1880],heightScale:.819146736,zOffset:null,heightScale3D:null,zOffset3D:null},DS={url:"/img/maps/MODS/GC/sesidequator/",corner0:[-2400,-2400],corner1:[2400,2400],heightScale:1.794266345,zOffset:null,heightScale3D:null,zOffset3D:null},IS={url:"/img/maps/MODS/GC/sullust/",corner0:[-1078.77,-1078.77],corner1:[1079.56,1079.56],heightScale:7.976126518,zOffset:null,heightScale3D:null,zOffset3D:null},NS={url:"/img/maps/MODS/GC/tatooine/",corner0:[-1966.2,-1865.35],corner1:[1579.8,1680.65],heightScale:1.187478002,zOffset:null,heightScale3D:null,zOffset3D:null},US={url:"/img/maps/MODS/GC/umbara/",corner0:[-800,-800],corner1:[800,800],heightScale:.210430224,zOffset:null,heightScale3D:null,zOffset3D:null},OS={url:"/img/maps/MODS/GC/venator/",corner0:[-400.3,-399.6],corner1:[399.7,400.4],heightScale:.545954917,zOffset:null,heightScale3D:null,zOffset3D:null},FS={url:"/img/maps/MODS/GC/venator2/",corner0:[-855.4,-462],corner1:[644.6,1038],heightScale:.545954917,zOffset:null,heightScale3D:null,zOffset3D:null},BS={url:"/img/maps/MODS/GC/yavin4/",corner0:[-1260.02,-1260.02],corner1:[1260.02,1260.02],heightScale:.721582271,zOffset:null,heightScale3D:null,zOffset3D:null},zS={AlBasrah:Hv,Anvil:Gv,BlackCoast:kv,Chora:Vv,Fallujah:Wv,FoolsRoad:Xv,GooseBay:Yv,Gorodok:qv,Harju:Zv,Jensen:$v,Kamdesh:Kv,Kohat:Jv,Kokan:Qv,Lashkar:jv,Logar:eS,Manicouagan:tS,Mestia:nS,Mutaha:iS,Narva:rS,Pacific:sS,Sanxian:oS,Skorpo:aS,Sumari:lS,Tallil:cS,Yehorivka:uS,Hrodna_Border:hS,Chornivsk:fS,AlBasrah_legacy:dS,Bespin:pS,Coruscant:mS,Corvette:gS,Felucia:_S,Galban:xS,Geonosis:vS,Kashyyyk:SS,Kavado:MS,Mallidon:yS,Miniosis:bS,Morak:ES,MorakLegacy:wS,Mygeeto:AS,NabooPlains:TS,Ortoplutonia:RS,Rhenvar:CS,Ryloth:PS,Sesid:LS,SesidEquator:DS,Sullust:IS,Tatooine:NS,Umbara:US,VenatorAssault:OS,VenatorAssault2:FS,Yavin4:BS},HS=""+new URL("sky-By2iMAz-.hdr",import.meta.url).href,GS=.15;function kS(i,e){return(e.bytesPerIndex||4)===2?new Uint16Array(i,e.byteOffset,e.byteLength/2):new Uint32Array(i,e.byteOffset,e.byteLength/4)}async function VS(i){const e=await fetch(`${i}3d/props.json`);if(!e.ok||!(e.headers.get("content-type")||"").includes("json"))return[];let t;try{t=await e.json()}catch{return[]}const n=await fetch(`${i}3d/props.bin`).then(o=>o.arrayBuffer()),r=new Map;for(const o of t.parts){const{positions:a,indices:l}=o.layout,c=new Float32Array(n,a.byteOffset,a.byteLength/4),u=kS(n,l),f=new Tt;f.setAttribute("position",new Be(c.slice(),3)),f.setIndex(new Be(u.slice(),1));const h=new ze(o.color),p=new Float32Array(c.length);for(let S=0;S<p.length;S+=3)p[S]=h.r,p[S+1]=h.g,p[S+2]=h.b;f.setAttribute("color",new Be(p,3)),f.computeBoundingBox();const _=o.label.split("_")[0];r.has(_)||r.set(_,[]),r.get(_).push(f)}const s=[];for(const[o,a]of r){const l=[];let c=0;for(const h of a){const p=h.index.count;l.push({box:h.boundingBox,start:c,count:p}),c+=p}const u=new Bs({vertexColors:!0,roughness:1,metalness:0,envMapIntensity:GS,flatShading:!0,side:vn}),f=new pn(Bt(a,!1),u);f.name=o,f.userData.parts=l,s.push(f)}return s}const Pf=.15,WS=[/^LombardyPoplar/i],XS=[/^SM_Norwayspruce/i],YS=[/^SM_Siberian/i,/^SM_Beech_03$/i],qS=[/^SM_NA_Barn_Beams$/i,/^Half_Ass_Factory_Main$/i,/^Half_Ass_Factory_Connector$/i,/^SM_EastAsia_VillageHouse_4mFill_01a$/i],ZS=[/^StaticMesh_bigwarehouse2$/i];function uh(i){return WS.some(e=>e.test(i))}function hh(i){return XS.some(e=>e.test(i))}function fh(i){return YS.some(e=>e.test(i))}function dh(i){return qS.some(e=>e.test(i))}function ph(i){return ZS.some(e=>e.test(i))}function $S(){const e=new jt(.08,.1467,1.6,6).toNonIndexed();e.translate(0,1.6/2,0);const t=new ze(6047024);e.setAttribute("color",new Be(new Float32Array(e.attributes.position.count*3).map((a,l)=>l%3===0?t.r:l%3===1?t.g:t.b),3));const n=.825,r=new ia(n,0).toNonIndexed();r.translate(0,1.6+n*.6,0),r.setAttribute("color",new Be(new Float32Array(r.attributes.position.count*3).fill(1),3));const s=Bt([e,r],!1);s.computeBoundingBox();const o=s.boundingBox.max.y-s.boundingBox.min.y;return{trunk:e,canopy:r,height:o}}function KS(){const e=new jt(.1,.16,1,6).toNonIndexed();e.translate(0,1/2,0);const t=new ze(6047024);e.setAttribute("color",new Be(new Float32Array(e.attributes.position.count*3).map((c,u)=>u%3===0?t.r:u%3===1?t.g:t.b),3));const n=.45,r=2.3,s=new Mc(n,r,4,8).toNonIndexed();s.translate(0,1+r/2+n,0);const o=new ze(4156212);s.setAttribute("color",new Be(new Float32Array(s.attributes.position.count*3).map((c,u)=>u%3===0?o.r:u%3===1?o.g:o.b),3));const a=Bt([e,s],!1);a.computeBoundingBox();const l=a.boundingBox.max.y-a.boundingBox.min.y;return{geometry:a,height:l}}function JS(){const e=new jt(.1,.16,.9,6).toNonIndexed();e.translate(0,.9/2,0);const t=new ze(6047024);e.setAttribute("color",new Be(new Float32Array(e.attributes.position.count*3).map((c,u)=>u%3===0?t.r:u%3===1?t.g:t.b),3));const n=.8,r=2.2,s=new Fs(n,r,8).toNonIndexed();s.translate(0,.9+r/2,0);const o=new ze(3103796);s.setAttribute("color",new Be(new Float32Array(s.attributes.position.count*3).map((c,u)=>u%3===0?o.r:u%3===1?o.g:o.b),3));const a=Bt([e,s],!1);a.computeBoundingBox();const l=a.boundingBox.max.y-a.boundingBox.min.y;return{geometry:a,height:l}}function QS(){const e=new jt(.09,.15,1.8,6).toNonIndexed();e.translate(0,1.8/2,0);const t=new ze(6047024);e.setAttribute("color",new Be(new Float32Array(e.attributes.position.count*3).map((c,u)=>u%3===0?t.r:u%3===1?t.g:t.b),3));const n=.55,r=1.1,s=new Fs(n,r,8).toNonIndexed();s.translate(0,1.8+r/2,0);const o=new ze(3824703);s.setAttribute("color",new Be(new Float32Array(s.attributes.position.count*3).map((c,u)=>u%3===0?o.r:u%3===1?o.g:o.b),3));const a=Bt([e,s],!1);a.computeBoundingBox();const l=a.boundingBox.max.y-a.boundingBox.min.y;return{geometry:a,height:l}}function jS(){const i=new ze(5928264);function e(r,s,o,a){const l=new ia(r,0).toNonIndexed();return l.scale(1,.65,1),l.translate(s,o,a),l.setAttribute("color",new Be(new Float32Array(l.attributes.position.count*3).map((c,u)=>u%3===0?i.r:u%3===1?i.g:i.b),3)),l}const t=Bt([e(.7,0,.45,0),e(.45,.15,.75,-.1)],!1);t.computeBoundingBox();const n=t.boundingBox.max.y-t.boundingBox.min.y;return{geometry:t,height:n}}const eM=9080724,tM=[[/^SM_ME_UrbRes_Bld_Med_09$/i,5591365],[/^SM_ME_UrbRes_Bld_Med_12$/i,6520965],[/^SM_Factory_Chimney_01/i,11566952],[/SM_ShippingContainer.*White/i,13224388],[/SM_ShippingContainer.*Green/i,4152378],[/SM_ShippingContainer.*Red/i,9057064],[/SM_ShippingContainer.*Yellow/i,13214247],[/SM_ShippingContainer.*Blue/i,3101296],[/olive/i,5921850],[/_tan_/i,11577500],[/wood/i,7031343],[/pinelog/i,7031343],[/SM_Apartment_Block_8story_Base02/i,9142386],[/SM_Apartment_Block_4story02v1/i,8486777],[/^(SM_)?ME_|^SM_IRQ_|^afg_|UrbCnt|Market_Buildings|Market_Shops|^shopfront_|^policestation|^SM_Construction_Site/i,11049596],[/^SM_EastAsia_Offices_01a/i,10246972]];function qn(i){for(const[e,t]of tM)if(e.test(i))return t;return eM}function nM(){const i=new it(1,1,1).toNonIndexed();return i.translate(.5,.5,.5),i.setAttribute("color",new Be(new Float32Array(i.attributes.position.count*3).fill(1),3)),i}function $t(i,e,t,n){const r=i.attributes.position.count,s=new Float32Array(r*3);for(let o=0;o<r;o++)s[o*3]=e,s[o*3+1]=t,s[o*3+2]=n;i.setAttribute("color",new Be(s,3))}function Lf(i,e){function t(l,c,u,f){return[l,c,u,l,u,f]}const n=i.reduce((l,c)=>l+c[0],0)/i.length,r=i.reduce((l,c)=>l+c[1],0)/i.length,s=[];for(let l=0;l<i.length;l++){const[c,u]=i[l],[f,h]=i[(l+1)%i.length];s.push(...t([c,0,u],[f,0,h],[f,e,h],[c,e,u])),s.push([n,0,r],[f,0,h],[c,0,u]),s.push([n,e,r],[c,e,u],[f,e,h])}const o=new Float32Array(s.length*3);s.forEach((l,c)=>{o[c*3]=l[0],o[c*3+1]=l[1],o[c*3+2]=l[2]});const a=new Tt;return a.setAttribute("position",new Be(o,3)),a}function mh(i){const e=i.attributes.position;for(let t=0;t<e.count;t++){const n=e.getX(t),r=e.getZ(t);e.setX(t,r),e.setZ(t,1-n)}return e.needsUpdate=!0,i}const Io=.9184,iM=.3744,rM=.1526,sM=.0936,oM=.375;function aM(){const i=sM,e=oM,t=[[i,0],[1-i,0],[1-i,e],[1,e],[1,1-e],[1-i,1-e],[1-i,1],[i,1],[i,1-e],[0,1-e],[0,e],[i,e]],n=Lf(t,Io);$t(n,1,1,1);const r=1-Io,s=new it(iM,r,rM).toNonIndexed();s.deleteAttribute("normal"),s.deleteAttribute("uv"),s.translate(.5,Io+r/2,.5),$t(s,1,1,1);const o=.0429,a=.1005,l=.0023;function c(x){const y=new it(l,a,o*2).toNonIndexed();y.deleteAttribute("normal"),y.deleteAttribute("uv");const A=x?1+l/2:-l/2;return y.translate(A,a/2,.5),$t(y,.25,.2,.15),y}const u=c(!1),f=c(!0),h=8,p=Io/h,_=.0191,S=.0457,m=.066,d=[e*.15,e*.5,e*.85,1-e*.85,1-e*.5,1-e*.15];function M(x,y,A){const T=new it(l,S,_*2).toNonIndexed();return T.deleteAttribute("normal"),T.deleteAttribute("uv"),T.translate(x,A,y),$t(T,.25,.3,.35),T}const w=[];for(let x=0;x<h;x++){const y=(x+.5)*p;x>0&&(w.push(M(-l/2,.5-m,y)),w.push(M(-l/2,.5+m,y)),w.push(M(1+l/2,.5-m,y)),w.push(M(1+l/2,.5+m,y)));for(const A of d)w.push(M(i-l/2,A,y)),w.push(M(1-i+l/2,A,y))}return Bt([n,s,u,f,...w],!1)}const lM=.1127,cM=.1796;function uM(){const i=lM,e=cM,t=[[i,0],[1-i,0],[1-i,e],[1,e],[1,1-e],[1-i,1-e],[1-i,1],[i,1],[i,1-e],[0,1-e],[0,e],[i,e]],n=Lf(t,1);$t(n,1,1,1);const r=.0337,s=.1937,o=.0022;function a(y){const A=new it(o,s,r*2).toNonIndexed();A.deleteAttribute("normal"),A.deleteAttribute("uv");const T=y?1+o/2:-o/2;return A.translate(T,s/2,.5),$t(A,.25,.2,.15),A}const l=a(!1),c=a(!0),u=4,f=1/u,h=.015,p=.0881,_=[.2513,.3946,.6054,.7487],S=[e*.3,e*.7,1-e*.7,1-e*.3];function m(y,A,T){const g=new it(o,p,h*2).toNonIndexed();return g.deleteAttribute("normal"),g.deleteAttribute("uv"),g.translate(y,T,A),$t(g,.25,.3,.35),g}const d=[];for(let y=0;y<u;y++){const A=(y+.5)*f;if(y>0)for(const T of _)d.push(m(-o/2,T,A)),d.push(m(1+o/2,T,A));for(const T of S)d.push(m(i-o/2,T,A)),d.push(m(1-i+o/2,T,A))}const M=.0225,w=.0015;function x(y,A){const T=new it(M*2,p,w).toNonIndexed();T.deleteAttribute("normal"),T.deleteAttribute("uv");const g=y===0?-w/2:1+w/2;return T.translate(.5,A,g),$t(T,.25,.3,.35),T}for(let y=0;y<u;y++){const A=(y+.5)*f;d.push(x(0,A),x(1,A))}return Bt([n,l,c,...d],!1)}function hM(){const i=new jt(.5,.5,1,20).toNonIndexed();return i.translate(.5,.5,.5),i.setAttribute("color",new Be(new Float32Array(i.attributes.position.count*3).fill(1),3)),i}const No=.1727,gh=.3;function fM(){const i=new it(1,No,1).toNonIndexed();i.translate(.5,No/2,.5);const e=1-No,t=new jt(gh,gh,e,20).toNonIndexed();t.translate(.5,No+e/2,.5);const n=Bt([i,t],!1);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3)),n}function dM(){const i=new jt(.5,.5,1,16).toNonIndexed();return i.rotateX(Math.PI/2),i.translate(.5,.5,.5),i.setAttribute("color",new Be(new Float32Array(i.attributes.position.count*3).fill(1),3)),i}function pM(){const i=.16666666666666666,e=i*Math.sqrt(3),t=[[i,i],[3*i,i],[5*i,i],[2*i,i+e],[4*i,i+e]],n=new ze(7031343),r=t.map(([l,c])=>{const u=new jt(i,i,1,10).toNonIndexed();return u.rotateX(Math.PI/2),u.translate(l,c,.5),u.setAttribute("color",new Be(new Float32Array(u.attributes.position.count*3).map((f,h)=>h%3===0?n.r:h%3===1?n.g:n.b),3)),u}),s=Bt(r,!1);s.computeBoundingBox();const{min:o,max:a}=s.boundingBox;return s.translate(-o.x,-o.y,-o.z),s.scale(1/(a.x-o.x),1/(a.y-o.y),1/(a.z-o.z)),s}function mM(){const t=.6930000000000001,n=[0,0,0],r=[1,0,0],s=[0,0,1],o=[1,0,1],a=[.307,1,0],l=[t,1,0],c=[.307,1,1],u=[t,1,1];function f(w,x,y,A){return[w,x,y,w,y,A]}const h=[...f(n,r,o,s),...f(a,l,u,c),...f(n,r,l,a),...f(s,o,u,c),...f(n,a,c,s),...f(r,l,u,o)],p=new Float32Array(h.length*3);h.forEach((w,x)=>{p[x*3]=w[0],p[x*3+1]=w[1],p[x*3+2]=w[2]});const _=new Tt;_.setAttribute("position",new Be(p,3)),$t(_,1,1,1);const S=.8,m=.1752,d=.005,M=new it(m*2,S,d).toNonIndexed();return M.deleteAttribute("normal"),M.deleteAttribute("uv"),M.translate(.5,S/2,1),$t(M,.15,.15,.15),Bt([_,M],!1)}const _h=.07,gM=.6;function _M(){const e=[];for(let d=0;d<=16;d++){const M=d/16*Math.PI;e.push([.5-.5*Math.cos(M),.5*Math.sin(M)])}function t(d,M,w,x){return[d,M,w,d,w,x]}const n=[];for(let d=0;d<16;d++){const[M,w]=e[d],[x,y]=e[d+1];n.push(...t([M,w,0],[x,y,0],[x,y,1],[M,w,1]))}const r=[.5,0,0];for(let d=0;d<16;d++){const[M,w]=e[d],[x,y]=e[d+1];n.push(r,[x,y,0],[M,w,0])}const s=.5-_h,o=.5+_h,a=.5*gM,l=new pf(e.map(([d,M])=>new _e(d,M))),c=new $l([new _e(s,0),new _e(o,0),new _e(o,a),new _e(s,a)]);l.holes.push(c);const u=new wc(l),f=u.attributes.position,h=u.index;for(let d=0;d<h.count;d+=3){const M=[];for(let w=0;w<3;w++){const x=h.getX(d+w);M.push([f.getX(x),f.getY(x),1])}n.push(...M)}const p=new Float32Array(n.length*3);n.forEach((d,M)=>{p[M*3]=d[0],p[M*3+1]=d[1],p[M*3+2]=d[2]});const _=new Tt;_.setAttribute("position",new Be(p,3)),_.computeBoundingBox();const{min:S,max:m}=_.boundingBox;return _.translate(-S.x,-S.y,-S.z),_.scale(1/(m.x-S.x),1/(m.y-S.y),1/(m.z-S.z)),_.setAttribute("color",new Be(new Float32Array(_.attributes.position.count*3).fill(1),3)),_}const xM=8014394,vM=[[/^SM_Norwayhouse_(2b|6a|5a)$/i,6447730],[/^SM_Norwayhouse_3c$/i,9079434],[/yellow/i,11246190],[/red/i,11370100],[/blue/i,5464421],[/green/i,7374451],[/brick/i,10246972],[/white/i,14210248],[/gr[ae]y/i,9079434],[/wooden|wood/i,7031343],[/SM_Industrial_02/i,9079434]];function xi(i){for(const[e,t]of vM)if(e.test(i))return t;return xM}const SM=4881471,MM=7363642,yM=/fall/i,bM=11189378,EM=/snowy/i;function wM(i){return EM.test(i)?bM:yM.test(i)?MM:SM}const AM=11577500,TM=[[/SM_Industrial_02/i,10246972],[/^SM_Industrial_Small_Addon_01$/i,12564649],[/^SM_Norwayhouse_2b$/i,9473873],[/^SM_Norwayhouse_(6a|5a)$/i,6369587],[/^SM_Norwayhouse_3c$/i,2046309],[/^(industrial_office1(_plain)?|CAF_industrial_office1)$/i,6515043]];function Zn(i){for(const[e,t]of TM)if(e.test(i))return t;return AM}function Us(i=!1){const t=new it(1,.62,1).toNonIndexed();t.translate(.5,.62/2,.5),t.deleteAttribute("normal"),t.deleteAttribute("uv"),t.setAttribute("color",new Be(new Float32Array(t.attributes.position.count*3).fill(1),3));const n=i?[[0,.62,0],[0,.62,1],[0,1,.5],[1,.62,0],[1,.62,1],[1,1,.5]]:[[0,.62,0],[1,.62,0],[.5,1,0],[0,.62,1],[1,.62,1],[.5,1,1]],r=[n[0],n[1],n[2],n[3],n[5],n[4],n[0],n[2],n[5],n[0],n[5],n[3],n[1],n[4],n[5],n[1],n[5],n[2]],s=new Float32Array(r.length*3);r.forEach((a,l)=>{s[l*3]=a[0],s[l*3+1]=a[1],s[l*3+2]=a[2]});const o=new Tt;return o.setAttribute("position",new Be(s,3)),o.setAttribute("color",new Be(new Float32Array(o.attributes.position.count*3).fill(1),3)),{walls:t,roof:o}}function RM(){const{walls:i,roof:e}=Us(),t=.62,n=2,r=t/n,s=r*.7,o=r*.3,a=.022,l=.018,c=.005,u=Array.from({length:10},(S,m)=>.05+(m+.5)*.09),f=new Set([2,7]);function h(S,m,d,M){const w=d*r,x=M?s:o,y=M?a:l,A=new it(c,x,y*2).toNonIndexed();A.deleteAttribute("normal"),A.deleteAttribute("uv");let T;M?T=x/2:d===0?T=s+x/2:T=w+r/2;const g=S?1+c/2:-c/2;return A.translate(g,T,m),M?$t(A,.25,.2,.15):$t(A,.25,.3,.35),A}const p=[];return u.forEach((S,m)=>{for(let d=0;d<n;d++)p.push(h(!0,S,d,d===0&&f.has(m))),p.push(h(!1,S,d,!1))}),{walls:Bt([i,...p],!1),roof:e}}function CM(){const{walls:i,roof:e}=Us(),t=.62,n=4,r=t/n,s=r*.7,o=r*.5,a=.022,l=.018,c=.005,u=Array.from({length:10},(S,m)=>.05+(m+.5)*.09),f=new Set([2,7]);function h(S,m,d,M){const w=M?s:o,x=M?a:l,y=new it(c,w,x*2).toNonIndexed();y.deleteAttribute("normal"),y.deleteAttribute("uv");const A=S?1+c/2:-c/2;return y.translate(A,d,m),M?$t(y,.25,.2,.15):$t(y,.25,.3,.35),y}const p=[];return u.forEach((S,m)=>{if(f.has(m))p.push(h(!0,S,s/2,!0)),p.push(h(!0,S,2*r,!1)),p.push(h(!0,S,3*r,!1)),p.push(h(!1,S,2*r,!1)),p.push(h(!1,S,3*r,!1));else for(let M=1;M<n;M++){const w=M*r+r/2;p.push(h(!0,S,w,!1)),p.push(h(!1,S,w,!1))}}),{walls:Bt([i,...p],!1),roof:e}}function PM(){const{walls:i,roof:e}=Us(),t=.62,n=3,r=1.2/16.43,s=1.2/18.5/2,o=2.8/16.43,a=1.47/18.5/2,l=.005,c=Array.from({length:5},(w,x)=>.05+(x+.5)*.18),u=2,f=.02,h=o+f,_=(t-f-h)/n,S=Array.from({length:n},(w,x)=>h+(x+.5)*_);function m(w,x,y,A){const T=A?o:r,g=A?a:s,b=new it(l,T,g*2).toNonIndexed();b.deleteAttribute("normal"),b.deleteAttribute("uv");const R=w?1+l/2:-l/2;return b.translate(R,y,x),A?$t(b,.25,.2,.15):$t(b,.25,.3,.35),b}const d=[];return c.forEach((w,x)=>{if(x===u)d.push(m(!0,w,o/2,!0)),d.push(m(!0,w,(S[0]+S[1])/2,!1)),d.push(m(!0,w,(S[1]+S[2])/2,!1));else for(let y=0;y<n;y++)d.push(m(!0,w,S[y],!1)),d.push(m(!1,w,S[y],!1))}),{walls:Bt([i,...d],!1),roof:e}}const LM=4214105,DM=4207398;function IM(){const i=new it(1,1,1).toNonIndexed();i.translate(.5,.5,.5),i.deleteAttribute("normal"),i.deleteAttribute("uv"),$t(i,1,1,1);const e=2,t=1/e,n=2.2/11.6,s=1.6/31.93*2,o=[2.5/11.6,1.8/11.6],a=.005,l=7,c=(1-l*s)/(l+1),u=Array.from({length:l},(U,P)=>c*(P+1)+s*(P+.5));function f(U,P){const z=P*t+o[P]+n/2,G=new it(a,n,s).toNonIndexed();return G.deleteAttribute("normal"),G.deleteAttribute("uv"),G.translate(-a/2,z,U),$t(G,1,1,1),G}const h=2,p=3.8/11.6;function _(U){const P=new it(a,p,s).toNonIndexed();return P.deleteAttribute("normal"),P.deleteAttribute("uv"),P.translate(-a/2,p/2,U),$t(P,1,1,1),P}const S=1.8/13.04,m=3.2/11.6;function d(U){const P=new it(S,m,a).toNonIndexed();P.deleteAttribute("normal"),P.deleteAttribute("uv");const z=t+m/2,G=U?1+a/2:-a/2;return P.translate(.5,z,G),$t(P,1,1,1),P}const M=[];for(let U=0;U<e;U++)u.forEach((P,z)=>{U===0&&z===h||M.push(f(P,U))});const w=Bt([_(u[h]),d(!0),d(!1)],!1),x=4,y=1/11.6,A=2/31.93,T=1/11.6,g=A*2,b=(1-x*g)/(x+1),R=Array.from({length:x},(U,P)=>b*(P+1)+g*(P+.5)),D=1-T-y/2;function I(U){const P=new it(a,y,g).toNonIndexed();return P.deleteAttribute("normal"),P.deleteAttribute("uv"),P.translate(1+a/2,D,U),$t(P,1,1,1),P}for(const U of R)M.push(I(U));return{walls:i,windows:Bt(M,!1),door:w}}const NM=9079434;function Df(){function n(T,g,b,R){return[T,g,b,T,b,R]}const r=new it(1,.62,1).toNonIndexed();r.translate(.5,.62/2,.5),r.deleteAttribute("normal"),r.deleteAttribute("uv");function s(T){const g=[T,.62,0],b=[T,.62,1],R=[T,.62+.15,1];return[g,b,R]}const o=n([0,.62,1],[1,.62,1],[1,.62+.15,1],[0,.62+.15,1]),a=new Float32Array([...s(0),...s(1),...o].flat()),l=new Tt;l.setAttribute("position",new Be(a,3));const c=Bt([r,l],!1);c.setAttribute("color",new Be(new Float32Array(c.attributes.position.count*3).fill(1),3));const u=.62,f=.62+.15,h=[0,u,0],p=[1,u,0],_=[0,f,1],S=[1,f,1],m=[0,u+.05,0],d=[1,u+.05,0],M=[0,f+.05,1],w=[1,f+.05,1],x=[...n(m,d,w,M),...n(h,_,S,p),...n(h,p,d,m),...n(_,M,w,S),...n(h,m,M,_),...n(p,S,w,d)],y=new Float32Array(x.length*3);x.forEach((T,g)=>{y[g*3]=T[0],y[g*3+1]=T[1],y[g*3+2]=T[2]});const A=new Tt;return A.setAttribute("position",new Be(y,3)),A.setAttribute("color",new Be(new Float32Array(A.attributes.position.count*3).fill(1),3)),{walls:c,roof:A}}const UM=9414293,OM=10523263,FM=4207398;function BM(){const{walls:i,roof:e}=Df();mh(i),mh(e);const t=.005,n=.593,r=.549,s=new it(t,n,r).toNonIndexed();return s.deleteAttribute("normal"),s.deleteAttribute("uv"),s.translate(1+t/2,n/2,.5),$t(s,1,1,1),{walls:i,roof:e,door:s}}function zM(){const e=new it(1,.62,.5).toNonIndexed();e.translate(.5,.62/2,.75);const t=new it(.5,.62,.5).toNonIndexed();t.translate(.25,.62/2,.25);const n=Bt([e,t],!1),r=new ze(9080724);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).map((s,o)=>o%3===0?r.r:o%3===1?r.g:r.b),3)),n}function HM(){const e=new it(1,.62,.5).toNonIndexed();e.translate(.5,.62/2,.25);const t=new it(.5,.62,.5).toNonIndexed();t.translate(.75,.62/2,.75);const n=Bt([e,t],!1);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3)),n}function GM(){const e=new it(1,.62,.5).toNonIndexed();e.translate(.5,.62/2,.75);const t=new it(.5,.62,.5).toNonIndexed();t.translate(.75,.62/2,.25);const n=Bt([e,t],!1);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3)),n}function kM(){const t=new it(1,.62,.5).toNonIndexed();t.translate(.5,.62/2,.75);const n=new it(.5,.62,.5).toNonIndexed();n.translate(.75,.62/2,.25);const r=Bt([t,n],!1);r.deleteAttribute("normal"),r.deleteAttribute("uv"),r.setAttribute("color",new Be(new Float32Array(r.attributes.position.count*3).fill(1),3));function s(c,u,f,h,p){if(p){const m=(f+h)/2,d=[[c,.62,f],[c,.62,h],[c,1,m],[u,.62,f],[u,.62,h],[u,1,m]];return[d[0],d[1],d[2],d[3],d[5],d[4],d[0],d[2],d[5],d[0],d[5],d[3],d[1],d[4],d[5],d[1],d[5],d[2]]}const _=(c+u)/2,S=[[c,.62,f],[u,.62,f],[_,1,f],[c,.62,h],[u,.62,h],[_,1,h]];return[S[0],S[1],S[2],S[3],S[5],S[4],S[0],S[2],S[5],S[0],S[5],S[3],S[1],S[4],S[5],S[1],S[5],S[2]]}const o=[...s(0,1,.5,1,!0),...s(.5,1,0,.5,!1)],a=new Float32Array(o.length*3);o.forEach((c,u)=>{a[u*3]=c[0],a[u*3+1]=c[1],a[u*3+2]=c[2]});const l=new Tt;return l.setAttribute("position",new Be(a,3)),l.setAttribute("color",new Be(new Float32Array(l.attributes.position.count*3).fill(1),3)),{walls:r,roof:l}}function VM(){const t=new it(1,.62,.5).toNonIndexed();t.translate(.5,.62/2,.25);const n=new it(.5,.62,.5).toNonIndexed();n.translate(.75,.62/2,.75);const r=Bt([t,n],!1);r.deleteAttribute("normal"),r.deleteAttribute("uv"),r.setAttribute("color",new Be(new Float32Array(r.attributes.position.count*3).fill(1),3));function s(c,u,f,h,p){if(p){const m=(f+h)/2,d=[[c,.62,f],[c,.62,h],[c,1,m],[u,.62,f],[u,.62,h],[u,1,m]];return[d[0],d[1],d[2],d[3],d[5],d[4],d[0],d[2],d[5],d[0],d[5],d[3],d[1],d[4],d[5],d[1],d[5],d[2]]}const _=(c+u)/2,S=[[c,.62,f],[u,.62,f],[_,1,f],[c,.62,h],[u,.62,h],[_,1,h]];return[S[0],S[1],S[2],S[3],S[5],S[4],S[0],S[2],S[5],S[0],S[5],S[3],S[1],S[4],S[5],S[1],S[5],S[2]]}const o=[...s(0,1,0,.5,!0),...s(.5,1,.5,1,!1)],a=new Float32Array(o.length*3);o.forEach((c,u)=>{a[u*3]=c[0],a[u*3+1]=c[1],a[u*3+2]=c[2]});const l=new Tt;return l.setAttribute("position",new Be(a,3)),l.setAttribute("color",new Be(new Float32Array(l.attributes.position.count*3).fill(1),3)),{walls:r,roof:l}}function xh(i=!1){const n=new it(1,.62,1).toNonIndexed();n.translate(.5,.62/2,.5),n.deleteAttribute("normal"),n.deleteAttribute("uv"),n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3));function r(c,u){const f=(c+u)/2,h=[[0,.62,c],[0,.62,u],[0,1,f],[1,.62,c],[1,.62,u],[1,1,f]];return[h[0],h[1],h[2],h[3],h[5],h[4],h[0],h[2],h[5],h[0],h[5],h[3],h[1],h[4],h[5],h[1],h[5],h[2]]}function s(c,u){const f=(c+u)/2,h=[[c,.62,0],[u,.62,0],[f,1,0],[c,.62,1],[u,.62,1],[f,1,1]];return[h[0],h[1],h[2],h[3],h[5],h[4],h[0],h[2],h[5],h[0],h[5],h[3],h[1],h[4],h[5],h[1],h[5],h[2]]}const o=i?[...s(0,.5),...s(.5,1)]:[...r(0,.5),...r(.5,1)],a=new Float32Array(o.length*3);o.forEach((c,u)=>{a[u*3]=c[0],a[u*3+1]=c[1],a[u*3+2]=c[2]});const l=new Tt;return l.setAttribute("position",new Be(a,3)),l.setAttribute("color",new Be(new Float32Array(l.attributes.position.count*3).fill(1),3)),{walls:n,roof:l}}function WM(){const e=new it(1,.62,.3333333333333333).toNonIndexed();e.translate(.5,.62/2,1/6);const t=new it(1/3,.62,2/3).toNonIndexed();t.translate(.5,.62/2,2/3);const n=Bt([e,t],!1);return n.setAttribute("color",new Be(new Float32Array(n.attributes.position.count*3).fill(1),3)),n}function Tr(i,e,t,n,r,s){const o=i.reduce((m,d)=>m+d.instanceCount,0);if(o===0)return null;const a=new Bs({vertexColors:!0,roughness:1,metalness:0,envMapIntensity:Pf,flatShading:!0,side:vn}),l=new Os(t,a,o),c=new lt,u=new ze,f=new lt;let h=0;const p=new N,_=new zn,S=new N;for(const m of i){const{positions:d,matrices:M}=m.layout,w=new Float32Array(e,d.byteOffset,d.byteLength/4),x=new Float32Array(e,M.byteOffset,M.byteLength/4);let y=m.heightOverride;if(y===void 0){let b=1/0,R=-1/0;for(let D=1;D<w.length;D+=3)w[D]<b&&(b=w[D]),w[D]>R&&(R=w[D]);y=R-b}y=Math.max(y,.5);const A=y/n;f.makeScale(A,A,A);const T=m.label.replace(/_0$/,""),g=s?s(T):null;for(let b=0;b<m.instanceCount;b++)p.set(x[b*10],x[b*10+1],x[b*10+2]),_.set(x[b*10+3],x[b*10+4],x[b*10+5],x[b*10+6]),S.set(x[b*10+7],x[b*10+8],x[b*10+9]),c.compose(p,_,S).multiply(f),l.setMatrixAt(h,c),g!==null&&l.setColorAt(h,u.setHex(g)),h++}return l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.name=r,l}function ot(i,e,t,n,r){const s=i.reduce((d,M)=>d+M.instanceCount,0);if(s===0)return null;const o=new Bs({vertexColors:!0,roughness:1,metalness:0,envMapIntensity:Pf,flatShading:!0,side:vn}),a=new Os(t,o,s),l=new lt,c=new ze,u=new lt,f=new lt,h=new lt,p=new N,_=new zn,S=new N;let m=0;for(const d of i){const{matrices:M}=d.layout,w=new Float32Array(e,M.byteOffset,M.byteLength/4),[x,y,A]=d.bboxMin,[T,g,b]=d.bboxMax;f.makeScale(Math.max(T-x,.01),Math.max(g-y,.01),Math.max(b-A,.01)),h.makeTranslation(x,y,A),u.multiplyMatrices(h,f);const R=d.label.replace(/_0$/,""),D=r?r(R):null;for(let I=0;I<d.instanceCount;I++)p.set(w[I*10],w[I*10+1],w[I*10+2]),_.set(w[I*10+3],w[I*10+4],w[I*10+5],w[I*10+6]),S.set(w[I*10+7],w[I*10+8],w[I*10+9]),l.compose(p,_,S).multiply(u),a.setMatrixAt(m,l),D!==null&&a.setColorAt(m,c.setHex(D)),m++}return a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.name=n,a}async function XM(i){const e={vegetation:[],structures:[]},t=await fetch(`${i}3d/trees.json`);if(!t.ok||!(t.headers.get("content-type")||"").includes("json"))return e;let n;try{n=await t.json()}catch{return e}const r=await fetch(`${i}3d/trees.bin`).then(W=>W.arrayBuffer()),s=new Set(["box","house","monoslopehouse","monoslopehousedoor","toppedbox","notchedapartment","facadehouse","fourstoryapartment","threestorysmallapartment","industrialoffice","lshape","lshapehouse","lshapehouse2","tshape","doublegable","cylinder","chimney","log","lshapebox","lshapebox2","logpile","bunker","tubehangar"]),o=n.species.filter(W=>W.label.endsWith("_0")||s.has(W.kind)),a=o.filter(W=>W.kind==="bush"),l=o.filter(W=>W.kind==="box"),c=o.filter(W=>W.kind==="house"),u=c.filter(W=>!dh(W.label.replace(/_0$/,""))),f=c.filter(W=>dh(W.label.replace(/_0$/,""))),h=o.filter(W=>W.kind==="monoslopehouse"),p=o.filter(W=>W.kind==="monoslopehousedoor"),_=o.filter(W=>W.kind==="toppedbox"),S=o.filter(W=>W.kind==="notchedapartment"),m=o.filter(W=>W.kind==="facadehouse"),d=o.filter(W=>W.kind==="fourstoryapartment"),M=o.filter(W=>W.kind==="threestorysmallapartment"),w=o.filter(W=>W.kind==="industrialoffice"),x=o.filter(W=>W.kind==="lshape"),y=o.filter(W=>W.kind==="lshapehouse"),A=o.filter(W=>W.kind==="lshapehouse2"),T=o.filter(W=>W.kind==="tshape"),g=o.filter(W=>W.kind==="doublegable"),b=g.filter(W=>!ph(W.label.replace(/_0$/,""))),R=g.filter(W=>ph(W.label.replace(/_0$/,""))),D=o.filter(W=>W.kind==="cylinder"),I=o.filter(W=>W.kind==="chimney"),U=o.filter(W=>W.kind==="log"),P=o.filter(W=>W.kind==="lshapebox"),z=o.filter(W=>W.kind==="lshapebox2"),G=o.filter(W=>W.kind==="logpile"),Z=o.filter(W=>W.kind==="bunker"),se=o.filter(W=>W.kind==="tubehangar"),q=o.filter(W=>W.kind!=="bush"&&!s.has(W.kind)),Q=q.filter(W=>uh(W.label.replace(/_0$/,""))),re=q.filter(W=>hh(W.label.replace(/_0$/,""))),ye=q.filter(W=>fh(W.label.replace(/_0$/,""))),pe=q.filter(W=>!uh(W.label.replace(/_0$/,""))&&!hh(W.label.replace(/_0$/,""))&&!fh(W.label.replace(/_0$/,""))),je=$S(),et=KS(),ct=JS(),K=QS(),ie=jS(),be=nM(),He=Us(),Se=Us(!0),ce=Df(),Lt=BM(),$e=aM(),ut=uM(),vt=RM(),Ke=CM(),yt=PM(),bt=IM(),Yt=zM(),Dt=kM(),Ot=VM(),B=WM(),qt=xh(),rt=xh(!0),C=hM(),v=fM(),H=dM(),X=HM(),$=GM(),le=pM(),fe=mM(),J=_M(),te=[],ue=[],we=W=>{W&&te.push(W)},ne=W=>{W&&ue.push(W)};return we(Tr(pe,r,je.trunk,je.height,"trees_round_trunk")),we(Tr(pe,r,je.canopy,je.height,"trees_round_canopy",wM)),we(Tr(Q,r,et.geometry,et.height,"trees_columnar")),we(Tr(re,r,ct.geometry,ct.height,"trees_conical")),we(Tr(ye,r,K.geometry,K.height,"trees_pine")),we(Tr(a,r,ie.geometry,ie.height,"bushes_generic")),ne(ot(l,r,be,"box_props_generic",qn)),ne(ot(u,r,He.walls,"house_props_walls",Zn)),ne(ot(u,r,He.roof,"house_props_roof",xi)),ne(ot(f,r,Se.walls,"house_props_walls_ridgex",Zn)),ne(ot(f,r,Se.roof,"house_props_roof_ridgex",xi)),ne(ot(h,r,ce.walls,"monoslopehouse_props_walls",Zn)),ne(ot(h,r,ce.roof,"monoslopehouse_props_roof",()=>NM)),ne(ot(p,r,Lt.walls,"monoslopehousedoor_props_walls",()=>OM)),ne(ot(p,r,Lt.roof,"monoslopehousedoor_props_roof",()=>UM)),ne(ot(p,r,Lt.door,"monoslopehousedoor_props_door",()=>FM)),ne(ot(_,r,$e,"toppedbox_props_generic",qn)),ne(ot(S,r,ut,"notchedapartment_props_generic",qn)),ne(ot(m,r,vt.walls,"facadehouse_props_walls",Zn)),ne(ot(m,r,vt.roof,"facadehouse_props_roof",xi)),ne(ot(d,r,Ke.walls,"fourstoryapartment_props_walls",Zn)),ne(ot(d,r,Ke.roof,"fourstoryapartment_props_roof",xi)),ne(ot(M,r,yt.walls,"threestorysmallapartment_props_walls",Zn)),ne(ot(M,r,yt.roof,"threestorysmallapartment_props_roof",xi)),ne(ot(w,r,bt.walls,"industrialoffice_props_walls",Zn)),ne(ot(w,r,bt.windows,"industrialoffice_props_windows",()=>LM)),ne(ot(w,r,bt.door,"industrialoffice_props_door",()=>DM)),ne(ot(x,r,Yt,"lshape_props_generic")),ne(ot(y,r,Dt.walls,"lshapehouse_props_walls",Zn)),ne(ot(y,r,Dt.roof,"lshapehouse_props_roof",xi)),ne(ot(A,r,Ot.walls,"lshapehouse2_props_walls",Zn)),ne(ot(A,r,Ot.roof,"lshapehouse2_props_roof",xi)),ne(ot(T,r,B,"tshape_props_generic",qn)),ne(ot(b,r,qt.walls,"doublegable_props_walls",Zn)),ne(ot(b,r,qt.roof,"doublegable_props_roof",xi)),ne(ot(R,r,rt.walls,"doublegable_props_walls_ridgez",Zn)),ne(ot(R,r,rt.roof,"doublegable_props_roof_ridgez",xi)),ne(ot(D,r,C,"cylinder_props_generic",qn)),ne(ot(I,r,v,"chimney_props_generic",qn)),ne(ot(U,r,H,"log_props_generic",qn)),ne(ot(P,r,X,"lshapebox_props_generic",qn)),ne(ot(z,r,$,"lshapebox2_props_generic",qn)),ne(ot(G,r,le,"logpile_props_generic")),ne(ot(Z,r,fe,"bunker_props_generic",qn)),ne(ot(se,r,J,"tubehangar_props_generic",qn)),{vegetation:te,structures:ue}}const If=new URLSearchParams(location.search).get("assets")==="local"?"/__squadcalc":"https://squadcalc.app/api",Zt=512,YM=100,qM=new URLSearchParams(location.search).has("bench"),Qa=Number(new URLSearchParams(location.search).get("frame"))||600,Uo=128,ja=256,el=256,Nf=Number(new URLSearchParams(location.search).get("z3d"))||0,vh={KeyW:"f",KeyZ:"f",KeyS:"b",KeyA:"l",KeyQ:"l",KeyD:"r",KeyC:"u",PageUp:"u",KeyX:"d",PageDown:"d"},Uf="sqr.map3d.helpClosed",ZM=()=>{try{return localStorage.getItem(Uf)==="1"}catch{return!1}},$M=[["basemap","Satellite"],["topomap","Topographic"],["terrainmap","Terrain"]];async function Of(i,e){const t=new Pm,n=await t.loadAsync(`${i}${e}.webp`).catch(r=>{if(e==="basemap")throw r;return t.loadAsync(`${i}basemap.webp`)});return n.colorSpace=on,n.anisotropy=8,n}async function KM(i,e){const t=If+i.url;let n=await fetch(t+"3d/landscape.png");const r=n.ok;if(n.ok||(n=await fetch(t+"heightmap.png")),!n.ok)throw new Error(`no heightmap for ${i.url}`);const s=await createImageBitmap(await n.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),a=new OffscreenCanvas(Zt,Zt).getContext("2d",{willReadFrequently:!0});a.imageSmoothingEnabled=!1,a.drawImage(s,0,0,Zt,Zt);const l=a.getImageData(0,0,Zt,Zt).data,c=(r?i.heightScale3D:null)??i.heightScale??1,u=(r?i.zOffset3D:null)??i.zOffset??0,f=Math.abs(i.corner1[0]-i.corner0[0]),h=new kr(f,f,Zt-1,Zt-1);h.rotateX(-Math.PI/2);const p=h.attributes.position,_=new Float32Array(Zt*Zt);for(let d=0;d<Zt*Zt;d++)_[d]=(255+l[d*4]-l[d*4+2])*c+u+Nf,p.setY(d,_[d]);h.computeVertexNormals();const S=await Of(t,e);return{mesh:new pn(h,new Bs({map:S,roughness:.9,metalness:0})),c0:i.corner0,size:f,heights:_,base:t}}function $n(i,e,t){return[e/100-i.c0[0]-i.size/2,t/100-i.c0[1]-i.size/2]}function JM(i,e,t){return[(e+i.size/2+i.c0[0])*100,(t+i.size/2+i.c0[1])*100]}function dn(i,e,t){const n=Math.round((e+i.size/2)/i.size*(Zt-1)),r=Math.round((t+i.size/2)/i.size*(Zt-1)),s=Math.max(0,Math.min(Zt-1,n)),o=Math.max(0,Math.min(Zt-1,r));return i.heights[o*Zt+s]}function Sh(i,e){const t=new N;for(let n=0;n<2e4;n+=Math.max(1,n*.005))if(e.at(n,t),t.y<=dn(i,t.x,t.z))return t;return null}function vi(i,e){const t=i.attributes.position.count;return i.setAttribute("color",new Be(new Float32Array(t*3).fill(e),3)),i}function dt(i,e,t,n,r,s=0,o=1){return vi(new it(i,e,t).translate(n,r,s),o)}function Li(i,e,t,n,r,s=0,o=1,a=12){return vi(new jt(i,e,t,a).translate(n,r,s),o)}function QM(i,e,t,n,r=.55){return vi(new jt(i,i,e,8).rotateZ(-Math.PI/2).translate(t+e/2,n,0),r)}const tc=-.85,ys=.55,Xo=1.7,jM="./icons/roles/T_role_rifleman.png",ey=()=>Bt([Li(ys,ys,Xo,0,tc+Xo/2,0,1,20),dt(.3,.35,.3,ys,tc+Xo*.7,0,.3)]),ty={mbt:[8.5,2.4,3.6],tankDestroyer:[7.2,2.4,2.9],ifvTracked:[6.8,2.4,3.2],ifvWheeled:[7,2.4,2.9],apcTracked:[5.4,2.1,2.8],apcWheeled:[7,2.4,2.8],mrap:[5.2,2.1,2.4],jeep:[4.8,1.6,2.1],bike:[2,1,1],truck:[7.6,2.8,2.5],logiTruck:[7.6,2.8,2.5],heli:[9,1.6,9],heliLight:[6,1.3,6],boat:[6.5,1,2.6],other:[5,2,2.6]},tl=new zn().setFromEuler(new Ei(-Math.PI/2,-Math.PI/2,0,"YXZ")),ny=new kr(1,1),nl=160,Mh=new Map;function yh(i){const e=Mh.get(i);if(e)return e;const t=rc(i);if(!t.complete||!t.naturalWidth)return null;const n=new en(t);return n.colorSpace=on,n.anisotropy=8,n.needsUpdate=!0,Mh.set(i,n),n}const bh={radio:()=>[dt(1.3,.9,.9,0,.45,0,.35),dt(.9,.5,.7,0,1.15,0,.55),Li(.07,.09,5,-.3,2.9,0,.3,8),dt(.05,.05,1.2,-.3,3.6,0,.3),dt(.05,.05,.9,-.3,4.6,0,.3),vi(new ra(.28,12,8).translate(-.3,5.55,0),1.6)],hab:()=>[dt(5.5,2,5.5,0,1,0,.7),vi(new Fs(4.3,1.7,4).rotateY(Math.PI/4).translate(0,2.85,0),1),dt(.1,1.5,1.4,2.76,.75,0,.15)],rally:()=>[dt(.75,.4,.45,.45,.2,.2,.55),Li(.03,.03,1.9,0,.95,0,.35,6),vi(new jt(.7,.7,.03,3).rotateX(Math.PI/2).rotateZ(Math.PI/2).translate(.35,1.5,0),1.2)],ammoCrate:()=>[dt(1.6,.75,1,0,.38,0,.7),dt(1.65,.12,1.05,0,.81,0,1),dt(.12,.76,1.02,0,.38,0,1.2)],ammoBag:()=>[dt(.55,.3,.35,0,.15,0,.8)],construction:()=>[dt(1.5,.7,1.5,0,.35,0,.7),dt(1.6,.18,1.6,0,.8,0,1.25)],repair:()=>[dt(2,.9,1.3,0,.45,0,.75),dt(.2,1.9,.2,-.7,1.85,0,.35),dt(1.8,.2,.2,.1,2.8,0,.35),Li(.2,.2,.12,-.4,.96,.3,1.2)],mortar:()=>[Li(.45,.45,.08,0,.04,0,.4),vi(new jt(.06,.07,1.3,8).rotateZ(-.7).translate(.4,.55,0),.35),...[-1,1].map(i=>vi(new jt(.025,.025,.85,5).rotateX(i*.35).translate(.65,.4,i*.15),.35)),dt(.4,.25,.3,-.5,.13,.4,1)],mine:()=>[Li(.25,.3,.1,0,.05,0,.6,14),Li(.06,.06,.04,0,.12,0,1.2,8)],emplacement:()=>[Li(1.3,1.4,.6,0,.3,0,.65,10),dt(.3,.7,.3,0,.95,0,.35),dt(.9,.3,.3,.1,1.4,0,.5),QM(.05,1.2,.5,1.4)],sandbags:()=>[dt(1.4,.35,.55,0,.18,0,.6),dt(1.1,.3,.5,0,.5,0,.66)],sandbagWall:()=>[dt(3,.45,.7,0,.23,0,.6),dt(2.8,.4,.6,0,.65,0,.66),dt(2.6,.35,.55,0,1.02,0,.6)],hesco:()=>[dt(2,1.4,1,0,.7,0,.6),dt(2.04,.08,1.04,0,1.38,0,.35)],razorwire:()=>[vi(new jt(.4,.4,3,10,1,!0).rotateZ(Math.PI/2).translate(0,.4,0),.3)],bunker:()=>[dt(3,1.5,3,0,.75,0,.6),dt(3.3,.25,3.3,0,1.62,0,.7),dt(.1,.25,1.6,1.51,1.1,0,.15)],explosive:()=>[dt(.3,.12,.2,0,.06,0,.45),dt(.08,.05,.08,.05,.14,0,1.3)],ladder:()=>[dt(.06,2.6,.06,0,1.3,-.22,.4),dt(.06,2.6,.06,0,1.3,.22,.4),...[.4,.9,1.4,1.9,2.4].map(i=>dt(.05,.05,.44,0,i,0,.4))],other:()=>[dt(1,1,1,0,.5,0,.8)]};function us(i,e){const t=new Os(i,new Bs({roughness:.7,vertexColors:!!i.attributes.color}),e);return t.instanceColor=new Zi(new Float32Array(e*3),3),t.instanceMatrix.setUsage(Wi),t.frustumCulled=!1,t.count=0,t}const iy=15,ry=45,Rr=10,Dr=16,Ff=.3,Hs=(i,e)=>i*73856093^e*19349663;function Tc(i,e){i.alphaToCoverage=!0,i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aFade;
varying float vFade;`).replace("#include <begin_vertex>",e?`#include <begin_vertex>
        vec3 instW = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vFade = min(aFade, mix(${Ff.toFixed(2)}, 1.0,
          smoothstep(${iy.toFixed(1)}, ${ry.toFixed(1)},
                     distance(instW, cameraPosition))));`:`#include <begin_vertex>
vFade = aFade;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vFade;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vFade;`)},i.customProgramCacheKey=()=>e?"fade-cam":"fade",i.needsUpdate=!0}function sy(i){const e=i.count,t=new Float32Array(e).fill(1),n=new Zi(t,1);n.setUsage(Wi),i.geometry=i.geometry.clone(),i.geometry.setAttribute("aFade",n),Tc(i.material,!0),i.updateMatrixWorld(!0);const r=new Float32Array(e*2),s=new Map,o=new lt,a=new N;for(let l=0;l<e;l++){i.getMatrixAt(l,o),a.setFromMatrixPosition(o).applyMatrix4(i.matrixWorld),r[l*2]=a.x,r[l*2+1]=a.z;const c=Hs(Math.floor(a.x/Dr),Math.floor(a.z/Dr));(s.get(c)??s.set(c,[]).get(c)).push(l)}return{fade:t,attr:n,xz:r,grid:s,touched:[]}}function oy(i,e){if(!e.length)return;e.sort((r,s)=>r-s),i.clearUpdateRanges();let t=e[0],n=t;for(const r of e)r-n>16&&(i.addUpdateRange(t,n-t+1),t=r),n=r;i.addUpdateRange(t,n-t+1),i.needsUpdate=!0}const nc=1<<20;function ay(i){const e=new Map;return i.forEach((t,n)=>{for(const[r,s]of t.grid){const o=e.get(r)??e.set(r,[]).get(r);for(const a of s)o.push(n*nc+a)}}),e}function ly(i,e,t){const n=new Map;for(const r of i)if(r.touched.length){n.set(r,r.touched.slice());for(const s of r.touched)r.fade[s]=1;r.touched.length=0}for(let r=0;r<t.length;r+=3){const s=t[r],o=t[r+2],a=Math.floor((s-Rr)/Dr),l=Math.floor((s+Rr)/Dr),c=Math.floor((o-Rr)/Dr),u=Math.floor((o+Rr)/Dr);for(let f=a;f<=l;f++)for(let h=c;h<=u;h++)for(const p of e.get(Hs(f,h))??[]){const _=i[Math.floor(p/nc)],S=p%nc,m=Math.hypot(_.xz[S*2]-s,_.xz[S*2+1]-o);if(m>=Rr)continue;const d=Math.max(Ff,Math.min(1,(m/Rr-.6)/.4));d<_.fade[S]&&(_.fade[S]===1&&_.touched.push(S),_.fade[S]=d)}}for(const r of i){const s=n.get(r);(s||r.touched.length)&&oy(r.attr,(s??[]).concat(r.touched))}}const cy="./icons/mark/rallypoint.png",Oo=2.5,Eh=new Map;function uy(i,e,t,n,r){const s=rc(e);if(!s.complete||!s.naturalWidth)return!1;const o=128;i.width=o,i.height=r?Math.round(o*1.42):o;const a=i.getContext("2d");if(cd(a,o/2,o/2,o*.84,t,s,n),r){a.font="bold 40px system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle";const l=Math.max(a.measureText(r).width+22,50),c=46,u=o*.93;a.fillStyle="#13171f",a.strokeStyle=t,a.lineWidth=5,a.beginPath(),a.roundRect(o/2-l/2,u,l,c,9),a.fill(),a.stroke(),a.fillStyle="#fff",a.fillText(r,o/2,u+c/2+1)}return!0}function wh(i,e,t,n){const r=`${i}|${e}|${t}|${n??""}`,s=Eh.get(r);if(s)return s;const o=document.createElement("canvas");if(!uy(o,i,e,t,n))return null;const a=new na(o);return a.colorSpace=on,Eh.set(r,a),a}const hy="./icons/scoreboard/deaths.png",Ah=3e4,Th=1800,bs=i=>i.eosId??(i.playerId!=null?`pid:${i.playerId}`:`name:${i.name??"?"}`),Bf=i=>Date.parse(i.timestamp)||0,zf=i=>!!i.position&&(!i.stale||ic(i));function fy(i,e){(e[0]!==i.first||e.length<i.upto)&&(i.first=e[0]??null,i.upto=0,i.deaths=[],i.blasts=new Map);for(let t=Math.max(1,i.upto);t<e.length;t++){const n=e[t-1],r=e[t],s=Bf(r),o=new Map((r.players??[]).map(a=>[bs(a),a.soldier]));for(const a of n.players??[]){const l=a.soldier;if(!(l!=null&&l.position)||!ic(l))continue;const c=o.get(bs(a));c&&zf(c)||i.deaths.push({t:s,player:a,...l.position})}for(const a of r.vehicles??[])(a.health??1)<=0&&a.position&&!i.blasts.has(a.id)&&i.blasts.set(a.id,{t:s,...a.position})}i.upto=e.length}let hs=null;function dy(){if(hs)return hs;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");e.lineCap="round";for(const[t,n]of[[14,"rgba(0,0,0,0.6)"],[8,"#ffffff"]])e.strokeStyle=n,e.lineWidth=t,e.beginPath(),e.moveTo(14,14),e.lineTo(50,50),e.moveTo(50,14),e.lineTo(14,50),e.stroke();return hs=new na(i),hs.colorSpace=on,hs}let il=null;function py(){if(il)return il;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(70,68,66,0.9)"),t.addColorStop(1,"rgba(70,68,66,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),il=new na(i)}const Hf=.25,Ir=32,my=.5,gy=2.5,_y=2;function xy(i){i.updateMatrixWorld(!0);const e=[];let t,n,r=null;if(i.isInstancedMesh){const a=i;a.geometry=a.geometry.clone(),a.geometry.computeBoundingBox();const l=new lt;for(let c=0;c<a.count;c++)a.getMatrixAt(c,l),e.push(a.geometry.boundingBox.clone().applyMatrix4(l.premultiply(a.matrixWorld)));t=new Float32Array(a.count).fill(1),n=new Zi(t,1)}else{const a=i.userData.parts,l=i.geometry.index;if(!a||!l)return null;r=new Uint32Array(a.length*2),a.forEach((c,u)=>{let f=1/0,h=-1;for(let p=c.start;p<c.start+c.count;p++){const _=l.getX(p);_<f&&(f=_),_>h&&(h=_)}r[u*2]=f,r[u*2+1]=h-f+1,e.push(c.box.clone().applyMatrix4(i.matrixWorld))}),t=new Float32Array(i.geometry.attributes.position.count).fill(1),n=new Be(t,1)}n.setUsage(Wi),i.geometry.setAttribute("aFade",n),Tc(i.material,!1);const s=new Float32Array(e.length*6),o=new Map;return e.forEach((a,l)=>{if(s.set([a.min.x,a.min.y,a.min.z,a.max.x,a.max.y,a.max.z],l*6),!(a.max.y-a.min.y<gy||Math.min(a.max.x-a.min.x,a.max.z-a.min.z)<_y))for(let c=Math.floor(a.min.x/Ir);c<=Math.floor(a.max.x/Ir);c++)for(let u=Math.floor(a.min.z/Ir);u<=Math.floor(a.max.z/Ir);u++){const f=Hs(c,u);(o.get(f)??o.set(f,[]).get(f)).push(l)}}),{fade:t,attr:n,boxes:s,ranges:r,grid:o,touched:[]}}function Rh(i,e,t){if(!i.ranges){i.fade[e]=t;return}const n=i.ranges[e*2],r=i.ranges[e*2+1];i.fade.fill(t,n,n+r),i.attr.addUpdateRange(n,r)}function vy(i,e){const t=i.touched;i.touched=[];const n=new Set;for(let r=0;r<e.length;r+=3){const s=e[r],o=e[r+1],a=e[r+2];for(const l of i.grid.get(Hs(Math.floor(s/Ir),Math.floor(a/Ir)))??[]){const c=l*6,u=my;s>i.boxes[c]-u&&o>i.boxes[c+1]-u&&a>i.boxes[c+2]-u&&s<i.boxes[c+3]+u&&o<i.boxes[c+4]+u&&a<i.boxes[c+5]+u&&n.add(l)}}if(!(!t.length&&!n.size)){i.attr.clearUpdateRanges();for(const r of t)n.has(r)||Rh(i,r,1);for(const r of n)Rh(i,r,Hf),i.touched.push(r);i.ranges||i.attr.clearUpdateRanges(),i.attr.needsUpdate=!0}}function ri({keys:i,label:e}){return Ce.jsxs("div",{className:"m3d-row",children:[Ce.jsx("span",{className:"m3d-keys",children:i}),Ce.jsx("span",{children:e})]})}function fs({button:i}){return Ce.jsxs("svg",{className:"m3d-mouse",viewBox:"0 0 14 20","aria-label":i?`${i} mouse button`:"mouse",children:[Ce.jsx("rect",{x:"1",y:"1",width:"12",height:"18",rx:"6"}),Ce.jsx("path",{d:"M7 1v7M1 8h12"}),i==="left"&&Ce.jsx("path",{className:"lit",d:"M7 1.5A5.5 5.5 0 0 0 1.5 7V8H7Z"}),i==="wheel"&&Ce.jsx("rect",{className:"lit",x:"5.8",y:"3",width:"2.4",height:"4.2",rx:"1.2"})]})}const Ch=500;function Sy(i){const e=new lt,t=new N,n=new ze,r=new Map;for(let s=0;s<i.count;s++){i.getMatrixAt(s,e),t.setFromMatrixPosition(e);const o=Hs(Math.floor(t.x/Ch),Math.floor(t.z/Ch));(r.get(o)??r.set(o,[]).get(o)).push(s)}return[...r.values()].map(s=>{const o=new Os(i.geometry,i.material,s.length);return o.name=i.name,o.position.copy(i.position),o.quaternion.copy(i.quaternion),o.scale.copy(i.scale),s.forEach((a,l)=>{i.getMatrixAt(a,e),o.setMatrixAt(l,e),i.instanceColor&&(i.getColorAt(a,n),o.setColorAt(l,n))}),o.computeBoundingSphere(),o})}const My=i=>/bush/i.test(i)?450:/trunk/i.test(i)?1500:1/0,Gf=22;function yy(i,e){const t=i.x+e.dx,n=i.y+e.dy,r=[];if(e.type==="sphere"){for(let c=0;c<48;c++){const u=c/48*Math.PI*2;r.push([t+Math.cos(u)*e.radius,n+Math.sin(u)*e.radius])}return r}const s=[];if(e.type==="box")s.push([-e.extX,-e.extY],[e.extX,-e.extY],[e.extX,e.extY],[-e.extX,e.extY]);else{const c=Math.max(0,e.length-e.radius);for(let u=0;u<=16;u++){const f=u/16*Math.PI;s.push([Math.cos(f)*e.radius,c+Math.sin(f)*e.radius])}for(let u=0;u<=16;u++){const f=Math.PI+u/16*Math.PI;s.push([Math.cos(f)*e.radius,-c+Math.sin(f)*e.radius])}}const o=(e.rot||0)*Math.PI/180,a=Math.cos(o),l=Math.sin(o);for(const[c,u]of s)r.push([t+a*c-l*u,n+l*c+a*u]);return r}function by(i,e){const t=e.length,n=[],r=[],s=[];for(const[a,l]of e){const[c,u]=$n(i,a,l),f=dn(i,c,u);n.push(c,f-1,u,c,f+Gf,u),r.push(1,1,1,.6,1,1,1,0)}for(let a=0;a<t;a++){const l=a*2,c=(a+1)%t*2;s.push(l,c,l+1,c,c+1,l+1)}const o=new Tt;return o.setAttribute("position",new Pt(n,3)),o.setAttribute("color",new Pt(r,4)),o.setIndex(s),o}const Ph=new Map;function rl(i,e){const t=`${i}|${e}`,n=Ph.get(t);if(n)return n;const r=document.createElement("canvas"),s=r.getContext("2d"),o="bold 30px system-ui, sans-serif";s.font=o,r.width=Math.ceil(s.measureText(i).width)+32,r.height=48,s.font=o,s.textAlign="center",s.textBaseline="middle",s.fillStyle="rgba(15,17,22,0.85)",s.strokeStyle=e,s.lineWidth=4,s.beginPath(),s.roundRect(2,2,r.width-4,r.height-4,10),s.fill(),s.stroke(),s.fillStyle="#fff",s.fillText(i,r.width/2,r.height/2+1);const a=new na(r);return a.colorSpace=on,Ph.set(t,a),a}const Ey=.8;function kf(i,e,t){const n=(e+i.size/2)/i.size*(Zt-1),r=(t+i.size/2)/i.size*(Zt-1),s=Math.max(0,Math.min(Zt-2,Math.floor(n))),o=Math.max(0,Math.min(Zt-2,Math.floor(r))),a=Math.max(0,Math.min(1,n-s)),l=Math.max(0,Math.min(1,r-o)),c=(u,f)=>i.heights[u*Zt+f];return(c(o,s)*(1-a)+c(o,s+1)*a)*(1-l)+(c(o+1,s)*(1-a)+c(o+1,s+1)*a)*l}function Rc(i,e){const t=[],n=[];e((s,o,a,l,c,u,f,h)=>{const p=t.length/3;for(const[_,S]of[[s,o],[a,l],[c,u],[f,h]])t.push(_,kf(i,_,S)+Ey,S);n.push(p,p+1,p+2,p+1,p+3,p+2)});const r=new Tt;return r.setAttribute("position",new Pt(t,3)),r.setIndex(n),r}function sl(i,e,t,n,r,s=!1){const o=Math.max(48,Math.min(720,Math.ceil(2*Math.PI*r/5)));return Rc(i,a=>{for(let l=0;l<o;l++){if(s&&l%4>=2)continue;const c=l/o*Math.PI*2,u=(l+1)/o*Math.PI*2;a(e+Math.cos(c)*n,t+Math.sin(c)*n,e+Math.cos(u)*n,t+Math.sin(u)*n,e+Math.cos(c)*r,t+Math.sin(c)*r,e+Math.cos(u)*r,t+Math.sin(u)*r)}})}function Lh(i,e,t,n){return Rc(i,r=>{for(let a=0;a<8;a++)for(let l=0;l<72;l++){const c=a/8*n,u=(a+1)/8*n,f=l/72*Math.PI*2,h=(l+1)/72*Math.PI*2;r(e+Math.cos(f)*c,t+Math.sin(f)*c,e+Math.cos(h)*c,t+Math.sin(h)*c,e+Math.cos(f)*u,t+Math.sin(f)*u,e+Math.cos(h)*u,t+Math.sin(h)*u)}})}function wy(i,e,t,n,r,s,o){const a=Math.hypot(n-e,r-t)||1,l=(n-e)/a,c=(r-t)/a,u=-c,f=l,h=o?Math.min(a*.35,s*4):0,p=a-h,_=S=>S<=p?s/2:s*1.4*(1-(S-p)/Math.max(1e-6,h));return Rc(i,S=>{for(let d=0;d<a;d+=4){const M=Math.min(a,d+4);if(!o&&Math.floor(d/8)%2)continue;const w=d<p&&M>p?s/2:_(d),x=_(M),y=e+l*d,A=t+c*d,T=e+l*M,g=t+c*M;if(S(y-u*w,A-f*w,T-u*x,g-f*x,y+u*w,A+f*w,T+u*x,g+f*x),o&&d<p&&M>p){const b=e+l*p,R=t+c*p,D=s*1.4;S(b-u*D,R-f*D,T-u*x,g-f*x,b+u*D,R+f*D,T+u*x,g+f*x)}}})}const Dh=new Map;function Cr(i,e){const t=`${i}|${e}`;let n=Dh.get(t);return n||(n=new Fr({color:i,transparent:!0,opacity:e,depthWrite:!1,side:vn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Dh.set(t,n)),n}const Ih=new Map;function Ay(i,e){const t=Oh(i),n=t?null:ad(i),r=`${t??n}|${e}`,s=Ih.get(r);if(s)return s;let o;if(t==="diamond"||t==="point"){const l=document.createElement("canvas"),c=l.getContext("2d");l.width=l.height=64,c.fillStyle=e,c.strokeStyle="rgba(0,0,0,0.8)",c.lineWidth=5,c.beginPath(),t==="diamond"?(c.moveTo(32,6),c.lineTo(58,32),c.lineTo(32,58),c.lineTo(6,32),c.closePath()):c.arc(32,32,14,0,Math.PI*2),c.fill(),c.stroke(),o=l}else{if(!n)return null;const l=rc(n);if(!l.complete||!l.naturalWidth)return null;o=ld(l,e)??l}const a=new en(o);return a.colorSpace=on,a.needsUpdate=!0,Ih.set(r,a),a}const ol="sqr.map3d.texture",Nh="sqr.map3d.fps",al=(i,e)=>{try{return localStorage.getItem(i)??e}catch{return e}},Uh=(i,e)=>{try{localStorage.setItem(i,e)}catch{}};function Cy({onHover:i,onLeave:e,onClick:t}){const n=Rn.useRef(null),r=Rn.useRef(null),s=Rn.useRef({onHover:i,onLeave:e,onClick:t});s.current={onHover:i,onLeave:e,onClick:t};const[o,a]=Rn.useState(()=>!ZM()),[l,c]=Rn.useState(!1),[u,f]=Rn.useState(()=>al(ol,"basemap")),[h,p]=Rn.useState(()=>al(Nh,"0")==="1"),_=Rn.useRef(null),S=Rn.useRef(null),m=Rn.useRef(h);m.current=h;const d=M=>{a(M);try{localStorage.setItem(Uf,M?"0":"1")}catch{}};return Rn.useEffect(()=>{const M=n.current,w=new Uv({antialias:!0});w.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));const x=w.domElement;x.style.cssText="width:100%;height:100%;display:block;touch-action:none;cursor:grab",M.prepend(x);const y=new yp;w.toneMapping=oc,w.toneMappingExposure=.85,y.background=new ze("#a9c4dc"),y.environmentIntensity=.5,y.add(new Nm("#ffffff",.5));const A=new Im("#ffffff",1.6);A.position.setFromSphericalCoords(1,tu.degToRad(55),tu.degToRad(130)),y.add(A),new Ov().load(HS,ee=>{ee.mapping=Bo,y.background=ee,y.environment=ee,Ee=!0});const T=new Fn(55,1,.5,3e4);T.rotation.order="YXZ";let g=0,b=-Math.PI/4;const R={token:us(ey(),Uo)};y.add(R.token);const D=new Map,I=us(new jt(ys,ys,.3,20).translate(0,.15,0),Uo);y.add(I);let U=[];const P=new Kn;y.add(P);const z=new Map,G=new ra(1,16,12),Z={first:null,upto:0,deaths:[],blasts:new Map},se={box:us(new it(1,1,1).translate(0,.5,0),ja),round:us(new jt(.5,.5,1,32).translate(0,.5,0),ja)};y.add(se.box,se.round);const q=new Kn;y.add(q);const Q=new Map,re=new ze(1,1,1),ye=(ee,ke,Ne,Ae,ve=re,Nt=0)=>{if(!ke){Ee=!0;return}let Oe=Q.get(ee);if(!Oe){const xt=new Os(ny,new Fr({map:ke,transparent:!0,alphaTest:.1,side:vn,depthWrite:!1,depthTest:!Nt,toneMapped:!1}),nl);xt.instanceMatrix.setUsage(Wi),xt.count=0,xt.instanceColor=new Zi(new Float32Array(nl*3).fill(1),3),xt.renderOrder=Nt||(ee.startsWith("t|")?1:0),q.add(xt),Oe={mesh:xt,hits:[]},Q.set(ee,Oe)}Oe.hits.length>=nl||(Oe.mesh.setMatrixAt(Oe.hits.length,Ne),Oe.mesh.setColorAt(Oe.hits.length,ve),Oe.hits.push(Ae))},pe={};for(const ee of Object.keys(bh))pe[ee]=us(Bt(bh[ee]()),el),y.add(pe[ee]);const je=new Map,et=new Float32Array(el).fill(1),ct=new Zi(et,1);ct.setUsage(Wi),pe.hab.geometry.setAttribute("aFade",ct),Tc(pe.hab.material,!1);const K=new Map,ie=new Kn;y.add(ie);let be=[];const He=new Map;let Se=null,ce=null,Lt=al(ol,"basemap");_.current={setTexture(ee){if(ee===Lt)return;Lt=ee;const ke=ce;ke&&Of(ke.base,ee).then(Ne=>{var ve;if(ce!==ke||Lt!==ee){Ne.dispose();return}const Ae=ke.mesh.material;(ve=Ae.map)==null||ve.dispose(),Ae.map=Ne,Ae.needsUpdate=!0,Ee=!0}).catch(Ne=>De(String(Ne)))}};let $e=0,ut=0,vt=0,Ke=[],yt=[];const bt=new Map,Yt=new Kn;y.add(Yt);const Dt=()=>{for(const ee of bt.values())ee.mesh.geometry.dispose(),Yt.remove(ee.mesh);bt.clear()},Ot=64,B=new Float32Array(Ot*6),qt=new Float32Array(Ot*6),rt=new Tt;rt.setAttribute("position",new Be(B,3).setUsage(Wi)),rt.setAttribute("color",new Be(qt,3).setUsage(Wi));const C=new Fp(rt,new af({vertexColors:!0,transparent:!0,opacity:.85,toneMapped:!1}));C.frustumCulled=!1,y.add(C);let v=45,H="",X=null;const $=new Map,le=new Kn;y.add(le);const fe=()=>{for(const ee of $.values())ee.group.traverse(ke=>{var Ne;return(Ne=ke.geometry)==null?void 0:Ne.dispose()}),ee.mat.dispose(),ee.label.material.dispose(),le.remove(ee.group);$.clear()};let J=[],te=new Map,ue=[];const we=[],ne=()=>{ce&&(T.position.set(0,ce.size*.4,ce.size*.45),g=0,b=-Math.PI/4)};let W=null;const De=ee=>{r.current&&(r.current.textContent=ee)},Ge=ee=>{if(!ee||ee===W)return;W=ee;const ke=zS[ee];if(!ke){De(`No SquadCalc 3D data for ${ee}`);return}De(`Loading ${ee} terrain…`),$e=performance.now(),KM(ke,Lt).then(Ne=>{if(W!==ee)return;ce&&y.remove(ce.mesh),J=[],te=new Map,ue=[],yt=[],fe(),Dt(),ce=Ne,ut=performance.now()-$e,y.add(Ne.mesh),Ee=!0,ne(),De("Loading buildings & trees…");const Ae=new Kn;Ae.position.set(-ke.corner0[0]-Ne.size/2,Nf,-ke.corner0[1]-Ne.size/2),Ne.mesh.add(Ae);const ve=If+ke.url;return Promise.all([VS(ve),XM(ve)]).then(([Nt,Oe])=>{const xt=Oe.vegetation.flatMap(St=>St.isInstancedMesh?Sy(St):[]);Ae.add(...Nt,...Oe.structures,...xt),Ae.updateMatrixWorld(!0),Ee=!0,J=xt.map(sy),te=ay(J),yt=xt.map(St=>({mesh:St,center:St.boundingSphere.center.clone().applyMatrix4(St.matrixWorld),radius:St.boundingSphere.radius,max:My(St.name)})).filter(St=>St.max<1/0),ue=[...Nt,...Oe.structures].filter(St=>St.isMesh).map(xy).filter(St=>St!==null),vt=performance.now()-$e,Ke=xt,De("")})}).catch(Ne=>De(String(Ne)))},We=new Fm,O=new _e,de=(ee,ke)=>{var Gn,Un,bn;if(!ce||!Se)return null;O.set(ee/x.clientWidth*2-1,-(ke/x.clientHeight)*2+1),We.setFromCamera(O,T);let Ne=null,Ae=1/0;for(const zt of We.intersectObjects(ie.children,!1)){if(zt.object.material.opacity<.3)continue;const En=zt.object.position.clone().project(T),kn=Math.hypot(En.x-O.x,En.y-O.y)-zt.object.renderOrder*1e-6;kn<Ae&&(Ae=kn,Ne=zt.object)}if(Ne)return{d2:0,hit:Ne.userData.hit};const ve=We.intersectObjects(q.children,!1).filter(zt=>zt.instanceId!=null).sort((zt,En)=>En.object.renderOrder-zt.object.renderOrder||zt.distance-En.distance)[0];if(ve){for(const zt of Q.values())if(zt.mesh===ve.object&&zt.hits[ve.instanceId])return{d2:0,hit:zt.hits[ve.instanceId]}}const Oe=We.intersectObjects([...Object.values(R),I,...Object.values(se),...Object.values(pe)],!1).find(zt=>zt.instanceId!=null);if(Oe){const zt=(Gn=D.get(Oe.object))==null?void 0:Gn[Oe.instanceId];if(zt)return{d2:0,hit:{type:"player",e:zt}};if(Oe.object===I)return{d2:0,hit:{type:"player",e:U[Oe.instanceId]}};const En=(Un=je.get(Oe.object))==null?void 0:Un[Oe.instanceId];if(En)return{d2:0,hit:En};const kn=(bn=He.get(Oe.object))==null?void 0:bn[Oe.instanceId];if(kn)return{d2:0,hit:{type:"vehicle",e:kn}}}const xt=Sh(ce,We.ray);if(!xt)return null;const[St,Vt]=JM(ce,xt.x,xt.z),Hn=2*Math.tan(T.fov*Math.PI/360)*T.position.distanceTo(xt)/Math.max(1,x.clientHeight);return $f(Se,St,Vt,Math.max(300,12*Hn*100))},j=new Set;let he=null;const me=()=>document.pointerLockElement===x,oe=()=>[x.clientWidth/2,x.clientHeight/2],Fe=()=>{me()||Promise.resolve(x.requestPointerLock()).catch(()=>{})},Ie=ee=>{g-=ee.movementX*.003,b=Math.max(-1.55,Math.min(1.2,b-ee.movementY*.003))},It=ee=>{me()||(he={x:ee.offsetX,y:ee.offsetY,moved:0},x.setPointerCapture(ee.pointerId),x.style.cursor="grabbing")};let tt=null,Sn="";const Mn=(ee,ke,Ne)=>{const Ae=ee==null?void 0:ee.hit.e,ve=ee?`${ee.hit.type}:${(Ae==null?void 0:Ae.id)??(Ae==null?void 0:Ae.eosId)??(Ae==null?void 0:Ae.name)}|${ke}|${Ne}|${Math.floor(performance.now()/500)}`:"none";if(ve===Sn)return;Sn=ve;const Nt=(ee==null?void 0:ee.hit.type)==="rally"?ee.hit.e.id:null;Nt!==X&&(X=Nt,Ee=!0),s.current.onHover(ee,ke,Ne)},aa=ee=>{if(me()){Ie(ee);const[ke,Ne]=oe();tt={x:ke,y:Ne};return}if(he){he.moved+=Math.abs(ee.movementX)+Math.abs(ee.movementY),Ie(ee),tt=null,Mn(null,0,0);return}tt={x:ee.offsetX,y:ee.offsetY}},la=ee=>{if(ee.button===0)if(me()){const[ke,Ne]=oe();s.current.onClick(de(ke,Ne))}else he&&he.moved<5&&s.current.onClick(de(ee.offsetX,ee.offsetY));he=null,x.style.cursor="grab"},Wr=()=>{c(me()),me()||Mn(null,0,0)},ji=()=>{const ee=Fi.getState();ee.followKey&&ee.setFollowKey(null),ee.followVehicleId&&ee.setFollowVehicleId(null)},ca=ee=>{if(ee.preventDefault(),!ce)return;if(H){v=Math.max(6,Math.min(2e3,v*(ee.deltaY>0?1.2:1/1.2))),Ee=!0;return}me()?O.set(0,0):O.set(ee.offsetX/x.clientWidth*2-1,-(ee.offsetY/x.clientHeight)*2+1),We.setFromCamera(O,T);const ke=Sh(ce,We.ray),Ne=ke?T.position.distanceTo(ke):500,Ae=Math.sign(ee.deltaY)*-Math.max(2,Ne*.2);Ae>0&&Ne-Ae<3||T.position.addScaledVector(We.ray.direction,Ae)},Gs=ee=>ee.target instanceof HTMLElement&&ee.target.closest("input,textarea,[contenteditable]"),Xr=ee=>{if(!(ee.ctrlKey||ee.metaKey||ee.altKey||Gs(ee))){if(ee.code==="KeyF"){ji(),ne();return}if(ee.code==="Enter"){Fe();return}(vh[ee.code]||ee.code.startsWith("Shift"))&&j.add(ee.code)}},ti=ee=>{j.delete(ee.code)},er=()=>j.clear(),ks=ee=>ee.preventDefault();x.addEventListener("pointerdown",It),x.addEventListener("dblclick",Fe),x.addEventListener("pointermove",aa),x.addEventListener("pointerup",la),x.addEventListener("pointerleave",()=>s.current.onLeave()),x.addEventListener("wheel",ca,{passive:!1}),x.addEventListener("contextmenu",ks),window.addEventListener("keydown",Xr),window.addEventListener("keyup",ti),window.addEventListener("blur",er),window.addEventListener("map3d-fit",ne),document.addEventListener("pointerlockchange",Wr);const tr=new N,wi=new N,Vs=ee=>{if(T.rotation.set(b,g,0),!ce)return;const ke=dn(ce,T.position.x,T.position.z),Ne=new Set([...j].map(Ae=>vh[Ae]));if(Ne.size&&H&&ji(),Ne.size){const Ae=j.has("ShiftLeft")||j.has("ShiftRight")?3:1,ve=Math.max(15,Math.min(800,T.position.y-ke))*Ae*ee;tr.set(-Math.sin(g),0,-Math.cos(g)),wi.set(Math.cos(g),0,-Math.sin(g)),Ne.has("f")&&T.position.addScaledVector(tr,ve),Ne.has("b")&&T.position.addScaledVector(tr,-ve),Ne.has("r")&&T.position.addScaledVector(wi,ve),Ne.has("l")&&T.position.addScaledVector(wi,-ve),Ne.has("u")&&(T.position.y+=ve),Ne.has("d")&&(T.position.y-=ve)}T.position.y=Math.max(T.position.y,dn(ce,T.position.x,T.position.z)+2)},Tn=new lt,nr=new zn,Gt=new N,Nn=new N,Ws=new N(0,1,0),ua=new ze,ir=(ee,ke,Ne,Ae,ve,Nt,Oe,xt,St,Vt,Hn)=>{const[Gn,Un]=$n(Ne,Ae,ve);Gt.set(Gn,Nt!=null?Nt/100:dn(Ne,Gn,Un),Un),nr.setFromAxisAngle(Ws,-((Oe??0)*Math.PI)/180);const bn=Math.max(1,T.position.distanceTo(Gt)/St);return Hn?Nn.set(Hn[0]*bn,Hn[1]*bn,Hn[2]*bn):Nn.setScalar(bn),ee.setMatrixAt(ke,Tn.compose(Gt,nr,Nn)),ee.setColorAt(ke,Vt??ua.set(Vn(xt))),bn},Yr=new zn,E=new zn,F=new N,Y=new ze("#15171c"),k=new ze("#8a8f98"),V=new ze("#2b2623"),xe=new ze,Pe={current:0};let ge=0,Re=performance.now(),Ee=!0,Ye={cam:"",clock:-1,snap:null,team:null,layers:null,ui:""},Je=0,Le=performance.now(),pt=!1,kt=0;const Et={};let wt=0;const Ft=ee=>{if(!pt)return;const ke=performance.now();ee!=="start"&&(Et[ee]=(Et[ee]??0)+ke-wt),wt=ke},Te=()=>{ge=requestAnimationFrame(Te),pt||Jt(performance.now())},Jt=ee=>{var Gn,Un,bn,zt,En,kn,qr,Zr,At,rn,Ui,rr,sr;if(ee-Re<1e3/YM-1)return;const ke=Math.min(.1,(ee-Re)/1e3);if(Re=ee,ee-Le>=500){const ln=Math.round(Je*1e3/(ee-Le));S.current&&(S.current.textContent=m.current?ln?`${ln} fps`:"idle":""),Je=0,Le=ee}const Ne=M.clientWidth,Ae=M.clientHeight;(x.width!==Math.floor(Ne*w.getPixelRatio())||x.height!==Math.floor(Ae*w.getPixelRatio()))&&(w.setSize(Ne,Ae,!1),T.aspect=Ne/Math.max(1,Ae),T.updateProjectionMatrix());const ve=Fi.getState();Ge((bn=(Un=(Gn=ve.curSnap)==null?void 0:Gn.gameState)==null?void 0:Un.layer)==null?void 0:bn.mapId),Vs(ke),tt&&(Mn(de(tt.x,tt.y),tt.x,tt.y),tt=null);const Nt=`${T.position.toArray()}|${g}|${b}|${Ne}x${Ae}`,Oe=ve.mode==="replay"&&eo.valid?eo.ms:-1,xt=`${ve.followKey}|${ve.followVehicleId}|${(zt=ve.selectedInfo)==null?void 0:zt.kind}:${(En=ve.selectedInfo)==null?void 0:En.id}`;if(!Ee&&ve.mode==="replay"&&Nt===Ye.cam&&Oe===Ye.clock&&ve.curSnap===Ye.snap&&ve.teamView===Ye.team&&ve.layers===Ye.layers&&xt===Ye.ui)return;Ee=!1,Ye={cam:Nt,clock:Oe,snap:ve.curSnap,team:ve.teamView,layers:ve.layers,ui:xt};const St=ve.curSnap?qf(ve,Pe)??ve.curSnap:null,Vt=St?Zf(St,ve.teamView):null;if(ce&&Vt){Ft("start");const ln=ve.layers,cn=ln.players?Vt.players??[]:[],mn=ln.vehicles?Vt.vehicles??[]:[],Xs=ln.deployables?Vt.deployables??[]:[],Nc=ln.rallies?Vt.rallyPoints??[]:[],Uc=ln.markers?Vt.markers??[]:[];Se={...Vt,projectiles:[],players:cn,vehicles:mn,deployables:Xs,rallyPoints:Nc,markers:Uc};const Ys=ve.followKey,qs=ve.followVehicleId,ha=Ys?"p"+Ys:qs?"v"+qs:"";ha&&ha!==H&&b>-.25&&(b=-.5),H=ha;const Oi=Ys?(Vt.players??[]).find(L=>bs(L)===Ys):void 0,Zs=qs?(Vt.vehicles??[]).find(L=>L.id===qs):void 0,$r=((kn=Oi==null?void 0:Oi.soldier)==null?void 0:kn.position)??(Zs==null?void 0:Zs.position);if($r){const[L,ae]=$n(ce,$r.x,$r.y),Ue=($r.z!=null?$r.z/100:dn(ce,L,ae))+(Zs?2.5:1.2);T.position.set(L+Math.sin(g)*Math.cos(b)*v,Ue-Math.sin(b)*v,ae+Math.cos(g)*Math.cos(b)*v),T.position.y=Math.max(T.position.y,dn(ce,T.position.x,T.position.z)+2),T.rotation.set(b,g,0)}const $s=Oi&&Oi.squadId!=null?{team:Oi.teamId,squad:Oi.squadId}:null,Vf=L=>!$s||L.teamId===$s.team&&L.squadId===$s.squad,Oc=new ze(.42,.42,.42),Fc=ve.mode==="replay",Wf=Fc?ve.replay.frames:ve.snapBuffer.map(L=>L.snap),Ks=Fc&&eo.valid?eo.ms:Bf(Vt);fy(Z,Wf);const Bc=L=>{const ae=Z.blasts.get(L.id);return ae?Ks>=ae.t:(L.health??1)<=0};be=[],U=[];for(const L of Object.values(R))D.set(L,[]);for(const L of Q.values())L.hits.length=0;for(const L of cn){const ae=L.soldier;if(!(ae!=null&&ae.position)||!zf(ae)||ae.attached||Kf(ae))continue;if(ic(ae)){if(U.length>=Uo)continue;const ft=ir(I,U.length,ce,ae.position.x,ae.position.y,ae.position.z!=null?ae.position.z-70:null,ae.yaw,L.teamId,120,xe.set(Vn(L.teamId)).lerp(Y,.7));Gt.y+=.32*ft,ye("x",dy(),Tn.compose(Gt,tl,Nn.set(1.1*ft,1.1*ft,1)),{type:"player",e:L}),U.push(L);continue}const Ue=R.token,st=D.get(Ue);if(st.length>=Uo)continue;const Xe=Vf(L),Qe=Vn(L.teamId),ht=ir(Ue,st.length,ce,ae.position.x,ae.position.y,ae.position.z,ae.yaw,L.teamId,120,Xe?void 0:xe.set(Qe).lerp(Y,.6)),qe=Jf(L)??jM;Gt.y+=(tc+Xo+.8)*ht;const Ut={type:"player",e:L};if(ye(`r|${qe}|${Qe}`,wh(qe,Qe,!1,null),Tn.compose(Gt,T.quaternion,Nn.setScalar(($s&&Xe?1.8:1.5)*ht)),Ut,Xe?re:Oc),L.squadId!=null&&(ln.slNumbers&&Qf(L)||ln.squadNumbers)){const ft=rl(String(L.squadId),Qe),Mt=ft.image;Gt.y-=1.25*ht,ye(`n|${L.squadId}|${Qe}`,ft,Tn.compose(Gt,T.quaternion,Nn.set(.6*ht*Mt.width/Mt.height,.6*ht,1)),Ut,Xe?re:Oc)}st.push(L),be.push(L)}for(const[L,ae]of D)L.count=ae.length;I.count=U.length;for(const L of Object.values(se))He.set(L,[]);const zc=new Map;if(ln.squadNumbers)for(const L of Vt.players??[])L.eosId&&L.squadId!=null&&zc.set(L.eosId,L.squadId);for(const L of mn){if(!L.position)continue;const ae=Bv(L.classShort),Ue=ae==="heli"||ae==="heliLight",st=Bc(L),Xe=Ue?se.round:se.box,Qe=He.get(Xe);if(Qe.length>=ja)continue;const ht=ty[ae],qe=ir(Xe,Qe.length,ce,L.position.x,L.position.y,L.position.z,L.yaw,L.team,300,st?V:void 0,ht);Qe.push(L);const Ut=jf(L);if(Ut){Gt.y+=ht[1]*qe+.05;const Mt=ht[0]*(Ue?.95:1.15)*qe;ye(`v|${Ut}`,yh(Ut),Tn.compose(Gt,Yr.multiplyQuaternions(nr,tl),Nn.set(Mt,Mt,1)),{type:"vehicle",e:L});const gn=ed(L);if(gn){const Ht=(L.yaw??0)+(((Zr=(qr=L.turrets)==null?void 0:qr[0])==null?void 0:Zr.yaw)??0);E.setFromAxisAngle(Ws,-(Ht*Math.PI)/180),Gt.y+=.05*qe,ye(`t|${gn}`,yh(gn),Tn.compose(Gt,Yr.multiplyQuaternions(E,tl),Nn.set(Mt,Mt,1)),{type:"vehicle",e:L})}}const ft=ln.squadNumbers?td(L,zc):null;if(ft!=null){const Mt=Vn(L.team),gn=rl(String(ft),Mt),Ht=gn.image,wn=2.4*qe;Gt.y+=2.5*qe,ye(`n|${ft}|${Mt}`,gn,Tn.compose(Gt,T.quaternion,Nn.set(wn*Ht.width/Ht.height,wn,1)),{type:"vehicle",e:L})}}Ft("players+vehicles"),we.length=0;const Hc=(L,ae)=>{const[Ue,st]=$n(ce,L.x,L.y);we.push(Ue,(L.z!=null?L.z/100:dn(ce,Ue,st))+ae,st)};for(const L of[...be,...U])Hc(L.soldier.position,0);for(const L of He.values())for(const ae of L)Hc(ae.position,1);const Gc=new Set,Js=2*Math.tan(T.fov*Math.PI/360)/Math.max(1,x.clientHeight),Qs=(L,ae,Ue,st,Xe,Qe,ht,qe,Ut={})=>{if(!ae&&!("texture"in Ut)||!Ue)return;const ft="texture"in Ut?Ut.texture??null:wh(ae,st,Xe,Qe);if(!ft){Ee=!0;return}const[Mt,gn]=$n(ce,Ue.x,Ue.y);if(Ut.opacity==null){const Jr=ft.image;Gt.set(Mt,(Ue.z!=null?Ue.z/100:dn(ce,Mt,gn))+Oo,gn);const pa=ht*Js*T.position.distanceTo(Gt),ma=pa*Jr.height/Jr.width;F.set(0,1,0).applyQuaternion(T.quaternion),Gt.addScaledVector(F,-(ma-Math.min(ma,pa))/2),ye(`b|${ft.uuid}`,ft,Tn.compose(Gt,T.quaternion,Nn.set(pa,ma,1)),qe,re,10+ht),qe.type!=="marker"&&we.push(Mt,Gt.y-Oo+.3,gn);return}let Ht=K.get(L);if(Ht||(Ht=new Ba(new Vo({sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1})),K.set(L,Ht),ie.add(Ht)),Ht.material.map!==ft){Ht.material.map=ft,Ht.material.needsUpdate=!0;const Jr=ft.image;Ht.center.set(.5,1-Math.min(1,Jr.width/2/Jr.height))}const wn=ft.image;Ht.scale.set(ht*Js,ht*Js*wn.height/wn.width,1);const[fa,da]=$n(ce,Ue.x,Ue.y);Ht.position.set(fa,(Ue.z!=null?Ue.z/100:dn(ce,fa,da))+Oo,da),Ht.userData.hit=qe,Ht.material.opacity=Ut.opacity??1,Ht.renderOrder=10+ht,Gc.add(L),we.push(fa,Ht.position.y-Oo+.3,da)};for(const L of Object.values(pe))je.set(L,[]);const kc=(L,ae,Ue,st,Xe,Qe)=>{if(!ae)return;const ht=pe[L],qe=je.get(ht);qe.length>=el||(ir(ht,qe.length,ce,ae.x,ae.y,ae.z,Ue,st,220,Qe),qe.push(Xe))},Vc=new Set,or=(L,ae,Ue,st)=>{let Xe=bt.get(L);Xe&&Xe.sig!==ae&&(Xe.mesh.geometry.dispose(),Yt.remove(Xe.mesh),bt.delete(L),Xe=void 0),Xe||(Xe={mesh:new pn(Ue(),st),sig:ae},Xe.mesh.renderOrder=2,Yt.add(Xe.mesh),bt.set(L,Xe)),Xe.mesh.material=st,Vc.add(L)},ar=L=>$n(ce,L.x,L.y),js=L=>`${Math.round(L.x)},${Math.round(L.y)}`;for(const L of Xs){if(L.isFob&&L.position){const[Xe,Qe]=ar(L.position),ht=Vn(L.team),qe=js(L.position);or(`fob-fill:${L.id}`,qe,()=>Lh(ce,Xe,Qe,150),Cr(ht,.1)),or(`fob-ring:${L.id}`,qe,()=>sl(ce,Xe,Qe,148.5,151.5),Cr(ht,.55)),or(`fob-inf:${L.id}`,qe,()=>sl(ce,Xe,Qe,398,402,!0),Cr(ht,.8))}const ae=!L.isFob&&(L.classShort??"").toUpperCase().includes("HAB"),Ue={type:"deployable",e:L},st=zv(L);Qs("d"+L.id,nd(L),L.position,Vn(L.team),!!(L.isFob||ae),null,L.isFob?30:ae?28:22,Ue),st!=="helipad"&&kc(st,L.position,L.yaw,L.team,Ue)}const Xf=((At=ve.selectedInfo)==null?void 0:At.kind)==="rally"?ve.selectedInfo.id:null;for(const L of Nc){const ae={type:"rally",e:L};if(L.position&&(L.sieged||L.id===X||L.id===Xf)){const[Ue,st]=ar(L.position),Xe=js(L.position),Qe=L.sieged?"#ff3b3b":Vn(L.squadTeamId??L.team);or(`rally-fill:${L.id}`,Xe,()=>Lh(ce,Ue,st,30),Cr(Qe,.14)),or(`rally-ring:${L.id}`,Xe,()=>sl(ce,Ue,st,29.6,30.4,!0),Cr(Qe,.9))}Qs("r"+L.id,cy,L.position,L.spawningEnabled?Vn(L.squadTeamId??L.team):"#5a5a5a",!1,L.squadId!=null?String(L.squadId):"?",26,ae),kc("rally",L.position,null,L.squadTeamId??L.team,ae,L.spawningEnabled?void 0:k)}Ft("deployables+rallies");let Kr=0;for(const L of Uc){if(!L.position)continue;const ae=Vn(L.team),Ue=Oh(L),st={type:"marker",e:L},Xe=Ue==="arrow"||Ue==="frontline"?id(L):null;if(Xe){const ht=/enemydirector/i.test(L.type??"")?Vn(L.team===1?2:L.team===2?1:0):ae,[qe,Ut]=ar(L.position),[ft,Mt]=ar(Xe);or(`mk:${L.id}`,`${js(L.position)}>${js(Xe)}|${Ue}`,()=>wy(ce,qe,Ut,ft,Mt,Ue==="arrow"?4:3,Ue==="arrow"),Cr(ht,.85));continue}Qs("m"+L.id,null,L.position,ae,!1,null,24,st,{texture:Ay(L,ae)});const Qe=Kr<Ot?rd(L,cn):null;if(Qe){const ht=Qe.soldier.position,[qe,Ut]=ar(ht),[ft,Mt]=ar(L.position),gn=ht.z!=null?ht.z/100+1:dn(ce,qe,Ut)+1,Ht=kf(ce,ft,Mt)+1;B.set([qe,gn,Ut,ft,Ht,Mt],Kr*6);const wn=xe.set(ae);qt.set([wn.r,wn.g,wn.b,wn.r,wn.g,wn.b],Kr*6),Kr++}}rt.setDrawRange(0,Kr*2),rt.attributes.position.needsUpdate=!0,rt.attributes.color.needsUpdate=!0;for(const[L,ae]of bt)Vc.has(L)||(ae.mesh.geometry.dispose(),Yt.remove(ae.mesh),bt.delete(L));for(const L of ln.players?Z.deaths:[]){const ae=Ks-L.t;ae<0||ae>Ah||Qs(`g${bs(L.player)}@${L.t}`,hy,L,"#4a505a",!1,null,18,{type:"player",e:L.player},{opacity:1-ae/Ah})}Ft("markers+graves");const Wc=new Set,Xc=(L,ae)=>{let Ue=z.get(L);return Ue||(Ue=ae(),z.set(L,Ue),P.add(Ue)),Wc.add(L),Ue};for(const[L,ae]of ln.vehicles?[...Z.blasts]:[]){const Ue=Ks-ae.t;if(Ue<0||Ue>Th)continue;const st=Ue/Th,[Xe,Qe]=$n(ce,ae.x,ae.y),ht=ae.z!=null?ae.z/100:dn(ce,Xe,Qe);for(const[qe,Ut,ft]of[[0,"#ff6a10",7],[1,"#fff1b0",3.5]]){const Mt=Xc("b"+qe+L,()=>new pn(G,new Fr({color:Ut,transparent:!0,depthWrite:!1,blending:qe?ll:Nr})));Mt.position.set(Xe,ht+1.5+st*4,Qe),Mt.scale.setScalar(1+ft*Math.pow(st,.3)),Mt.material.opacity=Math.pow(1-st,qe?2:1.3)*.95}}const Yf=Ks/1e3;for(const L of mn){if(!Bc(L)||!L.position)continue;const[ae,Ue]=$n(ce,L.position.x,L.position.y),st=L.position.z!=null?L.position.z/100:dn(ce,ae,Ue);for(let Xe=0;Xe<6;Xe++){const Qe=(Yf*2+Xe*3)%18,ht=Xc(`s${Xe}${L.id}`,()=>new Ba(new Vo({map:py(),transparent:!0,depthWrite:!1})));ht.position.set(ae+Math.sin(Qe*.4+Xe)*.8+Qe*.25,st+2+Qe,Ue),ht.scale.setScalar(3+Qe*.45),ht.material.opacity=.7*(1-Qe/18)}}for(const[L,ae]of z)Wc.has(L)||(P.remove(ae),ae.material.dispose(),z.delete(L));for(const[L,ae]of K)Gc.has(L)||(ie.remove(ae),ae.material.dispose(),K.delete(L));Ft("fx");for(const L of yt)L.mesh.visible=T.position.distanceTo(L.center)-L.radius<L.max;const Yc=new Set,qc=(L,ae,Ue,st,Xe,Qe)=>{const ht=`${Math.round(ae.x)},${Math.round(ae.y)}|${JSON.stringify(Ue)}`;let qe=$.get(L);if(qe&&qe.sig!==ht&&(qe.group.traverse(Ut=>{var ft;return(ft=Ut.geometry)==null?void 0:ft.dispose()}),le.remove(qe.group),$.delete(L),qe=void 0),!qe){const Ut=new Fr({vertexColors:!0,transparent:!0,side:vn,depthWrite:!1,toneMapped:!1}),ft=new Kn;for(const wn of Ue)ft.add(new pn(by(ce,yy(ae,wn)),Ut));const Mt=new Ba(new Vo({sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1}));Mt.center.set(.5,0),Mt.renderOrder=5;const[gn,Ht]=$n(ce,ae.x,ae.y);Mt.position.set(gn,dn(ce,gn,Ht)+Gf+3,Ht),ft.add(Mt),le.add(ft),qe={group:ft,label:Mt,mat:Ut,sig:ht},$.set(L,qe)}if(qe.mat.color.set(st),qe.mat.opacity=Xe,Qe){const Ut=rl(Qe,st);qe.label.material.map!==Ut&&(qe.label.material.map=Ut,qe.label.material.needsUpdate=!0);const ft=Ut.image,Mt=22*Js;qe.label.scale.set(Mt*ft.width/ft.height,Mt,1)}qe.label.visible=!!Qe,Yc.add(L)},Zc=sd(Vt.captureZones??[]);for(const L of Zc){const ae=L.staticPosition??L.position;if(!ae)continue;const Ue=(L.capturingTeam??0)>0&&L.capturingTeam!==L.owningTeam,st=Vn(Ue?L.capturingTeam:L.owningTeam),Xe=L.capturePercent!=null&&L.capturePercent>0&&L.capturePercent<1?` ${Math.round(L.capturePercent*100)}%`:"";qc("z"+L.id,ae,(rn=L.geometry)!=null&&rn.length?L.geometry:[{type:"sphere",dx:0,dy:0,radius:7500}],st,L.isLocked?.35:Ue?1:.75,od(L)+Xe)}if(!Zc.length)for(const L of((rr=(Ui=Vt.gameState)==null?void 0:Ui.lane)==null?void 0:rr.staticObjectives)??[])!L.position||!((sr=L.geometry)!=null&&sr.length)||qc("o"+(L.name??""),L.position,L.geometry,"#c9d3e0",.6,L.staticName??L.name??"");for(const[L,ae]of $)Yc.has(L)||(ae.group.traverse(Ue=>{var st;return(st=Ue.geometry)==null?void 0:st.dispose()}),ae.mat.dispose(),ae.label.material.dispose(),le.remove(ae.group),$.delete(L));Ft("cull+caps"),ly(J,te,we),Ft("treeFade");for(const L of ue)vy(L,we);Ft("buildingFade"),je.get(pe.hab).forEach((L,ae)=>{const Ue=L.e.position,st=[...be,...U].some(Xe=>{const Qe=Xe.soldier.position;return Math.hypot(Qe.x-Ue.x,Qe.y-Ue.y)<330&&(Qe.z==null||Ue.z==null||Math.abs(Qe.z-Ue.z)<400)});et[ae]=st?Hf:1}),ct.needsUpdate=!0;for(const L of Object.values(pe))L.count=je.get(L).length;for(const L of Q.values())L.mesh.count=L.hits.length,L.mesh.visible=L.hits.length>0,L.hits.length&&L.mesh.computeBoundingSphere(),L.mesh.instanceMatrix.needsUpdate=!0,L.mesh.instanceColor.needsUpdate=!0;for(const L of[...Object.values(R),I,...Object.values(se),...Object.values(pe)])He.has(L)&&(L.count=He.get(L).length),L.instanceMatrix.needsUpdate=!0,L.instanceColor.needsUpdate=!0}Ft("rest");const Hn=performance.now();w.render(y,T),kt=performance.now()-Hn,Je++};ge=requestAnimationFrame(Te);const mt=async()=>{var qr,Zr;const ee=At=>new Promise(rn=>setTimeout(rn,At)),ke=()=>new Promise(At=>requestAnimationFrame(At));for(;Fi.getState().replay.frames.length<=Qa+120||!vt||!ce;)await ee(250);const Ne=Fi.getState();Ne.stepReplayFrame(Qa-Ne.replay.currentIdx),await ee(500),pt=!0;const Ae=w.getContext(),ve=async(At,rn=90)=>{const Ui=[],rr=[],sr=[];for(const cn of Object.keys(Et))delete Et[cn];for(let cn=0;cn<10+rn;cn++){await ke(),Ee=!0,Re=0;const mn=performance.now();Jt(mn);const Xs=performance.now();Ae.finish(),cn>=10&&(Ui.push(performance.now()-mn),rr.push(Xs-mn),sr.push(kt))}Ee=!0,Re=0,Jt(performance.now()),xt[At]=x.toDataURL("image/jpeg",.85),Ui.sort((cn,mn)=>cn-mn),rr.sort((cn,mn)=>cn-mn),sr.sort((cn,mn)=>cn-mn);const ln=w.info.render;return{name:At,medianMs:+Ui[rn>>1].toFixed(2),p95Ms:+Ui[Math.floor(rn*.95)].toFixed(2),cpuMs:+rr[rn>>1].toFixed(2),renderMs:+sr[rn>>1].toFixed(2),sections:Object.fromEntries(Object.entries(Et).map(([cn,mn])=>[cn,+(mn/(10+rn)).toFixed(2)])),drawCalls:ln.calls,triangles:ln.triangles}},Nt=ce,Oe=[],xt={};ne(),Oe.push(await ve("overview"));const St=be.map(At=>$n(Nt,At.soldier.position.x,At.soldier.position.y)),Vt=St.reduce((At,rn)=>At+rn[0],0)/Math.max(1,St.length),Hn=St.reduce((At,rn)=>At+rn[1],0)/Math.max(1,St.length),Gn=()=>{T.position.set(Vt,dn(Nt,Vt,Hn)+60,Hn+60),g=0,b=-Math.PI/4};Gn(),Oe.push(await ve("units-60m"));const Un=Ke.reduce((At,rn)=>!At||rn.count>At.count?rn:At,null);if(Un){const At=Un.boundingSphere.center.clone().applyMatrix4(Un.matrixWorld);T.position.set(At.x,dn(Nt,At.x,At.z)+4,At.z),g=0,b=-.1,Oe.push(await ve("forest-ground"))}Gn(),window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",code:"Space"})),Oe.push(await ve("playing-1x",120)),window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",code:"Space"}));const bn=be.find(At=>At.squadId!=null);if(bn){Fi.getState().setFollowKey(bs(bn));for(let At=0;At<3;At++)await ke(),Ee=!0,Re=0,Jt(performance.now());xt.follow=x.toDataURL("image/jpeg",.85),Fi.getState().setFollowKey(null)}pt=!1;const zt=Ae.getExtension("WEBGL_debug_renderer_info"),En=performance.memory,kn={recording:Ne.replay.id,frame:Qa,map:yn(),gpu:zt?Ae.getParameter(zt.UNMASKED_RENDERER_WEBGL):"unknown",viewport:`${x.width}x${x.height}`,loadMs:{terrain:Math.round(ut),propsAndTrees:Math.round(vt)},scene:{geometries:w.info.memory.geometries,textures:w.info.memory.textures,programs:((qr=w.info.programs)==null?void 0:qr.length)??0,treeTiles:Ke.length,badgeSprites:K.size,groundOverlays:bt.size,iconLayers:Q.size,markers:((Zr=Se==null?void 0:Se.markers)==null?void 0:Zr.length)??0,jsHeapMB:En?Math.round(En.usedJSHeapSize/1048576):null},shots:Oe,images:xt};Object.assign(window,{__benchResult:kn}),console.log("[bench3d]",JSON.stringify(kn))},yn=()=>{var ee,ke,Ne;return((Ne=(ke=(ee=Fi.getState().curSnap)==null?void 0:ee.gameState)==null?void 0:ke.layer)==null?void 0:Ne.mapId)??null};return qM&&mt(),()=>{cancelAnimationFrame(ge),window.removeEventListener("keydown",Xr),window.removeEventListener("keyup",ti),window.removeEventListener("blur",er),window.removeEventListener("map3d-fit",ne),document.removeEventListener("pointerlockchange",Wr),me()&&document.exitPointerLock(),w.dispose(),x.remove()}},[]),Rn.useEffect(()=>{var M;(M=_.current)==null||M.setTexture(u),Uh(ol,u)},[u]),Rn.useEffect(()=>{Uh(Nh,h?"1":"0"),!h&&S.current&&(S.current.textContent="")},[h]),Ce.jsxs("div",{ref:n,style:{position:"absolute",inset:0},children:[Ce.jsx("div",{className:"m3d-overlay",children:Ce.jsx("div",{ref:r,className:"m3d-chip m3d-status"})}),Ce.jsx("div",{className:"m3d-dock",children:Ce.jsxs("div",{className:"m3d-help"+(o?"":" m3d-collapsed"),role:"note","aria-label":"3D camera controls",children:[Ce.jsxs("header",{onClick:()=>d(!o),title:o?"Hide the controls":"Show the controls",children:[Ce.jsx("span",{children:l?"Fly mode":"3D controls"}),Ce.jsx("span",{ref:S,className:"m3d-fps","aria-live":"off"}),Ce.jsx("svg",{className:"m3d-caret"+(o?" open":""),viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",children:Ce.jsx("path",{d:"M7 10l5 5 5-5",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),o&&Ce.jsxs(Ce.Fragment,{children:[l?Ce.jsxs(Ce.Fragment,{children:[Ce.jsx(ri,{keys:Ce.jsx(fs,{}),label:"look around"}),Ce.jsx(ri,{keys:Ce.jsx(fs,{button:"left"}),label:"select at crosshair"}),Ce.jsx(ri,{keys:Ce.jsx("kbd",{children:"Esc"}),label:"leave fly mode"})]}):Ce.jsxs(Ce.Fragment,{children:[Ce.jsx(ri,{keys:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx(fs,{button:"left"}),Ce.jsx("em",{children:"drag"})]}),label:"look around"}),Ce.jsx(ri,{keys:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx(fs,{button:"left"}),Ce.jsx("em",{children:"×2"}),Ce.jsx("em",{children:"or"}),Ce.jsx("kbd",{children:"Enter"})]}),label:"fly mode"})]}),Ce.jsx(ri,{keys:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("kbd",{children:"W"}),Ce.jsx("kbd",{children:"A"}),Ce.jsx("kbd",{children:"S"}),Ce.jsx("kbd",{children:"D"})]}),label:"move"}),Ce.jsx(ri,{keys:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("kbd",{children:"C"}),Ce.jsx("kbd",{children:"X"})]}),label:"up / down"}),Ce.jsx(ri,{keys:Ce.jsx("kbd",{children:"Shift"}),label:"faster"}),Ce.jsx(ri,{keys:Ce.jsx(fs,{button:"wheel"}),label:l?"zoom to crosshair":"zoom to cursor"}),Ce.jsx(ri,{keys:Ce.jsx("kbd",{children:"F"}),label:"overview"}),Ce.jsxs("div",{className:"m3d-settings",children:[Ce.jsxs("label",{children:[Ce.jsx("span",{children:"Map"}),Ce.jsx("select",{value:u,onChange:M=>f(M.target.value),children:$M.map(([M,w])=>Ce.jsx("option",{value:M,children:w},M))})]}),Ce.jsxs("label",{children:[Ce.jsx("input",{type:"checkbox",checked:h,onChange:M=>p(M.target.checked)}),Ce.jsx("span",{children:"FPS counter"})]})]})]})]})}),l&&Ce.jsx("div",{className:"m3d-crosshair","aria-hidden":"true"})]})}export{Cy as Map3D,$M as TEXTURES};
