import LoginPage from "@/pages";
import { appRender, screen, userEvent, waitFor } from "@/testing/test-utils";

const router = {
  replace: jest.fn(),
  query: {},
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

describe("Login Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      appRender(<LoginPage />);

      const header = screen.queryByRole("heading", { name: /log in/i });
      expect(header).toBeInTheDocument();
    });

    it.each`
      labelText      | input
      ${/email/i}    | ${"email"}
      ${/password/i} | ${"password"}
    `("has $input input", ({ labelText }) => {
      appRender(<LoginPage />);

      expect(screen.getByLabelText(labelText)).toBeInTheDocument();
    });

    it.each`
      inputType     | inputRole     | labelText
      ${"password"} | ${"password"} | ${/password/i}
      ${"email"}    | ${"email"}    | ${/email/i}
    `(
      "has $inputType type for $inputRole input",
      ({ inputType, labelText }) => {
        appRender(<LoginPage />);

        const input = screen.getByLabelText(labelText) as HTMLInputElement;
        expect(input.type).toBe(inputType);
      }
    );

    it("has Login button", () => {
      appRender(<LoginPage />);

      const signUpButton = screen.queryByRole("button", { name: /log in/i });
      expect(signUpButton).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    it("should login user into the dashboard", async () => {
      appRender(<LoginPage />);
      const user = userEvent.setup();

      const emailInput = screen.getByRole("textbox", {
        name: /email/i,
      });
      const passwordInput = screen.getByLabelText(/password/i);
      const submitButton = screen.getByRole("button", {
        name: /log in/i,
      });
      const credentials = {
        email: "test@test.com",
        password: "test",
      };

      await user.type(emailInput, credentials.email);
      await user.type(passwordInput, credentials.password);
      await user.click(submitButton);

      await waitFor(() => {
        expect(router.replace).toHaveBeenCalledWith("/dashboard/inspections");
      });
    });
  });
});
