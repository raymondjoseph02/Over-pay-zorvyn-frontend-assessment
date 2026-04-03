import type { TransactionStatus } from "../../types/type";

const config: Record<
  TransactionStatus,
  { label: string; className: string }
> = {
  pending: {
    label: "Pending",
    className:
      "bg-warning-base/10 text-warning-dark dark:bg-warning-base/5 dark:text-warning-base",
  },
  success: {
    label: "Success",
    className:
      "bg-success-base/10 text-success-dark dark:bg-success-base/5 dark:text-success-light",
  },
  failed: {
    label: "Failed",
    className:
      "bg-error-base/10 text-error-dark dark:bg-error-base/5 dark:text-error-light",
  },
};

export const StatusBadge = ({ status }: { status: TransactionStatus }) => {
  const { label, className } = config[status];
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${className}`}
    >
      {label}
    </span>
  );
};
