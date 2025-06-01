import { redirect } from "next/navigation";
import { CheckoutPage } from "~/components/pages/Checkout";
import { getRestaurantById } from "~/services/restaurants";
import { logger } from "~/utils/logger";

const fetchRestaurant = async (id: number) => {
  logger.info(`Checkout.fetchRestaurant - start - id=[${id}]`);
  try {
    const restaurantResponse = await getRestaurantById(id);

    logger.info("Checkout.fetchRestaurant - end");
    return restaurantResponse;
  } catch (error) {
    logger.error("Checkout.fetchRestaurant - Exception:", error);
    logger.info("Checkout.fetchRestaurant - redirecting to home");
    redirect("/");
  }
};

export default async function Checkout({ searchParams }) {
  const { id: restaurantId } = await searchParams;
  const restaurant = await fetchRestaurant(Number(restaurantId));
  return (
    <CheckoutPage
      restaurantImage={restaurant.image}
      restaurantName={restaurant.name}
    />
  );
}
