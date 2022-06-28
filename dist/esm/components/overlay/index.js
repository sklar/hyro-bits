/** Components v5.3.0 */
var f=Object.defineProperty,u=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var y=(e,r,a)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,s=(e,r)=>{for(var a in r||(r={}))n.call(r,a)&&y(e,a,r[a]);if(t)for(var a of t(r))v.call(r,a)&&y(e,a,r[a]);return e},p=(e,r)=>u(e,b(r));var c=(e,r)=>{var a={};for(var o in e)n.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&t)for(var o of t(e))r.indexOf(o)<0&&v.call(e,o)&&(a[o]=e[o]);return a};import{jsx as O}from"@emotion/react";import{css as h,keyframes as g}from"@emotion/react";var x=g`
  0% {
    --overlay-alpha: 0%;
  }
  100% {
    --overlay-alpha: 50%;
  }
`,l=h`
  @property --overlay-alpha {
    inherits: true;
    initial-value: 0%;
    syntax: '<percentage>';
  }

  --overlay-color: 0deg 0% 0%;
  --overlay-duration: 0.6s;
  --overlay-easing: linear;
  --overlay-index: ;

  background-color: hsl(var(--overlay-color) / var(--overlay-alpha));
  display: none;
  inset: 0;
  position: fixed;
  z-index: var(--overlay-index);

  &[data-active] {
    animation: ${x} var(--overlay-duration) var(--overlay-easing) both;
    display: block;
  }
`;var k=1,A=E=>{var i=E,{active:e=!1,index:r=k,onClick:a}=i,o=c(i,["active","index","onClick"]);return O("div",p(s({},o),{css:l,"data-active":e||null,style:{["--overlay-index"]:r},onClick:a}))};export{A as Overlay,l as overlay,x as overlayAnimation};
//# sourceMappingURL=index.js.map