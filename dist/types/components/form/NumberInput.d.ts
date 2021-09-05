import { Dispatch } from 'react';
import { InputProps } from './Input';
export interface NumberInputStepperProps {
    disabled?: boolean;
    onChange: () => void;
}
declare const Components: {
    Stepper: import("react").FC<{}>;
    IncrementStepper: import("react").VFC<NumberInputStepperProps>;
    DecrementStepper: import("react").VFC<NumberInputStepperProps>;
};
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
     * FIXME: Implement format correclty or drop it.
     */
    format?: (arg: string) => string;
    /**
     * Stepper
     */
    stepper?: boolean;
    /**
     * Custom omponents
     */
    components?: Partial<typeof Components>;
    /**
     * Event: Change value
     */
    onChangeValue: Dispatch<number>;
}
/**
 * Number input
 */
export declare const NumberInput: import("react").ForwardRefExoticComponent<NumberInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=NumberInput.d.ts.map