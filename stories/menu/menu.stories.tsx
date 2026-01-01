import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Menu } from "./Menu";
import { MenuElement } from "@stories/menuElement/MenuElement";

const meta = {
  title: "Example/Menu",
  component: Menu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkMode: Story = {
  args: {
    dark: true,
    children: (
      <>
        <MenuElement icon="/accessibility.svg" label="Item 1" />
        <MenuElement icon="/accessibility.svg" label="hosszu item név ez" />
        <MenuElement icon="/accessibility.svg" label="Item 2" />
      </>
    ),
  },
};

export const lightMode: Story = {
  args: {
    children: (
      <>
        <MenuElement icon="/accessibility.svg" label="Item 1" />
        <MenuElement icon="/accessibility.svg" label="Item 2" />
      </>
    ),
  },
};
