import { getContainer } from ".";
import { getInlineString } from "../test/get-inline-string";

describe("getContainer", () => {
  test("should return only container query", () => {
    const size = "(max-width: 49.98px)";
    const result = getContainer({
      size,
    });
    expect(result.trim()).toBe(`@container ${size}`);
  });

  test("should return only container query with context", () => {
    const size = "(max-width: 49.98px)";
    const context = "context";
    const result = getContainer({
      size,
      config: `.${context}`,
    });
    expect(result.trim()).toBe(`@container ${context} ${size}`);
  });

  test("should return container name and container query with context", () => {
    const size = "(max-width: 49.98px)";
    const context = "context";
    const name = "name";
    const result = getContainer({
      size,
      config: `${name}.${context}`,
    });
    expect(getInlineString(result)).toBe(
      `container-name:${name};@container${context}${getInlineString(size)}`
    );
  });

  test("should return attrs and container query", () => {
    const size = "(max-width: 49.98px)";
    const type = "inline-size";
    const result = getContainer({
      type,
      size,
    });
    expect(getInlineString(result)).toBe(
      `container-type:${type};@container${getInlineString(size)}`
    );
  });

  test("should return attrs and container query with context", () => {
    const size = "(max-width: 49.98px)";
    const type = "inline-size";
    const context = "context";
    const result = getContainer({
      type,
      size,
      config: `.${context}`,
    });
    expect(getInlineString(result)).toBe(
      `container-type:${type};@container${context}${getInlineString(size)}`
    );
  });

  test("should return attrs with name and container query with context", () => {
    const size = "(max-width: 49.98px)";
    const type = "inline-size";
    const name = "name";
    const context = "context";
    const result = getContainer({
      type,
      size,
      config: `${name}.${context}`,
    });
    expect(getInlineString(result)).toBe(
      `container-type:${type};container-name:${name};@container${context}${getInlineString(
        size
      )}`
    );
  });
});
