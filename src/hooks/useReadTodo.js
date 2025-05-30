import { useEffect, useState } from 'react'
import { TODOS_ENDPOINT } from '../constants'

export const useReadTodo = (id) => {
	const [todo, setTodo] = useState(null)
	const [isLoadingTodo, setIsLoadingTodo] = useState(true)
	const [isNotFound, setIsNotFound] = useState(false)

	useEffect(() => {
		setIsLoadingTodo(true)

		fetch(TODOS_ENDPOINT + `/${id}`)
			.then((response) => {
				if (!response.ok) {
					if (response.status === 404) {
						setIsNotFound(true)
					}
					throw new Error('Ошибка при загрузке задачи')
				}
				return response.json()
			})
			.then((loadedTodo) => setTodo(loadedTodo))
			.catch(() => setTodo(null))
			.finally(() => setIsLoadingTodo(false))
	}, [id])

	return {
		todo,
		isLoadingTodo,
		isNotFound,
	}
}
