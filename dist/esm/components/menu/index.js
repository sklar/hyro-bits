/** Components v6.3.2 */
import S from"@emotion/styled";import K,{forwardRef as Y}from"react";import{css as n}from"@emotion/react";var a={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},_=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(a),L=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(a),t={BLACK:a.black,CURRENT:a.current,TRANSPARENT:a.transparent,WHITE:a.white,..._,...L};import{css as r}from"@emotion/react";var p=r`
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
`,u=r`
  ${p};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,oe=r`
  ${u};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,ie=r`
  ${u};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,b=r`
  ${u};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,I=r`
  ${u};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,ae=r`
  ${I};

  --font-weight: 600;
`,y=r`
  ${p};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,A=r`
  ${p};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,ne=r`
  ${p};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,de=r`
  ${p};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;import N from"@emotion/styled";import z,{forwardRef as k}from"react";import{css as g}from"@emotion/react";var f=g`
  height: var(--size);
  margin-inline: var(--space);
`,$=g`
  margin-block: var(--space);
  width: var(--size);
`,m=g`
  --color: ${t.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${f};
  }
  &:is([data-divider='vertical']) {
    ${$};
  }

  [data-theme='dark'] & {
    --color: ${t.DARK_STROKE};
  }
`;var C=k(({as:e="span",direction:o="vertical",size:i="2px",space:d="0",style:s,...l},c)=>z.createElement(w,{...l,as:e,"data-divider":o,ref:c,style:{["--size"]:i,["--space"]:d,...s}})),w=N.span`
  ${m};
`;var v=n`
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
`,E=n`
  ${m};
  ${f};
`,T=n`
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  & + & {
    margin-top: var(--gap);

    &::before {
      ${E};
      content: '';
    }
  }
`,x=n`
  ${b};

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
`,h=n`
  ${A};

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
    ${y};
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
`,R=n`
  ${b};

  margin-bottom: 12px;
  margin-top: 8px;

  [data-theme='dark'] & {
    --color: ${t.WHITE};
  }
`;var H=Y(({active:e,justify:o,padding:i,size:d,theme:s,...l},c)=>{let M={"data-qa":"menu"};return K.createElement(P,{"data-active":e||null,"data-justify":o||null,"data-padding":i||null,"data-theme":s||null,ref:c,style:{["--size"]:d},...M,...l})}),P=S.section`
  ${v};
`;import O from"@emotion/styled";var G=O.div`
  ${E};
`;import{jsx as D}from"@emotion/react";var B=e=>D("div",{css:T,"data-menu":"group",...e}),U=({children:e,variant:o,...i})=>D("h5",{css:x,"data-variant":o||null,...i},e);import X from"@emotion/styled";import W,{forwardRef as j}from"react";var q=j(({active:e,as:o="button",disabled:i,justify:d,theme:s,...l},c)=>W.createElement(F,{as:o,"data-active":e||null,"data-disabled":i||null,"data-justify":d||null,"data-theme":s||null,disabled:o==="button"?!!i:void 0,ref:c,type:o==="button"?"button":void 0,...{"data-qa":"menu-item"},...l})),F=X.button`
  ${h};
`;import J from"@emotion/styled";var V=J.h5`
  ${R};
`;export{H as Menu,G as MenuDivider,B as MenuGroup,U as MenuGroupTitle,q as MenuItem,V as MenuTitle,E as divider,T as group,x as groupTitle,h as item,v as menu,R as title};
//# sourceMappingURL=index.js.map