import Head from 'next/head'
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Interação</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero} >
          <span>👏 Seja Bem-Vindo</span>
          <h1>Reabilitação e <span>Performance</span>.</h1>
          <p>
            Proporcionando bem-estar e qualidade de vida.
            Venha conhecer nossos serviços, instalações
            e profissionais.
          </p>
          <button><a href='https://www.buscafisio.com.br/interacaobh/agenda'>Agendar Horário </a></button>
        </section>
        <img src="/images/rafafunc.png" alt="Foto do primerio andar" />
      </main>
    </>
  )
}
