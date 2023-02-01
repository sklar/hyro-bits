/** Components v6.5.0 */
"use strict";var u=Object.create;var n=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var _=(e,r)=>{for(var t in r)n(e,t,{get:r[t],enumerable:!0})},T=(e,r,t,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of m(r))!N.call(e,o)&&o!==t&&n(e,o,{get:()=>r[o],enumerable:!(i=g(r,o))||i.enumerable});return e};var f=(e,r,t)=>(t=e!=null?u(v(e)):{},T(r||!e||!e.__esModule?n(t,"default",{value:e,enumerable:!0}):t,e)),y=e=>T(n({},"__esModule",{value:!0}),e);var S={};_(S,{Divider:()=>p,divider:()=>l,horizontal:()=>b,vertical:()=>R});module.exports=y(S);var A=f(require("@emotion/styled")),d=f(require("react"));var s=require("@emotion/react");var a={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},C=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(a),M=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(a),E={BLACK:a.black,CURRENT:a.current,TRANSPARENT:a.transparent,WHITE:a.white,...C,...M};var b=s.css`
  height: var(--size);
  margin-inline: var(--space);
`,R=s.css`
  margin-block: var(--space);
  width: var(--size);
`,l=s.css`
  --color: ${E.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${b};
  }
  &:is([data-divider='vertical']) {
    ${R};
  }

  [data-theme='dark'] & {
    --color: ${E.DARK_STROKE};
  }
`;var p=(0,d.forwardRef)(({as:e="span",direction:r="vertical",size:t="2px",space:i="0",style:o,...c},D)=>d.default.createElement(K,{...c,as:e,"data-divider":r,ref:D,style:{["--size"]:t,["--space"]:i,...o}})),K=A.default.span`
  ${l};
`;0&&(module.exports={Divider,divider,horizontal,vertical});
//# sourceMappingURL=index.js.map