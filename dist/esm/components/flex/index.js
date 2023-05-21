/** Components v6.10.0 */
import{css as y}from"@emotion/react";import s from"@emotion/styled";import x,{forwardRef as f}from"react";var T=f(({align:e,as:r="div",block:t,direction:n,gap:l,justify:o,wrap:i,...p},a)=>{let m={align:e,block:t,direction:n,gap:l,justify:o,...p};return x.createElement(d,{as:r,"data-wrap":i||null,ref:a,...m})}),d=s.div(({align:e,block:r,direction:t,gap:n,justify:l})=>({alignItems:e,display:`${r?"flex":"inline-flex"}`,flexDirection:t,gap:n,justifyContent:l}),y`
    &[data-wrap] {
      flex-wrap: wrap;
    }
  `);export{T as Flex};
//# sourceMappingURL=index.js.map