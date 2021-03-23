import * as React from 'react';

function SvgEllipsisVertical() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <circle cx={10} cy={18} r={2} fill="currentColor" transform="rotate(-90 10 18)" />
      <circle cx={10} cy={10} r={2} fill="currentColor" transform="rotate(-90 10 10)" />
      <circle cx={10} cy={2} r={2} fill="currentColor" transform="rotate(-90 10 2)" />
    </svg>
  );
}

export default SvgEllipsisVertical;
