"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[22510],{28399:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),o=n(88650),l=n.n(o),s=n(1597),r=n(64905),i=n(81151),c=n(75900),m=n.n(c);var d=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:r,branch:i}=n||o,c=`${l}/edit/${i}${r}/src/pages${t}`;return l?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=n(56328),g=n(51721);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===o,i=new RegExp(`${o}/?(#.*)?$`),c=n.replace(i,t);return a.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(a.Component);var b=y,h=n(17680),k=n(75387),f=n(50041);var E=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:y}=t,{tabs:f,title:v,theme:T,description:x,keywords:C,date:w}=m,{interiorTheme:P}=(0,k.Z)(),{site:{pathPrefix:N}}=(0,s.useStaticQuery)("2456312558"),L=N?o.pathname.replace(N,""):o.pathname,D=f?L.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",M=T||P;return a.createElement(i.Z,{tabs:f,homepage:!1,theme:M,pageTitle:v,pageDescription:x,pageKeywords:C,titleType:y},a.createElement(d,{title:c?a.createElement(c,null):v,label:"label",tabs:f,theme:M}),f&&a.createElement(b,{title:v,slug:L,tabs:f,currentTab:D}),a.createElement(h.Z,{padded:!0},n,a.createElement(u,{relativePagePath:g}),a.createElement(E,{date:w})),a.createElement(p.Z,{pageContext:t,location:o,slug:L,tabs:f,currentTab:D}),a.createElement(r.Z,null))}},70509:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return k}});var a=n(45987),o=(n(67294),n(64983)),l=n(28399);const s=["components"],r={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=i("PageDescription"),m=i("Row"),d=i("Column"),u=i("ResourceCard"),p=i("MdxIcon"),g=i("ComponentDemo"),y=i("ComponentVariant"),b={_frontmatter:r},h=l.Z;function k(e){let{components:t}=e,n=(0,a.Z)(e,s);return(0,o.kt)(h,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"title: Inline loading\ndescription:\nInline loading spinners notify a user that their action is being processed.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the inline loading component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-inlineloading--inline-loading",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-inline-loading--basic",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvinlineloading--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"vue",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-inline-loading--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(g,{components:[{id:"inline-loading",label:"Inline loading"}],mdxType:"ComponentDemo"},(0,o.kt)(y,{id:"inline-loading",knobs:{InlineLoading:["status"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-inlineloading--inline-loading",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-inline-loading--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvinlineloading--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-inline-loading--default"},mdxType:"ComponentVariant"},'\n    <InlineLoading description="Loading..." />\n  ')))}k.isMDXComponent=!0}}]);