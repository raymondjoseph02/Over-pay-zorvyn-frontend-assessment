import { ArrowUpDown, MoreHorizontal, Trash2, AlertCircle, Eye } from "lucide-react";
import { useRef, useState } from "react";
import type { Transaction } from "../../types/interface";
import type { SortColumn } from "../../types/type";
import { useTransactionStore } from "../../store/transactionStore";
import { useAuthStore } from "../../store/authStore";
import { TransactionAvatar } from "./TransactionAvatar";
import { StatusBadge } from "./StatusBadge";
import useClickOutside from "../../hooks/useClickOutside";

const columns: { label: string; key: SortColumn }[] = [
  { label: "Name/Business", key: "name" },
  { label: "Date", key: "date" },
  { label: "Invoice ID", key: "invoiceId" },
  { label: "Amount", key: "amount" },
  { label: "Status", key: "status" },
];

interface TransactionTableProps {
  data: Transaction[];
}

const AdminActionMenu = ({ tx }: { tx: Transaction }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="size-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      >
        <MoreHorizontal size={16} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 z-20 min-w-36 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
          <button
            onClick={() => {
              console.log("Delete transaction", tx.id);
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-2.5 text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            <Trash2 size={13} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export const TransactionTable = ({ data }: TransactionTableProps) => {
  const {
    sortColumn,
    setSort,
    selectedTransaction,
    setSelectedTransaction,
  } = useTransactionStore();
  const { currentUser } = useAuthStore();
  const isAdmin = currentUser.role === "admin";

  return (
    <div className="w-full ">
      {/* Mobile card list */}
      <div className="flex flex-col gap-4 md:hidden">
        {data.length === 0 ? (
          <p className="py-16 text-center text-sm text-gray-400 dark:text-gray-500">
            No transactions found
          </p>
        ) : (
          data.map((tx) => {
            const isActive = selectedTransaction?.id === tx.id;
            return (
              <div
                key={tx.id}
                className={`flex justify-between items-center p-3 rounded-xl border transition-colors ${
                  isActive
                    ? "border-primary-500/30 bg-primary-100/30 dark:bg-primary-500/5"
                    : "border-gray-100 dark:border-gray-800"
                }`}
              >
                <div className="flex gap-3 items-center">
                  <TransactionAvatar
                    imageUrl={tx.imageUrl}
                    avatarInitial={tx.avatarInitial}
                    avatarColor={tx.avatarColor}
                    name={tx.name}
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-black text-gray-900 dark:text-white leading-tight">
                      {tx.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {tx.category}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-sm font-black ${
                      tx.amount.startsWith("+")
                        ? "text-success-dark dark:text-success-light"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {tx.amount}
                  </span>
                  {isAdmin ? (
                    <AdminActionMenu tx={tx} />
                  ) : (
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => console.log("Dispute", tx.id)}
                        className="text-[11px] font-semibold px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-red-300 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        Dispute
                      </button>
                      <button
                        onClick={() => setSelectedTransaction(tx)}
                        className={`text-[11px] font-semibold px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                          isActive
                            ? "text-primary-500 bg-primary-100 dark:bg-primary-500/10"
                            : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:border-primary-300"
                        }`}
                      >
                        Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-160">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => setSort(col.key)}
                  className="text-left pb-3 pr-4 text-xs font-semibold text-gray-500 dark:text-gray-400 cursor-pointer select-none whitespace-nowrap group"
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    <ArrowUpDown
                      size={12}
                      className={`transition-colors ${
                        sortColumn === col.key
                          ? "text-primary-500"
                          : "text-gray-300 dark:text-gray-600 group-hover:text-gray-400"
                      }`}
                    />
                  </span>
                </th>
              ))}
              <th className="text-left pb-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-16 text-center text-sm text-gray-400 dark:text-gray-500"
                >
                  No transactions found
                </td>
              </tr>
            ) : (
              data.map((tx) => {
                const isActive = selectedTransaction?.id === tx.id;
                return (
                  <tr
                    key={tx.id}
                    className={`border-b border-gray-50 dark:border-gray-800 transition-colors ${
                      isActive
                        ? "bg-primary-100/30 dark:bg-primary-500/5"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {/* Name/Business */}
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-3">
                        <TransactionAvatar
                          imageUrl={tx.imageUrl}
                          avatarInitial={tx.avatarInitial}
                          avatarColor={tx.avatarColor}
                          name={tx.name}
                        />
                        <div>
                          <p className="text-sm font-black text-gray-900 dark:text-white leading-tight">
                            {tx.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {tx.category}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3.5 pr-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                        {tx.date}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                        at {tx.time}
                      </p>
                    </td>

                    {/* Invoice ID */}
                    <td className="py-3.5 pr-4">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {tx.invoiceId}
                      </span>
                    </td>

                    {/* Amount */}
                    <td className="py-3.5 pr-4">
                      <span
                        className={`text-sm font-black ${
                          tx.amount.startsWith("+")
                            ? "text-success-dark dark:text-success-light"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {tx.amount}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 pr-4">
                      <StatusBadge status={tx.status} />
                    </td>

                    {/* Actions */}
                    <td className="py-3.5">
                      {isAdmin ? (
                        <AdminActionMenu tx={tx} />
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => console.log("Dispute", tx.id)}
                            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-red-300 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <AlertCircle size={12} />
                            Dispute
                          </button>
                          <button
                            onClick={() => setSelectedTransaction(tx)}
                            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                              isActive
                                ? "text-primary-500 bg-primary-100 dark:bg-primary-500/10"
                                : "border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                          >
                            <Eye size={12} />
                            View Details
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
