import styled from '@emotion/styled';
import React, { ElementType, forwardRef, HTMLAttributes } from 'react';

import { text } from './text.styles';

export type TruncateOptionType = {
  begin: number;
  end: number;
  limit: number;
};

function shorten(text: string, { begin = 0, end = 0, limit = 5 }: TruncateOptionType): JSX.Element {
  return (
    <>
      {text.length - (begin + end) > limit ? (
        <>
          <span>{text.slice(0, text.length - end)}</span>
          <span>{text.slice(-end)}</span>
        </>
      ) : (
        <>{text}</>
      )}
    </>
  );
}

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
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
   * Wrap text
   */
  wrap?: 'normal' | 'all' | 'word';
}

/**
 * Text
 */
export const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      as = 'span',
      children,
      clamp,
      content,
      hyphens = 'manual',
      space,
      truncate,
      wrap = 'normal',
      ...props
    },
    ref
  ): JSX.Element => {
    const short = truncate instanceof Object && ('begin' in truncate || 'end' in truncate);
    const text = content && short ? shorten(content, truncate as TruncateOptionType) : children;
    const qa = {
      'data-qa': `text-${as}`,
    };

    return (
      <Container
        as={as}
        data-clamp={clamp || null}
        data-hyphens={hyphens}
        data-space={space || null}
        data-truncate={text && short ? 'smart' : truncate ? 'simple' : null}
        data-wrap={wrap}
        ref={ref}
        style={{
          ['--lines' as string]: clamp,
          ['--chars-begin' as string]: short && truncate instanceof Object && truncate?.begin,
          ['--chars-end' as string]: short && truncate instanceof Object && truncate?.end,
        }}
        {...qa}
        {...props}
      >
        {text}
      </Container>
    );
  }
);

const Container = styled.span`
  ${text};
`;
