/** Components v6.8.0 */
"use strict";var $=Object.create;var f=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var Y=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var G=(t,a)=>{for(var e in a)f(t,e,{get:a[e],enumerable:!0})},w=(t,a,e,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let l of K(a))!P.call(t,l)&&l!==e&&f(t,l,{get:()=>a[l],enumerable:!(n=L(a,l))||n.enumerable});return t};var d=(t,a,e)=>(e=t!=null?$(Y(t)):{},w(a||!t||!t.__esModule?f(e,"default",{value:t,enumerable:!0}):e,t)),U=t=>w(f({},"__esModule",{value:!0}),t);var W={};G(W,{Status:()=>O,status:()=>m});module.exports=U(W);var C=d(require("@emotion/styled")),I=require("case-anything"),x=d(require("react"));var N=d(require("@emotion/styled")),o=d(require("react"));var z=require("@emotion/react");var g=require("@emotion/react");var A=require("@emotion/react");var B=A.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var R=g.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,v=g.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var T=z.css`
  &[data-clamp] {
    ${R};
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
    ${v};
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
`;function H(t,{begin:a=0,end:e=0,limit:n=5}){return o.default.createElement(o.default.Fragment,null,t.length-(a+e)>n?o.default.createElement(o.default.Fragment,null,o.default.createElement("span",null,t.slice(0,t.length-e)),o.default.createElement("span",null,t.slice(-e))):o.default.createElement(o.default.Fragment,null,t))}var E=(0,o.forwardRef)(({as:t="span",children:a,clamp:e,content:n,hyphens:l="manual",space:b,truncate:r,wrap:k="normal",..._},D)=>{let u=r instanceof Object&&("begin"in r||"end"in r),y=n&&u?H(n,r):a,M={"data-qa":`text-${t}`};return o.default.createElement(X,{as:t,"data-clamp":e||null,"data-hyphens":l,"data-space":b||null,"data-truncate":y&&u?"smart":r?"simple":null,"data-wrap":k,ref:D,style:{["--lines"]:e,["--chars-begin"]:u&&r instanceof Object&&(r==null?void 0:r.begin),["--chars-end"]:u&&r instanceof Object&&(r==null?void 0:r.end)},...M,..._},y)}),X=N.default.span`
  ${T};
`;var S=require("@emotion/react");var p={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},j=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(p),q=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(p),i={BLACK:p.black,CURRENT:p.current,TRANSPARENT:p.transparent,WHITE:p.white,...j,...q};var s=require("@emotion/react");var c=s.css`
  --color: ${i.TEXT_PRIMARY};
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
`,h=s.css`
  ${c};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,mt=s.css`
  ${h};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,bt=s.css`
  ${h};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,gt=s.css`
  ${h};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,F=s.css`
  ${h};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Tt=s.css`
  ${F};

  --font-weight: 600;
`,Et=s.css`
  ${c};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,xt=s.css`
  ${c};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,yt=s.css`
  ${c};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,wt=s.css`
  ${c};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var m=S.css`
  ${c};

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
    --status-color: ${i.PRIMARY};
    --status-color-primary: ${i.NOTICE};
    --status-color-secondary: hsla(222, 100%, 56%, 0.4);
  }
  &[data-theme='success'] {
    --status-background-color: #d7efdc;
    --status-color: #058a40;
    --status-color-primary: ${i.SUCCESS};
    --status-color-secondary: hsla(132, 66%, 70%, 0.4);
  }
  &[data-theme='warning'] {
    --status-background-color: #ffe7b8;
    --status-color: #b17400;
    --status-color-primary: ${i.WARNING};
    --status-color-secondary: hsla(44, 100%, 52%, 0.4);
  }
  &[data-theme='danger'] {
    --status-background-color: #ffaab6;
    --status-color: #c1132d;
    --status-color-primary: ${i.DANGER};
    --status-color-secondary: hsla(351, 100%, 62%, 0.4);
  }

  &[data-beacon] {
    --status-background-color: ${i.TRANSPARENT};
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
`;var O=({children:t,icon:a,text:e,theme:n,...l})=>{let b=!(e||t),r={"data-qa":["status",...n?[n]:[],...e?[`${(0,I.kebabCase)(e)}`]:[]].join("-")};return x.default.createElement(J,{"data-beacon":b||null,"data-theme":n||null,...r,...l},a,x.default.createElement(E,{truncate:!0},e||t))},J=C.default.span`
  ${m};
`;0&&(module.exports={Status,status});
//# sourceMappingURL=index.js.map