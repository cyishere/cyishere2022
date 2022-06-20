import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from ".";

export default {
  title: "Design System/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
