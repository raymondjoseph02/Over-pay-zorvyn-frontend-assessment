export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export type ProfileAction = "PROFILE" | "SETTINGS" | "LOGOUT";

export type ProfileIcon = "user" | "settings" | "logout";
export type ButtonVariant = "primary" | "secondary" | "outline";
export type WalletActionIcon = "send" | "receive" | "invoicing" | "more";
export type WalletAction = "SEND" | "RECEIVE" | "INVOICING" | "MORE";
export type statsColor = "home" | "shopping" | "others";
export type DonutData = {
  label: string;
  value: number;
  color: string;
};

export type TransactionStatus = "pending" | "success" | "failed";
export type SortDirection = "asc" | "desc";
export type SortColumn =
  | "name"
  | "date"
  | "invoiceId"
  | "amount"
  | "status"
  | "";
export type FormatMode = "label" | "short" | "full";
