(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),i=n(3),s=n.n(i),a=n(6),l=n(2),u=n(16),h=n(17),d=(n(29),n(4)),b=n(5),f=n(8),p=n(7),j=function(e){var t=e.name,n=e.email,o=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(o),width:"200",height:"200",alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},g=function(e,t){var n=e.length>t?"...":"";return e.substring(0,t)+n};function v(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(j,{name:g(t[n].name.replace(/\s/g,""),12),email:t[n].email,id:t[n].id},n)}))})}var O=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("label",{htmlFor:"inp",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search robots",onChange:t,id:"inp",name:"inp"})})})},m=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooops. This is not good"}):this.props.children}}]),n}(o.Component),w=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},x=(n(30),n(13)),y=n.n(x),R=n(18),S="CHANGE_SEARCH_FIELD",k="REQUEST_ROBOTS_PENDING",C="REQUEST_ROBOTS_SUCCESS",E="REQUEST_ROBOTS_FAILED",N=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchfield,n=e.onSearchChange,o=e.robots,c=e.isPending,i=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(r.jsx)("div",{className:"tc",children:Object(r.jsx)("h1",{className:"f2",children:"LOADING..."})}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f2",children:"ROBOTS"}),Object(r.jsx)(O,{searchChange:n}),Object(r.jsx)(w,{children:Object(r.jsx)(m,{children:Object(r.jsx)(v,{robots:i})})})]})}}]),n}(o.Component),P=Object(a.b)((function(e){return{searchfield:e.searchRobots.searchfield,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:S,payload:n}));var n},onRequestRobots:function(){return e(function(){var e=Object(R.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:k}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.next=10,t({type:C,payload:r});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:E,payload:e.t0});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}())}}}))(N),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))},L=(n(32),{searchfield:""}),A={isPending:!1,robots:[],error:""},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=Object(u.createLogger)(),D=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object.assign({},e,{searchfield:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case k:return Object.assign({},e,{isPending:!0});case C:return Object.assign({},e,{robots:t.payload,isPending:!1});case E:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(l.d)(D,Object(l.a)(h.a,B));s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(a.a,{store:F,children:Object(r.jsx)(P,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Simple-Robot-React-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Simple-Robot-React-App","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(t,e)}))}}(),T()}},[[33,1,2]]]);
//# sourceMappingURL=main.f12b7c83.chunk.js.map