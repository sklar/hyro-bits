import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
  },
  docs: {
    theme: themes.dark,
  },
  options: {
    storySort: {
      order: ['Colors', 'Components'],
    },
  },
};
