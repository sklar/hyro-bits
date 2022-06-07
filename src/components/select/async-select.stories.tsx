import { Global } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, Legend } from '../../stories';
import { Grid } from '../grid';
import { Icon } from '../icon';
import { AsyncSelect as Component, AsyncSelectProps } from './async-select';
import { argTypes, design, Option, OptionGroup, options, optionsGrouped } from './story';

const filterOptions = (inputValue: string) => {
  return options.filter((o) => o.label.toLowerCase().includes(inputValue.toLowerCase()));
};
const promiseOptions = (inputValue: string) =>
  new Promise<Option[]>((resolve) => {
    setTimeout(() => {
      resolve(filterOptions(inputValue));
    }, 1 * 1000);
  });

const filterGroupedOptions = (inputValue: string) => {
  return optionsGrouped.filter((o) => o.label.toLowerCase().includes(inputValue.toLowerCase()));
};
const promiseOptionsGrouped = (inputValue: string) =>
  new Promise<OptionGroup[]>((resolve) => {
    setTimeout(() => {
      resolve(filterGroupedOptions(inputValue));
    }, 1 * 1000);
  });

export default {
  title: 'Components/Form/Select/AsyncSelect',
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
  },
  argTypes: argTypes,
} as Meta;

const Row: Story<AsyncSelectProps> = (args) => (
  <>
    <Component {...args} />
    <Component {...args} data-hover />
    <Component {...args} active />
    <Component {...args} busy />
    <Component {...args} disabled />
  </>
);

const AsyncSelectTemplate: Story<AsyncSelectProps> = (args) => (
  <>
    <Row
      {...args}
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
      placeholder="Hold promised 🍺"
    />
    <Row
      {...args}
      cacheOptions
      defaultOptions
      isMulti
      loadOptions={promiseOptions}
      placeholder="Hold promised 🍺🍺🍺"
    />
    <Row
      {...args}
      cacheOptions
      defaultOptions
      defaultValue={options[0]}
      leader={<Icon name="Clock" />}
      loadOptions={promiseOptions}
    />
    <Row
      {...args}
      cacheOptions
      defaultOptions
      loadOptions={promiseOptionsGrouped}
      placeholder="Hold promised 🍻🍻🍻"
    />
  </>
);

export const AsyncSelectStory = AsyncSelectTemplate.bind({});
AsyncSelectStory.storyName = 'AsyncSelect';
