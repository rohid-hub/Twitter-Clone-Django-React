(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),l=a(7),s=a(8),u=a(10),i=a(9),m=a(2),p=a(14),d=function(e){var t=e.data,a=(t.id,t.text.split("\n").map((function(e,t){var a=e.split(" ");return r.a.createElement("p",{key:t},a.map((function(e,t){return"@"===e[0]||"#"===e[0]?r.a.createElement(m.b,{key:t,to:e.slice(1)}," ".concat(e)):" ".concat(e)})))})));return r.a.createElement("div",{className:"tweet-wrapper"},r.a.createElement("div",{className:"user-info"},r.a.createElement("div",{className:"user-avater"},"U"),r.a.createElement("p",{className:"user-name"},"User Name"),r.a.createElement("p",{className:"user-id"},"@user_id")),r.a.createElement("div",{className:"tweet-text"},a),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{className:"tweet-btn like",disabled:!0},"Like"),r.a.createElement("button",{className:"tweet-btn comment",disabled:!0},"Comment"),r.a.createElement("button",{className:"tweet-btn share",disabled:!0},"Share")))},h=a(3),f=a.n(h),v=a(33),E=a(12),b=a(13),g=a.n(b),w=function(){var e=Object(E.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(y,"/tweets"));case 3:for(t=e.sent,a=t.data,n=[],r=a.length-1;r>=0;r--)n.push(a[r]);return e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat(y,"/tweets/"),{text:t},{headers:{Authorization:"AUTHORIZATION_KEY","Content-Type":"application/json"}});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var y="http://localhost:8000/api",N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={textvalue:""},n}return Object(s.a)(a,[{key:"handlechange",value:function(e){this.setState({textvalue:e})}},{key:"render",value:function(){var e=this,t=this.state.textvalue,a=this.props.handleTweetSubmition;return r.a.createElement("div",{className:"create-tweet-form tweet-wrapper"},r.a.createElement("textarea",{rows:"2",value:t,onChange:function(t){return e.handlechange(t.target.value)},placeholder:"Make a Tweet"}),r.a.createElement("button",{onClick:function(n){n.preventDefault(),a(t),e.setState({textvalue:""})},disabled:""===t,style:{opacity:""===t?"0.5":"1"}},"Tweet"))}}]),a}(n.Component);var O=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},x=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleTweetSubmition=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:a=e.sent,n.setState((function(e){return{tweets:[a].concat(Object(v.a)(e.tweets))}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={tweets:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.setState({tweets:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.tweets;return e.length>0?r.a.createElement("div",{className:"tweets-wrapper"},r.a.createElement(N,{handleTweetSubmition:this.handleTweetSubmition}),e.map((function(e,t){return r.a.createElement(d,{key:t,data:e})}))):r.a.createElement(O,null)}}]),a}(n.Component);var j=function(e){var t=e.loggedIn;return r.a.createElement("header",{className:"nav-bar"},r.a.createElement("nav",{className:"nav wrapper"},r.a.createElement(m.b,{to:"/",className:"nav-logo"},"Twitter Clone"),r.a.createElement("ul",{className:"nav-menu"},r.a.createElement(m.b,{to:"/"},"Home"),r.a.createElement(m.b,{to:"/"},"All Tweets")),t?r.a.createElement("ul",{className:"user-log"},r.a.createElement(m.b,{to:"/"},"User Name"),r.a.createElement(m.b,{to:"/"},"Logout")):r.a.createElement("ul",{className:"user-log"},r.a.createElement(m.b,{to:"/login"},"Log in"))))},I=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.name,a=e.value;n.setState("username"===t?{username:a}:"password"===t?{password:a}:null)},n.state={username:"",password:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,c=this.props.handleLogIn;return r.a.createElement("form",{className:"log-form login-form",onSubmit:function(t){t.preventDefault(),c(a,n),e.setState({username:"",password:""})}},r.a.createElement("input",{type:"text",placeholder:"username",name:"username",value:a,onChange:function(t){return e.handleChange(t.target)}}),r.a.createElement("input",{type:"password",placeholder:"password",name:"password",value:n,onChange:function(t){return e.handleChange(t.target)}}),r.a.createElement("button",null,"Log In"),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(m.b,{to:"/signup"},"Sign Up")," "))}}]),a}(n.Component),S=function(e){var t=e.checkLogInfo,a=function(){var e=Object(E.a)(f.a.mark((function e(a,n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("http://localhost:8000/rest-auth/login/",{username:a,password:n},{headers:{Authorization:"AUTHORIZATION_KEY","Content-Type":"application/json"}});case 3:r=e.sent,c=r.data.key,localStorage.setItem("token",c),t(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(I,{handleLogIn:a}))},C=function(){return r.a.createElement("form",{className:"log-form login-form"},r.a.createElement("input",{type:"text",placeholder:"username"}),r.a.createElement("input",{type:"text",placeholder:"First Name"}),r.a.createElement("input",{type:"text",placeholder:"Last Name"}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password1"}),r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2"}),r.a.createElement("button",null,"Sign Up"),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(m.b,{to:"/login"},"Log In")," "))},T=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,null))}}]),a}(n.Component),L=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).checkLogInfo=function(){localStorage.getItem("token")?n.setState({loggedIn:!0}):n.setState({loggedIn:!1})},n.state={loggedIn:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.checkLogInfo()}},{key:"render",value:function(){var e=this,t=this.state.loggedIn;return r.a.createElement(m.a,null,r.a.createElement(j,{loggedIn:t}),r.a.createElement("div",{className:"wrapper"},r.a.createElement(p.a,{path:"/",exact:!0,component:x}),r.a.createElement(p.a,{path:"/login",exact:!0,component:function(){return r.a.createElement(S,{checkLogInfo:e.checkLogInfo})}}),r.a.createElement(p.a,{path:"/signup",exact:!0,component:T})))}}]),a}(n.Component);a(62);o.a.render(r.a.createElement(L,null),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0877bc44.chunk.js.map