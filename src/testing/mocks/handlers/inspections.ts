import { rest } from "msw";
import { API_URL } from "@/config/constants";
import { db } from "../db";

const getInspectionsHandler = rest.get(
  `${API_URL}/inspections`,
  async (_, res, ctx) => {
    const inspections = db.inspection.getAll();

    return res(ctx.delay(300), ctx.status(200), ctx.json(inspections));
  }
);

const getInspectionHandler = rest.get(
  `${API_URL}/inspections/:inspectionId`,
  async (req, res, ctx) => {
    const inspectionId = req.params.inspectionId as string;

    const job = db.inspection.findFirst({
      where: {
        id: {
          equals: inspectionId,
        },
      },
    });

    if (!job) {
      return res(
        ctx.delay(300),
        ctx.status(404),
        ctx.json({ message: "Not found!" })
      );
    }

    return res(ctx.delay(300), ctx.status(200), ctx.json(job));
  }
);

export const inspectionHandlers = [getInspectionHandler, getInspectionsHandler];
