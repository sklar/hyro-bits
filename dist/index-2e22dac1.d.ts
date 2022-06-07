declare const Direction: {
    readonly NONE: "None";
    readonly ASCENDING: "Asc";
    readonly DESCENDING: "Desc";
};
declare const Size: {
    readonly XSMALL: "xs";
    readonly SMALL: "sm";
    readonly MEDIUM: "md";
    readonly LARGE: "lg";
    readonly XLARGE: "xl";
};
declare const Theme: {
    readonly NOTICE: "notice";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly DARK: "dark";
};
declare const Variant: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
};

declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
declare type Values<T> = T[keyof T];
declare type AlignmentPrimaryType = 'inherit' | 'normal' | 'start' | 'center' | 'end';
declare type AlignmentSecondaryType = 'inherit' | 'normal' | 'baseline' | 'start' | 'center' | 'end';
declare type AlignmentTertiaryType = 'space-around' | 'space-between' | 'space-evenly';
declare type AlignmentFlexboxType = 'flex-start' | 'flex-end';
declare type DirectionType = Values<typeof Direction>;
declare type SizeType = Values<typeof Size>;
declare type ThemeType = Values<typeof Theme>;
declare type VariantType = Values<typeof Variant>;
interface InternalHTMLAttributes {
    'data-active'?: boolean;
    'data-hover'?: boolean;
    'data-invalid'?: boolean;
    'data-qa'?: string;
}

export { AlignmentPrimaryType as A, DirectionType as D, InternalHTMLAttributes as I, PartialBy as P, SizeType as S, ThemeType as T, VariantType as V, AlignmentTertiaryType as a, AlignmentFlexboxType as b, AlignmentSecondaryType as c, Values as d };
