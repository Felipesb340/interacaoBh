import Head from 'next/head'
import styles from './styles.module.scss';

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Serviços | Interação</title>
      </Head>
      <main className={styles.contentContainer}>
        <p>
          A <span>Espaço Interação</span> - Fisioterapia, Pilates e Treinamento Funcional,
          inaugurada em 2021, é uma Clínica de Fisioterapia Esportiva e
          Traumato-Ortopédica, Centro de Treinamento Funcional, e Estúdio de
          Pilates localizada no bairro Fernão Dias, em Belo Horizonte.
          Nossa missão é trazer <span>bem-estar</span> e <span>qualidade de vida </span> 
           através do movimento humano. Nossa visão é ser referência em atividade 
          física, reabilitação, e formação de atletas em Belo Horizonte.
          Nossos valores são cuidado com as pessoas, desejo de crescimento,
          valorização do esporte, educação e saúde.
          Nossos <span>principais serviços</span> são: Reabilitação (esportiva e ortopédica),
          Treinamento Funcional, Recuperação acelerada (Recovery), Pilates, Yoga,
          Palmilhas Biomecânicas, Quiropraxia, Acupuntura, entre outros.
        </p>
        <div className={styles.service}>
          <h1>🧑‍⚕️ Fisioterapia</h1>
          <img src="/images/Equipe-Interação.png" alt="" />
          <p>Consultas presenciais ou por teleatendimento</p>          
        </div>
        <div className={styles.service}>
          <h1>💆‍♀️ Quiropraxia</h1>
          <img src="/images/Rafa-Quiro.png" alt="" />
          <p>Consultas presenciais</p>
        </div>
        <div className={styles.service}>
          <h1>🧘🏻‍♀️ Acupuntura</h1>
          {/* <img src="/images/Equipe-Interação.png" alt="" /> */}
          <p>Consultas presenciais</p>
        </div>
        <div className={styles.service}>
          <h1>🤸‍♂️ Pilates</h1>
          <img src="/images/Jessica-Pilates.png" alt="" />
          <p>Consultas presenciais</p>
        </div>
        <div className={styles.service}>
          <h1>🏋️‍♀️ Treinamento Funcional</h1>
          <img src="/images/rafafunc.png" alt="" />
          <p>Consultas presenciais</p>
        </div>
      </main>
    </>
  )
}