import type { ReactNode } from "react";

const VisaIcon = () => (
  <span className="font-black text-base tracking-widest text-gray-900 italic">VISA</span>
);

const MastercardIcon = () => (
  <div className="relative flex items-center justify-center w-9 h-6">
    <div className="size-6 rounded-full bg-red-500 absolute left-0" />
    <div className="size-6 rounded-full bg-orange-400 absolute right-0 opacity-90" />
  </div>
);

export interface PaymentMethod {
  id: string;
  name: string;
  balance: string;
  icon: ReactNode;
}

export const paymentMethods: PaymentMethod[] = [
  { id: "visa", name: "Visa", balance: "$24,098.00", icon: <VisaIcon /> },
  { id: "mc", name: "Mastercard", balance: "$14,111.00", icon: <MastercardIcon /> },
];
