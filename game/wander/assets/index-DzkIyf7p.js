(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const zc="180",Hf=0,xh=1,Gf=2,Sd=1,Td=2,hi=3,pi=0,on=1,xe=2,di=0,Qi=1,Fe=2,bh=3,_h=4,Vf=5,Yi=100,Wf=101,jf=102,Xf=103,qf=104,Yf=200,Kf=201,Jf=202,Qf=203,Ol=204,Bl=205,Zf=206,$f=207,tp=208,ep=209,np=210,ip=211,sp=212,rp=213,op=214,Hl=0,Gl=1,Vl=2,Gs=3,Wl=4,jl=5,Xl=6,ql=7,Ad=0,ap=1,lp=2,Li=0,Ed=1,Cd=2,Rd=3,kc=4,Pd=5,Ld=6,Dd=7,yh="attached",cp="detached",Id=300,Vs=301,Ws=302,Yl=303,Kl=304,va=306,Zi=1e3,Ri=1001,aa=1002,He=1003,Nd=1004,Sr=1005,Be=1006,Zo=1007,Jn=1008,Cn=1009,Fd=1010,Ud=1011,Ur=1012,Oc=1013,$i=1014,Fn=1015,an=1016,Bc=1017,Hc=1018,zr=1020,zd=35902,kd=35899,Od=1021,Bd=1022,An=1023,kr=1026,Or=1027,Br=1028,Gc=1029,Hd=1030,Vc=1031,Wc=1033,$o=33776,ta=33777,ea=33778,na=33779,Jl=35840,Ql=35841,Zl=35842,$l=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,vc=36492,xc=36494,bc=36495,_c=36283,yc=36284,Mc=36285,wc=36286,hp=2200,up=2201,dp=2202,Hr=2300,Gr=2301,La=2302,Is=2400,Ns=2401,la=2402,jc=2500,fp=2501,pp=0,Gd=1,Sc=2,mp=3200,gp=3201,Vd=0,vp=1,Ci="",Ne="srgb",un="srgb-linear",ca="linear",me="srgb",os=7680,Mh=519,xp=512,bp=513,_p=514,Wd=515,yp=516,Mp=517,wp=518,Sp=519,Tc=35044,zs=35048,wh="300 es",Qn=2e3,ha=2001;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const Er=Math.PI/180,js=180/Math.PI;function Un(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function $t(r,t,e){return Math.max(t,Math.min(e,r))}function Xc(r,t){return(r%t+t)%t}function Tp(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Ap(r,t,e){return r!==t?(e-r)/(t-r):0}function Cr(r,t,e){return(1-e)*r+e*t}function Ep(r,t,e,n){return Cr(r,t,1-Math.exp(-e*n))}function Cp(r,t=1){return t-Math.abs(Xc(r,t*2)-t)}function Rp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Pp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Lp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Dp(r,t){return r+Math.random()*(t-r)}function Ip(r){return r*(.5-Math.random())}function Np(r){r!==void 0&&(Sh=r);let t=Sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fp(r){return r*Er}function Up(r){return r*js}function zp(r){return(r&r-1)===0&&r!==0}function kp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Op(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bp(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ie={DEG2RAD:Er,RAD2DEG:js,generateUUID:Un,clamp:$t,euclideanModulo:Xc,mapLinear:Tp,inverseLerp:Ap,lerp:Cr,damp:Ep,pingpong:Cp,smoothstep:Rp,smootherstep:Pp,randInt:Lp,randFloat:Dp,randFloatSpread:Ip,seededRandom:Np,degToRad:Fp,radToDeg:Up,isPowerOfTwo:zp,ceilPowerOfTwo:kp,floorPowerOfTwo:Op,setQuaternionFromProperEuler:Bp,normalize:ge,denormalize:Bn};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],b=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=b;return}if(u!==b||l!==d||c!==f||h!==m){let g=1-a;const p=l*d+c*f+h*m+u*b,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const y=Math.sqrt(_),M=Math.atan2(y,p*v);g=Math.sin(g*M)/y,a=Math.sin(a*M)/y}const x=a*v;if(l=l*g+d*x,c=c*g+f*x,h=h*g+m*x,u=u*g+b*x,g===1-a){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new E,Th=new ve;class Jt{constructor(t,e,n,i,s,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],v=i[1],_=i[4],x=i[7],y=i[2],M=i[5],T=i[8];return s[0]=o*b+a*v+l*y,s[3]=o*g+a*_+l*M,s[6]=o*p+a*x+l*T,s[1]=c*b+h*v+u*y,s[4]=c*g+h*_+u*M,s[7]=c*p+h*x+u*T,s[2]=d*b+f*v+m*y,s[5]=d*g+f*_+m*M,s[8]=d*p+f*x+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return t[0]=u*b,t[1]=(i*c-h*n)*b,t[2]=(a*n-i*o)*b,t[3]=d*b,t[4]=(h*e-i*l)*b,t[5]=(i*s-a*e)*b,t[6]=f*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Jt;function jd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hp(){const r=Vr("canvas");return r.style.display="block",r}const Ah={};function Wr(r){r in Ah||(Ah[r]=!0,console.warn(r))}function Gp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Eh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const r={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===me&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Wr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Wr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[un]:{primaries:t,whitePoint:n,transfer:ca,toXYZ:Eh,fromXYZ:Ch,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Eh,fromXYZ:Ch,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),r}const ae=Vp();function fi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class Wp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=Vr("canvas")),as.width=t.width,as.height=t.height;const i=as.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jp=0;class qc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Na(i[o].image)):s.push(Na(i[o]))}else s=Na(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Na(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xp=0;const Fa=new E;class Ue extends is{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Ri,i=Ri,s=Be,o=Jn,a=An,l=Cn,c=Ue.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Un(),this.name="",this.source=new qc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fa).x}get height(){return this.source.getSize(Fa).y}get depth(){return this.source.getSize(Fa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Id;Ue.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,x=(f+1)/2,y=(p+1)/2,M=(h+d)/4,T=(u+b)/4,R=(m+g)/4;return _>x&&_>y?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=M/n,s=T/n):x>y?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=M/i,s=R/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=T/s,i=R/s),this.set(n,i,s,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qp extends is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Ue(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new qc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xe extends qp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xd extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),so.subVectors(this.max,rr),ls.subVectors(t.a,rr),cs.subVectors(t.b,rr),hs.subVectors(t.c,rr),xi.subVectors(cs,ls),bi.subVectors(hs,cs),Ui.subVectors(ls,hs);let e=[0,-xi.z,xi.y,0,-bi.z,bi.y,0,-Ui.z,Ui.y,xi.z,0,-xi.x,bi.z,0,-bi.x,Ui.z,0,-Ui.x,-xi.y,xi.x,0,-bi.y,bi.x,0,-Ui.y,Ui.x,0];return!Ua(e,ls,cs,hs,so)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,ls,cs,hs,so))?!1:(ro.crossVectors(xi,bi),e=[ro.x,ro.y,ro.z],Ua(e,ls,cs,hs,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ni=[new E,new E,new E,new E,new E,new E,new E,new E],zn=new E,io=new vi,ls=new E,cs=new E,hs=new E,xi=new E,bi=new E,Ui=new E,rr=new E,so=new E,ro=new E,zi=new E;function Ua(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){zi.fromArray(r,s);const a=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Kp=new vi,or=new E,za=new E;class $n{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(za)),this.expandByPoint(or.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ii=new E,ka=new E,oo=new E,_i=new E,Oa=new E,ao=new E,Ba=new E;class xa{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ka.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(ka);const s=t.distanceTo(e)*.5,o=-this.direction.dot(oo),a=_i.dot(this.direction),l=-_i.dot(oo),c=_i.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const b=1/h;u*=b,d*=b,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ka).addScaledVector(oo,d),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,s){Oa.subVectors(e,t),ao.subVectors(n,t),Ba.crossVectors(Oa,ao);let o=this.direction.dot(Ba),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);const l=a*this.direction.dot(ao.crossVectors(_i,ao));if(l<0)return null;const c=a*this.direction.dot(Oa.cross(_i));if(c<0||l+c>o)return null;const h=-a*_i.dot(Ba);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,m,b,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,b,g)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,b,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),s=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-b*c,e[9]=-a*l,e[2]=b-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,b=c*u;e[0]=d+b*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=b+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,b=c*u;e[0]=d-b*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=b-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,b=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+b,e[1]=l*u,e[5]=b*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,b=a*c;e[0]=l*h,e[4]=b-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-b*u}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+b,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=b*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jp,t,Qp)}lookAt(t,e,n){const i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),yi.crossVectors(n,_n),yi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),yi.crossVectors(n,_n)),yi.normalize(),lo.crossVectors(_n,yi),i[0]=yi.x,i[4]=lo.x,i[8]=_n.x,i[1]=yi.y,i[5]=lo.y,i[9]=_n.y,i[2]=yi.z,i[6]=lo.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],v=n[3],_=n[7],x=n[11],y=n[15],M=i[0],T=i[4],R=i[8],w=i[12],S=i[1],P=i[5],I=i[9],z=i[13],H=i[2],G=i[6],X=i[10],tt=i[14],N=i[3],W=i[7],Q=i[11],ot=i[15];return s[0]=o*M+a*S+l*H+c*N,s[4]=o*T+a*P+l*G+c*W,s[8]=o*R+a*I+l*X+c*Q,s[12]=o*w+a*z+l*tt+c*ot,s[1]=h*M+u*S+d*H+f*N,s[5]=h*T+u*P+d*G+f*W,s[9]=h*R+u*I+d*X+f*Q,s[13]=h*w+u*z+d*tt+f*ot,s[2]=m*M+b*S+g*H+p*N,s[6]=m*T+b*P+g*G+p*W,s[10]=m*R+b*I+g*X+p*Q,s[14]=m*w+b*z+g*tt+p*ot,s[3]=v*M+_*S+x*H+y*N,s[7]=v*T+_*P+x*G+y*W,s[11]=v*R+_*I+x*X+y*Q,s[15]=v*w+_*z+x*tt+y*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],b=t[7],g=t[11],p=t[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+b*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+g*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],b=t[13],g=t[14],p=t[15],v=u*g*c-b*d*c+b*l*f-a*g*f-u*l*p+a*d*p,_=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,x=h*b*c-m*u*c+m*a*f-o*b*f-h*a*p+o*u*p,y=m*u*l-h*b*l-m*a*d+o*b*d+h*a*g-o*u*g,M=e*v+n*_+i*x+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(b*d*s-u*g*s-b*i*f+n*g*f+u*i*p-n*d*p)*T,t[2]=(a*g*s-b*l*s+b*i*c-n*g*c-a*i*p+n*l*p)*T,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*T,t[4]=_*T,t[5]=(h*g*s-m*d*s+m*i*f-e*g*f-h*i*p+e*d*p)*T,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*T,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*T,t[8]=x*T,t[9]=(m*u*s-h*b*s-m*n*f+e*b*f+h*n*p-e*u*p)*T,t[10]=(o*b*s-m*a*s+m*n*c-e*b*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=y*T,t[13]=(h*b*i-m*u*i+m*n*d-e*b*d-h*n*g+e*u*g)*T,t[14]=(m*a*i-o*b*i-m*n*l+e*b*l+o*n*g-e*a*g)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,b=o*h,g=o*u,p=a*u,v=l*c,_=l*h,x=l*u,y=n.x,M=n.y,T=n.z;return i[0]=(1-(b+p))*y,i[1]=(f+x)*y,i[2]=(m-_)*y,i[3]=0,i[4]=(f-x)*M,i[5]=(1-(d+p))*M,i[6]=(g+v)*M,i[7]=0,i[8]=(m+_)*T,i[9]=(g-v)*T,i[10]=(1-(d+b))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],kn.copy(this);const c=1/s,h=1/o,u=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Qn,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,b;if(l)m=s/(o-s),b=o*s/(o-s);else if(a===Qn)m=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===ha)m=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Qn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,b;if(l)m=1/(o-s),b=o/(o-s);else if(a===Qn)m=-2/(o-s),b=-(o+s)/(o-s);else if(a===ha)m=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new E,kn=new At,Jp=new E(0,0,0),Qp=new E(1,1,1),yi=new E,lo=new E,_n=new E,Rh=new At,Ph=new ve;class qe{constructor(t=0,e=0,n=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zp=0;const Lh=new E,ds=new ve,si=new At,co=new E,ar=new E,$p=new E,tm=new ve,Dh=new E(1,0,0),Ih=new E(0,1,0),Nh=new E(0,0,1),Fh={type:"added"},em={type:"removed"},fs={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Ae extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new E,e=new qe,n=new ve,i=new E(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new Jt}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Nh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?co.copy(t):co.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ar,co,this.up):si.lookAt(co,ar,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(si),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(em),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,$p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new E(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new E,ri=new E,Ga=new E,oi=new E,ps=new E,ms=new E,Uh=new E,Va=new E,Wa=new E,ja=new E,Xa=new ue,qa=new ue,Ya=new ue;class Nn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),On.subVectors(t,e),i.cross(On);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){On.subVectors(i,e),ri.subVectors(n,e),Ga.subVectors(t,e);const o=On.dot(On),a=On.dot(ri),l=On.dot(Ga),c=ri.dot(ri),h=ri.dot(Ga),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xa,s.x),o.addScaledVector(qa,s.y),o.addScaledVector(Ya,s.z),o}static isFrontFacing(t,e,n,i){return On.subVectors(n,e),ri.subVectors(t,e),On.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),On.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ps.subVectors(i,n),ms.subVectors(s,n),Va.subVectors(t,n);const l=ps.dot(Va),c=ms.dot(Va);if(l<=0&&c<=0)return e.copy(n);Wa.subVectors(t,i);const h=ps.dot(Wa),u=ms.dot(Wa);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ps,o);ja.subVectors(t,s);const f=ps.dot(ja),m=ms.dot(ja);if(m>=0&&f<=m)return e.copy(s);const b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ms,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Uh.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Uh,a);const p=1/(g+b+d);return o=b*p,a=d*p,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Ka(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ${constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=Xc(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ka(o,s,t+1/3),this.g=Ka(o,s,t),this.b=Ka(o,s,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Yd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ae.workingToColorSpace(en.copy(this),t),Math.round($t(en.r*255,0,255))*65536+Math.round($t(en.g*255,0,255))*256+Math.round($t(en.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ne){ae.workingToColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(ho);const n=Cr(Mi.h,ho.h,e),i=Cr(Mi.s,ho.s,e),s=Cr(Mi.l,ho.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new $;$.NAMES=Yd;let nm=0;class Gn extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=Qi,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Bl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $e extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new E,uo=new rt;let im=0;class Ot{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:im++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}}class Kd extends Ot{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jd extends Ot{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bt extends Ot{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sm=0;const Ln=new At,Ja=new Ae,gs=new E,yn=new vi,lr=new vi,Je=new E;class ee extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jd(t)?Jd:Kd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(yn.min,lr.min),yn.expandByPoint(Je),Je.addVectors(yn.max,lr.max),yn.expandByPoint(Je)):(yn.expandByPoint(lr.min),yn.expandByPoint(lr.max))}yn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(t,c),Je.add(gs)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new E,l[R]=new E;const c=new E,h=new E,u=new E,d=new rt,f=new rt,m=new rt,b=new E,g=new E;function p(R,w,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[R].add(b),a[w].add(b),a[S].add(b),l[R].add(g),l[w].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,w=v.length;R<w;++R){const S=v[R],P=S.start,I=S.count;for(let z=P,H=P+I;z<H;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const _=new E,x=new E,y=new E,M=new E;function T(R){y.fromBufferAttribute(i,R),M.copy(y);const w=a[R];_.copy(w),_.sub(y.multiplyScalar(y.dot(w))).normalize(),x.crossVectors(M,w);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,w=v.length;R<w;++R){const S=v[R],P=S.start,I=S.count;for(let z=P,H=P+I;z<H;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),b=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?f=l[b]*a.data.stride+a.offset:f=l[b]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new At,ki=new xa,fo=new $n,kh=new E,po=new E,mo=new E,go=new E,Qa=new E,vo=new E,Oh=new E,xo=new E;class Pt extends Ae{constructor(t=new ee,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Qa.fromBufferAttribute(u,t),o?vo.addScaledVector(Qa,h):vo.addScaledVector(Qa.sub(e),h))}e.add(vo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),ki.copy(t.ray).recast(t.near),!(fo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(fo,kh)===null||ki.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(zh.copy(s).invert(),ki.copy(t.ray).applyMatrix4(zh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,b=d.length;m<b;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,y=_;x<y;x+=3){const M=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=bo(this,p,t,n,c,h,u,M,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){const v=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);i=bo(this,o,t,n,c,h,u,v,_,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,b=d.length;m<b;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,y=_;x<y;x+=3){const M=x,T=x+1,R=x+2;i=bo(this,p,t,n,c,h,u,M,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){const v=g,_=g+1,x=g+2;i=bo(this,o,t,n,c,h,u,v,_,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function rm(r,t,e,n,i,s,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===pi,a),l===null)return null;xo.copy(a),xo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(xo);return c<e.near||c>e.far?null:{distance:c,point:xo.clone(),object:r}}function bo(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,po),r.getVertexPosition(l,mo),r.getVertexPosition(c,go);const h=rm(r,t,e,n,po,mo,go,Oh);if(h){const u=new E;Nn.getBarycoord(Oh,po,mo,go,u),i&&(h.uv=Nn.getInterpolatedAttribute(i,a,l,c,u,new rt)),s&&(h.uv1=Nn.getInterpolatedAttribute(s,a,l,c,u,new rt)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new E,materialIndex:0};Nn.getNormal(po,mo,go,d.normal),h.face=d,h.barycoord=u}return h}class En extends ee{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function m(b,g,p,v,_,x,y,M,T,R,w){const S=x/T,P=y/R,I=x/2,z=y/2,H=M/2,G=T+1,X=R+1;let tt=0,N=0;const W=new E;for(let Q=0;Q<X;Q++){const ot=Q*P-z;for(let St=0;St<G;St++){const Ut=St*S-I;W[b]=Ut*v,W[g]=ot*_,W[p]=H,c.push(W.x,W.y,W.z),W[b]=0,W[g]=0,W[p]=M>0?1:-1,h.push(W.x,W.y,W.z),u.push(St/T),u.push(1-Q/R),tt+=1}}for(let Q=0;Q<R;Q++)for(let ot=0;ot<T;ot++){const St=d+ot+G*Q,Ut=d+ot+G*(Q+1),Ft=d+(ot+1)+G*(Q+1),Nt=d+(ot+1)+G*Q;l.push(St,Ut,Nt),l.push(Ut,Ft,Nt),N+=6}a.addGroup(f,N,w),f+=N,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(r){const t={};for(let e=0;e<r.length;e++){const n=Xs(r[e]);for(const i in n)t[i]=n[i]}return t}function om(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Qd(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Zn={clone:Xs,merge:hn};var am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=om(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zd extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new E,Bh=new rt,Hh=new rt;class rn extends Zd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Bh,Hh),e.subVectors(Hh,Bh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vs=-90,xs=1;class $d extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(vs,xs,t,e);i.layers=this.layers,this.add(i);const s=new rn(vs,xs,t,e);s.layers=this.layers,this.add(s);const o=new rn(vs,xs,t,e);o.layers=this.layers,this.add(o);const a=new rn(vs,xs,t,e);a.layers=this.layers,this.add(a);const l=new rn(vs,xs,t,e);l.layers=this.layers,this.add(l);const c=new rn(vs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class tf extends Ue{constructor(t=[],e=Vs,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ef extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new tf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new En(5,5,5),s=new Qt({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:di});s.uniforms.tEquirect.value=e;const o=new Pt(i,s),a=e.minFilter;return e.minFilter===Jn&&(e.minFilter=Be),new $d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class ye extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cm={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const b of t.hand.values()){const g=e.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Yc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $(t),this.near=e,this.far=n}clone(){return new Yc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kc extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new E;class jr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ot(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sf extends Gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bs;const cr=new E,_s=new E,ys=new E,Ms=new rt,hr=new rt,rf=new At,_o=new E,ur=new E,yo=new E,Gh=new rt,$a=new rt,Vh=new rt;class hm extends Ae{constructor(t=new sf){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nf(e,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new jr(n,3,0,!1)),bs.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=bs,this.material=t,this.center=new rt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-ys.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Mo(_o.set(-.5,-.5,0),ys,o,_s,i,s),Mo(ur.set(.5,-.5,0),ys,o,_s,i,s),Mo(yo.set(.5,.5,0),ys,o,_s,i,s),Gh.set(0,0),$a.set(1,0),Vh.set(1,1);let a=t.ray.intersectTriangle(_o,ur,yo,!1,cr);if(a===null&&(Mo(ur.set(-.5,.5,0),ys,o,_s,i,s),$a.set(0,1),a=t.ray.intersectTriangle(_o,yo,ur,!1,cr),a===null))return;const l=t.ray.origin.distanceTo(cr);l<t.near||l>t.far||e.push({distance:l,point:cr.clone(),uv:Nn.getInterpolation(cr,_o,ur,yo,Gh,$a,Vh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Mo(r,t,e,n,i,s){Ms.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(hr.x=s*Ms.x-i*Ms.y,hr.y=i*Ms.x+s*Ms.y):hr.copy(Ms),r.copy(t),r.x+=hr.x,r.y+=hr.y,r.applyMatrix4(rf)}const Wh=new E,jh=new ue,Xh=new ue,um=new E,qh=new At,wo=new E,tl=new $n,Yh=new At,el=new xa;class dm extends Pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yh,this.bindMatrix=new At,this.bindMatrixInverse=new At,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new vi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,wo),this.boundingBox.expandByPoint(wo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,wo),this.boundingSphere.expandByPoint(wo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(i),t.ray.intersectsSphere(tl)!==!1&&(Yh.copy(i).invert(),el.copy(t.ray).applyMatrix4(Yh),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,el)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ue,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===yh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;jh.fromBufferAttribute(i.attributes.skinIndex,t),Xh.fromBufferAttribute(i.attributes.skinWeight,t),Wh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Xh.getComponent(s);if(o!==0){const a=jh.getComponent(s);qh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(um.copy(Wh).applyMatrix4(qh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class of extends Ae{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rr extends Ue{constructor(t=null,e=1,n=1,i,s,o,a,l,c=He,h=He,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kh=new At,fm=new At;class Jc{constructor(t=[],e=[]){this.uuid=Un(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new At)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new At;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:fm;Kh.multiplyMatrices(a,e[s]),Kh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Rr(e,t,t,An,Fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new of),this.bones.push(o),this.boneInverses.push(new At().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Xr extends Ot{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ws=new At,Jh=new At,So=[],Qh=new vi,pm=new At,dr=new Pt,fr=new $n;class Pe extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),Qh.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Qh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),fr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),t.ray.intersectsSphere(fr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ws),Jh.multiplyMatrices(n,ws),dr.matrixWorld=Jh,dr.raycast(t,So);for(let o=0,a=So.length;o<a;o++){const l=So[o];l.instanceId=s,l.object=this,e.push(l)}So.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rr(new Float32Array(i*this.count),i,this.count,Br,Fn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nl=new E,mm=new E,gm=new Jt;class Xi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nl.subVectors(n,e).cross(mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gm.getNormalMatrix(t),i=this.coplanarPoint(nl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new $n,vm=new rt(.5,.5),To=new E;class Qc{constructor(t=new Xi,e=new Xi,n=new Xi,i=new Xi,s=new Xi,o=new Xi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],b=s[9],g=s[10],p=s[11],v=s[12],_=s[13],x=s[14],y=s[15];if(i[0].setComponents(c-o,f-h,p-m,y-v).normalize(),i[1].setComponents(c+o,f+h,p+m,y+v).normalize(),i[2].setComponents(c+a,f+u,p+b,y+_).normalize(),i[3].setComponents(c-a,f-u,p-b,y-_).normalize(),n)i[4].setComponents(l,d,g,x).normalize(),i[5].setComponents(c-l,f-d,p-g,y-x).normalize();else if(i[4].setComponents(c-l,f-d,p-g,y-x).normalize(),e===Qn)i[5].setComponents(c+l,f+d,p+g,y+x).normalize();else if(e===ha)i[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);const e=vm.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(To.x=i.normal.x>0?t.max.x:t.min.x,To.y=i.normal.y>0?t.max.y:t.min.y,To.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ba extends Gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ua=new E,da=new E,Zh=new At,pr=new xa,Ao=new $n,il=new E,$h=new E;class _a extends Ae{constructor(t=new ee,e=new ba){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ua.fromBufferAttribute(e,i-1),da.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ua.distanceTo(da);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=s,t.ray.intersectsSphere(Ao)===!1)return;Zh.copy(i).invert(),pr.copy(t.ray).applyMatrix4(Zh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let b=f,g=m-1;b<g;b+=c){const p=h.getX(b),v=h.getX(b+1),_=Eo(this,t,pr,l,p,v,b);_&&e.push(_)}if(this.isLineLoop){const b=h.getX(m-1),g=h.getX(f),p=Eo(this,t,pr,l,b,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let b=f,g=m-1;b<g;b+=c){const p=Eo(this,t,pr,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){const b=Eo(this,t,pr,l,m-1,f,m-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Eo(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(ua.fromBufferAttribute(a,i),da.fromBufferAttribute(a,s),e.distanceSqToSegment(ua,da,il,$h)>n)return;il.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(il);if(!(c<t.near||c>t.far))return{distance:c,point:$h.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const tu=new E,eu=new E;class fa extends _a{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)tu.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tu.distanceTo(eu);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xm extends _a{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Zc extends Gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nu=new At,Ac=new xa,Co=new $n,Ro=new E;class mi extends Ae{constructor(t=new ee,e=new Zc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=s,t.ray.intersectsSphere(Co)===!1)return;nu.copy(i).invert(),Ac.copy(t.ray).applyMatrix4(nu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,b=f;m<b;m++){const g=c.getX(m);Ro.fromBufferAttribute(u,g),iu(Ro,g,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,b=f;m<b;m++)Ro.fromBufferAttribute(u,m),iu(Ro,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function iu(r,t,e,n,i,s,o){const a=Ac.distanceSqToPoint(r);if(a<e){const l=new E;Ac.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ya extends Ue{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $c extends Ue{constructor(t,e,n=$i,i,s,o,a=He,l=He,c,h=kr,u=1){if(h!==kr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class af extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ma extends ee{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+s,b=i+1,g=new E,p=new E;for(let v=0;v<=m;v++){let _=0,x=0,y=0,M=0;if(v<=n){const w=v/n,S=w*Math.PI/2;x=-h-t*Math.cos(S),y=t*Math.sin(S),M=-t*Math.cos(S),_=w*u}else if(v<=n+s){const w=(v-n)/s;x=-h+w*e,y=t,M=0,_=u+w*d}else{const w=(v-n-s)/n,S=w*Math.PI/2;x=h+t*Math.sin(S),y=t*Math.cos(S),M=t*Math.sin(S),_=u+d+w*u}const T=Math.max(0,Math.min(1,_/f));let R=0;v===0?R=.5/i:v===m&&(R=-.5/i);for(let w=0;w<=i;w++){const S=w/i,P=S*Math.PI*2,I=Math.sin(P),z=Math.cos(P);p.x=-y*z,p.y=x,p.z=y*I,a.push(p.x,p.y,p.z),g.set(-y*z,M,y*I),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+R,T)}if(v>0){const w=(v-1)*b;for(let S=0;S<i;S++){const P=w+S,I=w+S+1,z=v*b+S,H=v*b+S+1;o.push(P,I,z),o.push(I,H,z)}}}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class je extends ee{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const b=[],g=n/2;let p=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function v(){const x=new E,y=new E;let M=0;const T=(e-t)/n;for(let R=0;R<=s;R++){const w=[],S=R/s,P=S*(e-t)+t;for(let I=0;I<=i;I++){const z=I/i,H=z*l+a,G=Math.sin(H),X=Math.cos(H);y.x=P*G,y.y=-S*n+g,y.z=P*X,u.push(y.x,y.y,y.z),x.set(G,T,X).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-S),w.push(m++)}b.push(w)}for(let R=0;R<i;R++)for(let w=0;w<s;w++){const S=b[w][R],P=b[w+1][R],I=b[w+1][R+1],z=b[w][R+1];(t>0||w!==0)&&(h.push(S,P,z),M+=3),(e>0||w!==s-1)&&(h.push(P,I,z),M+=3)}c.addGroup(p,M,0),p+=M}function _(x){const y=m,M=new rt,T=new E;let R=0;const w=x===!0?t:e,S=x===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;const P=m;for(let I=0;I<=i;I++){const H=I/i*l+a,G=Math.cos(H),X=Math.sin(H);T.x=w*X,T.y=g*S,T.z=w*G,u.push(T.x,T.y,T.z),d.push(0,S,0),M.x=G*.5+.5,M.y=X*.5*S+.5,f.push(M.x,M.y),m++}for(let I=0;I<i;I++){const z=y+I,H=P+I;x===!0?h.push(H,H+1,z):h.push(H+1,H,z),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wa extends je{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new wa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sa extends ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new E,x=new E,y=new E;for(let M=0;M<e.length;M+=3)f(e[M+0],_),f(e[M+1],x),f(e[M+2],y),l(_,x,y,v)}function l(v,_,x,y){const M=y+1,T=[];for(let R=0;R<=M;R++){T[R]=[];const w=v.clone().lerp(x,R/M),S=_.clone().lerp(x,R/M),P=M-R;for(let I=0;I<=P;I++)I===0&&R===M?T[R][I]=w:T[R][I]=w.clone().lerp(S,I/P)}for(let R=0;R<M;R++)for(let w=0;w<2*(M-R)-1;w++){const S=Math.floor(w/2);w%2===0?(d(T[R][S+1]),d(T[R+1][S]),d(T[R][S])):(d(T[R][S+1]),d(T[R+1][S+1]),d(T[R+1][S]))}}function c(v){const _=new E;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(v),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function h(){const v=new E;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const x=g(v)/2/Math.PI+.5,y=p(v)/Math.PI+.5;o.push(x,1-y)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){const _=o[v+0],x=o[v+2],y=o[v+4],M=Math.max(_,x,y),T=Math.min(_,x,y);M>.9&&T<.1&&(_<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),y<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,_){const x=v*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function m(){const v=new E,_=new E,x=new E,y=new E,M=new rt,T=new rt,R=new rt;for(let w=0,S=0;w<s.length;w+=9,S+=6){v.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),M.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),y.copy(v).add(_).add(x).divideScalar(3);const P=g(y);b(M,S+0,v,P),b(T,S+2,_,P),b(R,S+4,x,P)}}function b(v,_,x,y){y<0&&v.x===1&&(o[_]=v.x-1),x.x===0&&x.z===0&&(o[_]=y/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.vertices,t.indices,t.radius,t.details)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new rt:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,i=[],s=[],o=[],a=new E,l=new At;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new E)}s[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos($t(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos($t(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class th extends ti{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bm extends th{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function eh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Po=new E,sl=new eh,rl=new eh,ol=new eh;class _m extends ti{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Po.subVectors(i[0],i[1]).add(i[0]),c=Po);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Po.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),sl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,b,g),rl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,b,g),ol.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),rl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ol.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(sl.calc(l),rl.calc(l),ol.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function su(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function ym(r,t){const e=1-r;return e*e*t}function Mm(r,t){return 2*(1-r)*r*t}function wm(r,t){return r*r*t}function Pr(r,t,e,n){return ym(r,t)+Mm(r,e)+wm(r,n)}function Sm(r,t){const e=1-r;return e*e*e*t}function Tm(r,t){const e=1-r;return 3*e*e*r*t}function Am(r,t){return 3*(1-r)*r*r*t}function Em(r,t){return r*r*r*t}function Lr(r,t,e,n,i){return Sm(r,t)+Tm(r,e)+Am(r,n)+Em(r,i)}class lf extends ti{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,i.x,s.x,o.x,a.x),Lr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cm extends ti{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,i.x,s.x,o.x,a.x),Lr(t,i.y,s.y,o.y,a.y),Lr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cf extends ti{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rm extends ti{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hf extends ti{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Pr(t,i.x,s.x,o.x),Pr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pm extends ti{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Pr(t,i.x,s.x,o.x),Pr(t,i.y,s.y,o.y),Pr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(su(a,l.x,c.x,h.x,u.x),su(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var ru=Object.freeze({__proto__:null,ArcCurve:bm,CatmullRomCurve3:_m,CubicBezierCurve:lf,CubicBezierCurve3:Cm,EllipseCurve:th,LineCurve:cf,LineCurve3:Rm,QuadraticBezierCurve:hf,QuadraticBezierCurve3:Pm,SplineCurve:uf});class Lm extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ru[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ru[i.type]().fromJSON(i))}return this}}class ou extends Lm{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new cf(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new hf(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new lf(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new uf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new th(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nh extends ou{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ou().fromJSON(i))}return this}}function Dm(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=df(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=zm(r,t,s,e)),r.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const f=r[d],m=r[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return qr(s,o,e,a,l,c,0),o}function df(r,t,e,n,i){let s;if(i===Ym(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=au(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=au(o/n|0,r[o],r[o+1],s);return s&&qs(s,s.next)&&(Kr(s),s=s.next),s}function ts(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(qs(e,e.next)||Re(e.prev,e,e.next)===0)){if(Kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Gm(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Nm(r,n,i,s):Im(r)){t.push(l.i,r.i,c.i),Kr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Fm(ts(r),t),qr(r,t,e,n,i,s,2)):o===2&&Um(r,t,e,n,i,s):qr(ts(r),t,e,n,i,s,1);break}}}function Im(r){const t=r.prev,e=r,n=r.next;if(Re(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),d=Math.max(i,s,o),f=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Tr(i,a,s,l,o,c,m.x,m.y)&&Re(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nm(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Re(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),b=Math.max(a,l,c),g=Math.max(h,u,d),p=Ec(f,m,t,e,n),v=Ec(b,g,t,e,n);let _=r.prevZ,x=r.nextZ;for(;_&&_.z>=p&&x&&x.z<=v;){if(_.x>=f&&_.x<=b&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Tr(a,h,l,u,c,d,_.x,_.y)&&Re(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=b&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Tr(a,h,l,u,c,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=b&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Tr(a,h,l,u,c,d,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=b&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Tr(a,h,l,u,c,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Fm(r,t){let e=r;do{const n=e.prev,i=e.next.next;!qs(n,i)&&pf(n,e,e.next,i)&&Yr(n,i)&&Yr(i,n)&&(t.push(n.i,e.i,i.i),Kr(e),Kr(e.next),e=r=i),e=e.next}while(e!==r);return ts(e)}function Um(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jm(o,a)){let l=mf(o,a);o=ts(o,o.next),l=ts(l,l.next),qr(o,t,e,n,i,s,0),qr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function zm(r,t,e,n){const i=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=df(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Wm(c))}i.sort(km);for(let s=0;s<i.length;s++)e=Om(i[s],e);return e}function km(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Om(r,t){const e=Bm(r,t);if(!e)return t;const n=mf(e,r);return ts(n,n.next),ts(e,e.next)}function Bm(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;if(qs(r,e))return e;do{if(qs(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ff(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Yr(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Hm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Hm(r,t){return Re(r.prev,r,t.prev)<0&&Re(t.next,r,r.next)<0}function Gm(r,t,e,n){let i=r;do i.z===0&&(i.z=Ec(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Vm(i)}function Vm(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function Ec(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Wm(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ff(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Tr(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&ff(r,t,e,n,i,s,o,a)}function jm(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Xm(r,t)&&(Yr(r,t)&&Yr(t,r)&&qm(r,t)&&(Re(r.prev,r,t.prev)||Re(r,t.prev,t))||qs(r,t)&&Re(r.prev,r,r.next)>0&&Re(t.prev,t,t.next)>0)}function Re(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function qs(r,t){return r.x===t.x&&r.y===t.y}function pf(r,t,e,n){const i=Do(Re(r,t,e)),s=Do(Re(r,t,n)),o=Do(Re(e,n,r)),a=Do(Re(e,n,t));return!!(i!==s&&o!==a||i===0&&Lo(r,e,t)||s===0&&Lo(r,n,t)||o===0&&Lo(e,r,n)||a===0&&Lo(e,t,n))}function Lo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Do(r){return r>0?1:r<0?-1:0}function Xm(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&pf(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Yr(r,t){return Re(r.prev,r,r.next)<0?Re(r,t,r.next)>=0&&Re(r,r.prev,t)>=0:Re(r,t,r.prev)<0||Re(r,r.next,t)<0}function qm(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function mf(r,t){const e=Cc(r.i,r.x,r.y),n=Cc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function au(r,t,e,n){const i=Cc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Cc(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ym(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Km{static triangulate(t,e,n=2){return Dm(t,e,n)}}class Dr{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Dr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];lu(t),cu(n,t);let o=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,cu(n,e[l]);const a=Km.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function lu(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function cu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ir extends Sa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ir(t.radius,t.detail)}}class Ta extends ee{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=$t(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,u=new E,d=new rt,f=new E,m=new E,b=new E;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(b.x,b.y,b.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(m)}for(let v=0;v<=e;v++){const _=n+v*h*i,x=Math.sin(_),y=Math.cos(_);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*x,u.y=t[M].y,u.z=t[M].x*y,o.push(u.x,u.y,u.z),d.x=v/e,d.y=M/(t.length-1),a.push(d.x,d.y);const T=l[3*M+0]*x,R=l[3*M+1],w=l[3*M+0]*y;c.push(T,R,w)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){const x=_+v*t.length,y=x,M=x+t.length,T=x+t.length+1,R=x+1;s.push(y,M,R),s.push(T,R,M)}this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.points,t.segments,t.phiStart,t.phiLength)}}class ih extends Sa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ih(t.radius,t.detail)}}class vn extends ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){const v=p*d-o;for(let _=0;_<c;_++){const x=_*u-s;m.push(x,-v,0),b.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const _=v+c*p,x=v+c*(p+1),y=v+1+c*(p+1),M=v+1+c*p;f.push(_,x,M),f.push(x,y,M)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(b,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.widthSegments,t.heightSegments)}}class pa extends ee{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new E,m=new rt;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<i;b++){const g=b*(n+1);for(let p=0;p<n;p++){const v=p+g,_=v,x=v+n+1,y=v+n+2,M=v+1;a.push(_,x,M),a.push(x,y,M)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Aa extends ee{constructor(t=new nh([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Bt(i,3)),this.setAttribute("normal",new Bt(s,3)),this.setAttribute("uv",new Bt(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;Dr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Dr.isClockWise(v)===!0&&(m[g]=v.reverse())}const b=Dr.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){const v=f[g];i.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=b.length;g<p;g++){const v=b[g],_=v[0]+u,x=v[1]+u,y=v[2]+u;n.push(_,x,y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Jm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Aa(n,t.curveSegments)}}function Jm(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Di extends ee{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){const M=y/e;u.x=-t*Math.cos(i+M*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+M*s)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(M+x,1-_),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const _=h[p][v+1],x=h[p][v],y=h[p+1][v],M=h[p+1][v+1];(p!==0||o>0)&&f.push(_,x,M),(p!==n-1||l<Math.PI)&&f.push(x,y,M)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(b,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jr extends ee{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const b=m/i*s,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(b),u.y=(t+e*Math.cos(g))*Math.sin(b),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const b=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(b,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qm extends Qt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oe extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vd,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vn extends oe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Zm extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $m extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Io(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function t0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function e0(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function hu(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function gf(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Zr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class n0 extends Zr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Is,endingEnd:Is}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ns:s=t,a=2*e-n;break;case la:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ns:o=t,l=2*n-e;break;case la:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,v=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*b+.5*m,x=f*g-f*b;for(let y=0;y!==a;++y)s[y]=p*o[h+y]+v*o[c+y]+_*o[l+y]+x*o[u+y];return s}}class vf extends Zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class i0 extends Zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Wn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Io(e,this.TimeBufferType),this.values=Io(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Io(t.times,Array),values:Io(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new i0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new n0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Hr:e=this.InterpolantFactoryMethodDiscrete;break;case Gr:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&t0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===La,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const b=e[u+m];if(b!==e[d+m]||b!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Gr;class $s extends Wn{constructor(t,e,n){super(t,e,n)}}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Hr;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class xf extends Wn{constructor(t,e,n,i){super(t,e,n,i)}}xf.prototype.ValueTypeName="color";class Ys extends Wn{constructor(t,e,n,i){super(t,e,n,i)}}Ys.prototype.ValueTypeName="number";class s0 extends Zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ve.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ks extends Wn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new s0(this.times,this.values,this.getValueSize(),t)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Wn{constructor(t,e,n){super(t,e,n)}}tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Hr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Wn{constructor(t,e,n,i){super(t,e,n,i)}}Js.prototype.ValueTypeName="vector";class Rc{constructor(t="",e=-1,n=[],i=jc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(o0(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=n.length;s!==o;++s)e.push(Wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=e0(l);l=hu(l,1,h),c=hu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ys(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,b){if(f.length!==0){const g=[],p=[];gf(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(const b in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const _=d[m];g.push(_.time),p.push(_.morphTarget===b?1:0)}i.push(new Ys(".morphTargetInfluence["+b+"]",g,p))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(Js,f+".position",d,"pos",i),n(Ks,f+".quaternion",d,"rot",i),n(Js,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function r0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return xf;case"quaternion":return Ks;case"bool":case"boolean":return $s;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function o0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=r0(r.type);if(r.times===void 0){const e=[],n=[];gf(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const ui={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class a0{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const l0=new a0;class er{constructor(t){this.manager=t!==void 0?t:l0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class c0 extends Error{constructor(t,e){super(t),this.response=e}}class bf extends er{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ui.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:i});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ai[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let b=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{b+=x.byteLength;const y=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let M=0,T=h.length;M<T;M++){const R=h[M];R.onProgress&&R.onProgress(y)}p.enqueue(x),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new c0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ui.add(`file:${t}`,c);const h=ai[t];delete ai[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ai[t];if(h===void 0)throw this.manager.itemError(t),c;delete ai[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ss=new WeakMap;class h0 extends er{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ui.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Ss.get(o);u===void 0&&(u=[],Ss.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=Vr("img");function l(){h(),e&&e(this);const u=Ss.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ss.delete(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),ui.remove(`image:${t}`);const d=Ss.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Ss.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ui.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class u0 extends er{constructor(t){super(t)}load(t,e,n,i){const s=new Ue,o=new h0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Ea extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _f extends Ea{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const al=new At,uu=new E,du=new E;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(uu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class d0 extends sh{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=js*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class f0 extends Ea{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new d0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const fu=new At,mr=new E,ll=new E;class p0 extends sh{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),ll.copy(n.position),ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ll),n.updateMatrixWorld(),i.makeTranslation(-mr.x,-mr.y,-mr.z),fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu,n.coordinateSystem,n.reversedDepth)}}class es extends Ea{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new p0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $r extends Zd{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class m0 extends sh{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ma extends Ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new m0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class rh extends ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const cl=new WeakMap;class g0 extends er{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ui.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{if(cl.has(o)===!0)i&&i(cl.get(o)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),cl.set(l,c),ui.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});ui.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class v0 extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class yf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class x0{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){ve.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;ve.multiplyQuaternionsFlat(t,o,t,e,t,n),ve.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const oh="\\[\\]\\.:\\/",b0=new RegExp("["+oh+"]","g"),ah="[^"+oh+"]",_0="[^"+oh.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",ah),M0=/(WCOD+)?/.source.replace("WCOD",_0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),T0=new RegExp("^"+y0+M0+w0+S0+"$"),A0=["material","materials","bones","map"];class E0{constructor(t,e,n){const i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class pe{constructor(t,e,n){this.path=e,this.parsedPath=n||pe.parseTrackName(e),this.node=pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new pe.Composite(t,e,n):new pe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(t){const e=T0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);A0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=pe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pe.Composite=E0;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class C0{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Is,endingEnd:Is};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=up,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case fp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case jc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===dp;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===hp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Ns,i.endingEnd=Ns):(t?i.endingStart=this.zeroSlopeAtStart?Ns:Is:i.endingStart=la,e?i.endingEnd=this.zeroSlopeAtEnd?Ns:Is:i.endingEnd=la)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}const R0=new Float32Array(1);class P0 extends is{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const b=e&&e._propertyBindings[u].binding.parsedPath;m=new x0(pe.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new vf(new Float32Array(2),new Float32Array(2),1,R0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?Rc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=jc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new C0(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Rc.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function pu(r,t,e,n){const i=L0(n);switch(e){case Od:return r*t;case Br:return r*t/i.components*i.byteLength;case Gc:return r*t/i.components*i.byteLength;case Hd:return r*t*2/i.components*i.byteLength;case Vc:return r*t*2/i.components*i.byteLength;case Bd:return r*t*3/i.components*i.byteLength;case An:return r*t*4/i.components*i.byteLength;case Wc:return r*t*4/i.components*i.byteLength;case $o:case ta:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ql:case $l:return Math.max(r,16)*Math.max(t,8)/4;case Jl:case Zl:return Math.max(r,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case vc:case xc:case bc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _c:case yc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Mc:case wc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L0(r){switch(r){case Cn:case Fd:return{byteLength:1,components:1};case Ur:case Ud:case an:return{byteLength:2,components:1};case Bc:case Hc:return{byteLength:2,components:4};case $i:case Oc:case Fn:return{byteLength:4,components:1};case zd:case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);function Mf(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function D0(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const b=u[f];r.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
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
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X0=`#ifdef USE_IRIDESCENCE
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
#endif`,q0=`#ifdef USE_BUMPMAP
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Lg=`struct PhysicalMaterial {
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
}`,Dg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
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
#endif`,nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vv=`float getShadowMask() {
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
}`,xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,_v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Av=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`#include <common>
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
}`,Ov=`#if DEPTH_PACKING == 3200
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
}`,Bv=`#define DISTANCE
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
}`,Hv=`#define DISTANCE
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`uniform float scale;
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
}`,jv=`uniform vec3 diffuse;
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
}`,Xv=`#include <common>
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#define LAMBERT
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
}`,Kv=`#define LAMBERT
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
}`,Jv=`#define MATCAP
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
}`,Qv=`#define MATCAP
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
}`,Zv=`#define NORMAL
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
}`,$v=`#define NORMAL
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
}`,tx=`#define PHONG
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
}`,ex=`#define PHONG
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
}`,nx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
}`,sx=`#define TOON
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
}`,rx=`#define TOON
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
}`,ox=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 color;
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
}`,hx=`uniform float rotation;
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
}`,ux=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:I0,alphahash_pars_fragment:N0,alphamap_fragment:F0,alphamap_pars_fragment:U0,alphatest_fragment:z0,alphatest_pars_fragment:k0,aomap_fragment:O0,aomap_pars_fragment:B0,batching_pars_vertex:H0,batching_vertex:G0,begin_vertex:V0,beginnormal_vertex:W0,bsdfs:j0,iridescence_fragment:X0,bumpmap_pars_fragment:q0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:Q0,color_fragment:Z0,color_pars_fragment:$0,color_pars_vertex:tg,color_vertex:eg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:lg,colorspace_fragment:cg,colorspace_pars_fragment:hg,envmap_fragment:ug,envmap_common_pars_fragment:dg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Tg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:vg,fog_fragment:xg,fog_pars_fragment:bg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:yg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:wg,lights_pars_begin:Sg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Eg,lights_phong_fragment:Cg,lights_phong_pars_fragment:Rg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ig,lights_fragment_end:Ng,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:kg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:Hg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:jg,morphcolor_vertex:Xg,morphnormal_vertex:qg,morphtarget_pars_vertex:Yg,morphtarget_vertex:Kg,normal_fragment_begin:Jg,normal_fragment_maps:Qg,normal_pars_fragment:Zg,normal_pars_vertex:$g,normal_vertex:tv,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:nv,clearcoat_normal_fragment_maps:iv,clearcoat_pars_fragment:sv,iridescence_pars_fragment:rv,opaque_fragment:ov,packing:av,premultiplied_alpha_fragment:lv,project_vertex:cv,dithering_fragment:hv,dithering_pars_fragment:uv,roughnessmap_fragment:dv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:pv,shadowmap_pars_vertex:mv,shadowmap_vertex:gv,shadowmask_pars_fragment:vv,skinbase_vertex:xv,skinning_pars_vertex:bv,skinning_vertex:_v,skinnormal_vertex:yv,specularmap_fragment:Mv,specularmap_pars_fragment:wv,tonemapping_fragment:Sv,tonemapping_pars_fragment:Tv,transmission_fragment:Av,transmission_pars_fragment:Ev,uv_pars_fragment:Cv,uv_pars_vertex:Rv,uv_vertex:Pv,worldpos_vertex:Lv,background_vert:Dv,background_frag:Iv,backgroundCube_vert:Nv,backgroundCube_frag:Fv,cube_vert:Uv,cube_frag:zv,depth_vert:kv,depth_frag:Ov,distanceRGBA_vert:Bv,distanceRGBA_frag:Hv,equirect_vert:Gv,equirect_frag:Vv,linedashed_vert:Wv,linedashed_frag:jv,meshbasic_vert:Xv,meshbasic_frag:qv,meshlambert_vert:Yv,meshlambert_frag:Kv,meshmatcap_vert:Jv,meshmatcap_frag:Qv,meshnormal_vert:Zv,meshnormal_frag:$v,meshphong_vert:tx,meshphong_frag:ex,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:sx,meshtoon_frag:rx,points_vert:ox,points_frag:ax,shadow_vert:lx,shadow_frag:cx,sprite_vert:hx,sprite_frag:ux},vt={common:{diffuse:{value:new $(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Kn={basic:{uniforms:hn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:hn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new $(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:hn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new $(0)},specular:{value:new $(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:hn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new $(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:hn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new $(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:hn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:hn([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:hn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:hn([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:hn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:hn([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:hn([vt.common,vt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:hn([vt.lights,vt.fog,{color:{value:new $(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Kn.physical={uniforms:hn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $(0)},specularColor:{value:new $(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const No={r:0,b:0,g:0},Bi=new qe,dx=new At;function fx(r,t,e,n,i,s,o){const a=new $(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function b(_){let x=!1;const y=m(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),x=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(_,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===va)?(h===void 0&&(h=new Pt(new En(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Xs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Bi.copy(x.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(Bi)),h.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Pt(new vn(2,2),new Qt({name:"BackgroundMaterial",uniforms:Xs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(No,Qd(r)),n.buffers.color.setClear(No.r,No.g,No.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:b,addToRenderList:g,dispose:v}}function px(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,P,I,z,H){let G=!1;const X=u(z,I,P);s!==X&&(s=X,c(s.object)),G=f(S,z,I,H),G&&m(S,z,I,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(S,P,I,z),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,P,I){const z=I.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let G=H[P.id];G===void 0&&(G={},H[P.id]=G);let X=G[z];return X===void 0&&(X=d(l()),G[z]=X),X}function d(S){const P=[],I=[],z=[];for(let H=0;H<e;H++)P[H]=0,I[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,P,I,z){const H=s.attributes,G=P.attributes;let X=0;const tt=I.getAttributes();for(const N in tt)if(tt[N].location>=0){const Q=H[N];let ot=G[N];if(ot===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),Q===void 0||Q.attribute!==ot||ot&&Q.data!==ot.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function m(S,P,I,z){const H={},G=P.attributes;let X=0;const tt=I.getAttributes();for(const N in tt)if(tt[N].location>=0){let Q=G[N];Q===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const ot={};ot.attribute=Q,Q&&Q.data&&(ot.data=Q.data),H[N]=ot,X++}s.attributes=H,s.attributesNum=X,s.index=z}function b(){const S=s.newAttributes;for(let P=0,I=S.length;P<I;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){const I=s.newAttributes,z=s.enabledAttributes,H=s.attributeDivisors;I[S]=1,z[S]===0&&(r.enableVertexAttribArray(S),z[S]=1),H[S]!==P&&(r.vertexAttribDivisor(S,P),H[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let I=0,z=P.length;I<z;I++)P[I]!==S[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function _(S,P,I,z,H,G,X){X===!0?r.vertexAttribIPointer(S,P,I,H,G):r.vertexAttribPointer(S,P,I,z,H,G)}function x(S,P,I,z){b();const H=z.attributes,G=I.getAttributes(),X=P.defaultAttributeValues;for(const tt in G){const N=G[tt];if(N.location>=0){let W=H[tt];if(W===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const Q=W.normalized,ot=W.itemSize,St=t.get(W);if(St===void 0)continue;const Ut=St.buffer,Ft=St.type,Nt=St.bytesPerElement,K=Ft===r.INT||Ft===r.UNSIGNED_INT||W.gpuType===Oc;if(W.isInterleavedBufferAttribute){const J=W.data,gt=J.stride,Ht=W.offset;if(J.isInstancedInterleavedBuffer){for(let Ct=0;Ct<N.locationSize;Ct++)p(N.location+Ct,J.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ct=0;Ct<N.locationSize;Ct++)g(N.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let Ct=0;Ct<N.locationSize;Ct++)_(N.location+Ct,ot/N.locationSize,Ft,Q,gt*Nt,(Ht+ot/N.locationSize*Ct)*Nt,K)}else{if(W.isInstancedBufferAttribute){for(let J=0;J<N.locationSize;J++)p(N.location+J,W.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let J=0;J<N.locationSize;J++)g(N.location+J);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let J=0;J<N.locationSize;J++)_(N.location+J,ot/N.locationSize,Ft,Q,ot*Nt,ot/N.locationSize*J*Nt,K)}}else if(X!==void 0){const Q=X[tt];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(N.location,Q);break;case 3:r.vertexAttrib3fv(N.location,Q);break;case 4:r.vertexAttrib4fv(N.location,Q);break;default:r.vertexAttrib1fv(N.location,Q)}}}}v()}function y(){R();for(const S in n){const P=n[S];for(const I in P){const z=P[I];for(const H in z)h(z[H].object),delete z[H];delete P[I]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const I in P){const z=P[I];for(const H in z)h(z[H].object),delete z[H];delete P[I]}delete n[S.id]}function T(S){for(const P in n){const I=n[P];if(I[S.id]===void 0)continue;const z=I[S.id];for(const H in z)h(z[H].object),delete z[H];delete I[S.id]}}function R(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function mx(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b]*d[b];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==An&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Cn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fn&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:M}}function vx(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Xi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const v=s?0:n,_=v*4;let x=p.clippingState||null;l.value=x,x=h(m,d,_,f);for(let y=0;y!==_;++y)x[y]=e[y];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const b=u!==null?u.length:0;let g=null;if(b!==0){if(g=l.value,m!==!0||g===null){const p=f+b*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==b;++_,x+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function xx(r){let t=new WeakMap;function e(o,a){return a===Yl?o.mapping=Vs:a===Kl&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yl||a===Kl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ef(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Fs=4,mu=[.125,.215,.35,.446,.526,.582],Ki=20,hl=new $r,gu=new $;let ul=null,dl=0,fl=0,pl=!1;const qi=(1+Math.sqrt(5))/2,Ts=1/qi,vu=[new E(-qi,Ts,0),new E(qi,Ts,0),new E(-Ts,0,qi),new E(Ts,0,qi),new E(0,qi,-Ts),new E(0,qi,Ts),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],bx=new E;class Pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=bx}=s;ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:an,format:An,colorSpace:un,depthBuffer:!1},i=xu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_x(s)),this._blurMaterial=yx(s,t,e)}return i}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,hl)}_sceneToCubeUV(t,e,n,i,s){const l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gu),u.toneMapping=Li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const b=new $e({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Pt(new En,b);let p=!1;const v=t.background;v?v.isColor&&(b.color.copy(v),t.background=null,p=!0):(b.color.copy(gu),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const y=this._cubeSize;Fo(i,x*y,_>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Fo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,hl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vu[(i-s-1)%vu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),b=s/m,g=isFinite(s)?1+Math.floor(h*b):Ki;g>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ki}`);const p=[];let v=0;for(let T=0;T<Ki;++T){const R=T/b,w=Math.exp(-R*R/2);p.push(w),T===0?v+=w:T<g&&(v+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const x=this._sizeLods[i],y=3*x*(i>_-Fs?i-_+Fs:0),M=4*(this._cubeSize-x);Fo(e,y,M,3*x,2*x),l.setRenderTarget(e),l.render(u,hl)}}function _x(r){const t=[],e=[],n=[];let i=r;const s=r-Fs+1+mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Fs?l=mu[o-r+Fs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,v=new Float32Array(b*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,R=M>2?0:-1,w=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(w,b*m*M),_.set(d,g*m*M);const S=[M,M,M,M,M,M];x.set(S,p*m*M)}const y=new ee;y.setAttribute("position",new Ot(v,b)),y.setAttribute("uv",new Ot(_,g)),y.setAttribute("faceIndex",new Ot(x,p)),t.push(y),i>Fs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xu(r,t,e){const n=new Xe(r,t,e);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function yx(r,t,e){const n=new Float32Array(Ki),i=new E(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lh(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function bu(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function _u(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function Mx(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yl||l===Kl,h=l===Vs||l===Ws;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Pc(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wx(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sx(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let b=0;if(f!==null){const v=f.array;b=f.version;for(let _=0,x=v.length;_<x;_+=3){const y=v[_+0],M=v[_+1],T=v[_+2];d.push(y,M,M,T,T,y)}}else if(m!==void 0){const v=m.array;b=m.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const y=_+0,M=_+1,T=_+2;d.push(y,M,M,T,T,y)}}else return;const g=new(jd(d)?Jd:Kd)(d,1);g.version=b;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Tx(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,b){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,b,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*b[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ax(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ex(r,t,e){const n=new WeakMap,i=new ue;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),b===!0&&(x=2),g===!0&&(x=3);let y=a.attributes.position.count*x,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*M*4*u),R=new Xd(T,y,M,u);R.type=Fn,R.needsUpdate=!0;const w=x*4;for(let P=0;P<u;P++){const I=p[P],z=v[P],H=_[P],G=y*M*4*P;for(let X=0;X<I.count;X++){const tt=X*w;m===!0&&(i.fromBufferAttribute(I,X),T[G+tt+0]=i.x,T[G+tt+1]=i.y,T[G+tt+2]=i.z,T[G+tt+3]=0),b===!0&&(i.fromBufferAttribute(z,X),T[G+tt+4]=i.x,T[G+tt+5]=i.y,T[G+tt+6]=i.z,T[G+tt+7]=0),g===!0&&(i.fromBufferAttribute(H,X),T[G+tt+8]=i.x,T[G+tt+9]=i.y,T[G+tt+10]=i.z,T[G+tt+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new rt(y,M)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const b=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",b),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Cx(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const wf=new Ue,yu=new $c(1,1),Sf=new Xd,Tf=new Yp,Af=new tf,Mu=[],wu=[],Su=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function nr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Mu[i];if(s===void 0&&(s=new Float32Array(i),Mu[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ca(r,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Rx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Px(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function Lx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function Dx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function Ix(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;Au.set(n),r.uniformMatrix2fv(this.addr,!1,Au),Ke(e,n)}}function Nx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;Tu.set(n),r.uniformMatrix3fv(this.addr,!1,Tu),Ke(e,n)}}function Fx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;Su.set(n),r.uniformMatrix4fv(this.addr,!1,Su),Ke(e,n)}}function Ux(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function zx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function kx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function Ox(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function Bx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Hx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function Gx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function Vx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function Wx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yu.compareFunction=Wd,s=yu):s=wf,e.setTexture2D(t||s,i)}function jx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Tf,i)}function Xx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Af,i)}function qx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sf,i)}function Yx(r){switch(r){case 5126:return Rx;case 35664:return Px;case 35665:return Lx;case 35666:return Dx;case 35674:return Ix;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return Ux;case 35667:case 35671:return zx;case 35668:case 35672:return kx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return Hx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function Kx(r,t){r.uniform1fv(this.addr,t)}function Jx(r,t){const e=nr(t,this.size,2);r.uniform2fv(this.addr,e)}function Qx(r,t){const e=nr(t,this.size,3);r.uniform3fv(this.addr,e)}function Zx(r,t){const e=nr(t,this.size,4);r.uniform4fv(this.addr,e)}function $x(r,t){const e=nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tb(r,t){const e=nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function eb(r,t){const e=nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function nb(r,t){r.uniform1iv(this.addr,t)}function ib(r,t){r.uniform2iv(this.addr,t)}function sb(r,t){r.uniform3iv(this.addr,t)}function rb(r,t){r.uniform4iv(this.addr,t)}function ob(r,t){r.uniform1uiv(this.addr,t)}function ab(r,t){r.uniform2uiv(this.addr,t)}function lb(r,t){r.uniform3uiv(this.addr,t)}function cb(r,t){r.uniform4uiv(this.addr,t)}function hb(r,t,e){const n=this.cache,i=t.length,s=Ca(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||wf,s[o])}function ub(r,t,e){const n=this.cache,i=t.length,s=Ca(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Tf,s[o])}function db(r,t,e){const n=this.cache,i=t.length,s=Ca(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Af,s[o])}function fb(r,t,e){const n=this.cache,i=t.length,s=Ca(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Sf,s[o])}function pb(r){switch(r){case 5126:return Kx;case 35664:return Jx;case 35665:return Qx;case 35666:return Zx;case 35674:return $x;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return sb;case 35669:case 35673:return rb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return fb}}class mb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yx(e.type)}}class gb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pb(e.type)}}class vb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Eu(r,t){r.seq.push(t),r.map[t.id]=t}function xb(r,t,e){const n=r.name,i=n.length;for(ml.lastIndex=0;;){const s=ml.exec(n),o=ml.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Eu(e,c===void 0?new mb(a,r,t):new gb(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new vb(a),Eu(e,u)),e=u}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);xb(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Cu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const bb=37297;let _b=0;function yb(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ru=new Jt;function Mb(r){ae._getMatrix(Ru,ae.workingColorSpace,r);const t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case ca:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Pu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+yb(r.getShaderSource(t),a)}else return s}function wb(r,t){const e=Mb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sb(r,t){let e;switch(t){case Ed:e="Linear";break;case Cd:e="Reinhard";break;case Rd:e="Cineon";break;case kc:e="ACESFilmic";break;case Ld:e="AgX";break;case Dd:e="Neutral";break;case Pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Uo=new E;function Tb(){ae.getLuminanceCoefficients(Uo);const r=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Eb(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cb(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ar(r){return r!==""}function Lu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Du(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(r){return r.replace(Rb,Lb)}const Pb=new Map;function Lb(r,t){let e=Zt[t];if(e===void 0){const n=Pb.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lc(e)}const Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(r){return r.replace(Db,Ib)}function Ib(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nu(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function Fb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vs:case Ws:t="ENVMAP_TYPE_CUBE";break;case va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ub(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ws&&(t="ENVMAP_MODE_REFRACTION"),t}function zb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ad:t="ENVMAP_BLENDING_MULTIPLY";break;case ap:t="ENVMAP_BLENDING_MIX";break;case lp:t="ENVMAP_BLENDING_ADD";break}return t}function kb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ob(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Nb(e),c=Fb(e),h=Ub(e),u=zb(e),d=kb(e),f=Ab(e),m=Eb(s),b=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(g=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Li?Sb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,wb("linearToOutputTexel",e.outputColorSpace),Tb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=Lc(o),o=Lu(o,e),o=Du(o,e),a=Lc(a),a=Lu(a,e),a=Du(a,e),o=Iu(o),a=Iu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+g+o,x=v+p+a,y=Cu(i,i.VERTEX_SHADER,_),M=Cu(i,i.FRAGMENT_SHADER,x);i.attachShader(b,y),i.attachShader(b,M),e.index0AttributeName!==void 0?i.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function T(P){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(b)||"",z=i.getShaderInfoLog(y)||"",H=i.getShaderInfoLog(M)||"",G=I.trim(),X=z.trim(),tt=H.trim();let N=!0,W=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,y,M);else{const Q=Pu(i,y,"vertex"),ot=Pu(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Q+`
`+ot)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||tt==="")&&(W=!1);W&&(P.diagnostics={runnable:N,programLog:G,vertexShader:{log:X,prefix:g},fragmentShader:{log:tt,prefix:p}})}i.deleteShader(y),i.deleteShader(M),R=new ia(i,b),w=Cb(i,b)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(b,bb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_b++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=M,this}let Bb=0;class Hb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gb(t),e.set(t,n)),n}}class Gb{constructor(t){this.id=Bb++,this.code=t,this.usedTimes=0}}function Vb(r,t,e,n,i,s,o){const a=new qd,l=new Hb,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,P,I,z){const H=I.fog,G=z.geometry,X=w.isMeshStandardMaterial?I.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),N=tt&&tt.mapping===va?tt.image.height:null,W=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=Q!==void 0?Q.length:0;let St=0;G.morphAttributes.position!==void 0&&(St=1),G.morphAttributes.normal!==void 0&&(St=2),G.morphAttributes.color!==void 0&&(St=3);let Ut,Ft,Nt,K;if(W){const de=Kn[W];Ut=de.vertexShader,Ft=de.fragmentShader}else Ut=w.vertexShader,Ft=w.fragmentShader,l.update(w),Nt=l.getVertexShaderID(w),K=l.getFragmentShaderID(w);const J=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),Ht=z.isInstancedMesh===!0,Ct=z.isBatchedMesh===!0,qt=!!w.map,Rt=!!w.matcap,L=!!tt,yt=!!w.aoMap,dt=!!w.lightMap,lt=!!w.bumpMap,st=!!w.normalMap,Wt=!!w.displacementMap,bt=!!w.emissiveMap,Gt=!!w.metalnessMap,Me=!!w.roughnessMap,le=w.anisotropy>0,D=w.clearcoat>0,A=w.dispersion>0,B=w.iridescence>0,U=w.sheen>0,j=w.transmission>0,V=le&&!!w.anisotropyMap,Mt=D&&!!w.clearcoatMap,at=D&&!!w.clearcoatNormalMap,wt=D&&!!w.clearcoatRoughnessMap,et=B&&!!w.iridescenceMap,Z=B&&!!w.iridescenceThicknessMap,nt=U&&!!w.sheenColorMap,ft=U&&!!w.sheenRoughnessMap,xt=!!w.specularMap,pt=!!w.specularColorMap,Yt=!!w.specularIntensityMap,F=j&&!!w.transmissionMap,ht=j&&!!w.thicknessMap,mt=!!w.gradientMap,Et=!!w.alphaMap,ct=w.alphaTest>0,it=!!w.alphaHash,Dt=!!w.extensions;let Kt=Li;w.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Kt=r.toneMapping);const we={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:Ut,fragmentShader:Ft,defines:w.defines,customVertexShaderID:Nt,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&z._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&z.instanceColor!==null,instancingMorph:Ht&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:un,alphaToCoverage:!!w.alphaToCoverage,map:qt,matcap:Rt,envMap:L,envMapMode:L&&tt.mapping,envMapCubeUVHeight:N,aoMap:yt,lightMap:dt,bumpMap:lt,normalMap:st,displacementMap:d&&Wt,emissiveMap:bt,normalMapObjectSpace:st&&w.normalMapType===vp,normalMapTangentSpace:st&&w.normalMapType===Vd,metalnessMap:Gt,roughnessMap:Me,anisotropy:le,anisotropyMap:V,clearcoat:D,clearcoatMap:Mt,clearcoatNormalMap:at,clearcoatRoughnessMap:wt,dispersion:A,iridescence:B,iridescenceMap:et,iridescenceThicknessMap:Z,sheen:U,sheenColorMap:nt,sheenRoughnessMap:ft,specularMap:xt,specularColorMap:pt,specularIntensityMap:Yt,transmission:j,transmissionMap:F,thicknessMap:ht,gradientMap:mt,opaque:w.transparent===!1&&w.blending===Qi&&w.alphaToCoverage===!1,alphaMap:Et,alphaTest:ct,alphaHash:it,combine:w.combine,mapUv:qt&&b(w.map.channel),aoMapUv:yt&&b(w.aoMap.channel),lightMapUv:dt&&b(w.lightMap.channel),bumpMapUv:lt&&b(w.bumpMap.channel),normalMapUv:st&&b(w.normalMap.channel),displacementMapUv:Wt&&b(w.displacementMap.channel),emissiveMapUv:bt&&b(w.emissiveMap.channel),metalnessMapUv:Gt&&b(w.metalnessMap.channel),roughnessMapUv:Me&&b(w.roughnessMap.channel),anisotropyMapUv:V&&b(w.anisotropyMap.channel),clearcoatMapUv:Mt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:at&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:ft&&b(w.sheenRoughnessMap.channel),specularMapUv:xt&&b(w.specularMap.channel),specularColorMapUv:pt&&b(w.specularColorMap.channel),specularIntensityMapUv:Yt&&b(w.specularIntensityMap.channel),transmissionMapUv:F&&b(w.transmissionMap.channel),thicknessMapUv:ht&&b(w.thicknessMap.channel),alphaMapUv:Et&&b(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(st||le),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(qt||Et),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Kt,decodeVideoTexture:qt&&w.map.isVideoTexture===!0&&ae.getTransfer(w.map.colorSpace)===me,decodeVideoTextureEmissive:bt&&w.emissiveMap.isVideoTexture===!0&&ae.getTransfer(w.emissiveMap.colorSpace)===me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xe,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Dt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&w.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(S,w),_(S,w),S.push(r.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=m[w.type];let P;if(S){const I=Kn[S];P=Zn.clone(I.uniforms)}else P=w.uniforms;return P}function y(w,S){let P;for(let I=0,z=h.length;I<z;I++){const H=h[I];if(H.cacheKey===S){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Ob(r,S,w,s),h.push(P)),P}function M(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:R}}function Wb(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function jb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Fu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Uu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,b,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),t++,p}function a(u,d,f,m,b,g){const p=o(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,b,g){const p=o(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||jb),n.length>1&&n.sort(d||Fu),i.length>1&&i.sort(d||Fu)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Xb(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Uu,r.set(n,[o])):i>=s.length?(o=new Uu,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function qb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new $};break;case"SpotLight":e={position:new E,direction:new E,color:new $,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new $,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new $,groundColor:new $};break;case"RectAreaLight":e={color:new $,position:new E,halfWidth:new E,halfHeight:new E};break}return r[t.id]=e,e}}}function Yb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Kb=0;function Jb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Qb(r){const t=new qb,e=Yb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,s=new At,o=new At;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,v=0,_=0,x=0,y=0,M=0,T=0;c.sort(Jb);for(let w=0,S=c.length;w<S;w++){const P=c[w],I=P.color,z=P.intensity,H=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*z,u+=I.g*z,d+=I.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);T++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,N=e.get(P);N.shadowIntensity=tt.intensity,N.shadowBias=tt.bias,N.shadowNormalBias=tt.normalBias,N.shadowRadius=tt.radius,N.shadowMapSize=tt.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(I).multiplyScalar(z),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[b]=X;const tt=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,tt.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[b]=tt.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=tt.intensity,N.shadowBias=tt.bias,N.shadowNormalBias=tt.normalBias,N.shadowRadius=tt.radius,N.shadowMapSize=tt.mapSize,n.spotShadow[b]=N,n.spotShadowMap[b]=G,x++}b++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(I).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const tt=P.shadow,N=e.get(P);N.shadowIntensity=tt.intensity,N.shadowBias=tt.bias,N.shadowNormalBias=tt.normalBias,N.shadowRadius=tt.radius,N.shadowMapSize=tt.mapSize,N.shadowCameraNear=tt.camera.near,N.shadowCameraFar=tt.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=X,m++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=X,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==b||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==y||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+y-M,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,R.directionalLength=f,R.pointLength=m,R.spotLength=b,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=y,R.numLightProbes=T,n.version=Kb++)}function l(c,h){let u=0,d=0,f=0,m=0,b=0;const g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const x=n.hemi[b];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),b++}}}return{setup:a,setupView:l,state:n}}function zu(r){const t=new Qb(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Zb(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new zu(r),t.set(i,[a])):s>=o.length?(a=new zu(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`;function e_(r,t,e){let n=new Qc;const i=new rt,s=new rt,o=new ue,a=new Zm({depthPacking:gp}),l=new $m,c={},h=e.maxTextureSize,u={[pi]:on,[on]:pi,[xe]:xe},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:$b,fragmentShader:t_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new ee;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Pt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let p=this.type;this.render=function(M,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const w=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(di),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==hi&&this.type===hi,H=p===hi&&this.type!==hi;for(let G=0,X=M.length;G<X;G++){const tt=M[G],N=tt.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const W=N.getFrameExtents();if(i.multiply(W),s.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,N.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,N.mapSize.y=s.y)),N.map===null||z===!0||H===!0){const ot=this.type!==hi?{minFilter:He,magFilter:He}:{};N.map!==null&&N.map.dispose(),N.map=new Xe(i.x,i.y,ot),N.map.texture.name=tt.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const Q=N.getViewportCount();for(let ot=0;ot<Q;ot++){const St=N.getViewport(ot);o.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),I.viewport(o),N.updateMatrices(tt,ot),n=N.getFrustum(),x(T,R,N.camera,tt,this.type)}N.isPointLightShadow!==!0&&this.type===hi&&v(N,R),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(w,S,P)};function v(M,T){const R=t.update(b);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Xe(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,b,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(T,null,R,f,b,null)}function _(M,T,R,w){let S=null;const P=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=S.uuid,z=T.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let G=H[z];G===void 0&&(G=S.clone(),H[z]=G,T.addEventListener("dispose",y)),S=G}if(S.visible=T.visible,S.wireframe=T.wireframe,w===hi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=r.properties.get(S);I.light=R}return S}function x(M,T,R,w,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===hi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const z=t.update(M),H=M.material;if(Array.isArray(H)){const G=z.groups;for(let X=0,tt=G.length;X<tt;X++){const N=G[X],W=H[N.materialIndex];if(W&&W.visible){const Q=_(M,W,w,S);M.onBeforeShadow(r,M,T,R,z,Q,N),r.renderBufferDirect(R,null,z,Q,M,N),M.onAfterShadow(r,M,T,R,z,Q,N)}}}else if(H.visible){const G=_(M,H,w,S);M.onBeforeShadow(r,M,T,R,z,G,null),r.renderBufferDirect(R,null,z,G,M,null),M.onAfterShadow(r,M,T,R,z,G,null)}}const I=M.children;for(let z=0,H=I.length;z<H;z++)x(I[z],T,R,w,S)}function y(M){M.target.removeEventListener("dispose",y);for(const R in c){const w=c[R],S=M.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const n_={[Hl]:Gl,[Vl]:Xl,[Wl]:ql,[Gs]:jl,[Gl]:Hl,[Xl]:Vl,[ql]:Wl,[jl]:Gs};function i_(r,t){function e(){let F=!1;const ht=new ue;let mt=null;const Et=new ue(0,0,0,0);return{setMask:function(ct){mt!==ct&&!F&&(r.colorMask(ct,ct,ct,ct),mt=ct)},setLocked:function(ct){F=ct},setClear:function(ct,it,Dt,Kt,we){we===!0&&(ct*=Kt,it*=Kt,Dt*=Kt),ht.set(ct,it,Dt,Kt),Et.equals(ht)===!1&&(r.clearColor(ct,it,Dt,Kt),Et.copy(ht))},reset:function(){F=!1,mt=null,Et.set(-1,0,0,0)}}}function n(){let F=!1,ht=!1,mt=null,Et=null,ct=null;return{setReversed:function(it){if(ht!==it){const Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ht=it;const Kt=ct;ct=null,this.setClear(Kt)}},getReversed:function(){return ht},setTest:function(it){it?J(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(it){mt!==it&&!F&&(r.depthMask(it),mt=it)},setFunc:function(it){if(ht&&(it=n_[it]),Et!==it){switch(it){case Hl:r.depthFunc(r.NEVER);break;case Gl:r.depthFunc(r.ALWAYS);break;case Vl:r.depthFunc(r.LESS);break;case Gs:r.depthFunc(r.LEQUAL);break;case Wl:r.depthFunc(r.EQUAL);break;case jl:r.depthFunc(r.GEQUAL);break;case Xl:r.depthFunc(r.GREATER);break;case ql:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Et=it}},setLocked:function(it){F=it},setClear:function(it){ct!==it&&(ht&&(it=1-it),r.clearDepth(it),ct=it)},reset:function(){F=!1,mt=null,Et=null,ct=null,ht=!1}}}function i(){let F=!1,ht=null,mt=null,Et=null,ct=null,it=null,Dt=null,Kt=null,we=null;return{setTest:function(de){F||(de?J(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(de){ht!==de&&!F&&(r.stencilMask(de),ht=de)},setFunc:function(de,ei,jn){(mt!==de||Et!==ei||ct!==jn)&&(r.stencilFunc(de,ei,jn),mt=de,Et=ei,ct=jn)},setOp:function(de,ei,jn){(it!==de||Dt!==ei||Kt!==jn)&&(r.stencilOp(de,ei,jn),it=de,Dt=ei,Kt=jn)},setLocked:function(de){F=de},setClear:function(de){we!==de&&(r.clearStencil(de),we=de)},reset:function(){F=!1,ht=null,mt=null,Et=null,ct=null,it=null,Dt=null,Kt=null,we=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,v=null,_=null,x=null,y=null,M=null,T=new $(0,0,0),R=0,w=!1,S=null,P=null,I=null,z=null,H=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const N=r.getParameter(r.VERSION);N.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(N)[1]),X=tt>=1):N.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),X=tt>=2);let W=null,Q={};const ot=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),Ut=new ue().fromArray(ot),Ft=new ue().fromArray(St);function Nt(F,ht,mt,Et){const ct=new Uint8Array(4),it=r.createTexture();r.bindTexture(F,it),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<mt;Dt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,Et,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(ht+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return it}const K={};K[r.TEXTURE_2D]=Nt(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(Gs),lt(!1),st(xh),J(r.CULL_FACE),yt(di);function J(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function gt(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Ht(F,ht){return u[F]!==ht?(r.bindFramebuffer(F,ht),u[F]=ht,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ht),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ct(F,ht){let mt=f,Et=!1;if(F){mt=d.get(ht),mt===void 0&&(mt=[],d.set(ht,mt));const ct=F.textures;if(mt.length!==ct.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let it=0,Dt=ct.length;it<Dt;it++)mt[it]=r.COLOR_ATTACHMENT0+it;mt.length=ct.length,Et=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,Et=!0);Et&&r.drawBuffers(mt)}function qt(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const Rt={[Yi]:r.FUNC_ADD,[Wf]:r.FUNC_SUBTRACT,[jf]:r.FUNC_REVERSE_SUBTRACT};Rt[Xf]=r.MIN,Rt[qf]=r.MAX;const L={[Yf]:r.ZERO,[Kf]:r.ONE,[Jf]:r.SRC_COLOR,[Ol]:r.SRC_ALPHA,[np]:r.SRC_ALPHA_SATURATE,[tp]:r.DST_COLOR,[Zf]:r.DST_ALPHA,[Qf]:r.ONE_MINUS_SRC_COLOR,[Bl]:r.ONE_MINUS_SRC_ALPHA,[ep]:r.ONE_MINUS_DST_COLOR,[$f]:r.ONE_MINUS_DST_ALPHA,[ip]:r.CONSTANT_COLOR,[sp]:r.ONE_MINUS_CONSTANT_COLOR,[rp]:r.CONSTANT_ALPHA,[op]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(F,ht,mt,Et,ct,it,Dt,Kt,we,de){if(F===di){b===!0&&(gt(r.BLEND),b=!1);return}if(b===!1&&(J(r.BLEND),b=!0),F!==Vf){if(F!==g||de!==w){if((p!==Yi||x!==Yi)&&(r.blendEquation(r.FUNC_ADD),p=Yi,x=Yi),de)switch(F){case Qi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fe:r.blendFunc(r.ONE,r.ONE);break;case bh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _h:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Qi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fe:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _h:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,_=null,y=null,M=null,T.set(0,0,0),R=0,g=F,w=de}return}ct=ct||ht,it=it||mt,Dt=Dt||Et,(ht!==p||ct!==x)&&(r.blendEquationSeparate(Rt[ht],Rt[ct]),p=ht,x=ct),(mt!==v||Et!==_||it!==y||Dt!==M)&&(r.blendFuncSeparate(L[mt],L[Et],L[it],L[Dt]),v=mt,_=Et,y=it,M=Dt),(Kt.equals(T)===!1||we!==R)&&(r.blendColor(Kt.r,Kt.g,Kt.b,we),T.copy(Kt),R=we),g=F,w=!1}function dt(F,ht){F.side===xe?gt(r.CULL_FACE):J(r.CULL_FACE);let mt=F.side===on;ht&&(mt=!mt),lt(mt),F.blending===Qi&&F.transparent===!1?yt(di):yt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Et=F.stencilWrite;a.setTest(Et),Et&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){S!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),S=F)}function st(F){F!==Hf?(J(r.CULL_FACE),F!==P&&(F===xh?r.cullFace(r.BACK):F===Gf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),P=F}function Wt(F){F!==I&&(X&&r.lineWidth(F),I=F)}function bt(F,ht,mt){F?(J(r.POLYGON_OFFSET_FILL),(z!==ht||H!==mt)&&(r.polygonOffset(ht,mt),z=ht,H=mt)):gt(r.POLYGON_OFFSET_FILL)}function Gt(F){F?J(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function Me(F){F===void 0&&(F=r.TEXTURE0+G-1),W!==F&&(r.activeTexture(F),W=F)}function le(F,ht,mt){mt===void 0&&(W===null?mt=r.TEXTURE0+G-1:mt=W);let Et=Q[mt];Et===void 0&&(Et={type:void 0,texture:void 0},Q[mt]=Et),(Et.type!==F||Et.texture!==ht)&&(W!==mt&&(r.activeTexture(mt),W=mt),r.bindTexture(F,ht||K[F]),Et.type=F,Et.texture=ht)}function D(){const F=Q[W];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(F){Ut.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function ft(F){Ft.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Ft.copy(F))}function xt(F,ht){let mt=c.get(ht);mt===void 0&&(mt=new WeakMap,c.set(ht,mt));let Et=mt.get(F);Et===void 0&&(Et=r.getUniformBlockIndex(ht,F.name),mt.set(F,Et))}function pt(F,ht){const Et=c.get(ht).get(F);l.get(ht)!==Et&&(r.uniformBlockBinding(ht,Et,F.__bindingPointIndex),l.set(ht,Et))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},W=null,Q={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,v=null,_=null,x=null,y=null,M=null,T=new $(0,0,0),R=0,w=!1,S=null,P=null,I=null,z=null,H=null,Ut.set(0,0,r.canvas.width,r.canvas.height),Ft.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:gt,bindFramebuffer:Ht,drawBuffers:Ct,useProgram:qt,setBlending:yt,setMaterial:dt,setFlipSided:lt,setCullFace:st,setLineWidth:Wt,setPolygonOffset:bt,setScissorTest:Gt,activeTexture:Me,bindTexture:le,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:B,texImage2D:et,texImage3D:Z,updateUBOMapping:xt,uniformBlockBinding:pt,texStorage2D:at,texStorage3D:wt,texSubImage2D:U,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:Mt,scissor:nt,viewport:ft,reset:Yt}}function s_(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,A){return f?new OffscreenCanvas(D,A):Vr("canvas")}function b(D,A,B){let U=1;const j=le(D);if((j.width>B||j.height>B)&&(U=B/Math.max(j.width,j.height)),U<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const V=Math.floor(U*j.width),Mt=Math.floor(U*j.height);u===void 0&&(u=m(V,Mt));const at=A?m(V,Mt):u;return at.width=V,at.height=Mt,at.getContext("2d").drawImage(D,0,0,V,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+Mt+")."),at}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(D,A,B,U,j=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let V=A;if(A===r.RED&&(B===r.FLOAT&&(V=r.R32F),B===r.HALF_FLOAT&&(V=r.R16F),B===r.UNSIGNED_BYTE&&(V=r.R8)),A===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(V=r.R8UI),B===r.UNSIGNED_SHORT&&(V=r.R16UI),B===r.UNSIGNED_INT&&(V=r.R32UI),B===r.BYTE&&(V=r.R8I),B===r.SHORT&&(V=r.R16I),B===r.INT&&(V=r.R32I)),A===r.RG&&(B===r.FLOAT&&(V=r.RG32F),B===r.HALF_FLOAT&&(V=r.RG16F),B===r.UNSIGNED_BYTE&&(V=r.RG8)),A===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(V=r.RG8UI),B===r.UNSIGNED_SHORT&&(V=r.RG16UI),B===r.UNSIGNED_INT&&(V=r.RG32UI),B===r.BYTE&&(V=r.RG8I),B===r.SHORT&&(V=r.RG16I),B===r.INT&&(V=r.RG32I)),A===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(V=r.RGB8UI),B===r.UNSIGNED_SHORT&&(V=r.RGB16UI),B===r.UNSIGNED_INT&&(V=r.RGB32UI),B===r.BYTE&&(V=r.RGB8I),B===r.SHORT&&(V=r.RGB16I),B===r.INT&&(V=r.RGB32I)),A===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(V=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(V=r.RGBA16UI),B===r.UNSIGNED_INT&&(V=r.RGBA32UI),B===r.BYTE&&(V=r.RGBA8I),B===r.SHORT&&(V=r.RGBA16I),B===r.INT&&(V=r.RGBA32I)),A===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&(V=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(V=r.R11F_G11F_B10F)),A===r.RGBA){const Mt=j?ca:ae.getTransfer(U);B===r.FLOAT&&(V=r.RGBA32F),B===r.HALF_FLOAT&&(V=r.RGBA16F),B===r.UNSIGNED_BYTE&&(V=Mt===me?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(V=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(V=r.RGB5_A1)}return(V===r.R16F||V===r.R32F||V===r.RG16F||V===r.RG32F||V===r.RGBA16F||V===r.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function x(D,A){let B;return D?A===null||A===$i||A===zr?B=r.DEPTH24_STENCIL8:A===Fn?B=r.DEPTH32F_STENCIL8:A===Ur&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$i||A===zr?B=r.DEPTH_COMPONENT24:A===Fn?B=r.DEPTH_COMPONENT32F:A===Ur&&(B=r.DEPTH_COMPONENT16),B}function y(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==He&&D.minFilter!==Be?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function M(D){const A=D.target;A.removeEventListener("dispose",M),R(A),A.isVideoTexture&&h.delete(A)}function T(D){const A=D.target;A.removeEventListener("dispose",T),S(A)}function R(D){const A=n.get(D);if(A.__webglInit===void 0)return;const B=D.source,U=d.get(B);if(U){const j=U[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(D),Object.keys(U).length===0&&d.delete(B)}n.remove(D)}function w(D){const A=n.get(D);r.deleteTexture(A.__webglTexture);const B=D.source,U=d.get(B);delete U[A.__cacheKey],o.memory.textures--}function S(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(A.__webglFramebuffer[U]))for(let j=0;j<A.__webglFramebuffer[U].length;j++)r.deleteFramebuffer(A.__webglFramebuffer[U][j]);else r.deleteFramebuffer(A.__webglFramebuffer[U]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[U])}else{if(Array.isArray(A.__webglFramebuffer))for(let U=0;U<A.__webglFramebuffer.length;U++)r.deleteFramebuffer(A.__webglFramebuffer[U]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let U=0;U<A.__webglColorRenderbuffer.length;U++)A.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[U]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const B=D.textures;for(let U=0,j=B.length;U<j;U++){const V=n.get(B[U]);V.__webglTexture&&(r.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(B[U])}n.remove(D)}let P=0;function I(){P=0}function z(){const D=P;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),P+=1,D}function H(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function G(D,A){const B=n.get(D);if(D.isVideoTexture&&Gt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&B.__version!==D.version){const U=D.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,D,A);return}}else D.isExternalTexture&&(B.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+A)}function X(D,A){const B=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){K(B,D,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+A)}function tt(D,A){const B=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){K(B,D,A);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+A)}function N(D,A){const B=n.get(D);if(D.version>0&&B.__version!==D.version){J(B,D,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+A)}const W={[Zi]:r.REPEAT,[Ri]:r.CLAMP_TO_EDGE,[aa]:r.MIRRORED_REPEAT},Q={[He]:r.NEAREST,[Nd]:r.NEAREST_MIPMAP_NEAREST,[Sr]:r.NEAREST_MIPMAP_LINEAR,[Be]:r.LINEAR,[Zo]:r.LINEAR_MIPMAP_NEAREST,[Jn]:r.LINEAR_MIPMAP_LINEAR},ot={[xp]:r.NEVER,[Sp]:r.ALWAYS,[bp]:r.LESS,[Wd]:r.LEQUAL,[_p]:r.EQUAL,[wp]:r.GEQUAL,[yp]:r.GREATER,[Mp]:r.NOTEQUAL};function St(D,A){if(A.type===Fn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Be||A.magFilter===Zo||A.magFilter===Sr||A.magFilter===Jn||A.minFilter===Be||A.minFilter===Zo||A.minFilter===Sr||A.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,W[A.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,W[A.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,W[A.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Q[A.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ot[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===He||A.minFilter!==Sr&&A.minFilter!==Jn||A.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ut(D,A){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",M));const U=A.source;let j=d.get(U);j===void 0&&(j={},d.set(U,j));const V=H(A);if(V!==D.__cacheKey){j[V]===void 0&&(j[V]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[V].usedTimes++;const Mt=j[D.__cacheKey];Mt!==void 0&&(j[D.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(A)),D.__cacheKey=V,D.__webglTexture=j[V].texture}return B}function Ft(D,A,B){return Math.floor(Math.floor(D/B)/A)}function Nt(D,A,B,U){const V=D.updateRanges;if(V.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,B,U,A.data);else{V.sort((Z,nt)=>Z.start-nt.start);let Mt=0;for(let Z=1;Z<V.length;Z++){const nt=V[Mt],ft=V[Z],xt=nt.start+nt.count,pt=Ft(ft.start,A.width,4),Yt=Ft(nt.start,A.width,4);ft.start<=xt+1&&pt===Yt&&Ft(ft.start+ft.count-1,A.width,4)===pt?nt.count=Math.max(nt.count,ft.start+ft.count-nt.start):(++Mt,V[Mt]=ft)}V.length=Mt+1;const at=r.getParameter(r.UNPACK_ROW_LENGTH),wt=r.getParameter(r.UNPACK_SKIP_PIXELS),et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let Z=0,nt=V.length;Z<nt;Z++){const ft=V[Z],xt=Math.floor(ft.start/4),pt=Math.ceil(ft.count/4),Yt=xt%A.width,F=Math.floor(xt/A.width),ht=pt,mt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),e.texSubImage2D(r.TEXTURE_2D,0,Yt,F,ht,mt,B,U,A.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,at),r.pixelStorei(r.UNPACK_SKIP_PIXELS,wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,et)}}function K(D,A,B){let U=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(U=r.TEXTURE_3D);const j=Ut(D,A),V=A.source;e.bindTexture(U,D.__webglTexture,r.TEXTURE0+B);const Mt=n.get(V);if(V.version!==Mt.__version||j===!0){e.activeTexture(r.TEXTURE0+B);const at=ae.getPrimaries(ae.workingColorSpace),wt=A.colorSpace===Ci?null:ae.getPrimaries(A.colorSpace),et=A.colorSpace===Ci||at===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Z=b(A.image,!1,i.maxTextureSize);Z=Me(A,Z);const nt=s.convert(A.format,A.colorSpace),ft=s.convert(A.type);let xt=_(A.internalFormat,nt,ft,A.colorSpace,A.isVideoTexture);St(U,A);let pt;const Yt=A.mipmaps,F=A.isVideoTexture!==!0,ht=Mt.__version===void 0||j===!0,mt=V.dataReady,Et=y(A,Z);if(A.isDepthTexture)xt=x(A.format===Or,A.type),ht&&(F?e.texStorage2D(r.TEXTURE_2D,1,xt,Z.width,Z.height):e.texImage2D(r.TEXTURE_2D,0,xt,Z.width,Z.height,0,nt,ft,null));else if(A.isDataTexture)if(Yt.length>0){F&&ht&&e.texStorage2D(r.TEXTURE_2D,Et,xt,Yt[0].width,Yt[0].height);for(let ct=0,it=Yt.length;ct<it;ct++)pt=Yt[ct],F?mt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,pt.width,pt.height,nt,ft,pt.data):e.texImage2D(r.TEXTURE_2D,ct,xt,pt.width,pt.height,0,nt,ft,pt.data);A.generateMipmaps=!1}else F?(ht&&e.texStorage2D(r.TEXTURE_2D,Et,xt,Z.width,Z.height),mt&&Nt(A,Z,nt,ft)):e.texImage2D(r.TEXTURE_2D,0,xt,Z.width,Z.height,0,nt,ft,Z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){F&&ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,xt,Yt[0].width,Yt[0].height,Z.depth);for(let ct=0,it=Yt.length;ct<it;ct++)if(pt=Yt[ct],A.format!==An)if(nt!==null)if(F){if(mt)if(A.layerUpdates.size>0){const Dt=pu(pt.width,pt.height,A.format,A.type);for(const Kt of A.layerUpdates){const we=pt.data.subarray(Kt*Dt/pt.data.BYTES_PER_ELEMENT,(Kt+1)*Dt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Kt,pt.width,pt.height,1,nt,we)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,pt.width,pt.height,Z.depth,nt,pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,xt,pt.width,pt.height,Z.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?mt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,pt.width,pt.height,Z.depth,nt,ft,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,xt,pt.width,pt.height,Z.depth,0,nt,ft,pt.data)}else{F&&ht&&e.texStorage2D(r.TEXTURE_2D,Et,xt,Yt[0].width,Yt[0].height);for(let ct=0,it=Yt.length;ct<it;ct++)pt=Yt[ct],A.format!==An?nt!==null?F?mt&&e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,pt.width,pt.height,nt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,xt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?mt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,pt.width,pt.height,nt,ft,pt.data):e.texImage2D(r.TEXTURE_2D,ct,xt,pt.width,pt.height,0,nt,ft,pt.data)}else if(A.isDataArrayTexture)if(F){if(ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,xt,Z.width,Z.height,Z.depth),mt)if(A.layerUpdates.size>0){const ct=pu(Z.width,Z.height,A.format,A.type);for(const it of A.layerUpdates){const Dt=Z.data.subarray(it*ct/Z.data.BYTES_PER_ELEMENT,(it+1)*ct/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,it,Z.width,Z.height,1,nt,ft,Dt)}A.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,nt,ft,Z.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,Z.width,Z.height,Z.depth,0,nt,ft,Z.data);else if(A.isData3DTexture)F?(ht&&e.texStorage3D(r.TEXTURE_3D,Et,xt,Z.width,Z.height,Z.depth),mt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,nt,ft,Z.data)):e.texImage3D(r.TEXTURE_3D,0,xt,Z.width,Z.height,Z.depth,0,nt,ft,Z.data);else if(A.isFramebufferTexture){if(ht)if(F)e.texStorage2D(r.TEXTURE_2D,Et,xt,Z.width,Z.height);else{let ct=Z.width,it=Z.height;for(let Dt=0;Dt<Et;Dt++)e.texImage2D(r.TEXTURE_2D,Dt,xt,ct,it,0,nt,ft,null),ct>>=1,it>>=1}}else if(Yt.length>0){if(F&&ht){const ct=le(Yt[0]);e.texStorage2D(r.TEXTURE_2D,Et,xt,ct.width,ct.height)}for(let ct=0,it=Yt.length;ct<it;ct++)pt=Yt[ct],F?mt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,nt,ft,pt):e.texImage2D(r.TEXTURE_2D,ct,xt,nt,ft,pt);A.generateMipmaps=!1}else if(F){if(ht){const ct=le(Z);e.texStorage2D(r.TEXTURE_2D,Et,xt,ct.width,ct.height)}mt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt,ft,Z)}else e.texImage2D(r.TEXTURE_2D,0,xt,nt,ft,Z);g(A)&&p(U),Mt.__version=V.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function J(D,A,B){if(A.image.length!==6)return;const U=Ut(D,A),j=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+B);const V=n.get(j);if(j.version!==V.__version||U===!0){e.activeTexture(r.TEXTURE0+B);const Mt=ae.getPrimaries(ae.workingColorSpace),at=A.colorSpace===Ci?null:ae.getPrimaries(A.colorSpace),wt=A.colorSpace===Ci||Mt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const et=A.isCompressedTexture||A.image[0].isCompressedTexture,Z=A.image[0]&&A.image[0].isDataTexture,nt=[];for(let it=0;it<6;it++)!et&&!Z?nt[it]=b(A.image[it],!0,i.maxCubemapSize):nt[it]=Z?A.image[it].image:A.image[it],nt[it]=Me(A,nt[it]);const ft=nt[0],xt=s.convert(A.format,A.colorSpace),pt=s.convert(A.type),Yt=_(A.internalFormat,xt,pt,A.colorSpace),F=A.isVideoTexture!==!0,ht=V.__version===void 0||U===!0,mt=j.dataReady;let Et=y(A,ft);St(r.TEXTURE_CUBE_MAP,A);let ct;if(et){F&&ht&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,Yt,ft.width,ft.height);for(let it=0;it<6;it++){ct=nt[it].mipmaps;for(let Dt=0;Dt<ct.length;Dt++){const Kt=ct[Dt];A.format!==An?xt!==null?F?mt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,0,0,Kt.width,Kt.height,xt,Kt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,Yt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,0,0,Kt.width,Kt.height,xt,pt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,Yt,Kt.width,Kt.height,0,xt,pt,Kt.data)}}}else{if(ct=A.mipmaps,F&&ht){ct.length>0&&Et++;const it=le(nt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,Yt,it.width,it.height)}for(let it=0;it<6;it++)if(Z){F?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,nt[it].width,nt[it].height,xt,pt,nt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,nt[it].width,nt[it].height,0,xt,pt,nt[it].data);for(let Dt=0;Dt<ct.length;Dt++){const we=ct[Dt].image[it].image;F?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,0,0,we.width,we.height,xt,pt,we.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,Yt,we.width,we.height,0,xt,pt,we.data)}}else{F?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,xt,pt,nt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,xt,pt,nt[it]);for(let Dt=0;Dt<ct.length;Dt++){const Kt=ct[Dt];F?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,0,0,xt,pt,Kt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,Yt,xt,pt,Kt.image[it])}}}g(A)&&p(r.TEXTURE_CUBE_MAP),V.__version=j.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function gt(D,A,B,U,j,V){const Mt=s.convert(B.format,B.colorSpace),at=s.convert(B.type),wt=_(B.internalFormat,Mt,at,B.colorSpace),et=n.get(A),Z=n.get(B);if(Z.__renderTarget=A,!et.__hasExternalTextures){const nt=Math.max(1,A.width>>V),ft=Math.max(1,A.height>>V);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,V,wt,nt,ft,A.depth,0,Mt,at,null):e.texImage2D(j,V,wt,nt,ft,0,Mt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),bt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,j,Z.__webglTexture,0,Wt(A)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,j,Z.__webglTexture,V),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(D,A,B){if(r.bindRenderbuffer(r.RENDERBUFFER,D),A.depthBuffer){const U=A.depthTexture,j=U&&U.isDepthTexture?U.type:null,V=x(A.stencilBuffer,j),Mt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Wt(A);bt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,V,A.width,A.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,V,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,V,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,D)}else{const U=A.textures;for(let j=0;j<U.length;j++){const V=U[j],Mt=s.convert(V.format,V.colorSpace),at=s.convert(V.type),wt=_(V.internalFormat,Mt,at,V.colorSpace),et=Wt(A);B&&bt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,wt,A.width,A.height):bt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,wt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,wt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=n.get(A.depthTexture);U.__renderTarget=A,(!U.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const j=U.__webglTexture,V=Wt(A);if(A.depthTexture.format===kr)bt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(A.depthTexture.format===Or)bt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function qt(D){const A=n.get(D),B=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const U=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),U){const j=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,U.removeEventListener("dispose",j)};U.addEventListener("dispose",j),A.__depthDisposeCallback=j}A.__boundDepthTexture=U}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const U=D.texture.mipmaps;U&&U.length>0?Ct(A.__webglFramebuffer[0],D):Ct(A.__webglFramebuffer,D)}else if(B){A.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[U]),A.__webglDepthbuffer[U]===void 0)A.__webglDepthbuffer[U]=r.createRenderbuffer(),Ht(A.__webglDepthbuffer[U],D,!1);else{const j=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=A.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,V)}}else{const U=D.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Ht(A.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,V)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(D,A,B){const U=n.get(D);A!==void 0&&gt(U.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&qt(D)}function L(D){const A=D.texture,B=n.get(D),U=n.get(A);D.addEventListener("dispose",T);const j=D.textures,V=D.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=A.version,o.memory.textures++),V){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let wt=0;wt<A.mipmaps.length;wt++)B.__webglFramebuffer[at][wt]=r.createFramebuffer()}else B.__webglFramebuffer[at]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<A.mipmaps.length;at++)B.__webglFramebuffer[at]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let at=0,wt=j.length;at<wt;at++){const et=n.get(j[at]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&bt(D)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const wt=j[at];B.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const et=s.convert(wt.format,wt.colorSpace),Z=s.convert(wt.type),nt=_(wt.internalFormat,et,Z,wt.colorSpace,D.isXRRenderTarget===!0),ft=Wt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,nt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,B.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(B.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(V){e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),St(r.TEXTURE_CUBE_MAP,A);for(let at=0;at<6;at++)if(A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)gt(B.__webglFramebuffer[at][wt],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt);else gt(B.__webglFramebuffer[at],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(A)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,wt=j.length;at<wt;at++){const et=j[at],Z=n.get(et);let nt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(nt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(nt,Z.__webglTexture),St(nt,et),gt(B.__webglFramebuffer,D,et,r.COLOR_ATTACHMENT0+at,nt,0),g(et)&&p(nt)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(at=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,U.__webglTexture),St(at,A),A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)gt(B.__webglFramebuffer[wt],D,A,r.COLOR_ATTACHMENT0,at,wt);else gt(B.__webglFramebuffer,D,A,r.COLOR_ATTACHMENT0,at,0);g(A)&&p(at),e.unbindTexture()}D.depthBuffer&&qt(D)}function yt(D){const A=D.textures;for(let B=0,U=A.length;B<U;B++){const j=A[B];if(g(j)){const V=v(D),Mt=n.get(j).__webglTexture;e.bindTexture(V,Mt),p(V),e.unbindTexture()}}}const dt=[],lt=[];function st(D){if(D.samples>0){if(bt(D)===!1){const A=D.textures,B=D.width,U=D.height;let j=r.COLOR_BUFFER_BIT;const V=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(D),at=A.length>1;if(at)for(let et=0;et<A.length;et++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const wt=D.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let et=0;et<A.length;et++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[et]);const Z=n.get(A[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Z,0)}r.blitFramebuffer(0,0,B,U,0,0,B,U,j,r.NEAREST),l===!0&&(dt.length=0,lt.length=0,dt.push(r.COLOR_ATTACHMENT0+et),D.depthBuffer&&D.resolveDepthBuffer===!1&&(dt.push(V),lt.push(V),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let et=0;et<A.length;et++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[et]);const Z=n.get(A[et]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,Z,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Wt(D){return Math.min(i.maxSamples,D.samples)}function bt(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Gt(D){const A=o.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function Me(D,A){const B=D.colorSpace,U=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||B!==un&&B!==Ci&&(ae.getTransfer(B)===me?(U!==An||j!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}function le(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=N,this.rebindTextures=Rt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=bt}function r_(r,t){function e(n,i=Ci){let s;const o=ae.getTransfer(i);if(n===Cn)return r.UNSIGNED_BYTE;if(n===Bc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fd)return r.BYTE;if(n===Ud)return r.SHORT;if(n===Ur)return r.UNSIGNED_SHORT;if(n===Oc)return r.INT;if(n===$i)return r.UNSIGNED_INT;if(n===Fn)return r.FLOAT;if(n===an)return r.HALF_FLOAT;if(n===Od)return r.ALPHA;if(n===Bd)return r.RGB;if(n===An)return r.RGBA;if(n===kr)return r.DEPTH_COMPONENT;if(n===Or)return r.DEPTH_STENCIL;if(n===Br)return r.RED;if(n===Gc)return r.RED_INTEGER;if(n===Hd)return r.RG;if(n===Vc)return r.RG_INTEGER;if(n===Wc)return r.RGBA_INTEGER;if(n===$o||n===ta||n===ea||n===na)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===Ql||n===Zl||n===$l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ql)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===ec||n===nc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tc||n===ec)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ic)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===xc||n===bc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===vc)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===yc||n===Mc||n===wc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===_c)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`;class l_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new af(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qt({vertexShader:o_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c_ extends is{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const b=typeof XRWebGLBinding<"u",g=new l_,p={},v=e.getContextAttributes();let _=null,x=null;const y=[],M=[],T=new rt;let R=null;const w=new rn;w.viewport=new ue;const S=new rn;S.viewport=new ue;const P=[w,S],I=new v0;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=y[K];return J===void 0&&(J=new Za,y[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=y[K];return J===void 0&&(J=new Za,y[K]=J),J.getGripSpace()},this.getHand=function(K){let J=y[K];return J===void 0&&(J=new Za,y[K]=J),J.getHandSpace()};function G(K){const J=M.indexOf(K.inputSource);if(J===-1)return;const gt=y[J];gt!==void 0&&(gt.update(K.inputSource,K.frame,c||o),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",tt);for(let K=0;K<y.length;K++){const J=M[K];J!==null&&(M[K]=null,y[K].disconnect(J))}z=null,H=null,g.reset();for(const K in p)delete p[K];t.setRenderTarget(_),f=null,d=null,u=null,i=null,x=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",X),i.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ht=null,Ct=null;v.depth&&(Ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=v.stencil?Or:kr,Ht=v.stencil?zr:$i);const qt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(qt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Xe(d.textureWidth,d.textureHeight,{format:An,type:Cn,depthTexture:new $c(d.textureWidth,d.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Xe(f.framebufferWidth,f.framebufferHeight,{format:An,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(K){for(let J=0;J<K.removed.length;J++){const gt=K.removed[J],Ht=M.indexOf(gt);Ht>=0&&(M[Ht]=null,y[Ht].disconnect(gt))}for(let J=0;J<K.added.length;J++){const gt=K.added[J];let Ht=M.indexOf(gt);if(Ht===-1){for(let qt=0;qt<y.length;qt++)if(qt>=M.length){M.push(gt),Ht=qt;break}else if(M[qt]===null){M[qt]=gt,Ht=qt;break}if(Ht===-1)break}const Ct=y[Ht];Ct&&Ct.connect(gt)}}const N=new E,W=new E;function Q(K,J,gt){N.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(gt.matrixWorld);const Ht=N.distanceTo(W),Ct=J.projectionMatrix.elements,qt=gt.projectionMatrix.elements,Rt=Ct[14]/(Ct[10]-1),L=Ct[14]/(Ct[10]+1),yt=(Ct[9]+1)/Ct[5],dt=(Ct[9]-1)/Ct[5],lt=(Ct[8]-1)/Ct[0],st=(qt[8]+1)/qt[0],Wt=Rt*lt,bt=Rt*st,Gt=Ht/(-lt+st),Me=Gt*-lt;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Me),K.translateZ(Gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ct[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const le=Rt+Gt,D=L+Gt,A=Wt-Me,B=bt+(Ht-Me),U=yt*L/D*le,j=dt*L/D*le;K.projectionMatrix.makePerspective(A,B,U,j,le,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ot(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,gt=K.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),I.near=S.near=w.near=J,I.far=S.far=w.far=gt,(z!==I.near||H!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,H=I.far),I.layers.mask=K.layers.mask|6,w.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const Ht=K.parent,Ct=I.cameras;ot(I,Ht);for(let qt=0;qt<Ct.length;qt++)ot(Ct[qt],Ht);Ct.length===2?Q(I,w,S):I.projectionMatrix.copy(w.projectionMatrix),St(K,I,Ht)};function St(K,J,gt){gt===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=js*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Ut=null;function Ft(K,J){if(h=J.getViewerPose(c||o),m=J,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ht=!1;gt.length!==I.cameras.length&&(I.cameras.length=0,Ht=!0);for(let L=0;L<gt.length;L++){const yt=gt[L];let dt=null;if(f!==null)dt=f.getViewport(yt);else{const st=u.getViewSubImage(d,yt);dt=st.viewport,L===0&&(t.setRenderTargetTextures(x,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(x))}let lt=P[L];lt===void 0&&(lt=new rn,lt.layers.enable(L),lt.viewport=new ue,P[L]=lt),lt.matrix.fromArray(yt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(yt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(dt.x,dt.y,dt.width,dt.height),L===0&&(I.matrix.copy(lt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ht===!0&&I.cameras.push(lt)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();const L=u.getDepthInformation(gt[0]);L&&L.isValid&&L.texture&&g.init(L,i.renderState)}if(Ct&&Ct.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<gt.length;L++){const yt=gt[L].camera;if(yt){let dt=p[yt];dt||(dt=new af,p[yt]=dt);const lt=u.getCameraImage(yt);dt.sourceTexture=lt}}}}for(let gt=0;gt<y.length;gt++){const Ht=M[gt],Ct=y[gt];Ht!==null&&Ct!==void 0&&Ct.update(Ht,J,c||o)}Ut&&Ut(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Nt=new Mf;Nt.setAnimationLoop(Ft),this.setAnimationLoop=function(K){Ut=K},this.dispose=function(){}}}const Hi=new qe,h_=new At;function u_(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qd(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),_=v.envMap,x=v.envMapRotation;_&&(g.envMap.value=_,Hi.copy(x),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),g.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(Hi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function d_(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const x=_.program;n.uniformBlockBinding(v,x)}function c(v,_){let x=i[v.id];x===void 0&&(m(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",g));const y=_.program;n.updateUBOMapping(v,y);const M=t.render.frame;s[v.id]!==M&&(d(v),s[v.id]=M)}function h(v){const _=u();v.__bindingPointIndex=_;const x=r.createBuffer(),y=v.__size,M=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,y,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],x=v.uniforms,y=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let M=0,T=x.length;M<T;M++){const R=Array.isArray(x[M])?x[M]:[x[M]];for(let w=0,S=R.length;w<S;w++){const P=R[w];if(f(P,M,w,y)===!0){const I=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let G=0;G<z.length;G++){const X=z[G],tt=b(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,I+H,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,_,x,y){const M=v.value,T=_+"_"+x;if(y[T]===void 0)return typeof M=="number"||typeof M=="boolean"?y[T]=M:y[T]=M.clone(),!0;{const R=y[T];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return y[T]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function m(v){const _=v.uniforms;let x=0;const y=16;for(let T=0,R=_.length;T<R;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,P=w.length;S<P;S++){const I=w[S],z=Array.isArray(I.value)?I.value:[I.value];for(let H=0,G=z.length;H<G;H++){const X=z[H],tt=b(X),N=x%y,W=N%tt.boundary,Q=N+W;x+=W,Q!==0&&y-Q<tt.storage&&(x+=y-Q),I.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=tt.storage}}}const M=x%y;return M>0&&(x+=y-M),v.__size=x,v.__cache={},this}function b(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class f_{constructor(t={}){const{canvas:e=Hp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),b=new Int32Array(4);let g=null,p=null;const v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=Ne;let M=0,T=0,R=null,w=-1,S=null;const P=new ue,I=new ue;let z=null;const H=new $(0);let G=0,X=e.width,tt=e.height,N=1,W=null,Q=null;const ot=new ue(0,0,X,tt),St=new ue(0,0,X,tt);let Ut=!1;const Ft=new Qc;let Nt=!1,K=!1;const J=new At,gt=new E,Ht=new ue,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Rt(){return R===null?N:1}let L=n;function yt(C,k){return e.getContext(C,k)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",ct,!1),L===null){const k="webgl2";if(L=yt(k,C),L===null)throw yt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let dt,lt,st,Wt,bt,Gt,Me,le,D,A,B,U,j,V,Mt,at,wt,et,Z,nt,ft,xt,pt,Yt;function F(){dt=new wx(L),dt.init(),xt=new r_(L,dt),lt=new gx(L,dt,t,xt),st=new i_(L,dt),lt.reversedDepthBuffer&&d&&st.buffers.depth.setReversed(!0),Wt=new Ax(L),bt=new Wb,Gt=new s_(L,dt,st,bt,lt,xt,Wt),Me=new xx(x),le=new Mx(x),D=new D0(L),pt=new px(L,D),A=new Sx(L,D,Wt,pt),B=new Cx(L,A,D,Wt),Z=new Ex(L,lt,Gt),at=new vx(bt),U=new Vb(x,Me,le,dt,lt,pt,at),j=new u_(x,bt),V=new Xb,Mt=new Zb(dt),et=new fx(x,Me,le,st,B,f,l),wt=new e_(x,B,lt),Yt=new d_(L,Wt,lt,st),nt=new mx(L,dt,Wt),ft=new Tx(L,dt,Wt),Wt.programs=U.programs,x.capabilities=lt,x.extensions=dt,x.properties=bt,x.renderLists=V,x.shadowMap=wt,x.state=st,x.info=Wt}F();const ht=new c_(x,L);this.xr=ht,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(X,tt,!1))},this.getSize=function(C){return C.set(X,tt)},this.setSize=function(C,k,q=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,tt=k,e.width=Math.floor(C*N),e.height=Math.floor(k*N),q===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(X*N,tt*N).floor()},this.setDrawingBufferSize=function(C,k,q){X=C,tt=k,N=q,e.width=Math.floor(C*q),e.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ot)},this.setViewport=function(C,k,q,Y){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,k,q,Y),st.viewport(P.copy(ot).multiplyScalar(N).round())},this.getScissor=function(C){return C.copy(St)},this.setScissor=function(C,k,q,Y){C.isVector4?St.set(C.x,C.y,C.z,C.w):St.set(C,k,q,Y),st.scissor(I.copy(St).multiplyScalar(N).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(C){st.setScissorTest(Ut=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,q=!0){let Y=0;if(C){let O=!1;if(R!==null){const ut=R.texture.format;O=ut===Wc||ut===Vc||ut===Gc}if(O){const ut=R.texture.type,_t=ut===Cn||ut===$i||ut===Ur||ut===zr||ut===Bc||ut===Hc,Lt=et.getClearColor(),Tt=et.getClearAlpha(),jt=Lt.r,Xt=Lt.g,kt=Lt.b;_t?(m[0]=jt,m[1]=Xt,m[2]=kt,m[3]=Tt,L.clearBufferuiv(L.COLOR,0,m)):(b[0]=jt,b[1]=Xt,b[2]=kt,b[3]=Tt,L.clearBufferiv(L.COLOR,0,b))}else Y|=L.COLOR_BUFFER_BIT}k&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),et.dispose(),V.dispose(),Mt.dispose(),bt.dispose(),Me.dispose(),le.dispose(),B.dispose(),pt.dispose(),Yt.dispose(),U.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",jn),ht.removeEventListener("sessionend",dh),Ni.stop()};function mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Wt.autoReset,k=wt.enabled,q=wt.autoUpdate,Y=wt.needsUpdate,O=wt.type;F(),Wt.autoReset=C,wt.enabled=k,wt.autoUpdate=q,wt.needsUpdate=Y,wt.type=O}function ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function it(C){const k=C.target;k.removeEventListener("dispose",it),Dt(k)}function Dt(C){Kt(C),bt.remove(C)}function Kt(C){const k=bt.get(C).programs;k!==void 0&&(k.forEach(function(q){U.releaseProgram(q)}),C.isShaderMaterial&&U.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,Y,O,ut){k===null&&(k=Ct);const _t=O.isMesh&&O.matrixWorld.determinant()<0,Lt=Ff(C,k,q,Y,O);st.setMaterial(Y,_t);let Tt=q.index,jt=1;if(Y.wireframe===!0){if(Tt=A.getWireframeAttribute(q),Tt===void 0)return;jt=2}const Xt=q.drawRange,kt=q.attributes.position;let se=Xt.start*jt,be=(Xt.start+Xt.count)*jt;ut!==null&&(se=Math.max(se,ut.start*jt),be=Math.min(be,(ut.start+ut.count)*jt)),Tt!==null?(se=Math.max(se,0),be=Math.min(be,Tt.count)):kt!=null&&(se=Math.max(se,0),be=Math.min(be,kt.count));const Le=be-se;if(Le<0||Le===1/0)return;pt.setup(O,Y,Lt,q,Tt);let Te,_e=nt;if(Tt!==null&&(Te=D.get(Tt),_e=ft,_e.setIndex(Te)),O.isMesh)Y.wireframe===!0?(st.setLineWidth(Y.wireframeLinewidth*Rt()),_e.setMode(L.LINES)):_e.setMode(L.TRIANGLES);else if(O.isLine){let Vt=Y.linewidth;Vt===void 0&&(Vt=1),st.setLineWidth(Vt*Rt()),O.isLineSegments?_e.setMode(L.LINES):O.isLineLoop?_e.setMode(L.LINE_LOOP):_e.setMode(L.LINE_STRIP)}else O.isPoints?_e.setMode(L.POINTS):O.isSprite&&_e.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))_e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Vt=O._multiDrawStarts,Ee=O._multiDrawCounts,he=O._multiDrawCount,xn=Tt?D.get(Tt).bytesPerElement:1,rs=bt.get(Y).currentProgram.getUniforms();for(let bn=0;bn<he;bn++)rs.setValue(L,"_gl_DrawID",bn),_e.render(Vt[bn]/xn,Ee[bn])}else if(O.isInstancedMesh)_e.renderInstances(se,Le,O.count);else if(q.isInstancedBufferGeometry){const Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,Vt);_e.renderInstances(se,Le,Ee)}else _e.render(se,Le)};function we(C,k,q){C.transparent===!0&&C.side===xe&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,no(C,k,q),C.side=pi,C.needsUpdate=!0,no(C,k,q),C.side=xe):no(C,k,q)}this.compile=function(C,k,q=null){q===null&&(q=C),p=Mt.get(q),p.init(k),_.push(p),q.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),C!==q&&C.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const Y=new Set;return C.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ut=O.material;if(ut)if(Array.isArray(ut))for(let _t=0;_t<ut.length;_t++){const Lt=ut[_t];we(Lt,q,O),Y.add(Lt)}else we(ut,q,O),Y.add(ut)}),p=_.pop(),Y},this.compileAsync=function(C,k,q=null){const Y=this.compile(C,k,q);return new Promise(O=>{function ut(){if(Y.forEach(function(_t){bt.get(_t).currentProgram.isReady()&&Y.delete(_t)}),Y.size===0){O(C);return}setTimeout(ut,10)}dt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let de=null;function ei(C){de&&de(C)}function jn(){Ni.stop()}function dh(){Ni.start()}const Ni=new Mf;Ni.setAnimationLoop(ei),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){de=C,ht.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},ht.addEventListener("sessionstart",jn),ht.addEventListener("sessionend",dh),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(k),k=ht.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,R),p=Mt.get(C,_.length),p.init(k),_.push(p),J.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ft.setFromProjectionMatrix(J,Qn,k.reversedDepth),K=this.localClippingEnabled,Nt=at.init(this.clippingPlanes,K),g=V.get(C,v.length),g.init(),v.push(g),ht.enabled===!0&&ht.isPresenting===!0){const ut=x.xr.getDepthSensingMesh();ut!==null&&Ra(ut,k,-1/0,x.sortObjects)}Ra(C,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,Q),qt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,qt&&et.addToRenderList(g,C),this.info.render.frame++,Nt===!0&&at.beginShadows();const q=p.state.shadowsArray;wt.render(q,C,k),Nt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,O=g.transmissive;if(p.setupLights(),k.isArrayCamera){const ut=k.cameras;if(O.length>0)for(let _t=0,Lt=ut.length;_t<Lt;_t++){const Tt=ut[_t];ph(Y,O,C,Tt)}qt&&et.render(C);for(let _t=0,Lt=ut.length;_t<Lt;_t++){const Tt=ut[_t];fh(g,C,Tt,Tt.viewport)}}else O.length>0&&ph(Y,O,C,k),qt&&et.render(C),fh(g,C,k);R!==null&&T===0&&(Gt.updateMultisampleRenderTarget(R),Gt.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(x,C,k),pt.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],Nt===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ra(C,k,q,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ft.intersectsSprite(C)){Y&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);const _t=B.update(C),Lt=C.material;Lt.visible&&g.push(C,_t,Lt,q,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ft.intersectsObject(C))){const _t=B.update(C),Lt=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ht.copy(_t.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(Lt)){const Tt=_t.groups;for(let jt=0,Xt=Tt.length;jt<Xt;jt++){const kt=Tt[jt],se=Lt[kt.materialIndex];se&&se.visible&&g.push(C,_t,se,q,Ht.z,kt)}}else Lt.visible&&g.push(C,_t,Lt,q,Ht.z,null)}}const ut=C.children;for(let _t=0,Lt=ut.length;_t<Lt;_t++)Ra(ut[_t],k,q,Y)}function fh(C,k,q,Y){const O=C.opaque,ut=C.transmissive,_t=C.transparent;p.setupLightsView(q),Nt===!0&&at.setGlobalState(x.clippingPlanes,q),Y&&st.viewport(P.copy(Y)),O.length>0&&eo(O,k,q),ut.length>0&&eo(ut,k,q),_t.length>0&&eo(_t,k,q),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function ph(C,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Xe(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?an:Cn,minFilter:Jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ut=p.state.transmissionRenderTarget[Y.id],_t=Y.viewport||P;ut.setSize(_t.z*x.transmissionResolutionScale,_t.w*x.transmissionResolutionScale);const Lt=x.getRenderTarget(),Tt=x.getActiveCubeFace(),jt=x.getActiveMipmapLevel();x.setRenderTarget(ut),x.getClearColor(H),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),qt&&et.render(q);const Xt=x.toneMapping;x.toneMapping=Li;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Nt===!0&&at.setGlobalState(x.clippingPlanes,Y),eo(C,q,Y),Gt.updateMultisampleRenderTarget(ut),Gt.updateRenderTargetMipmap(ut),dt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let be=0,Le=k.length;be<Le;be++){const Te=k[be],_e=Te.object,Vt=Te.geometry,Ee=Te.material,he=Te.group;if(Ee.side===xe&&_e.layers.test(Y.layers)){const xn=Ee.side;Ee.side=on,Ee.needsUpdate=!0,mh(_e,q,Y,Vt,Ee,he),Ee.side=xn,Ee.needsUpdate=!0,se=!0}}se===!0&&(Gt.updateMultisampleRenderTarget(ut),Gt.updateRenderTargetMipmap(ut))}x.setRenderTarget(Lt,Tt,jt),x.setClearColor(H,G),kt!==void 0&&(Y.viewport=kt),x.toneMapping=Xt}function eo(C,k,q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ut=C.length;O<ut;O++){const _t=C[O],Lt=_t.object,Tt=_t.geometry,jt=_t.group;let Xt=_t.material;Xt.allowOverride===!0&&Y!==null&&(Xt=Y),Lt.layers.test(q.layers)&&mh(Lt,k,q,Tt,Xt,jt)}}function mh(C,k,q,Y,O,ut){C.onBeforeRender(x,k,q,Y,O,ut),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),O.onBeforeRender(x,k,q,Y,C,ut),O.transparent===!0&&O.side===xe&&O.forceSinglePass===!1?(O.side=on,O.needsUpdate=!0,x.renderBufferDirect(q,k,Y,O,C,ut),O.side=pi,O.needsUpdate=!0,x.renderBufferDirect(q,k,Y,O,C,ut),O.side=xe):x.renderBufferDirect(q,k,Y,O,C,ut),C.onAfterRender(x,k,q,Y,O,ut)}function no(C,k,q){k.isScene!==!0&&(k=Ct);const Y=bt.get(C),O=p.state.lights,ut=p.state.shadowsArray,_t=O.state.version,Lt=U.getParameters(C,O.state,ut,k,q),Tt=U.getProgramCacheKey(Lt);let jt=Y.programs;Y.environment=C.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(C.isMeshStandardMaterial?le:Me).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",it),jt=new Map,Y.programs=jt);let Xt=jt.get(Tt);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===_t)return vh(C,Lt),Xt}else Lt.uniforms=U.getUniforms(C),C.onBeforeCompile(Lt,x),Xt=U.acquireProgram(Lt,Tt),jt.set(Tt,Xt),Y.uniforms=Lt.uniforms;const kt=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=at.uniform),vh(C,Lt),Y.needsLights=zf(C),Y.lightsStateVersion=_t,Y.needsLights&&(kt.ambientLightColor.value=O.state.ambient,kt.lightProbe.value=O.state.probe,kt.directionalLights.value=O.state.directional,kt.directionalLightShadows.value=O.state.directionalShadow,kt.spotLights.value=O.state.spot,kt.spotLightShadows.value=O.state.spotShadow,kt.rectAreaLights.value=O.state.rectArea,kt.ltc_1.value=O.state.rectAreaLTC1,kt.ltc_2.value=O.state.rectAreaLTC2,kt.pointLights.value=O.state.point,kt.pointLightShadows.value=O.state.pointShadow,kt.hemisphereLights.value=O.state.hemi,kt.directionalShadowMap.value=O.state.directionalShadowMap,kt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,kt.spotShadowMap.value=O.state.spotShadowMap,kt.spotLightMatrix.value=O.state.spotLightMatrix,kt.spotLightMap.value=O.state.spotLightMap,kt.pointShadowMap.value=O.state.pointShadowMap,kt.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function gh(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=ia.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function vh(C,k){const q=bt.get(C);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Ff(C,k,q,Y,O){k.isScene!==!0&&(k=Ct),Gt.resetTextureUnits();const ut=k.fog,_t=Y.isMeshStandardMaterial?k.environment:null,Lt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:un,Tt=(Y.isMeshStandardMaterial?le:Me).get(Y.envMap||_t),jt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,be=!!q.morphAttributes.color;let Le=Li;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Le=x.toneMapping);const Te=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_e=Te!==void 0?Te.length:0,Vt=bt.get(Y),Ee=p.state.lights;if(Nt===!0&&(K===!0||C!==S)){const ln=C===S&&Y.id===w;at.setState(Y,C,ln)}let he=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ee.state.version||Vt.outputColorSpace!==Lt||O.isBatchedMesh&&Vt.batching===!1||!O.isBatchedMesh&&Vt.batching===!0||O.isBatchedMesh&&Vt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Vt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Vt.instancing===!1||!O.isInstancedMesh&&Vt.instancing===!0||O.isSkinnedMesh&&Vt.skinning===!1||!O.isSkinnedMesh&&Vt.skinning===!0||O.isInstancedMesh&&Vt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Vt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Vt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Vt.instancingMorph===!1&&O.morphTexture!==null||Vt.envMap!==Tt||Y.fog===!0&&Vt.fog!==ut||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==at.numPlanes||Vt.numIntersection!==at.numIntersection)||Vt.vertexAlphas!==jt||Vt.vertexTangents!==Xt||Vt.morphTargets!==kt||Vt.morphNormals!==se||Vt.morphColors!==be||Vt.toneMapping!==Le||Vt.morphTargetsCount!==_e)&&(he=!0):(he=!0,Vt.__version=Y.version);let xn=Vt.currentProgram;he===!0&&(xn=no(Y,k,O));let rs=!1,bn=!1,sr=!1;const Ce=xn.getUniforms(),Rn=Vt.uniforms;if(st.useProgram(xn.program)&&(rs=!0,bn=!0,sr=!0),Y.id!==w&&(w=Y.id,bn=!0),rs||S!==C){st.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ce.setValue(L,"projectionMatrix",C.projectionMatrix),Ce.setValue(L,"viewMatrix",C.matrixWorldInverse);const dn=Ce.map.cameraPosition;dn!==void 0&&dn.setValue(L,gt.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,bn=!0,sr=!0)}if(O.isSkinnedMesh){Ce.setOptional(L,O,"bindMatrix"),Ce.setOptional(L,O,"bindMatrixInverse");const ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ce.setValue(L,"boneTexture",ln.boneTexture,Gt))}O.isBatchedMesh&&(Ce.setOptional(L,O,"batchingTexture"),Ce.setValue(L,"batchingTexture",O._matricesTexture,Gt),Ce.setOptional(L,O,"batchingIdTexture"),Ce.setValue(L,"batchingIdTexture",O._indirectTexture,Gt),Ce.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Ce.setValue(L,"batchingColorTexture",O._colorsTexture,Gt));const Pn=q.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Z.update(O,q,xn),(bn||Vt.receiveShadow!==O.receiveShadow)&&(Vt.receiveShadow=O.receiveShadow,Ce.setValue(L,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Rn.envMap.value=Tt,Rn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Rn.envMapIntensity.value=k.environmentIntensity),bn&&(Ce.setValue(L,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Uf(Rn,sr),ut&&Y.fog===!0&&j.refreshFogUniforms(Rn,ut),j.refreshMaterialUniforms(Rn,Y,N,tt,p.state.transmissionRenderTarget[C.id]),ia.upload(L,gh(Vt),Rn,Gt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ia.upload(L,gh(Vt),Rn,Gt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ce.setValue(L,"center",O.center),Ce.setValue(L,"modelViewMatrix",O.modelViewMatrix),Ce.setValue(L,"normalMatrix",O.normalMatrix),Ce.setValue(L,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ln=Y.uniformsGroups;for(let dn=0,Pa=ln.length;dn<Pa;dn++){const Fi=ln[dn];Yt.update(Fi,xn),Yt.bind(Fi,xn)}}return xn}function Uf(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function zf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,k,q){const Y=bt.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),bt.get(C.texture).__webglTexture=k,bt.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const q=bt.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const kf=L.createFramebuffer();this.setRenderTarget=function(C,k=0,q=0){R=C,M=k,T=q;let Y=!0,O=null,ut=!1,_t=!1;if(C){const Tt=bt.get(C);if(Tt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Tt.__webglFramebuffer===void 0)Gt.setupRenderTarget(C);else if(Tt.__hasExternalTextures)Gt.rebindTextures(C,bt.get(C.texture).__webglTexture,bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const kt=C.depthTexture;if(Tt.__boundDepthTexture!==kt){if(kt!==null&&bt.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(C)}}const jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(_t=!0);const Xt=bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?O=Xt[k][q]:O=Xt[k],ut=!0):C.samples>0&&Gt.useMultisampledRTT(C)===!1?O=bt.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?O=Xt[q]:O=Xt,P.copy(C.viewport),I.copy(C.scissor),z=C.scissorTest}else P.copy(ot).multiplyScalar(N).floor(),I.copy(St).multiplyScalar(N).floor(),z=Ut;if(q!==0&&(O=kf),st.bindFramebuffer(L.FRAMEBUFFER,O)&&Y&&st.drawBuffers(C,O),st.viewport(P),st.scissor(I),st.setScissorTest(z),ut){const Tt=bt.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,q)}else if(_t){const Tt=k;for(let jt=0;jt<C.textures.length;jt++){const Xt=bt.get(C.textures[jt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+jt,Xt.__webglTexture,q,Tt)}}else if(C!==null&&q!==0){const Tt=bt.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,q)}w=-1},this.readRenderTargetPixels=function(C,k,q,Y,O,ut,_t,Lt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){st.bindFramebuffer(L.FRAMEBUFFER,Tt);try{const jt=C.textures[Lt],Xt=jt.format,kt=jt.type;if(!lt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&q>=0&&q<=C.height-O&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Lt),L.readPixels(k,q,Y,O,xt.convert(Xt),xt.convert(kt),ut))}finally{const jt=R!==null?bt.get(R).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,k,q,Y,O,ut,_t,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt)if(k>=0&&k<=C.width-Y&&q>=0&&q<=C.height-O){st.bindFramebuffer(L.FRAMEBUFFER,Tt);const jt=C.textures[Lt],Xt=jt.format,kt=jt.type;if(!lt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Lt),L.readPixels(k,q,Y,O,xt.convert(Xt),xt.convert(kt),0);const be=R!==null?bt.get(R).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,be);const Le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gp(L,Le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(se),L.deleteSync(Le),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,q=0){const Y=Math.pow(2,-q),O=Math.floor(C.image.width*Y),ut=Math.floor(C.image.height*Y),_t=k!==null?k.x:0,Lt=k!==null?k.y:0;Gt.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,_t,Lt,O,ut),st.unbindTexture()};const Of=L.createFramebuffer(),Bf=L.createFramebuffer();this.copyTextureToTexture=function(C,k,q=null,Y=null,O=0,ut=null){ut===null&&(O!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=O,O=0):ut=0);let _t,Lt,Tt,jt,Xt,kt,se,be,Le;const Te=C.isCompressedTexture?C.mipmaps[ut]:C.image;if(q!==null)_t=q.max.x-q.min.x,Lt=q.max.y-q.min.y,Tt=q.isBox3?q.max.z-q.min.z:1,jt=q.min.x,Xt=q.min.y,kt=q.isBox3?q.min.z:0;else{const Pn=Math.pow(2,-O);_t=Math.floor(Te.width*Pn),Lt=Math.floor(Te.height*Pn),C.isDataArrayTexture?Tt=Te.depth:C.isData3DTexture?Tt=Math.floor(Te.depth*Pn):Tt=1,jt=0,Xt=0,kt=0}Y!==null?(se=Y.x,be=Y.y,Le=Y.z):(se=0,be=0,Le=0);const _e=xt.convert(k.format),Vt=xt.convert(k.type);let Ee;k.isData3DTexture?(Gt.setTexture3D(k,0),Ee=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Gt.setTexture2DArray(k,0),Ee=L.TEXTURE_2D_ARRAY):(Gt.setTexture2D(k,0),Ee=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const he=L.getParameter(L.UNPACK_ROW_LENGTH),xn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rs=L.getParameter(L.UNPACK_SKIP_PIXELS),bn=L.getParameter(L.UNPACK_SKIP_ROWS),sr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Te.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,kt);const Ce=C.isDataArrayTexture||C.isData3DTexture,Rn=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const Pn=bt.get(C),ln=bt.get(k),dn=bt.get(Pn.__renderTarget),Pa=bt.get(ln.__renderTarget);st.bindFramebuffer(L.READ_FRAMEBUFFER,dn.__webglFramebuffer),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let Fi=0;Fi<Tt;Fi++)Ce&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(C).__webglTexture,O,kt+Fi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(k).__webglTexture,ut,Le+Fi)),L.blitFramebuffer(jt,Xt,_t,Lt,se,be,_t,Lt,L.DEPTH_BUFFER_BIT,L.NEAREST);st.bindFramebuffer(L.READ_FRAMEBUFFER,null),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||C.isRenderTargetTexture||bt.has(C)){const Pn=bt.get(C),ln=bt.get(k);st.bindFramebuffer(L.READ_FRAMEBUFFER,Of),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bf);for(let dn=0;dn<Tt;dn++)Ce?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pn.__webglTexture,O,kt+dn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pn.__webglTexture,O),Rn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,ut,Le+dn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,ut),O!==0?L.blitFramebuffer(jt,Xt,_t,Lt,se,be,_t,Lt,L.COLOR_BUFFER_BIT,L.NEAREST):Rn?L.copyTexSubImage3D(Ee,ut,se,be,Le+dn,jt,Xt,_t,Lt):L.copyTexSubImage2D(Ee,ut,se,be,jt,Xt,_t,Lt);st.bindFramebuffer(L.READ_FRAMEBUFFER,null),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Rn?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ee,ut,se,be,Le,_t,Lt,Tt,_e,Vt,Te.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,ut,se,be,Le,_t,Lt,Tt,_e,Te.data):L.texSubImage3D(Ee,ut,se,be,Le,_t,Lt,Tt,_e,Vt,Te):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,se,be,_t,Lt,_e,Vt,Te.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,se,be,Te.width,Te.height,_e,Te.data):L.texSubImage2D(L.TEXTURE_2D,ut,se,be,_t,Lt,_e,Vt,Te);L.pixelStorei(L.UNPACK_ROW_LENGTH,he),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rs),L.pixelStorei(L.UNPACK_SKIP_ROWS,bn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sr),ut===0&&k.generateMipmaps&&L.generateMipmap(Ee),st.unbindTexture()},this.initRenderTarget=function(C){bt.get(C).__webglFramebuffer===void 0&&Gt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Gt.setTextureCube(C,0):C.isData3DTexture?Gt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Gt.setTexture2DArray(C,0):Gt.setTexture2D(C,0),st.unbindTexture()},this.resetState=function(){M=0,T=0,R=null,st.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}function ss(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const gl=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],p_=.5*(Math.sqrt(3)-1),gr=(3-Math.sqrt(3))/6;class ku{constructor(t=0){const e=ss(t),n=new Uint8Array(256);for(let i=0;i<256;i++)n[i]=i;for(let i=255;i>0;i--){const s=Math.floor(e()*(i+1)),o=n[i];n[i]=n[s],n[s]=o}this.perm=new Uint8Array(512),this.permMod8=new Uint8Array(512);for(let i=0;i<512;i++)this.perm[i]=n[i&255],this.permMod8[i]=this.perm[i]%8}noise2D(t,e){const n=this.perm,i=this.permMod8;let s=0,o=0,a=0;const l=(t+e)*p_,c=Math.floor(t+l),h=Math.floor(e+l),u=(c+h)*gr,d=t-(c-u),f=e-(h-u),m=d>f?1:0,b=d>f?0:1,g=d-m+gr,p=f-b+gr,v=d-1+2*gr,_=f-1+2*gr,x=c&255,y=h&255;let M=.5-d*d-f*f;if(M>=0){const w=gl[i[x+n[y]]];M*=M,s=M*M*(w[0]*d+w[1]*f)}let T=.5-g*g-p*p;if(T>=0){const w=gl[i[x+m+n[y+b]]];T*=T,o=T*T*(w[0]*g+w[1]*p)}let R=.5-v*v-_*_;if(R>=0){const w=gl[i[x+1+n[y+1]]];R*=R,a=R*R*(w[0]*v+w[1]*_)}return 70*(s+o+a)}fbm(t,e,n=4,i=2,s=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*this.noise2D(t*a,e*a),c+=o,o*=s,a*=i;return l/c}ridged(t,e,n=4,i=2,s=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*(1-Math.abs(this.noise2D(t*a,e*a))),c+=o,o*=s,a*=i;return l/c}}const ns=4e3,ne=ns/2,m_=384,te=0,Oe={x:0,z:-ne*.9};function fn(r,t,e){const n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)}const Si={deepSand:9404246,sand:14206089,grassA:6262852,grassB:8038485,forest:4812847,rock:9143160,rockDark:7235420,snow:15593972};class g_{constructor(t){this.seed=t,this.noise=new ku(t),this.noiseB=new ku(t+101^1597463007),this.N=m_,this.gridN=this.N+1,this.cell=ns/this.N,this.grid=new Float32Array(this.gridN*this.gridN),this._buildGrid(),this.mesh=this._buildMesh()}baseHeight(t,e){const n=this.noise,i=n.fbm(t*42e-5,e*42e-5,4),s=n.fbm(t*.0038+91.7,e*.0038-40.2,4),o=fn(.08,.55,this.noiseB.fbm(t*9e-4+300,e*9e-4-210,3)),a=n.ridged(t*.0016-50.3,e*.0016+80.7,4),l=n.fbm(t*.02,e*.02,2);let c=7+i*30;c+=s*11*(.35+.65*fn(-.35,.4,i)),c+=o*a*a*160,c+=l*2.2;const h=Math.max(Math.abs(t),Math.abs(e))/ne;c+=Math.pow(fn(.86,1.01,h),1.3)*420;const u=Math.hypot(t-Oe.x,e-Oe.z),d=1-fn(38,78,u);return d>0&&(c=c*(1-d)+98*d),c}forestMask(t,e){return this.noiseB.fbm(t*.0026+777,e*.0026-333,3)}_buildGrid(){for(let t=0;t<this.gridN;t++)for(let e=0;e<this.gridN;e++){const n=-ne+e*this.cell,i=-ne+t*this.cell;this.grid[t*this.gridN+e]=this.baseHeight(n,i)}}heightAt(t,e){const n=this.grid,i=this.gridN,s=Math.min(Math.max((t+ne)/this.cell,0),this.N-1e-4),o=Math.min(Math.max((e+ne)/this.cell,0),this.N-1e-4),a=Math.floor(s),l=Math.floor(o),c=s-a,h=o-l,u=n[l*i+a],d=n[(l+1)*i+a],f=n[(l+1)*i+a+1],m=n[l*i+a+1];return c+h<=1?u+(m-u)*c+(d-u)*h:f+(d-f)*(1-c)+(m-f)*(1-h)}slopeAt(t,e,n=3){const i=this.heightAt(t+n,e)-this.heightAt(t-n,e),s=this.heightAt(t,e+n)-this.heightAt(t,e-n);return Math.hypot(i,s)/(2*n)}findSpawn(){for(let t=0;t<=ne*.8;t+=60){const e=Math.max(1,Math.floor(2*Math.PI*t/60));for(let n=0;n<e;n++){const i=n/e*Math.PI*2,s=Math.cos(i)*t,o=Math.sin(i)*t,a=this.heightAt(s,o);if(a>4&&a<26&&this.slopeAt(s,o)<.25)return{x:s,z:o}}}return{x:0,z:0}}_bakeTextures(t,e){const n=this.gridN,i=new Float32Array(n*n),s=new Uint8Array(n*n*4),o=new Uint8Array(n*n),a=new $;for(let l=0;l<n*n;l++){const c=this.grid[l];i[l]=c,a.setRGB(t[l*3],t[l*3+1],t[l*3+2]),a.convertLinearToSRGB(),s[l*4]=Math.round(a.r*255),s[l*4+1]=Math.round(a.g*255),s[l*4+2]=Math.round(a.b*255);const h=l%n,u=l/n|0,d=-ne+h*this.cell,f=-ne+u*this.cell,m=this.slopeAt(d,f,this.cell),b=e[l*4]*fn(.9,1.9,c)*(1-fn(.5,.8,m))*(1-fn(50,66,c));s[l*4+3]=Math.round(Math.min(1,b)*255),o[l]=Math.round(Math.min(1,Math.max(0,(this.forestMask(d,f)-.04)*2.2))*255)}this.forestTex=new Rr(o,n,n,Br,Cn),this.forestTex.minFilter=this.forestTex.magFilter=Be,this.forestTex.needsUpdate=!0,this.heightTex=new Rr(i,n,n,Br,Fn),this.heightTex.minFilter=this.heightTex.magFilter=He,this.heightTex.needsUpdate=!0,this.colorTex=new Rr(s,n,n,An,Cn),this.colorTex.colorSpace=Ne,this.colorTex.minFilter=this.colorTex.magFilter=Be,this.colorTex.needsUpdate=!0}_buildMesh(){const t=this.N,e=this.gridN,n=e*e,i=new Float32Array(n*3);for(let g=0;g<e;g++)for(let p=0;p<e;p++){const v=(g*e+p)*3;i[v]=-ne+p*this.cell,i[v+1]=this.grid[g*e+p],i[v+2]=-ne+g*this.cell}const s=new Uint32Array(t*t*6);let o=0;for(let g=0;g<t;g++)for(let p=0;p<t;p++){const v=g*e+p,_=(g+1)*e+p,x=(g+1)*e+p+1,y=g*e+p+1;s[o++]=v,s[o++]=_,s[o++]=y,s[o++]=_,s[o++]=x,s[o++]=y}const a=new ee;a.setAttribute("position",new Ot(i,3)),a.setIndex(new Ot(s,1)),a.computeVertexNormals();const l=new Float32Array(n*3),c=new Float32Array(n*4),h=a.attributes.position,u=a.attributes.normal,d=new $,f=new $;for(let g=0;g<n;g++){const p=h.getY(g),v=u.getY(g),_=h.getX(g),x=h.getZ(g),y=this.noiseB.fbm(_*.016+5.2,x*.016-9.7,2);if(p<te-6)d.setHex(Si.deepSand);else{d.setHex(Si.grassA).lerp(f.setHex(Si.grassB),(y+1)*.4);const X=this.forestMask(_,x);X>.08&&d.lerp(f.setHex(Si.forest),Math.min(.55,(X-.08)*1.1)),d.lerp(f.setHex(Si.sand),1-fn(1.2,3.4,p+y*1.4))}const M=1-fn(.6,.82,v);p>te-3&&d.lerp(f.setHex(Si.rockDark),M*.85),d.lerp(f.setHex(Si.rock),fn(52,78,p)*.9);const T=92+y*10,R=fn(T,T+16,p)*fn(.5,.72,v);d.lerp(f.setHex(Si.snow),R);const w=p<te-6?1:1-fn(1.2,3.4,p+y*1.4),S=Math.max(p>te-3?M*.85:0,fn(52,78,p)*.9),P=w*(1-S),I=R,z=S*(1-I),H=Math.max(0,1-P-z-I);c[g*4]=H,c[g*4+1]=P,c[g*4+2]=z,c[g*4+3]=I;const G=this.noise.fbm(_*.09+3.1,x*.09-7.7,2);d.offsetHSL(G*.012,G*.03,G*.05),l[g*3]=d.r,l[g*3+1]=d.g,l[g*3+2]=d.b}a.setAttribute("color",new Ot(l,3)),a.setAttribute("aMat",new Ot(c,4)),this._bakeTextures(l,c);const m=new oe({vertexColors:!0,roughness:1,metalness:0});v_(m,this);const b=new Pt(a,m);return b.receiveShadow=!0,b.castShadow=!1,b}}function v_(r,t){r.onBeforeCompile=e=>{e.uniforms.uTimeT={value:0},t.detailUniforms=e.uniforms,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aMat;
        varying vec4 vMat;
        varying vec3 vWPos;
        varying vec3 vWNor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vMat = aMat;
        vWPos = position;
        vWNor = normal;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
        }`)}}const Us={low:{name:"low",pixelRatio:1,msaa:0,smaa:!0,bloom:!0,bloomScale:.5,shafts:!1,mist:!1,envEvery:6,envSize:64,clouds:"simple",grass:.3,trees:.5,reflect:0,ao:0},medium:{name:"medium",pixelRatio:1.25,msaa:0,smaa:!0,bloom:!0,bloomScale:.5,shafts:!0,mist:!0,envEvery:3,envSize:128,clouds:"full",grass:.6,trees:.8,reflect:.35,ao:.6},high:{name:"high",pixelRatio:1.4,msaa:2,smaa:!1,bloom:!0,bloomScale:1,shafts:!0,mist:!0,envEvery:1.5,envSize:256,clouds:"full",grass:.85,trees:1,reflect:.5,ao:.9}},Ou="wander:quality";function x_(){const r=new URLSearchParams(location.search).get("q");if(r&&Us[r]){try{localStorage.setItem(Ou,r)}catch{}return Us[r]}let t=null;try{t=localStorage.getItem(Ou)}catch{}return Us[t]||Us.medium}const b_=300;function Dc(r,t,e){const n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)}const Se=r=>new $(r),zo=[{sy:-.36,zen:Se("#050a22"),mid:Se("#0f1a44"),hor:Se("#1c2f66")},{sy:-.14,zen:Se("#0b1342"),mid:Se("#2c2b78"),hor:Se("#5a448e")},{sy:-.03,zen:Se("#1c2a72"),mid:Se("#76519f"),hor:Se("#ff7d5e")},{sy:.07,zen:Se("#3668c8"),mid:Se("#93a9d9"),hor:Se("#ffbc90")},{sy:.25,zen:Se("#3d89e3"),mid:Se("#82b9ef"),hor:Se("#d0e8f8")},{sy:.62,zen:Se("#2a79de"),mid:Se("#71b4f1"),hor:Se("#c5e5fa")}],As={night:[Se("#46557f"),Se("#0a1028")],dusk:[Se("#ffa070"),Se("#5a4372")],day:[Se("#ffffff"),Se("#7d93bd")]},Bu={day:Se("#fff1dc"),dusk:Se("#ff9a55")},vr=new $;function __(r,t){let e=0;for(;e<zo.length-2&&r>zo[e+1].sy;)e++;const n=zo[e],i=zo[e+1],s=Dc(n.sy,i.sy,r);t.zen.copy(n.zen).lerp(i.zen,s),t.mid.copy(n.mid).lerp(i.mid,s),t.hor.copy(n.hor).lerp(i.hor,s)}const Hu=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Gu=`
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
`;function y_(){return{uTime:{value:0},uDay:{value:1},uNight:{value:0},uDusk:{value:0},uAurora:{value:0},uCloudCover:{value:.5},uEnv:{value:0},uCityGlow:{value:0},uZenith:{value:new $},uMid:{value:new $},uHorizon:{value:new $},uSunDir:{value:new E(0,1,0)},uMoonDir:{value:new E(0,-1,0)},uSunColor:{value:new $},uGlowColor:{value:new $(1,.45,.2)},uCloudLit:{value:new $},uCloudShade:{value:new $}}}const M_=`
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
`,w_=`
  uniform float uOpacity;
  varying vec3 vCol;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float r = length(c);
    float core = exp(-r * r * 5.0);
    gl_FragColor = vec4(vCol * core * uOpacity, 1.0);
  }
`;function S_(){const t=new Float32Array(9600),e=new Float32Array(3200),n=new Float32Array(3200),i=new Float32Array(3200*3),s=ss(424242),o=[[.72,.82,1],[.85,.9,1],[1,1,1],[1,.93,.78],[1,.78,.6],[.8,.7,1]];let a=0;for(;a<3200;){const u=s()*2-1;if(Math.abs(u)<.03)continue;const d=s()*Math.PI*2,f=Math.sqrt(1-u*u);t[a*3]=Math.cos(d)*f*3800,t[a*3+1]=Math.abs(u)*3800,t[a*3+2]=Math.sin(d)*f*3800;const m=s(),b=m>.985?2.6:m>.93?1.5:.55+s()*.45;e[a]=m>.985?7:m>.93?4.6:2.2+s()*1.4,n[a]=s();const g=o[Math.floor(s()*o.length)];i[a*3]=g[0]*b,i[a*3+1]=g[1]*b,i[a*3+2]=g[2]*b,a++}const l=new ee;l.setAttribute("position",new Ot(t,3)),l.setAttribute("aSize",new Ot(e,1)),l.setAttribute("aPhase",new Ot(n,1)),l.setAttribute("aColor",new Ot(i,3));const c=new Qt({uniforms:{uTime:{value:0},uPR:{value:1},uOpacity:{value:0}},vertexShader:M_,fragmentShader:w_,transparent:!0,blending:Fe,depthWrite:!1,fog:!1}),h=new mi(l,c);return h.frustumCulled=!1,h.renderOrder=1001,h}function T_(){const r=new vn(1,1),t=new Qt({uniforms:{uA:{value:0}},vertexShader:`
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
    `,transparent:!0,blending:Fe,depthWrite:!1,fog:!1,side:xe}),e=new Pt(r,t);return e.frustumCulled=!1,e.renderOrder=1002,e.visible=!1,e}class A_{constructor(t,e,n=Us.medium){this.scene=t,this.renderer=e,this.quality=n,this.time=.34,this.dayLength=b_,this.frozen=!1,this.daylight=1,this.dusk=0,this.world="nature",this.aurora=0,this.cityGlow=0,this.wetness=0,this.sunColor=new $,this.horizonColor=new $,this.zenithColor=new $,this.mistDensity=4e-4,this.shaftStrength=.4,this.scatterStrength=.5,this._pal={zen:new $,mid:new $,hor:new $},this.group=new ye,this.domeUniforms=y_();const i={CLOUD_OCT:n.clouds==="full"?5:3};this.domeMat=new Qt({uniforms:this.domeUniforms,vertexShader:Hu,fragmentShader:Gu,defines:i,side:on,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new Pt(new Di(4500,48,32),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=1e3,this.group.add(this.dome),this.stars=S_(),this.group.add(this.stars),this.shoot=T_(),this.group.add(this.shoot),this._shootT=8+Math.random()*10,this._shootAge=-1,t.add(this.group),this.sun=new ma(16777215,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const s=this.sun.shadow.camera;s.left=-280,s.right=280,s.top=280,s.bottom=-280,s.near=10,s.far=1200,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=2,t.add(this.sun),t.add(this.sun.target),this.moonLight=new ma(9676748,0),t.add(this.moonLight),t.add(this.moonLight.target),this.hemi=new _f(12572656,6056780,.6),t.add(this.hemi),this.sunDir=new E(0,1,0),this.moonDir=new E(0,-1,0),this._envScene=new Kc;const o={...this.domeUniforms,uEnv:{value:1}},a=new Qt({uniforms:o,vertexShader:Hu,fragmentShader:Gu,defines:{CLOUD_OCT:3},side:on,depthWrite:!1,fog:!1});this._envScene.add(new Pt(new Di(50,32,16),a)),this._pmrem=new Pc(e),this._envRT=null,this._envClock=99}_refreshEnv(t){if(this._envClock+=t,this._envClock<this.quality.envEvery)return;this._envClock=0;const e=this._pmrem.fromScene(this._envScene,0,.1,100,{size:this.quality.envSize});this.scene.environment=e.texture,this._envRT&&this._envRT.dispose(),this._envRT=e}update(t,e,n=0){let i=1;this.world==="city"&&(i=.42+1.1*Dc(-.08,.38,this.sunDir.y)),this.frozen||(this.time=(this.time+t*i/this.dayLength)%1);const s=(this.time-.25)*Math.PI*2,o=Math.sin(s);this.sunDir.set(Math.cos(s),o,.32).normalize(),this.moonDir.copy(this.sunDir).multiplyScalar(-1);const a=this.daylight=Dc(-.07,.16,o),l=this.dusk=Math.pow(Math.max(0,1-Math.abs(o)/.24),1.2),c=1-a,h=this.time<.5;__(this.sunDir.y,this._pal);const u=this._pal;this.horizonColor.copy(u.hor),this.zenithColor.copy(u.zen),this.sunColor.copy(Bu.day).lerp(Bu.dusk,Math.min(1,l*1.4));const d=this.world==="nature"?1:0;this.aurora+=(d-this.aurora)*Math.min(1,t*.6),this.cityGlow+=((this.world==="city"?1:0)-this.cityGlow)*Math.min(1,t*.8);const f=this.domeUniforms;f.uCityGlow.value=this.cityGlow,f.uTime.value=n,f.uDay.value=a,f.uNight.value=Math.pow(c,1.2),f.uDusk.value=l,f.uAurora.value=this.aurora*Math.pow(c,1.5),f.uCloudCover.value=.5+.1*Math.sin(n*.01)+.08*l,f.uZenith.value.copy(u.zen),f.uMid.value.copy(u.mid),f.uHorizon.value.copy(u.hor),f.uSunDir.value.copy(this.sunDir),f.uMoonDir.value.copy(this.moonDir),f.uSunColor.value.copy(this.sunColor),f.uGlowColor.value.copy(this.sunColor).lerp(vr.setRGB(1,.36,.3),.35),f.uCloudLit.value.copy(As.night[0]).lerp(As.day[0],a).lerp(As.dusk[0],Math.min(1,l*1.15)),f.uCloudShade.value.copy(As.night[1]).lerp(As.day[1],a).lerp(As.dusk[1],Math.min(1,l*1.15));const m=this.scene.fog;m.color.copy(u.hor),m.color.lerp(vr.setRGB(.3,.16,.36),this.cityGlow*c*.5),this.horizonColor.copy(m.color),m.far=1300+1500*a,m.near=60+60*a,this.hemi.color.copy(u.mid).lerp(vr.setRGB(.8,.9,1),.35),this.hemi.groundColor.setHex(3753050).lerp(vr.setHex(6056780),a).lerp(vr.copy(u.hor).multiplyScalar(.55),l*.6),this.hemi.intensity=.62+.42*c+.5*l,this.sun.color.copy(this.sunColor),this.sun.intensity=2.6*a,this.sun.visible=a>.02,this.sun.castShadow=a>.04,this.sun.visible&&this.sun.position.copy(e).addScaledVector(this.sunDir,500),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.moonLight.intensity=2.2*(1-a),this.moonLight.position.copy(e).addScaledVector(this.moonDir,500),this.moonLight.target.position.copy(e),this.moonLight.target.updateMatrixWorld();const b=this.world==="city"?1-.14*a:1;this.renderer.toneMappingExposure=(.78+.14*a+.1*l)*b,this.scene.environmentIntensity=.45+.45*a+.35*l,this.mistDensity=28e-5+l*(h?.0017:7e-4)+c*25e-5,this.shaftStrength=.26*Math.min(1,a*1.2+l*.6)*(.55+.7*l),this.scatterStrength=.18+.6*l,this.group.position.set(e.x,0,e.z);const g=this.stars.material.uniforms;g.uTime.value=n,g.uOpacity.value=Math.pow(c,1.1),this.stars.visible=c>.02,this.stars.rotation.y+=t*.004,this._updateShootingStar(t,c),this._refreshEnv(t)}_updateShootingStar(t,e){const n=this.shoot;if(e<.7){n.visible=!1,this._shootAge=-1;return}if(this._shootAge<0){if(this._shootT-=t,this._shootT<=0){const h=Math.random()*Math.PI*2,u=.35+Math.random()*.5,d=3400,f=Math.cos(h)*Math.cos(u)*d,m=Math.sin(u)*d,b=Math.sin(h)*Math.cos(u)*d;this._shootFrom=new E(f,m,b);const g=h+Math.PI/2+(Math.random()-.5)*.8;this._shootDir=new E(Math.cos(g),-.35-Math.random()*.25,Math.sin(g)).normalize(),this._shootAge=0,this._shootT=10+Math.random()*18,n.scale.set(420,7,1)}return}this._shootAge+=t;const i=.95;if(this._shootAge>i){n.visible=!1,this._shootAge=-1;return}const s=this._shootAge/i;n.visible=!0,n.position.copy(this._shootFrom).addScaledVector(this._shootDir,s*900);const o=new At,a=n.position.clone().normalize().negate(),l=this._shootDir.clone(),c=new E().crossVectors(a,l).normalize();l.crossVectors(c,a).normalize(),o.makeBasis(l,c,a),n.quaternion.setFromRotationMatrix(o),n.material.uniforms.uA.value=Math.sin(s*Math.PI)}setPixelRatio(t){this.stars.material.uniforms.uPR.value=t}}const E_=`
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
`,C_=`
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
`.replace(/WATER_LEVEL_C/g,te.toFixed(2));class R_{constructor(t,e){const n=new vn(ns*1.6,ns*1.6,160,160);n.rotateX(-Math.PI/2),this.material=new Qt({uniforms:Zn.merge([vt.fog,{uTime:{value:0},uSunDir:{value:new E(0,1,0)},uSunColor:{value:new $(1,1,1)},uDaylight:{value:1},uNight:{value:0},uSkyHor:{value:new $},uSkyZen:{value:new $},uPlayer:{value:new E},uWorldHalf:{value:ne},uTCell:{value:e.cell},uTexN:{value:e.gridN},uHeightTex:{value:e.heightTex}}]),vertexShader:E_,fragmentShader:C_,transparent:!0,fog:!0,side:xe}),this.mesh=new Pt(n,this.material),this.mesh.position.y=te,t.add(this.mesh),this._c=new $}update(t,e,n){const i=this.material.uniforms;i.uTime.value=t;const s=e.daylight<.05;if(i.uSunDir.value.copy(s?e.moonDir:e.sunDir),i.uDaylight.value=s?0:e.daylight,i.uNight.value=1-e.daylight,i.uSunColor.value.setRGB(1,.95,.85).lerp(this._c.setRGB(.55,.65,.9),1-e.daylight),i.uSkyHor.value.copy(e.horizonColor),i.uSkyZen.value.copy(e.zenithColor),n){const o=Ie.clamp((te+.6-n.pos.y)*1.4+.3,0,1),a=n.pos.y<te+1?o:0;i.uPlayer.value.set(n.pos.x,n.pos.z,a)}}}function Ef(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ee;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Vu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let b=0;b<o[h].length;++b)f.push(o[h][b][d]);const m=Vu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Vu(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Ot(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const b=h.getComponent(d,m);a.setComponent(d+u,m,b)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Wu(r,t){if(t===pp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Sc||t===Gd){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===Sc)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class ir extends er{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new N_(e)}),this.register(function(e){return new F_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new j_(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new I_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new U_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new L_(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new Y_(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Nr.extractUrlBase(t);o=Nr.resolveURL(c,this.path)}else o=Nr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new bf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Cf){try{o[ie.KHR_BINARY_GLTF]=new K_(t)}catch(u){i&&i(u);return}s=JSON.parse(o[ie.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ly(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ie.KHR_MATERIALS_UNLIT:o[u]=new D_;break;case ie.KHR_DRACO_MESH_COMPRESSION:o[u]=new J_(s,this.dracoLoader);break;case ie.KHR_TEXTURE_TRANSFORM:o[u]=new Q_;break;case ie.KHR_MESH_QUANTIZATION:o[u]=new Z_;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function P_(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class L_{constructor(t){this.parser=t,this.name=ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new $(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],un);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ma(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new es(h),c.distance=u;break;case"spot":c=new f0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class D_{constructor(){this.name=ie.KHR_MATERIALS_UNLIT}getMaterialType(){return $e}extendParams(t,e,n){const i=[];t.color=new $(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],un),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Ne))}return Promise.all(i)}}class I_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class N_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new rt(a,a)}return Promise.all(s)}}class F_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class U_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class z_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new $(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],un)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ne)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class k_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class O_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new $().setRGB(a[0],a[1],a[2],un),Promise.all(s)}}class B_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class H_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new $().setRGB(a[0],a[1],a[2],un),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ne)),Promise.all(s)}}class G_{constructor(t){this.parser=t,this.name=ie.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class V_{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class W_{constructor(t){this.parser=t,this.name=ie.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class j_{constructor(t){this.parser=t,this.name=ie.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class X_{constructor(t){this.parser=t,this.name=ie.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class q_{constructor(t){this.name=ie.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Y_{constructor(t){this.name=ie.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const b=new At,g=new E,p=new ve,v=new E(1,1,1),_=new Pe(m.geometry,m.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,b.compose(g,p,v));for(const x in l)if(x==="_COLOR_0"){const y=l[x];_.instanceColor=new Xr(y.array,y.itemSize,y.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);Ae.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Cf="glTF",xr=12,ju={JSON:1313821514,BIN:5130562};class K_{constructor(t){this.name=ie.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Cf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xr,s=new DataView(t,xr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===ju.JSON){const c=new Uint8Array(t,xr+o,a);this.content=n.decode(c)}else if(l===ju.BIN){const c=xr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class J_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ie.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Ic[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Ic[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Os[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const b=f.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}u(f)},a,c,un,d)})})}}class Q_{constructor(){this.name=ie.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Z_{constructor(){this.name=ie.KHR_MESH_QUANTIZATION}}class Rf extends Zr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*c,b=m-c,g=-2*f+3*d,p=f-d,v=1-g,_=p-d+u;for(let x=0;x!==a;x++){const y=o[b+x+a],M=o[b+x+l]*h,T=o[m+x+a],R=o[m+x]*h;s[x]=v*y+_*M+g*T+p*R}return s}}const $_=new ve;class ty extends Rf{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return $_.fromArray(s).normalize().toArray(s),s}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xu={9728:He,9729:Be,9984:Nd,9985:Zo,9986:Sr,9987:Jn},qu={33071:Ri,33648:aa,10497:Zi},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ic={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ey={CUBICSPLINE:void 0,LINEAR:Gr,STEP:Hr},xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ny(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),r.DefaultMaterial}function Gi(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function qn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function iy(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function sy(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ry(r){let t;const e=r.extensions&&r.extensions[ie.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+bl(e.attributes):t=r.indices+":"+bl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+bl(r.targets[n]);return t}function bl(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Nc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ay=new At;class ly{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new P_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new u0(this.options.manager):this.textureLoader=new g0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Gi(s,a,i),qn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ie.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Nr.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=vl[i.type],a=Os[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ot(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=vl[i.type],c=Os[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let b,g;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=e.cache.get(v);_||(b=new c(a,p*f,i.count*f/h),_=new nf(b,f/h),e.cache.add(v,_)),g=new jr(_,l,d%f/h,m)}else a===null?b=new c(i.count*l):b=new c(a,d,i.count*l),g=new Ot(b,l,m);if(i.sparse!==void 0){const p=vl.SCALAR,v=Os[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,y=new v(o[1],_,i.sparse.count*p),M=new c(o[2],x,i.sparse.count*l);a!==null&&(g=new Ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,R=y.length;T<R;T++){const w=y[T];if(g.setX(w,M[T*l]),l>=2&&g.setY(w,M[T*l+1]),l>=3&&g.setZ(w,M[T*l+2]),l>=4&&g.setW(w,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Xu[d.magFilter]||Be,h.minFilter=Xu[d.minFilter]||Jn,h.wrapS=qu[d.wrapS]||Zi,h.wrapT=qu[d.wrapT]||Zi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==He&&h.minFilter!==Be,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(b){const g=new Ue(b);g.needsUpdate=!0,d(g)}),e.load(Nr.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),qn(u,o),u.userData.mimeType=o.mimeType||oy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ie.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ie.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ie.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Zc,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ba,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return oe}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[ie.KHR_MATERIALS_UNLIT]){const u=i[ie.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new $(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],un),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ne)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=xe);const h=s.alphaMode||xl.OPAQUE;if(h===xl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===xl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==$e&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new rt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==$e&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==$e){const u=s.emissiveFactor;a.emissive=new $().setRGB(u[0],u[1],u[2],un)}return s.emissiveTexture!==void 0&&o!==$e&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ne)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),qn(u,s),e.associations.set(u,{materials:t}),s.extensions&&Gi(i,u,s),u})}createUniqueName(t){const e=pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Yu(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=ry(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ie.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Yu(new ee,c,e),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?ny(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const b=h[f],g=o[f];let p;const v=c[f];if(g.mode===In.TRIANGLES||g.mode===In.TRIANGLE_STRIP||g.mode===In.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new dm(b,v):new Pt(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===In.TRIANGLE_STRIP?p.geometry=Wu(p.geometry,Gd):g.mode===In.TRIANGLE_FAN&&(p.geometry=Wu(p.geometry,Sc));else if(g.mode===In.LINES)p=new fa(b,v);else if(g.mode===In.LINE_STRIP)p=new _a(b,v);else if(g.mode===In.LINE_LOOP)p=new xm(b,v);else if(g.mode===In.POINTS)p=new mi(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&sy(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),qn(p,s),g.extensions&&Gi(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Gi(i,u[0],s),u[0];const d=new ye;s.extensions&&Gi(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new rn(Ie.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new $r(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),qn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new At;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Jc(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let _=0,x=d.length;_<x;_++){const y=d[_],M=f[_],T=m[_],R=b[_],w=g[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,M,T,R,w);if(S)for(let P=0;P<S.length;P++)p.push(S[P])}const v=new Rc(s,void 0,p);return qn(v,i),v})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ay)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new of:c.length>1?h=new ye:c.length===1?h=c[0]:h=new Ae,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),qn(h,s),s.extensions&&Gi(n,h,s),s.matrix!==void 0){const u=new At;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new ye;n.name&&(s.name=i.createUniqueName(n.name)),qn(s,n),n.extensions&&Gi(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Gn||d instanceof Ue)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];Ti[s.path]===Ti.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ti[s.path]){case Ti.weights:c=Ys;break;case Ti.rotation:c=Ks;break;case Ti.translation:case Ti.scale:c=Js;break;default:n.itemSize===1?c=Ys:c=Js;break}const h=i.interpolation!==void 0?ey[i.interpolation]:Gr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+Ti[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Nc(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ks?ty:Rf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cy(r,t,e){const n=t.attributes,i=new vi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){const h=Nc(Os[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new E,l=new E;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const b=Nc(Os[d.componentType]);l.multiplyScalar(b)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new $n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Yu(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Ic[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return ae.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ae.workingColorSpace}" not supported.`),qn(r,t),cy(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?iy(r,t.targets,e):r})}const ko=8,Ku=.02;class Qs{constructor(){this.grid=new Map,this.all=[],this._stamp=0}_cellsFor(t,e,n,i){const s=Math.floor((t-n)/ko),o=Math.floor((t+n)/ko),a=Math.floor((e-n)/ko),l=Math.floor((e+n)/ko);for(let c=s;c<=o;c++)for(let h=a;h<=l;h++){const u=(c+32768)*65536+(h+32768);i(u)}}_insert(t){this.all.push(t),this._cellsFor(t.x,t.z,t.ext,e=>{let n=this.grid.get(e);n||this.grid.set(e,n=[]),n.push(t)})}addCylinder(t,e,n,i,s){s<=i||this._insert({kind:0,x:t,z:e,r:n,y0:i,y1:s,ext:n})}addBox(t,e,n,i,s,o,a=0){o<=s||this._insert({kind:1,x:t,z:e,hw:n,hd:i,rotY:a,y0:s,y1:o,ext:Math.hypot(n,i)})}absorb(t){for(const e of t.all)e.kind===0?this.addCylinder(e.x,e.z,e.r,e.y0,e.y1):this.addBox(e.x,e.z,e.hw,e.hd,e.y0,e.y1,e.rotY)}_near(t,e,n,i){return i.length=0,this._stamp++,this._cellsFor(t,e,n,s=>{const o=this.grid.get(s);if(o)for(const a of o)a._mark!==this._stamp&&(a._mark=this._stamp,i.push(a))}),i}resolve(t,e,n,i,s,o){const a=this._near(t.x,t.z,n+1,this._scratch??=[]);let l=0;for(let c=0;c<2;c++){let h=!1;for(const u of a){if(s<=u.y0||i>=u.y1-o-Ku)continue;let d,f,m;if(u.kind===0){const b=t.x-u.x,g=t.z-u.z,p=u.r+n,v=b*b+g*g;if(v>=p*p)continue;const _=Math.sqrt(v);_>1e-6?(d=b/_,f=g/_,m=p-_):(d=1,f=0,m=p)}else{const b=Math.cos(u.rotY),g=Math.sin(u.rotY),p=t.x-u.x,v=t.z-u.z,_=b*p-g*v,x=g*p+b*v,y=Math.max(-u.hw,Math.min(u.hw,_)),M=Math.max(-u.hd,Math.min(u.hd,x));let T=_-y,R=x-M;const w=T*T+R*R;if(w>=n*n)continue;if(w>1e-9){const S=Math.sqrt(w);T/=S,R/=S,m=n-S}else{const S=u.hw-Math.abs(_),P=u.hd-Math.abs(x);S<P?(T=_>=0?1:-1,R=0,m=S+n):(T=0,R=x>=0?1:-1,m=P+n)}d=b*T+g*R,f=-g*T+b*R}if(t.x+=d*m,t.z+=f*m,e){const b=e.x*d+e.z*f;b<0&&(e.x-=b*d,e.z-=b*f)}h=!0,l++}if(!h)break}return l}supportAt(t,e,n,i,s,o=1){const a=this._near(t,e,i+1,this._scratch??=[]);let l=-1/0;for(const c of a)if(!(c.y1>n+s+Ku||c.y1<n-o)){if(c.kind===0){const h=t-c.x,u=e-c.z;if(h*h+u*u>(c.r+i)**2)continue}else{const h=Math.cos(c.rotY),u=Math.sin(c.rotY),d=t-c.x,f=e-c.z,m=h*d-u*f,b=u*d+h*f;if(Math.abs(m)>c.hw+i||Math.abs(b)>c.hd+i)continue}c.y1>l&&(l=c.y1)}return l}blocked(t,e,n,i=.25){const s=this._near(t,n,i+2.6,this._scratch??=[]);for(const o of s)if(!(e<o.y0||e>o.y1))if(o.kind===0){const a=t-o.x,l=n-o.z,c=o.r+i;if(a*a+l*l<c*c)return!0}else{const a=Math.cos(o.rotY),l=Math.sin(o.rotY),c=t-o.x,h=n-o.z,u=a*c-l*h,d=l*c+a*h;if(Math.abs(u)<o.hw+i&&Math.abs(d)<o.hd+i)return!0}return!1}unstick(t,e,n){this.resolve(t,null,e,t.y,t.y+n,0)}}const Oo={low:[70,220],medium:[100,300],high:[130,380]};async function hy(r,t,e,n,i={trees:1},s=null){const o=ss((t^2654435769)>>>0),a=new ye,l=new Qs,c=new ir,h=Rt=>c.loadAsync(Rt).catch(()=>null),[u,d,f,m]=await Promise.all([c.loadAsync("assets/nature_trees.glb"),c.loadAsync("assets/nature_rocks.glb"),h("assets/nature_trees_lod.glb"),h("assets/nature_cliffs.glb")]),b={};for(const Rt of[u,d,f,m])Rt&&Rt.scene.traverse(L=>{L.isMesh&&(b[L.name]=L.geometry)});function g(Rt,L,yt,dt){Rt.onBeforeCompile=lt=>{lt.uniforms.uTime=n,lt.uniforms.uWind=e,lt.vertexShader=lt.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          float wpx = instanceMatrix[3][0];
          float wpz = instanceMatrix[3][2];
          float k = smoothstep(${yt.toFixed(1)}, ${dt.toFixed(1)}, transformed.y);
          float ph = uTime * 1.35 + wpx * 0.05 + wpz * 0.043;
          float gust = 0.6 + 0.5 * sin(uTime * 0.5 + wpx * 0.01 + wpz * 0.011);
          transformed.x += sin(ph) * k * ${L.toFixed(2)} * uWind * gust;
          transformed.z += cos(ph * 0.77) * k * ${(L*.6).toFixed(2)} * uWind * gust;
        #endif
        `)}}const p=new At,v=new ve,_=new qe,x=new E,y=new E,M=new $,T=[["pine_a",.38],["pine_b",.34],["fir",.28]],R=[["oak_a",.36],["oak_b",.3],["birch",.19],["blossom",.05],["autumn",.1]],w={pine_a:[.46,4.6],pine_b:[.46,4.6],fir:[.38,4],oak_a:[.52,3.6],oak_b:[.52,3.6],birch:[.27,5.8],blossom:[.5,3.2],autumn:[.52,3.6]},S=Rt=>{let L=o();for(const[yt,dt]of Rt)if((L-=dt)<=0)return yt;return Rt[0][0]},P={};let I=0;const z=Math.round(3600*(i.trees??1));for(let Rt=0;Rt<4e4&&I<z;Rt++){const L=(o()*2-1)*ne*.97,yt=(o()*2-1)*ne*.97,dt=r.heightAt(L,yt);if(dt<te+2.5||dt>62||r.slopeAt(L,yt)>.55)continue;const lt=r.forestMask(L,yt);if(lt<.04||o()>Math.min(1,(lt-.04)*3.2))continue;const st={x:L,z:yt,h:dt,s:.75+o()*.75,hs:.85+o()*.5,ry:o()*Math.PI*2,v:o()},Wt=dt>30||o()<.4?S(T):S(R);(P[Wt]||=[]).push(st),I++}const H=new oe({vertexColors:!0,roughness:.95});g(H,.17,3.5,11.5);let G=Oo[i.name]||Oo.medium;const X=new $e({side:xe,alphaTest:.5}),tt=[];for(const[Rt,L]of Object.entries(P)){const yt=b[Rt];if(!yt)continue;const dt=b[`${Rt}_lod`]||yt,lt=L.length,st=new Float32Array(lt*16),Wt=new Float32Array(lt*3);L.forEach((U,j)=>{x.set(U.x,U.h-.3,U.z),_.set(0,U.ry,0),v.setFromEuler(_),y.set(U.s,U.s*U.hs,U.s),p.compose(x,v,y),p.toArray(st,j*16),M.setRGB(.9+U.v*.2,.93+U.v*7.3%1*.14,.9+U.v*3.1%1*.18),M.toArray(Wt,j*3)});const bt=(U,j)=>{const V=new Pe(U,H,lt);return V.setColorAt(0,M),V.count=0,V.frustumCulled=!1,V.castShadow=j,V.receiveShadow=!0,a.add(V),V},Gt=bt(yt,!0),Me=dt!==yt?bt(dt,!0):null;let le=null;const D=s?uy(s,yt,X):null;D&&(le=new Pe(D.geo,D.mat,lt),le.setColorAt(0,M),le.count=0,le.frustumCulled=!1,le.receiveShadow=!1,a.add(le)),tt.push({items:L,mats:st,cols:Wt,near:Gt,mid:Me,far:le});const[A,B]=w[Rt];for(const U of L){const j=U.h-.3;l.addCylinder(U.x,U.z,A*U.s,j,j+B*U.s*U.hs*.75)}}const N=new E(1e9,0,1e9);let W=99;const Q={near:0,mid:0,far:0};function ot(Rt){const[L,yt]=G,dt=L*L,lt=yt*yt;Q.near=Q.mid=Q.far=0;for(const st of tt){let Wt=0,bt=0,Gt=0;const{items:Me,mats:le,cols:D}=st;for(let A=0;A<Me.length;A++){const B=Me[A],U=B.x-Rt.x,j=B.z-Rt.z,V=U*U+j*j;let Mt,at;V<dt||!st.mid&&!st.far?(Mt=st.near,at=Wt++):V<lt||!st.far?(Mt=st.mid||st.near,at=Mt===st.near?Wt++:bt++):(Mt=st.far,at=Gt++),Mt.instanceMatrix.array.set(le.subarray(A*16,A*16+16),at*16),Mt.instanceColor.array.set(D.subarray(A*3,A*3+3),at*3)}for(const[A,B]of[[st.near,Wt],[st.mid,bt],[st.far,Gt]])A&&(A.count=B,A.instanceMatrix.needsUpdate=!0,A.instanceColor.needsUpdate=!0);Q.near+=Wt,Q.mid+=bt,Q.far+=Gt}N.copy(Rt)}const St=[];for(let Rt=0;Rt<8e3&&St.length<500;Rt++){const L=(o()*2-1)*ne*.97,yt=(o()*2-1)*ne*.97,dt=r.heightAt(L,yt);if(dt<te+.5)continue;const lt=r.slopeAt(L,yt),st=dt>60?.8:.1+lt*.9;if(o()>st)continue;const Wt=o()>.97?1.5+o()*1.1:.5+o()*1.8;St.push({x:L,z:yt,h:dt,s:Wt,sy:.55+o()*.5,sz:.7+o()*.6,ry:o()*Math.PI*2,v:o(),shape:Math.floor(o()*6)})}const Ut=new oe({vertexColors:!0,roughness:.95,flatShading:!0});for(let Rt=0;Rt<6;Rt++){const L=St.filter(lt=>lt.shape===Rt),yt=b[`rock${Rt}`];if(!L.length||!yt)continue;const dt=new Pe(yt,Ut,L.length);L.forEach((lt,st)=>{const Wt=1.6*lt.s;x.set(lt.x,lt.h+.04*Wt,lt.z),_.set(0,lt.ry,0),v.setFromEuler(_),y.set(Wt,Wt*lt.sy,Wt*lt.sz),p.compose(x,v,y),dt.setMatrixAt(st,p),M.setRGB(.85+lt.v*.3,.85+lt.v*.25,.85+lt.v*.25),dt.setColorAt(st,M)}),dt.instanceMatrix.needsUpdate=!0,dt.castShadow=!0,dt.receiveShadow=!0,dt.frustumCulled=!1,a.add(dt)}for(const Rt of St){const L=Rt.h-Rt.s*.25;l.addCylinder(Rt.x,Rt.z,1.45*Rt.s,L,L+1.7*Rt.s*Rt.sy*.95)}const Ft=[[10,8],[14,6],[8,11],[11,9]],Nt=[],K=Math.round(80*(i.trees??1));if(b.cliff0){for(let L=0;L<4e4&&Nt.length<K;L++){const yt=(o()*2-1)*ne*.95,dt=(o()*2-1)*ne*.95,lt=r.heightAt(yt,dt);if(lt<5||Math.hypot(yt-Oe.x,dt-Oe.z)<140||r.slopeAt(yt,dt)<.62||Nt.some(bt=>Math.abs(bt.x-yt)<26&&Math.abs(bt.z-dt)<26))continue;const st=r.heightAt(yt+3,dt)-r.heightAt(yt-3,dt),Wt=r.heightAt(yt,dt+3)-r.heightAt(yt,dt-3);Nt.push({x:yt,z:dt,h:lt,ry:Math.atan2(-st,-Wt)+(o()-.5)*.5,s:1+o()*1,shape:Math.floor(o()*4),v:o()})}const Rt=new oe({vertexColors:!0,roughness:.95});for(let L=0;L<4;L++){const yt=Nt.filter(st=>st.shape===L),dt=b[`cliff${L}`];if(!yt.length||!dt)continue;const lt=new Pe(dt,Rt,yt.length);yt.forEach((st,Wt)=>{x.set(st.x,st.h-.6*st.s,st.z),_.set(0,st.ry,0),v.setFromEuler(_),y.setScalar(st.s),p.compose(x,v,y),lt.setMatrixAt(Wt,p),M.setRGB(.88+st.v*.2,.88+st.v*.18,.88+st.v*.2),lt.setColorAt(Wt,M);const[bt,Gt]=Ft[L];l.addCylinder(st.x,st.z,bt*.3*st.s,st.h-1,st.h+Gt*st.s*.8)}),lt.instanceMatrix.needsUpdate=!0,lt.castShadow=!0,lt.receiveShadow=!0,lt.frustumCulled=!1,a.add(lt)}}const J=new $(1,1,1),gt=new $(.13,.17,.3),Ht=new $(1,.72,.55);function Ct(Rt,L=null,yt=null){L&&X.color.copy(gt).lerp(J,L.daylight).lerp(Ht,L.dusk*.4*L.daylight),!(!yt||!a.visible)&&(W+=Rt,W>.5&&(N.distanceToSquared(yt)>16||W>3)&&(W=0,ot(yt)))}function qt(Rt){G=Oo[Rt.name]||Oo.medium,W=99}return{group:a,update:Ct,colliders:l,lodStats:Q,cliffCount:Nt.length,cliffs:Nt,rebin:ot,setQuality:qt}}function uy(r,t,e){t.computeBoundingBox();const n=t.boundingBox,i=Math.max(n.max.x-n.min.x,n.max.z-n.min.z)*1.06,s=n.max.y-n.min.y,o=(n.min.x+n.max.x)/2,a=(n.min.z+n.max.z)/2,l=128,c=Math.min(320,Math.max(96,Math.round(128*s/i))),h=new Xe(l*2,c,{samples:0});h.texture.colorSpace=Ne,h.texture.generateMipmaps=!0,h.texture.minFilter=Jn,h.texture.anisotropy=4;const u=new Kc,d=new Pt(t,new oe({vertexColors:!0,roughness:.95}));u.add(d);const f=new ma(16773336,2.2);f.position.set(.5,1,.7),u.add(f,new _f(13624319,6123070,1.4));const m=new $r(-i/2,i/2,n.max.y,n.min.y,.1,200),b=r.getRenderTarget(),g=r.getClearColor(new $),p=r.getClearAlpha(),v=r.autoClear;r.setClearColor(4876848,0),r.autoClear=!0,r.setRenderTarget(h);for(let M=0;M<2;M++)h.viewport.set(M*l,0,l,c),h.scissor.set(M*l,0,l,c),h.scissorTest=!0,M===0?m.position.set(o,0,a+50):m.position.set(o+50,0,a),m.up.set(0,1,0),m.lookAt(o,0,a),r.render(u,m);h.scissorTest=!1,r.setRenderTarget(b),r.setClearColor(g,p),r.autoClear=v;const _=M=>{const T=new vn(i,s);T.translate(0,n.min.y+s/2,0);const R=T.attributes.uv;for(let w=0;w<R.count;w++)R.setX(w,(M?.5:0)+R.getX(w)*.5);return M&&T.rotateY(Math.PI/2),T.translate(M?0:o,0,M?a:0),T},x=Ef([_(!1),_(!0)]),y=e.clone();return y.map=h.texture,y.color=e.color,{geo:x,mat:y}}const _l=120,Ju=[11565114,12748860,10259002,7440700,10838063,9411142];class dy{constructor(t,e,n,i){this.terrain=t,this.wind=n;const s=new vn(.16,.22),o=new oe({roughness:1,side:xe,emissive:10124106,emissiveIntensity:.12});this.mesh=new Pe(s,o,_l),this.mesh.instanceMatrix.setUsage(zs),this.mesh.frustumCulled=!1,e.add(this.mesh);const a=new $;this.items=[];for(let l=0;l<_l;l++)this.items.push({x:0,y:-100,z:0,vy:.7+Math.random()*.9,ph:Math.random()*Math.PI*2,spin:1+Math.random()*2.5,s:.8+Math.random()*.7,state:"fall",fade:1}),this.mesh.setColorAt(l,a.setHex(Ju[l%Ju.length]).multiplyScalar(.85+Math.random()*.3));this.mesh.instanceColor.needsUpdate=!0,this._m=new At,this._q=new ve,this._e=new qe,this._v=new E,this._s=new E}respawnNear(t,e,n){const i=Math.random()*Math.PI*2,s=12+Math.random()*30;t.x=e+Math.cos(i)*s,t.z=n+Math.sin(i)*s,t.y=this.terrain.heightAt(t.x,t.z)+6+Math.random()*8,t.fade=1}update(t,e,n){const i=this.wind.value,{_m:s,_q:o,_e:a,_v:l,_s:c}=this;for(let h=0;h<_l;h++){const u=this.items[h];u.y-=u.vy*t,u.x+=(Math.sin(n*1.3+u.ph)*.9+i*1.4)*t,u.z+=Math.cos(n*1.1+u.ph)*.7*t;const d=this.terrain.heightAt(u.x,u.z);u.y<=d+.85&&(u.fade-=t*1.7),(u.fade<=0||Math.hypot(u.x-e.x,u.z-e.z)>65)&&this.respawnNear(u,e.x,e.z),a.set(n*u.spin+u.ph,u.ph+n*.7,n*.9),o.setFromEuler(a),l.set(u.x,u.y,u.z),c.setScalar(u.s*Math.max(.001,u.fade)),s.compose(l,o,c),this.mesh.setMatrixAt(h,s)}this.mesh.instanceMatrix.needsUpdate=!0}}const Qu=9;function fy(){const r=[],t=[],e=[],n=[],i=[];let s=0;for(let a=0;a<Qu;a++){const l=a/Qu*Math.PI*2+Math.random()*.6,c=.03+Math.random()*.2,h=Math.cos(l*1.7)*c,u=Math.sin(l*1.7)*c,d=.12+Math.random()*.3,f=.3+Math.random()*.26,m=.026+Math.random()*.016,b=Math.cos(l),g=Math.sin(l),p=[[0,m,0],[.55,m*.72,d*.45],[1,0,d]],v=Math.random();for(let x=0;x<3;x++){const[y,M,T]=p[x];for(const R of M===0?[0]:[-1,1]){const w=R*M,S=T*f*.5;r.push(h+w*b-S*g*-1,y*f,u+w*g+S*b*-1),t.push(x/2),e.push(v),n.push(0),s++}}const _=s-5;i.push(_,_+1,_+2,_+1,_+3,_+2,_+2,_+3,_+4)}const o=new rh;return o.setAttribute("position",new Bt(r,3)),o.setAttribute("aT",new Bt(t,1)),o.setAttribute("aRnd",new Bt(e,1)),o.setAttribute("aPart",new Bt(n,1)),o.setAttribute("normal",new Bt(new Array(r.length).fill(0).map((a,l)=>l%3===1?1:0),3)),o.setIndex(i),o}function py(){const r=[],t=[],e=[],n=[],i=[];let s=0;const o=(p,v,_,x,y,M)=>(r.push(p,v,_),t.push(x),e.push(M),n.push(y),s++),a=.05,l=o(-.012,0,0,0,0,0),c=o(.012,0,0,0,0,0),h=o(-.008,.28,a,.8,0,0),u=o(.008,.28,a,.8,0,0);i.push(l,c,h,c,u,h);const d=.3,f=a,m=o(0,d+.012,f,1,2,0),b=6;for(let p=0;p<b;p++){const v=p/b*Math.PI*2,_=(p+1)/b*Math.PI*2,x=(v+_)/2,y=.075,M=o(Math.cos(v)*y*.45,d,f+Math.sin(v)*y*.45,1,1,0),T=o(Math.cos(x)*y,d+.025,f+Math.sin(x)*y,1,1,0),R=o(Math.cos(_)*y*.45,d,f+Math.sin(_)*y*.45,1,1,0);i.push(M,T,m,T,R,m)}const g=new rh;return g.setAttribute("position",new Bt(r,3)),g.setAttribute("aT",new Bt(t,1)),g.setAttribute("aRnd",new Bt(e,1)),g.setAttribute("aPart",new Bt(n,1)),g.setAttribute("normal",new Bt(new Array(r.length).fill(0).map((p,v)=>v%3===1?1:0),3)),g.setIndex(i),g}function my(){const r=[],t=[],e=[],n=[],i=[];let s=0;const o=(v,_,x,y,M)=>(r.push(v,_,x),t.push(y),e.push(0),n.push(M),s++),a=7,l=(v,_,x,y)=>{const M=[];for(let T=0;T<a;T++){const R=T/a*Math.PI*2;M.push(o(Math.cos(R)*v,_,Math.sin(R)*v,x,y))}return M},c=l(.05,0,0,0),h=l(.035,.16,.5,0);for(let v=0;v<a;v++){const _=(v+1)%a;i.push(c[v],c[_],h[v],c[_],h[_],h[v])}const u=l(.14,.16,.6,1),d=l(.115,.23,.8,1),f=l(.05,.28,.95,1),m=o(0,.3,0,1,1);for(let v=0;v<a;v++){const _=(v+1)%a;i.push(u[v],u[_],d[v],u[_],d[_],d[v]),i.push(d[v],d[_],f[v],d[_],f[_],f[v]),i.push(f[v],f[_],m)}const b=l(.14,.158,.6,2),g=o(0,.15,0,.6,2);for(let v=0;v<a;v++){const _=(v+1)%a;i.push(b[_],b[v],g)}const p=new rh;return p.setAttribute("position",new Bt(r,3)),p.setAttribute("aT",new Bt(t,1)),p.setAttribute("aRnd",new Bt(e,1)),p.setAttribute("aPart",new Bt(n,1)),p.setAttribute("normal",new Bt(new Array(r.length).fill(0).map((v,_)=>_%3===1?1:0),3)),p.setIndex(i),p}function yl(r){const t=new Float32Array(r*r*2);for(let e=0;e<r;e++)for(let n=0;n<r;n++)t[(e*r+n)*2]=n,t[(e*r+n)*2+1]=e;return new Xr(t,2)}const gy=`
  attribute vec2 aCell;
  attribute float aT;
  attribute float aRnd;
  attribute float aPart;
  uniform vec2 uPlayer;
  uniform vec3 uPush;   // player xz + how hard they press the grass (0..1)
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
`,vy=`
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
  // the blades part around the explorer and bend flat underfoot
  vec2 dpush = pos - uPush.xy;
  float dl = length(dpush);
  float pk = (1.0 - smoothstep(0.15, 1.3, dl)) * uPush.z;
  vec2 pdir = dpush / max(dl, 0.06);
  float hs = (0.7 + 0.7 * h1) * (0.5 + 0.5 * fade) * keep * (1.0 - 0.5 * pk * (1.0 - smoothstep(0.0, 0.55, dl) * 0.0));
  float ws = (0.9 + 0.5 * h2) * keep;
  vec3 transformed = vec3(pos.x, ground - 0.02, pos.y) + vec3(position.x * ws, position.y * hs, position.z * ws);
  float bend = aT * aT;
  float gust = 0.55 + 0.45 * sin(uTime * 0.5 + pos.x * 0.02 + pos.y * 0.017);
  float sw = sin(uTime * 1.9 + pos.x * 0.6 + pos.y * 0.5 + aRnd * 6.28);
  transformed.x += (sw * 0.06 + 0.13 * gust) * bend * uWind * hs;
  transformed.z += cos(uTime * 1.6 + pos.y * 0.5 + aRnd * 5.0) * 0.05 * bend * uWind * hs;
  transformed.xz += pdir * pk * 0.55 * bend;
  transformed.y -= pk * 0.12 * aT;

  vec3 gc = tc.rgb;
  vec3 root = gc * vec3(0.40, 0.55, 0.30);
  vec3 tip = gc * vec3(1.28, 1.42, 0.82) * (0.88 + 0.3 * h1);
  vec3 col = mix(root, tip, pow(aT, 0.85));
  col = mix(col, vec3(0.66, 0.58, 0.26), step(0.9, h2) * aT * 0.65);   // a few sun-dried tufts
  col += vec3(0.015, 0.04, 0.07) * uNight * (0.3 + aT);                // moonlit tips
  vGCol = col;
  vGEm = vec3(0.0);
`,xy=`
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
`,by=`
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
`;function Ml(r,t,e){r.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
${gy}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        objectNormal = vec3(0.0, 1.0, 0.0); // light the blades like the ground beneath them`).replace("#include <begin_vertex>",t==="flower"?xy:t==="shroom"?by:vy),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGCol;
varying vec3 vGEm;`).replace("#include <color_fragment>","diffuseColor.rgb = vGCol;").replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vGEm;`)},r.customProgramCacheKey=()=>`grass-${t}`}class _y{constructor(t,e,n,i){this.terrain=t,this.wind=n,this.group=new ye,e.add(this.group),this._build(i.grass||0)}setQuality(t){for(const e of[...this.group.children])this.group.remove(e),e.geometry.dispose(),e.material.dispose();this._build(t.grass||0)}_build(t){const e=this.terrain,n=this.wind;if(this.enabled=t>0,!this.enabled)return;const i=44,s=Math.round(132*Math.sqrt(t)),o=Math.round(70*Math.sqrt(t));this.shared={uPlayer:{value:new rt},uPush:{value:new E},uTime:{value:0},uWind:n,uNight:{value:0},uWorldHalf:{value:ne},uTCell:{value:e.cell},uTexN:{value:e.gridN},uHeightTex:{value:e.heightTex},uColorTex:{value:e.colorTex},uForestTex:{value:e.forestTex}};const a=(b,g,p)=>({...this.shared,uN:{value:b},uCell:{value:g},uRange:{value:p}}),l=fy();l.setAttribute("aCell",yl(s)),l.instanceCount=s*s;const c=new oe({roughness:.95,side:xe});Ml(c,"grass",a(s,i*2/s,i)),this.grass=new Pt(l,c),this.grass.frustumCulled=!1,this.grass.receiveShadow=!0,this.group.add(this.grass);const h=py();h.setAttribute("aCell",yl(o)),h.instanceCount=o*o;const u=new oe({roughness:.8,side:xe});Ml(u,"flower",a(o,i*1.7/o,i*.85)),this.flowers=new Pt(h,u),this.flowers.frustumCulled=!1,this.flowers.receiveShadow=!0,this.group.add(this.flowers);const d=Math.round(80*Math.sqrt(t)),f=my();f.setAttribute("aCell",yl(d)),f.instanceCount=d*d;const m=new oe({roughness:.7,side:xe});Ml(m,"shroom",a(d,i*1.5/d,i*.75)),this.shrooms=new Pt(f,m),this.shrooms.frustumCulled=!1,this.shrooms.receiveShadow=!0,this.group.add(this.shrooms),this._gU=c,this._fU=u,this._gUniforms={...this.shared},this.uniformSets=[a(s,i*2/s,i)]}get roots(){return[this.group]}update(t,e,n,i=0){this.enabled&&(this.shared.uPlayer.value.set(t.x,t.z),this.shared.uPush.value.set(t.x,t.z,i),this.shared.uTime.value=e,this.shared.uNight.value=Math.pow(1-n.daylight,1.3))}}let wl=null;function Hn(r,t){if(!wl){const n=document.createElement("canvas");n.width=n.height=64;const i=n.getContext("2d"),s=i.createRadialGradient(32,32,2,32,32,30);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.35,"rgba(255,255,255,0.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,64,64),wl=new ya(n)}const e=new hm(new sf({map:wl,color:r,transparent:!0,blending:Fe,depthWrite:!1}));return e.material.color.multiplyScalar(1.6),e.scale.setScalar(t),e}const yy=`
  uniform float uLen;
  varying vec3 vN;
  varying vec3 vV;
  varying float vAlong;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    #ifdef CENTERED
      vAlong = clamp(position.AXIS / uLen + 0.5, 0.0, 1.0);
    #else
      vAlong = clamp(abs(position.AXIS) / uLen, 0.0, 1.0);
    #endif
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,My=`
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uFall;
  uniform float uSoft;
  varying vec3 vN;
  varying vec3 vV;
  varying float vAlong;
  void main() {
    float f = abs(dot(normalize(vN), normalize(vV)));
    float edge = pow(f, uSoft);
    float len = pow(max(1.0 - vAlong, 0.0), uFall) * smoothstep(0.0, 0.04, vAlong);
    gl_FragColor = vec4(uColor * edge * len * uOpacity, 1.0);
  }
`;function Zu(r,{length:t=100,axis:e="z",fall:n=1.3,soft:i=1.6,centered:s=!1}={}){return new Qt({uniforms:{uColor:{value:new $(r)},uOpacity:{value:0},uLen:{value:t},uFall:{value:n},uSoft:{value:i}},vertexShader:(s?`#define CENTERED
`:"")+yy.replaceAll("position.AXIS",`position.${e}`),fragmentShader:My,transparent:!0,blending:Fe,depthWrite:!1,side:xe,fog:!1})}const wy=`
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
`,Sy=`
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
`;function Pf(r=1){const t=new wa(.34*r,1.05*r,8,1,!0);t.translate(0,.52*r,0);const e=new Qt({uniforms:{uTime:{value:0},uIntensity:{value:1}},vertexShader:wy,fragmentShader:Sy,transparent:!0,blending:Fe,depthWrite:!1,side:xe});return new Pt(t,e)}const Sl=90;class Lf{constructor(t){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(32,32,3,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const s=new ya(e),o=new vn(1,1),a=new $e({map:s,color:13225168,transparent:!0,opacity:.32,depthWrite:!1});this.mesh=new Pe(o,a,Sl),this.mesh.instanceMatrix.setUsage(zs),this.mesh.frustumCulled=!1,t.add(this.mesh),this.emitters=[],this.items=Array.from({length:Sl},()=>({life:0})),this._m=new At,this._q=new ve,this._e=new qe,this._v=new E,this._s=new E}addEmitter(t,e,n=1){this.emitters.push({pos:t.clone(),rate:e,scale:n,acc:0})}update(t,e,n){const{_m:i,_q:s,_e:o,_v:a,_s:l}=this;for(const c of this.emitters)for(c.acc+=t*c.rate;c.acc>=1;){c.acc-=1;const h=this.items.find(u=>u.life<=0);if(!h){c.acc=0;break}h.life=1,h.age=0,h.x=c.pos.x+(Math.random()-.5)*.3,h.y=c.pos.y,h.z=c.pos.z+(Math.random()-.5)*.3,h.s=(.5+Math.random()*.3)*c.scale,h.spin=Math.random()*Math.PI*2}for(let c=0;c<Sl;c++){const h=this.items[c];if(h.life>0){if(h.age+=t,h.life=1-h.age/(3.2+h.s*2),h.y+=(.85+h.s*.4)*t,h.x+=e*.9*t,h.z+=Math.sin(n*.6+h.spin)*.15*t,h.life<=0){i.makeScale(0,0,0),this.mesh.setMatrixAt(c,i);continue}const u=h.s*(.6+(1-h.life)*1.6);o.set(0,-n*.4+h.spin,0),s.setFromEuler(o),a.set(h.x,h.y,h.z),l.setScalar(Math.max(.001,u*Math.min(1,h.life*4))),i.compose(a,s,l)}else i.makeScale(0,0,0);this.mesh.setMatrixAt(c,i)}this.mesh.instanceMatrix.needsUpdate=!0}}const $u=3;class Ty{constructor(t,e,n){this.terrain=t,this.pois=n,this.group=new ye,e.add(this.group),this.items=[];const i=[10483680,12167423,10475775];for(let s=0;s<$u;s++){const o=Hn(i[s],2.4-s*.35);o.material.opacity=0,this.group.add(o),this.items.push({spr:o,p:new E,ph:s*2.1,init:!1})}this.light=new es(10483680,0,12,1.8),this.group.add(this.light),this.vis=0,this._dir=new E}nearestTarget(t){let e=null,n=1400;for(const i of this.pois.sites){if(i.discovered)continue;const s=Math.hypot(i.x-t.x,i.z-t.z);s<n&&s>45&&(n=s,e=i)}return e?{s:e,d:n}:null}update(t,e,n,i){const s=Math.pow(1-i.daylight,1.5),o=this.nearestTarget(e),a=o?s:0;if(this.vis+=(a-this.vis)*Math.min(1,t*.8),this.group.visible=this.vis>.01,!this.group.visible)return;const l=this._dir.set(0,0,0);o&&l.set(o.s.x-e.x,0,o.s.z-e.z).normalize();for(let c=0;c<$u;c++){const h=this.items[c],u=12+c*4.5,d=Math.sin(n*.6+h.ph)*3.5,f=e.x+l.x*u-l.z*d,m=e.z+l.z*u+l.x*d;h.init||(h.p.set(f,0,m),h.init=!0),h.p.x+=(f-h.p.x)*Math.min(1,t*1.1),h.p.z+=(m-h.p.z)*Math.min(1,t*1.1);const b=this.terrain.heightAt(h.p.x,h.p.z),g=Math.max(b,0)+1.3+.5*Math.sin(n*1.4+h.ph)+c*.35;h.spr.position.set(h.p.x,g,h.p.z),h.spr.material.opacity=this.vis*(.65+.3*Math.sin(n*2.3+h.ph)),c===0&&(this.light.position.set(h.p.x,g,h.p.z),this.light.intensity=.9*this.vis)}}}const Ay=260,Ey=240,Cy=`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  uniform float uPR;
  varying float vA;
  varying vec3 vC;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    vA = aAlpha;
    vC = aColor;
    gl_PointSize = clamp(aSize * uPR * 560.0 / -mv.z, 1.0, 120.0 * uPR);
  }
`,Ry=`
  varying float vA;
  varying vec3 vC;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = max(1.0 - dot(c, c), 0.0);
    gl_FragColor = vec4(vC, d * d * vA);
  }
`,Py=`
  varying float vA;
  varying vec3 vC;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 3.5);
    gl_FragColor = vec4(vC * d * vA, 1.0);
  }
`;class td{constructor(t,e,n,i){this.n=e,this.pos=new Float32Array(e*3).fill(-9999),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e).fill(1),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.a0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.color=new Float32Array(e*3),this.next=0;const s=new ee;s.setAttribute("position",new Ot(this.pos,3)),s.setAttribute("aSize",new Ot(this.size,1)),s.setAttribute("aAlpha",new Ot(this.alpha,1)),s.setAttribute("aColor",new Ot(this.color,3)),this.points=new mi(s,new Qt({uniforms:{uPR:{value:Math.min(devicePixelRatio,2)}},vertexShader:Cy,fragmentShader:n,transparent:!0,depthWrite:!1,fog:!1,blending:i?Fe:Qi})),this.points.frustumCulled=!1,this.points.renderOrder=i?7:6,t.add(this.points)}emit(t,e,n,i,s,o,a,l,c,h,u,d=0,f=1.5){const m=this.next;this.next=(this.next+1)%this.n,this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=n,this.vel[m*3]=i,this.vel[m*3+1]=s,this.vel[m*3+2]=o,this.life[m]=a,this.max[m]=a,this.s0[m]=l,this.s1[m]=c,this.a0[m]=h,this.grav[m]=d,this.drag[m]=f,this.color[m*3]=u.r,this.color[m*3+1]=u.g,this.color[m*3+2]=u.b}update(t){for(let n=0;n<this.n;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;const i=1-Math.max(this.life[n],0)/this.max[n],s=Math.max(0,1-this.drag[n]*t);this.vel[n*3]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s-this.grav[n]*t,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]=this.s0[n]+(this.s1[n]-this.s0[n])*i,this.alpha[n]=this.a0[n]*(1-i)*Math.min(1,i*10+.3),this.life[n]<=0&&(this.pos[n*3+1]=-9999,this.alpha[n]=0)}const e=this.points.geometry.attributes;e.position.needsUpdate=!0,e.aSize.needsUpdate=!0,e.aAlpha.needsUpdate=!0,e.aColor.needsUpdate=!0}}const Ly=`
  attribute vec4 aSeed;
  attribute float aEnd;
  uniform vec3 uCam, uDir, uRight, uUp;
  uniform float uTravel, uSpeed, uVis;
  varying float vA;
  void main() {
    float ang = aSeed.x * 6.2831;
    float rad = 2.2 + aSeed.y * 7.0;
    float along = mod(aSeed.z * 46.0 - uTravel, 46.0) - 23.0;
    vec3 base = uCam + uDir * along + (uRight * cos(ang) + uUp * sin(ang)) * rad;
    float len = 0.8 + uSpeed * 0.09;
    vec3 p = base + uDir * len * (aEnd - 0.5);
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float fadeAlong = 1.0 - smoothstep(14.0, 23.0, abs(along));
    vA = uVis * fadeAlong * (0.3 + 0.7 * aSeed.w) * (1.0 - aEnd * 0.6);
  }
`,Dy=`
  varying float vA;
  void main() { gl_FragColor = vec4(vec3(0.75, 0.88, 1.0) * 1.3 * vA, 1.0); }
`,Es=new $;class Iy{constructor(t,e){this.terrain=e,this.dust=new td(t,Ay,Ry,!1),this.glow=new td(t,Ey,Py,!0);const n=110,i=new Float32Array(n*2*4),s=new Float32Array(n*2);for(let a=0;a<n;a++){const l=[Math.random(),Math.random(),Math.random(),Math.random()];for(let c=0;c<2;c++)i.set(l,(a*2+c)*4),s[a*2+c]=c}const o=new ee;o.setAttribute("position",new Ot(new Float32Array(n*2*3),3)),o.setAttribute("aSeed",new Ot(i,4)),o.setAttribute("aEnd",new Ot(s,1)),this.sU={uCam:{value:new E},uDir:{value:new E(0,0,-1)},uRight:{value:new E(1,0,0)},uUp:{value:new E(0,1,0)},uTravel:{value:0},uSpeed:{value:0},uVis:{value:0}},this.streaks=new fa(o,new Qt({uniforms:this.sU,vertexShader:Ly,fragmentShader:Dy,transparent:!0,blending:Fe,depthWrite:!1,fog:!1})),this.streaks.frustumCulled=!1,this.streaks.renderOrder=7,t.add(this.streaks),this.travel=0,this.stride=0,this.foot=0,this.wasGrounded=!0,this.wasWet=!1,this.prevVy=0,this.wakeT=0,this.handY=[null,null],this.trailT=0,this.vis=0,this._dir=new E,this._r=new E,this._u=new E}groundColor(t,e,n,i){if(n==="city")return i.setRGB(.5,.5,.56);const s=this.terrain,o=s.colorTex.image.data,a=s.gridN,l=Math.min(a-1,Math.max(0,Math.round((t+ne)/s.cell))),h=(Math.min(a-1,Math.max(0,Math.round((e+ne)/s.cell)))*a+l)*4;return i.setRGB(Math.pow(o[h]/255,2.2),Math.pow(o[h+1]/255,2.2),Math.pow(o[h+2]/255,2.2)),i.lerp(Es.setRGB(.55,.48,.36),.45).multiplyScalar(1.15)}puff(t,e,n,i,s,o,a=1){for(let l=0;l<i;l++){const c=Math.random()*6.283,h=s*(.4+Math.random()*.8);this.dust.emit(t+Math.cos(c)*.08,e+.04,n+Math.sin(c)*.08,Math.cos(c)*h,.4+Math.random()*.8,Math.sin(c)*h,.55+Math.random()*.4,(.12+Math.random()*.1)*a,(.5+Math.random()*.3)*a,.5,o,-.15,2.2)}}splash(t,e,n,i,s){for(let o=0;o<i;o++){const a=Math.random()*6.283,l=.6+Math.random()*1.8;this.dust.emit(t,e,n,Math.cos(a)*l,s*(.5+Math.random()*.8),Math.sin(a)*l,.6+Math.random()*.4,.05,.03,.8,Es.setRGB(.85,.93,1),9.5,.3)}}update(t,e,n){const{mode:i,sky:s,camera:o,feet:a,hands:l}=n,c=e.pos,h=e.vel,u=Math.hypot(h.x,h.z),d=i==="nature"?this.terrain.heightAt(c.x,c.z):c.y,f=i==="nature"&&d<te-.05&&c.y<te+.55&&!e.flying,m=this.groundColor(c.x,c.z,i,new $);if(e.grounded&&!e.flying&&!f&&u>1.2){this.stride+=u*t;const v=u>13.5?1.45:1.05;if(this.stride>=v){this.stride=0,this.foot^=1;const _=a?.[this.foot]||c,x=u>13.5;this.puff(_.x,i==="nature"?d:c.y,_.z,x?6:3,x?1.6:.8,m,x?1.3:1),i==="city"&&(s.wetness||0)>.25&&this.splash(_.x,c.y+.05,_.z,5,1.8)}}else u<.5&&(this.stride=0);if(this.wasGrounded&&!e.grounded&&h.y>3&&!f&&this.puff(c.x,c.y,c.z,8,1.4,m),!this.wasGrounded&&e.grounded&&this.prevVy<-4.5){const v=Math.min(1.6,-this.prevVy/9);this.puff(c.x,c.y,c.z,Math.round(12+14*v),2.2*v+.8,m,1.4)}const b=f||e.inWater;if(b&&!this.wasWet&&this.prevVy<-2&&this.splash(c.x,te,c.z,26,Math.min(6,-this.prevVy*.8)),b&&u>.8&&(this.wakeT-=t,this.wakeT<=0)){this.wakeT=Math.max(.045,.16-u*.01);const v=this._dir.set(h.x,0,h.z).normalize();for(let _=-1;_<=1;_+=2)this.dust.emit(c.x-v.x*.35+-v.z*_*.25,te+.04,c.z-v.z*.35+v.x*_*.25,-v.z*_*.5,0,v.x*_*.5,1.5+Math.random()*.5,.28,.85,.5,Es.setRGB(.92,.97,1),0,1);Math.random()<.5&&this.splash(c.x,te+.1,c.z,1,1.4)}l&&e.inWater?l.forEach((v,_)=>{const x=this.handY[_];x!==null&&(x>te&&v.y<=te?(this.dust.emit(v.x,te+.04,v.z,0,0,0,1.4,.18,.95,.5,Es.setRGB(.92,.97,1),0,1),this.splash(v.x,te+.05,v.z,6,2.2)):x<=te&&v.y>te&&this.splash(v.x,te+.05,v.z,4,3)),this.handY[_]=v.y}):this.handY[0]=this.handY[1]=null;const g=h.length();if(e.flying&&g>1&&(this.trailT-=t,this.trailT<=0)){this.trailT=.022;const v=this._dir.copy(h).normalize(),_=[new E(c.x,c.y+1,c.z),...a||[]];for(const x of _){const y=Math.random();Es.setRGB(.25+.5*y,.9-.4*y,1).multiplyScalar(2.3),this.glow.emit(x.x-v.x*.4+(Math.random()-.5)*.25,x.y+(Math.random()-.5)*.25,x.z-v.z*.4+(Math.random()-.5)*.25,-h.x*.04+(Math.random()-.5)*.4,-h.y*.04+(Math.random()-.5)*.4,-h.z*.04+(Math.random()-.5)*.4,.9+Math.random()*.7,.3,.03,.9,Es,0,.8)}}const p=e.flying?Ie.clamp((g-11)/12,0,1)*.55:0;if(this.vis+=(p-this.vis)*Math.min(1,t*4),this.streaks.visible=this.vis>.01,this.streaks.visible){const v=this._dir.copy(h).normalize(),_=this._r.crossVectors(v,new E(0,1,0));_.lengthSq()<1e-4&&_.set(1,0,0),_.normalize();const x=this._u.crossVectors(_,v).normalize();this.travel+=g*t;const y=this.sU;y.uCam.value.copy(o.position),y.uDir.value.copy(v),y.uRight.value.copy(_),y.uUp.value.copy(x),y.uTravel.value=this.travel,y.uSpeed.value=g,y.uVis.value=this.vis}this.wasGrounded=e.grounded,this.wasWet=b,this.prevVy=h.y,this.dust.update(t),this.glow.update(t)}}const ga={uRimColor:{value:new $(.6,.75,1)},uRimK:{value:.5}};function Fc(r,t=1){if(r.userData.rim)return;r.userData.rim=!0,r.userData.rimKey=String(t);const e=r.onBeforeCompile;r.onBeforeCompile=(n,i)=>{e?.(n,i),n.uniforms.uRimColor=ga.uRimColor,n.uniforms.uRimK=ga.uRimK,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRimColor;
uniform float uRimK;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          vec3 nrm = normalize(normal);
          float ndv = clamp(dot(nrm, normalize(vViewPosition)), 0.0, 1.0);
          float rimF = pow(max(1.0 - ndv, 0.0), 3.4);
          // brighter where the surface faces up (the sky), dimmer underneath
          vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
          float skyF = 0.45 + 0.55 * clamp(dot(nrm, upV) * 0.5 + 0.5, 0.0, 1.0);
          totalEmissiveRadiance += uRimColor * rimF * skyF * uRimK * ${t.toFixed(2)};
        }`)},r.customProgramCacheKey=()=>`rim-${r.name}-${r.userData.rimKey||""}`,r.needsUpdate=!0}const li=new E,Ai=new E,Bo=new E,Cs=new E;class ed{constructor({driver:t,anchorsLocal:e,cols:n,rows:i,widths:s,length:o,colors:a,gravity:l=7.5,damping:c=.985,air:h=2.4,collide:u=null}){this.driver=t,this.anchors=e,this.cols=n,this.rows=i,this.collide=u,this.gravity=l,this.damping=c,this.air=h;const d=n*i;this.p=Array.from({length:d},()=>new E),this.q=Array.from({length:d},()=>new E),this.rest=[];const f=o/(i-1);for(let v=0;v<i;v++){const _=Ie.lerp(s[0],s[1],v/(i-1))/(n-1);this.rest.push({h:_,v:f,d:Math.hypot(_,f)})}this.normals=Array.from({length:d},()=>new E(0,0,1)),this._ready=!1;const m=new ee;m.setAttribute("position",new Ot(new Float32Array(d*3),3)),m.setAttribute("normal",new Ot(new Float32Array(d*3),3));const b=new Float32Array(d*3),g=new $;for(let v=0;v<i;v++)for(let _=0;_<n;_++)g.copy(a(v/(i-1),_/(n-1),v,_)),b.set([g.r,g.g,g.b],(v*n+_)*3);m.setAttribute("color",new Ot(b,3));const p=[];for(let v=0;v<i-1;v++)for(let _=0;_<n-1;_++){const x=v*n+_,y=x+1,M=x+n,T=M+1;p.push(x,M,y,y,M,T)}m.setIndex(p),this.mesh=new Pt(m,new oe({vertexColors:!0,side:xe,roughness:.9})),Fc(this.mesh.material,.22),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.userData.cloth=!0}anchorWorld(t,e){return e.copy(this.anchors[t]).applyMatrix4(this.driver.matrixWorld)}reset(){const{cols:t,rows:e}=this;for(let n=0;n<t;n++){this.anchorWorld(n,li);for(let i=0;i<e;i++){const s=i*t+n;this.p[s].set(li.x,li.y-this.rest[i].v*i,li.z),this.q[s].copy(this.p[s])}}this._ready=!0}update(t,e){if(!(t>1e-4))return;this._ready||this.reset();const{cols:n,rows:i,p:s,q:o}=this;this.anchorWorld(Math.floor(n/2),li),li.distanceToSquared(s[Math.floor(n/2)])>9&&this.reset();const a=Math.min(3,Math.max(1,Math.ceil(t/.016))),l=Math.min(t,.05)/a;for(let c=0;c<a;c++){for(let h=0;h<n;h++)this.anchorWorld(h,s[h]),o[h].copy(s[h]);for(let h=n;h<s.length;h++){li.copy(s[h]).sub(o[h]).multiplyScalar(this.damping),o[h].copy(s[h]);const u=this.normals[h];Bo.copy(e).addScaledVector(li,-1/l);const d=u.dot(Bo)*this.air;s[h].add(li),s[h].addScaledVector(u,d*l*l),s[h].y-=this.gravity*l*l}for(let h=0;h<3;h++){for(let u=0;u<i;u++){const d=this.rest[u];for(let f=0;f<n;f++){const m=u*n+f;f<n-1&&this._link(m,m+1,d.h,u===0&&!0),u<i-1&&(this._link(m,m+n,d.v,!1),f<n-1&&this._link(m,m+n+1,d.d,!1),f>0&&this._link(m,m+n-1,d.d,!1))}}if(this.collide)for(let u=n;u<s.length;u++)this.collide(s[u])}}this._write()}_link(t,e,n,i){const{p:s,cols:o}=this,a=s[t],l=s[e];Cs.copy(l).sub(a);const c=Cs.length()||1e-6,h=(c-n)/c,u=t<o?0:.5,d=e<o?0:.5,f=u+d;f!==0&&(a.addScaledVector(Cs,h*(u/f)),l.addScaledVector(Cs,-h*(d/f)))}_write(){const{cols:t,rows:e,p:n}=this,i=this.mesh.geometry.attributes.position,s=this.mesh.geometry.attributes.normal;let o=0;for(let a=0;a<n.length;a++)o+=n[a].x+n[a].y+n[a].z;if(!Number.isFinite(o)){this._ready=!1;return}for(let a=0;a<n.length;a++)i.setXYZ(a,n[a].x,n[a].y,n[a].z);for(let a=0;a<e;a++)for(let l=0;l<t;l++){const c=a*t+l,h=n[a<e-1?c+t:c],u=n[a>0?c-t:c],d=n[l<t-1?c+1:c],f=n[l>0?c-1:c];Bo.copy(h).sub(u),Cs.copy(d).sub(f),Ai.crossVectors(Cs,Bo),Ai.lengthSq()<1e-10&&Ai.set(0,0,1),Ai.normalize(),this.normals[c].copy(Ai),s.setXYZ(c,Ai.x,Ai.y,Ai.z)}i.needsUpdate=!0,s.needsUpdate=!0}}const Pi={wind:{value:1},night:0,hoodUp:!1},Ny=.0909,Fy=.0455,nd=.18,id=new E(0,1,0),sd=new E(1,0,0);function Uy(){const r=new ye;r.rotation.order="YXZ";const t=new ye;r.add(t);let e=!1,n=null;const i={};let s=null,o=null,a=null;const l=[];let c=null,h=null,u=null,d=null,f=null,m=null,b=null,g=null,p=null,v=null,_=null,x=null,y=0;const M=[];let T=0,R=0,w=0;const S=[],P=new At,I=new E,z=new E,H=id.clone(),G=sd.clone();let X=0,tt=0,N=0,W=2.5,Q=0;new ir().load("assets/character.glb",U=>{c=U.scene,c.traverse(et=>{if(et.isMesh){et.castShadow=!0,et.frustumCulled=!0;const Z=Array.isArray(et.material)?et.material:[et.material];for(const nt of Z)Fc(nt),nt.name==="char_cloak"&&(g=nt),nt.name==="char_lantern"&&(m=nt,et.geometry.computeBoundingBox(),b=new es(16758886,0,6,2),b.position.copy(et.geometry.boundingBox.getCenter(new E)),et.add(b))}(et.name==="EyeL"||et.name==="EyeR")&&l.push(et),et.name==="Hood"&&(p=et)}),t.add(c),n=new P0(c);for(const et of U.animations)i[et.name]=n.clipAction(et);if(o=c.getObjectByName("Head"),o){a=o.quaternion.clone();const et=new At().copy(o.parent.matrixWorld).invert();H.copy(id).transformDirection(et),G.copy(sd).transformDirection(et)}i.idle?.reset().play(),s="idle",e=!0,h=c.getObjectByName("Chest"),u=c.getObjectByName("Neck"),d=c.getObjectByName("Foot_L"),f=c.getObjectByName("Foot_R"),v=c.getObjectByName("Hand_L"),_=c.getObjectByName("Hand_R");for(const et of["L","R"]){const Z=c.getObjectByName(`Thigh_${et}`),nt=c.getObjectByName(`Shin_${et}`),ft=c.getObjectByName(`Foot_${et}`);Z&&nt&&ft&&M.push({thigh:Z,shin:nt,foot:ft})}n.update(0),r.updateMatrixWorld(!0);const j=(et,Z,nt,ft)=>et.worldToLocal(c.localToWorld(new E(Z,nt,ft))),V=et=>new $(et),Mt=et=>{I.copy(et).applyMatrix4(P);const Z=I.y;if(Z<.12||Z>1.62)return;const nt=Math.abs(I.x)<.17&&Z>1?.29:.18;I.z<nt&&(I.z=nt,et.copy(I).applyMatrix4(c.matrixWorld))},at=et=>{if(I.copy(et).applyMatrix4(P),I.y<.95||I.y>1.55)return;const Z=I.x,nt=I.z-.03,ft=Math.hypot(Z,nt),xt=.2;if(ft<xt){const pt=xt/Math.max(ft,1e-4);I.x=Z*pt,I.z=.03+nt*pt,et.copy(I).applyMatrix4(c.matrixWorld)}};if(h){const et=[];for(let Z=0;Z<7;Z++){const nt=Z/6-.5;et.push(j(h,nt*.42,1.4,.14-.06*Math.pow(Math.abs(nt*2),2)))}S.push(new ed({driver:h,anchorsLocal:et,cols:7,rows:11,widths:[.42,.78],length:1,gravity:8.5,air:2.6,collide:Mt,colors:(Z,nt,ft)=>ft>=10?V(14263868):V(801348).lerp(V(1798010),Math.pow(Z,.9)*(.75+.25*Math.abs(nt*2-1)))}))}if(u)for(const et of[-1,1]){const Z=[];for(let nt=0;nt<3;nt++)Z.push(j(u,et*.05+(nt-1)*.034,1.455,-.075));S.push(new ed({driver:u,anchorsLocal:Z,cols:3,rows:10,widths:[.07,.085],length:.78,gravity:6.5,air:3.2,damping:.982,collide:at,colors:(nt,ft,xt)=>xt>=9?V(13616038):(xt>>1)%2?V(11876910):V(13616038)}))}const wt=r.parent||r;for(const et of S)wt.add(et.mesh);if(o&&l.length&&g){const et=new E;for(const ft of l)et.add(ft.getWorldPosition(new E));et.multiplyScalar(1/l.length);const Z=et.clone().add(new E(0,.012,.034)),nt=g.clone();nt.side=xe,Fc(nt,.4),x=new Pt(new Di(.158,26,16,Math.PI*1.75,Math.PI*1.5,0,Math.PI*.68),nt),x.scale.set(.96,1.04,1.16),x.castShadow=!0,x.visible=!1,o.add(x),x.position.copy(o.worldToLocal(Z.clone())),x.quaternion.copy(o.getWorldQuaternion(new ve).invert()),x.userData.s0=x.scale.clone()}});const ot=new E,St=new E,Ut=new E,Ft=new E,Nt=new E,K=new E,J=new E,gt=new E,Ht=new E,Ct=new E,qt=new E,Rt=new E,L=new ve,yt=new ve,dt=new ve;function lt(U,j,V){L.setFromUnitVectors(j,V),U.getWorldQuaternion(yt),U.parent.getWorldQuaternion(dt).invert(),U.quaternion.copy(dt.multiply(L).multiply(yt)),U.updateMatrixWorld(!0)}function st(U,j,V){const{thigh:Mt,shin:at,foot:wt}=U;Mt.getWorldPosition(ot),at.getWorldPosition(St),wt.getWorldPosition(Ut),Ft.copy(Ut),Ft.y+=(j-Ut.y)*V;const et=ot.distanceTo(St),Z=St.distanceTo(Ut);J.subVectors(Ft,ot);const nt=Ie.clamp(J.length(),Math.abs(et-Z)+.001,et+Z-.001);J.normalize(),Nt.subVectors(St,ot),K.subVectors(Ut,ot),gt.copy(Nt).addScaledVector(K,-Nt.dot(K)/Math.max(1e-8,K.lengthSq())),gt.lengthSq()<1e-8&&gt.set(0,0,-1),gt.addScaledVector(J,-gt.dot(J)).normalize();const ft=Ie.clamp((et*et+nt*nt-Z*Z)/(2*et*nt),-1,1),xt=Math.sqrt(1-ft*ft);Ht.copy(ot).addScaledVector(J,et*ft).addScaledVector(gt,et*xt),Ct.copy(ot).addScaledVector(J,nt),lt(Mt,qt.copy(Nt).normalize(),Rt.subVectors(Ht,ot).normalize()),at.getWorldPosition(St),wt.getWorldPosition(Ut),lt(at,qt.subVectors(Ut,St).normalize(),Rt.subVectors(Ct,St).normalize())}const Wt=U=>Math.atan2(Math.sin(U),Math.cos(U)),bt=new ve,Gt=new ve,Me=new ve,le=new E;function D(U){U===s||!i[U]||(i[U].reset().fadeIn(nd).play(),i[s]&&i[s].fadeOut(nd),s=U)}function A(U,j){let V=X;j.flying||j.inWater||!j.grounded?V=j.lookYaw:j.speed>.5&&(V=Math.atan2(-j.vx,-j.vz));const Mt=Wt(V-X);X+=Mt*Math.min(1,9*U),r.rotation.y=X;let at=0;if(j.flying?at=Ie.clamp(j.lookPitch*.85,-1.1,1.1):j.inWater&&(at=-1.15+j.lookPitch*.4),r.rotation.x+=(at-r.rotation.x)*Math.min(1,6*U),e){const wt=j.flying?"fly":j.inWater?"swim":j.grounded?j.speed>13.5?"run":j.speed>.5?"walk":"idle":"fall";D(wt);const et=wt==="walk"?Ie.clamp(j.speed*Ny,.6,2.2):wt==="run"?Ie.clamp(j.speed*Fy,.7,2):1;i[s].timeScale=et,n.update(U);const Z=j.groundAt&&j.grounded&&!j.flying&&!j.inWater&&(wt==="idle"||wt==="walk"||wt==="run");if(T+=((Z?1:0)-T)*Math.min(1,10*U),R+=(w*(Z?1:0)-R)*Math.min(1,8*U),t.position.y=R,T>.02&&M.length===2&&j.groundAt){r.updateMatrixWorld(!0);const ft=r.position.y;let xt=0;for(const pt of M){pt.foot.getWorldPosition(Ut);const Yt=Ut.y-R-ft,F=j.groundAt(Ut.x,Ut.z),ht=Ie.clamp(F-ft,-.45,.45);xt=Math.min(xt,ht),st(pt,F+Math.max(0,Yt),T)}w=Ie.clamp(xt*.85,-.3,0)}else w=0;if(y+=((Pi.hoodUp?1:0)-y)*Math.min(1,4*U),x&&(x.visible=y>.03,x.scale.copy(x.userData.s0).multiplyScalar(.55+.45*y)),p&&(p.visible=y<.5),S.length){r.updateMatrixWorld(!0),P.copy(c.matrixWorld).invert(),z.set(Pi.wind.value*1.2,0,Pi.wind.value*.4);const ft=r.visible;for(const xt of S)xt.mesh.visible=ft,ft&&xt.update(U,z)}if(m){const ft=Pi.night;m.emissiveIntensity=1.2+3.2*ft+.35*Math.sin(performance.now()*.0041),b&&(b.intensity=.08+.4*ft)}if(o){const ft=Ie.clamp(Wt(j.lookYaw-X),-.62,.62);tt+=(ft-tt)*Math.min(1,8*U),N+=(j.lookPitch*.45-N)*Math.min(1,8*U);const xt=o.parent.getWorldQuaternion(bt).invert();Gt.setFromAxisAngle(le.copy(H).applyQuaternion(xt),tt),Me.setFromAxisAngle(le.copy(G).applyQuaternion(xt),N),o.quaternion.copy(Gt).multiply(Me).multiply(a)}Q>0?(Q-=U,Q<=0&&(W=2.2+Math.random()*3.4)):(W-=U,W<=0&&(Q=.13));const nt=Q>0?.12:1;for(const ft of l)ft.scale.y+=(nt-ft.scale.y)*Math.min(1,30*U)}}const B=new E;return{root:r,update:A,setVisible:U=>{r.visible=U;for(const j of S)j.mesh.visible=U},feet:()=>d&&f?[d.getWorldPosition(new E),f.getWorldPosition(B.clone())]:null,hands:()=>v&&_?[v.getWorldPosition(new E),_.getWorldPosition(B.clone())]:null,__debug:()=>({ready:e,current:s,clips:Object.keys(i),info:s&&i[s]?{time:+i[s].time.toFixed(3),timeScale:i[s].timeScale,weight:+i[s].getEffectiveWeight().toFixed(2),enabled:i[s].isRunning()}:null,mixerTime:n?+n.time.toFixed(3):null,headQ:o?o.quaternion.toArray().map(U=>+U.toFixed(3)):null,headRest:a?a.toArray().map(U=>+U.toFixed(3)):null,lookYawS:+tt.toFixed(3),lookPitchS:+N.toFixed(3),eyes:l.length})}}const Rs=[{key:"sheep",scale:.8,slim:1,flee:5.5,leg:1,neck:[.22,-.6]},{key:"deer",scale:1.05,slim:.8,flee:8,leg:1.22,neck:[.2,-.52]},{key:"cow",scale:1.25,slim:1.15,flee:6.5,leg:1,neck:[.24,-.72]}],Ei={key:"stag",scale:1.3,slim:.8,flee:17,leg:1.22,neck:[.2,-.52]},zy=15,ky=5;async function Oy(){const r={};try{(await new ir().loadAsync("assets/wildlife.glb")).scene.traverse(e=>{e.isMesh&&(r[e.name]=e.geometry)})}catch{console.warn("[wildlife] wildlife.glb missing (run tools/build_wildlife.py): using plain shapes")}if(!r.sheep_body){const t=new Ma(.42,1,4,12);t.rotateX(Math.PI/2);const e=new En(.36,.38,.56);e.translate(0,0,-.22);const n=new En(.15,.62,.15);n.translate(0,-.31,0);for(const i of["sheep","deer","cow","stag"])r[`${i}_body`]=t,r[`${i}_head`]=e,r[`${i}_leg`]=n;r.fallback=!0}return r}class ch{static async create(t,e,n){return new ch(t,e,n,await Oy())}constructor(t,e,n,i){this.terrain=t;const s=ss((n^305441741)>>>0);this.rand=s,this.roots=[];const o=(h,u)=>{const d=t.heightAt(h,u);return d>3&&d<24&&t.slopeAt(h,u)<.18&&t.forestMask(h,u)<.02},a=[];for(let h=0;h<8e3&&a.length<zy;h++){let u,d;if(a.length===0){let f=null;for(let m=20;m<500&&!f;m+=25){const b=Math.max(1,Math.floor(2*Math.PI*m/25));for(let g=0;g<b&&!f;g++){const p=g/b*Math.PI*2,v=Math.cos(p)*m,_=Math.sin(p)*m;o(v,_)&&(f={x:v,z:_})}}if(!f)continue;({x:u,z:d}=f)}else u=(s()*2-1)*ne*.85,d=(s()*2-1)*ne*.85;o(u,d)&&(a.some(f=>Math.hypot(f.x-u,f.z-d)<180)||a.push({x:u,z:d}))}const l=[];a.forEach((h,u)=>{const d=3+Math.floor(s()*4);for(let f=0;f<d&&l.length<72;f++){const m=s()*Math.PI*2,b=5+s()*13,g=h.x+Math.cos(m)*b,p=h.z+Math.sin(m)*b;t.heightAt(g,p)<2||l.push({x:g,z:p,herd:h,sp:u%Rs.length,s:Rs[u%Rs.length].scale*(.9+s()*.2),yaw:s()*Math.PI*2,state:"idle",timer:s()*3,tx:g,tz:p,speed:0,legPhase:s()*6,head:0})}}),this.animals=l;const c=()=>new oe({vertexColors:!0,roughness:.95});this.sets=Rs.map((h,u)=>{const d=l.filter(p=>p.sp===u);d.forEach((p,v)=>{p.slot=v});const f=Math.max(1,d.length),m=(p,v)=>{const _=new Pe(p,c(),v);return _.frustumCulled=!1,_.castShadow=!0,_.receiveShadow=!0,e.add(_),this.roots.push(_),_},b={list:d,body:m(i[`${h.key}_body`],f),head:m(i[`${h.key}_head`],f),legs:m(i[`${h.key}_leg`],f*4)},g=new $;d.forEach((p,v)=>{const _=.88+s()*.24;g.setRGB(_,_*(.97+s()*.06),_*(.95+s()*.08)),b.body.setColorAt(v,g),b.head.setColorAt(v,g);for(let x=0;x<4;x++)b.legs.setColorAt(v*4+x,g)});for(const p of[b.body,b.head,b.legs])p.instanceColor.needsUpdate=!0,p.count=d.length*(p===b.legs?4:1);return b}),this._buildStags(t,e,i,s,a),this._m=new At,this._q=new ve,this._qt=new ve,this._e=new qe,this._v=new E,this._s=new E,this._time=0}_buildStags(t,e,n,i,s){this.stags=[];const o=[];for(let d=0;d<2e4&&o.length<ky;d++){const f=(i()*2-1)*ne*.8,m=(i()*2-1)*ne*.8,b=t.heightAt(f,m),g=t.forestMask(f,m);b<6||b>45||t.slopeAt(f,m)>.3||g<.03||g>.45||o.some(p=>Math.hypot(p.x-f,p.z-m)<300)||s.some(p=>Math.hypot(p.x-f,p.z-m)<90)||o.push({x:f,z:m})}this.stagMat=new oe({vertexColors:!0,roughness:.55,emissive:9427199,emissiveIntensity:1.1,transparent:!0,opacity:0,depthWrite:!1});const a=Math.max(1,o.length),l=(d,f)=>{const m=new Pe(d,this.stagMat,f);return m.frustumCulled=!1,m.visible=!1,e.add(m),this.roots.push(m),m};this.stagSet={body:l(n.stag_body,a),head:l(n.stag_head,a),legs:l(n.stag_leg,a*4)};const c=new $(1,1,1);for(const d of[this.stagSet.body,this.stagSet.head,this.stagSet.legs]){d.setColorAt(0,c),d.count=o.length*(d===this.stagSet.legs?4:1);for(let f=0;f<d.count;f++)d.setColorAt(f,c);d.instanceColor.needsUpdate=!0}this.halos=[],o.forEach(d=>{const f=Hn(10477823,6);f.material.opacity=0,f.visible=!1,e.add(f),this.roots.push(f),this.halos.push(f),this.stags.push({x:d.x,z:d.z,home:{...d},sp:Ei,s:Ei.scale*(.95+i()*.1),yaw:i()*6.28,state:"idle",timer:i()*4,tx:d.x,tz:d.z,speed:0,legPhase:i()*6,head:0,fade:1})});const h=28;this.trail={n:h,t:0,pos:new Float32Array(this.stags.length*h*3),col:new Float32Array(this.stags.length*h*3)};const u=new ee;u.setAttribute("position",new Ot(this.trail.pos,3)),u.setAttribute("color",new Ot(this.trail.col,3)),this.trailPts=new mi(u,new Zc({size:.3,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,sizeAttenuation:!0})),this.trailPts.frustumCulled=!1,this.trailPts.visible=!1,e.add(this.trailPts),this.roots.push(this.trailPts)}_pickTarget(t){for(let e=0;e<4;e++){const n=Math.random()*Math.PI*2,i=6+Math.random()*18,s=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.terrain.heightAt(s,o)>1.5){t.tx=s,t.tz=o;return}}t.tx=t.x,t.tz=t.z}_behave(t,e,n,i){const s=this.terrain;t.timer-=n;const o=Math.hypot(i.x-t.x,i.z-t.z);if(o<e.flee&&t.state!=="flee"){t.state="flee",t.timer=2.5+Math.random()*2;const l=Math.atan2(t.x-i.x,t.z-i.z);t.tx=t.x+Math.sin(l)*32,t.tz=t.z+Math.cos(l)*32}let a=0;if(t.state==="flee"?(a=e===Ei?3.6:5.2,t.timer<=0&&(t.state="idle",t.timer=2+Math.random()*3)):t.state==="wander"?(a=e===Ei?.9:1.5,(Math.hypot(t.tx-t.x,t.tz-t.z)<1.5||t.timer<=0)&&(t.state="idle",t.timer=1+Math.random()*3)):t.state==="graze"?t.timer<=0&&(t.state="wander",t.timer=14,this._pickTarget(t)):t.timer<=0&&(t.state="graze",t.timer=3+Math.random()*4),a>0){const l=t.tx-t.x,c=t.tz-t.z,h=Math.hypot(l,c);if(h>.3){const u=l/h,d=c/h,f=Math.min(h,a*n),m=t.x+u*f,b=t.z+d*f;s.heightAt(m,b)>1.2?(t.x=m,t.z=b):(t.state="idle",t.timer=1+Math.random()*2);const g=Math.atan2(-u,-d),p=Math.atan2(Math.sin(g-t.yaw),Math.cos(g-t.yaw));t.yaw+=p*Math.min(1,5*n)}}return t.speed+=(a-t.speed)*Math.min(1,6*n),t.legPhase+=t.speed*n*2.4,t.head+=((t.state==="graze"?1:0)-t.head)*Math.min(1,3*n),o}_pose(t,e,n,i,s){const{_m:o,_q:a,_qt:l,_e:c,_v:h,_s:u,terrain:d}=this,f=d.heightAt(t.x,t.z),b=.6*t.s*e.leg+.04*t.s;c.set(0,t.yaw,0),a.setFromEuler(c),h.set(t.x,f+b,t.z),u.setScalar(t.s),o.compose(h,a,u),n.body.setMatrixAt(i,o),h.set(0,e.neck[0]*t.s,e.neck[1]*t.s).applyQuaternion(a),h.x+=t.x,h.y+=f+b,h.z+=t.z;const g=t.state==="graze"?Math.sin(s*7+i*1.7)*.06:0,p=t.state==="idle"&&e===Ei?-.35:0;l.setFromEuler(c.set(-(.12+t.head*1)+g+p,0,0)),l.premultiply(a),u.setScalar(t.s),o.compose(h,l,u),n.head.setMatrixAt(i,o);const v=Math.min(1,t.speed/1.4),_=[0,Math.PI,Math.PI,0],x=[[-.26,-.52],[.26,-.52],[-.26,.52],[.26,.52]];for(let y=0;y<4;y++){h.set(x[y][0]*e.slim,b-.04*t.s,x[y][1]*t.s).applyQuaternion(a),h.x+=t.x,h.y+=f,h.z+=t.z;const M=Math.sin(t.legPhase+_[y])*.5*v;l.setFromEuler(c.set(M,0,0)),l.premultiply(a),u.set(t.s,t.s*e.leg,t.s),o.compose(h,l,u),n.legs.setMatrixAt(i*4+y,o)}}update(t,e,n,i=1){this._time=n;for(const s of this.animals)this._behave(s,Rs[s.sp],t,e),this._pose(s,Rs[s.sp],this.sets[s.sp],s.slot,n);for(const s of this.sets)s.body.instanceMatrix.needsUpdate=!0,s.head.instanceMatrix.needsUpdate=!0,s.legs.instanceMatrix.needsUpdate=!0;this._updateStags(t,e,n,i)}_updateStags(t,e,n,i){const s=1-i,o=Ie.smoothstep(s,.55,.85),a=this.stagSet,l=o>.01&&this.stags.length>0;for(const u of[a.body,a.head,a.legs])u.visible=l;if(this.trailPts.visible=l,this.stagMat.opacity=o*.9,this.stagMat.emissiveIntensity=.9+.5*Math.sin(n*1.3),!l){for(const u of this.halos)u.visible=!1;return}const c=this.trail;c.t-=t;const h=c.t<=0;h&&(c.t=.12),this.stags.forEach((u,d)=>{const f=this._behave(u,Ei,t,e),m=f<Ei.flee*1.3?0:f>40?1:u.fade;u.fade+=(m-u.fade)*Math.min(1,1.6*t),u.fade<.03&&!(f<60)&&(u.x=u.home.x,u.z=u.home.z,u.state="idle",u.timer=3),this._pose(u,Ei,a,d,n);const b=this.terrain.heightAt(u.x,u.z),g=this.halos[d];g.visible=!0,g.position.set(u.x,b+1.3*u.s,u.z),g.material.opacity=o*u.fade*(.35+.1*Math.sin(n*2+d));const p=d*c.n*3;if(h){c.pos.copyWithin(p+3,p,p+(c.n-1)*3),c.pos[p]=u.x,c.pos[p+1]=b+.5*u.s,c.pos[p+2]=u.z;for(let v=0;v<c.n;v++){const _=(1-v/c.n)*(u.speed>.4?1:.25)*o*u.fade;c.col[p+v*3]=.35*_,c.col[p+v*3+1]=.75*_,c.col[p+v*3+2]=1*_}}}),this.stagMat.opacity*=Math.max(0,Math.min(1,this.stags.reduce((u,d)=>Math.max(u,d.fade),0))),a.body.instanceMatrix.needsUpdate=!0,a.head.instanceMatrix.needsUpdate=!0,a.legs.instanceMatrix.needsUpdate=!0,h&&(this.trailPts.geometry.attributes.position.needsUpdate=!0,this.trailPts.geometry.attributes.color.needsUpdate=!0)}}const By=1.62,Hy=13,Gy=26,rd=7.5,Vy=30,Wy=58,jy=32,Xy=12.5,qy=1.8,Tl=.38,od=1.72,ad=.65;class Yy{constructor(t,e,n,i){this.camera=t,this.terrain=e,this.pos=new E(0,40,0),this.vel=new E,this.yaw=Math.PI*.25,this.pitch=-.08,this.keys=Object.create(null),this.inputEnabled=!1,this.sens=1,this.invertY=!1,this.baseFov=70,this.grounded=!1,this.inWater=!1,this.flying=!1,this.view="third",this.camDist=5.5,this.bobPhase=0,this.lift=0,this.model=Uy(),i.add(this.model.root),this.locked=!1,this.dragging=!1,this._fwd=new E,this._fwd3=new E,this._right=new E,this._move=new E,addEventListener("keydown",s=>{this.inputEnabled&&(this.keys[s.code]=!0,s.code==="KeyV"&&(this.view=this.view==="third"?"first":"third"),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.code)&&s.preventDefault())}),addEventListener("keyup",s=>{this.keys[s.code]=!1}),addEventListener("blur",()=>{this.keys=Object.create(null)}),n.addEventListener("wheel",s=>{this.inputEnabled&&(this.camDist=Math.max(2.6,Math.min(9.5,this.camDist+s.deltaY*.004)))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.locked=!!document.pointerLockElement}),document.addEventListener("mousemove",s=>{this.inputEnabled&&(this.locked||this.dragging)&&this.look(s.movementX,s.movementY)}),document.addEventListener("mousedown",s=>{s.target===n&&this.inputEnabled&&(this.dragging=!0)}),document.addEventListener("mouseup",()=>{this.dragging=!1})}look(t,e){this.yaw-=t*.0022*this.sens,this.pitch-=e*.0022*this.sens*(this.invertY?-1:1),this.pitch=Math.max(-1.45,Math.min(1.35,this.pitch))}spawn(t,e){this.pos.set(t,this.terrain.heightAt(t,e)+.5,e),this.vel.set(0,0,0),this.terrain.colliders?.unstick(this.pos,Tl,od)}update(t){const e=this.keys,n=(e.KeyW||e.ArrowUp?1:0)-(e.KeyS||e.ArrowDown?1:0),i=(e.KeyD||e.ArrowRight?1:0)-(e.KeyA||e.ArrowLeft?1:0),s=!!(e.ShiftLeft||e.ShiftRight),o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=Math.cos(this.pitch),c=Math.sin(this.pitch);this._fwd3.set(-o*l,c,-a*l),this._fwd.set(-o,0,-a),this._right.set(a,0,-o),this.flying=!!e.KeyP;const h=this.terrain.heightAt(this.pos.x,this.pos.z);if(this.inWater=!this.flying&&this.pos.y<te-.25&&h<te-.25,this.flying){const y=Math.min(1,3.2*t);if(n!==0||i!==0||e.Space){this._move.set(0,0,0).addScaledVector(this._fwd3,n).addScaledVector(this._right,i),e.Space&&(this._move.y+=.8);const M=s?Wy:Vy;this._move.lengthSq()>0&&this._move.normalize().multiplyScalar(M),this.vel.lerp(this._move,y)}else this.vel.x*=Math.max(0,1-3*t),this.vel.z*=Math.max(0,1-3*t),this.vel.y+=(3.5-this.vel.y)*y}else if(this._move.set(0,0,0).addScaledVector(this._fwd,n).addScaledVector(this._right,i),this._move.lengthSq()>0&&this._move.normalize(),this.inWater){const y=Math.min(1,10*t);this.vel.x+=(this._move.x*rd-this.vel.x)*y,this.vel.z+=(this._move.z*rd-this.vel.z)*y;const M=e.Space?6.5:-1.8;this.vel.y+=(M-this.vel.y)*Math.min(1,3.5*t),e.Space&&this.pos.y>te-1.1&&(this.vel.y=Math.max(this.vel.y,6))}else{const y=s?Gy:Hy,M=Math.min(1,(this.grounded?10:2.5)*t);this.vel.x+=(this._move.x*y-this.vel.x)*M,this.vel.z+=(this._move.z*y-this.vel.z)*M,this.vel.y-=jy*t,this.grounded&&e.Space&&(this.vel.y=Xy,this.grounded=!1)}const u=this.pos.x+this.vel.x*t,d=this.pos.z+this.vel.z*t,f=Math.hypot(u-this.pos.x,d-this.pos.z);this.grounded&&!this.flying&&f>1e-4?(this.terrain.heightAt(u,d)-this.pos.y)/f>qy?(this.vel.x*=.1,this.vel.z*=.1,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t):(this.pos.x=u,this.pos.z=d):(this.pos.x=u,this.pos.z=d),this.pos.y+=this.vel.y*t;const m=ne*.965;this.pos.x=Math.max(-m,Math.min(m,this.pos.x)),this.pos.z=Math.max(-m,Math.min(m,this.pos.z));const b=this.terrain.colliders;b&&(b.resolve(this.pos,this.vel,Tl,this.pos.y,this.pos.y+od,ad),this.pos.x=Math.max(-m,Math.min(m,this.pos.x)),this.pos.z=Math.max(-m,Math.min(m,this.pos.z)));let g=this.terrain.heightAt(this.pos.x,this.pos.z);if(b){const y=b.supportAt(this.pos.x,this.pos.z,this.pos.y,Tl*.5,ad);y>g&&(g=y)}this.pos.y<=g?(this.pos.y=g,this.vel.y<0&&(this.vel.y=0),this.grounded=!0):this.grounded&&this.vel.y<=0&&this.pos.y-g<.9&&!this.flying?this.pos.y=g:this.pos.y-g>.05&&(this.grounded=!1);const p=this.inWater?Math.min(1.15,Math.max(0,te-this.pos.y)*.9+.3):0;this.lift+=(p-this.lift)*Math.min(1,5*t);const v=Math.hypot(this.vel.x,this.vel.z),_=this.vel.length();if(this.view==="third"){const y=this.pos.y+1.45;let M=this.camDist;for(let T=.25;T<=1.001;T+=.15){const R=this.camDist*T,w=this.pos.x-this._fwd3.x*R,S=y-this._fwd3.y*R,P=this.pos.z-this._fwd3.z*R;if(S<this.terrain.heightAt(w,P)+.4||b&&b.blocked(w,S,P)){M=Math.max(.7,R-.35);break}}this.camera.position.set(this.pos.x-this._fwd3.x*M,y-this._fwd3.y*M,this.pos.z-this._fwd3.z*M),this.camera.rotation.set(this.pitch,this.yaw,0),this.model.root.visible=!0}else{this.grounded&&v>.5&&(this.bobPhase+=t*(4+v*.45));const y=Math.sin(this.bobPhase)*.05*Math.min(1,v/9);this.camera.position.set(this.pos.x,this.pos.y+By+y+this.lift*.6,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0),this.model.root.visible=!1}const x=this.baseFov+(v>17||this.flying&&_>17?7:0);Math.abs(this.camera.fov-x)>.01&&(this.camera.fov+=(x-this.camera.fov)*Math.min(1,5*t),this.camera.updateProjectionMatrix()),this.model.root.position.set(this.pos.x,this.pos.y+this.lift,this.pos.z),this.model.update(t,{vx:this.vel.x,vz:this.vel.z,vy:this.vel.y,speed:v,grounded:this.grounded,inWater:this.inWater,flying:this.flying,lookYaw:this.yaw,lookPitch:this.pitch,lift:this.lift,groundAt:(y,M)=>this.terrain.heightAt(y,M)})}}const Bs={lighthouse:{color:"#ffd25e",label:"lighthouse"},shipwreck:{color:"#c98d5a",label:"shipwreck"},windmill:{color:"#efe6cf",label:"windmill"},ruinTower:{color:"#b5aea1",label:"ruined tower"},stoneCircle:{color:"#8fd8c3",label:"stone circle"},shrine:{color:"#9fd0ff",label:"shrine"},arch:{color:"#d6c8a9",label:"arch"},camp:{color:"#e0995e",label:"camp"},gate:{color:"#9f7fe8",label:"ancient gate"},cityTower:{color:"#b5c2d6",label:"landmark tower"},park:{color:"#8fd8a3",label:"city park"},monument:{color:"#ffd25e",label:"monument"},neon:{color:"#e86fd6",label:"neon district"}};function Hs(r,t,e,n,i){const s=Bs[t]?.color??"#fff";switch(r.save(),r.translate(e,n),r.strokeStyle=s,r.fillStyle=s,r.lineWidth=Math.max(1,i*.28),r.lineCap="round",r.lineJoin="round",t){case"lighthouse":r.beginPath(),r.moveTo(-i*.45,i),r.lineTo(i*.45,i),r.lineTo(i*.18,-i*.5),r.lineTo(-i*.18,-i*.5),r.closePath(),r.fill(),r.beginPath(),r.arc(0,-i*.75,i*.3,0,Math.PI*2),r.fill();break;case"windmill":for(let o=0;o<4;o++){const a=Math.PI/4+o*Math.PI/2;r.beginPath(),r.moveTo(0,0),r.lineTo(Math.cos(a)*i,Math.sin(a)*i),r.stroke()}r.beginPath(),r.arc(0,0,i*.24,0,Math.PI*2),r.fill();break;case"camp":r.beginPath(),r.moveTo(-i,i*.8),r.lineTo(0,-i*.8),r.lineTo(i,i*.8),r.closePath(),r.fill();break;case"shipwreck":r.rotate(.5),r.beginPath(),r.moveTo(-i,-i*.1),r.lineTo(i,-i*.35),r.lineTo(i*.7,i*.5),r.lineTo(-i*.7,i*.5),r.closePath(),r.fill(),r.beginPath(),r.moveTo(0,-i*.3),r.lineTo(0,-i),r.stroke();break;case"ruinTower":r.fillRect(-i*.55,-i*.5,i*1.1,i*1.5),r.fillRect(-i*.55,-i,i*.26,i*.5),r.fillRect(i*.29,-i,i*.26,i*.5);break;case"stoneCircle":for(let o=0;o<6;o++){const a=o/6*Math.PI*2;r.beginPath(),r.arc(Math.cos(a)*i*.85,Math.sin(a)*i*.85,i*.22,0,Math.PI*2),r.fill()}break;case"shrine":r.beginPath(),r.moveTo(0,-i),r.lineTo(i*.7,0),r.lineTo(0,i),r.lineTo(-i*.7,0),r.closePath(),r.fill(),r.fillStyle="#08131c",r.beginPath(),r.arc(0,0,i*.22,0,Math.PI*2),r.fill();break;case"arch":r.beginPath(),r.arc(0,i*.55,i*.85,Math.PI,Math.PI*2),r.stroke(),r.fillRect(-i*1,i*.4,i*.4,i*.6),r.fillRect(i*.6,i*.4,i*.4,i*.6);break;case"gate":r.fillRect(-i,-i*.2,i*.55,i*1.2),r.fillRect(i*.45,-i*.2,i*.55,i*1.2),r.fillRect(-i,-i*.75,i*2,i*.55),r.globalAlpha*=.85,r.beginPath(),r.ellipse(0,i*.45,i*.42,i*.62,0,0,Math.PI*2),r.fill(),r.globalAlpha/=.85;break;case"cityTower":r.fillRect(-i*.42,-i*.35,i*.84,i*1.35),r.fillRect(-i*.24,-i*.9,i*.48,i*.55),r.beginPath(),r.moveTo(0,-i*1.1),r.lineTo(0,-i*1.5),r.stroke();break;case"park":r.beginPath(),r.moveTo(0,-i),r.lineTo(i*.8,i*.85),r.lineTo(-i*.8,i*.85),r.closePath(),r.fill(),r.fillRect(-i*.1,i*.5,i*.2,i*.5);break;case"monument":r.beginPath(),r.moveTo(0,-i),r.lineTo(i*.45,i*.7),r.lineTo(-i*.45,i*.7),r.closePath(),r.fill(),r.fillRect(-i*.7,i*.7,i*1.4,i*.3),r.beginPath(),r.arc(0,-i*1.15,i*.22,0,Math.PI*2),r.fill();break;case"neon":r.fillRect(-i,-i*.65,i*2,i*1.3),r.fillStyle="#08131c",r.fillRect(-i*.8,-i*.45,i*.7,i*.9),r.fillRect(i*.1,-i*.45,i*.7,i*.9);break;default:r.beginPath(),r.arc(0,0,i*.6,0,Math.PI*2),r.fill()}r.restore()}const Ky={lighthouse:'<path d="M8.4 21 10 9.5h4L15.6 21z"/><rect x="9.2" y="5.2" width="5.6" height="3.4" rx=".8"/><path d="M12 2.2l3 2.4H9z"/><path d="M3 6h4M17 6h4M3.6 3.4l3 1.4M20.4 3.4l-3 1.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',shipwreck:'<path d="M2.6 13.4 21 10.2l-2.6 7.6H6z"/><path d="M12.2 12V3.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12.8 4.2l5 5.2h-5z" opacity=".8"/>',windmill:'<path d="M10 14.4h4L15.4 22H8.6z"/><circle cx="12" cy="11.6" r="1.7"/><path d="M12 11.6 5.6 5.2M12 11.6l6.4-6.4M12 11.6l6.4 6.4M12 11.6 5.6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',ruinTower:'<path d="M6.5 22V8h3.2v3h4.6V8h3.2v14z"/><path d="M6.5 8h3.2V5H6.5zM14.3 8h3.2V5h-3.2z" opacity=".75"/>',stoneCircle:'<circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="4.6" r="2"/><circle cx="18.4" cy="8.3" r="2"/><circle cx="18.4" cy="15.7" r="2"/><circle cx="12" cy="19.4" r="2"/><circle cx="5.6" cy="15.7" r="2"/><circle cx="5.6" cy="8.3" r="2"/>',shrine:'<path fill-rule="evenodd" d="M12 2.4 18.4 12 12 21.6 5.6 12zM12 9.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z"/>',arch:'<path d="M3.2 22V13a8.8 8.8 0 0 1 17.6 0v9h-5v-9a3.8 3.8 0 0 0-7.6 0v9z"/>',camp:'<path d="M2.4 20.6 12 3.6l9.6 17z"/><path d="M12 20.6l-3-6.4h6z" fill="#08131c" opacity=".7"/>',gate:'<path d="M3.4 22V9h4v13zM16.6 22V9h4v13zM2.4 9V5.4h19.2V9z"/><ellipse cx="12" cy="16" rx="3.6" ry="5.4" opacity=".7"/>',cityTower:'<path d="M7.6 22V9.6h8.8V22z"/><path d="M9.8 9.6V5h4.4v4.6z"/><path d="M12 5V1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',park:'<path d="M12 2.6 19.6 16H4.4z"/><path d="M10.9 15.5h2.2V22h-2.2z"/>',monument:'<path d="M12 4 15.4 18H8.6z"/><path d="M5.4 18h13.2v3H5.4z"/><circle cx="12" cy="2.6" r="1.6"/>',neon:'<path fill-rule="evenodd" d="M2.4 5.6h19.2v12.8H2.4zM5 8v8h6V8zM13 8v8h6V8z"/>',camera:'<path fill-rule="evenodd" d="M3 7.6h3.4l1.4-2.4h8.4l1.4 2.4H21v11.8H3zM12 9.4a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6z"/>',gear:'<path fill-rule="evenodd" d="M10.3 2.6h3.4l.5 2.5 1.6.7 2.1-1.4 2.4 2.4-1.4 2.1.7 1.6 2.5.5v3.4l-2.5.5-.7 1.6 1.4 2.1-2.4 2.4-2.1-1.4-1.6.7-.5 2.5h-3.4l-.5-2.5-1.6-.7-2.1 1.4-2.4-2.4 1.4-2.1-.7-1.6-2.5-.5v-3.4l2.5-.5.7-1.6-1.4-2.1 2.4-2.4 2.1 1.4 1.6-.7zM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8z"/>',map:'<path d="M3 5.8 9 3.6l6 2.2 6-2.2v14.6l-6 2.2-6-2.2-6 2.2z" opacity=".9"/><path d="M9 3.6v14.6M15 5.8v14.6" fill="none" stroke="#08131c" stroke-width="1" opacity=".5"/>',journal:'<path d="M5 3.4h12.4A1.6 1.6 0 0 1 19 5v15.6H7A2 2 0 0 1 5 18.6z"/><path d="M8.4 8h7M8.4 11.4h7" fill="none" stroke="#08131c" stroke-width="1.2" opacity=".55" stroke-linecap="round"/>',gamepad:'<path d="M7.6 6.4h8.8c2.6 0 4.2 2 4.8 5.6l.6 4.2c.3 2-1.5 3-2.8 1.8L16.8 16H7.2L4.6 18c-1.3 1.2-3.1.2-2.8-1.8l.6-4.2c.6-3.6 2.2-5.6 5.2-5.6z"/>'};function Fr(r,t=20,e=null){const n=Ky[r];if(!n)return"";const i=e||Bs[r]?.color||"currentColor";return`<svg class="ico" viewBox="0 0 24 24" width="${t}" height="${t}" fill="${i}" style="color:${i}" aria-hidden="true">${n}</svg>`}const ke=172,ld=360,cd=46,Ho=96,Jy=1200,Qy=["N","NE","E","SE","S","SW","W","NW"],hd='"Cormorant Garamond", Georgia, serif';function Zy(r,t){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),i=n.createImageData(t,t),s=i.data,o=new Float32Array(t*t),a=new Float32Array(t*t);for(let d=0;d<t;d++)for(let f=0;f<t;f++){const m=-ne+(f+.5)/t*ns,b=-ne+(d+.5)/t*ns;o[d*t+f]=r.heightAt(m,b),a[d*t+f]=r.forestMask(m,b)}const l=(d,f)=>o[Math.min(t-1,Math.max(0,f))*t+Math.min(t-1,Math.max(0,d))],c=(d,f)=>{const m=Math.sin(d*127.1+f*311.7)*43758.5453;return m-Math.floor(m)},h=Math.max(1,Math.round(t/270));for(let d=0;d<t;d++)for(let f=0;f<t;f++){const m=d*t+f,b=o[m],g=b>=te,p=Math.max(-1,Math.min(1,(l(f-h,d-h)-l(f+h,d+h))*.09));let v,_,x;if(g)if(b<te+2.2)v=228,_=208,x=160;else if(b>95)v=250,_=247,x=240;else if(b>55){const T=Math.min(1,(b-55)/40);v=196-T*24,_=168-T*24,x=128-T*18}else v=232,_=222,x=186,a[m]>.1&&(v-=26,_-=6,x-=34);else{const T=Math.min(1,-b/28);v=178-T*38,_=202-T*30,x=196-T*22,(f+d)%7===0&&(v-=9,_-=9,x-=6)}if(g){const T=1+p*.32;v*=T,_*=T,x*=T,(Math.floor(b/10)!==Math.floor(l(f+1,d)/10)||Math.floor(b/10)!==Math.floor(l(f,d+1)/10))&&(v*=.86,_*=.84,x*=.8),a[m]>.12&&b<55&&c(f,d)<.13&&(v=92,_=120,x=70)}(g!==l(f+1,d)>=te||g!==l(f,d+1)>=te)&&(v=88,_=68,x=44);const y=.95+c(f*3.1,d*1.7)*.07,M=m*4;s[M]=v*y,s[M+1]=_*y,s[M+2]=x*y,s[M+3]=255}n.putImageData(i,0,0);const u=n.createRadialGradient(t/2,t/2,t*.38,t/2,t/2,t*.74);return u.addColorStop(0,"rgba(60,40,15,0)"),u.addColorStop(1,"rgba(60,40,15,0.42)"),n.fillStyle=u,n.fillRect(0,0,t,t),e}class $y{constructor(t){this.terrain=t,this.el={time:document.getElementById("hudTime"),biome:document.getElementById("hudBiome"),pos:document.getElementById("hudPos"),shards:document.getElementById("hudShards"),shardBox:document.getElementById("shardCounter"),compass:document.getElementById("compass"),minimap:document.getElementById("minimap"),hint:document.getElementById("hint"),tint:document.getElementById("tint"),toast:document.getElementById("toast"),moment:document.getElementById("moment"),letterbox:document.getElementById("letterbox")};const e=Math.min(devicePixelRatio,2),n={compass:[ld,cd],minimap:[ke,ke]};for(const i of["compass","minimap"]){const[s,o]=n[i],a=this.el[i];a.width=s*e,a.height=o*e,this[i+"Ctx"]=a.getContext("2d"),this[i+"Ctx"].scale(e,e)}this.hintTimer=14,this.biomeTimer=0,this.idleT=0,this.exploration={N:Ho,grid:new Uint8Array(Ho*Ho)},this._fogCanvas=document.createElement("canvas"),this._fogCanvas.width=this._fogCanvas.height=Ho,this.worlds=null,this.orbs=null,this.mapBase=null,this.mapHalf=ne,this.fogOn=!0,this._toastTimer=null,this._lastShards=-1,this._momentQ=[],this._momentBusy=!1}bind(t,e){this.worlds=t,this.orbs=e,this.updateShards()}setWorld(t){this.fogOn=t==="nature",this.mapHalf=this.fogOn?ne:this.worlds?.city?.mapHalf||Jy,this.mapBase=this.worlds.mapBase(ke,t)}sites(){return this.worlds?this.worlds.sites():[]}poke(){this.idleT=0}updateShards(){if(!(!this.orbs||!this.el.shards)){if(this.el.shards.textContent=`${this.orbs.count}/${this.orbs.total}`,this._lastShards>=0&&this.orbs.count>this._lastShards){const t=this.el.shardBox;t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse"),this.poke()}this._lastShards=this.orbs.count}}toast(t,e=""){const n=this.el.toast;n&&(n.innerHTML=`<b>${t}</b>${e?`<span>${e}</span>`:""}`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>n.classList.remove("show"),3600),this.poke())}moment({kicker:t,title:e,sub:n="",world:i=!1,ms:s=5200}){this._momentQ.push({kicker:t,title:e,sub:n,world:i,ms:s}),this._momentBusy||this._nextMoment()}_nextMoment(){const t=this._momentQ.shift();if(!t){this._momentBusy=!1;return}this._momentBusy=!0;const e=this.el.moment;e.classList.toggle("world",!!t.world),e.querySelector(".m-kicker").textContent=t.kicker,e.querySelector(".m-title").textContent=t.title,e.querySelector(".m-sub").textContent=t.sub,this.el.letterbox.classList.add("on"),requestAnimationFrame(()=>e.classList.add("show")),this.poke(),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>{this._momentQ.length||this.el.letterbox.classList.remove("on"),this._nextMoment()},1100)},t.ms)}discover(t){const e=tM(t);this.moment({kicker:e?`Discovered · ${e}`:"Discovered",title:t.name,sub:t.flavor})}arrive(t){this.moment(t==="city"?{kicker:"You have arrived",title:"New York",sub:"The other side of the gate is another world.",world:!0,ms:4200}:{kicker:"Home again",title:"The Wilds",sub:"The valley missed you.",world:!0,ms:4200})}setUnderwater(t){this.el.tint.style.opacity=t?1:0}update(t,e,n,i){const s=n.time*24,o=Math.floor(s),a=Math.floor((s-o)*60);if(this.el.time.textContent=`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`,this.el.pos.textContent=`${Math.round(e.pos.x)}, ${Math.round(e.pos.z)} · ${Math.round(e.pos.y)} m`,this.biomeTimer-=t,this.biomeTimer<=0){this.biomeTimer=.25;const l=this.worlds?.biomeName(e.pos.x,e.pos.z);this.el.biome.textContent=l||this._biomeNature(e.pos.x,e.pos.z)}if(this.idleT=i?this.idleT+t:0,document.body.classList.toggle("idle",i&&this.idleT>7),i&&this.hintTimer>0&&(this.hintTimer-=t,this.hintTimer<=0&&this.el.hint.classList.add("faded")),this.fogOn){const{N:l,grid:c}=this.exploration,h=ns/l,u=Math.floor((e.pos.x+ne)/h),d=Math.floor((e.pos.z+ne)/h),f=Math.ceil(70/h);for(let m=-f;m<=f;m++)for(let b=-f;b<=f;b++){const g=u+b,p=d+m;g<0||p<0||g>=l||p>=l||b*b+m*m>f*f||(c[p*l+g]=1)}}i&&(this._drawCompass(e),this._drawMinimap(e))}_biomeNature(t,e){const n=this.terrain.heightAt(t,e);return n<te-.5?"Water":n<te+2.5?"Shore":n>95?"Snowcaps":n>55||this.terrain.slopeAt(t,e)>.9?"Highlands":this.terrain.forestMask(t,e)>.12?"Forest":"Meadow"}_drawCompass(t){const e=this.compassCtx,n=ld,i=cd;e.clearRect(0,0,n,i);const s=(-t.yaw*180/Math.PI%360+360)%360,o=2.4,a=i-12;e.strokeStyle="rgba(255,255,255,0.22)",e.lineWidth=1,e.beginPath(),e.moveTo(0,a+.5),e.lineTo(n,a+.5),e.stroke();const l=Math.floor((s-80)/5)*5;e.textAlign="center";for(let c=l;c<=s+80;c+=5){const h=n/2+(c-s)*o,u=(c%360+360)%360,d=u%45===0;if(e.strokeStyle=`rgba(255,255,255,${d?.85:.35})`,e.beginPath(),e.moveTo(h,a),e.lineTo(h,a-(d?8:u%15===0?5:3)),e.stroke(),d){const f=u%90===0;e.fillStyle=u===0?"#f3b9a0":"rgba(255,255,255,0.92)",e.font=f?`600 17px ${hd}`:`500 12px ${hd}`,e.fillText(Qy[u/45],h,a-13)}}for(const c of this.sites()){if(!c.discovered)continue;const h=c.x-t.pos.x,u=c.z-t.pos.z;if(Math.hypot(h,u)>500)continue;let m=(Math.atan2(-h,-u)*180/Math.PI%360+360)%360-s;for(;m>180;)m-=360;for(;m<-180;)m+=360;if(Math.abs(m)>78)continue;const b=n/2+m*o;Hs(e,c.type,b,a-22,4.2)}e.fillStyle="#f3d697",e.beginPath(),e.moveTo(n/2,a+2),e.lineTo(n/2-4.5,a+9),e.lineTo(n/2+4.5,a+9),e.closePath(),e.fill()}_drawMinimap(t){const e=this.minimapCtx,n=this.mapHalf,i=n*2,s=ke/2;if(e.clearRect(0,0,ke,ke),e.save(),e.beginPath(),e.arc(s,s,s-1,0,Math.PI*2),e.clip(),e.drawImage(this.mapBase,0,0,ke,ke),this.fogOn){const{N:c,grid:h}=this.exploration,u=this._fogCanvas.getContext("2d");u.clearRect(0,0,c,c),u.fillStyle="rgba(30, 22, 12, 0.78)";for(let d=0;d<c;d++)for(let f=0;f<c;f++)h[d*c+f]||u.fillRect(f,d,1,1);e.imageSmoothingEnabled=!0,e.drawImage(this._fogCanvas,0,0,ke,ke)}const o=(t.pos.x+n)/i*ke,a=(t.pos.z+n)/i*ke;for(const c of this.sites()){if(!c.discovered)continue;const h=(c.x+n)/i*ke,u=(c.z+n)/i*ke;h<-8||u<-8||h>ke+8||u>ke+8||(e.fillStyle="rgba(5, 9, 15, 0.55)",e.beginPath(),e.arc(h,u,6,0,Math.PI*2),e.fill(),Hs(e,c.type,h,u,4))}const l=this.worlds?.gateMarker?.();if(l){let c=(l.x+n)/i*ke,h=(l.z+n)/i*ke;if(c>-30&&h>-30&&c<ke+30&&h<ke+30){const u=c-s,d=h-s,f=Math.hypot(u,d),m=s-16;f>m&&(c=s+u/f*m,h=s+d/f*m);const b=performance.now()*.004,g=10+Math.sin(b)*2.5;e.strokeStyle="rgba(203, 184, 245, 0.95)",e.lineWidth=2,e.beginPath(),e.arc(c,h,g,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(10, 8, 20, 0.88)",e.beginPath(),e.arc(c,h,8.5,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(159, 127, 232, 0.9)",e.lineWidth=1.5,e.beginPath(),e.arc(c,h,8.5,0,Math.PI*2),e.stroke(),Hs(e,"gate",c,h,5.5)}}e.save(),e.translate(o,a),e.rotate(-t.yaw),e.fillStyle="rgba(255,255,255,0.34)",e.beginPath(),e.moveTo(0,0),e.arc(0,0,24,-Math.PI/2-.5,-Math.PI/2+.5),e.closePath(),e.fill(),e.restore(),e.fillStyle="#fff",e.strokeStyle="rgba(0,0,0,0.65)",e.lineWidth=1.5,e.beginPath(),e.arc(o,a,3.2,0,Math.PI*2),e.fill(),e.stroke(),e.restore(),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=1.5,e.beginPath(),e.arc(s,s,s-1,0,Math.PI*2),e.stroke(),e.fillStyle="#f3d697",e.beginPath(),e.moveTo(s,2),e.lineTo(s-4,10),e.lineTo(s+4,10),e.closePath(),e.fill()}}function tM(r){const t=Bs[r.type]?.label;return t?t.replace(/\b\w/g,e=>e.toUpperCase()):""}const eM=["ruin_tower","lighthouse","windmill_body","windmill_blades","stone_arch","shipwreck","tent","campfire","monolith","shrine_pedestal"],nM={lighthouse:{count:2,discoverR:70,color:16765534,place:(r,t,e)=>{const n=r.heightAt(t,e);if(n<16||n>64||r.slopeAt(t,e)>.42)return!1;for(let i=0;i<8;i++){const s=i/8*Math.PI*2;if(r.heightAt(t+Math.cos(s)*90,e+Math.sin(s)*90)<te||r.heightAt(t+Math.cos(s)*140,e+Math.sin(s)*140)<te)return!0}return!1},names:[["Gull Point","Beacon Bay","Fogwatch","Saltwick","Lantern Shore"],["Lighthouse"]],flavor:["Its lamp has turned for longer than anyone remembers.","Sailors say the keeper left one night and never came back."]},shipwreck:{count:2,discoverR:60,color:13208922,place:(r,t,e)=>{const n=r.heightAt(t,e);return n>.1&&n<1.8&&r.slopeAt(t,e)<.45},names:[["The Marlin","The Merrow","Lady Vera","The Tidesong","The Halcyon"],["Shipwreck"]],flavor:["The tide buried her bones, then dug them up again.","Her bell still rings somewhere under the sand."]},windmill:{count:2,discoverR:65,color:15261122,place:(r,t,e)=>{const n=r.heightAt(t,e);return n>12&&n<42&&r.slopeAt(t,e)<.3&&r.forestMask(t,e)<.05},names:[["Millers'","Old","Highfield","Westmeadow","Stonehill"],["Windmill"]],flavor:["The sails still turn, though the miller is long gone.","On windy nights the old stones hum a low note."]},ruinTower:{count:2,discoverR:65,color:10327690,place:(r,t,e)=>{const n=r.heightAt(t,e);return n>8&&n<58&&r.slopeAt(t,e)<.45},names:[["Broken","Hollow","Elder","Greyspire","Forgotten"],["Watchtower","Keep","Tower"]],flavor:["Someone lit torches here. Someone still does.","The stairs ended half-way up, centuries ago."]},stoneCircle:{count:2,discoverR:60,color:9427139,place:(r,t,e)=>{const n=r.heightAt(t,e);return n>4&&n<30&&r.slopeAt(t,e)<.22&&r.forestMask(t,e)<.12},names:[["Whispering","Standing","Elderfire","Moonfall","Singers'"],["Stones","Circle","Ring"]],flavor:["The stones hum faintly when the moon is high.","Nine stones, eight keepers — the ninth walked away."]},shrine:{count:2,discoverR:55,color:10473727,place:(r,t,e)=>{const n=r.heightAt(t,e);return n>6&&n<42&&r.slopeAt(t,e)<.32&&r.forestMask(t,e)>.1},names:[["Stillwater","Greenhollow","Firstlight","Deepwood","Quiet Pool"],["Shrine"]],flavor:["Something bright hovers above the pedestal, patient.","Leave an offering, or don't — it doesn't seem to mind."]},arch:{count:2,discoverR:75,color:11839117,place:(r,t,e)=>r.heightAt(t,e)>42&&r.slopeAt(t,e)<.55,names:[["Windgate","Eagle","Giants'","Skyhole","Highpass"],["Arch","Gate","Span"]],flavor:["The wind sings a single note as it pours through.","From beneath it, the whole valley lies open like a map."]},camp:{count:2,discoverR:55,color:14719326,place:(r,t,e)=>{const n=r.heightAt(t,e);return n>5&&n<24&&r.slopeAt(t,e)<.2&&r.forestMask(t,e)<.08},names:[["Foxglove","Two Rivers","Herder's","Pine Edge","Starfall"],["Camp","Campsite","Rest"]],flavor:["The fire is banked, but recent. Someone circles back.","A kettle, three cups, and no owners in sight."]}};async function iM(){const r=new ir,t=await Promise.all(eM.map(e=>r.loadAsync(`assets/${e}.glb`).then(n=>[e,n.scene]).catch(()=>(console.warn(`[pois] asset missing: ${e}.glb (run tools/build_assets.py)`),[e,null]))));return Object.fromEntries(t)}class sM{constructor(t,e,n,i,s){this.terrain=t,this.scene=e,this.env=s,this.sites=[],this.onDiscover=null;const o=ss((n^1511506142)>>>0),a=ne*.86;for(const[c,h]of Object.entries(nM)){let u=0;for(let d=0;d<22e3&&u<h.count;d++){const f=(o()*2-1)*a,m=(o()*2-1)*a;if(!h.place(t,f,m)||this.sites.some(p=>Math.hypot(p.x-f,p.z-m)<340))continue;const[b,g]=h.names;this.sites.push({id:`${c}-${u}`,type:c,x:f,z:m,y:t.heightAt(f,m),name:`${b[Math.floor(o()*b.length)]} ${g[Math.floor(o()*g.length)]}`,flavor:h.flavor[Math.floor(o()*h.flavor.length)],color:h.color,discoverR:h.discoverR,discovered:!1,rand:o}),u++}}const l=c=>{const h=i[c];if(!h)return null;const u=h.clone(!0);return u.traverse(d=>{if(d.isMesh){d.castShadow=!0,d.receiveShadow=!0;const f=d.material?.name;if(f==="rune"||f==="lantern"||f==="lh_lamp"){d.material=d.material.clone(),d.castShadow=!1;const m={mat:d.material,kind:f,base:d.material.emissiveIntensity||1,idx:0,n:1,phase:Math.random()*10};this.glows.push(m),(u.userData.glows||=[]).push(m)}}}),u};this.smoke=new Lf(e),this.flames=[],this.spinners=[],this.beams=[],this.crystals=[],this.banners=[],this.glows=[],this.orbiters=[],this.lanternBulbs=[],this._bulbCol=new $,this.colliders=new Qs,this._v=new E;for(const c of this.sites){const h=new ye;h.position.set(c.x,c.y-.15,c.z),c.group=h,e.add(h);const u=c.rand;this[`_build_${c.type}`]?.(c,h,l,u)}}_cyl(t,e,n,i,s){this.colliders.addCylinder(t.x+e,t.z+n,i,t.y-.15,t.y-.15+s)}_box(t,e,n,i,s,o,a=0,l=0){this.colliders.addBox(t.x+e,t.z+n,i,s,t.y-.15+l,t.y-.15+l+o,a)}_build_lighthouse(t,e,n,i){const s=n("lighthouse");s&&(s.rotation.y=i()*Math.PI*2,e.add(s)),this._cyl(t,0,0,3,14);const o=new ye;o.position.y=12.35;const a=(d,f,m,b)=>{const g=new wa(d,260,20,1,!0);return g.rotateX(Math.PI/2),g.translate(0,0,-130),new Pt(g,Zu(f,{length:260,axis:"z",fall:m,soft:b}))},l=a(22,16769952,1.5,1.4),c=a(7,16774352,1,1.1);o.add(l,c);const h=l.material,u=Hn(16771496,7);u.position.y=12.35,e.add(u),e.add(o),this.beams.push({group:o,coneMat:h,coreMat:c.material,halo:u,isBeam:!0})}_build_shipwreck(t,e,n,i){const s=n("shipwreck"),o=i()*Math.PI*2;s&&(s.rotation.set(.12,o,.2),s.position.y-=.5,e.add(s)),this._box(t,0,0,4.5,1.7,2,o);const a=new oe({color:6048307,roughness:1}),l=new En(2.2,.12,.4);for(let u=0;u<5;u++){const d=new Pt(l,a),f=i()*Math.PI*2,m=4+i()*6;d.position.set(Math.cos(f)*m,-.05+i()*.15,Math.sin(f)*m),d.rotation.set(i()*.4,i()*Math.PI*2,i()*.5),d.castShadow=!0,e.add(d)}const c=new Pt(new je(.5,.44,1,9),new oe({color:7031347,roughness:1})),h=i()*Math.PI*2;c.position.set(Math.cos(h)*5,.4,Math.sin(h)*5),c.rotation.z=.35,c.castShadow=!0,e.add(c)}_build_windmill(t,e,n,i){const s=new ye,o=i()*Math.PI*2;s.rotation.y=o,e.add(s),this._cyl(t,0,0,3,11);const a=n("windmill_body");a&&s.add(a);const l=n("windmill_blades");if(l){const c=new ye;c.position.set(0,9.6,-2.15),c.add(l),s.add(c),this.spinners.push({obj:l,axis:"z",speed:.55+i()*.2,dir:i()>.5?1:-1})}}_build_ruinTower(t,e,n,i){const s=n("ruin_tower");s&&(s.rotation.y=i()*Math.PI*2,e.add(s)),this._cyl(t,0,0,3.05,9);const o=new oe({color:4864038,roughness:1});for(const a of[-1,1]){const l=new Pt(new je(.07,.09,2.2,6),o);l.position.set(a*2.2,.95,3.6),l.castShadow=!0,e.add(l),this.addFlame(e,a*2.2,2.15,3.6,.7)}}_build_stoneCircle(t,e,n,i){for(let c=0;c<9;c++){const h=c/9*Math.PI*2+i()*.12,u=n("monolith");if(!u)break;const d=i()*Math.PI*2,f=.85+i()*.3;u.position.set(Math.cos(h)*6.5,0,Math.sin(h)*6.5),u.rotation.set((i()-.5)*.12,d,(i()-.5)*.12),u.scale.setScalar(f),e.add(u);for(const m of u.userData.glows||[])m.idx=c,m.n=9,m.mat.emissive.set(6742208);this._box(t,Math.cos(h)*6.5,Math.sin(h)*6.5,.78*f,.46*f,3.6*f,d)}const a=new Pt(new Jr(6.5,.07,6,40),new $e({color:8381384,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));a.rotation.x=Math.PI/2,a.position.y=.12,e.add(a),this.beams.push({group:null,coneMat:a.material,halo:null,isRing:!0});const l=new oe({color:8682863,roughness:1,flatShading:!0});for(let c=0;c<3;c++){const h=new Pt(new Ir(.42-c*.1,0),l);h.position.set((i()-.5)*.1,.25+c*.5,(i()-.5)*.1),h.castShadow=!0,e.add(h)}this._cyl(t,0,0,.5,1.2)}_build_shrine(t,e,n,i){const s=n("shrine_pedestal");s&&(s.rotation.y=i()*Math.PI*2,e.add(s)),this._cyl(t,0,0,1.05,1.5);const o=[8381384,11902463,16765534,9422847],a=new $(o[Math.floor(i()*o.length)]);for(const p of s?.userData.glows||[])p.mat.emissive.copy(a),p.kind="inlay";const l=[[0,-.78],[.3,-.18],[.34,.22],[0,.8]].map(([p,v])=>new rt(p,v)),c=new Pt(new Ta(l,6),new Vn({color:a,emissive:a,emissiveIntensity:3,roughness:.1,metalness:0,clearcoat:1,iridescence:.9,iridescenceIOR:1.6,flatShading:!0,envMapIntensity:1.6})),h=2.5;c.position.y=h,c.castShadow=!0;const u=Hn(a.getHex(),3.2);u.position.y=h;const d=new es(a.getHex(),0,16,1.8);d.position.y=h+.2,e.add(c,u,d);const f=new Pt(new je(1.1,.14,16,16,1,!0),Zu(a,{length:16,axis:"y",fall:.9,soft:1.7,centered:!0}));f.position.y=h+8.2,e.add(f);const m=new ih(.09),b=new $e({color:a.clone().multiplyScalar(2.5)}),g=[];for(let p=0;p<6;p++){const v=new Pt(m,b);e.add(v),g.push({m:v,a:p/6*Math.PI*2,rad:.9+p%2*.25,h:p%3*.25-.2,sp:.7+p%3*.2})}this.orbiters.push({baseY:h,list:g}),this.crystals.push({mesh:c,halo:u,light:d,baseY:h,phase:i()*Math.PI*2,shaft:f})}_build_arch(t,e,n,i){const s=n("stone_arch"),o=i()*Math.PI*2;s&&(s.rotation.y=o,e.add(s));const a=Math.cos(o),l=Math.sin(o);for(const h of[-7.4,7.4])this._cyl(t,h*a-1.5*l,h*l+1.5*a,2.5,4.5);const c=new oe({color:8155747,roughness:1,flatShading:!0});for(let h=0;h<4;h++){const u=new Pt(new Ir(.5+i()*.7,0),c),d=i()*Math.PI*2,f=8+i()*5;u.position.set(Math.cos(d)*f,.2,Math.sin(d)*f),u.castShadow=!0,e.add(u),this._cyl(t,Math.cos(d)*f,Math.sin(d)*f,.7,.9)}for(let h=0;h<3;h++){const u=new Pt(new Ir(.34-h*.08,0),c);u.position.set(9,.2+h*.42,-3),e.add(u)}this._cyl(t,9,-3,.45,1.3)}_build_camp(t,e,n,i){const s=n("tent"),o=i()*Math.PI*2;s&&(s.rotation.y=o,e.add(s)),this._box(t,0,0,1.35,1.6,1.95,o);const a=n("tent");if(a){a.scale.setScalar(.78);const w=i()*Math.PI*2;a.position.set(Math.cos(w)*6.5,0,Math.sin(w)*6.5);const S=i()*Math.PI*2;a.rotation.y=S,e.add(a),this._box(t,Math.cos(w)*6.5,Math.sin(w)*6.5,1.05,1.25,1.5,S)}const l=n("campfire");l&&e.add(l),this._cyl(t,0,0,.95,.3),this.addFlame(e,0,.15,0,1),this.smoke.addEmitter(new E(t.x,t.y+1.5,t.z),1.6,1);const c=new oe({color:7031347,roughness:1}),h=new En(.9,.9,.9);for(let w=0;w<2;w++){const S=new Pt(h,c),P=i()*Math.PI*2;S.position.set(Math.cos(P)*3.4,.45+w*.9,Math.sin(P)*3.4),S.rotation.y=i()*Math.PI,S.castShadow=!0,e.add(S),this._cyl(t,Math.cos(P)*3.4,Math.sin(P)*3.4,.55,.9+w*.9)}const u=new Pt(new je(.06,.08,4.2,6),c);u.position.set(4.4,2.1,0),u.castShadow=!0,e.add(u),this._cyl(t,4.4,0,.1,4.2);const d=new vn(1.5,1,6,3);d.translate(.75,-.5,0);const f=new oe({color:13063727,roughness:1,side:xe}),m=new Pt(d,f);m.position.set(4.4,4,0),e.add(m),this.banners.push({mesh:m,base:i()*Math.PI*2,phase:i()*10});const b=(w,S,P)=>[w*Math.cos(P)+S*Math.sin(P),-w*Math.sin(P)+S*Math.cos(P)],[g,p]=b(0,-1.85,o),v=[new E(g,1.5,p),new E(4.4,4.05,0)];a&&v.push(a.position.clone().add(new E(0,1.35,0))),v.push(new E(-3.2,1.2,-2.6));const _=new Di(.075,8,6),x=new ba({color:2760728}),y=[];for(let w=0;w<v.length-1;w++){const S=v[w],P=v[w+1],I=[],z=18,H=.5+S.distanceTo(P)*.08;for(let G=0;G<=z;G++){const X=G/z;I.push(new E().lerpVectors(S,P,X).add(new E(0,-H*4*X*(1-X),0)))}e.add(new _a(new ee().setFromPoints(I),x));for(let G=2;G<z;G+=3)y.push(I[G])}const M=new Pe(_,new $e({color:16777215}),y.length),T=[],R=new At;y.forEach((w,S)=>{R.makeTranslation(w.x,w.y,w.z),M.setMatrixAt(S,R),M.setColorAt(S,new $(1,.78,.45)),T.push(i()*10)}),M.frustumCulled=!1,e.add(M),this.lanternBulbs.push({inst:M,phases:T})}addFlame(t,e,n,i,s){const o=Pf(s);o.position.set(e,n,i),t.add(o);const a=new es(16751172,0,20,1.6);a.position.set(e,n+.6,i),t.add(a),this.flames.push({mesh:o,light:a,phase:Math.random()*10}),this.smoke.addEmitter(new E(t.position.x+e,t.position.y+n+1*s,t.position.z+i),s*1.1,s)}discover(t){t.discovered=!0,this.onDiscover?.(t)}discoverAll(){for(const t of this.sites)t.discovered=!0}update(t,e,n,i){const s=1-i.daylight;for(const a of this.sites){if(a.discovered)continue;Math.hypot(e.x-a.x,e.z-a.z)<a.discoverR&&Math.abs(e.y-a.y)<60&&this.discover(a)}for(const a of this.spinners)a.obj.rotation[a.axis]+=t*a.speed*(.4+this.env.wind.value*.6)*a.dir;for(const a of this.banners)a.mesh.rotation.y=a.base+Math.sin(n*1.8+a.phase)*(.18+this.env.wind.value*.3),a.mesh.rotation.z=Math.sin(n*2.6+a.phase)*.08*this.env.wind.value;for(const a of this.flames){a.mesh.material.uniforms.uTime.value=n+a.phase;const l=.75+.35*Math.sin(n*11+a.phase*7)*Math.sin(n*5.1+a.phase);a.mesh.material.uniforms.uIntensity.value=.85*l;const c=a.mesh.getWorldPosition(this._v).distanceTo(e)<260;a.light.visible=c,a.light.intensity=c?(.35+2.6*s)*l:0}for(const a of this.beams){a.group&&(a.group.rotation.y=n*.55);const l=Math.pow(s,1.4);a.isBeam?(a.coneMat.uniforms.uOpacity.value=l*.55,a.coreMat.uniforms.uOpacity.value=l*.9):a.isRing?a.coneMat.opacity=l*.35*(.8+.2*Math.sin(n*1.5)):a.coneMat.opacity=l*.22,a.halo&&(a.halo.material.opacity=Math.min(1,.15+l))}const o=Math.pow(s,1.2);for(const a of this.glows)if(a.kind==="lh_lamp")a.mat.emissiveIntensity=a.base*(.12+.88*o);else if(a.kind==="lantern")a.mat.emissiveIntensity=a.base*(.05+.95*o)*(.9+.1*Math.sin(n*7+a.phase));else if(a.kind==="rune"){const l=.5+.5*Math.cos(n*.8-a.idx/Math.max(1,a.n)*Math.PI*2);a.mat.emissiveIntensity=o*(.25+3.2*Math.pow(l,3))}else a.kind==="inlay"&&(a.mat.emissiveIntensity=o*(1.6+1*Math.sin(n*2+a.phase)));for(const a of this.lanternBulbs)a.phases.forEach((l,c)=>{const h=.18+2.6*o*(.92+.08*Math.sin(n*5+l));a.inst.setColorAt(c,this._bulbCol.setRGB(1*h,.78*h,.45*h))}),a.inst.instanceColor.needsUpdate=!0;for(const a of this.crystals){a.mesh.rotation.y+=t*.8,a.mesh.position.y=a.baseY+Math.sin(n*1.3+a.phase)*.18,a.halo.position.y=a.mesh.position.y;const l=.85+.15*Math.sin(n*2.2+a.phase),c=a.mesh.getWorldPosition(this._v).distanceTo(e)<260;a.light.visible=c,a.light.intensity=c?s*1.6*l:0,a.mesh.material.emissiveIntensity=2+s*2.6*l,a.shaft&&(a.shaft.material.uniforms.uOpacity.value=(.1+.9*s)*.5*l)}for(const a of this.orbiters)a.list.forEach((l,c)=>{const h=l.a+n*l.sp;l.m.position.set(Math.cos(h)*l.rad,a.baseY+l.h+Math.sin(n*1.3+c)*.12,Math.sin(h)*l.rad),l.m.rotation.y=h*2});this.smoke.update(t,this.env.wind.value,n)}}async function rM(r,t,e,n){const i=await iM();return new sM(r,t,e,i,n)}const oM=40,Vi=[9169407,10875080,13677567,16767400];class aM{constructor(t,e,n,i,s=[]){this.terrain=t,this.onCollect=null,this.onComplete=null,this.collected=new Set(s);const o=ss((n^196463229)>>>0),a=[];for(const u of i.sites){const d=o()*Math.PI*2,f=9+o()*16;a.push({x:u.x+Math.cos(d)*f,z:u.z+Math.sin(d)*f,site:u})}let l=0;for(;a.length<oM&&l++<2e4;){const u=(o()*2-1)*ne*.88,d=(o()*2-1)*ne*.88;t.heightAt(u,d)<te+1.2||t.slopeAt(u,d)>.6||a.some(m=>Math.hypot(m.x-u,m.z-d)<90)||a.push({x:u,z:d,site:null})}const c=new Ta([new rt(0,-.52),new rt(.2,-.16),new rt(.2,.18),new rt(0,.62)],6),h=new oe({color:16777215,roughness:.12,flatShading:!0});h.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float rim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.0);
         totalEmissiveRadiance = diffuseColor.rgb * (1.6 + 2.4 * rim);`)},this.mesh=new Pe(c,h,a.length),this.mesh.instanceMatrix.setUsage(zs),this.mesh.frustumCulled=!1,e.add(this.mesh),a.forEach((u,d)=>this.mesh.setColorAt(d,new $(Vi[d%Vi.length]))),this.mesh.instanceColor.needsUpdate=!0,this._initSparkles(e,a,Vi),this._initBurst(e),this.halos=a.map((u,d)=>{const f=Vi[d%Vi.length],m=Hn(f,2.2);return m.position.set(u.x,t.heightAt(u.x,u.z)+1.4,u.z),e.add(m),m}),this.items=a.map((u,d)=>({x:u.x,z:u.z,y:t.heightAt(u.x,u.z)+1.4,phase:o()*Math.PI*2,id:d,site:u.site,taken:this.collected.has(d)})),this.total=this.items.length,this._m=new At,this._q=new ve,this._e=new qe,this._v=new E,this._s=new E,this._done=!1}get count(){return this.collected.size}collectAll(){for(const t of this.items)t.taken||(t.taken=!0,this.collected.add(t.id))}update(t,e,n){for(let i=0;i<this.items.length;i++){const s=this.items[i];if(s.taken){this._m.makeScale(0,0,0),this.mesh.setMatrixAt(i,this._m),this.halos[i].visible=!1;continue}if(!this._done){const a=e.x-s.x,l=e.y+1-s.y,c=e.z-s.z;if(a*a+l*l+c*c<6.2){s.taken=!0,this.collected.add(s.id),this._burst(s.x,s.y+Math.sin(n*1.6+s.phase)*.22,s.z,Vi[s.id%Vi.length]),this.onCollect?.(s),this.collected.size>=this.total&&(this._done=!0,this.onComplete?.());continue}}const o=s.y+Math.sin(n*1.6+s.phase)*.22;this._e.set(n*.9+s.phase,n*1.3+s.phase,0),this._q.setFromEuler(this._e),this._v.set(s.x,o,s.z),this._s.setScalar(1),this._m.compose(this._v,this._q,this._s),this.mesh.setMatrixAt(i,this._m),this.halos[i].position.y=o,this.halos[i].material.opacity=.22+.1*Math.sin(n*2+s.phase)}this.mesh.instanceMatrix.needsUpdate=!0,this._updateSparkles(n),this._updateBurst(t)}_initSparkles(t,e,n){const s=e.length*5;this._sp={n:s,per:5,centers:e};const o=new Float32Array(s*3),a=new Float32Array(s*3),l=new $;for(let h=0;h<s;h++)l.setHex(n[Math.floor(h/5)%n.length]).multiplyScalar(2.6),a.set([l.r,l.g,l.b],h*3);const c=new ee;c.setAttribute("position",new Ot(o,3)),c.setAttribute("color",new Ot(a,3)),this._spPos=o,this.sparkles=new mi(c,new Qt({uniforms:{uPR:{value:Math.min(devicePixelRatio,2)}},vertexShader:`
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
        }`,transparent:!0,blending:Fe,depthWrite:!1,fog:!1})),this.sparkles.frustumCulled=!1,t.add(this.sparkles)}_updateSparkles(t){const{n:e,per:n}=this._sp,i=this._spPos;for(let s=0;s<e;s++){const o=this.items[Math.floor(s/n)];if(o.taken){i[s*3+1]=-1e3;continue}const a=s%n,l=t*(.9+a*.17)+o.phase*3+a*1.26,c=.62+.18*Math.sin(t*1.3+a),h=o.y+Math.sin(t*1.6+o.phase)*.22+Math.sin(l*1.7)*.4;i[s*3]=o.x+Math.cos(l)*c,i[s*3+1]=h,i[s*3+2]=o.z+Math.sin(l)*c}this.sparkles.geometry.attributes.position.needsUpdate=!0}_initBurst(t){this._b={cap:160,next:0,rings:[]};const n=new Float32Array(480).fill(-1e3),i=new Float32Array(480);this._bVel=new Float32Array(480),this._bLife=new Float32Array(160);const s=new ee;s.setAttribute("position",new Ot(n,3)),s.setAttribute("color",new Ot(i,3)),this._bPos=n,this._bCol=i,this.burstPts=new mi(s,this.sparkles.material.clone()),this.burstPts.frustumCulled=!1,t.add(this.burstPts);for(let o=0;o<4;o++){const a=Hn(16777215,1);a.visible=!1,t.add(a),this._b.rings.push({spr:a,age:9})}}_burst(t,e,n,i){const s=this._b,o=new $(i).multiplyScalar(3);for(let l=0;l<28;l++){const c=s.next;s.next=(s.next+1)%s.cap;const h=Math.random()*Math.PI*2,u=(Math.random()-.2)*1.2,d=2.5+Math.random()*4.5;this._bPos.set([t,e,n],c*3),this._bVel.set([Math.cos(h)*Math.cos(u)*d,Math.sin(u)*d+1.5,Math.sin(h)*Math.cos(u)*d],c*3),this._bCol.set([o.r,o.g,o.b],c*3),this._bLife[c]=.7+Math.random()*.5}const a=s.rings.find(l=>l.age>1)||s.rings[0];a.age=0,a.spr.position.set(t,e,n),a.spr.material.color.copy(o).multiplyScalar(.8),a.spr.visible=!0}_updateBurst(t){const e=this._b,n=this._bPos,i=this._bVel,s=this._bCol;let o=!1;for(let a=0;a<e.cap;a++)this._bLife[a]<=0||(o=!0,this._bLife[a]-=t,i[a*3+1]-=5.5*t,n[a*3]+=i[a*3]*t,n[a*3+1]+=i[a*3+1]*t,n[a*3+2]+=i[a*3+2]*t,Math.max(0,this._bLife[a]/1.2),s[a*3]*=.97,s[a*3+1]*=.97,s[a*3+2]*=.97,this._bLife[a]<=0&&(n[a*3+1]=-1e3));o&&(this.burstPts.geometry.attributes.position.needsUpdate=!0,this.burstPts.geometry.attributes.color.needsUpdate=!0);for(const a of e.rings){if(a.age>1){a.spr.visible=!1;continue}a.age+=t*1.8,a.spr.scale.setScalar(.6+a.age*6.5),a.spr.material.opacity=Math.max(0,1-a.age)}}}function ud(r,t,e,n){return r.onBeforeCompile=i=>{i.uniforms.uTime=t,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3][0] * 0.37 + instanceMatrix[3][2] * 0.29;
        float flap = sin(uTime * ${n.toFixed(1)} + ph);
        transformed.y += abs(transformed.x) * flap * ${e.toFixed(2)};
      #endif
    `)},r}function lM(){const r=new Float32Array([0,0,-.55,-.07,.03,.1,.07,.03,.1,0,0,-.55,.07,-.02,.1,-.07,-.02,.1,-.07,.02,.05,-.75,.05,.28,-.72,0,-.05,.07,.02,.05,.72,0,-.05,.75,.05,.28]),t=new ee;return t.setAttribute("position",new Ot(r,3)),t.computeVertexNormals(),t}const Al=70,Go=46;class cM{constructor(t,e,n,i,s){this.terrain=t,this.camera=s;const o=ss((n^54241237)>>>0);this.flocks=[];const a=ud(new oe({color:3028032,roughness:1,side:xe}),i,.85,9);let l=0;for(let d=0;d<6;d++){let f=0,m=0,b=!1;for(let v=0;v<400&&!b;v++)f=(o()*2-1)*ne*.7,m=(o()*2-1)*ne*.7,b=t.heightAt(f,m)>te+2;const g=6+Math.floor(o()*4),p={cx:f,cz:m,cy:t.heightAt(f,m)+32+o()*26,r:26+o()*34,w:(.1+o()*.1)*(o()>.5?1:-1),drift:o()*Math.PI*2,members:[]};for(let v=0;v<g;v++)p.members.push({ang:o()*Math.PI*2,rr:p.r*(.65+o()*.45),yy:(o()-.5)*7,ph:o()*Math.PI*2,sz:.75+o()*.5});l+=g,this.flocks.push(p)}this.birdMesh=new Pe(lM(),a,l),this.birdMesh.instanceMatrix.setUsage(zs),this.birdMesh.frustumCulled=!1,e.add(this.birdMesh),this.fireflyMesh=new Pe(new vn(.16,.16),new $e({color:new $(14155678).multiplyScalar(2.8),transparent:!0,opacity:0,blending:Fe,depthWrite:!1}),Al),this.fireflyMesh.instanceMatrix.setUsage(zs),this.fireflyMesh.frustumCulled=!1,e.add(this.fireflyMesh),this.butterflyMesh=new Pe(new vn(.26,.2),ud(new oe({color:16777215,roughness:1,side:xe,transparent:!0,opacity:.95}),i,1.35,16),Go),this.butterflyMesh.instanceMatrix.setUsage(zs),this.butterflyMesh.frustumCulled=!1,e.add(this.butterflyMesh);const c=[15239002,15253850,10473727,13733846,15921906],h=new $;for(let d=0;d<Go;d++)this.butterflyMesh.setColorAt(d,h.setHex(c[d%c.length]));this.butterflyMesh.instanceColor.needsUpdate=!0;const u=d=>({x:0,y:-100,z:0,ph:o()*Math.PI*2,w1:.6+o()*.8,w2:.6+o()*.8,sp:.5+o()*.8,firefly:d});this.fireflies=Array.from({length:Al},()=>u(!0)),this.butterflies=Array.from({length:Go},()=>u(!1)),this._m=new At,this._q=new ve,this._e=new qe,this._v=new E,this._s=new E}_respawnBug(t,e,n){const i=Math.random()*Math.PI*2,s=8+Math.random()*26;t.x=e+Math.cos(i)*s,t.z=n+Math.sin(i)*s;const o=this.terrain.heightAt(t.x,t.z);if(o<te+.4){t.y=-100;return}t.y=o+(t.firefly?.6+Math.random()*1.8:.8+Math.random()*1.6)}update(t,e,n,i){const{_m:s,_q:o,_e:a,_v:l,_s:c}=this;let h=0;for(const f of this.flocks){f.drift+=t*.05,f.cx+=Math.cos(f.drift)*t*1.2,f.cz+=Math.sin(f.drift*.8)*t*1.2;for(const m of f.members){m.ang+=f.w*t;const b=f.cx+Math.cos(m.ang)*m.rr,g=f.cz+Math.sin(m.ang)*m.rr,p=f.cy+m.yy+Math.sin(n*.7+m.ph)*1.5,v=m.ang+(f.w>0?Math.PI/2:-Math.PI/2);a.set(0,-v,Math.sin(n*9+m.ph)*.25+.3),o.setFromEuler(a),l.set(b,p,g),c.setScalar(m.sz),s.compose(l,o,c),this.birdMesh.setMatrixAt(h++,s)}}this.birdMesh.instanceMatrix.needsUpdate=!0,this.birdMesh.visible=i>.25;const u=1-i,d=u>.45;this.fireflyMesh.material.opacity=Math.min(1,Math.pow(u,2))*.95,this.butterflyMesh.visible=i>.4;for(let f=0;f<Al;f++){const m=this.fireflies[f];if(!d||m.y<-50){!d&&Math.random()<.02&&this._respawnBug(m,e.x,e.z),s.makeScale(0,0,0),this.fireflyMesh.setMatrixAt(f,s);continue}m.x+=Math.sin(n*m.w1+m.ph)*m.sp*t,m.z+=Math.cos(n*m.w2+m.ph*1.3)*m.sp*t;const b=m.y+Math.sin(n*.9+m.ph)*.5,g=.55+.45*Math.sin(n*2.4+m.ph*3);l.set(m.x,b,m.z),c.setScalar(g),s.compose(l,this.camera.quaternion,c),this.fireflyMesh.setMatrixAt(f,s),Math.hypot(m.x-e.x,m.z-e.z)>60&&this._respawnBug(m,e.x,e.z)}this.fireflyMesh.instanceMatrix.needsUpdate=!0;for(let f=0;f<Go;f++){const m=this.butterflies[f];if(m.y<-50){Math.random()<.02&&this._respawnBug(m,e.x,e.z),s.makeScale(0,0,0),this.butterflyMesh.setMatrixAt(f,s);continue}m.x+=Math.sin(n*m.w1+m.ph)*m.sp*t,m.z+=Math.cos(n*m.w2+m.ph*1.3)*m.sp*t;const b=m.y+Math.abs(Math.sin(n*3+m.ph))*.35;a.set(-Math.PI/2,0,Math.sin(n+m.ph)*.4),o.setFromEuler(a),l.set(m.x,b,m.z),c.setScalar(1),s.compose(l,o,c),this.butterflyMesh.setMatrixAt(f,s),Math.hypot(m.x-e.x,m.z-e.z)>60&&this._respawnBug(m,e.x,e.z)}this.butterflyMesh.instanceMatrix.needsUpdate=!0}}const nn=540;class hM{constructor(t,e,n,i,s={}){this.worlds=t,this.orbs=e,this.exploration=n,this.onReset=i,this.thumbs=s,this.mapOpen=!1,this.journalOpen=!1,this.resetArmed=!1,this.mapBase=null,this._buildDom(),this.setWorld(t.mode),this.blockKeys=null,addEventListener("keydown",o=>{this.blockKeys?.()&&o.code!=="Escape"||(o.code==="KeyM"&&this.toggleMap(),o.code==="Tab"&&(o.preventDefault(),this.toggleJournal()),o.code==="Escape"&&(this.mapOpen||this.journalOpen)&&this.closeAll(),o.code==="KeyH"&&this.toggleHelp(),o.code==="Escape"&&this.toggleHelp(!1))})}_buildDom(){this.mapEl=document.createElement("div"),this.mapEl.id="bigmap",this.mapEl.className="panel hidden",this.mapEl.innerHTML=`
      <div class="panel-head">
        <span class="panel-title" id="mapTitle">The Wilds</span>
        <span class="panel-sub" id="mapProgress"></span>
      </div>
      <div class="map-wrap"><canvas id="mapCanvas" width="${nn}" height="${nn}"></canvas><div id="mapTip" class="hidden"></div></div>
      <div class="panel-foot">M or Esc to close</div>`,document.body.appendChild(this.mapEl);const t=this.mapEl.querySelector("#mapCanvas");this.mapCtx=t.getContext("2d"),this._pins=[],this._hover=-1;const e=this.mapEl.querySelector("#mapTip");t.addEventListener("mousemove",n=>{const i=t.getBoundingClientRect(),s=nn/i.width,o=(n.clientX-i.left)*s,a=(n.clientY-i.top)*s;let l=-1,c=1e9;if(this._pins.forEach((f,m)=>{const b=Math.hypot(f.x-o,f.y-a);b<f.r+4&&b<c&&(c=b,l=m)}),this._hover=l,l<0){e.classList.add("hidden");return}e.innerHTML=this._pins[l].html,e.classList.remove("hidden");const h=t.parentElement.getBoundingClientRect(),u=n.clientX-h.left+16,d=n.clientY-h.top+16;e.style.left=`${Math.min(u,h.width-240)}px`,e.style.top=`${Math.min(d,h.height-90)}px`}),t.addEventListener("mouseleave",()=>{this._hover=-1,e.classList.add("hidden")}),this.journalEl=document.createElement("div"),this.journalEl.id="journal",this.journalEl.className="panel hidden",this.journalEl.innerHTML=`
      <div class="panel-head">
        <span class="panel-title">Field Journal</span>
        <span class="panel-sub" id="journalProgress"></span>
      </div>
      <div id="journalList"></div>
      <div class="panel-foot">
        <span>Tab or Esc to close</span>
        <button id="journalReset" type="button">reset progress</button>
      </div>`,document.body.appendChild(this.journalEl),this.journalEl.querySelector("#journalReset").addEventListener("click",()=>{if(!this.resetArmed){this.resetArmed=!0,this.journalEl.querySelector("#journalReset").textContent="sure? click again",setTimeout(()=>{this.resetArmed=!1;const n=this.journalEl.querySelector("#journalReset");n&&(n.textContent="reset progress")},2500);return}this.onReset?.()})}toggleHelp(t){const e=document.getElementById("help");if(!e)return;const n=t??e.classList.contains("hidden");e.classList.toggle("hidden",!n)}setWorld(t){this.mapEl.classList.toggle("parchment",t==="nature"),this.mapEl.classList.toggle("transit",t==="city"),this.mapEl.querySelector("#mapTitle").textContent=t==="nature"?"The Wilds":"New York",this.mapBase=this.worlds.mapBase(nn,t),this.mapHalf=t==="nature"?2e3:this.worlds?.city?.mapHalf||1800,this.fogOn=t==="nature",this.refreshList()}toggleMap(){this.mapOpen=!this.mapOpen,this.mapEl.classList.toggle("hidden",!this.mapOpen),this.mapOpen&&this.journalOpen&&this.toggleJournal()}toggleJournal(){this.journalOpen=!this.journalOpen,this.journalEl.classList.toggle("hidden",!this.journalOpen),this.journalOpen&&(this.mapOpen&&this.toggleMap(),this.refreshList())}closeAll(){this.mapOpen&&this.toggleMap(),this.journalOpen&&this.toggleJournal()}get anyOpen(){return this.mapOpen||this.journalOpen||!document.getElementById("help")?.classList.contains("hidden")||!!this.extraOpen?.()}refreshList(){const t=this.journalEl.querySelector("#journalList"),e=[...this.worlds.sites()].sort((o,a)=>Number(a.discovered)-Number(o.discovered));t.innerHTML="";for(const o of e){const a=document.createElement("div");if(a.className=`card ${o.discovered?"found":"rumor"}`,o.discovered){const l=document.createElement("div");l.className="photo";const c=this.thumbs[o.id];if(c){const d=document.createElement("img");d.src=c,d.alt=o.name,l.appendChild(d)}else{const d=document.createElement("canvas");d.width=240,d.height=128;const f=d.getContext("2d"),m=f.createLinearGradient(0,0,0,128);m.addColorStop(0,"#2b2f55"),m.addColorStop(1,"#a66a5c"),f.fillStyle=m,f.fillRect(0,0,240,128),f.fillStyle="rgba(255,255,255,0.7)";for(let b=0;b<26;b++)f.fillRect(b*97%240,b*53%70,1.2,1.2);f.shadowColor=Bs[o.type]?.color||"#fff",f.shadowBlur=18,Hs(f,o.type,120,70,24),l.appendChild(d)}const h=document.createElement("div");h.className="badge",h.innerHTML=Fr(o.type,17),l.appendChild(h);const u=document.createElement("div");u.className="body",u.innerHTML=`<b>${o.name}</b><span>${o.flavor}</span><i>${Math.round(o.x)}, ${Math.round(o.z)}</i>`,a.append(l,u)}else{const l=Bs[o.type].label;a.innerHTML=`<div class="photo"><div class="mark">?</div></div>
          <div class="body"><b>A ${l}, somewhere</b><span>Rumour only — the map hasn't found it yet.</span></div>`}t.appendChild(a)}const n=this.worlds.sites().filter(o=>o.discovered).length,i=this.worlds.sites().length,s=this.worlds.mode==="city"?`${n}/${i} city landmarks · ${this.orbs.count}/${this.orbs.total} shards (in the wilds)`:`${n}/${i} landmarks · ${this.orbs.count}/${this.orbs.total} shards`;this.journalEl.querySelector("#journalProgress").textContent=s,this.mapEl.querySelector("#mapProgress").textContent=s}updateMap(t){const e=this.mapCtx;e.clearRect(0,0,nn,nn),e.drawImage(this.mapBase,0,0,nn,nn);const n=this.mapHalf,i=n*2,s=(u,d)=>[(u+n)/i*nn,(d+n)/i*nn];if(this.fogOn){const{grid:u,N:d}=this.exploration,f=4e3;e.fillStyle="rgba(40, 28, 14, 0.8)";for(let m=0;m<d;m++)for(let b=0;b<d;b++)if(!u[m*d+b]){const g=-2e3+b/d*f,p=-2e3+m/d*f,[v,_]=s(g,p),[x,y]=s(g+f/d,p+f/d);e.fillRect(v,_,x-v+.5,y-_+.5)}}e.textAlign="center";const o=this.worlds.mode==="nature";this._pins.length=0;const a=o?'500 italic 16px "Cormorant Garamond", Georgia, serif':'600 10px "Inter Variable", system-ui, sans-serif';e.font=a;for(const u of this.worlds.sites()){if(!u.discovered)continue;const[d,f]=s(u.x,u.z);d<-30||f<-30||d>nn+30||f>nn+30||(e.fillStyle="rgba(5, 9, 15, 0.55)",e.beginPath(),e.arc(d,f,11,0,Math.PI*2),e.fill(),Hs(e,u.type,d,f,7),this._pins.push({x:d,y:f,r:13,html:`<b>${Fr(u.type,16)}${u.name}</b><span>${u.flavor}</span><i>${Bs[u.type]?.label||""} · ${Math.round(u.x)}, ${Math.round(u.z)}</i>`}),this._pins.length-1===this._hover&&(e.strokeStyle="rgba(255,255,255,0.9)",e.lineWidth=2,e.beginPath(),e.arc(d,f,15,0,Math.PI*2),e.stroke()),o?(e.lineWidth=4,e.strokeStyle="rgba(244,232,200,0.9)",e.strokeText(u.name,d,f+24),e.fillStyle="#3a2810"):e.fillStyle="rgba(255,255,255,0.92)",e.fillText(u.name,d,f+24))}const l=this.worlds.gateMarker?.();if(l){let[u,d]=s(l.x,l.z);if(u>-40&&d>-40&&u<nn+40&&d<nn+40){u=Math.max(24,Math.min(nn-24,u)),d=Math.max(26,Math.min(nn-24,d));const f=15+Math.sin(performance.now()*.004)*3;e.strokeStyle="rgba(203, 184, 245, 0.95)",e.lineWidth=2.5,e.beginPath(),e.arc(u,d,f,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(10, 8, 20, 0.8)",e.beginPath(),e.arc(u,d,13,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(159, 127, 232, 0.9)",e.lineWidth=1.5,e.beginPath(),e.arc(u,d,13,0,Math.PI*2),e.stroke(),Hs(e,"gate",u,d,7.5),e.fillStyle="rgba(203, 184, 245, 0.95)",e.fillText(this.worlds.mode==="city"?"The Way Back":"The Ancient Gate",u,d+30),this._pins.push({x:u,y:d,r:16,html:`<b>${Fr("gate",16)}${this.worlds.mode==="city"?"The Way Back":"The Ancient Gate"}</b><span>${this.worlds.mode==="city"?"Step through to return to the Wilds.":"Step through to reach New York."}</span>`})}}const[c,h]=s(t.pos.x,t.pos.z);e.save(),e.translate(c,h),e.rotate(-t.yaw),e.fillStyle="rgba(255,255,255,0.25)",e.beginPath(),e.moveTo(0,0),e.arc(0,0,26,-Math.PI/2-.45,-Math.PI/2+.45),e.closePath(),e.fill(),e.restore(),e.fillStyle="#fff",e.strokeStyle="rgba(0,0,0,0.65)",e.lineWidth=1.6,e.beginPath(),e.arc(c,h,4,0,Math.PI*2),e.fill(),e.stroke(),this._pins.push({x:c,y:h,r:9,html:"<b>You are here</b><span>The map follows the direction you face.</span>"}),e.fillStyle="rgba(255,255,255,0.8)",e.font=this.worlds.mode==="nature"?'600 italic 18px "Cormorant Garamond", Georgia, serif':'700 12px "Inter Variable", system-ui, sans-serif',e.fillStyle=this.worlds.mode==="nature"?"#3a2810":"rgba(255,255,255,0.8)",e.textAlign="left",e.fillText("N ↑",12,24)}update(t){this.mapOpen&&this.updateMap(t)}}const Ji=2.5,sa=.2,Qr=3.3,ra=3.8,uM={low:128,medium:256,high:384},dM=(r,t,e)=>{const n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},fM=`
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
`,pM=`
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
    float side = ${Ji.toFixed(2)} - abs(p.x);
    float d = min(side, p.y - ${sa.toFixed(2)});
    if (p.y > ${Qr.toFixed(2)}) {
      d = ${Ji.toFixed(2)} - length(vec2(p.x, p.y - ${Qr.toFixed(2)}));
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
`,mM=`
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
`,gM=`
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
`,vM=`
  uniform vec3 uTint1, uTint2;
  varying float vA;
  varying float vMix;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 3.5);
    vec3 col = mix(uTint2, uTint1, vMix) * 1.5;
    gl_FragColor = vec4(col * d * vA, 1.0);
  }
`,xM=`
  uniform vec3 uTint1, uTint2;
  varying float vA;
  varying float vMix;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 4.0);
    gl_FragColor = vec4(mix(vec3(1.0), uTint2, 0.45) * 2.0 * d * vA, 1.0);
  }
`,bM=`
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
`,_M=`
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
`;function yM(){const r=new nh;return r.moveTo(-Ji,sa),r.lineTo(Ji,sa),r.lineTo(Ji,Qr),r.absarc(0,Qr,Ji,0,Math.PI,!1),r.lineTo(-Ji,sa),r}function MM(r){const t=new Float32Array(r*4);for(let n=0;n<r;n++)t[n*4]=Math.random()*Math.PI*2,t[n*4+1]=2.2+Math.random()*2.6,t[n*4+2]=.55+Math.random()*.9,t[n*4+3]=Math.random();const e=new ee;return e.setAttribute("position",new Ot(new Float32Array(r*3),3)),e.setAttribute("aSeed",new Ot(t,4)),e}function wM(r){const t=new Float32Array(r*3),e=new Float32Array(r*4);for(let i=0;i<r;i++){const s=Math.random();let o,a,l=(Math.random()<.5?1:-1)*.72;if(s<.5){const c=Math.random()*Math.PI;o=Math.cos(c)*2.58,a=Qr+Math.sin(c)*2.58}else s<.75?(o=(Math.random()<.5?-1:1)*2.58,a=.3+Math.random()*3):(o=(Math.random()<.5?-1:1)*(3+Math.random()*.8),a=1+Math.random()*7,l*=1.1);t[i*3]=o,t[i*3+1]=a,t[i*3+2]=l,e[i*4]=Math.random(),e[i*4+1]=.5+Math.random(),e[i*4+2]=Math.random(),e[i*4+3]=.5+Math.random()*.9}const n=new ee;return n.setAttribute("position",new Ot(t,3)),n.setAttribute("aSeed",new Ot(e,4)),n}const SM={nature:[new $(.85,.35,1),new $(.3,.95,1)],city:[new $(.2,.95,.55),new $(1,.8,.35)]};class dd{constructor(t,e,n,i,s,o,a=1){this.world=e,this.group=t,this.base=i-ra,this.ry=o,this.pos=new E(n,this.base+3,s),this.facing=new E(Math.sin(o),0,Math.cos(o)),this.right=new E(Math.cos(o),0,-Math.sin(o)),this.prox=0,this.gate=null,this.runeMats=[],this.tint=SM[e],this.root=new ye,this.root.position.set(n,this.base,s),this.root.rotation.y=o,t.add(this.root),this.cubeRT=null,this.hasCube=!1,this.cubeFade=0,this.rot=new Jt,this.surfMat=new Qt({uniforms:{uTime:{value:0},uProx:{value:0},uCubeFade:{value:0},uHasCube:{value:0},uCube:{value:null},uRot:{value:this.rot},uTint1:{value:this.tint[0]},uTint2:{value:this.tint[1]}},vertexShader:fM,fragmentShader:pM,transparent:!0,side:xe,depthWrite:!1}),this.surface=new Pt(new Aa(yM(),40),this.surfMat),this.surface.frustumCulled=!1,this.root.add(this.surface);const l=(h,u)=>new Qt({uniforms:{uTime:{value:0},uProx:{value:0},uPR:{value:a},uTint1:{value:this.tint[0]},uTint2:{value:this.tint[1]}},vertexShader:h,fragmentShader:u,transparent:!0,blending:Fe,depthWrite:!1,fog:!1});this.vortex=new mi(MM(190),l(mM,vM)),this.vortex.frustumCulled=!1,this.sparks=new mi(wM(170),l(gM,xM)),this.sparks.frustumCulled=!1,this.root.add(this.vortex,this.sparks);const c=new je(.5,1.8,1,20,1,!0);c.translate(0,.5,0),this.beaconMat=new Qt({uniforms:{uTime:{value:0},uStrength:{value:.4},uTint1:{value:this.tint[0]},uTint2:{value:this.tint[1]}},vertexShader:bM,fragmentShader:_M,transparent:!0,blending:Fe,depthWrite:!1,side:xe,fog:!1}),this.beacon=new Pt(c,this.beaconMat),this.beacon.position.set(0,10.5,0),this.beacon.scale.set(1,420,1),this.beacon.frustumCulled=!1,this.beacon.renderOrder=5,this.root.add(this.beacon),this.halo=Hn(11902463,9),this.halo.position.set(0,3,.3),this.root.add(this.halo),this.light=new es(11570431,2.2,34,1.5),this.light.position.set(0,3,1.6),this.root.add(this.light),this.fragments=[],this.fragGroup=new ye,this.root.add(this.fragGroup)}setGate(t,e){if(this.gate=t,this.runeMats=[],t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material=n.material.clone(),n.material.name.startsWith("gate_rune")&&this.runeMats.push(n.material))}),this.root.add(t),e?.length)for(let i=0;i<9;i++){const o=e[i%e.length].clone(!0);o.traverse(a=>{a.isMesh&&(a.material=a.material.clone(),a.castShadow=!0,a.material.name.startsWith("gate_rune")&&this.runeMats.push(a.material))}),o.scale.setScalar(.75+Math.random()*.7),this.fragGroup.add(o),this.fragments.push({m:o,a:i/9*Math.PI*2,dir:i%2?1:-1,R:3.5+Math.sin(i*1.7)*.7,ph:Math.random()*6.28,spin:new E(.2+Math.random()*.5,.15+Math.random()*.4,.1+Math.random()*.3)})}}dressPlaza(t){const e=t-this.base+.05,n=new Pt(new pa(9.6,15.2,96,1),new oe({color:198157,roughness:.05,metalness:.92,envMapIntensity:1.6}));n.rotation.x=-Math.PI/2,n.position.y=e,n.receiveShadow=!0,this.root.add(n);const i=new Pt(new pa(15.2,15.5,96,1),new $e({color:new $().copy(this.tint[1]).multiplyScalar(2.4)}));i.rotation.x=-Math.PI/2,i.position.y=e+.012,this.root.add(i);const s=32,o=new Pe(new En(.28,.04,2.6),new $e({color:16777215}),s),a=new At,l=new ve,c=new qe,h=new E;for(let u=0;u<s;u++){const d=u/s*Math.PI*2;c.set(0,-d+Math.PI/2,0),l.setFromEuler(c),h.set(Math.cos(d)*17.4,e+.02,Math.sin(d)*17.4),a.compose(h,l,new E(1,1,1)),o.setMatrixAt(u,a),o.setColorAt(u,new $(1,1,1))}o.frustumCulled=!1,this.root.add(o),this.plaza={pool:n,line:i,strips:o,N:s,c:new $}}_updatePlaza(t){const e=this.plaza;if(e){for(let n=0;n<e.N;n++){const i=.5+.5*Math.sin(t*1.3-n*.42),s=.25+2.6*Math.pow(i,3)*(.5+this.prox);e.c.copy(this.tint[n%2?1:0]).multiplyScalar(s),e.strips.setColorAt(n,e.c)}e.strips.instanceColor.needsUpdate=!0}}setDestination(t){const e=t.ry-(this.ry+Math.PI);this.rot.setFromMatrix4(new At().makeRotationY(e))}local(t,e=new E){const n=t.x-this.root.position.x,i=t.z-this.root.position.z;return e.set(n*this.right.x+i*this.right.z,t.y-this.base,n*this.facing.x+i*this.facing.z)}update(t,e,n,i){const s=1-n,o=this.surfMat.uniforms;o.uTime.value=t,o.uProx.value=this.prox,this.cubeFade+=((this.hasCube?1:0)-this.cubeFade)*Math.min(1,e*1.6),o.uCubeFade.value=this.cubeFade,o.uHasCube.value=this.hasCube?1:0;for(const c of[this.vortex,this.sparks])c.material.uniforms.uTime.value=t,c.material.uniforms.uProx.value=this.prox;if(this.beaconMat.uniforms.uTime.value=t,this.beaconMat.uniforms.uStrength.value=.1+.34*s+.35*this.prox,i){const c=Math.hypot(i.x-this.root.position.x,i.z-this.root.position.z),h=Ie.clamp(c/160,1,9);this.beacon.scale.set(h,420,h)}const a=.5+.5*Math.sin(t*1.7),l=.8+1.7*this.prox+.3*a;for(const c of this.runeMats)c.emissive.copy(this.tint[1]).lerp(this.tint[0],.25+.2*a),c.color.setScalar(0),c.emissiveIntensity=l*(1+.3*s);this.light.color.copy(this.tint[0]).lerp(this.tint[1],.5+.3*Math.sin(t*.8)),this.light.intensity=1+1.5*this.prox+.3*Math.sin(t*2.2),this.halo.material.color.copy(this.tint[0]).multiplyScalar(1.4),this.halo.material.opacity=.08+.12*this.prox,this._updatePlaza(t);for(const c of this.fragments)c.a+=e*.11*c.dir*(1+this.prox*1.2),c.m.position.set(Math.cos(c.a)*c.R,9.7+Math.sin(c.a)*1.9+Math.sin(t*.9+c.ph)*.18,Math.sin(c.a*2+c.ph)*.9),c.m.rotation.x+=e*c.spin.x,c.m.rotation.y+=e*c.spin.y,c.m.rotation.z+=e*c.spin.z}}class TM{constructor(t,e,n,i={name:"medium",pixelRatio:1}){this.scene=t,this.timeU=n,this.quality=i,this.cooldown=0,this.onTransit=null,this.ctx=null,this._gateTpl=null,this._fragTpls=null,this.proximity=0,this.proximityTint=new $(.6,.4,1);const s=Math.min(devicePixelRatio,i.pixelRatio||1);this._pr=s;const o=e.heightAt(Oe.x,Oe.z);this.group=new ye,t.add(this.group),this.nature=new dd(this.group,"nature",Oe.x,o+.1+ra,Oe.z,0,s),this.natureColliders=new Qs,this.cityColliders=null,this._pillarColliders(this.natureColliders,Oe.x,o+.1,Oe.z,0);const a=new ir;Promise.all([a.loadAsync("assets/portal_gate.glb"),a.loadAsync("assets/portal_fragments.glb")]).then(([l,c])=>{this._gateTpl=l.scene,this._fragTpls=[],c.scene.traverse(h=>{if(h.isMesh&&h.name.startsWith("frag")){const u=h.clone();u.position.set(0,0,0),u.rotation.set(0,0,0),this._fragTpls.push(u)}}),this.nature.setGate(this._gateTpl.clone(!0),this._fragTpls),this.city&&!this.city.gate&&this.city.setGate(this._gateTpl.clone(!0),this._fragTpls)}).catch(l=>console.warn("[portal] gate assets missing (run tools/build_portal.py)",l)),this.city=null,this.site={id:"gate-0",type:"gate",world:"nature",name:"The Ancient Gate",flavor:"The carvings hum. On the other side — somewhere else entirely.",color:10452968,discoverR:55,x:Oe.x,y:o,z:Oe.z,discovered:!1},this.onDiscover=null,this._cube={face:-1,last:-99,end:null,plan:null},this._tmp=new E}bind(t){this.ctx=t}_pillarColliders(t,e,n,i,s){const o=Math.cos(s),a=Math.sin(s);for(const l of[-3.4,3.4])t.addBox(e+l*o,i-l*a,.85,.85,n,n+8.6,s)}attachCityEnd(t,e,n,i,s){this.city=new dd(t,"city",e,n,i,s,this._pr);const o=this.ctx?this.ctx.worlds.city.heightAt(e,i):n-ra;this.city.dressPlaza(o),this._gateTpl&&this.city.setGate(this._gateTpl.clone(!0),this._fragTpls),this.nature.setDestination(this.city),this.city.setDestination(this.nature),this.cityColliders=new Qs,this._pillarColliders(this.cityColliders,e,n-ra,i,s)}tryTransit(t,e){if(this.cooldown>0)return;const n=e==="nature"?this.nature:this.city;if(!n)return;const i=n.local(t,this._tmp);Math.abs(i.z)<.8&&Math.abs(i.x)<2.3&&i.y>-.6&&i.y<4.8&&(this.cooldown=2.8,this.onTransit?.(e==="nature"?"city":"nature"))}_plan(t){const{worlds:e}=this.ctx,n=t.world==="nature"?"city":"nature";if(n==="city"&&!e.city.built)return null;const i=e.arrival(n),s=n==="city"?e.city.heightAt(i.x,i.z):e.terrain.heightAt(i.x,i.z);return{mode:n,pos:new E(i.x,s+2,i.z)}}_ensureCube(t){if(t.cubeRT)return;const e=uM[this.quality.name]||256;t.cubeRT=new ef(e,{type:an,generateMipmaps:!1,minFilter:Be,magFilter:Be}),t.cubeCam=new $d(.3,6500,t.cubeRT),t.cubeCam.coordinateSystem=this.ctx.renderer.coordinateSystem,t.cubeCam.updateCoordinateSystem(),t.surfMat.uniforms.uCube.value=t.cubeRT.texture}_renderFace(t,e,n){const{renderer:i,worlds:s,sky:o}=this.ctx,a=t.cubeCam;a.position.copy(e.pos),a.updateMatrixWorld(!0);const l=s.mode,c=this.group.visible,h=i.shadowMap.autoUpdate,u=i.getRenderTarget(),d=o.group.position.clone();i.shadowMap.autoUpdate=!1,s.setMode(e.mode),this.group.visible=e.mode==="nature",o.group.position.set(e.pos.x,0,e.pos.z),i.setRenderTarget(t.cubeRT,n),i.clear(),i.render(this.scene,a.children[n]),s.setMode(l),this.group.visible=c,o.group.position.copy(d),i.setRenderTarget(u),i.shadowMap.autoUpdate=h}_updateWindow(t,e,n){const i=this._cube;if(e>150){i.face=-1;return}if(i.face<0&&(n-i.last>14||!t.hasCube)){const s=this._plan(t);if(!s)return;this._ensureCube(t),i.plan=s,i.end=t,i.face=0}i.face>=0&&i.end===t&&(this._renderFace(t,i.plan,i.face),i.face++,i.face>=6&&(i.face=-1,i.last=n,t.hasCube=!0))}update(t,e,n,i,s=1,o=null){this.cooldown=Math.max(0,this.cooldown-t),this.group.visible=i==="nature";const a=i==="nature"?this.nature:this.city;for(const l of[this.nature,this.city]){if(!l)continue;const c=l===a?Math.hypot(e.x-l.pos.x,e.z-l.pos.z,(e.y-l.pos.y)*.5):999,h=l===a?dM(75,7,c):0;l.prox+=(h-l.prox)*Math.min(1,t*3)}if(this.nature.update(n,t,s,o),this.city?.update(n+40,t,s,o),this.proximity=a?a.prox:0,a&&this.proximityTint.copy(a.tint[0]).lerp(a.tint[1],.5),i==="nature"&&!this.site.discovered&&Math.hypot(e.x-this.site.x,e.z-this.site.z)<this.site.discoverR&&(this.site.discovered=!0,this.onDiscover?.(this.site)),this.tryTransit(e,i),this.ctx&&a&&a.gate){const l=Math.hypot(e.x-a.pos.x,e.z-a.pos.z);this._updateWindow(a,l,n)}}}var AM=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?a(t):a(r),s,o=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function a(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var x=p.charCodeAt(_);v[_]=x>96?x-97:x>64?x-39:x+4}for(var y=0,_=0;_<p.length;++_)v[y++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,y)}function l(p,v,_,x,y,M,T){var R=p.exports.sbrk,w=x+3&-4,S=R(w*y),P=R(M.length),I=new Uint8Array(p.exports.memory.buffer);I.set(M,P);var z=v(S,x,y,P,M.length);if(z==0&&T&&T(S,w,y),_.set(I.subarray(S,S+x*y)),R(S-R(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var x=_.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),_=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(_),y=u.length;y<p;++y)u[y]=f(x);for(var y=p;y<u.length;++y)u[y].object.postMessage({});u.length=p,URL.revokeObjectURL(x)}function b(p,v,_,x,y){for(var M=u[0],T=1;T<u.length;++T)u[T].pending<M.pending&&(M=u[T]);return new Promise(function(R,w){var S=new Uint8Array(_),P=++d;M.pending+=p,M.requests[P]={resolve:R,reject:w},M.object.postMessage({id:P,count:p,size:v,source:S,mode:x,filter:y},[S.buffer])})}function g(p){var v=p.data;if(!v.id)return self.close();self.ready.then(function(_){try{var x=new Uint8Array(v.count*v.size);l(_,_.exports[v.mode],x,v.count,v.size,v.source,_.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:o,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,_,x,y){l(s,s.exports.meshopt_decodeVertexBuffer,p,v,_,x,s.exports[c[y]])},decodeIndexBuffer:function(p,v,_,x){l(s,s.exports.meshopt_decodeIndexBuffer,p,v,_,x)},decodeIndexSequence:function(p,v,_,x){l(s,s.exports.meshopt_decodeIndexSequence,p,v,_,x)},decodeGltfBuffer:function(p,v,_,x,y,M){l(s,s.exports[h[y]],p,v,_,x,s.exports[c[M]])},decodeGltfBufferAsync:function(p,v,_,x,y){return u.length>0?b(p,v,_,h[x],c[y]):o.then(function(){var M=new Uint8Array(p*v);return l(s,s.exports[h[x]],M,p,v,_,s.exports[c[y]]),M})}}})();const to={value:0},br=12.8,EM={facade_deco_a:{floors:4,bays:4,ww:1.5,wh:1.8},facade_deco_b:{floors:4,bays:4,ww:1.5,wh:1.8},facade_brick_a:{floors:4,bays:2,ww:1.15,wh:1.9},facade_brick_b:{floors:4,bays:2,ww:1.15,wh:1.9},facade_brown:{floors:3,bays:3,ww:1.3,wh:2.6},facade_prewar:{floors:4,bays:4,ww:1.7,wh:2},facade_panel:{floors:4,bays:4,ww:1.5,wh:1.5},facade_castiron:{floors:3,bays:4,ww:1.5,wh:3.2},facade_glass_a:{floors:6,bays:8,glass:!0},facade_glass_b:{floors:6,bays:8,glass:!0}};function CM(r){const t=EM[r.name];if(!t||r.userData.interior)return;r.userData.interior=!0;const e=br/t.bays,n=br/t.floors;let i,s,o,a;t.glass?(i=.06,s=e-.06,o=n*.32,a=n-.05):(i=(e-t.ww)/2+.07,s=(e+t.ww)/2-.07,o=(n-t.wh)/2+.07,a=(n+t.wh)/2-.07);const l=h=>h.toFixed(4),c=`
    #define BW ${l(e)}
    #define FH ${l(n)}
    #define WX0 ${l(i)}
    #define WX1 ${l(s)}
    #define WY0 ${l(o)}
    #define WY1 ${l(a)}
    #define ROOM_D 4.6
  `;r.onBeforeCompile=h=>{h.uniforms.uCityTime=to,h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vFW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
        ${c}
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
          vec2 tuv = vec2(vEmissiveMapUv.x, 1.0 - vEmissiveMapUv.y) * ${l(br)};
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
            vec2 cuv = vec2((id.x + 0.5) * BW / ${l(br)}, 1.0 - (id.y * FH + 0.5 * (WY0 + WY1)) / ${l(br)});
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
        }`)},r.customProgramCacheKey=()=>`facade-${r.name}`,r.needsUpdate=!0}function Df(r,t,{vertexExtra:e="",fragCommon:n="",fragColor:i=""}){if(r.userData[t])return;r.userData[t]=!0;const s=r.onBeforeCompile;r.onBeforeCompile=(o,a)=>{s?.(o,a),o.uniforms.uCityTime=to,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vFW = (modelMatrix * vec4(transformed, 1.0)).xyz;`+e),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vFW;
        uniform float uCityTime;
        float qh(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float qn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(qh(i), qh(i + vec2(1, 0)), f.x), mix(qh(i + vec2(0, 1)), qh(i + vec2(1, 1)), f.x), f.y); }
        ${n}`).replace("#include <color_fragment>",`#include <color_fragment>
${i}`)},r.customProgramCacheKey=()=>`${t}-${r.name}`,r.needsUpdate=!0}function RM(r){Df(r,"lawn",{fragColor:`
      float stripe = step(0.0, sin(dot(vFW.xz, vec2(0.62, 0.41)) * 1.1));
      float lawnPatch = qn(vFW.xz * 0.06);
      float fine = qn(vFW.xz * 1.7);
      diffuseColor.rgb *= 0.86 + 0.14 * stripe;
      diffuseColor.rgb *= vec3(0.9 + 0.2 * lawnPatch, 0.95 + 0.1 * lawnPatch, 0.85 + 0.1 * (1.0 - lawnPatch));
      diffuseColor.rgb *= 0.92 + 0.16 * fine;`})}function PM(r){Df(r,"paving",{fragColor:`
      vec2 sl = vFW.xz / 1.2;
      vec2 f = abs(fract(sl) - 0.5);
      float grout = smoothstep(0.47, 0.5, max(f.x, f.y));
      float stain = qn(vFW.xz * 0.35) * 0.6 + qn(vFW.xz * 2.1) * 0.4;
      float cell = qh(floor(sl));
      diffuseColor.rgb *= (0.9 + 0.1 * cell) * (0.82 + 0.3 * stain) * (1.0 - 0.28 * grout);`})}function LM(r){r.userData.led||(r.userData.led=!0,r.onBeforeCompile=t=>{t.uniforms.uCityTime=to,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCityTime;`).replace("#include <map_fragment>",`#include <map_fragment>
        float yy = vMapUv.y;
        diffuseColor.rgb *= 0.86 + 0.14 * sin(yy * 320.0);
        diffuseColor.rgb *= 1.0 + 0.35 * smoothstep(0.93, 1.0, sin(yy * 2.4 - uCityTime * 1.3));
        diffuseColor.rgb *= 0.95 + 0.05 * sin(uCityTime * 53.0);`)},r.customProgramCacheKey=()=>"led-screen",r.needsUpdate=!0)}const Yn={uTime:to,uNight:{value:0},uPR:{value:1}},Vo=(r,t,e)=>{const n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},DM=`
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
`,IM=`
  varying vec3 vC;
  varying float vA;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = exp(-dot(c, c) * 3.2);
    gl_FragColor = vec4(vC * d * vA, 1.0);
  }
`;class Wo{constructor(t,e=.35){const n=t.length,i=new Float32Array(n*3),s=new Float32Array(n*3),o=new Float32Array(n*4);t.forEach((l,c)=>{i.set(l.p,c*3),s.set(l.c,c*3),o.set([l.phase??Math.random(),l.blink??0,l.size??1,Math.random()],c*4)});const a=new ee;a.setAttribute("position",new Ot(i,3)),a.setAttribute("aColor",new Ot(s,3)),a.setAttribute("aParam",new Ot(o,4)),this.uDay={value:e},this.mesh=new mi(a,new Qt({uniforms:{uTime:Yn.uTime,uNight:Yn.uNight,uPR:Yn.uPR,uDay:this.uDay},vertexShader:DM,fragmentShader:IM,transparent:!0,blending:Fe,depthWrite:!1,fog:!1})),this.mesh.frustumCulled=!1}}const NM=`
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
`,FM=`
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
`;function El(r,t,e=1.6){return new Qt({uniforms:{uColor:{value:new $(r)},uStrength:{value:t},uPow:{value:e}},vertexShader:NM,fragmentShader:FM,transparent:!0,blending:Fe,depthWrite:!1,side:xe,fog:!1})}const UM=[["JAZZ","#ff3fa8"],["BAR","#2de2ff"],["PIZZA","#ff6a3c"],["HOTEL","#ffc83a"],["OPEN","#4dff8a"],["TAXI","#ffe34a"],["LIVE","#ff5c8a"],["NOODLES","#37f2d1"]];function zM(){const r=document.createElement("canvas");r.width=1024,r.height=1024;const t=r.getContext("2d");t.textAlign="center",t.textBaseline="middle",UM.forEach(([n,i],s)=>{const o=s%2*512+256,a=Math.floor(s/2)*256+128,l=n.length>5?74:104;t.font=`800 ${l}px "Arial Black", Arial, sans-serif`,t.save(),t.shadowColor=i,t.shadowBlur=22,t.lineWidth=7,t.strokeStyle=i;const c=30,h=o-232,u=a-100,d=464,f=200;t.beginPath(),t.moveTo(h+c,u),t.arcTo(h+d,u,h+d,u+f,c),t.arcTo(h+d,u+f,h,u+f,c),t.arcTo(h,u+f,h,u,c),t.arcTo(h,u,h+d,u,c),t.closePath(),t.stroke(),t.shadowBlur=26,t.lineWidth=11,t.strokeStyle=i,t.strokeText(n,o,a+4),t.shadowBlur=8,t.lineWidth=6,t.strokeStyle=i,t.strokeText(n,o,a+4),t.shadowBlur=0,t.lineWidth=2.6,t.strokeStyle="#ffffff",t.strokeText(n,o,a+4),t.restore()});const e=new ya(r);return e.colorSpace=Ne,e.anisotropy=4,e}const kM=`
  attribute vec3 aInfo;     // cell index, phase, flicker
  varying vec2 vUv;
  varying vec3 vInfo;
  void main() {
    vUv = uv;
    vInfo = aInfo;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,OM=`
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
`,BM=`
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
`,HM=`
  varying float vA;
  void main() { gl_FragColor = vec4(vec3(0.6, 0.72, 1.0) * 1.1 * vA, 1.0); }
`;class GM{constructor(t,e,n){this.city=t,this.layout=e,this.group=n,this.world=new ye,n.parent.add(this.world),this.rain=0,this.rainTarget=0,this.rainOverride=null,this.parts={},Yn.uPR.value=Math.min(devicePixelRatio,t.quality?.pixelRatio||1),this._buildings=e.buildings}buildingAt(t,e){let n=null;for(const i of this._buildings)t>=i[0]&&t<=i[1]&&e>=i[2]&&e<=i[3]&&(!n||i[4]>n[4])&&(n=i);return n}build(){this._neonSigns(),this._roofBeacons(),this._searchlights(),this._crowns(),this._torch(),this._bridgeLights(),this._lampCones(),this._steam(),this._bridgeCables(),this._heliLights(),this._aircraft(),this._parkLights(),this._ley(),this._rain()}_neonSigns(){const t=this.layout.sites.find(v=>v.type==="neon");if(!t)return;const e=zM(),n=80,i=new vn(1,1),s=new Float32Array(n*3),o=new Qt({uniforms:{uAtlas:{value:e},uTime:Yn.uTime,uNight:Yn.uNight,uGain:{value:2.6}},vertexShader:kM,fragmentShader:OM,transparent:!0,blending:Fe,depthWrite:!1,fog:!1}),a=new Pe(i,o,n),l=new At,c=new ve,h=new qe,u=new E,d=new E;let f=0,m=7;const b=()=>(m=m*16807%2147483647,m/2147483647),g=150,p=[[1,0],[-1,0],[0,1],[0,-1]];for(const v of this._buildings){if(f>=n)break;const[_,x,y,M,T]=v;if(T<14)continue;const R=(_+x)/2,w=(y+M)/2;if(!(Math.hypot(R-t.x,w-t.z)>g))for(const[S,P]of p){if(f>=n||b()>.55)continue;const I=S!==0?M-y:x-_;if(I<9)continue;const z=S!==0?S>0?x:_:R+(b()-.5)*(I-8),H=P!==0?P>0?M:y:w+(b()-.5)*(I-8),G=this.city.toWorld(z+S*3.5,H+P*3.5);if(this.city.heightAt(G.x,G.z)>3.5)continue;const X=Math.min(I-2,5.5+b()*5),tt=8+b()*Math.min(T-8,34);u.set(z+S*.45,tt,H+P*.45),h.set(0,Math.atan2(S,P),0),c.setFromEuler(h),d.set(X,X*.5,1),l.compose(u,c,d),a.setMatrixAt(f,l),s.set([Math.floor(b()*8),b()*6.28,b()<.3?1:0],f*3),f++}}a.count=f,i.setAttribute("aInfo",new Xr(s,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=4,this.group.add(a),this.parts.signs=a}_roofBeacons(){const e=this._buildings.filter(i=>i[4]>85).sort((i,s)=>s[4]-i[4]).slice(0,160).map((i,s)=>({p:[(i[0]+i[1])/2,i[4]+2.2,(i[2]+i[3])/2],c:[4.6,.35,.25],blink:1,size:1.1,phase:s*.137%1}));if(!e.length)return;const n=new Wo(e,.5);this.group.add(n.mesh)}_searchlights(){const t=this.layout.sites.find(i=>i.type==="neon");if(!t)return;const e=this._buildings.filter(i=>i[4]>55&&Math.hypot((i[0]+i[1])/2-t.x,(i[2]+i[3])/2-t.z)<220).sort((i,s)=>s[4]-i[4]).slice(0,3);this.beams=[];const n=new je(15,.5,900,18,1,!0);n.translate(0,450,0),e.forEach((i,s)=>{const o=El(s%2?12575999:16773328,.55,1.2),a=new Pt(n,o);a.position.set((i[0]+i[1])/2,i[4]+1,(i[2]+i[3])/2),a.frustumCulled=!1,a.renderOrder=3,this.group.add(a),this.beams.push({beam:a,ph:s*2.1})})}_crowns(){const t=this.layout.sites.find(i=>i.name==="Empire State");this.crowns=[];const e=(i,s,o,a,l,c,h)=>{const u=this.buildingAt(i,s),d=u?u[4]:o,f=new je(c,l,a,20,1,!0);f.translate(0,a/2,0);const m=El(h,.9,.5),b=new Pt(f,m);return b.position.set(i,d-a*.55,s),b.renderOrder=3,b.frustumCulled=!1,this.group.add(b),{mesh:b,mat:m,top:d}};t&&this.crowns.push({...e(t.x,t.z,380,58,7.5,2.2,16777215),kind:"esb"});const n={x:178,z:-650};this.crowns.push({...e(n.x,n.z,318,40,5.5,.6,13625343),kind:"chrysler"})}_torch(){const t=this.layout.sites.find(i=>i.type==="monument");if(!t)return;const e=Pf(3.4);e.position.set(t.x,37.2,t.z),this.group.add(e);const n=Hn(16752704,18);n.position.set(t.x,39,t.z),this.group.add(n),this.torch={flame:e,halo:n}}_bridgeLights(){const t=[];for(const e of this.layout.bridges||[]){const[n,i]=e.p0,[s,o]=e.p1,a=Math.hypot(s-n,o-i),l=(s-n)/a,c=(o-i)/a,h=-c,u=l;for(let d=0;d<a;d+=11)for(const f of[-1,1])t.push({p:[n+l*d+h*8.3*f,e.deck+2.4,i+c*d+u*8.3*f],c:[2.6,1.9,1],size:.9,phase:d*.07%1})}t.length&&this.group.add(new Wo(t,.15).mesh)}_lampCones(){const t=this.layout.lamps||[];if(!t.length)return;const e=new je(.4,4.2,8.4,10,1,!0);e.translate(0,-4.2,0);const n=El(16767392,.28,1),i=e.attributes.uv;for(let l=0;l<i.count;l++)i.setY(l,1-i.getY(l));const s=new Pe(e,n,t.length),o=new At,a=new E;t.forEach(([l,c],h)=>{a.set(l,2.35+8.6,c),o.makeTranslation(a.x,a.y,a.z),s.setMatrixAt(h,o)}),s.frustumCulled=!1,s.renderOrder=3,this.group.add(s),this.parts.cones=s}_steam(){const t=this.layout.sites.find(v=>v.type==="neon")||{x:0,z:0};this.smoke=new Lf(this.group),this.smoke.mesh.material.depthWrite=!1;const e=[];let n=0,i=99;const s=()=>(i=i*16807%2147483647,i/2147483647);for(;e.length<14&&n++<400;){const v=t.x+(s()-.5)*180,_=t.z+(s()-.5)*220,x=this.city.toWorld(v,_);Math.abs(this.city.heightAt(x.x,x.z)-2)>.05||e.push([v,_])}const o=new je(.62,.62,.05,14),a=new oe({color:1776929,roughness:.5,metalness:.6}),l=new Pe(o,a,e.length),c=new je(.3,.42,3,12,6,!0),h=new Float32Array(c.attributes.position.count*3);for(let v=0;v<c.attributes.position.count;v++){const x=Math.floor((c.attributes.position.getY(v)+1.5)/.5+.001)%2?[.95,.95,.92]:[.95,.38,.1];h.set(x,v*3)}c.setAttribute("color",new Ot(h,3));const u=new je(.18,.3,.5,12);u.translate(0,1.75,0);const d=new Float32Array(u.attributes.position.count*3).fill(.95);u.setAttribute("color",new Ot(d,3));const f=Ef([c,u]);f.translate(0,1.5,0);const m=new oe({vertexColors:!0,roughness:.6,side:xe}),b=e.map((v,_)=>_).filter(v=>v%3===1),g=new Pe(f,m,Math.max(1,b.length)),p=new At;e.forEach(([v,_],x)=>{p.makeTranslation(v,2.03,_),l.setMatrixAt(x,p);const y=b.indexOf(x),M=y>=0;M&&(p.makeTranslation(v+0,2,_),g.setMatrixAt(y,p)),this.smoke.addEmitter(new E(v,M?5.1:2.1,_),M?1.9:1.3,M?1.8:1.4)}),g.count=b.length;for(const v of[l,g])v.frustumCulled=!1,v.castShadow=!0,this.group.add(v)}_bridgeCables(){const t=[],e=[];for(const s of this.layout.bridges||[]){const[o,a]=s.p0,[l,c]=s.p1,h=Math.hypot(l-o,c-a),u=(l-o)/h,d=(c-a)/h,f=-d,m=u,b=22,g=1.6;for(const p of[-1,1])for(let v=0;v+b<=h+.1;v+=b){let _=null;for(let x=0;x<=10;x++){const y=x/10,M=v+b*y,T=s.deck+5.2-4*g*y*(1-y),R=[o+u*M+f*8.6*p,T,a+d*M+m*8.6*p];_&&e.push(..._,...R),_=R,x>0&&x<10&&x%2===1&&t.push({p:R,c:[2.4,1.8,.9],size:.55,phase:M*.11%1})}e.push(o+u*v+f*8.6*p,s.deck,a+d*v+m*8.6*p,o+u*v+f*8.6*p,s.deck+5.2,a+d*v+m*8.6*p)}}if(!e.length)return;const n=new ee;n.setAttribute("position",new Bt(e,3));const i=new fa(n,new ba({color:2106668}));i.frustumCulled=!1,this.group.add(i),t.length&&this.group.add(new Wo(t,.2).mesh)}_heliLights(){this.heliLights=[];for(const t of this.city.helis||[]){const e=Hn(16722458,5),n=Hn(16777215,6);for(const i of[e,n])i.material.fog=!1,i.material.opacity=0;e.position.set(0,2.6,6),n.position.set(0,.6,0),t.g.add(e,n),this.heliLights.push({red:e,white:n,ph:Math.random()*3})}}_aircraft(){this.planes=[];const t=new oe({color:13225686,roughness:.5,metalness:.3}),e=new oe({color:2896184,roughness:.7}),n=new Ma(2.1,30,4,10);n.rotateZ(Math.PI/2);const i=new En(7,.5,40);i.translate(-1,-.6,0),i.clone(),i.clone();const s=new En(4,.4,13);s.translate(-14.5,.8,0);const o=new En(5,6.5,.5);o.translate(-14.5,4,0);const a=new je(1.2,1.3,5,10);a.rotateZ(Math.PI/2);const l=h=>{const u=new ye;u.add(new Pt(n,t),new Pt(i,t),new Pt(s,t),new Pt(o,t));for(const m of[-9,9]){const b=new Pt(a,e);b.position.set(2,-2.3,m),u.add(b)}const d={},f=(m,b,g,p,v,_)=>{const x=Hn(b,g);x.material.fog=!1,x.material.opacity=0,x.position.set(p,v,_),u.add(x),d[m]=x};return f("red",16722458,22,-1,-.5,-20),f("green",3407718,22,-1,-.5,20),f("strobeL",16777215,30,-3,-.5,-20),f("strobeR",16777215,30,-3,-.5,20),f("tail",16777215,12,-17.5,3,0),f("beacon",16722458,14,0,2.3,0),u.scale.setScalar(h?1.9:2.3),{g:u,lights:d}},c=[{ang:.35,off:-900,alt:900,speed:95,t:.15},{ang:2.45,off:1200,alt:1250,speed:110,t:.62},{ang:5.4,off:300,alt:700,speed:80,t:.9}];for(const h of c){const{g:u,lights:d}=l(h.alt>1e3);u.visible=!1,this.world.add(u),this.planes.push({...h,g:u,lights:d})}}_parkLights(){const t=this.layout.park_trees||[],e=[];let n=5;const i=()=>(n=n*16807%2147483647,n/2147483647),s=[[2.4,1.4,.6],[2.6,.9,1.4],[.8,2.2,2],[2.6,2,.8]];t.forEach(([a,l,c],h)=>{if(h%3)return;const u=s[Math.floor(i()*s.length)];for(let d=0;d<5;d++){const f=i()*6.28,m=(.8+i()*1.8)*c;e.push({p:[a+Math.cos(f)*m,2.15+(3.2+i()*2.6)*c,l+Math.sin(f)*m],c:u,size:.55+i()*.3,blink:0})}});const o=t.filter((a,l)=>l%5===0);for(let a=0;a<o.length;a++)for(let l=a+1;l<o.length;l++){const[c,h,u]=o[a],[d,f,m]=o[l],b=Math.hypot(d-c,f-h);if(b<7||b>17||i()>.55)continue;const g=2.15+4.2*u,p=2.15+4.2*m;for(let v=0;v<=16;v++){const _=v/16,x=Math.sin(_*Math.PI)*b*.09;e.push({p:[c+(d-c)*_,g+(p-g)*_-x,h+(f-h)*_],c:[2.6,1.9,1],size:.4,phase:(v*.11+a)%1})}break}e.length&&this.group.add(new Wo(e,.1).mesh)}_ley(){const t=this.city,e=this.layout.gate,n=[],i=(f,m,b,g,p,v=2)=>{const _=[];for(let x=0;x<=p;x+=v){const y=t.toWorld(f+b*x,m+g*x),M=t.heightAt(y.x,y.z);if(M>6){if(_.length>4)break;continue}_.push([y.x,M+.07,y.z,x])}return _};n.push(i(e.x,e.z-14,0,-1,520)),n.push(i(e.x+12,e.z-6,1,0,150)),n.push(i(e.x-12,e.z-6,-1,0,150));const s=[];for(let f=0;f<=360;f+=4){const m=f*Math.PI/180,b=t.toWorld(e.x+Math.cos(m)*22,e.z+Math.sin(m)*22);s.push([b.x,t.heightAt(b.x,b.z)+.07,b.z,f*.6])}n.push(s);const o=[],a=[],l=[];let c=0;const h=.34;for(const f of n)if(!(f.length<2)){for(let m=0;m<f.length;m++){const b=f[Math.max(0,m-1)],g=f[Math.min(f.length-1,m+1)];let p=g[0]-b[0],v=g[2]-b[2];const _=Math.hypot(p,v)||1;p/=_,v/=_;const x=-v*h,y=p*h;if(o.push(f[m][0]+x,f[m][1],f[m][2]+y,f[m][0]-x,f[m][1],f[m][2]-y),a.push(f[m][3],f[m][3]),m>0){const M=c+(m-1)*2;l.push(M,M+1,M+2,M+1,M+3,M+2)}}c+=f.length*2}const u=new ee;u.setAttribute("position",new Bt(o,3)),u.setAttribute("aS",new Bt(a,1)),u.setIndex(l);const d=new Qt({uniforms:{uTime:Yn.uTime,uNight:Yn.uNight},vertexShader:"attribute float aS; varying float vS; void main(){ vS=aS; gl_Position=projectionMatrix*viewMatrix*vec4(position,1.0);} ",fragmentShader:`
        uniform float uTime, uNight; varying float vS;
        void main() {
          float pulse = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(vS * 0.11 - uTime * 2.2), 3.0);
          float fade = exp(-vS * 0.0045);
          vec3 c = mix(vec3(0.62, 0.3, 1.0), vec3(0.3, 0.9, 1.0), 0.5 + 0.5 * sin(vS * 0.03 - uTime * 0.6));
          gl_FragColor = vec4(c * pulse * fade * 2.4 * (0.45 + 0.55 * uNight), 1.0);
        }`,transparent:!0,blending:Fe,depthWrite:!1,side:xe,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});this.ley=new Pt(u,d),this.ley.frustumCulled=!1,this.ley.renderOrder=3,this.world.add(this.ley)}_rain(){const e=new Float32Array(20800),n=new Float32Array(2600*2),i=new Float32Array(2600*2*3);for(let o=0;o<2600;o++){const a=[Math.random()*40,Math.random()*40,Math.random(),Math.random()];for(let l=0;l<2;l++)e.set(a,(o*2+l)*4),n[o*2+l]=l}const s=new ee;s.setAttribute("position",new Ot(i,3)),s.setAttribute("aSeed",new Ot(e,4)),s.setAttribute("aEnd",new Ot(n,1)),this.rainU={uTime:Yn.uTime,uRain:{value:0},uHeight:{value:30},uBox:{value:40},uCam:{value:new E}},this.rainMesh=new fa(s,new Qt({uniforms:this.rainU,vertexShader:BM,fragmentShader:HM,transparent:!0,blending:Fe,depthWrite:!1,fog:!1})),this.rainMesh.frustumCulled=!1,this.rainMesh.renderOrder=6,this.world.add(this.rainMesh)}update(t,e,n,i){const s=1-i.daylight;Yn.uNight.value=s,this.world.visible=this.city.group.visible,this.rainTarget=this.rainOverride??(s>.5?Vo(.3,.8,.5+.5*Math.sin(n*.017+2)):0),this.rain+=(this.rainTarget-this.rain)*Math.min(1,t*.35),this.rainU.uRain.value=this.rain,this.rainU.uCam.value.copy(e),this.rainMesh.visible=this.rain>.02,i.wetness=this.rain,this.parts.signs&&(this.parts.signs.material.uniforms.uGain.value=2.6),this.parts.cones&&(this.parts.cones.material.uniforms.uStrength.value=.34*s);for(const l of this.beams||[])l.beam.visible=s>.35,l.beam.material.uniforms.uStrength.value=.6*Vo(.35,.8,s),l.beam.rotation.set(.42+.28*Math.sin(n*.31+l.ph),n*.23+l.ph,0,"YXZ");for(const l of this.crowns||[]){const c=Vo(.15,.6,s);if(l.kind==="esb"){const h=n*.025%1;l.mat.uniforms.uColor.value.setHSL(h,.9,.55),l.mat.uniforms.uStrength.value=1.5*c}else l.mat.uniforms.uStrength.value=(1.1+.4*Math.sin(n*1.1))*c;l.mesh.visible=c>.01}this.torch&&(this.torch.flame.material.uniforms.uTime.value=n,this.torch.halo.material.opacity=.35+.15*Math.sin(n*7));const o=Vo(.1,.6,s);for(const l of this.heliLights||[]){const c=n+l.ph;l.red.material.opacity=o*(.2+.8*(Math.sin(c*4.2)>.6?1:0));const h=c%1.4;l.white.material.opacity=o*(h<.08||h>.22&&h<.3?1:0)}const a=7e3;for(const l of this.planes||[]){l.t+=l.speed*t/a,l.t>1&&(l.t-=1);const c=(l.t-.5)*a,h=Math.cos(l.ang),u=Math.sin(l.ang);l.g.position.set(h*c-u*l.off,l.alt,u*c+h*l.off),l.g.rotation.y=-Math.atan2(u,h),l.g.visible=!0;const d=l.lights,f=n+l.ang*7;d.red.material.opacity=d.green.material.opacity=o*.9,d.tail.material.opacity=o*.6;const m=f%1.6<.07||f%1.6>.2&&f%1.6<.27?1:0;d.strobeL.material.opacity=d.strobeR.material.opacity=o*m,d.beacon.material.opacity=o*(f%1.1<.12?1:0)}this.smoke&&(this.smoke.mesh.material.color.setRGB(.78,.8,.84).lerp(new $(.32,.34,.5),s),this.smoke.update(t,.4,n))}}const VM={name:"StreetMirror",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uWet:{value:.5},uStrength:{value:1}},vertexShader:`
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
  `};class WM extends Pt{constructor(t,e,n,i){super(t,new Qt({uniforms:Zn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.camera=new rn,this.hide=i;const s=new Xe(n.w,n.h,{type:an});this.rt=s;const o=new At;this.material.uniforms.tDiffuse.value=s.texture,this.material.uniforms.textureMatrix.value=o;const a=this,l=new E,c=new E,h=new E,u=new E,d=new E,f=new E,m=new At,b=this.camera;this.onBeforeRender=function(g,p,v){if(l.setFromMatrixPosition(a.matrixWorld),c.setFromMatrixPosition(v.matrixWorld),m.extractRotation(a.matrixWorld),h.set(0,0,1).applyMatrix4(m),u.subVectors(l,c),u.dot(h)>0)return;u.reflect(h).negate().add(l),m.extractRotation(v.matrixWorld),f.set(0,0,-1).applyMatrix4(m).add(c),d.subVectors(l,f).reflect(h).negate().add(l),b.position.copy(u),b.up.set(0,1,0).applyMatrix4(m).reflect(h),b.lookAt(d),b.far=v.far,b.near=v.near,b.updateMatrixWorld(),b.projectionMatrix.copy(v.projectionMatrix),b.projectionMatrixInverse.copy(v.projectionMatrixInverse),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(b.projectionMatrix).multiply(b.matrixWorldInverse).multiply(a.matrixWorld),a.visible=!1;const _=[];for(const M of a.hide())M&&M.visible&&(M.visible=!1,_.push(M));const x=g.getRenderTarget(),y=g.shadowMap.autoUpdate;g.shadowMap.autoUpdate=!1,g.setRenderTarget(s),g.state.buffers.depth.setMask(!0),g.autoClear===!1&&g.clear(),g.render(p,b),g.shadowMap.autoUpdate=y,g.setRenderTarget(x),v.viewport!==void 0&&g.state.viewport(v.viewport);for(const M of _)M.visible=!0;a.visible=!0}}}function jM(r,t,e){if(!t.reflect)return null;const n=new nh(r.island.map(([l,c])=>new rt(l,-c))),i=new Aa(n),s=t.reflect*Math.min(devicePixelRatio,t.pixelRatio),o=new WM(i,VM,{w:Math.round(innerWidth*s),h:Math.round(innerHeight*s)},e);o.rotation.x=-Math.PI/2,o.position.y=r.ground.y+.03;const a=o.material;return a.transparent=!0,a.depthWrite=!1,a.polygonOffset=!0,a.polygonOffsetFactor=-1,a.polygonOffsetUnits=-2,o.renderOrder=2,o.frustumCulled=!1,o}const fd=1800;function Cl(r){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");if(r===0){const i=e.createLinearGradient(0,0,512,256);i.addColorStop(0,"#5b1d8a"),i.addColorStop(.5,"#c22bb5"),i.addColorStop(1,"#2b8ac2"),e.fillStyle=i,e.fillRect(0,0,512,256),e.fillStyle="#fff",e.font="900 92px ui-sans-serif, system-ui",e.textAlign="center",e.fillText("WANDER",256,118),e.font="600 34px ui-monospace, monospace",e.fillText("· A WORLD AWAY ·",256,180)}else if(r===1){e.fillStyle="#06090f",e.fillRect(0,0,512,256),e.fillStyle="#19e3d2";for(let i=0;i<9;i++){const s=40+Math.random()*170;e.fillRect(24+i*54,236-s,34,s)}e.fillStyle="#e8fbff",e.font="700 40px ui-monospace, monospace",e.textAlign="left",e.fillText("NYSE ▲ 2.4%",24,40),e.fillStyle="#ff5b5b",e.font="700 26px ui-monospace, monospace",e.fillText("WAND ▼ 0.1%",24,76)}else e.fillStyle="#160d04",e.fillRect(0,0,512,256),e.fillStyle="#ffd25e",e.fillRect(0,0,512,14),e.fillRect(0,242,512,14),e.font="900 84px ui-serif, Georgia, serif",e.textAlign="center",e.fillText("TONIGHT",256,108),e.font="700 44px ui-serif, Georgia, serif",e.fillText("THE GATE ON BROADWAY",256,178),e.fillStyle="#e86fd6",e.font="500 26px ui-monospace, monospace",e.fillText("★ ★ ★ ★ ★",256,224);const n=new ya(t);return n.colorSpace=Ne,n.wrapS=Zi,n}class XM{constructor(t,e,n){this.scene=t,this.timeU=n,this.group=new ye,this.group.visible=!1,t.add(this.group),this.gateRoot=new ye,this.gateRoot.visible=!1,t.add(this.gateRoot),this.built=!1,this._cam=new E,this.sites=[],this.onDiscover=null,this.colliders=new Qs,this.buildings=[],this._hash=new Map,this._nightMats=[],this.CITY_HALF=fd,this._m=new At,this._q=new ve,this._e=new qe,this._v=new E,this._s=new E,this._c=new $}_setRot(t,e,n){this.rot=t,this._cos=Math.cos(t),this._sin=Math.sin(t),this._offX=e,this._offZ=n,this.group.rotation.y=t,this.group.position.set(e,0,n),this.gateFwd={x:-this._sin,z:-this._cos}}toWorld(t,e){return{x:t*this._cos+e*this._sin+this._offX,z:-t*this._sin+e*this._cos+this._offZ}}toLocal(t,e){const n=t-this._offX,i=e-this._offZ;return{x:n*this._cos-i*this._sin,z:n*this._sin+i*this._cos}}_hashKey(t,e){return(t+4096)*8192+(e+4096)}_buildHash(){this._hash.clear(),this.buildings.forEach((e,n)=>{const i=Math.floor(e[0]/64),s=Math.floor(e[1]/64),o=Math.floor(e[2]/64),a=Math.floor(e[3]/64);for(let l=i;l<=s;l++)for(let c=o;c<=a;c++){const h=this._hashKey(l,c);let u=this._hash.get(h);u||this._hash.set(h,u=[]),u.push(n)}}),this._cell=64}xEdgeAt(t,e){const n=this._island;let i=null;for(let s=0;s<n.length;s++){const[o,a]=n[s],[l,c]=n[(s+1)%n.length];if(Math.min(a,c)-1e-6<=t&&t<=Math.max(a,c)+1e-6&&Math.abs(c-a)>1e-6){const h=(t-a)/(c-a);if(h>=0&&h<=1){const u=o+h*(l-o);(i===null||e<0&&u<i||e>0&&u>i)&&(i=u)}}}return i===null?e<0?-380:420:i}inIsland(t,e){const n=this._island;let i=!1;for(let s=0,o=n.length-1;s<n.length;o=s++){const[a,l]=n[s],[c,h]=n[o];l>e!=h>e&&t<(c-a)*(e-l)/(h-l+1e-12)+a&&(i=!i)}return i}heightAt(t,e){if(!this.built)return 2;const n=this.toLocal(t,e),i=this._cell,s=Math.floor(n.x/i),o=Math.floor(n.z/i),a=this._hash.get(this._hashKey(s,o));let l=-1/0;if(a)for(const c of a){const h=this.buildings[c];n.x>h[0]&&n.x<h[1]&&n.z>h[2]&&n.z<h[3]&&h[4]>l&&(l=h[4])}return l>-1/0?l:this.inIsland(n.x,n.z)?2:-6}slopeAt(){return 0}biomeName(t,e){if(!this.built)return"New York";const n=this.toLocal(t,e),{PARK:i}=this._rects;return n.x>i.x0&&n.x<i.x1&&n.z>i.z0&&n.z<i.z1?"Central Park":n.z>430?"Lower Manhattan":n.z>-120?"Village & SoHo":n.z>i.z1?n.z>-620?"Midtown South":"Midtown":n.z>i.z0?"Central Park":n.z>-1728?"Upper West & East Side":n.z>-2345&&this.inIsland(n.x,n.z)?"Harlem & Heights":n.x>460&&n.z>160?"Brooklyn":n.x>460&&n.z<150?"Queens":n.x<-460?"New Jersey":Math.hypot(n.x-this._statue[0],n.z-this._statue[1])<60?"Liberty Island":"The Harbor"}async build(){if(this.built)return;this.built=!0;const t=new ir;t.setMeshoptDecoder(AM);const e=N=>t.loadAsync(`assets/${N}.glb`).then(W=>W.scene).catch(()=>(console.warn(`[city] asset missing: ${N}.glb`),null)),[n,i,s,o,a,l,c,h,u,d,f,m,b,g,p,v,_]=await Promise.all([fetch("assets/city/city_layout.json").then(N=>N.json()),e("city/city_ground"),e("city/city_blocks"),e("city/city_landmarks"),e("city/city_bridges"),e("city/city_backdrop"),e("city/city_props"),e("city/city_taxi"),e("city/city_bus"),e("city/city_truck"),e("city/city_ferry"),e("city/city_heli"),e("city/tree_park"),e("city/tree_street"),e("streetlight"),e("car"),e("nature_trees")]);if(!n){console.warn("[city] layout missing");return}this._L=n,this._island=n.island,this._rects={PARK:n.park,BATTERY:n.battery,WASHSQ:n.washsq},this._statue=n.sites.find(N=>N.type==="monument"),this._statue=[this._statue.x,this._statue.z];let x=1e9,y=-1e9,M=1e9,T=-1e9;const R=(N,W,Q,ot)=>{for(const[St,Ut]of[[N,Q],[W,Q],[W,ot],[N,ot]]){const Ft=St*Math.cos(n.rot)+Ut*Math.sin(n.rot),Nt=-St*Math.sin(n.rot)+Ut*Math.cos(n.rot);x=Math.min(x,Ft),y=Math.max(y,Ft),M=Math.min(M,Nt),T=Math.max(T,Nt)}};for(const[N,W,Q,ot]of n.buildings)R(N,W,Q,ot);const w=n.rot;this._setRot(w,-(x+y)/2,-(M+T)/2);const S={concrete:2.6,grass:3,sidewalk:2.9,water_pond:2.7,path:2.6,asphalt:1.6,asphalt_st:1.35,asphalt_bw:1.15,paint_white:.9,paint_yellow:.9,sign_glow:.8,dark_metal:.8,stone_mid:.8,pier_wood:.8,trunk:.8},P=new Set;for(const N of[i,s,o,a,l,c])N&&(N.traverse(W=>{if(W.isMesh){W.castShadow=!0,W.receiveShadow=!0,W.material?.name?.startsWith("facade")&&(this._nightMats.includes(W.material)||this._nightMats.push(W.material),CM(W.material));const Q=W.material?.name;Q==="grass"?RM(W.material):(Q==="sidewalk"||Q==="concrete")&&PM(W.material);const ot=S[W.material?.name];ot&&!P.has(W.material)&&(P.add(W.material),W.material.polygonOffset=!0,W.material.polygonOffsetFactor=1,W.material.polygonOffsetUnits=ot)}}),this.group.add(N));this._lampMat=null,c&&c.traverse(N=>{N.isMesh&&N.material?.name==="sign_glow"&&(N.castShadow=!1)}),this._mirror=jM(n,this.quality||{reflect:0},()=>[i,l,...this.extraHide||[]]),this._mirror&&this.group.add(this._mirror),this.buildings=n.buildings,this._buildHash();for(const[N,W,Q,ot,St]of n.buildings){if(St<=4)continue;const Ut=this.toWorld((N+W)/2,(Q+ot)/2);this.colliders.addBox(Ut.x,Ut.z,(W-N)/2,(ot-Q)/2,2,St,w)}const I=n.gate;this.gateLocal=I,this.gatePos=this.toWorld(I.x,I.z),this.gatePos.ry=this.rot+Math.PI;const z=N=>{const W=[];return N?.traverse(Q=>{Q.isMesh&&W.push(Q)}),W};if(p&&n.lamps?.length){const N=z(p);this._lampMat=N.find(W=>W.material?.name==="sl_lamp")?.material||null,N.forEach((W,Q)=>{const ot=new Pe(W.geometry,W.material,n.lamps.length);ot.frustumCulled=!1,n.lamps.forEach(([St,Ut,Ft,Nt],K)=>{this._v.set(St,2.35,Ut),this._e.set(0,Math.atan2(Ft,Nt),0),this._q.setFromEuler(this._e),this._s.setScalar(1),this._m.compose(this._v,this._q,this._s),ot.setMatrixAt(K,this._m)}),ot.instanceMatrix.needsUpdate=!0,Q===N.length-1&&(ot.castShadow=!1),this.group.add(ot)});for(const[W,Q]of n.lamps){const ot=this.toWorld(W,Q);this.colliders.addCylinder(ot.x,ot.z,.3,2,9)}}this._treeCrowns=[];const H=(N,W,Q)=>{if(!N||!W?.length)return;const ot=z(N);ot.forEach((St,Ut)=>{const Ft=new Pe(St.geometry,St.material,W.length);Ft.frustumCulled=!1,W.forEach(([Nt,K,J],gt)=>{this._v.set(Nt,2.15,K),this._e.set(0,gt*2.399%(Math.PI*2),0),this._q.setFromEuler(this._e),this._s.setScalar(J),this._m.compose(this._v,this._q,this._s),Ft.setMatrixAt(gt,this._m),St.material?.name?.startsWith("leaf")&&(this._c.setHSL(.29+gt*.618%1*.08,.45,.3+gt*.383%1*.14),Ft.setColorAt(gt,this._c))}),Ft.instanceMatrix.needsUpdate=!0,Ft.instanceColor&&(Ft.instanceColor.needsUpdate=!0),Ut===ot.length-1&&(Ft.castShadow=!1),this.group.add(Ft),this._treeCrowns.push(Ft)});for(const[St,Ut,Ft]of W){const Nt=this.toWorld(St,Ut);this.colliders.addCylinder(Nt.x,Nt.z,Q*Ft,2,2+3.4*Ft)}},G={};_?.traverse(N=>{N.isMesh&&(G[N.name]=N.geometry)});const X=(N,W,Q,ot)=>{const St=W.map(()=>[]);N.forEach((Ft,Nt)=>St[Nt%W.length].push(Ft));const Ut=new oe({vertexColors:!0,roughness:.92});W.forEach((Ft,Nt)=>{const K=St[Nt];if(!K.length||!G[Ft])return;const J=new Pe(G[Ft],Ut,K.length);K.forEach(([gt,Ht,Ct],qt)=>{this._v.set(gt,2.15,Ht),this._e.set(0,(qt*2.399+Nt)%(Math.PI*2),0),this._q.setFromEuler(this._e),this._s.setScalar(Ct*Q),this._m.compose(this._v,this._q,this._s),J.setMatrixAt(qt,this._m),this._c.setRGB(.88+qt*.618%1*.24,.92+qt*.383%1*.14,.9+qt*.271%1*.16),J.setColorAt(qt,this._c)}),J.instanceMatrix.needsUpdate=!0,J.instanceColor.needsUpdate=!0,J.frustumCulled=!1,J.castShadow=!0,J.receiveShadow=!0,this.group.add(J),this._treeCrowns.push(J)});for(const[Ft,Nt,K]of N){const J=this.toWorld(Ft,Nt);this.colliders.addCylinder(J.x,J.z,ot*K*Q,2,2+3.2*K*Q)}};if(G.oak_a&&n.park_trees?.length?(X(n.park_trees,["oak_a","oak_b","birch","blossom","oak_a","autumn"],.82,.55),X(n.street_trees||[],["birch","oak_b","blossom"],.55,.5)):(H(b,n.park_trees,.5),H(g,n.street_trees,.32)),this._buildTraffic(n,{car:v,taxi:h,bus:u,truck:d},z),this.ferry=null,f){const N=f.clone(!0);N.position.set(150,.4,700),N.rotation.y=Math.PI/2,this.group.add(N);const W=f.clone(!0);this.group.add(W);const Q=n.ferry;this.ferry={g:W,cx:Q.cx,cz:Q.cz,rx:Q.rx,rz:Q.rz,y:Q.y,ph:0,w:.05}}if(this.helis=[],m)for(const N of n.helis){const W=m.clone(!0);this.group.add(W);let Q=null;W.traverse(ot=>{ot.isMesh&&ot.material?.name==="heli_rotor"&&(Q=ot)}),this.helis.push({g:W,rotor:Q,...N,ph:N.ph})}this.billboards=[];const tt=[Cl(0),Cl(1),Cl(2)];for(const N of n.screens){const W=new Pt(new vn(N.w,N.h),new $e({map:tt[N.kind%3],color:new $(2.2,2.2,2.2),toneMapped:!1}));W.position.set(N.x,N.y,N.z),W.rotation.y=N.ry,LM(W.material),this.group.add(W),this.billboards.push({mesh:W,speed:.02+N.kind%3*.017})}this.sites=n.sites.map((N,W)=>{const Q=this.toWorld(N.x,N.z);return{...N,id:`city-${W}`,world:"city",x:Q.x,z:Q.z,y:2,discoverR:N.r,discovered:!1}}),this.mapHalf=Math.max(1200,Math.ceil(Math.max(y-x,T-M)/2)+60),this.mapBase=this.renderMapBase(540),this.fx=new GM(this,n,this.group),this.fx.build()}_buildTraffic(t,e,n){const i=(function(y){return function(){y|=0,y=y+1831565812|0;let M=Math.imul(y^y>>>15,1|y);return M=M+Math.imul(M^M>>>7,61|M)^M,((M^M>>>14)>>>0)/4294967296}})(20260412),s=[14672872,2237996,9252655,3100045,13215039,4880988,8030356],o={car:2.2,taxi:2.25,bus:5.75,truck:5.2},a=[],l=x=>(a.push(x),x),c=(x,y)=>x.map(([M,T])=>{const R=y?t.avenues.map(w=>[w.x-9.5,w.x+9.5]):t.streets.map(w=>[w-7.5,w+7.5]);for(const[w,S]of R)M>w&&M<S&&(M=S+2),T>w&&T<S&&(T=w-2);return[M,T]}).filter(([M,T])=>T-M>60),h=[];for(const x of t.avenues){const y=c(x.runs?.length?x.runs:[[x.z0,x.z1]],!1);for(const[M,T]of y){const R={x:x.x,z0:M,z1:T,lanes:[]};for(const[w,S]of[[2.2,-1],[5.8,-1],[-2.2,1],[-5.8,1]])R.lanes.push(l({x:x.x+w,z:(M+T)/2,dx:0,dz:S,half:(T-M)/2,kind:"av",prio:2,inter:[],cars:[]}));h.push(R)}}const u=[t.park,t.washsq,t.battery],d=t.streets.filter((x,y)=>y%5===2),f=[];for(const x of d){let y=[[this.xEdgeAt(x,-1)+8,this.xEdgeAt(x,1)-8]];for(const M of u){if(x<M.z0-3||x>M.z1+3)continue;const T=[];for(const[R,w]of y){if(w<=M.x0-3||R>=M.x1+3){T.push([R,w]);continue}R<M.x0-3&&T.push([R,M.x0-3]),w>M.x1+3&&T.push([M.x1+3,w])}y=T}y=c(y,!0);for(const[M,T]of y){if(T-M<90)continue;const R={z:x,lanes:[]};for(const[w,S]of[[2.6,1],[-2.6,-1]])R.lanes.push(l({x:(M+T)/2,z:x+w,dx:S,dz:0,half:(T-M)/2,kind:"st",prio:0,inter:[],cars:[]}));f.push(R)}}this._inters=new Map;const m=x=>{let y=this._inters.get(x);return y||this._inters.set(x,y={blocked:-1,claims:new Map}),y},b=(x,y,M,T)=>{const R=T+2;M>x.half-1||M<R-x.half+2||x.inter.push({obj:y,s:M,block:T,stop:R})},g=15/2+2,p=11/2+2;for(const x of h)for(const y of f){if(y.z<x.z0||y.z>x.z1||!y.lanes.some(T=>Math.abs(x.x-T.x)<=T.half))continue;const M=m(`a${x.x}s${y.z}`);for(const T of x.lanes)b(T,M,(y.z-T.z)*T.dz,p);for(const T of y.lanes)Math.abs(x.x-T.x)<=T.half&&b(T,M,(x.x-T.x)*T.dx,g)}const v=[];for(const x of a){const y=x.half*2,M=Math.max(1,Math.floor((y-24)/34)),T=Math.min((x.kind==="av"?3:1)+Math.floor(i()*2),M);for(let R=0;R<T;R++){const w=i(),S=w<.3?"taxi":w<.36?"bus":w<.5?"truck":"car";v.push({lane:x,t:0,speed:0,vmax:S==="bus"||S==="truck"?9+i()*3:12+i()*9,half:o[S],color:s[Math.floor(i()*s.length)],kind:S})}}for(const x of a){const y=v.filter(R=>R.lane===x),M=Math.max(26,Math.min(85,(x.half*2-20)/y.length));let T=-x.half+8+i()*6;y.forEach((R,w)=>{R.t=Math.min(T+w*M,x.half-8),R.speed=R.vmax*(.5+i()*.5)}),x.cars=y}this._lanes=a,this._laneOrder=a.slice().sort((x,y)=>y.prio-x.prio),this.cars=v,this.carMeshes=[];const _=new $;for(const x of["car","taxi","bus","truck"]){const y=e[x];if(!y)continue;const M=v.filter(T=>T.kind===x);M.length&&n(y).forEach((T,R)=>{const w=new Pe(T.geometry,T.material,M.length);w.frustumCulled=!1,w.castShadow=R<2,this.group.add(w),this.carMeshes.push({inst:w,list:M,part:T,isBody:!!T.material?.name?.includes("body")}),M.forEach((S,P)=>{S.kind==="car"&&T.material?.name==="car_body"&&w.setColorAt(P,_.setHex(S.color))}),w.instanceColor&&(w.instanceColor.needsUpdate=!0)})}}renderMapBase(t){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),i=this.mapHalf||fd,s=t/(i*2),o=(h,u)=>[(h+i)*s,(u+i)*s],a=(h,u=!0)=>{n.beginPath(),h.forEach(([d,f],m)=>{const[b,g]=o(d,f);m===0?n.moveTo(b,g):n.lineTo(b,g)}),u&&n.closePath()},l=h=>h.map(([u,d])=>{const f=this.toWorld(u,d);return[f.x,f.z]});n.fillStyle="#081624",n.fillRect(0,0,t,t);for(const[h,u,d,f,m]of this.buildings)m>3.5||u-h<40&&f-d<40||(a(l([[h,d],[u,d],[u,f],[h,f]])),n.fillStyle="#122233",n.fill());a(l(this._island)),n.fillStyle="#1b2a3b",n.fill(),n.strokeStyle="#4d6b86",n.lineWidth=1.5,n.stroke();const c=[["park","#1d5545"],["battery","#194636"],["washsq","#194636"]];for(const[h,u]of c){const d=this._rects[h];d&&(a(l([[d.x0,d.z0],[d.x1,d.z0],[d.x1,d.z1],[d.x0,d.z1]])),n.fillStyle=u,n.fill())}n.strokeStyle="#34495f",n.lineWidth=Math.max(1,3.2*s),n.beginPath();for(const h of this._L.avenues){const u=h.runs?.length?h.runs:[[h.z0,h.z1]];for(const[d,f]of u){const[m,b]=o(...Object.values(this.toWorld(h.x,d))),[g,p]=o(...Object.values(this.toWorld(h.x,f)));n.moveTo(m,b),n.lineTo(g,p)}}for(const h of this._L.streets){const u=this._rects.PARK,d=this.xEdgeAt(h,-1),f=this.xEdgeAt(h,1),m=h<u.z1&&h>u.z0?[[d,u.x0-4],[u.x1+4,f]]:[[d,f]];for(const[b,g]of m){const[p,v]=o(...Object.values(this.toWorld(b,h))),[_,x]=o(...Object.values(this.toWorld(g,h)));n.moveTo(p,v),n.lineTo(_,x)}}n.stroke(),n.strokeStyle="#e86fd6",n.lineWidth=Math.max(1.5,3.4*s),n.beginPath();for(const[h,u,d,f]of this._L.broadway){const[m,b]=o(...Object.values(this.toWorld(h,u))),[g,p]=o(...Object.values(this.toWorld(d,f)));n.moveTo(m,b),n.lineTo(g,p)}n.stroke(),n.strokeStyle="#f0b35a",n.lineWidth=Math.max(1.5,3*s);for(const h of this._L.bridges){const[u,d]=o(...Object.values(this.toWorld(h.p0[0],h.p0[1]))),[f,m]=o(...Object.values(this.toWorld(h.p1[0],h.p1[1])));n.beginPath(),n.moveTo(u,d),n.lineTo(f,m),n.stroke()}return e}update(t,e,n,i){if(!this.built||!this._L)return;const s=1-i.daylight;if(to.value=n,this._mirror){const a=this._mirror.material.uniforms;a.uTime&&(a.uTime.value=n),a.uWet&&(a.uWet.value=.3+.55*s+.3*(this.fx?.rain||0))}this.fx?.update(t,this._cam.set(e.x,e.y+1.6,e.z),n,i);for(const a of this.sites)a.discovered||Math.hypot(e.x-a.x,e.z-a.z)<a.discoverR&&(a.discovered=!0,this.onDiscover?.(a));const o=Math.pow(s,1.3);for(const a of this._nightMats)a.emissiveIntensity=o*2.1;this._lampMat&&(this._lampMat.emissiveIntensity=.4+s*3.2);for(const a of this.billboards)a.mesh.material.map.offset.x+=a.speed*t;if(this._lanes){t=Math.min(t,.1);const{_m:a,_q:l,_e:c,_v:h,_s:u}=this,d=this._frame=(this._frame||0)+1,f=3,m=4,b=7,g=1.4;for(const p of this._lanes)for(const v of p.inter)for(const _ of p.cars)if(Math.abs(_.t-v.s)<v.block){v.obj.blocked=d;break}for(const p of this._laneOrder){const v=p.cars.slice().sort((_,x)=>_.t-x.t);for(let _=v.length-1;_>=0;_--){const x=v[_],y=_<v.length-1,M=y?v[_+1]:null,T=y?M.t-x.t-x.half-M.half:1e9;let R=Math.min(x.vmax,Math.sqrt(2*m*Math.max(0,T-g))),w=null;const S=Math.max(16,x.speed*x.speed/(2*b)+6);for(const I of p.inter){const z=I.obj,H=I.s-I.stop-x.t;if(H<-.6){x.t<I.s+I.block+x.half+1&&z.claims.set(p,x);continue}if(z.blocked===d){R=Math.min(R,Math.sqrt(2*b*Math.max(0,H))),(w===null||H<w)&&(w=H);continue}let G=!1;for(const X of z.claims.keys())if(X!==p){G=!0;break}if(G){R=Math.min(R,Math.sqrt(2*b*Math.max(0,H))),(w===null||H<w)&&(w=H);continue}H<S&&z.claims.set(p,x)}x.speed+=Math.min(Math.max(R-x.speed,-6*t),f*t),x.speed<0&&(x.speed=0);let P=x.speed*t;if(w!==null&&P>w&&(P=Math.max(0,w)),x.t+=P,x.t>p.half){const I=v[0]!==x?v[0]:null;!I||I.t- -p.half>I.half+x.half+1?x.t=-p.half+.5:(x.t=p.half-.2,x.speed=0)}if(y){const I=M.t-x.t,z=x.half+M.half+.4;if(I>=0&&I<z){let H=Math.max(-p.half+.5,M.t-z);w!==null&&(H=Math.min(H,x.t+Math.max(0,w))),x.t=H,x.speed=Math.min(x.speed,M.speed)}}}}for(const p of this._inters.values())p.claims.clear();for(const{inst:p,list:v}of this.carMeshes)v.forEach((_,x)=>{h.set(_.lane.x+_.lane.dx*_.t,2.06,_.lane.z+_.lane.dz*_.t),c.set(0,Math.atan2(_.lane.dx,_.lane.dz),0),l.setFromEuler(c),u.setScalar(1),a.compose(h,l,u),p.setMatrixAt(x,a)}),p.instanceMatrix.needsUpdate=!0}if(this.ferry){const a=this.ferry;a.ph+=a.w*t;const l=a.cx+Math.cos(a.ph)*a.rx,c=a.cz+Math.sin(a.ph)*a.rz;a.g.position.set(l,a.y,c);const h=a.cx+Math.cos(a.ph+.05)*a.rx,u=a.cz+Math.sin(a.ph+.05)*a.rz;a.g.rotation.y=Math.atan2(h-l,u-c)-Math.PI/2,a.g.position.y=a.y+Math.sin(n*.7)*.18}for(const a of this.helis)a.ph+=a.w*t,a.g.position.set(Math.cos(a.ph)*a.r,2+a.h+Math.sin(n*.9+a.r)*4,Math.sin(a.ph)*a.r),a.g.rotation.set(.12,-a.ph+(a.w>0?-Math.PI/2:Math.PI/2),0),a.rotor&&(a.rotor.rotation.y=n*22)}}class qM{constructor(t,e,n,i){this.terrain=t,this.sky=i,this.mode="nature",this.city=new XM(e,n),this.natureRoots=[],this.pois=null,this.portalSite=null,this.onModeChange=null,this.onWarp=null,this._fade=this._makeFade(),this.natureColliders=new Qs,this._cityLinked=!1}get colliders(){return this.mode==="city"&&this.city.colliders?this.city.colliders:this.natureColliders}linkCityColliders(){this._cityLinked||!this.city.built||!this.portal?.cityColliders||(this.city.colliders.absorb(this.portal.cityColliders),this._cityLinked=!0)}sites(){if(this.mode==="city")return this.city.built?this.city.sites:[];const t=this.pois?[...this.pois.sites]:[];return this.portalSite&&t.push(this.portalSite),t}gateMarker(){if(this.portal){const t=this.mode==="city"?this.portal.city:this.portal.nature;if(t)return{x:t.pos.x,z:t.pos.z}}return this.portalSite?{x:this.portalSite.x,z:this.portalSite.z}:null}mapBase(t,e=this.mode){return e==="city"&&this.city.built?this.city.renderMapBase(t):Zy(this.terrain,t)}_makeFade(){const t=document.createElement("div");return t.id="fade",t.innerHTML="<span>weaving worlds…</span>",document.body.appendChild(t),t}attachNature(t){this.natureRoots.push(...t.filter(Boolean))}heightAt(t,e){return this.mode==="nature"?this.terrain.heightAt(t,e):this.city.heightAt(t,e)}slopeAt(t,e,n=3){return this.mode==="nature"?this.terrain.slopeAt(t,e,n):this.city.slopeAt(t,e)}biomeName(t,e){return this.mode==="city"?this.city.biomeName(t,e):null}tweakFog(){this.mode==="city"&&this.sky.scene.fog&&(this.sky.scene.fog.far=Math.min(this.sky.scene.fog.far,2100),this.sky.scene.fog.near=Math.max(this.sky.scene.fog.near,90))}arrival(t){if(t==="city"){const e=this.city.gatePos||{x:0,z:665},n=this.city.gateFwd||{x:0,z:-1};return{x:e.x+n.x*6,z:e.z+n.z*6,yaw:Math.atan2(-n.x,-n.z),pitch:0}}return{x:Oe.x,z:Oe.z+7,yaw:Math.PI,pitch:0}}async prepareCity(t){this.city.built&&this._cityPrepared||(this.city.built||await this.city.build(),!this._cityPrepared&&this.city.gateRoot&&(t.attachCityEnd(this.city.gateRoot,this.city.gatePos.x,2+3.9,this.city.gatePos.z,this.city.gatePos.ry),this.linkCityColliders(),this._cityPrepared=!0),this.setMode(this.mode))}_warp(t,e,n){return new Promise(i=>{const s=performance.now(),o=l=>l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2,a=()=>{const l=Math.min(1,(performance.now()-s)/n);this.onWarp?.(t+(e-t)*o(l)),l<1?setTimeout(a,16):i()};a()})}async transit(t,e,n){this.transiting=!0;const i=this._fade;await this._warp(0,1,850),i.classList.add("on"),t==="city"&&await this.prepareCity(n),await new Promise(o=>setTimeout(o,180)),this.setMode(t);const s=this.arrival(t);e.pos.set(s.x,this.heightAt(s.x,s.z)+.4,s.z),e.vel.set(0,0,0),e.yaw=s.yaw,e.pitch=s.pitch,await new Promise(o=>setTimeout(o,140)),i.classList.remove("on"),await this._warp(1,0,1100),this.transiting=!1,this.onModeChange?.(t)}setMode(t){this.mode=t;const e=t==="city";for(const n of this.natureRoots)n.visible=!e;this.city.group.visible=e,this.city.gateRoot&&(this.city.gateRoot.visible=e)}}const pd="wander:settings",YM={fov:70,sens:1,invertY:!1,showFps:!1};class KM{constructor({player:t,pipeline:e,getQuality:n,applyQuality:i,adaptive:s,onReset:o,onOpen:a}){this.player=t,this.pipeline=e,this.getQuality=n,this.applyQuality=i,this.adaptive=s,this.onReset=o,this.onOpen=a,this.v={...YM};try{Object.assign(this.v,JSON.parse(localStorage.getItem(pd))||{})}catch{}this.resetArmed=!1,this._build(),this.apply(),addEventListener("keydown",l=>{l.code==="Escape"&&this.isOpen&&this.close()})}get isOpen(){return!this.el.classList.contains("hidden")}save(){try{localStorage.setItem(pd,JSON.stringify(this.v))}catch{}}apply(){this.player.baseFov=this.v.fov,this.player.camera.fov=this.v.fov,this.player.camera.updateProjectionMatrix(),this.player.sens=this.v.sens,this.player.invertY=this.v.invertY,this.fpsEl.style.display=this.v.showFps?"block":"none"}_build(){const t=["low","medium","high"];this.el=document.createElement("div"),this.el.id="settings",this.el.className="panel hidden",this.el.innerHTML=`
      <div class="panel-head">
        <span class="panel-title">${Fr("gear",18,"currentColor")} Settings</span>
        <span class="panel-sub">O or Esc to close</span>
      </div>
      <div class="set-body">
        <section>
          <h4>Graphics</h4>
          <div class="set-row"><span class="set-label">Quality</span>
            <div class="chips" data-set="quality">${t.map(s=>`<button type="button" data-v="${s}">${s[0].toUpperCase()+s.slice(1)}</button>`).join("")}</div></div>
          <div class="set-row"><span class="set-label">Smooth frame rate</span>
            <div class="chips" data-set="adaptive"><button type="button" data-v="1">On</button><button type="button" data-v="0">Off</button></div></div>
          <div class="set-row"><span class="set-label">Show frame rate</span>
            <div class="chips" data-set="fps"><button type="button" data-v="1">On</button><button type="button" data-v="0">Off</button></div></div>
          <div class="set-note" id="setQNote"></div>
        </section>
        <section>
          <h4>Controls</h4>
          <div class="set-row"><span class="set-label">Field of view</span>
            <label class="slider"><input type="range" min="55" max="95" step="1" data-set="fov"><output></output></label></div>
          <div class="set-row"><span class="set-label">Look sensitivity</span>
            <label class="slider"><input type="range" min="40" max="220" step="5" data-set="sens"><output></output></label></div>
          <div class="set-row"><span class="set-label">Invert vertical look</span>
            <div class="chips" data-set="invert"><button type="button" data-v="1">On</button><button type="button" data-v="0">Off</button></div></div>
          <div class="set-note">${Fr("gamepad",13,"currentColor")} A controller works too — sticks to move and look, Start to pause. D-pad ↑ opens photo mode.</div>
        </section>
        <section class="set-foot">
          <button type="button" id="setReset">reset progress</button>
          <button type="button" id="setDone" class="primary">Done</button>
        </section>
      </div>`,document.body.appendChild(this.el),this.fpsEl=document.createElement("div"),this.fpsEl.id="fps",document.body.appendChild(this.fpsEl);const e=s=>this.el.querySelector(s),n=(s,o)=>this.el.querySelectorAll(`[data-set="${s}"] button`).forEach(a=>a.classList.toggle("on",a.dataset.v===String(o))),i=(s,o,a)=>{const l=e(`input[data-set="${s}"]`);l.value=o,l.nextElementSibling.textContent=a(Number(o))};this.refresh=()=>{n("quality",this.getQuality().name),n("adaptive",this.adaptive.enabled?1:0),n("fps",this.v.showFps?1:0),n("invert",this.v.invertY?1:0),i("fov",this.v.fov,s=>`${s}°`),i("sens",Math.round(this.v.sens*100),s=>`${s}%`)},this.el.addEventListener("click",s=>{const o=s.target.closest("button");if(!o)return;if(o.id==="setDone")return this.close();if(o.id==="setReset"){if(!this.resetArmed){this.resetArmed=!0,o.textContent="sure? click again",setTimeout(()=>{this.resetArmed=!1,o.textContent="reset progress"},2500);return}return this.onReset()}const a=o.parentElement.dataset.set,l=o.dataset.v==="1";if(a==="quality")this.applyQuality(o.dataset.v),this._qnote();else if(a==="adaptive"){this.adaptive.enabled=l;try{localStorage.setItem("wander:adaptive",l?"1":"0")}catch{}l||(this.adaptive.level=0,this.pipeline.setScale(1))}else a==="fps"?(this.v.showFps=l,this.save(),this.apply()):a==="invert"&&(this.v.invertY=l,this.save(),this.apply());this.refresh()}),this.el.addEventListener("input",s=>{const o=s.target.dataset?.set;if(!o)return;const a=Number(s.target.value);o==="fov"?(this.v.fov=a,this.save(),this.apply(),s.target.nextElementSibling.textContent=`${a}°`):o==="sens"&&(this.v.sens=a/100,this.save(),this.apply(),s.target.nextElementSibling.textContent=`${a}%`)}),this._qnote=()=>{const s=this.getQuality();e("#setQNote").textContent=s.name===this.bootTier?"Resolution, anti-aliasing, grass, shadows and effects change immediately.":"Applied: resolution, anti-aliasing, grass and effects. Tree count and street reflections update on the next load."}}setBootTier(t){this.bootTier=t,this._qnote()}open(){this.onOpen?.(),this.refresh(),this._qnote(),this.el.classList.remove("hidden")}close(){this.el.classList.add("hidden")}toggle(){this.isOpen?this.close():this.open()}tick(t,e){this.v.showFps&&(this._t=(this._t||0)+t,this._n=(this._n||0)+1,!(this._t<.5)&&(this.fpsEl.textContent=`${Math.round(this._n/this._t)} fps · ${e()}`,this._t=0,this._n=0))}}const JM=.18;class QM{constructor({player:t,photo:e,onStart:n,hud:i}){this.player=t,this.photo=e,this.onStart=n,this.hud=i,this.prev=[],this.held=Object.create(null),this.active=!1,addEventListener("gamepadconnected",s=>{this.hud?.toast("Controller connected",s.gamepad.id.split("(")[0].trim().slice(0,40))})}_key(t,e){!!this.held[t]!==e&&(this.held[t]=e,window.dispatchEvent(new KeyboardEvent(e?"keydown":"keyup",{code:t})))}_tap(t){window.dispatchEvent(new KeyboardEvent("keydown",{code:t})),window.dispatchEvent(new KeyboardEvent("keyup",{code:t}))}update(t,e){const n=navigator.getGamepads?navigator.getGamepads():[],i=[...n].find(l=>l&&l.connected&&l.mapping==="standard")||[...n].find(l=>l&&l.connected);if(this.active=!!i,!i){this.prev=[];return}const s=l=>!!i.buttons[l]?.pressed,o=l=>s(l)&&!this.prev[l],a=this.photo.active;if((o(9)||!e&&o(0))&&this.onStart(),o(8)&&e&&!a&&this._tap("KeyM"),o(2)&&e&&!a&&this._tap("Tab"),o(13)&&this._tap("KeyH"),o(15)&&this._tap("KeyO"),o(12)&&e&&this._tap("KeyC"),o(10)&&e&&!a&&this._tap("KeyV"),e){const l=f=>Math.abs(i.axes[f]||0)>JM?i.axes[f]:0,c=l(0),h=l(1),u=l(2),d=l(3);if(this._key("KeyA",c<-.35),this._key("KeyD",c>.35),this._key("KeyW",h<-.35),this._key("KeyS",h>.35),a){this._key("ShiftLeft",Math.hypot(c,h)>.9),o(0)&&this._tap("Enter"),o(1)&&this._tap("KeyC"),this._key("KeyQ",s(4)),this._key("KeyE",s(5));const f=(i.buttons[7]?.value||0)-(i.buttons[6]?.value||0);f&&(this.photo.fov=Math.min(95,Math.max(14,this.photo.fov*Math.exp(-f*t*1.2)))),this.photo.look(u*t*900,d*t*900)}else this._key("Space",s(0)),this._key("ShiftLeft",s(1)||Math.hypot(c,h)>.97),this._key("KeyP",s(3)),s(4)&&(this.player.camDist=Math.min(9.5,this.player.camDist+t*4)),s(5)&&(this.player.camDist=Math.max(2.6,this.player.camDist-t*4)),this.player.look(u*t*900,d*t*900)}else for(const l of Object.keys(this.held))this._key(l,!1);this.prev=i.buttons.map(l=>l.pressed)}}class ZM{constructor(t,e){e.add(t),this.group=new ye,this.group.visible=!1,t.add(this.group);const n=new oe({color:10238752,roughness:.9}),i=new oe({color:4863013,roughness:.8}),s=new oe({color:14263868,roughness:.5,metalness:.3});this.arms=[];for(const d of[-1,1]){const f=new ye,m=new Pt(new je(.036,.05,.34,10),n);m.position.y=.17;const b=new Pt(new Jr(.04,.009,6,14),s);b.rotation.x=Math.PI/2,b.position.y=.335;const g=new Pt(new Di(.042,12,10),i);g.scale.set(1,1.25,.85),g.position.y=.395;const p=new Pt(new Di(.017,8,6),i);p.position.set(-d*.036,.385,-.015),f.add(m,b,g,p),f.position.set(d*.2,-.27,-.34),f.rotation.set(-.98,0,-d*.22);for(const v of f.children)v.castShadow=!1;this.group.add(f),this.arms.push({arm:f,s:d,base:f.position.clone(),rot:f.rotation.clone()})}this.lantern=new ye;const o=new oe({color:16767392,emissive:16758886,emissiveIntensity:1.5,roughness:.3}),a=new Pt(new je(.045,.045,.1,8),o),l=new oe({color:2762274,roughness:.6}),c=new Pt(new je(.02,.055,.03,8),l);c.position.y=.065;const h=new Pt(new je(.05,.05,.02,8),l);h.position.y=-.06;const u=new Pt(new Jr(.045,.006,5,12,Math.PI),l);u.position.y=.075,this.lantern.add(a,c,h,u),this.group.add(this.lantern),this.glassMat=o,this.light=new es(16758886,0,7,2),this.light.position.set(-.2,-.22,-.6),this.group.add(this.light),this.light.visible=!1,this.phase=0,this.k=0}update(t,e,{show:n,night:i}){const s=this.group;if(s.visible!==n&&(s.visible=n,this.light.visible=n),!n)return;const o=Math.hypot(e.vel.x,e.vel.z),a=e.grounded&&o>.5&&!e.inWater&&!e.flying;this.k+=((a?Math.min(1,o/14):0)-this.k)*Math.min(1,8*t),this.phase+=t*(e.flying?3:e.inWater?5.5:4+o*.45);const l=this.phase,c=o>18?1:0,h=!e.grounded&&!e.inWater&&!e.flying?Ie.clamp(e.vel.y*.012,-.12,.12):0;for(const u of this.arms){const{arm:d,s:f,base:m,rot:b}=u,g=Math.sin(l+(f>0?Math.PI:0));if(d.position.set(m.x+Math.cos(l*.5)*.008*this.k,m.y+Math.abs(Math.sin(l))*-.012*this.k+h,m.z+g*.04*this.k*(1+c)),d.rotation.set(b.x+g*.1*this.k*(1+c),b.y,b.z),e.flying)d.position.set(m.x*.6,m.y+.08,m.z-.1),d.rotation.set(-1.45+Math.sin(l*.7+f)*.04,0,-f*.12);else if(e.inWater){const p=Math.sin(l*.55+(f>0?Math.PI:0));d.position.set(m.x*.9,m.y+.05+p*.05,m.z-.08-Math.max(0,p)*.14),d.rotation.set(-1.35+p*.42,0,-f*.2)}}{const u=this.arms[0].arm;u.updateMatrix(),this.lantern.position.set(0,.41,0).applyMatrix4(u.matrix).add(this._down||(this._down=new E(0,-.1,0))),this.light.position.copy(this.lantern.position)}this.glassMat.emissiveIntensity=1+3*i+.3*Math.sin(performance.now()*.004),this.light.intensity=.08+.4*i}}const oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ii{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $M=new $r(-1,1,1,-1,0,1);class t1 extends ee{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const e1=new t1;class gi{constructor(t){this._mesh=new Pt(e1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$M)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class hh extends Ii{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Qt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Zn.clone(t.uniforms),this.material=new Qt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new gi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class md extends Ii{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class n1 extends Ii{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class i1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new rt);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hh(oa),this.copyPass.material.blending=di,this.clock=new yf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}md!==void 0&&(o instanceof md?n=!0:o instanceof n1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class s1 extends Ii{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const r1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zs extends Ii{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new $(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(s,o,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Xe(s,o,{type:an});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Xe(s,o,{type:an});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=r1;this.highPassUniforms=Zn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new rt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zn.clone(oa.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,blending:Fe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $,this._oldClearAlpha=1,this._basic=new $e,this._fsQuad=new gi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new rt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Qt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Qt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Zs.BlurDirectionX=new rt(1,0);Zs.BlurDirectionY=new rt(0,1);const jo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class o1 extends Ii{constructor(){super(),this.uniforms=Zn.clone(jo.uniforms),this.material=new Qm({name:jo.name,uniforms:this.uniforms,vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader}),this._fsQuad=new gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ed?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ld?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Xo={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new rt(1/1024,1/512)}},vertexShader:`

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

		}`},qo={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new rt(1/1024,1/512)}},vertexShader:`

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

		}`},Rl={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new rt(1/1024,1/512)}},vertexShader:`

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

		}`};class a1 extends Ii{constructor(){super(),this._edgesRT=new Xe(1,1,{depthBuffer:!1,type:an}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Xe(1,1,{depthBuffer:!1,type:an}),this._weightsRT.texture.name="SMAAPass.weights";const t=this,e=new Image;e.src=this._getAreaTexture(),e.onload=function(){t._areaTexture.needsUpdate=!0},this._areaTexture=new Ue,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=e,this._areaTexture.minFilter=Be,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){t._searchTexture.needsUpdate=!0},this._searchTexture=new Ue,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=He,this._searchTexture.minFilter=He,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Zn.clone(Xo.uniforms),this._materialEdges=new Qt({defines:Object.assign({},Xo.defines),uniforms:this._uniformsEdges,vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader}),this._uniformsWeights=Zn.clone(qo.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Qt({defines:Object.assign({},qo.defines),uniforms:this._uniformsWeights,vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader}),this._uniformsBlend=Zn.clone(Rl.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Qt({uniforms:this._uniformsBlend,vertexShader:Rl.vertexShader,fragmentShader:Rl.fragmentShader}),this._fsQuad=new gi(null)}render(t,e,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,t.setRenderTarget(this._edgesRT),this.clear&&t.clear(),this._fsQuad.render(t),this._fsQuad.material=this._materialWeights,t.setRenderTarget(this._weightsRT),this.clear&&t.clear(),this._fsQuad.render(t),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this._fsQuad.render(t))}setSize(t,e){this._edgesRT.setSize(t,e),this._weightsRT.setSize(t,e),this._materialEdges.uniforms.resolution.value.set(1/t,1/e),this._materialWeights.uniforms.resolution.value.set(1/t,1/e),this._materialBlend.uniforms.resolution.value.set(1/t,1/e)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const gd=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,If=`
  uniform float uNear;
  uniform float uFar;
  // 1 / distance (diopters) from a 0..1 depth-buffer value
  float invDist(float d) {
    float z = d * 2.0 - 1.0;
    float viewZ = 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
    return 1.0 / max(viewZ, 0.05);
  }
`,l1=`
  uniform sampler2D tDepth;
  uniform sampler2D tPrev;
  uniform float uK;
  ${If}
  varying vec2 vUv;
  void main() {
    // a small cross of taps: thin leaves or a wire at the centre won't yank the focus
    float a = 0.0;
    a += invDist(texture2D(tDepth, vec2(0.5, 0.5)).x) * 2.0;
    a += invDist(texture2D(tDepth, vec2(0.5 + 0.012, 0.5)).x);
    a += invDist(texture2D(tDepth, vec2(0.5 - 0.012, 0.5)).x);
    a += invDist(texture2D(tDepth, vec2(0.5, 0.5 + 0.02)).x);
    a += invDist(texture2D(tDepth, vec2(0.5, 0.5 - 0.02)).x);
    a /= 6.0;
    float prev = texture2D(tPrev, vec2(0.5)).r;
    gl_FragColor = vec4(mix(prev, a, uK), 0.0, 0.0, 1.0);
  }
`,c1=`
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform sampler2D tFocus;
  uniform float uAperture;   // 0 = off
  uniform float uFovScale;   // longer lenses blur more
  uniform float uAspect;
  uniform vec2 uTexel;
  ${If}
  varying vec2 vUv;

  const int TAPS = 40;
  const float MAX_COC = 0.026;    // fraction of the frame height

  float coc(float inv, float invF) {
    return min(uAperture * uFovScale * abs(inv - invF) * 0.085, MAX_COC);
  }

  void main() {
    vec4 src = texture2D(tColor, vUv);
    float invF = texture2D(tFocus, vec2(0.5)).r;
    float inv0 = invDist(texture2D(tDepth, vUv).x);
    float c0 = coc(inv0, invF);

    // gather wide enough to catch blurred foreground over a sharp pixel
    float R = max(c0, 0.25 * min(uAperture * uFovScale * 0.02, MAX_COC));
    if (R < 0.0006) { gl_FragColor = src; return; }

    float px = uTexel.y;
    float ang0 = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) * 6.2831853;
    vec3 acc = src.rgb;
    float wsum = 1.0;
    for (int i = 0; i < TAPS; i++) {
      float r = sqrt((float(i) + 0.5) / float(TAPS));
      float a = ang0 + float(i) * 2.39996323;
      vec2 o = vec2(cos(a), sin(a)) * r * R;            // in frame-height units
      vec2 uv = vUv + vec2(o.x / uAspect, o.y);
      float inv = invDist(texture2D(tDepth, uv).x);
      float cs = coc(inv, invF);
      float dist = length(o);
      // a sample counts only if its own blur disc reaches this pixel
      float w = clamp((cs - dist) / max(px * 1.5, 1e-5) + 0.5, 0.0, 1.0);
      acc += texture2D(tColor, uv).rgb * w;
      wsum += w;
    }
    gl_FragColor = vec4(acc / wsum, src.a);
  }
`;class h1{constructor(){this.aperture=0,this._snap=!0,this._last=performance.now();const t=()=>new Xe(1,1,{type:an,depthBuffer:!1,minFilter:He,magFilter:He});this._rt=[t(),t()],this._i=0,this.probeMat=new Qt({uniforms:{tDepth:{value:null},tPrev:{value:null},uK:{value:1},uNear:{value:.3},uFar:{value:15e3}},vertexShader:gd,fragmentShader:l1,depthTest:!1,depthWrite:!1}),this.probeQuad=new gi(this.probeMat),this.mat=new Qt({uniforms:{tColor:{value:null},tDepth:{value:null},tFocus:{value:null},uAperture:{value:1},uFovScale:{value:1},uAspect:{value:1},uTexel:{value:new rt(1,1)},uNear:{value:.3},uFar:{value:15e3}},vertexShader:gd,fragmentShader:c1,depthTest:!1,depthWrite:!1}),this.quad=new gi(this.mat)}get active(){return this.aperture>.001}resetFocus(){this._snap=!0}render(t,e,n,i,s,o){const a=performance.now(),l=Math.min(.1,(a-this._last)/1e3);this._last=a;const c=this._rt[this._i],h=this._rt[1-this._i],u=this.probeMat.uniforms;u.tDepth.value=i,u.tPrev.value=c.texture,u.uK.value=this._snap?1:1-Math.exp(-l*5),u.uNear.value=e.near,u.uFar.value=e.far,this._snap=!1,t.setRenderTarget(h),this.probeQuad.render(t),this._i=1-this._i;const d=this.mat.uniforms;d.tColor.value=n,d.tDepth.value=i,d.tFocus.value=h.texture,d.uAperture.value=this.aperture,d.uFovScale.value=Math.tan(Ie.degToRad(35))/Math.tan(Ie.degToRad(e.fov/2)),d.uAspect.value=s.x/s.y,d.uTexel.value.set(1/s.x,1/s.y),d.uNear.value=e.near,d.uFar.value=e.far,t.setRenderTarget(o),this.quad.render(t)}dispose(){this._rt.forEach(t=>t.dispose()),this.probeMat.dispose(),this.probeQuad.dispose(),this.mat.dispose(),this.quad.dispose()}}const vd=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,u1=`
  uniform sampler2D tDepth;
  uniform mat4 uProj;
  uniform mat4 uInvProj;
  uniform vec2 uTexel;      // 1 / size of the half-res target
  uniform float uNear;
  uniform float uFar;
  uniform float uRadius;
  varying vec2 vUv;

  float linZ(float d) {
    float z = d * 2.0 - 1.0;
    return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
  }
  vec3 viewPos(vec2 uv) {
    float d = texture2D(tDepth, uv).x;
    vec4 v = uInvProj * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
    return v.xyz / v.w;
  }

  void main() {
    float d0 = texture2D(tDepth, vUv).x;
    if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
    vec3 P = viewPos(vUv);
    if (-P.z > 140.0) { gl_FragColor = vec4(1.0); return; }

    // normal from the neighbours, taking the nearer side on each axis so edges don't smear
    vec3 Pr = viewPos(vUv + vec2(uTexel.x, 0.0)), Pl = viewPos(vUv - vec2(uTexel.x, 0.0));
    vec3 Pu = viewPos(vUv + vec2(0.0, uTexel.y)), Pd = viewPos(vUv - vec2(0.0, uTexel.y));
    vec3 dx = abs(Pr.z - P.z) < abs(Pl.z - P.z) ? Pr - P : P - Pl;
    vec3 dy = abs(Pu.z - P.z) < abs(Pd.z - P.z) ? Pu - P : P - Pd;
    vec3 N = normalize(cross(dx, dy));
    if (dot(N, -P) < 0.0) N = -N;

    vec3 T = normalize(cross(N, abs(N.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
    vec3 Bt = cross(N, T);
    float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    float radius = uRadius * (0.6 + 0.4 * smoothstep(0.0, 25.0, -P.z)); // a little wider with distance
    float occ = 0.0;
    const int K = 12;
    for (int k = 0; k < K; k++) {
      float r = (float(k) + 0.5) / float(K);
      float a = (float(k) * 2.39996323) + ign * 6.2831853;
      vec2 disk = vec2(cos(a), sin(a)) * sqrt(r);
      vec3 dir = T * disk.x + Bt * disk.y + N * sqrt(max(0.0, 1.0 - r));
      vec3 S = P + dir * radius * (0.25 + 0.75 * r);
      vec4 sp = uProj * vec4(S, 1.0);
      vec2 suv = sp.xy / sp.w * 0.5 + 0.5;
      if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) continue;
      float sceneZ = linZ(texture2D(tDepth, suv).x);
      float sampleZ = -S.z;
      float diff = sampleZ - sceneZ;
      float range = smoothstep(0.0, 1.0, radius / max(abs(-P.z - sceneZ), 1e-3));
      occ += step(0.04 + 0.01 * -P.z * 0.1, diff) * range;
    }
    float ao = 1.0 - occ / float(K);
    ao = pow(clamp(ao, 0.0, 1.0), 1.6);
    ao = mix(ao, 1.0, smoothstep(40.0, 130.0, -P.z)); // fades out with distance
    gl_FragColor = vec4(ao, ao, ao, 1.0);
  }
`,d1=`
  uniform sampler2D tAO;
  uniform sampler2D tDepth;
  uniform vec2 uTexel;
  uniform float uNear;
  uniform float uFar;
  varying vec2 vUv;
  float linZ(float d) {
    float z = d * 2.0 - 1.0;
    return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
  }
  void main() {
    float d0 = texture2D(tDepth, vUv).x;
    if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
    float z0 = linZ(d0);
    float sum = 0.0, wsum = 0.0;
    for (int y = -2; y <= 1; y++) {
      for (int x = -2; x <= 1; x++) {
        vec2 o = (vec2(float(x), float(y)) + 0.5) * uTexel;
        float z = linZ(texture2D(tDepth, vUv + o * 2.0).x);
        float w = exp(-abs(z - z0) / (0.08 * z0 + 0.15));
        sum += texture2D(tAO, vUv + o).r * w;
        wsum += w;
      }
    }
    float a = sum / max(wsum, 1e-4);
    gl_FragColor = vec4(a, a, a, 1.0);
  }
`;class f1{constructor(){const t=()=>new Xe(1,1,{type:Cn,depthBuffer:!1,minFilter:Be,magFilter:Be});this.rt=t(),this.blurRt=t(),this.radius=1.25,this.mat=new Qt({uniforms:{tDepth:{value:null},uProj:{value:new At},uInvProj:{value:new At},uTexel:{value:new rt(1,1)},uNear:{value:.3},uFar:{value:15e3},uRadius:{value:1.25}},vertexShader:vd,fragmentShader:u1,depthTest:!1,depthWrite:!1}),this.blur=new Qt({uniforms:{tAO:{value:null},tDepth:{value:null},uTexel:{value:new rt(1,1)},uNear:{value:.3},uFar:{value:15e3}},vertexShader:vd,fragmentShader:d1,depthTest:!1,depthWrite:!1}),this.quad=new gi(this.mat),this.blurQuad=new gi(this.blur)}setSize(t,e){const n=Math.max(1,Math.floor(t/2)),i=Math.max(1,Math.floor(e/2));this.rt.setSize(n,i),this.blurRt.setSize(n,i),this.mat.uniforms.uTexel.value.set(1/n,1/i),this.blur.uniforms.uTexel.value.set(1/n,1/i)}render(t,e,n){const i=this.mat.uniforms;i.tDepth.value=n,i.uProj.value.copy(e.projectionMatrix),i.uInvProj.value.copy(e.projectionMatrixInverse),i.uNear.value=e.near,i.uFar.value=e.far,i.uRadius.value=this.radius,t.setRenderTarget(this.rt),this.quad.render(t);const s=this.blur.uniforms;return s.tAO.value=this.rt.texture,s.tDepth.value=n,s.uNear.value=e.near,s.uFar.value=e.far,t.setRenderTarget(this.blurRt),this.blurQuad.render(t),this.blurRt.texture}dispose(){this.rt.dispose(),this.blurRt.dispose(),this.mat.dispose(),this.blur.dispose(),this.quad.dispose(),this.blurQuad.dispose()}}const p1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,m1=`
  uniform sampler2D tDiffuse;
  uniform sampler2D tDepth;
  uniform sampler2D tAO;
  uniform float uAO;
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
      // ---- ambient occlusion (half-res, depth-aware) ----
      if (uAO > 0.001) col *= mix(1.0, texture2D(tAO, vUv).r, uAO);

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
`;class g1 extends Ii{constructor(t){super(),this.camera=t,this.material=new Qt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tAO:{value:null},uAO:{value:0},uInvProj:{value:new At},uCamWorld:{value:new At},uCamPos:{value:new E},uSunDir:{value:new E(0,1,0)},uSunColor:{value:new $(1,.9,.7)},uSunScreen:{value:new rt(.5,.5)},uSunVis:{value:0},uMistColor:{value:new $(.7,.8,.9)},uMist:{value:6e-4},uMistFall:{value:.035},uMistBase:{value:0},uScatter:{value:.5},uShafts:{value:.35},uAspect:{value:1}},vertexShader:p1,fragmentShader:m1,depthTest:!1,depthWrite:!1}),this.fsQuad=new gi(this.material),this.u=this.material.uniforms,this._v=new E,this.dof=new h1,this.ao=new f1,this._tmp=null,this._size=new rt(1,1)}setSize(t,e){this.u.uAspect.value=t/e,this._size.set(t,e),this._tmp?.setSize(t,e),this.ao.setSize(t,e)}render(t,e,n){const i=this.camera,s=this.u;s.tDiffuse.value=n.texture,s.tDepth.value=n.depthTexture,s.tAO.value=s.uAO.value>.001?this.ao.render(t,i,n.depthTexture):null,s.uInvProj.value.copy(i.projectionMatrixInverse),s.uCamWorld.value.copy(i.matrixWorld),s.uCamPos.value.copy(i.position);const o=this._v.copy(i.position).addScaledVector(s.uSunDir.value,1e3).project(i);s.uSunScreen.value.set(o.x*.5+.5,o.y*.5+.5),i.getWorldDirection(this._fwd||(this._fwd=new E));const a=this._fwd.dot(s.uSunDir.value);s.uSunVis.value=Ie.smoothstep(a,.05,.5)*(s.uSunDir.value.y>-.05?1:0);const l=this.renderToScreen?null:e;this.dof.active?(this._tmp||(this._tmp=new Xe(this._size.x,this._size.y,{type:an,depthBuffer:!1})),t.setRenderTarget(this._tmp),this.fsQuad.render(t),this.dof.render(t,i,this._tmp.texture,n.depthTexture,this._size,l)):(t.setRenderTarget(l),this.fsQuad.render(t))}dispose(){this.dof.dispose(),this.ao.dispose(),this._tmp?.dispose(),this.material.dispose(),this.fsQuad.dispose()}}const v1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.35},uGrain:{value:.02},uChroma:{value:.0016},uSat:{value:1.1},uContrast:{value:1.06},uShadowTint:{value:new $(1,1,1)},uHighTint:{value:new $(1,1,1)},uTintAmt:{value:1},uLift:{value:0},uPortal:{value:0},uPortalTint:{value:new $(.6,.4,1)}},vertexShader:`
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
  `};function x1(){const r=new hh(v1);return r.grade=r.material.uniforms,r}const xd={nature:{sat:1.16,contrast:1.07,vignette:.34,grain:.018,chroma:.0014,shadow:[.86,.97,1.08],high:[1.08,1.03,.9]},city:{sat:1.2,contrast:1.12,vignette:.42,grain:.024,chroma:.0012,shadow:[.9,.9,1.16],high:[1.1,.98,.94]}},b1={uniforms:{tDiffuse:{value:null},uWarp:{value:0},uTime:{value:0},uTint:{value:new $(.6,.4,1)}},vertexShader:`
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
  `};function _1(){const r=new hh(b1);return r.warp=r.material.uniforms,r.enabled=!1,r}const Ze=(r,t,e)=>r+(t-r)*e;class y1{constructor(t,e,n,i){this.renderer=t,this.quality=i,this.mix=0,this.scale=1,this.onScale=null;const s=innerWidth,o=innerHeight;t.setPixelRatio(Math.min(devicePixelRatio,i.pixelRatio));const a=t.getPixelRatio(),l=new Xe(1,1,{type:an,samples:i.msaa,depthTexture:new $c(1,1)});this.composer=new i1(t,l),this.composer.setPixelRatio(a),this.composer.setSize(s,o),this.composer.addPass(new s1(e,n)),this.atmosphere=new g1(n),this.composer.addPass(this.atmosphere),this.bloom=new Zs(new rt(s,o),.5,.75,1),this.bloom.enabled=i.bloom,this.composer.addPass(this.bloom),this.composer.addPass(new o1),this.warpPass=_1(),this.composer.addPass(this.warpPass),this.gradePass=x1(),this.composer.addPass(this.gradePass),this.smaaPass=new a1,this.smaaPass.enabled=!!i.smaa,this.composer.addPass(this.smaaPass)}setQuality(t){this.quality=t,this.bloom.enabled=t.bloom,this.smaaPass.enabled=!!t.smaa;for(const e of[this.composer.renderTarget1,this.composer.renderTarget2])e.samples=t.msaa,e.dispose();this.setScale(1)}resize(){this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight)}setScale(t){this.scale=t;const e=Math.min(devicePixelRatio,this.quality.pixelRatio)*t;this.renderer.setPixelRatio(e),this.composer.setPixelRatio(e),this.composer.setSize(innerWidth,innerHeight),this.onScale?.(e)}setLook(t,e,n){this.mix=t;const i=this.gradePass.grade,s=xd.nature,o=xd.city;i.uSat.value=Ze(s.sat,o.sat,t),i.uContrast.value=Ze(s.contrast,o.contrast,t),i.uVignette.value=Ze(s.vignette,o.vignette,t),i.uGrain.value=Ze(s.grain,o.grain,t),i.uChroma.value=Ze(s.chroma,o.chroma,t),i.uTime.value=n;const a=1-e.daylight;i.uShadowTint.value.setRGB(Ze(s.shadow[0],o.shadow[0],t)*Ze(1,.9,a),Ze(s.shadow[1],o.shadow[1],t)*Ze(1,.92,a),Ze(s.shadow[2],o.shadow[2],t)*Ze(1,1.12,a)),i.uHighTint.value.setRGB(Ze(s.high[0],o.high[0],t)*Ze(1,1.04,e.dusk),Ze(s.high[1],o.high[1],t)*Ze(1,.96,e.dusk),Ze(s.high[2],o.high[2],t)*Ze(1,.86,e.dusk));const l=this.atmosphere.u;l.uSunDir.value.copy(e.sunDir),l.uSunColor.value.copy(e.sunColor),l.uMistColor.value.copy(e.horizonColor);const c=this.quality;l.uMist.value=c.mist?e.mistDensity:0,l.uShafts.value=c.shafts?e.shaftStrength:0,l.uAO.value=c.ao||0,l.uScatter.value=e.scatterStrength}setPortal(t,e){const n=this.gradePass.grade;n.uPortal.value=t,n.uPortalTint.value.copy(e),this.warpPass.enabled||this.warpPass.warp.uTint.value.copy(e)}setDof(t){const e=this.atmosphere.dof;t>0&&!e.active&&e.resetFocus(),e.aperture=t}setWarp(t){this.warpPass.enabled=t>.001,this.warpPass.warp.uWarp.value=t}render(){this.warpPass.warp.uTime.value=performance.now()/1e3,this.composer.render()}}const M1=90,w1=1/47,S1=1/57,bd=[1,.85,.72,.6];class T1{constructor(t,e=!0){this.onScale=t,this.enabled=e,this.level=0,this.sum=0,this.n=0,this.goodWindows=0,this.t=0,this.lastUp=-1e9,this.lockUntil=0,this.verify=!1,this.before=0,this.noDownUntil=0}get scale(){return bd[this.level]}feed(t,e=!0){if(!this.enabled||!e){this.sum=this.n=0;return}if(t>.1||t<=0||(this.t+=t,this.sum+=t,++this.n<M1))return;const n=this.sum/this.n;if(this.sum=this.n=0,this.verify&&(this.verify=!1,n>this.before*.93)){this.level--,this.noDownUntil=this.t+90,this.goodWindows=0,this.onScale(this.scale);return}n>w1&&this.level<bd.length-1&&this.t>this.noDownUntil?(this.t-this.lastUp<10&&(this.lockUntil=this.t+120),this.before=n,this.verify=!0,this.level++,this.goodWindows=0,this.onScale(this.scale)):n<S1&&this.level>0&&this.t>this.lockUntil?++this.goodWindows>=12&&this.t-this.lastUp>20&&(this.level--,this.goodWindows=0,this.lastUp=this.t,this.onScale(this.scale)):this.goodWindows=0}}const Pl=[0,.3,.6,1,1.8,3],A1=["off","soft","light","portrait","wide","macro"],Ll=60;class E1{constructor({camera:t,player:e,pipeline:n,sky:i,worlds:s,seed:o,canEnter:a,onExit:l}){this.camera=t,this.player=e,this.pipeline=n,this.sky=i,this.worlds=s,this.seed=o,this.canEnter=a,this.onExit=l,this.active=!1,this.keys=Object.create(null),this.pos=new E,this.vel=new E,this.yaw=0,this.pitch=0,this.fov=60,this.apIdx=3,this.showExplorer=!0,this.guides=!1,this.wantsCapture=!1,this.dragging=!1,this._fwd=new E,this._right=new E,this._move=new E,this._idle=0,this._readT=0,this._saved=0,this._buildDom(),addEventListener("keydown",c=>this._key(c,!0)),addEventListener("keyup",c=>this._key(c,!1)),addEventListener("blur",()=>{this.keys=Object.create(null)}),addEventListener("wheel",c=>{this.active&&(this.fov=Ie.clamp(this.fov*Math.exp(c.deltaY*.0012),14,95),this._poke())},{passive:!0}),document.addEventListener("mousemove",c=>{this.active&&(document.pointerLockElement||this.dragging)&&this.look(c.movementX,c.movementY)}),document.addEventListener("mousedown",c=>{this.active&&c.target===this.canvas&&(this.dragging=!0)}),document.addEventListener("mouseup",()=>{this.dragging=!1})}get canvas(){return document.querySelector("#app canvas")}look(t,e){const n=.0022*Math.max(.25,this.fov/70);this.yaw-=t*n,this.pitch=Ie.clamp(this.pitch-e*n,-1.5,1.5)}_buildDom(){const t=document.createElement("div");t.id="photo",t.innerHTML=`
      <div id="guides"><i></i><i></i><i></i><i></i></div>
      <div id="photoBar">
        <div class="pb-head"><span class="pb-title">Photo mode</span><span class="pb-read" id="pbRead"></span></div>
        <div class="pb-keys">
          <span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move</span>
          <span><kbd>Q</kbd><kbd>E</kbd> down · up</span>
          <span><kbd>Shift</kbd> fast</span>
          <span><kbd>Scroll</kbd> zoom</span>
          <span><kbd>[</kbd><kbd>]</kbd> blur</span>
          <span><kbd>,</kbd><kbd>.</kbd> time</span>
          <span><kbd>T</kbd> freeze time</span>
          <span><kbd>X</kbd> explorer</span>
          <span><kbd>G</kbd> guides</span>
          <span class="pb-main"><kbd>Enter</kbd> save photo</span>
          <span class="pb-main"><kbd>C</kbd> exit</span>
        </div>
      </div>
      <div id="shutter"></div>`,document.body.appendChild(t),this.root=t,this.bar=t.querySelector("#photoBar"),this.read=t.querySelector("#pbRead"),this.flash=t.querySelector("#shutter")}_poke(){this._idle=0,this.bar.classList.remove("faded")}_key(t,e){if(t.code==="KeyC"&&e&&!t.repeat){this.active?this.exit():this.enter();return}if(this.active&&(this.keys[t.code]=e,!!e)){if(this._poke(),t.code==="Enter")t.preventDefault(),this.wantsCapture=!0;else{if(t.repeat)return;t.code==="BracketRight"?this._aperture(1):t.code==="BracketLeft"?this._aperture(-1):t.code==="KeyT"?this.sky.frozen=!this.sky.frozen:t.code==="KeyX"?this._explorer(!this.showExplorer):t.code==="KeyG"&&(this.guides=!this.guides,this.root.classList.toggle("guides",this.guides))}["Space","ArrowUp","ArrowDown","Tab"].includes(t.code)&&t.preventDefault()}}_aperture(t){this.apIdx=Ie.clamp(this.apIdx+t,0,Pl.length-1),this.pipeline.setDof(Pl[this.apIdx])}_explorer(t){this.showExplorer=t,this.player.model.setVisible(t)}enter(){if(this.active||!this.canEnter())return!1;this.active=!0;const t=this.camera;return this.pos.copy(t.position),this.yaw=t.rotation.y,this.pitch=t.rotation.x,this.fov=t.fov,this.vel.set(0,0,0),this.player.inputEnabled=!1,this.player.keys=Object.create(null),this.keys=Object.create(null),this.wantsCapture=!1,this._explorer(!0),this.pipeline.setDof(Pl[this.apIdx]),document.body.classList.add("photo"),this.root.classList.toggle("guides",this.guides),this._poke(),this._readT=0,!0}exit(){this.active&&(this.active=!1,this.dragging=!1,this.keys=Object.create(null),this.sky.frozen=!1,this.pipeline.setDof(0),this.player.model.setVisible(!0),this.player.inputEnabled=!0,document.body.classList.remove("photo"),this.onExit?.())}abort(){this.active&&(this.exit(),this.player.inputEnabled=!1)}update(t){if(!this.active)return;const e=this.keys,n=Math.cos(this.pitch),i=Math.sin(this.pitch),s=Math.sin(this.yaw),o=Math.cos(this.yaw);this._fwd.set(-s*n,i,-o*n),this._right.set(o,0,-s);const a=(e.KeyW||e.ArrowUp?1:0)-(e.KeyS||e.ArrowDown?1:0),l=(e.KeyD||e.ArrowRight?1:0)-(e.KeyA||e.ArrowLeft?1:0),c=(e.KeyE||e.Space?1:0)-(e.KeyQ?1:0),h=(e.ShiftLeft||e.ShiftRight?36:9)*(e.AltLeft?.2:1)*Math.max(.35,this.fov/70);this._move.set(0,0,0).addScaledVector(this._fwd,a).addScaledVector(this._right,l),this._move.y+=c*.8,this._move.lengthSq()>0&&this._move.normalize().multiplyScalar(h),this.vel.lerp(this._move,Math.min(1,7*t)),this.pos.addScaledVector(this.vel,t);const u=this.player.pos,d=this.pos.x-u.x,f=this.pos.z-u.z,m=Math.hypot(d,f);m>Ll&&(this.pos.x=u.x+d/m*Ll,this.pos.z=u.z+f/m*Ll),this.pos.y=Math.min(this.pos.y,u.y+160);const b=this.worlds.heightAt(this.pos.x,this.pos.z);this.pos.y<b+.35&&(this.pos.y=b+.35);const g=(e.Period?1:0)-(e.Comma?1:0);g&&(this.sky.time=((this.sky.time+g*t*(e.ShiftLeft?.16:.05))%1+1)%1,this._poke()),(a||l||c||g)&&this._poke();const p=this.camera;if(p.position.copy(this.pos),p.rotation.set(this.pitch,this.yaw,0),Math.abs(p.fov-this.fov)>.01&&(p.fov=this.fov,p.updateProjectionMatrix()),this._idle+=t,this._idle>6&&this.bar.classList.add("faded"),this._readT-=t,this._readT<=0){this._readT=.2;const v=this.sky.time*24,_=Math.floor(v),x=Math.floor((v-_)*60),y=Math.round(12/Math.tan(Ie.degToRad(this.fov/2)));this.read.textContent=`${y} mm · blur ${A1[this.apIdx]} · ${String(_).padStart(2,"0")}:${String(x).padStart(2,"0")}${this.sky.frozen?" · frozen":""}`}}afterRender(t){if(!this.wantsCapture)return;this.wantsCapture=!1,this.flash.classList.remove("go"),this.flash.offsetWidth,this.flash.classList.add("go");const e=new Date,n=`${e.getFullYear()}${String(e.getMonth()+1).padStart(2,"0")}${String(e.getDate()).padStart(2,"0")}-${String(e.getHours()).padStart(2,"0")}${String(e.getMinutes()).padStart(2,"0")}${String(e.getSeconds()).padStart(2,"0")}`,i=`wander-${this.worlds.mode==="city"?"newyork":"wilds"}-${this.seed}-${n}.png`;t.toBlob(s=>{if(!s)return;const o=document.createElement("a");o.href=URL.createObjectURL(s),o.download=i,document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(o.href),4e3),this._saved++,this.lastSaved={name:i,bytes:s.size,w:t.width,h:t.height}},"image/png")}}const _r=(r,t)=>Math.atan2(-r,-t);function C1(r){const{player:t,worlds:e,terrain:n,pois:i,sky:s,portal:o}=r;function a(g,p,v,_=-.05,x=.1){t.pos.set(g,e.heightAt(g,p)+x,p),t.vel.set(0,0,0),t.yaw=v,t.pitch=_,t.update(1/60)}function l(g){return i.sites.find(p=>p.type===g)}function c(){const g=n.findSpawn();let p=null,v=1e9;for(let _=-1500;_<=1500;_+=60)for(let x=-1500;x<=1500;x+=60){const y=n.heightAt(_,x);if(y<5||y>30||n.forestMask(_,x)<.28||n.slopeAt(_,x)>.2)continue;const M=Math.hypot(_-g.x,x-g.z);M<v&&(v=M,p={x:_,z:x})}return p||g}function h(){for(let g=120;g<1800;g+=90)for(let p=0;p<24;p++){const v=p/24*Math.PI*2,_=Math.cos(v)*g,x=Math.sin(v)*g,y=n.heightAt(_,x);if(!(y<.7||y>3.2))for(let M=0;M<12;M++){const T=M/12*Math.PI*2,R=_+Math.cos(T)*70,w=x+Math.sin(T)*70;if(n.heightAt(R,w)<te-2)return{x:_,z:x,yaw:_r(Math.cos(T),Math.sin(T))}}}return null}function u(g,p){for(let v=0;v<120;v+=6)for(let _=0;_<12;_++){const x=_/12*Math.PI*2,y=g+Math.cos(x)*v,M=p+Math.sin(x)*v;if(e.heightAt(y,M)<3&&e.city.inIsland(y,M))return{x:y,z:M}}return{x:g,z:p}}async function d(g){e.mode!==g&&(await o.onTransit(g),await new Promise(p=>setTimeout(p,500)))}const f=(g,p,v=-.04)=>{const _=Math.atan2(g.z-Oe.z,g.x-Oe.x)+.6,x=g.x+Math.cos(_)*p,y=g.z+Math.sin(_)*p;a(x,y,_r(g.x-x,g.z-y),v)},m={"meadow-noon":async()=>{await d("nature"),s.time=.5;const g=n.findSpawn();a(g.x,g.z,Math.PI*.25,-.08)},"forest-dusk":async()=>{await d("nature"),s.time=.735;const g=c();a(g.x,g.z,Math.PI*.6,-.04)},"lake-sunrise":async()=>{await d("nature"),s.time=.265;const g=h();g&&a(g.x,g.z,g.yaw,0)},"shrine-night":async()=>{await d("nature"),s.time=.02;const g=l("shrine")||i.sites[0];f(g,9)},"lighthouse-dusk":async()=>{await d("nature"),s.time=.74;const g=l("lighthouse")||i.sites[0];f(g,38,.1)},"gate-night":async()=>{await d("nature"),s.time=.03,a(Oe.x,Oe.z+12,0,.02)},"gate-dusk":async()=>{await d("nature"),s.time=.75,a(Oe.x,Oe.z+14,0,.04)},"times-night":async()=>{await d("city"),s.time=.03;const g=e.city.sites.find(T=>T.type==="neon"),p=u(g.x,g.z);let v=null,_=1e9;const x=new E;for(const T of e.city.billboards){T.mesh.getWorldPosition(x);const R=Math.hypot(x.x-p.x,x.z-p.z);R>15&&R<_&&(_=R,v=x.clone())}const y=v?v.x-p.x:0,M=v?v.z-p.z:-1;a(p.x,p.z,_r(y,M),.3)},"park-day":async()=>{await d("city"),s.time=.45;const g=e.city.sites.find(v=>v.type==="park"),p=u(g.x+30,g.z+80);a(p.x,p.z,_r(g.x-p.x,g.z-p.z),-.05)},"skyline-air":async()=>{await d("city"),s.time=.78;const g=e.city.gatePos,p=e.city.gateFwd||{x:0,z:-1};a(g.x-p.x*60,g.z-p.z*60,_r(p.x,p.z),-.18,150)}};async function b(g){const p=m[g];if(!p)throw new Error(`unknown shot "${g}" — try ${Object.keys(m).join(", ")}`);return await p(),r.setHold(!0),g}return{shot:b,names:Object.keys(m)}}const Nf=new URLSearchParams(location.search),Dn=Number(Nf.get("seed"))||20260,uh=`wander:progress:${Dn}`,Dl=document.getElementById("overlay"),Uc=document.getElementById("cta");document.getElementById("seedLabel").textContent=`seed ${Dn} · 4 km × 4 km · append ?seed=1234 for a new world`;const yr={value:0},R1=new $(.45,.58,1),P1=new $(.85,.35,.95),Ps={value:1};let ce,Ge,re,Ve,fe,Il,Wi,Nl,Yo,Ko,Fl,_d,Sn,Tn,Mr,pn,zt,Qe,De,It,yd,We=0,mn,Mn,wr=!1,Ul=0,zl=60,gn,Ls,Xn,kl,Md,Ds=null,Jo=0,Qo=0,ci=!1,wn=!0;function L1(){try{return JSON.parse(localStorage.getItem(uh))||{d:[],o:[],cd:[],m:"nature"}}catch{return{d:[],o:[],cd:[],m:"nature"}}}let sn=L1();sn.th=sn.th||{};function ji(){try{sn.d=[...Sn.sites.filter(r=>r.discovered).map(r=>r.id),...De.site.discovered?[De.site.id]:[]],sn.o=[...Tn.collected],sn.cd=It.city.sites.filter(r=>r.discovered).map(r=>r.id),sn.m=It.mode,localStorage.setItem(uh,JSON.stringify(sn))}catch{}}function wd(){try{localStorage.removeItem(uh)}catch{}location.reload()}Uc.textContent="generating world…";setTimeout(D1,60);async function D1(){Mn=x_(),ce=new f_({antialias:!1,powerPreference:"high-performance"}),ce.setSize(innerWidth,innerHeight),ce.info.autoReset=!1,ce.shadowMap.enabled=!0,ce.shadowMap.type=Td,ce.toneMapping=kc,document.getElementById("app").appendChild(ce.domElement),Ge=new Kc,Ge.fog=new Yc(12835308,80,2800),re=new rn(70,innerWidth/innerHeight,.3,15e3),re.rotation.order="YXZ",Ve=new g_(Dn),Ge.add(Ve.mesh),fe=new A_(Ge,ce,Mn),fe.time=.29,mn=new y1(ce,Ge,re,Mn),fe.setPixelRatio(ce.getPixelRatio());let r=!0;try{r=localStorage.getItem("wander:adaptive")!=="0"}catch{}Nf.get("adapt")==="0"&&(r=!1),Ls=new T1(y=>{mn.setScale(y),fe.setPixelRatio(ce.getPixelRatio())},r),Il=new R_(Ge,Ve),Wi=await hy(Ve,Dn,Ps,yr,Mn,ce),Ge.add(Wi.group),Nl=new dy(Ve,Ge,Ps,Dn),Ko=new _y(Ve,Ge,Ps,Mn),Yo=await ch.create(Ve,Ge,Dn),Sn=await rM(Ve,Ge,Dn,{wind:Ps,timeU:yr}),Tn=new aM(Ve,Ge,Dn,Sn,sn.o),Fl=new Ty(Ve,Ge,Sn),Mr=new cM(Ve,Ge,Dn,yr,re),It=new qM(Ve,Ge,Dn,fe),It.pois=Sn,De=new TM(Ge,Ve,yr,Mn),It.portalSite=De.site,It.portal=De,It.city.quality=Mn,It.city.extraHide=[Il.mesh],De.bind({renderer:ce,worlds:It,sky:fe}),It.onWarp=y=>mn.setWarp(y),It.attachNature([Ve.mesh,Wi.group,Ko.group,Nl.mesh,...Yo.roots,Tn.mesh,...Tn.halos,Mr.birdMesh,Mr.fireflyMesh,Mr.butterflyMesh,Fl.group,...Sn.sites.map(y=>y.group)]),It.natureColliders.absorb(Wi.colliders),It.natureColliders.absorb(Sn.colliders),It.natureColliders.absorb(De.natureColliders);for(const y of Sn.sites)sn.d.includes(y.id)&&(y.discovered=!0);De.site.discovered=sn.d.includes(De.site.id);const t=Ve.findSpawn();zt=new Yy(re,It,ce.domElement,Ge),zt.spawn(t.x,t.z),zt.update(1/60),_d=new Iy(Ge,Ve),Md=new ZM(re,Ge),Pi.wind=Ps,Qe=new $y(Ve),pn=new hM(It,Tn,Qe.exploration,wd,sn.th),gn=new E1({camera:re,player:zt,pipeline:mn,sky:fe,worlds:It,seed:Dn,canEnter:()=>ci&&!wn&&!wr&&!It.transiting&&!pn.anyOpen&&!Xn?.isOpen,onExit:()=>{f.t=0,f.pos.copy(re.position),f.quat.copy(re.quaternion)}}),pn.blockKeys=()=>gn.active,Xn=new KM({player:zt,pipeline:mn,adaptive:Ls,getQuality:()=>Mn,applyQuality:e,onReset:wd,onOpen:()=>{ci&&!wn&&p()}}),Xn.setBootTier(Mn.name),pn.extraOpen=()=>Xn.isOpen,kl=new QM({player:zt,photo:gn,hud:Qe,onStart:()=>{wn?g():p()}}),n();function e(y){const M=Us[y];if(M){Mn=M;try{localStorage.setItem("wander:quality",y)}catch{}mn.setQuality(M),fe.quality=M,fe.setPixelRatio(ce.getPixelRatio()),Ko.setQuality(M),Wi.setQuality(M),It.city.quality=M,Ls.level=0}}function n(){addEventListener("keydown",y=>{y.repeat||(y.code==="KeyO"&&!gn.active?Xn.toggle():y.code==="KeyU"&&ci&&!gn.active&&(Ds=Ds===null?!Pi.hoodUp:Ds?!1:null,Ds===null?Qe.toast("Hood: automatic",""):Qe.toast(Ds?"Hood up":"Hood down","")))})}async function i(){if(sn.m==="city"){await It.city.build(),De.attachCityEnd(It.city.gateRoot,It.city.gatePos.x,2+3.9,It.city.gatePos.z,It.city.gatePos.ry),It.linkCityColliders();for(const M of It.city.sites)sn.cd.includes(M.id)&&(M.discovered=!0);It.setMode("city");const y=It.arrival("city");zt.pos.set(y.x,It.heightAt(y.x,y.z)+.4,y.z),zt.yaw=y.yaw}else It.setMode("nature");Qe.bind(It,Tn),Qe.setWorld(It.mode),pn.setWorld(It.mode)}await i();const s=y=>{Qe.discover(y),l(y),pn.refreshList(),ji()};Sn.onDiscover=s,De.onDiscover=s,It.city.onDiscover=s,Tn.onCollect=()=>{Qe.updateShards(),Qe.toast("Spirit shard collected",`${Tn.count} of ${Tn.total}`),ji()},Tn.onComplete=()=>{Qe.moment({kicker:"Complete",title:"Every spirit shard found",sub:"The world feels a little brighter.",ms:4600}),ji()},De.onTransit=async y=>{await It.transit(y,zt,De)},It.onModeChange=()=>{Qe.arrive(It.mode),Qe.setWorld(It.mode),pn.setWorld(It.mode),ji()},Uc.textContent="click to explore",It.mode==="nature"&&setTimeout(()=>It.prepareCity(De).catch(()=>{}),1200);const o={lighthouse:[44,10,14],ruinTower:[32,6,6],windmill:[34,6,7],stoneCircle:[24,7,1],shrine:[15,3.2,2],arch:[30,6,6],camp:[15,3,1],shipwreck:[26,6,1],gate:[26,5,6],cityTower:[300,150,170],park:[120,45,5],monument:[170,40,28],neon:[64,12,12]};let a=null;function l(y){sn.th[y.id]||(a=y)}const c=document.createElement("canvas");c.width=288,c.height=154;function h(){if(!a||wn||gn?.active)return;const y=a;a=null;try{const[M,T,R]=o[y.type]||[28,6,4],w=re.position.clone(),S=re.quaternion.clone(),P=re.fov;let I=zt.pos.x-y.x,z=zt.pos.z-y.z;const H=Math.hypot(I,z)||1;I/=H,z/=H;const G=y.x+I*M,X=y.z+z*M,tt=It.heightAt(G,X);re.position.set(G,Math.max(tt+3,(y.y??tt)+T),X),re.fov=55,re.updateProjectionMatrix(),re.lookAt(y.x,(y.y??tt)+R,y.z),re.updateMatrixWorld(!0),zt.model.setVisible(!1),mn.render();const N=ce.domElement,W=c.width/c.height;let Q=N.width,ot=N.width/W;ot>N.height&&(ot=N.height,Q=ot*W),c.getContext("2d").drawImage(N,(N.width-Q)/2,(N.height-ot)/2,Q,ot,0,0,c.width,c.height),sn.th[y.id]=c.toDataURL("image/jpeg",.78),zt.model.setVisible(!0),re.position.copy(w),re.quaternion.copy(S),re.fov=P,re.updateProjectionMatrix(),re.updateMatrixWorld(!0),ji(),pn.refreshList()}catch(M){zt.model.setVisible(!0),console.warn("[photo] could not take a landmark photograph",M)}}let u=0;function d(){u=performance.now();try{const y=ce.domElement.requestPointerLock();y&&typeof y.catch=="function"&&y.catch(()=>{})}catch{}}const f={t:1,pos:new E,quat:new ve},m=new E;function b(){const y=zt.pos,T=Math.atan2(-Math.cos(zt.yaw),-Math.sin(zt.yaw))+.5+.38*Math.sin(We*.07),R=(It.mode==="city"?15:12)+Math.sin(We*.11)*1.5,w=y.x+Math.cos(T)*R,S=y.z+Math.sin(T)*R,P=It.heightAt(w,S);re.position.set(w,Math.max(P+1.5,y.y+1.8+Math.sin(We*.17)*.35),S);const I=y.x-w,z=y.z-S,H=Math.hypot(I,z)||1;m.set(y.x+-z/H*4.6,y.y+1.7,y.z+I/H*4.6),re.lookAt(m)}function g(){f.t=0,f.pos.copy(re.position),f.quat.copy(re.quaternion),Dl.classList.add("hidden"),document.body.classList.add("playing"),wn=!1,ci=!0,zt.inputEnabled=!0,d()}function p(){gn?.abort(),wn=!0,zt.inputEnabled=!1,zt.keys=Object.create(null),Uc.textContent="click to continue",Dl.classList.remove("hidden"),document.body.classList.remove("playing")}Dl.addEventListener("click",g),document.getElementById("helpBtn")?.addEventListener("click",y=>{y.stopPropagation(),pn.toggleHelp(!0)}),document.getElementById("settingsBtn")?.addEventListener("click",y=>{y.stopPropagation(),Xn.open()}),document.getElementById("helpSettings")?.addEventListener("click",()=>{pn.toggleHelp(!1),Xn.open()});for(const y of["mousemove","keydown","wheel","mousedown"])addEventListener(y,()=>Qe.poke(),{passive:!0});document.addEventListener("pointerlockchange",()=>{if(!document.pointerLockElement&&ci){if(performance.now()-u<300)return;p()}}),document.addEventListener("pointerlockerror",()=>{}),addEventListener("keydown",y=>{if(y.code==="Escape"&&ci&&!document.pointerLockElement){if(pn.anyOpen||Xn.isOpen)return;p()}}),addEventListener("contextmenu",y=>{document.pointerLockElement&&y.preventDefault()}),yd=new yf;let v=null;const _=()=>{const y=performance.now(),M=v??yd.getDelta(),T=Math.min(M,.05);if(kl.update(M,ci&&!wn),Xn.tick(M,()=>`${Jo.toFixed(1)} + ${Qo.toFixed(1)} ms · ${ce.getPixelRatio().toFixed(2)}×`),Ls.feed(M,!wn&&!It.transiting&&!gn.active&&document.visibilityState==="visible"),We+=T,yr.value=We,Ps.value=Math.max(.15,.85+.4*Math.sin(We*.5)+.25*Math.sin(We*1.7+2)),zl+=(1/Math.max(T,1e-4)-zl)*.05,fe.world=It.mode,fe.update(T,zt.pos,We),It.tweakFog(),!wn&&!wr&&!gn.active?zt.update(T):gn.active?(zt.model.update(T,{vx:0,vz:0,vy:0,speed:0,grounded:!0,inWater:!1,flying:!1,lookYaw:zt.yaw,lookPitch:0,lift:zt.lift}),gn.update(T)):ci||(zt.model.update(T,{vx:0,vz:0,vy:0,speed:0,grounded:!0,inWater:!1,flying:!1,lookYaw:zt.yaw,lookPitch:0,lift:zt.lift}),b()),f.t<1){f.t=Math.min(1,f.t+T/1.6);const S=f.t*f.t*(3-2*f.t);re.position.lerpVectors(f.pos,re.position,S),re.quaternion.slerpQuaternions(f.quat,re.quaternion,S)}{const S=1-fe.daylight;Pi.night=S;const P=ga.uRimColor.value.copy(fe.horizonColor).lerp(R1,Math.min(1,S*.6)).multiplyScalar(1.25);It.mode==="city"&&P.lerp(P1,fe.cityGlow*S*.45),ga.uRimK.value=.12+.55*fe.dusk+.8*S,wn||_d.update(T,zt,{mode:It.mode,sky:fe,camera:re,feet:zt.model.feet(),hands:zt.model.hands()});const I=It.mode==="city"&&It.city.fx?.rain||0;Pi.hoodUp=Ds??I>.3,Md.update(T,zt,{show:ci&&!wn&&!gn.active&&zt.view==="first",night:S})}Wi.update(T,fe,re.position),De.update(T,zt.pos,We,It.mode,fe.daylight,re.position),It.mode==="nature"?(Nl.update(T,zt.pos,We),Ko.update(zt.pos,We,fe,zt.grounded&&!zt.inWater?.55+Math.min(.45,Math.hypot(zt.vel.x,zt.vel.z)*.05):0),Fl.update(T,zt.pos,We,fe),Yo.update(T,zt.pos,We,fe.daylight),Sn.update(T,zt.pos,We,fe),Tn.update(T,zt.pos,We),Mr.update(T,zt.pos,We,fe.daylight)):It.city.update(T,zt.pos,We,fe),Il.update(We,fe,zt),pn.update(zt),Qe.setUnderwater(re.position.y<te+.15),Qe.update(T,zt,fe,!wn),Ul+=((It.mode==="city"?1:0)-Ul)*Math.min(1,T*1.4),mn.setLook(Ul,fe,We),mn.setPortal(De.proximity,De.proximityTint),ce.info.reset(),h();const R=performance.now();mn.render(),gn.afterRender(ce.domElement);const w=performance.now();Jo+=(R-y-Jo)*.05,Qo+=(w-R-Qo)*.05};ce.setAnimationLoop(_),addEventListener("resize",()=>{re.aspect=innerWidth/innerHeight,re.updateProjectionMatrix(),mn.resize()});const x=C1({player:zt,worlds:It,terrain:Ve,pois:Sn,sky:fe,portal:De,setHold:y=>{wr=y}});window.__wander={get quality(){return Mn},applyQuality:e,settings:Xn,gamepad:kl,renderer:ce,pipeline:mn,shot:x.shot,shots:x.names,get hold(){return wr},set hold(y){wr=y},step:(y=1,M=1/60)=>{v=M;try{for(let T=0;T<y;T++)_()}finally{v=null}},photo:gn,scenery:Wi,adaptive:Ls,bench:async(y,M=40)=>{y&&(await x.shot(y),await new Promise(P=>setTimeout(P,1800)));const T=ce.getContext(),R=new Uint8Array(4);for(let P=0;P<4;P++)mn.render(),T.readPixels(0,0,1,1,T.RGBA,T.UNSIGNED_BYTE,R);ce.info.reset();const w=performance.now();for(let P=0;P<M;P++)mn.render(),T.readPixels(0,0,1,1,T.RGBA,T.UNSIGNED_BYTE,R);const S=(performance.now()-w)/M;return{view:y||"current",quality:Mn.name,ms:+S.toFixed(2),fps:Math.round(1e3/S),calls:Math.round(ce.info.render.calls/M),tris:Math.round(ce.info.render.triangles/M),px:`${ce.domElement.width}x${ce.domElement.height}`}},stats:()=>({fps:Math.round(zl),cpuMs:+Jo.toFixed(2),submitMs:+Qo.toFixed(2),scale:Ls.scale,pixelRatio:ce.getPixelRatio(),calls:ce.info.render.calls,triangles:ce.info.render.triangles,textures:ce.info.memory.textures,geometries:ce.info.memory.geometries,quality:Mn.name}),seed:Dn,player:zt,terrain:Ve,sky:fe,wildlife:Yo,pois:Sn,orbs:Tn,journal:pn,portal:De,worlds:It,get city(){return It.city},teleport:(y,M)=>zt.spawn(y,M),toCity:()=>De.onTransit("city"),setRain:y=>{It.city.fx&&(It.city.fx.rainOverride=y)},toWilds:()=>De.onTransit("nature"),setTime:y=>{fe.time=(y%1+1)%1},toggleView:()=>{zt.view=zt.view==="third"?"first":"third"},discoverAll:()=>{Sn.discoverAll(),De.site.discovered=!0,pn.refreshList(),ji()},collectAll:()=>{Tn.collectAll(),Qe.updateShards(),ji()},start:g,hud:Qe,progress:sn,takePhoto:y=>{a=y},get paused(){return wn},get pendingPhoto(){return a},pause:p}}
