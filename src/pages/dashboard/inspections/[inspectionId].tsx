import { useRouter } from "next/router";
import { ReactElement } from "react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { useInspection } from "@/features/inspections/api/get-inspection";
import InspectionInfo from "@/features/inspections/components/inspection-info/inspection-info";
import { Seo } from "@/components/seo";

export default function DashboardInspectionsPage() {
  const router = useRouter();
  const inspectionId = router.query.inspectionId as string;

  const inspection = useInspection({ inspectionId });

  if (inspection.isLoading) {
    return <p>loading</p>;
  }

  if (!inspection.data) {
    return <p>Not found</p>;
  }

  return (
    <>
      <Seo title={`Inspection | ${inspection.data.name}`} />
      <InspectionInfo inspection={inspection.data} />
    </>
  );
}

DashboardInspectionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
