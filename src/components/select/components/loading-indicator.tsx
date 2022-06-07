/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Idle } from '../../idle';
import { loadingIndicator } from '../select.styles';

export const LoadingIndicator = () => <Idle css={loadingIndicator} />;
