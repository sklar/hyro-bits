import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { mapArgTypes } from '../../stories';
import { Legend } from '../../stories/legend';
import { Button } from '../button';
import { Flex } from '../flex';
import { Grid } from '../grid';
import { Text } from '../text';
import { Toast as Component, ToastProps } from '../toast';

export default {
  title: 'Components/Toast',
  component: Component,
  decorators: [
    (Story) => (
      <Grid align="center" columns="repeat(4, 320px)" gap="1em" justify="start">
        <Legend>notice</Legend>
        <Legend>success</Legend>
        <Legend>warning</Legend>
        <Legend>danger</Legend>
        <Story />
      </Grid>
    ),
    withDesign,
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=33%3A222',
    },
  },
  args: {
    title: 'Napoleon Solo',
    text: 'In the 1960s CIA agent successfully helps Gaby Teller defect to West Germany',
  },
  argTypes: {
    ...mapArgTypes(['title', 'text'], {
      control: { type: 'text' },
    }),
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        // eslint-disable-next-line no-template-curly-in-string
        defaultValue: { summary: 'toast-${theme}' },
      },
    },
    ...mapArgTypes(['variant', 'theme'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['icon', 'closeable', 'button'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['size'], {
      table: { category: 'Modifiers' },
    }),

    ...mapArgTypes(['onClick'], {
      control: { disable: true },
      table: { category: 'Events' },
    }),
  },
} as Meta;

const Template: Story<ToastProps> = (args) => (
  <>
    <Component {...args} theme="notice" />
    <Component {...args} theme="success" />
    <Component {...args} theme="warning" />
    <Component {...args} theme="danger" />
  </>
);

const TemplateOverview: Story<ToastProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} text="Would you like some toast?" title={undefined} />
    <Template {...args} text="Waffle? Pancake?" title="Toast!" />
    <Template
      {...args}
      children={
        <Flex block align="center" gap="16px" justify="space-between" style={{ width: '100%' }}>
          <Text style={{ whiteSpace: 'nowrap' }}>Wanna some</Text>
          <Flex gap="8px">
            <Button text="Toast" size="sm" />
            <Button text="Snackbar" size="sm" />
          </Flex>
        </Flex>
      }
    />
  </>
);

export const Toast = TemplateOverview.bind({});
