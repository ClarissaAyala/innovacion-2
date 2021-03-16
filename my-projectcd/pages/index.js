import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MURUS</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <img src="/background.png" layout="intrinsic" width={3070} height={700}></img>
      <main className={styles.main}>
      

        <h1 className={styles.title}>
        <img class="float-left ..." src="logo.png" width={700}></img>
        </h1>

        <p className={styles.description}>
          Cuadros hechos specialmente para ti
        </p>

        <div className={styles.grid}>
          <a href="quienessomos" className={styles.card}>
            <h3>Quienes Somos</h3>
            <p>Somos una tienda en linea de cuadros decorativos y articulos personalizados.</p>
          </a>

          <a href="cuadrosacrilico" className={styles.card}>
            <h3>Cuadros Acrilico &rarr;</h3>
            <p></p>
            <img src= "/rose.jpg" alt=""></img>
          </a>

          <a
            href="cuadroscanvas"
            className={styles.card}>
            <h3>Cuadros Canvas &rarr;</h3>
            <p></p>
            <img src= "/cack.jpg" alt=""></img>
          </a>

          <a href="decoracion" className={styles.card}>
            <h3>Decoraciones &rarr;</h3>
            <p></p>
            <img src= "/decoraciones/venado.jpg" alt=""></img>
          </a>

          <a
            href="contacto"
            className={styles.card}>
            <h3>Contacto &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
