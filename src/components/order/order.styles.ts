import { css } from '@emotion/react';

import { colors } from '../../colors';
import { Direction } from '../../constants';

export const order = css`
  --opacity-2: 0;
  --opacity-3: 0;
  --path: ;

  cursor: pointer;
  display: inline-grid;
  place-items: center;
  position: relative;

  [data-icon] {
    color: var(--color);

    &:nth-of-type(1) {
      --color: ${colors.ELEMENT_TERTIARY};
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      --color: ${colors.ELEMENT_PRIMARY};

      clip-path: polygon(var(--path));
      position: absolute;
      transition: opacity 0.4s;
    }
    &:nth-of-type(2) {
      --path: 0% 50%, 100% 50%, 100% 100%, 0% 100%;
      opacity: var(--opacity-2);
    }
    &:nth-of-type(3) {
      --path: 0% 0%, 100% 0%, 100% 50%, 0% 50%;
      opacity: var(--opacity-3);
    }
  }

  &[data-direction='${Direction.ASCENDING}'] {
    --opacity-2: 1;
  }
  &[data-direction='${Direction.DESCENDING}'] {
    --opacity-3: 1;
  }
`;
