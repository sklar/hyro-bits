import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Legend, mapArgTypes } from '../../stories';
import { Button, Flex, Grid, Icon, Switch, Text } from '../index';
import { Menu, MenuDivider, MenuItem, MenuProps, MenuTitle } from './index';

const decorators = [withDesign];

export default {
  title: 'Components/Menu',
  component: Menu,
  decorators: decorators,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/New-Design-System?node-id=38%3A0',
    },
  },
  argTypes: {
    ...mapArgTypes(['justify', 'size'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['theme'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['active'], { table: { category: 'States' } }),
    ...mapArgTypes(['onClose'], { table: { category: 'Events' } }),
  },
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <>
    <Menu {...args}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem>
        <Text>Another text</Text>
        <Icon name="Chevron" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem>
        <Icon name="Cog" />
        <Text>Setup</Text>
      </MenuItem>
      <MenuItem>
        <Icon name="Flash" />
        <Text truncate>Way loooooooooooooooooooooooooooong</Text>
      </MenuItem>
      <MenuItem>
        <Icon name="Clone" />
        <Text>Duplicate</Text>
        <Icon name="Chevron" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Icon name="Save" />
        <Text>Save</Text>
      </MenuItem>
      <MenuItem>
        <Icon name="Trash" />
        <Text>Delete</Text>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem data-hover>
        <Text>Another text</Text>
        <Icon name="Chevron" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem data-pressed>
        <Text>Another text</Text>
        <Icon name="Chevron" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem active>
        <Text>Another text</Text>
        <Icon name="Chevron" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem disabled>
        <Text>Another text</Text>
        <Icon name="Chevron" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
  </>
);

const TemplateItems: Story<MenuProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} theme="dark" />
  </>
);

const TemplateAlt: Story<MenuProps> = (args) => (
  <>
    <Menu {...args}>
      <MenuItem>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Michael Bryce
            </Text>
            <Text as="div" className="secondary" truncate>
              aaa@protection.agent
            </Text>
          </div>
        </Flex>
      </MenuItem>
      <MenuItem>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Darius Kincaid
            </Text>
            <Text as="div" className="secondary" truncate>
              international@assassin.badass
            </Text>
          </div>
        </Flex>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem data-hover>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Michael Bryce
            </Text>
            <Text as="div" className="secondary" truncate>
              aaa@protection.agent
            </Text>
          </div>
        </Flex>
      </MenuItem>
      <MenuItem>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Darius Kincaid
            </Text>
            <Text as="div" className="secondary" truncate>
              international@assassin.badass
            </Text>
          </div>
        </Flex>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem data-pressed>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Michael Bryce
            </Text>
            <Text as="div" className="secondary" truncate>
              aaa@protection.agent
            </Text>
          </div>
        </Flex>
      </MenuItem>
      <MenuItem>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Darius Kincaid
            </Text>
            <Text as="div" className="secondary" truncate>
              international@assassin.badass
            </Text>
          </div>
        </Flex>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem active>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Michael Bryce
            </Text>
            <Text as="div" className="secondary" truncate>
              aaa@protection.agent
            </Text>
          </div>
        </Flex>
      </MenuItem>
      <MenuItem>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Darius Kincaid
            </Text>
            <Text as="div" className="secondary" truncate>
              international@assassin.badass
            </Text>
          </div>
        </Flex>
      </MenuItem>
    </Menu>
    <Menu {...args}>
      <MenuItem disabled>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Michael Bryce
            </Text>
            <Text as="div" className="secondary" truncate>
              aaa@protection.agent
            </Text>
          </div>
        </Flex>
      </MenuItem>
      <MenuItem>
        <Flex align="center" gap="8px" style={{ width: '100%' }}>
          <Avatar />
          <div style={{ flex: 1, maxWidth: 'calc(100% - 24px)' }}>
            <Text as="div" className="primary">
              Darius Kincaid
            </Text>
            <Text as="div" className="secondary" truncate>
              international@assassin.badass
            </Text>
          </div>
        </Flex>
      </MenuItem>
    </Menu>
  </>
);

const TemplateItemsAlt: Story<MenuProps> = (args) => (
  <>
    <TemplateAlt {...args} />
    <TemplateAlt {...args} theme="dark" />
  </>
);

const TemplateOverview: Story<MenuProps> = (args) => (
  <>
    <Menu {...args} size="148px">
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem>
        <Text>Another text</Text>
        <Icon name="Chevron" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem as="label">
        <Switch as="span" label="And here comes a switch" />
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>

    <Flex direction="column" gap="1em">
      <Menu {...args} padding size="300px">
        <MenuTitle>Assign Triggers</MenuTitle>
        <Grid align="center" columns="32px auto" gap="4px" justify="start">
          <Button icon={<Icon name="Times" />} variant="tertiary" />
          <Placeholder />
          <span />
          <Placeholder />
        </Grid>
      </Menu>

      <Menu {...args} size="300px">
        <MenuItem>
          <Flex align="center" gap="8px">
            <Avatar />
            <div>
              <Text as="div" className="primary">
                Michael Bryce
              </Text>
              <Text as="div" className="secondary">
                aaa@protection.agent
              </Text>
            </div>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex align="center" gap="8px">
            <Avatar />
            <div>
              <Text as="div" className="primary">
                Darius Kincaid
              </Text>
              <Text as="div" className="secondary">
                international@assassin.badass
              </Text>
            </div>
          </Flex>
        </MenuItem>
      </Menu>
    </Flex>

    <Menu {...args} padding size="232px">
      <MenuTitle>Position</MenuTitle>
      <Grid align="center" columns="1fr 1fr 32px" gap="4px">
        <Placeholder />
        <Placeholder />
        <span />
        <Placeholder />
        <Placeholder />
        <Button icon={<Icon name="LockAlt" />} variant="tertiary" />
      </Grid>

      <MenuTitle>Alignment</MenuTitle>
      <Grid align="center" columns="repeat(2, 1fr)" gap="4px">
        <MenuItem>
          <Icon name="AlignMiddle" />
          <Text>Middle</Text>
        </MenuItem>
        <MenuItem>
          <Icon name="AlignLeft" />
          <Text>Left</Text>
        </MenuItem>
        <MenuItem>
          <Icon name="AlignTop" />
          <Text>Top</Text>
        </MenuItem>
        <MenuItem>
          <Icon name="AlignCenter" />
          <Text>Center</Text>
        </MenuItem>
        <MenuItem>
          <Icon name="AlignBottom" />
          <Text>Bottom</Text>
        </MenuItem>
        <MenuItem>
          <Icon name="AlignRight" />
          <Text>Right</Text>
        </MenuItem>
      </Grid>
    </Menu>
  </>
);

export const Overview = TemplateOverview.bind({});
Overview.args = {};
Overview.decorators = [
  ...decorators,
  (Story) => (
    <Grid align="start" columns="repeat(3, auto)" gap="1em" justify="start">
      <Story />
    </Grid>
  ),
];

export const Items = TemplateItems.bind({});
Items.args = {
  size: '148px',
};
Items.decorators = [
  ...decorators,
  (Story) => (
    <Grid align="center" columns="repeat(6, 1fr)" gap="1em" justify="start">
      <Legend>default</Legend>
      <Legend />
      <Legend>hover</Legend>
      <Legend>pressed</Legend>
      <Legend>active (selected)</Legend>
      <Legend>disabled</Legend>
      <Story />
    </Grid>
  ),
];

export const ItemsAlt = TemplateItemsAlt.bind({});
ItemsAlt.args = {
  size: '240px',
};
ItemsAlt.decorators = [
  ...decorators,
  (Story) => (
    <Grid align="center" columns="repeat(5, 1fr)" gap="1em" justify="start">
      <Legend>default</Legend>
      <Legend>hover</Legend>
      <Legend>pressed</Legend>
      <Legend>active (selected)</Legend>
      <Legend>disabled</Legend>
      <Story />
    </Grid>
  ),
];
ItemsAlt.storyName = 'Items Alt';

const Placeholder = styled.div`
  --radius: 6px;
  --size: 32px;

  background: gold;
  border-radius: var(--radius);
  flex-shrink: 0;
  height: var(--size);
  width: 100%;
`;

const Avatar = styled(Placeholder)`
  --radius: 50%;
  --size: 24px;

  width: var(--size);
`;
