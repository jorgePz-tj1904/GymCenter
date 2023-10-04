'use client'
import React, { useState } from "react"
import styles from './page.module.css'
import { valores } from './data.js'
import { Button, Modal, InputNumber, Slider } from 'antd';

const Page = () => {
  const [peso, setPeso] = useState(0);
  const [porcentajes, setPorcentajes] = useState(valores);
  const [save, setSave] = useState(porcentajes);


  const formatter = (value) => `${value}%`;


  const handlePorcentajeChange = (entrenamiento, serie, valor) => {
    console.log(entrenamiento, serie);
    const nuevosPorcentajes = { ...porcentajes };

    nuevosPorcentajes[entrenamiento][serie] = valor;

    setPorcentajes(nuevosPorcentajes);
  };

  const modalHandler = (modal, visible) => {
    console.log(modal, visible);
    // Crear una copia del estado modales
    const nuevosModales = { ...porcentajes.modales };
    // Actualizar el valor del modal específico
    nuevosModales[modal] = visible;
    console.log(nuevosModales);
    // Actualizar el estado con los nuevos modales
    setPorcentajes({ ...porcentajes, modales: nuevosModales });
  };



  return (
    <div className={styles.conteiner} >

      <div className={styles.inicio}>
        <h1 >Programa de entrenamiento.</h1>
        <p >Programa de entrenamiento básico orientado a la ganancia de fuerza</p>
        <h2 >Ingrese su 1 RM</h2>

        <InputNumber size="large" min={1} max={100000} defaultValue={1} onChange={(value) => typeof value === 'number' ? setPeso(value) : alert('tiene que ser numero pa')} />

      </div>

      {/* ENTRENAMIENTO 1 */}

      <div className={styles.entrenos}>
        <h2 >Entrenamiento 1</h2>

        <ol >
          <li >Serie: {parseInt(porcentajes.entreno1.serie1 * peso / 100)}kg a 12 reps. ({porcentajes.entreno1.serie1}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno1.serie2 * peso / 100)}kg a 12 reps. ({porcentajes.entreno1.serie2} de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno1.serie3 * peso / 100)}kg a 12 reps. ({porcentajes.entreno1.serie3}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno1.serie4 * peso / 100)}kg a 10 reps. ({porcentajes.entreno1.serie4}% de tu 1RM)</li>
          <li>Serie: {parseInt(porcentajes.entreno1.serie5 * peso / 100)}kg a 10 reps. ({porcentajes.entreno1.serie5}% de tu 1RM)</li>
        </ol>

        <Button onClick={() => { setSave({ ...porcentajes }); modalHandler('modal1', true) }}>editar</Button>



        <Modal
          open={porcentajes.modales.modal1}
          onCancel={() => { modalHandler('modal1', false); setPorcentajes({ ...save }) }}
          onOk={() => modalHandler('modal1', false)}
        >

          <h4>Edita los porcentajes</h4>

          <ol>
            <li >Serie: {parseInt(porcentajes.entreno1.serie1 * peso / 100)}kg a 12 reps. ({porcentajes.entreno1.serie1}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno1', 'serie1', value)} />

            <li >Serie: {parseInt(porcentajes.entreno1.serie2 * peso / 100)}kg a 12 reps. ({porcentajes.entreno1.serie2}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno1', 'serie2', value)} />

            <li >Serie: {parseInt(porcentajes.entreno1.serie3 * peso / 100)}kg a 12 reps. ({porcentajes.entreno1.serie3}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno1', 'serie3', value)} />

            <li >Serie: {parseInt(porcentajes.entreno1.serie4 * peso / 100)}kg a 12 reps. ({porcentajes.entreno1.serie4}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno1', 'serie4', value)} />

            <li>Serie: {parseInt(porcentajes.entreno1.serie5 * peso / 100)}kg a 12 reps. ({porcentajes.entreno1.serie5}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno1', 'serie5', value)} />
          </ol>

        </Modal>

      </div>

      <div></div>
      {/* ENTRENAMIENTO 2 */}

      <div className={styles.entrenos}>
        <h2>Entrenamiento 2</h2>

        <ol >
          <li >Serie: {parseInt(porcentajes.entreno2.serie1 * peso / 100)}kg a 12 reps. ({porcentajes.entreno2.serie1}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno2.serie2 * peso / 100)}kg a 10 reps. ({porcentajes.entreno2.serie2}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno2.serie3 * peso / 100)}kg a 8 reps. ({porcentajes.entreno2.serie3}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno2.serie4 * peso / 100)}kg a 8 reps. ({porcentajes.entreno2.serie4}% de tu 1RM)</li>
          <li>Serie: {parseInt(porcentajes.entreno2.serie5 * peso / 100)}kg a 8 reps. ({porcentajes.entreno2.serie5}% de tu 1RM)</li>
        </ol>

        <Button onClick={() => { setSave({ ...porcentajes }); modalHandler('modal2', true) }}>editar</Button>



        <Modal
          open={porcentajes.modales.modal2}
          onCancel={() => { modalHandler('modal2', false); setPorcentajes({ ...save }) }}
          onOk={() => modalHandler('modal2', false)}
        >

          <h4>Edita los porcentajes</h4>

          <ol>
            <li >Serie: {parseInt(porcentajes.entreno2.serie1 * peso / 100)}kg a 12 reps. ({porcentajes.entreno2.serie1}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno2', 'serie1', value)} />

            <li >Serie: {parseInt(porcentajes.entreno2.serie2 * peso / 100)}kg a 12 reps. ({porcentajes.entreno2.serie2}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno2', 'serie2', value)} />

            <li >Serie: {parseInt(porcentajes.entreno2.serie3 * peso / 100)}kg a 12 reps. ({porcentajes.entreno2.serie3}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno2', 'serie3', value)} />

            <li >Serie: {parseInt(porcentajes.entreno2.serie4 * peso / 100)}kg a 12 reps. ({porcentajes.entreno2.serie4}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno2', 'serie4', value)} />

            <li>Serie: {parseInt(porcentajes.entreno2.serie5 * peso / 100)}kg a 12 reps. ({porcentajes.entreno2.serie5}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno2', 'serie5', value)} />
          </ol>

        </Modal>


      </div>

      {/* ENTRENAMIENTO 3 */}

      <div className={styles.entrenos}>
        <h2>Entrenamiento 3</h2>

        <ol >
          <li >Serie: {parseInt(porcentajes.entreno3.serie1 * peso / 100)}kg a 10 reps. ({porcentajes.entreno3.serie1}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno3.serie2 * peso / 100)}kg a 8 reps. ({porcentajes.entreno3.serie2}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno3.serie3 * peso / 100)}kg a 6 reps. ({porcentajes.entreno3.serie3}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno3.serie4 * peso / 100)}kg a 6 reps. ({porcentajes.entreno3.serie4}% de tu 1RM)</li>
          <li>Serie: {parseInt(porcentajes.entreno3.serie5 * peso / 100)}kg a 6 reps. ({porcentajes.entreno3.serie5}% de tu 1RM)</li>
        </ol>

        <Button onClick={() => { setSave({ ...porcentajes }); modalHandler('6', true); }}>editar</Button>



        <Modal
          open={porcentajes.modales.modal3}
          onCancel={() => { modalHandler('modal3', false); setPorcentajes({ ...save }); }}
          onOk={() => { modalHandler('modal3', false); }}
        >

          <h4>Edita los porcentajes</h4>

          <ol>
            <li >Serie: {parseInt(porcentajes.entreno3.serie1 * peso / 100)}kg a 12 reps. ({porcentajes.entreno3.serie1}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno3', 'serie1', value)} />

            <li >Serie: {parseInt(porcentajes.entreno3.serie2 * peso / 100)}kg a 12 reps. ({porcentajes.entreno3.serie2}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno3', 'serie2', value)} />

            <li >Serie: {parseInt(porcentajes.entreno3.serie3 * peso / 100)}kg a 12 reps. ({porcentajes.entreno3.serie3}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno3', 'serie3', value)} />

            <li >Serie: {parseInt(porcentajes.entreno3.serie4 * peso / 100)}kg a 12 reps. ({porcentajes.entreno3.serie4}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno3', 'serie4', value)} />

            <li>Serie: {parseInt(porcentajes.entreno3.serie5 * peso / 100)}kg a 12 reps. ({porcentajes.entreno3.serie5}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno3', 'serie5', value)} />
          </ol>

        </Modal>

      </div>

      {/* ENTRENAMIENTO 4 */}

      <div className={styles.entrenos}>
        <h2 >Entrenamiento 4</h2>

        <ol >
          <li >Serie: {parseInt(porcentajes.entreno4.serie1 * peso / 100)}kg a 8 reps. ({porcentajes.entreno4.serie1}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno4.serie2 * peso / 100)}kg a 8 reps. ({porcentajes.entreno4.serie2}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno4.serie3 * peso / 100)}kg a 6 reps. ({porcentajes.entreno4.serie3}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno4.serie4 * peso / 100)}kg a 4 reps. ({porcentajes.entreno4.serie4}% de tu 1RM)</li>
          <li>Serie: {parseInt(porcentajes.entreno4.serie5 * peso / 100)}kg a 4 reps. ({porcentajes.entreno4.serie5}% de tu 1RM)</li>
        </ol>


        <Button onClick={() => { setSave({ ...porcentajes }); modalHandler('modal4', true) }}>editar</Button>



        <Modal
          open={porcentajes.modales.modal4}
          onCancel={() => { modalHandler('modal4', false); setPorcentajes({ ...save }) }}
          onOk={() => modalHandler('modal4', false)}
        >

          <h4>Edita los porcentajes</h4>

          <ol>
            <li >Serie: {parseInt(porcentajes.entreno4.serie1 * peso / 100)}kg a 12 reps. ({porcentajes.entreno4.serie1}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno4', 'serie1', value)} />

            <li >Serie: {parseInt(porcentajes.entreno4.serie2 * peso / 100)}kg a 12 reps. ({porcentajes.entreno4.serie2}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno4', 'serie2', value)} />

            <li >Serie: {parseInt(porcentajes.entreno4.serie3 * peso / 100)}kg a 12 reps. ({porcentajes.entreno4.serie3}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno4', 'serie3', value)} />

            <li >Serie: {parseInt(porcentajes.entreno4.serie4 * peso / 100)}kg a 12 reps. ({porcentajes.entreno4.serie4}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno4', 'serie4', value)} />

            <li>Serie: {parseInt(porcentajes.entreno4.serie5 * peso / 100)}kg a 12 reps. ({porcentajes.entreno4.serie5}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno4', 'serie5', value)} />
          </ol>

        </Modal>

      </div>
      {/* ENTRENAMIENTO 5 */}

      <div className={styles.entrenos}>
        <h2>Entrenamiento 5</h2>

        <ol >
          <li >Serie: {parseInt(porcentajes.entreno5.serie1 * peso / 100)}kg a 8 reps. ({porcentajes.entreno5.serie1}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno5.serie2 * peso / 100)}kg a 6 reps. ({porcentajes.entreno5.serie2}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno5.serie3 * peso / 100)}kg a 4 reps. ({porcentajes.entreno5.serie3}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno5.serie4 * peso / 100)}kg a 2 reps. ({porcentajes.entreno5.serie4}% de tu 1RM)</li>
          <li>Serie: {parseInt(porcentajes.entreno5.serie5 * peso / 100)}kg a 12 reps. ({porcentajes.entreno5.serie5}% de 2 1RM)</li>
        </ol>


        <Button onClick={() => { setSave({ ...porcentajes }); modalHandler('modal5', true) }}>editar</Button>



        <Modal
          open={porcentajes.modales.modal5}
          onCancel={() => { modalHandler('modal5', false); setPorcentajes({ ...save }) }}
          onOk={() => modalHandler('modal5', false)}
        >

          <h4>Edita los porcentajes</h4>

          <ol>
            <li >Serie: {parseInt(porcentajes.entreno5.serie1 * peso / 100)}kg a 12 reps. ({porcentajes.entreno5.serie1}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno5', 'serie1', value)} />

            <li >Serie: {parseInt(porcentajes.entreno5.serie2 * peso / 100)}kg a 12 reps. ({porcentajes.entreno5.serie2}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno5', 'serie2', value)} />

            <li >Serie: {parseInt(porcentajes.entreno5.serie3 * peso / 100)}kg a 12 reps. ({porcentajes.entreno5.serie3}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno5', 'serie3', value)} />

            <li >Serie: {parseInt(porcentajes.entreno5.serie4 * peso / 100)}kg a 12 reps. ({porcentajes.entreno5.serie4}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno5', 'serie4', value)} />

            <li>Serie: {parseInt(porcentajes.entreno5.serie5 * peso / 100)}kg a 12 reps. ({porcentajes.entreno5.serie5}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno5', 'serie5', value)} />
          </ol>

        </Modal>

      </div>
      {/* ENTRENAMIENTO 6 */}

      <div className={styles.entrenos}>
        <h2 >Entrenamiento 6 PR DAY!</h2>

        <ol >
          <h3 >Calentar muy bien con bandas y con barra descargada, también puede ser con pesos inferiores al 50%</h3>
          <p >ALTERNATIVA: podes cargar la barra de 20 en 20 con 1 rep por subida. Lo importante es no fatigarse.</p>

          <li>Serie: {peso}kg PR DAY! al fallo con spoter. (100!% de tu 1RM)</li>

          <li >Serie: {parseInt(porcentajes.entreno6.serie2 * peso / 100)}kg a 2 reps. ({porcentajes.entreno6.serie2}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno6.serie3 * peso / 100)}kg a 4 reps. ({porcentajes.entreno6.serie3}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno6.serie4 * peso / 100)}kg a 6 reps. ({porcentajes.entreno6.serie4}% de tu 1RM)</li>
          <li >Serie: {parseInt(porcentajes.entreno6.serie5 * peso / 100)}kg a 10 reps. ({porcentajes.entreno6.serie5}% de tu 1RM)</li>
        </ol>


        <Button onClick={() => { setSave({ ...porcentajes }); modalHandler('modal6', true) }}>editar</Button>



        <Modal
          open={porcentajes.modales.modal6}
          onCancel={() => { modalHandler('modal6', false); setPorcentajes({ ...save }) }}
          onOk={() => modalHandler('modal6', false)}
        >

          <h4>Edita los porcentajes</h4>

          <ol>
            <li >Serie: {parseInt(porcentajes.entreno6.serie2 * peso / 100)}kg a 12 reps. ({porcentajes.entreno6.serie2}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno6', 'serie2', value)} />

            <li >Serie: {parseInt(porcentajes.entreno6.serie3 * peso / 100)}kg a 12 reps. ({porcentajes.entreno6.serie3}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno6', 'serie3', value)} />

            <li >Serie: {parseInt(porcentajes.entreno6.serie4 * peso / 100)}kg a 12 reps. ({porcentajes.entreno6.serie4}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno6', 'serie4', value)} />

            <li>Serie: {parseInt(porcentajes.entreno6.serie5 * peso / 100)}kg a 12 reps. ({porcentajes.entreno6.serie5}% de tu 1RM)</li>
            <Slider tooltip={{ formatter }} step={5} onChange={(value) => handlePorcentajeChange('entreno6', 'serie5', value)} />
          </ol>

        </Modal>
      </div>
    </div>
  )
}

export default Page