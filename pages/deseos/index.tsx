import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import styles from "../../styles/Home.module.css";

export default function Productos() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Deseos!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </main>
      </div>
    </MainLayout>
  );
}
