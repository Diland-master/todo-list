import { useState } from 'react'
import { useUpdateTodo } from '../../hooks'
import styles from './TodoCompletedCheckbox.module.css'

export const TodoCompletedCheckbox = ({ id, completed }) => {
	const [localCompleted, setLocalCompleted] = useState(completed)

	const { updateTodo } = useUpdateTodo(id)

	const handleCompletedChange = async ({ target }) => {
		const { checked } = target

		await updateTodo({ completed: checked })
		setLocalCompleted(checked)
	}

	return <input className={styles.checkbox} type="checkbox" checked={localCompleted} onChange={handleCompletedChange} />
}
