import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Footer } from "~/components/server/Footer";
import { Header } from "~/components/server/Header";
import { TicketStoreProvider } from "~/providers/ticketStoreProvider";

import "./globals.css";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O melhor delivery de tudo é no aiqfome",
  description:
    "Peça comida, bebidas, mercado, farmácia, padaria, pet shop e muito mais pelo maior aplicativo de delivery do interior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunitoSans.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <section className="flex-1">
          <TicketStoreProvider>{children}</TicketStoreProvider>
        </section>
        <Footer />
      </body>
    </html>
  );
}
