import { css } from '@emotion/react';

export const clamp = css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`;

export const truncate = css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;

export { EASING, fadeInAnimation } from './animations';
