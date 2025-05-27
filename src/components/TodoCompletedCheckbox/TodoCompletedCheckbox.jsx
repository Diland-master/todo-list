import { useUpdateTodo } from '../../hooks'
import styles from './TodoCompletedCheckbox.module.css'

export const TodoCompletedCheckbox = ({ title, completed, id, refreshTodos }) => {
	const { handleCompletedChange } = useUpdateTodo(title, id, refreshTodos)

	return <input className={styles.checkbox} type="checkbox" checked={completed} onChange={handleCompletedChange} />
}
