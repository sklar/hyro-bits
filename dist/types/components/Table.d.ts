import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { AlignmentPrimaryType, DirectionType } from '../utils/types';
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
export declare const Td: React.ForwardRefExoticComponent<TdProps & React.RefAttributes<HTMLTableCellElement>>;
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
export declare const Th: React.ForwardRefExoticComponent<ThProps & React.RefAttributes<HTMLTableCellElement>>;
export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
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
export declare const Tr: React.ForwardRefExoticComponent<TrProps & React.RefAttributes<HTMLTableRowElement>>;
export declare const TrContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: "symbol" | "object" | "slot" | "style" | "title" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {}>;
/**
 * Table head
 */
export declare const Thead: React.ForwardRefExoticComponent<{
    children: ReactNode;
} & React.RefAttributes<HTMLTableSectionElement>>;
/**
 * Table body
 */
export declare const Tbody: React.ForwardRefExoticComponent<{
    children: ReactNode;
} & React.RefAttributes<HTMLTableSectionElement>>;
export interface TableProps extends HTMLAttributes<HTMLTableElement> {
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
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export {};
//# sourceMappingURL=Table.d.ts.map