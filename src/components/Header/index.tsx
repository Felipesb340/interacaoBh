import styles from './styles.module.scss';
import { ActiveLink } from '../activeLink';
import { useState } from 'react';
import Link from 'next/link';


export function Header() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)



  return (
    <header className={styles.headerContainer} >
      <div className={isNavExpanded ? styles.headerContentexpanded : styles.headerContent} >
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />

        <button className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <img src="/images/burguerIcon.png" alt="Logo" />
        </button>

        <nav>
          {
            isNavExpanded ?
              <button className={styles.closeButton}
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                <img src="/images/closeIcon.png" alt="Logo" />
              </button> :
              ''
          }
          <ActiveLink activeClassName={styles.active} href="/">
            <a
            // onClick={() => {
            //   setIsNavExpanded(isNavExpanded === false);
            // }} 
            >Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/servicos"  >
            <a
            // onClick={() => {
            //   setIsNavExpanded(isNavExpanded === false);
            // }}
            >Serviços</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/profissionais" >
            <a
            // onClick={() => {
            //   setIsNavExpanded(isNavExpanded === false);
            // }}
            >Profissionais</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/instalacoes" >
            <a
            // onClick={() => {
            //   setIsNavExpanded(isNavExpanded === false);
            // }}
            >Instalações</a>
          </ActiveLink>



          {
            isNavExpanded ?
              <button className={styles.headerButtonexpanded} >
                <Link href='https://www.buscafisio.com.br/interacaobh/agenda'>
                  Agendamento Online
                </Link>
              </button> :
              ''
          }

        </nav>
        <button className={styles.headerButton} >
          <Link href='https://www.buscafisio.com.br/interacaobh/agenda'>
            Agendamento Online
          </Link>
        </button>

      </div>
    </header>
  )
}