"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8617],{98617:function(e,t,r){var n=r(1717),c=r(31750),a=r(27378),i=r(62882),o=r(66581),l=r(1319),s=r(73627),u=r(62961),d=r(81577),g=r(56528),f=r(25867),v=r(43781),p=r(32425),b=r(7839),m=r(32059),y=r(30613),O=r(24246),j=["contentItem","pageData","showTitle"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.contentItem,r=e.pageData,n=e.showTitle,h=(0,c.Z)(e,j),w=h.size,P=h.variant,D=h.contentType,I=h.action,L=h.hide,T=h.className,N=h.imgVariant,S=h.imgSize,x=h.imgLazy,A=h.preload,Z=h.onClick,U=(0,a.useContext)(l.Z).lang,B=(0,o.jX)(U,t,N),k={type:p.f$.IMAGE,imageUrl:B.imageUrl||i.DN.LAZYIMAGE_PLACEHOLDER,alt:B.title||"",variant:N,size:S,lazy:x},C=n&&B.url?B.title:void 0,R=null;A&&B.imageUrl&&(R=(0,O.jsx)(m.Z,{variant:N,size:S,url:B.imageUrl}));var z=(0,O.jsx)(b.Z,{variant:P,size:w,title:B.title,description:null!==L&&void 0!==L&&L.description?void 0:B.summary,anchorType:{href:B.url,data:E({},I&&{action:I}),onClick:Z},contentType:D,media:k,className:T,titleText:C}),M={title:B.title,summary:B.summary,imageUrl:B.imageUrl};switch(C&&M.title&&(C=M.title),t.type){case s.Bgb.IMAGE:z=(0,O.jsx)(d.Z,E(E({},h),{},{image:E(E({},t.image),{},{dateTaken:null,capturedOn:null}),override:M,titleText:C,className:T}));break;case s.Bgb.GALLERY:z=(0,O.jsx)(u.Z,E(E({},h),{},{gallery:t.gallery,override:M,titleText:C,className:T}));break;case s.Bgb.STORY:z=(0,O.jsx)(g.Z,E(E({},h),{},{story:t.story,override:M,titleText:C,className:T}));break;case s.Bgb.VIDEO:z=(0,O.jsx)(f.Z,E(E({},h),{},{video:t.video,override:M,className:T,modal:t.video.origin.type===s.i00.CLIP,pageData:r,titleText:C}));break;case s.Bgb.MATCH:z=(0,O.jsx)(y.Z,{match:t.match,className:T,action:I}),R=null;break;case s.Bgb.POLL:var _=t.poll;z=(0,O.jsx)(v.default,{poll:_}),R=null}return(0,O.jsxs)(O.Fragment,{children:[R,z]})}},32467:function(e,t,r){r.d(t,{H:function(){return n}});var n=["top headlines","news headlines"]},66581:function(e,t,r){r.d(t,{Mg:function(){return E},jX:function(){return L},fD:function(){return T},oW:function(){return N}});var n,c=r(1717),a=r(73627),i=r(81817),o=r(80598),l=r(78364),s=r(92572),u=r(83649),d=r(99889),g=r(93405),f=r(69731),v=r(64650),p=r(50348),b=r(32467),m=r(37535),y=r(29881),O=r(72521);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e,t){switch(t.type){case a.Bgb.STORY:var r=t;return(0,f.S1)(r.story);case a.Bgb.GROUND:var n=t;return(0,m.ul)(e,n.ground);case a.Bgb.GALLERY:var c=t;return(0,o.q)(c.gallery);case a.Bgb.MATCH:var i=t;return(0,s.n1)(e,i.match);case a.Bgb.PLAYER:var l=t;return(0,d.hy)(l.player);case a.Bgb.SERIES:var b=t;return(0,g.l8)(e,b.series);case a.Bgb.TEAM:var j=t;return(0,v.nv)(e,j.team);case a.Bgb.VIDEO:var E=t;return(0,p.Hb)(E.video);case a.Bgb.DOWNLOAD:var w=t;return(0,u.cQ)(w.download);case a.Bgb.PAGE:var P=t;return(0,u.DG)(P.page);case a.Bgb.SQUAD:var D=t;return(0,u.iw)(D.squad);case a.Bgb.QUOTE:var I=t;return(0,O.v)(I.quote.objectId);case a.Bgb.RECORD:var L=t;return(0,u.Dn)(L.record);case a.Bgb.SITE:var T=t;return(0,u.zg)(T.site);case a.Bgb.URL:var N=t;return(0,u.V4)(N.url);case a.Bgb.IMAGE:var S=h(h({},t.image),{},{dateTaken:null,capturedOn:null});return(0,y.g)(S);default:return""}},w=function(e){switch(e.type){case a.Bgb.STORY:return e.summary;case a.Bgb.VIDEO:return e.summary;default:return e.summary}},P=function(e){var t=e.previewImage;switch(e.type){case a.Bgb.STORY:return t||e.story.image;case a.Bgb.IMAGE:return t||e.image;case a.Bgb.PLAYER:return t||e.player.image;case a.Bgb.TEAM:return t||e.team.image;case a.Bgb.GALLERY:return t||e.gallery.image;default:return t}},D=(n={},(0,c.Z)(n,i.N6.FILM,a.rh3.FILM),(0,c.Z)(n,i.N6.SQUARE,a.rh3.SQUARE),(0,c.Z)(n,i.N6.WIDE,a.rh3.WIDE),(0,c.Z)(n,i.N6.NONE,null),n),I=function(e,t){var r=null,n=t?D[t]:null;if(e.previewImage&&(r=n?(0,l.lX)(e.previewImage,n):e.previewImage.url),null===r)switch(e.type){case a.Bgb.VIDEO:r=e.video.imageUrl;break;default:var c=P(e);c&&(r=n?(0,l.lX)(c,n):c.url)}return r},L=function(e,t,r){return{type:t.type,title:t.title,summary:w(t),url:E(e,t),imageUrl:I(t,r)}},T=function(e){return e.containers.reduce((function(e,t){if([a.ut0.RELATED_LINKS,a.ut0.CAROUSEL].includes(t.type)){var r=t;return e.concat(r.items)}return e}),[])},N=function(e,t){var r=e.find((function(e){var r;return(null!==t&&void 0!==t?t:b.H).includes((null===(r=e.title)||void 0===r?void 0:r.toLowerCase())||"")}));return r?T(r):[]}},62961:function(e,t,r){var n=r(1717),c=r(31750),a=(r(27378),r(80598)),i=r(62882),o=r(81817),l=r(10626),s=r(32425),u=r(7839),d=r(24246),g=["gallery","size","variant","contentType","action","override","hide","className","imgVariant","imgSize","imgLazy","onClick"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t,r=e.gallery,n=e.size,f=e.variant,p=e.contentType,b=e.action,m=e.override,y=e.hide,O=e.className,j=e.imgVariant,h=e.imgSize,E=e.imgLazy,w=e.onClick,P=(0,c.Z)(e,g),D=r.title,I=r.image,L=r.publishedOn,T=null!==(t=null===m||void 0===m?void 0:m.title)&&void 0!==t?t:D,N=null===m||void 0===m?void 0:m.summary,S=null!==m&&void 0!==m&&m.imageUrl?null===m||void 0===m?void 0:m.imageUrl:I.url,x={type:s.f$.IMAGE_MEDIA,mediaType:o._L.GALLERY,imageUrl:S||i.DN.LAZYIMAGE_PLACEHOLDER,alt:T||"",variant:j||o.N6.NONE,size:h,lazy:E},A=(0,l.HH)(L),Z=A?[{label:A}]:[];return(0,d.jsx)(u.Z,v({variant:f,size:n,title:T,description:null!==y&&void 0!==y&&y.description?void 0:N,anchorType:{href:(0,a.q)(r),data:v({},b&&{action:b}),onClick:w},contentType:p,media:x,attributes:null!==y&&void 0!==y&&y.attributes?void 0:Z,className:O},P))}},80598:function(e,t,r){r.d(t,{y:function(){return n},q:function(){return c}});var n=function(){return"/gallery"},c=function(e){var t=e.objectId,r=e.slug;return"/gallery/".concat(r,"-").concat(t)}},37535:function(e,t,r){r.d(t,{Cm:function(){return i},ul:function(){return o},L8:function(){return l},GU:function(){return s},oV:function(){return u},Mu:function(){return d},kV:function(){return g},y4:function(){return f}});var n=r(4550),c=r(8325),a=function(e){return"".concat((0,c.P_)(e),"/cricket-grounds")},i=function(e,t,r,n){return"".concat(a(e)).concat(t?"/country/".concat(t.slug,"-").concat(t.objectId):"").concat(function(e,t){var r=[];return e>1&&r.push("page=".concat(e)),t.length>0&&r.push("cityIds=".concat(t.join(","))),r.length>0?"?".concat(r.join("&")):""}(t&&null!==r&&void 0!==r?r:1,null!==n&&void 0!==n?n:[]))},o=function(e,t){return"".concat(a(e),"/").concat(t.slug,"-").concat(t.objectId)},l=function(e,t){return"".concat(a(e),"/").concat(t.slug,"-").concat(t.objectId,"/records")},s=function(e,t){return"".concat(a(e),"/").concat(t.slug,"-").concat(t.objectId,"/fixtures")},u=function(e,t,r){return"".concat(a(e),"/").concat(t.slug,"-").concat(t.objectId,"/news").concat(r&&r>1?"?page=".concat(r):"")},d=function(e,t){return"".concat(a(e),"/").concat(t.slug,"-").concat(t.objectId,"/videos")},g=function(e,t){return"".concat(a(e),"/").concat(t.slug,"-").concat(t.objectId,"/photos")},f=function(e,t){return"".concat(n.Z.global.legacyBaseUrl,"/ci/engine/ground/").concat(e.objectId,".html?class=").concat(t,";type=aggregate")}},43781:function(e,t,r){r.r(t);var n=r(1717),c=r(6952),a=r(88742),i=r.n(a),o=r(60042),l=r.n(o),s=r(27378),u=r(45938),d=r.n(u),g=r(78392),f=r(2251),v=r(1305),p=r(37182),b=r(62882),m=r(4550),y=r(8776),O=r(36077),j=r(5273),h=r(81817),E=r(24246);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.default=function(e){var t=e.poll,r=e.className,a=(0,s.useState)(null),o=a[0],u=a[1],P=(0,s.useState)(t),D=P[0],I=P[1],L=D.title,T=D.objectId,N=D.id,S=D.options,x=D.generatedAt,A=D.modifiedAt,Z=0;S.forEach((function(e){Z+=e.votes})),(0,g.Z)((function(){var e,t=null===(e=(0,p.Vy)(b.dm.POLL_ANSWERS,[]))||void 0===e?void 0:e.find((function(e){return e.includes("".concat(T,":"))}));t&&u(parseInt(t.split(":")[1],10)),(new Date).getTime()-new Date(x).getTime()>6e4?(new Date).getTime()-new Date(A).getTime()<1728e5&&(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.UN)();case 2:return t=e.sent,e.t0=I,e.next=6,t.getPollInfo({pollId:T,latest:!0});case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))():t&&(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.UN)();case 2:return t=e.sent,e.t0=I,e.next=6,t.getPollInfo({pollId:T,latest:!0});case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))()}));var U=function(e){if(o)return null;var t="".concat(m.Z.global.submitBaseUrl,"/ci/content/submit/poll/poll_v2.json?object_id=").concat(T,"&content_id=").concat(N,"&vote=1&poll_id=").concat(e.id,"&mode=POSITIVE");d()(t,{timeout:3e3}).then((function(e){return e.json()})).then((function(t){(0,p.eW)(b.dm.POLL_ANSWERS,"".concat(T,":").concat(e.id)),u(e.id),I((function(e){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),c={};return r.options.forEach((function(e){c[e.id]=e})),t.vote.forEach((function(e){c[e.optionId]&&(c[e.optionId].votes=e.count)})),r}))}))};return(0,E.jsxs)("div",{className:l()("ds-bg-fill-content-alternate ds-p-3",r),children:[(0,E.jsxs)("div",{className:"ds-flex ds-items-center ds-justify-between",children:[(0,E.jsxs)("div",{className:"ds-flex",children:[(0,E.jsx)(O.ZP,{name:f.v.POLL_OUTLINE,size:h.XR.SM}),(0,E.jsx)(j.Z,{variant:h.Fu.TITLE_SUBTLE_M,className:"ds-ml-1",children:L})]}),(0,E.jsxs)(j.Z,{variant:h.Fu.COMPACT_XS,className:"ds-text-typo-mid3",children:[Z>=1e3?"".concat((Z/1e3).toFixed(1),"K"):Z," votes"]})]}),(0,E.jsx)("div",{className:l()("ds-grid ds-gap-1 ds-mt-4 ds-grid-cols-1",S.length>3?"lg:ds-grid-cols-1":"lg:ds-grid-cols-3"),children:S.map((function(e,t){var r=Z>0?(0,v.Ux)(e.votes,Z).toFixed(1):0;return(0,E.jsxs)("div",{className:l()("ds-bg-ui-fill ds-border ds-border-line ds-rounded-lg ds-p-2 ds-relative ds-flex ds-justify-between ds-items-center",{"ds-cursor-pointer":!o}),onClick:function(){return U(e)},children:[(0,E.jsx)("div",{className:"ds-bg-raw-blue/20 ds-absolute ds-left-0 ds-top-0 ds-h-full ds-rounded-lg ds-transition-all",style:{width:o?"".concat(r,"%"):0}}),(0,E.jsx)(j.Z,{element:"div",variant:h.Fu.COMPACT_XS_MEDIUM,children:e.title}),o?(0,E.jsxs)(j.Z,{element:"div",variant:h.Fu.COMPACT_XS_MEDIUM,children:[o===e.id?"You & ":""," ",r,"%"]}):null]},t)}))})]})}},72521:function(e,t,r){r.d(t,{D:function(){return n},v:function(){return c}});var n=function(e,t,r){var n=new URLSearchParams;e&&n.append("object",e),t&&n.append("year",t),r&&n.append("search",r);var c=n.toString();return"/cricket-quotes".concat(c?"?".concat(c):"")},c=function(e){return"/cricket-quotes/".concat(e)}},56528:function(e,t,r){var n=r(1717),c=r(31750),a=(r(27378),r(69731)),i=r(78364),o=r(16311),l=r(73627),s=r(7839),u=r(32425),d=r(81817),g=r(62882),f=r(22e3),v=r(24246),p=["story","anchorUrl","size","variant","contentType","action","override","hide","className","imgVariant","imgSize","imgLazy","onClick"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t,r,n=e.story,b=e.anchorUrl,y=e.size,O=e.variant,j=e.contentType,h=e.action,E=e.override,w=e.hide,P=e.className,D=e.imgVariant,I=e.imgSize,L=e.imgLazy,T=e.onClick,N=(0,c.Z)(e,p),S=n.title,x=n.summary,A=n.image,Z=n.byline,U=null!==(t=null===E||void 0===E?void 0:E.title)&&void 0!==t?t:S,B=null!==(r=null===E||void 0===E?void 0:E.summary)&&void 0!==r?r:x,k=null!==E&&void 0!==E&&E.imageUrl?null===E||void 0===E?void 0:E.imageUrl:A?(0,i.lX)(A,D===d.N6.SQUARE?l.rh3.SQUARE:l.rh3.WIDE):g.DN.THUMBNAIL_PLACEHOLDER,C={type:u.f$.IMAGE,imageUrl:k,alt:U,variant:D,size:I,lazy:L},R=[{label:n.categoryType!==l.ux$.OTD?(0,f.vl)(n):""}];return Z&&R.push({label:Z}),(0,v.jsx)(s.Z,m({variant:O,size:y,title:null!==w&&void 0!==w&&w.title?void 0:U,description:null!==w&&void 0!==w&&w.description?void 0:B?(0,v.jsx)(o.Z,{element:"div",html:B}):void 0,anchorType:{href:b||(0,a.S1)(n),data:m({},h&&{action:h}),onClick:T},contentType:j,media:C,attributes:null!==w&&void 0!==w&&w.attributes?void 0:R,className:P},N))}}}]);