/** Components v6.9.0 */
import{jsx as v}from"@emotion/react";import{css as i,keyframes as n}from"@emotion/react";var r=n`
  0% {
    --overlay-alpha: 0%;
  }
  100% {
    --overlay-alpha: 50%;
  }
`,e=i`
  @property --overlay-alpha {
    inherits: true;
    initial-value: 0%;
    syntax: '<percentage>';
  }

  --overlay-color: 0deg 0% 0%;
  --overlay-duration: 0.6s;
  --overlay-easing: linear;
  --overlay-index: ;

  background-color: hsl(var(--overlay-color) / var(--overlay-alpha));
  display: none;
  inset: 0;
  position: fixed;
  z-index: var(--overlay-index);

  &[data-active] {
    animation: ${r} var(--overlay-duration) var(--overlay-easing) both;
    display: block;
  }
`;var y=1,s=({active:a=!1,index:o=y,onClick:t,...l})=>v("div",{...l,css:e,"data-active":a||null,style:{["--overlay-index"]:o},onClick:t});export{s as Overlay,e as overlay,r as overlayAnimation};
//# sourceMappingURL=index.js.map