import { forwardRef, ForwardedRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputFieldProps = {
  label?: string;
  type?: "text" | "email" | "password" | "textarea";
} & Partial<UseFormRegisterReturn>;

export const InputField = forwardRef(function InputField(
  props: InputFieldProps,
  ref: ForwardedRef<HTMLInputElement | null>
) {
  const { label, type, name, ...inputProps } = props;

  return (
    <p>
      <label>
        {label}
        <input type={type} name={name} {...inputProps} ref={ref} />
      </label>
    </p>
  );
});
