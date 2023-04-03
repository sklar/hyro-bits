/** Components v6.8.0 */
import L from"@emotion/styled";import{kebabCase as K}from"case-anything";import y from"react";import C from"@emotion/styled";import s,{forwardRef as I}from"react";import{css as S}from"@emotion/react";import{css as T}from"@emotion/react";import{keyframes as z}from"@emotion/react";var N=z`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var E=T`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,x=T`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var h=S`
  &[data-clamp] {
    ${E};
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
    ${x};
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
`;function O(t,{begin:c=0,end:a=0,limit:n=5}){return s.createElement(s.Fragment,null,t.length-(c+a)>n?s.createElement(s.Fragment,null,s.createElement("span",null,t.slice(0,t.length-a)),s.createElement("span",null,t.slice(-a))):s.createElement(s.Fragment,null,t))}var m=I(({as:t="span",children:c,clamp:a,content:n,hyphens:f="manual",space:d,truncate:e,wrap:w="normal",...A},R)=>{let p=e instanceof Object&&("begin"in e||"end"in e),g=n&&p?O(n,e):c,v={"data-qa":`text-${t}`};return s.createElement(k,{as:t,"data-clamp":a||null,"data-hyphens":f,"data-space":d||null,"data-truncate":g&&p?"smart":e?"simple":null,"data-wrap":w,ref:R,style:{["--lines"]:a,["--chars-begin"]:p&&e instanceof Object&&(e==null?void 0:e.begin),["--chars-end"]:p&&e instanceof Object&&(e==null?void 0:e.end)},...v,...A},g)}),k=C.span`
  ${h};
`;import{css as $}from"@emotion/react";var l={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},_=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(l),D=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(l),o={BLACK:l.black,CURRENT:l.current,TRANSPARENT:l.transparent,WHITE:l.white,..._,...D};import{css as r}from"@emotion/react";var i=r`
  --color: ${o.TEXT_PRIMARY};
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
`,u=r`
  ${i};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,pt=r`
  ${u};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,ut=r`
  ${u};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,ft=r`
  ${u};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,M=r`
  ${u};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,dt=r`
  ${M};

  --font-weight: 600;
`,ht=r`
  ${i};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,mt=r`
  ${i};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,bt=r`
  ${i};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,gt=r`
  ${i};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var b=$`
  ${i};

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
    --status-color: ${o.PRIMARY};
    --status-color-primary: ${o.NOTICE};
    --status-color-secondary: hsla(222, 100%, 56%, 0.4);
  }
  &[data-theme='success'] {
    --status-background-color: #d7efdc;
    --status-color: #058a40;
    --status-color-primary: ${o.SUCCESS};
    --status-color-secondary: hsla(132, 66%, 70%, 0.4);
  }
  &[data-theme='warning'] {
    --status-background-color: #ffe7b8;
    --status-color: #b17400;
    --status-color-primary: ${o.WARNING};
    --status-color-secondary: hsla(44, 100%, 52%, 0.4);
  }
  &[data-theme='danger'] {
    --status-background-color: #ffaab6;
    --status-color: #c1132d;
    --status-color-primary: ${o.DANGER};
    --status-color-secondary: hsla(351, 100%, 62%, 0.4);
  }

  &[data-beacon] {
    --status-background-color: ${o.TRANSPARENT};
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
`;var Y=({children:t,icon:c,text:a,theme:n,...f})=>{let d=!(a||t),e={"data-qa":["status",...n?[n]:[],...a?[`${K(a)}`]:[]].join("-")};return y.createElement(P,{"data-beacon":d||null,"data-theme":n||null,...e,...f},c,y.createElement(m,{truncate:!0},a||t))},P=L.span`
  ${b};
`;export{Y as Status,b as status};
//# sourceMappingURL=index.js.map