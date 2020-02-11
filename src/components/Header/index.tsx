import React from 'react'
import './styles.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
const Loading: React.FC = () => {
    return (
        <div className='header'>
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand href='#home'>
                    <img
                        src='/assets/images/logo.png'
                        width='auto'
                        height='30'
                        className='d-inline-block align-top'
                        alt='React Bootstrap logo'
                    />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='#home'>Inicio</Nav.Link>
                        <Nav.Link href='#link'>Propuesta</Nav.Link>
                        <Nav.Link href='#link'>Principios</Nav.Link>
                        <Nav.Link href='#link'>Encuesta</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Navbar>
        </div>
    )
}

export default Loading
