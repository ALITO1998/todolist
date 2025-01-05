import React, { Fragment, useEffect, useState } from 'react'
import NavigationStatus from './NavigationStatus/NavigationStatus'
import AddTaskBtn from './AddTaskBtn/AddTaskBtn'
import { Box } from '@mui/material'
import TaskList from './TaskList/TaskList'
//import dayjs from 'dayjs'
import AddTaskModal from '../AddTaskModal/AddTaskModal'

const Content = () => {
    const [status, setStatus] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const [shownData, setShownData] = useState([]);



    const handleChangeStatus = (e, newValue) => {
        setStatus(newValue);
    };



    useEffect(() => {
        if (status === "all") {
            setShownData(data);
        } else {
            setShownData(data.filter((ele) => ele.status === status));
        }

    }, [status, data]);

    const handleChecked = (id) => {
        setData(data.map(item => item.id === id ? { ...item, status: item.status === 'not yet' ? 'done' : 'not yet' } : item))
    }

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
        setShownData(shownData.filter(item => item.id !== id))
    }

    const addTaskHandler = ({ task }) => {
        setData([...data, { status: task.status, title: task.title, id: task.id, expectedDoneDate: task.expectedDoneDate }]);
    }

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }


    return (
        <Fragment>
            <Box sx={{ width: '100%' }}>
                <NavigationStatus status={status} handleChangeStatus={handleChangeStatus} />

                <TaskList data={shownData} handleChecked={handleChecked} handleDelete={handleDelete} />

                <AddTaskBtn openModal={openModal} />
            </Box>
            <AddTaskModal
                showModal={showModal}
                closeModal={closeModal}
                addTaskHandler={addTaskHandler}
            />
        </Fragment>
    )
}

export default Content
