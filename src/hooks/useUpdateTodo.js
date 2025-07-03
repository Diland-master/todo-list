import { useState } from 'react'
import { TODOS_ENDPOINT } from '../config/api'

export const useUpdateTodo = (title, id) => {
	const [newTitle, setNewTitle] = useState(title)
	const [isEditing, setIsEditing] = useState(false)

	const handleTitleChange = ({ target }) => setNewTitle(target.value)

	const handleTodoEdit = () => setIsEditing(true)

	const handleTodoSave = async () => {
		if (newTitle === title) {
			setIsEditing(false)
			return
		}

		updateTodo({ title: newTitle })
	}

	const handleCompletedChange = ({ target }) => updateTodo({ completed: target.checked })

	const updateTodo = async (changes) => {
		try {
			const response = await fetch(TODOS_ENDPOINT + `/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify(changes),
			})

			if (!response.ok) {
				throw new Error('Ошибка при обновлении задачи')
			}
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return {
		newTitle,
		isEditing,
		handleTitleChange,
		handleTodoEdit,
		handleTodoSave,
		handleCompletedChange,
	}
}
