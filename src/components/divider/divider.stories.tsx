import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Container as ContainerDraft, mapArgTypes } from '../../stories';
import { Divider as Component, DividerProps } from '../divider';

export default {
  title: 'Components/Layout/Divider',
  component: Component,
  decorators: [],
  argTypes: {
    ...mapArgTypes(['as'], {
      control: { type: 'text' },
      table: {
        type: { summary: 'ElementType<any>' },
      },
    }),
    ...mapArgTypes(['direction'], {
      control: { type: 'inline-radio' },
    }),
    ...mapArgTypes(['size'], {
      control: { type: 'range', min: 2, max: 30, step: 1 },
    }),
    ...mapArgTypes(['space'], {
      control: { type: 'range', min: 0, max: 200, step: 1 },
    }),
  },
} as Meta;

interface StoryProps extends Omit<DividerProps, 'size' | 'space'> {
  size?: number | string;
  space?: number | string;
}

const Template: Story<StoryProps> = ({ size, space, ...args }) => {
  return (
    <Container indent="16px" resize="both">
      <Component size={`${size}px`} space={`${space}px`} {...args} />
    </Container>
  );
};

export const Divider = Template.bind({});
Divider.args = {
  as: 'div',
  space: 0,
  size: 2,
};

const Container = styled(ContainerDraft)`
  display: inline-grid;
  min-height: 180px;
  width: min(180px, 100%);
`;
