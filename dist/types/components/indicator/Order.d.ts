import React, { HTMLAttributes } from 'react';
import { DirectionType, SizeType } from '../../utils/types';
export interface OrderProps extends HTMLAttributes<HTMLElement> {
    /**
     * Direction
     */
    direction?: DirectionType;
    /**
     * Size
     */
    size?: SizeType;
}
/**
 * Order indicator.
 */
export declare const Order: React.ForwardRefExoticComponent<OrderProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Order.d.ts.map