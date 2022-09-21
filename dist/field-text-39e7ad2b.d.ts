import React__default, { HTMLAttributes } from 'react';
import { F as FlexProps } from './flex-bfbe6ff8.js';
import { T as ThemeType } from './index-2e22dac1.js';

interface FieldProps extends FlexProps {
    /**
     * Compact
     */
    compact?: boolean;
}
declare const Field: React__default.FC<FieldProps>;

/**
 * Field text
 */
interface FieldHintProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
}
declare const FieldHint: React__default.VFC<FieldHintProps>;

declare const FieldLabel: React__default.FC<FlexProps>;

declare type FieldMessageTheme = Exclude<ThemeType, 'dark' | 'warning'>;
interface FieldMessageProps extends FlexProps {
    theme?: FieldMessageTheme;
}
declare const FieldMessage: React__default.FC<FieldMessageProps>;

/**
 * Field text
 */
interface FieldTextProps extends HTMLAttributes<HTMLDivElement> {
    secondary?: boolean;
}
declare const FieldText: React__default.FC<FieldTextProps>;

export { Field as F, FieldProps as a, FieldHint as b, FieldLabel as c, FieldMessage as d, FieldMessageProps as e, FieldText as f };
