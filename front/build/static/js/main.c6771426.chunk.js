(this["webpackJsonpurlshortener-front"]=this["webpackJsonpurlshortener-front"]||[]).push([[0],{119:function(e,t,r){},120:function(e,t,r){},240:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(22),i=r.n(s),c=(r(119),r(120),r(121),r(55)),l=r(11),o=r(38),d=r(268),h=r(257),j=r(269),u=r(270),b=r(264),x=r(258),O=r(4);var p=function(e){return e.external?Object(O.jsx)("a",{href:e.to,target:"_blank",rel:"noreferrer noopener",children:e.children}):Object(O.jsx)(c.b,{to:e.to,children:e.children})},g=r.p+"static/media/logo.88987fbf.png";class m extends n.a.Component{constructor(e){super(e);let t=0;window.location.pathname.indexOf("/add")>-1&&(t=1),window.location.pathname.indexOf("/about")>-1&&(t=2),this.state={activeItem:t}}render(){const{activeItem:e}=this.state,t=Object(O.jsx)(o.a,{onSelect:this.onNavSelect,"aria-label":"Nav",variant:"horizontal",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(p,{to:"/",children:Object(O.jsx)(h.a,{itemId:0,isActive:0===e,to:"/",children:"Current Shorties"})}),Object(O.jsx)(p,{to:"/add",children:Object(O.jsx)(h.a,{itemId:1,isActive:1===e,to:"/add",children:"Add New"})}),Object(O.jsx)(p,{to:"/about",children:Object(O.jsx)(h.a,{itemId:2,isActive:2===e,to:"/about",children:"About"})})]})}),r=Object(O.jsx)(j.a,{logo:Object(O.jsx)(u.a,{src:g,alt:"URL Shorties Logo"}),topNav:t});return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsx)(b.a,{header:r,mainContainerId:"main-content-page-layout-horizontal-nav",children:Object(O.jsx)(x.a,{variant:x.b.light,children:this.props.children})})})}}const v=r(35);var S=new class{constructor(){this.url=v.BASE_URL}async getServerStatus(){return await fetch(`${this.url}/health`).then((e=>e.json()))}async getUrls(){return await fetch(`${this.url}/urls`).then((e=>e.json()))}async addUrl(e){"http"!==e.url.substr(0,4)&&(e.url="http://"+e.url),"/"!==e.route.substr(0,1)&&(e.route="/"+e.route);return await fetch(`${this.url}/urls`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()))}},f=r(263),R=r(262),I=r(267),C=r(266),U=r(35),w=r(111),y=r.n(w);class T extends n.a.Component{constructor(e){super(e),this.state={urls:[]}}async componentDidMount(){let e=await S.getUrls();this.setState({urls:e})}render(){const{urls:e}=this.state,t=e.map((e=>[e.route,{title:Object(O.jsx)(p,{to:e.url,external:!0,children:e.url})},{title:Object(O.jsx)(p,{to:`${U.REDIRECTOR_URL}${e.route}`,external:!0,children:Object(O.jsx)(y.a,{})})}]));return Object(O.jsxs)(m,{children:[0===e.length&&Object(O.jsx)(f.a,{variant:"warning",isInline:!0,title:"No routes defined.",children:'You can use the "Add New" link in the top navigation to add your first route."'}),Object(O.jsxs)(R.a,{"aria-label":"List of URLs",variant:"compact",borders:"compactBorderless",cells:["Short Url","Redirects To","Link"],rows:t,children:[Object(O.jsx)(I.a,{}),Object(O.jsx)(C.a,{})]})]})}}var L=r(271),A=r(259),F=r(260),N=r(272),E=r(261),k=r(265);class D extends n.a.Component{constructor(e){super(e),this.state={route:"",url:"",created:!1},this.handleTextInputChange=this.handleTextInputChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleTextInputChange(e,t){let r={};r[t.target.id]=e,this.setState(r)}async handleSubmit(){let e={route:this.state.route,url:this.state.url};await S.addUrl(e),this.setState({route:"",url:"",created:!0}),setTimeout((()=>this.setState({created:!1})),5e3)}render(){const{created:e}=this.state;return Object(O.jsxs)(m,{children:[Object(O.jsx)(x.a,{children:Object(O.jsx)(L.a,{headingLevel:"h1",children:"Add a new redirection"})}),e&&Object(O.jsx)(x.a,{children:Object(O.jsx)(f.a,{variant:"success",isInline:!0,title:"New redirection successfully created"})}),Object(O.jsx)(x.a,{children:Object(O.jsxs)(A.a,{isHorizontal:!0,children:[Object(O.jsx)(F.a,{label:"Route",isRequired:!0,fieldId:"route",helperText:"Route in the redirector service (/shorturl)",children:Object(O.jsx)(N.a,{value:this.state.route,isRequired:!0,type:"text",id:"route","aria-describedby":"Route",name:"route",onChange:this.handleTextInputChange})}),Object(O.jsx)(F.a,{label:"Url",isRequired:!0,fieldId:"url",helperText:"URL to redirect to (http://longurl.com/service?option=1",children:Object(O.jsx)(N.a,{value:this.state.url,isRequired:!0,type:"text",id:"url","aria-describedby":"url",name:"url",onChange:this.handleTextInputChange})}),Object(O.jsxs)(E.a,{children:[Object(O.jsx)(k.a,{variant:"primary",onClick:this.handleSubmit,children:"Create Redirection"}),Object(O.jsx)(k.a,{variant:"link",children:"Cancel"})]})]})})]})}}class $ extends n.a.Component{constructor(e){super(e),this.state={status:{server:!1,database:!1,redirector:!1}}}async componentDidMount(){S.getServerStatus().then((e=>{e&&this.setState({status:e})})).catch((e=>{console.log(e),this.setState({status:{server:!1,database:!1}})})),fetch(`${U.REDIRECTOR_URL}/health`).then((e=>e.json())).then((e=>{this.setState((e=>(e.status.redirector=!0,e)))})).catch((e=>{console.log(e),this.setState((e=>(e.status.redirector=!1,e)))}))}render(){const{status:e}=this.state;return Object(O.jsxs)(m,{children:[Object(O.jsx)(x.a,{children:Object(O.jsx)(L.a,{headingLevel:"h1",children:"Server Status"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(f.a,{variant:"info",isInline:!0,title:"Hostname",children:Object(O.jsx)(n.a.Fragment,{children:U.HOSTNAME})})}),Object(O.jsx)(x.a,{children:Object(O.jsxs)(f.a,{variant:e.server?"success":"danger",isInline:!0,title:"Server Status",children:[e.server&&Object(O.jsx)(n.a.Fragment,{children:"Up and running"}),!e.server&&Object(O.jsx)(n.a.Fragment,{children:"Unreachable"})]})}),Object(O.jsx)(x.a,{children:Object(O.jsxs)(f.a,{variant:e.database?"success":"danger",isInline:!0,title:"Database Status",children:[e.database&&Object(O.jsx)(n.a.Fragment,{children:"Up and running"}),!e.database&&Object(O.jsx)(n.a.Fragment,{children:"Unreachable"})]})}),Object(O.jsx)(x.a,{children:Object(O.jsxs)(f.a,{variant:e.redirector?"success":"danger",isInline:!0,title:"Redirection Server Status",children:[e.redirector&&Object(O.jsx)(n.a.Fragment,{children:"Up and running"}),!e.redirector&&Object(O.jsx)(n.a.Fragment,{children:"Unreachable"})]})})]})}}var _=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(c.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:T}),Object(O.jsx)(l.a,{path:"/add",component:D}),Object(O.jsx)(l.a,{path:"/about",component:$})]})})})};var B=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,273)).then((t=>{let{getCLS:r,getFID:a,getFCP:n,getLCP:s,getTTFB:i}=t;r(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),B()},35:function(e){e.exports=JSON.parse('{"BASE_URL":"http://localhost:8888","REDIRECTOR_URL":"http://localhost:8080","HOSTNAME":"local"}')}},[[240,1,2]]]);
//# sourceMappingURL=main.c6771426.chunk.js.map