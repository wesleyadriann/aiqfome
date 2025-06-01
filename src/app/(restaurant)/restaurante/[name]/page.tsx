import { redirect } from "next/navigation";

import { RestaurantPage } from "~/components/pages/Restaurant";

import { getMenuByRestaurantId } from "~/services/menus";
import { getRestaurantById } from "~/services/restaurants";

import { logger } from "~/utils/logger";

const fetchRestaurant = async (id: number) => {
  logger.info(`Restaurant.fetchRestaurant - start - id=[${id}]`);
  try {
    const restaurantResponse = await getRestaurantById(id);
    const menuResponse = await getMenuByRestaurantId(id);

    logger.info("Restaurant.fetchRestaurant - end");
    return {
      info: restaurantResponse,
      menu: menuResponse,
    };
  } catch (error) {
    logger.error("Restaurant.fetchRestaurant - Exception:", error);
    logger.info("Restaurant.fetchRestaurant - redirecting to home");
    redirect("/");
  }
};

export default async function Restaurant({ searchParams }) {
  const restaurantId = await searchParams?.id;
  const restaurant = await fetchRestaurant(Number(restaurantId));

  return <RestaurantPage {...restaurant} />;
}
