import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Components/Header/Header';
import Content from '../Components/Content/Content';
import AddTaskModal from '../Components/AddTaskModal/AddTaskModal';
import { Container } from '@mui/material';
const App = () => {
    const [category, setCategory] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const [shownData, setShownData] = useState([]);
    const [alertEmpty, setAlertEmpty] = useState(false);
    const [task, setTask] = useState('');

    const handleChangeCategory = (e, newValue) => {
        setCategory(newValue);
    };



    useEffect(() => {
        if (category === "all") {
            setShownData(data);
        } else if (category === "done") {
            setShownData(data.filter((ele) => ele.status === "done"));
        } else {
            setShownData(data.filter((ele) => ele.status === "not yet"));
        }

    }, [category, data]);
    //Handle Check and Delete actions on tasks
    const handleChecked = (id) => {
        setData(data.map(item => item.id === id ? { ...item, status: item.status === 'not yet' ? 'done' : 'not yet' } : item))
    }

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
        setShownData(shownData.filter(item => item.id !== id))
    }

    //Add new Task to the array of Tasks from Model
    const addTaskHandler = ({ id, task }) => {
        setData([...data, { status: 'not yet', task: task, id: id }]);
    }

    const showModalTrue = () => {
        setShowModal(true);
    }

    const hideModal = () => {
        setShowModal(false);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        if (task === '') {
            setAlertEmpty(true);
        } else {
            const id = Date.now();
            addTaskHandler({ id, task });
            setTask('');
            setShowModal(false);
        }
    }

    const inputTaskHandler = (e) => {
        setAlertEmpty(false);
        setTask(e.target.value);
    }

    return (
        <Fragment>
            <Container maxWidth={'md'}>

                <Header></Header>

                <Content
                    category={category}
                    handleChangeCategory={handleChangeCategory}
                    shownData={shownData}
                    handleChecked={handleChecked}
                    handleDelete={handleDelete}
                    showModalTrue={showModalTrue} />

            </Container>

            <AddTaskModal
                showModal={showModal}
                hideModal={hideModal}
                submitHandler={submitHandler}
                alertEmpty={alertEmpty}
                inputTaskHandler={inputTaskHandler}
                task={task}
            />

        </Fragment >
    )
}

export default App
