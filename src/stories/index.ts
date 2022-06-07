import { css } from '@emotion/react';
import { Args } from '@storybook/react';

import { colors } from '../colors';
import { base, paragraph } from '../typography';

export const global = css`
  body {
    ${base};

    --font-size: 14px;
  }
  p {
    ${paragraph};
  }
  a {
    color: ${colors.PRIMARY};
  }
`;

export const mapArgTypes = (items: string[], args: Args) => {
  return items.reduce((acc: Record<string, Args>, item) => {
    return { ...acc, [item]: args };
  }, {});
};

export * from './color';
export * from './container';
export * from './divider';
export * from './legend';
