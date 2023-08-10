import { forwardRef, ForwardedRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./input-field.module.scss";

export type InputFieldProps = {
  label?: string;
  type?: "text" | "email" | "password" | "textarea";
  error?: FieldError;
} & Partial<UseFormRegisterReturn>;

export const InputField = forwardRef(function InputField(
  props: InputFieldProps,
  ref: ForwardedRef<HTMLInputElement | null>
) {
  const { label, type, name, error, ...inputProps } = props;

  return (
    <p>
      <label className={styles.container}>
        {label}
        <input
          className={styles.input}
          type={type}
          name={name}
          {...inputProps}
          ref={ref}
        />
      </label>
      <small className={styles.error}>{error?.message}</small>
    </p>
  );
});
