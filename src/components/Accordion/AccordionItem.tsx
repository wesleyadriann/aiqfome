import React, { useCallback } from "react";

import { Paid } from "~/assets/icons";
import { formatCentsToBrl } from "~/utils/format";

import { IAccordionItemProps } from "./types";

const Component: React.FC<IAccordionItemProps> = ({ item, onClick }) => {
  const handlerPress = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return (
    <div className="cursor-pointer flex" onClick={handlerPress}>
      <div className="flex-1 pr-4">
        <p className="font-semibold">{item.name}</p>
        <p className="leading-none line-clamp-2 text-(--text-secondary) text-xs">
          {item.description}
        </p>
      </div>
      <div className="font-bold text-right">
        {!!item.promotional_price ? (
          <>
            <p className="text-(--text-secondary) line-through text-xs">
              {formatCentsToBrl(item.price)}
            </p>
            <p className="flex items-center text-(--success) justify-end gap-0.5">
              <Paid height={16} width={16} />

              {formatCentsToBrl(item.promotional_price)}
            </p>
          </>
        ) : (
          <>
            {item.variants?.length > 0 && (
              <p className="text-(--text-secondary) text-center text-xs">
                a partir de
              </p>
            )}
            <p className="text-(--brand)">{formatCentsToBrl(item.price)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export const AccordionItem = React.memo(Component);
