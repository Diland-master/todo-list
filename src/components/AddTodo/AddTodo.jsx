import styles from './AddTodo.module.css'
import { useCreateTodo } from '../../hooks'
import { Button } from '../Button/Button'

export const AddTodo = ({ refreshTodos }) => {
	const { value, handleChange, handleAddTodo } = useCreateTodo(refreshTodos)

	return (
		<div className={styles.wrap}>
			<input className={styles.inputText} type="text" value={value} onChange={handleChange} placeholder="Выпить чашечку кофе..." />
			<Button onClick={handleAddTodo}>Добавить задачу</Button>
		</div>
	)
}
