import React from 'react';
import { colors } from '../../theme';
import RcSlider, { SliderProps as RcSliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './slider.css';

export interface SliderProps extends RcSliderProps {}

/**
 * Powered by `rc-slider`. For whole API and examples visit https://slider-react-component.vercel.app <br/>
 * For range slider use `<Range>` component.
 */
export const Slider: React.FC<SliderProps> = ({ ...props }): JSX.Element => (
  <RcSlider
    {...props}
    className={`purplex-slider${props.className ? ` ${props.className}` : ''}`}
    style={{
      ['--slider-color' as string]: colors.ELEMENT_FOCUS,
      ['--slider-color-contrast' as string]: colors.STROKE,
      ...props.style,
    }}
  />
);
