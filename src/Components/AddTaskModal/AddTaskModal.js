import { ModalClose, ModalDialog } from '@mui/joy'
import { Modal } from '@mui/material'
import React from 'react'
import AddTask from './AddTask/AddTask'

const AddTaskModal = ({ showModal, hideModal, addTaskHandler }) => {
    return (
        <Modal open={showModal}
            onClose={hideModal} >
            <ModalDialog size="lg">
                <ModalClose />
                <AddTask AddTaskHandler={addTaskHandler} closeModel={hideModal} />
            </ModalDialog>
        </Modal>
    )
}

export default AddTaskModal
