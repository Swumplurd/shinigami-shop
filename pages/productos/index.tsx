import { GridCategorias } from "../../components";
import { MainLayout } from "../../components/layouts";

export default function Productos() {
  return (
    <MainLayout
      title="Shinigami Shop | Productos"
      desc="Aqui encontrar productos organizados por categorias como: mangas, cosplays, accesorios, edredones, articulos decorativos, electronicos, etc."
      kw="mangas, accesorios de anime, edredones, articulos decorativos, electronicos"
    >
      <h1>
        Welcome to <a href="https://nextjs.org">Productos!</a>
      </h1>

      <GridCategorias/>
    </MainLayout>
  );
}
