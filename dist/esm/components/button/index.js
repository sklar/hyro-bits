/** Components v6.1.0 */
var at=Object.defineProperty;var y=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var V=(t,a,e)=>a in t?at(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,s=(t,a)=>{for(var e in a||(a={}))G.call(a,e)&&V(t,e,a[e]);if(y)for(var e of y(a))U.call(a,e)&&V(t,e,a[e]);return t};var v=(t,a)=>{var e={};for(var r in t)G.call(t,r)&&a.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&y)for(var r of y(t))a.indexOf(r)<0&&U.call(t,r)&&(e[r]=t[r]);return e};import{jsx as j}from"@emotion/react";import{kebabCase as Et}from"case-anything";import{forwardRef as ft}from"react";import{css as dt}from"@emotion/react";import q from"@emotion/styled";import R,{forwardRef as st}from"react";import{css as X,keyframes as it}from"@emotion/react";import{css as H}from"@emotion/react";import{keyframes as rt}from"@emotion/react";var D={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},nt=rt`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var Tt=H`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,xt=H`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var W=it`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,M=X`
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
`,L=X`
  display: inline-flex;
  gap: var(--gap);
`;var w=st((P,C)=>{var g=P,{color:t="currentColor",delay:a=100,duration:e=500,gap:r="4px",range:m="6px",size:c="5px"}=g,$=v(g,["color","delay","duration","gap","range","size"]);let b=s({color:t,delay:a,duration:e,gap:r,range:m,size:c},$);return R.createElement(ct,s(s({ref:C},{"data-qa":"idle"}),b),R.createElement(k,null),R.createElement(k,null),R.createElement(k,null))}),k=q.div`
  ${M};
`,ct=q.div(({color:t,delay:a,duration:e,gap:r,range:m,size:c})=>dt`
    --color: ${t};
    --delay: ${a}ms;
    --duration: ${e}ms;
    --gap: ${r};
    --range: ${m};
    --size: ${c};

    ${L};
  `);import{css as l}from"@emotion/react";import{adjustHue as N,darken as S,desaturate as p,lighten as _}from"color2k";var u={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},lt=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(u),bt=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(u),o=s(s({BLACK:u.black,CURRENT:u.current,TRANSPARENT:u.transparent,WHITE:u.white},lt),bt);var A={XSMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",XLARGE:"xl"};var T={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"};import{css as d}from"@emotion/react";var h=d`
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
`,x=d`
  ${h};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Ht=d`
  ${x};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Xt=d`
  ${x};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Wt=d`
  ${x};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ut=d`
  ${x};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,qt=d`
  ${ut};

  --font-weight: 600;
`,Ft=d`
  ${h};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,F=d`
  ${h};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,jt=d`
  ${h};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Jt=d`
  ${h};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var pt=l`
  ${F};

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
`,z=l`
  ${pt};

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
`,E={};E[A.SMALL]=l`
  --button-icon-offset: 0px;
  --button-indent: 8px;
  --button-size: 30px;
`;E[A.MEDIUM]=l`
  --button-icon-offset: 4px;
  --button-indent: 14px;
  --button-size: 36px;
`;E[A.LARGE]=l`
  --button-icon-offset: 0px;
  --button-indent: 12px;
  --button-size: 40px;
  --font-size: 15px;
`;var f={};f[T.PRIMARY]=l`
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
      --_color: ${S(o.DANGER,.16)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
  &[data-theme='success'] {
    --button-background-color: ${o.SUCCESS};
    --button-border-color: ${o.SUCCESS};
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${S(o.SUCCESS,.02)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
`;f[T.SECONDARY]=l`
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
    --_color: ${_(p(N(o.DANGER,1),.1),.34)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${_(p(N(o.DANGER,2),.2),.3)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${S(p(o.DANGER,.4),.1)};
    }
  }
  &[data-theme='success'] {
    --_color: ${_(p(N(o.SUCCESS,1),.6),.5)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${_(p(N(o.SUCCESS,2),.4),.4)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${S(p(o.SUCCESS,.4),.1)};
    }
  }
`;f[T.TERTIARY]=l`
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
`;var mt=ft((ht,ot)=>{var O=ht,{active:t,as:a,busy:e,children:r,disabled:m,icon:c,placement:$,round:C,size:P="md",synthetic:g,text:b,theme:Y,toggle:J,type:Q="button",variant:Z="secondary"}=O,tt=v(O,["active","as","busy","children","disabled","icon","placement","round","size","synthetic","text","theme","toggle","type","variant"]);let[K,B]=Array.isArray(c)?c:[c],I=a===void 0||a==="button",et={"data-qa":[`${I?"button":"link"}`,...b?[`${Et(b)}`]:[]].join("-")};return j(a||"button",s(s({css:[z,E[P],f[Z]],"data-active":t||null,"data-busy":e||null,"data-icon":c&&!(b||r)&&"single"||K&&B&&"both"||$,"data-round":C||null,"data-synthetic":g||null,"data-theme":Y||null,"data-toggle":J||null,disabled:I&&(e||m)?!0:void 0,ref:ot,type:I?Q:void 0},et),tt),K,b||r,B,e&&j(w,{style:{["--color"]:"var(--button-color)",position:"absolute"}}))});export{mt as Button,z as button,E as sizes,f as variants};
//# sourceMappingURL=index.js.map