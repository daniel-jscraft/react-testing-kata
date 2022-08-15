"use strict";(self.webpackChunktesting_react_applications_workshop=self.webpackChunktesting_react_applications_workshop||[]).push([[878],{9758:function(e,r,n){n(2791);var s=n(184);r.Z=function(e){var r=e.onSubmit;return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements,s=n.username,t=n.password;r({username:s.value,password:t.value})},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"username-field",children:"Username"}),(0,s.jsx)("input",{id:"username-field",name:"username",type:"text"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"password-field",children:"Password"}),(0,s.jsx)("input",{id:"password-field",name:"password",type:"password"})]}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"submit",children:"Submit"})})]})}},3845:function(e,r,n){n(2791);var s=n(184);r.Z=function(){return(0,s.jsxs)("div",{className:"lds-ripple","aria-label":"loading...",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}},6878:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var s=n(4165),t=n(5861),a=n(885),i=n(2791),o=n(9758),u=n(3845),l=n(184);function d(e,r){switch(r.type){case"START":return{status:"pending",responseData:null,errorMessage:null};case"RESOLVE":return{status:"resolved",responseData:r.responseData,errorMessage:null};case"REJECT":return{status:"rejected",responseData:null,errorMessage:r.error.message};default:throw new Error("Unsupported type: ".concat(r.type))}}var c=function(){var e=i.useState(null),r=(0,a.Z)(e,2),n=r[0],c=r[1],p=function(e){var r=e.endpoint,n=e.data,o=i.useReducer(d,{status:"idle",responseData:null,errorMessage:null}),u=(0,a.Z)(o,2),l=u[0],c=u[1],p=n?JSON.stringify(n):null;return i.useEffect((function(){p&&(c({type:"START"}),window.fetch(r,{method:"POST",body:p,headers:{"content-type":"application/json"}}).then(function(){var e=(0,t.Z)((0,s.Z)().mark((function e(r){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:n=e.sent,r.ok?c({type:"RESOLVE",responseData:n}):c({type:"REJECT",error:n});case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()))}),[p,r]),l}({endpoint:"https://auth-provider.example.com/api/login",data:n}),h=p.status,f=p.responseData,m=p.errorMessage;return(0,l.jsxs)(l.Fragment,{children:["resolved"===h?(0,l.jsxs)("div",{children:["Welcome ",(0,l.jsx)("strong",{children:f.username})]}):(0,l.jsx)(o.Z,{onSubmit:function(e){return c(e)}}),(0,l.jsxs)("div",{style:{height:200},children:["pending"===h?(0,l.jsx)(u.Z,{}):null,"rejected"===h?(0,l.jsx)("div",{role:"alert",style:{color:"red"},children:m}):null]})]})},p=c}}]);
//# sourceMappingURL=878.f718a563.chunk.js.map