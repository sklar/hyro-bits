/** Components v6.2.0 */
import s from"@emotion/styled";import K from"rc-tooltip";import e,{useMemo as O}from"react";import{css as a}from"@emotion/react";var n={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},I=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(n),D=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(n),i={BLACK:n.black,CURRENT:n.current,TRANSPARENT:n.transparent,WHITE:n.white,...I,...D};import{css as A}from"@emotion/react";import{keyframes as L}from"@emotion/react";var d=L`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var at=A`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,nt=A`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;import{css as o}from"@emotion/react";var r=o`
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
`,c=o`
  ${r};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,ct=o`
  ${c};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,ft=o`
  ${c};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,bt=o`
  ${c};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,$=o`
  ${c};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,dt=o`
  ${$};

  --font-weight: 600;
`,gt=o`
  ${r};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,mt=o`
  ${r};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,ht=o`
  ${r};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Et=o`
  ${r};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var M=a`
  ${r};

  --background-color: #020511;
  --color: ${i.WHITE};
  --font-size: 12px;
  --font-weight: 600;
  --index: 1;
  --line-height: calc(16 / 12);

  --arrow-bottom: auto;
  --arrow-left: auto;
  --arrow-right: auto;
  --arrow-size: 16px;
  --arrow-top: auto;
  --arrow-translate-x: 0;
  --arrow-translate-y: 0;

  --key-size: 24px;

  --separator-size: 8px;

  animation: ${d} 0.2s 0.1s both;
  display: block;
  position: absolute;
  z-index: var(--index);

  &[class*='hidden'] {
    display: none;
  }

  &[class*='bottom'] {
    --arrow-top: 0;
    --arrow-translate-y: -2px;
  }
  &[class*='bottom'],
  &[class*='top'] {
    --arrow-left: 50%;
    --arrow-translate-x: -50%;
  }
  &[class*='top'] {
    --arrow-bottom: 0;
    --arrow-translate-y: 2px;
  }
  &[class*='left'] {
    --arrow-right: 0;
    --arrow-translate-x: 2px;
  }
  &[class*='left'],
  &[class*='right'] {
    --arrow-top: 50%;
    --arrow-translate-y: -50%;
  }
  &[class*='right'] {
    --arrow-left: 0;
    --arrow-translate-x: -2px;
  }
`,g=a`
  background-color: var(--background-color);
  border-radius: 6px;
  color: ${i.WHITE};
  isolation: isolate;
  max-width: var(--size);
  padding: 10px;

  &:not([data-active]) {
    pointer-events: none;
  }

  &:not([data-content]) {
    display: inline-flex;
  }
`,m=a`
  aspect-ratio: 1;
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`,h=a``,E=a`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`,x=a`
  background-color: #50525a;
  border-radius: 4px;
  display: inline-grid;
  font-family: inherit;
  font-weight: 700;
  height: var(--key-size);
  min-width: var(--key-size);
  padding-inline: 6px;
  place-items: center;
  text-transform: capitalize;
`,u=a`
  aspect-ratio: 1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  width: var(--separator-size);
`;var T="t00lt1p",Y=.4,P=.1,U="+",B="super",G=navigator.platform.includes("Mac")?"\u2318":"Ctrl",X=({active:t,children:w,content:f,delayEnter:R=Y,delayLeave:v=P,disabled:k,label:y,placement:C,shortcut:b="",size:N="192px",..._})=>{let S=O(()=>b.split(U).map((l,p)=>e.createElement(J,{key:`key-${p}`},l.replace(B,G))).reduce((l,p,z)=>l.length===0?[p]:[...l,e.createElement(Q,{key:`separator-${z}`}),p],[]),[b]);return k?e.createElement(e.Fragment,null,w):e.createElement(e.Fragment,null,e.createElement(K,{arrowContent:e.createElement(V,null),mouseEnterDelay:R,mouseLeaveDelay:v,overlay:e.createElement(H,{"data-active":t||null,"data-content":f||null,style:{["--size"]:N}},f||e.createElement(e.Fragment,null,y&&e.createElement(W,{"data-label":!0},y),b&&e.createElement(F,null,S))),placement:C,prefixCls:T,..._},w))},H=s.div`
  ${g};
`,V=s.div`
  ${m};
`,W=s.span`
  ${h};
`,F=s.span`
  ${E};
`,J=s.kbd`
  ${x};
`,Q=s.span`
  ${u};
`;export{T as CLASSNAME,X as Tooltip,m as arrow,M as global,x as key,h as label,u as separator,E as shortcut,g as tooltip};
//# sourceMappingURL=index.js.map