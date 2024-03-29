import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import data from '../../data/table.json';
import { useSortableData } from '../../hooks/use-sortable-data';
import { Container, mapArgTypes } from '../../stories';
import { ThemeType } from '../../types';
import { Button } from '../button';
import { Divider } from '../divider';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { Status } from '../status';
import { Table, TableProps, Tbody, Td, Th, Thead, Tr } from '../table';
import { Text } from '../text';

export default {
  title: 'Components/Table',
  component: Table,
  decorators: [
    (Story) => (
      <Container resize="vertical">
        <Story />
      </Container>
    ),
    withDesign,
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A4585',
    },
  },
  argTypes: {
    children: {
      control: { disable: true },
      table: { disable: true },
    },
    ...mapArgTypes(['layout'], {
      control: { type: 'inline-radio' },
    }),
    records: {
      control: { disable: true },
      table: { disable: true },
    },
  },
} as Meta;

type StatusType = 'Error' | 'Processing' | 'Ready';

const getThemeByStatus = (status: StatusType): string => {
  const themes = {
    Error: 'danger',
    Processing: 'warning',
    Ready: 'success',
  };
  return themes[status] || '';
};

interface StoryProps extends TableProps {
  records: Record<string, string>[];
}

const Template: Story<StoryProps> = ({ layout, records, size, sticky }) => {
  const { items, requestSort, sortConfig } = useSortableData(records);
  return (
    <Table layout={layout} size={size} sticky={sticky}>
      <Thead>
        <Tr>
          <Th
            icon={<Icon name="Book" />}
            direction={sortConfig?.key === 'title' ? sortConfig?.direction : undefined}
            onClick={() => requestSort('title')}
            sortable
          >
            Title
          </Th>
          <Th
            icon={<Icon name="HeartbeatSquare" />}
            direction={sortConfig?.key === 'status' ? sortConfig?.direction : undefined}
            onClick={() => requestSort('status')}
            size="15ch"
            sortable
          >
            Status
          </Th>
          <Th
            icon={<Icon name="Users" />}
            direction={sortConfig?.key === 'owner' ? sortConfig?.direction : undefined}
            onClick={() => requestSort('owner')}
            sortable
          >
            Owner
          </Th>
          <Th icon={<Icon name="Calendar" />} size="12ch">
            Created
          </Th>
          <Th icon={<Icon name="Calendar" />} size="12ch">
            Updated
          </Th>
          <Th size="12ch"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map(({ title, status, owner, created, updated }, index) => {
          const theme = getThemeByStatus(status as StatusType) as Exclude<ThemeType, 'dark'>;
          return (
            <Tr key={index} mute={status !== 'Ready'}>
              <Td>
                <Text clamp={1}>{title}</Text>
              </Td>
              <Td>
                <Status text={status} theme={theme} />
              </Td>
              <Td>{owner}</Td>
              <Td>{created}</Td>
              <Td>{updated}</Td>
              <Td justify="end">
                <Flex gap="4px">
                  <Button icon={<Icon name="GlobeRefresh" size="md" />} variant="tertiary" />
                  <Divider space="8px" />
                  <Button
                    icon={<Icon name="PlayCircle" size="md" />}
                    variant="tertiary"
                    disabled={status !== 'Ready'}
                  />
                </Flex>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export const TableOverview = Template.bind({});
TableOverview.args = {
  records: [...data.records].map((record) => record.fields),
};
TableOverview.storyName = 'Table';
