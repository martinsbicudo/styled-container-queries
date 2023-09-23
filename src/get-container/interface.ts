import {
  TContainerType,
  TContainerName,
  TContainerContext,
} from "../create-container-queries/interface";
import { TSize } from "../get-container-query/interface";

export type TConfig =
  | `${TContainerName}`
  | `${TContainerName}.${TContainerContext}`
  | `.${TContainerContext}`;

export interface IGetContainerParams {
  type?: TContainerType;
  size: TSize;
  config?: TConfig;
}
