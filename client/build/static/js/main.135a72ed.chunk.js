(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{178:function(t,e,n){},314:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(0),c=n(13),i=n.n(c),o=n(24),s=n(41),l=n(145),u=n(11),d=n(20),j="FETCH_POSTS",b="FETCH_SINGLE_POST",p="CREATE_POST",O="UPDATE_POST",h="DELETE_POST",m={posts:[],currentPost:null},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(d.a)(Object(d.a)({},t),{},{posts:e.payload});case b:return Object(d.a)(Object(d.a)({},t),{},{currentPost:e.payload});case p:return Object(d.a)(Object(d.a)({},t),{},{posts:[].concat(Object(u.a)(t.posts),[e.payload])});case O:return Object(d.a)(Object(d.a)({},t),{},{posts:t.posts.map((function(t){return t._id===e.payload._id?e.payload:t})),currentPost:e.payload});case h:return Object(d.a)(Object(d.a)({},t),{},{posts:t.posts.filter((function(t){return t._id!==e.payload})),currentPost:null});default:return Object(d.a)({},t)}},f=Object(s.c)({posts:x}),v=Object(s.e)(f,{},Object(s.d)(Object(s.a)(l.a))),g=(n(178),n(17)),y=n(8),k=n.n(y),w=n(18),C=n(65),N=n.n(C),F="https://jacks-blog-backend.herokuapp.com/posts/",T=function(){var t=Object(w.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get(F);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(w.a)(k.a.mark((function t(e){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("".concat(F).concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(w.a)(k.a.mark((function t(e){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.post(F,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(w.a)(k.a.mark((function t(e,n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.patch("".concat(F).concat(e),n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),E=function(){var t=Object(w.a)(k.a.mark((function t(e){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.delete("".concat(F).concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=n(345),R=n(86),I=n(16),W=n(361),z=n(362),L=n(363),V=n(364),q=n(365),A=n(316),G=n(353),D=n(354),J=n(154),M=n.n(J),H=n(156),U=n.n(H),K=n(157),Z=n.n(K),Q=n(155),X=n.n(Q),Y=n(83),$=n.n(Y),tt=n(348),et=n(350),nt=n(351),at=n(370),rt=n(352),ct=n.p+"static/media/noimage.51df33d5.svg",it=Object(P.a)((function(t){return{root:{maxWidth:374,position:"relative"},media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},chip:{marginTop:t.spacing(1)}}})),ot=function(t){var e,n=t._id,r=t.title,c=t.subtitle,i=t.content,o=t.tag,s=t.image,l=t.createdAt,u=it();return Object(a.jsxs)(tt.a,{className:u.root,children:[Object(a.jsx)(et.a,{className:u.media,image:s||ct,title:"Paella dish"}),Object(a.jsxs)("div",{className:u.overlay,children:[Object(a.jsx)(A.a,{variant:"h6",children:"Jack"}),Object(a.jsx)(A.a,{variant:"body2",children:(e=l,$()(e).fromNow())})]}),Object(a.jsxs)(nt.a,{children:[Object(a.jsx)(A.a,{variant:"h6",component:"p",gutterBottom:!0,children:r})," ",Object(a.jsx)(A.a,{variant:"overline",component:"p",gutterBottom:!0,children:c})," ",Object(a.jsx)(A.a,{variant:"body2",component:"p",children:(null===i||void 0===i?void 0:i.substring(0,250))+"..."}),Object(a.jsx)(at.a,{label:"# ".concat(o),variant:"outlined",className:u.chip})]}),Object(a.jsx)(rt.a,{children:Object(a.jsx)(G.a,{size:"small",color:"primary",children:Object(a.jsx)(R.b,{to:"/posts/".concat(n),children:"Read more"})})})]})},st=n.p+"static/media/grid_four.d897e640.svg",lt=n.p+"static/media/grid_three.c45b945b.svg",ut=Object(P.a)((function(t){return{layoutShifter:{float:"right",margin:t.spacing(2)}}})),dt=function(){var t=Object(o.c)((function(t){return t.posts.posts})),e=Object(r.useState)("gridThree"),n=Object(g.a)(e,2),c=n[0],i=n[1],s=ut();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:s.layoutShifter,children:[Object(a.jsx)(G.a,{variant:"text",size:"small",onClick:function(){return i("gridThree")},children:Object(a.jsx)("img",{src:lt,style:{background:"gridThree"===c?"#ccc":""},alt:"Three Columns Grid Icon"})}),Object(a.jsx)(G.a,{variant:"text",size:"small",onClick:function(){return i("gridFour")},children:Object(a.jsx)("img",{src:st,style:{background:"gridFour"===c?"#ccc":""},alt:"Four Columns Grid Icon"})})]}),Object(a.jsx)(D.a,{container:!0,spacing:2,alignContent:"stretch",children:t.length>0&&t.map((function(t){return Object(a.jsx)(D.a,{item:!0,xs:12,md:"gridThree"===c?4:3,children:Object(a.jsx)(ot,Object(d.a)({},t))},null===t||void 0===t?void 0:t._id)}))})]})},jt=n(87),bt=n.n(jt),pt=n(369),Ot=n(355),ht=n(356),mt=n(368),xt=n(366),ft=n(357),vt=n(372),gt=n(359),yt=n(49),kt=n(89),wt=n(28),Ct=Object(P.a)((function(t){return{paper:{padding:t.spacing(2)},textField:{marginBottom:t.spacing(2)}}})),Nt=["Fiction","Poetry","SciFi","Romance","Children's","Fantasy","Horror","Mystery","NonFiction"],Ft=wt.b().shape({title:wt.c().required(),subtitle:wt.c().required(),content:wt.c().min(20).required(),tag:wt.a().oneOf(Nt)}),Tt=function(t){var e=t.open,n=t.handleClose,c=Object(o.b)(),i=Object(r.useState)(null),s=Object(g.a)(i,2),l=s[0],u=s[1],j=Object(yt.useForm)({resolver:Object(kt.yupResolver)(Ft)}),b=j.register,O=j.handleSubmit,h=j.control,m=j.errors,x=j.reset,f=function(t){var e;c((e=Object(d.a)(Object(d.a)({},t),{},{image:l}),function(){var t=Object(w.a)(k.a.mark((function t(n){var a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:a=t.sent,r=a.data,n({type:p,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())),v()},v=function(){x(),u(null),n()},y=Ct();return Object(a.jsxs)(pt.a,{open:e,onClose:n,children:[Object(a.jsx)(Ot.a,{children:" Create a new post"}),Object(a.jsx)(ht.a,{children:Object(a.jsx)("div",{className:y.root,children:Object(a.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:O(f),children:[Object(a.jsx)(mt.a,{id:"title",label:"Title",name:"title",variant:"outlined",className:y.textField,size:"small",inputRef:b,error:!!m.title,fullWidth:!0}),Object(a.jsx)(mt.a,{id:"subtitle",label:"Sub Title",name:"subtitle",variant:"outlined",className:y.textField,size:"small",inputRef:b,error:!!m.subtitle,fullWidth:!0}),Object(a.jsx)(yt.Controller,{as:Object(a.jsx)(xt.a,{input:Object(a.jsx)(ft.a,{}),className:y.textField,fullWidth:!0,children:Nt.map((function(t,e){return Object(a.jsx)(vt.a,{value:t,children:t},e)}))}),name:"tag",control:h,error:!!m.tag,defaultValue:Nt[0]}),Object(a.jsx)(mt.a,{id:"content",label:"Body",name:"content",multiline:!0,size:"small",inputRef:b,rows:4,className:y.textField,variant:"outlined",error:!!m.content,fullWidth:!0}),Object(a.jsx)(bt.a,{multiple:!1,onDone:function(t){var e=t.base64;return u(e)}})]})})}),Object(a.jsxs)(gt.a,{children:[Object(a.jsx)(G.a,{onClick:v,color:"inherit",children:"Cancel"}),Object(a.jsx)(G.a,{type:"submit",onClick:function(){return O(f)()},color:"primary",variant:"outlined",children:"Submit"})]})]})},St=n(159),_t=n(360),Bt=n(152),Et=n.n(Bt),Pt=n(153),Rt=n.n(Pt),It=Object(P.a)((function(t){return{textField:{marginBottom:t.spacing(2)},buttons:{marginTop:t.spacing(2)}}})),Wt=["Fiction","Poetry","SciFi","Romance","Children's","Fantasy","Horror","Mystery","NonFiction"],zt=wt.b().shape({title:wt.c().required(),subtitle:wt.c().required(),content:wt.c().min(20).required(),tag:wt.a().oneOf(Wt)}),Lt=function(t){t.history;var e=t.post,n=t.closeEditMode,c=Object(o.b)(),i=Object(r.useState)(null===e||void 0===e?void 0:e.image),s=Object(g.a)(i,2),l=s[0],u=s[1],j=Object(yt.useForm)({resolver:Object(kt.yupResolver)(zt)}),b=j.register,p=j.handleSubmit,h=j.control,m=j.errors,x=j.reset,f=It();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:p((function(t){var a=Object(d.a)(Object(d.a)({_id:e._id},t),{},{image:l});c(function(t,e){return function(){var n=Object(w.a)(k.a.mark((function n(a){var r,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B(t,e);case 3:r=n.sent,c=r.data,a({type:O,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}(e._id,a)),x(),u(null),n()})),children:[Object(a.jsx)(mt.a,{id:"title",label:"Title",name:"title",variant:"outlined",className:f.textField,size:"small",inputRef:b,error:!!m.title,fullWidth:!0,defaultValue:null===e||void 0===e?void 0:e.title}),Object(a.jsx)(mt.a,{id:"subtitle",label:"Sub title",name:"subtitle",variant:"outlined",className:f.textField,size:"small",inputRef:b,error:!!m.subtitle,fullWidth:!0,defaultValue:null===e||void 0===e?void 0:e.subtitle}),Object(a.jsx)(yt.Controller,{as:Object(a.jsx)(xt.a,{input:Object(a.jsx)(ft.a,{}),className:f.textField,children:Wt.map((function(t,e){return Object(a.jsx)(vt.a,{value:t,children:t},e)}))}),name:"tag",control:h,error:!!m.tag,defaultValue:null===e||void 0===e?void 0:e.tag}),Object(a.jsx)(mt.a,{id:"content",label:"Body",name:"content",multiline:!0,size:"small",inputRef:b,rows:4,className:f.textField,variant:"outlined",error:!!m.content,fullWidth:!0,defaultValue:null===e||void 0===e?void 0:e.content}),Object(a.jsx)(bt.a,{multiple:!1,onDone:function(t){var e=t.base64;return u(e)}}),Object(a.jsxs)("div",{className:f.buttons,children:[Object(a.jsx)(G.a,{color:"secondary",variant:"outlined",onClick:n,children:"Cancel"})," ",Object(a.jsx)(G.a,{color:"primary",variant:"outlined",type:"submit",children:"Save"})]})]})})},Vt=n(53),qt=Object(P.a)((function(t){return{paper:{padding:t.spacing(3),marginBottom:t.spacing(8)},header:{display:"flex",justifyContent:"space-between"},content:{marginTop:t.spacing(3)},image:{width:"100%",borderRadius:5,marginTop:t.spacing(3),marginBottom:t.spacing(4)},chip:{marginTop:t.spacing(1)}}})),At=function(t){var e=t.history,n=(t.location,t.match.params.id),c=Object(o.b)(),i=Object(o.c)((function(t){return t.posts.currentPost})),s=Object(r.useState)(!1),l=Object(g.a)(s,2),u=l[0],d=l[1],j=Object(Vt.b)().isAuthenticated;Object(r.useEffect)((function(){c(function(t){return function(){var e=Object(w.a)(k.a.mark((function e(n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:a=e.sent,r=a.data,n({type:b,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}(n))}),[c,n]);var p,O=qt();return Object(a.jsx)(St.a,{className:O.paper,elevation:0,children:u?Object(a.jsx)(Lt,{post:i,closeEditMode:function(){d(!1)}}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:O.header,children:[Object(a.jsx)(A.a,{variant:"h5",gutterBottom:!0,children:null===i||void 0===i?void 0:i.title}),Object(a.jsxs)("div",{children:[j&&Object(a.jsxs)("div",{children:[" ",Object(a.jsx)(G.a,{color:"primary",variant:"outlined",startIcon:Object(a.jsx)(Et.a,{}),onClick:function(){d(!0)},children:"Edit"})," "]}),j&&Object(a.jsx)(G.a,{color:"secondary",variant:"outlined",onClick:function(){c(function(t){return function(){var e=Object(w.a)(k.a.mark((function e(n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(t);case 3:a=e.sent,r=a.data,n({type:h,payload:r._id}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}(i._id)),e.push("/posts")},startIcon:Object(a.jsx)(Rt.a,{}),children:"Delete"})]})]}),Object(a.jsx)(_t.a,{}),Object(a.jsx)(A.a,{variant:"overline",gutterBottom:!0,children:null===i||void 0===i?void 0:i.subtitle}),Object(a.jsxs)(A.a,{variant:"caption",component:"p",gutterBottom:!0,children:[(p=null===i||void 0===i?void 0:i.createdAt,$()(p).fromNow())," by Jack"]}),Object(a.jsx)(at.a,{label:"# ".concat(null===i||void 0===i?void 0:i.tag),variant:"outlined",className:O.chip}),Object(a.jsxs)("div",{className:O.content,children:[Object(a.jsx)("img",{src:(null===i||void 0===i?void 0:i.image)||ct,alt:"Post",className:O.image}),Object(a.jsx)(A.a,{variant:"body1",gutterBottom:!0,children:null===i||void 0===i?void 0:i.content})]})]})})},Gt=Object(P.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1},container:{marginTop:t.spacing(3)}}})),Dt=function(){var t=Object(Vt.b)(),e=t.loginWithRedirect,n=t.logout,c=t.isAuthenticated,i=Object(o.b)(),s=Object(r.useState)(!1),l=Object(g.a)(s,2),u=l[0],d=l[1];Object(r.useEffect)((function(){i(function(){var t=Object(w.a)(k.a.mark((function t(e){var n,a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T();case 3:n=t.sent,a=n.data,e({type:j,payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())}),[i]);var b=Gt();return Object(Vt.b)().isLoading?Object(a.jsx)("div",{children:"Loading..."}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(W.a,{}),Object(a.jsxs)(z.a,{maxWidth:"lg",children:[Object(a.jsx)(L.a,{position:"static",color:"inherit",elevation:0,children:Object(a.jsxs)(V.a,{children:[Object(a.jsx)(q.a,{edge:"start",className:b.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(M.a,{})}),Object(a.jsx)(A.a,{variant:"h6",color:"secondary",className:b.title,children:Object(a.jsx)("a",{href:"https://jacks-blog-frontend.herokuapp.com/posts",children:"Jacks Blog"})}),!c&&Object(a.jsx)(G.a,{color:"primary",variant:"outlined",startIcon:Object(a.jsx)(X.a,{}),onClick:function(){return e()},children:"Log In"}),c&&Object(a.jsxs)("div",{children:[Object(a.jsx)(G.a,{color:"primary",variant:"outlined",startIcon:Object(a.jsx)(U.a,{}),onClick:function(){d(!0)},children:"Create post"})," ",Object(a.jsx)(G.a,{color:"secondary",variant:"outlined",startIcon:Object(a.jsx)(Z.a,{}),onClick:function(){return n()},children:"Log Out"})]})]})}),Object(a.jsx)(D.a,{container:!0,className:b.container,children:Object(a.jsx)(D.a,{item:!0,xs:12,children:Object(a.jsxs)(R.a,{children:[Object(a.jsxs)(I.d,{children:[Object(a.jsx)(I.b,{exact:!0,path:"/posts",component:dt}),Object(a.jsx)(I.b,{exact:!0,path:"/posts/:id",component:At})]}),Object(a.jsx)(I.a,{from:"/",to:"/posts"})]})})}),Object(a.jsx)(Tt,{open:u,handleClose:function(){d(!1)}})]})]})};i.a.render(Object(a.jsx)(Vt.a,{domain:"dev-pig883g2.eu.auth0.com",clientId:"c0ubEExUnVcKtwCLb6NUwPGn22LaZC1n",redirectUri:window.location.origin,children:Object(a.jsx)(o.a,{store:v,children:Object(a.jsx)(Dt,{})})}),document.getElementById("root"))}},[[314,1,2]]]);
//# sourceMappingURL=main.135a72ed.chunk.js.map