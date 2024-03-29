import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Theme } from '../../constants';
import data from '../../data/navigation.json';
import { Container, mapArgTypes } from '../../stories';
import { Grid } from '../grid';
import { Nav, NavItem, NavItemProps } from '../navigation';
import { StatusThemeType } from '../status';

export default {
  title: 'Components/Navigation',
  component: NavItem,
  decorators: [
    (Story) => (
      <Grid columns="repeat(2, 1fr)" gap="24px">
        <Story />
      </Grid>
    ),
    withDesign,
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A4019',
    },
  },
  args: {
    records: [...data.records].map((record) => record.fields),
  },
  argTypes: {
    ...mapArgTypes(['as'], {
      control: { type: 'text' },
      table: {
        type: { summary: 'ElementType<any>' },
      },
    }),
    'text': {
      control: 'text',
    },
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        // eslint-disable-next-line no-template-curly-in-string
        defaultValue: { summary: 'nav-item-${kebabCase(text)}' },
      },
    },
    ...mapArgTypes(['icon', 'records'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['status'], {
      control: {
        type: 'inline-radio',
      },
      options: Object.values(Theme).filter((t) => t !== 'dark'),
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['theme'], {
      control: {
        type: 'inline-radio',
      },
      options: ['dark', 'light'],
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['active'], {
      table: { category: 'States' },
    }),
  },
} as Meta;

type StatusType = 'Error' | 'Ready';

const getThemeByStatus = (status: StatusType): string => {
  const themes = {
    Error: 'danger',
    Ready: 'success',
  };
  return themes[status] || 'default';
};

interface StoryProps extends NavItemProps {
  records: Record<string, string>[];
  showStatus: boolean;
  theme?: 'light' | 'dark';
}

const Template: Story<StoryProps> = ({
  active,
  records,
  showStatus = true,
  status: storyStatus,
  text,
  theme,
  ...props
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  return (
    <Nav theme={theme}>
      {records.map(({ title, status }, index) => {
        const theme = getThemeByStatus(status as StatusType);
        return (
          <NavItem
            {...props}
            key={index}
            active={active || activeItemIndex === index}
            status={showStatus ? ((storyStatus || theme) as StatusThemeType) : undefined}
            text={text || title}
            onClick={() => setActiveItemIndex(index)}
          />
        );
      })}
    </Nav>
  );
};

const TemplateOverview: Story<StoryProps> = (args) => (
  <>
    <Container indent="24px" resize="both" size="300px">
      <Template {...args} />
    </Container>
    <Container indent="24px" resize="both" size="300px">
      <Template {...args} showStatus={false} />
    </Container>
  </>
);

export const NavigationOverview = TemplateOverview.bind({});
NavigationOverview.storyName = 'Navigation';
