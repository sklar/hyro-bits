import { Meta, Story } from '@storybook/react';
import React, { useReducer } from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Legend, mapArgTypes } from '../stories';
import { Theme, Variant } from '../utils/constants';
import { Button, Grid, Icon, SharedButtonProps } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Grid align="center" columns="repeat(6, 1fr)" gap="1em" justify="start">
        <Legend>default</Legend>
        <Legend>hover</Legend>
        <Legend>pressed</Legend>
        <Legend>active</Legend>
        <Legend>busy</Legend>
        <Legend>disabled</Legend>
        <Story />
      </Grid>
    ),
    withDesign,
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A4019',
    },
  },
  argTypes: {
    ...mapArgTypes(['as', 'children', 'ref'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['type'], {
      control: { type: 'inline-radio' },
    }),
    ...mapArgTypes(['text'], {
      control: { type: 'text' },
    }),
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        // eslint-disable-next-line no-template-curly-in-string
        defaultValue: { summary: 'button-${kebabCase(text)}' },
      },
    },
    ...mapArgTypes(['round', 'synthetic', 'toggle'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['size', 'variant', 'theme'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['icon'], {
      control: { disable: true },
      table: { category: 'Icons', type: { summary: 'ReactElement' } },
    }),
    ...mapArgTypes(['placement'], {
      control: { type: 'inline-radio' },
      table: { category: 'Icons' },
    }),
    ...mapArgTypes(['active', 'busy', 'disabled'], { table: { category: 'States' } }),
  },
} as Meta;

interface ButtonProps extends SharedButtonProps {
  onClick: () => void;
}

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} />
    <Button {...args} data-hover />
    <Button {...args} data-pressed />
    <Button {...args} active />
    <Button {...args} busy />
    <Button {...args} disabled />
  </>
);

const TemplateIcon: Story<ButtonProps> = (args) => (
  <>
    <Template {...args} icon={<Icon name="Flash" />} />
    <Template {...args} icon={<Icon name="Flash" />} theme={Theme.DARK} />

    <Template {...args} icon={<Icon name="Flash" />} round />
    <Template {...args} icon={<Icon name="Flash" />} round theme={Theme.DARK} />
  </>
);

const TemplateIconWithText: Story<ButtonProps> = (args) => (
  <>
    <Template {...args} icon={<Icon name="Flash" />} />
    <Template {...args} icon={[<Icon name="Flash" />, <Icon name="Flash" />]} />
  </>
);

const TemplateWithTheme: Story<ButtonProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} theme={Theme.SUCCESS} />
    <Template {...args} theme={Theme.DANGER} />
  </>
);

const TemplateWithDarkTheme: Story<ButtonProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} theme={Theme.DARK} />
  </>
);

const TemplateToggle: Story<ButtonProps> = (args) => {
  const [active, toggle] = useReducer((active) => !active, false);

  return (
    <Template
      {...args}
      icon={<Icon name="ChevronDown" size="xs" />}
      placement="right"
      active={active}
      onClick={toggle}
    />
  );
};

const TemplateOverview: Story<ButtonProps> = (args) => (
  <>
    {/* default */}
    <Template {...args} />

    {/* primary */}
    <Template {...args} text="Primary" variant={Variant.PRIMARY} />
    <Template
      {...args}
      icon={<Icon name="Flash" />}
      placement="left"
      text="Primary"
      variant={Variant.PRIMARY}
    />
    <Template {...args} icon={<Icon name="Flash" />} text="" variant={Variant.PRIMARY} />

    {/* secondary */}
    <Template {...args} text="Secondary" variant={Variant.SECONDARY} />
    <Template
      {...args}
      icon={<Icon name="Flash" />}
      placement="left"
      text="Secondary"
      variant={Variant.SECONDARY}
    />
    <Template {...args} icon={<Icon name="Flash" />} text="" variant={Variant.SECONDARY} />

    {/* tertiary */}
    <Template {...args} text="Tertiary" variant={Variant.TERTIARY} />
    <Template
      {...args}
      icon={<Icon name="Flash" />}
      placement="left"
      text="Tertiary"
      variant={Variant.TERTIARY}
    />
    <Template {...args} icon={<Icon name="Flash" />} text="" variant={Variant.TERTIARY} />
  </>
);

export const Overview = TemplateOverview.bind({});
Overview.args = {
  text: 'Button',
};

export const Primary = TemplateWithTheme.bind({});
Primary.args = {
  text: 'Button',
  variant: Variant.PRIMARY,
};

export const Secondary = TemplateWithTheme.bind({});
Secondary.args = {
  text: 'Button',
  variant: Variant.SECONDARY,
};

export const Tertiary = TemplateWithDarkTheme.bind({});
Tertiary.args = {
  text: 'Button',
  variant: Variant.TERTIARY,
};

export const IconOnly = TemplateIcon.bind({});
IconOnly.storyName = 'Icon';
IconOnly.args = {
  variant: Variant.TERTIARY,
};

export const IconWithText = TemplateIconWithText.bind({});
IconWithText.storyName = 'Icon w/ text';
IconWithText.args = {
  text: 'Button',
  placement: 'left',
};

export const Toggle = TemplateToggle.bind({});
Toggle.args = {
  text: 'Toggle',
  toggle: true,
};
