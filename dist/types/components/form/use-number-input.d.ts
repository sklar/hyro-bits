import { ChangeEventHandler, Dispatch, FocusEventHandler, KeyboardEvent } from 'react';
export interface Options {
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
export declare function useNumberInput({ decimals, format, max, min, onBlur, onChange, onChangeValue, step, value, }: Options): {
    handleDecrement: () => void;
    handleIncrement: () => void;
    handleInputBlur: (event: import("react").FocusEvent<HTMLInputElement>) => void;
    handleInputChange: (event: import("react").ChangeEvent<HTMLInputElement>) => void;
    handleInputFocus: (event: import("react").FocusEvent<HTMLInputElement>) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    interimInputValue: string;
    isInterimValueValid: boolean;
};
//# sourceMappingURL=use-number-input.d.ts.map