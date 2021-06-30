import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Cleaning',
        day: 'Senin 20 Juni 2021',
        reminder: true
    },
    {
        id: 2,
        text: 'Sleeping',
        day: 'Senin 22 Juni 2021',
        reminder: false
    },
    {
        id: 3,
        text: 'Breakfast',
        day: 'Senin 25 Juni 2021',
        reminder: false
    },
    {
        id: 4,
        text: 'Date',
        day: 'Senin 29 Juni 2021',
        reminder: true
    },
]);

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTask([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTask(tasks.filter((task) => task.id !== id))
}

// On Toggle
const toggleReminder = (id) => {
  setTask(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder: !task.reminder } : task)
  )
}

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks task={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No task to show'}
    </div>
  );
}

export default App;
