import styles from './styles.module.scss';
import { ActiveLink } from '../activeLink';
import { useState } from 'react';
import Link from 'next/link';


export function Header() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 150);
  }

  return (
    <header className={styles.headerContainer} >
      <div className={isNavExpanded ? styles.headerContentexpanded : styles.headerContent} >
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        </Link>


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
            <a onClick={refreshPage}
            >Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/servicos"  >
            <a onClick={refreshPage}
            >Serviços</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/profissionais" >
            <a onClick={refreshPage}
            >Profissionais</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/instalacoes"  >
            <a onClick={refreshPage}
            >Instalações</a>
          </ActiveLink>



          {
            isNavExpanded ?
              <button className={styles.headerButtonexpanded} >
                <Link href='/agendamento'  >
                  <a onClick={refreshPage} > Agedamento Online </a>
                </Link>
              </button> :
              ''
          }

        </nav>
        <button className={styles.headerButton} >
          <Link href='/agendamento'>
            <a onClick={refreshPage} > Agedamento Online</a>
          </Link>
        </button>

      </div>
    </header>
  )
}