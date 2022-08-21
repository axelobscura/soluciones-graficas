import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Centro de soluciones gráficas - impresión en gran formato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { children }

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
