import { CSSProperties, ReactElement } from 'react';
import { GroupBase, Props as ReactSelectProps } from 'react-select';
import { InternalHTMLAttributes, SizeType } from '../../utils';
declare module 'react-select/dist/declarations/src/Select' {
    interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
        /**
         * Internal styling helpers
         */
        helpers?: InternalHTMLAttributes;
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
}
export interface SelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends InternalHTMLAttributes, ReactSelectProps<Option, IsMulti, Group> {
}
export declare const Select: <Option extends unknown = {
    label: string;
    value: string;
}, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: SelectProps<Option, IsMulti, Group>) => JSX.Element;
//# sourceMappingURL=Select.d.ts.map