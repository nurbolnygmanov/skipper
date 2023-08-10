import { IS_BROWSER, IS_SERVER } from "@/config/constants";

import { seedDb } from "./seed-db";

function initializeMocks() {
  if (IS_SERVER) {
    const { server } = require("./server");
    server.listen();
  } else if (IS_BROWSER) {
    const { worker } = require("./browser");
    worker.start();
  }
  seedDb();
}

initializeMocks();
