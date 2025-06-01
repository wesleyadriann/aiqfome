"use client";
import React, { useCallback, useMemo } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { useTicketStore } from "~/providers/ticketStoreProvider";
import { formatCentsToBrl } from "~/utils/format";

import { SectionTitle } from "./SectionTitle";
import { IProductPageProps, ISelectedItems } from "./types";

const Component: React.FC<IProductPageProps> = ({ restaurantMenu }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentMenuItem = useTicketStore((state) => state.currentMenuItem);
  const currentMenuItemKind = useTicketStore(
    (state) => state.currentMenuItemKind
  );
  const setTicket = useTicketStore((state) => state.setTicket);

  const [itemsAdded, setItemsAdded] = React.useState<ISelectedItems>({
    total: currentMenuItem?.variants?.length ? 0 : currentMenuItem?.price ?? 0,
    option: [],
    drink: [],
    side: [],
  });
  const [annotation, setAnnotation] = React.useState<string>("");
  const [isAdded, setIsAdded] = React.useState<boolean>(false);

  const restaurantDrinks = useMemo(() => {
    if (currentMenuItemKind !== "main") return [];
    return restaurantMenu.find((item) => item.kind === "drink")?.items || [];
  }, [currentMenuItemKind, restaurantMenu]);

  const restaurantSides = useMemo(() => {
    if (currentMenuItemKind !== "main") return [];
    return restaurantMenu.find((item) => item.kind === "side")?.items || [];
  }, [currentMenuItemKind, restaurantMenu]);

  const handlerClickItem = useCallback(
    (kind: string, name: string, value?: number) => {
      setItemsAdded((prev) => {
        const prevState = { ...prev };

        if (kind === "variant") {
          const total = prevState.variant?.name
            ? prevState.total - (prevState.variant.value ?? 0)
            : prevState.total;

          return {
            ...prevState,
            total: total + (value ?? 0),
            variant: { kind, name, value },
          };
        }

        const alreadyExists = prev[kind].some(
          (item) => item.kind === kind && item.name === name
        );
        if (alreadyExists) {
          const kindItems = prev[kind].filter(
            (item) => !(item.kind === kind && item.name === name)
          );
          return {
            ...prevState,
            total: prevState.total - (value ?? 0),
            [kind]: kindItems,
          };
        }

        return {
          ...prevState,
          total: prevState.total + (value ?? 0),
          [kind]: prev[kind].concat([{ kind, name, value }]),
        };
      });
    },
    []
  );

  const handlerChangeAnnotation = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAnnotation(event.target.value);
    },
    []
  );

  const handlerClickAdd = useCallback(() => {
    setTicket?.(itemsAdded, annotation);
    setIsAdded(true);
  }, [annotation, itemsAdded, setTicket]);

  const handlerRedirectToTicket = useCallback(() => {
    const id = searchParams.get("id");
    router.push(`/pedido?id=${id}`);
  }, [router, searchParams]);

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
          <div className="flex-1 font-bold text-(--text-medium)">
            <p>quantos?</p>
            <span className="font-semibold text-(--text-secondary)">
              total{" "}
            </span>
            <span className="">
              {formatCentsToBrl(
                currentMenuItem.promotional_price ?? currentMenuItem.price
              )}
            </span>
          </div>
          <button
            className="
              bg-(--brand)
              cursor-pointer
              disabled:bg-(--neutrals-500)
              disabled:cursor-not-allowed
              font-bold
              text-white
              px-6
              py-3
              rounded-md
              "
            disabled={itemsAdded.total < 1}
            onClick={handlerClickAdd}
          >
            adicionar
          </button>
        </div>
      </section>
      {currentMenuItem?.variants && (
        <section className="border-t-4 border-(--neutrals-100) p-4">
          <SectionTitle
            rightLabelText="obrigatório"
            subtitle="escolha 1"
            title="qual o tamanho?"
          />
          <fieldset>
            {currentMenuItem?.variants?.map((variant, i) => (
              <div
                className="flex items-center justify-between py-2"
                key={variant.name + i}
              >
                <div className="flex gap-2 items-center">
                  <input
                    id={variant.name + i}
                    name="variant"
                    onChange={(event) => {
                      event.stopPropagation();
                      handlerClickItem(
                        "variant",
                        variant.name,
                        variant.promotional_price ?? variant.price
                      );
                    }}
                    type="radio"
                    value={i}
                  />
                  <label
                    className="text-(--text-secondary)"
                    htmlFor={variant.name + i}
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
      )}

      {currentMenuItem.options?.map((option, index) => (
        <section
          className="border-t-4 border-(--neutrals-100) p-4"
          key={option.name + index}
        >
          <SectionTitle
            subtitle={`escolha de ${option.min_selection} a ${option.max_selection}`}
            title={option.name}
            {...(option.min_selection && { rightLabelText: "obrigatório" })}
          />
          <fieldset>
            {option.options.map((item, i) => (
              <div
                className="flex items-center justify-between py-2"
                key={item + i}
              >
                <div className="flex gap-2 items-center">
                  <input
                    className="accent-(--brand) text-(--brand)"
                    id={item + i}
                    name={option.name}
                    onChange={(event) => {
                      event.stopPropagation();
                      handlerClickItem("option", item);
                    }}
                    type="checkbox"
                    value={item}
                  />
                  <label className="text-(--text-secondary)" htmlFor={item + i}>
                    {item}
                  </label>
                </div>
              </div>
            ))}
          </fieldset>
        </section>
      ))}

      {restaurantDrinks.length > 0 && (
        <section className="border-t-4 border-(--neutrals-100) p-4">
          <SectionTitle
            subtitle="escolha quantos quiser"
            title="vai querer bebida?"
          />
          <fieldset>
            {restaurantDrinks.map((drink, i) => (
              <div
                className="flex items-center justify-between py-2"
                key={drink.name + i}
              >
                <div className="flex gap-2 items-center">
                  <input
                    className="accent-(--brand) text-(--brand)"
                    id={drink.name + i}
                    name="drink"
                    onChange={(event) => {
                      event.stopPropagation();
                      handlerClickItem("drink", drink.name, drink.price);
                    }}
                    type="checkbox"
                    value={drink.name}
                  />
                  <label
                    className="text-(--text-secondary)"
                    htmlFor={drink.name + i}
                  >
                    {drink.name}
                  </label>
                </div>
                <span className="font-bold text-(--brand)">
                  {formatCentsToBrl(drink.price)}
                </span>
              </div>
            ))}
          </fieldset>
        </section>
      )}
      {restaurantSides.length > 0 && (
        <section className="border-t-4 border-(--neutrals-100) p-4">
          <SectionTitle
            subtitle="escolha quantos quiser"
            title="vai querer acompanhamento?"
          />
          <fieldset>
            {restaurantSides.map((side, i) => (
              <div
                className="flex items-center justify-between py-2"
                key={side.name + i}
              >
                <div className="flex gap-2 items-center">
                  <input
                    className="accent-(--brand) text-(--brand)"
                    id={side.name + i}
                    name="side"
                    onChange={(event) => {
                      event.stopPropagation();
                      handlerClickItem("side", side.name, side.price);
                    }}
                    type="checkbox"
                    value={side.name}
                  />
                  <label
                    className="text-(--text-secondary)"
                    htmlFor={side.name + i}
                  >
                    {side.name}
                  </label>
                </div>
                <span className="font-bold text-(--brand)">
                  {formatCentsToBrl(side.price)}
                </span>
              </div>
            ))}
          </fieldset>
        </section>
      )}

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
          onChange={handlerChangeAnnotation}
          placeholder="alguma observação do item? • opcional ex: tirar algum ingrediente, ponto do prato"
        />
      </section>
      <section
        className={`
          bg-white
          bottom-0
          left-0
          px-6
          py-4
          z-10
          ${isAdded ? "sticky" : "hidden"}`}
      >
        <button
          className="
              bg-(--brand)
              cursor-pointer
              font-bold
              text-white
              px-6
              py-3
              rounded-md
              w-full"
          onClick={handlerRedirectToTicket}
        >
          ver ticket
        </button>
      </section>
    </main>
  );
};

export const ProductPage = React.memo(Component);
