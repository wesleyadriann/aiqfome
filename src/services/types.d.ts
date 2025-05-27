interface IStore {
  id: number;
  name: string;
  rating: number;
  delivery_value: number;
  open: boolean;
  image: string;
}

type IGetStoresResponse = IStore[];
