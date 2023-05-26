/** Components v6.11.0 */
"use strict";var I=Object.create;var i=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var D=(a,e)=>{for(var t in e)i(a,t,{get:e[t],enumerable:!0})},m=(a,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!N.call(a,r)&&r!==t&&i(a,r,{get:()=>e[r],enumerable:!(s=L(e,r))||s.enumerable});return a};var z=(a,e,t)=>(t=a!=null?I(E(a)):{},m(e||!a||!a.__esModule?i(t,"default",{value:a,enumerable:!0}):t,a)),u=a=>m(i({},"__esModule",{value:!0}),a);var T={};D(T,{Spinner:()=>f,spinner:()=>p});module.exports=u(T);var x=z(require("@emotion/styled")),n=z(require("react"));var M={XSMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",XLARGE:"xl"};var o=require("@emotion/react"),h=o.keyframes`
  0%  { opacity: 0 }
  100%  { opacity: 1 }
`,p=o.css`
  --size: ;

  aspect-ratio: 1;
  color: var(--color);
  display: inline-grid;
  flex-shrink: 0;
  place-content: center;
  width: var(--size);

  &[data-size='xs'],
  &[data-size='sm'] {
    --size: 16px;
  }
  &[data-size='md'] {
    --size: 20px;
  }
  &[data-size='lg'] {
    --size: 24px;
  }
  &[data-size='xl'] {
    --size: 32px;
  }

  svg {
    aspect-ratio: inherit;
    display: block;
    width: inherit;
  }

  path {
    animation: ${h} var(--duration) infinite reverse steps(var(--segments));
    animation-delay: calc((var(--index) - var(--segments)) * var(--duration) / var(--segments));
  }
`;var d={["BOLD"]:["M6.956 3.13a1.043 1.043 0 0 0 2.087 0V1.043a1.043 1.043 0 0 0-2.087 0V3.13z","M12.9 2.024a1.035 1.035 0 0 0-.737.305l-1.475 1.475a1.044 1.044 0 1 0 1.475 1.477l1.476-1.475a1.043 1.043 0 0 0-.739-1.782z","M16 8a1.043 1.043 0 0 0-1.044-1.043H12.87a1.043 1.043 0 1 0 0 2.087h2.087A1.043 1.043 0 0 0 16 8z","M10.816 10.787a1.044 1.044 0 0 0 0 1.475l1.477 1.476a1.046 1.046 0 0 0 1.48-1.477l-1.479-1.478a1.045 1.045 0 0 0-1.478.004z","M6.956 14.957a1.043 1.043 0 0 0 2.087 0v-2.088a1.043 1.043 0 0 0-2.087 0v2.088z","M4.492 10.451a1.036 1.036 0 0 0-.737.305l-1.477 1.476a1.043 1.043 0 0 0 1.479 1.472l1.476-1.476a1.043 1.043 0 0 0-.738-1.78l-.003.003z","M0 8a1.043 1.043 0 0 0 1.043 1.043H3.13a1.043 1.043 0 1 0 0-2.086H1.043A1.043 1.043 0 0 0 0 8z","M5.406 3.9 3.929 2.424a1.071 1.071 0 0 0-1.475 0 1.043 1.043 0 0 0 0 1.476L3.93 5.375a1.037 1.037 0 0 0 .738.305 1.043 1.043 0 0 0 .738-1.78z"],["MINI"]:["M7.217 4.348a.783.783 0 0 0 1.565 0V2.783a.783.783 0 1 0-1.565 0v1.565z","M11.675 3.518a.776.776 0 0 0-.553.229l-1.106 1.106a.782.782 0 1 0 1.107 1.107l1.106-1.106a.783.783 0 0 0-.554-1.336z","M14 8a.783.783 0 0 0-.783-.783h-1.565a.782.782 0 1 0 0 1.566h1.565A.783.783 0 0 0 14 8z","M10.112 10.09a.783.783 0 0 0 0 1.107l1.107 1.106a.784.784 0 0 0 1.111-1.107l-1.11-1.109a.782.782 0 0 0-1.108.003z","M7.217 13.217a.783.783 0 0 0 1.565 0v-1.565a.783.783 0 1 0-1.565 0v1.565z","M5.369 9.839a.776.776 0 0 0-.553.228l-1.107 1.107a.783.783 0 0 0 1.108 1.104l1.108-1.107a.783.783 0 0 0-.554-1.335l-.002.003z","M2 8a.783.783 0 0 0 .783.783h1.565a.783.783 0 0 0 0-1.566H2.783A.783.783 0 0 0 2 8z","M6.054 4.925 4.947 3.818a.804.804 0 0 0-1.107 0 .783.783 0 0 0 0 1.107L4.948 6.03a.777.777 0 0 0 .553.229.783.783 0 0 0 .553-1.335z"]},f=(0,n.forwardRef)(({color:a="currentColor",duration:e=600,size:t="sm",style:s,...r},v)=>{let[g,c]=(0,n.useState)([]),A={"data-qa":"spinner"};return(0,n.useEffect)(()=>{t===M.XSMALL?c([...d["MINI"]]):c([...d["BOLD"]])},[t]),n.default.createElement(C,{"data-size":t,ref:v,...A,...r,style:{["--color"]:a,["--duration"]:`${e}ms`,...s}},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},g.map((S,l)=>n.default.createElement("path",{key:l,d:S,fill:"currentColor",style:{["--index"]:l+1}}))))}),C=x.default.span`
  --segments: 8;

  ${p};
`;0&&(module.exports={Spinner,spinner});
//# sourceMappingURL=index.js.map