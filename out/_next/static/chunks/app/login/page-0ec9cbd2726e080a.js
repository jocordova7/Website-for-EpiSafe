(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{310:(e,r,t)=>{"use strict";t.d(r,{ToastProvider:()=>n,d:()=>l});var s=t(5155),a=t(2115);let o=e=>{let{message:r,type:t,duration:o=5e3,onClose:i,show:n}=e,[l,d]=(0,a.useState)(n);return((0,a.useEffect)(()=>{if(d(n),n&&o>0){let e=setTimeout(()=>{d(!1),i&&i()},o);return()=>{clearTimeout(e)}}},[n,o,i]),l)?(0,s.jsxs)("div",{className:"".concat("fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center max-w-sm transform transition-all duration-300"," ").concat({success:"bg-[#00A878] text-white",error:"bg-[#FF6B6B] text-white",warning:"bg-[#FFC107] text-gray-900",info:"bg-[#2C3E50] text-white"}[t]," ").concat(l?"translate-y-0 opacity-100":"translate-y-10 opacity-0"),role:"alert","aria-live":"assertive",children:[(()=>{switch(t){case"success":return(0,s.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})});case"error":return(0,s.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})});case"warning":return(0,s.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})});case"info":return(0,s.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}})(),(0,s.jsx)("div",{className:"mr-3 flex-grow",children:r}),(0,s.jsx)("button",{onClick:()=>{d(!1),i&&i()},className:"text-white focus:outline-none","aria-label":"Close notification",children:(0,s.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}):null},i=(0,a.createContext)(void 0);function n(e){let{children:r}=e,[t,n]=(0,a.useState)([]),l=(0,a.useCallback)(function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,s=Math.random().toString(36).substring(2,9);return n(a=>[...a,{id:s,message:e,type:r,duration:t}]),t!==1/0&&setTimeout(()=>{d(s)},t),s},[]),d=(0,a.useCallback)(e=>{n(r=>r.filter(r=>r.id!==e))},[]);return(0,s.jsxs)(i.Provider,{value:{showToast:l,hideToast:d},children:[r,(0,s.jsx)("div",{className:"toast-container","aria-live":"polite","aria-atomic":"true",children:t.map((e,r)=>(0,s.jsx)("div",{style:{position:"fixed",bottom:"".concat(80*r+16,"px"),right:"16px",zIndex:9999-r},children:(0,s.jsx)(o,{message:e.message,type:e.type,duration:e.duration,onClose:()=>d(e.id),show:!0})},e.id))})]})}function l(){let e=(0,a.useContext)(i);if(void 0===e)throw Error("useToast must be used within a ToastProvider");return e}},5695:(e,r,t)=>{"use strict";var s=t(8999);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})},8007:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(5155),a=t(2115),o=t(6874),i=t.n(o),n=t(5695),l=t(310),d=t(6766);function c(){let[e,r]=(0,a.useState)(!1),[t,o]=(0,a.useState)(""),[c,m]=(0,a.useState)(""),[u,x]=(0,a.useState)(!1),[h,g]=(0,a.useState)(!1),p=(0,n.useRouter)(),{showToast:f}=(0,l.d)(),v=async e=>{if(e.preventDefault(),!t||!c){f("Please fill in all fields","error");return}try{if(r(!0),await new Promise(e=>setTimeout(e,1500)),"demo@example.com"===t&&"password123"===c)localStorage.setItem("auth_token","demo_token_12345"),localStorage.setItem("user_role","patient"),f("Login successful","success"),p.push("/monitoring");else throw Error("Invalid credentials")}catch(e){f("Invalid email or password","error")}finally{r(!1)}};return(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"h-16 w-16 relative",children:(0,s.jsx)(d.default,{src:"/logo.png",alt:"SeizureGuard Logo",fill:!0,className:"object-contain"})})}),(0,s.jsx)("h2",{className:"mt-6 text-3xl font-bold text-[#2C3E50] dark:text-white",children:"Sign in to your account"}),(0,s.jsxs)("p",{className:"mt-2 text-sm text-[#6B7280] dark:text-gray-400",children:["Or"," ",(0,s.jsx)(i(),{href:"/register",className:"font-medium text-[#00A878] hover:text-[#008F63]",children:"create a new account"})]})]}),(0,s.jsxs)("div",{className:"mt-8 bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[(0,s.jsxs)("form",{className:"space-y-6",onSubmit:v,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-[#2C3E50] dark:text-white",children:"Email address"}),(0,s.jsx)("div",{className:"mt-1",children:(0,s.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:t,onChange:e=>o(e.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white",placeholder:"you@example.com"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-[#2C3E50] dark:text-white",children:"Password"}),(0,s.jsxs)("div",{className:"mt-1 relative",children:[(0,s.jsx)("input",{id:"password",name:"password",type:h?"text":"password",autoComplete:"current-password",required:!0,value:c,onChange:e=>m(e.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white",placeholder:"••••••••"}),(0,s.jsx)("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>g(!h),children:h?(0,s.jsxs)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-1.49 3.055m-3.423.82l-1.342 1.341a3 3 0 01-4.243-4.243L12.122 9.88"}),(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 9l0 0M15 9l0 0M15 15l0 0M9 15l0 0"})]}):(0,s.jsxs)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-[#00A878] focus:ring-[#00A878] border-gray-300 rounded dark:border-gray-700 dark:bg-gray-700",checked:u,onChange:e=>x(e.target.checked)}),(0,s.jsx)("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-[#6B7280] dark:text-gray-300",children:"Remember me"})]}),(0,s.jsx)("div",{className:"text-sm",children:(0,s.jsx)(i(),{href:"/forgot-password",className:"font-medium text-[#00A878] hover:text-[#008F63]",children:"Forgot your password?"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("button",{type:"submit",disabled:e,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00A878] hover:bg-[#008F63] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A878] disabled:opacity-50 disabled:cursor-not-allowed",children:[e?(0,s.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):null,e?"Signing in...":"Sign in"]})})]}),(0,s.jsxs)("div",{className:"mt-6",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,s.jsx)("div",{className:"w-full border-t border-gray-300 dark:border-gray-700"})}),(0,s.jsx)("div",{className:"relative flex justify-center text-sm",children:(0,s.jsx)("span",{className:"px-2 bg-white dark:bg-gray-800 text-[#6B7280] dark:text-gray-400",children:"Or continue with"})})]}),(0,s.jsxs)("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"button",className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-[#2C3E50] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600",children:(0,s.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"})})})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"button",className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-[#2C3E50] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600",children:(0,s.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",clipRule:"evenodd"})})})})]})]})]}),(0,s.jsx)("div",{className:"text-center mt-4",children:(0,s.jsxs)("p",{className:"text-xs text-[#6B7280] dark:text-gray-400",children:["By signing in, you agree to our"," ",(0,s.jsx)(i(),{href:"/terms",className:"text-[#00A878] hover:text-[#008F63]",children:"Terms of Service"})," ","and"," ",(0,s.jsx)(i(),{href:"/privacy",className:"text-[#00A878] hover:text-[#008F63]",children:"Privacy Policy"})]})})]})})}},8249:(e,r,t)=>{Promise.resolve().then(t.bind(t,8007))}},e=>{var r=r=>e(e.s=r);e.O(0,[874,766,441,684,358],()=>r(8249)),_N_E=e.O()}]);