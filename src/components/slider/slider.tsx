/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import RcSlider, { SliderProps as RcSliderProps } from 'rc-slider';

import { InternalHTMLAttributes } from '../../types';
import { splitPropsByKeys } from '../../utils';
import { slider, wrapper } from './slider.styles';

export interface SliderProps extends InternalHTMLAttributes, RcSliderProps {
  /**
   * Bleed
   * Whether to let handle and dots bleed outside the box or keep'em inside.
   */
  bleed?: boolean;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';
}

/**
 * Styled RC Slider wrapper
 * @see https://slider.react-component.now.sh/
 */
export const Slider = ({
  bleed = true,
  className,
  reverse,
  style,
  theme,
  vertical,
  ...props
}: SliderProps): JSX.Element => {
  const [containerProps, sliderProps] = splitPropsByKeys(props, ['data-hover', 'data-qa']);

  return (
    <div
      {...containerProps}
      className={className}
      css={wrapper}
      data-bleed={bleed}
      data-direction={vertical ? 'vertical' : 'horizontal'}
      data-reverse={reverse || null}
      data-theme={theme || null}
      style={style}
    >
      <RcSlider {...sliderProps} css={slider} reverse={reverse} vertical={vertical} />
    </div>
  );
};
