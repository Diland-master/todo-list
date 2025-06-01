import styles from './TodoItem.module.css'
import { useDeleteTodo, useUpdateTodo } from '../../hooks'
import { IconDelete, IconEdit } from '../../icons'
import { use } from 'react'
import { RefreshContext } from '../../context'

export const TodoItem = ({ title, completed, id }) => {
	const { refreshTodos } = use(RefreshContext)

	const { newTitle, isEditing, handleTitleChange, handleTodoEdit, handleTodoSave, handleCompletedChange } = useUpdateTodo(title, id, refreshTodos)
	const { handleDeleteTodo } = useDeleteTodo(id, refreshTodos)

	return (
		<div className={styles.item}>
			{isEditing ? (
				<>
					<input className={styles.titleInput} type="text" value={newTitle} onChange={handleTitleChange} />
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
