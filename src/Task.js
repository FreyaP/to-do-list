import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';
import './Task.css';
import FormatDate from './FormatDate';
import AddTaskForm from './AddTaskForm';

export default function Task({ tasks , toggleTask, editTask, removeTask, addTask }) {
const [isEditing, setEditing] = useState(false);
const [newText, setNewText] = useState('');
const [taskId, setTaskId] = useState('');
const [newDate, setNewDate] = useState(FormatDate);

const handleCancel = (e) => {
    setEditing(false);
    setNewText("");
}
const handleSubmit = (e) => {
    e.preventDefault();
    newText && editTask(taskId, newText, newDate);
    setNewText("");
    setEditing(false);
}
const handleEdit = (id) => {
setTaskId(id);
setEditing(true);
}
const editing = (
    <form className='editing' onSubmit={handleSubmit}>
        <input className='new-name' type='text' value={newText} placeholder="Enter new name" onChange={e => setNewText(e.target.value)}/>
        <input className="newDate" type='date' value={newDate} onChange={e => setNewDate(e.target.value)}/>
        <button className='update' type="submit"><FontAwesomeIcon icon={faCheck}/></button>
        <button className='cancel' onClick={handleCancel}><FontAwesomeIcon icon={faTimes}/></button>
    </form>
)
const viewing = (
<div>
{tasks.map((task, index) => (
    <div className="todo">
    <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
    {task.text}
    </span>
    <span className="due-date">{task.dueDate}</span>
    <button onClick={() => handleEdit(task.id)}><FontAwesomeIcon icon={faEdit}/></button>
    <button onClick={() => removeTask(index)}><FontAwesomeIcon icon={faTrash}/></button>
    </div>
))}
<AddTaskForm addTask={addTask}/>
</div>
)

return <div>{isEditing ? editing : viewing}</div>
}