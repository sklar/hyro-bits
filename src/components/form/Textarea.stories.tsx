import { Global } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, Legend, mapArgTypes } from '../../stories';
import { Grid, Textarea as Component, TextareaProps } from '../index';

export default {
  title: 'Components/Form/Textarea',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Grid align="center" columns="repeat(6, 1fr)" gap="1em" justify="start">
          <Legend>default</Legend>
          <Legend>hover</Legend>
          <Legend>active</Legend>
          <Legend>busy</Legend>
          <Legend>disabled</Legend>
          <Legend>invalid</Legend>
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
    placeholder: 'Hold my 🍺',
  },
  argTypes: {
    ...mapArgTypes(['data-active', 'data-hover', 'data-invalid', 'theme'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['as'], {
      control: { type: 'text' },
      table: {
        type: { summary: 'ElementType<any>' },
      },
    }),
    ...mapArgTypes(['placeholder'], { control: { type: 'text' } }),
    ...mapArgTypes(['length'], {
      table: {
        category: 'Modifiers',
      },
    }),
    ...mapArgTypes(['resize'], {
      control: { type: 'inline-radio' },
      table: {
        category: 'Modifiers',
      },
    }),
    ...mapArgTypes(['active', 'busy', 'disabled', 'invalid', 'readonly'], {
      table: { category: 'States' },
    }),
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => (
  <>
    <Component {...args} />
    <Component {...args} data-hover />
    <Component {...args} data-active />
    <Component {...args} busy />
    <Component {...args} disabled />
    <Component {...args} invalid />
  </>
);

const TemplateOverview: Story<TextareaProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} rows={1} />
    <Template
      {...args}
      rows={4}
      defaultValue="In the 1960s with the Cold War in play, CIA agent Napoleon Solo successfully helps Gaby Teller
      defect to West Germany despite the intimidating opposition of KGB agent Illya Kuryakin. Later,
      all three unexpectedly find themselves working together in a joint mission to stop a private
      criminal organization from using Gaby's father's scientific expertise to construct their own
      nuclear bomb. Through clenched teeth and stylish poise, all three must find a way to cooperate
      for the sake of world peace, even as they each pursue their own agendas."
    />
  </>
);

export const Textarea = TemplateOverview.bind({});
