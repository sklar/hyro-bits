/** Components v5.4.0 */
var st=Object.create;var h=Object.defineProperty;var ct=Object.getOwnPropertyDescriptor;var lt=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,bt=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var H=(t,e,a)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))I.call(e,a)&&H(t,a,e[a]);if(R)for(var a of R(e))V.call(e,a)&&H(t,a,e[a]);return t};var X=t=>h(t,"__esModule",{value:!0});var A=(t,e)=>{var a={};for(var n in t)I.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&R)for(var n of R(t))e.indexOf(n)<0&&V.call(t,n)&&(a[n]=t[n]);return a};var ut=(t,e)=>{for(var a in e)h(t,a,{get:e[a],enumerable:!0})},W=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of lt(e))!I.call(t,s)&&(a||s!=="default")&&h(t,s,{get:()=>e[s],enumerable:!(n=ct(e,s))||n.enumerable});return t},q=(t,e)=>W(X(h(t!=null?st(bt(t)):{},"default",!e&&t&&t.__esModule?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),pt=(t=>(e,a)=>t&&t.get(e)||(a=W(X({}),e,1),t&&t.set(e,a),a))(typeof WeakMap!="undefined"?new WeakMap:0);var vt={};ut(vt,{Button:()=>ot,button:()=>S,sizes:()=>E,variants:()=>f});var Y=require("@emotion/react"),Z=require("case-anything"),tt=require("react");var J=require("@emotion/react"),k=q(require("@emotion/styled")),p=q(require("react"));var g=require("@emotion/react");var M=require("@emotion/react");var F=require("@emotion/react"),D={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},Et=F.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var Nt=M.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,St=M.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var j=g.keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,L=g.css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${j} var(--duration) ${D.easeInOut} var(--shift) infinite alternate;
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
`,w=g.css`
  display: inline-flex;
  gap: var(--gap);
`;var z=(0,p.forwardRef)((O,$)=>{var v=O,{color:t="currentColor",delay:e=100,duration:a=500,gap:n="4px",range:s="6px",size:b="5px"}=v,_=A(v,["color","delay","duration","gap","range","size"]);let u=c({color:t,delay:e,duration:a,gap:n,range:s,size:b},_);return p.default.createElement(ft,c(c({ref:$},{"data-qa":"idle"}),u),p.default.createElement(P,null),p.default.createElement(P,null),p.default.createElement(P,null))}),P=k.default.div`
  ${L};
`,ft=k.default.div(({color:t,delay:e,duration:a,gap:n,range:s,size:b})=>J.css`
    --color: ${t};
    --delay: ${e}ms;
    --duration: ${a}ms;
    --gap: ${n};
    --range: ${s};
    --size: ${b};

    ${w};
  `);var l=require("@emotion/react"),r=require("color2k");var m={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},mt=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(m),ht=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(m),o=c(c({BLACK:m.black,CURRENT:m.current,TRANSPARENT:m.transparent,WHITE:m.white},mt),ht);var T={XSMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",XLARGE:"xl"};var x={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"};var d=require("@emotion/react");var y=d.css`
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
`,N=d.css`
  ${y};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Gt=d.css`
  ${N};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Ut=d.css`
  ${N};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Vt=d.css`
  ${N};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,gt=d.css`
  ${N};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Ht=d.css`
  ${gt};

  --font-weight: 600;
`,Xt=d.css`
  ${y};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Q=d.css`
  ${y};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Wt=d.css`
  ${y};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,qt=d.css`
  ${y};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var yt=l.css`
  ${Q};

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
`,S=l.css`
  ${yt};

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
`,E={};E[T.SMALL]=l.css`
  --button-icon-offset: 0px;
  --button-indent: 8px;
  --button-size: 30px;
`;E[T.MEDIUM]=l.css`
  --button-icon-offset: 4px;
  --button-indent: 14px;
  --button-size: 36px;
`;E[T.LARGE]=l.css`
  --button-icon-offset: 0px;
  --button-indent: 12px;
  --button-size: 40px;
  --font-size: 15px;
`;var f={};f[x.PRIMARY]=l.css`
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
      --_color: ${(0,r.darken)(o.DANGER,.16)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
  &[data-theme='success'] {
    --button-background-color: ${o.SUCCESS};
    --button-border-color: ${o.SUCCESS};
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${(0,r.darken)(o.SUCCESS,.02)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
`;f[x.SECONDARY]=l.css`
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
    --_color: ${(0,r.lighten)((0,r.desaturate)((0,r.adjustHue)(o.DANGER,1),.1),.34)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${(0,r.lighten)((0,r.desaturate)((0,r.adjustHue)(o.DANGER,2),.2),.3)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${(0,r.darken)((0,r.desaturate)(o.DANGER,.4),.1)};
    }
  }
  &[data-theme='success'] {
    --_color: ${(0,r.lighten)((0,r.desaturate)((0,r.adjustHue)(o.SUCCESS,1),.6),.5)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${(0,r.lighten)((0,r.desaturate)((0,r.adjustHue)(o.SUCCESS,2),.4),.4)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${(0,r.darken)((0,r.desaturate)(o.SUCCESS,.4),.1)};
    }
  }
`;f[x.TERTIARY]=l.css`
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
`;var ot=(0,tt.forwardRef)((Rt,it)=>{var B=Rt,{active:t,as:e,busy:a,children:n,disabled:s,icon:b,placement:_,round:$,size:O="md",synthetic:v,text:u,theme:K,toggle:et,type:at="button",variant:rt="secondary"}=B,nt=A(B,["active","as","busy","children","disabled","icon","placement","round","size","synthetic","text","theme","toggle","type","variant"]);let[G,U]=Array.isArray(b)?b:[b],C=e===void 0||e==="button",dt={"data-qa":[`${C?"button":"link"}`,...u?[`${(0,Z.kebabCase)(u)}`]:[]].join("-")};return(0,Y.jsx)(e||"button",c(c({css:[S,E[O],f[rt]],"data-active":t||null,"data-busy":a||null,"data-icon":b&&!(u||n)&&"single"||G&&U&&"both"||_,"data-round":$||null,"data-synthetic":v||null,"data-theme":K||null,"data-toggle":et||null,disabled:C&&(a||s)?!0:void 0,ref:it,type:C?at:void 0},dt),nt),G,u||n,U,a&&(0,Y.jsx)(z,{style:{["--color"]:"var(--button-color)",position:"absolute"}}))});module.exports=pt(vt);0&&(module.exports={Button,button,sizes,variants});
//# sourceMappingURL=index.js.map