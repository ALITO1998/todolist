import { ModalClose, ModalDialog } from '@mui/joy'
import { Modal } from '@mui/material'
import React from 'react'
import AddTask from './AddTask/AddTask'

const AddTaskModal = ({ showModal, hideModal, submitHandler, alertEmpty, inputTaskHandler, task }) => {

    return (
        <Modal open={showModal}
            onClose={hideModal} >
            <ModalDialog size="lg">
                <ModalClose />
                <AddTask submitHandler={submitHandler} alertEmpty={alertEmpty} inputTaskHandler={inputTaskHandler} task={task} />
            </ModalDialog>
        </Modal>
    )
}

export default AddTaskModal
