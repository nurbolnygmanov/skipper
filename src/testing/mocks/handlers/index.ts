import { authHandlers } from "./auth";
import { inspectionHandlers } from "./inspections";

export const handlers = [...authHandlers, ...inspectionHandlers];
