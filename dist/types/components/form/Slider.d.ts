import { SliderProps as RcSliderProps } from 'rc-slider';
import React from 'react';
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
export declare const Slider: React.VFC<SliderProps>;
//# sourceMappingURL=Slider.d.ts.map