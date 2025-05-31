import React, { FC } from "react";

import Image from "next/image";

import { DeliveryBiker, DeliveryHelmet, Rating } from "~/assets/icons";
import { formatCentsToBrl } from "~/utils/format";

import { IRestaurantCardProps } from "./types";

const Component: FC<IRestaurantCardProps> = (props) => {
  const { deliveryValue, image, name, open, rating } = props;
  const deliveryIsFree = deliveryValue === 0;
  return (
    <div
      className={`
        bg-(--neutrals-50)
        flex
        gap-3
        items-center
        overflow-hidden
        rounded-lg
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
        <p className="text-(--text-medium)">{name}</p>
        <div className="flex items-center gap-1 text-sm ">
          {deliveryIsFree ? (
            <>
              <DeliveryBiker height={24} width={24} />
              <span className="text-(--teal-600)">grátis</span>
            </>
          ) : (
            <>
              <DeliveryHelmet height={24} width={24} />
              <span className="text-(--brand)">
                {formatCentsToBrl(deliveryValue)}
              </span>
            </>
          )}

          <span className="text-xs text-(--dividers-gray)">•</span>
          <Rating height={24} width={24} />
          <span className="text-(--text-secondary)">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export const RestaurantCard = React.memo(Component);
