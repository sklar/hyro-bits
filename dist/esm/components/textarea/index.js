/** Components v6.9.0 */
import{jsx as D}from"@emotion/react";import F from"@emotion/styled";import{forwardRef as fe}from"react";var p={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},Q=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(p),Z=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(p),r={BLACK:p.black,CURRENT:p.current,TRANSPARENT:p.transparent,WHITE:p.white,...Q,...Z};var y=(e,a)=>{let o=Object.keys(e).filter(t=>!a.includes(t));return[a.reduce((t,n)=>(t[n]=e[n],t),{}),o.reduce((t,n)=>(t[n]=e[n],t),{})]};import{css as re}from"@emotion/react";import X from"@emotion/styled";import E,{forwardRef as ne}from"react";import{css as G,keyframes as te}from"@emotion/react";import{css as H}from"@emotion/react";import{keyframes as j}from"@emotion/react";var M={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},ee=j`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var Ie=H`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,B=H`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var U=te`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,N=G`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${U} var(--duration) ${M.easeInOut} var(--shift) infinite alternate;
  background: var(--color);
  border-radius: 50%;
  display: block;
  height: var(--size);
  opacity: var(--opacity);
  transform: translateY(var(--offset));
  width: var(--size);
  will-change: transform;

  &:nth-of-type(1) {
    --shift: calc(0 * var(--delay));
    --opacity: 1;
  }
  &:nth-of-type(2) {
    --shift: calc(1 * var(--delay));
    --opacity: 0.75;
  }
  &:nth-of-type(3) {
    --shift: calc(2 * var(--delay));
    --opacity: 0.5;
  }
`,$=G`
  display: inline-flex;
  gap: var(--gap);
`;var m=ne(({color:e="currentColor",delay:a=100,duration:o=500,gap:t="4px",range:n="6px",size:l="5px",...d},c)=>{let s={color:e,delay:a,duration:o,gap:t,range:n,size:l,...d};return E.createElement(ae,{ref:c,...{"data-qa":"idle"},...s},E.createElement(L,null),E.createElement(L,null),E.createElement(L,null))}),L=X.div`
  ${N};
`,ae=X.div(({color:e,delay:a,duration:o,gap:t,range:n,size:l})=>re`
    --color: ${e};
    --delay: ${a}ms;
    --duration: ${o}ms;
    --gap: ${t};
    --range: ${n};
    --size: ${l};

    ${$};
  `);import{css as K}from"@emotion/react";import A from"@emotion/styled";import h,{forwardRef as le}from"react";import{css as _}from"@emotion/react";import{transparentize as oe}from"color2k";import{css as i}from"@emotion/react";var b=i`
  --color: ${r.TEXT_PRIMARY};
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
`,T=i`
  ${b};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,He=i`
  ${T};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Be=i`
  ${T};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Ge=i`
  ${T};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ie=i`
  ${T};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Ue=i`
  ${ie};

  --font-weight: 600;
`,Xe=i`
  ${b};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,qe=i`
  ${b};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Fe=i`
  ${b};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,q=i`
  ${b};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var x=_`
  ${q};

  --input-background-color: ${r.WHITE};
  --input-border-color: ${oe("#c8d7fc",.6)};
  --input-border-size: 2px;
  --input-color: ;
  --input-gap: 8px;
  --input-indent: 10px;
  --input-length: 100%;
  --input-line-height: var(--input-size);
  --input-placeholder-color: ${r.TEXT_TERTIARY};
  --input-radius: 6px;
  --input-size: ;

  align-items: center;
  background-clip: padding-box;
  background-color: var(--input-background-color);
  border: var(--input-border-size) solid var(--input-border-color);
  border-radius: var(--input-radius);
  color: var(--input-color);
  display: flex;
  gap: var(--input-gap);
  min-height: var(--input-size);
  margin: 0;
  min-width: var(--input-size);
  outline: 0;
  padding-inline: var(--input-indent);
  transition-duration: 0.2s;
  transition-property: border-color, width;
  transition-timing-function: ease-in-out;
  width: var(--input-length);
  will-change: border-color, width;

  &:is(:active, :focus-within, :hover, [data-active], [data-hover]):not([data-disabled]) {
    --input-border-color: ${r.ELEMENT_FOCUS};
  }
  &:is([data-invalid]):not([data-disabled]) {
    --input-border-color: ${r.DANGER};
  }
  &:is([data-disabled]) {
    --input-color: ${r.ELEMENT_DISABLED};
    pointer-events: none;
  }
  &:is([data-readonly]) {
    cursor: pointer;
  }

  &[data-size='sm'] {
    --input-size: 30px;
  }
  &[data-size='md'] {
    --input-size: 36px;
  }
  &[data-size='lg'] {
    --font-size: 15px;
    --input-size: 40px;
  }

  /* [data-theme='dark'] &,
  &[data-theme='dark'] {} */
`,g=_`
  background-color: ${r.TRANSPARENT};
  border: none;
  color: currentColor;
  font: inherit;
  min-width: 0;
  outline: 0;
  padding: 0;

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-search-cancel-button {
    appearance: none;
    display: none;
  }

  &[readonly] {
    pointer-events: none;
  }
`,v=_`
  align-items: center;
  display: inline-flex;
  color: ${r.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;var se=le(({active:e,affix:a,as:o="label",busy:t,className:n,disabled:l,invalid:d,leader:c,length:s,readonly:u,size:I="md",style:R,theme:z,trailer:w,...k},f)=>{let[O,Y]=Array.isArray(a)?a:[a],[J,V]=y(k,["data-active","data-hover","data-invalid"]),W={"data-qa":"input"};return h.createElement(pe,{...J,as:o,className:n,"data-active":e||null,"data-busy":t||null,"data-disabled":l||null,"data-invalid":d||null,"data-readonly":u||null,"data-size":I,"data-theme":z||null,style:{["--input-length"]:s,...R}},O&&h.createElement(ce,null,O),c,h.createElement(de,{...W,...V,ref:f,disabled:l,readOnly:u}),t&&h.createElement(m,{gap:"2px",size:"4px",style:{["--color"]:r.ELEMENT_PRIMARY}}),w,Y&&h.createElement(ue,null,Y))}),pe=A.label`
  --gap: 1px;

  ${x};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`,de=A.input`
  ${g};
  ${B};
`,ce=A.span`
  ${v};
`,ue=A.span`
  ${v};
`;var S=K`
  background-image: linear-gradient(90deg, transparent, var(--input-background-color) 60%);
  padding-block: 6px;
  padding-inline-start: 2em;
  place-self: start end;
  position: absolute;
`,C=K`
  ${x};

  align-items: stretch;
  display: inline-grid;
  position: relative;
  padding-block: calc(0.8 * var(--input-indent));

  &::after,
  textarea,
  [data-indicator] {
    grid-area: 1 / 1 / -1 / -1;
  }

  &[data-expandable] {
    &::after {
      content: attr(data-value);
      min-width: 0;
      overflow: hidden;
      overflow-wrap: break-word;
      visibility: hidden;
      white-space: pre-wrap;
    }
  }
`,P=K`
  ${g};

  width: 100%;

  [data-expandable] & {
    overflow-y: hidden;
  }

  [data-resize='both'] & {
    resize: both;
  }
  [data-resize='horizontal'] & {
    resize: horizontal;
  }
  [data-resize='vertical'] & {
    resize: vertical;
  }
  [data-resize='none'] & {
    resize: none;
  }
`;var me=fe(({active:e,as:a="label",busy:o,className:t,disabled:n,expandable:l,invalid:d,length:c,readonly:s,resize:u="vertical",style:I,theme:R,...z},w)=>{let[k,f]=y(z,["data-active","data-hover","data-invalid"]);return D(be,{...k,as:a,className:t,"data-active":e||null,"data-busy":o||null,"data-disabled":n||null,"data-expandable":l||null,"data-invalid":d||null,"data-readonly":s||null,"data-resize":u,"data-theme":R||null,"data-value":l?f.value||f.defaultValue:"",style:{["--input-length"]:c,...I}},D(xe,{...f,ref:w,disabled:n,readOnly:s}),o&&D(m,{gap:"2px",size:"4px","data-indicator":!0,css:S,style:{["--color"]:r.ELEMENT_PRIMARY}}))}),be=F.label`
  ${C};
`,xe=F.textarea`
  ${P};
`;export{me as Textarea,C as container,S as indicator,P as textarea};
//# sourceMappingURL=index.js.map