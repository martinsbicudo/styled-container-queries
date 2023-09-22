import { getContainerAttributes } from ".";
import { getInlineString } from "../test/get-inline-string";

describe("getContainerAttributes", () => {
  test("should inline-size container type", () => {
    const result = getContainerAttributes("inline-size");
    expect(result.trim()).toEqual(`container-type: inline-size;`);
  });

  test("should size container type", () => {
    const result = getContainerAttributes("size");
    expect(result.trim()).toBe(`container-type: size;`);
  });

  test("should inline-size container type and container name", () => {
    const result = getContainerAttributes("inline-size", "name");
    expect(getInlineString(result)).toBe(
      `container-type:inline-size;container-name:name;`
    );
  });
});
