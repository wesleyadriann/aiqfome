import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Person, Pin } from "~/assets/icons";

const Component = () => {
  return (
    <header className="bg-(--brand) p-4">
      <div className="flex items-center m-auto max-w-7xl">
        <Link href="/">
          <Image
            alt="Logo aiqfome"
            className="mr-6"
            height={32}
            src="/assets/aiq_branding.svg"
            width={32}
          />
        </Link>
        <div className="flex flex-1 gap-2.5 items-center">
          <Pin height={24} width={24} />
          <div className="font-bold text-white">
            <p className="text-sm text-(--purple-200)">entregando em</p>
            <p>Rua Mandaguari, 198</p>
          </div>
        </div>
        <Person className="cursor-pointer" height={24} width={24} />
      </div>
    </header>
  );
};

export const Header = React.memo(Component);
