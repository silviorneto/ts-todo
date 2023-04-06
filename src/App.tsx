import { useState } from 'react'

import { Header } from './components/Header'
import { Input } from './components/Input';
import { List } from './components/List'

import { ITask } from './components/Task/models';

import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function createNewTask(newContentTask: string) {
    const lastId = tasks[tasks.length - 1]?.id
    const newId = lastId ? lastId + 1 : 1

    const taskToAdd: ITask = {
        id: newId,
        text: newContentTask,
        isDone: false
    }

    setTasks((tasks) => [...tasks, taskToAdd])
}

  function updateTask(taskId: number) {
    const updatedTasks = tasks.map(task => {
      return {
        ...task,
        isDone: task.id === taskId ? !task.isDone : task.isDone
      }
    })

    setTasks(updatedTasks)
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId)
    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <div className={styles.app}>
      <Header />
      <Input 
        onCreateNewTask={createNewTask}
      />
      <List 
        taskList={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
