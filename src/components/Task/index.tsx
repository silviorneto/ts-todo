import { ITaskProps } from './models';

import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react';

export function Task({
    content, 
    isDone, 
    taskId, 
    onUpdateTask, 
    onDeleteTask
}: ITaskProps) {
    function handleUpdateTask() {
        onUpdateTask(taskId)
    }

    function handleDeleteTask() {
        onDeleteTask(taskId)
    }

    return (
        <div className={styles.taskContainer}>
            <input
                className={styles.checkbox}
                type="checkbox" 
                name="itemStatus" 
                id="itemStatus"
                checked={isDone}
                onChange={handleUpdateTask}
            />
            <p 
                className={
                    isDone 
                    ? styles.taskIsDone 
                    : styles.taskIsNotDone}
            >
                {content}
            </p>
            <button
                title='Apagar tarefa'
                onClick={handleDeleteTask}   
            >
                <Trash /> 
            </button>
        </div>
    )
}

 