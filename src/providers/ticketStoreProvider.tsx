"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createTicketStore, ITicketStore } from "~/store";

export type ITicketStoreApi = ReturnType<typeof createTicketStore>;

export const TicketStoreContext = createContext<ITicketStoreApi | null>(null);

export const TicketStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<ITicketStoreApi>(null);

  if (!storeRef.current) {
    storeRef.current = createTicketStore();
  }

  return (
    <TicketStoreContext.Provider value={storeRef.current}>
      {children}
    </TicketStoreContext.Provider>
  );
};

export const useTicketStore = <T,>(selector: (store: ITicketStore) => T) => {
  const store = useContext(TicketStoreContext);
  if (!store) {
    throw new Error("useTicketStore must be used within a TicketStoreProvider");
  }
  return useStore(store, selector);
};
