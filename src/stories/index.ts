import { ArgTypes } from '@storybook/react/types-6-0';

export const mapArgTypes = (types: string[], args: ArgTypes): ArgTypes => {
  return types.reduce((acc: Record<string, ArgTypes>, value) => {
    return { ...acc, [value]: args };
  }, {});
};

export * from './Color';
export * from './Divider';
export * from './Legend';
