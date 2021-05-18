import { css } from '@emotion/react';
import { ArgTypes } from '@storybook/react/types-6-0';

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

export const mapArgTypes = (types: string[], args: ArgTypes): ArgTypes => {
  return types.reduce((acc: Record<string, ArgTypes>, value) => {
    return { ...acc, [value]: args };
  }, {});
};

export * from './Color';
export * from './Container';
export * from './Divider';
export * from './Legend';
