import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { global, mapArgTypes } from '../../stories';
import { Tooltip as Component, TooltipProps } from '../tooltip';

export default {
  title: 'Components/Tooltip',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Container>
          <Story />
        </Container>
      </>
    ),
    withDesign,
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A4455',
    },
  },
  args: {
    delayEnter: 0.4,
    delayLeave: 0.1,
    label: 'Label',
    placement: 'top',
    shortcut: 'super+shift+k',
    size: 192,
    defaultVisible: true,
  },
  argTypes: {
    ...mapArgTypes(['defaultVisible', 'theme', 'trigger'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['children'], {
      control: { disable: true },
      table: { type: { summary: 'ReactElement' } },
    }),
    ...mapArgTypes(['placement'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['size'], {
      control: { type: 'range', min: 100, max: 600, step: 1 },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['delayEnter', 'delayLeave'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['disabled', 'visible'], {
      table: { category: 'States' },
    }),
  },
} as Meta;

interface StoryProps extends Omit<TooltipProps, 'size'> {
  size: number;
}

const Template: Story<StoryProps> = ({ size, ...args }) => (
  <>
    <Component {...args} size={`${size}px`}>
      <Shape />
    </Component>
  </>
);

export const Tooltip = Template.bind({});

const Container = styled.div`
  min-height: 300px;
  overflow: auto;
  padding: 100px;
  resize: both;
  width: min(100%, 600px);
`;

const Shape = styled.div`
  aspect-ratio: 1;
  background-color: gold;
  border-radius: 8px;
  margin: auto;
  width: 100px;
`;
