import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MURUS</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <img src="/backgrounds/8.jpg" layout="intrinsic" width={3030} height={750}></img>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Video Decoraciones
        </h1>
        <p className={styles.description}>
        </p>

        <iframe width="1500" height="850" src="/videos/decoracion.mp4"></iframe>

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
