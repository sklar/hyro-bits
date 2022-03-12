import { CSSProperties, ReactElement } from 'react';
import { GroupBase } from 'react-select';

import { InternalHTMLAttributes, SizeType } from '../../../utils/types';

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

export { Select } from './Select';
export type { SelectProps } from './Select';

export { AsyncSelect } from './AsyncSelect';
export type { AsyncSelectProps } from './AsyncSelect';
