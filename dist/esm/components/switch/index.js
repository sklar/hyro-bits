/** Components v5.3.1 */
var O=Object.defineProperty,Y=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(t,r,i)=>r in t?O(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,n=(t,r)=>{for(var i in r||(r={}))m.call(r,i)&&v(t,i,r[i]);if(p)for(var i of p(r))A.call(r,i)&&v(t,i,r[i]);return t},N=(t,r)=>Y(t,P(r));var _=(t,r)=>{var i={};for(var o in t)m.call(t,o)&&r.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&p)for(var o of p(t))r.indexOf(o)<0&&A.call(t,o)&&(i[o]=t[o]);return i};import T from"@emotion/styled";import{kebabCase as G}from"case-anything";import w,{forwardRef as X}from"react";var M=(t,r)=>{let i=Object.keys(t).filter(o=>!r.includes(o));return[r.reduce((o,a)=>(o[a]=t[a],o),{}),i.reduce((o,a)=>(o[a]=t[a],o),{})]};import{css as b}from"@emotion/react";var h={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},B=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(h),U=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(h),e=n(n({BLACK:h.black,CURRENT:h.current,TRANSPARENT:h.transparent,WHITE:h.white},B),U);import{css as c}from"@emotion/react";var d=c`
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
`,E=c`
  ${d};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,it=c`
  ${E};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,at=c`
  ${E};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,ct=c`
  ${E};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,H=c`
  ${E};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,nt=c`
  ${H};

  --font-weight: 600;
`,st=c`
  ${d};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,k=c`
  ${d};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,lt=c`
  ${d};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,ht=c`
  ${d};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var f=b`
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
`,u=b`
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
`,g=b`
  ${k};

  --color: inherit;
  --font-size: inherit;
  --font-weight: inherit;
`;var F=X((V,$)=>{var x=V,{as:t="label",children:r,className:i,disabled:o,label:a,style:I,synthetic:z,theme:L,type:R="checkbox",appearance:y=R==="radio"?"radio":"checkbox"}=x,K=_(x,["as","children","className","disabled","label","style","synthetic","theme","type","appearance"]);let[S,D]=M(K,["data-hover"]),C={"data-qa":["switch",`${y}`,...a?[`${G(a)}`]:[]].join("-")};return w.createElement(W,N(n({},S),{as:t,className:i,"data-disabled":o||null,"data-label":a||null,"data-synthetic":z||null,"data-theme":L||null,style:I}),w.createElement("input",n(n({ref:$,type:R,disabled:o},C),D)),w.createElement(j,{"data-appearance":y}),r,a&&w.createElement(q,null,a))}),W=T.label`
  ${f};
`,j=T.span`
  ${u};
`,q=T.span`
  ${g};
`;export{F as Switch,f as container,u as indicator,g as label};
//# sourceMappingURL=index.js.map