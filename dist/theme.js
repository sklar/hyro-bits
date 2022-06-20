/** Components v5.2.0 */
var f=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var R=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&R(e,o,t[o]);if(g)for(var o of g(t))x.call(t,o)&&R(e,o,t[o]);return e};var d=e=>f(e,"__esModule",{value:!0});var N=(e,t)=>{for(var o in t)f(e,o,{get:t[o],enumerable:!0})},_=(e,t,o,b)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of T(t))!h.call(e,a)&&(o||a!=="default")&&f(e,a,{get:()=>t[a],enumerable:!(b=A(t,a))||b.enumerable});return e};var u=(e=>(t,o)=>e&&e.get(t)||(o=_(d({}),t,1),e&&e.set(t,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var O={};N(O,{base:()=>i,button:()=>Y,colors:()=>l,h1:()=>w,h2:()=>C,h3:()=>I,h4:()=>p,h5:()=>y,input:()=>S,label:()=>K,paragraph:()=>M});var n={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},D=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(n),m=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(n),l=c(c({BLACK:n.black,CURRENT:n.current,TRANSPARENT:n.transparent,WHITE:n.white},D),m);var r=require("@emotion/react");var i=r.css`
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
`,E=r.css`
  ${i};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,w=r.css`
  ${E};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,C=r.css`
  ${E};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,I=r.css`
  ${E};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,p=r.css`
  ${E};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,y=r.css`
  ${p};

  --font-weight: 600;
`,M=r.css`
  ${i};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Y=r.css`
  ${i};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,K=r.css`
  ${i};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,S=r.css`
  ${i};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;module.exports=u(O);0&&(module.exports={base,button,colors,h1,h2,h3,h4,h5,input,label,paragraph});
//# sourceMappingURL=theme.js.map