/** Components v6.1.1 */
var H=Object.defineProperty,P=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(e,r,o)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,a=(e,r)=>{for(var o in r||(r={}))N.call(r,o)&&k(e,o,r[o]);if(v)for(var o of v(r))z.call(r,o)&&k(e,o,r[o]);return e},C=(e,r)=>P(e,O(r));var p=(e,r)=>{var o={};for(var i in e)N.call(e,i)&&r.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&v)for(var i of v(e))r.indexOf(i)<0&&z.call(e,i)&&(o[i]=e[i]);return o};import J from"@emotion/styled";import V,{forwardRef as Q}from"react";import{css as u}from"@emotion/react";var m={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},G=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(m),B=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(m),t=a(a({BLACK:m.black,CURRENT:m.current,TRANSPARENT:m.transparent,WHITE:m.white},G),B);import{css as s}from"@emotion/react";var b=s`
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
`,T=s`
  ${b};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,ve=s`
  ${T};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Te=s`
  ${T};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,R=s`
  ${T};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,U=s`
  ${T};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,xe=s`
  ${U};

  --font-weight: 600;
`,w=s`
  ${b};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,S=s`
  ${b};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,he=s`
  ${b};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Re=s`
  ${b};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;import X from"@emotion/styled";import W,{forwardRef as j}from"react";import{css as M}from"@emotion/react";var x=M`
  height: var(--size);
  margin-inline: var(--space);
`,K=M`
  margin-block: var(--space);
  width: var(--size);
`,g=M`
  --color: ${t.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${x};
  }
  &:is([data-divider='vertical']) {
    ${K};
  }

  [data-theme='dark'] & {
    --color: ${t.DARK_STROKE};
  }
`;var q=j((L,E)=>{var c=L,{as:e="span",direction:r="vertical",size:o="2px",space:i="0",style:l}=c,f=p(c,["as","direction","size","space","style"]);return W.createElement(F,C(a({},f),{as:e,"data-divider":r,ref:E,style:a({["--size"]:o,["--space"]:i},l)}))}),F=X.span`
  ${g};
`;var y=u`
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
`,h=u`
  ${g};
  ${x};
`,A=u`
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  & + & {
    margin-top: var(--gap);

    &::before {
      ${h};
      content: '';
    }
  }
`,$=u`
  ${R};

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
`,D=u`
  ${S};

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
    ${w};
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
`,_=u`
  ${R};

  margin-bottom: 12px;
  margin-top: 8px;

  [data-theme='dark'] & {
    --color: ${t.WHITE};
  }
`;var Z=Q((L,E)=>{var c=L,{active:e,justify:r,padding:o,size:i,theme:l}=c,f=p(c,["active","justify","padding","size","theme"]);let I={"data-qa":"menu"};return V.createElement(ee,a(a({"data-active":e||null,"data-justify":r||null,"data-padding":o||null,"data-theme":l||null,ref:E,style:{["--size"]:i}},I),f))}),ee=J.section`
  ${y};
`;import te from"@emotion/styled";var re=te.div`
  ${h};
`;import{jsx as Y}from"@emotion/react";var oe=e=>Y("div",a({css:A,"data-menu":"group"},e)),ie=i=>{var l=i,{children:e,variant:r}=l,o=p(l,["children","variant"]);return Y("h5",a({css:$,"data-variant":r||null},o),e)};import ae from"@emotion/styled";import ne,{forwardRef as de}from"react";var se=de((L,E)=>{var c=L,{active:e,as:r="button",disabled:o,justify:i,theme:l}=c,f=p(c,["active","as","disabled","justify","theme"]);return ne.createElement(le,a(a({as:r,"data-active":e||null,"data-disabled":o||null,"data-justify":i||null,"data-theme":l||null,disabled:r==="button"?!!o:void 0,ref:E,type:r==="button"?"button":void 0},{"data-qa":"menu-item"}),f))}),le=ae.button`
  ${D};
`;import ce from"@emotion/styled";var pe=ce.h5`
  ${_};
`;export{Z as Menu,re as MenuDivider,oe as MenuGroup,ie as MenuGroupTitle,se as MenuItem,pe as MenuTitle,h as divider,A as group,$ as groupTitle,D as item,y as menu,_ as title};
//# sourceMappingURL=index.js.map