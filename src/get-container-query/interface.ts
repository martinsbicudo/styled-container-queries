import {
  TContainerType,
  TContainerName,
  TContainerContext,
} from "../create-container-queries/interface";

export type TMaxWidth = `max-width: ${number}.98px`;

export type TMinWidth = `min-width: ${number}px`;

export type TSize =
  | `(${TMaxWidth})`
  | `(${TMinWidth})`
  | `(${TMinWidth}) and (${TMaxWidth})`
  | `(${TMaxWidth}) and (${TMinWidth})`;

export type TConfig =
  | `${TContainerName}`
  | `${TContainerName}|${TContainerContext}`
  | `|${TContainerContext}`;

export interface IGetContainerParams {
  type: TContainerType;
  size: TSize;
  config?: TConfig;
}
