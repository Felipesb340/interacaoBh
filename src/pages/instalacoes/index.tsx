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
  
    </>
  )
}