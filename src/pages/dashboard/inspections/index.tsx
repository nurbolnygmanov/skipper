import { ReactElement } from "react";

import { useInspections } from "@/features/inspections/api/get-inspections";
import { InspecitonsList } from "@/features/inspections/components/inspections-list";
import { useUser } from "@/features/auth";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Seo } from "@/components/seo";
import { Link } from "@/components/link";

export default function DashboardInspectionsPage() {
  const user = useUser();
  const inspections = useInspections();

  if (!user.data) return null;

  return (
    <>
      <Seo title="Inspections" />
      <header
        style={{
          marginBlock: "2rem",
          paddingInline: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h3>Inspections</h3>
        <Link as="button" href={"/dashboard/inspections/create"}>
          &#8853; Create
        </Link>
      </header>
      <InspecitonsList inspections={inspections.data} />
    </>
  );
}

DashboardInspectionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
