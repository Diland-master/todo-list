import { useState } from 'react'
import { AddTodo, Loader, Search, TodoList } from '../../components'
import { useReadTodoList } from '../../hooks'

export const MainPage = ({ refreshTodos, refreshTodosFlag }) => {
	const [searchText, setSearchText] = useState('')

	const { todos, isLoading } = useReadTodoList(refreshTodosFlag)

	const handleSearchChange = (value) => setSearchText(value)

	return (
		<>
			<h1>Список задач</h1>
			<Search searchText={searchText} onSearchChange={handleSearchChange} />
			<AddTodo refreshTodos={refreshTodos} />
			{isLoading ? <Loader /> : todos.length > 0 ? <TodoList todos={todos} refreshTodos={refreshTodos} searchText={searchText} /> : <p>Задач нет</p>}
		</>
	)
}
