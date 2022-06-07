/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Global, jsx } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import React, { Fragment, useCallback, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, Legend, mapArgTypes } from '../../stories';
import { Flex } from '../flex';
import { Grid } from '../grid';
import { Icon } from '../icon';
import {
  NumberInput as Component,
  NumberInputProps,
  NumberInputStepperContainerProps,
  NumberInputStepperProps,
} from '../number-input';

export default {
  title: 'Components/Form/NumberInput',
  component: Component,
  decorators: [
    (Story) => (
      <Fragment>
        <Global styles={global} />
        <Grid align="center" columns="repeat(5, 1fr)" gap="1em">
          <Legend>default</Legend>
          <Legend>hover</Legend>
          <Legend>active</Legend>
          <Legend>disabled</Legend>
          <Legend>invalid</Legend>
          <Story />
        </Grid>
      </Fragment>
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
    ...mapArgTypes(['busy', 'data-active', 'data-hover', 'data-invalid', 'format', 'theme'], {
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
    ...mapArgTypes(['stepper', 'components'], {
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
    <Fragment>
      <Component {...args} value={value} onChangeValue={handleChange} />
      <Component {...args} value={value} onChangeValue={handleChange} data-hover />
      <Component {...args} value={value} onChangeValue={handleChange} data-active />
      <Component {...args} value={value} onChangeValue={handleChange} disabled />
      <Component {...args} value={60} onChangeValue={handleChange} />
    </Fragment>
  );
};

const emojiStepper = css`
  font-size: 20px;
  user-select: none;
`;

const CustomStepper: React.FC<NumberInputStepperContainerProps> = (props) => {
  return <Flex align="center" gap="4px" {...props} />;
};

const CustomIncrementStepper: React.VFC<NumberInputStepperProps> = ({
  disabled = false,
  onChange,
}) => {
  return (
    <span css={emojiStepper} onClick={onChange}>
      {disabled ? '👊' : '👍'}
    </span>
  );
};

const CustomDecrementStepper: React.VFC<NumberInputStepperProps> = ({
  disabled = false,
  onChange,
}) => {
  return (
    <span css={emojiStepper} onClick={onChange}>
      {disabled ? '👊' : '👎'}
    </span>
  );
};

const TemplateOverview: Story<NumberInputProps> = (args) => (
  <Fragment>
    <Template {...args} />
    <Template {...args} affix={['Decimals']} decimals={1} step={0.1} type="number" />
    <Template {...args} affix={[<Icon name="AxisX" size="xs" />]} stepper />
    {/* <Template {...args} format={(value) => `${value}%`} /> */}
    <Template {...args} affix={['😵‍💫']} stepper />
    <Template
      {...args}
      components={{
        Stepper: CustomStepper,
        IncrementStepper: CustomIncrementStepper,
        DecrementStepper: CustomDecrementStepper,
      }}
      stepper
    />
  </Fragment>
);

export const Number = TemplateOverview.bind({});
Number.storyName = 'NumberInput';
