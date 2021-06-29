(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[11],{130:function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return d})),t.d(e,"c",(function(){return p}));var a,r,i=t(3),c=t(2),o=t(0),s=c.b.select(a||(a=Object(i.a)(["\n    color: rgb(0 0 0 / 50%);\n    padding: 7px;\n    border-radius: 5px;\n    outline: none;\n    cursor: pointer;\n    font-size: 14px;\n    margin: 0;\n    border: none;\n    margin-bottom: 20px;\n    background: #fff;\nbox-shadow:  1px 1px 6px 0px #ccc;\n    text-transform: capitalize;\n    margin: 0 20px 20px auto;\n\n"]))),d=c.b.option(r||(r=Object(i.a)(["\n&:checked{\n   background: #fcba1c;\n}\n"])));function p(n){var e=n.setSortPreferece;return Object(o.jsxs)(s,{name:"sortProductBy",onChange:function(n){return e(n.target.value)},children:[Object(o.jsx)(d,{value:"-createdAt",children:"M\xe1s recientes"}),Object(o.jsx)(d,{value:"createdAt",children:"M\xe1s antiguos"}),Object(o.jsx)(d,{value:"price",children:"Menor precio"}),Object(o.jsx)(d,{value:"-price",children:"Mayor precio"}),Object(o.jsx)(d,{value:"-sold",children:"Populares"})]})}},132:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a,r=t(3),i=t(2),c=t(0),o=i.b.div(a||(a=Object(r.a)(["\ndisplay:flex;\njustify-content:center;\nwidth:100%;\ngap:15px;\n&> button{\n  padding: 5px 10px 6px;\n  cursor:pointer;\n  background:",";\n    color:",";\nbox-shadow:",";\n    border:transparent;\n    outline:transparent;\n    fornt-size:20px;\n    font-family:oswald;\n    lettter-spacing: 1px;\n    border-radius: 10px;\n}\n@media screen and (min-width:500px){\n  &> button{\n    transform:scale(1.1);\n  }\n}\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.darckYellow}),(function(n){return n.theme.lightBoxShadow}));function s(n){var e=n.page,t=n.maxPage,a=n.setPage;return Object(c.jsxs)(o,{children:[e>1?Object(c.jsxs)("button",{onClick:function(n){return a(e-1)},children:["<< ","Prev"]}):null,e<t?Object(c.jsxs)("button",{onClick:function(n){return a(e+1)},children:["Next"," >>"]}):null]})}},134:function(n,e,t){"use strict";t.r(e),t.d(e,"SectionTitle",(function(){return T})),t.d(e,"ProductsSection",(function(){return I})),t.d(e,"NotFaundMessage",(function(){return R}));var a=t(3),r=t(2),i=t(53),c=t(31),o=t(136),s=t(5),d=t.n(s),p=t(10),u=t(6),l=t(1),b=t(8),x=t(7);var j,f,h,g,O,m,v,w,y,k=t(137),S=t(130),P=t(140),z=t(132),C=t(135),L=t(0),M=r.b.main(j||(j=Object(a.a)(["\nmin-height:100vh;\nwidth:100vw;\npadding: 65px 0 20px;\nmargin:0;\nmargin-bottom:20px;\ntext-aling:center;\n\n"]))),T=r.b.h2(f||(f=Object(a.a)(["\ntext-align:center;\ntext-transform: uppercase;\n    margin-bottom: 40px;\ncolor:",";\n text-shadow: ",";\n"])),(function(n){return n.light?"#fff":"#fcba1c"}),(function(n){return n.theme.darckTextShadow})),A=r.b.section(h||(h=Object(a.a)(["\ndisplay:flex;\nflex-direction: column;\nflex-wrap: wrap;\npadding-bottom: 20px ;\nwidth:100%;\n    & >"," {\n  position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 500;\n    margin: -60px 0  0 -60px ;\n \n}\n"])),c.a),B=r.b.h4(g||(g=Object(a.a)(["\n    text-align: center;\n    line-height: 15px;\n    color: #fcba1c;\nfont-size: 25px;\n    margin: 10px 5px;\n text-shadow: ",';\n    text-transform: capitalize;\n&:before {\n  content:".";\n}\n'])),(function(n){return n.theme.darckTextShadow})),E=r.b.div(O||(O=Object(a.a)(["\nwidth:100vw;\n    margin: 30px auto 40px\n"]))),F=r.b.section(m||(m=Object(a.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    background: ",";\n    justify-content: center;\n    margin: -10px 0 20px;\n    padding:  20px 15px;\n    box-shadow: inset 0 0 20px 0 #1111118c;\n\n"])),(function(n){return n.theme.darckRed})),I=r.b.div(v||(v=Object(a.a)(["\n    &:before{\n    display: ",';\n      position:absolute;\n      content:" ";\n      top:0;\n      left:0;\n    right:0;\n    bottom:0;\n    background:#ffffff57;\n    z-index:400;\n    }\n    width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 0 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n\n'])),(function(n){return n.isLoading?"block":"none"})),R=r.b.h4(w||(w=Object(a.a)(["\nmargin-top: 20px;\ndisplay:block;\nwidth:100%;\n"]))),_=r.b.div(y||(y=Object(a.a)(["\n    flex-wrap: wrap;\n    margin: 0 15px 20px;\n    display: flex;\n    align-items: center;\n    max-width: max-content;\n    & > select {\n      margin: 0 10px 10px 0;\n   \n}\n\n"])));e.default=Object(i.a)((function(){var n=function(){var n=Object(b.g)(),e=Object(b.h)(),t=Object(x.a)().categories,a=null===t||void 0===t?void 0:t.filter((function(n){return(null===n||void 0===n?void 0:n.quantity)>0})),r=new URLSearchParams,i=Object(l.useState)(!1),c=Object(u.a)(i,2),o=c[0],s=c[1],j=Object(l.useState)(1),f=Object(u.a)(j,2),h=f[0],g=f[1],O=Object(l.useState)(1),m=Object(u.a)(O,2),v=m[0],w=m[1],y=Object(l.useState)([]),k=Object(u.a)(y,2),S=k[0],P=k[1],z=Object(l.useState)("all"),C=Object(u.a)(z,2),L=C[0],M=C[1],T=Object(l.useState)("-createdAt"),A=Object(u.a)(T,2),B=A[0],E=A[1],F=Object(l.useState)(""),I=Object(u.a)(F,2),R=I[0],_=I[1],N=Object(l.useState)(!0),q=Object(u.a)(N,2),D=q[0],J=q[1];return r.append("active",!0),r.append("sort",B),r.append("page",h),r.append("limit",6),Object(l.useEffect)((function(){g(1)}),[B]),Object(l.useEffect)((function(){"all"!==L&&(r.append("category",L),g(1))}),[L]),Object(l.useEffect)((function(){""!==R&&(r.append("title",R),g(1),E("-createdAt"),M("all"))}),[R]),Object(l.useEffect)((function(){var t=new AbortController,a=t.signal;return s(!0),D&&""!==e.search&&(r=e.search.split("?")[1]),function(){var e=Object(p.a)(d.a.mark((function e(){var t,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/products?".concat(r),{signal:a});case 3:return t=e.sent,e.next=6,t.json();case 6:i=e.sent,P(i.data),c=parseInt(i.total),w(Math.ceil(c/6)),n.push("/menu?".concat(r)),document.querySelector("body").scrollTo(0,100),s(!1),J(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Fetch Canseled: caught abort"):console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}()(),function(){t.abort()}}),[R,B,h,L]),{isLoading:o,maxPage:v,products:S,populatedCategories:a,page:h,setPage:g,setCategory:M,setSorting:E,setTitle:_,isFirstRender:D}}(),e=n.isLoading,t=n.maxPage,a=n.products,r=n.populatedCategories,i=n.sorting,s=n.page,j=n.setPage,f=n.setCategory,h=n.setSorting,g=n.setTitle,O=n.isFirstRender;return Object(L.jsxs)(M,{children:[Object(L.jsx)(T,{children:"Men\xfa"}),Object(L.jsx)(E,{children:Object(L.jsx)(k.a,{setSearch:g})}),Object(L.jsxs)(A,{children:[Object(L.jsx)(F,{children:null===r||void 0===r?void 0:r.map((function(n,e){return Object(L.jsx)(B,{children:n.name},e)}))}),Object(L.jsxs)(_,{children:[Object(L.jsx)(P.a,{categories:r,setCategoryPreferece:f}),Object(L.jsx)(S.c,{setSortPreferece:h,sortPreference:i})]}),e&&Object(L.jsx)(c.a,{}),e&&O?Object(L.jsx)(o.a,{}):Object(L.jsx)(C.c,{isLoading:e,products:a})]}),Object(L.jsx)(z.a,{setPage:j,page:s,maxPage:t})]})}))},135:function(n,e,t){"use strict";t.d(e,"b",(function(){return p})),t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return l}));var a,r,i=t(3),c=t(2),o=t(138),s=t(55),d=t(0),p=c.b.div(a||(a=Object(i.a)(["\n    &:before{\n    display: ",';\n      position:absolute;\n      content:" ";\n      top:0;\n      left:0;\n    right:0;\n    bottom:0;\n    background:#ffffff57;\n    z-index:400;\n    }\n    width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 0 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n\n'])),(function(n){return n.isLoading?"block":"none"})),u=c.b.h4(r||(r=Object(i.a)(["\nmargin-top: 20px;\ndisplay:block;\nwidth:100%;\n"])));function l(n){var e=n.isLoading,t=n.products;return Object(d.jsx)(p,{children:e||0!==(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(n){return Object(d.jsx)(o.a,{"data-testid":"productItem",item:n,children:Object(d.jsx)(s.c,{thisProductInfo:n})},n._id)})):Object(d.jsx)(u,{children:"No se han encontrado coincidencias, intenta de nuevo!!"})})}},136:function(n,e,t){"use strict";t.d(e,"a",(function(){return x}));var a,r,i,c,o=t(3),s=t(2),d=t(0),p=s.b.section(a||(a=Object(o.a)(["\n width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 10px 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n"]))),u=s.b.figure(r||(r=Object(o.a)(["\ndisplay:flex;\nbox-sizing:border-box;\nborder-radius:5px;\nposition:relative;\nmin-width: 250px;\nheight:350px;\nflex-flow:column;\nover-flow:hidden;\npadding:20px;\nborder: 1px solid #00000026;\nbox-shadow: 1px 1px 5px #00000057;\nbackground:#f3f3f3;\n"]))),l=s.b.div(i||(i=Object(o.a)(["\nheight:150px;\nwidth:100%;\npositon:relative;\ndisplay:flex;\nbackground:#fff;\nmargin-bottom:10px;\nborder-radius:5px;\nbox-shadow: 0 1px 3px #ccc;\n \n"]))),b=s.b.div(c||(c=Object(o.a)(["\nheight:20px;\nwidth:100%;\nbackground:#fff;\nmargin: 10px auto;\nbox-shadow: 0 1px 3px #ccc;\n"])));function x(){return Object(d.jsxs)(p,{"data-testid":"products-skeketom",children:[Object(d.jsxs)(u,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]}),Object(d.jsxs)(u,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(b,{}),Object(d.jsx)(b,{})]})]})}},137:function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var a,r,i,c,o=t(3),s=t(2),d=t.p+"static/media/loupe.21575f61.svg",p=t(0),u=s.b.form(a||(a=Object(o.a)(["\nwidth:max-content;\nmargin:0 auto;\nposition:relative;\n"]))),l=s.b.input(r||(r=Object(o.a)(["\nposition:relative;\nwidth:200px;\npadding: 8px;\npadding-left: 15px;\nborder-radius: 15px;\noutline: none;\nbox-shadow: ",";\ntransition: all 0.5s ease;\nborder:none;\nmargin-left: -6px;\nposition: relative;\n&:focus{\n  width:250px;\nbox-shadow: 0 0 10px rgba(0,0,0,0.2);\n  \n}\n&::placeholder {\n    font-size: 14px;\n\n}\n&:focus + div{\n  margin-left: 210px;\n  \n}\n&::-webkit-search-cancel-button{\n  display:none;\n}\n"])),(function(n){return n.theme.lightBoxShadow})),b=s.b.div(i||(i=Object(o.a)(["\nwidth:30px;\nheight:30px;\nposition:absolute;\nmargin-top:-34px;\nmargin-left: 160px;\ntransition: all 0.5s ease;\ntransform:scale(0.7);\n"]))),x=s.b.img(c||(c=Object(o.a)([" \nheight: 100%;\n"])));function j(n){var e=n.setSearch,t=n.placeholder;return Object(p.jsxs)(u,{onSubmit:function(n){var t,a;n.preventDefault();var r=null===(t=n.target)||void 0===t||null===(a=t.search)||void 0===a?void 0:a.value;e(r)},children:[Object(p.jsx)(l,{name:"search",placeholder:t||"Buscar...",type:"search",onChange:function(n){""===n.target.value&&e("")}}),Object(p.jsx)(b,{children:Object(p.jsx)(x,{src:d,alt:"search"})})]})}},138:function(n,e,t){"use strict";var a,r,i,c,o,s,d,p=t(6),u=t(3),l=t(2),b=t(1),x=t(8),j=t(58),f=t(0),h=l.b.article(a||(a=Object(u.a)(["\ndisplay:flex;\nbox-sizing:border-box;\nborder-radius:5px;\nposition:relative;\n\nmin-width: 250px;\nheight:350px;\nflex-flow:column;\nover-flow:hidden;\npadding:20px;\nborder: 1px solid #00000026;\nbox-shadow: 1px 1px 5px #00000057;\n"]))),g=l.b.div(r||(r=Object(u.a)(["\ndisplay:flex;\nalign-items:center;\npadding-bottom:5px;\n"]))),O=l.b.h3(i||(i=Object(u.a)(['\ntext-decoration:none;\nmargin-bottom:2px;\n  color: #272727;\nletter-spasing:0;\ncursor:pointer;\nline-height:35px;\ntext-transform:capitalize ;\ntransition: all 0.5s;\n  font-family: "Oswald", sans-serif;\n  font-size: 25px;\n&:hover {\n      color: color: rgb(0 0 0 / 50%);\n\n}\n']))),m=l.b.small(c||(c=Object(u.a)(["\nalign-self: flex-start;\n    color: rgba(0,0,0,0.8);\n    font-weight: 600;\n    margin: 10px;\n    margin-top: 8px;\n"]))),v=l.b.h4(o||(o=Object(u.a)(['\n    align-self: end;\n    color: #fcba1c;\n    margin:0;\n&:before{\n  content:"$";\n}\n']))),w=l.b.div(s||(s=Object(u.a)(["\nheight:150px;\nwidth:100%;\noverflow:hidden;\npositon:relative;\ndisplay:flex;\njustify-content:center;\nmargin-bottom:10px;\nborder-radius:5px;\nbox-shadow: 0 1px 3px #ccc;\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n    backface-visibility: hidden;\n    background-position: center;\n"])),(function(n){return n.isLoaded?"none":"url(".concat(j.a,")")})),y=l.b.img(d||(d=Object(u.a)(["\ntransition:all 0.5s ease;\nheight:100%;\n&:hover{\n  transform:scale(0.8);\n}\n\n"])));e.a=function(n){var e=Object(x.g)(),t=Object(x.h)(),a=n.item,r=Object(b.useState)(!1),i=Object(p.a)(r,2),c=i[0],o=i[1];return Object(f.jsxs)(h,{"data-testid":"productItem",children:[Object(f.jsx)(w,{isLoaded:c,children:Object(f.jsx)(y,{src:null===a||void 0===a?void 0:a.img,onLoad:function(){return o(!0)},alt:a.name})}),Object(f.jsx)(O,{onClick:function(){return n=a._id,e.push({pathname:"/menu/"+n,search:"?from="+t.pathname});var n},children:a.name}),Object(f.jsxs)(g,{children:[Object(f.jsx)(v,{children:a.price})," ",Object(f.jsxs)(m,{children:[a.size,"  "]}),"  "]}),n.children]},a._id)}},140:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=t(130),r=t(0);function i(n){var e=n.categories,t=n.setCategoryPreferece;return Object(r.jsxs)(a.b,{name:"filterProductsByCategory",onChange:function(n){return function(n){n.preventDefault(),t(n.target.value)}(n)},children:[Object(r.jsx)(a.a,{value:"all",children:"Todas las categor\xedas"}),null===e||void 0===e?void 0:e.map((function(n){return Object(r.jsx)(a.a,{value:n.name,children:n.name},n._id)}))]})}}}]);
//# sourceMappingURL=11.74e2dbb5.chunk.js.map