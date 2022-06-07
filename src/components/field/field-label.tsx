/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { Flex, FlexProps } from '../flex';
import { label } from './field.styles';

export const FieldLabel: React.FC<FlexProps> = (props): JSX.Element => {
  const qa = {
    'data-qa': 'field-label',
  };
  return <Flex as="label" css={label} gap="4px" {...qa} {...props} />;
};
