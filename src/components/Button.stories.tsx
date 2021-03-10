import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { mapArgTypes } from '../utils/stories';
import { Button, ButtonProps } from './Button';
import { Flex, Grid } from './layout';

import { ReactComponent as IconChevron } from '../assets/images/16/chevron.svg';
import { ReactComponent as IconFlash } from '../assets/images/16/flash.svg';

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
  argTypes: {
    children: {
      control: { type: null },
    },
    ...mapArgTypes(['type'], {
      control: { type: 'inline-radio' },
    }),
    ...mapArgTypes(['round', 'toggle'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['variant'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['icon'], {
      table: { category: 'Icons', type: { summary: 'ReactElement' } },
      control: { type: null },
    }),
    ...mapArgTypes(['placement'], {
      control: { type: 'inline-radio' },
      table: { category: 'Icons' },
    }),
    ...mapArgTypes(['active', 'busy', 'disabled'], { table: { category: 'States' } }),
    ...mapArgTypes(['onClick'], { table: { category: 'Events' } }),
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
      <Button icon={<IconFlash />} {...args} />
      <Button icon={<IconFlash />} {...args} round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<IconFlash />} {...args} data-hover />
      <Button icon={<IconFlash />} {...args} data-hover round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<IconFlash />} {...args} data-pressed />
      <Button icon={<IconFlash />} {...args} data-pressed round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<IconFlash />} {...args} active />
      <Button icon={<IconFlash />} {...args} active round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<IconFlash />} {...args} busy />
      <Button icon={<IconFlash />} {...args} busy round />
    </Flex>
    <Flex gap="8px">
      <Button icon={<IconFlash />} {...args} disabled />
      <Button icon={<IconFlash />} {...args} disabled round />
    </Flex>
  </>
);

const TemplateIconWithText: Story<ButtonProps> = (args) => (
  <>
    <Button icon={<IconFlash />} {...args} />
    <Button icon={<IconFlash />} {...args} data-hover />
    <Button icon={<IconFlash />} {...args} data-pressed />
    <Button icon={<IconFlash />} {...args} active />
    <Button icon={<IconFlash />} {...args} busy />
    <Button icon={<IconFlash />} {...args} disabled />
  </>
);

const TemplateToggle: Story<ButtonProps> = (args) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
      />
      <Button
        data-hover
        icon={<IconChevron />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
      />
      <Button
        data-pressed
        icon={<IconChevron />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        onClick={() => setActive(!active)}
        active
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        active={active}
        onClick={() => setActive(!active)}
        busy
      />
      <Button
        icon={<IconChevron />}
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
      icon={<IconFlash />}
      placement="left"
      text="Primary"
      variant="primary"
    />
    <TemplateIcon {...args} icon={<IconFlash />} text="" variant="primary" />
    <Template {...args} text="Secondary" variant="secondary" />
    <TemplateIconWithText
      {...args}
      icon={<IconFlash />}
      placement="left"
      text="Secondary"
      variant="secondary"
    />
    <TemplateIcon {...args} icon={<IconFlash />} text="" variant="secondary" />
    <Template {...args} text="Tertiary" variant="tertiary" />
    <TemplateIconWithText
      {...args}
      icon={<IconFlash />}
      placement="left"
      text="Tertiary"
      variant="tertiary"
    />
    <TemplateIcon {...args} icon={<IconFlash />} text="" variant="tertiary" />
  </>
);

const params = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/YgguhjSFNweP8so3tHTq7l/New-Design-System-Copy?node-id=12%3A50',
  },
};

export const Overview = TemplateOverview.bind({});
Overview.args = {
  text: 'Button',
};
Overview.parameters = { ...params };

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  variant: 'primary',
};
Primary.parameters = { ...params };

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
  variant: 'secondary',
};
Secondary.parameters = { ...params };

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: 'Button',
  variant: 'tertiary',
};
Tertiary.parameters = { ...params };

export const Icon = TemplateIcon.bind({});
Icon.args = {
  variant: 'tertiary',
};
Icon.parameters = { ...params };

export const IconWithText = TemplateIconWithText.bind({});
IconWithText.storyName = 'Icon w/ text';
IconWithText.args = {
  text: 'Button',
  placement: 'left',
};
IconWithText.parameters = { ...params };

export const Toggle = TemplateToggle.bind({});
Toggle.args = {
  text: 'Button',
  toggle: true,
};
Toggle.parameters = { ...params };

const Legend = styled.small`
  color: hsl(0 0% 50%);
  font-size: 0.8rem;
  padding-left: 1ch;
`;
