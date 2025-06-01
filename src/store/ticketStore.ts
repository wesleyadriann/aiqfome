import { createStore, StateCreator } from "zustand/vanilla";
import { persist } from "zustand/middleware";

export type ITicketState = {
  currentMenuItem?: IMenuItem;
  currentMenuItemType?: string;
};

export type ITicketActions = {
  setCurrentMenuItem?: (menuItem: IMenuItem, type: string) => void;
  clearCurrentMenuItem?: () => void;
};

export type ITicketStore = ITicketState & ITicketActions;

export const defaultTicketState: ITicketState = {};

export const createTicketStore = (initialState = defaultTicketState) => {
  const state: StateCreator<ITicketStore> = (set) => ({
    ...initialState,
    setCurrentMenuItem: (menuItem, type) =>
      set(() => ({ currentMenuItem: menuItem, currentMenuItemType: type })),
    clearCurrentMenuItem: () => set(() => ({ currentMenuItem: undefined })),
  });

  const persistedStore = persist(state, {
    name: "ticket-store",
  });

  return createStore<ITicketStore>()(persistedStore);
};
