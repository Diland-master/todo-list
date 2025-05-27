import { Link } from 'react-router-dom'
import styles from './TodoTitle.module.css'
import { useUpdateTodo } from '../../hooks'
import { IconEdit } from '../../icons'
import { IconButton } from '../../components'

export const TodoTitle = ({ title, id, refreshTodos, asLink = false }) => {
	const { isEditing, newTitle, handleTitleChange, handleTodoSave, handleTodoEdit } = useUpdateTodo(title, id, refreshTodos)

	if (asLink) {
		return (
			<Link to={`/task/${id}`} className={`${styles.title} ${styles.ellipsis}`}>
				{title}
			</Link>
		)
	}

	return (
		<>
			{isEditing ? (
				<>
					<textarea className={styles.titleTextarea} value={newTitle} onChange={handleTitleChange} />
					<IconButton onClick={handleTodoSave}>
						<IconEdit className={styles.icon} />
					</IconButton>
				</>
			) : (
				<div className={styles.title} onClick={handleTodoEdit}>
					{title}
				</div>
			)}
		</>
	)
}
