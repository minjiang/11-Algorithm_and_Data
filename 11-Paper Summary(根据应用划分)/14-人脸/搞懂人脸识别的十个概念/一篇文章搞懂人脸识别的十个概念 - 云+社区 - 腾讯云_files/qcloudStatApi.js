!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="//imgcache.qq.com/qcloud/main/scripts/",t(0)}({0:function(e,t,n){n("K+qK"),n("tAlG"),n("XAob"),n("X7kb")},"K+qK":function(e,t,n){var o=n("3but"),r=n("xuqg").sessionStorage,i=o.getCookieDomain(),a="https://"+o.getRealHostname();encodeURIComponent(location.href);!function(){var e=document.createElement("script");e.src=location.protocol+"//imgcache.qq.com/qcloud/platreport/dest/index.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),function(e){e({},{},{})}(function(e,t,n){function o(e,t){var n=(65535&e)+(65535&t),o=(e>>16)+(t>>16)+(n>>16);return o<<16|65535&n}function c(e,t){return e<<t|e>>>32-t}function u(e,t,n,r,i,a){return o(c(o(o(t,e),o(r,a)),i),n)}function s(e,t,n,o,r,i,a){return u(t&n|~t&o,e,t,r,i,a)}function d(e,t,n,o,r,i,a){return u(t&o|n&~o,e,t,r,i,a)}function l(e,t,n,o,r,i,a){return u(t^n^o,e,t,r,i,a)}function m(e,t,n,o,r,i,a){return u(n^(t|~o),e,t,r,i,a)}function p(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,i,a,c,u=1732584193,p=-271733879,f=-1732584194,g=271733878;for(n=0;n<e.length;n+=16)r=u,i=p,a=f,c=g,u=s(u,p,f,g,e[n],7,-680876936),g=s(g,u,p,f,e[n+1],12,-389564586),f=s(f,g,u,p,e[n+2],17,606105819),p=s(p,f,g,u,e[n+3],22,-1044525330),u=s(u,p,f,g,e[n+4],7,-176418897),g=s(g,u,p,f,e[n+5],12,1200080426),f=s(f,g,u,p,e[n+6],17,-1473231341),p=s(p,f,g,u,e[n+7],22,-45705983),u=s(u,p,f,g,e[n+8],7,1770035416),g=s(g,u,p,f,e[n+9],12,-1958414417),f=s(f,g,u,p,e[n+10],17,-42063),p=s(p,f,g,u,e[n+11],22,-1990404162),u=s(u,p,f,g,e[n+12],7,1804603682),g=s(g,u,p,f,e[n+13],12,-40341101),f=s(f,g,u,p,e[n+14],17,-1502002290),p=s(p,f,g,u,e[n+15],22,1236535329),u=d(u,p,f,g,e[n+1],5,-165796510),g=d(g,u,p,f,e[n+6],9,-1069501632),f=d(f,g,u,p,e[n+11],14,643717713),p=d(p,f,g,u,e[n],20,-373897302),u=d(u,p,f,g,e[n+5],5,-701558691),g=d(g,u,p,f,e[n+10],9,38016083),f=d(f,g,u,p,e[n+15],14,-660478335),p=d(p,f,g,u,e[n+4],20,-405537848),u=d(u,p,f,g,e[n+9],5,568446438),g=d(g,u,p,f,e[n+14],9,-1019803690),f=d(f,g,u,p,e[n+3],14,-187363961),p=d(p,f,g,u,e[n+8],20,1163531501),u=d(u,p,f,g,e[n+13],5,-1444681467),g=d(g,u,p,f,e[n+2],9,-51403784),f=d(f,g,u,p,e[n+7],14,1735328473),p=d(p,f,g,u,e[n+12],20,-1926607734),u=l(u,p,f,g,e[n+5],4,-378558),g=l(g,u,p,f,e[n+8],11,-2022574463),f=l(f,g,u,p,e[n+11],16,1839030562),p=l(p,f,g,u,e[n+14],23,-35309556),u=l(u,p,f,g,e[n+1],4,-1530992060),g=l(g,u,p,f,e[n+4],11,1272893353),f=l(f,g,u,p,e[n+7],16,-155497632),p=l(p,f,g,u,e[n+10],23,-1094730640),u=l(u,p,f,g,e[n+13],4,681279174),g=l(g,u,p,f,e[n],11,-358537222),f=l(f,g,u,p,e[n+3],16,-722521979),p=l(p,f,g,u,e[n+6],23,76029189),u=l(u,p,f,g,e[n+9],4,-640364487),g=l(g,u,p,f,e[n+12],11,-421815835),f=l(f,g,u,p,e[n+15],16,530742520),p=l(p,f,g,u,e[n+2],23,-995338651),u=m(u,p,f,g,e[n],6,-198630844),g=m(g,u,p,f,e[n+7],10,1126891415),f=m(f,g,u,p,e[n+14],15,-1416354905),p=m(p,f,g,u,e[n+5],21,-57434055),u=m(u,p,f,g,e[n+12],6,1700485571),g=m(g,u,p,f,e[n+3],10,-1894986606),f=m(f,g,u,p,e[n+10],15,-1051523),p=m(p,f,g,u,e[n+1],21,-2054922799),u=m(u,p,f,g,e[n+8],6,1873313359),g=m(g,u,p,f,e[n+15],10,-30611744),f=m(f,g,u,p,e[n+6],15,-1560198380),p=m(p,f,g,u,e[n+13],21,1309151649),u=m(u,p,f,g,e[n+4],6,-145523070),g=m(g,u,p,f,e[n+11],10,-1120210379),f=m(f,g,u,p,e[n+2],15,718787259),p=m(p,f,g,u,e[n+9],21,-343485551),u=o(u,r),p=o(p,i),f=o(f,a),g=o(g,c);return[u,p,f,g]}function f(e){var t,n="";for(t=0;t<32*e.length;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function g(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;for(t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function w(e){return f(p(g(e),8*e.length))}function v(e,t){var n,o,r=g(e),i=[],a=[];for(i[15]=a[15]=void 0,r.length>16&&(r=p(r,8*e.length)),n=0;n<16;n+=1)i[n]=909522486^r[n],a[n]=1549556828^r[n];return o=p(i.concat(g(t)),512+8*t.length),f(p(a.concat(o),640))}function h(e){var t,n,o="0123456789abcdef",r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+=o.charAt(t>>>4&15)+o.charAt(15&t);return r}function y(e){return unescape(encodeURIComponent(e))}function S(e){return w(y(e))}function q(e){return h(S(e))}function b(e,t){return v(y(e),y(t))}function x(e,t){return h(b(e,t))}function T(e,t,n){return t?n?b(t,e):x(t,e):n?S(e):q(e)}function E(e){var t=new RegExp("(^| )"+decodeURIComponent(e)+"(?:=([^;]*))?(;|$)"),n=document.cookie.match(t);return n?n[2]?decodeURIComponent(n[2]):"":null}function _(e,t,n,o,r,i){var a=new Date,n=arguments[2]||null,o=arguments[3]||"/",r=arguments[4]||null,i=arguments[5]||!1;n?a.setMinutes(a.getMinutes()+parseInt(n)):"",document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+(n?";expires="+a.toGMTString():"")+(o?";path="+o:"")+(r?";domain="+r:"")+(i?";secure":"")}function C(){var e=E("uin");return e&&(e=e.replace(/^o(0)*/gi,"")),e}function I(e,t){var n=arguments[1]||window.location.search,o=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=n.substr(n.indexOf("?")+1).match(o);return null!=r?r[2]:""}function k(e,t,n){function o(e,t){return function(){return e.apply(t,arguments)}}if(e&&t&&n)if(e instanceof Array)for(var r=0,i=e.length;r<i;r++)k(e[r],t,n);else if(t instanceof Array)for(var r=0,i=t.length;r<i;r++)k(e,t[r],n);else if(window.addEventListener){var a=o(n,e);e.addEventListener(t,a,!1)}else if(window.attachEvent){var a=o(n,e);e.attachEvent("on"+t,a)}else e["on"+t]=n}function A(e,t,n){var e=window.event||e,o=e.srcElement||e.target;return o}function L(e,t){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}function O(){var e=T(Math.random()+"_"+W+"_"+Y+"_"+ne+"_"+ee+"_"+navigator.appName+"_"+navigator.userAgent+"_"+(new Date).getTime());return _("qcloud_visitId",e,"","/",i),e}function D(){if(r.isSupport()){var e=r.get("landingpage");return e?e:(r.set("landingpage",location.href),location.href)}if(E("landingpage"))return E("landingpage");var t=location.href.substr(0,200);return _("landingpage",t,"","/",i),t}function N(e,t){if("string"==typeof e)var e=e;else if(t=e,location.hostname.indexOf("qcloud.com")!=-1)var e="https://ping.qcloud.com/trafficCollect.php";else var e="https://ping.cloud.tencent.com/trafficCollect.php";"hotrep"!=t.expKey||window.TCISD||N({expKey:"tcssHotrep",expValue:t.expValue}),"tcssHotrep"==t.expKey?(t=L(t,{dm:"www.qcloud.com.hot",url:location.pathname,tt:"-",hottag:t.expValue,hotx:9999,hoty:9999}),delete t.expKey,delete t.expValue,e="https://pingfore.qq.com/pingd"):t=L(t,se),t.t=(new Date).getTime();var n=document.createElement("img"),o=[];for(var r in t)o.push(r+"="+encodeURIComponent(t[r]));n.onload=n.onerror=function(){n=n.onload=n.onerror=null},n.src=e+(e.indexOf("?")<0?"?":"&")+o.join("&")}function j(){return document.referrer||""}function P(e){var t={sogou:[/^http(s)?:\/\/(www|m)\.sogou.com\/bill_cpc/],baidu:[/^http(s)?:\/\/bzclk\.baidu\.com\/adrc\.php/,/http(s)?:\/\/cpro\.baidu\.com/,/http(s)?:\/\/www\.baidu\.com\/baidu\.php/],google:[/^http(s)?:\/\/www\.googleadservices\.com\/pagead\/aclk/]},n={baidu:[/^http(s)?:\/\/www\.baidu\.com/,/^http(s)?:\/\/m\.baidu\.com/],google:[/^http(s)?:\/\/[^\.]+\.google\./],sogou:[/^http(s)?:\/\/(www|m)\.sogou\.com/],bing:[/^http(s)?:\/\/[^\.]+\.bing\.com/],sm:[/^http(s)?:\/\/(.+)\.sm\.cn/],360:[/^http(s)?:\/\/[^\.]+\.so\.com/]},o=j(),r="sem"==e?t:n,i=null;for(var a in r)for(var c=0;c<r[a].length;c++)if(r[a][c].test(o)){i=a;break}return i?["qcloud",i,e].join("."):""}function R(){var e=E("qcloud_from")||"";return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e}function Q(){var e=/^https:\/\/www.qcloud.com\/login(\/)?(\?.*)?$/,t=/^https:\/\/(intl.)?cloud.tencent.com\/login(\/)?(\?.*)?$/,n=location.href;if(e.test(n)||t.test(n)){var o=decodeURIComponent(I("s_url"));if(o&&I("fromSource",o))return I("fromSource",o)}return""}function U(){var e=location.href,t=/^https:\/\/(www.qcloud.com|cloud.tencent.com)\/community/;return!!t.test(e)}function K(e){return e=e||j(),!/^http(s)?:\/\/(.)+(\.qcloud\.com|\.tencent\.com|\.qq\.com|\.dnspod\.cn)/.test(e)}function B(e){return e=e||j(),/^http(s)?:\/\/afpeng\.alimama\.com\/ex/.test(e)}function M(){var e="qcloud.directEnter.",t=location.hostname;try{if("cloud.tencent.com"==t||"www.qcloud.com"==t||"intl.cloud.tencent.com"==t){var n=location.pathname.split("/");n=n&&n.length>=2&&n[1]?n[1]:"home",e+=n}else e+=t;return e}catch(e){return"qcloud.directEnter"}}function F(){var e=I("fromSource"),t=R(),n=j(),o=M(),r="qcloud.outsideSite",i="gwzcw.59957.59957.59957",a="gwzcw.711973.711973.711973";if(e||(e=Q()),e)return V(e)&&t?V(t)&&t!=r?e:t:e;if(n){var c=P("sem")||P("seo");return B(n)?t?t:a:K(n)&&U()?t?t:i:c?c:K(n)&&(V(t)||!t)?r:t}return t?t:U()?i:o}function G(){var e=I("from")||"",t=E("from")||"";return e&&e.length<=50&&_("from",e,2880,"/",i),e||t}function H(e){e+="-"+(new Date).getTime(),_("qcloud_from",e,43200,"/",i);var t=new Image,n={".cloud.tencent.com":"www.qcloud.com",".qcloud.com":"cloud.tencent.com"},o="/services/sync/cookie";t.onload=t.onerror=function(){t=t.onload=t.onerror=null};var r=n[i];r&&(r="https://"+r+o+"?qcloud_from="+e,t.src=r)}function V(e){return e&&/^qcloud\./.test(e)}function z(e){var t=100;return e!=R()&&e.length&&e.length<=t}function X(e){var t=a+"/services/ajax/report_channel",n={type:"browse",uin:W,channelId:e,referer:Y,t:(new Date).getTime()},o=document.createElement("img"),r=[];for(var i in n)r.push(i+"="+encodeURIComponent(n[i]));o.onload=o.onerror=function(){o=o.onload=o.onerror=null},o.src=t+"?"+r.join("&")}function Z(e){return le&&!me.test(e)?"m."+e:le?e:e.replace(me,"")}function J(){ge&&new Date-pe<50||fe||(fe=!0,N({expKey:"stayTime",expValue:(new Date).getTime()-te}))}var W=C()||"",Y=j(),ee=location.href,te=(new Date).getTime(),ne=F()||M(),oe=G()||"",re=E("qcloud_visitId")||O(),ie=E("language")||"",ae=E("lastLoginType")||"",ce=E("_ga")||"",ue=document.title||"";z(ne)&&(H(ne),X(ne));var se={uin:W,ul:ee,referer:Y,fromSource:ne,visitId:re,landingpage:D(),language:ie,lastLoginType:ae,_ga:ce,pageTitle:ue,from:oe,type:"OfficialNetworkTraffic"};window.ignoreReportQcloudStat||N({expKey:"browse",expValue:location.href});var de=navigator.userAgent,le=(/AppleWebKit.*Mobile/i.test(de)||/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(de))&&!/iPad/i.test(de),me=/^m\./;k(document.body,"mousedown",function(e){if(0==e.button||1==e.button)for(var t=A(e),n="";t&&"BODY"!=t.tagName&&"HTML"!=t.tagName;){if("TBODY"!=t.tagName&&"THEAD"!=t.tagName&&t.getAttribute&&!n&&(n=t.getAttribute("hotrep")||t.hotrep||""),n){n=Z(n),N({expKey:"hotrep",expValue:n});break}t=t.parentNode}});var pe,fe,ge=window.attachEvent&&!window.opera;if(ge&&k(document.body,"mouseup",function(e){var t=A(e);1===t.nodeType&&/^ajavascript:/i.test(t.tagName+t.href)&&(pe=new Date)}),k(window,"beforeunload",J),k(window,"unload",J),window.performance&&window.performance.timing&&window.sessionStorage){if(!r.isSupport())return;if(!window.$&&!window.jQuery)return;$(function(){function e(){if(r){if(!sessionStorage.QSCountry)return r}else r=$.Deferred();return sessionStorage.QSCountry&&sessionStorage.QSProvince&&sessionStorage.QSCity&&sessionStorage.ip?r.resolve({country:sessionStorage.QSCountry,province:sessionStorage.QSProvince,city:sessionStorage.QSCity,ip:sessionStorage.ip}):(window.queryIPLibraryCallback=function(e){if(e&&0==e.code&&e.data){var t=sessionStorage.QSCountry=e.data.country||"\u672a\u77e5",n=sessionStorage.QSProvince=e.data.province||"\u672a\u77e5",o=sessionStorage.QSCity=e.data.city||"\u672a\u77e5",i=sessionStorage.ip=e.data.ip||"\u672a\u77e5";r.resolve({country:t,province:n,city:o,ip:i})}},$.getScript(a+"/services/ajax/queryIPLibrary?callback=queryIPLibraryCallback&t="+(new Date).getTime()),r)}function t(e){var t=new Image,n=$.Deferred(),o=(new Date).getTime();return t.onload=function(){t=t.onload=t.onerror=null,n.resolve((new Date).getTime()-o)},t.onerror=function(){t=t.onload=t.onerror=null,n.resolve(9999)},t.src=e,n}var n=window.performance.timing,o=n.domInteractive;if(o){var r,i="https://imgcache.qq.com/open_proj/proj_qcloud_v2/qcloud_2015/css/img/global/test.png?"+(new Date).getTime(),c="https://mc.qcloudimg.com/static/img/7111afd8e8e737167d355af8b3455536/test.png?"+(new Date).getTime(),u=a+"/services/ajax/reportDc";window.QcloudGetIpAreaInfo||(window.QcloudGetIpAreaInfo=e),n.domainLookupEnd&&n.domainLookupStart&&n.connectEnd&&n.connectStart&&n.responseEnd&&n.requestStart&&n.domLoading&&n.navigationStart&&o>n.domLoading&&e().done(function(e){if(e.country.indexOf("\u4e2d\u56fd")==-1){var r={dnslookup:n.domainLookupEnd-n.domainLookupStart,tcpCostTime:n.connectEnd-n.connectStart,httpCostTime:n.responseEnd-n.requestStart,domCostTime:o-n.domLoading,totalCostTime:o-n.navigationStart,uin:W,domain:location.hostname,path:location.pathname,url:ee,referer:Y,userIp:e.ip,countryArea:e.country,province:e.province,city:e.city};N(u,{typeId:"dns",data:JSON.stringify(r)}),$.when(t(i),t(c)).done(function(t,n){var o={uin:W,imgcacheLoadTime:t,mccdnLoadTime:n,totalCostTime:"",userIp:e.ip,countryArea:e.country,province:e.province,city:e.city};N(u,{typeId:"cdn",data:JSON.stringify(o)})})}})}})}window.QcloudStat=n.exports={reportAction:N},function(){var e=location.hostname;if(!("www.qcloud.com"!=e&&"cloud.tencent.com"!=e&&"intl.cloud.tencent.com"!=e||U()||window._mtac)){window._mtac={performanceMonitor:1};var t=document.createElement("script");t.src="//pingjs.qq.com/h5/stats.js?v2.0.4",t.setAttribute("name","MTAH5"),t.setAttribute("sid","500505369"),t.setAttribute("cid","500505370");var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}(),function(){var e=document.createElement("script");e.src=location.protocol+"//tajs.qq.com/stats?sId=62716249";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),function(){var e=I("qz_gdt")||I("gdt_vid"),t=a+"/services/ajax/reportGDT",n="";if(e?(_("gdt_click_id",e,"","/",i),n="VIEW_CONTENT"):E("gdt_click_id")&&(e=E("gdt_click_id"),n="CONSULT"),n){var o={action_type:n,url:location.href,user_action_set_id:1106426173,click_id:e};N(t,{data:JSON.stringify(o)})}}(),function(){try{var e=E("subAccountLoginPage");e&&e.indexOf("?")!=-1&&(e=e.split("?")[0],_("subAccountLoginPage",e,43200,"/",i))}catch(e){}}()})},"3but":function(e,t){var n={getRealHostname:function(){var e=location.hostname;return e.indexOf("qcloud.com")!=-1?"www.qcloud.com":e.indexOf("cloud.tencent.com")!=-1?"cloud.tencent.com":"www.qcloud.com"},getCookieDomain:function(){var e=location.hostname;return e.indexOf("qcloud.com")!=-1?".qcloud.com":e.indexOf("cloud.tencent.com")!=-1?".cloud.tencent.com":".qcloud.com"},getQcmainHostname:function(){var e=location.hostname;return e.indexOf("qcloud.com")!=-1?"www.qcloud.com":e.indexOf("intl.cloud.tencent.com")!=-1?"intl.cloud.tencent.com":e.indexOf("cloud.tencent.com")!=-1?"cloud.tencent.com":"www.qcloud.com"}};e.exports=n},xuqg:function(e,t){var n={set:function(e,t){if(window.sessionStorage&&"string"==typeof e)try{window.sessionStorage[e]=t}catch(e){}},get:function(e){return window.sessionStorage&&"string"==typeof e?window.sessionStorage[e]:null},isSupport:function(){if(!window.sessionStorage)return!1;try{return window.sessionStorage.isPrivate=!1,!0}catch(e){return!1}}},o={set:function(e,t){if(window.localStorage&&"string"==typeof e)try{window.localStorage[e]=t}catch(e){}},get:function(e){return window.localStorage&&"string"==typeof e?window.localStorage[e]:null},isSupport:function(){if(!window.localStorage)return!1;try{return window.localStorage.isPrivate=!1,!0}catch(e){return!1}}};e.exports={sessionStorage:n,localStorage:o}},tAlG:function(e,t){function n(){!function(e,t,n,o,r){e[o]=e[o]||[],e[o].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var i=t.getElementsByTagName(n)[0],a=t.createElement(n),c="dataLayer"!=o?"&l="+o:"";a.async=!0,a.src="https://www.googletagmanager.com/gtm.js?id="+r+c,i.parentNode.insertBefore(a,i)}(window,document,"script","dataLayer","GTM-KV8Z8NK")}var o="miniprogram"===window.__wxjs_environment;o||(window.$?$(window).on("load",function(){n()}):n())},XAob:function(e,t){!function(e,t,n,o,r,i,a){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,i=t.createElement(n),a=t.getElementsByTagName(n)[0],i.async=1,i.src=o,a.parentNode.insertBefore(i,a)}(window,document,"script","//imgcache.qq.com/open/qcloud/common/analytics.js?max_age=31536000","ga");var n="miniprogram"===window.__wxjs_environment;n||navigator.userAgent.toLowerCase().indexOf("micromessenger")===-1&&("intl.cloud.tencent.com"==location.hostname?(ga("create","UA-104377279-1","auto"),ga("send","pageview")):(ga("create","UA-67744695-1","auto",{allowLinker:!0}),ga("require","linker"),location.hostname.indexOf("qcloud.com")!=-1?ga("linker:autoLink",["cloud.tencent.com"]):ga("linker:autoLink",["qcloud.com"]),ga("send","pageview")))},X7kb:function(e,t,n){function o(e){var t={},n=window.performance.timing.navigationStart;for(var o in i.eventFlag)window.performance.timing[o]&&(t[i.eventFlag[o]]=window.performance.timing[o]-n);var r=a.getPageType(location.pathname);return t.flag1=e.domainFlag[0],t.flag2=e.domainFlag[1],t.flag3=e.pageFlag[r],t}function r(){if(window.performance&&window.performance.timing){var e=i.domainConfig[location.host];if(e){var t={appid:i.appid,platform:a.getPlatform(),speedparams:o(e)},n=a.appendEncodedData(location.protocol+"//report.huatuo.qq.com/report.cgi",t);a.insertOneTimeImg(n)}}}var i=n("QTeM"),a=n("ZyNu");"complete"===document.readyState?r():window.addEventListener("load",r)},QTeM:function(e,t){t.appid=20373,t.eventFlag={fetchStart:5,domainLookupStart:6,domainLookupEnd:7,connectStart:8,connectEnd:9,requestStart:10,responseStart:11,responseEnd:12},t.domainConfig={"cloud.tencent.com":{domainFlag:[21970,1],pageFlag:{product:2,home:3,solution:4,document:5,customer:6,login:7,others:8}},"intl.cloud.tencent.com":{domainFlag:[21971,1],pageFlag:{product:2,home:3,solution:4,document:5,others:6,login:7}}}},ZyNu:function(e,t){t.getPlatform=function(){var e=(navigator.userAgent||"").toLowerCase();if(!e)return"";var t=/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i,n=/ip(hone|ad|od)/i;return t.test(e)?e.indexOf("android")>-1?"android":n.test(e)?"ios":"":"pc"},t.appendEncodedData=function(e,t){var n=[];for(var o in t)if("object"!=typeof t[o])n.push(o+"="+encodeURIComponent(t[o]));else{var r=[];for(var i in t[o])r.push(i+"="+encodeURIComponent(t[o][i]));n.push(o+"="+encodeURIComponent(r.join("&")))}return e+"?"+n.join("&")},t.getPageType=function(e){var t={product:/^\/product\/*/,solution:/^\/solution\/*/,document:/^\/document\/*/,customer:/^\/customer\/*/,login:/^\/login\/*/,home:/^\/(home)?$/};for(var n in t)if(t[n].test(e))return n;return"others"},t.insertOneTimeImg=function(e){var t=document.createElement("img");t.onload=t.onerror=function(){t=t.onload=t.onerror=null},t.src=e}}});