export type TContainerType = "size" | "inline-size" | "normal";

export type TContainerName = string;

export type TContainerContext = string;

export interface IMountContainerConfig {
  type: TContainerType;
  name: TContainerName;
  context: TContainerContext;
}
