import { Meta, Story } from '@storybook/react';
import React from 'react';

import { mapArgTypes } from '../../stories';
import { Idle as Component, IdleProps } from '../idle';

export default {
  title: 'Components/Indicator/Idle',
  component: Component,
  decorators: [],
  argTypes: {
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'idle' },
      },
    },
    ...mapArgTypes(['color'], {
      control: { type: 'color' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['gap'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['range', 'size'], {
      control: { type: 'range', min: 1, max: 50, step: 1 },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['delay', 'duration'], {
      control: { type: 'range', min: 0, max: 2000, step: 1 },
      table: { category: 'Timing' },
    }),
  },
} as Meta;

interface StoryProps extends Omit<IdleProps, 'range' | 'size'> {
  range?: number | string;
  size?: number | string;
}

const Template: Story<StoryProps> = ({ range, size, ...args }) => {
  return <Component range={`${range}px`} size={`${size}px`} {...args} />;
};

const params = {};

export const Idle = Template.bind({});
Idle.args = {
  color: '#ff0000',
  range: 6,
  size: 5,
};
Idle.parameters = { ...params };
