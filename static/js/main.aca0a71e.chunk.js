(this.webpackJsonpchucknorrisjokes=this.webpackJsonpchucknorrisjokes||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),a=t(2),r=t.n(a),i=(t(12),t(3)),s=t(4),u=t(6),l=t(5),h=(t(13),function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).onClickChangeJoke=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(n){e.setState({cnJoke:n.value})}))},e.state={cnJoke:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(n){e.setState({cnJoke:n.value})}))}},{key:"render",value:function(){var e=this.state.cnJoke;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Chuck Norris Jokes"),c.a.createElement("button",{onClick:this.onClickChangeJoke},"New Joke"),c.a.createElement("p",null,e))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.aca0a71e.chunk.js.map