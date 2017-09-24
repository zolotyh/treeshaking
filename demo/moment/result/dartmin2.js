(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b){"use strict"
function generateAccessor(a9,b0,b1){var g=a9.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var c
if(g.length>1)c=true
else c=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a0=d&3
var a1=d>>2
var a2=f=f.substring(0,e-1)
var a3=f.indexOf(":")
if(a3>0){a2=f.substring(0,a3)
f=f.substring(a3+1)}if(a0){var a4=a0&2?"r":""
var a5=a0&1?"this":"r"
var a6="return "+a5+"."+f
var a7=b1+".prototype.g"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}if(a1){var a4=a1&2?"r,v":"v"
var a5=a1&1?"this":"r"
var a6=a5+"."+f+"=v"
var a7=b1+".prototype.s"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}}return f}function defineClass(a1,a2){var g=[]
var f="function "+a1+"("
var e=""
for(var d=0;d<a2.length;d++){if(d!=0)f+=", "
var c=generateAccessor(a2[d],g,a1)
var a0="p_"+c
f+=a0
e+="this."+c+" = "+a0+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a1+".builtin$cls=\""+a1+"\";\n"
f+="$desc=$collectedClasses."+a1+"[1];\n"
f+=a1+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a1+".name=\""+a1+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(c,d){var g=c.prototype
g.__proto__=d.prototype
g.constructor=c
g["$is"+c.name]=c
return convertToFastObject(g)}:function(){function tmp(){}return function(a0,a1){tmp.prototype=a1.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a0.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var c=e[d]
g[c]=f[c]}g["$is"+a0.name]=a0
g.constructor=a0
a0.prototype=g
return g}}()
function finishClasses(a4){var g=init.allClasses
a4.combinedConstructorFunction+="return [\n"+a4.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a4.combinedConstructorFunction)(a4.collected)
a4.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.name
var a0=a4.collected[c]
var a1=a0[0]
a0=a0[1]
g[c]=d
a1[c]=d}f=null
var a2=init.finishedClasses
function finishClass(a9){if(a2[a9])return
a2[a9]=true
var a5=a4.pending[a9]
if(!a5||typeof a5!="string"){var a6=g[a9]
var a7=a6.prototype
a7.constructor=a6
a7.$isa=a6
a7.$deferredAction=function(){}
return}finishClass(a5)
var a8=g[a5]
if(!a8)a8=existingIsolateProperties[a5]
var a6=g[a9]
var a7=z(a6,a8)
if(a7.$isd)a7.$deferredAction()}var a3=Object.keys(a4.pending)
for(var e=0;e<a3.length;e++)finishClass(a3[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.charCodeAt(0)
var a0
if(d!=="^"&&d!=="$reflectable"&&c!==43&&c!==42&&(a0=g[d])!=null&&a0.constructor===Array&&d!=="<>")addStubs(g,a0,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function processClassData(b1,b2,b3){b2=convertToSlowObject(b2)
var g
var f=Object.keys(b2)
var e=false
var d=supportsDirectProtoAccess&&b1!="a"
for(var c=0;c<f.length;c++){var a0=f[c]
var a1=a0.charCodeAt(0)
if(a0==="j"){processStatics(init.statics[b1]=b2.j,b3)
delete b2.j}else if(a1===43){w[g]=a0.substring(1)
var a2=b2[a0]
if(a2>0)b2[g].$reflectable=a2}else if(a1===42){b2[g].$D=b2[a0]
var a3=b2.$methodsWithOptionalArguments
if(!a3)b2.$methodsWithOptionalArguments=a3={}
a3[a0]=g}else{var a4=b2[a0]
if(a0!=="^"&&a4!=null&&a4.constructor===Array&&a0!=="<>")if(d)e=true
else addStubs(b2,a4,a0,false,[])
else g=a0}}if(e)b2.$deferredAction=finishAddStubsHelper
var a5=b2["^"],a6,a7,a8=a5
var a9=a8.split(";")
a8=a9[1]?a9[1].split(","):[]
a7=a9[0]
a6=a7.split(":")
if(a6.length==2){a7=a6[0]
var b0=a6[1]
if(b0)b2.$S=function(b4){return function(){return init.types[b4]}}(b0)}if(a7)b3.pending[b1]=a7
b3.combinedConstructorFunction+=defineClass(b1,a8)
b3.constructorsList.push(b1)
b3.collected[b1]=[m,b2]
i.push(b1)}function processStatics(a3,a4){var g=Object.keys(a3)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a3[e]
var c=e.charCodeAt(0)
var a0
if(c===43){v[a0]=e.substring(1)
var a1=a3[e]
if(a1>0)a3[a0].$reflectable=a1
if(d&&d.length)init.typeInformation[a0]=d}else if(c===42){m[a0].$D=d
var a2=a3.$methodsWithOptionalArguments
if(!a2)a3.$methodsWithOptionalArguments=a2={}
a2[e]=a0}else if(typeof d==="function"){m[a0=e]=d
h.push(e)
init.globalFunctions[e]=d}else if(d.constructor===Array){}else{a0=e
processClassData(e,d,a4)}}}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.w=function(){}
var dart=[["","",,H,{"^":"",ai:{"^":"a;a"}}],["","",,J,{"^":"",
l:function(a){return void 0},
d:{"^":"a;",
h:function(a){return H.q(a)}},
N:{"^":"d;",
h:function(a){return String(a)},
$isa5:1},
Q:{"^":"d;",
h:function(a){return"null"}},
n:{"^":"d;",
h:function(a){return P.M(a,"[","]")},
gk:function(a){return a.length}},
ah:{"^":"n;"},
D:{"^":"a;a,b,c,d",
n:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.ad(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
o:{"^":"d;",
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
p:function(a,b){return a<b},
$isj:1},
P:{"^":"o;",$isj:1,$isab:1},
O:{"^":"o;",$isj:1},
p:{"^":"d;",
u:function(a,b){if(b>=a.length)throw H.c(H.a6(a,b))
return a.charCodeAt(b)},
t:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.c(P.r(b,null,null))
if(c>a.length)throw H.c(P.r(c,null,null))
return a.substring(b,c)},
q:function(a,b){return this.t(a,b,null)},
h:function(a){return a},
gk:function(a){return a.length},
$isa0:1}}],["","",,H,{"^":"",
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.m(a)
if(typeof z!=="string")throw H.c(H.a4(a))
return z},
Z:function(a){var z,y,x,w,v,u,t,s
z=J.l(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.b||!1){v=C.c(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.a.u(w,0)===36)w=C.a.q(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.x(H.aa(a),0,null),init.mangledGlobalNames)},
q:function(a){return"Instance of '"+H.Z(a)+"'"},
e:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Y:function(a){var z=H.e(a).getFullYear()+0
return z},
W:function(a){var z=H.e(a).getMonth()+1
return z},
S:function(a){var z=H.e(a).getDate()+0
return z},
T:function(a){var z=H.e(a).getHours()+0
return z},
V:function(a){var z=H.e(a).getMinutes()+0
return z},
X:function(a){var z=H.e(a).getSeconds()+0
return z},
U:function(a){var z=H.e(a).getMilliseconds()+0
return z},
a6:function(a,b){var z
if(typeof b!=="number"||Math.floor(b)!==b)return new P.h(!0,b,"index",null)
z=J.B(a)
if(b<0||b>=z)return P.L(b,a,"index",null,z)
return P.r(b,"index",null)},
a4:function(a){return new P.h(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.R()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.z})
z.name=""}else z.toString=H.z
return z},
z:function(){return J.m(this.dartException)},
af:function(a){throw H.c(a)},
ad:function(a){throw H.c(new P.E(a))},
ae:function(a){throw H.c(new P.F(a))},
aa:function(a){if(a==null)return
return a.$ti},
f:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.x(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.f(z,b)
return H.a2(a,b)}return"unknown-reified-type"},
a2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.f(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.f(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.f(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.a7(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.f(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
x:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.v("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.i=v+", "
u=a[y]
if(u!=null)w=!1
v=z.i+=H.f(u,c)}return w?"":"<"+z.h(0)+">"}}],["","",,H,{"^":"",
a7:function(a){var z=a?Object.keys(a):[]
z.fixed$length=Array
return z}}],["","",,H,{"^":"",
ac:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,P,{"^":"",
M:function(a,b,c){var z,y,x
if(P.a3(a))return b+"..."+c
z=new P.v(b)
y=$.$get$t()
y.push(a)
try{x=z
x.i=P.a1(x.gi(),a,", ")}finally{y.pop()}y=z
y.i=y.gi()+c
y=z.gi()
return y.charCodeAt(0)==0?y:y},
a3:function(a){var z,y
for(z=0;y=$.$get$t(),z<y.length;++z)if(a===y[z])return!0
return!1}}],["","",,P,{"^":"",
u:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.m(a)
if(typeof a==="string")return JSON.stringify(a)
return P.J(a)},
J:function(a){var z=J.l(a)
if(!!z.$isag)return z.h(a)
return H.q(a)},
a5:{"^":"a;",
h:function(a){return this?"true":"false"}},
"+bool":0,
G:{"^":"a;a,b",
h:function(a){var z,y,x,w,v,u,t,s
z=P.H(H.Y(this))
y=P.i(H.W(this))
x=P.i(H.S(this))
w=P.i(H.T(this))
v=P.i(H.V(this))
u=P.i(H.X(this))
t=P.I(H.U(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
gv:function(){return this.a},
j:{
H:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.b(z)
if(z>=10)return y+"00"+H.b(z)
return y+"000"+H.b(z)},
I:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
i:function(a){if(a>=10)return""+a
return"0"+a}}},
al:{"^":"j;"},
"+double":0,
k:{"^":"a;"},
R:{"^":"k;",
h:function(a){return"Throw of null."}},
h:{"^":"k;a,b,c,d",
gm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gl:function(){return""},
h:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gm()+y+x
if(!this.a)return w
v=this.gl()
u=P.u(this.b)
return w+v+": "+H.b(u)},
j:{
C:function(a){return new P.h(!1,null,null,a)}}},
a_:{"^":"h;e,f,a,b,c,d",
gm:function(){return"RangeError"},
gl:function(){return""},
j:{
r:function(a,b,c){return new P.a_(null,null,!0,a,b,"Value not in range")}}},
K:{"^":"h;e,k:f>,a,b,c,d",
gm:function(){return"RangeError"},
gl:function(){if(J.A(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+z},
j:{
L:function(a,b,c,d,e){return new P.K(b,e,!0,a,c,"Index out of range")}}},
E:{"^":"k;a",
h:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.u(z))+"."}},
F:{"^":"k;a",
h:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ab:{"^":"j;"},
"+int":0,
aj:{"^":"a;"},
"+List":0,
ak:{"^":"a;",
h:function(a){return"null"}},
"+Null":0,
j:{"^":"a;"},
"+num":0,
a:{"^":";",
h:function(a){return H.q(this)},
toString:function(){return this.h(this)}},
a0:{"^":"a;"},
"+String":0,
v:{"^":"a;i<",
gk:function(a){return this.i.length},
h:function(a){var z=this.i
return z.charCodeAt(0)==0?z:z},
j:{
a1:function(a,b,c){var z=new J.D(b,b.length,0,null)
if(!z.n())return a
if(c.length===0){do a+=H.b(z.d)
while(z.n())}else{a+=H.b(z.d)
for(;z.n();)a=a+c+H.b(z.d)}return a}}}}],["","",,R,{"^":"",
y:function(){var z,y
z=Date.now()+12096e5
y=new P.G(z,!1)
if(!(Math.abs(z)>864e13))z=!1
else z=!0
if(z)H.af(P.C(y.gv()))
H.ac(y.h(0))}},1]]
setupProgram(dart,0)
J.l=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.P.prototype
return J.O.prototype}if(typeof a=="string")return J.p.prototype
if(a==null)return J.Q.prototype
if(typeof a=="boolean")return J.N.prototype
if(a.constructor==Array)return J.n.prototype
return a}
J.a8=function(a){if(typeof a=="string")return J.p.prototype
if(a==null)return a
if(a.constructor==Array)return J.n.prototype
return a}
J.a9=function(a){if(typeof a=="number")return J.o.prototype
if(a==null)return a
return a}
J.A=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.a9(a).p(a,b)}
J.B=function(a){return J.a8(a).gk(a)}
J.m=function(a){return J.l(a).h(a)}
var $=I.p
C.b=J.d.prototype
C.a=J.p.prototype
C.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){$dart_deferred_initializers$[a]($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryUris={}
init.deferredLibraryHashes={};(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["t","$get$t",function(){return[]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.ae(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.w=a.w
return Isolate}}(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.y,[])
else R.y([])})})()
//# sourceMappingURL=dartmin2.js.map
