import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useUser } from "../api/get-auth-user";
import { Loader } from "@/components/loader";

export type ProtectedProps = {
  children: ReactNode;
};

export const Protected = ({ children }: ProtectedProps) => {
  const { replace, asPath } = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user.data && !user.isLoading) {
      replace(`/?redirect=${asPath}`, undefined, { shallow: true });
    }
  }, [user, asPath, replace]);

  if (user.isLoading) {
    return <Loader />;
  }

  if (!user.data && !user.isLoading) return null;

  return <>{children}</>;
};
