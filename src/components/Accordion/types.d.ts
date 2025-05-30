export type IAccordionProps = {
  title: string;
  description?: string;
  items: IMenuItem[];
};

export type IAccordionItemProps = {
  item: IMenuItem;
  onClick: (item: IMenuItem) => void;
};
