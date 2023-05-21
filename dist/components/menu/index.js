/** Components v6.10.0 */
"use strict";var X=Object.create;var E=Object.defineProperty;var W=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var J=(e,r)=>{for(var o in r)E(e,o,{get:r[o],enumerable:!0})},I=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of j(r))!F.call(e,a)&&a!==o&&E(e,a,{get:()=>r[a],enumerable:!(n=W(r,a))||n.enumerable});return e};var d=(e,r,o)=>(o=e!=null?X(q(e)):{},I(r||!e||!e.__esModule?E(o,"default",{value:e,enumerable:!0}):o,e)),V=e=>I(E({},"__esModule",{value:!0}),e);var ae={};J(ae,{Menu:()=>S,MenuDivider:()=>Y,MenuGroup:()=>H,MenuGroupTitle:()=>P,MenuItem:()=>G,MenuTitle:()=>U,divider:()=>f,group:()=>h,groupTitle:()=>R,item:()=>M,menu:()=>x,title:()=>y});module.exports=V(ae);var w=d(require("@emotion/styled")),A=d(require("react"));var s=require("@emotion/react");var l={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},Q=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(l),Z=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(l),t={BLACK:l.black,CURRENT:l.current,TRANSPARENT:l.transparent,WHITE:l.white,...Q,...Z};var i=require("@emotion/react");var m=i.css`
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
`,b=i.css`
  ${m};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,pe=i.css`
  ${b};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,me=i.css`
  ${b};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,D=i.css`
  ${b};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ee=i.css`
  ${b};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,ue=i.css`
  ${ee};

  --font-weight: 600;
`,N=i.css`
  ${m};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,z=i.css`
  ${m};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,fe=i.css`
  ${m};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Ee=i.css`
  ${m};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var C=d(require("@emotion/styled")),T=d(require("react"));var g=require("@emotion/react");var v=g.css`
  height: var(--size);
  margin-inline: var(--space);
`,k=g.css`
  margin-block: var(--space);
  width: var(--size);
`,u=g.css`
  --color: ${t.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${v};
  }
  &:is([data-divider='vertical']) {
    ${k};
  }

  [data-theme='dark'] & {
    --color: ${t.DARK_STROKE};
  }
`;var te=(0,T.forwardRef)(({as:e="span",direction:r="vertical",size:o="2px",space:n="0",style:a,...c},p)=>T.default.createElement(re,{...c,as:e,"data-divider":r,ref:p,style:{["--size"]:o,["--space"]:n,...a}})),re=C.default.span`
  ${u};
`;var x=s.css`
  --background-color: ${t.WHITE};
  --border-color: ${t.WHITE};
  --border-size: 2px;
  --box-shadow: #cbcedc;
  --gap: 4px;
  --indent: 8px;
  --index: 1;
  --radius: 6px;
  --size: ;

  background-color: var(--background-color);
  border: var(--border-size) solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: 0 3px 9px var(--box-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: calc(1.5 * var(--indent)) var(--indent);
  user-select: none;
  width: var(--size);
  z-index: var(--index);

  &[data-padding] {
    padding: calc(2 * var(--indent));
    padding-top: calc(1.5 * var(--indent));
  }

  [data-theme='dark'] &,
  &[data-theme='dark'] {
    --background-color: ${t.DARK_BACKGROUND_PRIMARY};
    --border-color: ${t.DARK_STROKE};
    --box-shadow: ${t.BLACK};
  }
`,f=s.css`
  ${u};
  ${v};
`,h=s.css`
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  & + & {
    margin-top: var(--gap);

    &::before {
      ${f};
      content: '';
    }
  }
`,R=s.css`
  ${D};

  align-items: center;
  display: flex;
  padding: var(--indent);
  padding-bottom: calc(0.5 * var(--indent));

  &[data-variant='primary'] {
    --font-size: 16px;
    --line-height: calc(24 / 16);

    display: inline-block;
    padding-bottom: var(--indent);

    &::after {
      content: ':';
    }
  }

  [data-theme='dark'] & {
    --color: ${t.WHITE};
  }
`,M=s.css`
  ${z};

  --background-color: ;
  --color: ;
  --gap: 8px;
  --indent: 8px;
  --radius: 6px;
  --size: 32px;

  align-items: center;
  background-color: var(--background-color);
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  gap: var(--gap);
  min-height: var(--size);
  outline: 0;
  padding: var(--indent);
  text-align: left;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  transition-timing-function: ease-in-out;

  &[data-justify],
  [data-justify] & {
    justify-content: space-between;

    & > :not([data-icon]) {
      flex: 1;
    }
  }

  .primary,
  .secondary {
    transition: color 0.2s;
  }
  .primary {
    color: var(--color, inherit);

    & + .secondary {
      margin-top: 2px;
    }
  }
  .secondary {
    ${N};
    color: var(--color, inherit);

    --color: ${t.ELEMENT_TERTIARY};
  }

  [data-menu='group'] & {
    padding-left: calc(3 * var(--indent));
  }

  &:is(:active, [data-pressed]) {
    --background-color: ${t.ELEMENT_SECONDARY};
    --color: ${t.ELEMENT_PRIMARY};
  }
  &:is(:focus-visible, :hover, [data-hover]) {
    --background-color: ${t.ELEMENT_SECONDARY};
  }
  &:is([data-active]) {
    --color: ${t.ELEMENT_PRIMARY};
  }

  &:is(:active, :focus-visible, :hover, [data-active], [data-hover], [data-pressed]) {
    .primary {
      --color: ${t.ELEMENT_PRIMARY};
    }
    .secondary {
      --color: ${t.TEXT_PRIMARY};
    }
  }

  &:is([data-disabled]) {
    cursor: default;
    pointer-events: none;

    &,
    .primary,
    .secondary {
      --color: ${t.ELEMENT_TERTIARY};
    }
  }

  [data-theme='dark'] & {
    --color: ${t.WHITE};

    &:is(:active, [data-pressed]) {
      --background-color: ${t.DARK_ELEMENT_FOCUS};
    }
    &:is(:focus-visible, :hover, [data-hover]) {
      --background-color: ${t.DARK_ELEMENT_ACTIVE};
    }

    &:is(:active, :focus-visible, :hover, [data-active], [data-hover], [data-pressed]) {
      .primary,
      .secondary {
        --color: ${t.WHITE};
      }
    }

    &:is([data-disabled]) {
      &,
      .primary,
      .secondary {
        --color: ${t.DARK_ELEMENT_TERTIARY};
      }
    }
  }
`,y=s.css`
  ${D};

  margin-bottom: 12px;
  margin-top: 8px;

  [data-theme='dark'] & {
    --color: ${t.WHITE};
  }
`;var S=(0,A.forwardRef)(({active:e,justify:r,padding:o,size:n,theme:a,...c},p)=>{let L={"data-qa":"menu"};return A.default.createElement(oe,{"data-active":e||null,"data-justify":r||null,"data-padding":o||null,"data-theme":a||null,ref:p,style:{["--size"]:n},...L,...c})}),oe=w.default.section`
  ${x};
`;var K=d(require("@emotion/styled"));var Y=K.default.div`
  ${f};
`;var _=require("@emotion/react");var H=e=>(0,_.jsx)("div",{css:h,"data-menu":"group",...e}),P=({children:e,variant:r,...o})=>(0,_.jsx)("h5",{css:R,"data-variant":r||null,...o},e);var O=d(require("@emotion/styled")),$=d(require("react"));var G=(0,$.forwardRef)(({active:e,as:r="button",disabled:o,justify:n,theme:a,...c},p)=>$.default.createElement(ie,{as:r,"data-active":e||null,"data-disabled":o||null,"data-justify":n||null,"data-theme":a||null,disabled:r==="button"?!!o:void 0,ref:p,type:r==="button"?"button":void 0,...{"data-qa":"menu-item"},...c})),ie=O.default.button`
  ${M};
`;var B=d(require("@emotion/styled"));var U=B.default.h5`
  ${y};
`;0&&(module.exports={Menu,MenuDivider,MenuGroup,MenuGroupTitle,MenuItem,MenuTitle,divider,group,groupTitle,item,menu,title});
//# sourceMappingURL=index.js.map