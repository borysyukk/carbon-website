"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[93715],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),l=a.n(i),s=a(1597),r=a(64905),o=a(81151),d=a(75900),c=a.n(d);var m=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:r,branch:o}=a||i,d=`${l}/edit/${o}${r}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},b=a(56328),g=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===i,o=new RegExp(`${i}/?(#.*)?$`),d=a.replace(o,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var h=u,A=a(17680),k=a(75387),y=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:d}=e;const{frontmatter:c={},relativePagePath:g,titleType:u}=t,{tabs:y,title:w,theme:v,description:N,keywords:E,date:x}=c,{interiorTheme:I}=(0,k.Z)(),{site:{pathPrefix:T}}=(0,s.useStaticQuery)("2456312558"),C=T?i.pathname.replace(T,""):i.pathname,V=y?C.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",D=v||I;return n.createElement(o.Z,{tabs:y,homepage:!1,theme:D,pageTitle:w,pageDescription:N,pageKeywords:E,titleType:u},n.createElement(m,{title:d?n.createElement(d,null):w,label:"label",tabs:y,theme:D}),y&&n.createElement(h,{title:w,slug:C,tabs:y,currentTab:V}),n.createElement(A.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(f,{date:x})),n.createElement(b.Z,{pageContext:t,location:i,slug:C,tabs:y,currentTab:V}),n.createElement(r.Z,null))}},26345:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return h}});var n=a(45987),i=(a(67294),a(64983)),l=a(28399);const s=["components"],r={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=o("PageDescription"),c=o("AnchorLinks"),m=o("AnchorLink"),p=o("Row"),b=o("Column"),g={_frontmatter:r},u=l.Z;function h(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,i.kt)(u,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"title: Disabled states\ndescription:\nA disabled state is applied to a component when the user is not allowed to\ninteract with the component due to either permissions, dependencies, or\npre-requisites."),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"A disabled state is applied to a component when the user is not allowed to\ninteract with the component due to either permissions, dependencies, or\npre-requisites. Disabled states completely remove the interactive function of a\ncomponent.")),(0,i.kt)(c,{mdxType:"AnchorLinks"},(0,i.kt)(m,{mdxType:"AnchorLink"},"Disabled variations"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Default disabled"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Read-only"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Hidden")),(0,i.kt)("h2",null,"Disabled variations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variation"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Default disabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Cannot be clicked, selected or interacted with. It is not read by a screen reader and takes on the default disabled visual style.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Read-only")),(0,i.kt)("td",{parentName:"tr",align:null},"The user cannot interact with it but content is still readable and accessible to a screen reader. The visual style should contain no interactive indicators such as ",(0,i.kt)("inlineCode",{parentName:"td"},"$interactive-01"),", hover states, or text embellishments (i.e., underlines).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Hidden")),(0,i.kt)("td",{parentName:"tr",align:null},"The component is completely hidden from view. The user does not know the option is there.")))),(0,i.kt)("h2",null,"Default disabled"),(0,i.kt)("p",null,"A default disabled state is used when a component is temporarily disabled due to\ndependencies (when one piece of software relies on another one) or\npre-requisites. This scenario is a temporary state change that is most commonly\ntriggered by a user’s action or inaction. Once the dependencies have been\nresolved and/or the pre-requisites have been fulfilled, the default disabled\ncomponent returns to its enabled state. In a temporarily disabled scenario the\ncomponent should never fully disappear from the user’s view."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB+klEQVQoz21SzYraUBQ+GYdaECuVmZa2L+HKVyj0Abrrtl2WDtitD2BXgiClC13JbEo37dJNXYhQcaGIAUmuSTxJ7k1yExV001vOxXF+6IEPkvOd852/CwAAYRhCEAQanHOIogjSNAUhBIzHY+j1epAkCfi+rzn6llKCbduglNLY7XZwMiKn06lOvhtA/tVqpROXyyUwxjR3OBxgvV6D67qw3W41qMjJ9vs9DIdD6Pf7lJBTSj06dvOBc/42jmPq+Mw0TUMpda6UMmzbfiKE+MI5f0YThmFonATph0aJ4/jS87zfiLiQUv6RUv7lnH/KskyvIgzDd4jIoiiabDabpZQSEfEFIhJ/K8gYM8gZBMHLxWIRm6apEFHZtq0YY+89z4Oj6JUQQgVBoKSUKssy5jjOJY1+r0NSp7GSJHmFiDvf91WappSghBAfaUfHDj9TIc655tI0TV3XfU4F73WIiAbtgXP+1HGcb47jfOecXwshfiHiaypGEyDiG8bYz/V6fR1F0Y8wDL9allWyLIsOdCv4wPI3l77BfD6HQqEA5XL5MQXQ+A9jCCdrNBrQbDah3W5DvV4/73a7Z3TJI3RwrVYj5FqtVu4OZ/xXsFgswsXFBeTzeSiVSto3Go30+6PuOp0OVCoVqFarmhsMBvpNmqYJk8lEYzababF/+vzf8v4VjbsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Default disabled example on the right",title:"Default disabled example on the right",src:"/static/2925eee19c42f35f510ce6ed513b81ed/3cbba/disabled-1.png",srcSet:["/static/2925eee19c42f35f510ce6ed513b81ed/7fc1e/disabled-1.png 288w","/static/2925eee19c42f35f510ce6ed513b81ed/a5df1/disabled-1.png 576w","/static/2925eee19c42f35f510ce6ed513b81ed/3cbba/disabled-1.png 1152w","/static/2925eee19c42f35f510ce6ed513b81ed/392b1/disabled-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Style"),(0,i.kt)("p",null,"Default disabled states are most commonly styled by a decrease in opacity with\nno hover state change and ",(0,i.kt)("inlineCode",{parentName:"p"},"not-allowed")," cursor applied. Refer to each individual\ncomponent for the accurate disabled state."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Default disabled style"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Component")),(0,i.kt)("td",{parentName:"tr",align:null},"50% opacity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Text")),(0,i.kt)("td",{parentName:"tr",align:null},"25% opacity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Icons")),(0,i.kt)("td",{parentName:"tr",align:null},"50% opacity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Hover")),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Cursor")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"not-allowed"))))),(0,i.kt)("br",null),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACUUlEQVQoz61SS2sTYRQ9mUlJrX0hrWvBnQvXIiKiiHVRS5tHU5hpprWu4kJBjEh2rrp1qaTE2qQKJqHY5vE9buKiIbW0VbGCqIsqtp0g0rizQke+icY/4IXD/Tj3cu458AGTDnD1AG6H4/Yfb+dQKBRARC4YYygWi5BSYmlpCZubm0gkEmg0GrBt2939V5MHwC0HiDnQ/HVofhu6fxe638bLZY5KpSmqxP6Kb21tIZlMIp/Po1wutw4rAGP78Fi/enTrZ/eR8BetLVjXu8e2deX2RVl2Sil7GWOalFInIr1arUII0ZHJZI4RkZdzrileSqk1BU99Q0/4K/rNHfRF6vAFmw4x8B1vannkCyXXlRCi5UK9o9GornjOuetSJVAATm9r7SE73hG2Zw+H7YfegP2gLbD7BOf3zqxVS1OMi6wQYlZKOUtEOSIyhBADQohnQohHf/inUsp4U/D4Z61zzE72R+qvj1r1qi9kL3v9u+9wYW9wvVq8XSyyDcYYCSGIiNaJ6LoQIsgY2yiVSsQ5r3DOPxDRfeUUwGOcvLaGi3c/4fK9BvrG69BGdoBz+3ieTWEulcbCwoIbW8WtVCqYn59HOp1GKpXC4uIihoeH9VbkgcFRjIaNrnFrsl3Jn735Cr1Dy7hjnoBpGh2maXZPT097arUastmsR+0YhuEzDKPHNM2uaDTqjcfjyOVyHnUUI0EDV0JT+qXgDQ1DDg75P6Ir8B5ODLAi49rExIQ+MzOD1dVV16njOIhEIpplWV41i8VinpWVFXem/ipCodB/g6rf0qBldl4q360AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Default disabled style examples",title:"Default disabled style examples",src:"/static/8faea3380e76a89dcbab2adf6b352d6d/3cbba/disabled-2.png",srcSet:["/static/8faea3380e76a89dcbab2adf6b352d6d/7fc1e/disabled-2.png 288w","/static/8faea3380e76a89dcbab2adf6b352d6d/a5df1/disabled-2.png 576w","/static/8faea3380e76a89dcbab2adf6b352d6d/3cbba/disabled-2.png 1152w","/static/8faea3380e76a89dcbab2adf6b352d6d/392b1/disabled-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Additional warning"),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/components/notification/usage"},"inline warning notification")," can be shown in\ncases where a temporarily disabled item affects multiple items or the primary\naction of the flow. The notification should describe how the user can enable or\nre-enable the disabled component."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACM0lEQVQoz22RT2sTURTF79pVQbHNorhx4bdw2a0xFdSNS8EPIAV1owgNiOBmBLWttoui+A9UiiA2lqnJpBRTOi0205g0nSaTSTLDzLw3ybw078qdJrYLFz/OPWfeuW/gAWqnzzU/wfmH1yGh3ILxJzdhfPE2JD7eg7E3U5D4cBfGaP76AEbf34HE0n0Ypfn1FCQy03AWl2EEv8GItQBn2otwCnrVxxdZ5eWN3PeZK+s/nl9bW352dTM7N7mVm0sV1BeTW7nZlJ6dTRnr80nKiuvzyd9rry5v/pyZLP1auBQ1vkx0658nWrtvk86fdxegZrWeGrtlLJcr0jB2sWE3MQhYDOcd5DyMYexYGR/AOPo+ixl0HoHrOIpl1dGyLFGv12Wj0YhxHEf6vi993xvo8RwEgWQskJwxyRjrM8YixhgyxtLAOVc6nQ6GYSg453JIGIaxsqNSDHnP86TrulLXdamqqtQ0TebzeZHL5TCbzabBNE2lXC7j/v4+/SHWajU8ODjASqWC1WoVhxnp3t4elkolOouFQgFXV1dRVVXMZDJiZWUFNU1LQ7FYVDY2NnBnZ0fQElpOJcq2t7dxmJHquh5Dni4zTRMNw6As7pqmmQbXdZVms4mu64ogCJDwfR8pcxznnydttVox5Ie02220bVt4nkf+aKFt21QWw0P0kTI6fLJMlxCD8v8WToMQQgnDEKMoEoeHh9jr9WLoobrdLp7MyFNO8zCPoogeVAohsN/vW38Bqo6gsZsMzWQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Additional warning with default disabled example",title:"Additional warning with default disabled example",src:"/static/5de32a036954e6b4ae97143ef552d64a/3cbba/disabled-3.png",srcSet:["/static/5de32a036954e6b4ae97143ef552d64a/7fc1e/disabled-3.png 288w","/static/5de32a036954e6b4ae97143ef552d64a/a5df1/disabled-3.png 576w","/static/5de32a036954e6b4ae97143ef552d64a/3cbba/disabled-3.png 1152w","/static/5de32a036954e6b4ae97143ef552d64a/392b1/disabled-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Read-only"),(0,i.kt)("p",null,"In scenarios where the content of a disabled component or element is still\nrelevant to the user or important to task completion, then the read-only\nvariation is used. This allows the user to read the information but not interact\nwith or change it. Read-only content should always be accessible to a screen\nreader."),(0,i.kt)("h3",null,"Style"),(0,i.kt)("p",null,"The visual style of the read-only states vary by component but should never\ncontain any interactive indicators such as ",(0,i.kt)("inlineCode",{parentName:"p"},"$brand-01")," color usage, hover\nstates, or text embellishments (i.e., underlines)."),(0,i.kt)("h2",null,"Hidden"),(0,i.kt)("p",null,"The hidden disabled variation is used when something or someone does not have\npermission to view, interact with, or take action on an element of the UI. This\nvariation completely hides the component, page, action, etc. from the user’s\ninterface. The only way to enable the hidden element and have it resurfaced on\nthe UI is to change the assigned permission."),(0,i.kt)("p",null,"For example, when a user is the organization owner they are allowed to add\nmembers to the organization. Any users that are not an organization owner would\nnot be shown the “Add member” button on a team directory page. Once the user is\nmade an organization owner, ",(0,i.kt)("strong",{parentName:"p"},"then and only then")," will the button be visible."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACHklEQVQoz3WSP6saQRTFr4qmSRFCiEllIOQj5GuIIFpZWVvFIoXVqyxDyleGlAmGbQwWFoJFNAFBEf8huLuz7sw6u7O7jkE0OmHmGYMv5sJhdufs/d0De2E6nUK73YZGowGMsYjv+xF5cs4jjuOAruvg+z6YpnnhH49HkL70OOdg2zaoms/n0Gw2QdM0CIJAmZ7nQRiGQAhJLBYL1WQYhrpbr9fKPwETjDF1t1wu/wJbrRbU63XZ+CQIgueMsUeO47ymlH6wbTshpyOEYkEQPJW+53kPV6tVllL6TgJl6tVqdQccj8cwmUyg3+/HHcf5ZlmW5/u+HoYh931/MBgMEhhjwBi/IIQYy+USh2Eo/QNjrLbdbmG320XPwNFopICyUTZYliUopWKz2YggCH50Op24TGjb9kuM8S+EkHBd98A5F4yxjydg5AI4m81gOBzKJBPTNAVC6KeEUkq/I4TilFIJfIUxFn8Grtdr4XmedjWhVK/Xe0AIcWzbFieY1GSxWKiEpmk+M03zE0Loi+u6n13X/UoIeXP6URHLsu6AvV5PqdvtxgzDuNF1/ZZS+t513VtCyFtN06KVSgWEEEqHw+H8fF9XSxpyv/b7vVoH+V4sFqFUKkXL5fLjWq2WEEJEhRCx03kJvDclut1uY4yxGOdcrkm03++r79LpNBQKBahWq5BKpeC/lc1mL5TJZNSiJ5PJMyiXy0E+n/9H1+o31PYXd6g/iJMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of hidden disabled content on the right",title:"Example of hidden disabled content on the right",src:"/static/04f7d916633ea9cea3741b85bc495dc5/3cbba/disabled-4.png",srcSet:["/static/04f7d916633ea9cea3741b85bc495dc5/7fc1e/disabled-4.png 288w","/static/04f7d916633ea9cea3741b85bc495dc5/a5df1/disabled-4.png 576w","/static/04f7d916633ea9cea3741b85bc495dc5/3cbba/disabled-4.png 1152w","/static/04f7d916633ea9cea3741b85bc495dc5/392b1/disabled-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))}h.isMDXComponent=!0}}]);