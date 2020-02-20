import React, { useState, useEffect } from 'react'
import './styles.css'
import { Modal, Button } from 'react-bootstrap'

type ModalProps = {
    show: boolean
    onClose?: any
}

const PollModal: React.FC<ModalProps> = ({ show = false, onClose = () => {} }) => {
    const [ visible, setVisible ] = useState(false)

    useEffect(
        () => {
            setVisible(show)
        },
        [ show ]
    )

    const sendPoll = () => {
        console.log('send poll')
        handleClose()
    }

    const handleClose = () => {
        setVisible(false)
        onClose()
    }

    return (
        <div className='loading'>
            <Modal show={visible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ENCUESTA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        src='https://docs.google.com/forms/d/e/1FAIpQLSdEpJTMdsk3SVezjF34lPel4ArDqDGV6Ct1Yjome1Zw2A4Z0w/viewform?embedded=true'
                        width='auto'
                        height='574'
                    >
                        Cargando…
                    </iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='link' onClick={handleClose}>
                        CERRAR
                    </Button>
                    <Button variant='danger' onClick={sendPoll}>
                        ENVIAR
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PollModal
