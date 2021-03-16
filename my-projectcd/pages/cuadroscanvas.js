import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MURUS</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
      <img src="/backgrounds/4.jpg" layout="intrinsic" width={3030} height={850}></img>
        <h1 className={styles.title}>
          Cuadros Canvas
        </h1>

        <p className={styles.description}>
          M U R U S
        </p>

        <div className={styles.grid}>
          <a href="abstractos" className={styles.card}>
            <h3>Abstractos</h3>
          </a>

          <a href="realistas" className={styles.card}>
            <h3>Realistas</h3>
          </a>

          <a href="personalizadoscanvas" className={styles.card}>
            <h3>Personalizados</h3>
          </a>

          <a
            href="videocanva"
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
