import React, { ElementType, forwardRef, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { clamp, truncate } from '../utils/helpers';

export type TruncateOptionType = {
  begin: number;
  end: number;
};

function shorten(
  text: string,
  { begin = Infinity, end = Infinity }: TruncateOptionType
): JSX.Element {
  return (
    <>
      {text.length - (begin + end) ? (
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
   * Word break
   */
  word?: 'normal' | 'break' | 'keep';
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
      word = 'normal',
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
        data-word={word}
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
  &[data-clamp] {
    ${clamp};
  }

  &[data-hyphens='auto'] {
    hyphens: auto;
  }
  &[data-hyphens='none'] {
    hyphens: none;
  }

  &[data-space='normal'] {
    white-space: normal;
  }
  &[data-space='nowrap'] {
    white-space: nowrap;
  }
  &[data-space='pre'] {
    white-space: pre;
  }

  &[data-truncate='simple'] {
    ${truncate};
  }

  &[data-truncate='smart'] {
    --char-size: calc(0.68 * 1em);
    --size-begin: calc(var(--char-size) * (var(--chars-begin, 3) + 3));
    --size-end: calc(var(--char-size) * var(--chars-end, 6));

    display: inline-flex;
    max-width: 100%;

    span {
      overflow: hidden;
      white-space: nowrap;

      &:nth-of-type(1) {
        max-width: calc(100% - var(--size-end));
        min-width: var(--size-begin);
        text-overflow: ellipsis;
      }
      &:nth-of-type(2) {
        direction: rtl;
        max-width: var(--size-end);
      }
    }
  }

  &[data-word='break'] {
    word-break: break-all;
  }
  &[data-word='keep'] {
    word-break: keep-all;
  }
`;
