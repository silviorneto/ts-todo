import { PlusCircle } from '@phosphor-icons/react'

import styles from './Input.module.css'

export function Input() {
    return (
        <form className={styles.container}>
            <label htmlFor=""></label>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button type="submit">
                <span>Criar</span>
                <PlusCircle />
            </button>
        </form>
    )
}