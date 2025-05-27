import { useNavigate } from 'react-router-dom'
import { TODOS_ENDPOINT } from '../constants'

export const useDeleteTodo = (id) => {
	const navigate = useNavigate()

	const handleDeleteTodo = async () => {
		try {
			const response = await fetch(TODOS_ENDPOINT + `/${id}`, { method: 'DELETE' })

			if (!response.ok) {
				throw new Error('Ошибка при удалении задачи')
			}

			navigate('/')
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return { handleDeleteTodo }
}
