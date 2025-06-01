"use client";

import React from "react";

import Image from "next/image";

import { useTicketStore } from "~/providers/ticketStoreProvider";
import { formatCentsToBrl } from "~/utils/format";

const Component: React.FC<ICheckoutProps> = ({
  restaurantImage,
  restaurantName,
}) => {
  const ticket = useTicketStore((state) => state.ticket);

  if (!ticket) {
    return null;
  }

  return (
    <main className="flex flex-col pt-6">
      <div className="flex-1">
        <section className="flex gap-2 items-center  px-4">
          <Image
            alt="Rango barato no dia das crianças, peça com até 50% de desconto"
            className="rounded-sm"
            height={32}
            src={restaurantImage}
            width={32}
          />
          <div className="font-bold">
            <p className="text-sm text-(--text-secondary)">seus itens em</p>
            <p>{restaurantName}</p>
          </div>
        </section>
        <section className="bg-(--neutrals-100)  flex flex-col gap-1">
          {ticket.map((item, i) => (
            <div className="bg-white p-4" key={item.itemName + i}>
              <div className="flex font-bold items-center justify-between mb-1.5">
                <p>{item.itemName}</p>
                <span className="text-(--brand)">
                  {formatCentsToBrl(item.total ?? 0)}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {item.variant && (
                  <div className="text-(--text-secondary) text-sm">
                    <p className="font-bold">• tamanho</p>
                    <div className="flex items-center gap-3 pl-3">
                      <p>{item.variant.name}</p>
                      <p className="font-bold text-(--teal-400)">
                        {item.variant.value &&
                          formatCentsToBrl(item.variant.value)}
                      </p>
                    </div>
                  </div>
                )}
                {!!item.option?.length && (
                  <div className="text-(--text-secondary) text-sm">
                    <p className="font-bold">• ingredientes?</p>
                    {item.option?.map((detail, j) => (
                      <div
                        className="text-(--text-secondary) text-sm"
                        key={detail.name + j}
                      >
                        <div className="flex items-center gap-3 pl-3">
                          <p>{detail.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!!item.drink?.length && (
                  <div className="text-(--text-secondary) text-sm">
                    <p className="font-bold">• vai querer bebida?</p>
                    {item.drink?.map((detail, j) => (
                      <div
                        className="text-(--text-secondary) text-sm"
                        key={detail.name + j}
                      >
                        <div className="flex items-center gap-3 pl-3">
                          <p>{detail.name}</p>
                          <p className="font-bold text-(--teal-400)">
                            +{detail.value && formatCentsToBrl(detail.value)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!!item.side?.length && (
                  <div className="text-(--text-secondary) text-sm">
                    <p className="font-bold">• acompanhamentos?</p>
                    {item.side?.map((detail, j) => (
                      <div
                        className="text-(--text-secondary) text-sm"
                        key={detail.name + j}
                      >
                        <div className="flex items-center gap-3 pl-3">
                          <p>{detail.name}</p>
                          <p className="font-bold text-(--teal-400)">
                            +{detail.value && formatCentsToBrl(detail.value)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {item.annotation && (
                  <div className="bg-(--neutrals-50) text-(--text-medium) text-sm p-1.5 rounded-sm">
                    <p className="font-bold">
                      observação:{" "}
                      <span className="font-semibold">{item.annotation}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
      <section
        className={`
          bg-white
          bottom-0
          fixed
          left-0
          px-6
          py-4
          z-10
          w-full
          shadow-[0_-2px_4px_rgba(0,0,0,0.1)]
          rounded-t-xl
          `}
      >
        <div className="flex gap-8 items-center justify-center">
          <div>
            <p className="font-bold text-xs">Subtotal</p>
            <span className="text-(--brand) font-extrabold text-xl">
              {formatCentsToBrl(
                ticket.reduce((acc, item) => acc + (item.total ?? 0), 0)
              )}
            </span>
          </div>
          <button
            className="
              bg-(--brand)
              cursor-pointer
              font-bold
              text-white
              px-6
              py-3
              rounded-md"
          >
            ir para pagamento
          </button>
        </div>
      </section>
    </main>
  );
};

export const CheckoutPage = React.memo(Component);
