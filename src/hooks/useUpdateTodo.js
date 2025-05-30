import { TODOS_ENDPOINT } from '../constants'

export const useUpdateTodo = (id) => {
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
		updateTodo,
	}
}
