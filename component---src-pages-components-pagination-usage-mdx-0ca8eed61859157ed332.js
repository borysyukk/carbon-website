"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[88484],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),i=a(88650),o=a.n(i),s=a(1597),r=a(64905),l=a(81151),p=a(75900),c=a.n(p);var g=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:r,branch:l}=a||i,p=`${o}/edit/${l}${r}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},d=a(56328),u=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),r=t===i,l=new RegExp(`${i}/?(#.*)?$`),p=a.replace(l,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var A=b,h=a(17680),f=a(75387),k=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:i,Title:p}=e;const{frontmatter:c={},relativePagePath:u,titleType:b}=t,{tabs:k,title:v,theme:w,description:E,keywords:x,date:N}=c,{interiorTheme:C}=(0,f.Z)(),{site:{pathPrefix:Q}}=(0,s.useStaticQuery)("2456312558"),T=Q?i.pathname.replace(Q,""):i.pathname,P=k?T.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",R=w||C;return n.createElement(l.Z,{tabs:k,homepage:!1,theme:R,pageTitle:v,pageDescription:E,pageKeywords:x,titleType:b},n.createElement(g,{title:p?n.createElement(p,null):v,label:"label",tabs:k,theme:R}),k&&n.createElement(A,{title:v,slug:T,tabs:k,currentTab:P}),n.createElement(h.Z,{padded:!0},a,n.createElement(m,{relativePagePath:u}),n.createElement(y,{date:N})),n.createElement(d.Z,{pageContext:t,location:i,slug:T,tabs:k,currentTab:P}),n.createElement(r.Z,null))}},67295:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return f}});var n=a(45987),i=(a(67294),a(64983)),o=a(28399);const s=["components"],r={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=l("PageDescription"),c=l("AnchorLinks"),g=l("AnchorLink"),m=l("ComponentDemo"),d=l("ComponentVariant"),u=l("Row"),b=l("Column"),A={_frontmatter:r},h=o.Z;function f(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,i.kt)(h,Object.assign({},A,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"title: Pagination\ndescription:\nPagination is used for splitting up content or data into several pages, with a\ncontrol for navigating to the next or previous page.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,i.kt)(p,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Pagination is used for splitting up content or data into several pages, with a\ncontrol for navigating to the next or previous page.")),(0,i.kt)(c,{mdxType:"AnchorLinks"},(0,i.kt)(g,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(g,{mdxType:"AnchorLink"},"Live demo"),(0,i.kt)(g,{mdxType:"AnchorLink"},"Best practices"),(0,i.kt)(g,{mdxType:"AnchorLink"},"Feedback")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"Generally, pagination is used if there are more than 25 items displayed in one\nview."),(0,i.kt)("p",null,"The default number displayed will vary depending on the context."),(0,i.kt)("h2",null,"Live demo"),(0,i.kt)(m,{components:[{id:"pagination",label:"Pagination"}],mdxType:"ComponentDemo"},(0,i.kt)(d,{id:"pagination",knobs:{Pagination:["disabled","isLastPage","pageInputDisabled","pagesUnknown"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-pagination--pagination",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-pagination--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvpagination--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-pagination--default"},mdxType:"ComponentVariant"},'\n  <div style={{width: \'800px\'}}>\n    <Pagination\n      backwardText="Previous page"\n      forwardText="Next page"\n      itemsPerPageText="Items per page:"\n      page={1}\n      pageNumberText="Page Number"\n      pageSize={10}\n      pageSizes={[\n        10,\n        20,\n        30,\n        40,\n        50\n      ]}\n      totalItems={103}\n    />\n  </div>\n  ')),(0,i.kt)("h2",null,"Best practices"),(0,i.kt)("h4",null,"Identify the current page"),(0,i.kt)("p",null,"Clearly identify which page the user is on by displaying the current page\nnumber. By providing context into how many pages there are in total (eg. 1 of 4\npages), you can help provide clarity around the data displayed."),(0,i.kt)("h4",null,"Provide various options for navigating"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Previous")," and ",(0,i.kt)("em",{parentName:"p"},"next")," chevrons or links are the most useful way for the user to\nmove forward or backward through pages of data. Provide an\n",(0,i.kt)("a",{parentName:"p",href:"/components/select/usage"},"inline select")," in which users can choose the page\nthey wish to navigate to."),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABnElEQVQoz32STYrbQBCFW8oNskjISZJVDpJFmCxyDR/DkEx2WQWCsvAiK2+98wEM/gEFCyR3q1XV+mlJmaqhGstoyJCCj1dVqB+UeIqZ1QQRBW3bNjbGxNbauOu6QNM0cZ7ncV3Xt13XdWriVsz8iplfC0T0hplftm2riqJQxpjbg6ZpVJZlyjkXZvlmztwQBSICZm6GYfgDAN+MMV+ttfeIGACAe611UET8gojfEfEdIipEjOaGoYgoqPeeEZEvlwtrrdk5F2Yhz3Ouqmq++3Q1fDE3pKmk7/v+ARFHY8xYluUo/YTWegQA6f3V8MOzhpOpqPf+YXosps65wLSrqkr6/n+GfwUiEh2nk+U0AAhqrWVjzO1k2QuIePec4ZN/OAxDjog/nHO/6rpOyrJMiqJIsixLDodDYoxJrLU/y7L8jYjvAUABQDw3vLvykYg+M/Nb732IR9/36nQ6qe12q9brtVoul2E+n88qTVNlrQ3R0lo/ic0/wfbeS6glb9F+v482m020Wq2ixWIR7Xa7KE3T6Hg8RmIkeRWmegTx5lO7V89fwAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of pagination controls on data table",title:"Example of pagination controls on data table",src:"/static/e2310c818ec5ea1e488480e3f7471b58/3cbba/pagination-usage-1.png",srcSet:["/static/e2310c818ec5ea1e488480e3f7471b58/7fc1e/pagination-usage-1.png 288w","/static/e2310c818ec5ea1e488480e3f7471b58/a5df1/pagination-usage-1.png 576w","/static/e2310c818ec5ea1e488480e3f7471b58/3cbba/pagination-usage-1.png 1152w","/static/e2310c818ec5ea1e488480e3f7471b58/392b1/pagination-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABnElEQVQoz32STYrbQBCFW8oNskjISZJVDpJFmCxyDR/DkEx2WQWCsvAiK2+98wEM/gEFCyR3q1XV+mlJmaqhGstoyJCCj1dVqB+UeIqZ1QQRBW3bNjbGxNbauOu6QNM0cZ7ncV3Xt13XdWriVsz8iplfC0T0hplftm2riqJQxpjbg6ZpVJZlyjkXZvlmztwQBSICZm6GYfgDAN+MMV+ttfeIGACAe611UET8gojfEfEdIipEjOaGoYgoqPeeEZEvlwtrrdk5F2Yhz3Ouqmq++3Q1fDE3pKmk7/v+ARFHY8xYluUo/YTWegQA6f3V8MOzhpOpqPf+YXosps65wLSrqkr6/n+GfwUiEh2nk+U0AAhqrWVjzO1k2QuIePec4ZN/OAxDjog/nHO/6rpOyrJMiqJIsixLDodDYoxJrLU/y7L8jYjvAUABQDw3vLvykYg+M/Nb732IR9/36nQ6qe12q9brtVoul2E+n88qTVNlrQ3R0lo/ic0/wfbeS6glb9F+v482m020Wq2ixWIR7Xa7KE3T6Hg8RmIkeRWmegTx5lO7V89fwAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of pagination controls on data table",title:"Example of pagination controls on data table",src:"/static/e2310c818ec5ea1e488480e3f7471b58/3cbba/pagination-usage-1.png",srcSet:["/static/e2310c818ec5ea1e488480e3f7471b58/7fc1e/pagination-usage-1.png 288w","/static/e2310c818ec5ea1e488480e3f7471b58/a5df1/pagination-usage-1.png 576w","/static/e2310c818ec5ea1e488480e3f7471b58/3cbba/pagination-usage-1.png 1152w","/static/e2310c818ec5ea1e488480e3f7471b58/392b1/pagination-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Items per page"),(0,i.kt)("p",null,"Use an inline select within the pagination bar so the user can change the amount\nof data displayed per page."),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABwUlEQVQoz3WSvY7aQBDH5+K8AY+QPuWJMkGK8hR5lKtQpCsip4sQD0AFDxBRn0RHQ4mEwbD2fttrGxQgO9Hs+azkREb6az529dud3QFoLY5jmM1msNvtoNfrhdpgMABEhPF4DP1+P8Sv5b3/J+9ssVjAarUCKSWMRiMYDocwnU7DpuVyCZPJ5Bbwvfe+j4j3JO/9fQfUWr8xxkBRFF/yPH9ijP0UQsyrqpprrecUO+eCqEb58XgsEBG991cSIl47oDEmaoFfpZQohECtNVZVhdZaVEqF2DkXPK01TYMtEF/s7xu+AB8Ixjn/pZS6OueuxpirlDLEZVkGT2t1Xf9+5j0bxR3QWhtZa6Esywe6jZTypLU+V1V1ttaelVLnuq5DTp7ypmn+DxRCRPQhxphHxhiSsiwLrRdFEVpuDwo1YwyeTqe24xstK6XutNbU8mfO+Y88z78xxmIhROyci621sZQy5pxT7XtRFI+Xy2X1mtgBGWOQZRm9JSRJApvNBtbrNaRpSs9AB8LhcAhzut1uwTlHY/POe/8JET8g4kdSB+ScQ9vy3X6/j9I0jZIkifI8j5xzEX0a5zxijAU5597eGuw/IstESWLyCYgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of items per page on data table",title:"Example of items per page on data table",src:"/static/7f594271b00c946397480bf0a4d2c832/3cbba/pagination-usage-2.png",srcSet:["/static/7f594271b00c946397480bf0a4d2c832/7fc1e/pagination-usage-2.png 288w","/static/7f594271b00c946397480bf0a4d2c832/a5df1/pagination-usage-2.png 576w","/static/7f594271b00c946397480bf0a4d2c832/3cbba/pagination-usage-2.png 1152w","/static/7f594271b00c946397480bf0a4d2c832/392b1/pagination-usage-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Feedback"),(0,i.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}f.isMDXComponent=!0}}]);