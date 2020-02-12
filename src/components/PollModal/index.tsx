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
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={sendPoll}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PollModal
