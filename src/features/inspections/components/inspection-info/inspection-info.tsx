import { Inspection } from "../../types";

export type InspectionInfo = {
  inspection: Inspection;
};

export default function InspectionInfo(props: InspectionInfo) {
  const { inspection } = props;
  return <div>{inspection.name}</div>;
}
