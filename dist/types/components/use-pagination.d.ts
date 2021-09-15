export declare const SPACER = "...";
export interface Options {
    boundaryCount?: number;
    count: number;
    offset: number;
    page: number;
    siblingCount?: number;
}
export declare const usePagination: ({ boundaryCount, count, offset, page, siblingCount, }: Options) => {
    range: (number | "...")[];
    prevPageActive: boolean;
    nextPageActive: boolean | undefined;
};
//# sourceMappingURL=use-pagination.d.ts.map