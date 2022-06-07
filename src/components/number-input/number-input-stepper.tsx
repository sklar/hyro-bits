/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode } from 'react';

import { Button } from '../button';
import { Icon } from '../icon';
import { stepperContainer } from './number-input.styles';

export interface NumberInputStepperContainerProps {
  children: ReactNode;
}

export interface NumberInputStepperProps {
  disabled?: boolean;
  onChange: () => void;
}

export const Stepper: React.FC<NumberInputStepperContainerProps> = (props) => (
  <div css={stepperContainer} data-stepper {...props} />
);

export const IncrementStepper: React.VFC<NumberInputStepperProps> = ({
  disabled = false,
  onChange,
}) => (
  <Button
    icon={<Icon name="ChevronDown" size="xs" />}
    synthetic
    tabIndex={-1}
    disabled={disabled}
    data-qa="number-input-step-increment"
    onClick={onChange}
  />
);

export const DecrementStepper: React.VFC<NumberInputStepperProps> = ({
  disabled = false,
  onChange,
}) => (
  <Button
    icon={<Icon name="ChevronDown" size="xs" />}
    synthetic
    tabIndex={-1}
    disabled={disabled}
    data-qa="number-input-step-decrement"
    onClick={onChange}
  />
);

export const NumberInputStepperComponents = {
  Stepper,
  IncrementStepper,
  DecrementStepper,
};
