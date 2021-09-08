import { Global } from '@emotion/react';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, Legend, mapArgTypes } from '../../stories';
import { Grid, Switch as Component, SwitchProps } from '../index';

export default {
  title: 'Components/Form/Switch',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Grid align="center" columns="repeat(4, 1fr)" gap="1em" justify="start">
          <Legend>default</Legend>
          <Legend>hover</Legend>
          <Legend>checked</Legend>
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
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A4019',
    },
  },
  args: {
    defaultChecked: false,
    size: 16,
  },
  argTypes: {
    ...mapArgTypes(['as'], {
      control: { type: 'text' },
      table: {
        type: { summary: 'ElementType<any>' },
      },
    }),
    ...mapArgTypes(['label'], { control: { type: 'text' } }),
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        // eslint-disable-next-line no-template-curly-in-string
        defaultValue: { summary: 'switch-checkbox-${kebabCase(label)}' },
      },
    },
    ...mapArgTypes(['appearance', 'theme', 'type'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['size'], {
      control: { type: 'range', min: 16, max: 150, step: 1 },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['defaultChecked', 'disabled'], { table: { category: 'States' } }),
  },
} as Meta;

interface StoryProps extends SwitchProps {
  defaultChecked?: boolean;
  size?: number;
}

const Template: Story<StoryProps> = ({ size, ...args }) => (
  <>
    <Component style={{ ['--switch-size' as string]: `${size}px` }} {...args} />
    <Component style={{ ['--switch-size' as string]: `${size}px` }} {...args} data-hover />
    <Component style={{ ['--switch-size' as string]: `${size}px` }} {...args} defaultChecked />
    <Component style={{ ['--switch-size' as string]: `${size}px` }} {...args} disabled />
  </>
);

const TemplateCheckbox: Story<StoryProps> = (args) => <Template {...args} />;

const TemplateRadio: Story<StoryProps> = (args) => <Template {...args} appearance="radio" />;

const TemplateToggle: Story<StoryProps> = (args) => <Template {...args} appearance="toggle" />;

const TemplateOverview: Story<StoryProps> = (args) => (
  <>
    <TemplateCheckbox {...args} />
    <TemplateRadio {...args} />
    <TemplateToggle {...args} />
    <TemplateCheckbox label="Checkbox" {...args} />
    <TemplateRadio label="Radio" {...args} />
    <TemplateToggle label="Toggle" {...args} />
  </>
);

export const Overview = TemplateOverview.bind({});
Overview.args = {};

export const Checkbox = TemplateCheckbox.bind({});
Checkbox.storyName = 'Checkbox';
Checkbox.args = {
  appearance: 'checkbox',
};

export const Radio = TemplateRadio.bind({});
Radio.args = {
  appearance: 'radio',
};

export const Toggle = TemplateToggle.bind({});
Toggle.args = {
  appearance: 'toggle',
};
