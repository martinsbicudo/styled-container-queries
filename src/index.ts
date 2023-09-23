import { createContainerQueries } from "./create-container-queries";
import { TContainerType } from "./create-container-queries/interface";

import { TBreakpoints } from "./interface";

function createStyledContainerQueries(initialBreakpoints: TBreakpoints) {
  const size = createContainerQueries<TContainerType>(
    initialBreakpoints,
    "size"
  );
  const inline = createContainerQueries<TContainerType>(
    initialBreakpoints,
    "inline-size"
  );
  const normal = createContainerQueries<TContainerType>(
    initialBreakpoints,
    "normal"
  );
  const query = createContainerQueries(initialBreakpoints);

  return {
    container: {
      size,
      inline,
      normal,
      query,
    },
  };
}

export { createStyledContainerQueries };
