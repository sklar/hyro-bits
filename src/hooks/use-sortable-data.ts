import { useMemo, useState } from 'react';

import { Direction } from '../utils/constants';
import { DirectionType } from '../utils/types';

const DIRECTIONS = Object.values(Direction);

function* repeatArray<T>(val: T, arr: T[]): IterableIterator<T> {
  let index = val ? arr.indexOf(val) : 0;
  while (true) {
    yield arr[++index % arr.length];
  }
}

type ItemsType = Record<string, string>[];
type ConfigType = { key: string; direction: DirectionType } | null;

export const useSortableData = (items: ItemsType, config: ConfigType = null) => {
  const [sortKey, setSortKey] = useState(config?.key);
  const [sortConfig, setSortConfig] = useState<ConfigType>(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null && sortConfig?.direction !== Direction.NONE) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === Direction.ASCENDING ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === Direction.ASCENDING ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    const start = sortConfig === null || sortKey !== key ? Direction.NONE : sortConfig?.direction;
    const directionGen = repeatArray(start, DIRECTIONS);
    const direction = directionGen.next().value;

    setSortKey(key);
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
