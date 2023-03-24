/** Components v6.7.0 */
"use strict";var I=Object.create;var c=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var C=(r,e)=>{for(var i in e)c(r,i,{get:e[i],enumerable:!0})},k=(r,e,i,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of _(e))!$.call(r,t)&&t!==i&&c(r,t,{get:()=>e[t],enumerable:!(a=N(e,t))||a.enumerable});return r};var M=(r,e,i)=>(i=r!=null?I(D(r)):{},k(e||!r||!r.__esModule?c(i,"default",{value:r,enumerable:!0}):i,r)),O=r=>k(c({},"__esModule",{value:!0}),r);var B={};C(B,{Slider:()=>A,dot:()=>b,handle:()=>g,mark:()=>u,rail:()=>v,slider:()=>h,step:()=>x,track:()=>y,wrapper:()=>f});module.exports=O(B);var m=require("@emotion/react"),R=M(require("rc-slider"));var z=(r,e)=>{let i=Object.keys(r).filter(a=>!e.includes(a));return[e.reduce((a,t)=>(a[t]=r[t],a),{}),i.reduce((a,t)=>(a[t]=r[t],a),{})]};var s=require("@emotion/react");var l={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},L=(r=>({DANGER:r.red.radical,NOTICE:r.blue.ribbon1,SUCCESS:r.green.caribbean,WARNING:r.orange.amber}))(l),P=(r=>({PRIMARY:r.blue.ribbon,SECONDARY:r.blue.hawkes,TERTIARY:r.gray.cadet,BACKGROUND_PRIMARY:r.white,BACKGROUND_SECONDARY:r.gray.porcelain,ELEMENT_PRIMARY:r.blue.ribbon,ELEMENT_SECONDARY:r.blue.hawkes,ELEMENT_TERTIARY:r.gray.cadet,ELEMENT_ACTIVE:r.blue.science,ELEMENT_DISABLED:r.gray.geyser,ELEMENT_FOCUS:r.blue.dodger,STROKE:r.gray.botticelli,TEXT_PRIMARY:r.blue.haiti,TEXT_SECONDARY:r.blue.hawkes,TEXT_TERTIARY:r.gray.cadet,DARK_TERTIARY:r.gray.waterloo,DARK_ELEMENT_TERTIARY:r.gray.waterloo,DARK_BACKGROUND_PRIMARY:r.blue.vulcan,DARK_BACKGROUND_SECONDARY:r.blue.ebony,DARK_ELEMENT_ACTIVE:r.blue.oxford,DARK_ELEMENT_DISABLED:r.gray.trout,DARK_ELEMENT_FOCUS:r.blue.denim,DARK_STROKE:r.gray.fiord}))(l),d={BLACK:l.black,CURRENT:l.current,TRANSPARENT:l.transparent,WHITE:l.white,...L,...P};var o=require("@emotion/react");var n=o.css`
  --color: ${d.TEXT_PRIMARY};
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
`,p=o.css`
  ${n};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,V=o.css`
  ${p};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,q=o.css`
  ${p};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,J=o.css`
  ${p};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,Y=o.css`
  ${p};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,j=o.css`
  ${Y};

  --font-weight: 600;
`,T=o.css`
  ${n};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Q=o.css`
  ${n};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Z=o.css`
  ${n};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,rr=o.css`
  ${n};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var b=s.css`
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
`,g=s.css`
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
`,u=s.css`
  [class*='text'] {
    ${T};

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
`,v=s.css`
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
`,x=s.css`
  [data-direction='horizontal'] & {
    height: var(--slider-dot-size);
    width: 100%;
  }
  [data-direction='vertical'] & {
    height: 100%;
    width: var(--slider-dot-size);
  }
`,y=s.css`
  background-color: var(--slider-track-color);
  border-radius: inherit;
  left: auto; /* safeguard */

  [data-direction='horizontal'] & {
    height: var(--slider-track-size);
  }
  [data-direction='vertical'] & {
    width: var(--slider-track-size);
  }
`,h=s.css`
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
    ${b};
  }
  [class*='handle'] {
    ${g};
  }
  [class*='mark'] {
    ${u};
  }
  [class*='rail'] {
    ${v};
  }
  [class*='step'] {
    ${x};
  }
  [class*='track'] {
    ${y};
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
`,f=s.css`
  --slider-border-radius: 1000px;
  --slider-border-size: 2px;
  --slider-color-primary: ${d.ELEMENT_FOCUS};
  --slider-color-secondary: ${d.STROKE};
  --slider-dx: 0;
  --slider-dy: 0;
  --slider-size: 16px;

  --slider-dot-border-color: var(--slider-color-secondary);
  --slider-dot-color: ${d.WHITE};
  --slider-dot-size: calc(0.5 * var(--slider-size));

  --slider-handle-border-color: var(--slider-color-secondary);
  --slider-handle-color: ${d.WHITE};
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
`;var A=({bleed:r=!0,className:e,reverse:i,style:a,theme:t,vertical:E,...w})=>{let[K,S]=z(w,["data-hover","data-qa"]);return(0,m.jsx)("div",{...K,className:e,css:f,"data-bleed":r,"data-direction":E?"vertical":"horizontal","data-reverse":i||null,"data-theme":t||null,style:a},(0,m.jsx)(R.default,{...S,css:h,reverse:i,vertical:E}))};0&&(module.exports={Slider,dot,handle,mark,rail,slider,step,track,wrapper});
//# sourceMappingURL=index.js.map