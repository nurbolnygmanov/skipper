import { DataTable } from "@/components/data-table";
import { InspectionDto } from "@/testing/mocks/db";
import { tableColumns } from "./inspections-colums";

type InspectionListProps = {
  inspections: InspectionDto[];
};

export function InspecitonsList(props: InspectionListProps) {
  const { inspections } = props;

  const inspectionsColumns = tableColumns();

  return <DataTable columns={inspectionsColumns} data={inspections || []} />;
}
