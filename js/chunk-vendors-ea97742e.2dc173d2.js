(globalThis["webpackChunkAcademinha"]=globalThis["webpackChunkAcademinha"]||[]).push([[999],{2809:(t,e,n)=>{"use strict";n.d(e,{Z:()=>Ee});n(1703);function r(t,e){for(var n in e)t[n]=e[n];return t}var o=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,u=function(t){return encodeURIComponent(t).replace(o,i).replace(a,",")};function s(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var r,o=n||p;try{r=o(t||"")}catch(u){r={}}for(var i in e){var a=e[i];r[i]=Array.isArray(a)?a.map(f):f(a)}return r}var f=function(t){return null==t||"object"===typeof t?t:String(t)};function p(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=s(n.shift()),o=n.length>0?s(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]})),e):e}function h(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return u(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(u(e)):r.push(u(e)+"="+u(t)))})),r.join("&")}return u(e)+"="+u(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var l=/\/?$/;function d(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=v(i)}catch(u){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:g(e,o),matched:t?m(t):[]};return n&&(a.redirectedFrom=g(n,o)),Object.freeze(a)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=v(t[n]);return e}return t}var y=d(null,{path:"/"});function m(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function g(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||h;return(n||"/")+i(r)+o}function w(t,e,n){return e===y?t===e:!!e&&(t.path&&e.path?t.path.replace(l,"")===e.path.replace(l,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,o){var i=t[n],a=r[o];if(a!==n)return!1;var u=e[n];return null==i||null==u?i===u:"object"===typeof i&&"object"===typeof u?b(i,u):String(i)===String(u)}))}function k(t,e){return 0===t.path.replace(l,"/").indexOf(e.path.replace(l,"/"))&&(!e.hash||t.hash===e.hash)&&x(t.query,e.query)}function x(t,e){for(var n in e)if(!(n in t))return!1;return!0}function R(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var o=n.instances[r],i=n.enteredCbs[r];if(o&&i){delete n.enteredCbs[r];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;var u=i.$createElement,s=n.name,c=i.$route,f=i._routerViewCache||(i._routerViewCache={}),p=0,h=!1;while(i&&i._routerRoot!==i){var l=i.$vnode?i.$vnode.data:{};l.routerView&&p++,l.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(a.routerViewDepth=p,h){var d=f[s],v=d&&d.component;return v?(d.configProps&&A(v,a,d.route,d.configProps),u(v,a,o)):u()}var y=c.matched[p],m=y&&y.components[s];if(!y||!m)return f[s]=null,u();f[s]={component:m},a.registerRouteInstance=function(t,e){var n=y.instances[s];(e&&n!==t||!e&&n===t)&&(y.instances[s]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[s]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[s]&&(y.instances[s]=t.componentInstance),R(c)};var g=y.props&&y.props[s];return g&&(r(f[s],{route:c,configProps:g}),A(m,a,c,g)),u(m,a,o)}};function A(t,e,n,o){var i=e.props=C(n,o);if(i){i=e.props=r({},i);var a=e.attrs=e.attrs||{};for(var u in i)t.props&&u in t.props||(a[u]=i[u],delete i[u])}}function C(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function O(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function _(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function j(t){return t.replace(/\/+/g,"/")}var T=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},S=Q,P=U,L=I,$=N,q=X,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function U(t,e){var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var s=n[0],c=n[1],f=n.index;if(a+=t.slice(i,f),i=f+s.length,c)a+=c[1];else{var p=t[i],h=n[2],l=n[3],d=n[4],v=n[5],y=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=p&&p!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,k=n[2]||u,x=d||v;r.push({name:l||o++,prefix:h||"",delimiter:k,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:x?F(x):m?".*":"[^"+z(k)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function I(t,e){return N(U(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function N(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",D(e)));return function(e,r){for(var o="",i=e||{},a=r||{},u=a.pretty?V:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!==typeof c){var f,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(T(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!n[s].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===h?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?B(p):u(p),!n[s].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}function z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function F(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function D(t){return t&&t.sensitive?"":"i"}function Z(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function K(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(Q(t[o],e,n).source);var i=new RegExp("(?:"+r.join("|")+")",D(n));return H(i,e)}function J(t,e,n){return X(U(t,n),e,n)}function X(t,e,n){T(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"===typeof u)i+=z(u);else{var s=z(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")",i+=c}}var f=z(n.delimiter||"/"),p=i.slice(-f.length)===f;return r||(i=(p?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":r&&p?"":"(?="+f+"|$)",H(new RegExp("^"+i,D(n)),e)}function Q(t,e,n){return T(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?Z(t,e):T(t)?K(t,e,n):J(t,e,n)}S.parse=P,S.compile=L,S.tokensToFunction=$,S.tokensToRegExp=q;var Y=Object.create(null);function W(t,e,n){e=e||{};try{var r=Y[t]||(Y[t]=S.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(o){return""}finally{delete e[0]}}function G(t,e,n,o){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=r({},t);var a=i.params;return a&&"object"===typeof a&&(i.params=r({},a)),i}if(!i.path&&i.params&&e){i=r({},i),i._normalized=!0;var u=r(r({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;i.path=W(s,u,"path "+e.path)}else 0;return i}var f=_(i.path||""),p=e&&e.path||"/",h=f.path?O(f.path,p,n||i.append):p,l=c(f.query,i.query,o&&o.options.parseQuery),d=i.hash||f.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:h,query:l,hash:d}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},ot={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,o=this.$route,i=n.resolve(this.to,o,this.append),a=i.location,u=i.route,s=i.href,c={},f=n.options.linkActiveClass,p=n.options.linkExactActiveClass,h=null==f?"router-link-active":f,l=null==p?"router-link-exact-active":p,v=null==this.activeClass?h:this.activeClass,y=null==this.exactActiveClass?l:this.exactActiveClass,m=u.redirectedFrom?d(null,G(u.redirectedFrom),null,n):u;c[y]=w(o,m,this.exactPath),c[v]=this.exact||this.exactPath?c[y]:k(o,m);var g=c[y]?this.ariaCurrentValue:null,b=function(t){it(t)&&(e.replace?n.replace(a,rt):n.push(a,rt))},x={click:it};Array.isArray(this.event)?this.event.forEach((function(t){x[t]=b})):x[this.event]=b;var R={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:u,navigate:b,isActive:c[v],isExactActive:c[y]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)R.on=x,R.attrs={href:s,"aria-current":g};else{var A=at(this.$slots.default);if(A){A.isStatic=!1;var C=A.data=r({},A.data);for(var O in C.on=C.on||{},C.on){var _=C.on[O];O in x&&(C.on[O]=Array.isArray(_)?_:[_])}for(var j in x)j in C.on?C.on[j].push(x[j]):C.on[j]=b;var T=A.data.attrs=r({},A.data.attrs);T.href=s,T["aria-current"]=g}else R.on=x}return t(this.tag,R,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ut(t){if(!ut.installed||tt!==t){ut.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",E),t.component("RouterLink",ot);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var st="undefined"!==typeof window;function ct(t,e,n,r,o){var i=e||[],a=n||Object.create(null),u=r||Object.create(null);t.forEach((function(t){ft(i,a,u,t,o)}));for(var s=0,c=i.length;s<c;s++)"*"===i[s]&&(i.push(i.splice(s,1)[0]),c--,s--);return{pathList:i,pathMap:a,nameMap:u}}function ft(t,e,n,r,o,i){var a=r.path,u=r.name;var s=r.pathToRegexpOptions||{},c=ht(a,o,s.strict);"boolean"===typeof r.caseSensitive&&(s.sensitive=r.caseSensitive);var f={path:c,regex:pt(c,s),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:u,parent:o,matchAs:i,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var o=i?j(i+"/"+r.path):void 0;ft(t,e,n,r,f,o)})),e[f.path]||(t.push(f.path),e[f.path]=f),void 0!==r.alias)for(var p=Array.isArray(r.alias)?r.alias:[r.alias],h=0;h<p.length;++h){var l=p[h];0;var d={path:l,children:r.children};ft(t,e,n,d,o,f.path||"/")}u&&(n[u]||(n[u]=f))}function pt(t,e){var n=S(t,[],e);return n}function ht(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:j(e.path+"/"+t)}function lt(t,e){var n=ct(t),r=n.pathList,o=n.pathMap,i=n.nameMap;function a(t){ct(t,r,o,i)}function u(t,e){var n="object"!==typeof t?i[t]:void 0;ct([e||t],r,o,i,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),r,o,i,n)}function s(){return r.map((function(t){return o[t]}))}function c(t,n,a){var u=G(t,n,!1,e),s=u.name;if(s){var c=i[s];if(!c)return h(null,u);var f=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof u.params&&(u.params={}),n&&"object"===typeof n.params)for(var p in n.params)!(p in u.params)&&f.indexOf(p)>-1&&(u.params[p]=n.params[p]);return u.path=W(c.path,u.params,'named route "'+s+'"'),h(c,u,a)}if(u.path){u.params={};for(var l=0;l<r.length;l++){var d=r[l],v=o[d];if(dt(v.regex,u.path,u.params))return h(v,u,a)}}return h(null,u)}function f(t,n){var r=t.redirect,o="function"===typeof r?r(d(t,n,null,e)):r;if("string"===typeof o&&(o={path:o}),!o||"object"!==typeof o)return h(null,n);var a=o,u=a.name,s=a.path,f=n.query,p=n.hash,l=n.params;if(f=a.hasOwnProperty("query")?a.query:f,p=a.hasOwnProperty("hash")?a.hash:p,l=a.hasOwnProperty("params")?a.params:l,u){i[u];return c({_normalized:!0,name:u,query:f,hash:p,params:l},void 0,n)}if(s){var v=vt(s,t),y=W(v,l,'redirect route with path "'+v+'"');return c({_normalized:!0,path:y,query:f,hash:p},void 0,n)}return h(null,n)}function p(t,e,n){var r=W(n,e.params,'aliased route with path "'+n+'"'),o=c({_normalized:!0,path:r});if(o){var i=o.matched,a=i[i.length-1];return e.params=o.params,h(a,e)}return h(null,e)}function h(t,n,r){return t&&t.redirect?f(t,r||n):t&&t.matchAs?p(t,n,t.matchAs):d(t,n,r,e)}return{match:c,addRoute:u,getRoutes:s,addRoutes:a}}function dt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1];a&&(n[a.name||"pathMatch"]="string"===typeof r[o]?s(r[o]):r[o])}return!0}function vt(t,e){return O(t,e.parent?e.parent.path:"/",!0)}var yt=st&&window.performance&&window.performance.now?window.performance:Date;function mt(){return yt.now().toFixed(3)}var gt=mt();function wt(){return gt}function bt(t){return gt=t}var kt=Object.create(null);function xt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",At),function(){window.removeEventListener("popstate",At)}}function Rt(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=Ct(),a=o.call(t,e,n,r?i:null);a&&("function"===typeof a.then?a.then((function(t){Lt(t,i)})).catch((function(t){0})):Lt(a,i))}))}}function Et(){var t=wt();t&&(kt[t]={x:window.pageXOffset,y:window.pageYOffset})}function At(t){Et(),t.state&&t.state.key&&bt(t.state.key)}function Ct(){var t=wt();if(t)return kt[t]}function Ot(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-r.left-e.x,y:o.top-r.top-e.y}}function _t(t){return St(t.x)||St(t.y)}function jt(t){return{x:St(t.x)?t.x:window.pageXOffset,y:St(t.y)?t.y:window.pageYOffset}}function Tt(t){return{x:St(t.x)?t.x:0,y:St(t.y)?t.y:0}}function St(t){return"number"===typeof t}var Pt=/^#\d/;function Lt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var o=t.offset&&"object"===typeof t.offset?t.offset:{};o=Tt(o),e=Ot(r,o)}else _t(t)&&(e=jt(t))}else n&&_t(t)&&(e=jt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var $t=st&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function qt(t,e){Et();var n=window.history;try{if(e){var o=r({},n.state);o.key=wt(),n.replaceState(o,"",t)}else n.pushState({key:bt(mt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function Mt(t){qt(t,!0)}function Ut(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],(function(){r(o+1)})):r(o+1)};r(0)}var It={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return Ft(t,e,It.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Dt(e)+'" via a navigation guard.')}function Bt(t,e){var n=Ft(t,e,It.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Nt(t,e){return Ft(t,e,It.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function zt(t,e){return Ft(t,e,It.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ft(t,e,n,r){var o=new Error(r);return o._isRouter=!0,o.from=t,o.to=e,o.type=n,o}var Ht=["params","query","hash"];function Dt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Zt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Zt(t)&&t._isRouter&&(null==e||t.type===e)}function Jt(t){return function(e,n,r){var o=!1,i=0,a=null;Xt(t,(function(t,e,n,u){if("function"===typeof t&&void 0===t.cid){o=!0,i++;var s,c=Gt((function(e){Wt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[u]=e,i--,i<=0&&r()})),f=Gt((function(t){var e="Failed to resolve async component "+u+": "+t;a||(a=Zt(t)?t:new Error(e),r(a))}));try{s=t(c,f)}catch(h){f(h)}if(s)if("function"===typeof s.then)s.then(c,f);else{var p=s.component;p&&"function"===typeof p.then&&p.then(c,f)}}})),o||r()}}function Xt(t,e){return Qt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Qt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Wt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Gt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=y,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(st){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var o=Xt(t,(function(t,r,o,i){var a=oe(t,e);if(a)return Array.isArray(a)?a.map((function(t){return n(t,r,o,i)})):n(a,r,o,i)}));return Qt(r?o.reverse():o)}function oe(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function ie(t){return re(t,"beforeRouteLeave",ue,!0)}function ae(t){return re(t,"beforeRouteUpdate",ue)}function ue(t,e){if(e)return function(){return t.apply(e,arguments)}}function se(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ce(t,n,r)}))}function ce(t,e,n){return function(r,o,i){return t(r,o,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),i(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,o=this;try{r=this.router.match(t,this.current)}catch(a){throw this.errorCbs.forEach((function(t){t(a)})),a}var i=this.current;this.confirmTransition(r,(function(){o.updateRoute(r),e&&e(r),o.ensureURL(),o.router.afterHooks.forEach((function(t){t&&t(r,i)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!o.ready&&(Kt(t,It.redirected)&&i===y||(o.ready=!0,o.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,o=this.current;this.pending=t;var i=function(t){!Kt(t)&&Zt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},a=t.matched.length-1,u=o.matched.length-1;if(w(t,o)&&a===u&&t.matched[a]===o.matched[u])return this.ensureURL(),t.hash&&Rt(this.router,o,t,!1),i(Bt(o,t));var s=ne(this.current.matched,t.matched),c=s.updated,f=s.deactivated,p=s.activated,h=[].concat(ie(f),this.router.beforeHooks,ae(c),p.map((function(t){return t.beforeEnter})),Jt(p)),l=function(e,n){if(r.pending!==t)return i(Nt(o,t));try{e(t,o,(function(e){!1===e?(r.ensureURL(!0),i(zt(o,t))):Zt(e)?(r.ensureURL(!0),i(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(i(Vt(o,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(a){i(a)}};Ut(h,l,(function(){var n=se(p),a=n.concat(r.router.resolveHooks);Ut(a,l,(function(){if(r.pending!==t)return i(Nt(o,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){R(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=y,this.pending=null};var fe=function(t){function e(e,n){t.call(this,e,n),this._startLocation=pe(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=$t&&n;r&&this.listeners.push(xt());var o=function(){var n=t.current,o=pe(t.base);t.current===y&&o===t._startLocation||t.transitionTo(o,(function(t){r&&Rt(e,t,n,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,(function(t){qt(j(r.base+t.fullPath)),Rt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,(function(t){Mt(j(r.base+t.fullPath)),Rt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(pe(this.base)!==this.current.fullPath){var e=j(this.base+this.current.fullPath);t?qt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return pe(this.base)},e}(te);function pe(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(j(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var he=function(t){function e(e,n,r){t.call(this,e,n),r&&le(this.base)||de()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=$t&&n;r&&this.listeners.push(xt());var o=function(){var e=t.current;de()&&t.transitionTo(ve(),(function(n){r&&Rt(t.router,n,e,!0),$t||ge(n.fullPath)}))},i=$t?"popstate":"hashchange";window.addEventListener(i,o),this.listeners.push((function(){window.removeEventListener(i,o)}))}},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,(function(t){me(t.fullPath),Rt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,(function(t){ge(t.fullPath),Rt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ve()!==e&&(t?me(e):ge(e))},e.prototype.getCurrentLocation=function(){return ve()},e}(te);function le(t){var e=pe(t);if(!/^\/#/.test(e))return window.location.replace(j(t+"/#"+e)),!0}function de(){var t=ve();return"/"===t.charAt(0)||(ge("/"+t),!1)}function ve(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ye(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function me(t){$t?qt(ye(t)):window.location.hash=t}function ge(t){$t?Mt(ye(t)):window.location.replace(ye(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,It.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=lt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!$t&&!1!==t.fallback,this.fallback&&(e="hash"),st||(e="abstract"),this.mode=e,e){case"history":this.history=new fe(this,t.base);break;case"hash":this.history=new he(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},ke={currentRoute:{configurable:!0}};function xe(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Re(t,e,n){var r="hash"===n?"#"+e:e;return t?j(t+"/"+r):r}be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},ke.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof fe||n instanceof he){var r=function(t){var r=n.current,o=e.options.scrollBehavior,i=$t&&o;i&&"fullPath"in t&&Rt(e,t,r,!1)},o=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),o,o)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return xe(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return xe(this.resolveHooks,t)},be.prototype.afterEach=function(t){return xe(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=G(t,e,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=Re(a,i,this.mode);return{location:r,route:o,href:u,normalizedTo:r,resolved:o}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,ke),be.install=ut,be.version="3.5.3",be.isNavigationFailure=Kt,be.NavigationFailureType=It,be.START_LOCATION=y,st&&window.Vue&&window.Vue.use(be);const Ee=be},8161:function(t,e,n){n(1703),function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var o=n(2),i=n(0),a=n.n(i);e.a=function(t,e){var i=e.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:a.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var a=t.selectionEnd,u=t.value[a-1];for(t.value=n.i(o.a)(t.value,i.mask,!0,i.tokens);a<t.value.length&&t.value.charAt(a-1)!==u;)a++;t===document.activeElement&&(t.setSelectionRange(a,a),setTimeout((function(){t.setSelectionRange(a,a)}),0)),t.dispatchEvent(r("input"))}};var s=n.i(o.a)(t.value,i.mask,!0,i.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),o=n(5);e.a=function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3];return Array.isArray(e)?n.i(o.a)(r.a,e,a)(t,e,i,a):n.i(r.a)(t,e,i,a)}},function(t,e,n){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",a.a)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n.n(o),a=n(1),u=n(7),s=n.n(u);n.d(e,"TheMask",(function(){return s.a})),n.d(e,"mask",(function(){return a.a})),n.d(e,"tokens",(function(){return i.a})),n.d(e,"version",(function(){return c}));var c="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(0),i=n.n(o),a=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return i.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=n.i(a.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function r(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(r,o){for(var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;a<e.length;){var u=e[a];a++;var s=e[a];if(!(s&&t(r,s,!0,n).length>u.length))return t(r,u,i,n)}return""}}e.a=r},function(t,e,n){"use strict";function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var o=0,i=0,a="";o<e.length&&i<t.length;){var u=e[o],s=r[u],c=t[i];s&&!s.escape?(s.pattern.test(c)&&(a+=s.transform?s.transform(c):c,o++),i++):(s&&s.escape&&(o++,u=e[o]),n&&(a+=u),c===u&&i++,o++)}for(var f="";o<e.length&&n;){u=e[o];if(r[u]){f="";break}f+=u,o++}return a+f}e.a=r},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:o,exports:i,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])}))}}]);