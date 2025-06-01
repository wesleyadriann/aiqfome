import React from "react";

import { Search } from "~/assets/icons";

const Component = () => {
  return (
    <div className="bg-(--brand) mb-[1px] px-4 pb-4">
      <div
        className="
          bg-white
          border
          border-(--dividers)
          flex
          gap-2
          items-center
          m-auto
          max-w-7xl
          p-2
          rounded-lg
          "
      >
        <Search height={24} width={24} />
        <input
          className="font-semibold focus:outline-none w-full"
          placeholder="busque pela loja ou culinária"
        />
      </div>
    </div>
  );
};

export const SearchBar = React.memo(Component);
