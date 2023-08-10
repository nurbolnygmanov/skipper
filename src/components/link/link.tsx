import NexLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";
import styles from "./link.module.scss";

export type LinkProps = {
  children: ReactNode;
  as: "link" | "button";
} & NextLinkProps;

export function Link(props: LinkProps) {
  const { href, as, children } = props;

  return (
    <NexLink className={styles[as]} href={href}>
      {children}
    </NexLink>
  );
}
