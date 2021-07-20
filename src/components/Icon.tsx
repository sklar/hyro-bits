import styled from '@emotion/styled';
import React, { HTMLAttributes, SVGProps, useEffect, useState } from 'react';

import * as BOLD from '../icons/bold';
import * as MINI from '../icons/mini';
import { Size } from '../utils/constants';
import { SizeType } from '../utils/types';

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
   * Size.
   */
  size?: SizeType;
}

/**
 * Icon wrapper.
 */
export const Icon: React.VFC<IconProps> = ({ name, size = 'sm', ...props }): JSX.Element => {
  const [Component, setComponent] = useState<React.FC<SVGProps<SVGSVGElement>>>();

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
    <Container data-icon={name} data-size={size} {...props}>
      {Component}
    </Container>
  );
};

const Container = styled.span`
  --icon-size: ;

  display: inline-block;
  flex-shrink: 0;
  height: var(--icon-size);
  width: var(--icon-size);

  svg {
    display: block;
  }

  &[data-size='xs'],
  &[data-size='sm'] {
    --icon-size: 16px;
  }
  &[data-size='md'] {
    --icon-size: 20px;
  }
  &[data-size='lg'] {
    --icon-size: 24px;
  }
  &[data-size='xl'] {
    --icon-size: 32px;
  }
`;
