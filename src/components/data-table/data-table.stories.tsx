import { Meta, StoryFn } from "@storybook/react";

import { testData } from "../../testing/test-data";

import { DataTable, DataTableProps } from "./data-table";
import { Inspection } from "@/features/inspections/types";
import { baseColumn } from "@/features/inspections/components/inspections-list/inspections-colums";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";

const meta: Meta = {
  title: "Components/DataTable",
  component: DataTable,
};

export default meta;

const data = testData.inspections.slice(0, 5);

const columnHelper = createColumnHelper<Inspection>();

const columns = [
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

const Template: StoryFn<DataTableProps<Inspection>> = (props) => (
  <DataTable {...props} />
);

export const Default = Template.bind({});

Default.args = {
  columns,
  data,
};

export const Empty = Template.bind({});

Empty.args = {
  columns,
  data: [],
};
