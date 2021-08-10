import {
  ChangeEventHandler,
  Dispatch,
  FocusEventHandler,
  KeyboardEvent,
  useCallback,
  useMemo,
} from 'react';
import { useDependantState, useUpdatedRef } from '@spicy-hooks/core';

function countDecimals(number: number): number {
  if (Math.floor(number) === number) {
    return 0;
  }
  return number.toString().split('.')[1].length || 0;
}

function roundToDecimal(number: number, decimals: number): number {
  return Number(number.toFixed(decimals));
}

function parseValue(
  rawValue: string,
  minValue: number,
  maxValue: number,
  decimals: number
): number | null {
  const value = parseFloat(rawValue);
  if (isNaN(value)) {
    return null;
  }

  const roundedValue = roundToDecimal(value, decimals);
  if (roundedValue < minValue || roundedValue > maxValue || countDecimals(value) > decimals) {
    return null;
  }

  return roundedValue;
}

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

export function useNumberInput({
  decimals = 0,
  format = (arg) => arg,
  max = Infinity,
  min = -Infinity,
  onBlur,
  onChange,
  onChangeValue,
  step = 1,
  value,
}: Options) {
  const [interimInputValue, setInterimInputValue] = useDependantState(
    () => format(value != null ? String(value) : ''),
    [value]
  );

  const valueRef = useUpdatedRef(value);

  const handleInputBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setInterimInputValue(format(String(valueRef.current ?? '')));
      onBlur?.(event);
    },
    [format, onBlur, setInterimInputValue, valueRef]
  );

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const rawValue = event.target.value;
      setInterimInputValue(rawValue);

      const value = parseValue(rawValue, min, max, decimals);
      if (value != null) {
        onChangeValue(value);
      }
      onChange?.(event);
    },
    [decimals, max, min, onChange, onChangeValue, setInterimInputValue]
  );

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = useCallback((event) => {
    event.target.select();
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key, target, shiftKey } = event;
      const value = parseValue((target as HTMLInputElement).value, min, max, decimals);
      const diff = shiftKey ? step * 10 : step;

      if (value == null) return;
      if (key === 'ArrowDown') {
        event.preventDefault();
        onChangeValue(roundToDecimal(Math.max(value - diff, min), decimals));
      }
      if (key === 'ArrowUp') {
        event.preventDefault();
        onChangeValue(roundToDecimal(Math.min(value + diff, max), decimals));
      }
    },
    [decimals, max, min, onChangeValue, step]
  );

  const handleIncrement = useCallback(() => {
    const value = valueRef.current;

    if (value == null) return;

    onChangeValue(roundToDecimal(Math.min(value + step, max), decimals));
  }, [decimals, max, onChangeValue, step, valueRef]);

  const handleDecrement = useCallback(() => {
    const value = valueRef.current;

    if (value == null) return;

    onChangeValue(roundToDecimal(Math.max(value - step, min), decimals));
  }, [decimals, min, onChangeValue, step, valueRef]);

  const isInterimValueValid = useMemo(
    () => parseValue(interimInputValue, min, max, decimals) != null,
    [decimals, interimInputValue, max, min]
  );

  return {
    handleDecrement,
    handleIncrement,
    handleInputBlur,
    handleInputChange,
    handleInputFocus,
    handleKeyDown,
    interimInputValue,
    isInterimValueValid,
  };
}
