import { getContainerQuery } from "../get-container-query";
import { getMaxWidth } from "../get-max-width";
import { getBreakpoints } from "../get-breakpoints";

import { TContainerType } from "./interface";
import { TBreakpoints } from "../interface";
import { TSize, TConfig } from "../get-container-query/interface";

const createContainerQueries = (
  type: TContainerType,
  initialBreakpoints: TBreakpoints
) => {
  const { breakpoints, next } = getBreakpoints(initialBreakpoints);

  type TQuery = keyof typeof initialBreakpoints;

  function up(query: TQuery, config?: TConfig) {
    return getContainerQuery({
      type,
      size: `(min-width: ${breakpoints[query]})`,
      config,
    });
  }

  function down(query: TQuery, config?: TConfig) {
    return getContainerQuery({
      type,
      size: `(max-width: ${getMaxWidth(breakpoints[query])})`,
      config,
    });
  }

  function only(query: TQuery, config?: TConfig) {
    const nextQuery = next(query);
    let size: TSize;

    if (nextQuery)
      size = `(min-width: ${breakpoints[query]}) and (max-width: ${getMaxWidth(
        breakpoints[nextQuery]
      )})`;
    else size = `(min-width: ${breakpoints[query]})`;

    return getContainerQuery({
      type,
      size,
      config,
    });
  }

  function between(queries: [TQuery, TQuery], config?: TConfig) {
    return getContainerQuery({
      type,
      size: `(min-width: ${
        breakpoints[queries[0]]
      }) and (max-width: ${getMaxWidth(breakpoints[queries[1]])})`,
      config,
    });
  }

  return {
    up,
    down,
    only,
    between,
  };
};

export { createContainerQueries };
