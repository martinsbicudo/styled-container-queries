import { createContainerQueries } from ".";
import { getInlineString } from "../test/get-inline-string/";
import { TContainerType } from "./interface";

describe("createContainerQueries", () => {
  test("should return queries with inline-size container type", () => {
    const breakpoints = {
      sm: "300px",
      md: "500px",
    } as const;

    const result = createContainerQueries<TContainerType>(
      breakpoints,
      "inline-size"
    );
    expect(getInlineString(result.up("sm"))).toBe(
      "container-type:inline-size;@container(min-width:300px)"
    );
    expect(getInlineString(result.up("sm", "name"))).toBe(
      "container-type:inline-size;container-name:name;@container(min-width:300px)"
    );
    expect(getInlineString(result.up("sm", "name.context"))).toBe(
      "container-type:inline-size;container-name:name;@containercontext(min-width:300px)"
    );
    expect(getInlineString(result.down("sm"))).toBe(
      "container-type:inline-size;@container(max-width:299.98px)"
    );
    expect(getInlineString(result.only("sm"))).toBe(
      "container-type:inline-size;@container(min-width:300px)and(max-width:499.98px)"
    );
    expect(getInlineString(result.only("md"))).toBe(
      "container-type:inline-size;@container(min-width:500px)"
    );
    expect(getInlineString(result.between(["sm", "md"]))).toBe(
      "container-type:inline-size;@container(min-width:300px)and(max-width:499.98px)"
    );
  });

  test("should return queries with size container type", () => {
    const breakpoints = {
      sm: "300px",
      md: "500px",
    } as const;

    const result = createContainerQueries<TContainerType>(breakpoints, "size");
    expect(getInlineString(result.up("sm"))).toBe(
      "container-type:size;@container(min-width:300px)"
    );
    expect(getInlineString(result.up("sm", "name"))).toBe(
      "container-type:size;container-name:name;@container(min-width:300px)"
    );
    expect(getInlineString(result.up("sm", "name.context"))).toBe(
      "container-type:size;container-name:name;@containercontext(min-width:300px)"
    );
    expect(getInlineString(result.down("sm"))).toBe(
      "container-type:size;@container(max-width:299.98px)"
    );
    expect(getInlineString(result.only("sm"))).toBe(
      "container-type:size;@container(min-width:300px)and(max-width:499.98px)"
    );
    expect(getInlineString(result.only("md"))).toBe(
      "container-type:size;@container(min-width:500px)"
    );
    expect(getInlineString(result.between(["sm", "md"]))).toBe(
      "container-type:size;@container(min-width:300px)and(max-width:499.98px)"
    );
  });

  test("should return queries with normal container type", () => {
    const breakpoints = {
      sm: "300px",
      md: "500px",
    } as const;

    const result = createContainerQueries<TContainerType>(
      breakpoints,
      "normal"
    );
    expect(getInlineString(result.up("sm"))).toBe(
      "container-type:normal;@container(min-width:300px)"
    );
    expect(getInlineString(result.up("sm", "name"))).toBe(
      "container-type:normal;container-name:name;@container(min-width:300px)"
    );
    expect(getInlineString(result.up("sm", "name.context"))).toBe(
      "container-type:normal;container-name:name;@containercontext(min-width:300px)"
    );
    expect(getInlineString(result.down("sm"))).toBe(
      "container-type:normal;@container(max-width:299.98px)"
    );
    expect(getInlineString(result.only("sm"))).toBe(
      "container-type:normal;@container(min-width:300px)and(max-width:499.98px)"
    );
    expect(getInlineString(result.only("md"))).toBe(
      "container-type:normal;@container(min-width:500px)"
    );
    expect(getInlineString(result.between(["sm", "md"]))).toBe(
      "container-type:normal;@container(min-width:300px)and(max-width:499.98px)"
    );
  });

  test("should return queries without container type", () => {
    const breakpoints = {
      sm: "300px",
      md: "500px",
    } as const;

    const result = createContainerQueries(breakpoints);
    expect(getInlineString(result.up("sm"))).toBe(
      "@container(min-width:300px)"
    );
    expect(getInlineString(result.up("sm", "name"))).toBe(
      "container-name:name;@container(min-width:300px)"
    );
    expect(getInlineString(result.up("sm", "name.context"))).toBe(
      "container-name:name;@containercontext(min-width:300px)"
    );
    expect(getInlineString(result.down("sm"))).toBe(
      "@container(max-width:299.98px)"
    );
    expect(getInlineString(result.only("sm"))).toBe(
      "@container(min-width:300px)and(max-width:499.98px)"
    );
    expect(getInlineString(result.only("md"))).toBe(
      "@container(min-width:500px)"
    );
    expect(getInlineString(result.between(["sm", "md"]))).toBe(
      "@container(min-width:300px)and(max-width:499.98px)"
    );
  });
});
