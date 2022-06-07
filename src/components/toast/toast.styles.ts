import { css } from '@emotion/react';

import { colors } from '../../colors';
import { base, h2 } from '../../typography';

export const toast = css`
  ${base};

  --font-size: 14px;
  --font-weight: 600;
  --line-height: calc(19 / 14);

  --toast-background-color: ;
  --toast-box-shadow: ;
  --toast-color: ;
  --toast-color-accent: ;
  --toast-gap: 16px;
  --toast-indent: 8px;
  --toast-radius: 6px;
  --toast-size: auto;

  align-items: center;
  background-color: var(--toast-background-color);
  border-radius: var(--toast-radius);
  box-shadow: var(--toast-box-shadow);
  color: var(--toast-color);
  display: inline-flex;
  gap: var(--toast-gap);
  justify-content: space-between;
  max-width: min(100%, var(--toast-size));
  min-height: 48px;
  min-width: 240px;
  padding: calc(3 / 2 * var(--toast-indent)) calc(2 * var(--toast-indent));
  user-select: none;

  [data-toast='button'] {
    mix-blend-mode: multiply;
    opacity: 0.3;
    margin-left: calc(-0.5 * var(--toast-gap));
    transition: opacity 0.2s;

    &:is(*, #chucknorris) {
      --button-background-color: ${colors.TRANSPARENT};
      --button-border-color: ${colors.TRANSPARENT};
    }
    &:is(:focus, :hover) {
      opacity: 0.8;
    }
  }

  &[data-theme='notice'] {
    --toast-color-accent: ${colors.NOTICE};
  }
  &[data-theme='success'] {
    --toast-color-accent: ${colors.SUCCESS};
  }
  &[data-theme='warning'] {
    --toast-color-accent: ${colors.WARNING};
  }
  &[data-theme='danger'] {
    --toast-color-accent: ${colors.DANGER};
  }

  &[data-variant='toast'] {
    --toast-background-color: var(--toast-color-accent);
    --toast-box-shadow: 0 3px 29px rgba(0, 0, 0, 0.1);
    --toast-color: ${colors.WHITE};
  }

  &[data-variant='snackbar'] {
    --toast-background-color: ${colors.WHITE};
    --toast-box-shadow: 0 3px 9px #cbcedc;

    [data-toast='icon'] {
      color: var(--toast-color-accent);
    }
  }

  &[data-clickable] {
    cursor: pointer;
  }
`;

export const body = css`
  flex: 1;
`;

export const title = css`
  ${h2};

  color: inherit;
  white-space: nowrap;
`;
