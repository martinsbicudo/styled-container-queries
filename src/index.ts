import { createContainerQueries } from "./create-container-queries";

import { TBreakpoints } from "./interface";

function createStyledContainerQueries(initialBreakpoints: TBreakpoints) {
  const size = createContainerQueries("size", initialBreakpoints);
  const inline = createContainerQueries("inline-size", initialBreakpoints);

  return {
    containers: {
      size,
      inline,
    },
  };
}

export { createStyledContainerQueries };
