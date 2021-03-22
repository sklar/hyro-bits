import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from '@emotion/styled';

import { mapArgTypes } from '../../stories';

import { Flex as Component, FlexProps } from './Flex';

export default {
  title: 'Components/Layout/Flex',
  component: Component,
  decorators: [],
  argTypes: {
    children: {
      control: { type: null },
    },
    ...mapArgTypes(['align', 'justify', 'direction', 'gap', 'block', 'wrap'], {
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
