/** Components v6.1.1 */
var F=Object.create;var d=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,j=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var L=(t,e,o)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,g=(t,e)=>{for(var o in e||(e={}))k.call(e,o)&&L(t,o,e[o]);if(E)for(var o of E(e))D.call(e,o)&&L(t,o,e[o]);return t};var $=t=>d(t,"__esModule",{value:!0});var M=(t,e)=>{var o={};for(var a in t)k.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&E)for(var a of E(t))e.indexOf(a)<0&&D.call(t,a)&&(o[a]=t[a]);return o};var q=(t,e)=>{for(var o in e)d(t,o,{get:e[o],enumerable:!0})},K=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of Q(e))!k.call(t,l)&&(o||l!=="default")&&d(t,l,{get:()=>e[l],enumerable:!(a=J(e,l))||a.enumerable});return t},C=(t,e)=>K($(d(t!=null?F(j(t)):{},"default",!e&&t&&t.__esModule?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),Z=(t=>(e,o)=>t&&t.get(e)||(o=K($({}),e,1),t&&t.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var gt={};q(gt,{CLASSNAME:()=>S,Tooltip:()=>U,arrow:()=>w,global:()=>Y,key:()=>T,label:()=>y,separator:()=>R,shortcut:()=>A,tooltip:()=>u});var c=C(require("@emotion/styled")),P=C(require("rc-tooltip")),r=C(require("react"));var s=require("@emotion/react");var f={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},tt=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(f),et=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(f),b=g(g({BLACK:f.black,CURRENT:f.current,TRANSPARENT:f.transparent,WHITE:f.white},tt),et);var _=require("@emotion/react");var O=require("@emotion/react");var N=O.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var At=_.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,Tt=_.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var n=require("@emotion/react");var p=n.css`
  --color: ${b.TEXT_PRIMARY};
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
`,x=n.css`
  ${p};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Ct=n.css`
  ${x};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Nt=n.css`
  ${x};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,_t=n.css`
  ${x};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ot=n.css`
  ${x};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,St=n.css`
  ${ot};

  --font-weight: 600;
`,zt=n.css`
  ${p};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,It=n.css`
  ${p};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Dt=n.css`
  ${p};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Lt=n.css`
  ${p};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var Y=s.css`
  ${p};

  --background-color: #020511;
  --color: ${b.WHITE};
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

  animation: ${N} 0.2s 0.1s both;
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
`,u=s.css`
  background-color: var(--background-color);
  border-radius: 6px;
  color: ${b.WHITE};
  isolation: isolate;
  max-width: var(--size);
  padding: 10px;

  &:not([data-active]) {
    pointer-events: none;
  }

  &:not([data-content]) {
    display: inline-flex;
  }
`,w=s.css`
  aspect-ratio: 1;
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`,y=s.css``,A=s.css`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`,T=s.css`
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
`,R=s.css`
  aspect-ratio: 1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  width: var(--separator-size);
`;var S="t00lt1p",rt=.4,at=.1,nt="+",it="super",st=navigator.platform.includes("Mac")?"\u2318":"Ctrl",U=mt=>{var I=mt,{active:t,children:e,content:o,delayEnter:a=rt,delayLeave:l=at,disabled:B,label:z,placement:G,shortcut:v="",size:X="192px"}=I,H=M(I,["active","children","content","delayEnter","delayLeave","disabled","label","placement","shortcut","size"]);let V=(0,r.useMemo)(()=>v.split(nt).map((m,h)=>r.default.createElement(bt,{key:`key-${h}`},m.replace(it,st))).reduce((m,h,W)=>m.length===0?[h]:[...m,r.default.createElement(dt,{key:`separator-${W}`}),h],[]),[v]);return B?r.default.createElement(r.default.Fragment,null,e):r.default.createElement(r.default.Fragment,null,r.default.createElement(P.default,g({arrowContent:r.default.createElement(pt,null),mouseEnterDelay:a,mouseLeaveDelay:l,overlay:r.default.createElement(lt,{"data-active":t||null,"data-content":o||null,style:{["--size"]:X}},o||r.default.createElement(r.default.Fragment,null,z&&r.default.createElement(ct,{"data-label":!0},z),v&&r.default.createElement(ft,null,V))),placement:G,prefixCls:S},H),e))},lt=c.default.div`
  ${u};
`,pt=c.default.div`
  ${w};
`,ct=c.default.span`
  ${y};
`,ft=c.default.span`
  ${A};
`,bt=c.default.kbd`
  ${T};
`,dt=c.default.span`
  ${R};
`;module.exports=Z(gt);0&&(module.exports={CLASSNAME,Tooltip,arrow,global,key,label,separator,shortcut,tooltip});
//# sourceMappingURL=index.js.map