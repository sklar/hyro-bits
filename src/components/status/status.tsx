import styled from '@emotion/styled';
import { kebabCase } from 'case-anything';
import React, { HTMLAttributes, ReactElement } from 'react';

import { ThemeType } from '../../types';
import { Text } from '../text';
import { status as statusStyle } from './status.styles';

export type StatusThemeType = Exclude<ThemeType, 'dark'>;

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
  theme?: StatusThemeType;
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
  const qa = {
    // prettier-ignore
    'data-qa': [
      'status',
      ...(theme ? [theme] : []),
      ...(text ? [`${kebabCase(text)}`] : [])
    ].join('-'),
  };
  return (
    <Container data-beacon={isBeacon || null} data-theme={theme || null} {...qa} {...props}>
      {icon}
      <Text truncate>{text ? text : children}</Text>
    </Container>
  );
};

const Container = styled.span`
  ${statusStyle};
`;
