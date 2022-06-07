import styled from '@emotion/styled';
import { useArgs } from '@storybook/client-api';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { mapArgTypes } from '../../stories';
import { Button } from '../button';
import { Overlay, OverlayProps } from '../overlay';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  decorators: [(Story) => <Story />, withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=500%3A5322',
    },
  },
  args: {
    active: false,
  },
  argTypes: {
    ...mapArgTypes(['index'], {
      control: { type: 'range', min: -1, max: 1000, step: 1 },
      table: { category: 'Modifiers' },
    }),
    ...mapArgTypes(['active'], { table: { category: 'States' } }),
    ...mapArgTypes(['onClose'], { table: { category: 'Events' } }),
  },
} as Meta;

const Template: Story<OverlayProps> = (args) => {
  const [{ active }, updateArgs] = useArgs();
  const handleOverlay = () => updateArgs({ active: !active });

  return (
    <>
      <Trigger synthetic text="Hit me!" variant="primary" size="lg" onClick={handleOverlay} />
      <Overlay {...args} active={active} onClick={handleOverlay} />
    </>
  );
};

export const OverlayOverview = Template.bind({});
OverlayOverview.storyName = 'Overlay';

const Trigger = styled(Button)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
