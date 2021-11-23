/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Range as RcRange, RangeProps as RcRangeProps } from 'rc-slider';

import { InternalHTMLAttributes, splitPropsByKeys } from '../../utils';
import { slider, sliderWrapper } from './Slider.styles';

export interface RangeProps extends InternalHTMLAttributes, RcRangeProps {
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
  className,
  reverse,
  style,
  theme,
  vertical,
  ...props
}: RangeProps): JSX.Element => {
  const [containerProps, rangeProps] = splitPropsByKeys(props, ['data-hover', 'data-qa']);

  return (
    <div
      {...containerProps}
      className={className}
      css={sliderWrapper}
      data-bleed={bleed}
      data-direction={vertical ? 'vertical' : 'horizontal'}
      data-reverse={reverse || null}
      data-theme={theme || null}
      style={style}
    >
      <RcRange {...rangeProps} css={slider} reverse={reverse} vertical={vertical} />
    </div>
  );
};
