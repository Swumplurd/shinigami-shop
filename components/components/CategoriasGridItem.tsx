import { useRouter } from "next/router";
import { Card, Col, Grid, Text } from "@nextui-org/react";
import { CategoriasProductos } from "../../interfaces";

interface Props {
    cat: CategoriasProductos,
    index: number
}

export const CategoriasGridItem = ({ cat, index }: Props) => {
  const router = useRouter();
  const handleCatPress = (href: string) => {
    router.push(`${router.asPath}/${href}`);
  };
  return (
    <Grid xl={2} lg={3} md={3} sm={3} xs={6} key={index}>
      <Card
        variant="bordered"
        isHoverable
        isPressable
        onPress={() => handleCatPress(cat.href)}
      >
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
        <Card.Footer
          isBlurred
          css={{
            position: "relative",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Col>
            <Text
              h4
              css={{
                textGradient: "45deg, $red900 -20%, $red600 100%",
              }}
            >
              {cat.name}
            </Text>
          </Col>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
