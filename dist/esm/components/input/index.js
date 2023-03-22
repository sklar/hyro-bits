/** Components v6.6.1 */
import m from"@emotion/styled";import d,{forwardRef as te}from"react";var l={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},X=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(l),q=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(l),r={BLACK:l.black,CURRENT:l.current,TRANSPARENT:l.transparent,WHITE:l.white,...X,...q};import{css as N}from"@emotion/react";import{keyframes as F}from"@emotion/react";var x={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},W=F`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var fe=N`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,$=N`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var _=(e,o)=>{let a=Object.keys(e).filter(t=>!o.includes(t));return[o.reduce((t,n)=>(t[n]=e[n],t),{}),a.reduce((t,n)=>(t[n]=e[n],t),{})]};import{css as V}from"@emotion/react";import S from"@emotion/styled";import c,{forwardRef as j}from"react";import{css as K,keyframes as J}from"@emotion/react";var M=J`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,y=K`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${M} var(--duration) ${x.easeInOut} var(--shift) infinite alternate;
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
`,T=K`
  display: inline-flex;
  gap: var(--gap);
`;var A=j(({color:e="currentColor",delay:o=100,duration:a=500,gap:t="4px",range:n="6px",size:s="5px",...b},g)=>{let E={color:e,delay:o,duration:a,gap:t,range:n,size:s,...b};return c.createElement(Q,{ref:g,...{"data-qa":"idle"},...E},c.createElement(v,null),c.createElement(v,null),c.createElement(v,null))}),v=S.div`
  ${y};
`,Q=S.div(({color:e,delay:o,duration:a,gap:t,range:n,size:s})=>V`
    --color: ${e};
    --delay: ${o}ms;
    --duration: ${a}ms;
    --gap: ${t};
    --range: ${n};
    --size: ${s};

    ${T};
  `);import{css as I}from"@emotion/react";import{transparentize as ee}from"color2k";import{css as i}from"@emotion/react";var p=i`
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
`,u=i`
  ${p};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,_e=i`
  ${u};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Ke=i`
  ${u};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Me=i`
  ${u};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,Z=i`
  ${u};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Se=i`
  ${Z};

  --font-weight: 600;
`,Ce=i`
  ${p};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,De=i`
  ${p};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Le=i`
  ${p};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,C=i`
  ${p};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var R=I`
  ${C};

  --input-background-color: ${r.WHITE};
  --input-border-color: ${ee("#c8d7fc",.6)};
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
`,w=I`
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
`,f=I`
  align-items: center;
  display: inline-flex;
  color: ${r.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;var re=te(({active:e,affix:o,as:a="label",busy:t,className:n,disabled:s,invalid:b,leader:g,length:E,readonly:h,size:D="md",style:L,theme:O,trailer:P,...Y},H)=>{let[z,k]=Array.isArray(o)?o:[o],[B,G]=_(Y,["data-active","data-hover","data-invalid"]),U={"data-qa":"input"};return d.createElement(ne,{...B,as:a,className:n,"data-active":e||null,"data-busy":t||null,"data-disabled":s||null,"data-invalid":b||null,"data-readonly":h||null,"data-size":D,"data-theme":O||null,style:{["--input-length"]:E,...L}},z&&d.createElement(oe,null,z),g,d.createElement(ie,{...U,...G,ref:H,disabled:s,readOnly:h}),t&&d.createElement(A,{gap:"2px",size:"4px",style:{["--color"]:r.ELEMENT_PRIMARY}}),P,k&&d.createElement(ae,null,k))}),ne=m.label`
  --gap: 1px;

  ${R};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`,ie=m.input`
  ${w};
  ${$};
`,oe=m.span`
  ${f};
`,ae=m.span`
  ${f};
`;export{re as Input,f as affix,R as container,w as input};
//# sourceMappingURL=index.js.map