import {create} from "zustand";

interface FilterState {
    filter: string,
    setFilter: (filter: string) => void,
}

export const useFilterStore = create<FilterState>((set) => ({
    filter: "none",
    setFilter: (filter) => set({filter: filter}),
}));