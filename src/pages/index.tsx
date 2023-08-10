import { Seo } from "@/components/seo/seo";
import LoginForm from "@/features/auth/components/login-form/login-form";
import AuthLayout from "@/layouts/auth-layout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function LoginPage() {
  const router = useRouter();

  function onSuccess() {
    router.replace("/dashboard/inspections");
  }

  return (
    <>
      <Seo title="Log in" />
      <h1>Log in</h1>
      <LoginForm onSuccess={onSuccess} />
    </>
  );
}

LoginPage.getLayout = function (page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
