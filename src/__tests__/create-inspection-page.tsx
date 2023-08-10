import { CreateInspectionData } from "@/features/inspections/types";
import DashboardCreateInspectionPage from "@/pages/dashboard/inspections/create";
import { appRender, screen, userEvent, waitFor } from "@/testing/test-utils";

const router = {
  push: jest.fn(),
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

const inspectionData = {
  name: "name test",
  coating: "coating test",
  company: "company test",
  constructionYear: "2023",
  diameter: "diameter test",
  installationType: "installationType test",
  material: "material test",
  type: "type test",
};

describe("Dashboard create inspection page", () => {
  it("should create a new inspection", async () => {
    appRender(<DashboardCreateInspectionPage />);

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    });
    const coatingInput = screen.getByRole("textbox", {
      name: /coating/i,
    });
    const companyInput = screen.getByRole("textbox", {
      name: /company/i,
    });
    const constructionYearInput = screen.getByRole("textbox", {
      name: /construction year/i,
    });
    const diameterInput = screen.getByRole("textbox", {
      name: /diameter/i,
    });
    const materialInput = screen.getByRole("textbox", {
      name: /material/i,
    });
    const installationTypeInput = screen.getByRole("textbox", {
      name: /^installation type$/i,
    });

    const typeInput = screen.getByRole("textbox", {
      name: /^type$/i,
    });

    const user = userEvent.setup();

    await user.type(nameInput, inspectionData.name);
    await user.type(coatingInput, inspectionData.coating);
    await user.type(companyInput, inspectionData.company);
    await user.type(constructionYearInput, inspectionData.constructionYear);
    await user.type(diameterInput, inspectionData.diameter);
    await user.type(installationTypeInput, inspectionData.installationType);
    await user.type(materialInput, inspectionData.material);
    await user.type(typeInput, inspectionData.type);

    const submitButton = screen.getByRole("button", {
      name: /create/i,
    });

    await user.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText(/inspection created/i)).toBeInTheDocument()
    );
  });
});
