import mensMock from "~/mocks/menus.json";

export const getMenuByStoreId = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const menu = mensMock.find((menu) => menu.restaurantId === id);
  if (!menu) {
    throw new Error(`menu to store ${id} not found`);
  }
  return menu as IGetMenuByStoreIdResponse;
};
