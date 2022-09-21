import React__default, { HTMLAttributes } from 'react';
import { D as DirectionType, S as SizeType } from '../../index-2e22dac1.js';
import * as _emotion_utils from '@emotion/utils';

interface OrderProps extends HTMLAttributes<HTMLElement> {
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
declare const Order: React__default.ForwardRefExoticComponent<OrderProps & React__default.RefAttributes<HTMLDivElement>>;

declare const order: _emotion_utils.SerializedStyles;

export { Order, OrderProps, order };
