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

    const inspection = db.inspection.findFirst({
      where: {
        id: {
          equals: inspectionId,
        },
      },
    });

    if (!inspection) {
      return res(
        ctx.delay(300),
        ctx.status(404),
        ctx.json({ message: "Not found!" })
      );
    }

    return res(ctx.delay(300), ctx.status(200), ctx.json(inspection));
  }
);

const deleteInspectionHandler = rest.delete(
  `${API_URL}/inspections/:inspectionId`,
  async (req, res, ctx) => {
    const inspectionId = req.params.inspectionId as string;

    const deletedInspection = db.inspection.delete({
      where: {
        id: {
          equals: inspectionId,
        },
      },
    });

    if (!deletedInspection) {
      return res(
        ctx.delay(300),
        ctx.status(404),
        ctx.json({ message: "Inspection not found!" })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json({ message: "Inspection deleted successfully!" })
    );
  }
);

const createInspectionHandler = rest.post(
  `${API_URL}/inspections`,
  async (req, res, ctx) => {
    const inspectionData = await req.json();

    const inspection = db.inspection.create({
      ...inspectionData,
    });

    return res(ctx.delay(300), ctx.status(200), ctx.json(inspection));
  }
);
export const inspectionHandlers = [
  getInspectionHandler,
  getInspectionsHandler,
  deleteInspectionHandler,
  createInspectionHandler,
];
