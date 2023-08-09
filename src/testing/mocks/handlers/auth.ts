import { rest } from "msw";
import { API_URL } from "@/config/constants";
import { UserDto, db } from "../db";
import { AuthUser } from "@/features/auth/types";

type AuthData = {
  email: string;
  password: string;
};

export const loginHandler = rest.post(
  `${API_URL}/auth/login`,
  async (req, res, ctx) => {
    const credentials = await req.json();
    const { user, jwt } = authenticate(credentials);

    return res(
      ctx.delay(500),

      ctx.cookie("auth-token", jwt, {
        path: "/",
        httpOnly: true,
      }),

      ctx.json({ user })
    );
  }
);

export const authHandlers = [loginHandler];

export function authenticate({ email, password }: AuthData) {
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (user?.password === password) {
    const sanitizedUser = sanitizeUser(user);
    return { user: sanitizedUser, jwt: "123456" };
  }

  throw new Error("Invalid username or password");
}

function sanitizeUser(user: UserDto): AuthUser {
  const userCopy = { ...user };

  const { password, ...result } = userCopy;
  return result;
}
