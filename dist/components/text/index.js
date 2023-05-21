/** Components v6.10.0 */
"use strict";var E=Object.create;var p=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var I=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var H=(e,a)=>{for(var n in a)p(e,n,{get:a[n],enumerable:!0})},d=(e,a,n,i)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of A(a))!C.call(e,o)&&o!==n&&p(e,o,{get:()=>a[o],enumerable:!(i=k(a,o))||i.enumerable});return e};var h=(e,a,n)=>(n=e!=null?E(I(e)):{},d(a||!e||!e.__esModule?p(n,"default",{value:e,enumerable:!0}):n,e)),L=e=>d(p({},"__esModule",{value:!0}),e);var $={};H($,{Text:()=>u,text:()=>l});module.exports=L($);var y=h(require("@emotion/styled")),r=h(require("react"));var x=require("@emotion/react");var m=require("@emotion/react");var w=require("@emotion/react");var M=w.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var f=m.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,b=m.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var l=x.css`
  &[data-clamp] {
    ${f};
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
    ${b};
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
`;function P(e,{begin:a=0,end:n=0,limit:i=5}){return r.default.createElement(r.default.Fragment,null,e.length-(a+n)>i?r.default.createElement(r.default.Fragment,null,r.default.createElement("span",null,e.slice(0,e.length-n)),r.default.createElement("span",null,e.slice(-n))):r.default.createElement(r.default.Fragment,null,e))}var u=(0,r.forwardRef)(({as:e="span",children:a,clamp:n,content:i,hyphens:o="manual",space:T,truncate:t,wrap:v="normal",...g},O)=>{let s=t instanceof Object&&("begin"in t||"end"in t),c=i&&s?P(i,t):a,z={"data-qa":`text-${e}`};return r.default.createElement(S,{as:e,"data-clamp":n||null,"data-hyphens":o,"data-space":T||null,"data-truncate":c&&s?"smart":t?"simple":null,"data-wrap":v,ref:O,style:{["--lines"]:n,["--chars-begin"]:s&&t instanceof Object&&(t==null?void 0:t.begin),["--chars-end"]:s&&t instanceof Object&&(t==null?void 0:t.end)},...z,...g},c)}),S=y.default.span`
  ${l};
`;0&&(module.exports={Text,text});
//# sourceMappingURL=index.js.map