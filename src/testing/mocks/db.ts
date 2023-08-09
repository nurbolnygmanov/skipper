import { uid } from "@/utils/uid";
import { factory, primaryKey } from "@mswjs/data";

export type UserDto = {
  id: string;
  createdAt: number;
  email: string;
  password: string;
};

export type InspectionDto = {
  name: string;
  installationType: string;
  constructionYear: number;
  company: string;
  type: string;
  diameter: string;
  material: string;
  coating: string;
};

const models = {
  user: {
    id: primaryKey(uid),
    createdAt: Date.now,
    email: String,
    password: String,
    organizationId: String,
  },
  inspection: {
    id: primaryKey(uid),
    name: String,
    installationType: String,
    constructionYear: Number,
    company: String,
    type: String,
    diameter: String,
    material: String,
    coating: String,
  },
};

export const db = factory(models);
