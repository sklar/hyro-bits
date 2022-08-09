import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

import { hint } from './field.styles';

/**
 * Field text
 */
interface FieldHintProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
}

export const FieldHint: React.VFC<FieldHintProps> = ({ text, ...props }): JSX.Element => {
  const qa = {
    'data-qa': 'field-hint',
  };
  return (
    <Container {...qa} {...props}>
      {text}
    </Container>
  );
};

const Container = styled.em`
  ${hint};
`;
