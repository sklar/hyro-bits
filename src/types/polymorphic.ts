import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  JSXElementConstructor,
} from 'react';

type ExtendedProps<BaseProps = {}, OverrideProps = {}> = OverrideProps &
  Omit<BaseProps, keyof OverrideProps>;

type PropsOf<C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
  JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>;

type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProps<C extends ElementType, Props = {}> = InheritedProps<
  C,
  Props & { as?: C }
> & { ref?: PolymorphicRef<C> };
