import styled from '@emotion/styled';
import { useCombinedRef } from '@spicy-hooks/core';
import React, { forwardRef, HTMLAttributes, useEffect, useRef } from 'react';

export interface ClickOutsideGuardProps extends HTMLAttributes<HTMLDivElement> {
  ignore?: Element;
  listen?: boolean;
  onClickOutside: () => void;
}

/**
 * Click outside guard
 * @see https://css-tricks.com/click-outside-detector/
 */
export const ClickOutsideGuard = forwardRef<HTMLDivElement, ClickOutsideGuardProps>(
  ({ ignore, listen, onClickOutside, ...props }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRef(ref, innerRef);

    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClickOutside();
      handleEvent(event);
    };

    const handleEvent = (event: Event) => {
      if (innerRef.current && innerRef.current.contains(event.target as Node)) return;
      if (ignore && ignore.contains && ignore.contains(event.target as Node)) {
        return;
      }
      onClickOutside();
    };

    useEffect(() => {
      if (listen) {
        document.addEventListener('mousedown', handleEvent, false);
        document.addEventListener('touchend', handleEvent, false);
        document.addEventListener('keyup', onKeyUp);

        return () => {
          document.removeEventListener('mousedown', handleEvent, false);
          document.removeEventListener('touchend', handleEvent, false);
          document.removeEventListener('keyup', onKeyUp);
        };
      }
    });

    return <Container ref={combinedRef} {...props} />;
  }
);

const Container = styled.div`
  display: contents;
`;
