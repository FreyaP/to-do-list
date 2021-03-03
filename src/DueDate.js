import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import './DueDate.css';

export default function DueDate() {
    const [dueDate, setDueDate] = useState(new Date());
    return (
        <DatePicker className="date" selected={dueDate} onChange={date => setDueDate(date)}/>
    )
}