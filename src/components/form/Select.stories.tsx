import { Global } from '@emotion/react';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, Legend, mapArgTypes } from '../../stories';
import { Grid, Icon, Select as Component, SelectProps } from '../index';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'berries', label: 'Berries' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'orange', label: 'Orange' },
  { value: 'pistachio', label: 'Pistachio' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const optionsGrouped = [
  {
    label: "Monty Python's Flying Circus",
    options: [
      { value: 'Chapman', label: 'Chapman' },
      { value: 'Cleese', label: 'Cleese' },
      { value: 'Gilliam', label: 'Gilliam' },
      { value: 'Idle', label: 'Idle' },
      { value: 'Jones', label: 'Jones' },
      { value: 'Palin', label: 'Palin' },
    ],
  },
  {
    label: 'Rupan Sansei',
    options: [
      { value: 'Lupin', label: 'Arsène Lupin' },
      { value: 'Jigen', label: 'Daisuke Jigen' },
      { value: 'Fujiko', label: 'Fujiko Mine' },
      { value: 'Goemon', label: 'Goemon Ishikawa' },
      { value: 'Zenigata', label: 'Koichi Zenigata' },
    ],
  },
];

export default {
  title: 'Components/Form/Select',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Grid align="center" block columns="repeat(5, 1fr)" gap="1em">
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=766%3A0',
    },
  },
  args: {
    maxMenuHeight: 150,
    options: options,
    placeholder: 'Hold my 🍺',
  },
  argTypes: {
    ...mapArgTypes(
      ['data-active', 'data-hover', 'data-invalid', 'maxMenuHeight', 'options', 'style'],
      {
        control: { disable: true },
        table: { disable: true },
      }
    ),
    ...mapArgTypes(['placeholder'], { control: { type: 'text' } }),
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'select' },
      },
    },
    ...mapArgTypes(['size'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['length'], {
      table: {
        category: 'Modifiers',
      },
    }),
    ...mapArgTypes(['leader'], {
      control: { disable: true },
      table: { category: 'Modifiers', type: { summary: 'ReactElement' } },
    }),
    ...mapArgTypes(['active', 'busy', 'disabled', 'invalid', 'readonly'], {
      table: { category: 'States' },
    }),
  },
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <>
    <Component {...args} />
    <Component {...args} data-hover />
    <Component {...args} active />
    <Component {...args} busy />
    <Component {...args} disabled />
  </>
);

const TemplateOverview: Story<SelectProps> = (args) => (
  <>
    <Template {...args} isSearchable={false} />
    <Template {...args} isMulti placeholder="Hold my 🍺🍺🍺" />
    <Template {...args} leader={<Icon name="Clock" />} defaultValue={options[0]} />
    <Template
      {...args}
      isSearchable={false}
      options={optionsGrouped}
      placeholder="Hold these 🍻🍻🍻"
    />
  </>
);

export const Select = TemplateOverview.bind({});
