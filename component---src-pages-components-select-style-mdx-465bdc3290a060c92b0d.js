"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[41749],{28399:function(t,e,a){a.d(e,{Z:function(){return h}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),s=a(64905),d=a(81151),p=a(75900),m=a.n(p);var o=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var c=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:d}=a||l,p=`${r}/edit/${d}${s}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},g=a(56328),b=a(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,b.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],s=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),s=e===l,d=new RegExp(`${l}/?(#.*)?$`),p=a.replace(d,e);return n.createElement("li",{key:t,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},e}(n.Component);var u=k,A=a(17680),N=a(75387),y=a(50041);var f=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var h=t=>{let{pageContext:e,children:a,location:l,Title:p}=t;const{frontmatter:m={},relativePagePath:b,titleType:k}=e,{tabs:y,title:h,theme:w,description:x,keywords:E,date:v}=m,{interiorTheme:S}=(0,N.Z)(),{site:{pathPrefix:C}}=(0,i.useStaticQuery)("2456312558"),z=C?l.pathname.replace(C,""):l.pathname,I=y?z.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",Q=w||S;return n.createElement(d.Z,{tabs:y,homepage:!1,theme:Q,pageTitle:h,pageDescription:x,pageKeywords:E,titleType:k},n.createElement(o,{title:p?n.createElement(p,null):h,label:"label",tabs:y,theme:Q}),y&&n.createElement(u,{title:h,slug:z,tabs:y,currentTab:I}),n.createElement(A.Z,{padded:!0},a,n.createElement(c,{relativePagePath:b}),n.createElement(f,{date:v})),n.createElement(g.Z,{pageContext:e,location:l,slug:z,tabs:y,currentTab:I}),n.createElement(s.Z,null))}},92294:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return s},default:function(){return c}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],s={},d=(p="Caption",function(t){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)});var p;const m={_frontmatter:s},o=r.Z;function c(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(o,Object.assign({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"title: Select\ndescription:\nSelect is a type of input that is used in forms, where a user is submitting\ndata and chooses one option from a list.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-strong")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inline select"),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-helper"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))))),(0,l.kt)(d,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA9ElEQVQoz5WRQWuEMBCFJ+6l9N5b/1PpYdsf6N2Tv8Ae9VBaSkWIgiRRjCaaxBwU3DLSXpbC7j54zGV4vG8G4ExRFEEYhrvjOAbvPRhj/rW1Fm7S6XSCJEkImjFGnHOk73syzzOgMfTmwDRNIcsyEEKAcw6GYdgn+qpApRRBFGvtI+f8XQjxxRj7VEp9WGu/x3F8s9Y+4I4xhlwMxAaI472/r+v6uSiKlzzPj5zzo5TytW3bJynlnZQSuq673BBRtm3bcZumgbIsgVIKGICttNbwS3Ad8jRNsCwLrOuKdwuqqjpQSgMpZWCMOWitg78v4+65fgBF7txMFgzg6gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Default and new selection state examples for Select",title:"Default and new selection state examples for Select",src:"/static/25305ad2c3d64f094b6320d460517dea/3cbba/select-style-1.png",srcSet:["/static/25305ad2c3d64f094b6320d460517dea/7fc1e/select-style-1.png 288w","/static/25305ad2c3d64f094b6320d460517dea/a5df1/select-style-1.png 576w","/static/25305ad2c3d64f094b6320d460517dea/3cbba/select-style-1.png 1152w","/static/25305ad2c3d64f094b6320d460517dea/392b1/select-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{mdxType:"Caption"},"Examples of default and new selection select states"),(0,l.kt)("h3",null,"Interaction states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input:invalid"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"136.45833333333331%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAAACXBIWXMAAAsSAAALEgHS3X78AAAE8ElEQVRIx41VS28TVxj9xq+kBFGUtkKqEBugyy4KUrvpsuv+iC66qFQiYiBSCrgkAoQj8lA2ITwkEqlAYkUqGxecqKagvMAQv+15eOx5NOMZz9OxHUJ7q3uJQ7Bb6EhH947n+sw93zn3GxgdHYWLFy/C1atXYXJyEhRFgVwuBzRNA8Mw7wRe01zXHOG/CHf/qZWg9bfdcwgEAnDmzBk4e/asJxgMdjmO485kMh6WZT2CIPh4nu/ged5XLBYJ8JxhGA9N055dI/VvO3RPTk52KoriZmjas/o05kIIAUI1QKgK6JUJ6JUFaMuA1bWsi2MJmRuTYsLmLt+SfO3aNcAka7FVWF181FnIPP8avTSOobp6DFXXX2Nj/QtUFXxVtQSRxURbCdoI06xIcaIKBUk79DRVqERX0389TRdf5kTjZVbQN9NFDa0kC58/z0sQZ2RXWw0vXboEAwMDcPnyZRgcHITATJ46N8vBuVDhk0CI0wMzOfRziEV993jk/4VD/SEBnQ9xxwd+FSEwV3K1Ot9GiCUbZRHqlrpPLjKzTCa+JPH0I7Ms/mEowiNbk5dVmT9iaTJU9T+p1ni1ErqvXAm61mKr1LffnwcAoOAbnQL4jiJz+BKPAPAVoL83qHgyTe02pJXQOzg4+PHQ0ND+SCTSWS6XfY7j+LLZbAfHcR2KohBUKhUSo3w+j+PTxJvYtEoeHh6GqakpeB0ZBLFYDF68eAGVSgUajQbUajUS/kwmAyzLwntrODIyQlwfGRnxXb9+/cjDhw8PhsPhg7Isd29ubu7f2Nj40HEcCr9MluW2EwOnTp2CkydPQn9/P5w4cQLW19eper0O9Xr9kCRJfKlUqvA8X9Y0TbZtWzUMI+U4zgHHccCyrHZTSFQCARgaGiKk+N4wDLzYk8/nDycSiaPxePwoy7JHBUH4rFAoHBZF0c3zPKTT6XbJ+Bz39vbis+zq6enZOzo66kEIUQ8ePKAEQYBEIkHqWCqVQNM0IjOZTFIsy+JQN/GG8M6dOzA9PQ337993TUxM7A2Hw52iKHo5jvM1Go0PNE3bQ9N0V6lU6pIkqUsQhD0sy/pomvYyDONturxDePv2bbh58yaEQiEYHx+H+fl5mJmZ2XEZA7czvDtcN13XyXxxcRE4jms3ZXZ2Fu7evQvhcBhu3LiBH1CmaeIa7s9msz8xDNMvy3Kvruv+arV62rKsHxzH2Yvjg8nbahgMBglwk8CGiKJI4bw1Go0DkiTNFYvF31iWDSuKEjYMI6Jp2j3TNLsty8LZpFo7OOkwExMTcOvWLRgbG4O5uTlYWFggUrGkeDxO5JXLZdja2gK8e4yVlRXyvC02OId+vx/6+vo8PT093RcuXNiDEHLlcjl3KpXyrq2teWKxmIfneY+iKF5BEHA3d2831ybe1PDJkycES0tLVDQa9T179gw7hwm8qqp2CILQiSGKYqckSWRkWdbb/ARsO03tSI5GowSPHz+GSCRCzm1TMoaqqgQ47LZtE7n4fnl5+S2XdyQnk0kS3lQqReqFC40Lbprmp7quL5im+bthGAu2bc87jhO1bXvOtu2PqtUqfkm7Ka0XXogjUavV9pmm+aOu66crlYrfsiy/4zinbdvGscFfR5LL916YcDs2RCYOMZaIpW43BGiS/S9CvGh7hzi4bk3T3Kqquk3TdONvtmVZrncR/gOowAgGBqixXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Open, disabled, and more information/help state examples for Select",title:"Open, disabled, and more information/help state examples for Select",src:"/static/ef8469fcbdc0ddd5b59283e9bdbc4d69/3cbba/select-style-3.png",srcSet:["/static/ef8469fcbdc0ddd5b59283e9bdbc4d69/7fc1e/select-style-3.png 288w","/static/ef8469fcbdc0ddd5b59283e9bdbc4d69/a5df1/select-style-3.png 576w","/static/ef8469fcbdc0ddd5b59283e9bdbc4d69/3cbba/select-style-3.png 1152w","/static/ef8469fcbdc0ddd5b59283e9bdbc4d69/392b1/select-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{mdxType:"Caption"},"Examples of open, disabled, and help select states"),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Select text should be set in sentence case, with only the first word in a phrase\nand any proper nouns capitalized. Select text should be three words or less."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("h3",null,"Select"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Arrow"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABf0lEQVQoz43RT2jScRjH8fc3rdN2iMhbLbzsz7UOXWIUdAmCYZeE6hLN6hZ02WAniVinRo3GIHI7RU0xx2qs+Q9EbbD86Qg9aNtyS8tcpfazQH3GflCXsdkDn8Nz+Lx44AEg2X3DSPTUMPFRDwsFHffMusqtFlSt9lOVy1vqV7Wq0qVvSkTgzk3UZTt09xi9XfMX/GC9Rh6IuELMvMpTLFXYARqtFr/rOpmt78ZuuXodBi7+6+4JZqxXEMD94AVPHsW7UqnsCRE50myJ5Y+uH81VKpa776LHmRozdYyPcWbKtT+o9TnMyUvOwyER3q5kH+Y2NuTz5mbxUz5frlUrX9NfSnokuxb13R7vRIRpkTZg76DSLoyY6kDgdfiY5po9m5pw92uTnv6Pz+bOLc9HTwcXY71vbE5Thwiu/wDRzg/xAwh6AuTgQBIOpsHsg0MJaRBeiOG33WPnwsm2YJ+DhP0+cyL4vWHjoz7ACzwF3ktThQNL6uWtx5wU4bm0doHbO6PYbs7H+6AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for select",title:"Structure and spacing measurements for select",src:"/static/026c55936a649d065f9ee4a732d9fa9e/3cbba/select-style-2.png",srcSet:["/static/026c55936a649d065f9ee4a732d9fa9e/7fc1e/select-style-2.png 288w","/static/026c55936a649d065f9ee4a732d9fa9e/a5df1/select-style-2.png 576w","/static/026c55936a649d065f9ee4a732d9fa9e/3cbba/select-style-2.png 1152w","/static/026c55936a649d065f9ee4a732d9fa9e/392b1/select-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{mdxType:"Caption"},"Structure and spacing measurements for select | px / rem"),(0,l.kt)("h3",null,"Inline select"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Arrow"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.083333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuUlEQVQY02NgwAJ6enoYjOvuMxi332NgaP3PoJ3wkiEk/DhDj/sshhrfZQx5QZsYLqqnMhANQAaa19xgkJ/8nIFhzX+GKP8j3O2O8wW3GVVyzrPuZphhM4F0Axn+/2f4L8LAkDnxmr5m/lbzkLa9vi2FG7X+MzAwgeRIN3D2dQaGBfcYdKfv5BVo3inqNuOBYE79AU6QYWQZ6KnFwODpzsBw+9F/hv/z/jPYTbnCUFR3CGwYwz/cBgIAGXBPJioQ8GsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for Inline Select",title:"Structure and spacing measurements for Inline Select",src:"/static/d49328d156b80b960bc9593119eb9a68/3cbba/select-style-6.png",srcSet:["/static/d49328d156b80b960bc9593119eb9a68/7fc1e/select-style-6.png 288w","/static/d49328d156b80b960bc9593119eb9a68/a5df1/select-style-6.png 576w","/static/d49328d156b80b960bc9593119eb9a68/3cbba/select-style-6.png 1152w","/static/d49328d156b80b960bc9593119eb9a68/392b1/select-style-6.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{mdxType:"Caption"},"Structure and spacing measurements for inline select (focused) | px / rem"),(0,l.kt)("h2",null,"Size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Height (px / rem)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input"),(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAA20lEQVQ4y8VUiwqDMBDz/79TQfAxtbWlr7txxyqdtLOywYRQFRqTXGqDyQUAx5q7r7ma84t0cyT7hPOepqQwhFCl6Kw+S0hk8zyjEAK3bUOtNVprGcYYhtcGIdxQuCwLjuOIwzAwqVLqwL7v6KVGeLkoEpZsfG3Ze8+qnHNsn55pTQE+ZFtQtNz3PXZdh23bcp5SSs405mofEoNx96ZMCgmk8Iw0v0vCaPOntaHpximTTapOOmUn1FuOVbWZpolJ13XlDCPoA45rAwh/qU3NGa46y9dyMPs3ShU+AcH6ox+zhLqUAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for select",title:"Sizes for select",src:"/static/b59c092dfae3a389f8fb1048c045426a/3cbba/select-style-default-size.png",srcSet:["/static/b59c092dfae3a389f8fb1048c045426a/7fc1e/select-style-default-size.png 288w","/static/b59c092dfae3a389f8fb1048c045426a/a5df1/select-style-default-size.png 576w","/static/b59c092dfae3a389f8fb1048c045426a/3cbba/select-style-default-size.png 1152w","/static/b59c092dfae3a389f8fb1048c045426a/392b1/select-style-default-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{mdxType:"Caption"},"Sizes for default select | px / rem"),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAn0lEQVQoz7WSjQqDMAyEff833SYTbU1/ktwNnUMZOhBcIbR8uYMrScOLT3PaAaw3QCz1RmCDDcSO4Ez9TPgRnAu/JDQzai6sQehSCLVZoKq0qjPXkIishIM+eaqy9CMtJHoqa8LpkXJmGiLDo6MOQs91booI0ygM946p7ekxE+pUU0ocGW9P5nag9UK4//HL1w5lY/5egyOOIz4lvHqxX5ihGYGBwKAyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for select",title:"Sizes for select",src:"/static/9348d2c3d58bc8a2060bf406c6841908/3cbba/select-style-inline-size.png",srcSet:["/static/9348d2c3d58bc8a2060bf406c6841908/7fc1e/select-style-inline-size.png 288w","/static/9348d2c3d58bc8a2060bf406c6841908/a5df1/select-style-inline-size.png 576w","/static/9348d2c3d58bc8a2060bf406c6841908/3cbba/select-style-inline-size.png 1152w","/static/9348d2c3d58bc8a2060bf406c6841908/392b1/select-style-inline-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{mdxType:"Caption"},"Sizes for inline select | px / rem"))}c.isMDXComponent=!0}}]);