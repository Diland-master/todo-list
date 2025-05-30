import { Link } from 'react-router-dom'
import styles from './TodoTitle.module.css'
import { IconEdit } from '../../icons'
import { IconButton } from '../../components'
import { useState } from 'react'
import { useUpdateTodo } from '../../hooks'

export const TodoTitle = ({ title, id, asLink = false }) => {
	const [newTitle, setNewTitle] = useState(title)
	const [isEditing, setIsEditing] = useState(false)

	const { updateTodo } = useUpdateTodo(id)

	const handleTitleChange = ({ target }) => setNewTitle(target.value)

	const handleTodoEdit = () => setIsEditing(true)

	const handleTodoSave = async () => {
		if (newTitle === title) {
			setIsEditing(false)
			return
		}

		await updateTodo({ title: newTitle })
		setIsEditing(false)
	}

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
					{newTitle}
				</div>
			)}
		</>
	)
}
