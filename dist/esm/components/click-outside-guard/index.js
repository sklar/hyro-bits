/** Components v5.4.0 */
var L=Object.defineProperty;var d=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var f=(e,n,t)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))a.call(n,t)&&f(e,t,n[t]);if(d)for(var t of d(n))m.call(n,t)&&f(e,t,n[t]);return e};var p=(e,n)=>{var t={};for(var r in e)a.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&d)for(var r of d(e))n.indexOf(r)<0&&m.call(e,r)&&(t[r]=e[r]);return t};import b from"@emotion/styled";import{useCombinedRef as C}from"@spicy-hooks/core";import x,{forwardRef as G,useEffect as H,useRef as M}from"react";var R=G((O,v)=>{var u=O,{ignore:e,listen:n,onClickOutside:t}=u,r=p(u,["ignore","listen","onClickOutside"]);let i=M(null),E=C(v,i),c=s=>{s.key==="Escape"&&t(),o(s)},o=s=>{i.current&&i.current.contains(s.target)||e&&e.contains&&e.contains(s.target)||t()};return H(()=>{if(n&&t)return document.addEventListener("mousedown",o,!1),document.addEventListener("touchend",o,!1),document.addEventListener("keyup",c),()=>{document.removeEventListener("mousedown",o,!1),document.removeEventListener("touchend",o,!1),document.removeEventListener("keyup",c)}}),x.createElement(T,l({ref:E},r))}),T=b.div`
  display: contents;
`;export{R as ClickOutsideGuard};
//# sourceMappingURL=index.js.map