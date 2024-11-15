"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{1696:function(e,s,n){var t=n(48978),l=n(60042),r=n.n(l),a=n(27378),d=n(19196),i=n(65031),c=n(94993),o=n(39156),u=n(86016),f=n(36077),v=n(2251),p=n(81817),m=n(32425),x=n(24246),h=(0,a.forwardRef)((function(e,s){var n,l=e.className,a=e.options,h=e.columns,b=void 0===h?1:h,y=e.checkboxClassName,k=e.columnMinWidth,w=void 0===k?250:k,j=e.searchable,N=e.valueLink,g=(0,u.Z)(a,null===j||void 0===j?void 0:j.optionDataSearchKey),E=g.finalOptions,C=g.searchLink;return(0,x.jsxs)("fieldset",{ref:s,className:r()("ds-bg-fill-content-prime",{"ds-w-full":1===b},l),style:{width:b>1?w*b:void 0},children:[j?(0,x.jsx)("div",{className:"ds-sticky ds-top-0 ds-z-[1] ds-p-4",children:(0,x.jsx)(i.ZP,{valueLink:C,placeholder:null!==(n=j.placeholder)&&void 0!==n?n:"Search",startNode:!1===j.showIcon?null:(0,x.jsx)(f.ZP,{name:v.v.SEARCH_OUTLINE,color:p.BG.MID})})}):null,(0,x.jsx)(o.Z,{className:r()("ds-grid ds-grid-cols-".concat(b," ds-gap-x-4 ds-px-2")),size:m.tC.MD,children:E.map((function(e){var s={value:N.value.includes(e.key),setValue:function(s){s?N.setValue([].concat((0,t.Z)(N.value),[e.key])):N.setValue((0,c.iz)(N.value,e.key))}};return(0,x.jsx)(o.Z.Item,{children:(0,x.jsx)(d.Z,{className:y,label:e.label,valueLink:s,disabled:e.disabled})},e.key)}))})]})}));h.displayName="DSCheckboxGroup",s.Z=h},69104:function(e,s,n){var t=n(27378),l=n(22648),r=n.n(l),a=n(60042),d=n.n(a),i=n(37364),c=n(24246),o=(0,t.forwardRef)((function(e,s){var n=e.variant,t=void 0===n?i.I.DATE:n,l=e.minDate,a=e.maxDate,o=e.format,u=e.className,f=e.inline,v=void 0!==f&&f,p=e.elevate,m=void 0===p||p,x=e.disabledDates,h=e.valueLink,b=e.onBlur;return(0,c.jsx)("div",{className:d()("ds-datepicker ds-flex ds-justify-center",u,{"ds-datepicket-shadow-none":!m}),children:(0,c.jsx)(r(),{ref:s,selected:h.value,minDate:l,maxDate:a,dateFormat:o,shouldCloseOnSelect:!v,showMonthYearPicker:t===i.I.MONTH,inline:v,onChange:function(e){return h.setValue(e)},onBlur:function(){return b&&b()},excludeDates:null!==x&&void 0!==x?x:[]})})}));o.displayName="DSDatePicker",s.Z=o},34:function(e,s,n){n.d(s,{Z:function(){return M}});var t=n(1717),l=n(27378),r=n(61931),a=n(92150),d=n(94993),i=n(8776),c=n(60042),o=n.n(c),u=n(98878),f=n(9091),v=n(28496),p=n(26375),m=n(62135),x=n(17218),h=n(44757),b=n(36077),y=n(99011),k=n(3647),w=n(5273),j=n(2251),N=n(51826),g=n(25480),E=n(1319),C=n(16669),O=n(69104),Z=n(24246),_=function(e){var s=e.item,n=e.valueLink;return(0,Z.jsx)("div",{className:"ds-p-4",children:(0,Z.jsx)(O.Z,{className:"ds-flex ds-justify-center ci-month-filter",variant:s.variant,format:"MM/yyyy",valueLink:n,inline:!0,elevate:!1})})},P=n(31229),R=n(99971),T=n(81817),I=n(10511),D=function(e){var s=e.label,n=e.items,t=e.objLinkState,r=e.onReset,a=e.onApply,c=e.pageName,O=e.fixturesCalendarDownloadUrl,D=(0,l.useContext)(g.Z).translate,L=(0,l.useContext)(E.Z).device.isMobile,S=(0,l.useState)(!1),A=S[0],V=S[1],U=(0,l.useState)(!0),G=U[0],K=U[1],M=(0,l.useRef)(null),z=(0,l.useRef)(null),X=(0,l.useRef)(null),H=!1,Y={};n.forEach((function(e,s){var n=t.getLink(e.key).value,l=!1;n&&((0,N.kJ)(n)?n.length>0&&(l=!0):l=!0),Y[e.key]=l,l&&(H=!0)}));var B=[];n.forEach((function(e){B.push({key:e.key,label:e.label})}));var F=(0,l.useState)(null),J=F[0],W=F[1],q=(0,l.useRef)(null),Q=(0,l.useRef)(null),$=function(){W(null),X.current&&X.current.close()},ee=function(){L?V(!1):$(),a(),c&&(0,i.Yg)().trackEvent("livescores:".concat(c,":applied"))},se=function(){n.forEach((function(e){t.getLink(e.key).setValue(e.initialValue)}))};(0,l.useEffect)((function(){var e=!1;n.forEach((function(s){var n=t.getLink(s.key).value;s.type===I.w.CHECKBOX_GROUP?s.initialValue.toString()!==n.toString()&&(e=!0,null!==c&&null!==J&&(0,i.Yg)().trackEvent("livescores:".concat(c,":").concat(J,":selected"))):s.type===I.w.DATE_PICKER&&s.initialValue!==n&&(e=!0)})),K(!e)}),[t]),(0,u.Z)((function(){var e=284+(window.innerWidth-1280)/2;z.current&&(z.current.style.left="".concat(e,"px"))}),[]);var ne=function(){var e=0;return Object.keys(t.value).forEach((function(s){"quick_class_id"!==s&&t.value[s]&&(0,N.kJ)(t.value[s])&&(e=t.value[s].length+e)})),e},te=(0,Z.jsx)(p.ZP,{ref:Q,size:p.zy.MD,variant:p.m6.DEFAULT,options:B,defaultActiveKey:J||void 0,fixed:!0,contentClassName:o()("ds-grow ds-border-line ds-border-t ds-overflow-y-auto",L?"ds-h-full ds-pb-20":"ds-h-80"),children:n.map((function(e){var s;switch(e.type){case I.w.CHECKBOX_GROUP:s=(0,Z.jsx)(C.Z,{item:e,valueLink:t.getLink(e.key)});break;case I.w.DATE_PICKER:s=(0,Z.jsx)(_,{item:e,valueLink:t.getLink(e.key)})}return(0,Z.jsx)(p.ZP.Content,{tabKey:e.key,children:s},e.key)}))});if(L)return(0,Z.jsxs)("div",{className:o()("ds-fixed ds-w-full ds-z-10 ds-bottom-16 ds-left-4"),children:[(0,Z.jsx)("div",{className:"ci-app-filter-strip-bottom ds-bg-ui-fill-standout ds-rounded-full ds-shadow-elevated",children:(0,Z.jsx)("div",{className:"ds-flex ds-items-center ds-h-10",children:n.map((function(e,s){var n=!1;return e.type===I.w.DATE_PICKER&&null!==e.initialValue&&(n=!0),(0,Z.jsxs)("div",{className:o()("ds-grow ds-flex ds-justify-between ds-px-4 ds-self-stretch ds-items-center ds-w-1/2",{"ds-border-l ds-border-raw-white/20":s>0}),onClick:function(){return s=e.key,V(!0),J!==s&&W(s),void(c&&(0,i.Yg)().trackEvent("livescores:".concat(c,":click:").concat(s)));var s},children:[(0,Z.jsxs)(w.Z,{variant:T.Fu.TIGHT_S,className:"ds-flex ds-items-center ds-text-typo-inverse1",children:[e.label," ",e.type!==I.w.CHECKBOX_GROUP||(0,d.G5)(e.initialValue)?null:(0,Z.jsx)("div",{className:"ds-leading-3 ds-ml-2 ds-text-typo-inverse1 ds-bg-ui-fill-primary ds-w-5 ds-h-5 ds-rounded-full ds-flex ds-justify-center ds-items-center",children:e.initialValue.length}),n&&(0,Z.jsx)("div",{className:"ds-w-1 ds-h-1 ds-bg-fill-primary ds-rounded ds-ml-2"})]}),(0,Z.jsx)(b.ZP,{className:"ds-flex",size:T.XR.XS,color:T.BG.INVERSE,name:A?j.v.KEYBOARD_UP_OUTLINE:j.v.KEYBOARD_DOWN_OUTLINE})]},e.key)}))})}),A?(0,Z.jsxs)(x.Z,{ref:q,variant:R.bT.FULL_SCREEN,onClose:function(){return V(!1),void se()},children:[(0,Z.jsx)(x.Z.Header,{title:(0,Z.jsxs)(w.Z,{variant:T.Fu.TITLE_XS,children:[s,ne()>0?(0,Z.jsx)(w.Z,{className:"ds-ml-2 ds-w-5 ds-h-5 ds-rounded-full ds-border ds-border-ui-stroke ds-text-typo ds-inline-flex ds-justify-center ds-items-center",variant:T.Fu.TIGHT_S,children:ne()}):null]}),className:"ds-border-none"}),(0,Z.jsx)(x.Z.Content,{size:R.ez.FULL,className:"!ds-overflow-hidden",children:te}),(0,Z.jsx)(x.Z.Footer,{className:o()("!ds-py-0",{"ds-fixed ds-bottom-0 ds-bg-fill-content-prime ds-w-full":!P.ZP.isApp()}),children:(0,Z.jsxs)("div",{className:"ds-w-full ds-h-12 ds-flex ds-items-center ds-justify-between",children:[(0,Z.jsx)(y.Z,{variant:y.I.PRIMARY,labelVariant:T.Fu.TIGHT_S_MEDIUM,disabled:!H,label:D("cm_clear_all","Clear All"),anchorType:function(){r(),V(!1),c&&(0,i.Yg)().trackEvent("livescores:".concat(c,":clearall"))}}),(0,Z.jsx)(h.ZP,{variant:h.Tu.PRIMARY,size:h.NA.XS,label:D("cm_apply","Apply"),onClick:ee,disabled:G})]})})]}):null]});var le=(0,Z.jsxs)("div",{className:"ds-flex-col ds-w-[500px]",ref:M,children:[(0,Z.jsx)(v.Z,{className:"ds-px-4 ds-pt-3 ds-pb-0 ds-justify-between ds-w-full",title:(0,Z.jsxs)(w.Z,{variant:T.Fu.TITLE_XS,children:[s,ne()>0?(0,Z.jsx)(w.Z,{className:"ds-ml-2 ds-w-5 ds-h-5 ds-rounded-full ds-border ds-border-ui-stroke ds-text-typo ds-inline-flex ds-justify-center ds-items-center",variant:T.Fu.TIGHT_S,children:ne()}):null]}),rightNode:(0,Z.jsx)(b.ZP,{name:j.v.CLOSE_OUTLINE,className:"ds-cursor-pointer",onClick:function(){$(),se()}})}),(0,Z.jsx)("div",{className:"ds-max-h-96",children:te}),(0,Z.jsxs)("div",{className:"ds-border-t ds-border-line ds-px-4 ds-w-full ds-h-12 ds-flex ds-items-center ds-justify-between ds-bg-fill-content-prime ds-relative ds-z-10",children:[(0,Z.jsx)(y.Z,{variant:y.I.PRIMARY,labelVariant:T.Fu.TIGHT_S_MEDIUM,disabled:!H,label:D("cm_clear_all","Clear All"),anchorType:function(){$(),r(),c&&(0,i.Yg)().trackEvent("livescores:".concat(c,":clearall"))}}),(0,Z.jsx)(h.ZP,{variant:h.Tu.PRIMARY,size:h.NA.XS,label:D("cm_apply","Apply"),onClick:ee,disabled:G})]})]});return(0,Z.jsx)("div",{ref:z,className:"ds-overflow-hidden ds-rounded-2xl ds-border-line-default-translucent ds-border ds-fixed ds-bottom-12 ds-z-10 ds-bg-ui-fill-standout ds-w-96 ds-flex ds-shadow-elevated",children:(0,Z.jsx)(k.Z,{wrapperClassName:o()("ds-flex ds-w-full"),ref:X,contentClassName:"ds-bg-fill-content-prime ds-shadow-elevated ds-min-w-[350px] ds-rounded-lg ds-overflow-hidden",placement:f.zJ.TOP,distance:{x:0,y:7},content:le,arrow:!1,zIndex:900,trigger:T.f1.MANUAL,outsideClick:function(){W(null),se()},children:(0,Z.jsxs)("div",{className:"ds-flex ds-grow ds-flex-1",children:[void 0!==O?(0,Z.jsx)("div",{className:"ds-pl-3 ds-items-center ds-flex ds-pr-2 ds-border-r ds-border-raw-white/20",children:(0,Z.jsx)(m.Z,{text:D("cm_add_to_calendar","Add to calendar"),placement:f.zJ.TOP,children:(0,Z.jsx)(b.ZP,{name:j.v.ADD_CALENDAR_OUTLINE,size:T.XR.XS,color:T.BG.INVERSE,onClick:function(){window.open(O,"_blank")}})})}):null,n.map((function(e,s){var t=e.key===J,l=!1;return e.type===I.w.DATE_PICKER&&null!==e.initialValue&&(l=!0),(0,Z.jsx)("div",{className:o()("ds-pl-4 ds-pr-3 ds-grow ds-py-2 hover:ds-bg-raw-white/20",{"ds-bg-raw-white/20":t,"ds-border-l ds-border-raw-white/20":s>0,"ds-w-1/2":2===n.length,"ds-w-1/3":3===n.length,"ds-py-1.5":e.type===I.w.CHECKBOX_GROUP&&!(0,d.G5)(e.initialValue)}),onClick:function(){return function(e){if(e===J)$(),se();else{var s;W(e),X.current&&(X.current.show(),null===(s=Q.current)||void 0===s||s.setActiveKey(e)),c&&(0,i.Yg)().trackEvent("livescores:".concat(c,":click:").concat(e))}}(e.key)},children:(0,Z.jsxs)("div",{className:o()("ds-flex ds-items-center ds-justify-between"),children:[(0,Z.jsxs)("div",{className:"ds-flex ds-items-center ds-justify-center",children:[(0,Z.jsx)(w.Z,{variant:T.Fu.TIGHT_S,className:"ds-text-typo-inverse1",children:e.label}),e.type!==I.w.CHECKBOX_GROUP||(0,d.G5)(e.initialValue)?null:(0,Z.jsx)(w.Z,{element:"div",className:"ds-leading-3 ds-ml-1 ds-text-typo-inverse1 ds-bg-ui-fill-primary ds-w-5 ds-h-5 ds-rounded-full ds-flex ds-justify-center ds-items-center",variant:T.Fu.TIGHT_S,children:e.initialValue.length}),l&&(0,Z.jsx)("div",{className:"ds-w-1 ds-h-1 ds-bg-fill-primary ds-rounded ds-ml-2"})]}),(0,Z.jsx)(b.ZP,{className:"ds-flex",size:T.XR.XS,color:T.BG.INVERSE,name:t?j.v.KEYBOARD_UP_OUTLINE:j.v.KEYBOARD_DOWN_OUTLINE})]})},e.key)}))]})})})},L=n(48978),S=n(93726),A=n(81593),V=function(e){var s=e.options,n=e.resetEnabled,t=e.valueLink,r=e.pageName,a=e.isCalendarPresent,d=e.onReset,c=(0,l.useContext)(E.Z).device.isMobile,u=s.filter((function(e){return!t.value.includes(e.key)})),f=[];s.forEach((function(e){t.value.includes(e.key)&&f.push.apply(f,(0,L.Z)(e.data.disableOptions))}));var v=(0,L.Z)(new Set(f)),p=c?-87:-48;return a&&(p=c?-145:-98),(0,Z.jsx)(A.Z,{topOffset:p,stickyClassName:o()("ds-fixed ds-border-b ds-border-line",{"!ds-top-[144px] ds-drop-shadow-lg":c&&a,"!ds-top-[104px] ds-bg-fill-content-prime ds-px-2 ds-border-l ds-border-r ds-border-line ds-shadow-down ds-rounded-b-lg":!c&&a,"!ds-top-[87px] ds-drop-shadow-lg":c&&!a,"!ds-top-[48px] ds-bg-fill-content-prime ds-px-2 ds-border-l ds-border-r ds-border-line ds-shadow-down ds-rounded-b-lg":!c&&!a}),children:(0,Z.jsxs)("div",{className:o()("ds-flex ds-items-center ds-py-2 ds-overflow-x-auto",{"ds-bg-fill-content-prime ds-py-2 ds-pl-4 ds-border-b ds-border-line":c}),children:[(0,Z.jsx)("div",{className:o()("ds-mr-2 ds-pr-2 ds-py-1 ds-text-tight-s ds-font-bold ds-border-r ds-border-ui-stroke",{"ds-opacity-50 ds-text-typo-light":!n,"ds-text-typo-primary ds-cursor-pointer":n}),onClick:function(){return d(!0)},children:"Reset"}),(0,Z.jsxs)("div",{className:o()("ds-flex",c?"ds-overflow-x-scroll ds-scrollbar-hide":""),children:[t.value.map((function(e){var n=s.find((function(s){return s.key===e}));return(0,Z.jsx)(S.ZP,{className:"ds-mr-2 ds-whitespace-nowrap",label:n.label,size:S.KA.XS,active:!0,disabled:v.includes(e),onClose:function(){return function(e){var s=t.value.filter((function(s){return s!==e}));t.setValue(s),r&&(0,i.Yg)().trackEvent("livescores:".concat(r,":removed:").concat(e))}(e)}},e)})),u.map((function(e){return(0,Z.jsx)(S.ZP,{className:"ds-mr-2 ds-whitespace-nowrap",label:e.label,size:S.KA.XS,active:!1,disabled:v.includes(e.key),onClick:function(){return s=e.key,t.setValue([s].concat((0,L.Z)(t.value))),void(r&&(0,i.Yg)().trackEvent("livescores:".concat(r,":applied:").concat(s)));var s}},e.key)}))]})]})})};function U(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function G(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?U(Object(n),!0).forEach((function(s){(0,t.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}var K=(0,l.forwardRef)((function(e,s){var n=e.label,t=e.items,c=e.quick,o=e.pageName,u=e.isCalendarPresent,f=e.fixturesCalendarDownloadUrl,v=e.onChange,p=function(e){var s={};return t.forEach((function(e){switch(e.type){case I.w.CHECKBOX_GROUP:s[e.key]=[];break;case I.w.DATE_PICKER:s[e.key]=null}})),c&&(s[c.key]=e?[]:k.getLink(c.key).value),s},m=function(){var e={};return t.forEach((function(s){switch(s.type){case I.w.CHECKBOX_GROUP:case I.w.DATE_PICKER:e[s.key]=s.initialValue}})),c&&(e[c.key]=c.initialValue),e},x=function(e){return Object.keys(e).some((function(s){return!(0,d.G5)(e[s])}))},h=(0,l.useState)((function(){return x(m())})),b=h[0],y=h[1],k=(0,r.Z)((function(){return m()})),w=function(e){k.setValue(p(e)),v(p(e)),e&&y(!1),o&&(0,i.Yg)().trackEvent("livescores:".concat(o,":reset"))};return(0,l.useImperativeHandle)(s,(function(){return{reset:function(){w(!0)}}})),(0,Z.jsxs)("div",{children:[void 0!==c?(0,Z.jsx)(V,G(G({},c),{},{valueLink:k.getLink(c.key,void 0,(function(e){var s=p(!0);s[c.key]=e,k.setValue(s);var n=x(s);return b!==n&&y(n),v(s),!1})),resetEnabled:b,pageName:o,isCalendarPresent:u,onReset:w})):null,(0,Z.jsx)(a.Z,{children:(0,Z.jsx)(D,{label:n,items:t,objLinkState:k,onReset:w,onApply:function(){v(k.value);var e=x(k.value);b!==e&&y(e)},pageName:o,fixturesCalendarDownloadUrl:f})})]})}));K.displayName="CiAppFilterStrip";var M=K},16669:function(e,s,n){var t=n(27378),l=n(1696),r=n(1319),a=n(24246);s.Z=function(e){var s=e.item,n=e.valueLink,d=(0,t.useContext)(r.Z).device.isMobile,i=Math.ceil(s.options.length/10);return i=d?1:i>2?2:i,(0,a.jsx)("div",{className:d?"ds-pb-24":"ds-pb-4",children:(0,a.jsx)(l.Z,{searchable:{placeholder:"search..."},columns:i,options:s.options,valueLink:n})})}}}]);