(this.webpackJsonpreactproject=this.webpackJsonpreactproject||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a.n(c),i=a(12),s=a.n(i),o=a(4),u=a.n(o),l=a(6),b=a(3),d=a(8),p=function(e){var t=e.currentSong;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{alt:t.name,src:t.cover}),Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("h3",{children:t.artist})]})},j=a(7),h=a(5),f=function(e){var t=e.setSongs,a=e.setCurrentSong,c=e.songs,r=e.currentSong,i=e.isPlaying,s=e.setIsPlaying,o=e.setSongInfo,d=e.songInfo,p=e.audioref,f=function(e){var a=c.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{active:!0}):Object(b.a)(Object(b.a)({},t),{},{active:!1})}));t(a)},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.findIndex((function(e){return e.id===r.id})),"skip-forward"!==t){e.next=5;break}return e.next=4,a(c[(n+1)%c.length]);case 4:f(c[(n+1)%c.length]);case 5:if("skip-back"!==t){e.next=15;break}if((n-1)%c.length!==-1){e.next=12;break}return e.next=9,a(c[c.length-1]);case 9:return f(c[c.length-1]),i&&p.current.play(),e.abrupt("return");case 12:return e.next=14,a(c[(n-1)%c.length]);case 14:f(c[(n-1)%c.length]);case 15:i&&p.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(d.animationPercentage,"%)")};return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:g(d.currentTime)}),Object(n.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(r.color[0],", ").concat(r.color[1],")")},className:"track",children:[Object(n.jsx)("input",{min:0,max:d.duration||0,value:d.currentTime,onChange:function(e){p.current.currentTime=e.target.value,o(Object(b.a)(Object(b.a)({},d),{},{currentTime:e.target.value}))},type:"range"}),Object(n.jsx)("div",{style:O,className:"animate-track",children:" "})]}),Object(n.jsx)("p",{children:d.duration?g(d.duration):"0:00"})]}),Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(j.a,{onClick:function(){return m("skip-back")},size:"2x",icon:h.a}),Object(n.jsx)(j.a,{onClick:function(){i?(p.current.pause(),s(!i)):(p.current.play(),s(!i))},className:"play",size:"2x",icon:i?h.d:h.e}),Object(n.jsx)(j.a,{onClick:function(){return m("skip-forward")},size:"2x",icon:h.b})]}),Object(n.jsx)("div",{})]})},g=a(27);var m=function(){return[{name:"Indian Walk",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Nico Staf",audio:"https://github.com/suyash-patil/music-player/raw/main/src/audio/Indian%20Walk%20-%20Nico%20Staf.mp3",color:["#205950","#2ab3bf"],id:Object(g.a)(),active:!0},{name:"Jazz Cabbage",artist:"Ian Ewing, Strehlow",id:Object(g.a)(),cover:"https://f4.bcbits.com/img/a1775206490_16.jpg",audio:"https://mp3.chillhop.com/serve.php?mp3=9363",active:!1,color:["#ab417f","#205950"]},{name:"Lagoons",audio:"https://mp3.chillhop.com/serve.php?mp3=8266",id:Object(g.a)(),active:!1,cover:"https://f4.bcbits.com/img/a0210750191_16.jpg",artist:"Strehlow, Chris Mazuera",color:["#2ab3bf","2ab3bf"]},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(g.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(g.a)(),active:!1},{name:"Violet Vape",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Cheel",audio:"https://github.com/suyash-patil/music-player/raw/main/src/audio/Violet%20Vape%20-%20Cheel.mp3",color:["#EF8EA9","#ab417f"],id:Object(g.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(g.a)(),active:!1},{name:"Under the City Stars",cover:"https://f4.bcbits.com/img/a0210750191_16.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(g.a)(),active:!1}]},O=function(e){var t=e.song,a=e.songs,c=e.setCurrentSong,r=e.id,i=e.audioref,s=e.isPlaying,o=e.setSongs,d=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:n=a.map((function(e){return e.id===r?Object(b.a)(Object(b.a)({},e),{},{active:!0}):Object(b.a)(Object(b.a)({},e),{},{active:!1})})),o(n),s&&i.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{onClick:d,className:"library-song ".concat(t.active?"selected":""),children:[Object(n.jsx)("img",{alt:t.name,src:t.cover}),Object(n.jsxs)("div",{className:"song-details",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.artist})]})]})},v=function(e){var t=e.songs,a=e.setCurrentSong,c=e.audioref,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(n.jsxs)("div",{className:"library ".concat(s?"active-lib":""),children:[Object(n.jsx)("h2",{style:{textAlign:"center"},children:"Library"}),Object(n.jsx)("div",{className:"libsongs",children:t.map((function(e){return Object(n.jsx)(O,{setCurrentSong:a,songs:t,audioref:c,id:e.id,isPlaying:r,setSongs:i,song:e},e.id)}))})]})},x=function(e){var t=e.setLibraryStatus,a=e.libraryStatus;return Object(n.jsxs)("nav",{children:[Object(n.jsx)("h1",{children:"Player"}),Object(n.jsxs)("button",{onClick:function(){return t(!a)},children:["Library",Object(n.jsx)(j.a,{icon:h.c})]})]})};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(m()),a=Object(d.a)(t,2),r=a[0],i=a[1],s=Object(c.useState)(r[0]),o=Object(d.a)(s,2),j=o[0],h=o[1],g=Object(c.useState)(!1),O=Object(d.a)(g,2),y=O[0],S=O[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(d.a)(k,2),C=w[0],N=w[1],P=Object(c.useState)(!1),I=Object(d.a)(P,2),T=I[0],M=I[1],L=function(e){var t=e.target.currentTime,a=e.target.duration,n=Math.round(t),c=Math.round(a),r=Math.round(n/c*100);N(Object(b.a)(Object(b.a)({},C),{},{currentTime:t,duration:a,animationPercentage:r}))},A=function(){var t=Object(l.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.findIndex((function(e){return e.id===j.id})),t.next=3,h(r[(a+1)%r.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App ".concat(T?"library-active":""),children:[Object(n.jsx)(x,{libraryStatus:T,setLibraryStatus:M}),Object(n.jsx)(p,{currentSong:j}),Object(n.jsx)(f,{setIsPlaying:S,songs:r,setSongs:i,setCurrentSong:h,isPlaying:y,audioref:e,setSongInfo:N,songInfo:C,currentSong:j}),Object(n.jsx)(v,{audioref:e,libraryStatus:T,setCurrentSong:h,isPlaying:y,setSongs:i,songs:r}),Object(n.jsx)("audio",{onLoadedMetadata:L,onTimeUpdate:L,ref:e,onEnded:A,src:j.audio})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};a(24);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.e08ecf22.chunk.js.map