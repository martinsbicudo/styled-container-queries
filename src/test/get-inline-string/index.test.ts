import { getInlineString } from ".";

describe("getInlineString", () => {
  test("should return max-width to 100px", () => {
    expect(
      getInlineString(
        `
          test1;
            test2
        `
      )
    ).toBe("test1;test2");
  });
});
