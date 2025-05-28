import React, { FC } from "react";

import Image from "next/image";
import { Person, Pin, Search } from "~/assets/icons";
import Link from "next/link";

type IHeaderProps = {
  withSearch?: boolean;
};

const Component: FC<IHeaderProps> = ({ withSearch }) => {
  return (
    <header className="bg-(--brand) p-[16px] mb-[1px]">
      <div className="flex items-center  m-auto max-w-[1260px]">
        <Link href="/">
          <Image
            alt="Logo aiqfome"
            className="mr-[24px]"
            height={32}
            src="/assets/aiq_branding.svg"
            width={32}
          />
        </Link>
        <div className="flex flex-1 gap-[10px] items-center">
          <Pin height={24} width={24} />
          <div className="font-bold text-white">
            <p className="text-sm text-(--purple-200)">entregando em</p>
            <p>Rua Mandaguari, 198</p>
          </div>
        </div>
        <Person className="cursor-pointer" height={24} width={24} />
      </div>
      {withSearch && (
        <div
          className="
          bg-white
          border
          border-(--dividers-gray)
          flex
          gap-[8px]
          items-center
          m-auto
          max-w-[1260px]
          mt-[16px]
          p-[8px]
          rounded-[8px]
          "
        >
          <Search height={24} width={24} />
          <input
            className="font-semibold focus:outline-none w-full"
            placeholder="busque pela loja ou culinária"
          />
        </div>
      )}
    </header>
  );
};

export const Header = React.memo(Component);
