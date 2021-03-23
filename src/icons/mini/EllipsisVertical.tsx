import * as React from 'react';

function SvgEllipsisVertical() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <circle cx={8} cy={12.8} r={1.2} fill="currentColor" transform="rotate(-90 8 12.8)" />
      <circle cx={8} cy={8} r={1.2} fill="currentColor" transform="rotate(-90 8 8)" />
      <circle cx={8} cy={3.2} r={1.2} fill="currentColor" transform="rotate(-90 8 3.2)" />
    </svg>
  );
}

export default SvgEllipsisVertical;
