import React from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Flex } from '../components/layout';
import * as TOKENS from './typography';

export default {
  title: 'Typography',
  decorators: [withDesign],
  parameters: {
    controls: { hideNoControlsWarning: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/New-Design-System?node-id=12%3A2',
    },
  },
} as Meta;

export const Typography: Story = () => (
  <>
    <Flex direction="column" gap="1em">
      <Token as="h1" data-token="h1">
        Heading 1
      </Token>
      <Token as="h2" data-token="h2">
        Heading 2
      </Token>
      <Token as="h3" data-token="h3">
        Heading 3
      </Token>
      <Token as="h4" data-token="h4">
        Heading 4
      </Token>
      <Token as="h5" data-token="h5">
        Heading 5
      </Token>
      <Token as="p" data-token="paragraph">
        Paragraph is a self-contained unit of discourse in writing dealing with a particular point
        or idea. A paragraph consists of one or more sentences. Though not required by the syntax of
        any language, paragraphs are usually an expected part of formal writing, used to organize
        longer prose. The oldest classical Greek and Latin writing had little or no space between
        words and could be written in boustrophedon (alternating directions).
      </Token>
      <Token data-token="button">Button</Token>
      <Token data-token="label">Label</Token>
      <Token data-token="input">Input</Token>
    </Flex>
  </>
);

const Token = styled.span`
  margin: 0;

  &[data-token='h1'] {
    ${TOKENS.h1};
  }
  &[data-token='h2'] {
    ${TOKENS.h2};
  }
  &[data-token='h3'] {
    ${TOKENS.h3};
  }
  &[data-token='h4'] {
    ${TOKENS.h4};
  }
  &[data-token='h5'] {
    ${TOKENS.h5};
  }
  &[data-token='paragraph'] {
    ${TOKENS.paragraph};
  }
  &[data-token='button'] {
    ${TOKENS.button};
  }
  &[data-token='label'] {
    ${TOKENS.label};
  }
  &[data-token='input'] {
    ${TOKENS.input};
  }
`;
