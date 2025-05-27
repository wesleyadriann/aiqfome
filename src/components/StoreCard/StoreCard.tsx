import React from "react";

import Image from "next/image";

const Component = () => {
  return (
    <div
      className="
      items-center
      bg-(--neutrals-50)
      flex
      gap-[12px]
      overflow-hidden
      rounded-[8px]"
    >
      <Image
        alt="Store Banner"
        height={72}
        src="/assets/stores/subway.jpg"
        width={72}
      />
      <div className="font-bold">
        <p>Subway - Avenida center</p>
        <div className="flex items-center gap-[4px] text-sm ">
          <Image
            alt="Ícone preço de entrega"
            height={24}
            src="/assets/icons/delivery.svg"
            width={24}
          />
          <span className="text-(--purple-500)">R$6,00</span>
          <span className="text-xs text-(--dividers-gray)">•</span>
          <Image
            alt="Ícone avaliação"
            height={24}
            src="/assets/icons/rating.svg"
            width={24}
          />
          <span className="text-(--neutrals-500)">4.7</span>
        </div>
      </div>
    </div>
  );
};

export const StoreCard = React.memo(Component);
