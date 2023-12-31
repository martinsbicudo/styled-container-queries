import { TContainerType } from "../create-container-queries/interface";

const getContainerAttributes = (type?: TContainerType, name?: string) => `
  ${type ? `container-type: ${type};` : ""}
  ${name ? `container-name: ${name};` : ""}
`;

export { getContainerAttributes };
