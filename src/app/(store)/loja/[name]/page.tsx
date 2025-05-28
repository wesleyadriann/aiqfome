import Image from "next/image";

import { Header } from "~/components/Header";
import { getStoreById } from "~/services/stores";

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
  const storeData = await fetchStore(Number(searchParams.id));

  return (
    <>
      <Header />
      <main className="flex flex-col m-auto max-w-[1260px]">
        Query param: {JSON.stringify(storeData)}
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
              <Image
                alt="Compartilhar"
                className="cursor-pointer"
                height={24}
                src="/assets/icons/share.svg"
                width={24}
              />
              <Image
                alt="Favoritar"
                className="cursor-pointer"
                height={24}
                src="/assets/icons/favorite.svg"
                width={24}
              />
            </div>
            <p>mais infos</p>
          </div>
        </section>
      </main>
    </>
  );
}
