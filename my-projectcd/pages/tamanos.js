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
      <img src="/backgrounds/2.jpg" layout="intrinsic" width={3030} height={750}></img>
        <h1 className={styles.title}>
          Tamaños
        </h1>

        <p className={styles.description}>
          Selecciona el tamaño y sube tu diseño o la imagen
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>30 x 22cm</h3>
            <img src= "/acrilico/IMG_5829.PNG" alt=""></img>
          </a>

          <a className={styles.card}>
            <h3>120 x 90cm</h3>
            <img src= "/acrilico/IMG_5740.PNG" alt=""></img>
          </a>

          <a className={styles.card}>
            <h3>180 x 140cm</h3>
            <img src= "/acrilico/6.jpg" alt=""></img>
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
