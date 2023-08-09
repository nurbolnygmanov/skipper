export type Inspection = {
  id: string;
  name: string;
  installationType: string;
  constructionYear: number;
  company: string;
  type: string;
  diameter: string;
  material: string;
  coating: string;
};

export type CreateInspectionData = Pick<
  Inspection,
  | "installationType"
  | "constructionYear"
  | "company"
  | "type"
  | "diameter"
  | "material"
  | "coating"
  | "name"
>;
