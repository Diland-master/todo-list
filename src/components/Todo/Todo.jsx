import { SortingTodo, TodoItem } from '../../components'
import styles from './Todo.module.css'
import { useSelector } from 'react-redux'
import { selectIsSorting, selectSearchInput, selectTodos } from '../../selectors'

export const Todo = () => {
	const todos = useSelector(selectTodos)
	const searchInput = useSelector(selectSearchInput)
	const isSorting = useSelector(selectIsSorting)

	const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(searchInput.toLowerCase()))

	const sortedTodos = isSorting ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title)) : filteredTodos

	return (
		<>
			{sortedTodos.length > 0 ? (
				<div className={styles.todoListWrap}>
					<SortingTodo />
					{sortedTodos.map(({ id, title, completed }) => (
						<TodoItem key={id} id={id} title={title} completed={completed} />
					))}
				</div>
			) : (
				<p>Ничего не найдено</p>
			)}
		</>
	)
}
