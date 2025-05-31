interface IRestaurant {
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

type IGetRestaurantsResponse = IRestaurant[];

type IGetRestaurantById = IRestaurant;
