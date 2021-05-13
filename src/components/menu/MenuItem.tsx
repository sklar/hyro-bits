import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { button, colors, paragraph } from '../../theme';

export interface MenuItemProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Align along primary axis
   */
  justify?: boolean;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';

  /**
   * State: Active
   */
  active?: boolean;
}

/**
 * Context menu item
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  active,
  justify,
  theme,
  ...props
}): JSX.Element => {
  const delegated = { ...props };

  return (
    <MenuItemContainer
      type="button"
      data-active={active || null}
      data-justify={justify || null}
      data-theme={theme || null}
      {...delegated}
    />
  );
};

const MenuItemContainer = styled.button`
  ${button};

  --background-color: ;
  --color: ;
  --gap: 8px;
  --indent: 8px;
  --radius: 6px;
  --size: 32px;

  align-items: center;
  background-color: var(--background-color);
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  gap: var(--gap);
  min-height: var(--size);
  outline: 0;
  padding: var(--indent);
  text-align: left;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  transition-timing-function: ease-in-out;

  &[data-justify],
  [data-justify] & {
    justify-content: space-between;

    & > :not([data-icon]) {
      flex: 1;
    }
  }

  .primary,
  .secondary {
    transition: color 0.2s;
  }
  .primary {
    color: var(--color, inherit);

    & + .secondary {
      margin-top: 2px;
    }
  }
  .secondary {
    ${paragraph};
    color: var(--color, inherit);

    --color: ${colors.ELEMENT_TERTIARY};
  }

  &:is(:active, [data-pressed]) {
    --background-color: ${colors.ELEMENT_SECONDARY};
    --color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:focus, :hover, [data-hover]) {
    --background-color: ${colors.ELEMENT_SECONDARY};
  }
  &:is([data-active]) {
    --color: ${colors.ELEMENT_PRIMARY};
  }

  &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]) {
    .primary {
      --color: ${colors.ELEMENT_PRIMARY};
    }
    .secondary {
      --color: ${colors.TEXT_PRIMARY};
    }
  }

  [data-theme='dark'] & {
    --color: ${colors.WHITE};

    &:is(:active, [data-pressed]) {
      --background-color: ${colors.DARK_ELEMENT_FOCUS};
    }
    &:is(:focus, :hover, [data-hover]) {
      --background-color: ${colors.DARK_ELEMENT_ACTIVE};
    }

    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]) {
      .primary,
      .secondary {
        --color: ${colors.WHITE};
      }
    }
  }
`;
