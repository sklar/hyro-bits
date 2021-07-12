import {
  ChangeEventHandler,
  Dispatch,
  FocusEventHandler,
  KeyboardEvent,
  useCallback,
  useMemo,
} from 'react';
import { useDependantState, useUpdatedRef } from '@spicy-hooks/core';

function parseValue(rawValue: string, minValue: number, maxValue: number): number | null {
  const value = parseInt(rawValue, 10);
  if (isNaN(value) || value < minValue || value > maxValue) {
    return null;
  }
  return value;
}

export interface Options {
  format?: (arg: string) => string;
  max?: number;
  min?: number;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onChangeValue: Dispatch<number>;
  value?: number;
}

export function useNumberInput({
  format = (arg) => arg,
  max = Infinity,
  min = -Infinity,
  onBlur,
  onChange,
  onChangeValue,
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

      const value = parseValue(rawValue, min, max);
      if (value != null) {
        onChangeValue(value);
      }
      onChange?.(event);
    },
    [max, min, onChange, onChangeValue, setInterimInputValue]
  );

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = useCallback((event) => {
    event.target.select();
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key, target, shiftKey } = event;
      const value = parseValue((target as HTMLInputElement).value, min, max);

      if (value == null) return;
      if (key === 'ArrowDown') {
        event.preventDefault();
        onChangeValue(Math.max(shiftKey ? value - 10 : value - 1, min));
      }
      if (key === 'ArrowUp') {
        event.preventDefault();
        onChangeValue(Math.min(shiftKey ? value + 10 : value + 1, max));
      }
    },
    [max, min, onChangeValue]
  );

  const handleIncrement = useCallback(() => {
    const value = valueRef.current;

    if (value == null) return;

    onChangeValue(Math.min(value + 1, max));
  }, [max, onChangeValue, valueRef]);

  const handleDecrement = useCallback(() => {
    const value = valueRef.current;

    if (value == null) return;

    onChangeValue(Math.max(value - 1, min));
  }, [min, onChangeValue, valueRef]);

  const isInterimValueValid = useMemo(() => parseValue(interimInputValue, min, max) != null, [
    interimInputValue,
    max,
    min,
  ]);

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
