import Button from "@/components/button/button";
import InputField from "@/components/form/input-field";
import { useForm } from "react-hook-form";
import { useLogin } from "../api/login";
import { AuthUser } from "../types";
import { ErrorMessage } from "@hookform/error-message";

export type LoginData = { email: string; password: string };

export type LoginFormProps = {
  onSuccess: (user: AuthUser) => void;
};

export default function LoginData({ onSuccess }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const login = useLogin({ onSuccess });

  function onSubmit(credentials: LoginData) {
    login.submit(credentials);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="email"
        type="email"
        {...register("email", { required: "Please provide email" })}
      />
      <ErrorMessage errors={errors} name="email" />
      <InputField
        label="password"
        type="password"
        {...register("password", { required: "Please provide password" })}
      />
      <ErrorMessage errors={errors} name="password" />
      <Button variant="outline" type="submit" disabled={login.isLoading}>
        Log in
      </Button>
    </form>
  );
}

// label + input
// react-hook-form
// next router
