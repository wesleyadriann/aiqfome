import React, { useCallback } from "react";

import { Paid, Spicy, Vegan } from "~/assets/icons";
import { formatCentsToBrl } from "~/utils/format";

import { IAccordionItemProps } from "./types";

const Component = ({ item, onClick }: IAccordionItemProps) => {
  const handlerPress = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return (
    <div className="cursor-pointer flex" onClick={handlerPress}>
      <div className="flex-1 pr-4">
        <div className="flex gap-0.5 items-center">
          <p className="font-semibold">{item.name}</p>
          {item.note?.spicy && <Spicy height={16} width={16} />}
          {item.note?.vegan && <Vegan height={16} width={16} />}
        </div>
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
            {(item.variants?.length ?? 0) > 0 && (
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
