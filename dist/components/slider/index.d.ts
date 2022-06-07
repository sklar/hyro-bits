import { SliderProps as SliderProps$1 } from 'rc-slider';
import { I as InternalHTMLAttributes } from '../../index-2e22dac1';
export { d as dot, h as handle, m as mark, r as rail, s as slider, a as step, t as track, w as wrapper } from '../../slider.styles-e83cdb1b';
import '@emotion/react';

interface SliderProps extends InternalHTMLAttributes, SliderProps$1 {
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
declare const Slider: ({ bleed, className, reverse, style, theme, vertical, ...props }: SliderProps) => JSX.Element;

export { Slider, SliderProps };
