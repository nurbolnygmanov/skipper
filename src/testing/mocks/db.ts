import { uid } from "@/utils/uid";
import { factory, primaryKey } from "@mswjs/data";

export type UserDto = {
  id: string;
  name: string;
  createdAt: number;
  email: string;
  password: string;
};

const models = {
  user: {
    id: primaryKey(uid),
    createdAt: Date.now,
    name: String,
    email: String,
    password: String,
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
