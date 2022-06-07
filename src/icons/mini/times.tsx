import * as React from 'react';

const SvgTimes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
    <mask
      id="times_svg__a"
      width={16}
      height={16}
      x={0}
      y={0}
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#fff" d="M0 0h16v16H0z" />
    </mask>
    <g stroke="currentColor" strokeLinecap="round" strokeWidth={2} mask="url(#times_svg__a)">
      <path d="m4.991 4.991 5.817 5.817M10.808 4.991 4.99 10.808" />
    </g>
  </svg>
);

export default SvgTimes;
