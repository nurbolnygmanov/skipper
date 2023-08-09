import NexLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

export type LinkProps = {
  children: ReactNode;
} & NextLinkProps;

export function Link(props: LinkProps) {
  const { href, children } = props;

  return <NexLink href={href}>{children}</NexLink>;
}
