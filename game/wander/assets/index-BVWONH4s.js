(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const fl="180",sd=0,Yl=1,rd=2,Bu=1,Hu=2,ni=3,oi=0,Zt=1,dt=2,ri=0,_s=1,Gt=2,Kl=3,Jl=4,ad=5,Fi=100,od=101,cd=102,ld=103,hd=104,ud=200,fd=201,dd=202,pd=203,pc=204,mc=205,md=206,gd=207,vd=208,xd=209,bd=210,_d=211,yd=212,Md=213,Sd=214,gc=0,vc=1,xc=2,Ts=3,bc=4,_c=5,yc=6,Mc=7,Gu=0,wd=1,Td=2,yi=0,Vu=1,Wu=2,ju=3,dl=4,Xu=5,qu=6,Yu=7,Zl="attached",Ad="detached",Ku=300,As=301,Es=302,Sc=303,wc=304,qa=306,ki=1e3,bi=1001,ka=1002,Vt=1003,Ju=1004,cr=1005,Ht=1006,Pa=1007,ii=1008,En=1009,Zu=1010,Qu=1011,_r=1012,pl=1013,Bi=1014,Tn=1015,ln=1016,ml=1017,gl=1018,yr=1020,$u=35902,ef=35899,tf=1021,nf=1022,vn=1023,Mr=1026,Sr=1027,wr=1028,vl=1029,sf=1030,xl=1031,bl=1033,La=33776,Da=33777,Ia=33778,Na=33779,Tc=35840,Ac=35841,Ec=35842,Cc=35843,Rc=36196,Pc=37492,Lc=37496,Dc=37808,Ic=37809,Nc=37810,Uc=37811,Fc=37812,Oc=37813,zc=37814,kc=37815,Bc=37816,Hc=37817,Gc=37818,Vc=37819,Wc=37820,jc=37821,Xc=36492,qc=36494,Yc=36495,Kc=36283,Jc=36284,Zc=36285,Qc=36286,Ed=2200,Cd=2201,Rd=2202,Tr=2300,Ar=2301,so=2302,vs=2400,xs=2401,Ba=2402,_l=2500,Pd=2501,Ld=0,rf=1,$c=2,Dd=3200,Id=3201,af=0,Nd=1,xi="",Lt="srgb",rn="srgb-linear",Ha="linear",rt="srgb",Yi=7680,Ql=519,Ud=512,Fd=513,Od=514,of=515,zd=516,kd=517,Bd=518,Hd=519,el=35044,ys=35048,$l="300 es",Bn=2e3,Ga=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eh=1234567;const fr=Math.PI/180,Cs=180/Math.PI;function An(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[r&255]+qt[r>>8&255]+qt[r>>16&255]+qt[r>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function qe(r,e,t){return Math.max(e,Math.min(t,r))}function yl(r,e){return(r%e+e)%e}function Gd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Vd(r,e,t){return r!==e?(t-r)/(e-r):0}function dr(r,e,t){return(1-t)*r+t*e}function Wd(r,e,t,n){return dr(r,e,1-Math.exp(-t*n))}function jd(r,e=1){return e-Math.abs(yl(r,e*2)-e)}function Xd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function qd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Yd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Kd(r,e){return r+Math.random()*(e-r)}function Jd(r){return r*(.5-Math.random())}function Zd(r){r!==void 0&&(eh=r);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qd(r){return r*fr}function $d(r){return r*Cs}function ep(r){return(r&r-1)===0&&r!==0}function tp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function np(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ip(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _i={DEG2RAD:fr,RAD2DEG:Cs,generateUUID:An,clamp:qe,euclideanModulo:yl,mapLinear:Gd,inverseLerp:Vd,lerp:dr,damp:Wd,pingpong:jd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:Kd,randFloatSpread:Jd,seededRandom:Zd,degToRad:Qd,radToDeg:$d,isPowerOfTwo:ep,ceilPowerOfTwo:tp,floorPowerOfTwo:np,setQuaternionFromProperEuler:ip,normalize:at,denormalize:Dn};class ee{constructor(e=0,t=0){ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const M=Math.sqrt(_),S=Math.atan2(M,p*b);m=Math.sin(m*S)/M,o=Math.sin(o*S)/M}const v=o*b;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-o){const M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new R,th=new bt;class He{constructor(e,t,n,i,s,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],b=i[1],_=i[4],v=i[7],M=i[2],S=i[5],T=i[8];return s[0]=a*x+o*b+c*M,s[3]=a*m+o*_+c*S,s[6]=a*p+o*v+c*T,s[1]=l*x+h*b+u*M,s[4]=l*m+h*_+u*S,s[7]=l*p+h*v+u*T,s[2]=f*x+d*b+g*M,s[5]=f*m+d*_+g*S,s[8]=f*p+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*c)*x,e[5]=(i*s-o*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new He;function cf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Er(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sp(){const r=Er("canvas");return r.style.display="block",r}const nh={};function Cr(r){r in nh||(nh[r]=!0,console.warn(r))}function rp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ih=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ap(){const r={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?Ha:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[rn]:{primaries:e,whitePoint:n,transfer:Ha,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),r}const Ze=ap();function ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ms(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ki;class op{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Er("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cp=0;class Ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(oo(i[a].image)):s.push(oo(i[a]))}else s=oo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?op.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;const co=new R;class Ct extends ji{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=bi,i=bi,s=Ht,a=ii,o=vn,c=En,l=Ct.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=An(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ku;Ct.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,v=(d+1)/2,M=(p+1)/2,S=(h+f)/4,T=(u+x)/4,C=(g+m)/4;return _>v&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=S/n,s=T/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=C/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ct(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ml(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lf extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Vr.subVectors(this.max,Hs),Ji.subVectors(e.a,Hs),Zi.subVectors(e.b,Hs),Qi.subVectors(e.c,Hs),li.subVectors(Zi,Ji),hi.subVectors(Qi,Zi),Ti.subVectors(Ji,Qi);let t=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Ti.z,Ti.y,li.z,0,-li.x,hi.z,0,-hi.x,Ti.z,0,-Ti.x,-li.y,li.x,0,-hi.y,hi.x,0,-Ti.y,Ti.x,0];return!lo(t,Ji,Zi,Qi,Vr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Ji,Zi,Qi,Vr))?!1:(Wr.crossVectors(li,hi),t=[Wr.x,Wr.y,Wr.z],lo(t,Ji,Zi,Qi,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new R,new R,new R,new R,new R,new R,new R,new R],Cn=new R,Gr=new ci,Ji=new R,Zi=new R,Qi=new R,li=new R,hi=new R,Ti=new R,Hs=new R,Vr=new R,Wr=new R,Ai=new R;function lo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ai.fromArray(r,s);const o=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const fp=new ci,Gs=new R,ho=new R;class Wn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(ho)),this.expandByPoint(Gs.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new R,uo=new R,jr=new R,ui=new R,fo=new R,Xr=new R,po=new R;class Ya{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uo.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=ui.dot(this.direction),c=-ui.dot(jr),l=ui.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uo).addScaledVector(jr,f),d}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,s){fo.subVectors(t,e),Xr.subVectors(n,e),po.crossVectors(fo,Xr);let a=this.direction.dot(po),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const c=o*this.direction.dot(Xr.crossVectors(ui,Xr));if(c<0)return null;const l=o*this.direction.dot(fo.cross(ui));if(l<0||c+l>a)return null;const h=-o*ui.dot(po);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(e,t,n,i,s,a,o,c,l,h,u,f,d,g,x,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,f,d,g,x,m)}set(e,t,n,i,s,a,o,c,l,h,u,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,pp)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),fi.crossVectors(n,fn),fi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),fi.crossVectors(n,fn)),fi.normalize(),qr.crossVectors(fn,fi),i[0]=fi.x,i[4]=qr.x,i[8]=fn.x,i[1]=fi.y,i[5]=qr.y,i[9]=fn.y,i[2]=fi.z,i[6]=qr.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],_=n[7],v=n[11],M=n[15],S=i[0],T=i[4],C=i[8],y=i[12],w=i[1],L=i[5],N=i[9],B=i[13],O=i[2],z=i[6],G=i[10],q=i[14],I=i[3],V=i[7],X=i[11],se=i[15];return s[0]=a*S+o*w+c*O+l*I,s[4]=a*T+o*L+c*z+l*V,s[8]=a*C+o*N+c*G+l*X,s[12]=a*y+o*B+c*q+l*se,s[1]=h*S+u*w+f*O+d*I,s[5]=h*T+u*L+f*z+d*V,s[9]=h*C+u*N+f*G+d*X,s[13]=h*y+u*B+f*q+d*se,s[2]=g*S+x*w+m*O+p*I,s[6]=g*T+x*L+m*z+p*V,s[10]=g*C+x*N+m*G+p*X,s[14]=g*y+x*B+m*q+p*se,s[3]=b*S+_*w+v*O+M*I,s[7]=b*T+_*L+v*z+M*V,s[11]=b*C+_*N+v*G+M*X,s[15]=b*y+_*B+v*q+M*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+x*(+t*c*d-t*l*f+s*a*f-i*a*d+i*l*h-s*c*h)+m*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=u*m*l-x*f*l+x*c*d-o*m*d-u*c*p+o*f*p,_=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,v=h*x*l-g*u*l+g*o*d-a*x*d-h*o*p+a*u*p,M=g*u*c-h*x*c-g*o*f+a*x*f+h*o*m-a*u*m,S=t*b+n*_+i*v+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=b*T,e[1]=(x*f*s-u*m*s-x*i*d+n*m*d+u*i*p-n*f*p)*T,e[2]=(o*m*s-x*c*s+x*i*l-n*m*l-o*i*p+n*c*p)*T,e[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*T,e[4]=_*T,e[5]=(h*m*s-g*f*s+g*i*d-t*m*d-h*i*p+t*f*p)*T,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*T,e[7]=(a*f*s-h*c*s+h*i*l-t*f*l-a*i*d+t*c*d)*T,e[8]=v*T,e[9]=(g*u*s-h*x*s-g*n*d+t*x*d+h*n*p-t*u*p)*T,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*p+t*o*p)*T,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*d-t*o*d)*T,e[12]=M*T,e[13]=(h*x*i-g*u*i+g*n*f-t*x*f-h*n*m+t*u*m)*T,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,x=a*h,m=a*u,p=o*u,b=c*l,_=c*h,v=c*u,M=n.x,S=n.y,T=n.z;return i[0]=(1-(x+p))*M,i[1]=(d+v)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(f+p))*S,i[6]=(m+b)*S,i[7]=0,i[8]=(g+_)*T,i[9]=(m-b)*T,i[10]=(1-(f+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$i.set(i[0],i[1],i[2]).length();const a=$i.set(i[4],i[5],i[6]).length(),o=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const l=1/s,h=1/a,u=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Bn,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Bn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ga)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Bn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Bn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ga)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new R,Rn=new _e,dp=new R(0,0,0),pp=new R(1,1,1),fi=new R,qr=new R,fn=new R,rh=new _e,ah=new bt;class It{constructor(e=0,t=0,n=0,i=It.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}It.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const oh=new R,es=new bt,Jn=new _e,Yr=new R,Vs=new R,gp=new R,vp=new bt,ch=new R(1,0,0),lh=new R(0,1,0),hh=new R(0,0,1),uh={type:"added"},xp={type:"removed"},ts={type:"childadded",child:null},mo={type:"childremoved",child:null};class mt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new R,t=new It,n=new bt,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new He}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Vs,Yr,this.up):Jn.lookAt(Yr,Vs,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Jn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new R(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new R,Zn=new R,go=new R,Qn=new R,ns=new R,is=new R,fh=new R,vo=new R,xo=new R,bo=new R,_o=new tt,yo=new tt,Mo=new tt;class Sn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pn.subVectors(i,t),Zn.subVectors(n,t),go.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(Zn),c=Pn.dot(go),l=Zn.dot(Zn),h=Zn.dot(go),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return _o.setScalar(0),yo.setScalar(0),Mo.setScalar(0),_o.fromBufferAttribute(e,t),yo.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_o,s.x),a.addScaledVector(yo,s.y),a.addScaledVector(Mo,s.z),a}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),Zn.subVectors(e,t),Pn.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Pn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ns.subVectors(i,n),is.subVectors(s,n),vo.subVectors(e,n);const c=ns.dot(vo),l=is.dot(vo);if(c<=0&&l<=0)return t.copy(n);xo.subVectors(e,i);const h=ns.dot(xo),u=is.dot(xo);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ns,a);bo.subVectors(e,s);const d=ns.dot(bo),g=is.dot(bo);if(g>=0&&d<=g)return t.copy(s);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(is,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return fh.subVectors(s,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(fh,o);const p=1/(m+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function So(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ${constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=yl(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=So(a,s,e+1/3),this.g=So(a,s,e),this.b=So(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=uf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ze.workingToColorSpace(Yt.copy(this),e),Math.round(qe(Yt.r*255,0,255))*65536+Math.round(qe(Yt.g*255,0,255))*256+Math.round(qe(Yt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,s=Yt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Lt){Ze.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Kr);const n=dr(di.h,Kr.h,t),i=dr(di.s,Kr.s,t),s=dr(di.l,Kr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new $;$.NAMES=uf;let bp=0;class In extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=An(),this.name="",this.type="Material",this.blending=_s,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nn extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new R,Jr=new ee;let _p=0;class Ye{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}}class ff extends Ye{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class df extends Ye{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ce extends Ye{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yp=0;const yn=new _e,wo=new mt,ss=new R,dn=new ci,Ws=new ci,Ot=new R;class nt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?df:ff)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(dn.min,Ws.min),dn.expandByPoint(Ot),Ot.addVectors(dn.max,Ws.max),dn.expandByPoint(Ot)):(dn.expandByPoint(Ws.min),dn.expandByPoint(Ws.max))}dn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ot.fromBufferAttribute(o,l),c&&(ss.fromBufferAttribute(e,l),Ot.add(ss)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new R,c[C]=new R;const l=new R,h=new R,u=new R,f=new ee,d=new ee,g=new ee,x=new R,m=new R;function p(C,y,w){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,w),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,w),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[C].add(x),o[y].add(x),o[w].add(x),c[C].add(m),c[y].add(m),c[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,y=b.length;C<y;++C){const w=b[C],L=w.start,N=w.count;for(let B=L,O=L+N;B<O;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new R,v=new R,M=new R,S=new R;function T(C){M.fromBufferAttribute(i,C),S.copy(M);const y=o[C];_.copy(y),_.sub(M.multiplyScalar(M.dot(y))).normalize(),v.crossVectors(S,y);const L=v.dot(c[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,L)}for(let C=0,y=b.length;C<y;++C){const w=b[C],L=w.start,N=w.count;for(let B=L,O=L+N;B<O;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,s=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ye(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new _e,Ei=new Ya,Zr=new Wn,ph=new R,Qr=new R,$r=new R,ea=new R,To=new R,ta=new R,mh=new R,na=new R;class ze extends mt{constructor(e=new nt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ta.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(To.fromBufferAttribute(u,e),a?ta.addScaledVector(To,h):ta.addScaledVector(To.sub(t),h))}t.add(ta)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(Zr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Zr,ph)===null||Ei.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(dh.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,M=_;v<M;v+=3){const S=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);i=ia(this,p,e,n,l,h,u,S,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const b=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);i=ia(this,a,e,n,l,h,u,b,_,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,M=_;v<M;v+=3){const S=v,T=v+1,C=v+2;i=ia(this,p,e,n,l,h,u,S,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const b=m,_=m+1,v=m+2;i=ia(this,a,e,n,l,h,u,b,_,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Mp(r,e,t,n,i,s,a,o){let c;if(e.side===Zt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===oi,o),c===null)return null;na.copy(o),na.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:r}}function ia(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Qr),r.getVertexPosition(c,$r),r.getVertexPosition(l,ea);const h=Mp(r,e,t,n,Qr,$r,ea,mh);if(h){const u=new R;Sn.getBarycoord(mh,Qr,$r,ea,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,o,c,l,u,new ee)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,o,c,l,u,new ee)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};Sn.getNormal(Qr,$r,ea,f.normal),h.face=f,h.barycoord=u}return h}class Vn extends nt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(x,m,p,b,_,v,M,S,T,C,y){const w=v/T,L=M/C,N=v/2,B=M/2,O=S/2,z=T+1,G=C+1;let q=0,I=0;const V=new R;for(let X=0;X<G;X++){const se=X*L-B;for(let Ae=0;Ae<z;Ae++){const We=Ae*w-N;V[x]=We*b,V[m]=se*_,V[p]=O,l.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=S>0?1:-1,h.push(V.x,V.y,V.z),u.push(Ae/T),u.push(1-X/C),q+=1}}for(let X=0;X<C;X++)for(let se=0;se<T;se++){const Ae=f+se+z*X,We=f+se+z*(X+1),Pe=f+(se+1)+z*(X+1),Ne=f+(se+1)+z*X;c.push(Ae,We,Ne),c.push(We,Pe,Ne),I+=6}o.addGroup(d,I,y),d+=I,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(r){const e={};for(let t=0;t<r.length;t++){const n=Rs(r[t]);for(const i in n)e[i]=n[i]}return e}function Sp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function pf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Hn={clone:Rs,merge:tn};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mf extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new R,gh=new ee,vh=new ee;class Jt extends mf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,gh,vh),t.subVectors(vh,gh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,as=1;class gf extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(rs,as,e,t);i.layers=this.layers,this.add(i);const s=new Jt(rs,as,e,t);s.layers=this.layers,this.add(s);const a=new Jt(rs,as,e,t);a.layers=this.layers,this.add(a);const o=new Jt(rs,as,e,t);o.layers=this.layers,this.add(o);const c=new Jt(rs,as,e,t);c.layers=this.layers,this.add(c);const l=new Jt(rs,as,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vf extends Ct{constructor(e=[],t=As,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xf extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vn(5,5,5),s=new Qe({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:ri});s.uniforms.tEquirect.value=t;const a=new ze(i,s),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=Ht),new gf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class St extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Sl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new $(e),this.near=t,this.far=n}clone(){return new Sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bf extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new It,this.environmentIntensity=1,this.environmentRotation=new It,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _f{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new R;class Rr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ye(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yf extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const js=new R,cs=new R,ls=new R,hs=new ee,Xs=new ee,Mf=new _e,sa=new R,qs=new R,ra=new R,xh=new ee,Eo=new ee,bh=new ee;class Ep extends mt{constructor(e=new yf){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _f(t,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new Rr(n,3,0,!1)),os.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=os,this.material=e,this.center=new ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;aa(sa.set(-.5,-.5,0),ls,a,cs,i,s),aa(qs.set(.5,-.5,0),ls,a,cs,i,s),aa(ra.set(.5,.5,0),ls,a,cs,i,s),xh.set(0,0),Eo.set(1,0),bh.set(1,1);let o=e.ray.intersectTriangle(sa,qs,ra,!1,js);if(o===null&&(aa(qs.set(-.5,.5,0),ls,a,cs,i,s),Eo.set(0,1),o=e.ray.intersectTriangle(sa,ra,qs,!1,js),o===null))return;const c=e.ray.origin.distanceTo(js);c<e.near||c>e.far||t.push({distance:c,point:js.clone(),uv:Sn.getInterpolation(js,sa,qs,ra,xh,Eo,bh,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function aa(r,e,t,n,i,s){hs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Xs.x=s*hs.x-i*hs.y,Xs.y=i*hs.x+s*hs.y):Xs.copy(hs),r.copy(e),r.x+=Xs.x,r.y+=Xs.y,r.applyMatrix4(Mf)}const _h=new R,yh=new tt,Mh=new tt,Cp=new R,Sh=new _e,oa=new R,Co=new Wn,wh=new _e,Ro=new Ya;class Rp extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zl,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingBox.expandByPoint(oa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingSphere.expandByPoint(oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(i),e.ray.intersectsSphere(Co)!==!1&&(wh.copy(i).invert(),Ro.copy(e.ray).applyMatrix4(wh),!(this.boundingBox!==null&&Ro.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ro)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ad?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;yh.fromBufferAttribute(i.attributes.skinIndex,e),Mh.fromBufferAttribute(i.attributes.skinWeight,e),_h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Mh.getComponent(s);if(a!==0){const o=yh.getComponent(s);Sh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cp.copy(_h).applyMatrix4(Sh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sf extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pr extends Ct{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Vt,h=Vt,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Th=new _e,Pp=new _e;class wl{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Pp;Th.multiplyMatrices(o,t[s]),Th.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pr(t,e,e,vn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Sf),this.bones.push(a),this.boneInverses.push(new _e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Pr extends Ye{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new _e,Ah=new _e,ca=[],Eh=new ci,Lp=new _e,Ys=new ze,Ks=new Wn;class Dt extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Eh.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(Eh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Ks.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),e.ray.intersectsSphere(Ks)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,us),Ah.multiplyMatrices(n,us),Ys.matrixWorld=Ah,Ys.raycast(e,ca);for(let a=0,o=ca.length;a<o;a++){const c=ca[a];c.instanceId=s,c.object=this,t.push(c)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(i*this.count),i,this.count,wr,Tn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Po=new R,Dp=new R,Ip=new He;class Ni{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Po.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ip.getNormalMatrix(e),i=this.coplanarPoint(Po).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Wn,Np=new ee(.5,.5),la=new R;class Tl{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],b=s[12],_=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-a,d-h,p-g,M-b).normalize(),i[1].setComponents(l+a,d+h,p+g,M+b).normalize(),i[2].setComponents(l+o,d+u,p+x,M+_).normalize(),i[3].setComponents(l-o,d-u,p-x,M-_).normalize(),n)i[4].setComponents(c,f,m,v).normalize(),i[5].setComponents(l-c,d-f,p-m,M-v).normalize();else if(i[4].setComponents(l-c,d-f,p-m,M-v).normalize(),t===Bn)i[5].setComponents(l+c,d+f,p+m,M+v).normalize();else if(t===Ga)i[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=Np.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(la.x=i.normal.x>0?e.max.x:e.min.x,la.y=i.normal.y>0?e.max.y:e.min.y,la.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wf extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new R,Wa=new R,Ch=new _e,Js=new Ya,ha=new Wn,Lo=new R,Rh=new R;class Al extends mt{constructor(e=new nt,t=new wf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Va.fromBufferAttribute(t,i-1),Wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Va.distanceTo(Wa);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(i),ha.radius+=s,e.ray.intersectsSphere(ha)===!1)return;Ch.copy(i).invert(),Js.copy(e.ray).applyMatrix4(Ch);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=l){const p=h.getX(x),b=h.getX(x+1),_=ua(this,e,Js,c,p,b,x);_&&t.push(_)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(d),p=ua(this,e,Js,c,x,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=l){const p=ua(this,e,Js,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=ua(this,e,Js,c,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ua(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Va.fromBufferAttribute(o,i),Wa.fromBufferAttribute(o,s),t.distanceSqToSegment(Va,Wa,Lo,Rh)>n)return;Lo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Lo);if(!(l<e.near||l>e.far))return{distance:l,point:Rh.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Ph=new R,Lh=new R;class Tf extends Al{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ph.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ph.distanceTo(Lh);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Up extends Al{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Af extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dh=new _e,tl=new Ya,fa=new Wn,da=new R;class Hi extends mt{constructor(e=new nt,t=new Af){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;Dh.copy(i).invert(),tl.copy(e.ray).applyMatrix4(Dh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,x=d;g<x;g++){const m=l.getX(g);da.fromBufferAttribute(u,m),Ih(da,m,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)da.fromBufferAttribute(u,g),Ih(da,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ih(r,e,t,n,i,s,a){const o=tl.distanceSqToPoint(r);if(o<t){const c=new R;tl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ka extends Ct{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class El extends Ct{constructor(e,t,n=Bi,i,s,a,o=Vt,c=Vt,l,h=Mr,u=1){if(h!==Mr&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ef extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cl extends nt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+s,x=i+1,m=new R,p=new R;for(let b=0;b<=g;b++){let _=0,v=0,M=0,S=0;if(b<=n){const y=b/n,w=y*Math.PI/2;v=-h-e*Math.cos(w),M=e*Math.sin(w),S=-e*Math.cos(w),_=y*u}else if(b<=n+s){const y=(b-n)/s;v=-h+y*t,M=e,S=0,_=u+y*f}else{const y=(b-n-s)/n,w=y*Math.PI/2;v=h+e*Math.sin(w),M=e*Math.cos(w),S=e*Math.sin(w),_=u+f+y*u}const T=Math.max(0,Math.min(1,_/d));let C=0;b===0?C=.5/i:b===g&&(C=-.5/i);for(let y=0;y<=i;y++){const w=y/i,L=w*Math.PI*2,N=Math.sin(L),B=Math.cos(L);p.x=-M*B,p.y=v,p.z=M*N,o.push(p.x,p.y,p.z),m.set(-M*B,S,M*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(w+C,T)}if(b>0){const y=(b-1)*x;for(let w=0;w<i;w++){const L=y+w,N=y+w+1,B=b*x+w,O=b*x+w+1;a.push(L,N,B),a.push(N,O,B)}}}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Gn extends nt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(d,2));function b(){const v=new R,M=new R;let S=0;const T=(t-e)/n;for(let C=0;C<=s;C++){const y=[],w=C/s,L=w*(t-e)+e;for(let N=0;N<=i;N++){const B=N/i,O=B*c+o,z=Math.sin(O),G=Math.cos(O);M.x=L*z,M.y=-w*n+m,M.z=L*G,u.push(M.x,M.y,M.z),v.set(z,T,G).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-w),y.push(g++)}x.push(y)}for(let C=0;C<i;C++)for(let y=0;y<s;y++){const w=x[y][C],L=x[y+1][C],N=x[y+1][C+1],B=x[y][C+1];(e>0||y!==0)&&(h.push(w,L,B),S+=3),(t>0||y!==s-1)&&(h.push(L,N,B),S+=3)}l.addGroup(p,S,0),p+=S}function _(v){const M=g,S=new ee,T=new R;let C=0;const y=v===!0?e:t,w=v===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;const L=g;for(let N=0;N<=i;N++){const O=N/i*c+o,z=Math.cos(O),G=Math.sin(O);T.x=y*G,T.y=m*w,T.z=y*z,u.push(T.x,T.y,T.z),f.push(0,w,0),S.x=z*.5+.5,S.y=G*.5*w+.5,d.push(S.x,S.y),g++}for(let N=0;N<i;N++){const B=M+N,O=L+N;v===!0?h.push(O,O+1,B):h.push(O+1,O,B),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ja extends Gn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ja(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Za extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(s.slice(),3)),this.setAttribute("uv",new Ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const _=new R,v=new R,M=new R;for(let S=0;S<t.length;S+=3)d(t[S+0],_),d(t[S+1],v),d(t[S+2],M),c(_,v,M,b)}function c(b,_,v,M){const S=M+1,T=[];for(let C=0;C<=S;C++){T[C]=[];const y=b.clone().lerp(v,C/S),w=_.clone().lerp(v,C/S),L=S-C;for(let N=0;N<=L;N++)N===0&&C===S?T[C][N]=y:T[C][N]=y.clone().lerp(w,N/L)}for(let C=0;C<S;C++)for(let y=0;y<2*(S-C)-1;y++){const w=Math.floor(y/2);y%2===0?(f(T[C][w+1]),f(T[C+1][w]),f(T[C][w])):(f(T[C][w+1]),f(T[C+1][w+1]),f(T[C+1][w]))}}function l(b){const _=new R;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(b),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function h(){const b=new R;for(let _=0;_<s.length;_+=3){b.x=s[_+0],b.y=s[_+1],b.z=s[_+2];const v=m(b)/2/Math.PI+.5,M=p(b)/Math.PI+.5;a.push(v,1-M)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){const _=a[b+0],v=a[b+2],M=a[b+4],S=Math.max(_,v,M),T=Math.min(_,v,M);S>.9&&T<.1&&(_<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),M<.2&&(a[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function d(b,_){const v=b*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){const b=new R,_=new R,v=new R,M=new R,S=new ee,T=new ee,C=new ee;for(let y=0,w=0;y<s.length;y+=9,w+=6){b.set(s[y+0],s[y+1],s[y+2]),_.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),S.set(a[w+0],a[w+1]),T.set(a[w+2],a[w+3]),C.set(a[w+4],a[w+5]),M.copy(b).add(_).add(v).divideScalar(3);const L=m(M);x(S,w+0,b,L),x(T,w+2,_,L),x(C,w+4,v,L)}}function x(b,_,v,M){M<0&&b.x===1&&(a[_]=b.x-1),v.x===0&&v.z===0&&(a[_]=M/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.vertices,e.indices,e.radius,e.details)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new ee:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],s=[],a=[],o=new R,c=new _e;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(qe(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rl extends jn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ee){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fp extends Rl{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Pl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const pa=new R,Do=new Pl,Io=new Pl,No=new Pl;class Op extends jn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(pa.subVectors(i[0],i[1]).add(i[0]),l=pa);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(pa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Do.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Io.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),No.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Io.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),No.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Do.calc(c),Io.calc(c),No.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nh(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function zp(r,e){const t=1-r;return t*t*e}function kp(r,e){return 2*(1-r)*r*e}function Bp(r,e){return r*r*e}function mr(r,e,t,n){return zp(r,e)+kp(r,t)+Bp(r,n)}function Hp(r,e){const t=1-r;return t*t*t*e}function Gp(r,e){const t=1-r;return 3*t*t*r*e}function Vp(r,e){return 3*(1-r)*r*r*e}function Wp(r,e){return r*r*r*e}function gr(r,e,t,n,i){return Hp(r,e)+Gp(r,t)+Vp(r,n)+Wp(r,i)}class Cf extends jn{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,i.x,s.x,a.x,o.x),gr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jp extends jn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,i.x,s.x,a.x,o.x),gr(e,i.y,s.y,a.y,o.y),gr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rf extends jn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xp extends jn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pf extends jn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(mr(e,i.x,s.x,a.x),mr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qp extends jn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(mr(e,i.x,s.x,a.x),mr(e,i.y,s.y,a.y),mr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lf extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Nh(o,c.x,l.x,h.x,u.x),Nh(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ee().fromArray(i))}return this}}var Uh=Object.freeze({__proto__:null,ArcCurve:Fp,CatmullRomCurve3:Op,CubicBezierCurve:Cf,CubicBezierCurve3:jp,EllipseCurve:Rl,LineCurve:Rf,LineCurve3:Xp,QuadraticBezierCurve:Pf,QuadraticBezierCurve3:qp,SplineCurve:Lf});class Yp extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Uh[i.type]().fromJSON(i))}return this}}class Fh extends Yp{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rf(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Pf(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Cf(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Lf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new Rl(e,t,n,i,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ll extends Fh{constructor(e){super(e),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Fh().fromJSON(i))}return this}}function Kp(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Df(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=em(r,e,s,t)),r.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<i;f+=t){const d=r[f],g=r[f+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Lr(s,a,t,o,c,l,0),a}function Df(r,e,t,n,i){let s;if(i===um(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Oh(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Oh(a/n|0,r[a],r[a+1],s);return s&&Ps(s,s.next)&&(Ir(s),s=s.next),s}function Gi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ps(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&rm(r,n,i,s);let o=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?Zp(r,n,i,s):Jp(r)){e.push(c.i,r.i,l.i),Ir(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=Qp(Gi(r),e),Lr(r,e,t,n,i,s,2)):a===2&&$p(r,e,t,n,i,s):Lr(Gi(r),e,t,n,i,s,1);break}}}function Jp(r){const e=r.prev,t=r,n=r.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,s,a),u=Math.min(o,c,l),f=Math.max(i,s,a),d=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&lr(i,o,s,c,a,l,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zp(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Mt(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,f=a.y,d=Math.min(o,c,l),g=Math.min(h,u,f),x=Math.max(o,c,l),m=Math.max(h,u,f),p=nl(d,g,e,t,n),b=nl(x,m,e,t,n);let _=r.prevZ,v=r.nextZ;for(;_&&_.z>=p&&v&&v.z<=b;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&lr(o,h,c,u,l,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&lr(o,h,c,u,l,f,v.x,v.y)&&Mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&lr(o,h,c,u,l,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&lr(o,h,c,u,l,f,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qp(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ps(n,i)&&Nf(n,t,t.next,i)&&Dr(n,i)&&Dr(i,n)&&(e.push(n.i,t.i,i.i),Ir(t),Ir(t.next),t=r=i),t=t.next}while(t!==r);return Gi(t)}function $p(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cm(a,o)){let c=Uf(a,o);a=Gi(a,a.next),c=Gi(c,c.next),Lr(a,e,t,n,i,s,0),Lr(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function em(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=Df(r,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(om(l))}i.sort(tm);for(let s=0;s<i.length;s++)t=nm(i[s],t);return t}function tm(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function nm(r,e){const t=im(r,e);if(!t)return e;const n=Uf(t,r);return Gi(n,n.next),Gi(t,t.next)}function im(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Ps(r,t))return t;do{if(Ps(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&If(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Dr(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&sm(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function sm(r,e){return Mt(r.prev,r,e.prev)<0&&Mt(e.next,r,r.next)<0}function rm(r,e,t,n){let i=r;do i.z===0&&(i.z=nl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,am(i)}function am(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function nl(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function om(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function If(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function lr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&If(r,e,t,n,i,s,a,o)}function cm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!lm(r,e)&&(Dr(r,e)&&Dr(e,r)&&hm(r,e)&&(Mt(r.prev,r,e.prev)||Mt(r,e.prev,e))||Ps(r,e)&&Mt(r.prev,r,r.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ps(r,e){return r.x===e.x&&r.y===e.y}function Nf(r,e,t,n){const i=ga(Mt(r,e,t)),s=ga(Mt(r,e,n)),a=ga(Mt(t,n,r)),o=ga(Mt(t,n,e));return!!(i!==s&&a!==o||i===0&&ma(r,t,e)||s===0&&ma(r,n,e)||a===0&&ma(t,r,n)||o===0&&ma(t,e,n))}function ma(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ga(r){return r>0?1:r<0?-1:0}function lm(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Nf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Dr(r,e){return Mt(r.prev,r,r.next)<0?Mt(r,e,r.next)>=0&&Mt(r,r.prev,e)>=0:Mt(r,e,r.prev)<0||Mt(r,r.next,e)<0}function hm(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Uf(r,e){const t=il(r.i,r.x,r.y),n=il(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Oh(r,e,t,n){const i=il(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ir(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function il(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function um(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class fm{static triangulate(e,t,n=2){return Kp(e,t,n)}}class vr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return vr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];zh(e),kh(n,e);let a=e.length;t.forEach(zh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,kh(n,t[c]);const o=fm.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function zh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function kh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class xr extends Za{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xr(e.radius,e.detail)}}class Dl extends nt{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=qe(i,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/t,u=new R,f=new ee,d=new R,g=new R,x=new R;let m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let b=0;b<=t;b++){const _=n+b*h*i,v=Math.sin(_),M=Math.cos(_);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*v,u.y=e[S].y,u.z=e[S].x*M,a.push(u.x,u.y,u.z),f.x=b/t,f.y=S/(e.length-1),o.push(f.x,f.y);const T=c[3*S+0]*v,C=c[3*S+1],y=c[3*S+0]*M;l.push(T,C,y)}}for(let b=0;b<t;b++)for(let _=0;_<e.length-1;_++){const v=_+b*e.length,M=v,S=v+e.length,T=v+e.length+1,C=v+1;s.push(M,S,C),s.push(T,C,S)}this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.points,e.segments,e.phiStart,e.phiLength)}}class Il extends Za{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Il(e.radius,e.detail)}}class xn extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const b=p*f-a;for(let _=0;_<l;_++){const v=_*u-s;g.push(v,-b,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const _=b+l*p,v=b+l*(p+1),M=b+1+l*(p+1),S=b+1+l*p;d.push(_,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ja extends nt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const f=(t-e)/i,d=new R,g=new ee;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const b=p+m,_=b,v=b+n+1,M=b+n+2,S=b+1;o.push(_,v,S),o.push(v,M,S)}}this.setIndex(o),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qa extends nt{constructor(e=new Ll([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(a,2));function l(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;vr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const b=g[m];vr.isClockWise(b)===!0&&(g[m]=b.reverse())}const x=vr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){const b=d[m];i.push(b.x,b.y,0),s.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=x.length;m<p;m++){const b=x[m],_=b[0]+u,v=b[1]+u,M=b[2]+u;n.push(_,v,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return dm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Qa(n,e.curveSegments)}}function dm(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Xa extends nt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const b=[],_=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){const S=M/t;u.x=-e*Math.cos(i+S*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+S*s)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(S+v,1-_),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const _=h[p][b+1],v=h[p][b],M=h[p+1][b],S=h[p+1][b+1];(p!==0||a>0)&&d.push(_,v,S),(p!==n-1||c<Math.PI)&&d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nl extends nt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const x=g/i*s,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,b=(i+1)*d+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pm extends Qe{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xt extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mm extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gm extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function va(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Ff(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Fr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bm extends Fr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vs,endingEnd:vs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case xs:s=e,o=2*t-n;break;case Ba:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xs:a=e,c=2*n-t;break;case Ba:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let M=0;M!==o;++M)s[M]=p*a[h+M]+b*a[l+M]+_*a[c+M]+v*a[u+M];return s}}class Of extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}}class _m extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _m(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return so}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&vm(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===so,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Ar;class Fs extends Nn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Tr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class zf extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}zf.prototype.ValueTypeName="color";class Ls extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Ls.prototype.ValueTypeName="number";class ym extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)bt.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Ds extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ym(this.times,this.values,this.getValueSize(),e)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Nn{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Tr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Is.prototype.ValueTypeName="vector";class sl{constructor(e="",t=-1,n=[],i=_l){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=An(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Sm(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Nn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=xm(c);c=Bh(c,1,h),l=Bh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ls(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,x){if(d.length!==0){const m=[],p=[];Ff(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const m=[],p=[];for(let b=0;b!==f[g].morphTargets.length;++b){const _=f[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new Ls(".morphTargetInfluence["+x+"]",m,p))}c=d.length*a}else{const d=".bones["+t[u].name+"]";n(Is,d+".position",f,"pos",i),n(Ds,d+".quaternion",f,"rot",i),n(Is,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Mm(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return zf;case"quaternion":return Ds;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Sm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Mm(r.type);if(r.times===void 0){const t=[],n=[];Ff(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const si={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class wm{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Tm=new wm;class zs{constructor(e){this.manager=e!==void 0?e:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class Am extends Error{constructor(e,t){super(e),this.response=t}}class kf extends zs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=si.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=$n[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:_,value:v})=>{if(_)p.close();else{x+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let S=0,T=h.length;S<T;S++){const C=h[S];C.onProgress&&C.onProgress(M)}p.enqueue(v),b()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Am(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{si.add(`file:${e}`,l);const h=$n[e];delete $n[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=$n[e];if(h===void 0)throw this.manager.itemError(e),l;delete $n[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const fs=new WeakMap;class Em extends zs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=fs.get(a);u===void 0&&(u=[],fs.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Er("img");function c(){h(),t&&t(this);const u=fs.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}fs.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),si.remove(`image:${e}`);const f=fs.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Cm extends zs{constructor(e){super(e)}load(e,t,n,i){const s=new Ct,a=new Em(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class $a extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Rm extends $a{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uo=new _e,Hh=new R,Gh=new R;class Ul{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pm extends Ul{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lm extends $a{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Pm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vh=new _e,Zs=new R,Fo=new R;class Dm extends Ul{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zs),Fo.copy(n.position),Fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fo),n.updateMatrixWorld(),i.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,n.coordinateSystem,n.reversedDepth)}}class Nr extends $a{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eo extends mf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Im extends Ul{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rl extends $a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class br{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Fl extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Oo=new WeakMap;class Nm extends zs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=si.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(Oo.has(a)===!0)i&&i(Oo.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return si.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Oo.set(c,l),si.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Um extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Fm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){bt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;bt.multiplyQuaternionsFlat(e,a,e,t,e,n),bt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ol="\\[\\]\\.:\\/",Om=new RegExp("["+Ol+"]","g"),zl="[^"+Ol+"]",zm="[^"+Ol.replace("\\.","")+"]",km=/((?:WC+[\/:])*)/.source.replace("WC",zl),Bm=/(WCOD+)?/.source.replace("WCOD",zm),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),Vm=new RegExp("^"+km+Bm+Hm+Gm+"$"),Wm=["material","materials","bones","map"];class jm{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(e){const t=Vm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Wm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=jm;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:vs,endingEnd:vs};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Pd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case _l:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Rd;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Ed){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=xs,i.endingEnd=xs):(e?i.endingStart=this.zeroSlopeAtStart?xs:vs:i.endingStart=Ba,t?i.endingEnd=this.zeroSlopeAtEnd?xs:vs:i.endingEnd=Ba)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const qm=new Float32Array(1);class Ym extends ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const f=i[u],d=f.name;let g=h[d];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;g=new Fm(st.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Of(new Float32Array(2),new Float32Array(2),1,qm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?sl.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=_l),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Xm(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?sl.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function Wh(r,e,t,n){const i=Km(n);switch(t){case tf:return r*e;case wr:return r*e/i.components*i.byteLength;case vl:return r*e/i.components*i.byteLength;case sf:return r*e*2/i.components*i.byteLength;case xl:return r*e*2/i.components*i.byteLength;case nf:return r*e*3/i.components*i.byteLength;case vn:return r*e*4/i.components*i.byteLength;case bl:return r*e*4/i.components*i.byteLength;case La:case Da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Cc:return Math.max(r,16)*Math.max(e,8)/4;case Tc:case Ec:return Math.max(r,8)*Math.max(e,8)/2;case Rc:case Pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Xc:case qc:case Yc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kc:case Jc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Zc:case Qc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Km(r){switch(r){case En:case Zu:return{byteLength:1,components:1};case _r:case Qu:case ln:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Bi:case pl:case Tn:return{byteLength:4,components:1};case $u:case ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);function Hf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Jm(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];r.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h0=`#ifdef USE_IRIDESCENCE
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
#endif`,u0=`#ifdef USE_BUMPMAP
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_0=`#define PI 3.141592653589793
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
} // validated`,y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
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
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,V0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,K0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,J0=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Ug=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`#include <common>
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
}`,iv=`#if DEPTH_PACKING == 3200
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
}`,sv=`#define DISTANCE
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
}`,rv=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
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
}`,lv=`uniform vec3 diffuse;
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
}`,hv=`#include <common>
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
}`,uv=`uniform vec3 diffuse;
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
}`,fv=`#define LAMBERT
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
}`,dv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pv=`#define MATCAP
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
}`,mv=`#define MATCAP
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
}`,gv=`#define NORMAL
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
}`,vv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xv=`#define PHONG
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
}`,bv=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,_v=`#define STANDARD
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
}`,yv=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Mv=`#define TOON
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
}`,Sv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wv=`uniform float size;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Ev=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Cv=`uniform float rotation;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Zm,alphahash_pars_fragment:Qm,alphamap_fragment:$m,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,batching_pars_vertex:r0,batching_vertex:a0,begin_vertex:o0,beginnormal_vertex:c0,bsdfs:l0,iridescence_fragment:h0,bumpmap_pars_fragment:u0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:v0,color_pars_vertex:x0,color_vertex:b0,common:_0,cube_uv_reflection_fragment:y0,defaultnormal_vertex:M0,displacementmap_pars_vertex:S0,displacementmap_vertex:w0,emissivemap_fragment:T0,emissivemap_pars_fragment:A0,colorspace_fragment:E0,colorspace_pars_fragment:C0,envmap_fragment:R0,envmap_common_pars_fragment:P0,envmap_pars_fragment:L0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:V0,envmap_vertex:I0,fog_vertex:N0,fog_pars_vertex:U0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:z0,lightmap_pars_fragment:k0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:j0,lights_phong_fragment:X0,lights_phong_pars_fragment:q0,lights_physical_fragment:Y0,lights_physical_pars_fragment:K0,lights_fragment_begin:J0,lights_fragment_maps:Z0,lights_fragment_end:Q0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:sg,map_particle_fragment:rg,map_particle_pars_fragment:ag,metalnessmap_fragment:og,metalnessmap_pars_fragment:cg,morphinstance_vertex:lg,morphcolor_vertex:hg,morphnormal_vertex:ug,morphtarget_pars_vertex:fg,morphtarget_vertex:dg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:vg,normal_vertex:xg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:wg,packing:Tg,premultiplied_alpha_fragment:Ag,project_vertex:Eg,dithering_fragment:Cg,dithering_pars_fragment:Rg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Dg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Ng,shadowmask_pars_fragment:Ug,skinbase_vertex:Fg,skinning_pars_vertex:Og,skinning_vertex:zg,skinnormal_vertex:kg,specularmap_fragment:Bg,specularmap_pars_fragment:Hg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Vg,transmission_fragment:Wg,transmission_pars_fragment:jg,uv_pars_fragment:Xg,uv_pars_vertex:qg,uv_vertex:Yg,worldpos_vertex:Kg,background_vert:Jg,background_frag:Zg,backgroundCube_vert:Qg,backgroundCube_frag:$g,cube_vert:ev,cube_frag:tv,depth_vert:nv,depth_frag:iv,distanceRGBA_vert:sv,distanceRGBA_frag:rv,equirect_vert:av,equirect_frag:ov,linedashed_vert:cv,linedashed_frag:lv,meshbasic_vert:hv,meshbasic_frag:uv,meshlambert_vert:fv,meshlambert_frag:dv,meshmatcap_vert:pv,meshmatcap_frag:mv,meshnormal_vert:gv,meshnormal_frag:vv,meshphong_vert:xv,meshphong_frag:bv,meshphysical_vert:_v,meshphysical_frag:yv,meshtoon_vert:Mv,meshtoon_frag:Sv,points_vert:wv,points_frag:Tv,shadow_vert:Av,shadow_frag:Ev,sprite_vert:Cv,sprite_frag:Rv},le={common:{diffuse:{value:new $(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},zn={basic:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $(0)},specular:{value:new $(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:tn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new $(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:tn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new $(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:tn([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:tn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:tn([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:tn([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:tn([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:tn([le.lights,le.fog,{color:{value:new $(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};zn.physical={uniforms:tn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $(0)},specularColor:{value:new $(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const xa={r:0,b:0,g:0},Ri=new It,Pv=new _e;function Lv(r,e,t,n,i,s,a){const o=new $(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1;const M=g(_);M===null?p(o,c):M&&M.isColor&&(p(M,1),v=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===qa)?(h===void 0&&(h=new ze(new Vn(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Rs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(Ri)),h.material.toneMapped=Ze.getTransfer(M.colorSpace)!==rt,(u!==M||f!==M.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ze(new xn(2,2),new Qe({name:"BackgroundMaterial",uniforms:Rs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(xa,pf(r)),n.buffers.color.setClear(xa.r,xa.g,xa.b,v,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:x,addToRenderList:m,dispose:b}}function Dv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(w,L,N,B,O){let z=!1;const G=u(B,N,L);s!==G&&(s=G,l(s.object)),z=d(w,B,N,O),z&&g(w,B,N,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(w,L,N,B),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return r.createVertexArray()}function l(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function u(w,L,N){const B=N.wireframe===!0;let O=n[w.id];O===void 0&&(O={},n[w.id]=O);let z=O[L.id];z===void 0&&(z={},O[L.id]=z);let G=z[B];return G===void 0&&(G=f(c()),z[B]=G),G}function f(w){const L=[],N=[],B=[];for(let O=0;O<t;O++)L[O]=0,N[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:B,object:w,attributes:{},index:null}}function d(w,L,N,B){const O=s.attributes,z=L.attributes;let G=0;const q=N.getAttributes();for(const I in q)if(q[I].location>=0){const X=O[I];let se=z[I];if(se===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(w,L,N,B){const O={},z=L.attributes;let G=0;const q=N.getAttributes();for(const I in q)if(q[I].location>=0){let X=z[I];X===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(X=w.instanceColor));const se={};se.attribute=X,X&&X.data&&(se.data=X.data),O[I]=se,G++}s.attributes=O,s.attributesNum=G,s.index=B}function x(){const w=s.newAttributes;for(let L=0,N=w.length;L<N;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const N=s.newAttributes,B=s.enabledAttributes,O=s.attributeDivisors;N[w]=1,B[w]===0&&(r.enableVertexAttribArray(w),B[w]=1),O[w]!==L&&(r.vertexAttribDivisor(w,L),O[w]=L)}function b(){const w=s.newAttributes,L=s.enabledAttributes;for(let N=0,B=L.length;N<B;N++)L[N]!==w[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function _(w,L,N,B,O,z,G){G===!0?r.vertexAttribIPointer(w,L,N,O,z):r.vertexAttribPointer(w,L,N,B,O,z)}function v(w,L,N,B){x();const O=B.attributes,z=N.getAttributes(),G=L.defaultAttributeValues;for(const q in z){const I=z[q];if(I.location>=0){let V=O[q];if(V===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(V=w.instanceColor)),V!==void 0){const X=V.normalized,se=V.itemSize,Ae=e.get(V);if(Ae===void 0)continue;const We=Ae.buffer,Pe=Ae.type,Ne=Ae.bytesPerElement,K=Pe===r.INT||Pe===r.UNSIGNED_INT||V.gpuType===pl;if(V.isInterleavedBufferAttribute){const Z=V.data,de=Z.stride,Ue=V.offset;if(Z.isInstancedInterleavedBuffer){for(let Me=0;Me<I.locationSize;Me++)p(I.location+Me,Z.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Me=0;Me<I.locationSize;Me++)m(I.location+Me);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Me=0;Me<I.locationSize;Me++)_(I.location+Me,se/I.locationSize,Pe,X,de*Ne,(Ue+se/I.locationSize*Me)*Ne,K)}else{if(V.isInstancedBufferAttribute){for(let Z=0;Z<I.locationSize;Z++)p(I.location+Z,V.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Z=0;Z<I.locationSize;Z++)m(I.location+Z);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Z=0;Z<I.locationSize;Z++)_(I.location+Z,se/I.locationSize,Pe,X,se*Ne,se/I.locationSize*Z*Ne,K)}}else if(G!==void 0){const X=G[q];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(I.location,X);break;case 3:r.vertexAttrib3fv(I.location,X);break;case 4:r.vertexAttrib4fv(I.location,X);break;default:r.vertexAttrib1fv(I.location,X)}}}}b()}function M(){C();for(const w in n){const L=n[w];for(const N in L){const B=L[N];for(const O in B)h(B[O].object),delete B[O];delete L[N]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const N in L){const B=L[N];for(const O in B)h(B[O].object),delete B[O];delete L[N]}delete n[w.id]}function T(w){for(const L in n){const N=n[L];if(N[w.id]===void 0)continue;const B=N[w.id];for(const O in B)h(B[O].object),delete B[O];delete N[w.id]}}function C(){y(),a=!0,s!==i&&(s=i,l(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Iv(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Nv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==vn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==En&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Tn&&!C)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:M,maxSamples:S}}function Uv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ni,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const b=s?0:n,_=b*4;let v=p.clippingState||null;c.value=v,v=h(g,f,_,d);for(let M=0;M!==_;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Fv(r){let e=new WeakMap;function t(a,o){return o===Sc?a.mapping=As:o===wc&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sc||o===wc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new xf(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const bs=4,jh=[.125,.215,.35,.446,.526,.582],Oi=20,zo=new eo,Xh=new $;let ko=null,Bo=0,Ho=0,Go=!1;const Ui=(1+Math.sqrt(5))/2,ds=1/Ui,qh=[new R(-Ui,ds,0),new R(Ui,ds,0),new R(-ds,0,Ui),new R(ds,0,Ui),new R(0,Ui,-ds),new R(0,Ui,ds),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ov=new R;class al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Ov}=s;ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Bo,Ho),this._renderer.xr.enabled=Go,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ln,format:vn,colorSpace:rn,depthBuffer:!1},i=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zv(s)),this._blurMaterial=kv(s,e,t)}return i}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,i,s){const c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xh),u.toneMapping=yi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new nn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),m=new ze(new Vn,x);let p=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Xh),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[_],s.y,s.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[_]));const M=this._cubeSize;ba(i,v*M,_>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===As||e.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ba(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=qh[(i-s-1)%qh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ze(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let b=0;for(let T=0;T<Oi;++T){const C=T/x,y=Math.exp(-C*C/2);p.push(y),T===0?b+=y:T<m&&(b+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const v=this._sizeLods[i],M=3*v*(i>_-bs?i-_+bs:0),S=4*(this._cubeSize-v);ba(t,M,S,3*v,2*v),c.setRenderTarget(t),c.render(u,zo)}}function zv(r){const e=[],t=[],n=[];let i=r;const s=r-bs+1+jh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-bs?c=jh[a-r+bs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let S=0;S<d;S++){const T=S%3*2/3-1,C=S>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];b.set(y,x*g*S),_.set(f,m*g*S);const w=[S,S,S,S,S,S];v.set(w,p*g*S)}const M=new nt;M.setAttribute("position",new Ye(b,x)),M.setAttribute("uv",new Ye(_,m)),M.setAttribute("faceIndex",new Ye(v,p)),e.push(M),i>bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yh(r,e,t){const n=new sn(r,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function kv(r,e,t){const n=new Float32Array(Oi),i=new R(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Kh(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Jh(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function Bv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Sc||c===wc,h=c===As||c===Es;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new al(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new al(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gv(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let _=0,v=b.length;_<v;_+=3){const M=b[_+0],S=b[_+1],T=b[_+2];f.push(M,S,S,T,T,M)}}else if(g!==void 0){const b=g.array;x=g.version;for(let _=0,v=b.length/3-1;_<v;_+=3){const M=_+0,S=_+1,T=_+2;f.push(M,S,S,T,T,M)}}else return;const m=new(cf(f)?df:ff)(f,1);m.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Vv(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function l(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*x[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jv(r,e,t){const n=new WeakMap,i=new tt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};var d=w;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let M=o.attributes.position.count*v,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*S*4*u),C=new lf(T,M,S,u);C.type=Tn,C.needsUpdate=!0;const y=v*4;for(let L=0;L<u;L++){const N=p[L],B=b[L],O=_[L],z=M*S*4*L;for(let G=0;G<N.count;G++){const q=G*y;g===!0&&(i.fromBufferAttribute(N,G),T[z+q+0]=i.x,T[z+q+1]=i.y,T[z+q+2]=i.z,T[z+q+3]=0),x===!0&&(i.fromBufferAttribute(B,G),T[z+q+4]=i.x,T[z+q+5]=i.y,T[z+q+6]=i.z,T[z+q+7]=0),m===!0&&(i.fromBufferAttribute(O,G),T[z+q+8]=i.x,T[z+q+9]=i.y,T[z+q+10]=i.z,T[z+q+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new ee(M,S)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Xv(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Gf=new Ct,Zh=new El(1,1),Vf=new lf,Wf=new up,jf=new vf,Qh=[],$h=[],eu=new Float32Array(16),tu=new Float32Array(9),nu=new Float32Array(4);function ks(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qh[i];if(s===void 0&&(s=new Float32Array(i),Qh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function to(r,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function Kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function Jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Zv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;nu.set(n),r.uniformMatrix2fv(this.addr,!1,nu),Ut(t,n)}}function Qv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;tu.set(n),r.uniformMatrix3fv(this.addr,!1,tu),Ut(t,n)}}function $v(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;eu.set(n),r.uniformMatrix4fv(this.addr,!1,eu),Ut(t,n)}}function ex(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function sx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function cx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Zh.compareFunction=of,s=Zh):s=Gf,t.setTexture2D(e||s,i)}function lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wf,i)}function hx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jf,i)}function ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vf,i)}function fx(r){switch(r){case 5126:return qv;case 35664:return Yv;case 35665:return Kv;case 35666:return Jv;case 35674:return Zv;case 35675:return Qv;case 35676:return $v;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}function dx(r,e){r.uniform1fv(this.addr,e)}function px(r,e){const t=ks(e,this.size,2);r.uniform2fv(this.addr,t)}function mx(r,e){const t=ks(e,this.size,3);r.uniform3fv(this.addr,t)}function gx(r,e){const t=ks(e,this.size,4);r.uniform4fv(this.addr,t)}function vx(r,e){const t=ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xx(r,e){const t=ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function bx(r,e){const t=ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _x(r,e){r.uniform1iv(this.addr,e)}function yx(r,e){r.uniform2iv(this.addr,e)}function Mx(r,e){r.uniform3iv(this.addr,e)}function Sx(r,e){r.uniform4iv(this.addr,e)}function wx(r,e){r.uniform1uiv(this.addr,e)}function Tx(r,e){r.uniform2uiv(this.addr,e)}function Ax(r,e){r.uniform3uiv(this.addr,e)}function Ex(r,e){r.uniform4uiv(this.addr,e)}function Cx(r,e,t){const n=this.cache,i=e.length,s=to(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Gf,s[a])}function Rx(r,e,t){const n=this.cache,i=e.length,s=to(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Wf,s[a])}function Px(r,e,t){const n=this.cache,i=e.length,s=to(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||jf,s[a])}function Lx(r,e,t){const n=this.cache,i=e.length,s=to(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vf,s[a])}function Dx(r){switch(r){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return vx;case 35675:return xx;case 35676:return bx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return Tx;case 36295:return Ax;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}class Ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fx(t.type)}}class Nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dx(t.type)}}class Ux{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function iu(r,e){r.seq.push(e),r.map[e.id]=e}function Fx(r,e,t){const n=r.name,i=n.length;for(Vo.lastIndex=0;;){const s=Vo.exec(n),a=Vo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){iu(t,l===void 0?new Ix(o,r,e):new Nx(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Ux(o),iu(t,u)),t=u}}}class Ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Fx(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function su(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ox=37297;let zx=0;function kx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ru=new He;function Bx(r){Ze._getMatrix(ru,Ze.workingColorSpace,r);const e=`mat3( ${ru.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(r)){case Ha:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function au(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+kx(r.getShaderSource(e),o)}else return s}function Hx(r,e){const t=Bx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gx(r,e){let t;switch(e){case Vu:t="Linear";break;case Wu:t="Reinhard";break;case ju:t="Cineon";break;case dl:t="ACESFilmic";break;case qu:t="AgX";break;case Yu:t="Neutral";break;case Xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new R;function Vx(){Ze.getLuminanceCoefficients(_a);const r=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function jx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function hr(r){return r!==""}function ou(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(r){return r.replace(qx,Kx)}const Yx=new Map;function Kx(r,e){let t=Xe[e];if(t===void 0){const n=Yx.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}const Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(r){return r.replace(Jx,Zx)}function Zx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function $x(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case As:case Es:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eb(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function tb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gu:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function nb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ib(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Qx(t),l=$x(t),h=eb(t),u=tb(t),f=nb(t),d=Wx(t),g=jx(s),x=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==yi?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Hx("linearToOutputTexel",t.outputColorSpace),Vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=ol(a),a=ou(a,t),a=cu(a,t),o=ol(o),o=ou(o,t),o=cu(o,t),a=lu(a),o=lu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=b+m+a,v=b+p+o,M=su(i,i.VERTEX_SHADER,_),S=su(i,i.FRAGMENT_SHADER,v);i.attachShader(x,M),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(L){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(M)||"",O=i.getShaderInfoLog(S)||"",z=N.trim(),G=B.trim(),q=O.trim();let I=!0,V=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,M,S);else{const X=au(i,M,"vertex"),se=au(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+X+`
`+se)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||q==="")&&(V=!1);V&&(L.diagnostics={runnable:I,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(M),i.deleteShader(S),C=new Ua(i,x),y=Xx(i,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,Ox)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}let sb=0;class rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ab(e),t.set(e,n)),n}}class ab{constructor(e){this.id=sb++,this.code=e,this.usedTimes=0}}function ob(r,e,t,n,i,s,a){const o=new hf,c=new rb,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,w,L,N,B){const O=N.fog,z=B.geometry,G=y.isMeshStandardMaterial?N.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),I=q&&q.mapping===qa?q.image.height:null,V=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const X=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=X!==void 0?X.length:0;let Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let We,Pe,Ne,K;if(V){const it=zn[V];We=it.vertexShader,Pe=it.fragmentShader}else We=y.vertexShader,Pe=y.fragmentShader,c.update(y),Ne=c.getVertexShaderID(y),K=c.getFragmentShaderID(y);const Z=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,Ge=!!y.map,Xt=!!y.matcap,D=!!q,gt=!!y.aoMap,Be=!!y.lightMap,Fe=!!y.bumpMap,xe=!!y.normalMap,vt=!!y.displacementMap,be=!!y.emissiveMap,je=!!y.metalnessMap,Ft=!!y.roughnessMap,At=y.anisotropy>0,P=y.clearcoat>0,A=y.dispersion>0,H=y.iridescence>0,J=y.sheen>0,te=y.transmission>0,Y=At&&!!y.anisotropyMap,Te=P&&!!y.clearcoatMap,oe=P&&!!y.clearcoatNormalMap,ye=P&&!!y.clearcoatRoughnessMap,Se=H&&!!y.iridescenceMap,re=H&&!!y.iridescenceThicknessMap,fe=J&&!!y.sheenColorMap,De=J&&!!y.sheenRoughnessMap,we=!!y.specularMap,he=!!y.specularColorMap,Ve=!!y.specularIntensityMap,U=te&&!!y.transmissionMap,ae=te&&!!y.thicknessMap,ce=!!y.gradientMap,me=!!y.alphaMap,ne=y.alphaTest>0,Q=!!y.alphaHash,ve=!!y.extensions;let ke=yi;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ke=r.toneMapping);const ht={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:Pe,defines:y.defines,customVertexShaderID:Ne,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:rn,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:Xt,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:I,aoMap:gt,lightMap:Be,bumpMap:Fe,normalMap:xe,displacementMap:f&&vt,emissiveMap:be,normalMapObjectSpace:xe&&y.normalMapType===Nd,normalMapTangentSpace:xe&&y.normalMapType===af,metalnessMap:je,roughnessMap:Ft,anisotropy:At,anisotropyMap:Y,clearcoat:P,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:ye,dispersion:A,iridescence:H,iridescenceMap:Se,iridescenceThicknessMap:re,sheen:J,sheenColorMap:fe,sheenRoughnessMap:De,specularMap:we,specularColorMap:he,specularIntensityMap:Ve,transmission:te,transmissionMap:U,thicknessMap:ae,gradientMap:ce,opaque:y.transparent===!1&&y.blending===_s&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:Q,combine:y.combine,mapUv:Ge&&x(y.map.channel),aoMapUv:gt&&x(y.aoMap.channel),lightMapUv:Be&&x(y.lightMap.channel),bumpMapUv:Fe&&x(y.bumpMap.channel),normalMapUv:xe&&x(y.normalMap.channel),displacementMapUv:vt&&x(y.displacementMap.channel),emissiveMapUv:be&&x(y.emissiveMap.channel),metalnessMapUv:je&&x(y.metalnessMap.channel),roughnessMapUv:Ft&&x(y.roughnessMap.channel),anisotropyMapUv:Y&&x(y.anisotropyMap.channel),clearcoatMapUv:Te&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(y.sheenRoughnessMap.channel),specularMapUv:we&&x(y.specularMap.channel),specularColorMapUv:he&&x(y.specularColorMap.channel),specularIntensityMapUv:Ve&&x(y.specularIntensityMap.channel),transmissionMapUv:U&&x(y.transmissionMap.channel),thicknessMapUv:ae&&x(y.thicknessMap.channel),alphaMapUv:me&&x(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||At),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Ge||me),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dt,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(b(w,y),_(w,y),w.push(r.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const w=g[y.type];let L;if(w){const N=zn[w];L=Hn.clone(N.uniforms)}else L=y.uniforms;return L}function M(y,w){let L;for(let N=0,B=h.length;N<B;N++){const O=h[N];if(O.cacheKey===w){L=O,++L.usedTimes;break}}return L===void 0&&(L=new ib(r,w,y,s),h.push(L)),L}function S(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function T(y){c.remove(y)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:C}}function cb(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function lb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function uu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,x,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){const p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,x,m){const p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||lb),n.length>1&&n.sort(f||uu),i.length>1&&i.sort(f||uu)}function h(){for(let u=e,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function hb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new fu,r.set(n,[a])):i>=s.length?(a=new fu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ub(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new $};break;case"SpotLight":t={position:new R,direction:new R,color:new $,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new $,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new $,groundColor:new $};break;case"RectAreaLight":t={color:new $,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function fb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let db=0;function pb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function mb(r){const e=new ub,t=fb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,s=new _e,a=new _e;function o(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,_=0,v=0,M=0,S=0,T=0;l.sort(pb);for(let y=0,w=l.length;y<w;y++){const L=l[y],N=L.color,B=L.intensity,O=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*B,u+=N.g*B,f+=N.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],B);T++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,I=t.get(L);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,n.directionalShadow[d]=I,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=G,d++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=O,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;const q=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,q.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[x]=q.matrix,L.castShadow){const I=t.get(L);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,n.spotShadow[x]=I,n.spotShadowMap[x]=z,v++}x++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const q=L.shadow,I=t.get(L);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,I.shadowCameraNear=q.camera.near,I.shadowCameraFar=q.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==M||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+M-S,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=T,n.version=db++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const _=l[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function du(r){const e=new mb(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function gb(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new du(r),e.set(i,[o])):s>=a.length?(o=new du(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`;function bb(r,e,t){let n=new Tl;const i=new ee,s=new ee,a=new tt,o=new mm({depthPacking:Id}),c=new gm,l={},h=t.maxTextureSize,u={[oi]:Zt,[Zt]:oi,[dt]:dt},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:vb,fragmentShader:xb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new nt;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ze(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let p=this.type;this.render=function(S,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const y=r.getRenderTarget(),w=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ri),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==ni&&this.type===ni,O=p===ni&&this.type!==ni;for(let z=0,G=S.length;z<G;z++){const q=S[z],I=q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const V=I.getFrameExtents();if(i.multiply(V),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,I.mapSize.y=s.y)),I.map===null||B===!0||O===!0){const se=this.type!==ni?{minFilter:Vt,magFilter:Vt}:{};I.map!==null&&I.map.dispose(),I.map=new sn(i.x,i.y,se),I.map.texture.name=q.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const X=I.getViewportCount();for(let se=0;se<X;se++){const Ae=I.getViewport(se);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),N.viewport(a),I.updateMatrices(q,se),n=I.getFrustum(),v(T,C,I.camera,q,this.type)}I.isPointLightShadow!==!0&&this.type===ni&&b(I,C),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,w,L)};function b(S,T){const C=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new sn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,C,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,C,d,x,null)}function _(S,T,C,y){let w=null;const L=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)w=L;else if(w=C.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=w.uuid,B=T.uuid;let O=l[N];O===void 0&&(O={},l[N]=O);let z=O[B];z===void 0&&(z=w.clone(),O[B]=z,T.addEventListener("dispose",M)),w=z}if(w.visible=T.visible,w.wireframe=T.wireframe,y===ni?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=r.properties.get(w);N.light=C}return w}function v(S,T,C,y,w){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===ni)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const B=e.update(S),O=S.material;if(Array.isArray(O)){const z=B.groups;for(let G=0,q=z.length;G<q;G++){const I=z[G],V=O[I.materialIndex];if(V&&V.visible){const X=_(S,V,y,w);S.onBeforeShadow(r,S,T,C,B,X,I),r.renderBufferDirect(C,null,B,X,S,I),S.onAfterShadow(r,S,T,C,B,X,I)}}}else if(O.visible){const z=_(S,O,y,w);S.onBeforeShadow(r,S,T,C,B,z,null),r.renderBufferDirect(C,null,B,z,S,null),S.onAfterShadow(r,S,T,C,B,z,null)}}const N=S.children;for(let B=0,O=N.length;B<O;B++)v(N[B],T,C,y,w)}function M(S){S.target.removeEventListener("dispose",M);for(const C in l){const y=l[C],w=S.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}const _b={[gc]:vc,[xc]:yc,[bc]:Mc,[Ts]:_c,[vc]:gc,[yc]:xc,[Mc]:bc,[_c]:Ts};function yb(r,e){function t(){let U=!1;const ae=new tt;let ce=null;const me=new tt(0,0,0,0);return{setMask:function(ne){ce!==ne&&!U&&(r.colorMask(ne,ne,ne,ne),ce=ne)},setLocked:function(ne){U=ne},setClear:function(ne,Q,ve,ke,ht){ht===!0&&(ne*=ke,Q*=ke,ve*=ke),ae.set(ne,Q,ve,ke),me.equals(ae)===!1&&(r.clearColor(ne,Q,ve,ke),me.copy(ae))},reset:function(){U=!1,ce=null,me.set(-1,0,0,0)}}}function n(){let U=!1,ae=!1,ce=null,me=null,ne=null;return{setReversed:function(Q){if(ae!==Q){const ve=e.get("EXT_clip_control");Q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ae=Q;const ke=ne;ne=null,this.setClear(ke)}},getReversed:function(){return ae},setTest:function(Q){Q?Z(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(Q){ce!==Q&&!U&&(r.depthMask(Q),ce=Q)},setFunc:function(Q){if(ae&&(Q=_b[Q]),me!==Q){switch(Q){case gc:r.depthFunc(r.NEVER);break;case vc:r.depthFunc(r.ALWAYS);break;case xc:r.depthFunc(r.LESS);break;case Ts:r.depthFunc(r.LEQUAL);break;case bc:r.depthFunc(r.EQUAL);break;case _c:r.depthFunc(r.GEQUAL);break;case yc:r.depthFunc(r.GREATER);break;case Mc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Q}},setLocked:function(Q){U=Q},setClear:function(Q){ne!==Q&&(ae&&(Q=1-Q),r.clearDepth(Q),ne=Q)},reset:function(){U=!1,ce=null,me=null,ne=null,ae=!1}}}function i(){let U=!1,ae=null,ce=null,me=null,ne=null,Q=null,ve=null,ke=null,ht=null;return{setTest:function(it){U||(it?Z(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(it){ae!==it&&!U&&(r.stencilMask(it),ae=it)},setFunc:function(it,qn,Un){(ce!==it||me!==qn||ne!==Un)&&(r.stencilFunc(it,qn,Un),ce=it,me=qn,ne=Un)},setOp:function(it,qn,Un){(Q!==it||ve!==qn||ke!==Un)&&(r.stencilOp(it,qn,Un),Q=it,ve=qn,ke=Un)},setLocked:function(it){U=it},setClear:function(it){ht!==it&&(r.clearStencil(it),ht=it)},reset:function(){U=!1,ae=null,ce=null,me=null,ne=null,Q=null,ve=null,ke=null,ht=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,_=null,v=null,M=null,S=null,T=new $(0,0,0),C=0,y=!1,w=null,L=null,N=null,B=null,O=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const I=r.getParameter(r.VERSION);I.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(I)[1]),G=q>=1):I.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),G=q>=2);let V=null,X={};const se=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),We=new tt().fromArray(se),Pe=new tt().fromArray(Ae);function Ne(U,ae,ce,me){const ne=new Uint8Array(4),Q=r.createTexture();r.bindTexture(U,Q),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ve=0;ve<ce;ve++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(ae+ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return Q}const K={};K[r.TEXTURE_2D]=Ne(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(Ts),Fe(!1),xe(Yl),Z(r.CULL_FACE),gt(ri);function Z(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function de(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ue(U,ae){return u[U]!==ae?(r.bindFramebuffer(U,ae),u[U]=ae,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Me(U,ae){let ce=d,me=!1;if(U){ce=f.get(ae),ce===void 0&&(ce=[],f.set(ae,ce));const ne=U.textures;if(ce.length!==ne.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,ve=ne.length;Q<ve;Q++)ce[Q]=r.COLOR_ATTACHMENT0+Q;ce.length=ne.length,me=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,me=!0);me&&r.drawBuffers(ce)}function Ge(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Xt={[Fi]:r.FUNC_ADD,[od]:r.FUNC_SUBTRACT,[cd]:r.FUNC_REVERSE_SUBTRACT};Xt[ld]=r.MIN,Xt[hd]=r.MAX;const D={[ud]:r.ZERO,[fd]:r.ONE,[dd]:r.SRC_COLOR,[pc]:r.SRC_ALPHA,[bd]:r.SRC_ALPHA_SATURATE,[vd]:r.DST_COLOR,[md]:r.DST_ALPHA,[pd]:r.ONE_MINUS_SRC_COLOR,[mc]:r.ONE_MINUS_SRC_ALPHA,[xd]:r.ONE_MINUS_DST_COLOR,[gd]:r.ONE_MINUS_DST_ALPHA,[_d]:r.CONSTANT_COLOR,[yd]:r.ONE_MINUS_CONSTANT_COLOR,[Md]:r.CONSTANT_ALPHA,[Sd]:r.ONE_MINUS_CONSTANT_ALPHA};function gt(U,ae,ce,me,ne,Q,ve,ke,ht,it){if(U===ri){x===!0&&(de(r.BLEND),x=!1);return}if(x===!1&&(Z(r.BLEND),x=!0),U!==ad){if(U!==m||it!==y){if((p!==Fi||v!==Fi)&&(r.blendEquation(r.FUNC_ADD),p=Fi,v=Fi),it)switch(U){case _s:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gt:r.blendFunc(r.ONE,r.ONE);break;case Kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case _s:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gt:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,_=null,M=null,S=null,T.set(0,0,0),C=0,m=U,y=it}return}ne=ne||ae,Q=Q||ce,ve=ve||me,(ae!==p||ne!==v)&&(r.blendEquationSeparate(Xt[ae],Xt[ne]),p=ae,v=ne),(ce!==b||me!==_||Q!==M||ve!==S)&&(r.blendFuncSeparate(D[ce],D[me],D[Q],D[ve]),b=ce,_=me,M=Q,S=ve),(ke.equals(T)===!1||ht!==C)&&(r.blendColor(ke.r,ke.g,ke.b,ht),T.copy(ke),C=ht),m=U,y=!1}function Be(U,ae){U.side===dt?de(r.CULL_FACE):Z(r.CULL_FACE);let ce=U.side===Zt;ae&&(ce=!ce),Fe(ce),U.blending===_s&&U.transparent===!1?gt(ri):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;o.setTest(me),me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){w!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),w=U)}function xe(U){U!==sd?(Z(r.CULL_FACE),U!==L&&(U===Yl?r.cullFace(r.BACK):U===rd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),L=U}function vt(U){U!==N&&(G&&r.lineWidth(U),N=U)}function be(U,ae,ce){U?(Z(r.POLYGON_OFFSET_FILL),(B!==ae||O!==ce)&&(r.polygonOffset(ae,ce),B=ae,O=ce)):de(r.POLYGON_OFFSET_FILL)}function je(U){U?Z(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function Ft(U){U===void 0&&(U=r.TEXTURE0+z-1),V!==U&&(r.activeTexture(U),V=U)}function At(U,ae,ce){ce===void 0&&(V===null?ce=r.TEXTURE0+z-1:ce=V);let me=X[ce];me===void 0&&(me={type:void 0,texture:void 0},X[ce]=me),(me.type!==U||me.texture!==ae)&&(V!==ce&&(r.activeTexture(ce),V=ce),r.bindTexture(U,ae||K[U]),me.type=U,me.texture=ae)}function P(){const U=X[V];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(U){We.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),We.copy(U))}function De(U){Pe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function we(U,ae){let ce=l.get(ae);ce===void 0&&(ce=new WeakMap,l.set(ae,ce));let me=ce.get(U);me===void 0&&(me=r.getUniformBlockIndex(ae,U.name),ce.set(U,me))}function he(U,ae){const me=l.get(ae).get(U);c.get(ae)!==me&&(r.uniformBlockBinding(ae,me,U.__bindingPointIndex),c.set(ae,me))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},V=null,X={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,_=null,v=null,M=null,S=null,T=new $(0,0,0),C=0,y=!1,w=null,L=null,N=null,B=null,O=null,We.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:de,bindFramebuffer:Ue,drawBuffers:Me,useProgram:Ge,setBlending:gt,setMaterial:Be,setFlipSided:Fe,setCullFace:xe,setLineWidth:vt,setPolygonOffset:be,setScissorTest:je,activeTexture:Ft,bindTexture:At,unbindTexture:P,compressedTexImage2D:A,compressedTexImage3D:H,texImage2D:Se,texImage3D:re,updateUBOMapping:we,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:ye,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:Y,compressedTexSubImage3D:Te,scissor:fe,viewport:De,reset:Ve}}function Mb(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return d?new OffscreenCanvas(P,A):Er("canvas")}function x(P,A,H){let J=1;const te=At(P);if((te.width>H||te.height>H)&&(J=H/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(J*te.width),Te=Math.floor(J*te.height);u===void 0&&(u=g(Y,Te));const oe=A?g(Y,Te):u;return oe.width=Y,oe.height=Te,oe.getContext("2d").drawImage(P,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+Te+")."),oe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(P,A,H,J,te=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=A;if(A===r.RED&&(H===r.FLOAT&&(Y=r.R32F),H===r.HALF_FLOAT&&(Y=r.R16F),H===r.UNSIGNED_BYTE&&(Y=r.R8)),A===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.R8UI),H===r.UNSIGNED_SHORT&&(Y=r.R16UI),H===r.UNSIGNED_INT&&(Y=r.R32UI),H===r.BYTE&&(Y=r.R8I),H===r.SHORT&&(Y=r.R16I),H===r.INT&&(Y=r.R32I)),A===r.RG&&(H===r.FLOAT&&(Y=r.RG32F),H===r.HALF_FLOAT&&(Y=r.RG16F),H===r.UNSIGNED_BYTE&&(Y=r.RG8)),A===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.RG8UI),H===r.UNSIGNED_SHORT&&(Y=r.RG16UI),H===r.UNSIGNED_INT&&(Y=r.RG32UI),H===r.BYTE&&(Y=r.RG8I),H===r.SHORT&&(Y=r.RG16I),H===r.INT&&(Y=r.RG32I)),A===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),H===r.UNSIGNED_INT&&(Y=r.RGB32UI),H===r.BYTE&&(Y=r.RGB8I),H===r.SHORT&&(Y=r.RGB16I),H===r.INT&&(Y=r.RGB32I)),A===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),H===r.UNSIGNED_INT&&(Y=r.RGBA32UI),H===r.BYTE&&(Y=r.RGBA8I),H===r.SHORT&&(Y=r.RGBA16I),H===r.INT&&(Y=r.RGBA32I)),A===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),A===r.RGBA){const Te=te?Ha:Ze.getTransfer(J);H===r.FLOAT&&(Y=r.RGBA32F),H===r.HALF_FLOAT&&(Y=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Y=Te===rt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(P,A){let H;return P?A===null||A===Bi||A===yr?H=r.DEPTH24_STENCIL8:A===Tn?H=r.DEPTH32F_STENCIL8:A===_r&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Bi||A===yr?H=r.DEPTH_COMPONENT24:A===Tn?H=r.DEPTH_COMPONENT32F:A===_r&&(H=r.DEPTH_COMPONENT16),H}function M(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==Ht?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function S(P){const A=P.target;A.removeEventListener("dispose",S),C(A),A.isVideoTexture&&h.delete(A)}function T(P){const A=P.target;A.removeEventListener("dispose",T),w(A)}function C(P){const A=n.get(P);if(A.__webglInit===void 0)return;const H=P.source,J=f.get(H);if(J){const te=J[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(P),Object.keys(J).length===0&&f.delete(H)}n.remove(P)}function y(P){const A=n.get(P);r.deleteTexture(A.__webglTexture);const H=P.source,J=f.get(H);delete J[A.__cacheKey],a.memory.textures--}function w(P){const A=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let te=0;te<A.__webglFramebuffer[J].length;te++)r.deleteFramebuffer(A.__webglFramebuffer[J][te]);else r.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)r.deleteFramebuffer(A.__webglFramebuffer[J]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const H=P.textures;for(let J=0,te=H.length;J<te;J++){const Y=n.get(H[J]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(P)}let L=0;function N(){L=0}function B(){const P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function O(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function z(P,A){const H=n.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,P,A);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+A)}function G(P,A){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){K(H,P,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+A)}function q(P,A){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){K(H,P,A);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+A)}function I(P,A){const H=n.get(P);if(P.version>0&&H.__version!==P.version){Z(H,P,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+A)}const V={[ki]:r.REPEAT,[bi]:r.CLAMP_TO_EDGE,[ka]:r.MIRRORED_REPEAT},X={[Vt]:r.NEAREST,[Ju]:r.NEAREST_MIPMAP_NEAREST,[cr]:r.NEAREST_MIPMAP_LINEAR,[Ht]:r.LINEAR,[Pa]:r.LINEAR_MIPMAP_NEAREST,[ii]:r.LINEAR_MIPMAP_LINEAR},se={[Ud]:r.NEVER,[Hd]:r.ALWAYS,[Fd]:r.LESS,[of]:r.LEQUAL,[Od]:r.EQUAL,[Bd]:r.GEQUAL,[zd]:r.GREATER,[kd]:r.NOTEQUAL};function Ae(P,A){if(A.type===Tn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ht||A.magFilter===Pa||A.magFilter===cr||A.magFilter===ii||A.minFilter===Ht||A.minFilter===Pa||A.minFilter===cr||A.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,V[A.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,V[A.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,V[A.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,X[A.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,X[A.minFilter]),A.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Vt||A.minFilter!==cr&&A.minFilter!==ii||A.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function We(P,A){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",S));const J=A.source;let te=f.get(J);te===void 0&&(te={},f.set(J,te));const Y=O(A);if(Y!==P.__cacheKey){te[Y]===void 0&&(te[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[Y].usedTimes++;const Te=te[P.__cacheKey];Te!==void 0&&(te[P.__cacheKey].usedTimes--,Te.usedTimes===0&&y(A)),P.__cacheKey=Y,P.__webglTexture=te[Y].texture}return H}function Pe(P,A,H){return Math.floor(Math.floor(P/H)/A)}function Ne(P,A,H,J){const Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,H,J,A.data);else{Y.sort((re,fe)=>re.start-fe.start);let Te=0;for(let re=1;re<Y.length;re++){const fe=Y[Te],De=Y[re],we=fe.start+fe.count,he=Pe(De.start,A.width,4),Ve=Pe(fe.start,A.width,4);De.start<=we+1&&he===Ve&&Pe(De.start+De.count-1,A.width,4)===he?fe.count=Math.max(fe.count,De.start+De.count-fe.start):(++Te,Y[Te]=De)}Y.length=Te+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let re=0,fe=Y.length;re<fe;re++){const De=Y[re],we=Math.floor(De.start/4),he=Math.ceil(De.count/4),Ve=we%A.width,U=Math.floor(we/A.width),ae=he,ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Ve,U,ae,ce,H,J,A.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Se)}}function K(P,A,H){let J=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=r.TEXTURE_3D);const te=We(P,A),Y=A.source;t.bindTexture(J,P.__webglTexture,r.TEXTURE0+H);const Te=n.get(Y);if(Y.version!==Te.__version||te===!0){t.activeTexture(r.TEXTURE0+H);const oe=Ze.getPrimaries(Ze.workingColorSpace),ye=A.colorSpace===xi?null:Ze.getPrimaries(A.colorSpace),Se=A.colorSpace===xi||oe===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let re=x(A.image,!1,i.maxTextureSize);re=Ft(A,re);const fe=s.convert(A.format,A.colorSpace),De=s.convert(A.type);let we=_(A.internalFormat,fe,De,A.colorSpace,A.isVideoTexture);Ae(J,A);let he;const Ve=A.mipmaps,U=A.isVideoTexture!==!0,ae=Te.__version===void 0||te===!0,ce=Y.dataReady,me=M(A,re);if(A.isDepthTexture)we=v(A.format===Sr,A.type),ae&&(U?t.texStorage2D(r.TEXTURE_2D,1,we,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,we,re.width,re.height,0,fe,De,null));else if(A.isDataTexture)if(Ve.length>0){U&&ae&&t.texStorage2D(r.TEXTURE_2D,me,we,Ve[0].width,Ve[0].height);for(let ne=0,Q=Ve.length;ne<Q;ne++)he=Ve[ne],U?ce&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,fe,De,he.data):t.texImage2D(r.TEXTURE_2D,ne,we,he.width,he.height,0,fe,De,he.data);A.generateMipmaps=!1}else U?(ae&&t.texStorage2D(r.TEXTURE_2D,me,we,re.width,re.height),ce&&Ne(A,re,fe,De)):t.texImage2D(r.TEXTURE_2D,0,we,re.width,re.height,0,fe,De,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){U&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,we,Ve[0].width,Ve[0].height,re.depth);for(let ne=0,Q=Ve.length;ne<Q;ne++)if(he=Ve[ne],A.format!==vn)if(fe!==null)if(U){if(ce)if(A.layerUpdates.size>0){const ve=Wh(he.width,he.height,A.format,A.type);for(const ke of A.layerUpdates){const ht=he.data.subarray(ke*ve/he.data.BYTES_PER_ELEMENT,(ke+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,ke,he.width,he.height,1,fe,ht)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,re.depth,fe,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,we,he.width,he.height,re.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,re.depth,fe,De,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,we,he.width,he.height,re.depth,0,fe,De,he.data)}else{U&&ae&&t.texStorage2D(r.TEXTURE_2D,me,we,Ve[0].width,Ve[0].height);for(let ne=0,Q=Ve.length;ne<Q;ne++)he=Ve[ne],A.format!==vn?fe!==null?U?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ce&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,fe,De,he.data):t.texImage2D(r.TEXTURE_2D,ne,we,he.width,he.height,0,fe,De,he.data)}else if(A.isDataArrayTexture)if(U){if(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,we,re.width,re.height,re.depth),ce)if(A.layerUpdates.size>0){const ne=Wh(re.width,re.height,A.format,A.type);for(const Q of A.layerUpdates){const ve=re.data.subarray(Q*ne/re.data.BYTES_PER_ELEMENT,(Q+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,fe,De,ve)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,De,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,re.width,re.height,re.depth,0,fe,De,re.data);else if(A.isData3DTexture)U?(ae&&t.texStorage3D(r.TEXTURE_3D,me,we,re.width,re.height,re.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,De,re.data)):t.texImage3D(r.TEXTURE_3D,0,we,re.width,re.height,re.depth,0,fe,De,re.data);else if(A.isFramebufferTexture){if(ae)if(U)t.texStorage2D(r.TEXTURE_2D,me,we,re.width,re.height);else{let ne=re.width,Q=re.height;for(let ve=0;ve<me;ve++)t.texImage2D(r.TEXTURE_2D,ve,we,ne,Q,0,fe,De,null),ne>>=1,Q>>=1}}else if(Ve.length>0){if(U&&ae){const ne=At(Ve[0]);t.texStorage2D(r.TEXTURE_2D,me,we,ne.width,ne.height)}for(let ne=0,Q=Ve.length;ne<Q;ne++)he=Ve[ne],U?ce&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,fe,De,he):t.texImage2D(r.TEXTURE_2D,ne,we,fe,De,he);A.generateMipmaps=!1}else if(U){if(ae){const ne=At(re);t.texStorage2D(r.TEXTURE_2D,me,we,ne.width,ne.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,De,re)}else t.texImage2D(r.TEXTURE_2D,0,we,fe,De,re);m(A)&&p(J),Te.__version=Y.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Z(P,A,H){if(A.image.length!==6)return;const J=We(P,A),te=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);const Y=n.get(te);if(te.version!==Y.__version||J===!0){t.activeTexture(r.TEXTURE0+H);const Te=Ze.getPrimaries(Ze.workingColorSpace),oe=A.colorSpace===xi?null:Ze.getPrimaries(A.colorSpace),ye=A.colorSpace===xi||Te===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Se=A.isCompressedTexture||A.image[0].isCompressedTexture,re=A.image[0]&&A.image[0].isDataTexture,fe=[];for(let Q=0;Q<6;Q++)!Se&&!re?fe[Q]=x(A.image[Q],!0,i.maxCubemapSize):fe[Q]=re?A.image[Q].image:A.image[Q],fe[Q]=Ft(A,fe[Q]);const De=fe[0],we=s.convert(A.format,A.colorSpace),he=s.convert(A.type),Ve=_(A.internalFormat,we,he,A.colorSpace),U=A.isVideoTexture!==!0,ae=Y.__version===void 0||J===!0,ce=te.dataReady;let me=M(A,De);Ae(r.TEXTURE_CUBE_MAP,A);let ne;if(Se){U&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ve,De.width,De.height);for(let Q=0;Q<6;Q++){ne=fe[Q].mipmaps;for(let ve=0;ve<ne.length;ve++){const ke=ne[ve];A.format!==vn?we!==null?U?ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,ke.width,ke.height,we,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ve,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,ke.width,ke.height,we,he,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ve,ke.width,ke.height,0,we,he,ke.data)}}}else{if(ne=A.mipmaps,U&&ae){ne.length>0&&me++;const Q=At(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ve,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){U?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,fe[Q].width,fe[Q].height,we,he,fe[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,fe[Q].width,fe[Q].height,0,we,he,fe[Q].data);for(let ve=0;ve<ne.length;ve++){const ht=ne[ve].image[Q].image;U?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,ht.width,ht.height,we,he,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ve,ht.width,ht.height,0,we,he,ht.data)}}else{U?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we,he,fe[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,we,he,fe[Q]);for(let ve=0;ve<ne.length;ve++){const ke=ne[ve];U?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,we,he,ke.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ve,we,he,ke.image[Q])}}}m(A)&&p(r.TEXTURE_CUBE_MAP),Y.__version=te.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function de(P,A,H,J,te,Y){const Te=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),ye=_(H.internalFormat,Te,oe,H.colorSpace),Se=n.get(A),re=n.get(H);if(re.__renderTarget=A,!Se.__hasExternalTextures){const fe=Math.max(1,A.width>>Y),De=Math.max(1,A.height>>Y);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,ye,fe,De,A.depth,0,Te,oe,null):t.texImage2D(te,Y,ye,fe,De,0,Te,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),be(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,te,re.__webglTexture,0,vt(A)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,te,re.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,A,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),A.depthBuffer){const J=A.depthTexture,te=J&&J.isDepthTexture?J.type:null,Y=v(A.stencilBuffer,te),Te=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=vt(A);be(A)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,Y,A.width,A.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,Y,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Y,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,P)}else{const J=A.textures;for(let te=0;te<J.length;te++){const Y=J[te],Te=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),ye=_(Y.internalFormat,Te,oe,Y.colorSpace),Se=vt(A);H&&be(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,ye,A.width,A.height):be(A)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,ye,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ye,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(A.depthTexture);J.__renderTarget=A,(!J.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const te=J.__webglTexture,Y=vt(A);if(A.depthTexture.format===Mr)be(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(A.depthTexture.format===Sr)be(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ge(P){const A=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){const te=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),A.__depthDisposeCallback=te}A.__boundDepthTexture=J}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const J=P.texture.mipmaps;J&&J.length>0?Me(A.__webglFramebuffer[0],P):Me(A.__webglFramebuffer,P)}else if(H){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=r.createRenderbuffer(),Ue(A.__webglDepthbuffer[J],P,!1);else{const te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=A.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Y)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Ue(A.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(P,A,H){const J=n.get(P);A!==void 0&&de(J.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Ge(P)}function D(P){const A=P.texture,H=n.get(P),J=n.get(A);P.addEventListener("dispose",T);const te=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=A.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[oe]=[];for(let ye=0;ye<A.mipmaps.length;ye++)H.__webglFramebuffer[oe][ye]=r.createFramebuffer()}else H.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let oe=0;oe<A.mipmaps.length;oe++)H.__webglFramebuffer[oe]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Te)for(let oe=0,ye=te.length;oe<ye;oe++){const Se=n.get(te[oe]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&be(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let oe=0;oe<te.length;oe++){const ye=te[oe];H.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[oe]);const Se=s.convert(ye.format,ye.colorSpace),re=s.convert(ye.type),fe=_(ye.internalFormat,Se,re,ye.colorSpace,P.isXRRenderTarget===!0),De=vt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,fe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,H.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,A);for(let oe=0;oe<6;oe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)de(H.__webglFramebuffer[oe][ye],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye);else de(H.__webglFramebuffer[oe],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(A)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,ye=te.length;oe<ye;oe++){const Se=te[oe],re=n.get(Se);let fe=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,re.__webglTexture),Ae(fe,Se),de(H.__webglFramebuffer,P,Se,r.COLOR_ATTACHMENT0+oe,fe,0),m(Se)&&p(fe)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Ae(oe,A),A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)de(H.__webglFramebuffer[ye],P,A,r.COLOR_ATTACHMENT0,oe,ye);else de(H.__webglFramebuffer,P,A,r.COLOR_ATTACHMENT0,oe,0);m(A)&&p(oe),t.unbindTexture()}P.depthBuffer&&Ge(P)}function gt(P){const A=P.textures;for(let H=0,J=A.length;H<J;H++){const te=A[H];if(m(te)){const Y=b(P),Te=n.get(te).__webglTexture;t.bindTexture(Y,Te),p(Y),t.unbindTexture()}}}const Be=[],Fe=[];function xe(P){if(P.samples>0){if(be(P)===!1){const A=P.textures,H=P.width,J=P.height;let te=r.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(P),oe=A.length>1;if(oe)for(let Se=0;Se<A.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const ye=P.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<A.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const re=n.get(A[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,H,J,0,0,H,J,te,r.NEAREST),c===!0&&(Be.length=0,Fe.length=0,Be.push(r.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Be.push(Y),Fe.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Se=0;Se<A.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const re=n.get(A[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const A=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function vt(P){return Math.min(i.maxSamples,P.samples)}function be(P){const A=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(P){const A=a.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function Ft(P,A){const H=P.colorSpace,J=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==rn&&H!==xi&&(Ze.getTransfer(H)===rt?(J!==vn||te!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}function At(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=I,this.rebindTextures=Xt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=de,this.useMultisampledRTT=be}function Sb(r,e){function t(n,i=xi){let s;const a=Ze.getTransfer(i);if(n===En)return r.UNSIGNED_BYTE;if(n===ml)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zu)return r.BYTE;if(n===Qu)return r.SHORT;if(n===_r)return r.UNSIGNED_SHORT;if(n===pl)return r.INT;if(n===Bi)return r.UNSIGNED_INT;if(n===Tn)return r.FLOAT;if(n===ln)return r.HALF_FLOAT;if(n===tf)return r.ALPHA;if(n===nf)return r.RGB;if(n===vn)return r.RGBA;if(n===Mr)return r.DEPTH_COMPONENT;if(n===Sr)return r.DEPTH_STENCIL;if(n===wr)return r.RED;if(n===vl)return r.RED_INTEGER;if(n===sf)return r.RG;if(n===xl)return r.RG_INTEGER;if(n===bl)return r.RGBA_INTEGER;if(n===La||n===Da||n===Ia||n===Na)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ac||n===Ec||n===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Pc||n===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Pc)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dc||n===Ic||n===Nc||n===Uc||n===Fc||n===Oc||n===zc||n===kc||n===Bc||n===Hc||n===Gc||n===Vc||n===Wc||n===jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===qc||n===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xc)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Jc||n===Zc||n===Qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Kc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
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

}`;class Ab{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ef(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qe({vertexShader:wb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eb extends ji{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Ab,p={},b=t.getContextAttributes();let _=null,v=null;const M=[],S=[],T=new ee;let C=null;const y=new Jt;y.viewport=new tt;const w=new Jt;w.viewport=new tt;const L=[y,w],N=new Um;let B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Z=M[K];return Z===void 0&&(Z=new Ao,M[K]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(K){let Z=M[K];return Z===void 0&&(Z=new Ao,M[K]=Z),Z.getGripSpace()},this.getHand=function(K){let Z=M[K];return Z===void 0&&(Z=new Ao,M[K]=Z),Z.getHandSpace()};function z(K){const Z=S.indexOf(K.inputSource);if(Z===-1)return;const de=M[Z];de!==void 0&&(de.update(K.inputSource,K.frame,l||a),de.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let K=0;K<M.length;K++){const Z=S[K];Z!==null&&(S[K]=null,M[K].disconnect(Z))}B=null,O=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(_),d=null,f=null,u=null,i=null,v=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ue=null,Me=null;b.depth&&(Me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Sr:Mr,Ue=b.stencil?yr:Bi);const Ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new sn(f.textureWidth,f.textureHeight,{format:vn,type:En,depthTexture:new El(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new sn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(K){for(let Z=0;Z<K.removed.length;Z++){const de=K.removed[Z],Ue=S.indexOf(de);Ue>=0&&(S[Ue]=null,M[Ue].disconnect(de))}for(let Z=0;Z<K.added.length;Z++){const de=K.added[Z];let Ue=S.indexOf(de);if(Ue===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=S.length){S.push(de),Ue=Ge;break}else if(S[Ge]===null){S[Ge]=de,Ue=Ge;break}if(Ue===-1)break}const Me=M[Ue];Me&&Me.connect(de)}}const I=new R,V=new R;function X(K,Z,de){I.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);const Ue=I.distanceTo(V),Me=Z.projectionMatrix.elements,Ge=de.projectionMatrix.elements,Xt=Me[14]/(Me[10]-1),D=Me[14]/(Me[10]+1),gt=(Me[9]+1)/Me[5],Be=(Me[9]-1)/Me[5],Fe=(Me[8]-1)/Me[0],xe=(Ge[8]+1)/Ge[0],vt=Xt*Fe,be=Xt*xe,je=Ue/(-Fe+xe),Ft=je*-Fe;if(Z.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ft),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const At=Xt+je,P=D+je,A=vt-Ft,H=be+(Ue-Ft),J=gt*D/P*At,te=Be*D/P*At;K.projectionMatrix.makePerspective(A,H,J,te,At,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,Z){Z===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Z.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Z=K.near,de=K.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(de=m.depthFar)),N.near=w.near=y.near=Z,N.far=w.far=y.far=de,(B!==N.near||O!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,O=N.far),N.layers.mask=K.layers.mask|6,y.layers.mask=N.layers.mask&3,w.layers.mask=N.layers.mask&5;const Ue=K.parent,Me=N.cameras;se(N,Ue);for(let Ge=0;Ge<Me.length;Ge++)se(Me[Ge],Ue);Me.length===2?X(N,y,w):N.projectionMatrix.copy(y.projectionMatrix),Ae(K,N,Ue)};function Ae(K,Z,de){de===null?K.matrix.copy(Z.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(Z.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return p[K]};let We=null;function Pe(K,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const de=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ue=!1;de.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let D=0;D<de.length;D++){const gt=de[D];let Be=null;if(d!==null)Be=d.getViewport(gt);else{const xe=u.getViewSubImage(f,gt);Be=xe.viewport,D===0&&(e.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(v))}let Fe=L[D];Fe===void 0&&(Fe=new Jt,Fe.layers.enable(D),Fe.viewport=new tt,L[D]=Fe),Fe.matrix.fromArray(gt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(gt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Be.x,Be.y,Be.width,Be.height),D===0&&(N.matrix.copy(Fe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(Fe)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const D=u.getDepthInformation(de[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<de.length;D++){const gt=de[D].camera;if(gt){let Be=p[gt];Be||(Be=new Ef,p[gt]=Be);const Fe=u.getCameraImage(gt);Be.sourceTexture=Fe}}}}for(let de=0;de<M.length;de++){const Ue=S[de],Me=M[de];Ue!==null&&Me!==void 0&&Me.update(Ue,Z,l||a)}We&&We(K,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ne=new Hf;Ne.setAnimationLoop(Pe),this.setAnimationLoop=function(K){We=K},this.dispose=function(){}}}const Pi=new It,Cb=new _e;function Rb(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),_=b.envMap,v=b.envMapRotation;_&&(m.envMap.value=_,Pi.copy(v),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(Pi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pb(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){const v=_.program;n.uniformBlockBinding(b,v)}function l(b,_){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));const M=_.program;n.updateUBOMapping(b,M);const S=e.render.frame;s[b.id]!==S&&(f(b),s[b.id]=S)}function h(b){const _=u();b.__bindingPointIndex=_;const v=r.createBuffer(),M=b.__size,S=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,M,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const _=i[b.id],v=b.uniforms,M=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let S=0,T=v.length;S<T;S++){const C=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,w=C.length;y<w;y++){const L=C[y];if(d(L,S,y,M)===!0){const N=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let z=0;z<B.length;z++){const G=B[z],q=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,N+O,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,O),O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(b,_,v,M){const S=b.value,T=_+"_"+v;if(M[T]===void 0)return typeof S=="number"||typeof S=="boolean"?M[T]=S:M[T]=S.clone(),!0;{const C=M[T];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return M[T]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(b){const _=b.uniforms;let v=0;const M=16;for(let T=0,C=_.length;T<C;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,L=y.length;w<L;w++){const N=y[w],B=Array.isArray(N.value)?N.value:[N.value];for(let O=0,z=B.length;O<z;O++){const G=B[O],q=x(G),I=v%M,V=I%q.boundary,X=I+V;v+=V,X!==0&&M-X<q.storage&&(v+=M-X),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=q.storage}}}const S=v%M;return S>0&&(v+=M-S),b.__size=v,b.__cache={},this}function x(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Lb{constructor(e={}){const{canvas:t=sp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const b=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=Lt;let S=0,T=0,C=null,y=-1,w=null;const L=new tt,N=new tt;let B=null;const O=new $(0);let z=0,G=t.width,q=t.height,I=1,V=null,X=null;const se=new tt(0,0,G,q),Ae=new tt(0,0,G,q);let We=!1;const Pe=new Tl;let Ne=!1,K=!1;const Z=new _e,de=new R,Ue=new tt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Xt(){return C===null?I:1}let D=n;function gt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ne,!1),D===null){const F="webgl2";if(D=gt(F,E),D===null)throw gt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Be,Fe,xe,vt,be,je,Ft,At,P,A,H,J,te,Y,Te,oe,ye,Se,re,fe,De,we,he,Ve;function U(){Be=new Hv(D),Be.init(),we=new Sb(D,Be),Fe=new Nv(D,Be,e,we),xe=new yb(D,Be),Fe.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),vt=new Wv(D),be=new cb,je=new Mb(D,Be,xe,be,Fe,we,vt),Ft=new Fv(v),At=new Bv(v),P=new Jm(D),he=new Dv(D,P),A=new Gv(D,P,vt,he),H=new Xv(D,A,P,vt),re=new jv(D,Fe,je),oe=new Uv(be),J=new ob(v,Ft,At,Be,Fe,he,oe),te=new Rb(v,be),Y=new hb,Te=new gb(Be),Se=new Lv(v,Ft,At,xe,H,d,c),ye=new bb(v,H,Fe),Ve=new Pb(D,vt,Fe,xe),fe=new Iv(D,Be,vt),De=new Vv(D,Be,vt),vt.programs=J.programs,v.capabilities=Fe,v.extensions=Be,v.properties=be,v.renderLists=Y,v.shadowMap=ye,v.state=xe,v.info=vt}U();const ae=new Eb(v,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(G,q,!1))},this.getSize=function(E){return E.set(G,q)},this.setSize=function(E,F,W=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,q=F,t.width=Math.floor(E*I),t.height=Math.floor(F*I),W===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(G*I,q*I).floor()},this.setDrawingBufferSize=function(E,F,W){G=E,q=F,I=W,t.width=Math.floor(E*W),t.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,F,W,j){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,F,W,j),xe.viewport(L.copy(se).multiplyScalar(I).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,F,W,j){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,F,W,j),xe.scissor(N.copy(Ae).multiplyScalar(I).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(E){xe.setScissorTest(We=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let j=0;if(E){let k=!1;if(C!==null){const ie=C.texture.format;k=ie===bl||ie===xl||ie===vl}if(k){const ie=C.texture.type,ue=ie===En||ie===Bi||ie===_r||ie===yr||ie===ml||ie===gl,ge=Se.getClearColor(),pe=Se.getClearAlpha(),Le=ge.r,Oe=ge.g,Ee=ge.b;ue?(g[0]=Le,g[1]=Oe,g[2]=Ee,g[3]=pe,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Le,x[1]=Oe,x[2]=Ee,x[3]=pe,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}F&&(j|=D.DEPTH_BUFFER_BIT),W&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Se.dispose(),Y.dispose(),Te.dispose(),be.dispose(),Ft.dispose(),At.dispose(),H.dispose(),he.dispose(),Ve.dispose(),J.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Un),ae.removeEventListener("sessionend",Gl),Si.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=vt.autoReset,F=ye.enabled,W=ye.autoUpdate,j=ye.needsUpdate,k=ye.type;U(),vt.autoReset=E,ye.enabled=F,ye.autoUpdate=W,ye.needsUpdate=j,ye.type=k}function ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const F=E.target;F.removeEventListener("dispose",Q),ve(F)}function ve(E){ke(E),be.remove(E)}function ke(E){const F=be.get(E).programs;F!==void 0&&(F.forEach(function(W){J.releaseProgram(W)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,j,k,ie){F===null&&(F=Me);const ue=k.isMesh&&k.matrixWorld.determinant()<0,ge=Qf(E,F,W,j,k);xe.setMaterial(j,ue);let pe=W.index,Le=1;if(j.wireframe===!0){if(pe=A.getWireframeAttribute(W),pe===void 0)return;Le=2}const Oe=W.drawRange,Ee=W.attributes.position;let Je=Oe.start*Le,ot=(Oe.start+Oe.count)*Le;ie!==null&&(Je=Math.max(Je,ie.start*Le),ot=Math.min(ot,(ie.start+ie.count)*Le)),pe!==null?(Je=Math.max(Je,0),ot=Math.min(ot,pe.count)):Ee!=null&&(Je=Math.max(Je,0),ot=Math.min(ot,Ee.count));const wt=ot-Je;if(wt<0||wt===1/0)return;he.setup(k,j,ge,W,pe);let ft,lt=fe;if(pe!==null&&(ft=P.get(pe),lt=De,lt.setIndex(ft)),k.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*Xt()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(k.isLine){let Re=j.linewidth;Re===void 0&&(Re=1),xe.setLineWidth(Re*Xt()),k.isLineSegments?lt.setMode(D.LINES):k.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else k.isPoints?lt.setMode(D.POINTS):k.isSprite&&lt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Re=k._multiDrawStarts,_t=k._multiDrawCounts,$e=k._multiDrawCount,hn=pe?P.get(pe).bytesPerElement:1,qi=be.get(j).currentProgram.getUniforms();for(let un=0;un<$e;un++)qi.setValue(D,"_gl_DrawID",un),lt.render(Re[un]/hn,_t[un])}else if(k.isInstancedMesh)lt.renderInstances(Je,wt,k.count);else if(W.isInstancedBufferGeometry){const Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_t=Math.min(W.instanceCount,Re);lt.renderInstances(Je,wt,_t)}else lt.render(Je,wt)};function ht(E,F,W){E.transparent===!0&&E.side===dt&&E.forceSinglePass===!1?(E.side=Zt,E.needsUpdate=!0,Hr(E,F,W),E.side=oi,E.needsUpdate=!0,Hr(E,F,W),E.side=dt):Hr(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),p=Te.get(W),p.init(F),_.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ie=k.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const ge=ie[ue];ht(ge,W,k),j.add(ge)}else ht(ie,W,k),j.add(ie)}),p=_.pop(),j},this.compileAsync=function(E,F,W=null){const j=this.compile(E,F,W);return new Promise(k=>{function ie(){if(j.forEach(function(ue){be.get(ue).currentProgram.isReady()&&j.delete(ue)}),j.size===0){k(E);return}setTimeout(ie,10)}Be.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let it=null;function qn(E){it&&it(E)}function Un(){Si.stop()}function Gl(){Si.start()}const Si=new Hf;Si.setAnimationLoop(qn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(E){it=E,ae.setAnimationLoop(E),E===null?Si.stop():Si.start()},ae.addEventListener("sessionstart",Un),ae.addEventListener("sessionend",Gl),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,C),p=Te.get(E,_.length),p.init(F),_.push(p),Z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Pe.setFromProjectionMatrix(Z,Bn,F.reversedDepth),K=this.localClippingEnabled,Ne=oe.init(this.clippingPlanes,K),m=Y.get(E,b.length),m.init(),b.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&no(ie,F,-1/0,v.sortObjects)}no(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(V,X),Ge=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ge&&Se.addToRenderList(m,E),this.info.render.frame++,Ne===!0&&oe.beginShadows();const W=p.state.shadowsArray;ye.render(W,E,F),Ne===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ie=F.cameras;if(k.length>0)for(let ue=0,ge=ie.length;ue<ge;ue++){const pe=ie[ue];Wl(j,k,E,pe)}Ge&&Se.render(E);for(let ue=0,ge=ie.length;ue<ge;ue++){const pe=ie[ue];Vl(m,E,pe,pe.viewport)}}else k.length>0&&Wl(j,k,E,F),Ge&&Se.render(E),Vl(m,E,F);C!==null&&T===0&&(je.updateMultisampleRenderTarget(C),je.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,F),he.resetDefaultState(),y=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],Ne===!0&&oe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function no(E,F,W,j){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){j&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const ue=H.update(E),ge=E.material;ge.visible&&m.push(E,ue,ge,W,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const ue=H.update(E),ge=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ue.copy(ue.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(ge)){const pe=ue.groups;for(let Le=0,Oe=pe.length;Le<Oe;Le++){const Ee=pe[Le],Je=ge[Ee.materialIndex];Je&&Je.visible&&m.push(E,ue,Je,W,Ue.z,Ee)}}else ge.visible&&m.push(E,ue,ge,W,Ue.z,null)}}const ie=E.children;for(let ue=0,ge=ie.length;ue<ge;ue++)no(ie[ue],F,W,j)}function Vl(E,F,W,j){const k=E.opaque,ie=E.transmissive,ue=E.transparent;p.setupLightsView(W),Ne===!0&&oe.setGlobalState(v.clippingPlanes,W),j&&xe.viewport(L.copy(j)),k.length>0&&Br(k,F,W),ie.length>0&&Br(ie,F,W),ue.length>0&&Br(ue,F,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Wl(E,F,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new sn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?ln:En,minFilter:ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ie=p.state.transmissionRenderTarget[j.id],ue=j.viewport||L;ie.setSize(ue.z*v.transmissionResolutionScale,ue.w*v.transmissionResolutionScale);const ge=v.getRenderTarget(),pe=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(O),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&Se.render(W);const Oe=v.toneMapping;v.toneMapping=yi;const Ee=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Ne===!0&&oe.setGlobalState(v.clippingPlanes,j),Br(E,W,j),je.updateMultisampleRenderTarget(ie),je.updateRenderTargetMipmap(ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ot=0,wt=F.length;ot<wt;ot++){const ft=F[ot],lt=ft.object,Re=ft.geometry,_t=ft.material,$e=ft.group;if(_t.side===dt&&lt.layers.test(j.layers)){const hn=_t.side;_t.side=Zt,_t.needsUpdate=!0,jl(lt,W,j,Re,_t,$e),_t.side=hn,_t.needsUpdate=!0,Je=!0}}Je===!0&&(je.updateMultisampleRenderTarget(ie),je.updateRenderTargetMipmap(ie))}v.setRenderTarget(ge,pe,Le),v.setClearColor(O,z),Ee!==void 0&&(j.viewport=Ee),v.toneMapping=Oe}function Br(E,F,W){const j=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ie=E.length;k<ie;k++){const ue=E[k],ge=ue.object,pe=ue.geometry,Le=ue.group;let Oe=ue.material;Oe.allowOverride===!0&&j!==null&&(Oe=j),ge.layers.test(W.layers)&&jl(ge,F,W,pe,Oe,Le)}}function jl(E,F,W,j,k,ie){E.onBeforeRender(v,F,W,j,k,ie),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,F,W,j,E,ie),k.transparent===!0&&k.side===dt&&k.forceSinglePass===!1?(k.side=Zt,k.needsUpdate=!0,v.renderBufferDirect(W,F,j,k,E,ie),k.side=oi,k.needsUpdate=!0,v.renderBufferDirect(W,F,j,k,E,ie),k.side=dt):v.renderBufferDirect(W,F,j,k,E,ie),E.onAfterRender(v,F,W,j,k,ie)}function Hr(E,F,W){F.isScene!==!0&&(F=Me);const j=be.get(E),k=p.state.lights,ie=p.state.shadowsArray,ue=k.state.version,ge=J.getParameters(E,k.state,ie,F,W),pe=J.getProgramCacheKey(ge);let Le=j.programs;j.environment=E.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(E.isMeshStandardMaterial?At:Ft).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",Q),Le=new Map,j.programs=Le);let Oe=Le.get(pe);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===ue)return ql(E,ge),Oe}else ge.uniforms=J.getUniforms(E),E.onBeforeCompile(ge,v),Oe=J.acquireProgram(ge,pe),Le.set(pe,Oe),j.uniforms=ge.uniforms;const Ee=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=oe.uniform),ql(E,ge),j.needsLights=ed(E),j.lightsStateVersion=ue,j.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.directionalShadowMap.value=k.state.directionalShadowMap,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotShadowMap.value=k.state.spotShadowMap,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMap.value=k.state.pointShadowMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Oe,j.uniformsList=null,Oe}function Xl(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ua.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function ql(E,F){const W=be.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Qf(E,F,W,j,k){F.isScene!==!0&&(F=Me),je.resetTextureUnits();const ie=F.fog,ue=j.isMeshStandardMaterial?F.environment:null,ge=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:rn,pe=(j.isMeshStandardMaterial?At:Ft).get(j.envMap||ue),Le=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ee=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,ot=!!W.morphAttributes.color;let wt=yi;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(wt=v.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=ft!==void 0?ft.length:0,Re=be.get(j),_t=p.state.lights;if(Ne===!0&&(K===!0||E!==w)){const Qt=E===w&&j.id===y;oe.setState(j,E,Qt)}let $e=!1;j.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==_t.state.version||Re.outputColorSpace!==ge||k.isBatchedMesh&&Re.batching===!1||!k.isBatchedMesh&&Re.batching===!0||k.isBatchedMesh&&Re.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Re.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Re.instancing===!1||!k.isInstancedMesh&&Re.instancing===!0||k.isSkinnedMesh&&Re.skinning===!1||!k.isSkinnedMesh&&Re.skinning===!0||k.isInstancedMesh&&Re.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Re.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Re.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Re.instancingMorph===!1&&k.morphTexture!==null||Re.envMap!==pe||j.fog===!0&&Re.fog!==ie||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==oe.numPlanes||Re.numIntersection!==oe.numIntersection)||Re.vertexAlphas!==Le||Re.vertexTangents!==Oe||Re.morphTargets!==Ee||Re.morphNormals!==Je||Re.morphColors!==ot||Re.toneMapping!==wt||Re.morphTargetsCount!==lt)&&($e=!0):($e=!0,Re.__version=j.version);let hn=Re.currentProgram;$e===!0&&(hn=Hr(j,F,k));let qi=!1,un=!1,Bs=!1;const yt=hn.getUniforms(),bn=Re.uniforms;if(xe.useProgram(hn.program)&&(qi=!0,un=!0,Bs=!0),j.id!==y&&(y=j.id,un=!0),qi||w!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(D,"projectionMatrix",E.projectionMatrix),yt.setValue(D,"viewMatrix",E.matrixWorldInverse);const an=yt.map.cameraPosition;an!==void 0&&an.setValue(D,de.setFromMatrixPosition(E.matrixWorld)),Fe.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&yt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,un=!0,Bs=!0)}if(k.isSkinnedMesh){yt.setOptional(D,k,"bindMatrix"),yt.setOptional(D,k,"bindMatrixInverse");const Qt=k.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),yt.setValue(D,"boneTexture",Qt.boneTexture,je))}k.isBatchedMesh&&(yt.setOptional(D,k,"batchingTexture"),yt.setValue(D,"batchingTexture",k._matricesTexture,je),yt.setOptional(D,k,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",k._indirectTexture,je),yt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",k._colorsTexture,je));const _n=W.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&re.update(k,W,hn),(un||Re.receiveShadow!==k.receiveShadow)&&(Re.receiveShadow=k.receiveShadow,yt.setValue(D,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(bn.envMap.value=pe,bn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(bn.envMapIntensity.value=F.environmentIntensity),un&&(yt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&$f(bn,Bs),ie&&j.fog===!0&&te.refreshFogUniforms(bn,ie),te.refreshMaterialUniforms(bn,j,I,q,p.state.transmissionRenderTarget[E.id]),Ua.upload(D,Xl(Re),bn,je)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ua.upload(D,Xl(Re),bn,je),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&yt.setValue(D,"center",k.center),yt.setValue(D,"modelViewMatrix",k.modelViewMatrix),yt.setValue(D,"normalMatrix",k.normalMatrix),yt.setValue(D,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Qt=j.uniformsGroups;for(let an=0,io=Qt.length;an<io;an++){const wi=Qt[an];Ve.update(wi,hn),Ve.bind(wi,hn)}}return hn}function $f(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function ed(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,F,W){const j=be.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),be.get(E.texture).__webglTexture=F,be.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:W,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const W=be.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const td=D.createFramebuffer();this.setRenderTarget=function(E,F=0,W=0){C=E,S=F,T=W;let j=!0,k=null,ie=!1,ue=!1;if(E){const pe=be.get(E);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(pe.__webglFramebuffer===void 0)je.setupRenderTarget(E);else if(pe.__hasExternalTextures)je.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ee=E.depthTexture;if(pe.__boundDepthTexture!==Ee){if(Ee!==null&&be.has(Ee)&&(E.width!==Ee.image.width||E.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);const Oe=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?k=Oe[F][W]:k=Oe[F],ie=!0):E.samples>0&&je.useMultisampledRTT(E)===!1?k=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?k=Oe[W]:k=Oe,L.copy(E.viewport),N.copy(E.scissor),B=E.scissorTest}else L.copy(se).multiplyScalar(I).floor(),N.copy(Ae).multiplyScalar(I).floor(),B=We;if(W!==0&&(k=td),xe.bindFramebuffer(D.FRAMEBUFFER,k)&&j&&xe.drawBuffers(E,k),xe.viewport(L),xe.scissor(N),xe.setScissorTest(B),ie){const pe=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,W)}else if(ue){const pe=F;for(let Le=0;Le<E.textures.length;Le++){const Oe=be.get(E.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,W,pe)}}else if(E!==null&&W!==0){const pe=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(E,F,W,j,k,ie,ue,ge=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){xe.bindFramebuffer(D.FRAMEBUFFER,pe);try{const Le=E.textures[ge],Oe=Le.format,Ee=Le.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-j&&W>=0&&W<=E.height-k&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),D.readPixels(F,W,j,k,we.convert(Oe),we.convert(Ee),ie))}finally{const Le=C!==null?be.get(C).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,j,k,ie,ue,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(F>=0&&F<=E.width-j&&W>=0&&W<=E.height-k){xe.bindFramebuffer(D.FRAMEBUFFER,pe);const Le=E.textures[ge],Oe=Le.format,Ee=Le.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),D.readPixels(F,W,j,k,we.convert(Oe),we.convert(Ee),0);const ot=C!==null?be.get(C).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,ot);const wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await rp(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Je),D.deleteSync(wt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){const j=Math.pow(2,-W),k=Math.floor(E.image.width*j),ie=Math.floor(E.image.height*j),ue=F!==null?F.x:0,ge=F!==null?F.y:0;je.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ue,ge,k,ie),xe.unbindTexture()};const nd=D.createFramebuffer(),id=D.createFramebuffer();this.copyTextureToTexture=function(E,F,W=null,j=null,k=0,ie=null){ie===null&&(k!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=k,k=0):ie=0);let ue,ge,pe,Le,Oe,Ee,Je,ot,wt;const ft=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(W!==null)ue=W.max.x-W.min.x,ge=W.max.y-W.min.y,pe=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Oe=W.min.y,Ee=W.isBox3?W.min.z:0;else{const _n=Math.pow(2,-k);ue=Math.floor(ft.width*_n),ge=Math.floor(ft.height*_n),E.isDataArrayTexture?pe=ft.depth:E.isData3DTexture?pe=Math.floor(ft.depth*_n):pe=1,Le=0,Oe=0,Ee=0}j!==null?(Je=j.x,ot=j.y,wt=j.z):(Je=0,ot=0,wt=0);const lt=we.convert(F.format),Re=we.convert(F.type);let _t;F.isData3DTexture?(je.setTexture3D(F,0),_t=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(je.setTexture2DArray(F,0),_t=D.TEXTURE_2D_ARRAY):(je.setTexture2D(F,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const $e=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qi=D.getParameter(D.UNPACK_SKIP_PIXELS),un=D.getParameter(D.UNPACK_SKIP_ROWS),Bs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee);const yt=E.isDataArrayTexture||E.isData3DTexture,bn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const _n=be.get(E),Qt=be.get(F),an=be.get(_n.__renderTarget),io=be.get(Qt.__renderTarget);xe.bindFramebuffer(D.READ_FRAMEBUFFER,an.__webglFramebuffer),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let wi=0;wi<pe;wi++)yt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(E).__webglTexture,k,Ee+wi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(F).__webglTexture,ie,wt+wi)),D.blitFramebuffer(Le,Oe,ue,ge,Je,ot,ue,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||be.has(E)){const _n=be.get(E),Qt=be.get(F);xe.bindFramebuffer(D.READ_FRAMEBUFFER,nd),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,id);for(let an=0;an<pe;an++)yt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,k,Ee+an):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,k),bn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qt.__webglTexture,ie,wt+an):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qt.__webglTexture,ie),k!==0?D.blitFramebuffer(Le,Oe,ue,ge,Je,ot,ue,ge,D.COLOR_BUFFER_BIT,D.NEAREST):bn?D.copyTexSubImage3D(_t,ie,Je,ot,wt+an,Le,Oe,ue,ge):D.copyTexSubImage2D(_t,ie,Je,ot,Le,Oe,ue,ge);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else bn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(_t,ie,Je,ot,wt,ue,ge,pe,lt,Re,ft.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,ie,Je,ot,wt,ue,ge,pe,lt,ft.data):D.texSubImage3D(_t,ie,Je,ot,wt,ue,ge,pe,lt,Re,ft):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,Je,ot,ue,ge,lt,Re,ft.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,Je,ot,ft.width,ft.height,lt,ft.data):D.texSubImage2D(D.TEXTURE_2D,ie,Je,ot,ue,ge,lt,Re,ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,$e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qi),D.pixelStorei(D.UNPACK_SKIP_ROWS,un),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bs),ie===0&&F.generateMipmaps&&D.generateMipmap(_t),xe.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&je.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?je.setTextureCube(E,0):E.isData3DTexture?je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?je.setTexture2DArray(E,0):je.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){S=0,T=0,C=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function Xi(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Wo=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Db=.5*(Math.sqrt(3)-1),Qs=(3-Math.sqrt(3))/6;class pu{constructor(e=0){const t=Xi(e),n=new Uint8Array(256);for(let i=0;i<256;i++)n[i]=i;for(let i=255;i>0;i--){const s=Math.floor(t()*(i+1)),a=n[i];n[i]=n[s],n[s]=a}this.perm=new Uint8Array(512),this.permMod8=new Uint8Array(512);for(let i=0;i<512;i++)this.perm[i]=n[i&255],this.permMod8[i]=this.perm[i]%8}noise2D(e,t){const n=this.perm,i=this.permMod8;let s=0,a=0,o=0;const c=(e+t)*Db,l=Math.floor(e+c),h=Math.floor(t+c),u=(l+h)*Qs,f=e-(l-u),d=t-(h-u),g=f>d?1:0,x=f>d?0:1,m=f-g+Qs,p=d-x+Qs,b=f-1+2*Qs,_=d-1+2*Qs,v=l&255,M=h&255;let S=.5-f*f-d*d;if(S>=0){const y=Wo[i[v+n[M]]];S*=S,s=S*S*(y[0]*f+y[1]*d)}let T=.5-m*m-p*p;if(T>=0){const y=Wo[i[v+g+n[M+x]]];T*=T,a=T*T*(y[0]*m+y[1]*p)}let C=.5-b*b-_*_;if(C>=0){const y=Wo[i[v+1+n[M+1]]];C*=C,o=C*C*(y[0]*b+y[1]*_)}return 70*(s+a+o)}fbm(e,t,n=4,i=2,s=.5){let a=1,o=1,c=0,l=0;for(let h=0;h<n;h++)c+=a*this.noise2D(e*o,t*o),l+=a,a*=s,o*=i;return c/l}ridged(e,t,n=4,i=2,s=.5){let a=1,o=1,c=0,l=0;for(let h=0;h<n;h++)c+=a*(1-Math.abs(this.noise2D(e*o,t*o))),l+=a,a*=s,o*=i;return c/l}}const Vi=4e3,et=Vi/2,Ib=384,pt=0,Bt={x:0,z:-et*.9};function on(r,e,t){const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)}const mi={deepSand:9404246,sand:14206089,grassA:6262852,grassB:8038485,forest:4812847,rock:9143160,rockDark:7235420,snow:15593972};class Nb{constructor(e){this.seed=e,this.noise=new pu(e),this.noiseB=new pu(e+101^1597463007),this.N=Ib,this.gridN=this.N+1,this.cell=Vi/this.N,this.grid=new Float32Array(this.gridN*this.gridN),this._buildGrid(),this.mesh=this._buildMesh()}baseHeight(e,t){const n=this.noise,i=n.fbm(e*42e-5,t*42e-5,4),s=n.fbm(e*.0038+91.7,t*.0038-40.2,4),a=on(.08,.55,this.noiseB.fbm(e*9e-4+300,t*9e-4-210,3)),o=n.ridged(e*.0016-50.3,t*.0016+80.7,4),c=n.fbm(e*.02,t*.02,2);let l=7+i*30;l+=s*11*(.35+.65*on(-.35,.4,i)),l+=a*o*o*160,l+=c*2.2;const h=Math.max(Math.abs(e),Math.abs(t))/et;l+=Math.pow(on(.86,1.01,h),1.3)*420;const u=Math.hypot(e-Bt.x,t-Bt.z),f=1-on(38,78,u);return f>0&&(l=l*(1-f)+98*f),l}forestMask(e,t){return this.noiseB.fbm(e*.0026+777,t*.0026-333,3)}_buildGrid(){for(let e=0;e<this.gridN;e++)for(let t=0;t<this.gridN;t++){const n=-et+t*this.cell,i=-et+e*this.cell;this.grid[e*this.gridN+t]=this.baseHeight(n,i)}}heightAt(e,t){const n=this.grid,i=this.gridN,s=Math.min(Math.max((e+et)/this.cell,0),this.N-1e-4),a=Math.min(Math.max((t+et)/this.cell,0),this.N-1e-4),o=Math.floor(s),c=Math.floor(a),l=s-o,h=a-c,u=n[c*i+o],f=n[(c+1)*i+o],d=n[(c+1)*i+o+1],g=n[c*i+o+1];return l+h<=1?u+(g-u)*l+(f-u)*h:d+(f-d)*(1-l)+(g-d)*(1-h)}slopeAt(e,t,n=3){const i=this.heightAt(e+n,t)-this.heightAt(e-n,t),s=this.heightAt(e,t+n)-this.heightAt(e,t-n);return Math.hypot(i,s)/(2*n)}findSpawn(){for(let e=0;e<=et*.8;e+=60){const t=Math.max(1,Math.floor(2*Math.PI*e/60));for(let n=0;n<t;n++){const i=n/t*Math.PI*2,s=Math.cos(i)*e,a=Math.sin(i)*e,o=this.heightAt(s,a);if(o>4&&o<26&&this.slopeAt(s,a)<.25)return{x:s,z:a}}}return{x:0,z:0}}_bakeTextures(e,t){const n=this.gridN,i=new Float32Array(n*n),s=new Uint8Array(n*n*4),a=new Uint8Array(n*n),o=new $;for(let c=0;c<n*n;c++){const l=this.grid[c];i[c]=l,o.setRGB(e[c*3],e[c*3+1],e[c*3+2]),o.convertLinearToSRGB(),s[c*4]=Math.round(o.r*255),s[c*4+1]=Math.round(o.g*255),s[c*4+2]=Math.round(o.b*255);const h=c%n,u=c/n|0,f=-et+h*this.cell,d=-et+u*this.cell,g=this.slopeAt(f,d,this.cell),x=t[c*4]*on(.9,1.9,l)*(1-on(.5,.8,g))*(1-on(50,66,l));s[c*4+3]=Math.round(Math.min(1,x)*255),a[c]=Math.round(Math.min(1,Math.max(0,(this.forestMask(f,d)-.04)*2.2))*255)}this.forestTex=new pr(a,n,n,wr,En),this.forestTex.minFilter=this.forestTex.magFilter=Ht,this.forestTex.needsUpdate=!0,this.heightTex=new pr(i,n,n,wr,Tn),this.heightTex.minFilter=this.heightTex.magFilter=Vt,this.heightTex.needsUpdate=!0,this.colorTex=new pr(s,n,n,vn,En),this.colorTex.colorSpace=Lt,this.colorTex.minFilter=this.colorTex.magFilter=Ht,this.colorTex.needsUpdate=!0}_buildMesh(){const e=this.N,t=this.gridN,n=t*t,i=new Float32Array(n*3);for(let m=0;m<t;m++)for(let p=0;p<t;p++){const b=(m*t+p)*3;i[b]=-et+p*this.cell,i[b+1]=this.grid[m*t+p],i[b+2]=-et+m*this.cell}const s=new Uint32Array(e*e*6);let a=0;for(let m=0;m<e;m++)for(let p=0;p<e;p++){const b=m*t+p,_=(m+1)*t+p,v=(m+1)*t+p+1,M=m*t+p+1;s[a++]=b,s[a++]=_,s[a++]=M,s[a++]=_,s[a++]=v,s[a++]=M}const o=new nt;o.setAttribute("position",new Ye(i,3)),o.setIndex(new Ye(s,1)),o.computeVertexNormals();const c=new Float32Array(n*3),l=new Float32Array(n*4),h=o.attributes.position,u=o.attributes.normal,f=new $,d=new $;for(let m=0;m<n;m++){const p=h.getY(m),b=u.getY(m),_=h.getX(m),v=h.getZ(m),M=this.noiseB.fbm(_*.016+5.2,v*.016-9.7,2);if(p<pt-6)f.setHex(mi.deepSand);else{f.setHex(mi.grassA).lerp(d.setHex(mi.grassB),(M+1)*.4);const G=this.forestMask(_,v);G>.08&&f.lerp(d.setHex(mi.forest),Math.min(.55,(G-.08)*1.1)),f.lerp(d.setHex(mi.sand),1-on(1.2,3.4,p+M*1.4))}const S=1-on(.6,.82,b);p>pt-3&&f.lerp(d.setHex(mi.rockDark),S*.85),f.lerp(d.setHex(mi.rock),on(52,78,p)*.9);const T=92+M*10,C=on(T,T+16,p)*on(.5,.72,b);f.lerp(d.setHex(mi.snow),C);const y=p<pt-6?1:1-on(1.2,3.4,p+M*1.4),w=Math.max(p>pt-3?S*.85:0,on(52,78,p)*.9),L=y*(1-w),N=C,B=w*(1-N),O=Math.max(0,1-L-B-N);l[m*4]=O,l[m*4+1]=L,l[m*4+2]=B,l[m*4+3]=N;const z=this.noise.fbm(_*.09+3.1,v*.09-7.7,2);f.offsetHSL(z*.012,z*.03,z*.05),c[m*3]=f.r,c[m*3+1]=f.g,c[m*3+2]=f.b}o.setAttribute("color",new Ye(c,3)),o.setAttribute("aMat",new Ye(l,4)),this._bakeTextures(c,l);const g=new xt({vertexColors:!0,roughness:1,metalness:0});Ub(g,this);const x=new ze(o,g);return x.receiveShadow=!0,x.castShadow=!1,x}}function Ub(r,e){r.onBeforeCompile=t=>{t.uniforms.uTimeT={value:0},e.detailUniforms=t.uniforms,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aMat;
        varying vec4 vMat;
        varying vec3 vWPos;
        varying vec3 vWNor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vMat = aMat;
        vWPos = position;
        vWNor = normal;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        varying vec4 vMat;
        varying vec3 vWPos;
        varying vec3 vWNor;
        uniform float uTimeT;
        float th(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }
        float tn(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y);
        }
        float tf(vec2 p) {
          float a = 0.5, s = 0.0;
          for (int i = 0; i < 3; i++) { s += a * tn(p); p = p * 2.03 + 5.1; a *= 0.5; }
          return s;
        }
        // small height field used for the bump (grass tufts, dune ripples, rock grain)
        float detailH(vec2 p, vec4 m) {
          float g = tn(p * 3.1) * 0.6 + tn(p * 9.0) * 0.4;
          float s = sin(p.x * 5.0 + tn(p * 0.7) * 6.0) * 0.5 + 0.5;
          float r = tn(p * 2.3) * 0.7 + tn(p * 7.0) * 0.3;
          return g * m.x + s * 0.7 * m.y + r * m.z + tn(p * 5.0) * 0.4 * m.w;
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        float dView = length(vViewPosition);
        float dNear = 1.0 - smoothstep(70.0, 300.0, dView);
        vec2 wp = vWPos.xz;
        vec3 base = diffuseColor.rgb;
        vec4 M = vMat;

        // grass: big sun-bleached/lush patches, mid clumps, fine blade specks
        float gp = tf(wp * 0.045 + 3.7);
        float gc = tn(wp * 0.55);
        float gs = tn(wp * 4.2);
        vec3 lush = base * vec3(0.78, 0.95, 0.72);
        vec3 dry = base * vec3(1.22, 1.08, 0.72);
        vec3 grassC = mix(lush, dry, smoothstep(0.35, 0.75, gp));
        grassC *= 0.82 + 0.34 * gc;
        grassC *= 1.0 + (gs - 0.5) * 0.28 * dNear;
        // a few brighter flecks (sunlit tips)
        grassC += vec3(0.05, 0.07, 0.01) * step(0.93, tn(wp * 7.3)) * dNear;

        // sand: soft dune ripples and grain
        float rip = sin((wp.x * 0.9 + wp.y * 0.55) * 1.6 + tf(wp * 0.12) * 7.0) * 0.5 + 0.5;
        vec3 sandC = base * (0.9 + 0.18 * rip) * (0.95 + 0.1 * tn(wp * 11.0));

        // rock: strata by height + cracks
        float strata = sin(vWPos.y * 0.8 + tf(wp * 0.05) * 5.0) * 0.5 + 0.5;
        float crack = smoothstep(0.46, 0.5, abs(tf(wp * 0.35) - 0.5));
        vec3 rockC = base * (0.88 + 0.16 * strata) * (0.78 + 0.22 * crack);
        rockC = mix(rockC, rockC * vec3(0.82, 0.86, 1.0), 0.35);

        // snow: cool shadows in hollows + sparkle
        float glint = step(0.985, th(floor(wp * 9.0))) * dNear;
        vec3 snowC = base * (0.92 + 0.1 * tn(wp * 0.8)) + vec3(1.0, 1.0, 1.1) * glint * 1.6;

        float wsum = max(M.x + M.y + M.z + M.w, 1e-3);
        vec3 detail = (grassC * M.x + sandC * M.y + rockC * M.z + snowC * M.w) / wsum;
        diffuseColor.rgb = mix(base, detail, dNear);
        `).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          // bump from the detail field (finite differences in world space)
          float e = 0.12;
          float h0 = detailH(wp, vMat);
          float hx = detailH(wp + vec2(e, 0.0), vMat);
          float hz = detailH(wp + vec2(0.0, e), vMat);
          vec3 g = vec3((hx - h0) / e, 0.0, (hz - h0) / e);
          float amt = 0.16 * (1.0 - smoothstep(40.0, 180.0, length(vViewPosition)));
          vec3 gv = (viewMatrix * vec4(g, 0.0)).xyz;
          normal = normalize(normal - gv * amt);
        }`)}}const ur={low:{name:"low",pixelRatio:1,msaa:0,smaa:!0,bloom:!0,bloomScale:.5,shafts:!1,mist:!1,envEvery:6,envSize:64,clouds:"simple",grass:.3,trees:.5,reflect:0},medium:{name:"medium",pixelRatio:1.5,msaa:4,smaa:!1,bloom:!0,bloomScale:.5,shafts:!0,mist:!0,envEvery:3,envSize:128,clouds:"full",grass:.6,trees:.8,reflect:.35},high:{name:"high",pixelRatio:2,msaa:4,smaa:!1,bloom:!0,bloomScale:1,shafts:!0,mist:!0,envEvery:1.5,envSize:256,clouds:"full",grass:1,trees:1,reflect:.5}},mu="wander:quality";function Fb(){const r=new URLSearchParams(location.search).get("q");if(r&&ur[r]){try{localStorage.setItem(mu,r)}catch{}return ur[r]}let e=null;try{e=localStorage.getItem(mu)}catch{}return ur[e]||ur.medium}const Ob=300;function cl(r,e,t){const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)}const ut=r=>new $(r),ya=[{sy:-.36,zen:ut("#050a22"),mid:ut("#0f1a44"),hor:ut("#1c2f66")},{sy:-.14,zen:ut("#0b1342"),mid:ut("#2c2b78"),hor:ut("#5a448e")},{sy:-.03,zen:ut("#1c2a72"),mid:ut("#76519f"),hor:ut("#ff7d5e")},{sy:.07,zen:ut("#3668c8"),mid:ut("#93a9d9"),hor:ut("#ffbc90")},{sy:.25,zen:ut("#3d89e3"),mid:ut("#82b9ef"),hor:ut("#d0e8f8")},{sy:.62,zen:ut("#2a79de"),mid:ut("#71b4f1"),hor:ut("#c5e5fa")}],ps={night:[ut("#46557f"),ut("#0a1028")],dusk:[ut("#ffa070"),ut("#5a4372")],day:[ut("#ffffff"),ut("#7d93bd")]},gu={day:ut("#fff1dc"),dusk:ut("#ff9a55")},$s=new $;function zb(r,e){let t=0;for(;t<ya.length-2&&r>ya[t+1].sy;)t++;const n=ya[t],i=ya[t+1],s=cl(n.sy,i.sy,r);e.zen.copy(n.zen).lerp(i.zen,s),e.mid.copy(n.mid).lerp(i.mid,s),e.hor.copy(n.hor).lerp(i.hor,s)}const vu=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,xu=`
  #ifndef CLOUD_OCT
  #define CLOUD_OCT 5
  #endif
  varying vec3 vDir;
  uniform float uTime, uDay, uNight, uDusk, uAurora, uCloudCover, uEnv, uCityGlow;
  uniform vec3 uZenith, uMid, uHorizon;
  uniform vec3 uSunDir, uMoonDir, uSunColor, uGlowColor;
  uniform vec3 uCloudLit, uCloudShade;

  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float hash13(vec3 p3) {
    p3 = fract(p3 * 0.1031);
    p3 += dot(p3, p3.zyx + 31.32);
    return fract((p3.x + p3.y) * p3.z);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x),
               mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y);
  }
  float vnoise3(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x),
          mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x),
          mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  float fbm2(vec2 p) {
    float a = 0.5, s = 0.0;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < CLOUD_OCT; i++) { s += a * vnoise(p); p = m * p; a *= 0.5; }
    return s;
  }
  float fbm3(vec3 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 4; i++) { s += a * vnoise3(p); p = p * 2.03 + 11.7; a *= 0.5; }
    return s;
  }

  // 0..1 cloud alpha plus a "lit" factor for shading
  vec2 cloudField(vec3 d) {
    float h = d.y;
    vec2 uv = d.xz / (h * 0.6 + 0.18);
    uv = uv * 0.85 + vec2(uTime * 0.008, uTime * 0.0033);
    float n = fbm2(uv);
    float dens = smoothstep(0.52 - uCloudCover * 0.18, 0.66, n);
    vec2 toSun = normalize(uSunDir.xz + vec2(1e-4)) * 0.07;
    float n2 = fbm2(uv + toSun);
    float lit = clamp(0.6 - (n2 - n) * 9.0, 0.0, 1.0);
    return vec2(dens * smoothstep(0.0, 0.16, h), lit);
  }

  vec3 moonDisc(vec3 d, float rad, out float mask) {
    vec3 m = uMoonDir;
    float cd = dot(d, m);
    mask = 0.0;
    if (cd < 0.9) return vec3(0.0);
    vec3 up = abs(m.y) > 0.95 ? vec3(1, 0, 0) : vec3(0, 1, 0);
    vec3 t = normalize(cross(up, m));
    vec3 b = cross(m, t);
    vec3 q = d - m * cd;
    vec2 p = vec2(dot(q, t), dot(q, b)) / rad;
    float r = length(p);
    mask = 1.0 - smoothstep(0.94, 1.0, r);
    if (mask <= 0.0) return vec3(0.0);
    vec3 n = vec3(p, sqrt(max(1.0 - r * r, 0.0)));
    vec3 L = normalize(vec3(-0.45, 0.3, 0.85));
    float diff = clamp(dot(n, L) * 0.85 + 0.35, 0.0, 1.0);
    float maria = fbm3(vec3(p * 1.7, 4.0));
    float cr = vnoise(p * 7.0) * 0.5 + vnoise(p * 15.0) * 0.5;
    float alb = 0.78 + 0.22 * smoothstep(0.4, 0.62, maria) - 0.1 * smoothstep(0.55, 0.9, cr) * 0.6;
    vec3 base = vec3(1.0, 0.96, 0.86) * alb;
    return base * diff * 3.2;
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = max(d.y, 0.0);
    float sd = dot(d, uSunDir);

    // ---- vertical gradient ----
    vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.34, h));
    col = mix(col, uZenith, smoothstep(0.22, 0.95, h));

    // warm glow around the sun, and the lavender "belt of Venus" opposite it
    float low = pow(max(1.0 - h, 0.0), 3.0);
    col += uGlowColor * pow(max(sd, 0.0), 2.6) * low * uDusk * 0.85;
    vec3 away = normalize(vec3(-uSunDir.x, 0.0, -uSunDir.z) + vec3(1e-4));
    float ad = max(dot(normalize(vec3(d.x, 0.0, d.z) + vec3(1e-4)), away), 0.0);
    col = mix(col, vec3(0.62, 0.45, 0.78) * 0.85, pow(ad, 3.0) * low * uDusk * 0.32);

    // the city's light pollution: a warm-violet glow hugging the horizon
    float cg = uCityGlow * uNight * pow(max(1.0 - h, 0.0), 3.2);
    vec3 gcol = mix(vec3(1.0, 0.42, 0.18), vec3(0.72, 0.22, 0.95), 0.5 + 0.5 * sin(atan(d.z, d.x) * 2.0 + 0.9));
    col += gcol * cg * 0.6;

    // ---- night sky: Milky Way ----
    float starVis = uNight * smoothstep(0.0, 0.18, d.y) * (1.0 - uEnv);
    if (starVis > 0.001) {
      vec3 gn = normalize(vec3(0.35, 0.78, 0.52));
      float band = dot(d, gn);
      float mw = exp(-band * band * 16.0);
      float n1 = fbm3(d * 5.0 + 3.0);
      float n2 = fbm3(d * 13.0 - 7.0);
      mw *= (0.35 + 1.1 * n1) * smoothstep(0.25, 0.7, n2 + 0.2);
      vec3 mwc = mix(vec3(0.20, 0.30, 0.62), vec3(0.68, 0.36, 0.56), n1);
      col += mwc * mw * 0.55 * starVis;
    }

    // ---- aurora (the Meadow's north) ----
    if (uAurora > 0.01 && d.y > 0.015 && uEnv < 0.5) {
      vec2 p = d.xz / (d.y + 0.22);
      vec3 ac = vec3(0.0);
      for (int i = 0; i < 3; i++) {
        float fi = float(i);
        float wob = vnoise(vec2(p.x * 0.28 + uTime * 0.018 + fi * 7.3, uTime * 0.04 + fi * 2.0));
        float centre = 1.25 + fi * 0.62 + wob * 1.7;
        float rb = (-p.y - centre) * 1.5;
        float ribbon = exp(-rb * rb);
        float rays = 0.45 + 0.55 * vnoise(vec2(p.x * 4.2 + fi * 3.0, uTime * 0.35 + fi));
        float fold = 0.6 + 0.4 * sin(p.x * 1.3 + uTime * 0.12 + fi * 1.9);
        vec3 c = mix(vec3(0.12, 1.0, 0.55), vec3(0.20, 0.75, 1.0), smoothstep(0.1, 0.5, d.y));
        c = mix(c, vec3(0.72, 0.35, 1.0), smoothstep(0.35, 0.75, d.y + fi * 0.04));
        ac += c * ribbon * rays * fold;
      }
      float fade = smoothstep(0.015, 0.2, d.y) * (1.0 - smoothstep(0.7, 1.0, d.y));
      col += ac * uAurora * fade * 0.85 * (1.0 - uDay);
    }

    // ---- clouds ----
    float cloudA = 0.0;
    if (d.y > 0.0) {
      vec2 cf = cloudField(d);
      cloudA = cf.x * 0.94;
      vec3 cc = mix(uCloudShade, uCloudLit, cf.y);
      float edge = smoothstep(0.0, 0.5, cf.x) * (1.0 - smoothstep(0.5, 1.0, cf.x));
      cc += uSunColor * edge * pow(max(sd, 0.0), 4.0) * 0.5 * uDay;
      // clouds melt into the horizon haze
      cc = mix(cc, uHorizon, (1.0 - smoothstep(0.0, 0.3, d.y)) * 0.55);
      col = mix(col, cc, cloudA);
    }

    // ---- sun ----
    float sunUp = smoothstep(-0.14, 0.02, uSunDir.y);
    if (uEnv < 0.5) {
      float disc = smoothstep(cos(0.027), cos(0.0225), sd);
      float halo = pow(max(sd, 0.0), 420.0) * 2.2 + pow(max(sd, 0.0), 48.0) * 0.32;
      col += uSunColor * (disc * 20.0 * (1.0 - cloudA * 0.92) + halo * (1.0 - cloudA * 0.5)) * sunUp;
    } else {
      col += uSunColor * pow(max(sd, 0.0), 6.0) * 0.5 * sunUp;
    }

    // ---- moon ----
    float moonUp = smoothstep(-0.1, 0.04, uMoonDir.y);
    if (uEnv < 0.5 && moonUp > 0.001) {
      float md;
      vec3 mc = moonDisc(d, 0.042, md);
      float cm = dot(d, uMoonDir);
      float mhalo = pow(max(cm, 0.0), 70.0) * 0.6 + pow(max(cm, 0.0), 9.0) * 0.12;
      col += (mc * md * (1.0 - cloudA * 0.85) + vec3(0.62, 0.72, 1.0) * mhalo * (1.0 - cloudA * 0.4)) * moonUp;
    } else if (uEnv > 0.5) {
      col += vec3(0.5, 0.6, 0.9) * pow(max(dot(d, uMoonDir), 0.0), 5.0) * 0.18 * smoothstep(-0.1, 0.04, uMoonDir.y);
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;function kb(){return{uTime:{value:0},uDay:{value:1},uNight:{value:0},uDusk:{value:0},uAurora:{value:0},uCloudCover:{value:.5},uEnv:{value:0},uCityGlow:{value:0},uZenith:{value:new $},uMid:{value:new $},uHorizon:{value:new $},uSunDir:{value:new R(0,1,0)},uMoonDir:{value:new R(0,-1,0)},uSunColor:{value:new $},uGlowColor:{value:new $(1,.45,.2)},uCloudLit:{value:new $},uCloudShade:{value:new $}}}const Bb=`
  attribute float aSize;
  attribute float aPhase;
  attribute vec3 aColor;
  uniform float uTime, uPR;
  varying vec3 vCol;
  void main() {
    vec3 d = normalize(position);
    float tw = 0.62 + 0.38 * sin(uTime * (1.2 + aPhase * 2.2) + aPhase * 40.0);
    vCol = aColor * tw * smoothstep(0.0, 0.16, d.y);
    gl_PointSize = aSize * uPR * (0.8 + 0.4 * tw);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Hb=`
  uniform float uOpacity;
  varying vec3 vCol;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float r = length(c);
    float core = exp(-r * r * 5.0);
    gl_FragColor = vec4(vCol * core * uOpacity, 1.0);
  }
`;function Gb(){const e=new Float32Array(9600),t=new Float32Array(3200),n=new Float32Array(3200),i=new Float32Array(3200*3),s=Xi(424242),a=[[.72,.82,1],[.85,.9,1],[1,1,1],[1,.93,.78],[1,.78,.6],[.8,.7,1]];let o=0;for(;o<3200;){const u=s()*2-1;if(Math.abs(u)<.03)continue;const f=s()*Math.PI*2,d=Math.sqrt(1-u*u);e[o*3]=Math.cos(f)*d*3800,e[o*3+1]=Math.abs(u)*3800,e[o*3+2]=Math.sin(f)*d*3800;const g=s(),x=g>.985?2.6:g>.93?1.5:.55+s()*.45;t[o]=g>.985?7:g>.93?4.6:2.2+s()*1.4,n[o]=s();const m=a[Math.floor(s()*a.length)];i[o*3]=m[0]*x,i[o*3+1]=m[1]*x,i[o*3+2]=m[2]*x,o++}const c=new nt;c.setAttribute("position",new Ye(e,3)),c.setAttribute("aSize",new Ye(t,1)),c.setAttribute("aPhase",new Ye(n,1)),c.setAttribute("aColor",new Ye(i,3));const l=new Qe({uniforms:{uTime:{value:0},uPR:{value:1},uOpacity:{value:0}},vertexShader:Bb,fragmentShader:Hb,transparent:!0,blending:Gt,depthWrite:!1,fog:!1}),h=new Hi(c,l);return h.frustumCulled=!1,h.renderOrder=1001,h}function Vb(){const r=new xn(1,1),e=new Qe({uniforms:{uA:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform float uA;
      varying vec2 vUv;
      void main() {
        float along = vUv.x;                       // 0 tail → 1 head
        float across = 1.0 - abs(vUv.y * 2.0 - 1.0);
        float a = pow(along, 3.0) * smoothstep(0.0, 0.6, across) * uA;
        gl_FragColor = vec4(vec3(0.85, 0.92, 1.0) * 3.0 * a, 1.0);
      }
    `,transparent:!0,blending:Gt,depthWrite:!1,fog:!1,side:dt}),t=new ze(r,e);return t.frustumCulled=!1,t.renderOrder=1002,t.visible=!1,t}class Wb{constructor(e,t,n=ur.medium){this.scene=e,this.renderer=t,this.quality=n,this.time=.34,this.dayLength=Ob,this.daylight=1,this.dusk=0,this.world="nature",this.aurora=0,this.cityGlow=0,this.wetness=0,this.sunColor=new $,this.horizonColor=new $,this.zenithColor=new $,this.mistDensity=4e-4,this.shaftStrength=.4,this.scatterStrength=.5,this._pal={zen:new $,mid:new $,hor:new $},this.group=new St,this.domeUniforms=kb();const i={CLOUD_OCT:n.clouds==="full"?5:3};this.domeMat=new Qe({uniforms:this.domeUniforms,vertexShader:vu,fragmentShader:xu,defines:i,side:Zt,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new ze(new Xa(4500,48,32),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=1e3,this.group.add(this.dome),this.stars=Gb(),this.group.add(this.stars),this.shoot=Vb(),this.group.add(this.shoot),this._shootT=8+Math.random()*10,this._shootAge=-1,e.add(this.group),this.sun=new rl(16777215,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const s=this.sun.shadow.camera;s.left=-280,s.right=280,s.top=280,s.bottom=-280,s.near=10,s.far=1200,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=2,e.add(this.sun),e.add(this.sun.target),this.moonLight=new rl(9676748,0),e.add(this.moonLight),e.add(this.moonLight.target),this.hemi=new Rm(12572656,6056780,.6),e.add(this.hemi),this.sunDir=new R(0,1,0),this.moonDir=new R(0,-1,0),this._envScene=new bf;const a={...this.domeUniforms,uEnv:{value:1}},o=new Qe({uniforms:a,vertexShader:vu,fragmentShader:xu,defines:{CLOUD_OCT:3},side:Zt,depthWrite:!1,fog:!1});this._envScene.add(new ze(new Xa(50,32,16),o)),this._pmrem=new al(t),this._envRT=null,this._envClock=99}_refreshEnv(e){if(this._envClock+=e,this._envClock<this.quality.envEvery)return;this._envClock=0;const t=this._pmrem.fromScene(this._envScene,0,.1,100,{size:this.quality.envSize});this.scene.environment=t.texture,this._envRT&&this._envRT.dispose(),this._envRT=t}update(e,t,n=0){let i=1;this.world==="city"&&(i=.42+1.1*cl(-.08,.38,this.sunDir.y)),this.time=(this.time+e*i/this.dayLength)%1;const s=(this.time-.25)*Math.PI*2,a=Math.sin(s);this.sunDir.set(Math.cos(s),a,.32).normalize(),this.moonDir.copy(this.sunDir).multiplyScalar(-1);const o=this.daylight=cl(-.07,.16,a),c=this.dusk=Math.pow(Math.max(0,1-Math.abs(a)/.24),1.2),l=1-o,h=this.time<.5;zb(this.sunDir.y,this._pal);const u=this._pal;this.horizonColor.copy(u.hor),this.zenithColor.copy(u.zen),this.sunColor.copy(gu.day).lerp(gu.dusk,Math.min(1,c*1.4));const f=this.world==="nature"?1:0;this.aurora+=(f-this.aurora)*Math.min(1,e*.6),this.cityGlow+=((this.world==="city"?1:0)-this.cityGlow)*Math.min(1,e*.8);const d=this.domeUniforms;d.uCityGlow.value=this.cityGlow,d.uTime.value=n,d.uDay.value=o,d.uNight.value=Math.pow(l,1.2),d.uDusk.value=c,d.uAurora.value=this.aurora*Math.pow(l,1.5),d.uCloudCover.value=.5+.1*Math.sin(n*.01)+.08*c,d.uZenith.value.copy(u.zen),d.uMid.value.copy(u.mid),d.uHorizon.value.copy(u.hor),d.uSunDir.value.copy(this.sunDir),d.uMoonDir.value.copy(this.moonDir),d.uSunColor.value.copy(this.sunColor),d.uGlowColor.value.copy(this.sunColor).lerp($s.setRGB(1,.36,.3),.35),d.uCloudLit.value.copy(ps.night[0]).lerp(ps.day[0],o).lerp(ps.dusk[0],Math.min(1,c*1.15)),d.uCloudShade.value.copy(ps.night[1]).lerp(ps.day[1],o).lerp(ps.dusk[1],Math.min(1,c*1.15));const g=this.scene.fog;g.color.copy(u.hor),g.color.lerp($s.setRGB(.3,.16,.36),this.cityGlow*l*.5),this.horizonColor.copy(g.color),g.far=1300+1500*o,g.near=60+60*o,this.hemi.color.copy(u.mid).lerp($s.setRGB(.8,.9,1),.35),this.hemi.groundColor.setHex(3753050).lerp($s.setHex(6056780),o).lerp($s.copy(u.hor).multiplyScalar(.55),c*.6),this.hemi.intensity=.62+.42*l+.5*c,this.sun.color.copy(this.sunColor),this.sun.intensity=2.6*o,this.sun.visible=o>.02,this.sun.castShadow=o>.04,this.sun.visible&&this.sun.position.copy(t).addScaledVector(this.sunDir,500),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld(),this.moonLight.intensity=2.2*(1-o),this.moonLight.position.copy(t).addScaledVector(this.moonDir,500),this.moonLight.target.position.copy(t),this.moonLight.target.updateMatrixWorld();const x=this.world==="city"?1-.14*o:1;this.renderer.toneMappingExposure=(.78+.14*o+.1*c)*x,this.scene.environmentIntensity=.45+.45*o+.35*c,this.mistDensity=28e-5+c*(h?.0017:7e-4)+l*25e-5,this.shaftStrength=.26*Math.min(1,o*1.2+c*.6)*(.55+.7*c),this.scatterStrength=.18+.6*c,this.group.position.set(t.x,0,t.z);const m=this.stars.material.uniforms;m.uTime.value=n,m.uOpacity.value=Math.pow(l,1.1),this.stars.visible=l>.02,this.stars.rotation.y+=e*.004,this._updateShootingStar(e,l),this._refreshEnv(e)}_updateShootingStar(e,t){const n=this.shoot;if(t<.7){n.visible=!1,this._shootAge=-1;return}if(this._shootAge<0){if(this._shootT-=e,this._shootT<=0){const h=Math.random()*Math.PI*2,u=.35+Math.random()*.5,f=3400,d=Math.cos(h)*Math.cos(u)*f,g=Math.sin(u)*f,x=Math.sin(h)*Math.cos(u)*f;this._shootFrom=new R(d,g,x);const m=h+Math.PI/2+(Math.random()-.5)*.8;this._shootDir=new R(Math.cos(m),-.35-Math.random()*.25,Math.sin(m)).normalize(),this._shootAge=0,this._shootT=10+Math.random()*18,n.scale.set(420,7,1)}return}this._shootAge+=e;const i=.95;if(this._shootAge>i){n.visible=!1,this._shootAge=-1;return}const s=this._shootAge/i;n.visible=!0,n.position.copy(this._shootFrom).addScaledVector(this._shootDir,s*900);const a=new _e,o=n.position.clone().normalize().negate(),c=this._shootDir.clone(),l=new R().crossVectors(o,c).normalize();c.crossVectors(l,o).normalize(),a.makeBasis(c,l,o),n.quaternion.setFromRotationMatrix(a),n.material.uniforms.uA.value=Math.sin(s*Math.PI)}setPixelRatio(e){this.stars.material.uniforms.uPR.value=e}}const jb=`
  uniform float uTime;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  #include <common>
  #include <fog_pars_vertex>
  void main() {
    vec3 p = position;
    float a = sin(p.x * 0.042 + uTime * 1.05);
    float b = sin(p.z * 0.055 - uTime * 0.85);
    float c = sin((p.x + p.z) * 0.021 + uTime * 0.55);
    p.y += a * 0.45 + b * 0.4 + c * 0.7;
    float dx = 0.042 * cos(p.x * 0.042 + uTime * 1.05) * 0.45
             + 0.021 * cos((p.x + p.z) * 0.021 + uTime * 0.55) * 0.7;
    float dz = 0.055 * cos(p.z * 0.055 - uTime * 0.85) * 0.4
             + 0.021 * cos((p.x + p.z) * 0.021 + uTime * 0.55) * 0.7;
    vNormal = normalize(vec3(-dx, 1.0, -dz));
    vec4 worldPosition = modelMatrix * vec4(p, 1.0);
    vWorldPos = worldPosition.xyz;
    vec4 mvPosition = viewMatrix * worldPosition;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,Xb=`
  uniform float uTime, uDaylight, uWorldHalf, uTCell, uTexN, uNight;
  uniform vec3 uSunDir, uSunColor, uSkyHor, uSkyZen;
  uniform vec3 uPlayer;               // xz + how deep in the water (0..1)
  uniform sampler2D uHeightTex;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  #include <common>
  #include <fog_pars_fragment>

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 3; i++) { s += a * noise(p); p = p * 2.03 + 4.7; a *= 0.5; }
    return s;
  }
  float ground(vec2 w) {
    vec2 g = clamp((w + uWorldHalf) / uTCell, vec2(0.0), vec2(uTexN - 1.0 - 1e-3));
    ivec2 i0 = ivec2(floor(g));
    vec2 f = g - vec2(i0);
    float a = texelFetch(uHeightTex, i0, 0).r;
    float d = texelFetch(uHeightTex, i0 + ivec2(1, 0), 0).r;
    float b = texelFetch(uHeightTex, i0 + ivec2(0, 1), 0).r;
    float c = texelFetch(uHeightTex, i0 + ivec2(1, 1), 0).r;
    return (f.x + f.y <= 1.0) ? a + (d - a) * f.x + (b - a) * f.y
                              : c + (b - c) * (1.0 - f.x) + (d - c) * (1.0 - f.y);
  }
  // cheap animated caustic web
  float caustic(vec2 p, float t) {
    vec2 q = p * 0.9;
    float a = abs(sin(q.x * 2.1 + t * 0.9 + sin(q.y * 1.7 + t * 0.6) * 1.6));
    float b = abs(sin(q.y * 2.3 - t * 0.7 + sin(q.x * 1.9 - t * 0.5) * 1.4));
    return pow(1.0 - a * b, 6.0);
  }

  void main() {
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec2 p = vWorldPos.xz;
    float depth = max(WATER_LEVEL_C - ground(p), 0.0);
    float distView = length(cameraPosition - vWorldPos);
    float near = exp(-distView * 0.0035);

    // fine moving ripples on top of the vertex waves (fade with distance)
    vec2 slope = vec2(
      cos(p.x * 1.15 + uTime * 1.8) * 1.15 * cos(p.y * 0.9 - uTime * 1.4)
      + 0.53 * cos((p.x + p.y) * 0.53 - uTime * 1.1)
      + 0.23 * cos(p.x * 0.23 - uTime * 0.7) * cos(p.y * 0.31 + uTime * 0.9),
      - 0.9 * sin(p.y * 0.9 - uTime * 1.4) * sin(p.x * 1.15 + uTime * 1.8)
      + 0.53 * cos((p.x + p.y) * 0.53 - uTime * 1.1)
      + 0.31 * sin(p.y * 0.31 + uTime * 0.9) * sin(p.x * 0.23 - uTime * 0.7)
    );
    // rings spreading from the player
    vec2 toP = p - uPlayer.xy;
    float rr = length(toP);
    float ring = sin(rr * 5.5 - uTime * 6.0) * exp(-rr * 0.38) * uPlayer.z;
    slope += normalize(toP + vec2(1e-4)) * ring * 2.2;

    vec3 N = normalize(vNormal + vec3(slope.x, 0.0, slope.y) * 0.22 * near);

    // depth colour: clear over the sand, deepening to the open water
    vec3 shallow = vec3(0.16, 0.78, 0.72);
    vec3 mid = vec3(0.04, 0.42, 0.62);
    vec3 deep = vec3(0.015, 0.12, 0.33);
    float dMix = 1.0 - exp(-depth * 0.32);
    vec3 body = mix(shallow, mid, smoothstep(0.0, 0.55, dMix));
    body = mix(body, deep, smoothstep(0.45, 1.0, dMix));
    // the water is lit by the day: dim it down at night, keep a little glow
    float lightK = 0.18 + 0.82 * uDaylight;
    body *= lightK * (0.9 + 0.25 * uSunColor.g);

    // sky mirror (the dome's own colours), strongest at grazing angles
    vec3 R = reflect(-V, N);
    vec3 sky = mix(uSkyHor, uSkyZen, smoothstep(0.0, 0.75, R.y));
    float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    vec3 col = mix(body, sky, 0.1 + fres * 0.75);

    // sun / moon glitter
    float sd = max(dot(R, uSunDir), 0.0);
    float spec = pow(sd, 220.0) * 7.0 + pow(sd, 24.0) * 0.35;
    float sparkle = step(0.965, noise(p * 3.2 + uTime * 0.7)) * pow(sd, 6.0) * 5.0 * near;
    col += uSunColor * (spec + sparkle) * (0.35 + 0.65 * uDaylight + 0.4 * uNight);

    // caustics on the shallows
    float shallowK = 1.0 - smoothstep(0.4, 4.5, depth);
    col += vec3(0.6, 0.95, 0.9) * caustic(p, uTime) * shallowK * uDaylight * 0.45 * near;

    // shoreline foam: lapping bands + a bright lip at the very edge
    float band = 1.0 - smoothstep(0.0, 1.1, depth);
    float lap = sin(depth * 5.0 - uTime * 1.3 + fbm(p * 0.5) * 6.0) * 0.5 + 0.5;
    float foamN = fbm(p * 1.3 + vec2(uTime * 0.12, -uTime * 0.09));
    float foam = band * smoothstep(0.42, 0.75, foamN * 0.65 + lap * 0.45);
    foam += (1.0 - smoothstep(0.0, 0.16, depth)) * 0.8;
    foam += max(ring, 0.0) * 0.25;
    foam = clamp(foam, 0.0, 1.0);
    col = mix(col, vec3(0.92, 0.97, 1.0) * (0.45 + 0.7 * uDaylight), foam * 0.85);

    // see-through over the sand, opaque out in the deep
    float alpha = mix(0.3, 0.94, 1.0 - exp(-depth * 0.8));
    alpha = max(alpha, foam * 0.9);
    gl_FragColor = vec4(col, alpha);
    #include <fog_fragment>
  }
`.replace(/WATER_LEVEL_C/g,pt.toFixed(2));class qb{constructor(e,t){const n=new xn(Vi*1.6,Vi*1.6,160,160);n.rotateX(-Math.PI/2),this.material=new Qe({uniforms:Hn.merge([le.fog,{uTime:{value:0},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new $(1,1,1)},uDaylight:{value:1},uNight:{value:0},uSkyHor:{value:new $},uSkyZen:{value:new $},uPlayer:{value:new R},uWorldHalf:{value:et},uTCell:{value:t.cell},uTexN:{value:t.gridN},uHeightTex:{value:t.heightTex}}]),vertexShader:jb,fragmentShader:Xb,transparent:!0,fog:!0,side:dt}),this.mesh=new ze(n,this.material),this.mesh.position.y=pt,e.add(this.mesh),this._c=new $}update(e,t,n){const i=this.material.uniforms;i.uTime.value=e;const s=t.daylight<.05;if(i.uSunDir.value.copy(s?t.moonDir:t.sunDir),i.uDaylight.value=s?0:t.daylight,i.uNight.value=1-t.daylight,i.uSunColor.value.setRGB(1,.95,.85).lerp(this._c.setRGB(.55,.65,.9),1-t.daylight),i.uSkyHor.value.copy(t.horizonColor),i.uSkyZen.value.copy(t.zenithColor),n){const a=_i.clamp((pt+.6-n.pos.y)*1.4+.3,0,1),o=n.pos.y<pt+1?a:0;i.uPlayer.value.set(n.pos.x,n.pos.z,o)}}}function bu(r,e){if(e===Ld)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===$c||e===rf){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===$c)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Or extends zs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new f_(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=br.extractUrlBase(e);a=br.resolveURL(l,this.path)}else a=br.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new kf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Xf){try{a[Ke.KHR_BINARY_GLTF]=new d_(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new A_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new Jb;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new p_(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new m_;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new g_;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Yb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Kb{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new $(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],rn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new rl(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Nr(h),l.distance=u;break;case"spot":l=new Lm(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Jb{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){const i=[];e.color=new $(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Lt))}return Promise.all(i)}}class Zb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Qb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(o,o)}return Promise.all(s)}}class $b{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class e_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class t_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new $(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class n_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class i_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new $().setRGB(o[0],o[1],o[2],rn),Promise.all(s)}}class s_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class r_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new $().setRGB(o[0],o[1],o[2],rn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(s)}}class a_{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class o_{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class c_{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class l_{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class h_{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class u_{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class f_{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const g of u){const x=new _e,m=new R,p=new bt,b=new R(1,1,1),_=new Dt(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&b.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,x.compose(m,p,b));for(const v in c)if(v==="_COLOR_0"){const M=c[v];_.instanceColor=new Pr(M.array,M.itemSize,M.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);mt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Xf="glTF",er=12,_u={JSON:1313821514,BIN:5130562};class d_{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-er,s=new DataView(e,er);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===_u.JSON){const l=new Uint8Array(e,er+a,o);this.content=n.decode(l)}else if(c===_u.BIN){const l=er+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class p_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=ll[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=ll[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Ss[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const g in d.attributes){const x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(d)},o,l,rn,f)})})}}class m_{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class g_{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class qf extends Fr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,x=g-l,m=-2*d+3*f,p=d-f,b=1-m,_=p-f+u;for(let v=0;v!==o;v++){const M=a[x+v+o],S=a[x+v+c]*h,T=a[g+v+o],C=a[g+v]*h;s[v]=b*M+_*S+m*T+p*C}return s}}const v_=new bt;class x_ extends qf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return v_.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yu={9728:Vt,9729:Ht,9984:Ju,9985:Pa,9986:cr,9987:ii},Mu={33071:bi,33648:ka,10497:ki},jo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b_={CUBICSPLINE:void 0,LINEAR:Ar,STEP:Tr},Xo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function __(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),r.DefaultMaterial}function Li(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y_(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function M_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function S_(r){let e;const t=r.extensions&&r.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qo(t.attributes):e=r.indices+":"+qo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+qo(r.targets[n]);return e}function qo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function hl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function w_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const T_=new _e;class A_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Cm(this.options.manager):this.textureLoader=new Nm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Li(s,o,i),Fn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(br.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=jo[i.type],o=Ss[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ye(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=jo[i.type],l=Ss[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(d&&d!==u){const p=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(b);_||(x=new l(o,p*d,i.count*d/h),_=new _f(x,d/h),t.cache.add(b,_)),m=new Rr(_,c,f%d/h,g)}else o===null?x=new l(i.count*c):x=new l(o,f,i.count*c),m=new Ye(x,c,g);if(i.sparse!==void 0){const p=jo.SCALAR,b=Ss[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,M=new b(a[1],_,i.sparse.count*p),S=new l(a[2],v,i.sparse.count*c);o!==null&&(m=new Ye(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=M.length;T<C;T++){const y=M[T];if(m.setX(y,S[T*c]),c>=2&&m.setY(y,S[T*c+1]),c>=3&&m.setZ(y,S[T*c+2]),c>=4&&m.setW(y,S[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return h.magFilter=yu[f.magFilter]||Ht,h.minFilter=yu[f.minFilter]||ii,h.wrapS=Mu[f.wrapS]||ki,h.wrapT=Mu[f.wrapT]||ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==Ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Ct(x);m.needsUpdate=!0,f(m)}),t.load(br.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Fn(u,a),u.userData.mimeType=a.mimeType||w_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Af,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new wf,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const u=i[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new $(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],rn),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=dt);const h=s.alphaMode||Xo.OPAQUE;if(h===Xo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Xo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==nn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ee(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==nn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==nn){const u=s.emissiveFactor;o.emissive=new $().setRGB(u[0],u[1],u[2],rn)}return s.emissiveTexture!==void 0&&a!==nn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Lt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Fn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Li(i,u,s),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Su(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=S_(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Su(new nt,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?__(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const x=h[d],m=a[d];let p;const b=l[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Rp(x,b):new ze(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=bu(p.geometry,rf):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=bu(p.geometry,$c));else if(m.mode===Mn.LINES)p=new Tf(x,b);else if(m.mode===Mn.LINE_STRIP)p=new Al(x,b);else if(m.mode===Mn.LINE_LOOP)p=new Up(x,b);else if(m.mode===Mn.POINTS)p=new Hi(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&M_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Fn(p,s),m.extensions&&Li(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Li(i,u[0],s),u[0];const f=new St;s.extensions&&Li(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(_i.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new eo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new _e;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new wl(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],g=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,v=f.length;_<v;_++){const M=f[_],S=d[_],T=g[_],C=x[_],y=m[_];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const w=n._createAnimationTracks(M,S,T,C,y);if(w)for(let L=0;L<w.length;L++)p.push(w[L])}const b=new sl(s,void 0,p);return Fn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,T_)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Sf:l.length>1?h=new St:l.length===1?h=l[0]:h=new mt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Fn(h,s),s.extensions&&Li(n,h,s),s.matrix!==void 0){const u=new _e;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new St;n.name&&(s.name=i.createUniqueName(n.name)),Fn(s,n),n.extensions&&Li(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof In||f instanceof Ct)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];gi[s.path]===gi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(gi[s.path]){case gi.weights:l=Ls;break;case gi.rotation:l=Ds;break;case gi.translation:case gi.scale:l=Is;break;default:n.itemSize===1?l=Ls:l=Is;break}const h=i.interpolation!==void 0?b_[i.interpolation]:Ar,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+gi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ds?x_:qf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function E_(r,e,t){const n=e.attributes,i=new ci;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){const h=hl(Ss[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new R,c=new R;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const x=hl(Ss[f.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Wn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Su(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=ll[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Fn(r,e),E_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?y_(r,e.targets,t):r})}const Ma=8,wu=.02;class Ns{constructor(){this.grid=new Map,this.all=[],this._stamp=0}_cellsFor(e,t,n,i){const s=Math.floor((e-n)/Ma),a=Math.floor((e+n)/Ma),o=Math.floor((t-n)/Ma),c=Math.floor((t+n)/Ma);for(let l=s;l<=a;l++)for(let h=o;h<=c;h++){const u=(l+32768)*65536+(h+32768);i(u)}}_insert(e){this.all.push(e),this._cellsFor(e.x,e.z,e.ext,t=>{let n=this.grid.get(t);n||this.grid.set(t,n=[]),n.push(e)})}addCylinder(e,t,n,i,s){s<=i||this._insert({kind:0,x:e,z:t,r:n,y0:i,y1:s,ext:n})}addBox(e,t,n,i,s,a,o=0){a<=s||this._insert({kind:1,x:e,z:t,hw:n,hd:i,rotY:o,y0:s,y1:a,ext:Math.hypot(n,i)})}absorb(e){for(const t of e.all)t.kind===0?this.addCylinder(t.x,t.z,t.r,t.y0,t.y1):this.addBox(t.x,t.z,t.hw,t.hd,t.y0,t.y1,t.rotY)}_near(e,t,n,i){return i.length=0,this._stamp++,this._cellsFor(e,t,n,s=>{const a=this.grid.get(s);if(a)for(const o of a)o._mark!==this._stamp&&(o._mark=this._stamp,i.push(o))}),i}resolve(e,t,n,i,s,a){const o=this._near(e.x,e.z,n+1,this._scratch??=[]);let c=0;for(let l=0;l<2;l++){let h=!1;for(const u of o){if(s<=u.y0||i>=u.y1-a-wu)continue;let f,d,g;if(u.kind===0){const x=e.x-u.x,m=e.z-u.z,p=u.r+n,b=x*x+m*m;if(b>=p*p)continue;const _=Math.sqrt(b);_>1e-6?(f=x/_,d=m/_,g=p-_):(f=1,d=0,g=p)}else{const x=Math.cos(u.rotY),m=Math.sin(u.rotY),p=e.x-u.x,b=e.z-u.z,_=x*p-m*b,v=m*p+x*b,M=Math.max(-u.hw,Math.min(u.hw,_)),S=Math.max(-u.hd,Math.min(u.hd,v));let T=_-M,C=v-S;const y=T*T+C*C;if(y>=n*n)continue;if(y>1e-9){const w=Math.sqrt(y);T/=w,C/=w,g=n-w}else{const w=u.hw-Math.abs(_),L=u.hd-Math.abs(v);w<L?(T=_>=0?1:-1,C=0,g=w+n):(T=0,C=v>=0?1:-1,g=L+n)}f=x*T+m*C,d=-m*T+x*C}if(e.x+=f*g,e.z+=d*g,t){const x=t.x*f+t.z*d;x<0&&(t.x-=x*f,t.z-=x*d)}h=!0,c++}if(!h)break}return c}supportAt(e,t,n,i,s,a=1){const o=this._near(e,t,i+1,this._scratch??=[]);let c=-1/0;for(const l of o)if(!(l.y1>n+s+wu||l.y1<n-a)){if(l.kind===0){const h=e-l.x,u=t-l.z;if(h*h+u*u>(l.r+i)**2)continue}else{const h=Math.cos(l.rotY),u=Math.sin(l.rotY),f=e-l.x,d=t-l.z,g=h*f-u*d,x=u*f+h*d;if(Math.abs(g)>l.hw+i||Math.abs(x)>l.hd+i)continue}l.y1>c&&(c=l.y1)}return c}blocked(e,t,n,i=.25){const s=this._near(e,n,i+2.6,this._scratch??=[]);for(const a of s)if(!(t<a.y0||t>a.y1))if(a.kind===0){const o=e-a.x,c=n-a.z,l=a.r+i;if(o*o+c*c<l*l)return!0}else{const o=Math.cos(a.rotY),c=Math.sin(a.rotY),l=e-a.x,h=n-a.z,u=o*l-c*h,f=c*l+o*h;if(Math.abs(u)<a.hw+i&&Math.abs(f)<a.hd+i)return!0}return!1}unstick(e,t,n){this.resolve(e,null,t,e.y,e.y+n,0)}}async function C_(r,e,t,n,i={trees:1}){const s=Xi((e^2654435769)>>>0),a=new St,o=new Ns,c=new Or,[l,h]=await Promise.all([c.loadAsync("assets/nature_trees.glb"),c.loadAsync("assets/nature_rocks.glb")]),u={};for(const O of[l,h])O.scene.traverse(z=>{z.isMesh&&(u[z.name]=z.geometry)});function f(O,z,G,q){O.onBeforeCompile=I=>{I.uniforms.uTime=n,I.uniforms.uWind=t,I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          float wpx = instanceMatrix[3][0];
          float wpz = instanceMatrix[3][2];
          float k = smoothstep(${G.toFixed(1)}, ${q.toFixed(1)}, transformed.y);
          float ph = uTime * 1.35 + wpx * 0.05 + wpz * 0.043;
          float gust = 0.6 + 0.5 * sin(uTime * 0.5 + wpx * 0.01 + wpz * 0.011);
          transformed.x += sin(ph) * k * ${z.toFixed(2)} * uWind * gust;
          transformed.z += cos(ph * 0.77) * k * ${(z*.6).toFixed(2)} * uWind * gust;
        #endif
        `)}}const d=new _e,g=new bt,x=new It,m=new R,p=new R,b=new $,_=[["pine_a",.38],["pine_b",.34],["fir",.28]],v=[["oak_a",.36],["oak_b",.3],["birch",.19],["blossom",.05],["autumn",.1]],M={pine_a:[.46,4.6],pine_b:[.46,4.6],fir:[.38,4],oak_a:[.52,3.6],oak_b:[.52,3.6],birch:[.27,5.8],blossom:[.5,3.2],autumn:[.52,3.6]},S=O=>{let z=s();for(const[G,q]of O)if((z-=q)<=0)return G;return O[0][0]},T={};let C=0;const y=Math.round(3600*(i.trees??1));for(let O=0;O<4e4&&C<y;O++){const z=(s()*2-1)*et*.97,G=(s()*2-1)*et*.97,q=r.heightAt(z,G);if(q<pt+2.5||q>62||r.slopeAt(z,G)>.55)continue;const I=r.forestMask(z,G);if(I<.04||s()>Math.min(1,(I-.04)*3.2))continue;const V={x:z,z:G,h:q,s:.75+s()*.75,hs:.85+s()*.5,ry:s()*Math.PI*2,v:s()},X=q>30||s()<.4?S(_):S(v);(T[X]||=[]).push(V),C++}const w=new xt({vertexColors:!0,roughness:.95});f(w,.17,3.5,11.5);for(const[O,z]of Object.entries(T)){const G=u[O];if(!G)continue;const q=new Dt(G,w,z.length);z.forEach((X,se)=>{m.set(X.x,X.h-.3,X.z),x.set(0,X.ry,0),g.setFromEuler(x),p.set(X.s,X.s*X.hs,X.s),d.compose(m,g,p),q.setMatrixAt(se,d),b.setRGB(.9+X.v*.2,.93+X.v*7.3%1*.14,.9+X.v*3.1%1*.18),q.setColorAt(se,b)}),q.instanceMatrix.needsUpdate=!0,q.frustumCulled=!1,q.castShadow=!0,q.receiveShadow=!0,a.add(q);const[I,V]=M[O];for(const X of z){const se=X.h-.3;o.addCylinder(X.x,X.z,I*X.s,se,se+V*X.s*X.hs*.75)}}const L=[];for(let O=0;O<8e3&&L.length<500;O++){const z=(s()*2-1)*et*.97,G=(s()*2-1)*et*.97,q=r.heightAt(z,G);if(q<pt+.5)continue;const I=r.slopeAt(z,G),V=q>60?.8:.1+I*.9;if(s()>V)continue;const X=s()>.97?1.5+s()*1.1:.5+s()*1.8;L.push({x:z,z:G,h:q,s:X,sy:.55+s()*.5,sz:.7+s()*.6,ry:s()*Math.PI*2,v:s(),shape:Math.floor(s()*6)})}const N=new xt({vertexColors:!0,roughness:.95,flatShading:!0});for(let O=0;O<6;O++){const z=L.filter(I=>I.shape===O),G=u[`rock${O}`];if(!z.length||!G)continue;const q=new Dt(G,N,z.length);z.forEach((I,V)=>{const X=1.6*I.s;m.set(I.x,I.h+.04*X,I.z),x.set(0,I.ry,0),g.setFromEuler(x),p.set(X,X*I.sy,X*I.sz),d.compose(m,g,p),q.setMatrixAt(V,d),b.setRGB(.85+I.v*.3,.85+I.v*.25,.85+I.v*.25),q.setColorAt(V,b)}),q.instanceMatrix.needsUpdate=!0,q.castShadow=!0,q.receiveShadow=!0,q.frustumCulled=!1,a.add(q)}for(const O of L){const z=O.h-O.s*.25;o.addCylinder(O.x,O.z,1.45*O.s,z,z+1.7*O.s*O.sy*.95)}function B(){}return{group:a,update:B,colliders:o}}const Yo=120,Tu=[11565114,12748860,10259002,7440700,10838063,9411142];class R_{constructor(e,t,n,i){this.terrain=e,this.wind=n;const s=new xn(.16,.22),a=new xt({roughness:1,side:dt,emissive:10124106,emissiveIntensity:.12});this.mesh=new Dt(s,a,Yo),this.mesh.instanceMatrix.setUsage(ys),this.mesh.frustumCulled=!1,t.add(this.mesh);const o=new $;this.items=[];for(let c=0;c<Yo;c++)this.items.push({x:0,y:-100,z:0,vy:.7+Math.random()*.9,ph:Math.random()*Math.PI*2,spin:1+Math.random()*2.5,s:.8+Math.random()*.7,state:"fall",fade:1}),this.mesh.setColorAt(c,o.setHex(Tu[c%Tu.length]).multiplyScalar(.85+Math.random()*.3));this.mesh.instanceColor.needsUpdate=!0,this._m=new _e,this._q=new bt,this._e=new It,this._v=new R,this._s=new R}respawnNear(e,t,n){const i=Math.random()*Math.PI*2,s=12+Math.random()*30;e.x=t+Math.cos(i)*s,e.z=n+Math.sin(i)*s,e.y=this.terrain.heightAt(e.x,e.z)+6+Math.random()*8,e.fade=1}update(e,t,n){const i=this.wind.value,{_m:s,_q:a,_e:o,_v:c,_s:l}=this;for(let h=0;h<Yo;h++){const u=this.items[h];u.y-=u.vy*e,u.x+=(Math.sin(n*1.3+u.ph)*.9+i*1.4)*e,u.z+=Math.cos(n*1.1+u.ph)*.7*e;const f=this.terrain.heightAt(u.x,u.z);u.y<=f+.85&&(u.fade-=e*1.7),(u.fade<=0||Math.hypot(u.x-t.x,u.z-t.z)>65)&&this.respawnNear(u,t.x,t.z),o.set(n*u.spin+u.ph,u.ph+n*.7,n*.9),a.setFromEuler(o),c.set(u.x,u.y,u.z),l.setScalar(u.s*Math.max(.001,u.fade)),s.compose(c,a,l),this.mesh.setMatrixAt(h,s)}this.mesh.instanceMatrix.needsUpdate=!0}}const Au=9;function P_(){const r=[],e=[],t=[],n=[],i=[];let s=0;for(let o=0;o<Au;o++){const c=o/Au*Math.PI*2+Math.random()*.6,l=.03+Math.random()*.2,h=Math.cos(c*1.7)*l,u=Math.sin(c*1.7)*l,f=.12+Math.random()*.3,d=.3+Math.random()*.26,g=.026+Math.random()*.016,x=Math.cos(c),m=Math.sin(c),p=[[0,g,0],[.55,g*.72,f*.45],[1,0,f]],b=Math.random();for(let v=0;v<3;v++){const[M,S,T]=p[v];for(const C of S===0?[0]:[-1,1]){const y=C*S,w=T*d*.5;r.push(h+y*x-w*m*-1,M*d,u+y*m+w*x*-1),e.push(v/2),t.push(b),n.push(0),s++}}const _=s-5;i.push(_,_+1,_+2,_+1,_+3,_+2,_+2,_+3,_+4)}const a=new Fl;return a.setAttribute("position",new Ce(r,3)),a.setAttribute("aT",new Ce(e,1)),a.setAttribute("aRnd",new Ce(t,1)),a.setAttribute("aPart",new Ce(n,1)),a.setAttribute("normal",new Ce(new Array(r.length).fill(0).map((o,c)=>c%3===1?1:0),3)),a.setIndex(i),a}function L_(){const r=[],e=[],t=[],n=[],i=[];let s=0;const a=(p,b,_,v,M,S)=>(r.push(p,b,_),e.push(v),t.push(S),n.push(M),s++),o=.05,c=a(-.012,0,0,0,0,0),l=a(.012,0,0,0,0,0),h=a(-.008,.28,o,.8,0,0),u=a(.008,.28,o,.8,0,0);i.push(c,l,h,l,u,h);const f=.3,d=o,g=a(0,f+.012,d,1,2,0),x=6;for(let p=0;p<x;p++){const b=p/x*Math.PI*2,_=(p+1)/x*Math.PI*2,v=(b+_)/2,M=.075,S=a(Math.cos(b)*M*.45,f,d+Math.sin(b)*M*.45,1,1,0),T=a(Math.cos(v)*M,f+.025,d+Math.sin(v)*M,1,1,0),C=a(Math.cos(_)*M*.45,f,d+Math.sin(_)*M*.45,1,1,0);i.push(S,T,g,T,C,g)}const m=new Fl;return m.setAttribute("position",new Ce(r,3)),m.setAttribute("aT",new Ce(e,1)),m.setAttribute("aRnd",new Ce(t,1)),m.setAttribute("aPart",new Ce(n,1)),m.setAttribute("normal",new Ce(new Array(r.length).fill(0).map((p,b)=>b%3===1?1:0),3)),m.setIndex(i),m}function D_(){const r=[],e=[],t=[],n=[],i=[];let s=0;const a=(b,_,v,M,S)=>(r.push(b,_,v),e.push(M),t.push(0),n.push(S),s++),o=7,c=(b,_,v,M)=>{const S=[];for(let T=0;T<o;T++){const C=T/o*Math.PI*2;S.push(a(Math.cos(C)*b,_,Math.sin(C)*b,v,M))}return S},l=c(.05,0,0,0),h=c(.035,.16,.5,0);for(let b=0;b<o;b++){const _=(b+1)%o;i.push(l[b],l[_],h[b],l[_],h[_],h[b])}const u=c(.14,.16,.6,1),f=c(.115,.23,.8,1),d=c(.05,.28,.95,1),g=a(0,.3,0,1,1);for(let b=0;b<o;b++){const _=(b+1)%o;i.push(u[b],u[_],f[b],u[_],f[_],f[b]),i.push(f[b],f[_],d[b],f[_],d[_],d[b]),i.push(d[b],d[_],g)}const x=c(.14,.158,.6,2),m=a(0,.15,0,.6,2);for(let b=0;b<o;b++){const _=(b+1)%o;i.push(x[_],x[b],m)}const p=new Fl;return p.setAttribute("position",new Ce(r,3)),p.setAttribute("aT",new Ce(e,1)),p.setAttribute("aRnd",new Ce(t,1)),p.setAttribute("aPart",new Ce(n,1)),p.setAttribute("normal",new Ce(new Array(r.length).fill(0).map((b,_)=>_%3===1?1:0),3)),p.setIndex(i),p}function Ko(r){const e=new Float32Array(r*r*2);for(let t=0;t<r;t++)for(let n=0;n<r;n++)e[(t*r+n)*2]=n,e[(t*r+n)*2+1]=t;return new Pr(e,2)}const I_=`
  attribute vec2 aCell;
  attribute float aT;
  attribute float aRnd;
  attribute float aPart;
  uniform vec2 uPlayer;
  uniform float uN, uCell, uRange, uTime, uWind, uNight, uWorldHalf, uTCell, uTexN;
  uniform sampler2D uHeightTex;
  uniform sampler2D uColorTex;
  uniform sampler2D uForestTex;
  varying vec3 vGCol;
  varying vec3 vGEm;

  float gh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float gn(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y);
  }
  // triangle-exact terrain height: same split as the rendered mesh
  float gground(vec2 w) {
    vec2 g = clamp((w + uWorldHalf) / uTCell, vec2(0.0), vec2(uTexN - 1.0 - 1e-3));
    ivec2 i0 = ivec2(floor(g));
    vec2 f = g - vec2(i0);
    float a = texelFetch(uHeightTex, i0, 0).r;
    float d = texelFetch(uHeightTex, i0 + ivec2(1, 0), 0).r;
    float b = texelFetch(uHeightTex, i0 + ivec2(0, 1), 0).r;
    float c = texelFetch(uHeightTex, i0 + ivec2(1, 1), 0).r;
    return (f.x + f.y <= 1.0) ? a + (d - a) * f.x + (b - a) * f.y
                              : c + (b - c) * (1.0 - f.x) + (d - c) * (1.0 - f.y);
  }
`,N_=`
  vec2 P = floor(uPlayer / uCell);
  vec2 rel = mod(aCell - P + uN * 0.5, uN) - uN * 0.5;
  vec2 cw = P + rel;
  float h1 = gh(cw), h2 = gh(cw + 17.31), h3 = gh(cw + 91.7), h4 = gh(cw + 53.1);
  vec2 pos = (cw + vec2(h1, h2)) * uCell;
  float ground = gground(pos);
  vec4 tc = texture2D(uColorTex, (pos + uWorldHalf) / (uWorldHalf * 2.0));
  float dist = length(pos - uPlayer);
  float fade = 1.0 - smoothstep(uRange * 0.55, uRange, dist);
  float keep = step(h3, tc.a) * step(h4, fade * 1.15);
  float hs = (0.7 + 0.7 * h1) * (0.5 + 0.5 * fade) * keep;
  float ws = (0.9 + 0.5 * h2) * keep;
  vec3 transformed = vec3(pos.x, ground - 0.02, pos.y) + vec3(position.x * ws, position.y * hs, position.z * ws);
  float bend = aT * aT;
  float gust = 0.55 + 0.45 * sin(uTime * 0.5 + pos.x * 0.02 + pos.y * 0.017);
  float sw = sin(uTime * 1.9 + pos.x * 0.6 + pos.y * 0.5 + aRnd * 6.28);
  transformed.x += (sw * 0.06 + 0.13 * gust) * bend * uWind * hs;
  transformed.z += cos(uTime * 1.6 + pos.y * 0.5 + aRnd * 5.0) * 0.05 * bend * uWind * hs;

  vec3 gc = tc.rgb;
  vec3 root = gc * vec3(0.40, 0.55, 0.30);
  vec3 tip = gc * vec3(1.28, 1.42, 0.82) * (0.88 + 0.3 * h1);
  vec3 col = mix(root, tip, pow(aT, 0.85));
  col = mix(col, vec3(0.66, 0.58, 0.26), step(0.9, h2) * aT * 0.65);   // a few sun-dried tufts
  col += vec3(0.015, 0.04, 0.07) * uNight * (0.3 + aT);                // moonlit tips
  vGCol = col;
  vGEm = vec3(0.0);
`,U_=`
  vec2 P = floor(uPlayer / uCell);
  vec2 rel = mod(aCell - P + uN * 0.5, uN) - uN * 0.5;
  vec2 cw = P + rel;
  float h1 = gh(cw), h2 = gh(cw + 17.31), h3 = gh(cw + 91.7), h4 = gh(cw + 53.1);
  vec2 pos = (cw + vec2(h1, h2)) * uCell;
  float ground = gground(pos);
  vec4 tc = texture2D(uColorTex, (pos + uWorldHalf) / (uWorldHalf * 2.0));
  float dist = length(pos - uPlayer);
  float fade = 1.0 - smoothstep(uRange * 0.5, uRange, dist);
  // flowers come in drifts of one colour
  float drift = smoothstep(0.48, 0.74, gn(cw * 0.05));
  float keep = step(h3, drift * 0.85 + 0.03) * step(0.45, tc.a) * step(h4, fade * 1.1);
  float hs = (0.7 + 0.7 * h1) * keep;
  vec3 transformed = vec3(pos.x, ground - 0.02, pos.y) + position * hs;
  float bend = aT * aT;
  float sw = sin(uTime * 1.5 + pos.x * 0.5 + pos.y * 0.45 + h2 * 6.28);
  transformed.x += (sw * 0.04 + 0.05) * bend * uWind * hs;

  float pn = gn(cw * 0.11);
  float idxF = floor(fract(pn * 3.7 + h1 * 0.12) * 6.0);
  vec3 pal[6] = vec3[6](
    vec3(1.0, 0.98, 0.9), vec3(1.0, 0.82, 0.22), vec3(1.0, 0.42, 0.62),
    vec3(0.6, 0.42, 1.0), vec3(0.32, 0.58, 1.0), vec3(1.0, 0.52, 0.18));
  vec3 fc = pal[int(idxF)];
  float glows = step(0.35, fract(pn * 7.3));
  vec3 stem = vec3(0.12, 0.3, 0.07);
  vec3 col = aPart < 0.5 ? stem : (aPart < 1.5 ? fc : vec3(1.0, 0.8, 0.2));
  vGCol = col;
  // after dark the petals glow like little lanterns
  vGEm = (aPart < 0.5 ? vec3(0.0) : (aPart < 1.5 ? fc * glows * 2.6 : vec3(1.0, 0.7, 0.2) * 2.0)) * uNight;
`,F_=`
  vec2 P = floor(uPlayer / uCell);
  vec2 rel = mod(aCell - P + uN * 0.5, uN) - uN * 0.5;
  vec2 cw = P + rel;
  float h1 = gh(cw), h2 = gh(cw + 17.31), h3 = gh(cw + 91.7), h4 = gh(cw + 53.1);
  vec2 pos = (cw + vec2(h1, h2)) * uCell;
  float ground = gground(pos);
  float forest = texture2D(uForestTex, (pos + uWorldHalf) / (uWorldHalf * 2.0)).r;
  float dist = length(pos - uPlayer);
  float fade = 1.0 - smoothstep(uRange * 0.5, uRange, dist);
  // troops of toadstools under the trees, thickest in the damp patches
  float damp = smoothstep(0.5, 0.72, gn(cw * 0.09 + 31.0));
  float keep = step(h3, smoothstep(0.15, 0.5, forest) * (0.04 + damp * 0.7)) * step(h4, fade * 1.1);
  float hs = (0.6 + 1.1 * h1) * keep;
  vec3 transformed = vec3(pos.x, ground - 0.01, pos.y) + position * hs;

  float kind = floor(h2 * 4.0);
  vec3 capDay = kind < 1.0 ? vec3(0.85, 0.2, 0.16) : (kind < 2.0 ? vec3(0.92, 0.7, 0.3) : (kind < 3.0 ? vec3(0.62, 0.42, 0.78) : vec3(0.35, 0.62, 0.85)));
  vec3 capGlow = kind < 1.0 ? vec3(1.0, 0.35, 0.3) : (kind < 2.0 ? vec3(1.0, 0.75, 0.25) : (kind < 3.0 ? vec3(0.75, 0.4, 1.0) : vec3(0.2, 0.9, 1.0)));
  vec3 stem = vec3(0.88, 0.82, 0.7);
  vGCol = aPart < 0.5 ? stem : (aPart < 1.5 ? capDay : stem * 0.8);
  float pulse = 0.75 + 0.25 * sin(uTime * 1.3 + h1 * 40.0);
  // after dark they glow: caps brightly, stems faintly
  vGEm = (aPart < 0.5 ? capGlow * 0.15 : (aPart < 1.5 ? capGlow * 2.4 : capGlow * 1.2)) * uNight * pulse;
`;function Jo(r,e,t){r.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
${I_}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        objectNormal = vec3(0.0, 1.0, 0.0); // light the blades like the ground beneath them`).replace("#include <begin_vertex>",e==="flower"?U_:e==="shroom"?F_:N_),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGCol;
varying vec3 vGEm;`).replace("#include <color_fragment>","diffuseColor.rgb = vGCol;").replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vGEm;`)},r.customProgramCacheKey=()=>`grass-${e}`}class O_{constructor(e,t,n,i){const s=i.grass||0;if(this.enabled=s>0,this.group=new St,t.add(this.group),!this.enabled)return;const a=44,o=Math.round(132*Math.sqrt(s)),c=Math.round(70*Math.sqrt(s));this.shared={uPlayer:{value:new ee},uTime:{value:0},uWind:n,uNight:{value:0},uWorldHalf:{value:et},uTCell:{value:e.cell},uTexN:{value:e.gridN},uHeightTex:{value:e.heightTex},uColorTex:{value:e.colorTex},uForestTex:{value:e.forestTex}};const l=(p,b,_)=>({...this.shared,uN:{value:p},uCell:{value:b},uRange:{value:_}}),h=P_();h.setAttribute("aCell",Ko(o)),h.instanceCount=o*o;const u=new xt({roughness:.95,side:dt});Jo(u,"grass",l(o,a*2/o,a)),this.grass=new ze(h,u),this.grass.frustumCulled=!1,this.grass.receiveShadow=!0,this.group.add(this.grass);const f=L_();f.setAttribute("aCell",Ko(c)),f.instanceCount=c*c;const d=new xt({roughness:.8,side:dt});Jo(d,"flower",l(c,a*1.7/c,a*.85)),this.flowers=new ze(f,d),this.flowers.frustumCulled=!1,this.flowers.receiveShadow=!0,this.group.add(this.flowers);const g=Math.round(80*Math.sqrt(s)),x=D_();x.setAttribute("aCell",Ko(g)),x.instanceCount=g*g;const m=new xt({roughness:.7,side:dt});Jo(m,"shroom",l(g,a*1.5/g,a*.75)),this.shrooms=new ze(x,m),this.shrooms.frustumCulled=!1,this.shrooms.receiveShadow=!0,this.group.add(this.shrooms),this._gU=u,this._fU=d,this._gUniforms={...this.shared},this.uniformSets=[l(o,a*2/o,a)]}get roots(){return[this.group]}update(e,t,n){this.enabled&&(this.shared.uPlayer.value.set(e.x,e.z),this.shared.uTime.value=t,this.shared.uNight.value=Math.pow(1-n.daylight,1.3))}}let Zo=null;function Wi(r,e){if(!Zo){const n=document.createElement("canvas");n.width=n.height=64;const i=n.getContext("2d"),s=i.createRadialGradient(32,32,2,32,32,30);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.35,"rgba(255,255,255,0.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,64,64),Zo=new Ka(n)}const t=new Ep(new yf({map:Zo,color:r,transparent:!0,blending:Gt,depthWrite:!1}));return t.material.color.multiplyScalar(1.6),t.scale.setScalar(e),t}const z_=`
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    // the tip licks around as it burns
    p.x += sin(uTime * 8.0 + position.y * 4.0) * 0.08 * uv.y;
    p.z += cos(uTime * 6.5 + position.y * 3.0) * 0.06 * uv.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,k_=`
  uniform float uTime;
  uniform float uIntensity;
  varying vec2 vUv;
  void main() {
    float h = vUv.y;
    float flick = 0.75 + 0.25 * sin(uTime * 11.0) * sin(uTime * 5.3 + 1.7);
    vec3 col = mix(vec3(1.0, 0.86, 0.5), vec3(0.95, 0.35, 0.05), smoothstep(0.1, 0.9, h));
    float a = pow(max(1.0 - h, 0.0), 1.4) * uIntensity * flick;
    gl_FragColor = vec4(col * (2.6 - h * 1.1), a);
  }
`;function Yf(r=1){const e=new Ja(.34*r,1.05*r,8,1,!0);e.translate(0,.52*r,0);const t=new Qe({uniforms:{uTime:{value:0},uIntensity:{value:1}},vertexShader:z_,fragmentShader:k_,transparent:!0,blending:Gt,depthWrite:!1,side:dt});return new ze(e,t)}const Qo=90;class Kf{constructor(e){const t=document.createElement("canvas");t.width=t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,3,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new Ka(t),a=new xn(1,1),o=new nn({map:s,color:13225168,transparent:!0,opacity:.32,depthWrite:!1});this.mesh=new Dt(a,o,Qo),this.mesh.instanceMatrix.setUsage(ys),this.mesh.frustumCulled=!1,e.add(this.mesh),this.emitters=[],this.items=Array.from({length:Qo},()=>({life:0})),this._m=new _e,this._q=new bt,this._e=new It,this._v=new R,this._s=new R}addEmitter(e,t,n=1){this.emitters.push({pos:e.clone(),rate:t,scale:n,acc:0})}update(e,t,n){const{_m:i,_q:s,_e:a,_v:o,_s:c}=this;for(const l of this.emitters)for(l.acc+=e*l.rate;l.acc>=1;){l.acc-=1;const h=this.items.find(u=>u.life<=0);if(!h){l.acc=0;break}h.life=1,h.age=0,h.x=l.pos.x+(Math.random()-.5)*.3,h.y=l.pos.y,h.z=l.pos.z+(Math.random()-.5)*.3,h.s=(.5+Math.random()*.3)*l.scale,h.spin=Math.random()*Math.PI*2}for(let l=0;l<Qo;l++){const h=this.items[l];if(h.life>0){if(h.age+=e,h.life=1-h.age/(3.2+h.s*2),h.y+=(.85+h.s*.4)*e,h.x+=t*.9*e,h.z+=Math.sin(n*.6+h.spin)*.15*e,h.life<=0){i.makeScale(0,0,0),this.mesh.setMatrixAt(l,i);continue}const u=h.s*(.6+(1-h.life)*1.6);a.set(0,-n*.4+h.spin,0),s.setFromEuler(a),o.set(h.x,h.y,h.z),c.setScalar(Math.max(.001,u*Math.min(1,h.life*4))),i.compose(o,s,c)}else i.makeScale(0,0,0);this.mesh.setMatrixAt(l,i)}this.mesh.instanceMatrix.needsUpdate=!0}}const Eu=3;class B_{constructor(e,t,n){this.terrain=e,this.pois=n,this.group=new St,t.add(this.group),this.items=[];const i=[10483680,12167423,10475775];for(let s=0;s<Eu;s++){const a=Wi(i[s],2.4-s*.35);a.material.opacity=0,this.group.add(a),this.items.push({spr:a,p:new R,ph:s*2.1,init:!1})}this.light=new Nr(10483680,0,12,1.8),this.group.add(this.light),this.vis=0,this._dir=new R}nearestTarget(e){let t=null,n=1400;for(const i of this.pois.sites){if(i.discovered)continue;const s=Math.hypot(i.x-e.x,i.z-e.z);s<n&&s>45&&(n=s,t=i)}return t?{s:t,d:n}:null}update(e,t,n,i){const s=Math.pow(1-i.daylight,1.5),a=this.nearestTarget(t),o=a?s:0;if(this.vis+=(o-this.vis)*Math.min(1,e*.8),this.group.visible=this.vis>.01,!this.group.visible)return;const c=this._dir.set(0,0,0);a&&c.set(a.s.x-t.x,0,a.s.z-t.z).normalize();for(let l=0;l<Eu;l++){const h=this.items[l],u=12+l*4.5,f=Math.sin(n*.6+h.ph)*3.5,d=t.x+c.x*u-c.z*f,g=t.z+c.z*u+c.x*f;h.init||(h.p.set(d,0,g),h.init=!0),h.p.x+=(d-h.p.x)*Math.min(1,e*1.1),h.p.z+=(g-h.p.z)*Math.min(1,e*1.1);const x=this.terrain.heightAt(h.p.x,h.p.z),m=Math.max(x,0)+1.3+.5*Math.sin(n*1.4+h.ph)+l*.35;h.spr.position.set(h.p.x,m,h.p.z),h.spr.material.opacity=this.vis*(.65+.3*Math.sin(n*2.3+h.ph)),l===0&&(this.light.position.set(h.p.x,m,h.p.z),this.light.intensity=.9*this.vis)}}}const tr=[{body:15327956,head:4537138,leg:4537138,scale:.8,slim:1,flee:5.5},{body:10842429,head:8213803,leg:6242336,scale:1.05,slim:.78,flee:8},{body:9071178,head:6046764,leg:4601382,scale:1.25,slim:1.15,flee:6.5}],H_=15;class G_{constructor(e,t,n){this.terrain=e;const i=Xi((n^305441741)>>>0);this.rand=i;const s=new Cl(.42,1,4,12);s.rotateX(Math.PI/2);const a=new Vn(.36,.38,.56);a.translate(0,0,-.22);const o=new Vn(.15,.62,.15);o.translate(0,-.31,0);const c=()=>new xt({roughness:1}),l=(d,g)=>{const x=e.heightAt(d,g);return x>3&&x<24&&e.slopeAt(d,g)<.18&&e.forestMask(d,g)<.02},h=[];for(let d=0;d<8e3&&h.length<H_;d++){let g,x;if(h.length===0){let m=null;for(let p=20;p<500&&!m;p+=25){const b=Math.max(1,Math.floor(2*Math.PI*p/25));for(let _=0;_<b&&!m;_++){const v=_/b*Math.PI*2,M=Math.cos(v)*p,S=Math.sin(v)*p;l(M,S)&&(m={x:M,z:S})}}if(!m)continue;({x:g,z:x}=m)}else g=(i()*2-1)*et*.85,x=(i()*2-1)*et*.85;l(g,x)&&(h.some(m=>Math.hypot(m.x-g,m.z-x)<180)||h.push({x:g,z:x}))}const u=[];h.forEach((d,g)=>{const x=3+Math.floor(i()*4);for(let m=0;m<x&&u.length<72;m++){const p=i()*Math.PI*2,b=5+i()*13,_=d.x+Math.cos(p)*b,v=d.z+Math.sin(p)*b;e.heightAt(_,v)<2||u.push({x:_,z:v,herd:d,sp:g%tr.length,s:tr[g%tr.length].scale*(.9+i()*.2),yaw:i()*Math.PI*2,state:"idle",timer:i()*3,tx:_,tz:v,speed:0,legPhase:i()*6,head:0})}}),this.animals=u,this.bodyMesh=new Dt(s,c(),u.length),this.headMesh=new Dt(a,c(),u.length),this.legMesh=new Dt(o,c(),u.length*4);for(const d of[this.bodyMesh,this.headMesh,this.legMesh])d.frustumCulled=!1,d.castShadow=!0,t.add(d);const f=new $;u.forEach((d,g)=>{const x=tr[d.sp],m=.88+i()*.24;this.bodyMesh.setColorAt(g,f.setHex(x.body).multiplyScalar(m)),this.headMesh.setColorAt(g,f.setHex(x.head).multiplyScalar(m)),f.setHex(x.leg).multiplyScalar(m);for(let p=0;p<4;p++)this.legMesh.setColorAt(g*4+p,f)}),this.bodyMesh.instanceColor.needsUpdate=!0,this.headMesh.instanceColor.needsUpdate=!0,this.legMesh.instanceColor.needsUpdate=!0,this._m=new _e,this._q=new bt,this._qt=new bt,this._e=new It,this._v=new R,this._s=new R,this._time=0}_pickTarget(e){for(let t=0;t<4;t++){const n=Math.random()*Math.PI*2,i=6+Math.random()*18,s=e.x+Math.cos(n)*i,a=e.z+Math.sin(n)*i;if(this.terrain.heightAt(s,a)>1.5){e.tx=s,e.tz=a;return}}e.tx=e.x,e.tz=e.z}update(e,t,n){this._time=n;const{_m:i,_q:s,_qt:a,_e:o,_v:c,_s:l,terrain:h}=this;for(let u=0;u<this.animals.length;u++){const f=this.animals[u],d=tr[f.sp];if(f.timer-=e,Math.hypot(t.x-f.x,t.z-f.z)<d.flee&&f.state!=="flee"){f.state="flee",f.timer=2.5+Math.random()*2;const T=Math.atan2(f.x-t.x,f.z-t.z);f.tx=f.x+Math.sin(T)*32,f.tz=f.z+Math.cos(T)*32}let x=0;if(f.state==="flee"?(x=5.2,f.timer<=0&&(f.state="idle",f.timer=2+Math.random()*3)):f.state==="wander"?(x=1.5,(Math.hypot(f.tx-f.x,f.tz-f.z)<1.5||f.timer<=0)&&(f.state="idle",f.timer=1+Math.random()*3)):f.state==="graze"?f.timer<=0&&(f.state="wander",f.timer=14,this._pickTarget(f)):f.timer<=0&&(f.state="graze",f.timer=3+Math.random()*4),x>0){const T=f.tx-f.x,C=f.tz-f.z,y=Math.hypot(T,C);if(y>.3){const w=T/y,L=C/y,N=Math.min(y,x*e),B=f.x+w*N,O=f.z+L*N;h.heightAt(B,O)>1.2?(f.x=B,f.z=O):(f.state="idle",f.timer=1+Math.random()*2);const z=Math.atan2(-w,-L),G=Math.atan2(Math.sin(z-f.yaw),Math.cos(z-f.yaw));f.yaw+=G*Math.min(1,5*e)}}f.speed+=(x-f.speed)*Math.min(1,6*e),f.legPhase+=f.speed*e*2.4;const m=f.state==="graze"?1:0;f.head+=(m-f.head)*Math.min(1,3*e);const p=h.heightAt(f.x,f.z),b=d.slim*f.s;o.set(0,f.yaw,0),s.setFromEuler(o),c.set(f.x,p+.64*f.s,f.z),l.set(b,f.s*.95,f.s),i.compose(c,s,l),this.bodyMesh.setMatrixAt(u,i),c.set(0,.86*f.s,-.62*f.s).applyQuaternion(s),c.x+=f.x,c.y+=p,c.z+=f.z;const _=f.state==="graze"?Math.sin(n*7+u*1.7)*.06:0;a.setFromEuler(o.set(-(.2+f.head*1.05)+_,0,0)),a.premultiply(s),l.setScalar(f.s*(f.sp===1?.92:1)),i.compose(c,a,l),this.headMesh.setMatrixAt(u,i);const v=Math.min(1,f.speed/1.4),M=[0,Math.PI,Math.PI,0],S=[[-.26,-.52],[.26,-.52],[-.26,.52],[.26,.52]];for(let T=0;T<4;T++){c.set(S[T][0]*b,.6*f.s,S[T][1]*f.s).applyQuaternion(s),c.x+=f.x,c.y+=p,c.z+=f.z;const C=Math.sin(f.legPhase+M[T])*.5*v;a.setFromEuler(o.set(C,0,0)),a.premultiply(s),l.setScalar(f.s),i.compose(c,a,l),this.legMesh.setMatrixAt(u*4+T,i)}}this.bodyMesh.instanceMatrix.needsUpdate=!0,this.headMesh.instanceMatrix.needsUpdate=!0,this.legMesh.instanceMatrix.needsUpdate=!0}}const V_=.0909,W_=.0455,Cu=.18,Ru=new R(0,1,0),Pu=new R(1,0,0);function j_(){const r=new St;r.rotation.order="YXZ";const e=new St;r.add(e);let t=!1,n=null;const i={};let s=null,a=null,o=null;const c=[],l=Ru.clone(),h=Pu.clone();let u=0,f=0,d=0,g=2.5,x=0;new Or().load("assets/character.glb",T=>{const C=T.scene;C.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.frustumCulled=!0),(y.name==="EyeL"||y.name==="EyeR")&&c.push(y)}),e.add(C),n=new Ym(C);for(const y of T.animations)i[y.name]=n.clipAction(y);if(a=C.getObjectByName("Head"),a){o=a.quaternion.clone();const y=new _e().copy(a.parent.matrixWorld).invert();l.copy(Ru).transformDirection(y),h.copy(Pu).transformDirection(y)}i.idle?.reset().play(),s="idle",t=!0});const m=T=>Math.atan2(Math.sin(T),Math.cos(T)),p=new bt,b=new bt,_=new bt,v=new R;function M(T){T===s||!i[T]||(i[T].reset().fadeIn(Cu).play(),i[s]&&i[s].fadeOut(Cu),s=T)}function S(T,C){let y=u;C.flying||C.inWater||!C.grounded?y=C.lookYaw:C.speed>.5&&(y=Math.atan2(-C.vx,-C.vz));const w=m(y-u);u+=w*Math.min(1,9*T),r.rotation.y=u;let L=0;if(C.flying?L=_i.clamp(C.lookPitch*.85,-1.1,1.1):C.inWater&&(L=-1.15+C.lookPitch*.4),r.rotation.x+=(L-r.rotation.x)*Math.min(1,6*T),t){const N=C.flying?"fly":C.inWater?"swim":C.grounded?C.speed>13.5?"run":C.speed>.5?"walk":"idle":"fall";M(N);const B=N==="walk"?_i.clamp(C.speed*V_,.6,2.2):N==="run"?_i.clamp(C.speed*W_,.7,2):1;if(i[s].timeScale=B,n.update(T),a){const z=_i.clamp(m(C.lookYaw-u),-.62,.62);f+=(z-f)*Math.min(1,8*T),d+=(C.lookPitch*.45-d)*Math.min(1,8*T);const G=a.parent.getWorldQuaternion(p).invert();b.setFromAxisAngle(v.copy(l).applyQuaternion(G),f),_.setFromAxisAngle(v.copy(h).applyQuaternion(G),d),a.quaternion.copy(b).multiply(_).multiply(o)}x>0?(x-=T,x<=0&&(g=2.2+Math.random()*3.4)):(g-=T,g<=0&&(x=.13));const O=x>0?.12:1;for(const z of c)z.scale.y+=(O-z.scale.y)*Math.min(1,30*T)}}return{root:r,update:S,__debug:()=>({ready:t,current:s,clips:Object.keys(i),info:s&&i[s]?{time:+i[s].time.toFixed(3),timeScale:i[s].timeScale,weight:+i[s].getEffectiveWeight().toFixed(2),enabled:i[s].isRunning()}:null,mixerTime:n?+n.time.toFixed(3):null,headQ:a?a.quaternion.toArray().map(T=>+T.toFixed(3)):null,headRest:o?o.toArray().map(T=>+T.toFixed(3)):null,lookYawS:+f.toFixed(3),lookPitchS:+d.toFixed(3),eyes:c.length})}}const X_=1.62,q_=13,Y_=26,Lu=7.5,K_=30,J_=58,Z_=32,Q_=12.5,$_=1.8,$o=.38,Du=1.72,Iu=.65;class ey{constructor(e,t,n,i){this.camera=e,this.terrain=t,this.pos=new R(0,40,0),this.vel=new R,this.yaw=Math.PI*.25,this.pitch=-.08,this.keys=Object.create(null),this.inputEnabled=!1,this.grounded=!1,this.inWater=!1,this.flying=!1,this.view="third",this.camDist=5.5,this.bobPhase=0,this.lift=0,this.model=j_(),i.add(this.model.root),this.locked=!1,this.dragging=!1,this._fwd=new R,this._fwd3=new R,this._right=new R,this._move=new R,addEventListener("keydown",s=>{this.inputEnabled&&(this.keys[s.code]=!0,s.code==="KeyV"&&(this.view=this.view==="third"?"first":"third"),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.code)&&s.preventDefault())}),addEventListener("keyup",s=>{this.keys[s.code]=!1}),addEventListener("blur",()=>{this.keys=Object.create(null)}),n.addEventListener("wheel",s=>{this.inputEnabled&&(this.camDist=Math.max(2.6,Math.min(9.5,this.camDist+s.deltaY*.004)))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.locked=!!document.pointerLockElement}),document.addEventListener("mousemove",s=>{this.inputEnabled&&(this.locked||this.dragging)&&this.look(s.movementX,s.movementY)}),document.addEventListener("mousedown",s=>{s.target===n&&this.inputEnabled&&(this.dragging=!0)}),document.addEventListener("mouseup",()=>{this.dragging=!1})}look(e,t){this.yaw-=e*.0022,this.pitch-=t*.0022,this.pitch=Math.max(-1.45,Math.min(1.35,this.pitch))}spawn(e,t){this.pos.set(e,this.terrain.heightAt(e,t)+.5,t),this.vel.set(0,0,0),this.terrain.colliders?.unstick(this.pos,$o,Du)}update(e){const t=this.keys,n=(t.KeyW||t.ArrowUp?1:0)-(t.KeyS||t.ArrowDown?1:0),i=(t.KeyD||t.ArrowRight?1:0)-(t.KeyA||t.ArrowLeft?1:0),s=!!(t.ShiftLeft||t.ShiftRight),a=Math.sin(this.yaw),o=Math.cos(this.yaw),c=Math.cos(this.pitch),l=Math.sin(this.pitch);this._fwd3.set(-a*c,l,-o*c),this._fwd.set(-a,0,-o),this._right.set(o,0,-a),this.flying=!!t.KeyP;const h=this.terrain.heightAt(this.pos.x,this.pos.z);if(this.inWater=!this.flying&&this.pos.y<pt-.25&&h<pt-.25,this.flying){const M=Math.min(1,3.2*e);if(n!==0||i!==0||t.Space){this._move.set(0,0,0).addScaledVector(this._fwd3,n).addScaledVector(this._right,i),t.Space&&(this._move.y+=.8);const S=s?J_:K_;this._move.lengthSq()>0&&this._move.normalize().multiplyScalar(S),this.vel.lerp(this._move,M)}else this.vel.x*=Math.max(0,1-3*e),this.vel.z*=Math.max(0,1-3*e),this.vel.y+=(3.5-this.vel.y)*M}else if(this._move.set(0,0,0).addScaledVector(this._fwd,n).addScaledVector(this._right,i),this._move.lengthSq()>0&&this._move.normalize(),this.inWater){const M=Math.min(1,10*e);this.vel.x+=(this._move.x*Lu-this.vel.x)*M,this.vel.z+=(this._move.z*Lu-this.vel.z)*M;const S=t.Space?6.5:-1.8;this.vel.y+=(S-this.vel.y)*Math.min(1,3.5*e),t.Space&&this.pos.y>pt-1.1&&(this.vel.y=Math.max(this.vel.y,6))}else{const M=s?Y_:q_,S=Math.min(1,(this.grounded?10:2.5)*e);this.vel.x+=(this._move.x*M-this.vel.x)*S,this.vel.z+=(this._move.z*M-this.vel.z)*S,this.vel.y-=Z_*e,this.grounded&&t.Space&&(this.vel.y=Q_,this.grounded=!1)}const u=this.pos.x+this.vel.x*e,f=this.pos.z+this.vel.z*e,d=Math.hypot(u-this.pos.x,f-this.pos.z);this.grounded&&!this.flying&&d>1e-4?(this.terrain.heightAt(u,f)-this.pos.y)/d>$_?(this.vel.x*=.1,this.vel.z*=.1,this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e):(this.pos.x=u,this.pos.z=f):(this.pos.x=u,this.pos.z=f),this.pos.y+=this.vel.y*e;const g=et*.965;this.pos.x=Math.max(-g,Math.min(g,this.pos.x)),this.pos.z=Math.max(-g,Math.min(g,this.pos.z));const x=this.terrain.colliders;x&&(x.resolve(this.pos,this.vel,$o,this.pos.y,this.pos.y+Du,Iu),this.pos.x=Math.max(-g,Math.min(g,this.pos.x)),this.pos.z=Math.max(-g,Math.min(g,this.pos.z)));let m=this.terrain.heightAt(this.pos.x,this.pos.z);if(x){const M=x.supportAt(this.pos.x,this.pos.z,this.pos.y,$o*.5,Iu);M>m&&(m=M)}this.pos.y<=m?(this.pos.y=m,this.vel.y<0&&(this.vel.y=0),this.grounded=!0):this.grounded&&this.vel.y<=0&&this.pos.y-m<.9&&!this.flying?this.pos.y=m:this.pos.y-m>.05&&(this.grounded=!1);const p=this.inWater?Math.min(1.15,Math.max(0,pt-this.pos.y)*.9+.3):0;this.lift+=(p-this.lift)*Math.min(1,5*e);const b=Math.hypot(this.vel.x,this.vel.z),_=this.vel.length();if(this.view==="third"){const M=this.pos.y+1.45;let S=this.camDist;for(let T=.25;T<=1.001;T+=.15){const C=this.camDist*T,y=this.pos.x-this._fwd3.x*C,w=M-this._fwd3.y*C,L=this.pos.z-this._fwd3.z*C;if(w<this.terrain.heightAt(y,L)+.4||x&&x.blocked(y,w,L)){S=Math.max(.7,C-.35);break}}this.camera.position.set(this.pos.x-this._fwd3.x*S,M-this._fwd3.y*S,this.pos.z-this._fwd3.z*S),this.camera.rotation.set(this.pitch,this.yaw,0),this.model.root.visible=!0}else{this.grounded&&b>.5&&(this.bobPhase+=e*(4+b*.45));const M=Math.sin(this.bobPhase)*.05*Math.min(1,b/9);this.camera.position.set(this.pos.x,this.pos.y+X_+M+this.lift*.6,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0),this.model.root.visible=!1}const v=b>17||this.flying&&_>17?77:70;Math.abs(this.camera.fov-v)>.01&&(this.camera.fov+=(v-this.camera.fov)*Math.min(1,5*e),this.camera.updateProjectionMatrix()),this.model.root.position.set(this.pos.x,this.pos.y+this.lift,this.pos.z),this.model.update(e,{vx:this.vel.x,vz:this.vel.z,vy:this.vel.y,speed:b,grounded:this.grounded,inWater:this.inWater,flying:this.flying,lookYaw:this.yaw,lookPitch:this.pitch,lift:this.lift})}}const Jf={lighthouse:{color:"#ffd25e",label:"lighthouse"},shipwreck:{color:"#c98d5a",label:"shipwreck"},windmill:{color:"#efe6cf",label:"windmill"},ruinTower:{color:"#b5aea1",label:"ruined tower"},stoneCircle:{color:"#8fd8c3",label:"stone circle"},shrine:{color:"#9fd0ff",label:"shrine"},arch:{color:"#d6c8a9",label:"arch"},camp:{color:"#e0995e",label:"camp"},gate:{color:"#9f7fe8",label:"ancient gate"},cityTower:{color:"#b5c2d6",label:"landmark tower"},park:{color:"#8fd8a3",label:"city park"},monument:{color:"#ffd25e",label:"monument"},neon:{color:"#e86fd6",label:"neon district"}};function ws(r,e,t,n,i){const s=Jf[e]?.color??"#fff";switch(r.save(),r.translate(t,n),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=Math.max(1,i*.28),r.lineCap="round",r.lineJoin="round",e){case"lighthouse":r.beginPath(),r.moveTo(-i*.45,i),r.lineTo(i*.45,i),r.lineTo(i*.18,-i*.5),r.lineTo(-i*.18,-i*.5),r.closePath(),r.fill(),r.beginPath(),r.arc(0,-i*.75,i*.3,0,Math.PI*2),r.fill();break;case"windmill":for(let a=0;a<4;a++){const o=Math.PI/4+a*Math.PI/2;r.beginPath(),r.moveTo(0,0),r.lineTo(Math.cos(o)*i,Math.sin(o)*i),r.stroke()}r.beginPath(),r.arc(0,0,i*.24,0,Math.PI*2),r.fill();break;case"camp":r.beginPath(),r.moveTo(-i,i*.8),r.lineTo(0,-i*.8),r.lineTo(i,i*.8),r.closePath(),r.fill();break;case"shipwreck":r.rotate(.5),r.beginPath(),r.moveTo(-i,-i*.1),r.lineTo(i,-i*.35),r.lineTo(i*.7,i*.5),r.lineTo(-i*.7,i*.5),r.closePath(),r.fill(),r.beginPath(),r.moveTo(0,-i*.3),r.lineTo(0,-i),r.stroke();break;case"ruinTower":r.fillRect(-i*.55,-i*.5,i*1.1,i*1.5),r.fillRect(-i*.55,-i,i*.26,i*.5),r.fillRect(i*.29,-i,i*.26,i*.5);break;case"stoneCircle":for(let a=0;a<6;a++){const o=a/6*Math.PI*2;r.beginPath(),r.arc(Math.cos(o)*i*.85,Math.sin(o)*i*.85,i*.22,0,Math.PI*2),r.fill()}break;case"shrine":r.beginPath(),r.moveTo(0,-i),r.lineTo(i*.7,0),r.lineTo(0,i),r.lineTo(-i*.7,0),r.closePath(),r.fill(),r.fillStyle="#08131c",r.beginPath(),r.arc(0,0,i*.22,0,Math.PI*2),r.fill();break;case"arch":r.beginPath(),r.arc(0,i*.55,i*.85,Math.PI,Math.PI*2),r.stroke(),r.fillRect(-i*1,i*.4,i*.4,i*.6),r.fillRect(i*.6,i*.4,i*.4,i*.6);break;case"gate":r.fillRect(-i,-i*.2,i*.55,i*1.2),r.fillRect(i*.45,-i*.2,i*.55,i*1.2),r.fillRect(-i,-i*.75,i*2,i*.55),r.globalAlpha*=.85,r.beginPath(),r.ellipse(0,i*.45,i*.42,i*.62,0,0,Math.PI*2),r.fill(),r.globalAlpha/=.85;break;case"cityTower":r.fillRect(-i*.42,-i*.35,i*.84,i*1.35),r.fillRect(-i*.24,-i*.9,i*.48,i*.55),r.beginPath(),r.moveTo(0,-i*1.1),r.lineTo(0,-i*1.5),r.stroke();break;case"park":r.beginPath(),r.moveTo(0,-i),r.lineTo(i*.8,i*.85),r.lineTo(-i*.8,i*.85),r.closePath(),r.fill(),r.fillRect(-i*.1,i*.5,i*.2,i*.5);break;case"monument":r.beginPath(),r.moveTo(0,-i),r.lineTo(i*.45,i*.7),r.lineTo(-i*.45,i*.7),r.closePath(),r.fill(),r.fillRect(-i*.7,i*.7,i*1.4,i*.3),r.beginPath(),r.arc(0,-i*1.15,i*.22,0,Math.PI*2),r.fill();break;case"neon":r.fillRect(-i,-i*.65,i*2,i*1.3),r.fillStyle="#08131c",r.fillRect(-i*.8,-i*.45,i*.7,i*.9),r.fillRect(i*.1,-i*.45,i*.7,i*.9);break;default:r.beginPath(),r.arc(0,0,i*.6,0,Math.PI*2),r.fill()}r.restore()}const Et=172,Sa=96,ty=1200,ny=["N","NE","E","SE","S","SW","W","NW"];function iy(r,e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),i=n.createImageData(e,e),s=i.data;for(let a=0;a<e;a++)for(let o=0;o<e;o++){const c=-et+(o+.5)/e*Vi,l=-et+(a+.5)/e*Vi,h=r.heightAt(c,l);let u,f,d;if(h<pt){const x=Math.min(1,-h/25);u=46-x*22,f=111-x*50,d=142-x*55}else if(h<pt+2.5)u=216,f=196,d=137;else if(h>95)u=232,f=238,d=242;else if(h>55)u=139,f=131,d=120;else{const x=Math.min(1,h/50);u=95-x*10,f=143-x*8,d=68,r.forestMask(c,l)>.12&&(u*=.78,f*=.82,d*=.78)}const g=(a*e+o)*4;s[g]=u,s[g+1]=f,s[g+2]=d,s[g+3]=255}return n.putImageData(i,0,0),t}class sy{constructor(e){this.terrain=e,this.el={time:document.getElementById("hudTime"),biome:document.getElementById("hudBiome"),pos:document.getElementById("hudPos"),shards:document.getElementById("hudShards"),compass:document.getElementById("compass"),minimap:document.getElementById("minimap"),hint:document.getElementById("hint"),tint:document.getElementById("tint"),toast:document.getElementById("toast")};const t=Math.min(devicePixelRatio,2),n={compass:[340,40],minimap:[Et,Et]};for(const i of["compass","minimap"]){const[s,a]=n[i],o=this.el[i];o.width=s*t,o.height=a*t,this[i+"Ctx"]=o.getContext("2d"),this[i+"Ctx"].scale(t,t)}this.hintTimer=14,this.biomeTimer=0,this.exploration={N:Sa,grid:new Uint8Array(Sa*Sa)},this._fogCanvas=document.createElement("canvas"),this._fogCanvas.width=this._fogCanvas.height=Sa,this.worlds=null,this.orbs=null,this.mapBase=null,this.mapHalf=et,this.fogOn=!0,this._toastTimer=null}bind(e,t){this.worlds=e,this.orbs=t,this.updateShards()}setWorld(e){this.fogOn=e==="nature",this.mapHalf=this.fogOn?et:this.worlds?.city?.mapHalf||ty,this.mapBase=this.worlds.mapBase(Et,e)}sites(){return this.worlds?this.worlds.sites():[]}updateShards(){this.orbs&&this.el.shards&&(this.el.shards.textContent=`${this.orbs.count}/${this.orbs.total}`)}toast(e,t=""){const n=this.el.toast;n&&(n.innerHTML=`<b>${e}</b>${t?`<span>${t}</span>`:""}`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>n.classList.remove("show"),4200))}setUnderwater(e){this.el.tint.style.opacity=e?1:0}update(e,t,n,i){const s=n.time*24,a=Math.floor(s),o=Math.floor((s-a)*60);if(this.el.time.textContent=`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`,this.el.pos.textContent=`${Math.round(t.pos.x)}, ${Math.round(t.pos.z)} · ${Math.round(t.pos.y)} m`,this.biomeTimer-=e,this.biomeTimer<=0){this.biomeTimer=.25;const c=this.worlds?.biomeName(t.pos.x,t.pos.z);this.el.biome.textContent=c||this._biomeNature(t.pos.x,t.pos.z)}if(i&&this.hintTimer>0&&(this.hintTimer-=e,this.hintTimer<=0&&this.el.hint.classList.add("faded")),this.fogOn){const{N:c,grid:l}=this.exploration,h=Vi/c,u=Math.floor((t.pos.x+et)/h),f=Math.floor((t.pos.z+et)/h),d=Math.ceil(70/h);for(let g=-d;g<=d;g++)for(let x=-d;x<=d;x++){const m=u+x,p=f+g;m<0||p<0||m>=c||p>=c||x*x+g*g>d*d||(l[p*c+m]=1)}}this._drawCompass(t),this._drawMinimap(t)}_biomeNature(e,t){const n=this.terrain.heightAt(e,t);return n<pt-.5?"Water":n<pt+2.5?"Shore":n>95?"Snowcaps":n>55||this.terrain.slopeAt(e,t)>.9?"Highlands":this.terrain.forestMask(e,t)>.12?"Forest":"Meadow"}_drawCompass(e){const t=this.compassCtx,n=340,i=40;t.clearRect(0,0,n,i),t.fillStyle="rgba(10, 14, 20, 0.55)",t.beginPath(),t.roundRect(0,0,n,i,10),t.fill();const s=(-e.yaw*180/Math.PI%360+360)%360,a=2.2,o=Math.floor((s-72)/5)*5;t.textAlign="center";for(let c=o;c<=s+72;c+=5){const l=n/2+(c-s)*a,h=1-Math.abs(c-s)/78;if(h<=0)continue;const u=(c%360+360)%360,f=u%45===0;t.strokeStyle=`rgba(255,255,255,${(f?.8:.3)*h})`,t.beginPath(),t.moveTo(l,i-8),t.lineTo(l,i-8-(f?9:4)),t.stroke(),f&&(t.fillStyle=u===0?`rgba(255,120,120,${h})`:`rgba(255,255,255,${.85*h})`,t.font=u%90===0?"700 11px ui-sans-serif, system-ui":"10px ui-sans-serif, system-ui",t.fillText(ny[u/45],l,15))}for(const c of this.sites()){if(!c.discovered)continue;const l=c.x-e.pos.x,h=c.z-e.pos.z;if(Math.hypot(l,h)>500)continue;let d=(Math.atan2(-l,-h)*180/Math.PI%360+360)%360-s;for(;d>180;)d-=360;for(;d<-180;)d+=360;if(Math.abs(d)>68)continue;const g=n/2+d*a,x=1-Math.abs(d)/74;t.globalAlpha=x,ws(t,c.type,g,8,4.2),t.globalAlpha=1}t.fillStyle="rgba(255,255,255,0.9)",t.beginPath(),t.moveTo(n/2,i-4),t.lineTo(n/2-4,i),t.lineTo(n/2+4,i),t.fill()}_drawMinimap(e){const t=this.minimapCtx,n=this.mapHalf,i=n*2;if(t.clearRect(0,0,Et,Et),t.drawImage(this.mapBase,0,0,Et,Et),this.fogOn){const{N:c,grid:l}=this.exploration,h=this._fogCanvas.getContext("2d");h.clearRect(0,0,c,c),h.fillStyle="rgba(7, 11, 18, 0.82)";for(let u=0;u<c;u++)for(let f=0;f<c;f++)l[u*c+f]||h.fillRect(f,u,1,1);t.imageSmoothingEnabled=!0,t.drawImage(this._fogCanvas,0,0,Et,Et)}const s=(e.pos.x+n)/i*Et,a=(e.pos.z+n)/i*Et;for(const c of this.sites()){if(!c.discovered)continue;const l=(c.x+n)/i*Et,h=(c.z+n)/i*Et;l<-8||h<-8||l>Et+8||h>Et+8||(t.fillStyle="rgba(5, 9, 15, 0.5)",t.beginPath(),t.arc(l,h,6,0,Math.PI*2),t.fill(),ws(t,c.type,l,h,4))}const o=this.worlds?.gateMarker?.();if(o){let c=(o.x+n)/i*Et,l=(o.z+n)/i*Et;if(c>-30&&l>-30&&c<Et+30&&l<Et+30){c=Math.max(13,Math.min(Et-13,c)),l=Math.max(13,Math.min(Et-13,l));const h=performance.now()*.004,u=10+Math.sin(h)*2.5;t.strokeStyle="rgba(203, 184, 245, 0.95)",t.lineWidth=2,t.beginPath(),t.arc(c,l,u,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(203, 184, 245, 0.4)",t.lineWidth=1,t.beginPath(),t.arc(c,l,u+4,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(10, 8, 20, 0.85)",t.beginPath(),t.arc(c,l,8.5,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(159, 127, 232, 0.9)",t.lineWidth=1.5,t.beginPath(),t.arc(c,l,8.5,0,Math.PI*2),t.stroke(),ws(t,"gate",c,l,5.5)}}t.save(),t.translate(s,a),t.rotate(-e.yaw),t.fillStyle="rgba(255,255,255,0.28)",t.beginPath(),t.moveTo(0,0),t.arc(0,0,22,-Math.PI/2-.5,-Math.PI/2+.5),t.closePath(),t.fill(),t.restore(),t.fillStyle="#fff",t.strokeStyle="rgba(0,0,0,0.6)",t.lineWidth=1.5,t.beginPath(),t.arc(s,a,3,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="rgba(255,255,255,0.85)",t.font="700 11px ui-sans-serif, system-ui",t.textAlign="left",t.fillText("N ↑",8,16)}}const ry=["ruin_tower","lighthouse","windmill_body","windmill_blades","stone_arch","shipwreck","tent","campfire","monolith","shrine_pedestal"],ay={lighthouse:{count:2,discoverR:70,color:16765534,place:(r,e,t)=>{const n=r.heightAt(e,t);if(n<16||n>64||r.slopeAt(e,t)>.42)return!1;for(let i=0;i<8;i++){const s=i/8*Math.PI*2;if(r.heightAt(e+Math.cos(s)*90,t+Math.sin(s)*90)<pt||r.heightAt(e+Math.cos(s)*140,t+Math.sin(s)*140)<pt)return!0}return!1},names:[["Gull Point","Beacon Bay","Fogwatch","Saltwick","Lantern Shore"],["Lighthouse"]],flavor:["Its lamp has turned for longer than anyone remembers.","Sailors say the keeper left one night and never came back."]},shipwreck:{count:2,discoverR:60,color:13208922,place:(r,e,t)=>{const n=r.heightAt(e,t);return n>.1&&n<1.8&&r.slopeAt(e,t)<.45},names:[["The Marlin","The Merrow","Lady Vera","The Tidesong","The Halcyon"],["Shipwreck"]],flavor:["The tide buried her bones, then dug them up again.","Her bell still rings somewhere under the sand."]},windmill:{count:2,discoverR:65,color:15261122,place:(r,e,t)=>{const n=r.heightAt(e,t);return n>12&&n<42&&r.slopeAt(e,t)<.3&&r.forestMask(e,t)<.05},names:[["Millers'","Old","Highfield","Westmeadow","Stonehill"],["Windmill"]],flavor:["The sails still turn, though the miller is long gone.","On windy nights the old stones hum a low note."]},ruinTower:{count:2,discoverR:65,color:10327690,place:(r,e,t)=>{const n=r.heightAt(e,t);return n>8&&n<58&&r.slopeAt(e,t)<.45},names:[["Broken","Hollow","Elder","Greyspire","Forgotten"],["Watchtower","Keep","Tower"]],flavor:["Someone lit torches here. Someone still does.","The stairs ended half-way up, centuries ago."]},stoneCircle:{count:2,discoverR:60,color:9427139,place:(r,e,t)=>{const n=r.heightAt(e,t);return n>4&&n<30&&r.slopeAt(e,t)<.22&&r.forestMask(e,t)<.12},names:[["Whispering","Standing","Elderfire","Moonfall","Singers'"],["Stones","Circle","Ring"]],flavor:["The stones hum faintly when the moon is high.","Nine stones, eight keepers — the ninth walked away."]},shrine:{count:2,discoverR:55,color:10473727,place:(r,e,t)=>{const n=r.heightAt(e,t);return n>6&&n<42&&r.slopeAt(e,t)<.32&&r.forestMask(e,t)>.1},names:[["Stillwater","Greenhollow","Firstlight","Deepwood","Quiet Pool"],["Shrine"]],flavor:["Something bright hovers above the pedestal, patient.","Leave an offering, or don't — it doesn't seem to mind."]},arch:{count:2,discoverR:75,color:11839117,place:(r,e,t)=>r.heightAt(e,t)>42&&r.slopeAt(e,t)<.55,names:[["Windgate","Eagle","Giants'","Skyhole","Highpass"],["Arch","Gate","Span"]],flavor:["The wind sings a single note as it pours through.","From beneath it, the whole valley lies open like a map."]},camp:{count:2,discoverR:55,color:14719326,place:(r,e,t)=>{const n=r.heightAt(e,t);return n>5&&n<24&&r.slopeAt(e,t)<.2&&r.forestMask(e,t)<.08},names:[["Foxglove","Two Rivers","Herder's","Pine Edge","Starfall"],["Camp","Campsite","Rest"]],flavor:["The fire is banked, but recent. Someone circles back.","A kettle, three cups, and no owners in sight."]}};async function oy(){const r=new Or,e=await Promise.all(ry.map(t=>r.loadAsync(`assets/${t}.glb`).then(n=>[t,n.scene]).catch(()=>(console.warn(`[pois] asset missing: ${t}.glb (run tools/build_assets.py)`),[t,null]))));return Object.fromEntries(e)}class cy{constructor(e,t,n,i,s){this.terrain=e,this.scene=t,this.env=s,this.sites=[],this.onDiscover=null;const a=Xi((n^1511506142)>>>0),o=et*.86;for(const[l,h]of Object.entries(ay)){let u=0;for(let f=0;f<22e3&&u<h.count;f++){const d=(a()*2-1)*o,g=(a()*2-1)*o;if(!h.place(e,d,g)||this.sites.some(p=>Math.hypot(p.x-d,p.z-g)<340))continue;const[x,m]=h.names;this.sites.push({id:`${l}-${u}`,type:l,x:d,z:g,y:e.heightAt(d,g),name:`${x[Math.floor(a()*x.length)]} ${m[Math.floor(a()*m.length)]}`,flavor:h.flavor[Math.floor(a()*h.flavor.length)],color:h.color,discoverR:h.discoverR,discovered:!1,rand:a}),u++}}const c=l=>{const h=i[l];if(!h)return null;const u=h.clone(!0);return u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),u};this.smoke=new Kf(t),this.flames=[],this.spinners=[],this.beams=[],this.crystals=[],this.banners=[],this.colliders=new Ns,this._v=new R;for(const l of this.sites){const h=new St;h.position.set(l.x,l.y-.15,l.z),l.group=h,t.add(h);const u=l.rand;this[`_build_${l.type}`]?.(l,h,c,u)}}_cyl(e,t,n,i,s){this.colliders.addCylinder(e.x+t,e.z+n,i,e.y-.15,e.y-.15+s)}_box(e,t,n,i,s,a,o=0,c=0){this.colliders.addBox(e.x+t,e.z+n,i,s,e.y-.15+c,e.y-.15+c+a,o)}_build_lighthouse(e,t,n,i){const s=n("lighthouse");s&&(s.rotation.y=i()*Math.PI*2,t.add(s)),this._cyl(e,0,0,3,14);const a=new St;a.position.y=12.35;const o=new Ja(20,240,12,1,!0);o.rotateX(Math.PI/2),o.translate(0,0,-120);const c=new nn({color:16771496,transparent:!0,opacity:0,blending:Gt,depthWrite:!1,side:dt,fog:!1});a.add(new ze(o,c));const l=Wi(16771496,6);l.position.y=12.35-0,t.add(l),t.add(a),this.beams.push({group:a,coneMat:c,halo:l})}_build_shipwreck(e,t,n,i){const s=n("shipwreck"),a=i()*Math.PI*2;s&&(s.rotation.set(.12,a,.2),s.position.y-=.5,t.add(s)),this._box(e,0,0,4.5,1.7,2,a);const o=new xt({color:6048307,roughness:1}),c=new Vn(2.2,.12,.4);for(let u=0;u<5;u++){const f=new ze(c,o),d=i()*Math.PI*2,g=4+i()*6;f.position.set(Math.cos(d)*g,-.05+i()*.15,Math.sin(d)*g),f.rotation.set(i()*.4,i()*Math.PI*2,i()*.5),f.castShadow=!0,t.add(f)}const l=new ze(new Gn(.5,.44,1,9),new xt({color:7031347,roughness:1})),h=i()*Math.PI*2;l.position.set(Math.cos(h)*5,.4,Math.sin(h)*5),l.rotation.z=.35,l.castShadow=!0,t.add(l)}_build_windmill(e,t,n,i){const s=new St,a=i()*Math.PI*2;s.rotation.y=a,t.add(s),this._cyl(e,0,0,3,11);const o=n("windmill_body");o&&s.add(o);const c=n("windmill_blades");if(c){const l=new St;l.position.set(0,9.6,-2.15),l.add(c),s.add(l),this.spinners.push({obj:c,axis:"z",speed:.55+i()*.2,dir:i()>.5?1:-1})}}_build_ruinTower(e,t,n,i){const s=n("ruin_tower");s&&(s.rotation.y=i()*Math.PI*2,t.add(s)),this._cyl(e,0,0,3.05,9);const a=new xt({color:4864038,roughness:1});for(const o of[-1,1]){const c=new ze(new Gn(.07,.09,2.2,6),a);c.position.set(o*2.2,.95,3.6),c.castShadow=!0,t.add(c),this.addFlame(t,o*2.2,2.15,3.6,.7)}}_build_stoneCircle(e,t,n,i){for(let l=0;l<9;l++){const h=l/9*Math.PI*2+i()*.12,u=n("monolith");if(!u)break;const f=i()*Math.PI*2,d=.85+i()*.3;u.position.set(Math.cos(h)*6.5,0,Math.sin(h)*6.5),u.rotation.set((i()-.5)*.12,f,(i()-.5)*.12),u.scale.setScalar(d),t.add(u),this._box(e,Math.cos(h)*6.5,Math.sin(h)*6.5,.78*d,.46*d,3.6*d,f)}const o=new ze(new Nl(6.5,.07,6,40),new nn({color:8381384,transparent:!0,opacity:0,blending:Gt,depthWrite:!1}));o.rotation.x=Math.PI/2,o.position.y=.12,t.add(o),this.beams.push({group:null,coneMat:o.material,halo:null,isRing:!0});const c=new xt({color:8682863,roughness:1,flatShading:!0});for(let l=0;l<3;l++){const h=new ze(new xr(.42-l*.1,0),c);h.position.set((i()-.5)*.1,.25+l*.5,(i()-.5)*.1),h.castShadow=!0,t.add(h)}this._cyl(e,0,0,.5,1.2)}_build_shrine(e,t,n,i){const s=n("shrine_pedestal");s&&(s.rotation.y=i()*Math.PI*2,t.add(s)),this._cyl(e,0,0,1.05,1.5);const a=[8381384,11902463,16765534,9422847],o=new $(a[Math.floor(i()*a.length)]),c=new ze(new Il(.5),new xt({color:o,emissive:o,emissiveIntensity:3.4,roughness:.25,flatShading:!0})),l=2.5;c.position.y=l,c.castShadow=!0;const h=Wi(o.getHex(),3.2);h.position.y=l;const u=new Nr(o.getHex(),0,16,1.8);u.position.y=l+.2,t.add(c,h,u),this.crystals.push({mesh:c,halo:h,light:u,baseY:l,phase:i()*Math.PI*2})}_build_arch(e,t,n,i){const s=n("stone_arch"),a=i()*Math.PI*2;s&&(s.rotation.y=a,t.add(s));const o=Math.cos(a),c=Math.sin(a);for(const h of[-7.4,7.4])this._cyl(e,h*o-1.5*c,h*c+1.5*o,2.5,4.5);const l=new xt({color:8155747,roughness:1,flatShading:!0});for(let h=0;h<4;h++){const u=new ze(new xr(.5+i()*.7,0),l),f=i()*Math.PI*2,d=8+i()*5;u.position.set(Math.cos(f)*d,.2,Math.sin(f)*d),u.castShadow=!0,t.add(u),this._cyl(e,Math.cos(f)*d,Math.sin(f)*d,.7,.9)}for(let h=0;h<3;h++){const u=new ze(new xr(.34-h*.08,0),l);u.position.set(9,.2+h*.42,-3),t.add(u)}this._cyl(e,9,-3,.45,1.3)}_build_camp(e,t,n,i){const s=n("tent"),a=i()*Math.PI*2;s&&(s.rotation.y=a,t.add(s)),this._box(e,0,0,1.35,1.6,1.95,a);const o=n("tent");if(o){o.scale.setScalar(.78);const x=i()*Math.PI*2;o.position.set(Math.cos(x)*6.5,0,Math.sin(x)*6.5);const m=i()*Math.PI*2;o.rotation.y=m,t.add(o),this._box(e,Math.cos(x)*6.5,Math.sin(x)*6.5,1.05,1.25,1.5,m)}const c=n("campfire");c&&t.add(c),this._cyl(e,0,0,.95,.3),this.addFlame(t,0,.15,0,1),this.smoke.addEmitter(new R(e.x,e.y+1.5,e.z),1.6,1);const l=new xt({color:7031347,roughness:1}),h=new Vn(.9,.9,.9);for(let x=0;x<2;x++){const m=new ze(h,l),p=i()*Math.PI*2;m.position.set(Math.cos(p)*3.4,.45+x*.9,Math.sin(p)*3.4),m.rotation.y=i()*Math.PI,m.castShadow=!0,t.add(m),this._cyl(e,Math.cos(p)*3.4,Math.sin(p)*3.4,.55,.9+x*.9)}const u=new ze(new Gn(.06,.08,4.2,6),l);u.position.set(4.4,2.1,0),u.castShadow=!0,t.add(u),this._cyl(e,4.4,0,.1,4.2);const f=new xn(1.5,1,6,3);f.translate(.75,-.5,0);const d=new xt({color:13063727,roughness:1,side:dt}),g=new ze(f,d);g.position.set(4.4,4,0),t.add(g),this.banners.push({mesh:g,base:i()*Math.PI*2,phase:i()*10})}addFlame(e,t,n,i,s){const a=Yf(s);a.position.set(t,n,i),e.add(a);const o=new Nr(16751172,0,20,1.6);o.position.set(t,n+.6,i),e.add(o),this.flames.push({mesh:a,light:o,phase:Math.random()*10}),this.smoke.addEmitter(new R(e.position.x+t,e.position.y+n+1*s,e.position.z+i),s*1.1,s)}discover(e){e.discovered=!0,this.onDiscover?.(e)}discoverAll(){for(const e of this.sites)e.discovered=!0}update(e,t,n,i){const s=1-i.daylight;for(const a of this.sites){if(a.discovered)continue;Math.hypot(t.x-a.x,t.z-a.z)<a.discoverR&&Math.abs(t.y-a.y)<60&&this.discover(a)}for(const a of this.spinners)a.obj.rotation[a.axis]+=e*a.speed*(.4+this.env.wind.value*.6)*a.dir;for(const a of this.banners)a.mesh.rotation.y=a.base+Math.sin(n*1.8+a.phase)*(.18+this.env.wind.value*.3),a.mesh.rotation.z=Math.sin(n*2.6+a.phase)*.08*this.env.wind.value;for(const a of this.flames){a.mesh.material.uniforms.uTime.value=n+a.phase;const o=.75+.35*Math.sin(n*11+a.phase*7)*Math.sin(n*5.1+a.phase);a.mesh.material.uniforms.uIntensity.value=.85*o;const c=a.mesh.getWorldPosition(this._v).distanceTo(t)<260;a.light.visible=c,a.light.intensity=c?(.35+2.6*s)*o:0}for(const a of this.beams){a.group&&(a.group.rotation.y=n*.55);const o=Math.pow(s,1.4);a.isRing?a.coneMat.opacity=o*.35*(.8+.2*Math.sin(n*1.5)):a.coneMat.opacity=o*.22,a.halo&&(a.halo.material.opacity=Math.min(1,.15+o))}for(const a of this.crystals){a.mesh.rotation.y+=e*.8,a.mesh.position.y=a.baseY+Math.sin(n*1.3+a.phase)*.18,a.halo.position.y=a.mesh.position.y;const o=.85+.15*Math.sin(n*2.2+a.phase),c=a.mesh.getWorldPosition(this._v).distanceTo(t)<260;a.light.visible=c,a.light.intensity=c?s*1.6*o:0,a.mesh.material.emissiveIntensity=2+s*2.6*o}this.smoke.update(e,this.env.wind.value,n)}}async function ly(r,e,t,n){const i=await oy();return new cy(r,e,t,i,n)}const hy=40,Di=[9169407,10875080,13677567,16767400];class uy{constructor(e,t,n,i,s=[]){this.terrain=e,this.onCollect=null,this.onComplete=null,this.collected=new Set(s);const a=Xi((n^196463229)>>>0),o=[];for(const u of i.sites){const f=a()*Math.PI*2,d=9+a()*16;o.push({x:u.x+Math.cos(f)*d,z:u.z+Math.sin(f)*d,site:u})}let c=0;for(;o.length<hy&&c++<2e4;){const u=(a()*2-1)*et*.88,f=(a()*2-1)*et*.88;e.heightAt(u,f)<pt+1.2||e.slopeAt(u,f)>.6||o.some(g=>Math.hypot(g.x-u,g.z-f)<90)||o.push({x:u,z:f,site:null})}const l=new Dl([new ee(0,-.52),new ee(.2,-.16),new ee(.2,.18),new ee(0,.62)],6),h=new xt({color:16777215,roughness:.12,flatShading:!0});h.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float rim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.0);
         totalEmissiveRadiance = diffuseColor.rgb * (1.6 + 2.4 * rim);`)},this.mesh=new Dt(l,h,o.length),this.mesh.instanceMatrix.setUsage(ys),this.mesh.frustumCulled=!1,t.add(this.mesh),o.forEach((u,f)=>this.mesh.setColorAt(f,new $(Di[f%Di.length]))),this.mesh.instanceColor.needsUpdate=!0,this._initSparkles(t,o,Di),this._initBurst(t),this.halos=o.map((u,f)=>{const d=Di[f%Di.length],g=Wi(d,2.2);return g.position.set(u.x,e.heightAt(u.x,u.z)+1.4,u.z),t.add(g),g}),this.items=o.map((u,f)=>({x:u.x,z:u.z,y:e.heightAt(u.x,u.z)+1.4,phase:a()*Math.PI*2,id:f,site:u.site,taken:this.collected.has(f)})),this.total=this.items.length,this._m=new _e,this._q=new bt,this._e=new It,this._v=new R,this._s=new R,this._done=!1}get count(){return this.collected.size}collectAll(){for(const e of this.items)e.taken||(e.taken=!0,this.collected.add(e.id))}update(e,t,n){for(let i=0;i<this.items.length;i++){const s=this.items[i];if(s.taken){this._m.makeScale(0,0,0),this.mesh.setMatrixAt(i,this._m),this.halos[i].visible=!1;continue}if(!this._done){const o=t.x-s.x,c=t.y+1-s.y,l=t.z-s.z;if(o*o+c*c+l*l<6.2){s.taken=!0,this.collected.add(s.id),this._burst(s.x,s.y+Math.sin(n*1.6+s.phase)*.22,s.z,Di[s.id%Di.length]),this.onCollect?.(s),this.collected.size>=this.total&&(this._done=!0,this.onComplete?.());continue}}const a=s.y+Math.sin(n*1.6+s.phase)*.22;this._e.set(n*.9+s.phase,n*1.3+s.phase,0),this._q.setFromEuler(this._e),this._v.set(s.x,a,s.z),this._s.setScalar(1),this._m.compose(this._v,this._q,this._s),this.mesh.setMatrixAt(i,this._m),this.halos[i].position.y=a,this.halos[i].material.opacity=.22+.1*Math.sin(n*2+s.phase)}this.mesh.instanceMatrix.needsUpdate=!0,this._updateSparkles(n),this._updateBurst(e)}_initSparkles(e,t,n){const s=t.length*5;this._sp={n:s,per:5,centers:t};const a=new Float32Array(s*3),o=new Float32Array(s*3),c=new $;for(let h=0;h<s;h++)c.setHex(n[Math.floor(h/5)%n.length]).multiplyScalar(2.6),o.set([c.r,c.g,c.b],h*3);const l=new nt;l.setAttribute("position",new Ye(a,3)),l.setAttribute("color",new Ye(o,3)),this._spPos=a,this.sparkles=new Hi(l,new Qe({uniforms:{uPR:{value:Math.min(devicePixelRatio,2)}},vertexShader:`
        attribute vec3 color; varying vec3 vC; uniform float uPR;
        void main() {
          vC = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = min(uPR * 38.0 / -mv.z, 14.0 * uPR);
        }`,fragmentShader:`
        varying vec3 vC;
        void main() {
          vec2 q = gl_PointCoord * 2.0 - 1.0;
          float d = exp(-dot(q, q) * 4.0);
          gl_FragColor = vec4(vC * d, 1.0);
        }`,transparent:!0,blending:Gt,depthWrite:!1,fog:!1})),this.sparkles.frustumCulled=!1,e.add(this.sparkles)}_updateSparkles(e){const{n:t,per:n}=this._sp,i=this._spPos;for(let s=0;s<t;s++){const a=this.items[Math.floor(s/n)];if(a.taken){i[s*3+1]=-1e3;continue}const o=s%n,c=e*(.9+o*.17)+a.phase*3+o*1.26,l=.62+.18*Math.sin(e*1.3+o),h=a.y+Math.sin(e*1.6+a.phase)*.22+Math.sin(c*1.7)*.4;i[s*3]=a.x+Math.cos(c)*l,i[s*3+1]=h,i[s*3+2]=a.z+Math.sin(c)*l}this.sparkles.geometry.attributes.position.needsUpdate=!0}_initBurst(e){this._b={cap:160,next:0,rings:[]};const n=new Float32Array(480).fill(-1e3),i=new Float32Array(480);this._bVel=new Float32Array(480),this._bLife=new Float32Array(160);const s=new nt;s.setAttribute("position",new Ye(n,3)),s.setAttribute("color",new Ye(i,3)),this._bPos=n,this._bCol=i,this.burstPts=new Hi(s,this.sparkles.material.clone()),this.burstPts.frustumCulled=!1,e.add(this.burstPts);for(let a=0;a<4;a++){const o=Wi(16777215,1);o.visible=!1,e.add(o),this._b.rings.push({spr:o,age:9})}}_burst(e,t,n,i){const s=this._b,a=new $(i).multiplyScalar(3);for(let c=0;c<28;c++){const l=s.next;s.next=(s.next+1)%s.cap;const h=Math.random()*Math.PI*2,u=(Math.random()-.2)*1.2,f=2.5+Math.random()*4.5;this._bPos.set([e,t,n],l*3),this._bVel.set([Math.cos(h)*Math.cos(u)*f,Math.sin(u)*f+1.5,Math.sin(h)*Math.cos(u)*f],l*3),this._bCol.set([a.r,a.g,a.b],l*3),this._bLife[l]=.7+Math.random()*.5}const o=s.rings.find(c=>c.age>1)||s.rings[0];o.age=0,o.spr.position.set(e,t,n),o.spr.material.color.copy(a).multiplyScalar(.8),o.spr.visible=!0}_updateBurst(e){const t=this._b,n=this._bPos,i=this._bVel,s=this._bCol;let a=!1;for(let o=0;o<t.cap;o++)this._bLife[o]<=0||(a=!0,this._bLife[o]-=e,i[o*3+1]-=5.5*e,n[o*3]+=i[o*3]*e,n[o*3+1]+=i[o*3+1]*e,n[o*3+2]+=i[o*3+2]*e,Math.max(0,this._bLife[o]/1.2),s[o*3]*=.97,s[o*3+1]*=.97,s[o*3+2]*=.97,this._bLife[o]<=0&&(n[o*3+1]=-1e3));a&&(this.burstPts.geometry.attributes.position.needsUpdate=!0,this.burstPts.geometry.attributes.color.needsUpdate=!0);for(const o of t.rings){if(o.age>1){o.spr.visible=!1;continue}o.age+=e*1.8,o.spr.scale.setScalar(.6+o.age*6.5),o.spr.material.opacity=Math.max(0,1-o.age)}}}function Nu(r,e,t,n){return r.onBeforeCompile=i=>{i.uniforms.uTime=e,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3][0] * 0.37 + instanceMatrix[3][2] * 0.29;
        float flap = sin(uTime * ${n.toFixed(1)} + ph);
        transformed.y += abs(transformed.x) * flap * ${t.toFixed(2)};
      #endif
    `)},r}function fy(){const r=new Float32Array([0,0,-.55,-.07,.03,.1,.07,.03,.1,0,0,-.55,.07,-.02,.1,-.07,-.02,.1,-.07,.02,.05,-.75,.05,.28,-.72,0,-.05,.07,.02,.05,.72,0,-.05,.75,.05,.28]),e=new nt;return e.setAttribute("position",new Ye(r,3)),e.computeVertexNormals(),e}const ec=70,wa=46;class dy{constructor(e,t,n,i,s){this.terrain=e,this.camera=s;const a=Xi((n^54241237)>>>0);this.flocks=[];const o=Nu(new xt({color:3028032,roughness:1,side:dt}),i,.85,9);let c=0;for(let f=0;f<6;f++){let d=0,g=0,x=!1;for(let b=0;b<400&&!x;b++)d=(a()*2-1)*et*.7,g=(a()*2-1)*et*.7,x=e.heightAt(d,g)>pt+2;const m=6+Math.floor(a()*4),p={cx:d,cz:g,cy:e.heightAt(d,g)+32+a()*26,r:26+a()*34,w:(.1+a()*.1)*(a()>.5?1:-1),drift:a()*Math.PI*2,members:[]};for(let b=0;b<m;b++)p.members.push({ang:a()*Math.PI*2,rr:p.r*(.65+a()*.45),yy:(a()-.5)*7,ph:a()*Math.PI*2,sz:.75+a()*.5});c+=m,this.flocks.push(p)}this.birdMesh=new Dt(fy(),o,c),this.birdMesh.instanceMatrix.setUsage(ys),this.birdMesh.frustumCulled=!1,t.add(this.birdMesh),this.fireflyMesh=new Dt(new xn(.16,.16),new nn({color:new $(14155678).multiplyScalar(2.8),transparent:!0,opacity:0,blending:Gt,depthWrite:!1}),ec),this.fireflyMesh.instanceMatrix.setUsage(ys),this.fireflyMesh.frustumCulled=!1,t.add(this.fireflyMesh),this.butterflyMesh=new Dt(new xn(.26,.2),Nu(new xt({color:16777215,roughness:1,side:dt,transparent:!0,opacity:.95}),i,1.35,16),wa),this.butterflyMesh.instanceMatrix.setUsage(ys),this.butterflyMesh.frustumCulled=!1,t.add(this.butterflyMesh);const l=[15239002,15253850,10473727,13733846,15921906],h=new $;for(let f=0;f<wa;f++)this.butterflyMesh.setColorAt(f,h.setHex(l[f%l.length]));this.butterflyMesh.instanceColor.needsUpdate=!0;const u=f=>({x:0,y:-100,z:0,ph:a()*Math.PI*2,w1:.6+a()*.8,w2:.6+a()*.8,sp:.5+a()*.8,firefly:f});this.fireflies=Array.from({length:ec},()=>u(!0)),this.butterflies=Array.from({length:wa},()=>u(!1)),this._m=new _e,this._q=new bt,this._e=new It,this._v=new R,this._s=new R}_respawnBug(e,t,n){const i=Math.random()*Math.PI*2,s=8+Math.random()*26;e.x=t+Math.cos(i)*s,e.z=n+Math.sin(i)*s;const a=this.terrain.heightAt(e.x,e.z);if(a<pt+.4){e.y=-100;return}e.y=a+(e.firefly?.6+Math.random()*1.8:.8+Math.random()*1.6)}update(e,t,n,i){const{_m:s,_q:a,_e:o,_v:c,_s:l}=this;let h=0;for(const d of this.flocks){d.drift+=e*.05,d.cx+=Math.cos(d.drift)*e*1.2,d.cz+=Math.sin(d.drift*.8)*e*1.2;for(const g of d.members){g.ang+=d.w*e;const x=d.cx+Math.cos(g.ang)*g.rr,m=d.cz+Math.sin(g.ang)*g.rr,p=d.cy+g.yy+Math.sin(n*.7+g.ph)*1.5,b=g.ang+(d.w>0?Math.PI/2:-Math.PI/2);o.set(0,-b,Math.sin(n*9+g.ph)*.25+.3),a.setFromEuler(o),c.set(x,p,m),l.setScalar(g.sz),s.compose(c,a,l),this.birdMesh.setMatrixAt(h++,s)}}this.birdMesh.instanceMatrix.needsUpdate=!0,this.birdMesh.visible=i>.25;const u=1-i,f=u>.45;this.fireflyMesh.material.opacity=Math.min(1,Math.pow(u,2))*.95,this.butterflyMesh.visible=i>.4;for(let d=0;d<ec;d++){const g=this.fireflies[d];if(!f||g.y<-50){!f&&Math.random()<.02&&this._respawnBug(g,t.x,t.z),s.makeScale(0,0,0),this.fireflyMesh.setMatrixAt(d,s);continue}g.x+=Math.sin(n*g.w1+g.ph)*g.sp*e,g.z+=Math.cos(n*g.w2+g.ph*1.3)*g.sp*e;const x=g.y+Math.sin(n*.9+g.ph)*.5,m=.55+.45*Math.sin(n*2.4+g.ph*3);c.set(g.x,x,g.z),l.setScalar(m),s.compose(c,this.camera.quaternion,l),this.fireflyMesh.setMatrixAt(d,s),Math.hypot(g.x-t.x,g.z-t.z)>60&&this._respawnBug(g,t.x,t.z)}this.fireflyMesh.instanceMatrix.needsUpdate=!0;for(let d=0;d<wa;d++){const g=this.butterflies[d];if(g.y<-50){Math.random()<.02&&this._respawnBug(g,t.x,t.z),s.makeScale(0,0,0),this.butterflyMesh.setMatrixAt(d,s);continue}g.x+=Math.sin(n*g.w1+g.ph)*g.sp*e,g.z+=Math.cos(n*g.w2+g.ph*1.3)*g.sp*e;const x=g.y+Math.abs(Math.sin(n*3+g.ph))*.35;o.set(-Math.PI/2,0,Math.sin(n+g.ph)*.4),a.setFromEuler(o),c.set(g.x,x,g.z),l.setScalar(1),s.compose(c,a,l),this.butterflyMesh.setMatrixAt(d,s),Math.hypot(g.x-t.x,g.z-t.z)>60&&this._respawnBug(g,t.x,t.z)}this.butterflyMesh.instanceMatrix.needsUpdate=!0}}const en=540;class py{constructor(e,t,n,i){this.worlds=e,this.orbs=t,this.exploration=n,this.onReset=i,this.mapOpen=!1,this.journalOpen=!1,this.resetArmed=!1,this.mapBase=null,this._buildDom(),this.setWorld(e.mode),addEventListener("keydown",s=>{s.code==="KeyM"&&this.toggleMap(),s.code==="Tab"&&(s.preventDefault(),this.toggleJournal()),s.code==="Escape"&&(this.mapOpen||this.journalOpen)&&this.closeAll()})}_buildDom(){this.mapEl=document.createElement("div"),this.mapEl.id="bigmap",this.mapEl.className="panel hidden",this.mapEl.innerHTML=`
      <div class="panel-head">
        <span class="panel-title">Map of the Wander</span>
        <span class="panel-sub" id="mapProgress"></span>
      </div>
      <div class="map-wrap"><canvas id="mapCanvas" width="${en}" height="${en}"></canvas></div>
      <div class="panel-foot">M or Esc to close · markers appear as you explore</div>`,document.body.appendChild(this.mapEl),this.mapCtx=this.mapEl.querySelector("#mapCanvas").getContext("2d"),this.journalEl=document.createElement("div"),this.journalEl.id="journal",this.journalEl.className="panel hidden",this.journalEl.innerHTML=`
      <div class="panel-head">
        <span class="panel-title">Field Journal</span>
        <span class="panel-sub" id="journalProgress"></span>
      </div>
      <div id="journalList"></div>
      <div class="panel-foot">
        <span>Tab or Esc to close</span>
        <button id="journalReset" type="button">reset progress</button>
      </div>`,document.body.appendChild(this.journalEl),this.journalEl.querySelector("#journalReset").addEventListener("click",()=>{if(!this.resetArmed){this.resetArmed=!0,this.journalEl.querySelector("#journalReset").textContent="sure? click again",setTimeout(()=>{this.resetArmed=!1;const e=this.journalEl.querySelector("#journalReset");e&&(e.textContent="reset progress")},2500);return}this.onReset?.()})}setWorld(e){this.mapBase=this.worlds.mapBase(en,e),this.mapHalf=e==="nature"?2e3:this.worlds?.city?.mapHalf||1800,this.fogOn=e==="nature",this.refreshList()}toggleMap(){this.mapOpen=!this.mapOpen,this.mapEl.classList.toggle("hidden",!this.mapOpen),this.mapOpen&&this.journalOpen&&this.toggleJournal()}toggleJournal(){this.journalOpen=!this.journalOpen,this.journalEl.classList.toggle("hidden",!this.journalOpen),this.journalOpen&&(this.mapOpen&&this.toggleMap(),this.refreshList())}closeAll(){this.mapOpen&&this.toggleMap(),this.journalOpen&&this.toggleJournal()}get anyOpen(){return this.mapOpen||this.journalOpen}refreshList(){const e=this.journalEl.querySelector("#journalList"),t=[...this.worlds.sites()].sort((a,o)=>Number(o.discovered)-Number(a.discovered));e.innerHTML="";for(const a of t){const o=document.createElement("div");if(o.className=`entry ${a.discovered?"found":"rumor"}`,a.discovered){const c=document.createElement("canvas");c.width=c.height=44,ws(c.getContext("2d"),a.type,22,24,12);const l=document.createElement("div");l.innerHTML=`<b>${a.name}</b><span>${a.flavor}</span>
          <i>${Math.round(a.x)}, ${Math.round(a.z)}</i>`,o.append(c,l)}else{const c=Jf[a.type].label;o.innerHTML=`<div class="rumor-mark">?</div>
          <div><b>A ${c}, somewhere</b><span>Rumor only — the map hasn't found it yet.</span></div>`}e.appendChild(o)}const n=this.worlds.sites().filter(a=>a.discovered).length,i=this.worlds.sites().length,s=this.worlds.mode==="city"?`${n}/${i} city landmarks · ${this.orbs.count}/${this.orbs.total} shards (in the wilds)`:`${n}/${i} landmarks · ${this.orbs.count}/${this.orbs.total} shards`;this.journalEl.querySelector("#journalProgress").textContent=s,this.mapEl.querySelector("#mapProgress").textContent=s}updateMap(e){const t=this.mapCtx;t.clearRect(0,0,en,en),t.drawImage(this.mapBase,0,0,en,en);const n=this.mapHalf,i=n*2,s=(l,h)=>[(l+n)/i*en,(h+n)/i*en];if(this.fogOn){const{grid:l,N:h}=this.exploration,u=4e3;t.fillStyle="rgba(7, 11, 18, 0.82)";for(let f=0;f<h;f++)for(let d=0;d<h;d++)if(!l[f*h+d]){const g=-2e3+d/h*u,x=-2e3+f/h*u,[m,p]=s(g,x),[b,_]=s(g+u/h,x+u/h);t.fillRect(m,p,b-m+.5,_-p+.5)}}t.textAlign="center",t.font="600 11px ui-sans-serif, system-ui";for(const l of this.worlds.sites()){if(!l.discovered)continue;const[h,u]=s(l.x,l.z);h<-30||u<-30||h>en+30||u>en+30||(t.fillStyle="rgba(5, 9, 15, 0.55)",t.beginPath(),t.arc(h,u,11,0,Math.PI*2),t.fill(),ws(t,l.type,h,u,7),t.fillStyle="rgba(255,255,255,0.92)",t.fillText(l.name,h,u+22))}const a=this.worlds.gateMarker?.();if(a){let[l,h]=s(a.x,a.z);if(l>-40&&h>-40&&l<en+40&&h<en+40){l=Math.max(24,Math.min(en-24,l)),h=Math.max(26,Math.min(en-24,h));const u=15+Math.sin(performance.now()*.004)*3;t.strokeStyle="rgba(203, 184, 245, 0.95)",t.lineWidth=2.5,t.beginPath(),t.arc(l,h,u,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(10, 8, 20, 0.8)",t.beginPath(),t.arc(l,h,13,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(159, 127, 232, 0.9)",t.lineWidth=1.5,t.beginPath(),t.arc(l,h,13,0,Math.PI*2),t.stroke(),ws(t,"gate",l,h,7.5),t.fillStyle="rgba(203, 184, 245, 0.95)",t.fillText(this.worlds.mode==="city"?"The Way Back":"The Ancient Gate",l,h+30)}}const[o,c]=s(e.pos.x,e.pos.z);t.save(),t.translate(o,c),t.rotate(-e.yaw),t.fillStyle="rgba(255,255,255,0.25)",t.beginPath(),t.moveTo(0,0),t.arc(0,0,26,-Math.PI/2-.45,-Math.PI/2+.45),t.closePath(),t.fill(),t.restore(),t.fillStyle="#fff",t.strokeStyle="rgba(0,0,0,0.65)",t.lineWidth=1.6,t.beginPath(),t.arc(o,c,4,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="rgba(255,255,255,0.8)",t.font="700 13px ui-sans-serif, system-ui",t.textAlign="left",t.fillText("N ↑",10,20)}update(e){this.mapOpen&&this.updateMap(e)}}const zi=2.5,Fa=.2,Ur=3.3,Oa=3.8,my={low:128,medium:256,high:384},gy=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},vy=`
  varying vec3 vWorld;
  varying vec2 vLocal;
  varying vec3 vRight;
  varying vec3 vNormalW;
  void main() {
    vLocal = position.xy;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vRight = normalize((modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
    vNormalW = normalize((modelMatrix * vec4(0.0, 0.0, 1.0, 0.0)).xyz);
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,xy=`
  uniform float uTime, uProx, uCubeFade, uHasCube;
  uniform samplerCube uCube;
  uniform mat3 uRot;
  uniform vec3 uTint1, uTint2;
  varying vec3 vWorld;
  varying vec2 vLocal;
  varying vec3 vRight;
  varying vec3 vNormalW;

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 4; i++) { s += a * noise(p); p = p * 2.02 + 7.1; a *= 0.5; }
    return s;
  }

  // distance inside the arch boundary (positive inside)
  float archDist(vec2 p) {
    float side = ${zi.toFixed(2)} - abs(p.x);
    float d = min(side, p.y - ${Fa.toFixed(2)});
    if (p.y > ${Ur.toFixed(2)}) {
      d = ${zi.toFixed(2)} - length(vec2(p.x, p.y - ${Ur.toFixed(2)}));
    }
    return d;
  }

  void main() {
    float d = archDist(vLocal);
    float rim = exp(-max(d, 0.0) * 4.5);
    vec3 V = normalize(vWorld - cameraPosition);

    // slow domain-warped flow -> ripple direction
    vec2 p = vLocal * 0.85;
    float t = uTime;
    vec2 q = vec2(fbm(p * 1.4 + vec2(0.0, t * 0.22)), fbm(p * 1.4 + vec2(5.2, -t * 0.19)));
    vec2 w = (q - 0.5) * 2.0;
    float k = 0.012 + 0.05 * rim + 0.012 * uProx;
    vec3 dir = normalize(V + vRight * w.x * k + vec3(0.0, 1.0, 0.0) * w.y * k);
    vec3 sd = uRot * dir;

    // look through to the other world, with a little chromatic split
    float ca = 0.006 + 0.022 * rim;
    vec3 up = vec3(0.0, 1.0, 0.0);
    float bl = 0.006 + 0.02 * rim;   // a soft, dreamy blur: four taps around the ray
    vec3 cr = textureCube(uCube, normalize(sd + vRight * ca)).rgb;
    vec3 cg = 0.25 * (textureCube(uCube, normalize(sd + vRight * bl)).rgb
                    + textureCube(uCube, normalize(sd - vRight * bl)).rgb
                    + textureCube(uCube, normalize(sd + up * bl)).rgb
                    + textureCube(uCube, normalize(sd - up * bl)).rgb);
    vec3 cb = textureCube(uCube, normalize(sd - vRight * ca)).rgb;
    vec3 view = vec3(0.5 * (cr.r + cg.r), cg.g, 0.5 * (cb.b + cg.b)) * 0.8;
    // filmic roll-off: sunlit snow, sun and moon stay below the bloom threshold so
    // the window reads as a place rather than a lamp
    view = (1.0 - exp(-1.05 * view)) * 0.8;
    // a little more colour and contrast than the open world has: it should look like another place
    float vl = dot(view, vec3(0.299, 0.587, 0.114));
    view = pow(max(mix(vec3(vl), view, 1.45), 0.0), vec3(1.25));

    #ifdef DEBUG_VIEW
    gl_FragColor = vec4(view, 1.0);
    return;
    #endif

    // energy veil swirling about the doorway centre
    vec2 c = vLocal - vec2(0.0, 3.0);
    float r = length(c);
    float a = atan(c.y, c.x);
    float sw = fbm(vec2(a * 1.7 + r * 0.9 - t * 0.55, r * 0.55 - t * 0.28));
    float streak = fbm(vec2(a * 4.0 - t * 0.8 + r * 2.0, r * 1.3 + t * 0.4));
    vec3 veil = mix(uTint1, uTint2, sw) * (0.3 + 1.0 * smoothstep(0.38, 0.9, sw));

    // fallback while the cube is still being drawn: a deep swirling void
    vec3 deep = mix(vec3(0.03, 0.02, 0.1), uTint1 * 0.3, sw) + veil * 0.25;
    vec3 col = mix(deep, view, uHasCube * uCubeFade);

    float fres = pow(max(1.0 - abs(dot(normalize(vNormalW), V)), 0.0), 2.5);
    float veilAmt = 0.03 + 0.18 * rim + 0.07 * uProx + 0.1 * fres;
    col += veil * veilAmt;
    col += uTint2 * pow(streak, 3.0) * (0.06 + 0.2 * uProx) * (0.4 + rim);
    // brighter toward the frame, a hair darker at the heart: a tunnel
    col *= 0.82 + 0.5 * rim;

    gl_FragColor = vec4(col, smoothstep(0.0, 0.07, d));
  }
`,by=`
  attribute vec4 aSeed;   // angle0, radius0, speed, phase
  uniform float uTime, uProx, uPR;
  varying float vA;
  varying float vMix;
  void main() {
    float spd = 0.10 + 0.14 * uProx;
    float life = fract(aSeed.w + uTime * aSeed.z * spd);
    float r = mix(aSeed.y, 0.25, pow(life, 0.8));
    float ang = aSeed.x + uTime * (0.35 + 0.5 * uProx) * aSeed.z + life * 7.0;
    vec3 p = vec3(cos(ang) * r * 0.62, 3.0 + sin(ang) * r * 0.78,
                  0.25 + 0.55 * sin(aSeed.x * 5.0 + uTime * 0.7) * (1.0 - life));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    // fade out as the camera gets inside the swirl so it never whites out the doorway
    vA = smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.7, 1.0, life)) * smoothstep(1.2, 6.0, -mv.z);
    vMix = life;
    gl_PointSize = min(uPR * (150.0 / -mv.z) * (0.4 + 0.7 * (1.0 - life)) * (0.7 + 0.5 * aSeed.z), 46.0 * uPR);
  }
`,_y=`
  attribute vec4 aSeed;   // phase, speed, drift, size
  uniform float uTime, uProx, uPR;
  varying float vA;
  varying float vMix;
  void main() {
    float life = fract(aSeed.x + uTime * aSeed.y * (0.07 + 0.08 * uProx));
    vec3 p = position;
    p.y += life * (1.2 + 1.5 * aSeed.y);
    p.x += sin(uTime * 0.9 + aSeed.x * 40.0) * 0.12 * aSeed.z;
    p.z += cos(uTime * 0.7 + aSeed.x * 30.0) * 0.12 * aSeed.z;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vA = smoothstep(0.0, 0.1, life) * (1.0 - life) * (0.55 + 0.9 * uProx) * smoothstep(0.8, 4.0, -mv.z);
    vMix = life;
    gl_PointSize = min(uPR * (90.0 / -mv.z) * aSeed.w, 30.0 * uPR);
  }
`,yy=`
  uniform vec3 uTint1, uTint2;
  varying float vA;
  varying float vMix;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 3.5);
    vec3 col = mix(uTint2, uTint1, vMix) * 1.5;
    gl_FragColor = vec4(col * d * vA, 1.0);
  }
`,My=`
  uniform vec3 uTint1, uTint2;
  varying float vA;
  varying float vMix;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 4.0);
    gl_FragColor = vec4(mix(vec3(1.0), uTint2, 0.45) * 2.0 * d * vA, 1.0);
  }
`,Sy=`
  varying float vH;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vH = uv.y;
    vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0);
    vP = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,wy=`
  uniform float uTime, uStrength;
  uniform vec3 uTint1, uTint2;
  varying float vH;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vec3 V = normalize(cameraPosition - vP);
    float soft = pow(abs(dot(normalize(vN), V)), 1.6);
    float fall = pow(max(1.0 - vH, 0.0), 1.8) * smoothstep(0.0, 0.03, vH);
    float shimmer = 0.75 + 0.25 * sin(vH * 40.0 - uTime * 1.6) * sin(vH * 11.0 + uTime * 0.7);
    float a = soft * fall * shimmer * uStrength;
    vec3 col = mix(uTint1, uTint2, vH) * 1.8;
    gl_FragColor = vec4(col * a, 1.0);
  }
`;function Ty(){const r=new Ll;return r.moveTo(-zi,Fa),r.lineTo(zi,Fa),r.lineTo(zi,Ur),r.absarc(0,Ur,zi,0,Math.PI,!1),r.lineTo(-zi,Fa),r}function Ay(r){const e=new Float32Array(r*4);for(let n=0;n<r;n++)e[n*4]=Math.random()*Math.PI*2,e[n*4+1]=2.2+Math.random()*2.6,e[n*4+2]=.55+Math.random()*.9,e[n*4+3]=Math.random();const t=new nt;return t.setAttribute("position",new Ye(new Float32Array(r*3),3)),t.setAttribute("aSeed",new Ye(e,4)),t}function Ey(r){const e=new Float32Array(r*3),t=new Float32Array(r*4);for(let i=0;i<r;i++){const s=Math.random();let a,o,c=(Math.random()<.5?1:-1)*.72;if(s<.5){const l=Math.random()*Math.PI;a=Math.cos(l)*2.58,o=Ur+Math.sin(l)*2.58}else s<.75?(a=(Math.random()<.5?-1:1)*2.58,o=.3+Math.random()*3):(a=(Math.random()<.5?-1:1)*(3+Math.random()*.8),o=1+Math.random()*7,c*=1.1);e[i*3]=a,e[i*3+1]=o,e[i*3+2]=c,t[i*4]=Math.random(),t[i*4+1]=.5+Math.random(),t[i*4+2]=Math.random(),t[i*4+3]=.5+Math.random()*.9}const n=new nt;return n.setAttribute("position",new Ye(e,3)),n.setAttribute("aSeed",new Ye(t,4)),n}const Cy={nature:[new $(.85,.35,1),new $(.3,.95,1)],city:[new $(.2,.95,.55),new $(1,.8,.35)]};class Uu{constructor(e,t,n,i,s,a,o=1){this.world=t,this.group=e,this.base=i-Oa,this.ry=a,this.pos=new R(n,this.base+3,s),this.facing=new R(Math.sin(a),0,Math.cos(a)),this.right=new R(Math.cos(a),0,-Math.sin(a)),this.prox=0,this.gate=null,this.runeMats=[],this.tint=Cy[t],this.root=new St,this.root.position.set(n,this.base,s),this.root.rotation.y=a,e.add(this.root),this.cubeRT=null,this.hasCube=!1,this.cubeFade=0,this.rot=new He,this.surfMat=new Qe({uniforms:{uTime:{value:0},uProx:{value:0},uCubeFade:{value:0},uHasCube:{value:0},uCube:{value:null},uRot:{value:this.rot},uTint1:{value:this.tint[0]},uTint2:{value:this.tint[1]}},vertexShader:vy,fragmentShader:xy,transparent:!0,side:dt,depthWrite:!1}),this.surface=new ze(new Qa(Ty(),40),this.surfMat),this.surface.frustumCulled=!1,this.root.add(this.surface);const c=(h,u)=>new Qe({uniforms:{uTime:{value:0},uProx:{value:0},uPR:{value:o},uTint1:{value:this.tint[0]},uTint2:{value:this.tint[1]}},vertexShader:h,fragmentShader:u,transparent:!0,blending:Gt,depthWrite:!1,fog:!1});this.vortex=new Hi(Ay(190),c(by,yy)),this.vortex.frustumCulled=!1,this.sparks=new Hi(Ey(170),c(_y,My)),this.sparks.frustumCulled=!1,this.root.add(this.vortex,this.sparks);const l=new Gn(.5,1.8,1,20,1,!0);l.translate(0,.5,0),this.beaconMat=new Qe({uniforms:{uTime:{value:0},uStrength:{value:.4},uTint1:{value:this.tint[0]},uTint2:{value:this.tint[1]}},vertexShader:Sy,fragmentShader:wy,transparent:!0,blending:Gt,depthWrite:!1,side:dt,fog:!1}),this.beacon=new ze(l,this.beaconMat),this.beacon.position.set(0,10.5,0),this.beacon.scale.set(1,420,1),this.beacon.frustumCulled=!1,this.beacon.renderOrder=5,this.root.add(this.beacon),this.halo=Wi(11902463,9),this.halo.position.set(0,3,.3),this.root.add(this.halo),this.light=new Nr(11570431,2.2,34,1.5),this.light.position.set(0,3,1.6),this.root.add(this.light),this.fragments=[],this.fragGroup=new St,this.root.add(this.fragGroup)}setGate(e,t){if(this.gate=e,this.runeMats=[],e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material=n.material.clone(),n.material.name.startsWith("gate_rune")&&this.runeMats.push(n.material))}),this.root.add(e),t?.length)for(let i=0;i<9;i++){const a=t[i%t.length].clone(!0);a.traverse(o=>{o.isMesh&&(o.material=o.material.clone(),o.castShadow=!0,o.material.name.startsWith("gate_rune")&&this.runeMats.push(o.material))}),a.scale.setScalar(.75+Math.random()*.7),this.fragGroup.add(a),this.fragments.push({m:a,a:i/9*Math.PI*2,dir:i%2?1:-1,R:3.5+Math.sin(i*1.7)*.7,ph:Math.random()*6.28,spin:new R(.2+Math.random()*.5,.15+Math.random()*.4,.1+Math.random()*.3)})}}dressPlaza(e){const t=e-this.base+.05,n=new ze(new ja(9.6,15.2,96,1),new xt({color:198157,roughness:.05,metalness:.92,envMapIntensity:1.6}));n.rotation.x=-Math.PI/2,n.position.y=t,n.receiveShadow=!0,this.root.add(n);const i=new ze(new ja(15.2,15.5,96,1),new nn({color:new $().copy(this.tint[1]).multiplyScalar(2.4)}));i.rotation.x=-Math.PI/2,i.position.y=t+.012,this.root.add(i);const s=32,a=new Dt(new Vn(.28,.04,2.6),new nn({color:16777215}),s),o=new _e,c=new bt,l=new It,h=new R;for(let u=0;u<s;u++){const f=u/s*Math.PI*2;l.set(0,-f+Math.PI/2,0),c.setFromEuler(l),h.set(Math.cos(f)*17.4,t+.02,Math.sin(f)*17.4),o.compose(h,c,new R(1,1,1)),a.setMatrixAt(u,o),a.setColorAt(u,new $(1,1,1))}a.frustumCulled=!1,this.root.add(a),this.plaza={pool:n,line:i,strips:a,N:s,c:new $}}_updatePlaza(e){const t=this.plaza;if(t){for(let n=0;n<t.N;n++){const i=.5+.5*Math.sin(e*1.3-n*.42),s=.25+2.6*Math.pow(i,3)*(.5+this.prox);t.c.copy(this.tint[n%2?1:0]).multiplyScalar(s),t.strips.setColorAt(n,t.c)}t.strips.instanceColor.needsUpdate=!0}}setDestination(e){const t=e.ry-(this.ry+Math.PI);this.rot.setFromMatrix4(new _e().makeRotationY(t))}local(e,t=new R){const n=e.x-this.root.position.x,i=e.z-this.root.position.z;return t.set(n*this.right.x+i*this.right.z,e.y-this.base,n*this.facing.x+i*this.facing.z)}update(e,t,n,i){const s=1-n,a=this.surfMat.uniforms;a.uTime.value=e,a.uProx.value=this.prox,this.cubeFade+=((this.hasCube?1:0)-this.cubeFade)*Math.min(1,t*1.6),a.uCubeFade.value=this.cubeFade,a.uHasCube.value=this.hasCube?1:0;for(const l of[this.vortex,this.sparks])l.material.uniforms.uTime.value=e,l.material.uniforms.uProx.value=this.prox;if(this.beaconMat.uniforms.uTime.value=e,this.beaconMat.uniforms.uStrength.value=.1+.34*s+.35*this.prox,i){const l=Math.hypot(i.x-this.root.position.x,i.z-this.root.position.z),h=_i.clamp(l/160,1,9);this.beacon.scale.set(h,420,h)}const o=.5+.5*Math.sin(e*1.7),c=.8+1.7*this.prox+.3*o;for(const l of this.runeMats)l.emissive.copy(this.tint[1]).lerp(this.tint[0],.25+.2*o),l.color.setScalar(0),l.emissiveIntensity=c*(1+.3*s);this.light.color.copy(this.tint[0]).lerp(this.tint[1],.5+.3*Math.sin(e*.8)),this.light.intensity=1+1.5*this.prox+.3*Math.sin(e*2.2),this.halo.material.color.copy(this.tint[0]).multiplyScalar(1.4),this.halo.material.opacity=.08+.12*this.prox,this._updatePlaza(e);for(const l of this.fragments)l.a+=t*.11*l.dir*(1+this.prox*1.2),l.m.position.set(Math.cos(l.a)*l.R,9.7+Math.sin(l.a)*1.9+Math.sin(e*.9+l.ph)*.18,Math.sin(l.a*2+l.ph)*.9),l.m.rotation.x+=t*l.spin.x,l.m.rotation.y+=t*l.spin.y,l.m.rotation.z+=t*l.spin.z}}class Ry{constructor(e,t,n,i={name:"medium",pixelRatio:1}){this.scene=e,this.timeU=n,this.quality=i,this.cooldown=0,this.onTransit=null,this.ctx=null,this._gateTpl=null,this._fragTpls=null,this.proximity=0,this.proximityTint=new $(.6,.4,1);const s=Math.min(devicePixelRatio,i.pixelRatio||1);this._pr=s;const a=t.heightAt(Bt.x,Bt.z);this.group=new St,e.add(this.group),this.nature=new Uu(this.group,"nature",Bt.x,a+.1+Oa,Bt.z,0,s),this.natureColliders=new Ns,this.cityColliders=null,this._pillarColliders(this.natureColliders,Bt.x,a+.1,Bt.z,0);const o=new Or;Promise.all([o.loadAsync("assets/portal_gate.glb"),o.loadAsync("assets/portal_fragments.glb")]).then(([c,l])=>{this._gateTpl=c.scene,this._fragTpls=[],l.scene.traverse(h=>{if(h.isMesh&&h.name.startsWith("frag")){const u=h.clone();u.position.set(0,0,0),u.rotation.set(0,0,0),this._fragTpls.push(u)}}),this.nature.setGate(this._gateTpl.clone(!0),this._fragTpls),this.city&&!this.city.gate&&this.city.setGate(this._gateTpl.clone(!0),this._fragTpls)}).catch(c=>console.warn("[portal] gate assets missing (run tools/build_portal.py)",c)),this.city=null,this.site={id:"gate-0",type:"gate",world:"nature",name:"The Ancient Gate",flavor:"The carvings hum. On the other side — somewhere else entirely.",color:10452968,discoverR:55,x:Bt.x,y:a,z:Bt.z,discovered:!1},this.onDiscover=null,this._cube={face:-1,last:-99,end:null,plan:null},this._tmp=new R}bind(e){this.ctx=e}_pillarColliders(e,t,n,i,s){const a=Math.cos(s),o=Math.sin(s);for(const c of[-3.4,3.4])e.addBox(t+c*a,i-c*o,.85,.85,n,n+8.6,s)}attachCityEnd(e,t,n,i,s){this.city=new Uu(e,"city",t,n,i,s,this._pr);const a=this.ctx?this.ctx.worlds.city.heightAt(t,i):n-Oa;this.city.dressPlaza(a),this._gateTpl&&this.city.setGate(this._gateTpl.clone(!0),this._fragTpls),this.nature.setDestination(this.city),this.city.setDestination(this.nature),this.cityColliders=new Ns,this._pillarColliders(this.cityColliders,t,n-Oa,i,s)}tryTransit(e,t){if(this.cooldown>0)return;const n=t==="nature"?this.nature:this.city;if(!n)return;const i=n.local(e,this._tmp);Math.abs(i.z)<.8&&Math.abs(i.x)<2.3&&i.y>-.6&&i.y<4.8&&(this.cooldown=2.8,this.onTransit?.(t==="nature"?"city":"nature"))}_plan(e){const{worlds:t}=this.ctx,n=e.world==="nature"?"city":"nature";if(n==="city"&&!t.city.built)return null;const i=t.arrival(n),s=n==="city"?t.city.heightAt(i.x,i.z):t.terrain.heightAt(i.x,i.z);return{mode:n,pos:new R(i.x,s+2,i.z)}}_ensureCube(e){if(e.cubeRT)return;const t=my[this.quality.name]||256;e.cubeRT=new xf(t,{type:ln,generateMipmaps:!1,minFilter:Ht,magFilter:Ht}),e.cubeCam=new gf(.3,6500,e.cubeRT),e.cubeCam.coordinateSystem=this.ctx.renderer.coordinateSystem,e.cubeCam.updateCoordinateSystem(),e.surfMat.uniforms.uCube.value=e.cubeRT.texture}_renderFace(e,t,n){const{renderer:i,worlds:s,sky:a}=this.ctx,o=e.cubeCam;o.position.copy(t.pos),o.updateMatrixWorld(!0);const c=s.mode,l=this.group.visible,h=i.shadowMap.autoUpdate,u=i.getRenderTarget(),f=a.group.position.clone();i.shadowMap.autoUpdate=!1,s.setMode(t.mode),this.group.visible=t.mode==="nature",a.group.position.set(t.pos.x,0,t.pos.z),i.setRenderTarget(e.cubeRT,n),i.clear(),i.render(this.scene,o.children[n]),s.setMode(c),this.group.visible=l,a.group.position.copy(f),i.setRenderTarget(u),i.shadowMap.autoUpdate=h}_updateWindow(e,t,n){const i=this._cube;if(t>150){i.face=-1;return}if(i.face<0&&(n-i.last>14||!e.hasCube)){const s=this._plan(e);if(!s)return;this._ensureCube(e),i.plan=s,i.end=e,i.face=0}i.face>=0&&i.end===e&&(this._renderFace(e,i.plan,i.face),i.face++,i.face>=6&&(i.face=-1,i.last=n,e.hasCube=!0))}update(e,t,n,i,s=1,a=null){this.cooldown=Math.max(0,this.cooldown-e),this.group.visible=i==="nature";const o=i==="nature"?this.nature:this.city;for(const c of[this.nature,this.city]){if(!c)continue;const l=c===o?Math.hypot(t.x-c.pos.x,t.z-c.pos.z,(t.y-c.pos.y)*.5):999,h=c===o?gy(75,7,l):0;c.prox+=(h-c.prox)*Math.min(1,e*3)}if(this.nature.update(n,e,s,a),this.city?.update(n+40,e,s,a),this.proximity=o?o.prox:0,o&&this.proximityTint.copy(o.tint[0]).lerp(o.tint[1],.5),i==="nature"&&!this.site.discovered&&Math.hypot(t.x-this.site.x,t.z-this.site.z)<this.site.discoverR&&(this.site.discovered=!0,this.onDiscover?.(this.site)),this.tryTransit(t,i),this.ctx&&o&&o.gate){const c=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);this._updateWindow(o,c,n)}}}var Py=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),_=0;_<p.length;++_){var v=p.charCodeAt(_);b[_]=v>96?v-97:v>64?v-39:v+4}for(var M=0,_=0;_<p.length;++_)b[M++]=b[_]<60?n[b[_]]:(b[_]-60)*64+b[++_];return b.buffer.slice(0,M)}function c(p,b,_,v,M,S,T){var C=p.exports.sbrk,y=v+3&-4,w=C(y*M),L=C(S.length),N=new Uint8Array(p.exports.memory.buffer);N.set(S,L);var B=b(w,v,M,L,S.length);if(B==0&&T&&T(w,y,M),_.set(N.subarray(w,w+v*M)),C(w-C(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(_){var v=_.data;b.pending-=v.count,b.requests[v.id][v.action](v.value),delete b.requests[v.id]},b}function g(p){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),_=new Blob([b],{type:"text/javascript"}),v=URL.createObjectURL(_),M=u.length;M<p;++M)u[M]=d(v);for(var M=p;M<u.length;++M)u[M].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function x(p,b,_,v,M){for(var S=u[0],T=1;T<u.length;++T)u[T].pending<S.pending&&(S=u[T]);return new Promise(function(C,y){var w=new Uint8Array(_),L=++f;S.pending+=p,S.requests[L]={resolve:C,reject:y},S.object.postMessage({id:L,count:p,size:b,source:w,mode:v,filter:M},[w.buffer])})}function m(p){var b=p.data;if(!b.id)return self.close();self.ready.then(function(_){try{var v=new Uint8Array(b.count*b.size);c(_,_.exports[b.mode],v,b.count,b.size,b.source,_.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:v},[v.buffer])}catch(M){self.postMessage({id:b.id,count:b.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,b,_,v,M){c(s,s.exports.meshopt_decodeVertexBuffer,p,b,_,v,s.exports[l[M]])},decodeIndexBuffer:function(p,b,_,v){c(s,s.exports.meshopt_decodeIndexBuffer,p,b,_,v)},decodeIndexSequence:function(p,b,_,v){c(s,s.exports.meshopt_decodeIndexSequence,p,b,_,v)},decodeGltfBuffer:function(p,b,_,v,M,S){c(s,s.exports[h[M]],p,b,_,v,s.exports[l[S]])},decodeGltfBufferAsync:function(p,b,_,v,M){return u.length>0?x(p,b,_,h[v],l[M]):a.then(function(){var S=new Uint8Array(p*b);return c(s,s.exports[h[v]],S,p,b,_,s.exports[l[M]]),S})}}})();const zr={value:0},nr=12.8,Ly={facade_deco_a:{floors:4,bays:4,ww:1.5,wh:1.8},facade_deco_b:{floors:4,bays:4,ww:1.5,wh:1.8},facade_brick_a:{floors:4,bays:2,ww:1.15,wh:1.9},facade_brick_b:{floors:4,bays:2,ww:1.15,wh:1.9},facade_brown:{floors:3,bays:3,ww:1.3,wh:2.6},facade_prewar:{floors:4,bays:4,ww:1.7,wh:2},facade_panel:{floors:4,bays:4,ww:1.5,wh:1.5},facade_castiron:{floors:3,bays:4,ww:1.5,wh:3.2},facade_glass_a:{floors:6,bays:8,glass:!0},facade_glass_b:{floors:6,bays:8,glass:!0}};function Dy(r){const e=Ly[r.name];if(!e||r.userData.interior)return;r.userData.interior=!0;const t=nr/e.bays,n=nr/e.floors;let i,s,a,o;e.glass?(i=.06,s=t-.06,a=n*.32,o=n-.05):(i=(t-e.ww)/2+.07,s=(t+e.ww)/2-.07,a=(n-e.wh)/2+.07,o=(n+e.wh)/2-.07);const c=h=>h.toFixed(4),l=`
    #define BW ${c(t)}
    #define FH ${c(n)}
    #define WX0 ${c(i)}
    #define WX1 ${c(s)}
    #define WY0 ${c(a)}
    #define WY1 ${c(o)}
    #define ROOM_D 4.6
  `;r.onBeforeCompile=h=>{h.uniforms.uCityTime=zr,h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vFW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
        ${l}
        uniform float uCityTime;
        varying vec3 vFW;
        float ihash(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }
        vec3 roomPalette(float h) {
          if (h < 0.18) return vec3(1.0, 0.74, 0.44);
          if (h < 0.36) return vec3(1.0, 0.87, 0.66);
          if (h < 0.5) return vec3(0.86, 0.94, 1.0);
          if (h < 0.64) return vec3(1.0, 0.56, 0.36);
          if (h < 0.78) return vec3(0.7, 1.0, 0.84);
          if (h < 0.9) return vec3(0.84, 0.7, 1.0);
          return vec3(1.0, 0.6, 0.78);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float kInt = emissive.r;
          vec2 tuv = vec2(vEmissiveMapUv.x, 1.0 - vEmissiveMapUv.y) * ${c(nr)};
          // derivatives must be taken in uniform control flow
          vec3 dpx = dFdx(vFW), dpy = dFdy(vFW);
          vec2 dux = dFdx(tuv), duy = dFdy(tuv);
          vec2 cs = tuv / vec2(BW, FH);
          vec2 id = floor(cs);
          vec2 lp = (cs - id) * vec2(BW, FH);
          float inW = step(WX0, lp.x) * step(lp.x, WX1) * step(WY0, lp.y) * step(lp.y, WY1);
          if (inW > 0.5 && kInt > 0.02) {
            float dist = length(vFW - cameraPosition);
            // is this room lit? read the original emissive texture at the window centre
            vec2 cuv = vec2((id.x + 0.5) * BW / ${c(nr)}, 1.0 - (id.y * FH + 0.5 * (WY0 + WY1)) / ${c(nr)});
            vec3 litTex = texture2D(emissiveMap, cuv).rgb;
            float lit = step(0.04, dot(litTex, vec3(0.3333)));
            float rh = ihash(id + floor(vFW.xz * 0.05) * 7.0);
            float rh2 = ihash(id * 1.7 + rh * 13.0);
            vec3 pal = roomPalette(rh);
            vec3 tint = mix(litTex / max(max(litTex.r, litTex.g), max(litTex.b, 1e-3)), pal, 0.7);

            vec3 radiance = vec3(0.0);
            if (dist < 260.0) {
              // wall-space frame from screen derivatives (uv is in metres)
              float det = dux.x * duy.y - dux.y * duy.x;
              det = abs(det) < 1e-9 ? 1e-9 : det;
              vec3 pu = (dpx * duy.y - dpy * dux.y) / det;
              vec3 pv = (dpy * dux.x - dpx * duy.x) / det;
              vec3 T = pu / max(length(pu), 1e-6), U = pv / max(length(pv), 1e-6);
              vec3 Nw = cross(T, U);
              Nw /= max(length(Nw), 1e-6);
              vec3 toCam = normalize(cameraPosition - vFW);
              if (dot(Nw, toCam) < 0.0) Nw = -Nw;
              vec3 V = -toCam;
              vec3 r = vec3(dot(V, T), dot(V, U), max(-dot(V, Nw), 0.04));

              vec3 p0 = vec3(lp, 0.0);
              float tx = ((r.x > 0.0 ? BW : 0.0) - p0.x) / (abs(r.x) < 1e-5 ? 1e-5 : r.x);
              float ty = ((r.y > 0.0 ? FH : 0.0) - p0.y) / (abs(r.y) < 1e-5 ? 1e-5 : r.y);
              float tz = ROOM_D / r.z;
              float t = min(min(tx, ty), tz);
              vec3 h = p0 + r * t;

              // the lamp: a point in the ceiling, middle of the room
              vec3 lamp = vec3(BW * (0.35 + 0.3 * rh2), FH - 0.25, ROOM_D * 0.5);
              vec3 dl = h - lamp;
              float lampK = 1.0 / (0.75 + 0.3 * dot(dl, dl));

              vec3 surf;
              if (t == tz) {                                 // back wall
                vec2 bw = vec2(h.x / BW, h.y / FH);
                surf = mix(vec3(0.8, 0.78, 0.74), pal, 0.45);
                // picture / TV
                vec2 pc = vec2(0.28 + 0.44 * rh2, 0.52);
                vec2 pd = abs(bw - pc) / vec2(0.15, 0.13);
                float pic = step(max(pd.x, pd.y), 1.0);
                vec3 picC = roomPalette(fract(rh * 3.1 + 0.2)) * 1.4;
                surf = mix(surf, picC, pic * 0.8);
                // skirting and a shelf line
                surf *= 1.0 - 0.45 * step(bw.y, 0.08);
                surf *= 1.0 - 0.3 * step(abs(bw.y - 0.78), 0.012);
              } else if (t == ty) {
                surf = r.y > 0.0 ? vec3(0.9, 0.9, 0.88) : vec3(0.28, 0.18, 0.11);   // ceiling / floor
              } else {
                surf = mix(vec3(0.78, 0.72, 0.66), pal, 0.35);                        // side walls
                // curtains framing the glass
                float cur = step(h.z, 0.75 + 0.3 * rh2);
                surf = mix(surf, mix(pal, vec3(0.55, 0.12, 0.18), step(0.6, rh2)) * 0.8, cur * 0.85);
              }
              // lit rooms glow from the lamp; some dark ones have the television on
              float tv = step(0.9, rh2) * (1.0 - lit);
              vec3 tvRad = tv * vec3(0.12, 0.28, 0.55) * (0.5 + 0.5 * sin(uCityTime * 6.0 + rh * 40.0)) * lampK * 0.9;
              radiance = surf * tint * lampK * 1.25 * lit + tvRad;
            }
            vec3 flatLit = lit * tint * 0.9;
            radiance = mix(radiance, flatLit, smoothstep(110.0, 260.0, dist));
            totalEmissiveRadiance = mix(totalEmissiveRadiance, radiance * kInt * 0.85, inW);
          }
        }`)},r.customProgramCacheKey=()=>`facade-${r.name}`,r.needsUpdate=!0}function Zf(r,e,{vertexExtra:t="",fragCommon:n="",fragColor:i=""}){if(r.userData[e])return;r.userData[e]=!0;const s=r.onBeforeCompile;r.onBeforeCompile=(a,o)=>{s?.(a,o),a.uniforms.uCityTime=zr,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vFW = (modelMatrix * vec4(transformed, 1.0)).xyz;`+t),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vFW;
        uniform float uCityTime;
        float qh(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float qn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(qh(i), qh(i + vec2(1, 0)), f.x), mix(qh(i + vec2(0, 1)), qh(i + vec2(1, 1)), f.x), f.y); }
        ${n}`).replace("#include <color_fragment>",`#include <color_fragment>
${i}`)},r.customProgramCacheKey=()=>`${e}-${r.name}`,r.needsUpdate=!0}function Iy(r){Zf(r,"lawn",{fragColor:`
      float stripe = step(0.0, sin(dot(vFW.xz, vec2(0.62, 0.41)) * 1.1));
      float patch = qn(vFW.xz * 0.06);
      float fine = qn(vFW.xz * 1.7);
      diffuseColor.rgb *= 0.86 + 0.14 * stripe;
      diffuseColor.rgb *= vec3(0.9 + 0.2 * patch, 0.95 + 0.1 * patch, 0.85 + 0.1 * (1.0 - patch));
      diffuseColor.rgb *= 0.92 + 0.16 * fine;`})}function Ny(r){Zf(r,"paving",{fragColor:`
      vec2 sl = vFW.xz / 1.2;
      vec2 f = abs(fract(sl) - 0.5);
      float grout = smoothstep(0.47, 0.5, max(f.x, f.y));
      float stain = qn(vFW.xz * 0.35) * 0.6 + qn(vFW.xz * 2.1) * 0.4;
      float cell = qh(floor(sl));
      diffuseColor.rgb *= (0.9 + 0.1 * cell) * (0.82 + 0.3 * stain) * (1.0 - 0.28 * grout);`})}function Uy(r){r.userData.led||(r.userData.led=!0,r.onBeforeCompile=e=>{e.uniforms.uCityTime=zr,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCityTime;`).replace("#include <map_fragment>",`#include <map_fragment>
        float yy = vMapUv.y;
        diffuseColor.rgb *= 0.86 + 0.14 * sin(yy * 320.0);
        diffuseColor.rgb *= 1.0 + 0.35 * smoothstep(0.93, 1.0, sin(yy * 2.4 - uCityTime * 1.3));
        diffuseColor.rgb *= 0.95 + 0.05 * sin(uCityTime * 53.0);`)},r.customProgramCacheKey=()=>"led-screen",r.needsUpdate=!0)}const On={uTime:zr,uNight:{value:0},uPR:{value:1}},tc=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},Fy=`
  attribute vec3 aColor;
  attribute vec4 aParam;   // phase, blink (0 steady, 1 slow, 2 strobe), size, twinkle
  uniform float uTime, uNight, uPR, uDay;
  varying vec3 vC;
  varying float vA;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float a = 1.0;
    if (aParam.y > 0.5 && aParam.y < 1.5) a = 0.1 + 0.9 * step(0.5, fract(uTime * 0.55 + aParam.x));
    else if (aParam.y > 1.5) a = step(0.9, fract(uTime * 1.25 + aParam.x));
    a *= 0.8 + 0.2 * sin(uTime * (2.0 + aParam.w * 3.0) + aParam.x * 40.0);
    vC = aColor;
    vA = a * (uDay + (1.0 - uDay) * uNight);
    gl_PointSize = clamp(uPR * aParam.z * 140.0 / -mv.z, 2.0 * uPR, 30.0 * uPR * aParam.z);
  }
`,Oy=`
  varying vec3 vC;
  varying float vA;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 3.2);
    gl_FragColor = vec4(vC * d * vA, 1.0);
  }
`;class nc{constructor(e,t=.35){const n=e.length,i=new Float32Array(n*3),s=new Float32Array(n*3),a=new Float32Array(n*4);e.forEach((c,l)=>{i.set(c.p,l*3),s.set(c.c,l*3),a.set([c.phase??Math.random(),c.blink??0,c.size??1,Math.random()],l*4)});const o=new nt;o.setAttribute("position",new Ye(i,3)),o.setAttribute("aColor",new Ye(s,3)),o.setAttribute("aParam",new Ye(a,4)),this.uDay={value:t},this.mesh=new Hi(o,new Qe({uniforms:{uTime:On.uTime,uNight:On.uNight,uPR:On.uPR,uDay:this.uDay},vertexShader:Fy,fragmentShader:Oy,transparent:!0,blending:Gt,depthWrite:!1,fog:!1})),this.mesh.frustumCulled=!1}}const zy=`
  varying float vH;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vH = uv.y;
    vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0);
    vP = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,ky=`
  uniform vec3 uColor;
  uniform float uStrength, uPow;
  varying float vH;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vec3 V = normalize(cameraPosition - vP);
    float soft = pow(abs(dot(normalize(vN), V)), 1.4);
    float a = soft * pow(max(1.0 - vH, 0.0), uPow) * uStrength;
    gl_FragColor = vec4(uColor * a, 1.0);
  }
`;function ic(r,e,t=1.6){return new Qe({uniforms:{uColor:{value:new $(r)},uStrength:{value:e},uPow:{value:t}},vertexShader:zy,fragmentShader:ky,transparent:!0,blending:Gt,depthWrite:!1,side:dt,fog:!1})}const By=[["JAZZ","#ff3fa8"],["BAR","#2de2ff"],["PIZZA","#ff6a3c"],["HOTEL","#ffc83a"],["OPEN","#4dff8a"],["TAXI","#ffe34a"],["LIVE","#ff5c8a"],["NOODLES","#37f2d1"]];function Hy(){const r=document.createElement("canvas");r.width=1024,r.height=1024;const e=r.getContext("2d");e.textAlign="center",e.textBaseline="middle",By.forEach(([n,i],s)=>{const a=s%2*512+256,o=Math.floor(s/2)*256+128,c=n.length>5?74:104;e.font=`800 ${c}px "Arial Black", Arial, sans-serif`,e.save(),e.shadowColor=i,e.shadowBlur=22,e.lineWidth=7,e.strokeStyle=i;const l=30,h=a-232,u=o-100,f=464,d=200;e.beginPath(),e.moveTo(h+l,u),e.arcTo(h+f,u,h+f,u+d,l),e.arcTo(h+f,u+d,h,u+d,l),e.arcTo(h,u+d,h,u,l),e.arcTo(h,u,h+f,u,l),e.closePath(),e.stroke(),e.shadowBlur=26,e.lineWidth=11,e.strokeStyle=i,e.strokeText(n,a,o+4),e.shadowBlur=8,e.lineWidth=6,e.strokeStyle=i,e.strokeText(n,a,o+4),e.shadowBlur=0,e.lineWidth=2.6,e.strokeStyle="#ffffff",e.strokeText(n,a,o+4),e.restore()});const t=new Ka(r);return t.colorSpace=Lt,t.anisotropy=4,t}const Gy=`
  attribute vec3 aInfo;     // cell index, phase, flicker
  varying vec2 vUv;
  varying vec3 vInfo;
  void main() {
    vUv = uv;
    vInfo = aInfo;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,Vy=`
  uniform sampler2D uAtlas;
  uniform float uTime, uNight, uGain;
  varying vec2 vUv;
  varying vec3 vInfo;
  void main() {
    float cell = floor(vInfo.x + 0.5);
    float col = mod(cell, 2.0), row = floor(cell / 2.0);
    vec2 auv = vec2((col + vUv.x) * 0.5, (3.0 - row + vUv.y) * 0.25);
    vec4 t = texture2D(uAtlas, auv);
    // some tubes are failing: hum, flicker, the odd dead stretch
    float f = 0.88 + 0.12 * sin(uTime * 41.0 + vInfo.y * 9.0);
    float dead = vInfo.z * step(0.86, fract(uTime * 0.21 + vInfo.y)) * step(0.4, fract(uTime * 9.0 + vInfo.y * 3.0));
    float k = f * (1.0 - dead * 0.9) * (0.25 + 0.75 * uNight);
    gl_FragColor = vec4(t.rgb * t.a * uGain * k, 1.0);
  }
`,Wy=`
  attribute vec4 aSeed;    // x,z in box, phase, hash
  attribute float aEnd;    // 0 head, 1 tail
  uniform float uTime, uRain, uHeight, uBox;
  uniform vec3 uCam;
  varying float vA;
  void main() {
    float speed = 22.0 + aSeed.w * 8.0;
    float y = uHeight - mod(uTime * speed + aSeed.z * uHeight, uHeight);
    vec2 xz = mod(aSeed.xy - uCam.xz + uBox * 0.5, uBox) - uBox * 0.5;
    vec3 p = vec3(uCam.x + xz.x, uCam.y - uHeight * 0.35 + y, uCam.z + xz.y);
    p.x += aEnd * 0.12;
    p.y += aEnd * 0.9;
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vA = step(aSeed.w, uRain) * (1.0 - aEnd * 0.8);
  }
`,jy=`
  varying float vA;
  void main() { gl_FragColor = vec4(vec3(0.6, 0.72, 1.0) * 1.1 * vA, 1.0); }
`;class Xy{constructor(e,t,n){this.city=e,this.layout=t,this.group=n,this.world=new St,n.parent.add(this.world),this.rain=0,this.rainTarget=0,this.rainOverride=null,this.parts={},On.uPR.value=Math.min(devicePixelRatio,e.quality?.pixelRatio||1),this._buildings=t.buildings}buildingAt(e,t){let n=null;for(const i of this._buildings)e>=i[0]&&e<=i[1]&&t>=i[2]&&t<=i[3]&&(!n||i[4]>n[4])&&(n=i);return n}build(){this._neonSigns(),this._roofBeacons(),this._searchlights(),this._crowns(),this._torch(),this._bridgeLights(),this._lampCones(),this._steam(),this._parkLights(),this._ley(),this._rain()}_neonSigns(){const e=this.layout.sites.find(b=>b.type==="neon");if(!e)return;const t=Hy(),n=80,i=new xn(1,1),s=new Float32Array(n*3),a=new Qe({uniforms:{uAtlas:{value:t},uTime:On.uTime,uNight:On.uNight,uGain:{value:2.6}},vertexShader:Gy,fragmentShader:Vy,transparent:!0,blending:Gt,depthWrite:!1,fog:!1}),o=new Dt(i,a,n),c=new _e,l=new bt,h=new It,u=new R,f=new R;let d=0,g=7;const x=()=>(g=g*16807%2147483647,g/2147483647),m=150,p=[[1,0],[-1,0],[0,1],[0,-1]];for(const b of this._buildings){if(d>=n)break;const[_,v,M,S,T]=b;if(T<14)continue;const C=(_+v)/2,y=(M+S)/2;if(!(Math.hypot(C-e.x,y-e.z)>m))for(const[w,L]of p){if(d>=n||x()>.55)continue;const N=w!==0?S-M:v-_;if(N<9)continue;const B=w!==0?w>0?v:_:C+(x()-.5)*(N-8),O=L!==0?L>0?S:M:y+(x()-.5)*(N-8),z=this.city.toWorld(B+w*3.5,O+L*3.5);if(this.city.heightAt(z.x,z.z)>3.5)continue;const G=Math.min(N-2,5.5+x()*5),q=8+x()*Math.min(T-8,34);u.set(B+w*.45,q,O+L*.45),h.set(0,Math.atan2(w,L),0),l.setFromEuler(h),f.set(G,G*.5,1),c.compose(u,l,f),o.setMatrixAt(d,c),s.set([Math.floor(x()*8),x()*6.28,x()<.3?1:0],d*3),d++}}o.count=d,i.setAttribute("aInfo",new Pr(s,3)),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.renderOrder=4,this.group.add(o),this.parts.signs=o}_roofBeacons(){const t=this._buildings.filter(i=>i[4]>85).sort((i,s)=>s[4]-i[4]).slice(0,160).map((i,s)=>({p:[(i[0]+i[1])/2,i[4]+2.2,(i[2]+i[3])/2],c:[4.6,.35,.25],blink:1,size:1.1,phase:s*.137%1}));if(!t.length)return;const n=new nc(t,.5);this.group.add(n.mesh)}_searchlights(){const e=this.layout.sites.find(i=>i.type==="neon");if(!e)return;const t=this._buildings.filter(i=>i[4]>55&&Math.hypot((i[0]+i[1])/2-e.x,(i[2]+i[3])/2-e.z)<220).sort((i,s)=>s[4]-i[4]).slice(0,3);this.beams=[];const n=new Gn(15,.5,900,18,1,!0);n.translate(0,450,0),t.forEach((i,s)=>{const a=ic(s%2?12575999:16773328,.55,1.2),o=new ze(n,a);o.position.set((i[0]+i[1])/2,i[4]+1,(i[2]+i[3])/2),o.frustumCulled=!1,o.renderOrder=3,this.group.add(o),this.beams.push({beam:o,ph:s*2.1})})}_crowns(){const e=this.layout.sites.find(i=>i.name==="Empire State");this.crowns=[];const t=(i,s,a,o,c,l,h)=>{const u=this.buildingAt(i,s),f=u?u[4]:a,d=new Gn(l,c,o,20,1,!0);d.translate(0,o/2,0);const g=ic(h,.9,.5),x=new ze(d,g);return x.position.set(i,f-o*.55,s),x.renderOrder=3,x.frustumCulled=!1,this.group.add(x),{mesh:x,mat:g,top:f}};e&&this.crowns.push({...t(e.x,e.z,380,58,7.5,2.2,16777215),kind:"esb"});const n={x:178,z:-650};this.crowns.push({...t(n.x,n.z,318,40,5.5,.6,13625343),kind:"chrysler"})}_torch(){const e=this.layout.sites.find(i=>i.type==="monument");if(!e)return;const t=Yf(3.4);t.position.set(e.x,37.2,e.z),this.group.add(t);const n=Wi(16752704,18);n.position.set(e.x,39,e.z),this.group.add(n),this.torch={flame:t,halo:n}}_bridgeLights(){const e=[];for(const t of this.layout.bridges||[]){const[n,i]=t.p0,[s,a]=t.p1,o=Math.hypot(s-n,a-i),c=(s-n)/o,l=(a-i)/o,h=-l,u=c;for(let f=0;f<o;f+=11)for(const d of[-1,1])e.push({p:[n+c*f+h*8.3*d,t.deck+2.4,i+l*f+u*8.3*d],c:[2.6,1.9,1],size:.9,phase:f*.07%1})}e.length&&this.group.add(new nc(e,.15).mesh)}_lampCones(){const e=this.layout.lamps||[];if(!e.length)return;const t=new Gn(.4,4.2,8.4,10,1,!0);t.translate(0,-4.2,0);const n=ic(16767392,.28,1),i=t.attributes.uv;for(let c=0;c<i.count;c++)i.setY(c,1-i.getY(c));const s=new Dt(t,n,e.length),a=new _e,o=new R;e.forEach(([c,l],h)=>{o.set(c,2.35+8.6,l),a.makeTranslation(o.x,o.y,o.z),s.setMatrixAt(h,a)}),s.frustumCulled=!1,s.renderOrder=3,this.group.add(s),this.parts.cones=s}_steam(){const e=this.layout.sites.find(a=>a.type==="neon")||{x:0,z:0};this.smoke=new Kf(this.group),this.smoke.mesh.material.depthWrite=!1;let t=0,n=0,i=99;const s=()=>(i=i*16807%2147483647,i/2147483647);for(;t<14&&n++<400;){const a=e.x+(s()-.5)*180,o=e.z+(s()-.5)*220,c=this.city.toWorld(a,o);Math.abs(this.city.heightAt(c.x,c.z)-2)>.05||(this.smoke.addEmitter(new R(a,2.1,o),1.3,1.4),t++)}}_parkLights(){const e=this.layout.park_trees||[],t=[];let n=5;const i=()=>(n=n*16807%2147483647,n/2147483647),s=[[2.4,1.4,.6],[2.6,.9,1.4],[.8,2.2,2],[2.6,2,.8]];e.forEach(([o,c,l],h)=>{if(h%3)return;const u=s[Math.floor(i()*s.length)];for(let f=0;f<5;f++){const d=i()*6.28,g=(.8+i()*1.8)*l;t.push({p:[o+Math.cos(d)*g,2.15+(3.2+i()*2.6)*l,c+Math.sin(d)*g],c:u,size:.55+i()*.3,blink:0})}});const a=e.filter((o,c)=>c%5===0);for(let o=0;o<a.length;o++)for(let c=o+1;c<a.length;c++){const[l,h,u]=a[o],[f,d,g]=a[c],x=Math.hypot(f-l,d-h);if(x<7||x>17||i()>.55)continue;const m=2.15+4.2*u,p=2.15+4.2*g;for(let b=0;b<=16;b++){const _=b/16,v=Math.sin(_*Math.PI)*x*.09;t.push({p:[l+(f-l)*_,m+(p-m)*_-v,h+(d-h)*_],c:[2.6,1.9,1],size:.4,phase:(b*.11+o)%1})}break}t.length&&this.group.add(new nc(t,.1).mesh)}_ley(){const e=this.city,t=this.layout.gate,n=[],i=(d,g,x,m,p,b=2)=>{const _=[];for(let v=0;v<=p;v+=b){const M=e.toWorld(d+x*v,g+m*v),S=e.heightAt(M.x,M.z);if(S>6){if(_.length>4)break;continue}_.push([M.x,S+.07,M.z,v])}return _};n.push(i(t.x,t.z-14,0,-1,520)),n.push(i(t.x+12,t.z-6,1,0,150)),n.push(i(t.x-12,t.z-6,-1,0,150));const s=[];for(let d=0;d<=360;d+=4){const g=d*Math.PI/180,x=e.toWorld(t.x+Math.cos(g)*22,t.z+Math.sin(g)*22);s.push([x.x,e.heightAt(x.x,x.z)+.07,x.z,d*.6])}n.push(s);const a=[],o=[],c=[];let l=0;const h=.34;for(const d of n)if(!(d.length<2)){for(let g=0;g<d.length;g++){const x=d[Math.max(0,g-1)],m=d[Math.min(d.length-1,g+1)];let p=m[0]-x[0],b=m[2]-x[2];const _=Math.hypot(p,b)||1;p/=_,b/=_;const v=-b*h,M=p*h;if(a.push(d[g][0]+v,d[g][1],d[g][2]+M,d[g][0]-v,d[g][1],d[g][2]-M),o.push(d[g][3],d[g][3]),g>0){const S=l+(g-1)*2;c.push(S,S+1,S+2,S+1,S+3,S+2)}}l+=d.length*2}const u=new nt;u.setAttribute("position",new Ce(a,3)),u.setAttribute("aS",new Ce(o,1)),u.setIndex(c);const f=new Qe({uniforms:{uTime:On.uTime,uNight:On.uNight},vertexShader:"attribute float aS; varying float vS; void main(){ vS=aS; gl_Position=projectionMatrix*viewMatrix*vec4(position,1.0);} ",fragmentShader:`
        uniform float uTime, uNight; varying float vS;
        void main() {
          float pulse = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(vS * 0.11 - uTime * 2.2), 3.0);
          float fade = exp(-vS * 0.0045);
          vec3 c = mix(vec3(0.62, 0.3, 1.0), vec3(0.3, 0.9, 1.0), 0.5 + 0.5 * sin(vS * 0.03 - uTime * 0.6));
          gl_FragColor = vec4(c * pulse * fade * 2.4 * (0.45 + 0.55 * uNight), 1.0);
        }`,transparent:!0,blending:Gt,depthWrite:!1,side:dt,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});this.ley=new ze(u,f),this.ley.frustumCulled=!1,this.ley.renderOrder=3,this.world.add(this.ley)}_rain(){const t=new Float32Array(20800),n=new Float32Array(2600*2),i=new Float32Array(2600*2*3);for(let a=0;a<2600;a++){const o=[Math.random()*40,Math.random()*40,Math.random(),Math.random()];for(let c=0;c<2;c++)t.set(o,(a*2+c)*4),n[a*2+c]=c}const s=new nt;s.setAttribute("position",new Ye(i,3)),s.setAttribute("aSeed",new Ye(t,4)),s.setAttribute("aEnd",new Ye(n,1)),this.rainU={uTime:On.uTime,uRain:{value:0},uHeight:{value:30},uBox:{value:40},uCam:{value:new R}},this.rainMesh=new Tf(s,new Qe({uniforms:this.rainU,vertexShader:Wy,fragmentShader:jy,transparent:!0,blending:Gt,depthWrite:!1,fog:!1})),this.rainMesh.frustumCulled=!1,this.rainMesh.renderOrder=6,this.world.add(this.rainMesh)}update(e,t,n,i){const s=1-i.daylight;On.uNight.value=s,this.world.visible=this.city.group.visible,this.rainTarget=this.rainOverride??(s>.5?tc(.3,.8,.5+.5*Math.sin(n*.017+2)):0),this.rain+=(this.rainTarget-this.rain)*Math.min(1,e*.35),this.rainU.uRain.value=this.rain,this.rainU.uCam.value.copy(t),this.rainMesh.visible=this.rain>.02,i.wetness=this.rain,this.parts.signs&&(this.parts.signs.material.uniforms.uGain.value=2.6),this.parts.cones&&(this.parts.cones.material.uniforms.uStrength.value=.34*s);for(const a of this.beams||[])a.beam.visible=s>.35,a.beam.material.uniforms.uStrength.value=.6*tc(.35,.8,s),a.beam.rotation.set(.42+.28*Math.sin(n*.31+a.ph),n*.23+a.ph,0,"YXZ");for(const a of this.crowns||[]){const o=tc(.15,.6,s);if(a.kind==="esb"){const c=n*.025%1;a.mat.uniforms.uColor.value.setHSL(c,.9,.55),a.mat.uniforms.uStrength.value=1.5*o}else a.mat.uniforms.uStrength.value=(1.1+.4*Math.sin(n*1.1))*o;a.mesh.visible=o>.01}this.torch&&(this.torch.flame.material.uniforms.uTime.value=n,this.torch.halo.material.opacity=.35+.15*Math.sin(n*7)),this.smoke&&(this.smoke.mesh.material.color.setRGB(.78,.8,.84).lerp(new $(.32,.34,.5),s),this.smoke.update(e,.4,n))}}const qy={name:"StreetMirror",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uWet:{value:.5},uStrength:{value:1}},vertexShader:`
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec3 vW;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vec4 w = modelMatrix * vec4(position, 1.0);
      vW = w.xyz;
      gl_Position = projectionMatrix * viewMatrix * w;
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uWet, uStrength;
    varying vec4 vUv;
    varying vec3 vW;
    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
    }
    float fbm(vec2 p) {
      float a = 0.5, s = 0.0;
      for (int i = 0; i < 3; i++) { s += a * noise(p); p = p * 2.07 + 3.1; a *= 0.5; }
      return s;
    }
    void main() {
      vec3 V = normalize(cameraPosition - vW);
      float dist = length(cameraPosition - vW);
      // puddles: big irregular patches over a film of damp
      float pud = smoothstep(0.46, 0.62, fbm(vW.xz * 0.045 + 7.0));
      float film = 0.35 + 0.65 * pud;
      // surface roughness: ripples that stretch the reflection toward the camera
      vec2 rip = vec2(noise(vW.xz * 1.7 + uTime * 0.35), noise(vW.xz * 1.9 - uTime * 0.3 + 9.0)) - 0.5;
      float breakup = (0.012 + 0.03 * (1.0 - pud)) * (1.0 - exp(-dist * 0.02));
      vec4 uv = vUv;
      uv.xy += rip * breakup * uv.w * 2.0;
      vec3 refl = texture2DProj(tDiffuse, uv).rgb;
      float fres = pow(1.0 - clamp(V.y, 0.0, 1.0), 3.0);
      // a damp film everywhere, near-mirror in the puddles
      float k = mix(0.16 + 0.55 * fres, 0.5 + 0.5 * fres, pud) * uWet * 1.25;
      k = clamp(k, 0.0, 0.95);
      // the farther away, the more it should look like a plain wet road
      k *= 1.0 - smoothstep(380.0, 900.0, dist);
      gl_FragColor = vec4(refl * uStrength, k);
    }
  `};class Yy extends ze{constructor(e,t,n,i){super(e,new Qe({uniforms:Hn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.camera=new Jt,this.hide=i;const s=new sn(n.w,n.h,{type:ln});this.rt=s;const a=new _e;this.material.uniforms.tDiffuse.value=s.texture,this.material.uniforms.textureMatrix.value=a;const o=this,c=new R,l=new R,h=new R,u=new R,f=new R,d=new R,g=new _e,x=this.camera;this.onBeforeRender=function(m,p,b){if(c.setFromMatrixPosition(o.matrixWorld),l.setFromMatrixPosition(b.matrixWorld),g.extractRotation(o.matrixWorld),h.set(0,0,1).applyMatrix4(g),u.subVectors(c,l),u.dot(h)>0)return;u.reflect(h).negate().add(c),g.extractRotation(b.matrixWorld),d.set(0,0,-1).applyMatrix4(g).add(l),f.subVectors(c,d).reflect(h).negate().add(c),x.position.copy(u),x.up.set(0,1,0).applyMatrix4(g).reflect(h),x.lookAt(f),x.far=b.far,x.near=b.near,x.updateMatrixWorld(),x.projectionMatrix.copy(b.projectionMatrix),x.projectionMatrixInverse.copy(b.projectionMatrixInverse),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(x.projectionMatrix).multiply(x.matrixWorldInverse).multiply(o.matrixWorld),o.visible=!1;const _=[];for(const S of o.hide())S&&S.visible&&(S.visible=!1,_.push(S));const v=m.getRenderTarget(),M=m.shadowMap.autoUpdate;m.shadowMap.autoUpdate=!1,m.setRenderTarget(s),m.state.buffers.depth.setMask(!0),m.autoClear===!1&&m.clear(),m.render(p,x),m.shadowMap.autoUpdate=M,m.setRenderTarget(v),b.viewport!==void 0&&m.state.viewport(b.viewport);for(const S of _)S.visible=!0;o.visible=!0}}}function Ky(r,e,t){if(!e.reflect)return null;const n=new Ll(r.island.map(([c,l])=>new ee(c,-l))),i=new Qa(n),s=e.reflect*Math.min(devicePixelRatio,e.pixelRatio),a=new Yy(i,qy,{w:Math.round(innerWidth*s),h:Math.round(innerHeight*s)},t);a.rotation.x=-Math.PI/2,a.position.y=r.ground.y+.03;const o=a.material;return o.transparent=!0,o.depthWrite=!1,o.polygonOffset=!0,o.polygonOffsetFactor=-1,o.polygonOffsetUnits=-2,a.renderOrder=2,a.frustumCulled=!1,a}const Fu=1800;function sc(r){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");if(r===0){const i=t.createLinearGradient(0,0,512,256);i.addColorStop(0,"#5b1d8a"),i.addColorStop(.5,"#c22bb5"),i.addColorStop(1,"#2b8ac2"),t.fillStyle=i,t.fillRect(0,0,512,256),t.fillStyle="#fff",t.font="900 92px ui-sans-serif, system-ui",t.textAlign="center",t.fillText("WANDER",256,118),t.font="600 34px ui-monospace, monospace",t.fillText("· A WORLD AWAY ·",256,180)}else if(r===1){t.fillStyle="#06090f",t.fillRect(0,0,512,256),t.fillStyle="#19e3d2";for(let i=0;i<9;i++){const s=40+Math.random()*170;t.fillRect(24+i*54,236-s,34,s)}t.fillStyle="#e8fbff",t.font="700 40px ui-monospace, monospace",t.textAlign="left",t.fillText("NYSE ▲ 2.4%",24,40),t.fillStyle="#ff5b5b",t.font="700 26px ui-monospace, monospace",t.fillText("WAND ▼ 0.1%",24,76)}else t.fillStyle="#160d04",t.fillRect(0,0,512,256),t.fillStyle="#ffd25e",t.fillRect(0,0,512,14),t.fillRect(0,242,512,14),t.font="900 84px ui-serif, Georgia, serif",t.textAlign="center",t.fillText("TONIGHT",256,108),t.font="700 44px ui-serif, Georgia, serif",t.fillText("THE GATE ON BROADWAY",256,178),t.fillStyle="#e86fd6",t.font="500 26px ui-monospace, monospace",t.fillText("★ ★ ★ ★ ★",256,224);const n=new Ka(e);return n.colorSpace=Lt,n.wrapS=ki,n}class Jy{constructor(e,t,n){this.scene=e,this.timeU=n,this.group=new St,this.group.visible=!1,e.add(this.group),this.gateRoot=new St,this.gateRoot.visible=!1,e.add(this.gateRoot),this.built=!1,this._cam=new R,this.sites=[],this.onDiscover=null,this.colliders=new Ns,this.buildings=[],this._hash=new Map,this._nightMats=[],this.CITY_HALF=Fu,this._m=new _e,this._q=new bt,this._e=new It,this._v=new R,this._s=new R,this._c=new $}_setRot(e,t,n){this.rot=e,this._cos=Math.cos(e),this._sin=Math.sin(e),this._offX=t,this._offZ=n,this.group.rotation.y=e,this.group.position.set(t,0,n),this.gateFwd={x:-this._sin,z:-this._cos}}toWorld(e,t){return{x:e*this._cos+t*this._sin+this._offX,z:-e*this._sin+t*this._cos+this._offZ}}toLocal(e,t){const n=e-this._offX,i=t-this._offZ;return{x:n*this._cos-i*this._sin,z:n*this._sin+i*this._cos}}_hashKey(e,t){return(e+4096)*8192+(t+4096)}_buildHash(){this._hash.clear(),this.buildings.forEach((t,n)=>{const i=Math.floor(t[0]/64),s=Math.floor(t[1]/64),a=Math.floor(t[2]/64),o=Math.floor(t[3]/64);for(let c=i;c<=s;c++)for(let l=a;l<=o;l++){const h=this._hashKey(c,l);let u=this._hash.get(h);u||this._hash.set(h,u=[]),u.push(n)}}),this._cell=64}xEdgeAt(e,t){const n=this._island;let i=null;for(let s=0;s<n.length;s++){const[a,o]=n[s],[c,l]=n[(s+1)%n.length];if(Math.min(o,l)-1e-6<=e&&e<=Math.max(o,l)+1e-6&&Math.abs(l-o)>1e-6){const h=(e-o)/(l-o);if(h>=0&&h<=1){const u=a+h*(c-a);(i===null||t<0&&u<i||t>0&&u>i)&&(i=u)}}}return i===null?t<0?-380:420:i}inIsland(e,t){const n=this._island;let i=!1;for(let s=0,a=n.length-1;s<n.length;a=s++){const[o,c]=n[s],[l,h]=n[a];c>t!=h>t&&e<(l-o)*(t-c)/(h-c+1e-12)+o&&(i=!i)}return i}heightAt(e,t){if(!this.built)return 2;const n=this.toLocal(e,t),i=this._cell,s=Math.floor(n.x/i),a=Math.floor(n.z/i),o=this._hash.get(this._hashKey(s,a));let c=-1/0;if(o)for(const l of o){const h=this.buildings[l];n.x>h[0]&&n.x<h[1]&&n.z>h[2]&&n.z<h[3]&&h[4]>c&&(c=h[4])}return c>-1/0?c:this.inIsland(n.x,n.z)?2:-6}slopeAt(){return 0}biomeName(e,t){if(!this.built)return"New York";const n=this.toLocal(e,t),{PARK:i}=this._rects;return n.x>i.x0&&n.x<i.x1&&n.z>i.z0&&n.z<i.z1?"Central Park":n.z>430?"Lower Manhattan":n.z>-120?"Village & SoHo":n.z>i.z1?n.z>-620?"Midtown South":"Midtown":n.z>i.z0?"Central Park":n.z>-1728?"Upper West & East Side":n.z>-2345&&this.inIsland(n.x,n.z)?"Harlem & Heights":n.x>460&&n.z>160?"Brooklyn":n.x>460&&n.z<150?"Queens":n.x<-460?"New Jersey":Math.hypot(n.x-this._statue[0],n.z-this._statue[1])<60?"Liberty Island":"The Harbor"}async build(){if(this.built)return;this.built=!0;const e=new Or;e.setMeshoptDecoder(Py);const t=I=>e.loadAsync(`assets/${I}.glb`).then(V=>V.scene).catch(()=>(console.warn(`[city] asset missing: ${I}.glb`),null)),[n,i,s,a,o,c,l,h,u,f,d,g,x,m,p,b,_]=await Promise.all([fetch("assets/city/city_layout.json").then(I=>I.json()),t("city/city_ground"),t("city/city_blocks"),t("city/city_landmarks"),t("city/city_bridges"),t("city/city_backdrop"),t("city/city_props"),t("city/city_taxi"),t("city/city_bus"),t("city/city_truck"),t("city/city_ferry"),t("city/city_heli"),t("city/tree_park"),t("city/tree_street"),t("streetlight"),t("car"),t("nature_trees")]);if(!n){console.warn("[city] layout missing");return}this._L=n,this._island=n.island,this._rects={PARK:n.park,BATTERY:n.battery,WASHSQ:n.washsq},this._statue=n.sites.find(I=>I.type==="monument"),this._statue=[this._statue.x,this._statue.z];let v=1e9,M=-1e9,S=1e9,T=-1e9;const C=(I,V,X,se)=>{for(const[Ae,We]of[[I,X],[V,X],[V,se],[I,se]]){const Pe=Ae*Math.cos(n.rot)+We*Math.sin(n.rot),Ne=-Ae*Math.sin(n.rot)+We*Math.cos(n.rot);v=Math.min(v,Pe),M=Math.max(M,Pe),S=Math.min(S,Ne),T=Math.max(T,Ne)}};for(const[I,V,X,se]of n.buildings)C(I,V,X,se);const y=n.rot;this._setRot(y,-(v+M)/2,-(S+T)/2);const w={concrete:2.6,grass:3,sidewalk:2.9,water_pond:2.7,path:2.6,asphalt:1.6,asphalt_st:1.35,asphalt_bw:1.15,paint_white:.9,paint_yellow:.9,sign_glow:.8,dark_metal:.8,stone_mid:.8,pier_wood:.8,trunk:.8},L=new Set;for(const I of[i,s,a,o,c,l])I&&(I.traverse(V=>{if(V.isMesh){V.castShadow=!0,V.receiveShadow=!0,V.material?.name?.startsWith("facade")&&(this._nightMats.includes(V.material)||this._nightMats.push(V.material),Dy(V.material));const X=V.material?.name;X==="grass"?Iy(V.material):(X==="sidewalk"||X==="concrete")&&Ny(V.material);const se=w[V.material?.name];se&&!L.has(V.material)&&(L.add(V.material),V.material.polygonOffset=!0,V.material.polygonOffsetFactor=1,V.material.polygonOffsetUnits=se)}}),this.group.add(I));this._lampMat=null,l&&l.traverse(I=>{I.isMesh&&I.material?.name==="sign_glow"&&(I.castShadow=!1)}),this._mirror=Ky(n,this.quality||{reflect:0},()=>[i,c,...this.extraHide||[]]),this._mirror&&this.group.add(this._mirror),this.buildings=n.buildings,this._buildHash();for(const[I,V,X,se,Ae]of n.buildings){if(Ae<=4)continue;const We=this.toWorld((I+V)/2,(X+se)/2);this.colliders.addBox(We.x,We.z,(V-I)/2,(se-X)/2,2,Ae,y)}const N=n.gate;this.gateLocal=N,this.gatePos=this.toWorld(N.x,N.z),this.gatePos.ry=this.rot+Math.PI;const B=I=>{const V=[];return I?.traverse(X=>{X.isMesh&&V.push(X)}),V};if(p&&n.lamps?.length){const I=B(p);this._lampMat=I.find(V=>V.material?.name==="sl_lamp")?.material||null,I.forEach((V,X)=>{const se=new Dt(V.geometry,V.material,n.lamps.length);se.frustumCulled=!1,n.lamps.forEach(([Ae,We,Pe,Ne],K)=>{this._v.set(Ae,2.35,We),this._e.set(0,Math.atan2(Pe,Ne),0),this._q.setFromEuler(this._e),this._s.setScalar(1),this._m.compose(this._v,this._q,this._s),se.setMatrixAt(K,this._m)}),se.instanceMatrix.needsUpdate=!0,X===I.length-1&&(se.castShadow=!1),this.group.add(se)});for(const[V,X]of n.lamps){const se=this.toWorld(V,X);this.colliders.addCylinder(se.x,se.z,.3,2,9)}}this._treeCrowns=[];const O=(I,V,X)=>{if(!I||!V?.length)return;const se=B(I);se.forEach((Ae,We)=>{const Pe=new Dt(Ae.geometry,Ae.material,V.length);Pe.frustumCulled=!1,V.forEach(([Ne,K,Z],de)=>{this._v.set(Ne,2.15,K),this._e.set(0,de*2.399%(Math.PI*2),0),this._q.setFromEuler(this._e),this._s.setScalar(Z),this._m.compose(this._v,this._q,this._s),Pe.setMatrixAt(de,this._m),Ae.material?.name?.startsWith("leaf")&&(this._c.setHSL(.29+de*.618%1*.08,.45,.3+de*.383%1*.14),Pe.setColorAt(de,this._c))}),Pe.instanceMatrix.needsUpdate=!0,Pe.instanceColor&&(Pe.instanceColor.needsUpdate=!0),We===se.length-1&&(Pe.castShadow=!1),this.group.add(Pe),this._treeCrowns.push(Pe)});for(const[Ae,We,Pe]of V){const Ne=this.toWorld(Ae,We);this.colliders.addCylinder(Ne.x,Ne.z,X*Pe,2,2+3.4*Pe)}},z={};_?.traverse(I=>{I.isMesh&&(z[I.name]=I.geometry)});const G=(I,V,X,se)=>{const Ae=V.map(()=>[]);I.forEach((Pe,Ne)=>Ae[Ne%V.length].push(Pe));const We=new xt({vertexColors:!0,roughness:.92});V.forEach((Pe,Ne)=>{const K=Ae[Ne];if(!K.length||!z[Pe])return;const Z=new Dt(z[Pe],We,K.length);K.forEach(([de,Ue,Me],Ge)=>{this._v.set(de,2.15,Ue),this._e.set(0,(Ge*2.399+Ne)%(Math.PI*2),0),this._q.setFromEuler(this._e),this._s.setScalar(Me*X),this._m.compose(this._v,this._q,this._s),Z.setMatrixAt(Ge,this._m),this._c.setRGB(.88+Ge*.618%1*.24,.92+Ge*.383%1*.14,.9+Ge*.271%1*.16),Z.setColorAt(Ge,this._c)}),Z.instanceMatrix.needsUpdate=!0,Z.instanceColor.needsUpdate=!0,Z.frustumCulled=!1,Z.castShadow=!0,Z.receiveShadow=!0,this.group.add(Z),this._treeCrowns.push(Z)});for(const[Pe,Ne,K]of I){const Z=this.toWorld(Pe,Ne);this.colliders.addCylinder(Z.x,Z.z,se*K*X,2,2+3.2*K*X)}};if(z.oak_a&&n.park_trees?.length?(G(n.park_trees,["oak_a","oak_b","birch","blossom","oak_a","autumn"],.82,.55),G(n.street_trees||[],["birch","oak_b","blossom"],.55,.5)):(O(x,n.park_trees,.5),O(m,n.street_trees,.32)),this._buildTraffic(n,{car:b,taxi:h,bus:u,truck:f},B),this.ferry=null,d){const I=d.clone(!0);I.position.set(150,.4,700),I.rotation.y=Math.PI/2,this.group.add(I);const V=d.clone(!0);this.group.add(V);const X=n.ferry;this.ferry={g:V,cx:X.cx,cz:X.cz,rx:X.rx,rz:X.rz,y:X.y,ph:0,w:.05}}if(this.helis=[],g)for(const I of n.helis){const V=g.clone(!0);this.group.add(V);let X=null;V.traverse(se=>{se.isMesh&&se.material?.name==="heli_rotor"&&(X=se)}),this.helis.push({g:V,rotor:X,...I,ph:I.ph})}this.billboards=[];const q=[sc(0),sc(1),sc(2)];for(const I of n.screens){const V=new ze(new xn(I.w,I.h),new nn({map:q[I.kind%3],color:new $(2.2,2.2,2.2),toneMapped:!1}));V.position.set(I.x,I.y,I.z),V.rotation.y=I.ry,Uy(V.material),this.group.add(V),this.billboards.push({mesh:V,speed:.02+I.kind%3*.017})}this.sites=n.sites.map((I,V)=>{const X=this.toWorld(I.x,I.z);return{...I,id:`city-${V}`,world:"city",x:X.x,z:X.z,y:2,discoverR:I.r,discovered:!1}}),this.mapHalf=Math.max(1200,Math.ceil(Math.max(M-v,T-S)/2)+60),this.mapBase=this.renderMapBase(540),this.fx=new Xy(this,n,this.group),this.fx.build()}_buildTraffic(e,t,n){const i=(function(M){return function(){M|=0,M=M+1831565812|0;let S=Math.imul(M^M>>>15,1|M);return S=S+Math.imul(S^S>>>7,61|S)^S,((S^S>>>14)>>>0)/4294967296}})(20260412),s=[14672872,2237996,9252655,3100045,13215039,4880988,8030356],a={car:2.2,taxi:2.25,bus:5.75,truck:5.2},o=[],c=v=>(o.push(v),v),l=(v,M)=>v.map(([S,T])=>{const C=M?e.avenues.map(y=>[y.x-9.5,y.x+9.5]):e.streets.map(y=>[y-7.5,y+7.5]);for(const[y,w]of C)S>y&&S<w&&(S=w+2),T>y&&T<w&&(T=y-2);return[S,T]}).filter(([S,T])=>T-S>60),h=[];for(const v of e.avenues){const M=l(v.runs?.length?v.runs:[[v.z0,v.z1]],!1);for(const[S,T]of M){const C={x:v.x,z0:S,z1:T,lanes:[]};for(const[y,w]of[[2.2,-1],[5.8,-1],[-2.2,1],[-5.8,1]])C.lanes.push(c({x:v.x+y,z:(S+T)/2,dx:0,dz:w,half:(T-S)/2,kind:"av",prio:2,inter:[],cars:[]}));h.push(C)}}const u=[e.park,e.washsq,e.battery],f=e.streets.filter((v,M)=>M%5===2),d=[];for(const v of f){let M=[[this.xEdgeAt(v,-1)+8,this.xEdgeAt(v,1)-8]];for(const S of u){if(v<S.z0-3||v>S.z1+3)continue;const T=[];for(const[C,y]of M){if(y<=S.x0-3||C>=S.x1+3){T.push([C,y]);continue}C<S.x0-3&&T.push([C,S.x0-3]),y>S.x1+3&&T.push([S.x1+3,y])}M=T}M=l(M,!0);for(const[S,T]of M){if(T-S<90)continue;const C={z:v,lanes:[]};for(const[y,w]of[[2.6,1],[-2.6,-1]])C.lanes.push(c({x:(S+T)/2,z:v+y,dx:w,dz:0,half:(T-S)/2,kind:"st",prio:0,inter:[],cars:[]}));d.push(C)}}this._inters=new Map;const g=v=>{let M=this._inters.get(v);return M||this._inters.set(v,M={blocked:-1,claims:new Map}),M},x=(v,M,S,T)=>{const C=T+2;S>v.half-1||S<C-v.half+2||v.inter.push({obj:M,s:S,block:T,stop:C})},m=15/2+2,p=11/2+2;for(const v of h)for(const M of d){if(M.z<v.z0||M.z>v.z1||!M.lanes.some(T=>Math.abs(v.x-T.x)<=T.half))continue;const S=g(`a${v.x}s${M.z}`);for(const T of v.lanes)x(T,S,(M.z-T.z)*T.dz,p);for(const T of M.lanes)Math.abs(v.x-T.x)<=T.half&&x(T,S,(v.x-T.x)*T.dx,m)}const b=[];for(const v of o){const M=v.half*2,S=Math.max(1,Math.floor((M-24)/34)),T=Math.min((v.kind==="av"?3:1)+Math.floor(i()*2),S);for(let C=0;C<T;C++){const y=i(),w=y<.3?"taxi":y<.36?"bus":y<.5?"truck":"car";b.push({lane:v,t:0,speed:0,vmax:w==="bus"||w==="truck"?9+i()*3:12+i()*9,half:a[w],color:s[Math.floor(i()*s.length)],kind:w})}}for(const v of o){const M=b.filter(C=>C.lane===v),S=Math.max(26,Math.min(85,(v.half*2-20)/M.length));let T=-v.half+8+i()*6;M.forEach((C,y)=>{C.t=Math.min(T+y*S,v.half-8),C.speed=C.vmax*(.5+i()*.5)}),v.cars=M}this._lanes=o,this._laneOrder=o.slice().sort((v,M)=>M.prio-v.prio),this.cars=b,this.carMeshes=[];const _=new $;for(const v of["car","taxi","bus","truck"]){const M=t[v];if(!M)continue;const S=b.filter(T=>T.kind===v);S.length&&n(M).forEach((T,C)=>{const y=new Dt(T.geometry,T.material,S.length);y.frustumCulled=!1,y.castShadow=C<2,this.group.add(y),this.carMeshes.push({inst:y,list:S,part:T,isBody:!!T.material?.name?.includes("body")}),S.forEach((w,L)=>{w.kind==="car"&&T.material?.name==="car_body"&&y.setColorAt(L,_.setHex(w.color))}),y.instanceColor&&(y.instanceColor.needsUpdate=!0)})}}renderMapBase(e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),i=this.mapHalf||Fu,s=e/(i*2),a=(h,u)=>[(h+i)*s,(u+i)*s],o=(h,u=!0)=>{n.beginPath(),h.forEach(([f,d],g)=>{const[x,m]=a(f,d);g===0?n.moveTo(x,m):n.lineTo(x,m)}),u&&n.closePath()},c=h=>h.map(([u,f])=>{const d=this.toWorld(u,f);return[d.x,d.z]});n.fillStyle="#0e1622",n.fillRect(0,0,e,e);for(const[h,u,f,d,g]of this.buildings)g>3.5||u-h<40&&d-f<40||(o(c([[h,f],[u,f],[u,d],[h,d]])),n.fillStyle="#1d2a38",n.fill());o(c(this._island)),n.fillStyle="#39404a",n.fill(),n.strokeStyle="#5a6472",n.lineWidth=1,n.stroke();const l=[["park","#33502f"],["battery","#2c4429"],["washsq","#2c4429"]];for(const[h,u]of l){const f=this._rects[h];f&&(o(c([[f.x0,f.z0],[f.x1,f.z0],[f.x1,f.z1],[f.x0,f.z1]])),n.fillStyle=u,n.fill())}n.strokeStyle="#2a3140",n.lineWidth=Math.max(1,4*s),n.beginPath();for(const h of this._L.avenues){const u=h.runs?.length?h.runs:[[h.z0,h.z1]];for(const[f,d]of u){const[g,x]=a(...Object.values(this.toWorld(h.x,f))),[m,p]=a(...Object.values(this.toWorld(h.x,d)));n.moveTo(g,x),n.lineTo(m,p)}}for(const h of this._L.streets){const u=this._rects.PARK,f=this.xEdgeAt(h,-1),d=this.xEdgeAt(h,1),g=h<u.z1&&h>u.z0?[[f,u.x0-4],[u.x1+4,d]]:[[f,d]];for(const[x,m]of g){const[p,b]=a(...Object.values(this.toWorld(x,h))),[_,v]=a(...Object.values(this.toWorld(m,h)));n.moveTo(p,b),n.lineTo(_,v)}}n.stroke(),n.strokeStyle="#3a4354",n.lineWidth=Math.max(1,3*s),n.beginPath();for(const[h,u,f,d]of this._L.broadway){const[g,x]=a(...Object.values(this.toWorld(h,u))),[m,p]=a(...Object.values(this.toWorld(f,d)));n.moveTo(g,x),n.lineTo(m,p)}n.stroke(),n.strokeStyle="#5a5245";for(const h of this._L.bridges){const[u,f]=a(...Object.values(this.toWorld(h.p0[0],h.p0[1]))),[d,g]=a(...Object.values(this.toWorld(h.p1[0],h.p1[1])));n.beginPath(),n.moveTo(u,f),n.lineTo(d,g),n.stroke()}return t}update(e,t,n,i){if(!this.built||!this._L)return;const s=1-i.daylight;if(zr.value=n,this._mirror){const o=this._mirror.material.uniforms;o.uTime&&(o.uTime.value=n),o.uWet&&(o.uWet.value=.3+.55*s+.3*(this.fx?.rain||0))}this.fx?.update(e,this._cam.set(t.x,t.y+1.6,t.z),n,i);for(const o of this.sites)o.discovered||Math.hypot(t.x-o.x,t.z-o.z)<o.discoverR&&(o.discovered=!0,this.onDiscover?.(o));const a=Math.pow(s,1.3);for(const o of this._nightMats)o.emissiveIntensity=a*2.1;this._lampMat&&(this._lampMat.emissiveIntensity=.4+s*3.2);for(const o of this.billboards)o.mesh.material.map.offset.x+=o.speed*e;if(this._lanes){e=Math.min(e,.1);const{_m:o,_q:c,_e:l,_v:h,_s:u}=this,f=this._frame=(this._frame||0)+1,d=3,g=4,x=7,m=1.4;for(const p of this._lanes)for(const b of p.inter)for(const _ of p.cars)if(Math.abs(_.t-b.s)<b.block){b.obj.blocked=f;break}for(const p of this._laneOrder){const b=p.cars.slice().sort((_,v)=>_.t-v.t);for(let _=b.length-1;_>=0;_--){const v=b[_],M=_<b.length-1,S=M?b[_+1]:null,T=M?S.t-v.t-v.half-S.half:1e9;let C=Math.min(v.vmax,Math.sqrt(2*g*Math.max(0,T-m))),y=null;const w=Math.max(16,v.speed*v.speed/(2*x)+6);for(const N of p.inter){const B=N.obj,O=N.s-N.stop-v.t;if(O<-.6){v.t<N.s+N.block+v.half+1&&B.claims.set(p,v);continue}if(B.blocked===f){C=Math.min(C,Math.sqrt(2*x*Math.max(0,O))),(y===null||O<y)&&(y=O);continue}let z=!1;for(const G of B.claims.keys())if(G!==p){z=!0;break}if(z){C=Math.min(C,Math.sqrt(2*x*Math.max(0,O))),(y===null||O<y)&&(y=O);continue}O<w&&B.claims.set(p,v)}v.speed+=Math.min(Math.max(C-v.speed,-6*e),d*e),v.speed<0&&(v.speed=0);let L=v.speed*e;if(y!==null&&L>y&&(L=Math.max(0,y)),v.t+=L,v.t>p.half){const N=b[0]!==v?b[0]:null;!N||N.t- -p.half>N.half+v.half+1?v.t=-p.half+.5:(v.t=p.half-.2,v.speed=0)}if(M){const N=S.t-v.t,B=v.half+S.half+.4;if(N>=0&&N<B){let O=Math.max(-p.half+.5,S.t-B);y!==null&&(O=Math.min(O,v.t+Math.max(0,y))),v.t=O,v.speed=Math.min(v.speed,S.speed)}}}}for(const p of this._inters.values())p.claims.clear();for(const{inst:p,list:b}of this.carMeshes)b.forEach((_,v)=>{h.set(_.lane.x+_.lane.dx*_.t,2.06,_.lane.z+_.lane.dz*_.t),l.set(0,Math.atan2(_.lane.dx,_.lane.dz),0),c.setFromEuler(l),u.setScalar(1),o.compose(h,c,u),p.setMatrixAt(v,o)}),p.instanceMatrix.needsUpdate=!0}if(this.ferry){const o=this.ferry;o.ph+=o.w*e;const c=o.cx+Math.cos(o.ph)*o.rx,l=o.cz+Math.sin(o.ph)*o.rz;o.g.position.set(c,o.y,l);const h=o.cx+Math.cos(o.ph+.05)*o.rx,u=o.cz+Math.sin(o.ph+.05)*o.rz;o.g.rotation.y=Math.atan2(h-c,u-l)-Math.PI/2,o.g.position.y=o.y+Math.sin(n*.7)*.18}for(const o of this.helis)o.ph+=o.w*e,o.g.position.set(Math.cos(o.ph)*o.r,2+o.h+Math.sin(n*.9+o.r)*4,Math.sin(o.ph)*o.r),o.g.rotation.set(.12,-o.ph+(o.w>0?-Math.PI/2:Math.PI/2),0),o.rotor&&(o.rotor.rotation.y=n*22)}}class Zy{constructor(e,t,n,i){this.terrain=e,this.sky=i,this.mode="nature",this.city=new Jy(t,n),this.natureRoots=[],this.pois=null,this.portalSite=null,this.onModeChange=null,this.onWarp=null,this._fade=this._makeFade(),this.natureColliders=new Ns,this._cityLinked=!1}get colliders(){return this.mode==="city"&&this.city.colliders?this.city.colliders:this.natureColliders}linkCityColliders(){this._cityLinked||!this.city.built||!this.portal?.cityColliders||(this.city.colliders.absorb(this.portal.cityColliders),this._cityLinked=!0)}sites(){if(this.mode==="city")return this.city.built?this.city.sites:[];const e=this.pois?[...this.pois.sites]:[];return this.portalSite&&e.push(this.portalSite),e}gateMarker(){if(this.portal){const e=this.mode==="city"?this.portal.city:this.portal.nature;if(e)return{x:e.pos.x,z:e.pos.z}}return this.portalSite?{x:this.portalSite.x,z:this.portalSite.z}:null}mapBase(e,t=this.mode){return t==="city"&&this.city.built?this.city.renderMapBase(e):iy(this.terrain,e)}_makeFade(){const e=document.createElement("div");return e.id="fade",e.innerHTML="<span>weaving worlds…</span>",document.body.appendChild(e),e}attachNature(e){this.natureRoots.push(...e.filter(Boolean))}heightAt(e,t){return this.mode==="nature"?this.terrain.heightAt(e,t):this.city.heightAt(e,t)}slopeAt(e,t,n=3){return this.mode==="nature"?this.terrain.slopeAt(e,t,n):this.city.slopeAt(e,t)}biomeName(e,t){return this.mode==="city"?this.city.biomeName(e,t):null}tweakFog(){this.mode==="city"&&this.sky.scene.fog&&(this.sky.scene.fog.far=Math.min(this.sky.scene.fog.far,2100),this.sky.scene.fog.near=Math.max(this.sky.scene.fog.near,90))}arrival(e){if(e==="city"){const t=this.city.gatePos||{x:0,z:665},n=this.city.gateFwd||{x:0,z:-1};return{x:t.x+n.x*6,z:t.z+n.z*6,yaw:Math.atan2(-n.x,-n.z),pitch:0}}return{x:Bt.x,z:Bt.z+7,yaw:Math.PI,pitch:0}}async prepareCity(e){this.city.built&&this._cityPrepared||(this.city.built||await this.city.build(),!this._cityPrepared&&this.city.gateRoot&&(e.attachCityEnd(this.city.gateRoot,this.city.gatePos.x,2+3.9,this.city.gatePos.z,this.city.gatePos.ry),this.linkCityColliders(),this._cityPrepared=!0),this.setMode(this.mode))}_warp(e,t,n){return new Promise(i=>{const s=performance.now(),a=c=>c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2,o=()=>{const c=Math.min(1,(performance.now()-s)/n);this.onWarp?.(e+(t-e)*a(c)),c<1?setTimeout(o,16):i()};o()})}async transit(e,t,n){const i=this._fade;await this._warp(0,1,850),i.classList.add("on"),e==="city"&&await this.prepareCity(n),await new Promise(a=>setTimeout(a,180)),this.setMode(e);const s=this.arrival(e);t.pos.set(s.x,this.heightAt(s.x,s.z)+.4,s.z),t.vel.set(0,0,0),t.yaw=s.yaw,t.pitch=s.pitch,await new Promise(a=>setTimeout(a,140)),i.classList.remove("on"),await this._warp(1,0,1100),this.onModeChange?.(e)}setMode(e){this.mode=e;const t=e==="city";for(const n of this.natureRoots)n.visible=!t;this.city.group.visible=t,this.city.gateRoot&&(this.city.gateRoot.visible=t)}}let cn=null;function Qy(){if(!cn)try{cn=new(window.AudioContext||window.webkitAudioContext)}catch{}cn&&cn.state==="suspended"&&cn.resume()}function wn(r,e,t,n,i="sine"){if(!cn)return;const s=cn.createOscillator(),a=cn.createGain();s.type=i,s.frequency.value=r,a.gain.setValueAtTime(0,cn.currentTime+e),a.gain.linearRampToValueAtTime(n,cn.currentTime+e+.02),a.gain.exponentialRampToValueAtTime(1e-4,cn.currentTime+e+t),s.connect(a).connect(cn.destination),s.start(cn.currentTime+e),s.stop(cn.currentTime+e+t+.05)}function $y(){wn(523.25,0,.5,.16),wn(659.25,.09,.5,.14),wn(783.99,.18,.65,.15),wn(1046.5,.27,.8,.12)}function eM(){wn(1318.5,0,.35,.12,"triangle"),wn(1760,.06,.45,.09,"sine")}function tM(){[523.25,659.25,783.99,1046.5,1318.5].forEach((r,e)=>wn(r,e*.11,.7,.13))}function nM(){wn(196,0,.9,.12,"sawtooth"),wn(294,.1,.9,.1,"sawtooth"),wn(392,.2,.9,.11,"sine"),wn(587,.32,1.1,.1,"sine"),wn(880,.46,1.3,.07,"sine")}const za={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Mi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iM=new eo(-1,1,1,-1,0,1);class sM extends nt{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}}const rM=new sM;class kr{constructor(e){this._mesh=new ze(rM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bl extends Mi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hn.clone(e.uniforms),this.material=new Qe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new kr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ou extends Mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class aM extends Mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ee);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bl(za),this.copyPass.material.blending=ri,this.clock=new Bf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ou!==void 0&&(a instanceof Ou?n=!0:a instanceof aM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cM extends Mi{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const lM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Us extends Mi{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new $(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(s,a,{type:ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new sn(s,a,{type:ln});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new sn(s,a,{type:ln});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=lM;this.highPassUniforms=Hn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ee(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hn.clone(za.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $,this._oldClearAlpha=1,this._basic=new nn,this._fsQuad=new kr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Us.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Us.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Qe({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Qe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Us.BlurDirectionX=new ee(1,0);Us.BlurDirectionY=new ee(0,1);const Ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class hM extends Mi{constructor(){super(),this.uniforms=Hn.clone(Ta.uniforms),this.material=new pm({name:Ta.name,uniforms:this.uniforms,vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader}),this._fsQuad=new kr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ju?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Aa={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Ea={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},rc={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class uM extends Mi{constructor(){super(),this._edgesRT=new sn(1,1,{depthBuffer:!1,type:ln}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new sn(1,1,{depthBuffer:!1,type:ln}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Ct,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Ht,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Ct,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=Vt,this._searchTexture.minFilter=Vt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Hn.clone(Aa.uniforms),this._materialEdges=new Qe({defines:Object.assign({},Aa.defines),uniforms:this._uniformsEdges,vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader}),this._uniformsWeights=Hn.clone(Ea.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Qe({defines:Object.assign({},Ea.defines),uniforms:this._uniformsWeights,vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader}),this._uniformsBlend=Hn.clone(rc.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Qe({uniforms:this._uniformsBlend,vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader}),this._fsQuad=new kr(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const fM=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,dM=`
  uniform sampler2D tDiffuse;
  uniform sampler2D tDepth;
  uniform mat4 uInvProj;
  uniform mat4 uCamWorld;
  uniform vec3 uCamPos;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec2 uSunScreen;
  uniform float uSunVis;      // 0..1 how much the sun is in front of the camera
  uniform vec3 uMistColor;
  uniform float uMist;        // base density
  uniform float uMistFall;    // height falloff (1/m)
  uniform float uMistBase;    // height where the mist layer sits (m)
  uniform float uScatter;     // sun in-scatter strength
  uniform float uShafts;      // light shaft strength
  uniform float uAspect;
  varying vec2 vUv;

  void main() {
    vec4 src = texture2D(tDiffuse, vUv);
    vec3 col = src.rgb;
    float depth = texture2D(tDepth, vUv).x;
    bool sky = depth >= 0.99999;

    vec4 ndc = vec4(vUv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 vp = uInvProj * ndc;
    vp /= vp.w;
    float dist = length(vp.xyz);
    vec3 rd = normalize((uCamWorld * vec4(normalize(vp.xyz), 0.0)).xyz);

    if (!sky) {
      // ---- valley mist ----
      float camH = max(uCamPos.y - uMistBase, 0.0);
      float k = uMistFall;
      float ry = rd.y;
      float eps = 1e-3;
      float denom = abs(ry) < eps ? eps : ry;
      float integral = (1.0 - exp(-dist * denom * k)) / (denom * k);
      float mist = uMist * exp(-camH * k) * integral;
      mist = 1.0 - exp(-mist);
      col = mix(col, uMistColor, clamp(mist, 0.0, 0.85));

      // ---- sun in-scatter on the far terrain ----
      float sd = max(dot(rd, uSunDir), 0.0);
      float amt = (1.0 - exp(-dist * 0.00045)) * (pow(sd, 6.0) * 0.9 + pow(sd, 48.0) * 1.4);
      col += uSunColor * amt * uScatter;
    }

    // ---- light shafts ----
    if (uShafts > 0.001 && uSunVis > 0.001) {
      vec2 dir = (uSunScreen - vUv);
      float len = length(dir * vec2(uAspect, 1.0));
      dir *= 0.92 / 18.0;
      vec2 p = vUv;
      float acc = 0.0;
      float w = 1.0;
      for (int i = 0; i < 18; i++) {
        p += dir;
        vec2 q = clamp(p, 0.001, 0.999);
        float dd = texture2D(tDepth, q).x;
        if (dd >= 0.99999) {
          vec3 s = texture2D(tDiffuse, q).rgb;
          float lum = dot(s, vec3(0.299, 0.587, 0.114));
          acc += smoothstep(0.55, 1.6, lum) * w;
        }
        w *= 0.93;
      }
      acc /= 18.0;
      float fall = exp(-len * 1.7);
      col += uSunColor * acc * fall * uShafts * uSunVis;
    }

    gl_FragColor = vec4(col, src.a);
  }
`;class pM extends Mi{constructor(e){super(),this.camera=e,this.material=new Qe({uniforms:{tDiffuse:{value:null},tDepth:{value:null},uInvProj:{value:new _e},uCamWorld:{value:new _e},uCamPos:{value:new R},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new $(1,.9,.7)},uSunScreen:{value:new ee(.5,.5)},uSunVis:{value:0},uMistColor:{value:new $(.7,.8,.9)},uMist:{value:6e-4},uMistFall:{value:.035},uMistBase:{value:0},uScatter:{value:.5},uShafts:{value:.35},uAspect:{value:1}},vertexShader:fM,fragmentShader:dM,depthTest:!1,depthWrite:!1}),this.fsQuad=new kr(this.material),this.u=this.material.uniforms,this._v=new R}setSize(e,t){this.u.uAspect.value=e/t}render(e,t,n){const i=this.camera,s=this.u;s.tDiffuse.value=n.texture,s.tDepth.value=n.depthTexture,s.uInvProj.value.copy(i.projectionMatrixInverse),s.uCamWorld.value.copy(i.matrixWorld),s.uCamPos.value.copy(i.position);const a=this._v.copy(i.position).addScaledVector(s.uSunDir.value,1e3).project(i);s.uSunScreen.value.set(a.x*.5+.5,a.y*.5+.5),i.getWorldDirection(this._fwd||(this._fwd=new R));const o=this._fwd.dot(s.uSunDir.value);s.uSunVis.value=_i.smoothstep(o,.05,.5)*(s.uSunDir.value.y>-.05?1:0),e.setRenderTarget(this.renderToScreen?null:t),this.fsQuad.render(e)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const mM={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.35},uGrain:{value:.02},uChroma:{value:.0016},uSat:{value:1.1},uContrast:{value:1.06},uShadowTint:{value:new $(1,1,1)},uHighTint:{value:new $(1,1,1)},uTintAmt:{value:1},uLift:{value:0},uPortal:{value:0},uPortalTint:{value:new $(.6,.4,1)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uGrain, uChroma, uSat, uContrast, uTintAmt, uLift, uPortal;
    uniform vec3 uShadowTint, uHighTint, uPortalTint;
    varying vec2 vUv;

    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec2 d = vUv - 0.5;
      float r2 = dot(d, d);
      vec2 off = d * r2 * uChroma * 6.0 * (1.0 + 3.0 * uPortal);
      vec3 col = vec3(
        texture2D(tDiffuse, vUv + off).r,
        texture2D(tDiffuse, vUv).g,
        texture2D(tDiffuse, vUv - off).b
      );
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));

      // gentle S-curve around mid grey, then saturation
      col = (col - 0.5) * uContrast + 0.5 + uLift;
      col = mix(vec3(l), col, uSat);

      // split tone: cool/teal shadows, warm highlights (set per world + hour)
      vec3 tint = mix(uShadowTint, uHighTint, smoothstep(0.12, 0.85, l));
      col *= mix(vec3(1.0), tint, uTintAmt);

      // near a gate the picture takes on the destination's colours
      col *= mix(vec3(1.0), 0.8 + 0.5 * uPortalTint, 0.32 * uPortal);

      // vignette
      float v = smoothstep(0.18, 0.78, length(d) * 1.25);
      col *= 1.0 - uVignette * (1.0 + 0.45 * uPortal) * v;
      col += uPortalTint * v * v * 0.07 * uPortal;

      // film grain (stronger in the shadows)
      float g = hash(gl_FragCoord.xy + fract(uTime) * 91.7) - 0.5;
      col += g * uGrain * (1.0 - l * 0.6);

      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `};function gM(){const r=new Bl(mM);return r.grade=r.material.uniforms,r}const zu={nature:{sat:1.16,contrast:1.07,vignette:.34,grain:.018,chroma:.0014,shadow:[.86,.97,1.08],high:[1.08,1.03,.9]},city:{sat:1.2,contrast:1.12,vignette:.42,grain:.024,chroma:.0012,shadow:[.9,.9,1.16],high:[1.1,.98,.94]}},vM={uniforms:{tDiffuse:{value:null},uWarp:{value:0},uTime:{value:0},uTint:{value:new $(.6,.4,1)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uWarp, uTime;
    uniform vec3 uTint;
    varying vec2 vUv;

    float hash(float n) { return fract(sin(n) * 43758.5453); }

    void main() {
      vec2 c = vUv - 0.5;
      float r = length(c);
      vec2 dir = c / max(r, 1e-4);
      float w = uWarp;

      // radial zoom blur with a colour split that grows with the warp
      vec3 acc = vec3(0.0);
      const int N = 16;
      for (int i = 0; i < N; i++) {
        float s = float(i) / float(N);
        float z = 1.0 - w * 0.6 * s * (0.35 + r);
        vec2 uv = 0.5 + c * z;
        float sp = w * 0.016 * (0.3 + s);
        acc.r += texture2D(tDiffuse, uv + dir * sp).r;
        acc.g += texture2D(tDiffuse, uv).g;
        acc.b += texture2D(tDiffuse, uv - dir * sp).b;
      }
      vec3 col = acc / float(N);

      // speed streaks racing outward
      float ang = atan(c.y, c.x);
      float bands = floor(ang * 46.0);
      float flick = floor(uTime * 24.0);
      float st = pow(hash(bands * 1.37 + flick * 0.51), 7.0);
      float len = smoothstep(0.08, 0.7, r) * (1.0 - smoothstep(0.85, 1.2, r));
      col += mix(uTint, vec3(1.0), 0.5) * st * len * 3.4 * w * (1.0 - w * 0.35);

      // flood to the portal's light: violet rim, bright aqua-white heart
      float f = smoothstep(0.5, 1.0, w);
      vec3 wash = mix(uTint * 0.55, vec3(0.85, 0.95, 1.0), smoothstep(0.85, 0.0, r * 1.5));
      col = mix(col, wash, f);

      gl_FragColor = vec4(col, 1.0);
    }
  `};function xM(){const r=new Bl(vM);return r.warp=r.material.uniforms,r.enabled=!1,r}const Wt=(r,e,t)=>r+(e-r)*t;class bM{constructor(e,t,n,i){this.renderer=e,this.quality=i,this.mix=0;const s=innerWidth,a=innerHeight;e.setPixelRatio(Math.min(devicePixelRatio,i.pixelRatio));const o=e.getPixelRatio(),c=new sn(1,1,{type:ln,samples:i.msaa,depthTexture:new El(1,1)});this.composer=new oM(e,c),this.composer.setPixelRatio(o),this.composer.setSize(s,a),this.composer.addPass(new cM(t,n)),this.atmosphere=new pM(n),this.composer.addPass(this.atmosphere),this.bloom=new Us(new ee(s,a),.5,.75,1),this.bloom.enabled=i.bloom,this.composer.addPass(this.bloom),this.composer.addPass(new hM),this.warpPass=xM(),this.composer.addPass(this.warpPass),this.gradePass=gM(),this.composer.addPass(this.gradePass),i.smaa&&this.composer.addPass(new uM)}resize(){this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight)}setLook(e,t,n){this.mix=e;const i=this.gradePass.grade,s=zu.nature,a=zu.city;i.uSat.value=Wt(s.sat,a.sat,e),i.uContrast.value=Wt(s.contrast,a.contrast,e),i.uVignette.value=Wt(s.vignette,a.vignette,e),i.uGrain.value=Wt(s.grain,a.grain,e),i.uChroma.value=Wt(s.chroma,a.chroma,e),i.uTime.value=n;const o=1-t.daylight;i.uShadowTint.value.setRGB(Wt(s.shadow[0],a.shadow[0],e)*Wt(1,.9,o),Wt(s.shadow[1],a.shadow[1],e)*Wt(1,.92,o),Wt(s.shadow[2],a.shadow[2],e)*Wt(1,1.12,o)),i.uHighTint.value.setRGB(Wt(s.high[0],a.high[0],e)*Wt(1,1.04,t.dusk),Wt(s.high[1],a.high[1],e)*Wt(1,.96,t.dusk),Wt(s.high[2],a.high[2],e)*Wt(1,.86,t.dusk));const c=this.atmosphere.u;c.uSunDir.value.copy(t.sunDir),c.uSunColor.value.copy(t.sunColor),c.uMistColor.value.copy(t.horizonColor);const l=this.quality;c.uMist.value=l.mist?t.mistDensity:0,c.uShafts.value=l.shafts?t.shaftStrength:0,c.uScatter.value=t.scatterStrength}setPortal(e,t){const n=this.gradePass.grade;n.uPortal.value=e,n.uPortalTint.value.copy(t),this.warpPass.enabled||this.warpPass.warp.uTint.value.copy(t)}setWarp(e){this.warpPass.enabled=e>.001,this.warpPass.warp.uWarp.value=e}render(){this.warpPass.warp.uTime.value=performance.now()/1e3,this.composer.render()}}const ir=(r,e)=>Math.atan2(-r,-e);function _M(r){const{player:e,worlds:t,terrain:n,pois:i,sky:s,portal:a}=r;function o(m,p,b,_=-.05,v=.1){e.pos.set(m,t.heightAt(m,p)+v,p),e.vel.set(0,0,0),e.yaw=b,e.pitch=_,e.update(1/60)}function c(m){return i.sites.find(p=>p.type===m)}function l(){const m=n.findSpawn();let p=null,b=1e9;for(let _=-1500;_<=1500;_+=60)for(let v=-1500;v<=1500;v+=60){const M=n.heightAt(_,v);if(M<5||M>30||n.forestMask(_,v)<.28||n.slopeAt(_,v)>.2)continue;const S=Math.hypot(_-m.x,v-m.z);S<b&&(b=S,p={x:_,z:v})}return p||m}function h(){for(let m=120;m<1800;m+=90)for(let p=0;p<24;p++){const b=p/24*Math.PI*2,_=Math.cos(b)*m,v=Math.sin(b)*m,M=n.heightAt(_,v);if(!(M<.7||M>3.2))for(let S=0;S<12;S++){const T=S/12*Math.PI*2,C=_+Math.cos(T)*70,y=v+Math.sin(T)*70;if(n.heightAt(C,y)<pt-2)return{x:_,z:v,yaw:ir(Math.cos(T),Math.sin(T))}}}return null}function u(m,p){for(let b=0;b<120;b+=6)for(let _=0;_<12;_++){const v=_/12*Math.PI*2,M=m+Math.cos(v)*b,S=p+Math.sin(v)*b;if(t.heightAt(M,S)<3&&t.city.inIsland(M,S))return{x:M,z:S}}return{x:m,z:p}}async function f(m){t.mode!==m&&(await a.onTransit(m),await new Promise(p=>setTimeout(p,500)))}const d=(m,p,b=-.04)=>{const _=Math.atan2(m.z-Bt.z,m.x-Bt.x)+.6,v=m.x+Math.cos(_)*p,M=m.z+Math.sin(_)*p;o(v,M,ir(m.x-v,m.z-M),b)},g={"meadow-noon":async()=>{await f("nature"),s.time=.5;const m=n.findSpawn();o(m.x,m.z,Math.PI*.25,-.08)},"forest-dusk":async()=>{await f("nature"),s.time=.735;const m=l();o(m.x,m.z,Math.PI*.6,-.04)},"lake-sunrise":async()=>{await f("nature"),s.time=.265;const m=h();m&&o(m.x,m.z,m.yaw,0)},"shrine-night":async()=>{await f("nature"),s.time=.02;const m=c("shrine")||i.sites[0];d(m,9)},"lighthouse-dusk":async()=>{await f("nature"),s.time=.74;const m=c("lighthouse")||i.sites[0];d(m,38,.1)},"gate-night":async()=>{await f("nature"),s.time=.03,o(Bt.x,Bt.z+12,0,.02)},"gate-dusk":async()=>{await f("nature"),s.time=.75,o(Bt.x,Bt.z+14,0,.04)},"times-night":async()=>{await f("city"),s.time=.03;const m=t.city.sites.find(T=>T.type==="neon"),p=u(m.x,m.z);let b=null,_=1e9;const v=new R;for(const T of t.city.billboards){T.mesh.getWorldPosition(v);const C=Math.hypot(v.x-p.x,v.z-p.z);C>15&&C<_&&(_=C,b=v.clone())}const M=b?b.x-p.x:0,S=b?b.z-p.z:-1;o(p.x,p.z,ir(M,S),.3)},"park-day":async()=>{await f("city"),s.time=.45;const m=t.city.sites.find(b=>b.type==="park"),p=u(m.x+30,m.z+80);o(p.x,p.z,ir(m.x-p.x,m.z-p.z),-.05)},"skyline-air":async()=>{await f("city"),s.time=.78;const m=t.city.gatePos,p=t.city.gateFwd||{x:0,z:-1};o(m.x-p.x*60,m.z-p.z*60,ir(p.x,p.z),-.18,150)}};async function x(m){const p=g[m];if(!p)throw new Error(`unknown shot "${m}" — try ${Object.keys(g).join(", ")}`);return await p(),r.setHold(!0),m}return{shot:x,names:Object.keys(g)}}const yM=new URLSearchParams(location.search),Ln=Number(yM.get("seed"))||20260,Hl=`wander:progress:${Ln}`,ac=document.getElementById("overlay"),ul=document.getElementById("cta");document.getElementById("seedLabel").textContent=`seed ${Ln} · 4 km × 4 km · append ?seed=1234 for a new world`;const sr={value:0},rr={value:1};let Pt,jt,ei,zt,kt,oc,ar,cc,ms,lc,hc,mn,gn,or,vi,ct,pn,Tt,Ie,ku,Kt=0,Ii,ti,Ca=!1,uc=0,fc=60,dc=!1,Ra=!0;function MM(){try{return JSON.parse(localStorage.getItem(Hl))||{d:[],o:[],cd:[],m:"nature"}}catch{return{d:[],o:[],cd:[],m:"nature"}}}let kn=MM();function gs(){try{kn.d=[...mn.sites.filter(r=>r.discovered).map(r=>r.id),...Tt.site.discovered?[Tt.site.id]:[]],kn.o=[...gn.collected],kn.cd=Ie.city.sites.filter(r=>r.discovered).map(r=>r.id),kn.m=Ie.mode,localStorage.setItem(Hl,JSON.stringify(kn))}catch{}}function SM(){try{localStorage.removeItem(Hl)}catch{}location.reload()}ul.textContent="generating world…";requestAnimationFrame(()=>setTimeout(wM,30));async function wM(){ti=Fb(),Pt=new Lb({antialias:!1,powerPreference:"high-performance"}),Pt.setSize(innerWidth,innerHeight),Pt.info.autoReset=!1,Pt.shadowMap.enabled=!0,Pt.shadowMap.type=Hu,Pt.toneMapping=dl,document.getElementById("app").appendChild(Pt.domElement),jt=new bf,jt.fog=new Sl(12835308,80,2800),ei=new Jt(70,innerWidth/innerHeight,.3,15e3),ei.rotation.order="YXZ",zt=new Nb(Ln),jt.add(zt.mesh),kt=new Wb(jt,Pt,ti),Ii=new bM(Pt,jt,ei,ti),kt.setPixelRatio(Pt.getPixelRatio()),oc=new qb(jt,zt),ar=await C_(zt,Ln,rr,sr,ti),jt.add(ar.group),cc=new R_(zt,jt,rr,Ln),lc=new O_(zt,jt,rr,ti),ms=new G_(zt,jt,Ln),mn=await ly(zt,jt,Ln,{wind:rr,timeU:sr}),gn=new uy(zt,jt,Ln,mn,kn.o),hc=new B_(zt,jt,mn),or=new dy(zt,jt,Ln,sr,ei),Ie=new Zy(zt,jt,Ln,kt),Ie.pois=mn,Tt=new Ry(jt,zt,sr,ti),Ie.portalSite=Tt.site,Ie.portal=Tt,Ie.city.quality=ti,Ie.city.extraHide=[oc.mesh],Tt.bind({renderer:Pt,worlds:Ie,sky:kt}),Ie.onWarp=c=>Ii.setWarp(c),Ie.attachNature([zt.mesh,ar.group,lc.group,cc.mesh,ms.bodyMesh,ms.headMesh,ms.legMesh,gn.mesh,...gn.halos,or.birdMesh,or.fireflyMesh,or.butterflyMesh,hc.group,...mn.sites.map(c=>c.group)]),Ie.natureColliders.absorb(ar.colliders),Ie.natureColliders.absorb(mn.colliders),Ie.natureColliders.absorb(Tt.natureColliders);for(const c of mn.sites)kn.d.includes(c.id)&&(c.discovered=!0);Tt.site.discovered=kn.d.includes(Tt.site.id);const r=zt.findSpawn();ct=new ey(ei,Ie,Pt.domElement,jt),ct.spawn(r.x,r.z),ct.update(1/60),pn=new sy(zt),vi=new py(Ie,gn,pn.exploration,SM);async function e(){if(kn.m==="city"){await Ie.city.build(),Tt.attachCityEnd(Ie.city.gateRoot,Ie.city.gatePos.x,2+3.9,Ie.city.gatePos.z,Ie.city.gatePos.ry),Ie.linkCityColliders();for(const l of Ie.city.sites)kn.cd.includes(l.id)&&(l.discovered=!0);Ie.setMode("city");const c=Ie.arrival("city");ct.pos.set(c.x,Ie.heightAt(c.x,c.z)+.4,c.z),ct.yaw=c.yaw}else Ie.setMode("nature");pn.bind(Ie,gn),pn.setWorld(Ie.mode),vi.setWorld(Ie.mode)}await e();const t=c=>{$y(),pn.toast(c.name,c.flavor),vi.refreshList(),gs()};mn.onDiscover=t,Tt.onDiscover=t,Ie.city.onDiscover=t,gn.onCollect=()=>{eM(),pn.updateShards(),pn.toast("Spirit shard collected",`${gn.count} of ${gn.total}`),gs()},gn.onComplete=()=>{tM(),pn.toast("Every spirit shard found","The world feels a little brighter."),gs()},Tt.onTransit=async c=>{nM(),pn.toast(c==="city"?"New York":"The Wilds",c==="city"?"The other side of the gate is another world.":"Home again — the valley missed you."),await Ie.transit(c,ct,Tt)},Ie.onModeChange=()=>{pn.setWorld(Ie.mode),vi.setWorld(Ie.mode),gs()},ul.textContent="click to explore",Ie.mode==="nature"&&setTimeout(()=>Ie.prepareCity(Tt).catch(()=>{}),1200);let n=0;function i(){n=performance.now();try{const c=Pt.domElement.requestPointerLock();c&&typeof c.catch=="function"&&c.catch(()=>{})}catch{}}function s(){ac.classList.add("hidden"),document.body.classList.add("playing"),Ra=!1,dc=!0,ct.inputEnabled=!0,Qy(),i()}function a(){Ra=!0,ct.inputEnabled=!1,ct.keys=Object.create(null),ul.textContent="click to continue",ac.classList.remove("hidden"),document.body.classList.remove("playing")}ac.addEventListener("click",s),document.addEventListener("pointerlockchange",()=>{if(!document.pointerLockElement&&dc){if(performance.now()-n<300)return;a()}}),document.addEventListener("pointerlockerror",()=>{}),addEventListener("keydown",c=>{if(c.code==="Escape"&&dc&&!document.pointerLockElement){if(vi.anyOpen)return;a()}}),addEventListener("contextmenu",c=>{document.pointerLockElement&&c.preventDefault()}),ku=new Bf,Pt.setAnimationLoop(()=>{const c=Math.min(ku.getDelta(),.05);Kt+=c,sr.value=Kt,rr.value=Math.max(.15,.85+.4*Math.sin(Kt*.5)+.25*Math.sin(Kt*1.7+2)),fc+=(1/Math.max(c,1e-4)-fc)*.05,kt.world=Ie.mode,kt.update(c,ct.pos,Kt),Ie.tweakFog(),!Ra&&!Ca&&ct.update(c),ar.update(c),Tt.update(c,ct.pos,Kt,Ie.mode,kt.daylight,ei.position),Ie.mode==="nature"?(cc.update(c,ct.pos,Kt),lc.update(ct.pos,Kt,kt),hc.update(c,ct.pos,Kt,kt),ms.update(c,ct.pos,Kt),mn.update(c,ct.pos,Kt,kt),gn.update(c,ct.pos,Kt),or.update(c,ct.pos,Kt,kt.daylight)):Ie.city.update(c,ct.pos,Kt,kt),oc.update(Kt,kt,ct),vi.update(ct),pn.setUnderwater(ei.position.y<pt+.15),pn.update(c,ct,kt,!Ra),uc+=((Ie.mode==="city"?1:0)-uc)*Math.min(1,c*1.4),Ii.setLook(uc,kt,Kt),Ii.setPortal(Tt.proximity,Tt.proximityTint),Pt.info.reset(),Ii.render()}),addEventListener("resize",()=>{ei.aspect=innerWidth/innerHeight,ei.updateProjectionMatrix(),Ii.resize()});const o=_M({player:ct,worlds:Ie,terrain:zt,pois:mn,sky:kt,portal:Tt,setHold:c=>{Ca=c}});window.__wander={quality:ti,renderer:Pt,pipeline:Ii,shot:o.shot,shots:o.names,get hold(){return Ca},set hold(c){Ca=c},stats:()=>({fps:Math.round(fc),calls:Pt.info.render.calls,triangles:Pt.info.render.triangles,textures:Pt.info.memory.textures,geometries:Pt.info.memory.geometries,quality:ti.name}),seed:Ln,player:ct,terrain:zt,sky:kt,wildlife:ms,pois:mn,orbs:gn,journal:vi,portal:Tt,worlds:Ie,get city(){return Ie.city},teleport:(c,l)=>ct.spawn(c,l),toCity:()=>Tt.onTransit("city"),setRain:c=>{Ie.city.fx&&(Ie.city.fx.rainOverride=c)},toWilds:()=>Tt.onTransit("nature"),setTime:c=>{kt.time=(c%1+1)%1},toggleView:()=>{ct.view=ct.view==="third"?"first":"third"},discoverAll:()=>{mn.discoverAll(),Tt.site.discovered=!0,vi.refreshList(),gs()},collectAll:()=>{gn.collectAll(),pn.updateShards(),gs()},start:s,pause:a}}
