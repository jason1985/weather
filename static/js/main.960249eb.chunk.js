(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),r=n.n(i),s=(n(12),n(4)),o=n.n(s),l=n(7),d=n(2),u=(n(14),n(5)),j=n.n(u),v=(n(16),n(0));var m=function(e){var t=e.temp,n=e.cel;return Object(v.jsxs)("div",{className:"temperature",children:[Object(v.jsx)("div",{className:"temp",children:t}),Object(v.jsx)("span",{style:{color:n?"#fcf8f1":null},className:"c",children:"\xb0C"}),Object(v.jsx)("span",{className:"divider",children:"|"}),Object(v.jsx)("span",{style:{color:n?null:"#fcf8f1"},className:"f",children:"\xb0F"})]})};n(18);var h=function(e){var t=e.update;return Object(v.jsx)("svg",{className:t?"icon update":"icon",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})};var p=function(){var e,t,n,a,i,r,s=Object(c.useState)(null),u=Object(d.a)(s,2),p=u[0],f=u[1],b=Object(c.useState)("Saigon"),O=Object(d.a)(b,2),x=O[0],g=O[1],w=Object(c.useState)("Saigon"),N=Object(d.a)(w,2),S=N[0],k=N[1],y=Object(c.useState)(!1),M=Object(d.a)(y,2),C=M[0],J=M[1],E=Object(c.useState)(!1),B=Object(d.a)(E,2),D=B[0],H=B[1],L=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(x,"&appid=54d34401fece1e4efc1c4d41e8388c4c"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function q(){!0!==D&&(H(!0),g(S),setTimeout((function(){H(!1)}),500))}return Object(c.useEffect)((function(){L()}),[x]),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),q()},children:[Object(v.jsx)("input",{type:"text",value:S,onChange:function(e){return k(e.target.value)}}),Object(v.jsx)("div",{onClick:q,children:Object(v.jsx)(h,{update:D})})]}),Object(v.jsxs)("div",{className:"glass",children:[Object(v.jsx)("div",{className:"panel",children:Object(v.jsxs)("pre",{children:["Raw JSON:",JSON.stringify(p,void 0,2)]})}),Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"date",children:j()().format("dddd, Do MMMM")}),Object(v.jsx)("div",{className:"time",children:j()().format("h:mm a")}),(null===p||void 0===p?void 0:p.name)?Object(v.jsxs)("div",{className:"location",children:[null===p||void 0===p?void 0:p.name,", ",null===p||void 0===p||null===(e=p.sys)||void 0===e?void 0:e.country]}):"",Object(v.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(null===p||void 0===p||null===(t=p.weather)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.icon,"@2x.png"),onError:function(e){e.target.onerror=null,e.target.src="http://openweathermap.org/img/wn/03n@2x.png"},alt:"weather icon"}),Object(v.jsx)("div",{onClick:function(){return J(!C)},children:Object(v.jsx)(m,{cel:C,temp:function(e){if(!isNaN(e))return!1===C?function(e){return Math.floor(1.8*(e-273.15)+32)}(e):function(e){return Math.floor(e-273.15)}(e)}(null===p||void 0===p||null===(a=p.main)||void 0===a?void 0:a.temp)})}),Object(v.jsx)("div",{className:"description",children:null===p||void 0===p||null===(i=p.weather)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.description}),Object(v.jsx)("div",{className:(null===p||void 0===p?void 0:p.message)?"error":"",children:null===p||void 0===p?void 0:p.message})]})]})]})})};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(p,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.960249eb.chunk.js.map