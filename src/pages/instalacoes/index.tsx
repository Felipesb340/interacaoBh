import Head from 'next/head'
import { Carousel } from 'react-responsive-carousel';
import styles from './styles.module.scss';




export default function Instalacoes() {

  return (
    <>
      <Head>
        <title>Instalações | Interação</title>
      </Head>
      <div className={styles.local} >
        <h1>Localização</h1>
        <p><span>Endereço</span>: Rua Doresópolis 902 Loja 6 </p>
        <p><span>Bairro</span>: Fernão Dias </p>
        <p><span>Cidade</span>: Belo Horizonte </p>
        <p><span>Cep</span>: 31910-442 </p>
      </div>
      <div className={styles.map} >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.3703684971163!2d-43.917481236169294!3d-19.874037625933767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69af0d8f13ed9%3A0x93b558448fd7bccc!2sRua%20Dores%C3%B3polis%2C%20902%20-%20Loja%206%20-%20Fern%C3%A3o%20Dias%2C%20Belo%20Horizonte%20-%20MG%2C%2031910-442!5e1!3m2!1sen!2sbr!4v1665090078995!5m2!1sen!2sbr" loading="lazy" ></iframe></div>
    </>
  )
}