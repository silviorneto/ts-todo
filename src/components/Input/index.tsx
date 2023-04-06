import { ChangeEvent, FormEvent } from 'react'

import { PlusCircle } from '@phosphor-icons/react'
import { IInputProps } from './models'

import styles from './Input.module.css'
import { useState } from 'react'

export function Input({onCreateNewTask}: IInputProps) {
    const [newContentTask, setNewContentTask] = useState('')

    function handleCreateNewTask(e: FormEvent ) {
        e.preventDefault()
        onCreateNewTask(newContentTask)
        setNewContentTask('')
    }

    function handleNewCommentChange(e: ChangeEvent<HTMLInputElement>) {
        setNewContentTask(e.target.value)
    }

    return (
        <form className={styles.container} onSubmit={handleCreateNewTask}>
            <label htmlFor="inputSearch"></label>
            <input 
                name="inputSearch" 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                value={newContentTask}
                onChange={handleNewCommentChange}
            />
            <button 
                type="submit"
                >
                    <span>Criar</span>
                    <PlusCircle />
            </button>
        </form>
    )
}