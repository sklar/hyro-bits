/** Components v6.5.0 */
import a from"@emotion/styled";import{useCombinedRef as m}from"@spicy-hooks/core";import f,{forwardRef as l,useEffect as p,useRef as v}from"react";var E=l(({ignore:n,listen:i,onClickOutside:o,...d},u)=>{let r=v(null),c=m(u,r),s=t=>{t.key==="Escape"&&o(),e(t)},e=t=>{r.current&&r.current.contains(t.target)||n&&n.contains&&n.contains(t.target)||o()};return p(()=>{if(i)return document.addEventListener("mousedown",e,!1),document.addEventListener("touchend",e,!1),document.addEventListener("keyup",s),()=>{document.removeEventListener("mousedown",e,!1),document.removeEventListener("touchend",e,!1),document.removeEventListener("keyup",s)}}),f.createElement(L,{ref:c,...d})}),L=a.div`
  display: contents;
`;export{E as ClickOutsideGuard};
//# sourceMappingURL=index.js.map