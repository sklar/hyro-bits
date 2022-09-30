import { Meta, Story } from '@storybook/react';
import React from 'react';

import { mapArgTypes } from '../../stories';
import { Spinner as Component, SpinnerProps } from '../spinner';

export default {
  title: 'Components/Indicator/Spinner',
  component: Component,
  decorators: [],
  argTypes: {
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'spinner' },
      },
    },
    ...mapArgTypes(['color'], {
      control: { type: 'color' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['size'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['duration'], {
      control: { type: 'range', min: 0, max: 3000, step: 100 },
      table: { category: 'Timing' },
    }),
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => {
  return <Component {...args} />;
};

const params = {};

export const Spinner = Template.bind({});
Spinner.args = {
  color: '#ff0000',
};
Spinner.parameters = { ...params };
