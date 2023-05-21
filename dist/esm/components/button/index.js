/** Components v6.10.0 */
import{jsx as K}from"@emotion/react";import{kebabCase as rt}from"case-anything";import{forwardRef as nt}from"react";import{css as J}from"@emotion/react";import Y from"@emotion/styled";import f,{forwardRef as Q}from"react";import{css as z,keyframes as j}from"@emotion/react";import{css as k}from"@emotion/react";import{keyframes as q}from"@emotion/react";var S={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},F=q`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var bt=k`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,ut=k`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var P=j`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,_=z`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${P} var(--duration) ${S.easeInOut} var(--shift) infinite alternate;
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
`,$=z`
  display: inline-flex;
  gap: var(--gap);
`;var I=Q(({color:o="currentColor",delay:n=100,duration:i=500,gap:d="4px",range:u="6px",size:a="5px",...A},T)=>{let x={color:o,delay:n,duration:i,gap:d,range:u,size:a,...A};return f.createElement(Z,{ref:T,...{"data-qa":"idle"},...x},f.createElement(C,null),f.createElement(C,null),f.createElement(C,null))}),C=Y.div`
  ${_};
`,Z=Y.div(({color:o,delay:n,duration:i,gap:d,range:u,size:a})=>J`
    --color: ${o};
    --delay: ${n}ms;
    --duration: ${i}ms;
    --gap: ${d};
    --range: ${u};
    --size: ${a};

    ${$};
  `);import{css as r}from"@emotion/react";import{adjustHue as y,darken as R,desaturate as c,lighten as v}from"color2k";var s={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},tt=(o=>({DANGER:o.red.radical,NOTICE:o.blue.ribbon1,SUCCESS:o.green.caribbean,WARNING:o.orange.amber}))(s),ot=(o=>({PRIMARY:o.blue.ribbon,SECONDARY:o.blue.hawkes,TERTIARY:o.gray.cadet,BACKGROUND_PRIMARY:o.white,BACKGROUND_SECONDARY:o.gray.porcelain,ELEMENT_PRIMARY:o.blue.ribbon,ELEMENT_SECONDARY:o.blue.hawkes,ELEMENT_TERTIARY:o.gray.cadet,ELEMENT_ACTIVE:o.blue.science,ELEMENT_DISABLED:o.gray.geyser,ELEMENT_FOCUS:o.blue.dodger,STROKE:o.gray.botticelli,TEXT_PRIMARY:o.blue.haiti,TEXT_SECONDARY:o.blue.hawkes,TEXT_TERTIARY:o.gray.cadet,DARK_TERTIARY:o.gray.waterloo,DARK_ELEMENT_TERTIARY:o.gray.waterloo,DARK_BACKGROUND_PRIMARY:o.blue.vulcan,DARK_BACKGROUND_SECONDARY:o.blue.ebony,DARK_ELEMENT_ACTIVE:o.blue.oxford,DARK_ELEMENT_DISABLED:o.gray.trout,DARK_ELEMENT_FOCUS:o.blue.denim,DARK_STROKE:o.gray.fiord}))(s),t={BLACK:s.black,CURRENT:s.current,TRANSPARENT:s.transparent,WHITE:s.white,...tt,...ot};var m={XSMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",XLARGE:"xl"};var h={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"};import{css as e}from"@emotion/react";var E=e`
  --color: ${t.TEXT_PRIMARY};
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
`,g=e`
  ${E};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Lt=e`
  ${g};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,wt=e`
  ${g};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,kt=e`
  ${g};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,et=e`
  ${g};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,zt=e`
  ${et};

  --font-weight: 600;
`,Pt=e`
  ${E};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,O=e`
  ${E};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Yt=e`
  ${E};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Ot=e`
  ${E};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var at=r`
  ${O};

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
`,D=r`
  ${at};

  &[data-round] {
    --button-radius: 1000px;
  }

  &:not(:disabled, [data-busy], [data-disabled]) {
    cursor: pointer;
  }

  &[data-busy] {
    color: ${t.TRANSPARENT};
  }

  &[data-toggle] {
    --button-icon-transform: rotateX(calc(var(--button-icon-rotation) * 180deg));

    &[data-active] {
      --button-icon-rotation: 1;
    }
  }

  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-background-color: ${t.ELEMENT_DISABLED};
    --button-border-color: ${t.ELEMENT_DISABLED};
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
`,l={};l[m.SMALL]=r`
  --button-icon-offset: 0px;
  --button-indent: 8px;
  --button-size: 30px;
`;l[m.MEDIUM]=r`
  --button-icon-offset: 4px;
  --button-indent: 14px;
  --button-size: 36px;
`;l[m.LARGE]=r`
  --button-icon-offset: 0px;
  --button-indent: 12px;
  --button-size: 40px;
  --font-size: 15px;
`;var b={};b[h.PRIMARY]=r`
  --button-background-color: ${t.ELEMENT_PRIMARY};
  --button-border-color: ${t.ELEMENT_PRIMARY};
  --button-color: ${t.WHITE};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-box-shadow: ${t.ELEMENT_SECONDARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: ${t.ELEMENT_ACTIVE};
    --button-border-color: ${t.ELEMENT_ACTIVE};
  }

  &[data-theme='danger'] {
    --button-background-color: ${t.DANGER};
    --button-border-color: ${t.DANGER};
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${R(t.DANGER,.16)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
  &[data-theme='success'] {
    --button-background-color: ${t.SUCCESS};
    --button-border-color: ${t.SUCCESS};
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${R(t.SUCCESS,.02)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
`;b[h.SECONDARY]=r`
  --button-background-color: ${t.ELEMENT_SECONDARY};
  --button-border-color: ${t.ELEMENT_SECONDARY};
  --button-color: ${t.TEXT_PRIMARY};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-box-shadow: #f6f8fd;
  }
  &:is(:active, :focus, :hover, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: #d8e1fc;
    --button-border-color: #d8e1fc;
    --button-color: ${t.ELEMENT_PRIMARY};
  }
  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-color: ${t.WHITE};
  }

  &[data-theme='danger'] {
    --_color: ${v(c(y(t.DANGER,1),.1),.34)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${v(c(y(t.DANGER,2),.2),.3)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${R(c(t.DANGER,.4),.1)};
    }
  }
  &[data-theme='success'] {
    --_color: ${v(c(y(t.SUCCESS,1),.6),.5)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${v(c(y(t.SUCCESS,2),.4),.4)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${R(c(t.SUCCESS,.4),.1)};
    }
  }
`;b[h.TERTIARY]=r`
  --button-background-color: ${t.TRANSPARENT};
  --button-border-color: ${t.TRANSPARENT};
  --button-color: ${t.TEXT_PRIMARY};

  &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-color: ${t.ELEMENT_PRIMARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: ${t.ELEMENT_SECONDARY};
    --button-border-color: ${t.ELEMENT_SECONDARY};
  }
  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-background-color: ${t.TRANSPARENT};
    --button-border-color: ${t.TRANSPARENT};
    --button-color: ${t.ELEMENT_DISABLED};
  }

  [data-theme='dark'] &,
  &[data-theme='dark'] {
    &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
      --button-background-color: ${t.DARK_ELEMENT_FOCUS};
      --button-border-color: ${t.DARK_ELEMENT_FOCUS};
      --button-color: ${t.WHITE};
    }
    &:is(:focus):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
    &:is(:hover, [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
      --button-background-color: ${t.DARK_ELEMENT_ACTIVE};
      --button-border-color: ${t.DARK_ELEMENT_ACTIVE};
      --button-color: ${t.WHITE};
    }
    &:is(:disabled, [data-disabled]):not([data-busy]) {
      --button-color: ${t.DARK_ELEMENT_DISABLED};
    }
  }
`;var it=nt(({active:o,as:n,busy:i,children:d,disabled:u,icon:a,placement:A,round:T,size:x="md",synthetic:M,text:p,theme:B,toggle:G,type:U="button",variant:V="secondary",...H},X)=>{let[L,w]=Array.isArray(a)?a:[a],N=n===void 0||n==="button",W={"data-qa":[`${N?"button":"link"}`,...p?[`${rt(p)}`]:[]].join("-")};return K(n||"button",{css:[D,l[x],b[V]],"data-active":o||null,"data-busy":i||null,"data-icon":a&&!(p||d)&&"single"||L&&w&&"both"||A,"data-round":T||null,"data-synthetic":M||null,"data-theme":B||null,"data-toggle":G||null,disabled:N&&(i||u)?!0:void 0,ref:X,type:N?U:void 0,...W,...H},L,p||d,w,i&&K(I,{style:{["--color"]:"var(--button-color)",position:"absolute"}}))});export{it as Button,D as button,l as sizes,b as variants};
//# sourceMappingURL=index.js.map