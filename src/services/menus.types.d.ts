interface IMenuItem {
  name: string;
  description?: string;
  price: number;
  promotional_price?: number;
  note?: {
    spicy?: boolean;
    vegan?: boolean;
  };
  variants: {
    name: string;
    value: number;
    price: number;
    promotional_price: number;
  }[];
}

interface IStoreMenu {
  category: string;
  description?: string;
  items: IMenuItem[];
}

interface IGetMenuByStoreIdResponse {
  restaurantId: number;
  menu: IStoreMenu[];
}
