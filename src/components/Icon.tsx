import React, { HTMLAttributes, SVGProps, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { SizeType } from '../utils/types';

const paths = {
  xs: 'mini',
  sm: 'bold',
  md: 'bold',
  lg: 'bold',
  xl: 'bold',
};

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * Name
   */
  name: string;
  /**
   * Size.
   */
  size?: SizeType;
}

/**
 * Icon wrapper.
 */
export const Icon: React.VFC<IconProps> = ({ name, size = 'sm', ...props }): JSX.Element | null => {
  const [Component, setComponent] = useState<React.FC<SVGProps<SVGSVGElement>>>();

  useEffect(() => {
    import(`../icons/${paths[size]}/${name}`)
      .then((c) => {
        setComponent(c.default);
      })
      .catch((e) => {
        console.error(`${name} icon not found!`);
      });
  }, [name, size]);

  if (!!Component) {
    return (
      <Container data-icon={name} data-size={size} {...props}>
        {Component}
      </Container>
    );
  } else {
    return null;
  }
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
