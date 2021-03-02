import { ElementSize, ElementTheme, ElementVariant } from './constants';

export type Values<T> = T[keyof T];

export type Alignment = 'inherit' | 'stretch' | 'start' | 'center' | 'end';

export type FlexAlignment = 'inherit' | 'stretch' | 'flex-start' | 'center' | 'flex-end';

export type Size = Values<typeof ElementSize>;

export type Theme = Values<typeof ElementTheme>;

export type Variant = Values<typeof ElementVariant>;
