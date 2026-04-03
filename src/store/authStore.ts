import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/interface";
import { appUsers } from "../data/users";

interface AuthStore {
  currentUser: User;
  setCurrentUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      currentUser: appUsers[0],
      setCurrentUser: (user) => set({ currentUser: user }),
    }),
    { name: "overpay-auth" },
  ),
);
