import Image from "next/image";

import {
  ChevronRight,
  DeliveryBiker,
  Favorite,
  Rating,
  Share,
} from "~/assets/icons";
import { Accordion } from "~/components/Accordion/Accordion";
import { Header } from "~/components/Header";
import { getMenuByStoreId } from "~/services/menus";
import { getStoreById } from "~/services/stores";
import { formatCentsToBrl } from "~/utils/format";
import { logger } from "~/utils/logger";

type IStoreProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const fetchStore = async (id: number) => {
  logger.info(`Store.fetchStore - start - id=[${id}]`);
  try {
    const storeResponse = await getStoreById(id);
    const menuResponse = await getMenuByStoreId(id);

    logger.info("Store.fetchStore - end");
    return {
      info: storeResponse,
      menu: menuResponse.menu,
    };
  } catch (error) {
    logger.error("Store.fetchStore - Exception:", error);
    throw error;
  }
};

export default async function Store({ searchParams }: IStoreProps) {
  const { id: storeId } = await searchParams;
  const storeData = await fetchStore(Number(storeId));

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-full m-auto max-w-7xl">
        <section className="p-6">
          <div className="flex gap-2 items-center mb-3">
            <Image
              alt={`Logo ${storeData.info.name}`}
              className="h-9 object-cover rounded-lg  w-9"
              height={36}
              src={storeData.info.image}
              width={36}
            />
            <p className="font-extrabold">{storeData.info.name}</p>
          </div>

          <div className="flex mb-1">
            <div className="flex flex-1 gap-3 items-center ">
              <Share className="cursor-pointer" height={24} width={24} />
              <Favorite className="cursor-pointer" height={24} width={24} />
            </div>
            <div className="cursor-pointer flex gap-1 items-center ">
              <p className="font-bold text-(--teal-400)">mais infos</p>
              <ChevronRight height={12} width={12} />
            </div>
          </div>

          <div className="flex font-bold gap-2 items-center mb-1 text-(--text-secondary)">
            <DeliveryBiker height={24} width={24} fill="var(--brand)" />
            <span className="text-(--brand)">
              {formatCentsToBrl(storeData.info.delivery_info.fee)}
            </span>
            <ChevronRight fill="var(--brand)" height={12} width={12} />
            <span>•</span>
            <span>hoje, {storeData.info.delivery_info.estimated_time}min</span>
            <span>•</span>
            <span>{storeData.info.delivery_info.distance.toFixed(1)}km</span>
          </div>

          <div
            className="
            bg-(--teal-50)
            font-bold
            mb-1
            p-1.5
            rounded-sm
            text-(--teal-600)
            w-fit"
          >
            entrega grátis acima de{" "}
            {formatCentsToBrl(
              storeData.info.delivery_info.free_delivery_threshold
            )}
          </div>

          <div className="flex font-bold gap-1.5 mb-1.5 items-center text-(--text-secondary)">
            <Rating height={16} width={16} />
            <span>{storeData.info.rating.toFixed(1)} de 5</span>
            <ChevronRight fill="var(--text-secondary)" height={12} width={12} />
            <span>•</span>
            <span className="text-(--success)">
              fecha às {storeData.info.closing_time}
            </span>
          </div>

          <div className="font-bold text-(--text-secondary)">
            <span>
              pedido mínimo:{" "}
              {formatCentsToBrl(storeData.info.delivery_info.minimum_order)}
            </span>
          </div>
        </section>

        <section className="bg-(--neutrals-100) flex flex-col gap-1">
          {storeData.menu.map((item) => (
            <Accordion
              description={item.description}
              items={item.items}
              key={item.category}
              title={item.category}
            />
          ))}
        </section>
      </main>
    </>
  );
}
