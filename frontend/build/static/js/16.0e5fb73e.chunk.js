(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[16,19,21],{68:function(n,t,e){"use strict";e.d(t,"a",(function(){return x})),e.d(t,"b",(function(){return h})),e.d(t,"c",(function(){return p}));var i=e(3),r=e(2),d=e(16),a=e(1),c=e(11);var o,s,l=e.p+"static/media/shopping-cart-solid.f0d47d21.svg",u=e(0),x=r.b.button(o||(o=Object(i.a)(["\nposition:relative;\nmargin-left:auto;\nmargin-top:auto;\nbox-shadow: ",";\npadding:20px 0;\nwidth:50px;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nbackground: ","  ;\noutline:none;\nborder:none;\nborder-radius: 4px;\nfont-weight:600;\ncursor:pointer;\nfont-size:20px;\ncolor:#fff;\ntransition: all 0.3s ease;\n&:hover{\n  background:",";\n}"])),(function(n){return n.theme.lightBoxShadow}),(function(n){return n.isAdded?n.theme.darckYellow:n.theme.black}),(function(n){return n.theme.darckYellow})),h=r.b.img(s||(s=Object(i.a)(["\nwidth:20px;\nheight:20px;\ntransition: all 05s ease;\n\n"])));function p(n){var t=n.thisProductInfo,e=function(n){var t=Object(c.a)(),e=t.cartProducts,i=t.addToCart,r=t.addToTotalCost,o=Object(a.useState)(!1),s=Object(d.a)(o,2),l=s[0],u=s[1],x=e.map((function(n){return n.info._id}));return Object(a.useEffect)((function(){-1!==x.indexOf(n._id)?u(!0):u(!1)}),[x,n]),{handlerAddToCartAndAddToTotalCost:function(n,t){if(-1===x.indexOf(n._id))return r(t),void i({info:n,quantity:1})},isAdded:l}}(t),i=e.handlerAddToCartAndAddToTotalCost,r=e.isAdded;return Object(u.jsx)(x,{isAdded:r,onClick:function(){return i(t,parseInt(null===t||void 0===t?void 0:t.price))},children:Object(u.jsx)(h,{style:{position:"absolute"},src:l,alt:"add-to-cart"})})}},69:function(n,t,e){"use strict";t.a=e.p+"static/media/default-image.02bd9b08.png"},78:function(n,t,e){"use strict";e.r(t),e.d(t,"bounceLeft",(function(){return z})),e.d(t,"GoBackLink",(function(){return L}));var i=e(3),r=e(2),d=e(12),a=e.n(d),c=e(15),o=e(16),s=e(1),l=e(5),u=e(11);var x,h,p,b,j,f,m,O,v,g,w=e(40),k=e(69),y=e(68),I=e(0),z=Object(r.c)(x||(x=Object(i.a)(["\n  0% { left:15px;}\n  50% { left:20px;}\n   100% { left:15px;}\n"]))),L=Object(r.b)(w.a)(h||(h=Object(i.a)(["\nposition:absolute;\nleft:15px;\nmargin: 0 ;\nfont-size:15px;\npadding: 10px 0;\nz-index:800;\n  animation: ",' 1.2s linear infinite;\n&:before{\n  content : "<-- ";\n  margin-right:3px;\n}\n'])),z),P=r.b.section(p||(p=Object(i.a)(["\n    width: 90vw;\n    padding: 60px 15px 20px;\n    margin: 0px auto;\n    display: flex;\n  height: 100%;\nmax-height: 800px;\n    flex-direction: column;\n    justify-content: flex-start;\n@media screen and (min-width:550px){\n width:70vw;\n}\n@media screen and (min-width:850px){\n width:50vw;\n}\n@media screen and (min-width:850px){\n width:50vw;\n}\n@media screen and (min-width:1200px){\n    width: 70vw;\n    height: 100%;\n    max-height: 800px;\n}\n& >button {\ntransform:scale(0.8);\nmargin-top:-45px;\nmargin-bottom:10px;\n@media screen and (min-width:600px){\nmargin-top:-50px;\ntransform:scale(1);\n}\n"]))),A=r.b.img(b||(b=Object(i.a)(["\nposition:relative;\nleft:50%;\ntransform:translate(-50%, 0);\n   height: 100%;\n    max-width: 90%;\n    max-height: 250px;\n@media screen and (min-width:500px){\n max-height: 350px;\nmax-width: 350px;\n}\n"]))),C=r.b.div(j||(j=Object(i.a)(["\npadding-top:40px;\n    min-height: 300px;\n  background-image: ",";\n      background-repeat: no-repeat;\n    background-size: 100% auto;\n    backface-visibility: hidden;\n    background-position: center;\n   @media screen and (min-width:400px){\nbackground-size: auto 100%;\n    }\n"])),(function(n){return n.isLoaded?"none":"url(".concat(k.a,")")})),D=r.b.h2(f||(f=Object(i.a)(["\nmargin: 10px 0 ;\nletter-spasing:0;\nline-height:35px;\nmax-width:200px;\nfont-size:30px;\ntext-transform:capitalize ;\n@media screen and (min-width:600px){\n  font-size:35px;\n  margin-bottom: 20px;\n  max-width:100%;\n}\n"]))),T=r.b.div(m||(m=Object(i.a)(["\n\nwidth:100%;\nheight:1px;\nbackground:#fcaf01;\nmargin:5px auto;\n"]))),S=r.b.dd(O||(O=Object(i.a)(["\nline-height:25px;\ntext-transform:capitalize ;\n"]))),_=r.b.dt(v||(v=Object(i.a)(["\ncolor: ",";\nline-height:25px;\ntext-transform:capitalize ;\n    float: left;\n"])),(function(n){return n.theme.darckYellow})),B=Object(r.b)(S)(g||(g=Object(i.a)(["\ntext-transform:none;\n\n"])));t.default=function(){var n=function(){var n=Object(u.a)(),t=n.setIsLoading,e=n.cartProducts,i=Object(l.h)(),r=Object(l.g)(),d=new URLSearchParams(i.search).get("from"),x=Object(s.useState)(!1),h=Object(o.a)(x,2),p=h[0],b=h[1],j=Object(s.useState)({}),f=Object(o.a)(j,2),m=f[0],O=f[1],v=Object(l.i)().productId;return Object(s.useEffect)((function(){t(!0);var n=new AbortController,e=n.signal,i=function(){var n=Object(c.a)(a.a.mark((function n(){var d,c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/products/".concat(v),{signal:e});case 3:if(404!==(d=n.sent).status){n.next=7;break}return t(!1),n.abrupt("return",r.push("/notFound"));case 7:return n.next=9,d.json();case 9:c=n.sent,O(c.data),t(!1),n.next=17;break;case 14:if(n.prev=14,n.t0=n.catch(0),"AbortError"===n.t0.name)console.log("Fetch Canseled: caught abort");else for(console.log(n.t0),o=0;o<6;o++)i();case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();return i(),function(){n.abort()}}),[v]),{isInShoppingCart:!!e.find((function(n){return n.info._id===(null===m||void 0===m?void 0:m._id)})),isLoaded:p,thisProductInfo:m,goBackPath:d,setIsLoaded:b}}(),t=n.isInShoppingCart,e=n.isLoaded,i=n.thisProductInfo,r=n.goBackPath,d=n.setIsLoaded;return Object(I.jsxs)(P,{children:[Object(I.jsx)(L,{to:r,children:" Regresar"}),Object(I.jsx)(C,{isLoaded:e,children:Object(I.jsx)(A,{src:null===i||void 0===i?void 0:i.img,alt:null===i||void 0===i?void 0:i.name,onLoad:function(){return d(!0)}})}),Object(I.jsx)(T,{}),Object(I.jsx)(D,{children:null===i||void 0===i?void 0:i.name}),t?null:Object(I.jsx)(y.c,{thisProductInfo:i}),Object(I.jsx)(T,{}),Object(I.jsxs)("dl",{children:[Object(I.jsx)(_,{children:"Categor\xeda:"})," ",Object(I.jsx)(S,{children:null===i||void 0===i?void 0:i.category}),Object(I.jsx)(_,{children:"Porci\xf3n:"})," ",Object(I.jsx)(S,{children:null===i||void 0===i?void 0:i.size}),Object(I.jsx)(_,{children:"Precio:"})," ",Object(I.jsxs)(S,{children:["$",null===i||void 0===i?void 0:i.price]}),Object(I.jsx)(_,{children:"Descripci\xf3n:"})," ",Object(I.jsx)(B,{children:null===i||void 0===i?void 0:i.description})]})]})}},85:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return l}));var i,r,d=e(3),a=e(2),c=e(0),o=a.b.div(i||(i=Object(d.a)(["\nmargin:20px auto;\npadding:15px;\ngap:15px;\n  width:100%;\nmax-width:max-content;\nmin-height: 30px;\n  background-color:",";\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-wrap:wrap;\n      border-radius: 10px;\n@media screen and(max-width:600px){\n\n  max-width:280px;\n\n\n}\n"])),(function(n){return n.theme.black})),s=a.b.div(r||(r=Object(d.a)(["\ncolor: ",";\ndisplay:flex;\ntext-align:center;\n& > h4 {\n  margin: 0;\n}\n    align-items: center;\n    flex-direction: column;\n"])),(function(n){return n.theme.darckYellow}));function l(n){var t=n.states;return Object(c.jsx)(o,{children:null===t||void 0===t?void 0:t.map((function(n){var t,e;return Object(c.jsxs)(s,{children:[Object(c.jsx)("h4",{children:null===n||void 0===n?void 0:n.name}),Object(c.jsxs)("date",{children:[Object(c.jsx)("small",{children:null===(t=new Date(null===n||void 0===n?void 0:n.date).toLocaleString())||void 0===t?void 0:t.split(" ")[0]}),Object(c.jsx)("br",{}),Object(c.jsx)("small",{children:null===(e=new Date(null===n||void 0===n?void 0:n.date).toLocaleString())||void 0===e?void 0:e.split(" ")[1]})]})]},null===n||void 0===n?void 0:n.date)}))})}},90:function(n,t,e){"use strict";e.r(t),e.d(t,"Page",(function(){return p})),e.d(t,"OrderId",(function(){return b})),e.d(t,"DetailTable",(function(){return j})),e.d(t,"ClientInfo",(function(){return f})),e.d(t,"default",(function(){return m}));var i=e(3),r=e(2),d=e(78),a=e(85),c=e(11),o=e(5);var s,l,u,x,h=e(0),p=r.b.main(s||(s=Object(i.a)(["\n    padding: 60px 15px;\nmin-height:100vh;\nwidth:100%;\nmax-width: 1250px;\nmargin: 0 auto;\ntext-transform: capitalize;\n  & > h3 {\n        text-align: center;\n    margin-top: 20px;\n}\n@media screen and (max-width: 440px){\n  & > h3 {\n    font-size: 20px;\n        text-align: center;\n    margin-top: 20px;\n}\n  \n& > h3 span{\n  display:block;\n}\n}\n"]))),b=r.b.h3(l||(l=Object(i.a)(["\n margin-top: 40px;\n"]))),j=r.b.table(u||(u=Object(i.a)(["\nwidth:90%;\nmax-width:900px;\nmargin: 0 auto;\nborder-spacing: 15px;\nborder-collapse: collapse;\nborder: 2px solid ",";\n text-transform: capitalize;\n&> thead ,tfoot{\nbackground-color:",";\ncolor: ",';\n}\n&>  tfoot td h4{\nmargin: 10px 0;\ntext-align:center;\n}\n& >tfoot td h4 span{\n  margin-right:5px;\n  color: #f3f3f3;\n}\n& >  thead th {\n     padding: 10px 5px;\n       font-family: "Oswald", sans-serif;\n       font-size:19px;\n}     \n& >  tbody tr td {\n   padding: 10px ;\n          text-align: center;\n}   \n@media screen and (max-width: 400px){\n      border-spacing: 0;\n          width: 100%;\n& >  thead th {\n  \n       font-size:16px;\n}    \n& >  tbody{\n  font-size: 12px;\n}\n}\n'])),(function(n){return n.theme.black}),(function(n){return n.theme.black}),(function(n){return n.theme.darckYellow})),f=r.b.div(x||(x=Object(i.a)(["\nmargin: 0 auto;\nmax-width:900px;\n    padding-bottom: 10px;\ndisplay: flex;\n  gap: 15px;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n"])));function m(){var n,t,e,i,r,s=function(n){var t=Object(o.i)().orderID,e=Object(c.a)().currentUser;return{thisOrder:(null===e||void 0===e?void 0:e.orders).find((function(n){return n.orderID===parseInt(t)})),orderID:t}}(),l=s.thisOrder,u=s.orderID;return Object(h.jsxs)(p,{children:[Object(h.jsx)(d.GoBackLink,{to:"/myAccount/myOrders",children:"Regresar"}),Object(h.jsxs)(b,{children:["N\xba ID:",Object(h.jsx)("span",{children:u})]}),Object(h.jsx)(a.c,{states:null===l||void 0===l||null===(n=l.states)||void 0===n?void 0:n.filter((function(n){return!0===(null===n||void 0===n?void 0:n.confirmed)}))}),Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:"Detalles de envio"}),Object(h.jsxs)(f,{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Destinatario:"}),null===l||void 0===l||null===(t=l.client[0])||void 0===t?void 0:t.name]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Dirrecci\xf3n:"}),null===l||void 0===l||null===(e=l.client[0])||void 0===e?void 0:e.address]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Tel\xe9fono:"}),null===l||void 0===l||null===(i=l.client[0])||void 0===i?void 0:i.number]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:"Detalles del pedido"}),Object(h.jsxs)(j,{children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("th",{children:"Producto"}),Object(h.jsx)("th",{children:"Precio"}),Object(h.jsx)("th",{children:"Unidades"}),Object(h.jsx)("th",{children:"Total"})]}),Object(h.jsx)("tbody",{children:null===l||void 0===l||null===(r=l.description)||void 0===r?void 0:r.map((function(n){var t,e;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:null===n||void 0===n||null===(t=n.product)||void 0===t?void 0:t.name})}),Object(h.jsxs)("td",{children:["$",null===n||void 0===n||null===(e=n.product)||void 0===e?void 0:e.price]}),Object(h.jsx)("td",{children:null===n||void 0===n?void 0:n.quantity}),Object(h.jsxs)("td",{children:["$",null===n||void 0===n?void 0:n.total]})]},n._id)}))}),Object(h.jsx)("tfoot",{children:Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"4",children:Object(h.jsxs)("h4",{children:[Object(h.jsx)("span",{children:"Total:"}),"$",null===l||void 0===l?void 0:l.total]})})})})]})]})}}}]);
//# sourceMappingURL=16.0e5fb73e.chunk.js.map