import{p as A,a6 as M,b as E,I as ue,T as k,d as le,aB as K,aC as q,A as T,e as c,al as z,x as H,U as D,y as Y,Z as $,am as ie,E as re,aE as ce,aF as ve,B as de,g as pe,X as fe,W as ye,c as W}from"./index-51f4506b.js";const me=A({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function ge(e){const u=M("useRender");u.render=e}function he(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const l=E(),s=E();if(ue){const t=new ResizeObserver(n=>{e==null||e(n,t),n.length&&(u==="content"?s.value=n[0].contentRect:s.value=n[0].target.getBoundingClientRect())});k(()=>{t.disconnect()}),le(l,(n,r)=>{r&&(t.unobserve(K(r)),s.value=void 0),n&&t.observe(K(n))},{flush:"post"})}return{resizeRef:l,contentRect:q(s)}}const C=Symbol.for("vuetify:layout"),G=Symbol.for("vuetify:layout-item"),X=1e3,Ie=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Le=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ze(){const e=T(C);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ae(e){const u=T(C);if(!u)throw new Error("[Vuetify] Could not find injected layout");const l=e.id??`layout-item-${re()}`,s=M("useLayoutItem");Y(G,{id:l});const t=H(!1);ce(()=>t.value=!0),ve(()=>t.value=!1);const{layoutItemStyles:n,layoutItemScrimStyles:r}=u.register(s,{...e,active:c(()=>t.value?!1:e.active.value),id:l});return k(()=>u.unregister(l)),{layoutItemStyles:n,layoutRect:u.layoutRect,layoutItemScrimStyles:r}}const be=(e,u,l,s)=>{let t={top:0,left:0,right:0,bottom:0};const n=[{id:"",layer:{...t}}];for(const r of e){const f=u.get(r),m=l.get(r),I=s.get(r);if(!f||!m||!I)continue;const g={...t,[f.value]:parseInt(t[f.value],10)+(I.value?parseInt(m.value,10):0)};n.push({id:r,layer:g}),t=g}return n};function Se(e){const u=T(C,null),l=c(()=>u?u.rootZIndex.value-100:X),s=E([]),t=z(new Map),n=z(new Map),r=z(new Map),f=z(new Map),m=z(new Map),{resizeRef:I,contentRect:g}=he(),J=c(()=>{const a=new Map,d=e.overlaps??[];for(const o of d.filter(v=>v.includes(":"))){const[v,i]=o.split(":");if(!s.value.includes(v)||!s.value.includes(i))continue;const y=t.get(v),h=t.get(i),R=n.get(v),w=n.get(i);!y||!h||!R||!w||(a.set(i,{position:y.value,amount:parseInt(R.value,10)}),a.set(v,{position:h.value,amount:-parseInt(w.value,10)}))}return a}),b=c(()=>{const a=[...new Set([...r.values()].map(o=>o.value))].sort((o,v)=>o-v),d=[];for(const o of a){const v=s.value.filter(i=>{var y;return((y=r.get(i))==null?void 0:y.value)===o});d.push(...v)}return be(d,t,n,f)}),N=c(()=>!Array.from(m.values()).some(a=>a.value)),S=c(()=>b.value[b.value.length-1].layer),Q=c(()=>({"--v-layout-left":$(S.value.left),"--v-layout-right":$(S.value.right),"--v-layout-top":$(S.value.top),"--v-layout-bottom":$(S.value.bottom),...N.value?void 0:{transition:"none"}})),x=c(()=>b.value.slice(1).map((a,d)=>{let{id:o}=a;const{layer:v}=b.value[d],i=n.get(o),y=t.get(o);return{id:o,...v,size:Number(i.value),position:y.value}})),j=a=>x.value.find(d=>d.id===a),B=M("createLayout"),U=H(!1);D(()=>{U.value=!0}),Y(C,{register:(a,d)=>{let{id:o,order:v,position:i,layoutSize:y,elementSize:h,active:R,disableTransitions:w,absolute:oe}=d;r.set(o,v),t.set(o,i),n.set(o,y),f.set(o,R),w&&m.set(o,w);const Z=ie(G,B==null?void 0:B.vnode).indexOf(a);Z>-1?s.value.splice(Z,0,o):s.value.push(o);const _=c(()=>x.value.findIndex(L=>L.id===o)),O=c(()=>l.value+b.value.length*2-_.value*2),ne=c(()=>{const L=i.value==="left"||i.value==="right",P=i.value==="right",se=i.value==="bottom",F={[i.value]:0,zIndex:O.value,transform:`translate${L?"X":"Y"}(${(R.value?0:-110)*(P||se?-1:1)}%)`,position:oe.value||l.value!==X?"absolute":"fixed",...N.value?void 0:{transition:"none"}};if(!U.value)return F;const p=x.value[_.value];if(!p)throw new Error(`[Vuetify] Could not find layout item "${o}"`);const V=J.value.get(o);return V&&(p[V.position]+=V.amount),{...F,height:L?`calc(100% - ${p.top}px - ${p.bottom}px)`:h.value?`${h.value}px`:void 0,left:P?void 0:`${p.left}px`,right:P?`${p.right}px`:void 0,top:i.value!=="bottom"?`${p.top}px`:void 0,bottom:i.value!=="top"?`${p.bottom}px`:void 0,width:L?h.value?`${h.value}px`:void 0:`calc(100% - ${p.left}px - ${p.right}px)`}}),ae=c(()=>({zIndex:O.value-1}));return{layoutItemStyles:ne,layoutItemScrimStyles:ae,zIndex:O}},unregister:a=>{r.delete(a),t.delete(a),n.delete(a),f.delete(a),m.delete(a),s.value=s.value.filter(d=>d!==a)},mainRect:S,mainStyles:Q,getLayoutItem:j,items:x,layoutRect:g,rootZIndex:l});const ee=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),te=c(()=>({zIndex:l.value,position:u?"relative":void 0,overflow:u?"hidden":void 0}));return{layoutClasses:ee,layoutStyles:te,getLayoutItem:j,items:x,layoutRect:g,layoutRef:I}}function $e(){const e=H(!1);return D(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:q(e)}}const Ce=A({tag:{type:String,default:"div"}},"tag");const xe=A({...me(),...Ie({fullHeight:!0}),...de()},"VApp"),Be=pe()({name:"VApp",props:xe(),setup(e,u){let{slots:l}=u;const s=fe(e),{layoutClasses:t,layoutStyles:n,getLayoutItem:r,items:f,layoutRef:m}=Se(e),{rtlClasses:I}=ye();return ge(()=>{var g;return W("div",{ref:m,class:["v-application",s.themeClasses.value,t.value,I.value,e.class],style:[n.value,e.style]},[W("div",{class:"v-application__wrap"},[(g=l.default)==null?void 0:g.call(l)])])}),{getLayoutItem:r,items:f,theme:s}}});export{Be as V,Ce as a,$e as b,ge as c,he as d,Le as e,Ae as f,me as m,ze as u};
