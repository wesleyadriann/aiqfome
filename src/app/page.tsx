import { HomePage } from "~/components/pages/Home";
import { getRestaurants } from "~/services/restaurants";
import { logger } from "~/utils/logger";

const fetchRestaurants = async () => {
  logger.info("Home.fetchRestaurants - start");
  try {
    const response = await getRestaurants();
    const parsedResponse = response.reduce(
      (acc, restaurant) => {
        if (restaurant.open) {
          acc.opened.push(restaurant);
        } else {
          acc.closed.push(restaurant);
        }
        return acc;
      },
      { opened: [] as IRestaurant[], closed: [] as IRestaurant[] }
    );
    logger.info("Home.fetchRestaurants - end");
    return parsedResponse;
  } catch (error) {
    logger.error("Home.fetchRestaurants - Exception:", error);
    return { opened: [], closed: [] };
  }
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return <HomePage restaurants={restaurants} />;
}
