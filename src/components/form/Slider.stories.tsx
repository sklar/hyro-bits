import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from 'components/layout';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Container, mapArgTypes } from '../../stories';
import { Range, Slider, SliderProps } from '../index';

export default {
  title: 'Components/Form/Slider',
  component: Slider,
  decorators: [
    (Story) => (
      <Container resize="vertical">
        <Story />
      </Container>
    ),
    withDesign,
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A5806',
    },
  },
  argTypes: {
    ...mapArgTypes(['value', 'defaultValue', 'min', 'max'], {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    }),
    ...mapArgTypes(['step'], {
      control: { type: 'range', min: 5, max: 25, step: 1 },
    }),
    ...mapArgTypes(['reverse', 'dots', 'disabled'], {
      control: { type: 'boolean' },
    }),
  },
} as Meta;

const Template: Story<SliderProps> = ({ ...args }) => {
  const marks = {
    '-10': '-10°C',
    0: <strong>0°C</strong>,
    26: '26°C',
    37: '37°C',
    50: '50°C',
    100: {
      style: {
        color: 'red',
      },
      label: <strong>100°C</strong>,
    },
  };

  return (
    <Flex gap="80px" wrap>
      <Flex direction="column" block style={{ width: 250 }}>
        <Legend>defaultValue=30</Legend>
        <Slider defaultValue={30} {...args} />
        <Legend>reverse</Legend>
        <Slider defaultValue={30} reverse {...args} />
        <Legend>step=20, dots</Legend>
        <Slider defaultValue={66} step={20} dots {...args} />
        <Legend>
          <b>&lt;Range&gt;</b> defaultValue=[15, 66]
        </Legend>
        <Range defaultValue={[15, 66]} />
        <Legend>disabled</Legend>
        <Slider disabled {...args} />
      </Flex>
      <Flex direction="column" style={{ height: 340 }}>
        <Legend>vertical</Legend>
        <Slider vertical min={-10} marks={marks} step={10} defaultValue={20} {...args} />
      </Flex>
      <Flex direction="column" style={{ height: 340 }}>
        <Legend>
          <b>&lt;Range&gt;</b> vertical
        </Legend>
        <Range vertical min={-10} marks={marks} step={10} defaultValue={[7, 80]} />
      </Flex>
    </Flex>
  );
};

export const SliderOverview = Template.bind({});
SliderOverview.args = {};
SliderOverview.storyName = 'Slider';

const Legend = styled.small`
  color: hsl(0 0% 50%);
  font-size: 0.8rem;
  margin: 24px 0 8px;

  &:first-child {
    margin-top: 0;
  }
`;
