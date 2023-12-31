import { getContainerAttributes } from "../get-container-attributes";
import { getContainerQuery } from "../get-container-query";

import { IGetContainerParams } from "./interface";

const getContainer = ({ type, size, config = "" }: IGetContainerParams) => {
  const values = config.split(".");
  const name = values[0];
  const context = values[1];

  return `
    ${getContainerAttributes(type, name)}

    ${getContainerQuery(size, context)}
  `;
};

export { getContainer };
