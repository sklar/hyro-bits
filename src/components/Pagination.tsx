import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes, useCallback } from 'react';

import { Button } from './Button';
import { Icon } from './Icon';
import { Flex } from './layout';
import { SPACER, usePagination } from './use-pagination';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Current page
   */
  page: number;
  /**
   * Page size
   */
  offset: number;
  /**
   * Total pages count
   */
  count: number;

  /**
   * Number of always visible pages before and after the current page
   */
  siblingCount?: number;
  /**
   * Number of always visible pages at the beginning and end
   */
  boundaryCount?: number;

  /**
   * Event: Change page
   */
  onChange: (page: number) => void;
}

/**
 * Pagination
 */
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ boundaryCount, count, offset, onChange, page, siblingCount, ...props }, ref): JSX.Element => {
    const qa = {
      'data-qa': `pagination`,
    };

    const { range, prevPageActive, nextPageActive } = usePagination({
      boundaryCount,
      count,
      offset,
      page,
      siblingCount,
    });

    const handleNextPage = useCallback(() => {
      onChange(page + 1);
    }, [onChange, page]);
    const handlePrevPage = useCallback(() => {
      onChange(page - 1);
    }, [onChange, page]);

    return (
      <Container block align="center" gap="8px" justify="center" ref={ref} {...qa} {...props}>
        <Button
          icon={<Icon name="ArrowAltLeft" />}
          variant="tertiary"
          size="lg"
          synthetic
          disabled={!prevPageActive}
          onClick={handlePrevPage}
        />
        {range &&
          range.map((p, index) => {
            return p === SPACER ? (
              <Spacer key={index}>{SPACER}</Spacer>
            ) : (
              <Button
                key={index}
                text={`${p}`}
                variant="tertiary"
                size="lg"
                synthetic={p !== page}
                active={p === page}
                onClick={() => onChange(p as number)}
              />
            );
          })}
        <Button
          icon={<Icon name="ArrowAltRight" />}
          variant="tertiary"
          size="lg"
          synthetic
          disabled={!nextPageActive}
          onClick={handleNextPage}
        />
      </Container>
    );
  }
);

const item = css`
  --size: 40px;

  height: var(--size);
  padding: 0;
  width: var(--size);
`;

const Container = styled(Flex)`
  user-select: none;

  button {
    ${item};
  }
`;

const Spacer = styled.span`
  ${item};

  display: inline-grid;
  place-items: center;
  white-space: nowrap;
`;
