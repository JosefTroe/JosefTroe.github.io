import{c as _,w as $,o as ne,a as R,n as oe,g as Q,l as ae,i as j,e as C,b as F,r as L,d as v,h as S,f as ie,s as re,T as se,p as A,j as ue,k as J,m as V,q as ce,_ as de,t as fe,u as ve,v as me,x as he,y as z,z as q,A as H,B as ge,C as be,D as ye,E as N}from"./index.c6d0aceb.js";import{s as we,g as pe,a as qe,b as Se,Q as E,u as X,c as Z,d as I,e as ke,f as xe}from"./QSeparator.13a0d771.js";import{h as ee,a as D,u as Te,b as $e,c as te,Q as P}from"./QBtn.21f10772.js";const{passive:U}=ae,Le=["both","horizontal","vertical"];var le=_({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Le.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:we},emits:["scroll"],setup(e,{emit:o}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,s;$(()=>e.scrollTarget,()=>{h(),m()});function u(){l!==null&&l();const w=Math.max(0,qe(t)),x=Se(t),f={top:w-r.position.top,left:x-r.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const T=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";r.position={top:w,left:x},r.directionChanged=r.direction!==T,r.delta=f,r.directionChanged===!0&&(r.direction=T,r.inflectionPoint=r.position),o("scroll",{...r})}function m(){t=pe(s,e.scrollTarget),t.addEventListener("scroll",g,U),g(!0)}function h(){t!==void 0&&(t.removeEventListener("scroll",g,U),t=void 0)}function g(w){if(w===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[x,f]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{f(x),l=null}}}const{proxy:y}=Q();return $(()=>y.$q.lang.rtl,u),ne(()=>{s=y.$el.parentNode,m()}),R(()=>{l!==null&&l(),h()}),Object.assign(y,{trigger:g,getPosition:()=>r}),oe}}),Y=_({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:r}){const{proxy:{$q:l}}=Q(),t=j(F,C);if(t===C)return console.error("QHeader needs to be child of QLayout"),C;const s=L(parseInt(e.heightHint,10)),u=L(!0),m=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||l.platform.is.ios&&t.isContainer.value===!0),h=v(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?s.value:0;const n=s.value-t.scroll.value.position;return n>0?n:0}),g=v(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),y=v(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=v(()=>{const n=t.rows.value.top,d={};return n[0]==="l"&&t.left.space===!0&&(d[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),n[2]==="r"&&t.right.space===!0&&(d[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),d});function f(n,d){t.update("header",n,d)}function T(n,d){n.value!==d&&(n.value=d)}function i({height:n}){T(s,n),f("size",n)}function b(n){y.value===!0&&T(u,!0),r("focusin",n)}$(()=>e.modelValue,n=>{f("space",n),T(u,!0),t.animate()}),$(h,n=>{f("offset",n)}),$(()=>e.reveal,n=>{n===!1&&T(u,e.modelValue)}),$(u,n=>{t.animate(),r("reveal",n)}),$(t.scroll,n=>{e.reveal===!0&&T(u,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const k={};return t.instances.header=k,e.modelValue===!0&&f("size",s.value),f("space",e.modelValue),f("offset",h.value),R(()=>{t.instances.header===k&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const n=ee(o.default,[]);return e.elevated===!0&&n.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(S(E,{debounce:0,onResize:i})),S("header",{class:w.value,style:x.value,onFocusin:b},n)}}}),K=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const r=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(r.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&r.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":r.value}:null);return()=>S("div",{style:t.value,class:l.value},D(o.default))}}),M=_({name:"QItem",props:{...X,...Te,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:r}){const{proxy:{$q:l}}=Q(),t=Z(e,l),{hasLink:s,linkAttrs:u,linkClass:m,linkTag:h,navigateOnClick:g}=$e(),y=L(null),w=L(null),x=v(()=>e.clickable===!0||s.value===!0||e.tag==="label"),f=v(()=>e.disable!==!0&&x.value===!0),T=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),i=v(()=>{if(e.insetLevel===void 0)return null;const d=l.lang.rtl===!0?"Right":"Left";return{["padding"+d]:16+e.insetLevel*56+"px"}});function b(d){f.value===!0&&(w.value!==null&&(d.qKeyEvent!==!0&&document.activeElement===y.value?w.value.focus():document.activeElement===w.value&&y.value.focus()),g(d))}function k(d){if(f.value===!0&&ie(d,[13,32])===!0){re(d),d.qKeyEvent=!0;const c=new MouseEvent("click",d);c.qKeyEvent=!0,y.value.dispatchEvent(c)}r("keyup",d)}function n(){const d=ee(o.default,[]);return f.value===!0&&d.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:w})),d}return()=>{const d={ref:y,class:T.value,style:i.value,role:"listitem",onClick:b,onKeyup:k};return f.value===!0?(d.tabindex=e.tabindex||"0",Object.assign(d,u.value)):x.value===!0&&(d["aria-disabled"]="true"),S(h.value,d,n())}}});const ze=["ul","ol"];var Ce=_({name:"QList",props:{...X,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const r=Q(),l=Z(e,r.proxy.$q),t=v(()=>ze.includes(e.tag)?null:"list"),s=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:s.value,role:t.value},D(o.default))}}),_e=_({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:o,emit:r}){let l=!1,t,s,u=null,m=null,h,g;function y(){t&&t(),t=null,l=!1,u!==null&&(clearTimeout(u),u=null),m!==null&&(clearTimeout(m),m=null),s!==void 0&&s.removeEventListener("transitionend",h),h=null}function w(i,b,k){b!==void 0&&(i.style.height=`${b}px`),i.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,t=k}function x(i,b){i.style.overflowY=null,i.style.height=null,i.style.transition=null,y(),b!==g&&r(b)}function f(i,b){let k=0;s=i,l===!0?(y(),k=i.offsetHeight===i.scrollHeight?0:void 0):(g="hide",i.style.overflowY="hidden"),w(i,k,b),u=setTimeout(()=>{u=null,i.style.height=`${i.scrollHeight}px`,h=n=>{m=null,(Object(n)!==n||n.target===i)&&x(i,"show")},i.addEventListener("transitionend",h),m=setTimeout(h,e.duration*1.1)},100)}function T(i,b){let k;s=i,l===!0?y():(g="show",i.style.overflowY="hidden",k=i.scrollHeight),w(i,k,b),u=setTimeout(()=>{u=null,i.style.height=0,h=n=>{m=null,(Object(n)!==n||n.target===i)&&x(i,"hide")},i.addEventListener("transitionend",h),m=setTimeout(h,e.duration*1.1)},100)}return R(()=>{l===!0&&y()}),()=>S(se,{css:!1,appear:e.appear,onEnter:f,onLeave:T},o.default)}}),Be=_({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:r}}=Q(),l=j(F,C);if(l===C)return console.error("QPageContainer needs to be child of QLayout"),C;A(ue,!0);const t=v(()=>{const s={};return l.header.space===!0&&(s.paddingTop=`${l.header.size}px`),l.right.space===!0&&(s[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(s.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(s[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),s});return()=>S("div",{class:"q-page-container",style:t.value},D(o.default))}}),Qe=_({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:r}){const{proxy:{$q:l}}=Q(),t=j(F,C);if(t===C)return console.error("QFooter needs to be child of QLayout"),C;const s=L(parseInt(e.heightHint,10)),u=L(!0),m=L(J.value===!0||t.isContainer.value===!0?0:window.innerHeight),h=v(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||l.platform.is.ios&&t.isContainer.value===!0),g=v(()=>t.isContainer.value===!0?t.containerHeight.value:m.value),y=v(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?s.value:0;const a=t.scroll.value.position+g.value+s.value-t.height.value;return a>0?a:0}),w=v(()=>e.modelValue!==!0||h.value===!0&&u.value!==!0),x=v(()=>e.modelValue===!0&&w.value===!0&&e.reveal===!0),f=v(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(w.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),T=v(()=>{const a=t.rows.value.bottom,p={};return a[0]==="l"&&t.left.space===!0&&(p[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(p[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function i(a,p){t.update("footer",a,p)}function b(a,p){a.value!==p&&(a.value=p)}function k({height:a}){b(s,a),i("size",a)}function n(){if(e.reveal!==!0)return;const{direction:a,position:p,inflectionPoint:B}=t.scroll.value;b(u,a==="up"||p-B<100||t.height.value-g.value-p-s.value<300)}function d(a){x.value===!0&&b(u,!0),r("focusin",a)}$(()=>e.modelValue,a=>{i("space",a),b(u,!0),t.animate()}),$(y,a=>{i("offset",a)}),$(()=>e.reveal,a=>{a===!1&&b(u,e.modelValue)}),$(u,a=>{t.animate(),r("reveal",a)}),$([s,t.scroll,t.height],n),$(()=>l.screen.height,a=>{t.isContainer.value!==!0&&b(m,a)});const c={};return t.instances.footer=c,e.modelValue===!0&&i("size",s.value),i("space",e.modelValue),i("offset",y.value),R(()=>{t.instances.footer===c&&(t.instances.footer=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const a=te(o.default,[S(E,{debounce:0,onResize:k})]);return e.elevated===!0&&a.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),S("footer",{class:f.value,style:T.value,onFocusin:d},a)}}}),He=_({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:r}){const{proxy:{$q:l}}=Q(),t=L(null),s=L(l.screen.height),u=L(e.container===!0?0:l.screen.width),m=L({position:0,direction:"down",inflectionPoint:0}),h=L(0),g=L(J.value===!0?0:I()),y=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),x=v(()=>g.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),f=v(()=>g.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function T(c){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:c.position.top,direction:c.direction,directionChanged:c.directionChanged,inflectionPoint:c.inflectionPoint.top,delta:c.delta.top};m.value=a,e.onScroll!==void 0&&r("scroll",a)}}function i(c){const{height:a,width:p}=c;let B=!1;s.value!==a&&(B=!0,s.value=a,e.onScrollHeight!==void 0&&r("scrollHeight",a),k()),u.value!==p&&(B=!0,u.value=p),B===!0&&e.onResize!==void 0&&r("resize",c)}function b({height:c}){h.value!==c&&(h.value=c,k())}function k(){if(e.container===!0){const c=s.value>h.value?I():0;g.value!==c&&(g.value=c)}}let n=null;const d={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:s,containerHeight:h,scrollbarWidth:g,totalWidth:v(()=>u.value+g.value),rows:v(()=>{const c=e.view.toLowerCase().split(" ");return{top:c[0].split(""),middle:c[1].split(""),bottom:c[2].split("")}}),header:V({size:0,offset:0,space:!1}),right:V({size:300,offset:0,space:!1}),footer:V({size:0,offset:0,space:!1}),left:V({size:300,offset:0,space:!1}),scroll:m,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(c,a,p){d[c][a]=p}};if(A(F,d),I()>0){let p=function(){c=null,a.classList.remove("hide-scrollbar")},B=function(){if(c===null){if(a.scrollHeight>l.screen.height)return;a.classList.add("hide-scrollbar")}else clearTimeout(c);c=setTimeout(p,300)},O=function(W){c!==null&&W==="remove"&&(clearTimeout(c),p()),window[`${W}EventListener`]("resize",B)},c=null;const a=document.body;$(()=>e.container!==!0?"add":"remove",O),e.container!==!0&&O("add"),ce(()=>{O("remove")})}return()=>{const c=te(o.default,[S(le,{onScroll:T}),S(E,{onResize:i})]),a=S("div",{class:y.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},c);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(E,{onResize:b}),S("div",{class:"absolute-full",style:x.value},[S("div",{class:"scroll",style:f.value},[a])])]):a}}}),G="/assets/pflegeteam_stella_logo_white.efd41141.png";const Ve=fe({name:"MainLayout",data(){const{getScrollTarget:e,setVerticalScrollPosition:o}=ke;return A("scrollTo",this.scrollTo),{header_style:"background-color: transparent;",getScrollTarget:e,setVerticalScrollPosition:o,show_header:!1,show_mobile_menu:!1}},methods:{scrollTo(e,o){const r=document.getElementById(e),l=this.getScrollTarget(r),t=r.offsetTop-150,s=400;this.setVerticalScrollPosition(l,t,s),o&&(this.show_mobile_menu=!1)},handleScroll(e){e.position.top>0&&(this.show_header=!0,this.header_style="background-color: rgba(1,1,1,0.6);")}}}),Pe={class:"row justify-around",style:{"z-index":"400"}},Ee={class:"col-4 text-right q-pa-sm q-gutter-sm",style:{"z-index":"600"}},Re={class:"row q-py-xs items-center"};function Fe(e,o,r,l,t,s){const u=ve("router-view");return me(),he(He,{view:"lHh Lpr lFf",ref:"background",id:"background"},{default:z(()=>[q(le,{onScroll:e.handleScroll},null,8,["onScroll"]),q(Y,{style:ge([e.header_style,{position:"fixed"}]),class:"header desktop-only","model-value":e.show_header},{default:z(()=>[H("div",Pe,[o[7]||(o[7]=H("div",{class:"col-4 q-pa-xs q-pl-md header-items"},[H("img",{class:"logo",src:G})],-1)),H("div",Ee,[q(P,{icon:"medical_services",label:"Leistungen","text-color":"white",onClick:o[0]||(o[0]=m=>e.scrollTo("services")),flat:""}),q(P,{icon:"location_on",label:"Standorte","text-color":"white",onClick:o[1]||(o[1]=m=>e.scrollTo("locations")),flat:""}),q(P,{icon:"phone",label:"Kontakt","text-color":"white",onClick:o[2]||(o[2]=m=>e.scrollTo("contact")),flat:""})])])]),_:1},8,["style","model-value"]),q(Y,{class:"mobile-only",style:{"background-color":"rgba(1, 1, 1, 0.6)"}},{default:z(()=>[H("div",Re,[q(P,{flat:"",icon:"menu",onClick:o[3]||(o[3]=m=>e.show_mobile_menu=!e.show_mobile_menu)}),o[8]||(o[8]=H("img",{class:"logo-mobile",src:G},null,-1))]),q(_e,null,{default:z(()=>[be(q(Ce,{style:{width:"100%"}},{default:z(()=>[q(xe,{color:"grey-5"}),q(M,{clickable:"",onClick:o[4]||(o[4]=m=>e.scrollTo("services",!0))},{default:z(()=>[q(K,null,{default:z(()=>o[9]||(o[9]=[N("Leistungen")])),_:1})]),_:1}),q(M,{clickable:"",onClick:o[5]||(o[5]=m=>e.scrollTo("locations",!0))},{default:z(()=>[q(K,null,{default:z(()=>o[10]||(o[10]=[N("Standorte")])),_:1})]),_:1}),q(M,{clickable:"",onClick:o[6]||(o[6]=m=>e.scrollTo("contact",!0))},{default:z(()=>[q(K,null,{default:z(()=>o[11]||(o[11]=[N("Kontakt")])),_:1})]),_:1})]),_:1},512),[[ye,e.show_mobile_menu]])]),_:1})]),_:1}),q(Be,null,{default:z(()=>[q(u)]),_:1}),q(Qe)]),_:1},512)}var Ke=de(Ve,[["render",Fe]]);export{Ke as default};
