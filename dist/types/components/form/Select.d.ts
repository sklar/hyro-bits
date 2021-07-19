import { CSSProperties, ReactElement } from 'react';
import { GroupTypeBase, NamedProps, OptionTypeBase } from 'react-select';
import { SizeType } from '../../utils';
export interface SelectProps extends Omit<NamedProps<OptionTypeBase, boolean, GroupTypeBase<any>>, 'theme'> {
    /**
     * Leader placeholder (buttons, icons)
     */
    leader?: ReactElement;
    /**
     * Length (aka `width`)
     */
    length?: string;
    /**
     * Size
     */
    size?: Exclude<SizeType, 'xs' | 'xl'>;
    /**
     * Style
     */
    style?: CSSProperties;
    /**
     * State: Active
     */
    active?: boolean;
    /**
     * State: Busy
     */
    busy?: boolean;
    /**
     * State: Disabled
     */
    disabled?: boolean;
    /**
     * State: Invalid
     */
    invalid?: boolean;
    /**
     * State: Read-only
     */
    readonly?: boolean;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Select.d.ts.map