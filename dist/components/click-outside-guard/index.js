/** Components v5.2.0 */
var M=Object.create;var u=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,O=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&v(e,n,t[n]);return e};var L=e=>u(e,"__esModule",{value:!0});var k=(e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};var h=(e,t)=>{for(var n in t)u(e,n,{get:t[n],enumerable:!0})},y=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of T(t))!m.call(e,s)&&(n||s!=="default")&&u(e,s,{get:()=>t[s],enumerable:!(r=R(t,s))||r.enumerable});return e},b=(e,t)=>y(L(u(e!=null?M(O(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),w=(e=>(t,n)=>e&&e.get(t)||(n=y(L({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var g={};h(g,{ClickOutsideGuard:()=>G});var C=b(require("@emotion/styled")),x=require("@spicy-hooks/core"),o=b(require("react")),G=(0,o.forwardRef)((A,s)=>{var f=A,{ignore:e,listen:t,onClickOutside:n}=f,r=k(f,["ignore","listen","onClickOutside"]);let a=(0,o.useRef)(null),H=(0,x.useCombinedRef)(s,a),l=i=>{i.key==="Escape"&&n(),d(i)},d=i=>{a.current&&a.current.contains(i.target)||e&&e.contains&&e.contains(i.target)||n()};return(0,o.useEffect)(()=>{if(t&&n)return document.addEventListener("mousedown",d,!1),document.addEventListener("touchend",d,!1),document.addEventListener("keyup",l),()=>{document.removeEventListener("mousedown",d,!1),document.removeEventListener("touchend",d,!1),document.removeEventListener("keyup",l)}}),o.default.createElement(P,E({ref:H},r))}),P=C.default.div`
  display: contents;
`;module.exports=w(g);0&&(module.exports={ClickOutsideGuard});
//# sourceMappingURL=index.js.map