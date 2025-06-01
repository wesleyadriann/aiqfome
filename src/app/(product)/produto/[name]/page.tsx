import { redirect } from "next/navigation";
import { ProductPage } from "~/components/pages/Product";
import { getMenuByRestaurantId } from "~/services/menus";
import { logger } from "~/utils/logger";

const fetchMenu = async (id: number) => {
  logger.info(`Product.fetchMenu - start - id=[${id}]`);
  try {
    const menuResponse = await getMenuByRestaurantId(id);

    logger.info("Product.fetchMenu - end");
    return menuResponse.menu;
  } catch (error) {
    logger.error("Product.fetchMenu - Exception:", error);
    logger.info("Product.fetchMenu - redirecting to home");
    redirect("/");
  }
};

export default async function Product({ searchParams }) {
  const { id: restaurantId } = await searchParams;
  const menu = await fetchMenu(Number(restaurantId));

  return <ProductPage restaurantMenu={menu} />;
}
