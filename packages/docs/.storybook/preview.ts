import { themes } from '@storybook/theming'
import type { Preview } from '@storybook/react'
/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: 'dark'
    }
  },
};

export default preview;