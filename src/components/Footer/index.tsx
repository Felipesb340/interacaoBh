import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <div className={styles.footerContainer} >
    <div className={styles.footerContent}>

      <section>
        <div>
          <img src="/images/wppIcon.png" height={20} width={20} alt="" />
          <Link href="https://api.whatsapp.com/send?phone=553136546482&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos.">
            (31) 3654-6482
          </Link>
        </div>
        <div>
          <img src="/images/clockIcon.png" height={20} width={20} alt="" />
          <Link href="/agendamento">
            Segunda á sexta, 7h ás 19h.
            Sábado, 8h ás 12h
          </Link>
        </div>
      </section>


      <section>
        <div>
          <img src="/images/localIcon.png" height={20} width={20} alt="" />
          <Link href="https://www.google.com/maps/place/Rua+Dores%C3%B3polis,+902+-+Loja+6+-+Fern%C3%A3o+Dias,+Belo+Horizonte+-+MG,+31910-442/@-19.8740376,-43.9174812,186m/data=!3m1!1e3!4m5!3m4!1s0xa69af0d8f13ed9:0x93b558448fd7bccc!8m2!3d-19.8740525!4d-43.9173463">
            <a>Rua Doresópolis, 902, Loja 6, Belo Horizonte</a>
          </Link>
        </div>
        <div>
          <img src="/images/instaIcon.png" height={20} width={20} alt="" />
          <Link href="https://www.instagram.com/interacaobh/">
            <a>@interacaobh</a>
          </Link>
        </div>
      </section>

      <div className={styles.footerMenu} >
        <Link href="/">
          Home
        </Link>
        <Link href="/servicos">
          <a>Serviços</a>
        </Link>
        <Link href="/profissionais">
          <a>Profisionais</a>
        </Link>
        <Link href="/instalacoes">
          <a>Instalações</a>
        </Link>
      </div>
    </div>
    </div>
  )
}