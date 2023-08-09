import LoginForm from "@/features/auth/components/login-form";
import AuthLayout from "@/layouts/auth-layout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function LoginPage() {
  const router = useRouter();

  function onSuccess() {
    const redirect = router.query.redirect as string;
    router.replace(redirect || "/");
  }

  return <LoginForm onSuccess={onSuccess} />;
}

LoginPage.getLayout = function (page: ReactElement) {
  return <AuthLayout title="Log in">{page}</AuthLayout>;
};
