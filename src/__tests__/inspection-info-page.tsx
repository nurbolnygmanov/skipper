import DashboardInspectionPage from "@/pages/dashboard/inspections/[inspectionId]";
import DashboardCreateInspectionPage from "@/pages/dashboard/inspections/create";
import { testData } from "@/testing/test-data";
import {
  appRender,
  screen,
  waitFor,
  waitForLoadingToFinish,
} from "@/testing/test-utils";

const inspection = testData.inspections[0];

const router = {
  query: {
    inspectionId: inspection.id,
  },
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

describe("Inspection info page", () => {
  it("should render inspection details", async () => {
    const { findByText, getByText } = appRender(<DashboardInspectionPage />);

    await waitForLoadingToFinish();

    const coating = await findByText(`Coating: ${inspection.coating}`);
    expect(
      await findByText(`Construction year: ${inspection.constructionYear}`)
    ).toBeInTheDocument();
    expect(
      await findByText(`Diameter: ${inspection.diameter}`)
    ).toBeInTheDocument();
    expect(
      getByText(`Installation type: ${inspection.installationType}`)
    ).toBeInTheDocument();
    expect(getByText(`Material: ${inspection.material}`)).toBeInTheDocument();
    expect(getByText(`Type: ${inspection.type}`)).toBeInTheDocument();

    expect(coating).toBeInTheDocument();
  });
});
