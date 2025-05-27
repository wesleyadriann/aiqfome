import React, { FC } from "react";

import Image from "next/image";

interface IHeaderProps {
  withSearch?: boolean;
}

const Component: FC<IHeaderProps> = () => {
  return (
    <header className="bg-(--purple-500) p-[16px]">
      <div className="flex items-center">
        <Image
          alt="Logo aiqfome"
          className="mr-[24px]"
          height={32}
          src="/assets/aiq_branding.svg"
          width={32}
        />
        <div className="flex flex-1 gap-[10px]">
          {/* <Image
            alt="Ícone Pin"
            height={24}
            src="/assets/icons/pin.svg"
            width={24}
          /> */}

          <div className="font-bold text-white">
            <p className="text-sm text-(--purple-200)">entregando em</p>
            <p>Rua Mandaguari, 198</p>
          </div>
        </div>
        <Image
          alt="Ícone de Usuário"
          className="cursor-pointer"
          height={24}
          src="/assets/icons/person.svg"
          width={24}
        />
      </div>
      <div
        className="
          bg-white
          border
          border-(--dividers-gray)
          flex
          gap-[8px]
          items-center
          mt-[16px]
          p-[8px]
          rounded-[8px]"
      >
        <Image
          alt="Ícone de Busca"
          height={24}
          src="/assets/icons/search.svg"
          width={24}
        />
        <input
          className="font-semibold focus:outline-none w-full"
          placeholder="busque pela loja ou culinária"
        />
      </div>
    </header>
  );
};

export const Header = React.memo(Component);
