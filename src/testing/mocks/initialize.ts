import { IS_BROWSER, IS_SERVER } from "@/config/constants";

import { seedDb } from "./seed-db";

async function initializeMocks() {
  if (IS_SERVER) {
    const { server } = await import("./server"); // common require gives an error during build
    server.listen();
  } else if (IS_BROWSER) {
    const { worker } = await import("./browser");
    worker.start();
  }
  seedDb();
}

initializeMocks();
