import React, { HTMLAttributes } from 'react';
import { ThemeType } from '../../utils';
import { FlexProps } from '../layout';
/**
 * Field label
 */
export declare const FieldLabel: React.FC<FlexProps>;
/**
 * Field text
 */
interface FieldTextProps extends HTMLAttributes<HTMLDivElement> {
    secondary?: boolean;
}
export declare const FieldText: React.FC<FieldTextProps>;
/**
 * Field message
 */
declare type FieldMessageTheme = Exclude<ThemeType, 'dark' | 'warning'>;
export interface FieldMessageProps extends FlexProps {
    theme?: FieldMessageTheme;
}
export declare const FieldMessage: React.FC<FieldMessageProps>;
/**
 * Field
 */
export interface FieldProps extends FlexProps {
    /**
     * Compact
     */
    compact?: boolean;
}
export declare const Field: React.FC<FieldProps>;
export {};
//# sourceMappingURL=Field.d.ts.map