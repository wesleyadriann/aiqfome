import Image from "next/image";

import { Header } from "~/components/Header";
import { getStoreById } from "~/services/stores";
import { ChevronRight, Favorite, Share } from "~/assets/icons";

type IStoreProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const fetchStore = async (id: number) => {
  try {
    const response = await getStoreById(id);

    return response;
  } catch (error) {
    console.error("Home.fetchStores - Exception:", error);
    return { opened: [], closed: [] };
  }
};

export default async function Store({ searchParams }: IStoreProps) {
  const { id: storeId } = await searchParams;
  const storeData = await fetchStore(Number(storeId));

  return (
    <>
      <Header />
      <main className="flex flex-col m-auto max-w-[1260px]">
        <section className="p-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <Image
              alt={`Logo ${storeData.name}`}
              className="h-[36px] object-cover rounded-[8px] w-[36px]"
              height={36}
              src={storeData.image}
              width={36}
            />
            <p className="font-extrabold">{storeData.name}</p>
          </div>
          <div className="flex">
            <div className="flex gap-[12px] items-center flex-1">
              <Share className="cursor-pointer" height={24} width={24} />
              <Favorite className="cursor-pointer" height={24} width={24} />
            </div>
            <div className="cursor-pointer flex gap-[4px] items-center ">
              <p className="font-bold text-(--teal-400)">mais infos</p>
              <ChevronRight height={12} width={12} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
