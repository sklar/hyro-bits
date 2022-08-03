/** Components v5.5.1 */
var X=Object.create;var d=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,F=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var O=(t,a,e)=>a in t?d(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))w.call(a,e)&&O(t,e,a[e]);if(m)for(var e of m(a))I.call(a,e)&&O(t,e,a[e]);return t};var k=t=>d(t,"__esModule",{value:!0});var b=(t,a)=>{var e={};for(var r in t)w.call(t,r)&&a.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&m)for(var r of m(t))a.indexOf(r)<0&&I.call(t,r)&&(e[r]=t[r]);return e};var J=(t,a)=>{for(var e in a)d(t,e,{get:a[e],enumerable:!0})},_=(t,a,e,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let c of q(a))!w.call(t,c)&&(e||c!=="default")&&d(t,c,{get:()=>a[c],enumerable:!(r=j(a,c))||r.enumerable});return t},g=(t,a)=>_(k(d(t!=null?X(F(t)):{},"default",!a&&t&&t.__esModule?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),W=(t=>(a,e)=>t&&t.get(a)||(e=_(k({}),a,1),t&&t.set(a,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var ot={};J(ot,{Status:()=>U,status:()=>E});var P=g(require("@emotion/styled")),G=require("case-anything"),z=g(require("react"));var K=g(require("@emotion/styled")),s=g(require("react"));var L=require("@emotion/react");var A=require("@emotion/react");var D=require("@emotion/react");var V=D.keyframes`
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

  &[data-wrap='all'] {
    overflow-wrap: anywhere;
  }
  &[data-wrap='word'] {
    overflow-wrap: break-word;
  }
`;function Q(t,{begin:a=0,end:e=0,limit:r=5}){return s.default.createElement(s.default.Fragment,null,t.length-(a+e)>r?s.default.createElement(s.default.Fragment,null,s.default.createElement("span",null,t.slice(0,t.length-e)),s.default.createElement("span",null,t.slice(-e))):s.default.createElement(s.default.Fragment,null,t))}var v=(0,s.forwardRef)((st,B)=>{var S=st,{as:t="span",children:a,clamp:e,content:r,hyphens:c="manual",space:N,truncate:o,wrap:x="normal"}=S,y=b(S,["as","children","clamp","content","hyphens","space","truncate","wrap"]);let h=o instanceof Object&&("begin"in o||"end"in o),C=r&&h?Q(r,o):a,H={"data-qa":`text-${t}`};return s.default.createElement(Z,p(p({as:t,"data-clamp":e||null,"data-hyphens":c,"data-space":N||null,"data-truncate":C&&h?"smart":o?"simple":null,"data-wrap":x,ref:B,style:{["--lines"]:e,["--chars-begin"]:h&&o instanceof Object&&(o==null?void 0:o.begin),["--chars-end"]:h&&o instanceof Object&&(o==null?void 0:o.end)}},H),y),C)}),Z=K.default.span`
  ${R};
`;var Y=require("@emotion/react");var f={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},tt=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(f),et=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(f),l=p(p({BLACK:f.black,CURRENT:f.current,TRANSPARENT:f.transparent,WHITE:f.white},tt),et);var n=require("@emotion/react");var u=n.css`
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
`,Rt=n.css`
  ${T};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,vt=n.css`
  ${T};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,zt=n.css`
  ${T};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,at=n.css`
  ${T};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Nt=n.css`
  ${at};

  --font-weight: 600;
`,St=n.css`
  ${u};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Ct=n.css`
  ${u};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,It=n.css`
  ${u};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Ot=n.css`
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
`;var U=N=>{var o=N,{children:t,icon:a,text:e,theme:r}=o,c=b(o,["children","icon","text","theme"]);let x=!(e||t),y={"data-qa":["status",...r?[r]:[],...e?[`${(0,G.kebabCase)(e)}`]:[]].join("-")};return z.default.createElement(rt,p(p({"data-beacon":x||null,"data-theme":r||null},y),c),a,z.default.createElement(v,{truncate:!0},e||t))},rt=P.default.span`
  ${E};
`;module.exports=W(ot);0&&(module.exports={Status,status});
//# sourceMappingURL=index.js.map