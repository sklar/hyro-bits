import React from 'react';
import styled from '@emotion/styled';

export const Divider: React.FC = (props): JSX.Element => <Element {...props} />;

const Element = styled.div`
  grid-column: 1 / -1;
  min-width: 100%;
`;
