import { css } from '@emotion/react';

export const icon = css`
  --icon-size: ;

  display: inline-block;
  flex-shrink: 0;
  height: var(--icon-size);
  width: var(--icon-size);

  svg {
    display: block;
  }

  &[data-size='xs'],
  &[data-size='sm'] {
    --icon-size: 16px;
  }
  &[data-size='md'] {
    --icon-size: 20px;
  }
  &[data-size='lg'] {
    --icon-size: 24px;
  }
  &[data-size='xl'] {
    --icon-size: 32px;
  }
`;
