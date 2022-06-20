/* eslint-disable react/no-unescaped-entities */
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BlockQuote from ".";

export default {
  title: "Design System/BlockQuote",
  component: BlockQuote,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BlockQuote>;

const Template: ComponentStory<typeof BlockQuote> = (args) => (
  <BlockQuote {...args}>
    <p>
      Creativity is just connecting things. When you ask creative people how
      they did something, they feel a little guilty because they didn't really
      do it, they just saw something. It seemed obvious to them after a while.
      That's because they were able to connect experiences they've had and
      synthesize new things.
    </p>
  </BlockQuote>
);

export const Default = Template.bind({});

export const Info = Template.bind({});
Info.args = {
  variant: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};
