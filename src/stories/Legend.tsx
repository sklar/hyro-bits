import React from 'react';
import styled from '@emotion/styled';

export const Legend: React.FC = (props): JSX.Element => <Container {...props} />;

const Container = styled.small`
  color: hsl(0 0% 50%);
  font-size: 0.8rem;
  padding-left: 1ch;
`;
