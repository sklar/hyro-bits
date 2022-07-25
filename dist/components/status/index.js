/** Components v5.5.0 */
var X=Object.create;var f=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,F=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var I=(e,a,t)=>a in e?f(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,p=(e,a)=>{for(var t in a||(a={}))w.call(a,t)&&I(e,t,a[t]);if(m)for(var t of m(a))C.call(a,t)&&I(e,t,a[t]);return e};var O=e=>f(e,"__esModule",{value:!0});var b=(e,a)=>{var t={};for(var r in e)w.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&m)for(var r of m(e))a.indexOf(r)<0&&C.call(e,r)&&(t[r]=e[r]);return t};var J=(e,a)=>{for(var t in a)f(e,t,{get:a[t],enumerable:!0})},_=(e,a,t,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let c of q(a))!w.call(e,c)&&(t||c!=="default")&&f(e,c,{get:()=>a[c],enumerable:!(r=j(a,c))||r.enumerable});return e},g=(e,a)=>_(O(f(e!=null?X(F(e)):{},"default",!a&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),W=(e=>(a,t)=>e&&e.get(a)||(t=_(O({}),a,1),e&&e.set(a,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var oe={};J(oe,{Status:()=>U,status:()=>E});var P=g(require("@emotion/styled")),G=require("case-anything"),z=g(require("react"));var K=g(require("@emotion/styled")),s=g(require("react"));var L=require("@emotion/react");var A=require("@emotion/react");var D=require("@emotion/react");var V=D.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var M=A.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,$=A.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var R=L.css`
  &[data-clamp] {
    ${M};
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
    ${$};
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
`;function Q(e,{begin:a=0,end:t=0,limit:r=5}){return s.default.createElement(s.default.Fragment,null,e.length-(a+t)>r?s.default.createElement(s.default.Fragment,null,s.default.createElement("span",null,e.slice(0,e.length-t)),s.default.createElement("span",null,e.slice(-t))):s.default.createElement(s.default.Fragment,null,e))}var v=(0,s.forwardRef)((se,B)=>{var S=se,{as:e="span",children:a,clamp:t,content:r,hyphens:c="manual",space:N,truncate:o,word:x="normal"}=S,y=b(S,["as","children","clamp","content","hyphens","space","truncate","word"]);let h=o instanceof Object&&("begin"in o||"end"in o),k=r&&h?Q(r,o):a,H={"data-qa":`text-${e}`};return s.default.createElement(Z,p(p({as:e,"data-clamp":t||null,"data-hyphens":c,"data-space":N||null,"data-truncate":k&&h?"smart":o?"simple":null,"data-word":x,ref:B,style:{["--lines"]:t,["--chars-begin"]:h&&o instanceof Object&&(o==null?void 0:o.begin),["--chars-end"]:h&&o instanceof Object&&(o==null?void 0:o.end)}},H),y),k)}),Z=K.default.span`
  ${R};
`;var Y=require("@emotion/react");var d={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},ee=(e=>({DANGER:e.red.radical,NOTICE:e.blue.ribbon1,SUCCESS:e.green.caribbean,WARNING:e.orange.amber}))(d),te=(e=>({PRIMARY:e.blue.ribbon,SECONDARY:e.blue.hawkes,TERTIARY:e.gray.cadet,BACKGROUND_PRIMARY:e.white,BACKGROUND_SECONDARY:e.gray.porcelain,ELEMENT_PRIMARY:e.blue.ribbon,ELEMENT_SECONDARY:e.blue.hawkes,ELEMENT_TERTIARY:e.gray.cadet,ELEMENT_ACTIVE:e.blue.science,ELEMENT_DISABLED:e.gray.geyser,ELEMENT_FOCUS:e.blue.dodger,STROKE:e.gray.botticelli,TEXT_PRIMARY:e.blue.haiti,TEXT_SECONDARY:e.blue.hawkes,TEXT_TERTIARY:e.gray.cadet,DARK_TERTIARY:e.gray.waterloo,DARK_ELEMENT_TERTIARY:e.gray.waterloo,DARK_BACKGROUND_PRIMARY:e.blue.vulcan,DARK_BACKGROUND_SECONDARY:e.blue.ebony,DARK_ELEMENT_ACTIVE:e.blue.oxford,DARK_ELEMENT_DISABLED:e.gray.trout,DARK_ELEMENT_FOCUS:e.blue.denim,DARK_STROKE:e.gray.fiord}))(d),l=p(p({BLACK:d.black,CURRENT:d.current,TRANSPARENT:d.transparent,WHITE:d.white},ee),te);var n=require("@emotion/react");var u=n.css`
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
`,T=n.css`
  ${u};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Re=n.css`
  ${T};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,ve=n.css`
  ${T};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,ze=n.css`
  ${T};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ae=n.css`
  ${T};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Ne=n.css`
  ${ae};

  --font-weight: 600;
`,Se=n.css`
  ${u};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,ke=n.css`
  ${u};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Ce=n.css`
  ${u};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Ie=n.css`
  ${u};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var E=Y.css`
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
`;var U=N=>{var o=N,{children:e,icon:a,text:t,theme:r}=o,c=b(o,["children","icon","text","theme"]);let x=!(t||e),y={"data-qa":["status",...r?[r]:[],...t?[`${(0,G.kebabCase)(t)}`]:[]].join("-")};return z.default.createElement(re,p(p({"data-beacon":x||null,"data-theme":r||null},y),c),a,z.default.createElement(v,{truncate:!0},t||e))},re=P.default.span`
  ${E};
`;module.exports=W(oe);0&&(module.exports={Status,status});
//# sourceMappingURL=index.js.map