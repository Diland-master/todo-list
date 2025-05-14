import { useState } from 'react'
import { Loader, SortingTodo, TodoItem } from '../../components'
import styles from './Todo.module.css'

export const Todo = ({ todos, isLoading, refreshTodos, searchText }) => {
	const [isSorted, setIsSorted] = useState(false)

	const handleSortChange = (checked) => setIsSorted(checked)

	const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(searchText.toLowerCase()))

	const sortedTodos = isSorted ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title)) : filteredTodos

	return (
		<>
			{isLoading ? (
				<Loader />
			) : sortedTodos.length > 0 ? (
				<div className={styles.todoListWrap}>
					<SortingTodo isSorted={isSorted} onSortChange={handleSortChange} />
					{sortedTodos.map(({ id, title, completed }) => (
						<TodoItem key={id} id={id} title={title} completed={completed} refreshTodos={refreshTodos} />
					))}
				</div>
			) : (
				<p>Ничего не найдено</p>
			)}
		</>
	)
}
