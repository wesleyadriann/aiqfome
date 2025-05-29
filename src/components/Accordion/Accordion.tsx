"use client";

import React, { useState, useRef, useCallback } from "react";
import { ChevronRight } from "~/assets/icons";
import { IAccordionProps } from "./types";
import { formatCentsToBrl } from "~/utils/format";

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
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <span className="text-(--text-secondary) text-xs">
                  {item.description}
                </span>
              </div>
              <div>
                {item.variants?.length > 0 && (
                  <p className="text-(--text-secondary) text-xs">a partir de</p>
                )}
                <span className="font-bold text-(--brand)">
                  {formatCentsToBrl(item.price)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Accordion = React.memo(Component);
