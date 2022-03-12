/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Idle } from '../../../indicator';
import { loadingIndicator } from '../Select.styles';

export const LoadingIndicator = () => <Idle css={loadingIndicator} />;
