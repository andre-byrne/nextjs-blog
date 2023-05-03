import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../pages/**/*.mdx", "../pages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpack(config, options) {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
            ...config.resolve?.fallback,
            fs: false,
          }
        }
      }
  },
  framework: {
    name: '@storybook/nextjs' as any, // Add this
    options: {},
  },
};

export default config;
