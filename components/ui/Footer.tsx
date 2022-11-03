import {
  Container,
  Card,
  Row,
  Text,
  Col,
  Spacer,
  Input,
  Grid,
} from "@nextui-org/react";

export const Footer = () => {
  return (
    <Container
      fluid
      as={"footer"}
      css={{ padding: 0, backgroundColor: "$backgroundAlpha", shadow: "$xl" }}
    >
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Text>
            Conecta
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  );
};
