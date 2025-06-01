export type IAccordionProps = {
  title: string;
  description?: string;
  items: IMenuItem[];
  itemsKind?: string;
};

export type IAccordionItemProps = {
  item: IMenuItem;
  onClick: (item: IMenuItem) => void;
};
