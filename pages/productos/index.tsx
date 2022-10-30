import { MainLayout } from '../../components/layouts/MainLayout'
import styles from '../../styles/Home.module.css'

export default function Productos() {
  return (
    <MainLayout title="Shinigami Shop | Productos" desc="Aqui encontrar productos organizados por categorias como: mangas, cosplays, accesorios, edredones, articulos decorativos, electronicos, etc." kw="mangas, accesorios de anime, edredones, articulos decorativos, electronicos">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Productos!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </main>
      </div>
    </MainLayout>
  )
}
