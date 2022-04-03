"use strict";(self["webpackChunkAcademinha"]=self["webpackChunkAcademinha"]||[]).push([[727],{4903:(t,e,r)=>{function n(t,e){for(var r in e)t[r]=e[r];return t}r.d(e,{Z:()=>Ee});var o=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,u=function(t){return encodeURIComponent(t).replace(o,i).replace(a,",")};function s(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,r){void 0===e&&(e={});var n,o=r||f;try{n=o(t||"")}catch(u){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(p):p(a)}return n}var p=function(t){return null==t||"object"===typeof t?t:String(t)};function f(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=s(r.shift()),o=r.length>0?s(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function h(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return u(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(u(e)):n.push(u(e)+"="+u(t)))})),n.join("&")}return u(e)+"="+u(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var l=/\/?$/;function d(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=v(i)}catch(u){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:g(e,o),matched:t?m(t):[]};return r&&(a.redirectedFrom=g(r,o)),Object.freeze(a)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"===typeof t){var e={};for(var r in t)e[r]=v(t[r]);return e}return t}var y=d(null,{path:"/"});function m(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function g(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||h;return(r||"/")+i(n)+o}function w(t,e,r){return e===y?t===e:!!e&&(t.path&&e.path?t.path.replace(l,"")===e.path.replace(l,"")&&(r||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(r||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),n=Object.keys(e).sort();return r.length===n.length&&r.every((function(r,o){var i=t[r],a=n[o];if(a!==r)return!1;var u=e[r];return null==i||null==u?i===u:"object"===typeof i&&"object"===typeof u?b(i,u):String(i)===String(u)}))}function x(t,e){return 0===t.path.replace(l,"/").indexOf(e.path.replace(l,"/"))&&(!e.hash||t.hash===e.hash)&&k(t.query,e.query)}function k(t,e){for(var r in e)if(!(r in t))return!1;return!0}function R(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var o=r.instances[n],i=r.enteredCbs[n];if(o&&i){delete r.enteredCbs[n];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;var u=i.$createElement,s=r.name,c=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;while(i&&i._routerRoot!==i){var l=i.$vnode?i.$vnode.data:{};l.routerView&&f++,l.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(a.routerViewDepth=f,h){var d=p[s],v=d&&d.component;return v?(d.configProps&&C(v,a,d.route,d.configProps),u(v,a,o)):u()}var y=c.matched[f],m=y&&y.components[s];if(!y||!m)return p[s]=null,u();p[s]={component:m},a.registerRouteInstance=function(t,e){var r=y.instances[s];(e&&r!==t||!e&&r===t)&&(y.instances[s]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[s]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[s]&&(y.instances[s]=t.componentInstance),R(c)};var g=y.props&&y.props[s];return g&&(n(p[s],{route:c,configProps:g}),C(m,a,c,g)),u(m,a,o)}};function C(t,e,r,o){var i=e.props=A(r,o);if(i){i=e.props=n({},i);var a=e.attrs=e.attrs||{};for(var u in i)t.props&&u in t.props||(a[u]=i[u],delete i[u])}}function A(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function O(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function _(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function j(t){return t.replace(/\/+/g,"/")}var S=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},T=Y,P=B,L=I,$=H,q=X,U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function B(t,e){var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";while(null!=(r=U.exec(t))){var s=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?F(k):m?".*":"[^"+N(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function I(t,e){return H(B(t,e),e)}function M(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function H(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"===typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",D(e)));return function(e,n){for(var o="",i=e||{},a=n||{},u=a.pretty?M:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!==typeof c){var p,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(S(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!r[s].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?V(f):u(f),!r[s].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function N(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function F(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function D(t){return t&&t.sensitive?"":"i"}function K(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function J(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(Y(t[o],e,r).source);var i=new RegExp("(?:"+n.join("|")+")",D(r));return z(i,e)}function Q(t,e,r){return X(B(t,r),e,r)}function X(t,e,r){S(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"===typeof u)i+=N(u);else{var s=N(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")",i+=c}}var p=N(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",z(new RegExp("^"+i,D(r)),e)}function Y(t,e,r){return S(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?K(t,e):S(t)?J(t,e,r):Q(t,e,r)}T.parse=P,T.compile=L,T.tokensToFunction=$,T.tokensToRegExp=q;var W=Object.create(null);function Z(t,e,r){e=e||{};try{var n=W[t]||(W[t]=T.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(o){return""}finally{delete e[0]}}function G(t,e,r,o){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=n({},t);var a=i.params;return a&&"object"===typeof a&&(i.params=n({},a)),i}if(!i.path&&i.params&&e){i=n({},i),i._normalized=!0;var u=n(n({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;i.path=Z(s,u,"path "+e.path)}else 0;return i}var p=_(i.path||""),f=e&&e.path||"/",h=p.path?O(p.path,f,r||i.append):f,l=c(p.query,i.query,o&&o.options.parseQuery),d=i.hash||p.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:h,query:l,hash:d}}var tt,et=[String,Object],rt=[String,Array],nt=function(){},ot={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,r=this.$router,o=this.$route,i=r.resolve(this.to,o,this.append),a=i.location,u=i.route,s=i.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,v=null==this.activeClass?h:this.activeClass,y=null==this.exactActiveClass?l:this.exactActiveClass,m=u.redirectedFrom?d(null,G(u.redirectedFrom),null,r):u;c[y]=w(o,m,this.exactPath),c[v]=this.exact||this.exactPath?c[y]:x(o,m);var g=c[y]?this.ariaCurrentValue:null,b=function(t){it(t)&&(e.replace?r.replace(a,nt):r.push(a,nt))},k={click:it};Array.isArray(this.event)?this.event.forEach((function(t){k[t]=b})):k[this.event]=b;var R={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:u,navigate:b,isActive:c[v],isExactActive:c[y]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)R.on=k,R.attrs={href:s,"aria-current":g};else{var C=at(this.$slots.default);if(C){C.isStatic=!1;var A=C.data=n({},C.data);for(var O in A.on=A.on||{},A.on){var _=A.on[O];O in k&&(A.on[O]=Array.isArray(_)?_:[_])}for(var j in k)j in A.on?A.on[j].push(k[j]):A.on[j]=b;var S=C.data.attrs=n({},C.data.attrs);S.href=s,S["aria-current"]=g}else R.on=k}return t(this.tag,R,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ut(t){if(!ut.installed||tt!==t){ut.installed=!0,tt=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",E),t.component("RouterLink",ot);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var st="undefined"!==typeof window;function ct(t,e,r,n,o){var i=e||[],a=r||Object.create(null),u=n||Object.create(null);t.forEach((function(t){pt(i,a,u,t,o)}));for(var s=0,c=i.length;s<c;s++)"*"===i[s]&&(i.push(i.splice(s,1)[0]),c--,s--);return{pathList:i,pathMap:a,nameMap:u}}function pt(t,e,r,n,o,i){var a=n.path,u=n.name;var s=n.pathToRegexpOptions||{},c=ht(a,o,s.strict);"boolean"===typeof n.caseSensitive&&(s.sensitive=n.caseSensitive);var p={path:c,regex:ft(c,s),components:n.components||{default:n.component},alias:n.alias?"string"===typeof n.alias?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach((function(n){var o=i?j(i+"/"+n.path):void 0;pt(t,e,r,n,p,o)})),e[p.path]||(t.push(p.path),e[p.path]=p),void 0!==n.alias)for(var f=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<f.length;++h){var l=f[h];0;var d={path:l,children:n.children};pt(t,e,r,d,o,p.path||"/")}u&&(r[u]||(r[u]=p))}function ft(t,e){var r=T(t,[],e);return r}function ht(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:j(e.path+"/"+t)}function lt(t,e){var r=ct(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t){ct(t,n,o,i)}function u(t,e){var r="object"!==typeof t?i[t]:void 0;ct([e||t],n,o,i,r),r&&r.alias.length&&ct(r.alias.map((function(t){return{path:t,children:[e]}})),n,o,i,r)}function s(){return n.map((function(t){return o[t]}))}function c(t,r,a){var u=G(t,r,!1,e),s=u.name;if(s){var c=i[s];if(!c)return h(null,u);var p=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof u.params&&(u.params={}),r&&"object"===typeof r.params)for(var f in r.params)!(f in u.params)&&p.indexOf(f)>-1&&(u.params[f]=r.params[f]);return u.path=Z(c.path,u.params,'named route "'+s+'"'),h(c,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(dt(v.regex,u.path,u.params))return h(v,u,a)}}return h(null,u)}function p(t,r){var n=t.redirect,o="function"===typeof n?n(d(t,r,null,e)):n;if("string"===typeof o&&(o={path:o}),!o||"object"!==typeof o)return h(null,r);var a=o,u=a.name,s=a.path,p=r.query,f=r.hash,l=r.params;if(p=a.hasOwnProperty("query")?a.query:p,f=a.hasOwnProperty("hash")?a.hash:f,l=a.hasOwnProperty("params")?a.params:l,u){i[u];return c({_normalized:!0,name:u,query:p,hash:f,params:l},void 0,r)}if(s){var v=vt(s,t),y=Z(v,l,'redirect route with path "'+v+'"');return c({_normalized:!0,path:y,query:p,hash:f},void 0,r)}return h(null,r)}function f(t,e,r){var n=Z(r,e.params,'aliased route with path "'+r+'"'),o=c({_normalized:!0,path:n});if(o){var i=o.matched,a=i[i.length-1];return e.params=o.params,h(a,e)}return h(null,e)}function h(t,r,n){return t&&t.redirect?p(t,n||r):t&&t.matchAs?f(t,r,t.matchAs):d(t,r,n,e)}return{match:c,addRoute:u,getRoutes:s,addRoutes:a}}function dt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1];a&&(r[a.name||"pathMatch"]="string"===typeof n[o]?s(n[o]):n[o])}return!0}function vt(t,e){return O(t,e.parent?e.parent.path:"/",!0)}var yt=st&&window.performance&&window.performance.now?window.performance:Date;function mt(){return yt.now().toFixed(3)}var gt=mt();function wt(){return gt}function bt(t){return gt=t}var xt=Object.create(null);function kt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=wt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",Ct),function(){window.removeEventListener("popstate",Ct)}}function Rt(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=At(),a=o.call(t,e,r,n?i:null);a&&("function"===typeof a.then?a.then((function(t){Lt(t,i)})).catch((function(t){0})):Lt(a,i))}))}}function Et(){var t=wt();t&&(xt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ct(t){Et(),t.state&&t.state.key&&bt(t.state.key)}function At(){var t=wt();if(t)return xt[t]}function Ot(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function _t(t){return Tt(t.x)||Tt(t.y)}function jt(t){return{x:Tt(t.x)?t.x:window.pageXOffset,y:Tt(t.y)?t.y:window.pageYOffset}}function St(t){return{x:Tt(t.x)?t.x:0,y:Tt(t.y)?t.y:0}}function Tt(t){return"number"===typeof t}var Pt=/^#\d/;function Lt(t,e){var r="object"===typeof t;if(r&&"string"===typeof t.selector){var n=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var o=t.offset&&"object"===typeof t.offset?t.offset:{};o=St(o),e=Ot(n,o)}else _t(t)&&(e=jt(t))}else r&&_t(t)&&(e=jt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var $t=st&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function qt(t,e){Et();var r=window.history;try{if(e){var o=n({},r.state);o.key=wt(),r.replaceState(o,"",t)}else r.pushState({key:bt(mt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function Ut(t){qt(t,!0)}function Bt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var It={redirected:2,aborted:4,cancelled:8,duplicated:16};function Mt(t,e){return Ft(t,e,It.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Dt(e)+'" via a navigation guard.')}function Vt(t,e){var r=Ft(t,e,It.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function Ht(t,e){return Ft(t,e,It.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Nt(t,e){return Ft(t,e,It.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ft(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var zt=["params","query","hash"];function Dt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}function Kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Jt(t,e){return Kt(t)&&t._isRouter&&(null==e||t.type===e)}function Qt(t){return function(e,r,n){var o=!1,i=0,a=null;Xt(t,(function(t,e,r,u){if("function"===typeof t&&void 0===t.cid){o=!0,i++;var s,c=Gt((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),r.components[u]=e,i--,i<=0&&n()})),p=Gt((function(t){var e="Failed to resolve async component "+u+": "+t;a||(a=Kt(t)?t:new Error(e),n(a))}));try{s=t(c,p)}catch(h){p(h)}if(s)if("function"===typeof s.then)s.then(c,p);else{var f=s.component;f&&"function"===typeof f.then&&f.then(c,p)}}})),o||n()}}function Xt(t,e){return Yt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Yt(t){return Array.prototype.concat.apply([],t)}var Wt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Wt&&"Module"===t[Symbol.toStringTag]}function Gt(t){var e=!1;return function(){var r=[],n=arguments.length;while(n--)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=y,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(st){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n;r++)if(t[r]!==e[r])break;return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function ne(t,e,r,n){var o=Xt(t,(function(t,n,o,i){var a=oe(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Yt(n?o.reverse():o)}function oe(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function ie(t){return ne(t,"beforeRouteLeave",ue,!0)}function ae(t){return ne(t,"beforeRouteUpdate",ue)}function ue(t,e){if(e)return function(){return t.apply(e,arguments)}}function se(t){return ne(t,"beforeRouteEnter",(function(t,e,r,n){return ce(t,r,n)}))}function ce(t,e,r){return function(n,o,i){return t(n,o,(function(t){"function"===typeof t&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(t)),i(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(a){throw this.errorCbs.forEach((function(t){t(a)})),a}var i=this.current;this.confirmTransition(n,(function(){o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(t){t&&t(n,i)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(Jt(t,It.redirected)&&i===y||(o.ready=!0,o.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,r){var n=this,o=this.current;this.pending=t;var i=function(t){!Jt(t)&&Kt(t)&&(n.errorCbs.length?n.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},a=t.matched.length-1,u=o.matched.length-1;if(w(t,o)&&a===u&&t.matched[a]===o.matched[u])return this.ensureURL(),t.hash&&Rt(this.router,o,t,!1),i(Vt(o,t));var s=re(this.current.matched,t.matched),c=s.updated,p=s.deactivated,f=s.activated,h=[].concat(ie(p),this.router.beforeHooks,ae(c),f.map((function(t){return t.beforeEnter})),Qt(f)),l=function(e,r){if(n.pending!==t)return i(Ht(o,t));try{e(t,o,(function(e){!1===e?(n.ensureURL(!0),i(Nt(o,t))):Kt(e)?(n.ensureURL(!0),i(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(i(Mt(o,t)),"object"===typeof e&&e.replace?n.replace(e):n.push(e)):r(e)}))}catch(a){i(a)}};Bt(h,l,(function(){var r=se(f),a=r.concat(n.router.resolveHooks);Bt(a,l,(function(){if(n.pending!==t)return i(Ht(o,t));n.pending=null,e(t),n.router.app&&n.router.app.$nextTick((function(){R(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=y,this.pending=null};var pe=function(t){function e(e,r){t.call(this,e,r),this._startLocation=fe(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=$t&&r;n&&this.listeners.push(kt());var o=function(){var r=t.current,o=fe(t.base);t.current===y&&o===t._startLocation||t.transitionTo(o,(function(t){n&&Rt(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){qt(j(n.base+t.fullPath)),Rt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){Ut(j(n.base+t.fullPath)),Rt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(fe(this.base)!==this.current.fullPath){var e=j(this.base+this.current.fullPath);t?qt(e):Ut(e)}},e.prototype.getCurrentLocation=function(){return fe(this.base)},e}(te);function fe(t){var e=window.location.pathname,r=e.toLowerCase(),n=t.toLowerCase();return!t||r!==n&&0!==r.indexOf(j(n+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var he=function(t){function e(e,r,n){t.call(this,e,r),n&&le(this.base)||de()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=$t&&r;n&&this.listeners.push(kt());var o=function(){var e=t.current;de()&&t.transitionTo(ve(),(function(r){n&&Rt(t.router,r,e,!0),$t||ge(r.fullPath)}))},i=$t?"popstate":"hashchange";window.addEventListener(i,o),this.listeners.push((function(){window.removeEventListener(i,o)}))}},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){me(t.fullPath),Rt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){ge(t.fullPath),Rt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ve()!==e&&(t?me(e):ge(e))},e.prototype.getCurrentLocation=function(){return ve()},e}(te);function le(t){var e=fe(t);if(!/^\/#/.test(e))return window.location.replace(j(t+"/#"+e)),!0}function de(){var t=ve();return"/"===t.charAt(0)||(ge("/"+t),!1)}function ve(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ye(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;return n+"#"+t}function me(t){$t?qt(ye(t)):window.location.hash=t}function ge(t){$t?Ut(ye(t)):window.location.replace(ye(t))}var we=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){var t=e.current;e.index=r,e.updateRoute(n),e.router.afterHooks.forEach((function(e){e&&e(n,t)}))}),(function(t){Jt(t,It.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=lt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!$t&&!1!==t.fallback,this.fallback&&(e="hash"),st||(e="abstract"),this.mode=e,e){case"history":this.history=new pe(this,t.base);break;case"hash":this.history=new he(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},xe={currentRoute:{configurable:!0}};function ke(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Re(t,e,r){var n="hash"===r?"#"+e:e;return t?j(t+"/"+n):n}be.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},xe.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var r=this.history;if(r instanceof pe||r instanceof he){var n=function(t){var n=r.current,o=e.options.scrollBehavior,i=$t&&o;i&&"fullPath"in t&&Rt(e,t,n,!1)},o=function(t){r.setupListeners(),n(t)};r.transitionTo(r.getCurrentLocation(),o,o)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return ke(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return ke(this.resolveHooks,t)},be.prototype.afterEach=function(t){return ke(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},be.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,r){e=e||this.history.current;var n=G(t,e,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=Re(a,i,this.mode);return{location:n,route:o,href:u,normalizedTo:n,resolved:o}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,xe),be.install=ut,be.version="3.5.3",be.isNavigationFailure=Jt,be.NavigationFailureType=It,be.START_LOCATION=y,st&&window.Vue&&window.Vue.use(be);const Ee=be}}]);