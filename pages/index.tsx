import { HomeCarousel } from "../components";
import { MainLayout } from "../components/layouts";

export default function Home() {
  return (
    <MainLayout>
      <h1>
        Welcome to <a href="https://nextjs.org">Shinigami Shop!</a>
      </h1>
      <HomeCarousel />
    </MainLayout>
  );
}
