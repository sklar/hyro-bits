/** Components v6.1.1 */
var A=Object.defineProperty;var s=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var b=(e,n,a)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,m=(e,n)=>{for(var a in n||(n={}))w.call(n,a)&&b(e,a,n[a]);if(s)for(var a of s(n))f.call(n,a)&&b(e,a,n[a]);return e};var x=(e,n)=>{var a={};for(var t in e)w.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&s)for(var t of s(e))n.indexOf(t)<0&&f.call(e,t)&&(a[t]=e[t]);return a};import L from"@emotion/styled";import i,{forwardRef as M}from"react";import{css as H}from"@emotion/react";import{css as y}from"@emotion/react";import{keyframes as I}from"@emotion/react";var C=I`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var u=y`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,T=y`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var c=H`
  &[data-clamp] {
    ${u};
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
    ${T};
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
`;function P(e,{begin:n=0,end:a=0,limit:t=5}){return i.createElement(i.Fragment,null,e.length-(n+a)>t?i.createElement(i.Fragment,null,i.createElement("span",null,e.slice(0,e.length-a)),i.createElement("span",null,e.slice(-a))):i.createElement(i.Fragment,null,e))}var S=M((j,E)=>{var d=j,{as:e="span",children:n,clamp:a,content:t,hyphens:v="manual",space:g,truncate:r,wrap:O="normal"}=d,z=x(d,["as","children","clamp","content","hyphens","space","truncate","wrap"]);let o=r instanceof Object&&("begin"in r||"end"in r),h=t&&o?P(t,r):n,k={"data-qa":`text-${e}`};return i.createElement($,m(m({as:e,"data-clamp":a||null,"data-hyphens":v,"data-space":g||null,"data-truncate":h&&o?"smart":r?"simple":null,"data-wrap":O,ref:E,style:{["--lines"]:a,["--chars-begin"]:o&&r instanceof Object&&(r==null?void 0:r.begin),["--chars-end"]:o&&r instanceof Object&&(r==null?void 0:r.end)}},k),z),h)}),$=L.span`
  ${c};
`;export{S as Text,c as text};
//# sourceMappingURL=index.js.map