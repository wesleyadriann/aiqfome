"use client";

import React, { useCallback, useRef, useState } from "react";
import { ChevronRight, Paid } from "~/assets/icons";
import { formatCentsToBrl } from "~/utils/format";

import { IAccordionProps } from "./types";

const Component: React.FC<IAccordionProps> = ({
  title,
  description,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const handlerToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="bg-white py-3 px-4 w-full">
      <button
        className="
          cursor-pointer
          flex
          focus:outline-none
          items-center
          justify-between
          text-left
          w-full
        "
        onClick={handlerToggle}
      >
        <div className="flex flex-col justify-center">
          <span className="font-bold text-(--primary-text)">{title}</span>
          {description && (
            <span className="font-semibold text-(--text-secondary) text-xs">
              {description}
            </span>
          )}
        </div>
        <ChevronRight
          className={`
            duration-300
            h-6
            transform
            transition-transform
            w-6
            ${isOpen ? "rotate-270" : "rotate-90"}
          `}
          fill="var(--neutrals-500)"
        />
      </button>
      <div
        className="overflow-hidden pl-2"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <div className="pt-3 gap-6 flex flex-col">
          {items.map((item, index) => (
            <div key={`${item.name}_${index}`} className="cursor-pointer flex">
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
                    <p className="text-(--brand)">
                      {formatCentsToBrl(item.price)}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Accordion = React.memo(Component);
