/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"c":[".tk-proxima-nova","\"proxima-nova\",sans-serif",".tk-museo-slab","\"museo-slab\",serif"],"f":"//use.typekit.net/c/5d5751/museo-slab:n3:n5,proxima-nova:n3:n4:n6.SKB:K:2,WH7:K:2,Vmx:K:2,W0V:K:2,W0X:K:2/{format}{/extras*}?3bb2a6e53c9684ffdc9a98f71f5b2a62bc5e6c08d76a27c2c8c99098d9bb1cf935634698fe8368059b4f66ae2040f0e04887b2406e9c5e4d548c08aad08b798561a36439d5ede98be57b13683cb5f0195c478ea253c22782e36047653f569143b8b889e2f50a7331679e3cb44afd69dfad35f3c6e2b7be88a1d6a5786a09e289ba0b50cd0c13c1b45a2b95449a1b288c897ade0b62cc23f30383289c402e905ee49552ea49fb5bea337d6e3d8b17500b4014129f493c6a0750cdfdedd68507bcefddd3cd5eb5f48da13729727ca346bcc819afd7161eaa","fn":["museo-slab",["n3","n5"],"proxima-nova",["n3","n4","n6"]],"k":"//use.typekit.net/{id}.js","p":"//p.typekit.net/p.gif?s=1&k=wnc7ioh&ht=tk&h={host}&f=175.173.5474.2028.2030&a=711199&_={_}","w":"wnc7ioh"};
/*{"k":"1.5.6","created":"2013-05-29T07:26:51Z"}*/
;(function(window,document,undefined){
var g=void 0,h=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var aa=this;function ba(a,c){var b=a.split("."),e=aa;!(b[0]in e)&&e.execScript&&e.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)!b.length&&c!==g?e[d]=c:e=e[d]?e[d]:e[d]={}}aa.ib=h;function ca(a,c,b){return a.call.apply(a.bind,arguments)}
function ea(a,c,b){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,e);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}}function p(a,c,b){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:ea;return p.apply(l,arguments)}var fa=Date.now||function(){return+new Date};
function q(a,c){this.za=a;this.fa=c||a;this.t=this.fa.document;this.ha=g}q.prototype.createElement=function(a,c,b){a=this.t.createElement(a);if(c)for(var e in c)if(c.hasOwnProperty(e))if("style"==e){var d=a,f=c[e];ga(this)?d.setAttribute("style",f):d.style.cssText=f}else a.setAttribute(e,c[e]);b&&a.appendChild(this.t.createTextNode(b));return a};function r(a,c,b){a=a.t.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}
function ha(a,c){function b(){a.t.body?c():setTimeout(b,0)}b()}function s(a,c){for(var b=a.className.split(/\s+/),e=0,d=b.length;e<d;e++)if(b[e]==c)return;b.push(c);a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function t(a,c){for(var b=a.className.split(/\s+/),e=[],d=0,f=b.length;d<f;d++)b[d]!=c&&e.push(b[d]);a.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}
function ia(a,c){for(var b=a.className.split(/\s+/),e=0,d=b.length;e<d;e++)if(b[e]==c)return h;return m}function ga(a){if(a.ha===g){var c=a.t.createElement("p");c.innerHTML='<a style="top:1px;">w</a>';a.ha=/top/.test(c.getElementsByTagName("a")[0].getAttribute("style"))}return a.ha}function u(a){var c=a.fa.location.protocol;"about:"==c&&(c=a.za.location.protocol);return"https:"===("https:"==c?"https:":"http:")}q.prototype.da=function(){return this.fa.location.hostname||this.za.location.hostname};
function ja(a,c,b){var e=a.t.getElementsByTagName("head")[0];if(e){var d=a.t.createElement("script");d.src=c;var f=m;d.onload=d.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=h,b&&b(),d.onload=d.onreadystatechange=l,"HEAD"==d.parentNode.tagName&&e.removeChild(d)};e.appendChild(d)}}function v(a,c,b){this.hb=a;this.ka=c;this.gb=b}ba("internalWebfont.BrowserInfo",v);v.prototype.Ra=n("hb");v.prototype.hasWebFontSupport=v.prototype.Ra;
v.prototype.Sa=n("ka");v.prototype.hasWebKitFallbackBug=v.prototype.Sa;v.prototype.Ta=n("gb");v.prototype.hasWebKitMetricsBug=v.prototype.Ta;function w(a,c,b,e){this.g=a!=l?a:l;this.m=c!=l?c:l;this.G=b!=l?b:l;this.j=e!=l?e:l}var ma=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;function x(a){return a.g!==l}function y(a,c){return a.g>c.g||a.g===c.g&&a.m>c.m||a.g===c.g&&a.m===c.m&&a.G>c.G?1:a.g<c.g||a.g===c.g&&a.m<c.m||a.g===c.g&&a.m===c.m&&a.G<c.G?-1:0}
function z(a,c){return-1===y(a,c)}function A(a,c){return 0===y(a,c)||1===y(a,c)}function C(a,c){return 0===y(a,c)}w.prototype.toString=function(){return[this.g,this.m||"",this.G||"",this.j||""].join("")};function D(a){a=ma.exec(a);var c=l,b=l,e=l,d=l;a&&(a[1]!==l&&a[1]&&(c=parseInt(a[1],10)),a[2]!==l&&a[2]&&(b=parseInt(a[2],10)),a[3]!==l&&a[3]&&(e=parseInt(a[3],10)),a[4]!==l&&a[4]&&(d=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new w(c,b,e,d)}
function E(a,c,b,e,d,f,k,j,B,da,G){this.F=a;this.fb=c;this.eb=b;this.ta=e;this.Ha=d;this.Ga=f;this.ga=k;this.$a=j;this.Za=B;this.ra=da;this.v=G}ba("internalWebfont.UserAgent",E);E.prototype.getName=n("F");E.prototype.getName=E.prototype.getName;E.prototype.Qa=n("eb");E.prototype.getVersion=E.prototype.Qa;E.prototype.Ma=n("ta");E.prototype.getEngine=E.prototype.Ma;E.prototype.Na=n("Ga");E.prototype.getEngineVersion=E.prototype.Na;E.prototype.Oa=n("ga");E.prototype.getPlatform=E.prototype.Oa;
E.prototype.Pa=n("Za");E.prototype.getPlatformVersion=E.prototype.Pa;E.prototype.La=n("ra");E.prototype.getDocumentMode=E.prototype.La;E.prototype.Ka=n("v");E.prototype.getBrowserInfo=E.prototype.Ka;function na(a,c){this.e=a;this.R=c}var oa=new E("Unknown",new w,"Unknown","Unknown",new w,"Unknown","Unknown",new w,"Unknown",g,new v(m,m,m));
na.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")){a=H(this);var c=J(this),b=D(c),e=K(this.e,/MSIE ([\d\w\.]+)/,1),d=D(e);a=new E("MSIE",d,e,"MSIE",d,e,a,b,c,L(this.R),new v("Windows"==a&&6<=d.g||"Windows Phone"==a&&8<=b.g,m,m))}else if(-1!=this.e.indexOf("Opera"))a:{a="Unknown";var c=K(this.e,/Presto\/([\d\w\.]+)/,1),b=D(c),e=J(this),d=D(e),f=L(this.R);x(b)?a="Presto":(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),c=K(this.e,/rv:([^\)]+)/,1),b=D(c));if(-1!=this.e.indexOf("Opera Mini/")){var k=
K(this.e,/Opera Mini\/([\d\.]+)/,1),j=D(k);a=new E("OperaMini",j,k,a,b,c,H(this),d,e,f,new v(m,m,m))}else{if(-1!=this.e.indexOf("Version/")&&(k=K(this.e,/Version\/([\d\.]+)/,1),j=D(k),x(j))){a=new E("Opera",j,k,a,b,c,H(this),d,e,f,new v(10<=j.g,m,m));break a}k=K(this.e,/Opera[\/ ]([\d\.]+)/,1);j=D(k);a=x(j)?new E("Opera",j,k,a,b,c,H(this),d,e,f,new v(10<=j.g,m,m)):new E("Opera",new w,"Unknown",a,b,c,H(this),d,e,f,new v(m,m,m))}}else/AppleWeb(K|k)it/.test(this.e)?(a=H(this),c=J(this),b=D(c),e=K(this.e,
/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),d=D(e),f="Unknown",k=new w,j=m,-1!=this.e.indexOf("Chrome")||-1!=this.e.indexOf("CrMo")||-1!=this.e.indexOf("CriOS")?f="Chrome":/Silk\/\d/.test(this.e)?f="Silk":"BlackBerry"==a||"Android"==a?f="BuiltinBrowser":-1!=this.e.indexOf("Safari")?f="Safari":-1!=this.e.indexOf("AdobeAIR")&&(f="AdobeAIR"),"BuiltinBrowser"==f?k=new w:"Silk"==f?k=D(K(this.e,/Silk\/([\d\._]+)/,1)):"Chrome"==f?k=D(K(this.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2)):-1!=this.e.indexOf("Version/")?k=
D(K(this.e,/Version\/([\d\.\w]+)/,1)):"AdobeAIR"==f&&(k=D(K(this.e,/AdobeAIR\/([\d\.]+)/,1))),j="AdobeAIR"==f?2<k.g||2==k.g&&5<=k.m:"BlackBerry"==a?10<=b.g:"Android"==a?2<b.g||2==b.g&&1<b.m:526<=d.g||525<=d.g&&13<=d.m,a=new E(f,k,"Unknown","AppleWebKit",d,e,a,b,c,L(this.R),new v(j,536>d.g||536==d.g&&11>d.m,"iPhone"==a||"iPad"==a||"iPod"==a||"Macintosh"==a))):-1!=this.e.indexOf("Gecko")?(a="Unknown",c=new w,b="Unknown",e=J(this),d=D(e),f=m,-1!=this.e.indexOf("Firefox")?(a="Firefox",b=K(this.e,/Firefox\/([\d\w\.]+)/,
1),c=D(b),f=3<=c.g&&5<=c.m):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),k=K(this.e,/rv:([^\)]+)/,1),j=D(k),f||(f=1<j.g||1==j.g&&9<j.m||1==j.g&&9==j.m&&2<=j.G||k.match(/1\.9\.1b[123]/)!=l||k.match(/1\.9\.1\.[\d\.]+/)!=l),a=new E(a,c,b,"Gecko",j,k,H(this),d,e,L(this.R),new v(f,m,m))):a=oa;return a};
function H(a){var c=K(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=c)return/BB\d{2}/.test(c)&&(c="BlackBerry"),c;a=K(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function J(a){var c=K(a.e,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(c||(c=K(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(c=K(a.e,/(iPhone )?OS ([\d_]+)/,2)))return c;if(c=K(a.e,/(?:Linux|CrOS) ([^;)]+)/,1))for(var c=c.split(/\s/),b=0;b<c.length;b+=1)if(/^[\d\._]+$/.test(c[b]))return c[b];return(a=K(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}function K(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function L(a){if(a.documentMode)return a.documentMode}function pa(a){this.Xa=a||"-"}
pa.prototype.j=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.Xa)};function qa(a,c,b){this.h=a;this.l=c;this.Y=b;this.q="wf";this.n=new pa("-")}function ra(a){t(a.l,a.n.j(a.q,"loading"));ia(a.l,a.n.j(a.q,"active"))||s(a.l,a.n.j(a.q,"inactive"));M(a,"inactive")}function M(a,c,b){if(a.Y[c])if(b)a.Y[c](b.getName(),N(b));else a.Y[c]()}
function O(a,c){this.F=a;this.la=4;this.T="n";var b=(c||"n4").match(/^([nio])([1-9])$/i);b&&(this.T=b[1],this.la=parseInt(b[2],10))}O.prototype.getName=n("F");function N(a){return a.T+a.la}function P(a,c){this.h=a;this.M=c;this.A=this.h.createElement("span",{"aria-hidden":"true"},this.M)}
function sa(a,c){var b=a.A,e;e=[];for(var d=c.F.split(/,\s*/),f=0;f<d.length;f++){var k=d[f].replace(/['"]/g,"");-1==k.indexOf(" ")?e.push(k):e.push("'"+k+"'")}e=e.join(",");d="normal";f=c.la+"00";"o"===c.T?d="oblique":"i"===c.T&&(d="italic");e="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+e+";"+("font-style:"+d+";font-weight:"+f+";");ga(a.h)?b.setAttribute("style",e):b.style.cssText=
e}function ta(a){r(a.h,"body",a.A)}P.prototype.remove=function(){var a=this.A;a.parentNode&&a.parentNode.removeChild(a)};function ua(a,c,b,e,d,f,k,j){this.ma=a;this.Wa=c;this.h=b;this.z=e;this.M=j||"BESbswy";this.v=d;this.P={};this.ia=f||5E3;this.Aa=k||l;this.L=this.K=l;a=new P(this.h,this.M);ta(a);for(var B in Q)Q.hasOwnProperty(B)&&(sa(a,new O(Q[B],N(this.z))),this.P[Q[B]]=a.A.offsetWidth);a.remove()}var Q={lb:"serif",kb:"sans-serif",jb:"monospace"};
ua.prototype.start=function(){this.K=new P(this.h,this.M);ta(this.K);this.L=new P(this.h,this.M);ta(this.L);this.bb=fa();sa(this.K,new O(this.z.getName()+",serif",N(this.z)));sa(this.L,new O(this.z.getName()+",sans-serif",N(this.z)));va(this)};function wa(a,c,b){for(var e in Q)if(Q.hasOwnProperty(e)&&c===a.P[Q[e]]&&b===a.P[Q[e]])return h;return m}
function va(a){var c=a.K.A.offsetWidth,b=a.L.A.offsetWidth;c===a.P.serif&&b===a.P["sans-serif"]||a.v.ka&&wa(a,c,b)?fa()-a.bb>=a.ia?a.v.ka&&wa(a,c,b)&&(a.Aa===l||a.Aa.hasOwnProperty(a.z.getName()))?xa(a,a.ma):xa(a,a.Wa):setTimeout(p(function(){va(this)},a),25):xa(a,a.ma)}function xa(a,c){a.K.remove();a.L.remove();c(a.z)}function ya(a,c,b,e){this.h=c;this.B=b;this.aa=0;this.Da=this.xa=m;this.ia=e;this.v=a.v}
ya.prototype.ja=function(a,c,b,e){if(0===a.length&&e)ra(this.B);else{this.aa+=a.length;e&&(this.xa=e);for(e=0;e<a.length;e++){var d=a[e],f=c[d.getName()],k=this.B,j=d;s(k.l,k.n.j(k.q,j.getName(),N(j).toString(),"loading"));M(k,"fontloading",j);(new ua(p(this.Ia,this),p(this.Ja,this),this.h,d,this.v,this.ia,b,f)).start()}}};
ya.prototype.Ia=function(a){var c=this.B;t(c.l,c.n.j(c.q,a.getName(),N(a).toString(),"loading"));t(c.l,c.n.j(c.q,a.getName(),N(a).toString(),"inactive"));s(c.l,c.n.j(c.q,a.getName(),N(a).toString(),"active"));M(c,"fontactive",a);this.Da=h;za(this)};ya.prototype.Ja=function(a){var c=this.B;t(c.l,c.n.j(c.q,a.getName(),N(a).toString(),"loading"));ia(c.l,c.n.j(c.q,a.getName(),N(a).toString(),"active"))||s(c.l,c.n.j(c.q,a.getName(),N(a).toString(),"inactive"));M(c,"fontinactive",a);za(this)};
function za(a){0==--a.aa&&a.xa&&(a.Da?(a=a.B,t(a.l,a.n.j(a.q,"loading")),t(a.l,a.n.j(a.q,"inactive")),s(a.l,a.n.j(a.q,"active")),M(a,"active")):ra(a.B))}function Aa(){var a=[{name:"font-family",value:S.c[i+1]}];this.ab=[S.c[i]];this.qa=a}function Ba(a){for(var c=a.ab.join(","),b=[],e=0;e<a.qa.length;e++){var d=a.qa[e];b.push(d.name+":"+d.value+";")}return c+"{"+b.join("")+"}"}function Ca(a){this.h=a}Ca.prototype.toString=function(){return encodeURIComponent(this.h.da?this.h.da():document.location.hostname)};
function Da(a,c){this.u=a;this.o=c}Da.prototype.toString=function(){for(var a=[],c=0;c<this.o.length;c++)for(var b=this.o[c],e=b.C(),b=b.C(this.u),d=0;d<e.length;d++){var f;a:{for(f=0;f<b.length;f++)if(e[d]===b[f]){f=h;break a}f=m}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");c=[];for(e=a.length;0<e;e-=4)b=a.slice(0>e-4?0:e-4,e),c.unshift(parseInt(b,2).toString(16));return c.join("")};function Ea(a,c,b){this.h=a;this.u=c;this.o=b}function T(a){this.cb=a}
T.prototype.j=function(a,c){var b=c||{},e=this.cb.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,c,e){return e&&b[c]?"/"+b[c].join("/"):b[c]||""});e.match(/^\/\//)&&(e=(a?"https:":"http:")+e);return e.replace(/\/*\?*($|\?)/,"$1")};function Fa(a,c,b,e){this.J=a;this.S=c;this.Ua=b;this.mb=e;this.va={};this.ua={}}Fa.prototype.C=function(a){return a?(this.va[a.U]||this.S).slice(0):this.S.slice(0)};Fa.prototype.ja=function(a,c,b){var e=[],d={};Ga(this,c,e,d);a(e,d,b)};
function Ga(a,c,b,e){b.push(a.J);e[a.J]=a.C(c);a=a.ua[c.U]||[];for(c=0;c<a.length;c++){for(var d=a[c],f=d.J,k=m,j=0;j<b.length;j++)b[j]==f&&(k=h);k||(b.push(f),e[f]=d.C())}}function Ha(a,c){this.J=a;this.S=c}Ha.prototype.C=n("S");function Ia(){this.oa=this.Fa=this.r=this.N=this.O=h}function U(a,c,b){this.Ua=a;this.U=c;this.wa=b}function V(a){Ja.X.push(a)}function W(a){this.h=a;this.pa=this.u=this.e=this.W=l;this.o=[];this.Q=[];this.Ea=this.ba=this.Z=this.$=l}
function La(a,c){a.e=c;if(a.W){var b;a:{b=a.W;for(var e=a.e,d=a.pa,f=0;f<b.X.length;f++){var k=b.X[f],j=d;j||(j=new Ia);if(k.wa&&k.wa(e.getName(),e.fb,e.ta,e.Ha,e.ga,e.$a,e.ra,j)){b=k;break a}}b=l}a.u=b}}W.prototype.supportsConfiguredBrowser=function(){return!!this.u};
W.prototype.init=function(){if(0<this.Q.length){for(var a=[],c=0;c<this.Q.length;c++)a.push(Ba(this.Q[c]));var c=this.h,a=a.join(""),b=this.h.t.createElement("style");b.setAttribute("type","text/css");b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));r(c,"head",b)}};
W.prototype.load=function(a,c){var b=this.u.U;if(this.ba){var e;e=this.ba;var d=e.H[b];e=d?Ma(e,d):l;for(d=0;d<this.o.length;d++){for(var f=this.o[d],k=this.u,j=e,B=[],da=f.J.split(",")[0].replace(/"|'/g,""),G=f.C(),R=B,F=g,I=[],Ka={},ka=0;ka<G.length;ka++)F=G[ka],0<F.length&&!Ka[F]&&(Ka[F]=h,I.push(F));G=I;j=j.Ca?j.Ca(da,G,R):G;k=k.U;f.va[k]=j;f.ua[k]=B}}if(this.$){e=[];if(this.Z){e=new Ea(this.h,this.u,this.o);d=[];f=this.Z.I[b]||[];for(B=0;B<f.length;B++){a:switch(f[B]){case "observeddomain":k=
new Ca(e.h);break a;case "fontmask":k=new Da(e.u,e.o);break a;default:k=l}k&&d.push(k)}e=d}d=[];for(f=0;f<e.length;f++)d.push(e[f].toString());b=this.$.j(u(this.h),{format:b,extras:d});r(this.h,"head",this.h.createElement("link",{rel:"stylesheet",href:b}))}if(a){var la=this,fb=this.u;ha(this.h,function(){for(var b=0;b<la.o.length;b++)la.o[b].ja(a,fb,c&&b==la.o.length-1)})}};W.prototype.collectFontFamilies=function(a,c){for(var b=0;b<this.o.length;b++)Ga(this.o[b],this.u,a,c)};
W.prototype.performOptionalActions=function(){if(this.ea){var a=this,c=this.e,b=this.h;ha(this.h,function(){var e=a.ea;if(e.Ba){var d=window.__adobewebfontsappname__,d=d?d.toString().substr(0,20):"",e=e.Ba.j(u(b),{host:encodeURIComponent(b.da()),app:encodeURIComponent(d),_:(+new Date).toString()}),f=new Image(1,1);f.src=e;f.onload=function(){f.onload=l}}e=a.ea;e.na&&(e=e.na.j(c,b),r(b,"body",e))})}};function Na(a,c,b,e){this.Ya=a;this.h=c;this.e=b;this.l=e;this.s=[]}Na.prototype.V=function(a){this.s.push(a)};
Na.prototype.load=function(a,c){var b=a,e=c||{};if("string"==typeof b)b=[b];else if(!b||!b.length)e=b||{},b=[];if(b.length)for(var d=this,f=b.length,k=0;k<b.length;k++){var j=this.Ya.j(u(this.h),{id:encodeURIComponent(b[k])});ja(this.h,j,function(){0==--f&&Oa(d,e)})}else Oa(this,e)};
function Oa(a,c){if(0!=a.s.length){for(var b=new qa(a.h,a.l,c),e=m,d=0;d<a.s.length;d++)a.s[d].init(),e=e||a.s[d].supportsConfiguredBrowser();if(e){s(b.l,b.n.j(b.q,"loading"));M(b,"loading");for(var f=new ya(a.e,a.h,b),b=function(a,b,c){for(var d=[],e=0;e<a.length;e+=1){var R=a[e];if(b[R])for(var F=b[R],I=0;I<F.length;I+=1)d.push(new O(R,F[I]));else d.push(new O(R))}f.ja(d,{},l,c)},e=0;e<a.s.length;e++)d=a.s[e],d.supportsConfiguredBrowser()&&(d.load(b,e==a.s.length-1),d.performOptionalActions(window))}else ra(b);
a.s=[]}}function Pa(a){this.D=a;this.s=[]}Pa.prototype.V=function(a){this.s.push(a)};Pa.prototype.load=function(){var a=this.D.__webfonttypekitmodule__;if(a)for(var c=0;c<this.s.length;c++){var b=this.s[c],e=a[b.Ea];e&&e(function(a,c,e){a=[];c={};var j=(new na(navigator.userAgent,document)).parse();La(b,j);b.supportsConfiguredBrowser()&&(b.init(),b.load(l),b.collectFontFamilies(a,c),b.performOptionalActions(window));e(b.supportsConfiguredBrowser(),a,c)})}};function Qa(a,c){this.F=a;this.Ca=c}
Qa.prototype.getName=n("F");function Ra(a){var c=X;Ma(c,a.getName())||c.ca.push(a)}function Ma(a,c){for(var b=0;b<a.ca.length;b++){var e=a.ca[b];if(c===e.getName())return e}return l}function Sa(a,c,b,e){this.D=a;this.t=c;this.Va=b;this.ya=e}
Sa.prototype.j=function(a,c){var b=this.t.createElement("img");b.setAttribute("width",62);b.setAttribute("height",25);b.setAttribute("src",this.Va.j(u(c)));b.setAttribute("class","typekit-badge");b.setAttribute("alt","Fonts by Typekit");b.setAttribute("title","Information about the fonts used on this site");b.style.position="fixed";b.style.zIndex=2E9;b.style.right=0;b.style.bottom=0;b.style.cursor="pointer";b.style.border=0;"Opera"!=a.getName()&&(b.style.content="none");b.style.display="inline";b.style["float"]=
"none";b.style.height="25px";b.style.left="auto";b.style.margin=0;b.style.maxHeight="25px";b.style.maxWidth="62px";b.style.minHeight="25px";b.style.minWidth="62px";b.style.orphans=2;b.style.outline="none";b.style.overflow="visible";b.style.padding=0;b.style.pageBreakAfter="auto";b.style.pageBreakBefore="auto";b.style.pageBreakInside="auto";b.style.tableLayout="auto";b.style.textIndent=0;b.style.top="auto";b.style.unicodeBidi="normal";b.style.verticalAlign="baseline";b.style.visibility="visible";b.style.widows=
2;b.style.width="65px";if(this.ya){var e=this.t,d=this.ya;Ta(this,b,"click",function(){e.location.href=d})}var f=a.ga;if("MSIE"==a.getName()&&"Windows Phone"!=f){b.style.position="absolute";var k=this,j=function(){var a=Ua(k,"scrollLeft","scrollTop"),c=Ua(k,"clientWidth","clientHeight");b.style.bottom="auto";b.style.right="auto";b.style.top=a[1]+c[1]-25+"px";b.style.left=a[0]+c[0]-3-62+"px"};Ta(this,this.D,"scroll",j);Ta(this,this.D,"resize",j)}if("iPhone"==f||"iPod"==f||"iPad"==f||"Android"==f||
"Windows Phone"==f||"BlackBerry"==f)b.style.display="none";return b};function Ua(a,c,b){var e=0,d=0;a=a.t;if(a.documentElement&&(a.documentElement[c]||a.documentElement[b]))e=a.documentElement[c],d=a.documentElement[b];else if(a.body&&(a.body[c]||a.body[b]))e=a.body[c],d=a.body[b];return[e,d]}function Ta(a,c,b,e){if(c.attachEvent){var d=a.D;c["e"+b+e]=e;c[b+e]=function(){c["e"+b+e](d.event)};c.attachEvent("on"+b,c[b+e])}else c.addEventListener(b,e,m)}var Ja=new function(){this.X=[]};
V(new U("air-linux-win","a",function(a,c,b,e,d,f){b=m||"Windows"==d&&!x(f);return!b&&!("Ubuntu"==d||"Linux"==d)?m:"AdobeAIR"==a?A(c,new w(2,5)):m}));V(new U("air-osx","b",function(a,c,b,e,d,f){b=m||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f);return!b?m:"AdobeAIR"==a?A(c,new w(2,5)):m}));V(new U("builtin-android2to3-android4plus","a",function(a,c,b,e,d,f,k,j){c=(c=m||j.r&&"Android"==d&&A(f,new w(2,2))&&z(f,new w(3,1)))||j.r&&"Android"==d&&A(f,new w(4,1));return!c?m:"BuiltinBrowser"==a}));
V(new U("builtin-android3to4","f",function(a,c,b,e,d,f,k,j){c=m||j.r&&"Android"==d&&A(f,new w(3,1))&&z(f,new w(4,1));return!c?m:"BuiltinBrowser"==a}));V(new U("builtin-bb10plus","d",function(a,c,b,e,d,f,k,j){c=m||j.oa&&A(f,new w(10));return!c?m:"BuiltinBrowser"==a}));
V(new U("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp","a",function(a,c,b,e,d,f){b=(b=(b=(b=(b=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1)))||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f);return!b&&!("Ubuntu"==d||"Linux"==d)?m:"Chrome"==a&&(1===y(c,new w(4,0,249))&&z(c,new w(6))||C(c,new w(4,0,249))&&(c.j===l||4<=c.j))?h:m}));
V(new U("chrome6plus-androidany-chromeos-ipad5plus-iphone5plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,e,d,f,k,j){a=(b=(b=(b=(b=(b=(b=(b=(b=(b=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1)))||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f))||("Ubuntu"==d||"Linux"==d)||j.r&&"Android"==d)||"CrOS"==d)||(j.N&&"iPad"==d?A(f,new w(5)):m))||(j.O&&("iPhone"==d||"iPod"==d)?A(f,new w(5)):m))?"Chrome"==
a?A(c,new w(6)):g:m;return a}));V(new U("chrome6plus-ipad4-iphone4","a",function(a,c,b,e,d,f,k,j){a=(b=(b=m||(j.N&&"iPad"==d?A(f,new w(4,2))&&z(f,new w(5)):m))||(j.O&&("iPhone"==d||"iPod"==d)?A(f,new w(4,2))&&z(f,new w(5)):m))?"Chrome"==a?A(c,new w(6)):g:m;return a}));
V(new U("ff35-linux-win2003-win7plus-winvista-winxp","a",function(a,c,b,e,d,f){a=(a=(a=(a=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1));return!a&&!("Ubuntu"==d||"Linux"==d)?m:"Gecko"==b?C(e,new w(1,9,1))&&!/^b[1-3]$/.test(e.j||""):m}));V(new U("ff35-osx","b",function(a,c,b,e,d,f){a=m||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f);return!a?m:"Gecko"==b?C(e,new w(1,9,1))&&!/^b[1-3]$/.test(e.j||""):m}));
V(new U("ff36plus-androidany-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,e,d,f,k,j){a=(a=(a=(a=(a=(a=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1)))||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f))||("Ubuntu"==d||"Linux"==d)||j.r&&"Android"==d;return!a?m:"Gecko"==b?1===y(e,new w(1,9,1)):m}));
V(new U("ie6to8-win2003-win7plus-winvista-winxp","i",function(a,c,b,e,d,f,k){a=(b=(b=(b=(b=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1)))?"MSIE"==a?A(c,new w(6,0))&&(k===g||9>k):g:m;return a}));V(new U("ie9plus-win7plus-winvista","d",function(a,c,b,e,d,f,k){a=(c=(c=m||"Windows"==d&&A(f,new w(6,1)))||"Windows"==d&&C(f,new w(6,0)))?"MSIE"==a?9<=k:g:m;return a}));
V(new U("ieany-winphone8plus","d",function(a,c,b,e,d,f,k,j){c=m||j.Fa&&"Windows Phone"==d&&A(f,new w(8));return!c?m:"MSIE"==a}));V(new U("opera10-linux-win2003-win7plus-winvista-winxp","a",function(a,c,b,e,d,f){b=(b=(b=(b=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1));return!b&&!("Ubuntu"==d||"Linux"==d)?m:"Opera"==a?A(c,new w(10,54))&&z(c,new w(11,10)):m}));
V(new U("opera10-osx","b",function(a,c,b,e,d,f){b=m||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f);return!b?m:"Opera"==a?A(c,new w(10,54))&&z(c,new w(11,10)):m}));
V(new U("opera11plus-androidany-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,e,d,f,k,j){b=(b=(b=(b=(b=(b=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1)))||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f))||("Ubuntu"==d||"Linux"==d)||j.r&&"Android"==d;return!b?m:"Opera"==a?A(c,new w(11,10)):m}));
V(new U("safari3to5-osx","b",function(a,c,b,e,d,f){c=m||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f);return!c?m:"Safari"==a&&"AppleWebKit"==b?A(e,new w(525,13))&&z(e,new w(534,50)):m}));V(new U("safari3to5-win2003-win7plus-winvista-winxp","a",function(a,c,b,e,d,f){c=(c=(c=(c=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1));return!c?m:"Safari"==a&&"AppleWebKit"==b?A(e,new w(525,13))&&z(e,new w(534,50)):m}));
V(new U("safari5plus-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,e,d,f){c=(c=(c=(c=(c=m||"Windows"==d&&C(f,new w(5,1)))||"Windows"==d&&C(f,new w(5,2)))||"Windows"==d&&C(f,new w(6,0)))||"Windows"==d&&A(f,new w(6,1)))||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f);return!c?m:"Safari"==a&&"AppleWebKit"==b?A(e,new w(534,50)):m}));
V(new U("safariany-ipad4-iphone4","a",function(a,c,b,e,d,f,k,j){c=(c=m||(j.N&&"iPad"==d?A(f,new w(4,2))&&z(f,new w(5)):m))||(j.O&&("iPhone"==d||"iPod"==d)?A(f,new w(4,2))&&z(f,new w(5)):m);return!c?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==d||"iPad"==d)?h:m}));
V(new U("safariany-ipad5plus-iphone5plus","d",function(a,c,b,e,d,f,k,j){c=(c=m||(j.N&&"iPad"==d?A(f,new w(5)):m))||(j.O&&("iPhone"==d||"iPod"==d)?A(f,new w(5)):m);return!c?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==d||"iPad"==d)?h:m}));V(new U("silk1to2-android2to3-osx","a",function(a,c,b,e,d,f,k,j){b=(b=m||j.r&&"Android"==d&&A(f,new w(2,2))&&z(f,new w(3,1)))||"Macintosh"==d&&A(f,new w(10,4))||"Macintosh"==d&&!x(f);return!b?m:j.r&&"Silk"==a?z(c,new w(2)):m}));
V(new U("silk2plus-android3to4-linux","f",function(a,c,b,e,d,f,k,j){b=m||j.r&&"Android"==d&&A(f,new w(3,1))&&z(f,new w(4,1));return!b&&!("Ubuntu"==d||"Linux"==d)?m:j.r&&"Silk"==a?A(c,new w(2)):m}));V(new U("silk2plus-android4plus","a",function(a,c,b,e,d,f,k,j){b=m||j.r&&"Android"==d&&A(f,new w(4,1));return!b?m:j.r&&"Silk"==a?A(c,new w(2)):m}));var X=new function(){this.ca=[];this.H={}};Ra(new Qa("AllFonts",function(a,c){return c}));
Ra(new Qa("DefaultFourFontsWithSingleFvdFamilies",function(a,c,b){for(var e=0;e<c.length;e++){var d=c[e],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+d;b.push(new Ha(f,[d]))}a={};for(d=0;d<c.length;d++)b=c[d],e=b.charAt(1),(a[e]||(a[e]=[])).push(b);b=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];e=[];for(d=0;d<b.length;d++)for(var f=b[d],k=0;k<f.length;k++){var j=f[k];if(a[j]){e=e.concat(a[j]);break}}b=e;e={};a=[];for(d=0;d<b.length;d++)f=b[d],e[f]||(e[f]=h,a.push(f));b=[];for(e=0;e<c.length;e++){d=c[e];
for(f=0;f<a.length;f++)k=a[f],k==d&&b.push(k)}return b}));X.H.a="AllFonts";X.H.b="AllFonts";X.H.d="AllFonts";X.H.f="AllFonts";X.H.i="DefaultFourFontsWithSingleFvdFamilies";var Y=new function(){this.I={}};Y.I.a=[];Y.I.b=[];Y.I.d=[];Y.I.f=["observeddomain"];Y.I.i=["observeddomain","fontmask"];var Va=(new na(navigator.userAgent,document)).parse();window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var Wa=window.Typekit.config||{},Xa=l;Wa.k&&(Xa=new T(Wa.k));var Ya=new Na(Xa,new q(window),Va,document.documentElement),Za=new Pa(window);window.Typekit.load=function(){Ya.load.apply(Ya,arguments)};window.Typekit.addKit=function(){Ya.V.apply(Ya,arguments)}}var $a,ab=l,bb=l,cb=l,db,Z,$,S=window.Typekit.config||{};S.b&&(ab=new T(S.b),bb=new Sa(window,document,ab,S.bu));S.p&&(cb=new T(S.p));db=new function(){var a=cb;this.na=bb;this.Ba=a};$=new W(new q(window));$.ea=db;Z=new Ia;
Z.O=!S.si;Z.N=!S.st;Z.r=!S.sa;Z.Fa=!S.sw;Z.oa=!S.sb;$.pa=Z;S.w&&($.Ea=S.w);S.f&&($a=new T(S.f),$.$=$a);var i;if(S.fn)for(i=0;i<S.fn.length;i+=2)$.o.push(new Fa(S.fn[i],S.fn[i+1]));if(S.c)for(i=0;i<S.c.length;i+=2)$.Q.push(new Aa);$.Z=Y;$.W=Ja;$.ba=X;var eb;if(eb=Za)eb=!!Za.D.__webfonttypekitmodule__;eb?(Za.V($),Za.load()):(La($,Va),window.Typekit.addKit($));
})(this,document);
