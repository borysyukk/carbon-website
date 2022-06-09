"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[72772],{28399:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),s=a(88650),o=a.n(s),i=a(1597),c=a(64905),l=a(81151),r=a(75900),d=a.n(r);var g=e=>{let{title:t,theme:a,tabs:s=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:s}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:c,branch:l}=a||s,r=`${o}/edit/${l}${c}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:r},"Edit this page on GitHub"))):null},m=a(56328),h=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,s=a.split("/").filter(Boolean).slice(-1)[0],c=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),c=t===s,l=new RegExp(`${s}/?(#.*)?$`),r=a.replace(l,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":c},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${r}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(n.Component);var b=u,A=a(17680),w=a(75387),k=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=e=>{let{pageContext:t,children:a,location:s,Title:r}=e;const{frontmatter:d={},relativePagePath:h,titleType:u}=t,{tabs:k,title:f,theme:v,description:x,keywords:N,date:C}=d,{interiorTheme:E}=(0,w.Z)(),{site:{pathPrefix:T}}=(0,i.useStaticQuery)("2456312558"),S=T?s.pathname.replace(T,""):s.pathname,D=k?S.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",B=v||E;return n.createElement(l.Z,{tabs:k,homepage:!1,theme:B,pageTitle:f,pageDescription:x,pageKeywords:N,titleType:u},n.createElement(g,{title:r?n.createElement(r,null):f,label:"label",tabs:k,theme:B}),k&&n.createElement(b,{title:f,slug:S,tabs:k,currentTab:D}),n.createElement(A.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(y,{date:C})),n.createElement(m.Z,{pageContext:t,location:s,slug:S,tabs:k,currentTab:D}),n.createElement(c.Z,null))}},91102:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return y}});var n=a(45987),s=(a(67294),a(64983)),o=a(28399);const i=["components"],c={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},r=l("PageDescription"),d=l("AnchorLinks"),g=l("AnchorLink"),p=l("Row"),m=l("Column"),h=l("ComponentDemo"),u=l("ComponentVariant"),b=l("DoDontRow"),A=l("DoDont"),w={_frontmatter:c},k=o.Z;function y(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,s.kt)(k,Object.assign({},w,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"title: Content switcher\ndescription:\nContent switchers allow users to toggle between two or more content sections\nwithin the same space on screen.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,s.kt)(r,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Content switchers allow users to toggle between two or more content sections\nwithin the same space on screen.")),(0,s.kt)(d,{mdxType:"AnchorLinks"},(0,s.kt)(g,{mdxType:"AnchorLink"},"Overview"),(0,s.kt)(g,{mdxType:"AnchorLink"},"Live demo"),(0,s.kt)(g,{mdxType:"AnchorLink"},"Formatting"),(0,s.kt)(g,{mdxType:"AnchorLink"},"Content"),(0,s.kt)(g,{mdxType:"AnchorLink"},"Behaviors"),(0,s.kt)(g,{mdxType:"AnchorLink"},"Related"),(0,s.kt)(g,{mdxType:"AnchorLink"},"References"),(0,s.kt)(g,{mdxType:"AnchorLink"},"Feedback")),(0,s.kt)("h2",null,"Overview"),(0,s.kt)("p",null,"Content switchers allow users to toggle between alternate views of similar or\nrelated content. Only one content section is shown at a time."),(0,s.kt)("h3",null,"When to use"),(0,s.kt)("p",null,"Content switchers are frequently used to let users toggle between different\nformatting, like with a grid view and a table view. They are also often used to\nnarrow content groups. For example, use a content switcher if you have a single\ncategory, such as “E-mail” and you want to divide it into views such as “All”,\n“Read”, and “Unread”."),(0,s.kt)(p,{mdxType:"Row"},(0,s.kt)(m,{colLg:12,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8klEQVQ4y62Tua7aUBCGKQj7WiCMMZAiCCTuAgHb2CyXgERokEDCpmNpItIgFImlwBVQ8BhIPARPxx/NRIhLk6S4ln6Nzzkzn/9zPMd2vV7xUQ+xbPRyuVwwn8+x2WywWq2wXq85vtdyuXzQbZ5qFosFTqcTQxloWRZsNhsCgQDcbjc8Hg/8fj+Pb6Lxe1Gey+WC1+vlWsMw7sDD4cAJiUQCgiCwxuMxZrMZisUicrkcMpkMK5vNsig3Ho8jmUwiFAphMpncgbvdDg6HA6IoIhKJIBqNot1uo9frQdd1aJrGkVQqlVAoFBhG+QQOBoNs4AFot9vZGQEpUiEByuUyAyuVCovGtEYwypMkiY/gr0BySIWNRoOhiqKgVquhXq/zPB0DOYzFYv8HpCjLMkNUVWVpegWaXoVapm0rD0D6af90mM/neavkJp9/hSY/o6o8Qf2aReklDVGMQRBiDCaHo9HoDtzv93A6nbxIMPoquWu1Wmg2m/jWbCH39gPp+hzptzm+VH8i8TkNSYojlUohHA5jOp3egdvtlnuJeorAPp+PHdJWFVlGSVYRKPzCpxcLjlcLjuc1fCEBfp8HwWCIa03TvAPP5zM6nQ5PDgYDbtJ+v89tc5PR78DstWH2Sd9hGJRnYjgcotvt4ng8/gF+9F3+DXq2PLau9DaTAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a content switcher",title:"Example of a content switcher",src:"/static/a907db9d0a98b61063961f68b778cd61/3cbba/content-switcher-usage-1.png",srcSet:["/static/a907db9d0a98b61063961f68b778cd61/7fc1e/content-switcher-usage-1.png 288w","/static/a907db9d0a98b61063961f68b778cd61/a5df1/content-switcher-usage-1.png 576w","/static/a907db9d0a98b61063961f68b778cd61/3cbba/content-switcher-usage-1.png 1152w","/static/a907db9d0a98b61063961f68b778cd61/0b124/content-switcher-usage-1.png 1728w","/static/a907db9d0a98b61063961f68b778cd61/0c3f5/content-switcher-usage-1.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h3",null,"When not to use"),(0,s.kt)("h4",null,"Tabs"),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/components/tabs/usage"},"tabs")," when the content on the page is divided into\nrelated sections, but without any overlap. Tabs follow the metaphor for sections\nin a filing cabinet and two tabs wouldn’t contain the same sheet of paper. So\nthe role of tabs in information hierarchy is to separate content."),(0,s.kt)("h4",null,"Toggle"),(0,s.kt)("p",null,"The content switcher is used for large groups of content, as opposed to the\n",(0,s.kt)("a",{parentName:"p",href:"/components/toggle/usage"},"toggle")," which is meant for a “yes/no” or “on/off”\nbinary decision."),(0,s.kt)("h2",null,"Live demo"),(0,s.kt)(h,{components:[{id:"content-switcher",label:"Content switcher"}],mdxType:"ComponentDemo"},(0,s.kt)(u,{id:"content-switcher",knobs:{Switch:["disabled"],ContentSwitcher:["size"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-contentswitcher--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-content-switcher--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcontentswitcher--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-content-switcher--default"},mdxType:"ComponentVariant"},"\n<ContentSwitcher onChange={console.log}>\n  <Switch name={'first'} text='First section' />\n  <Switch name={'second'} text='Second section' />\n  <Switch name={'third'} text='Third section' />\n</ContentSwitcher>\n")),(0,s.kt)("h2",null,"Formatting"),(0,s.kt)("h3",null,"Anatomy"),(0,s.kt)(p,{mdxType:"Row"},(0,s.kt)(m,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQoz61RQQ6CQAzkZXyFk35Eb/oI/YoP8KKJBz1JIomoKLsWhW3HIGAAl6iJTTbtTrrT6Y6DWojIKwuXNUsD/xROG6g/EuYGLlWuD24NcWxkJibo5RY5Ha0DZPtL1dAcYFFvJzxqyNwv6uUOtAme6kxmwMxvqup3K6HSGsPBAJ7nYTKdIrunICIkSQKlFK5aw9xS0MKHpKZbIZd/FkUR+r0eXNfFeDRCQgSl1ZM0DEPEhxPS8xXxbAW+Zd2EXU7mWD6sWrew54eVK/dsLhYNZY/h70xpE3Yd20YO/hwP1QgN+wCrLHEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Anatomy of a content switcher group.",title:"Anatomy of a content switcher group.",src:"/static/a9e6c1a4a182f4583a004557272c2a60/3cbba/contentswitcher-usage-2.png",srcSet:["/static/a9e6c1a4a182f4583a004557272c2a60/7fc1e/contentswitcher-usage-2.png 288w","/static/a9e6c1a4a182f4583a004557272c2a60/a5df1/contentswitcher-usage-2.png 576w","/static/a9e6c1a4a182f4583a004557272c2a60/3cbba/contentswitcher-usage-2.png 1152w","/static/a9e6c1a4a182f4583a004557272c2a60/92c65/contentswitcher-usage-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Selected content tab:")," Only one content tab can be selected at a time and\nthere should always be one selected."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Content tab:")," Selectable container for each content view."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Text label:")," Describes the content view.")),(0,s.kt)("h3",null,"Sizing"),(0,s.kt)("h4",null,"Height"),(0,s.kt)("p",null,"There are three height sizes for the content switcher: small (32px), medium\n(40px), and large (48px). Choose a size that best fits the density of your\nlayout or the prominence of the switcher."),(0,s.kt)(p,{mdxType:"Row"},(0,s.kt)(m,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAABjElEQVQ4y7VUS4rCQBDNQvAQHiSLSG5g7iB4AfEAXsBzuHKpC3UnuBTP4EIQNfFvTPy84RVT0klmmChjQdHVIV39qt7rsgDg8XhA19vtlnB++8vNHBa+TT+8Y+ZZy/wwn8/R6/UwGAzQ7XYxGo1wOp2w3+9xPB5xPp9lfzgcZM/4fr9nEbI0GhO5rgvP8+A4DqrVqiRbLBZYLpcSB0Eg8Wq1wna7xfV6TSZM9yBvaeneq1vpH9RZyiuXPXvIg//pVpp6RWYizNOKTMm/HWbTVZOM0/uMDlXMtOFwKCxXKhWUy2XUajWEYSjM7nY7iSkZsqtSMlkWhFoebTKZoNFooNlsol6vo9VqidaYcLPZPDXJmEmZXMHkLvnll2KSQqTvvOUEKUq39lIbr/6ybD5aMt8oB8J4PJZ1Op0ijmNEUfSjXy6XxHB4kqJMtdttFItFlEolFAoF2LYtzPIi3/clpnzW67UwT8Z5YWba6C2z2UySdjodWfv9viDh2KITEbXIWFdTNp8fsO/KxkT4BYll/vxljv6qAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Height options for content switcher",title:"Height options for content switcher",src:"/static/5632c70743c448228a4b5c0c76799449/3cbba/content-switcher-usage-sizes.png",srcSet:["/static/5632c70743c448228a4b5c0c76799449/7fc1e/content-switcher-usage-sizes.png 288w","/static/5632c70743c448228a4b5c0c76799449/a5df1/content-switcher-usage-sizes.png 576w","/static/5632c70743c448228a4b5c0c76799449/3cbba/content-switcher-usage-sizes.png 1152w","/static/5632c70743c448228a4b5c0c76799449/92c65/content-switcher-usage-sizes.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h4",null,"Width"),(0,s.kt)("p",null,"The overall content switcher width varies based on the content and layout. Each\nindividual content tab should be the same width. The content tab with the\nlongest text label should have 16px spacing to the right of the label. The width\nof all other tabs should match the widest tab."),(0,s.kt)(b,{mdxType:"DoDontRow"},(0,s.kt)(A,{caption:"Do base content tab width on the longest text label.",mdxType:"DoDont"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAA30lEQVQ4y+2TTQtEYBDH3XDxDTg6+K6UnFyURL6SciLlQPJSkpf/ZuqRwm5t27Ztpv7NPC/za6ZnHg4fNu4G/jBwWZbNT9N00Lp/pn3uocL9wZntIVc5G3CeZ/JJksBxHJLneXBdF2EYIssyNE2Duq5JZVmi67rrCsdxJB8EAQRBgKqqkCSJYkVRkKYp3SmKgkDDMKCqqtdA3/chiiI0TSMgz/OQZZmAbdsiiiLkeY6+758DWctxHEPXdRiGAcuyYJombNvegPuW1/X3HoUdrJWu7bNxYfFbY3P/5T8FPgA/8go5pww1iwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Do base content tab width on the longest text label.",title:"Do base content tab width on the longest text label.",src:"/static/4a138f2890391421d6356adade48acea/a5df1/contentswitcher-usage-3-do.png",srcSet:["/static/4a138f2890391421d6356adade48acea/7fc1e/contentswitcher-usage-3-do.png 288w","/static/4a138f2890391421d6356adade48acea/a5df1/contentswitcher-usage-3-do.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,s.kt)(A,{type:"dont",caption:"Do not use a different width for each content tab.",mdxType:"DoDont"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyklEQVQ4y+2TvwqDMBDGXXXzIRx82Dg56+Ib6WQQ3FxCxCiK+OeTHLSkYrHQQkvx4CPcJffjO5JY+HBYF/DHgeu60rosC+Z5vkvXj2T2PHW4P2DW93tHZx+A2pmOsiwRRREpSRLK27ZF0zQkKSXlpw6naaI1jmPYtg3P8+C6LtI0pUYhBLquwziOBH0ZqJ05jgPf9wmYZRmGYQDnHFVVoe971HV9DryNnOc5GGMIggBhGKIoCnJmjqyU+sKlmM9Gj6/19rO5/vIfAjcbixmHvKve3wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Do not use a different width for each content tab.",title:"Do not use a different width for each content tab.",src:"/static/d1a84fda463d8b1fda43a0b84310cf4f/a5df1/contentswitcher-usage-3-dont.png",srcSet:["/static/d1a84fda463d8b1fda43a0b84310cf4f/7fc1e/contentswitcher-usage-3-dont.png 288w","/static/d1a84fda463d8b1fda43a0b84310cf4f/a5df1/contentswitcher-usage-3-dont.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h2",null,"Content"),(0,s.kt)("h3",null,"Main elements"),(0,s.kt)("h4",null,"Text label"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Be concise and specific and limit text labels to two to three words."),(0,s.kt)("li",{parentName:"ul"},"Text labels should clearly communicate the view users will see and the content\ncontained in the view.")),(0,s.kt)("h3",null,"Further guidance"),(0,s.kt)("p",null,"For further content guidance, see Carbon’s\n",(0,s.kt)("a",{parentName:"p",href:"/guidelines/content/overview/"},"content guidelines"),"."),(0,s.kt)("h2",null,"Behaviors"),(0,s.kt)("h3",null,"Default selection"),(0,s.kt)("p",null,"Only one content section can be shown at a time. The first content tab in the\nswitcher should be determined based on usage and should always be the default\nselection."),(0,s.kt)("h3",null,"States"),(0,s.kt)("p",null,"The content switcher includes two content tab states: ",(0,s.kt)("strong",{parentName:"p"},"selected")," and\n",(0,s.kt)("strong",{parentName:"p"},"unselected.")," The selected state uses a high contrast color."),(0,s.kt)(p,{mdxType:"Row"},(0,s.kt)(m,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAhElEQVQoz61SwQnAIBDriOISils4hzO4mOBDfOhDTamglJZaSz0IB5LLGXIbFtd2fSil9D7CmTslmHNGSqnjifcq+ERuPzsWjXg3wTagtQbnHEIISCnhnIP3viLGOC/Y7CmlQAgBpRSMMVhrYYypPYQwLziyfLb+OZS3VKdDWX42fw97BxbrDhra3gl9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Selected and unselected content switcher states.",title:"Selected and unselected content switcher states.",src:"/static/7e603030c21618e1b357b2b7c0e6ae3e/3cbba/contentswitcher-usage-4.png",srcSet:["/static/7e603030c21618e1b357b2b7c0e6ae3e/7fc1e/contentswitcher-usage-4.png 288w","/static/7e603030c21618e1b357b2b7c0e6ae3e/a5df1/contentswitcher-usage-4.png 576w","/static/7e603030c21618e1b357b2b7c0e6ae3e/3cbba/contentswitcher-usage-4.png 1152w","/static/7e603030c21618e1b357b2b7c0e6ae3e/92c65/contentswitcher-usage-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("p",null,"For detailed visual information about the various states for this component, see\nthe ",(0,s.kt)("a",{parentName:"p",href:"/components/content-switcher/style"},"Style")," tab."),(0,s.kt)("h3",null,"Interactions"),(0,s.kt)("h4",null,"Mouse"),(0,s.kt)("p",null,"Users can activate and navigate between content switcher tabs by clicking a\ncontent tab."),(0,s.kt)("h4",null,"Keyboard"),(0,s.kt)("p",null,"Users can activate and navigate between content switcher tabs by pressing the\n",(0,s.kt)("inlineCode",{parentName:"p"},"left")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"right")," arrow."),(0,s.kt)("h4",null,"Screen readers"),(0,s.kt)("p",null,"VoiceOver: Users can activate and navigate between content switcher tabs by\npressing the ",(0,s.kt)("inlineCode",{parentName:"p"},"left")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"right")," arrow."),(0,s.kt)("p",null,"Jaws: Users can activate and navigate between content switcher tabs by pressing\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"left")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"right")," arrow."),(0,s.kt)("p",null,"NVDA: Users can activate and navigate between content switcher tabs by pressing\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"left")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"right")," arrow."),(0,s.kt)("h2",null,"Related"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/components/tabs/usage"},"Tabs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/components/toggle/usage"},"Toggle"))),(0,s.kt)("h2",null,"Feedback"),(0,s.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}y.isMDXComponent=!0}}]);