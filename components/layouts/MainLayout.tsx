import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Container, Spacer } from "@nextui-org/react";
import { Footer, Cart, NavbarUI } from "../ui";
import "animate.css/animate.min.css";

interface Props {
  title?: string;
  desc?: string;
  kw?: string;
}

export const MainLayout: FC<PropsWithChildren & Props> = ({
  children,
  title = "Shinigami Shop | Inicio",
  desc = "Venta de productos como: anime, mangas, figuras, ropa, articulos electronicos etc.",
  kw = "mangas, manga, productos japoneses, figuras, figurillas, cosplay, anime, japon",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="swumplurd" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={kw} />
      </Head>

      <NavbarUI />
      <Cart/>

      <Container as="main" lg className="animate__animated animate__fadeIn">
        <Spacer/>
        {children}
        <Spacer/>
      </Container>

      <Footer />
    </>
  );
};
