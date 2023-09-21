import { IGetContainerParams } from "./interface";

const getContainerQuery = ({
  type,
  size,
  config = "",
}: IGetContainerParams) => {
  const [name, context = ""] = config.split("|");

  return `
    container-type: ${type};
    ${name ? `container-name: ${name};` : ""}

    @container${context}${size}
  `;
};

export { getContainerQuery };
