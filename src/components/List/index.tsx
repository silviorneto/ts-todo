import { IListProps } from './models' 
import { Task } from "../Task";

import { ClipboardText } from '@phosphor-icons/react'

import styles from './List.module.css'
import { useEffect, useState } from 'react';

export function List({taskList, onUpdateTask, onDeleteTask}: IListProps) {
    const [doneTasks, setDoneTasks] = useState<number>()

    useEffect(() => {
        calculateDoneTasks()
    }, [taskList])

    function calculateDoneTasks() {
        setDoneTasks(taskList.filter(task => task.isDone).length)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.result}>
                <div className={styles.doneTasks}>
                    <p><b>Tarefas criadas</b></p>
                    <span>{taskList.length}</span>
                </div>

                <div className={styles.undoneTasks}>
                    <p><b>Concluídas</b></p>
                    {taskList.length > 0 ? (
                        <span>{doneTasks} de {taskList.length}</span>
                    ) : (
                        <span>{doneTasks}</span>
                    )}
                </div>
            </div>

            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <Task  
                        key={task.id}
                        content={task.text}
                        isDone={task.isDone}
                        taskId={task.id}
                        onUpdateTask={onUpdateTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))
            ) : (
                <div className={styles.noContent}>
                    <ClipboardText 
                        size={50}
                    />
                    <p><b>Você ainda não tem tarefas cadastradas</b></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )}
        </div>
    )
}