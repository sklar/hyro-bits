/** Components v6.4.0 */
"use strict";var ie=Object.create;var A=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var le=Object.getOwnPropertyNames;var se=Object.getPrototypeOf,pe=Object.prototype.hasOwnProperty;var de=(e,t)=>{for(var n in t)A(e,n,{get:t[n],enumerable:!0})},F=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of le(t))!pe.call(e,r)&&r!==n&&A(e,r,{get:()=>t[r],enumerable:!(a=oe(t,r))||a.enumerable});return e};var x=(e,t,n)=>(n=e!=null?ie(se(e)):{},F(t||!e||!e.__esModule?A(n,"default",{value:e,enumerable:!0}):n,e)),ce=e=>F(A({},"__esModule",{value:!0}),e);var Ie={};de(Ie,{Textarea:()=>te,container:()=>N,indicator:()=>M,textarea:()=>$});module.exports=ce(Ie);var L=require("@emotion/react"),U=x(require("@emotion/styled")),ee=require("react");var c={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},ue=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(c),fe=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(c),i={BLACK:c.black,CURRENT:c.current,TRANSPARENT:c.transparent,WHITE:c.white,...ue,...fe};var I=(e,t)=>{let n=Object.keys(e).filter(a=>!t.includes(a));return[t.reduce((a,r)=>(a[r]=e[r],a),{}),n.reduce((a,r)=>(a[r]=e[r],a),{})]};var Q=require("@emotion/react"),G=x(require("@emotion/styled")),p=x(require("react"));var g=require("@emotion/react");var O=require("@emotion/react");var J=require("@emotion/react"),D={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},me=J.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var $e=O.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,V=O.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var W=g.keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,Y=g.css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${W} var(--duration) ${D.easeInOut} var(--shift) infinite alternate;
  background: var(--color);
  border-radius: 50%;
  display: block;
  height: var(--size);
  opacity: var(--opacity);
  transform: translateY(var(--offset));
  width: var(--size);
  will-change: transform;

  &:nth-of-type(1) {
    --shift: calc(0 * var(--delay));
    --opacity: 1;
  }
  &:nth-of-type(2) {
    --shift: calc(1 * var(--delay));
    --opacity: 0.75;
  }
  &:nth-of-type(3) {
    --shift: calc(2 * var(--delay));
    --opacity: 0.5;
  }
`,H=g.css`
  display: inline-flex;
  gap: var(--gap);
`;var h=(0,p.forwardRef)(({color:e="currentColor",delay:t=100,duration:n=500,gap:a="4px",range:r="6px",size:l="5px",...u},f)=>{let d={color:e,delay:t,duration:n,gap:a,range:r,size:l,...u};return p.default.createElement(be,{ref:f,...{"data-qa":"idle"},...d},p.default.createElement(B,null),p.default.createElement(B,null),p.default.createElement(B,null))}),B=G.default.div`
  ${Y};
`,be=G.default.div(({color:e,delay:t,duration:n,gap:a,range:r,size:l})=>Q.css`
    --color: ${e};
    --delay: ${t}ms;
    --duration: ${n}ms;
    --gap: ${a};
    --range: ${r};
    --size: ${l};

    ${H};
  `);var k=require("@emotion/react");var v=x(require("@emotion/styled")),s=x(require("react"));var z=require("@emotion/react"),j=require("color2k");var o=require("@emotion/react");var y=o.css`
  --color: ${i.TEXT_PRIMARY};
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
`,R=o.css`
  ${y};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Ge=o.css`
  ${R};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Ue=o.css`
  ${R};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Xe=o.css`
  ${R};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,xe=o.css`
  ${R};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,qe=o.css`
  ${xe};

  --font-weight: 600;
`,Fe=o.css`
  ${y};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Je=o.css`
  ${y};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Ve=o.css`
  ${y};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Z=o.css`
  ${y};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var E=z.css`
  ${Z};

  --input-background-color: ${i.WHITE};
  --input-border-color: ${(0,j.transparentize)("#c8d7fc",.6)};
  --input-border-size: 2px;
  --input-color: ;
  --input-gap: 8px;
  --input-indent: 10px;
  --input-length: 100%;
  --input-line-height: var(--input-size);
  --input-placeholder-color: ${i.TEXT_TERTIARY};
  --input-radius: 6px;
  --input-size: ;

  align-items: center;
  background-clip: padding-box;
  background-color: var(--input-background-color);
  border: var(--input-border-size) solid var(--input-border-color);
  border-radius: var(--input-radius);
  color: var(--input-color);
  display: flex;
  gap: var(--input-gap);
  min-height: var(--input-size);
  margin: 0;
  min-width: var(--input-size);
  outline: 0;
  padding-inline: var(--input-indent);
  transition-duration: 0.2s;
  transition-property: border-color, width;
  transition-timing-function: ease-in-out;
  width: var(--input-length);
  will-change: border-color, width;

  &:is(:active, :focus-within, :hover, [data-active], [data-hover]):not([data-disabled]) {
    --input-border-color: ${i.ELEMENT_FOCUS};
  }
  &:is([data-invalid]):not([data-disabled]) {
    --input-border-color: ${i.DANGER};
  }
  &:is([data-disabled]) {
    --input-color: ${i.ELEMENT_DISABLED};
    pointer-events: none;
  }
  &:is([data-readonly]) {
    cursor: pointer;
  }

  &[data-size='sm'] {
    --input-size: 30px;
  }
  &[data-size='md'] {
    --input-size: 36px;
  }
  &[data-size='lg'] {
    --font-size: 15px;
    --input-size: 40px;
  }

  /* [data-theme='dark'] &,
  &[data-theme='dark'] {} */
`,T=z.css`
  background-color: ${i.TRANSPARENT};
  border: none;
  color: currentColor;
  font: inherit;
  min-width: 0;
  outline: 0;
  padding: 0;

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-search-cancel-button {
    appearance: none;
    display: none;
  }

  &[readonly] {
    pointer-events: none;
  }
`,w=z.css`
  align-items: center;
  display: inline-flex;
  color: ${i.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;var ge=(0,s.forwardRef)(({active:e,affix:t,as:n="label",busy:a,className:r,disabled:l,invalid:u,leader:f,length:d,readonly:m,size:_="md",style:K,theme:S,trailer:C,...P},b)=>{let[X,q]=Array.isArray(t)?t:[t],[re,ne]=I(P,["data-active","data-hover","data-invalid"]),ae={"data-qa":"input"};return s.default.createElement(he,{...re,as:n,className:r,"data-active":e||null,"data-busy":a||null,"data-disabled":l||null,"data-invalid":u||null,"data-readonly":m||null,"data-size":_,"data-theme":S||null,style:{["--input-length"]:d,...K}},X&&s.default.createElement(Ee,null,X),f,s.default.createElement(ye,{...ae,...ne,ref:b,disabled:l,readOnly:m}),a&&s.default.createElement(h,{gap:"2px",size:"4px",style:{["--color"]:i.ELEMENT_PRIMARY}}),C,q&&s.default.createElement(Te,null,q))}),he=v.default.label`
  --gap: 1px;

  ${E};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`,ye=v.default.input`
  ${T};
  ${V};
`,Ee=v.default.span`
  ${w};
`,Te=v.default.span`
  ${w};
`;var M=k.css`
  background-image: linear-gradient(90deg, transparent, var(--input-background-color) 60%);
  padding-block: 6px;
  padding-inline-start: 2em;
  place-self: start end;
  position: absolute;
`,N=k.css`
  ${E};

  align-items: stretch;
  display: inline-grid;
  position: relative;
  padding-block: calc(0.8 * var(--input-indent));

  &::after,
  textarea,
  [data-indicator] {
    grid-area: 1 / 1 / -1 / -1;
  }

  &[data-expandable] {
    &::after {
      content: attr(data-value);
      min-width: 0;
      overflow: hidden;
      overflow-wrap: break-word;
      visibility: hidden;
      white-space: pre-wrap;
    }
  }
`,$=k.css`
  ${T};

  width: 100%;

  [data-expandable] & {
    overflow-y: hidden;
  }

  [data-resize='both'] & {
    resize: both;
  }
  [data-resize='horizontal'] & {
    resize: horizontal;
  }
  [data-resize='vertical'] & {
    resize: vertical;
  }
  [data-resize='none'] & {
    resize: none;
  }
`;var te=(0,ee.forwardRef)(({active:e,as:t="label",busy:n,className:a,disabled:r,expandable:l,invalid:u,length:f,readonly:d,resize:m="vertical",style:_,theme:K,...S},C)=>{let[P,b]=I(S,["data-active","data-hover","data-invalid"]);return(0,L.jsx)(ve,{...P,as:t,className:a,"data-active":e||null,"data-busy":n||null,"data-disabled":r||null,"data-expandable":l||null,"data-invalid":u||null,"data-readonly":d||null,"data-resize":m,"data-theme":K||null,"data-value":l?b.value||b.defaultValue:"",style:{["--input-length"]:f,..._}},(0,L.jsx)(Ae,{...b,ref:C,disabled:r,readOnly:d}),n&&(0,L.jsx)(h,{gap:"2px",size:"4px","data-indicator":!0,css:M,style:{["--color"]:i.ELEMENT_PRIMARY}}))}),ve=U.default.label`
  ${N};
`,Ae=U.default.textarea`
  ${$};
`;0&&(module.exports={Textarea,container,indicator,textarea});
//# sourceMappingURL=index.js.map