import FormatDate from './FormatDate';
import './DueToday.css';
export default function DueToday({ tasks }) {
    

    const dueToday = tasks => {
    return tasks.filter(task => task.dueDate === FormatDate());
  }

  let result = dueToday(tasks);

const alertTaskDueToday = () => alert(`You have ${result.length} tasks due today! 💪`)
//alertTaskDueToday();


return (
    <div>
        <h3 className='due-today'>Due Today!</h3>
            {result.map((task) => (
            <div className='due-today-task'> 
            {task.text}
          </div>
    
      ))}
      </div>
)}