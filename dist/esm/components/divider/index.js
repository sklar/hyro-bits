/** Components v6.4.0 */
import A from"@emotion/styled";import p,{forwardRef as c}from"react";import{css as o}from"@emotion/react";var r={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},T=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(r),f=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(r),t={BLACK:r.black,CURRENT:r.current,TRANSPARENT:r.transparent,WHITE:r.white,...T,...f};var i=o`
  height: var(--size);
  margin-inline: var(--space);
`,n=o`
  margin-block: var(--space);
  width: var(--size);
`,a=o`
  --color: ${t.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${i};
  }
  &:is([data-divider='vertical']) {
    ${n};
  }

  [data-theme='dark'] & {
    --color: ${t.DARK_STROKE};
  }
`;var D=c(({as:e="span",direction:E="vertical",size:s="2px",space:l="0",style:d,...b},R)=>p.createElement(u,{...b,as:e,"data-divider":E,ref:R,style:{["--size"]:s,["--space"]:l,...d}})),u=A.span`
  ${a};
`;export{D as Divider,a as divider,i as horizontal,n as vertical};
//# sourceMappingURL=index.js.map