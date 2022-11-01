import { Card, Col, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { cat_productos } from "../data";

export const GridCategorias = () => {
  const router = useRouter();
  const handleCatPress = (href: string) => {
    router.push(`${router.asPath}/${href}`);
  };
  return (
    <Grid.Container gap={2} justify="center">
      {cat_productos.map((cat, index) => (
        <Grid xl={2} lg={3} md={3} sm={3} xs={6} key={index}>
          <Card
            variant="bordered"
            isHoverable
            isPressable
            onPress={() => handleCatPress(cat.href)}
          >
            <Card.Header>
              <Col>
                <Text
                  h3
                  css={{
                    textGradient: "45deg, $red900 -20%, $red600 100%",
                  }}
                >
                  {cat.name}
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={cat.img}
                objectFit="cover"
                width="100%"
                height="100%"
                alt={cat.name}
                showSkeleton
                maxDelay={10000}
              />
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
