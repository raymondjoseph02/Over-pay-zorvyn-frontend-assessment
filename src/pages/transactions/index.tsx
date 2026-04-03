import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Upload } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Header } from "../../components/global-ui";
import {
  TransactionTable,
  TransactionDetail,
  FilterBar,
  Pagination,
} from "../../components/transactions";
import { useTransactionStore } from "../../store/transactionStore";
import { transactions } from "../../data/dummy";

const PAGE_SIZE = 5;

export const TransactionsPage = () => {
  const {
    search,
    setSearch,
    statusFilter,
    typeFilter,
    sortColumn,
    sortDirection,
    showFilters,
    toggleFilters,
    selectedTransaction,
  } = useTransactionStore();

  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...transactions];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.invoiceId.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q),
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((t) => t.status === statusFilter);
    }

    if (typeFilter !== "all") {
      const typeMap: Record<string, string[]> = {
        income: ["+"],
        expense: ["-"],
      };
      const prefixes = typeMap[typeFilter];
      if (prefixes) {
        result = result.filter((t) =>
          prefixes.some((p) => t.amount.startsWith(p)),
        );
      }
    }

    if (sortColumn) {
      result.sort((a, b) => {
        const aVal = a[sortColumn as keyof typeof a] as string;
        const bVal = b[sortColumn as keyof typeof b] as string;
        const cmp = aVal.localeCompare(bVal);
        return sortDirection === "asc" ? cmp : -cmp;
      });
    }

    return result;
  }, [search, statusFilter, typeFilter, sortColumn, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const exportCSV = () => {
    const headers = [
      "Name",
      "Category",
      "Date",
      "Time",
      "Invoice ID",
      "Amount",
      "Status",
    ];
    const rows = filtered.map((t) => [
      t.name,
      t.category,
      t.date,
      t.time,
      t.invoiceId,
      t.amount,
      t.status,
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Header title="Transactions" />

      <div className="flex gap-6 items-start">
        {/* Main content */}
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          {/* Search + actions */}
          <div
            className="flex items-center gap-3 flex-col md:flex-row w-full  justify-between 
          
          "
          >
            <div className="flex-1 flex items-center gap-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 w-full md:w-73.5 md:max-w-73.5">
              <Search size={16} className="text-gray-400 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for transactions..."
                className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white dark:placeholder:text-gray-600 outline-none font-medium  placeholder:text-gray-500"
              />
            </div>

            <div className="flex w-full gap-3 md:w-fit">
              <button
                onClick={toggleFilters}
                className={`flex  items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  showFilters
                    ? "border-primary-500 text-primary-500 bg-primary-100/40 dark:bg-primary-500/10"
                    : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:border-primary-500 hover:text-primary-500"
                }`}
              >
                <SlidersHorizontal size={15} />
                <span>Filters</span>
              </button>

              <button
                onClick={exportCSV}
                className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-gray-300 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Upload size={15} />
                <span>Exports</span>
              </button>
            </div>
          </div>

          {/* Filter bar */}
          <AnimatePresence initial={false}>
            {showFilters && <FilterBar />}
          </AnimatePresence>

          {/* Table card */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-5">
            <TransactionTable data={paginated} />
            <Pagination
              page={safePage}
              totalPages={totalPages}
              totalItems={filtered.length}
              pageSize={PAGE_SIZE}
              onPageChange={setPage}
            />
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {selectedTransaction && (
            <TransactionDetail transaction={selectedTransaction} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
