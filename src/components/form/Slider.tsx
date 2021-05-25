/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import RcSlider, { SliderProps as RcSliderProps } from 'rc-slider';
import React from 'react';

import { slider, sliderWrapper } from './Slider.styles';

export interface SliderProps extends RcSliderProps {
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
export const Slider: React.VFC<SliderProps> = ({
  bleed = true,
  reverse,
  theme,
  vertical,
  ...sliderProps
}): JSX.Element => {
  const containerProps = Object.fromEntries(
    Object.entries(sliderProps).filter(([key]) =>
      ['className', 'data-hover', 'data-qa'].includes(key)
    )
  );
  return (
    <div
      {...containerProps}
      css={sliderWrapper}
      data-bleed={bleed}
      data-direction={vertical ? 'vertical' : 'horizontal'}
      data-reverse={reverse || null}
      data-theme={theme || null}
    >
      <RcSlider {...sliderProps} css={slider} reverse={reverse} vertical={vertical} />
    </div>
  );
};
