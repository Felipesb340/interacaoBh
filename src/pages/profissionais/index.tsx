import Head from 'next/head'
import styles from './styles.module.scss';
import Modal from 'react-modal';
import { useState } from 'react';

export default function Profissionais() {


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [modal2IsOpen, set2IsOpen] = useState(false);

  function openModal2() {
    set2IsOpen(true);
  }

  function closeModal2() {
    set2IsOpen(false);
  }



  return (
    <>
      <Head>
        <title>Profissionais | Interação</title>
      </Head>
      <main className={styles.contentContainer}>
        <div className={styles.pros}>
          <img src="/images/rafa.png" alt="Rafael Cestaro" />
          <div className={styles.prosDescription}>
            <h1>Rafael Cestaro de Souza</h1>
            <p>
              <span>Especialidades</span>: Fisioterapia esportiva, Quiropaxista,
              Traumato-Ortopédica, Treinamento Funcional
            </p>
            <ul>
              <li>Bacharel Fisioterapia (UFMG) - 2017</li>
              <li>Pós-graduado em Fisioterapia Esportiva (UFMG) - 2019</li>
              <li>Formação em Quiropraxia, Bandagens Terapêuticas,
                Dry Neddling, Kinetic Control, e Treinamento Funcional;
              </li>
            </ul>
            <div>
              <button className={styles.openModal} onClick={openModal}>Ver mais ...</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={styles.modalContainer}
                overlayClassName={styles.Overlay}
              >
                <ul>

                  <li>Experiência por LAPREV-UFMG, iniciação científica em
                    LAM-UFMG, estágio profissional em Clube Atlético-MG,
                    residência em Minas Tênis Clube, fisioterapeuta ProSports
                    Fisioterapia Avançada e Espaço Clinorte;
                  </li>
                  <li>
                    Licenciado Palmilhas Biomecânicas Propulsão (desde 2019)
                  </li>
                  <li>
                    Colaborador LEF-UFMG (desde 2019);
                  </li>
                  <li>
                    Fisioterapeuta do Departamento de Saúde e Desempenho do Galo
                    Futebol Americano (desde 2019)
                  </li>
                  <li>
                    Sócio e Diretor comercial Rest - Recuperação Acelerada
                    (desde 2020);
                  </li>
                  <li>
                    Sócio proprietário e Responsável técnico Espaço Interação
                    (desde 2021).
                  </li>
                </ul>
                <button onClick={closeModal}>Fechar</button>
              </Modal>
            </div>
          </div>
        </div>
        <div className={styles.pros}>
          <img src="/images/sara.jpg" alt="Sara" />
          <div className={styles.prosDescription}>
            <h1>Sara Lisboa Gomes</h1>
            <p>
              <span>Especialidades</span>: Pilates, Fisioterapia geral
            </p>
          </div>
        </div>
        <div className={styles.pros}>
          <img src="/images/jessica.jpg" alt="Jessica" />
          <div className={styles.prosDescription}>
            <h1>Jéssica Rayne</h1>
            <p>
              <span>Especialidades</span>: Pilates, Fisioterapia geral
            </p>
          </div>
        </div>
        <div className={styles.pros}>
          <img src="/images/sabrina.jpg" alt="Sabrina" />
          <div className={styles.prosDescription}>
            <h1>Sabrina Oliveira Melo</h1>
            <p>
              <span>Especialidades</span>: Fisoterapia esportiva, Treinamento Funcional
            </p>
            <ul>
              <li>Bacharel Fisioterapia (UFMG) - 2017</li>
              <li>Diploma FIFA de Medicina Esportiva</li>
              <li>Experiência com Pilates, liberação miofascial manual e
                instrumental e ventosaterapia.
              </li>
            </ul>
            <div>
              <button className={styles.openModal} onClick={openModal2}>Ver mais ...</button>
              <Modal
                isOpen={modal2IsOpen}
                onRequestClose={closeModal2}
                className={styles.modalContainer}
                overlayClassName={styles.Overlay}
              >
                <ul>
                  <li>
                    Atua no Departamento de Saúde e Performance da equipe
                    Galo Futebol Americano
                  </li>
                </ul>
                <button onClick={closeModal2}>Fechar</button>
              </Modal>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


