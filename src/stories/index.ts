import { css } from '@emotion/react';
import { Args } from '@storybook/react';
import { base, colors, paragraph } from '../theme';

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

export * from './Color';
export * from './Container';
export * from './Divider';
export * from './Legend';
