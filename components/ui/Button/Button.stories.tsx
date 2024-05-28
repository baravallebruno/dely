import Button from ".";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonProps } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    fullWidth: { control: "boolean" },
  },
  args: { onClick: fn(), fullWidth: false, variant: "default" },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center w-80 bg-gray-100 p-10">
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <Wrapper>
      <Button {...args} />
    </Wrapper>
  ),
};
