import Image from "next/image";
import Link from "next/link";

import { Header } from "~/components/Header";
import { StoreCard } from "~/components/StoreCard";
import { getStores } from "~/services/stores";
import { createSlug } from "~/utils/slug";

const fetchStores = async () => {
  try {
    const response = await getStores();
    const parsedResponse = response.reduce(
      (acc, store) => {
        if (store.open) {
          acc.opened.push(store);
        } else {
          acc.closed.push(store);
        }
        return acc;
      },
      { opened: [] as IStore[], closed: [] as IStore[] }
    );
    return parsedResponse;
  } catch (error) {
    console.error("Home.fetchStores - Exception:", error);
    return { opened: [], closed: [] };
  }
};

export default async function Home() {
  const stores = await fetchStores();

  return (
    <>
      <Header withSearch />
      <main className="flex flex-col m-auto max-w-[1260px]">
        <Image
          alt="Rango barato no dia das crianças, peça com até 50% de desconto"
          className="w-full max-h-[420px] object-cover"
          height={420}
          src="/assets/banner.png"
          width={1260}
        />

        <section className="flex flex-col gap-[16px] p-[16px]">
          <p className="font-extrabold text-(--brand) text-xl">abertos</p>

          {stores.opened.map((store) => (
            <Link
              key={store.id}
              href="/loja/[name]"
              as={`/loja/${createSlug(store.name)}?id=${store.id}`}
            >
              <StoreCard {...store} />
            </Link>
          ))}
        </section>
        <section className="flex flex-col gap-[16px] p-[16px]">
          <p className="font-extrabold text-(--brand) text-xl">fechados</p>
          {stores.closed.map((store) => (
            <StoreCard key={store.id} {...store} />
          ))}
        </section>
      </main>
    </>
  );
}
