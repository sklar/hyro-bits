/** Components v6.1.1 */
var S=Object.create;var s=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,q=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var y=(e,a,n)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,h=(e,a)=>{for(var n in a||(a={}))d.call(a,n)&&y(e,n,a[n]);if(l)for(var n of l(a))x.call(a,n)&&y(e,n,a[n]);return e};var u=e=>s(e,"__esModule",{value:!0});var T=(e,a)=>{var n={};for(var t in e)d.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&l)for(var t of l(e))a.indexOf(t)<0&&x.call(e,t)&&(n[t]=e[t]);return n};var D=(e,a)=>{for(var n in a)s(e,n,{get:a[n],enumerable:!0})},v=(e,a,n,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of j(a))!d.call(e,o)&&(n||o!=="default")&&s(e,o,{get:()=>a[o],enumerable:!(t=$(a,o))||t.enumerable});return e},g=(e,a)=>v(u(s(e!=null?S(q(e)):{},"default",!a&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),G=(e=>(a,n)=>e&&e.get(a)||(n=v(u({}),a,1),e&&e.set(a,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var X={};D(X,{Text:()=>I,text:()=>c});var A=g(require("@emotion/styled")),i=g(require("react"));var k=require("@emotion/react");var w=require("@emotion/react");var O=require("@emotion/react");var J=O.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var z=w.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,E=w.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var c=k.css`
  &[data-clamp] {
    ${z};
  }

  &[data-hyphens='auto'] {
    hyphens: auto;
  }
  &[data-hyphens='none'] {
    hyphens: none;
  }

  &[data-space='normal'] {
    white-space: normal;
  }
  &[data-space='nowrap'] {
    white-space: nowrap;
  }
  &[data-space='pre'] {
    white-space: pre;
  }

  &[data-truncate='simple'] {
    ${E};
  }

  &[data-truncate='smart'] {
    --char-size: calc(0.68 * 1em);
    --size-begin: calc(var(--char-size) * var(--chars-begin, 0));
    --size-end: calc(var(--char-size) * var(--chars-end, 0));

    display: inline-flex;
    max-width: 100%;

    span {
      overflow: hidden;
      white-space: nowrap;

      &:nth-of-type(1) {
        max-width: calc(100% - var(--size-end));
        min-width: var(--size-begin);
        text-overflow: ellipsis;
      }
      &:nth-of-type(2) {
        max-width: var(--size-end);
      }
    }
  }

  &[data-wrap='all'] {
    overflow-wrap: anywhere;
  }
  &[data-wrap='word'] {
    overflow-wrap: break-word;
  }
`;function K(e,{begin:a=0,end:n=0,limit:t=5}){return i.default.createElement(i.default.Fragment,null,e.length-(a+n)>t?i.default.createElement(i.default.Fragment,null,i.default.createElement("span",null,e.slice(0,e.length-n)),i.default.createElement("span",null,e.slice(-n))):i.default.createElement(i.default.Fragment,null,e))}var I=(0,i.forwardRef)((Q,M)=>{var f=Q,{as:e="span",children:a,clamp:n,content:t,hyphens:o="manual",space:C,truncate:r,wrap:H="normal"}=f,L=T(f,["as","children","clamp","content","hyphens","space","truncate","wrap"]);let p=r instanceof Object&&("begin"in r||"end"in r),b=t&&p?K(t,r):a,P={"data-qa":`text-${e}`};return i.default.createElement(N,h(h({as:e,"data-clamp":n||null,"data-hyphens":o,"data-space":C||null,"data-truncate":b&&p?"smart":r?"simple":null,"data-wrap":H,ref:M,style:{["--lines"]:n,["--chars-begin"]:p&&r instanceof Object&&(r==null?void 0:r.begin),["--chars-end"]:p&&r instanceof Object&&(r==null?void 0:r.end)}},P),L),b)}),N=A.default.span`
  ${c};
`;module.exports=G(X);0&&(module.exports={Text,text});
//# sourceMappingURL=index.js.map