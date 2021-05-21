import React from 'react';
import { colors } from '../../theme';
import { Range as RcRange, RangeProps as RcRangeProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './slider.css';

export interface RangeProps extends RcRangeProps {}

/**
 * Powered by `rc-slider`. For whole API and examples visit https://slider-react-component.vercel.app
 */
export const Range: React.FC<RangeProps> = ({ ...props }): JSX.Element => (
  <RcRange
    {...props}
    className={`purplex-slider${props.className ? ` ${props.className}` : ''}`}
    style={{
      ['--slider-color' as string]: colors.ELEMENT_FOCUS,
      ['--slider-color-contrast' as string]: colors.STROKE,
      ...props.style,
    }}
  />
);
