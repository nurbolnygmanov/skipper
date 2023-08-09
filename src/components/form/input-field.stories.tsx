import { Meta, StoryFn } from "@storybook/react";

import { InputField, InputFieldProps } from "./input-field";

const meta: Meta = {
  title: "Components/Form/InputField",
  component: InputField,
};

export default meta;

const Template: StoryFn<InputFieldProps> = (props) => <InputField {...props} />;

export const Default = Template.bind({});

Default.args = {
  label: "Name",
};
