"use client";
import React from "react";

import { useTicketStore } from "~/providers/ticketStoreProvider";
import { formatCentsToBrl } from "~/utils/format";

import { SectionTitle } from "./SectionTitle";

const Component = () => {
  const currentMenuItem = useTicketStore((state) => state.currentMenuItem);

  if (!currentMenuItem) {
    return null;
  }

  return (
    <main className="flex flex-col m-auto max-w-7xl">
      <section className="p-4">
        <p className="font-bold text-xl">{currentMenuItem?.name}</p>
        <div className="flex font-extrabold gap-1.5 items-center">
          <p className="text-(--text-secondary)">a partir de </p>
          <span className="text-(--brand) text-lg">
            {formatCentsToBrl(
              currentMenuItem?.promotional_price ?? currentMenuItem?.price ?? 0
            )}
          </span>
        </div>
        <p className="font-semibold mb-4 text-(--text-secondary)">
          {currentMenuItem?.description}
        </p>
        <div className="flex">
          <div className="flex-1 font-bold  text-(--text-medium)">
            <p>quantos?</p>
            <span className="font-semibold text-(--text-secondary)">
              total{" "}
            </span>
            <span className="">10</span>
          </div>
          <button
            disabled
            className="bg-(--brand) text-white px-6 py-3 rounded-md  font-bold disabled:bg-(--neutrals-500) "
          >
            adicionar
          </button>
        </div>
      </section>
      <section className="border-t-4 border-(--neutrals-100) p-4">
        <SectionTitle
          title="qual o tamanho?"
          subtitle="escolha 1"
          rightLabelText="obrigatório"
        />
        <fieldset>
          {currentMenuItem?.variants?.map((variant, i) => (
            <div
              key={variant.name + i}
              className="flex items-center justify-between py-2"
            >
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id={variant.name + i}
                  name="variant"
                  value={i}
                />
                <label
                  htmlFor={variant.name + i}
                  className="text-(--text-secondary)"
                >
                  {variant.name}
                </label>
              </div>

              <div className="font-bold">
                {variant.promotional_price ? (
                  <>
                    <span className="text-xs text-(--text-secondary)">
                      de {formatCentsToBrl(variant.price)} por{" "}
                    </span>
                    <span className="text-(--success)">
                      {formatCentsToBrl(variant.promotional_price)}{" "}
                    </span>
                  </>
                ) : (
                  <span className="text-(--brand)">
                    {formatCentsToBrl(variant.price)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </fieldset>
      </section>
      <section>
        {
          // currentMenuItem.
        }
      </section>
      <section className="border-t-4 border-(--neutrals-100) p-4">
        <textarea
          className="
            border-[1px]
            border-(--dividers)
            focus:border-(--brand)
            focus:outline-none
            focus:ring-(--brand)
            focus:ring-1
            p-2.5
            placeholder:font-semibold
            placeholder:text-(--text-secondary)
            rounded-md
            w-full"
          placeholder="alguma observação do item? • opcional ex: tirar algum ingrediente, ponto do prato texto do input"
        />
      </section>
    </main>
  );
};

export const ProductPage = React.memo(Component);
