(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{12:function(e,n,t){e.exports=t(26)},17:function(e,n,t){},20:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(10),c=t.n(l),u=(t(17),t(1)),i=t(2),o=t(4);function s(e){var n=e.players,t=e.setPlayers,a=e.unavailablePlayers,l=e.setUnavailablePlayers,c=function(e){l((function(n){var t=Object(o.findIndex)((function(n){return n===e}),n);return t>-1?Object(o.remove)(t,1,n):[].concat(Object(i.a)(n),[e])}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,n.map((function(e){var n=-1===Object(o.findIndex)((function(n){return n===e}),a);return r.a.createElement("div",{className:"row m0 "+(n?"":"u"),key:e},e,n&&r.a.createElement("span",{onClick:function(){return c(e)}},"\u24e7"))})),a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Ej tillg\xe4ngliga"),a.map((function(e){return r.a.createElement("div",{className:"row m0",key:e},e,r.a.createElement("span",{onClick:function(){return c(e)}},"\u24e7"))}))):null),r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=e.target.querySelector("#name").value;e.target.querySelector("#name").value="",n&&t((function(e){return[].concat(Object(i.a)(e),[n])}))}},r.a.createElement("div",{className:"row c m0"},r.a.createElement("label",null,"Namn"),r.a.createElement("input",{id:"name",type:"text"})),r.a.createElement("button",null,"L\xe4gg till spelare")))}var m=t(6),f=t.n(m),v=t(5);function p(e){var n=e.game,t=e.court,a=e.setResult;return r.a.createElement("div",{className:"row m0"},r.a.createElement("div",{style:{width:"200px"},className:"m0"},r.a.createElement("div",null,"Bana ",t+1),[n[0],n[1]].map((function(e){return r.a.createElement("div",{key:e[0],style:{height:"30px"}},e[0],r.a.createElement("br",null),e[1])}))),n[2].map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement("div",null,"Set ",n+1),e.map((function(e,t){return r.a.createElement("input",{key:t,type:"number",value:e.toString(),onChange:(l=[n,t],function(e){var n=parseInt(e.target.value||0);a({position:l,value:n})})});var l})))})))}var g=t(4),d=t(19).knuthShuffle,y=g.addIndex(g.map),E=g.curry((function(e){return[[e[0],e[1]],[e[2],e[3]],[[0,0],[0,0]]]})),b=g.curry((function(e,n,t){return g.any((function(e){return g.contains(n,e[0])&&g.contains(t,e[1])||g.contains(n,e[1])&&g.contains(t,e[0])}),e)})),h=g.curry((function(e,n,t){return g.any((function(e){return g.contains(n,e[0])&&g.contains(t,e[0])||g.contains(n,e[1])&&g.contains(t,e[1])}),e)})),O=g.curry((function(e,n,t){var a=g.sort((function(e,t){return j(n,e)-j(n,t)}),t);return d(a.slice(0,4*e))})),j=function(e,n){return C(e,n).length},w=g.curry((function(e,n){var t=b(e);return 75*(1*h(e,n[0][0],n[0][1])+1*h(e,n[0][0],n[0][1]))+25*(1*t(n[0][0],n[1][0])+1*t(n[0][0],n[1][1])+1*t(n[0][1],n[1][0])+1*t(n[0][1],n[1][1]))})),k=g.curry((function(e,n){var t=Math.min(e,Math.floor(n.length/4));return g.map((function(e){return E(n.slice(4*e,4*(e+1)))}),g.range(0,t))})),P=function(e){return[].concat.apply([],y((function(n,t){var a,r,l=e.slice(0);return a=n,r=l.slice(t+1),g.map(g.pair(a),r)}),e))},S=g.curry((function(e,n){return g.reduce((function(n,t){return n+w(e,t)}),0,n)})),C=g.curry((function(e,n){return g.filter((function(e){return g.contains(n,g.flatten(e))}),e)})),x=function(e){var n=e.courts,t=(e.players,e.availablePlayers),a=e.playedGames,r=e.roundSamples,l=Math.min(n,Math.floor(t.length/4));return Promise.resolve(g.map((function(e){return[].concat(Object(i.a)(e),[[[0,0],[0,0]]])}),function(e,n,t,a){for(var r=n,l=[],c=0;c<e;c++)r=g.slice(c,1/0,n),l=g.append(g.reduce((function(e){var n,t;return n=r,t=g.flatten(e),(r=g.reject((function(e){return!g.allUniq(g.flatten(t.concat(e)))}),n)).length?g.append(g.head(r),e):e}),[],g.range(0,t)),l);return g.head(g.sortBy(S(a),g.filter((function(e){return e.length===t}),l)))}(r,function(e){return g.filter((function(e){return g.allUniq(g.flatten(e))}),P(P(e)))}(O(l,a,t)),l,a)))},N=function(e){var n=e.availablePlayers,t=e.courts;return Promise.resolve(k(t,d(n)))},I=function(e,n,t){var a=Object(u.a)(e,2),r=a[0],l=a[1],c=Object(i.a)(t);return c[r][l]=n,c};function B(e){var n=e.settings,t=e.players,a=e.availablePlayers,l=e.rounds,c=e.setRounds,o=r.a.useState(!1),s=Object(u.a)(o,2),m=s[0],g=s[1],d=l.length?x:N,y=function(){var e,r;return f.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return e=l.length>1?x:N,u.next=3,f.a.awrap(e(Object(v.a)({},n,{availablePlayers:a,players:t,playedGames:l.flat()})));case 3:r=u.sent,c((function(e){var n=Object(i.a)(e);return n[e.length-1]=r,n}));case 5:case"end":return u.stop()}}))};return r.a.createElement(r.a.Fragment,null,l.map((function(e,n){var a=e.reduce((function(e,n,t){return[].concat(Object(i.a)(e),Object(i.a)(n[0]),Object(i.a)(n[1]))}),[]),u=t.filter((function(e){return!a.includes(e)}));return r.a.createElement("div",{key:n,className:"m0"},r.a.createElement("h3",null,"Omg\xe5ng ",n+1,n===l.length-1?r.a.createElement("span",{onClick:y},"\u21aa"):null),e.map((function(e,t){return r.a.createElement(p,{key:t,game:e,setResult:function(a){var r=a.position,l=a.value,u=Object(i.a)(e);u[2][r[0]][r[1]]=parseInt(l),function(e,n,t){c((function(a){return I([e,n],t,a)}))}(n,t,u)},court:t})})),u.length?r.a.createElement("div",null,r.a.createElement("h4",null,"Vilar"),r.a.createElement("div",{className:"m0 row"},u.join(", "))):null)})),r.a.createElement("button",{disable:m.toString(),onClick:function(){var e;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return g(!0),r.next=3,f.a.awrap(d(Object(v.a)({},n,{availablePlayers:a,players:t,playedGames:l.flat()})));case 3:e=r.sent,c((function(n){return[].concat(Object(i.a)(n),[e])}));case 5:case"end":return r.stop()}}))}},"Ny omg\xe5ng"))}var R=t(4),F=function(e,n){return G(e,n).length},G=R.curry((function(e,n){return R.filter((function(e){return R.contains(n,R.flatten(e))}),e)})),M=function(e){var n=e.settings,t=e.games,a=e.player,r=F(t,a);return r?R.reduce((function(e,t){var r=R.contains(a,t[0])?0:1;return e+function(e){var n=e.settings,t=e.game;return t[2]?R.reduce((function(e,t){var a=t[0]>t[1]?0:1;return e[a]=e[a]+n.winBonus,n.onlyCountOwnPoints?(e[0]=e[0]+t[0],e[1]=e[1]+t[1]):(e[0]=e[0]+t[0]-t[1],e[1]=e[1]+t[1]-t[0]),e}),[0,0],t[2]):[0,0]}({settings:n,game:t})[r]}),0,G(t,a))/r:0},q=function(e){return function(e){var n=e.settings,t=e.games,a=e.players.map((function(e){return[e,M({settings:n,games:t,player:e})]}));return R.sort((function(e,n){var t=Object(u.a)(e,2)[1];return Object(u.a)(n,2)[1]-t}),a)}({settings:e.settings,games:e.playedGames,players:e.players})};function U(e){var n=e.rounds,t=e.players,a=e.settings,l=q({settings:a,playedGames:n.flat(),players:t});return r.a.createElement("div",null,l.map((function(e){var n=Object(u.a)(e,2),t=n[0],a=n[1];return r.a.createElement("div",{key:t,className:"row"},t,": ",a)})))}function D(e){var n=e.settings,t=e.setSettings;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row c m0"},r.a.createElement("div",null,"Antal banor"),r.a.createElement("input",{type:"number",value:n.courts,onChange:function(e){var n=e.target.value;t((function(e){return Object(v.a)({},e,{courts:n})}))}})),r.a.createElement("div",{className:"row c m0"},r.a.createElement("div",null,"Po\xe4ng f\xf6r vunnet set"),r.a.createElement("input",{type:"number",value:n.winBonus,onChange:function(e){var n=e.target.value;t((function(e){return Object(v.a)({},e,{winBonus:parseInt(n)})}))}})),r.a.createElement("div",{className:"row c m0"},r.a.createElement("div",null,"Antal lottingar per runda"),r.a.createElement("input",{type:"number",style:{width:"100px"},value:n.roundSamples,onChange:function(e){var n=e.target.value;t((function(e){return Object(v.a)({},e,{roundSamples:parseInt(n)})}))}})),r.a.createElement("div",{className:"row c m0"},r.a.createElement("div",null,"R\xe4kna bara egna po\xe4ng"),r.a.createElement("input",{type:"checkbox",checked:n.onlyCountOwnPoints,onChange:function(e){var n=e.target.checked;t((function(e){return Object(v.a)({},e,{onlyCountOwnPoints:n})}))}})))}t(20);var A=t(7),J=t(3),L=(t(25),Object(A.a)("rounds")),T=Object(A.a)("players"),W=Object(A.a)("unavailablePlayerss"),V=Object(A.a)("settings");var $=function(){var e=W([]),n=Object(u.a)(e,2),t=n[0],a=n[1],l=T([]),c=Object(u.a)(l,2),i=c[0],m=c[1],f=V({courts:4,onlyCountOwnPoints:!0,winBonus:10,roundSamples:1e3}),v=Object(u.a)(f,2),p=v[0],g=v[1],d=L([]),y=Object(u.a)(d,2),E=y[0],b=y[1],h=Object(o.filter)((function(e){return!t.find((function(n){return n===e}))}),i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginLeft:"20px"}},"Steffes kanna"),r.a.createElement(J.e,null,r.a.createElement(J.b,null,r.a.createElement(J.a,null,"Spelare"),r.a.createElement(J.a,null,"Matcher"),r.a.createElement(J.a,null,"St\xe4llning"),r.a.createElement(J.a,null,"Inst\xe4llningar")),r.a.createElement(J.d,null,r.a.createElement(J.c,null,r.a.createElement(s,{players:i,setPlayers:m,unavailablePlayers:t,setUnavailablePlayers:a})),r.a.createElement(J.c,null,r.a.createElement(B,{settings:p,players:i,availablePlayers:h,rounds:E,setRounds:b})),r.a.createElement(J.c,null,r.a.createElement(U,{rounds:E,players:i,settings:p})),r.a.createElement(J.c,null,r.a.createElement(D,{settings:p,setSettings:g}),r.a.createElement("span",{onClick:function(e){e.preventDefault(),window.confirm("Ta bort alla spelare?")&&(m([]),a([]))}},"Rensa alla spelare"),r.a.createElement("span",{onClick:function(e){e.preventDefault(),window.confirm("Ta bort alla resultat?")&&b([])}},"Rensa alla resultat")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.e6c66353.chunk.js.map