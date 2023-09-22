import { TSize } from "./interface";

const getContainerQuery = (size: TSize, context?: string) => `
  @container${context ? ` ${context} ` : " "}${size}
`;

export { getContainerQuery };
