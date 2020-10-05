(this.webpackJsonpatlan_assignment=this.webpackJsonpatlan_assignment||[]).push([[0],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),l=a.n(c),s=(a(84),a(71)),o=a(72),i=a(78),u=a(77),m=(a(85),a(86),a(5)),p=a.n(m),h=a(8),d=a(22),f=a(26),b="1BFVGZyjguGwJOoFtVa2vX1WQbpw6W80G9LpiquX2gK0",E=a(34),y={};function g(e,t){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(p.a.mark((function e(t,a){var n,r,c,l,s,o,i,u,m,h,d,f,b,g;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("sheet_data"))){e.next=11;break}return e.prev=2,e.next=5,JSON.parse(n);case 5:y=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Imporper data in localStorage");case 11:if(r="".concat(t,"-").concat(a),c=y[r],1728e5,!(c&&c.data&&c.createdAt+1728e5>Date.now())){e.next=16;break}return e.abrupt("return",c.data);case 16:return e.next=18,fetch("https://spreadsheets.google.com/feeds/list/".concat(t,"/").concat(a,"/public/values?alt=json"),{headers:{"Content-Type":"application/json"}});case 18:if(!((l=e.sent).status>=400)){e.next=22;break}return console.error("Sheets API error"),e.abrupt("return",null);case 22:return s={labels:[],datasets:[]},o={label:"Win Count",data:[],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(155, 99, 132, 0.6)","rgba(55, 99, 132, 0.6)","rgba(54, 122, 235, 0.6)","rgba(255, 106, 86, 0.6)","rgba(75, 122, 192, 0.6)","rgba(153, 102, 155, 0.6)","rgba(225, 159, 94, 0.6)","rgba(95, 96, 132, 0.6)"]},e.next=26,l.json();case 26:if(!((i=e.sent)&&i.feed&&i.feed.entry&&i.feed.entry.length>0)){e.next=38;break}u=[],m=[],h=Object(E.a)(i.feed.entry);try{for(h.s();!(d=h.n()).done;)for(b in f=d.value,{},f)b.startsWith("gsx$")&&(g=b.slice(4),void 0!==f[b].$t&&("teams"===g?u.push(f[b].$t):"wins"===g&&m.push(f[b].$t)))}catch(p){h.e(p)}finally{h.f()}return s.labels=u,o.data=m,s.datasets.push(o),y[r]={data:s,createdAt:Date.now()},localStorage.setItem("sheet_data",JSON.stringify(y)),e.abrupt("return",s);case 38:return console.error(i),e.abrupt("return",null);case 40:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}var v=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(b,"2");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var w=function(){var e=r.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1];r.a.useEffect((function(){c()}),[]);var c=function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:(t=e.sent)&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"chart"},r.a.createElement("div",{className:"graph"},r.a.createElement(f.Bar,{data:a,options:{title:{display:!0,text:"Bar graph representation for the number of times a team has won from 2008-2017",fontSize:25},legend:{display:!0,position:"bottom"}}})),r.a.createElement("div",{className:"graph"},r.a.createElement(f.Pie,{data:a,options:{title:{display:!0,text:"Pie Chart representation for the number of times a team has won from 2008-2017",fontSize:25},legend:{display:!0,position:"bottom"}}}))))},k={};function _(e,t,a){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(p.a.mark((function e(t,a,n){var r,c,l,s,o,i,u,m,h,d,f,b,y,g,x,v;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=localStorage.getItem("sheet_data"))){e.next=11;break}return e.prev=2,e.next=5,JSON.parse(r);case 5:k=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Imporper data in localStorage");case 11:if(c="".concat(t,"-").concat(a),l=k[c],1728e5,s=[],!(l&&l.data&&l.createdAt+1728e5>Date.now())){e.next=18;break}for(o in l.data)l.data[o].season===n&&s.push(l.data[o]);return e.abrupt("return",s);case 18:return e.next=20,fetch("https://spreadsheets.google.com/feeds/list/".concat(t,"/").concat(a,"/public/values?alt=json"),{headers:{"Content-Type":"application/json"}});case 20:if(!((i=e.sent).status>=400)){e.next=24;break}return console.error("Sheets API error"),e.abrupt("return",null);case 24:return e.next=26,i.json();case 26:if(!((u=e.sent)&&u.feed&&u.feed.entry&&u.feed.entry.length>0)){e.next=36;break}m=[],h=[],d=Object(E.a)(u.feed.entry);try{for(d.s();!(f=d.n()).done;){for(g in b=f.value,y={},b)g.startsWith("gsx$")&&(x=g.slice(4),void 0!==b[g].$t?y[x]=b[g].$t:y[x]=b[g]);m.push(y)}}catch(p){d.e(p)}finally{d.f()}for(v in m)m[v].season===n&&h.push(m[v]);return k[c]={data:m,createdAt:Date.now()},localStorage.setItem("sheet_data",JSON.stringify(k)),e.abrupt("return",h);case 36:return console.error(u),e.abrupt("return",null);case 38:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}var N=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(b,"1",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D="city",O="date",C="team1",S="team2",L="result",R="winner",T="venue",A="umpire1",I="umpire2",W="umpire3",B=(a(184),a(208)),$=a(19),J=a(18),z=a(20),P=a(205),F=a(206),G=a(209);function H(e){var t,a=e.team1,n=e.team2,c=e.umpire1,l=e.umpire2,s=e.umpire3,o=e.winner,i=e.win_by_runs,u=e.win_by_wickets,m=(e.dl_applied,e.player_of_match),p=e.venue,h=e.city,d=e.date,f=e.toss_winner,b=e.toss_decision,E=e.result,y=(Object(B.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular,padding:"9px 0 9px 0"}}})),!1);return t=0!=i,"tie"===E&&(y=!0),r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement(G.a,{style:{width:"21rem"}},r.a.createElement(G.a.Header,{as:"h5"},a,r.a.createElement("br",null),"vs",r.a.createElement("br",null),n),r.a.createElement(G.a.Body,{style:{textAlign:"left"}},y?"":r.a.createElement(G.a.Title,null,o),r.a.createElement(G.a.Subtitle,null,y?r.a.createElement(G.a.Title,null,"Match was a Tie"):r.a.createElement("span",{style:{color:"gray"}},"won the match by",t?r.a.createElement("span",null," ",i," runs"):r.a.createElement("span",null," ",u," wickets"))),r.a.createElement("hr",null),r.a.createElement(G.a.Text,null,r.a.createElement($.a,{color:"#4c4c4c",icon:z.d})," \xa0"," ",p,", ",h),r.a.createElement("hr",null),r.a.createElement(G.a.Text,null,r.a.createElement($.a,{color:"#4c4c4c",icon:z.c})," \xa0"," ",d),r.a.createElement("hr",null),r.a.createElement(G.a.Text,null,r.a.createElement($.a,{color:"#4c4c4c",icon:z.e})," \xa0 Toss won by ",f," based on ",b),r.a.createElement("hr",null),r.a.createElement(G.a.Text,null,r.a.createElement($.a,{color:"#4c4c4c",icon:z.f})," \xa0"," ",r.a.createElement("strong",null,"Umpires :"),r.a.createElement("br",null),c,r.a.createElement("br",null),l,r.a.createElement("br",null),s)),r.a.createElement(G.a.Footer,{style:{textAlign:"left"}},r.a.createElement($.a,{color:"#4c4c4c",icon:z.b})," \xa0"," ",r.a.createElement("strong",null,"Player of the match :")," ",r.a.createElement("br",null),m)),r.a.createElement("br",null))}var V=function(e){var t=r.a.useState([]),a=Object(d.a)(t,2),n=a[0],c=a[1];r.a.useEffect((function(){l()}),[]);var l=function(){var t=Object(h.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.match.params.year);case 2:(a=t.sent)&&c(a);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(P.a,null,r.a.createElement(F.a,null,r.a.createElement(J.Link,{to:"/Dashboard"},r.a.createElement($.a,{style:{marginTop:"20px"},icon:z.a,size:"2x",color:"#00416d"})),n.map((function(e,t){return r.a.createElement(H,{key:t,team1:e[C],team2:e[S],city:e[D],venue:e[T],winner:e[R],date:e[O],result:e[L],toss_winner:e.tosswinner,toss_decision:e.tossdecision,win_by_runs:e.winbyruns,win_by_wickets:e.winbywickets,player_of_match:e.playerofmatch,umpire1:e[A],umpire2:e[I],umpire3:e[W],dl_applied:e.dlapplied})}))),r.a.createElement(J.Link,{to:"/Dashboard"},r.a.createElement($.a,{style:{marginBottom:"60px",float:"right"},icon:z.a,size:"2x",color:"#00416d"})))},M=a(4),X=a(9);a(69);function q(){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement(X.LinkContainer,{exact:!0,to:"/"},r.a.createElement("a",null,r.a.createElement("span",null,"Dashboard")))," ","\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0",r.a.createElement("span",{className:"vertical-line"}),r.a.createElement(X.LinkContainer,{exact:!0,to:"/Dashboard"},r.a.createElement("a",null,r.a.createElement("span",null,"View yearly result"))))}var K=a(207),Q=a(210);function U(){return r.a.createElement("div",{className:"year-navbar"},r.a.createElement("h6",{style:{marginBottom:"15px"}},"Choose an year"),r.a.createElement(K.a,{size:"mb-2"},r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2008"},r.a.createElement(Q.a,{className:"btn-theme"},"2008")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2009"},r.a.createElement(Q.a,{className:"btn-theme"},"2009")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2010"},r.a.createElement(Q.a,{className:"btn-theme"},"2010")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2011"},r.a.createElement(Q.a,{className:"btn-theme"},"2011")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2012"},r.a.createElement(Q.a,{className:"btn-theme"},"2012")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2013"},r.a.createElement(Q.a,{className:"btn-theme"},"2013")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2014"},r.a.createElement(Q.a,{className:"btn-theme"},"2014")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2015"},r.a.createElement(Q.a,{className:"btn-theme"},"2015")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2016"},r.a.createElement(Q.a,{className:"btn-theme"},"2016")),r.a.createElement(X.LinkContainer,{exact:!0,to:"/DisplayResult/2017"},r.a.createElement(Q.a,{className:"btn-theme"},"2017"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("iframe",{src:"https://widget.crictimes.org/",style:{width:"80%",minHeight:"450px"},frameborder:"0",scrolling:"yes"}))}var Z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J.HashRouter,null,r.a.createElement(q,null),r.a.createElement(M.g,null,r.a.createElement(M.d,{path:"/",exact:!0,component:w}),r.a.createElement(M.d,{path:"/Dashboard",exact:!0,component:U}),r.a.createElement(M.d,{path:"/DisplayResult/:year",exact:!0,component:V}),r.a.createElement(M.c,{from:"*",to:"/"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){},79:function(e,t,a){e.exports=a(190)},84:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.1c0a13c0.chunk.js.map