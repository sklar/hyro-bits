/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Dispatch, forwardRef, Fragment } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Input, InputProps } from './Input';
import { useNumberInput } from './use-number-input';

export interface NumberInputStepperProps {
  disabled?: boolean;
  onChange: () => void;
}

const Stepper: React.FC = (props) => <StepperContainer data-stepper {...props} />;

const IncrementStepper: React.VFC<NumberInputStepperProps> = ({ disabled = false, onChange }) => (
  <Button
    icon={<Icon name="ChevronDown" size="xs" />}
    synthetic
    tabIndex={-1}
    disabled={disabled}
    data-qa="number-input-step-increment"
    onClick={onChange}
  />
);

const DecrementStepper: React.VFC<NumberInputStepperProps> = ({ disabled = false, onChange }) => (
  <Button
    icon={<Icon name="ChevronDown" size="xs" />}
    synthetic
    tabIndex={-1}
    disabled={disabled}
    data-qa="number-input-step-decrement"
    onClick={onChange}
  />
);

const Components = {
  Stepper,
  IncrementStepper,
  DecrementStepper,
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
      value,
      ...rest
    },
    ref
  ): JSX.Element => {
    const components = {
      ...Components,
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
          invalid={!isInterimValueValid}
          css={input}
          trailer={
            <Fragment>
              {stepper && (
                <components.Stepper>
                  <components.IncrementStepper disabled={value >= max} onChange={handleIncrement} />
                  <components.DecrementStepper disabled={value <= min} onChange={handleDecrement} />
                </components.Stepper>
              )}
            </Fragment>
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

const input = css`
  input {
    appearance: textfield;
    font-variant-numeric: tabular-nums;
    text-align: right;
  }
`;

const StepperContainer = styled.div`
  --gap: 1px;

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  height: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

  button {
    --button-radius: 2px;

    border-bottom-right-radius: calc(2 * var(--button-radius));
    flex: 1;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));

    &:first-of-type {
      transform: rotateX(180deg);
    }
  }
`;
