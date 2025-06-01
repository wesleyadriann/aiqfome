import { createStore, StateCreator } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { ISelectedItems } from "~/components/pages/Product/types";

export type ITicketState = {
  currentMenuItem?: IMenuItem;
  currentMenuItemKind?: string;
  currentCategory?: string;
  ticket?: Array<{ itemName: string; annotation?: string } & ISelectedItems>;
};

export type ITicketActions = {
  setCurrentMenuItem: (
    menuItem: ITicketState["currentMenuItem"],
    kind: string,
    category: string
  ) => void;
  clearCurrentMenuItem: () => void;
  setTicket: (details: ISelectedItems, annotation?: string) => void;
};

export type ITicketStore = ITicketState & ITicketActions;

export const defaultTicketState: ITicketState = {
  ticket: [],
};

export const createTicketStore = (initialState = defaultTicketState) => {
  const state: StateCreator<ITicketStore> = (set) => ({
    ...initialState,
    setCurrentMenuItem: (menuItem, kind, category: string) =>
      set(() => ({
        currentMenuItem: menuItem,
        currentMenuItemKind: kind,
        currentCategory: category,
      })),
    clearCurrentMenuItem: () => set(() => ({ currentMenuItem: undefined })),
    setTicket: (details, annotation) =>
      set((state) => {
        const currentTicket = state.ticket || [];

        return {
          ticket: currentTicket.concat({
            itemName: `${state.currentCategory} - ${state.currentMenuItem?.name}`,
            annotation,
            ...details,
          }),
        };
      }),
  });

  const persistedStore = persist(state, {
    name: "ticket-store",
  });

  return createStore<ITicketStore>()(persistedStore);
};
