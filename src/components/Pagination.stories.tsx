import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useMemo, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';

import data from '../data/pagination.json';
import { mapArgTypes } from '../stories';
import { Pagination as Component, PaginationProps, Table, Tr } from './index';

export default {
  title: 'Components/Pagination',
  component: Component,
  decorators: [(Story) => <Story />, withDesign],
  parameters: {
    controls: { hideNoControlsWarning: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A4585',
    },
  },
  args: {
    boundaryCount: 1,
    offset: 5,
    records: data,
    siblingCount: 1,
  },
  argTypes: {
    ...mapArgTypes(['records'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['page', 'offset', 'count'], {}),
    ...mapArgTypes(['page', 'count'], {
      control: { disable: true },
    }),
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pagination' },
      },
    },
    ...mapArgTypes(['boundaryCount'], {
      table: {
        category: 'Modifiers',
        defaultValue: { summary: 2 },
      },
    }),
    ...mapArgTypes(['siblingCount'], {
      table: { category: 'Modifiers', defaultValue: { summary: 1 } },
    }),
    ...mapArgTypes(['onChange'], {
      table: { category: 'Events' },
    }),
  },
} as Meta;

interface StoryProps extends PaginationProps {
  records: Record<string, string>[];
}

const Template: Story<StoryProps> = ({
  boundaryCount,
  offset,
  records,
  siblingCount,
  ...props
}) => {
  const [page, setPage] = useState(1);
  const rows = useMemo(() => {
    const firstPageIndex = (page - 1) * offset;
    const lastPageIndex = firstPageIndex + offset;

    return records.slice(firstPageIndex, lastPageIndex);
  }, [page, offset, records]);

  return (
    <>
      <Component
        {...props}
        page={page}
        count={records.length}
        offset={offset}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        onChange={(page) => setPage(page)}
        style={{ marginBlock: 16 }}
      />
      <Table>
        <tbody>
          {rows.map(({ id, firstname, lastname, email, location }, index) => {
            return (
              <Tr key={index}>
                <td>{id}</td>
                <td>{lastname}</td>
                <td>{firstname}</td>
                <td>{email}</td>
                <td>{location.split(',').reverse().join(', ')}</td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export const Pagination = Template.bind({});
