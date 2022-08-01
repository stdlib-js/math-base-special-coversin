// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var o=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,f,u,a,i;if(null==r)return n.call(r);f=r[e],i=e,o=null!=(a=r)&&t.call(a,i);try{r[e]=void 0}catch(t){return n.call(r)}return u=n.call(r),o?r[e]=f:delete r[e],u}:function(r){return n.call(r)},f="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var a,i="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,n,t;if("function"!=typeof u)return!1;try{n=new u(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?i:function(){throw new Error("not implemented")};var c=a,y="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var l,p="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(y&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var A=l,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var U,h="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,256,257]),t=n,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var s=U,m="function"==typeof Uint16Array;var N="function"==typeof Uint16Array?Uint16Array:null;var d,I="function"==typeof Uint16Array?Uint16Array:void 0;d=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,65536,65537]),t=n,r=(m&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var F,S={uint16:d,uint8:s};(F=new S.uint16(1))[0]=4660;var H=52===new S.uint8(F.buffer)[0],O=!0===H?1:0,g=new A(1),E=new c(g.buffer);function j(r){return g[0]=r,E[O]}function T(r,n){var t,e,o,f;return o=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(o=1-(t=.5*f))+(1-o-t+(f*e-r*n))}var G=-.16666666666666632;function L(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(G+o*t):r-(o*(.5*n-e*t)-n-e*G)}var W,M,P=!0===H?0:1,V=new A(1),Y=new c(V.buffer);!0===H?(W=1,M=0):(W=0,M=1);var _={HIGH:W,LOW:M},k=new A(1),x=new c(k.buffer),q=_.HIGH,z=_.LOW;function B(r,n){return x[q]=r,x[z]=n,k[0]}var C,D,J=Math.floor,K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY;function R(r){return r!=r}function X(r){return r===K||r===Q}!0===H?(C=1,D=0):(C=0,D=1);var Z={HIGH:C,LOW:D},$=new A(1),rr=new c($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n){return $[0]=n,r[0]=rr[nr],r[1]=rr[tr],r}function or(r,n){return 1===arguments.length?er([0,0],r):er(r,n)}var fr=[0,0];function ur(r,n){return R(n)||X(n)?(r[0]=n,r[1]=0,r):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var ar=[0,0],ir=[0,0];function cr(r,n){var t,e,o,f,u;return 0===n||0===r||R(r)||X(r)?r:(function(r,n){1===arguments.length?ur([0,0],r):ur(r,n)}(ar,r),n+=ar[1],n+=function(r){var n=j(r);return(n=(2146435072&n)>>>20)-1023|0}(r=ar[0]),n<-1074?(o=r,or(fr,0),f=fr[0],f&=2147483647,u=j(o),B(f|=u&=2147483648,fr[1])):n>1023?r<0?Q:K:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,or(ir,r),t=ir[0],t&=2148532223,e*B(t|=n+1023<<20,ir[1])))}function yr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var vr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],lr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pr=5.960464477539063e-8,Ar=yr(20),wr=yr(20),br=yr(20),Ur=yr(20);function hr(r,n,t,e,o,f,u,a,i){var c,y,v,l,p,A,w,b,U;for(l=f,U=e[t],b=t,p=0;b>0;p++)y=pr*U|0,Ur[p]=U-16777216*y|0,U=e[b-1]+y,b-=1;if(U=cr(U,o),U-=8*J(.125*U),U-=w=0|U,v=0,o>0?(w+=p=Ur[t-1]>>24-o,Ur[t-1]-=p<<24-o,v=Ur[t-1]>>23-o):0===o?v=Ur[t-1]>>23:U>=.5&&(v=2),v>0){for(w+=1,c=0,p=0;p<t;p++)b=Ur[p],0===c?0!==b&&(c=1,Ur[p]=16777216-b):Ur[p]=16777215-b;if(o>0)switch(o){case 1:Ur[t-1]&=8388607;break;case 2:Ur[t-1]&=4194303}2===v&&(U=1-U,0!==c&&(U-=cr(1,o)))}if(0===U){for(b=0,p=t-1;p>=f;p--)b|=Ur[p];if(0===b){for(A=1;0===Ur[f-A];A++);for(p=t+1;p<=t+A;p++){for(i[a+p]=vr[u+p],y=0,b=0;b<=a;b++)y+=r[b]*i[a+(p-b)];e[p]=y}return hr(r,n,t+=A,e,o,f,u,a,i)}}if(0===U)for(t-=1,o-=24;0===Ur[t];)t-=1,o-=24;else(U=cr(U,-o))>=16777216?(y=pr*U|0,Ur[t]=U-16777216*y|0,o+=24,Ur[t+=1]=y):Ur[t]=0|U;for(y=cr(1,o),p=t;p>=0;p--)e[p]=y*Ur[p],y*=pr;for(p=t;p>=0;p--){for(y=0,A=0;A<=l&&A<=t-p;A++)y+=lr[A]*e[p+A];br[t-p]=y}for(y=0,p=t;p>=0;p--)y+=br[p];for(n[0]=0===v?y:-y,y=br[0]-y,p=1;p<=t;p++)y+=br[p];return n[1]=0===v?y:-y,7&w}function sr(r,n,t,e){var o,f,u,a,i,c,y;for(4,(f=(t-3)/24|0)<0&&(f=0),a=t-24*(f+1),c=f-(u=e-1),y=u+4,i=0;i<=y;i++)Ar[i]=c<0?0:vr[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=u;c++)o+=r[c]*Ar[u+(i-c)];wr[i]=o}return 4,hr(r,n,4,wr,a,4,f,u,Ar)}var mr=Math.round;function Nr(r,n,t){var e,o,f,u,a;return f=r-1.5707963267341256*(e=mr(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=f-u,a-(j(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,a-(j(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e}var dr=1.5707963267341256,Ir=6077100506506192e-26,Fr=2*Ir,Sr=4*Ir,Hr=[0,0,0],Or=[0,0];function gr(r,n){var t,e,o,f,u,a,i;if((o=2147483647&j(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Nr(r,o,n):o<=1073928572?r>0?(i=r-dr,n[0]=i-Ir,n[1]=i-n[0]-Ir,1):(i=r+dr,n[0]=i+Ir,n[1]=i-n[0]+Ir,-1):r>0?(i=r-2*dr,n[0]=i-Fr,n[1]=i-n[0]-Fr,2):(i=r+2*dr,n[0]=i+Fr,n[1]=i-n[0]+Fr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Nr(r,o,n):r>0?(i=r-3*dr,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*dr,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?Nr(r,o,n):r>0?(i=r-4*dr,n[0]=i-Sr,n[1]=i-n[0]-Sr,4):(i=r+4*dr,n[0]=i+Sr,n[1]=i-n[0]+Sr,-4);if(o<1094263291)return Nr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return V[0]=r,Y[P]}(r),i=B(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Hr[u]=0|i,i=16777216*(i-Hr[u]);for(Hr[2]=i,f=3;0===Hr[f-1];)f-=1;return a=sr(Hr,Or,e,f),r<0?(n[0]=-Or[0],n[1]=-Or[1],-a):(n[0]=Or[0],n[1]=Or[1],a)}var Er=[0,0];function jr(r){return 1-function(r){var n;if(n=j(r),(n&=2147483647)<=1072243195)return n<1045430272?r:L(r,0);if(n>=2146435072)return NaN;switch(3&gr(r,Er)){case 0:return L(Er[0],Er[1]);case 1:return T(Er[0],Er[1]);case 2:return-L(Er[0],Er[1]);default:return-T(Er[0],Er[1])}}(r)}export{jr as default};
//# sourceMappingURL=mod.js.map
