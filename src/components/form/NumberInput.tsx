/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Dispatch, forwardRef, Fragment } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Input, InputProps } from './Input';
import { useNumberInput } from './use-number-input';

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
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      controls = false,
      decimals,
      format,
      max = Infinity,
      min = -Infinity,
      onBlur,
      onChange,
      onChangeValue,
      step,
      value,
      ...rest
    },
    ref
  ): JSX.Element => {
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

    return (
      <Input
        ref={ref}
        type={format ? 'text' : 'number'}
        value={interimInputValue}
        min={min}
        max={max}
        invalid={!isInterimValueValid}
        css={input}
        trailer={
          <Fragment>
            {controls && (
              <Controls>
                <Button
                  icon={<Icon name="ChevronDown" size="xs" />}
                  synthetic
                  tabIndex={-1}
                  disabled={value >= max}
                  onClick={handleIncrement}
                />
                <Button
                  icon={<Icon name="ChevronDown" size="xs" />}
                  synthetic
                  tabIndex={-1}
                  disabled={value <= min}
                  onClick={handleDecrement}
                />
              </Controls>
            )}
          </Fragment>
        }
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    );
  }
);

const input = css`
  input {
    font-variant-numeric: tabular-nums;
    text-align: right;
  }
`;

const Controls = styled.div`
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
