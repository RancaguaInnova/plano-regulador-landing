import React from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
const Home: React.FC = () => {
    return (
        <div>
            <section>
                <h3 className='text-center font-weight-bold'>MOTIVACIÓN</h3>
                <div className='row p-4'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src='/assets/images/estado.jpg' />
                        <p className='font-italic'>Fotografía Paseo Estado de 2009 (Fuente: Fotos Rancagua antiguo.)</p>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='text-center'>
                            Esta modificación del plano regulador está motivada por lo siguientes principios
                        </h4>
                        <div className='text-left'>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>1. Relevar la importancia del Damero Fundacional.</li>
                                <li className='list-group-item'>
                                    2. Poner en Valor características Patrimoniales del Eje Estado.
                                </li>
                                <li className='list-group-item'>
                                    3. Promover el desarrollo armónico del Centro Histórico y darle coherencia como
                                    valorización patrimonial.
                                </li>
                                <li className='list-group-item'>
                                    4. Definición de la “Nueva Escala” del Centro Histórico, la cual debe ir en directa
                                    puesta en valor de la Imagen Patrimonial del “Eje Estado.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <h3 className='text-center font-weight-bold'>OBJETIVO</h3>
                <div className='row p-4'>
                    <div className='col-md-6'>
                        <p className='text-justify'>
                            El objetivo principal que tiene la definición de la <b>"Imagen Objetivo"</b> es consolidar y
                            proteger la Morfología Arquitectónica Patrimonial que tiene actualmente el "Eje Estado", que
                            deberá tener como resultado contrarrestar los indicadores de despoblamiento, abandono,
                            deterioro de los Inmuebles y Espacios Públicos del "Eje Histórico". Con la aplicación del
                            nuevo instrumento de planificación territorial se debe rehabilitar la desarticulación entre
                            lo preexistente y lo nuevo, construyendo una Imagen Armónica en el nuevo “Eje Estado”.
                        </p>
                    </div>

                    <div className='col-md-6'>
                        <iframe
                            width='100%'
                            height='315'
                            src='https://www.youtube.com/embed/_LgqIdIfufI'
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        />
                        <p className='text-justify'>
                            Esta Modificación al Plan Regulador Comunal de Rancagua debe garantizar el resguardo de los
                            Valores Patrimoniales desde la conservación y la rehabilitación, la definición de la nueva
                            escala del “Eje Estado”, la integración de lo nuevo y lo preexistente.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
