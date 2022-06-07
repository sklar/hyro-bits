import React__default, { HTMLAttributes } from 'react';
import * as _emotion_react from '@emotion/react';

interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
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
declare const Pagination: React__default.ForwardRefExoticComponent<PaginationProps & React__default.RefAttributes<HTMLDivElement>>;

declare const SPACER = "...";
interface Options {
    boundaryCount?: number;
    count: number;
    offset: number;
    page: number;
    siblingCount?: number;
}
declare const usePagination: ({ boundaryCount, count, offset, page, siblingCount, }: Options) => {
    range: (number | "...")[];
    prevPageActive: boolean;
    nextPageActive: boolean | undefined;
};

declare const item: _emotion_react.SerializedStyles;
declare const spacer: _emotion_react.SerializedStyles;
declare const pagination: _emotion_react.SerializedStyles;

export { Options, Pagination, PaginationProps, SPACER, item, pagination, spacer, usePagination };
