import { Button } from "@/components/button/";
import { InputField } from "@/components/form/input-field";
import { useForm } from "react-hook-form";
import { useLogin } from "../../api/login";
import { AuthUser, LoginData } from "../../types";
import styles from "./login-form.module.scss";

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles["login-form"]}>
      <InputField
        label="Email"
        type="email"
        error={errors["email"]}
        {...register("email", { required: "Please provide email" })}
      />
      <InputField
        label="Password"
        type="password"
        error={errors["password"]}
        {...register("password", { required: "Please provide password" })}
      />
      <Button variant="outline" type="submit" disabled={login.isLoading}>
        Log in
      </Button>
    </form>
  );
}
