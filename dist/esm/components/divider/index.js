/** Components v5.3.0 */
var v=Object.defineProperty,N=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var A=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,i=(e,r)=>{for(var t in r||(r={}))T.call(r,t)&&A(e,t,r[t]);if(n)for(var t of n(r))f.call(r,t)&&A(e,t,r[t]);return e},p=(e,r)=>N(e,_(r));var c=(e,r)=>{var t={};for(var o in e)T.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&n)for(var o of n(e))r.indexOf(o)<0&&f.call(e,o)&&(t[o]=e[o]);return t};import M from"@emotion/styled";import K,{forwardRef as S}from"react";import{css as d}from"@emotion/react";var a={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},y=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(a),C=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(a),l=i(i({BLACK:a.black,CURRENT:a.current,TRANSPARENT:a.transparent,WHITE:a.white},y),C);var D=d`
  height: var(--size);
  margin-inline: var(--space);
`,u=d`
  margin-block: var(--space);
  width: var(--size);
`,b=d`
  --color: ${l.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${D};
  }
  &:is([data-divider='vertical']) {
    ${u};
  }

  [data-theme='dark'] & {
    --color: ${l.DARK_STROKE};
  }
`;var h=S((L,m)=>{var R=L,{as:e="span",direction:r="vertical",size:t="2px",space:o="0"}=R,g=c(R,["as","direction","size","space"]);return K.createElement(I,p(i({},g),{as:e,"data-divider":r,ref:m,style:{["--size"]:t,["--space"]:o}}))}),I=M.span`
  ${b};
`;export{h as Divider,b as divider,D as horizontal,u as vertical};
//# sourceMappingURL=index.js.map