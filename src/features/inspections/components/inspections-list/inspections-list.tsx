import { InspectionDto } from "@/testing/mocks/db";

type InspectionListProps = {
  inspections: InspectionDto[];
};

export function InspecitonsList(props: InspectionListProps) {
  const { inspections } = props;
  return (
    <ul>
      {inspections.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );
}
