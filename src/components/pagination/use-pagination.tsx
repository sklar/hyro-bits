import { useMemo } from 'react';

export const SPACER = '...';

const createRange = (start: number, stop: number, step = 1): number[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export interface Options {
  boundaryCount?: number;
  count: number;
  offset: number;
  page: number;
  siblingCount?: number;
}

export const usePagination = ({
  boundaryCount = 1,
  count,
  offset,
  page,
  siblingCount = 1,
}: Options) => {
  const range = useMemo<(number | typeof SPACER)[]>(() => {
    const totalPageCount = Math.ceil(count / offset);
    const totalPageNumbers = 2 * (boundaryCount + siblingCount) + 3; // page + 2 * SPACER = 3

    if (totalPageNumbers >= totalPageCount) {
      return createRange(1, totalPageCount);
    }

    const leadSiblingIndex = Math.max(page - siblingCount, 1);
    const trailSiblingIndex = Math.min(page + siblingCount, totalPageCount);

    /**
     * Do not show dots if there is only one position left after/before the leader/trailer
     *  page count as that would lead to a layout shift.
     */
    const showLeadingSpacer = leadSiblingIndex > 1 + (boundaryCount + siblingCount);
    const showTrailingSpacer = trailSiblingIndex < totalPageCount - (boundaryCount + siblingCount);

    const itemCount = 2 + boundaryCount + 2 * siblingCount;

    if (!showLeadingSpacer && showTrailingSpacer) {
      const leadRange = createRange(1, itemCount);
      const trailRange = createRange(totalPageCount - boundaryCount + 1, totalPageCount);
      return [...leadRange, SPACER, ...trailRange];
    } else if (showLeadingSpacer && !showTrailingSpacer) {
      const leadRange = createRange(1, boundaryCount);
      const trailRange = createRange(totalPageCount - itemCount + 1, totalPageCount);
      return [...leadRange, SPACER, ...trailRange];
    } else {
      const leadRange = createRange(1, boundaryCount);
      const middleRange = createRange(leadSiblingIndex, trailSiblingIndex);
      const trailRange = createRange(totalPageCount - boundaryCount + 1, totalPageCount);
      return [...leadRange, SPACER, ...middleRange, SPACER, ...trailRange];
    }
  }, [boundaryCount, count, offset, page, siblingCount]);

  const prevPageActive = useMemo<boolean>(() => {
    return page > 1;
  }, [page]);

  const nextPageActive = useMemo<boolean | undefined>(() => {
    if (range) {
      return page < range[range.length - 1];
    }
  }, [page, range]);

  return { range, prevPageActive, nextPageActive };
};
