(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(1),o=a.n(c),r=a(11),u=a(2),s=a(7),m=a(9),i=a.n(m);a(17);var b=function(){var e=[{value:"TRY",label:"TRY"},{value:"EUR",label:"EUR"},{value:"USD",label:"USD"},{value:"BTC",label:"BTC"},{value:"ETH",label:"ETH"}],t=Object(n.useState)(e),a=Object(u.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(1),b=Object(u.a)(m,2),p=b[0],v=b[1],d=Object(n.useState)("EUR"),f=Object(u.a)(d,2),h=f[0],E=f[1],O=Object(n.useState)("TRY"),g=Object(u.a)(O,2),j=g[0],y=g[1],N=Object(n.useState)(0),C=Object(u.a)(N,2),R=C[0],S=C[1];Object(n.useEffect)((function(){fetch("https://min-api.cryptocompare.com/data/price?fsym=".concat(h,"&tsyms=").concat(j)).then((function(e){return e.json()})).then((function(e){var t=e[j],a=Number(p);S(t*a)})).catch((function(e){return console.log(e)}))}));var T=Object(n.useState)([{value:"",label:""}]),w=Object(u.a)(T,2),x=w[0],U=w[1];return l.a.createElement("div",{className:"m-2 pt-3",id:"exchange"},l.a.createElement("label",null,"Amount"),l.a.createElement("input",{type:"number",className:"form-control mb-2",placeholder:p,onChange:function(e){return function(e){v(e.target.value)}(e)}}),l.a.createElement("label",null,"To"),l.a.createElement(s.a,{className:"select mt-2",placeholder:h,options:c,onChange:function(e){return E(e.value)}}),l.a.createElement("label",null,"From"),l.a.createElement(s.a,{className:"select mt-2",placeholder:j,options:c,onChange:function(e){return y(e.value)}}),l.a.createElement("label",null,"Result"),isNaN(R)?l.a.createElement("input",{className:"form-control mt-2",type:"text",value:"Please check your added currency",readOnly:!0}):l.a.createElement("input",{className:"form-control mt-2",type:"text",value:R,placeholder:R,readOnly:!0}),l.a.createElement("div",{className:"mt-5"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=e.concat.apply(e,Object(r.a)(x));o(a),i.a.success("Added "+x[0].value)}},l.a.createElement("label",null,"ADD YOUR CURRENCY"),l.a.createElement("input",{className:"form-control",type:"text",onChange:function(e){var t=e.target.value.toUpperCase();U([{value:t,label:t}])},placeholder:"Example: BTC",name:"add"}),l.a.createElement("button",{className:"btn btn-light mt-2"},"Add"))))};a(20);var p=function(){return l.a.createElement("div",{className:"selam"},l.a.createElement(b,null))};a(21),a(22),a(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.66da0759.chunk.js.map