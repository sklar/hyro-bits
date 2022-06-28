/** Components v5.3.0 */
var M=Object.defineProperty,O=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(r,e,i)=>e in r?M(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,c=(r,e)=>{for(var i in e||(e={}))m.call(e,i)&&k(r,i,e[i]);if(f)for(var i of f(e))E.call(e,i)&&k(r,i,e[i]);return r},g=(r,e)=>O(r,L(e));var z=(r,e)=>{var i={};for(var t in r)m.call(r,t)&&e.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&f)for(var t of f(r))e.indexOf(t)<0&&E.call(r,t)&&(i[t]=r[t]);return i};import{jsx as _}from"@emotion/react";import U from"rc-slider";var T=(r,e)=>{let i=Object.keys(r).filter(t=>!e.includes(t));return[e.reduce((t,d)=>(t[d]=r[d],t),{}),i.reduce((t,d)=>(t[d]=r[d],t),{})]};import{css as s}from"@emotion/react";var p={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},P=(r=>({DANGER:r.red.radical,NOTICE:r.blue.ribbon1,SUCCESS:r.green.caribbean,WARNING:r.orange.amber}))(p),Y=(r=>({PRIMARY:r.blue.ribbon,SECONDARY:r.blue.hawkes,TERTIARY:r.gray.cadet,BACKGROUND_PRIMARY:r.white,BACKGROUND_SECONDARY:r.gray.porcelain,ELEMENT_PRIMARY:r.blue.ribbon,ELEMENT_SECONDARY:r.blue.hawkes,ELEMENT_TERTIARY:r.gray.cadet,ELEMENT_ACTIVE:r.blue.science,ELEMENT_DISABLED:r.gray.geyser,ELEMENT_FOCUS:r.blue.dodger,STROKE:r.gray.botticelli,TEXT_PRIMARY:r.blue.haiti,TEXT_SECONDARY:r.blue.hawkes,TEXT_TERTIARY:r.gray.cadet,DARK_TERTIARY:r.gray.waterloo,DARK_ELEMENT_TERTIARY:r.gray.waterloo,DARK_BACKGROUND_PRIMARY:r.blue.vulcan,DARK_BACKGROUND_SECONDARY:r.blue.ebony,DARK_ELEMENT_ACTIVE:r.blue.oxford,DARK_ELEMENT_DISABLED:r.gray.trout,DARK_ELEMENT_FOCUS:r.blue.denim,DARK_STROKE:r.gray.fiord}))(p),o=c(c({BLACK:p.black,CURRENT:p.current,TRANSPARENT:p.transparent,WHITE:p.white},P),Y);import{css as a}from"@emotion/react";var h=a`
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
`,b=a`
  ${h};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Q=a`
  ${b};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Z=a`
  ${b};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,rr=a`
  ${b};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,B=a`
  ${b};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,er=a`
  ${B};

  --font-weight: 600;
`,R=a`
  ${h};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,ir=a`
  ${h};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,tr=a`
  ${h};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,ar=a`
  ${h};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var A=s`
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
`,w=s`
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
`,K=s`
  [class*='text'] {
    ${R};

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
`,S=s`
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
`,I=s`
  [data-direction='horizontal'] & {
    height: var(--slider-dot-size);
    width: 100%;
  }
  [data-direction='vertical'] & {
    height: 100%;
    width: var(--slider-dot-size);
  }
`,N=s`
  background-color: var(--slider-track-color);
  border-radius: inherit;
  left: auto; /* safeguard */

  [data-direction='horizontal'] & {
    height: var(--slider-track-size);
  }
  [data-direction='vertical'] & {
    width: var(--slider-track-size);
  }
`,u=s`
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
    ${A};
  }
  [class*='handle'] {
    ${w};
  }
  [class*='mark'] {
    ${K};
  }
  [class*='rail'] {
    ${S};
  }
  [class*='step'] {
    ${I};
  }
  [class*='track'] {
    ${N};
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
`,v=s`
  --slider-border-radius: 1000px;
  --slider-border-size: 2px;
  --slider-color-primary: ${o.ELEMENT_FOCUS};
  --slider-color-secondary: ${o.STROKE};
  --slider-dx: 0;
  --slider-dy: 0;
  --slider-size: 16px;

  --slider-dot-border-color: var(--slider-color-secondary);
  --slider-dot-color: ${o.WHITE};
  --slider-dot-size: calc(0.5 * var(--slider-size));

  --slider-handle-border-color: var(--slider-color-secondary);
  --slider-handle-color: ${o.WHITE};
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
`;var G=H=>{var x=H,{bleed:r=!0,className:e,reverse:i,style:t,theme:d,vertical:y}=x,D=z(x,["bleed","className","reverse","style","theme","vertical"]);let[$,C]=T(D,["data-hover","data-qa"]);return _("div",g(c({},$),{className:e,css:v,"data-bleed":r,"data-direction":y?"vertical":"horizontal","data-reverse":i||null,"data-theme":d||null,style:t}),_(U,g(c({},C),{css:u,reverse:i,vertical:y})))};export{G as Slider,A as dot,w as handle,K as mark,S as rail,u as slider,I as step,N as track,v as wrapper};
//# sourceMappingURL=index.js.map