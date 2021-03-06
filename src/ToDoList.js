import { useState } from 'react';
import './ToDoList.css';

import FormatDate from './FormatDate';
import DueToday from './DueToday';
import Task from './Task';


export default function ToDoList() {
    const [tasks, setTasks] = useState([{
      id:  1,  
      text: 'Walk the Dog',
        isCompleted: false,
        dueDate: '2021-02-11'
    },{
      id: 2,  
      text: 'To-Do List Project',
        isCompleted: false,
        dueDate: FormatDate()
    }, {
      id: 3,
        text: 'Add more tasks!',
        isCompleted: false,
        dueDate: FormatDate()
    }]);

    const addTask = (text, dueDate) => { 
         var addedTaskList = [...tasks, {
        id: tasks.length + 1,
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


    const editTask = (id, newText, newDate) => {
      const editedTasks = tasks.map(task => {
        if (id === task.id) {
          return {...task, text: newText, dueDate: newDate}
        } return task;
      });
      setTasks(editedTasks);
    }
/*
const editTask = (index, newText) => {
  const editedTasks = [...tasks];
  editedTasks[index].text = newText;
  setTasks(editedTasks);
}
*/
    const toggleTask = index => {
        const toggledTasks = [...tasks];
        toggledTasks[index].isCompleted = !toggledTasks[index].isCompleted;
        setTasks(toggledTasks);
    }
    let taskWord;
    tasks.length === 1 ? taskWord = 'task' : taskWord = 'tasks';
  
    return (
        <div className="todo-list">
            <h2>You have <span className={tasks.length > 5 ? "task-number-high" : "task-number-low"}>{tasks.length}</span> {taskWord} on your list!</h2>
            <Task toggleTask={toggleTask}  editTask={editTask} tasks={tasks} removeTask={removeTask} addTask={addTask}/>
            
            <DueToday tasks={tasks}/>
        </div>
    );
  }
  
