import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from '@emotion/styled';

import { mapArgTypes } from 'utils/stories';

import { Grid as Component, GridProps } from './Grid';

export default {
  title: 'Components/Layout/Grid',
  component: Component,
  decorators: [],
  argTypes: {
    children: {
      control: { type: null },
    },
    ...mapArgTypes(['align', 'justify'], {
      control: { type: 'select' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['block', 'gap'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['columns', 'min', 'max', 'sizing'], {
      table: { category: 'Columns' },
    }),
    ...mapArgTypes(['count'], {
      control: { type: 'range', min: 1, max: 30, step: 1 },
      table: { category: 'Story' },
    }),
  },
} as Meta;

interface StoryProps extends GridProps {
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

export const Grid = Template.bind({});
Grid.args = {
  block: true,
  count: 5,
  gap: '1rem',
};
Grid.parameters = { ...params };

const Item = styled.span`
  background-color: GOLD;
  padding: 1rem;
`;
