import React, { HTMLAttributes } from 'react';
export interface PaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
export declare const Pagination: React.FC<PaginationProps>;
//# sourceMappingURL=Pagination.d.ts.map