/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { HTMLAttributes } from 'react';

import { overlay } from './overlay.styles';

const OVERLAY_INDEX = 1;

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Active
   */
  active?: boolean;
  /**
   * Z-index
   */
  index?: number;

  /**
   * Event: Close
   */
  onClick?: () => void;
}

/**
 * Overlay
 */
export const Overlay: React.VFC<OverlayProps> = ({
  active = false,
  index = OVERLAY_INDEX,
  onClick,
  ...props
}): JSX.Element => {
  return (
    <div
      {...props}
      css={overlay}
      data-active={active || null}
      style={{ ['--overlay-index' as string]: index }}
      onClick={onClick}
    />
  );
};
