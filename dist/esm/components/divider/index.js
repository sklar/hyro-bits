/** Components v6.1.0 */
var N=Object.defineProperty,_=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var A=(e,r,t)=>r in e?N(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,a=(e,r)=>{for(var t in r||(r={}))T.call(r,t)&&A(e,t,r[t]);if(n)for(var t of n(r))f.call(r,t)&&A(e,t,r[t]);return e},p=(e,r)=>_(e,y(r));var c=(e,r)=>{var t={};for(var o in e)T.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&n)for(var o of n(e))r.indexOf(o)<0&&f.call(e,o)&&(t[o]=e[o]);return t};import K from"@emotion/styled";import S,{forwardRef as h}from"react";import{css as d}from"@emotion/react";var i={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},C=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(i),M=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(i),l=a(a({BLACK:i.black,CURRENT:i.current,TRANSPARENT:i.transparent,WHITE:i.white},C),M);var D=d`
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
`;var I=h((x,v)=>{var R=x,{as:e="span",direction:r="vertical",size:t="2px",space:o="0",style:g}=R,m=c(R,["as","direction","size","space","style"]);return S.createElement(L,p(a({},m),{as:e,"data-divider":r,ref:v,style:a({["--size"]:t,["--space"]:o},g)}))}),L=K.span`
  ${b};
`;export{I as Divider,b as divider,D as horizontal,u as vertical};
//# sourceMappingURL=index.js.map