import * as React$1 from 'react';
import { ReactNode, Dispatch, FocusEventHandler, ChangeEventHandler, KeyboardEvent } from 'react';
import { a as InputProps } from '../../input-9436dd9e';
import * as _emotion_react from '@emotion/react';
import '../../index-2e22dac1';

interface NumberInputStepperContainerProps {
    children: ReactNode;
}
interface NumberInputStepperProps {
    disabled?: boolean;
    onChange: () => void;
}
declare const Stepper: React.FC<NumberInputStepperContainerProps>;
declare const IncrementStepper: React.VFC<NumberInputStepperProps>;
declare const DecrementStepper: React.VFC<NumberInputStepperProps>;
declare const NumberInputStepperComponents: {
    Stepper: React$1.FC<NumberInputStepperContainerProps>;
    IncrementStepper: React$1.VFC<NumberInputStepperProps>;
    DecrementStepper: React$1.VFC<NumberInputStepperProps>;
};

interface NumberInputProps extends InputProps {
    /**
     * Value
     */
    value?: number;
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
     * @deprecated
     */
    format?: (arg: string) => string;
    /**
     * Stepper
     */
    stepper?: boolean;
    /**
     * Custom omponents
     */
    components?: Partial<typeof NumberInputStepperComponents>;
    /**
     * Event: Change value
     */
    onChangeValue: Dispatch<number>;
}
/**
 * Number input
 */
declare const NumberInput: React$1.ForwardRefExoticComponent<NumberInputProps & React$1.RefAttributes<HTMLInputElement>>;

interface Options {
    decimals?: number;
    format?: (arg: string) => string;
    max?: number;
    min?: number;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onChangeValue: Dispatch<number>;
    step?: number;
    value?: number;
}
declare function useNumberInput({ decimals, format, max, min, onBlur, onChange, onChangeValue, step, value, }: Options): {
    handleDecrement: () => void;
    handleIncrement: () => void;
    handleInputBlur: FocusEventHandler<HTMLInputElement>;
    handleInputChange: ChangeEventHandler<HTMLInputElement>;
    handleInputFocus: FocusEventHandler<HTMLInputElement>;
    handleKeyDown: (event: KeyboardEvent) => void;
    interimInputValue: string;
    isInterimValueValid: boolean;
};

declare const input: _emotion_react.SerializedStyles;
declare const stepperContainer: _emotion_react.SerializedStyles;

export { DecrementStepper, IncrementStepper, NumberInput, NumberInputProps, NumberInputStepperComponents, NumberInputStepperContainerProps, NumberInputStepperProps, Options, Stepper, input, stepperContainer, useNumberInput };
