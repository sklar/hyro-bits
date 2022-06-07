import { CSSProperties, ReactElement } from 'react';
import { GroupBase } from 'react-select';

import { InternalHTMLAttributes, SizeType } from '../../types';

export interface CustomSelectProps {
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
   * Menu position
   */
  menu?: 'absolute' | 'static';
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

declare module 'react-select/dist/declarations/src/Select' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>>
    extends CustomSelectProps {}
}

export { components as ReactSelectComponents } from 'react-select';
export type { GroupBase as ReactSelectGroupBase, Props as ReactSelectProps } from 'react-select';

export type { AsyncProps as ReactAsyncSelectProps } from 'react-select/async';
export { AsyncSelect } from './async-select';
export type { AsyncSelectProps } from './async-select';

export { Select } from './select';
export type { SelectProps } from './select';

export {
  components,
  container,
  control,
  indicator,
  indicatorsContainer,
  input,
  loadingIndicator,
  menu,
  menuList,
  message,
  multiValue,
  placeholder,
  singleValue,
  valueContainer,
} from './select.styles';
