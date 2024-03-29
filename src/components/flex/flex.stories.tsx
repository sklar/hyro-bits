import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { mapArgTypes } from '../../stories';
import { Flex as Component, FlexProps } from './flex';

export default {
  title: 'Components/Layout/Flex',
  component: Component,
  decorators: [],
  argTypes: {
    children: {
      control: { disable: true },
      table: { disable: true },
    },
    ...mapArgTypes(['as'], {
      control: { type: 'text' },
      table: {
        type: { summary: 'ElementType<any>' },
      },
    }),
    ...mapArgTypes(['align', 'justify'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['direction'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['gap', 'block', 'wrap'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['count'], {
      control: { type: 'range', min: 1, max: 30, step: 1 },
      table: { category: 'Story' },
    }),
  },
} as Meta;

interface StoryProps extends FlexProps {
  count: number;
}

const Template: Story<StoryProps> = ({ count, ...args }) => {
  return (
    <>
      <Component {...args}>
        {Array(count)
          .fill(1)
          .map((_, i) => (
            <Item key={i}>Cell #{i + 1}</Item>
          ))}
      </Component>
    </>
  );
};

const params = {};

export const Flex = Template.bind({});
Flex.args = {
  block: true,
  count: 5,
  gap: '1rem',
  wrap: true,
};
Flex.parameters = { ...params };

const Item = styled.span`
  background-color: GOLD;
  padding: 1rem;
`;
