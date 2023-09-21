import { createContainerQueries } from "./create-container-queries";
import { getContainerAttributes } from "./get-container-attributes";

import { TBreakpoints } from "./interface";

function createStyledContainerQueries(initialBreakpoints: TBreakpoints) {
  const size = createContainerQueries(initialBreakpoints, "size");
  const inline = createContainerQueries(initialBreakpoints, "inline-size");
  const query = createContainerQueries(initialBreakpoints);
  const attrs = getContainerAttributes;

  return {
    containers: {
      size,
      inline,
      attrs,
      query,
    },
  };
}

export { createStyledContainerQueries };
