import { FC, PropsWithChildren } from "react";
import { Container, Spacer } from "@nextui-org/react";
import { NavbarUI } from "../ui/NavbarUI";
import Head from "next/head";
import "animate.css/animate.min.css"

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

      <Container as="main" lg className="animate__animated animate__fadeIn">
        <Spacer/>
        {children}
        <Spacer/>
      </Container>
    </>
  );
};
