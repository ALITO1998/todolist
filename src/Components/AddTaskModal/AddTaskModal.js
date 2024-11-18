import { ModalClose, ModalDialog } from '@mui/joy'
import { Modal } from '@mui/material'
import React from 'react'
import AddTask from './AddTask/AddTask'

const AddTaskModal = ({ showModal, hideModal, addTaskHandler, submitHandler, alertEmpty, inputHandler }) => {
    return (
        <Modal open={showModal}
            onClose={hideModal} >
            <ModalDialog size="lg">
                <ModalClose />
                <AddTask AddTaskHandler={addTaskHandler} submitHandler={submitHandler} alertEmpty={alertEmpty} inputHandler={inputHandler} />
            </ModalDialog>
        </Modal>
    )
}

export default AddTaskModal
