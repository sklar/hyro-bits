import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { mapArgTypes } from '../stories';
import { Text as TextCmp, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: TextCmp,
  argTypes: {
    ...mapArgTypes(['as', 'clamp', 'truncate'], {}),
    ...mapArgTypes(['hyphens', 'word'], {
      control: { type: 'inline-radio' },
    }),
  },
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Wrapper>
    <TextCmp {...args}>
      In the 1960s with the Cold War in play, CIA agent Napoleon Solo successfully helps Gaby Teller
      defect to West Germany despite the intimidating opposition of KGB agent Illya Kuryakin. Later,
      all three unexpectedly find themselves working together in a joint mission to stop a private
      criminal organization from using Gaby's father's scientific expertise to construct their own
      nuclear bomb. Through clenched teeth and stylish poise, all three must find a way to cooperate
      for the sake of world peace, even as they each pursue their own agendas.
    </TextCmp>
    <TextCmp {...args}>
      With his reputation in tatters after the painfully unsuccessful delivery of a distinguished
      Japanese client, the former triple-A protection agent, Michael Bryce, is now reduced to a mere
      second-class bodyguard for hire, two years after the disgraceful incident. Under those
      circumstances, Bryce would do anything to prove his worth, and, before long, he accepts an
      offer from Interpol to escort the international assassin, Darius Kincaid, from Manchester to
      the Hague. The task seems simple: Bryce needs to transport him from point A to point B;
      nevertheless, the trip to the Netherlands is long and hazardous, and Kincaid--as the only one
      with the guts and enough hard evidence to testify against a tyrannical Belarusian dictator--is
      an obvious target. Undoubtedly, it's a tough job, as the mismatched duo will have to put aside
      their grudges, and race against the clock in a non-stop concerto for bullets. Can the hitman's
      bodyguard carry through the most important mission in his career?
    </TextCmp>
    <TextCmp {...args}>
      WithhisreputationintattersafterthepainfullyunsuccessfuldeliveryofadistinguishedJapaneseclienttheformertripleAprotectionagentMichaelBryceisnowreducedtoameresecondclassbodyguardforhiretwoyearsafterthedisgracefulincidentUnderthosecircumstancesBrycewoulddoanythingtoprovehisworthandbeforelongheacceptsanofferfromInterpoltoescorttheinternationalassassinDariusKincaidfromManchestertotheHagueThetaskseemssimpleBryceneedstotransporthimfrompointAtopointB;nevertheless,thetriptotheNetherlandsislongandhazardous,andKincaidastheonlyonewiththegutsandenoughhardevidencetotestifyagainstatyrannicalBelarusiandictatorisanobvioustarget.Undoubtedly,itsatoughjob,asthemismatchedduowillhavetoputasidetheirgrudgesandraceagainsttheclockinanonstopconcertoforbulletsCanthehitmansbodyguardcarrythroughthemostimportantmissioninhiscareer?
    </TextCmp>
  </Wrapper>
);

export const Text = Template.bind({});
Text.args = {
  as: 'p',
};

const Wrapper = styled.div`
  max-width: 80ch;
`;
