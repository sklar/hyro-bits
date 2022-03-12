import { mapArgTypes } from '../../../stories';

export interface Option {
  label: string;
  value: string;
}

export interface OptionGroup {
  label: string;
  options: Option[];
}

export const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'berries', label: 'Berries' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'orange', label: 'Orange' },
  { value: 'pistachio', label: 'Pistachio' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const optionsGrouped = [
  {
    label: "Monty Python's Flying Circus",
    options: [
      { value: 'Chapman', label: 'Chapman' },
      { value: 'Cleese', label: 'Cleese' },
      { value: 'Gilliam', label: 'Gilliam' },
      { value: 'Idle', label: 'Idle' },
      { value: 'Jones', label: 'Jones' },
      { value: 'Palin', label: 'Palin' },
    ],
  },
  {
    label: 'Rupan Sansei',
    options: [
      { value: 'Lupin', label: 'Arsène Lupin' },
      { value: 'Jigen', label: 'Daisuke Jigen' },
      { value: 'Fujiko', label: 'Fujiko Mine' },
      { value: 'Goemon', label: 'Goemon Ishikawa' },
      { value: 'Zenigata', label: 'Koichi Zenigata' },
    ],
  },
];

export const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/rEhCUlh0IRFrtoFeIK5kEt/Design-System-2?node-id=766%3A0',
};

export const argTypes = {
  ...mapArgTypes(
    ['data-active', 'data-hover', 'data-invalid', 'helpers', 'maxMenuHeight', 'options', 'style'],
    {
      control: { disable: true },
      table: { disable: true },
    }
  ),
  ...mapArgTypes(['placeholder'], { control: { type: 'text' } }),
  'data-qa': {
    control: 'text',
    description: 'QA handle',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'select' },
    },
  },
  ...mapArgTypes(['menu', 'size'], {
    control: { type: 'inline-radio' },
    table: { category: 'Modifiers' },
  }),
  ...mapArgTypes(['length'], {
    table: {
      category: 'Modifiers',
    },
  }),
  ...mapArgTypes(['leader'], {
    control: { disable: true },
    table: { category: 'Modifiers', type: { summary: 'ReactElement' } },
  }),
  ...mapArgTypes(['active', 'busy', 'disabled', 'invalid', 'readonly'], {
    table: { category: 'States' },
  }),
};
