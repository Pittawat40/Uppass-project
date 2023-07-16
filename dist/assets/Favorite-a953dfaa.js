import{o as S,a4 as F,a5 as I,n as v,d as f,g as p,k as d,e as w,l as y,j as x,h as $}from"./Footer-2d961f2d.js";import{S as B,V as D,e as L,b as N,c as T,a as R,d as A}from"./Scroll-364c2045.js";import{_ as j,h as q,r as c,o as u,i as h,c as a,w as l,F as _,j as n,v as z,k as m,a as E,t as i,l as J,q as O}from"./index-f3021e64.js";import{V as H}from"./VApp-3baf964c.js";import{V as P}from"./VBreadcrumbs-21e04dcb.js";const U=q({name:"Favorite",components:{NavBar:F,Footer:I,Scroll:B},data:()=>({items:[{title:"Dashboard",disabled:!1,href:"/"},{title:"Favorite",disabled:!1}],dataFavorite:[],snackbar:!1}),created(){window.addEventListener("scroll",this.handleScroll)},mounted(){this.dataFavorite=JSON.parse(localStorage.getItem("favorite")),setTimeout(async()=>{let e=document.querySelectorAll(".detail");for(let o=0;o<e.length;o++)o<4&&e[o].classList.add("active")},500)},methods:{async viewDetail(e){localStorage.setItem("detail",JSON.stringify(e)),this.$store.commit("initDataDetail",e),this.$router.push("/detail")},async addFavorite(e){let o=this.dataFavorite.findIndex(function(r){return r.id==e.id});this.dataFavorite.splice(o,1),this.$store.commit("initFavorite",e),this.dataFavorite.length==0&&this.$router.push("/")},handleScroll(){let e=document.querySelectorAll(".detail");for(let o=0;o<e.length;o++){let r=window.innerHeight;e[o].getBoundingClientRect().top<r-150&&e[o].classList.add("active")}}}}),G=e=>(J("data-v-eaafd739"),e=e(),O(),e),K={class:"navigate"},M={class:"line"},Q={class:"me-1 text-uppercase"},W={class:"text-grey ms-4"},X=G(()=>n("p",{class:"text-uppercase"},"Successfully executed !!",-1));function Y(e,o,r,g,V,Z){const k=c("NavBar"),C=c("Footer"),b=c("Scroll");return u(),h(_,null,[a(H,{id:"home"},{default:l(()=>[a(k),a(v,{fluid:"",class:"container"},{default:l(()=>[n("div",K,[a(P,{items:e.items,divider:"/"},null,8,["items"])]),n("div",M,[a(f,{class:"mt-3"})]),a(v,{class:"container-book"},{default:l(()=>[a(p,null,{default:l(()=>[(u(!0),h(_,null,z(this.dataFavorite,t=>(u(),E(w,{key:t,cols:"12",md:"3",sm:"6"},{default:l(()=>[a(D,{class:"mx-auto my-12 detail","max-width":"250"},{loader:l(({isActive:s})=>[a(y,{active:s,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:l(()=>[a(x,{cover:"",height:"200",onClick:s=>e.viewDetail(t),src:t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.smallThumbnail?t.volumeInfo.imageLinks.smallThumbnail:"src/assets/book.jpg"},null,8,["onClick","src"]),a(L,{onClick:s=>e.viewDetail(t)},{default:l(()=>[a(N,{class:"text-uppercase"},{default:l(()=>[m(i(t.volumeInfo.title),1)]),_:2},1024),a(T,null,{default:l(()=>[n("span",Q,i(t.volumeInfo.publishedDate)+" - "+i(t.volumeInfo.language),1)]),_:2},1024)]),_:2},1032,["onClick"]),a(R,null,{default:l(()=>[a(p,{class:"mx-0 mt-1"},{default:l(()=>[a($,{"model-value":t.volumeInfo.averageRating,color:"amber",density:"compact","half-increments":"",readonly:"",size:"small"},null,8,["model-value"]),n("div",W,i(t.volumeInfo.averageRating)+" ("+i(t.volumeInfo.pageCount)+") ",1)]),_:2},1024)]),_:2},1024),a(f,{class:"mx-4 mb-1"}),a(A,null,{default:l(()=>[a(d,{class:"ma-2",variant:"outlined",icon:"fas fa-heart",color:t.favorite?"red-lighten-2":"grey-lighten-2",size:"x-small",onClick:s=>e.addFavorite(t,e.snackbar=!0)},null,8,["color","onClick"]),a(d,{color:"deep-purple-lighten-2",variant:"text",onClick:s=>e.viewDetail(t)},{default:l(()=>[m(" View detail ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),a(C),a(b)]),_:1}),a(S,{modelValue:e.snackbar,"onUpdate:modelValue":o[1]||(o[1]=t=>e.snackbar=t),timeout:2e3,color:"success"},{actions:l(()=>[a(d,{color:"white",variant:"text",onClick:o[0]||(o[0]=t=>e.snackbar=!1)},{default:l(()=>[m(" Close ")]),_:1})]),default:l(()=>[X]),_:1},8,["modelValue"])],64)}const se=j(U,[["render",Y],["__scopeId","data-v-eaafd739"]]);export{se as default};