(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{177:function(e,t,a){e.exports=a.p+"static/media/milkyway-night.ebe6f777.jpg"},181:function(e,t,a){e.exports=a(412)},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){e.exports=a.p+"static/media/city-sunshards.6d14b968.jpg"},189:function(e,t,a){},207:function(e,t,a){},226:function(e,t){},240:function(e,t){},242:function(e,t){},405:function(e,t,a){},406:function(e,t,a){},410:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),d=(a(186),a(187),a(188),a(177)),s=a.n(d),o=a(9),i=a(2),u=a.n(i),f=(a(189),function(){var e=Object(n.useState)(u()().format("h:mm")),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(u()().format("dddd, MMMM Do")),d=Object(o.a)(l,2),s=d[0],i=d[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(u()().format("h:mm a")),i(u()().format("dddd, MMMM Do"))}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"current-time"},r.a.createElement("h1",null,a)),r.a.createElement("div",null,r.a.createElement("h2",null,"".concat(s))))}),m=a(10),p=a.n(m),h=a(23),b=a(28),y=a.n(b),v=(a(207),function(){var e=Object(n.useState)([{"01. symbol":"","02. open":"","03. high":"","04. low":"","05. price":"","06. volume":"","07. latest trading day":"","08. previous close":"","09. change":"","10. change percent":""}]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=[{symbol:"MSFT"},{symbol:"AAPL"},{symbol:"TSLA"},{symbol:"AMD"},{symbol:"SPCE"}],d=function(){var e=Object(h.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+t.symbol+"&apikey=VLIZ47IAW3GB6QTU");case 3:if(200!==(a=e.sent).status||void 0===a.data["Global Quote"]){e.next=7;break}return n=a.data["Global Quote"],e.abrupt("return",n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(h.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return d(e)})),e.next=3,Promise.all(a);case 3:return n=e.sent,console.table(n),e.abrupt("return",c(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s(l);var e=setInterval((function(){s(l)}),12e4);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"stocks"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"SYMBOL"),r.a.createElement("th",null,"PRICE"),r.a.createElement("th",null,"CHANGE"),r.a.createElement("th",null,"OPEN"),r.a.createElement("th",null,"HIGH"),r.a.createElement("th",null,"LOW"))),r.a.createElement("tbody",null,a.map((function(e){return e["01. symbol"]?r.a.createElement("tr",{key:e["01. symbol"]},r.a.createElement("td",null,e["01. symbol"]),r.a.createElement("td",null,parseFloat(e["05. price"]).toFixed(2)),r.a.createElement("td",null,parseFloat(e["10. change percent"]).toFixed(2)," %"),r.a.createElement("td",null,parseFloat(e["02. open"]).toFixed(2)),r.a.createElement("td",null,parseFloat(e["03. high"]).toFixed(2)),r.a.createElement("td",null,parseFloat(e["04. low"]).toFixed(2))):null})))))}),E=a(63),w=a.n(E),x=(a(405),a(406),function(){var e=Object(n.useState)({headers:[],data:[]}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(h.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://weather.com/weather/hourbyhour/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f");case 3:200===(t=e.sent).status&&(a=w.a.load(t.data),n={headers:[],data:[]},a(".twc-table thead tr th").each((function(e,t){n.headers.push(a(t).text())})),a(".twc-table tbody tr").each((function(e,t){if(e<6){var r={};r.time="".concat(a(t).find(".hourly-time").text().replace("\n","")),r.description="".concat(a(t).find(".description").text()),r.temp="".concat(a(t).find(".temp").text()),r.precip="".concat(a(t).find(".precip").text()),n.data.push(r)}})),console.table(n.headers),console.table(n.data),c(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l();var e=setInterval((function(){l()}),36e5);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"weather-hourly"},a.data.map((function(e){return r.a.createElement("div",{className:"hour",key:e.time},Object.values(e).map((function(t,a){return r.a.createElement("h5",{key:"".concat(e.time,"-").concat(t)},t)})))})))}),O=function(){var e=Object(n.useState)({temperature:"",description:"",feels:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(h.a)(p.a.mark((function e(){var t,n,r,l,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://weather.com/weather/today/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f");case 3:200===(t=e.sent).status&&(n=w.a.load(t.data),r=n(".today_nowcard-section").find(".today_nowcard-temp").text(),l=n(".today_nowcard-section").find(".today_nowcard-phrase").text(),d=n(".today_nowcard-section").find(".today_nowcard-feels").text(),c({temperature:r,description:l,feels:d}),console.log(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l();var e=setInterval((function(){l()}),3e5);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"weather-brief"},r.a.createElement("h1",null,a.temperature," ",a.description),r.a.createElement("div",null,r.a.createElement("h4",null,a.feels))),r.a.createElement(x,null))},A=a(101),S=(a(409),a(410),function(){var e=u()("2020-03-30 05:45"),t=Object(n.useState)([{start:u()(e),end:u()(e),title:"A Shift"},{start:u()(e).add(4,"days"),end:u()(e).add(4,"days"),title:"A Shift"},{start:u()(e).add(8,"days"),end:u()(e).add(8,"days"),title:"A Shift"},{start:u()(e).add(12,"days"),end:u()(e).add(12,"days"),title:"A Shift"},{start:u()(e).add(16,"days"),end:u()(e).add(16,"days"),title:"A Shift"},{start:u()(e).add(20,"days"),end:u()(e).add(20,"days"),title:"A Shift"},{start:u()(e).add(24,"days"),end:u()(e).add(24,"days"),title:"A Shift"},{start:u()(e).add(28,"days"),end:u()(e).add(28,"days"),title:"A Shift"},{start:u()(e).add(32,"days"),end:u()(e).add(32,"days"),title:"A Shift"},{start:u()(e).add(36,"days"),end:u()(e).add(36,"days"),title:"A Shift"},{start:u()(e).add(40,"days"),end:u()(e).add(40,"days"),title:"A Shift"},{start:u()(e).add(44,"days"),end:u()(e).add(44,"days"),title:"A Shift"},{start:u()(e).add(48,"days"),end:u()(e).add(48,"days"),title:"A Shift"},{start:u()(e).add(52,"days"),end:u()(e).add(52,"days"),title:"A Shift"},{start:u()(e).add(56,"days"),end:u()(e).add(56,"days"),title:"A Shift"}]),a=Object(o.a)(t,1)[0],c=Object(A.b)(u.a);return r.a.createElement("div",{className:"calendar-monthly"},r.a.createElement(A.a,{localizer:c,events:a,startAccessor:"start",endAccessor:"end",style:{height:750}}))}),j=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:s.a,id:"background-image"}),r.a.createElement("section",{className:"basic-grid"},r.a.createElement("div",{className:"card"},r.a.createElement(f,null)),r.a.createElement("div",{className:"card"},r.a.createElement(O,null)),r.a.createElement("div",{className:"card"},r.a.createElement(v,null)),r.a.createElement("div",{className:"card"},r.a.createElement(S,null))))},g=(a(411),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))});l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.2b47ffb3.chunk.js.map