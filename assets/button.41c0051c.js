import{$ as c,l as u,r as $,P as s,s as f,c as e,b as g,n as p,e as m}from"./index.5a6af0e1.js";import{v as d}from"./validComps.1ddad215.js";class a{constructor(){this.VERSION="1.1.1",this.COMPONENTS=c(`.${s.button}`,{all:!0}),this._getAllBtns(this.COMPONENTS)}config(t){const i=typeof t=="string"?c(t):t;return d(i,"button"),{get loading(){return this.loading},set loading(o){o&&!u(o)||a.prototype._setLoading(i,!1,o)}}}_getAllBtns(t){t.forEach(i=>{const{icon:o,loading:n}=this._attrs(i);this._setIcon(i,o),this._setLoading(i,!0,n),$(i,["icon","loading"])})}_setIcon(t,i){if(!!i)if(t.innerHTML===""){t.classList.add(`${s.button}-icon-only`);const o=`
              <i class="${s.icon} ${s.icon}-${i}"></i>
            `;f(t,o)}else{const o=e("i");o.className=`${s.icon} ${s.icon}-${i}`,t.prepend(o)}}_setLoading(t,i,o){var l;const n=t.querySelector(".rab-icon"),r=e("i");if(r.className=`rab-load-loop ${s.icon} ${s.icon}-loading-solid`,o)n&&g(n,"display","none"),t.innerHTML===""&&t.classList.add(`${s.button}-icon-only`),t.classList.add(`${s.button}-loading`),t.prepend(r);else{if(i)return;t.children[1]&&g(t.children[1],"display",""),t.classList.contains(`${s.button}-loading`)&&t.classList.remove(`${s.button}-loading`),t.classList.contains(`${s.button}-icon-only`)&&t.classList.remove(`${s.button}-icon-only`),(l=t.firstElementChild)==null||l.remove()}}_attrs(t){return{icon:p(t,"icon",""),loading:m(t,"loading")}}}var h=a;export{h as B};
