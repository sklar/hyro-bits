/** Components v6.1.0 */
var g=Object.defineProperty;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var b=(e,o,r)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,E=(e,o)=>{for(var r in o||(o={}))h.call(o,r)&&b(e,r,o[r]);if(c)for(var r of c(o))R.call(o,r)&&b(e,r,o[r]);return e};var n={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},p=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(n),A=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(n),f=E(E({BLACK:n.black,CURRENT:n.current,TRANSPARENT:n.transparent,WHITE:n.white},p),A);import{css as t}from"@emotion/react";var i=t`
  --color: ${f.TEXT_PRIMARY};
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
`,s=t`
  ${i};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,m=t`
  ${s};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,w=t`
  ${s};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,C=t`
  ${s};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,T=t`
  ${s};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,I=t`
  ${T};

  --font-weight: 600;
`,y=t`
  ${i};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,M=t`
  ${i};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Y=t`
  ${i};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,K=t`
  ${i};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;export{i as base,M as button,f as colors,m as h1,w as h2,C as h3,T as h4,I as h5,K as input,Y as label,y as paragraph};
//# sourceMappingURL=theme.js.map