import { Meta, StoryFn } from "@storybook/react";

import { Button, ButtonProps } from "./button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

const Template: StoryFn<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: "Click Me",
};
