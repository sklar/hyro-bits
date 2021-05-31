import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { colors } from '../../theme';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Align items along primary axis
   */
  justify?: boolean;
  /**
   * Padding
   */
  padding?: boolean;
  /**
   * Size
   */
  size?: string;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';

  /**
   * State: Active
   */
  active?: boolean;

  /**
   * Event: Close
   */
  onClose?: () => void;
}

/**
 * Context menu
 */
export const Menu: React.FC<MenuProps> = ({
  active,
  justify,
  padding,
  size,
  theme,
  ...props
}): JSX.Element => {
  const delegated = { ...props };

  return (
    <MenuContainer
      data-active={active || null}
      data-justify={justify || null}
      data-padding={padding || null}
      data-theme={theme || null}
      style={{ ['--size' as string]: size }}
      {...delegated}
    />
  );
};

/**
 * Note that [data-hover] and [data-pressed] are here only to help
 * better illustrate `:hover` and `:active` state in the dedicated story.
 */

const MenuContainer = styled.section`
  --background-color: ${colors.WHITE};
  --border-color: ${colors.WHITE};
  --border-size: 2px;
  --box-shadow: #cbcedc;
  --gap: 4px;
  --indent: 8px;
  --radius: 6px;
  --size: ;

  background-color: var(--background-color);
  border: var(--border-size) solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: 0 3px 9px var(--box-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: calc(1.5 * var(--indent)) var(--indent);
  position: relative;
  user-select: none;
  width: var(--size);
  z-index: 1;

  &[data-padding] {
    padding: calc(2 * var(--indent));
    padding-top: calc(1.5 * var(--indent));
  }

  [data-theme='dark'] &,
  &[data-theme='dark'] {
    --background-color: ${colors.DARK_BACKGROUND_PRIMARY};
    --border-color: ${colors.DARK_STROKE};
    --box-shadow: ${colors.BLACK};
  }
`;
