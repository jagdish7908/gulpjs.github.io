(window.webpackJsonp=window.webpackJsonp||[]).push([[39,7],{190:function(e,a,t){"use strict";var n=t(2),r=(t(183),t(75),t(10)),l=t(0),i=t.n(l),o=t(176),c=t.n(o),s=t(179),m=t(175),b=t(177),v=t(178),u=t(181),d=t(191),g=t(192),h=t(184),f=t(197),p=t(187),_=t(132),k=t.n(_);function E(){}function O(e){var a=e.activeBasePath,t=e.to,l=e.href,o=e.logo,u=e.label,d=(e.position,Object(r.a)(e,["activeBasePath","to","href","logo","label","position"])),g=Object(b.a)(t),f=Object(b.a)(a),p=function(e){void 0===e&&(e={});var a=Object(m.a)().siteConfig,t=(a=void 0===a?{}:a).baseUrl,n=Object(h.a)().isDarkTheme,r=e.href||t;e.target?e.target:Object(v.a)(r);var l=e.srcDark&&n?e.srcDark:e.src;return{logoImageUrl:Object(b.a)(l),logoAlt:e.alt}}(o),_=p.logoImageUrl,E=p.logoAlt,O=null!=_?i.a.createElement("img",{className:c()(k.a.navbarIcon),src:_,alt:E}):u;return i.a.createElement(s.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:l}:Object.assign({activeClassName:"navbar__link--active",to:g},a?{isActive:function(e,a){return a.pathname.startsWith(f)}}:null),d),O)}function j(e){var a,t=e.items,l=e.emphasis,o=e.position,s=Object(r.a)(e,["items","emphasis","position"]);return t?i.a.createElement("div",{className:c()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===o,"dropdown--right":"right"===o})},i.a.createElement(O,Object(n.a)({className:"navbar__item navbar__link"},s),s.label),i.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement(O,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):i.a.createElement(O,Object(n.a)({className:c()("navbar__item","navbar__link",(a={"navbar__link--icon":s.logo},a[k.a.emphasis]=l,a[k.a.noWrap]=!0,a))},s))}function N(e){return"/plugins"!==e&&"/plugins/"!==e}a.a=function(){var e,a=Object(m.a)(),t=a.siteConfig.themeConfig,r=t.navbar,o=((r=void 0===r?{}:r).title,r.links),b=void 0===o?[]:o,v=r.hideOnScroll,_=void 0!==v&&v,O=t.disableDarkMode,w=void 0!==O&&O,y=a.isClient,C=Object(u.c)(),D=Object(l.useState)(N(C.pathname)),P=D[0],I=D[1];Object(l.useEffect)((function(){I(N(C.pathname))}),[C]);var L=Object(h.a)(),T=L.isDarkTheme,U=L.setLightTheme,A=L.setDarkTheme,B=Object(f.a)(_),S=B.navbarRef,x=B.isNavbarVisible,W=Object(p.a)(),F=W.logoLink,H=W.logoLinkProps,J=W.logoImageUrl,R=W.logoAlt,V=Object(l.useCallback)((function(e){return e.target.checked?A():U()}),[U,A]);return i.a.createElement("nav",{ref:S,className:c()("navbar","navbar--light","navbar--fixed-top",(e={},e[k.a.navbarHideable]=_,e[k.a.navbarHidden]=!x,e))},i.a.createElement("div",{className:"navbar__inner"},i.a.createElement("div",{className:"navbar__items"},i.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:F},H),null!=J&&i.a.createElement("img",{key:y,className:"navbar__logo",src:J,alt:R})),b.filter((function(e){return"left"===e.position})).map((function(e,a){return i.a.createElement(j,Object(n.a)({},e,{key:a}))}))),i.a.createElement("div",{className:"navbar__items navbar__items--right"},b.filter((function(e){return"right"===e.position})).map((function(e,a){return i.a.createElement(j,Object(n.a)({},e,{key:a}))})),!w&&i.a.createElement(g.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:V}),P&&i.a.createElement(d.a,{handleSearchBarToggle:E,isSearchBarExpanded:!0}))))}},208:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(189);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);