/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Dispatch, forwardRef } from 'react';

import { Input, InputProps } from '../input';
import { NumberInputStepperComponents } from './number-input-stepper';
import { input } from './number-input.styles';
import { useNumberInput } from './use-number-input';

export interface NumberInputProps extends InputProps {
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
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      decimals,
      format,
      max = Infinity,
      min = -Infinity,
      onBlur,
      onChange,
      onChangeValue,
      step,
      stepper = false,
      trailer,
      value,
      ...rest
    },
    ref
  ): JSX.Element => {
    const components = {
      ...NumberInputStepperComponents,
      ...rest.components,
    };
    const {
      handleDecrement,
      handleIncrement,
      handleInputBlur,
      handleInputChange,
      handleInputFocus,
      handleKeyDown,
      interimInputValue,
      isInterimValueValid,
    } = useNumberInput({
      decimals,
      format,
      max,
      min,
      onBlur,
      onChange,
      onChangeValue,
      step,
      value,
    });

    const qa = {
      'data-qa': 'input-number',
    };

    return (
      <div>
        <Input
          {...qa}
          {...rest}
          ref={ref}
          type={format ? 'text' : 'number'}
          value={interimInputValue}
          min={min}
          max={max}
          css={input}
          invalid={!isInterimValueValid}
          trailer={
            stepper ? (
              <components.Stepper>
                <components.IncrementStepper
                  disabled={value ? value >= max : false}
                  onChange={handleIncrement}
                />
                <components.DecrementStepper
                  disabled={value ? value <= min : false}
                  onChange={handleDecrement}
                />
              </components.Stepper>
            ) : (
              trailer
            )
          }
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }
);
