"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[751],{5545:function(n,t,e){e.d(t,{Z:function(){return w}});e(2791);var r,i,a,o,c,s,l=e(1523),u=e(9271),d=e(9391),p=(e(1009),e(2426)),g=e.n(p),f=(e(3333),e(4289),e(168)),h=e(6031),m=h.ZP.ul(r||(r=(0,f.Z)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n    grid-gap: 16px;\n    border-radius: 8px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 15px 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),x=h.ZP.li(i||(i=(0,f.Z)(["\n    position: relative;\n    img {\n        border-radius: 8px;\n    }\n    &:hover {\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1.03);\n        cursor: zoom-in;\n    }\n"]))),v=h.ZP.div(a||(a=(0,f.Z)(["\n    justify-content: center;\n    padding-top: 20px;\n    padding-bottom: 10px;\n"]))),Z=h.ZP.h2(o||(o=(0,f.Z)(["\n    font-weight: 700;\n    font-size: 1em;\n    color: black;\n"]))),b=h.ZP.p(c||(c=(0,f.Z)(["\n    font-weight: 400;\n    font-size: 1em;\n    color: rgba(0, 0, 0, 0.6);\n"]))),j=h.ZP.div(s||(s=(0,f.Z)(["\n    position: absolute;\n    top: 2px;\n    right: 4px;\n"]))),_=e(5340),k=e(184);var w=function(n){var t=n.trendingMovies,e=(n.location,n.lang),r=(0,u.k6)(),i=t.map((function(n){return(0,k.jsx)(x,{children:(0,k.jsxs)(l.rU,{to:{pathname:"/movies/".concat(n.id),state:{detail:r.location}},children:[(0,k.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):_,alt:n.title}),(0,k.jsxs)(v,{children:[(0,k.jsx)(j,{style:{width:45,height:45},children:(0,k.jsx)(d.Ip,{value:10*n.vote_average,text:"".concat(10*n.vote_average,"%"),background:!0,styles:{text:{fill:"#f88",fontSize:"36px"},background:{fill:"#041101"},path:{stroke:"rgba(62, 220, 30, ".concat(10*n.vote_average/100," )")}}})}),(0,k.jsx)(Z,{children:n.title}),(0,k.jsx)(b,{children:g()(n.release_date).locale("".concat(e)).format("DD MMMM YYYY")})]})]})},n.id)}));return(0,k.jsx)(m,{children:i})}},1214:function(n,t,e){e.d(t,{Z:function(){return u}});e(2791);var r,i,a=e(168),o=e(6031),c=o.ZP.h2(r||(r=(0,a.Z)(["\n    margin-bottom: 10px;\n    margin-top: 10px;\n"]))),s=o.ZP.section(i||(i=(0,a.Z)(["\n    justify-content: center;\n    margin: 20px 20px;\n"]))),l=e(184),u=function(n){var t=n.title,e=n.children;return(0,l.jsxs)(s,{children:[(0,l.jsx)(c,{children:t}),e]})}},3983:function(n,t,e){e.r(t);var r=e(8152),i=e(2791),a=e(9271),o=e(5545),c=e(3243),s=e(1214),l=e(2810),u=e(184);t.default=function(n){var t=n.lang,e=(0,i.useState)([]),d=(0,r.Z)(e,2),p=d[0],g=d[1],f=(0,a.TH)(),h=[{id:(0,l.Z)(),code:"uk",title:"\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u0432 \u0442\u0440\u0435\u043d\u0434\u0456"},{id:(0,l.Z)(),code:"ru",title:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432 \u0442\u0440\u0435\u043d\u0434\u0435"},{id:(0,l.Z)(),code:"en",title:"Trending today"}].filter((function(n){return n.code.includes("".concat(t))}));return(0,i.useEffect)((function(){(0,c.X)("trending/movie/day",1,t).then((function(n){return g(n.results)}))}),[t]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s.Z,{title:h[0].title,children:(0,u.jsx)(o.Z,{trendingMovies:p,location:f,lang:t})})})}},3243:function(n,t,e){e.d(t,{X:function(){return s}});var r=e(5861),i=e(7757),a=e.n(i),o=e(4569),c=e.n(o),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,i,o,s,l=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.length>1&&void 0!==l[1]?l[1]:1,r=l.length>2&&void 0!==l[2]?l[2]:"uk",i=l.length>3?l[3]:void 0,n.prev=3,n.next=6,c()({method:"get",baseURL:"https://api.themoviedb.org/3/",url:"".concat(t),timeout:5e3,headers:{Accept:"application/json","Content-Type":"application/json"},params:{api_key:"ba391a4af8e36100561e2c826bdfa51e",page:"".concat(e),language:"".concat(r),query:"".concat(i)}});case 6:return o=n.sent,n.next=9,o.data;case 9:return s=n.sent,n.abrupt("return",s);case 13:throw n.prev=13,n.t0=n.catch(3),n.t0;case 16:case"end":return n.stop()}}),n,null,[[3,13]])})));return function(t){return n.apply(this,arguments)}}()},5340:function(n,t,e){n.exports=e.p+"static/media/defaultImage.cb5e55ac072348fb6880.jpg"}}]);
//# sourceMappingURL=Home__page.c34493ba.chunk.js.map