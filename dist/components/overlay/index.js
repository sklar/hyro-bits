/** Components v5.0.1 */
var l=Object.defineProperty,g=Object.defineProperties,O=Object.getOwnPropertyDescriptor,k=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var m=(e,r,a)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,d=(e,r)=>{for(var a in r||(r={}))y.call(r,a)&&m(e,a,r[a]);if(i)for(var a of i(r))c.call(r,a)&&m(e,a,r[a]);return e},x=(e,r)=>g(e,k(r)),E=e=>l(e,"__esModule",{value:!0});var f=(e,r)=>{var a={};for(var o in e)y.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&i)for(var o of i(e))r.indexOf(o)<0&&c.call(e,o)&&(a[o]=e[o]);return a};var L=(e,r)=>{for(var a in r)l(e,a,{get:r[a],enumerable:!0})},C=(e,r,a,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of A(r))!y.call(e,t)&&(a||t!=="default")&&l(e,t,{get:()=>r[t],enumerable:!(o=O(r,t))||o.enumerable});return e};var H=(e=>(r,a)=>e&&e.get(r)||(a=C(E({}),r,1),e&&e.set(r,a),a))(typeof WeakMap!="undefined"?new WeakMap:0);var P={};L(P,{Overlay:()=>h,overlay:()=>v,overlayAnimation:()=>s});var b=require("@emotion/react");var n=require("@emotion/react"),s=n.keyframes`
  0% {
    --overlay-alpha: 0%;
  }
  100% {
    --overlay-alpha: 50%;
  }
`,v=n.css`
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
    animation: ${s} var(--overlay-duration) var(--overlay-easing) both;
    display: block;
  }
`;var M=1,h=t=>{var p=t,{active:e=!1,index:r=M,onClick:a}=p,o=f(p,["active","index","onClick"]);return(0,b.jsx)("div",x(d({},o),{css:v,"data-active":e||null,style:{["--overlay-index"]:r},onClick:a}))};module.exports=H(P);0&&(module.exports={Overlay,overlay,overlayAnimation});
//# sourceMappingURL=index.js.map