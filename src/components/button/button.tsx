import { ComponentProps } from "react";
import styles from "./button.module.scss";

export type Variant = "primary" | "danger" | "outline";

export type ButtonProps = {
  variant: Variant;
} & ComponentProps<"button">;

export function Button(props: ButtonProps) {
  const { children, variant, ...restProps } = props;

  return (
    <button className={styles[variant]} {...restProps}>
      {children}
    </button>
  );
}
