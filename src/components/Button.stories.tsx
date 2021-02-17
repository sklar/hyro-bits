import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Grid } from 'components/layout/Grid';
import { mapArgTypes } from 'utils/stories';

import { Button, ButtonProps } from './Button';

import { ReactComponent as IconChevron } from 'assets/images/16/chevron.svg';
import { ReactComponent as IconEdit } from 'assets/images/16/edit.svg';
import { ReactComponent as IconPlus } from 'assets/images/16/plus-alt.svg';
import { ReactComponent as IconShare } from 'assets/images/16/share.svg';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Grid align="center" columns="repeat(4, 1fr)" gap="1em" justify="start">
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
    ...mapArgTypes(['effect', 'round', 'toggle'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['size', 'theme', 'variant'], {
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
    ...mapArgTypes(['isActive', 'isBusy', 'isDisabled'], { table: { category: 'States' } }),
    ...mapArgTypes(['onClick'], { table: { category: 'Events' } }),
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" />
    <Button {...args} size="sm" isActive />
    <Button {...args} size="sm" isBusy />
    <Button {...args} size="sm" isDisabled />

    <Button {...args} />
    <Button {...args} isActive />
    <Button {...args} isBusy />
    <Button {...args} isDisabled />

    <Button {...args} size="lg" />
    <Button {...args} size="lg" isActive />
    <Button {...args} size="lg" isBusy />
    <Button {...args} size="lg" isDisabled />
  </>
);

const TemplateIcon: Story<ButtonProps> = (args) => (
  <>
    <Button icon={<IconEdit />} {...args} size="sm" />
    <Button icon={<IconEdit />} {...args} size="sm" isActive />
    <Button icon={<IconEdit />} {...args} size="sm" isBusy />
    <Button icon={<IconEdit />} {...args} size="sm" isDisabled />

    <Button icon={<IconEdit />} {...args} />
    <Button icon={<IconEdit />} {...args} isActive />
    <Button icon={<IconEdit />} {...args} isBusy />
    <Button icon={<IconEdit />} {...args} isDisabled />

    <Button icon={<IconEdit />} {...args} size="lg" />
    <Button icon={<IconEdit />} {...args} size="lg" isActive />
    <Button icon={<IconEdit />} {...args} size="lg" isBusy />
    <Button icon={<IconEdit />} {...args} size="lg" isDisabled />

    <Button icon={<IconShare />} {...args} round size="sm" />
    <Button icon={<IconShare />} {...args} round size="sm" isActive />
    <Button icon={<IconShare />} {...args} round size="sm" isBusy />
    <Button icon={<IconShare />} {...args} round size="sm" isDisabled />

    <Button icon={<IconShare />} {...args} round />
    <Button icon={<IconShare />} {...args} round isActive />
    <Button icon={<IconShare />} {...args} round isBusy />
    <Button icon={<IconShare />} {...args} round isDisabled />

    <Button icon={<IconShare />} {...args} round size="lg" />
    <Button icon={<IconShare />} {...args} round size="lg" isActive />
    <Button icon={<IconShare />} {...args} round size="lg" isBusy />
    <Button icon={<IconShare />} {...args} round size="lg" isDisabled />
  </>
);

const TemplateIconWithText: Story<ButtonProps> = (args) => (
  <>
    <Button icon={<IconPlus />} {...args} size="sm" />
    <Button icon={<IconPlus />} {...args} size="sm" isActive />
    <Button icon={<IconPlus />} {...args} size="sm" isBusy />
    <Button icon={<IconPlus />} {...args} size="sm" isDisabled />

    <Button icon={<IconPlus />} {...args} />
    <Button icon={<IconPlus />} {...args} isActive />
    <Button icon={<IconPlus />} {...args} isBusy />
    <Button icon={<IconPlus />} {...args} isDisabled />

    <Button icon={<IconPlus />} {...args} size="lg" />
    <Button icon={<IconPlus />} {...args} size="lg" isActive />
    <Button icon={<IconPlus />} {...args} size="lg" isBusy />
    <Button icon={<IconPlus />} {...args} size="lg" isDisabled />
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
        size="sm"
        isActive={active}
        onClick={() => setActive(!active)}
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        size="sm"
        onClick={() => setActive(!active)}
        isActive
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        size="sm"
        isActive={active}
        onClick={() => setActive(!active)}
        isBusy
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        size="sm"
        isActive={active}
        onClick={() => setActive(!active)}
        isDisabled
      />

      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        isActive={active}
        onClick={() => setActive(!active)}
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        onClick={() => setActive(!active)}
        isActive
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        isActive={active}
        onClick={() => setActive(!active)}
        isBusy
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        isActive={active}
        onClick={() => setActive(!active)}
        isDisabled
      />

      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        size="lg"
        isActive={active}
        onClick={() => setActive(!active)}
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        size="lg"
        onClick={() => setActive(!active)}
        isActive
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        size="lg"
        isActive={active}
        onClick={() => setActive(!active)}
        isBusy
      />
      <Button
        icon={<IconChevron />}
        {...args}
        placement="right"
        size="lg"
        isActive={active}
        onClick={() => setActive(!active)}
        isDisabled
      />
    </>
  );
};

const params = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/SeJtckGsmgF2x29utXQhPJ/Design-System?node-id=309%3A556',
  },
};

export const Basic = Template.bind({});
Basic.args = {
  text: 'Button',
};
Basic.parameters = { ...params };

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
Icon.args = {};
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
