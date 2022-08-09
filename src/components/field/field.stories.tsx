import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Container, mapArgTypes } from '../../stories';
import {
  Field as Component,
  FieldHint,
  FieldLabel,
  FieldMessage,
  FieldMessageProps,
  FieldText,
} from '../field';
import { Grid } from '../grid';
import { Icon } from '../icon';
import { Input } from '../input';

export default {
  title: 'Components/Form/Field',
  component: FieldMessage,
  decorators: [
    (Story) => (
      <>
        <Grid columns="repeat(2, 1fr)" gap="24px">
          <Story />
        </Grid>
      </>
    ),
    withDesign,
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=16%3A998',
    },
  },
  args: {},
  argTypes: {
    ...mapArgTypes(['align', 'as', 'block', 'children', 'direction', 'gap', 'justify', 'wrap'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['theme'], {
      control: { type: 'inline-radio' },
    }),
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        // eslint-disable-next-line no-template-curly-in-string
        defaultValue: { summary: 'field-message-${theme}' },
      },
    },
  },
} as Meta;

const Template: Story<FieldMessageProps> = (args) => (
  <>
    <Container indent="24px" resize="both" size="300px">
      <Component>
        <FieldLabel>
          Label
          <FieldHint text="Optional" />
          <Icon name="QuestionCircle" size="xs" />
        </FieldLabel>
        <FieldText>Text to explain what this action might do to your story</FieldText>
        <Input
          placeholder="Hold my 🍺"
          leader={
            <>
              <Icon name="Search" />
            </>
          }
          trailer={
            <>
              <Icon name="TimesCircle" />
            </>
          }
        />
        <FieldText>Additional tip, hint or explanation</FieldText>
        <FieldMessage {...args}>And here comes a feedback message!</FieldMessage>
      </Component>
    </Container>
    <Container indent="24px" resize="both" size="300px">
      <Component>
        <FieldLabel>
          Really really really looooooooooooooong label
          <Icon name="QuestionCircle" size="xs" />
        </FieldLabel>
        <FieldText>Text to explain what this action might do to your story</FieldText>
        <Input
          placeholder="Hold my 🍺"
          leader={
            <>
              <Icon name="Search" />
            </>
          }
          trailer={
            <>
              <Icon name="TimesCircle" />
            </>
          }
        />
        <FieldText secondary>Secondary additional tip, hint or explanation</FieldText>
        <FieldMessage {...args}>And here comes a feedback message!</FieldMessage>
      </Component>
    </Container>
  </>
);

export const Field = Template.bind({});
