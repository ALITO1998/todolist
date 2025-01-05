import { ModalClose, ModalDialog } from '@mui/joy'
import { Modal } from '@mui/material'
import React from 'react'
import AddTask from './AddTask/AddTask'

const AddTaskModal = ({ showModal, closeModal, addTaskHandler }) => {

    return (
        <Modal open={showModal}
            onClose={closeModal} >
            <ModalDialog size="lg">
                <ModalClose />
                <AddTask addTaskHandler={addTaskHandler} cancel={closeModal} />
            </ModalDialog>
        </Modal>
    )
}

export default AddTaskModal
