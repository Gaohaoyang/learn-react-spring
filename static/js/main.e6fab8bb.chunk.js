(this["webpackJsonplearn-react-spring"]=this["webpackJsonplearn-react-spring"]||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),l=a.n(i),c=(a(30),a(14)),o=a(3),u=(a(31),a(32),a(2));var s=function(){var e=Object(u.c)({opacity:1,from:{opacity:0}});return r.a.createElement(u.a.div,{style:e},"I will fade in")};var m=function(){var e=Object(u.c)({number:10,from:{number:0}}).number;return r.a.createElement(u.a.div,null,e)};var p=function(){var e=Object(u.c)({scroll:200,from:{scroll:0}}).scroll;return r.a.createElement(u.a.div,{scrollTop:e,style:{height:"100px",overflowY:"auto"}},r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe in quae dolorum deleniti recusandae, quisquam perspiciatis quod officia quos, nam aliquam! Neque, tempore voluptatum illo libero quos obcaecati ipsum."),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus iure alias eum nemo magni aspernatur facere excepturi ducimus esse quidem, sint assumenda aut rem nobis maxime. Numquam, eligendi hic?"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ex ullam. Voluptatem ad quis maiores alias perspiciatis sunt adipisci hic cum quam labore, laudantium reprehenderit optio molestias exercitationem, sed eaque?"),r.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quia soluta suscipit porro dolore laborum tempora, repellendus sunt obcaecati quo a aspernatur reprehenderit doloremque repudiandae. Temporibus optio facere provident!"),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quia asperiores quaerat reiciendis magnam perferendis iste veniam atque! Labore assumenda possimus optio veniam maiores culpa distinctio quos accusantium, reiciendis eligendi?"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt, deleniti impedit suscipit laudantium expedita temporibus sapiente harum, sunt cumque architecto est illum quisquam fugiat nostrum quibusdam assumenda ipsam. Rem."))};var d=function(){var e=Object(u.c)({from:{color:"#ef5350",o:0,xyz:[0,0,0]},color:"#283593",o:1,xyz:[10,6,5]}),t=e.color,a=e.o,n=e.xyz;return r.a.createElement(u.a.div,{style:{color:t,background:a.interpolate((function(e){return"rgba(253, 216, 53, ".concat(e,")")})),transform:n.interpolate((function(e,t,a){return"translate3d(".concat(e,"px, ").concat(t,"px, ").concat(a,"px)")})),border:Object(u.b)([a,t],(function(e,t){return"".concat(5*e,"px solid ").concat(t)})),padding:a.interpolate({range:[0,.8,1],output:[0,0,10]}).interpolate((function(e){return"".concat(e,"%")})),borderColor:a.interpolate({range:[0,1],output:["red","#ffaabb"]}),opacity:a.interpolate([.1,.2,.6,1],[1,.1,.5,1])}},a.interpolate((function(e){return e.toFixed(2)})))},E=a(9),f=a(22);var v=function(){var e=Object(f.a)(),t=Object(E.a)(e,2),a=t[0],i=t[1],l=Object(u.c)({from:{opacity:1},opacity:i.width<249?0:1}).opacity;return r.a.createElement(u.a.div,{ref:a,style:{position:"relative",opacity:l}},Object.keys(i).map((function(e){return r.a.createElement(n.Fragment,{key:e},r.a.createElement("span",null,e,"---"),r.a.createElement("span",null,Math.round(i[e]),"px"),r.a.createElement("br",null))})))};var b=function(){var e=Object(n.useState)(!0),t=Object(E.a)(e,2),a=t[0],i=t[1],l=Object(u.c)({x:a?1:0,from:{x:0},config:{duration:1e3}}).x;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(u.a.div,{onClick:function(){i(!a)},style:{transform:l.interpolate({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]}).interpolate((function(e){return"scale(".concat(e,")")}))}},"kkkkeyframes click me!"))};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Basics"),r.a.createElement("div",{className:"panel"},r.a.createElement(s,null)),r.a.createElement("div",{className:"panel"},r.a.createElement(m,null)),r.a.createElement("div",{className:"panel"},r.a.createElement(p,null)),r.a.createElement("h2",null,"interpolate"),r.a.createElement("div",{className:"panel"},r.a.createElement(d,null)),r.a.createElement("h2",null,"useResizeAware"),r.a.createElement("div",{className:"panel"},r.a.createElement(v,null)),r.a.createElement("h2",null,"Emulating keyframes"),r.a.createElement("div",{className:"panel"},r.a.createElement(b,null)))},h=a(23),y=(a(34),function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]}),x=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")};var q=function(){var e=Object(u.c)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),t=Object(E.a)(e,2),a=t[0],n=t[1],i=Object(h.a)((function(e){var t=e.down,a=Object(E.a)(e.movement,2),r=a[0],i=a[1];console.log(t,r,i,y(r,i)),n({xys:t?y(r,i):[0,0,1]})}));return r.a.createElement("div",{className:"container"},r.a.createElement(u.a.div,Object.assign({},i(),{className:"card",style:{transform:a.xys.interpolate(x)}})))};var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Spring"),r.a.createElement(q,null))};var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Intro"),r.a.createElement("p",null,"\u672c\u9875\u9762\u4e3b\u8981\u662f\u6211\u5b66\u4e60\u548c\u4f7f\u7528 react-spring \u65f6\u7684\u4e00\u4e9b demo"))};var O=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"content-wrap"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Intro")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/Basics"},"Basics")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/useSpring"},"useSpring")))),r.a.createElement("div",{className:"context-wrap"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(o.a,{path:"/Basics"},r.a.createElement(g,null)),r.a.createElement(o.a,{path:"/useSpring"},r.a.createElement(w,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e6fab8bb.chunk.js.map