import { getContainer } from "../get-container";
import { getMaxWidth } from "../get-max-width";
import { getBreakpoints } from "../get-breakpoints";
import { getContainerAttributes } from "../get-container-attributes";

import { TContainerType } from "./interface";
import { TBreakpoints } from "../interface";
import { TSize } from "../get-container-query/interface";
import { TConfig } from "../get-container/interface";

type TContainerQueryType<T> = T extends TContainerType
  ? TContainerType
  : undefined;

function createContainerQueries<T>(
  initialBreakpoints: TBreakpoints,
  type?: TContainerQueryType<T>
) {
  const { breakpoints, next } = getBreakpoints(initialBreakpoints);

  type TQuery = keyof typeof initialBreakpoints;
  type TConfigQuery = T extends TContainerType ? TConfig : string;
  type TAttrsName = T extends TContainerType ? [string?] : [string];

  function up(query: TQuery, config?: TConfigQuery) {
    return getContainer({
      type,
      size: `(min-width: ${breakpoints[query]})`,
      config,
    });
  }

  function down(query: TQuery, config?: TConfigQuery) {
    return getContainer({
      type,
      size: `(max-width: ${getMaxWidth(breakpoints[query])})`,
      config,
    });
  }

  function only(query: TQuery, config?: TConfigQuery) {
    const nextQuery = next(query);
    let size: TSize;

    if (nextQuery)
      size = `(min-width: ${breakpoints[query]}) and (max-width: ${getMaxWidth(
        breakpoints[nextQuery]
      )})`;
    else size = `(min-width: ${breakpoints[query]})`;

    return getContainer({
      type,
      size,
      config,
    });
  }

  function between(queries: [TQuery, TQuery], config?: TConfigQuery) {
    return getContainer({
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
    attrs: (...name: TAttrsName) => getContainerAttributes(type, name?.[0]),
  };
}

export { createContainerQueries };
