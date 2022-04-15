import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Legend, mapArgTypes } from '../../stories';
import { EMOTION_DISABLE_SSR } from '../../utils';
import { Button, Flex, Grid, Icon, Switch, Text } from '../index';
import {
  Menu,
  MenuDivider,
  MenuGroup,
  MenuGroupTitle,
  MenuItem,
  MenuProps,
  MenuTitle,
} from './index';

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
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'menu' },
      },
    },
    ...mapArgTypes(['justify', 'padding'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['size'], {
      control: { type: 'range', min: 100, max: 400, step: 1 },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['theme'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['active'], { table: { category: 'States' } }),
    ...mapArgTypes(['onClose'], { control: { disable: true }, table: { disable: true } }),
  },
} as Meta;

interface StoryProps extends Omit<MenuProps, 'size'> {
  size: number;
}

const Template: Story<StoryProps> = ({ size, ...args }) => (
  <>
    <Menu {...args} size={`${size}px`}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem>
        <Text>Another text</Text>
        <Icon name="ChevronRight" size="xs" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
    <Menu {...args} size={`${size}px`}>
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
        <Icon name="ChevronRight" size="xs" />
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
    <Menu {...args} size={`${size}px`}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem data-hover>
        <Text>Another text</Text>
        <Icon name="ChevronRight" size="xs" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
    <Menu {...args} size={`${size}px`}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem data-pressed>
        <Text>Another text</Text>
        <Icon name="ChevronRight" size="xs" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
    <Menu {...args} size={`${size}px`}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem active>
        <Text>Another text</Text>
        <Icon name="ChevronRight" size="xs" />
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text>Another one</Text>
      </MenuItem>
      <MenuItem>
        <Text>And one more</Text>
      </MenuItem>
    </Menu>
    <Menu {...args} size={`${size}px`}>
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem disabled>
        <Text>Another text</Text>
        <Icon name="ChevronRight" size="xs" />
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

const TemplateItems: Story<StoryProps> = (args) => (
  <>
    <Template {...args} />
    <Template {...args} theme="dark" />
  </>
);

const TemplateAlt: Story<StoryProps> = ({ size, ...args }) => (
  <>
    <Menu {...args} size={`${size}px`}>
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
    <Menu {...args} size={`${size}px`}>
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
    <Menu {...args} size={`${size}px`}>
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
    <Menu {...args} size={`${size}px`}>
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
    <Menu {...args} size={`${size}px`}>
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

const TemplateItemsAlt: Story<StoryProps> = (args) => (
  <>
    <TemplateAlt {...args} />
    <TemplateAlt {...args} theme="dark" />
  </>
);

const TemplateOverview: Story<StoryProps> = ({ size, ...args }) => (
  <>
    <Menu {...args} size="148px">
      <MenuItem>Text</MenuItem>
      <MenuItem>
        <Text truncate>Way loooooooooooooooooooooooooooong Text</Text>
      </MenuItem>
      <MenuItem>
        <Text>Another text</Text>
        <Icon name="ChevronRight" size="xs" />
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

    <Menu {...args} size="192px">
      <MenuGroup>
        <MenuGroupTitle>Group 1</MenuGroupTitle>
        <MenuItem as="label">
          <Switch appearance="radio" as="span" label="Option 1.1" name="foo" />
        </MenuItem>
        <MenuItem as="label">
          <Switch appearance="radio" as="span" label="Option 1.2" name="foo" defaultChecked />
        </MenuItem>
        <MenuItem as="label">
          <Switch appearance="radio" as="span" label="Option 1.3" name="foo" />
        </MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuGroupTitle>Group 2</MenuGroupTitle>
        <MenuItem as="label">
          <Switch appearance="checkbox" as="span" label="Option 2.1" name="moo" />
        </MenuItem>
        <MenuItem as="label">
          <Switch appearance="checkbox" as="span" label="Option 2.2" name="moo" defaultChecked />
        </MenuItem>
        <MenuItem as="label">
          <Switch appearance="checkbox" as="span" label="Option 2.3" name="moo" />
        </MenuItem>
      </MenuGroup>
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

const TemplateAccordion: Story<StoryProps> = (args) => {
  const [sectionActive, setSectionActive] = useState([true]);

  const toggleSection = useCallback((index: number) => {
    setSectionActive((value) => {
      const localValue = [...value];
      localValue[index] = !localValue[index];
      return localValue;
    });
  }, []);

  return (
    <>
      <Accordion>
        <Menu data-menu>
          <MenuInset>
            <Section className={sectionActive[0] ? 'is-active' : undefined}>
              <SectionTitle onClick={() => toggleSection(0)}>
                Section A
                <Icon name="ChevronRight" size="xs" />
              </SectionTitle>
              <div data-section="body">
                <MenuGroup>
                  <MenuGroupTitle variant="primary">Group A.1</MenuGroupTitle>
                  <MenuItem onClick={() => {}}>
                    <Text>Item A.1.1</Text>
                  </MenuItem>
                  <MenuItem onClick={() => {}}>Item A.2.1</MenuItem>
                  <MenuItem onClick={() => {}}>Item A.3.1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                  <MenuGroupTitle variant="primary">Group A.2</MenuGroupTitle>
                  <MenuItem onClick={() => {}}>
                    <Text truncate>Item A.2.1 w/ some suuuuuperlong title</Text>
                  </MenuItem>
                  <MenuItem onClick={() => {}}>Item A.2.2</MenuItem>
                </MenuGroup>
              </div>
            </Section>

            <Section className={sectionActive[1] ? 'is-active' : undefined}>
              <SectionTitle onClick={() => toggleSection(1)}>
                Section B
                <Icon name="ChevronRight" size="xs" />
              </SectionTitle>
              <div data-section="body">
                <MenuGroup>
                  <MenuGroupTitle variant="primary">Group B.1</MenuGroupTitle>
                  <MenuItem onClick={() => {}}>
                    <Text>Item B.1.1</Text>
                  </MenuItem>
                  <MenuItem onClick={() => {}}>Item B.2.1</MenuItem>
                  <MenuItem onClick={() => {}}>Item B.3.1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                  <MenuGroupTitle variant="primary">Group B.2</MenuGroupTitle>
                  <MenuItem onClick={() => {}}>
                    <Text truncate>Item B.2.1</Text>
                  </MenuItem>
                  <MenuItem onClick={() => {}}>Item B.2.2</MenuItem>
                </MenuGroup>
              </div>
            </Section>

            <Section className={sectionActive[2] ? 'is-active' : undefined}>
              <SectionTitle onClick={() => toggleSection(2)}>
                Section C
                <Icon name="ChevronRight" size="xs" />
              </SectionTitle>
              <div data-section="body">
                <MenuGroup>
                  <MenuGroupTitle variant="primary">Group C.1</MenuGroupTitle>
                  <MenuItem onClick={() => {}}>
                    <Text>Item C.1.1</Text>
                  </MenuItem>
                  <MenuItem onClick={() => {}}>Item C.2.1</MenuItem>
                  <MenuItem onClick={() => {}}>Item C.3.1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                  <MenuGroupTitle variant="primary">Group C.2</MenuGroupTitle>
                  <MenuItem onClick={() => {}}>
                    <Text truncate>Item C.2.1</Text>
                  </MenuItem>
                  <MenuItem onClick={() => {}}>Item C.2.2</MenuItem>
                </MenuGroup>
              </div>
            </Section>
          </MenuInset>
        </Menu>
      </Accordion>
    </>
  );
};

const enterAnimation = keyframes`
  0%    { opacity: 0; transform: translateY(8px); }
  100%  { opacity: 1; transform: translateY(0) }
`;

const Accordion = styled.div`
  --max-height: 80vh;

  min-width: 100%;

  [data-menu='true'] {
    max-width: 288px;
  }

  [data-menu='group'] {
    & > :first-child ${EMOTION_DISABLE_SSR} {
      margin-top: 0;
      padding-left: calc(3 * var(--indent));
    }
  }
`;

const MenuInset = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  max-height: var(--max-height);
  overflow-y: auto;
`;

const Section = styled.div`
  --icon-transform: rotateZ(calc(var(--icon-rotation) * 90deg));

  position: relative;

  [data-section='body'] {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  &.is-active {
    --icon-rotation: 1;

    [data-section='body'] {
      animation: ${enterAnimation} 0.3s ease-out 0.1s both;
      max-height: var(--max-height);
    }
  }
`;

const SectionTitle = styled(MenuGroupTitle)`
  cursor: pointer;
  gap: calc(2 * var(--gap));
  padding: var(--indent);

  &:is(*, #chucknorris) {
    margin: 0;
  }

  [data-icon] {
    flex-shrink: 0;
    transform: var(--icon-transform);
    transition: transform 0.3s ease-in-out;
    will-change: transform;
  }
`;

export const Overview = TemplateOverview.bind({});
Overview.args = {
  size: Infinity,
};
Overview.decorators = [
  ...decorators,
  (Story) => (
    <Flex align="start" gap="1em" justify="start" wrap>
      <Story />
    </Flex>
  ),
];

export const Items = TemplateItems.bind({});
Items.args = {
  size: 148,
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
  size: 240,
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

export const MenuAccordion = TemplateAccordion.bind({});
MenuAccordion.storyName = 'Accordion';
MenuAccordion.decorators = [...decorators, (Story) => <Story />];
