import { FC } from "react";
import Image from "next/image";

interface IHeaderProps {
  withSearch?: boolean;
}

export const Header: FC<IHeaderProps> = () => {
  return (
    <header className="bg-(--primary) p-[16px] ">
      <div>
        <Image
          alt="Logo aiqfome"
          height={32}
          src="/assets/aiq_branding.svg"
          width={32}
        />
      </div>
      <div></div>
    </header>
  );
};
