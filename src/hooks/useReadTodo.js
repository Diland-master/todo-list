import { useEffect, useState } from 'react'
import { TODOS_ENDPOINT } from '../config/api'

export const useReadTodo = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		fetch(TODOS_ENDPOINT)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false))
	}, [refreshTodosFlag])

	return {
		todos,
		isLoading,
	}
}
