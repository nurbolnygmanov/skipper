import { ReactElement } from "react";

import { useInspections } from "@/features/inspections/api/get-inspections";
import { InspecitonsList } from "@/features/inspections/components/inspections-list";
import { useUser } from "@/features/auth";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Seo } from "@/components/seo";

export default function DashboardInspectionsPage() {
  const user = useUser();
  const inspections = useInspections();

  if (!user.data) return null;

  return (
    <>
      <Seo title="Inspections" />
      <InspecitonsList inspections={inspections.data} />
    </>
  );
}

DashboardInspectionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
