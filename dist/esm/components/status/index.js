/** Components v5.4.0 */
var M=Object.defineProperty;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var S=(e,a,t)=>a in e?M(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))z.call(a,t)&&S(e,t,a[t]);if(h)for(var t of h(a))N.call(a,t)&&S(e,t,a[t]);return e};var m=(e,a)=>{var t={};for(var r in e)z.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&h)for(var r of h(e))a.indexOf(r)<0&&N.call(e,r)&&(t[r]=e[r]);return t};import q from"@emotion/styled";import{kebabCase as F}from"case-anything";import O from"react";import Y from"@emotion/styled";import p,{forwardRef as P}from"react";import{css as K}from"@emotion/react";import{css as k}from"@emotion/react";import{keyframes as $}from"@emotion/react";var L=$`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var C=k`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,I=k`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var x=K`
  &[data-clamp] {
    ${C};
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
    ${I};
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

  &[data-word='break'] {
    word-break: break-all;
  }
  &[data-word='keep'] {
    word-break: keep-all;
  }
`;function G(e,{begin:a=0,end:t=0,limit:r=5}){return p.createElement(p.Fragment,null,e.length-(a+t)>r?p.createElement(p.Fragment,null,p.createElement("span",null,e.slice(0,e.length-t)),p.createElement("span",null,e.slice(-t))):p.createElement(p.Fragment,null,e))}var y=P((V,_)=>{var R=V,{as:e="span",children:a,clamp:t,content:r,hyphens:g="manual",space:A,truncate:o,word:T="normal"}=R,E=m(R,["as","children","clamp","content","hyphens","space","truncate","word"]);let f=o instanceof Object&&("begin"in o||"end"in o),v=r&&f?G(r,o):a,D={"data-qa":`text-${e}`};return p.createElement(U,c(c({as:e,"data-clamp":t||null,"data-hyphens":g,"data-space":A||null,"data-truncate":v&&f?"smart":o?"simple":null,"data-word":T,ref:_,style:{["--lines"]:t,["--chars-begin"]:f&&o instanceof Object&&(o==null?void 0:o.begin),["--chars-end"]:f&&o instanceof Object&&(o==null?void 0:o.end)}},D),E),v)}),U=Y.span`
  ${x};
`;import{css as j}from"@emotion/react";var d={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},B=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(d),H=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(d),l=c(c({BLACK:d.black,CURRENT:d.current,TRANSPARENT:d.transparent,WHITE:d.white},B),H);import{css as i}from"@emotion/react";var u=i`
  --color: ${l.TEXT_PRIMARY};
  --font-family: 'Inter', sans-serif;
  --font-size: ;
  --font-weight: 400;
  --letter-spacing: ;
  --line-height: ;

  box-sizing: border-box;
  color: var(--color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
`,b=i`
  ${u};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,we=i`
  ${b};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Ae=i`
  ${b};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Re=i`
  ${b};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,X=i`
  ${b};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,ve=i`
  ${X};

  --font-weight: 600;
`,ze=i`
  ${u};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Ne=i`
  ${u};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Se=i`
  ${u};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,ke=i`
  ${u};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var w=j`
  ${u};

  --status-background-color: #e7ebf2;
  --status-color: #6a758d;
  --status-color-primary: #bbc7d8;
  --status-color-secondary: hsla(211, 36%, 82%, 0.4);
  --status-font-size: 12px;
  --status-font-weight: 600;
  --status-gap: 4px;
  --status-indent: 8px;
  --status-line-height: var(--status-size);
  --status-radius: 6px;
  --status-size: 24px;

  align-items: center;
  background-color: var(--status-background-color);
  border-radius: var(--status-radius);
  color: var(--status-color);
  display: inline-flex;
  font-size: var(--status-font-size);
  font-weight: var(--status-font-weight);
  gap: var(--status-gap);
  height: var(--status-size);
  padding: 0 var(--status-indent);
  user-select: none;
  white-space: nowrap;

  &[data-theme='notice'] {
    --status-background-color: #d4e5ff;
    --status-color: ${l.PRIMARY};
    --status-color-primary: ${l.NOTICE};
    --status-color-secondary: hsla(222, 100%, 56%, 0.4);
  }
  &[data-theme='success'] {
    --status-background-color: #d7efdc;
    --status-color: #058a40;
    --status-color-primary: ${l.SUCCESS};
    --status-color-secondary: hsla(132, 66%, 70%, 0.4);
  }
  &[data-theme='warning'] {
    --status-background-color: #ffe7b8;
    --status-color: #b17400;
    --status-color-primary: ${l.WARNING};
    --status-color-secondary: hsla(44, 100%, 52%, 0.4);
  }
  &[data-theme='danger'] {
    --status-background-color: #ffaab6;
    --status-color: #c1132d;
    --status-color-primary: ${l.DANGER};
    --status-color-secondary: hsla(351, 100%, 62%, 0.4);
  }

  &[data-beacon] {
    --status-background-color: ${l.TRANSPARENT};
    --status-indent: 0;
    --status-radius: 50%;
    --status-size: 16px;

    display: inline-grid;
    flex-grow: 0;
    place-items: center;
    position: relative;
    width: var(--status-size);

    &::after,
    &::before {
      border-radius: inherit;
      content: '';
      display: block;
      position: absolute;
    }
    &::after {
      background: var(--status-color-primary);
      height: calc(var(--status-size) / 8 * 3);
      width: calc(var(--status-size) / 8 * 3);
    }
    &::before {
      background: var(--status-color-secondary);
      height: calc(var(--status-size) / 8 * 5);
      width: calc(var(--status-size) / 8 * 5);
    }
  }
`;var J=A=>{var o=A,{children:e,icon:a,text:t,theme:r}=o,g=m(o,["children","icon","text","theme"]);let T=!(t||e),E={"data-qa":["status",...r?[r]:[],...t?[`${F(t)}`]:[]].join("-")};return O.createElement(W,c(c({"data-beacon":T||null,"data-theme":r||null},E),g),a,O.createElement(y,{truncate:!0},t||e))},W=q.span`
  ${w};
`;export{J as Status,w as status};
//# sourceMappingURL=index.js.map