import { TBreakpoints } from "../interface";

const getBreakpoints = (initialBreakpoints: TBreakpoints) => {
  let breakpoints = Object.entries(initialBreakpoints);
  breakpoints = breakpoints.sort(
    ([, a], [, b]) => Number(a.replace("px", "")) - Number(b.replace("px", ""))
  );

  return {
    breakpoints: Object.fromEntries(breakpoints),
    next: (query: keyof typeof initialBreakpoints) => {
      const index = breakpoints.findIndex(([key]) => key === query);
      return breakpoints[index + 1]?.[0];
    },
  };
};

export { getBreakpoints };
