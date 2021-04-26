import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { withDesign } from 'storybook-addon-designs';

import data from '../data/navigation.json';
import { Container, mapArgTypes } from '../stories';
import { Theme } from '../utils/constants';
import { Grid, Nav, NavItem, NavItemProps, StatusThemeType } from './index';

export default {
  title: 'Components/Navigation',
  component: NavItem,
  decorators: [
    (Story) => (
      <Router>
        <Grid columns="repeat(2, 1fr)" gap="24px">
          <Story />
        </Grid>
      </Router>
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
  argTypes: {
    icon: {
      control: { disable: true },
    },
    records: {
      control: { disable: true },
      table: { disable: true },
    },
    ...mapArgTypes(['status'], {
      control: {
        options: Object.values(Theme).filter((t) => t !== 'dark'),
        type: 'inline-radio',
      },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['active'], {
      table: { category: 'States' },
    }),
    ...mapArgTypes(['onClick'], { table: { category: 'Events' } }),
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
}

const Template: Story<StoryProps> = ({
  active,
  records,
  showStatus = true,
  status: storyStatus,
  text,
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  return (
    <Nav>
      {records.map(({ title, status }, index) => {
        const theme = getThemeByStatus(status as StatusType);
        return (
          <NavItem
            key={index}
            to=""
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
NavigationOverview.args = {
  records: [...data.records].map((record) => record.fields),
};
NavigationOverview.storyName = 'Navigation';
