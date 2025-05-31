import restaurantsMock from "../mocks/restaurants.json";

export const getRestaurants = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return restaurantsMock as IGetRestaurantsResponse;
};

export const getRestaurantById = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const restaurant = restaurantsMock.find((restaurant) => restaurant.id === id);
  if (!restaurant) {
    throw new Error(`Restaurant with id ${id} not found`);
  }
  return restaurant as IGetRestaurantById;
};
