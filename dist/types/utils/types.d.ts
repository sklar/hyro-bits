import { Direction, Size, Theme, Variant } from './constants';
export declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare type Values<T> = T[keyof T];
export declare type AlignmentPrimaryType = 'inherit' | 'normal' | 'start' | 'center' | 'end';
export declare type AlignmentSecondaryType = 'inherit' | 'normal' | 'baseline' | 'start' | 'center' | 'end';
export declare type AlignmentTertiaryType = 'space-around' | 'space-between' | 'space-evenly';
export declare type AlignmentFlexboxType = 'flex-start' | 'flex-end';
export declare type DirectionType = Values<typeof Direction>;
export declare type SizeType = Values<typeof Size>;
export declare type ThemeType = Values<typeof Theme>;
export declare type VariantType = Values<typeof Variant>;
export interface InternalHTMLAttributes {
    'data-active'?: boolean;
    'data-hover'?: boolean;
    'data-invalid'?: boolean;
    'data-qa'?: string;
}
//# sourceMappingURL=types.d.ts.map