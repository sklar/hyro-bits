import styled from '@emotion/styled';
import RcTooltip from 'rc-tooltip';
import React, { ReactElement, useMemo } from 'react';

import { arrow, key, label, separator, shortcut, tooltip } from './tooltip.styles';

export const CLASSNAME = 't00lt1p' as const;

const DELAY_ENTER = 0.4;
const DELAY_LEAVE = 0.1;
const SEPARATOR = '+';
const SUPER_KEY = 'super';
const SUPER_VALUE = navigator.platform.includes('Mac') ? '⌘' : 'Ctrl';

export interface TooltipProps {
  /**
   * Children
   */
  children?: ReactElement;
  /**
   * Content
   */
  content?: ReactElement;
  /**
   * Label
   */
  label?: string;
  /**
   * Shortcut
   */
  shortcut?: string;

  /**
   * Trigger
   */
  trigger?: string | string[];
  /**
   * Delay, onmouseenter
   */
  delayEnter?: number;
  /**
   * Delay, onmouseleave
   */
  delayLeave?: number;
  /**
   * Placement
   */
  placement?: 'bottom' | 'left' | 'right' | 'top';
  /**
   * Size aka max. width
   */
  size?: string;

  /**
   * State: Active
   */
  active?: boolean;
  /**
   * State: Disabled
   */
  disabled?: boolean;
  /**
   * State: Visible
   */
  visible?: boolean;
}

/**
 * Tooltip wrapper.
 * TODO: Replace `rc-tooltip` with some lightweight alternative, e.g. popper, tippy or tether.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  active,
  children,
  content,
  delayEnter = DELAY_ENTER,
  delayLeave = DELAY_LEAVE,
  disabled,
  label,
  placement,
  shortcut = '',
  size = '192px',
  ...props
}): JSX.Element => {
  const shortcuts = useMemo(
    () =>
      shortcut
        .split(SEPARATOR)
        .map((key, i) => <Key key={`key-${i}`}>{key.replace(SUPER_KEY, SUPER_VALUE)}</Key>)
        .reduce((acc: JSX.Element[], key, i) => {
          return acc.length === 0 ? [key] : [...acc, <Separator key={`separator-${i}`} />, key];
        }, []),
    [shortcut]
  );

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <>
      <RcTooltip
        arrowContent={<Arrow />}
        mouseEnterDelay={delayEnter}
        mouseLeaveDelay={delayLeave}
        overlay={
          <Container
            data-active={active || null}
            data-content={content || null}
            style={{ ['--size' as string]: size }}
          >
            {content ? (
              content
            ) : (
              <>
                {label && <Label data-label>{label}</Label>}
                {shortcut && <Shortcut>{shortcuts}</Shortcut>}
              </>
            )}
          </Container>
        }
        placement={placement}
        prefixCls={CLASSNAME}
        {...props}
      >
        {children}
      </RcTooltip>
    </>
  );
};

const Container = styled.div`
  ${tooltip};
`;

const Arrow = styled.div`
  ${arrow};
`;

const Label = styled.span`
  ${label};
`;

const Shortcut = styled.span`
  ${shortcut};
`;

const Key = styled.kbd`
  ${key};
`;

const Separator = styled.span`
  ${separator};
`;
