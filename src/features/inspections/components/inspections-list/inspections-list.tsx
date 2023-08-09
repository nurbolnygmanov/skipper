import { DataTable } from "@/components/data-table";
import { tableColumns } from "./inspections-colums";
import { useDeleteInspection } from "../../api/delete-inspection";
import { Inspection } from "../../types";

type InspectionListProps = {
  inspections: Inspection[];
};

export function InspecitonsList(props: InspectionListProps) {
  const { inspections } = props;
  const { mutate } = useDeleteInspection();

  const inspectionsColumns = tableColumns({
    deleteRow: mutate,
  });

  return <DataTable columns={inspectionsColumns} data={inspections || []} />;
}
