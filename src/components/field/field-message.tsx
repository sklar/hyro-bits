/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { ThemeType } from '../../types';
import { Flex, FlexProps } from '../flex';
import { Icon, IconNameType } from '../icon';
import { message } from './field.styles';

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
    <Flex css={message} data-theme={theme || null} gap="8px" {...qa} {...props}>
      {theme && <Icon name={iconName(theme)} />}
      {children}
    </Flex>
  );
};
