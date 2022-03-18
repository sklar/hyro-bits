import * as React from 'react';
import React__default, { ElementType, ComponentPropsWithRef, JSXElementConstructor, ComponentPropsWithoutRef, ReactNode, ReactElement, HTMLAttributes, InputHTMLAttributes, Dispatch, CSSProperties, TextareaHTMLAttributes } from 'react';
import { RangeProps as RangeProps$1, SliderProps as SliderProps$1 } from 'rc-slider';
import { GroupBase, Props } from 'react-select';
export { components as ReactSelectComponents, GroupBase as ReactSelectGroupBase, Props as ReactSelectProps } from 'react-select';
import * as _emotion_styled from '@emotion/styled';
import * as _emotion_react from '@emotion/react';
import { AsyncProps } from 'react-select/async';
export { AsyncProps as ReactAsyncSelectProps } from 'react-select/async';

declare type ExtendedProps<BaseProps = {}, OverrideProps = {}> = OverrideProps & Omit<BaseProps, keyof OverrideProps>;
declare type PropsOf<C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>;
declare type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;
declare type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];
declare type PolymorphicComponentProps<C extends ElementType, Props = {}> = InheritedProps<C, Props & {
    as?: C;
}> & {
    ref?: PolymorphicRef<C>;
};

declare const Direction: {
    readonly NONE: "None";
    readonly ASCENDING: "Asc";
    readonly DESCENDING: "Desc";
};
declare const Size: {
    readonly XSMALL: "xs";
    readonly SMALL: "sm";
    readonly MEDIUM: "md";
    readonly LARGE: "lg";
    readonly XLARGE: "xl";
};
declare const Theme: {
    readonly NOTICE: "notice";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly DARK: "dark";
};
declare const Variant: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
};

declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
declare type Values<T> = T[keyof T];
declare type AlignmentPrimaryType = 'inherit' | 'normal' | 'start' | 'center' | 'end';
declare type AlignmentSecondaryType = 'inherit' | 'normal' | 'baseline' | 'start' | 'center' | 'end';
declare type AlignmentTertiaryType = 'space-around' | 'space-between' | 'space-evenly';
declare type AlignmentFlexboxType = 'flex-start' | 'flex-end';
declare type DirectionType = Values<typeof Direction>;
declare type SizeType = Values<typeof Size>;
declare type ThemeType = Values<typeof Theme>;
declare type VariantType = Values<typeof Variant>;
interface InternalHTMLAttributes {
    'data-active'?: boolean;
    'data-hover'?: boolean;
    'data-invalid'?: boolean;
    'data-qa'?: string;
}

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
 */
declare const Button: ButtonComponent;

interface ClickOutsideGuardProps extends HTMLAttributes<HTMLDivElement> {
    ignore?: Element;
    listen?: boolean;
    onClickOutside: () => void;
}
/**
 * Click outside guard
 * @see https://css-tricks.com/click-outside-detector/
 */
declare const ClickOutsideGuard: React__default.ForwardRefExoticComponent<ClickOutsideGuardProps & React__default.RefAttributes<HTMLDivElement>>;

interface DialogProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Active
     */
    active?: boolean;
    /**
     * Backdrop
     */
    backdrop?: boolean;
    /**
     * Z-index
     */
    index?: number;
    /**
     * Rejectable
     */
    rejectable?: boolean;
    /**
     * Size
     */
    size?: string;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
    /**
     * Header
     */
    header?: ReactElement;
    /**
     * Title
     */
    title?: string;
    /**
     * Body bleed (handling `overflow`)
     */
    bleed?: boolean;
    /**
     * Footer
     */
    footer?: ReactElement;
    /**
     * Footer alignment, primary axis
     */
    justify?: AlignmentPrimaryType | AlignmentTertiaryType | AlignmentFlexboxType;
    /**
     * Event: Close
     */
    onClose: () => void;
}
/**
 * Dialog
 */
declare const Dialog: React__default.FC<DialogProps>;

declare const EMOTION_DISABLE_SSR = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
declare const splitPropsByKeys: <T, K extends (keyof T)[]>(props: T, keys: K) => readonly [{ [key in K[number]]: T[key]; }, { [key_1 in Exclude<keyof T, K[number]>]: T[key_1]; }];

interface FlexProps extends HTMLAttributes<HTMLElement> {
    /**
     * Alignment, secondary axis
     */
    align?: AlignmentSecondaryType | AlignmentFlexboxType;
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Block or inline
     */
    block?: boolean;
    /**
     * Children
     */
    children: ReactNode;
    /**
     * Direction (default is `row`)
     */
    direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    /**
     * Gap
     */
    gap?: string;
    /**
     * Alignment, primary axis
     */
    justify?: AlignmentPrimaryType | AlignmentTertiaryType | AlignmentFlexboxType;
    /**
     * Wrap (default is `no-wrap`)
     */
    wrap?: boolean;
}
/**
 * Flexbox wrapper.
 */
declare const Flex: React__default.ForwardRefExoticComponent<FlexProps & React__default.RefAttributes<HTMLDivElement>>;

interface GridProps extends HTMLAttributes<HTMLElement> {
    /**
     * Alignment, secondary axis
     */
    align?: AlignmentPrimaryType;
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Block or inline
     */
    block?: boolean;
    /**
     * Children
     */
    children: ReactNode;
    /**
     * Columns
     */
    columns?: string;
    /**
     * Flow
     */
    flow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
    /**
     * Gap
     */
    gap?: string;
    /**
     * Alignment, primary axis
     */
    justify?: AlignmentSecondaryType;
    /**
     * Column, max
     */
    max?: string;
    /**
     * Column, min
     */
    min?: string;
    /**
     * Sizing
     */
    sizing?: 'auto-fill' | 'auto-fit';
}
/**
 * Grid wrapper
 */
declare const Grid: React__default.ForwardRefExoticComponent<GridProps & React__default.RefAttributes<HTMLDivElement>>;

/**
 * Spacer.
 */
declare const Spacer: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;

/**
 * Field label
 */
declare const FieldLabel: React__default.FC<FlexProps>;
/**
 * Field text
 */
interface FieldTextProps extends HTMLAttributes<HTMLDivElement> {
    secondary?: boolean;
}
declare const FieldText: React__default.FC<FieldTextProps>;
/**
 * Field message
 */
declare type FieldMessageTheme = Exclude<ThemeType, 'dark' | 'warning'>;
interface FieldMessageProps extends FlexProps {
    theme?: FieldMessageTheme;
}
declare const FieldMessage: React__default.FC<FieldMessageProps>;
/**
 * Field
 */
interface FieldProps extends FlexProps {
    /**
     * Compact
     */
    compact?: boolean;
}
declare const Field: React__default.FC<FieldProps>;

interface InputProps extends InternalHTMLAttributes, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Affix (icons, labels, units)
     */
    affix?: string | Array<string | undefined> | ReactElement | ReactElement[];
    /**
     * Leader placeholder (buttons, icons)
     */
    leader?: ReactElement;
    /**
     * Trailer placeholder (buttons, icons)
     */
    trailer?: ReactElement;
    /**
     * Length (aka `width`)
     */
    length?: string;
    /**
     * Size
     */
    size?: Exclude<SizeType, 'xs' | 'xl'>;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
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
/**
 * Input
 */
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

interface NumberInputStepperContainerProps {
    children: ReactNode;
}
interface NumberInputStepperProps {
    disabled?: boolean;
    onChange: () => void;
}
declare const NumberInputStepperComponents: {
    Stepper: React.FC<NumberInputStepperContainerProps>;
    IncrementStepper: React.VFC<NumberInputStepperProps>;
    DecrementStepper: React.VFC<NumberInputStepperProps>;
};
interface NumberInputProps extends InputProps {
    /**
     * Value
     */
    value?: number;
    /**
     * Min value
     */
    min?: number;
    /**
     * Max value
     */
    max?: number;
    /**
     * Step
     */
    step?: number;
    /**
     * Decimal places
     */
    decimals?: number;
    /**
     * Format
     * FIXME: Implement format correclty or drop it.
     */
    format?: (arg: string) => string;
    /**
     * Stepper
     */
    stepper?: boolean;
    /**
     * Custom omponents
     */
    components?: Partial<typeof NumberInputStepperComponents>;
    /**
     * Event: Change value
     */
    onChangeValue: Dispatch<number>;
}
/**
 * Number input
 */
declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;

interface RangeProps extends InternalHTMLAttributes, RangeProps$1 {
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
declare const Range: ({ bleed, className, reverse, style, theme, vertical, ...props }: RangeProps) => JSX.Element;

interface SelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CustomSelectProps, InternalHTMLAttributes, Props<Option, IsMulti, Group> {
}
declare const Select: <Option extends unknown = {
    label: string;
    value: string;
}, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: SelectProps<Option, IsMulti, Group>) => JSX.Element;

interface AsyncSelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CustomSelectProps, InternalHTMLAttributes, AsyncProps<Option, IsMulti, Group> {
}
declare const AsyncSelect: <Option extends unknown = {
    label: string;
    value: string;
}, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: AsyncSelectProps<Option, IsMulti, Group>) => JSX.Element;

interface CustomSelectProps {
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
    interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> extends CustomSelectProps {
    }
}

interface SliderProps extends InternalHTMLAttributes, SliderProps$1 {
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
declare const Slider: ({ bleed, className, reverse, style, theme, vertical, ...props }: SliderProps) => JSX.Element;

interface SwitchProps extends InternalHTMLAttributes, InputHTMLAttributes<HTMLInputElement> {
    /**
     * Appearance (`checkbox` as default)
     * No matter on type, appearance can be chosen manually
     */
    appearance?: 'checkbox' | 'radio' | 'toggle';
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Label
     */
    label?: string;
    /**
     * Synthetic behaviour to disable `:focus` styles.
     */
    synthetic?: boolean;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
    /**
     * Type (`checkbox` as default)
     */
    type?: 'checkbox' | 'radio';
    /**
     * State: Disabled
     */
    disabled?: boolean;
}
/**
 * Checkbox, Radio button or Toggle switch
 */
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends InternalHTMLAttributes, TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Expandable
     */
    expandable?: boolean;
    /**
     * Length (aka `width`)
     */
    length?: string;
    /**
     * Resize
     */
    resize?: 'both' | 'horizontal' | 'vertical' | 'none';
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
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
/**
 * Textarea
 * TODO: Implement auto-grow feature
 */
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare function SvgAlignBottom(): JSX.Element;

declare function SvgAlignCenter(): JSX.Element;

declare function SvgAlignDistributeHorizontally(): JSX.Element;

declare function SvgAlignDistributeVertically(): JSX.Element;

declare function SvgAlignLeft(): JSX.Element;

declare function SvgAlignMiddle(): JSX.Element;

declare function SvgAlignRight(): JSX.Element;

declare function SvgAlignTop(): JSX.Element;

declare function SvgArrowAltLeft(): JSX.Element;

declare function SvgArrowAltRight(): JSX.Element;

declare function SvgArrowBackward(): JSX.Element;

declare function SvgArrowForward(): JSX.Element;

declare function SvgArrowFromRight$1(): JSX.Element;

declare function SvgArrowLeft(): JSX.Element;

declare function SvgArrowReplay(): JSX.Element;

declare function SvgBackground$1(): JSX.Element;

declare function SvgBackspace(): JSX.Element;

declare function SvgBackward(): JSX.Element;

declare function SvgBars(): JSX.Element;

declare function SvgBook(): JSX.Element;

declare function SvgCalendar(): JSX.Element;

declare function SvgClick$1(): JSX.Element;

declare function SvgClock(): JSX.Element;

declare function SvgClone(): JSX.Element;

declare function SvgCog$1(): JSX.Element;

declare function SvgCommentLines(): JSX.Element;

declare function SvgCursor(): JSX.Element;

declare function SvgDesert(): JSX.Element;

declare function SvgDocument(): JSX.Element;

declare function SvgDoorOpen(): JSX.Element;

declare function SvgDrop(): JSX.Element;

declare function SvgEllipsisHorizontal(): JSX.Element;

declare function SvgEllipsisVertical$1(): JSX.Element;

declare function SvgExclamationTriangle(): JSX.Element;

declare function SvgEyeSlash$1(): JSX.Element;

declare function SvgEye$1(): JSX.Element;

declare function SvgFilter$1(): JSX.Element;

declare function SvgFlash$1(): JSX.Element;

declare function SvgForward(): JSX.Element;

declare function SvgGamepad$1(): JSX.Element;

declare function SvgGlobeCursor$1(): JSX.Element;

declare function SvgGlobeDownload$1(): JSX.Element;

declare function SvgGlobeRefresh$1(): JSX.Element;

declare function SvgGraduationCap(): JSX.Element;

declare function SvgGrid(): JSX.Element;

declare function SvgGroupAdd$1(): JSX.Element;

declare function SvgHand(): JSX.Element;

declare function SvgHeartbeatSquare(): JSX.Element;

declare function SvgImage$1(): JSX.Element;

declare function SvgImages(): JSX.Element;

declare function SvgInfoCircle$1(): JSX.Element;

declare function SvgKeyboard(): JSX.Element;

declare function SvgLamp(): JSX.Element;

declare function SvgLockAlt(): JSX.Element;

declare function SvgLockOpenAlt(): JSX.Element;

declare function SvgLockOpen$1(): JSX.Element;

declare function SvgLock$1(): JSX.Element;

declare function SvgManStar(): JSX.Element;

declare function SvgMapMarkerInfo(): JSX.Element;

declare function SvgMapMarkerShine(): JSX.Element;

declare function SvgMicrophone(): JSX.Element;

declare function SvgMinusSquare$1(): JSX.Element;

declare function SvgMobileWifi(): JSX.Element;

declare function SvgMusicPause$1(): JSX.Element;

declare function SvgMusicPlay$1(): JSX.Element;

declare function SvgMusic$1(): JSX.Element;

declare function SvgNdi$1(): JSX.Element;

declare function SvgPageNext(): JSX.Element;

declare function SvgPagePrevious(): JSX.Element;

declare function SvgPaintRoller(): JSX.Element;

declare function SvgParachuteBox(): JSX.Element;

declare function SvgPause(): JSX.Element;

declare function SvgPenDraw$1(): JSX.Element;

declare function SvgPenWrite(): JSX.Element;

declare function SvgPlayCircle$1(): JSX.Element;

declare function SvgPlay(): JSX.Element;

declare function SvgPlusCircle$1(): JSX.Element;

declare function SvgPlusSquare$1(): JSX.Element;

declare function SvgPreview(): JSX.Element;

declare function SvgProjector(): JSX.Element;

declare function SvgSave(): JSX.Element;

declare function SvgSearch$1(): JSX.Element;

declare function SvgShare(): JSX.Element;

declare function SvgStickyNote(): JSX.Element;

declare function SvgStopCircle$1(): JSX.Element;

declare function SvgTextBold(): JSX.Element;

declare function SvgTextCenter(): JSX.Element;

declare function SvgTextItalic(): JSX.Element;

declare function SvgTextLeft(): JSX.Element;

declare function SvgTextRight(): JSX.Element;

declare function SvgTextStyle(): JSX.Element;

declare function SvgTextUnderline(): JSX.Element;

declare function SvgText$1(): JSX.Element;

declare function SvgThumbsUp(): JSX.Element;

declare function SvgTimesCircle$1(): JSX.Element;

declare function SvgTimes$1(): JSX.Element;

declare function SvgTransition$1(): JSX.Element;

declare function SvgTrash$1(): JSX.Element;

declare function SvgTv(): JSX.Element;

declare function SvgUndo(): JSX.Element;

declare function SvgUserPlus(): JSX.Element;

declare function SvgUsers(): JSX.Element;

declare function SvgVideoCircle(): JSX.Element;

declare function SvgVideo$1(): JSX.Element;

declare function SvgVolumeMute$1(): JSX.Element;

declare function SvgVolume(): JSX.Element;

declare namespace BOLD {
  export {
    SvgAlignBottom as AlignBottom,
    SvgAlignCenter as AlignCenter,
    SvgAlignDistributeHorizontally as AlignDistributeHorizontally,
    SvgAlignDistributeVertically as AlignDistributeVertically,
    SvgAlignLeft as AlignLeft,
    SvgAlignMiddle as AlignMiddle,
    SvgAlignRight as AlignRight,
    SvgAlignTop as AlignTop,
    SvgArrowAltLeft as ArrowAltLeft,
    SvgArrowAltRight as ArrowAltRight,
    SvgArrowBackward as ArrowBackward,
    SvgArrowForward as ArrowForward,
    SvgArrowFromRight$1 as ArrowFromRight,
    SvgArrowLeft as ArrowLeft,
    SvgArrowReplay as ArrowReplay,
    SvgBackground$1 as Background,
    SvgBackspace as Backspace,
    SvgBackward as Backward,
    SvgBars as Bars,
    SvgBook as Book,
    SvgCalendar as Calendar,
    SvgClick$1 as Click,
    SvgClock as Clock,
    SvgClone as Clone,
    SvgCog$1 as Cog,
    SvgCommentLines as CommentLines,
    SvgCursor as Cursor,
    SvgDesert as Desert,
    SvgDocument as Document,
    SvgDoorOpen as DoorOpen,
    SvgDrop as Drop,
    SvgEllipsisHorizontal as EllipsisHorizontal,
    SvgEllipsisVertical$1 as EllipsisVertical,
    SvgExclamationTriangle as ExclamationTriangle,
    SvgEyeSlash$1 as EyeSlash,
    SvgEye$1 as Eye,
    SvgFilter$1 as Filter,
    SvgFlash$1 as Flash,
    SvgForward as Forward,
    SvgGamepad$1 as Gamepad,
    SvgGlobeCursor$1 as GlobeCursor,
    SvgGlobeDownload$1 as GlobeDownload,
    SvgGlobeRefresh$1 as GlobeRefresh,
    SvgGraduationCap as GraduationCap,
    SvgGrid as Grid,
    SvgGroupAdd$1 as GroupAdd,
    SvgHand as Hand,
    SvgHeartbeatSquare as HeartbeatSquare,
    SvgImage$1 as Image,
    SvgImages as Images,
    SvgInfoCircle$1 as InfoCircle,
    SvgKeyboard as Keyboard,
    SvgLamp as Lamp,
    SvgLockAlt as LockAlt,
    SvgLockOpenAlt as LockOpenAlt,
    SvgLockOpen$1 as LockOpen,
    SvgLock$1 as Lock,
    SvgManStar as ManStar,
    SvgMapMarkerInfo as MapMarkerInfo,
    SvgMapMarkerShine as MapMarkerShine,
    SvgMicrophone as Microphone,
    SvgMinusSquare$1 as MinusSquare,
    SvgMobileWifi as MobileWifi,
    SvgMusicPause$1 as MusicPause,
    SvgMusicPlay$1 as MusicPlay,
    SvgMusic$1 as Music,
    SvgNdi$1 as Ndi,
    SvgPageNext as PageNext,
    SvgPagePrevious as PagePrevious,
    SvgPaintRoller as PaintRoller,
    SvgParachuteBox as ParachuteBox,
    SvgPause as Pause,
    SvgPenDraw$1 as PenDraw,
    SvgPenWrite as PenWrite,
    SvgPlayCircle$1 as PlayCircle,
    SvgPlay as Play,
    SvgPlusCircle$1 as PlusCircle,
    SvgPlusSquare$1 as PlusSquare,
    SvgPreview as Preview,
    SvgProjector as Projector,
    SvgSave as Save,
    SvgSearch$1 as Search,
    SvgShare as Share,
    SvgStickyNote as StickyNote,
    SvgStopCircle$1 as StopCircle,
    SvgTextBold as TextBold,
    SvgTextCenter as TextCenter,
    SvgTextItalic as TextItalic,
    SvgTextLeft as TextLeft,
    SvgTextRight as TextRight,
    SvgTextStyle as TextStyle,
    SvgTextUnderline as TextUnderline,
    SvgText$1 as Text,
    SvgThumbsUp as ThumbsUp,
    SvgTimesCircle$1 as TimesCircle,
    SvgTimes$1 as Times,
    SvgTransition$1 as Transition,
    SvgTrash$1 as Trash,
    SvgTv as Tv,
    SvgUndo as Undo,
    SvgUserPlus as UserPlus,
    SvgUsers as Users,
    SvgVideoCircle as VideoCircle,
    SvgVideo$1 as Video,
    SvgVolumeMute$1 as VolumeMute,
    SvgVolume as Volume,
  };
}

declare function SvgArrowFromRight(): JSX.Element;

declare function SvgAxisX(): JSX.Element;

declare function SvgAxisY(): JSX.Element;

declare function SvgBackground(): JSX.Element;

declare function SvgChevronDown(): JSX.Element;

declare function SvgChevronRight(): JSX.Element;

declare function SvgClick(): JSX.Element;

declare function SvgCog(): JSX.Element;

declare function SvgEllipsisVertical(): JSX.Element;

declare function SvgEyeSlash(): JSX.Element;

declare function SvgEye(): JSX.Element;

declare function SvgFilter(): JSX.Element;

declare function SvgFlash(): JSX.Element;

declare function SvgFolderOpen(): JSX.Element;

declare function SvgFolder(): JSX.Element;

declare function SvgGamepad(): JSX.Element;

declare function SvgGlobeCursor(): JSX.Element;

declare function SvgGlobeDownload(): JSX.Element;

declare function SvgGlobeRefresh(): JSX.Element;

declare function SvgGroupAdd(): JSX.Element;

declare function SvgHeight(): JSX.Element;

declare function SvgImage(): JSX.Element;

declare function SvgInfoCircle(): JSX.Element;

declare function SvgLockOpen(): JSX.Element;

declare function SvgLock(): JSX.Element;

declare function SvgMinusSquare(): JSX.Element;

declare function SvgMoon(): JSX.Element;

declare function SvgMusicPause(): JSX.Element;

declare function SvgMusicPlay(): JSX.Element;

declare function SvgMusic(): JSX.Element;

declare function SvgNdi(): JSX.Element;

declare function SvgPenDraw(): JSX.Element;

declare function SvgPlayCircle(): JSX.Element;

declare function SvgPlusCircle(): JSX.Element;

declare function SvgPlusSquare(): JSX.Element;

declare function SvgPlus(): JSX.Element;

declare function SvgQuestionCircle(): JSX.Element;

declare function SvgSearch(): JSX.Element;

declare function SvgSort(): JSX.Element;

declare function SvgStopCircle(): JSX.Element;

declare function SvgText(): JSX.Element;

declare function SvgTimesCircle(): JSX.Element;

declare function SvgTimes(): JSX.Element;

declare function SvgTransition(): JSX.Element;

declare function SvgTrash(): JSX.Element;

declare function SvgVideo(): JSX.Element;

declare function SvgVolumeMute(): JSX.Element;

declare function SvgWidth(): JSX.Element;

declare namespace MINI {
  export {
    SvgArrowFromRight as ArrowFromRight,
    SvgAxisX as AxisX,
    SvgAxisY as AxisY,
    SvgBackground as Background,
    SvgChevronDown as ChevronDown,
    SvgChevronRight as ChevronRight,
    SvgClick as Click,
    SvgCog as Cog,
    SvgEllipsisVertical as EllipsisVertical,
    SvgEyeSlash as EyeSlash,
    SvgEye as Eye,
    SvgFilter as Filter,
    SvgFlash as Flash,
    SvgFolderOpen as FolderOpen,
    SvgFolder as Folder,
    SvgGamepad as Gamepad,
    SvgGlobeCursor as GlobeCursor,
    SvgGlobeDownload as GlobeDownload,
    SvgGlobeRefresh as GlobeRefresh,
    SvgGroupAdd as GroupAdd,
    SvgHeight as Height,
    SvgImage as Image,
    SvgInfoCircle as InfoCircle,
    SvgLockOpen as LockOpen,
    SvgLock as Lock,
    SvgMinusSquare as MinusSquare,
    SvgMoon as Moon,
    SvgMusicPause as MusicPause,
    SvgMusicPlay as MusicPlay,
    SvgMusic as Music,
    SvgNdi as Ndi,
    SvgPenDraw as PenDraw,
    SvgPlayCircle as PlayCircle,
    SvgPlusCircle as PlusCircle,
    SvgPlusSquare as PlusSquare,
    SvgPlus as Plus,
    SvgQuestionCircle as QuestionCircle,
    SvgSearch as Search,
    SvgSort as Sort,
    SvgStopCircle as StopCircle,
    SvgText as Text,
    SvgTimesCircle as TimesCircle,
    SvgTimes as Times,
    SvgTransition as Transition,
    SvgTrash as Trash,
    SvgVideo as Video,
    SvgVolumeMute as VolumeMute,
    SvgWidth as Width,
  };
}

declare type BoldKey = keyof typeof BOLD;
declare type MiniKey = keyof typeof MINI;
declare type IconNameType = BoldKey | MiniKey;
interface IconProps extends HTMLAttributes<HTMLElement> {
    /**
     * Name
     */
    name: IconNameType;
    /**
     * Size
     */
    size?: SizeType;
}
/**
 * Icon wrapper.
 */
declare const Icon: React__default.ForwardRefExoticComponent<IconProps & React__default.RefAttributes<HTMLElement>>;

interface IdleProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Color
     */
    color?: string;
    /**
     * Delay
     */
    delay?: number;
    /**
     * Duration
     */
    duration?: number;
    /**
     * Gap
     */
    gap?: string;
    /**
     * Range aka amplitude
     */
    range?: string;
    /**
     * Size
     */
    size?: string;
}
/**
 * Idle indicator.
 */
declare const Idle: React__default.ForwardRefExoticComponent<IdleProps & React__default.RefAttributes<HTMLDivElement>>;

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

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Align items along primary axis
     */
    justify?: boolean;
    /**
     * Padding
     */
    padding?: boolean;
    /**
     * Size
     */
    size?: string;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
    /**
     * State: Active
     */
    active?: boolean;
    /**
     * Event: Close
     */
    onClose?: () => void;
}
/**
 * Context menu
 */
declare const Menu: React__default.ForwardRefExoticComponent<MenuProps & React__default.RefAttributes<HTMLDivElement>>;

declare const MenuDivider: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare const MenuGroup: React__default.FC<HTMLAttributes<HTMLDivElement>>;
declare const MenuGroupTitle: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: React__default.ElementType<any> | undefined;
}, React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

interface MenuItemProps extends HTMLAttributes<HTMLElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Align along primary axis
     */
    justify?: boolean;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
    /**
     * State: Active
     */
    active?: boolean;
    /**
     * State: Disabled
     */
    disabled?: boolean;
}
/**
 * Context menu item
 */
declare const MenuItem: React__default.ForwardRefExoticComponent<MenuItemProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const MenuTitle: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

declare type StatusThemeType = Exclude<ThemeType, 'dark'>;
interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Icon
     */
    icon?: ReactElement;
    /**
     * Label
     */
    text?: string;
    /**
     * Theme
     */
    theme?: StatusThemeType;
}
/**
 * Status
 */
declare const Status: React__default.FC<StatusProps>;

interface NavItemProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Label
     */
    text: string;
    /**
     * Icon
     */
    icon?: ReactElement;
    /**
     * Status
     */
    status?: StatusThemeType;
    /**
     * State: Active
     */
    active?: boolean;
}
/**
 * Navigation item
 */
declare const NavItem: React__default.ForwardRefExoticComponent<NavItemProps & React__default.RefAttributes<HTMLButtonElement>>;
/**
 * Navigation
 */
interface NavProps extends HTMLAttributes<HTMLElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Children
     */
    children: ReactNode;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
}
/**
 * Navigation item
 */
declare const Nav: React__default.ForwardRefExoticComponent<NavProps & React__default.RefAttributes<HTMLDivElement>>;
declare const NavContainer: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined; /**
     * Icon
     */
    as?: React__default.ElementType<any> | undefined;
}, React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;

interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    /**
     * Current page
     */
    page: number;
    /**
     * Page size
     */
    offset: number;
    /**
     * Total pages count
     */
    count: number;
    /**
     * Number of always visible pages before and after the current page
     */
    siblingCount?: number;
    /**
     * Number of always visible pages at the beginning and end
     */
    boundaryCount?: number;
    /**
     * Event: Change page
     */
    onChange: (page: number) => void;
}
/**
 * Pagination
 */
declare const Pagination: React__default.ForwardRefExoticComponent<PaginationProps & React__default.RefAttributes<HTMLDivElement>>;

declare type AlignmentType = 'inherit' | 'baseline' | 'bottom' | 'middle' | 'top';
interface TdProps extends HTMLAttributes<HTMLTableCellElement> {
    /**
     * Alignment, secondary axis
     */
    align?: AlignmentType;
    /**
     * Children
     */
    children?: ReactNode;
    /**
     * Alignment, primary axis
     */
    justify?: AlignmentPrimaryType;
    /**
     * Numberic
     */
    numeric?: 'normal' | 'slashed-zero' | 'tabular-nums';
    /**
     * Size
     */
    size?: string;
}
/**
 * Table data cell
 */
declare const Td: React__default.ForwardRefExoticComponent<TdProps & React__default.RefAttributes<HTMLTableCellElement>>;
interface ThProps extends HTMLAttributes<HTMLTableCellElement> {
    /**
     * Alignment, secondary axis
     */
    align?: AlignmentType;
    /**
     * Children
     */
    children?: ReactNode;
    /**
     * Order direction
     */
    direction?: DirectionType;
    /**
     * Icon
     */
    icon?: ReactElement;
    /**
     * Alignment, primary axis
     */
    justify?: AlignmentPrimaryType;
    /**
     * Size
     */
    size?: string;
    /**
     * Sortable
     */
    sortable?: boolean;
    /**
     * Event: Click
     */
    onClick?: () => void;
}
/**
 * Table header cell
 */
declare const Th: React__default.ForwardRefExoticComponent<ThProps & React__default.RefAttributes<HTMLTableCellElement>>;
interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
    /**
     * Children
     */
    children: ReactNode;
    /**
     * Muted
     */
    mute?: boolean;
}
/**
 * Table row
 */
declare const Tr: React__default.ForwardRefExoticComponent<TrProps & React__default.RefAttributes<HTMLTableRowElement>>;
declare const TrContainer: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: React__default.ElementType<any> | undefined;
}, React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {}>;
/**
 * Table head
 */
declare const Thead: React__default.ForwardRefExoticComponent<{
    children: ReactNode;
} & React__default.RefAttributes<HTMLTableSectionElement>>;
/**
 * Table body
 */
declare const Tbody: React__default.ForwardRefExoticComponent<{
    children: ReactNode;
} & React__default.RefAttributes<HTMLTableSectionElement>>;
interface TableProps extends HTMLAttributes<HTMLTableElement> {
    /**
     * Children
     */
    children: ReactNode;
    /**
     * Layout
     */
    layout?: 'auto' | 'fixed';
    /**
     * Size
     */
    size?: string;
    /**
     * Sticky header
     */
    sticky?: boolean;
}
/**
 * Table
 */
declare const Table: React__default.ForwardRefExoticComponent<TableProps & React__default.RefAttributes<HTMLTableElement>>;

declare type TruncateOptionType = {
    begin: number;
    end: number;
    limit: number;
};
interface TextProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Clamp lines
     */
    clamp?: number;
    /**
     * Content
     */
    content?: string;
    /**
     * Hyphens
     */
    hyphens?: 'manual' | 'auto' | 'none';
    /**
     * White space
     */
    space?: 'normal' | 'nowrap' | 'pre';
    /**
     * Truncate text
     */
    truncate?: boolean | Partial<TruncateOptionType>;
    /**
     * Word break
     */
    word?: 'normal' | 'break' | 'keep';
}
/**
 * Text
 */
declare const Text: React__default.ForwardRefExoticComponent<TextProps & React__default.RefAttributes<HTMLDivElement>>;

declare type ToastTheme = Exclude<ThemeType, 'dark'>;
declare type ToastVariant = 'snackbar' | 'toast';
interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Text
     */
    text?: string;
    /**
     * Title
     */
    title?: string;
    /**
     * Icon
     */
    icon?: boolean;
    /**
     * Close button
     */
    button?: boolean;
    /**
     * Closeable on click
     */
    closeable?: boolean;
    /**
     * Variant
     */
    variant?: ToastVariant;
    /**
     * Size
     */
    size?: string;
    /**
     * Theme
     */
    theme?: ToastTheme;
    /**
     * Event: Click
     */
    onClick?: () => void;
}
/**
 * Toast
 */
declare const Toast: React__default.FC<ToastProps>;

interface TooltipProps {
    /**
     * Children
     */
    children?: ReactElement;
    /**
     * Content
     */
    content?: ReactElement;
    /**
     * Label
     */
    label?: string;
    /**
     * Shortcut
     */
    shortcut?: string;
    /**
     * Delay, onmouseenter
     */
    delayEnter?: number;
    /**
     * Delay, onmouseleave
     */
    delayLeave?: number;
    /**
     * Placement
     */
    placement?: 'bottom' | 'left' | 'right' | 'top';
    /**
     * Size aka max. width
     */
    size?: string;
    /**
     * State: Disabled
     */
    disabled?: boolean;
}
/**
 * Tooltip wrapper.
 * TOTO: Replace `rc-tooltip` with some lightweight alternative, e.g. popper, tippy or tether.
 */
declare const Tooltip: React__default.FC<TooltipProps>;

declare type Color = Record<string, string>;
declare const colors: Color;

declare const base: _emotion_react.SerializedStyles;
declare const h1: _emotion_react.SerializedStyles;
declare const h2: _emotion_react.SerializedStyles;
declare const h3: _emotion_react.SerializedStyles;
declare const h4: _emotion_react.SerializedStyles;
declare const h5: _emotion_react.SerializedStyles;
declare const paragraph: _emotion_react.SerializedStyles;
declare const button: _emotion_react.SerializedStyles;
declare const label: _emotion_react.SerializedStyles;
declare const input: _emotion_react.SerializedStyles;

export { AlignmentFlexboxType, AlignmentPrimaryType, AlignmentSecondaryType, AlignmentTertiaryType, AsyncSelect, AsyncSelectProps, Button, ButtonProps, ClickOutsideGuard, ClickOutsideGuardProps, CustomSelectProps, Dialog, DialogProps, DirectionType, EMOTION_DISABLE_SSR, Field, FieldLabel, FieldMessage, FieldMessageProps, FieldProps, FieldText, Flex, FlexProps, Grid, GridProps, Icon, IconNameType, IconProps, Idle, IdleProps, Input, InputProps, InternalHTMLAttributes, Menu, MenuDivider, MenuGroup, MenuGroupTitle, MenuItem, MenuItemProps, MenuProps, MenuTitle, Nav, NavContainer, NavItem, NavItemProps, NavProps, NumberInput, NumberInputProps, NumberInputStepperComponents, NumberInputStepperContainerProps, NumberInputStepperProps, Order, OrderProps, Pagination, PaginationProps, PartialBy, Range, RangeProps, Select, SelectProps, SharedButtonProps, SizeType, Slider, SliderProps, Spacer, Status, StatusProps, StatusThemeType, Switch, SwitchProps, Table, TableProps, Tbody, Td, Text, TextProps, Textarea, TextareaProps, Th, Thead, ThemeType, Toast, ToastProps, ToastTheme, ToastVariant, Tooltip, TooltipProps, Tr, TrContainer, TrProps, TruncateOptionType, Values, VariantType, base, button, colors, h1, h2, h3, h4, h5, input, label, paragraph, splitPropsByKeys };
