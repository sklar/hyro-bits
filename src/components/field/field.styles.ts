import { css } from '@emotion/react';

import { colors } from '../../colors';
import { base, label as labelToken } from '../../typography';

/**
 * Field
 */
export const field = css`
  --field-indent: 0;

  flex: 1;

  &:not([data-compact]) {
    padding-block: 12px;
  }
`;

/**
 * Field label
 */
export const label = css`
  ${labelToken};

  margin-bottom: var(--field-indent);
`;

/**
 * Field message
 */
export const message = css`
  ${base};

  --font-size: 13px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 13);

  margin-top: var(--field-indent);

  &[data-theme='danger'] {
    color: ${colors.DANGER};
  }
  &[data-theme='notice'] {
    color: ${colors.NOTICE};
  }
  &[data-theme='success'] {
    color: ${colors.SUCCESS};
  }
`;

/**
 * Field text
 */
export const text = css`
  ${base};

  --font-size: 14px;
  --font-weight: 500;
  --letter-spacing: -0.01em;
  --line-height: calc(18 / 14);

  &[data-secondary] {
    --color: ${colors.TEXT_TERTIARY};
    --font-size: 13px;
    --line-height: calc(16 / 13);
  }
`;
