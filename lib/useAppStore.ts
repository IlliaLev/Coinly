import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Report {
    title: string,
    type: string,
    amount: string,
}

interface AppState {
    reports: Report[],
    addReport: (r: Report) => void,
}

export const useAppStore = create<AppState>()(
    persist<AppState>(
        (set) => ({
            reports: [],
            addReport: (r: Report) => set((state) => ({reports: [...state.reports, r]})),
        }),
        {
            name: "reports",
        }
    )
);