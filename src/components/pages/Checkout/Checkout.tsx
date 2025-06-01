"use client";

import React from "react";

import { useTicketStore } from "~/providers/ticketStoreProvider";

const Component: React.FC = () => {
  const ticket = useTicketStore((state) => state.ticket);

  if (!ticket) {
    return null;
  }

  return <div>{JSON.stringify(ticket)}</div>;
};

export const CheckoutPage = React.memo(Component);
