import styled from '@emotion/styled';
import React from 'react';

export const Divider: React.FC = (props): JSX.Element => <Container {...props} />;

const Container = styled.div`
  grid-column: 1 / -1;
  min-width: 100%;
`;
