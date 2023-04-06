import { useState } from 'react'

import { Header } from './components/Header'
import { Input } from './components/Input';
import { List } from './components/List'

import { ITask } from './components/models';

import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <div className={styles.app}>
      <Header />
      <Input />
      <List />
    </div>
  )
}

export default App
