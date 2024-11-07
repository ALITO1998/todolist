import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import styles from './App.module.css'
import TaskList from '../Components/TaskList/TaskList';
import Modal from '../Components/Modal/Modal';
import AddTask from '../Components/AddTask/AddTask';

const App = () => {
    const [category, setCategory] = useState('all');
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [shownData, setShownData] = useState([]);


    useEffect(() => {
        if (category === "all") {
            document.getElementById('allCategory').style.backgroundColor = 'rgb(0, 0, 200)';
            document.getElementById('doneCategory').style.backgroundColor = 'rgb(160, 160, 255)';
            document.getElementById('notYetCategory').style.backgroundColor = 'rgb(160, 160, 255)';
            setShownData(data);
        } else if (category === "done") {
            document.getElementById('allCategory').style.backgroundColor = 'rgb(160, 160, 255)';
            document.getElementById('doneCategory').style.backgroundColor = 'rgb(0, 0, 200)';
            document.getElementById('notYetCategory').style.backgroundColor = 'rgb(160, 160, 255)';
            setShownData(data.filter((ele) => ele.status === "done"));
        } else {
            document.getElementById('allCategory').style.backgroundColor = 'rgb(160, 160, 255)';
            document.getElementById('doneCategory').style.backgroundColor = 'rgb(160, 160, 255)';
            document.getElementById('notYetCategory').style.backgroundColor = 'rgb(0, 0, 200)';
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
            <div className={styles.allAppContent} >
                <Header></Header>
                {/* Your app content goes here */}
                <div className={styles.categoryDiv}>
                    <div className={styles.categoryList}>
                        <button id='allCategory' className={styles.categoryItem} onClick={() => setCategory('all')} >All</button>
                        <button id='doneCategory' className={styles.categoryItem} onClick={() => setCategory('done')} >Done</button>
                        <button id='notYetCategory' className={styles.categoryItem} onClick={() => setCategory('not yet')} >Pending</button>
                    </div>
                </div>

                <div className={styles.taskList}>
                    {/* Your task list goes here */}
                    <table className={styles.taskTable}>
                        <thead className={styles.taskTableHeader}>
                            <tr>
                                <th>Status</th>

                                <th className={styles.taskCells}>Task</th>

                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TaskList data={shownData} handleChecked={handleChecked} handleDelete={handleDelete} />
                        </tbody>
                    </table>
                    <button className={styles.addBtn} onClick={() => setShow(true)}>+</button>
                </div>
                <Footer></Footer>
            </div>
            <Modal show={show} closeModel={() => setShow(false)}>
                <AddTask AddTaskHandler={addTaskHandler} closeModel={() => setShow(false)} />
            </Modal>
        </Fragment >
    )
}

export default App
