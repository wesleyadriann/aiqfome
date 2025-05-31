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

interface IRestaurantMenu {
  category: string;
  description?: string;
  items: IMenuItem[];
}

interface IGetMenuByRestaurantIdResponse {
  restaurantId: number;
  menu: IRestaurantMenu[];
}
