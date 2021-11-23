import { Direction, Size, Theme, Variant } from './constants';

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Values<T> = T[keyof T];

export type AlignmentPrimaryType = 'inherit' | 'normal' | 'start' | 'center' | 'end';

export type AlignmentSecondaryType = 'inherit' | 'normal' | 'baseline' | 'start' | 'center' | 'end';

export type AlignmentTertiaryType = 'space-around' | 'space-between' | 'space-evenly';

export type AlignmentFlexboxType = 'flex-start' | 'flex-end';

export type DirectionType = Values<typeof Direction>;

export type SizeType = Values<typeof Size>;

export type ThemeType = Values<typeof Theme>;

export type VariantType = Values<typeof Variant>;

export interface InternalHTMLAttributes {
  'data-active'?: boolean;
  'data-hover'?: boolean;
  'data-invalid'?: boolean;
  'data-qa'?: string;
}
