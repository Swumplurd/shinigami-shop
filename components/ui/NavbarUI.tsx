import { Button, Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SwitchTheme } from "./theme";
import Link from "next/link";

const routes = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Novedaes",
    href: "/novedades",
  },
  {
    text: "Productos",
    href: "/productos",
  },
  {
    text: "Cajas Sorpresa",
    href: "/cajas",
  },
  {
    text: "Lista de Deseos",
    href: "/deseos",
  },
];

export const NavbarUI = () => {
  const { asPath } = useRouter();
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          SHINIGAMI SHOP
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        hideIn="xs"
        activeColor="primary"
        variant="underline-rounded"
      >
        {routes.map((route) => (
          <Navbar.Link
            key={route.href}
            isActive={asPath === route.href ? true : false}
            as={Link}
            href={route.href}
          >
            {route.text}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Iniciar Sesion
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat href="#">
            Registrate
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <SwitchTheme />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
