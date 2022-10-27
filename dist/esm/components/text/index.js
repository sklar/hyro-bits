/** Components v6.3.2 */
import v from"@emotion/styled";import a,{forwardRef as g}from"react";import{css as T}from"@emotion/react";import{css as l}from"@emotion/react";import{keyframes as y}from"@emotion/react";var u=y`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var m=l`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,c=l`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var s=T`
  &[data-clamp] {
    ${m};
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
    ${c};
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
`;function O(n,{begin:o=0,end:t=0,limit:r=5}){return a.createElement(a.Fragment,null,n.length-(o+t)>r?a.createElement(a.Fragment,null,a.createElement("span",null,n.slice(0,n.length-t)),a.createElement("span",null,n.slice(-t))):a.createElement(a.Fragment,null,n))}var z=g(({as:n="span",children:o,clamp:t,content:r,hyphens:d="manual",space:h,truncate:e,wrap:w="normal",...f},b)=>{let i=e instanceof Object&&("begin"in e||"end"in e),p=r&&i?O(r,e):o,x={"data-qa":`text-${n}`};return a.createElement(E,{as:n,"data-clamp":t||null,"data-hyphens":d,"data-space":h||null,"data-truncate":p&&i?"smart":e?"simple":null,"data-wrap":w,ref:b,style:{["--lines"]:t,["--chars-begin"]:i&&e instanceof Object&&(e==null?void 0:e.begin),["--chars-end"]:i&&e instanceof Object&&(e==null?void 0:e.end)},...x,...f},p)}),E=v.span`
  ${s};
`;export{z as Text,s as text};
//# sourceMappingURL=index.js.map