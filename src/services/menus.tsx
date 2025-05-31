import menusMock from "~/mocks/menus.json";

export const getMenuByRestaurantId = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const menu = menusMock.find((menu) => menu.restaurantId === id);
  if (!menu) {
    throw new Error(`menu to restaurant ${id} not found`);
  }
  return menu as IGetMenuByRestaurantIdResponse;
};
