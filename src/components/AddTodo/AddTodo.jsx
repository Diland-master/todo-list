import { useState } from 'react'
import styles from './AddTodo.module.css'
import { useDispatch } from 'react-redux'
import { createTodo } from '../../actions'

export const AddTodo = () => {
	const dispatch = useDispatch()

	const [value, setValue] = useState('')

	const handleChange = ({ target }) => setValue(target.value)

	const handleAddTodo = () => {
		dispatch(createTodo(value))
		setValue('')
	}

	return (
		<div className={styles.wrap}>
			<input className={styles.inputText} type="text" value={value} onChange={handleChange} placeholder="Выпить чашечку кофе..." />
			<button className={styles.button} onClick={handleAddTodo}>
				Добавить задачу
			</button>
		</div>
	)
}
