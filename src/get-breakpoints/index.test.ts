import { getBreakpoints } from ".";

describe("getBreakpoints", () => {
  test("should return passed breakpoints", () => {
    const breakpoints = {
      sm: "300px",
      md: "500px",
    } as const;

    const result = getBreakpoints(breakpoints);
    expect(result.breakpoints).toEqual(breakpoints);
    expect(result.next("sm")).toEqual("md");
  });

  test("should return asc breakpoints", () => {
    const breakpoints = {
      md: "500px",
      sm: "300px",
    } as const;

    const result = getBreakpoints(breakpoints);
    expect(result.next("md")).toEqual(undefined);
    expect(result.breakpoints).toEqual({
      sm: "300px",
      md: "500px",
    });
  });
});
