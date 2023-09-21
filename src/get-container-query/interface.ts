export type TMaxWidth = `max-width: ${number}.98px`;

export type TMinWidth = `min-width: ${number}px`;

export type TSize =
  | `(${TMaxWidth})`
  | `(${TMinWidth})`
  | `(${TMinWidth}) and (${TMaxWidth})`
  | `(${TMaxWidth}) and (${TMinWidth})`;
