import { useRouter } from "next/router";
import { ReactElement } from "react";

import { Seo } from "@/components/seo";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { CreateInspectionForm } from "@/features/inspections/components/create-form";
import { Link } from "@/components/link";
import { useNotifications } from "@/stores/notifications/notification";

export default function DashboardCreateInspectionPage() {
  const router = useRouter();
  const { showNotification } = useNotifications();

  const onSuccess = () => {
    showNotification({
      type: "success",
      title: "Inspection created",
    });
    router.push(`/dashboard/inspections`);
  };

  return (
    <>
      <Seo title="Create Inspection" />
      <header style={{ marginBlock: "1rem" }}>
        <Link as="link" href="/dashboard/inspections">
          &#9665; Back
        </Link>
      </header>
      <CreateInspectionForm onSuccess={onSuccess} />
    </>
  );
}

DashboardCreateInspectionPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
