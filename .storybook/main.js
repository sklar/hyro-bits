const path = require('path');

module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-designs'],

  framework: '@storybook/react',

  staticDirs: ['../src/assets'],

  stories: [
    '../src/*.stories.mdx',
    '../src/colors/*.stories.@(mdx|ts|tsx)',
    '../src/typography/*.stories.@(mdx|ts|tsx)',
    '../src/components/**/*.stories.@(mdx|ts|tsx)',
  ],

  webpackFinal: async (config, { configType }) => {
    const maxAssetSize = 200 * 1024;

    config.devtool = false;
    config.module.rules.push({
      test: /\.woff(2)?$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      chunks: 'all',
      maxSize: maxAssetSize,
      minSize: 30 * 1024,
    };
    config.performance = {
      ...config.performance,
      maxAssetSize: maxAssetSize,
      maxEntrypointSize: 1000 * maxAssetSize,
    };

    return config;
  },
};
