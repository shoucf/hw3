(this["webpackJsonp185-proj3"]=this["webpackJsonp185-proj3"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(7),r=c.n(s),a=(c(12),c(2)),o=c(3),j=c(5),l=c(4),p=(c(13),c(14),c(0)),u=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsx)("a",{onClick:this.props.clickFunc,children:this.props.content})}}]),c}(n.a.Component),d=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={tabId:e.props.TabId},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"nav-container",children:[Object(p.jsx)(u,{clickFunc:function(){e.clicked("Text")},content:"Text"}),Object(p.jsx)(u,{clickFunc:function(){e.clicked("Image")},content:"Image"}),Object(p.jsx)(u,{clickFunc:function(){e.clicked("Video")},content:"Video"}),Object(p.jsx)(u,{clickFunc:function(){e.clicked("Table")},content:"Table"}),Object(p.jsx)(u,{clickFunc:function(){e.clicked("Email")},content:"Email"})]})})}},{key:"clicked",value:function(e){this.props.Handler(e),this.setState({tabId:e})}}]),c}(n.a.Component),m=(c(16),c(17),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={msg:"",email:""},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Email: "}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{name:"email",value:this.state.email,onChange:this.handleChange.bind(this)})}),Object(p.jsx)("label",{children:this.state.msg?this.state.msg:""})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:this.submit.bind(this),type:"submit",children:"Submit"})})]})}},{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"submit",value:function(){var e=document.getElementsByName("email")[0].value;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(gmail\.com|ucsb\.edu)$/.test(String(e).toLowerCase())?this.setState({msg:"Email successfully recorded"}):this.setState({msg:"Invalid email address"})}}]),c}(n.a.Component)),b=(c(18),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var i;return Object(a.a)(this,c),(i=t.call(this,e)).state={overlay:!1,vid:""},i.x=n.a.createRef(),i}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{display:this.state.overlay?"block":"none"},className:"overlay",children:Object(p.jsx)("video",{controls:!0,height:"".concat(window.innerHeight/2,"px"),width:"".concat(window.innerHeight/2,"px"),ref:this.x,children:Object(p.jsx)("source",{id:"overlay",src:this.state.vid,type:"video/mp4"})})}),Object(p.jsx)("div",{className:"papa",style:{},onClick:this.disappear.bind(this),children:Object(p.jsxs)("div",{className:"image-container",style:{opacity:this.state.overlay?"0.2":"1"},children:[Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"1.mp4")},children:Object(p.jsx)("source",{src:"1.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"2.mp4")},children:Object(p.jsx)("source",{src:"2.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"3.mp4")},children:Object(p.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"3.mp4")},children:Object(p.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"1.mp4")},children:Object(p.jsx)("source",{src:"1.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"2.mp4")},children:Object(p.jsx)("source",{src:"2.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"3.mp4")},children:Object(p.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"3.mp4")},children:Object(p.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"1.mp4")},children:Object(p.jsx)("source",{src:"1.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"2.mp4")},children:Object(p.jsx)("source",{src:"2.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"3.mp4")},children:Object(p.jsx)("source",{src:"3.mp4",type:"video/mp4"})}),Object(p.jsx)("video",{className:"grid-item",controls:!0,onClick:function(t){return e.popup(t,"3.mp4")},children:Object(p.jsx)("source",{src:"3.mp4",type:"video/mp4"})})]})})]})}},{key:"popup",value:function(e,t){this.state.overlay||(this.setState({vid:t,overlay:!0}),e.preventDefault(),e.stopPropagation(),this.forceUpdate(),this.x.current.load())}},{key:"disappear",value:function(e){this.setState({overlay:!1}),e.preventDefault(),e.stopPropagation()}}]),c}(n.a.Component)),g=(c(19),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:"login-container",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Pig's Name: "}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{name:"fn"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Pig's Owner: "}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{name:"ln"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Pig Breed: "}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"radio",id:"sc",name:"pi",value:"sc",defaultChecked:!0}),Object(p.jsx)("label",{htmlFor:"sc",children:"Ralphs Pig"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"radio",id:"gv",name:"pi",value:"gv"}),Object(p.jsx)("label",{htmlFor:"gv",children:"Costco Pig"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"radio",id:"tb",name:"pi",value:"tb"}),Object(p.jsx)("label",{htmlFor:"tb",children:"Peppa Pig"})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"submit",value:"Done"})})]})}}]),c}(n.a.Component)),O=(c(20),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={overlay:!1,vid:"",goup:!1},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(t){(void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)/window.innerHeight>.25?e.setState({goup:!0}):e.setState({goup:!1})}.bind(this)}},{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{display:this.state.overlay?"block":"none"},className:"overlay",children:Object(p.jsx)("img",{src:this.state.vid,height:"".concat(window.innerHeight/2,"px"),width:"".concat(window.innerHeight/2,"px")})}),Object(p.jsxs)("div",{onClick:this.disappear.bind(this),className:"image-container",style:{opacity:this.state.overlay?"0.2":"1"},children:[Object(p.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(t){return e.popup(t,"1.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(t){return e.popup(t,"2.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(t){return e.popup(t,"3.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(t){return e.popup(t,"4.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(t){return e.popup(t,"5.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(t){return e.popup(t,"6.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(t){return e.popup(t,"1.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(t){return e.popup(t,"2.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(t){return e.popup(t,"3.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(t){return e.popup(t,"4.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(t){return e.popup(t,"5.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(t){return e.popup(t,"6.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(t){return e.popup(t,"1.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(t){return e.popup(t,"2.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(t){return e.popup(t,"3.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(t){return e.popup(t,"4.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(t){return e.popup(t,"5.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(t){return e.popup(t,"6.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(t){return e.popup(t,"1.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(t){return e.popup(t,"2.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(t){return e.popup(t,"3.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(t){return e.popup(t,"4.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(t){return e.popup(t,"5.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(t){return e.popup(t,"6.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(t){return e.popup(t,"1.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(t){return e.popup(t,"2.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(t){return e.popup(t,"3.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(t){return e.popup(t,"4.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(t){return e.popup(t,"5.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(t){return e.popup(t,"6.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"1.jpg",alt:"",onClick:function(t){return e.popup(t,"1.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"2.jpg",alt:"",onClick:function(t){return e.popup(t,"2.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"3.jpg",alt:"",onClick:function(t){return e.popup(t,"3.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"4.jpg",alt:"",onClick:function(t){return e.popup(t,"4.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"5.jpg",alt:"",onClick:function(t){return e.popup(t,"5.jpg")}}),Object(p.jsx)("img",{className:"grid-item",src:"6.jpg",alt:"",onClick:function(t){return e.popup(t,"6.jpg")}})]}),this.state.goup?Object(p.jsx)("div",{id:"scrollshow",children:Object(p.jsx)("div",{className:"scrollv",onClick:function(){return window.scrollTo(0,0)},children:"^"})}):Object(p.jsx)(p.Fragment,{})]})}},{key:"popup",value:function(e,t){this.state.overlay||(this.setState({vid:t,overlay:!0}),e.preventDefault(),e.stopPropagation(),this.forceUpdate())}},{key:"disappear",value:function(e){this.setState({overlay:!1}),e.preventDefault(),e.stopPropagation()}}]),c}(n.a.Component)),h=(c(21),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"title",children:"Piggies Price"}),Object(p.jsxs)("table",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{fontWeight:"800"},children:"Pig Name"}),Object(p.jsx)("td",{style:{fontWeight:"800"},children:"Pig Origin Country"}),Object(p.jsx)("td",{style:{fontWeight:"800"},children:"Price"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:"https://www.peppapig.com/",children:"Peppa Pig"})}),Object(p.jsx)("td",{children:"Britain"}),Object(p.jsx)("td",{children:"$20/lbs"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:"https://www.ralphs.com/pl/pork-roasts-tenderloins/0500600005?fulfillment=all",children:"Ralphs Pig"})}),Object(p.jsx)("td",{children:"United State"}),Object(p.jsx)("td",{children:"$1.99/lbs"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:"https://www.costco.com/pork.html",children:"Costco Pig"})}),Object(p.jsx)("td",{children:"United State"}),Object(p.jsx)("td",{children:"$8.99/lbs"})]})]})]})}}]),c}(n.a.Component)),x=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"kcontainer",children:"Text"==this.props.TabId?Object(p.jsx)(g,{}):"Image"==this.props.TabId?Object(p.jsx)(O,{}):"Video"==this.props.TabId?Object(p.jsx)(b,{}):"Table"==this.props.TabId?Object(p.jsx)(h,{}):"Email"==this.props.TabId?Object(p.jsx)(m,{}):Object(p.jsx)("p",{})})}}]),c}(n.a.Component),v=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={tabId:"Text"},e}return Object(o.a)(c,[{key:"updateTab",value:function(e){this.setState({tabId:e})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(d,{TabId:this.state.tabId,Handler:this.updateTab.bind(this)}),Object(p.jsx)(x,{TabId:this.state.tabId})]})}}]),c}(n.a.Component),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),f()}],[[22,1,2]]]);
//# sourceMappingURL=main.b661befd.chunk.js.map