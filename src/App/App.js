import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Components/Header/Header';
import TaskList from '../Components/TaskList/TaskList';
import AddTask from '../Components/AddTask/AddTask';
import { Box, Container, Fab, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Add } from '@mui/icons-material';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { ModalDialog } from '@mui/joy';
const App = () => {
    const [category, setCategory] = useState('all');
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [shownData, setShownData] = useState([]);
    const [value, setValue] = React.useState('all');

    const handleChange = (e, newValue) => {
        setCategory(newValue);
        setValue(newValue);
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

    return (
        <Fragment>
            <Container maxWidth={'md'}>
                <Header></Header>
                <Box sx={{ width: '100%' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} centered>
                                <Tab label="All" value="all" />
                                <Tab label="Done" value="done" />
                                <Tab label="Pending" value="not yet" />
                            </TabList>
                        </Box>
                        <TabPanel value={category}>
                            <TaskList data={shownData} handleChecked={handleChecked} handleDelete={handleDelete} />
                        </TabPanel>
                    </TabContext>
                    <Fab color="primary" aria-label="add">
                        <Add onClick={() => setShow(true)} />
                    </Fab>
                </Box>
            </Container>
            <Modal open={show}
                onClose={() => setShow(false)} >
                <ModalDialog size="lg">
                    <ModalClose />
                    <AddTask AddTaskHandler={addTaskHandler} closeModel={() => setShow(false)} />
                </ModalDialog>
            </Modal>
        </Fragment >
    )
}

export default App
