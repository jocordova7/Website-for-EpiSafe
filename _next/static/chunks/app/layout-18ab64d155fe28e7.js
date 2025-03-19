(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{310:(e,t,r)=>{"use strict";r.d(t,{ToastProvider:()=>o,d:()=>l});var s=r(5155),n=r(2115);let i=e=>{let{message:t,type:r,duration:i=5e3,onClose:a,show:o}=e,[l,c]=(0,n.useState)(o);return((0,n.useEffect)(()=>{if(c(o),o&&i>0){let e=setTimeout(()=>{c(!1),a&&a()},i);return()=>{clearTimeout(e)}}},[o,i,a]),l)?(0,s.jsxs)("div",{className:"".concat("fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center max-w-sm transform transition-all duration-300"," ").concat({success:"bg-[#00A878] text-white",error:"bg-[#FF6B6B] text-white",warning:"bg-[#FFC107] text-gray-900",info:"bg-[#2C3E50] text-white"}[r]," ").concat(l?"translate-y-0 opacity-100":"translate-y-10 opacity-0"),role:"alert","aria-live":"assertive",children:[(()=>{switch(r){case"success":return(0,s.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})});case"error":return(0,s.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})});case"warning":return(0,s.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})});case"info":return(0,s.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}})(),(0,s.jsx)("div",{className:"mr-3 flex-grow",children:t}),(0,s.jsx)("button",{onClick:()=>{c(!1),a&&a()},className:"text-white focus:outline-none","aria-label":"Close notification",children:(0,s.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}):null},a=(0,n.createContext)(void 0);function o(e){let{children:t}=e,[r,o]=(0,n.useState)([]),l=(0,n.useCallback)(function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,s=Math.random().toString(36).substring(2,9);return o(n=>[...n,{id:s,message:e,type:t,duration:r}]),r!==1/0&&setTimeout(()=>{c(s)},r),s},[]),c=(0,n.useCallback)(e=>{o(t=>t.filter(t=>t.id!==e))},[]);return(0,s.jsxs)(a.Provider,{value:{showToast:l,hideToast:c},children:[t,(0,s.jsx)("div",{className:"toast-container","aria-live":"polite","aria-atomic":"true",children:r.map((e,t)=>(0,s.jsx)("div",{style:{position:"fixed",bottom:"".concat(80*t+16,"px"),right:"16px",zIndex:9999-t},children:(0,s.jsx)(i,{message:e.message,type:e.type,duration:e.duration,onClose:()=>c(e.id),show:!0})},e.id))})]})}function l(){let e=(0,n.useContext)(a);if(void 0===e)throw Error("useToast must be used within a ToastProvider");return e}},3206:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d597e8",variable:"__variable_d597e8"}},4174:(e,t,r)=>{Promise.resolve().then(r.bind(r,7370)),Promise.resolve().then(r.bind(r,8657)),Promise.resolve().then(r.bind(r,310)),Promise.resolve().then(r.t.bind(r,3206,23)),Promise.resolve().then(r.t.bind(r,9324,23))},7370:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(5155),n=r(2115),i=r(6766);let a=()=>{let[e,t]=(0,n.useState)(!1),[r,a]=(0,n.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("button",{className:"fixed bottom-8 right-8 ".concat("bg-[#FF6B6B]"," ").concat("hover:bg-[#FF5252]"," text-white p-4 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30 transition-all duration-200 transform hover:scale-105"),onClick:()=>{t(!0)},"aria-label":"Emergency Call Button",children:[(0,s.jsx)("span",{className:"sr-only",children:"Emergency Call"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-8 w-8","aria-hidden":"true",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})})]}),e&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",role:"dialog","aria-labelledby":"emergency-modal-title","aria-modal":"true",children:(0,s.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all",children:[(0,s.jsx)("h2",{id:"emergency-modal-title",className:"text-2xl font-bold text-[#2C3E50] dark:text-white mb-4",children:r?"Emergency Call Active":"Confirm Emergency Call"}),r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center justify-center mb-6",children:(0,s.jsx)("div",{className:"relative h-24 w-24 animate-pulse",children:(0,s.jsx)(i.default,{src:"/emergency-icon.png",alt:"Emergency call in progress",fill:!0,className:"object-contain"})})}),(0,s.jsx)("p",{className:"text-[#FF6B6B] font-semibold text-center mb-6",children:"Emergency call in progress..."}),(0,s.jsx)("p",{className:"text-[#6B7280] dark:text-gray-300 text-center mb-6",children:"Help is on the way. Stay with the patient and follow any instructions from emergency services."}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("button",{className:"px-4 py-2 bg-[#E6F7F3] dark:bg-[#1A2F26] text-[#2C3E50] dark:text-white rounded hover:bg-[#D1EFE7] dark:hover:bg-[#2A3F35] transition-colors",onClick:()=>{a(!1),t(!1)},children:"End Emergency Call"})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"text-[#6B7280] dark:text-gray-300 mb-6",children:"Are you sure you want to initiate an emergency call? This will alert emergency services and your designated contacts."}),(0,s.jsxs)("div",{className:"flex justify-end space-x-3",children:[(0,s.jsx)("button",{className:"px-4 py-2 bg-[#E6F7F3] dark:bg-[#1A2F26] text-[#2C3E50] dark:text-white rounded hover:bg-[#D1EFE7] dark:hover:bg-[#2A3F35] transition-colors",onClick:()=>t(!1),children:"Cancel"}),(0,s.jsx)("button",{className:"px-4 py-2 bg-[#FF6B6B] text-white rounded hover:bg-[#FF5252] transition-colors",onClick:()=>{a(!0)},children:"Confirm Emergency"})]})]})]})})]})}},8657:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(5155),n=r(2115),i=r(6874),a=r.n(i),o=r(6766);let l=e=>{let{href:t,text:r}=e;return(0,s.jsx)(a(),{href:t,className:"text-[#6B7280] hover:text-[#2C3E50] hover:bg-[#E6F7F3] dark:text-gray-300 dark:hover:text-white dark:hover:bg-[#1A2F26] px-3 py-2 rounded-md text-sm font-medium transition-colors","aria-current":"/"===t?"page":void 0,children:r})},c=e=>{let{href:t,text:r}=e;return(0,s.jsx)(a(),{href:t,className:"text-[#6B7280] hover:text-[#2C3E50] hover:bg-[#E6F7F3] dark:text-gray-300 dark:hover:text-white dark:hover:bg-[#1A2F26] block px-3 py-2 rounded-md text-base font-medium transition-colors","aria-current":"/"===t?"page":void 0,children:r})},d=()=>{let[e,t]=(0,n.useState)(!1);return(0,s.jsxs)("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md",children:[(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)(a(),{href:"/",className:"flex-shrink-0 flex items-center","aria-label":"Home",children:[(0,s.jsx)("div",{className:"h-10 w-10 relative",children:(0,s.jsx)(o.default,{src:"/logo.png",alt:"SeizureGuard Logo",fill:!0,className:"object-contain",priority:!0})}),(0,s.jsx)("span",{className:"ml-3 text-xl font-semibold text-[#2C3E50] dark:text-white",children:"SeizureGuard"})]})}),(0,s.jsx)("div",{className:"hidden md:block",children:(0,s.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[(0,s.jsx)(l,{href:"/",text:"Home"}),(0,s.jsx)(l,{href:"/monitoring",text:"Live Monitoring"}),(0,s.jsx)(l,{href:"/alerts",text:"Alerts"}),(0,s.jsx)(l,{href:"/records",text:"Medical Records"}),(0,s.jsx)(l,{href:"/settings",text:"Settings"})]})}),(0,s.jsx)("div",{className:"md:hidden",children:(0,s.jsxs)("button",{type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-[#6B7280] hover:text-[#2C3E50] hover:bg-[#E6F7F3] dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#1A2F26] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00A878]","aria-controls":"mobile-menu","aria-expanded":e,onClick:()=>{t(!e)},children:[(0,s.jsx)("span",{className:"sr-only",children:e?"Close menu":"Open menu"}),(0,s.jsx)("svg",{className:"".concat(e?"hidden":"block"," h-6 w-6"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),(0,s.jsx)("svg",{className:"".concat(e?"block":"hidden"," h-6 w-6"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})})]})}),(0,s.jsx)("div",{className:"".concat(e?"block":"hidden"," md:hidden"),id:"mobile-menu",children:(0,s.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[(0,s.jsx)(c,{href:"/",text:"Home"}),(0,s.jsx)(c,{href:"/monitoring",text:"Live Monitoring"}),(0,s.jsx)(c,{href:"/alerts",text:"Alerts"}),(0,s.jsx)(c,{href:"/records",text:"Medical Records"}),(0,s.jsx)(c,{href:"/settings",text:"Settings"})]})})]})}},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[455,874,766,441,684,358],()=>t(4174)),_N_E=e.O()}]);