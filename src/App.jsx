import { useEffect } from 'react'
import { Todo, AddTodo, Search, Loader } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectTodos } from './selectors'
import { readTodo } from './actions'

export const App = () => {
	const dispatch = useDispatch()
	const todos = useSelector(selectTodos)
	const isLoading = useSelector(selectIsLoading)

	useEffect(() => {
		dispatch(readTodo())
	}, [])

	return (
		<>
			<h1>Список задач</h1>
			<Search />
			<AddTodo />
			{isLoading ? <Loader /> : todos.length > 0 ? <Todo /> : <p>Задач нет</p>}
		</>
	)
}
