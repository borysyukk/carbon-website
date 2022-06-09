"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[24381],{28399:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(67294),o=n(88650),i=n.n(o),r=n(1597),l=n(64905),s=n(81151),c=n(75900),d=n.n(c);var u=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:s}=n||o,c=`${i}/edit/${s}${l}/src/pages${t}`;return i?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=n(56328),g=n(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===o,s=new RegExp(`${o}/?(#.*)?$`),c=n.replace(s,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(a.Component);var k=h,b=n(17680),y=n(75387),v=n(50041);var f=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(v.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:h}=t,{tabs:v,title:w,theme:T,description:x,keywords:N,date:E}=d,{interiorTheme:D}=(0,y.Z)(),{site:{pathPrefix:C}}=(0,r.useStaticQuery)("2456312558"),M=C?o.pathname.replace(C,""):o.pathname,L=v?M.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",I=T||D;return a.createElement(s.Z,{tabs:v,homepage:!1,theme:I,pageTitle:w,pageDescription:x,pageKeywords:N,titleType:h},a.createElement(u,{title:c?a.createElement(c,null):w,label:"label",tabs:v,theme:I}),v&&a.createElement(k,{title:w,slug:M,tabs:v,currentTab:L}),a.createElement(b.Z,{padded:!0},n,a.createElement(m,{relativePagePath:g}),a.createElement(f,{date:E})),a.createElement(p.Z,{pageContext:t,location:o,slug:M,tabs:v,currentTab:L}),a.createElement(l.Z,null))}},70306:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return y}});var a=n(45987),o=(n(67294),n(64983)),i=n(28399);const r=["components"],l={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=s("PageDescription"),d=s("AnchorLinks"),u=s("AnchorLink"),m=s("Row"),p=s("Column"),g=s("ResourceCard"),h=s("MdxIcon"),k={_frontmatter:l},b=i.Z;function y(e){let{components:t}=e,n=(0,a.Z)(e,r);return(0,o.kt)(b,Object.assign({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"title: Migration guide\ndescription:\nThis guide includes everything you need to migrate your offering from an\nearlier version of Carbon to v10.\ntabs: ","[‘Overview’, ‘Design’, ‘Develop’]"),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"The transition from v9 to v10 is primarily visual. The IBM color palette was\nupdated between versions and a 16-column grid was introduced.")),(0,o.kt)(d,{mdxType:"AnchorLinks"},(0,o.kt)(u,{mdxType:"AnchorLink"},"IBM Design Language"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Design kit"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Elements"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Design migration strategy")),(0,o.kt)("h2",null,"IBM Design Language"),(0,o.kt)("p",null,"Carbon v10 delivers the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/language/"},"IBM Design Language")," to product teams. It\nrepresents a complete visual refresh of the system, delivering the ethos of IBM\nDesign. Carbon v10 is a modern, open-source framework for building digital\nproducts and experiences, with tooling and guidance on color, layout,\ntypography, iconography, motion, patterns, and content."),(0,o.kt)("h2",null,"Design kit"),(0,o.kt)("p",null,"All components, colors, icons, typography, motion, and grid elements in the kit\nalign with the IBM Design Language."),(0,o.kt)("h3",null,"What changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sketch kit delivered with Sketch Cloud"),(0,o.kt)("li",{parentName:"ul"},"New color tokens"),(0,o.kt)("li",{parentName:"ul"},"Updated text styles"),(0,o.kt)("li",{parentName:"ul"},"Updated spacing"),(0,o.kt)("li",{parentName:"ul"},"Icon updates"),(0,o.kt)("li",{parentName:"ul"},"Updated layer styles")),(0,o.kt)("h4",null,"Sketch libraries"),(0,o.kt)("p",null,"Designers can subscribe to the design kit library via Sketch Cloud, and updates\nto the contents of the kit will be pushed to subscribers as they become\navailable."),(0,o.kt)("h4",null,"Icons, pictograms, and the full IBM color palette"),(0,o.kt)("p",null,"To access the IBM Design Language icons, pictograms, and colors, subscribe to\nthe\n",(0,o.kt)("a",{parentName:"p",href:"/designing/design-resources#color-grid-and-icons"},"IBM Design Language libraries"),"."),(0,o.kt)("h4",null,"Migrating to v10"),(0,o.kt)("p",null,"Upgrading to the v10 kit will not automatically change any files created in\nprevious versions of the kit. Swapping v9 symbols for v10 symbols is a manual\nprocess."),(0,o.kt)("p",null,"Although libraries from multiple versions of Carbon can exist in Sketch at the\nsame time, you should avoid using v10 symbols in an app designed with v9."),(0,o.kt)("h3",null,"Setting up the kit"),(0,o.kt)("p",null,"Head over to ",(0,o.kt)("a",{parentName:"p",href:"/designing/kits/sketch"},"Design kits")," to set up the new Sketch\nlibraries."),(0,o.kt)("h2",null,"Elements"),(0,o.kt)("h3",null,"Themes and color"),(0,o.kt)("p",null,"Carbon offers four color themes. See the\n",(0,o.kt)("a",{parentName:"p",href:"/guidelines/color/overview#themes"},"theming guidelines")," to learn how to use the\nthemes, and visit the color migration guide to learn more about color tokens\nadded in v10."),(0,o.kt)(m,{mdxType:"Row"},(0,o.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(g,{subTitle:"Migrating color",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-color.md",mdxType:"ResourceCard"},(0,o.kt)(h,{name:"github",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Icons"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/guidelines/icons/library"},"icon library")," was updated and expanded with v10.\nThe full library of icons and pictograms is available via the IBM Design\nLanguage icon ",(0,o.kt)("a",{parentName:"p",href:"/guidelines/icons/usage#resources"},"Sketch library"),"."),(0,o.kt)("p",null,"Any v9 icons should be reviewed against the new icons before publishing.\nWherever possible, replace old icons with an updated version."),(0,o.kt)(m,{mdxType:"Row"},(0,o.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(g,{subTitle:"Icon migration",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-icons.md",mdxType:"ResourceCard"},(0,o.kt)(h,{name:"github",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Typography"),(0,o.kt)("p",null,"The typeface for Carbon remains\n",(0,o.kt)("a",{parentName:"p",href:"/guidelines/typography/overview/#typeface:-ibm-plex"},"IBM Plex"),". The\n",(0,o.kt)("a",{parentName:"p",href:"/guidelines/typography/overview#type-tokens-and-sets"},"type token")," architecture\nwas redesigned for better clarity and flexibility, moving from a basic type\nscale model to a more robust token-based architecture. Work with your\ndevelopment team to discuss how this new architecture might affect your team’s\nworkflow."),(0,o.kt)(m,{mdxType:"Row"},(0,o.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(g,{subTitle:"Type migration",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-type.md",mdxType:"ResourceCard"},(0,o.kt)(h,{name:"github",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Motion"),(0,o.kt)("p",null,"Carbon v10 adheres to IBM Design Language\n",(0,o.kt)("a",{parentName:"p",href:"/guidelines/motion/overview"},"motion standards"),", designed to bring unity and\ncohesion to all motion in a user interface. All interactions that include motion\nshould abide by these standards."),(0,o.kt)("h3",null,"Layout, grid, and spacing"),(0,o.kt)("p",null,"Carbon v10 uses the 16-column ",(0,o.kt)("a",{parentName:"p",href:"/guidelines/2x-grid/overview"},"2x Grid"),". Carbon\nv10 will default to the 12-column grid with an option to switch to the 16-column\ngrid. Designers starting on new layouts using v10 should use the 16-column grid."),(0,o.kt)("p",null,"Layout and spacing token names were updated in v10 but the values remain the\nsame."),(0,o.kt)(m,{mdxType:"Row"},(0,o.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(g,{subTitle:"Layout migration",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-layout.md#migrating",mdxType:"ResourceCard"},(0,o.kt)(h,{name:"github",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Design migration strategy"),(0,o.kt)("p",null,"The fastest approach to v10 migration starts with the front-end developer.\nDevelopers should update the product’s front end code to v10 and conduct a\nvisual review with team designers. The transition should not cause any major\nbreaks in the UI but there will likely be layout and color issues. Product teams\nusing v9 components in their code should see a mostly seamless code transition."),(0,o.kt)("p",null,"Throughout visual review and iteration process, ask:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are you using type tokens?"),(0,o.kt)("li",{parentName:"ul"},"Are you using the color tokens correctly?"),(0,o.kt)("li",{parentName:"ul"},"Is the spacing between components correct?"),(0,o.kt)("li",{parentName:"ul"},"Do animations in the UI match the new motion standards?"),(0,o.kt)("li",{parentName:"ul"},"Does the general layout still work, and does it express the IBM Design\nLanguage accurately and effectively?")),(0,o.kt)("p",null,"Following this review, work any development and design issues into your team’s\nplanning workflow."))}y.isMDXComponent=!0}}]);