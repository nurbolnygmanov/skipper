import { InspectionDto } from "@/testing/mocks/db";

export type InspectionInfo = {
  inspection: InspectionDto;
};

export default function InspectionInfo(props: InspectionInfo) {
  const { inspection } = props;
  return <div>{inspection.name}</div>;
}
