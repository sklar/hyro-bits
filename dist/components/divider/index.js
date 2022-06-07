/** Components v5.0.1 */
var K=Object.create;var n=Object.defineProperty,S=Object.defineProperties,h=Object.getOwnPropertyDescriptor,I=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,x=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,E=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))D.call(r,t)&&u(e,t,r[t]);return e},g=(e,r)=>S(e,I(r)),m=e=>n(e,"__esModule",{value:!0});var v=(e,r)=>{var t={};for(var o in e)f.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&s)for(var o of s(e))r.indexOf(o)<0&&D.call(e,o)&&(t[o]=e[o]);return t};var O=(e,r)=>{for(var t in r)n(e,t,{get:r[t],enumerable:!0})},N=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of L(r))!f.call(e,a)&&(t||a!=="default")&&n(e,a,{get:()=>r[a],enumerable:!(o=h(r,a))||o.enumerable});return e},_=(e,r)=>N(m(n(e!=null?K(x(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Y=(e=>(r,t)=>e&&e.get(r)||(t=N(m({}),r,1),e&&e.set(r,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var P={};O(P,{Divider:()=>C,divider:()=>R,horizontal:()=>A,vertical:()=>p});var y=_(require("@emotion/styled")),T=_(require("react"));var b=require("@emotion/react");var i={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},w=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(i),k=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(i),d=E(E({BLACK:i.black,CURRENT:i.current,TRANSPARENT:i.transparent,WHITE:i.white},w),k);var A=b.css`
  height: var(--size);
  margin-inline: var(--space);
`,p=b.css`
  margin-block: var(--space);
  width: var(--size);
`,R=b.css`
  --color: ${d.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${A};
  }
  &:is([data-divider='vertical']) {
    ${p};
  }

  [data-theme='dark'] & {
    --color: ${d.DARK_STROKE};
  }
`;var C=(0,T.forwardRef)((U,M)=>{var c=U,{as:e="span",direction:r="vertical",size:t="2px",space:o="0"}=c,a=v(c,["as","direction","size","space"]);return T.default.createElement(z,g(E({},a),{as:e,"data-divider":r,ref:M,style:{["--size"]:t,["--space"]:o}}))}),z=y.default.span`
  ${R};
`;module.exports=Y(P);0&&(module.exports={Divider,divider,horizontal,vertical});
//# sourceMappingURL=index.js.map