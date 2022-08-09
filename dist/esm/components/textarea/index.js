/** Components v6.1.1 */
var se=Object.defineProperty,pe=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var Q=(e,t,n)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&Q(e,n,t[n]);if(w)for(var n of w(t))W.call(t,n)&&Q(e,n,t[n]);return e},f=(e,t)=>pe(e,de(t));var m=(e,t)=>{var n={};for(var r in e)V.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&w)for(var r of w(e))t.indexOf(r)<0&&W.call(e,r)&&(n[r]=e[r]);return n};import{jsx as U}from"@emotion/react";import ae from"@emotion/styled";import{forwardRef as we}from"react";var b={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},ce=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(b),ue=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(b),l=a(a({BLACK:b.black,CURRENT:b.current,TRANSPARENT:b.transparent,WHITE:b.white},ce),ue);var k=(e,t)=>{let n=Object.keys(e).filter(r=>!t.includes(r));return[t.reduce((r,s)=>(r[s]=e[s],r),{}),n.reduce((r,s)=>(r[s]=e[s],r),{})]};import{css as ge}from"@emotion/react";import re from"@emotion/styled";import M,{forwardRef as xe}from"react";import{css as ee,keyframes as be}from"@emotion/react";import{css as Z}from"@emotion/react";import{keyframes as fe}from"@emotion/react";var S={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},me=fe`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var Oe=Z`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,j=Z`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var te=be`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,C=ee`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${te} var(--duration) ${S.easeInOut} var(--shift) infinite alternate;
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
`,P=ee`
  display: inline-flex;
  gap: var(--gap);
`;var E=xe((h,x)=>{var c=h,{color:e="currentColor",delay:t=100,duration:n=500,gap:r="4px",range:s="6px",size:d="5px"}=c,g=m(c,["color","delay","duration","gap","range","size"]);let y=a({color:e,delay:t,duration:n,gap:r,range:s,size:d},g);return M.createElement(he,a(a({ref:x},{"data-qa":"idle"}),y),M.createElement(D,null),M.createElement(D,null),M.createElement(D,null))}),D=re.div`
  ${C};
`,he=re.div(({color:e,delay:t,duration:n,gap:r,range:s,size:d})=>ge`
    --color: ${e};
    --delay: ${t}ms;
    --duration: ${n}ms;
    --gap: ${r};
    --range: ${s};
    --size: ${d};

    ${P};
  `);import{css as Y}from"@emotion/react";import L from"@emotion/styled";import I,{forwardRef as Te}from"react";import{css as O}from"@emotion/react";import{transparentize as Ee}from"color2k";import{css as p}from"@emotion/react";var T=p`
  --color: ${l.TEXT_PRIMARY};
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
`,N=p`
  ${T};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,rt=p`
  ${N};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,nt=p`
  ${N};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,at=p`
  ${N};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ye=p`
  ${N};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,it=p`
  ${ye};

  --font-weight: 600;
`,ot=p`
  ${T};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,lt=p`
  ${T};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,st=p`
  ${T};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,ne=p`
  ${T};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var v=O`
  ${ne};

  --input-background-color: ${l.WHITE};
  --input-border-color: ${Ee("#c8d7fc",.6)};
  --input-border-size: 2px;
  --input-color: ;
  --input-gap: 8px;
  --input-indent: 10px;
  --input-length: 100%;
  --input-line-height: var(--input-size);
  --input-placeholder-color: ${l.TEXT_TERTIARY};
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
    --input-border-color: ${l.ELEMENT_FOCUS};
  }
  &:is([data-invalid]):not([data-disabled]) {
    --input-border-color: ${l.DANGER};
  }
  &:is([data-disabled]) {
    --input-color: ${l.ELEMENT_DISABLED};
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
`,A=O`
  background-color: ${l.TRANSPARENT};
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
`,$=O`
  align-items: center;
  display: inline-flex;
  color: ${l.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;var ve=Te((q,z)=>{var u=q,{active:e,affix:t,as:n="label",busy:r,className:s,disabled:d,invalid:g,leader:x,length:h,readonly:c,size:y="md",style:R,theme:_,trailer:K}=u,X=m(u,["active","affix","as","busy","className","disabled","invalid","leader","length","readonly","size","style","theme","trailer"]);let[F,J]=Array.isArray(t)?t:[t],[ie,oe]=k(X,["data-active","data-hover","data-invalid"]),le={"data-qa":"input"};return I.createElement(Ae,f(a({},ie),{as:n,className:s,"data-active":e||null,"data-busy":r||null,"data-disabled":d||null,"data-invalid":g||null,"data-readonly":c||null,"data-size":y,"data-theme":_||null,style:a({["--input-length"]:h},R)}),F&&I.createElement(Re,null,F),x,I.createElement(Ie,f(a(a({},le),oe),{ref:z,disabled:d,readOnly:c})),r&&I.createElement(E,{gap:"2px",size:"4px",style:{["--color"]:l.ELEMENT_PRIMARY}}),K,J&&I.createElement(ze,null,J))}),Ae=L.label`
  --gap: 1px;

  ${v};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`,Ie=L.input`
  ${A};
  ${j};
`,Re=L.span`
  ${$};
`,ze=L.span`
  ${$};
`;var H=Y`
  background-image: linear-gradient(90deg, transparent, var(--input-background-color) 60%);
  padding-block: 6px;
  padding-inline-start: 2em;
  place-self: start end;
  position: absolute;
`,B=Y`
  ${v};

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
`,G=Y`
  ${A};

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
`;var ke=we((X,K)=>{var z=X,{active:e,as:t="label",busy:n,className:r,disabled:s,expandable:d,invalid:g,length:x,readonly:h,resize:c="vertical",style:y,theme:R}=z,_=m(z,["active","as","busy","className","disabled","expandable","invalid","length","readonly","resize","style","theme"]);let[q,u]=k(_,["data-active","data-hover","data-invalid"]);return U(Me,f(a({},q),{as:t,className:r,"data-active":e||null,"data-busy":n||null,"data-disabled":s||null,"data-expandable":d||null,"data-invalid":g||null,"data-readonly":h||null,"data-resize":c,"data-theme":R||null,"data-value":d?u.value||u.defaultValue:"",style:a({["--input-length"]:x},y)}),U(Ne,f(a({},u),{ref:K,disabled:s,readOnly:h})),n&&U(E,{gap:"2px",size:"4px","data-indicator":!0,css:H,style:{["--color"]:l.ELEMENT_PRIMARY}}))}),Me=ae.label`
  ${B};
`,Ne=ae.textarea`
  ${G};
`;export{ke as Textarea,B as container,H as indicator,G as textarea};
//# sourceMappingURL=index.js.map