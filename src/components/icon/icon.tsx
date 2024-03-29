import styled from '@emotion/styled';
import { kebabCase } from 'case-anything';
import React, { forwardRef, HTMLAttributes, SVGProps, useEffect, useState } from 'react';

import { Size } from '../../constants';
import * as BOLD from '../../icons/bold';
import * as MINI from '../../icons/mini';
import { SizeType } from '../../types';
import { icon } from './icon.styles';

type BoldKey = keyof typeof BOLD;
const isBold = (name: string): name is BoldKey => name in BOLD;

type MiniKey = keyof typeof MINI;
const isMini = (name: string): name is MiniKey => name in MINI;

export type IconNameType = BoldKey | MiniKey;

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * Name
   */
  name: IconNameType;
  /**
   * Size
   */
  size?: SizeType;
}

/**
 * Icon wrapper.
 */
export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ name, size = 'sm', ...props }, ref): JSX.Element => {
    const [Component, setComponent] = useState<React.FC<SVGProps<SVGSVGElement>>>();
    const qa = {
      'data-qa': `icon-${name && kebabCase(name)}`,
    };

    useEffect(() => {
      if (size === Size.XSMALL && isMini(name)) {
        setComponent(MINI[name]);
      } else if (isBold(name)) {
        setComponent(BOLD[name]);
      } else {
        console.error(`${name} icon not found!`);
      }
    }, [name, size]);

    return (
      <Container data-icon={name} data-size={size} ref={ref} {...qa} {...props}>
        {Component}
      </Container>
    );
  }
);

const Container = styled.span`
  ${icon};
`;
