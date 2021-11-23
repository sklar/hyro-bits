import { RangeProps as RcRangeProps } from 'rc-slider';
import { InternalHTMLAttributes } from '../../utils';
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
export declare const Range: ({ bleed, className, reverse, style, theme, vertical, ...props }: RangeProps) => JSX.Element;
//# sourceMappingURL=Range.d.ts.map