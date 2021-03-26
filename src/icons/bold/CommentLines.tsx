import * as React from 'react';

function SvgCommentLines() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 3.055C0 2.25.651 1.6 1.455 1.6h13.09C15.35 1.6 16 2.251 16 3.055v8.727c0 .803-.651 1.454-1.454 1.454h-4.473l-1.164.932a1.455 1.455 0 01-1.818 0l-1.164-.932H1.455A1.455 1.455 0 010 11.782V3.055zm14.546 0H1.455v8.727h4.472c.33 0 .65.112.908.319L8 13.032l1.165-.931a1.45 1.45 0 01.908-.32h4.473V3.056z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M4.364 8.873h7.272M4.364 5.964h7.272"
      />
    </svg>
  );
}

export default SvgCommentLines;
