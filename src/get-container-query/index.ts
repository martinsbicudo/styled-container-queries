import { TSize } from "./interface";

const getContainerQuery = (size: TSize, context?: string) => `
  @container${context}${size}
`;

export { getContainerQuery };
