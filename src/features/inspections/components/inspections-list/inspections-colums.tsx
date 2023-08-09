import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { InspectionDto } from "@/testing/mocks/db";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<InspectionDto>();

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

export const tableColumns = () =>
  baseColumn.concat(
    columnHelper.accessor("id", {
      header: "Delete",
      cell: (info) => (
        <Button
          variant="primary"
          onClick={() => {
            console.log("deleted");
          }}
        >
          Delete
        </Button>
      ),
    })
  );
