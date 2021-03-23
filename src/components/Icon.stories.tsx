import React from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import * as icons16 from '../icons/16';
import * as icons16m from '../icons/mini';
import * as icons20 from '../icons/20';
import * as icons24 from '../icons/24';
import * as icons32 from '../icons/32';
import { mapArgTypes } from '../stories';
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
    <TemplateTitle {...Icons16m.args} />
    <Template {...args} {...Icons16m.args} />

    <TemplateTitle {...Icons16.args} />
    <Template {...args} {...Icons16.args} />

    <TemplateTitle {...Icons20.args} />
    <Template {...args} {...Icons20.args} />

    <TemplateTitle {...Icons24.args} />
    <Template {...args} {...Icons24.args} />

    <TemplateTitle {...Icons32.args} />
    <Template {...args} {...Icons32.args} />
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

export const Icons16m = Template.bind({});
Icons16m.storyName = '16 x-small';
Icons16m.args = {
  icons: Object.values(icons16m),
  size: 'xs',
  title: '16 xs',
};
Icons16m.parameters = { ...params };

export const Icons16 = Template.bind({});
Icons16.storyName = '16 small';
Icons16.args = {
  icons: Object.values(icons16),
  size: 'sm',
  title: '16 sm',
};
Icons16.parameters = { ...params };

export const Icons20 = Template.bind({});
Icons20.storyName = '20 medium';
Icons20.args = {
  icons: Object.values(icons20),
  size: 'md',
  title: '20 md',
};
Icons20.parameters = { ...params };

export const Icons24 = Template.bind({});
Icons24.storyName = '24 large';
Icons24.args = {
  icons: Object.values(icons24),
  size: 'lg',
  title: '24 lg',
};
Icons24.parameters = { ...params };

export const Icons32 = Template.bind({});
Icons32.storyName = '32 x-large';
Icons32.args = {
  icons: Object.values(icons32),
  size: 'xl',
  title: '32 xl',
};
Icons32.parameters = { ...params };

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
    color: hsl(0 0% 40%);
    font-size: 10px;
    overflow: hidden;
    padding: 0.5em;
    padding-bottom: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
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
