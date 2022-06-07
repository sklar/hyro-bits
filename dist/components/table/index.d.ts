import React__default, { ReactNode, HTMLAttributes, ReactElement } from 'react';
import { A as AlignmentPrimaryType, D as DirectionType } from '../../index-2e22dac1';
import * as _emotion_react from '@emotion/react';

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

declare const text: _emotion_react.SerializedStyles;
/**
 * Td
 */
declare const td: _emotion_react.SerializedStyles;
/**
 * Th
 */
declare const th: _emotion_react.SerializedStyles;
/**
 * Tr
 */
declare const tr: _emotion_react.SerializedStyles;
/**
 * Table
 */
declare const table: _emotion_react.SerializedStyles;

export { Table, TableProps, Tbody, Td, Th, Thead, Tr, TrProps, table, td, text, th, tr };
