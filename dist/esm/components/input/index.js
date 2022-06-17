/** Components v5.1.0 */
var te=Object.defineProperty,re=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var Y=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&Y(e,n,t[n]);if(b)for(var n of b(t))P.call(t,n)&&Y(e,n,t[n]);return e},I=(e,t)=>re(e,ne(t));var g=(e,t)=>{var n={};for(var r in e)O.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&b)for(var r of b(e))t.indexOf(r)<0&&P.call(e,r)&&(n[r]=e[r]);return n};import y from"@emotion/styled";import m,{forwardRef as me}from"react";var c={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},ie=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(c),oe=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(c),i=o(o({BLACK:c.black,CURRENT:c.current,TRANSPARENT:c.transparent,WHITE:c.white},ie),oe);import{css as H}from"@emotion/react";import{keyframes as ae}from"@emotion/react";var R={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},se=ae`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var ke=H`
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
`;var G=(e,t)=>{let n=Object.keys(e).filter(r=>!t.includes(r));return[t.reduce((r,l)=>(r[l]=e[l],r),{}),n.reduce((r,l)=>(r[l]=e[l],r),{})]};import{css as pe}from"@emotion/react";import q from"@emotion/styled";import E,{forwardRef as de}from"react";import{css as U,keyframes as le}from"@emotion/react";var X=le`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,w=U`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${X} var(--duration) ${R.easeInOut} var(--shift) infinite alternate;
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
`,z=U`
  display: inline-flex;
  gap: var(--gap);
`;var k=de((M,v)=>{var u=M,{color:e="currentColor",delay:t=100,duration:n=500,gap:r="4px",range:l="6px",size:d="5px"}=u,T=g(u,["color","delay","duration","gap","range","size"]);let A=o({color:e,delay:t,duration:n,gap:r,range:l,size:d},T);return E.createElement(ce,o(o({ref:v},{"data-qa":"idle"}),A),E.createElement(N,null),E.createElement(N,null),E.createElement(N,null))}),N=q.div`
  ${w};
`,ce=q.div(({color:e,delay:t,duration:n,gap:r,range:l,size:d})=>pe`
    --color: ${e};
    --delay: ${t}ms;
    --duration: ${n}ms;
    --gap: ${r};
    --range: ${l};
    --size: ${d};

    ${z};
  `);import{css as $}from"@emotion/react";import{transparentize as fe}from"color2k";import{css as p}from"@emotion/react";var f=p`
  --color: ${i.TEXT_PRIMARY};
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
`,h=p`
  ${f};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,qe=p`
  ${h};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Fe=p`
  ${h};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,We=p`
  ${h};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ue=p`
  ${h};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Je=p`
  ${ue};

  --font-weight: 600;
`,Ve=p`
  ${f};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,je=p`
  ${f};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Qe=p`
  ${f};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,F=p`
  ${f};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var _=$`
  ${F};

  --input-background-color: ${i.WHITE};
  --input-border-color: ${fe("#c8d7fc",.6)};
  --input-border-size: 2px;
  --input-color: ;
  --input-gap: 8px;
  --input-indent: 10px;
  --input-length: 100%;
  --input-line-height: var(--input-size);
  --input-placeholder-color: ${i.TEXT_TERTIARY};
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
    --input-border-color: ${i.ELEMENT_FOCUS};
  }
  &:is([data-invalid]):not([data-disabled]) {
    --input-border-color: ${i.DANGER};
  }
  &:is([data-disabled]) {
    --input-color: ${i.ELEMENT_DISABLED};
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
`,K=$`
  background-color: ${i.TRANSPARENT};
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
`,x=$`
  align-items: center;
  display: inline-flex;
  color: ${i.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;var be=me((ye,j)=>{var C=ye,{active:e,affix:t,as:n="label",busy:r,className:l,disabled:d,invalid:T,leader:v,length:M,readonly:u,size:A="md",style:S,theme:W,trailer:J}=C,V=g(C,["active","affix","as","busy","className","disabled","invalid","leader","length","readonly","size","style","theme","trailer"]);let[D,L]=Array.isArray(t)?t:[t],[Q,Z]=G(V,["data-active","data-hover","data-invalid"]),ee={"data-qa":"input"};return m.createElement(ge,I(o({},Q),{as:n,className:l,"data-active":e||null,"data-busy":r||null,"data-disabled":d||null,"data-invalid":T||null,"data-readonly":u||null,"data-size":A,"data-theme":W||null,style:o({["--input-length"]:M},S)}),D&&m.createElement(he,null,D),v,m.createElement(Ee,I(o(o({},ee),Z),{ref:j,disabled:d,readOnly:u})),r&&m.createElement(k,{gap:"2px",size:"4px",style:{["--color"]:i.ELEMENT_PRIMARY}}),J,L&&m.createElement(xe,null,L))}),ge=y.label`
  --gap: 1px;

  ${_};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`,Ee=y.input`
  ${K};
  ${B};
`,he=y.span`
  ${x};
`,xe=y.span`
  ${x};
`;export{be as Input,x as affix,_ as container,K as input};
//# sourceMappingURL=index.js.map