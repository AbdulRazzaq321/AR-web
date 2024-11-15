"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6514],{34055:function(e,s,t){var n=t(60042),i=t.n(n),a=t(27378),l=t(31139),r=t(98878),c=t(78392),o=t(24246),d=(0,a.forwardRef)((function(e,s){var t=e.children,n=e.className,d=e.stickyElement,u=e.offset,h=void 0===u?0:u,m=e.direction,p=void 0===m?"top":m,f=e.zIndex,x=void 0===f?849:f,N=e.threshold,v=void 0===N?.3:N,j=(0,a.useRef)(null),y=(0,a.useState)(1e3),g=y[0],b=y[1],E=(0,a.useRef)(null);return(0,c.Z)((function(){j.current&&b(j.current.clientHeight)})),(0,r.Z)((function(){E.current&&new l.Z({threshold:v},!1).observe(E.current,(function(e){j.current&&(j.current.style.transform=e?"translateY(-".concat(g+h,"px)"):"translateY(-1px)")}))}),[]),"bottom"===p?(0,o.jsx)("div",{ref:s,children:"Bottom sticky anchor is not currently supported."}):(0,o.jsxs)("div",{ref:s,className:i()(n),children:[(0,o.jsx)("div",{ref:j,className:"ds-w-full ds-fixed ds-transition-all ds-duration-300",style:{zIndex:x,transform:"translateY(-".concat(g+h,"px)")},children:d}),(0,o.jsx)("div",{ref:E,children:t})]})}));d.displayName="DSStickyAnchor",s.Z=d},91591:function(e,s,t){t.r(s);var n=t(1717),i=t(60042),a=t.n(i),l=t(27378),r=t(71244),c=t(26375),o=t(28496),d=t(10817),u=t(92150),h=t(36077),m=t(81593),p=t(2251),f=t(34055),x=t(10897),N=t(81817),v=t(24246);function j(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?j(Object(t),!0).forEach((function(s){(0,n.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var g=(0,l.forwardRef)((function(e,s){var t,n,i=e.title,j=e.onBack,g=e.icons,b=e.tabs,E=e.promotionNode,Z=e.rightNodes,T=e.className,k=e.sticky,I=void 0===k||k,L=(0,r.Z)(s),_=Z&&Z.length>0;switch(i.type){case x.iD.TEXT:var O=i;return(0,v.jsx)(m.Z,{mode:"top",disabled:!I,children:(0,v.jsxs)("div",{ref:L,className:a()("ds-bg-fill-navbar ds-w-full",T),children:[(0,v.jsxs)("div",{className:"ds-flex ds-items-center ds-px-4",style:{height:48},children:[j?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(h.ZP,{name:p.v.ARROW_BACK_SOLID,className:"ds-p-2 ds--ml-2 ds-text-raw-white ds-cursor-pointer",color:N.BG.INVERSE,size:N.XR.MD,onClick:j})}):null,(0,v.jsx)("div",{className:"ds-grow ds-flex ds-items-center",children:(0,v.jsx)(d.Z,{anchorType:O.anchorType,children:(0,v.jsx)(o.Z,{title:O.title,titleClassName:"ds-px-2 ds-text-raw-white ds-line-clamp-1",size:O.size===x.oo.SM?o.t.MD:o.t.LG,imageUrl:O.imageUrl,iconName:O.iconName,titleElement:O.titleElement})})}),E&&(0,v.jsx)(l.Fragment,{children:E}),g&&g.map((function(e,s){return(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(u.Z,{children:(0,v.jsx)(h.ZP,y(y({},e),{},{className:a()("ds-p-2 ds-text-raw-white ds-cursor-pointer",{"ds--mr-2":!_&&s===g.length-1}),color:N.BG.INVERSE,size:N.XR.MD}))})},s)})),_?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:Z}):null]}),b?(0,v.jsx)(c.ZP,y({className:"ds-border-b ds-border-line"},b)):null]})});case x.iD.ANCHOR:var w=i;return(0,v.jsx)(m.Z,{mode:"top",disabled:!I,children:(0,v.jsxs)("div",{ref:L,className:a()("ds-bg-fill-navbar ds-w-full",T),children:[(0,v.jsxs)("div",{className:"ds-flex ds-items-center ds-px-4",style:{height:48},children:[j?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(h.ZP,{name:p.v.ARROW_BACK_SOLID,className:"ds-p-2 ds-mr-2 ds--ml-2 ds-text-raw-white ds-cursor-pointer",color:N.BG.INVERSE,size:N.XR.MD,onClick:j})}):null,(0,v.jsx)("div",{className:"ds-grow ds-flex ds-items-center",children:w.titleNode}),E&&(0,v.jsx)(l.Fragment,{children:E}),g&&g.map((function(e,s){return(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(u.Z,{children:(0,v.jsx)(h.ZP,y(y({},e),{},{className:a()("ds-px-2 ds-text-raw-white ds-cursor-pointer",{"ds--mr-2":!_&&s===g.length-1}),color:N.BG.INVERSE,size:N.XR.MD}))})},s)})),_?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:Z}):null]}),b?(0,v.jsx)(c.ZP,y(y({},b),{},{className:"ds-border-b ds-border-line"})):null]})});case x.iD.IMAGE:var S=i,C=null!==(t=S.bgBlur)&&void 0!==t&&t,R=null===(n=S.bgGradient)||void 0===n||n,z=j?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(h.ZP,{name:p.v.ARROW_BACK_SOLID,className:"ds-p-2 ds--ml-2 ds-text-raw-white ds-cursor-pointer",color:N.BG.INVERSE,size:N.XR.MD,onClick:j})}):null,A=(0,v.jsx)("div",{className:"ds-grow ds-flex ds-items-center",children:(0,v.jsx)(d.Z,{anchorType:S.anchorType,children:(0,v.jsx)(o.Z,{title:S.title,titleClassName:"ds-px-2 ds-text-raw-white ds-line-clamp-1",size:S.titleSize===x.oo.SM?o.t.MD:o.t.LG,imageUrl:S.imageUrl,iconName:S.iconName,titleElement:S.titleElement})})}),M=g?(0,v.jsx)("div",{className:"ds-flex ds-items-center ds-ml-auto",children:g.map((function(e,s){return(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(u.Z,{children:(0,v.jsx)(h.ZP,y(y({},e),{},{className:a()("ds-p-2 ds-text-raw-white ds-cursor-pointer",{"ds--mr-2":!_&&s===g.length-1}),color:N.BG.INVERSE,size:N.XR.MD}))})},s)}))}):null,P=_?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:Z}):null,D=(0,v.jsx)("div",{className:a()("ds-relative ds-z-0"),children:S.contentNode}),U=b?(0,v.jsx)(c.ZP,y(y({},b),{},{className:"ds-relative ds-z-0 ds-border-b ds-border-line"})):null,G=function(e,s){return(0,v.jsxs)("div",{ref:L,className:a()("ds-bg-no-repeat ds-relative ds-bg-center ds-bg-cover ds-w-full",T),style:{backgroundImage:"url(".concat(S.bgImageUrl,")")},children:[(0,v.jsx)("div",{className:a()("ds-absolute ds-w-full ds-h-full ds-top-0 ds-left-0",{"ds-backdrop-blur-sm":C,"ds-bg-fill-fade-to-contrast":R})}),(0,v.jsxs)("div",{className:"ds-app-bar-header ds-relative ds-z-0 ds-flex ds-items-center ds-px-4",style:{height:48},children:[z,s?A:null,E&&(0,v.jsx)(l.Fragment,{children:E}),M,P]}),e?D:null,U]},"app-bar-image")},F=G(!0,!S.showTitleOnSticky);if(I){var B=G(!1,!0);return(0,v.jsx)(f.Z,{stickyElement:B,children:F})}return F;default:return null}}));g.displayName="DSWDAppBar",s.default=g},86514:function(e,s,t){t.d(s,{Z:function(){return q}});var n=t(48978),i=t(27378),a=t(60042),l=t.n(a),r=t(10817),c=t(97458),o=t(2251),d=t(15140),u=t(91591),h=t(8325),m=t(1319),p=t(6351),f=t(36077),x=t(86677),N=t(93307),v=t(87205),j=t(80307),y=t(39156),g=t(28496),b=t(17218),E=t(17979),Z=t(93813),T=t(77571),k=t(55543),I=t(83649),L=t(25480),_=t(21600),O=t(51196),w=t(31198),S=t(32425),C=t(99971),R=t(81817),z=t(24246),A={matches:o.v.CALENDAR_TODAY_OUTLINE,team:o.v.FLAG_OUTLINE,news:o.v.TEXT_SNIPPET_OUTLINE,features:o.v.STAR_OUTLINE,videos:o.v.VIDEO_CAM_OUTLINE,stats:o.v.CHART_BAR_OUTLINE,notifications:o.v.NOTIFICATIONS_OUTLINE,edition:o.v.LANGUAGE_OUTLINE,language:o.v.CI_TRANSLATE_SOLID,fantasy:o.v.LOCAL_POLICE_OUTLINE,others:o.v.MORE_HORIZONTAL_SOLID},M=(0,i.forwardRef)((function(e,s){var t=e.navigation,n=e.onClose,a=(0,x.useRouter)().asPath,c=(0,i.useContext)(m.Z),d=c.edition,u=c.country,h=(0,i.useContext)(L.Z).translate,p=(0,i.useRef)(null);(0,i.useImperativeHandle)(s,(function(){return{getElement:function(){return p.current},close:function(){p.current&&p.current.close()}}}));var M=[{key:"fantasy_pick",label:h("cm_fantasy_pick","Fantasy Pick"),anchorType:{href:(0,k.B)(T.i.FANTASY_PICK)}},{key:"fantasy_play",label:h("cm_play_fantasy","Play Fantasy"),anchorType:{href:(0,I.oK)()}}],P=[];return t.links.forEach((function(e,s){var t;"series"!==e.code&&P.push({key:e.code,header:{title:e.title,iconName:null!==(t=A[e.code])&&void 0!==t?t:o.v.STAR_OUTLINE},contentSize:N.kp.FULL,content:(0,z.jsx)(y.Z,{className:"ds-w-full",size:S.tC.SM,children:e.links.filter((function(e){return"desktop scoreboard"!==e.title.toLowerCase()})).map((function(s,t){var n=!(s.url.startsWith("/")||s.url.startsWith("https://www.espncricinfo.com"));return(0,z.jsx)(y.Z.Item,{anchorType:{href:s.url,data:{action:"site:subnav:".concat(e.title,":").concat(s.title)},onClick:function(){p.current&&p.current.close()}},children:(0,z.jsxs)("span",{className:l()("ds-block ds-ml-7",{"ds-font-bold":(0,Z.jN)(a,s.url),"ds-flex ds-justify-between ds-items-center":n}),children:[s.title,n?(0,z.jsx)(f.ZP,{name:o.v.LAUNCH_OUTLINE,size:R.XR.XXS}):null]})},t)}))})})})),(0,_.M)(u)&&P.push({key:"_fantasy",header:{title:"Fantasy",iconName:A.fantasy},contentSize:N.kp.FULL,content:(0,z.jsx)(y.Z,{className:"ds-w-full",size:S.tC.SM,children:M.map((function(e){return(0,z.jsx)(y.Z.Item,{anchorType:(0,E.k)(e.anchorType,(function(){p.current&&p.current.close()})),children:(0,z.jsx)("span",{className:l()("ds-block ds-ml-7",{"ds-font-bold":e.selected}),children:e.label})},e.key)}))})}),P.push({key:"_other",header:{title:h("cm_others","Others"),iconName:A.others},contentSize:N.kp.FULL,content:(0,z.jsx)(y.Z,{className:"ds-w-full",size:S.tC.SM,children:(0,O.W)(c).map((function(e,s){return(0,z.jsx)(y.Z.Item,{anchorType:{href:e.url,onClick:function(){p.current&&p.current.close()}},children:(0,z.jsx)("span",{className:l()("ds-block ds-ml-7"),children:e.title})},s)}))})}),P.forEach((function(e){e.header.titleClassName="!ds-text-tight-m ds-text-typo ds-capitalize"})),(0,z.jsxs)(b.Z,{ref:p,variant:C.bT.LEFT_SHEET,onClose:n,dialogClassName:"ds-bg-content-prime",children:[(0,z.jsx)(b.Z.Header,{title:h("cm_menu","Menu"),className:"ds-border-b-0",size:g.t.LG}),(0,z.jsx)(b.Z.Content,{size:C.ez.FULL,children:(0,z.jsxs)("div",{className:"ds-flex ds-flex-col ds-space-y-2 ds-mb-20",children:[(0,z.jsx)("div",{className:"ds-px-4 ds-py-2",children:(0,z.jsx)(w.Z,{})}),(0,z.jsx)(v.ZP,{options:P,spacing:v.uj.MD,variant:v.LM.FLAT,multiple:!1,size:N.ex.SM,arrowPosition:j.Sn.RIGHT}),"us"===d&&"us"===u?(0,z.jsx)(r.Z,{anchorType:{href:"https://plus.espn.com/cricket?ex_cid=cricinfonav"},children:(0,z.jsx)("div",{className:"ds-border-line ds-px-4 ds-py-2 ds-bg-fill-content-prime",children:(0,z.jsx)(g.Z,{size:g.t.SM,title:"ESPN Plus",imageUrl:"/static/images/espn_plus_small_icon.png",titleClassName:"!ds-text-title-xs ds-text-typo"})})}):null]})})]})}));M.displayName="CiAppLayoutFooterMobileMoreModal";var P,D=M,U=t(1717),G=t(4550),F=t(73627),B=t(8776),H=t(33489),X=t(44971),V=t(34501),W=(P={},(0,U.Z)(P,d.Wi.LIGHT,{key:"light",value:"Light",icon:o.v.LIGHT_MODE_OUTLINE}),(0,U.Z)(P,d.Wi.DARK,{key:"dark",value:"Dark",icon:o.v.DARK_MODE_OUTLINE}),P),K=function(e){var s=e.onClose,t=(0,i.useContext)(L.Z).translate,a=(0,i.useContext)(m.Z),c=a.edition,d=a.lang,u=a.theme,p=(0,X.Z)().toggleTheme,f=(0,i.useRef)(null),x=[],E=null,Z=[];G.Z.editions.options.forEach((function(e){c===e.key&&(E=e);var s={key:e.key,label:e.label,selected:c===e.key&&d===F.IBh.ENGLISH,anchorType:function(){e.key===c&&d===F.IBh.ENGLISH||((0,B.Yg)().trackEvent("sitenav:edition:".concat(e.label)),(0,B.zs)(e.key,F.IBh.ENGLISH))}};Z.push(s),e.supportedLang.forEach((function(s){var t;if(null===(t=G.Z.language[s])||void 0===t||t){var n={key:"".concat(e.key,"-").concat(s),label:"".concat(e.label,"-").concat(H.h4[s].name),selected:c===e.key&&d===s,anchorType:function(){e.key===c&&d===s||((0,B.Yg)().trackEvent("sitenav:edition:".concat(e.label)),(0,B.zs)(e.key,s))}};Z.push(n)}}))})),x.push({key:"edition",header:{title:t("cm_change_edition","Change Edition"),iconName:o.v.LANGUAGE_OUTLINE},contentSize:N.kp.FULL,content:(0,z.jsx)(y.Z,{className:"ds-w-full",size:S.tC.SM,children:Z.map((function(e){return(0,z.jsx)(y.Z.Item,{anchorType:e.anchorType,children:(0,z.jsx)("span",{className:l()("ds-block ds-ml-7",{"ds-font-bold":e.selected}),children:e.label})},e.key)}))})}),E&&E.supportedLang.length>0&&x.push({key:"language",header:{title:t("cm_change_language","Change Language"),iconName:o.v.CI_TRANSLATE_SOLID},contentSize:N.kp.FULL,content:(0,z.jsx)(y.Z,{children:[F.IBh.ENGLISH].concat((0,n.Z)(E.supportedLang)).map((function(e){var s;if(null===(s=G.Z.language[e])||void 0===s||s)return(0,z.jsx)(y.Z.Item,{anchorType:function(){d!==e&&((0,B.Yg)().trackEvent("frontpage:language"),window.location.href="".concat(G.Z.global.baseUrl).concat((0,h.P_)(e)))},children:(0,z.jsx)("span",{className:l()("ds-block ds-ml-7",{"ds-font-bold":d===e}),children:H.h4[e].localName})},e)}))})}),x.forEach((function(e){e.header.titleClassName="!ds-text-tight-m ds-text-typo ds-capitalize"}));var T=(0,V.Z)().state;return(0,z.jsxs)(b.Z,{ref:f,variant:C.bT.BOTTOM_SHEET,onClose:s,children:[(0,z.jsx)(b.Z.Header,{title:t("cm_settings","Settings")}),(0,z.jsxs)(b.Z.Content,{size:C.ez.FULL,children:[(0,z.jsx)(v.ZP,{options:x,spacing:v.uj.NONE,variant:v.LM.FLAT,multiple:!1,size:N.ex.SM,arrowPosition:j.Sn.RIGHT}),(0,z.jsx)(r.Z,{anchorType:function(){var e;p(),null===(e=f.current)||void 0===e||e.close()},children:(0,z.jsx)("div",{className:"ds-px-4 ds-py-3 ds-bg-fill-content-prime",children:(0,z.jsx)(g.Z,{size:g.t.SM,title:"".concat(t("cm_mode","Change Mode"),": ").concat(t("cm_mode_".concat(W[u].key),W[u].value)),iconName:W[u].icon,titleClassName:"!ds-text-title-xs ds-text-typo ds-capitalize"})})}),T==V.s.ACCEPTED?(0,z.jsx)(r.Z,{anchorType:{href:(0,I.l5)()},children:(0,z.jsx)("div",{className:"ds-px-4 ds-py-3 ds-bg-fill-content-prime",children:(0,z.jsx)(g.Z,{size:g.t.SM,title:t("cm_notification_settings","Notification Settings"),iconName:o.v.NOTIFICATIONS_OUTLINE,titleClassName:"!ds-text-title-xs ds-text-typo ds-capitalize"})})}):null]})]})},Y=t(10897),q=function(e){var s=e.defaultIcons,t=void 0===s||s,a=e.showMenu,x=void 0!==a&&a,N=e.title,v=e.icons,j=e.tabs,y=e.back,g=void 0===y||y,b=e.promotionNode,E=e.rightNodes,Z=e.sticky,T=e.defaultIconsFirst,k=void 0!==T&&T,I=(0,i.useContext)(m.Z),L=I.lang,_=I.editionDetails,O=(0,i.useContext)(d.ZP).showModal,w=(0,p.Z)(),S=[];t&&x&&S.push({name:o.v.SETTINGS_OUTLINE,onClick:function(){return O((0,z.jsx)(K,{}))}}),v&&(k?S.push.apply(S,(0,n.Z)(v)):S.unshift.apply(S,(0,n.Z)(v)));var C=N;if(!C){var A=(0,h.Eh)(L);C={type:Y.iD.ANCHOR,titleNode:(0,z.jsxs)("div",{className:l()(x?"ds-flex ds-gap-x-3 ds-items-center":""),children:[x?(0,z.jsx)(f.ZP,{onClick:function(){O((0,z.jsx)(D,{navigation:_.navigation}))},size:R.XR.MD,name:o.v.MENU_OUTLINE,color:R.BG.INVERSE}):null,(0,z.jsx)(r.Z,{anchorType:{href:A,data:{action:"sitenav:mainlogo"}},children:(0,z.jsx)(c.Z,{variant:R.N6.NONE,size:R.Ui.NONE,url:"/static/images/logo.png",alt:"ESPNcricinfo",width:138,height:21,lazy:!1})})]})}}return(0,z.jsx)(u.default,{title:C,onBack:g?w:void 0,icons:S,tabs:j,sticky:Z,promotionNode:b,rightNodes:E})}},6351:function(e,s,t){var n=t(86677),i=t(27378),a=t(15140),l=t(16453),r=t(92438),c=["android-widget","ios-widget","pin","notification"];s.Z=function(){var e=(0,n.useRouter)(),s=e.query,t=e.asPath,o=(0,i.useContext)(a.ZP).handleNavigation,d=void 0;return(0,r.kF)(t)||(d=function(){s.source&&c.includes(s.source)?o("/"):window.history.state&&window.history.state.idx>0?e.back():(0,l.OS)()?(0,l.mF)({command:"NAVIGATE",value:{href:"BACK"}}):o("/")}),d}}}]);