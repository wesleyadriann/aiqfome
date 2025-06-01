"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useRef, useState } from "react";

import { ChevronRight } from "~/assets/icons";
import { useTicketStore } from "~/providers/ticketStoreProvider";
import { createSlug } from "~/utils/slug";

import { AccordionItem } from "./AccordionItem";
import { IAccordionProps } from "./types";

const Component: React.FC<IAccordionProps> = ({
  title,
  description,
  items,
  itemsType = "menu",
}) => {
  const setCurrentMenuItem = useTicketStore(
    (state) => state.setCurrentMenuItem
  );

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const contentRef = useRef<HTMLDivElement>(null);

  const handlerToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handlerPressItem = useCallback(
    (item: IMenuItem) => {
      setCurrentMenuItem?.(item, itemsType);
      router.push(`/produto/${createSlug(item.name)}`);
    },
    [itemsType, router, setCurrentMenuItem]
  );

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
            <AccordionItem
              item={item}
              key={`${item.name}_${index}`}
              onClick={handlerPressItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Accordion = React.memo(Component);
