import { useState } from 'react';
import './AddTaskForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"


export default function AddTaskForm({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addTask(value)
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Enter a new task..." onChange={e => setValue(e.target.value)}/>
            <button type="submit" ><FontAwesomeIcon icon={faPlus} /></button>
        </form>
    )
}