import * as React from 'react';

function SvgAlignDistributeVertically() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.1 14a.9.9 0 01.9-.9h12a.9.9 0 010 1.8H2a.9.9 0 01-.9-.9zM1.1 2a.9.9 0 01.9-.9h12a.9.9 0 010 1.8H2a.9.9 0 01-.9-.9z"
        clipRule="evenodd"
      />
      <rect
        width={4}
        height={8}
        x={4}
        y={10}
        fill="currentColor"
        rx={1}
        transform="rotate(-90 4 10)"
      />
    </svg>
  );
}

export default SvgAlignDistributeVertically;
