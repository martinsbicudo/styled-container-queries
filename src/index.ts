import { createContainerQueries } from "./create-container-queries";
import { getContainerAttributes } from "./get-container-attributes";

import { TBreakpoints } from "./interface";

function createStyledContainerQueries(initialBreakpoints: TBreakpoints) {
  const size = createContainerQueries(initialBreakpoints, "size");
  const inline = createContainerQueries(initialBreakpoints, "inline-size");
  const query = createContainerQueries(initialBreakpoints);
  const attrs = {
    size: (name?: string) => getContainerAttributes("size", name),
    inline: (name?: string) => getContainerAttributes("inline-size", name),
  };

  return {
    container: {
      size: {
        ...size,
        attrs: attrs.size,
      },
      inline: {
        ...inline,
        attrs: attrs.inline,
      },
      query,
    },
  };
}

export { createStyledContainerQueries };
