import React from 'react'
import './styles.css'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <h4>Dudas y Consultas</h4>
            <p>
                <a href='mailto:contacto@smart.rancagua.cl'>contacto@smart.rancagua.cl</a>
            </p>
            <p>
                <a href='tel:+56911111111'>+56 9 11111111</a>
            </p>
        </footer>
    )
}

export default Footer
