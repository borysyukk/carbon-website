"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[58850],{28399:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(67294),r=a(88650),o=a.n(r),s=a(1597),l=a(64905),i=a(81151),c=a(75900),p=a.n(c);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:i}=a||r,c=`${o}/edit/${i}${l}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},h=a(56328),u=a(51721);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===r,i=new RegExp(`${r}/?(#.*)?$`),c=a.replace(i,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var g=y,f=a(17680),k=a(75387),b=a(50041);var T=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:p={},relativePagePath:u,titleType:y}=t,{tabs:b,title:x,theme:w,description:v,keywords:D,date:N}=p,{interiorTheme:E}=(0,k.Z)(),{site:{pathPrefix:P}}=(0,s.useStaticQuery)("2456312558"),M=P?r.pathname.replace(P,""):r.pathname,I=b?M.split("/").filter(Boolean).slice(-1)[0]||o()(b[0],{lower:!0}):"",C=w||E;return n.createElement(i.Z,{tabs:b,homepage:!1,theme:C,pageTitle:x,pageDescription:v,pageKeywords:D,titleType:y},n.createElement(d,{title:c?n.createElement(c,null):x,label:"label",tabs:b,theme:C}),b&&n.createElement(g,{title:x,slug:M,tabs:b,currentTab:I}),n.createElement(f.Z,{padded:!0},a,n.createElement(m,{relativePagePath:u}),n.createElement(T,{date:N})),n.createElement(h.Z,{pageContext:t,location:r,slug:M,tabs:b,currentTab:I}),n.createElement(l.Z,null))}},95465:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return w}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399),s=a(14458),l=a(7335);const i=["components"],c={},p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("PageDescription"),m=p("AnchorLinks"),h=p("AnchorLink"),u=p("DoDontRow"),y=p("DoDont"),g=p("Row"),f=p("Column"),k=p("ResourceCard"),b=p("MdxIcon"),T={_frontmatter:c},x=o.Z;function w(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,r.kt)(x,Object.assign({},T,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"label:\nOur approach to the typographic system uses IBM Plex as its typeface. It has\nbeen carefully engineered with suitable scales, styles, and weights to help\ncreate clear hierarchies and organize information that guides users through\nIBM products or experiences.\ntitle: Typography\ndescription:\nTypography can help create clear hierarchies, organize information, and guide\nusers through a product or experience.\ntabs: ","[‘Overview’, ‘Styling strategies’, ‘Type sets’, ‘Code’]"),(0,r.kt)(d,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Our approach to the typographic system uses IBM Plex as its typeface. It has\nbeen carefully engineered with suitable scales, styles, and weights to help\ncreate clear hierarchies and organize information that guides users through IBM\nproducts or experiences.")),(0,r.kt)(m,{mdxType:"AnchorLinks"},(0,r.kt)(h,{mdxType:"AnchorLink"},"Type tokens and sets"),(0,r.kt)(h,{mdxType:"AnchorLink"},"Typeface: IBM Plex"),(0,r.kt)(h,{mdxType:"AnchorLink"},"Scale"),(0,r.kt)(h,{mdxType:"AnchorLink"},"Style"),(0,r.kt)(h,{mdxType:"AnchorLink"},"Type color"),(0,r.kt)(h,{mdxType:"AnchorLink"},"Resources")),(0,r.kt)("h2",null,"Type tokens and sets"),(0,r.kt)("p",null,"Carbon uses type tokens across two type sets to manage typography. Type tokens\nare pre-set configurations of typographic elements such as font size, weight, or\nleading (line height) that are specifically calibrated for use alongside\n",(0,r.kt)("a",{parentName:"p",href:"http://ibm.com/plex"},"IBM Plex")," in product. Selecting the appropriate type style\nis determined by layout or template structure. Layouts may have several levels\nof architecture or areas that require varying typographic hierarchies."),(0,r.kt)("h3",null,"Productive and expressive type sets"),(0,r.kt)("p",null,"The productive type set is primarily used within product spaces, where users\nbenefit from a more condensed treatment of content to maintain focus on tasks.\nThe productive styles work together to support the hierarchy of information and\nset user expectations. On the other hand, the larger expressive type styles\nallow for a more dramatic, graphic use of type in editorial and marketing\ndesign. These type styles are excellent for long form reading and scanning, but\nwould be distracting for use in product."),(0,r.kt)("p",null,"Within ",(0,r.kt)("strong",{parentName:"p"},"Body styles")," and ",(0,r.kt)("strong",{parentName:"p"},"Utility styles"),", the same set of styles are\noffered. Productive styles are named with a suffix of ",(0,r.kt)("inlineCode",{parentName:"p"},"-01")," and expressive style\nnames have a suffix of ",(0,r.kt)("inlineCode",{parentName:"p"},"-02"),"."),(0,r.kt)("p",null,"There are two heading sets and the major difference between them is in how they\nare implemented in code. The productive type set uses fixed headings. Expressive\nheadings are responsive and the type styles change size at different\nbreakpoints."),(0,r.kt)("p",null,"For more detail, see\n",(0,r.kt)("a",{parentName:"p",href:"/guidelines/typography/styling-strategies/"},"Styling strategies")," and\n",(0,r.kt)("a",{parentName:"p",href:"/guidelines/typography/type-sets/"},"Type sets"),"."),(0,r.kt)("h2",null,"Typeface: IBM Plex"),(0,r.kt)("p",null,"Carbon uses the open-source typeface ",(0,r.kt)("strong",{parentName:"p"},"IBM Plex"),". It has been carefully\ndesigned to meet IBM’s needs as a global technology company and reflect IBM’s\nspirit, beliefs, and design principles. IBM Plex can be accessed and downloaded\nfrom the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ibm/plex"},"Plex GitHub Repo"),"."),(0,r.kt)(l.Z,{type:"types",mdxType:"TypeWeight"}),(0,r.kt)("h3",null,"Sans-serif font stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;\n")),(0,r.kt)("h3",null,"Serif font stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"font-family: 'IBM Plex Serif', 'Georgia', Times, serif;\n")),(0,r.kt)("h3",null,"Mono font stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',\n  'Bitstream Vera Sans Mono', Courier, monospace;\n")),(0,r.kt)("h2",null,"Scale"),(0,r.kt)("p",null,"The IBM type scale is built on a single equation. The formula for our scale was\ncreated to provide hierarchy for all types of experiences. The formula assumes\nthat y₀=12 px."),(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"TypeScaleTable"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Xn = Xn-1 + {INT[(n-2)/4] + 1} * 2\nXn: step n type size Xn-1: step n-1 type size\n")),(0,r.kt)("h2",null,"Style"),(0,r.kt)("p",null,"Typography creates purposeful texture, guiding users to read and understand the\nhierarchy of information. The right typographic treatment and the controlled\nusage of type styles helps manage the display of content, keeping it useful,\nsimple, and effective."),(0,r.kt)("h3",null,"Weights"),(0,r.kt)("p",null,"Font weight is an important typographic variable that can add emphasis and\ndifferentiate content hierarchy. Font weight and size pairings must be carefully\nbalanced. A bold weight will always have more emphasis than a lighter weight\nfont of the same size. However, a lighter weight font can rank hierarchically\nhigher than a bold font if the lighter weight type size is significantly larger\nthan the bold one."),(0,r.kt)("p",null,"We suggest using IBM Plex Light, Regular, and SemiBold for digital experiences.\nThe semibold weight is ideal for section headers, but should not be used for\nlong text."),(0,r.kt)(l.Z,{mdxType:"TypeWeight"}),(0,r.kt)("h3",null,"Italic"),(0,r.kt)("p",null,"Each weight has an italic style, which should only be used when you need to\nemphasize certain words in a sentence (titles of works, technical terms, names\nof devices, and captions)."),(0,r.kt)(l.Z,{type:"italic",mdxType:"TypeWeight"}),(0,r.kt)("h2",null,"Type color"),(0,r.kt)("p",null,"Type color should be carefully considered, with legibility and accessibility as\nparamount concerns. Keep type color neutral in running text. Use primary blue\nfor primary actions."),(0,r.kt)(u,{mdxType:"DoDontRow"},(0,r.kt)(y,{mdxType:"DoDont"},(0,r.kt)("img",{src:"/c62b2ead82d277c708c6478416bc2ed7/Typography_overview_Type-color-1.svg",alt:"Neutral color for text"})),(0,r.kt)(y,{type:"dont",mdxType:"DoDont"},(0,r.kt)("img",{src:"/6dd70c4eb05b74e0e64e319efb96e9ae/Typography_overview_Type-color-2.svg",alt:"I'm a magenta sentence for no reason"}))),(0,r.kt)(u,{mdxType:"DoDontRow"},(0,r.kt)(y,{color:"dark",mdxType:"DoDont"},(0,r.kt)("img",{src:"/bd205bd9e609d2c3fa668c47f287d18e/Typography_overview_Type-color-3.svg",alt:"Neutral color for text"})),(0,r.kt)(y,{type:"dont",color:"dark",mdxType:"DoDont"},(0,r.kt)("img",{src:"/85e6ec7a8f025768a2fb99158980ebaf/Typography_overview_Type-color-4.svg",alt:"Color is not for decoration"}))),(0,r.kt)(u,{mdxType:"DoDontRow"},(0,r.kt)(y,{caption:"Core blue colors are used for text links and primary actions",mdxType:"DoDont"},(0,r.kt)("img",{src:"/d71ae288b89e4368fb7dd5fdb9bdf49b/Typography_overview_Type-color-5.svg",alt:"Link with icon"})),(0,r.kt)(y,{caption:"Secondary actions use Gray 100 and icons",mdxType:"DoDont"},(0,r.kt)("img",{src:"/7470031ea82790f8813a4e3e9cb23e52/Typography_overview_Type-color-6.svg",alt:"Download with icon"}))),(0,r.kt)(u,{mdxType:"DoDontRow"},(0,r.kt)(y,{caption:"Other use cases for colored type are code snippets, warnings, alerts, etc.",mdxType:"DoDont"},(0,r.kt)("img",{src:"/b42ebaf8b4289e1da89c9b184b6bec3f/Typography_overview_Type-color-7.svg",alt:"Oops, something went wrong! colored text"})),(0,r.kt)(y,{mdxType:"DoDont"},(0,r.kt)("img",{src:"/b73c46a93802fc24874a9f3159a16d63/Typography_overview_Type-color-8.svg",alt:"Code snippet with colored highlight type"}))),(0,r.kt)("h2",null,"Resources"),(0,r.kt)(g,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(f,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(k,{subTitle:"Get the latest IBM Plex™ download on GitHub",href:"https://github.com/ibm/plex/releases/latest",mdxType:"ResourceCard"},(0,r.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,r.kt)(f,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(k,{subTitle:"Visit the IBM Plex™ website to learn more",href:"https://www.ibm.com/plex/",mdxType:"ResourceCard"})),(0,r.kt)(f,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(k,{subTitle:"Elements package: Type",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/type",mdxType:"ResourceCard"},(0,r.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,r.kt)(f,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(k,{subTitle:"Type package preview",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/type",mdxType:"ResourceCard"},(0,r.kt)(b,{name:"codesandbox",mdxType:"MdxIcon"})))))}w.isMDXComponent=!0}}]);