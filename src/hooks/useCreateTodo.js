import { useState } from 'react'
import { TODOS_ENDPOINT } from '../constants'

export const useCreateTodo = (refreshTodos) => {
	const [value, setValue] = useState('')

	const handleChange = ({ target }) => setValue(target.value)

	const handleAddTodo = async () => {
		if (!value.trim()) return

		try {
			const response = await fetch(TODOS_ENDPOINT, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: value,
					completed: false,
				}),
			})

			if (!response.ok) {
				throw new Error('Ошибка при добавлении задачи')
			}

			setValue('')
			refreshTodos()
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return {
		value,
		handleChange,
		handleAddTodo,
	}
}
