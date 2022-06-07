/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { Flex, FlexProps } from '../flex';
import { field } from './field.styles';

export interface FieldProps extends FlexProps {
  /**
   * Compact
   */
  compact?: boolean;
}

export const Field: React.FC<FieldProps> = ({ compact, ...props }): JSX.Element => {
  const qa = {
    'data-qa': 'field',
  };
  return (
    <Flex
      block
      css={field}
      data-compact={compact || null}
      direction="column"
      gap="8px"
      {...qa}
      {...props}
    />
  );
};
