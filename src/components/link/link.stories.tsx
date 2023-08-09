import { Meta, StoryFn } from "@storybook/react";

import { Link, LinkProps } from "./link";

const meta: Meta = {
  title: "Components/Link",
  component: Link,
};

export default meta;

const Template: StoryFn<LinkProps> = (props) => <Link {...props} />;

export const Default = Template.bind({});

Default.args = {
  href: "/",
  children: "Click Me",
};
