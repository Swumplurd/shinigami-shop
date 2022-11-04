import { Grid } from "@nextui-org/react";
import { cat_productos } from "../../data";
import { CategoriasGridItem } from "./CategoriasGridItem";

export const CategoriasGrid = () => {
  return (
    <Grid.Container gap={2} justify="center">
      {cat_productos.map((cat, index) => (
        <CategoriasGridItem cat={cat} index={index}/>
      ))}
    </Grid.Container>
  );
};
