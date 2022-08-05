/** Components v6.0.0 */
var M=Object.defineProperty;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var S=(t,a,e)=>a in t?M(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,c=(t,a)=>{for(var e in a||(a={}))z.call(a,e)&&S(t,e,a[e]);if(h)for(var e of h(a))N.call(a,e)&&S(t,e,a[e]);return t};var m=(t,a)=>{var e={};for(var r in t)z.call(t,r)&&a.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&h)for(var r of h(t))a.indexOf(r)<0&&N.call(t,r)&&(e[r]=t[r]);return e};import q from"@emotion/styled";import{kebabCase as F}from"case-anything";import k from"react";import Y from"@emotion/styled";import p,{forwardRef as P}from"react";import{css as K}from"@emotion/react";import{css as C}from"@emotion/react";import{keyframes as $}from"@emotion/react";var L=$`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var I=C`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,O=C`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var x=K`
  &[data-clamp] {
    ${I};
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
    ${O};
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
`;function G(t,{begin:a=0,end:e=0,limit:r=5}){return p.createElement(p.Fragment,null,t.length-(a+e)>r?p.createElement(p.Fragment,null,p.createElement("span",null,t.slice(0,t.length-e)),p.createElement("span",null,t.slice(-e))):p.createElement(p.Fragment,null,t))}var y=P((V,_)=>{var R=V,{as:t="span",children:a,clamp:e,content:r,hyphens:g="manual",space:A,truncate:o,wrap:T="normal"}=R,E=m(R,["as","children","clamp","content","hyphens","space","truncate","wrap"]);let d=o instanceof Object&&("begin"in o||"end"in o),v=r&&d?G(r,o):a,D={"data-qa":`text-${t}`};return p.createElement(U,c(c({as:t,"data-clamp":e||null,"data-hyphens":g,"data-space":A||null,"data-truncate":v&&d?"smart":o?"simple":null,"data-wrap":T,ref:_,style:{["--lines"]:e,["--chars-begin"]:d&&o instanceof Object&&(o==null?void 0:o.begin),["--chars-end"]:d&&o instanceof Object&&(o==null?void 0:o.end)}},D),E),v)}),U=Y.span`
  ${x};
`;import{css as j}from"@emotion/react";var f={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},B=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(f),H=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(f),l=c(c({BLACK:f.black,CURRENT:f.current,TRANSPARENT:f.transparent,WHITE:f.white},B),H);import{css as i}from"@emotion/react";var u=i`
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
`,wt=i`
  ${b};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,At=i`
  ${b};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Rt=i`
  ${b};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,X=i`
  ${b};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,vt=i`
  ${X};

  --font-weight: 600;
`,zt=i`
  ${u};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Nt=i`
  ${u};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,St=i`
  ${u};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Ct=i`
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
`;var J=A=>{var o=A,{children:t,icon:a,text:e,theme:r}=o,g=m(o,["children","icon","text","theme"]);let T=!(e||t),E={"data-qa":["status",...r?[r]:[],...e?[`${F(e)}`]:[]].join("-")};return k.createElement(W,c(c({"data-beacon":T||null,"data-theme":r||null},E),g),a,k.createElement(y,{truncate:!0},e||t))},W=q.span`
  ${w};
`;export{J as Status,w as status};
//# sourceMappingURL=index.js.map