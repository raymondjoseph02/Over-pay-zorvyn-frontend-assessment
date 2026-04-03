import { PenLine, X } from "lucide-react";
import { Button } from "../global-ui/Button";
import type { Contact } from "../../data/contacts";

const FEES = 20;

const arrivalDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

interface ConfirmSendModalProps {
  onClose: () => void;
  onEdit: () => void;
  amount: string;
  selectedContact: Contact | null;
}

export const ConfirmSendModal = ({
  onClose,
  onEdit,
  amount,
  selectedContact,
}: ConfirmSendModalProps) => {
  const numericAmount = Number(amount) || 0;
  const converted = Math.max(0, numericAmount - FEES);

  return (
    <div className="max-h-dvh md:h-fit pt-6 pb-8 md:pt-0">
      <div className="flex items-end justify-end mb-8">
        <button
          onClick={onClose}
          className="w-fit h-fit text-primary-500 cursor-pointer"
        >
          <X />
        </button>
      </div>

      <div className="space-y-2 max-w-100 mx-auto mb-8">
        <p className="text-2xl font-extrabold dark:text-gray-50 text-gray-900 text-center leading-[130%]">
          Review detail of your transfer
        </p>
        <p className="text-sm font-medium text-gray-600 text-center">
          Please enter user information that you want to send money and enter an
          amount
        </p>
      </div>

      {/* Transfer details */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-black dark:text-gray-50 text-gray-900">
            Transfer details
          </p>
          <button
            onClick={onEdit}
            className="flex items-center gap-1.5 text-primary-500 text-sm font-medium cursor-pointer"
          >
            <PenLine size={14} />
            <span>Edit</span>
          </button>
        </div>
        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium ">You send</p>
            <p className="text-sm font-black text-primary-500">
              $
              {numericAmount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium ">Total fees</p>
            <p className="text-sm text-gray-900 font-medium dark:text-gray-50">
              -${FEES.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium ">
              Amount we'll convert
            </p>
            <p className="text-sm text-gray-900 font-black dark:text-gray-50">
              ${converted.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium ">
              Guaranteed rate (48 hours)
            </p>
            <p className="text-sm text-gray-900  dark:text-gray-50 font-medium">
              0.89765
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium ">Should arrive</p>
            <p className="text-sm text-gray-900 font-medium dark:text-gray-50">
              by {arrivalDate()}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 my-6" />

      {/* Recipient */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-base font-black dark:text-gray-50 text-gray-900">
            Recipient
          </p>
          <button
            onClick={onEdit}
            className="flex items-center gap-1.5 text-primary-500 text-sm font-medium cursor-pointer"
          >
            <PenLine size={14} />
            <span>Edit</span>
          </button>
        </div>
        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium">Name</p>
            <p className="text-sm text-gray-900 dark:text-gray-50 font-black">
              {selectedContact?.name ?? "—"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium">Email</p>
            <p className="text-sm text-gray-900 dark:text-gray-50 font-medium">
              {selectedContact?.email ?? "—"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 font-medium">Account number</p>
            <p className="text-sm text-gray-900 dark:text-gray-50 font-medium">
              {selectedContact?.accountNumber ?? "—"}
            </p>
          </div>
        </div>
      </div>

      <Button variants="primary" handleClick={onClose}>
        <div className="flex items-center justify-center">
          <span>Confirm and Send</span>
        </div>
      </Button>
    </div>
  );
};
