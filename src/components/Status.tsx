import React, { HTMLAttributes, ReactElement } from 'react';
import styled from '@emotion/styled';

import { base } from '../theme/typography';
import { Theme } from '../utils/types';
import { Text } from './Text';
import { colors } from '../theme';

export interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Icon
   */
  icon?: ReactElement;
  /**
   * Label
   */
  text?: string;
  /**
   * Theme
   */
  theme?: Exclude<Theme, 'dark'>;
}

/**
 * Status
 */
export const Status: React.FC<StatusProps> = ({
  children,
  icon,
  text,
  theme,
  ...props
}): JSX.Element => {
  const isBeacon = !(text || children);
  return (
    <Container data-beacon={isBeacon || null} data-theme={theme || null} {...props}>
      {icon}
      <Text truncate>{text ? text : children}</Text>
    </Container>
  );
};

const Container = styled.span`
  ${base};

  --status-background-color: #e7ebf2;
  --status-color: #6a758d;
  --status-color-primary: #bbc7d8;
  --status-color-secondary: hsla(211, 36%, 82%, 0.4);
  --status-font-size: 12px;
  --status-font-weight: 600;
  --status-gap: 4px;
  --status-indent: 8px;
  --status-line-height: var(--status-size);
  --status-radius: 6px;
  --status-size: 24px;

  align-items: center;
  background-color: var(--status-background-color);
  border-radius: var(--status-radius);
  color: var(--status-color);
  display: inline-flex;
  font-size: var(--status-font-size);
  font-weight: var(--status-font-weight);
  gap: var(--status-gap);
  height: var(--status-size);
  padding: 0 var(--status-indent);
  user-select: none;
  white-space: nowrap;

  &[data-theme='notice'] {
    --status-background-color: #d4e5ff;
    --status-color: ${colors.PRIMARY};
    --status-color-primary: ${colors.NOTICE};
    --status-color-secondary: hsla(222, 100%, 56%, 0.4);
  }
  &[data-theme='success'] {
    --status-background-color: #d7efdc;
    --status-color: #058a40;
    --status-color-primary: ${colors.SUCCESS};
    --status-color-secondary: hsla(132, 66%, 70%, 0.4);
  }
  &[data-theme='warning'] {
    --status-background-color: #ffe7b8;
    --status-color: #b17400;
    --status-color-primary: ${colors.WARNING};
    --status-color-secondary: hsla(44, 100%, 52%, 0.4);
  }
  &[data-theme='danger'] {
    --status-background-color: #ffaab6;
    --status-color: #c1132d;
    --status-color-primary: ${colors.DANGER};
    --status-color-secondary: hsla(351, 100%, 62%, 0.4);
  }

  &[data-beacon] {
    --status-background-color: transparent;
    --status-indent: 0;
    --status-radius: 50%;
    --status-size: 16px;

    aspect-ratio: 1;
    display: inline-grid;
    flex-grow: 0;
    place-items: center;
    position: relative;

    &::after,
    &::before {
      aspect-ratio: inherit;
      border-radius: inherit;
      content: '';
      display: block;
      position: absolute;
    }
    &::after {
      background: var(--status-color-primary);
      height: calc(var(--status-size) / 8 * 3);
    }
    &::before {
      background: var(--status-color-secondary);
      height: calc(var(--status-size) / 8 * 5);
    }
  }
`;
