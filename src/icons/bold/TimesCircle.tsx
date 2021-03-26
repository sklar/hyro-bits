import * as React from 'react';

function SvgTimesCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <circle cx={8} cy={8} r={8} fill="currentColor" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M11.417 4.583a1 1 0 010 1.414l-5.42 5.42a1 1 0 01-1.414-1.414l5.42-5.42a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M11.417 11.417a1 1 0 01-1.414 0l-5.42-5.42a1 1 0 011.414-1.414l5.42 5.42a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTimesCircle;
