import{$ as _,k,m as C,r as F,n as T,f as Y,h as E,j as A,a as B}from"./index.4b091e71.js";import{v as I}from"./validComps.1ddad215.js";import{M as N}from"./index.b6274511.js";import{H as y,I as b,c as s,v as t,Q as S,d as H,o as O,J as c,E as i,G as P}from"./@vue.a8c943de.js";import"./vue-router.48f330f4.js";import"./ant-design-vue.b7dcff0a.js";import"./omit.js.0925d6dc.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.cfb30b28.js";import"./@ant-design.40a0d6fe.js";import"./@ctrl.2e36ce53.js";import"./dom-scroll-into-view.e686d464.js";import"./moment.9709ab41.js";import"./warning.ca82f8e0.js";import"./dom-align.484b453c.js";import"./vue-types.6e6d84ba.js";import"./use-html-string.6ee4a8f7.js";import"./destroy.1cb575e6.js";class M{constructor(){this.VERSION="v1.0",this.COMPONENTS=_("r-count-down",{all:!0}),this._create(this.COMPONENTS)}config(a){const e=_(a);I(e,"count-down");const{_countTime:r}=M.prototype;return{get endTime(){return""},set endTime(n){n&&!k(n)||r(e,n)},events({onStop:n}){!n||C(e,"DOMNodeInserted",p=>{p.target.textContent==="00:00:00"&&Y(n,!0)})}}}_create(a){a.forEach(e=>{const{endTime:r}=this._attrs(e);this._countTime(e,r),F(e,["endTime"])})}_countTime(a,e){if(!e)return;let r=null;const n=()=>{const h=new Date().getTime(),o=new Date(e).getTime()-h;let x=0,l=0,d=0,m=0;o>=0&&(x=Math.floor(o/1e3/60/60/24),l=Math.floor(o/1e3/60/60%24),d=Math.floor(o/1e3/60%60),m=Math.floor(o/1e3%60));const u=g=>(g<10&&(g=`0${g}`),g);x=u(x),l=u(l),d=u(d),m=u(m),a.textContent=`${l}:${d}:${m}`};n(),r=window.setInterval(n,1e3),C(a,"DOMNodeInserted",p=>{if(p.target.textContent==="00:00:00"){window.clearInterval(r);return}})}_attrs(a){return{endTime:T(a,"end-time","")}}}var z=M;const w={},R={lang:"html",class:"md-fences md-end-block ty-contain-cm modeLoaded md-focus",spellcheck:"false",style:{"break-inside":"unset"}},L=s("div",{class:"CodeMirror cm-s-inner CodeMirror-wrap CodeMirror-focused",lang:"html"},[s("div",{style:{overflow:"hidden",position:"relative",width:"3px",height:"0px",top:"425.6px",left:"86.075px"}},[s("textarea",{autocorrect:"off",autocapitalize:"off",spellcheck:"false",tabindex:"0",style:{position:"absolute",bottom:"-1em",padding:"0px",width:"1000px",height:"1em",outline:"none"}})]),s("div",{class:"CodeMirror-scrollbar-filler","cm-not-content":"true"}),s("div",{class:"CodeMirror-gutter-filler","cm-not-content":"true"}),s("div",{class:"CodeMirror-scroll",tabindex:"-1"},[s("div",{class:"CodeMirror-sizer",style:{"margin-left":"0px","margin-bottom":"0px","border-right-width":"0px","padding-right":"0px","padding-bottom":"0px"}},[s("div",{style:{position:"relative",top:"0px"}},[s("div",{class:"CodeMirror-lines",role:"presentation"},[s("div",{role:"presentation",style:{position:"relative",outline:"none"}},[s("div",{class:"CodeMirror-measure"},[s("pre",null,[s("span",null,"xxxxxxxxxx")])]),s("div",{class:"CodeMirror-measure"}),s("div",{style:{position:"relative","z-index":"1"}}),s("div",{class:"CodeMirror-code CodeMirror-crosshair",role:"presentation",style:{}},[s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[s("span",{class:"cm-tag cm-bracket"},"<"),s("span",{class:"cm-tag"},"r-count-down"),t(),s("span",{class:"cm-attribute"},"id"),t("="),s("span",{class:"cm-string"},'"test1"'),s("span",{class:"cm-tag cm-bracket"},"></"),s("span",{class:"cm-tag"},"r-count-down"),s("span",{class:"cm-tag cm-bracket"},">")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[s("span",{class:"cm-tag cm-bracket"},"<"),s("span",{class:"cm-tag"},"r-count-down"),t(),s("span",{class:"cm-attribute"},"id"),t("="),s("span",{class:"cm-string"},'"test2"'),s("span",{class:"cm-tag cm-bracket"},"></"),s("span",{class:"cm-tag"},"r-count-down"),s("span",{class:"cm-tag cm-bracket"},">")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[s("span",{"cm-text":""},"\u200B")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[s("span",{class:"cm-tag cm-bracket"},"<"),s("span",{class:"cm-tag"},"script"),s("span",{class:"cm-tag cm-bracket"},">")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[s("span",{class:"cm-tab",role:"presentation","cm-text":"	"},"    "),s("span",{class:"cm-keyword"},"const"),t(),s("span",{class:"cm-def"},"countDown"),t(),s("span",{class:"cm-operator"},"="),t(),s("span",{class:"cm-keyword"},"new"),t(),s("span",{class:"cm-variable"},"Rabbit"),t("."),s("span",{class:"cm-property"},"CountDown"),t("();")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0"),s("span",{class:"cm-keyword"},"const"),t(),s("span",{class:"cm-def"},"date"),t(),s("span",{class:"cm-operator"},"="),t(),s("span",{class:"cm-keyword"},"new"),t(),s("span",{class:"cm-variable"},"Date"),t("();")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[s("span",{"cm-text":""},"\u200B")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0"),s("span",{class:"cm-keyword"},"const"),t(),s("span",{class:"cm-def"},"YYMMDD"),t(),s("span",{class:"cm-operator"},"="),t(),s("span",{class:"cm-string-2"},"`${"),s("span",{class:"cm-variable"},"date"),t("."),s("span",{class:"cm-property"},"getFullYear"),t("()"),s("span",{class:"cm-string-2"},"}/${"),s("span",{class:"cm-variable"},"date"),t("."),s("span",{class:"cm-property"},"getMonth"),t("() "),s("span",{class:"cm-operator"},"+"),t(),s("span",{class:"cm-number"},"1"),s("span",{class:"cm-string-2"},"}/${"),s("span",{class:"cm-variable"},"date"),t("."),s("span",{class:"cm-property"},"getDate"),t("()"),s("span",{class:"cm-string-2"},"}`"),t(";")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0"),s("span",{class:"cm-keyword"},"const"),t(),s("span",{class:"cm-def"},"h"),t(),s("span",{class:"cm-operator"},"="),t(),s("span",{class:"cm-variable"},"date"),t("."),s("span",{class:"cm-property"},"getHours"),t("();")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0"),s("span",{class:"cm-keyword"},"const"),t(),s("span",{class:"cm-def"},"mm"),t(),s("span",{class:"cm-operator"},"="),t(),s("span",{class:"cm-variable"},"date"),t("."),s("span",{class:"cm-property"},"getMinutes"),t("();")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[s("span",{"cm-text":""},"\u200B")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0"),s("span",{class:"cm-comment"},"// 'YYYY/MM/DD HH:mm:ss'")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0"),s("span",{class:"cm-variable"},"countDown"),t("."),s("span",{class:"cm-property"},"config"),t("("),s("span",{class:"cm-string"},"'#test1'"),t(")."),s("span",{class:"cm-property"},"endTime"),t(),s("span",{class:"cm-operator"},"="),t(),s("span",{class:"cm-string-2"},"`${"),s("span",{class:"cm-variable"},"YYMMDD"),s("span",{class:"cm-string-2"},"}"),t(),s("span",{class:"cm-string-2"},"${"),s("span",{class:"cm-variable"},"h"),t(),s("span",{class:"cm-operator"},"+"),t(),s("span",{class:"cm-number"},"1"),s("span",{class:"cm-string-2"},"}:00:00`"),t(";")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0"),s("span",{class:"cm-variable"},"countDown"),t("."),s("span",{class:"cm-property"},"config"),t("("),s("span",{class:"cm-string"},"'#test2'"),t(")."),s("span",{class:"cm-property"},"endTime"),t(),s("span",{class:"cm-operator"},"="),t(),s("span",{class:"cm-string-2"},"`${"),s("span",{class:"cm-variable"},"YYMMDD"),s("span",{class:"cm-string-2"},"}"),t(),s("span",{class:"cm-string-2"},"${"),s("span",{class:"cm-variable"},"h"),s("span",{class:"cm-string-2"},"}:${"),s("span",{class:"cm-variable"},"mm"),t(),s("span",{class:"cm-operator"},"+"),t(),s("span",{class:"cm-number"},"1"),s("span",{class:"cm-string-2"},"}:00`"),t(";")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0"),s("span",{class:"cm-variable"},"countDown"),t("."),s("span",{class:"cm-property"},"config"),t("("),s("span",{class:"cm-string"},"'#test2'"),t(")."),s("span",{class:"cm-property"},"events"),t("({")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0 \xA0 \xA0"),s("span",{class:"cm-property"},"onStop"),t(": ("),s("span",{class:"cm-def"},"stop"),t(") "),s("span",{class:"cm-operator"},"=>"),t(" {")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t(" \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"),s("span",{class:"cm-keyword"},"if"),t(" ("),s("span",{class:"cm-variable-2"},"stop"),t(") "),s("span",{class:"cm-variable"},"Rabbit"),t("."),s("span",{class:"cm-property"},"Message"),t("."),s("span",{class:"cm-property"},"info"),t("("),s("span",{class:"cm-string"},"'\u5012\u8BA1\u65F6\u7ED3\u675F\uFF01'"),t(")")])]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}}," \xA0 \xA0 \xA0  }")]),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}}," \xA0  });")]),s("div",{class:"CodeMirror-activeline",style:{position:"relative"}},[s("div",{class:"CodeMirror-activeline-background CodeMirror-linebackground"}),s("div",{class:"CodeMirror-gutter-background CodeMirror-activeline-gutter",style:{left:"0px",width:"0px"}}),s("pre",{class:" CodeMirror-line ",role:"presentation"},[s("span",{role:"presentation",style:{"padding-right":"0.1px"}},[s("span",{class:"cm-tag cm-bracket"},"</"),s("span",{class:"cm-tag"},"script"),s("span",{class:"cm-tag cm-bracket"},">")])])])])])])])]),s("div",{style:{position:"absolute",height:"0px",width:"1px","border-bottom":"0px solid transparent",top:"448px"}}),s("div",{class:"CodeMirror-gutters",style:{display:"none",height:"448px"}})])],-1);function V(v,a){return y(),b("pre",R,[L])}w.render=V;const D={},j={class:""},G=S('<h3><a name="countdown" class="md-header-anchor"></a><span>CountDown</span></h3><figure><table><thead><tr><th><span>\u5C5E\u6027</span></th><th><span>\u8BF4\u660E</span></th><th><span>\u9ED8\u8BA4\u503C</span></th></tr></thead><tbody><tr><td><span>end-time</span></td><td><span>\u8BBE\u7F6E\u5012\u8BA1\u65F6\u7ED3\u675F\u7684\u76EE\u6807\u65F6\u95F4</span></td><td><span>-</span></td></tr></tbody></table></figure><h3><a name="config--\u65B9\u6CD5" class="md-header-anchor"></a><span>Config \u65B9\u6CD5</span></h3><p><span>\u914D\u7F6E\u6307\u5B9A\u7684\u7EC4\u4EF6\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E9B\u5FC5\u8981\u7684\u54CD\u5E94\u5F0F\u66F4\u65B0DOM\u5185\u5BB9\u6216\u5176\u4ED6\u64CD\u4F5C\u7684 API\u3002\uFF08\u5E76\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u4F1A\u6709\uFF09</span></p><figure><table><thead><tr><th><span>\u53C2\u6570</span></th><th><span>\u8BF4\u660E</span></th><th><span>\u7C7B\u578B</span></th></tr></thead><tbody><tr><td><span>el</span></td><td><span>\u914D\u7F6E\u5F53\u524D\u9009\u5B9A\u7684 count-down\uFF0C\u5FC5\u987B\u662F\u9009\u62E9\u5668\u540D\u79F0\u6216\u8005\u5143\u7D20\u540D</span></td><td><span>String</span></td></tr></tbody></table></figure><p><span>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4EE5\u4E0B\u503C\uFF1A</span></p><ul><li><code>endTime</code></li><li><code>events(options)</code></li></ul><figure><table><thead><tr><th><span>\u8FD4\u56DE\u503C</span></th><th><span>\u8BF4\u660E</span></th><th><span>\u7C7B\u578B</span></th><th><span>\u9ED8\u8BA4\u503C</span></th></tr></thead><tbody><tr><td><span>endTime</span></td><td><span>\u54CD\u5E94\u5F0F\u8BBE\u7F6E\u5012\u8BA1\u65F6\u7ED3\u675F\u7684\u76EE\u6807\u65F6\u95F4</span></td><td><span>String</span></td><td><span>-</span></td></tr><tr><td><span>events</span></td><td><span>\u975E\u54CD\u5E94\u5F0FAPI\uFF0C\u6DFB\u52A0\u5012\u8BA1\u65F6\u7684\u4E8B\u4EF6\uFF0C</span></td><td><span>Function</span></td><td><span>-</span></td></tr></tbody></table></figure><ul><li><code>events</code><span>\u7684\u53C2\u6570 options \u4E3A\u5BF9\u8C61\uFF0C\u5177\u4F53\u8BF4\u660E\u5982\u4E0B\uFF1A</span></li></ul><figure><table><thead><tr><th style="text-align:left;"><span>\u5C5E\u6027</span></th><th style="text-align:left;"><span>\u8BF4\u660E</span></th><th style="text-align:left;"><span>\u56DE\u8C03\u53C2\u6570</span></th></tr></thead><tbody><tr><td style="text-align:left;"><span>onStop</span></td><td style="text-align:left;"><span>\u5012\u8BA1\u65F6\u7ED3\u675F\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6</span></td><td style="text-align:left;"><span>(stop: boolean) =&gt; void</span></td></tr></tbody></table></figure>',10);function J(v,a){return y(),b("div",j,[G])}D.render=J;const Q={class:"markdown"},q=s("li",null,"\u5F53\u9875\u9762\u67D0\u4E2A\u90E8\u5206\u6216\u529F\u80FD\u9700\u8981\u8FDB\u884C\u5012\u8BA1\u65F6",-1),K=s("br",null,null,-1),U=s("span",{id:"\u57FA\u7840\u7528\u6CD5"},"\u57FA\u7840\u7528\u6CD5",-1),W=s("p",null,"\u6700\u7B80\u5355\u7684\u7528\u6CD5",-1),X=s("p",null,[t("\u8BBE\u7F6E\u7684\u65F6\u95F4\u683C\u5F0F\u4E3A"),s("code",null,"YYYY/MM/DD HH:mm:ss"),t("\u6216"),s("code",null,"YYYY-MM-DD HH:mm:ss")],-1),Z=s("h2",{id:"API"},"API",-1);var ys=H({expose:[],setup(v){let a;const e=new Date,r=`${e.getFullYear()}/${e.getMonth()+1}/${e.getDate()}`,n=e.getHours(),p=e.getMinutes();O(()=>{a=new z,a.config("#test1").endTime=`${r} ${n+1}:00:00`,a.config("#test2").endTime=`${r} ${n}:${p+1}:00`,a.config("#test2").events({onStop:f=>{f&&N.info("\u5012\u8BA1\u65F6\u7ED3\u675F\uFF01")}})});const h=["\u57FA\u7840\u7528\u6CD5","API"];return(f,$)=>{const o=P("r-count-down");return y(),b("article",Q,[s(i(E),{name:"CountDown",title:"\u5012\u8BA1\u65F6",desc:"\u6839\u636E\u8BBE\u7F6E\u76EE\u6807\u65F6\u95F4\u6765\u5012\u8BA1\u65F6\u7684\u7EC4\u4EF6\u3002"},{default:c(()=>[q]),_:1}),s(i(A),null,{case:c(()=>[s(o,{id:"test1"}),K,s(o,{id:"test2"})]),header:c(()=>[U]),desc:c(()=>[W,X]),code:c(()=>[s(i(w))]),_:1}),Z,s(i(D)),s(i(B),{linkList:h})])}}});export{ys as default};
