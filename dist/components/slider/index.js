/** Components v5.1.0 */
var Y=Object.create;var p=Object.defineProperty,B=Object.defineProperties,U=Object.getOwnPropertyDescriptor,G=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,X=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var S=(r,e,i)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,n=(r,e)=>{for(var i in e||(e={}))v.call(e,i)&&S(r,i,e[i]);if(f)for(var i of f(e))K.call(e,i)&&S(r,i,e[i]);return r},y=(r,e)=>B(r,G(e)),I=r=>p(r,"__esModule",{value:!0});var N=(r,e)=>{var i={};for(var t in r)v.call(r,t)&&e.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&f)for(var t of f(r))e.indexOf(t)<0&&K.call(r,t)&&(i[t]=r[t]);return i};var W=(r,e)=>{for(var i in e)p(r,i,{get:e[i],enumerable:!0})},_=(r,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of H(e))!v.call(r,a)&&(i||a!=="default")&&p(r,a,{get:()=>e[a],enumerable:!(t=U(e,a))||t.enumerable});return r},F=(r,e)=>_(I(p(r!=null?Y(X(r)):{},"default",!e&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),V=(r=>(e,i)=>r&&r.get(e)||(i=_(I({}),e,1),r&&r.set(e,i),i))(typeof WeakMap!="undefined"?new WeakMap:0);var Q={};W(Q,{Slider:()=>M,dot:()=>x,handle:()=>m,mark:()=>E,rail:()=>k,slider:()=>g,step:()=>z,track:()=>T,wrapper:()=>u});var R=require("@emotion/react"),C=F(require("rc-slider"));var D=(r,e)=>{let i=Object.keys(r).filter(t=>!e.includes(t));return[e.reduce((t,a)=>(t[a]=r[a],t),{}),i.reduce((t,a)=>(t[a]=r[a],t),{})]};var s=require("@emotion/react");var c={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},q=(r=>({DANGER:r.red.radical,NOTICE:r.blue.ribbon1,SUCCESS:r.green.caribbean,WARNING:r.orange.amber}))(c),J=(r=>({PRIMARY:r.blue.ribbon,SECONDARY:r.blue.hawkes,TERTIARY:r.gray.cadet,BACKGROUND_PRIMARY:r.white,BACKGROUND_SECONDARY:r.gray.porcelain,ELEMENT_PRIMARY:r.blue.ribbon,ELEMENT_SECONDARY:r.blue.hawkes,ELEMENT_TERTIARY:r.gray.cadet,ELEMENT_ACTIVE:r.blue.science,ELEMENT_DISABLED:r.gray.geyser,ELEMENT_FOCUS:r.blue.dodger,STROKE:r.gray.botticelli,TEXT_PRIMARY:r.blue.haiti,TEXT_SECONDARY:r.blue.hawkes,TEXT_TERTIARY:r.gray.cadet,DARK_TERTIARY:r.gray.waterloo,DARK_ELEMENT_TERTIARY:r.gray.waterloo,DARK_BACKGROUND_PRIMARY:r.blue.vulcan,DARK_BACKGROUND_SECONDARY:r.blue.ebony,DARK_ELEMENT_ACTIVE:r.blue.oxford,DARK_ELEMENT_DISABLED:r.gray.trout,DARK_ELEMENT_FOCUS:r.blue.denim,DARK_STROKE:r.gray.fiord}))(c),d=n(n({BLACK:c.black,CURRENT:c.current,TRANSPARENT:c.transparent,WHITE:c.white},q),J);var o=require("@emotion/react");var h=o.css`
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
`,b=o.css`
  ${h};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,sr=o.css`
  ${b};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,dr=o.css`
  ${b};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,lr=o.css`
  ${b};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,j=o.css`
  ${b};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,nr=o.css`
  ${j};

  --font-weight: 600;
`,$=o.css`
  ${h};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,cr=o.css`
  ${h};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,pr=o.css`
  ${h};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,hr=o.css`
  ${h};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var x=s.css`
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
`,m=s.css`
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
`,E=s.css`
  [class*='text'] {
    ${$};

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
`,k=s.css`
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
`,z=s.css`
  [data-direction='horizontal'] & {
    height: var(--slider-dot-size);
    width: 100%;
  }
  [data-direction='vertical'] & {
    height: 100%;
    width: var(--slider-dot-size);
  }
`,T=s.css`
  background-color: var(--slider-track-color);
  border-radius: inherit;
  left: auto; /* safeguard */

  [data-direction='horizontal'] & {
    height: var(--slider-track-size);
  }
  [data-direction='vertical'] & {
    width: var(--slider-track-size);
  }
`,g=s.css`
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
    ${x};
  }
  [class*='handle'] {
    ${m};
  }
  [class*='mark'] {
    ${E};
  }
  [class*='rail'] {
    ${k};
  }
  [class*='step'] {
    ${z};
  }
  [class*='track'] {
    ${T};
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
`,u=s.css`
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
`;var M=Z=>{var w=Z,{bleed:r=!0,className:e,reverse:i,style:t,theme:a,vertical:A}=w,O=N(w,["bleed","className","reverse","style","theme","vertical"]);let[L,P]=D(O,["data-hover","data-qa"]);return(0,R.jsx)("div",y(n({},L),{className:e,css:u,"data-bleed":r,"data-direction":A?"vertical":"horizontal","data-reverse":i||null,"data-theme":a||null,style:t}),(0,R.jsx)(C.default,y(n({},P),{css:g,reverse:i,vertical:A})))};module.exports=V(Q);0&&(module.exports={Slider,dot,handle,mark,rail,slider,step,track,wrapper});
//# sourceMappingURL=index.js.map