import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

import { base, colors, h2 } from '../theme';
import { ThemeType } from '../utils/types';
import { Button } from './Button';
import { Icon, IconNameType } from './Icon';
import { Text } from './Text';

export type ToastTheme = Exclude<ThemeType, 'dark'>;

export type ToastVariant = 'snackbar' | 'toast';

const iconName = (theme: ToastTheme) => {
  const names = {
    danger: 'TimesCircle',
    notice: 'MapMarkerInfo',
    success: 'ThumbsUp',
    warning: 'ExclamationTriangle',
  };
  return names[theme] as IconNameType;
};

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text
   */
  text?: string;
  /**
   * Title
   */
  title?: string;

  /**
   * Icon
   */
  icon?: boolean;
  /**
   * Close button
   */
  button?: boolean;
  /**
   * Closeable on click
   */
  closeable?: boolean;

  /**
   * Variant
   */
  variant?: ToastVariant;
  /**
   * Size
   */
  size?: string;
  /**
   * Theme
   */
  theme?: ToastTheme;

  /**
   * Event: Click
   */
  onClick?: () => void;
}

/**
 * Toast
 */
export const Toast: React.FC<ToastProps> = ({
  button = false,
  children,
  closeable = false,
  icon = true,
  onClick,
  size,
  style,
  text,
  theme = 'notice',
  title,
  variant = 'toast',
  ...props
}): JSX.Element => {
  return (
    <Container
      {...props}
      data-clickable={closeable || null}
      data-theme={theme || null}
      data-variant={variant || null}
      onClick={closeable && onClick ? onClick : undefined}
      style={{ ...style, ['--toast-size' as string]: size }}
    >
      {icon && <Icon name={iconName(theme)} size="md" data-toast="icon" />}
      {children ? (
        children
      ) : (
        <Body>
          {title && <Title>{title}</Title>}
          <Text clamp={title ? 2 : 3}>{text}</Text>
        </Body>
      )}
      {button && (
        <Button
          icon={<Icon name="TimesCircle" />}
          round
          variant="tertiary"
          tabIndex={-1}
          data-toast="button"
          onClick={!closeable && onClick ? onClick : undefined}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  ${base};

  --font-size: 14px;
  --font-weight: 600;
  --line-height: calc(19 / 14);

  --toast-background-color: ;
  --toast-box-shadow: ;
  --toast-color: ;
  --toast-color-accent: ;
  --toast-gap: 16px;
  --toast-indent: 8px;
  --toast-radius: 6px;
  --toast-size: auto;

  align-items: center;
  background-color: var(--toast-background-color);
  border-radius: var(--toast-radius);
  box-shadow: var(--toast-box-shadow);
  color: var(--toast-color);
  display: inline-flex;
  gap: var(--toast-gap);
  justify-content: space-between;
  max-width: min(100%, 480px);
  min-height: 48px;
  min-width: 240px;
  width: var(--toast-size);
  padding: calc(3 / 2 * var(--toast-indent)) calc(2 * var(--toast-indent));
  user-select: none;

  [data-toast='button'] {
    mix-blend-mode: multiply;
    opacity: 0.3;
    margin-left: calc(-0.5 * var(--toast-gap));
    transition: opacity 0.2s;

    &:is(*, #chucknorris) {
      --button-background-color: ${colors.TRANSPARENT};
      --button-border-color: ${colors.TRANSPARENT};
    }
    &:is(:focus, :hover) {
      opacity: 0.8;
    }
  }

  &[data-theme='notice'] {
    --toast-color-accent: ${colors.NOTICE};
  }
  &[data-theme='success'] {
    --toast-color-accent: ${colors.SUCCESS};
  }
  &[data-theme='warning'] {
    --toast-color-accent: ${colors.WARNING};
  }
  &[data-theme='danger'] {
    --toast-color-accent: ${colors.DANGER};
  }

  &[data-variant='toast'] {
    --toast-background-color: var(--toast-color-accent);
    --toast-box-shadow: 0 3px 29px rgba(0, 0, 0, 0.1);
    --toast-color: ${colors.WHITE};
  }

  &[data-variant='snackbar'] {
    --toast-background-color: ${colors.WHITE};
    --toast-box-shadow: 0 3px 9px #cbcedc;

    [data-toast='icon'] {
      color: var(--toast-color-accent);
    }
  }

  &[data-clickable] {
    cursor: pointer;
  }
`;

const Body = styled.div`
  flex: 1;
`;

const Title = styled.h6`
  ${h2};

  color: inherit;
  white-space: nowrap;
`;
