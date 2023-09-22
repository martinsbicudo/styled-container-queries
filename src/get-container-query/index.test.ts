import { getContainerQuery } from ".";

describe("getContainerQuery", () => {
  test("should max-width container query", () => {
    const size = "(max-width: 49.98px)";
    const result = getContainerQuery(size);
    expect(result.trim()).toBe(`@container ${size}`);
  });

  test("should min-width container query", () => {
    const size = "(min-width: 50px)";
    const result = getContainerQuery(size);
    expect(result.trim()).toBe(`@container ${size}`);
  });

  test("should max-width and min-width container query", () => {
    const size = "(max-width: 49.98px) and (min-width: 50px)";
    const result = getContainerQuery(size);
    expect(result.trim()).toBe(`@container ${size}`);
  });

  test("should min-width and max-width container query", () => {
    const size = "(min-width: 300px) and (max-width: 49.98px)";
    const result = getContainerQuery(size);
    expect(result.trim()).toBe(`@container ${size}`);
  });

  test("should min-width container query with context", () => {
    const size = "(min-width: 600px)";
    const context = "context";
    const result = getContainerQuery(size, context);
    expect(result.trim()).toBe(`@container ${context} ${size}`);
  });
});
