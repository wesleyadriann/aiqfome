import storesMock from "../mocks/stores.json";

export const getStores = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return storesMock as IGetStoresResponse;
};
