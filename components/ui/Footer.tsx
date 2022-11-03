import { Container, Text, Grid, Input, Button } from "@nextui-org/react";
import { FacebookSVG, InstagramSVG, TiktokSVG, TumblrSVG, TwitterSVG, YoutubeSVG } from "../svg";

export const Footer = () => {
  return (
    <Container
      fluid
      as={"footer"}
      css={{ padding: 0, backgroundColor: "$backgroundAlpha", shadow: "$xl" }}
    >
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} justify="center">
          <Text transform="uppercase" b>
            Conecta
          </Text>
        </Grid>
        <Grid xs={12} justify="center">
          <ul className="social-media" style={{ display: "flex", justifyContent: "space-between" }}>
            <li>
              <FacebookSVG />
            </li>
            <li>
              <TwitterSVG />
            </li>
            <li>
              <InstagramSVG />
            </li>
            <li>
              <YoutubeSVG />
            </li>
            <li>
              <TiktokSVG />
            </li>
            <li>
              <TumblrSVG />
            </li>
          </ul>
        </Grid>
        <Grid xs={12} justify="center">
          <Text transform="uppercase" b>
            Con nosotros
          </Text>
        </Grid>
        <Grid xs={12} justify="center">
          <Text style={{textAlign: "center"}} transform="uppercase" b>
            Unete para ventas, ofertas exclusivas y descargas
          </Text>
        </Grid>
        <Grid xl={4} lg={4} md={5} sm={8} xs={10} justify="center">
          <Input width="100%" placeholder="Ingresa tu email" status="error" />
        </Grid>
        <Grid xs={12} justify="center">
          <Button color="error">Suscibirse</Button>
        </Grid>
      </Grid.Container>
    </Container>
  );
};
