import { useState } from 'react'
import { Todo, AddTodo, Search } from './components'
import { useReadTodo } from './hooks'

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)
	const [searchText, setSearchText] = useState('')

	const { todos, isLoading } = useReadTodo(refreshTodosFlag)

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)

	const handleSearchChange = (value) => setSearchText(value)

	return (
		<>
			<h1>Список задач</h1>
			<Search searchText={searchText} onSearchChange={handleSearchChange} />
			<AddTodo refreshTodos={refreshTodos} />
			{todos.length > 0 ? <Todo todos={todos} isLoading={isLoading} refreshTodos={refreshTodos} searchText={searchText} /> : <p>Задач нет</p>}
		</>
	)
}
