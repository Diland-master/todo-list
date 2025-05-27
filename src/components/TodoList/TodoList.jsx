import { useState } from 'react'
import { SortingTodo, TodoItem, TodoCompletedCheckbox } from '../../components'
import styles from './TodoList.module.css'
import { TodoTitle } from '../TodoTitle/TodoTitle'

export const TodoList = ({ todos, refreshTodos, searchText }) => {
	const [isSorted, setIsSorted] = useState(false)

	const handleSortChange = (checked) => setIsSorted(checked)

	const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(searchText.toLowerCase()))

	const sortedTodos = isSorted ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title)) : filteredTodos

	return (
		<>
			{sortedTodos.length > 0 ? (
				<div className={styles.todoListWrap}>
					<SortingTodo isSorted={isSorted} onSortChange={handleSortChange} />
					{sortedTodos.map(({ id, title, completed }) => (
						<TodoItem key={id}>
							<TodoTitle id={id} title={title} asLink />
							<TodoCompletedCheckbox id={id} title={title} completed={completed} refreshTodos={refreshTodos} />
						</TodoItem>
					))}
				</div>
			) : (
				<p>Ничего не найдено</p>
			)}
		</>
	)
}
