import styles from './styles.module.scss';

export default function Agendamento () {
  return (
    <div className={styles.agendamentoContainer} > 
      <iframe width="100%" height="710" src="https://www.buscafisio.com.br/embed-schedule/interacaobh" frameBorder="0" ></iframe>
    </div>  )
}