import { PropsWithChildren } from "react";

type AuthLayoutProps = PropsWithChildren<{ title: string }>;

export default function AuthLayout(props: AuthLayoutProps) {
  const { title, children } = props;

  return (
    <div
      style={{ height: "100%", width: "100%", backgroundColor: "lightblue" }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
