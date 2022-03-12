import { Global } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, Legend } from '../../../stories';
import { Icon } from '../../Icon';
import { Grid } from '../../layout/Grid';
import { Select as Component, SelectProps } from './Select';
import { argTypes, design, options, optionsGrouped } from './story';

export default {
  title: 'Components/Form/Select/Select',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Grid block columns="repeat(5, 1fr)" gap="1em">
          <Legend>default</Legend>
          <Legend>hover</Legend>
          <Legend>active</Legend>
          <Legend>busy</Legend>
          <Legend>disabled</Legend>
          <Story />
        </Grid>
      </>
    ),
    withDesign,
  ],
  parameters: {
    design: design,
  },
  args: {
    maxMenuHeight: 150,
    options: options,
    placeholder: 'Hold my 🍺',
  },
  argTypes: argTypes,
} as Meta;

const Row: Story<SelectProps> = (args) => (
  <>
    <Component {...args} />
    <Component {...args} data-hover />
    <Component {...args} active />
    <Component {...args} busy />
    <Component {...args} disabled />
  </>
);

const SelectTemplate: Story<SelectProps> = (args) => (
  <>
    <Row {...args} isSearchable={false} />
    <Row {...args} isMulti placeholder="Hold my 🍺🍺🍺" />
    <Row {...args} leader={<Icon name="Clock" />} defaultValue={options[0]} />
    <Row {...args} isSearchable={false} options={optionsGrouped} placeholder="Hold these 🍻🍻🍻" />
  </>
);

export const SelectStory = SelectTemplate.bind({});
SelectStory.storyName = 'Select';
