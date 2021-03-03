import { useState } from 'react';
import './AddTaskForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import './DueDate.css';
import FormatDate from './FormatDate';




export default function AddTaskForm({ addTask }) {
    const [value, setValue] = useState("");   
    const [dueDate, setDueDate] = useState(FormatDate);
    
    const handleSubmit = e => {
        e.preventDefault();
        value && addTask(value, dueDate)
        setValue('');
        setDueDate(FormatDate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="text-input" type="text" value={value} placeholder="Enter a new task..." onChange={e => setValue(e.target.value)}/>
            <input type='date' value={dueDate} onChange={e => setDueDate(e.target.value)}/>
            <button type="submit" ><FontAwesomeIcon icon={faPlus} /></button>
        </form>
    )
}
/*
DatePicker that I could not get to work...
<DatePicker 
                className="date" 
                selected={dueDate} 
                onChange= {date => setDueDate(date)}
                />
                */