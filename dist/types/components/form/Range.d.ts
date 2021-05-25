import { RangeProps as RcRangeProps } from 'rc-slider';
import React from 'react';
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
export declare const Range: React.VFC<RangeProps>;
//# sourceMappingURL=Range.d.ts.map