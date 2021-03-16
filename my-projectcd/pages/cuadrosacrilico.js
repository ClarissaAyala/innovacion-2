import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MURUS</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <img src="/backgrounds/mini.jpg" layout="intrinsic" width={3030} height={750}></img>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Cuadros Acrilico
        </h1>

        <p className={styles.description}>
          M U R U S
        </p>

        <div className={styles.grid}>
          <a href="personalizados" className={styles.card}>
            <h3>Personalizados</h3>
            <p>Aqui podras ver como va a lucir tu imagen o diseño y podrás ver los tamaños que tenemos</p>
          </a>

          <a
            href="colecciones"
            className={styles.card}>
            <h3>Colecciones</h3>
            <p></p>
          </a>

          <a
            href="videoacrilico"
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
