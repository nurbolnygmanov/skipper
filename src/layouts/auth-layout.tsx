import { ReactNode } from "react";

type AuthLayoutProps = { children: ReactNode };

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

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
        {children}
      </div>
    </div>
  );
}
