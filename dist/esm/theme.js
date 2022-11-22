/** Components v6.4.0 */
var o={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},a=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(o),l=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(o),n={BLACK:o.black,CURRENT:o.current,TRANSPARENT:o.transparent,WHITE:o.white,...a,...l};import{css as t}from"@emotion/react";var r=t`
  --color: ${n.TEXT_PRIMARY};
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
`,i=t`
  ${r};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,h=t`
  ${i};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,R=t`
  ${i};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,p=t`
  ${i};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,f=t`
  ${i};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,A=t`
  ${f};

  --font-weight: 600;
`,T=t`
  ${r};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,x=t`
  ${r};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,d=t`
  ${r};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,N=t`
  ${r};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;export{r as base,x as button,n as colors,h as h1,R as h2,p as h3,f as h4,A as h5,N as input,d as label,T as paragraph};
//# sourceMappingURL=theme.js.map