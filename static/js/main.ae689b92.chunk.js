(this["webpackJsonp185-proj3"]=this["webpackJsonp185-proj3"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var i=c(1),n=c.n(i),s=c(7),r=c.n(s),a=(c(12),c(2)),o=c(3),j=c(5),p=c(4),l=(c(13),c(14),c(0)),u=function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsx)("a",{onClick:this.props.clickFunc,style:{background:this.props.tab===this.props.content?"#aaa":"transparent"},children:this.props.content})}}]),c}(n.a.Component),d=function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={tabId:t.props.TabId},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this;return Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"nav-container",children:[Object(l.jsx)(u,{clickFunc:function(){t.clicked("Text")},content:"Text",tab:this.state.tabId}),Object(l.jsx)(u,{clickFunc:function(){t.clicked("Image")},content:"Image",tab:this.state.tabId}),Object(l.jsx)(u,{clickFunc:function(){t.clicked("Video")},content:"Video",tab:this.state.tabId}),Object(l.jsx)(u,{clickFunc:function(){t.clicked("Table")},content:"Table",tab:this.state.tabId}),Object(l.jsx)(u,{clickFunc:function(){t.clicked("Email")},content:"Email",tab:this.state.tabId})]})})}},{key:"clicked",value:function(t){this.props.Handler(t),this.setState({tabId:t})}}]),c}(n.a.Component),b=(c(16),c(17),function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={msg:"",email:""},t}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Email: "}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{name:"email",value:this.state.email,onChange:this.handleChange.bind(this)})}),Object(l.jsx)("label",{children:this.state.msg?this.state.msg:""})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:this.submit.bind(this),type:"submit",children:"Submit"})})]})}},{key:"handleChange",value:function(t){this.setState({email:t.target.value})}},{key:"submit",value:function(){var t=document.getElementsByName("email")[0].value;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(gmail\.com|ucsb\.edu)$/.test(String(t).toLowerCase())?this.setState({msg:"Email successfully recorded"}):this.setState({msg:"Invalid email address"})}}]),c}(n.a.Component)),m=(c(18),function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(t){var i;return Object(a.a)(this,c),(i=e.call(this,t)).state={overlay:!1,vid:""},i.x=n.a.createRef(),i}return Object(o.a)(c,[{key:"render",value:function(){var t=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{display:this.state.overlay?"block":"none"},className:"overlay",children:Object(l.jsx)("video",{controls:!0,height:"".concat(window.innerHeight/2,"px"),width:"".concat(window.innerHeight/2,"px"),ref:this.x,children:Object(l.jsx)("source",{id:"overlay",src:this.state.vid,type:"video/mp4"})})}),Object(l.jsx)("div",{className:"papa",style:{},onClick:this.disappear.bind(this),children:Object(l.jsxs)("div",{className:"image-container",style:{opacity:this.state.overlay?"0.2":"1"},children:[Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"1.mp4")},children:Object(l.jsx)("source",{src:"1.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"2.mp4")},children:Object(l.jsx)("source",{src:"2.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"3.mp4")},children:Object(l.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"3.mp4")},children:Object(l.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"1.mp4")},children:Object(l.jsx)("source",{src:"1.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"2.mp4")},children:Object(l.jsx)("source",{src:"2.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"3.mp4")},children:Object(l.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"3.mp4")},children:Object(l.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"1.mp4")},children:Object(l.jsx)("source",{src:"1.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"2.mp4")},children:Object(l.jsx)("source",{src:"2.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"3.mp4")},children:Object(l.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(l.jsx)("video",{className:"grid-item",controls:!0,onClick:function(e){return t.popup(e,"3.mp4")},children:Object(l.jsx)("source",{src:"3.mp4",type:"video/mp4"})})]})})]})}},{key:"popup",value:function(t,e){this.state.overlay||(this.setState({vid:e,overlay:!0}),t.preventDefault(),t.stopPropagation(),this.forceUpdate(),this.x.current.load())}},{key:"disappear",value:function(t){this.setState({overlay:!1}),t.preventDefault(),t.stopPropagation()}}]),c}(n.a.Component)),g=(c(19),function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("form",{className:"login-container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Pig's Name: "}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{name:"fn"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Pig's Owner: "}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{name:"ln"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Pig Breed: "}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"radio",id:"sc",name:"pi",value:"sc",defaultChecked:!0}),Object(l.jsx)("label",{htmlFor:"sc",children:"Ralphs Pig"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"radio",id:"gv",name:"pi",value:"gv"}),Object(l.jsx)("label",{htmlFor:"gv",children:"Costco Pig"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"radio",id:"tb",name:"pi",value:"tb"}),Object(l.jsx)("label",{htmlFor:"tb",children:"Peppa Pig"})]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"submit",value:"Done"})})]})}}]),c}(n.a.Component)),h=(c(20),function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={overlay:!1,vid:"",goup:!1},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;window.onscroll=function(e){(void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)/window.innerHeight>.25?t.setState({goup:!0}):t.setState({goup:!1})}.bind(this)}},{key:"render",value:function(){var t=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{display:this.state.overlay?"block":"none"},className:"overlay",children:Object(l.jsx)("img",{src:this.state.vid,height:"".concat(window.innerHeight/2,"px"),width:"".concat(window.innerHeight/2,"px")})}),Object(l.jsxs)("div",{onClick:this.disappear.bind(this),className:"image-container",style:{opacity:this.state.overlay?"0.2":"1"},children:[Object(l.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(e){return t.popup(e,"1.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(e){return t.popup(e,"2.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(e){return t.popup(e,"3.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(e){return t.popup(e,"4.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(e){return t.popup(e,"5.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(e){return t.popup(e,"6.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(e){return t.popup(e,"1.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(e){return t.popup(e,"2.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(e){return t.popup(e,"3.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(e){return t.popup(e,"4.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(e){return t.popup(e,"5.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(e){return t.popup(e,"6.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(e){return t.popup(e,"1.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(e){return t.popup(e,"2.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(e){return t.popup(e,"3.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(e){return t.popup(e,"4.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(e){return t.popup(e,"5.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(e){return t.popup(e,"6.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(e){return t.popup(e,"1.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(e){return t.popup(e,"2.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(e){return t.popup(e,"3.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(e){return t.popup(e,"4.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(e){return t.popup(e,"5.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(e){return t.popup(e,"6.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(e){return t.popup(e,"1.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(e){return t.popup(e,"2.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(e){return t.popup(e,"3.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(e){return t.popup(e,"4.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(e){return t.popup(e,"5.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(e){return t.popup(e,"6.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(e){return t.popup(e,"1.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(e){return t.popup(e,"2.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(e){return t.popup(e,"3.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(e){return t.popup(e,"4.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(e){return t.popup(e,"5.jpg")}}),Object(l.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(e){return t.popup(e,"6.jpg")}})]}),this.state.goup?Object(l.jsx)("div",{id:"scrollshow",children:Object(l.jsx)("div",{className:"scrollv",onClick:function(){return window.scrollTo(0,0)},children:"^"})}):Object(l.jsx)(l.Fragment,{})]})}},{key:"popup",value:function(t,e){this.state.overlay||(this.setState({vid:e,overlay:!0}),t.preventDefault(),t.stopPropagation(),this.forceUpdate())}},{key:"disappear",value:function(t){this.setState({overlay:!1}),t.preventDefault(),t.stopPropagation()}}]),c}(n.a.Component)),O=(c(21),function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"Piggies Price"}),Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:{fontWeight:"800"},children:"Pig Name"}),Object(l.jsx)("td",{style:{fontWeight:"800"},children:"Pig Origin Country"}),Object(l.jsx)("td",{style:{fontWeight:"800"},children:"Price"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"https://www.peppapig.com/",children:"Peppa Pig"})}),Object(l.jsx)("td",{children:"Britain"}),Object(l.jsx)("td",{children:"$20/lbs"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"https://www.ralphs.com/pl/pork-roasts-tenderloins/0500600005?fulfillment=all",children:"Ralphs Pig"})}),Object(l.jsx)("td",{children:"United State"}),Object(l.jsx)("td",{children:"$1.99/lbs"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"https://www.costco.com/pork.html",children:"Costco Pig"})}),Object(l.jsx)("td",{children:"United State"}),Object(l.jsx)("td",{children:"$8.99/lbs"})]})]})]})}}]),c}(n.a.Component)),x=function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"kcontainer",children:"Text"==this.props.TabId?Object(l.jsx)(g,{}):"Image"==this.props.TabId?Object(l.jsx)(h,{}):"Video"==this.props.TabId?Object(l.jsx)(m,{}):"Table"==this.props.TabId?Object(l.jsx)(O,{}):"Email"==this.props.TabId?Object(l.jsx)(b,{}):Object(l.jsx)("p",{})})}}]),c}(n.a.Component),v=function(t){Object(j.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={tabId:"Text"},t}return Object(o.a)(c,[{key:"updateTab",value:function(t){this.setState({tabId:t})}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{TabId:this.state.tabId,Handler:this.updateTab.bind(this)}),Object(l.jsx)(x,{TabId:this.state.tabId})]})}}]),c}(n.a.Component),f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(e){var c=e.getCLS,i=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),i(t),n(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),f()}],[[22,1,2]]]);
//# sourceMappingURL=main.ae689b92.chunk.js.map