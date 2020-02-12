import React from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
const Home: React.FC = () => {
    return (
        <section>
            <h3 className='text-center font-weight-bold'>PROPUESTA</h3>
            <div className='row p-4'>
                <div className='col-md-6 col-xs-12'>
                    <h4 className='text-center'> ÁREA DE ESTUDIO PROPUESTA PARA DECLARATORIA DE ZCH "EJE ESTADO"</h4>
                    <p className='text-justify'>
                        Imagen satelital del estado actual, capturada de Google Earth definiendo la Área de Estudio de
                        esta declaratoria.
                    </p>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <img className='img-fluid' src='/assets/images/plan_estado.jpg' />
                    <p className='font-italic alt-img'>
                        Fuente: Elaboración propia, Departamento de Patrimonio y Turismo, SECPLAC.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home
