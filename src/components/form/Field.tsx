/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

import { base, colors, label } from '../../theme';
import { ThemeType } from '../../utils';
import { Icon, IconNameType } from '../Icon';
import { Flex, FlexProps } from '../layout';

/**
 * Field label
 */
export const FieldLabel: React.FC<FlexProps> = (props): JSX.Element => {
  const qa = {
    'data-qa': 'field-label',
  };
  return <Flex as="label" css={labelStyle} gap="4px" {...qa} {...props} />;
};

const labelStyle = css`
  ${label};

  margin-bottom: var(--field-indent);
`;

/**
 * Field text
 */
interface FieldTextProps extends HTMLAttributes<HTMLDivElement> {
  secondary?: boolean;
}

export const FieldText: React.FC<FieldTextProps> = ({ secondary, ...props }): JSX.Element => {
  const qa = {
    'data-qa': 'field-text',
  };
  return <FieldTextContainer data-secondary={secondary || null} {...qa} {...props} />;
};

const FieldTextContainer = styled.div`
  ${base};

  --font-size: 14px;
  --font-weight: 500;
  --letter-spacing: -0.01em;
  --line-height: calc(18 / 14);

  &[data-secondary] {
    --color: ${colors.TEXT_TERTIARY};
    --font-size: 13px;
    --line-height: calc(16 / 13);
  }
`;

/**
 * Field message
 */
type FieldMessageTheme = Exclude<ThemeType, 'dark' | 'warning'>;

const iconName = (theme: FieldMessageTheme) => {
  const names = {
    danger: 'TimesCircle',
    notice: 'MapMarkerInfo',
    success: 'ThumbsUp',
  };
  return names[theme] as IconNameType;
};

export interface FieldMessageProps extends FlexProps {
  theme?: FieldMessageTheme;
}

export const FieldMessage: React.FC<FieldMessageProps> = ({
  children,
  theme = 'danger',
  ...props
}): JSX.Element => {
  const qa = {
    'data-qa': `field-message-${theme}`,
  };
  return (
    <Flex css={messageStyle} data-theme={theme || null} gap="8px" {...qa} {...props}>
      {theme && <Icon name={iconName(theme)} />}
      {children}
    </Flex>
  );
};

const messageStyle = css`
  ${base};

  --font-size: 13px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 13);

  margin-top: var(--field-indent);

  &[data-theme='danger'] {
    color: ${colors.DANGER};
  }
  &[data-theme='notice'] {
    color: ${colors.NOTICE};
  }
  &[data-theme='success'] {
    color: ${colors.SUCCESS};
  }
`;

/**
 * Field
 */
export interface FieldProps extends FlexProps {
  /**
   * Compact
   */
  compact?: boolean;
}

export const Field: React.FC<FieldProps> = ({ compact, ...props }): JSX.Element => {
  const qa = {
    'data-qa': 'field',
  };
  return (
    <Flex
      block
      css={fieldStyle}
      data-compact={compact || null}
      direction="column"
      gap="8px"
      {...qa}
      {...props}
    />
  );
};

const fieldStyle = css`
  --field-indent: 0;

  flex: 1;

  &:not([data-compact]) {
    padding-block: 12px;
  }
`;
