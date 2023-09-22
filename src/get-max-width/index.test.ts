import { getMaxWidth } from ".";

describe("getMaxWidth", () => {
  test("should return max-width to 100px", () => {
    expect(getMaxWidth("100px")).toBe("99.98px");
  });

  test("should return max-width to 33px", () => {
    expect(getMaxWidth("33px")).toBe("32.98px");
  });
});
