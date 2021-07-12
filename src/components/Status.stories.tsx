import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Legend } from '../stories/Legend';
import { Grid, Icon, Status, StatusProps } from './index';
import { mapArgTypes } from '../stories';

export default {
  title: 'Components/Status',
  component: Status,
  decorators: [
    (Story) => (
      <Grid align="center" columns="repeat(5, 10ch)" gap="1em" justify="start">
        <Legend>default</Legend>
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
  argTypes: {
    ...mapArgTypes(['icon'], {
      control: { disable: true },
      table: { category: 'Modifiers', type: { summary: 'ReactElement' } },
    }),
    ...mapArgTypes(['theme'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
  },
} as Meta;

const Template: Story<StatusProps> = (args) => (
  <>
    <Status {...args} />
    <Status {...args} theme="notice" />
    <Status {...args} theme="success" />
    <Status {...args} theme="warning" />
    <Status {...args} theme="danger" />
  </>
);

const TemplateOverview: Story<StatusProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} text="Label" />
    <Template {...args} text="Label" icon={<Icon name="Flash" size="xs" />} />
  </>
);

export const Overview = TemplateOverview.bind({});
Overview.args = {};

export const Beacon = Template.bind({});
Beacon.args = {
  text: undefined,
};

export const Label = Template.bind({});
Label.args = {
  text: 'Label',
};

export const LabelWithIcon = Template.bind({});
LabelWithIcon.args = {
  icon: <Icon name="Flash" size="xs" />,
  text: 'Label',
};
LabelWithIcon.storyName = 'Label w/ icon';
