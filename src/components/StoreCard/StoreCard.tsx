import React, { FC, useMemo } from "react";

import Image from "next/image";

import { IStoreCardProps } from "./types";

const Component: FC<IStoreCardProps> = (props) => {
  const { delivery_value, image, name, open, rating } = props;

  const deliveryValue = useMemo(() => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(delivery_value / 100);
  }, [delivery_value]);

  const deliveryIsFree = delivery_value === 0;
  return (
    <div
      className={`
        items-center
        bg-(--neutrals-50)
        flex
        gap-[12px]
        overflow-hidden
        rounded-[8px]
        ${open && "cursor-pointer"}
      `}
    >
      <Image
        alt="Store Banner"
        className={`
          h-[72px]
          object-cover
          ${!open && "opacity-40"}
        `}
        height={72}
        src={image}
        width={72}
      />
      <div className="font-bold">
        <p>{name}</p>
        <div className="flex items-center gap-[4px] text-sm ">
          <Image
            alt="Ícone preço de entrega"
            height={24}
            src={`/assets/icons/${
              deliveryIsFree ? "delivery_biker" : "delivery_helmet"
            }.svg`}
            width={24}
          />
          {deliveryIsFree ? (
            <span className="text-(--teal-600)">grátis</span>
          ) : (
            <span className="text-(--purple-500)">{deliveryValue}</span>
          )}
          <span className="text-xs text-(--dividers-gray)">•</span>
          <Image
            alt="Ícone avaliação"
            height={24}
            src="/assets/icons/rating.svg"
            width={24}
          />
          <span className="text-(--neutrals-500)">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export const StoreCard = React.memo(Component);
