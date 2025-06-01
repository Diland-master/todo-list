import { useState } from 'react'
import { Todo, AddTodo, Search, Loader } from './components'
import { useReadTodo } from './hooks'
import { RefreshContext } from './context'

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
			<RefreshContext value={{ refreshTodos }}>
				<AddTodo />
				{isLoading ? <Loader /> : todos.length > 0 ? <Todo todos={todos} searchText={searchText} /> : <p>Задач нет</p>}
			</RefreshContext>
		</>
	)
}
