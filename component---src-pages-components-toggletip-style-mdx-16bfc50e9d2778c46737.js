"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[11290],{28399:function(t,e,a){a.d(e,{Z:function(){return f}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),o=a(64905),p=a(81151),g=a(75900),d=a.n(g);var s=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var m=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:p}=a||l,g=`${r}/edit/${p}${o}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:g},"Edit this page on GitHub"))):null},c=a(56328),u=a(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,u.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],o=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),o=e===l,p=new RegExp(`${l}/?(#.*)?$`),g=a.replace(p,e);return n.createElement("li",{key:t,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${g}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},e}(n.Component);var N=k,b=a(17680),y=a(75387),A=a(50041);var h=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=t=>{let{pageContext:e,children:a,location:l,Title:g}=t;const{frontmatter:d={},relativePagePath:u,titleType:k}=e,{tabs:A,title:f,theme:v,description:E,keywords:w,date:C}=d,{interiorTheme:x}=(0,y.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),T=S?l.pathname.replace(S,""):l.pathname,B=A?T.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",P=v||x;return n.createElement(p.Z,{tabs:A,homepage:!1,theme:P,pageTitle:f,pageDescription:E,pageKeywords:w,titleType:k},n.createElement(s,{title:g?n.createElement(g,null):f,label:"label",tabs:A,theme:P}),A&&n.createElement(N,{title:f,slug:T,tabs:A,currentTab:B}),n.createElement(b.Z,{padded:!0},a,n.createElement(m,{relativePagePath:u}),n.createElement(h,{date:C})),n.createElement(c.Z,{pageContext:e,location:l,slug:T,tabs:A,currentTab:B}),n.createElement(o.Z,null))}},16639:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return u}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],o={},p=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},g=p("Row"),d=p("Column"),s=p("Caption"),m={_frontmatter:o},c=r.Z;function u(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(c,Object.assign({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"title: Toggletip\ndescription:\nToggletips use the disclosure pattern to toggle the visibility of a popover.\nThey display additional, hidden information upon the click of a UI trigger\nelement and can contain interactive elements.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’]"),(0,l.kt)("h2",null,"Color"),(0,l.kt)("h3",null,"Toggletip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trigger button"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$background-inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-inverse"))))),(0,l.kt)("br",null),(0,l.kt)("h4",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hover"),(0,l.kt)("td",{parentName:"tr",align:null},"trigger button"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active"),(0,l.kt)("td",{parentName:"tr",align:null},"trigger button"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"trigger button"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))))),(0,l.kt)(g,{mdxType:"Row"},(0,l.kt)(d,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABq0lEQVQoz62ST4vaQBiH/UgiuLYV1mSScSGyMEnU4IgIfiKl9dBFVrx4V/Aigje/QtOlm+zC4i6DJP6ZIQ1kNsUkpKL0UNrnMAzzzvP+3oHJhH/mPeLyMN1n/lY+JZE557vdjlLKGPM870zmnO/3e8YYpXSz2aT5mfReEME5T9NOk+NSEAS+7/+nsc9uvJ/AI84GOSWTPuAy56JveDbHUaaUEkIcxyGEbLdb3/c9z0szGWPr11fXdazn9cub4//0GGNBECTyaDTSdb3T6eCIdrutqupqtYrbj8djhFCr1apHYIwRQvP5PJF7vZ4kSZqmVatVVVUNwwAAxOUwDAeDAQBA13VN0xBCtVoNQjiZTBK53+9XKophGHHvZrMpiuJisYjl4XBYURSMG/V6vdFoYIwhhNPpNJG73W6h8BGWbwRBEEVRluVsNpvKX+/urgofJLl8fV0SInK53O/kz1/6hU/CjaKKQBKEEgBSPp9fLpexfH8/LJZk5VaT5TIAQIawWCzOZrNEJoSY5reHI9+j9cE0zcPhEMuu6z4+/rBty7Zt++mIZVlx9Z9+2C86OOPBHHy0VAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Toggletip colors and interactive colors.",title:"Toggletip colors and interactive colors.",src:"/static/26c04ef1c66ed69a3d4abd3141d0f218/3cbba/toggletip-style-1.png",srcSet:["/static/26c04ef1c66ed69a3d4abd3141d0f218/7fc1e/toggletip-style-1.png 288w","/static/26c04ef1c66ed69a3d4abd3141d0f218/a5df1/toggletip-style-1.png 576w","/static/26c04ef1c66ed69a3d4abd3141d0f218/3cbba/toggletip-style-1.png 1152w","/static/26c04ef1c66ed69a3d4abd3141d0f218/92c65/toggletip-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px-rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Body text"),(0,l.kt)("td",{parentName:"tr",align:null},"14px / 0.875rem"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"All tooltip types have a varying height based on the amount of content they\ncontain."),(0,l.kt)("h3",null,"Toggletip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"max-width"),(0,l.kt)("td",{parentName:"tr",align:null},"288 / 18"),(0,l.kt)("td",{parentName:"tr",align:null},"—")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trigger icon"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},"—")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"margin-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABLklEQVQoz42Su0rDcBTG8yC+gpMIrVVRiYPRJtSg0MFJ8BFE6KLQhxDEwVgQIbrpoIggSUupKChe1gouOrS2tU3+5ybBwXpp7Ledw/lxvsN3NIkRS7y03y0kQkRiZmFiikoiYv4P/j6g3gADiLGg/QDbCty7e8fzdnxv8/hs++R8zy85fvG0Wm0q1QiCbgtfMAFKoGoBLOfzM4Zh2nbazqTteTubHdOnc85utADp783YCrD6Wmt2VjbWZ3U9Y1nWXDpjWqZhJIeH8oVCBFMPmIkFsQ60sJZLpCZTU3pyfGJkNDG4uDWwdLV6cCvvrfClwYA9b+4oOHp4dMuVw8qlWyq7xdL+9ZNzU794rosCbIfdzrW4eEOUkARABISpr5yJ+TNbZEYmZEEW6vNJ+tcHtE1Vr1oEgSsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for toggletip.",title:"Structure and spacing measurements for toggletip.",src:"/static/0c8802f5bf25001863302026adf3a370/3cbba/toggletip-style-2.png",srcSet:["/static/0c8802f5bf25001863302026adf3a370/7fc1e/toggletip-style-2.png 288w","/static/0c8802f5bf25001863302026adf3a370/a5df1/toggletip-style-2.png 576w","/static/0c8802f5bf25001863302026adf3a370/3cbba/toggletip-style-2.png 1152w","/static/0c8802f5bf25001863302026adf3a370/392b1/toggletip-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Structure and spacing measurements for toggletip. | px / rem"),(0,l.kt)("h3",null,"Placement"),(0,l.kt)("p",null,"Toggletip directions by default are set to auto. Upon opening, toggletips can\ndetect the edges of the browser to properly be placed in view so the container\ndoes not get cutoff. Toggletips can instead use specific directions and may be\npositioned ",(0,l.kt)("strong",{parentName:"p"},"top"),", ",(0,l.kt)("strong",{parentName:"p"},"right"),", ",(0,l.kt)("strong",{parentName:"p"},"bottom"),", or ",(0,l.kt)("strong",{parentName:"p"},"left")," to the trigger item.\nToggletips should be placed at least 16px / 1rem off of the bottom of the page\nand not bleed off page or behind other content. On mobile, toggletips can only\nappear below the toggletip UI trigger."),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAABXklEQVQ4y82UT0sCQRyG/UIeKik8RGwqgn/Ag7K7KrTuxmIe+iaG9y4belQPdjOlb9GpQ9kGuW3jmjvr7OzMTqAVEtQKUfjwMqd55sfMCxNivyC0SbLjOI8LdF03DMOyLACA67oBMiGEMdZsNovFoqqqsizLinJSrYqieDUYMMYopQHyWb0e3YsmE8k4x8U5LhGL7UYinXb7c8NP8rl2Ec8VcmUpnc+nC4Usz8ey2ct+nzGGMP5W9hfr2LZvjPHtBIygcw/hCMI7G5oIQddFnveXr019n1D6JdT3/6Vn0zRfVjBNEyG0Vs+apmUyGVEUBEHgeb5UKqVSqV6vt1bPjUZja3vngDvc/yAcDrdarYCelwd3O11JOq7VTmVJUiqVqqoelcvXw2HA5CVzSnUw0QF4AOBpNrM8D2D8irGN3XlgzxCh5+nUgtAhBHreMnNCMCFe4OTVazDff89mfQZvz+FNwAilJgkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Placement examples for a toggletip",title:"Placement examples for a toggletip",src:"/static/69d2665824af879448f85e0877d4438c/3cbba/toggletip-style-3.png",srcSet:["/static/69d2665824af879448f85e0877d4438c/7fc1e/toggletip-style-3.png 288w","/static/69d2665824af879448f85e0877d4438c/a5df1/toggletip-style-3.png 576w","/static/69d2665824af879448f85e0877d4438c/3cbba/toggletip-style-3.png 1152w","/static/69d2665824af879448f85e0877d4438c/392b1/toggletip-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Placement examples for toggletip"))}u.isMDXComponent=!0}}]);