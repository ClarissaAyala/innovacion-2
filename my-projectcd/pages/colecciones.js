import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MURUS</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <img src="/backgrounds/minimali.jpg" layout="intrinsic" width={3030} height={750}></img>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Colecciones
        </h1>

        <p className={styles.description}>
          Estos son los favoritos
        </p>

        <div className={styles.grid}></div>
           <a
            className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/acrilico/1.jpg" alt=""></img>
          </a>

          <a
            className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/acrilico/2.jpg" alt=""></img>
          </a>

          <a
            className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/acrilico/3.jpg" alt=""></img>
          </a>

          <a
            className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/acrilico/4.jpg" alt=""></img>
          </a>

          <a
            className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/acrilico/5.jpg" alt=""></img>
          </a>

          <a
            className={styles.card}>
            <h3></h3>
            <p></p>
            <img src= "/acrilico/6.jpg" alt=""></img>
          </a>
        <div></div>

        
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
