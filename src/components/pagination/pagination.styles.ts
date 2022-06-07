import { css } from '@emotion/react';

export const item = css`
  --size: 40px;

  height: var(--size);
  padding: 0;
  width: var(--size);
`;

export const spacer = css`
  ${item};

  display: inline-grid;
  place-items: center;
  white-space: nowrap;
`;

export const pagination = css`
  user-select: none;

  button {
    ${item};
  }
`;
