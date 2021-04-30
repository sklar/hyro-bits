import styled from '@emotion/styled';

import { colors } from '../../theme';

export const MenuDivider = styled.div`
  --color: ${colors.STROKE};
  --size: 2px;

  background-color: var(--color);
  border-radius: 1000px;
  height: var(--size);

  [data-theme='dark'] & {
    --color: ${colors.DARK_STROKE};
  }
`;
