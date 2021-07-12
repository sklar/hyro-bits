import { Global } from '@emotion/react';
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useCallback, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, Legend, mapArgTypes } from '../../stories';
import { Grid, Icon, NumberInput as Component, NumberInputProps } from '../index';

export default {
  title: 'Components/Form/Number',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Grid align="center" columns="repeat(5, 1fr)" gap="1em">
          <Legend>default</Legend>
          <Legend>hover</Legend>
          <Legend>active</Legend>
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
    affix: ['', ''],
    as: 'label',
    max: 50,
    min: -50,
    size: 'md',
  },
  argTypes: {
    ...mapArgTypes(['busy', 'theme'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['as'], {
      control: { type: 'text' },
      table: {
        type: { summary: 'ElementType<any>' },
      },
    }),
    ...mapArgTypes(['min', 'max'], { control: { type: 'number' } }),
    ...mapArgTypes(['value'], {
      control: { disable: true },
    }),
    ...mapArgTypes(['size'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['length'], {
      control: { type: 'text' },
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
    ...mapArgTypes(['controls'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['active', 'disabled', 'invalid', 'readonly'], {
      table: { category: 'States' },
    }),
    ...mapArgTypes(['onChangeValue'], {
      control: { disable: true },
      table: { category: 'Events' },
    }),
  },
} as Meta;

const Template: Story<NumberInputProps> = (args) => {
  const [value, setValue] = useState<number>(0);
  const handleChange = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <>
      <Component {...args} value={value} onChangeValue={handleChange} />
      <Component {...args} value={value} onChangeValue={handleChange} data-hover />
      <Component {...args} value={value} onChangeValue={handleChange} data-active />
      <Component {...args} value={value} onChangeValue={handleChange} disabled />
      <Component {...args} value={60} onChangeValue={handleChange} />
    </>
  );
};

const TemplateOverview: Story<NumberInputProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} affix={[<Icon name="AxisX" size="xs" />]} controls />
    <Template {...args} format={(value) => `${value}%`} />
    <Template {...args} affix={['😵‍💫']} controls format={(value) => `${value}🍺`} />
  </>
);

export const Number = TemplateOverview.bind({});
