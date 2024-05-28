import Heading from ".";

import type { Meta, StoryObj } from "@storybook/react";
import { HeadingProps } from "./Heading";

const meta = {
  title: "UI/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
  args: { as: "h1" },
  tags: ["autodocs"],
} satisfies Meta<HeadingProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};
