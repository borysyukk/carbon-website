"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[50129],{28399:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),i=a(88650),o=a.n(i),s=a(1597),l=a(64905),r=a(81151),m=a(75900),c=a.n(m);var d=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:r}=a||i,m=`${o}/edit/${r}${l}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},g=a(56328),A=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,A.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===i,r=new RegExp(`${i}/?(#.*)?$`),m=a.replace(r,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var b=u,f=a(17680),h=a(75387),k=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:a,location:i,Title:m}=e;const{frontmatter:c={},relativePagePath:A,titleType:u}=t,{tabs:k,title:y,theme:v,description:N,keywords:x,date:E}=c,{interiorTheme:R}=(0,h.Z)(),{site:{pathPrefix:L}}=(0,s.useStaticQuery)("2456312558"),I=L?i.pathname.replace(L,""):i.pathname,T=k?I.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",C=v||R;return n.createElement(r.Z,{tabs:k,homepage:!1,theme:C,pageTitle:y,pageDescription:N,pageKeywords:x,titleType:u},n.createElement(d,{title:m?n.createElement(m,null):y,label:"label",tabs:k,theme:C}),k&&n.createElement(b,{title:y,slug:I,tabs:k,currentTab:T}),n.createElement(f.Z,{padded:!0},a,n.createElement(p,{relativePagePath:A}),n.createElement(w,{date:E})),n.createElement(g.Z,{pageContext:t,location:i,slug:I,tabs:k,currentTab:T}),n.createElement(l.Z,null))}},28759:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return f}});var n=a(45987),i=(a(67294),a(64983)),o=a(28399);const s=["components"],l={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},m=r("PageDescription"),c=r("AnchorLinks"),d=r("AnchorLink"),p=r("Row"),g=r("Column"),A=r("Caption"),u={_frontmatter:l},b=o.Z;function f(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,i.kt)(b,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"title: Remove\ndescription:\nRemoving is an action that moves information from one location to another.\nRemoval can be both destructive and non-destructive. Deletion is the most\ncommon type of removal and is destructive."),(0,i.kt)("h4",null,"Maintainer:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vikkipaterson"},"Vikki Paterson")),(0,i.kt)(m,{mdxType:"PageDescription"},(0,i.kt)("p",null,"“Removing” is an action that moves information from one location to another.\nRemoval can be both destructive and non-destructive. “Deletion” is the most\ncommon type of removal and is destructive.")),(0,i.kt)(c,{mdxType:"AnchorLinks"},(0,i.kt)(d,{mdxType:"AnchorLink"},"High-impact deletion"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Medium-impact deletion"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Low-impact deletion"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Medium-impact removal"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Low-impact removal"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Anatomy")),(0,i.kt)("h3",null,"Delete / Remove variations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Variation"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"High impact")),(0,i.kt)("td",{parentName:"tr",align:null},"Action can’t be reversed and causes significant loss. The user types the resource name into the modal to confirm deletion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Medium impact")),(0,i.kt)("td",{parentName:"tr",align:null},"Action can’t be reversed and causes some loss. The user sees a modal and confirms the consequence of deletion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Low impact")),(0,i.kt)("td",{parentName:"tr",align:null},"Action is reversible or very low impact. A confirmation modal may not be required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Remove"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Medium impact")),(0,i.kt)("td",{parentName:"tr",align:null},"Action can’t be reversed and causes some loss. The user sees a modal and confirms the consequence of removal.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Low impact")),(0,i.kt)("td",{parentName:"tr",align:null},"Action is reversible or very low impact. A confirmation modal may not be required.")))),(0,i.kt)("h2",null,"High-impact deletion"),(0,i.kt)("p",null,"A high-impact deletion cannot be reversed. The action would result in a\nsignificant loss for a user if done accidentally."),(0,i.kt)("p",null,"When deleting is high-impact, a confirmation dialog should be presented to the\nuser which displays:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name of the resource"),(0,i.kt)("li",{parentName:"ul"},"Consequences of the deletion"),(0,i.kt)("li",{parentName:"ul"},"This action cannot be undone."),(0,i.kt)("li",{parentName:"ul"},"An editable text field for the name of the resource to be entered")),(0,i.kt)("p",null,"For high-impact scenarios, a user should confirm the action by manually entering\nthe name of the resource. The ‘Delete’ button is enabled when the text entered\nperfectly matches the resource name."),(0,i.kt)("p",null,"Optionally a ",(0,i.kt)("a",{parentName:"p",href:"#done-modal"},"Done modal"),", ",(0,i.kt)("a",{parentName:"p",href:"#requested-modal"},"Requested modal")," or\n",(0,i.kt)("a",{parentName:"p",href:"#notification"},"Notification")," can be used to confirm the action (or a\ncombination of one modal and a notification)."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABOUlEQVQoz6WTW4rCQBBFXUh+dBH5cAVCAtlAvtywf4LkgQkJiRrzVEFRr9yCkszEzDBM4FIP0qe7qronAPB8PqFf3//Lp+sm6tB+hz0eD9zv94GY76vPmPRBh8MBURQhTVMkSSJx13U4n884nU4i+sxRTdOgqqpxICHr9Rqe52Gz2SDPc4Hu9/u33e12AiKwbVvZZBTIk/m+jyAIEIah+ATTJyzLMtGvQA34Q13Xb3Hh5XIZSMvXFvwIZGnH4xFFUYhlj8qyFPj1eh2IG3AwH0vWKTLuT5E5nkaH0dfoCVnicrmE4ziwbRuWZYldLBZwXVeGxR5vt1u5CRR95r6cUAOWN5/PMZvNRNPpVKxhGDBNE6vVCnEcy6A4JIrDY25Qsl5iQrWHKvaSPbzdbh8vubboDfzPc/v09F7FZoR5A3UbyQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"The user enters the resource name in order to confirm deletion.",title:"The user enters the resource name in order to confirm deletion.",src:"/static/94e3e3991cb5ce4152271245cad4f4a7/3cbba/2.png",srcSet:["/static/94e3e3991cb5ce4152271245cad4f4a7/7fc1e/2.png 288w","/static/94e3e3991cb5ce4152271245cad4f4a7/a5df1/2.png 576w","/static/94e3e3991cb5ce4152271245cad4f4a7/3cbba/2.png 1152w","/static/94e3e3991cb5ce4152271245cad4f4a7/392b1/2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"}," ","The user needs to enter the resource name in order to confirm deletion."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABc0lEQVQoz52Ty0rDQBSG+xZuJi5UUEEFC927dCdMoRUXVgSlG1e+ptsKTS8pNL3kJm0nSSnJ5JczMHW8tIoDH2cyTL5zJidTAoCiKKCHnptrfxl6f8kUfJVIKRV5nq+jnpuYjpIpCoIAw+EQ4/EYo9EIYRhCCIEkSRDHsYoErRHz+Ryz2Wyz0HVdtFot2LaNdruNyWSikvi+v46e5ykRCReLhUq0UUhVdbtd9Ho99Pt9NSex4zhKNp1OVZJfhfqBNtARNPRimqbqmBQ1JCFIulVIEqqCIBmJlsulYrWBNElUY348su6iXiNUd6VEnGUQWYZY5hAGyU9dpkEVNZtN1Go1cM4VVc5xxTnueRWvjQe4jUc49VsM6g0Mru/gVG/gPj1DpumHUJcbRREqlQosy1IwxmAxhh3GUGa7eDk6h3Nchr13gs7+KToHZ7CtQwwuLiGF+F4hiXUnKWroNwl9HyvPR0b4wWeiNxTmN/zPNdt29d4B5VNzDp7aaHEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"When the resource name is entered the Delete button is enabled.",title:"When the resource name is entered the Delete button is enabled.",src:"/static/64648892df210451d60afc6bb54511e4/3cbba/3.png",srcSet:["/static/64648892df210451d60afc6bb54511e4/7fc1e/3.png 288w","/static/64648892df210451d60afc6bb54511e4/a5df1/3.png 576w","/static/64648892df210451d60afc6bb54511e4/3cbba/3.png 1152w","/static/64648892df210451d60afc6bb54511e4/392b1/3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"}," ","When the resource name is entered the Delete button is enabled."))),(0,i.kt)("h2",null,"Medium-impact deletion"),(0,i.kt)("p",null,"A medium-impact deletion is one that cannot be reversed, but would not be\ncatastrophic if done accidentally. When deleting is medium-impact, a\nconfirmation dialog should be presented to the user which displays:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name of the resource"),(0,i.kt)("li",{parentName:"ul"},"Consequences of the deletion"),(0,i.kt)("li",{parentName:"ul"},"The action cannot be undone.")),(0,i.kt)("p",null,"Optionally an ",(0,i.kt)("a",{parentName:"p",href:"#optional-passive-modal"},"Optional passive modal")," or\n",(0,i.kt)("a",{parentName:"p",href:"#notification"},"Notification")," can be used to confirm the action (or a\ncombination of one modal and a notification)."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABTUlEQVQoz7WTS0/CQBSFZwPGuEGbuHDhr20bqsH4i2aoSzdGQlsgEqxoIjA8+qIkbeeYTimWBNwQb+bLuZnknrk3M0OEEMgj11MoPUiZnBqlBymTLMsQBAF835ea43keoijCer0+ShiGsnbXYdXQdV04joPhcIherwfOuSwoDzrEcrlEmqaHDXOjbrcL27ZhWRYGgwH6/b7kazzGx+gd7miEBecIPA/+aiV1z7A6/2azQRzHO+RYUST3IwgEIkMoRAG2CIEUAsWqdJiPZZomKKU7GGOgjKFNKSbMxIKZ4NTEfAunbczZExI/+O2wbLfT6UBRFNTrdRBC9jgnBM+XN3hTbmHVGrDPrgpqDTgX14hfXgvDNAUpb2g6ncIwDKiqCl3XoWmaRNU03Gk6PpstzJsPmBkVmi3M7h+RfE8Kwyz7x3eYa5IkRxF/UfkpPx87If/y0ADgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a medium impact delete modal",title:"Example of a medium impact delete modal",src:"/static/194e3f245e69d90655331a2f7e8d45f6/3cbba/6.png",srcSet:["/static/194e3f245e69d90655331a2f7e8d45f6/7fc1e/6.png 288w","/static/194e3f245e69d90655331a2f7e8d45f6/a5df1/6.png 576w","/static/194e3f245e69d90655331a2f7e8d45f6/3cbba/6.png 1152w","/static/194e3f245e69d90655331a2f7e8d45f6/392b1/6.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"},"An example of a standard delete modal"))),(0,i.kt)("h2",null,"Low-impact deletion"),(0,i.kt)("p",null,"Requiring the user to confirm deletion is generally recommended. However, in low\nimpact situations, or when an ‘undo’ option is available, user confirmation may\nnot be required."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQoz5WTzUsbYRCH/aO8VOmh6kl7aL1IRE1TqwnqhqCxttqLhyC1lTZWoxEUgh/Bj6hIwbMWpC3aYNKD2nZLa7IpZneTjWBaXfIIwa4JgmTnMjAP8+P9zbxTRkHkcrl81jQNSZLQMhlOkkmyZ2f5uqIopFIpFFUlc3pa1PM/yooEdT2f5TE/Ym09YvV9pKcvDB7t7Wen9gHbd6sRff6inlsF07NB4jYHsaZW5OE3Bv829Irwo3Z2G5o5nguWLqhOBzhufMzvhxZOBocMfjDoYddi5WNdPb9mAiZeuBgi4XQj2QVkr8/gP96OERG6CdvsxJdCpQtqoXX+9A6QENwo41MG/znu56v7OfsOASm0XoLgxdVSRkYRK2sQ71SR6H5m8Einiw8V99gqr0Qc9ZmwHFxG6nARb+tCKbD8fcTLvsNJ2NZuznIqME/MaifW0ob82mvwI88wX6xP2LNYiS0smpjh6gYJVx+S3YnybvJ6hhNTRIUewq0O4itrJr7N5DSZ95voaY2LpGxcw5HnJeqnz/yTZc7T6RIu5Qr+PThEV9SbJxmJomezN+qFgpcTJGH8SJeXEgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of delete options in context without warnings for low impact delete actions",title:"Example of delete options in context without warnings for low impact delete actions",src:"/static/af18e268555590a0daf73940c8794a28/3cbba/LowImpactDelete.png",srcSet:["/static/af18e268555590a0daf73940c8794a28/7fc1e/LowImpactDelete.png 288w","/static/af18e268555590a0daf73940c8794a28/a5df1/LowImpactDelete.png 576w","/static/af18e268555590a0daf73940c8794a28/3cbba/LowImpactDelete.png 1152w","/static/af18e268555590a0daf73940c8794a28/392b1/LowImpactDelete.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"}," Low impact delete options"))),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAArklEQVQY05WPOQ7CMBBFc0MqjkCThgNAASegoEDiRlSRKKBhaZ0CsHHiNfZHMQTFBLFM80fPnqeZBK3y3odkjIEQEjLPcwghAqdKooAHNRpXzqOZppJ3wqqqwDmHlBLOOXjnAt/N5sgGKTajCQxl/wuVUnf+EG7HU6x6fazTIcyFRm8fhVrrZ19n0x8XS+jTufP/q7DezFrbEZb7A2xRRuynk40x4ew2aw9GkhfhDduO0lXYC+VrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Low impact delete options requiring overrides to Carbon",title:"Low impact delete options requiring overrides to Carbon",src:"/static/72962b378ef9afcbb3635e89d54e9e4c/3cbba/LowImpactDelete2.png",srcSet:["/static/72962b378ef9afcbb3635e89d54e9e4c/7fc1e/LowImpactDelete2.png 288w","/static/72962b378ef9afcbb3635e89d54e9e4c/a5df1/LowImpactDelete2.png 576w","/static/72962b378ef9afcbb3635e89d54e9e4c/3cbba/LowImpactDelete2.png 1152w","/static/72962b378ef9afcbb3635e89d54e9e4c/392b1/LowImpactDelete2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"},"Low impact delete options requiring overrides to Carbon"))),(0,i.kt)("h2",null,"Medium-impact removal"),(0,i.kt)("p",null,"Removing has a medium impact when the action can’t be reversed, and could have\nsome impact if done accidentally."),(0,i.kt)("p",null,"Text should tell the user the consequences of the removal and that the action\ncannot be undone."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABRUlEQVQoz7WTTU+DMBjHexFjvEwXPXjywwIZmhk/0KDi0YtxC3NZ3BLQJQoSxsveAvRvWtLJjHhZbPrL8zSFX5+WQhhj4I3HfZAOIpN9m3QQmZRliTRNkSSJiDLPsgzL5bIRPs/f3VZYF3qeh9FohOl0ivF4jNlshjiOhbiJKIpQFMXvwslkgsFgAMdxhNB1XQFf6NV1EQYBUr7AfL6Fj3eE9f2v12ux1cVigc1mIw8HfDZjrAI/YAwFf0L0WoVcZNs2KKUCy7Jg9nromSaoacKnNkJq49OqCEW8Q0jvkSfpd4Wy3H6/j3a7DUVRQAjZ4YgQPLQu8HJ2CUc5wZBzeIrhQQvPx+dYPT5VwqIAkV/I930YhgFVVaHrOjRNE6iahitNx1uni7Bzg8Co0ekiuL5F/v5RCcvyH+8hj3meN8L+ovanfAG3qCLQhiGIewAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a medium impact remove modal",title:"Example of a medium impact remove modal",src:"/static/0e3553c5966d9ce052e440a3cc7796c3/3cbba/first-view.png",srcSet:["/static/0e3553c5966d9ce052e440a3cc7796c3/7fc1e/first-view.png 288w","/static/0e3553c5966d9ce052e440a3cc7796c3/a5df1/first-view.png 576w","/static/0e3553c5966d9ce052e440a3cc7796c3/3cbba/first-view.png 1152w","/static/0e3553c5966d9ce052e440a3cc7796c3/392b1/first-view.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"}," ",'Removal modals should include consequences of removal, and "This action cannot be undone" statement.'))),(0,i.kt)("h2",null,"Low-impact removal"),(0,i.kt)("p",null,"As removing does not destroy an asset, typically user confirmation is not\nrequired."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABxElEQVQoz5WT30tTYRyH/ae6Ki+KiNhVSUSsoDPLdEvm1pnkj0CpJcMkrRYi1IVBSIQRddF9BZFguo0wZW6U7ezo+bUzL5adw3mi95wsqej03nzheXkfPl8+vG38cjzPE9O2bRRFwW7abGkarVZLcMMwsCwLwzRpbm/vefPjtO0Ruq6Yen6GSqSDaqSDj9EYX3VD8JI8wJvIcV4fPEox1f9bkL8KGw/mqEk91DrjqOnLuFZD8LWxcZakCyyejrGWzeGFFZr3Z9mIdrJx6ixKdxLXtAT/MJJlMSqxcOwkK8Oj/5Hw0Tz1ZAalV2ZzaBS3YQu+PnmHUlJmuesi5RuT4YX2/FPU/mFUeZCtkeu4ti+s5Kd5nxmk2JtmfSofQugEpUzconLgMNX2I3w6cQZH0wUvxJO82n+Il/vaKSZSu6J/rzz3GCWRRomngpX9UsoTUxQSfSydi4uVQwut2Yd8lrqpxXpQ5SFcyy9lNZvjndTltzw2Hl5oP3lG/dKASLl55epuwurdGUp9GZbPJyjfvB1eaE7fo/n8hWjXqat4juMnvJbDfLvAjq6zo2khhMHFl5VVXMP4yYNpF4q4wTf8U8Pfhd8AvYFczA48mrkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of remove options in context without warnings for low impact remove actions.",title:"Example of remove options in context without warnings for low impact remove actions.",src:"/static/841d5813650fea3fee213b4cdef90f01/3cbba/LowImpactRemove.png",srcSet:["/static/841d5813650fea3fee213b4cdef90f01/7fc1e/LowImpactRemove.png 288w","/static/841d5813650fea3fee213b4cdef90f01/a5df1/LowImpactRemove.png 576w","/static/841d5813650fea3fee213b4cdef90f01/3cbba/LowImpactRemove.png 1152w","/static/841d5813650fea3fee213b4cdef90f01/392b1/LowImpactRemove.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"}," Example low impact remove options"))),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAsklEQVQY042QsQrCMBRF+4kO4uDs0skPEEGcFezg4C/pIE5dSl1LoWCatiRNXq40JaWFKL3LC4d3D48EGMUYYydjDFmW2ZnnOZqmsfwjBLghMNKoDU06LoFPqLVGWZYQQoCIYKgvJ+cIr3CL5yZEcroM+2PpTyHn3Ao75oTx7oDHco37YoV4f5wvbNt2suTe6fUGWRTwdf4KpZRQSg3M8Tp9Q1VVz7Sef2EnI5p+uu9iX75YLNAvRe/xCgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Low impact remove options requiring overrides to Carbon.",title:"Low impact remove options requiring overrides to Carbon.",src:"/static/da7db4bce449098a2b58e866413ddd8b/3cbba/LowImpactRemove2.png",srcSet:["/static/da7db4bce449098a2b58e866413ddd8b/7fc1e/LowImpactRemove2.png 288w","/static/da7db4bce449098a2b58e866413ddd8b/a5df1/LowImpactRemove2.png 576w","/static/da7db4bce449098a2b58e866413ddd8b/3cbba/LowImpactRemove2.png 1152w","/static/da7db4bce449098a2b58e866413ddd8b/392b1/LowImpactRemove2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"},"Low impact remove options requiring overrides to Carbon."))),(0,i.kt)("h2",null,"Anatomy"),(0,i.kt)("h3",null,"Optional passive modal"),(0,i.kt)("p",null,"In high or medium impact flows, an optional passive modal can be used to signify\nthe state at the end of a remove or delete action. Some deletion or removal\nactions don’t happen immediately, in these situations it’s recommended to inform\nthe user through the optional passive modal."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"730px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAz0lEQVQoz62T2QqEMAxF/f/fcwVRxP1FcVcUvZJAiuIIw0wLh4Sih5vSGtC8jOM4uKH6K7KoN6T5Z13/vyUcx1ExTRPWdVVs28Z1WRbFPM/M1XETJkmCIAi4hmGINE2RZRnyPOe9siwxDAO6rmOapkHbtk+hbERRBMdx4HkeLMvinrBtG6ZpwnVdFEWBvu8ZktI0rwnjOIbv+5xIoISUjESSlkQipMQfhfu+o65rVFWlErwhI9O4r0KqdPBy+N9C39+EOq7N1aHlYj8S6nx6J2TGqx+QCoS8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a delete successful modal",title:"Example of a delete successful modal",src:"/static/730a9e351e7f814753698ebe7a0eb75b/807f9/Requested.png",srcSet:["/static/730a9e351e7f814753698ebe7a0eb75b/7fc1e/Requested.png 288w","/static/730a9e351e7f814753698ebe7a0eb75b/a5df1/Requested.png 576w","/static/730a9e351e7f814753698ebe7a0eb75b/807f9/Requested.png 730w"],sizes:"(max-width: 730px) 100vw, 730px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"}," ","Use a success modal to show that a delete request has been made / is in progress."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"730px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAs0lEQVQoz72T3QqFIBCEff9X7D8hK7uwrKvUOeyCkEUQFEf4mFVxdhAV+HiIEAIXpG+IHiIWb0f0SBJ67xM945zDvu9MrEmThMeJlBJVVaFtWzRNg7quoZTCMAzo+x7zPGNdVyzLwhhjmIthXCCzLMtQliVrnueJdl0HrTUbW2vZlBrcJqRkRVFgmiY+SHpkHEfmkSHdG21u23bhvE5mEZrfJqQLfgI1P/K/Z/PZw/7y6/0AVRuuEOZF/A4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a remove successful modal",title:"Example of a remove successful modal",src:"/static/3da478e89555d7a2758668276bd4ac91/807f9/DoneMedium.png",srcSet:["/static/3da478e89555d7a2758668276bd4ac91/7fc1e/DoneMedium.png 288w","/static/3da478e89555d7a2758668276bd4ac91/a5df1/DoneMedium.png 576w","/static/3da478e89555d7a2758668276bd4ac91/807f9/DoneMedium.png 730w"],sizes:"(max-width: 730px) 100vw, 730px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"}," Use a success modal to show that removing is complete."))),(0,i.kt)("h3",null,"Notification"),(0,i.kt)("p",null,"An optional notification can be used to confirm a delete or remove action has\ncompleted. This is useful when the action takes more than a few moments."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAwklEQVQoz5WSWwuCQBCF/f//KHqI8kWCvFaumxammFmrJWSk5ol8CK+JB4aF4eMsM2c4VFQUxe8dqipfFddsdEFd6uO4LkiPD1jddBC2h+ITaAEta3M1YSYu/JTVJhk0lO4GeCZjthMwJTwm2wXmhyWEkwIt2cNOz+MMjYcN/WVDDAmkyIDIdKixCZq5INkRTh6MM7QSF/TlYB2Z0MIdVEYhXwjo04GVe/DykSOXINpL//bejZT/GtbSK9rnU/2jL+UP/Qpv1h3igz0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a successful delete notification",title:"Example of a successful delete notification",src:"/static/6ec5f0cc990e4db7ea03993fd77fdb9d/3cbba/7_updated.png",srcSet:["/static/6ec5f0cc990e4db7ea03993fd77fdb9d/7fc1e/7_updated.png 288w","/static/6ec5f0cc990e4db7ea03993fd77fdb9d/a5df1/7_updated.png 576w","/static/6ec5f0cc990e4db7ea03993fd77fdb9d/3cbba/7_updated.png 1152w","/static/6ec5f0cc990e4db7ea03993fd77fdb9d/392b1/7_updated.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(A,{mdxType:"Caption"}," ","An optional notification can be used to confirm the delete or remove action with medium or high impact actions."))))}f.isMDXComponent=!0}}]);