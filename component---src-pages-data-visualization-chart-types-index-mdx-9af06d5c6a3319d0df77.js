"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[60339],{28399:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(67294),o=a(88650),c=a.n(o),r=a(1597),i=a(64905),d=a(81151),m=a(75900),s=a.n(m);var n=e=>{let{title:t,theme:a,tabs:o=[]}=e;return l.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:c,subDirectory:i,branch:d}=a||o,m=`${c}/edit/${d}${i}/src/pages${t}`;return c?l.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"cds--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let T=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=c()(e,{lower:!0,strict:!0}),i=t===o,d=new RegExp(`${o}/?(#.*)?$`),m=a.replace(d,t);return l.createElement("li",{key:e,className:s()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},l.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},l.createElement("nav",{"aria-label":e},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(l.Component);var v=T,k=a(17680),x=a(75387),b=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?l.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(b.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var h=e=>{let{pageContext:t,children:a,location:o,Title:m}=e;const{frontmatter:s={},relativePagePath:g,titleType:T}=t,{tabs:b,title:h,theme:y,description:S,keywords:M,date:C}=s,{interiorTheme:L}=(0,x.Z)(),{site:{pathPrefix:w}}=(0,r.useStaticQuery)("2456312558"),G=w?o.pathname.replace(w,""):o.pathname,E=b?G.split("/").filter(Boolean).slice(-1)[0]||c()(b[0],{lower:!0}):"",A=y||L;return l.createElement(d.Z,{tabs:b,homepage:!1,theme:A,pageTitle:h,pageDescription:S,pageKeywords:M,titleType:T},l.createElement(n,{title:m?l.createElement(m,null):h,label:"label",tabs:b,theme:A}),b&&l.createElement(v,{title:h,slug:G,tabs:b,currentTab:E}),l.createElement(k.Z,{padded:!0},a,l.createElement(p,{relativePagePath:g}),l.createElement(f,{date:C})),l.createElement(u.Z,{pageContext:t,location:o,slug:G,tabs:b,currentTab:E}),l.createElement(i.Z,null))}},61502:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return T}});var l=a(45987),o=(a(67294),a(64983)),c=a(28399),r=a(48782);const i=["components"],d={},m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},s=m("PageDescription"),n=m("Row"),p=m("Column"),u={_frontmatter:d},g=c.Z;function T(e){let{components:t}=e,a=(0,l.Z)(e,i);return(0,o.kt)(g,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"title: Chart types\ndescription: Overview of all chart types available."),(0,o.kt)(s,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Start by identifying the purpose of the visualization and then choose the\nappropriate chart type.")),(0,o.kt)("h2",null,"Comparisons"),(0,o.kt)(n,{className:"overview-card-group",mdxType:"Row"},(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Simple bar",href:"/data-visualization/simple-charts#bar-(simple)",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/ead52888035f8edc84ed64c5442d791d/bar.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Grouped bar",href:"/data-visualization/simple-charts#bar-(grouped)",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/b1ecb10fed9a076af501480ed2dc4d2c/bargrouped.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Floating bar",href:"/data-visualization/simple-charts#bar-(floating)",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/309a866882e95f22066da7d2f1420039/barfloating.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Lollipop",href:"/data-visualization/simple-charts#lollipop",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/b96449b6ee4c05889c53f211bfc895d2/lollipop.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Bubble",href:"/data-visualization/simple-charts#bubble",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/c91bbf38873920665b668f7ae91d6ed3/bubble.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Radar",href:"/data-visualization/simple-charts#radar",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/6157d84564768f13f29828aaac7de1a4/radar.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Wordcloud",href:"/data-visualization/simple-charts#word-cloud",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/f9559001a5ddbc57e26866cee3f18911/wordcloud.svg",alt:"GATSBY_EMPTY_ALT"})))),(0,o.kt)("h2",null,"Trends"),(0,o.kt)(n,{className:"overview-card-group",mdxType:"Row"},(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Line",href:"/data-visualization/simple-charts#line",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/a7520c466e27fb3a8880d5cfaca4ae27/line.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Area",href:"/data-visualization/simple-charts#area-(simple)",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/06ae15c0e3fd9cb519afd524874f6111/area.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Boxplot",href:"/data-visualization/simple-charts#boxplot",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/d203693cd4c92aa49f4e213da1a1739b/boxplot.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Histogram",href:"/data-visualization/simple-charts#histogram",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/48409f951f64c4cb72ca74d47bb53317/histogram.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Stream",disabled:!0,mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/e1b6d0454fdc9a5e825fa8b85f9427e6/stream.svg",alt:"GATSBY_EMPTY_ALT"})))),(0,o.kt)("h2",null,"Part-to-whole"),(0,o.kt)(n,{className:"overview-card-group",mdxType:"Row"},(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Donut",href:"/data-visualization/simple-charts#donut",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/e0f72c933c56f9a181871c256bec5aaf/donut.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Pie",href:"/data-visualization/simple-charts#pie",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/8c57c4d84c364ee96c2a7360c568478b/pie.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Stacked bar",href:"/data-visualization/simple-charts/#bar-(stacked)",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/28661ab7c2983e7b56f2f2fc12a3318f/stacked-bar-horizontal.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Bullet",href:"/data-visualization/simple-charts/#bullet",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/1ceae5790aab9ded5abc3852aed3e365/bullet.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Stacked area",href:"/data-visualization/simple-charts/#area-(stacked)",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/6acc9cb91a5803e9b90ecff8baa48345/areastack.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Meter",href:"/data-visualization/simple-charts/#meter",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/db1fbc847886f400ea88bf66714f8b9f/meter.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Gauge",href:"/data-visualization/simple-charts/#gauge",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/2e0d63661767d356a9c85c28742b7b3d/gauge.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Tree map",href:"/data-visualization/complex-charts#tree-maps",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/e03c1051a172dd58c2b1d6b3a055c0e0/treemap.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Circle pack",href:"/data-visualization/complex-charts#circle-packs",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/b1f746b037a92bed39f9d59369d31371/circle-pack.svg",alt:"GATSBY_EMPTY_ALT"})))),(0,o.kt)("h2",null,"Correlations"),(0,o.kt)(n,{className:"overview-card-group",mdxType:"Row"},(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Scatter",href:"/data-visualization/simple-charts#scatter",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/de4f62005a3c2d92c310a1b2ff79f1f1/scatter.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Heat map",href:"/data-visualization/complex-charts#heat-maps",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/8d15fb34361497924e931f3a1edb6891/heatmap.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Parallel coordinates",href:"/data-visualization/complex-charts#parallel-coordinates",tag:"Design only",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/23fd1e631818fcc3848017d99092039f/parallel.svg",alt:"GATSBY_EMPTY_ALT"})))),(0,o.kt)("h2",null,"Connections"),(0,o.kt)(n,{className:"overview-card-group",mdxType:"Row"},(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Alluvial diagram",href:"/data-visualization/complex-charts#alluvialsankey-diagrams",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/70db59f6404b2c433747a268566dcb50/alluvial.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Network diagram",href:"/data-visualization/complex-charts#network-diagrams",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/bcc3653014a804a36d60be069682abd5/network-diagram.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Tree diagram",href:"/data-visualization/complex-charts#tree-diagrams",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/dfd667a964a0a4d5e749a2ad523b1ccc/treediagram.svg",alt:"GATSBY_EMPTY_ALT"})))),(0,o.kt)("h2",null,"Geospatial: overlays"),(0,o.kt)(n,{className:"overview-card-group",mdxType:"Row"},(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Choropleth map",href:"/data-visualization/complex-charts#geographic-overlays",tag:"Design only",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/b012737e6d46b33f3884caccb24d46f1/geo-choropleth.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Proportional symbol",href:"/data-visualization/complex-charts#proportional-symbol-map",tag:"Design only",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/18b50f638615bda17f1eb3948b87c61a/geo-proportion.svg",alt:"GATSBY_EMPTY_ALT"}))),(0,o.kt)(p,{colMax:3,colXl:3,colLg:4,colMd:4,colSm:2,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(r.Z,{title:"Connecting lines",href:"/data-visualization/complex-charts#connection-map",tag:"Design only",mdxType:"OverviewCard"},(0,o.kt)("img",{src:"/54e7d3cc279ad20787d91b7763e88202/geo-connection.svg",alt:"GATSBY_EMPTY_ALT"})))))}T.isMDXComponent=!0}}]);