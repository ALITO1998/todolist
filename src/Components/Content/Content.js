import React, { Fragment, useEffect, useState } from 'react'
import NavigationStatus from './NavigationStatus/NavigationStatus'
import AddTaskBtn from './AddTaskBtn/AddTaskBtn'
import { Box } from '@mui/material'
import TaskList from './TaskList/TaskList'
//import dayjs from 'dayjs'
import AddTaskModal from '../AddTaskModal/AddTaskModal'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, addTask, deleteTask, updateTask } from '../../store/taskSlice'
const Content = () => {
    const [status, setStatus] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [shownData, setShownData] = useState([]);
    const { tasks } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();


    const handleChangeStatus = (e, newValue) => {
        setStatus(newValue);
    };

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])


    useEffect(() => {
        if (status === "all") {
            setShownData(tasks);
        } else {
            setShownData(tasks.filter((ele) => ele.task.status === status));
        }

    }, [dispatch, status, tasks]);



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

                <TaskList
                    data={shownData}
                    handleDelete={(id) => { dispatch(deleteTask(id)) }}
                    handleChecked={(item) => {
                        dispatch(updateTask({ id: item.id, task: { ...item.task, status: item.task.status === "not yet" ? "done" : "not yet" } }))
                    }}
                />

                <AddTaskBtn openModal={openModal} />
            </Box>
            <AddTaskModal
                showModal={showModal}
                closeModal={closeModal}
                addTaskHandler={(task) => { dispatch(addTask(task)) }}
            />
        </Fragment>
    )
}

export default Content
