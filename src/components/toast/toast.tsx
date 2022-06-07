import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

import { ThemeType } from '../../types';
import { Button } from '../button';
import { Icon, IconNameType } from '../icon';
import { Text } from '../text';
import { body, title, toast } from './toast.styles';

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
  const qa = {
    'data-qa': `toast-${theme}`,
  };
  return (
    <Container
      {...qa}
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
          {title && <Title data-qa="toast-title">{title}</Title>}
          <Text clamp={title ? 2 : 3} data-qa="toast-text">
            {text}
          </Text>
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
  ${toast};
`;

const Body = styled.div`
  ${body};
`;

const Title = styled.h6`
  ${title};
`;
