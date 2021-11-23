import { SliderProps as RcSliderProps } from 'rc-slider';
import { InternalHTMLAttributes } from '../../utils';
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
export declare const Slider: ({ bleed, className, reverse, style, theme, vertical, ...props }: SliderProps) => JSX.Element;
//# sourceMappingURL=Slider.d.ts.map