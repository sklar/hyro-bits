/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Range as RcRange, RangeProps as RcRangeProps } from 'rc-slider';

import { slider, sliderWrapper } from './Slider.styles';

export interface RangeProps extends RcRangeProps {
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
export const Range = ({
  bleed = true,
  reverse,
  theme,
  vertical,
  ...rangeProps
}: RangeProps): JSX.Element => {
  const containerProps = Object.fromEntries(
    Object.entries(rangeProps).filter(([key]) =>
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
      <RcRange {...rangeProps} css={slider} reverse={reverse} vertical={vertical} />
    </div>
  );
};
