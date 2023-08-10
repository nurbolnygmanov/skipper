import { useRouter } from "next/router";
import { ReactElement } from "react";

import { Seo } from "@/components/seo";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { CreateInspectionForm } from "@/features/inspections/components/create-form";

export default function DashboardCreateInspectionPage() {
  const router = useRouter();

  const onSuccess = () => {
    //show notification
    router.push(`/dashboard/inspections`);
  };

  return (
    <>
      <Seo title="Create Inspection" />
      <CreateInspectionForm onSuccess={onSuccess} />
    </>
  );
}

DashboardCreateInspectionPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
