import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useMemo } from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Legend, mapArgTypes } from '../../stories';
import { Flex, Grid, Slider as Component, SliderProps } from '../index';

export default {
  title: 'Components/Form/Slider',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Grid columns="repeat(3, 1fr)" gap="36px">
          <Legend>default</Legend>
          <Legend>hover</Legend>
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
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A5806',
    },
  },
  args: {
    bleed: true,
    defaultValue: 30,
    max: 100,
    min: 0,
    step: 1,
  },
  argTypes: {
    ...mapArgTypes(['value', 'theme'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['defaultValue', 'min', 'max'], {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    }),
    ...mapArgTypes(['step'], {
      control: { type: 'range', min: 1, max: 50, step: 1 },
    }),
    ...mapArgTypes(['bleed', 'dots', 'reverse', 'vertical'], {
      control: { type: 'boolean' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['disabled'], { control: { type: 'boolean' }, table: { category: 'States' } }),
  },
} as Meta;

interface StoryProps extends SliderProps {
  bleed: boolean;
  defaultValue: number;
  max: number;
  min: number;
  step: number;
  value: number;
}

const Template: Story<SliderProps> = ({ ...args }) => {
  const marks = useMemo(() => {
    return [0, 25, 50, 100].reduce((acc, value) => {
      return { ...acc, [value]: <Mark>{value} °C</Mark> };
    }, {});
  }, []);
  const size = 300;

  return (
    <Flex
      block
      direction={args.vertical ? 'row' : 'column'}
      gap="36px"
      style={{
        height: args.vertical ? size : 'auto',
        width: args.vertical ? 0.75 * size : size,
      }}
    >
      <Component {...args} />
      <Component {...args} reverse />
      <Component {...args} dots marks={marks} step={10} />
    </Flex>
  );
};

const TemplateOverview: Story<StoryProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} data-hover />
    <Template {...args} disabled />
  </>
);

export const Overview = TemplateOverview.bind({});
Overview.storyName = 'Slider';

const Mark = styled.span`
  white-space: nowrap;
`;
