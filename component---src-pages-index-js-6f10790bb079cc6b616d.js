(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{GCtb:function(t,e,n){"use strict";n("OG14");var a=n("TqRt");e.__esModule=!0,e.changeLocale=e.navigate=e.default=void 0;var l=a(n("pVnL")),o=a(n("8OQS")),i=a(n("q1tI")),r=a(n("17x9")),u=n("Wbzz"),c=n("n83N"),d=function(t){var e=t.to,n=t.language,a=t.children,r=t.onClick,d=(0,o.default)(t,["to","language","children","onClick"]);return i.default.createElement(c.IntlContextConsumer,null,(function(t){var o=n||t.language,c=t.routed||n?"/"+o+e:""+e;return i.default.createElement(u.Link,(0,l.default)({},d,{to:c,onClick:function(t){n&&localStorage.setItem("gatsby-intl-language",n),r&&r(t)}}),a)}))};d.propTypes={children:r.default.node.isRequired,to:r.default.string,language:r.default.string},d.defaultProps={to:""};var s=d;e.default=s;e.navigate=function(t,e){if("undefined"!=typeof window){var n=window.___gatsbyIntl,a=n.language,l=n.routed?"/"+a+t:""+t;(0,u.navigate)(l,e)}};e.changeLocale=function(t,e){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,a="/"+t+(e||function(t){if(!n)return t;var e=t.indexOf("/",1);return t.substring(e)}(function(t){return 0===t.indexOf("/expo")&&(t=t.slice("/expo".length)),t}(window.location.pathname)))+window.location.search;localStorage.setItem("gatsby-intl-language",t),(0,u.navigate)(a)}}},RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return I}));n("f3/d");var a=n("q1tI"),l=n.n(a),o=n("kCIJ"),i=n("hYuR"),r=n("NymF"),u=n("0g4d"),c=n("Oo9N"),d=n("fH6n"),s=n("9eSz"),g=n.n(s),f=n("vOnD"),m=n("kOA+"),p=n.n(m),v=f.a.div.withConfig({displayName:"Item__StyledItem",componentId:"dmp5lg-0"})(["width:","%;display:inline-block;margin-bottom:","rem;position:relative;box-shadow:1px 1px 3px rgba(0,0,0,0.3);.title{transition:all 0.5s;opacity:0;display:grid;align-items:center;justify-items:center;background-color:rgba(66,33,99,0.7);position:absolute;left:0;right:0;bottom:0;top:0;z-index:400;color:white;text-transform:lowercase;}&:hover .title{opacity:1;}"],(function(t){return t.width}),(function(t){return t.gap})),h=function(t){var e=t.width,n=t.item,a=t.gap,o=t.lang;return l.a.createElement(v,{width:e,gap:a},l.a.createElement(p.a,{paintDrip:!0,hex:"#663399",to:"/"+o+"/"+n.slug},l.a.createElement(g.a,{fluid:n.image}),l.a.createElement("div",{className:"title"},n.title)))};h.defaultProps={width:100,gap:1,lang:"en"};var w=h,I=(e.default=Object(o.injectIntl)((function(t){var e=t.data,n=e.artists.edges,a=e.text.html,o=t.intl,s=t.pageContext;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{title:o.formatMessage({id:"Home"}),lang:s.language}),l.a.createElement(c.a,null,l.a.createElement(d.a,null,l.a.createElement("img",{src:"https://via.placeholder.com/250/250"}),l.a.createElement(u.a,null,"Confines Ilustrados"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})),l.a.createElement(r.a,{partitions:2,component:w,lang:s.language,items:n.map((function(t){var e=t.node;return{image:e.frontmatter.featured.full.fluid,title:e.frontmatter.name,slug:e.frontmatter.slug}}))})))})),"3597781119")},e2gX:function(t,e,n){"use strict";var a=n("TqRt");e.__esModule=!0,e.default=void 0;var l=a(n("q1tI")),o=n("7++0");e.default=function(t){return function(e){return console.warn("withIntl is deprecated. Please use injectIntl instead."),l.default.createElement((0,o.injectIntl)(t),e)}}},kCIJ:function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("TqRt"),l=n("284h");e.__esModule=!0;var o={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};e.IntlContextConsumer=e.IntlContextProvider=e.changeLocale=e.navigate=e.withIntl=e.Link=void 0;var i=n("7++0");Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(o,t)||(e[t]=i[t]))}));var r=l(n("GCtb"));e.Link=r.default,e.navigate=r.navigate,e.changeLocale=r.changeLocale;var u=a(n("e2gX"));e.withIntl=u.default;var c=n("n83N");e.IntlContextProvider=c.IntlContextProvider,e.IntlContextConsumer=c.IntlContextConsumer}}]);
//# sourceMappingURL=component---src-pages-index-js-6f10790bb079cc6b616d.js.map