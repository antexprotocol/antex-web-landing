import{u as w,j as t,t as r}from"./bundle-mjs.DQoj8Pxq.js";import{r as c}from"./index.CGj_12n1.js";import{K as j}from"./splines.fV-WR_p3.js";import"./i18nInstance.CHFDjdcJ.js";/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),p=s=>{const e=N(s);return e.charAt(0).toUpperCase()+e.slice(1)},f=(...s)=>s.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),C=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=c.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:d="",children:i,iconNode:o,...l},m)=>c.createElement("svg",{ref:m,...A,width:e,height:e,stroke:s,strokeWidth:a?Number(n)*24/Number(e):n,className:f("lucide",d),...!i&&!C(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,v])=>c.createElement(h,v)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(s,e)=>{const n=c.forwardRef(({className:a,...d},i)=>c.createElement(k,{ref:i,iconNode:e,className:f(`lucide-${y(p(s))}`,`lucide-${s}`,a),...d}));return n.displayName=p(s),n};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],u=g("chevron-left",z);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],b=g("chevron-right",L),x=[{title:"web.home.trade.advantages.transparent.title",desc:"web.home.trade.advantages.transparent"},{title:"web.home.trade.advantages.lowLatency.title",desc:"web.home.trade.advantages.lowLatency"},{title:"web.home.trade.advantages.decentralization.title",desc:"web.home.trade.advantages.decentralization"},{title:"web.home.trade.advantages.lowFees.title",desc:"web.home.trade.advantages.lowFees"},{title:"web.home.trade.advantages.multiChainAssets.title",desc:"web.home.trade.advantages.multiChainAssets"},{title:"web.home.trade.advantages.userFriendly.title",desc:"web.home.trade.advantages.userFriendly"}];function R(){const{t:s}=w(),[e,n]=c.useState(0),[a,d]=c.useState(!1),i=x[e],o=e,l=m=>{d(!0),setTimeout(()=>{n(m),setTimeout(()=>{d(!1)},100)},200)};return t.jsxs("section",{id:"feature-section",className:"snap-start relative md:h-screen bg-black ",children:[t.jsxs("div",{className:r("md:h-screen px-4 md:px-[120px] md:py-[80px] flex flex-col md:flex-row md:justify-between justify-center items-center gap-6 "),children:[t.jsxs("div",{className:"max-w-screen md:max-w-[566px]",children:[t.jsx("h2",{className:r("text-center md:text-left text-[24px] md:text-[44px] font-bold text-transparent mb-4 bg-clip-text bg-gradient-to-r from-0% from-white via-brand via-46.43% to-brand transition-all duration-100",a?"opacity-0":"opacity-100"),children:s(i.title)}),t.jsx("h3",{className:r("text-sm leading-[16px] md:text-2xl text-t3 md:leading-[140%] md:min-h-[238px] md:mb-14 transition-all duration-100 delay-50",a?"opacity-0":"opacity-100"),children:s(i.desc)}),t.jsxs("div",{className:r("pc space-x-4 pager"),children:[t.jsx("button",{className:r(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer",o===0?"border border-b1 pointer-events-none":" bg-brand hover:bg-brand/80"),onClick:()=>{l(e-1)},children:t.jsx(u,{className:"size-6"})}),t.jsx("button",{className:r(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer",o===x.length-1?"border border-b1 pointer-events-none":" bg-brand hover:bg-brand/80"),onClick:()=>{l(e+1)},children:t.jsx(b,{className:"size-6"})})]})]}),t.jsx("div",{className:r("size-[16rem] md:size-[512px] md:mr-10 inline-flex justify-center items-center bg-p2 rounded-[30px] select-none transition-all duration-100 delay-100",a?"opacity-0":"opacity-100"),children:o==0?t.jsx(j,{className:"z-[1]"}):t.jsx("img",{src:`/home/feature-${o+1}.png`,alt:s(i.title),width:320,height:320})}),t.jsxs("div",{className:r("sp space-x-4 pager"),children:[t.jsx("button",{className:r(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer",o===0?"border border-b1 pointer-events-none":" bg-brand hover:bg-brand/80"),onClick:()=>{l(e-1)},children:t.jsx(u,{className:"size-6"})}),t.jsx("button",{className:r(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer",o===x.length-1?"border border-b1 pointer-events-none":" bg-brand hover:bg-brand/80"),onClick:()=>{l(e+1)},children:t.jsx(b,{className:"size-6"})})]})]},o),t.jsx("div",{className:"pc absolute inset-0 w-full h-full inline-flex justify-end items-center pointer-events-none",children:t.jsx("div",{className:"absolute right-[120px] inset-y-0 w-10 h-full  pointer-events-auto inline-flex flex-col justify-center items-end",children:t.jsxs("div",{className:"w-fit h-fit relative inline-flex flex-col gap-1 justify-center items-end",children:[x.map((m,h)=>t.jsx("div",{className:r("w-[2px] h-15 bg-t5")},h)),t.jsx("div",{className:"w-[2px] h-15 bg-brand transition-all absolute right-0",style:{top:e*64}})]})})})]})}export{R as default};
