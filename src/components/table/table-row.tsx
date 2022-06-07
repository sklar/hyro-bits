import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { tr } from './table.styles';

export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Muted
   */
  mute?: boolean;
}

/**
 * Table row
 */
export const Tr = forwardRef<HTMLTableRowElement, TrProps>(
  ({ mute, ...props }, ref): JSX.Element => (
    <TrContainer data-mute={mute || null} ref={ref} {...props} />
  )
);

export const TrContainer = styled.tr`
  ${tr};
`;
