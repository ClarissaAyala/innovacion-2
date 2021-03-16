import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MURUS</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <img src="/top.jpg" layout="intrinsic" width={3030} height={750}></img>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Quienes Somos
        </h1>
        <p className={styles.description}>
          M U R U S
        </p>

        <div className={styles.grid}>

          <a className={styles.card}>
            <h3></h3>
            <p className={styles.description}>

Murus es la marca de cuadros y accesorios de diseño adaptados al estilo de vida urbano. 
En Murus puedes comprar de forma rápida, fácil y segura tus productos preferidos para tu hogar: 
te ofrecemos una gran variedad de cuadros, contando con diseños originales y personalizados, tambien 
contamos con decoraciones en varios estilos como contemporáneo, 
tradicional, artesanal, industrial. Son piezas de madera, acrilico y lienzos.
Te proponemos diseños simples y modernos, con soluciones versátiles adaptadas a tus 
espacios como el comedor, salas, recámaras, estudio y oficina, y a las necesidades actuales de tu estilo de vida. 
Nuestra misión es que puedas sentirte parte de la ciudad donde vives desde cualquier lugar, pero sobre todo, 
comenzando desde tu hogar.7226181503 
murus/studio.com.mx © All rights reserved Murus Studio Mexico
        </p>
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

