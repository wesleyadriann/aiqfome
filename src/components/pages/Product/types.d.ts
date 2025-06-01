export type IProductPageProps = {
  restaurantMenu: IRestaurantMenu[];
};

export type IItemsAdded = {
  kind: string;
  name: string;
  value?: number;
};

export type ISelectedItems = {
  total: number;
  variant?: IItemsAdded;
  option?: IItemsAdded[];
  drink?: IItemsAdded[];
  side?: IItemsAdded[];
};
