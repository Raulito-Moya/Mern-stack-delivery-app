(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[10,21],{67:function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return d})),t.d(e,"c",(function(){return l}));var r,a,i=t(3),c=t(2),o=t(0),s=c.b.select(r||(r=Object(i.a)(["\n    color: rgb(0 0 0 / 50%);\n    padding: 7px;\n    border-radius: 5px;\n    outline: none;\n    cursor: pointer;\n    font-size: 14px;\n    margin: 0;\n    border: none;\n    margin-bottom: 20px;\n    background: #fff;\nbox-shadow: inset 1px 1px 6px 0px #ccc;\n    text-transform: capitalize;\n    margin: 0 20px 20px auto;\n\n"]))),d=c.b.option(a||(a=Object(i.a)(["\n&:checked{\n   background: #fcba1c;\n}\n"])));function l(n){var e=n.setSortPreferece;return Object(o.jsxs)(s,{name:"sortProductBy",onChange:function(n){return e(n.target.value)},children:[Object(o.jsx)(d,{value:"-createdAt",children:"M\xe1s recientes"}),Object(o.jsx)(d,{value:"createdAt",children:"M\xe1s antiguos"}),Object(o.jsx)(d,{value:"price",children:"Menor precio"}),Object(o.jsx)(d,{value:"-price",children:"Mayor precio"}),Object(o.jsx)(d,{value:"-sold",children:"Populares"})]})}},68:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return b})),t.d(e,"c",(function(){return x}));var r=t(3),a=t(2),i=t(16),c=t(1),o=t(11);var s,d,l=t.p+"static/media/shopping-cart-solid.f0d47d21.svg",u=t(0),p=a.b.button(s||(s=Object(r.a)(["\nposition:relative;\nmargin-left:auto;\nmargin-top:auto;\nbox-shadow: ",";\npadding:20px 0;\nwidth:50px;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nbackground: ","  ;\noutline:none;\nborder:none;\nborder-radius: 4px;\nfont-weight:600;\ncursor:pointer;\nfont-size:20px;\ncolor:#fff;\ntransition: all 0.3s ease;\n&:hover{\n  background:",";\n}"])),(function(n){return n.theme.lightBoxShadow}),(function(n){return n.isAdded?n.theme.darckYellow:n.theme.black}),(function(n){return n.theme.darckYellow})),b=a.b.img(d||(d=Object(r.a)(["\nwidth:20px;\nheight:20px;\ntransition: all 05s ease;\n\n"])));function x(n){var e=n.thisProductInfo,t=function(n){var e=Object(o.a)(),t=e.cartProducts,r=e.addToCart,a=e.addToTotalCost,s=Object(c.useState)(!1),d=Object(i.a)(s,2),l=d[0],u=d[1],p=t.map((function(n){return n.info._id}));return Object(c.useEffect)((function(){-1!==p.indexOf(n._id)?u(!0):u(!1)}),[p,n]),{handlerAddToCartAndAddToTotalCost:function(n,e){if(-1===p.indexOf(n._id))return a(e),void r({info:n,quantity:1})},isAdded:l}}(e),r=t.handlerAddToCartAndAddToTotalCost,a=t.isAdded;return Object(u.jsx)(p,{isAdded:a,onClick:function(){return r(e,parseInt(null===e||void 0===e?void 0:e.price))},children:Object(u.jsx)(b,{style:{position:"absolute"},src:l,alt:"add-to-cart"})})}},69:function(n,e,t){"use strict";e.a=t.p+"static/media/default-image.02bd9b08.png"},72:function(n,e,t){"use strict";t.r(e),t.d(e,"SectionTitle",(function(){return L})),t.d(e,"ProductsSection",(function(){return E})),t.d(e,"NotFaundMessage",(function(){return Y})),t.d(e,"ButtonsWrapper",(function(){return q}));var r=t(3),a=t(2),i=t(1),c=t(35),o=t(73),s=t(12),d=t.n(s),l=t(15),u=t(16),p=t(5),b=t(11);var x,j,f,h,g,O,m,v,w,y,k=t(74),S=t(67),C=t(77),P=t(75),A=t(68),T=t(0),z=a.b.main(x||(x=Object(r.a)(["\nmin-height:100vh;\nwidth:100vw;\npadding: 65px 0 20px;\nmargin:0;\nmargin-bottom:20px;\ntext-aling:center;\n\n"]))),L=a.b.h2(j||(j=Object(r.a)(["\ntext-align:center;\ntext-transform: uppercase;\n    margin-bottom: 40px;\ncolor:",";\n text-shadow: ",";\n"])),(function(n){return n.light?"#fff":"#fcba1c"}),(function(n){return n.theme.darckTextShadow})),B=a.b.section(f||(f=Object(r.a)(["\ndisplay:flex;\nflex-direction: column;\nflex-wrap: wrap;\npadding-bottom: 20px ;\nwidth:100%;\n    & >"," {\n  position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 500;\n    margin: -60px 0  0 -60px ;\n \n}\n"])),c.a),M=a.b.h4(h||(h=Object(r.a)(["\n    text-align: center;\n    line-height: 15px;\n    color: #fcba1c;\n    font-size: 28px;\n    margin: 10px 5px;\n text-shadow: ",';\n    text-transform: capitalize;\n&:before {\n  content:".";\n}\n'])),(function(n){return n.theme.darckTextShadow})),_=a.b.div(g||(g=Object(r.a)(["\nwidth:100vw;\n    margin: 30px auto 40px\n"]))),I=a.b.section(O||(O=Object(r.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    background: ",";\n    justify-content: center;\n    margin: -10px 0 20px;\n    padding:  20px 15px;\n    box-shadow: inset 0 0 20px 0 #1111118c;\n\n"])),(function(n){return n.theme.darckRed})),E=a.b.div(m||(m=Object(r.a)(["\n    &:before{\n    display: ",';\n      position:absolute;\n      content:" ";\n      top:0;\n      left:0;\n    right:0;\n    bottom:0;\n    background:#ffffff57;\n    z-index:400;\n    }\n    width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 0 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n\n'])),(function(n){return n.isLoading?"block":"none"})),Y=a.b.h4(v||(v=Object(r.a)(["\nmargin-top: 20px;\ndisplay:block;\nwidth:100%;\n"]))),q=a.b.div(w||(w=Object(r.a)(["\ndisplay:flex;\njustify-content:center;\nwidth:100%;\ngap:15px;\n&> button{\n  padding: 5px 10px 6px;\n  cursor:pointer;\n  background:",";\n    color:",";\nbox-shadow:",";\n    border:transparent;\n    outline:transparent;\n    fornt-size:20px;\n    font-family:oswald;\n    lettter-spacing: 1px;\n    border: 2px solid ",";\n}\n@media screen and (min-width:500px){\n  &> button{\n    transform:scale(1.1);\n  }\n}\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.darckYellow}),(function(n){return n.theme.ligthBoxShadow}),(function(n){return n.theme.darckYellow})),F=a.b.div(y||(y=Object(r.a)(["\n    flex-wrap: wrap;\n    margin: 0 15px 20px;\n    display: flex;\n    align-items: center;\n    max-width: max-content;\n    & > select {\n      margin: 0 10px 10px 0;\n   \n}\n\n"])));e.default=function(){var n=function(){var n=Object(p.g)(),e=Object(p.h)(),t=Object(b.a)().categories,r=null===t||void 0===t?void 0:t.filter((function(n){return(null===n||void 0===n?void 0:n.quantity)>0})),a=new URLSearchParams,c=Object(i.useState)(!1),o=Object(u.a)(c,2),s=o[0],x=o[1],j=Object(i.useState)(1),f=Object(u.a)(j,2),h=f[0],g=f[1],O=Object(i.useState)(1),m=Object(u.a)(O,2),v=m[0],w=m[1],y=Object(i.useState)([]),k=Object(u.a)(y,2),S=k[0],C=k[1],P=Object(i.useState)("all"),A=Object(u.a)(P,2),T=A[0],z=A[1],L=Object(i.useState)("-createdAt"),B=Object(u.a)(L,2),M=B[0],_=B[1],I=Object(i.useState)(""),E=Object(u.a)(I,2),Y=E[0],q=E[1],F=Object(i.useState)(!0),N=Object(u.a)(F,2),D=N[0],J=N[1];return a.append("active",!0),a.append("sort",M),a.append("page",h),a.append("limit",6),Object(i.useEffect)((function(){g(1)}),[M]),Object(i.useEffect)((function(){var t=new AbortController,r=t.signal;return x(!0),function(){var t=Object(l.a)(d.a.mark((function t(){var i,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D&&""!==e.search&&(a=e.search.split("?")[1],J(!1)),""!==Y&&(a.append("title",Y),g(1),_("-createdAt"),z("all")),"all"!==T&&(a.append("category",T),g(1)),t.prev=3,t.next=6,fetch("/api/products?".concat(a),{signal:r});case 6:return i=t.sent,t.next=9,i.json();case 9:c=t.sent,C(c.data),o=parseInt(c.total),w(Math.ceil(o/6)),n.push("/menu?".concat(a)),document.querySelector("body").scrollTo(0,100),x(!1),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(3),"AbortError"===t.t0.name?console.log("Fetch Canseled: caught abort"):console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[3,18]])})));return function(){return t.apply(this,arguments)}}()(),function(){t.abort()}}),[Y,M,h,T]),{isLoading:s,maxPage:v,products:S,populatedCategories:r,page:h,setPage:g,setCategory:z,setSorting:_,setTitle:q}}(),e=n.isLoading,t=n.maxPage,r=n.products,a=n.populatedCategories,s=n.sorting,x=n.page,j=n.setPage,f=n.setCategory,h=n.setSorting,g=n.setTitle;return Object(T.jsxs)(z,{children:[Object(T.jsx)(L,{children:"Men\xfa"}),Object(T.jsx)(_,{children:Object(T.jsx)(k.a,{setSearch:g})}),Object(T.jsxs)(B,{children:[Object(T.jsx)(I,{children:null===a||void 0===a?void 0:a.map((function(n,e){return Object(T.jsx)(M,{children:n.name},e)}))}),Object(T.jsxs)(F,{children:[Object(T.jsx)(C.a,{categories:a,setCategoryPreferece:f}),Object(T.jsx)(S.c,{setSortPreferece:h,sortPreference:s})]}),e?Object(T.jsxs)(i.Fragment,{children:[Object(T.jsx)(o.a,{}),Object(T.jsx)(c.a,{})]}):null,Object(T.jsx)(E,{isLoading:e,children:e||0!==(null===r||void 0===r?void 0:r.length)?null===r||void 0===r?void 0:r.map((function(n){return Object(T.jsx)(P.a,{"data-testid":"productItem",item:n,children:Object(T.jsx)(A.c,{thisProductInfo:n})},n._id)})):Object(T.jsx)(Y,{children:"No se han encontrado coincidencias, intenta de nuevo!!"})})]}),Object(T.jsxs)(q,{children:[x>1?Object(T.jsxs)("button",{onClick:function(n){return j(x-1)},children:["<< ","Prev"]}):null,x<t?Object(T.jsxs)("button",{onClick:function(n){return j(x+1)},children:["Next"," >>"]}):null]})]})}},73:function(n,e,t){"use strict";t.d(e,"a",(function(){return x}));var r,a,i,c,o=t(3),s=t(2),d=t(0),l=s.b.section(r||(r=Object(o.a)(["\n width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 10px 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n"]))),u=s.b.figure(a||(a=Object(o.a)(["\ndisplay:flex;\nbox-sizing:border-box;\nborder-radius:5px;\nposition:relative;\nmin-width: 250px;\nheight:350px;\nflex-flow:column;\nover-flow:hidden;\npadding:20px;\nborder: 1px solid #00000026;\nbox-shadow: 1px 1px 5px #00000057;\nbackground:#f3f3f3;\n"]))),p=s.b.div(i||(i=Object(o.a)(["\nheight:150px;\nwidth:100%;\npositon:relative;\ndisplay:flex;\nbackground:#fff;\nmargin-bottom:10px;\nborder-radius:5px;\nbox-shadow: 0 1px 3px #ccc;\n \n"]))),b=s.b.div(c||(c=Object(o.a)(["\nheight:20px;\nwidth:100%;\nbackground:#fff;\nmargin: 10px auto;\nbox-shadow: 0 1px 3px #ccc;\n"])));function x(){return Object(d.jsxs)(l,{children:[Object(d.jsxs)(u,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]})]})}},74:function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var r,a,i,c,o=t(3),s=t(2),d=t.p+"static/media/loupe.21575f61.svg",l=t(0),u=s.b.form(r||(r=Object(o.a)(["\nwidth:max-content;\nmargin:0 auto;\nposition:relative;\n"]))),p=s.b.input(a||(a=Object(o.a)(["\nposition:relative;\nwidth:200px;\npadding: 8px;\npadding-left: 15px;\nborder-radius: 15px;\noutline: none;\nbox-shadow: ",";\ntransition: all 0.5s ease;\nborder:none;\nmargin-left: -6px;\nposition: relative;\n&:focus{\n  width:250px;\nbox-shadow: 0 0 10px rgba(0,0,0,0.2);\n  \n}\n&::placeholder {\n    font-size: 14px;\n\n}\n&:focus + div{\n  margin-left: 210px;\n  \n}\n&::-webkit-search-cancel-button{\n  display:none;\n}\n"])),(function(n){return n.theme.lightBoxShadow})),b=s.b.div(i||(i=Object(o.a)(["\nwidth:30px;\nheight:30px;\nposition:absolute;\nmargin-top:-34px;\nmargin-left: 160px;\ntransition: all 0.5s ease;\ntransform:scale(0.7);\n"]))),x=s.b.img(c||(c=Object(o.a)([" \nheight: 100%;\n"])));function j(n){var e=n.setSearch,t=n.placeholder;return Object(l.jsxs)(u,{onSubmit:function(n){var t,r;n.preventDefault();var a=null===(t=n.target)||void 0===t||null===(r=t.search)||void 0===r?void 0:r.value;e(a)},children:[Object(l.jsx)(p,{name:"search",placeholder:t||"Buscar...",type:"search",onChange:function(n){""===n.target.value&&e("")}}),Object(l.jsx)(b,{children:Object(l.jsx)(x,{src:d,alt:"search"})})]})}},75:function(n,e,t){"use strict";var r,a,i,c,o,s,d,l=t(16),u=t(3),p=t(2),b=t(1),x=t(5),j=t(69),f=t(0),h=p.b.article(r||(r=Object(u.a)(["\ndisplay:flex;\nbox-sizing:border-box;\nborder-radius:5px;\nposition:relative;\n\nmin-width: 250px;\nheight:350px;\nflex-flow:column;\nover-flow:hidden;\npadding:20px;\nborder: 1px solid #00000026;\nbox-shadow: 1px 1px 5px #00000057;\n"]))),g=p.b.div(a||(a=Object(u.a)(["\ndisplay:flex;\nalign-items:center;\npadding-bottom:5px;\n"]))),O=p.b.h3(i||(i=Object(u.a)(['\ntext-decoration:none;\nmargin-bottom:2px;\n  color: #272727;\nletter-spasing:0;\ncursor:pointer;\nline-height:35px;\ntext-transform:capitalize ;\ntransition: all 0.5s;\n  font-family: "Oswald", sans-serif;\n  font-size: 25px;\n&:hover {\n      color: color: rgb(0 0 0 / 50%);\n\n}\n']))),m=p.b.small(c||(c=Object(u.a)(["\nalign-self: flex-start;\n    color: rgba(0,0,0,0.8);\n    font-weight: 600;\n    margin: 10px;\n    margin-top: 8px;\n"]))),v=p.b.h4(o||(o=Object(u.a)(['\n    align-self: end;\n    color: #fcba1c;\n    margin:0;\n&:before{\n  content:"$";\n}\n']))),w=p.b.div(s||(s=Object(u.a)(["\nheight:150px;\nwidth:100%;\noverflow:hidden;\npositon:relative;\ndisplay:flex;\njustify-content:center;\nmargin-bottom:10px;\nborder-radius:5px;\nbox-shadow: 0 1px 3px #ccc;\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n    backface-visibility: hidden;\n    background-position: center;\n"])),(function(n){return n.isLoaded?"none":"url(".concat(j.a,")")})),y=p.b.img(d||(d=Object(u.a)(["\ntransition:all 0.5s ease;\nheight:100%;\n&:hover{\n  transform:scale(0.8);\n}\n\n"])));e.a=function(n){var e=Object(x.g)(),t=Object(x.h)(),r=n.item,a=Object(b.useState)(!1),i=Object(l.a)(a,2),c=i[0],o=i[1];return Object(f.jsxs)(h,{children:[Object(f.jsx)(w,{isLoaded:c,children:Object(f.jsx)(y,{src:null===r||void 0===r?void 0:r.img,onLoad:function(){return o(!0)},alt:r.name})}),Object(f.jsx)(O,{onClick:function(){return n=r._id,e.push({pathname:"/menu/"+n,search:"?from="+t.pathname});var n},children:r.name}),Object(f.jsxs)(g,{children:[Object(f.jsx)(v,{children:r.price})," ",Object(f.jsxs)(m,{children:[r.size,"  "]}),"  "]}),n.children]},r._id)}},77:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(67),a=t(0);function i(n){var e=n.categories,t=n.setCategoryPreferece;return Object(a.jsxs)(r.b,{name:"filterProductsByCategory",onChange:function(n){return function(n){n.preventDefault(),t(n.target.value)}(n)},children:[Object(a.jsx)(r.a,{value:"all",children:"Todas las categor\xedas"}),null===e||void 0===e?void 0:e.map((function(n){return Object(a.jsx)(r.a,{value:n.name,children:n.name},n._id)}))]})}}}]);
//# sourceMappingURL=10.438d0d0c.chunk.js.map