import React from 'react'
import styles from './Politicas.module.css'

const Politicas = () => {
  return (
    <div className={styles['content-area']}>
        <div className={styles['policies-screen-container']}>
            <h2 className={styles['title']}>
                Políticas de contratación, garantía, uso y devolución
            </h2>
            <h3 className={styles['subtitle']}>Para alquilar equipos de ski, snowboard, accesorios y ropa de nieve, los clientes deberán cumplir lo siguente:</h3>
            <div className={styles['policies-container']}>

                <div className={styles['policy']}>
                    <h4 className={styles['policy-title']}>Política de contratación</h4>
                    <div className={styles['policy-content']}>
                        <p>
                            En CumbreSki nos esforzamos por ofrecer un proceso de contratación sencillo y eficiente para garantizar una experiencia positiva a nuestros clientes. </p>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            Para alquilar equipos de ski, snowboard, accesorios y ropa de nieve, los clientes deberán:
                        </p>
                        <ol className={styles['requirements-list']}>
                            <strong>
                                <li>Presentar una identificación válida.</li>
                                <li>Proporcionar información de contacto actualizada.</li>
                                <li>Firmar un acuerdo de alquiler que incluya los términos y condiciones.</li>
                            </strong>
                        </ol>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            Estamos comprometidos a proporcionar equipos de alta calidad y a mantenerlos en condiciones óptimas. Nuestro personal capacitado estará disponible para brindar asistencia y asegurar una experiencia segura y placentera en la montaña.
                        </p>
                    </div>
                </div>

                <div className={styles['policy']}>
                    <h4 className={styles['policy-title']}>Política de devolución</h4>
                    <div className={styles['policy-content']}>
                        <p>
                            Queremos asegurarnos de que la devolución de los equipos sea igual de fácil que su contratación. 
                        </p>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            Los clientes deben devolver los equipos en la <strong>fecha acordada</strong> y en las <strong>mismas condiciones</strong> en que se entregaron. Cualquier daño o pérdida se evaluará según nuestros términos y condiciones. Ofrecemos un <strong>período de gracia de 3 días</strong> para devoluciones tardías, con tarifas adicionales por día. 
                        </p>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            Agradecemos la devolución puntual para garantizar la disponibilidad de equipos para otros clientes.
                        </p>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            Estas políticas están diseñadas para garantizar una experiencia de alquiler sin problemas y para mantener la calidad de nuestros servicios.
                        </p>
                    </div>
                </div>

                <div className={styles['policy']}>
                    <h4 className={styles['policy-title']}>Política de uso de producto</h4>
                    <div className={styles['policy-content']}>
                        <p>
                            La seguridad y el disfrute de nuestros clientes son nuestra máxima prioridad. 
                        </p>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            Al utilizar nuestros equipos, los clientes deben:
                        </p>
                        <ol className={styles['requirements-list']}>
                            <strong>
                                <li>Utilizar el equipo solo para su propósito previsto.</li>
                                <li>Seguir todas las normas de seguridad y prácticas recomendadas.</li>
                                <li>Informar cualquier problema o mal funcionamiento de los equipos de inmediato.</li>
                            </strong>
                        </ol>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            Es fundamental que los clientes utilicen el equipo de manera responsable para garantizar su propia seguridad y la de los demás en la montaña.
                        </p>
                    </div>
                </div>

                <div className={styles['policy']}>
                    <h4 className={styles['policy-title']}>Política de garantía</h4>
                    <div className={styles['policy-content']}>
                        <p>
                            En CumbreSki, respaldamos la calidad de nuestros equipos. 
                        </p>
                        <div className={styles['paragraph-jump']}></div>

                        <strong>
                            Ofrecemos una garantía limitada que cubre defectos de fabricación.
                        </strong>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            Si un cliente encuentra algún problema durante el período de alquiler, nos comprometemos a reparar o reemplazar el equipo de manera oportuna y sin costo adicional.
                        </p>
                        <div className={styles['paragraph-jump']}></div>

                        <p>
                            <strong>La garantía no cubre daños causados por un uso indebido o negligencia. </strong>Cualquier problema debe ser informado de inmediato para que podamos abordarlo de manera eficiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Politicas