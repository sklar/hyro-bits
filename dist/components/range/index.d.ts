import { RangeProps as RangeProps$1 } from 'rc-slider';
import { I as InternalHTMLAttributes } from '../../index-2e22dac1.js';
export { d as dot, h as handle, m as mark, r as rail, s as slider, a as step, t as track, w as wrapper } from '../../slider.styles-e93f856b.js';
import '@emotion/utils';

interface RangeProps extends InternalHTMLAttributes, RangeProps$1 {
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
declare const Range: ({ bleed, className, reverse, style, theme, vertical, ...props }: RangeProps) => JSX.Element;

export { Range, RangeProps };
