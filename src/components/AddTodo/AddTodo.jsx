import styles from './AddTodo.module.css'
import { useCreateTodo } from '../../hooks'

export const AddTodo = ({ refreshTodos }) => {
	const { value, handleChange, handleAddTodo } = useCreateTodo(refreshTodos)

	return (
		<div className={styles.wrap}>
			<input className={styles.inputText} type="text" value={value} onChange={handleChange} placeholder="Выпить чашечку кофе..." />
			<button className={styles.button} onClick={handleAddTodo}>
				Добавить задачу
			</button>
		</div>
	)
}
