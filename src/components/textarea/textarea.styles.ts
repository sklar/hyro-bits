import { css } from '@emotion/react';

import { container as containerStyle, input as inputStyle } from '../input';

export const indicator = css`
  background-image: linear-gradient(90deg, transparent, var(--input-background-color) 60%);
  padding-block: 6px;
  padding-inline-start: 2em;
  place-self: start end;
  position: absolute;
`;

export const container = css`
  ${containerStyle};

  align-items: stretch;
  display: inline-grid;
  position: relative;
  padding-block: calc(0.8 * var(--input-indent));

  &::after,
  textarea,
  [data-indicator] {
    grid-area: 1 / 1 / -1 / -1;
  }

  &[data-expandable] {
    &::after {
      content: attr(data-value);
      min-width: 0;
      overflow: hidden;
      overflow-wrap: break-word;
      visibility: hidden;
      white-space: pre-wrap;
    }
  }
`;

export const textarea = css`
  ${inputStyle};

  width: 100%;

  [data-expandable] & {
    overflow-y: hidden;
  }

  [data-resize='both'] & {
    resize: both;
  }
  [data-resize='horizontal'] & {
    resize: horizontal;
  }
  [data-resize='vertical'] & {
    resize: vertical;
  }
  [data-resize='none'] & {
    resize: none;
  }
`;
