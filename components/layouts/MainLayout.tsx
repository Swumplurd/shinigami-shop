import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { NavbarUI } from '../ui/NavbarUI'

interface Props {
  title?: string;
  desc?: string;
  kw?: string;
}

export const MainLayout: FC<PropsWithChildren & Props> = ({ children, title = "Shinigami Shop | Inicio", desc = "Venta de productos como: anime, mangas, figuras, ropa, articulos electronicos etc.", kw = "mangas, manga, productos japoneses, figuras, figurillas, cosplay, anime, japon"}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="swumplurd"/>
        <meta name="description" content={desc}/>
        <meta name="keywords" content={kw}/>
      </Head>
      
      <NavbarUI/>
      
      <main>
        {children}
      </main>
    </>
  )
}
