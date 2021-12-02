import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { useSortableData } from '../../hooks/use-sortable-data';
import { Legend, mapArgTypes } from '../../stories';
import { Direction } from '../../utils/constants';
import { Grid } from '../index';
import { Order as Component, OrderProps } from './Order';

export default {
  title: 'Components/Indicator/Order',
  component: Component,
  decorators: [
    (Story) => (
      <Grid align="center" columns="repeat(3, 1fr)" gap="1em" justify="start">
        <Legend>none</Legend>
        <Legend>ascending</Legend>
        <Legend>descending</Legend>
        <Story />
      </Grid>
    ),
    withDesign,
  ],
  argTypes: {
    ...mapArgTypes(['direction', 'size'], {
      control: { type: 'inline-radio' },
    }),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A4585',
    },
  },
} as Meta;

const Template: Story<OrderProps> = (args) => {
  const { requestSort, sortConfig } = useSortableData([]);
  return (
    <>
      <div onClick={() => requestSort('one')}>
        <Component
          direction={sortConfig?.key === 'one' ? sortConfig?.direction : Direction.NONE}
          {...args}
        />
      </div>
      <div onClick={() => requestSort('two')}>
        <Component
          direction={sortConfig?.key === 'two' ? sortConfig?.direction : Direction.ASCENDING}
          {...args}
        />
      </div>
      <div onClick={() => requestSort('three')}>
        <Component
          direction={sortConfig?.key === 'three' ? sortConfig?.direction : Direction.DESCENDING}
          {...args}
        />
      </div>
    </>
  );
};

export const Order = Template.bind({});
Order.args = {
  size: 'xl',
};
