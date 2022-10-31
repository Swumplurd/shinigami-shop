import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { cat_productos } from "../data";

export const GridCategorias = () => {
  const router = useRouter()
  const handleCatPress = (href: string) => {
    router.push(`${router.asPath}/${href}`)
  }
  return (
    <Grid.Container gap={2} justify="center">
      {cat_productos.map((cat, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isHoverable isPressable onPress={() => handleCatPress(cat.href)}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={cat.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={cat.name}
                showSkeleton
                maxDelay={10000}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{cat.name}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
