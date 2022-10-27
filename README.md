# Components [![Netlify Status](https://api.netlify.com/api/v1/badges/12dc96bb-b265-43f8-a631-906c22495fff/deploy-status)](https://app.netlify.com/sites/purplex-components-bd1db7/deploys)

### Table of Contents

- [Quick Start](#quick-start)
- [Usage](#usage)

---

## Quick Start

```
yarn && yarn start
```

## Usage

### ⚡ Install

```
yarn add purplenl/purplex-components
```

## ✨ Import

There're 3 entry points.
Every component has its own entry point, but not every component is available on the general entry point.

```typescript
// General
import { Button, ButtonProps } from "purplex-components";

// Component related w/ related types, hooks and styles
import { ComponentName } from "purplex-components/base/<component-name>";
import { Button, button, sizes } from "purplex-components/base/button";

// Theme w/ color and typography tokens (not a theme provider)
import { colors, h1 } from "purplex-components/theme";
```
### 🍱 Components

| Components | General entry | Component entry |
| ---------- | :-----------: | :-------------: |
| [Button](src/components/button/) | ✅ | ✅ |
| [ClickOtsideGuard](src/components/click-outside-guard/) | ✅ | ✅ |
| [Dialog](src/components/dialog/) | ✅ | ✅ |
| [Divider](src/components/divider/) | ✅ | ✅ |
| [Field](src/components/field/) | ✅ | ✅ |
| [Flex](src/components/flex/) | ✅ | ✅ |
| [Grid](src/components/grid/) | ✅ | ✅ |
| [Icon](src/components/icon/) | ✅ | ✅ |
| [Idle](src/components/idle/) | ✅ | ✅ |
| [Input](src/components/input/) | ✅ | ✅ |
| [Menu](src/components/menu/) | ✅ | ✅ |
| [Navigation](src/components/navigation/) | ✅ | ✅ |
| [NumberInput](src/components/number-input/) | ⛔ | ✅ |
| [Order](src/components/order/) | ⛔ | ✅ |
| [Overlay](src/components/overlay/) | ✅ | ✅ |
| [Pagination](src/components/pagination/) | ⛔ | ✅ |
| [Range](src/components/range/) | ⛔ | ✅ |
| [Select](src/components/select/) | ⛔ | ✅ |
| [Slider](src/components/slider/) | ⛔ | ✅ |
| [Spinner](src/components/slider/) | ✅ | ✅ |
| [Status](src/components/status/) | ✅ | ✅ |
| [Switch](src/components/switch/) | ✅ | ✅ |
| [Table](src/components/table/) | ⛔ | ✅ |
| [Text](src/components/text/) | ✅ | ✅ |
| [Textarea](src/components/textarea/) | ✅ | ✅ |
| [Toast](src/components/toast/) | ✅ | ✅ |
| [Tooltip](src/components/tooltip/) | ✅ | ✅ |


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

Bundle package into `dist` folder with [tsup](https://tsup.egoist.sh/).

```
yarn compile
```

### 🏄‍♂️ Update and Consume library

#### `purplex-components`

1. add/tweak what's needed
1. run `yarn compile:icons` if adding new icons
1. run `yarn compile` to update the bundle
1. create PR (resolve CR feedback and rebase conflicts with the `master` branch)
1. squash and merge

#### `purplex-awesome-webapp`

Reinstal `purplex-components` to fetch the latest changes from `master` by running:
```
yarn add purplenl/purplex-components
```  
You can verify it by comparing the commit SHA in with the value used in `yarn.lock`.
