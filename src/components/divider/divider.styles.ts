import { css } from '@emotion/react';

import { colors } from '../../colors';

export const horizontal = css`
  height: var(--size);
  margin-inline: var(--space);
`;

export const vertical = css`
  margin-block: var(--space);
  width: var(--size);
`;

export const divider = css`
  --color: ${colors.STROKE};
  --size: 2px;
  --space: 0;

  background-color: var(--color);
  border-radius: 1000px;
  display: block;

  &:is([data-divider='horizontal']) {
    ${horizontal};
  }
  &:is([data-divider='vertical']) {
    ${vertical};
  }

  [data-theme='dark'] & {
    --color: ${colors.DARK_STROKE};
  }
`;
