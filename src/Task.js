import { useState } from 'react';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddTaskForm from './AddTaskForm';

export default function Task() {
    const [tasks, setTasks] = useState([{
        text: 'Walk the Dog',
        isCompleted: false
    },{
        text: 'Buy groceries',
        isCompleted: false
    }, {
        text: 'Water the Plants',
        isCompleted: false
    }]);

    const addTask = text => { 
        console.log(`I'm going to add ${text} here! `)
         var addedTaskList = [...tasks, {
        text: text,
        isCompleted: false
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
      {tasks.map((task, index) => (
        <div className="todo">
          <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
      ))}
      <AddTaskForm addTask={addTask}/>
      </div>
    );
  }
  
