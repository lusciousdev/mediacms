!function(){var e,t={463:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var i=n(4571),r=n.n(i);function a(e,t){let n=r()(e,{});return""!==n.origin&&"null"!==n.origin&&n.origin||(n=r()(t+"/"+e.replace(/^\//g,""),{})),n.toString()}},878:function(e,t,n){"use strict";n.d(t,{c:function(){return l}});var i=n(9471),r=n(8713),a=n.n(r),o=n(6387),s=n(5321),c=n(2828);function l(e){const{thumbnail:t}=(0,o.useUser)(),n={"aria-label":"Account profile photo that opens list of options and settings pages links",className:"thumbnail"};switch(e.isButton?void 0!==e.onClick&&(n.onClick=e.onClick):n.type="span",e.size){case"small":case"large":n.className+=" "+e.size+"-thumb"}return i.createElement(s.i,n,t?i.createElement("img",{src:t,alt:""}):i.createElement(c.Z,{type:"person"}))}l.propTypes={isButton:a().bool,size:a().oneOf(["small","medium","large"]),onClick:a().func},l.defaultProps={isButton:!1,size:"medium"}},977:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});var i=n(7143);function r(e,t){return i.register(e[t].bind(e)),e}},1702:function(e,t,n){"use strict";n.d(t,{R:function(){return a},e:function(){return o}});var i=n(6403),r=n(8354);const a=function(e,t,n){return void 0===e[t]||(0,r.tR)(e[t])?null:(0,i.m)(["Invalid prop `"+t+"` of type `"+typeof e[t]+"` supplied to `"+(n||"N/A")+"`, expected `positive integer or zero` ("+e[t]+")."])},o=function(e,t,n){return void 0===e[t]||(0,r.q6)(e[t])?null:(0,i.m)(["Invalid prop `"+t+"` of type `"+typeof e[t]+"` supplied to `"+(n||"N/A")+"`, expected `positive integer` ("+e[t]+")."])}},1936:function(e,t,n){"use strict";n.d(t,{PageHeader:function(){return i.z},PageMain:function(){return r.P},PageSidebar:function(){return a.E}});var i=n(1254),r=n(3212),a=n(795);n(1470)},2828:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(9471);const r=e=>{let{type:t}=e;return t?i.createElement("i",{className:"material-icons","data-icon":t}):null}},2901:function(e,t,n){"use strict";n.d(t,{AP:function(){return o},cp:function(){return a}});var i=n(9471);const r=i.forwardRef(((e,t)=>void 0!==e.children?i.createElement("div",{ref:t,className:"popup"+(void 0!==e.className?" "+e.className:""),style:e.style},e.children):null));function a(e){return void 0!==e.children?i.createElement("div",{className:"popup-top"+(void 0!==e.className?" "+e.className:""),style:e.style},e.children):null}function o(e){return void 0!==e.children?i.createElement("div",{className:"popup-main"+(void 0!==e.className?" "+e.className:""),style:e.style},e.children):null}t.Ay=r},3135:function(e,t,n){"use strict";var i=n(9471),r=n(8713),a=n.n(r),o=n(2828);function s(e){const[t,n]=(0,i.useState)(e.active);return i.createElement("div",{className:"mi-filters-toggle"},i.createElement("button",{className:t?"active":"","aria-label":"Filter",onClick:function(){n(!t),void 0!==e.onClick&&e.onClick()}},i.createElement(o.Z,{type:"filter_list"}),i.createElement("span",{className:"filter-button-label"},i.createElement("span",{className:"filter-button-label-text"},"FILTERS"))))}s.propTypes={onClick:a().func,active:a().bool},s.defaultProps={active:!1}},3818:function(e,t,n){"use strict";n(9471);var i=n(8713),r=n.n(i);r().string,r().array.isRequired,r().string,r().number,r().number,r().number,r().func,r().func},4665:function(e,t,n){"use strict";var i=n(2985),r=n(7545);(0,i.C)("page-profile-media",r.R)},5305:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var i=n(9471),r=n(9834),a=n(8713),o=n.n(a);function s(e){const t=(0,i.useRef)(null),[n,a]=(0,i.useState)(null);let o=[];function s(t,n){var i;n.preventDefault(),n.stopPropagation(),i=o[t].id,void 0!==e.pages[i]&&a(i)}return(0,i.useEffect)((()=>{void 0!==e.pages[e.initPage]?a(e.initPage):Object.keys(e.pages).length?a(Object.keys(e.pages)[0]):a(null)}),[e.initPage]),(0,i.useEffect)((()=>{!function(){let e=0;for(;e<o.length;)o[e].elem.removeEventListener("click",o[e].listener),e+=1;o=[]}(),n&&(function(){let n,i,a=(0,r.findDOMNode)(t.current),c=a.querySelectorAll(e.pageChangeSelector);if(c.length)for(n=0;n<c.length;)i=c[n].getAttribute(e.pageIdSelectorAttr),i=i?i.trim():i,i&&(o[n]={id:i,elem:c[n]},o[n].listener=(e=>t=>s(e,t))(n),o[n].elem.addEventListener("click",o[n].listener)),n+=1;e.focusFirstItemOnPageChange&&a.focus()}(),"function"==typeof e.pageChangeCallback&&e.pageChangeCallback(n))}),[n]),n?i.createElement("div",{ref:t},i.cloneElement(e.pages[n])):null}s.propTypes={initPage:o().string,pages:o().object.isRequired,pageChangeSelector:o().string.isRequired,pageIdSelectorAttr:o().string.isRequired,focusFirstItemOnPageChange:o().bool,pageChangeCallback:o().func},s.defaultProps={focusFirstItemOnPageChange:!0}},5321:function(e,t,n){"use strict";n.d(t,{i:function(){return s}});var i=n(9471),r=n(8713),a=n.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(null,arguments)}function s(e){const t=i.createElement("span",null,i.createElement("span",null,e.children)),n={tabIndex:e.tabIndex||null,title:e.title||null,className:"circle-icon-button"+(void 0!==e.className?" "+e.className:"")+(e.buttonShadow?" button-shadow":"")};return void 0!==e["data-page-id"]&&(n["data-page-id"]=e["data-page-id"]),void 0!==e["aria-label"]&&(n["aria-label"]=e["aria-label"]),"link"===e.type?i.createElement("a",o({},n,{href:e.href||null,rel:e.rel||null}),t):"span"===e.type?i.createElement("span",o({},n,{onClick:e.onClick||null}),t):i.createElement("button",o({},n,{onClick:e.onClick||null}),t)}s.propTypes={type:a().oneOf(["button","link","span"]),buttonShadow:a().bool,className:a().string},s.defaultProps={type:"button",buttonShadow:!1}},6089:function(e,t,n){"use strict";n.d(t,{$:function(){return s}});var i=n(9471),r=n(6371);let a=[];function o(e){const[t,n]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!0);let o=null,s=null;return(0,i.useEffect)((()=>(o=setTimeout((function(){s=setTimeout((function(){a(!1),s=null}),1e3),o=null,n(!0),e.onHide(e.id)}),5e3),()=>{o&&clearTimeout(o),s&&clearTimeout(s)})),[]),r?i.createElement("div",{className:"notification-item"+(t?" hidden":"")},i.createElement("div",null,e.children||null)):null}function s(){const[e,t]=(0,i.useState)(a.length);function n(){t(r.default.get("notifications-size")+a.length)}function s(e){const t=[];a.map((n=>{n[0]!==e&&t.push(n)})),a=t}return(0,i.useEffect)((()=>(n(),r.default.on("added_notification",n),()=>r.default.removeListener("added_notification",n))),[]),e?i.createElement("div",{className:"notifications"},i.createElement("div",null,function(){const e=r.default.get("notifications");return[...a.map((e=>i.createElement(o,{key:e[0],id:e[0],onHide:s},e[1]))),...e.map((e=>(a.push(e),i.createElement(o,{key:e[0],id:e[0],onHide:s},e[1]))))]}())," "):null}},6371:function(e,t,n){"use strict";n.r(t);var i=n(9032),r=n.n(i),a=n(7154),o=n(1838),s=n(3997);function c(){let e=new Uint32Array(3);return window.crypto.getRandomValues(e),(performance.now().toString(36)+Array.from(e).map((e=>e.toString(36))).join("")).replace(/./g,""+Math.random()+Intl.DateTimeFormat().resolvedOptions().timeZone+Date.now())}let l,u=null,f=null;class d extends(r()){constructor(e){super(),f=(0,s.$)(window.MediaCMS),l=new a.BrowserCache(f.site.id,86400),u={mediaAutoPlay:l.get("media-auto-play")},u.mediaAutoPlay=null!==u.mediaAutoPlay&&u.mediaAutoPlay,this.browserEvents=(0,o.BrowserEvents)(),this.browserEvents.doc(this.onDocumentVisibilityChange.bind(this)),this.browserEvents.win(this.onWindowResize.bind(this),this.onWindowScroll.bind(this)),this.notifications=function(e){let t=[];function n(e){"string"==typeof e&&t.push([c(),e])}return e.map(n),{size:function(){return t.length},push:n,clear:function(){t=[]},messages:function(){return[...t]}}}(void 0!==window.MediaCMS&&void 0!==window.MediaCMS.notifications?window.MediaCMS.notifications:[])}onDocumentVisibilityChange(){this.emit("document_visibility_change")}onWindowScroll(){this.emit("window_scroll")}onWindowResize(){this.emit("window_resize")}initPage(e){u.currentPage=e}get(e){let t;switch(e){case"browser-cache":t=l;break;case"media-auto-play":t=u.mediaAutoPlay;break;case"config-contents":t=f.contents;break;case"config-enabled":t=f.enabled;break;case"config-media-item":t=f.media.item;break;case"config-options":t=f.options;break;case"config-site":t=f.site;break;case"api-playlists":n=e.split("-")[1],t=f.api[n]||null;break;case"notifications-size":t=this.notifications.size();break;case"notifications":t=this.notifications.messages(),this.notifications.clear();break;case"current-page":t=u.currentPage}var n;return t}actions_handler(e){switch(e.type){case"INIT_PAGE":this.initPage(e.page),this.emit("page_init");break;case"TOGGLE_AUTO_PLAY":u.mediaAutoPlay=!u.mediaAutoPlay,l.set("media-auto-play",u.mediaAutoPlay),this.emit("switched_media_auto_play");break;case"ADD_NOTIFICATION":this.notifications.push(e.notification),this.emit("added_notification")}}}t.default=(0,o.exportStore)(new d,"actions_handler")},6403:function(e,t,n){"use strict";n.d(t,{g:function(){return o},m:function(){return a}});var i=n(8004);function r(e,t,n){let i;switch(n){case TypeError:case RangeError:case SyntaxError:case ReferenceError:i=new n(t[0]);break;default:i=new Error(t[0])}return e(i.message,...t.slice(1)),i}function a(e,t){return r(i.z,e,t)}function o(e,t){return r(i.R,e,t)}},6568:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var i=n(9471),r=n(8713),a=n.n(r);function o(e){let t="spinner-loader";switch(e.size){case"tiny":case"x-small":case"small":case"large":case"x-large":t+=" "+e.size}return i.createElement("div",{className:t},i.createElement("svg",{className:"circular",viewBox:"25 25 50 50"},i.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"1.5",strokeMiterlimit:"10"})))}o.propTypes={size:a().oneOf(["tiny","x-small","small","medium","large","x-large"])},o.defaultProps={size:"medium"}},7143:function(e,t,n){const i=n(2063).Dispatcher;e.exports=new i},7201:function(e,t,n){"use strict";n.d(t,{S:function(){return l}});var i=n(9471),r=n(8713),a=n.n(r),o=n(2828);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(null,arguments)}function c(e){let t=[];const n=e.itemAttr||{};void 0===n.className?n.className="":n.className&&(n.className+=" ");let r=e.text?e.icon&&"right"!==e.iconPos?1:0:-1,a=e.icon?e.text&&"right"===e.iconPos?1:0:-1;switch(-1<r&&(t[r]=i.createElement("span",{key:"Text"},e.text)),-1<a&&(t[a]=i.createElement("span",{key:"Icon",className:"right"===e.iconPos?"menu-item-icon-right":"menu-item-icon"},i.createElement(o.Z,{type:e.icon}))),e.itemType){case"link":t=i.createElement("a",s({},e.linkAttr||{},{href:e.link,title:e.text||null}),t),n.className+="link-item"+(e.active?" active":"");break;case"button":case"open-subpage":t=i.createElement("button",s({},e.buttonAttr||{},{key:"button"}),t);break;case"label":t=i.createElement("button",s({},e.buttonAttr||{},{key:"button"}),i.createElement("span",null,e.text||null)),n.className="label-item";break;case"div":t=i.createElement("div",s({},e.divAttr||{},{key:"div"}),e.text||null)}return""!==n.className&&(n.className=" "+n.className),n.className=n.className.trim(),i.createElement("li",n,t)}function l(e){const t=e.items.map(((e,t)=>i.createElement(c,s({key:t},e))));return t.length?i.createElement("div",{className:"nav-menu"+(e.removeVerticalPadding?" pv0":"")},i.createElement("nav",null,i.createElement("ul",null,t))):null}c.propTypes={itemType:a().oneOf(["link","open-subpage","button","label","div"]),link:a().string,icon:a().string,iconPos:a().oneOf(["left","right"]),text:a().string,active:a().bool,divAttr:a().object,buttonAttr:a().object,itemAttr:a().object,linkAttr:a().object},c.defaultProps={itemType:"link",iconPos:"left",active:!1},l.propTypes={removeVerticalPadding:a().bool,items:a().arrayOf(a().shape(c.propTypes)).isRequired},l.defaultProps={removeVerticalPadding:!1}},7256:function(e,t,n){"use strict";n(9471);var i=n(8713),r=n.n(i);n(2828),r().string.isRequired,r().string.isRequired,r().func.isRequired},7664:function(e,t,n){"use strict";n.d(t,{CircleIconButton:function(){return i.i},MaterialIcon:function(){return r.Z},NavigationContentApp:function(){return a.V},NavigationMenuList:function(){return o.S},Notifications:function(){return s.$},PopupMain:function(){return c.AP},PopupTop:function(){return c.cp},SpinnerLoader:function(){return l.x},UserThumbnail:function(){return u.c}});var i=n(5321),r=(n(7256),n(3135),n(2828)),a=n(5305),o=n(7201),s=n(6089),c=(n(3818),n(2901)),l=n(6568),u=n(878)},7731:function(e,t,n){"use strict";n.d(t,{LazyLoadItemListAsync:function(){return f}});var i=n(9471),r=n(7460),a=n(5338),o=n(4685),s=n(2495),c=n(4433),l=n(5633);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(null,arguments)}function f(e){const[t,n,o,f,d,m,p,g,v,b,h,y,w]=(0,a.useItemListLazyLoad)(e);return(0,i.useEffect)((()=>(f(new l.B(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,m,p)),r.PageStore.on("window_scroll",g),r.PageStore.on("document_visibility_change",v),g(),()=>{r.PageStore.removeListener("window_scroll",g),r.PageStore.removeListener("document_visibility_change",v),o&&(o.cancelAll(),f(null))})),[]),n?t.length?i.createElement("div",{className:d.listOuter},y(),i.createElement("div",{ref:b,className:"items-list-wrap"},i.createElement("div",{ref:h,className:d.list},t.map(((t,n)=>i.createElement(c.c,u({key:n},(0,c.k)(e,t,n))))))),w()):null:i.createElement(s.e,{className:d.listOuter})}f.propTypes={...o.ItemListAsync.propTypes},f.defaultProps={...o.ItemListAsync.defaultProps,pageItems:2}},8004:function(e,t,n){"use strict";n.d(t,{R:function(){return a},z:function(){return o}});var i=n(8974);const r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i[t[0]](...t.slice(1))},a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r("warn",...t)},o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r("error",...t)}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,i),a.exports}i.m=t,e=[],i.O=function(t,n,r,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j=301,function(){var e={301:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],s=n[1],c=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var u=c(i)}for(t&&t(n);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=i.O(void 0,[276],(function(){return i(4665)}));r=i.O(r)}();