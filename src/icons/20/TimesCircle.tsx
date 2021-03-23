import * as React from 'react';

function SvgTimesCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <circle cx={10} cy={10} r={9} fill="currentColor" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.844 6.156c.44.44.44 1.152 0 1.59l-6.097 6.098a1.125 1.125 0 11-1.591-1.59l6.097-6.098c.44-.44 1.152-.44 1.591 0z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.844 13.844c-.44.44-1.152.44-1.59 0L6.155 7.747a1.125 1.125 0 111.59-1.591l6.098 6.097c.44.44.44 1.152 0 1.591z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTimesCircle;
