(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a1e6a96"],{"3f05":function(e,t,c){},"4fa4":function(e,t,c){e.exports=c.p+"static/img/sky.66bbcc81.png"},5060:function(e,t,c){e.exports=c.p+"static/img/park.7ddc6661.png"},"5f04":function(e,t,c){e.exports=c.p+"static/img/title.8c1dd648.png"},6095:function(e,t,c){e.exports=c.p+"static/img/run.e18a5bad.png"},"748f":function(e,t,c){},7500:function(e,t,c){"use strict";c("c9eb")},"77b8":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const n={class:"__content"};function a(e,t,c,a,s,l){const r=Object(o["resolveComponent"])("First"),i=Object(o["resolveComponent"])("Second");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[e.modalCtrl[0]?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0,class:Object(o["normalizeClass"])(["page",0===e.current?"":"hidden"]),onShowNext:e.showNext},null,8,["onShowNext","class"])):Object(o["createCommentVNode"])("",!0),e.modalCtrl[1]?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:1,class:Object(o["normalizeClass"])(["page",1===e.current?"":"hidden"])},null,8,["class"])):Object(o["createCommentVNode"])("",!0)])}var s=c("4fa4"),l=c.n(s),r=c("b3d6"),i=c.n(r),d=c("6095"),u=c.n(d),b=c("ad72"),m=c.n(b),p=c("5f04"),v=c.n(p);const f=Object(o["createStaticVNode"])('<img class="sky" src="'+l.a+'" alt="" data-v-f45d1242><div class="cloud" data-v-f45d1242></div><div class="cloud1" data-v-f45d1242></div><div class="road" data-v-f45d1242></div><div class="car" data-v-f45d1242><img class="car_body" src="'+i.a+'" alt="" data-v-f45d1242><img class="run" src="'+u.a+'" alt="" data-v-f45d1242><img class="run1" src="'+u.a+'" alt="" data-v-f45d1242></div><img class="protagonist" src="'+m.a+'" alt="" data-v-f45d1242><img class="title" src="'+v.a+'" alt="" data-v-f45d1242>',7),j={class:"text"};function O(e,t,c,n,a,s){const l=Object(o["resolveComponent"])("van-icon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["_paga_content",e.contentClass])},[f,Object(o["createElementVNode"])("div",{class:"btn",onClick:t[0]||(t[0]=(...t)=>e.start&&e.start(...t))}),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["mark",[e.showMark?"":"hidden",e.canClick?"click":""]]),onClick:t[1]||(t[1]=(...t)=>e.clickMark&&e.clickMark(...t))},[Object(o["createElementVNode"])("div",j,Object(o["toDisplayString"])(e.markText),1),e.canClick?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:"next",name:"arrow-down",color:"white",size:"5vh"})):Object(o["createCommentVNode"])("",!0)],2)],2)}var g=Object(o["defineComponent"])({setup(e,{emit:t}){const c=Object(o["ref"])(""),n=Object(o["ref"])(!1);let a=!1;const s=()=>{a||(a=!0,c.value="animate",setTimeout(()=>{r.value=!0,setTimeout(()=>{let e="今天的天气正如同我们此刻的心情，阳光又明媚，今天是我的女儿小墨期待了很久的日子，我们和她约定好在今天带她出游，去往她期待已久的小公园玩...";const t=setInterval(()=>{e.length>0?(l.value=l.value+e[0],e=e.substring(1)):(clearInterval(t),n.value=!0)},100)},2e3)},3e3))},l=Object(o["ref"])(""),r=Object(o["ref"])(!0),i=()=>{t("showNext")};return Object(o["onMounted"])(()=>{r.value=!1}),{contentClass:c,start:s,showMark:r,markText:l,canClick:n,clickMark:i}}}),k=(c("e255"),c("6b0d")),h=c.n(k);const C=h()(g,[["render",O],["__scopeId","data-v-f45d1242"]]);var w=C,x=c("5060"),N=c.n(x),B=c("937c"),V=c.n(B),_=c("a727"),E=c.n(_);const y=e=>(Object(o["pushScopeId"])("data-v-6a880114"),e=e(),Object(o["popScopeId"])(),e),S=y(()=>Object(o["createElementVNode"])("img",{class:"bg",src:N.a,alt:""},null,-1)),I={class:"box"},T=y(()=>Object(o["createElementVNode"])("img",{class:"protagonist protagonist2",src:V.a,alt:""},null,-1)),z=["src"],D=y(()=>Object(o["createElementVNode"])("img",{class:"protagonist protagonist1",src:E.a,alt:""},null,-1));function M(e,t,c,n,a,s){const l=Object(o["resolveComponent"])("Dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["_page_content","content_"+e.current])},[S,Object(o["createElementVNode"])("div",I,[T,Object(o["createElementVNode"])("img",{class:"protagonist protagonist0",src:e.protagonist0Src,alt:"",onAnimationend:t[0]||(t[0]=(...t)=>e.changeProtagonist0&&e.changeProtagonist0(...t)),onClick:t[1]||(t[1]=(...t)=>e.showText&&e.showText(...t))},null,40,z),D])],2),Object(o["createVNode"])(l,{ref:"dialog",onClose:e.next},null,8,["onClose"])],64)}var F=c("cc5a"),L=c.n(F);const P={class:"dilog_body"},J={class:"content"};function A(e,t,c,n,a,s){const l=Object(o["resolveComponent"])("van-icon");return e.show?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:"mask",onClick:t[0]||(t[0]=(...t)=>e.close&&e.close(...t))},[Object(o["createElementVNode"])("div",P,[Object(o["createElementVNode"])("div",J,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.textList,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"row",key:t},Object(o["toDisplayString"])(e),1))),128)),e.showNext?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:"next",name:"arrow-down",color:"white",size:"5vh"})):Object(o["createCommentVNode"])("",!0)])])])):Object(o["createCommentVNode"])("",!0)}var q={0:["小墨：哇，这个公园好漂亮！","爸爸：小墨喜欢吗","小墨：超喜欢！妈妈我要去玩那个！","安然：那小墨先过去看看玩一会好不好呀，注意安全哦。","小墨：好！","爸爸：爸爸陪你一起过去。"]},G=Object(o["defineComponent"])({setup(e,{emit:t}){const c=Object(o["ref"])(e.show),n=Object(o["ref"])([]),a=Object(o["ref"])(!1);let s=void 0;const l=e=>{s=e,a.value=!1,n.value=[],c.value=!0;const t=q[e];let o=0,l=0;const r=()=>{n.value.push("");const e=setInterval(()=>{l<t[o].length?(n.value[o]+=t[o][l],l+=1):(l=0,clearInterval(e),o+=1,o>=t.length?a.value=!0:setTimeout(()=>{r()},500))},100)};r()},r=()=>{a.value&&(c.value=!1,t("close",s))};return{show:c,textList:n,showDialog:l,showNext:a,close:r}}});c("7500");const H=h()(G,[["render",A],["__scopeId","data-v-298461d9"]]);var K=H,Q=Object(o["defineComponent"])({components:{Dialog:K},setup(e,{emit:t}){const c=Object(o["ref"])(null),n=Object(o["ref"])(m.a),a=Object(o["ref"])(!1),s=()=>{n.value=L.a,r=!1};let l=Object(o["ref"])(0),r=!0;const i=()=>{r||0!==l.value||(n.value=m.a,c.value.showDialog(l.value),r=!0)},d=e=>{console.log(e),r=!1,l.value=e+1};return{protagonist0Src:n,changeProtagonist0:s,showText:i,showDialog:a,dialog:c,next:d,current:l}}});c("aaa6");const R=h()(Q,[["render",M],["__scopeId","data-v-6a880114"]]);var U=R,W=Object(o["defineComponent"])({components:{First:w,Second:U},setup(){const e=Object(o["ref"])(0),t=Object(o["ref"])([!0,!1]),c=()=>{t.value[e.value+1]=!0,setTimeout(()=>{e.value+=1,setTimeout(()=>{t.value[e.value-1]=!1},2e3)},50)};return{current:e,showNext:c,modalCtrl:t}}});c("e119"),c("f618");const X=h()(W,[["render",a],["__scopeId","data-v-76b7044e"]]);t["default"]=X},"937c":function(e,t,c){e.exports=c.p+"static/img/protagonist2.9e0c9f97.gif"},a727:function(e,t,c){e.exports=c.p+"static/img/protagonist1.b77b13f5.gif"},aaa6:function(e,t,c){"use strict";c("d259")},ad72:function(e,t,c){e.exports=c.p+"static/img/protagonist.01abc7f9.gif"},b3d6:function(e,t,c){e.exports=c.p+"static/img/car.84914d4c.png"},c4b6:function(e,t,c){},c9eb:function(e,t,c){},cc5a:function(e,t,c){e.exports=c.p+"static/img/protagonist0_text.49b4d3a3.gif"},d259:function(e,t,c){},e119:function(e,t,c){"use strict";c("3f05")},e255:function(e,t,c){"use strict";c("748f")},f618:function(e,t,c){"use strict";c("c4b6")}}]);