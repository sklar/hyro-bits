import { css } from '@emotion/react';

import { colors } from './colors';

export const base = css`
  --color: ${colors.TEXT_PRIMARY};
  --font-family: 'Inter', sans-serif;
  --font-size: ;
  --font-weight: 400;
  --letter-spacing: ;
  --line-height: ;

  box-sizing: border-box;
  color: var(--color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
`;

const heading = css`
  ${base};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`;

export const h1 = css`
  ${heading};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`;

export const h2 = css`
  ${heading};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`;

export const h3 = css`
  ${heading};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`;

export const h4 = css`
  ${heading};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`;

export const h5 = css`
  ${h4};

  --font-weight: 600;
`;

export const paragraph = css`
  ${base};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`;

export const button = css`
  ${base};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`;

export const label = css`
  ${base};

  --color: #353b56;
  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`;

export const input = css`
  ${base};

  --font-size: 13px;
  --line-height: calc(16 / 13);
  --font-weight: 500;
`;
