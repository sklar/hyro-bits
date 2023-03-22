/** Components v6.6.1 */
"use strict";var Q=Object.create;var b=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty;var ne=(e,t)=>{for(var i in t)b(e,i,{get:t[i],enumerable:!0})},S=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ee(t))!re.call(e,n)&&n!==i&&b(e,n,{get:()=>t[n],enumerable:!(r=Z(t,n))||r.enumerable});return e};var g=(e,t,i)=>(i=e!=null?Q(te(e)):{},S(t||!e||!e.__esModule?b(i,"default",{value:e,enumerable:!0}):i,e)),ie=e=>S(b({},"__esModule",{value:!0}),e);var me={};ne(me,{Input:()=>B,affix:()=>f,container:()=>x,input:()=>y});module.exports=ie(me);var m=g(require("@emotion/styled")),s=g(require("react"));var d={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},oe=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(d),ae=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(d),o={BLACK:d.black,CURRENT:d.current,TRANSPARENT:d.transparent,WHITE:d.white,...oe,...ae};var w=require("@emotion/react");var C=require("@emotion/react"),R={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},se=C.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var ye=w.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,D=w.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var L=(e,t)=>{let i=Object.keys(e).filter(r=>!t.includes(r));return[t.reduce((r,n)=>(r[n]=e[n],r),{}),i.reduce((r,n)=>(r[n]=e[n],r),{})]};var P=require("@emotion/react"),$=g(require("@emotion/styled")),l=g(require("react"));var c=require("@emotion/react");var O=c.keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,z=c.css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${O} var(--duration) ${R.easeInOut} var(--shift) infinite alternate;
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
`,k=c.css`
  display: inline-flex;
  gap: var(--gap);
`;var _=(0,l.forwardRef)(({color:e="currentColor",delay:t=100,duration:i=500,gap:r="4px",range:n="6px",size:p="5px",...T},v)=>{let A={color:e,delay:t,duration:i,gap:r,range:n,size:p,...T};return l.default.createElement(le,{ref:v,...{"data-qa":"idle"},...A},l.default.createElement(N,null),l.default.createElement(N,null),l.default.createElement(N,null))}),N=$.default.div`
  ${z};
`,le=$.default.div(({color:e,delay:t,duration:i,gap:r,range:n,size:p})=>P.css`
    --color: ${e};
    --delay: ${t}ms;
    --duration: ${i}ms;
    --gap: ${r};
    --range: ${n};
    --size: ${p};

    ${k};
  `);var h=require("@emotion/react"),H=require("color2k");var a=require("@emotion/react");var u=a.css`
  --color: ${o.TEXT_PRIMARY};
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
`,E=a.css`
  ${u};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Me=a.css`
  ${E};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Se=a.css`
  ${E};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Ce=a.css`
  ${E};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,pe=a.css`
  ${E};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,De=a.css`
  ${pe};

  --font-weight: 600;
`,Le=a.css`
  ${u};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Oe=a.css`
  ${u};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Pe=a.css`
  ${u};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Y=a.css`
  ${u};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var x=h.css`
  ${Y};

  --input-background-color: ${o.WHITE};
  --input-border-color: ${(0,H.transparentize)("#c8d7fc",.6)};
  --input-border-size: 2px;
  --input-color: ;
  --input-gap: 8px;
  --input-indent: 10px;
  --input-length: 100%;
  --input-line-height: var(--input-size);
  --input-placeholder-color: ${o.TEXT_TERTIARY};
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
    --input-border-color: ${o.ELEMENT_FOCUS};
  }
  &:is([data-invalid]):not([data-disabled]) {
    --input-border-color: ${o.DANGER};
  }
  &:is([data-disabled]) {
    --input-color: ${o.ELEMENT_DISABLED};
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
`,y=h.css`
  background-color: ${o.TRANSPARENT};
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
`,f=h.css`
  align-items: center;
  display: inline-flex;
  color: ${o.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;var B=(0,s.forwardRef)(({active:e,affix:t,as:i="label",busy:r,className:n,disabled:p,invalid:T,leader:v,length:A,readonly:I,size:G="md",style:U,theme:X,trailer:q,...F},W)=>{let[K,M]=Array.isArray(t)?t:[t],[J,V]=L(F,["data-active","data-hover","data-invalid"]),j={"data-qa":"input"};return s.default.createElement(de,{...J,as:i,className:n,"data-active":e||null,"data-busy":r||null,"data-disabled":p||null,"data-invalid":T||null,"data-readonly":I||null,"data-size":G,"data-theme":X||null,style:{["--input-length"]:A,...U}},K&&s.default.createElement(ue,null,K),v,s.default.createElement(ce,{...j,...V,ref:W,disabled:p,readOnly:I}),r&&s.default.createElement(_,{gap:"2px",size:"4px",style:{["--color"]:o.ELEMENT_PRIMARY}}),q,M&&s.default.createElement(fe,null,M))}),de=m.default.label`
  --gap: 1px;

  ${x};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`,ce=m.default.input`
  ${y};
  ${D};
`,ue=m.default.span`
  ${f};
`,fe=m.default.span`
  ${f};
`;0&&(module.exports={Input,affix,container,input});
//# sourceMappingURL=index.js.map