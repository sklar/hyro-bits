/** Components v5.5.0 */
var ge=Object.create;var T=Object.defineProperty,xe=Object.defineProperties,he=Object.getOwnPropertyDescriptor,ye=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertyNames,$=Object.getOwnPropertySymbols,Te=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var re=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&re(e,r,t[r]);if($)for(var r of $(t))te.call(t,r)&&re(e,r,t[r]);return e},m=(e,t)=>xe(e,ye(t)),ne=e=>T(e,"__esModule",{value:!0});var b=(e,t)=>{var r={};for(var n in e)G.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&$)for(var n of $(e))t.indexOf(n)<0&&te.call(e,n)&&(r[n]=e[n]);return r};var ve=(e,t)=>{for(var r in t)T(e,r,{get:t[r],enumerable:!0})},ae=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ee(t))!G.call(e,a)&&(r||a!=="default")&&T(e,a,{get:()=>t[a],enumerable:!(n=he(t,a))||n.enumerable});return e},v=(e,t)=>ae(ne(T(e!=null?ge(Te(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Ae=(e=>(t,r)=>e&&e.get(t)||(r=ae(ne({}),t,1),e&&e.set(t,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var Ce={};ve(Ce,{Textarea:()=>ue,container:()=>D,indicator:()=>P,textarea:()=>O});var Y=require("@emotion/react"),W=v(require("@emotion/styled")),ce=require("react");var g={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},Ie=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(g),Re=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(g),l=i(i({BLACK:g.black,CURRENT:g.current,TRANSPARENT:g.transparent,WHITE:g.white},Ie),Re);var L=(e,t)=>{let r=Object.keys(e).filter(n=>!t.includes(n));return[t.reduce((n,a)=>(n[a]=e[a],n),{}),r.reduce((n,a)=>(n[a]=e[a],n),{})]};var se=require("@emotion/react"),J=v(require("@emotion/styled")),u=v(require("react"));var A=require("@emotion/react");var X=require("@emotion/react");var ie=require("@emotion/react"),U={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},ze=ie.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var Ge=X.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,oe=X.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var le=A.keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,q=A.css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${le} var(--duration) ${U.easeInOut} var(--shift) infinite alternate;
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
`,F=A.css`
  display: inline-flex;
  gap: var(--gap);
`;var I=(0,u.forwardRef)((y,h)=>{var c=y,{color:e="currentColor",delay:t=100,duration:r=500,gap:n="4px",range:a="6px",size:p="5px"}=c,x=b(c,["color","delay","duration","gap","range","size"]);let E=i({color:e,delay:t,duration:r,gap:n,range:a,size:p},x);return u.default.createElement(we,i(i({ref:h},{"data-qa":"idle"}),E),u.default.createElement(V,null),u.default.createElement(V,null),u.default.createElement(V,null))}),V=J.default.div`
  ${q};
`,we=J.default.div(({color:e,delay:t,duration:r,gap:n,range:a,size:p})=>se.css`
    --color: ${e};
    --delay: ${t}ms;
    --duration: ${r}ms;
    --gap: ${n};
    --range: ${a};
    --size: ${p};

    ${F};
  `);var C=require("@emotion/react");var k=v(require("@emotion/styled")),d=v(require("react"));var K=require("@emotion/react"),de=require("color2k");var s=require("@emotion/react");var R=s.css`
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
`,_=s.css`
  ${R};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,tt=s.css`
  ${_};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,rt=s.css`
  ${_};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,nt=s.css`
  ${_};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ke=s.css`
  ${_};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,at=s.css`
  ${ke};

  --font-weight: 600;
`,it=s.css`
  ${R};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,ot=s.css`
  ${R};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,lt=s.css`
  ${R};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,pe=s.css`
  ${R};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var z=K.css`
  ${pe};

  --input-background-color: ${l.WHITE};
  --input-border-color: ${(0,de.transparentize)("#c8d7fc",.6)};
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
`,w=K.css`
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
`,S=K.css`
  align-items: center;
  display: inline-flex;
  color: ${l.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;var Me=(0,d.forwardRef)((Z,N)=>{var f=Z,{active:e,affix:t,as:r="label",busy:n,className:a,disabled:p,invalid:x,leader:h,length:y,readonly:c,size:E="md",style:M,theme:H,trailer:B}=f,Q=b(f,["active","affix","as","busy","className","disabled","invalid","leader","length","readonly","size","style","theme","trailer"]);let[j,ee]=Array.isArray(t)?t:[t],[fe,me]=L(Q,["data-active","data-hover","data-invalid"]),be={"data-qa":"input"};return d.default.createElement(Ne,m(i({},fe),{as:r,className:a,"data-active":e||null,"data-busy":n||null,"data-disabled":p||null,"data-invalid":x||null,"data-readonly":c||null,"data-size":E,"data-theme":H||null,style:i({["--input-length"]:y},M)}),j&&d.default.createElement(Le,null,j),h,d.default.createElement($e,m(i(i({},be),me),{ref:N,disabled:p,readOnly:c})),n&&d.default.createElement(I,{gap:"2px",size:"4px",style:{["--color"]:l.ELEMENT_PRIMARY}}),B,ee&&d.default.createElement(_e,null,ee))}),Ne=k.default.label`
  --gap: 1px;

  ${z};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`,$e=k.default.input`
  ${w};
  ${oe};
`,Le=k.default.span`
  ${S};
`,_e=k.default.span`
  ${S};
`;var P=C.css`
  background-image: linear-gradient(90deg, transparent, var(--input-background-color) 60%);
  padding-block: 6px;
  padding-inline-start: 2em;
  place-self: start end;
  position: absolute;
`,D=C.css`
  ${z};

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
`,O=C.css`
  ${w};

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
`;var ue=(0,ce.forwardRef)((Q,B)=>{var N=Q,{active:e,as:t="label",busy:r,className:n,disabled:a,expandable:p,invalid:x,length:h,readonly:y,resize:c="vertical",style:E,theme:M}=N,H=b(N,["active","as","busy","className","disabled","expandable","invalid","length","readonly","resize","style","theme"]);let[Z,f]=L(H,["data-active","data-hover","data-invalid"]);return(0,Y.jsx)(Ke,m(i({},Z),{as:t,className:n,"data-active":e||null,"data-busy":r||null,"data-disabled":a||null,"data-expandable":p||null,"data-invalid":x||null,"data-readonly":y||null,"data-resize":c,"data-theme":M||null,"data-value":p?f.value||f.defaultValue:"",style:i({["--input-length"]:h},E)}),(0,Y.jsx)(Se,m(i({},f),{ref:B,disabled:a,readOnly:y})),r&&(0,Y.jsx)(I,{gap:"2px",size:"4px","data-indicator":!0,css:P,style:{["--color"]:l.ELEMENT_PRIMARY}}))}),Ke=W.default.label`
  ${D};
`,Se=W.default.textarea`
  ${O};
`;module.exports=Ae(Ce);0&&(module.exports={Textarea,container,indicator,textarea});
//# sourceMappingURL=index.js.map