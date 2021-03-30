import React from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import * as iconsBold from '../icons/bold';
import * as iconsBoldMini from '../icons/mini';
import { mapArgTypes } from '../stories';
import { truncate } from '../utils/helpers';
import { Icon, IconProps } from './Icon';
import { Flex } from './layout';

interface StoryProps extends IconProps {
  icons: React.FC[];
  title?: string;
}

const ICO_PREFIX = 'Svg';

export default {
  title: 'Components/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <Flex gap="1em" wrap>
        <Story />
      </Flex>
    ),
    withDesign,
  ],
  argTypes: {
    ...mapArgTypes(['icons', 'title'], {
      control: { disable: true },
      table: { disable: true },
    }),
    name: { control: null },
    ...mapArgTypes(['size'], {
      control: { type: 'inline-radio' },
    }),
  },
} as Meta;

const Template: Story<StoryProps> = ({ icons, size }) => (
  <>
    {Object.values(icons).map((icon, index) => {
      const name = icon.name.replace(ICO_PREFIX, '');
      return (
        <Card key={index}>
          <div>{name}</div>
          <div>
            <Icon name={name} size={size} />
          </div>
        </Card>
      );
    })}
  </>
);

const TemplateTitle: Story<Partial<StoryProps>> = ({ icons, title }) => (
  <Title>
    {title} <span>{icons?.length}×</span>
  </Title>
);

const TemplateOverview: Story<StoryProps> = (args) => (
  <>
    <TemplateTitle {...IconsBoldMini.args} />
    <Template {...args} {...IconsBoldMini.args} />

    <TemplateTitle {...IconsBold.args} />
    <Template {...args} {...IconsBold.args} />
  </>
);

const params = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/New-Design-System?node-id=16%3A297',
  },
};

export const Overview = TemplateOverview.bind({});
Overview.args = {};
Overview.parameters = { ...params };

export const IconsBoldMini = Template.bind({});
IconsBoldMini.storyName = 'Bold Mini';
IconsBoldMini.args = {
  icons: Object.values(iconsBoldMini),
  size: 'xs',
  title: 'Bold Mini',
};
IconsBoldMini.parameters = { ...params };

export const IconsBold = Template.bind({});
IconsBold.storyName = 'Bold';
IconsBold.args = {
  icons: Object.values(iconsBold),
  title: 'Bold',
};
IconsBold.parameters = { ...params };

const Title = styled.h2`
  align-items: baseline;
  display: flex;
  gap: 1em;
  min-width: 100%;

  span {
    color: hsl(0 0% 70%);
    font-size: 0.6em;
  }
`;

const Card = styled.div`
  --size: 80px;

  background-color: white;
  display: flex;
  flex-direction: column;
  height: var(--size);
  transition: background-color 0.3s;
  width: var(--size);

  div:nth-of-type(1) {
    ${truncate};

    color: hsl(0 0% 40%);
    font-size: 10px;
    padding: 0.5em;
    padding-bottom: 0;
  }

  div:nth-of-type(2) {
    display: grid;
    flex: 1;
    place-items: center;
  }

  &:hover {
    background-color: gold;
  }
`;
