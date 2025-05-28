import storesMock from "../mocks/stores.json";

export const getStores = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return storesMock as IGetStoresResponse;
};

export const getStoreById = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const store = storesMock.find((store) => store.id === id);
  if (!store) {
    throw new Error(`Store with id ${id} not found`);
  }
  return store as IGetStoreById;
};
