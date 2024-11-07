import React from 'react'
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const AddTask = ({ AddTaskHandler, closeModel }) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const id = Date.now();
        AddTaskHandler({ id, task });
        setTask('');
        closeModel();
    }

    const [task, setTask] = React.useState('');

    const inputHandler = (e) => {
        const Value = e.target.value;
        setTask(Value);
    }

    return (<Form onSubmit={submitHandler} on>
        <Form.Controller>
            <label htmlFor="task">Task</label>
            <input type='text' id="task" value={task || ""} onChange={inputHandler} placeholder='Enter Your Task' />
        </Form.Controller>

        <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <Button style={{ marginRight: '10px' }} type="submit"> Save </Button>
        </div>
    </Form>);
}

export default AddTask