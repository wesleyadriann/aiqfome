type IDishesKind = "main" | "side" | "drink" | "dessert";

interface IMenuItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  promotional_price?: number;
  note?: {
    spicy?: boolean;
    vegan?: boolean;
  };
  variants?: {
    name: string;
    value: number;
    price: number;
    promotional_price: number;
  }[];
  options?: {
    name: string;
    min_selection?: number;
    max_selection?: number;
    options: string[];
  }[];
}

interface IRestaurantMenu {
  category: string;
  description?: string;
  kind: IDishesKind;
  items: IMenuItem[];
}

type IDrinkItem = Pick<IMenuItem, "name" | "description" | "price">;

interface IGetMenuByRestaurantIdResponse {
  restaurantId: number;
  menu: IRestaurantMenu[];
}
