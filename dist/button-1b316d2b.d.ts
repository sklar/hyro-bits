import { ElementType, ComponentPropsWithRef, JSXElementConstructor, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import { S as SizeType, T as ThemeType, V as VariantType } from './index-2e22dac1.js';

declare type ExtendedProps<BaseProps = {}, OverrideProps = {}> = OverrideProps & Omit<BaseProps, keyof OverrideProps>;
declare type PropsOf<C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>;
declare type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;
declare type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];
declare type PolymorphicComponentProps<C extends ElementType, Props = {}> = InheritedProps<C, Props & {
    as?: C;
}> & {
    ref?: PolymorphicRef<C>;
};

interface SharedButtonProps {
    /**
     * Children
     */
    children?: ReactNode;
    /**
     * Label
     */
    text?: string;
    /**
     * Type
     */
    type?: 'button' | 'reset' | 'submit';
    /**
     * Icon
     */
    icon?: ReactElement | ReactElement[];
    /**
     * Icon placement.
     */
    placement?: 'left' | 'right';
    /**
     * Round
     */
    round?: boolean;
    /**
     * Size
     */
    size?: Exclude<SizeType, 'xs' | 'xl'>;
    /**
     * Synthetic behaviour to prevent `:active` and `:focus` styles.
     */
    synthetic?: boolean;
    /**
     * Theme
     */
    theme?: Exclude<ThemeType, 'notice'>;
    /**
     * Toggle
     */
    toggle?: boolean;
    /**
     * Variant
     */
    variant?: VariantType;
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
}
declare type ButtonProps<C extends ElementType> = PolymorphicComponentProps<C, SharedButtonProps>;
declare type ButtonComponent = <C extends ElementType = 'button'>(props: ButtonProps<C>) => ReactElement;
/**
 * Button
 * @deprecated
 */
declare const Button: ButtonComponent;

export { Button as B, ButtonProps as a };
