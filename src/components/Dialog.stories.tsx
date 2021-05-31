import styled from '@emotion/styled';
import { useArgs } from '@storybook/client-api';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { mapArgTypes } from '../stories';
import { Dialog, DialogProps } from './Dialog';
import { Button } from './index';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
    withDesign,
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A5322',
    },
  },
  args: {
    active: true,
    footer: true,
    header: true,
    size: 600,
    title: 'Perfume: The Story of a Murderer',
  },
  argTypes: {
    ...mapArgTypes(['title'], {
      control: { type: 'text' },
    }),
    ...mapArgTypes(['header', 'footer', 'bleed', 'rejectable'], {
      control: { type: 'boolean' },
    }),
    ...mapArgTypes(['size'], {
      control: { type: 'range', min: 300, max: 1000, step: 1 },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['justify'], {
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['theme'], {
      control: { type: 'inline-radio' },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['active'], { table: { category: 'States' } }),
    ...mapArgTypes(['onClose'], { table: { category: 'Events' } }),
  },
} as Meta;

interface StoryProps extends Omit<DialogProps, 'footer' | 'header' | 'size'> {
  footer: boolean;
  header: boolean;
  size: number;
}

const Template: Story<StoryProps> = ({ footer, header, size, title, ...args }) => {
  const [{ active }, updateArgs] = useArgs();
  const handleDialog = () => updateArgs({ active: !active });

  return (
    <>
      <Trigger synthetic text="Dialog!" variant="primary" onClick={handleDialog} />
      <Dialog
        {...args}
        active={active}
        footer={
          footer ? (
            <>
              <Button text="Cancel" onClick={handleDialog} />
              <Button text="Delete" variant="primary" theme="danger" />
            </>
          ) : undefined
        }
        size={`${size}px`}
        title={header && title ? title : undefined}
        onClose={handleDialog}
      >
        <p>
          Jean-Baptiste Grenouille came into the world unwanted, expected to die, yet born with an
          unnerving sense of smell that created alienation, as well as talent. Of all of the smells
          around him, Grenouille is beckoned to the scent of a woman's body, and spends the rest of
          his life attempting to smell her essence again by becoming a perfumer, and creating the
          essence of an innocence lost.
        </p>
        <p>
          He still had enough perfume left to enslave the whole world if he so chose. He could walk
          to Versailles and have the king kiss his feet. He could write the pope a perfumed letter
          and reveal himself as the new Messiah. He could do all this, and more, if he wanted to. He
          possessed a power stronger than the power of money, or terror, or death — the invincible
          power to command the love of man kind. There was only one thing the perfume could not do.
          It could not turn him into a person who could love and be loved like everyone else. So, to
          hell with it he thought. To hell with the world. With the perfume. With himself.
        </p>
      </Dialog>
    </>
  );
};

export const DialogOverview = Template.bind({});
DialogOverview.storyName = 'Dialog';

const Wrapper = styled.div`
  [class*='preview'] & {
    background: url('https://source.unsplash.com/nD9tEn63suc/1000') center / cover no-repeat;
      center / cover no-repeat;
    height: 55vh;
    position: relative;

    & > div {
      position: absolute;
    }
  }
`;

const Trigger = styled(Button)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
