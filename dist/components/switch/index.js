/** Components v5.3.0 */
var H=Object.create;var d=Object.defineProperty,G=Object.defineProperties,X=Object.getOwnPropertyDescriptor,F=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,j=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e)=>{for(var r in e||(e={}))R.call(e,r)&&v(t,r,e[r]);if(E)for(var r of E(e))A.call(e,r)&&v(t,r,e[r]);return t},N=(t,e)=>G(t,F(e)),_=t=>d(t,"__esModule",{value:!0});var M=(t,e)=>{var r={};for(var i in t)R.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&E)for(var i of E(t))e.indexOf(i)<0&&A.call(t,i)&&(r[i]=t[i]);return r};var q=(t,e)=>{for(var r in e)d(t,r,{get:e[r],enumerable:!0})},k=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of W(e))!R.call(t,a)&&(r||a!=="default")&&d(t,a,{get:()=>e[a],enumerable:!(i=X(e,a))||i.enumerable});return t},I=(t,e)=>k(_(d(t!=null?H(j(t)):{},"default",!e&&t&&t.__esModule?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),V=(t=>(e,r)=>t&&t.get(e)||(r=k(_({}),e,1),t&&t.set(e,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var ot={};q(ot,{Switch:()=>$,container:()=>f,indicator:()=>u,label:()=>g});var T=I(require("@emotion/styled")),K=require("case-anything"),l=I(require("react"));var z=(t,e)=>{let r=Object.keys(t).filter(i=>!e.includes(i));return[e.reduce((i,a)=>(i[a]=t[a],i),{}),r.reduce((i,a)=>(i[a]=t[a],i),{})]};var b=require("@emotion/react");var h={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},J=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(h),Q=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(h),o=n(n({BLACK:h.black,CURRENT:h.current,TRANSPARENT:h.transparent,WHITE:h.white},J),Q);var c=require("@emotion/react");var p=c.css`
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
`,w=c.css`
  ${p};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,dt=c.css`
  ${w};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,pt=c.css`
  ${w};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Et=c.css`
  ${w};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,Z=c.css`
  ${w};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,wt=c.css`
  ${Z};

  --font-weight: 600;
`,bt=c.css`
  ${p};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,L=c.css`
  ${p};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,ft=c.css`
  ${p};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,ut=c.css`
  ${p};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var f=b.css`
  --switch-animation-duration: 0.2s;
  --switch-border-color: ${o.STROKE};
  --switch-border-size: 1.5px;
  --switch-color: ${o.STROKE};
  --switch-color-contrast: ${o.WHITE};
  --switch-gap: 8px;
  --switch-radius: 4px;
  --switch-size: 16px;

  align-items: flex-start;
  /* color: var(--switch-color); */
  cursor: pointer;
  display: inline-flex;
  gap: var(--switch-gap);
  max-width: 100%;
  position: relative;
  user-select: none;

  input {
    height: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 0;
  }

  &[data-theme='dark'] {
    --switch-border-color: #969cac;
  }

  &:is(:focus-within):not([data-synthetic]),
  &:is(:hover, label:hover *, [data-hover]) {
    --switch-border-color: ${o.ELEMENT_PRIMARY};
    --switch-color: ${o.ELEMENT_PRIMARY};

    &[data-theme='dark'] {
      --switch-border-color: ${o.ELEMENT_SECONDARY};
    }
  }

  &[data-disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`,u=b.css`
  background-color: var(--switch-color);
  border-radius: var(--switch-radius);
  box-shadow: inset 0 0 0 var(--switch-border-size) var(--switch-border-color);
  color: var(--switch-color);
  display: block;
  flex-shrink: 0;
  height: var(--switch-size);
  pointer-events: none;
  position: relative;
  width: var(--switch-size);

  /* Appearance: CHECKBOX */
  &[data-appearance='checkbox'] {
    --switch-indicator-angle: -45deg;
    --switch-indicator-opacity: 0;
    --switch-indicator-size: 9;
    --switch-indicator-x: -5;
    --switch-indicator-y: -1.5;

    background-color: var(--switch-color-contrast);
    transition: box-shadow var(--switch-animation-duration);

    &::after,
    &::before {
      background-color: var(--switch-color-contrast);
      border-radius: calc(var(--switch-size) / 8);
      content: '';
      height: calc(var(--switch-size) / 16 * 2.5);
      left: 50%;
      opacity: var(--switch-indicator-opacity);
      position: absolute;
      top: 50%;
      transform: translate(
          calc(var(--switch-size) / var(--switch-indicator-x)),
          calc(var(--switch-size) / 16 * var(--switch-indicator-y))
        )
        rotate(var(--switch-indicator-angle));
      transition: opacity 0.1s var(--switch-animation-duration) linear;
      width: calc(var(--switch-size) / 16 * var(--switch-indicator-size));
      will-change: opacity, transform, width;
    }

    &::after {
      --switch-indicator-angle: 45deg;
      --switch-indicator-size: 6;
      --switch-indicator-x: -3;
      --switch-indicator-y: -0.5;
    }
  }

  input:checked ~ &[data-appearance='checkbox'] {
    --switch-border-color: ${o.ELEMENT_PRIMARY};
    --switch-border-size: calc(var(--switch-size) / 2);
    --switch-color: ${o.ELEMENT_PRIMARY};
    --switch-indicator-opacity: 1;

    [data-theme='dark'] & {
      --switch-border-color: ${o.ELEMENT_SECONDARY};
      --switch-color: ${o.ELEMENT_SECONDARY};
      --switch-color-contrast: ${o.DARK_ELEMENT_FOCUS};
    }
  }

  /* Appearance: RADIO */
  &[data-appearance='radio']:before {
    background-color: var(--switch-color-contrast);
    border-radius: calc(var(--switch-radius) / 2);
    content: '';
    height: calc(100% - 2 * var(--switch-border-size));
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all var(--switch-animation-duration);
    width: calc(100% - 2 * var(--switch-border-size));
  }

  input:checked ~ &[data-appearance='radio'] {
    --switch-border-color: ${o.ELEMENT_PRIMARY};
    --switch-border-size: calc(var(--switch-size) / 4);
    --switch-color: ${o.ELEMENT_PRIMARY};

    [data-theme='dark'] & {
      --switch-border-color: ${o.ELEMENT_SECONDARY};
      --switch-color: ${o.ELEMENT_SECONDARY};
      --switch-color-contrast: ${o.DARK_ELEMENT_FOCUS};
    }
  }

  /* Appearance: TOGGLE */
  &[data-appearance='toggle'] {
    --switch-border-size: 8px;
    --switch-color: ${o.TERTIARY};
    --switch-indicator-indent: calc(var(--switch-size) / 8);

    border-radius: var(--switch-size);
    box-shadow: none;
    transition: background-color var(--switch-animation-duration);
    width: calc(var(--switch-size) * 2);

    &::before {
      background-color: var(--switch-color-contrast);
      border-radius: 50%;
      content: '';
      height: calc(var(--switch-size) - var(--switch-indicator-indent) * 2);
      left: var(--switch-indicator-indent);
      position: absolute;
      top: var(--switch-indicator-indent);
      transition: transform var(--switch-animation-duration);
      width: calc(var(--switch-size) - var(--switch-indicator-indent) * 2);
      will-change: background-color, transform;
    }

    [data-theme='dark'] & {
      --switch-color: ${o.DARK_ELEMENT_TERTIARY};
    }
  }

  input:checked ~ &[data-appearance='toggle'] {
    --switch-color: ${o.ELEMENT_PRIMARY};

    &::before {
      transform: translateX(var(--switch-size));
    }

    [data-theme='dark'] & {
      --switch-color: ${o.DARK_ELEMENT_FOCUS};
    }
  }
`,g=b.css`
  ${L};

  --color: inherit;
  --font-size: inherit;
  --font-weight: inherit;
`;var $=(0,l.forwardRef)((it,Y)=>{var m=it,{as:t="label",children:e,className:r,disabled:i,label:a,style:S,synthetic:D,theme:C,type:y="checkbox",appearance:x=y==="radio"?"radio":"checkbox"}=m,O=M(m,["as","children","className","disabled","label","style","synthetic","theme","type","appearance"]);let[P,B]=z(O,["data-hover"]),U={"data-qa":["switch",`${x}`,...a?[`${(0,K.kebabCase)(a)}`]:[]].join("-")};return l.default.createElement(tt,N(n({},P),{as:t,className:r,"data-disabled":i||null,"data-label":a||null,"data-synthetic":D||null,"data-theme":C||null,style:S}),l.default.createElement("input",n(n({ref:Y,type:y,disabled:i},U),B)),l.default.createElement(et,{"data-appearance":x}),e,a&&l.default.createElement(rt,null,a))}),tt=T.default.label`
  ${f};
`,et=T.default.span`
  ${u};
`,rt=T.default.span`
  ${g};
`;module.exports=V(ot);0&&(module.exports={Switch,container,indicator,label});
//# sourceMappingURL=index.js.map