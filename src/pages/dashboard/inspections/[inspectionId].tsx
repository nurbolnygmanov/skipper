import { useRouter } from "next/router";
import { ReactElement } from "react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { useInspection } from "@/features/inspections/api/get-inspection";
import InspectionInfo from "@/features/inspections/components/inspection-info/inspection-info";
import { Seo } from "@/components/seo";
import { Loader } from "@/components/loader";

const containerStyle: React.CSSProperties = {
  width: "100%",
};
export default function DashboardInspectionPage() {
  const router = useRouter();
  const inspectionId = router.query.inspectionId as string;

  const inspection = useInspection({ inspectionId });

  if (inspection.isLoading) {
    return <Loader />;
  }

  if (!inspection.data) {
    return <p>Not found</p>;
  }

  return (
    <>
      <Seo title={`Inspection | ${inspection.data.name}`} />
      <div style={containerStyle}>
        <InspectionInfo inspection={inspection.data} />
      </div>
    </>
  );
}

DashboardInspectionPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
