import { Link } from "@/components/link";
import { Inspection } from "../../types";

export type InspectionInfo = {
  inspection: Inspection;
};

const cardStyle: React.CSSProperties = {
  padding: "2rem",
  maxWidth: "400px",
  borderRadius: "var(--border-radius)",
  marginInline: "auto",
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
    <div style={cardStyle}>
      <Link as="link" href="/dashboard/inspections">
        &#9665; Back
      </Link>
      <header
        style={{
          borderBottom: "1px solid gray",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <h3>{name}</h3>
        <h3>{company}</h3>
      </header>
      <main>
        <ul
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "4rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
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
