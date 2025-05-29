interface IStore {
  id: number;
  name: string;
  delivery_info: {
    fee: number;
    estimated_time: string;
    distance: number;
    free_delivery_threshold: number;
    minimum_order: number;
  };
  rating: number;
  open: boolean;
  closing_time: string;
  image: string;
}

type IGetStoresResponse = IStore[];

type IGetStoreById = IStore;
