import { create } from "zustand";
import type { SortColumn, SortDirection } from "../types/type";
import type { Transaction } from "../types/interface";

interface TransactionStore {
  search: string;
  setSearch: (v: string) => void;

  statusFilter: string;
  setStatusFilter: (v: string) => void;

  typeFilter: string;
  setTypeFilter: (v: string) => void;

  dateFilter: string;
  setDateFilter: (v: string) => void;

  showFilters: boolean;
  toggleFilters: () => void;

  sortColumn: SortColumn;
  sortDirection: SortDirection;
  setSort: (col: SortColumn) => void;

  clearFilters: () => void;

  selectedTransaction: Transaction | null;
  setSelectedTransaction: (t: Transaction | null) => void;
}

export const useTransactionStore = create<TransactionStore>((set, get) => ({
  search: "",
  setSearch: (v) => set({ search: v }),

  statusFilter: "all",
  setStatusFilter: (v) => set({ statusFilter: v }),

  typeFilter: "all",
  setTypeFilter: (v) => set({ typeFilter: v }),

  dateFilter: "all",
  setDateFilter: (v) => set({ dateFilter: v }),

  showFilters: false,
  toggleFilters: () => set((s) => ({ showFilters: !s.showFilters })),

  sortColumn: "",
  sortDirection: "asc",
  setSort: (col) =>
    set((s) => ({
      sortColumn: col,
      sortDirection:
        s.sortColumn === col && s.sortDirection === "asc" ? "desc" : "asc",
    })),

  clearFilters: () =>
    set({
      search: "",
      statusFilter: "all",
      typeFilter: "all",
      dateFilter: "all",
      sortColumn: "",
      sortDirection: "asc",
    }),

  selectedTransaction: null,
  setSelectedTransaction: (t) => {
    const current = get().selectedTransaction;
    set({ selectedTransaction: current?.id === t?.id ? null : t });
  },
}));
