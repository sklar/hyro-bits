import { Global } from '@emotion/react';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, Legend, mapArgTypes } from '../../stories';
import { Button, Grid, Icon, Input as Component, InputProps } from '../index';

export default {
  title: 'Components/Form/Input',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Grid align="center" columns="repeat(5, 1fr)" gap="1em" justify="start">
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
    affix: ['', ''],
    placeholder: 'Hold my 🍺',
  },
  argTypes: {
    ...mapArgTypes(['theme'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['as'], {
      control: { type: 'text' },
      table: {
        type: { summary: 'ElementType<any>' },
      },
    }),
    ...mapArgTypes(['placeholder', 'defaultValue'], { control: { type: 'text' } }),
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
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
    ...mapArgTypes(['affix'], {
      table: {
        category: 'Modifiers',
        type: { summary: 'string | Array<string | undefined> | ReactElement | ReactElement[]' },
      },
    }),
    ...mapArgTypes(['leader', 'trailer'], {
      control: { disable: true },
      table: { category: 'Modifiers', type: { summary: 'ReactElement' } },
    }),
    ...mapArgTypes(['active', 'busy', 'disabled', 'invalid', 'readonly'], {
      table: { category: 'States' },
    }),
  },
} as Meta;

const Template: Story<InputProps> = (args) => (
  <>
    <Component {...args} />
    <Component {...args} data-hover />
    <Component {...args} data-active />
    <Component {...args} busy />
    <Component {...args} disabled />
  </>
);

const TemplateOverview: Story<InputProps> = (args) => (
  <>
    <Template {...args} />
    <Template
      {...args}
      affix={[<Icon name="AxisX" size="xs" />, <Icon name="AxisY" size="xs" />]}
      defaultValue="And here comes a value"
    />
    <Template leader={<Icon name="Search" />} trailer={<Icon name="ThumbsUp" />} {...args} />
    <Template
      {...args}
      leader={<Icon name="Search" />}
      trailer={<Button text="Submit" synthetic />}
    />
    <Template
      {...args}
      defaultValue="Input anatomy"
      affix={['Prefix', 'Suffix']}
      leader={
        <>
          <Icon name="Search" />
          <Icon name="Filter" />
        </>
      }
      trailer={
        <>
          <Icon name="TimesCircle" />
          <Icon name="Backspace" size="lg" />
        </>
      }
    />
  </>
);

export const Input = TemplateOverview.bind({});
