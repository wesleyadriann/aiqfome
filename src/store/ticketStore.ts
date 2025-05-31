import { createStore } from "zustand/vanilla";

export type ITicketState = {
  ticket: any;
};

export type ITicketActions = {
  addTicket: (ticket: any) => void;
  removeTicket: (ticketId: string) => void;
};

export type ITicketStore = ITicketState & ITicketActions;

export const defaultTicketState: ITicketState = {
  ticket: null,
};

export const createTicketStore = (initialState = defaultTicketState) =>
  createStore<ITicketStore>((set) => ({
    ...initialState,
    addTicket: (ticket) => set(() => ({ ticket })),
    removeTicket: (ticketId) =>
      set((state) => ({
        ticket:
          state.ticket && state.ticket.id === ticketId ? null : state.ticket,
      })),
  }));
