(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(6),i=n.n(s);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(7),c=n(1),u=n(2),l=n(4),h=n(3);var m=function(e){return a.a.createElement("button",{className:"square btn btn-primary col p-4 m-1",onClick:e.onClick},e.value)},v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderSquare",value:function(e){var t=this;return a.a.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"renderRow",value:function(e){return a.a.createElement("div",{className:"row"},this.renderSquare(e),this.renderSquare(e+1),this.renderSquare(e+2))}},{key:"render",value:function(){return a.a.createElement("div",{className:"board"},this.renderRow(0),this.renderRow(3),this.renderRow(6))}}]),n}(a.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(u.a)(n,[{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(o.a)(t[n],3),a=r[0],s=r[1],i=r[2];if(e[a]&&e[a]===e[s]&&e[a]===e[i])return e[a]}return null}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();this.calculateWinner(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],s=this.calculateWinner(r.squares),i=n.map((function(e,n){var r=n?"Go to move #"+n:"Go to game start";return a.a.createElement("li",{key:n},a.a.createElement("button",{className:"btn btn-secondary mt-1",onClick:function(){return t.jumpTo(n)}},r))}));return e=s?"Winner "+s:"Next player: "+(this.state.xIsNext?"X":"O"),a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"status"},e),a.a.createElement(v,{squares:r.squares,onClick:function(e){return t.handleClick(e)}}),a.a.createElement("ol",null,i))}}]),n}(a.a.Component);n(14);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1a287414.chunk.js.map