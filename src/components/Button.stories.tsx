import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Legend, mapArgTypes } from '../stories';
import { Button, ButtonProps, Flex, Grid, Icon } from './index';

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
    children: {
      control: { disable: true },
      table: { disable: true },
    },
    ...mapArgTypes(['type'], {
      control: { type: 'inline-radio' },
    }),
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
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} />
      <Button icon={<Icon name="Flash" />} {...args} round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} data-hover />
      <Button icon={<Icon name="Flash" />} {...args} data-hover round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} data-pressed />
      <Button icon={<Icon name="Flash" />} {...args} data-pressed round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} active />
      <Button icon={<Icon name="Flash" />} {...args} active round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} busy />
      <Button icon={<Icon name="Flash" />} {...args} busy round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} disabled />
      <Button icon={<Icon name="Flash" />} {...args} disabled round />
    </Flex>

    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" />
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" data-hover />
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" data-hover round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" data-pressed />
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" data-pressed round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" active />
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" active round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" busy />
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" busy round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" disabled />
      <Button icon={<Icon name="Flash" />} {...args} theme="dark" disabled round />
    </Flex>
  </>
);

const TemplateIconWithText: Story<ButtonProps> = (args) => (
  <>
    <Button icon={<Icon name="Flash" />} {...args} />
    <Button icon={<Icon name="Flash" />} {...args} data-hover />
    <Button icon={<Icon name="Flash" />} {...args} data-pressed />
    <Button icon={<Icon name="Flash" />} {...args} active />
    <Button icon={<Icon name="Flash" />} {...args} busy />
    <Button icon={<Icon name="Flash" />} {...args} disabled />

    <Button icon={[<Icon name="Flash" />, <Icon name="Trash" />]} {...args} />
    <Button icon={[<Icon name="Flash" />, <Icon name="Trash" />]} {...args} data-hover />
    <Button icon={[<Icon name="Flash" />, <Icon name="Trash" />]} {...args} data-pressed />
    <Button icon={[<Icon name="Flash" />, <Icon name="Trash" />]} {...args} active />
    <Button icon={[<Icon name="Flash" />, <Icon name="Trash" />]} {...args} busy />
    <Button icon={[<Icon name="Flash" />, <Icon name="Trash" />]} {...args} disabled />
  </>
);

const TemplateToggle: Story<ButtonProps> = (args) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <Button
        icon={<Icon name="ChevronDown" size="xs" />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
      />
      <Button
        data-hover
        icon={<Icon name="ChevronDown" size="xs" />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
      />
      <Button
        data-pressed
        icon={<Icon name="ChevronDown" size="xs" />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
      />
      <Button
        icon={<Icon name="ChevronDown" size="xs" />}
        {...args}
        placement="right"
        onClick={() => setActive(!active)}
        active
      />
      <Button
        icon={<Icon name="ChevronDown" size="xs" />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
        busy
      />
      <Button
        icon={<Icon name="ChevronDown" size="xs" />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
        disabled
      />
    </>
  );
};

const TemplateOverview: Story<ButtonProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} text="Primary" variant="primary" />
    <TemplateIconWithText
      {...args}
      icon={<Icon name="Flash" />}
      placement="left"
      text="Primary"
      variant="primary"
    />
    <TemplateIcon {...args} icon={<Icon name="Flash" />} text="" variant="primary" />
    <Template {...args} text="Secondary" variant="secondary" />
    <TemplateIconWithText
      {...args}
      icon={<Icon name="Flash" />}
      placement="left"
      text="Secondary"
      variant="secondary"
    />
    <TemplateIcon {...args} icon={<Icon name="Flash" />} text="" variant="secondary" />
    <Template {...args} text="Tertiary" variant="tertiary" />
    <TemplateIconWithText
      {...args}
      icon={<Icon name="Flash" />}
      placement="left"
      text="Tertiary"
      variant="tertiary"
    />
    <TemplateIcon {...args} icon={<Icon name="Flash" />} text="" variant="tertiary" />
  </>
);

export const Overview = TemplateOverview.bind({});
Overview.args = {
  text: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: 'Button',
  variant: 'tertiary',
};

export const IconOnly = TemplateIcon.bind({});
IconOnly.storyName = 'Icon';
IconOnly.args = {
  variant: 'tertiary',
};

export const IconWithText = TemplateIconWithText.bind({});
IconWithText.storyName = 'Icon w/ text';
IconWithText.args = {
  text: 'Button',
  placement: 'left',
};

export const Toggle = TemplateToggle.bind({});
Toggle.args = {
  text: 'Button',
  toggle: true,
};
