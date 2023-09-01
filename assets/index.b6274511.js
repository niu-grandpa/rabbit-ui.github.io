import{P as a,c as m,b as l,$ as h,s as b,C as v,k as _,i as d,l as C,m as M,f as y}from"./index.4b091e71.js";import{i as $,u as o}from"./use-html-string.6ee4a8f7.js";import{d as p,a as x}from"./destroy.1cb575e6.js";const S="rab-message-instance",g=`${a.message}-move-enter`,u=`${a.message}-move-leave`,L={info:"ios-information-circle",success:"ios-checkmark-circle",warning:"ios-alert",error:"ios-close-circle",loading:"loading-solid"};let c=1010,A=0;class w{constructor(){this.INSTANCES=[]}_init(s){const e=m("div");l(e,"zIndex",`${c}`),e.setAttribute("class",`${a.message}`),document.body.appendChild(e),setTimeout(()=>l(e,"top",`${s}px`),0)}_create(s,e,t){const r=this._setMainTemplate(s),n=r.querySelector(`.${a.messageChild}-content`);if(this._autoAddZIndex(),this._setIcon(s,r),this._setContent(r,e),typeof e=="object"){const{key:I,closable:N,onClose:T,background:E}=e;this._setKey(r,I),this._setClosable(r,n,N,T),this._setBackground(r,n,E)}this.INSTANCES.push(r),h(`.${a.message}`).appendChild(r),this._autoClose(r,e,t)}_setMainTemplate(s){const e=m("div"),t=`
        <div class="${a.messageChild}-content ${a.messageChild}-content-${s}">
            <div class="${a.messageChild}-content-text">
                <div class="${a.message}-${s}">
                    <i class="${a.icon}"></i>
                    <span id="${a.messageChild}-text"></span>
                </div>
            </div>
        </div>
      `;return e.dataset.thisName=`${A++}`,e.className=`${a.message}-notice`,b(e,t),v(e,{inOrOut:"in",enterCls:g,rmCls:!0,timeout:250}),e}_setIcon(s,e){const t=e.querySelector(`.${a.icon}`);s==="loading"&&t.classList.add("rab-load-loop"),t.classList.add(`${a.icon}-${L[s]}`)}_setContent(s,e){const t=s.querySelector(`#${a.messageChild}-text`);typeof e=="string"?$(t,e,!1):typeof e=="object"&&e.content&&$(t,e.content,e.dangerouslyUseHTMLString)}_setKey(s,e){!e||e&&!_(e)&&!d(e)||s.setAttribute(`${S}-key`,`${e}`)}_setClosable(s,e,t,r){if(!t||t&&!C(t))return;const n=`
        <a class="${a.messageChild}-close">
          <i class="${a.icon} ${a.icon}-ios-close"></i>
        </a>
        `;s.classList.add(`${a.messageChild}-closable`),e.insertAdjacentHTML("beforeend",n),this._handleClose(s,r)}_handleClose(s,e){const t=s.querySelector(`.${a.messageChild}-close`);M(t,"click",()=>{this._destroy(s),e&&y(e)})}_setBackground(s,e,t){!t||t&&!C(t)||(s.classList.add(`${a.messageChild}-with-background`),e.classList.add(`${a.messageChild}-content-background`))}_autoAddZIndex(){c++,l(h(`.${a.message}`),"zIndex",`${c}`)}_autoClose(s,e,t){if(t||t===0||!e){if(t===0)return;setTimeout(()=>{this._destroy(s)},t*1e3)}else typeof e=="object"&&e.duration&&setTimeout(()=>{this._destroy(s)},e.duration*1e3)}_destroy(s){p(s,{duration:.1,clsEnter:g,clsLeave:u}),this.INSTANCES.splice(Number(s.dataset.thisName),1)}}const i={top:24,duration:3};class B extends w{constructor(){super(),this.VERSION="2.0",setTimeout(()=>this._init(i.top),0)}info(s){return this._create("info",s,i.duration),o(i.duration,s)}success(s){return this._create("success",s,i.duration),o(i.duration,s)}warning(s){return this._create("warning",s,i.duration),o(i.duration,s)}error(s){return this._create("error",s,i.duration),o(i.duration,s)}loading(s){return this._create("loading",s,i.duration),o(i.duration,s)}config(s){s.top&&d(s.top)&&(i.top=s.top),(s.duration&&d(s.duration)||s.duration===0)&&(i.duration=s.duration)}destroy(s){s&&(_(s)||d(s))?x({key:s,duration:.1,prefixKey:S,clsLeave:u}):(this.INSTANCES.forEach(e=>{p(e,{duration:.1,clsLeave:u})}),this.INSTANCES.length=0)}}const K=new B;var F=K;export{F as M};
