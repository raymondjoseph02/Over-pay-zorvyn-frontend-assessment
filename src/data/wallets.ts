import type { WalletActionProps } from "../types/interface";

export const walletsCta: WalletActionProps[] = [
  { name: "send", action: "SEND", icon: "send" },
  { name: "receive", action: "RECEIVE", icon: "receive" },
  { name: "invoicing", action: "INVOICING", icon: "invoicing" },
  { name: "more", action: "MORE", icon: "more" },
];
