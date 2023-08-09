import { ReactElement } from "react";

import { useInspections } from "@/features/inspections/api/get-inspections";
import { InspecitonsList } from "@/features/inspections/components/inspections-list";
import { useUser } from "@/features/auth";
import { DashboardLayout } from "@/layouts/dashboard-layout";

export function DashboardInspectionsPage() {
  const user = useUser();
  const inspections = useInspections();

  if (!user.data) return null;

  return (
    <>
      <InspecitonsList />
    </>
  );
}

DashboardInspectionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
