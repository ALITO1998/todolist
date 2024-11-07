import React from 'react'
import styles from './TaskCard.module.css'

const TaskCard = ({ item, handleDelete, handleChecked }) => {
    // Render the task card with checkbox, task description, and delete button
    return <tr key={item.id}>
        <td className={styles.tBtn}><input type="checkbox" defaultChecked={item.status === 'not yet' ? false : true} onClick={() => { return handleChecked(item.id) }} /></td>
        <td>{item.task}</td>
        <td className={styles.tBtn}><button className={styles.dltBtn} onClick={() => handleDelete(item.id)}>X</button></td>
    </tr>
}

export default TaskCard
