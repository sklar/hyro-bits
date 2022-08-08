/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes, ReactElement, useCallback, useEffect } from 'react';

import { AlignmentFlexboxType, AlignmentPrimaryType, AlignmentTertiaryType } from '../../types';
import { Button, ButtonProps } from '../button';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { Text } from '../text';
import {
  backdrop as backdropStyle,
  body as bodyStyle,
  control as controlStyle,
  dialog,
  footer as footerStyle,
  header as headerStyle,
  title as titleStyle,
  wrapper as wrapperStyle,
} from './dialog.styles';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Active
   */
  active?: boolean;
  /**
   * Backdrop
   */
  backdrop?: boolean;
  /**
   * Z-index
   */
  index?: number;
  /**
   * Rejectable
   */
  rejectable?: boolean;
  /**
   * Size
   */
  size?: string;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';

  /**
   * Header
   */
  header?: ReactElement;
  /**
   * Title
   */
  title?: string;

  /**
   * Body bleed (handling `overflow`)
   */
  bleed?: boolean;

  /**
   * Footer
   */
  footer?: ReactElement;
  /**
   * Footer alignment, primary axis
   */
  justify?: AlignmentPrimaryType | AlignmentTertiaryType | AlignmentFlexboxType;

  /**
   * Event: Close
   */
  onClose: () => void;
}

/**
 * Dialog
 */
export const Dialog: React.FC<DialogProps> = ({
  active = false,
  backdrop = true,
  bleed = false,
  children,
  footer,
  header,
  index = 10,
  justify = 'flex-end',
  onClose,
  rejectable = true,
  size,
  theme,
  title,
  ...props
}): JSX.Element => {
  const qa = {
    'data-qa': 'dialog',
  };
  const onKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (rejectable) {
      document.addEventListener('keyup', onKeyUp);
      return () => {
        document.removeEventListener('keyup', onKeyUp);
      };
    }
  }, [onClose, onKeyUp, rejectable]);

  return (
    <Wrapper
      data-active={active || null}
      data-backdrop={backdrop}
      data-bleed={bleed || null}
      data-foot={footer ? true : null}
      data-head={header || title ? true : null}
      data-theme={theme || null}
      style={{ ['--dialog-index' as string]: index }}
    >
      {backdrop && <Backdrop data-dialog="backdrop" onClick={rejectable ? onClose : undefined} />}
      <Container {...qa} {...props} style={{ ['--dialog-size' as string]: size }}>
        {(header || title) && (
          <header css={headerStyle} data-dialog="header" data-qa="dialog-header">
            {header ? (
              header
            ) : (
              <Text as="h1" clamp={1} css={titleStyle}>
                {title}
              </Text>
            )}
          </header>
        )}
        <Body data-dialog="body" data-qa="dialog-body">
          {children}
        </Body>
        {footer && (
          <Flex
            as="footer"
            css={footerStyle}
            data-dialog="footer"
            data-qa="dialog-footer"
            justify={justify}
          >
            {footer}
          </Flex>
        )}
        {rejectable && <Control data-dialog="control" data-qa="button-close" onClick={onClose} />}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${wrapperStyle};
`;

const Backdrop = styled.div`
  ${backdropStyle};
`;

const Container = styled.section`
  ${dialog};
`;

const Body = styled.div`
  ${bodyStyle};
`;

const Control = (props: ButtonProps<'button'>) => (
  <Button
    css={controlStyle}
    icon={<Icon name="Times" />}
    round
    synthetic
    variant="tertiary"
    {...props}
  />
);
