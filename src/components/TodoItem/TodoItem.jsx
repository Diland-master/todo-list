import styles from './TodoItem.module.css'
import { IconDelete, IconEdit } from '../../icons'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_TYPE, deleteTodo, updateTodo } from '../../actions'
import { selectEditingTodoId, selectEditingTodoTitle } from '../../selectors'

export const TodoItem = ({ title, completed, id }) => {
	const dispatch = useDispatch()
	const editingTodoId = useSelector(selectEditingTodoId)
	const editingTodoTitle = useSelector(selectEditingTodoTitle)

	const isEditing = id === editingTodoId

	const handleTodoEdit = () => dispatch({ type: ACTION_TYPE.EDIT_TODO, payload: { id, title } })

	const handleTitleChange = ({ target }) => dispatch({ type: ACTION_TYPE.EDIT_TODO, payload: { title: target.value } })

	const handleTodoSave = () => {
		if (editingTodoTitle === title) {
			dispatch({ type: ACTION_TYPE.FINISH_EDIT_TODO })
			return
		}

		dispatch(updateTodo({ id, title: editingTodoTitle }))
		dispatch({ type: ACTION_TYPE.FINISH_EDIT_TODO })
	}

	const handleCompletedChange = ({ target }) => dispatch(updateTodo({ id, completed: target.checked }))

	const handleDeleteTodo = () => {
		dispatch(deleteTodo(id))
	}

	return (
		<div className={styles.item}>
			{isEditing ? (
				<>
					<input className={styles.titleInput} type="text" value={editingTodoTitle} onChange={handleTitleChange} />
					<button className={styles.iconButton} onClick={handleTodoSave}>
						<IconEdit className={styles.icon} />
					</button>
				</>
			) : (
				<div className={styles.title} onClick={handleTodoEdit}>
					{title}
				</div>
			)}

			<input className={styles.checkbox} type="checkbox" checked={completed} onChange={handleCompletedChange} />

			<button className={`${styles.iconButton} ${styles.iconDelete}`} onClick={handleDeleteTodo}>
				<IconDelete className={styles.icon} />
			</button>
		</div>
	)
}
