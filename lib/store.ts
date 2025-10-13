import { create } from "zustand";

interface Report {
    title: string,
    type: string,
    amount: string,
}

interface AppState {
    reports: Report[],
    addReport: (r: Report) => void,
}

export const useAppStore = create<AppState>((set) => ({
    reports: [],
    addReport: (r) => set((state) => ({ reports: [...state.reports, r]})),
}))