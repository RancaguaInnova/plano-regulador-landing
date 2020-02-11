import React from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
const Home: React.FC = () => {
    return (
        <section id='inicio'>
            <p className='text-justify'>
                En cumplimiento de la Normativa vigente, el Alcalde de Rancagua, Eduardo Soto Romero presenta el
                diagnóstico, fundamentos técnicos, objetivos y demás antecedentes planimétricos, de la "Imagen Objetivo"
                que persigue la Modificación al Plan Regulador Comunal de Rancagua N° 22, destinado a: la{' '}
                <b>
                    "Declaración de Zona ZCH de Conservación Histórica del Eje Estado y Zona de Amortiguación, y
                    Declaración de un total de 22 ICH Inmuebles de Conservación Histórica"
                </b>.
            </p>
        </section>
    )
}

export default Home
