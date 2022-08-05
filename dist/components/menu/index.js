/** Components v6.0.0 */
var re=Object.create;var b=Object.defineProperty,oe=Object.defineProperties,ie=Object.getOwnPropertyDescriptor,ae=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols,de=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var Y=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&Y(e,r,t[r]);if(x)for(var r of x(t))K.call(t,r)&&Y(e,r,t[r]);return e},H=(e,t)=>oe(e,ae(t)),P=e=>b(e,"__esModule",{value:!0});var c=(e,t)=>{var r={};for(var i in e)z.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&x)for(var i of x(e))t.indexOf(i)<0&&K.call(e,i)&&(r[i]=e[i]);return r};var se=(e,t)=>{for(var r in t)b(e,r,{get:t[r],enumerable:!0})},O=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ne(t))!z.call(e,n)&&(r||n!=="default")&&b(e,n,{get:()=>t[n],enumerable:!(i=ie(t,n))||i.enumerable});return e},p=(e,t)=>O(P(b(e!=null?re(de(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),le=(e=>(t,r)=>e&&e.get(t)||(r=O(P({}),t,1),e&&e.set(t,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var ge={};se(ge,{Menu:()=>j,MenuDivider:()=>F,MenuGroup:()=>J,MenuGroupTitle:()=>V,MenuItem:()=>Z,MenuTitle:()=>te,divider:()=>T,group:()=>$,groupTitle:()=>D,item:()=>_,menu:()=>A,title:()=>L});var W=p(require("@emotion/styled")),I=p(require("react"));var m=require("@emotion/react");var u={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},ce=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(u),pe=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(u),o=a(a({BLACK:u.black,CURRENT:u.current,TRANSPARENT:u.transparent,WHITE:u.white},ce),pe);var s=require("@emotion/react");var g=s.css`
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
`,h=s.css`
  ${g};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Me=s.css`
  ${h};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,ye=s.css`
  ${h};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,k=s.css`
  ${h};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,me=s.css`
  ${h};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Ae=s.css`
  ${me};

  --font-weight: 600;
`,G=s.css`
  ${g};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,B=s.css`
  ${g};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,$e=s.css`
  ${g};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,De=s.css`
  ${g};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var X=p(require("@emotion/styled")),y=p(require("react"));var R=require("@emotion/react");var M=R.css`
  height: var(--size);
  margin-inline: var(--space);
`,U=R.css`
  margin-block: var(--space);
  width: var(--size);
`,v=R.css`
  --color: ${o.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${M};
  }
  &:is([data-divider='vertical']) {
    ${U};
  }

  [data-theme='dark'] & {
    --color: ${o.DARK_STROKE};
  }
`;var ue=(0,y.forwardRef)((w,E)=>{var l=w,{as:e="span",direction:t="vertical",size:r="2px",space:i="0",style:n}=l,f=c(l,["as","direction","size","space","style"]);return y.default.createElement(fe,H(a({},f),{as:e,"data-divider":t,ref:E,style:a({["--size"]:r,["--space"]:i},n)}))}),fe=X.default.span`
  ${v};
`;var A=m.css`
  --background-color: ${o.WHITE};
  --border-color: ${o.WHITE};
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
    --background-color: ${o.DARK_BACKGROUND_PRIMARY};
    --border-color: ${o.DARK_STROKE};
    --box-shadow: ${o.BLACK};
  }
`,T=m.css`
  ${v};
  ${M};
`,$=m.css`
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  & + & {
    margin-top: var(--gap);

    &::before {
      ${T};
      content: '';
    }
  }
`,D=m.css`
  ${k};

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
    --color: ${o.WHITE};
  }
`,_=m.css`
  ${B};

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
    ${G};
    color: var(--color, inherit);

    --color: ${o.ELEMENT_TERTIARY};
  }

  [data-menu='group'] & {
    padding-left: calc(3 * var(--indent));
  }

  &:is(:active, [data-pressed]) {
    --background-color: ${o.ELEMENT_SECONDARY};
    --color: ${o.ELEMENT_PRIMARY};
  }
  &:is(:focus-visible, :hover, [data-hover]) {
    --background-color: ${o.ELEMENT_SECONDARY};
  }
  &:is([data-active]) {
    --color: ${o.ELEMENT_PRIMARY};
  }

  &:is(:active, :focus-visible, :hover, [data-active], [data-hover], [data-pressed]) {
    .primary {
      --color: ${o.ELEMENT_PRIMARY};
    }
    .secondary {
      --color: ${o.TEXT_PRIMARY};
    }
  }

  &:is([data-disabled]) {
    cursor: default;
    pointer-events: none;

    &,
    .primary,
    .secondary {
      --color: ${o.ELEMENT_TERTIARY};
    }
  }

  [data-theme='dark'] & {
    --color: ${o.WHITE};

    &:is(:active, [data-pressed]) {
      --background-color: ${o.DARK_ELEMENT_FOCUS};
    }
    &:is(:focus-visible, :hover, [data-hover]) {
      --background-color: ${o.DARK_ELEMENT_ACTIVE};
    }

    &:is(:active, :focus-visible, :hover, [data-active], [data-hover], [data-pressed]) {
      .primary,
      .secondary {
        --color: ${o.WHITE};
      }
    }

    &:is([data-disabled]) {
      &,
      .primary,
      .secondary {
        --color: ${o.DARK_ELEMENT_TERTIARY};
      }
    }
  }
`,L=m.css`
  ${k};

  margin-bottom: 12px;
  margin-top: 8px;

  [data-theme='dark'] & {
    --color: ${o.WHITE};
  }
`;var j=(0,I.forwardRef)((w,E)=>{var l=w,{active:e,justify:t,padding:r,size:i,theme:n}=l,f=c(l,["active","justify","padding","size","theme"]);let S={"data-qa":"menu"};return I.default.createElement(Ee,a(a({"data-active":e||null,"data-justify":t||null,"data-padding":r||null,"data-theme":n||null,ref:E,style:{["--size"]:i}},S),f))}),Ee=W.default.section`
  ${A};
`;var q=p(require("@emotion/styled"));var F=q.default.div`
  ${T};
`;var C=require("@emotion/react");var J=e=>(0,C.jsx)("div",a({css:$,"data-menu":"group"},e)),V=i=>{var n=i,{children:e,variant:t}=n,r=c(n,["children","variant"]);return(0,C.jsx)("h5",a({css:D,"data-variant":t||null},r),e)};var Q=p(require("@emotion/styled")),N=p(require("react"));var Z=(0,N.forwardRef)((w,E)=>{var l=w,{active:e,as:t="button",disabled:r,justify:i,theme:n}=l,f=c(l,["active","as","disabled","justify","theme"]);return N.default.createElement(be,a(a({as:t,"data-active":e||null,"data-disabled":r||null,"data-justify":i||null,"data-theme":n||null,disabled:t==="button"?!!r:void 0,ref:E,type:t==="button"?"button":void 0},{"data-qa":"menu-item"}),f))}),be=Q.default.button`
  ${_};
`;var ee=p(require("@emotion/styled"));var te=ee.default.h5`
  ${L};
`;module.exports=le(ge);0&&(module.exports={Menu,MenuDivider,MenuGroup,MenuGroupTitle,MenuItem,MenuTitle,divider,group,groupTitle,item,menu,title});
//# sourceMappingURL=index.js.map