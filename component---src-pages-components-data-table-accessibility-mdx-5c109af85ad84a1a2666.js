"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[62631],{28399:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(67294),i=t(88650),s=t.n(i),l=t(1597),o=t(64905),r=t(81151),c=t(75900),d=t.n(c);var p=e=>{let{title:a,theme:t,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:i}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:o,branch:r}=t||i,c=`${s}/edit/${r}${o}/src/pages${a}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},b=t(56328),g=t(51721);let u=function(e){function a(){return e.apply(this,arguments)||this}return(0,g.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,i=t.split("/").filter(Boolean).slice(-1)[0],o=a.map((e=>{const a=s()(e,{lower:!0,strict:!0}),o=a===i,r=new RegExp(`${i}/?(#.*)?$`),c=t.replace(r,a);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},a}(n.Component);var A=u,h=t(17680),k=t(75387),f=t(50041);var y=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:u}=a,{tabs:f,title:w,theme:v,description:E,keywords:N,date:x}=d,{interiorTheme:C}=(0,k.Z)(),{site:{pathPrefix:S}}=(0,l.useStaticQuery)("2456312558"),T=S?i.pathname.replace(S,""):i.pathname,B=f?T.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"",L=v||C;return n.createElement(r.Z,{tabs:f,homepage:!1,theme:L,pageTitle:w,pageDescription:E,pageKeywords:N,titleType:u},n.createElement(p,{title:c?n.createElement(c,null):w,label:"label",tabs:f,theme:L}),f&&n.createElement(A,{title:w,slug:T,tabs:f,currentTab:B}),n.createElement(h.Z,{padded:!0},t,n.createElement(m,{relativePagePath:g}),n.createElement(y,{date:x})),n.createElement(b.Z,{pageContext:a,location:i,slug:T,tabs:f,currentTab:B}),n.createElement(o.Z,null))}},43727:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return A}});var n=t(45987),i=(t(67294),t(64983)),s=t(28399);const l=["components"],o={},r=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},c=r("PageDescription"),d=r("AnchorLinks"),p=r("AnchorLink"),m=r("Row"),b=r("Column"),g={_frontmatter:o},u=s.Z;function A(e){let{components:a}=e,t=(0,n.Z)(e,l);return(0,i.kt)(u,Object.assign({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"title: Data table\ndescription:\nThe data table component allows for the flexible display and sorting of\ninformation.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard data table component, Carbon already incorporates accessibility.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),(0,i.kt)("h3",null,"Keyboard interaction"),(0,i.kt)("p",null,"There are three data table variants with different interactions. Optional\nfeatures like column sorting can appear in any of the variants. Table\n",(0,i.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/components/pagination/usage/"},"pagination")," is\ntreated as a separate component."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABmUlEQVQoz21Ry47TMBTNT/MH7NmCxB+AWLFBmkWFxExLxQZRqk4e9JGktmPHztjXTv1IkZtpJ0gc3c099x7fo+Pk/D8EH5yNNYQh9sPZu9h6F4aRCIN3IYkDP5x6d+pdb5z3caPX1lnvrDfaBh/GqbfhsmNDGIy29uSTfy4OZ9v7U++nnIEou7XeBQMuXBwlzvrFXVYV7cXM+YkDJcJoo5QBZQAMqbnsAECD0qCMetK45lr3SupEq9P717PFXT6K8/TPbPZ1/XuTpUX6mG/W2eJ++X2xLPJtlubpJlv/epw/zO+/zVerdeJsKFakxSpf4fQnainfFvvyUKOaoJocK1zuj/tdedhV5aE+VqQu8W5b1hXe78pEdubNq89fPv748Pbh07uldT1CqG1bpUApAAAhBCGkaRrOubpQjDGlFKV0DCzETEJMRSk1iuUVnHOMMSHkRhJCOOdN00Tx9etiAQClVAgxFVNKGWM3kjHWdd2zeAoAIIRIKeGK6eXRdtM0U9svkFIihDjn4grGGEIIYzw6EkJgjMcX/wKmpWtnvmt1lQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"sortable table keyboard interaction",title:"sortable table keyboard interaction",src:"/static/1462d6ea64f1ebe0f336687192939416/3cbba/datatable-accessibility-1.png",srcSet:["/static/1462d6ea64f1ebe0f336687192939416/7fc1e/datatable-accessibility-1.png 288w","/static/1462d6ea64f1ebe0f336687192939416/a5df1/datatable-accessibility-1.png 576w","/static/1462d6ea64f1ebe0f336687192939416/3cbba/datatable-accessibility-1.png 1152w","/static/1462d6ea64f1ebe0f336687192939416/92c65/datatable-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("p",null,"For sortable tables, the column headers are reachable by ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," and sortable with\n",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,i.kt)("h3",null,"Controls inside tables"),(0,i.kt)("p",null,"Any interactive controls in data cells are in the tab order and maintain normal\nkeyboard operation. This also applies to expandable table rows, which operate in\nthe same manner as\n",(0,i.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/components/accordions/usage/"},"accordions")),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABiUlEQVQoz3WRza7TMBCF87iIh2CHxCOw5w0Qd4VYsWDZbkpF2yiJk9R2xv8/adMkNsS57eUK8a1mjubYx+MsJno3ALbTNBt5EeAvfgBsxnGKMYYQ4p2QeLTZPC/N9y+/3r/57M3w9Gn78d23H18PH94+nX62l8ErpZVSwzDEf8jG2zSNwTnfNrgsy7Y5E9xRSgmmGCelbSHBGGuaBmPMGAMAQkh2G8Z5Csbooii22+3pdKrruixLhFCe55vNZrfbIYSqqkII7ff7w+GAEsfjMQsh3K4TENVUhHNOFqgQwhijlAIAc8dayzlfFWtt13VZjHGeg2SmI1wIybkQQmqtnXPW2vUUd0clnHPeewDI0g4jEIVb4Lzr6Bk6kia8MYaQpfberwbOuZTylXmeg5YOqCgqmSOdV0pKk+b/S9/3L2YlLG5YWcui1gV6Nlu7JP/b82hfzGtscmacdUbL63WJ6f0Sm1JqrfWJvu8558aYtWaMPd8smCEYll1Jqe5IKddHPpTHgNb6zz//BgRHZo3OVN+UAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tab order proceeds sequentially through the table row expansion icons then to a link inside an expanded row",title:"tab order proceeds sequentially through the table row expansion icons then to a link inside an expanded row",src:"/static/bc135c81402eee55adaf62b467b38f78/3cbba/datatable-accessibility-2.png",srcSet:["/static/bc135c81402eee55adaf62b467b38f78/7fc1e/datatable-accessibility-2.png 288w","/static/bc135c81402eee55adaf62b467b38f78/a5df1/datatable-accessibility-2.png 576w","/static/bc135c81402eee55adaf62b467b38f78/3cbba/datatable-accessibility-2.png 1152w","/static/bc135c81402eee55adaf62b467b38f78/92c65/datatable-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("p",null,"Links, inputs, and other interactive controls inside tables operate by keyboard\nas normal."),(0,i.kt)("h3",null,"Labeling and updates"),(0,i.kt)("p",null,"If columns are sortable, the sort symbols appear on hover or focus. A sorted\ncolumn retains an indicator until it is no longer sorted."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABW0lEQVQoz4WQXU/CQBBF+f9/SH0wGhMSJVosMSRgS4XCdr86053tbECFqi0f8UE8TzubPXtvptcc2LWcHw+X+0Ov+Y/ddhf8++fH6aP39fZjs22aZi/XdZ1lmZTSGGuNFsqOEzlJRbaCLLcvYxGNkjh+nkwmSZqMnl/S1yzPF72uGwBEUZQkSZ7ni/nbdJbfD6fDePw6W07T/PFpenk9uLq86Pf7g8HD7c3dMIpHo3ifvNlsjDFSSqUUIhJ5oTFb6HRezJfGABuLUkpErFqIaLVaneSyBQCIiGsmV0FpobSuQq49EQGA975uYeaiKE6y1rpLdq5iZgAspBRCKKW8r51zWmsi8gd+JVtrtdbGGOccM1dVZVp+ijA755RSAMDMXbgQ4k8ZEc/Lv5KPtYkohICISimttfc+hEBEUkoACCF0/kler9fdtgCgWykiAkBZlsexe9Bt2zn3LX8BlAVpfEHvdTIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"The Rule column header has focus and shows a sortable icon, and the Status column header has a 'sorted ascending' icon",title:"The Rule column header has focus and shows a sortable icon, and the Status column header has a 'sorted ascending' icon",src:"/static/97499858310695e46e91aa08d3f87514/3cbba/datatable-accessibility-3.png",srcSet:["/static/97499858310695e46e91aa08d3f87514/7fc1e/datatable-accessibility-3.png 288w","/static/97499858310695e46e91aa08d3f87514/a5df1/datatable-accessibility-3.png 576w","/static/97499858310695e46e91aa08d3f87514/3cbba/datatable-accessibility-3.png 1152w","/static/97499858310695e46e91aa08d3f87514/92c65/datatable-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("p",null,"Sort indicators appear on hover and focus. A sorted column is indicated\nvisually."),(0,i.kt)("h2",null,"Design recommendations"),(0,i.kt)("p",null,"Since there is no persistent visual indicator that a table is sortable,\ndesigners need to annotate if a table should be implemented with sortable column\nheaders."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABSklEQVQoz6XS3W6CMBQAYN7DG2biExivfU2fQecFvMGWLIsJshA1SNDoxuIAQctPKe0p7SKQuZtlLvtybs5JTtvTVpE1IUT1d4r8B0UIIaX0fd80TaM2v4FhGJZlKZxzKeVoNFJVtd/vDwaDXq+nqurdz7rdbqfTGQ6H7c62bY/HY13XdU2bTqf3v5lMJpqmXWcGAM55s9YtCCFtc4mLcPd+2L197L0kjC8RxMiPkiBu0zBGQYT8CAVREsbp8RR4B4VFKRxTEpwXD7PNcn1w96+26znb3cp5eZq51spztk3FtVbzx2fHXHjO1ltvNsu1UpUgKABAFqMCZZxQXlyC5SQ7ofyUNGlFGM0ww6QiDHApSkjjc3tszjnjwDh8jSSEoMCgfovrR/p2Ixjjtpkxhs4oz3MAYLWyLFGNUdpUMMZFUQAApZRzjhD6BDQlOMSv+EyRAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"the header row is annotated 'sortable headers'",title:"the header row is annotated 'sortable headers'",src:"/static/22ac3c39cc8bcfd88b2373e642efb4e8/3cbba/datatable-accessibility-4.png",srcSet:["/static/22ac3c39cc8bcfd88b2373e642efb4e8/7fc1e/datatable-accessibility-4.png 288w","/static/22ac3c39cc8bcfd88b2373e642efb4e8/a5df1/datatable-accessibility-4.png 576w","/static/22ac3c39cc8bcfd88b2373e642efb4e8/3cbba/datatable-accessibility-4.png 1152w","/static/22ac3c39cc8bcfd88b2373e642efb4e8/92c65/datatable-accessibility-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("p",null,"Annotate if a table is sortable."),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep this in mind if you are modifying Carbon or creating a custom component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Column sorting indicators are matched programmatically using ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-sort")),(0,i.kt)("li",{parentName:"ul"},"See the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#table"},"ARIA authoring practices"),"\nfor more considerations")))}A.isMDXComponent=!0}}]);