import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MenuElement } from "./MenuElement";
import { MenuContext } from "@stories/menu/Menu";

const meta = {
  title: "Example/MenuElement",
  component: MenuElement,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof MenuElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <MenuContext.Provider value={{ invert: false, dark: "#000000",fontColor: "#ffffff" }}>
        <Story />
      </MenuContext.Provider>
    ),
  ],
  args: {
    icon: "/assets/accessibility.svg",
    label: "label test",
  },
};

export const lightMode: Story = {
  decorators: [
    (Story) => (
      <MenuContext.Provider value={{ invert: false, dark: "#ffffffff", fontColor: "#000000" }}>
        <Story />
      </MenuContext.Provider>
    ),
  ],
  args: {
    icon: "/assets/accessibility.svg",
    label: "label test",
  },
};

export const invertMode: Story = {
  decorators: [
    (Story) => (
      <MenuContext.Provider value={{ invert: true, dark: "#a33131ff", fontColor: "#000000" }}>
        <Story />
      </MenuContext.Provider>
    ),
  ],
  args: {
    icon: "/assets/accessibility.svg",
    label: "label test",
  },
};

