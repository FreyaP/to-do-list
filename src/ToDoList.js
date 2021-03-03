import { useState } from 'react';
import './ToDoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddTaskForm from './AddTaskForm';

export default function ToDoList() {
    const [tasks, setTasks] = useState([{
        text: 'This is an example task',
        isCompleted: false,
        dueDate: "This is your due date"
    },{
        text: 'Another Example',
        isCompleted: false,
        dueDate: "Due Date"
    }, {
        text: 'Last example',
        isCompleted: false,
        dueDate: "Due date today by default"
    }]);

    const addTask = (text, dueDate) => { 
        console.log(`I'm going to add ${text} here on this ${dueDate}! `)
         var addedTaskList = [...tasks, {
        text: text,
        isCompleted: false,
        dueDate: dueDate
      }];
         setTasks(addedTaskList);   
  };

    const removeTask = index => {
    const removedTaskList = [...tasks];
    removedTaskList.splice(index, 1);

    setTasks(removedTaskList);
}

    const toggleTask = index => {
        const toggledTasks = [...tasks];
        toggledTasks[index].isCompleted = !toggledTasks[index].isCompleted;
        setTasks(toggledTasks);
    }

    return (
        <div className="todo-list">
            <h2>You have <span className={tasks.length > 5 ? "task-number-high" : "task-number-low"}>{tasks.length}</span>  tasks on your list!</h2>
      {tasks.map((task, index) => (
        <div className="todo">
          <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
          {task.text}
          </span>
          <span className="due-date">{task.dueDate}</span>
          <button onClick={() => removeTask(index)}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
      ))}
      <AddTaskForm addTask={addTask}/>
      </div>
    );
  }
  
