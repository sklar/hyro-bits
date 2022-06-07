import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

import { text } from './field.styles';

/**
 * Field text
 */
interface FieldTextProps extends HTMLAttributes<HTMLDivElement> {
  secondary?: boolean;
}

export const FieldText: React.FC<FieldTextProps> = ({ secondary, ...props }): JSX.Element => {
  const qa = {
    'data-qa': 'field-text',
  };
  return <Container data-secondary={secondary || null} {...qa} {...props} />;
};

const Container = styled.div`
  ${text};
`;
