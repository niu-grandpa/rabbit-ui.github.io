import{$ as x,r as F,s as E,P as u,n as d,h as _,j as m,a as y}from"./index.6eec8bf7.js";import{m as f}from"./one-node.8fcc3adc.js";import{H as c,I as p,c as t,v as e,Q as v,d as M,o as k,J as a,E as i,G as B}from"./@vue.a8c943de.js";import"./vue-router.48f330f4.js";import"./ant-design-vue.b7dcff0a.js";import"./omit.js.0925d6dc.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.cfb30b28.js";import"./@ant-design.40a0d6fe.js";import"./@ctrl.2e36ce53.js";import"./dom-scroll-into-view.e686d464.js";import"./moment.9709ab41.js";import"./warning.ca82f8e0.js";import"./dom-align.484b453c.js";import"./vue-types.6e6d84ba.js";class A{constructor(){this.VERSION="v1.0",this.COMPONENTS=x("r-jumbotron",{all:!0}),this._create(this.COMPONENTS)}_create(s){s.forEach(r=>{if(f(r))return;const n=r.firstElementChild,{title:o,subTitle:b}=this._attrs(r);this._setMainTemplate(r,o,b),this._setExtraContent(r,n),F(r,["title","sub-title"])})}_setMainTemplate(s,r,n){const o=`
         <div class="${u.jumbotron}-container">
             <h1 class="${u.jumbotron}-title">${r}</h1>
             <div class="${u.jumbotron}-subtitle">${n}</div>
         </div>`;E(s,o)}_setExtraContent(s,r){if(!r)return;const n=s.querySelector(`.${u.jumbotron}-container`);n==null||n.appendChild(r)}_attrs(s){return{title:d(s,"title",""),subTitle:d(s,"sub-title","")}}}var D=A;const g={},$={class:""},w=t("pre",{lang:"html",class:"md-fences md-end-block ty-contain-cm modeLoaded md-focus",spellcheck:"false"},[t("div",{class:"CodeMirror cm-s-inner CodeMirror-wrap CodeMirror-focused",lang:"html"},[t("div",{style:{overflow:"hidden",position:"relative",width:"3px",height:"0px",top:"179.2px",left:"129.463px"}},[t("textarea",{autocorrect:"off",autocapitalize:"off",spellcheck:"false",tabindex:"0",style:{position:"absolute",bottom:"-1em",padding:"0px",width:"1000px",height:"1em",outline:"none"}})]),t("div",{class:"CodeMirror-scrollbar-filler","cm-not-content":"true"}),t("div",{class:"CodeMirror-gutter-filler","cm-not-content":"true"}),t("div",{class:"CodeMirror-scroll",tabindex:"-1"},[t("div",{class:"CodeMirror-sizer",style:{"margin-left":"0px","margin-bottom":"0px","border-right-width":"0px","padding-right":"0px","padding-bottom":"0px"}},[t("div",{style:{position:"relative",top:"0px"}},[t("div",{class:"CodeMirror-lines",role:"presentation"},[t("div",{role:"presentation",style:{position:"relative",outline:"none"}},[t("div",{class:"CodeMirror-measure"},[t("pre",null,[t("span",null,"xxxxxxxxxx")])]),t("div",{class:"CodeMirror-measure"}),t("div",{style:{position:"relative","z-index":"1"}}),t("div",{class:"CodeMirror-code",role:"presentation",style:{}},[t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t("span",{class:"cm-tag cm-bracket"},"<"),t("span",{class:"cm-tag"},"r-jumbotron"),e()])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-attribute"},"title"),e("="),t("span",{class:"cm-string"},'"Hello, world!"'),e()])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-attribute"},"sub-title"),e("="),t("span",{class:"cm-string"},'"\u8FD9\u4E2A\u4E16\u754C\u5145\u6EE1\u7740\u7231\u4E0E\u5305\u5BB9\u3001\u5584\u826F\u4E0E\u9AD8\u5C1A\uFF0C\u7F8E\u597D\u76F8\u4F34\u7740\u6211\u4EEC\u7684\u6BCF\u4E00\u5929\u3002\u82F1\u96C4\u822C\u7684\u4EBA\u7269\u5728\u8FD9\u4E2A\u65F6\u4EE3\u5C42\u51FA\u4E0D\u7A77\uFF0C\u611F\u8C22\u60A8\u7684\u4F7F\u7528\uFF01"'),t("span",{class:"cm-tag cm-bracket"},">")])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-tag cm-bracket"},"<"),t("span",{class:"cm-tag"},"div"),t("span",{class:"cm-tag cm-bracket"},">")])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0 \xA0 \xA0"),t("span",{class:"cm-tag cm-bracket"},"<"),t("span",{class:"cm-tag"},"hr"),e(),t("span",{class:"cm-attribute"},"style"),e("="),t("span",{class:"cm-string"},'"margin-bottom: 1.5rem;"'),e(),t("span",{class:"cm-tag cm-bracket"},"/>")])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0 \xA0 \xA0"),t("span",{class:"cm-tag cm-bracket"},"<"),t("span",{class:"cm-tag"},"p"),t("span",{class:"cm-tag cm-bracket"},">"),e("\u5B83\u4F7F\u7528\u5B9E\u7528\u7A0B\u5E8F\u7C7B\u6765\u6392\u7248\u548C\u7A7A\u683C\uFF0C\u4EE5\u4FBF\u5728\u8F83\u5927\u7684\u5BB9\u5668\u4E2D\u5206\u9694\u5185\u5BB9\u3002"),t("span",{class:"cm-tag cm-bracket"},"</"),t("span",{class:"cm-tag"},"p"),t("span",{class:"cm-tag cm-bracket"},">")])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0 \xA0 \xA0"),t("span",{class:"cm-tag cm-bracket"},"<"),t("span",{class:"cm-tag"},"button"),e(),t("span",{class:"cm-attribute"},"class"),e("="),t("span",{class:"cm-string"},'"rab-btn rab-btn-primary rab-btn-lg"'),t("span",{class:"cm-tag cm-bracket"},">"),e("\u4E86\u89E3\u66F4\u591A"),t("span",{class:"cm-tag cm-bracket"},"</"),t("span",{class:"cm-tag"},"button"),t("span",{class:"cm-tag cm-bracket"},">")])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-tag cm-bracket"},"</"),t("span",{class:"cm-tag"},"div"),t("span",{class:"cm-tag cm-bracket"},">")])]),t("div",{class:"CodeMirror-activeline",style:{position:"relative"}},[t("div",{class:"CodeMirror-activeline-background CodeMirror-linebackground"}),t("div",{class:"CodeMirror-gutter-background CodeMirror-activeline-gutter",style:{left:"0px",width:"0px"}}),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t("span",{class:"cm-tag cm-bracket"},"</"),t("span",{class:"cm-tag"},"r-jumbotron"),t("span",{class:"cm-tag cm-bracket"},">")])])])])])])])]),t("div",{style:{position:"absolute",height:"0px",width:"1px","border-bottom":"0px solid transparent",top:"202px"}}),t("div",{class:"CodeMirror-gutters",style:{display:"none",height:"202px"}})])])],-1),j=t("p",null,"\xA0",-1);function N(l,s){return c(),p("div",$,[w,j])}g.render=N;const h={},T={lang:"html",class:"md-fences md-end-block ty-contain-cm modeLoaded md-focus",spellcheck:"false"},H=t("div",{class:"CodeMirror cm-s-inner CodeMirror-wrap CodeMirror-focused",lang:"html"},[t("div",{style:{overflow:"hidden",position:"relative",width:"3px",height:"0px",top:"224px",left:"129.463px"}},[t("textarea",{autocorrect:"off",autocapitalize:"off",spellcheck:"false",tabindex:"0",style:{position:"absolute",bottom:"-1em",padding:"0px",width:"1000px",height:"1em",outline:"none"}})]),t("div",{class:"CodeMirror-scrollbar-filler","cm-not-content":"true"}),t("div",{class:"CodeMirror-gutter-filler","cm-not-content":"true"}),t("div",{class:"CodeMirror-scroll",tabindex:"-1"},[t("div",{class:"CodeMirror-sizer",style:{"margin-left":"0px","margin-bottom":"0px","border-right-width":"0px","padding-right":"0px","padding-bottom":"0px"}},[t("div",{style:{position:"relative",top:"0px"}},[t("div",{class:"CodeMirror-lines",role:"presentation"},[t("div",{role:"presentation",style:{position:"relative",outline:"none"}},[t("div",{class:"CodeMirror-measure"},[t("pre",null,"x")]),t("div",{class:"CodeMirror-measure"}),t("div",{style:{position:"relative","z-index":"1"}}),t("div",{class:"CodeMirror-code CodeMirror-crosshair",role:"presentation",style:{}},[t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t("span",{class:"cm-tag cm-bracket"},"<"),t("span",{class:"cm-tag"},"r-jumbotron"),e()])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-attribute"},"type"),e("="),t("span",{class:"cm-string"},'"light"'),e()])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-attribute"},"title"),e("="),t("span",{class:"cm-string"},'"Hello, world!"'),e()])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-attribute"},"sub-title"),e("="),t("span",{class:"cm-string"},'"\u8FD9\u4E2A\u4E16\u754C\u5145\u6EE1\u7740\u7231\u4E0E\u5305\u5BB9\u3001\u5584\u826F\u4E0E\u9AD8\u5C1A\uFF0C\u7F8E\u597D\u76F8\u4F34\u7740\u6211\u4EEC\u7684\u6BCF\u4E00\u5929\u3002\u82F1\u96C4\u822C\u7684\u4EBA\u7269\u5728\u8FD9\u4E2A\u65F6\u4EE3\u5C42\u51FA\u4E0D\u7A77\uFF0C\u611F\u8C22\u60A8\u7684\u4F7F\u7528\uFF01"'),t("span",{class:"cm-tag cm-bracket"},">")])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t("span",{class:"cm-tag cm-bracket"},"</"),t("span",{class:"cm-tag"},"r-jumbotron"),t("span",{class:"cm-tag cm-bracket"},">")])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t("span",{"cm-text":""},"\u200B")])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t("span",{class:"cm-tag cm-bracket"},"<"),t("span",{class:"cm-tag"},"r-jumbotron"),e()])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-attribute"},"type"),e("="),t("span",{class:"cm-string"},'"dark"'),e()])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-attribute"},"title"),e("="),t("span",{class:"cm-string"},'"Hello, world!"'),e()])]),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[e(" \xA0"),t("span",{class:"cm-attribute"},"sub-title"),e("="),t("span",{class:"cm-string"},'"\u8FD9\u4E2A\u4E16\u754C\u5145\u6EE1\u7740\u7231\u4E0E\u5305\u5BB9\u3001\u5584\u826F\u4E0E\u9AD8\u5C1A\uFF0C\u7F8E\u597D\u76F8\u4F34\u7740\u6211\u4EEC\u7684\u6BCF\u4E00\u5929\u3002\u82F1\u96C4\u822C\u7684\u4EBA\u7269\u5728\u8FD9\u4E2A\u65F6\u4EE3\u5C42\u51FA\u4E0D\u7A77\uFF0C\u611F\u8C22\u60A8\u7684\u4F7F\u7528\uFF01"'),t("span",{class:"cm-tag cm-bracket"},">")])]),t("div",{class:"CodeMirror-activeline",style:{position:"relative"}},[t("div",{class:"CodeMirror-activeline-background CodeMirror-linebackground"}),t("div",{class:"CodeMirror-gutter-background CodeMirror-activeline-gutter",style:{left:"0px",width:"0px"}}),t("pre",{class:" CodeMirror-line ",role:"presentation"},[t("span",{role:"presentation",style:{"padding-right":"0.1px"}},[t("span",{class:"cm-tag cm-bracket"},"</"),t("span",{class:"cm-tag"},"r-jumbotron"),t("span",{class:"cm-tag cm-bracket"},">")])])])])])])])]),t("div",{style:{position:"absolute",height:"0px",width:"1px","border-bottom":"0px solid transparent",top:"246px"}}),t("div",{class:"CodeMirror-gutters",style:{display:"none",height:"246px"}})])],-1);function P(l,s){return c(),p("pre",T,[H])}h.render=P;const C={},z={class:""},I=v('<h3><a name="jumbotron" class="md-header-anchor"></a><span>Jumbotron</span></h3><figure><table><thead><tr><th style="text-align:left;"><span>\u5C5E\u6027</span></th><th style="text-align:left;"><span>\u8BF4\u660E</span></th><th style="text-align:left;"><span>\u9ED8\u8BA4\u503C</span></th></tr></thead><tbody><tr><td style="text-align:left;"><span>type</span></td><td style="text-align:left;"><span>\u66F4\u6539\u5916\u89C2\u989C\u8272\uFF0C\u53EF\u9009\u503C\u4E3A </span><code>light</code><span> \u548C </span><code>dark</code></td><td style="text-align:left;"><span>-</span></td></tr><tr><td style="text-align:left;"><span>title</span></td><td style="text-align:left;"><span>\u8BBE\u7F6E\u5927\u6807\u9898</span></td><td style="text-align:left;"><span>-</span></td></tr><tr><td style="text-align:left;"><span>sub-title</span></td><td style="text-align:left;"><span>\u8BBE\u7F6E\u63CF\u8FF0\u6807\u9898</span></td><td style="text-align:left;"><span>-</span></td></tr></tbody></table></figure>',2);function O(l,s){return c(),p("div",z,[I])}C.render=O;const S={class:"markdown"},J=t("li",null,"\u5F53\u9700\u8981\u5C55\u793A\u5DE8\u5927\u7684\u6807\u9898\u548C\u6BB5\u843D\u65F6\u4F7F\u7528\u3002",-1),V=t("div",null,[t("hr",{style:{"margin-bottom":"1.5rem"}}),t("p",null,"\u5B83\u4F7F\u7528\u5B9E\u7528\u7A0B\u5E8F\u7C7B\u6765\u6392\u7248\u548C\u7A7A\u683C\uFF0C\u4EE5\u4FBF\u5728\u8F83\u5927\u7684\u5BB9\u5668\u4E2D\u5206\u9694\u5185\u5BB9\u3002"),t("button",{class:"rab-btn rab-btn-primary rab-btn-lg"},"\u4E86\u89E3\u66F4\u591A")],-1),L=t("span",{id:"\u57FA\u7840\u7528\u6CD5"},"\u57FA\u7840\u7528\u6CD5",-1),R=e(" \u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5982\u679C\u6DFB\u52A0\u989D\u5916\u5185\u5BB9\u5219\u6807\u7B7E\u5BB9\u5668\u4E0B\u5FC5\u987B\u5177\u6709\u4E00\u4E2A\u7236\u5143\u7D20 "),q=t("span",{id:"\u5916\u89C2"},"\u5916\u89C2",-1),G=e("\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027"),Q=t("code",null,"type",-1),X=e("\u5207\u6362\u5916\u89C2\u80CC\u666F\u8272 "),K=t("h2",{id:"API"},"API",-1);var pt=M({expose:[],setup(l){k(()=>new D);const s=["\u57FA\u7840\u7528\u6CD5","\u5916\u89C2","API"];return(r,n)=>{const o=B("r-jumbotron");return c(),p("article",S,[t(i(_),{name:"Jumbotron",title:"\u5DE8\u5E55",desc:"\u7528\u4E8E\u6392\u7248\u548C\u5206\u884C\uFF0C\u4EE5\u4FBF\u5728\u8F83\u5927\u7684\u5BB9\u5668\u4E2D\u5206\u9694\u5185\u5BB9\u3002"},{default:a(()=>[J]),_:1}),t(i(m),null,{case:a(()=>[t(o,{title:"Hello, world!","sub-title":"\u8FD9\u4E2A\u4E16\u754C\u5145\u6EE1\u7740\u7231\u4E0E\u5305\u5BB9\u3001\u5584\u826F\u4E0E\u9AD8\u5C1A\uFF0C\u7F8E\u597D\u76F8\u4F34\u7740\u6211\u4EEC\u7684\u6BCF\u4E00\u5929\u3002\u82F1\u96C4\u822C\u7684\u4EBA\u7269\u5728\u8FD9\u4E2A\u65F6\u4EE3\u5C42\u51FA\u4E0D\u7A77\uFF0C\u611F\u8C22\u60A8\u7684\u4F7F\u7528\uFF01"},{default:a(()=>[V]),_:1})]),header:a(()=>[L]),desc:a(()=>[R]),code:a(()=>[t(i(g))]),_:1}),t(i(m),null,{case:a(()=>[t(o,{type:"light",title:"Hello, world!","sub-title":"\u8FD9\u4E2A\u4E16\u754C\u5145\u6EE1\u7740\u7231\u4E0E\u5305\u5BB9\u3001\u5584\u826F\u4E0E\u9AD8\u5C1A\uFF0C\u7F8E\u597D\u76F8\u4F34\u7740\u6211\u4EEC\u7684\u6BCF\u4E00\u5929\u3002\u82F1\u96C4\u822C\u7684\u4EBA\u7269\u5728\u8FD9\u4E2A\u65F6\u4EE3\u5C42\u51FA\u4E0D\u7A77\uFF0C\u611F\u8C22\u60A8\u7684\u4F7F\u7528\uFF01"}),t(o,{type:"dark",title:"Hello, world!","sub-title":"\u8FD9\u4E2A\u4E16\u754C\u5145\u6EE1\u7740\u7231\u4E0E\u5305\u5BB9\u3001\u5584\u826F\u4E0E\u9AD8\u5C1A\uFF0C\u7F8E\u597D\u76F8\u4F34\u7740\u6211\u4EEC\u7684\u6BCF\u4E00\u5929\u3002\u82F1\u96C4\u822C\u7684\u4EBA\u7269\u5728\u8FD9\u4E2A\u65F6\u4EE3\u5C42\u51FA\u4E0D\u7A77\uFF0C\u611F\u8C22\u60A8\u7684\u4F7F\u7528\uFF01"})]),header:a(()=>[q]),desc:a(()=>[G,Q,X]),code:a(()=>[t(i(h))]),_:1}),K,t(i(C)),t(i(y),{linkList:s})])}}});export{pt as default};
