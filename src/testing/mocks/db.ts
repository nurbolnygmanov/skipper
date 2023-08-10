import { uid } from "@/utils/uid";
import { factory, primaryKey } from "@mswjs/data";

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
