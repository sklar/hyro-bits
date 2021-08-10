import { Dispatch } from 'react';
import { InputProps } from './Input';
export interface NumberInputProps extends InputProps {
    /**
     * Value
     */
    value: number;
    /**
     * Min value
     */
    min?: number;
    /**
     * Max value
     */
    max?: number;
    /**
     * Step
     */
    step?: number;
    /**
     * Decimal places
     */
    decimals?: number;
    /**
     * Format
     */
    format?: (arg: string) => string;
    /**
     * Controls
     */
    controls?: boolean;
    /**
     * Event: Change value
     */
    onChangeValue: Dispatch<number>;
}
/**
 * Number input
 */
export declare const NumberInput: import("react").ForwardRefExoticComponent<NumberInputProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=NumberInput.d.ts.map