import { css } from '@emotion/react';

export const input = css`
  input {
    appearance: textfield;
    font-variant-numeric: tabular-nums;
    text-align: right;
  }
`;

export const stepperContainer = css`
  --gap: 1px;

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  height: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

  button {
    --button-radius: 2px;

    border-bottom-right-radius: calc(2 * var(--button-radius));
    flex: 1;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));

    &:first-of-type {
      transform: rotateX(180deg);
    }
  }
`;
