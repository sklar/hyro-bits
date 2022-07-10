/** Components v5.3.1 */
var le=Object.create;var m=Object.defineProperty,pe=Object.defineProperties,de=Object.getOwnPropertyDescriptor,ce=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols,fe=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var U=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&U(e,r,t[r]);if(x)for(var r of x(t))G.call(t,r)&&U(e,r,t[r]);return e},$=(e,t)=>pe(e,ce(t)),X=e=>m(e,"__esModule",{value:!0});var y=(e,t)=>{var r={};for(var n in e)N.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&x)for(var n of x(e))t.indexOf(n)<0&&G.call(e,n)&&(r[n]=e[n]);return r};var me=(e,t)=>{for(var r in t)m(e,r,{get:t[r],enumerable:!0})},q=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ue(t))!N.call(e,i)&&(r||i!=="default")&&m(e,i,{get:()=>t[i],enumerable:!(n=de(t,i))||n.enumerable});return e},T=(e,t)=>q(X(m(e!=null?le(fe(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),be=(e=>(t,r)=>e&&e.get(t)||(r=q(X({}),t,1),e&&e.set(t,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var Re={};me(Re,{Input:()=>ee,affix:()=>E,container:()=>I,input:()=>R});var h=T(require("@emotion/styled")),p=T(require("react"));var u={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},ge=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(u),Ee=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(u),o=a(a({BLACK:u.black,CURRENT:u.current,TRANSPARENT:u.transparent,WHITE:u.white},ge),Ee);var K=require("@emotion/react");var F=require("@emotion/react"),_={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},he=F.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var Ke=K.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,W=K.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var J=(e,t)=>{let r=Object.keys(e).filter(n=>!t.includes(n));return[t.reduce((n,i)=>(n[i]=e[i],n),{}),r.reduce((n,i)=>(n[i]=e[i],n),{})]};var j=require("@emotion/react"),C=T(require("@emotion/styled")),d=T(require("react"));var b=require("@emotion/react");var V=b.keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,M=b.css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${V} var(--duration) ${_.easeInOut} var(--shift) infinite alternate;
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
`,S=b.css`
  display: inline-flex;
  gap: var(--gap);
`;var D=(0,d.forwardRef)((O,z)=>{var f=O,{color:e="currentColor",delay:t=100,duration:r=500,gap:n="4px",range:i="6px",size:c="5px"}=f,w=y(f,["color","delay","duration","gap","range","size"]);let k=a({color:e,delay:t,duration:r,gap:n,range:i,size:c},w);return d.default.createElement(xe,a(a({ref:z},{"data-qa":"idle"}),k),d.default.createElement(L,null),d.default.createElement(L,null),d.default.createElement(L,null))}),L=C.default.div`
  ${M};
`,xe=C.default.div(({color:e,delay:t,duration:r,gap:n,range:i,size:c})=>j.css`
    --color: ${e};
    --delay: ${t}ms;
    --duration: ${r}ms;
    --gap: ${n};
    --range: ${i};
    --size: ${c};

    ${S};
  `);var A=require("@emotion/react"),Z=require("color2k");var l=require("@emotion/react");var g=l.css`
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
`,v=l.css`
  ${g};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Xe=l.css`
  ${v};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,qe=l.css`
  ${v};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Fe=l.css`
  ${v};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ye=l.css`
  ${v};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,We=l.css`
  ${ye};

  --font-weight: 600;
`,Je=l.css`
  ${g};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Ve=l.css`
  ${g};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,je=l.css`
  ${g};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Q=l.css`
  ${g};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var I=A.css`
  ${Q};

  --input-background-color: ${o.WHITE};
  --input-border-color: ${(0,Z.transparentize)("#c8d7fc",.6)};
  --input-border-size: 2px;
  --input-color: ;
  --input-gap: 8px;
  --input-indent: 10px;
  --input-length: 100%;
  --input-line-height: var(--input-size);
  --input-placeholder-color: ${o.TEXT_TERTIARY};
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
    --input-border-color: ${o.ELEMENT_FOCUS};
  }
  &:is([data-invalid]):not([data-disabled]) {
    --input-border-color: ${o.DANGER};
  }
  &:is([data-disabled]) {
    --input-color: ${o.ELEMENT_DISABLED};
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
`,R=A.css`
  background-color: ${o.TRANSPARENT};
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
`,E=A.css`
  align-items: center;
  display: inline-flex;
  color: ${o.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;var ee=(0,p.forwardRef)((we,ie)=>{var Y=we,{active:e,affix:t,as:r="label",busy:n,className:i,disabled:c,invalid:w,leader:z,length:O,readonly:f,size:k="md",style:P,theme:te,trailer:re}=Y,ne=y(Y,["active","affix","as","busy","className","disabled","invalid","leader","length","readonly","size","style","theme","trailer"]);let[H,B]=Array.isArray(t)?t:[t],[oe,ae]=J(ne,["data-active","data-hover","data-invalid"]),se={"data-qa":"input"};return p.default.createElement(Te,$(a({},oe),{as:r,className:i,"data-active":e||null,"data-busy":n||null,"data-disabled":c||null,"data-invalid":w||null,"data-readonly":f||null,"data-size":k,"data-theme":te||null,style:a({["--input-length"]:O},P)}),H&&p.default.createElement(Ae,null,H),z,p.default.createElement(ve,$(a(a({},se),ae),{ref:ie,disabled:c,readOnly:f})),n&&p.default.createElement(D,{gap:"2px",size:"4px",style:{["--color"]:o.ELEMENT_PRIMARY}}),re,B&&p.default.createElement(Ie,null,B))}),Te=h.default.label`
  --gap: 1px;

  ${I};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`,ve=h.default.input`
  ${R};
  ${W};
`,Ae=h.default.span`
  ${E};
`,Ie=h.default.span`
  ${E};
`;module.exports=be(Re);0&&(module.exports={Input,affix,container,input});
//# sourceMappingURL=index.js.map