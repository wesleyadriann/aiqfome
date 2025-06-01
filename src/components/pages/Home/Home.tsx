import React from "react";

import Image from "next/image";
import Link from "next/link";

import { SearchBar } from "~/components/client/SearchBar/SearchBar";
import { RestaurantCard } from "~/components/server/RestaurantCard";
import { createSlug } from "~/utils/slug";

import { IHomeProps } from "./types";

const Component: React.FC<IHomeProps> = ({ restaurants }) => {
  return (
    <>
      <SearchBar />
      <main className="flex flex-col m-auto max-w-7xl">
        <Image
          alt="Rango barato no dia das crianças, peça com até 50% de desconto"
          className="w-full max-h-[420px] object-cover"
          height={420}
          src="/assets/banner.png"
          width={1260}
        />

        <section className="flex flex-col gap-4 p-4">
          <p className="font-extrabold text-(--brand) text-xl">abertos</p>

          {restaurants?.opened.map((restaurant) => (
            <Link
              key={restaurant.id}
              href="/restaurante/[name]"
              as={`/restaurante/${createSlug(restaurant.name)}?id=${
                restaurant.id
              }`}
            >
              <RestaurantCard
                {...restaurant}
                deliveryValue={restaurant.delivery_info.fee}
              />
            </Link>
          ))}
        </section>
        <section className="flex flex-col gap-4 p-4">
          <p className="font-extrabold text-(--brand) text-xl">fechados</p>
          {restaurants?.closed.map((restaurant) => (
            <RestaurantCard
              {...restaurant}
              deliveryValue={restaurant.delivery_info.fee}
              key={restaurant.id}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export const HomePage = React.memo(Component);
