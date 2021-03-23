import * as React from 'react';

function SvgGrid() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <rect width={11.2} height={11.2} fill="currentColor" rx={3} />
      <rect width={11.2} height={11.2} y={12.8} fill="currentColor" rx={3} />
      <rect width={11.2} height={11.2} x={12.8} y={12.8} fill="currentColor" rx={3} />
      <rect width={11.2} height={11.2} x={12.8} fill="currentColor" rx={3} />
    </svg>
  );
}

export default SvgGrid;
