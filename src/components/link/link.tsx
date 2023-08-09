import NexLink from "next/link";
import { ReactNode } from "react";

export type LinkProps = {
  href: string;
  children: ReactNode;
};

export function Link(props: LinkProps) {
  const { href, children } = props;

  return <NexLink href={href}>{children}</NexLink>;
}
