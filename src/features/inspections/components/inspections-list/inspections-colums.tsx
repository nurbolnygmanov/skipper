import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { createColumnHelper } from "@tanstack/react-table";
import { DeleteHandler } from "../../api/delete-inspection";
import { Inspection } from "../../types";

const columnHelper = createColumnHelper<Inspection>();

const baseColumn = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => {
      const rowId = info.row.original.id;
      return <Link href={`inspections/${rowId}`}>{info.getValue()}</Link>;
    },
  }),
  columnHelper.accessor((row) => row.company, {
    header: "Company",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.installationType, {
    header: "Installation type",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.constructionYear, {
    header: "Constructon year",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.type, {
    header: "Type",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.diameter, {
    header: "Diameter",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.material, {
    header: "Material",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.coating, {
    header: "Coating",
    cell: (info) => info.getValue(),
  }),
];

type TableColumnProps = {
  deleteRow: DeleteHandler;
};

export const tableColumns = ({ deleteRow }: TableColumnProps) =>
  baseColumn.concat(
    columnHelper.accessor("id", {
      header: "Delete",
      cell: (info) => (
        <Button
          variant="primary"
          onClick={() => {
            const inspectionId = info.row.original.id;
            deleteRow(inspectionId);
          }}
        >
          Delete
        </Button>
      ),
    })
  );
