import { TODOS_ENDPOINT } from '../config/api'

export const useDeleteTodo = (id, refreshTodos) => {
	const handleDeleteTodo = async () => {
		try {
			const response = await fetch(TODOS_ENDPOINT + `/${id}`, { method: 'DELETE' })

			if (!response.ok) {
				throw new Error('Ошибка при удалении задачи')
			}

			refreshTodos()
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return { handleDeleteTodo }
}
