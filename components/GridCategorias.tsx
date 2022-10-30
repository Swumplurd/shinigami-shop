import { Card, Grid, Row, Text } from "@nextui-org/react";
import { cat_productos } from "../data";

export const GridCategorias = () => {
  return (
    <Grid.Container gap={2} justify="center">
      {cat_productos.map((cat, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
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
                <Text
                  css={{
                    color: "$accents7",
                    fontWeight: "$semibold",
                    fontSize: "$sm",
                  }}
                >
                  Ver mas
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
