import { Link } from "@/components/link";
import { Inspection } from "../../types";
import styles from "./inspection-info.module.scss";

export type InspectionInfo = {
  inspection: Inspection;
};

export default function InspectionInfo(props: InspectionInfo) {
  const {
    name,
    coating,
    company,
    constructionYear,
    diameter,
    installationType,
    material,
    type,
  } = props.inspection;

  return (
    <div className={styles.container}>
      <Link as="link" href="/dashboard/inspections">
        &#9665; Back
      </Link>
      <header className={styles.header}>
        <h3>{name}</h3>
        <h3>{company}</h3>
      </header>
      <main>
        <ul className={styles.list}>
          <li>Coating: {coating}</li>
          <li>Construction year: {constructionYear}</li>
          <li>Diameter: {diameter}</li>
          <li>Installation type: {installationType}</li>
          <li>Material: {material}</li>
          <li>Type: {type}</li>
        </ul>
      </main>
    </div>
  );
}
