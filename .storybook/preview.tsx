import React from "react";
import type { Preview } from "@storybook/react";
import "../styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={poppins.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
