import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Container, global, mapArgTypes } from '../../stories';
import { Text as TextCmp, TextProps } from '../text';

export default {
  title: 'Components/Text',
  component: TextCmp,
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Story />
      </>
    ),
  ],
  args: {
    as: 'p',
    clamp: 10,
  },
  argTypes: {
    ...mapArgTypes(['content', 'truncate'], {
      control: { disable: true },
      table: { disable: true },
    }),
    ...mapArgTypes(['as'], {
      control: { type: 'text' },
      table: {
        type: { summary: 'ElementType<any>' },
      },
    }),
    ...mapArgTypes(['clamp'], {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    }),
    ...mapArgTypes(['hyphens', 'space', 'wrap'], {
      control: { type: 'inline-radio' },
    }),
    'data-qa': {
      control: 'text',
      description: 'QA handle',
      table: {
        type: { summary: 'string' },
        // eslint-disable-next-line no-template-curly-in-string
        defaultValue: { summary: 'text-${as}' },
      },
    },
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
      nevertheless, the trip to the Netherlands is long and hazardous, and Kincaid—as the only one
      with the guts and enough hard evidence to testify against a tyrannical Belarusian dictator—is
      an obvious target. Undoubtedly, it's a tough job, as the mismatched duo will have to put aside
      their grudges, and race against the clock in a non-stop concerto for bullets. Can the hitman's
      bodyguard carry through the most important mission in his career?
    </TextCmp>

    <Container indent="16px" resize="both">
      <h2>Wrap</h2>
      <TextCmp as="p" style={{ maxWidth: '100%' }} wrap={args.wrap}>
        WithhisreputationintattersafterthepainfullyunsuccessfuldeliveryofadistinguishedJapaneseclienttheformertripleAprotectionagentMichaelBryceisnowreducedtoameresecondclassbodyguardforhiretwoyearsafterthedisgracefulincidentUnderthosecircumstancesBrycewoulddoanythingtoprovehisworthandbeforelongheacceptsanofferfromInterpoltoescorttheinternationalassassinDariusKincaidfromManchestertotheHagueThetaskseemssimpleBryceneedstotransporthimfrompointAtopointB;nevertheless,thetriptotheNetherlandsislongandhazardous,andKincaidastheonlyonewiththegutsandenoughhardevidencetotestifyagainstatyrannicalBelarusiandictatorisanobvioustarget.Undoubtedly,itsatoughjob,asthemismatchedduowillhavetoputasidetheirgrudgesandraceagainsttheclockinanonstopconcertoforbulletsCanthehitmansbodyguardcarrythroughthemostimportantmissioninhiscareer?
      </TextCmp>
      <TextCmp as="p" style={{ maxWidth: '100%' }} wrap={args.wrap}>
        The task seems simple: Bryce needs to transport him from point A to point B; nevertheless,
        the trip to the Netherlands is long and hazardous, and Kincaid—as the only one with the guts
        and enough hard evidence to testify against a tyrannical Belarusian dictator—is an obvious
        target. Undoubtedly, it's a tough job, as the mismatched duo will have to put aside their
        grudges, and race against the clock in a non-stop concerto for bullets. Can the hitman's
        bodyguard carry through the most important mission in his career?
      </TextCmp>
    </Container>

    <Container indent="16px" resize="horizontal">
      <h2 style={{ marginBottom: 0 }}>Truncate</h2>

      <TextCmp truncate style={{ maxWidth: '100%' }} {...args}>
        WithhisreputationintattersafterthepainfullyunsuccessfuldeliveryofadistinguishedJapaneseclienttheformertripleAprotectionagentMichaelBryceisnowreducedtoameresecondclassbodyguardforhiretwoyearsafterthedisgracefulincidentUnderthosecircumstancesBrycewoulddoanythingtoprovehisworthandbeforelongheacceptsanofferfromInterpoltoescorttheinternationalassassinDariusKincaidfromManchestertotheHagueThetaskseemssimpleBryceneedstotransporthimfrompointAtopointB;nevertheless,thetriptotheNetherlandsislongandhazardous,andKincaidastheonlyonewiththegutsandenoughhardevidencetotestifyagainstatyrannicalBelarusiandictatorisanobvioustarget.Undoubtedly,itsatoughjob,asthemismatchedduowillhavetoputasidetheirgrudgesandraceagainsttheclockinanonstopconcertoforbulletsCanthehitmansbodyguardcarrythroughthemostimportantmissioninhiscareer?
      </TextCmp>

      <List>
        <Item>
          <Preview />
          <TextCmp content="test.mmmmmmmmmmmmmmmmmmmmmmmm.jpg" truncate={{ end: 8 }} />
        </Item>
        <Item>
          <Preview />
          <TextCmp content="test.iiiiiiiiiiiiiiiiiiiiiiii.jpg" truncate={{ end: 8 }} />
        </Item>
        <Item>
          <Preview />
          <TextCmp content="test.oooooooooooooooooooooooo.jpg" truncate={{ end: 8 }} />
        </Item>
        <Item>
          <Preview />
          <TextCmp content="t.jpg" truncate={{ end: 8 }} />
        </Item>
        <Item>
          <Preview />
          <TextCmp content="test.jpg" truncate={{ end: 8 }} />
        </Item>
        <Item>
          <Preview />
          <TextCmp content="testeeeaaauuu.jpg" truncate={{ begin: 3, end: 8 }} />
        </Item>
      </List>
    </Container>
  </Wrapper>
);

export const Text = Template.bind({});

const Wrapper = styled.div`
  width: min(80ch, 100%);
`;

const List = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Preview = styled.div`
  background: url('https://source.unsplash.com/9XngoIpxcEo/300x200') center / cover;
  border-radius: 6px;
  height: 100px;
`;
