import { testData } from "../test-data";
import { db } from "./db";

export function seedDb() {
  const userCount = db.user.count();

  if (userCount > 0) return;

  testData.users.forEach((u) => db.user.create(u));
  testData.inspections.forEach((i) => db.inspection.create(i));
}
