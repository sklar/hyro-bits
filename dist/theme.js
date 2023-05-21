/** Components v6.10.0 */
"use strict";var s=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var R=(e,o)=>{for(var l in o)s(e,l,{get:o[l],enumerable:!0})},p=(e,o,l,E)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of g(o))!h.call(e,i)&&i!==l&&s(e,i,{get:()=>o[i],enumerable:!(E=b(o,i))||E.enumerable});return e};var A=e=>p(s({},"__esModule",{value:!0}),e);var I={};R(I,{base:()=>n,button:()=>m,colors:()=>a,h1:()=>d,h2:()=>N,h3:()=>_,h4:()=>c,h5:()=>u,input:()=>C,label:()=>w,paragraph:()=>D});module.exports=A(I);var r={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},T=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(r),x=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(r),a={BLACK:r.black,CURRENT:r.current,TRANSPARENT:r.transparent,WHITE:r.white,...T,...x};var t=require("@emotion/react");var n=t.css`
  --color: ${a.TEXT_PRIMARY};
  --font-family: 'Inter', sans-serif;
  --font-size: ;
  --font-weight: 400;
  --letter-spacing: ;
  --line-height: ;

  box-sizing: border-box;
  color: var(--color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
`,f=t.css`
  ${n};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,d=t.css`
  ${f};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,N=t.css`
  ${f};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,_=t.css`
  ${f};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,c=t.css`
  ${f};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,u=t.css`
  ${c};

  --font-weight: 600;
`,D=t.css`
  ${n};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,m=t.css`
  ${n};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,w=t.css`
  ${n};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,C=t.css`
  ${n};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;0&&(module.exports={base,button,colors,h1,h2,h3,h4,h5,input,label,paragraph});
//# sourceMappingURL=theme.js.map