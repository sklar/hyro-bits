import { css, keyframes } from '@emotion/react';

const segmentAnimation = keyframes`
  0%  { opacity: 0 }
  100%  { opacity: 1 }
`;

export const spinner = css`
  --size: ;

  aspect-ratio: 1;
  color: var(--color);
  display: inline-grid;
  flex-shrink: 0;
  place-content: center;
  width: var(--size);

  &[data-size='xs'],
  &[data-size='sm'] {
    --size: 16px;
  }
  &[data-size='md'] {
    --size: 20px;
  }
  &[data-size='lg'] {
    --size: 24px;
  }
  &[data-size='xl'] {
    --size: 32px;
  }

  svg {
    aspect-ratio: inherit;
    display: block;
    width: inherit;
  }

  path {
    animation: ${segmentAnimation} var(--duration) infinite reverse steps(var(--segments));
    animation-delay: calc((var(--index) - var(--segments)) * var(--duration) / var(--segments));
  }
`;
