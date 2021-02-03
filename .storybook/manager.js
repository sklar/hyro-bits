import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

import pkg from '../package.json';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: `Hyro Bits v${pkg.version}`,
  },
});
