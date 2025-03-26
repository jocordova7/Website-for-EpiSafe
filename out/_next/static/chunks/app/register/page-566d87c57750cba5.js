(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{310:(e,r,s)=>{"use strict";s.d(r,{ToastProvider:()=>i,d:()=>l});var t=s(5155),a=s(2115);let o=e=>{let{message:r,type:s,duration:o=5e3,onClose:n,show:i}=e,[l,d]=(0,a.useState)(i);return((0,a.useEffect)(()=>{if(d(i),i&&o>0){let e=setTimeout(()=>{d(!1),n&&n()},o);return()=>{clearTimeout(e)}}},[i,o,n]),l)?(0,t.jsxs)("div",{className:"".concat("fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center max-w-sm transform transition-all duration-300"," ").concat({success:"bg-[#00A878] text-white",error:"bg-[#FF6B6B] text-white",warning:"bg-[#FFC107] text-gray-900",info:"bg-[#2C3E50] text-white"}[s]," ").concat(l?"translate-y-0 opacity-100":"translate-y-10 opacity-0"),role:"alert","aria-live":"assertive",children:[(()=>{switch(s){case"success":return(0,t.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})});case"error":return(0,t.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})});case"warning":return(0,t.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})});case"info":return(0,t.jsx)("svg",{className:"w-6 h-6 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}})(),(0,t.jsx)("div",{className:"mr-3 flex-grow",children:r}),(0,t.jsx)("button",{onClick:()=>{d(!1),n&&n()},className:"text-white focus:outline-none","aria-label":"Close notification",children:(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}):null},n=(0,a.createContext)(void 0);function i(e){let{children:r}=e,[s,i]=(0,a.useState)([]),l=(0,a.useCallback)(function(e,r){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,t=Math.random().toString(36).substring(2,9);return i(a=>[...a,{id:t,message:e,type:r,duration:s}]),s!==1/0&&setTimeout(()=>{d(t)},s),t},[]),d=(0,a.useCallback)(e=>{i(r=>r.filter(r=>r.id!==e))},[]);return(0,t.jsxs)(n.Provider,{value:{showToast:l,hideToast:d},children:[r,(0,t.jsx)("div",{className:"toast-container","aria-live":"polite","aria-atomic":"true",children:s.map((e,r)=>(0,t.jsx)("div",{style:{position:"fixed",bottom:"".concat(80*r+16,"px"),right:"16px",zIndex:9999-r},children:(0,t.jsx)(o,{message:e.message,type:e.type,duration:e.duration,onClose:()=>d(e.id),show:!0})},e.id))})]})}function l(){let e=(0,a.useContext)(n);if(void 0===e)throw Error("useToast must be used within a ToastProvider");return e}},1851:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>c});var t=s(5155),a=s(2115),o=s(6874),n=s.n(o),i=s(5695),l=s(310),d=s(6766);function c(){let[e,r]=(0,a.useState)(!1),[s,o]=(0,a.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",userType:"patient",agreeToTerms:!1}),[c,m]=(0,a.useState)(!1),[u,h]=(0,a.useState)({}),x=(0,i.useRouter)(),{showToast:p}=(0,l.d)(),g=e=>{let{name:r,value:s,type:t}=e.target,a="checkbox"===t?e.target.checked:void 0;o(e=>({...e,[r]:"checkbox"===t?a:s})),u[r]&&h(e=>{let s={...e};return delete s[r],s})},f=()=>{let e={};return s.firstName.trim()||(e.firstName="First name is required"),s.lastName.trim()||(e.lastName="Last name is required"),s.email.trim()?/\S+@\S+\.\S+/.test(s.email)||(e.email="Email is invalid"):e.email="Email is required",s.password?s.password.length<8&&(e.password="Password must be at least 8 characters"):e.password="Password is required",s.password!==s.confirmPassword&&(e.confirmPassword="Passwords do not match"),s.agreeToTerms||(e.agreeToTerms="You must agree to the terms and conditions"),h(e),0===Object.keys(e).length},w=async e=>{if(e.preventDefault(),!f()){p("Please correct the errors in the form","error");return}try{r(!0),await new Promise(e=>setTimeout(e,2e3)),localStorage.setItem("auth_token","new_user_token_12345"),localStorage.setItem("user_role",s.userType),localStorage.setItem("user_name","".concat(s.firstName," ").concat(s.lastName)),p("Account created successfully","success"),x.push("/onboarding")}catch(e){p("Error creating account","error"),console.error("Registration error:",e)}finally{r(!1)}};return(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 py-12",children:(0,t.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)("div",{className:"h-16 w-16 relative",children:(0,t.jsx)(d.default,{src:"/logo.png",alt:"SeizureGuard Logo",fill:!0,className:"object-contain"})})}),(0,t.jsx)("h2",{className:"mt-6 text-3xl font-bold text-[#2C3E50] dark:text-white",children:"Create an account"}),(0,t.jsxs)("p",{className:"mt-2 text-sm text-[#6B7280] dark:text-gray-400",children:["Already have an account?"," ",(0,t.jsx)(n(),{href:"/login",className:"font-medium text-[#00A878] hover:text-[#008F63]",children:"Sign in"})]})]}),(0,t.jsx)("div",{className:"mt-8 bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10",children:(0,t.jsxs)("form",{className:"space-y-6",onSubmit:w,children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"firstName",className:"block text-sm font-medium text-[#2C3E50] dark:text-white",children:"First name"}),(0,t.jsxs)("div",{className:"mt-1",children:[(0,t.jsx)("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0,value:s.firstName,onChange:g,className:"appearance-none block w-full px-3 py-2 border ".concat(u.firstName?"border-red-500":"border-gray-300 dark:border-gray-700"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white")}),u.firstName&&(0,t.jsx)("p",{className:"mt-1 text-sm text-red-500",children:u.firstName})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"lastName",className:"block text-sm font-medium text-[#2C3E50] dark:text-white",children:"Last name"}),(0,t.jsxs)("div",{className:"mt-1",children:[(0,t.jsx)("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0,value:s.lastName,onChange:g,className:"appearance-none block w-full px-3 py-2 border ".concat(u.lastName?"border-red-500":"border-gray-300 dark:border-gray-700"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white")}),u.lastName&&(0,t.jsx)("p",{className:"mt-1 text-sm text-red-500",children:u.lastName})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-[#2C3E50] dark:text-white",children:"Email address"}),(0,t.jsxs)("div",{className:"mt-1",children:[(0,t.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:s.email,onChange:g,className:"appearance-none block w-full px-3 py-2 border ".concat(u.email?"border-red-500":"border-gray-300 dark:border-gray-700"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white"),placeholder:"you@example.com"}),u.email&&(0,t.jsx)("p",{className:"mt-1 text-sm text-red-500",children:u.email})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"userType",className:"block text-sm font-medium text-[#2C3E50] dark:text-white",children:"I am a:"}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsxs)("select",{id:"userType",name:"userType",value:s.userType,onChange:g,className:"appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white",children:[(0,t.jsx)("option",{value:"patient",children:"Patient"}),(0,t.jsx)("option",{value:"caregiver",children:"Caregiver"}),(0,t.jsx)("option",{value:"healthcare",children:"Healthcare Professional"})]})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-[#2C3E50] dark:text-white",children:"Password"}),(0,t.jsxs)("div",{className:"mt-1 relative",children:[(0,t.jsx)("input",{id:"password",name:"password",type:c?"text":"password",required:!0,value:s.password,onChange:g,className:"appearance-none block w-full px-3 py-2 border ".concat(u.password?"border-red-500":"border-gray-300 dark:border-gray-700"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white"),placeholder:"••••••••"}),(0,t.jsx)("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>m(!c),children:c?(0,t.jsxs)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-1.49 3.055m-3.423.82l-1.342 1.341a3 3 0 01-4.243-4.243L12.122 9.88"}),(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 9l0 0M15 9l0 0M15 15l0 0M9 15l0 0"})]}):(0,t.jsxs)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}),u.password&&(0,t.jsx)("p",{className:"mt-1 text-sm text-red-500",children:u.password})]}),(0,t.jsx)("p",{className:"mt-1 text-sm text-[#6B7280] dark:text-gray-400",children:"Must be at least 8 characters"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-[#2C3E50] dark:text-white",children:"Confirm password"}),(0,t.jsxs)("div",{className:"mt-1 relative",children:[(0,t.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:c?"text":"password",required:!0,value:s.confirmPassword,onChange:g,className:"appearance-none block w-full px-3 py-2 border ".concat(u.confirmPassword?"border-red-500":"border-gray-300 dark:border-gray-700"," rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white"),placeholder:"••••••••"}),u.confirmPassword&&(0,t.jsx)("p",{className:"mt-1 text-sm text-red-500",children:u.confirmPassword})]})]}),(0,t.jsxs)("div",{className:"flex items-start",children:[(0,t.jsx)("div",{className:"flex items-center h-5",children:(0,t.jsx)("input",{id:"agreeToTerms",name:"agreeToTerms",type:"checkbox",checked:s.agreeToTerms,onChange:g,className:"h-4 w-4 text-[#00A878] focus:ring-[#00A878] border-gray-300 rounded ".concat(u.agreeToTerms?"border-red-500":"")})}),(0,t.jsxs)("div",{className:"ml-3 text-sm",children:[(0,t.jsxs)("label",{htmlFor:"agreeToTerms",className:"font-medium text-[#6B7280] dark:text-gray-300",children:["I agree to the"," ",(0,t.jsx)(n(),{href:"/terms",className:"text-[#00A878] hover:text-[#008F63]",children:"Terms of Service"})," ","and"," ",(0,t.jsx)(n(),{href:"/privacy",className:"text-[#00A878] hover:text-[#008F63]",children:"Privacy Policy"})]}),u.agreeToTerms&&(0,t.jsx)("p",{className:"mt-1 text-sm text-red-500",children:u.agreeToTerms})]})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("button",{type:"submit",disabled:e,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00A878] hover:bg-[#008F63] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A878] disabled:opacity-50 disabled:cursor-not-allowed",children:[e?(0,t.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):null,e?"Creating account...":"Create account"]})})]})})]})})}},5695:(e,r,s)=>{"use strict";var t=s(8999);s.o(t,"useRouter")&&s.d(r,{useRouter:function(){return t.useRouter}})},9679:(e,r,s)=>{Promise.resolve().then(s.bind(s,1851))}},e=>{var r=r=>e(e.s=r);e.O(0,[874,766,441,684,358],()=>r(9679)),_N_E=e.O()}]);