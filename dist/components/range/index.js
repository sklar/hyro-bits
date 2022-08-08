/** Components v6.1.0 */
var Y=Object.create;var f=Object.defineProperty,B=Object.defineProperties,U=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertyNames,b=Object.getOwnPropertySymbols,X=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var N=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,n=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&N(r,t,e[t]);if(b)for(var t of b(e))I.call(e,t)&&N(r,t,e[t]);return r},m=(r,e)=>B(r,H(e)),_=r=>f(r,"__esModule",{value:!0});var z=(r,e)=>{var t={};for(var a in r)T.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&b)for(var a of b(r))e.indexOf(a)<0&&I.call(r,a)&&(t[a]=r[a]);return t};var W=(r,e)=>{for(var t in e)f(r,t,{get:e[t],enumerable:!0})},P=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of G(e))!T.call(r,i)&&(t||i!=="default")&&f(r,i,{get:()=>e[i],enumerable:!(a=U(e,i))||a.enumerable});return r},F=(r,e)=>P(_(f(r!=null?Y(X(r)):{},"default",!e&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),q=(r=>(e,t)=>r&&r.get(e)||(t=P(_({}),e,1),r&&r.set(e,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var rr={};W(rr,{Range:()=>$,dot:()=>v,handle:()=>x,mark:()=>y,rail:()=>E,slider:()=>p,step:()=>R,track:()=>k,wrapper:()=>h});var w=require("@emotion/react"),M=require("rc-slider");var A=(r,e)=>{let t=Object.keys(r).filter(a=>!e.includes(a));return[e.reduce((a,i)=>(a[i]=r[i],a),{}),t.reduce((a,i)=>(a[i]=r[i],a),{})]};var Z=require("@emotion/react"),j=F(require("rc-slider"));var d=require("@emotion/react");var c={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},J=(r=>({DANGER:r.red.radical,NOTICE:r.blue.ribbon1,SUCCESS:r.green.caribbean,WARNING:r.orange.amber}))(c),V=(r=>({PRIMARY:r.blue.ribbon,SECONDARY:r.blue.hawkes,TERTIARY:r.gray.cadet,BACKGROUND_PRIMARY:r.white,BACKGROUND_SECONDARY:r.gray.porcelain,ELEMENT_PRIMARY:r.blue.ribbon,ELEMENT_SECONDARY:r.blue.hawkes,ELEMENT_TERTIARY:r.gray.cadet,ELEMENT_ACTIVE:r.blue.science,ELEMENT_DISABLED:r.gray.geyser,ELEMENT_FOCUS:r.blue.dodger,STROKE:r.gray.botticelli,TEXT_PRIMARY:r.blue.haiti,TEXT_SECONDARY:r.blue.hawkes,TEXT_TERTIARY:r.gray.cadet,DARK_TERTIARY:r.gray.waterloo,DARK_ELEMENT_TERTIARY:r.gray.waterloo,DARK_BACKGROUND_PRIMARY:r.blue.vulcan,DARK_BACKGROUND_SECONDARY:r.blue.ebony,DARK_ELEMENT_ACTIVE:r.blue.oxford,DARK_ELEMENT_DISABLED:r.gray.trout,DARK_ELEMENT_FOCUS:r.blue.denim,DARK_STROKE:r.gray.fiord}))(c),l=n(n({BLACK:c.black,CURRENT:c.current,TRANSPARENT:c.transparent,WHITE:c.white},J),V);var o=require("@emotion/react");var g=o.css`
  --color: ${l.TEXT_PRIMARY};
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
`,u=o.css`
  ${g};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,lr=o.css`
  ${u};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,nr=o.css`
  ${u};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,cr=o.css`
  ${u};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,Q=o.css`
  ${u};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,pr=o.css`
  ${Q};

  --font-weight: 600;
`,D=o.css`
  ${g};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,hr=o.css`
  ${g};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,fr=o.css`
  ${g};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,gr=o.css`
  ${g};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var v=d.css`
  background-color: var(--slider-dot-color);
  border: var(--slider-border-size) solid var(--slider-dot-border-color);
  border-radius: 50%;
  cursor: pointer;
  height: var(--slider-dot-size);
  margin: 0 !important; /* safeguard */
  position: absolute;
  transform: translate(var(--slider-dx), var(--slider-dy));
  width: var(--slider-dot-size);

  &:is([class*='active']) {
    --slider-dot-border-color: var(--slider-color-primary);
  }

  [data-direction='horizontal'] & {
    --slider-dx: -50%;

    bottom: auto; /* safeguard */

    &:is([class*='reverse']) {
      --slider-dx: 50%;
    }
  }

  [data-direction='vertical'] & {
    --slider-dy: 50%;

    left: auto; /* safeguard */

    &:is([class*='reverse']) {
      --slider-dy: -50%;
    }
  }
`,x=d.css`
  background-color: var(--slider-handle-color);
  border: var(--slider-border-size) solid var(--slider-handle-border-color);
  border-color: var(--slider-handle-border-color) !important; /* safeguard */
  border-radius: 50%;
  cursor: grab;
  height: var(--slider-handle-size);
  margin: 0; /* safeguard */
  outline: none;
  transform: translate(var(--slider-dx), var(--slider-dy)) !important; /* safeguard */
  transition: border-color 0.2s;
  width: var(--slider-handle-size);

  [data-hover] &,
  &:is(:active, :focus, :hover, [class*='dragging'], [class*='focused'], [class*='hover']) {
    --slider-handle-border-color: var(--slider-color-primary);
    box-shadow: none; /* safeguard */
  }
  &:is(:active) {
    cursor: grabbing;
  }

  [data-direction='horizontal'] & {
    --slider-dx: -50%;

    touch-action: pan-x;
  }
  [data-direction='horizontal'][data-reverse] & {
    --slider-dx: 50%;
  }

  [data-direction='vertical'] & {
    --slider-dy: 50%;

    touch-action: pan-y;
  }
  [data-direction='vertical'][data-reverse] & {
    --slider-dy: -50%;
  }
`,y=d.css`
  [class*='text'] {
    ${D};

    cursor: pointer;
    margin: 0 !important; /* safeguard */
    position: absolute;
    transform: translate(var(--slider-mark-dx), var(--slider-mark-dy)) !important; /* safeguard */
  }

  [data-direction='horizontal'] & {
    &:not([class*='text']) {
      left: 0;
      top: calc(var(--slider-size) + var(--slider-mark-indent));
      width: 100%;
    }

    [class*='text'] {
      --slider-mark-dx: -50%;
      --slider-mark-dy: 0;

      &:first-of-type {
        --slider-mark-dx: 0;
      }
      &:last-of-type {
        --slider-mark-dx: -100%;
      }
    }
  }
  [data-direction='horizontal'][data-reverse] & {
    [class*='text'] {
      --slider-mark-dx: 50%;

      &:first-of-type {
        --slider-mark-dx: 0;
      }
      &:last-of-type {
        --slider-mark-dx: 100%;
      }
    }
  }

  [data-direction='vertical'] & {
    &:not([class*='text']) {
      height: 100%;
      left: calc(var(--slider-size) + var(--slider-mark-indent));
      top: 0;
    }

    [class*='text'] {
      --slider-mark-dx: 0;
      --slider-mark-dy: 50%;

      &:first-of-type {
        --slider-mark-dy: 0;
      }
      &:last-of-type {
        --slider-mark-dy: 100%;
      }
    }
  }
  [data-direction='vertical'][data-reverse] & {
    [class*='text'] {
      --slider-mark-dy: -50%;

      &:first-of-type {
        --slider-mark-dy: 0;
      }
      &:last-of-type {
        --slider-mark-dy: -100%;
      }
    }
  }
`,E=d.css`
  background-color: var(--slider-rail-color);
  border-radius: inherit;

  [data-direction='horizontal'] & {
    height: var(--slider-rail-size);
    width: 100%;
  }
  [data-direction='vertical'] & {
    height: 100%;
    width: var(--slider-rail-size);
  }
`,R=d.css`
  [data-direction='horizontal'] & {
    height: var(--slider-dot-size);
    width: 100%;
  }
  [data-direction='vertical'] & {
    height: 100%;
    width: var(--slider-dot-size);
  }
`,k=d.css`
  background-color: var(--slider-track-color);
  border-radius: inherit;
  left: auto; /* safeguard */

  [data-direction='horizontal'] & {
    height: var(--slider-track-size);
  }
  [data-direction='vertical'] & {
    width: var(--slider-track-size);
  }
`,p=d.css`
  align-items: center;
  background: none;
  border-radius: var(--slider-border-radius);
  display: flex;
  height: inherit;
  padding: 0;
  position: relative;
  touch-action: none;
  width: inherit;

  &,
  & * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  & > * {
    position: absolute;
  }

  [class*='dot'] {
    ${v};
  }
  [class*='handle'] {
    ${x};
  }
  [class*='mark'] {
    ${y};
  }
  [class*='rail'] {
    ${E};
  }
  [class*='step'] {
    ${R};
  }
  [class*='track'] {
    ${k};
  }

  [data-direction='vertical'] & {
    flex-direction: column;
  }

  /** State: Disabled */
  &[class*='disabled'] {
    filter: grayscale(90%);
    opacity: 0.5;
    pointer-events: none;
  }
`,h=d.css`
  --slider-border-radius: 1000px;
  --slider-border-size: 2px;
  --slider-color-primary: ${l.ELEMENT_FOCUS};
  --slider-color-secondary: ${l.STROKE};
  --slider-dx: 0;
  --slider-dy: 0;
  --slider-size: 16px;

  --slider-dot-border-color: var(--slider-color-secondary);
  --slider-dot-color: ${l.WHITE};
  --slider-dot-size: calc(0.5 * var(--slider-size));

  --slider-handle-border-color: var(--slider-color-secondary);
  --slider-handle-color: ${l.WHITE};
  --slider-handle-size: var(--slider-size);

  --slider-mark-dx: ;
  --slider-mark-dy: ;
  --slider-mark-indent: 4px;

  --slider-rail-color: var(--slider-color-secondary);
  --slider-rail-size: 4px;

  --slider-track-color: var(--slider-color-primary);
  --slider-track-size: var(--slider-rail-size);

  &[data-direction='horizontal'] {
    height: var(--slider-size);
    width: 100%;
  }
  &[data-direction='vertical'] {
    height: 100%;
    width: var(--slider-size);
  }

  &[data-bleed='false'] {
    &[data-direction='horizontal'] {
      padding-left: calc(0.5 * var(--slider-size));
      padding-right: calc(0.5 * var(--slider-size));
    }
    &[data-direction='vertical'] {
      padding-bottom: calc(0.5 * var(--slider-size));
      padding-top: calc(0.5 * var(--slider-size));
    }
  }
`;var $=er=>{var S=er,{bleed:r=!0,className:e,reverse:t,style:a,theme:i,vertical:K}=S,C=z(S,["bleed","className","reverse","style","theme","vertical"]);let[L,O]=A(C,["data-hover","data-qa"]);return(0,w.jsx)("div",m(n({},L),{className:e,css:h,"data-bleed":r,"data-direction":K?"vertical":"horizontal","data-reverse":t||null,"data-theme":i||null,style:a}),(0,w.jsx)(M.Range,m(n({},O),{css:p,reverse:t,vertical:K})))};module.exports=q(rr);0&&(module.exports={Range,dot,handle,mark,rail,slider,step,track,wrapper});
//# sourceMappingURL=index.js.map