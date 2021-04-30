import styled from '@emotion/styled';

import { colors, h3 } from '../../theme';

export const MenuTitle = styled.h5`
  ${h3};

  margin-bottom: 12px;
  margin-top: 8px;

  [data-theme='dark'] & {
    --color: ${colors.WHITE};
  }
`;
