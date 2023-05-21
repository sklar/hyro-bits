/** Components v6.10.0 */
"use strict";var K=Object.create;var h=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var O=(t,o)=>{for(var a in o)h(t,a,{get:o[a],enumerable:!0})},T=(t,o,a,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of S(o))!C.call(t,r)&&r!==a&&h(t,r,{get:()=>o[r],enumerable:!(i=$(o,r))||i.enumerable});return t};var R=(t,o,a)=>(a=t!=null?K(D(t)):{},T(o||!t||!t.__esModule?h(a,"default",{value:t,enumerable:!0}):a,t)),Y=t=>T(h({},"__esModule",{value:!0}),t);var F={};O(F,{Switch:()=>A,container:()=>E,indicator:()=>w,label:()=>b});module.exports=Y(F);var f=R(require("@emotion/styled")),m=require("case-anything"),n=R(require("react"));var y=(t,o)=>{let a=Object.keys(t).filter(i=>!o.includes(i));return[o.reduce((i,r)=>(i[r]=t[r],i),{}),a.reduce((i,r)=>(i[r]=t[r],i),{})]};var p=require("@emotion/react");var s={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},P=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(s),B=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(s),e={BLACK:s.black,CURRENT:s.current,TRANSPARENT:s.transparent,WHITE:s.white,...P,...B};var c=require("@emotion/react");var l=c.css`
  --color: ${e.TEXT_PRIMARY};
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
`,d=c.css`
  ${l};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Z=c.css`
  ${d};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,tt=c.css`
  ${d};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,et=c.css`
  ${d};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,U=c.css`
  ${d};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,rt=c.css`
  ${U};

  --font-weight: 600;
`,ot=c.css`
  ${l};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,x=c.css`
  ${l};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,it=c.css`
  ${l};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,at=c.css`
  ${l};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var E=p.css`
  --switch-animation-duration: 0.2s;
  --switch-border-color: ${e.STROKE};
  --switch-border-size: 1.5px;
  --switch-color: ${e.STROKE};
  --switch-color-contrast: ${e.WHITE};
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
    --switch-border-color: ${e.ELEMENT_PRIMARY};
    --switch-color: ${e.ELEMENT_PRIMARY};

    &[data-theme='dark'] {
      --switch-border-color: ${e.ELEMENT_SECONDARY};
    }
  }

  &[data-disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`,w=p.css`
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
    --switch-border-color: ${e.ELEMENT_PRIMARY};
    --switch-border-size: calc(var(--switch-size) / 2);
    --switch-color: ${e.ELEMENT_PRIMARY};
    --switch-indicator-opacity: 1;

    [data-theme='dark'] & {
      --switch-border-color: ${e.ELEMENT_SECONDARY};
      --switch-color: ${e.ELEMENT_SECONDARY};
      --switch-color-contrast: ${e.DARK_ELEMENT_FOCUS};
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
    --switch-border-color: ${e.ELEMENT_PRIMARY};
    --switch-border-size: calc(var(--switch-size) / 4);
    --switch-color: ${e.ELEMENT_PRIMARY};

    [data-theme='dark'] & {
      --switch-border-color: ${e.ELEMENT_SECONDARY};
      --switch-color: ${e.ELEMENT_SECONDARY};
      --switch-color-contrast: ${e.DARK_ELEMENT_FOCUS};
    }
  }

  /* Appearance: TOGGLE */
  &[data-appearance='toggle'] {
    --switch-border-size: 8px;
    --switch-color: ${e.TERTIARY};
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
      --switch-color: ${e.DARK_ELEMENT_TERTIARY};
    }
  }

  input:checked ~ &[data-appearance='toggle'] {
    --switch-color: ${e.ELEMENT_PRIMARY};

    &::before {
      transform: translateX(var(--switch-size));
    }

    [data-theme='dark'] & {
      --switch-color: ${e.DARK_ELEMENT_FOCUS};
    }
  }
`,b=p.css`
  ${x};

  --color: inherit;
  --font-size: inherit;
  --font-weight: inherit;
`;var A=(0,n.forwardRef)(({as:t="label",children:o,className:a,disabled:i,label:r,style:v,synthetic:N,theme:_,type:u="checkbox",appearance:g=u==="radio"?"radio":"checkbox",...M},k)=>{let[I,z]=y(M,["data-hover"]),L={"data-qa":["switch",`${g}`,...r?[`${(0,m.kebabCase)(r)}`]:[]].join("-")};return n.default.createElement(H,{...I,as:t,className:a,"data-disabled":i||null,"data-label":r||null,"data-synthetic":N||null,"data-theme":_||null,style:v},n.default.createElement("input",{ref:k,type:u,disabled:i,...L,...z}),n.default.createElement(G,{"data-appearance":g}),o,r&&n.default.createElement(X,null,r))}),H=f.default.label`
  ${E};
`,G=f.default.span`
  ${w};
`,X=f.default.span`
  ${b};
`;0&&(module.exports={Switch,container,indicator,label});
//# sourceMappingURL=index.js.map