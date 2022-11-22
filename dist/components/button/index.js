/** Components v6.4.0 */
"use strict";var Z=Object.create;var h=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var ot=Object.getOwnPropertyNames;var et=Object.getPrototypeOf,at=Object.prototype.hasOwnProperty;var rt=(t,a)=>{for(var r in a)h(t,r,{get:a[r],enumerable:!0})},P=(t,a,r,d)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of ot(a))!at.call(t,i)&&i!==r&&h(t,i,{get:()=>a[i],enumerable:!(d=tt(a,i))||d.enumerable});return t};var Y=(t,a,r)=>(r=t!=null?Z(et(t)):{},P(a||!t||!t.__esModule?h(r,"default",{value:t,enumerable:!0}):r,t)),nt=t=>P(h({},"__esModule",{value:!0}),t);var ut={};rt(ut,{Button:()=>H,button:()=>R,sizes:()=>b,variants:()=>u});module.exports=nt(ut);var L=require("@emotion/react"),U=require("case-anything"),V=require("react");var B=require("@emotion/react"),D=Y(require("@emotion/styled")),l=Y(require("react"));var f=require("@emotion/react");var _=require("@emotion/react");var O=require("@emotion/react"),S={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},it=O.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var mt=_.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,ht=_.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var K=f.keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,$=f.css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${K} var(--duration) ${S.easeInOut} var(--shift) infinite alternate;
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
`,C=f.css`
  display: inline-flex;
  gap: var(--gap);
`;var M=(0,l.forwardRef)(({color:t="currentColor",delay:a=100,duration:r=500,gap:d="4px",range:i="6px",size:c="5px",...A},T)=>{let x={color:t,delay:a,duration:r,gap:d,range:i,size:c,...A};return l.default.createElement(dt,{ref:T,...{"data-qa":"idle"},...x},l.default.createElement(I,null),l.default.createElement(I,null),l.default.createElement(I,null))}),I=D.default.div`
  ${$};
`,dt=D.default.div(({color:t,delay:a,duration:r,gap:d,range:i,size:c})=>B.css`
    --color: ${t};
    --delay: ${a}ms;
    --duration: ${r}ms;
    --gap: ${d};
    --range: ${i};
    --size: ${c};

    ${C};
  `);var s=require("@emotion/react"),e=require("color2k");var p={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},st=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(p),ct=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(p),o={BLACK:p.black,CURRENT:p.current,TRANSPARENT:p.transparent,WHITE:p.white,...st,...ct};var g={XSMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",XLARGE:"xl"};var y={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"};var n=require("@emotion/react");var m=n.css`
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
`,v=n.css`
  ${m};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Lt=n.css`
  ${v};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,wt=n.css`
  ${v};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,kt=n.css`
  ${v};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,lt=n.css`
  ${v};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,zt=n.css`
  ${lt};

  --font-weight: 600;
`,Pt=n.css`
  ${m};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,G=n.css`
  ${m};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Yt=n.css`
  ${m};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Ot=n.css`
  ${m};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var bt=s.css`
  ${G};

  --button-background-color: ;
  --button-border-color: ;
  --button-border-size: 1px;
  --button-box-shadow: ;
  --button-color: ;
  --button-font-weight: 600;
  --button-gap: 8px;
  --button-icon-offset: ;
  --button-icon-rotation: 0;
  --button-icon-transform: ;
  --button-indent: ;
  --button-line-height: var(--button-size);
  --button-radius: 6px;
  --button-size: ;

  align-items: center;
  background-color: var(--button-background-color);
  border: var(--button-border-size) solid var(--button-border-color);
  border-radius: var(--button-radius);
  box-shadow: 0 0 0 3px var(--button-box-shadow);
  color: var(--button-color);
  display: inline-flex;
  flex-shrink: 0;
  gap: var(--button-gap);
  height: var(--button-size);
  justify-content: center;
  margin: 0;
  min-width: var(--button-size);
  overflow: hidden;
  outline: 0;
  padding: 0 var(--button-indent);
  position: relative;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;
  user-select: none;
  white-space: nowrap;
  z-index: 1;

  [data-icon] {
    flex-shrink: 0;
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    transform: var(--button-icon-transform);
    will-change: transform;
  }

  &:is(*, #chucknorris) {
    text-decoration: none;
  }
`,R=s.css`
  ${bt};

  &[data-round] {
    --button-radius: 1000px;
  }

  &:not(:disabled, [data-busy], [data-disabled]) {
    cursor: pointer;
  }

  &[data-busy] {
    color: ${o.TRANSPARENT};
  }

  &[data-toggle] {
    --button-icon-transform: rotateX(calc(var(--button-icon-rotation) * 180deg));

    &[data-active] {
      --button-icon-rotation: 1;
    }
  }

  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-background-color: ${o.ELEMENT_DISABLED};
    --button-border-color: ${o.ELEMENT_DISABLED};
  }

  &[data-icon='single'] {
    padding: 0;
    width: var(--button-size);
  }
  &[data-icon='both'],
  &[data-icon='left'] {
    padding-left: calc(var(--button-indent) - var(--button-icon-offset));
  }
  &[data-icon='both'],
  &[data-icon='right'] {
    padding-right: calc(var(--button-indent) - var(--button-icon-offset));
  }
  &[data-icon='left'] {
    flex-direction: row;
  }
  &[data-icon='right'] {
    flex-direction: row-reverse;
  }
`,b={};b[g.SMALL]=s.css`
  --button-icon-offset: 0px;
  --button-indent: 8px;
  --button-size: 30px;
`;b[g.MEDIUM]=s.css`
  --button-icon-offset: 4px;
  --button-indent: 14px;
  --button-size: 36px;
`;b[g.LARGE]=s.css`
  --button-icon-offset: 0px;
  --button-indent: 12px;
  --button-size: 40px;
  --font-size: 15px;
`;var u={};u[y.PRIMARY]=s.css`
  --button-background-color: ${o.ELEMENT_PRIMARY};
  --button-border-color: ${o.ELEMENT_PRIMARY};
  --button-color: ${o.WHITE};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-box-shadow: ${o.ELEMENT_SECONDARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: ${o.ELEMENT_ACTIVE};
    --button-border-color: ${o.ELEMENT_ACTIVE};
  }

  &[data-theme='danger'] {
    --button-background-color: ${o.DANGER};
    --button-border-color: ${o.DANGER};
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${(0,e.darken)(o.DANGER,.16)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
  &[data-theme='success'] {
    --button-background-color: ${o.SUCCESS};
    --button-border-color: ${o.SUCCESS};
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${(0,e.darken)(o.SUCCESS,.02)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
`;u[y.SECONDARY]=s.css`
  --button-background-color: ${o.ELEMENT_SECONDARY};
  --button-border-color: ${o.ELEMENT_SECONDARY};
  --button-color: ${o.TEXT_PRIMARY};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-box-shadow: #f6f8fd;
  }
  &:is(:active, :focus, :hover, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: #d8e1fc;
    --button-border-color: #d8e1fc;
    --button-color: ${o.ELEMENT_PRIMARY};
  }
  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-color: ${o.WHITE};
  }

  &[data-theme='danger'] {
    --_color: ${(0,e.lighten)((0,e.desaturate)((0,e.adjustHue)(o.DANGER,1),.1),.34)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${(0,e.lighten)((0,e.desaturate)((0,e.adjustHue)(o.DANGER,2),.2),.3)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${(0,e.darken)((0,e.desaturate)(o.DANGER,.4),.1)};
    }
  }
  &[data-theme='success'] {
    --_color: ${(0,e.lighten)((0,e.desaturate)((0,e.adjustHue)(o.SUCCESS,1),.6),.5)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${(0,e.lighten)((0,e.desaturate)((0,e.adjustHue)(o.SUCCESS,2),.4),.4)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${(0,e.darken)((0,e.desaturate)(o.SUCCESS,.4),.1)};
    }
  }
`;u[y.TERTIARY]=s.css`
  --button-background-color: ${o.TRANSPARENT};
  --button-border-color: ${o.TRANSPARENT};
  --button-color: ${o.TEXT_PRIMARY};

  &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-color: ${o.ELEMENT_PRIMARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: ${o.ELEMENT_SECONDARY};
    --button-border-color: ${o.ELEMENT_SECONDARY};
  }
  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-background-color: ${o.TRANSPARENT};
    --button-border-color: ${o.TRANSPARENT};
    --button-color: ${o.ELEMENT_DISABLED};
  }

  [data-theme='dark'] &,
  &[data-theme='dark'] {
    &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
      --button-background-color: ${o.DARK_ELEMENT_FOCUS};
      --button-border-color: ${o.DARK_ELEMENT_FOCUS};
      --button-color: ${o.WHITE};
    }
    &:is(:focus):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
    &:is(:hover, [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
      --button-background-color: ${o.DARK_ELEMENT_ACTIVE};
      --button-border-color: ${o.DARK_ELEMENT_ACTIVE};
      --button-color: ${o.WHITE};
    }
    &:is(:disabled, [data-disabled]):not([data-busy]) {
      --button-color: ${o.DARK_ELEMENT_DISABLED};
    }
  }
`;var H=(0,V.forwardRef)(({active:t,as:a,busy:r,children:d,disabled:i,icon:c,placement:A,round:T,size:x="md",synthetic:w,text:E,theme:X,toggle:W,type:q="button",variant:F="secondary",...j},J)=>{let[k,z]=Array.isArray(c)?c:[c],N=a===void 0||a==="button",Q={"data-qa":[`${N?"button":"link"}`,...E?[`${(0,U.kebabCase)(E)}`]:[]].join("-")};return(0,L.jsx)(a||"button",{css:[R,b[x],u[F]],"data-active":t||null,"data-busy":r||null,"data-icon":c&&!(E||d)&&"single"||k&&z&&"both"||A,"data-round":T||null,"data-synthetic":w||null,"data-theme":X||null,"data-toggle":W||null,disabled:N&&(r||i)?!0:void 0,ref:J,type:N?q:void 0,...Q,...j},k,E||d,z,r&&(0,L.jsx)(M,{style:{["--color"]:"var(--button-color)",position:"absolute"}}))});0&&(module.exports={Button,button,sizes,variants});
//# sourceMappingURL=index.js.map