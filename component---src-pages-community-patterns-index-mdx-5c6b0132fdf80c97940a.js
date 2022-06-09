"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[49911],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(88650),o=a.n(r),l=a(1597),s=a(64905),i=a(81151),m=a(75900),c=a.n(m);var p=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:i}=a||r,m=`${o}/edit/${i}${s}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(56328),h=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),s=t===r,i=new RegExp(`${r}/?(#.*)?$`),m=a.replace(i,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=g,k=a(17680),N=a(75387),f=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:r,Title:m}=e;const{frontmatter:c={},relativePagePath:h,titleType:g}=t,{tabs:f,title:v,theme:w,description:E,keywords:P,date:C}=c,{interiorTheme:x}=(0,N.Z)(),{site:{pathPrefix:T}}=(0,l.useStaticQuery)("2456312558"),H=T?r.pathname.replace(T,""):r.pathname,D=f?H.split("/").filter(Boolean).slice(-1)[0]||o()(f[0],{lower:!0}):"",B=w||x;return n.createElement(i.Z,{tabs:f,homepage:!1,theme:B,pageTitle:v,pageDescription:E,pageKeywords:P,titleType:g},n.createElement(p,{title:m?n.createElement(m,null):v,label:"label",tabs:f,theme:B}),f&&n.createElement(b,{title:v,slug:H,tabs:f,currentTab:D}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:h}),n.createElement(y,{date:C})),n.createElement(u.Z,{pageContext:t,location:r,slug:H,tabs:f,currentTab:D}),n.createElement(s.Z,null))}},7612:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399);const l=["components"],s={},i=(m="PageDescription",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const c={_frontmatter:s},p=o.Z;function d(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,r.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"title: Patterns\ndescription:\nThese patterns are developed and maintained by members of the Carbon\ncommunity."),(0,r.kt)(i,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Patterns are best practice solutions for how a user achieves a goal. They show\nreusable combinations of components and templates that address common user\nobjectives with sequences and flows.")),(0,r.kt)("h2",null,"Community patterns"),(0,r.kt)("p",null,"These patterns are developed and maintained by members of the Carbon community.\nFor support, contact the maintainers listed on each page. They are not supported\nby the core Carbon team."),(0,r.kt)("p",null,"These patterns may change over time, and they may be incomplete or experimental.\nFor work that has been approved for universal use by the Carbon governance\nboard, see ",(0,r.kt)("a",{parentName:"p",href:"/patterns/overview"},"Carbon patterns"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Some of this content is accessible to IBMers only.")),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/community/patterns/chatbot/overview"},"Chatbots")),(0,r.kt)("td",{parentName:"tr",align:null},"How to design chatbots for users using natural language.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pages.github.ibm.com/watson-health/docs/guidelines/content-design/using-the-adoption-patterns.html"},"Content: in-app learning")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Accessible to IBMers only.")," A set of patterns to help users understand key features. Includes guidance for creating the following: ",(0,r.kt)("a",{parentName:"td",href:"https://pages.github.ibm.com/Watson-Health/components/welcome-screen/overview.html"},"welcome screens"),", ",(0,r.kt)("a",{parentName:"td",href:"https://pages.github.ibm.com/Watson-Health/components/getting-started/overview.html"},"getting started"),", ",(0,r.kt)("a",{parentName:"td",href:"https://pages.github.ibm.com/Watson-Health/components/in-context-help/overview.html"},"in-context help and guidance"),", ",(0,r.kt)("a",{parentName:"td",href:"https://pages.github.ibm.com/Watson-Health/components/global-help/overview.html"},"global help and guidance"),", and ",(0,r.kt)("a",{parentName:"td",href:"https://pages.github.ibm.com/Watson-Health/components/updates/overview.html"},"what’s new/updates"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/community/patterns/create-flows"},"Create flows")),(0,r.kt)("td",{parentName:"tr",align:null},"How to generate a new resource; compare adding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/community/patterns/edit-pattern"},"Edit")),(0,r.kt)("td",{parentName:"tr",align:null},"How to make changes to an existing resource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/community/patterns/export-pattern"},"Export")),(0,r.kt)("td",{parentName:"tr",align:null},"How to change the format of the object or resources as you are exporting externally from the system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/community/patterns/generate-an-api-key"},"Generate an API key")),(0,r.kt)("td",{parentName:"tr",align:null},"Helps ensure users know what the key is for, the security implications, and the final destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/community/patterns/import-pattern"},"Import")),(0,r.kt)("td",{parentName:"tr",align:null},"Transfers data or objects from an external source into a system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pages.github.ibm.com/CDAI-design/CDAI-design-website/patterns/order-summary/usage"},"Order summary")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Accessible to IBMers only.")," A summary of a platform’s functionality, status, or individual service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/community/patterns/remove-pattern"},"Remove")),(0,r.kt)("td",{parentName:"tr",align:null},"An action that moves information from one location to another. Compare deletion.")))))}d.isMDXComponent=!0}}]);