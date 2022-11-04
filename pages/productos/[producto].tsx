import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MainLayout } from "../../components/layouts";
import { cat_productos } from "../../data";
import { CategoriasProductos } from "../../interfaces";

interface Props {
    producto: CategoriasProductos[]
}

const Producto: FC<Props> = ({producto}) => {
  const {name, desc, kw} = producto[0]
  return (
    <MainLayout
      title={`Shinigami Shop | ${name}`}
      desc={desc}
      kw={kw}
    >
      <h1>
        Welcome to <a href="https://nextjs.org">{name}</a>
      </h1>

    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const hrefCat = cat_productos.map((cat, index) => `${cat.href}`)

    return {
        paths: hrefCat.map(producto => ({
            params: {
                producto
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { producto } = ctx.params as {producto: string}
    const data = cat_productos.filter((cat) => producto === cat.href)
    return {
        props: {
            producto: data
        }
    }
}

export default Producto;