import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MURUS</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <img src="/backgrounds/p.jpg" layout="intrinsic" width={3030} height={750}></img>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Decoraciones
        </h1>

        <p className={styles.description}>
          M U R U S
        </p>

        <div className={styles.grid}>
          <a href="animales" className={styles.card}>
            <h3>Animales</h3>
          </a>

          <a href="astrologia" className={styles.card}>
            <h3>Astrologia</h3>
          </a>

          <a href="paises" className={styles.card}>
            <h3>Paises  &  Paisajes</h3>
          </a>

          <a href="gemoetricos" className={styles.card}>
            <h3>Geometricos</h3>
          </a>

          <a
            href="videodecoraciones"
            className={styles.card}>
            <h3>Video</h3>
            <p></p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          M U R U S{' '}
          <img src="logo.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
