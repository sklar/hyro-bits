/** Components v6.6.1 */
import{css as f}from"@emotion/react";import y from"@emotion/styled";import c,{forwardRef as u}from"react";var T=u(({align:r,as:t="div",block:e,columns:i,flow:d,gap:n,justify:o,max:m="1fr",min:s="0px",sizing:l="auto-fit",...a},p)=>{let g={align:r,block:e,columns:i,gap:n,justify:o,max:m,min:s,sizing:l,...a};return c.createElement(x,{as:t,ref:p,...g})}),x=y.div(f`
    & > * {
      min-width: 0;
    }
  `,({align:r,block:t,columns:e,flow:i,gap:d,justify:n,max:o,min:m,sizing:s})=>({alignItems:r,display:`${t?"grid":"inline-grid"}`,gap:d,gridAutoFlow:i,gridTemplateColumns:`${e||`repeat(${s}, minmax(min(100%, ${m}), ${o}))`}`,justifyItems:n}));export{T as Grid};
//# sourceMappingURL=index.js.map