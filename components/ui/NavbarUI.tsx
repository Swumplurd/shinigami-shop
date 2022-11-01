import { Button, Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SwitchTheme } from "./SwitchTheme";
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
    text: "Cajas",
    href: "/cajas",
  },
  {
    text: "Deseos",
    href: "/deseos",
  },
];

export const NavbarUI = () => {
  const { asPath } = useRouter();
  return (
    <Navbar isCompact variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
        <Text b color="inherit" hideIn="sm">
          SHINIGAMI SHOP
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        hideIn="sm"
        activeColor="error"
        variant="underline-rounded"
      >
        {routes.map((route, index) => (
          <Navbar.Link
            key={route.href}
            isActive={ route.href === asPath || (asPath.includes(route.href) && index != 0) }
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
          <Button auto flat href="#" color="error">
            Registrate
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <SwitchTheme />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {routes.map((route, index) => (
          <Navbar.CollapseItem key={index}>
            <Link color="inherit" href={route.href}>
              {route.text}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
