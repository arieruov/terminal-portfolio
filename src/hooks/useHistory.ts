import type { ReactNode } from 'react';
import { create } from 'zustand';

interface HistoryInterface {
    id: string;
    command: string;
    component: ReactNode;
}

interface HistoryState {
    history: HistoryInterface[];
}

interface HistoryActions {
    addToHistory: (id: string, command: string, component: ReactNode) => void;
    clearHistory: () => void;
}

interface HistoryStore extends HistoryState, HistoryActions {}

const useHistory = create<HistoryStore>((set) => ({
    history: [],
    addToHistory: (id: string, command: string, component: ReactNode) =>
        set((state) => ({
            history: [...state.history, { id, command, component }],
        })),
    clearHistory: () => set({ history: [] }),
}));

export default useHistory;
