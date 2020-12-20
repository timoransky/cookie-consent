var CookieConsentDialog;CookieConsentDialog=(()=>{"use strict";var e={109:(e,t,n)=>{n.d(t,{default:()=>d});const a={template:"popup",position:"right",type:"checkbox",prefix:"cookie-consent",append:!0,appendDelay:500,acceptAllButton:!1,labels:{title:"Cookies & Privacy",description:'<p>This site makes use of third-party cookies. Read more in our <a href="/privacy-policy">privacy policy</a>.</p>',policyLink:{href:null,text:"More info"},settingsLink:{text:"Edit settings"},button:{default:"Save preferences",acceptAll:"Accept all"},aria:{button:"Confirm cookie settings",tabList:"List with cookie types",tabToggle:"Toggle cookie tab"}}},i=(e,t)=>t.replace(/\[(\w+)\]/g,".$1").replace(/^\./,"").split(".").reduce(((e,t)=>{if(e&&t in e)return e[t]}),e),r=e=>{const t=document.createElement("div");return t.innerHTML=e,t.children.length?t.firstElementChild:void 0},l=()=>{const e={},t={},n=(n,a)=>{e[n]?e[n].forEach((e=>e(a))):t[n]=[...t[n]||[],a]};return{add:(a,i)=>{e[a]=[...e[a]||[],i],t[a]&&(t[a].forEach((e=>n(a,e))),delete t[a])},dispatch:n,listeners:e}},o=({config:e,preferences:t})=>{const n=(({config:e,preferences:t})=>{const n=l(),a=e.get("type"),i=e.get("prefix"),o=({id:t,label:n,description:r,required:l,checked:o,collapsible:s,accepted:c},d)=>{const p=void 0!==c?c:!0===l?l:o;return s?`\n      <li role="presentation">\n        <header class="${i}__tab">\n          <label class="${i}__option" data-required="${l}">\n            <input type="${"radio"===a?"radio":"checkbox"}" name="${i}-input" value="${t}" ${p?"checked":""} ${l&&"radio"!==a?"disabled":""}>\n            <span>${n}</span>\n          </label>\n          <a\n            class="${i}__tab-toggle"\n            role="tab"\n            id="${i}-tab-${d}"\n            href="#${i}-tabpanel-${d}"\n            aria-controls="${i}-tabpanel-${d}"\n            aria-selected="false"\n            aria-label="${e.get("labels.aria.tabToggle")}">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 16"><path d="M21.5.5l3 3.057-12 11.943L.5 3.557 3.5.5l9 9z"/></svg>\n          </a>\n        </header>\n        <div\n          class="${i}__tab-panel"\n          role="tabpanel"\n          id="${i}-tabpanel-${d}"\n          aria-labelledby="${i}-tab-${d}"\n          aria-hidden="true">\n          <div class="${i}__tab-description">\n            ${r}\n          </div>\n        </div>\n      </li>\n    `:`\n        <li role="presentation">\n        <header class="${i}__tab">\n          <label class="${i}__option" data-required="${l}">\n            <input type="${"radio"===a?"radio":"checkbox"}" name="${i}-input" value="${t}" ${p?"checked":""} ${l&&"radio"!==a?"disabled":""}>\n            <span>\n              ${n} <br>\n              <small>\n                  ${r}\n              </small>\n            </span>\n          </label>\n        </header>\n        <div\n          class="${i}__tab-panel"\n          role="tabpanel"\n          id="${i}-tabpanel-${d}"\n          aria-labelledby="${i}-tab-${d}"\n          aria-hidden="true">\n          <div class="${i}__tab-description">\n            ${r}\n          </div>\n        </div>\n      </li>\n      `},s=r((()=>{const n=(e.get("cookies",!0)||[]).map((e=>({...e,accepted:t.get(e.id)?t.get(e.id).accepted:void 0})));return`\n      <ul class="${i}__tab-list" role="tablist" aria-label="${e.get("labels.aria.tabList")}">\n        ${n.map(o).join("")}\n      </ul>\n    `})());return{init(){(()=>{const e=[...s.querySelectorAll('[role="tab"]')],t=[...s.querySelectorAll('[role="tabpanel"]')];e.forEach((n=>{n.addEventListener("click",(a=>{a.preventDefault();const i="true"===n.getAttribute("aria-selected")?null:n;(({tabs:e,panels:t,targetTab:n})=>{const a=n?n.getAttribute("aria-controls"):"";e.forEach((e=>e.setAttribute("aria-selected",e===n))),t.forEach((e=>e.setAttribute("aria-hidden",a!==e.id)))})({tabs:e,panels:t,targetTab:i})}))}))})()},on:n.add,element:s,getValues:()=>[...s.querySelectorAll("input")].map((e=>({id:e.value,accepted:e.checked})))}})({config:e,preferences:t}),a=l(),i=e.get("template"),o=e.get("position"),s=e.get("type"),c=e.get("prefix"),d=e.get("acceptAllButton")&&!t.hasPreferences(),p=r((()=>{let t="";"banner"===i?t=`${c}--banner ${c}--${"top"===o?"top":"bottom"}`:"overlay"===i?t=`${c}--overlay`:"popup"===i&&(t=`${c}--popup ${c}--${"left"===o?"left":"right"}`);let n=e.get("labels.policyLink.href")?`<a href="${e.get("labels.policyLink.href")}" target="_blank">${e.get("labels.policyLink.text")}</a>`:"",a=e.get("collapsible")?`<a id="${c}-settings" href="javascript:void(0);">${e.get("labels.settingsLink.text")}</a>`:"";return`\n      <aside id="${c}" class="${c} ${t} js-cookie-bar" role="dialog" aria-live="polite" aria-describedby="${c}-description" aria-hidden="true" tabindex="0">\n        \x3c!--googleoff: all--\x3e\n        <div class="${c}__inner">\n          <form>\n            <header class="${c}__header" id="${c}-description">\n              <h1>${e.get("labels.title")}</h1>\n              ${e.get("labels.description")}\n              <div class="${c}__links">\n                  ${n}\n                  ${a}\n              </div>\n            </header>\n              \n            <button class="${c}__button" aria-label="${e.get("labels.aria.button")}">\n              <span>${e.get("labels.button.default")}</span>\n            </button>\n          </form>\n        </div>\n        \x3c!--googleon: all--\x3e\n      </aside>\n    `})()),u=p.querySelector("form"),b=u.querySelector("button"),g=p.querySelector(`#${c}-settings`),h=()=>p.setAttribute("aria-hidden","true"),$=t=>{t.preventDefault();const i=(t=>{if("radio"===s&&!t.find((e=>e.accepted)))return d?(t[0].accepted=!0,t):[];const n=e.get("cookies").filter((e=>e.required)).length,a=t.filter((e=>e.accepted)).length;return!d||"checkbox"!==s||a>n?t:t.map((e=>({...e,accepted:!0})))})(n.getValues());i&&(a.dispatch("submit",i),h())},f=e=>{b.textContent=e};return{init(){n.init(),u.insertBefore(n.element,u.lastElementChild),u.addEventListener("submit",$),d&&(f(e.get("labels.button.acceptAll")),u.addEventListener("change",(t=>{f(e.get("labels.button.default"))}))),g&&(n.element.classList.add("hidden"),g.addEventListener("click",(function(e){e.preventDefault(),n.element.classList.toggle("hidden"),n.element.classList.toggle("visible")})))},on:a.add,show:()=>p.setAttribute("aria-hidden","false"),hide:h,element:p}},s=e=>{const t=e=>{e.style.display="",e.removeAttribute("aria-hidden"),e.removeAttribute("hidden")},n=e=>{e.style.display="none",e.setAttribute("aria-hidden","true")};return{toggle:a=>{(e.get("cookies")||[]).forEach((e=>{const i=a.getState(e.id);(({id:e,accepted:t})=>{t&&[...document.documentElement.querySelectorAll(`script[data-cookie-consent="${e}"]`)].forEach((e=>{(e=>{const t=document.createElement("script");e.src?t.src=e.src:t.innerHTML=e.innerHTML,document.head.appendChild(t)})(e),e.parentNode.removeChild(e)}))})({id:e.id,accepted:i}),(({id:e,accepted:a})=>{const i=document.body.querySelectorAll(`[data-cookie-consent-accepted="${e}"]`),r=document.body.querySelectorAll(`[data-cookie-consent-rejected="${e}"]`);[...i].forEach((e=>a?t(e):n(e))),[...r].forEach((e=>a?n(e):t(e)))})({id:e.id,accepted:i}),(({id:e,accepted:t})=>{[...document.body.querySelectorAll(`iframe[data-cookie-consent="${e}"]`)].forEach((e=>t?(e=>{const t=e.getAttribute("data-src");t&&(e.setAttribute("src",t),e.removeAttribute("data-src"))})(e):(e=>{const t=e.getAttribute("src");t&&(e.setAttribute("data-src",t),e.removeAttribute("src"))})(e)))})({id:e.id,accepted:i})}))}}},c=()=>{const e=(()=>{const e="localstorage-test-key";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()?window.localStorage:{attributes:{},setItem(e,t){this.attributes[e]=t},getItem(e){return this.attributes[e]}};return{get:(t,n)=>e.getItem(t,n),set:(t,n)=>e.setItem(t,n),has:t=>null!==e.getItem(t)}},d=e=>{"object"==typeof e&&Object.keys(e).length||console.warn("No settings specified.");const t=(e=>({get:(t,n=!1)=>{const r=i(e,t);if(r||!n)return void 0===r?i(a,t):r;console.warn(`Required setting '${t}' is missing.`)}}))(e),n=(e=>{const t=`${e}-preferences`,n=c(),a=()=>JSON.parse(n.get(t))||[],i=e=>a().find((t=>t.id===e));return{get:i,getAll:a,getState:e=>i(e)&&i(e).accepted,hasPreferences:()=>n.has(t)&&a().length,store:(e=[])=>n.set(t,JSON.stringify(e))}})(t.get("prefix")),r=o({config:t,preferences:n}),d=s(t),p=l();if(d.toggle(n),r.init(),r.on("submit",(e=>{n.store(e),p.dispatch("update",n.getAll()),d.toggle(n)})),!1!==t.get("append")){const e=document.querySelector("main")||document.body.firstElementChild;document.body.insertBefore(r.element,e)}return n.hasPreferences()?p.dispatch("update",n.getAll()):window.setTimeout((()=>r.show()),t.get("appendDelay")),{getDialog:()=>r.element,hideDialog:r.hide,showDialog:r.show,isAccepted:n.getState,getPreferences:n.getAll,on:p.add}}}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(109)})().default;