import React from 'react';
import styled from '@emotion/styled';

export const Divider: React.FC = (props): JSX.Element => <Container {...props} />;

const Container = styled.div`
  grid-column: 1 / -1;
  min-width: 100%;
`;
