import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MURUS</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <img src="/backgrounds/6.jpg" layout="intrinsic" width={3030} height={750}></img>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Realistas
        </h1>
        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/canvas/3.jpg" alt=""></img>
          </a>

          <a
            className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/canvas/5.jpg" alt=""></img>
          </a>

          <a
            className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/canvas/6.jpg" alt=""></img>
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
