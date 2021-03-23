# Components [![Netlify Status](https://api.netlify.com/api/v1/badges/12dc96bb-b265-43f8-a631-906c22495fff/deploy-status)](https://app.netlify.com/sites/purplex-components-bd1db7/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and extended with [Storybook](https://storybook.js.org/docs/react/get-started/introduction).

### Table of Contents

- [Quick Start](#quick-start)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

```
yarn && yarn start
```


## Usage

### 🚀 Start Storybook

Runs the Storybook in the development mode.\
Open [http://192.168.1.14:6006/](http://192.168.1.14:6006/) to view it in the browser.

```
yarn start
```

The page will reload if you make edits.
You will also see any lint errors in the console.

### 🦾 Develop (app)

Runs the Storybook and compiles the package on every change.\
That's handy when developing component in other app context locally via `yarn link`.

```
yarn start:dev
```

### 🏗️ Build Storybook

Builds the Storybook as a static web app to the `storybook-static` folder.\
Your app is ready to be deployed!

```
yarn build
```

See the section about [publishing storybook](https://storybook.js.org/docs/react/workflows/publish-storybook) for more information.


### 🥊 Bump version

Bump and commit package version.

```
yarn bump<:patch|minor|major>?
```

### 📦 Bundle library

Bundle package with types into `dist` folder with [Rollup](https://rollupjs.org/).

```
yarn compile
```


## Troubleshooting

 ### 🚧 Installing package

Follow the [Github Packages instructions](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package).

TL;DR add `npmrc` with the access token in a project root.

```
//npm.pkg.github.com/:_authToken=7dc4e9ea1a76c7186d9fbe3b1460ea04ae5143f6
@purplenl:registry=https://npm.pkg.github.com
```

..and install it as dev dependency

```
yarn add --dev @purplenl/purplex-components
```


### 🚧 Invalid Hook Call Warning

Follow the [official workaround](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react).

TL;DR fire these commands in your Terminal to link your local app and library folders.

```
library
➜ yarn

app
➜ yarn link @purplenl/purplex-components

app/node_modules/react
➜ yarn link

library
➜ yarn link react
```
