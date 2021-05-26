import { SliderProps as RcSliderProps } from 'rc-slider';
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
export declare const Slider: ({ bleed, reverse, theme, vertical, ...sliderProps }: SliderProps) => JSX.Element;
//# sourceMappingURL=Slider.d.ts.map