import { createStore, StateCreator } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { IItemsAdded } from "~/components/pages/Product/types";

export type ITicketState = {
  currentMenuItem?: IMenuItem;
  currentMenuItemKind?: string;
  ticket?: Array<IItemsAdded[]>;
};

export type ITicketActions = {
  setCurrentMenuItem: (
    menuItem: ITicketState["currentMenuItem"],
    kind: string
  ) => void;
  clearCurrentMenuItem: () => void;
  setTicket: (ticket: IItemsAdded[]) => void;
};

export type ITicketStore = ITicketState & ITicketActions;

export const defaultTicketState: ITicketState = {
  ticket: [],
};

export const createTicketStore = (initialState = defaultTicketState) => {
  const state: StateCreator<ITicketStore> = (set) => ({
    ...initialState,
    setCurrentMenuItem: (menuItem, kind) =>
      set(() => ({ currentMenuItem: menuItem, currentMenuItemKind: kind })),
    clearCurrentMenuItem: () => set(() => ({ currentMenuItem: undefined })),
    setTicket: (ticket) =>
      set((state) => {
        const currentTicket = state.ticket || [];
        return { ticket: currentTicket.concat(ticket) };
      }),
  });

  const persistedStore = persist(state, {
    name: "ticket-store",
  });

  return createStore<ITicketStore>()(persistedStore);
};
