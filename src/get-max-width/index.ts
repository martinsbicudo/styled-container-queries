import { TWidthSize, TMaxWithSize } from "./interface";

const getMaxWidth = (size: TWidthSize): TMaxWithSize => {
  const sizeNumber = Number(size.replace("px", "")) - 1;
  return `${sizeNumber}.98px`;
};

export { getMaxWidth };
