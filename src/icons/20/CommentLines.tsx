import * as React from 'react';

function SvgCommentLines() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 3.818C0 2.814.814 2 1.818 2h16.364C19.186 2 20 2.814 20 3.818v10.91a1.818 1.818 0 01-1.818 1.818h-5.59l-1.456 1.164a1.818 1.818 0 01-2.272 0l-1.456-1.165h-5.59A1.818 1.818 0 010 14.728V3.818zm18.182 0H1.818v10.91h5.59c.413 0 .814.14 1.136.398L10 16.29l1.456-1.164a1.818 1.818 0 011.136-.399h5.59V3.818z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5.455 11.09h9.09M5.455 7.455h9.09"
      />
    </svg>
  );
}

export default SvgCommentLines;
