(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{42:function(e,t,a){e.exports=a(64)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(47),a(41)),i=r.a.createContext({blogers:[],posts:[{author:"",id:"",description:"",title:""}],loginData:{password:"",email:""},registrationData:{lastname:"",username:"",password:"",email:""},name:"",newPost:{description:"",title:""},loading:!0,modalShow:!1,id:""}),s=(a(48),a(66)),u=a(15),m=a(18),p=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,null,[{key:"set",value:function(e,t){try{var a=JSON.stringify(t);localStorage.setItem(e,a)}catch(n){throw new Error(n.message)}}},{key:"get",value:function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)||null}catch(a){throw new Error(a.message)}}},{key:"remove",value:function(e){try{localStorage.removeItem(e)}catch(t){throw new Error(t.message)}}}]),e}(),d=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"getPeople",value:function(){return fetch("https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users").then((function(e){return e.json()}))}},{key:"login",value:function(e){return fetch("https://it-blog-posts.herokuapp.com/api/people/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}},{key:"registration",value:function(e){return fetch("https://it-blog-posts.herokuapp.com/api/people",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}},{key:"byId",value:function(e){return fetch("https://it-blog-posts.herokuapp.com/api/people/".concat(e)).then((function(e){return e.json()}))}},{key:"logOut",value:function(e){return fetch('"https://it-blog-posts.herokuapp.com/api/people/logout?access_token='.concat(e),{method:"POST",headers:{"Content-Type":"application/json"}})}}]),e}(),f=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"getPost",value:function(){return fetch("https://it-blog-posts.herokuapp.com/api/posts").then((function(e){return e.json()}))}},{key:"post",value:function(e){return fetch("https://it-blog-posts.herokuapp.com/api/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}},{key:"getPostById",value:function(e){return fetch("https://it-blog-posts.herokuapp.com/api/people/".concat(e,"/posts")).then((function(e){return e.json()}))}},{key:"remove",value:function(e){return fetch("https://it-blog-posts.herokuapp.com/api/posts/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}}]),e}(),h=new function e(){Object(u.a)(this,e),this.people=new d,this.post=new f},y=h.people.getPeople,g=h.post.getPost,E=h.people.login,v=h.people.registration,b=h.people.byId,O=h.post.post,w=h.post.getPostById,j=h.people.logOut,P=h.post.remove,k=r.a.memo((function(){var e=Object(n.useContext)(i),t=e.state,a=e.dispatch,o=t.blogers,c=t.loading;return Object(n.useEffect)((function(){y().then((function(e){a({type:"Fetch_Blogers",payload:e}),a({type:"Spinner"})}))}),[]),r.a.createElement("div",{className:"blogers"},r.a.createElement("h2",null,"Blogers"),c&&r.a.createElement(s.a,{animation:"grow",variant:"danger",className:"spiner"}),o.map((function(e){return r.a.createElement("div",{className:"item-bloger",key:e.id},r.a.createElement("img",{src:e.avatar,alt:"",className:"phot"}),r.a.createElement("p",null," ",e.name))})))})),C=(a(49),r.a.memo((function(){var e=Object(n.useContext)(i),t=e.state,a=e.dispatch,o=t.posts,c=t.loading;return Object(n.useEffect)((function(){g().then((function(e){a({type:"Fetch_Posts",payload:e}),a({type:"Spinner"})}))}),[]),r.a.createElement("div",{className:"contentpost"},c&&r.a.createElement(s.a,{animation:"grow",variant:"danger",className:"spiner"}),o.map((function(e){return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("div",{className:"title"}," ",r.a.createElement("p",null,e.author),"  ",r.a.createElement("p",null,e.title),"   "),r.a.createElement("div",{className:"discription"}," ",e.description))})))}))),N=(a(50),r.a.memo((function(){return r.a.createElement("div",{className:"mainhome"},r.a.createElement(k,null),r.a.createElement(C,null))}))),S=a(10),I=a(69),D=a(67);a(51);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(S.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=r.a.memo((function(e){var t=Object(n.useContext)(i),a=t.state,o=t.dispatch,c=a.loginData,l=function(e){var t=e.target,a=t.name,n=t.value;o({type:"Login",payload:B({},c,Object(S.a)({},a,n))})};return r.a.createElement("div",{className:"logForm"},r.a.createElement(I.a.Group,{controlId:"formBasicEmail"},r.a.createElement(I.a.Label,null,"Email address"),r.a.createElement(I.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:l,value:a.email})),r.a.createElement(I.a.Group,{controlId:"formBasicPassword"},r.a.createElement(I.a.Label,null,"Password"),r.a.createElement(I.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:l,value:a.password})),r.a.createElement(I.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(I.a.Check,{type:"checkbox",label:"Remember me"})),r.a.createElement(D.a,{variant:"primary",onClick:function(){E(c).then((function(e){return 200!==e.status?alert("Unable to log in"):e.json()})).then((function(t){var a={token:t.id,id:t.userId};p.set("user",a),o({type:"ID",payload:t.id}),e.history.push("/home")})).catch((function(e){console.log(e)}))}},"Log In"))})),T=(a(55),a(70)),G=r.a.memo((function(){var e=Object(n.useContext)(i).state;return r.a.createElement(T.a,{fill:!0,variant:"tabs"},r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"#/home"},"Home")),e.id?r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"#/logout"}," Log Out")):r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"#/login"}," Log In")),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"#/registration"},"Registration")),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"#/workspace"},"Post")))}));a(56);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(S.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=r.a.memo((function(e){var t=Object(n.useContext)(i),a=t.state,o=t.dispatch,c=a.registrationData,l=c.lastname,s=c.username,u=c.password,m=c.email,p=function(e){var t=e.target,a=t.name,n=t.value;o({type:"Registration",payload:F({},c,Object(S.a)({},a,n))})};return r.a.createElement("div",{className:"logForm"},r.a.createElement(I.a.Group,{controlId:"formBasicLastName"},r.a.createElement(I.a.Label,null,"Last Name"),r.a.createElement(I.a.Control,{name:"lastname",type:"email",placeholder:"Last Name",onChange:p,value:l})),r.a.createElement(I.a.Group,{controlId:"formBasicUserName"},r.a.createElement(I.a.Label,null,"User Name"),r.a.createElement(I.a.Control,{name:"username",type:"email",placeholder:"User Name",onChange:p,value:s})),r.a.createElement(I.a.Group,{controlId:"formBasicEmail"},r.a.createElement(I.a.Label,null,"Email address"),r.a.createElement(I.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:p,value:m})),r.a.createElement(I.a.Group,{controlId:"formBasicPassword"},r.a.createElement(I.a.Label,null,"Password"),r.a.createElement(I.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:p,value:u})),r.a.createElement(D.a,{variant:"primary",onClick:function(){v(c).then((function(t){if(200===t.status)return e.history.push("/login"),t.json()}))}},"Ok"))})),U=(a(57),function(){var e=Object(n.useContext)(i),t=e.state,a=e.dispatch,o=t.posts,c=t.loading,l=t.id;Object(n.useEffect)((function(){l?w(l).then((function(e){a({type:"Fetch_Posts",payload:e}),a({type:"Spinner"})})):g().then((function(e){a({type:"Fetch_Posts",payload:e}),a({type:"Spinner"})}))}),[o,l]);return r.a.createElement("div",{className:"content"},c&&r.a.createElement(s.a,{animation:"grow",variant:"danger",className:"spiner"}),o.map((function(e){return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("div",{className:"title"}," ",r.a.createElement("p",null,e.author),"  ",r.a.createElement("p",null,e.title),l&&r.a.createElement(D.a,{onClick:function(){return t=e.id,void P(t);var t},className:"remove"}," \xd7"),"  "),r.a.createElement("div",{className:"discription"}," ",e.description))})))}),H=a(68);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(S.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(e){var t=e.show,a=e.handleClose,o=e.name,c=Object(n.useContext)(i),l=c.state,s=c.dispatch,u=l.newPost,m=l.id,p=u.description,d=u.title;u.author=o,u.personId=m;var f=function(e){var t=e.target,a=t.name,n=t.value;s({type:"New_Post",payload:A({},u,Object(S.a)({},a,n))})};return r.a.createElement(H.a,{show:t,onHide:a},r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement(H.a.Title,null,"Create New Post")),r.a.createElement(H.a.Body,null,r.a.createElement(I.a.Group,{controlId:"formBasicTitle"},r.a.createElement(I.a.Control,{name:"title",type:"email",placeholder:"Title",onChange:f,value:d})),r.a.createElement(I.a.Group,{controlId:"formBasic.ControlTextarea"},r.a.createElement(I.a.Control,{name:"description",as:"textarea",rows:"3",placeholder:"Description",onChange:f,value:p}))),r.a.createElement(H.a.Footer,null,r.a.createElement(D.a,{variant:"secondary",onClick:a},"Close"),r.a.createElement(D.a,{variant:"primary",onClick:function(){a(),O(u)}},"Save")))},W=r.a.memo((function(e){var t=e.handleShow,a=e.name,n=e.id;return r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"photo"},r.a.createElement("img",{src:"",alt:""})),r.a.createElement("p",{className:"name"},a||"workspace")),r.a.createElement(D.a,{variant:"dark",onClick:function(){n?t():alert("Not Logined")}},"New Post"))})),Y=r.a.memo((function(){var e=Object(n.useContext)(i),t=e.state,a=e.dispatch,o=t.name,c=t.modalShow,l=t.id;return Object(n.useEffect)((function(){var e=p.get("user");e&&b(e.id).then((function(e){a({type:"GetName",payload:"".concat(e.lastname," ").concat(e.username)})}))}),[]),r.a.createElement("div",{className:"main"},r.a.createElement(W,{handleShow:function(){a({type:"Modal_Show"})},name:o,id:l}),r.a.createElement(M,{show:c,handleClose:function(){a({type:"Modal_Hide"})},name:o,id:l}),r.a.createElement(U,null))})),$=(a(58),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Armenian Code Academy"))}),q=a(26),z=a(17);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(S.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(e,t){switch(t.type){case"Fetch_Blogers":return Q({},e,{blogers:t.payload});case"Fetch_Posts":return Q({},e,{posts:t.payload});case"Login":return Q({},e,{loginData:t.payload});case"Registration":return Q({},e,{registrationData:t.payload});case"GetName":return Q({},e,{name:t.payload});case"New_Post":return Q({},e,{newPost:t.payload});case"Spinner":return Q({},e,{loading:!1});case"Modal_Show":return Q({},e,{modalShow:!0});case"Modal_Hide":return Q({},e,{modalShow:!1});case"ID":return Q({},e,{id:t.payload});case"LOGOUT":return Q({},e,{id:""});default:return e}},X=(a(59),a(60),function(e){var t=Object(n.useContext)(i),a=(t.state,t.dispatch);return r.a.createElement("div",{className:"logout"},r.a.createElement("div",null,"Are You Shure"),r.a.createElement("div",{className:"btnloguot"},r.a.createElement(D.a,{variant:"dark",onClick:function(){e.history.push("/home")}},"Cancel"),r.a.createElement(D.a,{variant:"danger",className:"btnloguot",onClick:function(){var t=p.get("user").token;j(t).then((function(){p.remove("user"),a({type:"LOGOUT"}),e.history.push("/home")}))}},"ok")))});var Z=function(){var e=Object(n.useContext)(i),t=Object(n.useReducer)(V,e),a=Object(l.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){var e=p.get("user");e&&c({type:"ID",payload:e.id})}),[]),r.a.createElement(q.a,null,r.a.createElement(i.Provider,{value:{state:o,dispatch:c}},r.a.createElement("div",{className:"App"},r.a.createElement(G,{id:o.id}),r.a.createElement(z.a,{path:"/home",render:function(){return r.a.createElement(N,null)}}),";",r.a.createElement(z.a,{path:"/login",render:function(e){return r.a.createElement(x,e)}}),r.a.createElement(z.a,{path:"/logout",render:function(e){return r.a.createElement(X,e)}}),r.a.createElement(z.a,{path:"/registration",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(z.a,{path:"/workspace",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(z.a,{path:"/home",render:function(){return r.a.createElement($,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.f4663999.chunk.js.map