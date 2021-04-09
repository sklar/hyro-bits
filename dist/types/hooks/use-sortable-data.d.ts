import { DirectionType } from '../utils/types';
declare type ItemsType = Record<string, string>[];
declare type ConfigType = {
    key: string;
    direction: DirectionType;
} | null;
export declare const useSortableData: (items: ItemsType, config?: ConfigType) => {
    items: Record<string, string>[];
    requestSort: (key: string) => void;
    sortConfig: ConfigType;
};
export {};
//# sourceMappingURL=use-sortable-data.d.ts.map